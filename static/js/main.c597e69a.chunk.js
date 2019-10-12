(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t,n){e.exports=n(72)},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),l=n(20),i=n(28),u=n(36),s=n(45),m=n(73),d=n(114),f=n(126),p=n(128);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=Object(s.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(2)},margin:{margin:e.spacing(1)},paper:{padding:e.spacing(.5),marginTop:e.spacing(2)}}}),h=function(e){var t=b(),n={Name:"",Sunday:"",Monday:"",Tuesday:"",Wednesday:"",Thursday:""},c=Object(a.useState)(n),o=Object(l.a)(c,2),s=o[0],y=o[1],h=e.addedCourses,E=e.setAddedCourses;function O(){(function(e){for(var t in e)if(e[t].length>0)return!0;return!1})(s)&&(E([].concat(Object(u.a)(h),[s])),y(g({},n,{Name:s.Name})))}return r.a.createElement(m.a,{className:t.paper},r.a.createElement("form",{onKeyPress:function(e){"Enter"===e.key&&O()},className:t.container,noValidate:!0,autoComplete:"off"},r.a.createElement(f.a,{onChange:function(e){return y(g({},s,{Name:e.target.value}))},label:"Course Name",className:t.textField,margin:"dense",variant:"outlined",value:s.Name}),Object.keys(n).slice(1).map(function(e,n){return r.a.createElement(p.a,{key:n,title:"Enter ".concat(e,'\'s periods seperated by comma "," e.g. "1,2,3"')},r.a.createElement(f.a,{onChange:function(t){return function(e,t){(/^(11|10|\d)(,11||,10||,\d||,)*$/g.test(e)||0===e.trim().length)&&y(g({},s,Object(i.a)({},t,e)))}(t.target.value,e)},label:e,className:t.textField,margin:"dense",variant:"outlined",value:s[e]}))})),r.a.createElement(d.a,{className:t.margin,size:"small",color:"secondary",onClick:O},r.a.createElement("i",{className:"material-icons"},"add")))};var E=n(129),O=n(48),v=n.n(O);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function N(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e);delete t.Name;var n="";for(var a in t)t[a].length>0&&(n+="".concat(a,": ").concat(t[a]," \n"));return n}var w=Object(s.a)(function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:e.spacing(.5),marginTop:e.spacing(2)},chip:{margin:e.spacing(.5)}}}),S=function(e){var t=w(),n=e.addedCourses,a=e.setAddedCourses;return r.a.createElement(m.a,{className:t.root},n.map(function(e,c){return r.a.createElement(p.a,{key:c,title:N(e)},r.a.createElement(E.a,{color:"primary",label:e.Name,onDelete:function(){a(n.filter(function(t){return e!==t}))},className:t.chip,icon:r.a.createElement(v.a,null)}))}))},T=n(14),C=n.n(T);function P(e,t){return!(!e.Sunday||!t.Sunday||0===C.a.intersection(e.Sunday.split(","),t.Sunday.split(",")).length)||(!(!e.Monday||!t.Monday||0===C.a.intersection(e.Monday.split(","),t.Monday.split(",")).length)||(!(!e.Tuesday||!t.Tuesday||0===C.a.intersection(e.Tuesday.split(","),t.Tuesday.split(",")).length)||(!(!e.Wednesday||!t.Wednesday||0===C.a.intersection(e.Wednesday.split(","),t.Wednesday.split(",")).length)||!(!e.THU||!t.THU||0===C.a.intersection(e.THU.split(","),t.THU.split(",")).length))))}function k(e){if(e.length>=2){for(var t=0;t<e.length;t++)for(var n=e[t],a=t+1;a<e.length;a++){if(P(n,e[a]))return!1}return!0}return!0}function x(e){var t=[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];return e.forEach(function(e){var n="hsl("+360*Math.random()+","+(25+70*Math.random())+"%,"+(85+10*Math.random())+"%)";e.Sunday&&e.Sunday.split(",").filter(Boolean).map(function(e){return parseInt(e)}).forEach(function(a){t[a-1][0]={name:e.Name,color:n}}),e.Monday&&e.Monday.split(",").filter(Boolean).map(function(e){return parseInt(e)}).forEach(function(a){t[a-1][1]={name:e.Name,color:n}}),e.Tuesday&&e.Tuesday.split(",").filter(Boolean).map(function(e){return parseInt(e)}).forEach(function(a){t[a-1][2]={name:e.Name,color:n}}),e.Wednesday&&e.Wednesday.split(",").filter(Boolean).map(function(e){return parseInt(e)}).forEach(function(a){t[a-1][3]={name:e.Name,color:n}}),e.Thursday&&e.Thursday.split(",").filter(Boolean).map(function(e){return parseInt(e)}).forEach(function(a){t[a-1][4]={name:e.Name,color:n}})}),function(e){for(var t=e.length,n=e.length-1;n>=0;n--){var a=e[n];if(a.reduce(function(e,t){return Boolean(e||t)})){t=n+1;break}}return e.slice(0,t)}(t)}C.a.mixin({combinations:function(){return C.a.reduce(Array.prototype.slice.call(arguments,1),function(e,t){return C.a.reduce(e,function(e,n){return e.concat(C.a.map(t,function(e){return n.concat([e])}))},[])},C.a.map(arguments[0],function(e){return[e]}))}});var M=function(e){var t=C.a.uniq(e.map(function(e){return e.Name})).map(function(t){return e.filter(function(e){return e.Name===t})});return C.a.combinations.apply(C.a,Object(u.a)(t)).filter(k)},W=n(115),D=n(121),I=n(118),B=n(116),A=n(117),J=n(120),U=n(119),F=Object(s.a)(function(e){return{root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto",maxWidth:1e3},table:{minWidth:650},flex:{display:"flex",alignItems:"center",justifyContent:"center"},button:{display:"block",width:"33%",marginRight:e.spacing(5),marginLeft:e.spacing(5)}}});function H(e){var t,n=e.schedules,c=F(),o=Object(a.useState)(0),i=Object(l.a)(o,2),u=i[0],s=i[1];return u>=n.length?(s(u-1),t=x(n[u-1])):t=x(n[u]),r.a.createElement(m.a,{className:c.root},r.a.createElement(W.a,{className:c.table},r.a.createElement(B.a,null,r.a.createElement(A.a,null,r.a.createElement(I.a,{colSpan:12},r.a.createElement(U.a,{className:c.flex},r.a.createElement(J.a,{className:c.button,variant:"outlined",color:"secondary",disabled:0===u,onClick:function(e){s(u-1)}},"Previous"),r.a.createElement(E.a,{variant:"outlined",color:"secondary",label:"".concat(u+1," out of ").concat(n.length)}),r.a.createElement(J.a,{className:c.button,variant:"outlined",color:"secondary",disabled:u===n.length-1,onClick:function(e){s(u+1)}},"Next")))),r.a.createElement(A.a,null,r.a.createElement(I.a,{align:"center"},"Time"),r.a.createElement(I.a,{align:"center"},"Sunday"),r.a.createElement(I.a,{align:"center"},"Monday"),r.a.createElement(I.a,{align:"center"},"Tuesday"),r.a.createElement(I.a,{align:"center"},"Wednesday"),r.a.createElement(I.a,{align:"center"},"Thursday"))),r.a.createElement(D.a,null,t.map(function(e,t){return r.a.createElement(A.a,{key:t},t<6&&r.a.createElement(I.a,null,t+7,":00 AM")||r.a.createElement(I.a,null,t+7-12,":00 PM"),e.map(function(e,t){return r.a.createElement(I.a,{key:t,align:"center",style:{backgroundColor:e.color}},e.name)}))}))))}var L=n(122),R=n(123),q=n(124);function z(){return r.a.createElement(L.a,{position:"static",color:"primary"},r.a.createElement(R.a,null,r.a.createElement(q.a,{variant:"h6",color:"inherit"},"UCJ Scheduler")))}var G=Object(s.a)({root:{flexGrow:1}});var K=function(){var e=G(),t=function(e,t){var n=Object(a.useState)(function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}}),r=Object(l.a)(n,2),c=r[0],o=r[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("addedCourses",[]),n=Object(l.a)(t,2),c=n[0],o=n[1],i=M(c);return r.a.createElement("div",{className:e.root},r.a.createElement(z,null),r.a.createElement(U.a,null,0!==c.length&&r.a.createElement(S,{setAddedCourses:o,addedCourses:c}),r.a.createElement(h,{setAddedCourses:o,addedCourses:c}),0!==i.length&&r.a.createElement(H,{schedules:i})))},V=n(125);o.a.render(r.a.createElement(V.a,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.c597e69a.chunk.js.map