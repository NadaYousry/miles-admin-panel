(this["webpackJsonpmiles-admin-panel"]=this["webpackJsonpmiles-admin-panel"]||[]).push([[8,17],{100:function(e,t,c){"use strict";var a=c(27),s=c(0),n=(c(130),c(1));t.a=function(e){var t=e.option,c=e.showOptions,i=e.theme,l=e.name,o=e.onClick,r=e.type,j=Object(s.useState)(!1),d=Object(a.a)(j,2),m=d[0],b=d[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"".concat(c?"single-check-box-row":""),children:Object(n.jsxs)("div",{className:"checkbox-form-group",children:[Object(n.jsx)("input",{name:l,type:"".concat("radio"===r?"radio":"checkbox"),id:t,className:"form-check-box",value:t}),Object(n.jsx)("label",{htmlFor:t,className:"form-check-label ".concat("green"===i?"green":""," ").concat(m?"checked":""),onClick:function(){b(!m),o&&o()},children:c&&Object(n.jsxs)("span",{children:[" ",t," "]})})]})})})}},105:function(e,t,c){},113:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){"use strict";c(0),c(132);var a=c(1);t.a=function(e){var t=e.title,c=e.description;return Object(a.jsx)("div",{className:"message",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-12 text-center mb-2",children:Object(a.jsx)("i",{className:"far fa-check-circle message-icon"})}),Object(a.jsxs)("div",{className:"col-12",children:[Object(a.jsx)("h4",{children:t}),Object(a.jsx)("p",{children:c&&c})]})]})})}},132:function(e,t,c){},134:function(e,t,c){"use strict";var a=c(27),s=c(0),n=c(137),i=c(196),l=c(20),o=c(21),r=(c(135),c(100)),j=c(1);t.a=function(e){var t=e.filters,c=Object(s.useState)(!1),d=Object(a.a)(c,2),m=d[0],b=d[1];return Object(j.jsx)(n.a,{className:"select-menu mb-2",children:Object(j.jsxs)(i.a,{children:[Object(j.jsxs)(n.a.Toggle,{as:i.a.Header,eventKey:"0",className:"d-flex align-items-center",onClick:function(e){b(!m)},children:[Object(j.jsx)("h3",{className:"my-0",children:"All classes"}),Object(j.jsx)("span",{className:"arrow-icon-container",children:Object(j.jsx)(o.a,{icon:l.a,className:"".concat(m?"rotate":""," arrow-icon")})})]}),Object(j.jsx)(n.a.Collapse,{eventKey:"0",children:Object(j.jsx)("form",{children:t.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)(r.a,{option:e.option,showOptions:!0,theme:""})},t)}))})})]})})}},135:function(e,t,c){},188:function(e,t,c){},189:function(e,t,c){},190:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t),c.d(t,"ItemsContext",(function(){return b})),c.d(t,"ColumnContext",(function(){return u}));var a=c(27),s=c(0),n=c.n(s),i=c(43),l=c(14),o=c(5),r=c(24),j=c(89),d=c(28),m=(c(113),c(1)),b=n.a.createContext(),u=n.a.createContext();t.default=function(){var e=Object(s.useState)([{id:"1",name:"Tennis Class",place:"The country club",price:"60",status:"active"},{id:"2",name:"Yoga Class",place:"The country club",price:"50",status:"completed"},{id:"3",name:"Tennis Class",place:"The country club",price:"80",status:"active"},{id:"4",name:"Fitness Class",place:"The country club",price:"150",status:"completed"},{id:"5",name:"Yoga Class",place:"The country club",price:"100",status:"soon"}]),t=Object(a.a)(e,2),c=t[0],n=t[1],O=Object(s.useState)({potentialClassColumn:{name:"Potential Classes",items:c},upcomingClassColumn:{name:"Upcoming",items:[]},inProgressClassColumn:{name:"In Progress",items:[]},doneClassColumn:{name:"Program Completed",items:[]}}),p=Object(a.a)(O,2),x=p[0],h=p[1];Object(s.useEffect)((function(){h({potentialClassColumn:{name:"Potential Classes",items:x.potentialClassColumn.items},upcomingClassColumn:{name:"Upcoming",items:x.upcomingClassColumn.items},inProgressClassColumn:{name:"In Progress",items:x.inProgressClassColumn.items},doneClassColumn:{name:"Program Completed",items:x.doneClassColumn.items}})}),[c]);var f=Object(i.a)();return Object(m.jsxs)("div",{className:"admin-panel-container container-fluid",children:[Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(j.a,{className:"".concat(f?"px-0":""," navbar"),children:[Object(m.jsx)(l.b,{activeClassName:"active",to:"/miles-admin-panel/admin/about",className:"nav-link",children:"About"}),Object(m.jsx)(l.b,{activeClassName:"active",to:"/miles-admin-panel/admin/classes",className:"nav-link",children:"Classes"})]})}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{path:"/miles-admin-panel/admin/about",children:Object(m.jsx)(s.Suspense,{fallback:Object(m.jsx)(d.default,{}),children:Object(m.jsx)(r.b,{isMobileScreen:f})})}),Object(m.jsx)(o.b,{path:"/miles-admin-panel/admin/classes",children:Object(m.jsx)(s.Suspense,{fallback:Object(m.jsx)(d.default,{}),children:Object(m.jsx)(b.Provider,{value:[c,n],children:Object(m.jsx)(u.Provider,{value:[x,h],children:Object(m.jsx)(r.c,{})})})})}),Object(m.jsx)(o.a,{exact:!0,from:"/miles-admin-panel",to:"admin/about"})]})]})}},87:function(e,t,c){"use strict";c.r(t);var a=c(157),s=c(187),n=c(138),i=c(27),l=c(0),o=c(194),r=c(200),j=c(195),d=c(196),m=c(20),b=c(21),u=(c(188),c(1)),O=function(e){var t=e.selectOptions;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.a,{className:"dropdown-menu-container",title:Object(u.jsx)(b.a,{icon:m.b,className:" mr-2"}),children:t.map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)(j.a.Item,{children:e.option})},t)}))})})},p=c(90),x=(c(189),c(203)),h=c(202),f=c(100),v=c(28),C=c(131),g=(c(134),c(77)),N=(c(190),function(e){var t=e.handleClose,c=e.openModal,a=Object(l.useState)(!1),s=Object(i.a)(a,2),o=s[0],r=s[1],j=Object(l.useState)(!1),d=Object(i.a)(j,2),m=d[0],b=d[1],O=Object(l.useContext)(g.ItemsContext),N=Object(i.a)(O,2),y=N[0],k=N[1],w=Object(l.useContext)(g.ColumnContext),P=Object(i.a)(w,2),S=P[0],I=P[1],T=[{option:"active"},{option:"completed"},{option:"soon"}];Object(l.useEffect)((function(){}),[y,S]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(h.a,{show:c,onHide:function(){t(),setTimeout((function(){r(!1)}),500)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"contact-form ",children:[Object(u.jsx)(h.a.Header,{closeButton:!0,children:Object(u.jsx)("h3",{children:"Add Class"})}),Object(u.jsxs)(h.a.Body,{children:[!m&&!o&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{onSubmit:function(e){return function(e){var t;e.preventDefault(),t={id:(y.length+1).toString(),name:e.target.name.value,place:e.target.place.value,price:e.target.price.value,status:e.target.status.value},k([].concat(Object(n.a)(y),[t])),I({potentialClassColumn:{name:"Potential Classes",items:[].concat(Object(n.a)(S.potentialClassColumn.items),[t])},upcomingClassColumn:{name:"Upcoming",items:S.upcomingClassColumn.items},inProgressClassColumn:{name:"In Progress",items:S.inProgressClassColumn.items},doneClassColumn:{name:"Program Completed",items:S.doneClassColumn.items}}),b(!0),setTimeout((function(){b(!1),r(!0)}),500)}(e)},id:"addTaskForm",children:Object(u.jsxs)(x.a.Group,{controlId:"",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)("div",{className:"form-data",children:[Object(u.jsx)(x.a.Label,{children:"Add Class"}),Object(u.jsx)(x.a.Control,{type:"text",name:"name"})]})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("div",{className:"form-data",children:[Object(u.jsx)(x.a.Label,{children:"Place"}),Object(u.jsx)(x.a.Control,{type:"text",name:"place"})]})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("div",{className:"form-data",children:[Object(u.jsx)(x.a.Label,{children:"Price"}),Object(u.jsx)(x.a.Control,{type:"text",name:"price"})]})}),Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)("div",{className:"form-data",children:[Object(u.jsx)(x.a.Label,{children:"status"}),T.map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{showOptions:!0,option:e.option,name:"status",type:"radio"})},t)}))]})})]}),Object(u.jsx)(h.a.Footer,{children:Object(u.jsx)("div",{className:"button",children:Object(u.jsx)(p.a,{share:"",text:"Submit",theme:"light-green",type:"submit"})})})]})})}),m&&Object(u.jsx)("div",{className:"loading-modal-container",children:Object(u.jsx)(v.default,{})}),o&&Object(u.jsx)(C.a,{title:"Class Added Successfuly"})]})]})})});t.default=function(){var e,t=Object(l.useState)(!1),c=Object(i.a)(t,2),x=c[0],h=c[1],f=Object(l.useState)(!1),v=Object(i.a)(f,2),C=v[0],y=v[1],k=Object(l.useContext)(g.ColumnContext),w=Object(i.a)(k,2),P=w[0],S=w[1],I=Object(l.useState)(P),T=Object(i.a)(I,2),F=T[0],A=T[1],D=Object(l.useState)(!1),E=Object(i.a)(D,2),H=E[0],L=E[1];return Object(l.useEffect)((function(){A(P)}),[P]),Object(l.useEffect)((function(){H&&(S(F),L(!1))}),[F]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"container drag-and-drop-container",children:[Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)("div",{className:"add-new-task",children:Object(u.jsx)(p.a,{theme:"green",text:"Add New Class",icon:Object(u.jsx)(b.a,{icon:m.f,className:" mr-2"}),onClickButton:function(){return h(!0)}})}),Object(u.jsx)("div",{className:"sort",children:Object(u.jsx)(r.a,{id:"dropdown-item-button",title:C||"Sort",children:[{option:"Active"},{option:"Soon"},{option:"Completed"}].map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)(j.a.Item,{as:"li",onClick:function(){y(e.option)},children:e.option})},t)}))})})]}),Object(u.jsx)("div",{style:{display:"flex",width:"100%",overflowX:"auto",justifyContent:"space-between"},children:Object(u.jsx)(o.a,{onDragEnd:function(e){return function(e,t,c){if(e.destination){var l=e.source,o=e.destination;if(l.droppableId!==o.droppableId){var r,j=t[l.droppableId],d=t[o.droppableId],m=Object(n.a)(j.items),b=Object(n.a)(d.items),u=m.splice(l.index,1),O=Object(i.a)(u,1)[0];b.splice(o.index,0,O),c(Object(s.a)(Object(s.a)({},t),{},(r={},Object(a.a)(r,l.droppableId,Object(s.a)(Object(s.a)({},j),{},{items:m})),Object(a.a)(r,o.droppableId,Object(s.a)(Object(s.a)({},d),{},{items:b})),r)))}else{var p=t[l.droppableId],x=Object(n.a)(p.items),h=x.splice(l.index,1),f=Object(i.a)(h,1)[0];x.splice(o.index,0,f),c(Object(s.a)(Object(s.a)({},t),{},Object(a.a)({},l.droppableId,Object(s.a)(Object(s.a)({},p),{},{items:x}))))}}}(e,F,A)},onDragStart:function(){L(!0)},children:null===(e=Object.entries(F))||void 0===e?void 0:e.map((function(e,t){var c=Object(i.a)(e,2),a=c[0],n=c[1];return Object(u.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(u.jsx)("div",{style:{marginLeft:8,marginRight:8},children:Object(u.jsx)(o.c,{droppableId:a,children:function(e,t){var c;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"column-heading w-100",style:{overflow:"auto"},children:Object(u.jsx)("h3",{className:"m-0 ".concat(n.name),style:{padding:10},children:n.name})}),Object(u.jsxs)(d.a,Object(s.a)(Object(s.a)({},e.droppableProps),{},{ref:e.innerRef,style:{background:t.isDraggingOver?"#6abf4836":"white",width:250,padding:5,overflow:"hidden",minHeight:500},children:[null===n||void 0===n||null===(c=n.items)||void 0===c?void 0:c.map((function(e,t){return Object(u.jsx)(o.b,{draggableId:e.id,index:t,children:function(t,c){return Object(u.jsxs)(d.a,Object(s.a)(Object(s.a)(Object(s.a)({className:"class-card",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(s.a)({padding:10,margin:"0 0 2% 0",backgroundColor:(c.isDragging,"#ffffff")},t.draggableProps.style),children:[Object(u.jsxs)("div",{className:"mb-2 d-flex align-items-start justify-content-between",children:[Object(u.jsx)("p",{className:"name mb-0",children:e.name}),Object(u.jsx)("div",{className:"circle",style:{backgroundColor:"active"===e.status?"#6abf48":"completed"===e.status?"#d80c05":"#ebef04"}})]}),Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsx)("span",{className:"place",children:e.place})}),Object(u.jsxs)("div",{className:"user-container d-flex align-items-end justify-content-between",children:[Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)(b.a,{icon:m.k,className:" mr-2"}),Object(u.jsx)("p",{className:"price",children:"".concat(e.price,"$")})]}),Object(u.jsx)("div",{className:"setting",children:Object(u.jsx)(O,{selectOptions:[{option:"Make a copy"},{option:"Edit"},{option:"Active"}]})})]})]}))}},e.id)})),e.placeholder]}))]})}},a)})},a)}))})})]}),Object(u.jsx)(N,{handleClose:function(){return h(!1)},openModal:x})]})}},90:function(e,t,c){"use strict";c(0);var a=c(111),s=c.p+"static/media/share-icon.dfe15492.svg",n=(c(105),c(1));t.a=function(e){var t=e.text,c=e.theme,i=e.share,l=e.onClickButton,o=e.type,r=e.icon;return Object(n.jsxs)(a.a,{variant:"primary ",className:"".concat(c,"-btn ml-auto btn ").concat(c," ").concat(i?"share-btn":""),onClick:l,type:o,children:[i&&Object(n.jsx)("span",{className:"mr-2",children:Object(n.jsx)("img",{src:s})}),Object(n.jsxs)("span",{className:"".concat(r?"mr-2":""),children:[" ",t]}),r&&Object(n.jsx)("span",{children:r})]})}}}]);
//# sourceMappingURL=8.9b76e2a5.chunk.js.map