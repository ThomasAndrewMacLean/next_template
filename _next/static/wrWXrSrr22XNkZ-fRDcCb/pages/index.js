(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return v}));var r=n("q1tI"),c=n.n(r),u=n("vOnD"),o=n("Nhdc");const i="undefined"===typeof window?r.useEffect:r.useLayoutEffect;var a,s,l=function(e){let t,n=new Set;const c=e=>{const r="function"===typeof e?e(t):e;r!==t&&(t=Object.assign({},t,r),n.forEach(e=>e()))},u=()=>t,o=(e,n=u,r=Object.is)=>({currentSlice:n(t),equalityFn:r,errored:!1,listener:e,selector:n,unsubscribe:()=>{}}),a=e=>{function r(){try{const n=e.selector(t);e.equalityFn(e.currentSlice,n)||e.listener(e.currentSlice=n)}catch(n){e.errored=!0,e.listener(null,n)}}return n.add(r),()=>{n.delete(r)}},s={setState:c,getState:u,subscribe:(e,t,n)=>a(o(e,t,n)),destroy:()=>n.clear()};return t=e(c,u,s),[(e=u,n=Object.is)=>{const c=Object(r.useReducer)(e=>e+1,0)[1],s=Object(r.useRef)();s.current||(s.current=o(c,e,n),s.current.unsubscribe=a(s.current));const l=s.current;let d,f=!1;return(l.selector!==e||l.equalityFn!==n||l.errored)&&(d=e(t),f=!n(l.currentSlice,d)),i(()=>{f&&(l.currentSlice=d),l.selector=e,l.equalityFn=n,l.errored=!1}),i(()=>l.unsubscribe,[]),f?d:l.currentSlice},s]}((function(e,t){return{count:0,countPlusOne:function(){var n=t().count;return e((function(){return{count:n+1}}))}}})),d=(s=1,function(e){if(Array.isArray(e))return e}(a=l)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,c=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(a){c=!0,u=a}finally{try{r||null==i.return||i.return()}finally{if(c)throw u}}return n}}(a,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}())[0],f=n("0lfv"),b=n("2eiZ"),y=c.a.createElement,p=u.a.main.withConfig({displayName:"pages__Main",componentId:"o2672c-0"})(["background:var(--background-dark);"]),v=!0;t.default=function(e){var t=e.translations,n=e.pics,r=e.seo,c=d(),u=c.count,i=c.countPlusOne;return y(b.a.Provider,{value:n},y(b.b.Provider,{value:r},y(b.c.Provider,{value:t},y(o.b,{page:"home"},y(p,null,y(o.c,{seo:r}),y("h1",null,"HELLO WORLD"),y(o.d,{translationKey:"test"}),y(o.d,{translationKey:"test2"}),y("button",{onClick:i},"+"),y(o.a,{imageKey:"hero-image"}),u,"+ 1 = ",Object(f.a)(u,1))))))}}},[["/EDR",0,2,1,4]]]);