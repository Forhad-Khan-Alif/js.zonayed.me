(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(e,t,n){"use strict";n.r(t);n(25);var a=n(0),r=n.n(a),i=n(223),c=n(222),s=n(46),u=n(231),l=n.n(u),o=(n(233),function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return Object(a.useEffect)(function(){return n(!0),function(){n(!1)}},[t]),r.a.createElement("div",{className:"comment"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"আপনার মন্তব্যঃ"),r.a.createElement("p",null,"যদি এই পোস্টে কোন ভুল(যেকোনো ধরনের) পেয়ে থাকেন অথবা কোনো ব্যাপারে সন্দেহ থাকে তাহলে এখানে জানাতে পারবেন।")),t&&r.a.createElement(l.a,{repo:"zonayedpca/js.zonayed.me",type:"og:title"}))}),m=n(24),M=(n(234),function(e){var t=e.allData,n=e.path,a=e.title,i=e.content,c=Object(m.a)(t,n),u=c[0],l=c[1];return r.a.createElement("div",{className:"post"},r.a.createElement("div",null,r.a.createElement("h2",{className:"title",dangerouslySetInnerHTML:{__html:a}})),r.a.createElement("div",null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}})),r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",null,u&&r.a.createElement("li",{className:"prev"},r.a.createElement("p",{className:"nav"},"আগের পোস্টঃ "),r.a.createElement("p",null,r.a.createElement(s.a,{to:"/"+u.category+"/"+u.id,dangerouslySetInnerHTML:{__html:Object(m.e)(u.title)}}))),l&&r.a.createElement("li",{className:"next"},r.a.createElement("p",{className:"nav"},"পরের পোস্টঃ "),r.a.createElement("p",null,r.a.createElement(s.a,{to:"/"+l.category+"/"+l.id,dangerouslySetInnerHTML:{__html:Object(m.e)(l.title)}}))))),r.a.createElement(o,null))}),p=(n(13),n(14),n(8),n(18),n(235)),y=n.n(p),d=n(236),L=n.n(d),f=(n(237),function(e){var t=e.category,n=e.topics,i=e.curCategory,c=e.curPost,u=Object(a.useState)(t===i),l=u[0],o=u[1];return r.a.createElement("div",{className:"topic-list"},r.a.createElement("h4",{onClick:function(){return o(!l)}},Object(m.g)(t)," ",r.a.createElement("img",{alt:"down-arrow",src:l?L.a:y.a})),l&&r.a.createElement("ul",null,n.map(function(e,n){var a=e.title,u=e.date;return r.a.createElement("li",{key:String(u)},t+"/post-"+n==i+"/"+c&&r.a.createElement("span",null),r.a.createElement(s.a,{className:t+"/post-"+n==i+"/"+c?"current-post":"",to:"/"+t+"/post-"+n,dangerouslySetInnerHTML:{__html:Object(m.e)(a)}}))})))}),j=n(238),b=n.n(j),g=(n(239),function(e){var t=e.path,n=e.topics,i=Object(a.useState)(!1),c=i[0],s=i[1],u=t.split("/"),l=u[1],o=u[2],m=Object.keys(n);return r.a.createElement("div",{className:"catalog "+(c?"":"mobile")},r.a.createElement("div",{onClick:function(){return s(!c)},className:"action"},r.a.createElement("button",null,r.a.createElement("img",{src:b.a,alt:"menu"}))),m.map(function(e){return r.a.createElement(f,{key:e,topics:n[e],category:e,curCategory:l,curPost:o})}))});n(240),t.default=function(e){var t=e.path,n=e.pageContext,s=n.id,u=n.data,l=n.allData;return Object(a.useEffect)(function(){Object(m.c)(),Object(m.b)({id:s,title:u.title,topic:t.split("/")[1]})}),r.a.createElement(i.a,null,r.a.createElement(c.a,{title:u.title,description:"একটা শর্টে লেখার অংশবিশেষ"}),r.a.createElement("div",{className:"post-area"},r.a.createElement(M,{allData:l,path:t,title:u.title,content:u.content}),r.a.createElement(g,{path:t,topics:l})))}},231:function(e,t,n){"use strict";n(78),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"identifierTypes",{enumerable:!0,get:function(){return a.identifierTypes}});var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(232))},232:function(e,t,n){"use strict";n(154),n(19),n(59),n(79),n(49),n(39),n(78),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.identifierTypes=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),i=(a=n(50))&&a.__esModule?a:{default:a};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=["pathname","url","title","og:title","issue-number","issue-term"],M=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,l(t).call(this,e))).myRef=r.default.createRef(),n.state={pending:!0},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(t,r.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.repo,a=t.type,r=t.specificTerm,i=t.issueNumber,c=function(e){if(!(m.indexOf(e)<0))return"issue-number"===e?"issue-number":"issue-term";console.warn("Wrong type: "+e)}(a),s=function(e,t,n){if(!(m.indexOf(e)<0))return"pathname"===e?"pathname":"url"===e?"url":"title"===e?"title":"og:title"===e?"og:title":"issue-term"===e?t:"issue-number"===e?n:void 0;console.warn("Wrong type: "+e)}(a,r,i);if("issue-term"!==a||s)if("issue-number"===a&&(isNaN(s)||s<1))console.warn("When type is '".concat(a,"', valid 'issueNumber' prop must be provided"));else{var u=document.createElement("script");u.src="https://utteranc.es/client.js",u.async=!0,u.setAttribute("repo",n),u.setAttribute("crossorigin","anonymous"),u.setAttribute(c,s),u.onload=function(){return e.setState({pending:!1})},this.myRef.current.appendChild(u)}else console.warn("When type is '".concat(a,"', 'specificTerm' prop must be provided"))}},{key:"render",value:function(){return r.default.createElement("div",{className:"react-utterences",ref:this.myRef},this.props.debug&&r.default.createElement("pre",{style:{background:"#cccccc",padding:10}},"\nthis.props: ".concat(JSON.stringify(this.props,null,2),'\nlocation.pathname: "').concat(window.location.pathname,'"\nlocation.href: "').concat(window.location.href,'"\n          ').trim()),this.props.debug&&r.default.createElement("div",null,"👇👇If the settings are valid, the comment widget appear below👇👇"),this.state.pending&&r.default.createElement("div",null,"Loading script..."))}}])&&s(n.prototype,a),i&&s(n,i),t}();t.identifierTypes={pathname:{attrValue:"",summary:"Issue title contains page pathname"},url:{attrValue:"url",summary:"Issue title contains page URL"},title:{attrValue:"title",summary:"Issue title contains page title"},"og:title":{attrValue:"og:title",summary:"Issue title contains page og:title"},"issue-number":{attrValue:-1,summary:"Specific issue number"},"issue-term":{attrValue:"",summary:"Issue title contains specific term"}},M.propTypes={type:i.default.string.isRequired,repo:i.default.string.isRequired,specificTerm:i.default.string,issueNumber:i.default.number,hashKey:i.default.string,debug:i.default.bool};var p=M;t.default=p},235:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyOSAxMjkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0xMjEuMywzNC42Yy0xLjYtMS42LTQuMi0xLjYtNS44LDBsLTUxLDUxLjEtNTEuMS01MS4xYy0xLjYtMS42LTQuMi0xLjYtNS44LDAtMS42LDEuNi0xLjYsNC4yIDAsNS44bDUzLjksNTMuOWMwLjgsMC44IDEuOCwxLjIgMi45LDEuMiAxLDAgMi4xLTAuNCAyLjktMS4ybDUzLjktNTMuOWMxLjctMS42IDEuNy00LjIgMC4xLTUuOHoiLz4KICA8L2c+Cjwvc3ZnPgo="},236:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyB3aWR0aD0iNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCI+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjMUQxRDFCIiBkPSJNMy4zNTIsNDguMjk2bDI4LjU2LTI4LjMyOGwyOC41OCwyOC4zNDdjMC4zOTcsMC4zOTQsMC45MTcsMC41OSwxLjQzNiwwLjU5YzAuNTIsMCwxLjA0LTAuMTk2LDEuNDM2LTAuNTkgICBjMC43OTMtMC43ODcsMC43OTMtMi4wNjIsMC0yLjg0OWwtMjkuOTgtMjkuNzM1Yy0wLjItMC4yLTAuNDk0LTAuMzc1LTAuNzU3LTAuNDc1Yy0wLjc1LTAuMjgyLTEuNTk3LTAuMTA3LTIuMTY2LDAuNDU2ICAgTDAuNDc5LDQ1LjQ0N2MtMC43OTMsMC43ODctMC43OTMsMi4wNjIsMCwyLjg0OUMxLjI3Myw0OS4wODIsMi41NTgsNDkuMDgyLDMuMzUyLDQ4LjI5NnoiLz4KICA8L2c+Cjwvc3ZnPgo="},238:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDU2IDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NiA1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGMERCNEY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOCwwQzEyLjYsMCwwLDEyLjYsMCwyOHMxMi42LDI4LDI4LDI4czI4LTEyLjYsMjgtMjhTNDMuNCwwLDI4LDB6IE0yOCw1NEMxMy43LDU0LDIsNDIuMywyLDI4UzEzLjcsMiwyOCwyCgkJczI2LDExLjcsMjYsMjZTNDIuMyw1NCwyOCw1NHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNSwxN2gyNmMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgxNWMtMC42LDAtMSwwLjQtMSwxUzE0LjQsMTcsMTUsMTd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDUsMzFIMTFjLTAuNiwwLTEsMC40LTEsMWMwLDAuNiwwLjQsMSwxLDFoMzRjMC42LDAsMS0wLjQsMS0xUzQ1LjYsMzEsNDUsMzF6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDUsMjNIMTFjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMzRjMC42LDAsMS0wLjQsMS0xUzQ1LjYsMjMsNDUsMjN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDEsMzlIMTVjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMjZjMC42LDAsMS0wLjQsMS0xUzQxLjYsMzksNDEsMzl6Ii8+CjwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-templates-post-page-js-e2ac1340e4139ee46588.js.map