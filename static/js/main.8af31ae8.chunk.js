(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(3),o=a.n(m),r=(a(16),a(17),function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"MEME GENERATOR"))}),c=a(4),i=a(5),s=a(6),u=a(8),h=a(7),d=a(1),p=a(9),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={topTxt:"",bottomTxt:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){var a=t.data.memes;console.log(a[0]),e.setState({allMemeImgs:a})})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;this.setState({randomImg:a})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",name:"topTxt",value:this.state.topTxt,placeholder:"Top Text",onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"bottomTxt",value:this.state.bottomTxt,placeholder:"Bottom Text",onChange:this.handleChange}),l.a.createElement("button",null,"GEN")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,alt:""}),l.a.createElement("h2",{className:"top"},this.state.topTxt),l.a.createElement("h2",{className:"bottom"},this.state.bottomTxt)))}}]),t}(n.Component);var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r,null),l.a.createElement(b,null))};o.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8af31ae8.chunk.js.map