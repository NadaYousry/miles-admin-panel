(this["webpackJsonpmiles-admin-panel"]=this["webpackJsonpmiles-admin-panel"]||[]).push([[9,17],{103:function(e,t,c){"use strict";var n=c(27),s=c(0),a=(c(136),c(1));t.a=function(e){var t=e.option,c=e.showOptions,i=e.theme,l=e.name,o=e.onClick,r=e.type,d=Object(s.useState)(!1),j=Object(n.a)(d,2),b=j[0],m=j[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"".concat(c?"single-check-box-row":""),children:Object(a.jsxs)("div",{className:"checkbox-form-group",children:[Object(a.jsx)("input",{name:l,type:"".concat("radio"===r?"radio":"checkbox"),id:t,className:"form-check-box",value:t}),Object(a.jsx)("label",{htmlFor:t,className:"form-check-label ".concat("green"===i?"green":""," ").concat(b?"checked":""),onClick:function(){m(!b),o&&o()},children:c&&Object(a.jsxs)("span",{children:[" ",t," "]})})]})})})}},108:function(e,t,c){},119:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){"use strict";c(0),c(138);var n=c(1);t.a=function(e){var t=e.title,c=e.description;return Object(n.jsx)("div",{className:"message",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 text-center mb-2",children:Object(n.jsx)("i",{className:"far fa-check-circle message-icon"})}),Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h4",{children:t}),Object(n.jsx)("p",{children:c&&c})]})]})})}},138:function(e,t,c){},140:function(e,t,c){"use strict";var n=c(27),s=c(0),a=c(153),i=c(311),l=c(20),o=c(21),r=(c(141),c(103)),d=c(1);t.a=function(e){var t=e.filters,c=Object(s.useState)(!1),j=Object(n.a)(c,2),b=j[0],m=j[1];return Object(d.jsx)(a.a,{className:"select-menu mb-2",children:Object(d.jsxs)(i.a,{children:[Object(d.jsxs)(a.a.Toggle,{as:i.a.Header,eventKey:"0",className:"d-flex align-items-center",onClick:function(e){m(!b)},children:[Object(d.jsx)("h3",{className:"my-0",children:"All classes"}),Object(d.jsx)("span",{className:"arrow-icon-container",children:Object(d.jsx)(o.a,{icon:l.a,className:"".concat(b?"rotate":""," arrow-icon")})})]}),Object(d.jsx)(a.a.Collapse,{eventKey:"0",children:Object(d.jsx)("form",{children:t.map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)(r.a,{option:e.option,showOptions:!0,theme:""})},t)}))})})]})})}},141:function(e,t,c){},220:function(e,t,c){},222:function(e,t,c){},223:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t),c.d(t,"ItemsContext",(function(){return m})),c.d(t,"ColumnContext",(function(){return u}));var n=c(27),s=c(0),a=c.n(s),i=c(44),l=c(14),o=c(5),r=c(25),d=c(89),j=c(28),b=(c(119),c(1)),m=a.a.createContext(),u=a.a.createContext();t.default=function(){var e=Object(s.useState)([{id:"1",name:"Tennis Class",place:"The country club",price:"60",status:"active",registration_count:"15/20",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"},{id:"2",name:"Yoga Class",place:"The country club",price:"50",status:"completed",registration_count:"5/5",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"},{id:"3",name:"Tennis Class",place:"The country club",price:"80",status:"active",registration_count:"6/10",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"},{id:"4",name:"Fitness Class",place:"The country club",price:"150",status:"completed",registration_count:"8/10",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"},{id:"5",name:"Yoga Class",place:"The country club",price:"100",status:"soon",registration_count:"7/15",date:"June 10th -Aug 30th",time:"Monday 7:00PM -8:00PM"}]),t=Object(n.a)(e,2),c=t[0],a=t[1],O=Object(s.useState)({potentialClassColumn:{name:"Potential Classes",items:c},upcomingClassColumn:{name:"Upcoming",items:[]},inProgressClassColumn:{name:"In Progress",items:[]},doneClassColumn:{name:"Program Completed",items:[]}}),p=Object(n.a)(O,2),h=p[0],x=p[1];Object(s.useEffect)((function(){x({potentialClassColumn:{name:"Potential Classes",items:h.potentialClassColumn.items},upcomingClassColumn:{name:"Upcoming",items:h.upcomingClassColumn.items},inProgressClassColumn:{name:"In Progress",items:h.inProgressClassColumn.items},doneClassColumn:{name:"Program Completed",items:h.doneClassColumn.items}})}),[c]);var f=Object(i.a)();return Object(b.jsxs)("div",{className:"admin-panel-container container-fluid",children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(d.a,{className:"".concat(f?"px-0":""," navbar"),children:[Object(b.jsx)(l.b,{activeClassName:"active",to:"/miles-admin-panel/admin/about",className:"nav-link",children:"About"}),Object(b.jsx)(l.b,{activeClassName:"active",to:"/miles-admin-panel/admin/classes",className:"nav-link",children:"Classes"})]})}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/miles-admin-panel/admin/about",children:Object(b.jsx)(s.Suspense,{fallback:Object(b.jsx)(j.default,{}),children:Object(b.jsx)(r.b,{isMobileScreen:f})})}),Object(b.jsx)(o.b,{path:"/miles-admin-panel/admin/classes",children:Object(b.jsx)(s.Suspense,{fallback:Object(b.jsx)(j.default,{}),children:Object(b.jsx)(m.Provider,{value:[c,a],children:Object(b.jsx)(u.Provider,{value:[h,x],children:Object(b.jsx)(r.c,{})})})})}),Object(b.jsx)(o.a,{exact:!0,from:"/miles-admin-panel/",to:"admin/about "})]})]})}},86:function(e,t,c){"use strict";c.r(t);var n,s,a,i,l=c(173),o=c(174),r=c(154),d=c(27),j=c(0),b=c(308),m=c(317),u=c(310),O=c(311),p=c(20),h=c(21),x=(c(220),c(1)),f=function(e){var t=e.selectOptions;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(m.a,{className:"dropdown-menu-container",title:Object(x.jsx)(h.a,{icon:p.b,className:" mr-2"}),children:t.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)(u.a.Item,{children:e.option})},t)}))})})},v=c(93),g=c(230),C=c.n(g),N=(c(221),c(222),c(320)),y=c(319),w=c(103),k=c(28),P=c(137),S=(c(140),c(77)),I=(c(223),function(e){var t=e.handleClose,c=e.openModal,n=Object(j.useState)(!1),s=Object(d.a)(n,2),a=s[0],i=s[1],l=Object(j.useState)(!1),o=Object(d.a)(l,2),b=o[0],m=o[1],u=Object(j.useContext)(S.ItemsContext),O=Object(d.a)(u,2),p=O[0],h=O[1],f=Object(j.useContext)(S.ColumnContext),g=Object(d.a)(f,2),C=g[0],I=g[1],M=[{option:"active"},{option:"completed"},{option:"soon"}];Object(j.useEffect)((function(){}),[p,C]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(y.a,{show:c,onHide:function(){t(),setTimeout((function(){i(!1)}),500)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"contact-form ",children:[Object(x.jsx)(y.a.Header,{closeButton:!0,children:Object(x.jsx)("h3",{children:"Add Class"})}),Object(x.jsxs)(y.a.Body,{children:[!b&&!a&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.a,{onSubmit:function(e){return function(e){var t;e.preventDefault(),t={id:(p.length+1).toString(),name:e.target.name.value,place:e.target.place.value,price:e.target.price.value,status:e.target.status.value},h([].concat(Object(r.a)(p),[t])),I({potentialClassColumn:{name:"Potential Classes",items:[].concat(Object(r.a)(C.potentialClassColumn.items),[t])},upcomingClassColumn:{name:"Upcoming",items:C.upcomingClassColumn.items},inProgressClassColumn:{name:"In Progress",items:C.inProgressClassColumn.items},doneClassColumn:{name:"Program Completed",items:C.doneClassColumn.items}}),m(!0),setTimeout((function(){m(!1),i(!0)}),500)}(e)},id:"addTaskForm",children:Object(x.jsxs)(N.a.Group,{controlId:"",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)("div",{className:"form-data",children:[Object(x.jsx)(N.a.Label,{children:"Add Class"}),Object(x.jsx)(N.a.Control,{type:"text",name:"name"})]})}),Object(x.jsx)("div",{className:"col-6",children:Object(x.jsxs)("div",{className:"form-data",children:[Object(x.jsx)(N.a.Label,{children:"Place"}),Object(x.jsx)(N.a.Control,{type:"text",name:"place"})]})}),Object(x.jsx)("div",{className:"col-6",children:Object(x.jsxs)("div",{className:"form-data",children:[Object(x.jsx)(N.a.Label,{children:"Price"}),Object(x.jsx)(N.a.Control,{type:"text",name:"price"})]})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsxs)("div",{className:"form-data",children:[Object(x.jsx)(N.a.Label,{children:"status"}),M.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)(w.a,{showOptions:!0,option:e.option,name:"status",type:"radio"})},t)}))]})})]}),Object(x.jsx)(y.a.Footer,{children:Object(x.jsx)("div",{className:"button",children:Object(x.jsx)(v.a,{share:"",text:"Submit",theme:"light-green",type:"submit"})})})]})})}),b&&Object(x.jsx)("div",{className:"loading-modal-container",children:Object(x.jsx)(k.default,{})}),a&&Object(x.jsx)(P.a,{title:"Class Added Successfuly"})]})]})})}),M=c(224),A=(c(15),c(312)),D=c(225),T=c(226),F=T.a.div(n||(n=Object(D.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),J=T.a.svg(s||(s=Object(D.a)(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n"]))),E=T.a.input.attrs({type:"checkbox"})(a||(a=Object(D.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),_=T.a.div(i||(i=Object(D.a)(["\n  display: flex;\n  width: 16px;\n  height: 16px;\n  background: ",";\n  border-radius: 50%;\n  transition: all 150ms;\ncursor:pointer;\n\n  ",":hover + & {\n    box-shadow: 0 0 0 2px #6abf4836;\n  }\n  "," {\n    visibility: ","\n  }\n"])),(function(e){return e.checked?"#6abf48":"#ebebeb"}),E,J,(function(e){return e.checked?"visible":"hidden"})),B=function(e){var t=e.className,c=e.checked,n=Object(A.a)(e,["className","checked"]);return Object(x.jsxs)(F,{className:t,children:[Object(x.jsx)(E,Object(o.a)({checked:c},n)),Object(x.jsx)(_,{checked:c,children:Object(x.jsx)(J,{viewBox:"0 0 24 24",children:Object(x.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})},H=function(e){Object(M.a)(e);var t=Object(j.useState)(),c=Object(d.a)(t,2),n=c[0],s=c[1];return Object(x.jsx)("div",{style:{fontFamily:"system-ui"},children:Object(x.jsxs)("label",{children:[Object(x.jsx)(B,{checked:n,onChange:function(e){s(e.target.checked)}}),Object(x.jsx)("span",{})]})})};t.default=function(){var e,t=Object(j.useState)(!1),c=Object(d.a)(t,2),n=c[0],s=c[1],a=Object(j.useState)(""),i=Object(d.a)(a,2),g=i[0],N=i[1],y=Object(j.useState)(""),w=Object(d.a)(y,2),k=w[0],P=w[1],M=Object(j.useState)(new Date),A=Object(d.a)(M,2),D=A[0],T=A[1],F=Object(j.useContext)(S.ColumnContext),J=Object(d.a)(F,2),E=J[0],_=J[1],B=Object(j.useState)(E),L=Object(d.a)(B,2),R=L[0],U=L[1],K=Object(j.useState)(!1),Y=Object(d.a)(K,2),z=Y[0],G=Y[1];return Object(j.useEffect)((function(){U(E)}),[E]),Object(j.useEffect)((function(){z&&(_(R),G(!1))}),[R]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("section",{className:"container drag-and-drop-container",children:[Object(x.jsxs)("div",{className:"controls row",children:[Object(x.jsx)("div",{className:"add-container col-12 col-lg-4 col-md-4 mb-2",children:Object(x.jsx)("div",{className:"add-new-task",children:Object(x.jsx)(v.a,{theme:"green",text:"Add New Class",icon:Object(x.jsx)(h.a,{icon:p.f,className:" mr-2"}),onClickButton:function(){return s(!0)}})})}),Object(x.jsxs)("div",{className:"filter-container col-12 col-md-5 col-lg-5 d-flex",children:[Object(x.jsx)("p",{children:"filter: "}),Object(x.jsx)("div",{className:"dropDown-menu",children:Object(x.jsx)(C.a,{className:"dropdown-toggle btn btn-primary date-picker",selected:D,onChange:function(e){return T(e)},isClearable:!0,placeholderText:"Select Day"})}),Object(x.jsx)("div",{className:"dropDown-menu",children:Object(x.jsx)(m.a,{id:"dropdown-item-button",drop:"down",title:g||"Activity",children:[{option:"Tennis"},{option:"Pilate"},{option:"Fitness"}].map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)(u.a.Item,{as:"li",onClick:function(){N(e.option)},className:"dropDown-list",children:Object(x.jsxs)("span",{children:[" ",e.option]})})},t)}))})})]}),Object(x.jsxs)("div",{className:"sort col-12 col-lg-3 col-md-3 d-flex",children:[Object(x.jsx)("p",{children:"sort: "}),Object(x.jsx)("div",{className:"dropDown-menu",children:Object(x.jsx)(m.a,{id:"dropdown-item-button",title:k||"Status",children:[{color:"#6abf48",option:"Active"},{color:"#ebef04",option:"Soon"},{color:"#d80c05",option:"Completed"}].map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsxs)(u.a.Item,{as:"li",onClick:function(){P(e.option)},className:"dropDown-list",children:[Object(x.jsx)("span",{className:"circle d-inline-block",style:{backgroundColor:e.color}}),Object(x.jsxs)("span",{children:[" ",e.option]})]})},t)}))})})]})]}),Object(x.jsx)("div",{style:{display:"flex",width:"100%",overflowX:"auto",justifyContent:"space-between"},children:Object(x.jsx)(b.a,{onDragEnd:function(e){return function(e,t,c){if(e.destination){var n=e.source,s=e.destination;if(n.droppableId!==s.droppableId){var a,i=t[n.droppableId],j=t[s.droppableId],b=Object(r.a)(i.items),m=Object(r.a)(j.items),u=b.splice(n.index,1),O=Object(d.a)(u,1)[0];m.splice(s.index,0,O),c(Object(o.a)(Object(o.a)({},t),{},(a={},Object(l.a)(a,n.droppableId,Object(o.a)(Object(o.a)({},i),{},{items:b})),Object(l.a)(a,s.droppableId,Object(o.a)(Object(o.a)({},j),{},{items:m})),a)))}else{var p=t[n.droppableId],h=Object(r.a)(p.items),x=h.splice(n.index,1),f=Object(d.a)(x,1)[0];h.splice(s.index,0,f),c(Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},n.droppableId,Object(o.a)(Object(o.a)({},p),{},{items:h}))))}}}(e,R,U)},onDragStart:function(){G(!0)},children:null===(e=Object.entries(R))||void 0===e?void 0:e.map((function(e,t){var c=Object(d.a)(e,2),n=c[0],s=c[1];return Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(x.jsx)("div",{style:{marginLeft:8,marginRight:8},children:Object(x.jsx)(b.c,{droppableId:n,children:function(e,t){var c;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"column-heading w-100",style:{overflow:"auto"},children:Object(x.jsx)("h3",{className:"m-0 ".concat(s.name),style:{padding:10},children:s.name})}),Object(x.jsxs)(O.a,Object(o.a)(Object(o.a)({},e.droppableProps),{},{ref:e.innerRef,style:{background:t.isDraggingOver?"#6abf4836":"white",width:250,padding:5,overflow:"hidden",minHeight:500},children:[null===s||void 0===s||null===(c=s.items)||void 0===c?void 0:c.map((function(e,t){return Object(x.jsx)(b.b,{draggableId:e.id,index:t,children:function(t,c){return Object(x.jsxs)(O.a,Object(o.a)(Object(o.a)(Object(o.a)({className:"class-card",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(o.a)({padding:10,margin:"0 0 2% 0",backgroundColor:(c.isDragging,"#ffffff")},t.draggableProps.style),children:[Object(x.jsxs)("div",{className:"mb-0 d-flex align-items-start justify-content-between",children:[Object(x.jsx)("p",{className:"name mb-0",children:e.name}),Object(x.jsx)("div",{className:"circle",style:{backgroundColor:"active"===e.status?"#6abf48":"completed"===e.status?"#d80c05":"#ebef04"}})]}),Object(x.jsxs)("div",{className:"mb-2 d-flex align-items-start justify-content-between",children:[Object(x.jsxs)("div",{className:"time-and-date",children:[Object(x.jsx)("p",{className:"mb-0",children:e.date}),Object(x.jsx)("p",{className:"mb-0",children:e.time})]}),Object(x.jsx)(H,{showOptions:!1,option:e.id,name:"status",type:"checkbox"})]}),Object(x.jsx)("div",{className:"mb-2",children:Object(x.jsx)("span",{className:"place",children:e.place})}),Object(x.jsxs)("div",{className:"user-container d-flex align-items-end justify-content-between",children:[Object(x.jsxs)("div",{className:"user",children:[Object(x.jsx)(h.a,{icon:p.k,className:" mr-2"}),Object(x.jsx)("p",{className:"price mr-2",children:e.registration_count}),Object(x.jsx)("p",{className:"price",children:"".concat(e.price,"$")})]}),Object(x.jsx)("div",{className:"setting",children:Object(x.jsx)(f,{selectOptions:[{option:"Make a copy"},{option:"Edit"},{option:"Active"}]})})]})]}))}},e.id)})),e.placeholder]}))]})}},n)})},n)}))})})]}),Object(x.jsx)(I,{handleClose:function(){return s(!1)},openModal:n})]})}},93:function(e,t,c){"use strict";c(0);var n=c(114),s=c.p+"static/media/share-icon.dfe15492.svg",a=(c(108),c(1));t.a=function(e){var t=e.text,c=e.theme,i=e.share,l=e.onClickButton,o=e.type,r=e.icon;return Object(a.jsxs)(n.a,{variant:"primary ",className:"".concat(c,"-btn ml-auto btn ").concat(c," ").concat(i?"share-btn":""),onClick:l,type:o,children:[i&&Object(a.jsx)("span",{className:"mr-2",children:Object(a.jsx)("img",{src:s})}),Object(a.jsxs)("span",{className:"".concat(r?"mr-2":""),children:[" ",t]}),r&&Object(a.jsx)("span",{children:r})]})}}}]);
//# sourceMappingURL=9.a420ff02.chunk.js.map