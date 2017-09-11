(function(){var aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,e,d){a=b(a,e);d&&Reflect.setPrototypeOf(a,d.prototype);return a}}return function(a,b,d){void 0===d&&(d=a);
d=aa(d.prototype||Object.prototype);return Function.prototype.apply.call(a,d,b)||d}})();
var k=this;function l(a){return"string"==typeof a}
function ba(a){a=a.split(".");for(var b=k,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
;var ca=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function p(a,b){return a<b?-1:a>b?1:0}
;var da=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ea=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var e=a.length,d=[],f=0,g=l(a)?a.split(""):a,h=0;h<e;h++)if(h in g){var m=g[h];
b.call(c,m,h,a)&&(d[f++]=m)}return d};
function fa(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c],d=n(e);if("array"==d||"object"==d&&"number"==typeof e.length){d=a.length||0;var f=e.length||0;a.length=d+f;for(var g=0;g<f;g++)a[d+g]=e[g]}else a.push(e)}}
;var q;a:{var ha=k.navigator;if(ha){var ia=ha.userAgent;if(ia){q=ia;break a}}q=""};var ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function la(a,b){for(var c,e,d=1;d<arguments.length;d++){e=arguments[d];for(c in e)a[c]=e[c];for(var f=0;f<ka.length;f++)c=ka[f],Object.prototype.hasOwnProperty.call(e,c)&&(a[c]=e[c])}}
;function ma(a,b){var c=na;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var oa=-1!=q.indexOf("Opera"),t=-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE"),pa=-1!=q.indexOf("Edge"),u=-1!=q.indexOf("Gecko")&&!(-1!=q.toLowerCase().indexOf("webkit")&&-1==q.indexOf("Edge"))&&!(-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE"))&&-1==q.indexOf("Edge"),qa=-1!=q.toLowerCase().indexOf("webkit")&&-1==q.indexOf("Edge");function ra(){var a=k.document;return a?a.documentMode:void 0}
var sa;a:{var ta="",ua=function(){var a=q;if(u)return/rv\:([^\);]+)(\)|;)/.exec(a);if(pa)return/Edge\/([\d\.]+)/.exec(a);if(t)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(qa)return/WebKit\/(\S+)/.exec(a);if(oa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ua&&(ta=ua?ua[1]:"");if(t){var va=ra();if(null!=va&&va>parseFloat(ta)){sa=String(va);break a}}sa=ta}var wa=sa,na={};
function xa(a){ma(a,function(){for(var b=0,c=ca(String(wa)).split("."),e=ca(String(a)).split("."),d=Math.max(c.length,e.length),f=0;0==b&&f<d;f++){var g=c[f]||"",h=e[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=p(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||p(0==g[2].length,0==h[2].length)||p(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var ya;var za=k.document;ya=za&&t?ra()||("CSS1Compat"==za.compatMode?parseInt(wa,10):5):void 0;var Aa;if(!(Aa=!u&&!t)){var Ba;if(Ba=t)Ba=9<=Number(ya);Aa=Ba}Aa||u&&xa("1.9.1");t&&xa("9");function x(a,b){this.width=a;this.height=b}
x.prototype.aspectRatio=function(){return this.width/this.height};
x.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
x.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
x.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ca(){var a=document;return l("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var y=window,z=document,Da=y.location;function Ea(){}
var Fa=/\[native code\]/;function A(a,b,c){return a[b]=a[b]||c}
function Ga(a){a=a.sort();for(var b=[],c=void 0,e=0;e<a.length;e++){var d=a[e];d!=c&&b.push(d);c=d}return b}
function B(){var a;if((a=Object.create)&&Fa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var C=A(y,"gapi",{});var G;G=A(y,"___jsl",B());A(G,"I",0);A(G,"hel",10);function Ha(){var a=Da.href;if(G.dpo)var b=G.h;else{b=G.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),e=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||e.exec(a)))try{b=decodeURIComponent(a[2])}catch(d){}}return b}
function Ia(a){var b=A(G,"PQ",[]);G.PQ=[];var c=b.length;if(0===c)a();else for(var e=0,d=function(){++e===c&&a()},f=0;f<c;f++)b[f](d)}
function Ja(a){return A(A(G,"H",B()),a,B())}
;var H=A(G,"perf",B());A(H,"g",B());var Ka=A(H,"i",B());A(H,"r",[]);B();B();function I(a,b,c){b&&0<b.length&&(b=La(b),c&&0<c.length&&(b+="___"+La(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=A(Ka,"_p",B()),A(b,c,B())[a]=(new Date).getTime(),b=H.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function La(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Ma=B(),J=[];function K(a){throw Error("Bad hint"+(a?": "+a:""));}
J.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?G[b]=A(G,b,[]).concat(c):A(G,b,c)}if(b=a.u)a=A(G,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Na=/^(\/[a-zA-Z0-9_\-]+)+$/,Oa=[/\/amp\//,/\/amp$/,/^\/amp$/],Pa=/^[a-zA-Z0-9\-_\.,!]+$/,Qa=/^gapi\.loaded_[0-9]+$/,Ra=/^[a-zA-Z0-9,._-]+$/;function Sa(a,b,c,e){var d=a.split(";"),f=d.shift(),g=Ma[f],h=null;g?h=g(d,b,c,e):K("no hint processor for: "+f);h||K("failed to generate load url");b=h;c=b.match(Ta);(e=b.match(Ua))&&1===e.length&&Va.test(b)&&c&&1===c.length||K("failed sanity: "+a);return h}
function Wa(a,b,c,e){function d(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Xa(a);Qa.test(c)||K("invalid_callback");b=Ya(b);e=e&&e.length?Ya(e):null;return[encodeURIComponent(a.g).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",d(a.version),"/m=",d(b),e?"/exm="+d(e):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+d(a.a):"",a.c?"/rs="+d(a.c):"",a.f?"/t="+d(a.f):"","/cb=",d(c)].join("")}
function Xa(a){"/"!==a.charAt(0)&&K("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))K("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var e=0,d=b.length;e<d;++e){var f=b[e].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Na.test(b)||K("invalid_prefix");c=0;for(e=Oa.length;c<e;++c)Oa[c].test(b)&&K("invalid_prefix");c=M(a,"k",
!0);e=M(a,"am");d=M(a,"rs");a=M(a,"t");return{g:b,version:c,a:e,c:d,f:a}}
function Ya(a){for(var b=[],c=0,e=a.length;c<e;++c){var d=a[c].replace(/\./g,"_").replace(/-/g,"_");Ra.test(d)&&b.push(d)}return b.join(",")}
function M(a,b,c){a=a[b];!a&&c&&K("missing: "+b);if(a){if(Pa.test(a))return a;K("invalid: "+b)}return null}
var Va=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ua=/\/cb=/g,Ta=/\/\//g;function Za(){var a=Ha();if(!a)throw Error("Bad hint");return a}
Ma.m=function(a,b,c,e){(a=a[0])||K("missing_hint");return"https://apis.google.com"+Wa(a,b,c,e)};
var N=decodeURI("%73cript"),$a=/^[-+_0-9\/A-Za-z]+={0,2}$/;function ab(a,b){for(var c=[],e=0;e<a.length;++e){var d=a[e],f;if(f=d){a:{for(f=0;f<b.length;f++)if(b[f]===d)break a;f=-1}f=0>f}f&&c.push(d)}return c}
function bb(){var a=G.nonce;if(void 0!==a)return a&&a===String(a)&&a.match($a)?a:G.nonce=null;var b=A(G,"us",[]);if(!b||!b.length)return G.nonce=null;for(var c=z.getElementsByTagName(N),e=0,d=c.length;e<d;++e){var f=c[e];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match($a))return G.nonce=a}}return null}
function cb(a){if("loading"!=z.readyState)db(a);else{var b=bb(),c="";null!==b&&(c=' nonce="'+b+'"');z.write("<"+N+' src="'+encodeURI(a)+'"'+c+"></"+N+">")}}
function db(a){var b=z.createElement(N);b.setAttribute("src",a);a=bb();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=z.getElementsByTagName(N)[0])?a.parentNode.insertBefore(b,a):(z.head||z.body||z.documentElement).appendChild(b)}
function eb(a,b){var c=b&&b._c;if(c)for(var e=0;e<J.length;e++){var d=J[e][0],f=J[e][1];f&&Object.prototype.hasOwnProperty.call(c,d)&&f(c[d],a,b)}}
function fb(a,b,c){gb(function(){var c=b===Ha()?A(C,"_",B()):B();c=A(Ja(b),"_",c);a(c)},c)}
function hb(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);eb(a,c);var e=a?a.split(":"):[],d=c.h||Za(),f=A(G,"ah",B());if(f["::"]&&e.length){for(var g=[],h=null;h=e.shift();){var m=h.split(".");m=f[h]||f[m[1]&&"ns:"+m[0]||""]||d;var D=g.length&&g[g.length-1]||null,E=D;D&&D.hint==m||(E={hint:m,b:[]},g.push(E));E.b.push(h)}var L=g.length;if(1<L){var F=c.callback;F&&(c.callback=function(){0==--L&&F()})}for(;e=g.shift();)ib(e.b,c,e.hint)}else ib(e||[],c,d)}
function ib(a,b,c){function e(a,b){if(L)return 0;y.clearTimeout(E);F.push.apply(F,r);var d=((C||{}).config||{}).update;d?d(f):f&&A(G,"cu",[]).push(f);if(b){I("me0",a,T);try{fb(b,c,D)}finally{I("me1",a,T)}}return 1}
a=Ga(a)||[];var d=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,m=b.onerror,D=void 0;"function"==typeof m&&(D=m);var E=null,L=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";m=A(Ja(c),"r",[]).sort();var F=A(Ja(c),"L",[]).sort(),T=[].concat(m);0<g&&(E=y.setTimeout(function(){L=!0;h()},g));
var r=ab(a,F);if(r.length){r=ab(a,m);var v=A(G,"CP",[]),w=v.length;v[w]=function(a){function b(){var a=v[w+1];a&&a()}
function c(b){v[w]=null;e(r,a)&&Ia(function(){d&&d();b()})}
if(!a)return 0;I("ml1",r,T);0<w&&v[w-1]?v[w]=function(){c(b)}:c(b)};
if(r.length){var ja="loaded_"+G.I++;C[ja]=function(a){v[w](a);C[ja]=null};
a=Sa(c,r,"gapi."+ja,m);m.push.apply(m,r);I("ml0",r,T);b.sync||y.___gapisync?cb(a):db(a)}else v[w](Ea)}else e(r)&&d&&d()}
function gb(a,b){if(G.hee&&0<G.hel)try{return a()}catch(c){b&&b(c),G.hel--,hb("debug_error",function(){try{window.___jsl.hefn(c)}catch(e){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
C.load=function(a,b){return gb(function(){return hb(a,b)})};function jb(a){if(a.classList)return a.classList;a=a.className;return l(a)&&a.match(/\S+/g)||[]}
function kb(a,b){if(a.classList)var c=a.classList.contains(b);else c=jb(a),c=0<=da(c,b);return c}
function lb(a,b){a.classList?a.classList.add(b):kb(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function mb(a,b){a.classList?a.classList.remove(b):kb(a,b)&&(a.className=ea(jb(a),function(a){return a!=b}).join(" "))}
;function nb(a){var b=a.offsetWidth,c=a.offsetHeight,e=qa&&!b&&!c;if((void 0===b||e)&&a.getBoundingClientRect){a:{try{var d=a.getBoundingClientRect()}catch(f){d={left:0,top:0,right:0,bottom:0};break a}t&&a.ownerDocument.body&&(a=a.ownerDocument,d.left-=a.documentElement.clientLeft+a.body.clientLeft,d.top-=a.documentElement.clientTop+a.body.clientTop)}return new x(d.right-d.left,d.bottom-d.top)}return new x(b,c)}
;var O=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{},P=["yt","config_"],Q=k;P[0]in Q||!Q.execScript||Q.execScript("var "+P[0]);for(var R;P.length&&(R=P.shift());)P.length||void 0===O?Q[R]&&Q[R]!==Object.prototype[R]?Q=Q[R]:Q=Q[R]={}:Q[R]=O;function ob(){return ba("gapi.iframes.getContext")()}
function pb(){return ba("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function qb(a){try{a.register("msg-hovercard-subscription",rb,pb())}catch(b){}}
function rb(a){if(a){a=!!a.isSubscribed;var b=Ca();a?mb(b,"subscribe"):lb(b,"subscribe");a?lb(b,"subscribed"):mb(b,"subscribed")}}
;function S(){var a=Ca();b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=nb(a);else{b=a.style;var c=b.display,e=b.visibility,d=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=nb(a);b.display=c;b.position=d;b.visibility=e}a={width:a.width,
height:a.height};ob().ready(a,null,void 0);a=pb();ob().addOnOpenerHandler(qb,null,a)}
var U=S;U=void 0===U?{}:U;"function"==n(U)&&(U={callback:U});S=U;
if(S.gapiHintOverride||"GAPI_HINT_OVERRIDE"in O&&O.GAPI_HINT_OVERRIDE){var sb;var V=document.location.href;if(-1!=V.indexOf("?")){V=(V||"").split("#")[0];var tb=V.split("?",2),W=1<tb.length?tb[1]:tb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var ub=W.split("&"),X={},vb=0,wb=ub.length;vb<wb;vb++){var Y=ub[vb].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),xb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==n(X[Z])?fa(X[Z],xb):X[Z]=
[X[Z],xb]:X[Z]=xb}}sb=X}else sb={};var yb=sb.gapi_jsh;yb&&la(S,{_c:{jsl:{h:yb}}})}hb("gapi.iframes:gapi.iframes.style.common",S);}).call(this);
