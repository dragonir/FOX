/**
 * On success the jsonp script executes the call 'signupHandler({result:"OK"})'.  
 * This function will work as a fallback. You should override this handler, by redefining the 'signupHandler'
 * function in the global scope.
 * The form node is assigned to this.submittedForm by foxAjaxSubmit(). 
 * @param {object} data can be ignored but should be {result:"OK"}  
 */
function signupHandler(genres) {
    signupHandler.foxSignUp.sendTracking();
    var url = 'https://www.foxmovies.com/recommendations';
    var data = {
        count: signupHandler.foxSignUp.numberOfRecommendations
    };
    if(genres && genres.length){
        data.genres = genres;
    }
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        complete: function(response){
            if(response.responseText){
                var data = JSON.parse(response.responseText);
                signupHandler.foxSignUp.ajaxCallback(data);
            }
        }
    });

};

function FoxSignup(config){
    config = config || {};
    this.emailRequiredText = "Please enter an email address";
    this.emailFormatText = "Your email address must be in the format of name@domain.com";
    this.thankYouMessage = "<h2>Thank you!</h2><p>Your submission has been received.</p>";
    this.firstNameInvalidChars = "Your first name may only contain letters.";
    this.lastNameInvalidChars = "Your last name may only contain letters.";
    this.recommendationsTitle = "<h3 class='movie-recommendations-title'>Some movies you might like:</h3>"; 
    this.called = false;
    this.showRecommendations = false; 
    this.numberOfRecommendations = 6;
    this.postUrl = 'https://forms.foxfilm.com/sqs/signup_handler.php';
    this.translateTexts(config); 
};

FoxSignup.prototype.setNumberOfRecommendation = function(value){
    this.numberOfRecommendations = value;
}

FoxSignup.prototype.translateTexts = function(translation){
    for (var prop in translation) { this[prop] = translation [prop]; }
}

FoxSignup.prototype.ajaxCallback = function(data){
    if(this.onAjaxCallback){
        this.onAjaxCallback();
    }
    
    var outer = $('<div class="signup-result" />');
    outer.html(this.thankYouMessage); 
    if (this.showRecommendations) { 
      outer.append(this.recommendationsTitle);

      for(var i=0;i<data.length; i++) {
        var movie = data[i];

        var link = $('<a>');
        link.attr('href',movie.url);
        link.attr('target','_blank');
        var img = new Image();

        img.src = movie.image_url;
        var movieTitle = $('<div>');
        movieTitle.text(movie.text);
        var movieDiv  = $('<div>');
        link.append(img);
        link.append(movieTitle);
        movieDiv.append(link);
        movieDiv.addClass('movie-recommendation');
        outer.append(movieDiv);
      }
    } 
 
    this.form.html(outer);
};

FoxSignup.prototype.sendTracking = function(){
    if (typeof dataLayer == 'object') {
        dataLayer.push({
            'forms': this.trackEvent,
            'label': $(signupHandler.foxSignUp.form).find('[name=REG_SOURCE]').prop('value'),
            'event': 'formSuccess'
        });
    }
}

