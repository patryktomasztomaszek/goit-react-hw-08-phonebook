"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[71],{5071:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var a=n(2791),r=n(5861),s=n(9439),c=n(4687),i=n.n(c),o=n(5334),l="ContactForm_form__zqkUM",_="ContactForm_form__label__MOlzG",u="ContactForm_form__input__xCYsn",m="ContactForm_form__button__oxBoE",d=n(3329);var h=function(){var t=(0,o.wY)().data,e=void 0===t?[]:t,n=(0,o.Tn)(),a=(0,s.Z)(n,1)[0],c=function(){var t=(0,r.Z)(i().mark((function t(n){var r,s,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=n.target,s=r.name.value,c=r.number.value,!e.some((function(t){return t.name===s}))){t.next=8;break}alert("".concat(s," already existst in Contact Book!")),t.next=20;break;case 8:if(!e.some((function(t){return t.number===c}))){t.next=12;break}alert("".concat(c," number already exists in Contact Book!")),t.next=20;break;case 12:return t.prev=12,t.next=15,a({name:s,number:c});case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(12),alert("Something went south... Try again!");case 20:case"end":return t.stop()}}),t,null,[[12,17]])})));return function(e){return t.apply(this,arguments)}}(),h=l,f=_,x=u,p=m;return(0,d.jsx)("section",{children:(0,d.jsxs)("form",{className:h,onSubmit:c,children:[(0,d.jsx)("label",{className:f,htmlFor:"name",children:"Name"}),(0,d.jsx)("input",{className:x,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)("label",{className:f,children:" Number"}),(0,d.jsx)("input",{className:x,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)("button",{className:p,children:"Add contact"})]})})},f="ContactList_container__NJyem",x="ContactList_contact_list__PIJB2",p="ContactList_contact_list__item__ckrNp",b="ContactList_contact_list__info__yE9K8",C="ContactList_contact_list__name__UiTnB",j="ContactList_contact_list__number__mAS8v",N="ContactList_contact_list__button__gPRGI",v="ContactList_contact_list__notification__+Dt8q",k=n(5048);var g=function(){var t,e=(0,o.wY)(),n=e.data,r=void 0===n?[]:n,c=e.isLoading,i=e.isSuccess,l=e.isError,_=e.error,u=(0,k.v9)((function(t){return t.filter})),m=(0,o.Nt)(),h=(0,s.Z)(m,1)[0],g=(0,a.useMemo)((function(){return r.filter((function(t){return t.name.includes(u)}))}),[r,u]),F=f,L=x,y=p,w=b,A=C,B=j,z=N,Z=v;return c?t=(0,d.jsx)("h2",{children:"Loading..."}):i?t=0!==g.length?(0,d.jsx)("ul",{className:L,children:g.map((function(t){return(0,d.jsxs)("li",{className:y,children:[(0,d.jsxs)("div",{className:w,children:[(0,d.jsx)("p",{className:A,children:t.name}),(0,d.jsx)("p",{className:B,children:t.number})]}),(0,d.jsx)("button",{className:z,onClick:function(){return h(t.id)},children:"\ud83d\uddd1\ufe0f"})]},t.id)}))}):(0,d.jsx)("h2",{className:Z,children:"No contacts!"}):l&&(t=(0,d.jsx)("p",{children:_})),(0,d.jsx)("section",{className:F,children:t})},F=n(6895),L="ContactListFilter_filter__d4nCF",y="ContactListFilter_filter__label__CFHkS",w="ContactListFilter_filter__input__EX1mB";var A=function(){var t=(0,k.I0)(),e=L,n=y,a=w;return(0,d.jsxs)("section",{className:e,children:[(0,d.jsx)("label",{className:n,htmlFor:"filter",children:"Filter contacts by name:"}),(0,d.jsx)("input",{className:a,onChange:function(e){var n=e.currentTarget.value;t((0,F.T)(n))},name:"filter"})]})};function B(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{}),(0,d.jsx)(A,{}),(0,d.jsx)(g,{})]})}}}]);
//# sourceMappingURL=71.e61d9837.chunk.js.map