(this["webpackJsonpmi-aplicacion"]=this["webpackJsonpmi-aplicacion"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(26),s=a.n(r),i=(a(33),a(4)),j=(a.p,a(34),a(9)),l=a(0);var d=function(e){var t=e.datos;return Object(l.jsxs)("div",{className:"Detalle",children:[Object(l.jsxs)("p",{children:["ID: ",t.ID]}),Object(l.jsxs)("p",{children:["Genes: ",t.Dna.map((function(e){return Object(l.jsx)("li",{children:e})}))]}),Object(l.jsx)("button",{className:"btn btn-white",children:Object(l.jsx)(j.b,{to:"/Gen/"+t.ID,className:"withe",children:"Ver Detalle Gen"})})]})},o=a(27),b=a.n(o).a.create({baseURL:"https://cerebroxmenapi.azurewebsites.net/"});function u(e){return b.get("mutant/"+e)}var O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),j=s[0],o=s[1];return Object(n.useEffect)((function(){b.get("all").then((function(e){e.data&&(o(!1),c(e.data))})).catch((function(e){console.log(e)}))}),[]),j?Object(l.jsx)("div",{className:"body",children:"Cargando ..."}):Object(l.jsx)("div",{className:"body flex",children:a.map((function(e){return Object(l.jsx)(d,{datos:e})}))})},h=a(2);var x=function(){return Object(l.jsx)("div",{className:"BordeMenu AncladoTop",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"Menu",children:Object(l.jsx)(j.b,{to:"/",children:"Inicio"})}),Object(l.jsx)("li",{className:"Menu",children:Object(l.jsx)(j.b,{to:"/Registro",children:"Registro"})}),Object(l.jsx)("li",{className:"Menu",children:Object(l.jsx)(j.b,{to:"/login",children:"Login"})}),Object(l.jsx)("li",{className:"Menu",children:Object(l.jsx)(j.b,{to:"/AltaGen",children:"AltaGen"})}),Object(l.jsx)("li",{className:"Menu",children:Object(l.jsx)(j.b,{to:"/stats",children:"Stats"})})]})})};var p=function(){return Object(l.jsx)("div",{className:"AnclarBottom",children:"Copyrigth ..."})},v=a(5),m=a(3),C=a.n(m),f=a(28),g=a.n(f);function y(e){switch(e){case!0:return"Si";case!1:return"No";default:return String(e)}}var N=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),j=s[0],d=s[1],o=Object(h.g)().id;return Object(n.useEffect)((function(){var e=function(){var e=Object(v.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(o);case 3:(t=e.sent).data&&(c(t.data),d(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),j?Object(l.jsx)("div",{className:"body detalle",children:"Cargando ..."}):Object(l.jsxs)("div",{className:"body detalle",children:[Object(l.jsx)("p",{children:a.id}),Object(l.jsx)("p",{children:a.Dna.map((function(e){return Object(l.jsx)("li",{children:e})}))}),Object(l.jsxs)("p",{children:["Es Mutante: ",y(a.EsMutante)]}),Object(l.jsxs)("p",{children:["Fecha alta: ",g()(a.FechaAlta).format("DD/MM/YYYY HH:mm:SS")]})]})};var A=function(e){var t=e.datos;return Object(l.jsxs)("div",{className:"",children:[Object(l.jsxs)("p",{children:["Humanos: ",t.CountHumantDNA]}),Object(l.jsxs)("p",{children:["Mutantes: ",t.CountMutantDNA]}),Object(l.jsxs)("p",{children:["Ratio: ",t.Ratio]})]})};var w=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),j=s[0],d=s[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(v.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("/stats");case 3:(t=e.sent).data&&(c(t.data),d(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),j?Object(l.jsx)("div",{className:"body",children:"Cargando ..."}):Object(l.jsx)("div",{className:"body",children:Object(l.jsx)(A,{datos:a})})},G=a(6),S=a(16);var E=function(e){var t=e.label,a=e.type,n=e.register;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:t}),Object(l.jsx)("input",Object(G.a)({type:a||"text"},n))]})};var q=function(){var e,t,a=Object(S.a)(),n=a.register,c=a.handleSubmit,r=(a.watch,a.formState.errors);return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)("form",{onSubmit:c((function(e){return console.log(e)})),children:[Object(l.jsx)(E,{label:"Email",type:"email",register:Object(G.a)({},n("Email",{required:!0}))}),r.Email&&Object(l.jsx)("span",{children:"Es necesario un mail"}),Object(l.jsx)(E,{label:"Password",type:"password",register:Object(G.a)({},n("Password",{required:!0,minLength:6}))}),"required"===(null===(e=r.Password)||void 0===e?void 0:e.type)&&Object(l.jsx)("div",{children:"El campo Contrase\xf1a es obligatorio"}),"minLength"===(null===(t=r.Password)||void 0===t?void 0:t.type)&&Object(l.jsx)("div",{children:"Debe completar al menos 6 caracteres"}),Object(l.jsx)("button",{type:"submit",children:"Login"})]})})},D=a(10);var T=function(){var e=Object(n.useState)({Nombre:"",Apellido:"",Email:"",Password:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=function(e){var t=e.target.name,n=e.target.value;console.log("handleChange",t,n),c(Object(G.a)(Object(G.a)({},a),{},Object(D.a)({},t,n)))};return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)("form",{onSubmit:function(e){console.log("handleSubmit",a),e.preventDefault()},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Nombre:"}),Object(l.jsx)("input",{type:"text",name:"Nombre",value:a.Nombre,onChange:r})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Apellido:"}),Object(l.jsx)("input",{type:"text",name:"Apellido",value:a.Apellido,onChange:r})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Email:"}),Object(l.jsx)("input",{type:"text",name:"Email",value:a.Email,onChange:r})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Password:"}),Object(l.jsx)("input",{type:"password",name:"Password",value:a.Password,onChange:r})]}),Object(l.jsx)("button",{type:"submit",children:"Registrar"})]})})};var M=function(){var e,t,a,c,r,s,j,d,o,u,O,h,x=Object(S.a)(),p=x.register,m=x.handleSubmit,f=(x.watch,x.formState.errors),g=Object(n.useState)({Cadena1:"",Cadena2:"",Cadena3:"",Cadena4:"",Cadena5:"",Cadena6:""}),y=Object(i.a)(g,2),N=(y[0],y[1]);function A(){N({Cadena1:"",Cadena2:"",Cadena3:"",Cadena4:"",Cadena5:"",Cadena6:""})}var w=function(){var e=Object(v.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("request",t),e.next=4,n=t,b.post("mutant",{Dna:n});case 4:200===(a=e.sent).status?(alert("Gen creado. Es mutante"),A()):alert("status: "+a.status),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),403===e.t0.response.status?(alert("Gen creado. Es humano"),A()):alert("error: "+e.t0.response.status);case 11:case"end":return e.stop()}var n}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)("form",{onSubmit:m((function(e){console.log(e);var t=[e.Cadena1,e.Cadena2,e.Cadena3,e.Cadena4,e.Cadena5,e.Cadena6];w(t)})),children:[Object(l.jsxs)("div",{className:"CargaGen",children:[Object(l.jsx)("label",{children:"Genes:"}),Object(l.jsx)(E,{register:Object(G.a)({},p("Cadena1",{required:!0,pattern:/([A]|[G]|[C]|[T]){6}/}))}),"required"===(null===(e=f.Cadena1)||void 0===e?void 0:e.type)&&Object(l.jsx)("div",{children:"El campo es obligatorio"}),"pattern"===(null===(t=f.Cadena1)||void 0===t?void 0:t.type)&&Object(l.jsx)("div",{children:"Caracteres permitidos A, C, G y T"}),Object(l.jsx)(E,{register:Object(G.a)({},p("Cadena2",{required:!0,pattern:/([A]|[G]|[C]|[T]){6}/}))}),"required"===(null===(a=f.Cadena2)||void 0===a?void 0:a.type)&&Object(l.jsx)("div",{children:"El campo es obligatorio"}),"pattern"===(null===(c=f.Cadena2)||void 0===c?void 0:c.type)&&Object(l.jsx)("div",{children:"Caracteres permitidos A, C, G y T"}),Object(l.jsx)(E,{register:Object(G.a)({},p("Cadena3",{required:!0,pattern:/([A]|[G]|[C]|[T]){6}/}))}),"required"===(null===(r=f.Cadena3)||void 0===r?void 0:r.type)&&Object(l.jsx)("div",{children:"El campo es obligatorio"}),"pattern"===(null===(s=f.Cadena3)||void 0===s?void 0:s.type)&&Object(l.jsx)("div",{children:"Caracteres permitidos A, C, G y T"}),Object(l.jsx)(E,{register:Object(G.a)({},p("Cadena4",{required:!0,pattern:/([A]|[G]|[C]|[T]){6}/}))}),"required"===(null===(j=f.Cadena4)||void 0===j?void 0:j.type)&&Object(l.jsx)("div",{children:"El campo es obligatorio"}),"pattern"===(null===(d=f.Cadena4)||void 0===d?void 0:d.type)&&Object(l.jsx)("div",{children:"Caracteres permitidos A, C, G y T"}),Object(l.jsx)(E,{register:Object(G.a)({},p("Cadena5",{required:!0,pattern:/([A]|[G]|[C]|[T]){6}/}))}),"required"===(null===(o=f.Cadena5)||void 0===o?void 0:o.type)&&Object(l.jsx)("div",{children:"El campo es obligatorio"}),"pattern"===(null===(u=f.Cadena5)||void 0===u?void 0:u.type)&&Object(l.jsx)("div",{children:"Caracteres permitidos A, C, G y T"}),Object(l.jsx)(E,{register:Object(G.a)({},p("Cadena6",{required:!0,pattern:/([A]|[G]|[C]|[T]){6}/}))}),"required"===(null===(O=f.Cadena6)||void 0===O?void 0:O.type)&&Object(l.jsx)("div",{children:"El campo es obligatorio"}),"pattern"===(null===(h=f.Cadena6)||void 0===h?void 0:h.type)&&Object(l.jsx)("div",{children:"Caracteres permitidos A, C, G y T"})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-white white",children:"Registrar Gen"})]})})};var P=function(){return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)("h1",{children:"404"}),Object(l.jsx)("h2",{children:"P\xe1gina no encontrada"})]})};var k=function(){return Object(l.jsxs)(j.a,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{path:"/",element:Object(l.jsx)(O,{})}),Object(l.jsx)(h.a,{path:"/Mi-Aplicacion",element:Object(l.jsx)(O,{})}),Object(l.jsx)(h.a,{path:"/registro",element:Object(l.jsx)(T,{})}),Object(l.jsx)(h.a,{path:"/login",element:Object(l.jsx)(q,{})}),Object(l.jsx)(h.a,{path:"/AltaGen",element:Object(l.jsx)(M,{})}),Object(l.jsx)(h.a,{path:"/Gen/:id",element:Object(l.jsx)(N,{})}),Object(l.jsx)(h.a,{path:"/stats",element:Object(l.jsx)(w,{})}),Object(l.jsx)(h.a,{path:"/*",element:Object(l.jsx)(P,{})})]}),Object(l.jsx)(p,{})]})};var L=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2);return t[0],t[1],Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(k,{})})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),R()}},[[56,1,2]]]);
//# sourceMappingURL=main.eacbc1a9.chunk.js.map