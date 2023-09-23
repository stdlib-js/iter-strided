// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function m(l,f,p,h){var j,a,v,x,u,g,c,b;if(!i(l))throw new TypeError(d("0Px46,G5",l));if(!t(f))throw new TypeError(d("0Px45,IB",f));if(3===arguments.length){if(!r(p))throw new TypeError(d("0Px2m,L9",p));x=p,a=false}else if(arguments.length>3){if(!r(p))throw new TypeError(d("0Px2m,L9",p));if(x=p,!s(h))throw new TypeError(d("0Px4J,Lr",h));a=h}else x=0,a=false;if(a){for(b=0;b<x;b++)if((c=l.next()).done){v=!0,u=c;break}b-=1}else b=-1;return e(j={},"next",w),e(j,"return",y),o&&n(l[o])&&(g=x,e(j,o,P)),j;function w(){var e;if(v)return u?(e=u,u=null,e):{done:!0};for(b+=1;b<x;){if((e=l.next()).done)return v=!0,e;b+=1}return x+=f,(e=l.next()).done&&(v=!0),e}function y(e){return v=!0,arguments.length?{value:e,done:!0}:{done:!0}}function P(){return m(l[o](),f,g,a)}}export{m as default};
//# sourceMappingURL=index.mjs.map
