(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a.n(n),i=a(17),c=a(10),s=a(65),o=a(0),l=a.n(o),u=a(154),d=a(74),m=a.n(d),j=a(156),b=a(152),h=a(151),f=a(158),O=a(157),p=a(149),x=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],v=a(70),S=a.n(v),y=(a(94),a(2)),I=function(e){var t=e.user;return Object(y.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},N=(a(96),l.a.memo((function(e){var t=e.todo,a=t.id,n=t.title,r=t.user,i=t.completed;return Object(y.jsxs)("article",{"data-id":a,className:S()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(y.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(y.jsx)(I,{user:r})]})}))),C=(a(97),function(e){var t=e.todos;return Object(y.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(y.jsx)(N,{todo:e},e.id)}))})});a(98);var g=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:(t=e.userId,x.find((function(e){return e.id===t}))||null)});var t}));var _=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(""),s=Object(c.a)(r,2),l=s[0],d=s[1],v=Object(o.useState)(g),S=Object(c.a)(v,2),I=S[0],N=S[1],_=Object(o.useState)(!1),k=Object(c.a)(_,2),D=k[0],L=k[1],T=Object(o.useState)(!1),w=Object(c.a)(T,2),M=w[0],B=w[1];return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{children:"Add todo form"}),Object(y.jsxs)("form",{action:"/api/users",method:"POST",className:"form",onSubmit:function(e){if(e.preventDefault(),L(!a.trim()),B(!l),a.trim()&&l){var t=function(e,t){return t.find((function(t){return e===t.name}))||null}(l,x);N((function(e){var n=Math.max.apply(Math,Object(i.a)(e.map((function(e){return e.id}))));return[].concat(Object(i.a)(e),[{id:n+1,title:a,completed:!1,userId:t?t.id:null,user:t}])})),n(""),d("")}},children:[Object(y.jsxs)(j.a,{className:"field",sx:{mb:2},error:D,children:[Object(y.jsx)(O.a,{type:"text","data-cy":"titleInput",id:"title",name:"title",label:"Your title:",error:D,value:a,onChange:function(e){n(e.currentTarget.value),L(!1)},placeholder:"Enter your title",autoComplete:"off"}),D&&Object(y.jsx)(f.a,{className:"error",children:"Please enter a title"})]}),Object(y.jsxs)(j.a,{className:"field",sx:{mb:1},error:M,children:[Object(y.jsx)(b.a,{id:"userSelectLabel",children:"Select User"}),Object(y.jsxs)(p.a,{"data-cy":"userSelect",id:"userSelect",labelId:"userSelectLabel",label:"Select User",name:"userSelect",value:l,onChange:function(e){d(e.target.value),B(!1)},children:[Object(y.jsx)(h.a,{value:"",disabled:!0,children:"Choose a user"}),x.map((function(e){return Object(y.jsx)(h.a,{value:e.name,children:e.name},e.id)}))]}),M&&Object(y.jsx)(f.a,{className:"error",children:"Please choose a user"})]}),Object(y.jsx)(u.a,{type:"submit","data-cy":"submitButton",variant:"contained",color:"success",endIcon:Object(y.jsx)(m.a,{}),children:"Add"})]}),Object(y.jsx)(C,{todos:I})]})};r.a.render(Object(y.jsx)(_,{}),document.getElementById("root"))},94:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.0ea7784d.chunk.js.map