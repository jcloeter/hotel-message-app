(this["webpackJsonphotel-message-app"]=this["webpackJsonphotel-message-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={result_message:"Message_result_message__k03-u",message:"Message_message__3cAHw"}},,function(e,t,a){e.exports={card:"Card_card__2pIcu"}},function(e,t,a){e.exports={list_item:"ListItem_list_item__1mvxe"}},function(e,t,a){e.exports={item_container:"ItemContainer_item_container__2jP_4"}},function(e,t,a){},function(e,t,a){e.exports={button:"Button_button__3_ZUn"}},function(e,t,a){e.exports={companies:"Companies_companies__2SVcw"}},function(e,t,a){e.exports={data_group:"DataGroup_data_group__3-lYq"}},function(e,t,a){e.exports={header:"Header_header__2TMgK"}},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e){e.exports=JSON.parse('[{"id":1,"template":"Hello **FIRSTNAME** and welcome to **COMPANY**. We hope you enjoy your stay in **CITY**. Room **ROOM** will be sanitized before you arrive for your stay from **STARTDAY**-**ENDDAY**. Thanks again **FIRSTNAME**!"},{"id":2,"template":"Good **TIME** **FIRSTNAME**! We are looking forward to serving you at **COMPANY**. Feel free to visit our front desk to learn more about the exciting things to do in **CITY**."},{"id":3,"template":"**FIRSTNAME** **LASTNAME**, here at **COMPANY** we always put our customers first. If there is any part of your stay with us that does live up to your satisfaction, let us know and we will make it right! "},{"id":4,"template":"As the oldest hotel service in **CITY**, **COMPANY** is looking forward to making your stay in **CITY** the best it can possibly be. Have a great **TIME**."},{"id":5,"template":"On a rainy **TIME**, there is still plenty to do at **COMPANY**. Try our 24/7 gym, pool, and sauna!"}]')},,function(e){e.exports=JSON.parse('[{"id":1,"firstName":"Candy","lastName":"Pace","reservation":{"roomNumber":529,"startTimestamp":1486654792,"endTimestamp":1486852373}},{"id":2,"firstName":"Morgan","lastName":"Porter","reservation":{"roomNumber":385,"startTimestamp":1486612719,"endTimestamp":1486694720}},{"id":3,"firstName":"Bridgett","lastName":"Richard","reservation":{"roomNumber":141,"startTimestamp":1486520344,"endTimestamp":1486769616}},{"id":4,"firstName":"Melisa","lastName":"Preston","reservation":{"roomNumber":417,"startTimestamp":1486614763,"endTimestamp":1486832543}},{"id":5,"firstName":"Latoya","lastName":"Herrera","reservation":{"roomNumber":194,"startTimestamp":1486605110,"endTimestamp":1486785126}},{"id":6,"firstName":"Hewitt","lastName":"Hopper","reservation":{"roomNumber":349,"startTimestamp":1486660637,"endTimestamp":1486788273}}]')},function(e){e.exports=JSON.parse('[{"id":1,"company":"Hotel California","city":"Santa Barbara","timezone":"US/Pacific"},{"id":2,"company":"The Grand Budapest Hotel","city":"Republic of Zubrowka","timezone":"US/Central"},{"id":3,"company":"The Heartbreak Hotel","city":"Graceland","timezone":"US/Central"},{"id":4,"company":"The Prancing Pony","city":"Bree","timezone":"US/Central"},{"id":5,"company":"The Fawlty Towers","city":"Torquay","timezone":"US/Eastern"}]')},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(10),c=a.n(r),i=(a(24),a(2)),o=(a(25),a(3)),l=a(19),u=a(11),m=a.n(u),d=a(0),j=function(e){return Object(d.jsx)("div",{className:"".concat(m.a.card),children:e.children})},b=a(12),p=a.n(b),f=function(e){return Object(d.jsx)("li",{onClick:function(t){"templates"===e.info.type&&e.onTemplatesItemClick(e.object),"companies"===e.info.type&&e.onCompaniesItemClick(e.object),"guests"===e.info.type&&e.onGuestsItemClick(e.object)},className:"".concat(p.a.list_item),style:e.isSelected?{backgroundColor:"rgba(101, 172, 172, 1)"}:null,children:e.children})},O=a(13),h=a.n(O),x=function(e){return Object(d.jsx)("div",{className:h.a.item_container,children:e.children})},v=a(14),g=a.n(v),N=(a(27),a(15)),y=a.n(N),S=function(e){return Object(d.jsx)("button",{onClick:e.onClick,type:e.type,className:"".concat(y.a.button," ").concat(e.className),children:e.children})},T=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],r=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"overlay",onClick:e.onCloseModal,children:"Overlay"}),Object(d.jsxs)("div",{className:"modal",children:[Object(d.jsx)("h4",{children:"Custom Greeting Template"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s&&(e.onCloseModal(),e.onSubmitNewTemplate(s))},children:[Object(d.jsx)("textarea",{className:"text_area",onChange:function(e){r(e.target.value.trim())},placeholder:'Start typing to make a template. To use variables and make the template reusable, enter the uppercase words below to use their value.\r Example: "Good **TIME** **FIRSTNAME**." => "Good afternoon Sarah."'}),Object(d.jsxs)("ul",{className:"modal_instructions",children:["Variables:",Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"variable",children:"**FIRSTNAME**"}),"- First name of customer"]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"variable",children:"**LASTNAME**"}),"- Last name of customer"]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"variable",children:"**COMPANY**"}),"- Name of hotel or company"]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"variable",children:"**CITY**"}),"- Name of city that the company is located in"," "]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"variable",children:"**TIME**"}),'- "Morning", "Afternoon", or "Evening" used for greeting']}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"variable",children:"**STARTDAY**"}),"- Day of week that customer arrives"]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"variable",children:"**ENDDAY**"}),"- Day of week that customer leaves"]})]}),Object(d.jsx)(S,{className:"btn_modal",type:"submit",children:"Create"})]})]})]})},C=function(e){var t=Object(n.useState)([]),s=Object(i.a)(t,2),r=s[0],c=s[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),b=m[0],p=m[1],O=Object(n.useState)(!1),h=Object(i.a)(O,2),v=(h[0],h[1]);Object(n.useEffect)((function(){var e=a(28);c((function(){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{isSelected:!1})}))}))}),[r.isSelected]);var N=function(t){r.forEach((function(e){return e.isSelected=!1})),t.isSelected=!0,v(t),e.onSelectedChange(t,"templates")};return Object(d.jsxs)(d.Fragment,{children:[b?Object(d.jsx)(T,{onCloseModal:function(){p(!1)},onSubmitNewTemplate:function(e){c((function(t){return[].concat(Object(l.a)(t),[{id:t.length+1,template:e,isSelected:!1}])}))}}):null,Object(d.jsxs)(j,{children:[Object(d.jsx)("div",{className:"template_header",children:Object(d.jsxs)("h4",{children:["Templates",Object(d.jsx)(S,{className:g.a.template_button,onClick:function(){p(!0)},children:"Add"})]})}),Object(d.jsx)(x,{children:r.length>0?r.map((function(e){return Object(d.jsx)(f,{style:{"line-spacing":"4rem"},info:{type:"templates",id:e.id},object:e,onTemplatesItemClick:N,isSelected:e.isSelected,children:e.template},e.id)})):null})]})]})},_=a(4),M=a.n(_),A=a(7),w=function(e){var t=Object(n.useState)([]),s=Object(i.a)(t,2),r=s[0],c=s[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),m=(u[0],u[1]);Object(n.useEffect)((function(){var e=function(){var e=Object(A.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a(30),c((function(){return t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{isSelected:!1})}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r.isSelected]);var b=function(t){r.forEach((function(e){e.isSelected=!1})),t.isSelected=!0,m(t),e.onSelectedChange(t,"guests")};return Object(d.jsxs)(j,{children:[Object(d.jsx)("h4",{children:"Guests"}),Object(d.jsx)(x,{children:r.length>0?r.map((function(e){return Object(d.jsx)(f,{type:"guests",number:e.id,info:{type:"guests",id:e.id},object:e,onGuestsItemClick:b,isSelected:e.isSelected,children:Object(d.jsxs)("strong",{children:[e.firstName," ",e.lastName]})},e.id)})):null})]})},k=a(16),E=a.n(k),I=function(e){var t=Object(n.useState)([]),s=Object(i.a)(t,2),r=s[0],c=s[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),m=(u[0],u[1]);Object(n.useEffect)((function(){var e=function(){var e=Object(A.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a(31),c((function(){return t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{isSelected:!1})}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r.isSelected]);var b=function(t){r.forEach((function(e){e.isSelected=!1})),t.isSelected=!0,m(t),e.onSelectedChange(t,"companies")};return Object(d.jsxs)(j,{className:E.a.companies,children:[Object(d.jsx)("h4",{children:"Companies"}),Object(d.jsx)(x,{children:r?r.map((function(e){return Object(d.jsxs)(f,{info:{type:"companies",id:e.id},object:e,onCompaniesItemClick:b,type:"companies",isSelected:e.isSelected,children:[Object(d.jsx)("div",{children:Object(d.jsx)("strong",{children:e.company})}),Object(d.jsx)("div",{children:e.city})]},e.id)})):null})]})},Y=a(17),D=a.n(Y),P=function(e){var t=Object(n.useState)({guests:"",companies:"",templates:""}),a=Object(i.a)(t,2),s=a[0],r=a[1],c=e.onObjectChange;Object(n.useEffect)((function(){c(s)}),[s,c]);var l={guests:"",companies:"",templates:""},u=function(e,t){"guests"===t&&(l.guests=e,r((function(){return Object(o.a)(Object(o.a)({},s),{},{guests:e})}))),"companies"===t&&(l.companies=e,r((function(){return Object(o.a)(Object(o.a)({},s),{},{companies:e})}))),"templates"===t&&(l.templates=e,r((function(){return Object(o.a)(Object(o.a)({},s),{},{templates:e})})))};return Object(d.jsxs)("div",{className:D.a.data_group,children:[Object(d.jsx)(C,{onSelectedChange:u}),Object(d.jsx)(I,{onSelectedChange:u}),Object(d.jsx)(w,{onSelectedChange:u})]})},R=a(18),F=a.n(R),G=function(){return Object(d.jsxs)("div",{className:F.a.header,children:[Object(d.jsx)("h1",{children:"Hotel Greeting Generator"}),Object(d.jsx)("h4",{children:"Greet Customers the Way You'd Like to be Greeted"})]})},H=a(9),U=a.n(H),z=function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(e).getDay()]},L=function(e){var t=(new Date).getHours();return"US/Pacific"===e&&(t-=1),"US/Eastern"===e&&(t+=1),t>17?"evening":t>12?"afternoon":t>0?"morning":void 0},B=function(e){var t=e.messageObject,a=t.guests,n=t.companies,s=t.templates;return Object(d.jsx)("div",{children:function(e){if(!a||!n||!s)return"Select an option from each category below or create your own template";var t=[{str:"FIRSTNAME",var:a.firstName},{str:"LASTNAME",var:a.lastName},{str:"ROOM",var:a.reservation.roomNumber},{str:"COMPANY",var:n.company},{str:"CITY",var:n.city},{str:"STARTDAY",var:z(a.reservation.startTimestamp)},{str:"ENDDAY",var:z(a.reservation.endTimestamp)},{str:"TIME",var:L(n.timezone)}];return e.template.split("**").map((function(e){for(var a=0;a<t.length;a++)if(e.includes(t[a].str))return t[a].var;return e})).join("")}(s)})},J=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:U.a.result_message,children:Object(d.jsx)("div",{className:U.a.message,children:Object(d.jsx)(B,{messageObject:e.messageObject})})})})};var W=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(G,{}),Object(d.jsx)(J,{messageObject:a}),Object(d.jsx)(P,{onObjectChange:function(e){s(e)}})]})};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(W,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.d0f6597b.chunk.js.map