(this.webpackJsonpmgny_grid=this.webpackJsonpmgny_grid||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(8),r=n.n(i),a=(n(13),n(7)),l=n(6),u=n(2),s=(n(14),n(0));function d(e){var t=e.cell,n=e.rowIndex,o=e.cellIndex,i=e.setCellContent,r=Object(c.useState)(!1),a=Object(u.a)(r,2),l=a[0],d=a[1],f=Object(c.useState)(t.content),h=Object(u.a)(f,2),j=h[0],b=h[1],w=Object(c.useState)(!1),m=Object(u.a)(w,2),O=m[0],p=m[1];function v(e){""===e&&(b(e),p(!0)),e.split("").every((function(e){return e>="0"&&e<="9"}))&&(b(e),p(!0))}return Object(s.jsxs)("div",{className:0===o&&0!==n?"leftRulerCell":0===n&&0!==o?"topRulerCell":0===n&&0===o?"crossCell":"cell",children:[0===o&&0!==n?n:"",0===n&&0!==o?o:"",0!==o&&0!==n&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"checkbox",className:"checkbox",defaultChecked:l}),Object(s.jsx)("label",{htmlFor:"".concat(t.id),className:"fakeCheckbox",onClick:function(){d((function(e){return!e})),p(!!l)},children:l&&"X"}),Object(s.jsx)("input",{id:"".concat(t.id),type:"text",className:"textInput",value:j,onChange:function(e){return v(e.target.value)},onFocus:function(){p(!0)},onClick:function(){p(!0)},onBlur:function(){v(t.content),p(!1)},disabled:!!l}),O&&Object(s.jsx)("button",{className:"saveButton",onMouseDown:function(){i(j,t.id),p(!1),console.log("Changed cell with coords X: ".concat(o,", Y: ").concat(n,". ").concat(j?"New content is: ".concat(j):"Contentent is clear."))},children:"SAVE"})]})]})}n(16);function f(e){var t=e.row,n=e.rowIndex,c=e.setCellContent;return Object(s.jsx)("div",{className:0===n?"topRulerRow":"row",children:t.map((function(e,t){return Object(s.jsx)(d,{setCellContent:c,rowIndex:n,cellIndex:t,cell:e},e.id)}))})}n(17);function h(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],i=75,r=25,d=Object(c.useState)(Math.ceil(window.innerWidth/i)+5),h=Object(u.a)(d,2),j=h[0],b=h[1],w=Object(c.useState)(Math.ceil(window.innerHeight/r)+5),m=Object(u.a)(w,2),O=m[0],p=m[1];function v(){var e=document.documentElement.scrollWidth,t=document.documentElement.scrollHeight;Math.ceil(t/r)>O&&Math.ceil(t/r)<4e4&&(p(Math.ceil(t/r)),g(Math.ceil(t/r)-O)),Math.ceil(e/i)>j&&Math.ceil(e/i)<4e4&&(b(Math.ceil(e/i)),C(Math.ceil(e/i)-j))}function x(){var e=document.documentElement.scrollWidth,t=document.documentElement.scrollHeight,n=window.pageXOffset;100*window.pageYOffset/(t-window.innerHeight)>90&&(p(Math.ceil(t/r)),g(5)),100*n/(e-window.innerWidth)>90&&(b(Math.ceil(e/i)),C(5))}function g(e){for(var t=[],n=0;n<e+5;n++){for(var c=[],i=0;i<j;i++)c.push({id:"".concat(+new Date).concat(Math.random()),content:""});t.push(c)}o((function(e){return[].concat(Object(l.a)(e),t)}))}function C(e){o((function(t){return t.map((function(t){for(var n=Object(l.a)(t),c=0;c<e+5;c++)n.push({id:"".concat(+new Date).concat(Math.random()),content:""});return n}))}))}function M(e,t){o((function(n){return n.map((function(n){return n.map((function(n){return n.id===t?Object(a.a)(Object(a.a)({},n),{},{content:e}):n}))}))}))}return Object(c.useEffect)((function(){g(O)}),[]),Object(c.useEffect)((function(){return window.addEventListener("resize",v),window.addEventListener("scroll",x),function(){window.removeEventListener("resize",v),window.removeEventListener("scroll",x)}})),Object(s.jsx)("div",{className:"App",children:n&&n.map((function(e,t){return Object(s.jsx)(f,{setCellContent:M,rowIndex:t,row:e},t)}))})}var j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),j()}],[[18,1,2]]]);
//# sourceMappingURL=main.09e74b5a.chunk.js.map