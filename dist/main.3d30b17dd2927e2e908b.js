!function(){var e={726:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}window.addEventListener("load",(function(){var e=document.querySelector("#beaf-input-1"),t=document.querySelector("#beaf-before-1"),r=document.querySelector("#beaf-input-2"),o=document.querySelector("#beaf-before-2"),i=document.querySelector("#beaf-input-3"),u=document.querySelector("#beaf-before-3"),c=n((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=t,this.before=n,this.input.addEventListener("mousemove",(function(){r.before.style.setProperty("--clip-position","polygon(0px 0px, 0px 100%,"+r.input.value+"% 100%, "+r.input.value+"% 0%)")}))}));new c(e,t),new c(r,o),new c(i,u)}))},107:function(){window.addEventListener("load",(function(e){var t=document.querySelector(".slider-body"),n=Array.from(document.querySelectorAll(".slider-item")),r=!1,o=0,i=0;function u(e){return function(e){o=s(e),r=!0,requestAnimationFrame(f)}}function c(){r=!1}function a(e){if(r){var t=s(e);i=0+t-o}}function s(e){return e.type.includes("mouse")?e.pageX:e.touches[0].clientX}function f(){t.style.transform="translateX(".concat(i,"px)"),r&&requestAnimationFrame(f)}n.forEach((function(e,t){e.addEventListener("touchstart",u()),e.addEventListener("touchend",c),e.addEventListener("touchmove",a),e.addEventListener("mousedown",u()),e.addEventListener("mouseup",c),e.addEventListener("mouseleave",c),e.addEventListener("mousemove",a)})),window.oncontextmenu=function(e){return e.preventDefault(),e.stopPropagation(),!1}}))},91:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},57:function(e,t,n){"use strict";e.exports=n.p+"assets/woman2.jpg"},769:function(e,t,n){"use strict";e.exports=n.p+"assets/woman3.jpg"},523:function(e,t,n){"use strict";e.exports=n.p+"assets/woman4.jpg"},529:function(e,t,n){"use strict";e.exports=n.p+"assets/woman6.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){"use strict";var e=n(91),t=n.n(e),r=new URL(n(523),n.b),o=new URL(n(529),n.b),i=new URL(n(769),n.b),u=new URL(n(57),n.b);t()(r),t()(o),t()(i);t()(u),n(726),n(107)}()}();