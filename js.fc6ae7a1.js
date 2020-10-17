parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mjgT":[function(require,module,exports) {

},{}],"MyoJ":[function(require,module,exports) {
module.exports="/momontom/1.399f94bf.jpg";
},{}],"cGwW":[function(require,module,exports) {
module.exports="/momontom/2.b28e72d0.jpg";
},{}],"vUU3":[function(require,module,exports) {
module.exports="/momontom/3.ea3d6894.jpg";
},{}],"gLPK":[function(require,module,exports) {
module.exports="/momontom/4.3df3542a.jpg";
},{}],"Dqsk":[function(require,module,exports) {
module.exports="/momontom/5.d76ab1af.jpg";
},{}],"mahc":[function(require,module,exports) {
"use strict";require("../styles/reset.css"),require("../styles/style.css"),require("../styles/name.css"),require("../styles/clock.css"),require("../styles/todo.css"),require("../styles/temp.css");var e=a(require("../images/1.jpg")),r=a(require("../images/2.jpg")),s=a(require("../images/3.jpg")),t=a(require("../images/4.jpg")),u=a(require("../images/5.jpg"));function a(e){return e&&e.__esModule?e:{default:e}}var i=document.querySelector("body"),c=5;function n(a){switch(a){case 0:return e.default;case 1:return r.default;case 2:return s.default;case 3:return t.default;case 4:return u.default;default:return e.default}}function l(e){var r=new Image;r.src=n(e),r.classList.add("bg-image"),i.prepend(r)}function d(){return Math.floor(Math.random()*c)}function o(){l(d())}o();
},{"../styles/reset.css":"mjgT","../styles/style.css":"mjgT","../styles/name.css":"mjgT","../styles/clock.css":"mjgT","../styles/todo.css":"mjgT","../styles/temp.css":"mjgT","../images/1.jpg":"MyoJ","../images/2.jpg":"cGwW","../images/3.jpg":"vUU3","../images/4.jpg":"gLPK","../images/5.jpg":"Dqsk"}]},{},["mahc"], null)
//# sourceMappingURL=/momontom/js.fc6ae7a1.js.map