(this["webpackJsonpmiles-admin-panel"]=this["webpackJsonpmiles-admin-panel"]||[]).push([[14],{110:function(e,t,a){"use strict";var r=a(2),n=a(0),i=a.n(n),o=a(6),s=a.n(o);t.a=function(e){return i.a.forwardRef((function(t,a){return i.a.createElement("div",Object(r.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},127:function(e,t,a){},128:function(e,t,a){},137:function(e,t,a){"use strict";var r=a(2),n=a(3),i=a(6),o=a.n(i),s=a(0),c=a.n(s),l=a(23),d=a(8),u=a(11),b=c.a.createContext(null);b.displayName="AccordionContext";var m=b;var p=c.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"button":a,o=e.children,l=e.eventKey,d=e.onClick,b=Object(n.a)(e,["as","children","eventKey","onClick"]),p=function(e,t){var a=Object(s.useContext)(m),r=Object(s.useContext)(u.a);return function(n){r&&r(e===a?null:e,n),t&&t(n)}}(l,d);return"button"===i&&(b.type="button"),c.a.createElement(i,Object(r.a)({ref:t,onClick:p},b),o)})),v=a(39),h=c.a.forwardRef((function(e,t){var a=e.children,i=e.eventKey,o=Object(n.a)(e,["children","eventKey"]),l=Object(s.useContext)(m);return c.a.createElement(u.a.Provider,{value:null},c.a.createElement(v.a,Object(r.a)({ref:t,in:l===i},o),c.a.createElement("div",null,c.a.Children.only(a))))}));h.displayName="AccordionCollapse";var f=h,j=c.a.forwardRef((function(e,t){var a=Object(l.a)(e,{activeKey:"onSelect"}),i=a.as,s=void 0===i?"div":i,b=a.activeKey,p=a.bsPrefix,v=a.children,h=a.className,f=a.onSelect,j=Object(n.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),O=o()(h,Object(d.a)(p,"accordion"));return c.a.createElement(m.Provider,{value:b||null},c.a.createElement(u.a.Provider,{value:f||null},c.a.createElement(s,Object(r.a)({ref:t},j,{className:O}),v)))}));j.displayName="Accordion",j.Toggle=p,j.Collapse=f;t.a=j},140:function(e,t,a){"use strict";var r=a(0),n=a(27),i=a(137),o=a(196),s=a(20),c=a(21),l=(a(127),a(1)),d=function(e){var t=e.data,a=Object(r.useState)(!1),d=Object(n.a)(a,2),u=d[0],b=d[1];return Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsxs)(i.a.Toggle,{as:o.a.Header,eventKey:"".concat(t.id),"data-event":t.id,className:"d-flex align-items-center px-0",onClick:function(e){b(!u)},children:[Object(l.jsx)("span",{children:u?Object(l.jsx)(c.a,{icon:s.d,className:" mr-2"}):Object(l.jsx)(c.a,{icon:s.f,className:" mr-2"})}),Object(l.jsxs)("h3",{className:"my-0",children:[t.question,Object(l.jsx)(c.a,{icon:s.g,className:"ml-2 question-icon"})]})]}),Object(l.jsx)(i.a.Collapse,{eventKey:"".concat(t.id),children:Object(l.jsx)(o.a.Body,{children:t.answer})})]})},t.id)};a(128),t.a=function(e){var t=e.faqsData;e.isMobileScreen;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"card-container pb-3 faq",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)(d,{data:e},t)}))})})}},172:function(e,t,a){},196:function(e,t,a){"use strict";var r=a(2),n=a(3),i=a(6),o=a.n(i),s=a(0),c=a.n(s),l=a(8),d=a(36),u=a(110),b=a(46),m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.variant,d=e.as,u=void 0===d?"img":d,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),m=Object(l.a)(a,"card-img");return c.a.createElement(u,Object(r.a)({ref:t,className:o()(s?m+"-"+s:m,i)},b))}));m.displayName="CardImg",m.defaultProps={variant:null};var p=m,v=Object(u.a)("h5"),h=Object(u.a)("h6"),f=Object(d.a)("card-body"),j=Object(d.a)("card-title",{Component:v}),O=Object(d.a)("card-subtitle",{Component:h}),x=Object(d.a)("card-link",{Component:"a"}),y=Object(d.a)("card-text",{Component:"p"}),g=Object(d.a)("card-header"),w=Object(d.a)("card-footer"),N=Object(d.a)("card-img-overlay"),C=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,d=e.bg,u=e.text,m=e.border,p=e.body,v=e.children,h=e.as,j=void 0===h?"div":h,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(l.a)(a,"card"),y=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return c.a.createElement(b.a.Provider,{value:y},c.a.createElement(j,Object(r.a)({ref:t},O,{className:o()(i,x,d&&"bg-"+d,u&&"text-"+u,m&&"border-"+m)}),p?c.a.createElement(f,null,v):v))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=p,C.Title=j,C.Subtitle=O,C.Body=f,C.Link=x,C.Text=y,C.Header=g,C.Footer=w,C.ImgOverlay=N;t.a=C},81:function(e,t,a){"use strict";a.r(t);a(0);var r=a(140),n=(a(172),a(1));t.default=function(e){var t=e.isMobileScreen;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"col-12 col-md-12 col-lg-12",children:Object(n.jsx)("div",{className:"faq-container",children:Object(n.jsx)("div",{className:"row no-gutters align-items-start",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(r.a,{faqsData:[{id:1,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:2,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:3,question:"How quickly can I get a new slot",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:4,question:"How many students are permitted in a class",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:5,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:6,question:"What are the rules in place related to Corvid-19 regulations",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:7,question:"How quickly can I get a new slot",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "},{id:8,question:"How many students are permitted in a class",answer:"The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. "}],isMobileScreen:t})})})})})})}}}]);
//# sourceMappingURL=14.07014e01.chunk.js.map