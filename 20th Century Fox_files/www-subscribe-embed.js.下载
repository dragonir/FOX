(function(){for(var l,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ea=ba,fa=["Reflect",
"construct"],ha=0;ha<fa.length-1;ha++){var ia=fa[ha];ia in ea||(ea[ia]={});ea=ea[ia]}var ja=fa[fa.length-1];da!=ea[ja]&&null!=da&&aa(ea,ja,{configurable:!0,writable:!0,value:da});var m=this;function ka(a){return void 0!==a}
function p(a){return"string"==typeof a}
function la(a){return"number"==typeof a}
function q(a){a=a.split(".");for(var b=m,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function na(){}
function oa(a){a.ba=void 0;a.v=function(){return a.ba?a.ba:a.ba=new a}}
function pa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function qa(a){var b=pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ra(a){return"function"==pa(a)}
function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ta(a){return a[ua]||(a[ua]=++va)}
var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,arguments)}
function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=wa:t=xa;return t.apply(null,arguments)}
function ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var za=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&ka(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function v(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Rb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function Aa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Aa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
v(Aa,Error);Aa.prototype.name="CustomError";var Ba;var Ca=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Da=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Ea(a){a=ka(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Da("0",Math.max(0,2-b))+a}
function Fa(a,b){for(var c=0,d=Ca(String(a)).split("."),e=Ca(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=Ga(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||Ga(0==h[2].length,0==k[2].length)||Ga(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function Ga(a,b){return a<b?-1:a>b?1:0}
function Ha(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function Ia(a){var b=p(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Ja=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},La=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Ma=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function Na(a,b){a:{var c=a.length;for(var d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:p(a)?a.charAt(c):a[c]}
function Oa(a,b){return 0<=Ja(a,b)}
function Pa(a){return Array.prototype.concat.apply([],arguments)}
function Qa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ra(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Sa(a,b,c,d){return Array.prototype.splice.apply(a,Ta(arguments,1))}
function Ta(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ua(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==pa(d))for(var e=0;e<d.length;e+=8192)for(var f=Ua.apply(null,Ta(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;var Va;a:{var Wa=m.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){Va=Xa;break a}}Va=""}function y(a){return-1!=Va.indexOf(a)}
;function Ya(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Za(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}
function $a(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function ab(a){var b=bb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function cb(a){for(var b in a)return!1;return!0}
var db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<db.length;f++)c=db[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function fb(){return y("Safari")&&!(gb()||y("Coast")||y("Opera")||y("Edge")||y("Silk")||y("Android"))}
function gb(){return(y("Chrome")||y("CriOS"))&&!y("Edge")}
function hb(){return y("Android")&&!(gb()||y("Firefox")||y("Opera")||y("Silk"))}
;function ib(){return y("iPhone")&&!y("iPod")&&!y("iPad")}
function jb(){return ib()||y("iPad")||y("iPod")}
;function kb(a){kb[" "](a);return a}
kb[" "]=na;function lb(a,b){var c=mb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var nb=y("Opera"),z=y("Trident")||y("MSIE"),ob=y("Edge"),pb=ob||z,qb=y("Gecko")&&!(-1!=Va.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),rb=-1!=Va.toLowerCase().indexOf("webkit")&&!y("Edge"),sb=y("Macintosh"),tb=y("Windows"),ub=y("Android"),vb=ib(),wb=y("iPad"),xb=y("iPod"),yb=jb();function zb(){var a=m.document;return a?a.documentMode:void 0}
var Ab;a:{var Bb="",Cb=function(){var a=Va;if(qb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ob)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(rb)return/WebKit\/(\S+)/.exec(a);if(nb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Cb&&(Bb=Cb?Cb[1]:"");if(z){var Db=zb();if(null!=Db&&Db>parseFloat(Bb)){Ab=String(Db);break a}}Ab=Bb}var Eb=Ab,mb={};function Fb(a){return lb(a,function(){return 0<=Fa(Eb,a)})}
var Gb;var Hb=m.document;Gb=Hb&&z?zb()||("CSS1Compat"==Hb.compatMode?parseInt(Eb,10):5):void 0;var Ib=!qb&&!z||z&&9<=Number(Gb)||qb&&Fb("1.9.1"),Jb=z&&!Fb("9");function Kb(){this.b="";this.f=Lb}
Kb.prototype.aa=!0;Kb.prototype.Z=function(){return this.b};
var Mb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Lb={};function Nb(a){var b=new Kb;b.b=a;return b}
Nb("about:blank");function Ob(){this.b="";this.f=Pb}
Ob.prototype.aa=!0;Ob.prototype.Z=function(){return this.b};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob&&a.f===Pb)return a.b;pa(a);return"type_error:SafeHtml"}
var Pb={};function Rb(a){var b=new Ob;b.b=a;return b}
Rb("<!DOCTYPE html>");Rb("");Rb("<br>");function C(a,b){this.x=ka(a)?a:0;this.y=ka(b)?b:0}
C.prototype.equals=function(a){return a instanceof C&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Sb(a,b){return new C(a.x-b.x,a.y-b.y)}
C.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
C.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
C.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Tb(a,b){this.width=a;this.height=b}
l=Tb.prototype;l.fb=function(){return this.width*this.height};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!this.fb()};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ub(a){return a?new Vb(Wb(a)):Ba||(Ba=new Vb)}
function D(a){return p(a)?document.getElementById(a):a}
function Xb(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Yb(document,"*",a,b)}
function E(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(""+(a?"."+a:"")):Yb(c,"*",a,b)[0]||null}return c||null}
function Yb(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Oa(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Zb(a,b){Ya(b,function(b,d){b&&b.aa&&(b=b.Z());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:$b.hasOwnProperty(d)?a.setAttribute($b[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var $b={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function ac(a){a=a.document;a=bc(a)?a.documentElement:a.body;return new Tb(a.clientWidth,a.clientHeight)}
function cc(a){var b=dc(a);a=ec(a);return z&&Fb("10")&&a.pageYOffset!=b.scrollTop?new C(b.scrollLeft,b.scrollTop):new C(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function dc(a){return a.scrollingElement?a.scrollingElement:!rb&&bc(a)?a.documentElement:a.body||a.documentElement}
function ec(a){return a.parentWindow||a.defaultView}
function bc(a){return"CSS1Compat"==a.compatMode}
function fc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function gc(a){return Ib&&void 0!=a.children?a.children:Ka(a.childNodes,function(a){return 1==a.nodeType})}
function hc(a){return sa(a)&&1==a.nodeType}
function ic(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Wb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function jc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Wb(a).createTextNode(String(b)))}}
function kc(a,b){var c=[];return lc(a,b,c,!0)?c[0]:void 0}
function lc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||lc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var mc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},nc={IMG:" ",BR:"\n"};function oc(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!pc(a)||qc(a)):pc(a)&&qc(a))&&z){var c;!ra(a.getBoundingClientRect)||z&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function pc(a){return z&&!Fb("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function qc(a){a=a.tabIndex;return la(a)&&0<=a&&32768>a}
function rc(a){if(Jb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];sc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Jb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function sc(a,b,c){if(!(a.nodeName in mc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in nc)b.push(nc[a.nodeName]);else for(a=a.firstChild;a;)sc(a,b,c),a=a.nextSibling}
function tc(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return uc(a,function(a){return(!e||a.nodeName==e)&&(!c||p(a.className)&&Oa(a.className.split(/\s+/),c))},!0,d)}
function F(a,b){return tc(a,null,b,void 0)}
function uc(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Vb(a){this.b=a||m.document||document}
Vb.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Vb.prototype.createElement=function(a){return this.b.createElement(String(a))};
Vb.prototype.appendChild=function(a,b){a.appendChild(b)};
Vb.prototype.isElement=hc;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var wc=window,xc=document,yc=wc.location;function zc(){}
var Ac=/\[native code\]/;function G(a,b,c){return a[b]=a[b]||c}
function Bc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Cc(){var a;if((a=Object.create)&&Ac.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Dc=G(wc,"gapi",{});var H;H=G(wc,"___jsl",Cc());G(H,"I",0);G(H,"hel",10);function Ec(){var a=yc.href;if(H.dpo)var b=H.h;else{b=H.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Fc(a){var b=G(H,"PQ",[]);H.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Gc(a){return G(G(H,"H",Cc()),a,Cc())}
;var Hc=G(H,"perf",Cc());G(Hc,"g",Cc());var Ic=G(Hc,"i",Cc());G(Hc,"r",[]);Cc();Cc();function Jc(a,b,c){b&&0<b.length&&(b=Kc(b),c&&0<c.length&&(b+="___"+Kc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=G(Ic,"_p",Cc()),G(b,c,Cc())[a]=(new Date).getTime(),b=Hc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Kc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Lc=Cc(),Mc=[];function Nc(a){throw Error("Bad hint"+(a?": "+a:""));}
Mc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?H[b]=G(H,b,[]).concat(c):G(H,b,c)}if(b=a.u)a=G(H,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Oc=/^(\/[a-zA-Z0-9_\-]+)+$/,Pc=[/\/amp\//,/\/amp$/,/^\/amp$/],Qc=/^[a-zA-Z0-9\-_\.,!]+$/,Rc=/^gapi\.loaded_[0-9]+$/,Sc=/^[a-zA-Z0-9,._-]+$/;function Tc(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Lc[f],h=null;g?h=g(e,b,c,d):Nc("no hint processor for: "+f);h||Nc("failed to generate load url");b=h;c=b.match(Uc);(d=b.match(Vc))&&1===d.length&&Wc.test(b)&&c&&1===c.length||Nc("failed sanity: "+a);return h}
function Xc(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Yc(a);Rc.test(c)||Nc("invalid_callback");b=Zc(b);d=d&&d.length?Zc(d):null;return[encodeURIComponent(a.zb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ka?"/am="+e(a.ka):"",a.Ea?"/rs="+e(a.Ea):"",a.Oa?"/t="+e(a.Oa):"","/cb=",e(c)].join("")}
function Yc(a){"/"!==a.charAt(0)&&Nc("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Nc("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Oc.test(b)||Nc("invalid_prefix");c=0;for(d=Pc.length;c<d;++c)Pc[c].test(b)&&Nc("invalid_prefix");c=$c(a,
"k",!0);d=$c(a,"am");e=$c(a,"rs");a=$c(a,"t");return{zb:b,version:c,ka:d,Ea:e,Oa:a}}
function Zc(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Sc.test(e)&&b.push(e)}return b.join(",")}
function $c(a,b,c){a=a[b];!a&&c&&Nc("missing: "+b);if(a){if(Qc.test(a))return a;Nc("invalid: "+b)}return null}
var Wc=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Vc=/\/cb=/g,Uc=/\/\//g;function ad(){var a=Ec();if(!a)throw Error("Bad hint");return a}
Lc.m=function(a,b,c,d){(a=a[0])||Nc("missing_hint");return"https://apis.google.com"+Xc(a,b,c,d)};
var bd=decodeURI("%73cript"),cd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function dd(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function ed(){var a=H.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(cd)?a:H.nonce=null;var b=G(H,"us",[]);if(!b||!b.length)return H.nonce=null;for(var c=xc.getElementsByTagName(bd),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(cd))return H.nonce=a}}return null}
function fd(a){if("loading"!=xc.readyState)gd(a);else{var b=ed(),c="";null!==b&&(c=' nonce="'+b+'"');xc.write("<"+bd+' src="'+encodeURI(a)+'"'+c+"></"+bd+">")}}
function gd(a){var b=xc.createElement(bd);b.setAttribute("src",a);a=ed();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=xc.getElementsByTagName(bd)[0])?a.parentNode.insertBefore(b,a):(xc.head||xc.body||xc.documentElement).appendChild(b)}
function hd(a,b){var c=b&&b._c;if(c)for(var d=0;d<Mc.length;d++){var e=Mc[d][0],f=Mc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function id(a,b,c){jd(function(){var c=b===Ec()?G(Dc,"_",Cc()):Cc();c=G(Gc(b),"_",c);a(c)},c)}
function kd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);hd(a,c);var d=a?a.split(":"):[],e=c.h||ad(),f=G(H,"ah",Cc());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var n=g.length&&g[g.length-1]||null,r=n;n&&n.hint==k||(r={hint:k,features:[]},g.push(r));r.features.push(h)}var A=g.length;if(1<A){var B=c.callback;B&&(c.callback=function(){0==--A&&B()})}for(;d=g.shift();)ld(d.features,c,d.hint)}else ld(d||[],c,e)}
function ld(a,b,c){function d(a,b){if(A)return 0;wc.clearTimeout(r);B.push.apply(B,w);var d=((Dc||{}).config||{}).update;d?d(f):f&&G(H,"cu",[]).push(f);if(b){Jc("me0",a,I);try{id(b,c,n)}finally{Jc("me1",a,I)}}return 1}
a=Bc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,n=void 0;"function"==typeof k&&(n=k);var r=null,A=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=G(Gc(c),"r",[]).sort();var B=G(Gc(c),"L",[]).sort(),I=[].concat(k);0<g&&(r=wc.setTimeout(function(){A=!0;h()},g));
var w=dd(a,B);if(w.length){w=dd(a,k);var ma=G(H,"CP",[]),S=ma.length;ma[S]=function(a){function b(){var a=ma[S+1];a&&a()}
function c(b){ma[S]=null;d(w,a)&&Fc(function(){e&&e();b()})}
if(!a)return 0;Jc("ml1",w,I);0<S&&ma[S-1]?ma[S]=function(){c(b)}:c(b)};
if(w.length){var vc="loaded_"+H.I++;Dc[vc]=function(a){ma[S](a);Dc[vc]=null};
a=Tc(c,w,"gapi."+vc,k);k.push.apply(k,w);Jc("ml0",w,I);b.sync||wc.___gapisync?fd(a):gd(a)}else ma[S](zc)}else d(w)&&e&&e()}
function jd(a,b){if(H.hee&&0<H.hel)try{return a()}catch(c){b&&b(c),H.hel--,kd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Dc.load=function(a,b){return jd(function(){return kd(a,b)})};function md(a,b,c){this.j=c;this.i=a;this.l=b;this.f=0;this.b=null}
md.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.i();return a};
function nd(a,b){a.l(b);a.f<a.j&&(a.f++,b.next=a.b,a.b=b)}
;function od(a){m.setTimeout(function(){throw a;},0)}
var pd;
function qd(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ka(c.next)){c=c.next;var a=c.ma;c.ma=null;a()}};
return function(a){d.next={ma:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function rd(){this.f=this.b=null}
var td=new md(function(){return new sd},function(a){a.reset()},100);
rd.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function sd(){this.next=this.scope=this.b=null}
sd.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
sd.prototype.reset=function(){this.next=this.scope=this.b=null};function ud(a,b){vd||wd();xd||(vd(),xd=!0);var c=yd,d=td.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var vd;function wd(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);vd=function(){a.then(zd)}}else vd=function(){var a=zd;
!ra(m.setImmediate)||m.Window&&m.Window.prototype&&!y("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(pd||(pd=qd()),pd(a)):m.setImmediate(a)}}
var xd=!1,yd=new rd;function zd(){for(var a;a=yd.remove();){try{a.b.call(a.scope)}catch(b){od(b)}nd(td,a)}xd=!1}
;var Ad=y("Firefox"),Bd=ib()||y("iPod"),Cd=y("iPad"),Dd=hb(),Ed=gb(),Fd=fb()&&!jb();function Gd(a,b,c){la(a)?(this.date=Hd(a,b||0,c||1),Id(this,c||1)):sa(a)?(this.date=Hd(a.getFullYear(),a.getMonth(),a.getDate()),Id(this,a.getDate())):(this.date=new Date(za()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Id(this,a))}
function Hd(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
l=Gd.prototype;l.getFullYear=function(){return this.date.getFullYear()};
l.getMonth=function(){return this.date.getMonth()};
l.getDate=function(){return this.date.getDate()};
l.getTime=function(){return this.date.getTime()};
function Jd(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b);b=60*(b-c);a=(0<a?"-":"+")+Ea(c)+":"+Ea(b)}return a}
l.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
l.V=function(a,b){return[this.getFullYear(),Ea(this.getMonth()+1),Ea(this.getDate())].join(a?"-":"")+(b?Jd(this):"")};
l.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
l.toString=function(){return this.V()};
function Id(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
l.valueOf=function(){return this.date.valueOf()};
function Kd(a,b,c,d,e,f,g){this.date=la(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():za())}
v(Kd,Gd);Kd.prototype.V=function(a,b){var c=Gd.prototype.V.call(this,a);return a?c+" "+Ea(this.date.getHours())+":"+Ea(this.date.getMinutes())+":"+Ea(this.date.getSeconds())+(b?Jd(this):""):c+"T"+Ea(this.date.getHours())+Ea(this.date.getMinutes())+Ea(this.date.getSeconds())+(b?Jd(this):"")};
Kd.prototype.equals=function(a){return this.getTime()==a.getTime()};
Kd.prototype.toString=function(){return this.V()};function Ld(){this.i=this.i;this.j=this.j}
Ld.prototype.i=!1;Ld.prototype.T=function(){return this.i};
Ld.prototype.dispose=function(){this.i||(this.i=!0,this.Y())};
Ld.prototype.Y=function(){if(this.j)for(;this.j.length;)this.j.shift()()};
function Md(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Nd(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}
function J(a,b){return a.classList?a.classList.contains(b):Oa(Nd(a),b)}
function K(a,b){a.classList?a.classList.add(b):J(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Od(a,b){if(a.classList)x(b,function(b){K(a,b)});
else{var c={};x(Nd(a),function(a){c[a]=!0});
x(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function L(a,b){a.classList?a.classList.remove(b):J(a,b)&&(a.className=Ka(Nd(a),function(a){return a!=b}).join(" "))}
function Pd(a,b){a.classList?x(b,function(b){L(a,b)}):a.className=Ka(Nd(a),function(a){return!Oa(b,a)}).join(" ")}
function Qd(a,b,c){c?K(a,b):L(a,b)}
function Rd(a,b,c){J(a,b)&&(L(a,b),K(a,c))}
function Sd(a,b){var c=!J(a,b);Qd(a,b,c)}
;var Td=!z&&!fb();function Ud(a,b){if(/-[a-z]/.test(b))return null;if(Td&&a.dataset){if(hb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Vd="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Wd(){}
Wd.prototype.next=function(){throw Vd;};
Wd.prototype.P=function(){return this};
function Xd(a){if(a instanceof Wd)return a;if("function"==typeof a.P)return a.P(!1);if(qa(a)){var b=0,c=new Wd;c.next=function(){for(;;){if(b>=a.length)throw Vd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Yd(a,b){if(qa(a))try{x(a,b,void 0)}catch(c){if(c!==Vd)throw c;}else{a=Xd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Vd)throw c;}}}
function Zd(a){if(qa(a))return Qa(a);a=Xd(a);var b=[];Yd(a,function(a){b.push(a)});
return b}
;function $d(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
$d.prototype.getHeight=function(){return this.bottom-this.top};
$d.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
$d.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
$d.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function ae(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
ae.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
ae.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
ae.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function be(a,b,c){if(p(b))(b=ce(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=ce(c,d);f&&(c.style[f]=e)}}
var de={};function ce(a,b){var c=de[b];if(!c){var d=Ha(b);c=d;void 0===a.style[d]&&(d=(rb?"Webkit":qb?"Moz":z?"ms":nb?"O":null)+Ia(d),void 0!==a.style[d]&&(c=d));de[b]=c}return c}
function ee(a,b){var c=Wb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function fe(a,b){return ee(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function ge(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}z&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function he(a){if(z&&!(8<=Number(Gb)))return a.offsetParent;var b=Wb(a),c=fe(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=fe(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function ie(a){for(var b=new $d(0,Infinity,Infinity,0),c=Ub(a),d=c.b.body,e=c.b.documentElement,f=dc(c.b);a=he(a);)if(!(z&&0==a.clientWidth||rb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=fe(a,"overflow")){var g=je(a),h=new C(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
ac(ec(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function je(a){var b=Wb(a),c=new C(0,0);var d=b?Wb(b):document;d=!z||9<=Number(Gb)||bc(Ub(d).b)?d.documentElement:d.body;if(a==d)return c;a=ge(a);b=cc(Ub(b).b);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function ke(a){a=ge(a);return new C(a.left,a.top)}
function le(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function me(a){var b=ne;if("none"!=fe(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function ne(a){var b=a.offsetWidth,c=a.offsetHeight,d=rb&&!b&&!c;return ka(b)&&!d||!a.getBoundingClientRect?new Tb(b,c):(a=ge(a),new Tb(a.right-a.left,a.bottom-a.top))}
function oe(a){var b=je(a);a=me(a);return new ae(b.x,b.y,a.width,a.height)}
function pe(a){return"rtl"==fe(a,"direction")}
function qe(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function re(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?qe(a,c):0}
var se={thin:2,medium:4,thick:6};function te(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in se?se[c]:qe(a,c)}
;var ue=function(){if(tb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Va))?a[1]:"0"}return sb?(a=/10[_.][0-9_.]+/,(a=a.exec(Va))?a[0].replace(/_/g,"."):"10"):ub?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Va))?a[1]:""):vb||wb||xb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Va))?a[1].replace(/_/g,"."):""):""}();function ve(a){return(a=a.exec(Va))?a[1]:""}
var we=function(){if(Ad)return ve(/Firefox\/([0-9.]+)/);if(z||ob||nb)return Eb;if(Ed)return jb()?ve(/CriOS\/([0-9.]+)/):ve(/Chrome\/([0-9.]+)/);if(Fd&&!jb())return ve(/Version\/([0-9.]+)/);if(Bd||Cd){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Va);if(a)return a[1]+"."+a[2]}else if(Dd)return(a=ve(/Android\s+([0-9.]+)/))?a:ve(/Version\/([0-9.]+)/);return""}();function xe(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=fe(h,"position")){var n=je(h);if(!k){k=pe(h);var r;if(r=k){if(r=Fd)r=0<=Fa(we,10);var A;if(A=yb)A=0<=Fa(ue,10);r=qb||r||A}k=r?-h.scrollLeft:!k||pb&&Fb("8")||"visible"==fe(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;n=Sb(n,new C(k,h.scrollTop))}}}h=n||new C;n=oe(a);if(k=ie(a)){var B=new ae(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(n.left,B.left);r=
Math.min(n.left+n.width,B.left+B.width);k<=r&&(A=Math.max(n.top,B.top),B=Math.min(n.top+n.height,B.top+B.height),A<=B&&(n.left=k,n.top=A,n.width=r-k,n.height=B-A))}k=Ub(a);A=Ub(c);if(k.b!=A.b){r=k.b.body;A=ec(A.b);B=new C(0,0);var I=(I=Wb(r))?ec(I):window;b:{try{kb(I.parent);var w=!0;break b}catch(vc){}w=!1}if(w){w=r;do{var ma=I==A?je(w):ke(w);B.x+=ma.x;B.y+=ma.y}while(I&&I!=A&&I!=I.parent&&(w=I.frameElement)&&(I=I.parent))}w=Sb(B,je(r));!z||9<=Number(Gb)||bc(k.b)||(w=Sb(w,cc(k.b)));n.left+=w.x;n.top+=
w.y}a=ye(a,b);b=n.left;a&4?b+=n.width:a&2&&(b+=n.width/2);b=new C(b,n.top+(a&1?n.height:0));b=Sb(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var S;g&&(S=ie(c))&&(S.top-=h.y,S.right-=h.x,S.bottom-=h.y,S.left-=h.x);return ze(b,c,d,f,S,g,void 0)}
function ze(a,b,c,d,e,f,g){a=new C(a.x,a.y);var h=ye(b,c);c=me(b);g=g?new Tb(g.width,g.height):new Tb(c.width,c.height);a=new C(a.x,a.y);g=new Tb(g.width,g.height);var k=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var n=d.x;d.x<e.left&&(d.x=e.left,k|=
4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,n+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(n=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,n+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.y<
e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=k}else e=256;k=e}f=new ae(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;g=new C(f.left,f.top);g instanceof C?(a=g.x,g=g.y):(a=g,g=void 0);b.style.left=le(a,!1);b.style.top=le(g,!1);g=new Tb(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=bc(Ub(Wb(b)).b),!z||Fb("10")||g&&Fb("8")?(b=b.style,qb?b.MozBoxSizing="border-box":rb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(z?(g=re(b,"paddingLeft"),f=re(b,"paddingRight"),d=re(b,"paddingTop"),h=re(b,"paddingBottom"),g=new $d(d,f,h,g)):(g=ee(b,"paddingLeft"),f=ee(b,"paddingRight"),d=ee(b,"paddingTop"),h=ee(b,"paddingBottom"),g=new $d(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(g))),!z||9<=Number(Gb)?(f=ee(b,"borderLeftWidth"),d=ee(b,"borderRightWidth"),h=ee(b,"borderTopWidth"),b=ee(b,"borderBottomWidth"),b=new $d(parseFloat(h),parseFloat(d),parseFloat(b),
parseFloat(f))):(f=te(b,"borderLeft"),d=te(b,"borderRight"),h=te(b,"borderTop"),b=te(b,"borderBottom"),b=new $d(h,d,b,f)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function ye(a,b){return(b&8&&pe(a)?b^4:b)&-9}
;function Ae(a,b){this.b=0;this.w=void 0;this.j=this.f=this.i=null;this.l=this.o=!1;if(a!=na)try{var c=this;a.call(b,function(a){Be(c,2,a)},function(a){Be(c,3,a)})}catch(d){Be(this,3,d)}}
function Ce(){this.next=this.context=this.f=this.i=this.b=null;this.j=!1}
Ce.prototype.reset=function(){this.context=this.f=this.i=this.b=null;this.j=!1};
var De=new md(function(){return new Ce},function(a){a.reset()},100);
function Ee(a,b,c){var d=De.get();d.i=a;d.f=b;d.context=c;return d}
Ae.prototype.then=function(a,b,c){return Fe(this,ra(a)?a:null,ra(b)?b:null,c)};
Ae.prototype.then=Ae.prototype.then;Ae.prototype.$goog_Thenable=!0;Ae.prototype.cancel=function(a){0==this.b&&ud(function(){var b=new Ge(a);He(this,b)},this)};
function He(a,b){if(0==a.b)if(a.i){var c=a.i;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.j||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?He(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Ie(c),Je(c,e,3,b)))}a.i=null}else Be(a,3,b)}
function Ke(a,b){a.f||2!=a.b&&3!=a.b||Le(a);a.j?a.j.next=b:a.f=b;a.j=b}
function Fe(a,b,c,d){var e=Ee(null,null,null);e.b=new Ae(function(a,g){e.i=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!ka(e)&&b instanceof Ge?g(b):a(e)}catch(n){g(n)}}:g});
e.b.i=a;Ke(a,e);return e.b}
Ae.prototype.G=function(a){this.b=0;Be(this,2,a)};
Ae.prototype.O=function(a){this.b=0;Be(this,3,a)};
function Be(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.G,f=a.O;if(d instanceof Ae){Ke(d,Ee(e||na,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(sa(d))try{var k=d.then;if(ra(k)){Me(d,k,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}}g||(a.w=c,a.b=b,a.i=null,Le(a),3!=b||c instanceof Ge||Ne(a,c))}}
function Me(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Le(a){a.o||(a.o=!0,ud(a.C,a))}
function Ie(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.j=null);return b}
Ae.prototype.C=function(){for(var a;a=Ie(this);)Je(this,a,this.b,this.w);this.o=!1};
function Je(a,b,c,d){if(3==c&&b.f&&!b.j)for(;a&&a.l;a=a.i)a.l=!1;if(b.b)b.b.i=null,Oe(b,c,d);else try{b.j?b.i.call(b.context):Oe(b,c,d)}catch(e){Pe.call(null,e)}nd(De,b)}
function Oe(a,b,c){2==b?a.i.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Ne(a,b){a.l=!0;ud(function(){a.l&&Pe.call(null,b)})}
var Pe=od;function Ge(a){Aa.call(this,a)}
v(Ge,Aa);Ge.prototype.name="cancel";function M(a){Ld.call(this);this.w=1;this.l=[];this.o=0;this.b=[];this.f={};this.C=!!a}
v(M,Ld);l=M.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.w;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.w=e+3;d.push(e);return e};
function Qe(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.N(d),b.apply(void 0,arguments))},a)}
function Re(a,b,c){if(b=a.f[b]){var d=a.b;(b=Na(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.N(b)}}
l.N=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.o)this.l.push(a),this.b[a+1]=na;else{if(c){var d=Ja(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
l.F=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var g=c[e];Se(this.b[g+1],this.b[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.N(c)}}return 0!=e}return!1};
function Se(a,b,c){ud(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(x(b,this.N,this),delete this.f[a])}else this.b.length=0,this.f={}};
function Te(a,b){if(b){var c=a.f[b];return c?c.length:0}c=0;for(var d in a.f)c+=Te(a,d);return c}
l.Y=function(){M.B.Y.call(this);this.clear();this.l.length=0};function Ue(){}
;function Ve(){}
v(Ve,Ue);Ve.prototype.clear=function(){var a=Zd(this.P(!0)),b=this;x(a,function(a){b.remove(a)})};function We(a){this.b=a}
v(We,Ve);l=We.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!p(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.P=function(a){var b=0,c=this.b,d=new Wd;d.next=function(){if(b>=c.length)throw Vd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!p(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function Xe(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
v(Xe,We);function Ye(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
v(Ye,We);var Ze=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $e(a){return a?decodeURI(a):a}
function af(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function bf(a,b,c){if("array"==pa(b))for(var d=0;d<b.length;d++)bf(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function cf(a,b){for(var c=[],d=b||0;d<a.length;d+=2)bf(a[d],a[d+1],c);return c.join("&")}
function df(a){var b=[],c;for(c in a)bf(c,a[c],b);return b.join("&")}
function ef(a,b){var c=2==arguments.length?cf(arguments[1],0):cf(arguments,1);return af(a,c)}
function ff(a,b){var c=df(b);return af(a,c)}
;var gf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",gf);function hf(a){var b=arguments;if(1<b.length)gf[b[0]]=b[1];else{b=b[0];for(var c in b)gf[c]=b[c]}}
function N(a,b){return a in gf?gf[a]:b}
;function jf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){kf(b)}}:a}
function kf(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),hf("ERRORS",b))}
;function O(a,b){ra(a)&&(a=jf(a));return window.setTimeout(a,b)}
;var lf=q("ytPubsubPubsubInstance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.N;M.prototype.publish=M.prototype.F;M.prototype.clear=M.prototype.clear;u("ytPubsubPubsubInstance",lf);var mf=q("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",mf);var nf=q("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",nf);var of=q("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",of);
function pf(a,b,c){var d=qf();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){mf[e]&&b.apply(c||window,d)};
try{of[a]?g():O(g,0)}catch(h){kf(h)}},c);
mf[e]=!0;nf[a]||(nf[a]=[]);nf[a].push(e);return e}return 0}
function rf(a){var b=qf();b&&(la(a)?a=[a]:p(a)&&(a=[parseInt(a,10)]),x(a,function(a){b.unsubscribeByKey(a);delete mf[a]}))}
function P(a,b){var c=qf();return c?c.publish.apply(c,arguments):!1}
function sf(a,b){of[a]=!0;var c=qf();c&&c.publish.apply(c,arguments);of[a]=!1}
function qf(){return q("ytPubsubPubsubInstance")}
;function tf(a,b,c){a&&(a.dataset?a.dataset[uf(b)]=String(c):a.setAttribute("data-"+b,c))}
function vf(a,b){return a?a.dataset?a.dataset[uf(b)]:a.getAttribute("data-"+b):null}
function wf(a,b){a&&(a.dataset?delete a.dataset[uf(b)]:a.removeAttribute("data-"+b))}
var xf={};function uf(a){return xf[a]||(xf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Q(a,b){this.version=a;this.args=b}
function yf(a,b){if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!a.Ja){var c=new a;a.Ja=c.version}var d=a.Ja}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{return Reflect.construct(a,Qa(b.args))}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
Q.prototype.Bb=function(){return{version:this.version,args:this.args}};function R(a,b){this.topic=a;this.R=b}
R.prototype.toString=function(){return this.topic};function zf(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():O(a,b||0)}
;var Af=q("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.N;M.prototype.publish=M.prototype.F;M.prototype.clear=M.prototype.clear;u("ytPubsub2Pubsub2Instance",Af);var Bf=q("ytPubsub2Pubsub2SubscribedKeys")||{};u("ytPubsub2Pubsub2SubscribedKeys",Bf);var Cf=q("ytPubsub2Pubsub2TopicToKeys")||{};u("ytPubsub2Pubsub2TopicToKeys",Cf);var Df=q("ytPubsub2Pubsub2IsAsync")||{};u("ytPubsub2Pubsub2IsAsync",Df);
u("ytPubsub2Pubsub2SkipSubKey",null);function T(a,b){var c=Ef();return c?c.publish.call(c,a.toString(),a,b):!1}
function Ff(a,b,c){window.ytPubsub2Pubsub2SkipSubKey=a;T.call(null,b,c);window.ytPubsub2Pubsub2SkipSubKey=null}
function U(a,b,c){var d=Ef();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=q("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(Bf[e])try{if(g&&a instanceof R&&a!=d)try{g=yf(a.R,g)}catch(k){throw k.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,g)}catch(k){kf(k)}},Df[a.toString()]?q("yt.scheduler.instance")?zf(f):O(f,0):f())});
Bf[e]=!0;Cf[a.toString()]||(Cf[a.toString()]=[]);Cf[a.toString()].push(e);return e}
function Gf(a){var b=Ef();b&&(la(a)&&(a=[a]),x(a,function(a){b.unsubscribeByKey(a);delete Bf[a]}))}
function Ef(){return q("ytPubsub2Pubsub2Instance")}
;var Hf=0;function If(a){var b=a.__yt_uid_key;b||(b=Jf(),a.__yt_uid_key=b);return b}
function Kf(a,b){a=D(a);b=D(b);return!!uc(a,function(a){return a===b},!0,void 0)}
function Lf(a,b){var c=Yb(document,a,null,b);return c.length?c[0]:null}
function Mf(){var a=document,b;Ma(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Nf(){Qd(document.body,"hide-players",!1);x(Xb("preserve-players"),function(a){L(a,"preserve-players")})}
var Jf=q("ytDomDomGetNextId")||function(){return++Hf};
u("ytDomDomGetNextId",Jf);var Of={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Pf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Of||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Pf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Pf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Pf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var bb=q("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",bb);var Qf=q("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",Qf);function Rf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ab(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function V(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Rf(a,b,c,d);if(e)return e;e=++Qf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Pf(d);if(!uc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Pf(b);
b.currentTarget=a;return c.call(a,b)};
g=jf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);bb[e]=[a,b,c,g,d];return e}
function Sf(a,b,c){var d=a||document;return V(d,"click",function(a){var e=uc(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function Tf(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Uf(a,b,c){return Sf(a,b,function(a){return J(a,c)})}
function Vf(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),x(a,function(a){if(a in bb){var b=bb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete bb[a]}}))}
;var Wf={},Xf="ontouchstart"in document;function Yf(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return uc(c,function(a){return J(a,b)},!0,d)}
function Zf(a){var b="mouseover"==a.type&&"mouseenter"in Wf||"mouseout"==a.type&&"mouseleave"in Wf,c=a.type in Wf||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Wf[b];for(var d in c.f){var e=Yf(b,d,a.target);e&&!uc(a.relatedTarget,function(a){return a==e},!0)&&c.F(d,e,b,a)}}if(b=Wf[a.type])for(d in b.f)(e=Yf(a.type,d,a.target))&&b.F(d,e,a.type,a)}}
V(document,"blur",Zf,!0);V(document,"change",Zf,!0);V(document,"click",Zf);V(document,"focus",Zf,!0);V(document,"mouseover",Zf);V(document,"mouseout",Zf);V(document,"mousedown",Zf);V(document,"keydown",Zf);V(document,"keyup",Zf);V(document,"keypress",Zf);V(document,"cut",Zf);V(document,"paste",Zf);Xf&&(V(document,"touchstart",Zf),V(document,"touchend",Zf),V(document,"touchcancel",Zf));function $f(a){this.l=a;this.w={};this.G=[];this.C=[]}
l=$f.prototype;l.A=function(a){return F(a,X(this))};
function X(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
l.unregister=function(){rf(this.G);this.G.length=0;Gf(this.C);this.C.length=0};
l.init=na;l.dispose=na;function ag(a,b,c){a.G.push(pf(b,c,a))}
function bg(a,b,c){a.C.push(U(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=t(c,a);b in Wf||(Wf[b]=new M);Wf[b].subscribe(d,e);a.w[c]=e}
function Z(a,b,c,d){if(b in Wf){var e=Wf[b];Re(e,X(a,d),a.w[c]);0>=Te(e)&&(e.dispose(),delete Wf[b])}delete a.w[c]}
l.L=function(a,b,c){var d=this.g(a,b);if(d&&(d=q(d))){var e=Ta(arguments,2);Sa(e,0,0,a);d.apply(null,e)}};
l.g=function(a,b){return vf(a,b)};
function cg(a,b){tf(a,"tooltip-text",b)}
;var dg=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",dg);function eg(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==pa(b[f])?Ra(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function fg(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=eg(d[1]||"");for(var e in b)d[e]=b[e];return ff(a,d)+c}
;function gg(a){a=void 0===a?{}:a;ra(a)&&(a={callback:a});if(a.gapiHintOverride||N("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=eg(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&eb(a,{_c:{jsl:{h:b}}})}kd("gapi.iframes:gapi.iframes.style.common",a)}
;function hg(){return q("gapi.iframes.getContext")()}
function ig(a){var b=hg();b=b||hg();b.connectIframes(a)}
function jg(a,b){var c=c||hg();c.addOnConnectHandler("yt",a,void 0,b)}
function kg(){return hg().getParentIframe()}
;function lg(a){Q.call(this,1,arguments);this.b=a}
v(lg,Q);function mg(a){Q.call(this,1,arguments);this.b=a}
v(mg,Q);function ng(a,b,c){Q.call(this,3,arguments);this.i=a;this.f=b;this.b=null!=c?!!c:null}
v(ng,Q);function og(a,b,c,d,e){Q.call(this,2,arguments);this.f=a;this.b=b;this.j=c||null;this.i=d||null;this.source=e||null}
v(og,Q);function pg(a,b,c){Q.call(this,1,arguments);this.b=a;this.f=b}
v(pg,Q);function qg(a,b,c,d,e,f,g){Q.call(this,1,arguments);this.f=a;this.l=b;this.b=c;this.o=d||null;this.j=e||null;this.i=f||null;this.source=g||null}
v(qg,Q);
var rg=new R("subscription-batch-subscribe",lg),sg=new R("subscription-batch-unsubscribe",lg),tg=new R("subscription-subscribe",og),ug=new R("subscription-subscribe-loading",mg),vg=new R("subscription-subscribe-loaded",mg),wg=new R("subscription-subscribe-success",pg),xg=new R("subscription-subscribe-external",og),yg=new R("subscription-unsubscribe",qg),zg=new R("subscription-unsubscirbe-loading",mg),Ag=new R("subscription-unsubscribe-loaded",mg),Bg=new R("subscription-unsubscribe-success",mg),Cg=
new R("subscription-external-unsubscribe",qg),Dg=new R("subscription-enable-ypc",mg),Eg=new R("subscription-disable-ypc",mg),Fg=new R("subscription-prefs",ng),Gg=new R("subscription-prefs-success",ng),Hg=new R("subscription-prefs-failure",ng);var Ig="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com https://web-ppg.corp.google.com https://web-green-qa.youtube.com https://web-release-qa.youtube.com".split(" "),Jg=[ug,vg,wg,zg,Ag,Bg,xg,Cg],Kg=[ug,vg,wg,zg,Ag,Bg,Dg,Eg];function Lg(){var a=Mf();return a?a:null}
;function Mg(a,b){(a=D(a))&&a.style&&(a.style.display=b?"":"none",Qd(a,"hid",!b))}
function Ng(a){return(a=D(a))?"none"!=a.style.display&&!J(a,"hid"):!1}
function Og(a){x(arguments,function(a){!qa(a)||a instanceof Element?Mg(a,!0):x(a,function(a){Og(a)})})}
function Pg(a){x(arguments,function(a){!qa(a)||a instanceof Element?Mg(a,!1):x(a,function(a){Pg(a)})})}
;function Qg(){$f.call(this,"tooltip");this.b=0;this.f={}}
v(Qg,$f);oa(Qg);l=Qg.prototype;l.register=function(){Y(this,"mouseover",this.U);Y(this,"mouseout",this.H);Y(this,"focus",this.qa);Y(this,"blur",this.la);Y(this,"click",this.H);Y(this,"touchstart",this.Ha);Y(this,"touchend",this.W);Y(this,"touchcancel",this.W)};
l.unregister=function(){Z(this,"mouseover",this.U);Z(this,"mouseout",this.H);Z(this,"focus",this.qa);Z(this,"blur",this.la);Z(this,"click",this.H);Z(this,"touchstart",this.Ha);Z(this,"touchend",this.W);Z(this,"touchcancel",this.W);this.dispose();Qg.B.unregister.call(this)};
l.dispose=function(){for(var a in this.f)this.H(this.f[a]);this.f={}};
l.U=function(a){if(!(this.b&&1E3>za()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(wf(a,"tooltip-hide-timer"),window.clearTimeout(b));b=t(function(){Rg(this,a);wf(a,"tooltip-show-timer")},this);
var c=parseInt(this.g(a,"tooltip-show-delay"),10)||0;b=O(b,c);tf(a,"tooltip-show-timer",b.toString());a.title&&(cg(a,Sg(this,a)),a.title="");b=ta(a).toString();this.f[b]=a}};
l.H=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),wf(a,"tooltip-show-timer"));b=t(function(){if(a){var b=D(Tg(this,a));b&&(Ug(b),fc(b),wf(a,"content-id"));b=D(Tg(this,a,"arialabel"));fc(b)}wf(a,"tooltip-hide-timer")},this);
b=O(b,50);tf(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=ta(a).toString();delete this.f[b]};
l.qa=function(a){this.b=0;this.U(a)};
l.la=function(a){this.b=0;this.H(a)};
l.Ha=function(a,b,c){c.changedTouches&&(this.b=0,(a=Yf(b,X(this),c.changedTouches[0].target))&&this.U(a))};
l.W=function(a,b,c){c.changedTouches&&(this.b=za(),(a=Yf(b,X(this),c.changedTouches[0].target))&&this.H(a))};
function Vg(a,b,c){cg(b,c);a=a.g(b,"content-id");(a=D(a))&&jc(a,c)}
function Sg(a,b){return a.g(b,"tooltip-text")||b.title}
function Rg(a,b){if(b){var c=Sg(a,b);if(c){var d=D(Tg(a,b));if(!d){d=document.createElement("div");d.id=Tg(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=Wg(a,b),k=Tg(a,b,"content");g.id=k;tf(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var n=rc(b);k=Tg(a,b,"arialabel");f=document.createElement("div");K(f,X(a,"arialabel"));f.id=k;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;jc(f,n);b.setAttribute("aria-labelledby",k);k=Lg()||document.body;k.appendChild(f);k.appendChild(d);Vg(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",K(g,X(a,"normal-wrap")));g=J(b,X(a,"reverse"));Xg(a,b,d,e,h,g)||Xg(a,b,d,e,h,!g);var r=X(a,"tip-visible");
O(function(){K(d,r)},0)}}}}
function Xg(a,b,c,d,e,f){Qd(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=me(b);f=new C((h.width-10)/2,f?h.height:0);var k=je(b);ze(new C(k.x+f.x,k.y+f.y),c,g);f=ac(window);if(1==c.nodeType)var n=ke(c);else c=c.changedTouches?c.changedTouches[0]:c,n=new C(c.clientX,c.clientY);c=me(d);var r=Math.floor(c.width/2);g=!!(f.height<n.y+h.height);h=!!(n.y<h.height);k=!!(n.x<r);f=!!(f.width<n.x+r);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||k)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Tg(a,b,c){a=X(a)+If(b);c&&(a+="-"+c);return a}
function Wg(a,b){var c=null;tb&&J(b,X(a,"masked"))&&((c=D("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Og(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function Ug(a){var b=D("yt-uix-tooltip-shared-mask"),c=b&&uc(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Pg(b),document.body.appendChild(b))}
;function Yg(a){var b=document.location.protocol+"//"+document.domain+"/post_login";b=ef(b,"mode","subscribe");b=ef("/signin?context=popup","next",b);b=ef(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=pf("LOGGED_IN",function(b){rf(N("LOGGED_IN_PUBSUB_KEY",void 0));hf("LOGGED_IN",!0);a(b)});
hf("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",P);var Zg=Object.create(null);Zg.log_event="GENERIC_EVENT_LOGGING";Zg.log_event2="GENERIC_EVENT_LOGGING";Zg.log_interaction="INTERACTION_LOGGING";u("ytLoggingTransportLogPayloadsQueue_",q("ytLoggingTransportLogPayloadsQueue_")||{});u("ytLoggingTransportTokensToCttTargetIds_",q("ytLoggingTransportTokensToCttTargetIds_")||{});u("ytLoggingTransportDispatchedStats_",q("ytLoggingTransportDispatchedStats_")||{});u("ytytLoggingTransportCapturedTime_",q("ytLoggingTransportCapturedTime_")||{});(new Xe).isAvailable();(new Ye).isAvailable();function $g(){$f.call(this,"button");this.b=null;this.i=[];this.f={}}
v($g,$f);oa($g);l=$g.prototype;l.register=function(){Y(this,"click",this.Ka);Y(this,"keydown",this.ua);Y(this,"keypress",this.va);ag(this,"page-scroll",this.lb)};
l.unregister=function(){Z(this,"click",this.Ka);Z(this,"keydown",this.ua);Z(this,"keypress",this.va);ah(this);this.f={};$g.B.unregister.call(this)};
l.Ka=function(a){a&&!a.disabled&&(bh(this,a),this.click(a))};
l.ua=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=ch(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=kc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.sb;else"table"==e&&(f=this.rb);f&&dh(this,a,b,c,t(f,this))}}};
l.lb=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=F(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;eh(this,d,b,!0)}};
function dh(a,b,c,d,e){var f=Ng(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=fh(a,c)){if(ka(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var n=void 0===n?window:n;n=n.location;h=ff(b.href,h)+k;h instanceof Kb||h instanceof Kb||(h=h.aa?h.Z():String(h),Mb.test(h)||(h="about:invalid#zClosurez"),h=Nb(h));h instanceof Kb&&h.constructor===Kb&&h.f===Lb?h=h.b:(pa(h),
h="type_error:SafeUrl");n.href=h}else Vf(b)}else g&&gh(a,b);else f?27==d.keyCode?(fh(a,c),gh(a,b)):e(b,c,d):(h=J(b,X(a,"reverse"))?38:40,d.keyCode==h&&(Vf(b),d.preventDefault()))}
l.va=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=ch(this,a),Ng(a)&&c.preventDefault())};
function fh(a,b){var c=X(a,"menu-item-highlight"),d=E(c,b);d&&L(d,c);return d}
function hh(a,b,c){K(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+ta(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
l.rb=function(a,b,c){var d=fh(this,b);if(d){var e=Lf("table",b);b=Yb(document,"td",null,e);d=ih(d,b,Yb(document,"td",null,Lf("tr",e)).length,c);-1!=d&&(hh(this,a,b[d]),c.preventDefault())}};
l.sb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=fh(this,b);d&&(b=Ka(Yb(document,"li",null,b),Ng),hh(this,a,b[ih(d,b,1,c)]),c.preventDefault())}};
function ih(a,b,c,d){var e=b.length;a=Ja(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function jh(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=X(a,"menu-mask"),Pg(c),b.iframeMask=c);return c}
function eh(a,b,c,d){var e=F(b,X(a,"group")),f=!!a.g(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=oe(b);if(J(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(r){}}J(b,"flip")&&(J(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.g(b,"button-has-sibling-menu")?k=he(e):a.g(b,"button-menu-root-container")&&(k=kh(a,b));z&&!Fb("8")&&(k=null);if(k){var n=oe(k);n=new $d(-n.top,n.left,n.top,-n.left)}k=new C(0,1);J(b,X(a,"center-menu"))&&(k.x-=Math.round((me(c).width-me(b).width)/
2));d&&(k.y+=cc(document).y);if(a=jh(a,b))b=me(c),a.style.width=b.width+"px",a.style.height=b.height+"px",xe(e,f,a,g,k,n,197),d&&be(a,"position","fixed");xe(e,f,c,g,k,n,197)}
function kh(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return F(b,c)}return document.body}
l.Ma=function(a){if(a){var b=ch(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=kh(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=jh(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[If(a).toString()]=b);eh(this,a,b,c);sf("yt-uix-button-menu-before-show",a,b);Og(b);d&&Og(d);
this.L(a,"button-menu-action",!0);K(a,X(this,"active"));b=t(this.La,this,a,!1);d=t(this.La,this,a,!0);c=t(this.Db,this,a,void 0);this.b&&ch(this,this.b)==ch(this,a)||ah(this);P("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.b=a}}};
function gh(a,b){if(b){var c=ch(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Pg(c);a.L(b,"button-menu-action",!1);var d=jh(a,b),e=If(c).toString();delete a.f[e];O(function(){d&&d.parentNode&&(Pg(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=F(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));Pd(b,f);P("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
l.Db=function(a,b){var c=ch(this,a);if(c){b&&(b instanceof Ob?c.innerHTML=Qb(b):jc(c,b));var d=!!this.g(a,"button-menu-fixed");eh(this,a,c,d)}};
l.La=function(a,b,c){c=Tf(c);var d=F(c,X(this));if(d){d=ch(this,d);var e=ch(this,a);if(d==e)return}d=F(c,X(this,"menu"));e=d==ch(this,a);var f=J(c,X(this,"menu-item")),g=J(c,X(this,"menu-close"));if(!d||e&&(f||g))gh(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=E(X(this,"content"),a))&&jc(a,rc(c)),lh(this,d,c))};
function lh(a,b,c){var d=X(a,"menu-item-selected");x(Xb(d,b),function(a){L(a,d)});
K(c.parentNode,d)}
function ch(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id");c=c&&D(c);var d=X(a,"menu");c?Od(c,[d,X(a,"menu-external")]):c=E(d,b);b.widgetMenu=c}return b.widgetMenu}
l.isToggled=function(a){return J(a,X(this,"toggled"))};
function bh(a,b){if(a.g(b,"button-toggle")){var c=F(b,X(a,"group")),d=X(a,"toggled"),e=J(b,d);if(c&&a.g(c,"button-toggle-group")){var f=a.g(c,"button-toggle-group");x(Xb(X(a),c),function(a){a!=b||"optional"==f&&e?(L(a,d),a.removeAttribute("aria-pressed")):(K(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Sd(b,d)}}
l.click=function(a){if(ch(this,a)){var b=ch(this,a);if(b){var c=F(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(gh(this,c),O(t(this.Ma,this,a),1)):Ng(b)?gh(this,a):this.Ma(a)}a.focus()}this.L(a,"button-action")};
function ah(a){a.b&&gh(a,a.b)}
;function mh(a){$f.call(this,a);this.i=null}
v(mh,$f);l=mh.prototype;l.A=function(a){var b=$f.prototype.A.call(this,a);return b?b:a};
l.register=function(){ag(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
l.dispose=function(){nh(this);mh.B.dispose.call(this)};
l.g=function(a,b){var c=mh.B.g.call(this,a,b);return c?c:(c=mh.B.g.call(this,a,"card-config"))&&(c=q(c))&&c[b]?c[b]:null};
l.show=function(a){var b=this.A(a);if(b){K(b,X(this,"active"));var c=oh(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;ph(this,a,c);var d=X(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.L(b,"card-action",a);this.i=a;Pg(c);O(t(function(){e||(Og(c),P("yt-uix-card-show",b,a,c));qh(c);K(c,d);P("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function oh(a,b,c){var d=c||b,e=X(a,"card");c=rh(a,d);var f=D(X(a,"card")+If(d));if(f)return a=E(X(a,"card-body"),f),ic(a,c)||(fc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+If(d);f.className=e;(d=a.g(d,"card-class"))&&Od(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;fc(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function ph(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=E(X(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),h=a.g(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&k){var r=13;var A=8}else n&&!k?(r=12,A=9):!n&&k?(r=9,A=12):(r=8,A=13);var B=pe(document.body);f=pe(b);B!=f&&(r^=4);if(d){f=b.offsetHeight/2-12;var I=new C(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,I=new C(b.offsetWidth+6,-12);var w=me(c);f=
Math.min(f,(d?w.height:w.width)-24-6);6>f&&(f=6,d?I.y+=12-b.offsetHeight/2:I.x+=12-b.offsetWidth/2);w=null;g||(w=10);b=X(a,"card-flip");a=X(a,"card-reverse");Qd(c,b,n);Qd(c,a,k);w=xe(e,r,c,A,I,null,w);!g&&w&&(w&48&&(n=!n,r^=4,A^=4),w&192&&(k=!k,r^=1,A^=1),Qd(c,b,n),Qd(c,a,k),xe(e,r,c,A,I));h&&(e=parseInt(c.style.top,10),g=cc(document).y,be(c,"position","fixed"),be(c,"top",e-g+"px"));B&&(c.style.right="",e=oe(c),e.left=e.left||parseInt(c.style.left,10),g=ac(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=E("yt-uix-card-body-arrow",c);g=E("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!B&&n||B&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=E("yt-uix-card-arrow",c);n=E("yt-uix-card-arrow-background",c);k&&n&&(c="right"==d?me(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
l.hide=function(a){if(a=this.A(a)){var b=D(X(this,"card")+If(a));b&&(L(a,X(this,"active")),L(b,X(this,"card-visible")),Pg(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(fc(b.cardMask),b.cardMask=null))}};
function nh(a){a.i&&a.hide(a.i)}
l.Cb=function(a,b){var c=this.A(a);if(c){if(b){var d=rh(this,c);if(!d)return;b instanceof Ob?d.innerHTML=Qb(b):jc(d,b)}J(c,X(this,"active"))&&(c=oh(this,a,c),ph(this,a,c),Og(c),qh(c))}};
l.isActive=function(a){return(a=this.A(a))?J(a,X(this,"active")):!1};
function rh(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.g(b,"card-id"))?D(c):E(d,b))||(c=document.createElement("div"));var f=c;L(f,d);K(f,e);b.cardContentNode=c}return c}
function qh(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Od(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function sh(){$f.call(this,"kbd-nav")}
var th;v(sh,$f);oa(sh);l=sh.prototype;l.register=function(){Y(this,"keydown",this.sa);ag(this,"yt-uix-kbd-nav-move-in",this.Aa);ag(this,"yt-uix-kbd-nav-move-in-to",this.tb);ag(this,"yt-uix-kbd-move-next",this.Ba);ag(this,"yt-uix-kbd-nav-move-to",this.S)};
l.unregister=function(){Z(this,"keydown",this.sa);W(th)};
l.sa=function(a,b,c){var d=c.keyCode;if(a=F(a,X(this)))switch(d){case 13:case 32:this.Aa(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Ud(a,"kbdNavMoveOut");!c;){c=F(a.parentElement,X(this));if(!c)break a;c=Ud(c,"kbdNavMoveOut")}c=D(c);this.S(c);P("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&J(a,X(this,"list")))switch(d){case 40:this.Ba(b,a);break;case 38:d=document.activeElement==a,a=uh(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),vh(this,a[b]))}c.preventDefault()}};
l.Aa=function(a){var b=Ud(a,"kbdNavMoveIn");b=D(b);wh(this,a,b);this.S(b)};
l.tb=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}wh(this,c,a);this.S(a)};
l.S=function(a){if(a)if(oc(a))a.focus();else{var b=kc(a,function(a){return hc(a)?oc(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function wh(a,b,c){if(b&&c)if(K(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Td&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
l.Ba=function(a,b){var c=document.activeElement==b,d=uh(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),vh(this,d[c]))};
function vh(a,b){if(b){var c=tc(b,"LI");c&&(K(c,X(a,"highlight")),th=V(b,"blur",t(function(a){L(a,X(this,"highlight"));W(th)},a,c)))}}
function uh(a){if("UL"!=a.tagName.toUpperCase())return[];a=Ka(gc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Ka(La(a,function(a){return Ng(a)?kc(a,function(a){return hc(a)?oc(a):!1}):!1}),function(a){return!!a})}
;function xh(){$f.call(this,"menu");this.f=this.b=null;this.i={};this.o={};this.j=null}
v(xh,$f);oa(xh);function yh(a){var b=xh.v();if(J(a,X(b)))return a;var c=b.A(a);return c?c:F(a,X(b,"content"))==b.b?b.f:null}
l=xh.prototype;l.register=function(){Y(this,"click",this.ra);Y(this,"mouseenter",this.jb);ag(this,"page-scroll",this.mb);ag(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.A(a);zh(this,a)});
this.j=new M};
l.unregister=function(){Z(this,"click",this.ra);this.f=this.b=null;W(Ua($a(this.i)));this.i={};Ya(this.o,function(a){fc(a)},this);
this.o={};Md(this.j);this.j=null;xh.B.unregister.call(this)};
l.ra=function(a,b,c){a&&(b=Ah(this,a),!b.disabled&&Kf(c.target,b)&&Bh(this,a))};
l.jb=function(a,b,c){a&&J(a,X(this,"hover"))&&Kf(c.target,Ah(this,a))&&Bh(this,a,!0)};
l.mb=function(){this.b&&this.f&&Ch(this,this.f,this.b)};
function Ch(a,b,c){var d=Dh(a,b);if(d){var e=me(c);if(e instanceof Tb){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=le(e,!0);d.style.height=le(f,!0)}c==a.b&&(e=9,f=8,J(b,X(a,"reversed"))&&(e^=1,f^=1),J(b,X(a,"flipped"))&&(e^=4,f^=4),a=new C(0,1),d&&xe(b,e,d,f,a,null,197),xe(b,e,c,f,a,null,197))}
function Bh(a,b,c){Eh(a,b)&&!c?zh(a,b):(Fh(a,b),!a.b||Kf(b,a.b)?a.Na(b):Qe(a.j,t(a.Na,a,b)))}
l.Na=function(a){if(a){var b=Gh(this,a);if(b){sf("yt-uix-menu-before-show",a,b);this.b?Kf(a,this.b)||zh(this,this.f):(this.f=a,this.b=b,J(a,X(this,"sibling-content"))||(fc(b),document.body.appendChild(b)),b.style.minWidth=Ah(this,a).offsetWidth-2+"px");var c=Dh(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);L(b,X(this,"content-hidden"));Ch(this,a,b);Od(Ah(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);P("yt-uix-menu-show",a);Hh(b);Ih(this,a);P("yt-uix-kbd-nav-move-in-to",
b);var d=t(this.Eb,this,a),e=t(this.pb,this,a);c=ta(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];J(a,X(this,"indicate-selected"))&&(d=t(this.qb,this,a),this.i[c].push(V(b,"click",d)));J(a,X(this,"hover"))&&(a=t(this.kb,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
l.kb=function(a,b){var c=Tf(b);c&&(Kf(c,Ah(this,a))||Jh(this,c)||Kh(this,a))};
l.Eb=function(a,b){var c=Tf(b);if(c){if(Jh(this,c)){var d=F(c,X(this,"content")),e=tc(c,"LI");e&&d&&ic(d,e)&&sf("yt-uix-menu-item-clicked",c);c=F(c,X(this,"close-on-select"));if(!c)return;d=yh(c)}zh(this,d||a)}};
function Fh(a,b){if(b){var c=F(b,X(a,"content"));c&&x(Xb(X(a),c),function(a){!Kf(a,b)&&Eh(this,a)&&Kh(this,a)},a)}}
function zh(a,b){if(b){var c=[];c.push(b);var d=Gh(a,b);d&&(d=Xb(X(a),d),d=Qa(d),c=c.concat(d),x(c,function(a){Eh(this,a)&&Kh(this,a)},a))}}
function Kh(a,b){if(b){var c=Gh(a,b);Pd(Ah(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);K(c,X(a,"content-hidden"));var d=Gh(a,b);d&&Zb(d,{"aria-expanded":"false"});(d=Dh(a,b))&&d.parentNode&&fc(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.j&&a.j.F("ROOT_MENU_REMOVED"));P("yt-uix-menu-hide",b);c=ta(b).toString();W(a.i[c]);delete a.i[c]}}
l.pb=function(a,b){var c=Tf(b);c&&Lh(this,a,c)};
l.qb=function(a,b){var c=Tf(b);if(c){var d=Ah(this,a);if(d&&(c=tc(c,"LI")))if(c=rc(c).trim(),d.hasChildNodes()){var e=$g.v();(d=E(X(e,"content"),d))&&jc(d,c)}else jc(d,c)}};
function Ih(a,b){var c=Gh(a,b);if(c){x(c.children,function(a){"LI"==a.tagName&&Zb(a,{role:"menuitem"})});
Zb(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ta(c),c.id=d);(c=Ah(a,b))&&Zb(c,{"aria-controls":d})}}
function Lh(a,b,c){var d=Gh(a,b);d&&J(b,X(a,"checked"))&&(a=tc(c,"LI"))&&(a=E("yt-ui-menu-item-checked-hid",a))&&(x(Xb("yt-ui-menu-item-checked",d),function(a){Rd(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Rd(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Eh(a,b){var c=Gh(a,b);return c?!J(c,X(a,"content-hidden")):!1}
function Hh(a){x(Yb(document,"UL",null,a),function(a){a.tabIndex=0;var b=sh.v();Od(a,[X(b),X(b,"list")])})}
function Gh(a,b){var c=vf(b,"menu-content-id");return c&&(c=D(c))?(Od(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:E(X(a,"content"),b)}
function Dh(a,b){var c=ta(b).toString(),d=a.o[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];x(Nd(b),function(a){e.push(a+"-mask")});
Od(d,e);a.o[c]=d}return d||null}
function Ah(a,b){return E(X(a,"trigger"),b)}
function Jh(a,b){return Kf(b,a.b)||Kf(b,a.f)}
;function Mh(){mh.call(this,"clickcard");this.b={};this.f={}}
v(Mh,mh);oa(Mh);l=Mh.prototype;l.register=function(){Mh.B.register.call(this);Y(this,"click",this.oa,"target");Y(this,"click",this.na,"close")};
l.unregister=function(){Mh.B.unregister.call(this);Z(this,"click",this.oa,"target");Z(this,"click",this.na,"close");for(var a in this.b)W(this.b[a]);this.b={};for(a in this.f)W(this.f[a]);this.f={}};
l.oa=function(a,b,c){c.preventDefault();b=tc(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=p(b)?a.getElementById(b):b;b=this.A(a);this.g(b,"disabled")||(J(b,X(this,"active"))?(this.hide(a),L(b,X(this,"active"))):(this.show(a),K(b,X(this,"active"))))}};
l.show=function(a){Mh.B.show.call(this,a);var b=this.A(a),c=ta(a).toString();if(!vf(b,"click-outside-persists")){if(this.b[c])return;b=V(document,"click",t(this.pa,this,a));var d=V(window,"blur",t(this.pa,this,a));this.b[c]=[b,d]}a=V(window,"resize",t(this.Cb,this,a,void 0));this.f[c]=a};
l.hide=function(a){Mh.B.hide.call(this,a);a=ta(a).toString();var b=this.b[a];b&&(W(b),this.b[a]=null);if(b=this.f[a])W(b),delete this.f[a]};
l.pa=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=F(b.target,c)||F(yh(b.target),c));(d=d||F(document.activeElement,c)||F(yh(document.activeElement),c))||this.hide(a)};
l.na=function(a){(a=F(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Nh(){mh.call(this,"hovercard")}
v(Nh,mh);oa(Nh);l=Nh.prototype;l.register=function(){Y(this,"mouseenter",this.wa,"target");Y(this,"mouseleave",this.ya,"target");Y(this,"mouseenter",this.xa,"card");Y(this,"mouseleave",this.za,"card")};
l.unregister=function(){Z(this,"mouseenter",this.wa,"target");Z(this,"mouseleave",this.ya,"target");Z(this,"mouseenter",this.xa,"card");Z(this,"mouseleave",this.za,"card")};
l.wa=function(a){if(Oh!=a){Oh&&(this.hide(Oh),Oh=null);var b=t(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10);b=O(b,-1<c?c:200);tf(a,"card-timer",b.toString());Oh=a;a.alt&&(tf(a,"card-alt",a.alt),a.alt="");a.title&&(tf(a,"card-title",a.title),a.title="")}};
l.ya=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.A(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;O(t(this.nb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
l.nb=function(a){this.A(a).isCardHidable&&(this.hide(a),Oh=null)};
l.xa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
l.za=function(a){a&&this.hide(a.cardTargetNode)};
var Oh=null;function Ph(a,b,c,d,e,f){this.b=a;this.w=null;this.i=E("yt-dialog-fg",this.b)||this.b;if(a=E("yt-dialog-title",this.i)){var g="yt-dialog-title-"+ta(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.O=E("yt-dialog-focus-trap",this.b);this.fa=!1;this.j=new M;this.C=[];this.C.push(Uf(this.b,t(this.ub,this),"yt-dialog-dismiss"));this.C.push(V(this.O,"focus",t(this.ib,this),!0));Qh(this);this.Ra=b;this.Ya=c;this.Xa=d;this.G=e;this.Za=f;this.o=
this.l=null}
var Rh={LOADING:"loading",Jb:"content",Qb:"working"};function Sh(a,b){a.T()||a.j.subscribe("post-all",b)}
function Qh(a){a=E("yt-dialog-fg-content",a.b);var b=[];Ya(Rh,function(a){b.push("yt-dialog-show-"+a)});
Pd(a,b);K(a,"yt-dialog-show-content")}
l=Ph.prototype;
l.show=function(){if(!this.T()){this.w=document.activeElement;if(!this.Xa){this.f||(this.f=D("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=ac(a).height,bc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Og(this.f)}this.ta();c=Th(this);Uh(c);this.l=V(document,"keydown",t(this.ob,this));c=this.b;d=pf("player-added",this.ta,this);tf(c,"player-ready-pubsub-key",d);this.Ya&&(this.o=V(document,"click",t(this.yb,this)));Og(this.b);this.i.setAttribute("tabindex","0");Vh(this);this.G||K(document.body,"yt-dialog-active");ah($g.v());nh(Mh.v());nh(Nh.v());P("yt-ui-dialog-show-complete",this)}};
function Wh(){return Ma(Xb("yt-dialog"),function(a){return Ng(a)})}
l.ta=function(){if(!this.Za){var a=this.b;Qd(document.body,"hide-players",!0);a&&Qd(a,"preserve-players",!0)}};
function Th(a){var b=Yb(document,"iframe",null,a.b);x(b,function(a){var b=vf(a,"onload");b&&(b=q(b))&&V(a,"load",b);if(b=vf(a,"src"))a.src=b},a);
return Qa(b)}
function Uh(a){x(document.getElementsByTagName("iframe"),function(b){-1==Ja(a,b)&&K(b,"iframe-hid")})}
function Xh(){x(Xb("iframe-hid"),function(a){L(a,"iframe-hid")})}
l.ub=function(a){a=a.currentTarget;a.disabled||(a=vf(a,"action")||"",this.dismiss(a))};
l.dismiss=function(a){if(!this.T()){this.j.F("pre-all");this.j.F("pre-"+a);Pg(this.b);nh(Mh.v());nh(Nh.v());this.i.setAttribute("tabindex","-1");Wh()||(Pg(this.f),this.G||L(document.body,"yt-dialog-active"),Nf(),Xh());this.l&&(W(this.l),this.l=null);this.o&&(W(this.o),this.o=null);var b=this.b;if(b){var c=vf(b,"player-ready-pubsub-key");c&&(rf(c),wf(b,"player-ready-pubsub-key"))}this.j.F("post-all");P("yt-ui-dialog-hide-complete",this);"cancel"==a&&P("yt-ui-dialog-cancelled",this);this.j&&this.j.F("post-"+
a);this.w&&this.w.focus()}};
l.setTitle=function(a){jc(E("yt-dialog-title",this.b),a)};
l.ob=function(a){O(t(function(){this.Ra||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&J(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
l.yb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
l.T=function(){return this.fa};
l.dispose=function(){Ng(this.b)&&this.dismiss("dispose");W(this.C);this.C.length=0;O(t(function(){this.w=null},this),0);
this.O=this.i=null;this.j.dispose();this.j=null;this.fa=!0};
l.ib=function(a){a.stopPropagation();Vh(this)};
function Vh(a){O(t(function(){this.i&&this.i.focus()},a),0)}
u("yt.ui.Dialog",Ph);function Yh(){$f.call(this,"overlay");this.j=this.f=this.i=this.b=null}
v(Yh,$f);oa(Yh);l=Yh.prototype;l.register=function(){Y(this,"click",this.da,"target");Y(this,"click",this.hide,"close");Zh(this)};
l.unregister=function(){Yh.B.unregister.call(this);Z(this,"click",this.da,"target");Z(this,"click",this.hide,"close");this.j&&(rf(this.j),this.j=null);this.f&&(W(this.f),this.f=null)};
l.da=function(a){if(!this.b||!Ng(this.b.b)){var b=this.A(a);a=$h(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new Ph(a,c);this.i=b;var e=E("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",h=this.g(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));Od(e,f)}this.b.show();P("yt-uix-kbd-nav-move-to",e||a);Zh(this);c||
d||(c=t(function(a){J(a.target,"yt-dialog-base")&&ai(this)},this),this.f=V(E("yt-dialog-base",a),"click",c));
this.L(b,"overlay-shown");P("yt-uix-overlay-shown",b)}}};
function Zh(a){a.j||(a.j=pf("yt-uix-overlay-hide",bi));a.b&&Sh(a.b,function(){var a=Yh.v();a.i=null;a.b.dispose();a.b=null})}
function ai(a){if(a.b){var b=a.i;a.b.dismiss("overlayhide");b&&a.L(b,"overlay-hidden");a.i=null;a.f&&(W(a.f),a.f=null);a.b=null}}
function $h(a,b){var c;if(a)if(c=E("yt-dialog",a)){var d=D("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=F(b,"yt-dialog"));return c}
function ci(){var a=Yh.v();if(a.i)a=E("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Xb("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=F(a[b],"yt-dialog");if(Ng(c)){a=a[b];break a}}a=null}return a}
l.hide=function(a){a&&a.disabled||P("yt-uix-overlay-hide")};
function bi(){ai(Yh.v())}
l.show=function(a){this.da(a)};var di={},ei=[];function fi(a){a=F(a,"yt-uix-button-subscription-container");return E("yt-dialog",E("unsubscribe-confirmation-overlay-container",a))}
function gi(a,b){W(ei);ei.length=0;di[b]||(di[b]=fi(a));Yh.v().show(di[b]);var c=ci();return new Ae(function(a){ei.push(Uf(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function hi(){var a=N("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!N("SESSION_INDEX")&&!N("LOGGED_IN"))}
;function ii(){$f.call(this,"subscription-button");this.b=this.f=!1}
v(ii,$f);oa(ii);ii.prototype.register=function(){Y(this,"click",this.ea);bg(this,ug,this.Da);bg(this,vg,this.Ca);bg(this,wg,this.Fb);bg(this,zg,this.Da);bg(this,Ag,this.Ca);bg(this,Bg,this.Gb);bg(this,Dg,this.wb);bg(this,Eg,this.vb)};
ii.prototype.unregister=function(){Z(this,"click",this.ea);ii.B.unregister.call(this)};
ii.prototype.i=function(a){return!!this.g(a,"is-subscribed")};
var ji={ga:"hover-enabled",Pa:"yt-uix-button-subscribe",Qa:"yt-uix-button-subscribed",Hb:"ypc-enabled",Sa:"yt-uix-button-subscription-container",Ta:"yt-subscription-button-disabled-mask-container"},ki={Ib:"channel-external-id",Ua:"subscriber-count-show-when-subscribed",Va:"subscriber-count-tooltip",Wa:"subscriber-count-title",Kb:"href",Lb:"insecure",ha:"is-subscribed",Mb:"parent-url",Nb:"clicktracking",ab:"show-unsub-confirm-dialog",Ob:"show-unsub-confirm-time-frame",bb:"style-type",ia:"subscribed-timestamp",
ja:"subscription-id",Pb:"target",cb:"ypc-enabled"};l=ii.prototype;
l.ea=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure"),d=hi(),e=!(this.f&&d);c=c&&!this.b;if(b&&(e||c))a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(d)if(b=this.g(a,"channel-external-id"),d=this.g(a,"clicktracking"),e=li(this,a),c=this.g(a,"parent-url"),this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new qg(b,f,e,a,d,c);mi(this,a)?gi(a,b).then(function(){T(yg,g)}):T(yg,g)}else T(tg,new og(b,e,d,c));
else ni(this,a)};
l.Da=function(a){this.K(a.b,this.Fa,!0)};
l.Ca=function(a){this.K(a.b,this.Fa,!1)};
l.Fb=function(a){this.K(a.b,this.Ga,!0,a.f)};
l.Gb=function(a){this.K(a.b,this.Ga,!1)};
l.wb=function(a){this.K(a.b,this.hb)};
l.vb=function(a){this.K(a.b,this.gb)};
l.Ga=function(a,b,c){b?(tf(a,ki.ha,"true"),c&&tf(a,ki.ja,c),this.g(a,ki.ab)&&(b=new Kd,tf(a,ki.ia,(b.getTime()/1E3).toString()))):(wf(a,ki.ha),wf(a,ki.ia),wf(a,ki.ja));oi(this,a)};
function li(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
l.Fa=function(a,b){var c=F(a,ji.Sa);Qd(c,ji.Ta,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function oi(a,b){var c=a.g(b,ki.bb),d=!!a.g(b,"is-subscribed");c="-"+c;var e=ji.Qa+c;Qd(b,ji.Pa+c,!d);Qd(b,e,d);a.g(b,ki.Va)&&!a.g(b,ki.Ua)&&(c=X(Qg.v()),Qd(b,c,!d),b.title=d?"":a.g(b,ki.Wa));d?O(function(){K(b,ji.ga)},1E3):L(b,ji.ga)}
l.hb=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(K(a,"ypc-enabled"),tf(a,ki.cb,"true"))};
l.gb=function(a){this.g(a,"ypc-enabled")&&(L(a,"ypc-enabled"),wf(a,"ypc-enabled"))};
function pi(a,b){return Ka(Xb(X(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
l.eb=function(a,b,c){var d=Ta(arguments,2);x(a,function(a){b.apply(this,Pa(a,d))},this)};
l.K=function(a,b,c){var d=pi(this,a);this.eb.apply(this,Pa([d],Ta(arguments,1)))};
function ni(a,b){var c=t(function(a){a.discoverable_subscriptions&&hf("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ea(b)},a);
Yg(c)}
function mi(a,b){if(a.b||!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new Kd).getTime()<1E3*(c+600))?!0:!1}
;function qi(a){this.b=a;this.D=null;N("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(ri(this),V(this.b,"mouseover",t(this.j,this)),V(this.b,"mouseout",t(this.X,this)),V(this.b,"click",t(this.X,this)),U(wg,ya(this.f,!0),this),U(Bg,ya(this.f,!1),this),si(this))}
function ri(a){var b={url:N("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=t(a.i,a);hg().open(b,a)}
function si(a){hi()||pf("LOGGED_IN",function(){this.D&&(this.X(),this.D.close(),this.D=null,ri(this))},a)}
qi.prototype.i=function(a){this.D=a;a=ii.v().i(this.b);this.f(a)};
qi.prototype.j=function(){this.D&&this.D.restyle({show:!0})};
qi.prototype.X=function(){this.D&&this.D.restyle({show:!1})};
qi.prototype.f=function(a){if(this.D){a={isSubscribed:a};try{this.D.send("msg-hovercard-subscription",a,void 0,q("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function ti(a){if(qa(a))return ui(a);if(sa(a)&&!ra(a)&&!(sa(a)&&0<a.nodeType))return vi(a);try{return m.JSON.stringify(a),a}catch(b){}}
function vi(a){return Za(a,function(a){return ti(a)})}
function ui(a){return La(a,function(a){return ti(a)})}
;function wi(a){this.f=null;this.b=a;a=kg();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^za()).toString(36);a&&(ig({role:"ytsubscribe",iframe:a,data:{id:b}}),jg(t(function(a){this.f=a},this),this.b))}
wi.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=t(this.register,this,a,b,this.b);jg(c,this.b)}};
wi.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=t(this.send,this,a,b);jg(c,this.b)}};function xi(){this.b=this.f=null}
function yi(a,b){var c=q("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||zi(a),e=kg();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
xi.prototype.i=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function zi(a){if(!a.f){var b=q("gapi.iframes.makeWhiteListIframesFilter")(Ig);a.f=b}return a.f}
;function Ai(){this.b=new xi;this.i=!1;this.f={}}
function Bi(a){x(Jg,function(a){if(!this.f[a.toString()]){var b=U(a,function(b){var c=b?b.Bb():null;b=this.b;b.b&&(c={eventType:"pubsub2",topicString:a.toString(),serializedData:ti(c)},b.b.send("msg-youtube-pubsub",c))},this);
b&&(this.f[a.toString()]=b)}},a)}
Ai.prototype.j=function(a,b){var c=Na(Kg,function(b){return b.toString()==a});
if(c&&(!c.R||b)){if(c.R)try{var d=yf(c.R,b)}catch(f){return}var e=this.f[c.toString()];e?Ff(e,c,d):T(c,d)}};
Ai.prototype.l=function(a){Ci(this)&&yi(this.b,{eventType:"subscribe",channelExternalId:a.b})};
Ai.prototype.o=function(a){Ci(this)&&yi(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function Ci(a){return a.i||!!N("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function Di(){gg(function(){var a=me(D("yt-subscribe"));a={width:a.width,height:a.height};var b=Ei;hg().ready(a,null,b)})}
function Ei(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;b=b.notificationsPipeSupported;var c=D("yt-subscribe"),d=ii.v();c=E(X(d),c);a&&c&&(ii.v(),tf(c,"parent-url",a));Fi()?(ii.v().b=!0,b&&(ii.v().f=!0)):c&&new qi(c);a=new Ai;U(wg,a.l,a);U(Bg,a.o,a);if(Fi()){b=a.b;b.b=new wi(zi(b));Bi(a);b=a.b;c=t(a.j,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",ya(b.i,c))}catch(e){}a.i=!0}}}
function Fi(){var a=kg().getOrigin();return Oa(Ig,a)}
;za();var Gi=ka(XMLHttpRequest)?function(){return new XMLHttpRequest}:ka(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Hi(){if(!Gi)return null;var a=Gi();return"open"in a?a:null}
;var Ii={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ji=!1;
function Ki(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Ze)[1]||null,e=$e(a.match(Ze)[3]||null);d&&e?(d=c,c=a.match(Ze),d=d.match(Ze),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?$e(c.match(Ze)[3]||null)==e&&(Number(c.match(Ze)[4]||null)||null)==(Number(a.match(Ze)[4]||null)||null):!0;for(var f in Ii){if((e=d=N(Ii[f]))&&!(e=c)){e=f;var g=N("CORS_HEADER_WHITELIST")||{},h=$e(a.match(Ze)[3]||null);e=h?(g=g[h])?Oa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Li(a,b){var c=N("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Tb&&(!$e(a.match(Ze)[3]||null)||b.withCredentials||$e(a.match(Ze)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.J&&b.J[c])}
function Mi(a,b){var c=b.format||"JSON";b.Ub&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=N("XSRF_FIELD_NAME",void 0),e=N("XSRF_TOKEN",void 0),f=b.Ia;f&&(f[d]&&delete f[d],a=fg(a,f||{}));f=b.postBody||"";var g=b.J;Li(a,b)&&(g||(g={}),g[d]=e);g&&p(f)&&(d=eg(f),eb(d,g),f=b.Ab&&"JSON"==b.Ab?JSON.stringify(d):df(d));d=f||g&&!cb(g);!Ji&&d&&"POST"!=b.method&&(Ji=!0,kf(Error("AJAX request with postData should use POST")));
var h=!1,k,n=Ni(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Oi(c,a,b.Sb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||m;d?b.M&&b.M.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.ca&&b.ca.call(f,a,e)}},
b.method,f,b.headers,b.responseType,b.withCredentials);
b.xb&&0<b.timeout&&(k=O(function(){h||(h=!0,n.abort(),window.clearTimeout(k),b.xb.call(b.context||m,n))},b.timeout))}
function Oi(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Pi(b):null)d={},x(b.getElementsByTagName("*"),function(a){d[a.tagName]=Qi(a)})}c&&Ri(d);
return d}
function Ri(a){if(sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Rb(a[b]);a[c]=d}else Ri(a[b])}}
function Pi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Qi(a){var b="";x(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ni(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&jf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Hi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=Ki(a,e))for(var n in e)k.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var Si={},Ti=0;function Ui(a){var b=new Image,c=""+Ti++;Si[c]=b;b.onload=b.onerror=function(){delete Si[c]};
b.src=a}
;function Vi(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Ni(c,void 0,"GET","",void 0):Ui(c))}}
;function Wi(a){Q.call(this,1,arguments);this.b=a}
v(Wi,Q);function Xi(a,b){Q.call(this,2,arguments);this.f=a;this.b=b}
v(Xi,Q);function Yi(a,b,c,d){Q.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
v(Yi,Q);function Zi(a,b){Q.call(this,1,arguments);this.f=a;this.b=b||null}
v(Zi,Q);function $i(a){Q.call(this,1,arguments)}
v($i,Q);var aj=new R("ypc-core-load",Wi),bj=new R("ypc-guide-sync-success",Xi),cj=new R("ypc-purchase-success",Yi),dj=new R("ypc-subscription-cancel",$i),ej=new R("ypc-subscription-cancel-success",Zi),fj=new R("ypc-init-subscription",$i);var gj=!1,hj=[];function ij(a){a.b?gj?T(xg,a):T(aj,new Wi(function(){T(fj,new $i(a.b))})):jj(a.f,a.j,a.i,a.source)}
function kj(a){a.b?gj?T(Cg,a):T(aj,new Wi(function(){T(dj,new $i(a.b))})):lj(a.f,a.l,a.j,a.i,a.source)}
function mj(a){nj(Qa(a.b))}
function oj(a){pj(Qa(a.b))}
function qj(a){rj(a.i,a.f,a.b)}
function sj(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(wg,new pg(b,c,a.b.channelInfo))}
function tj(a){var b=a.b;Ya(a.f,function(a,d){T(wg,new pg(d,a,b[d]))})}
function uj(a){T(Bg,new mg(a.f.itemId));a.b&&a.b.length&&(vj(a.b,Bg),vj(a.b,Dg))}
function jj(a,b,c,d){var e=new mg(a);T(ug,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=N("PLAYBACK_ID"))&&(c.plid=d);(d=N("EVENT_ID"))&&(c.ei=d);b&&wj(b,c);Mi("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ia:f,J:c,M:function(b,c){var d=c.response;T(wg,new pg(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&P("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Vi(d.actions)},
ca:function(){T(vg,e)}})}
function lj(a,b,c,d,e){var f=new mg(a);T(zg,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=N("PLAYBACK_ID"))&&(d.plid=a);(a=N("EVENT_ID"))&&(d.ei=a);c&&wj(c,d);Mi("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ia:g,J:d,M:function(a,b){var c=b.response;T(Bg,f);c.actions&&Vi(c.actions)},
ca:function(){T(Ag,f)}})}
function rj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new ng(a,b,c);Mi("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",J:d,onError:function(){T(Hg,e)},
M:function(){T(Gg,e)}})}}
function nj(a){if(a.length){var b=Sa(a,0,40);T("subscription-batch-subscribe-loading");vj(b,ug);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");vj(b,vg)};
Mi("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",J:c,M:function(c,f){d();var e=f.response,h=e.id;if("array"==pa(h)&&h.length==b.length){var k=e.channel_info_map;x(h,function(a,c){var d=b[c];T(wg,new pg(d,a,k[d]))});
a.length?nj(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function pj(a){if(a.length){var b=Sa(a,0,40);T("subscription-batch-unsubscribe-loading");vj(b,zg);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");vj(b,Ag)};
Mi("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",J:c,M:function(){d();vj(b,Bg);a.length&&pj(a)},
onError:function(){d()}})}}
function vj(a,b){x(a,function(a){T(b,new mg(a))})}
function wj(a,b){var c=eg(a),d;for(d in c)b[d]=c[d]}
;u("yt.setConfig",hf);u("yt.config.set",hf);u("ytbin.www.subscribeembed.init",function(){gj=!0;hj.push(U(tg,ij),U(yg,kj));gj||hj.push(U(xg,ij),U(Cg,kj),U(rg,mj),U(sg,oj),U(Fg,qj),U(cj,sj),U(ej,uj),U(bj,tj));var a=ii.v(),b=X(a);b in dg||(a.register(),ag(a,"yt-uix-init-"+b,a.init),ag(a,"yt-uix-dispose-"+b,a.dispose),dg[b]=a);Di()});}).call(this);
