(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(6),c=a.n(n),d=(a(15),a(2)),u=a(4),o=a(7),r=a(8),m=a(3),h=a(10),p=a(9),l=(a.p,a(16),a(0)),j=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={q:{status:"inactive",audio:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")},w:{status:"inactive",audio:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")},e:{status:"inactive",audio:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")},a:{status:"inactive",audio:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")},s:{status:"inactive",audio:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")},d:{status:"inactive",audio:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")},z:{status:"inactive",audio:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")},x:{status:"inactive",audio:new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")},c:{status:"inactive",audio:new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")}},s.handleKeyPress=s.handleKeyPress.bind(Object(m.a)(s)),s.handleKeyUp=s.handleKeyUp.bind(Object(m.a)(s)),s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.handleKeyPress),document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.handleKeyPress),document.removeEventListener("keyup",this.handleKeyUp)}},{key:"handleKeyPress",value:function(e){e.key in this.state&&(this.setState((function(t){return Object(d.a)({},e.key,Object(u.a)(Object(u.a)({},t[e.key]),{},{status:"active"}))})),this.state[e.key].audio.pause(),this.state[e.key].audio.currentTime=0,this.state[e.key].audio.play())}},{key:"handleKeyUp",value:function(e){e.key in this.state&&this.setState((function(t){return Object(d.a)({},e.key,Object(u.a)(Object(u.a)({},t[e.key]),{},{status:"inactive"}))}))}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{id:"drum-machine",children:Object(l.jsxs)("div",{id:"pad-container",children:[Object(l.jsx)("div",{id:"Q",className:"pad "+this.state.q.status,children:"Q"}),Object(l.jsx)("div",{id:"W",className:"pad "+this.state.w.status,children:"W"}),Object(l.jsx)("div",{id:"E",className:"pad "+this.state.e.status,children:"E"}),Object(l.jsx)("div",{id:"A",className:"pad "+this.state.a.status,children:"A"}),Object(l.jsx)("div",{id:"S",className:"pad "+this.state.s.status,children:"S"}),Object(l.jsx)("div",{id:"D",className:"pad "+this.state.d.status,children:"D"}),Object(l.jsx)("div",{id:"Z",className:"pad "+this.state.z.status,children:"Z"}),Object(l.jsx)("div",{id:"X",className:"pad "+this.state.x.status,children:"X"}),Object(l.jsx)("div",{id:"C",className:"pad "+this.state.c.status,children:"C"})]})})})}}]),a}(i.a.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),i(e),n(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.2f8fbf67.chunk.js.map