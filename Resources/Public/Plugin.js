var J=Object.create;var D=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var ee=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty;var re=(e,t)=>()=>(e&&(t=e(e=0)),t);var R=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ne=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let f of Z(t))!te.call(e,f)&&f!==r&&D(e,f,{get:()=>t[f],enumerable:!(n=X(t,f))||n.enumerable});return e};var T=(e,t,r)=>(r=e!=null?J(ee(e)):{},ne(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e));function y(e){return(...t)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${e}`])return window["@Neos:HostPluginAPI"][`@${e}`](...t);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var N=re(()=>{});var K=R((Le,z)=>{N();z.exports=y("vendor")().React});var k=R((Qe,S)=>{N();S.exports=y("NeosProjectPackages")().NeosUiDecorators});var H=R((Je,B)=>{N();B.exports=y("NeosProjectPackages")().ReactUiComponents});N();var V=y("manifest");var i=T(K()),Y=T(k()),O=T(H());var F={};Object.defineProperty(F,"__esModule",{value:!0});var I=F.styleq=void 0,oe=new WeakMap,ie="$$css";function U(e){var t,r,n;return e!=null&&(t=e.disableCache===!0,r=e.disableMix===!0,n=e.transform),function(){for(var s=[],g="",d=null,m=t?null:oe,w=new Array(arguments.length),j=0;j<arguments.length;j++)w[j]=arguments[j];for(;w.length>0;){var h=w.pop();if(!(h==null||h===!1)){if(Array.isArray(h)){for(var a=0;a<h.length;a++)w.push(h[a]);continue}var l=n!=null?n(h):h;if(l.$$css){var p="";if(m!=null&&m.has(l)){var C=m.get(l);C!=null&&(p=C[0],s.push.apply(s,C[1]),m=C[2])}else{var E=[];for(var x in l){var b=l[x];x!==ie&&(typeof b=="string"||b===null?s.includes(x)||(s.push(x),m!=null&&E.push(x),typeof b=="string"&&(p+=p?" "+b:b)):console.error("styleq: ".concat(x," typeof ").concat(String(b),' is not "string" or "null".')))}if(m!=null){var W=new WeakMap;m.set(l,[p,E,W]),m=W}}p&&(g=g?p+" "+g:p)}else if(r)d==null&&(d={}),d=Object.assign({},l,d);else{var _=null;for(var u in l){var P=l[u];P!==void 0&&(s.includes(u)||(P!=null&&(d==null&&(d={}),_==null&&(_={}),_[u]=P),s.push(u),m=null))}_!=null&&(d=Object.assign(_,d))}}}var G=[g,d];return G}}var L=U();I=F.styleq=L;L.factory=U;var A=e=>new Error(`'stylex.${e}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`),c=e=>A(`types.${e}`);function $(){let e=this;for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(o.props)return o.props.call(e,r);let[f,s]=I(r),g={};return f!=null&&f!==""&&(g.className=f),s!=null&&Object.keys(s).length>0&&(g.style=s),g}function ae(){let{className:e,style:t}=$(...arguments),r={};return e!=null&&e!==""&&(r.class=e),t!=null&&Object.keys(t).length>0&&(r.style=Object.keys(t).map(n=>`${n}:${t[n]};`).join("")),r}function le(e){if(o.create!=null){let t=o.create;return t(e)}throw A("create")}function ue(e){if(o.defineVars)return o.defineVars(e);throw A("defineVars")}var ce=(e,t)=>{if(o.createTheme)return o.createTheme(e,t);throw A("createTheme")},fe=e=>{if(o.include)return o.include(e);throw A("include")},me=le,de=ue,he=ce,pe=fe,ge={angle:e=>{throw c("angle")},color:e=>{throw c("color")},url:e=>{throw c("url")},image:e=>{throw c("image")},integer:e=>{throw c("integer")},lengthPercentage:e=>{throw c("lengthPercentage")},length:e=>{throw c("length")},percentage:e=>{throw c("percentage")},number:e=>{throw c("number")},resolution:e=>{throw c("resolution")},time:e=>{throw c("time")},transformFunction:e=>{throw c("transformFunction")},transformList:e=>{throw c("transformList")}},ye=e=>{if(o.keyframes)return o.keyframes(e);throw A("keyframes")},ve=function(){if(o.firstThatWorks)return o.firstThatWorks(...arguments);throw A("firstThatWorks")};function v(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];let[n]=I(t);return n}v.props=$;v.attrs=ae;v.create=me;v.defineVars=de;v.createTheme=he;v.include=pe;v.keyframes=ye;v.firstThatWorks=ve;v.types=ge;var o={};var be=(0,Y.neos)(e=>({i18nRegistry:e.get("i18n"),config:e.get("frontendConfiguration").get("Carbon.Editor.RelativeDate")})),we={disabled:!1,allowEmpty:!0,allowFuture:!0,allowPast:!0},M={disabled:{cursor:"x1h6gzvc",opacity:"x190dgpg",":where(*) *_pointerEvents":"x1g8rrie",$$css:!0},highlight:{borderRadius:"xiplo1c",boxShadow:"xqu7kxq",$$css:!0},wrapper:{display:"x78zum5",flexDirection:"xdt5ytf",gap:"xnfjsdl",$$css:!0}};function _e(e){let t={...we,...e.config,...e.options},{value:r,commit:n,highlight:f,i18nRegistry:s,id:g}=e,{disabled:d,allowEmpty:m,allowFuture:w,allowPast:j}=t,h=typeof r?.amount=="number",[a,l]=(0,i.useState)(h?Math.abs(r.amount):""),[p,C]=(0,i.useState)(r?.unit||"day"),[E,x]=(0,i.useState)(h?r.amount<0?-1:1:w?1:-1),b=a==1?"":"s";(0,i.useEffect)(()=>{if(a===""){h&&n("");return}let u={amount:E*a,unit:p};r?.amount===u.amount&&r?.unit===u.unit||n(u)},[a,p,E]);let W=[j?{value:-1,label:s.translate(`Carbon.Editor.RelativeDate:Main:${a?"inThePast":"currentDate"}`)}:null,w?{value:1,label:s.translate(`Carbon.Editor.RelativeDate:Main:${a?"inTheFuture":"currentDate"}`)}:null].filter(Boolean),_=["day","week","month","year"].map(u=>({value:u,label:s.translate(`Carbon.Editor.RelativeDate:Main:${u}${b}`)}));return i.default.createElement("div",{...$(M.wrapper,d&&M.disabled,f&&M.highlight)},i.default.createElement("div",{className:"x78zum5 xnfjsdl"},i.default.createElement(O.TextInput,{id:g,type:"text",value:a,onChange:u=>{let P=parseInt(u);if(isNaN(P)){l(m?"":0);return}l(Math.abs(P))}}),i.default.createElement(O.SelectBox,{options:_,value:p,onValueChange:C,disabled:!a})),i.default.createElement("div",{className:"x78zum5 xnfjsdl"},i.default.createElement(O.SelectBox,{options:W,value:E,onValueChange:x,disabled:!a}),m&&i.default.createElement(O.IconButton,{style:"light",icon:"times",title:s.translate("Carbon.Editor.RelativeDate:Main:reset"),onClick:()=>l("")})))}var Q=be(_e);V("Carbon.Editor:RelativeDate",{},e=>{e.get("inspector").get("editors").set("Carbon.Editor/RelativeDate",{component:Q})});
//# sourceMappingURL=Plugin.js.map