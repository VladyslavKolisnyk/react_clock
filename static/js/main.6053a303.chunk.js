(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),s=n(5),r=n(4),l=n(1),d=n.n(l),m=(n(12),n(0)),u=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={date:(new Date).toUTCString().slice(-12,-4)},e.timerSecondsId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerSecondsId=window.setInterval((function(){e.setState({date:(new Date).toUTCString().slice(-12,-4)})}),1e3)}},{key:"componentDidUpdate",value:function(e,t){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName)),t.date!==this.state.date&&console.info(this.state.date)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerSecondsId)}},{key:"render",value:function(){var e=this.props.clockName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.date})]})}}]),n}(d.a.Component);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var p=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.handleHideComponent=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleShowComponent=function(t){t.preventDefault(),e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.handleHideComponent),document.addEventListener("click",this.handleShowComponent)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleHideComponent),document.removeEventListener("click",this.handleShowComponent)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(u,{clockName:this.state.clockName})]})}}]),n}(d.a.Component);o.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6053a303.chunk.js.map