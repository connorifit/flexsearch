/*
 FlexSearch v0.5.0
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';(function(g,t,A){let d;(d=A.define)&&d.amd?d([],function(){return t}):(d=A.modules)?d[g.toLowerCase()]=t:"object"===typeof exports?module.exports=t:A[g]=t})("FlexSearch",function(){function g(a,b){const c=b?b.id:a&&a.id;this.id=c||0===c?c:P++;this.init(a,b);A(this,"index",function(){return this.c});A(this,"length",function(){return Object.keys(this.c).length})}function t(a,b){a=a.concat.apply([],a);b&&(D(b)||(w=b.split(":"),1<w.length?b=Q:(w=w[0],b=R)),a.sort(b));return a}function A(a,
b,c){Object.defineProperty(a,b,{get:c})}function d(a){return new RegExp(a,"g")}function y(a,b){for(let c=0;c<b.length;c+=2)a=a.replace(b[c],b[c+1]);return a}function E(a,b,c,e,h,k,f){if(b[c])return b[c];h=h?(9-(f||6))*k+(f||6)*h:k;b[c]=h;h>=f&&(a=a[9-(h+.5>>0)],a=a[c]||(a[c]=[]),a[a.length]=e);return h}function H(a,b){if(a){const c=Object.keys(a);for(let e=0,h=c.length;e<h;e++){const h=c[e],f=a[h];if(f)for(let c=0,e=f.length;c<e;c++)if(f[c]===b){1===e?delete a[h]:f.splice(c,1);break}else z(f[c])&&
H(f[c],b)}}}function I(a){let b="",c="";var e="";for(let h=0;h<a.length;h++){const k=a[h];if(k!==c)if(h&&"h"===k){if(e="a"===e||"e"===e||"i"===e||"o"===e||"u"===e||"y"===e,("a"===c||"e"===c||"i"===c||"o"===c||"u"===c||"y"===c)&&e||" "===c)b+=k}else b+=k;e=h===a.length-1?"":a[h+1];c=k}return b}function S(a,b){a=a.length-b.length;return 0>a?1:a?-1:0}function T(a,b){a=a.length-b.length;return 0>a?-1:a?1:0}function R(a,b){a=a[w];b=b[w];return a<b?-1:a>b?1:0}function Q(a,b){const c=w.length;for(let e=
0;e<c;e++)a=a[w[e]],b=b[w[e]];return a<b?-1:a>b?1:0}function U(a,b,c,e){let h=[],k;const f=a.length;if(1<f){a.sort(T);const m=v();let l=a[0],n=l.length,p=0;for(;p<n;)m["@"+l[p++]]=1;let r,q=0,g=0;for(;++g<f;){let u=!1;const V=g===f-1;k=[];l=a[g];n=l.length;for(p=0;p<n;){r=l[p++];var d="@"+r;if(m[d]){const a=m[d];if(a===g){if(V){if(h[q++]=c?c[d]:r,b&&q===b)return h}else m[d]=g+1;u=!0}else e&&(d=k[a]||(k[a]=[]),d[d.length]=r)}}if(!u&&!e)break}if(e&&(q=h.length,(g=k.length)&&(!b||q<b)))for(;g--;)if(r=
k[g])for(p=0,n=r.length;p<n;p++)if(h[q++]=c?c["@"+r[p]]:r[p],b&&q===b)return h}else if(f)if(c)for(a=a[0],e=a.length,b&&b<e&&(e=b),h=Array(e),b=0;b<e;b++)h[b]=c["@"+a[b]];else h=a[0],b&&h.length>b&&(h=h.slice(0,b));return h}function F(a){return"string"===typeof a}function D(a){return"function"===typeof a}function z(a){return"object"===typeof a}function G(a){return"undefined"===typeof a}function K(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=v();return b}function v(){return Object.create(null)}const x=
{encode:"icase",b:"forward",o:!1,cache:!1,async:!1,s:!1,l:!1,threshold:0,depth:0,a:!1},L={memory:{encode:"extra",b:"strict",threshold:7},speed:{encode:"icase",b:"strict",threshold:7,depth:2},match:{encode:"extra",b:"full"},score:{encode:"extra",b:"strict",threshold:5,depth:4},balance:{encode:"balance",b:"strict",threshold:6,depth:3},fastest:{encode:"icase",b:"strict",threshold:9,depth:1}},J=[];let P=0;const M=d("\\W+"),N={},O={};g.create=function(a){return new g(a)};g.registerMatcher=function(a){for(const b in a)a.hasOwnProperty(b)&&
J.push(d(b),a[b]);return this};g.registerEncoder=function(a,b){C[a]=b.bind(C);return this};g.registerLanguage=function(a,b){N[a]=b.filter;O[a]=b.stemmer;return this};g.encode=function(a,b){return C[a](b)};g.prototype.init=function(a,b){this.m=[];if(b){var c=b.preset;a=b}else a||(a=x),c=a.preset;b={};F(a)?(b=L[a],a={}):c&&(b=L[c]);this.b=a.tokenize||b.b||this.b||x.b;this.l=a.rtl||this.l||x.l;this.async="undefined"===typeof Promise||G(c=a.async)?this.async||x.async:c;this.threshold=G(c=a.threshold)?
b.threshold||this.threshold||x.threshold:c;this.depth=G(c=a.depth)?b.depth||this.depth||x.depth:c;this.h=(c=G(c=a.encode)?b.encode||x.encode:c)&&C[c]&&C[c].bind(C)||(D(c)?c:this.h||!1);(c=a.matcher)&&this.addMatcher(c);if(c=a.filter){c=N[c]||c;b=this.h;var e=v();if(c)for(var h=0;h<c.length;h++){var k=b?b(c[h]):c[h];e[k]=String.fromCharCode(65E3-c.length+h)}this.filter=c=e}if(c=a.stemmer){var f;b=O[c]||c;e=this.h;h=[];if(b)for(f in b)b.hasOwnProperty(f)&&(k=e?e(f):f,h.push(d("(?=.{"+(k.length+3)+",})"+
k+"$"),e?e(b[f]):b[f]));this.stemmer=f=h}this.a=f=(c=a.doc)?c:this.a||x.a;this.j=K(10-(this.threshold||0));this.g=v();this.c=v();if(f&&(this.f=v(),a.doc=null,c=f.index=[],b=f.ref={},e=f.field,f.id=f.id.split(":"),e))for(e.constructor===Array||(f.field=e=[e]),f=0;f<e.length;f++)b[e[f]]=f,e[f]=e[f].split(":"),c[f]=new g(a),c[f].f=this.f;return this};g.prototype.encode=function(a){a&&J.length&&(a=y(a,J));a&&this.m.length&&(a=y(a,this.m));a&&this.h&&(a=this.h(a));a&&this.stemmer&&(a=y(a,this.stemmer));
return a};g.prototype.addMatcher=function(a){const b=this.m;for(const c in a)a.hasOwnProperty(c)&&b.push(d(c),a[c]);return this};g.prototype.add=function(a,b,c,e,h){if(this.a&&z(a))return this.i("add",a,b);if(b&&F(b)&&(a||0===a)){var d="@"+a;if(this.c[d]&&!e)return this.update(a,b);if(!h){if(this.async&&"function"!==typeof importScripts){let f=this;d=new Promise(function(c){setTimeout(function(){f.add(a,b,null,e,!0);f=null;c()})});if(c)d.then(c);else return d;return this}if(c)return this.add(a,b,
null,e,!0),c(),this}b=this.encode(b);if(!b.length)return this;c=this.b;h=D(c)?c(b):b.split(M);const k=v();k._ctx=v();const r=this.threshold,q=this.depth,u=this.j,B=h.length,t=this.l;for(let b=0;b<B;b++){var f=h[b];if(f){var n=f.length,m=(t?b+1:B-b)/B,l="";switch(c){case "reverse":case "both":for(var g=n;--g;)l=f[g]+l,E(u,k,l,a,t?1:(n-g)/n,m,r);l="";case "forward":for(g=0;g<n;g++)l+=f[g],E(u,k,l,a,t?(g+1)/n:1,m,r);break;case "full":for(g=0;g<n;g++){const b=(t?g+1:n-g)/n;for(let c=n;c>g;c--)l=f.substring(g,
c),E(u,k,l,a,b,m,r)}break;default:if(n=E(u,k,f,a,1,m,r),q&&1<B&&n>=r)for(n=k._ctx[f]||(k._ctx[f]=v()),f=this.g[f]||(this.g[f]=K(10-(r||0))),m=b-q,l=b+q+1,0>m&&(m=0),l>B&&(l=B);m<l;m++)m!==b&&E(f,n,h[m],a,0,10-(m<b?b-m:m-b),r)}}}this.c[d]=1}return this};g.prototype.i=function(a,b,c){if(b.constructor===Array)for(let e=0,d=b.length;e<d;e++){if(e===d-1)return this.i(a,b[e],c);this.i(a,b[e])}else{const f=this.a.index;var e=this.a.tag,h=this.a.id;let k;for(var d=0;d<h.length;d++)k=(k||b)[h[d]];if(e)for(h=
0;h<e.length;h++);if("remove"===a){delete this.f["@"+k];for(let a=0,b=f.length;a<b;a++){if(a===b-1)return f[a].remove(k,c);f[a].remove(k)}}h=this.a.field;for(let g=0,l=h.length;g<l;g++){e=h[g];let n;for(d=0;d<e.length;d++)n=(n||b)[e[d]];this.f["@"+k]=b;e=f[g];d="add"===a?e.add:e.update;if(g===l-1)return d.call(e,k,n,c);d.call(e,k,n)}}};g.prototype.update=function(a,b,c){if(this.a&&z(a))return this.i("update",a,b);this.c["@"+a]&&F(b)&&(this.remove(a),this.add(a,b,c,!0));return this};g.prototype.remove=
function(a,b,c){if(this.a&&z(a))return this.i("remove",a,b);var e="@"+a;if(this.c[e]){if(!c){if(this.async&&"function"!==typeof importScripts){let c=this;e=new Promise(function(b){setTimeout(function(){c.remove(a,null,!0);c=null;b()})});if(b)e.then(b);else return e;return this}if(b)return this.remove(a,null,!0),b(),this}for(b=0;b<10-(this.threshold||0);b++)H(this.j[b],a);this.depth&&H(this.g,a);delete this.c[e]}return this};let w;g.prototype.search=function(a,b,c,e){if(z(b)){if(b.constructor===Array)for(var d=
0;d<b.length;d++)b[d].query=a;else b.query=a;a=b;b=0}let k=a;let f,g=[];if(z(a)&&a.constructor!==Array){(c=a.callback||b)&&(k.callback=null);var m=a.boost;f=a.sort;b=a.limit;var l=a.threshold;a=a.query}if(this.a){l=this.a.ref;var u=this.a.index,p=k.field;if(p)k.field=null;else if(k.constructor===Array){var r=k;p=[];for(var q=0;q<k.length;q++)p[q]=k[q].field}else p=Object.keys(l);if(z(p)){p.constructor===Array||(p=[p]);q=p.length;for(a=0;a<q;a++)r&&(k=r[a]),g[a]=u[l[p[a]]].search(k);return c?c(t(g,
f)):this.async?new Promise(function(a){Promise.all(g).then(function(b){a(t(b,f))})}):t(g,f)}return u[l[p]].search(k,c)}l||(l=this.threshold||0);D(b)?(c=b,b=1E3):b||0===b||(b=1E3);if(!e){if(this.async&&"function"!==typeof importScripts){let a=this;l=new Promise(function(c){setTimeout(function(){c(a.search(k,b,null,!0));a=null})});if(c)l.then(c);else return l;return this}if(c)return c(this.search(k,b,null,!0)),this}if(!a||!F(a))return g;k=a;k=this.encode(k);if(!k.length)return g;c=this.b;c=D(c)?c(k):
k.split(M);r=c.length;a=!0;e=[];d=v();1<r&&(this.depth?(u=!0,q=c[0],d[q]=1):c.sort(S));if(!u||(p=this.g)[q]){let b=0;m&&(l=(l||1)/m,0>m&&(b=l));for(m=u?1:0;m<r;m++){const f=c[m];if(f){if(!d[f]){const c=[];let g=!1,h=0;if(q=u?p[q]:this.j){let a;for(let d=b;d<10-l;d++)if(a=q[d][f])c[h++]=a,g=!0}if(g)e[e.length]=1<h?c.concat.apply([],c):c[0];else{a=!1;break}d[f]=1}q=f}}}else a=!1;a&&(g=U(e,b,this.f,!1));f&&(g=t([g],f));return g};g.prototype.clear=function(){return this.destroy().init()};g.prototype.destroy=
function(){this.j=this.g=this.c=null;if(this.a){const a=this.f.index;for(let b=0;b<a.length;b++)a.destroy();this.f=null}return this};const C={icase:function(a){return a.toLowerCase()},simple:function(){const a=[d("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",d("[\u00e8\u00e9\u00ea\u00eb]"),"e",d("[\u00ec\u00ed\u00ee\u00ef]"),"i",d("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",d("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",d("[\u00fd\u0177\u00ff]"),"y",d("\u00f1"),"n",d("\u00e7"),"c",d("\u00df"),"s",d(" & "),
" and ",d("[-/]")," ",d("[^a-z0-9 ]"),"",d("\\s+")," "];return function(b){b=y(b.toLowerCase(),a);return" "===b?"":b}}(),advanced:function(){const a=[d("ae"),"a",d("ai"),"ei",d("ay"),"ei",d("ey"),"ei",d("oe"),"o",d("ue"),"u",d("ie"),"i",d("sz"),"s",d("zs"),"s",d("sh"),"s",d("ck"),"k",d("cc"),"k",d("dt"),"t",d("ph"),"f",d("pf"),"f",d("ou"),"o",d("uo"),"u"];return function(b,c){if(!b)return b;b=this.simple(b);2<b.length&&(b=y(b,a));c||1<b.length&&(b=I(b));return b}}(),extra:function(){const a=[d("p"),
"b",d("z"),"s",d("[cgq]"),"k",d("n"),"m",d("d"),"t",d("[vw]"),"f",d("[aeiouy]"),""];return function(b){if(!b)return b;b=this.advanced(b,!0);if(1<b.length){b=b.split(" ");for(let c=0;c<b.length;c++){const d=b[c];1<d.length&&(b[c]=d[0]+y(d.substring(1),a))}b=b.join(" ");b=I(b)}return b}}(),balance:function(){const a=[d("[-/]")," ",d("[^a-z0-9 ]"),"",d("\\s+")," "];return function(b){return I(y(b.toLowerCase(),a))}}()};return g}(!1),this);
