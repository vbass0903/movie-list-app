(this["webpackJsonpmovie-list-app"]=this["webpackJsonpmovie-list-app"]||[]).push([[0],{60:function(e,n,t){},61:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),i=t(10),a=t.n(i),o=(t(60),t(16)),s=(t(61),t(73)),u=t(107),l=t(2),j=function(e){var n=e.curScreen,t=e.onChange;return Object(l.jsx)(u.a,{color:"primary","aria-label":"button group",children:"list"===n?Object(l.jsx)(s.a,{onClick:function(){return t("plan")},children:"Plan to Watch"}):Object(l.jsx)(s.a,{onClick:function(){return t("list")},children:"Movie List"})})},h=function(e){var n=e.curScreen,t=e.onChange;return Object(l.jsxs)("div",{className:"Header",children:["list"===n?Object(l.jsx)("h1",{className:"Banner",children:"Movie List"}):Object(l.jsx)("h1",{className:"Banner",children:"Plan To Watch"}),Object(l.jsx)(j,{curScreen:n,onChange:t})]})},d=t(44),b=t(13),p=t.n(b),f=t(19),v=t(113),x=function(e){var n=e.onSearch,t=e.onChange;return Object(l.jsxs)("div",{className:"SearchBar",children:[Object(l.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),n()},className:"SearchBarItem",children:Object(l.jsx)(v.a,{id:"filled-basic",label:"Search for a Movie",variant:"filled",onChange:t})}),Object(l.jsx)(s.a,{onClick:n,color:"primary",variant:"contained",children:"Search"})]})},O=function(e){var n=e.result,t=e.onAdd;return Object(l.jsxs)("div",{className:"Result",children:[Object(l.jsx)("img",{src:n.Poster,alt:"Result poster"}),Object(l.jsx)("h4",{children:n.Title}),Object(l.jsx)("h4",{children:n.Year}),Object(l.jsx)(s.a,{onClick:function(){return t(n.imdbID)},color:"primary",variant:"contained",children:"Add"})]})},m=(t.p,function(e){var n=e.inResults,t=e.onAdd;return Object(l.jsx)("div",{className:"ResultRow",children:n.map((function(e,n){return Object(l.jsx)(O,{result:e,onAdd:t},n)}))})}),M=function(e){var n=e.onSearch,t=e.inResults,r=e.onChange,c=e.onAdd;return Object(l.jsxs)("div",{className:"SearchArea",children:[Object(l.jsx)(x,{onSearch:n,onChange:r}),t.length>0?Object(l.jsx)(m,{inResults:t,onAdd:c}):Object(l.jsx)("h3",{children:"No Results"})]})},S=function(e){var n=e.onSort,t=Object(r.useState)(["none","none","none","none"]),c=Object(o.a)(t,2),i=c[0],a=c[1],s=function(e){a("Title"===e?["1px solid white","none","none","none"]:"Year"===e?["none","1px solid white","none","none"]:"Director"===e?["none","none","1px solid white","none"]:["none","none","none","1px solid white"]),n(e)};return Object(l.jsxs)("div",{className:"CategoryList",children:[Object(l.jsx)("h3",{children:"Poster"}),Object(l.jsx)("h3",{style:{border:i[0],cursor:"pointer",textDecoration:"underline"},onClick:function(){return s("Title")},children:"Title"}),Object(l.jsx)("h3",{style:{border:i[1],cursor:"pointer",textDecoration:"underline"},onClick:function(){return s("Year")},children:"Year"}),Object(l.jsx)("h3",{style:{border:i[2],cursor:"pointer",textDecoration:"underline"},onClick:function(){return s("Director")},children:"Director"}),Object(l.jsx)("h3",{children:"Genre"}),Object(l.jsx)("h3",{children:"Actors"}),Object(l.jsx)("h3",{style:{border:i[3],cursor:"pointer",textDecoration:"underline"},onClick:function(){return s("Metascore")},children:"Metascore"})]})},g=function(e){var n=e.inText;return Object(l.jsx)("h4",{children:n})},D=t(112),C=t(48),k=t.n(C),w=t(111),y=Object(w.a)((function(e){return{root:{"& > *":{margin:e.spacing(5)}}}})),N=function(e){var n=e.inMovie,t=e.onDelete,r=y(),c=n.Genre.split(","),i=n.Director.split(","),a=n.Actors.split(",");n.Language.split(",");return Object(l.jsxs)("div",{className:"Movie",children:[Object(l.jsx)("img",{src:n.Poster,alt:"Movie Poster"}),Object(l.jsx)("h4",{children:n.Title}),Object(l.jsx)("h4",{children:n.Year}),Object(l.jsx)("div",{className:"DataList",children:i.map((function(e,n){return Object(l.jsx)(g,{inText:e},n)}))}),Object(l.jsx)("div",{className:"DataList",children:c.map((function(e,n){return Object(l.jsx)(g,{inText:e},n)}))}),Object(l.jsx)("div",{className:"DataList",children:a.map((function(e,n){return Object(l.jsx)(g,{inText:e},n)}))}),Object(l.jsx)("h4",{children:n.Metascore}),Object(l.jsx)(D.a,{className:r.root,color:"default",onClick:function(){return t(n.imdbID)},"aria-label":"delete",children:Object(l.jsx)(k.a,{size:"large"})})]})},T=function(e){var n=e.inMovies,t=e.onDelete;return Object(l.jsx)("div",{children:n.map((function(e,n){return Object(l.jsx)(N,{inMovie:e,onDelete:t},e.imdbID)}))})},P=function(e){var n=e.inMovies,t=e.onDelete,r=e.onSort;return Object(l.jsxs)("div",{className:"MovieTable",children:[Object(l.jsx)(S,{onSort:r}),Object(l.jsx)(T,{inMovies:n,onDelete:t})]})},A=function(e){var n=e.inMovies,t=e.onDelete,r=e.onSort;return Object(l.jsxs)("div",{className:"MovieTable",children:[Object(l.jsx)(S,{onSort:r}),Object(l.jsx)(T,{inMovies:n,onDelete:t})]})},L=function(e){var n=e.inMovies,t=(e.inPlanMovies,function(e,n){for(var t=[],r=0;r<e.length;r++)t.push(e[r][n]);return function(e){var n,t={},r=0;return e.forEach((function(e){t[e]=(t[e]||0)+1,r<t[e]&&(r=t[e],n=e)})),+n}(t)});return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:t(n,"Year")}),Object(l.jsx)("h3",{children:t(n,"Director")}),Object(l.jsx)("h3",{children:t(n,"Rated")})]})},R=function(e){var n=e.inMovies,t=e.inPlanMovies;return Object(l.jsx)("div",{children:Object(l.jsx)(L,{inMovies:n,inPlanMovies:t})})},E=function(e){var n=e.inScreen,t=Object(r.useState)([]),c=Object(o.a)(t,2),i=c[0],a=c[1],s=Object(r.useState)([]),u=Object(o.a)(s,2),j=u[0],h=u[1],b=Object(r.useState)([]),v=Object(o.a)(b,2),x=v[0],O=v[1],m=Object(r.useState)(""),S=Object(o.a)(m,2),g=S[0],D=S[1];Object(r.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var n,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("list");case 2:return n=e.sent,a(n),e.next=6,C("plan");case 6:t=e.sent,h(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=function(){var e=Object(f.a)(p.a.mark((function e(n){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/".concat(n,"Movies"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,console.log(r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(g.length>0)){e.next=5;break}return e.next=3,fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+g+"&page=1&type=movie&r=json",{method:"GET",headers:{"x-rapidapi-key":"e786be2e11msh733b0cf04d5f561p1b8ce3jsn82282c3ec453","x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){e.Search.forEach((function(e){return w(e)})),O(e.Search)}));case 3:e.next=6;break;case 5:O([]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){"N/A"===e.Poster&&(e.Poster="https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg")},y=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i="+t+"&r=json",{method:"GET",headers:{"x-rapidapi-key":"e786be2e11msh733b0cf04d5f561p1b8ce3jsn82282c3ec453","x-rapidapi-host":"movie-database-imdb-alternative.p.rapidapi.com"}}).then((function(e){return e.json()})).then(function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(t),e.next=3,fetch("http://localhost:5000/".concat(n,"Movies"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 3:"list"===n?a([].concat(Object(d.a)(i),[t])):h([].concat(Object(d.a)(j),[t]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:O(x.filter((function(e){return e.imdbID!==t})));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/".concat(n,"Movies/").concat(t),{method:"DELETE"});case 2:"list"===n?a(i.filter((function(e){return e.imdbID!==t}))):h(j.filter((function(e){return e.imdbID!==t})));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(n);case 2:r=e.sent,"Title"===t||"Director"===t?a(r.sort((function(e,n){var r=e[t].toUpperCase(),c=n[t].toUpperCase();return r<c?-1:r>c?1:0}))):"Year"===t?a(r.sort((function(e,n){return e.Year-n.Year}))):"Metascore"===t&&a(r.sort((function(e,n){return n.Metascore-e.Metascore})));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"Main",children:[Object(l.jsx)(M,{inResults:x,onChange:function(e){D(e.target.value)},onAdd:y,onSearch:k}),"list"===n?Object(l.jsx)(P,{inMovies:i,onDelete:N,onSort:T}):"plan"===n?Object(l.jsx)(A,{inMovies:j,onDelete:N,onSort:T}):Object(l.jsx)(R,{inMovies:i,inPlanMovies:j})]})};var I=function(){var e=Object(r.useState)("list"),n=Object(o.a)(e,2),t=n[0],c=n[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{curScreen:t,onChange:function(e){c(e)}}),Object(l.jsx)(E,{inScreen:t})]})},Y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,115)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),Y()}},[[71,1,2]]]);
//# sourceMappingURL=main.7ff908d6.chunk.js.map