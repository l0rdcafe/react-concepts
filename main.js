!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!O[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--y&&0===g&&E()}(e,t),n&&n(e,t)};var t,r=!0,o="904222c5a86dbf4828e1",i=1e4,u={},c=[],a=[];function s(e){var n=N[e];if(!n)return P;var r=function(r){return n.hot.active?(N[r]?-1===N[r].parents.indexOf(e)&&N[r].parents.push(e):(c=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),P(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(n){P[e]=n}}};for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===f&&p("prepare"),g++,P.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===f&&(m[e]||x(e),0===g&&0===y&&E())}},r.t=function(e,n){return 1&n&&(e=r(e)),P.t(e,-2&n)},r}var l=[],f="idle";function p(e){f=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var d,h,v,y=0,g=0,m={},w={},O={};function b(e){return+e+""===e?+e:e}function k(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return r=e,p("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=P.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(i).then(function(e){if(!e)return p("idle"),null;w={},m={},O=e.c,v=e.h,p("prepare");var n=new Promise(function(e,n){d={resolve:e,reject:n}});h={};return x(0),"prepare"===f&&0===g&&0===y&&E(),n})}function x(e){O[e]?(w[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+o+".hot-update.js",n.appendChild(t)}(e)):m[e]=!0}function E(){p("ready");var e=d;if(d=null,e)if(r)Promise.resolve().then(function(){return _(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(b(t));e.resolve(n)}}function _(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,i,a,s;function l(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,u=o.chain;if((a=N[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:u,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:u,moduleId:i};for(var c=0;c<a.parents.length;c++){var s=a.parents[c],l=N[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:u.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),d(t[s],[i])):(delete t[s],n.push(s),r.push({chain:u.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var y={},g=[],m={},w=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k)){var x;s=b(k);var E=!1,_=!1,D=!1,j="";switch((x=h[k]?l(s):{type:"disposed",moduleId:k}).chain&&(j="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+x.moduleId+j));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+j));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(E=new Error("Aborted because "+s+" is not accepted"+j));break;case"accepted":n.onAccepted&&n.onAccepted(x),_=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),D=!0;break;default:throw new Error("Unexception type "+x.type)}if(E)return p("abort"),Promise.reject(E);if(_)for(s in m[s]=h[s],d(g,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,s)&&(y[s]||(y[s]=[]),d(y[s],x.outdatedDependencies[s]));D&&(d(g,[x.moduleId]),m[s]=w)}var T,I=[];for(r=0;r<g.length;r++)s=g[r],N[s]&&N[s].hot._selfAccepted&&I.push({module:s,errorHandler:N[s].hot._selfAccepted});p("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var S,A,V=g.slice();V.length>0;)if(s=V.pop(),a=N[s]){var H={},R=a.hot._disposeHandlers;for(i=0;i<R.length;i++)(t=R[i])(H);for(u[s]=H,a.hot.active=!1,delete N[s],delete y[s],i=0;i<a.children.length;i++){var M=N[a.children[i]];M&&((T=M.parents.indexOf(s))>=0&&M.parents.splice(T,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=N[s]))for(A=y[s],i=0;i<A.length;i++)S=A[i],(T=a.children.indexOf(S))>=0&&a.children.splice(T,1);for(s in p("apply"),o=v,m)Object.prototype.hasOwnProperty.call(m,s)&&(e[s]=m[s]);var C=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=N[s])){A=y[s];var q=[];for(r=0;r<A.length;r++)if(S=A[r],t=a.hot._acceptedDependencies[S]){if(-1!==q.indexOf(t))continue;q.push(t)}for(r=0;r<q.length;r++){t=q[r];try{t(A)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:A[r],error:e}),n.ignoreErrored||C||(C=e)}}}for(r=0;r<I.length;r++){var U=I[r];s=U.module,c=[s];try{P(s)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:t,originalError:e}),n.ignoreErrored||C||(C=t),C||(C=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||C||(C=e)}}return C?(p("fail"),Promise.reject(C)):(p("idle"),new Promise(function(e){e(g)}))}var N={};function P(n){if(N[n])return N[n].exports;var r=N[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:k,apply:_,status:function(e){if(!e)return f;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:u[e]};return t=void 0,n}(n),parents:(a=c,c=[],a),children:[]};return e[n].call(r.exports,r,r.exports,s(n)),r.l=!0,r.exports}P.m=e,P.c=N,P.d=function(e,n,t){P.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,n){if(1&n&&(e=P(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(P.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)P.d(t,r,function(n){return e[n]}.bind(null,r));return t},P.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(n,"a",n),n},P.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},P.p="",P.h=function(){return o},s(38)(P.s=38)}([function(e,n){e.exports=function(e){return e&&"Widget"===e.type}},function(e,n,t){var r=t(2);e.exports=function(e){return e&&"VirtualNode"===e.type&&e.version===r}},function(e,n){e.exports="2"},function(e,n,t){var r=t(37);e.exports=r},function(e,n,t){var r=t(2);e.exports=function(e){return e&&"VirtualText"===e.type&&e.version===r}},function(e,n){e.exports=function(e){return e&&("function"==typeof e.hook&&!e.hasOwnProperty("hook")||"function"==typeof e.unhook&&!e.hasOwnProperty("unhook"))}},function(e,n){e.exports=function(e){return e&&"Thunk"===e.type}},function(e,n){var t=Array.isArray,r=Object.prototype.toString;e.exports=t||function(e){return"[object Array]"===r.call(e)}},function(e,n,t){var r=t(10),o=t(5);function i(e,n,t,r){if(r){var i=r[n];if(o(i))i.unhook&&i.unhook(e,n,t);else if("attributes"===n)for(var u in i)e.removeAttribute(u);else if("style"===n)for(var c in i)e.style[c]="";else e[n]="string"==typeof i?"":null}}function u(e,n,t,o,i){var u=t?t[o]:void 0;if("attributes"!==o)if(u&&r(u)&&c(u)!==c(i))e[o]=i;else{r(e[o])||(e[o]={});var a="style"===o?"":void 0;for(var s in i){var l=i[s];e[o][s]=void 0===l?a:l}}else for(var f in i){var p=i[f];void 0===p?e.removeAttribute(f):e.setAttribute(f,p)}}function c(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}e.exports=function(e,n,t){for(var c in n){var a=n[c];void 0===a?i(e,c,a,t):o(a)?(i(e,c,a,t),a.hook&&a.hook(e,c,t?t[c]:void 0)):r(a)?u(e,n,t,c,a):e[c]=a}}},function(e,n,t){(function(n){var r,o=void 0!==n?n:"undefined"!=typeof window?window:{},i=t(24);"undefined"!=typeof document?r=document:(r=o["__GLOBAL_DOCUMENT_CACHE@4"])||(r=o["__GLOBAL_DOCUMENT_CACHE@4"]=i),e.exports=r}).call(this,t(13))},function(e,n,t){"use strict";e.exports=function(e){return"object"==typeof e&&null!==e}},function(e,n,t){var r=t(1),o=t(4),i=t(0),u=t(6);function c(e,n){var t=e.vnode;if(t||(t=e.vnode=e.render(n)),!(r(t)||o(t)||i(t)))throw new Error("thunk did not return a valid node");return t}e.exports=function(e,n){var t=e,r=n;u(n)&&(r=c(n,e));u(e)&&(t=c(e,null));return{a:t,b:r}}},function(e,n,t){var r=t(2);function o(e,n,t){this.type=Number(e),this.vNode=n,this.patch=t}o.NONE=0,o.VTEXT=1,o.VNODE=2,o.WIDGET=3,o.PROPS=4,o.ORDER=5,o.INSERT=6,o.REMOVE=7,o.THUNK=8,e.exports=o,o.prototype.version=r,o.prototype.type="VirtualPatch"},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){var r=t(25);e.exports=r},function(e,n,t){var r=t(27);e.exports=r},function(e,n,t){"use strict";t.r(n);var r=t(3),o=t.n(r),i=t(15),u=t.n(i),c=t(14),a=t.n(c);function s(e,n){return(n||document).querySelectorAll(e)}function l(e,n,t,r){e.addEventListener(n,t,!!r)}var f={qs:function(e,n){return(n||document).querySelector(e)},qsa:s,$on:l,newEl:function(e){return document.createElement(e)},$delegate:function(e,n,t,r){l(e,t,function(t){var o=t.target,i=s(n,e);Array.prototype.indexOf.call(i,o)>=0&&r.call(o,t)},"blur"===t||"focus"===t)}},p={items:["nice","jacket"]},d=void 0,h=f.qs("#ui"),v=[];function y(e){return JSON.parse(JSON.stringify(e))}function g(){f.qs("#time-pos").innerHTML="Position "+(d.pos+1)+" of "+d.history.length;var e=f.qs("#back"),n=f.qs("#next");d.pos<=0?e.setAttribute("disabled",!0):e.removeAttribute("disabled"),d.pos>=d.history.length-1?n.setAttribute("disabled",!0):n.removeAttribute("disabled")}function m(e){e||((d=d||{history:[],pos:-1}).history.splice(d.pos+1),d.history.push(y(p)),d.pos+=1,g());var n=function(e){return o()("div",{},[o()("span",{id:"count"},e.items.length),o()("ul",{},e.items.map(function(e,n){return o()("li",{id:n,onclick:function(){p.items.splice(n,1),m()}},e)}))])}(p),t=u()(v,n);h=a()(h,t),v=n}f.$on(f.qs("#add"),"click",function(){p.items.push(function(){var e="I'm saying the truth you jacket wearing nice maker doge".split(" ");return e[Math.floor(Math.random()*e.length)]}()),m()}),m(),f.$on(f.qs("#back"),"click",function(){d.pos-=1,g(),p=y(d.history[d.pos]),m(!0)}),f.$on(f.qs("#next"),"click",function(){d.pos+=1,g(),p=y(d.history[d.pos]),m(!0)})},,,function(e,n,t){},function(e,n,t){var r=t(0);e.exports=function(e,n){if(r(e)&&r(n))return"name"in e&&"name"in n?e.id===n.id:e.init===n.init;return!1}},function(e,n,t){var r=t(8),o=t(0),i=t(12),u=t(20);function c(e,n){"function"==typeof n.destroy&&o(n)&&n.destroy(e)}e.exports=function(e,n,t){var o=e.type,a=e.vNode,s=e.patch;switch(o){case i.REMOVE:return function(e,n){var t=e.parentNode;t&&t.removeChild(e);return c(e,n),null}(n,a);case i.INSERT:return function(e,n,t){var r=t.render(n,t);e&&e.appendChild(r);return e}(n,s,t);case i.VTEXT:return function(e,n,t,r){var o;if(3===e.nodeType)e.replaceData(0,e.length,t.text),o=e;else{var i=e.parentNode;o=r.render(t,r),i&&o!==e&&i.replaceChild(o,e)}return o}(n,0,s,t);case i.WIDGET:return function(e,n,t,r){var o,i=u(n,t);o=i?t.update(n,e)||e:r.render(t,r);var a=e.parentNode;a&&o!==e&&a.replaceChild(o,e);i||c(e,n);return o}(n,a,s,t);case i.VNODE:return function(e,n,t,r){var o=e.parentNode,i=r.render(t,r);o&&i!==e&&o.replaceChild(i,e);return i}(n,0,s,t);case i.ORDER:return function(e,n){for(var t,r,o,i=e.childNodes,u={},c=0;c<n.removes.length;c++)r=n.removes[c],t=i[r.from],r.key&&(u[r.key]=t),e.removeChild(t);for(var a=i.length,s=0;s<n.inserts.length;s++)o=n.inserts[s],t=u[o.key],e.insertBefore(t,o.to>=a++?null:i[o.to])}(n,s),n;case i.PROPS:return r(n,s,a.properties),n;case i.THUNK:return function(e,n){e&&n&&e!==n&&e.parentNode&&e.parentNode.replaceChild(n,e);return n}(n,t.patch(n,s,t));default:return n}}},function(e,n){var t={};function r(e,n,t){if(0===e.length)return!1;for(var r,o,i=0,u=e.length-1;i<=u;){if(o=e[r=(u+i)/2>>0],i===u)return o>=n&&o<=t;if(o<n)i=r+1;else{if(!(o>t))return!0;u=r-1}}return!1}function o(e,n){return e>n?1:-1}e.exports=function(e,n,i,u){return i&&0!==i.length?(i.sort(o),function e(n,o,i,u,c){u=u||{};if(n){r(i,c,c)&&(u[c]=n);var a=o.children;if(a)for(var s=n.childNodes,l=0;l<o.children.length;l++){c+=1;var f=a[l]||t,p=c+(f.count||0);r(i,c,p)&&e(s[l],f,i,u,c),c=p}}return u}(e,n,i,u,0)):{}}},function(e,n,t){var r=t(9),o=t(8),i=t(1),u=t(4),c=t(0),a=t(11);e.exports=function e(n,t){var s=t&&t.document||r;var l=t?t.warn:null;n=a(n).a;if(c(n))return n.init();if(u(n))return s.createTextNode(n.text);if(!i(n))return l&&l("Item is not a valid virtual dom node",n),null;var f=null===n.namespace?s.createElement(n.tagName):s.createElementNS(n.namespace,n.tagName);var p=n.properties;o(f,p);var d=n.children;for(var h=0;h<d.length;h++){var v=e(d[h],t);v&&f.appendChild(v)}return f}},function(e,n){},function(e,n,t){var r=t(9),o=t(7),i=t(23),u=t(22),c=t(21);function a(e,n,t){var o=function(e){var n=[];for(var t in e)"a"!==t&&n.push(Number(t));return n}(n);if(0===o.length)return e;var i=u(e,n.a,o),c=e.ownerDocument;t.document||c===r||(t.document=c);for(var a=0;a<o.length;a++){var l=o[a];e=s(e,i[l],n[l],t)}return e}function s(e,n,t,r){if(!n)return e;var i;if(o(t))for(var u=0;u<t.length;u++)i=c(t[u],n,r),n===e&&(e=i);else i=c(t,n,r),n===e&&(e=i);return e}e.exports=function e(n,t,r){r=r||{};r.patch=r.patch&&r.patch!==e?r.patch:a;r.render=r.render||i;return r.patch(n,t,r)}},function(e,n,t){var r=t(10),o=t(5);function i(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}e.exports=function e(n,t){var u;for(var c in n){c in t||((u=u||{})[c]=void 0);var a=n[c],s=t[c];if(a!==s)if(r(a)&&r(s))if(i(s)!==i(a))(u=u||{})[c]=s;else if(o(s))(u=u||{})[c]=s;else{var l=e(a,s);l&&((u=u||{})[c]=l)}else(u=u||{})[c]=s}for(var f in t)f in n||((u=u||{})[f]=t[f]);return u}},function(e,n,t){var r=t(7),o=t(12),i=t(1),u=t(4),c=t(0),a=t(6),s=t(11),l=t(26);function f(e,n){var t={a:e};return p(e,n,t,0),t}function p(e,n,t,r){if(e!==n){var s=t[r],f=!1;if(a(e)||a(n))h(e,n,t,r);else if(null==n)c(e)||(d(e,t,r),s=t[r]),s=g(s,new o(o.REMOVE,e,n));else if(i(n))if(i(e))if(e.tagName===n.tagName&&e.namespace===n.namespace&&e.key===n.key){var m=l(e.properties,n.properties);m&&(s=g(s,new o(o.PROPS,e,m))),s=function(e,n,t,r,u){for(var c=e.children,a=function(e,n){var t=y(n),r=t.keys,o=t.free;if(o.length===n.length)return{children:n,moves:null};var i=y(e),u=i.keys;if(i.free.length===e.length)return{children:n,moves:null};for(var c=[],a=0,s=o.length,l=0,f=0;f<e.length;f++){var p,d=e[f];d.key?r.hasOwnProperty(d.key)?(p=r[d.key],c.push(n[p])):(p=f-l++,c.push(null)):a<s?(p=o[a++],c.push(n[p])):(p=f-l++,c.push(null))}for(var h=a>=o.length?n.length:o[a],g=0;g<n.length;g++){var m=n[g];m.key?u.hasOwnProperty(m.key)||c.push(m):g>=h&&c.push(m)}for(var w,O=c.slice(),b=0,k=[],x=[],E=0;E<n.length;){var _=n[E];for(w=O[b];null===w&&O.length;)k.push(v(O,b,null)),w=O[b];w&&w.key===_.key?(b++,E++):_.key?(w&&w.key&&r[w.key]!==E+1?(k.push(v(O,b,w.key)),(w=O[b])&&w.key===_.key?b++:x.push({key:_.key,to:E})):x.push({key:_.key,to:E}),E++):w&&w.key&&k.push(v(O,b,w.key))}for(;b<O.length;)w=O[b],k.push(v(O,b,w&&w.key));if(k.length===l&&!x.length)return{children:c,moves:null};return{children:c,moves:{removes:k,inserts:x}}}(c,n.children),s=a.children,l=c.length,f=s.length,d=l>f?l:f,h=0;h<d;h++){var m=c[h],w=s[h];u+=1,m?p(m,w,t,u):w&&(r=g(r,new o(o.INSERT,null,w))),i(m)&&m.count&&(u+=m.count)}a.moves&&(r=g(r,new o(o.ORDER,e,a.moves)));return r}(e,n,t,s,r)}else s=g(s,new o(o.VNODE,e,n)),f=!0;else s=g(s,new o(o.VNODE,e,n)),f=!0;else u(n)?u(e)?e.text!==n.text&&(s=g(s,new o(o.VTEXT,e,n))):(s=g(s,new o(o.VTEXT,e,n)),f=!0):c(n)&&(c(e)||(f=!0),s=g(s,new o(o.WIDGET,e,n)));s&&(t[r]=s),f&&d(e,t,r)}}function d(e,n,t){!function e(n,t,r){if(i(n)){if(n.hooks&&(t[r]=g(t[r],new o(o.PROPS,n,function(e){var n={};for(var t in e)n[t]=void 0;return n}(n.hooks)))),n.descendantHooks||n.hasThunks)for(var u=n.children,c=u.length,s=0;s<c;s++){var l=u[s];e(l,t,r+=1),i(l)&&l.count&&(r+=l.count)}}else a(n)&&h(n,null,t,r)}(e,n,t),function e(n,t,r){if(c(n))"function"==typeof n.destroy&&(t[r]=g(t[r],new o(o.REMOVE,n,null)));else if(i(n)&&(n.hasWidgets||n.hasThunks))for(var u=n.children,s=u.length,l=0;l<s;l++){var f=u[l];e(f,t,r+=1),i(f)&&f.count&&(r+=f.count)}else a(n)&&h(n,null,t,r)}(e,n,t)}function h(e,n,t,r){var i=s(e,n),u=f(i.a,i.b);(function(e){for(var n in e)if("a"!==n)return!0;return!1})(u)&&(t[r]=new o(o.THUNK,null,u))}function v(e,n,t){return e.splice(n,1),{from:n,key:t}}function y(e){for(var n={},t=[],r=e.length,o=0;o<r;o++){var i=e[o];i.key?n[i.key]=o:t.push(o)}return{keys:n,free:t}}function g(e,n){return e?(r(e)?e.push(n):e=[e,n],e):n}e.exports=f},function(e,n,t){"use strict";(function(n){var t="undefined"!=typeof window?window:void 0!==n?n:{};e.exports=function(e,n){if(e in t)return t[e];return t[e]=n,n}}).call(this,t(13))},function(e,n,t){"use strict";var r=t(28);e.exports=function(e,n,t){var o="__INDIVIDUAL_ONE_VERSION_"+e,i=r(o+"_ENFORCE_SINGLETON",n);if(i!==n)throw new Error("Can only have one copy of "+e+".\nYou already have version "+i+" installed.\nThis means you cannot install version "+n);return r(o,t)}},function(e,n,t){"use strict";t(29)("ev-store","7");var r="__EV_STORE_KEY@7";e.exports=function(e){var n=e[r];n||(n=e[r]={});return n}},function(e,n,t){"use strict";var r=t(30);function o(e){if(!(this instanceof o))return new o(e);this.value=e}e.exports=o,o.prototype.hook=function(e,n){r(e)[n.substr(3)]=this.value},o.prototype.unhook=function(e,n){r(e)[n.substr(3)]=void 0}},function(e,n,t){"use strict";function r(e){if(!(this instanceof r))return new r(e);this.value=e}e.exports=r,r.prototype.hook=function(e,n){e[n]!==this.value&&(e[n]=this.value)}},function(e,n){
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */
e.exports=function(e){var n=String.prototype.split,t=/()??/.exec("")[1]===e;return function(r,o,i){if("[object RegExp]"!==Object.prototype.toString.call(o))return n.call(r,o,i);var u,c,a,s,l=[],f=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.extended?"x":"")+(o.sticky?"y":""),p=0;o=new RegExp(o.source,f+"g");for(r+="",t||(u=new RegExp("^"+o.source+"$(?!\\s)",f)),i=i===e?-1>>>0:i>>>0;(c=o.exec(r))&&!((a=c.index+c[0].length)>p&&(l.push(r.slice(p,c.index)),!t&&c.length>1&&c[0].replace(u,function(){for(var n=1;n<arguments.length-2;n++)arguments[n]===e&&(c[n]=e)}),c.length>1&&c.index<r.length&&Array.prototype.push.apply(l,c.slice(1)),s=c[0].length,p=a,l.length>=i));)o.lastIndex===c.index&&o.lastIndex++;return p===r.length?!s&&o.test("")||l.push(""):l.push(r.slice(p)),l.length>i?l.slice(0,i):l}}()},function(e,n,t){"use strict";var r=t(33),o=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,i=/^\.|#/;e.exports=function(e,n){if(!e)return"DIV";var t,u,c,a,s=!n.hasOwnProperty("id"),l=r(e,o),f=null;i.test(l[1])&&(f="DIV");for(a=0;a<l.length;a++)(u=l[a])&&(c=u.charAt(0),f?"."===c?(t=t||[]).push(u.substring(1,u.length)):"#"===c&&s&&(n.id=u.substring(1,u.length)):f=u);t&&(n.className&&t.push(n.className),n.className=t.join(" "));return n.namespace?f:f.toUpperCase()}},function(e,n,t){var r=t(2);function o(e){this.text=String(e)}e.exports=o,o.prototype.version=r,o.prototype.type="VirtualText"},function(e,n,t){var r=t(2),o=t(1),i=t(0),u=t(6),c=t(5);e.exports=l;var a={},s=[];function l(e,n,t,r,l){this.tagName=e,this.properties=n||a,this.children=t||s,this.key=null!=r?String(r):void 0,this.namespace="string"==typeof l?l:null;var f,p=t&&t.length||0,d=0,h=!1,v=!1,y=!1;for(var g in n)if(n.hasOwnProperty(g)){var m=n[g];c(m)&&m.unhook&&(f||(f={}),f[g]=m)}for(var w=0;w<p;w++){var O=t[w];o(O)?(d+=O.count||0,!h&&O.hasWidgets&&(h=!0),!v&&O.hasThunks&&(v=!0),y||!O.hooks&&!O.descendantHooks||(y=!0)):!h&&i(O)?"function"==typeof O.destroy&&(h=!0):!v&&u(O)&&(v=!0)}this.count=p+d,this.hasWidgets=h,this.hasThunks=v,this.hooks=f,this.descendantHooks=y}l.prototype.version=r,l.prototype.type="VirtualNode"},function(e,n,t){"use strict";var r=t(7),o=t(36),i=t(35),u=t(1),c=t(4),a=t(0),s=t(5),l=t(6),f=t(34),p=t(32),d=t(31);function h(e){return u(e)||c(e)||a(e)||l(e)}function v(e){try{return JSON.stringify(e,null,"    ")}catch(n){return String(e)}}e.exports=function(e,n,t){var u,c,a,l,y=[];!t&&function(e){return"string"==typeof e||r(e)||h(e)}(n)&&(t=n,c={});u=f(e,c=c||n||{}),c.hasOwnProperty("key")&&(a=c.key,c.key=void 0);c.hasOwnProperty("namespace")&&(l=c.namespace,c.namespace=void 0);"INPUT"!==u||l||!c.hasOwnProperty("value")||void 0===c.value||s(c.value)||(c.value=p(c.value));(function(e){for(var n in e)if(e.hasOwnProperty(n)){var t=e[n];if(s(t))continue;"ev-"===n.substr(0,3)&&(e[n]=d(t))}})(c),void 0!==t&&null!==t&&function e(n,t,o,u){if("string"==typeof n)t.push(new i(n));else if("number"==typeof n)t.push(new i(String(n)));else if(h(n))t.push(n);else{if(!r(n)){if(null===n||void 0===n)return;throw function(e){var n=new Error;return n.type="virtual-hyperscript.unexpected.virtual-element",n.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+v(e.foreignObject)+".\nThe parent vnode is:\n"+v(e.parentVnode),n.foreignObject=e.foreignObject,n.parentVnode=e.parentVnode,n}({foreignObject:n,parentVnode:{tagName:o,properties:u}})}for(var c=0;c<n.length;c++)e(n[c],t,o,u)}}(t,y,u,c);return new o(u,c,y,a,l)}},function(e,n,t){t(16),e.exports=t(19)}]);
//# sourceMappingURL=main.js.map