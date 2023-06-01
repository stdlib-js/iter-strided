// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function m(l,f,p,h){var j,a,u,g,v,c,x,b;if(!i(l))throw new TypeError(d("0Ct4J",l));if(!r(f))throw new TypeError(d("0Ct4I",f));if(3===arguments.length){if(!t(p))throw new TypeError(d("0Ct2y",p));g=p,a=false}else if(arguments.length>3){if(!t(p))throw new TypeError(d("0Ct2y",p));if(g=p,!s(h))throw new TypeError(d("0Ct4W",h));a=h}else g=0,a=false;if(a){for(b=0;b<g;b++)if((x=l.next()).done){u=!0,v=x;break}b-=1}else b=-1;return e(j={},"next",w),e(j,"return",y),o&&n(l[o])&&(c=g,e(j,o,C)),j;function w(){var e;if(u)return v?(e=v,v=null,e):{done:!0};for(b+=1;b<g;){if((e=l.next()).done)return u=!0,e;b+=1}return g+=f,(e=l.next()).done&&(u=!0),e}function y(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function C(){return m(l[o](),f,c,a)}}export{m as default};
//# sourceMappingURL=index.mjs.map