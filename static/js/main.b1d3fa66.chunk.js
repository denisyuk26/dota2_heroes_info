(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports={wrap:"heroesListContainer_wrap__Gh1RG",loader:"heroesListContainer_loader__X0bRi",loading:"heroesListContainer_loading__EB364"}},27:function(e,t,a){e.exports={heroes_list:"heroes_list_heroes_list__t9hnE"}},34:function(e,t,a){e.exports=a(47)},39:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),s=(a(39),a(9)),i=a(10),l=a(12),u=a(11),p=a(13),m=a(27),h=a.n(m),_=a(48),d=a(19),f=a.n(d),E=a(28),g="FETCHING_HEROES_LIST_SUCCESS",b="GET_USER_INPUT",v="CLEAR_USER_FILTER",j=a(5),y=a(29),L=a.n(y),O=a(33),N=[];var w=a(30),H=Object(j.d)(Object(j.c)({heroesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(O.a)(t.payload);default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;case v:return"";default:return e}}}),{},Object(j.a)(L.a,w.a)),k="https://api.opendota.com",x=H,C=function(){return function(){var e=Object(E.a)(f.a.mark(function e(t){var a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(k,"/api/heroStats/"));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,r=t({type:g,payload:n}),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()},S=function(e){return{type:b,payload:e}},R=function(){return{type:v}},F=a(6),I=a(8),A=a.n(I),B=a(22);var D=Object(F.b)(function(e){return{heroesList:e.heroesList,filter:e.filter}},function(e){return Object(j.b)({getUserInput:S,clearFilter:R},e)})(function(e){var t=new RegExp(e.filter,"gi"),a=e.heroesList.filter(function(e){return t.test(e.localized_name)}),n=a.map(function(e){return r.a.createElement(_.a,{key:e.id,to:"/hero/".concat(e.id)},r.a.createElement("li",{onClick:function(){return localStorage.setItem("hero",e.id)}},r.a.createElement("img",{src:"https://api.opendota.com".concat(e.img),alt:"hero icon"}),r.a.createElement("div",null,e.localized_name)))}),c=r.a.createElement("li",{className:A.a.no_result},"No results");return r.a.createElement("section",{className:A.a.search},r.a.createElement("div",{className:A.a.search_wrap},r.a.createElement("input",{placeholder:"Hero name",type:"text",value:e.filter,onChange:function(t){return e.getUserInput(t.target.value)}}),""!==e.filter?r.a.createElement(B.a,{className:A.a.cancelButton,onClick:function(){return e.clearFilter()}}):r.a.createElement(B.b,{className:A.a.cancelButton})),r.a.createElement("ul",{className:A.a.hero_search_result},a.length>0?n:c))});function U(){return r.a.createElement("div",{className:h.a.heroes_list},r.a.createElement("h1",null,"Enter hero name"),r.a.createElement(D,null))}var T=a(17),z=a.n(T),G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getHeroesList(),this.props.clearFilter()}},{key:"render",value:function(){return this.props.heroesList.length>0?r.a.createElement(U,{className:z.a.heroes_list,heroesList:this.props.heroesList}):r.a.createElement("div",{className:z.a.wrap},r.a.createElement("h1",null,"Loading..."),r.a.createElement("div",{className:z.a.loader}))}}]),t}(n.Component);var P=Object(F.b)(function(e){return{heroesList:e.heroesList,filter:e.filter}},function(e){return Object(j.b)({getHeroesList:C,clearFilter:R},e)})(G),M=a(7),J=a.n(M),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getActiveHeroesFromHeroesList=function(){var e=localStorage.getItem("hero");return a.props.heroesList.filter(function(t){return t.id===+e})},a.renderActiveHeroDetail=function(){return a.getActiveHeroesFromHeroesList().map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{src:"".concat(k).concat(e.img)}),r.a.createElement("div",{className:J.a.hero_detail_text_container},r.a.createElement("p",null," Name: ",e.localized_name),r.a.createElement("p",null," Roles: ",e.roles.map(function(e){return e}).join(",   ")),r.a.createElement("p",null," Primary attribute:",r.a.createElement("span",{className:J.a[e.primary_attr]})),r.a.createElement("p",null," Speed: ",e.move_speed),r.a.createElement("p",null," Damage: ","".concat(e.base_attack_min,"-").concat(e.base_attack_max)),r.a.createElement("p",null," Range: ",e.attack_range),r.a.createElement("p",null," Attributes:",r.a.createElement("span",{className:J.a.agi}," ","".concat(e.base_agi,"+").concat(e.agi_gain," ")),r.a.createElement("span",{className:J.a.str}," ","".concat(e.base_str,"+").concat(e.str_gain," ")),r.a.createElement("span",{className:J.a.int}," ","".concat(e.base_int,"+").concat(e.int_gain," ")))))})},a.state={},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:J.a.hero_details_wrap},r.a.createElement("div",{className:J.a.nav_panel},r.a.createElement(_.a,{to:"/"},"Home"),r.a.createElement("h1",null,"Hero details")),r.a.createElement("ul",null,this.renderActiveHeroDetail()))}}]),t}(n.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getHeroesList()}},{key:"render",value:function(){return r.a.createElement(V,{heroesList:this.props.heroesList})}}]),t}(n.Component);var X=Object(F.b)(function(e){return{heroesList:e.heroesList}},function(e){return Object(j.b)({getHeroesList:C},e)})(W),q=a(49),K=a(50),Q=a(51);o.a.render(r.a.createElement(F.a,{store:x},r.a.createElement(q.a,null,r.a.createElement(K.a,null,r.a.createElement(Q.a,{exact:!0,path:"/",component:P}),r.a.createElement(Q.a,{exact:!0,path:"/hero/:id",component:X})))),document.getElementById("root"))},7:function(e,t,a){e.exports={hero_details_wrap:"hero_details_hero_details_wrap__3jF2B",nav_panel:"hero_details_nav_panel__44D0h",str:"hero_details_str__UxDHR",agi:"hero_details_agi__2Mtcj",int:"hero_details_int__pSWpt"}},8:function(e,t,a){e.exports={search:"styles_search__2ph8f",search_wrap:"styles_search_wrap__1EV4A",cancelButton:"styles_cancelButton__1PnAz",highlight:"styles_highlight__1PgBp"}}},[[34,1,2]]]);
//# sourceMappingURL=main.b1d3fa66.chunk.js.map