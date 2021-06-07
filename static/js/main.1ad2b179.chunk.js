/*! For license information please see main.1ad2b179.chunk.js.LICENSE.txt */
(this["webpackJsonpuse-screen-recorder-example"]=this["webpackJsonpuse-screen-recorder-example"]||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),c=r.n(o),i=(r(10),r(1)),l=function(){return a.a.createElement("nav",null,a.a.createElement("h2",null,a.a.createElement("a",{href:"https://github.com/ishan-chhabra/use-screen-recorder"},"use-screen-recorder"),a.a.createElement(i.a,{href:"https://github.com/ishan-chhabra/use-screen-recorder","data-show-count":"true","aria-label":"Star ishan-chhabra/use-screen-recorder on GitHub"},"Star"),a.a.createElement(i.a,{href:"https://github.com/ishan-chhabra","data-show-count":"true","aria-label":"Follow @ishan-chhabra on GitHub"},"Follow @ishan-chhabra")),a.a.createElement("a",{href:"https://ishanchhabra.com"},a.a.createElement("img",{src:"https://ishanchhabra.com/logo.svg"})))},u=function(e){var t=e.title,r=e.value,n=e.style;return a.a.createElement("div",{style:n,className:"pill"},a.a.createElement("h6",null,t),a.a.createElement("p",null,r))};function s(e,t,r,n){return new(r||(r=Promise))((function(a,o){function c(e){try{l(n.next(e))}catch(t){o(t)}}function i(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,i)}l((n=n.apply(e,t||[])).next())}))}function d(e,t){var r,n,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(i){o=[6,i],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}var h=function(e){var t=e.options,r=e.audio,a=void 0!==r&&r,o=Object(n.useState)(null),c=o[0],i=o[1],l=Object(n.useState)(),u=l[0],h=l[1],f=Object(n.useState)(),m=f[0],p=f[1],b=Object(n.useState)("idle"),v=b[0],g=b[1],E=Object(n.useState)({audio:null,screen:null}),w=E[0],y=E[1];Object(n.useEffect)((function(){m&&(m.ondataavailable=function(e){var t=window.URL.createObjectURL(e.data);i(t)})}),[m]);var k=function(){return s(void 0,void 0,void 0,(function(){var e,r,n,o,c,i;return d(this,(function(l){switch(l.label){case 0:return l.trys.push([0,4,,5]),[4,navigator.mediaDevices.getDisplayMedia()];case 1:return e=l.sent(),r=void 0,a?[4,navigator.mediaDevices.getUserMedia({audio:a})]:[3,3];case 2:r=l.sent(),l.label=3;case 3:return n=function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var o=arguments[t],c=0,i=o.length;c<i;c++,a++)n[a]=o[c];return n}(null===e||void 0===e?void 0:e.getTracks(),null===r||void 0===r?void 0:r.getTracks()),o=new MediaStream(n),c=new MediaRecorder(o,t),p(c),y({audio:(null===r||void 0===r?void 0:r.getTracks().find((function(e){return"audio"===e.kind})))||null,screen:e.getTracks().find((function(e){return"video"===e.kind}))||null}),[2,c];case 4:return i=l.sent(),h(i),g("error"),[3,5];case 5:return[2]}}))}))};return{blobUrl:c,error:u,pauseRecording:function(){if(!m)throw Error("No media stream!");null===m||void 0===m||m.pause(),g("paused")},resetRecording:function(){i(null),h(null),p(null),g("idle")},resumeRecording:function(){if(!m)throw Error("No media stream!");null===m||void 0===m||m.resume(),g("recording")},startRecording:function(){return s(void 0,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return e=m,m?[3,2]:[4,k()];case 1:e=t.sent(),t.label=2;case 2:return e.start(),g("recording"),[2]}}))}))},status:v,stopRecording:function(){if(!m)throw Error("No media stream!");null===m||void 0===m||m.stop(),g("stopped"),m.stream.getTracks().map((function(e){e.stop()})),p(null)},streams:w}},f=function(){var e=h({audio:!0}),t=e.startRecording,r=e.pauseRecording,o=e.blobUrl,c=e.resetRecording,i=e.resumeRecording,s=e.status,d=e.stopRecording,f=Object(n.useRef)();return a.a.createElement("div",{id:"container"},a.a.createElement(l,null),a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"pills"},a.a.createElement(u,{title:"Status",value:s}),a.a.createElement(u,{style:{flexGrow:1},title:"Blob URL",value:o||"Waiting..."})),a.a.createElement("div",null,a.a.createElement("video",{ref:f,src:o,poster:"/use-screen-recorder/poster.png",controls:!0,autoPlay:!0})),a.a.createElement("div",{className:"buttons"},("idle"===s||"error"===s)&&a.a.createElement("button",{onClick:t},"Start recording"),("recording"===s||"paused"===s)&&a.a.createElement("button",{onClick:d},"Stop recording"),("recording"===s||"paused"===s)&&a.a.createElement("button",{onClick:function(){return"paused"===s?i():r()}},"paused"===s?"Resume recording":"Pause recording"),"stopped"===s&&a.a.createElement("button",{onClick:function(){c(),f.current.load()}},"Reset recording"))),a.a.createElement("footer",null,"crafted with \u2763\ufe0f by ",a.a.createElement("a",{href:"https://ishanchhabra.com"},"Ishan Chhabra")))};c.a.render(a.a.createElement(f,null),document.getElementById("root"))},3:function(e,t,r){e.exports=r(12)}},[[3,1,2]]]);
//# sourceMappingURL=main.1ad2b179.chunk.js.map