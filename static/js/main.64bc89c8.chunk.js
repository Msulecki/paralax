(this.webpackJsonpparalax=this.webpackJsonpparalax||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(14),c=t.n(r);t(23);var m=function(){return n.a.createElement("div",{className:"modal-window"},n.a.createElement("div",{className:"modal-message"},"Paralax test"))},E=t(17);function u(e){var a=document.body,t=e.children,r=e.power,c=e.reverse,m=e.centered,u=Object(l.useState)({left:"0px",top:"0px",position:"absolute"}),o=Object(E.a)(u,2),p=o[0],s=o[1],i=n.a.createElement("div",{style:{position:"absolute"}},p.left+":"+p.top),d=n.a.createElement("div",{className:"paralax",style:{position:"relative"}},n.a.createElement("div",{className:"paralax-content",style:p},i,t));return a.onmousemove=function(e){var t=a.querySelector(".paralax-list"),l=m?a:a.querySelector(".paralax"),n=l.clientHeight/2+l.offsetTop,E=l.clientWidth/2+l.offsetLeft,u=Math.floor((e.clientX-E)/(20/(r||1)))*(c?-1:1),o=Math.floor((e.clientY-n)/(20/(r||1)))*(c?-1:1);s({left:u+"px",top:o+"px",position:"absolute"}),t&&(t.style.marginLeft=u+"px",t.style.marginTop=o+"px")},d}function o(e){return n.a.createElement("div",{className:"paralax-list"},e.children)}var p=t(7),s=t(5);t(24);var i=function(){return n.a.createElement(p.a,null,n.a.createElement("nav",{className:"app__nav"},n.a.createElement(p.b,{to:"/power-1"},"Power = 1."),n.a.createElement(p.b,{to:"/power-5"},"Power = 5"),n.a.createElement(p.b,{to:"/reversed"},"Reversed"),n.a.createElement(p.b,{to:"/center"},"Absolute center"),n.a.createElement(p.b,{to:"/static"},"Static")),n.a.createElement(s.b,{path:"/*"},n.a.createElement(s.a,{to:"/power-1"})),n.a.createElement(s.b,{path:"/paralax/power-1"},n.a.createElement(o,null,n.a.createElement("div",{className:"app"},n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(u,{power:1},n.a.createElement(m,null)),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null)))),n.a.createElement(s.b,{path:"/paralax/power-5"},n.a.createElement(o,null,n.a.createElement("div",{className:"app"},n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(u,{power:5},n.a.createElement(m,null)),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null)))),n.a.createElement(s.b,{path:"/paralax/reversed"},n.a.createElement(o,null,n.a.createElement("div",{className:"app"},n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(u,{power:1,reverse:!0},n.a.createElement(m,null)),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null)))),n.a.createElement(s.b,{path:"/paralax/center"},n.a.createElement(o,null,n.a.createElement("div",{className:"app"},n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(u,{power:1,centered:!0},n.a.createElement(m,null)),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null)))),n.a.createElement(s.b,{path:"/paralax/static"},n.a.createElement("div",{className:"app"},n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(u,{power:1},n.a.createElement(m,null)),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null),n.a.createElement(m,null))))};c.a.render(n.a.createElement(i,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.64bc89c8.chunk.js.map