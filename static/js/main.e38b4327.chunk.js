(this.webpackJsonpreto3=this.webpackJsonpreto3||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=(a(13),a(14),function(e){return r.a.createElement("header",null,r.a.createElement("span",{className:"titulo"},"Treyo"))}),s=a(1),o=a(5),u=a(4),m=(a(15),a(16),a(17),function(e){return r.a.createElement("li",{className:"tareilla",key:e.descripcion,draggable:!0,onDragStart:function(t){return function(e,t,a,n){e.dataTransfer.setData("descripcion",t),e.dataTransfer.setData("ind",a),e.dataTransfer.setData("col",n)}(t,e.descripcion,e.index,e.col)}},r.a.createElement("span",null,e.descripcion),r.a.createElement("span",{className:"btnBorraTarea",onClick:function(){return e.borraTarea(e.index,e.col)}},"X"))}),d=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),d=Object(u.a)(i,2),f=d[0],p=d[1],E=Object(n.useState)([]),b=Object(u.a)(E,2),v=b[0],k=b[1],g=function(e){k([e.target.name,e.target.value])},j=function(e,t){var a=Object(s.a)(f);a[t].tasks.splice(e,1),p(a)};return r.a.createElement("div",{className:"board"},f.map((function(e,t){return r.a.createElement("div",{key:t,className:"columna"},r.a.createElement("div",{className:"titular"},r.a.createElement("span",{className:"titulo"},e.title),r.a.createElement("span",{className:"btnBorrado",onClick:function(){return function(e){var t=Object(s.a)(f);t.splice(e,1),p(t)}(t)}},"X")),r.a.createElement("ul",{className:"contenedorMensajes",onDragOver:function(e){e.preventDefault()},onDrop:function(e){return function(e,t){var a=Object(s.a)(f);a[t].tasks.push(e.dataTransfer.getData("descripcion")),a[e.dataTransfer.getData("col")].tasks.splice(e.dataTransfer.getData("ind"),1),p(a)}(e,t)}},e.tasks.map((function(e,a){return r.a.createElement(m,{descripcion:e,col:t,key:a,index:a,borraTarea:j})}))),r.a.createElement("div",{className:"frm"},r.a.createElement("input",{type:"text",id:"descripcion",key:t,colu:t,name:t,value:t==v[0]?v[1]:"",placeholder:"Indica la tarea...",onChange:g}),r.a.createElement("span",{co:t,onClick:function(){return function(e){if(e==v[0]&&""!==v[1].trim()){var t=Object(s.a)(f);t[e].tasks.push(v[1]),p(t),k("")}}(t)}},"+")))})),r.a.createElement("div",{className:"we"},r.a.createElement("input",{type:"text",id:"title",name:"title",value:c.title,placeholder:"Nombre de la lista...",onChange:function(e){var t;return l((t={},Object(o.a)(t,e.target.name,e.target.value),Object(o.a)(t,"tasks",[]),t))}}),r.a.createElement("span",{onClick:function(e){0!==Object.keys(c).length&&""!==c.title.trim()&&(p([].concat(Object(s.a)(f),[c])),l({title:""}))}},"+")))};var f=function(){return r.a.createElement("div",{className:"treyo"},r.a.createElement(i,null),r.a.createElement(d,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e38b4327.chunk.js.map