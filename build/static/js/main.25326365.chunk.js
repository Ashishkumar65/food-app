(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,,,function(e,t,n){e.exports={meals:"AvailabelMeals_meals__uicvo","meals-appear":"AvailabelMeals_meals-appear__2_NeB",MealsLoading:"AvailabelMeals_MealsLoading__2aE22",MealsError:"AvailabelMeals_MealsError__3kiUB"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(19),a=n.n(c),r=(n(31),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=n(9),d=n.n(j),m=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(u).items,j=s.reduce((function(e,t){return e+t.amount}),0),m="".concat(d.a.button," ").concat(c?d.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:d.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:d.a.badge,children:j})]})},b=n(16),O=n.n(b),h=n.p+"static/media/meals.2971f633.jpeg",x=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:O.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:O.a["main-image"],children:Object(o.jsx)("img",{src:h,alt:"A table full of delicious food!"})})]})},p=n(20),f=n.n(p),_=function(){return Object(o.jsxs)("section",{className:f.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n(12),N=n(13),g=n.n(N),y=n(21),A=n.n(y),M=function(e){return Object(o.jsx)("div",{className:A.a.card,children:e.children})},k=n(14),w=n.n(k),I=n(22),S=n.n(I),F=n(4),E=n(23),R=n.n(E),B=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:R.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(F.a)({ref:t},e.input))]})})),D=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(o.jsx)(B,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"plese enter a valid amount(1-5)."})]})},H=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:w.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:w.a.description,children:e.description}),Object(o.jsx)("div",{className:w.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(D,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},P=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),l=s[0],u=s[1],j=Object(i.useState)(),d=Object(r.a)(j,2),m=d[0],b=d[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(v.a)().mark((function e(){var t,n,a,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-63859-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});u(!1),c(a);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:g.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:g.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(H,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:g.a.meals,children:Object(o.jsx)(M,{children:Object(o.jsx)("ul",{children:O})})})},T=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(P,{})]})},L=n(5),U=n.n(L),z=n(7),J=n.n(z),V=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:J.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:J.a.summary,children:[Object(o.jsx)("span",{className:J.a.price,children:t}),Object(o.jsxs)("span",{className:J.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:J.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Y=n(10),q=n.n(Y),Q=n(15),X=n.n(Q),Z=function(e){return Object(o.jsx)("div",{className:X.a.backdrop,onClick:e.onClose})},$=function(e){return Object(o.jsx)("div",{className:X.a.modal,children:Object(o.jsx)("div",{className:X.a.content,children:e.children})})},G=document.getElementById("overlays"),K=function(e){return Object(o.jsxs)(i.Fragment,{children:[q.a.createPortal(Object(o.jsx)(Z,{onClose:e.onClose}),G),q.a.createPortal(Object(o.jsx)($,{children:e.children}),G)]})},W=n(3),ee=n.n(W),te=function(e){return""===e.trim()},ne=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),j=Object(i.useRef)();return Object(o.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=l.current.value,r=u.current.value,i=j.current.value,o=!te(n),d=!te(c),m=!te(i),b=6===r.trim().length;a({name:o,street:d,city:m,postalCode:b}),o&&m&&b&&d&&e.onConfirm({name:n,street:i,postalCode:r,city:i})},children:[Object(o.jsxs)("div",{className:"".concat(ee.a.control," ").concat(c.name?"":ee.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(o.jsx)("p",{children:"Plese enter a valid name!"})]}),Object(o.jsxs)("div",{className:"".concat(ee.a.control," ").concat(c.street?"":ee.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!c.street&&Object(o.jsx)("p",{children:"Plese enter a valid street!"})]}),Object(o.jsxs)("div",{className:"".concat(ee.a.control," ").concat(c.postalCode?"":ee.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postalCode&&Object(o.jsx)("p",{children:"Plese enter a valid psotal code!(6 chars long)"})]}),Object(o.jsxs)("div",{className:"".concat(ee.a.control," ").concat(c.city?"":ee.a.invalid),children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:j}),!c.name&&Object(o.jsx)("p",{children:"Plese enter a valid city!"})]}),Object(o.jsxs)("div",{className:ee.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:ee.a.submit,children:"Confirm"})]})]})},ce=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],l=Object(i.useState)(!1),j=Object(r.a)(l,2),d=j[0],m=j[1],b=Object(i.useState)(!1),O=Object(r.a)(b,2),h=O[0],x=O[1],p=Object(i.useContext)(u),f="$".concat(p.totalAmount.toFixed(2)),_=p.items.length>0,N=function(e){p.removeItem(e)},g=function(e){p.addItem(Object(F.a)(Object(F.a)({},e),{},{amount:1}))},y=function(){var e=Object(C.a)(Object(v.a)().mark((function e(t){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-http-63859-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:p.items})});case 3:m(!1),x(!0),p.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:U.a["cart-items"],children:p.items.map((function(e){return Object(o.jsx)(V,{name:e.name,amount:e.amount,price:e.price,onRemove:N.bind(null,e.id),onAdd:g.bind(null,e)},e.id)}))}),M=Object(o.jsxs)("div",{className:U.a.actions,children:[Object(o.jsx)("button",{className:U.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:U.a.button,onClick:function(){a(!0)},children:"Order"})]}),k=Object(o.jsxs)(s.a.Fragment,{children:[A,Object(o.jsxs)("div",{className:U.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:f})]}),c&&Object(o.jsx)(ne,{onConfirm:y,onCancel:e.onClose}),!c&&M]}),w=Object(o.jsx)("p",{children:"Sending order data..."}),I=Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("p",{children:"succesfully sent the order!"}),Object(o.jsx)("div",{className:U.a.actions,children:Object(o.jsx)("button",{className:U.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(K,{onClose:e.onClose,children:[!d&&!h&&k,d&&w,!d&&h&&I]})},ae=n(17),re={items:[],totalAmount:0},ie=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(F.a)(Object(F.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(F.a)(Object(F.a)({},l),{},{amount:l.amount-1});(s=Object(ae.a)(e.items))[o]=j}return{items:s,totalAmount:u}}return t.type,re},se=function(e){var t=Object(i.useReducer)(ie,re),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var oe=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(se,{children:[n&&Object(o.jsx)(ce,{onClose:function(){c(!1)}}),Object(o.jsx)(x,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(T,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(oe,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.25326365.chunk.js.map