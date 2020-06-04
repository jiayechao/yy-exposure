!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){n(2),t.exports=function(){function t(t){this.observerHandles=[],this.init(t)}return t.prototype.init=function(t){var e=this;this.observer=new IntersectionObserver((function(n,o){n.forEach((function(n){var i=n.target;t.hiddenEmmit?n.isIntersecting||(e.observerHandles.filter((function(t){return t.el===i}))[0].visibleHandle(n),t.one&&o.unobserve(i)):n.isIntersecting&&(e.observerHandles.filter((function(t){return t.el===i}))[0].visibleHandle(n),t.one&&o.unobserve(i))}))}),{root:t.root||null,rootMargin:t.rootMargin,threshold:t.visivleRatio})},t.prototype.add=function(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];var i=function(t){return n.push(t),e.apply(null,n)};return this.observerHandles.push({el:t,visibleHandle:i}),this.observer&&this.observer.observe(t),this.observer},t.prototype.disconnect=function(){this.observer&&this.observer.disconnect()},t}()},function(t,e,n){"use strict";n.r(e);var o=n(0);const i=new(n.n(o).a)({visivleRatio:.5});Array.from(document.querySelectorAll(".myDiv")).forEach(t=>{i.add(t,(function(){console.log(arguments)}),1,2)})},function(t,e){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[],n=null,o=null;r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?l(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},r._resetCrossOriginUpdater=function(){n=null,o=null},r.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},r.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},r.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,i=null,r=null;if(this.POLL_INTERVAL?i=n.setInterval(o,this.POLL_INTERVAL):(s(n,"resize",o,!0),s(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(r=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),u(t,"resize",o,!0)),u(e,"scroll",o,!0),r&&r.disconnect()})),e!=(this.root&&this.root.ownerDocument||t)){var h=d(e);h&&this._monitorIntersections(h.ownerDocument)}}},r.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&this.root.ownerDocument||t;if(!this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var i=d(n);if((n=i&&i.ownerDocument)==e)return!0}return!1}))){var i=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),i(),e!=o){var r=d(e);r&&this._unmonitorIntersections(r.ownerDocument)}}}},r.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},r.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,s=h(r),u=this._rootContainsTarget(r),c=o.entry,l=t&&u&&this._computeTargetAndRootIntersection(r,s,e),a=o.entry=new i({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:s,rootBounds:n&&!this.root?null:e,intersectionRect:l});c?t&&u?this._hasCrossedThreshold(c,a)&&this._queuedEntries.push(a):c&&c.isIntersecting&&this._queuedEntries.push(a):this._queuedEntries.push(a)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},r.prototype._computeTargetAndRootIntersection=function(e,i,r){if("none"!=window.getComputedStyle(e).display){for(var s,u,c,a,d,p,g,v,m=i,b=f(e),_=!1;!_&&b;){var y=null,w=1==b.nodeType?window.getComputedStyle(b):{};if("none"==w.display)return null;if(b==this.root||9==b.nodeType)if(_=!0,b==this.root||b==t)n&&!this.root?!o||0==o.width&&0==o.height?(b=null,y=null,m=null):y=o:y=r;else{var I=f(b),E=I&&h(I),T=I&&this._computeTargetAndRootIntersection(I,E,r);E&&T?(b=I,y=l(E,T)):(b=null,m=null)}else{var R=b.ownerDocument;b!=R.body&&b!=R.documentElement&&"visible"!=w.overflow&&(y=h(b))}if(y&&(s=y,u=m,c=void 0,a=void 0,d=void 0,p=void 0,g=void 0,v=void 0,c=Math.max(s.top,u.top),a=Math.min(s.bottom,u.bottom),d=Math.max(s.left,u.left),p=Math.min(s.right,u.right),v=a-c,m=(g=p-d)>=0&&v>=0&&{top:c,bottom:a,left:d,right:p,width:g,height:v}||null),!m)break;b=b&&f(b)}return m}},r.prototype._getRootRect=function(){var e;if(this.root)e=h(this.root);else{var n=t.documentElement,o=t.body;e={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},r.prototype._rootIsInDom=function(){return!this.root||a(t,this.root)},r.prototype._rootContainsTarget=function(e){return a(this.root||t,e)&&(!this.root||this.root.ownerDocument==e.ownerDocument)},r.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},r.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=r,window.IntersectionObserverEntry=i}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=c(t.rootBounds),this.boundingClientRect=c(t.boundingClientRect),this.intersectionRect=c(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function r(t,e){var n,o,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout((function(){n(),i=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function u(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function h(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function l(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function a(t,e){for(var n=e;n;){if(n==t)return!0;n=f(n)}return!1}function f(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?d(e):n&&11==n.nodeType&&n.host?n.host:n&&n.assignedSlot?n.assignedSlot.parentNode:n}function d(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}}()}]);