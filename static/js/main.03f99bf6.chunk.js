(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{31:function(e,t,n){e.exports=n(47)},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),l=n.n(r),i=n(5),o=n(4),u=n(2),s=(n(40),n(13)),m=n.n(s),d=n(18),p=n(10),f=n(29),_=n(30),E=n(21),v=function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://instasport.co/dashboard/api/v1/clubs/");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){return{type:"SET_PRODUCTS",products:e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return t.products;default:return e}},y=function(e){return{type:"FILTER_BY_CITY",field:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_BY_CITY":return t.field;default:return e}},N=function(e){return{type:"FILTER_BY_ACTIVITY",field:e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_BY_ACTIVITY":return t.field;default:return e}},j=function(e){return{type:"SET_ERROR",errorMessage:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR":return t.errorMessage;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"FINISH_LOADING":return!1;default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CITY_LIST":return t.cities;default:return e}},I=n(20),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVITY_LIST":return Object(I.a)(t.activities);default:return e}},S=Object(p.combineReducers)({products:h,filterByCity:g,filterByActivity:O,errorMessage:k,isLoading:T,cityList:w,activityList:C}),L=function(e){return e.products},B=function(e){return e.errorMessage},R=function(e){return e.isLoading},A=function(e){return e.filterByCity},Y=function(e){return e.filterByActivity},F=Object(E.a)(L,A,Y,(function(e,t,n){return e.filter((function(e){return""===t&&""===n||(""===t?e.activity.some((function(e){return e.title===n})):""===n?e.city.title===t:e.city.title===t&&e.activity.some((function(e){return e.title===n})))}))})),x=Object(E.a)(L,(function(e){return e.cityList.sort((function(e,t){return e.localeCompare(t)}))}),Y,(function(e,t,n){var a={};return""===n?t:(e.forEach((function(e){e.activity.some((function(e){return e.title===n}))&&(a[e.city.title]=!0)})),Object.keys(a))})),D=Object(E.a)(L,(function(e){return e.activityList.sort((function(e,t){return e.localeCompare(t)}))}),A,(function(e,t,n){var a={};return""===n?t:(e.forEach((function(e){e.city.title===n&&e.activity.forEach((function(e){return a[e.title]=!0}))})),Object.keys(a))})),M=Object(p.createStore)(S,Object(f.composeWithDevTools)(Object(p.applyMiddleware)(_.a))),G=(n(42),function(){return c.a.createElement("div",{className:"home-page"},c.a.createElement(i.b,{className:"home-page__link",to:{pathname:"/clubs"}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),"\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u043a\u043b\u0443\u0431"))}),P=(n(44),n(11)),V=n(9),H=n.n(V),U=function(e){var t=e.src,n=e.alt,r=Object(a.useState)(!1),l=Object(P.a)(r,2),i=l[0],o=l[1],u=Object(a.useRef)(null);return Object(a.useEffect)((function(){!function(e,t){new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(t(!0),n.disconnect())}))})).observe(e)}(u.current,o)}),[]),i?c.a.createElement("img",{className:"product__image",src:t,alt:n}):c.a.createElement("span",{ref:u,className:"product__image"})},J=function(e){var t=e.product,n=t.title,a=t.logo,r=t.title_short;return/jpg|png/i.test(a)||(a="https://placekitten.com/200/300"),c.a.createElement("a",{href:"#!",className:"product__link animate__animated animate__flipInY"},c.a.createElement(U,{src:a,alt:r}),c.a.createElement("p",{className:"product__title"},n))},W=function(){var e=Object(o.b)(),t=Object(u.g)(),n=Object(u.h)(),r=new URLSearchParams(n.search),l=r.get("filterByCity")||"",i=r.get("filterByActivity")||"",s=Object(o.c)(F),m=Object(o.c)(x),d=Object(o.c)(D),p=Object(a.useState)(!1),f=Object(P.a)(p,2),_=f[0],E=f[1],v=Object(a.useState)(!1),b=Object(P.a)(v,2),h=b[0],g=b[1];Object(a.useEffect)((function(){e(y(l)),e(N(i))}),[e,l,i]);var O=function(n){_&&(E(!1),e(y(n)),r.set("filterByCity",n),""===n&&r.delete("filterByCity"),t.push({search:r.toString()})),h&&(g(!1),e(N(n)),r.set("filterByActivity",n),""===n&&r.delete("filterByActivity"),t.push({search:r.toString()}))};return c.a.createElement("div",{className:"products"},c.a.createElement("div",{className:"products__filters"},c.a.createElement("div",{className:"products__filter"},c.a.createElement("div",{className:H()("products__dropdown",{"products__dropdown--active":_}),onClick:function(){E(!_),g(!1)}},l||"\u0413\u043e\u0440\u043e\u0434"),c.a.createElement("ul",{className:H()("products__dropdown-list",{"products__dropdown-list--active":_})},c.a.createElement("li",{className:H()("products__dropdown-item",{"products__dropdown-item--active":""===l}),onClick:function(){return O("")}}),m.map((function(e){return c.a.createElement("li",{className:H()("products__dropdown-item",{"products__dropdown-item--active":e===l}),onClick:function(){return O(e)},key:e},e)})))),c.a.createElement("div",{className:"products__filter"},c.a.createElement("div",{className:H()("products__dropdown",{"products__dropdown--active":h}),onClick:function(){g(!h),E(!1)}},i||"\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),c.a.createElement("ul",{className:H()("products__dropdown-list",{"products__dropdown-list--active":h})},c.a.createElement("li",{className:H()("products__dropdown-item",{"products__dropdown-item--active":""===i}),onClick:function(){return O("")}}),d.map((function(e){return c.a.createElement("li",{className:H()("products__dropdown-item",{"products__dropdown-item--active":e===i}),onClick:function(){return O(e)},key:e},e)}))))),s.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"products__list"},s.map((function(e){return c.a.createElement("li",{className:"product__item",key:e.title,onClick:function(n){return function(e,n){e.preventDefault(),t.push("/clubs/".concat(n)),window.scrollTo(0,0)}(n,e.title_short)}},c.a.createElement(J,{product:e}))})))):c.a.createElement("div",null,c.a.createElement("span",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0435 \u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430")))},q=function(){var e=Object(u.g)();return c.a.createElement("button",{type:"button",className:"product-details__button-back button-back",onClick:function(){return e.goBack()}},"Back")},z=function(){return c.a.createElement("div",{className:"lds-spinner"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))},K=function(e){var t=e.label,n=e.link,a=e.isLast;return c.a.createElement("li",{className:"breadcrumbs__item"},c.a.createElement("span",{className:"breadcrumbs__arrow"}),a?c.a.createElement("span",{className:"breadcrumbs__last"},t):c.a.createElement(i.c,{to:n,className:"breadcrumbs__link",activeClassName:"breadcrumbs__link--active"},t))},Q=function(){var e=Object(u.h)(),t=Object(a.useMemo)((function(){return e.pathname.split("/").slice(1)}),[e]),n=Object(a.useMemo)((function(){return t.reduce((function(e,t){return[].concat(Object(I.a)(e),["".concat(e,"/").concat(t)])}),[])}),[t]);return c.a.createElement("ul",{className:"breadcrumbs"},c.a.createElement(i.c,{to:"/",className:"breadcrumbs__item breadcrumbs__home",activeClassName:"breadcrumb__link--active"}),n.map((function(e,a){return c.a.createElement(K,{label:t[a],link:e,key:e,isLast:a===n.length-1})})))},X=function(){var e=Object(o.c)(R),t=Object(o.c)(B);return c.a.createElement("div",{className:"container"},t?c.a.createElement("p",null,t):c.a.createElement(c.a.Fragment,null,e?c.a.createElement(z,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(Q,null),c.a.createElement(q,null),c.a.createElement("h1",{className:"page__title"},"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u043e\u043d\u043b\u0430\u0439\u043d"),c.a.createElement(W,null))))},Z=(n(45),function(){var e=Object(u.i)().productId,t=Object(o.c)(L),n=Object(a.useState)(),r=Object(P.a)(n,2),l=r[0],i=r[1];return Object(a.useEffect)((function(){if(t.length){var n=t.find((function(t){return t.title_short===e}));i(n)}}),[t,e]),l&&!/jpg|png/i.test(l.logo)&&(l.logo="https://placekitten.com/200/300"),c.a.createElement(c.a.Fragment,null,l&&c.a.createElement("div",{className:"container"},c.a.createElement(Q,null),c.a.createElement("div",{className:"product__details"},c.a.createElement("div",{className:"product__info"},c.a.createElement("img",{className:"product__logo",src:l.logo,alt:l.title_short}),c.a.createElement("p",{className:"product__title"},l.title),c.a.createElement("a",{href:l.link,className:"product__outer-link",target:" _blank"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442")),c.a.createElement("div",{className:"product__activity activity"},c.a.createElement("h2",{className:"activity__title"},"\u0412\u0438\u0434\u044b \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a"),c.a.createElement("ul",{className:"activity__list"},l.activity.map((function(e){return c.a.createElement("li",{className:"activity__item",key:e.title},c.a.createElement("span",{className:"activity__text"},e.title))})))))))}),$=(n(46),function(){var e=Object(u.g)();return c.a.createElement("div",{className:"notfound"},c.a.createElement("div",{className:"notfound__message"},c.a.createElement("h2",{className:"notfound__message-title"},"Oops!"),c.a.createElement("p",{className:"notfound__message-text"},"We can't seem to find the page you're looking for"),c.a.createElement("button",{type:"button",className:"notfound__link",onClick:function(){return e.push("/")}},"Back to Main Page")))}),ee=function(){var e=Object(a.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return c.a.createElement("button",{type:"button","aria-label":"Back to top",className:"back-top-button",onClick:e})},te=function(){var e=Object(o.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var n,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j("")),t({type:"START_LOADING"}),e.prev=2,n={},a={},e.next=7,v();case 7:(c=e.sent).forEach((function(e){n[e.city.title]=!0,e.activity.forEach((function(e){return a[e.title]=!0}))})),t(b(c)),t({type:"SET_CITY_LIST",cities:Object.keys(n)}),t({type:"SET_ACTIVITY_LIST",activities:Object.keys(a)}),t({type:"FINISH_LOADING"}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),t(j(e.t0.message)),t({type:"FINISH_LOADING"});case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),c.a.createElement("div",{className:"app"},c.a.createElement("main",{className:"main"},c.a.createElement(u.d,null,c.a.createElement(u.a,{from:"/home",to:"/"}),c.a.createElement(u.b,{path:"/",exact:!0},c.a.createElement(G,null)),c.a.createElement(u.b,{path:"/:productType/:productId"},c.a.createElement(Z,null)),c.a.createElement(u.b,{path:"/clubs"},c.a.createElement(X,null)),c.a.createElement(u.b,{component:$})),c.a.createElement(ee,null)))};l.a.render(c.a.createElement(o.a,{store:M},c.a.createElement(i.a,null,c.a.createElement(te,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.03f99bf6.chunk.js.map