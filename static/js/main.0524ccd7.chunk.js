(this["webpackJsonpdependancy-graph"]=this["webpackJsonpdependancy-graph"]||[]).push([[2],{280:function(e,t,n){},281:function(e,t,n){},428:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(38),r=n.n(i),a=(n(280),n(8)),l=(n(281),n(149)),s=n(14),u=n(64),d=n.n(u),j=n(110),b=n(9),f=n(67),p=n(273),O=n(11),v=n(42),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"item";return"".concat(e,"-").concat(Math.random().toString().substr(2,8)).concat(Math.random().toString().substr(2,8))},x=Object(v.b)({name:"dependancies",initialState:{saving:!1,shouldLoad:!0,items:{},connections:[],columns:{}},reducers:{addItem:function(e,t){var n=t.payload.column,c=h();return e.items[c]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(O.a)({title:"Name",description:"",status:"unknown"},e)}(),e.columns[n].items.unshift(c),e},removeItem:function(e,t){var n=t.payload.id;delete e.items[n];var c=Object.keys(e.columns).find((function(t){var c,o;return(null===(c=e.columns[t])||void 0===c||null===(o=c.items)||void 0===o?void 0:o.findIndex((function(e){return e===n})))>-1}));return c&&(e.columns[c].items=e.columns[c].items.filter((function(e){return e!==n}))),e.connections=e.connections.filter((function(e){var t=e.from,c=e.to;return t!==n&&c!==n})),e},updateItem:function(e,t){var n=t.payload,c=n.id,o=n.update;e.items[c]=Object(O.a)(Object(O.a)({},e.items[c]),o)},moveItem:function(e,t){var n=t.payload,c=n.id,o=n.newPos,i=n.from,r=n.to,a=e.columns[i].items.findIndex(c);return e.columns[i].items.splice(a,1),e.columns[r].items.splice(o,0,c),e},addColumn:function(e){var t=h("column-");e.columns[t]={title:"Column title",items:[]}},removeColumn:function(e,t){var n=t.payload.id;delete e.columns[n]},updateColumn:function(e,t){var n=t.payload,c=n.id,o=Object(p.a)(n,["id"]);return Object(O.a)(Object(O.a)({},e),{},{columns:Object(O.a)(Object(O.a)({},e.columns),{},Object(f.a)({},c,Object(O.a)(Object(O.a)({},e.columns[c]),o)))})},addConnection:function(e,t){var n=t.payload,c=n.to,o=n.from,i=e.connections.findIndex((function(e){return e.to===c&&e.from===o}));i>-1?e.connections.splice(i,1):e.connections.push({to:c,from:o})},removeConnection:function(e,t){var n=t.payload,c=n.to,o=n.from;e.connections=e.connections.filter((function(e){return e.to===c&&e.from===o}))},updateAll:function(e,t){var n=t.payload,c=n.items,o=n.columns,i=n.connections;e.items=c,e.columns=o,e.connections=i,e.shouldLoad=!1},save:function(e){e.saving=!0},saved:function(e){e.saving=!1}}}),m=x.actions,y=m.addItem,g=m.removeItem,w=m.updateItem,k=(m.moveItem,m.addColumn),C=m.updateColumn,S=m.addConnection,E=m.updateAll,M=m.save,I=m.saved,L=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.items},D=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.columns},R=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.connections},z=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.saving},A=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.saving},U=x.reducer,W=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data.json").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),B=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("Can't save in prod!");case 1:case"end":return e.stop()}}),e)})));var T=function(){var e=Object(b.b)(),t=Object(b.c)(L),n=Object(b.c)(R),o=Object(b.c)(D),i=Object(b.c)(z);return Object(c.useEffect)((function(){(function(){var t=Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:n=t.sent,e({type:E.type,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(c.useEffect)((function(){i&&function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t,n,o);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().finally((function(){e({type:I.type})}))}),[e,i,t,n,o]),null},F=n(23),P=n(2),X=Object(c.createContext)();function V(e){var t=e.children,n=Object(s.g)().itemId,c=Object(b.c)(R),o=Object(b.c)(D),i=[{rel:"root",id:n}];c.forEach((function(e){e.from===n&&i.push({rel:"descendant",id:e.to}),e.to===n&&i.push({rel:"ancesstor",id:e.from})}));var r=Object.keys(o),a=[],l=0;r.forEach((function(e,t){var n=0;o[e].items.forEach((function(c){var r=i.findIndex((function(e){return e.id===c}));r<0||(i[r].row=t,i[r].rowCount=n++,i[r].col=o[e].title)})),a[t]=n,l=Math.max(n,l)}));var u=i.map((function(e){return{id:e.id,rel:e.rel,col:e.col,descendants:c.filter((function(t){return t.from===e.id})).length,ancesstors:c.filter((function(t){return t.to===e.id})).length,position:{x:1e3+500*(a[e.row]/2-e.rowCount),y:300*e.row}}})),d=u.findIndex((function(e){return e.id===n}));return Object(P.jsx)(X.Provider,{value:{nodes:u,maxColumns:l,active:d},children:t})}var Y=function(){var e=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(F.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=function(){o({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n};function _(e,t){var n=t.type,c=t.payload;switch(n){case"MOUSE_DOWN":return Object(O.a)(Object(O.a)({},e),{},{start:{x:c.x,y:c.y},mouseDown:!0});case"MOUSE_UP":return Object(O.a)(Object(O.a)({},e),{},{mouseDown:!1,prev:Object(O.a)({},e.transform)});case"MOVE":if(!e.mouseDown)return e;var o=e.start,i=e.prev;return Object(O.a)(Object(O.a)({},e),{},{transform:{x:i.x-(o.x-c.x),y:i.y-(o.y-c.y)}});default:return e}}var N,q,Q,H,J=function(e){var t=e.children,n=Object(c.useReducer)(_,{transform:{x:0,y:0},start:{x:0,y:0},prev:{x:0,y:0},mouseDown:!1}),o=Object(F.a)(n,2),i=o[0],r=o[1],a=Object(c.useContext)(X),l=a.nodes,s=a.active,u=Y(),d=Object(c.useMemo)((function(){return{x:u.width/2-l[s].position.x-150,y:u.height/2-l[s].position.y-40}}),[u,l,s]);return Object(c.useEffect)((function(){var e=function(){r({type:"MOUSE_UP"})};return document.addEventListener("mouseleave",e),function(){document.removeEventListener("mouseleave",e)}}),[r]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("rect",{fill:"transparent",width:"2000",height:"2000",onMouseDown:function(e){r({type:"MOUSE_DOWN",payload:{x:e.clientX,y:e.clientY}})},onMouseMove:function(e){r({type:"MOVE",payload:{x:e.clientX,y:e.clientY}})},onMouseUp:function(e){r({type:"MOUSE_UP"})}}),Object(P.jsx)("g",{transform:"translate(".concat(d.x," ").concat(d.y,")"),style:{userSelect:"none"},children:Object(P.jsx)("g",{transform:"translate(".concat(i.transform.x," ").concat(i.transform.y,")"),children:t})})]})},K=n(3),$=Object(v.b)({name:"options",initialState:{showOtherRelations:!1,showAllArrows:!0},reducers:{setOption:function(e,t){var n=t.payload,c=n.key,o=n.value;e[c]=o}}}),G=($.actions.setOption,function(e){var t;return null===e||void 0===e||null===(t=e.options)||void 0===t?void 0:t.showOtherRelations}),Z=$.reducer,ee=K.default.text(N||(N=Object(a.a)(["\n  font: normal 18px sans-serif;\n  pointer-events: none;\n"]))),te=K.default.text(q||(q=Object(a.a)(["\n  font: normal 14px sans-serif;\n  pointer-events: none;\n"]))),ne=K.default.text(Q||(Q=Object(a.a)(["\n  font: normal 14px sans-serif;\n  pointer-events: none;\n"]))),ce=K.default.rect(H||(H=Object(a.a)(["\n  fill: #fff;\n  stroke: #8099a4;\n  stroke-width: 1;\n  filter: drop-shadow(0 3px 3px rgba(0,20,29,0.2)) drop-shadow(0 2px 4px rgba(0,20,29,0.15));\n  ","}\n"])),(function(e){return e.root?"stroke-width: 2":"\n    &:hover {\n      stroke-width: 2;\n      stroke: #008200;\n      cursor: pointer;\n    }\n  "})),oe=function(e){var t=e.x,n=e.y,c=e.parentX,o=e.parentY,i=e.text,r="M ".concat(c," ").concat(o,", L ").concat(t," ").concat(n);return Object(P.jsxs)("g",{children:[Object(P.jsx)("path",{d:r,strokeWidth:"2",fill:"transparent",stroke:"rgba(0, 0, 0, 0.4)"}),Object(P.jsx)("circle",{cx:t,cy:n,r:"16",fill:"#ffffff",stroke:"#8099a4",strokeWidth:"1"}),Object(P.jsx)("text",{x:t,y:n,textAnchor:"middle",dominantBaseline:"central",children:i})]})};var ie,re=function(e){var t=e.selected,n=e.itemDetails,c=e.position,o=void 0===c?{x:0,y:0}:c,i=e.rel,r=e.descendants,a=e.ancesstors,l=e.col,s=Object(b.c)(G),u="",d="";return"ancesstor"===i&&(u=r-1>0?"+".concat(r-1):"",d=a),"descendant"===i&&(u=r,d=a-1>0?"+".concat(a-1):""),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("g",{onClick:t,children:[Object(P.jsx)(ce,{root:"root"===i,x:o.x.toString(),y:o.y.toString(),height:"80",width:"300"}),Object(P.jsx)(ee,{x:(o.x+10).toString(),y:(o.y+30).toString(),children:null===n||void 0===n?void 0:n.title}),Object(P.jsx)(ne,{x:(o.x+10).toString(),y:(o.y+60).toString(),children:l}),Object(P.jsxs)(te,{x:(o.x+10).toString(),y:(o.y+60).toString(),children:[l,null===n||void 0===n?void 0:n.description]})]}),s&&Object(P.jsxs)(P.Fragment,{children:[u>0&&Object(P.jsx)(oe,{x:(o.x+240).toString(),y:(o.y+80+40).toString(),parentX:o.x+240,parentY:o.y+80,text:u}),d>0&&Object(P.jsx)(oe,{x:(o.x+240).toString(),y:(o.y-40).toString(),parentX:o.x+240,parentY:o.y,text:d})]})]})},ae=K.default.g(ie||(ie=Object(a.a)(["\n  pointer-events: none;\n"])));var le=function(e){var t=e.activePosition,n=void 0===t?{x:0,y:0}:t,o=e.position,i=void 0===o?{x:0,y:0}:o,r=e.rel,a=Object(c.useMemo)((function(){if(n.y>i.y){var e=i.x+150,t=i.y+80,c=n.x+150,o=n.y;return[" M ".concat(e," ").concat(t,",\n            C ").concat(e," ").concat(t+100,",\n            ").concat(c," ").concat(o-100,",\n            ").concat(c," ").concat(o-10,"\n            L ").concat(c," ").concat(o),"".concat(c,",").concat(o," ").concat(c-5,",").concat(o-10," ").concat(c+5,",").concat(o-10)]}if(n.y<i.y){var a=n.x+150,l=n.y+80,s=i.x+150,u=i.y;return[" M ".concat(a," ").concat(l,",\n              C ").concat(a," ").concat(l+100,",\n              ").concat(s," ").concat(u-100,",\n              ").concat(s," ").concat(u-10,"\n              L ").concat(s," ").concat(u),"".concat(s,",").concat(u," ").concat(s-5,",").concat(u-10," ").concat(s+5,",").concat(u-10)]}if("ancesstor"===r){var d=i.x+150,j=i.y,b=n.x+150,f=n.y;return[" M ".concat(d," ").concat(j,",\n              C ").concat(d," ").concat(j-80,",\n              ").concat(b," ").concat(f-80,",\n              ").concat(b," ").concat(f-10,"\n              L ").concat(b," ").concat(f),"".concat(b,",").concat(f," ").concat(b-5,",").concat(f-10," ").concat(b+5,",").concat(f-10)]}var p=n.x+150,O=n.y+80,v=i.x+150,h=i.y+80;return[" M ".concat(p," ").concat(O,",\n              C ").concat(p," ").concat(O+80,",\n              ").concat(v," ").concat(h+80,",\n              ").concat(v," ").concat(h+10,"\n              L ").concat(v," ").concat(h),"".concat(v,",").concat(h," ").concat(v-5,",").concat(h+10," ").concat(v+5,",").concat(h+10)]}),[i,n,r]),l=Object(F.a)(a,2),s=l[0],u=l[1];return Object(P.jsxs)(ae,{children:[Object(P.jsx)("path",{d:s,strokeWidth:"2",fill:"transparent",stroke:"rgba(0, 0, 0, 0.4)"}),Object(P.jsx)("polygon",{points:u,fill:"black"})]})};var se,ue,de=function(){var e=Object(c.useContext)(X),t=e.nodes,n=e.active,o=Object(b.c)(L),i=Object(s.f)(),r=Object(c.useMemo)((function(){return t[n].position}),[t,n]),a=Object(c.useCallback)((function(e){i.push("/tree/".concat(e))}),[i]);return Object(P.jsx)(P.Fragment,{children:t&&Object(P.jsxs)(P.Fragment,{children:[t.map((function(e,t){return"root"===e.rel?null:Object(P.jsx)(le,{rel:e.rel,position:e.position,activePosition:r},t)})),t.map((function(e,t){return Object(P.jsx)(re,Object(O.a)({selected:function(){a(e.id)},itemDetails:o[e.id]},e),t)}))]})})},je=K.default.div(se||(se=Object(a.a)(["\n  width: calc(100vw - 320px);\n  height: 100vh;\n  position: relative;\n"]))),be=K.default.svg(ue||(ue=Object(a.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n"])));var fe=function(){var e=Y(),t=Object(c.useState)({height:300,width:600,viewbox:"0 0 600 300"}),n=Object(F.a)(t,2),o=n[0],i=n[1];return Object(c.useEffect)((function(){var t=e.width,n=e.height;i({width:t-320,height:n,viewbox:"0 0 ".concat(t-320," ").concat(n)})}),[e,i]),Object(P.jsx)(je,{children:Object(P.jsx)(V,{children:Object(P.jsx)(be,Object(O.a)(Object(O.a)({preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"},o),{},{children:Object(P.jsx)(J,{children:Object(P.jsx)(de,{})})}))})})},pe=Object(c.createContext)(),Oe=function(e){var t=e.children,n=Object(c.useState)(!1),o=Object(F.a)(n,2),i=o[0],r=o[1],a=Object(c.useCallback)((function(){r(!0)}),[r]),l=Object(c.useCallback)((function(){r(!1)}),[r]);return Object(P.jsx)(pe.Provider,{value:{linking:i,drag:a,drop:l},children:t})},ve=Object(c.createContext)({});function he(e,t){var n=t.type,c=t.payload;switch(n){case"ADD":var o=c.id,i=c.ref;return Object(O.a)(Object(O.a)({},e),{},Object(f.a)({},o,i));case"REMOVE":var r=c.id,a=Object(O.a)({},e);return delete a[r],a;default:return e}}var xe,me,ye=function(e){var t=e.children,n=Object(c.useReducer)(he,{}),o=Object(F.a)(n,2),i=o[0],r=o[1],a=Object(c.useCallback)((function(e,t){r({type:"ADD",payload:{id:e,ref:t}})}),[r]),l=Object(c.useCallback)((function(e){r({type:"REMOVE",payload:{id:e}})}),[r]);return Object(P.jsx)(ve.Provider,{value:{refs:i,addRef:a,removeRef:l},children:t})},ge=Object(v.b)({name:"connections",initialState:{scrollLeft:0},reducers:{updateScrollLeft:function(e,t){var n=t.payload.value;e.scrollLeft=n}}}),we=ge.actions.updateScrollLeft,ke=function(e){var t;return null===e||void 0===e||null===(t=e.connections)||void 0===t?void 0:t.scrollLeft},Ce=ge.reducer,Se=K.default.div(xe||(xe=Object(a.a)(["\n  pointer-events: none;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 0;\n"]))),Ee=K.default.svg(me||(me=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  display: block;\n"])));var Me,Ie,Le=function(){var e=Object(b.c)(R),t=Object(b.c)(ke),n=Object(c.useContext)(ve),o=Object(c.useState)({width:100,height:100,viewBox:"0 0 100 100"}),i=Object(F.a)(o,2),r=i[0],a=i[1],l=Y(),s=Object(c.useRef)(null),u=Object(c.useMemo)((function(){var t,c=document.documentElement.scrollTop;return null===e||void 0===e||null===(t=e.map((function(e){var t=e.from,o=e.to;try{var i=n.refs[t],r=n.refs[o],a=i.getBoundingClientRect(),l=a.right-320,s=a.top+c+a.height/2,u=r.getBoundingClientRect(),d=u.right-320,j=u.top+c+u.height/2;return l===d||Math.abs(l-d)<1?(j+=(s>j?1:-1)*u.height/4,{line:"M ".concat(l," ").concat(s," \n          C ").concat(l+40," ").concat(s,", \n            ").concat(d+40," ").concat(j,", \n            ").concat(d," ").concat(j),start:{x:l,y:s}}):(d=u.left-320,{line:"M ".concat(l," ").concat(s," \n            C ").concat(l+40," ").concat(s,", \n              ").concat(d-40," ").concat(j,", \n              ").concat(d," ").concat(j),start:{x:l,y:s}})}catch(b){console.log(b)}return null})))||void 0===t?void 0:t.filter((function(e){return!!e})).map((function(e,t){var n=e.start,c=e.line;return Object(P.jsxs)("g",{children:[Object(P.jsx)("path",{d:c,strokeWidth:"2",fill:"transparent",stroke:"rgba(0, 0, 0, 0.4)"}),Object(P.jsx)("circle",{cx:n.x,cy:n.y,r:"4",fill:"rgb(0, 0, 0)"})]},t)}))}),[l,t,e,n]);return Object(c.useEffect)((function(){l&&(null===s||void 0===s?void 0:s.current)&&a({height:l.height,width:l.width,viewBox:"0 0 ".concat(l.height," ").concat(l.width)})}),[l,s,a]),Object(P.jsx)(Se,{ref:s,children:Object(P.jsx)(Ee,{preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",height:r.height,width:r.width,viewbox:r.viewBox,children:u})})},De=n(145),Re=n.n(De),ze=n(31),Ae=n.n(ze),Ue=n(29),We=n.n(Ue),Be=n(267),Te=n.n(Be),Fe=n(268),Pe=n.n(Fe),Xe=n(188),Ve=n.n(Xe),Ye=n(45),_e=n.n(Ye),Ne=Object(v.b)({name:"settings",initialState:{readonly:!0},reducers:{}}),qe=function(e){var t;return null===e||void 0===e||null===(t=e.settings)||void 0===t?void 0:t.readonly},Qe=Ne.reducer,He=Object(v.b)({name:"linking",initialState:{source:!1},reducers:{startLinking:function(e,t){e.source=t.payload.id},doneLinking:function(e){e.source=!1}}}),Je=He.actions,Ke=Je.startLinking,$e=Je.doneLinking,Ge=function(e){var t;return null===e||void 0===e||null===(t=e.linking)||void 0===t?void 0:t.source},Ze=function(e){var t;return!!(null===e||void 0===e||null===(t=e.linking)||void 0===t?void 0:t.source)},et=He.reducer,tt={unknown:{color:"grey",text:"Unknown",description:null},stable:{color:"green",text:"Stable",description:null},underReview:{color:"orange",text:"Under Review",description:null},unstable:{color:"darkorange",text:"Unstable",description:null},outdated:{color:"red",text:"Outdated ",description:null},deprecated:{color:"darkslategray",text:"Deprecated",description:null}},nt=n(109),ct=n.n(nt),ot=n(269),it=n.n(ot),rt=n(192),at=K.default.div(Me||(Me=Object(a.a)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n"]))),lt=K.default.span(Ie||(Ie=Object(a.a)(["\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin: 0 0.5rem;\n  vertical-align: middle;\n  ","\n"])),(function(e){return e.color&&"background: ".concat(e.color,";")}));var st,ut,dt,jt=function(e){var t=e.itemId,n=e.item,o=e.doneEditing,i=Object(b.b)(),r=Object(c.useState)(!1),a=Object(F.a)(r,2),l=a[0],s=a[1],u=Object(c.useCallback)((function(e,n){i({type:w.type,payload:{id:t,update:Object(f.a)({},e,n)}})}),[t,i]);return Object(P.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(P.jsx)(_e.a,{children:Object(P.jsx)(ct.a,{labelInline:!0,label:"Name",size:"small",value:n.title,onChange:function(e){u("title",e.target.value)},required:!0})}),Object(P.jsx)(_e.a,{children:Object(P.jsx)(rt.Select,{labelInline:!0,name:"simple",size:"small",label:"Status",value:n.status,onChange:function(e){u("status",e.target.value)},children:Object.keys(tt).map((function(e){return Object(P.jsxs)(rt.Option,{value:e,children:[Object(P.jsx)(lt,{color:tt[e].color}),tt[e].text]},e)}))})}),Object(P.jsx)(_e.a,{children:Object(P.jsx)(ct.a,{labelInline:!0,label:"Description",value:n.description,size:"small",onChange:function(e){return u("description",e.target.value)}})}),Object(P.jsxs)(at,{children:[Object(P.jsx)(We.a,{size:"small",onClick:s,children:"Delete"}),Object(P.jsx)(We.a,{buttonType:"primary",size:"small",onClick:o,type:"submit",children:"Done"})]}),Object(P.jsx)(it.a,{title:"Delete item",open:l,onConfirm:function(){s(!1),requestAnimationFrame((function(){i({type:g.type,payload:{id:t}})}))},onCancel:function(){return s(!1)},children:"Are you sure?"})]})},bt=K.default.div(st||(st=Object(a.a)(["\n  position: relative;\n  margin-bottom: 1.5rem;\n  ","\n"])),(function(e){return e.linking?"\n      cursor:pointer;\n      &:hover {\n        border-color: red;\n      }":""})),ft=K.default.div(ut||(ut=Object(a.a)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n"]))),pt=K.default.div(dt||(dt=Object(a.a)(["\n  position: relative;\n  padding-left: 1rem;\n"])));var Ot,vt,ht,xt,mt,yt,gt=function(e){var t,n,o,i=e.itemId,r=Object(c.useRef)(null),a=Object(c.useState)(!1),l=Object(F.a)(a,2),u=l[0],d=l[1],j=Object(b.b)(),f=Object(s.f)(),p=Object(b.c)(L),O=Object(b.c)(Ge),v=Object(b.c)(Ze),h=Object(b.c)(qe);Object(c.useEffect)((function(){console.log({linkingSource:O,linking:v})}),[O,v]);var x=Object(c.useContext)(ve),m=x.addRef,y=x.removeRef,g=Object(c.useMemo)((function(){return p[i]}),[p,i]),w=Object(c.useCallback)((function(e){e.preventDefault(),d(!0),requestAnimationFrame((function(){var e,t;null===(e=r.current)||void 0===e||null===(t=e.querySelector("input"))||void 0===t||t.focus()}))}),[d,r]),k=Object(c.useCallback)((function(){d(!1)}),[d]),C=Object(c.useCallback)((function(e){e.preventDefault(),f.push("/tree/".concat(i))}),[f,i]),E=Object(c.useCallback)((function(){v&&O!==i&&j({type:S.type,payload:{from:O,to:i}})}),[v,O,j,i]),M=Object(c.useCallback)((function(e){e.preventDefault(),j({type:Ke.type,payload:{id:i}})}),[j,i]);return Object(c.useEffect)((function(){return m(i,r.current),function(){y(i)}}),[m,y,r,i]),Object(c.useEffect)((function(){if(v===i){var e=function(e){"Escape"===e.key&&j({type:$e.type})};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}}),[i,v,j]),Object(P.jsx)(bt,{ref:r,onClick:E,linking:!!v,id:i,children:Object(P.jsx)(Pe.a,{orientation:"vertical",pixelWidth:320,children:Object(P.jsx)(Te.a,{children:u?Object(P.jsx)(jt,{itemId:i,item:g,doneEditing:k}):Object(P.jsxs)(pt,{children:[Object(P.jsx)("div",{style:{position:"absolute",right:"100%",top:"50%",transform:"translate(.5rem, -50%)",cursor:"pointer"},children:Object(P.jsx)(Ae.a,{fontSize:"medium",type:"drag_vertical"})}),Object(P.jsx)(_e.a,{variant:"h3",mb:1,children:null!==(t=g.title)&&void 0!==t?t:"\xa0"}),g.status&&Object(P.jsx)(Ve.a,{mb:1,borderColor:null===(n=tt[g.status])||void 0===n?void 0:n.color,fill:!0,children:null===(o=tt[g.status])||void 0===o?void 0:o.text}),g.description&&Object(P.jsx)(_e.a,{mb:2,children:g.description}),Object(P.jsx)(ft,{children:O===i?Object(P.jsx)(We.a,{size:"small",variant:"primary",onClick:function(){return j({type:$e.type})},children:"Done"}):Object(P.jsxs)(P.Fragment,{children:[!h&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(We.a,{size:"small",onClick:w,disabled:!!v,children:"Edit"}),Object(P.jsx)(We.a,{size:"small",onClick:M,disabled:!!v,children:"Link"})]}),Object(P.jsx)(We.a,{size:"small",onClick:C,disabled:!!v,children:"Tree"})]})})]})})})})},wt=K.default.div(Ot||(Ot=Object(a.a)(["\n  display: flex;\n  padding: 0 2.5rem;\n  flex: 0 0 320px;\n  flex-direction: column;\n  border-right: 2px solid #8099a4;\n"]))),kt=K.default.div(vt||(vt=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  align-items: center;\n  ","\n"])),(function(e){return e.justify&&"justify-content: ".concat(e.justify,";")})),Ct=K.default.div(ht||(ht=Object(a.a)(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem 0;\n  display: flex;\n  gap: 1rem;\n"]))),St=K.default.input(xt||(xt=Object(a.a)(["\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 0.5rem;\n  border-radius: 0;\n  width: 100%;\n  border-bottom: 2px solid transparent;\n  box-sizing: border-box;\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid #0077c8;\n  }\n"]))),Et=K.default.div(mt||(mt=Object(a.a)(["\n  flex: 1 0 auto;\n  position: relative;\n"]))),Mt=K.default.div(yt||(yt=Object(a.a)(["\n  position: absolute;\n  right: 0;\n  top: 0.5rem;\n  cursor: pointer;\n"])));var It,Lt,Dt=function(e){var t,n=e.justify,o=void 0===n?"flex-start":n,i=e.colId,r=Object(b.b)(),a=Object(b.c)(D),l=Object(c.useMemo)((function(){return a[i]}),[i,a]),s=Object(c.useRef)(null);return Object(P.jsxs)(wt,{children:[Object(P.jsxs)(Ct,{children:[Object(P.jsxs)(Et,{children:[Object(P.jsx)(St,{ref:s,value:null===l||void 0===l?void 0:l.title,type:"text",onChange:function(e){r({type:C.type,payload:{id:i,title:e.target.value}})}}),Object(P.jsx)(Mt,{onClick:function(){s.current.focus()},children:Object(P.jsx)(Ae.a,{type:"edit"})})]}),Object(P.jsx)(Re.a,{type:"button",onAction:function(e){e.preventDefault(),r({type:y.type,payload:{column:i}})},children:Object(P.jsx)(Ae.a,{bgTheme:"info",bgSize:"large",type:"plus"})})]}),Object(P.jsx)(kt,{justify:o,children:null===l||void 0===l||null===(t=l.items)||void 0===t?void 0:t.map((function(e){return Object(P.jsx)(gt,{itemId:e},e)}))})]})},Rt=K.default.div(It||(It=Object(a.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  position: relative;\n"]))),zt=K.default.div(Lt||(Lt=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex: 1 1 100%;\n  overflow-x: scroll;\n  scroll-behaviour: smooth;\n"]))),At=function(e){var t=e.children;return Object(P.jsx)(Oe,{children:Object(P.jsx)(ye,{children:t})})};var Ut,Wt,Bt=function(){var e=Object(b.c)(D),t=Object(b.b)(),n=Object(c.useRef)(null),o=Object(c.useCallback)((function(e){t({type:we.type,payload:{value:e.target.scrollLeft}})}),[t]);return Object(P.jsxs)(At,{children:[Object(P.jsx)(Le,{}),Object(P.jsx)(Rt,{children:Object(P.jsx)(zt,{ref:n,onScroll:o,children:Object.keys(e).map((function(e){return Object(P.jsx)(Dt,{colId:e},e)}))})})]})},Tt=n(270),Ft=n.n(Tt),Pt=K.default.div(Ut||(Ut=Object(a.a)(["\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n"]))),Xt=K.default.li(Wt||(Wt=Object(a.a)(["\n  padding: 0.5rem;\n  border: 1px solid #ccd6db;\n  margin-bottom: 1rem;\n"])));var Vt,Yt,_t=function(e){var t=e.searchTerm,n=Object(s.f)(),o=Object(c.useCallback)((function(e){if(!t)return[];var n=L(e);return n?Object.keys(n).map((function(e){return Object(O.a)(Object(O.a)({},n[e]),{},{id:e})})).filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase())})):(console.log(n),[])}),[t]),i=Object(b.c)((function(e){return o(e,t)}));return Object(P.jsx)("div",{children:Object(P.jsx)(_e.a,{as:"ul",listStyleType:"none",pl:0,children:i.map((function(e){return Object(P.jsxs)(Xt,{as:"li",listStyleType:"none",pl:0,children:[Object(P.jsx)(_e.a,{fontWeight:"700",mb:2,children:e.title}),Object(P.jsx)(Pt,{children:Object(P.jsx)(We.a,{size:"small",onClick:function(){n.push("/tree/".concat(e.id))},children:"Tree View"})})]},e.id)}))})})},Nt=K.default.form(Vt||(Vt=Object(a.a)(["\n  margin: 2rem 0;\n  padding: 0 2rem;\n"]))),qt=K.default.label(Yt||(Yt=Object(a.a)(["\n  display: block;\n  margin: 0 0 2rem;\n"])));var Qt=function(){var e=Object(c.useState)(""),t=Object(F.a)(e,2),n=t[0],o=t[1];return Object(P.jsxs)(Nt,{onSubmit:function(e){return e.preventDefault()},children:[Object(P.jsxs)(qt,{children:[Object(P.jsx)(_e.a,{as:"div",fontWeight:"700",mb:1,children:"Search"}),Object(P.jsx)(Ft.a,{id:"search",name:"search",placeholder:"",onChange:function(e){return o(e.target.value)},value:n,searchButton:!0})]}),Object(P.jsx)(_t,{searchTerm:n})]})};var Ht,Jt,Kt,$t=function(){var e=Object(b.c)(qe),t=Object(b.c)(A),n=Object(b.b)(),o=Object(c.useCallback)((function(e){e.preventDefault(),n({type:M.type})}),[n]);return e?null:Object(P.jsx)(We.a,{fullWidth:!0,buttonType:"primary",disabled:t,onClick:o,children:"Save"})},Gt=K.default.div(Ht||(Ht=Object(a.a)(["\n  width: 320px;\n  flex: 0 0 320px;\n  background: rgb(242, 245, 246);\n  position: relative;\n  z-index: 2;\n"]))),Zt=K.default.div(Jt||(Jt=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 2rem;\n  gap: 1rem;\n"]))),en=K.default.hr(Kt||(Kt=Object(a.a)(["\n  margin: 2rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"])));var tn,nn,cn=function(){var e=Object(s.f)(),t=Object(b.b)();return Object(P.jsxs)(Gt,{children:[Object(P.jsx)(Qt,{}),Object(P.jsx)(en,{}),Object(P.jsxs)(Zt,{children:[Object(P.jsxs)(s.a,{path:"/tree/",children:[Object(P.jsx)(We.a,{fullWidth:!0,onClick:function(){return e.push("/")},children:"Columns View"}),Object(P.jsx)(We.a,{fullWidth:!0,onClick:function(){return e.goBack()},children:"Back"})]}),Object(P.jsx)(s.a,{exact:!0,path:"/",children:Object(P.jsx)(We.a,{onClick:function(){t({type:k.toString()})},fullWidth:!0,iconType:"plus",children:"Add New Column"})}),Object(P.jsx)($t,{})]})]})},on=K.default.div(tn||(tn=Object(a.a)(["\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  max-width: 100vw;\n  align-items: stretch;\n"]))),rn=K.default.div(nn||(nn=Object(a.a)(["\n  flex: 0 1 calc(100% - 320px);\n  max-width: calc(100% - 320px);\n  position: relative;\n  z-index: 1;\n"])));var an=function(){return Object(P.jsxs)(on,{children:[Object(P.jsx)(T,{}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(cn,{}),Object(P.jsx)(rn,{children:Object(P.jsxs)(s.c,{children:[Object(P.jsx)(s.a,{path:"/tree/:itemId",component:fe}),Object(P.jsx)(s.a,{path:"/",component:Bt})]})})]})]})},ln=Object(v.b)({name:"user",initialState:{userDetails:{uid:null,email:null,photoURL:null},signedIn:!1,writeAccess:!1},reducers:{setUser:function(e,t){t.payload?(e.userDetails={uid:t.payload.user.uid,email:t.payload.user.email,photoURL:t.payload.user.photoURL},e.signedIn=!0,e.writeAccess="hFgfQcppuQXWOjHC72Cs7XK0uQ52"===t.payload.user.uid):(e.userDetails={uid:null,email:null,photoURL:null},e.signedIn=!1,e.writeAccess=!1)}}}),sn=(ln.actions.setUser,ln.reducer),un=Object(v.a)({reducer:{linking:et,dependancies:U,connections:Ce,options:Z,user:sn,settings:Qe}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var dn=n(271),jn=n.n(dn),bn=(n(430),n(272)),fn={apiKey:"AIzaSyAESY7RU998b2rdyyWMhCkt4mfQXfEdpyM",authDomain:"dependancy-graph.firebaseapp.com",projectId:"dependancy-graph",storageBucket:"dependancy-graph.appspot.com",messagingSenderId:"257602314188",appId:"1:257602314188:web:b6daa829c5e07f23648769"};r.a.render(Object(P.jsxs)(o.a.StrictMode,{children:[Object(P.jsx)(jn.a,{}),Object(P.jsx)(bn.a,{firebaseConfig:fn,children:Object(P.jsx)(b.a,{store:un,children:Object(P.jsx)(an,{})})})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[428,3,4]]]);
//# sourceMappingURL=main.0524ccd7.chunk.js.map