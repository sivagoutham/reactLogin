(this.webpackJsonpappiness=this.webpackJsonpappiness||[]).push([[0],{41:function(e,t,a){e.exports=a(73)},46:function(e,t,a){},47:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),s=a.n(l),o=(a(46),a(47),a(20)),c=a(7),i=a(21),u=a.n(i),m=a(37),d=a(22),h=a(15),p=a(16),E=a(11),b=a(17),g=a(18),v=a(10),f=a(24),w=a.n(f),y=(a(70),RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)),O=RegExp(/^[0-9a-zA-Z]+$/),N=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",submitted:!1,message:!1,errors:{email:"",password:""}},n.handleChange=n.handleChange.bind(Object(E.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(E.a)(n)),n}return Object(p.a)(a,[{key:"handleChange",value:function(e){var t;e.preventDefault();var a=e.target,n=a.name,r=a.value,l=this.state.errors,s=l.email,o=l.password;if(r.length>0)switch(n){case"username":s=y.test(r),l.email=s?"":"Email is not valid!";break;case"password":o=O.test(r),l.password=o?"":"Password is not valid!"}else l.email="",l.password="";this.setState((t={errors:l},Object(d.a)(t,n,r),Object(d.a)(t,"message",!1),t))}},{key:"handleSubmit",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.setState({submitted:!0}),a=this.state,n=a.username,r=a.password,l=a.errors,!n||!r||""!==l.email||""!==l.password){e.next=7;break}return e.next=6,this.props.login(n,r);case 6:"success"===this.props.loginData?("https://sivagoutham.github.io/reactLogin/#/dashboard",window.location.href="https://sivagoutham.github.io/reactLogin/#/dashboard",window.location.reload(!0)):this.setState({message:!0});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.submitted,l=e.message,s=e.errors;return r.a.createElement("div",{className:"center"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{className:"form-control",type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("span",{className:"help-block"},s.email),n&&!t&&r.a.createElement("div",{className:"help-block"},"Username is required")),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{className:"form-control",type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("span",{className:"help-block"},s.password),n&&!a&&r.a.createElement("div",{className:"help-block"},"Password is required")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary"},"Login")),r.a.createElement("div",null,n&&l&&r.a.createElement("div",{className:"error-block"},"Please enter valid details"))))}}]),a}(n.Component),k=Object(v.b)((function(e){return{loginData:e.loginData}}),{login:function(e,t){return function(a){return w.a.get("https://sivagoutham.github.io/reactLogin/login.json").then((function(n){n.data.login.forEach((function(n){n.username===e&&n.password===t?a({type:"GET_LOGIN",payload:"success"}):a({type:"GET_LOGIN",payload:"failure"})}))}))}}})(N),j=(a(71),function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleClick=function(){window.history.back()},n.state={emp:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.getEmployees()}},{key:"render",value:function(){var e=this.props.employee;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null,"Email Id"),r.a.createElement("th",null,"Phone Number"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phoneNo))})))),r.a.createElement("div",{className:"btnPadding"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.handleClick},"Logout")))}}]),a}(n.Component)),L=Object(v.b)((function(e){return{employee:e.employee}}),{getEmployees:function(){return function(e){return w.a.get("https://sivagoutham.github.io/reactLogin/dashboard.json").then((function(t){e({type:"GET_EMPLOYEES",payload:t.data.user})}))}}})(j);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(o.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:k}),r.a.createElement(c.a,{path:"/dashboard",component:L})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(40),S=a(8),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EMPLOYEES":case"GET_LOGIN":return t.payload;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGIN":return t.payload;default:return e}},D=Object(S.c)({employee:x,loginData:P}),I=Object(S.a)(G.a)(S.d);s.a.render(r.a.createElement(v.a,{store:I(D)},r.a.createElement(C,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.a06ad2a0.chunk.js.map