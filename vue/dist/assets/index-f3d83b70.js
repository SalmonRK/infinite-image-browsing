import{bN as q,bO as H,bP as U,at as N,bk as y,bQ as B,as as V,bR as z,bS as k,bT as _,bU as tt,bV as nt,bW as rt,bX as m,bY as w,aR as G,bZ as d,b_ as p,aJ as D,b$ as et,c0 as at,c1 as ot,c2 as st}from"./index-a52af617.js";import{g as K}from"./_baseIteratee-4a6b4f10.js";var I=1/0,it=17976931348623157e292;function Gn(t){if(!t)return t===0?t:0;if(t=q(t),t===I||t===-I){var n=t<0?-1:1;return n*it}return t===t?t:0}function ct(t,n){for(var r=-1,a=t==null?0:t.length;++r<a&&n(t[r],r,t)!==!1;);return t}function T(t,n,r,a){var b=!r;r||(r={});for(var s=-1,o=n.length;++s<o;){var i=n[s],c=a?a(r[i],t[i],i,r,t):void 0;c===void 0&&(c=t[i]),b?H(r,i,c):U(r,i,c)}return r}function ft(t,n){return t&&T(n,N(n),t)}function ut(t){var n=[];if(t!=null)for(var r in Object(t))n.push(r);return n}var bt=Object.prototype,gt=bt.hasOwnProperty;function lt(t){if(!y(t))return ut(t);var n=B(t),r=[];for(var a in t)a=="constructor"&&(n||!gt.call(t,a))||r.push(a);return r}function A(t){return V(t)?z(t,!0):lt(t)}function pt(t,n){return t&&T(n,A(n),t)}var R=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x=R&&typeof module=="object"&&module&&!module.nodeType&&module,Tt=x&&x.exports===R,E=Tt?k.Buffer:void 0,v=E?E.allocUnsafe:void 0;function yt(t,n){if(n)return t.slice();var r=t.length,a=v?v(r):new t.constructor(r);return t.copy(a),a}function dt(t,n){var r=-1,a=t.length;for(n||(n=Array(a));++r<a;)n[r]=t[r];return n}function At(t,n){return T(t,_(t),n)}var jt=Object.getOwnPropertySymbols,$t=jt?function(t){for(var n=[];t;)nt(n,_(t)),t=K(t);return n}:tt;const Y=$t;function ht(t,n){return T(t,Y(t),n)}function Ot(t){return rt(t,A,Y)}var St=Object.prototype,mt=St.hasOwnProperty;function wt(t){var n=t.length,r=new t.constructor(n);return n&&typeof t[0]=="string"&&mt.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function j(t){var n=new t.constructor(t.byteLength);return new m(n).set(new m(t)),n}function It(t,n){var r=n?j(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var xt=/\w*$/;function Et(t){var n=new t.constructor(t.source,xt.exec(t));return n.lastIndex=t.lastIndex,n}var L=w?w.prototype:void 0,C=L?L.valueOf:void 0;function vt(t){return C?Object(C.call(t)):{}}function Lt(t,n){var r=n?j(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Ct="[object Boolean]",Ft="[object Date]",Pt="[object Map]",Mt="[object Number]",Ut="[object RegExp]",Nt="[object Set]",Bt="[object String]",_t="[object Symbol]",Gt="[object ArrayBuffer]",Dt="[object DataView]",Kt="[object Float32Array]",Rt="[object Float64Array]",Yt="[object Int8Array]",Wt="[object Int16Array]",Xt="[object Int32Array]",Jt="[object Uint8Array]",Qt="[object Uint8ClampedArray]",Zt="[object Uint16Array]",qt="[object Uint32Array]";function Ht(t,n,r){var a=t.constructor;switch(n){case Gt:return j(t);case Ct:case Ft:return new a(+t);case Dt:return It(t,r);case Kt:case Rt:case Yt:case Wt:case Xt:case Jt:case Qt:case Zt:case qt:return Lt(t,r);case Pt:return new a;case Mt:case Bt:return new a(t);case Ut:return Et(t);case Nt:return new a;case _t:return vt(t)}}var F=Object.create,Vt=function(){function t(){}return function(n){if(!y(n))return{};if(F)return F(n);t.prototype=n;var r=new t;return t.prototype=void 0,r}}();const zt=Vt;function kt(t){return typeof t.constructor=="function"&&!B(t)?zt(K(t)):{}}var tn="[object Map]";function nn(t){return G(t)&&d(t)==tn}var P=p&&p.isMap,rn=P?D(P):nn;const en=rn;var an="[object Set]";function on(t){return G(t)&&d(t)==an}var M=p&&p.isSet,sn=M?D(M):on;const cn=sn;var fn=1,un=2,bn=4,W="[object Arguments]",gn="[object Array]",ln="[object Boolean]",pn="[object Date]",Tn="[object Error]",X="[object Function]",yn="[object GeneratorFunction]",dn="[object Map]",An="[object Number]",J="[object Object]",jn="[object RegExp]",$n="[object Set]",hn="[object String]",On="[object Symbol]",Sn="[object WeakMap]",mn="[object ArrayBuffer]",wn="[object DataView]",In="[object Float32Array]",xn="[object Float64Array]",En="[object Int8Array]",vn="[object Int16Array]",Ln="[object Int32Array]",Cn="[object Uint8Array]",Fn="[object Uint8ClampedArray]",Pn="[object Uint16Array]",Mn="[object Uint32Array]",e={};e[W]=e[gn]=e[mn]=e[wn]=e[ln]=e[pn]=e[In]=e[xn]=e[En]=e[vn]=e[Ln]=e[dn]=e[An]=e[J]=e[jn]=e[$n]=e[hn]=e[On]=e[Cn]=e[Fn]=e[Pn]=e[Mn]=!0;e[Tn]=e[X]=e[Sn]=!1;function l(t,n,r,a,b,s){var o,i=n&fn,c=n&un,Q=n&bn;if(r&&(o=b?r(t,a,b,s):r(t)),o!==void 0)return o;if(!y(t))return t;var $=et(t);if($){if(o=wt(t),!i)return dt(t,o)}else{var g=d(t),h=g==X||g==yn;if(at(t))return yt(t,i);if(g==J||g==W||h&&!b){if(o=c||h?{}:kt(t),!i)return c?ht(t,pt(o,t)):At(t,ft(o,t))}else{if(!e[g])return b?t:{};o=Ht(t,g,i)}}s||(s=new ot);var O=s.get(t);if(O)return O;s.set(t,o),cn(t)?t.forEach(function(f){o.add(l(f,n,r,f,t,s))}):en(t)&&t.forEach(function(f,u){o.set(u,l(f,n,r,u,t,s))});var Z=Q?c?Ot:st:c?A:N,S=$?void 0:Z(t);return ct(S||t,function(f,u){S&&(u=f,f=t[u]),U(o,u,l(f,n,r,u,t,s))}),o}var Un=1,Nn=4;function Dn(t){return l(t,Un|Nn)}function Kn(t){var n=t==null?0:t.length;return n?t[n-1]:void 0}export{T as a,l as b,Dn as c,Ot as g,Kn as l,Gn as t};
