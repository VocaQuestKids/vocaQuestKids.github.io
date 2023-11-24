import{_ as Te}from"./_plugin-vue_export-helper-c27b6911.js";import{p as L,i as J,c as r,r as Q,a as D,g as ue,s as w,o as ie,b as re,d as A,f as Be,e as ke,h as we,j as Ce,k as ce,l as z,m as n,n as ve,t as G,q as de,u as me,v as $e,w as Ae,x as j,y as Le,z as Pe,A as W,B as Re,C as fe,D as O,E as q,F as T,G as oe,H as ze,I as Ee,J as Me,K as He,L as Ne}from"./index-b725db2a.js";import{u as De,m as U,a as ee,b as E,c as Oe,d as je,e as qe,f as Ke,g as Ue,h as Fe,i as Ze,V as Xe,j as Y,k as Ye,l as ye,n as Ge,o as Je,p as Qe,q as We,r as et,s as tt}from"./VMenu-2f6ea26a.js";const K=Symbol.for("vuetify:layout"),ge=Symbol.for("vuetify:layout-item"),ne=1e3,at=L({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),lt=L({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ot(){const e=J(K);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function nt(e){const s=J(K);if(!s)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${ke()}`,o=ue("useLayoutItem");re(ge,{id:t});const l=w(!1);we(()=>l.value=!0),Ce(()=>l.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:u}=s.register(o,{...e,active:r(()=>l.value?!1:e.active.value),id:t});return ce(()=>s.unregister(t)),{layoutItemStyles:a,layoutRect:s.layoutRect,layoutItemScrimStyles:u}}const st=(e,s,t,o)=>{let l={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...l}}];for(const u of e){const i=s.get(u),f=t.get(u),p=o.get(u);if(!i||!f||!p)continue;const m={...l,[i.value]:parseInt(l[i.value],10)+(p.value?parseInt(f.value,10):0)};a.push({id:u,layer:m}),l=m}return a};function ut(e){const s=J(K,null),t=r(()=>s?s.rootZIndex.value-100:ne),o=Q([]),l=D(new Map),a=D(new Map),u=D(new Map),i=D(new Map),f=D(new Map),{resizeRef:p,contentRect:m}=De(),B=r(()=>{const d=new Map,x=e.overlaps??[];for(const c of x.filter(b=>b.includes(":"))){const[b,g]=c.split(":");if(!o.value.includes(b)||!o.value.includes(g))continue;const k=l.get(b),R=l.get(g),M=a.get(b),H=a.get(g);!k||!R||!M||!H||(d.set(g,{position:k.value,amount:parseInt(M.value,10)}),d.set(b,{position:R.value,amount:-parseInt(H.value,10)}))}return d}),h=r(()=>{const d=[...new Set([...u.values()].map(c=>c.value))].sort((c,b)=>c-b),x=[];for(const c of d){const b=o.value.filter(g=>{var k;return((k=u.get(g))==null?void 0:k.value)===c});x.push(...b)}return st(x,l,a,i)}),y=r(()=>!Array.from(f.values()).some(d=>d.value)),_=r(()=>h.value[h.value.length-1].layer),C=r(()=>({"--v-layout-left":A(_.value.left),"--v-layout-right":A(_.value.right),"--v-layout-top":A(_.value.top),"--v-layout-bottom":A(_.value.bottom),...y.value?void 0:{transition:"none"}})),V=r(()=>h.value.slice(1).map((d,x)=>{let{id:c}=d;const{layer:b}=h.value[x],g=a.get(c),k=l.get(c);return{id:c,...b,size:Number(g.value),position:k.value}})),v=d=>V.value.find(x=>x.id===d),S=ue("createLayout"),$=w(!1);ie(()=>{$.value=!0}),re(K,{register:(d,x)=>{let{id:c,order:b,position:g,layoutSize:k,elementSize:R,active:M,disableTransitions:H,absolute:xe}=x;u.set(c,b),l.set(c,g),a.set(c,k),i.set(c,M),H&&f.set(c,H);const te=Be(ge,S==null?void 0:S.vnode).indexOf(d);te>-1?o.value.splice(te,0,c):o.value.push(c);const ae=r(()=>V.value.findIndex(N=>N.id===c)),F=r(()=>t.value+h.value.length*2-ae.value*2),Se=r(()=>{const N=g.value==="left"||g.value==="right",Z=g.value==="right",Ie=g.value==="bottom",le={[g.value]:0,zIndex:F.value,transform:`translate${N?"X":"Y"}(${(M.value?0:-110)*(Z||Ie?-1:1)}%)`,position:xe.value||t.value!==ne?"absolute":"fixed",...y.value?void 0:{transition:"none"}};if(!$.value)return le;const I=V.value[ae.value];if(!I)throw new Error(`[Vuetify] Could not find layout item "${c}"`);const X=B.value.get(c);return X&&(I[X.position]+=X.amount),{...le,height:N?`calc(100% - ${I.top}px - ${I.bottom}px)`:R.value?`${R.value}px`:void 0,left:Z?void 0:`${I.left}px`,right:Z?`${I.right}px`:void 0,top:g.value!=="bottom"?`${I.top}px`:void 0,bottom:g.value!=="top"?`${I.bottom}px`:void 0,width:N?R.value?`${R.value}px`:void 0:`calc(100% - ${I.left}px - ${I.right}px)`}}),Ve=r(()=>({zIndex:F.value-1}));return{layoutItemStyles:Se,layoutItemScrimStyles:Ve,zIndex:F}},unregister:d=>{u.delete(d),l.delete(d),a.delete(d),i.delete(d),f.delete(d),o.value=o.value.filter(x=>x!==d)},mainRect:_,mainStyles:C,getLayoutItem:v,items:V,layoutRect:m,rootZIndex:t});const P=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),_e=r(()=>({zIndex:s?t.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:P,layoutStyles:_e,getLayoutItem:v,items:V,layoutRect:m,layoutRef:p}}const pe=L({text:String,...U(),...ee()},"VToolbarTitle"),he=z()({name:"VToolbarTitle",props:pe(),setup(e,s){let{slots:t}=s;return E(()=>{const o=!!(t.default||t.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[o&&n("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),it=[null,"prominent","default","comfortable","compact"],be=L({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>it.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Oe(),...U(),...je(),...qe(),...ee({tag:"header"}),...ve()},"VToolbar"),se=z()({name:"VToolbar",props:be(),setup(e,s){var y;let{slots:t}=s;const{backgroundColorClasses:o,backgroundColorStyles:l}=Ke(G(e,"color")),{borderClasses:a}=Ue(e),{elevationClasses:u}=Fe(e),{roundedClasses:i}=Ze(e),{themeClasses:f}=de(e),{rtlClasses:p}=me(),m=w(!!(e.extended||(y=t.extension)!=null&&y.call(t))),B=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=r(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return $e({VBtn:{variant:"text"}}),E(()=>{var v;const _=!!(e.title||t.title),C=!!(t.image||e.image),V=(v=t.extension)==null?void 0:v.call(t);return m.value=!!(e.extended||V),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,a.value,u.value,i.value,f.value,p.value,e.class],style:[l.value,e.style]},{default:()=>[C&&n("div",{key:"image",class:"v-toolbar__image"},[t.image?n(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(Xe,{key:"image-img",cover:!0,src:e.image},null)]),n(Y,{defaults:{VTabs:{height:A(B.value)}}},{default:()=>{var S,$,P;return[n("div",{class:"v-toolbar__content",style:{height:A(B.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(S=t.prepend)==null?void 0:S.call(t)]),_&&n(he,{key:"title",text:e.title},{text:t.title}),($=t.default)==null?void 0:$.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(P=t.append)==null?void 0:P.call(t)])])]}}),n(Y,{defaults:{VTabs:{height:A(h.value)}}},{default:()=>[n(Ye,null,{default:()=>[m.value&&n("div",{class:"v-toolbar__extension",style:{height:A(h.value)}},[V])]})]})]})}),{contentHeight:B,extensionHeight:h}}}),rt=L({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ct(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=s;let o=0;const l=Q(null),a=w(0),u=w(0),i=w(0),f=w(!1),p=w(!1),m=r(()=>Number(e.scrollThreshold)),B=r(()=>Ae((m.value-a.value)/m.value||0)),h=()=>{const y=l.value;!y||t&&!t.value||(o=a.value,a.value="window"in y?y.pageYOffset:y.scrollTop,p.value=a.value<o,i.value=Math.abs(a.value-m.value))};return j(p,()=>{u.value=u.value||a.value}),j(f,()=>{u.value=0}),ie(()=>{j(()=>e.scrollTarget,y=>{var C;const _=y?document.querySelector(y):window;_&&_!==l.value&&((C=l.value)==null||C.removeEventListener("scroll",h),l.value=_,l.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),ce(()=>{var y;(y=l.value)==null||y.removeEventListener("scroll",h)}),t&&j(t,h,{immediate:!0}),{scrollThreshold:m,currentScroll:a,currentThreshold:i,isScrollActive:f,scrollRatio:B,isScrollingUp:p,savedScroll:u}}const vt=L({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...be(),...lt(),...rt(),height:{type:[Number,String],default:64}},"VAppBar"),dt=z()({name:"VAppBar",props:vt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const o=Q(),l=Le(e,"modelValue"),a=r(()=>{var S;const v=new Set(((S=e.scrollBehavior)==null?void 0:S.split(" "))??[]);return{hide:v.has("hide"),inverted:v.has("inverted"),collapse:v.has("collapse"),elevate:v.has("elevate"),fadeImage:v.has("fade-image")}}),u=r(()=>{const v=a.value;return v.hide||v.inverted||v.collapse||v.elevate||v.fadeImage||!l.value}),{currentScroll:i,scrollThreshold:f,isScrollingUp:p,scrollRatio:m}=ct(e,{canScroll:u}),B=r(()=>e.collapse||a.value.collapse&&(a.value.inverted?m.value>0:m.value===0)),h=r(()=>e.flat||a.value.elevate&&(a.value.inverted?i.value>0:i.value===0)),y=r(()=>a.value.fadeImage?a.value.inverted?1-m.value:m.value:void 0),_=r(()=>{var $,P;if(a.value.hide&&a.value.inverted)return 0;const v=(($=o.value)==null?void 0:$.contentHeight)??0,S=((P=o.value)==null?void 0:P.extensionHeight)??0;return v+S});Pe(r(()=>!!e.scrollBehavior),()=>{Re(()=>{a.value.hide?a.value.inverted?l.value=i.value>f.value:l.value=p.value||i.value<f.value:l.value=!0})});const{ssrBootStyles:C}=ye(),{layoutItemStyles:V}=nt({id:e.name,order:r(()=>parseInt(e.order,10)),position:G(e,"location"),layoutSize:_,elementSize:w(void 0),active:l,absolute:G(e,"absolute")});return E(()=>{const v=se.filterProps(e);return n(se,W({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":y.value,height:void 0,...C.value},e.style]},v,{collapse:B.value,flat:h.value}),t)}),{}}}),mt=z()({name:"VAppBarTitle",props:pe(),setup(e,s){let{slots:t}=s;return E(()=>n(he,W(e,{class:"v-app-bar-title"}),t)),{}}}),ft={data:()=>({items:[{title:"객관식 풀기",url:"/objective"},{title:"주관식 풀기",url:"/subjective"},{title:"다운로드",url:"/download"}]}),methods:{navigateTo(e){this.$router.push(e)},isRouteActive(e){return this.$route.path===e}}};function yt(e,s,t,o,l,a){const u=fe("router-link");return O(),q(dt,{flat:"",color:"mainColor"},{default:T(()=>[n(mt,{class:"title"},{default:T(()=>[n(Ge,{icon:"mdi-bookshelf"}),oe(" Voca Quest Kids ")]),_:1}),n(Je,null,{activator:T(({props:i})=>[n(Qe,W({icon:"mdi-dots-vertical"},i,{color:"fontColor"}),null,16)]),default:T(()=>[n(We,null,{default:T(()=>[(O(!0),ze(Ee,null,Me(e.items,(i,f)=>(O(),q(et,{key:f,onClick:p=>a.navigateTo(i.url)},{default:T(()=>[n(u,{to:i.url,custom:""},{default:T(()=>[n(tt,{class:He(["menuStyle",{active:a.isRouteActive(i.url)}])},{default:T(()=>[oe(Ne(i.title),1)]),_:2},1032,["class"])]),_:2},1032,["to"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})}const gt=Te(ft,[["render",yt]]);const pt=L({scrollable:Boolean,...U(),...ee({tag:"main"})},"VMain"),ht=z()({name:"VMain",props:pt(),setup(e,s){let{slots:t}=s;const{mainStyles:o}=ot(),{ssrBootStyles:l}=ye();return E(()=>n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,l.value,e.style]},{default:()=>{var a,u;return[e.scrollable?n("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(u=t.default)==null?void 0:u.call(t)]}})),{}}}),bt={__name:"VqView",setup(e){return(s,t)=>{const o=fe("router-view");return O(),q(ht,null,{default:T(()=>[n(o)]),_:1})}}};const _t=L({...U(),...at({fullHeight:!0}),...ve()},"VApp"),xt=z()({name:"VApp",props:_t(),setup(e,s){let{slots:t}=s;const o=de(e),{layoutClasses:l,getLayoutItem:a,items:u,layoutRef:i}=ut(e),{rtlClasses:f}=me();return E(()=>{var p;return n("div",{ref:i,class:["v-application",o.themeClasses.value,l.value,f.value,e.class],style:[e.style]},[n("div",{class:"v-application__wrap"},[(p=t.default)==null?void 0:p.call(t)])])}),{getLayoutItem:a,items:u,theme:o}}}),Bt={__name:"VqDefault",setup(e){return(s,t)=>(O(),q(xt,null,{default:T(()=>[n(gt),n(bt)]),_:1}))}};export{Bt as default};
