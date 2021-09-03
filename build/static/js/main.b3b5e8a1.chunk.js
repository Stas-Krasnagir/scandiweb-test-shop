(this["webpackJsonpscandiweb-test-shop"]=this["webpackJsonpscandiweb-test-shop"]||[]).push([[0],{74:function(e,c,t){},75:function(e,c,t){},76:function(e,c,t){},87:function(e,c,t){},88:function(e,c,t){},89:function(e,c,t){"use strict";t.r(c);var n,r,a,i,s=t(2),o=t.n(s),l=t(41),d=t.n(l),u=(t(74),t(75),t(35)),j=t(11),b=t(19),O=(t(76),t(102)),m=t(39),h=t(101),p=Object(h.a)(n||(n=Object(m.a)(["\n  query {\n    categories {\n      name\n    }\n  }\n"]))),v=Object(h.a)(r||(r=Object(m.a)(["\n  query {\n    currencies\n  }\n"]))),f=Object(h.a)(a||(a=Object(m.a)(["\n  query {\n    category {\n      products {\n        id\n        name\n        inStock\n        gallery\n        description\n        category\n        attributes {\n          id\n          name\n          type\n          items {\n            displayValue\n            value\n            id\n          }\n        }\n        prices {\n          currency\n          amount\n        }\n        brand\n      }\n    }\n  }\n"]))),g=Object(h.a)(i||(i=Object(m.a)(["\n  query getOneProd($id: String!) {\n    product(id: $id) {\n      id\n      name\n      inStock\n      gallery\n      description\n      category\n      attributes {\n        id\n        name\n        type\n        items {\n          displayValue\n          value\n          id\n        }\n      }\n      prices {\n        currency\n        amount\n      }\n      brand\n    }\n  }\n"]))),x=t(27),y=t(28),N={currency:"USD"},S={category:"ALL"},_="SET_CATEGORY",E=t(3);function C(){var e=Object(x.b)(),c=Object(s.useState)([]),t=Object(b.a)(c,2),n=t[0],r=t[1],a=Object(s.useState)([]),i=Object(b.a)(a,2),o=i[0],l=i[1],d=Object(O.a)(p),j=d.data,m=d.loading,h=Object(O.a)(v),f=h.data,g=h.loading,y=Object(s.useState)("USD"),N=Object(b.a)(y,2),S=N[0],C=N[1],L=Object(s.useState)("ALL"),k=Object(b.a)(L,2),w=k[0],A=k[1];return Object(s.useEffect)((function(){e({type:"SET_CURRENCY",payload:S})}),[S]),Object(s.useEffect)((function(){e({type:_,payload:w})}),[w]),Object(s.useEffect)((function(){try{!m&&j&&l(j.categories.map((function(e){return e.name})))}catch(e){console.log("error is: "+e)}}),[j]),Object(s.useEffect)((function(){try{!g&&f&&r(f.currencies)}catch(e){console.log("error is: "+e)}}),[f]),Object(E.jsxs)("div",{className:"Navbar",children:[Object(E.jsx)("div",{className:"links_container",children:Object(E.jsxs)("div",{className:"categories_card",children:[Object(E.jsx)("button",{className:"categories_element",value:"ALL",onClick:function(){return A("ALL")},children:"ALL"}),o.map((function(e){return Object(E.jsx)("button",{className:"categories_element",value:e,onClick:function(){return A(e)},children:e.toUpperCase()})}))]})}),Object(E.jsx)(u.b,{to:"/",children:Object(E.jsx)("div",{className:"logo_container",children:"logo img"})}),Object(E.jsxs)("div",{className:"tools_container",children:[Object(E.jsx)("div",{children:"\u043a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(E.jsx)("div",{className:"currencies_card",children:Object(E.jsx)("select",{onChange:function(e){return C(e.target.value)},children:n.map((function(e){return Object(E.jsx)("option",{className:"currencies_element",value:e,children:e})}))})})]})]})}t(87);function L(){var e=Object(x.c)((function(e){return e.currency.currency})),c=Object(s.useState)(e),t=Object(b.a)(c,2),n=t[0],r=t[1],a=Object(x.c)((function(e){return e.category.category})),i=Object(s.useState)(a),o=Object(b.a)(i,2),l=o[0],d=o[1];Object(s.useEffect)((function(){r(e)}),[e]),Object(s.useEffect)((function(){d(a)}),[a]);var j=Object(O.a)(f),m=j.data,h=j.loading,p=Object(s.useState)([]),v=Object(b.a)(p,2),g=v[0],y=v[1];return Object(s.useEffect)((function(){try{!h&&m&&y(m.category.products.map((function(e){return e})))}catch(e){console.log("error is: "+e)}}),[m]),h?Object(E.jsx)("h1",{children:"Loading..."}):Object(E.jsxs)("div",{className:"home_page",children:[Object(E.jsx)("div",{className:"category",children:l}),Object(E.jsx)("div",{className:"home_page_products",children:g.filter((function(e){return"ALL"===l?e:e.category===l})).map((function(e){return Object(E.jsx)(u.b,{to:"/goods",onClick:function(){return c=e.id,void localStorage.setItem("ItemID",c);var c},children:Object(E.jsxs)("div",{className:"product_block",children:[Object(E.jsx)("img",{src:e.gallery[0],alt:"",height:150,width:150}),Object(E.jsxs)("div",{className:"product_name",children:[" ",e.name]}),Object(E.jsx)("div",{className:"currency_block",children:e.prices.map((function(e){if(e.currency===n)return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"currency_valuta",children:e.currency}),Object(E.jsx)("div",{className:"currency_amount",children:e.amount})]})}))})]})})}))})]})}t(88);function k(){var e=localStorage.getItem("ItemID"),c=Object(x.c)((function(e){return e.currency.currency})),t=Object(s.useState)(c),n=Object(b.a)(t,2),r=n[0],a=n[1];Object(s.useEffect)((function(){a(c)}),[c]);var i=Object(O.a)(g,{variables:{id:e}}),o=i.data,l=i.loading,d=Object(s.useState)(),u=Object(b.a)(d,2),j=u[0],m=u[1];return Object(s.useEffect)((function(){try{!l&&o&&(m(o.product),console.log(j))}catch(e){console.log("error is: "+e)}}),[o]),Object(E.jsxs)("div",{className:"product-page",children:[Object(E.jsxs)("div",{className:"product-imgs",children:[Object(E.jsx)("div",{className:"product-slider",children:null===j||void 0===j?void 0:j.gallery.map((function(e){return Object(E.jsx)("img",{src:e,alt:"",className:"product-slider-img"})}))}),Object(E.jsx)("div",{className:"main-img",children:Object(E.jsx)("img",{src:null===j||void 0===j?void 0:j.gallery[0],alt:"",className:"product-main-img"})})]}),Object(E.jsxs)("div",{className:"product-description",children:[Object(E.jsx)("div",{className:"product-name",children:null===j||void 0===j?void 0:j.name}),Object(E.jsx)("div",{className:"product-brand",children:null===j||void 0===j?void 0:j.brand}),Object(E.jsx)("div",{className:"product-attributes",children:null===j||void 0===j?void 0:j.attributes.map((function(e){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{children:e.name}),Object(E.jsx)("div",{children:e.type})]})}))}),Object(E.jsxs)("div",{className:"product-price-card",children:[Object(E.jsx)("div",{className:"product-price-title",children:"PRICE:"}),null===j||void 0===j?void 0:j.prices.filter((function(e){return e.currency===r})).map((function(e){return Object(E.jsxs)("div",{className:"price-block",children:[Object(E.jsx)("div",{className:"currency-price",children:e.currency}),Object(E.jsx)("div",{className:"amount-price",children:e.amount})]})}))]}),Object(E.jsx)("div",{className:"card-add-btn",children:"ADD TO CARD"}),Object(E.jsx)("div",{className:"product-info",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})]})}var w=t(63),A=t(64),I=t(67),D=t(66),R=function(e){Object(I.a)(t,e);var c=Object(D.a)(t);function t(){return Object(w.a)(this,t),c.apply(this,arguments)}return Object(A.a)(t,[{key:"render",value:function(){return Object(E.jsx)("div",{children:"CartPage"})}}]),t}(s.Component);var q=function(){return Object(E.jsxs)(u.a,{children:[Object(E.jsx)(C,{}),Object(E.jsxs)(j.d,{children:[Object(E.jsx)(j.b,{exact:!0,path:"/",component:L}),Object(E.jsx)(j.b,{path:"/goods",component:k}),Object(E.jsx)(j.b,{path:"/cart",component:R}),Object(E.jsx)(j.a,{to:"/"})]})]})},T=t(99),U=t(100),P=t(98),Y=t(57),F=Object(Y.a)({currency:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SET_CURRENCY":return Object(y.a)(Object(y.a)({},e),{},{currency:c.payload});default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case _:return Object(y.a)(Object(y.a)({},e),{},{category:c.payload});default:return e}}}),J=Object(Y.b)(F),V=new T.a({uri:"http://localhost:4000/qraphql",cache:new U.a});d.a.render(Object(E.jsx)(x.a,{store:J,children:Object(E.jsx)(P.a,{client:V,children:Object(E.jsx)(o.a.StrictMode,{children:Object(E.jsx)(q,{})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.b3b5e8a1.chunk.js.map