$(function() {
    /**
     * Extend our validation for first name.
     * @return boolean
     */
    if ($.validator) {
        $.validator.addMethod(
            'firstNameRegEx', function(value, element) {
                return this.optional(element) || !(/\=|\#|\$|\[|\]|\{|\}|\\|\*|\"|<|>|\^|\_|\||%/i.test(value));
        });
    }

    /**
     * Extend our validation for last name.
     * @return boolean
     */
    if ($.validator) {
        $.validator.addMethod(
            'lastNameRegEx', function(value, element) {
                return this.optional(element) || !(/\=|\#|\$|\[|\]|\{|\}|\\|\*|\"|<|>|\^|\_|\||%/i.test(value));
        });
    }
});

/**
 * Minimum validation and submit handler options object for jQuery form validate() 
 * Add and override validation options but leave the submitHandler.  
 * @see {@link http://jqueryvalidation.org/validate|jQuery Validation Plugin}
 * @return {object} preconfigured 'options' object for jQuery formvalidate()
 */

FoxSignup.prototype.formValidatorOptions = function() {
    var self = this;

    return {
        rules: {
            EMAIL_ADDRESS_: {
                required: true,
                email: true
            },
            first_name: {
                firstNameRegEx: true
            },
            last_name: {
                lastNameRegEx: true
            }
        },
        messages: {
            EMAIL_ADDRESS_: {
                required: this.emailRequiredText,
                email: this.emailFormatText
            },
            first_name: {
                firstNameRegEx: this.firstNameInvalidChars
            },
            last_name: {
                lastNameRegEx: this.lastNameInvalidChars
            }
        },
        errorPlacement: function (error, element) {
            error.insertBefore(element);
        },
        submitHandler: function(form){
            self.ajaxSubmitHandler.call(self, form);
            return false;
        }
    };
};

/**
 * Callback to send form data to the collector, assign to form 'onsubmit' or validate() 'submitHandler'. Disables form buttons and updates signupHandler allowing UI response targeting. 
 * @param {object} arg - Either an event - when used as 'onsubmit' handler on a form - or a form node - when used as 'submitHandler' in jQuery.validate(). 
 * @return {boolean} false.
 */
FoxSignup.prototype.ajaxSubmitHandler = function(arg) { 
    var form;
    if (typeof arg.target == 'object' && typeof arg.preventDefault == 'function') { // we're used as onsubmit function
        arg.preventDefault();
        form = $(arg.target);
    } else { // we're used as validate() submitHandler
        form = $(arg);
    }

    var data=this.prepareSignupForm(form);

    if (!data) {
        return false; 
    }

    this.ajaxSignup( this.form.attr('action') , data, 'formsignup');
}

/**
 * Check for multiple submits, disable buttons, check dev defaults, update signupHandler and collect form data.
 * @param {object} submittedForm - jQuery DOM element of the form. The element will be assigned to signupHandler.submittedForm allowing targeting of UI responses. All buttons will be disabled to prevent double submissions.
 * @param {string} signupType - either 'signup' or 'fbsignup'. Will be assigned to signupHandler.trackEvent allowing tracking.
 * @return {object} data - plainObject with the form data or null if submission should be prevented
 */

FoxSignup.prototype.prepareSignupForm = function(submittedForm)  {
    this.form = submittedForm;
    if (this._preventMultipleSubmit()){
        return null; 
    }
    
    var inputs=this.form.serializeArray();
    var formData={};
    
    $.each( inputs, function( i, field ) {
        formData[field.name.toLowerCase()]=field.value;
    });

    if (this._preventDevDefaults(formData)){
        return null; 
    }
    
    // update signupHandler
    this.form = submittedForm;  
    signupHandler.foxSignUp = this;
    

    return formData; 
    
}


FoxSignup.prototype.disable = function(){
    $(this).prop('disabled', true);
};
/**
 * Check if the form is already being submitted. 
 * @return true submit needs to be aborted, otherwise false.
 */
FoxSignup.prototype._preventMultipleSubmit = function() {
    if (!this.called){
        this.called = true;
        return false;
    }

    this.form.find("input[type='submit']").each(this.disable);               
    this.form.find("button").each(this.disable);
    this.form.find("input[type='button']").each(this.disable);
    return false;
}
// check defaults
FoxSignup.prototype.devCheck = function (data, field, check) {
    if (typeof data[field] == 'string' && data[field] && data[field] !== 'TEST' && data[field] !== check) {
        return true;
    }

    alert('Developer, your ' + field + ' value is not defined properly, please contact Fox IT');
    return false;
};

/**
 * Check if dev defaults are present in the HTML. 
 * @return true submit needs to be aborted, otherwise false.
 */
FoxSignup.prototype._preventDevDefaults = function(data) {
    if (!this.devCheck(data, '_ri_', 'PROVIDED_BY_FOX') || !this.devCheck(data, 'reg_source', 'YYYYMMDD_TITLE_OR_EVENT') ) {
        return true;
    }

    return false;
}

/**
 * Send data to the collector. 
 * @param {string} url - the url of the collector.          
 * @param {object} data - the data to be sent. Must include at least '_ri_' and 'EMAIL_ADDRESS_'.           
 * @return {boolean} false.
 */

FoxSignup.prototype.ajaxSignup = function( url, data, signupType, genres  ) {
    this.form.prepend('<div class="sign-up-loader"></div>');
    if(this.onAjaxSignup){
        this.onAjaxSignup();
    }
    this.trackEvent =signupType;
    // We are now putting all signups on a aws sqs and we do our branching
    // logic on the server end.
    var postUrl = this.postUrl; 

    if (!data.ri_url) 
	data.ri_url = url; 
    else 
	postUrl=url; 

    $.ajax({
        type: 'POST',
        url: postUrl,
        data: data,
        crossDomain: true,
        success: function(response) {
            signupHandler(genres);
        }
    });

    return false;
}

/**
 * Load the facebook sdk and attach the handler to the facebook button
 * @param {element} button - the button to receive the click handler
 * @param {string} fbAppId - the facebook app id for this site
 */ 
FoxSignup.prototype.facebookSignup = function(button, fbAppId) {
    this.fbAppId = fbAppId;
    var $button=$(button); 

    if(window.fbAsyncInit){
        $button.click(this.facebookSignupButtonHandler.bind(this));
    } else {
        var self = this;
        window.fbAsyncInit = function() {
            FB.init({
                appId      : fbAppId,
                status     : false, // don't check login status
                cookie     : false, // don't enable cookies to allow the server to access the session
                xfbml      : false,  // don't   parse XFBML
                version    : 'v2.0'
            });

            $button.click(self.facebookSignupButtonHandler.bind(self)); 

            if(self.onfAsyncInit) {
                self.onfAsyncInit();
            }

        };

        // Load the SDK asynchronously
        (function(d){
         var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement('script'); js.id = id; js.async = true;
         js.src = "https://connect.facebook.net/en_US/all.js";
         ref.parentNode.insertBefore(js, ref);
        }(document));
    }
 
  this.showRecommendations=true;  // required by FB
}

/**
 * Callback for logging in to Facebook and sending user data to the collector, assign to facebook button click().
 * @param {Event} arg - jQuery click() event 
 * @return {boolean} false.
 */
FoxSignup.prototype.facebookSignupButtonHandler = function(event) {
    event.preventDefault();
    var $button = $(event.target);
    var form=$button.closest('form');
    var formData=this.prepareSignupForm(form);
    
    if (!formData) {
        return false;
    }
    
    var collectorUrl=form.attr('action');
    var self = this;

    FB.login(
        function (loginResponse) {
            if(loginResponse.authResponse){
                var accessToken = loginResponse.authResponse.accessToken;   
                FB.api('/me', 
                    { fields: 'name,email,first_name,middle_name,last_name,gender,birthday,age_range,locale,timezone,location,movies{genre}'},
                    function(response) {
                        if (typeof response.id == 'undefined'){
                            return; 
                        }
                        var location = {};
                        var genres = [];

                        if(response.location){
                            location = response.location;
                        }
                        var data = {
                            '_ri_'           : formData['_ri_'],
                            'reg_source'     : formData['reg_source'],
                            'email_address_' : response.email,
                            'first_name'     : response.first_name,
                            'middle_name'    : response.middle_name || '',
                            'last_name'      : response.last_name,
                            'locale'         : response.locale || '',
                            'timezone'       : response.timezone,
                            'fb_age_min'     : response.age_range.min || '',
                            'fb_age_max'     : response.age_range.max || '',
                            'fb_location'    : location.name  || '',
                            'fb_user'        : response.id,
                            'fb_app'         : self.fbAppId,
                            'fb_token'       : accessToken
                        };

                        if (response.gender==='female') { 
                            data.gender='F';
                        } else if (response.gender==='male') {
                            data.gender='M';
                        }

                        if (response.birthday && response.birthday.match(/^..\/..\/....$/)) {
                              data.dob_year = response.birthday.replace(/^.+\//,'');
                              data.dob_month = response.birthday.replace(/\/.*$/,'');
                        }

                        if (formData['newsletter_movies']) {
                            data.newsletter_movies = formData['newsletter_movies'];
                        }

                        if (formData['newsletter_home']) {
                            data.newsletter_home = formData['newsletter_home'];
                        }

			if (formData['ri_url']) {
				data.ri_url = formData['ri_url'];
			}

                        if(response.movies && response.movies.data.length){
                            var movieData = response.movies.data;
                            for(var i=0;i<movieData.length; i++){
                                if(movieData[i].genre){
                                    var genre = movieData[i].genre.trim();
                                    var genreData = genre.split(',');
                                    if(typeof genreData === 'string'){
                                        if(genres.indexOf(genre) == -1){
                                            genres.push(genre);
                                        }    
                                    } else {
                                        for(var j=0;j<genreData.length; j++){
                                            var genreDataItem = genreData[j].trim();
                                            if(genres.indexOf(genreDataItem) == -1){
                                                genres.push(genreDataItem);
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        self.ajaxSignup (collectorUrl , data, 'fbsignup', genres);
                    }
                );    
            } 
        }, 
        { 
            scope: 'email,user_likes,public_profile,user_location, user_birthday'
        }
    );
                        
    return false; 

} ;
