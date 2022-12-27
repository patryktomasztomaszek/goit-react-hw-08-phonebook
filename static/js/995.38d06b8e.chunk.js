"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[995],{2995:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=a(5861),n=a(9439),s=a(4687),o=a.n(s),i=(a(2791),a(5334)),l=a(5048),u=a(7689),c=a(7496),p=a(6696),m="RegistrationPage_registration_form__e6TtY",d=a(3329),f=function(){var e=(0,i.Bl)(),t=(0,n.Z)(e,1)[0],a=(0,l.I0)(),s=(0,u.s0)(),f=function(){var e=(0,r.Z)(o().mark((function e(r){var n,i,l,u,m,d,f,w,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=r.target,i=n.firstName.value,l=n.lastName.value,u="".concat(i," ").concat(l),m=n.email.value,d=n.password.value,f=n.passwordConfirm.value,d===f){e.next=10;break}return e.abrupt("return",alert("Password and password confirmation do not match!"));case 10:return w={name:u,email:m,password:d},e.next=13,t(w).unwrap().then((function(e){var t=e.token,r=e.user,n=r.email,s=r.name;localStorage.setItem("token",JSON.stringify(t)),t&&a((0,c.cn)({email:n,name:s}))})).catch((function(){alert("User with this email address already exists!")}));case 13:return e.next=15,JSON.parse(localStorage.getItem("token"));case 15:if(void 0!==(h=e.sent)){e.next=18;break}return e.abrupt("return");case 18:return e.next=20,a((0,p.Z6)(h));case 20:return e.next=22,s("/contacts");case 22:n.reset();case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=m;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{className:w,onSubmit:f,children:[(0,d.jsxs)("label",{children:["First name",(0,d.jsx)("input",{type:"text",name:"firstName",required:!0})]}),(0,d.jsxs)("label",{children:["Last name",(0,d.jsx)("input",{type:"text",name:"lastName",required:!0})]}),(0,d.jsxs)("label",{children:["E-mail",(0,d.jsx)("input",{type:"email",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",autoComplete:"email",required:!0})]}),(0,d.jsxs)("label",{children:["Password",(0,d.jsx)("input",{type:"password",name:"password",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters",autoComplete:"new-password",required:!0})]}),(0,d.jsxs)("label",{children:["Confirm password",(0,d.jsx)("input",{type:"password",name:"passwordConfirm",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters",autoComplete:"new-password-confirm",required:!0})]}),(0,d.jsx)("button",{type:"submit",children:"Register account"})]})})}}}]);
//# sourceMappingURL=995.38d06b8e.chunk.js.map