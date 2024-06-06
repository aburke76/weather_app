(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap);"]),i.push([n.id,':root {\n    --background: #caf0f8;\n    --sky-blue: #90e0ef;\n    --bright-blue: #00b4d8;\n    --royal-blue: #151785;\n    --sunny: #ffb627;\n    --cloudy: #b7b7a4;\n    --stormy: #343a40;\n    --rain: #0077b6;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    background-color: var(--background);\n    font-family: "Mukta";\n}\n\nform {\n    display: flex;\n    justify-content: space-between;\n}\n\nlabel {\n    font-family: "Mukta";\n    font-size: 1rem;\n    color: var(--royal-blue);\n    font-weight: 700;\n}\n\ninput {\n    padding: 8px;\n    border-radius: 1rem;\n    border: none;\n    font-family: "Mukta";\n    font-size: 1rem;\n    font-weight: 700;\n    margin-right: 5px;\n}\n\nbutton {\n    outline: none;\n    border: transparent;\n    background-color: #151785;\n    color: white;\n    border-radius: 8px;\n    padding: 8px;\n    font-weight: 700;\n    width: 75px;\n    font-family: "Mukta";\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n#search {\n    margin-right: 10px;\n}\n\n.active {\n    background-color: var(--background);\n    color: var(--royal-blue);\n}\n\n.temp-btns {\n    background-color: var(--royal-blue);\n    border-radius: 8px;\n    border: 4px solid var(--royal-blue);\n}\n\n#c {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n#f {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\nbutton:hover,\nbutton:active {\n    opacity: 50%;\n}\n\n.hidden {\n    display: none;\n}\n\n#weather-display {\n    height: auto;\n    width: 35%;\n    border-radius: 1rem;\n    margin-top: 1rem;\n    background: rgba(0, 0, 0, 0.185);\n    backdrop-filter: blur(5px);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    text-align: center;\n}\n\nh4,\nh2,\nh3 {\n    padding: 0;\n    margin: 0;\n}\n\nh2 {\n    margin: 1rem 0 1rem;\n}\n\n#uv {\n    margin-bottom: 16px;\n}\n\n* {\n    box-sizing: border-box;\n}\n',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var f=t(d),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var u=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=u}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),u=t.n(c),s=t(540),l=t.n(s),d=t(113),f=t.n(d),p=t(365),m={};m.styleTagTransform=f(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(p.A,m),p.A&&p.A.locals&&p.A.locals,document.querySelectorAll(".temp-btn"),document.querySelector("#temp");const b=document.querySelector("#weather-display"),h=document.querySelector("body"),y=document.createElement("h2"),v=document.createElement("h3"),g=document.createElement("h1");g.setAttribute("id",g);const x=document.createElement("h4"),w=document.createElement("h4"),M=document.createElement("h4");M.setAttribute("id","uv");const k=document.querySelector("input");function A(){!async function(n){try{const e=await fetch(`http://api.weatherapi.com/v1/current.json?key=54c8a42645ed487c993193808242905&q=${n}&aqi=no`),t=await e.json();return console.log(t),function(n,e,t,r,o,a,i){y.textContent=`${n}, ${e}`,g.textContent=`${r}°F`,g.style.color=r<32?"#bde0fe ":r>33&&r<45?"#739BD0":r>45&&r<60?"#ffd60a":r>60&&r<90?"#ff7b00":"#d00000",v.textContent=t,x.textContent=`${o}% Humidity`,w.textContent=`Wind Speed: ${a}mph`,M.textContent=`UV Index: ${i}`,b.append(y,g,v,x,w,M),function(){switch(v.textContent){case"Partly cloudy":h.style.backgroundImage="url(https://images.unsplash.com/photo-1597621864521-93dfdb10c6b1?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";break;case"Overcast":case"Cloudy":h.style.backgroundImage="url(https://images.unsplash.com/photo-1499956827185-0d63ee78a910?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";break;case"Sunny":h.style.backgroundImage="url(https://images.unsplash.com/photo-1622278647429-71bc97e904e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";break;case"Heavy rain":case"Light rain":case"Rain":case"Mist":h.style.backgroundImage="url(https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}()}(t.location.name,t.location.region,t.current.condition.text,t.current.temp_f,t.current.humidity,t.current.wind_mph,t.current.uv),t}catch(n){alert("Please enter valid city or zip code")}}(k.value),k.value=""}document.querySelector("button").addEventListener("click",(n=>{A(),n.preventDefault()}))})()})();