(this["webpackJsonpdependancy-graph"]=this["webpackJsonpdependancy-graph"]||[]).push([[2],{280:function(e,t,n){},281:function(e,t,n){},428:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(38),r=n.n(o),a=(n(280),n(8)),l=(n(281),n(149)),s=n(14),u=n(64),d=n.n(u),j=n(110),b=n(9),f=n(67),p=n(273),O=n(11),v=n(42),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"item";return"".concat(e,"-").concat(Math.random().toString().substr(2,8)).concat(Math.random().toString().substr(2,8))},x=Object(v.b)({name:"dependancies",initialState:{saving:!1,shouldLoad:!0,items:{},connections:[],columns:{}},reducers:{addItem:function(e,t){var n=t.payload.column,c=h();return e.items[c]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(O.a)({title:"Name",description:"",status:"unknown"},e)}(),e.columns[n].items.unshift(c),e},removeItem:function(e,t){var n=t.payload.id;delete e.items[n];var c=Object.keys(e.columns).find((function(t){var c,i;return(null===(c=e.columns[t])||void 0===c||null===(i=c.items)||void 0===i?void 0:i.findIndex((function(e){return e===n})))>-1}));return c&&(e.columns[c].items=e.columns[c].items.filter((function(e){return e!==n}))),e.connections=e.connections.filter((function(e){var t=e.from,c=e.to;return t!==n&&c!==n})),e},updateItem:function(e,t){var n=t.payload,c=n.id,i=n.update;e.items[c]=Object(O.a)(Object(O.a)({},e.items[c]),i)},moveItem:function(e,t){var n=t.payload,c=n.id,i=n.newPos,o=n.from,r=n.to,a=e.columns[o].items.findIndex(c);return e.columns[o].items.splice(a,1),e.columns[r].items.splice(i,0,c),e},addColumn:function(e){var t=h("column-");e.columns[t]={title:"Column title",items:[]}},removeColumn:function(e,t){var n=t.payload.id;delete e.columns[n]},updateColumn:function(e,t){var n=t.payload,c=n.id,i=Object(p.a)(n,["id"]);return Object(O.a)(Object(O.a)({},e),{},{columns:Object(O.a)(Object(O.a)({},e.columns),{},Object(f.a)({},c,Object(O.a)(Object(O.a)({},e.columns[c]),i)))})},addConnection:function(e,t){var n=t.payload,c=n.to,i=n.from,o=e.connections.findIndex((function(e){return e.to===c&&e.from===i}));o>-1?e.connections.splice(o,1):e.connections.push({to:c,from:i})},removeConnection:function(e,t){var n=t.payload,c=n.to,i=n.from;e.connections=e.connections.filter((function(e){return e.to===c&&e.from===i}))},updateAll:function(e,t){var n=t.payload,c=n.items,i=n.columns,o=n.connections;e.items=c,e.columns=i,e.connections=o,e.shouldLoad=!1},save:function(e){e.saving=!0},saved:function(e){e.saving=!1}}}),m=x.actions,y=m.addItem,g=m.removeItem,w=m.updateItem,k=(m.moveItem,m.addColumn),C=m.updateColumn,S=m.addConnection,E=m.updateAll,M=m.save,I=m.saved,L=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.items},D=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.columns},R=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.connections},z=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.saving},A=function(e){var t;return null===e||void 0===e||null===(t=e.dependancies)||void 0===t?void 0:t.saving},U=x.reducer,W=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data.json").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),B=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("Can't save in prod!");case 1:case"end":return e.stop()}}),e)})));var F=function(){var e=Object(b.b)(),t=Object(b.c)(L),n=Object(b.c)(R),i=Object(b.c)(D),o=Object(b.c)(z);return Object(c.useEffect)((function(){(function(){var t=Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:n=t.sent,e({type:E.type,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(c.useEffect)((function(){o&&function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t,n,i);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().finally((function(){e({type:I.type})}))}),[e,o,t,n,i]),null},T=n(23),P=n(2),X=Object(c.createContext)();function V(e){var t=e.children,n=Object(s.g)().itemId,c=Object(b.c)(R),i=Object(b.c)(D),o=[{rel:"root",id:n}];c.forEach((function(e){e.from===n&&o.push({rel:"descendant",id:e.to}),e.to===n&&o.push({rel:"ancesstor",id:e.from})}));var r=Object.keys(i),a=[],l=0;r.forEach((function(e,t){var n=0;i[e].items.forEach((function(c){var r=o.findIndex((function(e){return e.id===c}));r<0||(o[r].row=t,o[r].rowCount=n++,o[r].col=i[e].title)})),a[t]=n,l=Math.max(n,l)}));var u=o.map((function(e){return{id:e.id,rel:e.rel,col:e.col,descendants:c.filter((function(t){return t.from===e.id})).length,ancesstors:c.filter((function(t){return t.to===e.id})).length,position:{x:1e3+500*(a[e.row]/2-e.rowCount),y:300*e.row}}})),d=u.findIndex((function(e){return e.id===n}));return Object(P.jsx)(X.Provider,{value:{nodes:u,maxColumns:l,active:d},children:t})}var Y=function(){var e=Object(c.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(T.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){var e=function(){i({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n};function _(e,t){var n=t.type,c=t.payload;switch(n){case"MOUSE_DOWN":return Object(O.a)(Object(O.a)({},e),{},{start:{x:c.x,y:c.y},mouseDown:!0});case"MOUSE_UP":return Object(O.a)(Object(O.a)({},e),{},{mouseDown:!1,prev:Object(O.a)({},e.transform)});case"MOVE":if(!e.mouseDown)return e;var i=e.start,o=e.prev;return Object(O.a)(Object(O.a)({},e),{},{transform:{x:o.x-(i.x-c.x),y:o.y-(i.y-c.y)}});default:return e}}var N,q,Q,H,J=function(e){var t=e.children,n=Object(c.useReducer)(_,{transform:{x:0,y:0},start:{x:0,y:0},prev:{x:0,y:0},mouseDown:!1}),i=Object(T.a)(n,2),o=i[0],r=i[1],a=Object(c.useContext)(X),l=a.nodes,s=a.active,u=Y(),d=Object(c.useMemo)((function(){return{x:u.width/2-l[s].position.x-150,y:u.height/2-l[s].position.y-40}}),[u,l,s]);return Object(c.useEffect)((function(){var e=function(){r({type:"MOUSE_UP"})};return document.addEventListener("mouseleave",e),function(){document.removeEventListener("mouseleave",e)}}),[r]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("rect",{fill:"transparent",width:"2000",height:"2000",onMouseDown:function(e){r({type:"MOUSE_DOWN",payload:{x:e.clientX,y:e.clientY}})},onMouseMove:function(e){r({type:"MOVE",payload:{x:e.clientX,y:e.clientY}})},onMouseUp:function(e){r({type:"MOUSE_UP"})}}),Object(P.jsx)("g",{transform:"translate(".concat(d.x," ").concat(d.y,")"),style:{userSelect:"none"},children:Object(P.jsx)("g",{transform:"translate(".concat(o.transform.x," ").concat(o.transform.y,")"),children:t})})]})},K=n(3),$=Object(v.b)({name:"options",initialState:{showOtherRelations:!1,showAllArrows:!0},reducers:{setOption:function(e,t){var n=t.payload,c=n.key,i=n.value;e[c]=i}}}),G=($.actions.setOption,function(e){var t;return null===e||void 0===e||null===(t=e.options)||void 0===t?void 0:t.showOtherRelations}),Z=$.reducer,ee=K.default.text(N||(N=Object(a.a)(["\n  font: normal 18px sans-serif;\n  pointer-events: none;\n"]))),te=K.default.text(q||(q=Object(a.a)(["\n  font: normal 14px sans-serif;\n  pointer-events: none;\n"]))),ne=K.default.text(Q||(Q=Object(a.a)(["\n  font: normal 14px sans-serif;\n  pointer-events: none;\n"]))),ce=K.default.rect(H||(H=Object(a.a)(["\n  fill: #fff;\n  stroke: #8099a4;\n  stroke-width: 1;\n  filter: \n    drop-shadow(0 3px 3px rgba(0,20,29,0.2)) \n    drop-shadow(0 2px 4px rgba(0,20,29,0.15));\n  ","}\n"])),(function(e){return e.root?"\n      stroke-width: 2;\n      fill: rgb(242, 245, 246);\n      ":"\n      &:hover {\n        stroke-width: 2;\n        stroke: #008200;\n        cursor: pointer;\n      }\n    "})),ie=function(e){var t=e.x,n=e.y,c=e.parentX,i=e.parentY,o=e.text,r="M ".concat(c," ").concat(i,", L ").concat(t," ").concat(n);return Object(P.jsxs)("g",{children:[Object(P.jsx)("path",{d:r,strokeWidth:"2",fill:"transparent",stroke:"rgba(0, 0, 0, 0.4)"}),Object(P.jsx)("circle",{cx:t,cy:n,r:"16",fill:"#ffffff",stroke:"#8099a4",strokeWidth:"1"}),Object(P.jsx)("text",{x:t,y:n,textAnchor:"middle",dominantBaseline:"central",children:o})]})};var oe,re=function(e){var t=e.selected,n=e.itemDetails,c=e.position,i=void 0===c?{x:0,y:0}:c,o=e.rel,r=e.descendants,a=e.ancesstors,l=e.col,s=Object(b.c)(G),u="",d="";return"ancesstor"===o&&(u=r-1>0?"+".concat(r-1):"",d=a),"descendant"===o&&(u=r,d=a-1>0?"+".concat(a-1):""),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("g",{onClick:t,children:[Object(P.jsx)(ce,{root:"root"===o,x:i.x.toString(),y:i.y.toString(),height:"80",width:"300"}),Object(P.jsx)(ee,{x:(i.x+10).toString(),y:(i.y+30).toString(),children:null===n||void 0===n?void 0:n.title}),Object(P.jsx)(ne,{x:(i.x+10).toString(),y:(i.y+60).toString(),children:l}),Object(P.jsxs)(te,{x:(i.x+10).toString(),y:(i.y+60).toString(),children:[l,null===n||void 0===n?void 0:n.description]})]}),s&&Object(P.jsxs)(P.Fragment,{children:[u>0&&Object(P.jsx)(ie,{x:(i.x+240).toString(),y:(i.y+80+40).toString(),parentX:i.x+240,parentY:i.y+80,text:u}),d>0&&Object(P.jsx)(ie,{x:(i.x+240).toString(),y:(i.y-40).toString(),parentX:i.x+240,parentY:i.y,text:d})]})]})},ae=K.default.g(oe||(oe=Object(a.a)(["\n  pointer-events: none;\n"])));var le=function(e){var t=e.activePosition,n=void 0===t?{x:0,y:0}:t,i=e.position,o=void 0===i?{x:0,y:0}:i,r=e.rel,a=Object(c.useMemo)((function(){if(n.y>o.y){var e=o.x+150,t=o.y+80,c=n.x+150,i=n.y;return[" M ".concat(e," ").concat(t,",\n            C ").concat(e," ").concat(t+100,",\n            ").concat(c," ").concat(i-100,",\n            ").concat(c," ").concat(i-10,"\n            L ").concat(c," ").concat(i),"".concat(c,",").concat(i," ").concat(c-5,",").concat(i-10," ").concat(c+5,",").concat(i-10)]}if(n.y<o.y){var a=n.x+150,l=n.y+80,s=o.x+150,u=o.y;return[" M ".concat(a," ").concat(l,",\n              C ").concat(a," ").concat(l+100,",\n              ").concat(s," ").concat(u-100,",\n              ").concat(s," ").concat(u-10,"\n              L ").concat(s," ").concat(u),"".concat(s,",").concat(u," ").concat(s-5,",").concat(u-10," ").concat(s+5,",").concat(u-10)]}if("ancesstor"===r){var d=o.x+150,j=o.y,b=n.x+150,f=n.y;return[" M ".concat(d," ").concat(j,",\n              C ").concat(d," ").concat(j-80,",\n              ").concat(b," ").concat(f-80,",\n              ").concat(b," ").concat(f-10,"\n              L ").concat(b," ").concat(f),"".concat(b,",").concat(f," ").concat(b-5,",").concat(f-10," ").concat(b+5,",").concat(f-10)]}var p=n.x+150,O=n.y+80,v=o.x+150,h=o.y+80;return[" M ".concat(p," ").concat(O,",\n              C ").concat(p," ").concat(O+80,",\n              ").concat(v," ").concat(h+80,",\n              ").concat(v," ").concat(h+10,"\n              L ").concat(v," ").concat(h),"".concat(v,",").concat(h," ").concat(v-5,",").concat(h+10," ").concat(v+5,",").concat(h+10)]}),[o,n,r]),l=Object(T.a)(a,2),s=l[0],u=l[1];return Object(P.jsxs)(ae,{children:[Object(P.jsx)("path",{d:s,strokeWidth:"2",fill:"transparent",stroke:"rgba(0, 0, 0, 0.4)"}),Object(P.jsx)("polygon",{points:u,fill:"black"})]})};var se,ue,de=function(){var e=Object(c.useContext)(X),t=e.nodes,n=e.active,i=Object(b.c)(L),o=Object(s.f)(),r=Object(c.useMemo)((function(){return t[n].position}),[t,n]),a=Object(c.useCallback)((function(e){o.push("/tree/".concat(e))}),[o]);return Object(P.jsx)(P.Fragment,{children:t&&Object(P.jsxs)(P.Fragment,{children:[t.map((function(e,t){return"root"===e.rel?null:Object(P.jsx)(le,{rel:e.rel,position:e.position,activePosition:r},t)})),t.map((function(e,t){return Object(P.jsx)(re,Object(O.a)({selected:function(){a(e.id)},itemDetails:i[e.id]},e),t)}))]})})},je=K.default.div(se||(se=Object(a.a)(["\n  width: calc(100vw - 320px);\n  height: 100vh;\n  position: relative;\n"]))),be=K.default.svg(ue||(ue=Object(a.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n"])));var fe=function(){var e=Y(),t=Object(c.useState)({height:300,width:600,viewbox:"0 0 600 300"}),n=Object(T.a)(t,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){var t=e.width,n=e.height;o({width:t-320,height:n,viewbox:"0 0 ".concat(t-320," ").concat(n)})}),[e,o]),Object(P.jsx)(je,{children:Object(P.jsx)(V,{children:Object(P.jsx)(be,Object(O.a)(Object(O.a)({preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"},i),{},{children:Object(P.jsx)(J,{children:Object(P.jsx)(de,{})})}))})})},pe=Object(c.createContext)(),Oe=function(e){var t=e.children,n=Object(c.useState)(!1),i=Object(T.a)(n,2),o=i[0],r=i[1],a=Object(c.useCallback)((function(){r(!0)}),[r]),l=Object(c.useCallback)((function(){r(!1)}),[r]);return Object(P.jsx)(pe.Provider,{value:{linking:o,drag:a,drop:l},children:t})},ve=Object(c.createContext)({});function he(e,t){var n=t.type,c=t.payload;switch(n){case"ADD":var i=c.id,o=c.ref;return Object(O.a)(Object(O.a)({},e),{},Object(f.a)({},i,o));case"REMOVE":var r=c.id,a=Object(O.a)({},e);return delete a[r],a;default:return e}}var xe,me,ye=function(e){var t=e.children,n=Object(c.useReducer)(he,{}),i=Object(T.a)(n,2),o=i[0],r=i[1],a=Object(c.useCallback)((function(e,t){r({type:"ADD",payload:{id:e,ref:t}})}),[r]),l=Object(c.useCallback)((function(e){r({type:"REMOVE",payload:{id:e}})}),[r]);return Object(P.jsx)(ve.Provider,{value:{refs:o,addRef:a,removeRef:l},children:t})},ge=Object(v.b)({name:"connections",initialState:{scrollLeft:0},reducers:{updateScrollLeft:function(e,t){var n=t.payload.value;e.scrollLeft=n}}}),we=ge.actions.updateScrollLeft,ke=function(e){var t;return null===e||void 0===e||null===(t=e.connections)||void 0===t?void 0:t.scrollLeft},Ce=ge.reducer,Se=K.default.div(xe||(xe=Object(a.a)(["\n  pointer-events: none;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 0;\n"]))),Ee=K.default.svg(me||(me=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  display: block;\n"])));var Me,Ie,Le=function(){var e=Object(b.c)(R),t=Object(b.c)(ke),n=Object(c.useContext)(ve),i=Object(c.useState)({width:100,height:100,viewBox:"0 0 100 100"}),o=Object(T.a)(i,2),r=o[0],a=o[1],l=Y(),s=Object(c.useRef)(null),u=Object(c.useMemo)((function(){var t,c=document.documentElement.scrollTop;return null===e||void 0===e||null===(t=e.map((function(e){var t=e.from,i=e.to;try{var o=n.refs[t],r=n.refs[i],a=o.getBoundingClientRect(),l=a.right-320,s=a.top+c+a.height/2,u=r.getBoundingClientRect(),d=u.right-320,j=u.top+c+u.height/2;return l===d||Math.abs(l-d)<1?(j+=(s>j?1:-1)*u.height/4,{line:"M ".concat(l," ").concat(s," \n          C ").concat(l+40," ").concat(s,", \n            ").concat(d+40," ").concat(j,", \n            ").concat(d," ").concat(j),start:{x:l,y:s}}):(d=u.left-320,{line:"M ".concat(l," ").concat(s," \n            C ").concat(l+40," ").concat(s,", \n              ").concat(d-40," ").concat(j,", \n              ").concat(d," ").concat(j),start:{x:l,y:s}})}catch(b){console.log(b)}return null})))||void 0===t?void 0:t.filter((function(e){return!!e})).map((function(e,t){var n=e.start,c=e.line;return Object(P.jsxs)("g",{children:[Object(P.jsx)("path",{d:c,strokeWidth:"2",fill:"transparent",stroke:"rgba(0, 0, 0, 0.4)"}),Object(P.jsx)("circle",{cx:n.x,cy:n.y,r:"4",fill:"rgb(0, 0, 0)"})]},t)}))}),[l,t,e,n]);return Object(c.useEffect)((function(){l&&(null===s||void 0===s?void 0:s.current)&&a({height:l.height,width:l.width,viewBox:"0 0 ".concat(l.height," ").concat(l.width)})}),[l,s,a]),Object(P.jsx)(Se,{ref:s,children:Object(P.jsx)(Ee,{preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",height:r.height,width:r.width,viewbox:r.viewBox,children:u})})},De=n(145),Re=n.n(De),ze=n(31),Ae=n.n(ze),Ue=Object(v.b)({name:"settings",initialState:{readonly:!0},reducers:{}}),We=function(e){var t;return null===e||void 0===e||null===(t=e.settings)||void 0===t?void 0:t.readonly},Be=Ue.reducer,Fe=n(29),Te=n.n(Fe),Pe=n(267),Xe=n.n(Pe),Ve=n(268),Ye=n.n(Ve),_e=n(188),Ne=n.n(_e),qe=n(50),Qe=n.n(qe),He=Object(v.b)({name:"linking",initialState:{source:!1},reducers:{startLinking:function(e,t){e.source=t.payload.id},doneLinking:function(e){e.source=!1}}}),Je=He.actions,Ke=Je.startLinking,$e=Je.doneLinking,Ge=function(e){var t;return null===e||void 0===e||null===(t=e.linking)||void 0===t?void 0:t.source},Ze=function(e){var t;return!!(null===e||void 0===e||null===(t=e.linking)||void 0===t?void 0:t.source)},et=He.reducer,tt={unknown:{color:"grey",text:"Unknown",description:null},stable:{color:"green",text:"Stable",description:null},underReview:{color:"orange",text:"Under Review",description:null},unstable:{color:"darkorange",text:"Unstable",description:null},outdated:{color:"red",text:"Outdated ",description:null},deprecated:{color:"darkslategray",text:"Deprecated",description:null}},nt=n(109),ct=n.n(nt),it=n(269),ot=n.n(it),rt=n(192),at=K.default.div(Me||(Me=Object(a.a)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n"]))),lt=K.default.span(Ie||(Ie=Object(a.a)(["\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin: 0 0.5rem;\n  vertical-align: middle;\n  ","\n"])),(function(e){return e.color&&"background: ".concat(e.color,";")}));var st,ut,dt,jt=function(e){var t=e.itemId,n=e.item,i=e.doneEditing,o=Object(b.b)(),r=Object(c.useState)(!1),a=Object(T.a)(r,2),l=a[0],s=a[1],u=Object(c.useCallback)((function(e,n){o({type:w.type,payload:{id:t,update:Object(f.a)({},e,n)}})}),[t,o]);return Object(P.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(P.jsx)(Qe.a,{children:Object(P.jsx)(ct.a,{labelInline:!0,label:"Name",size:"small",value:n.title,onChange:function(e){u("title",e.target.value)},required:!0})}),Object(P.jsx)(Qe.a,{children:Object(P.jsx)(rt.Select,{labelInline:!0,name:"simple",size:"small",label:"Status",value:n.status,onChange:function(e){u("status",e.target.value)},children:Object.keys(tt).map((function(e){return Object(P.jsxs)(rt.Option,{value:e,children:[Object(P.jsx)(lt,{color:tt[e].color}),tt[e].text]},e)}))})}),Object(P.jsx)(Qe.a,{children:Object(P.jsx)(ct.a,{labelInline:!0,label:"Description",value:n.description,size:"small",onChange:function(e){return u("description",e.target.value)}})}),Object(P.jsxs)(at,{children:[Object(P.jsx)(Te.a,{size:"small",onClick:s,children:"Delete"}),Object(P.jsx)(Te.a,{buttonType:"primary",size:"small",onClick:i,type:"submit",children:"Done"})]}),Object(P.jsx)(ot.a,{title:"Delete item",open:l,onConfirm:function(){s(!1),requestAnimationFrame((function(){o({type:g.type,payload:{id:t}})}))},onCancel:function(){return s(!1)},children:"Are you sure?"})]})},bt=K.default.div(st||(st=Object(a.a)(["\n  position: relative;\n  margin-bottom: 1.5rem;\n  ","\n"])),(function(e){return e.linking?"\n      cursor:pointer;\n      &:hover {\n        border-color: red;\n      }":""})),ft=K.default.div(ut||(ut=Object(a.a)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n"]))),pt=K.default.div(dt||(dt=Object(a.a)(["\n  position: relative;\n  padding-left: 1rem;\n"])));var Ot,vt,ht,xt,mt,yt,gt,wt=function(e){var t,n,i,o=e.itemId,r=Object(c.useRef)(null),a=Object(c.useState)(!1),l=Object(T.a)(a,2),u=l[0],d=l[1],j=Object(b.b)(),f=Object(s.f)(),p=Object(b.c)(L),O=Object(b.c)(Ge),v=Object(b.c)(Ze),h=Object(b.c)(We);Object(c.useEffect)((function(){console.log({linkingSource:O,linking:v})}),[O,v]);var x=Object(c.useContext)(ve),m=x.addRef,y=x.removeRef,g=Object(c.useMemo)((function(){return p[o]}),[p,o]),w=Object(c.useCallback)((function(e){e.preventDefault(),d(!0),requestAnimationFrame((function(){var e,t;null===(e=r.current)||void 0===e||null===(t=e.querySelector("input"))||void 0===t||t.focus()}))}),[d,r]),k=Object(c.useCallback)((function(){d(!1)}),[d]),C=Object(c.useCallback)((function(e){e.preventDefault(),f.push("/tree/".concat(o))}),[f,o]),E=Object(c.useCallback)((function(){v&&O!==o&&j({type:S.type,payload:{from:O,to:o}})}),[v,O,j,o]),M=Object(c.useCallback)((function(e){e.preventDefault(),j({type:Ke.type,payload:{id:o}})}),[j,o]);return Object(c.useEffect)((function(){return m(o,r.current),function(){y(o)}}),[m,y,r,o]),Object(c.useEffect)((function(){if(v===o){var e=function(e){"Escape"===e.key&&j({type:$e.type})};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}}),[o,v,j]),Object(P.jsx)(bt,{ref:r,onClick:E,linking:!!v,id:o,children:Object(P.jsx)(Ye.a,{orientation:"vertical",pixelWidth:320,children:Object(P.jsx)(Xe.a,{children:u?Object(P.jsx)(jt,{itemId:o,item:g,doneEditing:k}):Object(P.jsxs)(pt,{children:[Object(P.jsx)("div",{style:{position:"absolute",right:"100%",top:"50%",transform:"translate(.5rem, -50%)",cursor:"pointer"},children:Object(P.jsx)(Ae.a,{fontSize:"medium",type:"drag_vertical"})}),Object(P.jsx)(Qe.a,{variant:"h3",mb:1,children:null!==(t=g.title)&&void 0!==t?t:"\xa0"}),g.status&&Object(P.jsx)(Ne.a,{mb:1,borderColor:null===(n=tt[g.status])||void 0===n?void 0:n.color,fill:!0,children:null===(i=tt[g.status])||void 0===i?void 0:i.text}),g.description&&Object(P.jsx)(Qe.a,{mb:2,children:g.description}),Object(P.jsx)(ft,{children:O===o?Object(P.jsx)(Te.a,{size:"small",variant:"primary",onClick:function(){return j({type:$e.type})},children:"Done"}):Object(P.jsxs)(P.Fragment,{children:[!h&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Te.a,{size:"small",onClick:w,disabled:!!v,children:"Edit"}),Object(P.jsx)(Te.a,{size:"small",onClick:M,disabled:!!v,children:"Link"})]}),Object(P.jsx)(Te.a,{size:"small",onClick:C,disabled:!!v,children:"Tree"})]})})]})})})})},kt=K.default.div(Ot||(Ot=Object(a.a)(["\n  display: flex;\n  padding: 0 2.5rem;\n  flex: 0 0 320px;\n  flex-direction: column;\n  border-right: 2px solid #8099a4;\n"]))),Ct=K.default.div(vt||(vt=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  align-items: center;\n  ","\n"])),(function(e){return e.justify&&"justify-content: ".concat(e.justify,";")})),St=K.default.div(ht||(ht=Object(a.a)(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 1.5rem 0;\n  display: flex;\n  gap: 1rem;\n"]))),Et=K.default.h2(xt||(xt=Object(a.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  padding: 0.5rem;\n  border-bottom: 2px solid transparent;\n  margin: 0;\n"]))),Mt=K.default.input(mt||(mt=Object(a.a)(["\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 0.5rem;\n  border-radius: 0;\n  width: 100%;\n  border-bottom: 2px solid transparent;\n  box-sizing: border-box;\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid #0077c8;\n  }\n"]))),It=K.default.div(yt||(yt=Object(a.a)(["\n  flex: 1 0 auto;\n  position: relative;\n"]))),Lt=K.default.div(gt||(gt=Object(a.a)(["\n  position: absolute;\n  right: 0;\n  top: 0.5rem;\n  cursor: pointer;\n"])));var Dt,Rt,zt=function(e){var t,n=e.justify,i=void 0===n?"flex-start":n,o=e.colId,r=Object(b.b)(),a=Object(b.c)(D),l=Object(c.useMemo)((function(){return a[o]}),[o,a]),s=Object(b.c)(We),u=Object(c.useRef)(null);return Object(P.jsxs)(kt,{children:[Object(P.jsx)(St,{children:s?Object(P.jsx)(Et,{children:null===l||void 0===l?void 0:l.title}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(It,{children:[Object(P.jsx)(Mt,{ref:u,value:null===l||void 0===l?void 0:l.title,type:"text",onChange:function(e){r({type:C.type,payload:{id:o,title:e.target.value}})}}),Object(P.jsx)(Lt,{onClick:function(){u.current.focus()},children:Object(P.jsx)(Ae.a,{type:"edit"})})]}),Object(P.jsx)(Re.a,{type:"button",onAction:function(e){e.preventDefault(),r({type:y.type,payload:{column:o}})},children:Object(P.jsx)(Ae.a,{bgTheme:"info",bgSize:"large",type:"plus"})})]})}),Object(P.jsx)(Ct,{justify:i,children:null===l||void 0===l||null===(t=l.items)||void 0===t?void 0:t.map((function(e){return Object(P.jsx)(wt,{itemId:e},e)}))})]})},At=K.default.div(Dt||(Dt=Object(a.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  position: relative;\n"]))),Ut=K.default.div(Rt||(Rt=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex: 1 1 100%;\n  overflow-x: scroll;\n  scroll-behaviour: smooth;\n"]))),Wt=function(e){var t=e.children;return Object(P.jsx)(Oe,{children:Object(P.jsx)(ye,{children:t})})};var Bt,Ft,Tt,Pt=function(){var e=Object(b.c)(D),t=Object(b.b)(),n=Object(c.useRef)(null),i=Object(c.useCallback)((function(e){t({type:we.type,payload:{value:e.target.scrollLeft}})}),[t]);return Object(P.jsxs)(Wt,{children:[Object(P.jsx)(Le,{}),Object(P.jsx)(At,{children:Object(P.jsx)(Ut,{ref:n,onScroll:i,children:Object.keys(e).map((function(e){return Object(P.jsx)(zt,{colId:e},e)}))})})]})},Xt=n(270),Vt=n.n(Xt),Yt=K.default.div(Bt||(Bt=Object(a.a)(["\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n"]))),_t=K.default.ul(Ft||(Ft=Object(a.a)(["\n  max-height: 400px;\n  overflow-y: auto;\n  list-style: none;\n  padding: 0;\n"]))),Nt=K.default.li(Tt||(Tt=Object(a.a)(["\n  padding: 0.5rem;\n  border: 1px solid #ccd6db;\n  margin-bottom: 1rem;\n"])));var qt,Qt,Ht=function(e){var t=e.searchTerm,n=Object(s.f)(),i=Object(c.useCallback)((function(e){if(!t)return[];var n=L(e);return n?Object.keys(n).map((function(e){return Object(O.a)(Object(O.a)({},n[e]),{},{id:e})})).filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase())})):[]}),[t]),o=Object(b.c)((function(e){return i(e,t)}));return Object(P.jsx)("div",{children:Object(P.jsx)(_t,{children:o.map((function(e){return Object(P.jsxs)(Nt,{as:"li",listStyleType:"none",pl:0,children:[Object(P.jsx)(Qe.a,{fontWeight:"700",mb:2,children:e.title}),Object(P.jsx)(Yt,{children:Object(P.jsx)(Te.a,{size:"small",onClick:function(){n.push("/tree/".concat(e.id))},children:"Tree View"})})]},e.id)}))})})},Jt=K.default.form(qt||(qt=Object(a.a)(["\n  margin: 2rem 0;\n  padding: 0 2rem;\n"]))),Kt=K.default.label(Qt||(Qt=Object(a.a)(["\n  display: block;\n  margin: 0 0 2rem;\n"])));var $t=function(){var e=Object(c.useState)(""),t=Object(T.a)(e,2),n=t[0],i=t[1];return Object(P.jsxs)(Jt,{onSubmit:function(e){return e.preventDefault()},children:[Object(P.jsxs)(Kt,{children:[Object(P.jsx)(Qe.a,{as:"div",fontWeight:"700",mb:1,children:"Search"}),Object(P.jsx)(Vt.a,{id:"search",name:"search",placeholder:"",onChange:function(e){return i(e.target.value)},value:n,searchButton:!0})]}),Object(P.jsx)(Ht,{searchTerm:n})]})};var Gt,Zt,en,tn=function(){var e=Object(b.c)(We),t=Object(b.c)(A),n=Object(b.b)(),i=Object(c.useCallback)((function(e){e.preventDefault(),n({type:M.type})}),[n]);return e?null:Object(P.jsx)(Te.a,{fullWidth:!0,buttonType:"primary",disabled:t,onClick:i,children:"Save"})},nn=K.default.div(Gt||(Gt=Object(a.a)(["\n  width: 320px;\n  flex: 0 0 320px;\n  background: rgb(242, 245, 246);\n  position: relative;\n  z-index: 2;\n"]))),cn=K.default.div(Zt||(Zt=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 2rem;\n  gap: 1rem;\n"]))),on=K.default.hr(en||(en=Object(a.a)(["\n  margin: 2rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"])));var rn,an,ln=function(){var e=Object(s.f)(),t=Object(b.b)(),n=Object(b.c)(We);return Object(P.jsxs)(nn,{children:[Object(P.jsx)($t,{}),Object(P.jsx)(on,{}),Object(P.jsxs)(cn,{children:[Object(P.jsxs)(s.a,{path:"/tree/",children:[Object(P.jsx)(Te.a,{fullWidth:!0,onClick:function(){return e.push("/")},children:"Columns View"}),Object(P.jsx)(Te.a,{fullWidth:!0,onClick:function(){return e.goBack()},children:"Back"})]}),Object(P.jsx)(s.a,{exact:!0,path:"/",children:!n&&Object(P.jsx)(Te.a,{onClick:function(){t({type:k.toString()})},fullWidth:!0,iconType:"plus",children:"Add New Column"})}),Object(P.jsx)(tn,{})]})]})},sn=K.default.div(rn||(rn=Object(a.a)(["\n  display: flex;\n  min-height: 100vh;\n  width: 100%;\n  max-width: 100vw;\n  align-items: stretch;\n"]))),un=K.default.div(an||(an=Object(a.a)(["\n  flex: 0 1 calc(100% - 320px);\n  max-width: calc(100% - 320px);\n  position: relative;\n  z-index: 1;\n"])));var dn=function(){return Object(P.jsxs)(sn,{children:[Object(P.jsx)(F,{}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(ln,{}),Object(P.jsx)(un,{children:Object(P.jsxs)(s.c,{children:[Object(P.jsx)(s.a,{path:"/tree/:itemId",component:fe}),Object(P.jsx)(s.a,{path:"/",component:Pt})]})})]})]})},jn=Object(v.b)({name:"user",initialState:{userDetails:{uid:null,email:null,photoURL:null},signedIn:!1,writeAccess:!1},reducers:{setUser:function(e,t){t.payload?(e.userDetails={uid:t.payload.user.uid,email:t.payload.user.email,photoURL:t.payload.user.photoURL},e.signedIn=!0,e.writeAccess="hFgfQcppuQXWOjHC72Cs7XK0uQ52"===t.payload.user.uid):(e.userDetails={uid:null,email:null,photoURL:null},e.signedIn=!1,e.writeAccess=!1)}}}),bn=(jn.actions.setUser,jn.reducer),fn=Object(v.a)({reducer:{linking:et,dependancies:U,connections:Ce,options:Z,user:bn,settings:Be}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pn=n(271),On=n.n(pn),vn=(n(430),n(272)),hn={apiKey:"AIzaSyAESY7RU998b2rdyyWMhCkt4mfQXfEdpyM",authDomain:"dependancy-graph.firebaseapp.com",projectId:"dependancy-graph",storageBucket:"dependancy-graph.appspot.com",messagingSenderId:"257602314188",appId:"1:257602314188:web:b6daa829c5e07f23648769"};r.a.render(Object(P.jsxs)(i.a.StrictMode,{children:[Object(P.jsx)(On.a,{}),Object(P.jsx)(vn.a,{firebaseConfig:hn,children:Object(P.jsx)(b.a,{store:fn,children:Object(P.jsx)(dn,{})})})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[428,3,4]]]);
//# sourceMappingURL=main.04c8b678.chunk.js.map