(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{15:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(7),c=a.n(n),u=(a(15),a(10)),i=a(2),j=a(8),l=a.n(j),o=a(0),b=function(e){var t=e.mensaje;return Object(o.jsx)("p",{className:"alert alert-danger error",children:t})};b.propType={mensaje:l.a.string.isRequired};var d=b,O=function(e){var t=e.guardarPresupuesto,a=e.guardarRestante,r=e.actualizarPregunta,n=Object(s.useState)(0),c=Object(i.a)(n,2),u=c[0],j=c[1],l=Object(s.useState)(!1),b=Object(i.a)(l,2),O=b[0],p=b[1];return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("h2",{children:"Agrega tu Presupuesto"}),O?Object(o.jsx)(d,{mensaje:"El presupuesto es incorrecto"}):null,Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u<1||isNaN(u)?p(!0):(p(!1),t(u),a(u),r(!1))},children:[Object(o.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Agrega tu presupuesto",onChange:function(e){j(parseInt(e.target.value),10)},min:"0"}),Object(o.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"definir presupuesto"})]})]})},p=a(9),m=a.n(p),h=function(e){var t=e.guardarGasto,a=e.guardarCreargasto,r=Object(s.useState)(""),n=Object(i.a)(r,2),c=n[0],u=n[1],j=Object(s.useState)(0),l=Object(i.a)(j,2),b=l[0],O=l[1],p=Object(s.useState)(!1),h=Object(i.a)(p,2),g=h[0],x=h[1];return Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),b<1||isNaN(b)||""===c.trim())x(!0);else{x(!1);var s={nombre:c,cantidad:b,id:m.a.generate()};t(s),a(!0),u(""),O(0)}},children:[Object(o.jsx)("h2",{children:"Agrega tus gastos aqu\xed"}),g?Object(o.jsx)(d,{mensaje:"Ambos campos son obligatorios"}):null,Object(o.jsxs)("div",{className:"campo",children:[Object(o.jsx)("label",{children:"Nombre Gasto"}),Object(o.jsx)("input",{type:"text",className:"u-full-width",placeholder:"Ej. Transporte",value:c,onChange:function(e){return u(e.target.value)}})]}),Object(o.jsxs)("div",{className:"campo",children:[Object(o.jsx)("label",{children:"Cantidad Gasto"}),Object(o.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Ej. 10000",value:b,min:"0",onChange:function(e){return O(parseInt(e.target.value,10))}})]}),Object(o.jsx)("input",{type:"submit",className:"button-primary u-full-width"})]})},g=function(e){var t=e.gasto;return Object(o.jsx)("li",{className:"gastos",children:Object(o.jsxs)("p",{children:[t.nombre,Object(o.jsxs)("span",{className:"gasto",children:[" ",t.cantidad]})]})})},x=function(e){var t=e.gastos;return Object(o.jsxs)("div",{className:"gastos-realizados",children:[Object(o.jsx)("h2",{children:"Listado"}),t.map((function(e){return Object(o.jsx)(g,{gasto:e},e.id)}))]})},f=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},v=function(e){var t=e.presupuesto,a=e.restante;return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("div",{className:"alert alert-primary",children:["Presupuesto: $ ",t]}),Object(o.jsxs)("div",{className:f(t,a),children:["Restante: $ ",a]})]})};var N=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(0),c=Object(i.a)(n,2),j=c[0],l=c[1],b=Object(s.useState)(!0),d=Object(i.a)(b,2),p=d[0],m=d[1],g=Object(s.useState)([]),f=Object(i.a)(g,2),N=f[0],S=f[1],y=Object(s.useState)({}),w=Object(i.a)(y,2),C=w[0],P=w[1],F=Object(s.useState)(!1),E=Object(i.a)(F,2),G=E[0],A=E[1];return Object(s.useEffect)((function(){G&&S([].concat(Object(u.a)(N),[C]));var e=j-C.cantidad;l(e),A(!1)}),[C]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Gasto Semanal"})}),Object(o.jsx)("div",{className:"contenido-principal contenido",children:p?Object(o.jsx)(O,{guardarPresupuesto:r,guardarRestante:l,actualizarPregunta:m}):Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"one-half column",children:Object(o.jsx)(h,{guardarGasto:P,guardarCreargasto:A})}),Object(o.jsxs)("div",{className:"one-half column",children:[Object(o.jsx)(x,{gastos:N}),Object(o.jsx)(v,{presupuesto:a,restante:j})]})]})})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),n(e),c(e)}))};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),S()}},[[27,1,2]]]);
//# sourceMappingURL=main.ad7955fa.chunk.js.map