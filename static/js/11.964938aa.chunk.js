(this["webpackJsonpmiles-admin-panel"]=this["webpackJsonpmiles-admin-panel"]||[]).push([[11],{102:function(e,t,a){"use strict";var n=a(27),s=a(0),r=(a(109),a(1));t.a=function(e){var t=e.icon,a=e.name,c=e.theme,i=e.selecting,l=Object(s.useState)(!1),o=Object(n.a)(l,2),d=o[0],m=o[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"".concat(d?"selected":""," ").concat(i?"radial":"","  d-flex align-items-center justify-content-center"),onClick:function(e){i&&m(!d)},children:Object(r.jsx)("div",{className:"icon-wrapper d-flex align-items-center justify-content-center  ".concat(c," "),children:Object(r.jsx)("img",{src:t,alt:"{".concat(a," w-100")})})}),a&&Object(r.jsx)("p",{className:"icon-description",children:a})]})}},106:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(0),s=a.n(n);function r(e,t){var a=0;return s.a.Children.map(e,(function(e){return s.a.isValidElement(e)?t(e,a++):e}))}function c(e,t){var a=0;s.a.Children.forEach(e,(function(e){s.a.isValidElement(e)&&t(e,a++)}))}},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},130:function(e,t,a){"use strict";a(0);var n=a(102),s=a(95),r=(a(131),a(1));t.a=function(e){var t=e.isMobileScreen,a=e.review,c=e.length;return Object(r.jsxs)("div",{className:"row no-gutters align-items-start reviews py-3 section-separator ".concat(c>1?"section-separator-top":""),children:[Object(r.jsx)("div",{className:" col-2 col-lg-1 col-md-1 d-flex align-items-start justify-content-center flex-column",children:Object(r.jsx)(n.a,{selecting:!1,icon:a.reviewIcon,name:"",theme:"green"})}),Object(r.jsxs)("div",{className:"col-10 col-md-8 col-lg-8",children:[Object(r.jsx)("p",{className:" text-left mb-0",children:'"'.concat(a.message,'"')}),Object(r.jsx)("span",{className:"".concat(t?"mb-3":"","  w-100 reviewer-secondary-text  text-left d-inline-block mt-2"),children:a.reviewerName})]}),t&&Object(r.jsx)("div",{className:"col-2"}),Object(r.jsxs)("div",{className:"col-10 col-md-2 col-lg-2 d-flex  flex-column justify-content-end ".concat(t?" align-items-start":" align-items-end"),children:[Object(r.jsx)("span",{className:" d-flex  flex-row justify-content-end",children:Object(r.jsx)(s.a,{ratingNumber:"",peopleNumber:"",theme:"green"})}),Object(r.jsx)("span",{className:"".concat(t?" text-left":"text-right","w-100 reviewer-secondary-text date d-inline-block mt-2"),children:a.date})]})]})}},131:function(e,t,a){},132:function(e,t,a){"use strict";t.a=a.p+"static/media/review.56631672.svg"},133:function(e,t,a){"use strict";a(0);var n=a(166),s=a(95),r=(a(134),a(1));t.a=function(){var e=[{startRate:"5",value:80},{startRate:"4",value:40},{startRate:"3",value:5},{startRate:"2",value:2},{startRate:"1",value:20}];return Object(r.jsx)("div",{className:"five-stars-with-progress-container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-lg-4 col-md-6 col-8  ml-auto",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(r.jsxs)("div",{className:"progress-container",children:[Object(r.jsxs)("div",{className:"mx-3",children:[" ",Object(r.jsx)("span",{children:e.startRate})]}),Object(r.jsx)(n.a,{variant:"success",now:e.value},t)]},t)}))}),Object(r.jsxs)("div",{className:"col-lg-2 col-md-6 col-4 ",children:[Object(r.jsx)("span",{className:"d-inline-block five-star-with-progress-rating w-100",children:"4.5"}),Object(r.jsx)("div",{className:"w-100",children:Object(r.jsx)("div",{className:"star-icon-wrapper d-flex align-items-center justify-content-center",children:Object(r.jsx)(s.a,{ratingNumber:"",peopleNumber:"",theme:"green"})})}),Object(r.jsx)("span",{className:"d-inline-block five-star-with-progress-text w-100",children:"125 Reviews"})]})]})})}},134:function(e,t,a){},166:function(e,t,a){"use strict";var n=a(2),s=a(3),r=a(6),c=a.n(r),i=a(0),l=a.n(i),o=a(8),d=a(106);function m(e,t,a){var n=(e-t)/(a-t)*100;return Math.round(1e3*n)/1e3}function u(e,t){var a,r=e.min,i=e.now,o=e.max,d=e.label,u=e.srOnly,j=e.striped,b=e.animated,f=e.className,v=e.style,x=e.variant,h=e.bsPrefix,p=Object(s.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return l.a.createElement("div",Object(n.a)({ref:t},p,{role:"progressbar",className:c()(f,h+"-bar",(a={},a["bg-"+x]=x,a[h+"-bar-animated"]=b,a[h+"-bar-striped"]=b||j,a)),style:Object(n.a)({width:m(i,r,o)+"%"},v),"aria-valuenow":i,"aria-valuemin":r,"aria-valuemax":o}),u?l.a.createElement("span",{className:"sr-only"},d):d)}var j=l.a.forwardRef((function(e,t){var a=e.isChild,r=Object(s.a)(e,["isChild"]);if(r.bsPrefix=Object(o.a)(r.bsPrefix,"progress"),a)return u(r,t);var m=r.min,j=r.now,b=r.max,f=r.label,v=r.srOnly,x=r.striped,h=r.animated,p=r.bsPrefix,O=r.variant,w=r.className,N=r.children,g=Object(s.a)(r,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return l.a.createElement("div",Object(n.a)({ref:t},g,{className:c()(w,p)}),N?Object(d.b)(N,(function(e){return Object(i.cloneElement)(e,{isChild:!0})})):u({min:m,now:j,max:b,label:f,srOnly:v,striped:x,animated:h,bsPrefix:p,variant:O},t))}));j.displayName="ProgressBar",j.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},t.a=j},80:function(e,t,a){"use strict";a.r(t);a(0);var n=a(130),s=a(133),r=a(132),c=a(1);t.default=function(e){var t=e.isMobileScreen,a=[{reviewIcon:r.a,reviewerName:"Peter Andrews",date:"2 April 2021",message:"Attracts staff and students from IU with very nice courts forall round use."},{reviewIcon:r.a,reviewerName:"Peter Andrews",date:"2 April 2021",message:"Attracts staff and students from IU with very nice courts forall round use."},{reviewIcon:r.a,reviewerName:"Peter Andrews",date:"2 April 2021",message:"Attracts staff and students from IU with very nice courts forall round use."},{reviewIcon:r.a,reviewerName:"Peter Andrews",date:"2 April 2021",message:"Attracts staff and students from IU with very nice courts forall round use."}];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s.a,{}),Object(c.jsxs)("div",{className:"mt-5",children:[Object(c.jsx)("h2",{className:"sub-heading text-left mb-3",children:"Reviews"}),a.map((function(e,s){return Object(c.jsx)(n.a,{review:e,length:a.length,isMobileScreen:t},s)}))]})]})}},95:function(e,t,a){"use strict";a(0);var n=a(20),s=a(21),r=(a(107),a(1)),c=function(e){var t=e.theme;return Object(r.jsx)(s.a,{icon:n.i,className:"".concat(t," star-icon")})};a(108),t.a=function(e){var t=e.ratingNumber,a=e.peopleNumber,s=e.theme,i=[{starIcon:n.i,value:1},{starIcon:n.i,value:1},{starIcon:n.i,value:1},{starIcon:n.i,value:1},{starIcon:n.i,value:1}];return Object(r.jsxs)("div",{className:"five-stars-container d-flex align-items-center",children:[a&&Object(r.jsx)("span",{className:"d-inline-block five-star-rating",children:t}),Object(r.jsx)("div",{className:"star-icon-wrapper d-flex align-items-center justify-content-center mx-2",children:i.map((function(e,t){return Object(r.jsx)("div",{children:Object(r.jsx)(c,{theme:s})},t)}))}),t&&Object(r.jsxs)("span",{className:"d-inline-block five-star-text",children:["(",a,")"]})]})}}}]);
//# sourceMappingURL=11.964938aa.chunk.js.map