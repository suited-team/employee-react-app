(this["webpackJsonpreact-router-demo"]=this["webpackJsonpreact-router-demo"]||[]).push([[0],{113:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),o=a.n(r),c=a(28),i=a(15),s=a(16),m=a(18),u=a(17),d=a(5),p=a(24),h=a.n(p),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e.onLogout=function(){localStorage.clear(),window.location.reload()},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.n,{color:"default-color",dark:!0,expand:"md"},l.a.createElement(d.o,null,l.a.createElement("strong",{className:"white-text"},"IRADA Consulting")),l.a.createElement(d.q,{onClick:this.toggleCollapse}),l.a.createElement(d.p,{left:!0},l.a.createElement(d.l,null,l.a.createElement(d.m,{to:"/"},"My Tasks")),l.a.createElement(d.l,null,l.a.createElement(d.m,{to:"/"},"Contact Clients")),l.a.createElement(d.l,null,l.a.createElement(d.m,{to:"/",onClick:this.onLogout},"Logout")),l.a.createElement(d.l,null,l.a.createElement(d.e,null,l.a.createElement(d.h,{nav:!0,caret:!0},l.a.createElement(d.i,{icon:"user"}),"\xa0 Edit profile"),l.a.createElement(d.g,{className:"dropdown-default"},l.a.createElement("input",{type:"password",placeholder:"password",id:"username"}),l.a.createElement(d.f,{onClick:function(){var e={password:document.getElementById("password").value,email:localStorage.getItem("emailEmployee")};h.a.put("https://server-cunsulting.herokuapp.com/employee/update",e).then((function(e){console.log(e.data)}))}},"Update username"))))))}}]),a}(n.Component),g=a(19),f=a(8),v=a(20),b=a(32),y=a.n(b),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.onSubmit=n.onSubmit.bind(Object(v.a)(n)),n.onChange=n.onChange.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"onChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;return console.log(this.state),""===this.state.email?y.a.fire({icon:"error",title:"Oops...",text:"Please enter a valid email!",footer:"<a href>Why do I have this issue?</a>"}):""===this.state.password?y.a.fire({icon:"error",title:"Oops...",text:"Please enter a valid password!",footer:"<a href>Why do I have this issue?</a>"}):(h.a.post("https://server-cunsulting.herokuapp.com/employee/login",this.state).then((function(e){if(console.log(e),""===e.data)return y.a.fire({icon:"error",title:"Oops...",text:"Email or Password are incorrect!",footer:"<a href>Why do I have this issue?</a>"});localStorage.setItem("tokenEmployee",e.data),localStorage.setItem("emailEmployee",t.state.email),window.location.reload()})),void e.preventDefault())}},{key:"render",value:function(){return l.a.createElement("div",{className:"login"},l.a.createElement(d.d,null,l.a.createElement(d.t,null,l.a.createElement(d.c,{md:"6"},l.a.createElement("form",null,l.a.createElement("p",{className:"h4 text-center mb-4"},"Sign in"),l.a.createElement("div",{className:"blue-text"},l.a.createElement(d.k,{name:"email",className:"input",label:"Type your email",icon:"envelope",group:!0,type:"email",validate:!0,required:!0,error:"wrong",success:"right",onChange:this.onChange}),l.a.createElement(d.k,{name:"password",className:"input",label:"Type your password",icon:"lock",group:!0,required:!0,type:"password",validate:!0,onChange:this.onChange})),l.a.createElement("div",{className:"text-center"},l.a.createElement(d.b,{tyoe:"Submit",onClick:this.onSubmit},"Login")))))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"P")}}]),a}(n.Component),C=(a(113),a(60)),w=a(126),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:[]},n.check=n.check.bind(Object(v.a)(n)),n}return Object(s.a)(a,[{key:"phase",value:function(e){return"fase 1"===e?"in progress":"fase 2"===e?"on Hold":"fase 3"===e?"almost":"Complete"}},{key:"check",value:function(){var e=this,t={email:localStorage.getItem("emailEmployee")};console.log(t.email),h.a.post("https://server-cunsulting.herokuapp.com/task/Employee",t).then((function(t){t.data.length>e.state.data.length&&(console.log(t.data),e.setState({data:t.data}))}))}},{key:"render",value:function(){var e=this;return this.check(),console.log(this.state.data),l.a.createElement("div",{style:{marginTop:"100px",marginLeft:"200px"}},l.a.createElement(C.a,{style:{width:"1000px",fontSize:"20px"},striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Client name"),l.a.createElement("th",null,"Employee name"),l.a.createElement("th",null,"Creation date"),l.a.createElement("th",null,"Due date"),l.a.createElement("th",null,"status"))),l.a.createElement("tbody",null,this.state.data.map((function(t,a){return l.a.createElement("tr",null,l.a.createElement("td",null,a+1),l.a.createElement("td",null,t.ClientName),l.a.createElement("td",null,t.EmployeeName),l.a.createElement("td",null,t.startDate),l.a.createElement("td",null,t.DueDate),l.a.createElement("td",null,l.a.createElement(w.a,null,l.a.createElement(w.a.Toggle,{variant:"success",id:"dropdown-basic"}),e.phase(t.status),l.a.createElement(w.a.Menu,null,l.a.createElement(w.a.Item,{style:{backgroundColor:"#387DF8",color:"white"}},"In progress"),l.a.createElement(w.a.Item,{style:{backgroundColor:"red",color:"white"}},"On hold"),l.a.createElement(w.a.Item,{style:{backgroundColor:"orange",color:"white"}},"almost"),l.a.createElement(w.a.Item,{style:{backgroundColor:"green",color:"white"}},"Done")))))})))))}}]),a}(n.Component),x=a(64),I=a.n(x),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e;return l.a.createElement("div",null,l.a.createElement("div",null,null!==localStorage.getItem("tokenEmployee")?l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/profile",exact:!0,component:O}),l.a.createElement(f.a,{path:"/",exact:!0,component:j}),l.a.createElement(f.a,{path:"/",exact:!0,component:I.a})))):l.a.createElement(g.a,null,l.a.createElement(f.c,null,l.a.createElement(f.a,(e={path:"/",exact:!0},Object(c.a)(e,"exact",!0),Object(c.a)(e,"component",k),e))))))}}]),a}(n.Component);a(115),a(116),a(117);o.a.render(l.a.createElement(S,null),document.getElementById("root"))},64:function(e,t){},65:function(e,t,a){e.exports=a(118)}},[[65,1,2]]]);
//# sourceMappingURL=main.4ec3bd7e.chunk.js.map