(this.webpackJsonpappiness=this.webpackJsonpappiness||[]).push([[0],{41:function(e,t,a){e.exports=a(73)},46:function(e,t,a){},47:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),o=a.n(r),c=(a(46),a(47),a(21)),s=a(7),i=a(3),u=Object(i.a)(),m=a(22),d=a.n(m),h=a(37),p=a(23),E=a(15),b=a(16),g=a(11),f=a(17),v=a(18),y=a(10),O=a(19),w=a.n(O),j=(a(70),function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",submitted:!1,message:!1},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(b.a)(a,[{key:"handleChange",value:function(e){var t;e.preventDefault();var a=e.target,n=a.name,l=a.value;this.setState((t={},Object(p.a)(t,n,l),Object(p.a)(t,"message",!1),t))}},{key:"handleSubmit",value:function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.setState({submitted:!0}),a=this.state,n=a.username,l=a.password,!n||!l){e.next=7;break}return e.next=6,this.props.login(n,l);case 6:"success"===this.props.loginData||(this.setState({message:!0}),console.log(this.props.loginData));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.submitted,r=e.message;return l.a.createElement("div",{className:"center"},l.a.createElement("h2",null,"Login"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{className:"form-control",type:"text",name:"username",value:t,onChange:this.handleChange}),n&&!t&&l.a.createElement("div",{className:"help-block"},"Username is required")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{className:"form-control",type:"password",name:"password",value:a,onChange:this.handleChange}),n&&!a&&l.a.createElement("div",{className:"help-block"},"Password is required")),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary"},"Login")),l.a.createElement("div",null,n&&r&&l.a.createElement("div",{className:"error-block"},"Please enter valid details"))))}}]),a}(n.Component)),N=Object(y.b)((function(e){return{loginData:e.loginData}}),{login:function(e,t){return function(a){return w.a.get("https://sivagoutham.github.io/reactLogin/login.json").then((function(n){console.log(n),n.data.login.forEach((function(n){console.log(n),n.username===e&&n.password===t?(console.log("test"),a({type:"GET_LOGIN",payload:"success"}),u.push("#/dashboard")):a({type:"GET_LOGIN",payload:"failure"})}))}))}}})(j),k=(a(71),function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handleClick=function(){window.history.back()},n.state={emp:[]},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.getEmployees()}},{key:"render",value:function(){var e=this.props.employee;return console.log(e),l.a.createElement(l.a.Fragment,null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Gender"),l.a.createElement("th",null,"Email Id"),l.a.createElement("th",null,"Phone Number"))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.gender),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phoneNo))})))),l.a.createElement("div",{className:"btnPadding"},l.a.createElement("button",{className:"btn btn-primary",onClick:this.handleClick},"Logout")))}}]),a}(n.Component)),C=Object(y.b)((function(e){return{employee:e.employee}}),{getEmployees:function(){return function(e){return w.a.get("https://sivagoutham.github.io/reactLogin/dashboard.json").then((function(t){console.log(t),e({type:"GET_EMPLOYEES",payload:t.data.user})}))}}})(k);var G=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(c.a,{history:u},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:N}),l.a.createElement(s.a,{path:"/dashboard",component:C})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(40),S=a(8),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EMPLOYEES":case"GET_LOGIN":return t.payload;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGIN":return t.payload;default:return e}},x=Object(S.c)({employee:D,loginData:P}),I=Object(S.a)(L.a)(S.d);o.a.render(l.a.createElement(y.a,{store:I(x)},l.a.createElement(G,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c483b718.chunk.js.map