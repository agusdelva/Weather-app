(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(4),r=a.n(n),s=(a(9),a(3)),i=a(0),o="1f2e5674bdd434c8fdc3fdc616581fe7",d="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({}),u=Object(s.a)(r,2),h=u[0],l=u[1];return Object(i.jsx)("div",{className:"undefined"!=typeof h.main&&h.main.temp>16?"app warm":"app",children:Object(i.jsxs)("main",{children:[Object(i.jsx)("div",{className:"search-box",children:Object(i.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return n(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(d,"weather?q=").concat(a,"&units=metric&APPID=").concat(o)).then((function(e){return e.json()})).then((function(e){l(e),n(""),console.log(e)}))}})}),"undefined"!=typeof h.main?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"location-box",children:[Object(i.jsxs)("div",{className:"location",children:[h.name,", ",h.sys.country]}),Object(i.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),c=["january","Febrary","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(c," ").concat(n)}(new Date)})]}),Object(i.jsxs)("div",{className:"weather-box",children:[Object(i.jsxs)("div",{className:"temp",children:[Math.round(h.main.temp),"\xb0c"]}),Object(i.jsx)("div",{className:"weather",children:h.weather[0].main})]})]}):""]})})};r.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.26eeec23.chunk.js.map