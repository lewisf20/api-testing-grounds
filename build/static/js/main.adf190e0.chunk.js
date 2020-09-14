(this["webpackJsonpapi-testing-grounds"]=this["webpackJsonpapi-testing-grounds"]||[]).push([[0],{126:function(e,a,t){e.exports={App:"App_App__JpWEK"}},127:function(e,a,t){e.exports={Navigation:"Navigation_Navigation__id06P"}},133:function(e,a,t){e.exports={searchBar:"SearchBar_searchBar__16dJF"}},143:function(e,a,t){e.exports=t(367)},148:function(e,a,t){},30:function(e,a,t){e.exports={container:"MovieDetails_container__1EB-T",bgImage:"MovieDetails_bgImage__1DY8M",movieContainer:"MovieDetails_movieContainer___abwS",poster:"MovieDetails_poster__3Q5Qt",details:"MovieDetails_details__355Hw",overview:"MovieDetails_overview__2AJb-",ratings:"MovieDetails_ratings__1e-DW",backBtn:"MovieDetails_backBtn__1I0aL"}},36:function(e,a,t){e.exports={container:"Article_container__3aZVs",Article:"Article_Article__2hw8u",mainImage:"Article_mainImage__11VyL",details:"Article_details__33Fsr",date:"Article_date__1r_gf",contributor:"Article_contributor__14REL",body:"Article_body__2kC7D",backBtn:"Article_backBtn__21b_T"}},367:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),o=t.n(c),i=(t(148),t(19)),l=t(126),s=t.n(l),u=t(11),m=t(16),d=t(127),p=t.n(d),b=t(398),v=t(59),g=t.n(v),h=t(84),E=t.n(h),_=t(128),f=t.n(_),y=function(e){var a=e.title;return Object(n.useEffect)((function(){a("API Testing Grounds")}),[a]),r.a.createElement("div",{className:g.a.HomeContainer},r.a.createElement(f.a,{className:g.a.particles,params:{particles:{color:{value:"#F4B23F"},size:{random:!0,value:8},number:{value:50,density:{enable:!1,value_area:400}},move:{direction:"none",enable:!0,outMode:"bounce",random:!0,speed:4,straight:!1},shape:{type:["star"]},line_linked:{enable:!0,distance:100,color:"#3498db",opacity:1,width:5},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}}}}}),r.a.createElement("div",{style:{display:"flex",height:"70px",flexDirection:"column",justifyContent:"space-between",marginTop:"3rem"}},r.a.createElement(E.a,{strings:["<h1>Made By Lewis Frater</h1>"],typeSpeed:40,showCursor:!1}),r.a.createElement(E.a,{strings:["<p>This ReactJS web application has been created to test different APIs on the internet.<p>"],typeSpeed:20,showCursor:!1,startDelay:1500,style:{fontWeight:"bold"}})),r.a.createElement("div",{style:{marginTop:"2rem"}},r.a.createElement("h2",null,"List of Current APIs"),r.a.createElement("ul",null,r.a.createElement(i.b,{to:"/guardian"},r.a.createElement(b.a,{color:"secondary",variant:"contained",className:g.a.btn},"Guardian")),r.a.createElement(i.b,{to:"/movies"},r.a.createElement(b.a,{color:"primary",variant:"contained",className:g.a.btn},"MovieDB")))))},S=t(134),j=t(405),C=function(e){var a=r.a.useState(null),t=Object(u.a)(a,2),n=t[0],c=t[1],o=function(){c(!1)};return r.a.createElement("div",null,r.a.createElement(b.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},variant:"outlined",color:"primary"},"API"),r.a.createElement(S.a,{id:"simple-menu",anchorEl:n,open:Boolean(n),onClose:o},e.children.map((function(e,a){return r.a.createElement(j.a,{key:a,onClick:o},e)}))))},N=t(87),O=t.n(N),k=t(402),w=t(88),A=t.n(w),I=t(403),D=function(e){return r.a.createElement("div",{className:A.a.Header},r.a.createElement("div",{className:A.a.SearchContainer},r.a.createElement(I.a,{type:"search",name:"search",value:e.searchString,onChange:function(a){return e.setSearch(a.target.value)},onKeyPress:function(a){return e.handleKeyPress(a.key)}}),r.a.createElement(b.a,{type:"submit",onClick:function(){e.setLoading(!0),e.search()}},"Search"),r.a.createElement(I.a,{id:"select",label:"Results",value:e.pages,select:!0,onChange:function(a){return e.setPages(a.target.value)}},r.a.createElement(j.a,{value:"10"},"10"),r.a.createElement(j.a,{value:"25"},"25"),r.a.createElement(j.a,{value:"50"},"50"))))},P=t(89),x=t.n(P),B=function(e){var a=r.a.createElement("div",{className:x.a.GuardianArticle},r.a.createElement("img",{src:e.thumbnail,alt:"header thumbnail"}),r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:x.a.date},new Date(e.date).toDateString()));return r.a.createElement(r.a.Fragment,null,a)},M=function(e){var a=e.title,t=Object(n.useState)(""),c=Object(u.a)(t,2),o=c[0],l=c[1],s=Object(n.useState)([]),m=Object(u.a)(s,2),d=m[0],p=m[1],b=Object(n.useState)(!1),v=Object(u.a)(b,2),g=v[0],h=v[1],E=Object(n.useState)(10),_=Object(u.a)(E,2),f=_[0],y=_[1],S=function(){var e="https://content.guardianapis.com/"+"search?q=".concat(o,"&page-size=").concat(f,"&").concat("show-fields=body,thumbnail","&api-key=").concat("5bd03a8d-2c35-4971-859b-837a8d866c88");fetch(e).then((function(e){return e.json()})).then((function(e){var a=e.response.results;p(a),h(!1)}),(function(e){console.err(e)})).catch((function(e){console.error(e)}))},j=Object(n.useCallback)((function(){localStorage.setItem("response",JSON.stringify(d))}),[d]);Object(n.useEffect)((function(){return a("Guardian API"),function(){if(null===localStorage.getItem("response"))localStorage.setItem("response",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("response"));p(e)}}(),function(){console.log("Guardian page cleanup...")}}),[a]),Object(n.useEffect)((function(){return console.log("Guardian page didupdate"),function(){j()}}),[d,j]);var C=d.map((function(e,a){return r.a.createElement(i.b,{key:e.id,to:{pathname:"/guardian/".concat(e.id)}},r.a.createElement(B,{title:e.webTitle,url:e.webUrl,tag:e.sectionName,date:e.webPublicationDate,thumbnail:e.fields.thumbnail,body:e.fields.body}))}));return g&&(C=r.a.createElement(k.a,{size:80,color:"secondary"})),r.a.createElement("div",{className:O.a.GuardianContainer},r.a.createElement(D,{searchString:o,setSearch:l,search:S,setLoading:h,setPages:y,pages:f,handleKeyPress:function(e){"Enter"===e&&(h(!0),S())}}),r.a.createElement("div",{className:O.a.ArticleContainer},C))},T=t(36),H=t.n(T),G=function(e){var a=Object(m.f)().pathname.substring(9),t="5bd03a8d-2c35-4971-859b-837a8d866c88",c="https://content.guardianapis.com/",o=Object(n.useState)({}),l=Object(u.a)(o,2),s=l[0],d=l[1],p=Object(n.useState)(!1),v=Object(u.a)(p,2),g=v[0],h=v[1];return Object(n.useEffect)((function(){var e=c+a+"?show-fields=body,thumbnail&show-tags=contributor&api-key=".concat(t);return fetch(e).then((function(e){return e.json()})).then((function(e){var a=e.response.content;0===a.tags.length&&h(!0),d(a)})).catch((function(e){console.error(e),h(!0)})),function(){console.log("Article cleanup..."),d({})}}),[t,c,a]),r.a.createElement("div",{className:H.a.container},r.a.createElement("div",{className:H.a.backBtn},r.a.createElement(i.b,{to:{pathname:"/guardian"}},r.a.createElement(b.a,{color:"secondary",variant:"contained"},"Back"))),r.a.createElement("div",{className:H.a.Article},s.fields?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:s.fields.thumbnail,alt:"main pic for article",className:H.a.mainImage}),r.a.createElement("h1",null,s.webTitle),r.a.createElement("hr",{style:{width:"100%",margin:"1.5rem 0"}}),r.a.createElement("div",{className:H.a.details},r.a.createElement("p",{className:H.a.contributor},"By"," ",g?"unknown":r.a.createElement("a",{href:s.tags[0].webUrl,target:"_blank",rel:"noopener noreferrer"},s.tags[0].webTitle)),r.a.createElement("p",{className:H.a.date},new Date(s.webPublicationDate).toDateString())),r.a.createElement("hr",{style:{width:"100%",margin:"1.5rem 0 2rem 0"}}),r.a.createElement("div",{className:H.a.body,dangerouslySetInnerHTML:{__html:s.fields.body}})):r.a.createElement(k.a,{size:80,color:"secondary"})))},L=t(72),z=t.n(L),J=t(133),K=t.n(J),W=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),c=t[0],o=t[1],i=r.a.createElement(I.a,{id:"outlined-basic",label:"Search",variant:"outlined",value:e.searchString,onChange:function(a){return e.setSearchString(a.target.value)},onKeyPress:function(a){return e.handleKeyPress(a.key)}});return c&&(i=r.a.createElement(I.a,{id:"outlined-basic",error:!0,label:"Search",helperText:"Enter at least 1 character",variant:"outlined",value:e.searchString,onChange:function(a){return e.setSearchString(a.target.value)},onKeyPress:function(a){return e.handleKeyPress(a.key)}})),r.a.createElement("div",{className:K.a.searchBar},i,r.a.createElement(b.a,{color:"primary",variant:"contained",onClick:function(){""===e.searchString?o(!0):e.search()}},"Search"))},F=t(52),R=t.n(F),U=t(40),q=t(41),Z=function(e){var a=e.title,t=e.voteCount,c=e.rating,o=e.imagePath,i=Object(n.useState)(!0),l=Object(u.a)(i,2),s=l[0],m=l[1],d=Object(n.useState)(""),p=Object(u.a)(d,2),b=p[0],v=p[1];Object(n.useEffect)((function(){var e,a="https://image.tmdb.org/t/p/w300"+o;return o?e=setTimeout((function(){fetch(a).then((function(e){v(e.url),m(!1)})).catch((function(e){console.error(e)}))}),1e3):m(!1),function(){clearTimeout(e)}}),[o]);var g=r.a.createElement("div",{className:R.a.wrapper},r.a.createElement("div",{className:R.a.container,style:{background:""!==b?"url(".concat(b,")"):"#fff",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},""!==b?null:r.a.createElement("h1",{style:{margin:"auto 0"}},"Image N/A")),r.a.createElement("div",{className:R.a.titleWrapper},r.a.createElement("h2",null,a),r.a.createElement("div",{className:R.a.details},r.a.createElement("span",null,r.a.createElement(U.a,{icon:q.d,color:"black"}),r.a.createElement("p",null,t)),r.a.createElement("span",null,r.a.createElement(U.a,{icon:q.c,color:"gold"}),r.a.createElement("p",null,c)))));return s&&(g=r.a.createElement("div",{className:R.a.container,style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(k.a,{size:80,color:"primary"}))),g},Q=t(404),V=function(e){var a="85b5dfa8b56be6ec21b54aabe6845631",t="https://api.themoviedb.org/3/",c=e.title,o=Object(n.useState)(""),l=Object(u.a)(o,2),s=l[0],m=l[1],d=Object(n.useState)([]),p=Object(u.a)(d,2),b=p[0],v=p[1],g=Object(n.useState)(!1),h=Object(u.a)(g,2),E=h[0],_=h[1],f=Object(n.useState)(10),y=Object(u.a)(f,2),S=y[0],j=y[1],C=Object(n.useState)(1),N=Object(u.a)(C,2),O=N[0],w=N[1],A=function(){_(!0);var e=t+"search/movie?query=".concat(s,"&api_key=").concat(a,"&page=1");fetch(e).then((function(e){return e.json()})).then((function(e){var a=e.results;j(1),_(!1),v(a)})).catch((function(e){console.error(e)}))};Object(n.useEffect)((function(){c("The MovieDB API ");var e="".concat(t,"discover/movie?api_key=").concat(a,"&include_adult=false&language=en-US&sort_by=vote_count.desc&page=").concat(O);fetch(e).then((function(e){return e.json()})).then((function(e){var a=e.results;j(e.total_pages),v(a)})).catch((function(e){console.error(e)}))}),[c,a,O,t]);var I=b.map((function(e,a){return r.a.createElement(i.b,{key:e.id,to:{pathname:"/movies/".concat(e.id)}},r.a.createElement(Z,{id:e.id,title:e.title,voteCount:e.vote_count,rating:e.vote_average,imagePath:e.poster_path}))}));return E&&(I=r.a.createElement(k.a,{size:80,color:"primary"})),r.a.createElement("div",{className:z.a.container},r.a.createElement(W,{searchString:s,setSearchString:m,search:A,handleKeyPress:function(e){"Enter"===e&&(_(!0),A())}}),r.a.createElement("div",{className:z.a.movieList},I),r.a.createElement("div",{className:z.a.pagination},r.a.createElement(Q.a,{count:S,color:"primary",page:O,onChange:function(e,a){w(a),window.scrollTo({top:0})}})))},X=t(30),Y=t.n(X),$=function(e){var a="85b5dfa8b56be6ec21b54aabe6845631",t="https://api.themoviedb.org/3/",c=Object(m.f)().pathname.substring(8),o=Object(n.useState)(null),l=Object(u.a)(o,2),s=l[0],d=l[1],p=Object(n.useState)(!0),v=Object(u.a)(p,2),g=v[0],h=v[1];Object(n.useEffect)((function(){var e=t+"movie/".concat(c,"?api_key=").concat(a);fetch(e).then((function(e){return e.json()})).then((function(e){var a=e;console.log(a),d(e),h(!1)})).catch((function(e){console.error(e)}))}),[t,a,c]);var E=r.a.createElement("div",{className:Y.a.container},r.a.createElement(k.a,{size:80,color:"primary"}));return g||(E=r.a.createElement("div",{className:Y.a.container},r.a.createElement("div",{className:Y.a.backBtn},r.a.createElement(i.b,{to:{pathname:"/movies"}},r.a.createElement(b.a,{color:"secondary",variant:"contained"},"Back"))),r.a.createElement("div",{className:Y.a.bgImage,style:{background:"url(https://image.tmdb.org/t/p/original".concat(s.backdrop_path,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundAttachment:"fixed"}}),r.a.createElement("div",{className:Y.a.movieContainer},r.a.createElement("div",{className:Y.a.poster},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(s.poster_path),alt:"movie poster"})),r.a.createElement("div",{className:Y.a.details},r.a.createElement("h1",{style:{color:"white"}},s.original_title),r.a.createElement("span",{style:{fontSize:"16px",color:"#fff"}},'"',s.tagline,'"'),r.a.createElement("p",{className:Y.a.overview},r.a.createElement("span",{style:{textDecoration:"underline",marginTop:"1rem",lineHeight:"3",fontWeight:"bolder"}},"Description"),r.a.createElement("br",null),s.overview),r.a.createElement("div",{className:Y.a.ratings},r.a.createElement("span",null,r.a.createElement(U.a,{icon:q.a}),r.a.createElement("br",null),s.release_date),r.a.createElement("span",null,r.a.createElement(U.a,{icon:q.b}),r.a.createElement("br",null),s.runtime,"m"),r.a.createElement("span",null,r.a.createElement(U.a,{icon:q.c,color:"gold"}),r.a.createElement("br",null),s.vote_average,"/10"),r.a.createElement("span",null,r.a.createElement(U.a,{icon:q.d}),r.a.createElement("br",null),s.vote_count)))))),E},ee=function(e){var a=Object(n.useState)("API Testing Grounds"),t=Object(u.a)(a,2),c=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:p.a.Navigation},r.a.createElement(i.b,{to:"/",style:{color:"royalblue"}},r.a.createElement(b.a,{variant:"outlined",color:"primary"},"Home")),r.a.createElement("h1",null,c),r.a.createElement(C,null,r.a.createElement(i.b,{to:"/guardian",style:{color:"royalblue"}},"Guardian API"),r.a.createElement(i.b,{to:"/movies",style:{color:"royalblue"}},"MovieDB API"))),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/guardian/:id"},r.a.createElement(G,null)),r.a.createElement(m.a,{exact:!0,path:"/guardian"},r.a.createElement(M,{title:o})),r.a.createElement(m.a,{path:"/movies/:id"},r.a.createElement($,null)),r.a.createElement(m.a,{exact:!0,path:"/movies"},r.a.createElement(V,{title:o})),r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(y,{title:o}))))};var ae=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:s.a.App},r.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){e.exports={container:"MovieCard_container__9gbXU",details:"MovieCard_details__3M1nZ",wrapper:"MovieCard_wrapper__1hNEL",titleWrapper:"MovieCard_titleWrapper__R7I_B"}},59:function(e,a,t){e.exports={HomeContainer:"HomeContainer_HomeContainer__3q5fD",projectDetail:"HomeContainer_projectDetail__36qjt",btn:"HomeContainer_btn__23kyk",particles:"HomeContainer_particles__IfH1Q"}},72:function(e,a,t){e.exports={container:"MovieContainer_container__3uCfN",movieList:"MovieContainer_movieList__3m_Hk",pagination:"MovieContainer_pagination__3J9UN"}},87:function(e,a,t){e.exports={GuardianContainer:"GuardianContainer_GuardianContainer__2SzUa",ArticleContainer:"GuardianContainer_ArticleContainer__3W7EZ"}},88:function(e,a,t){e.exports={SearchContainer:"Header_SearchContainer__3g13o",NumberInput:"Header_NumberInput__7ojNf"}},89:function(e,a,t){e.exports={GuardianArticle:"Card_GuardianArticle__28w5Z",tag:"Card_tag__2nbjK",date:"Card_date__6Fi6r",ArticleContainer:"Card_ArticleContainer__3scoP"}}},[[143,1,2]]]);
//# sourceMappingURL=main.adf190e0.chunk.js.map