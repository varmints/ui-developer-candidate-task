parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jhiH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){var t=e.currentTarget;t.classList.toggle("opened"),t.classList.contains("opened")?(t.setAttribute("aria-expanded",t.classList.contains("opened")),document.querySelector(".navbar__menu-button ~ ul").style.left="0%"):(t.setAttribute("aria-expanded",t.classList.contains("opened")),document.querySelector(".navbar__menu-button ~ ul").style.left="-100%")},t=e;exports.default=t;
},{}],"zEjv":[function(require,module,exports) {
var define;
var t;!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof t&&t.amd?t([],e):"object"==typeof exports?exports.Splide=e():n.Splide=e()}(self,function(){return(()=>{"use strict";var t={311:(t,n,e)=>{e.r(n),e.d(n,{default:()=>Tt});var i={};e.r(i),e.d(i,{CREATED:()=>G,DESTROYED:()=>K,IDLE:()=>Y,MOUNTED:()=>X,MOVING:()=>J});const o=function(){var t=[];function n(t){t.elm&&t.elm.removeEventListener(t.event,t.handler,t.options)}return{on:function(n,e,i,o){void 0===i&&(i=null),void 0===o&&(o={}),n.split(" ").forEach(function(n){i&&i.addEventListener(n,e,o),t.push({event:n,handler:e,elm:i,options:o})})},off:function(e,i){void 0===i&&(i=null),e.split(" ").forEach(function(e){t=t.filter(function(t){return!t||t.event!==e||t.elm!==i||(n(t),!1)})})},emit:function(n){for(var e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];t.forEach(function(t){t.elm||t.event.split(".")[0]!==n||t.handler.apply(t,i)})},destroy:function(){t.forEach(n),t=[]}}},r=function(t){var n=t;return{set:function(t){n=t},is:function(t){return t===n}}};function s(){return(s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var a=Object.keys;function u(t,n){a(t).some(function(e,i){return n(t[e],e,i)})}function c(t){return a(t).map(function(n){return t[n]})}function d(t){return"object"==typeof t}function f(t,n){var e=s({},t);return u(n,function(t,n){d(t)?(d(e[n])||(e[n]={}),e[n]=f(e[n],t)):e[n]=t}),e}function l(t){return Array.isArray(t)?t:[t]}function h(t,n,e){return Math.min(Math.max(t,n>e?e:n),n>e?n:e)}function p(t,n){var e=0;return t.replace(/%s/g,function(){return l(n)[e++]})}function g(t){var n=typeof t;return"number"===n&&t>0?parseFloat(t)+"px":"string"===n?t:""}function v(t){return t<10?"0"+t:t}function m(t,n){if("string"==typeof n){var e=w("div",{});P(e,{position:"absolute",width:n}),k(t,e),n=e.clientWidth,_(e)}return+n||0}function y(t,n){return t?t.querySelector(n.split(" ")[0]):null}function b(t,n){return x(t,n)[0]}function x(t,n){return t?c(t.children).filter(function(t){return A(t,n.split(" ")[0])||t.tagName===n}):[]}function w(t,n){var e=document.createElement(t);return u(n,function(t,n){return I(e,n,t)}),e}function E(t){var n=w("div",{});return n.innerHTML=t,n.firstChild}function _(t){l(t).forEach(function(t){if(t){var n=t.parentElement;n&&n.removeChild(t)}})}function k(t,n){t&&t.appendChild(n)}function S(t,n){if(t&&n){var e=n.parentElement;e&&e.insertBefore(t,n)}}function P(t,n){t&&u(n,function(n,e){null!==n&&(t.style[e]=n)})}function C(t,n,e){t&&l(n).forEach(function(n){n&&t.classList[e?"remove":"add"](n)})}function O(t,n){C(t,n,!1)}function z(t,n){C(t,n,!0)}function A(t,n){return!!t&&t.classList.contains(n)}function I(t,n,e){t&&t.setAttribute(n,e)}function M(t,n){return t?t.getAttribute(n):""}function T(t,n){l(n).forEach(function(n){l(t).forEach(function(t){return t&&t.removeAttribute(n)})})}function L(t){return t.getBoundingClientRect()}var H="slide",j="loop",W="fade";const N=function(t,n){var e,i;return{mount:function(){e=n.Elements.list,t.on("transitionend",function(t){t.target===e&&i&&i()},e)},start:function(o,r,s,a,u){var c=t.options,d=n.Controller.edgeIndex,f=c.speed;i=u,t.is(H)&&(0===s&&r>=d||s>=d&&0===r)&&(f=c.rewindSpeed||f),P(e,{transition:"transform "+f+"ms "+c.easing,transform:"translate("+a.x+"px,"+a.y+"px)"})}}},q=function(t,n){function e(e){var i=t.options;P(n.Elements.slides[e],{transition:"opacity "+i.speed+"ms "+i.easing})}return{mount:function(){e(t.index)},start:function(t,i,o,r,s){var a=n.Elements.track;P(a,{height:g(a.clientHeight)}),e(i),setTimeout(function(){s(),P(a,{height:""})})}}};var R="[SPLIDE]";function D(t){console.error(R+" "+t)}function F(t,n){if(!t)throw new Error(n)}var U="splide",B={active:"is-active",visible:"is-visible",loading:"is-loading"},V={type:"slide",rewind:!1,speed:400,rewindSpeed:0,waitForTransition:!0,width:0,height:0,fixedWidth:0,fixedHeight:0,heightRatio:0,autoWidth:!1,autoHeight:!1,perPage:1,perMove:0,clones:0,start:0,focus:!1,gap:0,padding:0,arrows:!0,arrowPath:"",pagination:!0,autoplay:!1,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,lazyLoad:!1,preloadPages:1,easing:"cubic-bezier(.42,.65,.27,.99)",keyboard:"global",drag:!0,dragAngleThreshold:30,swipeDistanceThreshold:150,flickVelocityThreshold:.6,flickPower:600,flickMaxPages:1,direction:"ltr",cover:!1,accessibility:!0,slideFocus:!0,isNavigation:!1,trimSpace:!0,updateOnMove:!1,throttle:100,destroy:!1,breakpoints:!1,classes:{root:U,slider:U+"__slider",track:U+"__track",list:U+"__list",slide:U+"__slide",container:U+"__slide__container",arrows:U+"__arrows",arrow:U+"__arrow",prev:U+"__arrow--prev",next:U+"__arrow--next",pagination:U+"__pagination",page:U+"__pagination__page",clone:U+"__slide--clone",progress:U+"__progress",bar:U+"__progress__bar",autoplay:U+"__autoplay",play:U+"__play",pause:U+"__pause",spinner:U+"__spinner",sr:U+"__sr"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}},G=1,X=2,Y=3,J=4,K=5;function Q(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Z=function(){function t(t,n,e){void 0===n&&(n={}),void 0===e&&(e={}),this.root=t instanceof Element?t:document.querySelector(t),F(this.root,"An invalid element/selector was given."),this.Components=null,this.Event=o(),this.State=r(G),this.STATES=i,this._o=f(V,n),this._i=0,this._c=e,this._e={},this._t=null}var n,e,s,a=t.prototype;return a.mount=function(t,n){var e=this;void 0===t&&(t=this._e),void 0===n&&(n=this._t),this.State.set(G),this._e=t,this._t=n,this.Components=function(t,n,e){var i={};return u(n,function(n,e){i[e]=n(t,i,e.toLowerCase())}),e||(e=t.is(W)?q:N),i.Transition=e(t,i),i}(this,f(this._c,t),n);try{u(this.Components,function(t,n){var i=t.required;void 0===i||i?t.mount&&t.mount():delete e.Components[n]})}catch(o){return void D(o.message)}var i=this.State;return i.set(X),u(this.Components,function(t){t.mounted&&t.mounted()}),this.emit("mounted"),i.set(Y),this.emit("ready"),P(this.root,{visibility:"visible"}),this.on("move drag",function(){return i.set(J)}).on("moved dragged",function(){return i.set(Y)}),this},a.sync=function(t){return this.sibling=t,this},a.on=function(t,n,e,i){return void 0===e&&(e=null),void 0===i&&(i={}),this.Event.on(t,n,e,i),this},a.off=function(t,n){return void 0===n&&(n=null),this.Event.off(t,n),this},a.emit=function(t){for(var n,e=arguments.length,i=new Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];return(n=this.Event).emit.apply(n,[t].concat(i)),this},a.go=function(t,n){return void 0===n&&(n=this.options.waitForTransition),(this.State.is(Y)||this.State.is(J)&&!n)&&this.Components.Controller.go(t,!1),this},a.is=function(t){return t===this._o.type},a.add=function(t,n){return void 0===n&&(n=-1),this.Components.Elements.add(t,n,this.refresh.bind(this)),this},a.remove=function(t){return this.Components.Elements.remove(t),this.refresh(),this},a.refresh=function(){return this.emit("refresh:before").emit("refresh").emit("resize"),this},a.destroy=function(t){var n=this;if(void 0===t&&(t=!0),!this.State.is(G))return c(this.Components).reverse().forEach(function(n){n.destroy&&n.destroy(t)}),this.emit("destroy",t),this.Event.destroy(),this.State.set(K),this;this.on("ready",function(){return n.destroy(t)})},n=t,(e=[{key:"index",get:function(){return this._i},set:function(t){this._i=parseInt(t)}},{key:"length",get:function(){return this.Components.Elements.length}},{key:"options",get:function(){return this._o},set:function(t){var n=this.State.is(G);n||this.emit("update"),this._o=f(this._o,t),n||this.emit("updated",this._o)}},{key:"classes",get:function(){return this._o.classes}},{key:"i18n",get:function(){return this._o.i18n}}])&&Q(n.prototype,e),s&&Q(n,s),t}();const $=function(t){var n=M(t.root,"data-splide");if(n)try{t.options=JSON.parse(n)}catch(e){D(e.message)}return{mount:function(){t.State.is(G)&&(t.index=t.options.start)}}};var tt="ttb";const nt=function(t,n){var e=t.root,i=t.classes,o=[];if(!e.id){window.splide=window.splide||{};var r=window.splide.uid||0;window.splide.uid=++r,e.id="splide"+v(r)}var s={mount:function(){var n=this;this.init(),t.on("refresh",function(){n.destroy(),n.init()}).on("updated",function(){z(e,a()),O(e,a())})},destroy:function(){o.forEach(function(t){t.destroy()}),o=[],z(e,a())},init:function(){var t=this;!function(){s.slider=b(e,i.slider),s.track=y(e,"."+i.track),s.list=b(s.track,i.list),F(s.track&&s.list,"Track or list was not found."),s.slides=x(s.list,i.slide);var t=d(i.arrows);s.arrows={prev:y(t,"."+i.prev),next:y(t,"."+i.next)};var n=d(i.autoplay);s.bar=y(d(i.progress),"."+i.bar),s.play=y(n,"."+i.play),s.pause=y(n,"."+i.pause),s.track.id=s.track.id||e.id+"-track",s.list.id=s.list.id||e.id+"-list"}(),O(e,a()),this.slides.forEach(function(n,e){t.register(n,e,-1)})},register:function(n,e,i){var r=function(t,n,e,i){var o=t.options.updateOnMove,r="ready.slide updated.slide resized.slide moved.slide"+(o?" move.slide":""),s={slide:i,index:n,realIndex:e,container:b(i,t.classes.container),isClone:e>-1,mount:function(){var s=this;this.isClone||(i.id=t.root.id+"-slide"+v(n+1)),t.on(r,function(){return s.update()}).on("update.slide",u).on("click",function(){return t.emit("click",s)},i),o&&t.on("move.slide",function(t){t===e&&a(!0,!1)}),P(i,{display:""}),this.styles=M(i,"style")||""},destroy:function(){t.off(r).off("update.slide").off("click",i),z(i,c(B)),u(),T(this.container,"style")},update:function(){a(this.isActive(),!1),a(this.isVisible(),!0)},isActive:function(){return t.index===n},isVisible:function(){var n=this.isActive();if(t.is(W)||n)return n;var e=Math.ceil,o=L(t.Components.Elements.track),r=L(i);return t.options.direction===tt?o.top<=r.top&&r.bottom<=e(o.bottom):o.left<=r.left&&r.right<=e(o.right)},isWithin:function(e,i){var o=Math.abs(e-n);return t.is(H)||this.isClone||(o=Math.min(o,t.length-o)),o<i}};function a(n,e){var o=e?"visible":"active",r=B[o];n?(O(i,r),t.emit(""+o,s)):A(i,r)&&(z(i,r),t.emit(e?"hidden":"inactive",s))}function u(){I(i,"style",s.styles)}return s}(t,e,i,n);r.mount(),o.push(r)},getSlide:function(t){return o.filter(function(n){return n.index===t})[0]},getSlides:function(t){return t?o:o.filter(function(t){return!t.isClone})},getSlidesByPage:function(e){var i=n.Controller.toIndex(e),r=t.options,s=!1!==r.focus?1:r.perPage;return o.filter(function(t){var n=t.index;return i<=n&&n<i+s})},add:function(t,n,e){if("string"==typeof t&&(t=E(t)),t instanceof Element){var i=this.slides[n];P(t,{display:"none"}),i?(S(t,i),this.slides.splice(n,0,t)):(k(this.list,t),this.slides.push(t)),function(t,n){var e=t.querySelectorAll("img"),i=e.length;if(i){var o=0;u(e,function(t){t.onload=t.onerror=function(){++o===i&&n()}})}else n()}(t,function(){e&&e(t)})}},remove:function(t){_(this.slides.splice(t,1)[0])},each:function(t){o.forEach(t)},get length(){return this.slides.length},get total(){return o.length}};function a(){var n=i.root,e=t.options;return[n+"--"+e.type,n+"--"+e.direction,e.drag?n+"--draggable":"",e.isNavigation?n+"--nav":"",B.active]}function d(t){return b(e,t)||b(s.slider,t)}return s};var et=Math.floor;const it=function(t,n){var e,i,o={mount:function(){e=t.options,i=t.is(j),t.on("move",function(n){t.index=n}).on("updated refresh",function(n){e=n||e,t.index=h(t.index,0,o.edgeIndex)})},go:function(t,e){var i=this.trim(this.parse(t));n.Track.go(i,this.rewind(i),e)},parse:function(n){var i=t.index,r=String(n).match(/([+\-<>]+)(\d+)?/),s=r?r[1]:"",a=r?parseInt(r[2]):0;switch(s){case"+":i+=a||1;break;case"-":i-=a||1;break;case">":case"<":i=function(t,n,i){if(t>-1)return o.toIndex(t);var r=e.perMove,s=i?-1:1;if(r)return n+r*s;return o.toIndex(o.toPage(n)+s)}(a,i,"<"===s);break;default:i=parseInt(n)}return i},toIndex:function(n){if(r())return n;var i=t.length,o=e.perPage,s=n*o;return i-o<=(s-=(this.pageLength*o-i)*et(s/i))&&s<i&&(s=i-o),s},toPage:function(n){if(r())return n;var i=t.length,o=e.perPage;return et(i-o<=n&&n<i?(i-1)/o:n/o)},trim:function(t){return i||(t=e.rewind?this.rewind(t):h(t,0,this.edgeIndex)),t},rewind:function(t){var n=this.edgeIndex;if(i){for(;t>n;)t-=n+1;for(;t<0;)t+=n+1}else t>n?t=0:t<0&&(t=n);return t},isRtl:function(){return"rtl"===e.direction},get pageLength(){var n=t.length;return r()?n:Math.ceil(n/e.perPage)},get edgeIndex(){var n=t.length;return n?r()||e.isNavigation||i?n-1:n-e.perPage:0},get prevIndex(){var n=t.index-1;return(i||e.rewind)&&(n=this.rewind(n)),n>-1?n:-1},get nextIndex(){var n=t.index+1;return(i||e.rewind)&&(n=this.rewind(n)),t.index<n&&n<=this.edgeIndex||0===n?n:-1}};function r(){return!1!==e.focus}return o};var ot=Math.abs;const rt=function(t,n){var e,i,o,r=t.options.direction===tt,s=t.is(W),a="rtl"===t.options.direction,u=!1,c=a?1:-1,d={sign:c,mount:function(){i=n.Elements,e=n.Layout,o=i.list},mounted:function(){var n=this;s||(this.jump(0),t.on("mounted resize updated",function(){n.jump(t.index)}))},go:function(e,i,o){var r=l(e),a=t.index;t.State.is(J)&&u||(u=e!==i,o||t.emit("move",i,a,e),Math.abs(r-this.position)>=1||s?n.Transition.start(e,i,a,this.toCoord(r),function(){f(e,i,a,o)}):e!==a&&"move"===t.options.trimSpace?n.Controller.go(e+e-a,o):f(e,i,a,o))},jump:function(t){this.translate(l(t))},translate:function(t){P(o,{transform:"translate"+(r?"Y":"X")+"("+t+"px)"})},cancel:function(){t.is(j)?this.shift():this.translate(this.position),P(o,{transition:""})},shift:function(){var n=ot(this.position),e=ot(this.toPosition(0)),i=ot(this.toPosition(t.length)),o=i-e;n<e?n+=o:n>i&&(n-=o),this.translate(c*n)},trim:function(n){return!t.options.trimSpace||t.is(j)?n:h(n,c*(e.totalSize()-e.size-e.gap),0)},toIndex:function(t){var n=this,e=0,o=1/0;return i.getSlides(!0).forEach(function(i){var r=i.index,s=ot(n.toPosition(r)-t);s<o&&(o=s,e=r)}),e},toCoord:function(t){return{x:r?0:t,y:r?t:0}},toPosition:function(t){var n=e.totalSize(t)-e.slideSize(t)-e.gap;return c*(n+this.offset(t))},offset:function(n){var i=t.options.focus,o=e.slideSize(n);return"center"===i?-(e.size-o)/2:-(parseInt(i)||0)*(o+e.gap)},get position(){var t=r?"top":a?"right":"left";return L(o)[t]-(L(i.track)[t]-e.padding[t]*c)}};function f(n,e,i,r){P(o,{transition:""}),u=!1,s||d.jump(e),r||t.emit("moved",e,i,n)}function l(t){return d.trim(d.toPosition(t))}return d},st=function(t,n){var e=[],i=0,o=n.Elements,r={mount:function(){var n=this;t.is(j)&&(s(),t.on("refresh:before",function(){n.destroy()}).on("refresh",s).on("resize",function(){i!==a()&&(n.destroy(),t.refresh())}))},destroy:function(){_(e),e=[]},get clones(){return e},get length(){return e.length}};function s(){r.destroy(),function(t){var n=o.length,i=o.register;if(n){for(var r=o.slides;r.length<t;)r=r.concat(r);r.slice(0,t).forEach(function(t,r){var s=u(t);k(o.list,s),e.push(s),i(s,r+n,r%n)}),r.slice(-t).forEach(function(o,s){var a=u(o);S(a,r[0]),e.push(a),i(a,s-t,(n+s-t%n)%n)})}}(i=a())}function a(){var n=t.options;if(n.clones)return n.clones;var e=n.autoWidth||n.autoHeight?o.length:n.perPage,i=n.direction===tt?"Height":"Width",r=m(t.root,n["fixed"+i]);return r&&(e=Math.ceil(o.track["client"+i]/r)),e*(n.drag?n.flickMaxPages+1:1)}function u(n){var e=n.cloneNode(!0);return O(e,t.classes.clone),T(e,"id"),e}return r};function at(t,n){var e;return function(){e||(e=setTimeout(function(){t(),e=null},n))}}const ut=function(t,n){var e,i,o=n.Elements,r=t.options.direction===tt,s=(e={mount:function(){t.on("resize load",at(function(){t.emit("resize")},t.options.throttle),window).on("resize",c).on("updated refresh",u),u(),this.totalSize=r?this.totalHeight:this.totalWidth,this.slideSize=r?this.slideHeight:this.slideWidth},destroy:function(){T([o.list,o.track],"style")},get size(){return r?this.height:this.width}},i=r?function(t,n){var e,i,o=n.Elements,r=t.root;return{margin:"marginBottom",init:function(){this.resize()},resize:function(){i=t.options,e=o.track,this.gap=m(r,i.gap);var n=i.padding,s=m(r,n.top||n),a=m(r,n.bottom||n);this.padding={top:s,bottom:a},P(e,{paddingTop:g(s),paddingBottom:g(a)})},totalHeight:function(n){void 0===n&&(n=t.length-1);var e=o.getSlide(n);return e?L(e.slide).bottom-L(o.list).top+this.gap:0},slideWidth:function(){return m(r,i.fixedWidth||this.width)},slideHeight:function(t){if(i.autoHeight){var n=o.getSlide(t);return n?n.slide.offsetHeight:0}var e=i.fixedHeight||(this.height+this.gap)/i.perPage-this.gap;return m(r,e)},get width(){return e.clientWidth},get height(){var t=i.height||this.width*i.heightRatio;return F(t,'"height" or "heightRatio" is missing.'),m(r,t)-this.padding.top-this.padding.bottom}}}(t,n):function(t,n){var e,i=n.Elements,o=t.root,r=t.options;return{margin:"margin"+("rtl"===r.direction?"Left":"Right"),height:0,init:function(){this.resize()},resize:function(){r=t.options,e=i.track,this.gap=m(o,r.gap);var n=r.padding,s=m(o,n.left||n),a=m(o,n.right||n);this.padding={left:s,right:a},P(e,{paddingLeft:g(s),paddingRight:g(a)})},totalWidth:function(n){void 0===n&&(n=t.length-1);var e=i.getSlide(n),o=0;if(e){var s=L(e.slide),a=L(i.list);o="rtl"===r.direction?a.right-s.left:s.right-a.left,o+=this.gap}return o},slideWidth:function(t){if(r.autoWidth){var n=i.getSlide(t);return n?n.slide.offsetWidth:0}var e=r.fixedWidth||(this.width+this.gap)/r.perPage-this.gap;return m(o,e)},slideHeight:function(){var t=r.height||r.fixedHeight||this.width*r.heightRatio;return m(o,t)},get width(){return e.clientWidth-this.padding.left-this.padding.right}}}(t,n),a(i).forEach(function(t){e[t]||Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}),e);function u(){s.init(),P(t.root,{maxWidth:g(t.options.width)}),o.each(function(t){t.slide.style[s.margin]=g(s.gap)}),c()}function c(){var n=t.options;s.resize(),P(o.track,{height:g(s.height)});var e=n.autoHeight?null:g(s.slideHeight());o.each(function(t){P(t.container,{height:e}),P(t.slide,{width:n.autoWidth?null:g(s.slideWidth(t.index)),height:t.container?null:e})}),t.emit("resized")}return s};var ct=Math.abs,dt=.1,ft=7;const lt=function(t,n){var e,i,o,r,s=n.Track,a=n.Controller,c=t.options.direction===tt,d=c?"y":"x",f={disabled:!1,mount:function(){var e=this,i=n.Elements,o=i.track;t.on("touchstart mousedown",l,o).on("touchmove mousemove",g,o,{passive:!1}).on("touchend touchcancel mouseleave mouseup dragend",v,o).on("mounted refresh",function(){u(i.list.querySelectorAll("img, a"),function(n){t.off("dragstart",n).on("dragstart",function(t){t.preventDefault()},n,{passive:!1})})}).on("mounted updated",function(){e.disabled=!t.options.drag})}};function l(t){f.disabled||r||p(t)}function p(t){e=s.toCoord(s.position),i=m(t,{}),o=i}function g(n){if(i)if(o=m(n,i),r){if(n.cancelable&&n.preventDefault(),!t.is(W)){var u=e[d]+o.offset[d];s.translate(function(n){if(t.is(H)){var e=s.sign,i=e*s.trim(s.toPosition(0)),o=e*s.trim(s.toPosition(a.edgeIndex));(n*=e)<i?n=i-ft*Math.log(i-n):n>o&&(n=o+ft*Math.log(n-o)),n*=e}return n}(u))}}else(function(n){var e=n.offset;if(t.State.is(J)&&t.options.waitForTransition)return!1;var i=180*Math.atan(ct(e.y)/ct(e.x))/Math.PI;c&&(i=90-i);return i<t.options.dragAngleThreshold})(o)&&(t.emit("drag",i),r=!0,s.cancel(),p(n))}function v(){i=null,r&&(t.emit("dragged",o),function(e){var i=e.velocity[d],o=ct(i);if(o>0){var r=t.options,u=t.index,c=i<0?-1:1,f=u;if(!t.is(W)){var l=s.position;o>r.flickVelocityThreshold&&ct(e.offset[d])<r.swipeDistanceThreshold&&(l+=c*Math.min(o*r.flickPower,n.Layout.size*(r.flickMaxPages||1))),f=s.toIndex(l)}f===u&&o>dt&&(f=u+c*s.sign),t.is(H)&&(f=h(f,0,a.edgeIndex)),a.go(f,r.isNavigation)}}(o),r=!1)}function m(t,n){var e=t.timeStamp,i=t.touches,o=i?i[0]:t,r=o.clientX,s=o.clientY,a=n.to||{},u=a.x,c=void 0===u?r:u,d=a.y,f={x:r-c,y:s-(void 0===d?s:d)},l=e-(n.time||0);return{to:{x:r,y:s},offset:f,time:e,velocity:{x:f.x/l,y:f.y/l}}}return f},ht=function(t,n){var e=!1;function i(t){e&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())}return{required:t.options.drag,mount:function(){t.on("click",i,n.Elements.track,{capture:!0}).on("drag",function(){e=!0}).on("dragged",function(){setTimeout(function(){e=!1})})}}};var pt={HOVER:1,FOCUS:2,MANUAL:3};var gt="http://www.w3.org/2000/svg",vt="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",mt=40;const yt=function(t,n,e){var i,o,r,s=t.classes,a=t.root,u=n.Elements;function c(){var r=n.Controller,s=r.prevIndex,a=r.nextIndex,u=t.length>t.options.perPage||t.is(j);i.disabled=s<0||!u,o.disabled=a<0||!u,t.emit(e+":updated",i,o,s,a)}function d(n){return E('<button class="'+s.arrow+" "+(n?s.prev:s.next)+'" type="button"><svg xmlns="'+gt+'"\tviewBox="0 0 '+mt+" "+mt+'"\twidth="'+mt+'"\theight="'+mt+'"><path d="'+(t.options.arrowPath||vt)+'" />')}return{required:t.options.arrows,mount:function(){i=u.arrows.prev,o=u.arrows.next,i&&o||!t.options.arrows||(i=d(!0),o=d(!1),r=!0,function(){var n=w("div",{class:s.arrows});k(n,i),k(n,o);var e=u.slider,r="slider"===t.options.arrows&&e?e:a;S(n,r.firstElementChild)}()),i&&o&&t.on("click",function(){t.go("<")},i).on("click",function(){t.go(">")},o).on("mounted move updated refresh",c),this.arrows={prev:i,next:o}},mounted:function(){t.emit(e+":mounted",i,o)},destroy:function(){T([i,o],"disabled"),r&&_(i.parentElement)}}};const bt=function(t,n,e){var i={},o=n.Elements,r={mount:function(){var n,e,a,u,c=t.options.pagination;if(c){n=t.options,e=t.classes,a=w("ul",{class:e.pagination}),u=o.getSlides(!1).filter(function(t){return!1!==n.focus||t.index%n.perPage==0}).map(function(n,i){var r=w("li",{}),s=w("button",{class:e.page,type:"button"});return k(r,s),k(a,r),t.on("click",function(){t.go(">"+i)},s),{li:r,button:s,page:i,Slides:o.getSlidesByPage(i)}}),i={list:a,items:u};var d=o.slider;k("slider"===c&&d?d:t.root,i.list),t.on("move.page",s)}t.off("updated.page refresh.page").on("updated.page refresh.page",function(){r.destroy(),t.options.pagination&&(r.mount(),r.mounted())})},mounted:function(){if(t.options.pagination){var n=t.index;t.emit(e+":mounted",i,this.getItem(n)),s(n,-1)}},destroy:function(){_(i.list),i.items&&i.items.forEach(function(n){t.off("click",n.button)}),t.off("move.page"),i={}},getItem:function(t){return i.items[n.Controller.toPage(t)]},get data(){return i}};function s(n,o){var s=r.getItem(o),a=r.getItem(n),u=B.active;s&&z(s.button,u),a&&O(a.button,u),t.emit(e+":updated",i,s,a)}return r};var xt="data-splide-lazy",wt="data-splide-lazy-srcset";var Et="aria-current",_t="aria-controls",kt="aria-label",St="aria-hidden",Pt="tabindex",Ct={ltr:{ArrowLeft:"<",ArrowRight:">",Left:"<",Right:">"},rtl:{ArrowLeft:">",ArrowRight:"<",Left:">",Right:"<"},ttb:{ArrowUp:"<",ArrowDown:">",Up:"<",Down:">"}};const Ot=function(t,n){var e=t.i18n,i=n.Elements,o=[St,Pt,_t,kt,Et,"role"];function r(n,e){I(n,St,!e),t.options.slideFocus&&I(n,Pt,e?0:-1)}function s(t,n){var e=i.track.id;I(t,_t,e),I(n,_t,e)}function a(n,i,o,r){var s=t.index,a=o>-1&&s<o?e.last:e.prev,u=r>-1&&s>r?e.first:e.next;I(n,kt,a),I(i,kt,u)}function u(n,i){i&&I(i.button,Et,!0),n.items.forEach(function(n){var i=t.options,o=p(!1===i.focus&&i.perPage>1?e.pageX:e.slideX,n.page+1),r=n.button,s=n.Slides.map(function(t){return t.slide.id});I(r,_t,s.join(" ")),I(r,kt,o)})}function c(t,n,e){n&&T(n.button,Et),e&&I(e.button,Et,!0)}function d(t){i.each(function(n){var i=n.slide,o=n.realIndex;l(i)||I(i,"role","button");var r=o>-1?o:n.index,s=p(e.slideX,r+1),a=t.Components.Elements.getSlide(r);I(i,kt,s),a&&I(i,_t,a.slide.id)})}function f(t,n){var e=t.slide;n?I(e,Et,!0):T(e,Et)}function l(t){return"BUTTON"===t.tagName}return{required:t.options.accessibility,mount:function(){t.on("visible",function(t){r(t.slide,!0)}).on("hidden",function(t){r(t.slide,!1)}).on("arrows:mounted",s).on("arrows:updated",a).on("pagination:mounted",u).on("pagination:updated",c).on("refresh",function(){T(n.Clones.clones,o)}),t.options.isNavigation&&t.on("navigation:mounted navigation:updated",d).on("active",function(t){f(t,!0)}).on("inactive",function(t){f(t,!1)}),["play","pause"].forEach(function(t){var n=i[t];n&&(l(n)||I(n,"role","button"),I(n,_t,i.track.id),I(n,kt,e[t]))})},destroy:function(){var t=n.Arrows,e=t?t.arrows:{};T(i.slides.concat([e.prev,e.next,i.play,i.pause]),o)}}};var zt="move.sync",At="mouseup touchend",It=[" ","Enter","Spacebar"];var Mt={Options:$,Breakpoints:function(t){var n,e,i=t.options.breakpoints,o=at(s,50),r=[];function s(){var o,s=(o=r.filter(function(t){return t.mql.matches})[0])?o.point:-1;if(s!==e){e=s;var a=t.State,u=i[s]||n,c=u.destroy;c?(t.options=n,t.destroy("completely"===c)):(a.is(K)&&t.mount(),t.options=u)}}return{required:i&&matchMedia,mount:function(){r=Object.keys(i).sort(function(t,n){return+t-+n}).map(function(t){return{point:t,mql:matchMedia("(max-width:"+t+"px)")}}),this.destroy(!0),addEventListener("resize",o),n=t.options,s()},destroy:function(t){t&&removeEventListener("resize",o)}}},Controller:it,Elements:nt,Track:rt,Clones:st,Layout:ut,Drag:lt,Click:ht,Autoplay:function(t,n,e){var i,o=[],r=n.Elements,s={required:t.options.autoplay,mount:function(){var n=t.options;r.slides.length>n.perPage&&(i=function(t,n,e){var i,o,r,s=window.requestAnimationFrame,a=!0,u=function u(c){a||(i||(i=c,r&&r<1&&(i-=r*n)),r=(o=c-i)/n,o>=n&&(i=0,r=1,t()),e&&e(r),s(u))};return{pause:function(){a=!0,i=0},play:function(t){i=0,t&&(r=0),a&&(a=!1,s(u))}}}(function(){t.go(">")},n.interval,function(n){t.emit(e+":playing",n),r.bar&&P(r.bar,{width:100*n+"%"})}),function(){var n=t.options,e=t.sibling,i=[t.root,e?e.root:null];n.pauseOnHover&&(a(i,"mouseleave",pt.HOVER,!0),a(i,"mouseenter",pt.HOVER,!1)),n.pauseOnFocus&&(a(i,"focusout",pt.FOCUS,!0),a(i,"focusin",pt.FOCUS,!1)),r.play&&t.on("click",function(){s.play(pt.FOCUS),s.play(pt.MANUAL)},r.play),r.pause&&a([r.pause],"click",pt.MANUAL,!1),t.on("move refresh",function(){s.play()}).on("destroy",function(){s.pause()})}(),this.play())},play:function(n){void 0===n&&(n=0),(o=o.filter(function(t){return t!==n})).length||(t.emit(e+":play"),i.play(t.options.resetProgress))},pause:function(n){void 0===n&&(n=0),i.pause(),-1===o.indexOf(n)&&o.push(n),1===o.length&&t.emit(e+":pause")}};function a(n,e,i,o){n.forEach(function(n){t.on(e,function(){s[o?"play":"pause"](i)},n)})}return s},Cover:function(t,n){function e(t){n.Elements.each(function(n){var e=b(n.slide,"IMG")||b(n.container,"IMG");e&&e.src&&i(e,t)})}function i(t,n){P(t.parentElement,{background:n?"":'center/cover no-repeat url("'+t.src+'")'}),P(t,{display:n?"":"none"})}return{required:t.options.cover,mount:function(){t.on("lazyload:loaded",function(t){i(t,!1)}),t.on("mounted updated refresh",function(){return e(!1)})},destroy:function(){e(!0)}}},Arrows:yt,Pagination:bt,LazyLoad:function(t,n,e){var i,o,r=t.options,s="sequential"===r.lazyLoad;function a(){o=[],i=0}function c(n){n=isNaN(n)?t.index:n,(o=o.filter(function(t){return!t.Slide.isWithin(n,r.perPage*(r.preloadPages+1))||(d(t.img,t.Slide),!1)}))[0]||t.off("moved."+e)}function d(n,e){O(e.slide,B.loading);var i=w("span",{class:t.classes.spinner});k(n.parentElement,i),n.onload=function(){l(n,i,e,!1)},n.onerror=function(){l(n,i,e,!0)},I(n,"srcset",M(n,wt)||""),I(n,"src",M(n,xt)||"")}function f(){if(i<o.length){var t=o[i];d(t.img,t.Slide)}i++}function l(n,i,o,r){z(o.slide,B.loading),r||(_(i),P(n,{display:""}),t.emit(e+":loaded",n).emit("resize")),s&&f()}return{required:r.lazyLoad,mount:function(){t.on("mounted refresh",function(){a(),n.Elements.each(function(t){u(t.slide.querySelectorAll("["+xt+"], ["+wt+"]"),function(n){n.src||n.srcset||(o.push({img:n,Slide:t}),P(n,{display:"none"}))})}),s&&f()}),s||t.on("mounted refresh moved."+e,c)},destroy:a}},Keyboard:function(t){var n;return{mount:function(){t.on("mounted updated",function(){var e=t.options,i=t.root,o=Ct[e.direction],r=e.keyboard;n&&(t.off("keydown",n),T(i,Pt)),r&&("focused"===r?(n=i,I(i,Pt,0)):n=document,t.on("keydown",function(n){o[n.key]&&t.go(o[n.key])},n))})}}},Sync:function(t){var n=t.sibling,e=n&&n.options.isNavigation;function i(){t.on(zt,function(t,e,i){n.off(zt).go(n.is(j)?i:t,!1),o()})}function o(){n.on(zt,function(n,e,o){t.off(zt).go(t.is(j)?o:n,!1),i()})}function r(){n.Components.Elements.each(function(n){var e=n.slide,i=n.index;t.off(At,e).on(At,function(t){t.button&&0!==t.button||s(i)},e),t.off("keyup",e).on("keyup",function(t){It.indexOf(t.key)>-1&&(t.preventDefault(),s(i))},e,{passive:!1})})}function s(e){t.State.is(Y)&&n.go(e)}return{required:!!n,mount:function(){i(),o(),e&&(r(),t.on("refresh",function(){setTimeout(function(){r(),n.emit("navigation:updated",t)})}))},mounted:function(){e&&n.emit("navigation:mounted",t)}}},A11y:Ot};var Tt=function(t){var n,e;function i(n,e){return t.call(this,n,e,Mt)||this}return e=t,(n=i).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,i}(Z)}},n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{}};return t[i](o,o.exports,e),o.exports}return e.d=((t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}),e.o=((t,n)=>Object.prototype.hasOwnProperty.call(t,n)),e.r=(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}),e(311)})()});
},{}],"exfT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("@splidejs/splide"));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(){document.addEventListener("DOMContentLoaded",function(){var i=new e.default("#nav-slider",{rewind:!1,fixedWidth:100,fixedHeight:74,isNavigation:!0,gap:30,focus:"center",pagination:!1,cover:!0,arrows:!1,breakpoints:{600:{fixedWidth:66,fixedHeight:40}}}).mount();new e.default("#primary-slider",{classes:{arrows:"splide__arrows splide__arrows--right-side "},type:"fade",heightRatio:.5,pagination:!1,arrows:!0,cover:!0}).sync(i).mount();var r=new e.default("#nav-slider-2",{rewind:!1,fixedWidth:100,fixedHeight:74,isNavigation:!0,gap:30,focus:"center",pagination:!1,cover:!0,arrows:!1,breakpoints:{600:{fixedWidth:66,fixedHeight:40}}}).mount();new e.default("#primary-slider-2",{classes:{arrows:"splide__arrows splide__arrows--left-side "},type:"fade",heightRatio:.5,pagination:!1,arrows:!0,cover:!0}).sync(r).mount()})},t=r;exports.default=t;
},{"@splidejs/splide":"zEjv"}],"WSmw":[function(require,module,exports) {
"use strict";var e=o(require("../src/components/Navbar")),t=o(require("../src/components/Gallery"));function o(e){return e&&e.__esModule?e:{default:e}}var n=function(){document.getElementsByClassName("navbar__menu-button")[0].addEventListener("click",e.default);var t=document.getElementById("main-navbar");window.onscroll=function(){document.body.scrollTop>=80||document.documentElement.scrollTop>=80?t.classList.add("scroll"):t.classList.remove("scroll")};document.getElementById("scroll-down").addEventListener("click",function(e){e.preventDefault();var t=document.querySelector("#start-section").offsetTop;scroll({top:t,behavior:"smooth"})})};n(),(0,t.default)();
},{"../src/components/Navbar":"jhiH","../src/components/Gallery":"exfT"}]},{},["WSmw"], null)
//# sourceMappingURL=main.17fdb034.js.map