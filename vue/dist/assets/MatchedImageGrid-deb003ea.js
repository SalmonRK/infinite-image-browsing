import{d as E,r as S,aX as L,x as Q,o as d,l as T,c as a,m as r,n as e,p as V,q as z,A as j,t as F,B as H,y as A,J as k,I as B,aM as J,L as X,Q as K}from"./index-37564642.js";import{u as W,b as Y,f as Z,c as ee,d as se,e as le,i as te,j as ie,t as ae,L as ne,R as oe,k as re,S as ce}from"./fullScreenContextMenu-5554fa01.js";import{g as de,M as ue}from"./db-ceecaa46.js";import"./index-c6439011.js";import"./_baseIteratee-fe4e703b.js";import"./button-e0b90fd6.js";const me={class:"hint"},pe={key:1,class:"preview-switch"},ve=E({__name:"MatchedImageGrid",props:{tabIdx:null,paneIdx:null,selectedTagIds:null,id:null},setup(R){const u=R,l=S(),g=L();Q(()=>u.selectedTagIds,async()=>{var s;const{res:i}=g.pushAction(()=>de(u.selectedTagIds));l.value=await i,(s=m.value)==null||s.scrollToItem(0)},{immediate:!0});const m=S(),I={tabIdx:-1,target:"local",paneIdx:-1,walkMode:!1},{stackViewEl:$,multiSelectedIdxs:p,stack:G}=W().toRefs(),{itemSize:w,gridItems:N}=Y(I),{showMenuIdx:v}=Z();ee();const{showGenInfo:c,imageGenInfo:x,q:P,onContextMenuClick:O,onFileItemClick:U}=se(I,{openNext:J}),{previewIdx:n,previewing:C,onPreviewVisibleChange:q,previewImgMove:_,canPreview:y}=le(u,{scroller:m,files:l}),b=async(i,s,o)=>{G.value=[{curr:"",files:l.value}];const f=p.value.includes(o)?p.value:[o];await O(i,s,o),i.key==="deleteFiles"&&(l.value=l.value.filter((M,t)=>!f.includes(t)))};return(i,s)=>{const o=X,f=ue,M=ce;return d(),T("div",{class:"container",ref_key:"stackViewEl",ref:$},[a(M,{size:"large",spinning:!e(g).isIdle},{default:r(()=>[a(f,{visible:e(c),"onUpdate:visible":s[1]||(s[1]=t=>V(c)?c.value=t:null),width:"70vw","mask-closable":"",onOk:s[2]||(s[2]=t=>c.value=!1)},{cancelText:r(()=>[]),default:r(()=>[a(o,{active:"",loading:!e(P).isIdle},{default:r(()=>[z("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:s[0]||(s[0]=t=>e(j)(e(x)))},[z("div",me,F(i.$t("doubleClickToCopy")),1),H(" "+F(e(x)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),l.value?(d(),A(e(te),{key:0,ref_key:"scroller",ref:m,class:"file-list",items:l.value,"item-size":e(w).first,"key-field":"fullpath","item-secondary-size":e(w).second,gridItems:e(N)},{default:r(({item:t,index:h})=>[a(ie,{idx:h,file:t,"show-menu-idx":e(v),"onUpdate:showMenuIdx":s[3]||(s[3]=D=>V(v)?v.value=D:null),onFileItemClick:e(U),"full-screen-preview-image-url":l.value[e(n)]?e(ae)(l.value[e(n)]):"",selected:e(p).includes(h),onContextMenuClick:b,onPreviewVisibleChange:e(q)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","selected","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):k("",!0),e(C)?(d(),T("div",pe,[a(e(ne),{onClick:s[4]||(s[4]=t=>e(_)("prev")),class:B({disable:!e(y)("prev")})},null,8,["class"]),a(e(oe),{onClick:s[5]||(s[5]=t=>e(_)("next")),class:B({disable:!e(y)("next")})},null,8,["class"])])):k("",!0)]),_:1},8,["spinning"]),e(C)&&l.value&&l.value[e(n)]?(d(),A(re,{key:0,file:l.value[e(n)],idx:e(n),onContextMenuClick:b},null,8,["file","idx"])):k("",!0)],512)}}});const Ce=K(ve,[["__scopeId","data-v-a04a415f"]]);export{Ce as default};