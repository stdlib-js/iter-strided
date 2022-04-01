// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterStrided=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var m=function(r){return"number"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return h&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var E=function(r){return w.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},T="function"==typeof Symbol?Symbol.toStringTag:"",_=P,x=T,O=y;var S=E,V=function(r){var e,t,n;if(null==r)return O.call(r);t=r[x],e=_(r,x);try{r[x]=void 0}catch(e){return O.call(r)}return n=O.call(r),e?r[x]=t:delete r[x],n},k=b()?V:S,I=Number,A=I.prototype.toString;var F=k,R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},M=b();var C=function(r){return"object"==typeof r&&(r instanceof R||(M?$(r):"[object Number]"===F(r)))},N=m,B=C;var G=d,L=function(r){return N(r)||B(r)},Z=C;G(L,"isPrimitive",m),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,z=I.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},D=X,q=z,H=Y;var J=function(r){return r<D&&r>q&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,or=nr;var ar=d,ur=function(r){return ir(r)||or(r)},cr=nr;ar(ur,"isPrimitive",rr),ar(ur,"isObject",cr);var fr=ur,sr=fr.isPrimitive;var lr=function(r){return sr(r)&&r>=0},vr=fr.isObject;var pr=function(r){return vr(r)&&r.valueOf()>=0},gr=lr,dr=pr;var mr=d,hr=function(r){return gr(r)||dr(r)},br=pr;mr(hr,"isPrimitive",lr),mr(hr,"isObject",br);var yr=hr,wr=fr.isPrimitive;var Er=function(r){return wr(r)&&r>0},jr=fr.isObject;var Pr=function(r){return jr(r)&&r.valueOf()>0},Tr=Er,_r=Pr;var xr=d,Or=function(r){return Tr(r)||_r(r)},Sr=Pr;xr(Or,"isPrimitive",Er),xr(Or,"isObject",Sr);var Vr=Or;var kr=function(r){return"boolean"==typeof r},Ir=Boolean.prototype.toString;var Ar=k,Fr=function(r){try{return Ir.call(r),!0}catch(r){return!1}},Rr=b();var $r=function(r){return"object"==typeof r&&(r instanceof Boolean||(Rr?Fr(r):"[object Boolean]"===Ar(r)))},Mr=kr,Cr=$r;var Nr=d,Br=function(r){return Mr(r)||Cr(r)},Gr=$r;Nr(Br,"isPrimitive",kr),Nr(Br,"isObject",Gr);var Lr=Br,Zr=/./;var Wr=function(){return new Function("return this;")()},Xr="object"==typeof self?self:null,zr="object"==typeof window?window:null,Ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yr="object"==typeof Ur?Ur:null;module.exports=Yr;var Dr=Lr.isPrimitive,qr=Wr,Hr=Xr,Jr=zr,Kr=r(Object.freeze({__proto__:null}));var Qr=function(r){if(arguments.length){if(!Dr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return qr()}if(Hr)return Hr;if(Jr)return Jr;if(Kr)return Kr;throw new Error("unexpected error. Unable to resolve global object.")},re=Qr(),ee=re.document&&re.document.childNodes,te=Int8Array,ne=Zr,ie=ee,oe=te;var ae=function(){return"function"==typeof ne||"object"==typeof oe||"function"==typeof ie};var ue=function(){return/^\s*function\s*([^(]*)/i},ce=ue;d(ce,"REGEXP",ue());var fe=ce,se=k;var le=Array.isArray?Array.isArray:function(r){return"[object Array]"===se(r)};var ve=function(r){return null!==r&&"object"==typeof r};d(ve,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!le(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ve));var pe=ve;var ge=k,de=fe.REGEXP,me=function(r){return pe(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var he=function(r){var e,t,n;if(("Object"===(t=ge(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=de.exec(n.toString()))return e[1]}return me(r)?"Buffer":t},be=he;var ye=he;var we=function(r){var e;return null===r?"null":"object"===(e=typeof r)?be(r).toLowerCase():e},Ee=function(r){return ye(r).toLowerCase()},je=ae()?Ee:we;var Pe=function(r){return"function"===je(r)},Te=Pe;var _e=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&Te(r.next)},xe=P;var Oe=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&xe(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var Se=function(r){return"string"==typeof r},Ve=String.prototype.valueOf;var ke=k,Ie=function(r){try{return Ve.call(r),!0}catch(r){return!1}},Ae=b();var Fe=function(r){return"object"==typeof r&&(r instanceof String||(Ae?Ie(r):"[object String]"===ke(r)))},Re=Se,$e=Fe;var Me=d,Ce=function(r){return Re(r)||$e(r)},Ne=Fe;Me(Ce,"isPrimitive",Se),Me(Ce,"isObject",Ne);var Be=Ce,Ge=Y;var Le=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ge(r.length)&&r.length>=0&&r.length<=9007199254740991};var Ze=function(r){return r!=r},We=W.isPrimitive,Xe=Ze;var ze=function(r){return We(r)&&Xe(r)},Ue=W.isObject,Ye=Ze;var De=function(r){return Ue(r)&&Ye(r.valueOf())},qe=ze,He=De;var Je=d,Ke=function(r){return qe(r)||He(r)},Qe=De;Je(Ke,"isPrimitive",ze),Je(Ke,"isObject",Qe);var rt=Le,et=fr.isPrimitive,tt=Be.isPrimitive,nt=Ke.isPrimitive;var it=function(r,e,t){var n,i,o;if(!rt(r)&&!tt(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!et(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(tt(r)){if(!tt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,nt(e)){for(o=i;o<n;o++)if(nt(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},ot=it,at=Be.isPrimitive;var ut=function(r){if(!at(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ct=Be.isPrimitive;var ft=function(r){if(!ct(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},st=ut,lt=ft,vt=Be.isPrimitive;var pt=function(r){return vt(r)&&r===lt(r)&&r!==st(r)},gt=X,dt=z;var mt=function(r){return r==r&&r>dt&&r<gt},ht=yr.isPrimitive,bt=Be.isPrimitive;var yt=function(r,e){var t,n;if(!bt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ht(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},wt=fr.isPrimitive,Et=Be.isPrimitive;var jt=function(r,e,t){var n,i;if(!Et(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Et(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!wt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Pt=yt,Tt=jt;var _t=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Tt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Pt("0",i):Pt("0",i)+r,n&&(r="-"+r)),r},xt=pt,Ot=ft,St=ut,Vt=mt,kt=W.isPrimitive,It=_t;var At=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Vt(n)){if(!kt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=It(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=It(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=xt(r.specifier)?Ot(t):St(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ft=Be.isPrimitive,Rt=/[-\/\\^$*+?.()|[\]{}]/g;var $t=function(r){var e,t;if(!Ft(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Rt,"\\$&"):(e=(e=r.substring(1,t)).replace(Rt,"\\$&"),r=r[0]+e+r.substring(t))},Mt=RegExp.prototype.exec;var Ct=k,Nt=function(r){try{return Mt.call(r),!0}catch(r){return!1}},Bt=b();var Gt=$t,Lt=Pe,Zt=Be.isPrimitive,Wt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Bt?Nt(r):"[object RegExp]"===Ct(r)))};var Xt=pt,zt=ft,Ut=ut,Yt=function(r,e,t){if(!Zt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Zt(e))e=Gt(e),e=new RegExp(e,"g");else if(!Wt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Zt(t)&&!Lt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Dt=mt,qt=W.isPrimitive,Ht=function(r){return Math.abs(r)},Jt=/e\+(\d)$/,Kt=/e-(\d)$/,Qt=/^(\d+)$/,rn=/^(\d+)e/,en=/\.0$/,tn=/\.0*e/,nn=/(\..*[^0])0*e/;var on=function(r){var e,t,n=parseFloat(r.arg);if(!Dt(n)){if(!qt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ht(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Yt(t,nn,"$1e"),t=Yt(t,tn,"e"),t=Yt(t,en,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Yt(t,Jt,"e+0$1"),t=Yt(t,Kt,"e-0$1"),r.alternate&&(t=Yt(t,Qt,"$1."),t=Yt(t,rn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Xt(r.specifier)?zt(t):Ut(t)},an=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var un=yt;var cn=Be.isPrimitive,fn=ot,sn=Ze,ln=At,vn=on,pn=function(r){var e,t,n,i,o;for(e=0,n=[],o=an.exec(r);o;)(t=r.slice(e,an.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=an.lastIndex,o=an.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},gn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+un(" ",n):un(" ",n)+r},dn=_t,mn=String.fromCharCode;var hn=function(r){var e,t,n,i,o,a,u,c,f;if(!cn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=pn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],cn(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!fn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,sn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,sn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=ln(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!sn(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=sn(o)?String(n.arg):mn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=vn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=dn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=gn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},bn=d,yn=yr.isPrimitive,wn=Vr,En=Lr.isPrimitive,jn=Pe,Pn=_e,Tn=Oe,_n=hn,xn=!1;var On=function r(e,t,n,i){var o,a,u,c,f,s,l,v;if(!Pn(e))throw new TypeError(_n("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(!wn(t))throw new TypeError(_n("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));if(3===arguments.length){if(!yn(n))throw new TypeError(_n("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));c=n,a=xn}else if(arguments.length>3){if(!yn(n))throw new TypeError(_n("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));if(c=n,!En(i))throw new TypeError(_n("invalid argument. Fourth argument must be a boolean. Value: `%s`.",i));a=i}else c=0,a=xn;if(a){for(v=0;v<c;v++)if((l=e.next()).done){u=!0,f=l;break}v-=1}else v=-1;return bn(o={},"next",p),bn(o,"return",g),Tn&&jn(e[Tn])&&(s=c,bn(o,Tn,d)),o;function p(){var r;if(u)return f?(r=f,f=null,r):{done:!0};for(v+=1;v<c;){if((r=e.next()).done)return u=!0,r;v+=1}return c+=t,(r=e.next()).done&&(u=!0),r}function g(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){return r(e[Tn](),t,s,a)}};return On}));
//# sourceMappingURL=bundle.js.map
