(this["webpackJsonpmiles-admin-panel"]=this["webpackJsonpmiles-admin-panel"]||[]).push([[7],{103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){"use strict";c(0);var s=c.p+"static/media/badge-time-icon.9d1a20d5.svg",a=c.p+"static/media/date-icon.a20c961c.svg",n=c(142),i=(c(104),c(1));t.a=function(e){var t=e.type,c=e.text,r=e.theme;return Object(i.jsxs)(n.a,{className:"badge d-flex align-items-center ".concat(r),children:[t&&Object(i.jsx)("span",{className:"icon-container mr-2 d-block",children:Object(i.jsx)("img",{src:"date"===t?a:s,alt:"time icon",className:"w-100"})}),Object(i.jsx)("span",{className:" ".concat("orange"===r?"":"info-container"),children:Object(i.jsx)("span",{children:c})})]})}},116:function(e,t,c){"use strict";t.a=c.p+"static/media/5courts.307b5f25.svg"},117:function(e,t,c){"use strict";t.a=c.p+"static/media/gym.878146bf.svg"},118:function(e,t,c){"use strict";t.a=c.p+"static/media/swim.f38b9b64.svg"},119:function(e,t,c){"use strict";t.a=c.p+"static/media/cafe.2cbb52bc.svg"},120:function(e,t,c){"use strict";t.a=c.p+"static/media/cycling.7a1fa62e.svg"},121:function(e,t,c){"use strict";c(0);var s=c(99),a=c(95),n=(c(122),c(1));t.a=function(e){var t=e.isMobileScreen,c=e.review,i=e.length;return Object(n.jsxs)("div",{className:"row no-gutters align-items-start reviews py-3 section-separator ".concat(i>1?"section-separator-top":""),children:[Object(n.jsx)("div",{className:" col-2 col-lg-1 col-md-1 d-flex align-items-start justify-content-center flex-column",children:Object(n.jsx)(s.a,{selecting:!1,icon:c.reviewIcon,name:"",theme:"green"})}),Object(n.jsxs)("div",{className:"col-10 col-md-8 col-lg-8",children:[Object(n.jsx)("p",{className:" text-left mb-0",children:'"'.concat(c.message,'"')}),Object(n.jsx)("span",{className:"".concat(t?"mb-3":"","  w-100 reviewer-secondary-text  text-left d-inline-block mt-2"),children:c.reviewerName})]}),t&&Object(n.jsx)("div",{className:"col-2"}),Object(n.jsxs)("div",{className:"col-10 col-md-2 col-lg-2 d-flex  flex-column justify-content-end ".concat(t?" align-items-start":" align-items-end"),children:[Object(n.jsx)("span",{className:" d-flex  flex-row justify-content-end",children:Object(n.jsx)(a.a,{ratingNumber:"",peopleNumber:"",theme:"green"})}),Object(n.jsx)("span",{className:"".concat(t?" text-left":"text-right","w-100 reviewer-secondary-text date d-inline-block mt-2"),children:c.date})]})]})}},122:function(e,t,c){},123:function(e,t,c){"use strict";t.a=c.p+"static/media/review.56631672.svg"},124:function(e,t,c){"use strict";c(0);var s=c(164),a=c(95),n=(c(125),c(1));t.a=function(){var e=[{startRate:"5",value:80},{startRate:"4",value:40},{startRate:"3",value:5},{startRate:"2",value:2},{startRate:"1",value:20}];return Object(n.jsx)("div",{className:"five-stars-with-progress-container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-4 col-md-6 col-8  ml-auto",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(n.jsxs)("div",{className:"progress-container",children:[Object(n.jsxs)("div",{className:"mx-3",children:[" ",Object(n.jsx)("span",{children:e.startRate})]}),Object(n.jsx)(s.a,{variant:"success",now:e.value},t)]},t)}))}),Object(n.jsxs)("div",{className:"col-lg-2 col-md-6 col-4 ",children:[Object(n.jsx)("span",{className:"d-inline-block five-star-with-progress-rating w-100",children:"4.5"}),Object(n.jsx)("div",{className:"w-100",children:Object(n.jsx)("div",{className:"star-icon-wrapper d-flex align-items-center justify-content-center",children:Object(n.jsx)(a.a,{ratingNumber:"",peopleNumber:"",theme:"green"})})}),Object(n.jsx)("span",{className:"d-inline-block five-star-with-progress-text w-100",children:"125 Reviews"})]})]})})}},125:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},140:function(e,t,c){"use strict";var s=c(0),a=c(27),n=c(137),i=c(196),r=c(20),l=c(21),o=(c(127),c(1)),d=function(e){var t=e.data,c=Object(s.useState)(!1),d=Object(a.a)(c,2),j=d[0],m=d[1];return Object(o.jsx)(n.a,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsxs)(n.a.Toggle,{as:i.a.Header,eventKey:"".concat(t.id),"data-event":t.id,className:"d-flex align-items-center px-0",onClick:function(e){m(!j)},children:[Object(o.jsx)("span",{children:j?Object(o.jsx)(l.a,{icon:r.d,className:" mr-2"}):Object(o.jsx)(l.a,{icon:r.f,className:" mr-2"})}),Object(o.jsxs)("h3",{className:"my-0",children:[t.question,Object(o.jsx)(l.a,{icon:r.g,className:"ml-2 question-icon"})]})]}),Object(o.jsx)(n.a.Collapse,{eventKey:"".concat(t.id),children:Object(o.jsx)(i.a.Body,{children:t.answer})})]})},t.id)};c(128),t.a=function(e){var t=e.faqsData;e.isMobileScreen;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"card-container pb-3 faq",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(o.jsx)(d,{data:e},t)}))})})}},161:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},165:function(e,t,c){},166:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(95),n=c(116),i=c(117),r=c(118),l=c(119),o=c(120),d=c.p+"static/media/danger.3237505b.svg",j=c(196),m=c.p+"static/media/location-map.8a8462a3.png",b=c.p+"static/media/map-icon.c9ea1260.svg",x=c.p+"static/media/time-icon.dcd9b402.svg",h=c.p+"static/media/phone-icon.2c751c95.svg",u=(c(161),c(1)),p=function(){var e=[{icon:b,info:"6180 Old Dobbin Ln, Columbia, MD 21045, United States"},{icon:x,info:"Open Now: 6:00am - 5:00pm"},{icon:h,info:"+14104234120"}];return Object(u.jsx)("div",{className:" m-auto pb-3 map-container",children:Object(u.jsx)(j.a,{className:"",children:Object(u.jsxs)(j.a.Body,{children:[Object(u.jsx)(j.a.Img,{variant:"top",src:m}),e.map((function(e,t){return Object(u.jsx)(j.a.Text,{className:"d-flex align-items-start mb-3 mt-3",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"icon-container d-block mr-3",children:Object(u.jsx)("img",{src:e.icon,className:"w-100"})}),e.info]})},t)}))]})})})},f=(c(162),function(e){var t=e.icon,c=e.theme,s=e.message,a=e.isMobileScreen;return Object(u.jsx)("div",{className:"alert-wrapper",children:Object(u.jsxs)("div",{className:"alert alert-light d-flex align-items-center justify-content-around pl-auto",children:[Object(u.jsx)("img",{src:t,alt:"".concat(c," alert icon"),className:"d-inline-block ".concat(c)}),Object(u.jsx)("p",{className:"m-0 ".concat(a?"":"mx-3"),children:s})]})})}),O=c(99),v=c(121),g=(c(163),c(123)),N=c(14),w=function(e){var t=e.isMobileScreen,c=[{reviewIcon:g.a,reviewerName:"Peter Andrews",message:"Attracts staff and students from IU with very nice courts forall round use."}];return Object(u.jsxs)("div",{className:"review-container",children:[c.map((function(e,s){return Object(u.jsx)("div",{children:Object(u.jsx)(v.a,{isMobileScreen:t,review:e,length:c.length})},s)})),Object(u.jsx)("div",{className:"row view-all-link ",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("div",{className:"link text-right w-100",children:Object(u.jsx)("p",{className:"".concat(t?"text-center":"text-right"),children:Object(u.jsx)(N.a,{to:"/reviews",children:"view all"})})})})})]})},y=c(124),k=c(27),S=c(108),C=c(90),M=c(98),R=(c(165),function(){var e=Object(s.useState)(!1),t=Object(k.a)(e,2),c=t[0],a=t[1],n=function(){return a(!0)},i=[{name:"Footwork Patterns",type:"Tennis",for:"Kids | 4-7",description:"Improve with other players in a similar skill set and a fun envoronment.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:""},{name:"Match fitness",type:"Tennis",for:"Adults | 18+",description:"Get one on one private instruction. Improve faster working on specific skills.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:""},{name:"Match fitness",type:"pilates",for:"Adults | 18+",description:"Get one on one private instruction. Improve faster working on specific skills.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:"Still time left to register"},{name:"Match fitness",type:"pilates",for:"Adults | 18+",description:"Get one on one private instruction. Improve faster working on specific skills.",time:"4:00pm - 5:00pm",date:"23 Aug - 13 Sep",notes:"Class is in session, book now"}];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"feature-container card-container",children:[null===i||void 0===i?void 0:i.map((function(e,t){return Object(u.jsx)(j.a,{className:"mb-3 text-left",children:Object(u.jsx)(j.a.Body,{children:Object(u.jsxs)("div",{className:"row feature-info-container d-flex",children:[Object(u.jsxs)("div",{className:"col-12 col-lg-7 col-md-5 title-info",children:[Object(u.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(u.jsx)(j.a.Title,{className:"mr-2 mb-0",children:e.name}),e.notes&&Object(u.jsx)(S.a,{type:"",text:e.notes,theme:"orange"})]}),Object(u.jsxs)(j.a.Text,{className:"mb-2",children:[Object(u.jsx)("span",{className:"feature-type mr-2",children:Object(u.jsx)(S.a,{type:"",text:e.type,theme:"white"})}),Object(u.jsx)("span",{className:"feature-type green",children:e.for})]}),Object(u.jsx)(j.a.Text,{className:"feature-description description-info mb-4",children:e.description})]}),Object(u.jsxs)("div",{className:"col-12 col-lg-5 col-md-7 date-and-time-info d-flex flex-column justify-content-between",children:[Object(u.jsxs)("div",{className:"d-flex align-items-center justify-content-end time-date-container",children:[Object(u.jsx)(S.a,{type:"time",text:e.time,theme:"gray"}),Object(u.jsx)(S.a,{type:"date",text:e.date,theme:"gray"})]}),Object(u.jsxs)("div",{className:"d-flex align-items-center flex-column ",children:[Object(u.jsx)("div",{className:"my-2 w-100",children:Object(u.jsx)(C.a,{text:"Register Now",theme:"green",share:!1})}),Object(u.jsx)("div",{className:" w-100",children:Object(u.jsx)(C.a,{text:"Share this",theme:"white",share:!0,onClickButton:n})})]})]})]})})},t)})),Object(u.jsx)("div",{className:"row view-all-link ",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("div",{className:"link text-right w-100",children:Object(u.jsx)("p",{className:"text-right",children:Object(u.jsx)(N.a,{to:"/",children:"View all"})})})})})]}),Object(u.jsx)(M.a,{handleClose:function(){return a(!1)},openModal:c,socailMediaShare:!0,image:""})]})}),I=c(140);c(166),t.default=function(e){var t=e.isMobileScreen,c=[{icon:n.a,name:"5 Courts"},{icon:i.a,name:"Gym"},{icon:o.a,name:"Cycling"},{icon:r.a,name:"Swimming"},{icon:l.a,name:"Cafe"}];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"row  section-separator mb-3 pb-3",children:[Object(u.jsxs)("div",{className:"col-12 col-md-12 col-lg-6 mb-5".concat(t?"":"section-separator-right"),children:[Object(u.jsx)(a.a,{ratingNumber:"4.5",peopleNumber:"122",theme:"dark-blue"}),Object(u.jsx)("p",{className:"section-separator pb-4",children:"Clubhouse Woodridge Tennis Academy offers amazing recently re-surfaced Tournament Ready courts servicing North Beach, Glenwood, Riversdale and Central Dakota. We also boast hosting the World #11 favorite training ground and wordl class cafeteria for the hungry little ones."}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("div",{className:"pb-4 activity-icons d-flex align-items-center justify-content-around",children:c.map((function(e,t){return Object(u.jsx)("div",{className:" d-flex align-items-center justify-content-center flex-column",children:Object(u.jsx)(O.a,{selecting:!1,theme:"normal",icon:e.icon,name:e.name})},t)}))}),Object(u.jsx)(f,{isMobileScreen:t,icon:d,theme:"white",message:"Currently undergoing renovations."})]})]}),Object(u.jsxs)("div",{className:"col-12 col-md-12 col-lg-6",children:[Object(u.jsx)("h2",{className:"sub-heading text-left text-center ".concat(t?"mb-3":"mb-4"),children:"Map"}),Object(u.jsx)(p,{})]})]}),Object(u.jsxs)("section",{className:"row section-separator pb-3 mb-5",children:[Object(u.jsx)("div",{className:"col-12 col-md-12 col-lg-12",children:Object(u.jsx)(y.a,{})}),Object(u.jsxs)("div",{className:"col-12 col-md-12 col-lg-12",children:[Object(u.jsx)("h2",{className:"sub-heading text-left mb-3",children:"Reviews"}),Object(u.jsx)(w,{isMobileScreen:t})]})]}),Object(u.jsx)("section",{className:"row section-separator p-0 pb-1 mb-3",children:Object(u.jsxs)("div",{className:"col-12 col-md-12 col-lg-12",children:[Object(u.jsx)("h2",{className:"sub-heading text-left mb-3",children:"Featured"}),Object(u.jsx)("div",{className:"review-container",children:Object(u.jsx)("div",{className:"row no-gutters align-items-start",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)(R,{})})})})]})}),Object(u.jsx)("section",{className:"row section-separator  pb-3",children:Object(u.jsxs)("div",{className:"col-12 col-md-12 col-lg-12",children:[Object(u.jsx)("h2",{className:"sub-heading text-left mb-3",children:"FAQ"}),Object(u.jsx)("div",{className:"faq-container",children:Object(u.jsx)("div",{className:"row no-gutters align-items-start",children:Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)(I.a,{faqsData:[{id:1,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:2,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:3,question:"How quickly can I get a new slot",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:4,question:"How many students are permitted in a class",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "}],isMobileScreen:t}),Object(u.jsx)("div",{className:"row view-all-link ",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("div",{className:"link text-right w-100",children:Object(u.jsx)("p",{className:"".concat(t?"text-center":"text-right"),children:Object(u.jsx)(N.a,{to:"/faq",children:"View all"})})})})})]})})})]})})]})}},90:function(e,t,c){"use strict";c(0);var s=c(111),a=c.p+"static/media/share-icon.dfe15492.svg",n=(c(105),c(1));t.a=function(e){var t=e.text,c=e.theme,i=e.share,r=e.onClickButton,l=e.type,o=e.icon;return Object(n.jsxs)(s.a,{variant:"primary ",className:"".concat(c,"-btn ml-auto btn ").concat(c," ").concat(i?"share-btn":""),onClick:r,type:l,children:[i&&Object(n.jsx)("span",{className:"mr-2",children:Object(n.jsx)("img",{src:a})}),Object(n.jsxs)("span",{className:"".concat(o?"mr-2":""),children:[" ",t]}),o&&Object(n.jsx)("span",{children:o})]})}},95:function(e,t,c){"use strict";c(0);var s=c(20),a=c(21),n=(c(96),c(1)),i=function(e){var t=e.theme;return Object(n.jsx)(a.a,{icon:s.i,className:"".concat(t," star-icon")})};c(97),t.a=function(e){var t=e.ratingNumber,c=e.peopleNumber,a=e.theme,r=[{starIcon:s.i,value:1},{starIcon:s.i,value:1},{starIcon:s.i,value:1},{starIcon:s.i,value:1},{starIcon:s.i,value:1}];return Object(n.jsxs)("div",{className:"five-stars-container d-flex align-items-center",children:[c&&Object(n.jsx)("span",{className:"d-inline-block five-star-rating",children:t}),Object(n.jsx)("div",{className:"star-icon-wrapper d-flex align-items-center justify-content-center mx-2",children:r.map((function(e,t){return Object(n.jsx)("div",{children:Object(n.jsx)(i,{theme:a})},t)}))}),t&&Object(n.jsxs)("span",{className:"d-inline-block five-star-text",children:["(",c,")"]})]})}},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){"use strict";var s=c(0),a=c(202),n=c(27),i=c(203),r=(c(21),c(143)),l=c(145),o=c(147),d=c(149),j=c(144),m=c(146),b=c(148),x=c(150),h=(c(106),c(1)),u=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),c=t[0],a=t[1],u=Object(s.useRef)(null);var p="https://booktennislessons.com/app/Frontend/registerProgram/209?fbclid=IwAR1VQ6t93HvxH_LfIQVtjn_3Ngqfo-AoHbf0EbQFEXAohDUBDN-ngMvtr10";return Object(h.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[Object(h.jsxs)("div",{className:"my-4 w-75 d-flex flex-row  align-items-center justify-content-center",children:[Object(h.jsx)(i.a.Control,{type:"text",defaultValue:p,className:"",ref:u}),Object(h.jsxs)("div",{className:"copy-container",children:[Object(h.jsx)("span",{className:"copied mx-3 d-block",children:c}),Object(h.jsx)("i",{className:"far fa-copy copy-link mx-3  d-block",onClick:function(e){u.current.select(),document.execCommand("copy"),e.target.focus(),a("Copied!")}})]})]}),Object(h.jsxs)("section",{className:"social-media-share mb-5",children:[Object(h.jsx)(r.a,{url:"".concat(p),className:"facebook",children:Object(h.jsx)(j.a,{size:"2.5rem",round:!0})}),Object(h.jsx)(l.a,{url:"".concat(p),className:"twitter",children:Object(h.jsx)(m.a,{size:"2.5rem",round:!0})}),Object(h.jsx)(o.a,{url:"".concat(p),className:"email",children:Object(h.jsx)(b.a,{size:"2.5rem",round:!0})}),Object(h.jsx)(d.a,{url:"".concat(p),className:"whatsapp",children:Object(h.jsx)(x.a,{size:"2.5rem",round:!0})})]})]})};c(107),t.a=function(e){var t=e.content,c=e.handleClose,s=e.openModal,n=e.image,i=e.socailMediaShare;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(a.a,{className:"social-media-modal",show:s,onHide:c,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(h.jsx)(a.a.Header,{closeButton:!0}),Object(h.jsxs)(a.a.Body,{children:[n&&Object(h.jsx)("div",{className:"image-container w-100",children:Object(h.jsx)("img",{src:n,className:"w-100"})}),i&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"social-media-content",children:[Object(h.jsx)("h3",{children:"Share With Friends"}),Object(h.jsx)("p",{children:"Where whould you like to share ?"})]}),Object(h.jsx)(u,{})]}),t&&t]})]})})}},99:function(e,t,c){"use strict";var s=c(27),a=c(0),n=(c(103),c(1));t.a=function(e){var t=e.icon,c=e.name,i=e.theme,r=e.selecting,l=Object(a.useState)(!1),o=Object(s.a)(l,2),d=o[0],j=o[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"".concat(d?"selected":""," ").concat(r?"radial":"","  d-flex align-items-center justify-content-center"),onClick:function(e){r&&j(!d)},children:Object(n.jsx)("div",{className:"icon-wrapper d-flex align-items-center justify-content-center  ".concat(i," "),children:Object(n.jsx)("img",{src:t,alt:"{".concat(c," w-100")})})}),c&&Object(n.jsx)("p",{className:"icon-description",children:c})]})}}}]);
//# sourceMappingURL=7.f74881a2.chunk.js.map