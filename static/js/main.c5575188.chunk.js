(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={hero_details_wrap:"hero_details_hero_details_wrap__3jF2B",nav_panel:"hero_details_nav_panel__44D0h",str:"hero_details_str__UxDHR",agi:"hero_details_agi__2Mtcj",int:"hero_details_int__pSWpt"}},13:function(e,t,a){e.exports={search:"styles_search__2ph8f",no_result:"styles_no_result__9B6u0",hero_icon:"styles_hero_icon__3ho2c",highlight:"styles_highlight__1PgBp"}},17:function(e,t,a){e.exports={wrap:"heroesListContainer_wrap__Gh1RG",loader:"heroesListContainer_loader__X0bRi",loading:"heroesListContainer_loading__EB364"}},29:function(e,t,a){e.exports={heroes_list:"heroes_list_heroes_list__t9hnE"}},34:function(e,t,a){e.exports=a(48)},39:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),i=(a(39),a(6)),s=a(7),l=a(11),u=a(8),h=a(10),p=a(5),m=a(26),_=a.n(m),d=a(32),v="FETCHING_HEROES_LIST_SUCCESS",E="GET_ACTIVE_HERO",f=[];var g=a(27),b=Object(p.d)(Object(p.c)({heroesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(d.a)(t.payload);default:return e}},activeHero:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.payload;default:return e}}}),{},Object(p.a)(_.a,g.a)),j="https://api.opendota.com",O=b,H=a(49),y=a(29),L=a.n(y),N=a(33),k=a(21),w=a.n(k),x=a(30),C=function(){return function(){var e=Object(x.a)(w.a.mark(function e(t){var a,n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/heroStats/"));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,r=t({type:v,payload:n}),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()},S=function(e){return localStorage.setItem("hero",e.id),{type:E,payload:e}},A=a(13),I=a.n(A),R=a(9);var D=Object(R.b)(function(e){return{heroesList:e.heroesList,activeHero:e.activeHero}},function(e){return Object(p.b)({getActiveHero:S},e)})(function(e){var t=Object(n.useState)(""),a=Object(N.a)(t,2),c=a[0],o=a[1],i=new RegExp(c,"gi"),s=e.heroesList.filter(function(e){return i.test(e.localized_name)});console.log(s);var l=s.map(function(e){var t=e.localized_name.replace(i,"<span class=".concat(I.a.highlight,">").concat(c,"</span>"));return r.a.createElement("li",{key:e.id,onClick:function(){return localStorage.setItem("hero",e.id)}},r.a.createElement(H.a,{to:"/hero/".concat(e.id)},r.a.createElement("span",{className:"country",dangerouslySetInnerHTML:{__html:"".concat(t)}}),r.a.createElement("img",{src:"https://api.opendota.com".concat(e.icon),className:I.a.hero_icon,alt:"icon"})))}),u=r.a.createElement("li",{className:I.a.no_result},"No results");return r.a.createElement("section",{className:I.a.search},r.a.createElement("input",{placeholder:"Hero name",type:"text",value:c,onChange:function(e){return o(e.target.value)}}),""!==c?r.a.createElement("ul",{className:I.a.hero_search_result}," ",s.length>0?l:u):null)}),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderHeroesList=function(){return a.props.heroesList.map(function(e){return r.a.createElement(H.a,{key:e.id,to:"/hero/".concat(e.id)},r.a.createElement("li",{onClick:function(){return a.props.getActiveHero(e)}},r.a.createElement("img",{src:"".concat(j).concat(e.img),alt:"hero icon"}),r.a.createElement("div",null,e.localized_name)))})},a.state={},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:L.a.heroes_list},r.a.createElement(D,null),r.a.createElement("div",null,r.a.createElement("h1",null,"Hero List")),r.a.createElement("ul",null,this.renderHeroesList()))}}]),t}(n.Component),T=a(17),z=a.n(T),F=(a(46),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getHeroesList()}},{key:"render",value:function(){return this.props.heroesList.length>0?r.a.createElement(B,{className:z.a.heroes_list,heroesList:this.props.heroesList,getActiveHero:this.props.getActiveHero}):r.a.createElement("div",{className:z.a.wrap},r.a.createElement("h1",null,"Loading..."),r.a.createElement("div",{className:z.a.loader}))}}]),t}(n.Component));var G=Object(R.b)(function(e){return{heroesList:e.heroesList,activeHero:e.activeHero}},function(e){return Object(p.b)({getHeroesList:C,getActiveHero:S},e)})(F),M=a(12),J=a.n(M),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getActiveHeroesFromHeroesList=function(){var e=localStorage.getItem("hero");return a.props.heroesList.filter(function(t){return t.id===+e})},a.renderActiveHeroDetail=function(){return a.getActiveHeroesFromHeroesList().map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:"".concat(j).concat(e.img)}),r.a.createElement("div",{className:J.a.hero_detail_text_container},r.a.createElement("p",null," Name: ",e.localized_name),r.a.createElement("p",null," Roles: ",e.roles.map(function(e){return e}).join(",   ")),r.a.createElement("p",null," Primary attribute:",r.a.createElement("span",{className:J.a[e.primary_attr]})),r.a.createElement("p",null," Speed: ",e.move_speed),r.a.createElement("p",null," Damage: ","".concat(e.base_attack_min,"-").concat(e.base_attack_max)),r.a.createElement("p",null," Range: ",e.attack_range),r.a.createElement("p",null," Attributes:",r.a.createElement("span",{className:J.a.agi}," ","".concat(e.base_agi,"+").concat(e.agi_gain," ")),r.a.createElement("span",{className:J.a.str}," ","".concat(e.base_str,"+").concat(e.str_gain," ")),r.a.createElement("span",{className:J.a.int}," ","".concat(e.base_int,"+").concat(e.int_gain," ")))))})},a.state={},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:J.a.hero_details_wrap},r.a.createElement("div",{className:J.a.nav_panel},r.a.createElement(H.a,{to:"/"},"Home"),r.a.createElement("h1",null,"Hero details")),r.a.createElement("ul",null,this.renderActiveHeroDetail()))}}]),t}(n.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getHeroesList()}},{key:"render",value:function(){return r.a.createElement(P,{heroesList:this.props.heroesList})}}]),t}(n.Component);var V=Object(R.b)(function(e){return{heroesList:e.heroesList,activeHero:e.activeHero}},function(e){return Object(p.b)({getHeroesList:C,getActiveHero:S},e)})(U),W=a(50),X=a(52),q=a(51);o.a.render(r.a.createElement(R.a,{store:O},r.a.createElement(W.a,null,r.a.createElement(X.a,null,r.a.createElement(q.a,{exact:!0,path:"/",component:G}),r.a.createElement(q.a,{exact:!0,path:"/hero/:id",component:V})))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c5575188.chunk.js.map