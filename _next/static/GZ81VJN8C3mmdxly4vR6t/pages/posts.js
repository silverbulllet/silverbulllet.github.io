(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+/fp":function(e,t){e.exports=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}},"4MG8":function(e,t,n){const r=n("T9Ld"),s=n("66f7"),i=n("SbYC"),l=n("+/fp"),a=n("hyX7"),o=n("J7Ao"),{merge:c,checkSanitizeDeprecation:h,escape:p}=n("rUJ1"),{getDefaults:u,changeDefaults:d,defaults:g}=n("vbtb");function f(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"===typeof t){n||(n=t,t=null),t=c({},f.defaults,t||{}),h(t);const l=t.highlight;let a,o,p=0;try{a=r.lex(e,t)}catch(i){return n(i)}o=a.length;const u=function(e){if(e)return t.highlight=l,n(e);let r;try{r=s.parse(a,t)}catch(i){e=i}return t.highlight=l,e?n(e):n(null,r)};if(!l||l.length<3)return u();if(delete t.highlight,!o)return u();for(;p<a.length;p++)!function(e){"code"!==e.type?--o||u():l(e.text,e.lang,(function(t,n){return t?u(t):null==n||n===e.text?--o||u():(e.text=n,e.escaped=!0,void(--o||u()))}))}(a[p])}else try{return t=c({},f.defaults,t||{}),h(t),s.parse(r.lex(e,t),t)}catch(i){if(i.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||f.defaults).silent)return"<p>An error occurred:</p><pre>"+p(i.message+"",!0)+"</pre>";throw i}}f.options=f.setOptions=function(e){return c(f.defaults,e),d(f.defaults),f},f.getDefaults=u,f.defaults=g,f.Parser=s,f.parser=s.parse,f.Renderer=i,f.TextRenderer=l,f.Lexer=r,f.lexer=r.lex,f.InlineLexer=a,f.inlineLexer=a.output,f.Slugger=o,f.parse=f,e.exports=f},"66f7":function(e,t,n){const r=n("SbYC"),s=n("J7Ao"),i=n("hyX7"),l=n("+/fp"),{defaults:a}=n("vbtb"),{merge:o,unescape:c}=n("rUJ1");e.exports=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||a,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new s}static parse(t,n){return new e(n).parse(t)}parse(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,o({},this.options,{renderer:new l})),this.tokens=e.reverse();let t="";for(;this.next();)t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;for(;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,c(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,n,r,s,i="";for(r="",t=0;t<this.token.header.length;t++)r+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],r="",s=0;s<n.length;s++)r+=this.renderer.tablecell(this.inline.output(n[s]),{header:!1,align:this.token.align[s]});e+=this.renderer.tablerow(r)}return this.renderer.table(i,e)}case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,n=this.token.start;for(;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,t,n)}case"list_item_start":{e="";const t=this.token.loose,n=this.token.checked,r=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(n)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(n)});else e+=this.renderer.checkbox(n);for(;"list_item_end"!==this.next().type;)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,r,n)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}}},CxBJ:function(e,t,n){"use strict";var r=n("q1tI"),s=n.n(r),i=n("uTRd"),l=n("CHLT"),a=(n("7XQY"),s.a.createElement);t.a=function(e){var t=e.payload,n=e.type,r=t.page,s=t.limit,o=t.total,c=t.previous,h=t.next,p=a("li",null),u=a("li",null);return c&&(p=a("li",null,a("a",{href:"/posts?id="+c._id}," \u2190 ",c.title," "))),h&&(u=a("li",null,a("a",{href:"/posts?id="+h._id}," ",h.title," \u2192 "))),"index"===n&&(r-1>0&&(p=a("li",null,a("a",{href:"/?page="+(r-1)}," \u2190 PREVOUS "))),r+1<=Math.ceil(o/s)&&(u=a("li",null,a("a",{href:"/?page="+(r+1)}," NEXT \u2192 ")))),a(i.a,{justify:"center"},a(l.a,{xs:12,md:"index"===n?11:12},a("ul",{className:"pagination"},p,u)))}},J7Ao:function(e,t){e.exports=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}},JuWx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n("L9e7")}])},L9e7:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),s=n.n(r),i=n("qGFX"),l=n("Ff2n"),a=n("rePB"),o=n("/MKj"),c=n("a6RD"),h=n.n(c),p=n("uTRd"),u=n("CHLT"),d=n("R/WZ"),g=n("K0qe"),f=s.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=h()((function(){return Promise.all([n.e(3),n.e(7)]).then(n.bind(null,"C+/j"))}),{loading:function(){return"i am loading..."},ssr:!1,loadableGenerated:{webpack:function(){return["C+/j"]},modules:["../../common/layouts/Parallax/Parallax.js"]}}),k={parallax:{height:"70vh"},container:x({zIndex:"12",color:"#FFFFFF"},g.b),item:{textAlign:"center"},title:x({},g.t,{display:"inline-block",position:"relative",marginTop:"30px",minHeight:"32px",color:"#FFFFFF",textDecoration:"none",textAlign:"center"}),time:{textAlign:"center",fontSize:"14px",margin:"0 0 10px"}},_=Object(d.a)(k);var y=Object(o.b)((function(e){return{article:e.post.article}}))((function(e){var t=e.article,n=(Object(l.a)(e,["article"]),_()),r=t||{},s=(r.image,r.title),i=r.createdAt;return f(b,{filter:!0,image:"/static/landing-bg.jpg",className:n.parallax},f("div",{className:n.container},f(p.a,null,f(u.a,{className:n.item},f("h2",{className:n.title},s),f("p",{className:n.time},f("b",null,i))))))})),w=n("o0o1"),j=n.n(w),v=n("1OyB"),S=n("vuIU"),$=n("md7G"),O=n("foSv"),z=n("Ji7U"),A=n("nOHt"),T=n("WVYQ"),R=n("CxBJ"),P=n("4MG8"),L=n.n(P),C=n("MX0m"),E=n.n(C),q=s.a.createElement,N=function(){return q("div",{style:{textAlign:"center",marginTop:"32px"},className:"jsx-2734784177"},q("div",{className:"jsx-2734784177 lds-roller"},q("div",{className:"jsx-2734784177"}),q("div",{className:"jsx-2734784177"}),q("div",{className:"jsx-2734784177"}),q("div",{className:"jsx-2734784177"}),q("div",{className:"jsx-2734784177"}),q("div",{className:"jsx-2734784177"}),q("div",{className:"jsx-2734784177"}),q("div",{className:"jsx-2734784177"})),q(E.a,{id:"2734784177"},[".lds-roller.jsx-2734784177{display:inline-block;position:relative;width:64px;height:64px;}",".lds-roller.jsx-2734784177 div.jsx-2734784177{-webkit-animation:lds-roller-jsx-2734784177 1.2s cubic-bezier(0.5,0,0.5,1) infinite;animation:lds-roller-jsx-2734784177 1.2s cubic-bezier(0.5,0,0.5,1) infinite;-webkit-transform-origin:32px 32px;-ms-transform-origin:32px 32px;transform-origin:32px 32px;}",'.lds-roller.jsx-2734784177 div.jsx-2734784177:after{content:" ";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#3C4858;margin:-3px 0 0 -3px;}',".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(1){-webkit-animation-delay:-0.036s;animation-delay:-0.036s;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(1):after{top:50px;left:50px;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(2){-webkit-animation-delay:-0.072s;animation-delay:-0.072s;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(2):after{top:54px;left:45px;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(3){-webkit-animation-delay:-0.108s;animation-delay:-0.108s;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(3):after{top:57px;left:39px;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(4){-webkit-animation-delay:-0.144s;animation-delay:-0.144s;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(4):after{top:58px;left:32px;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(5){-webkit-animation-delay:-0.18s;animation-delay:-0.18s;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(5):after{top:57px;left:25px;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(6){-webkit-animation-delay:-0.216s;animation-delay:-0.216s;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(6):after{top:54px;left:19px;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(7){-webkit-animation-delay:-0.252s;animation-delay:-0.252s;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(7):after{top:50px;left:14px;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(8){-webkit-animation-delay:-0.288s;animation-delay:-0.288s;}",".lds-roller.jsx-2734784177 div.jsx-2734784177:nth-child(8):after{top:45px;left:10px;}","@-webkit-keyframes lds-roller-jsx-2734784177{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}","@keyframes lds-roller-jsx-2734784177{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]))},Z=(n("2TMg"),s.a.createElement),U=h()((function(){return n.e(20).then(n.t.bind(null,"xj1T",7))}),{loading:function(){return Z(N,null)},loadableGenerated:{webpack:function(){return["xj1T"]},modules:["react-highlight"]}});L.a.setOptions({gfm:!0,tables:!0,breaks:!0});var I="animated slideInUp";var D=n("YFqc"),F=n.n(D),J=s.a.createElement,B=function(e){var t=e.tag;return J(F.a,{href:"/tags?id=".concat(t._id)},J("a",{className:"jsx-1263449602 tag"},J("span",{className:"jsx-1263449602"},"# ",t.name),J(E.a,{id:"1263449602"},[".tag.jsx-1263449602{background-color:#fafafa;color:#9c27b0;padding:5px 12px;text-transform:uppercase;display:inline-block;padding:0.25em 0.4em;font-size:75%;font-weight:500;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem;margin-right:10px;}",".tag.jsx-1263449602:hover{color:#89229b;background-color:#fff;}"])))},X=s.a.createElement,G={color:"#3C4858",paddingBottom:"10px",paddingTop:"20px"},M=function(e){var t,n=e.content,r=e.tags,i=(t={content:n},function(e){function n(){return Object(v.a)(this,n),Object($.a)(this,Object(O.a)(n).apply(this,arguments))}return Object(z.a)(n,e),Object(S.a)(n,[{key:"renderMarkdown",value:function(){return/~~~/.test(t.content)||/```/.test(t.content)?Z("div",null,Z(U,{innerHTML:!0,className:I},L()(t.content))):Z("div",{dangerouslySetInnerHTML:{__html:L()(t.content)},className:I})}},{key:"render",value:function(){return Z("div",{className:"markdown"},this.renderMarkdown())}}]),n}(s.a.Component));return X(p.a,null,X(u.a,{xs:12,md:11,style:G},X(i,null),r.map((function(e){return X(B,{tag:e,key:e._id})}))))},Y=s.a.createElement,H=function(e){function t(){return Object(v.a)(this,t),Object($.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(z.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e,t,n,r;return j.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=this.props,t=e.getPost,n=e.router,r=n.query.id,s.next=4,j.a.awrap(t({id:r}));case 4:case"end":return s.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var e=this.props.post,t=e.article||{},n=t.content,r=t.tags;return Y("div",null,Y(M,{content:n||"",tags:r||[]}),Y(R.a,{type:"post",payload:e}))}}]),t}(r.Component);var W=Object(A.withRouter)(Object(o.b)((function(e){return{post:e.post}}),(function(e,t){return{getPost:function(t){return j.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.a.awrap(e(Object(T.b)(t)));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),null,null,null,Promise)}}}))(H)),V=s.a.createElement;t.default=function(e){return V(i.a,{parallax:V(y,null)},V(W,null))}},SbYC:function(e,t,n){const{defaults:r}=n("vbtb"),{cleanUrl:s,escape:i}=n("rUJ1");e.exports=class{constructor(e){this.options=e||r}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return r?'<pre><code class="'+this.options.langPrefix+i(r,!0)+'">'+(n?e:i(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:i(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=s(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+i(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=s(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}}},T9Ld:function(e,t,n){const{defaults:r}=n("vbtb"),{block:s}=n("e56X"),{rtrim:i,splitCells:l,escape:a}=n("rUJ1");e.exports=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||r,this.rules=s.normal,this.options.pedantic?this.rules=s.pedantic:this.options.gfm&&(this.rules=s.gfm)}static get rules(){return s}static lex(t,n){return new e(n).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let n,r,o,c,h,p,u,d,g,f,m,x,b,k,_,y;for(e=e.replace(/^ +$/gm,"");e;)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(o[0].length),t&&"paragraph"===t.type?t.text+="\n"+o[0].trimRight():(o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?o:i(o,"\n")}))}else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2]?o[2].trim():o[2],text:o[3]||""});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if((o=this.rules.nptable.exec(e))&&(p={type:"table",header:l(o[1].replace(/^ *| *\| *$/g,"")),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3]?o[3].replace(/\n$/,"").split("\n"):[]},p.header.length===p.align.length)){for(e=e.substring(o[0].length),m=0;m<p.align.length;m++)/^ *-+: *$/.test(p.align[m])?p.align[m]="right":/^ *:-+: *$/.test(p.align[m])?p.align[m]="center":/^ *:-+ *$/.test(p.align[m])?p.align[m]="left":p.align[m]=null;for(m=0;m<p.cells.length;m++)p.cells[m]=l(p.cells[m],p.header.length);this.tokens.push(p)}else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),c=o[2],k=c.length>1,u={type:"list_start",ordered:k,start:k?+c:"",loose:!1},this.tokens.push(u),o=o[0].match(this.rules.item),d=[],n=!1,b=o.length,m=0;m<b;m++)p=o[m],f=p.length,p=p.replace(/^ *([*+-]|\d+\.) */,""),~p.indexOf("\n ")&&(f-=p.length,p=this.options.pedantic?p.replace(/^ {1,4}/gm,""):p.replace(new RegExp("^ {1,"+f+"}","gm"),"")),m!==b-1&&(h=s.bullet.exec(o[m+1])[0],(c.length>1?1===h.length:h.length>1||this.options.smartLists&&h!==c)&&(e=o.slice(m+1).join("\n")+e,m=b-1)),r=n||/\n\n(?!\s*$)/.test(p),m!==b-1&&(n="\n"===p.charAt(p.length-1),r||(r=n)),r&&(u.loose=!0),_=/^\[[ xX]\] /.test(p),y=void 0,_&&(y=" "!==p[1],p=p.replace(/^\[[ xX]\] +/,"")),g={type:"list_item_start",task:_,checked:y,loose:r},d.push(g),this.tokens.push(g),this.token(p,!1),this.tokens.push({type:"list_item_end"});if(u.loose)for(b=d.length,m=0;m<b;m++)d[m].loose=!0;this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):a(o[0]):o[0]});else if(t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),o[3]&&(o[3]=o[3].substring(1,o[3].length-1)),x=o[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[x]||(this.tokens.links[x]={href:o[2],title:o[3]});else if((o=this.rules.table.exec(e))&&(p={type:"table",header:l(o[1].replace(/^ *| *\| *$/g,"")),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3]?o[3].replace(/\n$/,"").split("\n"):[]},p.header.length===p.align.length)){for(e=e.substring(o[0].length),m=0;m<p.align.length;m++)/^ *-+: *$/.test(p.align[m])?p.align[m]="right":/^ *:-+: *$/.test(p.align[m])?p.align[m]="center":/^ *:-+ *$/.test(p.align[m])?p.align[m]="left":p.align[m]=null;for(m=0;m<p.cells.length;m++)p.cells[m]=l(p.cells[m].replace(/^ *\| *| *\| *$/g,""),p.header.length);this.tokens.push(p)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2].charAt(0)?1:2,text:o[1]});else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}}},WVYQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n("o0o1"),s=n.n(r),i=n("Be2h"),l=n("YwrL"),a={GET_POST_LIST:"GET_POST_LIST",GET_POST:"GET_POST_LIST"},o=function(e){var t=e.page,n=void 0===t?1:t,r=e.limit,o=void 0===r?5:r;return function(e){var t,r;return s.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t="".concat(l.b,"/api/articles?page=").concat(n,"&limit=").concat(o,"&sort=-createdAt&status=published"),c.next=3,s.a.awrap(Object(i.a)(t));case 3:return r=c.sent,c.abrupt("return",e({type:a.GET_POST_LIST,data:200===r.code?r.data:{}}));case 5:case"end":return c.stop()}}),null,null,null,Promise)}},c=function(e){var t=e.id;return function(e){var n,r;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n="".concat(l.b,"/api/articles/").concat(t,"?status=published"),o.next=3,s.a.awrap(Object(i.a)(n));case 3:return r=o.sent,o.abrupt("return",e({type:a.GET_POST,data:200===r.code?r.data:{article:{title:"POST NOT FOUND"},previous:null,next:null}}));case 5:case"end":return o.stop()}}),null,null,null,Promise)}}},e56X:function(e,t,n){const{noopTest:r,edit:s,merge:i}=n("rUJ1"),l={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:r,table:r,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};l.def=s(l.def).replace("label",l._label).replace("title",l._title).getRegex(),l.bullet=/(?:[*+-]|\d{1,9}\.)/,l.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,l.item=s(l.item,"gm").replace(/bull/g,l.bullet).getRegex(),l.list=s(l.list).replace(/bull/g,l.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+l.def.source+")").getRegex(),l._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",l._comment=/<!--(?!-?>)[\s\S]*?-->/,l.html=s(l.html,"i").replace("comment",l._comment).replace("tag",l._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),l.paragraph=s(l._paragraph).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.blockquote=s(l.blockquote).replace("paragraph",l.paragraph).getRegex(),l.normal=i({},l),l.gfm=i({},l.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),l.gfm.nptable=s(l.gfm.nptable).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.gfm.table=s(l.gfm.table).replace("hr",l.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",l._tag).getRegex(),l.pedantic=i({},l.normal,{html:s("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",l._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:r,paragraph:s(l.normal._paragraph).replace("hr",l.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",l.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const a={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:r,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:r,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};a.em=s(a.em).replace(/punctuation/g,a._punctuation).getRegex(),a._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,a._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,a._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,a.autolink=s(a.autolink).replace("scheme",a._scheme).replace("email",a._email).getRegex(),a._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,a.tag=s(a.tag).replace("comment",l._comment).replace("attribute",a._attribute).getRegex(),a._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,a._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,a._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,a.link=s(a.link).replace("label",a._label).replace("href",a._href).replace("title",a._title).getRegex(),a.reflink=s(a.reflink).replace("label",a._label).getRegex(),a.normal=i({},a),a.pedantic=i({},a.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:s(/^!?\[(label)\]\((.*?)\)/).replace("label",a._label).getRegex(),reflink:s(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",a._label).getRegex()}),a.gfm=i({},a.normal,{escape:s(a.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),a.gfm.url=s(a.gfm.url,"i").replace("email",a.gfm._extended_email).getRegex(),a.breaks=i({},a.gfm,{br:s(a.br).replace("{2,}","*").getRegex(),text:s(a.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),e.exports={block:l,inline:a}},hyX7:function(e,t,n){const r=n("SbYC"),{defaults:s}=n("vbtb"),{inline:i}=n("e56X"),{findClosingBracket:l,escape:a}=n("rUJ1");e.exports=class e{constructor(e,t){if(this.options=t||s,this.links=e,this.rules=i.normal,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=i.pedantic:this.options.gfm&&(this.options.breaks?this.rules=i.breaks:this.rules=i.gfm)}static get rules(){return i}static output(t,n,r){return new e(n,r).output(t)}output(t){let n,r,s,i,o,c,h="";for(;t;)if(o=this.rules.escape.exec(t))t=t.substring(o[0].length),h+=a(o[1]);else if(o=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),t=t.substring(o[0].length),h+=this.renderer.html(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):a(o[0]):o[0]);else if(o=this.rules.link.exec(t)){const r=l(o[2],"()");if(r>-1){const e=(0===o[0].indexOf("!")?5:4)+o[1].length+r;o[2]=o[2].substring(0,r),o[0]=o[0].substring(0,e).trim(),o[3]=""}t=t.substring(o[0].length),this.inLink=!0,s=o[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s),n?(s=n[1],i=n[3]):i=""):i=o[3]?o[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),h+=this.outputLink(o,{href:e.escapes(s),title:e.escapes(i)}),this.inLink=!1}else if((o=this.rules.reflink.exec(t))||(o=this.rules.nolink.exec(t))){if(t=t.substring(o[0].length),n=(o[2]||o[1]).replace(/\s+/g," "),n=this.links[n.toLowerCase()],!n||!n.href){h+=o[0].charAt(0),t=o[0].substring(1)+t;continue}this.inLink=!0,h+=this.outputLink(o,n),this.inLink=!1}else if(o=this.rules.strong.exec(t))t=t.substring(o[0].length),h+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(t))t=t.substring(o[0].length),h+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(t))t=t.substring(o[0].length),h+=this.renderer.codespan(a(o[2].trim(),!0));else if(o=this.rules.br.exec(t))t=t.substring(o[0].length),h+=this.renderer.br();else if(o=this.rules.del.exec(t))t=t.substring(o[0].length),h+=this.renderer.del(this.output(o[1]));else if(o=this.rules.autolink.exec(t))t=t.substring(o[0].length),"@"===o[2]?(r=a(this.mangle(o[1])),s="mailto:"+r):(r=a(o[1]),s=r),h+=this.renderer.link(s,null,r);else if(this.inLink||!(o=this.rules.url.exec(t))){if(o=this.rules.text.exec(t))t=t.substring(o[0].length),this.inRawBlock?h+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):a(o[0]):o[0]):h+=this.renderer.text(a(this.smartypants(o[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===o[2])r=a(o[0]),s="mailto:"+r;else{do{c=o[0],o[0]=this.rules._backpedal.exec(o[0])[0]}while(c!==o[0]);r=a(o[0]),s="www."===o[1]?"http://"+r:r}t=t.substring(o[0].length),h+=this.renderer.link(s,null,r)}return h}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const n=t.href,r=t.title?a(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,a(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let n,r="",s=0;for(;s<t;s++)n=e.charCodeAt(s),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}}},rUJ1:function(e,t){const n=/[&<>"']/,r=/[&<>"']/g,s=/[<>"']|&(?!#?\w+;)/,i=/[<>"']|&(?!#?\w+;)/g,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},a=e=>l[e];const o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(e){return e.replace(o,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const h=/(^|[^\[])\^/g;const p=/[^\w:]/g,u=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const d={},g=/^[^:]+:\/*[^/]*$/,f=/^([^:]+:)[\s\S]*$/,m=/^([^:]+:\/*[^/]*)[\s\S]*$/;function x(e,t){d[" "+e]||(g.test(e)?d[" "+e]=e+"/":d[" "+e]=b(e,"/",!0));const n=-1===(e=d[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(f,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(m,"$1")+t:e+t}function b(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;s<r;){const i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}e.exports={escape:function(e,t){if(t){if(n.test(e))return e.replace(r,a)}else if(s.test(e))return e.replace(i,a);return e},unescape:c,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(h,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(c(n)).replace(p,"").toLowerCase()}catch(r){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!u.test(n)&&(n=x(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(r){return null}return n},resolveUrl:x,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:b,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,s=0;for(;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&(r--,r<0))return s;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}}},vbtb:function(e,t){function n(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:n,changeDefaults:function(t){e.exports.defaults=t}}}},[["JuWx",1,2,0,4,6,5,8]]]);