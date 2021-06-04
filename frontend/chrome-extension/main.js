(()=>{"use strict";var e={210:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"#t-captcha-status-fixed{position:fixed;padding:4px;right:8px;bottom:8px;border-radius:4px;background-color:rgba(0,0,0,.66);color:#fff;width:150px;z-index:1200}#t-captcha-status{display:block;width:100%;text-align:center}#t-captcha-request,#t-captcha-respond{border-radius:4px;padding-left:8px;padding-right:8px}#t-captcha-space{background-color:#f3f3f3;border:2px solid #9a9a9a;border-radius:4px;margin:4px;padding:8px}#t-captcha-space .piece{cursor:pointer}#t-captcha-space .piece:hover{background-color:wheat}#t-captcha-space .piece.selected{background-color:#9acd32}#t-captcha-space .metadata{display:block;margin-bottom:8px;font-size:.75em}",""]);const a=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=c(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:m(p,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function p(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function m(e,t){var n,o,r;if(t.singleton){var a=h++;n=f||(f=l(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var l=i(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=l}}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(210);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;let r=null;function a(){return null===r&&(r=document.createElement("div"),r.id="t-captcha-status",r.textContent="Idle"),r}let c=null;function i(){return null===c&&(c=document.createElement("button"),c.id="t-captcha-request",c.textContent="Solve TextCaptcha"),c}let l=null;function s(){return null===l&&(l=document.createElement("button"),l.id="t-captcha-respond",l.textContent="Submit"),l}let d=null;function u(){return null===d&&(d=document.createElement("div"),d.id="t-captcha-space",d.classList.add("border-gradient")),d}let p=-1;function f(){return window.location.hostname+window.location.pathname}window.onload=e=>{var t,n;console.log("Welcome to TextCaptcha."),function(){try{document.querySelector("div#article-comments-anchor").append(u())}catch(e){console.warn(e)}}(),u().innerHTML="",u().appendChild(a()),t=f(),n=function(){const e=document.querySelector("h1").textContent,t=document.querySelector("div.subtitle").textContent,n=document.querySelector("p.lead").textContent,o=(Array.from(document.querySelector("div.article-body").querySelectorAll("p")),Array.from(document.querySelector("div.article-body").querySelectorAll("p")).map((e=>e.textContent)).join(" "));return console.log("%c "+e,"font-size: 1.5em; font-weight: bold;"),console.log("%c "+t,"font-size: 1.25em; font-weight: bold;"),console.log("%c "+n,"font-weight: bold;"),console.log("%c "+o,""),`${e}. ${t}. ${n} ${o}`}(),a().textContent="Preparing TextCaptcha",window.fetch("http://localhost:8080//ingest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({articleUrl:t,text:n})}).then((e=>{a().textContent="OK!",u().innerHTML="",u().appendChild(i())})).catch((e=>{a().textContent="Something went wrong."})).finally((()=>{})),i().addEventListener("click",(function(){!function(e,t){i().textContent="Loading...",u().innerHTML="",window.fetch("http://localhost:8080//task/request",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({articleUrl:e})}).then((e=>{if(!0!==e.ok)throw new Error("Response not OK ",e);e.json().then((e=>{return p=(t=e).id,void function(e){const t=document.createElement("span");t.textContent="Your task id is "+e.id,t.classList.add("metadata"),u().appendChild(t);for(let t of e.words){const e=document.createElement("span");e.classList.add("piece"),e.textContent=t+" ",e.addEventListener("click",(function(){e.classList.contains("selected")?e.classList.remove("selected"):e.classList.add("selected")})),u().appendChild(e)}const n=s();n.addEventListener("click",(function(){const e=u().querySelectorAll(".piece");let t=[];for(let n=0;n<e.length;n++)e[n].classList.contains("selected")&&t.push(n);console.log(t),function(e,t){s().textContent="Submitting...",window.fetch("http://localhost:8080//task/response",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,indexes:t})}).then((e=>{if(!0!==e.ok)throw new Error("Response not OK ",e);e.json().then((e=>{u().innerHTML=e.content,u().appendChild(i())})).catch((e=>console.error(e)))})).catch((e=>{console.error(e)})).finally((()=>{s().textContent="Submit"}))}(p,t)})),u().appendChild(n)}(t);var t})).catch((e=>console.error(e)))})).catch((e=>{i().textContent="Something went wrong... Click to try again."})).finally((()=>{i().textContent="Request new task."}))}(f())}))}})()})();