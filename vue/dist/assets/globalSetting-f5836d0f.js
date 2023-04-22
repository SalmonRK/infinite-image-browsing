import{a as c,D as en,_ as b,d as ue,r as $,A as Pe,aW as nn,c as G,h as k,aX as tn,aG as xe,a5 as an,G as X,x as rn,ad as Q,a1 as Ue,aY as Y,aZ as un,a9 as Re,u as ze,a2 as ln,B as qe,b as on,P as _,w as sn,t as cn,a_ as dn,a4 as Ee,y as vn,aH as fn,a$ as mn,g as Be,J as gn,b0 as pn,F as hn,ar as bn,b1 as yn,K as pe,L as Sn,N as T,M as E,R as H,V as De,U as he,O as Me,aT as Ve,Q as Fe,b2 as Nn,at as Cn,b3 as _n,aj as wn,a0 as kn}from"./index-935c2795.js";import{_ as In,F as xn}from"./index-c99cbf3d.js";import"./index-32417f05.js";import"./index-dd56a761.js";/* empty css              */import{u as En}from"./useTaskListStore-fe69b06c.js";import{W as Bn,B as Dn}from"./button-190f793c.js";import{_ as He,a as Ge}from"./styleChecker-2a3b80e1.js";var Mn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const Vn=Mn;function $e(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(n).filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),l.forEach(function(s){Fn(t,s,n[s])})}return t}function Fn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Ce=function(e,n){var l=$e({},e,n.attrs);return c(en,$e({},l,{icon:Vn}),null)};Ce.displayName="UpOutlined";Ce.inheritAttrs=!1;const $n=Ce;function Se(){return typeof BigInt=="function"}function ae(t){var e=t.trim(),n=e.startsWith("-");n&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var l=e||"0",s=l.split("."),f=s[0]||"0",m=s[1]||"0";f==="0"&&m==="0"&&(n=!1);var g=n?"-":"";return{negative:n,negativeStr:g,trimStr:l,integerStr:f,decimalStr:m,fullStr:"".concat(g).concat(l)}}function _e(t){var e=String(t);return!Number.isNaN(Number(e))&&e.includes("e")}function re(t){var e=String(t);if(_e(t)){var n=Number(e.slice(e.indexOf("e-")+2)),l=e.match(/\.(\d+)/);return l!=null&&l[1]&&(n+=l[1].length),n}return e.includes(".")&&ke(e)?e.length-e.indexOf(".")-1:0}function we(t){var e=String(t);if(_e(t)){if(t>Number.MAX_SAFE_INTEGER)return String(Se()?BigInt(t).toString():Number.MAX_SAFE_INTEGER);if(t<Number.MIN_SAFE_INTEGER)return String(Se()?BigInt(t).toString():Number.MIN_SAFE_INTEGER);e=t.toFixed(re(e))}return ae(e).fullStr}function ke(t){return typeof t=="number"?!Number.isNaN(t):t?/^\s*-?\d+(\.\d+)?\s*$/.test(t)||/^\s*-?\d+\.\s*$/.test(t)||/^\s*-?\.\d+\s*$/.test(t):!1}function Le(t){return!t&&t!==0&&!Number.isNaN(t)||!String(t).trim()}var Tn=function(){function t(e){if(Ge(this,t),b(this,"origin",""),Le(e)){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return He(t,[{key:"negate",value:function(){return new t(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new t(n);var l=Number(n);if(Number.isNaN(l))return this;var s=this.number+l;if(s>Number.MAX_SAFE_INTEGER)return new t(Number.MAX_SAFE_INTEGER);if(s<Number.MIN_SAFE_INTEGER)return new t(Number.MIN_SAFE_INTEGER);var f=Math.max(re(this.number),re(l));return new t(s.toFixed(f))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":we(this.number):this.origin}}]),t}(),An=function(){function t(e){if(Ge(this,t),b(this,"origin",""),Le(e)){this.empty=!0;return}if(this.origin=String(e),e==="-"||Number.isNaN(e)){this.nan=!0;return}var n=e;if(_e(n)&&(n=Number(n)),n=typeof n=="string"?n:we(n),ke(n)){var l=ae(n);this.negative=l.negative;var s=l.trimStr.split(".");this.integer=BigInt(s[0]);var f=s[1]||"0";this.decimal=BigInt(f),this.decimalLen=f.length}else this.nan=!0}return He(t,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var l="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(l)}},{key:"negate",value:function(){var n=new t(this.toString());return n.negative=!n.negative,n}},{key:"add",value:function(n){if(this.isInvalidate())return new t(n);var l=new t(n);if(l.isInvalidate())return this;var s=Math.max(this.getDecimalStr().length,l.getDecimalStr().length),f=this.alignDecimal(s),m=l.alignDecimal(s),g=(f+m).toString(),d=ae(g),i=d.negativeStr,h=d.trimStr,r="".concat(i).concat(h.padStart(s+1,"0"));return new t("".concat(r.slice(0,-s),".").concat(r.slice(-s)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":ae("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),t}();function U(t){return Se()?new An(t):new Tn(t)}function Ne(t,e,n){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t==="")return"";var s=ae(t),f=s.negativeStr,m=s.integerStr,g=s.decimalStr,d="".concat(e).concat(g),i="".concat(f).concat(m);if(n>=0){var h=Number(g[n]);if(h>=5&&!l){var r=U(t).add("".concat(f,"0.").concat("0".repeat(n)).concat(10-h));return Ne(r.toString(),e,n,l)}return n===0?i:"".concat(i).concat(e).concat(g.padEnd(n,"0").slice(0,n))}return d===".0"?i:"".concat(i).concat(d)}var On=200,Pn=600;const Un=ue({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,n){var l=n.slots,s=n.emit,f=$(),m=function(i,h){i.preventDefault(),s("step",h);function r(){s("step",h),f.value=setTimeout(r,On)}f.value=setTimeout(r,Pn)},g=function(){clearTimeout(f.value)};return Pe(function(){g()}),function(){if(nn())return null;var d=e.prefixCls,i=e.upDisabled,h=e.downDisabled,r="".concat(d,"-handler"),B=G(r,"".concat(r,"-up"),b({},"".concat(r,"-up-disabled"),i)),V=G(r,"".concat(r,"-down"),b({},"".concat(r,"-down-disabled"),h)),I={unselectable:"on",role:"button",onMouseup:g,onMouseleave:g},w=l.upNode,A=l.downNode;return c("div",{class:"".concat(r,"-wrap")},[c("span",k(k({},I),{},{onMousedown:function(S){m(S,!0)},"aria-label":"Increase Value","aria-disabled":i,class:B}),[(w==null?void 0:w())||c("span",{unselectable:"on",class:"".concat(d,"-handler-up-inner")},null)]),c("span",k(k({},I),{},{onMousedown:function(S){m(S,!1)},"aria-label":"Decrease Value","aria-disabled":h,class:V}),[(A==null?void 0:A())||c("span",{unselectable:"on",class:"".concat(d,"-handler-down-inner")},null)])])}}});function Rn(t,e){var n=$(null);function l(){try{var f=t.value,m=f.selectionStart,g=f.selectionEnd,d=f.value,i=d.substring(0,m),h=d.substring(g);n.value={start:m,end:g,value:d,beforeTxt:i,afterTxt:h}}catch{}}function s(){if(t.value&&n.value&&e.value)try{var f=t.value.value,m=n.value,g=m.beforeTxt,d=m.afterTxt,i=m.start,h=f.length;if(f.endsWith(d))h=f.length-n.value.afterTxt.length;else if(f.startsWith(g))h=g.length;else{var r=g[i-1],B=f.indexOf(r,i-1);B!==-1&&(h=B+1)}t.value.setSelectionRange(h,h)}catch(V){tn(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(V.message))}}return[l,s]}const zn=function(){var t=$(0),e=function(){xe.cancel(t.value)};return Pe(function(){e()}),function(n){e(),t.value=xe(function(){n()})}};var qn=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],Te=function(e,n){return e||n.isEmpty()?n.toString():n.toNumber()},Ae=function(e){var n=U(e);return n.isInvalidate()?null:n},We=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};const Hn=ue({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:k(k({},We()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,n){var l=n.attrs,s=n.slots,f=n.emit,m=n.expose,g=$(),d=$(!1),i=$(!1),h=$(!1),r=$(U(e.value));function B(o){e.value===void 0&&(r.value=o)}var V=function(a,p){if(!p)return e.precision>=0?e.precision:Math.max(re(a),re(e.step))},I=function(a){var p=String(a);if(e.parser)return e.parser(p);var u=p;return e.decimalSeparator&&(u=u.replace(e.decimalSeparator,".")),u.replace(/[^\w.-]+/g,"")},w=$(""),A=function(a,p){if(e.formatter)return e.formatter(a,{userTyping:p,input:String(w.value)});var u=typeof a=="number"?we(a):a;if(!p){var M=V(u,p);if(ke(u)&&(e.decimalSeparator||M>=0)){var x=e.decimalSeparator||".";u=Ne(u,x,M)}}return u},O=function(){var o=e.value;return r.value.isInvalidate()&&["string","number"].includes(an(o))?Number.isNaN(o)?"":o:A(r.value.toString(),!1)}();w.value=O;function S(o,a){w.value=A(o.isInvalidate()?o.toString(!1):o.toString(!a),a)}var R=X(function(){return Ae(e.max)}),D=X(function(){return Ae(e.min)}),N=X(function(){return!R.value||!r.value||r.value.isInvalidate()?!1:R.value.lessEquals(r.value)}),z=X(function(){return!D.value||!r.value||r.value.isInvalidate()?!1:r.value.lessEquals(D.value)}),y=Rn(g,d),v=rn(y,2),F=v[0],le=v[1],L=function(a){return R.value&&!a.lessEquals(R.value)?R.value:D.value&&!D.value.lessEquals(a)?D.value:null},W=function(a){return!L(a)},j=function(a,p){var u=a,M=W(u)||u.isEmpty();if(!u.isEmpty()&&!p&&(u=L(u)||u,M=!0),!e.readonly&&!e.disabled&&M){var x=u.toString(),P=V(x,p);if(P>=0&&(u=U(Ne(x,".",P))),!u.equals(r.value)){var q;B(u),(q=e.onChange)===null||q===void 0||q.call(e,u.isEmpty()?null:Te(e.stringMode,u)),e.value===void 0&&S(u,p)}return u}return r.value},J=zn(),Z=function o(a){var p;if(F(),w.value=a,!h.value){var u=I(a),M=U(u);M.isNaN()||j(M,!0)}(p=e.onInput)===null||p===void 0||p.call(e,a),J(function(){var x=a;e.parser||(x=a.replace(/。/g,".")),x!==a&&o(x)})},ee=function(){h.value=!0},ie=function(){h.value=!1,Z(g.value.value)},ne=function(a){Z(a.target.value)},te=function(a){var p,u;if(!(a&&N.value||!a&&z.value)){i.value=!1;var M=U(e.step);a||(M=M.negate());var x=(r.value||U(0)).add(M.toString()),P=j(x,!1);(p=e.onStep)===null||p===void 0||p.call(e,Te(e.stringMode,P),{offset:e.step,type:a?"up":"down"}),(u=g.value)===null||u===void 0||u.focus()}},oe=function(a){var p=U(I(w.value)),u=p;p.isNaN()?u=r.value:u=j(p,a),e.value!==void 0?S(r.value,!1):u.isNaN()||S(u,!1)},fe=function(a){var p=a.which;if(i.value=!0,p===Y.ENTER){var u;h.value||(i.value=!1),oe(!1),(u=e.onPressEnter)===null||u===void 0||u.call(e,a)}e.keyboard!==!1&&!h.value&&[Y.UP,Y.DOWN].includes(p)&&(te(Y.UP===p),a.preventDefault())},C=function(){i.value=!1},K=function(a){oe(!1),d.value=!1,i.value=!1,f("blur",a)};return Q(function(){return e.precision},function(){r.value.isInvalidate()||S(r.value,!1)},{flush:"post"}),Q(function(){return e.value},function(){var o=U(e.value);r.value=o;var a=U(I(w.value));(!o.equals(a)||!i.value||e.formatter)&&S(o,i.value)},{flush:"post"}),Q(w,function(){e.formatter&&le()},{flush:"post"}),Q(function(){return e.disabled},function(o){o&&(d.value=!1)}),m({focus:function(){var a;(a=g.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=g.value)===null||a===void 0||a.blur()}}),function(){var o,a=k(k({},l),e),p=a.prefixCls,u=p===void 0?"rc-input-number":p,M=a.min,x=a.max,P=a.step,q=P===void 0?1:P;a.defaultValue,a.value;var se=a.disabled,ce=a.readonly;a.keyboard;var de=a.controls,me=de===void 0?!0:de,ve=a.autofocus;a.stringMode,a.parser,a.formatter,a.precision,a.decimalSeparator,a.onChange,a.onInput,a.onPressEnter,a.onStep;var je=a.lazy,Ke=a.class,Xe=a.style,Qe=Ue(a,qn),Ye=s.upHandler,Je=s.downHandler,Ie="".concat(u,"-input"),ge={};return je?ge.onChange=ne:ge.onInput=ne,c("div",{class:G(u,Ke,(o={},b(o,"".concat(u,"-focused"),d.value),b(o,"".concat(u,"-disabled"),se),b(o,"".concat(u,"-readonly"),ce),b(o,"".concat(u,"-not-a-number"),r.value.isNaN()),b(o,"".concat(u,"-out-of-range"),!r.value.isInvalidate()&&!W(r.value)),o)),style:Xe,onKeydown:fe,onKeyup:C},[me&&c(Un,{prefixCls:u,upDisabled:N.value,downDisabled:z.value,onStep:te},{upNode:Ye,downNode:Je}),c("div",{class:"".concat(Ie,"-wrap")},[c("input",k(k(k({autofocus:ve,autocomplete:"off",role:"spinbutton","aria-valuemin":M,"aria-valuemax":x,"aria-valuenow":r.value.isInvalidate()?null:r.value.toString(),step:q},Qe),{},{ref:g,class:Ie,value:w.value,disabled:se,readonly:ce,onFocus:function(Ze){d.value=!0,f("focus",Ze)}},ge),{},{onBlur:K,onCompositionstart:ee,onCompositionend:ie}),null)])])}}});function be(t){return t!=null}var Gn=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],Oe=We(),Ln=function(){return k(k({},Oe),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:_.any,addonAfter:_.any,prefix:_.any,"onUpdate:value":Oe.onChange,valueModifiers:Object})},ye=ue({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:Ln(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,n){var l=n.emit,s=n.expose,f=n.attrs,m=n.slots,g=Re(),d=ze("input-number",e),i=d.prefixCls,h=d.size,r=d.direction,B=$(e.value===void 0?e.defaultValue:e.value),V=$(!1);Q(function(){return e.value},function(){B.value=e.value});var I=$(null),w=function(){var N;(N=I.value)===null||N===void 0||N.focus()},A=function(){var N;(N=I.value)===null||N===void 0||N.blur()};s({focus:w,blur:A});var O=function(N){e.value===void 0&&(B.value=N),l("update:value",N),l("change",N),g.onFieldChange()},S=function(N){V.value=!1,l("blur",N),g.onFieldBlur()},R=function(N){V.value=!0,l("focus",N)};return function(){var D,N,z,y,v=k(k({},f),e),F=v.class,le=v.bordered,L=v.readonly,W=v.style,j=v.addonBefore,J=j===void 0?(D=m.addonBefore)===null||D===void 0?void 0:D.call(m):j,Z=v.addonAfter,ee=Z===void 0?(N=m.addonAfter)===null||N===void 0?void 0:N.call(m):Z,ie=v.prefix,ne=ie===void 0?(z=m.prefix)===null||z===void 0?void 0:z.call(m):ie,te=v.valueModifiers,oe=te===void 0?{}:te,fe=Ue(v,Gn),C=i.value,K=h.value,o=G((y={},b(y,"".concat(C,"-lg"),K==="large"),b(y,"".concat(C,"-sm"),K==="small"),b(y,"".concat(C,"-rtl"),r.value==="rtl"),b(y,"".concat(C,"-readonly"),L),b(y,"".concat(C,"-borderless"),!le),y),F),a=c(Hn,k(k({},qe(fe,["size","defaultValue"])),{},{ref:I,lazy:!!oe.lazy,value:B.value,class:o,prefixCls:C,readonly:L,onChange:O,onBlur:S,onFocus:R}),{upHandler:function(){return c($n,{class:"".concat(C,"-handler-up-inner")},null)},downHandler:function(){return c(ln,{class:"".concat(C,"-handler-down-inner")},null)}}),p=be(J)||be(ee);if(be(ne)){var u,M=G("".concat(C,"-affix-wrapper"),(u={},b(u,"".concat(C,"-affix-wrapper-focused"),V.value),b(u,"".concat(C,"-affix-wrapper-disabled"),e.disabled),b(u,"".concat(C,"-affix-wrapper-rtl"),r.value==="rtl"),b(u,"".concat(C,"-affix-wrapper-readonly"),L),b(u,"".concat(C,"-affix-wrapper-borderless"),!le),b(u,"".concat(F),!p&&F),u));a=c("div",{class:M,style:W,onMouseup:function(){return I.value.focus()}},[c("span",{class:"".concat(C,"-prefix")},[ne]),a])}if(p){var x,P="".concat(C,"-group"),q="".concat(P,"-addon"),se=J?c("div",{class:q},[J]):null,ce=ee?c("div",{class:q},[ee]):null,de=G("".concat(C,"-wrapper"),P,b({},"".concat(P,"-rtl"),r.value==="rtl")),me=G("".concat(C,"-group-wrapper"),(x={},b(x,"".concat(C,"-group-wrapper-sm"),K==="small"),b(x,"".concat(C,"-group-wrapper-lg"),K==="large"),b(x,"".concat(C,"-group-wrapper-rtl"),r.value==="rtl"),x),F);a=c("div",{class:me,style:W},[c("div",{class:de},[se,a,ce])])}return on(a,{style:W})}}});const Wn=un(ye,{install:function(e){return e.component(ye.name,ye),e}});var jn=cn("small","default"),Kn=function(){return{id:String,prefixCls:String,size:_.oneOf(jn),disabled:{type:Boolean,default:void 0},checkedChildren:_.any,unCheckedChildren:_.any,tabindex:_.oneOfType([_.string,_.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:_.oneOfType([_.string,_.number,_.looseBool]),checkedValue:_.oneOfType([_.string,_.number,_.looseBool]).def(!0),unCheckedValue:_.oneOfType([_.string,_.number,_.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}},Xn=ue({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:Kn(),slots:["checkedChildren","unCheckedChildren"],setup:function(e,n){var l=n.attrs,s=n.slots,f=n.expose,m=n.emit,g=Re();dn(function(){Ee(!("defaultChecked"in l),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),Ee(!("value"in l),"Switch","`value` is not validate prop, do you mean `checked`?")});var d=$(e.checked!==void 0?e.checked:l.defaultChecked),i=X(function(){return d.value===e.checkedValue});Q(function(){return e.checked},function(){d.value=e.checked});var h=ze("switch",e),r=h.prefixCls,B=h.direction,V=h.size,I=$(),w=function(){var v;(v=I.value)===null||v===void 0||v.focus()},A=function(){var v;(v=I.value)===null||v===void 0||v.blur()};f({focus:w,blur:A}),vn(function(){fn(function(){e.autofocus&&!e.disabled&&I.value.focus()})});var O=function(v,F){e.disabled||(m("update:checked",v),m("change",v,F),g.onFieldChange())},S=function(v){m("blur",v)},R=function(v){w();var F=i.value?e.unCheckedValue:e.checkedValue;O(F,v),m("click",F,v)},D=function(v){v.keyCode===Y.LEFT?O(e.unCheckedValue,v):v.keyCode===Y.RIGHT&&O(e.checkedValue,v),m("keydown",v)},N=function(v){var F;(F=I.value)===null||F===void 0||F.blur(),m("mouseup",v)},z=X(function(){var y;return y={},b(y,"".concat(r.value,"-small"),V.value==="small"),b(y,"".concat(r.value,"-loading"),e.loading),b(y,"".concat(r.value,"-checked"),i.value),b(y,"".concat(r.value,"-disabled"),e.disabled),b(y,r.value,!0),b(y,"".concat(r.value,"-rtl"),B.value==="rtl"),y});return function(){var y;return c(Bn,{insertExtraNode:!0},{default:function(){return[c("button",k(k(k({},qe(e,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),l),{},{id:(y=e.id)!==null&&y!==void 0?y:g.id.value,onKeydown:D,onClick:R,onBlur:S,onMouseup:N,type:"button",role:"switch","aria-checked":d.value,disabled:e.disabled||e.loading,class:[l.class,z.value],ref:I}),[c("div",{class:"".concat(r.value,"-handle")},[e.loading?c(mn,{class:"".concat(r.value,"-loading-icon")},null):null]),c("span",{class:"".concat(r.value,"-inner")},[i.value?Be(s,e,"checkedChildren"):Be(s,e,"unCheckedChildren")])])]}})}}});const Qn=sn(Xn);const Yn={class:"panel"},Jn={class:"lang-select-wrap"},Zn=ue({__name:"globalSetting",setup(t){const e=gn(new pn(-1,0,0,"throw")),n=hn(),l=En(),{user:s}=bn(n),f=async()=>{await e.pushAction(Nn).res,s.value=void 0,Cn.info(Ve("logoutSuccess"))},m=$(!1),g=window;return(d,i)=>{const h=Qn,r=In,B=Wn,V=_n,I=wn,w=Dn,A=yn("logout-outlined"),O=xn;return pe(),Sn("div",Yn,[c(O,null,{default:T(()=>[c(r,{label:d.$t("useThumbnailPreview")},{default:T(()=>[c(h,{checked:E(n).enableThumbnail,"onUpdate:checked":i[0]||(i[0]=S=>E(n).enableThumbnail=S)},null,8,["checked"])]),_:1},8,["label"]),c(r,{label:d.$t("pollingInterval")},{default:T(()=>[c(B,{value:E(l).pollInterval,"onUpdate:value":i[1]||(i[1]=S=>E(l).pollInterval=S),min:.5,disabled:!E(l).queue.isIdle},null,8,["value","min","disabled"]),H(" (s) "),De("sub",null,he(d.$t("smallerIntervalMeansMoreNetworkTraffic")),1)]),_:1},8,["label"]),c(r,{label:d.$t("gridThumbnailWidth")},{default:T(()=>[c(B,{value:E(n).gridThumbnailSize,"onUpdate:value":i[2]||(i[2]=S=>E(n).gridThumbnailSize=S),min:256,max:1024},null,8,["value"]),H(" (px) ")]),_:1},8,["label"]),c(r,{label:d.$t("largeGridThumbnailWidth")},{default:T(()=>[c(B,{value:E(n).largeGridThumbnailSize,"onUpdate:value":i[3]||(i[3]=S=>E(n).largeGridThumbnailSize=S),min:256,max:1024},null,8,["value"]),H(" (px) ")]),_:1},8,["label"]),c(r,{label:d.$t("longPressOpenContextMenu")},{default:T(()=>[c(h,{checked:E(n).longPressOpenContextMenu,"onUpdate:checked":i[4]||(i[4]=S=>E(n).longPressOpenContextMenu=S)},null,8,["checked"])]),_:1},8,["label"]),c(r,{label:d.$t("lang")},{default:T(()=>[De("div",Jn,[c(I,{value:E(n).lang,"onUpdate:value":i[5]||(i[5]=S=>E(n).lang=S),onChange:i[6]||(i[6]=S=>m.value=!0)},{default:T(()=>[c(V,{value:"zh"},{default:T(()=>[H(" 中文 ")]),_:1}),c(V,{lang:"en"},{default:T(()=>[H(" English ")]),_:1})]),_:1},8,["value"])]),m.value?(pe(),Me(w,{key:0,type:"primary",onClick:i[7]||(i[7]=S=>E(g).location.reload()),ghost:""},{default:T(()=>[H(he(E(Ve)("langChangeReload")),1)]),_:1})):Fe("",!0)]),_:1},8,["label"]),E(s)?(pe(),Me(r,{key:0,label:"百度云已登录用户"},{default:T(()=>[H(he(E(s).username)+" ",1),c(w,{onClick:f,loading:!e.isIdle},{icon:T(()=>[c(A)]),default:T(()=>[H(" 登出 ")]),_:1},8,["loading"])]),_:1})):Fe("",!0)]),_:1})])}}});const st=kn(Zn,[["__scopeId","data-v-97cf704e"]]);export{st as default};
