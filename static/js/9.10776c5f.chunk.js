(this["webpackJsonpmiles-admin-panel"]=this["webpackJsonpmiles-admin-panel"]||[]).push([[9,18],{103:function(e,t,c){"use strict";c(0),c(112);var n=c(1);t.a=function(e){var t=e.title,c=e.description;return Object(n.jsx)("div",{className:"message",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 text-center mb-2",children:Object(n.jsx)("i",{className:"far fa-check-circle message-icon"})}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h4",{children:t}),Object(n.jsx)("p",{children:c&&c})]})]})})}},111:function(e,t,c){"use strict";c(0);var n=c(204),s=c(28),a=c(103),i=(c(113),c(1));t.a=function(e){var t=e.handleClose,c=e.openModal,l=e.content,o=e.loader,r=e.sucessMessage;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(n.a,{show:c,onHide:t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"contact-form ",children:[Object(i.jsx)(n.a.Header,{closeButton:!0,children:Object(i.jsx)("h3",{children:"Get in touch"})}),Object(i.jsxs)(n.a.Body,{children:[!o&&!r&&l,o&&Object(i.jsx)("div",{className:"loading-modal-container",children:Object(i.jsx)(s.default,{})}),r&&Object(i.jsx)(a.a,{title:"Thank You!",description:"Your submission has been received. You Will be Contacted Shortly"})]})]})})}},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},122:function(e,t,c){},190:function(e,t,c){},191:function(e,t,c){},192:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t),c.d(t,"ItemsContext",(function(){return m})),c.d(t,"ColumnContext",(function(){return u}));var n=c(27),s=c(0),a=c.n(s),i=c(43),l=c(14),o=c(5),r=c(24),d=c(89),j=c(28),b=(c(122),c(1)),m=a.a.createContext(),u=a.a.createContext();t.default=function(){var e=Object(s.useState)([{id:"1",name:"Tennis Class",place:"The country club",price:"60",status:"active",registration_count:"15/20",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"},{id:"2",name:"Yoga Class",place:"The country club",price:"50",status:"completed",registration_count:"5/5",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"},{id:"3",name:"Tennis Class",place:"The country club",price:"80",status:"active",registration_count:"6/10",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"},{id:"4",name:"Fitness Class",place:"The country club",price:"150",status:"completed",registration_count:"8/10",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"},{id:"5",name:"Yoga Class",place:"The country club",price:"100",status:"soon",registration_count:"7/15",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"}]),t=Object(n.a)(e,2),c=t[0],a=t[1],O=Object(s.useState)({potentialClassColumn:{name:"Potential Classes",items:c},upcomingClassColumn:{name:"Upcoming",items:[]},inProgressClassColumn:{name:"In Progress",items:[]},doneClassColumn:{name:"Program Completed",items:[]}}),p=Object(n.a)(O,2),h=p[0],x=p[1];Object(s.useEffect)((function(){x({potentialClassColumn:{name:"Potential Classes",items:h.potentialClassColumn.items},upcomingClassColumn:{name:"Upcoming",items:h.upcomingClassColumn.items},inProgressClassColumn:{name:"In Progress",items:h.inProgressClassColumn.items},doneClassColumn:{name:"Program Completed",items:h.doneClassColumn.items}})}),[c]);var f=Object(i.a)();return Object(b.jsxs)("div",{className:"admin-panel-container container-fluid",children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(d.a,{className:"".concat(f?"px-0":""," navbar"),children:[Object(b.jsx)(l.b,{activeClassName:"active",to:"/miles-admin-panel/admin/about",className:"nav-link",children:"About"}),Object(b.jsx)(l.b,{activeClassName:"active",to:"/miles-admin-panel/admin/classes",className:"nav-link",children:"Classes"})]})}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/miles-admin-panel/admin/about",children:Object(b.jsx)(s.Suspense,{fallback:Object(b.jsx)(j.default,{}),children:Object(b.jsx)(r.b,{isMobileScreen:f})})}),Object(b.jsx)(o.b,{path:"/miles-admin-panel/admin/classes",children:Object(b.jsx)(s.Suspense,{fallback:Object(b.jsx)(j.default,{}),children:Object(b.jsx)(m.Provider,{value:[c,a],children:Object(b.jsx)(u.Provider,{value:[h,x],children:Object(b.jsx)(r.c,{})})})})}),Object(b.jsx)(o.a,{exact:!0,from:"/miles-admin-panel",to:"admin/about"})]})]})}},87:function(e,t,c){"use strict";c.r(t);var n=c(105),s=c(104),a=c(149),i=c(27),l=c(0),o=c(196),r=c(202),d=c(197),j=c(198),b=c(20),m=c(21),u=(c(190),c(1)),O=function(e){var t=e.selectOptions;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.a,{className:"dropdown-menu-container",title:Object(u.jsx)(m.a,{icon:b.b,className:" mr-2"}),children:t.map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)(d.a.Item,{children:e.option})},t)}))})})},p=c(90),h=c(77),x=c(96),f=c(205),v=c(204),g=(c(28),c(103),c(191),function(e){e.handleClose,e.handleCloseButton;var t=e.setSucessMessage,c=e.setLoader,n=Object(l.useContext)(h.ItemsContext),s=Object(i.a)(n,2),o=s[0],r=s[1],d=Object(l.useContext)(h.ColumnContext),j=Object(i.a)(d,2),b=j[0],m=j[1];Object(l.useEffect)((function(){}),[o,b]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(f.a,{onSubmit:function(e){return function(e){var n;e.preventDefault(),n={id:(o.length+1).toString(),name:e.target.name.value,place:e.target.place.value,price:e.target.price.value,status:e.target.status.value},r([].concat(Object(a.a)(o),[n])),m({potentialClassColumn:{name:"Potential Classes",items:[].concat(Object(a.a)(b.potentialClassColumn.items),[n])},upcomingClassColumn:{name:"Upcoming",items:b.upcomingClassColumn.items},inProgressClassColumn:{name:"In Progress",items:b.inProgressClassColumn.items},doneClassColumn:{name:"Program Completed",items:b.doneClassColumn.items}}),c(!0),setTimeout((function(){c(!1),t(!0)}),500)}(e)},id:"addTaskForm",children:Object(u.jsxs)(f.a.Group,{controlId:"",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)("div",{className:"form-data",children:[Object(u.jsx)(f.a.Label,{children:"Add Class"}),Object(u.jsx)(f.a.Control,{type:"text",name:"name"})]})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("div",{className:"form-data",children:[Object(u.jsx)(f.a.Label,{children:"Place"}),Object(u.jsx)(f.a.Control,{type:"text",name:"place"})]})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("div",{className:"form-data",children:[Object(u.jsx)(f.a.Label,{children:"Price"}),Object(u.jsx)(f.a.Control,{type:"text",name:"price"})]})}),Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)("div",{className:"form-data",children:[Object(u.jsx)(f.a.Label,{children:"status"}),[{option:"active"},{option:"completed"},{option:"soon"}].map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)(x.a,{showOptions:!0,option:e.option,name:"status",type:"radio"})},t)}))]})})]}),Object(u.jsx)(v.a.Footer,{children:Object(u.jsx)("div",{className:"button",children:Object(u.jsx)(p.a,{share:"",text:"Submit",theme:"light-green",type:"submit"})})})]})})})}),C=(c(192),c(111));t.default=function(){var e,t=Object(l.useState)(!1),c=Object(i.a)(t,2),f=c[0],v=c[1],N=Object(l.useState)(""),y=Object(i.a)(N,2),k=y[0],w=y[1],P=Object(l.useState)(""),S=Object(i.a)(P,2),M=S[0],I=S[1],T=Object(l.useState)(""),D=Object(i.a)(T,2),A=D[0],F=D[1],B=function(){return v(!1)},E=Object(l.useContext)(h.ColumnContext),J=Object(i.a)(E,2),L=J[0],_=J[1],Y=Object(l.useState)(L),H=Object(i.a)(Y,2),R=H[0],U=H[1],G=Object(l.useState)(!1),W=Object(i.a)(G,2),z=W[0],X=W[1];Object(l.useEffect)((function(){U(L)}),[L]),Object(l.useEffect)((function(){z&&(_(R),X(!1))}),[R]);var $=Object(l.useState)(!1),q=Object(i.a)($,2),K=q[0],Q=q[1],V=Object(l.useState)(!1),Z=Object(i.a)(V,2),ee=Z[0],te=Z[1],ce=function(){B(),setTimeout((function(){Q(!1)}),500)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"container drag-and-drop-container",children:[Object(u.jsxs)("div",{className:"controls row",children:[Object(u.jsx)("div",{className:"add-container col-12 col-lg-4 col-md-4 mb-2",children:Object(u.jsx)("div",{className:"add-new-task",children:Object(u.jsx)(p.a,{theme:"green",text:"Add New Class",icon:Object(u.jsx)(m.a,{icon:b.f,className:" mr-2"}),onClickButton:function(){return v(!0)}})})}),Object(u.jsxs)("div",{className:"filter-container col-12 col-md-5 col-lg-5 d-flex",children:[Object(u.jsx)("p",{children:"filter: "})," ",Object(u.jsx)("div",{className:"dropDown-menu",children:Object(u.jsx)(r.a,{id:"dropdown-item-button",drop:"down",title:A||"Days",children:[{option:"Monday"},{option:"Tuesday"},{option:"Wednesday"},{option:"Thuresday"},{option:"Friday"},{option:"Saturday"},{option:"Sunday"}].map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)(d.a.Item,{as:"li",onClick:function(){F(e.option)},className:"dropDown-list",children:Object(u.jsxs)("span",{children:[" ",e.option]})})},t)}))})}),Object(u.jsx)("div",{className:"dropDown-menu",children:Object(u.jsx)(r.a,{id:"dropdown-item-button",drop:"down",title:k||"Activity",children:[{option:"Tennis"},{option:"Pilate"},{option:"Fitness"}].map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)(d.a.Item,{as:"li",onClick:function(){w(e.option)},className:"dropDown-list",children:Object(u.jsxs)("span",{children:[" ",e.option]})})},t)}))})})]}),Object(u.jsxs)("div",{className:"sort col-12 col-lg-3 col-md-3 d-flex",children:[Object(u.jsx)("p",{children:"sort: "}),Object(u.jsx)("div",{className:"dropDown-menu",children:Object(u.jsx)(r.a,{id:"dropdown-item-button",title:M||"Status",children:[{color:"#6abf48",option:"Active"},{color:"#ebef04",option:"Ending Soon"},{color:"#d80c05",option:"Completed"}].map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsxs)(d.a.Item,{as:"li",onClick:function(){I(e.option)},className:"dropDown-list",children:[Object(u.jsx)("span",{className:"circle d-inline-block",style:{backgroundColor:e.color}}),Object(u.jsxs)("span",{children:[" ",e.option]})]})},t)}))})})]})]}),Object(u.jsx)("div",{style:{display:"flex",width:"100%",overflowX:"auto",justifyContent:"space-between"},children:Object(u.jsx)(o.a,{onDragEnd:function(e){return function(e,t,c){if(e.destination){var l=e.source,o=e.destination;if(l.droppableId!==o.droppableId){var r,d=t[l.droppableId],j=t[o.droppableId],b=Object(a.a)(d.items),m=Object(a.a)(j.items),u=b.splice(l.index,1),O=Object(i.a)(u,1)[0];m.splice(o.index,0,O),c(Object(s.a)(Object(s.a)({},t),{},(r={},Object(n.a)(r,l.droppableId,Object(s.a)(Object(s.a)({},d),{},{items:b})),Object(n.a)(r,o.droppableId,Object(s.a)(Object(s.a)({},j),{},{items:m})),r)))}else{var p=t[l.droppableId],h=Object(a.a)(p.items),x=h.splice(l.index,1),f=Object(i.a)(x,1)[0];h.splice(o.index,0,f),c(Object(s.a)(Object(s.a)({},t),{},Object(n.a)({},l.droppableId,Object(s.a)(Object(s.a)({},p),{},{items:h}))))}}}(e,R,U)},onDragStart:function(){X(!0)},children:null===(e=Object.entries(R))||void 0===e?void 0:e.map((function(e,t){var c=Object(i.a)(e,2),n=c[0],a=c[1];return Object(u.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(u.jsx)("div",{style:{marginLeft:8,marginRight:8},children:Object(u.jsx)(o.c,{droppableId:n,children:function(e,t){var c;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"column-heading w-100",style:{overflow:"auto"},children:Object(u.jsx)("h3",{className:"m-0 ".concat(a.name),style:{padding:10},children:a.name})}),Object(u.jsxs)(j.a,Object(s.a)(Object(s.a)({},e.droppableProps),{},{ref:e.innerRef,style:{background:t.isDraggingOver?"#6abf4836":"white",width:250,padding:5,overflow:"hidden",minHeight:500},children:[null===a||void 0===a||null===(c=a.items)||void 0===c?void 0:c.map((function(e,t){return Object(u.jsx)(o.b,{draggableId:e.id,index:t,children:function(t,c){return Object(u.jsxs)(j.a,Object(s.a)(Object(s.a)(Object(s.a)({className:"class-card",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(s.a)({padding:10,margin:"0 0 2% 0",backgroundColor:(c.isDragging,"#ffffff")},t.draggableProps.style),children:[Object(u.jsxs)("div",{className:"mb-0 d-flex align-items-start justify-content-between",children:[Object(u.jsxs)("div",{className:"mb-0 d-flex align-items-center justify-content-between",children:[Object(u.jsx)("div",{className:"circle mr-2",style:{backgroundColor:"active"===e.status?"#6abf48":"completed"===e.status?"#d80c05":"#ebef04"}}),Object(u.jsx)("p",{className:"name mb-0",children:e.name})]}),Object(u.jsx)("div",{children:Object(u.jsx)(x.a,{showOptions:!1,option:e.id,name:"status",type:"checkbox",theme:"orange"})})]}),Object(u.jsx)("div",{className:"mb-2 d-flex align-items-start justify-content-between",children:Object(u.jsxs)("div",{className:"time-and-date",children:[Object(u.jsx)("p",{className:"mb-0",children:e.date}),Object(u.jsx)("p",{className:"mb-0",children:e.time})]})}),Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsx)("span",{className:"place",children:e.place})}),Object(u.jsxs)("div",{className:"user-container d-flex align-items-end justify-content-between",children:[Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)(m.a,{icon:b.k,className:" mr-2"}),Object(u.jsx)("p",{className:"price mr-2",children:e.registration_count}),Object(u.jsx)("p",{className:"price",children:"".concat(e.price,"$")})]}),Object(u.jsx)("div",{className:"setting",children:Object(u.jsx)(O,{selectOptions:[{option:"Make a copy"},{option:"Edit"},{option:"Active"}]})})]})]}))}},e.id)})),e.placeholder]}))]})}},n)})},n)}))})})]}),Object(u.jsx)(C.a,{handleClose:B,openModal:f,content:Object(u.jsx)(g,{handleCloseButton:ce,handleClose:B,setSucessMessage:Q,setLoader:te}),loader:ee,sucessMessage:K})]})}},90:function(e,t,c){"use strict";c(0);var n=c(120),s=c.p+"static/media/share-icon.dfe15492.svg",a=(c(98),c(1));t.a=function(e){var t=e.text,c=e.theme,i=e.share,l=e.onClickButton,o=e.type,r=e.icon;return Object(a.jsxs)(n.a,{variant:"primary ",className:"".concat(c,"-btn ml-auto btn ").concat(c," ").concat(i?"share-btn":""),onClick:l,type:o,children:[i&&Object(a.jsx)("span",{className:"mr-2",children:Object(a.jsx)("img",{src:s})}),Object(a.jsxs)("span",{className:"".concat(r?"mr-2":""),children:[" ",t]}),r&&Object(a.jsx)("span",{children:r})]})}},96:function(e,t,c){"use strict";var n=c(27),s=c(0),a=c(104),i=c(117),l=(c(114),c(1)),o=function(e){var t=e.checked,c=e.name,n=e.theme,s=Object(i.a)(e,["checked","name","theme"]);return Object(l.jsxs)("div",{className:"checkbox-container mr-2 ".concat(n||""),children:[Object(l.jsx)("input",Object(a.a)({className:"check-input",defaultChecked:t,name:c},s)),Object(l.jsx)("div",{className:"styled-checkbox ".concat(t?"checked":""),checked:t,children:Object(l.jsx)("svg",{className:"checkbox-icon",viewBox:"0 0 24 24",style:{visibility:t?"visible":"hidden"},children:Object(l.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})};c(115),t.a=function(e){var t=e.showOptions,c=e.option,a=e.type,i=e.name,r=e.toggleSelectOtherCheckBox,d=e.theme,j=Object(s.useState)(!1),b=Object(n.a)(j,2),m=b[0],u=b[1];return Object(l.jsx)("div",{className:"checkbox-label-container",children:Object(l.jsxs)("label",{children:[Object(l.jsx)(o,{theme:d,checked:m,onChange:function(e){u(e.target.checked),r&&r()},name:i,type:a}),t&&Object(l.jsx)("span",{children:c})]})})}},98:function(e,t,c){}}]);
//# sourceMappingURL=9.10776c5f.chunk.js.map