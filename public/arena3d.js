"use strict";(()=>{var dd=Object.defineProperty;var pd=(i,t,e)=>t in i?dd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Fe=(i,t,e)=>pd(i,typeof t!="symbol"?t+"":t,e);var md=0,Xh=1,gd=2;var ef=1,_d=2,wi=3,An=0,Tn=1,Re=2,Ki=0,ai=1,Qe=2,qh=3,Yh=4,yd=5,_r=100,xd=101,Md=102,vd=103,bd=104,Ed=200,Sd=201,wd=202,Td=203,Nc=204,Hc=205,Ad=206,Rd=207,Cd=208,Pd=209,Id=210,Ld=211,Ud=212,Dd=213,Nd=214,Fc=0,Oc=1,Bc=2,ss=3,zc=4,kc=5,Vc=6,Gc=7,ch=0,lh=1,Hd=2,Ji=0,Fd=1,Od=2,Bd=3,uo=4,zd=5,kd=6,Vd=7;var nf=300,os=301,as=302,Ks=303,Wc=304,Oa=306,Mr=1e3,Ai=1001,Xc=1002,fn=1003,Gd=1004;var So=1005;var Zn=1006,ja=1007;var xr=1008;var Ci=1009,rf=1010,sf=1011,Js=1012,hh=1013,vr=1014,oi=1015,fo=1016,uh=1017,fh=1018,cs=1020,of=35902,af=1021,cf=1022,Kn=1023,lf=1024,hf=1025,ns=1026,ls=1027,dh=1028,ph=1029,uf=1030,mh=1031;var gh=1033,ia=33776,ra=33777,sa=33778,oa=33779,qc=35840,Yc=35841,Zc=35842,$c=35843,Kc=36196,Jc=37492,Qc=37496,jc=37808,tl=37809,el=37810,nl=37811,il=37812,rl=37813,sl=37814,ol=37815,al=37816,cl=37817,ll=37818,hl=37819,ul=37820,fl=37821,aa=36492,dl=36494,pl=36495,ff=36283,ml=36284,gl=36285,_l=36286;var la=2300,yl=2301,tc=2302,Zh=2400,$h=2401,Kh=2402;var Wd=3200,Xd=3201;var _h=0,qd=1,Zi="",Je="srgb",er="srgb-linear",yh="display-p3",Ba="display-p3-linear",ha="linear",De="srgb",ua="rec709",fa="p3";var Nr=7680;var Jh=519,Yd=512,Zd=513,$d=514,df=515,Kd=516,Jd=517,Qd=518,jd=519,xl=35044;var Qh="300 es",Ri=2e3,da=2001,Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jh=1234567,Ws=Math.PI/180,Qs=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function xh(i,t){return(i%t+t)%t}function t0(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function e0(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function n0(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function i0(i,t=1){return t-Math.abs(xh(i,t*2)-t)}function r0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function s0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function o0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function a0(i,t){return i+Math.random()*(t-i)}function c0(i){return i*(.5-Math.random())}function l0(i){i!==void 0&&(jh=i);let t=jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function h0(i){return i*Ws}function u0(i){return i*Qs}function f0(i){return(i&i-1)===0&&i!==0}function d0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function p0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function m0(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _s={DEG2RAD:Ws,RAD2DEG:Qs,generateUUID:ci,clamp:cn,euclideanModulo:xh,mapLinear:t0,inverseLerp:e0,lerp:Xs,damp:n0,pingpong:i0,smoothstep:r0,smootherstep:s0,randInt:o0,randFloat:a0,randFloatSpread:c0,seededRandom:l0,degToRad:h0,radToDeg:u0,isPowerOfTwo:f0,ceilPowerOfTwo:d0,floorPowerOfTwo:p0,setQuaternionFromProperEuler:m0,normalize:Ae,denormalize:$n},Dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],y=r[1],x=r[4],M=r[7],L=r[2],A=r[5],C=r[8];return s[0]=o*_+a*y+c*L,s[3]=o*f+a*x+c*A,s[6]=o*p+a*M+c*C,s[1]=l*_+h*y+u*L,s[4]=l*f+h*x+u*A,s[7]=l*p+h*M+u*C,s[2]=d*_+m*y+g*L,s[5]=d*f+m*x+g*A,s[8]=d*p+m*M+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=e*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ec.makeScale(t,e)),this}rotate(t){return this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ec=new fe;function pf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function g0(){let i=pa("canvas");return i.style.display="block",i}var tu={};function ca(i){i in tu||(tu[i]=!0,console.warn(i))}function _0(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function y0(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function x0(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var eu=new fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nu=new fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[er]:{transfer:ha,primaries:ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Je]:{transfer:De,primaries:ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ba]:{transfer:ha,primaries:fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(nu),fromReference:i=>i.applyMatrix3(eu)},[yh]:{transfer:De,primaries:fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(nu),fromReference:i=>i.applyMatrix3(eu).convertLinearToSRGB()}},M0=new Set([er,Ba]),Se={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!M0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Is[t].toReference,r=Is[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Is[i].primaries},getTransfer:function(i){return i===Zi?ha:Is[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Is[t].luminanceCoefficients)}};function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hr,Ml=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hr===void 0&&(Hr=pa("canvas")),Hr.width=t.width,Hr.height=t.height;let n=Hr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=is(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},v0=0,ma=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ic(r[o].image)):s.push(ic(r[o]))}else s=ic(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var b0=0,Rn=class i extends Qi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ai,r=Ai,s=Zn,o=xr,a=Kn,c=Ci,l=i.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=ci(),this.name="",this.source=new ma(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=nf;Rn.DEFAULT_ANISOTROPY=1;var Ce=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(m+1)/2,L=(p+1)/2,A=(h+d)/4,C=(u+_)/4,B=(g+f)/4;return x>M&&x>L?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=C/n):M>L?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=A/r,s=B/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=C/s,r=B/s),this.set(n,r,s,e),this}let y=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends Qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Rn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ma(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ga=class extends Rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends Rn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var je=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let L=Math.sqrt(x),A=Math.atan2(L,p*y);f=Math.sin(f*A)/L,a=Math.sin(a*A)/L}let M=a*y;if(c=c*f+d*M,l=l*f+m*M,h=h*f+g*M,u=u*f+_*M,f===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rc.copy(this).projectOnVector(t),this.sub(rc)}reflect(t){return this.sub(rc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rc=new R,iu=new je,Ii=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),To.subVectors(this.max,Ls),Fr.subVectors(t.a,Ls),Or.subVectors(t.b,Ls),Br.subVectors(t.c,Ls),Vi.subVectors(Or,Fr),Gi.subVectors(Br,Or),hr.subVectors(Fr,Br);let e=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-hr.z,hr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,hr.z,0,-hr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-hr.y,hr.x,0];return!sc(e,Fr,Or,Br,To)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,Fr,Or,Br,To))?!1:(Ao.crossVectors(Vi,Gi),e=[Ao.x,Ao.y,Ao.z],sc(e,Fr,Or,Br,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mi=[new R,new R,new R,new R,new R,new R,new R,new R],Xn=new R,wo=new Ii,Fr=new R,Or=new R,Br=new R,Vi=new R,Gi=new R,hr=new R,Ls=new R,To=new R,Ao=new R,ur=new R;function sc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ur.fromArray(i,s);let a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),c=t.dot(ur),l=e.dot(ur),h=n.dot(ur);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var E0=new Ii,Us=new R,oc=new R,Li=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):E0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Us,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(oc)),this.expandByPoint(Us.copy(t.center).sub(oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new R,ac=new R,Ro=new R,Wi=new R,cc=new R,Co=new R,lc=new R,js=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ac.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(ac);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ro),a=Wi.dot(this.direction),c=-Wi.dot(Ro),l=Wi.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ac).addScaledVector(Ro,d),m}intersectSphere(t,e){vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),r=vi.dot(vi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,r,s){cc.subVectors(e,t),Co.subVectors(n,t),lc.crossVectors(cc,Co);let o=this.direction.dot(lc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,t);let c=a*this.direction.dot(Co.crossVectors(Wi,Co));if(c<0)return null;let l=a*this.direction.dot(cc.cross(Wi));if(l<0||c+l>o)return null;let h=-a*Wi.dot(lc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f)}set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/zr.setFromMatrixColumn(t,0).length(),s=1/zr.setFromMatrixColumn(t,1).length(),o=1/zr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(S0,t,w0)}lookAt(t,e,n){let r=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Xi.crossVectors(n,Un),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Xi.crossVectors(n,Un)),Xi.normalize(),Po.crossVectors(Un,Xi),r[0]=Xi.x,r[4]=Po.x,r[8]=Un.x,r[1]=Xi.y,r[5]=Po.y,r[9]=Un.y,r[2]=Xi.z,r[6]=Po.z,r[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],y=n[3],x=n[7],M=n[11],L=n[15],A=r[0],C=r[4],B=r[8],it=r[12],v=r[1],w=r[5],tt=r[9],st=r[13],at=r[2],Mt=r[6],ht=r[10],vt=r[14],D=r[3],et=r[7],k=r[11],$=r[15];return s[0]=o*A+a*v+c*at+l*D,s[4]=o*C+a*w+c*Mt+l*et,s[8]=o*B+a*tt+c*ht+l*k,s[12]=o*it+a*st+c*vt+l*$,s[1]=h*A+u*v+d*at+m*D,s[5]=h*C+u*w+d*Mt+m*et,s[9]=h*B+u*tt+d*ht+m*k,s[13]=h*it+u*st+d*vt+m*$,s[2]=g*A+_*v+f*at+p*D,s[6]=g*C+_*w+f*Mt+p*et,s[10]=g*B+_*tt+f*ht+p*k,s[14]=g*it+_*st+f*vt+p*$,s[3]=y*A+x*v+M*at+L*D,s[7]=y*C+x*w+M*Mt+L*et,s[11]=y*B+x*tt+M*ht+L*k,s[15]=y*it+x*st+M*vt+L*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*m-n*c*m)+_*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],y=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,x=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,M=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,A=e*y+n*x+r*M+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=y*C,t[1]=(_*d*s-u*f*s-_*r*m+n*f*m+u*r*p-n*d*p)*C,t[2]=(a*f*s-_*c*s+_*r*l-n*f*l-a*r*p+n*c*p)*C,t[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*m-n*c*m)*C,t[4]=x*C,t[5]=(h*f*s-g*d*s+g*r*m-e*f*m-h*r*p+e*d*p)*C,t[6]=(g*c*s-o*f*s-g*r*l+e*f*l+o*r*p-e*c*p)*C,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*m+e*c*m)*C,t[8]=M*C,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*C,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*C,t[12]=L*C,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*f+e*u*f)*C,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*f-e*a*f)*C,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,f=o*u,p=a*u,y=c*l,x=c*h,M=c*u,L=n.x,A=n.y,C=n.z;return r[0]=(1-(_+p))*L,r[1]=(m+M)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(d+p))*A,r[6]=(f+y)*A,r[7]=0,r[8]=(g+x)*C,r[9]=(f-y)*C,r[10]=(1-(d+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=zr.set(r[0],r[1],r[2]).length(),o=zr.set(r[4],r[5],r[6]).length(),a=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],qn.copy(this);let l=1/s,h=1/o,u=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,e.setFromRotationMatrix(qn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Ri){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r),m,g;if(a===Ri)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===da)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Ri){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*l,m=(n+r)*h,g,_;if(a===Ri)g=(o+s)*u,_=-2*u;else if(a===da)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zr=new R,qn=new re,S0=new R(0,0,0),w0=new R(1,1,1),Xi=new R,Po=new R,Un=new R,ru=new re,su=new je,hn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var _a=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},T0=0,ou=new R,kr=new je,bi=new re,Io=new R,Ds=new R,A0=new R,R0=new je,au=new R(1,0,0),cu=new R(0,1,0),lu=new R(0,0,1),hu={type:"added"},C0={type:"removed"},Vr={type:"childadded",child:null},hc={type:"childremoved",child:null},$e=class i extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new hn,n=new je,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new re},normalMatrix:{value:new fe}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.multiply(kr),this}rotateOnWorldAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.premultiply(kr),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ds,Io,this.up):bi.lookAt(Io,Ds,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(bi),this.quaternion.premultiply(kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hu),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(C0),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hu),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,A0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,R0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};$e.DEFAULT_UP=new R(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new R,Ei=new R,uc=new R,Si=new R,Gr=new R,Wr=new R,uu=new R,fc=new R,dc=new R,pc=new R,mc=new Ce,gc=new Ce,_c=new Ce,$i=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Yn.subVectors(t,e),r.cross(Yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Yn.subVectors(r,e),Ei.subVectors(n,e),uc.subVectors(t,e);let o=Yn.dot(Yn),a=Yn.dot(Ei),c=Yn.dot(uc),l=Ei.dot(Ei),h=Ei.dot(uc),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return mc.setScalar(0),gc.setScalar(0),_c.setScalar(0),mc.fromBufferAttribute(t,e),gc.fromBufferAttribute(t,n),_c.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(mc,s.x),o.addScaledVector(gc,s.y),o.addScaledVector(_c,s.z),o}static isFrontFacing(t,e,n,r){return Yn.subVectors(n,e),Ei.subVectors(t,e),Yn.cross(Ei).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Yn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Gr.subVectors(r,n),Wr.subVectors(s,n),fc.subVectors(t,n);let c=Gr.dot(fc),l=Wr.dot(fc);if(c<=0&&l<=0)return e.copy(n);dc.subVectors(t,r);let h=Gr.dot(dc),u=Wr.dot(dc);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gr,o);pc.subVectors(t,s);let m=Gr.dot(pc),g=Wr.dot(pc);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Wr,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return uu.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(uu,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function yc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Se.workingColorSpace){if(t=xh(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=yc(o,s,t+1/3),this.g=yc(o,s,t),this.b=yc(o,s,t-1/3)}return Se.toWorkingColorSpace(this,r),this}setStyle(t,e=Je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=nc(t.r),this.g=nc(t.g),this.b=nc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Se.fromWorkingColorSpace(Mn.copy(this),t),Math.round(cn(Mn.r*255,0,255))*65536+Math.round(cn(Mn.g*255,0,255))*256+Math.round(cn(Mn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(Mn.copy(this),e);let n=Mn.r,r=Mn.g,s=Mn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=Je){Se.fromWorkingColorSpace(Mn.copy(this),t);let e=Mn.r,n=Mn.g,r=Mn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Lo);let n=Xs(qi.h,Lo.h,e),r=Xs(qi.s,Lo.s,e),s=Xs(qi.l,Lo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new zt;zt.NAMES=mf;var P0=0,Jn=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=ai,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Hc,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==_r&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=new R,Uo=new Dt,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xl,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xl&&(t.usage=this.usage),t}};var ya=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xa=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},I0=0,On=new re,xc=new $e,Xr=new R,Dn=new Ii,Ns=new Ii,an=new R,ye=class i extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pf(t)?xa:ya)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new fe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return xc.lookAt(t),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Dn.min,Ns.min),Dn.expandByPoint(an),an.addVectors(Dn.max,Ns.max),Dn.expandByPoint(an)):(Dn.expandByPoint(Ns.min),Dn.expandByPoint(Ns.max))}Dn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)an.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(an));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)an.fromBufferAttribute(a,l),c&&(Xr.fromBufferAttribute(t,l),an.add(Xr)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<n.count;B++)a[B]=new R,c[B]=new R;let l=new R,h=new R,u=new R,d=new Dt,m=new Dt,g=new Dt,_=new R,f=new R;function p(B,it,v){l.fromBufferAttribute(n,B),h.fromBufferAttribute(n,it),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,B),m.fromBufferAttribute(s,it),g.fromBufferAttribute(s,v),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(w),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(w),a[B].add(_),a[it].add(_),a[v].add(_),c[B].add(f),c[it].add(f),c[v].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let B=0,it=y.length;B<it;++B){let v=y[B],w=v.start,tt=v.count;for(let st=w,at=w+tt;st<at;st+=3)p(t.getX(st+0),t.getX(st+1),t.getX(st+2))}let x=new R,M=new R,L=new R,A=new R;function C(B){L.fromBufferAttribute(r,B),A.copy(L);let it=a[B];x.copy(it),x.sub(L.multiplyScalar(L.dot(it))).normalize(),M.crossVectors(A,it);let w=M.dot(c[B])<0?-1:1;o.setXYZW(B,x.x,x.y,x.z,w)}for(let B=0,it=y.length;B<it;++B){let v=y[B],w=v.start,tt=v.count;for(let st=w,at=w+tt;st<at;st+=3)C(t.getX(st+0)),C(t.getX(st+1)),C(t.getX(st+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new Pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new re,fr=new js,Do=new Li,du=new R,No=new R,Ho=new R,Fo=new R,Mc=new R,Oo=new R,pu=new R,Bo=new R,Tt=class extends $e{constructor(t=new ye,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Oo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Mc.fromBufferAttribute(u,t),o?Oo.addScaledVector(Mc,h):Oo.addScaledVector(Mc.sub(e),h))}e.add(Oo)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),fr.copy(t.ray).recast(t.near),!(Do.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Do,du)===null||fr.origin.distanceToSquared(du)>(t.far-t.near)**2))&&(fu.copy(s).invert(),fr.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let M=y,L=x;M<L;M+=3){let A=a.getX(M),C=a.getX(M+1),B=a.getX(M+2);r=zo(this,p,t,n,l,h,u,A,C,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=a.getX(f),x=a.getX(f+1),M=a.getX(f+2);r=zo(this,o,t,n,l,h,u,y,x,M),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let M=y,L=x;M<L;M+=3){let A=M,C=M+1,B=M+2;r=zo(this,p,t,n,l,h,u,A,C,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=f,x=f+1,M=f+2;r=zo(this,o,t,n,l,h,u,y,x,M),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}};function L0(i,t,e,n,r,s,o,a){let c;if(t.side===Tn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===An,a),c===null)return null;Bo.copy(a),Bo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Bo);return l<e.near||l>e.far?null:{distance:l,point:Bo.clone(),object:i}}function zo(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,No),i.getVertexPosition(c,Ho),i.getVertexPosition(l,Fo);let h=L0(i,t,e,n,No,Ho,Fo,pu);if(h){let u=new R;$i.getBarycoord(pu,No,Ho,Fo,u),r&&(h.uv=$i.getInterpolatedAttribute(r,a,c,l,u,new Dt)),s&&(h.uv1=$i.getInterpolatedAttribute(s,a,c,l,u,new Dt)),o&&(h.normal=$i.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};$i.getNormal(No,Ho,Fo,d.normal),h.face=d,h.barycoord=u}return h}var dn=class i extends ye{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(_,f,p,y,x,M,L,A,C,B,it){let v=M/C,w=L/B,tt=M/2,st=L/2,at=A/2,Mt=C+1,ht=B+1,vt=0,D=0,et=new R;for(let k=0;k<ht;k++){let $=k*w-st;for(let X=0;X<Mt;X++){let I=X*v-tt;et[_]=I*y,et[f]=$*x,et[p]=at,l.push(et.x,et.y,et.z),et[_]=0,et[f]=0,et[p]=A>0?1:-1,h.push(et.x,et.y,et.z),u.push(X/C),u.push(1-k/B),vt+=1}}for(let k=0;k<B;k++)for(let $=0;$<C;$++){let X=d+$+Mt*k,I=d+$+Mt*(k+1),S=d+($+1)+Mt*(k+1),T=d+($+1)+Mt*k;c.push(X,I,T),c.push(I,S,T),D+=6}a.addGroup(m,D,it),m+=D,d+=vt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function En(i){let t={};for(let e=0;e<i.length;e++){let n=hs(i[e]);for(let r in n)t[r]=n[r]}return t}function U0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var D0={clone:hs,merge:En},N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=U0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ma=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new R,mu=new Dt,gu=new Dt,ln=class extends Ma{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,mu,gu),e.subVectors(gu,mu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qr=-90,Yr=1,El=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ln(qr,Yr,t,e);r.layers=this.layers,this.add(r);let s=new ln(qr,Yr,t,e);s.layers=this.layers,this.add(s);let o=new ln(qr,Yr,t,e);o.layers=this.layers,this.add(o);let a=new ln(qr,Yr,t,e);a.layers=this.layers,this.add(a);let c=new ln(qr,Yr,t,e);c.layers=this.layers,this.add(c);let l=new ln(qr,Yr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},va=class extends Rn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sl=class extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new va(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dn(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Ki});s.uniforms.tEquirect.value=e;let o=new Tt(r,s),a=e.minFilter;return e.minFilter===xr&&(e.minFilter=Zn),new El(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},vc=new R,F0=new R,O0=new fe,Ti=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=vc.subVectors(n,e).cross(F0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||O0.getNormalMatrix(t),r=this.coplanarPoint(vc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},dr=new Li,ko=new R,to=class{constructor(t=new Ti,e=new Ti,n=new Ti,r=new Ti,s=new Ti,o=new Ti){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],y=r[13],x=r[14],M=r[15];if(n[0].setComponents(c-s,d-l,f-m,M-p).normalize(),n[1].setComponents(c+s,d+l,f+m,M+p).normalize(),n[2].setComponents(c+o,d+h,f+g,M+y).normalize(),n[3].setComponents(c-o,d-h,f-g,M-y).normalize(),n[4].setComponents(c-a,d-u,f-_,M-x).normalize(),e===Ri)n[5].setComponents(c+a,d+u,f+_,M+x).normalize();else if(e===da)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ko.x=r.normal.x>0?t.max.x:t.min.x,ko.y=r.normal.y>0?t.max.y:t.min.y,ko.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _f(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function B0(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Ui=class i extends ye{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let y=p*d-o;for(let x=0;x<l;x++){let M=x*u-s;g.push(M,-y,0),_.push(0,0,1),f.push(x/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,M=y+l*(p+1),L=y+1+l*(p+1),A=y+1+l*p;m.push(x,M,A),m.push(M,L,A)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,up=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Op=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$p=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ym=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ag=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:z0,alphahash_pars_fragment:k0,alphamap_fragment:V0,alphamap_pars_fragment:G0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:q0,aomap_pars_fragment:Y0,batching_pars_vertex:Z0,batching_vertex:$0,begin_vertex:K0,beginnormal_vertex:J0,bsdfs:Q0,iridescence_fragment:j0,bumpmap_pars_fragment:tp,clipping_planes_fragment:ep,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:ip,clipping_planes_vertex:rp,color_fragment:sp,color_pars_fragment:op,color_pars_vertex:ap,color_vertex:cp,common:lp,cube_uv_reflection_fragment:hp,defaultnormal_vertex:up,displacementmap_pars_vertex:fp,displacementmap_vertex:dp,emissivemap_fragment:pp,emissivemap_pars_fragment:mp,colorspace_fragment:gp,colorspace_pars_fragment:_p,envmap_fragment:yp,envmap_common_pars_fragment:xp,envmap_pars_fragment:Mp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Lp,envmap_vertex:bp,fog_vertex:Ep,fog_pars_vertex:Sp,fog_fragment:wp,fog_pars_fragment:Tp,gradientmap_pars_fragment:Ap,lightmap_pars_fragment:Rp,lights_lambert_fragment:Cp,lights_lambert_pars_fragment:Pp,lights_pars_begin:Ip,lights_toon_fragment:Up,lights_toon_pars_fragment:Dp,lights_phong_fragment:Np,lights_phong_pars_fragment:Hp,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:Bp,lights_fragment_maps:zp,lights_fragment_end:kp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:qp,map_pars_fragment:Yp,map_particle_fragment:Zp,map_particle_pars_fragment:$p,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:Qp,morphcolor_vertex:jp,morphnormal_vertex:tm,morphtarget_pars_vertex:em,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:rm,normal_pars_fragment:sm,normal_pars_vertex:om,normal_vertex:am,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:um,iridescence_pars_fragment:fm,opaque_fragment:dm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:gm,dithering_fragment:_m,dithering_pars_fragment:ym,roughnessmap_fragment:xm,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:bm,shadowmap_vertex:Em,shadowmask_pars_fragment:Sm,skinbase_vertex:wm,skinning_pars_vertex:Tm,skinning_vertex:Am,skinnormal_vertex:Rm,specularmap_fragment:Cm,specularmap_pars_fragment:Pm,tonemapping_fragment:Im,tonemapping_pars_fragment:Lm,transmission_fragment:Um,transmission_pars_fragment:Dm,uv_pars_fragment:Nm,uv_pars_vertex:Hm,uv_vertex:Fm,worldpos_vertex:Om,background_vert:Bm,background_frag:zm,backgroundCube_vert:km,backgroundCube_frag:Vm,cube_vert:Gm,cube_frag:Wm,depth_vert:Xm,depth_frag:qm,distanceRGBA_vert:Ym,distanceRGBA_frag:Zm,equirect_vert:$m,equirect_frag:Km,linedashed_vert:Jm,linedashed_frag:Qm,meshbasic_vert:jm,meshbasic_frag:tg,meshlambert_vert:eg,meshlambert_frag:ng,meshmatcap_vert:ig,meshmatcap_frag:rg,meshnormal_vert:sg,meshnormal_frag:og,meshphong_vert:ag,meshphong_frag:cg,meshphysical_vert:lg,meshphysical_frag:hg,meshtoon_vert:ug,meshtoon_frag:fg,points_vert:dg,points_frag:pg,shadow_vert:mg,shadow_frag:gg,sprite_vert:_g,sprite_frag:yg},Wt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},si={basic:{uniforms:En([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:En([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:En([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:En([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:En([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:En([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:En([Wt.points,Wt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:En([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:En([Wt.common,Wt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:En([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:En([Wt.sprite,Wt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:En([Wt.common,Wt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:En([Wt.lights,Wt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};si.physical={uniforms:En([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Vo={r:0,b:0,g:0},pr=new hn,xg=new re;function Mg(i,t,e,n,r,s,o){let a=new zt(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,M=g(y);M===null?p(a,c):M&&M.isColor&&(p(M,1),x=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,x){let M=g(x);M&&(M.isCubeTexture||M.mapping===Oa)?(h===void 0&&(h=new Tt(new dn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:hs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),pr.copy(x.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(pr)),h.material.toneMapped=Se.getTransfer(M.colorSpace)!==De,(u!==M||d!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Tt(new Ui(2,2),new Cn({name:"BackgroundMaterial",uniforms:hs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Se.getTransfer(M.colorSpace)!==De,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(Vo,gf(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:f}}function vg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(v,w,tt,st,at){let Mt=!1,ht=u(st,tt,w);s!==ht&&(s=ht,l(s.object)),Mt=m(v,st,tt,at),Mt&&g(v,st,tt,at),at!==null&&t.update(at,i.ELEMENT_ARRAY_BUFFER),(Mt||o)&&(o=!1,M(v,w,tt,st),at!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,w,tt){let st=tt.wireframe===!0,at=n[v.id];at===void 0&&(at={},n[v.id]=at);let Mt=at[w.id];Mt===void 0&&(Mt={},at[w.id]=Mt);let ht=Mt[st];return ht===void 0&&(ht=d(c()),Mt[st]=ht),ht}function d(v){let w=[],tt=[],st=[];for(let at=0;at<e;at++)w[at]=0,tt[at]=0,st[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:tt,attributeDivisors:st,object:v,attributes:{},index:null}}function m(v,w,tt,st){let at=s.attributes,Mt=w.attributes,ht=0,vt=tt.getAttributes();for(let D in vt)if(vt[D].location>=0){let k=at[D],$=Mt[D];if($===void 0&&(D==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),D==="instanceColor"&&v.instanceColor&&($=v.instanceColor)),k===void 0||k.attribute!==$||$&&k.data!==$.data)return!0;ht++}return s.attributesNum!==ht||s.index!==st}function g(v,w,tt,st){let at={},Mt=w.attributes,ht=0,vt=tt.getAttributes();for(let D in vt)if(vt[D].location>=0){let k=Mt[D];k===void 0&&(D==="instanceMatrix"&&v.instanceMatrix&&(k=v.instanceMatrix),D==="instanceColor"&&v.instanceColor&&(k=v.instanceColor));let $={};$.attribute=k,k&&k.data&&($.data=k.data),at[D]=$,ht++}s.attributes=at,s.attributesNum=ht,s.index=st}function _(){let v=s.newAttributes;for(let w=0,tt=v.length;w<tt;w++)v[w]=0}function f(v){p(v,0)}function p(v,w){let tt=s.newAttributes,st=s.enabledAttributes,at=s.attributeDivisors;tt[v]=1,st[v]===0&&(i.enableVertexAttribArray(v),st[v]=1),at[v]!==w&&(i.vertexAttribDivisor(v,w),at[v]=w)}function y(){let v=s.newAttributes,w=s.enabledAttributes;for(let tt=0,st=w.length;tt<st;tt++)w[tt]!==v[tt]&&(i.disableVertexAttribArray(tt),w[tt]=0)}function x(v,w,tt,st,at,Mt,ht){ht===!0?i.vertexAttribIPointer(v,w,tt,at,Mt):i.vertexAttribPointer(v,w,tt,st,at,Mt)}function M(v,w,tt,st){_();let at=st.attributes,Mt=tt.getAttributes(),ht=w.defaultAttributeValues;for(let vt in Mt){let D=Mt[vt];if(D.location>=0){let et=at[vt];if(et===void 0&&(vt==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),vt==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){let k=et.normalized,$=et.itemSize,X=t.get(et);if(X===void 0)continue;let I=X.buffer,S=X.type,T=X.bytesPerElement,O=S===i.INT||S===i.UNSIGNED_INT||et.gpuType===hh;if(et.isInterleavedBufferAttribute){let G=et.data,F=G.stride,N=et.offset;if(G.isInstancedInterleavedBuffer){for(let W=0;W<D.locationSize;W++)p(D.location+W,G.meshPerAttribute);v.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let W=0;W<D.locationSize;W++)f(D.location+W);i.bindBuffer(i.ARRAY_BUFFER,I);for(let W=0;W<D.locationSize;W++)x(D.location+W,$/D.locationSize,S,k,F*T,(N+$/D.locationSize*W)*T,O)}else{if(et.isInstancedBufferAttribute){for(let G=0;G<D.locationSize;G++)p(D.location+G,et.meshPerAttribute);v.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let G=0;G<D.locationSize;G++)f(D.location+G);i.bindBuffer(i.ARRAY_BUFFER,I);for(let G=0;G<D.locationSize;G++)x(D.location+G,$/D.locationSize,S,k,$*T,$/D.locationSize*G*T,O)}}else if(ht!==void 0){let k=ht[vt];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(D.location,k);break;case 3:i.vertexAttrib3fv(D.location,k);break;case 4:i.vertexAttrib4fv(D.location,k);break;default:i.vertexAttrib1fv(D.location,k)}}}}y()}function L(){B();for(let v in n){let w=n[v];for(let tt in w){let st=w[tt];for(let at in st)h(st[at].object),delete st[at];delete w[tt]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let w=n[v.id];for(let tt in w){let st=w[tt];for(let at in st)h(st[at].object),delete st[at];delete w[tt]}delete n[v.id]}function C(v){for(let w in n){let tt=n[w];if(tt[v.id]===void 0)continue;let st=tt[v.id];for(let at in st)h(st[at].object),delete st[at];delete tt[v.id]}}function B(){it(),o=!0,s!==r&&(s=r,l(s.object))}function it(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:it,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:f,disableUnusedAttributes:y}}function bg(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Eg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Kn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let B=C===fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ci&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==oi&&!B)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:L,maxSamples:A}}function Sg(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Ti,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{let y=s?0:n,x=y*4,M=p.clippingState||null;c.value=M,M=h(g,d,x,m);for(let L=0;L!==x;++L)M[L]=e[L];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,M=m;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(f,M),f[M+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function wg(i){let t=new WeakMap;function e(o,a){return a===Ks?o.mapping=os:a===Wc&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ks||a===Wc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Sl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var ba=class extends Ma{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,_u=[.125,.215,.35,.446,.526,.582],yr=20,bc=new ba,yu=new zt,Ec=null,Sc=0,wc=0,Tc=!1,gr=(1+Math.sqrt(5))/2,Zr=1/gr,xu=[new R(-gr,Zr,0),new R(gr,Zr,0),new R(-Zr,0,gr),new R(Zr,0,gr),new R(0,gr,-Zr),new R(0,gr,Zr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ea=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ec=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ec,Sc,wc),this._renderer.xr.enabled=Tc,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ec=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:fo,format:Kn,colorSpace:er,depthBuffer:!1},r=Mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tg(s)),this._blurMaterial=Ag(s,t,e)}return r}_compileMaterial(t){let e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,bc)}_sceneToCubeUV(t,e,n,r){let a=new ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yu),h.toneMapping=Ji,h.autoClear=!1;let m=new Ke({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Tt(new dn,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(yu),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Go(r,y*x,p>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===os||t.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Go(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,bc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xu[(r-s-1)%xu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Tt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yr-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):yr;f>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${yr}`);let p=[],y=0;for(let C=0;C<yr;++C){let B=C/_,it=Math.exp(-B*B/2);p.push(it),C===0?y+=it:C<f&&(y+=2*it)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[r],L=3*M*(r>x-ts?r-x+ts:0),A=4*(this._cubeSize-M);Go(e,L,A,3*M,2*M),c.setRenderTarget(e),c.render(u,bc)}};function Tg(i){let t=[],e=[],n=[],r=i,s=i-ts+1+_u.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-ts?c=_u[o-i+ts-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,y=new Float32Array(_*g*m),x=new Float32Array(f*g*m),M=new Float32Array(p*g*m);for(let A=0;A<m;A++){let C=A%3*2/3-1,B=A>2?0:-1,it=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];y.set(it,_*g*A),x.set(d,f*g*A);let v=[A,A,A,A,A,A];M.set(v,p*g*A)}let L=new ye;L.setAttribute("position",new Pe(y,_)),L.setAttribute("uv",new Pe(x,f)),L.setAttribute("faceIndex",new Pe(M,p)),t.push(L),r>ts&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mu(i,t,e){let n=new Pi(i,t,e);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ag(i,t,e){let n=new Float32Array(yr),r=new R(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function vu(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function bu(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ks||c===Wc,h=c===os||c===as;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ea(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Ea(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Cg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&ca("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Pg(i,t,e,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let x=0,M=y.length;x<M;x+=3){let L=y[x+0],A=y[x+1],C=y[x+2];d.push(L,A,A,C,C,L)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let L=x+0,A=x+1,C=x+2;d.push(L,A,A,C,C,L)}}else return;let f=new(pf(d)?xa:ya)(d,1);f.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ig(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function u(d,m,g,_){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y];for(let y=0;y<_.length;y++)e.update(p,n,_[y])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Lg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ug(i,t,e){let n=new WeakMap,r=new Ce;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let it=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",it)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*L*4*u),C=new ga(A,M,L,u);C.type=oi,C.needsUpdate=!0;let B=x*4;for(let v=0;v<u;v++){let w=f[v],tt=p[v],st=y[v],at=M*L*4*v;for(let Mt=0;Mt<w.count;Mt++){let ht=Mt*B;m===!0&&(r.fromBufferAttribute(w,Mt),A[at+ht+0]=r.x,A[at+ht+1]=r.y,A[at+ht+2]=r.z,A[at+ht+3]=0),g===!0&&(r.fromBufferAttribute(tt,Mt),A[at+ht+4]=r.x,A[at+ht+5]=r.y,A[at+ht+6]=r.z,A[at+ht+7]=0),_===!0&&(r.fromBufferAttribute(st,Mt),A[at+ht+8]=r.x,A[at+ht+9]=r.y,A[at+ht+10]=r.z,A[at+ht+11]=st.itemSize===4?r.w:1)}}d={count:u,texture:C,size:new Dt(M,L)},n.set(a,d),a.addEventListener("dispose",it)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Dg(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var Sa=class extends Rn{constructor(t,e,n,r,s,o,a,c,l,h=ns){if(h!==ns&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=vr),n===void 0&&h===ls&&(n=cs),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yf=new Rn,Eu=new Sa(1,1),xf=new ga,Mf=new bl,vf=new va,Su=[],wu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Su[r];if(s===void 0&&(s=new Float32Array(r),Su[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function za(i,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function Bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),en(e,n)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Au.set(n),i.uniformMatrix3fv(this.addr,!1,Au),en(e,n)}}function kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Tu.set(n),i.uniformMatrix4fv(this.addr,!1,Tu),en(e,n)}}function Vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function Kg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Eu.compareFunction=df,s=Eu):s=yf,e.setTexture2D(t||s,r)}function Jg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Mf,r)}function Qg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||vf,r)}function jg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||xf,r)}function t1(i){switch(i){case 5126:return Ng;case 35664:return Hg;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return kg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return Zg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return jg}}function e1(i,t){i.uniform1fv(this.addr,t)}function n1(i,t){let e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function i1(i,t){let e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function r1(i,t){let e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function s1(i,t){let e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function o1(i,t){let e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function a1(i,t){let e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function c1(i,t){i.uniform1iv(this.addr,t)}function l1(i,t){i.uniform2iv(this.addr,t)}function h1(i,t){i.uniform3iv(this.addr,t)}function u1(i,t){i.uniform4iv(this.addr,t)}function f1(i,t){i.uniform1uiv(this.addr,t)}function d1(i,t){i.uniform2uiv(this.addr,t)}function p1(i,t){i.uniform3uiv(this.addr,t)}function m1(i,t){i.uniform4uiv(this.addr,t)}function g1(i,t,e){let n=this.cache,r=t.length,s=za(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||yf,s[o])}function _1(i,t,e){let n=this.cache,r=t.length,s=za(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Mf,s[o])}function y1(i,t,e){let n=this.cache,r=t.length,s=za(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||vf,s[o])}function x1(i,t,e){let n=this.cache,r=t.length,s=za(e,r);tn(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||xf,s[o])}function M1(i){switch(i){case 5126:return e1;case 35664:return n1;case 35665:return i1;case 35666:return r1;case 35674:return s1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return c1;case 35667:case 35671:return l1;case 35668:case 35672:return h1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return d1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return x1}}var wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=t1(e.type)}},Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M1(e.type)}},Al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function Cu(i,t){i.seq.push(t),i.map[t.id]=t}function v1(i,t,e){let n=i.name,r=n.length;for(Ac.lastIndex=0;;){let s=Ac.exec(n),o=Ac.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Cu(e,l===void 0?new wl(a,i,t):new Tl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Al(a),Cu(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);v1(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Pu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var b1=37297,E1=0;function S1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function w1(i){let t=Se.getPrimaries(Se.workingColorSpace),e=Se.getPrimaries(i),n;switch(t===e?n="":t===fa&&e===ua?n="LinearDisplayP3ToLinearSRGB":t===ua&&e===fa&&(n="LinearSRGBToLinearDisplayP3"),i){case er:case Ba:return[n,"LinearTransferOETF"];case Je:case yh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Iu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+S1(i.getShaderSource(t),o)}else return r}function T1(i,t){let e=w1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function A1(i,t){let e;switch(t){case Fd:e="Linear";break;case Od:e="Reinhard";break;case Bd:e="Cineon";break;case uo:e="ACESFilmic";break;case kd:e="AgX";break;case Vd:e="Neutral";break;case zd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wo=new R;function R1(){Se.getLuminanceCoefficients(Wo);let i=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function P1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gs(i){return i!==""}function Lu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(L1,D1)}var U1=new Map;function D1(i,t){let e=ue[t];if(e===void 0){let n=U1.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}var N1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(N1,H1)}function H1(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ef?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_d?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(t="SHADOWMAP_TYPE_VSM"),t}function O1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case Oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B1(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===as&&(t="ENVMAP_MODE_REFRACTION"),t}function z1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ch:t="ENVMAP_BLENDING_MULTIPLY";break;case lh:t="ENVMAP_BLENDING_MIX";break;case Hd:t="ENVMAP_BLENDING_ADD";break}return t}function k1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function V1(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=F1(e),l=O1(e),h=B1(e),u=z1(e),d=k1(e),m=C1(e),g=P1(s),_=r.createProgram(),f,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(f=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?ue.tonemapping_pars_fragment:"",e.toneMapping!==Ji?A1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,T1("linearToOutputTexel",e.outputColorSpace),R1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Rl(o),o=Lu(o,e),o=Uu(o,e),a=Rl(a),a=Lu(a,e),a=Uu(a,e),o=Du(o),a=Du(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=y+f+o,M=y+p+a,L=Pu(r,r.VERTEX_SHADER,x),A=Pu(r,r.FRAGMENT_SHADER,M);r.attachShader(_,L),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(w){if(i.debug.checkShaderErrors){let tt=r.getProgramInfoLog(_).trim(),st=r.getShaderInfoLog(L).trim(),at=r.getShaderInfoLog(A).trim(),Mt=!0,ht=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,A);else{let vt=Iu(r,L,"vertex"),D=Iu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+tt+`
`+vt+`
`+D)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(st===""||at==="")&&(ht=!1);ht&&(w.diagnostics={runnable:Mt,programLog:tt,vertexShader:{log:st,prefix:f},fragmentShader:{log:at,prefix:p}})}r.deleteShader(L),r.deleteShader(A),B=new rs(r,_),it=I1(r,_)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let it;this.getAttributes=function(){return it===void 0&&C(this),it};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,b1)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}var G1=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pl(t),e.set(t,n)),n}},Pl=class{constructor(t){this.id=G1++,this.code=t,this.usedTimes=0}};function W1(i,t,e,n,r,s,o){let a=new _a,c=new Cl,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,w,tt,st,at){let Mt=st.fog,ht=at.geometry,vt=v.isMeshStandardMaterial?st.environment:null,D=(v.isMeshStandardMaterial?e:t).get(v.envMap||vt),et=D&&D.mapping===Oa?D.image.height:null,k=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let $=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,X=$!==void 0?$.length:0,I=0;ht.morphAttributes.position!==void 0&&(I=1),ht.morphAttributes.normal!==void 0&&(I=2),ht.morphAttributes.color!==void 0&&(I=3);let S,T,O,G;if(k){let Ve=si[k];S=Ve.vertexShader,T=Ve.fragmentShader}else S=v.vertexShader,T=v.fragmentShader,c.update(v),O=c.getVertexShaderID(v),G=c.getFragmentShaderID(v);let F=i.getRenderTarget(),N=at.isInstancedMesh===!0,W=at.isBatchedMesh===!0,Z=!!v.map,z=!!v.matcap,E=!!D,j=!!v.aoMap,q=!!v.lightMap,V=!!v.bumpMap,Y=!!v.normalMap,J=!!v.displacementMap,ot=!!v.emissiveMap,P=!!v.metalnessMap,b=!!v.roughnessMap,H=v.anisotropy>0,K=v.clearcoat>0,ct=v.dispersion>0,Q=v.iridescence>0,bt=v.sheen>0,_t=v.transmission>0,ft=H&&!!v.anisotropyMap,Lt=K&&!!v.clearcoatMap,dt=K&&!!v.clearcoatNormalMap,At=K&&!!v.clearcoatRoughnessMap,Bt=Q&&!!v.iridescenceMap,Ht=Q&&!!v.iridescenceThicknessMap,Rt=bt&&!!v.sheenColorMap,Ct=bt&&!!v.sheenRoughnessMap,kt=!!v.specularMap,jt=!!v.specularColorMap,rt=!!v.specularIntensityMap,Ut=_t&&!!v.transmissionMap,yt=_t&&!!v.thicknessMap,wt=!!v.gradientMap,Vt=!!v.alphaMap,Yt=v.alphaTest>0,he=!!v.alphaHash,Le=!!v.extensions,ke=Ji;v.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ke=i.toneMapping);let me={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:S,fragmentShader:T,defines:v.defines,customVertexShaderID:O,customFragmentShaderID:G,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:W,batchingColor:W&&at._colorsTexture!==null,instancing:N,instancingColor:N&&at.instanceColor!==null,instancingMorph:N&&at.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:er,alphaToCoverage:!!v.alphaToCoverage,map:Z,matcap:z,envMap:E,envMapMode:E&&D.mapping,envMapCubeUVHeight:et,aoMap:j,lightMap:q,bumpMap:V,normalMap:Y,displacementMap:m&&J,emissiveMap:ot,normalMapObjectSpace:Y&&v.normalMapType===qd,normalMapTangentSpace:Y&&v.normalMapType===_h,metalnessMap:P,roughnessMap:b,anisotropy:H,anisotropyMap:ft,clearcoat:K,clearcoatMap:Lt,clearcoatNormalMap:dt,clearcoatRoughnessMap:At,dispersion:ct,iridescence:Q,iridescenceMap:Bt,iridescenceThicknessMap:Ht,sheen:bt,sheenColorMap:Rt,sheenRoughnessMap:Ct,specularMap:kt,specularColorMap:jt,specularIntensityMap:rt,transmission:_t,transmissionMap:Ut,thicknessMap:yt,gradientMap:wt,opaque:v.transparent===!1&&v.blending===ai&&v.alphaToCoverage===!1,alphaMap:Vt,alphaTest:Yt,alphaHash:he,combine:v.combine,mapUv:Z&&f(v.map.channel),aoMapUv:j&&f(v.aoMap.channel),lightMapUv:q&&f(v.lightMap.channel),bumpMapUv:V&&f(v.bumpMap.channel),normalMapUv:Y&&f(v.normalMap.channel),displacementMapUv:J&&f(v.displacementMap.channel),emissiveMapUv:ot&&f(v.emissiveMap.channel),metalnessMapUv:P&&f(v.metalnessMap.channel),roughnessMapUv:b&&f(v.roughnessMap.channel),anisotropyMapUv:ft&&f(v.anisotropyMap.channel),clearcoatMapUv:Lt&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&f(v.sheenRoughnessMap.channel),specularMapUv:kt&&f(v.specularMap.channel),specularColorMapUv:jt&&f(v.specularColorMap.channel),specularIntensityMapUv:rt&&f(v.specularIntensityMap.channel),transmissionMapUv:Ut&&f(v.transmissionMap.channel),thicknessMapUv:yt&&f(v.thicknessMap.channel),alphaMapUv:Vt&&f(v.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Y||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ht.attributes.uv&&(Z||Vt),fog:!!Mt,useFog:v.fog===!0,fogExp2:!!Mt&&Mt.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:at.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:I,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&tt.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Z&&v.map.isVideoTexture===!0&&Se.getTransfer(v.map.colorSpace)===De,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Re,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Le&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&v.extensions.multiDraw===!0||W)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function y(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let tt in v.defines)w.push(tt),w.push(v.defines[tt]);return v.isRawShaderMaterial===!1&&(x(w,v),M(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),v.push(a.mask)}function L(v){let w=_[v.type],tt;if(w){let st=si[w];tt=D0.clone(st.uniforms)}else tt=v.uniforms;return tt}function A(v,w){let tt;for(let st=0,at=h.length;st<at;st++){let Mt=h[st];if(Mt.cacheKey===w){tt=Mt,++tt.usedTimes;break}}return tt===void 0&&(tt=new V1(i,w,v,s),h.push(tt)),tt}function C(v){if(--v.usedTimes===0){let w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function B(v){c.remove(v)}function it(){c.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:L,acquireProgram:A,releaseProgram:C,releaseShaderCache:B,programs:h,dispose:it}}function X1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function q1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fu(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,g,_,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||q1),n.length>1&&n.sort(d||Hu),r.length>1&&r.sort(d||Hu)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Y1(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Fu,i.set(n,[o])):r>=s.length?(o=new Fu,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function $1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var K1=0;function J1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Q1(i){let t=new Z1,e=$1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let r=new R,s=new re,o=new re;function a(l){let h=0,u=0,d=0;for(let it=0;it<9;it++)n.probe[it].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,y=0,x=0,M=0,L=0,A=0,C=0;l.sort(J1);for(let it=0,v=l.length;it<v;it++){let w=l[it],tt=w.color,st=w.intensity,at=w.distance,Mt=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=tt.r*st,u+=tt.g*st,d+=tt.b*st;else if(w.isLightProbe){for(let ht=0;ht<9;ht++)n.probe[ht].addScaledVector(w.sh.coefficients[ht],st);C++}else if(w.isDirectionalLight){let ht=t.get(w);if(ht.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let vt=w.shadow,D=e.get(w);D.shadowIntensity=vt.intensity,D.shadowBias=vt.bias,D.shadowNormalBias=vt.normalBias,D.shadowRadius=vt.radius,D.shadowMapSize=vt.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=Mt,n.directionalShadowMatrix[m]=w.shadow.matrix,y++}n.directional[m]=ht,m++}else if(w.isSpotLight){let ht=t.get(w);ht.position.setFromMatrixPosition(w.matrixWorld),ht.color.copy(tt).multiplyScalar(st),ht.distance=at,ht.coneCos=Math.cos(w.angle),ht.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),ht.decay=w.decay,n.spot[_]=ht;let vt=w.shadow;if(w.map&&(n.spotLightMap[L]=w.map,L++,vt.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[_]=vt.matrix,w.castShadow){let D=e.get(w);D.shadowIntensity=vt.intensity,D.shadowBias=vt.bias,D.shadowNormalBias=vt.normalBias,D.shadowRadius=vt.radius,D.shadowMapSize=vt.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=Mt,M++}_++}else if(w.isRectAreaLight){let ht=t.get(w);ht.color.copy(tt).multiplyScalar(st),ht.halfWidth.set(w.width*.5,0,0),ht.halfHeight.set(0,w.height*.5,0),n.rectArea[f]=ht,f++}else if(w.isPointLight){let ht=t.get(w);if(ht.color.copy(w.color).multiplyScalar(w.intensity),ht.distance=w.distance,ht.decay=w.decay,w.castShadow){let vt=w.shadow,D=e.get(w);D.shadowIntensity=vt.intensity,D.shadowBias=vt.bias,D.shadowNormalBias=vt.normalBias,D.shadowRadius=vt.radius,D.shadowMapSize=vt.mapSize,D.shadowCameraNear=vt.camera.near,D.shadowCameraFar=vt.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=Mt,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=ht,g++}else if(w.isHemisphereLight){let ht=t.get(w);ht.skyColor.copy(w.color).multiplyScalar(st),ht.groundColor.copy(w.groundColor).multiplyScalar(st),n.hemi[p]=ht,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let B=n.hash;(B.directionalLength!==m||B.pointLength!==g||B.spotLength!==_||B.rectAreaLength!==f||B.hemiLength!==p||B.numDirectionalShadows!==y||B.numPointShadows!==x||B.numSpotShadows!==M||B.numSpotMaps!==L||B.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,B.directionalLength=m,B.pointLength=g,B.spotLength=_,B.rectAreaLength=f,B.hemiLength=p,B.numDirectionalShadows=y,B.numPointShadows=x,B.numSpotShadows=M,B.numSpotMaps=L,B.numLightProbes=C,n.version=K1++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0,f=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let x=l[p];if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),u++}else if(x.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),m++}else if(x.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),o.identity(),s.copy(x.matrixWorld),s.premultiply(f),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function Ou(i){let t=new Q1(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function j1(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Ou(i),t.set(r,[a])):s>=o.length?(a=new Ou(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Il=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ll=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n_(i,t,e){let n=new to,r=new Dt,s=new Dt,o=new Ce,a=new Il({depthPacking:Xd}),c=new Ll,l={},h=e.maxTextureSize,u={[An]:Tn,[Tn]:An,[Re]:Re},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:t_,fragmentShader:e_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Tt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let p=this.type;this.render=function(A,C,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;let it=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(Ki),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let st=p!==wi&&this.type===wi,at=p===wi&&this.type!==wi;for(let Mt=0,ht=A.length;Mt<ht;Mt++){let vt=A[Mt],D=vt.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",vt,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let et=D.getFrameExtents();if(r.multiply(et),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/et.x),r.x=s.x*et.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/et.y),r.y=s.y*et.y,D.mapSize.y=s.y)),D.map===null||st===!0||at===!0){let $=this.type!==wi?{minFilter:fn,magFilter:fn}:{};D.map!==null&&D.map.dispose(),D.map=new Pi(r.x,r.y,$),D.map.texture.name=vt.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let k=D.getViewportCount();for(let $=0;$<k;$++){let X=D.getViewport($);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),tt.viewport(o),D.updateMatrices(vt,$),n=D.getFrustum(),M(C,B,D.camera,vt,this.type)}D.isPointLightShadow!==!0&&this.type===wi&&y(D,B),D.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(it,v,w)};function y(A,C){let B=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,B,d,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,B,m,_,null)}function x(A,C,B,it){let v=null,w=B.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)v=w;else if(v=B.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let tt=v.uuid,st=C.uuid,at=l[tt];at===void 0&&(at={},l[tt]=at);let Mt=at[st];Mt===void 0&&(Mt=v.clone(),at[st]=Mt,C.addEventListener("dispose",L)),v=Mt}if(v.visible=C.visible,v.wireframe=C.wireframe,it===wi?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,B.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let tt=i.properties.get(v);tt.light=B}return v}function M(A,C,B,it,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===wi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld);let st=t.update(A),at=A.material;if(Array.isArray(at)){let Mt=st.groups;for(let ht=0,vt=Mt.length;ht<vt;ht++){let D=Mt[ht],et=at[D.materialIndex];if(et&&et.visible){let k=x(A,et,it,v);A.onBeforeShadow(i,A,C,B,st,k,D),i.renderBufferDirect(B,null,st,k,A,D),A.onAfterShadow(i,A,C,B,st,k,D)}}}else if(at.visible){let Mt=x(A,at,it,v);A.onBeforeShadow(i,A,C,B,st,Mt,null),i.renderBufferDirect(B,null,st,Mt,A,null),A.onAfterShadow(i,A,C,B,st,Mt,null)}}let tt=A.children;for(let st=0,at=tt.length;st<at;st++)M(tt[st],C,B,it,v)}function L(A){A.target.removeEventListener("dispose",L);for(let B in l){let it=l[B],v=A.target.uuid;v in it&&(it[v].dispose(),delete it[v])}}}var i_={[Fc]:Oc,[Bc]:Vc,[zc]:Gc,[ss]:kc,[Oc]:Fc,[Vc]:Bc,[Gc]:zc,[kc]:ss};function r_(i){function t(){let rt=!1,Ut=new Ce,yt=null,wt=new Ce(0,0,0,0);return{setMask:function(Vt){yt!==Vt&&!rt&&(i.colorMask(Vt,Vt,Vt,Vt),yt=Vt)},setLocked:function(Vt){rt=Vt},setClear:function(Vt,Yt,he,Le,ke){ke===!0&&(Vt*=Le,Yt*=Le,he*=Le),Ut.set(Vt,Yt,he,Le),wt.equals(Ut)===!1&&(i.clearColor(Vt,Yt,he,Le),wt.copy(Ut))},reset:function(){rt=!1,yt=null,wt.set(-1,0,0,0)}}}function e(){let rt=!1,Ut=!1,yt=null,wt=null,Vt=null;return{setReversed:function(Yt){Ut=Yt},setTest:function(Yt){Yt?O(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(Yt){yt!==Yt&&!rt&&(i.depthMask(Yt),yt=Yt)},setFunc:function(Yt){if(Ut&&(Yt=i_[Yt]),wt!==Yt){switch(Yt){case Fc:i.depthFunc(i.NEVER);break;case Oc:i.depthFunc(i.ALWAYS);break;case Bc:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case zc:i.depthFunc(i.EQUAL);break;case kc:i.depthFunc(i.GEQUAL);break;case Vc:i.depthFunc(i.GREATER);break;case Gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Yt}},setLocked:function(Yt){rt=Yt},setClear:function(Yt){Vt!==Yt&&(i.clearDepth(Yt),Vt=Yt)},reset:function(){rt=!1,yt=null,wt=null,Vt=null}}}function n(){let rt=!1,Ut=null,yt=null,wt=null,Vt=null,Yt=null,he=null,Le=null,ke=null;return{setTest:function(me){rt||(me?O(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(me){Ut!==me&&!rt&&(i.stencilMask(me),Ut=me)},setFunc:function(me,Ve,wn){(yt!==me||wt!==Ve||Vt!==wn)&&(i.stencilFunc(me,Ve,wn),yt=me,wt=Ve,Vt=wn)},setOp:function(me,Ve,wn){(Yt!==me||he!==Ve||Le!==wn)&&(i.stencilOp(me,Ve,wn),Yt=me,he=Ve,Le=wn)},setLocked:function(me){rt=me},setClear:function(me){ke!==me&&(i.clearStencil(me),ke=me)},reset:function(){rt=!1,Ut=null,yt=null,wt=null,Vt=null,Yt=null,he=null,Le=null,ke=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,x=null,M=null,L=null,A=new zt(0,0,0),C=0,B=!1,it=null,v=null,w=null,tt=null,st=null,at=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Mt=!1,ht=0,vt=i.getParameter(i.VERSION);vt.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(vt)[1]),Mt=ht>=1):vt.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),Mt=ht>=2);let D=null,et={},k=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),X=new Ce().fromArray(k),I=new Ce().fromArray($);function S(rt,Ut,yt,wt){let Vt=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(rt,Yt),i.texParameteri(rt,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(rt,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<yt;he++)rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Ut+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return Yt}let T={};T[i.TEXTURE_2D]=S(i.TEXTURE_2D,i.TEXTURE_2D,1),T[i.TEXTURE_CUBE_MAP]=S(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[i.TEXTURE_2D_ARRAY]=S(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),T[i.TEXTURE_3D]=S(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),O(i.DEPTH_TEST),s.setFunc(ss),q(!1),V(Xh),O(i.CULL_FACE),E(Ki);function O(rt){l[rt]!==!0&&(i.enable(rt),l[rt]=!0)}function G(rt){l[rt]!==!1&&(i.disable(rt),l[rt]=!1)}function F(rt,Ut){return h[rt]!==Ut?(i.bindFramebuffer(rt,Ut),h[rt]=Ut,rt===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ut),rt===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function N(rt,Ut){let yt=d,wt=!1;if(rt){yt=u.get(Ut),yt===void 0&&(yt=[],u.set(Ut,yt));let Vt=rt.textures;if(yt.length!==Vt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,he=Vt.length;Yt<he;Yt++)yt[Yt]=i.COLOR_ATTACHMENT0+Yt;yt.length=Vt.length,wt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(yt)}function W(rt){return m!==rt?(i.useProgram(rt),m=rt,!0):!1}let Z={[_r]:i.FUNC_ADD,[xd]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};Z[vd]=i.MIN,Z[bd]=i.MAX;let z={[Ed]:i.ZERO,[Sd]:i.ONE,[wd]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[Id]:i.SRC_ALPHA_SATURATE,[Cd]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[Td]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[Pd]:i.ONE_MINUS_DST_COLOR,[Rd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Ud]:i.ONE_MINUS_CONSTANT_COLOR,[Dd]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function E(rt,Ut,yt,wt,Vt,Yt,he,Le,ke,me){if(rt===Ki){g===!0&&(G(i.BLEND),g=!1);return}if(g===!1&&(O(i.BLEND),g=!0),rt!==yd){if(rt!==_||me!==B){if((f!==_r||x!==_r)&&(i.blendEquation(i.FUNC_ADD),f=_r,x=_r),me)switch(rt){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qe:i.blendFunc(i.ONE,i.ONE);break;case qh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",rt);break}else switch(rt){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",rt);break}p=null,y=null,M=null,L=null,A.set(0,0,0),C=0,_=rt,B=me}return}Vt=Vt||Ut,Yt=Yt||yt,he=he||wt,(Ut!==f||Vt!==x)&&(i.blendEquationSeparate(Z[Ut],Z[Vt]),f=Ut,x=Vt),(yt!==p||wt!==y||Yt!==M||he!==L)&&(i.blendFuncSeparate(z[yt],z[wt],z[Yt],z[he]),p=yt,y=wt,M=Yt,L=he),(Le.equals(A)===!1||ke!==C)&&(i.blendColor(Le.r,Le.g,Le.b,ke),A.copy(Le),C=ke),_=rt,B=!1}function j(rt,Ut){rt.side===Re?G(i.CULL_FACE):O(i.CULL_FACE);let yt=rt.side===Tn;Ut&&(yt=!yt),q(yt),rt.blending===ai&&rt.transparent===!1?E(Ki):E(rt.blending,rt.blendEquation,rt.blendSrc,rt.blendDst,rt.blendEquationAlpha,rt.blendSrcAlpha,rt.blendDstAlpha,rt.blendColor,rt.blendAlpha,rt.premultipliedAlpha),s.setFunc(rt.depthFunc),s.setTest(rt.depthTest),s.setMask(rt.depthWrite),r.setMask(rt.colorWrite);let wt=rt.stencilWrite;o.setTest(wt),wt&&(o.setMask(rt.stencilWriteMask),o.setFunc(rt.stencilFunc,rt.stencilRef,rt.stencilFuncMask),o.setOp(rt.stencilFail,rt.stencilZFail,rt.stencilZPass)),J(rt.polygonOffset,rt.polygonOffsetFactor,rt.polygonOffsetUnits),rt.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(rt){it!==rt&&(rt?i.frontFace(i.CW):i.frontFace(i.CCW),it=rt)}function V(rt){rt!==md?(O(i.CULL_FACE),rt!==v&&(rt===Xh?i.cullFace(i.BACK):rt===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),v=rt}function Y(rt){rt!==w&&(Mt&&i.lineWidth(rt),w=rt)}function J(rt,Ut,yt){rt?(O(i.POLYGON_OFFSET_FILL),(tt!==Ut||st!==yt)&&(i.polygonOffset(Ut,yt),tt=Ut,st=yt)):G(i.POLYGON_OFFSET_FILL)}function ot(rt){rt?O(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function P(rt){rt===void 0&&(rt=i.TEXTURE0+at-1),D!==rt&&(i.activeTexture(rt),D=rt)}function b(rt,Ut,yt){yt===void 0&&(D===null?yt=i.TEXTURE0+at-1:yt=D);let wt=et[yt];wt===void 0&&(wt={type:void 0,texture:void 0},et[yt]=wt),(wt.type!==rt||wt.texture!==Ut)&&(D!==yt&&(i.activeTexture(yt),D=yt),i.bindTexture(rt,Ut||T[rt]),wt.type=rt,wt.texture=Ut)}function H(){let rt=et[D];rt!==void 0&&rt.type!==void 0&&(i.bindTexture(rt.type,null),rt.type=void 0,rt.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(rt){console.error("THREE.WebGLState:",rt)}}function Ht(rt){X.equals(rt)===!1&&(i.scissor(rt.x,rt.y,rt.z,rt.w),X.copy(rt))}function Rt(rt){I.equals(rt)===!1&&(i.viewport(rt.x,rt.y,rt.z,rt.w),I.copy(rt))}function Ct(rt,Ut){let yt=c.get(Ut);yt===void 0&&(yt=new WeakMap,c.set(Ut,yt));let wt=yt.get(rt);wt===void 0&&(wt=i.getUniformBlockIndex(Ut,rt.name),yt.set(rt,wt))}function kt(rt,Ut){let wt=c.get(Ut).get(rt);a.get(Ut)!==wt&&(i.uniformBlockBinding(Ut,wt,rt.__bindingPointIndex),a.set(Ut,wt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},D=null,et={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,x=null,M=null,L=null,A=new zt(0,0,0),C=0,B=!1,it=null,v=null,w=null,tt=null,st=null,X.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:O,disable:G,bindFramebuffer:F,drawBuffers:N,useProgram:W,setBlending:E,setMaterial:j,setFlipSided:q,setCullFace:V,setLineWidth:Y,setPolygonOffset:J,setScissorTest:ot,activeTexture:P,bindTexture:b,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:ct,texImage2D:At,texImage3D:Bt,updateUBOMapping:Ct,uniformBlockBinding:kt,texStorage2D:Lt,texStorage3D:dt,texSubImage2D:Q,texSubImage3D:bt,compressedTexSubImage2D:_t,compressedTexSubImage3D:ft,scissor:Ht,viewport:Rt,reset:jt}}function Bu(i,t,e,n){let r=s_(n);switch(e){case af:return i*t;case lf:return i*t;case hf:return i*t*2;case dh:return i*t/r.components*r.byteLength;case ph:return i*t/r.components*r.byteLength;case uf:return i*t*2/r.components*r.byteLength;case mh:return i*t*2/r.components*r.byteLength;case cf:return i*t*3/r.components*r.byteLength;case Kn:return i*t*4/r.components*r.byteLength;case gh:return i*t*4/r.components*r.byteLength;case ia:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yc:case $c:return Math.max(i,16)*Math.max(t,8)/4;case qc:case Zc:return Math.max(i,8)*Math.max(t,8)/2;case Kc:case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case aa:case dl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ff:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s_(i){switch(i){case Ci:case rf:return{byteLength:1,components:1};case Js:case sf:case fo:return{byteLength:2,components:1};case uh:case fh:return{byteLength:2,components:4};case vr:case hh:case oi:return{byteLength:4,components:1};case of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function o_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Dt,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return m?new OffscreenCanvas(P,b):pa("canvas")}function _(P,b,H){let K=1,ct=ot(P);if((ct.width>H||ct.height>H)&&(K=H/Math.max(ct.width,ct.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Q=Math.floor(K*ct.width),bt=Math.floor(K*ct.height);u===void 0&&(u=g(Q,bt));let _t=b?g(Q,bt):u;return _t.width=Q,_t.height=bt,_t.getContext("2d").drawImage(P,0,0,Q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Q+"x"+bt+")."),_t}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==fn&&P.minFilter!==Zn}function p(P){i.generateMipmap(P)}function y(P,b,H,K,ct=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=b;if(b===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),b===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),b===i.RGBA){let bt=ct?ha:Se.getTransfer(K);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=bt===De?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(P,b){let H;return P?b===null||b===vr||b===cs?H=i.DEPTH24_STENCIL8:b===oi?H=i.DEPTH32F_STENCIL8:b===Js&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vr||b===cs?H=i.DEPTH_COMPONENT24:b===oi?H=i.DEPTH_COMPONENT32F:b===Js&&(H=i.DEPTH_COMPONENT16),H}function M(P,b){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==Zn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function L(P){let b=P.target;b.removeEventListener("dispose",L),C(b),b.isVideoTexture&&h.delete(b)}function A(P){let b=P.target;b.removeEventListener("dispose",A),it(b)}function C(P){let b=n.get(P);if(b.__webglInit===void 0)return;let H=P.source,K=d.get(H);if(K){let ct=K[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&B(P),Object.keys(K).length===0&&d.delete(H)}n.remove(P)}function B(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let H=P.source,K=d.get(H);delete K[b.__cacheKey],o.memory.textures--}function it(P){let b=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let ct=0;ct<b.__webglFramebuffer[K].length;ct++)i.deleteFramebuffer(b.__webglFramebuffer[K][ct]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=P.textures;for(let K=0,ct=H.length;K<ct;K++){let Q=n.get(H[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(P)}let v=0;function w(){v=0}function tt(){let P=v;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),v+=1,P}function st(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function at(P,b){let H=n.get(P);if(P.isVideoTexture&&Y(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){let K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(H,P,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function Mt(P,b){let H=n.get(P);if(P.version>0&&H.__version!==P.version){I(H,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function ht(P,b){let H=n.get(P);if(P.version>0&&H.__version!==P.version){I(H,P,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function vt(P,b){let H=n.get(P);if(P.version>0&&H.__version!==P.version){S(H,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let D={[Mr]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Xc]:i.MIRRORED_REPEAT},et={[fn]:i.NEAREST,[Gd]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[xr]:i.LINEAR_MIPMAP_LINEAR},k={[Yd]:i.NEVER,[jd]:i.ALWAYS,[Zd]:i.LESS,[df]:i.LEQUAL,[$d]:i.EQUAL,[Qd]:i.GEQUAL,[Kd]:i.GREATER,[Jd]:i.NOTEQUAL};function $(P,b){if(b.type===oi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Zn||b.magFilter===ja||b.magFilter===So||b.magFilter===xr||b.minFilter===Zn||b.minFilter===ja||b.minFilter===So||b.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,D[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,D[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,D[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,et[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,et[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,k[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==So&&b.minFilter!==xr||b.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function X(P,b){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",L));let K=b.source,ct=d.get(K);ct===void 0&&(ct={},d.set(K,ct));let Q=st(b);if(Q!==P.__cacheKey){ct[Q]===void 0&&(ct[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ct[Q].usedTimes++;let bt=ct[P.__cacheKey];bt!==void 0&&(ct[P.__cacheKey].usedTimes--,bt.usedTimes===0&&B(b)),P.__cacheKey=Q,P.__webglTexture=ct[Q].texture}return H}function I(P,b,H){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);let ct=X(P,b),Q=b.source;e.bindTexture(K,P.__webglTexture,i.TEXTURE0+H);let bt=n.get(Q);if(Q.version!==bt.__version||ct===!0){e.activeTexture(i.TEXTURE0+H);let _t=Se.getPrimaries(Se.workingColorSpace),ft=b.colorSpace===Zi?null:Se.getPrimaries(b.colorSpace),Lt=b.colorSpace===Zi||_t===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let dt=_(b.image,!1,r.maxTextureSize);dt=J(b,dt);let At=s.convert(b.format,b.colorSpace),Bt=s.convert(b.type),Ht=y(b.internalFormat,At,Bt,b.colorSpace,b.isVideoTexture);$(K,b);let Rt,Ct=b.mipmaps,kt=b.isVideoTexture!==!0,jt=bt.__version===void 0||ct===!0,rt=Q.dataReady,Ut=M(b,dt);if(b.isDepthTexture)Ht=x(b.format===ls,b.type),jt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Ht,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Ht,dt.width,dt.height,0,At,Bt,null));else if(b.isDataTexture)if(Ct.length>0){kt&&jt&&e.texStorage2D(i.TEXTURE_2D,Ut,Ht,Ct[0].width,Ct[0].height);for(let yt=0,wt=Ct.length;yt<wt;yt++)Rt=Ct[yt],kt?rt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,At,Bt,Rt.data):e.texImage2D(i.TEXTURE_2D,yt,Ht,Rt.width,Rt.height,0,At,Bt,Rt.data);b.generateMipmaps=!1}else kt?(jt&&e.texStorage2D(i.TEXTURE_2D,Ut,Ht,dt.width,dt.height),rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,At,Bt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,dt.width,dt.height,0,At,Bt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Ht,Ct[0].width,Ct[0].height,dt.depth);for(let yt=0,wt=Ct.length;yt<wt;yt++)if(Rt=Ct[yt],b.format!==Kn)if(At!==null)if(kt){if(rt)if(b.layerUpdates.size>0){let Vt=Bu(Rt.width,Rt.height,b.format,b.type);for(let Yt of b.layerUpdates){let he=Rt.data.subarray(Yt*Vt/Rt.data.BYTES_PER_ELEMENT,(Yt+1)*Vt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,Yt,Rt.width,Rt.height,1,At,he,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,Rt.width,Rt.height,dt.depth,At,Rt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,Ht,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,Rt.width,Rt.height,dt.depth,At,Bt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,Ht,Rt.width,Rt.height,dt.depth,0,At,Bt,Rt.data)}else{kt&&jt&&e.texStorage2D(i.TEXTURE_2D,Ut,Ht,Ct[0].width,Ct[0].height);for(let yt=0,wt=Ct.length;yt<wt;yt++)Rt=Ct[yt],b.format!==Kn?At!==null?kt?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,Ht,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?rt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,At,Bt,Rt.data):e.texImage2D(i.TEXTURE_2D,yt,Ht,Rt.width,Rt.height,0,At,Bt,Rt.data)}else if(b.isDataArrayTexture)if(kt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Ht,dt.width,dt.height,dt.depth),rt)if(b.layerUpdates.size>0){let yt=Bu(dt.width,dt.height,b.format,b.type);for(let wt of b.layerUpdates){let Vt=dt.data.subarray(wt*yt/dt.data.BYTES_PER_ELEMENT,(wt+1)*yt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,dt.width,dt.height,1,At,Bt,Vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,At,Bt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,dt.width,dt.height,dt.depth,0,At,Bt,dt.data);else if(b.isData3DTexture)kt?(jt&&e.texStorage3D(i.TEXTURE_3D,Ut,Ht,dt.width,dt.height,dt.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,At,Bt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,dt.width,dt.height,dt.depth,0,At,Bt,dt.data);else if(b.isFramebufferTexture){if(jt)if(kt)e.texStorage2D(i.TEXTURE_2D,Ut,Ht,dt.width,dt.height);else{let yt=dt.width,wt=dt.height;for(let Vt=0;Vt<Ut;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,Ht,yt,wt,0,At,Bt,null),yt>>=1,wt>>=1}}else if(Ct.length>0){if(kt&&jt){let yt=ot(Ct[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Ht,yt.width,yt.height)}for(let yt=0,wt=Ct.length;yt<wt;yt++)Rt=Ct[yt],kt?rt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,At,Bt,Rt):e.texImage2D(i.TEXTURE_2D,yt,Ht,At,Bt,Rt);b.generateMipmaps=!1}else if(kt){if(jt){let yt=ot(dt);e.texStorage2D(i.TEXTURE_2D,Ut,Ht,yt.width,yt.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Bt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Ht,At,Bt,dt);f(b)&&p(K),bt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function S(P,b,H){if(b.image.length!==6)return;let K=X(P,b),ct=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let Q=n.get(ct);if(ct.version!==Q.__version||K===!0){e.activeTexture(i.TEXTURE0+H);let bt=Se.getPrimaries(Se.workingColorSpace),_t=b.colorSpace===Zi?null:Se.getPrimaries(b.colorSpace),ft=b.colorSpace===Zi||bt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,dt=b.image[0]&&b.image[0].isDataTexture,At=[];for(let wt=0;wt<6;wt++)!Lt&&!dt?At[wt]=_(b.image[wt],!0,r.maxCubemapSize):At[wt]=dt?b.image[wt].image:b.image[wt],At[wt]=J(b,At[wt]);let Bt=At[0],Ht=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type),Ct=y(b.internalFormat,Ht,Rt,b.colorSpace),kt=b.isVideoTexture!==!0,jt=Q.__version===void 0||K===!0,rt=ct.dataReady,Ut=M(b,Bt);$(i.TEXTURE_CUBE_MAP,b);let yt;if(Lt){kt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Ct,Bt.width,Bt.height);for(let wt=0;wt<6;wt++){yt=At[wt].mipmaps;for(let Vt=0;Vt<yt.length;Vt++){let Yt=yt[Vt];b.format!==Kn?Ht!==null?kt?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,0,0,Yt.width,Yt.height,Ht,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,Ct,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,0,0,Yt.width,Yt.height,Ht,Rt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,Ct,Yt.width,Yt.height,0,Ht,Rt,Yt.data)}}}else{if(yt=b.mipmaps,kt&&jt){yt.length>0&&Ut++;let wt=ot(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Ct,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(dt){kt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,At[wt].width,At[wt].height,Ht,Rt,At[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,At[wt].width,At[wt].height,0,Ht,Rt,At[wt].data);for(let Vt=0;Vt<yt.length;Vt++){let he=yt[Vt].image[wt].image;kt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,0,0,he.width,he.height,Ht,Rt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,Ct,he.width,he.height,0,Ht,Rt,he.data)}}else{kt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Ht,Rt,At[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,Ht,Rt,At[wt]);for(let Vt=0;Vt<yt.length;Vt++){let Yt=yt[Vt];kt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,0,0,Ht,Rt,Yt.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,Ct,Ht,Rt,Yt.image[wt])}}}f(b)&&p(i.TEXTURE_CUBE_MAP),Q.__version=ct.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function T(P,b,H,K,ct,Q){let bt=s.convert(H.format,H.colorSpace),_t=s.convert(H.type),ft=y(H.internalFormat,bt,_t,H.colorSpace);if(!n.get(b).__hasExternalTextures){let dt=Math.max(1,b.width>>Q),At=Math.max(1,b.height>>Q);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,Q,ft,dt,At,b.depth,0,bt,_t,null):e.texImage2D(ct,Q,ft,dt,At,0,bt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ct,n.get(H).__webglTexture,0,q(b)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ct,n.get(H).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function O(P,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let K=b.depthTexture,ct=K&&K.isDepthTexture?K.type:null,Q=x(b.stencilBuffer,ct),bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=q(b);V(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Q,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,P)}else{let K=b.textures;for(let ct=0;ct<K.length;ct++){let Q=K[ct],bt=s.convert(Q.format,Q.colorSpace),_t=s.convert(Q.type),ft=y(Q.internalFormat,bt,_t,Q.colorSpace),Lt=q(b);H&&V(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ft,b.width,b.height):V(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ft,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function G(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),at(b.depthTexture,0);let K=n.get(b.depthTexture).__webglTexture,ct=q(b);if(b.depthTexture.format===ns)V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===ls)V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function F(P){let b=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let K=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let ct=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",ct)};K.addEventListener("dispose",ct),b.__depthDisposeCallback=ct}b.__boundDepthTexture=K}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");G(b.__webglFramebuffer,P)}else if(H){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),O(b.__webglDepthbuffer[K],P,!1);else{let ct=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),O(b.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function N(P,b,H){let K=n.get(P);b!==void 0&&T(K.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&F(P)}function W(P){let b=P.texture,H=n.get(P),K=n.get(b);P.addEventListener("dispose",A);let ct=P.textures,Q=P.isWebGLCubeRenderTarget===!0,bt=ct.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),Q){H.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[_t]=[];for(let ft=0;ft<b.mipmaps.length;ft++)H.__webglFramebuffer[_t][ft]=i.createFramebuffer()}else H.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let _t=0;_t<b.mipmaps.length;_t++)H.__webglFramebuffer[_t]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(bt)for(let _t=0,ft=ct.length;_t<ft;_t++){let Lt=n.get(ct[_t]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&V(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){let ft=ct[_t];H.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[_t]);let Lt=s.convert(ft.format,ft.colorSpace),dt=s.convert(ft.type),At=y(ft.internalFormat,Lt,dt,ft.colorSpace,P.isXRRenderTarget===!0),Bt=q(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,At,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,H.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),O(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),$(i.TEXTURE_CUBE_MAP,b);for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)T(H.__webglFramebuffer[_t][ft],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ft);else T(H.__webglFramebuffer[_t],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);f(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let _t=0,ft=ct.length;_t<ft;_t++){let Lt=ct[_t],dt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),$(i.TEXTURE_2D,Lt),T(H.__webglFramebuffer,P,Lt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),f(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,K.__webglTexture),$(_t,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)T(H.__webglFramebuffer[ft],P,b,i.COLOR_ATTACHMENT0,_t,ft);else T(H.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,_t,0);f(b)&&p(_t),e.unbindTexture()}P.depthBuffer&&F(P)}function Z(P){let b=P.textures;for(let H=0,K=b.length;H<K;H++){let ct=b[H];if(f(ct)){let Q=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(ct).__webglTexture;e.bindTexture(Q,bt),p(Q),e.unbindTexture()}}}let z=[],E=[];function j(P){if(P.samples>0){if(V(P)===!1){let b=P.textures,H=P.width,K=P.height,ct=i.COLOR_BUFFER_BIT,Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(P),_t=b.length>1;if(_t)for(let ft=0;ft<b.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);let Lt=n.get(b[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,ct,i.NEAREST),c===!0&&(z.length=0,E.length=0,z.push(i.COLOR_ATTACHMENT0+ft),P.depthBuffer&&P.resolveDepthBuffer===!1&&(z.push(Q),E.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let ft=0;ft<b.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);let Lt=n.get(b[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function q(P){return Math.min(r.maxSamples,P.samples)}function V(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Y(P){let b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function J(P,b){let H=P.colorSpace,K=P.format,ct=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==er&&H!==Zi&&(Se.getTransfer(H)===De?(K!==Kn||ct!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=tt,this.resetTextureUnits=w,this.setTexture2D=at,this.setTexture2DArray=Mt,this.setTexture3D=ht,this.setTextureCube=vt,this.rebindTextures=N,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=T,this.useMultisampledRTT=V}function a_(i,t){function e(n,r=Zi){let s,o=Se.getTransfer(r);if(n===Ci)return i.UNSIGNED_BYTE;if(n===uh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rf)return i.BYTE;if(n===sf)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===hh)return i.INT;if(n===vr)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===fo)return i.HALF_FLOAT;if(n===af)return i.ALPHA;if(n===cf)return i.RGB;if(n===Kn)return i.RGBA;if(n===lf)return i.LUMINANCE;if(n===hf)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===dh)return i.RED;if(n===ph)return i.RED_INTEGER;if(n===uf)return i.RG;if(n===mh)return i.RG_INTEGER;if(n===gh)return i.RGBA_INTEGER;if(n===ia||n===ra||n===sa||n===oa)if(o===De)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qc||n===Yc||n===Zc||n===$c)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kc||n===Jc||n===Qc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Kc||n===Jc)return o===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qc)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jc||n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===cl||n===ll||n===hl||n===ul||n===fl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jc)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===dl||n===pl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===aa)return o===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===ml||n===gl||n===_l)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ul=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ie=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},c_={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Rn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:l_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends Qi{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=new Dl,f=e.getContextAttributes(),p=null,y=null,x=[],M=[],L=new Dt,A=null,C=new ln;C.layers.enable(1),C.viewport=new Ce;let B=new ln;B.layers.enable(2),B.viewport=new Ce;let it=[C,B],v=new Ul;v.layers.enable(1),v.layers.enable(2);let w=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let T=x[S];return T===void 0&&(T=new qs,x[S]=T),T.getTargetRaySpace()},this.getControllerGrip=function(S){let T=x[S];return T===void 0&&(T=new qs,x[S]=T),T.getGripSpace()},this.getHand=function(S){let T=x[S];return T===void 0&&(T=new qs,x[S]=T),T.getHandSpace()};function st(S){let T=M.indexOf(S.inputSource);if(T===-1)return;let O=x[T];O!==void 0&&(O.update(S.inputSource,S.frame,l||o),O.dispatchEvent({type:S.type,data:S.inputSource}))}function at(){r.removeEventListener("select",st),r.removeEventListener("selectstart",st),r.removeEventListener("selectend",st),r.removeEventListener("squeeze",st),r.removeEventListener("squeezestart",st),r.removeEventListener("squeezeend",st),r.removeEventListener("end",at),r.removeEventListener("inputsourceschange",Mt);for(let S=0;S<x.length;S++){let T=M[S];T!==null&&(M[S]=null,x[S].disconnect(T))}w=null,tt=null,_.reset(),t.setRenderTarget(p),m=null,d=null,u=null,r=null,y=null,I.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){s=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){a=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(S){l=S},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(S){if(r=S,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",st),r.addEventListener("selectstart",st),r.addEventListener("selectend",st),r.addEventListener("squeeze",st),r.addEventListener("squeezestart",st),r.addEventListener("squeezeend",st),r.addEventListener("end",at),r.addEventListener("inputsourceschange",Mt),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){let T={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,T),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Pi(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let T=null,O=null,G=null;f.depth&&(G=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,T=f.stencil?ls:ns,O=f.stencil?cs:vr);let F={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(F),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Pi(d.textureWidth,d.textureHeight,{format:Kn,type:Ci,depthTexture:new Sa(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,T),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),I.setContext(r),I.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Mt(S){for(let T=0;T<S.removed.length;T++){let O=S.removed[T],G=M.indexOf(O);G>=0&&(M[G]=null,x[G].disconnect(O))}for(let T=0;T<S.added.length;T++){let O=S.added[T],G=M.indexOf(O);if(G===-1){for(let N=0;N<x.length;N++)if(N>=M.length){M.push(O),G=N;break}else if(M[N]===null){M[N]=O,G=N;break}if(G===-1)break}let F=x[G];F&&F.connect(O)}}let ht=new R,vt=new R;function D(S,T,O){ht.setFromMatrixPosition(T.matrixWorld),vt.setFromMatrixPosition(O.matrixWorld);let G=ht.distanceTo(vt),F=T.projectionMatrix.elements,N=O.projectionMatrix.elements,W=F[14]/(F[10]-1),Z=F[14]/(F[10]+1),z=(F[9]+1)/F[5],E=(F[9]-1)/F[5],j=(F[8]-1)/F[0],q=(N[8]+1)/N[0],V=W*j,Y=W*q,J=G/(-j+q),ot=J*-j;if(T.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(ot),S.translateZ(J),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),F[10]===-1)S.projectionMatrix.copy(T.projectionMatrix),S.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let P=W+J,b=Z+J,H=V-ot,K=Y+(G-ot),ct=z*Z/b*P,Q=E*Z/b*P;S.projectionMatrix.makePerspective(H,K,ct,Q,P,b),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function et(S,T){T===null?S.matrixWorld.copy(S.matrix):S.matrixWorld.multiplyMatrices(T.matrixWorld,S.matrix),S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(r===null)return;let T=S.near,O=S.far;_.texture!==null&&(_.depthNear>0&&(T=_.depthNear),_.depthFar>0&&(O=_.depthFar)),v.near=B.near=C.near=T,v.far=B.far=C.far=O,(w!==v.near||tt!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,tt=v.far);let G=S.parent,F=v.cameras;et(v,G);for(let N=0;N<F.length;N++)et(F[N],G);F.length===2?D(v,C,B):v.projectionMatrix.copy(C.projectionMatrix),k(S,v,G)};function k(S,T,O){O===null?S.matrix.copy(T.matrixWorld):(S.matrix.copy(O.matrixWorld),S.matrix.invert(),S.matrix.multiply(T.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(T.projectionMatrix),S.projectionMatrixInverse.copy(T.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=Qs*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(S){c=S,d!==null&&(d.fixedFoveation=S),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=S)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let $=null;function X(S,T){if(h=T.getViewerPose(l||o),g=T,h!==null){let O=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let G=!1;O.length!==v.cameras.length&&(v.cameras.length=0,G=!0);for(let N=0;N<O.length;N++){let W=O[N],Z=null;if(m!==null)Z=m.getViewport(W);else{let E=u.getViewSubImage(d,W);Z=E.viewport,N===0&&(t.setRenderTargetTextures(y,E.colorTexture,d.ignoreDepthValues?void 0:E.depthStencilTexture),t.setRenderTarget(y))}let z=it[N];z===void 0&&(z=new ln,z.layers.enable(N),z.viewport=new Ce,it[N]=z),z.matrix.fromArray(W.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(W.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Z.x,Z.y,Z.width,Z.height),N===0&&(v.matrix.copy(z.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),G===!0&&v.cameras.push(z)}let F=r.enabledFeatures;if(F&&F.includes("depth-sensing")){let N=u.getDepthInformation(O[0]);N&&N.isValid&&N.texture&&_.init(t,N,r.renderState)}}for(let O=0;O<x.length;O++){let G=M[O],F=x[O];G!==null&&F!==void 0&&F.update(G,T,l||o)}$&&$(S,T),T.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:T}),g=null}let I=new _f;I.setAnimationLoop(X),this.setAnimationLoop=function(S){$=S},this.dispose=function(){}}},mr=new hn,u_=new re;function f_(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,gf(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,M)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,y,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Tn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Tn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y=t.get(p),x=y.envMap,M=y.envMapRotation;x&&(f.envMap.value=x,mr.copy(M),mr.x*=-1,mr.y*=-1,mr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),f.envMapRotation.value.setFromMatrix4(u_.makeRotationFromEuler(mr)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,y,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let y=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function d_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=r[y.id];M===void 0&&(g(y),M=h(y),r[y.id]=M,y.addEventListener("dispose",f));let L=x.program;n.updateUBOMapping(y,L);let A=t.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function h(y){let x=u();y.__bindingPointIndex=x;let M=i.createBuffer(),L=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=r[y.id],M=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,C=M.length;A<C;A++){let B=Array.isArray(M[A])?M[A]:[M[A]];for(let it=0,v=B.length;it<v;it++){let w=B[it];if(m(w,A,it,L)===!0){let tt=w.__offset,st=Array.isArray(w.value)?w.value:[w.value],at=0;for(let Mt=0;Mt<st.length;Mt++){let ht=st[Mt],vt=_(ht);typeof ht=="number"||typeof ht=="boolean"?(w.__data[0]=ht,i.bufferSubData(i.UNIFORM_BUFFER,tt+at,w.__data)):ht.isMatrix3?(w.__data[0]=ht.elements[0],w.__data[1]=ht.elements[1],w.__data[2]=ht.elements[2],w.__data[3]=0,w.__data[4]=ht.elements[3],w.__data[5]=ht.elements[4],w.__data[6]=ht.elements[5],w.__data[7]=0,w.__data[8]=ht.elements[6],w.__data[9]=ht.elements[7],w.__data[10]=ht.elements[8],w.__data[11]=0):(ht.toArray(w.__data,at),at+=vt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,tt,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,M,L){let A=y.value,C=x+"_"+M;if(L[C]===void 0)return typeof A=="number"||typeof A=="boolean"?L[C]=A:L[C]=A.clone(),!0;{let B=L[C];if(typeof A=="number"||typeof A=="boolean"){if(B!==A)return L[C]=A,!0}else if(B.equals(A)===!1)return B.copy(A),!0}return!1}function g(y){let x=y.uniforms,M=0,L=16;for(let C=0,B=x.length;C<B;C++){let it=Array.isArray(x[C])?x[C]:[x[C]];for(let v=0,w=it.length;v<w;v++){let tt=it[v],st=Array.isArray(tt.value)?tt.value:[tt.value];for(let at=0,Mt=st.length;at<Mt;at++){let ht=st[at],vt=_(ht),D=M%L,et=D%vt.boundary,k=D+et;M+=et,k!==0&&L-k<vt.storage&&(M+=L-k),tt.__data=new Float32Array(vt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=M,M+=vt.storage}}}let A=M%L;return A>0&&(M+=L-A),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){let x=y.target;x.removeEventListener("dispose",f);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var us=class{constructor(t={}){let{canvas:e=g0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Ji,this.toneMappingExposure=1;let x=this,M=!1,L=0,A=0,C=null,B=-1,it=null,v=new Ce,w=new Ce,tt=null,st=new zt(0),at=0,Mt=e.width,ht=e.height,vt=1,D=null,et=null,k=new Ce(0,0,Mt,ht),$=new Ce(0,0,Mt,ht),X=!1,I=new to,S=!1,T=!1,O=new re,G=new re,F=new R,N=new Ce,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function z(){return C===null?vt:1}let E=n;function j(U,lt){return e.getContext(U,lt)}try{let U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Yt,!1),E===null){let lt="webgl2";if(E=j(lt,U),E===null)throw j(lt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let q,V,Y,J,ot,P,b,H,K,ct,Q,bt,_t,ft,Lt,dt,At,Bt,Ht,Rt,Ct,kt,jt,rt;function Ut(){q=new Cg(E),q.init(),kt=new a_(E,q),V=new Eg(E,q,t,kt),Y=new r_(E),V.reverseDepthBuffer&&Y.buffers.depth.setReversed(!0),J=new Lg(E),ot=new X1,P=new o_(E,q,Y,ot,V,kt,J),b=new wg(x),H=new Rg(x),K=new B0(E),jt=new vg(E,K),ct=new Pg(E,K,J,jt),Q=new Dg(E,ct,K,J),Ht=new Ug(E,V,P),dt=new Sg(ot),bt=new W1(x,b,H,q,V,jt,dt),_t=new f_(x,ot),ft=new Y1,Lt=new j1(q),Bt=new Mg(x,b,H,Y,Q,d,c),At=new n_(x,Q,V),rt=new d_(E,J,V,Y),Rt=new bg(E,q,J),Ct=new Ig(E,q,J),J.programs=bt.programs,x.capabilities=V,x.extensions=q,x.properties=ot,x.renderLists=ft,x.shadowMap=At,x.state=Y,x.info=J}Ut();let yt=new Nl(x,E);this.xr=yt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let U=q.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=q.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(U){U!==void 0&&(vt=U,this.setSize(Mt,ht,!1))},this.getSize=function(U){return U.set(Mt,ht)},this.setSize=function(U,lt,mt=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=U,ht=lt,e.width=Math.floor(U*vt),e.height=Math.floor(lt*vt),mt===!0&&(e.style.width=U+"px",e.style.height=lt+"px"),this.setViewport(0,0,U,lt)},this.getDrawingBufferSize=function(U){return U.set(Mt*vt,ht*vt).floor()},this.setDrawingBufferSize=function(U,lt,mt){Mt=U,ht=lt,vt=mt,e.width=Math.floor(U*mt),e.height=Math.floor(lt*mt),this.setViewport(0,0,U,lt)},this.getCurrentViewport=function(U){return U.copy(v)},this.getViewport=function(U){return U.copy(k)},this.setViewport=function(U,lt,mt,gt){U.isVector4?k.set(U.x,U.y,U.z,U.w):k.set(U,lt,mt,gt),Y.viewport(v.copy(k).multiplyScalar(vt).round())},this.getScissor=function(U){return U.copy($)},this.setScissor=function(U,lt,mt,gt){U.isVector4?$.set(U.x,U.y,U.z,U.w):$.set(U,lt,mt,gt),Y.scissor(w.copy($).multiplyScalar(vt).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(U){Y.setScissorTest(X=U)},this.setOpaqueSort=function(U){D=U},this.setTransparentSort=function(U){et=U},this.getClearColor=function(U){return U.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(U=!0,lt=!0,mt=!0){let gt=0;if(U){let ut=!1;if(C!==null){let Nt=C.texture.format;ut=Nt===gh||Nt===mh||Nt===ph}if(ut){let Nt=C.texture.type,Xt=Nt===Ci||Nt===vr||Nt===Js||Nt===cs||Nt===uh||Nt===fh,$t=Bt.getClearColor(),Kt=Bt.getClearAlpha(),ne=$t.r,ee=$t.g,Qt=$t.b;Xt?(m[0]=ne,m[1]=ee,m[2]=Qt,m[3]=Kt,E.clearBufferuiv(E.COLOR,0,m)):(g[0]=ne,g[1]=ee,g[2]=Qt,g[3]=Kt,E.clearBufferiv(E.COLOR,0,g))}else gt|=E.COLOR_BUFFER_BIT}lt&&(gt|=E.DEPTH_BUFFER_BIT,E.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),mt&&(gt|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Yt,!1),ft.dispose(),Lt.dispose(),ot.dispose(),b.dispose(),H.dispose(),Q.dispose(),jt.dispose(),rt.dispose(),bt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",gi),yt.removeEventListener("sessionend",Mo),In.stop()};function wt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let U=J.autoReset,lt=At.enabled,mt=At.autoUpdate,gt=At.needsUpdate,ut=At.type;Ut(),J.autoReset=U,At.enabled=lt,At.autoUpdate=mt,At.needsUpdate=gt,At.type=ut}function Yt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function he(U){let lt=U.target;lt.removeEventListener("dispose",he),Le(lt)}function Le(U){ke(U),ot.remove(U)}function ke(U){let lt=ot.get(U).programs;lt!==void 0&&(lt.forEach(function(mt){bt.releaseProgram(mt)}),U.isShaderMaterial&&bt.releaseShaderCache(U))}this.renderBufferDirect=function(U,lt,mt,gt,ut,Nt){lt===null&&(lt=W);let Xt=ut.isMesh&&ut.matrixWorld.determinant()<0,$t=As(U,lt,mt,gt,ut);Y.setMaterial(gt,Xt);let Kt=mt.index,ne=1;if(gt.wireframe===!0){if(Kt=ct.getWireframeAttribute(mt),Kt===void 0)return;ne=2}let ee=mt.drawRange,Qt=mt.attributes.position,Me=ee.start*ne,ae=(ee.start+ee.count)*ne;Nt!==null&&(Me=Math.max(Me,Nt.start*ne),ae=Math.min(ae,(Nt.start+Nt.count)*ne)),Kt!==null?(Me=Math.max(Me,0),ae=Math.min(ae,Kt.count)):Qt!=null&&(Me=Math.max(Me,0),ae=Math.min(ae,Qt.count));let Ue=ae-Me;if(Ue<0||Ue===1/0)return;jt.setup(ut,gt,$t,mt,Kt);let gn,_e=Rt;if(Kt!==null&&(gn=K.get(Kt),_e=Ct,_e.setIndex(gn)),ut.isMesh)gt.wireframe===!0?(Y.setLineWidth(gt.wireframeLinewidth*z()),_e.setMode(E.LINES)):_e.setMode(E.TRIANGLES);else if(ut.isLine){let te=gt.linewidth;te===void 0&&(te=1),Y.setLineWidth(te*z()),ut.isLineSegments?_e.setMode(E.LINES):ut.isLineLoop?_e.setMode(E.LINE_LOOP):_e.setMode(E.LINE_STRIP)}else ut.isPoints?_e.setMode(E.POINTS):ut.isSprite&&_e.setMode(E.TRIANGLES);if(ut.isBatchedMesh)if(ut._multiDrawInstances!==null)_e.renderMultiDrawInstances(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount,ut._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))_e.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let te=ut._multiDrawStarts,Ye=ut._multiDrawCounts,ve=ut._multiDrawCount,Ln=Kt?K.get(Kt).bytesPerElement:1,Bi=ot.get(gt).currentProgram.getUniforms();for(let _n=0;_n<ve;_n++)Bi.setValue(E,"_gl_DrawID",_n),_e.render(te[_n]/Ln,Ye[_n])}else if(ut.isInstancedMesh)_e.renderInstances(Me,Ue,ut.count);else if(mt.isInstancedBufferGeometry){let te=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Ye=Math.min(mt.instanceCount,te);_e.renderInstances(Me,Ue,Ye)}else _e.render(Me,Ue)};function me(U,lt,mt){U.transparent===!0&&U.side===Re&&U.forceSinglePass===!1?(U.side=Tn,U.needsUpdate=!0,Lr(U,lt,mt),U.side=An,U.needsUpdate=!0,Lr(U,lt,mt),U.side=Re):Lr(U,lt,mt)}this.compile=function(U,lt,mt=null){mt===null&&(mt=U),f=Lt.get(mt),f.init(lt),y.push(f),mt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(lt.layers)&&(f.pushLight(ut),ut.castShadow&&f.pushShadow(ut))}),U!==mt&&U.traverseVisible(function(ut){ut.isLight&&ut.layers.test(lt.layers)&&(f.pushLight(ut),ut.castShadow&&f.pushShadow(ut))}),f.setupLights();let gt=new Set;return U.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let Nt=ut.material;if(Nt)if(Array.isArray(Nt))for(let Xt=0;Xt<Nt.length;Xt++){let $t=Nt[Xt];me($t,mt,ut),gt.add($t)}else me(Nt,mt,ut),gt.add(Nt)}),y.pop(),f=null,gt},this.compileAsync=function(U,lt,mt=null){let gt=this.compile(U,lt,mt);return new Promise(ut=>{function Nt(){if(gt.forEach(function(Xt){ot.get(Xt).currentProgram.isReady()&&gt.delete(Xt)}),gt.size===0){ut(U);return}setTimeout(Nt,10)}q.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Ve=null;function wn(U){Ve&&Ve(U)}function gi(){In.stop()}function Mo(){In.start()}let In=new _f;In.setAnimationLoop(wn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(U){Ve=U,yt.setAnimationLoop(U),U===null?In.stop():In.start()},yt.addEventListener("sessionstart",gi),yt.addEventListener("sessionend",Mo),this.render=function(U,lt){if(lt!==void 0&&lt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),lt.parent===null&&lt.matrixWorldAutoUpdate===!0&&lt.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(lt),lt=yt.getCamera()),U.isScene===!0&&U.onBeforeRender(x,U,lt,C),f=Lt.get(U,y.length),f.init(lt),y.push(f),G.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),I.setFromProjectionMatrix(G),T=this.localClippingEnabled,S=dt.init(this.clippingPlanes,T),_=ft.get(U,p.length),_.init(),p.push(_),yt.enabled===!0&&yt.isPresenting===!0){let Nt=x.xr.getDepthSensingMesh();Nt!==null&&sr(Nt,lt,-1/0,x.sortObjects)}sr(U,lt,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,et),Z=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Z&&Bt.addToRenderList(_,U),this.info.render.frame++,S===!0&&dt.beginShadows();let mt=f.state.shadowsArray;At.render(mt,U,lt),S===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let gt=_.opaque,ut=_.transmissive;if(f.setupLights(),lt.isArrayCamera){let Nt=lt.cameras;if(ut.length>0)for(let Xt=0,$t=Nt.length;Xt<$t;Xt++){let Kt=Nt[Xt];we(gt,ut,U,Kt)}Z&&Bt.render(U);for(let Xt=0,$t=Nt.length;Xt<$t;Xt++){let Kt=Nt[Xt];Ir(_,U,Kt,Kt.viewport)}}else ut.length>0&&we(gt,ut,U,lt),Z&&Bt.render(U),Ir(_,U,lt);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),U.isScene===!0&&U.onAfterRender(x,U,lt),jt.resetDefaultState(),B=-1,it=null,y.pop(),y.length>0?(f=y[y.length-1],S===!0&&dt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function sr(U,lt,mt,gt){if(U.visible===!1)return;if(U.layers.test(lt.layers)){if(U.isGroup)mt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(lt);else if(U.isLight)f.pushLight(U),U.castShadow&&f.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||I.intersectsSprite(U)){gt&&N.setFromMatrixPosition(U.matrixWorld).applyMatrix4(G);let Xt=Q.update(U),$t=U.material;$t.visible&&_.push(U,Xt,$t,mt,N.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||I.intersectsObject(U))){let Xt=Q.update(U),$t=U.material;if(gt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),N.copy(U.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),N.copy(Xt.boundingSphere.center)),N.applyMatrix4(U.matrixWorld).applyMatrix4(G)),Array.isArray($t)){let Kt=Xt.groups;for(let ne=0,ee=Kt.length;ne<ee;ne++){let Qt=Kt[ne],Me=$t[Qt.materialIndex];Me&&Me.visible&&_.push(U,Xt,Me,mt,N.z,Qt)}}else $t.visible&&_.push(U,Xt,$t,mt,N.z,null)}}let Nt=U.children;for(let Xt=0,$t=Nt.length;Xt<$t;Xt++)sr(Nt[Xt],lt,mt,gt)}function Ir(U,lt,mt,gt){let ut=U.opaque,Nt=U.transmissive,Xt=U.transparent;f.setupLightsView(mt),S===!0&&dt.setGlobalState(x.clippingPlanes,mt),gt&&Y.viewport(v.copy(gt)),ut.length>0&&_i(ut,lt,mt),Nt.length>0&&_i(Nt,lt,mt),Xt.length>0&&_i(Xt,lt,mt),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function we(U,lt,mt,gt){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[gt.id]===void 0&&(f.state.transmissionRenderTarget[gt.id]=new Pi(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?fo:Ci,minFilter:xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));let Nt=f.state.transmissionRenderTarget[gt.id],Xt=gt.viewport||v;Nt.setSize(Xt.z,Xt.w);let $t=x.getRenderTarget();x.setRenderTarget(Nt),x.getClearColor(st),at=x.getClearAlpha(),at<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Bt.render(mt);let Kt=x.toneMapping;x.toneMapping=Ji;let ne=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),f.setupLightsView(gt),S===!0&&dt.setGlobalState(x.clippingPlanes,gt),_i(U,mt,gt),P.updateMultisampleRenderTarget(Nt),P.updateRenderTargetMipmap(Nt),q.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Qt=0,Me=lt.length;Qt<Me;Qt++){let ae=lt[Qt],Ue=ae.object,gn=ae.geometry,_e=ae.material,te=ae.group;if(_e.side===Re&&Ue.layers.test(gt.layers)){let Ye=_e.side;_e.side=Tn,_e.needsUpdate=!0,Wn(Ue,mt,gt,gn,_e,te),_e.side=Ye,_e.needsUpdate=!0,ee=!0}}ee===!0&&(P.updateMultisampleRenderTarget(Nt),P.updateRenderTargetMipmap(Nt))}x.setRenderTarget($t),x.setClearColor(st,at),ne!==void 0&&(gt.viewport=ne),x.toneMapping=Kt}function _i(U,lt,mt){let gt=lt.isScene===!0?lt.overrideMaterial:null;for(let ut=0,Nt=U.length;ut<Nt;ut++){let Xt=U[ut],$t=Xt.object,Kt=Xt.geometry,ne=gt===null?Xt.material:gt,ee=Xt.group;$t.layers.test(mt.layers)&&Wn($t,lt,mt,Kt,ne,ee)}}function Wn(U,lt,mt,gt,ut,Nt){U.onBeforeRender(x,lt,mt,gt,ut,Nt),U.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ut.onBeforeRender(x,lt,mt,gt,U,Nt),ut.transparent===!0&&ut.side===Re&&ut.forceSinglePass===!1?(ut.side=Tn,ut.needsUpdate=!0,x.renderBufferDirect(mt,lt,gt,ut,U,Nt),ut.side=An,ut.needsUpdate=!0,x.renderBufferDirect(mt,lt,gt,ut,U,Nt),ut.side=Re):x.renderBufferDirect(mt,lt,gt,ut,U,Nt),U.onAfterRender(x,lt,mt,gt,ut,Nt)}function Lr(U,lt,mt){lt.isScene!==!0&&(lt=W);let gt=ot.get(U),ut=f.state.lights,Nt=f.state.shadowsArray,Xt=ut.state.version,$t=bt.getParameters(U,ut.state,Nt,lt,mt),Kt=bt.getProgramCacheKey($t),ne=gt.programs;gt.environment=U.isMeshStandardMaterial?lt.environment:null,gt.fog=lt.fog,gt.envMap=(U.isMeshStandardMaterial?H:b).get(U.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&U.envMap===null?lt.environmentRotation:U.envMapRotation,ne===void 0&&(U.addEventListener("dispose",he),ne=new Map,gt.programs=ne);let ee=ne.get(Kt);if(ee!==void 0){if(gt.currentProgram===ee&&gt.lightsStateVersion===Xt)return bo(U,$t),ee}else $t.uniforms=bt.getUniforms(U),U.onBeforeCompile($t,x),ee=bt.acquireProgram($t,Kt),ne.set(Kt,ee),gt.uniforms=$t.uniforms;let Qt=gt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Qt.clippingPlanes=dt.uniform),bo(U,$t),gt.needsLights=Ur(U),gt.lightsStateVersion=Xt,gt.needsLights&&(Qt.ambientLightColor.value=ut.state.ambient,Qt.lightProbe.value=ut.state.probe,Qt.directionalLights.value=ut.state.directional,Qt.directionalLightShadows.value=ut.state.directionalShadow,Qt.spotLights.value=ut.state.spot,Qt.spotLightShadows.value=ut.state.spotShadow,Qt.rectAreaLights.value=ut.state.rectArea,Qt.ltc_1.value=ut.state.rectAreaLTC1,Qt.ltc_2.value=ut.state.rectAreaLTC2,Qt.pointLights.value=ut.state.point,Qt.pointLightShadows.value=ut.state.pointShadow,Qt.hemisphereLights.value=ut.state.hemi,Qt.directionalShadowMap.value=ut.state.directionalShadowMap,Qt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Qt.spotShadowMap.value=ut.state.spotShadowMap,Qt.spotLightMatrix.value=ut.state.spotLightMatrix,Qt.spotLightMap.value=ut.state.spotLightMap,Qt.pointShadowMap.value=ut.state.pointShadowMap,Qt.pointShadowMatrix.value=ut.state.pointShadowMatrix),gt.currentProgram=ee,gt.uniformsList=null,ee}function vo(U){if(U.uniformsList===null){let lt=U.currentProgram.getUniforms();U.uniformsList=rs.seqWithValue(lt.seq,U.uniforms)}return U.uniformsList}function bo(U,lt){let mt=ot.get(U);mt.outputColorSpace=lt.outputColorSpace,mt.batching=lt.batching,mt.batchingColor=lt.batchingColor,mt.instancing=lt.instancing,mt.instancingColor=lt.instancingColor,mt.instancingMorph=lt.instancingMorph,mt.skinning=lt.skinning,mt.morphTargets=lt.morphTargets,mt.morphNormals=lt.morphNormals,mt.morphColors=lt.morphColors,mt.morphTargetsCount=lt.morphTargetsCount,mt.numClippingPlanes=lt.numClippingPlanes,mt.numIntersection=lt.numClipIntersection,mt.vertexAlphas=lt.vertexAlphas,mt.vertexTangents=lt.vertexTangents,mt.toneMapping=lt.toneMapping}function As(U,lt,mt,gt,ut){lt.isScene!==!0&&(lt=W),P.resetTextureUnits();let Nt=lt.fog,Xt=gt.isMeshStandardMaterial?lt.environment:null,$t=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:er,Kt=(gt.isMeshStandardMaterial?H:b).get(gt.envMap||Xt),ne=gt.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,ee=!!mt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),Qt=!!mt.morphAttributes.position,Me=!!mt.morphAttributes.normal,ae=!!mt.morphAttributes.color,Ue=Ji;gt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ue=x.toneMapping);let gn=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,_e=gn!==void 0?gn.length:0,te=ot.get(gt),Ye=f.state.lights;if(S===!0&&(T===!0||U!==it)){let yn=U===it&&gt.id===B;dt.setState(gt,U,yn)}let ve=!1;gt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ye.state.version||te.outputColorSpace!==$t||ut.isBatchedMesh&&te.batching===!1||!ut.isBatchedMesh&&te.batching===!0||ut.isBatchedMesh&&te.batchingColor===!0&&ut.colorTexture===null||ut.isBatchedMesh&&te.batchingColor===!1&&ut.colorTexture!==null||ut.isInstancedMesh&&te.instancing===!1||!ut.isInstancedMesh&&te.instancing===!0||ut.isSkinnedMesh&&te.skinning===!1||!ut.isSkinnedMesh&&te.skinning===!0||ut.isInstancedMesh&&te.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&te.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&te.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&te.instancingMorph===!1&&ut.morphTexture!==null||te.envMap!==Kt||gt.fog===!0&&te.fog!==Nt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==dt.numPlanes||te.numIntersection!==dt.numIntersection)||te.vertexAlphas!==ne||te.vertexTangents!==ee||te.morphTargets!==Qt||te.morphNormals!==Me||te.morphColors!==ae||te.toneMapping!==Ue||te.morphTargetsCount!==_e)&&(ve=!0):(ve=!0,te.__version=gt.version);let Ln=te.currentProgram;ve===!0&&(Ln=Lr(gt,lt,ut));let Bi=!1,_n=!1,Rs=!1,Ne=Ln.getUniforms(),ri=te.uniforms;if(Y.useProgram(Ln.program)&&(Bi=!0,_n=!0,Rs=!0),gt.id!==B&&(B=gt.id,_n=!0),Bi||it!==U){V.reverseDepthBuffer?(O.copy(U.projectionMatrix),y0(O),x0(O),Ne.setValue(E,"projectionMatrix",O)):Ne.setValue(E,"projectionMatrix",U.projectionMatrix),Ne.setValue(E,"viewMatrix",U.matrixWorldInverse);let yn=Ne.map.cameraPosition;yn!==void 0&&yn.setValue(E,F.setFromMatrixPosition(U.matrixWorld)),V.logarithmicDepthBuffer&&Ne.setValue(E,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&Ne.setValue(E,"isOrthographic",U.isOrthographicCamera===!0),it!==U&&(it=U,_n=!0,Rs=!0)}if(ut.isSkinnedMesh){Ne.setOptional(E,ut,"bindMatrix"),Ne.setOptional(E,ut,"bindMatrixInverse");let yn=ut.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ne.setValue(E,"boneTexture",yn.boneTexture,P))}ut.isBatchedMesh&&(Ne.setOptional(E,ut,"batchingTexture"),Ne.setValue(E,"batchingTexture",ut._matricesTexture,P),Ne.setOptional(E,ut,"batchingIdTexture"),Ne.setValue(E,"batchingIdTexture",ut._indirectTexture,P),Ne.setOptional(E,ut,"batchingColorTexture"),ut._colorsTexture!==null&&Ne.setValue(E,"batchingColorTexture",ut._colorsTexture,P));let zi=mt.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&Ht.update(ut,mt,Ln),(_n||te.receiveShadow!==ut.receiveShadow)&&(te.receiveShadow=ut.receiveShadow,Ne.setValue(E,"receiveShadow",ut.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(ri.envMap.value=Kt,ri.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&lt.environment!==null&&(ri.envMapIntensity.value=lt.environmentIntensity),_n&&(Ne.setValue(E,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&yi(ri,Rs),Nt&&gt.fog===!0&&_t.refreshFogUniforms(ri,Nt),_t.refreshMaterialUniforms(ri,gt,vt,ht,f.state.transmissionRenderTarget[U.id]),rs.upload(E,vo(te),ri,P)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(rs.upload(E,vo(te),ri,P),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&Ne.setValue(E,"center",ut.center),Ne.setValue(E,"modelViewMatrix",ut.modelViewMatrix),Ne.setValue(E,"normalMatrix",ut.normalMatrix),Ne.setValue(E,"modelMatrix",ut.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){let yn=gt.uniformsGroups;for(let ki=0,He=yn.length;ki<He;ki++){let or=yn[ki];rt.update(or,Ln),rt.bind(or,Ln)}}return Ln}function yi(U,lt){U.ambientLightColor.needsUpdate=lt,U.lightProbe.needsUpdate=lt,U.directionalLights.needsUpdate=lt,U.directionalLightShadows.needsUpdate=lt,U.pointLights.needsUpdate=lt,U.pointLightShadows.needsUpdate=lt,U.spotLights.needsUpdate=lt,U.spotLightShadows.needsUpdate=lt,U.rectAreaLights.needsUpdate=lt,U.hemisphereLights.needsUpdate=lt}function Ur(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(U,lt,mt){ot.get(U.texture).__webglTexture=lt,ot.get(U.depthTexture).__webglTexture=mt;let gt=ot.get(U);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=mt===void 0,gt.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,lt){let mt=ot.get(U);mt.__webglFramebuffer=lt,mt.__useDefaultFramebuffer=lt===void 0},this.setRenderTarget=function(U,lt=0,mt=0){C=U,L=lt,A=mt;let gt=!0,ut=null,Nt=!1,Xt=!1;if(U){let Kt=ot.get(U);if(Kt.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(E.FRAMEBUFFER,null),gt=!1;else if(Kt.__webglFramebuffer===void 0)P.setupRenderTarget(U);else if(Kt.__hasExternalTextures)P.rebindTextures(U,ot.get(U.texture).__webglTexture,ot.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Qt=U.depthTexture;if(Kt.__boundDepthTexture!==Qt){if(Qt!==null&&ot.has(Qt)&&(U.width!==Qt.image.width||U.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(U)}}let ne=U.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Xt=!0);let ee=ot.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ee[lt])?ut=ee[lt][mt]:ut=ee[lt],Nt=!0):U.samples>0&&P.useMultisampledRTT(U)===!1?ut=ot.get(U).__webglMultisampledFramebuffer:Array.isArray(ee)?ut=ee[mt]:ut=ee,v.copy(U.viewport),w.copy(U.scissor),tt=U.scissorTest}else v.copy(k).multiplyScalar(vt).floor(),w.copy($).multiplyScalar(vt).floor(),tt=X;if(Y.bindFramebuffer(E.FRAMEBUFFER,ut)&&gt&&Y.drawBuffers(U,ut),Y.viewport(v),Y.scissor(w),Y.setScissorTest(tt),Nt){let Kt=ot.get(U.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Kt.__webglTexture,mt)}else if(Xt){let Kt=ot.get(U.texture),ne=lt||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Kt.__webglTexture,mt||0,ne)}B=-1},this.readRenderTargetPixels=function(U,lt,mt,gt,ut,Nt,Xt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=ot.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xt!==void 0&&($t=$t[Xt]),$t){Y.bindFramebuffer(E.FRAMEBUFFER,$t);try{let Kt=U.texture,ne=Kt.format,ee=Kt.type;if(!V.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}lt>=0&&lt<=U.width-gt&&mt>=0&&mt<=U.height-ut&&E.readPixels(lt,mt,gt,ut,kt.convert(ne),kt.convert(ee),Nt)}finally{let Kt=C!==null?ot.get(C).__webglFramebuffer:null;Y.bindFramebuffer(E.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(U,lt,mt,gt,ut,Nt,Xt){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=ot.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xt!==void 0&&($t=$t[Xt]),$t){let Kt=U.texture,ne=Kt.format,ee=Kt.type;if(!V.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(lt>=0&&lt<=U.width-gt&&mt>=0&&mt<=U.height-ut){Y.bindFramebuffer(E.FRAMEBUFFER,$t);let Qt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Qt),E.bufferData(E.PIXEL_PACK_BUFFER,Nt.byteLength,E.STREAM_READ),E.readPixels(lt,mt,gt,ut,kt.convert(ne),kt.convert(ee),0);let Me=C!==null?ot.get(C).__webglFramebuffer:null;Y.bindFramebuffer(E.FRAMEBUFFER,Me);let ae=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await _0(E,ae,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Qt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Nt),E.deleteBuffer(Qt),E.deleteSync(ae),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,lt=null,mt=0){U.isTexture!==!0&&(ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),lt=arguments[0]||null,U=arguments[1]);let gt=Math.pow(2,-mt),ut=Math.floor(U.image.width*gt),Nt=Math.floor(U.image.height*gt),Xt=lt!==null?lt.x:0,$t=lt!==null?lt.y:0;P.setTexture2D(U,0),E.copyTexSubImage2D(E.TEXTURE_2D,mt,0,0,Xt,$t,ut,Nt),Y.unbindTexture()},this.copyTextureToTexture=function(U,lt,mt=null,gt=null,ut=0){U.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture function signature has changed."),gt=arguments[0]||null,U=arguments[1],lt=arguments[2],ut=arguments[3]||0,mt=null);let Nt,Xt,$t,Kt,ne,ee;mt!==null?(Nt=mt.max.x-mt.min.x,Xt=mt.max.y-mt.min.y,$t=mt.min.x,Kt=mt.min.y):(Nt=U.image.width,Xt=U.image.height,$t=0,Kt=0),gt!==null?(ne=gt.x,ee=gt.y):(ne=0,ee=0);let Qt=kt.convert(lt.format),Me=kt.convert(lt.type);P.setTexture2D(lt,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,lt.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,lt.unpackAlignment);let ae=E.getParameter(E.UNPACK_ROW_LENGTH),Ue=E.getParameter(E.UNPACK_IMAGE_HEIGHT),gn=E.getParameter(E.UNPACK_SKIP_PIXELS),_e=E.getParameter(E.UNPACK_SKIP_ROWS),te=E.getParameter(E.UNPACK_SKIP_IMAGES),Ye=U.isCompressedTexture?U.mipmaps[ut]:U.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,Ye.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ye.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,$t),E.pixelStorei(E.UNPACK_SKIP_ROWS,Kt),U.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ut,ne,ee,Nt,Xt,Qt,Me,Ye.data):U.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ut,ne,ee,Ye.width,Ye.height,Qt,Ye.data):E.texSubImage2D(E.TEXTURE_2D,ut,ne,ee,Nt,Xt,Qt,Me,Ye),E.pixelStorei(E.UNPACK_ROW_LENGTH,ae),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ue),E.pixelStorei(E.UNPACK_SKIP_PIXELS,gn),E.pixelStorei(E.UNPACK_SKIP_ROWS,_e),E.pixelStorei(E.UNPACK_SKIP_IMAGES,te),ut===0&&lt.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(U,lt,mt=null,gt=null,ut=0){U.isTexture!==!0&&(ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),mt=arguments[0]||null,gt=arguments[1]||null,U=arguments[2],lt=arguments[3],ut=arguments[4]||0);let Nt,Xt,$t,Kt,ne,ee,Qt,Me,ae,Ue=U.isCompressedTexture?U.mipmaps[ut]:U.image;mt!==null?(Nt=mt.max.x-mt.min.x,Xt=mt.max.y-mt.min.y,$t=mt.max.z-mt.min.z,Kt=mt.min.x,ne=mt.min.y,ee=mt.min.z):(Nt=Ue.width,Xt=Ue.height,$t=Ue.depth,Kt=0,ne=0,ee=0),gt!==null?(Qt=gt.x,Me=gt.y,ae=gt.z):(Qt=0,Me=0,ae=0);let gn=kt.convert(lt.format),_e=kt.convert(lt.type),te;if(lt.isData3DTexture)P.setTexture3D(lt,0),te=E.TEXTURE_3D;else if(lt.isDataArrayTexture||lt.isCompressedArrayTexture)P.setTexture2DArray(lt,0),te=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,lt.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,lt.unpackAlignment);let Ye=E.getParameter(E.UNPACK_ROW_LENGTH),ve=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ln=E.getParameter(E.UNPACK_SKIP_PIXELS),Bi=E.getParameter(E.UNPACK_SKIP_ROWS),_n=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ue.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ue.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Kt),E.pixelStorei(E.UNPACK_SKIP_ROWS,ne),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ee),U.isDataTexture||U.isData3DTexture?E.texSubImage3D(te,ut,Qt,Me,ae,Nt,Xt,$t,gn,_e,Ue.data):lt.isCompressedArrayTexture?E.compressedTexSubImage3D(te,ut,Qt,Me,ae,Nt,Xt,$t,gn,Ue.data):E.texSubImage3D(te,ut,Qt,Me,ae,Nt,Xt,$t,gn,_e,Ue),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ye),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ve),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ln),E.pixelStorei(E.UNPACK_SKIP_ROWS,Bi),E.pixelStorei(E.UNPACK_SKIP_IMAGES,_n),ut===0&&lt.generateMipmaps&&E.generateMipmap(te),Y.unbindTexture()},this.initRenderTarget=function(U){ot.get(U).__webglFramebuffer===void 0&&P.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?P.setTextureCube(U,0):U.isData3DTexture?P.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?P.setTexture2DArray(U,0):P.setTexture2D(U,0),Y.unbindTexture()},this.resetState=function(){L=0,A=0,C=null,Y.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===yh?"display-p3":"srgb",e.unpackColorSpace=Se.workingColorSpace===Ba?"display-p3":"srgb"}};var wa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fs=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xl,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new R,Ta=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),r=Ae(r,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bn=class extends Jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$r,Hs=new R,Kr=new R,Jr=new R,Qr=new Dt,Fs=new Dt,bf=new re,Xo=new R,Os=new R,qo=new R,zu=new Dt,Rc=new Dt,ku=new Dt,Qn=class extends $e{constructor(t=new Bn){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hl(e,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new Ta(n,3,0,!1)),$r.setAttribute("uv",new Ta(n,2,3,!1))}this.geometry=$r,this.material=t,this.center=new Dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),bf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Jr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Yo(Xo.set(-.5,-.5,0),Jr,o,Kr,r,s),Yo(Os.set(.5,-.5,0),Jr,o,Kr,r,s),Yo(qo.set(.5,.5,0),Jr,o,Kr,r,s),zu.set(0,0),Rc.set(1,0),ku.set(1,1);let a=t.ray.intersectTriangle(Xo,Os,qo,!1,Hs);if(a===null&&(Yo(Os.set(-.5,.5,0),Jr,o,Kr,r,s),Rc.set(0,1),a=t.ray.intersectTriangle(Xo,qo,Os,!1,Hs),a===null))return;let c=t.ray.origin.distanceTo(Hs);c<t.near||c>t.far||e.push({distance:c,point:Hs.clone(),uv:$i.getInterpolation(Hs,Xo,Os,qo,zu,Rc,ku,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Yo(i,t,e,n,r,s){Qr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Fs.x=s*Qr.x-r*Qr.y,Fs.y=r*Qr.x+s*Qr.y):Fs.copy(Qr),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(bf)}var Fl=class extends Rn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=fn,h=fn,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Aa=class extends Pe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},jr=new re,Vu=new re,Zo=[],Gu=new Ii,p_=new re,Bs=new Tt,zs=new Li,ds=class extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,p_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,jr),Gu.copy(t.boundingBox).applyMatrix4(jr),this.boundingBox.union(Gu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,jr),zs.copy(t.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,jr),Vu.multiplyMatrices(n,jr),Bs.matrixWorld=Vu,Bs.raycast(t,Zo);for(let o=0,a=Zo.length;o<a;o++){let c=Zo[o];c.instanceId=s,c.object=this,e.push(c)}Zo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fl(new Float32Array(r*this.count),r,this.count,dh,oi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var eo=class extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ra=new R,Ca=new R,Wu=new re,ks=new js,$o=new Li,Cc=new R,Xu=new R,Pa=class extends $e{constructor(t=new ye,e=new eo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ra.fromBufferAttribute(e,r-1),Ca.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ra.distanceTo(Ca);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),$o.radius+=s,t.ray.intersectsSphere($o)===!1)return;Wu.copy(r).invert(),ks.copy(t.ray).applyMatrix4(Wu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=h.getX(_),y=h.getX(_+1),x=Ko(this,t,ks,c,p,y);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),f=h.getX(m),p=Ko(this,t,ks,c,_,f);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=Ko(this,t,ks,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Ko(this,t,ks,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ko(i,t,e,n,r,s){let o=i.geometry.attributes.position;if(Ra.fromBufferAttribute(o,r),Ca.fromBufferAttribute(o,s),e.distanceSqToSegment(Ra,Ca,Cc,Xu)>n)return;Cc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Cc);if(!(c<t.near||c>t.far))return{distance:c,point:Xu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var ji=class extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qu=new re,Ol=new js,Jo=new Li,Qo=new R,tr=class extends $e{constructor(t=new ye,e=new ji){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),Jo.radius+=s,t.ray.intersectsSphere(Jo)===!1)return;qu.copy(r).invert(),Ol.copy(t.ray).applyMatrix4(qu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let f=l.getX(g);Qo.fromBufferAttribute(u,f),Yu(Qo,f,c,r,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Qo.fromBufferAttribute(u,g),Yu(Qo,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Yu(i,t,e,n,r,s,o){let a=Ol.distanceSqToPoint(i);if(a<e){let c=new R;Ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Pn=class extends Rn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Dt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,r=[],s=[],o=[],a=new R,c=new re;for(let m=0;m<=t;m++){let g=m/t;r[m]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(cn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(cn(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},no=class extends zn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Dt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bl=class extends no{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,r(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var jo=new R,Pc=new vh,Ic=new vh,Lc=new vh,zl=class extends zn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(jo.subVectors(r[0],r[1]).add(r[0]),l=jo);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(jo.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=jo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Pc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,f),Ic.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,f),Lc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ic.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Lc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Pc.calc(c),Ic.calc(c),Lc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zu(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function m_(i,t){let e=1-i;return e*e*t}function g_(i,t){return 2*(1-i)*i*t}function __(i,t){return i*i*t}function Ys(i,t,e,n){return m_(i,t)+g_(i,e)+__(i,n)}function y_(i,t){let e=1-i;return e*e*e*t}function x_(i,t){let e=1-i;return 3*e*e*i*t}function M_(i,t){return 3*(1-i)*i*i*t}function v_(i,t){return i*i*i*t}function Zs(i,t,e,n,r){return y_(i,t)+x_(i,e)+M_(i,n)+v_(i,r)}var Ia=class extends zn{constructor(t=new Dt,e=new Dt,n=new Dt,r=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Dt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zs(t,r.x,s.x,o.x,a.x),Zs(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kl=class extends zn{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zs(t,r.x,s.x,o.x,a.x),Zs(t,r.y,s.y,o.y,a.y),Zs(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},La=class extends zn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vl=class extends zn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends zn{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ys(t,r.x,s.x,o.x),Ys(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gl=class extends zn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ys(t,r.x,s.x,o.x),Ys(t,r.y,s.y,o.y),Ys(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(Zu(a,c.x,l.x,h.x,u.x),Zu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Dt().fromArray(r))}return this}},Wl=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:zl,CubicBezierCurve:Ia,CubicBezierCurve3:kl,EllipseCurve:no,LineCurve:La,LineCurve3:Vl,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:Gl,SplineCurve:Da}),Xl=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new Wl[r.type]().fromJSON(r))}return this}},io=class extends Xl{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new La(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Ua(this.currentPoint.clone(),new Dt(t,e),new Dt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new Ia(this.currentPoint.clone(),new Dt(t,e),new Dt(n,r),new Dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Da(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new no(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ql=class i extends ye{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=cn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,d=new Dt,m=new R,g=new R,_=new R,f=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*r,M=Math.sin(x),L=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*L,o.push(u.x,u.y,u.z),d.x=y/e,d.y=A/(t.length-1),a.push(d.x,d.y);let C=c[3*A+0]*M,B=c[3*A+1],it=c[3*A+0]*L;l.push(C,B,it)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,L=M,A=M+t.length,C=M+t.length+1,B=M+1;s.push(L,A,B),s.push(C,B,A)}this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ro=class i extends ql{constructor(t=1,e=1,n=4,r=8){let s=new io;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},so=class i extends ye{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new R,h=new Dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ze=class i extends ye{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],g=0,_=[],f=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(m,2));function y(){let M=new R,L=new R,A=0,C=(e-t)/n;for(let B=0;B<=s;B++){let it=[],v=B/s,w=v*(e-t)+t;for(let tt=0;tt<=r;tt++){let st=tt/r,at=st*c+a,Mt=Math.sin(at),ht=Math.cos(at);L.x=w*Mt,L.y=-v*n+f,L.z=w*ht,u.push(L.x,L.y,L.z),M.set(Mt,C,ht).normalize(),d.push(M.x,M.y,M.z),m.push(st,1-v),it.push(g++)}_.push(it)}for(let B=0;B<r;B++)for(let it=0;it<s;it++){let v=_[it][B],w=_[it+1][B],tt=_[it+1][B+1],st=_[it][B+1];t>0&&(h.push(v,w,st),A+=3),e>0&&(h.push(w,tt,st),A+=3)}l.addGroup(p,A,0),p+=A}function x(M){let L=g,A=new Dt,C=new R,B=0,it=M===!0?t:e,v=M===!0?1:-1;for(let tt=1;tt<=r;tt++)u.push(0,f*v,0),d.push(0,v,0),m.push(.5,.5),g++;let w=g;for(let tt=0;tt<=r;tt++){let at=tt/r*c+a,Mt=Math.cos(at),ht=Math.sin(at);C.x=it*ht,C.y=f*v,C.z=it*Mt,u.push(C.x,C.y,C.z),d.push(0,v,0),A.x=Mt*.5+.5,A.y=ht*.5*v+.5,m.push(A.x,A.y),g++}for(let tt=0;tt<r;tt++){let st=L+tt,at=w+tt;M===!0?h.push(at,at+1,st):h.push(at+1,at,st),B+=3}l.addGroup(p,B,M===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jn=class i extends ze{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yl=class i extends ye{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new R,M=new R,L=new R;for(let A=0;A<e.length;A+=3)m(e[A+0],x),m(e[A+1],M),m(e[A+2],L),c(x,M,L,y)}function c(y,x,M,L){let A=L+1,C=[];for(let B=0;B<=A;B++){C[B]=[];let it=y.clone().lerp(M,B/A),v=x.clone().lerp(M,B/A),w=A-B;for(let tt=0;tt<=w;tt++)tt===0&&B===A?C[B][tt]=it:C[B][tt]=it.clone().lerp(v,tt/w)}for(let B=0;B<A;B++)for(let it=0;it<2*(A-B)-1;it++){let v=Math.floor(it/2);it%2===0?(d(C[B][v+1]),d(C[B+1][v]),d(C[B][v])):(d(C[B][v+1]),d(C[B+1][v+1]),d(C[B+1][v]))}}function l(y){let x=new R;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(y),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function h(){let y=new R;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let M=f(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(M,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],L=o[y+4],A=Math.max(x,M,L),C=Math.min(x,M,L);A>.9&&C<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function m(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new R,x=new R,M=new R,L=new R,A=new Dt,C=new Dt,B=new Dt;for(let it=0,v=0;it<s.length;it+=9,v+=6){y.set(s[it+0],s[it+1],s[it+2]),x.set(s[it+3],s[it+4],s[it+5]),M.set(s[it+6],s[it+7],s[it+8]),A.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),B.set(o[v+4],o[v+5]),L.copy(y).add(x).add(M).divideScalar(3);let w=f(L);_(A,v+0,y,w),_(C,v+2,x,w),_(B,v+4,M,w)}}function _(y,x,M,L){L<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=L/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var oo=class extends io{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new io().fromJSON(r))}return this}},b_={triangulate:function(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Ef(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=A_(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return ao(s,o,e,a,c,m,0),o}};function Ef(i,t,e,n,r){let s,o;if(r===O_(i,t,e,n)>0)for(s=t;s<e;s+=n)o=$u(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=$u(s,i[s],i[s+1],o);return o&&ka(o,o.next)&&(lo(o),o=o.next),o}function br(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ka(e,e.next)||Be(e.prev,e,e.next)===0)){if(lo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ao(i,t,e,n,r,s,o){if(!i)return;!o&&s&&L_(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?S_(i,n,r,s):E_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),lo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=w_(br(i),t,e),ao(i,t,e,n,r,s,2)):o===2&&T_(i,t,e,n,r,s):ao(br(i),t,e,n,r,s,1);break}}}function E_(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&es(r,a,s,c,o,l,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function S_(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Be(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,p=Zl(m,g,t,e,n),y=Zl(_,f,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&es(a,h,c,u,l,d,x.x,x.y)&&Be(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==r&&M!==o&&es(a,h,c,u,l,d,M.x,M.y)&&Be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&es(a,h,c,u,l,d,x.x,x.y)&&Be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==r&&M!==o&&es(a,h,c,u,l,d,M.x,M.y)&&Be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function w_(i,t,e){let n=i;do{let r=n.prev,s=n.next.next;!ka(r,s)&&Sf(r,n,n.next,s)&&co(r,s)&&co(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),lo(n),lo(n.next),n=i=s),n=n.next}while(n!==i);return br(n)}function T_(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&N_(o,a)){let c=wf(o,a);o=br(o,o.next),c=br(c,c.next),ao(o,t,e,n,r,s,0),ao(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function A_(i,t,e,n){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=Ef(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(D_(l));for(r.sort(R_),s=0;s<r.length;s++)e=C_(r[s],e);return e}function R_(i,t){return i.x-t.x}function C_(i,t){let e=P_(i,t);if(!e)return t;let n=wf(e,i);return br(n,n.next),br(e,e.next)}function P_(i,t){let e=t,n=-1/0,r,s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&es(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),co(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&I_(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function I_(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function L_(i,t,e,n){let r=i;do r.z===0&&(r.z=Zl(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,U_(r)}function U_(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Zl(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function D_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function es(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function N_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!H_(i,t)&&(co(i,t)&&co(t,i)&&F_(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||ka(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ka(i,t){return i.x===t.x&&i.y===t.y}function Sf(i,t,e,n){let r=ea(Be(i,t,e)),s=ea(Be(i,t,n)),o=ea(Be(e,n,i)),a=ea(Be(e,n,t));return!!(r!==s&&o!==a||r===0&&ta(i,e,t)||s===0&&ta(i,n,t)||o===0&&ta(e,i,n)||a===0&&ta(e,t,n))}function ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ea(i){return i>0?1:i<0?-1:0}function H_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function co(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function F_(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wf(i,t){let e=new $l(i.i,i.x,i.y),n=new $l(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $u(i,t,e,n){let r=new $l(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $l(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var $s=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Ku(t),Ju(n,t);let o=t.length;e.forEach(Ku);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,Ju(n,e[c]);let a=b_.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Ku(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ju(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Na=class i extends ye{constructor(t=new oo([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:B_,x,M=!1,L,A,C,B;p&&(x=p.getSpacedPoints(h),M=!0,d=!1,L=p.computeFrenetFrames(h,!1),A=new R,C=new R,B=new R),d||(f=0,m=0,g=0,_=0);let it=a.extractPoints(l),v=it.shape,w=it.holes;if(!$s.isClockWise(v)){v=v.reverse();for(let z=0,E=w.length;z<E;z++){let j=w[z];$s.isClockWise(j)&&(w[z]=j.reverse())}}let st=$s.triangulateShape(v,w),at=v;for(let z=0,E=w.length;z<E;z++){let j=w[z];v=v.concat(j)}function Mt(z,E,j){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(E,j)}let ht=v.length,vt=st.length;function D(z,E,j){let q,V,Y,J=z.x-E.x,ot=z.y-E.y,P=j.x-z.x,b=j.y-z.y,H=J*J+ot*ot,K=J*b-ot*P;if(Math.abs(K)>Number.EPSILON){let ct=Math.sqrt(H),Q=Math.sqrt(P*P+b*b),bt=E.x-ot/ct,_t=E.y+J/ct,ft=j.x-b/Q,Lt=j.y+P/Q,dt=((ft-bt)*b-(Lt-_t)*P)/(J*b-ot*P);q=bt+J*dt-z.x,V=_t+ot*dt-z.y;let At=q*q+V*V;if(At<=2)return new Dt(q,V);Y=Math.sqrt(At/2)}else{let ct=!1;J>Number.EPSILON?P>Number.EPSILON&&(ct=!0):J<-Number.EPSILON?P<-Number.EPSILON&&(ct=!0):Math.sign(ot)===Math.sign(b)&&(ct=!0),ct?(q=-ot,V=J,Y=Math.sqrt(H)):(q=J,V=ot,Y=Math.sqrt(H/2))}return new Dt(q/Y,V/Y)}let et=[];for(let z=0,E=at.length,j=E-1,q=z+1;z<E;z++,j++,q++)j===E&&(j=0),q===E&&(q=0),et[z]=D(at[z],at[j],at[q]);let k=[],$,X=et.concat();for(let z=0,E=w.length;z<E;z++){let j=w[z];$=[];for(let q=0,V=j.length,Y=V-1,J=q+1;q<V;q++,Y++,J++)Y===V&&(Y=0),J===V&&(J=0),$[q]=D(j[q],j[Y],j[J]);k.push($),X=X.concat($)}for(let z=0;z<f;z++){let E=z/f,j=m*Math.cos(E*Math.PI/2),q=g*Math.sin(E*Math.PI/2)+_;for(let V=0,Y=at.length;V<Y;V++){let J=Mt(at[V],et[V],q);G(J.x,J.y,-j)}for(let V=0,Y=w.length;V<Y;V++){let J=w[V];$=k[V];for(let ot=0,P=J.length;ot<P;ot++){let b=Mt(J[ot],$[ot],q);G(b.x,b.y,-j)}}}let I=g+_;for(let z=0;z<ht;z++){let E=d?Mt(v[z],X[z],I):v[z];M?(C.copy(L.normals[0]).multiplyScalar(E.x),A.copy(L.binormals[0]).multiplyScalar(E.y),B.copy(x[0]).add(C).add(A),G(B.x,B.y,B.z)):G(E.x,E.y,0)}for(let z=1;z<=h;z++)for(let E=0;E<ht;E++){let j=d?Mt(v[E],X[E],I):v[E];M?(C.copy(L.normals[z]).multiplyScalar(j.x),A.copy(L.binormals[z]).multiplyScalar(j.y),B.copy(x[z]).add(C).add(A),G(B.x,B.y,B.z)):G(j.x,j.y,u/h*z)}for(let z=f-1;z>=0;z--){let E=z/f,j=m*Math.cos(E*Math.PI/2),q=g*Math.sin(E*Math.PI/2)+_;for(let V=0,Y=at.length;V<Y;V++){let J=Mt(at[V],et[V],q);G(J.x,J.y,u+j)}for(let V=0,Y=w.length;V<Y;V++){let J=w[V];$=k[V];for(let ot=0,P=J.length;ot<P;ot++){let b=Mt(J[ot],$[ot],q);M?G(b.x,b.y+x[h-1].y,x[h-1].x+j):G(b.x,b.y,u+j)}}}S(),T();function S(){let z=r.length/3;if(d){let E=0,j=ht*E;for(let q=0;q<vt;q++){let V=st[q];F(V[2]+j,V[1]+j,V[0]+j)}E=h+f*2,j=ht*E;for(let q=0;q<vt;q++){let V=st[q];F(V[0]+j,V[1]+j,V[2]+j)}}else{for(let E=0;E<vt;E++){let j=st[E];F(j[2],j[1],j[0])}for(let E=0;E<vt;E++){let j=st[E];F(j[0]+ht*h,j[1]+ht*h,j[2]+ht*h)}}n.addGroup(z,r.length/3-z,0)}function T(){let z=r.length/3,E=0;O(at,E),E+=at.length;for(let j=0,q=w.length;j<q;j++){let V=w[j];O(V,E),E+=V.length}n.addGroup(z,r.length/3-z,1)}function O(z,E){let j=z.length;for(;--j>=0;){let q=j,V=j-1;V<0&&(V=z.length-1);for(let Y=0,J=h+f*2;Y<J;Y++){let ot=ht*Y,P=ht*(Y+1),b=E+q+ot,H=E+V+ot,K=E+V+P,ct=E+q+P;N(b,H,K,ct)}}}function G(z,E,j){c.push(z),c.push(E),c.push(j)}function F(z,E,j){W(z),W(E),W(j);let q=r.length/3,V=y.generateTopUV(n,r,q-3,q-2,q-1);Z(V[0]),Z(V[1]),Z(V[2])}function N(z,E,j,q){W(z),W(E),W(q),W(E),W(j),W(q);let V=r.length/3,Y=y.generateSideWallUV(n,r,V-6,V-3,V-2,V-1);Z(Y[0]),Z(Y[1]),Z(Y[3]),Z(Y[1]),Z(Y[2]),Z(Y[3])}function W(z){r.push(c[z*3+0]),r.push(c[z*3+1]),r.push(c[z*3+2])}function Z(z){s.push(z.x),s.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return z_(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Wl[r.type]().fromJSON(r)),new i(n,t.options)}},B_={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new Dt(s,o),new Dt(a,c),new Dt(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Dt(o,1-c),new Dt(l,1-u),new Dt(d,1-g),new Dt(_,1-p)]:[new Dt(a,1-c),new Dt(h,1-u),new Dt(m,1-g),new Dt(f,1-p)]}};function z_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var nn=class i extends Yl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var rn=class i extends ye{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,d=new R,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){let A=L/e;u.x=-t*Math.cos(r+A*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(r+A*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(A+M,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],M=h[p][y],L=h[p+1][y],A=h[p+1][y+1];(p!==0||o>0)&&m.push(x,M,A),(p!==n-1||c<Math.PI)&&m.push(M,L,A)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ti=class i extends ye{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let _=g/r*s,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let _=(r+1)*m+g-1,f=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,y=(r+1)*m+g;o.push(_,f,y),o.push(f,p,y)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ee=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ps=class extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function na(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function k_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ms=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kl=class extends ms{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case $h:s=t,a=2*e-n;break;case Kh:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $h:o=t,c=2*n-e;break;case Kh:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,y=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-m)*f+(1.5+m)*_+.5*g,M=m*f-m*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+y*o[l+L]+x*o[c+L]+M*o[u+L];return s}},Jl=class extends ms{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},Ql=class extends ms{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ei=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=na(e,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:na(t.times,Array),values:na(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case la:e=this.InterpolantFactoryMethodDiscrete;break;case yl:e=this.InterpolantFactoryMethodLinear;break;case tc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return tc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&k_(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===tc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=yl;var Er=class extends ei{constructor(t,e,n){super(t,e,n)}};Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=la;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends ei{};jl.prototype.ValueTypeName="color";var th=class extends ei{};th.prototype.ValueTypeName="number";var eh=class extends ms{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)je.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ha=class extends ei{InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}};Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Sr=class extends ei{constructor(t,e,n){super(t,e,n)}};Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=la;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var nh=class extends ei{};nh.prototype.ValueTypeName="vector";var ih=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},V_=new ih,rh=class{constructor(t){this.manager=t!==void 0?t:V_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};rh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ho=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},gs=class extends ho{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Uc=new re,Qu=new R,ju=new R,Fa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ju),e.updateMatrixWorld(),Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var tf=new re,Vs=new R,Dc=new R,sh=class extends Fa{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),Dc.copy(n.position),Dc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dc),n.updateMatrixWorld(),r.makeTranslation(-Vs.x,-Vs.y,-Vs.z),tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf)}},ni=class extends ho{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},oh=class extends Fa{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Di=class extends ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new oh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var bh="\\[\\]\\.:\\/",G_=new RegExp("["+bh+"]","g"),Eh="[^"+bh+"]",W_="[^"+bh.replace("\\.","")+"]",X_=/((?:WC+[\/:])*)/.source.replace("WC",Eh),q_=/(WCOD+)?/.source.replace("WCOD",W_),Y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),Z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),$_=new RegExp("^"+X_+q_+Y_+Z_+"$"),K_=["material","materials","bones","map"],ah=class{constructor(t,e,n){let r=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(G_,"")}static parseTrackName(t){let e=$_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);K_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=ah;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Tf=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var Af=i=>Tf.find(t=>t.id===i)??Tf[0];function Cf(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var Va=(i,t,e)=>i+(t-i)*e,Pf=i=>Math.min(1,Math.max(0,i)),po=(i,t)=>Math.max(0,i)**t;function Th(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var If=(i,t,e)=>new hn(i,t,e,"ZYX"),xs=class{constructor(t,e={}){Fe(this,"n",t);Fe(this,"geo",new ye);Fe(this,"per");Fe(this,"radial");Fe(this,"closed");Fe(this,"sharp");Fe(this,"caps");Fe(this,"samples");Fe(this,"pos");Fe(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let r=this.radial+1,s=this.samples*r+(this.caps?2:0);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3);let o=new Float32Array(s*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*r+l)*2]=c/(this.samples-1),o[(c*r+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*r+l,u=h+r;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*r,l=c+1,h=(this.samples-1)*r;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new Pe(this.pos,3)),this.geo.setAttribute("normal",new Pe(this.nor,3)),this.geo.setAttribute("uv",new Pe(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:r,radial:s,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=y=>t[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))],u=y=>typeof e=="number"?e:e[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))];for(let y=0;y<a;y++){let x=Math.floor(y/r),M=y%r/r;!o&&x>=n-1&&(x=n-2,M=1);let L=h(x),A=h(x+1);for(let C=0;C<3;C++)if(this.sharp)c[y*3+C]=L[C]+(A[C]-L[C])*M;else{let B=o||x>0?h(x-1)[C]:2*L[C]-A[C],it=o||x+2<n?h(x+2)[C]:2*A[C]-L[C],v=M*M,w=v*M;c[y*3+C]=.5*(2*L[C]+(-B+A[C])*M+(2*B-5*L[C]+4*A[C]-it)*v+(-B+3*L[C]-3*A[C]+it)*w)}l[y]=Math.max(1e-4,Math.abs(u(x)+(u(x+1)-u(x))*M))}let d=new R,m=new R,g=new R,_=new R,f=y=>{let x=o?(y-1+a-1)%(a-1):Math.max(0,y-1),M=o?(y+1)%(a-1):Math.min(a-1,y+1);return d.set(c[M*3]-c[x*3],c[M*3+1]-c[x*3+1],c[M*3+2]-c[x*3+2]),d.lengthSq()<1e-12&&d.set(0,0,1),d.normalize()};f(0),_.set(Math.abs(d.x)<.9?1:0,Math.abs(d.x)<.9?0:1,0),m.crossVectors(d,_).normalize();let p=s+1;for(let y=0;y<a;y++){f(y),m.addScaledVector(d,-m.dot(d)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(d,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(d,m);for(let x=0;x<=s;x++){let M=x/s*Math.PI*2,L=Math.cos(M),A=Math.sin(M),C=L*m.x+A*g.x,B=L*m.y+A*g.y,it=L*m.z+A*g.z,v=(y*p+x)*3;this.nor[v]=C,this.nor[v+1]=B,this.nor[v+2]=it,this.pos[v]=c[y*3]+l[y]*C,this.pos[v+1]=c[y*3+1]+l[y]*B,this.pos[v+2]=c[y*3+2]+l[y]*it}if(this.caps&&(y===0||y===a-1)){let x=(a*p+(y?1:0))*3,M=y?1:-1;this.pos[x]=c[y*3],this.pos[x+1]=c[y*3+1],this.pos[x+2]=c[y*3+2],this.nor[x]=d.x*M,this.nor[x+1]=d.y*M,this.nor[x+2]=d.z*M}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function Xe(i,t,e={}){return new xs(i.length,e).set(i,t).geo}function ii(i,t,e,n=12,r=.35,s={}){let o=new re().makeRotationFromEuler(If(...t)),a=[],c=[],l=new R;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+r*Math.sin(3*u)))}return Xe(a,c,{closed:!0,per:6,...s})}function Ni(i,t,e,n,r,s=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<r;u++){let d=u/(r-1),m=s+2*Math.PI*n*d,g=t+(e-t)*d,_=l(d)+(a&&o?a.uniform(-o,o):0),[f,p]=c?c(g):[0,0];h.push([f+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var Wa=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function Vn(i,t,e,n,r){let s=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);s.push(...l,...h,0,0,i),s.push(...h,...l,0,0,-t)}let a=new ye;return a.setAttribute("position",new se(s,3)),a.setAttribute("uv",new se(new Array(s.length/3*2).fill(.5),2)),r&&a.applyMatrix4(new re().makeRotationFromEuler(If(...r))),a.computeVertexNormals(),a}function Ah(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),r.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;s.push(l,l+1,h+1,l,h+1,h)}let o=new ye;return o.setAttribute("position",new se(n,3)),o.setAttribute("uv",new se(r,2)),o.setIndex(s),o.computeVertexNormals(),o}var Ga=class{constructor(){Fe(this,"parts",new Map)}add(t,e,n,r,s){let o=t.index?t:J_(t),a=new re().compose(n?Array.isArray(n)?new R(...n):n:new R,new je().setFromEuler(r??new hn),s===void 0?new R(1,1,1):typeof s=="number"?new R(s,s,s):new R(...s)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,r]of this.parts){let s=new Tt(Rh(r),n);t.add(s),e.push(s);for(let o of r)o.dispose()}return this.parts.clear(),e}};function J_(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,r)=>r)),t}function Rh(i){let t=0,e=0;for(let d of i)t+=d.attributes.position.count,e+=d.index.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=i.some(d=>d.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let d of i){let m=d.attributes.position.count;n.set(d.attributes.position.array,l*3),d.attributes.normal||d.computeVertexNormals(),r.set(d.attributes.normal.array,l*3),d.attributes.uv&&s.set(d.attributes.uv.array,l*2),a&&d.attributes.color&&a.set(d.attributes.color.array,l*3);let g=d.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new ye;return u.setAttribute("position",new Pe(n,3)),u.setAttribute("normal",new Pe(r,3)),u.setAttribute("uv",new Pe(s,2)),a&&u.setAttribute("color",new Pe(a,3)),u.setIndex(new Pe(c,1)),u.computeBoundingSphere(),u}var Rf=new Map;function Sh(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function wh(i,t,e,n=4,r=1){let s=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let d=Math.floor(l),m=Math.floor(h),g=l-d,_=h-m,f=g*g*(3-2*g),p=_*_*(3-2*_),y=(M,L)=>Sh((M%c+c)%c,(L%c+c)%c,r+u),x=Va(Va(y(d,m),y(d+1,m),f),Va(y(d,m+1),y(d+1,m+1),f),p);s+=x*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return s/a}function Lf(i,t,e,n=[1,1]){let r=Rf.get(i);if(!r){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),r=new Pn(o),r.wrapS=r.wrapT=Mr,Rf.set(i,r)}let s=r.clone();return s.repeat.set(...n),s.needsUpdate=!0,s}var Uf=(i,t,e,n,r)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=r,i.data[t*4+3]=255};function wr(i=1,t=[1,1],e=.35,n=1.25){return Lf(`noise${i}`,128,r=>{for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=wh(o/(16*i),s/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,Va(e,n,a)/1.25));Uf(r,s*128+o,c,c,c)}},t)}function Df(i=6,t=.11,e=[1,1]){return Lf(`vein${i}:${t}`,128,n=>{let r=[];for(let s=0;s<i;s++)for(let o=0;o<i;o++)r.push([(o+Sh(o,s,9))/i,(s+Sh(o,s,11))/i]);for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=o/128+(wh(o/16,s/16,8,2,5)-.5)*.08,c=s/128+(wh(o/16+7,s/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of r)for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let y=a-g-p,x=c-_-f,M=Math.sqrt(y*y+x*x);M<l?(h=l,l=M):M<h&&(h=M)}let u=(h-l)*i*.5,d=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*d*d);Uf(n,s*128+o,m,m,m)}},e)}var nr=1.13,mo=.66,oe=(i,t,e)=>new zt(i,t,e);function Q_(i,t){let e=(s,o=!0)=>(o?i.push(s):t.push(s),s),n=(s,o=1.7)=>s.clone().multiplyScalar(o),r=s=>Math.min(2.4,.55+s*.13);return{bark:(s,o)=>e(new Ee({color:n(o,1.5),map:wr(4,[3,2]),roughness:.9,emissive:s.clone().multiplyScalar(.4)})),plain:(s,o=.5)=>e(new Ee({color:n(s),roughness:o})),leaf:(s,o)=>e(new Ee({color:n(o,1.6),map:wr(1,[2,2],.45),roughness:.45,side:Re,emissive:s.clone().multiplyScalar(.6)})),metal:(s,o=.28)=>e(new Ee({color:n(s,1.25),metalness:.55,roughness:o+.12})),veins:(s,o,a,c=6,l=.11,h=.1)=>e(new Ee({color:n(s,2.4),map:wr(1,[3,2]),emissive:o,emissiveMap:Df(c,l,[4,2]),emissiveIntensity:r(a),roughness:.6,metalness:h})),lava:()=>e(new Ee({color:oe(.3,.05,0),emissive:oe(1,.22,.015),emissiveMap:wr(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(s,o,a,c=An)=>e(new Ee({color:o,emissive:s,emissiveMap:wr(1,[2,2],.6),emissiveIntensity:r(a),roughness:.4,side:c})),emissive:(s,o)=>e(new Ee({color:s.clone().multiplyScalar(.15),emissive:s,emissiveIntensity:r(o),roughness:.4})),crystal:(s,o)=>e(new Ee({color:n(s,1.3),emissive:s,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(s,o=.3)=>e(new Ee({color:s,emissive:s.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Ee({color:oe(.55,.82,1),map:wr(2,[4,1],.7),emissive:oe(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var Ar=i=>Math.max(8,Math.round(i*.5)),go=i=>Math.max(1,Math.round(i*.45)),Xa=i=>i-Math.floor(i);function j_(i,t,e,n,r,s=.09,o=.1){let a=i+n,c=(a%t+t)%t;return r*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-s*c)*(Math.cos(o*c)+s/o*Math.sin(o*c)))}function ty(i,t,e,n=8,r=10,s=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-r)/s))))}function Nf(i,t,e,n){let r=[];for(let s=0;s<t;s++){let o=new R(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),r.push([o.x,o.y,o.z])}return r}function Ch(i,t,e,n,r,s){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*r));return o.push(e),Xe(o,o.map((a,c)=>s*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function ey(i,t,e,n,r,s,o,a=.45){return Ah(4,10,(c,l)=>{let h=2*c-1,u=.07+r*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-s*l**3,d=t+e*l,m=i+o*l,g=n*Math.max(.03,po(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,f=h*g,p=Math.cos(m),y=Math.sin(m);return[_*p-f*y,_*y+f*p,d]})}function ny(i=.14,t=.055){return Ah(3,6,(e,n)=>{let r=2*e-1,s=t*(.04+po(Math.sin(Math.PI*n**.75),.9));return[r*s,n*i,-Math.abs(r)*s*.45-.18*i*n*n]})}var Tr=new $e;function Ms(i,t,e,n,r){Tr.position.set(e[0],e[1],e[2]),typeof n=="number"?Tr.scale.setScalar(Math.max(1e-5,n)):Tr.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),r?Tr.rotation.set(r[0],r[1],r[2],"ZYX"):Tr.rotation.set(0,0,0),Tr.updateMatrix(),i.setMatrixAt(t,Tr.matrix)}var Ih=new nn(1,1),Ph=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((r,s)=>{for(let o of n)o.offset.x-=s*e})};function iy(i){let{rng:t,m:e}=i,n=e.bark(oe(.045,.028,.014),oe(.3,.19,.1)),r=e.plain(oe(.1,.3,.05),.55),s=e.leaf(oe(.015,.14,.02),oe(.1,.34,.045)),o=.022,a=_=>Wa(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(Xe([...c,2.66,2.74].map(_=>[...a(_),_]),[...l,.05,.012],{radial:8,per:5}),n);for(let _=0;_<5;_++){let f=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(f),y=Math.sin(f);i.stat(Xe([[.03*p,.03*y,.3],[.06*p,.06*y,.17],[.1*p,.1*y,.07],[.14*p,.14*y,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,f,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:f-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},d=[.015,.09,.2,.235,.185,.06],m=[2.42,2.6,2.8,3.02,3.22,3.33];for(let _=0;_<6;_++){let f=2*Math.PI*_/6+t.uniform(-.15,.15),p=d.map((y,x)=>{let M=f+.22*x;return[y*Math.cos(M),y*Math.sin(M),m[x]+t.uniform(-.02,.02)]});i.stat(Xe(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let y of[2,4])u(p[y],Math.atan2(p[y][1],p[y][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,f,p,y,x])=>{let M=Ar(56),L=Ni(A=>Th(c,l,_+(f-_)*A)+.018,_,f,p,M,y,.004,t,a);i.stat(Xe(L,L.map((A,C)=>x*(1-.55*C/(M-1))),{radial:5,per:3}),r);for(let A=2;A<M-2;A+=Math.max(1,Math.floor((M-4)/go(22)))){let C=L[A],B=a(C[2]);u(C,Math.atan2(C[1]-B[1],C[0]-B[0]),t.uniform(.7,1.3))}});let g=i.inst(ny(),s,h.length);return i.anim(_=>{h.forEach((f,p)=>Ms(g,p,f.p,f.s,[f.rx+.16*Math.sin(_*.2094+f.ph),f.ry,f.rz+.1*Math.sin(_*.1309+f.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:oe(.45,1,.35),hot:oe(.7,1,.3),mid:oe(.15,.8,.05)}}function ry(i){let{rng:t,m:e}=i,n=e.veins(oe(.085,.065,.055),oe(1,.3,.03),2,7,.06,0);n.roughness=.9;let r=e.lava(),s=e.core(oe(1,.36,.04),oe(.9,.12,.01),2,Re);Ph(i,r,.25),Ph(i,s,-.18);let o=.014,a=g=>Wa(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(Xe(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,f=2.35)=>Th(c,l,_+(f-_)*g);for(let g=0;g<2;g++){let _=Ar(60),f=Ni(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(Xe(f,f.map((p,y)=>.012+.003*Math.sin(y*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=Ar(60),f=Ni(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(Xe(f,f.map((p,y)=>.0085+.002*Math.sin(y*.7)),{radial:5,per:3}),r)}{let g=Ni(_=>h(_,.5,2.2)-.001,.5,2.2,-3,Ar(50),.8,0,void 0,a);i.stat(Xe(g,.0055,{radial:4,per:3}),r)}i.stat(ii(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(ii(.082,[0,0,0],.008,10,0),r,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(ey(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),s);i.stat(ii(.165,[0,0,0],.007,14,0),r,[0,0,2.86]);let u=6,d=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),f=t.uniform(.16,.2);d.push({p:[f*Math.cos(_),f*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(Ih,e.emissive(oe(1,.45,.05),10),u);return i.anim(g=>{d.forEach((_,f)=>{let p=Xa(g/60+_.ph),y=_.s*Math.min(1,p*6)*(1-.6*p);Ms(m,f,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*y,.85*y,7*y])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:oe(1,.45,.1),hot:oe(1,.7,.15),mid:oe(1,.25,.02)}}function sy(i){let{rng:t,m:e}=i,n=e.metal(oe(.1,.12,.16),.3),r=e.metal(oe(.78,.84,.9),.18),s=e.water(),o=e.crystal(oe(.2,.7,1),2.5),a=e.crystal(oe(.4,.8,1),1.5);Ph(i,s,.3);let c=.006,l=_=>Wa(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(Xe(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(ii(.066,[0,0,0],.012,10,0),r,[0,0,2.56]);for(let _=0;_<3;_++){let f=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(Xe([[.04*f,.04*p,2.55],[.085*f,.085*p,2.68],[.12*f,.12*p,2.82],[.13*f,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),r)}for(let _=0;_<2;_++)i.stat(Xe(Ni(.05,.4,2.45,7,Ar(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),r);{let _=Ar(64),f=Ni(M=>.058+.012*Math.sin(M*20),.45,2.5,3.2,_,1,0,void 0,l),p=f.map((M,L)=>.012+.014*(.5+.5*Math.sin(L*.45))),y=new xs(_,{radial:6,per:3});y.set(f,p),i.mesh(y.geo,s);let x=p.slice();i.anim(M=>{for(let L=0;L<_;L++)x[L]=p[L]*(1+.6*Math.sin(M*.2618-L*.7));y.set(f,x)})}[.7,1,1.35,1.7,2.05].forEach((_,f)=>{let p=f*2.1;i.stat(Vn(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,f,p,y,x,M,L,A,C],B)=>{let v=20+B*50,w=B===0?1:-1,tt=y<p?-1:1,st=Math.PI/180,at=Array.from({length:40},(X,I)=>{let S=I/39;return{a:(p+(y-p)*S)*st,b:p*st+tt*A*st*S,R:_+(f-_)*S,y:M+.04*Math.sin(S*6),r:.004+x*po(Math.sin(Math.PI*S),.8)}}),Mt=(X,I,S,T)=>[X*t.uniform(.35,1.4),I*t.uniform(.8,1.2),-T*S+t.uniform(-1.4,1.4),t.uniform(1,5)],ht=at.map((X,I)=>[Mt(.07,.35,.9,I),Mt(.035,.7,1.7,I),Mt(.03,.3,1,I),Mt(.015,.6,1.8,I),Mt(.32,.45,.9,I),Mt(.2,.8,1.6,I),Mt(.1,1.3,2.3,I)]),vt=new xs(40,{radial:6,per:2}),D=at.map(()=>[0,0,0]),et=at.map(()=>0),k=i.mesh(vt.geo,s,[0,0,3]);k.renderOrder=2;let $=X=>{let I=j_(X,120,1,v,w),S=ty(X,120,v,12),T=Math.floor((X+v)/120),O=G=>G[0]*Math.sin(X*G[1]+G[2]+T*G[3]);at.forEach((G,F)=>{let N=ht[F],W=G.a*(1-S)+G.b*S+I,Z=G.R*(1-S)+L*(1+S*(O(N[0])+O(N[1])))*S;D[F][0]=Z*Math.cos(W),D[F][2]=Z*Math.sin(W),D[F][1]=G.y*(1-S)+(M+O(N[2])+O(N[3]))*S,et[F]=G.r*(1+.3*(1-S)*Math.sin(X*.2618-F*.8))*(1-S)+C*S*Math.max(.3,1+S*(O(N[4])+O(N[5])+O(N[6])))}),vt.set(D,et)};$(0),i.anim($)});let d=[];for(let _=0;_<10;_++){let f=t.uniform(0,2*Math.PI),p=[Math.cos(f),0,Math.sin(f)],y=t.uniform(.2,.34),x=t.uniform(.12,.3);d.push({start:[p[0]*y,0,3+p[2]*y],vel:[p[0]*x+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*x+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of d)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:go(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(Ih,a,d.length+m.length);m.forEach((_,f)=>Ms(g,d.length+f,_.p,_.s)),i.anim(_=>{d.forEach((f,p)=>{let y=Xa(_/f.per+f.ph),x=y*.9;Ms(g,p,[f.start[0]+f.vel[0]*x,f.start[1]+f.vel[1]*x,f.start[2]+f.vel[2]*x-.9*x*x],f.s*Math.min(1,y*10)*Math.min(1,(1-y)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(Vn(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let f=2*Math.PI*_/3;i.stat(Vn(.02,.12,.016,4,[Math.sin(f)*.4,-Math.cos(f)*.4,0]),o,[.045*Math.cos(f),.045*Math.sin(f),.36])}return{z:3,r:.145,glass:oe(.3,.75,1),hot:oe(.5,.95,1),mid:oe(.05,.4,1)}}function oy(i){let{rng:t,m:e}=i,n=e.veins(oe(.03,.02,.06),oe(.85,.6,1),3,6,.09,.5),r=e.metal(oe(.62,.58,.72),.2),s=e.crystal(oe(.35,.15,1),3),o=e.emissive(oe(.65,.4,1),4),a=e.emissive(oe(.6,.3,1),3);i.stat(Xe([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(ii(.04,[0,0,0],.007,10,0),r,[0,0,_]);i.stat(Xe([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(Xe(Ni(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),r);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,f)=>i.stat(ii(f===0||f===4?.064:.058,[0,0,0],.011,10,0),r,[0,0,_]));let l=ii(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let f=e.emissive(oe(.65,.4,1),4),p=f.emissiveIntensity;f.transparent=!0;let y=i.mesh(l,f);i.anim(x=>{let M=Xa(x/60+_/4);y.position.z=.95+1.45*M,y.scale.set(1+.3*M,1+.3*M,1);let L=Math.min(1,M*8)*Math.min(1,(1-M)*3);f.emissiveIntensity=p*L,f.opacity=L})}let h=(_,f,p)=>Pf((Math.sin(_*.9+f)+Math.sin(_*.37+f*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let f=t.uniform(0,6.28),p=[.07*Math.cos(f),.07*Math.sin(f),c[_]],y=[.07*Math.cos(f+.9),.07*Math.sin(f+.9),c[_+1]],x=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2],M=i.mesh(Ch(t,[p[0]-x[0],p[1]-x[1],p[2]-x[2]],[y[0]-x[0],y[1]-x[1],y[2]-x[2]],6,.012,.005),o,x),L=t.uniform(0,6.28);i.anim(A=>{M.scale.setScalar(Math.max(1e-4,h(A,L,.3)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=.066;i.stat(Ch(t,[p*Math.cos(f),p*Math.sin(f),.95],[p*Math.cos(f+.6),p*Math.sin(f+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let f=new R(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),y=i.mesh(Ch(t,[f.x*.16,f.y*.16,f.z*.16],[f.x*p,f.y*p,f.z*p],7,.03,.005),o,[0,0,3]),x=t.uniform(0,6.28);i.anim(M=>{y.rotation.set(Math.floor(M/5+x)*1.7,0,Math.floor(M/4+x)*2.4,"ZYX"),y.scale.setScalar(Math.max(1e-4,h(M,x,.5)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],y=[2.5,2.66,2.85,3.08,3.22];i.stat(Xe(p.map((x,M)=>[x*Math.cos(f+.3*M),x*Math.sin(f+.3*M),y[M]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),r)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,f,p,y])=>{let x=i.mesh(ii(_,f.map(M=>M*Math.PI/180),p,10),r,[0,0,3]);i.anim(M=>{x.rotation.z=M*y})}),i.stat(Vn(.58,.06,.03,4),r,[0,0,3.14]);let u=[new R(0,.6,.8),new R(.7,-.3,.65),new R(-.45,.5,.75)],d=[1,-2,3],m=Array.from({length:6},(_,f)=>{let p=u[f%3].clone().normalize(),y=Math.abs(p.z)<.9?new R(0,0,1):new R(1,0,0),x=p.clone().cross(y).normalize(),M=p.clone().cross(x);return{e1:x,e2:M,R:t.uniform(.32,.5),th0:Math.floor(f/3)*Math.PI+t.uniform(-.3,.3),w:d[f%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(Vn(.11,.11,.035,4),s,m.length);return i.anim(_=>{m.forEach((f,p)=>{let y=f.th0+_*f.w,x=f.R*(1+.12*Math.sin(_*.05236+f.ph));Ms(g,p,[x*(f.e1.x*Math.cos(y)+f.e2.x*Math.sin(y)),x*(f.e1.y*Math.cos(y)+f.e2.y*Math.sin(y)),3+x*(f.e1.z*Math.cos(y)+f.e2.z*Math.sin(y))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(Vn(.1,.3,.04,5),s,[0,0,.32]),{z:3,r:.15,glass:oe(.6,.3,1),hot:oe(.7,.5,1),mid:oe(.4,.1,1),style:"flicker"}}function ay(i){let{rng:t,m:e}=i,n=e.veins(oe(.02,.03,.05),oe(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let r=e.metal(oe(.8,.86,.95),.15),s=e.crystal(oe(.25,.65,1),4),o=e.emissive(oe(.7,.9,1),14),a=e.emissive(oe(.3,.7,1),9);i.stat(Xe([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(Vn(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let y=i.mesh(ii(.058+.006*p,[0,0,0],.006,12,.6),r,[0,0,.655+.42*p]);i.anim(x=>{y.rotation.z=x*(p%2===0?1:-1)*.05236})}let c=p=>{let y=Math.max(0,(p-.7)/.3);return .05+.26*po(Math.sin(y*Math.PI/2),1.5)};for(let p=0;p<2;p++){let y=Ar(110);i.stat(Xe(Ni(c,.4,3.2,6,y,p*Math.PI),Array.from({length:y},(x,M)=>.0085+.004*Math.sin(M*.55+p)),{radial:5,per:3}),r)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,y,x,M])=>{let L=i.mesh(ii(p,y.map(A=>A*Math.PI/180),x,10),r,[0,0,3]);i.anim(A=>{L.rotation.z=A*M})}),i.stat(Vn(.62,.05,.032,4),s,[0,0,3.17]);let l=Nf(t,go(110),.35,.85);for(let p=0;p<go(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,y)=>p.map(x=>({rel:x,s:y(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),d=h(Nf(t,Math.max(go(30),8),.4,.9),()=>t.uniform(.02,.045)),m=Rh([Vn(1,1,.14,4),Vn(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(y,x)=>x)),p))),g=i.inst(Ih,o,u.length),_=i.inst(m,o,d.length),f=(p,y,x)=>{y.forEach((M,L)=>{let A=Xa(x/M.per+M.ph),C=(1-A)**1.6;Ms(p,L,[M.rel[0]*C,M.rel[1]*C,3+M.rel[2]*C],M.s*Math.min(1,A*8)*(1-A)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{f(g,u,p),f(_,d,p)}),i.stat(Vn(.08,.31,.05,6),s,[0,0,.33]);for(let p=0;p<3;p++){let y=2*Math.PI*p/3+.4,x=Math.cos(y),M=Math.sin(y);i.stat(Xe([[.035*x,.035*M,.52],[.07*x,.07*M,.44],[.11*x,.11*M,.34],[.1*x,.1*M,.24]],[.02,.016,.011,.003],{radial:6}),r)}return{z:3,r:.17,glass:oe(.05,.25,1),hot:oe(.2,.5,1),mid:oe(0,.05,.4)}}var Hf={verdant:iy,ember:ry,tide:sy,storm:oy,void:ay},cy={verdant:7,ember:8,tide:9,storm:10,void:11};function Hi(i,t){let e=Af(i),n=Hf[e.base??e.id]?e.base??e.id:"verdant",r=new ie,s=new ie;s.rotation.x=-Math.PI/2,s.scale.setScalar(mo),s.position.y=nr-3*mo,r.add(s);let o=[],a=[],c=[],l=new Ga,h={B:s,batch:l,rng:Cf(cy[n]),m:Q_(o,a),stat:(A,C,B,it,v)=>l.add(A,C,B,it,v),mesh:(A,C,B)=>{let it=new Tt(A,C);return B&&it.position.set(...B),s.add(it),it},inst:(A,C,B)=>{let it=new ds(A,C,B);return it.frustumCulled=!1,s.add(it),it},anim:A=>{c.push(A)}},u=Hf[n](h);l.build(s);let d=new zt(e.gem),m=e.tint?new zt(e.tint):null,g=new Ee({color:m?u.glass.clone().lerp(d,.6):u.glass,emissive:d,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),_=new Tt(new rn(u.r*mo,20,14),g);_.position.y=nr+(u.z-3)*mo,_.renderOrder=1,r.add(_);let f=h.m.core(m?u.hot.clone().lerp(d,.7):u.hot,m?u.mid.clone().lerp(d,.5):u.mid,6),p=new Tt(new rn(u.r*mo*.6,14,10),f);_.add(p);let y=f.emissiveIntensity;if(c.push(A=>{if(u.style==="flicker"){let C=Math.abs(Math.sin(A*.9)*Math.sin(A*.37+1.1));p.scale.setScalar(1+.1*C),f.emissiveIntensity=y*(.55+.45*C)*1.6}else p.scale.setScalar(1+.05*Math.sin(A*.1309))}),o.splice(o.indexOf(f),1),m)for(let A of[...o,...a])A.color.lerp(m,.55),A.emissive.getHex()!==0&&A.emissive.lerp(m,.7);let x=new Qn(new Bn({map:t,color:d.getHex(),blending:Qe,depthWrite:!1,transparent:!0,opacity:.5}));x.scale.setScalar(.45),x.position.y=_.position.y,r.add(x);let M=Math.random()*20,L=(A,C)=>{M+=A*(1+C*1.5);let B=M*24;for(let it of c)it(B,A)};return L(0,0),{group:r,gem:_,gemMat:g,glow:x,color:d,materials:o,update(A,C,B){L(C,B)}}}var sn=i=>new zt(i),qe={robe:sn(5979790),robeDeep:sn(4270443),trim:sn(8677055),dress:sn(1906980),dressHi:sn(2893366),lining:sn(4865358),skin:sn(15259346),hair:sn(11773126),hairDark:sn(8351894),hat:sn(5519749),hatBand:sn(8020144),boot:sn(2367531),belt:sn(2761011),moon:sn(15129784),lips:sn(5911888),eye:sn(1709088)};function Nn(i,t,e,n,r=!1){let s=[],o=[],a=(u,d)=>e(r?u%i/i:u/i,d/t),c=(u,d)=>n(r?(u%i+i)%i/i:u/i,d/t),l=(u,d,m)=>{let g=c((u[0]+d[0]+m[0])/3,(u[1]+d[1]+m[1])/3);for(let[_,f]of[u,d,m])s.push(...a(_,f)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let d=0;d<i;d++)l([d,u],[d,u+1],[d+1,u+1]),l([d,u],[d+1,u+1],[d+1,u]);let h=new ye;return h.setAttribute("position",new se(s,3)),h.setAttribute("color",new se(o,3)),h.computeVertexNormals(),h}function Lh(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new R(...i[Math.min(s-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return Nn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}var Gn=i=>1-Math.abs((i%1+1)%1*2-1),Fi=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),vs={w:.087,h:.126,d:.108},li=(i,t)=>Math.exp(-(i*i)/(t*t)),Ff=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function ly(){let i=new rn(1,28,22),t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++){let r=t.getX(n),s=t.getY(n),o=t.getZ(n),a=Math.max(0,o),c=r*vs.w,l=s*vs.h,h=o*vs.d;if(s<0){let d=-s;c*=1-.55*d**1.25,h*=1-.12*d,l*=1+.08*d}c*=1+.04*li(s+.02,.22)*a,s>.2&&(c*=1-.1*(s-.2));for(let d of[-1,1])h-=.008*li(r-d*.38,.2)*li(s-.06,.13)*a;h+=.006*li(s-.3,.07)*li(r,.5)*a;let u=li(r,.1)*a*Ff(.2,-.2,s)*Ff(-.38,-.26,s);h+=.017*u,h+=.005*li(r,.24)*li(s+.5,.07)*a,h-=.004*li(r,.3)*li(s+.38,.05)*a,o<0&&(h*=1.06),t.setXYZ(n,c,l,h),o>.05?e.setXY(n,.5+r*.5,.5+s*.5):e.setXY(n,.02,.97)}return i.computeVertexNormals(),i}function hy(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=(h,u)=>[(.5+h*.5)*512,(.5-u*.5)*512];e.fillStyle="#e9d7d3",e.fillRect(0,0,512,512);let r=(h,u,d,m,g,_)=>{let[f,p]=n(h,u),y=d*512*.5;e.save(),e.translate(f,p),e.scale(1,m/d);let x=e.createRadialGradient(0,0,0,0,0,y);x.addColorStop(0,g.replace("A",String(_))),x.addColorStop(1,g.replace("A","0")),e.fillStyle=x,e.beginPath(),e.arc(0,0,y,0,Math.PI*2),e.fill(),e.restore()};for(let h of[-1,1])r(h*.62,-.18,.22,.3,"rgba(150,110,130,A)",.28),r(h*.42,-.2,.16,.1,"rgba(220,140,150,A)",.22);r(0,-.72,.3,.12,"rgba(140,100,120,A)",.25);for(let h of[-1,1]){let u=h*.38,d=.06;r(u,d+.06,.28,.12,"rgba(120,85,140,A)",.55);let[m,g]=n(u,d),_=.21*512*.5,f=.082*512*.5;e.save(),e.translate(m,g),e.scale(h,1),e.beginPath(),e.moveTo(-_,0),e.quadraticCurveTo(-_*.1,-f*1.1,_,-f*.15),e.quadraticCurveTo(_*.2,f*1.05,-_,0),e.closePath(),e.fillStyle="#efe9f2",e.fill(),e.save(),e.clip(),e.fillStyle="#4a3a5c",e.beginPath(),e.arc(-_*.12,f*.12,f*1.05,0,Math.PI*2),e.fill(),e.fillStyle="#1a1220",e.beginPath(),e.arc(-_*.12,f*.12,f*.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(-_*.28,-f*.25,f*.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,40,70,.55)",e.fillRect(-_,-f*1.2,_*2,f*.55),e.restore(),e.strokeStyle="#1c1420",e.lineCap="round",e.lineWidth=512*.01,e.beginPath(),e.moveTo(-_*1.02,.02*f),e.quadraticCurveTo(-_*.1,-f*1.15,_*1.12,-f*.35),e.stroke(),e.lineWidth=512*.006;for(let p=0;p<4;p++){let y=.55+p*.15;e.beginPath(),e.moveTo(_*(y*2-1),-f*(.95-p*.15)),e.lineTo(_*(y*2-1)+_*.18,-f*(1.35-p*.12)),e.stroke()}e.strokeStyle="rgba(90,60,90,.55)",e.lineWidth=512*.004,e.beginPath(),e.moveTo(-_*.9,-f*.9),e.quadraticCurveTo(0,-f*2,_*.95,-f*1),e.stroke(),e.strokeStyle="rgba(90,60,90,.4)",e.beginPath(),e.moveTo(-_*.6,f*.55),e.quadraticCurveTo(_*.1,f*1.05,_*.85,f*.2),e.stroke(),e.strokeStyle="#4a3a55",e.lineWidth=512*.011,e.beginPath(),e.moveTo(-_*.95,-f*2.7),e.quadraticCurveTo(_*.2,-f*3.4,_*1.15,-f*2.6),e.stroke(),e.restore()}r(.07,-.12,.05,.2,"rgba(160,120,135,A)",.22),e.fillStyle="rgba(110,70,90,.55)";for(let h of[-1,1]){let[u,d]=n(h*.06,-.31);e.beginPath(),e.ellipse(u,d,512*.012,512*.006,0,0,Math.PI*2),e.fill()}let[s,o]=n(0,-.5),a=.25*512*.5,c=.065*512*.5;e.fillStyle="#5b2f50",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s-a*.5,o-c*1.2,s-a*.1,o-c*.9),e.lineTo(s,o-c*.6),e.lineTo(s+a*.1,o-c*.9),e.quadraticCurveTo(s+a*.5,o-c*1.2,s+a,o),e.closePath(),e.fill(),e.fillStyle="#7b4468",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*2,s+a,o),e.closePath(),e.fill(),e.strokeStyle="#3a1c33",e.lineWidth=512*.006,e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*.35,s+a,o),e.stroke(),r(.03,-.535,.05,.02,"rgba(255,220,235,A)",.4);let l=new Pn(t);return l.colorSpace=Je,l.anisotropy=4,l}function Of(i,t,e){let n=[],r=(X,I={})=>{let S=new Ee({color:I.vc?16777215:X,vertexColors:!!I.vc,metalness:I.metal??.04,roughness:I.rough??.82,flatShading:!0,emissive:I.emissive??0,transparent:!0,side:I.double?Re:An});return n.push({mat:S,color:S.color.clone(),emissive:S.emissive.clone()}),S},s=r(16777215,{vc:!0,double:!0}),o=r(qe.skin,{rough:.7}),a=r(qe.eye,{rough:.5}),c=r(qe.moon,{metal:.35,rough:.35,emissive:2761744}),l=(X,I,S,T=[0,0,0])=>{let O=new Tt(X,I);return O.position.set(...T),S.add(O),O},h=i==="ally"?sn(3111524):qe.robe,u=i==="ally"?sn(2184517):qe.robeDeep,d=i==="ally"?sn(6076568):qe.trim,m=new ie,g=new ie;m.add(g);for(let X of[-1,1]){let I=X*.075;l(Lh([[I,.98,0],[I*1.05,.62,.01],[I*1.1,.3,0],[I*1.1,.13,-.01]],T=>.068-.03*T,7,()=>qe.boot),s,g);let S=Nn(6,2,(T,O)=>{let G=T*Math.PI*2,F=O,N=-.05+F*.2,W=.13-F*.11,Z=.045*(1-.65*F*F);return[I+Math.cos(G)*Z,W+Math.sin(G)*Z*.55,N]},()=>qe.boot,!0);l(S,s,g),l(new ze(.012,.006,.12,5),a,g,[I,.06,-.045])}let _=Nn(14,8,(X,I)=>{let S=I<.25?.02:.02+(I-.25)*.55,T=S+X*(Math.PI*2-2*S),O=1.1-I*.82-(X>.35&&X<.65?0:.04*I)+.03*Gn(X*7)*I,G=.165+.15*I**1.2;return[Math.sin(T)*G,O,Math.cos(T)*G*.82]},(X,I)=>Fi(qe.dress,qe.dressHi,.6*Gn(X*7)*I));l(_,s,g),l(Nn(4,4,(X,I)=>{let S=-.35+X*.7,T=.15+.09*I;return[Math.sin(S)*T,.86-I*.6,Math.cos(S)*T*.62-.02]},()=>qe.lining),s,g);let f=Nn(10,5,(X,I)=>{let S=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.1],[1.67,.052]],T=I*(S.length-1),O=Math.min(S.length-2,Math.floor(T)),G=T-O,F=S[O][0]+(S[O+1][0]-S[O][0])*G,N=S[O][1]+(S[O+1][1]-S[O][1])*G,W=X*Math.PI*2;return[Math.sin(W)*N*1.08,F,Math.cos(W)*N*.78]},(X,I)=>Fi(qe.dress,qe.dressHi,I>.8?.5:.15*Gn(X*4)),!0);l(f,s,g),l(Nn(14,1,(X,I)=>{let S=X*Math.PI*2,T=.172+.006*I;return[Math.sin(S)*T*1.08,1.04+I*.11,Math.cos(S)*T*.82]},()=>qe.belt,!0),s,g);let p=(X,I)=>{let S=new oo;S.absarc(0,0,X,Math.PI*.18,Math.PI*1.82,!1),S.absarc(X*.38,0,X*.78,Math.PI*1.7,Math.PI*.3,!0);let T=new Na(S,{depth:I,bevelEnabled:!0,bevelThickness:I*.4,bevelSize:X*.08,bevelSegments:1,curveSegments:6});return T.center(),T};l(new ti(.05,.012,4,10),c,g,[0,1.095,.152]).scale.set(1,.85,.6),l(p(.042,.012),c,g,[0,1.095,.162]).rotation.z=.5;let x=9,M=Nn(28,14,(X,I)=>{let S=.36+.48*I**1.2,T=S+X*(Math.PI*2-2*S),O=.07+.16*Gn(X*x+.5)+(X<.06||X>.94?.08:0),G=.14,F,N,W;if(I<G){let Z=I/G;F=1.61-.14*Z**.8,N=.1+.155*Z**.7,W=.72}else{let Z=(I-G)/(1-G);F=1.47-Z*(1.47-O),N=.255+.25*Z**1.3,W=.72+.22*Z}return N*=1+.07*Math.sin(T*8)*Math.max(0,I-G),[Math.sin(T)*N*(1.12-.1*I),F,Math.cos(T)*N*W-.03*I]},(X,I)=>{let S=I>.89||X<.03||X>.97,T=Fi(h,u,.35*Gn(X*8+.25)+(X>.3&&X<.7?.15:0));return S?d:T});l(M,s,g),l(Nn(10,2,(X,I)=>{let S=Math.PI*.55+X*Math.PI*.9,T=.105+.045*I;return[Math.sin(S)*T*1.1,1.58+I*.13,Math.cos(S)*T*.85]},(X,I)=>Fi(h,d,I>.6?1:0)),s,g),l(new ze(.045,.055,.12,7),o,g,[0,1.63,0]);let L=new ie;L.position.set(0,1.76,0),g.add(L);let A=r(16777215,{rough:.7});A.map=hy(),A.flatShading=!1,l(ly(),A,L),l(Nn(20,4,(X,I)=>{let S=-Math.PI+X*Math.PI*2,T=Math.abs(S),O=T<.08?.72:T<.95?.6-.42*((T-.08)/.87)**.8:.18-.5*((T-.95)/(Math.PI-.95)),G=Math.PI/2-I*(Math.PI/2-O),F=1.085+.015*Math.sin(S*9);return[Math.sin(S)*Math.cos(G)*vs.w*F,Math.sin(G)*vs.h*F+.004,Math.cos(S)*Math.cos(G)*vs.d*F]},(X,I)=>Fi(qe.hair,qe.hairDark,.15+.4*Gn(X*14)*I),!0),s,L);let C=(X,I)=>Fi(qe.hair,qe.hairDark,.25+.5*Gn(X*9)*(.4+.6*I));l(Nn(18,10,(X,I)=>{let S=Math.PI*.42+X*Math.PI*1.16,T=.1-I*(.95+.14*Gn(X*6+.3)),O=I<.25?.13+I*.28:.2+.05*Math.sin(I*3.1),G=.022*Math.sin(I*15+S*3)*I;return[Math.sin(S)*(O+G)*1.05,T,Math.cos(S)*(O+G)*.85-.02-.05*I]},C),s,L);for(let X of[-1,1])for(let I of[0,1]){let S=X*(.098+I*.03),T=.035-I*.05,O=Array.from({length:8},(G,F)=>{let N=F/7;return[S+X*(.06*N+.025*Math.sin(N*9+I)),.04-N*(.55+.08*I),T+.06*N-.03*Math.sin(N*7)]});l(Lh(O,G=>.035*(1-.6*G)+.008,5,(G,F)=>C(F,G),[1,1,.55]),s,L)}let B=new ie;B.position.set(0,.075,-.005),B.rotation.set(-.12,0,.07),L.add(B),l(Nn(20,3,(X,I)=>{let S=X*Math.PI*2,T=.14+I*.3;return[Math.sin(S)*T,.02-.075*I*I+.012*Math.sin(S*3)*I,Math.cos(S)*T]},(X,I)=>Fi(qe.hat,u,I>.9?.25:.2*Gn(X*5)),!0),s,B),l(Lh([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],X=>.165*(1-X)**1.35+.004,8,(X,I)=>Fi(qe.hat,u,.25*Gn(I*4)+.15*X)),s,B),l(Nn(16,1,(X,I)=>{let S=X*Math.PI*2,T=.168-.006*I;return[Math.sin(S)*T,.025+I*.06,Math.cos(S)*T]},()=>qe.hatBand,!0),s,B);let v=l(p(.04,.012),c,B,[0,.055,.172]);v.rotation.z=.5;let w=(X,I)=>Nn(10,6,(S,T)=>{let O=S*Math.PI*2,G=.065+.15*Math.max(0,(T-.3)/.7)**1.4,F=T<.99?0:.07*Gn(S*4),N=-(T*X)-F,W=I*T*T;return[Math.cos(O)*G,N,Math.sin(O)*G*.9+W]},(S,T)=>T>.85?d:Fi(h,u,.3*Gn(S*3)),!0),tt=new ie;tt.position.set(-.23,1.47,0),tt.rotation.set(.05,0,.12),g.add(tt),l(w(.6,.06),s,tt),l(new rn(.042,6,4),o,tt,[0,-.6,.05]).scale.set(.8,1.25,.6);let at=new ie;at.position.set(.23,1.47,.02),at.rotation.z=-.35,g.add(at);let Mt=l(w(.5,0),s,at);Mt.rotation.x=-.5,l(new rn(.044,6,4),o,at,[0,-.43,.24]).scale.set(.85,1.1,.7);let vt=new ie;vt.position.set(0,-.43,.24),vt.rotation.z=.28,at.add(vt);let D=Hi(e,t);D.group.position.y=.3,vt.add(D.group);for(let X of D.materials)n.push({mat:X,color:X.color.clone(),emissive:X.emissive.clone()});let{gem:et,gemMat:k,glow:$}=D;return{root:m,body:g,head:L,arm:at,staffPivot:vt,crystal:et,crystalMat:k,glow:$,staff:D,height:2,materials:n}}var uy={me:4020950,opp:12728908,ally:3121012};function Bf(i,t,e,n){if(i==="witch")return Of(t,e,n);let r=[],s=(tt,st={})=>{let at=new Ee({color:tt,metalness:st.metal??.05,roughness:st.rough??.8,flatShading:!0,emissive:st.emissive??0,emissiveIntensity:st.ei??1,transparent:!0});return r.push({mat:at,color:at.color.clone(),emissive:at.emissive.clone()}),at},o=(tt,st,at=0,Mt=0,ht=0)=>{let vt=new Tt(tt,st);return vt.position.set(at,Mt,ht),vt},c=i==="goblin"||i==="kid"?.78:1,l=s(i==="goblin"?7323466:15778970),h=s(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:uy[t],d=s(u),m=s(16766073,{metal:.2,rough:.4}),g=s(12897496,{metal:.3,rough:.45}),_=new ie,f=new ie;if(_.add(f),i==="wizard")f.add(o(new ze(.27,.46,1,9),d,0,.5,0)),f.add(o(new ze(.47,.47,.05,9),m,0,.03,0));else{let tt=i==="knight"?g:h;f.add(o(new ze(.09,.08,.6,6),tt,-.12,.3,0)),f.add(o(new ze(.09,.08,.6,6),tt,.12,.3,0)),f.add(o(new dn(.16,.08,.26),h,-.12,.04,.05)),f.add(o(new dn(.16,.08,.26),h,.12,.04,.05)),f.add(o(new ze(.3,.34,.32,8),d,0,.72,0))}let p=i==="knight"?g:d;if(f.add(o(new ze(.24,.29,.55,8),p,0,1.12,0)),f.add(o(new ti(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let tt=o(new dn(.34,.6,.04),d,0,1,.27);f.add(tt),f.add(o(new rn(.13,6,4),g,-.3,1.36,0)),f.add(o(new rn(.13,6,4),g,.3,1.36,0))}i==="human"&&f.add(o(new dn(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let y=new ie;y.position.set(0,1.58,0),f.add(y),y.add(o(new nn(.2,1),l));for(let tt of[-.07,.07])y.add(o(new rn(.028,6,4),h,tt,.02,.18));if(i==="wizard"){let tt=s(15658740);y.add(o(new jn(.17,.42,7),tt,0,-.2,.1).rotateX(Math.PI)),y.add(o(new dn(.4,.34,.14),tt,0,-.06,-.13)),y.add(o(new ze(.36,.36,.04,12),d,0,.15,0));let st=o(new jn(.24,.62,9),d,0,.47,0);st.rotation.z=.12,y.add(st),y.add(o(new ti(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let tt of[-1,1]){let st=o(new jn(.07,.34,5),l,tt*.24,.05,0);st.rotation.z=-tt*1.25,y.add(st)}y.add(o(new jn(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")y.add(o(new nn(.235,1),g)),y.add(o(new dn(.3,.05,.05),h,0,.02,.21)),y.add(o(new jn(.06,.4,6),s(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")y.add(o(new dn(.38,.2,.12),s(5913122),0,-.02,-.13)),y.add(o(new rn(.215,10,6,0,Math.PI*2,0,Math.PI/2),s(4029400),0,.03,0)),y.add(o(new dn(.2,.025,.16),s(4029400),0,.05,.2));else if(i==="human"){let tt=s(5913122);y.add(o(new rn(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),tt,0,.02,-.01)),y.add(o(new dn(.4,.22,.12),tt,0,-.04,-.13))}let x=i==="knight"?g:d,M=new ie;M.position.set(-.3,1.34,0),M.rotation.z=.25,f.add(M),M.add(o(new ze(.075,.1,.55,6),x,0,-.27,0)),M.add(o(new rn(.07,6,4),l,0,-.58,0));let L=new ie;L.position.set(.3,1.34,.02),L.rotation.z=-.35,f.add(L),L.add(o(new ze(.075,.1,.5,6),x,0,-.22,.05).rotateX(-.5));let A=o(new rn(.07,6,4),l,0,-.42,.22);L.add(A);let C=new ie;C.position.set(0,-.42,.22),C.rotation.z=.28,L.add(C);let B=Hi(n,e);B.group.position.y=.3,C.add(B.group);for(let tt of B.materials)r.push({mat:tt,color:tt.color.clone(),emissive:tt.emissive.clone()});let{gem:it,gemMat:v,glow:w}=B;return _.scale.setScalar(c),{root:_,body:f,head:y,arm:L,staffPivot:C,crystal:it,crystalMat:v,glow:w,staff:B,height:1.95*c,materials:r}}function Uh(i){return["wizard","witch","goblin","knight","kid","human"].find(t=>t===i)??"wizard"}function fy(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Pn(i);return n.colorSpace=Je,n}function zf(i){let t;try{t=new us({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=uo,t.setClearColor(0,0);let e=new fs;e.add(new gs(14673663,2760768,1.4));let n=new Di(16777215,2.2);n.position.set(2,3,4),e.add(n);let r=new Di(10456319,2);r.position.set(-3,2,-3),e.add(r);let s=new ni(16777215,3,3,2);e.add(s);let o=new ln(30,1,.1,50),a=fy(),c=new ie;c.rotation.z=.12,e.add(c);let l=null,h="";function u(y){return l&&h===y||(l&&(c.remove(l.group),l.group.traverse(x=>x.geometry?.dispose?.())),l=Hi(y,a),h=y,c.add(l.group),s.color.copy(l.color),s.position.set(.3,nr+.2,.6)),l}function d(){let y=i.clientWidth||300,x=i.clientHeight||420;t.setSize(y,x,!1),o.aspect=y/x;let M=1.55/Math.tan(_s.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,M),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,f=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(y){if(!f()){m=0;return}m=requestAnimationFrame(p);let x=Math.min(.05,(y-g)/1e3);g=y,_+=x,l&&(c.rotation.y+=x*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=x*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,x,.25),t.render(e,o))}return{show(y){u(y),d(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(y,x,M){let L=[],A=h,C=c.rotation.y,B=c.position.y;t.setPixelRatio(1),t.setSize(x,M,!1),o.aspect=x/M,o.position.set(.35,nr+.12,1.6),o.lookAt(0,nr-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let it of y)u(it).update(1.2,0,0),t.render(e,o),L.push(i.toDataURL("image/png"));return c.rotation.y=C,c.position.y=B,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),A&&u(A),d(),L},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function un(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,r)=>n+(r-n)*e(),int:(n,r)=>n+Math.floor(e()*(r-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var Ot=i=>i<0?0:i>1?1:i,xe=(i,t,e)=>{let n=Ot((e-i)/(t-i));return n*n*(3-2*n)},Kf=(i,t,e)=>i+(t-i)*e,Zt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],de=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],ir=(i,t)=>1-Math.exp(-i*t),yo=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},le=i=>i*Math.PI/180;function pn(i,t){let e=le(i),n=le(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function Jf(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return Zt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var qa=(()=>{let i=un(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function Ie(i,t){let e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,d=qa[h+c],m=qa[h+l],g=qa[u+c],_=qa[u+l];return(d*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var kf=Math.cos(.55),Vf=Math.sin(.55);function We(i,t,e=5,n=2.03,r=.5){let s=0,o=1,a=0;for(let c=0;c<e;c++){s+=o*Ie(i+17.3*c,t-9.1*c),a+=o;let l=(i*kf-t*Vf)*n,h=(i*Vf+t*kf)*n;i=l,t=h,o*=r}return s/a}var Gf=Math.cos(.7),Wf=Math.sin(.7);function Qf(i,t,e=5,n=2.1,r=.52){let s=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*Ie(i+31.7*l,t+5.3*l)-1);h=h*h*c,s+=h*o,a+=o,c=Ot(h*2);let u=(i*Gf-t*Wf)*n,d=(i*Wf+t*Gf)*n;i=u,t=d,o*=r}return s/a}var Xf=new Map;function dy(i,t,e){let n=`${t}:${e}`,r=Xf.get(n);if(!r){let l=un(e*977+t);r=new Float32Array(t);for(let h=0;h<t;h++)r[h]=l.random();Xf.set(n,r)}let s=i*t,o=Math.floor(s),a=s-o,c=a*a*(3-2*a);return r[(o%t+t)%t]*(1-c)+r[((o+1)%t+t)%t]*c}function qf(i,t=5,e=3,n=1,r=.5){let s=0,o=1,a=0;for(let c=0;c<t;c++)s+=o*dy(i,e*2**c,n+c),a+=o,o*=r;return s/a}function Oi(i,t){let e=i.stops;return(n,r,s)=>{let o=Math.asin(Math.max(-1,Math.min(1,s)))*180/Math.PI,a=Jf(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+r*l[1]+s*l[2])));for(let[u,d,m]of i.glow){let g=Math.exp(-h/u)*d*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-r*l[1]+s*l[2]))),d=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=d*i.anti_col[0],a[1]+=d*i.anti_col[1],a[2]+=d*i.anti_col[2]}}return a}}var bs=(i,t)=>Math.round(255*Math.pow(Ot(ir(i,t)),1/2.2));function Hh(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function Fh(i,t=!1){let e=new Pn(i);return e.colorSpace=Je,t?e.wrapS=e.wrapT=Ai:e.wrapS=Mr,e.anisotropy=2,e}function py(i,t,e){let n=t/2,{c:r,g:s,img:o}=Hh(t,n),a=Oi(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??de(i.far2,.8),d=[],m=h.map(()=>[]);for(let M=0;M<t;M++){let L=(M+.5)/t,A=L*2*Math.PI;d.push(a(Math.cos(A)*Math.cos(.012),Math.sin(A)*Math.cos(.012),Math.sin(.012)));let C=1;for(let B of e.notchAz){let it=Math.abs(yo(A,le(B)));C*=1-.85*Math.exp(-((it/le(20))**2))}h.forEach(([B,it,v],w)=>{if(e.ridgeKind==="trees"){m[w].push(B+it*qf(L,6,18,v,.62)**1.5);return}let tt=1-Math.abs(2*qf(L,7,4,v,.56)-1);m[w].push((B+it*tt**1.3)*(.35+.65*C))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),f=null,p=[0,0,0],y=[0,0,0];if((i.milky??0)>0){let M=new R(.25,-.55,.8).normalize(),L=M.clone().cross(new R(0,0,1)).normalize(),A=M.clone().cross(L);f=[M.x,M.y,M.z],p=[L.x,L.y,L.z],y=[A.x,A.y,A.z]}for(let M=0;M<n;M++){let L=((M+.5)/n-.5)*Math.PI,A=Math.cos(L),C=Math.sin(L),B=n-1-M;for(let it=0;it<t;it++){let v=(it+.5)/t*2*Math.PI,w=A*Math.cos(v),tt=A*Math.sin(v),st=C,at=a(w,tt,st);if(f&&L>0){let D=Math.asin(Math.max(-1,Math.min(1,w*f[0]+tt*f[1]+st*f[2]))),et=Math.atan2(w*y[0]+tt*y[1]+st*y[2],w*p[0]+tt*p[1]+st*p[2]),k=3*Math.cos(et),$=3*Math.sin(et),X=We(k+9*D,$+4*D,4),I=xe(.5,.75,We(k*1.7+17+14*D,$*1.7-5+6*D,3)),S=Math.exp(-((D/(i.milky_w??.2))**2))*(.25+1.3*X)*(1-.65*I)*i.milky,T=i.milky_col??[.55,.58,.85];at=[at[0]+S*T[0],at[1]+S*T[1],at[2]+S*T[2]]}let Mt=0;h.forEach(([,,,D,et],k)=>{let $=Ot((m[k][it]-L)/l+.5);if($<=0)return;let X=d[it],I=Zt(et,X,D),S=Zt(I,X,Math.exp(-Math.max(L,0)/.025)*.55);at=Zt(at,S,$),Mt=Math.max(Mt,$)});let ht=Ot(-L/l+.5);ht>0&&(at=Zt(at,u,ht));let vt=(B*t+it)*4;o.data[vt]=bs(at[0],c),o.data[vt+1]=bs(at[1],c),o.data[vt+2]=bs(at[2],c),o.data[vt+3]=255,g[B*t+it]=Mt,_[B*t+it]=(o.data[vt]+o.data[vt+1]+o.data[vt+2])/765}}let x=(i.stars??0)>0?my(t,n,i.star_n,i.stars,g,_):null;return s.putImageData(o,0,0),{tex:Fh(r),stars:x}}function my(i,t,e,n,r,s){let o=un(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let d=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(d),_=Math.floor(m/(2*Math.PI)*i)%i,f=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-f,y=(1-r[p*i+_])*Ot(1-s[p*i+_]*3),x=o.random()**6,M=a[o.int(0,3)];if(y<=.01)continue;let L=Math.min(1.6,(.1+.95*x)*n*y*2.2),A=140;c.push(A*Math.cos(g)*Math.cos(m),A*Math.cos(g)*Math.sin(m),A*Math.sin(g)),l.push(M[0]*L,M[1]*L,M[2]*L),h.push(1+x*2.5)}return{pos:c,col:l,size:h}}function gy(i,t,e){let n=t/2,{c:r,g:s,img:o}=Hh(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let d=0;d<n;d++){let m=((d+.5)/n-.5)*Math.PI,g=n-1-d;if(m<.02)continue;let _=Math.cos(m),f=Math.sin(m),p=1/(f+.16),y=c<50?xe(.02,.1,m)*(1-xe(c*.6,c,m)):xe(.02,.16,m);if(!(y<=0))for(let x=0;x<t;x++){let M=(x+.5)/t*2*Math.PI,L=_*Math.cos(M),A=_*Math.sin(M),C=L*p*i.cloud_scale,B=A*p*i.cloud_scale,it=We(C*.6+9,B*.6+2,3)-.5,v=C+it*1.4,w=B+it*1.1,tt=We(v,w,5),st=xe(i.cov0,i.cov1,tt);if(st<=.002)continue;let at=We(v+h,w+u,5),Mt=Ot(.55-(at-tt)*3.4)*(1-.4*st),ht=Math.exp(-Math.acos(Math.max(-1,Math.min(1,L*e[0]+A*e[1]+f*e[2])))/1.1),vt=Zt(i.cloud_lit_far,i.cloud_lit_near,ht),D=de(i.cloud_shadow,.6+.4*ht),et=Zt(D,vt,Mt),k=st*(1-st)*4*ht*.6,$=(g*t+x)*4;o.data[$]=bs(et[0]+k*i.cloud_rim[0],a),o.data[$+1]=bs(et[1]+k*i.cloud_rim[1],a),o.data[$+2]=bs(et[2]+k*i.cloud_rim[2],a),o.data[$+3]=Math.round(255*st*y*i.cloud_opacity)}}return s.putImageData(o,0,0),Fh(r)}function _y(i,t,e={}){let n=e.span??1.4,{c:r,g:s,img:o}=Hh(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(d,m),_=Ot((1-g)/(n*2/t)+.5),f=Math.sqrt(Ot(1-g*g)),p=0;for(let[A,C]of e.rings??[])p=Math.max(p,C*(1-xe(A-.1,A,g)));let y;if(i==="sun")y=Zt(e.sunInner??[1,.62,.25],a,Math.pow(f,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let A=Ot(d*l[0]+m*l[1]+f*l[2]),C=xe(.5,.6,We(d*1.9+4,m*1.9-2,5))*.42,B=xe(.62,.8,Ie(d*14,m*14))*.12,it=(.04+A**.8)*(.6+.4*f)*(.9-C-B)*(e.moonGain??1.55);y=de(a,it),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-xe(n*.86,n,g);let x=_+(1-_)*p,M=x>1e-4?[0,1,2].map(A=>(_*y[A]+(1-_)*p*c[A])/x):[0,0,0],L=(h*t+u)*4;o.data[L]=Math.round(255*Math.pow(Ot(M[0]),1/2.2)),o.data[L+1]=Math.round(255*Math.pow(Ot(M[1]),1/2.2)),o.data[L+2]=Math.round(255*Math.pow(Ot(M[2]),1/2.2)),o.data[L+3]=Math.round(255*Ot(x))}return s.putImageData(o,0,0),Fh(r,!0)}var Jt=class{constructor(t=!1,e=0){Fe(this,"alpha",t);Fe(this,"pos",[]);Fe(this,"col",[]);Fe(this,"idx",[]);Fe(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((r,s)=>{let o=n?.[s];r.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new ye;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("color",new se(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new se(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function pe(i={}){let t=new ps({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Re:An}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var hi=(i={})=>{let t=new Ke({vertexColors:!0,side:Re,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?Qe:ai,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},Sn=(i,t=1)=>new Ke({color:new zt(i[0]*t,i[1]*t,i[2]*t),side:Re,toneMapped:!1});function Yf(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),r.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;s.push(l,h,l+1,h,h+1,l+1)}let o=new ye;return o.setAttribute("position",new se(n,3)),o.setAttribute("uv",new se(r,2)),o.setIndex(s),o}var Dh=(i,t=!1)=>new Ke({map:i,side:Re,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function Zf(i,t){let e=new Jt,n=(r,s,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[d,m,g,_]of[[r,0,s,s],[0,r,-s,s],[-r,0,-s,-s],[0,-r,s,-s]])h.push(e.v([d*c-m*l,d*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let d=0;d<8;d++)e.f(u,h[d],h[(d+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function ui(i){let t=new ie,e=[],n=py(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),r=n.tex,s=new Tt(Yf(150,48,24),Dh(r));if(s.renderOrder=-10,s.frustumCulled=!1,t.add(s),e.push(r,s.geometry,s.material),n.stars&&n.stars.pos.length){let x=new ye;x.setAttribute("position",new se(n.stars.pos,3)),x.setAttribute("color",new se(n.stars.col,3)),x.setAttribute("size",new se(n.stars.size,1));let M=new Cn({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:Qe}),L=new tr(x,M);L.renderOrder=-9.5,L.frustumCulled=!1,t.add(L),e.push(x,M)}let o=null;if(i.clouds!==!1){let x=gy(i.th,Math.min(1024,i.W),i.bodies[0]);o=new Tt(Yf(138,48,24),Dh(x,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(x,o.geometry,o.material)}let a=i.body.span??1.4,c=_y(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=Dh(c,!0);e.push(c,l);for(let x of i.bodies){let L=146*Math.tan(i.body.r)*a,A=new R(...x),C=A.clone().cross(new R(0,0,1));C.lengthSq()<1e-8&&(C=new R(1,0,0)),C.normalize();let B=C.clone().cross(A).normalize(),it=A.clone().multiplyScalar(146),v=new ye,w=[it.clone().addScaledVector(C,-L).addScaledVector(B,-L),it.clone().addScaledVector(C,L).addScaledVector(B,-L),it.clone().addScaledVector(C,L).addScaledVector(B,L),it.clone().addScaledVector(C,-L).addScaledVector(B,L)];v.setAttribute("position",new se(w.flatMap(st=>[st.x,st.y,st.z]),3)),v.setAttribute("uv",new se([0,0,1,0,1,1,0,1],2)),v.setIndex([0,1,2,0,2,3]);let tt=new Tt(v,l);tt.renderOrder=-8,tt.frustumCulled=!1,t.add(tt),e.push(v)}let h=un(i.seed??21),u=[],d=Math.round(i.sparkles*(i.bigShare??.27)),m=new Ke({color:new zt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Re}),g=new Ke({color:new zt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Re}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},f=Zf(..._.big),p=Zf(..._.small);e.push(m,g,f,p);for(let x=0;x<i.sparkles;x++){let M=x<d,L=h.uniform(0,360),A=h.uniform(..._.el??[35,88]),C=pn(L,A);i.bodies.concat([pn(i.th.body_az+180,i.th.body_el)]).some(w=>C[0]*w[0]+C[1]*w[1]+C[2]*w[2]>Math.cos(le(24)))&&(L+=45);let B=pn(L,A).map(w=>w*135),it=new Tt(M?f:p,M?m:g);it.position.set(...B),it.lookAt(0,0,0),it.renderOrder=-7,t.add(it);let v=M?24:12;u.push({m:it,big:M,pulses:Array.from({length:v},(w,tt)=>Math.round((tt+.5)*3600/v+h.int(-15,15)))})}let y=null;return{group:t,envMap(){if(y)return y;let x=r.image,M=document.createElement("canvas");M.width=x.width,M.height=x.height;let L=M.getContext("2d");return L.translate(M.width*.5,0),L.scale(-1,1),L.drawImage(x,0,0),L.drawImage(x,-x.width,0),y=new Pn(M),y.colorSpace=Je,y.mapping=Ks,e.push(y),y},update(x){o&&(o.rotation.z=x%3600/3600*Math.PI*2);let M=x%3600;for(let L of u){let A=1;for(let C of L.pulses){if(M<C-18||M>C+14)continue;let B=[[C-18,1],[C-9,L.big?1.35:1.2],[C,L.big?.2:.35],[C+14,1]];for(let it=0;it<3;it++)if(M>=B[it][0]&&M<=B[it+1][0]){let v=(M-B[it][0])/(B[it+1][0]-B[it][0]);A=Kf(B[it][1],B[it+1][1],v*v*(3-2*v))}}L.m.scale.setScalar(A)}},dispose(){for(let x of e)x.dispose()}}}function mn(i,t,e=0,n=1,r=0){let s=Math.floor(i/t),o=(i-s*t)/t,a=o*o*(3-2*o),c=(s+r)%2?n:e,l=(s+r)%2?e:n;return Kf(c,l,a)}var jf=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function Es(i,t,e,n){let r=new Jt,s=[];for(let o of i){if(o===0){let c=r.v([0,0,e(0,0)],n(0,0));s.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(r.v([h,u,e(h,u)],n(h,u)))}s.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?r.f(s[0][0],s[1][a],s[1][c]):r.f(s[o][a],s[o][c],s[o-1][c],s[o-1][a])}return r.geo()}function yy(i,t,e,n,r=0){let s=.6+.4*Ot(t)**.7,o=de(i,s*(.88+.24*e));return Zt(o,n,Ot(Ot(1-t*3)*.55+r*.75))}function fi(i,t,e,n,r,s,o=!0){let a=Ie(e*2.5+r,n*2.5+r),c=o?Ot((Ie(e*.7+r,n*.7-r)-.5)*2.5):0;return yy(i,t,a,s,c)}function Nh(i,t,e,n,r,s,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],s([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],s([o[0],o[1],e+n],1));for(let g=0;g<r;g++){let _=2*Math.PI*g/r,f=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(f,s(f,0))),l.push(i.v(p,s(p,1)))}let d=[],m=[];for(let g=0;g<r;g++)d.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<r;g++){let _=(g+1)%r;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(d[g],d[_],m[_],m[g])}}function xy(i,t,e,n,r,s,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,r-=h/2,t+=l/2,e-=l/2;let u=(g,_,f)=>[g*Math.cos(_),g*Math.sin(_),f],d=g=>i.v(g,a(g,(g[2]-s)/o)),m=(g,_,f,p)=>i.f(d(g),d(_),d(f),d(p));for(let g=0;g<c;g++){let _=n+(r-n)*g/c,f=n+(r-n)*(g+1)/c;m(u(t,_,s+o),u(e,_,s+o),u(e,f,s+o),u(t,f,s+o)),m(u(e,_,s+o),u(e,_,s),u(e,f,s),u(e,f,s+o)),m(u(t,f,s+o),u(t,f,s),u(t,_,s),u(t,_,s+o))}m(u(t,n,s+o),u(t,n,s),u(e,n,s),u(e,n,s+o)),m(u(e,r,s+o),u(e,r,s),u(t,r,s),u(t,r,s+o))}function _o(i,t,e,n,r=[1,1,1]){let s=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],d=h[1]-l[1],m=Math.hypot(u,d)||1,g=-d/m,_=u/m;s.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],r)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],r))});for(let a=0;a<t.length-1;a++)i.f(s[a],o[a],o[a+1],s[a+1])}var Za=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function My(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(le(n)),.4+.4*Math.sin(le(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(le(n)),-.4+.4*Math.sin(le(n))]);return[[...t,...e]]}return i===1?[Za(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],Za(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function $f(i,t,e,n,r,s,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let d of My(t))_o(i,d.map(([m,g])=>[h+r*(m*c-g*l),u+r*(m*l+g*c)]),o,s)}function rr(i){let{th:t,r:e}=i,n=t.stone,r=new Jt,s=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,f)=>s(fi(m,f,_[0],_[1],g,t.moss,i.patchy??!0),_)};Nh(r,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),Nh(r,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],f)=>{let p=f*.23;for(let y=0;y<_;y++)xy(r,m,g,p+2*Math.PI*y/_,p+2*Math.PI*(y+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new Jt;Nh(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new Jt;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),f=Math.sin(g);_o(l,[[.3*_,.3*f],[2.2*_,2.2*f]],.07,c);for(let p of[-1,1]){let y=g+p*le(35);_o(l,[[1.3*_,1.3*f],[1.3*_+.7*Math.cos(y),1.3*f+.7*Math.sin(y)]],.05,c)}}_o(l,Za(2.3),.06,c),_o(l,Za(6),.05,c);let h=new Jt;for(let m=0;m<8;m++){let g=le(45*m);m===6?$f(h,0,g,7.4,.95,c+.01,.13):$f(h,m%3,g,8.2,.55,c+.01,.09)}let u=new ie;u.add(new Tt(r.geo(),pe())),u.add(new Tt(a.geo(),Sn(i.glowCol,i.glow*1.1)));let d=new Tt(l.geo(),Sn(i.lineCol,i.glow*1.3));return d.name="centre-pattern",u.add(d),u.add(new Tt(h.geo(),Sn(i.runeCol,i.glow*1.6))),u}function Ss(i){let{r:t}=i,e=i.wind??(()=>{let r=new R(.8,.6,0).normalize();return[r.x,r.y,0]})(),n=new Jt(!1,1);for(let r=0;r<i.tufts;r++){let s=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,s))continue;let a=s*Math.cos(o),c=s*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),d=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),f=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],y=[-Math.sin(_),Math.cos(_)],x=i.gh(u,d),M=i.base(s),L=i.tip(s,_),A=Zt(M,L,.55),C=[u,d,x],B=[u+p[0]*f*.3,d+p[1]*f*.3,x+m*.55],it=[u+p[0]*f,d+p[1]*f,x+m],v=(ht,vt)=>{let D=ht[2]-x,et=.32*D*D;return n.v(ht,vt,[[e[0]*et,e[1]*et,0]])},w=v([C[0]-y[0]*g,C[1]-y[1]*g,C[2]],M),tt=v([C[0]+y[0]*g,C[1]+y[1]*g,C[2]],M),st=v([B[0]-y[0]*g*.65,B[1]-y[1]*g*.65,B[2]],A),at=v([B[0]+y[0]*g*.65,B[1]+y[1]*g*.65,B[2]],A),Mt=v(it,L);n.f(w,tt,at,st),n.f(st,at,Mt)}}return n.geo()}function td(i,t,e,n,r,s,o,a){let c=new R(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new R(0,0,1)).normalize(),u=l.clone().cross(h),d=12,m=o*r,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([f,p])=>{let y=(.45+3*a*f**1.6)*n;return Array.from({length:d},(x,M)=>{let L=2*Math.PI*M/d,A=c.clone().multiplyScalar(f).addScaledVector(h,Math.cos(L)*y).addScaledVector(u,Math.sin(L)*y);return i.v([t[0]+A.x,t[1]+A.y,t[2]+A.z],[s[0],s[1],s[2],p*m])})});for(let f=0;f<g.length-1;f++)for(let p=0;p<d;p++){let y=(p+1)%d;i.f(_[f][p],_[f][y],_[f+1][y],_[f+1][p])}}function ws(i,t,e,n,r,s,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[r[0],r[1],r[2],n(0,0)*s]),l=[...o,t].map(h=>Array.from({length:40},(u,d)=>{let m=2*Math.PI*d/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[r[0],r[1],r[2],n(g,_)*s])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let d=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][d],l[h][d])}}var Rr=()=>new Ke({vertexColors:!0,transparent:!0,depthWrite:!1,blending:Qe,side:Re,fog:!1}),Ya=null;function ed(){if(Ya)return Ya;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ya=new Pn(i),Ya}function di(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let r=new Float32Array(i.n*3),s=new ye;s.setAttribute("position",new Pe(r,3));let o=new ji({map:ed(),color:new zt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:Qe,sizeAttenuation:!0,fog:!1}),a=new tr(s,o);a.frustumCulled=!1;let c=l=>{let h=jf(l);for(let u=0;u<i.n;u++){let d=i.twinkle?Math.sin(l*.05+n[u])*.15:0;r[u*3]=t[u][0]+e[u][0]*h+d,r[u*3+1]=t[u][1]+e[u][1]*h,r[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}s.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function $a(i){let t=i.list.length,e=(l,h,u)=>{let d=new Float32Array(t*3),m=new ye;m.setAttribute("position",new Pe(d,3));let g=new ji({map:ed(),color:h,size:l,transparent:!0,depthWrite:!1,blending:Qe,opacity:u,fog:!1}),_=new tr(m,g);return _.frustumCulled=!1,{p:_,pos:d,g:m}},n=i.gain??1,r=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),s=e(2.2*r,new zt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*r,new zt(1,1,1).lerp(new zt(i.col[0],i.col[1],i.col[2]),.3),1),a=new ie;a.add(s.p,o.p);let c=l=>{let h=jf(l);i.list.forEach((u,d)=>{for(let m of[s.pos,o.pos])m[d*3]=u.p[0],m[d*3+1]=u.p[1],m[d*3+2]=u.p[2]+u.amp*h}),s.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function nd(i,t){let{r:e,idx:n,th:r}=t,s=n/2,o=Zt(r.back_lit[0],r.back_lit[1],s),a=Zt(r.back_dark[0],r.back_dark[1],s),c=r.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],d=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(r.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(r.back_w??1),_=e.uniform(0,6.28),f=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(M=>ir(M,r.exposure??1)),y=Math.exp(-((yo(h,t.sunAz)/.5)**2))*(r.back_rim_k??0),x=[];for(let M=0;M<7;M++){let L=M/6,A=-2+(m+2)*L,C=g*(1-.55*L)*(1+.5*Math.exp(-Math.max(A,0)/3)),B=Math.sin(L*4+_)*1.2+f*A,it=[u[0]+d[0]*B,u[1]+d[1]*B,A],v=1-.75*L*L,w=de(o,v),tt=de(a,v);c>0&&(w=Zt(w,p,c*.6*(1-.5*L)),tt=Zt(tt,p,c*.6*(1-.5*L))),y>.01&&(w=Zt(w,r.back_rim,.6*y*(1-L)),tt=Zt(tt,r.back_rim,.6*y*(1-L))),x.push([i.v([it[0]-d[0]*C/2,it[1]-d[1]*C/2,A],w),i.v([it[0]+d[0]*C/2,it[1]+d[1]*C/2,A],tt)])}for(let M=0;M<6;M++)i.f(x[M][0],x[M][1],x[M+1][1],x[M+1][0])}}function Ka(){let i=new Jt,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,r=a=>Jf(e,a),s=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],r(a)))),o=i.v([.07*1.12*1.12,0,1.12],r(1.12));for(let a=0;a<s.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(s[a][c],s[a][l],s[a+1][l],s[a+1][c])}for(let a=0;a<n;a++)i.f(s[s.length-1][a],s[s.length-1][(a+1)%n],o);return i.geo()}function pi(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let r of n)r.dispose()})}function mi(i){let t=(n,r=1,s=.5)=>{let o=(n[0]+n[1]+n[2])/3;return de(Zt([o,o,o],n,s),r)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let r=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(r)&&(e[n]=Array.isArray(r[0])?r.map(s=>t(s)):t(r))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var Oh={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},Ts=78,Bh=[90,270];function id(i,t){let e=i==="night"?Oh.NIGHT:i==="day"?{...mi(Oh.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:Oh.SUNSET,n=e.emit,r=n*.75,s=un(13),o=un(41),a=new ie,c=[pn(e.body_az,e.body_el)],l=Bh.map(I=>[Ts*Math.cos(le(I)),Ts*Math.sin(le(I))]),h=le(e.body_az),u=[Math.cos(h),Math.sin(h)],d=(()=>{let I=new R(.8,.6,0).normalize();return[I.x,I.y,0]})(),m=(I,S,T)=>{let O=(I%360+360)%360;return O>255&&O<285&&S>T},g=e.stone,_=(I,S)=>{let T=Math.hypot(I,S),O=Ot((T-12)/10)*.35*(Math.sin(I*.09)+Math.cos(S*.11)+.5*Math.sin((I+S)*.19));O+=Ot((T-60)/60)*3*Math.sin(I*.05+1)*Math.cos(S*.04);for(let[G,F]of l)O*=xe(22,40,Math.hypot(I-G,S-F));return O},f=(I,S)=>{let T=0;for(let O of Bh){let G=le(O),F=Math.cos(G),N=Math.sin(G),W=I*F+S*N,Z=Math.abs(-I*N+S*F);W>9&&(T=Math.max(T,Math.exp(-((Z/4)**2))*xe(9,16,W)*(1-xe(Ts-10,Ts-2,W))))}return T},p=(I,S)=>{let T=Ot((Math.hypot(I,S)-10)/70)**.8,O=We(I*.06+3,S*.06-7,3);return Zt(de(Zt(e.g_near,e.g_far,T),.75+.5*O),e.g_road,f(I,S)*.8)};a.add(new Tt(Es([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),pe({flat:!1}))),a.add(rr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let y=new Jt,x=(I,S,T,O,G,F)=>{let N=o.uniform(0,50),W=(V,Y)=>fi(G,Y,V[0],V[1],N,e.moss),Z=(V,Y)=>Array.from({length:O},(J,ot)=>{let P=2*Math.PI*ot/O,b=[F[0]+I*Math.cos(P),F[1]+I*Math.sin(P),V];return y.v(b,W(b,Y))}),z=Z(S,0),E=Z(S+T,1),j=Z(S,0),q=Z(S+T,1);for(let V=0;V<O;V++){let Y=(V+1)%O;y.f(j[V],j[Y],q[Y],q[V])}y.f(...E),y.f(...[...z].reverse())},M=[],L=Ka(),A=hi({gain:1.05}),C=[];for(let I of[45,135,225,315]){let S=le(I),T=9.35*Math.cos(S),O=9.35*Math.sin(S);x(.4,.3,1.1,12,g[3],[T,O]),x(.55,1.4,.3,12,g[0],[T,O]);let G=new Tt(L,A);G.position.set(T,O,1.75),a.add(G),M.push({m:G,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),C.push({pos:[T,O,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let B=new Jt,it=new Jt(!1,2),v=(I,S,T,O,G)=>{let F=Math.cos(O),N=Math.sin(O),W=(Z,z,E)=>{let j=Z*T[0],q=z*T[1],V=[S[0]+j*F-q*N,S[1]+j*N+q*F,S[2]+E*T[2]];return I.v(V,G(V))};for(let Z of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])I.f(...Z.map(([z,E,j])=>W(z,E,j)))},w=t?6:10;for(let I=0;I<w;I++){let S=2*Math.PI*(I+o.uniform(-.2,.2))/w,T=o.uniform(14,20),O=T*Math.cos(S),G=T*Math.sin(S),F=_(O,G),N=o.uniform(6,9),W=()=>e.cs_stone;v(B,[O,G,F+(N-.2)/2],[.2,.2,N+.2],Math.PI/4,W);let Z=o.uniform(0,3.14),z=[-Math.sin(Z),Math.cos(Z)],E=[Math.cos(Z),Math.sin(Z)];v(B,[O,G,F+N-.2],[.08,1.3,.08],Z,W);let j=[O,G,F+N-.3],q=(J,ot)=>{let P=.35*Math.sin(1.4*J+ot)*J/5;return[E[0]*P+d[0]*(.15*J)/5,E[1]*P+d[1]*(.15*J)/5,0]},V=Array.from({length:6},(J,ot)=>Array.from({length:3},(P,b)=>it.v([j[0]+z[0]*(b-1)*.6,j[1]+z[1]*(b-1)*.6,j[2]-ot*.6],de(e.banner,1-.35*ot/5),[q(ot,0),q(ot,Math.PI)]))),Y=it.v([j[0],j[1],j[2]-3.6],de(e.banner,.6),[q(6,0),q(6,Math.PI)]);for(let J=0;J<5;J++)for(let ot=0;ot<2;ot++)it.f(V[J][ot],V[J][ot+1],V[J+1][ot+1],V[J+1][ot]);it.f(V[5][0],V[5][1],Y),it.f(V[5][1],V[5][2],Y)}let tt=pe({double:!0,morph:!0}),st=new Tt(it.geo(),tt);st.morphTargetInfluences=[0,0],a.add(new Tt(B.geo(),pe()),st,new Tt(y.geo(),pe()));let at=[];Bh.forEach((I,S)=>{let T=new Jt,O=new Jt,G=new Jt,F=new Jt,N=new Jt,W=new Jt(!1,2),Z=le(I),z=[Ts*Math.cos(Z),Ts*Math.sin(Z),0],E=Z-Math.PI/2,j=Math.cos(E),q=Math.sin(E),V=H=>[z[0]+H[0]*j-H[1]*q,z[1]+H[0]*q+H[1]*j,H[2]],Y=H=>{let K=Ie(H[0]*.8+S*10,H[2]*.8),ct=.6+.4*Ot(H[2]/6);return de(e.cs_stone,ct*(.75+.5*K)*(.8+.4*Ot(H[2]/30)))},J=(H,K,ct,Q)=>{for(let bt of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])H.f(...bt.map(([_t,ft,Lt])=>{let dt=[K[0]+_t*ct[0],K[1]+ft*ct[1],K[2]+Lt*ct[2]];return H.v(V(dt),Q(dt))}))},ot=(H,K,ct,Q,bt)=>{let _t=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([dt,At])=>[H+dt*Q,K+At*Q,ct]),ft=[H,K,ct+bt],Lt=dt=>de(e.cs_roof,.8+.4*Ot((dt[2]-22)/22));for(let dt=0;dt<4;dt++){let At=_t[dt],Bt=_t[(dt+1)%4];O.f(O.v(V(At),Lt(At)),O.v(V(Bt),Lt(Bt)),O.v(V(ft),Lt(ft)))}};J(T,[0,0,6],[40,4,12],Y);for(let H=-18;H<=18;H+=2.6)if(Math.abs(H)>4.6)for(let K of[-1.6,1.6])J(T,[H,K,12.7],[1.4,.8,1.4],Y);for(let H of[-20,20]){J(T,[H,0,11],[8,8,22],Y);for(let K of[12,20])J(T,[H,0,K],[8.6,8.6,.6],Y);ot(H,0,22,4.7,9),J(T,[H,0,31],[.12,.12,9],Y)}J(T,[0,0,17],[7,7,34],Y);for(let H of[13,24])J(T,[0,0,H],[7.6,7.6,.6],Y);ot(0,0,34,4.3,10),J(T,[0,0,46.5],[.12,.12,5],Y);for(let H of[-2.9,2.9])J(T,[H,-3.75,3.8],[.9,.6,7.6],Y);J(T,[0,-3.75,7.7],[6.8,.6,.9],Y),J(F,[0,-3.6,3.6],[4.6,.3,7.2],H=>H[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let H=0;H<7;H++)J(F,[-2.1+.7*H,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let H of[2,4.5,6.8])J(F,[0,-3.85,H],[4.6,.2,.12],()=>[.02,.016,.014]);{let H=Array.from({length:9},(ct,Q)=>[2.3*Math.cos(Math.PI*Q/8),7.2+2.3*Math.sin(Math.PI*Q/8)]);F.f(...H.map(([ct,Q])=>F.v(V([ct,-3.75,Q]),[.006,.005,.008])));let K=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];F.f(...[...K].reverse().map(ct=>F.v(V(ct),[.04,.025,.02])))}for(let H of[9.5,15,20.5,26,31])J(G,[0,-3.62,H],[.8,.3,1.7],()=>[1,1,1]);for(let H of[-20,20])for(let K of[5,10,15,20])J(G,[H,-4.12,K],[.8,.3,1.7],()=>[1,1,1]);for(let H of[-4.3,4.3]){J(T,[H,-3.8,4.2],[.15,.15,1],Y);let K=new nn(.35,1),ct=K.attributes.position;for(let bt=0;bt<ct.count;bt+=3)N.f(...[0,1,2].map(_t=>N.v(V([H+ct.getX(bt+_t),-3.8+ct.getY(bt+_t),5.1+ct.getZ(bt+_t)*1.5]),[1,1,1])));K.dispose();let Q=V([H,-4.6,5.3]);S===0&&C.push({pos:Q,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[H,K,ct,Q,bt]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let _t=[0,.2,.4,.6,.82],ft=(Ct,kt)=>{let jt=.5*bt*Math.sin(7*Ct+kt)*Ct,rt=.1*bt*Math.sin(5*Ct+kt)*Ct;return[-jt*q,jt*j,rt]},Lt=(Ct,kt,jt)=>W.v(V([Ct,K,kt]),e.flag_col,[ft(jt,0),ft(jt,Math.PI)]),dt=_t.map(Ct=>Lt(H+Q*Ct,ct+bt,Ct)),At=_t.map(Ct=>Lt(H+Q*Ct,ct,Ct)),Bt=Lt(H+Q,ct+bt,1),Ht=Lt(H+Q,ct,1),Rt=Lt(H+.9*Q,ct+bt/2,.9);for(let Ct=0;Ct<4;Ct++)W.f(At[Ct],At[Ct+1],dt[Ct+1],dt[Ct]);W.f(dt[4],Bt,Rt),W.f(At[4],Rt,Ht),W.f(dt[4],Rt,At[4])}a.add(new Tt(T.geo(),pe()),new Tt(O.geo(),pe()),new Tt(F.geo(),pe({double:!0}))),a.add(new Tt(G.geo(),Sn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new Tt(N.geo(),Sn(e.torch_col,1.5)));let b=new Tt(W.geo(),pe({double:!0,morph:!0}));b.morphTargetInfluences=[0,0],a.add(b),at.push(b)});class Mt{constructor(S){Fe(this,"mode",S);Fe(this,"mb");Fe(this,"war",[]);Fe(this,"pending",[]);Fe(this,"faces",[]);this.mb=new Jt(!1,S==="clash"?2:S==="surge"?1:0)}part(S,T,O,G,F,N,W=-1,Z=!1){let z=O.clone().sub(T);if(z.length()<1e-6)return;let E=z.normalize(),j=Math.abs(E.z)<.9?new R(0,0,1):new R(1,0,0),q=E.clone().cross(j).normalize(),V=E.clone().cross(q),Y=[[T,G],[O,F]].map(([J,ot])=>Array.from({length:N},(P,b)=>{let H=2*Math.PI*b/N,K=J.clone().addScaledVector(q,Math.cos(H)*ot).addScaledVector(V,Math.sin(H)*ot),ct=new Dt(K.x-S.x,K.y-S.y),Q=ct.length()>1e-6?.5+.5*ct.normalize().dot(new Dt(u[0],u[1])):.5;return this.add([K.x,K.y,K.z],Zt(e.sil,e.sil_rim,.45*Q*Q),W,Z)}));for(let J=0;J<N;J++){let ot=(J+1)%N;this.faces.push([Y[0][J],Y[0][ot],Y[1][ot],Y[1][J]])}this.faces.push([...Y[0]].reverse()),this.faces.push(Y[1])}add(S,T,O,G){return this.pending.push({p:S,c:T,wi:O,arm:G}),this.pending.length-1}warrior(S,T,O,G){let F=this.war.length,N=new re().makeRotationZ(T-Math.PI/2),W=(j,q,V)=>S.clone().add(new R(j,q,V).applyMatrix4(N)),Z=S.clone().add(new R(0,0,1)),z=(j,q,V,Y,J,ot=!1)=>this.part(Z,W(...j),W(...q),V,Y,J,F,ot);for(let[j,q,V]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])z([j*.11,0,.95],V,.1,.075,4),z(V,q,.075,.06,4);z([0,0,.95],[0,.1,1.48],.2,.23,6),z([0,.16,1.58],[0,.16,1.74],.11,.11,6),z([0,.16,1.74],[0,.16,1.92],.12,.02,6),z([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),z([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),O!=="spear"&&z([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),z([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),z([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),O==="sword"?z([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):O==="axe"?(z([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),z([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(z([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),z([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let E=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(j=>{let q=W(...j);return this.add([q.x,q.y,q.z],e.sil,F,!1)});this.faces.push(E),this.war.push({team:G,f:new R(0,1,0).applyMatrix4(N),axis:new R(1,0,0).applyMatrix4(N),pivot:W(.27,.1,1.42)})}finish(){let S=this.pending.map(T=>{let O=[],G=new R(...T.p);if(this.mode==="clash")for(let F of[0,1]){if(T.wi<0){O.push([0,0,0]);continue}let N=this.war[T.wi],W=N.team===F,Z=N.f.clone().multiplyScalar(W?.32:-.22),z=G.clone().add(Z);T.arm&&(z=N.pivot.clone().add(Z).add(G.clone().sub(N.pivot).applyAxisAngle(N.axis,le(W?-60:25)))),O.push([z.x-G.x,z.y-G.y,z.z-G.z])}if(this.mode==="surge"){let F=this.war[T.wi];O.push([F.f.x*.5,F.f.y*.5,T.arm?.3:0])}return this.mb.v(T.p,T.c,O)});for(let T of this.faces)this.mb.f(...T.map(O=>S[O]));return this.mb.geo()}}let ht=pe({morph:!0,double:!0}),vt=[],D=t?5:8;for(let I=0;I<D;I++){let S=2*Math.PI*(I+o.uniform(-.3,.3))/D,T=o.uniform(17,36);m(S*180/Math.PI,T,15)&&(S+=.6);let O=T*Math.cos(S),G=T*Math.sin(S);for(let F=0;F<3;F++){let N=new Mt("clash"),W=o.uniform(0,6.283),Z=new R(O+o.uniform(-4.5,4.5),G+o.uniform(-4.5,4.5),0),z=new R(Math.cos(W),Math.sin(W),0),E=o.uniform(.9,1.1);for(let[q,V]of[[0,-1],[1,1]]){let Y=Z.clone().addScaledVector(z,E*V);Y.z=_(Y.x,Y.y),N.warrior(Y,q===0?W:W+Math.PI,o.choice(["sword","sword","axe","spear"]),q)}let j=new Tt(N.finish(),ht);j.morphTargetInfluences=[0,0],a.add(j),vt.push({m:j,w:2*Math.PI/s.uniform(40,95),w2:2*Math.PI/s.uniform(110,260),w3:2*Math.PI/s.uniform(150,400),p:s.uniform(0,6.28),p2:s.uniform(0,6.28),p3:s.uniform(0,6.28),bias:s.uniform(-.35,.35)})}}{let I=new Mt(null);for(let S=0;S<16;S++){let T=o.uniform(0,6.283),O=o.uniform(13,45);if(m(T*180/Math.PI,O,14))continue;let G=new R(O*Math.cos(T),O*Math.sin(T),0);G.z=_(G.x,G.y);let F=new re().makeRotationZ(o.uniform(0,6.283)),N=(Z,z,E)=>G.clone().add(new R(Z,z,E).applyMatrix4(F)),W=G.clone().add(new R(0,0,.2));I.part(W,N(0,-.4,.18),N(0,.45,.2),.2,.22,6),I.part(W,N(0,.55,.18),N(0,.7,.2),.11,.11,6),I.part(W,N(-.1,-.4,.12),N(-.2,-1.2,.1),.09,.07,4),I.part(W,N(.1,-.4,.12),N(.25,-1.1,.12),.09,.07,4),I.part(W,N(-.25,.35,.18),N(-.6,.1,.12),.06,.05,4),I.part(W,N(.25,.35,.18),N(.55,.7,.1),.06,.05,4),I.part(W,N(.7,.2,0),N(.9,.2,1.8),.03,.025,4),I.part(W,N(-.9,0,.05),N(-.9,0,.12),.4,.4,8)}a.add(new Tt(I.finish(),pe({double:!0})))}let et=[];{let I=[];for(let O=0;O<6;O++){let G=o.uniform(0,6.283),F=o.uniform(45,90);m(G*180/Math.PI,F,40)&&(G+=.8),I.push(new R(F*Math.cos(G),F*Math.sin(G),0))}let S=t?70:120,T=I.map(()=>new Mt("surge"));for(let O=0;O<S;O++){let G=T[O%I.length],F=I[O%I.length],N=F.clone().add(new R(o.uniform(-9,9),o.uniform(-9,9),0));N.z=_(N.x,N.y);let W=Math.atan2(F.y-N.y,F.x-N.x)+o.uniform(-.5,.5),Z=G.war.length,z=new re().makeRotationZ(W-Math.PI/2),E=(q,V,Y)=>N.clone().add(new R(q,V,Y).applyMatrix4(z)),j=N.clone().add(new R(0,0,.9));G.part(j,E(0,0,0),E(0,0,1.45),.28,.22,4,Z),G.part(j,E(0,.05,1.45),E(0,.05,1.65),.12,.12,4,Z),G.part(j,E(.3,-.3,.9),E(.3,2,2.4),.03,.025,4,Z,!0),G.war.push({team:0,f:new R(0,1,0).applyMatrix4(z),axis:new R(1,0,0).applyMatrix4(z),pivot:E(0,0,1.4)})}for(let O of T){let G=new Tt(O.finish(),ht);G.morphTargetInfluences=[0,0],a.add(G),et.push({m:G,w:2*Math.PI/s.uniform(90,170),p:s.uniform(0,6.28),w2:2*Math.PI/s.uniform(300,600),p2:s.uniform(0,6.28)})}}let k=new Tt(Ss({r:s,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(I,S)=>m(I,S,16),base:I=>de(e.grass_base,1-.6*Ot((I-12)/55)),tip:I=>de(e.grass_tip,1-.6*Ot((I-12)/55))}),pe({emit:.1,double:!0,morph:!0}));k.morphTargetInfluences=[0],a.add(k);let $=di({r:o,n:t?24:40,at:()=>{let I=o.uniform(0,6.283),S=30*Math.sqrt(o.random());return[S*Math.cos(I),S*Math.sin(I),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add($.obj);let X=ui({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(X.group),{group:a,floor:.6,update(I){X.update(I);for(let N of vt){let W=Math.sin(I*N.w+N.p+1.4*Math.sin(I*N.w2+N.p2))+N.bias,Z=.55+.45*Math.sin(I*N.w3+N.p3),z=Ot(W)*Z,E=Ot(-W)*Z;N.m.morphTargetInfluences[0]=z*z*(3-2*z),N.m.morphTargetInfluences[1]=E*E*(3-2*E)}for(let N of et)N.m.morphTargetInfluences[0]=Ot(.5+.6*Math.sin(I*N.w+N.p)*(.6+.4*Math.sin(I*N.w2+N.p2)));let S=mn(I,90);st.morphTargetInfluences[0]=S,st.morphTargetInfluences[1]=1-S;for(let N of at)N.morphTargetInfluences[0]=S,N.morphTargetInfluences[1]=1-S;k.morphTargetInfluences[0]=mn(I,45);let T=I%3600,O=Math.floor(T/8),G=(T-O*8)/8,F=G*G*(3-2*G);for(let N of M){let W=N.keys[O%450],Z=N.keys[(O+1)%450];N.m.scale.set(W[0]+(Z[0]-W[0])*F,W[1]+(Z[1]-W[1])*F,W[2]+(Z[2]-W[2])*F)}$.update(I)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...C],dispose(){X.dispose(),pi(a)}}}var zh={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function rd(i,t){let e=i==="night"?zh.NIGHT:i==="day"?{...mi(zh.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:zh.SUNSET,n=e.emit,r=n*.75,s=un(11),o=un(99),a=new ie,c=le(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let D=new R(.8,.6,0).normalize();return[D.x,D.y,0]})(),u=(D,et)=>Ot((Math.hypot(D,et)-12)/10)*.25*(Math.sin(D*.22)+Math.cos(et*.27)+.5*Math.sin((D+et)*.5)),d=(D,et)=>{let k=Ot((Math.hypot(D,et)-6)/34)**.7,$=.9+.2*(Math.sin(D*.5)*Math.cos(et*.5)*.5+.5),X=We(D*.09+3,et*.09-7,3),I=Ie(D*1.7,et*1.7),S=Zt(e.g_near,e.g_far,k);return S=Zt(S,e.g_alt,Ot((X-.45)*2.2)*.6*(1-.5*k)),de(S,$*(1+.25*(I-.5)*(1-k)))},m=Oi(e,[pn(e.body_az,e.body_el)]);a.add(new Tt(Es([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,d),pe({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,D])=>[D[0],D[1]]),f=D=>{let et=_.reduce(($,[X,I])=>$+Math.exp(-((Math.hypot(D[0]-X,D[1]-I)/5.5)**2)),0),k=(.55+.45*Math.min(1,et))*(1-.4*Ot((Math.hypot(D[0],D[1])-5)/5))*.2*.5*e.beam_gain;return de(e.beam_col,k)};a.add(rr({th:e,r:s,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:r,patchy:!1,bake:f}));{let D=new Jt;for(let et=0;et<10;et++){let k=s.uniform(0,6.283),$=s.uniform(11.5,17),X=s.uniform(.8,2),I=s.choice(e.stone),S=o.uniform(0,50),T=new nn(1,1),O=T.attributes.position;for(let E=0;E<O.count;E++){let j=s.uniform(.8,1.2);O.setXYZ(E,O.getX(E)*j,O.getY(E)*j,O.getZ(E)*j)}let G=$*Math.cos(k),F=$*Math.sin(k),N=s.uniform(0,6.28),W=new re().compose(new R(G,F,u(G,F)+.3*X),new je().setFromAxisAngle(new R(0,0,1),N),new R(X,X*.9,X*.7)),Z=T.index?T.toNonIndexed():T,z=Z.attributes.position;for(let E=0;E<z.count;E+=3){let j=[];for(let q=0;q<3;q++){let V=z.getX(E+q),Y=z.getY(E+q),J=z.getZ(E+q),ot=new R(V,Y,J).applyMatrix4(W),P=.6+.4*Ot((J+1)/2)**.7,b=Ie(V*2+S,Y*2+J);j.push(D.v([ot.x,ot.y,ot.z],Zt(de(I,P*(.88+.24*b)),e.moss,Ot(1-(J+1)/2*3)*.55)))}D.f(...j)}Z.dispose()}a.add(new Tt(D.geo(),pe()))}let p=[],y=(D,et,k)=>{for(let $=0;$<300;$++){let X=s.uniform(0,360);if(k&&X>245&&X<295)continue;let I=s.uniform(D,et),S=I*Math.cos(le(X)),T=I*Math.sin(le(X));if(p.every(([O,G])=>Math.hypot(S-O,T-G)>5.5))return p.push([S,T]),[S,T]}return null},x=pe({morph:!0}),M=hi({gain:2.2}),L=[],A=t?12:18,C=t?6:10;for(let D=0;D<A+C;D++){let et=D<A,k=et?y(15,26,!0):y(32,46,!1);if(!k)continue;let $=et?s.uniform(20,32):s.uniform(30,40),X=et?s.uniform(1.1,2):s.uniform(2.2,3.2),I=et&&s.random()<.25,S=B(k[0],k[1],$,X,I),T=new Tt(S.bark.geo(),x);T.morphTargetInfluences=[0,0],a.add(T);let O=null;I&&(O=new Tt(S.eyes.geo(),M),O.morphTargetInfluences=[0,0],a.add(O));let G=[];if(I){let F=Array.from({length:Math.floor(174)},(N,W)=>60+W*20);for(let N=0;N<5;N++)G.push(F.splice(s.int(0,F.length-1),1)[0]);G.sort((N,W)=>N-W)}L.push({mesh:T,eyes:O,P:s.choice([100,120,150,180,200]),flip:s.int(0,1),blinks:G})}function B(D,et,k,$,X){let I=new Jt(!1,2),S=new Jt(!1,2),T=new R(-D,-et,0).normalize(),O=s.uniform(1.2,2.4),G=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.03,.1)),F=s.uniform(0,6.28),N=s.uniform(.4,1),W=s.choice([3,4,5]),Z=s.uniform(0,6.28),z=H=>new R(D+G.x*H+N*Math.sin(.28*H+F),et+G.y*H+N*Math.cos(.23*H+F),H),E=(H,K)=>{let ct=Math.max(H,0),Q=$*(1-.62*Ot(ct/k))*(1+1.1*Math.exp(-ct/1.6)),bt=K+.06*ct;return Q*(1+.28*Math.cos(W*bt+Z)*Math.exp(-ct/3.5)+.07*Math.cos(2*bt+F))},j=H=>{let K=O*Ot(Math.max(H,0)/k)**2;return[h[0]*K,h[1]*K,0]},q=(H,K,ct)=>{let Q=new R(H.x,H.y,0);Q.lengthSq()>1e-12&&Q.normalize();let bt=Math.max(0,Q.x*T.x+Q.y*T.y),_t=.6+.4*Math.sin(ct),ft=Zt(e.bark_dark,e.bark_lit,Ot(.85*bt*_t*(1-.3*Ot(K/k)))),Lt=Math.max(0,Q.x*l[0]+Q.y*l[1]);ft=Zt(ft,e.bark_sun,Ot(e.bark_sun_k*Lt*(.5+.5*_t)*(1-.5*Ot(K/k)))),ft=de(ft,.72+.28*Ot(K/1.6));let dt=Ot(1-K/2.2)*.55*Ie(H.x*3+D,H.y*3+K*.8);return Zt(ft,e.moss,dt)},V=(H,K)=>I.v([H.x,H.y,H.z],K,[j(H.z),[0,0,0]]),Y=t?10:14,J=t?8:12,ot=[];for(let H=0;H<Y;H++){let K=-.5+(k+.5)*(H/(Y-1))**1.15,ct=z(K),Q=[];for(let bt=0;bt<J;bt++){let _t=2*Math.PI*bt/J,ft=new R(Math.cos(_t),Math.sin(_t),0);Q.push(V(ct.clone().addScaledVector(ft,E(K,_t)),q(ft,K,_t*7+K*.4)))}ot.push(Q)}for(let H=0;H<Y-1;H++)for(let K=0;K<J;K++){let ct=(K+1)%J;I.f(ot[H][K],ot[H][ct],ot[H+1][ct],ot[H+1][K])}let P=V(z(k).add(new R(0,0,.3)),e.bark_dark);for(let H=0;H<J;H++)I.f(P,ot[Y-1][H],ot[Y-1][(H+1)%J]);let b=s.int(2,4);for(let H=0;H<b;H++){let K=k*s.uniform(.35,.85),ct=s.uniform(0,6.28),Q=new R(Math.cos(ct),Math.sin(ct),0),bt=z(K).addScaledVector(Q,E(K,ct)*.7),_t=Q.clone().add(new R(0,0,s.uniform(.4,1))).normalize(),ft=s.uniform(3.5,7.5),Lt=new R(-Q.y,Q.x,0),dt=[0,1,2,3,4].map(Ht=>bt.clone().addScaledVector(_t,ft*(Ht/4)).add(new R(0,0,.35*ft*(Ht/4)**2)).addScaledVector(Lt,Math.sin(Ht/4*3+H)*.5)),At=E(K,ct)*.32,Bt=dt.map((Ht,Rt)=>{let Ct=dt[Math.min(Rt+1,4)].clone().sub(dt[Math.max(Rt-1,0)]).normalize(),kt=Ct.clone().cross(new R(0,0,1));kt.length()<.001&&(kt=new R(1,0,0)),kt.normalize();let jt=Ct.clone().cross(kt);return Array.from({length:6},(rt,Ut)=>{let yt=2*Math.PI*Ut/6,wt=kt.clone().multiplyScalar(Math.cos(yt)).addScaledVector(jt,Math.sin(yt));return V(Ht.clone().addScaledVector(wt,At*(1-.85*Rt/4)),q(wt,Ht.z,yt*5+Rt))})});for(let Ht=0;Ht<4;Ht++)for(let Rt=0;Rt<6;Rt++){let Ct=(Rt+1)%6;I.f(Bt[Ht][Rt],Bt[Ht][Ct],Bt[Ht+1][Ct],Bt[Ht+1][Rt])}}if(X){let H=s.uniform(2.2,9),K=Math.atan2(T.y,T.x)+s.uniform(-.6,.6),ct=new R(Math.cos(K),Math.sin(K),0),Q=new R(-ct.y,ct.x,0),bt=z(H).addScaledVector(ct,E(H,K)),_t=s.uniform(.18,.32),ft=_t*1.25,Lt=(Bt,Ht,Rt)=>bt.clone().addScaledVector(ct,Rt).addScaledVector(Q,Bt).add(new R(0,0,Ht)),dt=Array.from({length:10},(Bt,Ht)=>V(Lt(Math.cos(2*Math.PI*Ht/10)*(ft+_t*1.7),Math.sin(2*Math.PI*Ht/10)*_t*1.7,.07),[.004,.003,.02]));I.f(...dt);let At=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Bt of[1,-1]){let Ht=At.map(([Ct,kt])=>[Bt*(ft+Ct*_t),kt*_t]);Bt===-1&&(Ht=Ht.reverse());let Rt=Ht.map(([Ct,kt])=>{let jt=Lt(Ct,kt,.11);return S.v([jt.x,jt.y,jt.z],[1,.04,.04],[j(jt.z),[0,0,H-jt.z]])});S.f(...Rt)}}return{bark:I,eyes:S}}let it=e.grass_tip,v=pe({emit:e.grass_emit,double:!0,morph:!0}),w=t?260:500,tt=[0,1].map(()=>{let D=new Map,et=Ss({r:s,tufts:w,rmin:10.6,rspan:34,gh:u,base:$=>de(e.grass_base,1-.6*Ot(($-11)/34)),tip:($,X)=>{let I=Math.round($*1e3),S=D.get(I);S||(S=Zt(it[0],it[1],s.random()),D.set(I,S));let T=.3*Math.abs(Math.cos(X-c))*(i==="night"?.5:1);return de(Zt(S,e.grass_rim,T),1-.6*Ot(($-11)/34))}}),k=new Tt(et,v);return k.morphTargetInfluences=[0],a.add(k),k});{let D=new Jt;for(let et=0;et<(t?40:70);et++){let k=14+22*o.random(),$=o.uniform(0,2*Math.PI),X=k*Math.cos($),I=k*Math.sin($),S=u(X,I),T=[X+o.uniform(-.06,.06),I+o.uniform(-.06,.06),S+o.uniform(.35,.7)];D.f(D.v([X-.012,I,S],[.02,.07,.05]),D.v([X+.012,I,S],[.02,.07,.05]),D.v([T[0]+.012,T[1],T[2]],[.08,.25,.12]),D.v([T[0]-.012,T[1],T[2]],[.08,.25,.12]));let O=o.choice(e.flower),G=D.v([T[0],T[1],T[2]+.02],[1,.9,.5]),F=Array.from({length:6},(N,W)=>{let Z=2*Math.PI*W/6;return D.v([T[0]+.05*Math.cos(Z),T[1]+.05*Math.sin(Z),T[2]+.025],O)});for(let N=0;N<6;N++)D.f(G,F[N],F[(N+1)%6])}a.add(new Tt(D.geo(),pe({emit:e.flower_emit,double:!0})))}{let D=new Jt;for(let et=0;et<14;et++){let k=le(s.choice([s.uniform(195,245),s.uniform(295,345),s.uniform(0,360)])),$=s.uniform(16,34),X=s.uniform(1,1.8),I=$*Math.cos(k),S=$*Math.sin(k),T=u(I,S);for(let O=0;O<4;O++){let G=[s.uniform(-1.4,1.4),s.uniform(-1,1),s.uniform(.2,1)],F=s.uniform(.9,1.6),N=new nn(F,1),W=N.attributes.position;for(let Z=0;Z<W.count;Z+=3){let z=[];for(let E=0;E<3;E++){let j=W.getZ(Z+E)+G[2];z.push(D.v([I+(W.getX(Z+E)+G[0])*X,S+(W.getY(Z+E)+G[1])*X,T+j*X*.75],Zt(e.bush_lo,e.bush_hi,Ot((j+.3)/2.6)*.8)))}D.f(...z)}N.dispose()}}a.add(new Tt(D.geo(),pe()))}{let D=new Jt;[[52,70,50,70],[59,80,55,75],[66,90,60,80]].forEach(([k,$,X,I],S)=>nd(D,{r:s,idx:S,radius:k,count:t?Math.round($*.6):$,hmin:X,hmax:I,th:e,sky:m,sunAz:c}));let et=hi({fog:!1,gain:i==="night"?.45:.6});et.toneMapped=!1,a.add(new Tt(D.geo(),et))}let st=new Jt(!0);g.forEach(([D,et])=>{for(let[k,$]of[[1,.45],[.7,.6],[.4,.8]])td(st,D,et,k,$,e.beam_col,.35*e.beam_gain,2.6)});let at=new Jt(!0);ws(at,9.4,.7,(D,et)=>{let k=_.reduce(($,[X,I])=>$+Math.exp(-((Math.hypot(D-X,et-I)/5.5)**2)),0);return(.55+.45*Math.min(1,k))*xe(0,3,9.4-Math.hypot(D,et))},e.beam_col,.3*.5*e.beam_gain);let Mt=new Tt(st.geo(),Rr());a.add(Mt,new Tt(at.geo(),Rr()));let ht=di({r:s,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let D=s.uniform(0,6.283),et=s.uniform(0,22);return[et*Math.cos(D),et*Math.sin(D),s.uniform(.8,7)]},move:()=>{let D=s.uniform(-1.5,1.5);return[D,D*.5,s.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(ht.obj);let vt=ui({th:e,W:t?512:1024,bodies:[pn(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(vt.group),{group:a,floor:.62,update(D){vt.update(D);for(let k of L){let $=mn(D,k.P/2,.15,1,k.flip),X=0;for(let I of k.blinks)Math.abs(D%3600-I)<3&&(X=1-Math.abs(D%3600-I)/3);k.mesh.morphTargetInfluences[0]=$,k.mesh.morphTargetInfluences[1]=X,k.eyes&&(k.eyes.morphTargetInfluences[0]=$,k.eyes.morphTargetInfluences[1]=X)}tt.forEach((k,$)=>{k.morphTargetInfluences[0]=mn(D,45,0,1,$)});let et=mn(D,450);Mt.rotation.set(.03*et*.1,.02*et*.1,0),ht.update(D)},key:{dir:pn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){vt.dispose(),pi(a)}}}var kh={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},Cr=2.3;function sd(i,t){let e=i==="night"?kh.NIGHT:i==="day"?{...mi(kh.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:kh.SUNSET,n=e.emit,r=un(7),s=new ie,o=[pn(e.body_az,e.body_el),pn(e.body_az+180,e.body_el)],a=Oi(e,o),c=(D,et)=>Ot((Math.hypot(D,et)-13)/10)*.25*(Math.sin(D*.22)+Math.cos(et*.27)+.5*Math.sin((D+et)*.5)),l=(D,et)=>{let k=Ot((Math.hypot(D,et)-10)/50),$=.9+.2*(Math.sin(D*.5)*Math.cos(et*.5)*.5+.5),X=Zt(e.g_near,e.g_far,k);return X=Zt(X,e.g_alt,Ot((We(D*.09+3,et*.09-7,3)-.45)*2.2)*.6),de(X,$*(.9+.25*Ie(D*1.7,et*1.7)))},h=(D,et,k)=>Zt(de(D,(.6+.4*Ot(et)**.7)*(.88+.24*k)),e.moss,Ot(1-et*3)*.55);s.add(new Tt(Es([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),pe({flat:!1})));{let D=t?96:144,et=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],k=et.map(T=>Array.from({length:D},(O,G)=>{let F=2*Math.PI*G/D,N=T*Math.cos(F),W=T*Math.sin(F),Z=1;for(let j of[le(e.body_az),le(e.body_az+180)]){let q=Math.abs(((F-j+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);Z*=1-.8*Math.exp(-((q/le(17))**2))}let E=(4+42*xe(50,102,T))*(1-.65*xe(112,134,T))*(.12+1.15*Qf(N*.032,W*.032,5))*(.55+.9*We(N*.01+5,W*.01-3,3))*Z+1.2*We(N*.09,W*.09,3)*xe(46,60,T);return E*=xe(45.5,52,T),[N,W,c(N,W)+.03+E]})),$=new Jt,X=[],I=o;et.forEach((T,O)=>{X.push([]);for(let G=0;G<D;G++){let F=k[O][G],N=2*Math.PI*G/D,W=k[O][(G+1)%D],Z=k[O][(G-1+D)%D],z=k[Math.min(O+1,et.length-1)][G],E=k[Math.max(O-1,0)][G],j=new R(z[0]-E[0],z[1]-E[1],z[2]-E[2]).cross(new R(W[0]-Z[0],W[1]-Z[1],W[2]-Z[2])).normalize();j.z<0&&j.multiplyScalar(-1);let q=F[2]/45,V=1-j.z,Y=We(F[0]*.12,F[1]*.12,3),J=de(Zt(e.rock_lo,e.rock_hi,Ot(Ot(q)**.7+.25*(Y-.5))),.8+.4*Y);J=Zt(J,e.veg,Ot((9-F[2])/9)*Ot(1-V*2.4)*.85),J=Zt(J,e.snow,xe(.55,.78,q+.22*(We(F[0]*.07,F[1]*.07,3)-.5))*Ot(1-V*1.7));let ot=0;for(let H of I)ot=Math.max(ot,Ot(j.x*H[0]+j.y*H[1]+j.z*H[2]));ot=ot**1.2,J=[J[0]*(e.amb[0]+e.light_col[0]*ot*1.6),J[1]*(e.amb[1]+e.light_col[1]*ot*1.6),J[2]*(e.amb[2]+e.light_col[2]*ot*1.6)];let P=a(Math.cos(N)*Math.cos(.02),Math.sin(N)*Math.cos(.02),Math.sin(.02)).map(H=>ir(H,e.exposure)*e.haze_gain),b=Math.min(.97,Math.max(0,1-Math.exp(-(T-40)/e.haze_dist)+.5*Math.exp(-Math.max(F[2],0)/9)*xe(55,100,T)));J=Zt(J,P,b),J=Zt(l(F[0],F[1]),J,xe(46,58,T)).map(Ot),X[O].push($.v(F,J))}});for(let T=0;T<et.length-1;T++)for(let O=0;O<D;O++){let G=(O+1)%D;$.f(X[T][O],X[T][G],X[T+1][G],X[T+1][O])}let S=hi({fog:!1,gain:.95});s.add(new Tt($.geo(),S))}let u=new Jt,d=new Jt,m=new Jt,g=new Jt,_=new Jt,f=new Jt,p=(D,et,k,$,X,I=!0)=>{let S=et.map(([T,O])=>Array.from({length:k},(G,F)=>{let N=[$[0]+O*Math.cos(2*Math.PI*F/k),$[1]+O*Math.sin(2*Math.PI*F/k),$[2]+T];return D.v(N,X(N))}));for(let T=0;T<S.length-1;T++)for(let O=0;O<k;O++){let G=(O+1)%k;D.f(S[T][O],S[T][G],S[T+1][G],S[T+1][O])}if(I){let T=S[S.length-1].map(O=>D.v(D.pos.slice(O*3,O*3+3),D.col.slice(O*3,O*3+3)));D.f(...T)}},y=(D,et,k,$,X,I,S=1,T=[1,1,1])=>{let O=Array.from({length:$},(G,F)=>{let N=2*Math.PI*F/$;return Array.from({length:X},(W,Z)=>{let z=2*Math.PI*Z/X,E=et+k*Math.cos(z);return D.v([E*Math.cos(N),E*Math.sin(N),I+k*S*Math.sin(z)],T)})});for(let G=0;G<$;G++)for(let F=0;F<X;F++){let N=(G+1)%$,W=(F+1)%X;D.f(O[G][F],O[N][F],O[N][W],O[G][W])}},x=(D,et,k,$,X,I=0)=>{let S=Math.cos($),T=Math.sin($),O=new Map,G=(N,W,Z)=>{let z=`${N},${W},${Z}`,E=O.get(z);E||(E=I?[r.uniform(-.03,.03),r.uniform(-.03,.03),r.uniform(-.02,.02)]:[0,0,0],O.set(z,E));let j=N*k[0]+E[0],q=W*k[1]+E[1],V=Z*k[2]+E[2];return D.v([et[0]+j*S-q*T,et[1]+j*T+q*S,et[2]+V],X([j,q,V],Z+.5))},F=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let N of F)D.f(...N.map(([W,Z,z])=>G(W,Z,z)))},M=(D,et,k,$)=>{let X=r.uniform(0,50);x(u,D,et,k,(I,S)=>h($,S,Ie(I[0]*2.5+X,I[1]*2.5+I[2]*1.7)),1)},L=(D,et,k,$)=>{let X=r.uniform(0,50);p(u,[[0,D],[k,D]],48,[0,0,et],I=>h($,(I[2]-et)/k,Ie(I[0]*1.2+X,I[1]*1.2)))};L(8.2,0,1.4,e.stone[0]),L(7.2,1.4,.5,e.stone[3]),L(6.6,1.9,Cr-1.9,e.stone[0]),y(d,6.6,.18,48,6,Cr,1,e.stone[3]);let A=28;for(let D=0;D<A;D++){let et=2*Math.PI*D/A,k=1.4+r.uniform(-.08,.08);M([8.45*Math.cos(et),8.45*Math.sin(et),k/2],[1,1.95,k],et,r.choice(e.stone))}for(let[D,et]of[[9.8,.9],[11,.55],[12.2,.3]])for(let k=0;k<14;k++){if(r.random()<.2)continue;let $=2*Math.PI*k/14+r.uniform(-.08,.08);M([D*Math.cos($),D*Math.sin($),et/2],[1.3,2.6,et],$+r.uniform(-.1,.1),r.choice(e.stone))}for(let D of[5.8,4.2,2.6,1.2])y(g,D,.08,48,6,Cr+.02,.6);for(let D=0;D<16;D++){let et=2*Math.PI*D/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(et),5*Math.sin(et),Cr],()=>[1,1,1])}let C=[],B=Ka(),it=hi({gain:1.05}),v=[];for(let D of[3,10,17,24]){let et=2*Math.PI*D/A,k=8.45*Math.cos(et),$=8.45*Math.sin(et),X=1.4;p(d,[[0,.28],[.9,.28]],12,[k,$,X],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[k,$,X+.9],()=>e.stone[0]);let I=new Tt(B,it);I.position.set(k,$,X+1.25),s.add(I),C.push({m:I,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),v.push({pos:[k,$,X+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let w=(D,et,k,$=1.8,X=1.2)=>{let I=le(D),S=et*Math.cos(I),T=et*Math.sin(I),O=c(S,T)-.4,G=I-Math.PI/2,F=r.choice(e.stone),N=r.uniform(0,50),W=new Map,Z=Math.cos(G),z=Math.sin(G),E=(Y,J,ot)=>{let P=`${Y},${J},${ot}`,b=W.get(P);b||(b=[r.uniform(-.07,.07),r.uniform(-.07,.07),r.uniform(-.05,.05)],W.set(P,b));let H=Y*$,K=J*X,ct=(ot+.5)*k;if(ct>k*.5){let _t=1-.18*((ct-k*.5)/(k*.5));H*=_t,K*=_t}H+=b[0],K+=b[1];let Q=ct+b[2],bt=.5*Ie(H*2.2+N,Q*.7)+.5*Ie(H*6+N,Q*.25);return u.v([S+H*Z-K*z,T+H*z+K*Z,O+Q],h(F,Q/k,bt))},j=4,q=Y=>-.5+Y/j,V=Y=>{for(let J=0;J<j;J++)for(let ot=0;ot<j;ot++)u.f(E(...Y(J,ot)),E(...Y(J+1,ot)),E(...Y(J+1,ot+1)),E(...Y(J,ot+1)))};V((Y,J)=>[q(Y),-.5,q(J)]),V((Y,J)=>[q(J),.5,q(Y)]),V((Y,J)=>[-.5,q(J),q(Y)]),V((Y,J)=>[.5,q(Y),q(J)]),V((Y,J)=>[q(J),q(Y),.5]),V((Y,J)=>[q(Y),q(J),-.5]);for(let[Y,J,ot]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let b=-X/2-.02,H=k*Y;x(f,[S+0*Z-b*z,T+0*z+b*Z,O+H],[J,.1,ot],G,()=>[1,1,1])}};for(let[D,et,k]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])w(D,et,k),w(D+180,et,k);for(let D=0;D<12;D++){let et=le(r.choice([r.uniform(195,245),r.uniform(295,345)])),k=r.uniform(13,18),$=r.uniform(1,2.2),X=r.choice(e.stone),I=r.uniform(0,50),S=k*Math.cos(et),T=k*Math.sin(et),O=r.uniform(0,6.28),G=new nn(1,1),F=G.attributes.position,N=new re().compose(new R(S,T,c(S,T)+.3*$),new je().setFromAxisAngle(new R(0,0,1),O),new R($,$*.9,$*.7)),W=new Map;for(let Z=0;Z<F.count;Z+=3)u.f(...[0,1,2].map(z=>{let E=F.getX(Z+z),j=F.getY(Z+z),q=F.getZ(Z+z),V=`${E.toFixed(3)},${j.toFixed(3)},${q.toFixed(3)}`,Y=W.get(V);Y===void 0&&(Y=r.uniform(.8,1.2),W.set(V,Y));let J=new R(E*Y,j*Y,q*Y).applyMatrix4(N);return u.v([J.x,J.y,J.z],h(X,(q+1)/2,Ie(E*2+I,j*2+q)))}));G.dispose()}s.add(new Tt(u.geo(),pe())),s.add(new Tt(d.geo(),pe({flat:!1})),new Tt(m.geo(),pe()));let tt=new Tt(g.geo(),Sn([1,.92,.75],.75*Math.min(1.6,n)));tt.name="centre-pattern",s.add(tt,new Tt(_.geo(),Sn([1,.92,.75],.75*Math.min(1.6,n)))),s.add(new Tt(f.geo(),Sn([1,.3,.1],1.1*Math.min(1.4,n))));let st=le(e.body_az),at=pe({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),Mt=[0,1].map(()=>{let D=e.grass_tip[0],et=-1,k=Ss({r,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:X=>{let I=1-.55*Ot((X-13)/34);return[.03*I,.1*I,.1*I]},tip:(X,I)=>(X!==et&&(et=X,D=Zt(e.grass_tip[0],e.grass_tip[1],r.random())),de(Zt(D,e.grass_rim,.3*Math.abs(Math.cos(I-st))*(i==="night"?.5:1)),1-.55*Ot((X-13)/34)))}),$=new Tt(k,at);return $.morphTargetInfluences=[0],s.add($),$});{let D=new Jt;for(let et=0;et<(t?40:70);et++){let k=14+22*r.random(),$=r.uniform(0,2*Math.PI),X=k*Math.cos($),I=k*Math.sin($),S=c(X,I),T=r.uniform(.35,.7),O=[X+r.uniform(-.06,.06),I+r.uniform(-.06,.06),S+T];D.f(D.v([X-.012,I,S],[.02,.07,.05]),D.v([X+.012,I,S],[.02,.07,.05]),D.v([O[0]+.012,O[1],O[2]],[.08,.25,.12]),D.v([O[0]-.012,O[1],O[2]],[.08,.25,.12]));let G=r.choice(e.flower),F=D.v([O[0],O[1],O[2]+.02],[1,.9,.5]),N=Array.from({length:6},(W,Z)=>{let z=2*Math.PI*Z/6;return D.v([O[0]+.05*Math.cos(z),O[1]+.05*Math.sin(z),O[2]+.025],G)});for(let W=0;W<6;W++)D.f(F,N[W],N[(W+1)%6])}s.add(new Tt(D.geo(),pe({emit:e.flower_emit,double:!0})))}let ht=di({r,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let D=r.uniform(0,6.283),et=r.uniform(4,26);return[et*Math.cos(D),et*Math.sin(D),r.uniform(1.5,10)]},move:()=>[r.uniform(-1,1),0,r.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&s.add(ht.obj);let vt=ui({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return s.add(vt.group),{group:s,floor:Cr,update(D){vt.update(D),Mt.forEach((I,S)=>{I.morphTargetInfluences[0]=mn(D,45,0,1,S)});let et=D%3600,k=Math.floor(et/8),$=(et-k*8)/8,X=$*$*(3-2*$);for(let I of C){let S=I.keys[k%450],T=I.keys[(k+1)%450];I.m.scale.set(S[0]+(T[0]-S[0])*X,S[1]+(T[1]-S[1])*X,S[2]+(T[2]-S[2])*X)}ht.update(D)},key:{dir:pn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,Cr+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,Cr+.5],color:[1,.5,.2],intensity:.35,dist:8},...v],dispose(){vt.dispose(),pi(s)}}}var Vh={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function od(i,t){let e=i==="night"?Vh.NIGHT:i==="day"?{...mi(Vh.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:Vh.SUNSET,n=e.emit,r=n*.75,s=un(21),o=un(77),a=new ie,c=[pn(e.body_az,e.body_el)],l=Oi(e,c),h=le(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(F=>ir(F,e.exposure)),d=e.stone,m=ui({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(F,N)=>{let W=Math.hypot(F,N),Z=Zt(e.water_lo,e.water_hi,Ot(We(F*.05+2,N*.05,3)*1.2-.15)),z=Math.exp(-(((W-9.9)/3)**2))*.12*.75;return Z=[Z[0]+e.glow_col[0]*z,Z[1]+e.glow_col[1]*z,Z[2]+e.glow_col[2]*z],Zt(Z,de(u,.5),xe(32,150,W)**1.2)},_;{let F=new Jt(!1,2),N=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],W=t?48:72,Z=N.map(E=>Array.from({length:W},(j,q)=>{let V=E*Math.cos(2*Math.PI*q/W),Y=E*Math.sin(2*Math.PI*q/W),J=xe(9,13,E)*Math.exp(-E/90);return F.v([V,Y,0],g(V,Y),[[0,0,.06*Math.sin(.45*V+.33*Y)*J],[0,0,.06*Math.sin(.38*V-.41*Y+2)*J]])}));for(let E=0;E<N.length-1;E++)for(let j=0;j<W;j++){let q=(j+1)%W;F.f(Z[E][j],Z[E+1][j],Z[E+1][q],Z[E][q])}let z=new ps({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:lh});_=new Tt(F.geo(),z),_.morphTargetInfluences=[0,0],a.add(_)}let f=[];[.35,.9,1.7].slice(0,t?2:3).forEach((F,N)=>{let W=new Jt(!0),Z=[10.5,12,15,19,24,30,38,48,60],z=48,E=Z.map(V=>Array.from({length:z},(Y,J)=>{let ot=2*Math.PI*J/z,P=V*Math.cos(ot),b=V*Math.sin(ot),H=e.mist_a*Ot((We(P*.07+N*9,b*.07,3)-.38)*2.6)*xe(0,3,V-10.5)*xe(0,15,60-V);return W.v([P,b,F+.12*Math.sin(.3*P+N)],[...e.mist_col,H])}));for(let V=0;V<Z.length-1;V++)for(let Y=0;Y<z;Y++){let J=(Y+1)%z;W.f(E[V][Y],E[V+1][Y],E[V+1][J],E[V][J])}let j=new Ke({vertexColors:!0,transparent:!0,depthWrite:!1,side:Re,toneMapped:!1});j.color.setScalar(1+.7);let q=new Tt(W.geo(),j);q.renderOrder=3,a.add(q),f.push({m:q,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(rr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let p=new Jt,y=new Jt,x=[];for(let F of[45,135,225,315]){let N=le(F),W=o.uniform(1.6,2.6),Z=o.choice(d),z=o.uniform(0,50),E=9.35*Math.cos(N),j=9.35*Math.sin(N),q=10,V=.3,Y=[],J=[],ot=Array.from({length:q},()=>V+W-o.uniform(0,.45));for(let ft=0;ft<q;ft++){let Lt=2*Math.PI*ft/q,dt=o.uniform(-.05,.05),At=o.uniform(-.05,.05),Bt=o.uniform(-.05,.05),Ht=o.uniform(-.05,.05),Rt=[E+.62*Math.cos(Lt)+dt,j+.62*Math.sin(Lt)+At,V],Ct=[E+.5*Math.cos(Lt)+Bt,j+.5*Math.sin(Lt)+Ht,ot[ft]];Y.push(p.v(Rt,fi(Z,0,Rt[0]-E,Rt[1]-j,z,e.moss))),J.push(p.v(Ct,fi(Z,(Ct[2]-V)/W,Ct[0]-E,Ct[1]-j,z,e.moss)))}for(let ft=0;ft<q;ft++){let Lt=(ft+1)%q;p.f(Y[ft],Y[Lt],J[Lt],J[ft])}p.f(...J);let P=E-.55*Math.cos(N),b=j-.55*Math.sin(N),H=N-Math.PI/2,K=Math.cos(H),ct=Math.sin(H),Q=.06,bt=W*.45/2,_t=.3+W*.5;y.f(...[[-Q,-.03,-bt],[Q,-.03,-bt],[Q,-.03,bt],[-Q,-.03,bt]].map(([ft,Lt,dt])=>y.v([P+ft*K-Lt*ct,b+ft*ct+Lt*K,_t+dt],[1,1,1]))),x.push([E,j,.3+W])}let M=(F,N,W,Z,z,E,j,q)=>{let V=o.uniform(0,50),Y=Math.cos(j),J=Math.sin(j),ot=new Map,P=(b,H,K)=>{let ct=b*Z+o.uniform(-.03,.03),Q=H*z+o.uniform(-.03,.03),bt=K*E;return p.v([F+ct*Y-Q*J,N+ct*J+Q*Y,W+bt],fi(q,K+.5,ct,Q,V,e.moss))};for(let b of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...b.map(([H,K,ct])=>P(H,K,ct)))};for(let F of[270,90])for(let N=0;N<5;N++){let W=11+N*1.7+o.uniform(-.2,.2),Z=le(F+o.uniform(-5,5)),z=o.uniform(1.2,1.7);M(W*Math.cos(Z),W*Math.sin(Z),-.13,z,z*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(d))}for(let F=0;F<12;F++){let N=o.uniform(0,2*Math.PI);Math.min(Math.abs(yo(N,Math.PI/2)),Math.abs(yo(N,3*Math.PI/2)))<.18&&(N+=.5);let W=o.uniform(10.5,15),Z=o.uniform(.7,1.8),z=o.choice(d),E=o.uniform(0,50),j=o.uniform(0,6.28),q=new nn(1,1),V=q.attributes.position,Y=new re().compose(new R(W*Math.cos(N),W*Math.sin(N),.05),new je().setFromAxisAngle(new R(0,0,1),j),new R(Z,Z*.9,Z*.7));for(let J=0;J<V.count;J+=3)p.f(...[0,1,2].map(ot=>{let P=new R(V.getX(J+ot),V.getY(J+ot),V.getZ(J+ot)),b=P.z;return P.applyMatrix4(Y),p.v([P.x,P.y,P.z],fi(z,(b+1)/2,V.getX(J+ot),V.getY(J+ot),E,e.moss))}));q.dispose()}a.add(new Tt(p.geo(),pe()),new Tt(y.geo(),Sn(e.rune_col,1.4*r)));let L=(()=>{let F=new R(.8,.6,0).normalize();return[F.x,F.y,0]})(),A=le(e.body_az),C=[Math.cos(A),Math.sin(A)],B=[],it=(F,N,W)=>{for(let Z=0;Z<300;Z++){let z=s.uniform(0,360);if(W&&z>245&&z<295)continue;let E=s.uniform(F,N),j=E*Math.cos(le(z)),q=E*Math.sin(le(z));if(B.every(([V,Y])=>Math.hypot(j-V,q-Y)>6))return B.push([j,q]),[j,q]}return null},v=pe({morph:!0}),w=[],tt=[],st=[],at=t?6:9,Mt=t?4:7;for(let F=0;F<at+Mt;F++){let N=F<at,W=N?it(16,32,!0):it(38,62,!1);if(!W)continue;let Z=N?s.uniform(9,15):s.uniform(16,24),z=N?s.uniform(.28,.42):s.uniform(.5,.8),E=new Tt(ht(W[0],W[1],Z,z),v);E.morphTargetInfluences=[0],a.add(E),w.push({m:E,P:s.choice([100,120,150,180,200]),flip:s.int(0,1)}),tt.push(W),st.push([W[0],W[1],2.2*z+.7])}function ht(F,N,W,Z){let z=new Jt(!1,1),E=new R(-F,-N,0).normalize(),j=s.uniform(.6,1.4),q=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.02,.07)),V=s.uniform(0,6.28),Y=ft=>new R(F+q.x*ft+.25*Math.sin(.5*ft+V),N+q.y*ft+.25*Math.cos(.4*ft+V),ft),J=ft=>{let Lt=Math.max(ft,0);return Z*(1-.55*Ot(Lt/W))*(1+.7*Math.exp(-Lt/.8))},ot=(ft,Lt,dt=0)=>{let At=j*Ot(Math.max(ft.z,0)/W)**2+dt;return z.v([ft.x,ft.y,ft.z],Lt,[[L[0]*At,L[1]*At,0]])},P=(ft,Lt)=>{let dt=new R(ft.x,ft.y,0);dt.lengthSq()>1e-12&&dt.normalize();let At=Zt(e.bark_dark,e.bark_lit,.6*Math.max(0,dt.x*E.x+dt.y*E.y));return At=Zt(At,e.bark_rim,Ot(e.bark_rim_k*Math.max(0,dt.x*C[0]+dt.y*C[1])*(1-.4*Ot(Lt/W)))),Zt(At,e.moss,Ot(1-Lt/1.8)*.6*Ie(ft.x*3+F,Lt*.8+N))},b=(ft,Lt,dt,At,Bt)=>{let Ht=ft.length,Rt=ft.map((jt,rt)=>ft[Math.min(rt+1,Ht-1)].clone().sub(ft[Math.max(rt-1,0)]).normalize()),Ct=Rt[0].clone().cross(Math.abs(Rt[0].z)>.9?new R(1,0,0):new R(0,0,1)).normalize(),kt=ft.map((jt,rt)=>{let Ut=Rt[rt];Ct=Ct.clone().addScaledVector(Ut,-Ct.dot(Ut)).normalize();let yt=Ut.clone().cross(Ct);return Array.from({length:dt},(wt,Vt)=>{let Yt=2*Math.PI*Vt/dt,he=Ct.clone().multiplyScalar(Math.cos(Yt)).addScaledVector(yt,Math.sin(Yt));return ot(jt.clone().addScaledVector(he,Lt[rt]),At(rt,he),Bt?Bt(rt):0)})});for(let jt=0;jt<Ht-1;jt++)for(let rt=0;rt<dt;rt++){let Ut=(rt+1)%dt;z.f(kt[jt][rt],kt[jt][Ut],kt[jt+1][Ut],kt[jt+1][rt])}},H=11,K=8,ct=Array.from({length:H},(ft,Lt)=>{let dt=-.4+(W+.4)*Lt/(H-1),At=Y(dt);return Array.from({length:K},(Bt,Ht)=>{let Rt=2*Math.PI*Ht/K,Ct=new R(Math.cos(Rt),Math.sin(Rt),0);return ot(At.clone().addScaledVector(Ct,J(dt)*(1+.06*Math.sin(3*Rt+dt))),P(Ct,dt))})});for(let ft=0;ft<H-1;ft++)for(let Lt=0;Lt<K;Lt++){let dt=(Lt+1)%K;z.f(ct[ft][Lt],ct[ft][dt],ct[ft+1][dt],ct[ft+1][Lt])}z.f(...ct[H-1]);let Q=[],bt=s.int(3,5);for(let ft=0;ft<bt;ft++){let Lt=W*s.uniform(.42,.9),dt=s.uniform(0,6.28),At=new R(Math.cos(dt),Math.sin(dt),0),Bt=Y(Lt).addScaledVector(At,J(Lt)*.6),Ht=At.clone().add(new R(0,0,s.uniform(.5,1.1))).normalize(),Rt=s.uniform(2,5)*(W/12)*(1.1-.5*Lt/W),Ct=Array.from({length:6},(jt,rt)=>Bt.clone().addScaledVector(Ht,Rt*(rt/5)).add(new R(0,0,-.12*Rt*(rt/5)**2))),kt=J(Lt)*.4;b(Ct,Ct.map((jt,rt)=>kt*(1-.88*rt/5)+.01),5,(jt,rt)=>P(rt,Ct[jt].z)),Q.push(...Ct.slice(2,5))}let _t=s.int(4,8);for(let ft=0;ft<_t;ft++){let Lt=s.choice(Q),dt=s.uniform(.8,2.2),At=s.uniform(0,6.28),Bt=Array.from({length:6},(Ht,Rt)=>Lt.clone().add(new R(.06*Math.sin(At+Rt)*Rt/5,.06*Math.cos(At+Rt*.8)*Rt/5,-dt*Rt/5)));b(Bt,Bt.map((Ht,Rt)=>.022*(1-.8*Rt/5)+.003),3,Ht=>Zt(e.vine_a,e.vine_b,Ht/5),Ht=>.45*(Ht/5)**1.5)}return z.geo()}{let F=new Jt,N=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[W,Z,z]of st){let E=N.map(([q,V])=>Array.from({length:14},(Y,J)=>{let ot=2*Math.PI*J/14,P=z*q*(1+.12*Math.sin(3*ot+W)),b=[W+P*Math.cos(ot),Z+P*Math.sin(ot),V+.05*Math.sin(5*ot+Z)];return F.v(b,Zt(e.mud,e.moss,Ot(.3+.6*Ie(b[0]*.8,b[1]*.8))))})),j=F.v([W,Z,.52],e.moss);for(let q=0;q<E.length-1;q++)for(let V=0;V<14;V++){let Y=(V+1)%14;F.f(E[q][V],E[q][Y],E[q+1][Y],E[q+1][V])}for(let q=0;q<14;q++)F.f(j,E[E.length-1][q],E[E.length-1][(q+1)%14])}a.add(new Tt(F.geo(),pe()))}let vt=pe({morph:!0,double:!0}),D=[0,1].map(F=>{let N=new Jt(!1,1),W=(t?160:300)/2,Z=(q,V,Y,J,ot)=>Array.from({length:Y},(P,b)=>{let H=2*Math.PI*b/Y;return N.v([q[0]+V*Math.cos(H),q[1]+V*Math.sin(H),q[2]],J,[[L[0]*ot,L[1]*ot,0]])}),z=(q,V)=>{for(let Y=0;Y<q.length;Y++){let J=(Y+1)%q.length;N.f(q[Y],q[J],V[J],V[Y])}},E=0;for(;E<W;){let q,V;if(tt.length&&o.random()<.6){let[Q,bt]=o.choice(tt),_t=o.uniform(0,6.283),ft=o.uniform(1,4.5);q=Q+ft*Math.cos(_t),V=bt+ft*Math.sin(_t)}else{let Q=o.uniform(0,6.283),bt=o.uniform(11.5,48);q=bt*Math.cos(Q),V=bt*Math.sin(Q)}if(Math.hypot(q,V)<11)continue;E++;let Y=o.uniform(1.2,3),J=o.uniform(-.25,.25)*Y*.5,ot=o.uniform(-.25,.25)*Y*.5,P=Q=>[q+J*Q*Q,V+ot*Q*Q,-.3+(Y+.3)*Q],b=Q=>.12*Y*Q*Q,H=[0,.37,.74].map(Q=>Z(P(Q),.018-.008*Q,3,e.reed,b(Q)));z(H[0],H[1]),z(H[1],H[2]);let K=[[.75,.012],[.83,.055],[.92,.045]].map(([Q,bt])=>Z(P(Q),bt,5,e.cat,b(Q)));z(K[0],K[1]),z(K[1],K[2]);let ct=N.v(P(1),e.cat,[[L[0]*b(1),L[1]*b(1),0]]);for(let Q=0;Q<5;Q++)N.f(K[2][Q],K[2][(Q+1)%5],ct)}let j=new Tt(N.geo(),vt);return j.morphTargetInfluences=[0],a.add(j),j});{let F=new Jt;for(let N=0;N<(t?36:60);N++){let W=o.uniform(0,6.283),Z=o.uniform(11.5,44),z=Z*Math.cos(W),E=Z*Math.sin(W),j=o.uniform(.3,.7),q=o.int(0,11),V=o.choice(e.lily),Y=F.v([z,E,.04],V),J=Array.from({length:12},(ot,P)=>{let b=2*Math.PI*P/12;return F.v([z+j*Math.cos(b),E+j*.9*Math.sin(b),.04],de(V,.8))});for(let ot=0;ot<12;ot++)ot!==q&&F.f(Y,J[ot],J[(ot+1)%12])}a.add(new Tt(F.geo(),pe({double:!0})))}let et=new Jt(!1,1),k=new Jt;for(let F=0;F<8;F++){let N=o.uniform(0,6.283),W=o.uniform(12,36),Z=o.uniform(0,6.283),z=new R(W*Math.cos(N),W*Math.sin(N),.05),E=new re().makeRotationZ(Z),j=new nn(1,1),q=j.attributes.position,V=new re().makeTranslation(z.x,z.y,z.z).multiply(E).multiply(new re().makeScale(.22,.3,.13));for(let Y=0;Y<q.count;Y+=3)k.f(...[0,1,2].map(J=>{let ot=new R(q.getX(Y+J),q.getY(Y+J),q.getZ(Y+J)).applyMatrix4(V);return k.v([ot.x,ot.y,ot.z],[.008,.012,.009])}));j.dispose();for(let Y of[-1,1]){let J=z.clone().add(new R(Y*.09,.12,.12).applyMatrix4(E)),P=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(b=>et.v([J.x+b[0]*.035,J.y+b[1]*.035,J.z+b[2]*.035],[1,1,1],[[0,0,b[2]*.035*(.08-1)]]));for(let[b,H]of[[0,2],[2,1],[1,3],[3,0]])et.f(P[b],P[H],P[4]),et.f(P[H],P[b],P[5])}}a.add(new Tt(k.geo(),pe()));let $=new Tt(et.geo(),Sn(e.eye_col,1.8));$.morphTargetInfluences=[0],a.add($);let X=Array.from({length:Math.floor(3480/20)},(F,N)=>60+N*20),I=[];for(let F=0;F<6;F++)I.push(X.splice(o.int(0,X.length-1),1)[0]);{let F=new Jt;[[70,46,14,22],[95,58,18,30]].forEach(([N,W,Z,z],E)=>{let j=Zt(e.back_col,u,.55+.2*E);for(let q=0;q<W;q++){let V=2*Math.PI*(q+s.uniform(-.4,.4))/W+E*.5,Y=[N*Math.cos(V),N*Math.sin(V)],J=[-Math.sin(V),Math.cos(V)],ot=s.uniform(Z,z),P=s.uniform(.35,.9)*(1+.5*E),b=s.uniform(0,6.28),H=s.uniform(-.06,.06),K=Q=>{let bt=-2+(ot+2)*Q,_t=Math.sin(Q*3+b)*.5+H*bt;return[Y[0]+J[0]*_t,Y[1]+J[1]*_t,bt]},ct=Array.from({length:6},(Q,bt)=>{let _t=bt/5,ft=P*(1-.5*_t),Lt=Zt(j,u,Ot(_t*_t*.9)),dt=K(_t);return[F.v([dt[0]-J[0]*ft/2,dt[1]-J[1]*ft/2,dt[2]],Lt),F.v([dt[0]+J[0]*ft/2,dt[1]+J[1]*ft/2,dt[2]],Lt)]});for(let Q=0;Q<5;Q++)F.f(ct[Q][0],ct[Q][1],ct[Q+1][1],ct[Q+1][0]);for(let Q of[-1,1]){let bt=K(s.uniform(.55,.8)),_t=[bt[0]+J[0]*Q*ot*.16,bt[1]+J[1]*Q*ot*.16,bt[2]+ot*.12],ft=Zt(j,u,.6);F.f(F.v([bt[0],bt[1],bt[2]-.1],ft),F.v([bt[0],bt[1],bt[2]+.1],ft),F.v([_t[0],_t[1],_t[2]+.04],ft),F.v([_t[0],_t[1],_t[2]-.04],ft))}}}),a.add(new Tt(F.geo(),hi({fog:!1})))}let S=[];for(let F=0;F<Math.round(14*e.orb_k*(t?.6:1));F++){let N=o.uniform(0,6.283),W=o.uniform(12,42);S.push({p:[W*Math.cos(N),W*Math.sin(N),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[F,N,W]of x)S.push({p:[F,N,W+.9],k:1.4,amp:o.uniform(.15,.4)});let T=$a({list:S,col:e.orb_col,gain:1.2});a.add(T.group);let O=di({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let F=o.uniform(0,6.283),N=o.uniform(4,44);return[N*Math.cos(F),N*Math.sin(F),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(O.obj);let G=new Jt(!0);return ws(G,9.4,.7,(F,N)=>{let W=Math.hypot(F,N);return W<.01?1:xe(0,3,9.4-W)*(.7+.3*Ie(W*.4,Math.atan2(N,F)*6.4))},e.wash_col,.28*.5),a.add(new Tt(G.geo(),Rr())),{group:a,floor:.6,update(F){m.update(F);for(let Z of w)Z.m.morphTargetInfluences[0]=mn(F,Z.P/2,.15,1,Z.flip);D.forEach((Z,z)=>{Z.morphTargetInfluences[0]=mn(F,60,0,1,z)}),_.morphTargetInfluences[0]=mn(F,90,0,1,0),_.morphTargetInfluences[1]=mn(F,90,0,1,1);let N=Math.sin(F%3600/3600*Math.PI);for(let Z of f)Z.m.rotation.z=Z.s*N;let W=0;for(let Z of I)Math.abs(F%3600-Z)<3&&(W=1-Math.abs(F%3600-Z)/3);$.morphTargetInfluences[0]=W,T.update(F),O.update(F)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...x.map(F=>({pos:[F[0],F[1],F[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),pi(a)}}}var Gh={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},vn=24,vy=vn+1.6,by=160;function ad(i,t){let e=i==="night"?Gh.NIGHT:i==="day"?{...mi(Gh.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:Gh.SUNSET,n=e.emit,r=n*.75,s=un(31),o=un(55),a=new ie,c=[pn(e.body_az,e.body_el)],l=Oi(e,c),h=le(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(k=>ir(k,e.exposure)),d=le(e.body_az),m=(()=>{let k=new R(.8,.6,0).normalize();return[k.x,k.y,0]})(),g=e.stone,_=ui({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let f=k=>vy*(1+.25*(1-Math.exp(k/60))),p=(k,$)=>.12*Math.sin(k*.33)*Math.cos($*.29)*xe(8,14,Math.hypot(k,$)),y=(k,$)=>Zt(Zt(e.earth_a,e.earth_b,Ot(We(k*.12+5,$*.12-3,3)*1.4-.2)),e.moss,Ot((Ie(k*.4,$*.4)-.62)*3)*.6);{let k=new Jt,$=[8,10,12,14,16,18,20,22,vn-1,vn,vn+.6,vn+1.2,vn+1.6],X={[vn+.6]:.3,[vn+1.2]:.15,[vn+1.6]:-.4},I=72,S=$.map(T=>Array.from({length:I},(O,G)=>{let F=2*Math.PI*G/I,N=T*Math.cos(F),W=T*Math.sin(F);return k.v([N,W,X[T]??p(N,W)],T<=vn+.01?y(N,W):Zt(e.bark,e.moss,.5+.3*Ie(N*.5,W*.5)))}));for(let T=0;T<$.length-1;T++)for(let O=0;O<I;O++){let G=(O+1)%I;k.f(S[T][O],S[T+1][O],S[T+1][G],S[T][G])}a.add(new Tt(k.geo(),pe({flat:!1})))}{let k=new Jt,$=t?28:40,X=t?48:72,I=Array.from({length:$},(S,T)=>{let O=-.4-by*(T/($-1))**1.6;return Array.from({length:X},(G,F)=>{let N=2*Math.PI*F/X,W=f(O)*(1+.04*Math.sin(14*N+.8*Math.sin(.05*O))+.025*Math.sin(5*N+.02*O)),Z=Math.sin(14*N+.8*Math.sin(.05*O)),z=Zt(e.bark,e.bark_hi,Ot(.5+.5*Z)*.5);z=Zt(z,e.bark_hi,.4*Math.max(0,Math.cos(N-d))),z=Zt(z,e.moss,Ot(1+O/25)*Ot((Ie(N*3,O*.15)-.4)*2.5)*.8);let E=Math.abs(Math.sin(7*N+1.5*Math.sin(.04*O+3*N)));return z=Zt(z,e.vein,Ot(1-E*7)*(.4+.6*Ie(O*.05,N*2))*.9),k.v([W*Math.cos(N),W*Math.sin(N),O],Zt(z,de(u,.6),Ot((-O-15)/110)**1.2))})});for(let S=0;S<$-1;S++)for(let T=0;T<X;T++){let O=(T+1)%X;k.f(I[S][T],I[S+1][T],I[S+1][O],I[S][O])}a.add(new Tt(k.geo(),pe({emit:.3,flat:!1})))}let x=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([k,$],X)=>{let I=new Jt(!0),S=f(k)-.3,T=[S,S+4,S+10,S+20,S+32,S+46,S+64,S+84,S+106,150],O=64,G=T.map(W=>Array.from({length:O},(Z,z)=>{let E=2*Math.PI*z/O,j=W*Math.cos(E),q=W*Math.sin(E),V=$*(.55+.45*We(j*.03+X*7,q*.03,3))*xe(0,6,W-S);return I.v([j,q,k],[...Zt(e.sea_col,u,xe(60,150,W)),V])}));for(let W=0;W<T.length-1;W++)for(let Z=0;Z<O;Z++){let z=(Z+1)%O;I.f(G[W][Z],G[W+1][Z],G[W+1][z],G[W][z])}let F=new Ke({vertexColors:!0,transparent:!0,depthWrite:!1,side:Re,fog:!1,toneMapped:!1});F.color.setScalar(1.7);let N=new Tt(I.geo(),F);N.renderOrder=2,a.add(N),x.push({m:N,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(rr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let M=new Jt,L=new Jt,A=[];for(let k of[0,60,120,180,240,300]){let $=le(k),X=12.5,I=o.uniform(5,8),S=1.8,T=1.2,O=X*Math.cos($),G=X*Math.sin($),F=-.4,N=$-Math.PI/2,W=Math.cos(N),Z=Math.sin(N),z=o.choice(g),E=o.uniform(0,50),j=new Map,q=(ot,P,b)=>{let H=`${ot},${P},${b}`,K=j.get(H);K||(K=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],j.set(H,K));let ct=ot*S,Q=P*T,bt=(b+.5)*I;if(bt>I*.5){let ft=1-.18*((bt-I*.5)/(I*.5));ct*=ft,Q*=ft}ct+=K[0],Q+=K[1];let _t=bt+K[2];return M.v([O+ct*W-Q*Z,G+ct*Z+Q*W,F+_t],fi(z,_t/I,ct,_t*.7,E,e.moss))},V=4,Y=ot=>-.5+ot/V,J=ot=>{for(let P=0;P<V;P++)for(let b=0;b<V;b++)M.f(q(...ot(P,b)),q(...ot(P+1,b)),q(...ot(P+1,b+1)),q(...ot(P,b+1)))};J((ot,P)=>[Y(ot),-.5,Y(P)]),J((ot,P)=>[Y(P),.5,Y(ot)]),J((ot,P)=>[-.5,Y(P),Y(ot)]),J((ot,P)=>[.5,Y(ot),Y(P)]),J((ot,P)=>[Y(P),Y(ot),.5]);for(let[ot,P,b]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let H=-T/2-.02,K=I*ot,ct=O-H*Z,Q=G+H*W;L.f(...[[-P/2,-b/2],[P/2,-b/2],[P/2,b/2],[-P/2,b/2]].map(([bt,_t])=>L.v([ct+bt*W,Q+bt*Z,F+K+_t],[1,1,1])))}A.push([O,G,I-.4])}a.add(new Tt(M.geo(),pe()),new Tt(L.geo(),Sn(e.rune_col,1.4*r)));let C=(k,$,X,I,S,T,O,G,F=!0)=>{let N=Array.from({length:O},(Z,z)=>{let E=Math.PI/2*z/O,j=z/O;return Array.from({length:T},(q,V)=>{let Y=2*Math.PI*V/T,J=.1*j*j*S;return k.v([$[0]+X*Math.cos(E)*Math.cos(Y),$[1]+I*Math.cos(E)*Math.sin(Y),$[2]+S*Math.sin(E)],G(j,Y),F?[[m[0]*J,m[1]*J,0]]:void 0)})}),W=k.v([$[0],$[1],$[2]+S],G(1,0),F?[[m[0]*.1*S,m[1]*.1*S,0]]:void 0);for(let Z=0;Z<O-1;Z++)for(let z=0;z<T;z++){let E=(z+1)%T;k.f(N[Z][z],N[Z][E],N[Z+1][E],N[Z+1][z])}for(let Z=0;Z<T;Z++)k.f(N[O-1][Z],N[O-1][(Z+1)%T],W)},B=(k,$,X,I,S)=>{let T=new Jt(!1,1);for(let[G,F,N,W]of k){let Z=o.uniform(.85,1.15),z=p(G,F)-.2,E=(j,q)=>de(Zt($,X,Ot(j*(.75+.25*Math.cos(q-d)))**.9),Z);for(let j=0;j<W;j++){let q=o.uniform(0,6.283),V=j?o.uniform(0,.6)*N:0,Y=N*o.uniform(.7,1);C(T,[G+V*Math.cos(q),F+V*Math.sin(q),z],Y,Y,Y*.85,I,S,E)}}let O=new Tt(T.geo(),pe({flat:!1,morph:!0}));return O.morphTargetInfluences=[0],a.add(O),O},it=[];for(let k=0;it.length<(t?40:70)&&k<3e3;k++){let $=o.uniform(0,2*Math.PI),X=o.uniform(11.5,vn-1.5);if($*180/Math.PI%360>255&&$*180/Math.PI%360<285&&X>15)continue;let I=X*Math.cos($),S=X*Math.sin($);A.some(([T,O])=>Math.hypot(I-T,S-O)<2.8)||it.push([I,S,o.uniform(1,2.2),o.int(2,4)])}let v=B(it,e.bush_lo,e.bush_hi,12,3),w=Array.from({length:30},(k,$)=>{let X=2*Math.PI*($+o.uniform(-.3,.3))/30,I=vn-.6+o.uniform(-.8,.8);return[I*Math.cos(X),I*Math.sin(X),o.uniform(2,3.5),2]}),tt=B(w,e.hedge_lo,e.hedge_hi,16,4);{let k=new Jt;[62,85,112,140].forEach(($,X)=>{let I=1+.25*X;for(let S=0;S<(t?12:20);S++){let T=2*Math.PI*(S+s.uniform(-.4,.4))/20+X*.4,O=$+s.uniform(-6,6);for(let G=0;G<2;G++){let F=G?s.uniform(-9,9):0,N=O*Math.cos(T)-F*Math.sin(T),W=O*Math.sin(T)+F*Math.cos(T),Z=s.uniform(9,16)*I*(G?.7:1),z=s.uniform(28,46)*I*(G?.75:1),E=.35+.15*X,j=s.uniform(.85,1.15);C(k,[N,W,-30],Z,Z,z,14,7,q=>Zt(de(e.can_col,j),de(u,.7),Ot(E+.25*q)),!1)}}}),a.add(new Tt(k.geo(),pe({emit:.85,flat:!1})))}let st=[];for(let k=0;k<Math.round(18*e.orb_k*(t?.6:1));k++){let $=o.uniform(0,6.283),X=10.5+(vn-8.5)*Math.sqrt(o.random());st.push({p:[X*Math.cos($),X*Math.sin($),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[k,$,X]of A)st.push({p:[k,$,X+.9],k:1.4,amp:o.uniform(.15,.4)});let at=$a({list:st,col:e.orb_col,gain:1.2});a.add(at.group);let Mt=Math.round(160*e.fire_k*(t?.5:1)),ht=Math.round(40*e.fire_k*(t?.5:1)),vt=0,D=di({r:o,n:Mt+ht,at:()=>{if(vt++<Mt){let X=o.uniform(0,6.283),I=(vn+4)*Math.sqrt(o.random());return[I*Math.cos(X),I*Math.sin(X),.3+8.7*o.random()**1.6]}let k=o.uniform(0,6.283),$=o.uniform(vn+2,vn+14);return[$*Math.cos(k),$*Math.sin(k),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});Mt+ht>0&&a.add(D.obj);let et=new Jt(!0);return ws(et,9.4,.7,(k,$)=>{let X=Math.hypot(k,$);return X<.01?1:xe(0,3,9.4-X)*(.7+.3*Ie(X*.4,Math.atan2($,k)*6.4))},e.wash_col,.28*.5),a.add(new Tt(et.geo(),Rr())),{group:a,floor:.6,update(k){_.update(k),v.morphTargetInfluences[0]=mn(k,60,.15,1,1),tt.morphTargetInfluences[0]=mn(k,90,.15,1,1);let $=Math.sin(k%3600/3600*Math.PI);for(let X of x)X.m.rotation.z=X.s*$;at.update(k),D.update(k)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...A.slice(0,4).map(k=>({pos:[k[0],k[1],k[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),pi(a)}}}var Ey={forest:rd,plains:sd,swamp:od,worldtree:ad,castle:id};function cd(i,t,e){let n=Ey[i];return n?n(t,e):null}var Pt=(i,t)=>i+Math.random()*(t-i),Sy=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function Pr(i,t=!1){let e=new Pn(i);return e.colorSpace=Je,t&&(e.magFilter=fn,e.minFilter=fn,e.generateMipmaps=!1),e}function xo(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),Pr(e)}function ld(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let r=0;r<n.length;r++)e.save(),e.rotate(r/n.length*Math.PI*2),e.fillText(n[r],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let r=0;r<=5;r++){let s=r*4*Math.PI/5-Math.PI/2,o=Math.cos(s)*180,a=Math.sin(s)*180;r?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),Pr(t)}function wy(i,t,e=160){let n=document.createElement("canvas"),r=[...i].length;n.width=Math.max(256,Math.ceil(r*e*1.05+80)),n.height=e+80;let s=n.getContext("2d");return s.font=`900 ${e}px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif`,s.textAlign="center",s.textBaseline="middle",s.shadowColor=t,s.shadowBlur=34,s.fillStyle=t,s.fillText(i,n.width/2,n.height/2),s.shadowBlur=10,s.fillStyle="#ffffff",s.fillText(i,n.width/2,n.height/2),{tex:Pr(n),aspect:n.width/n.height}}function Ty(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),Pr(e)}function Ay(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let r=n*56,s=r+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,s,c,l),t.arc(512,512,Math.max(r,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=Pr(i);return e.anisotropy=4,e}function Ry(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,r=e?Number(e[2]):20,s=Math.max(1,Math.floor(512/Math.max(n,r))),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*s}" height="${r*s}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*s,c.height=r*s;let l=c.getContext("2d");l.imageSmoothingEnabled=!1,l.drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(Pr(c,!0),n/r)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function Cy(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let r=document.createElement("canvas");r.width=2048,r.height=1152;let s=r.getContext("2d");s.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=s.getImageData(0,a,2048,c-a).data,h=0,u=0,d=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],d+=l[g+2],m++;return new zt(h/m/255,u/m/255,d/m/255).convertSRGBToLinear()};t(Pr(r),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var Py={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},Iy=["forest","swamp","worldtree"];function Ly(i,t={}){let e,n=!!t.lite;try{e=new us({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let r=!1,s=()=>r?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(s()),e.toneMapping=uo,e.toneMappingExposure=1.15;let o=new fs;o.fog=new wa(1709616,20,58);let a=new ln(55,16/9,.05,200),c=new R(0,1.75,7.2),l=new R(0,1.45,0);a.position.copy(c),o.add(a);let h=new gs(16777215,2236962,1),u=new Di(16777215,1);o.add(h,u);let d=new ni(16777215,6,9,2);d.position.set(0,3,7.5),o.add(d);let m=new Di(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new ie;o.add(g);let _=new Ke({color:16777215,fog:!1,side:Re}),f=new Tt(new ze(70,70,66,48,1,!0,Math.PI-.95,1.9),_);f.scale.set(-1,1,1),f.position.set(0,13,6),g.add(f);let p=new Ee({color:2767396,roughness:1}),y=new Tt(new so(90,48),p);y.rotation.x=-Math.PI/2,y.position.y=-.02,g.add(y);let x=new Ee({color:5208634,roughness:.9,flatShading:!0}),M=2600,L=new ds(new jn(.05,.42,3),x,M);{let nt=new re,Et=new je,pt=new hn,xt=new R,Ft=new R,qt=new zt;for(let Gt=0;Gt<M;Gt++){let be=9.9+Math.pow(Math.random(),.7)*30,It=Math.random()*Math.PI*2;xt.set(Math.cos(It)*be,.18,Math.sin(It)*be-1),pt.set(Pt(-.25,.25),Math.random()*3,Pt(-.25,.25)),Et.setFromEuler(pt);let St=Pt(.7,1.6);Ft.set(St,St*Pt(.8,1.5),St),nt.compose(xt,Et,Ft),L.setMatrixAt(Gt,nt),L.setColorAt(Gt,qt.setHSL(Pt(.22,.32),Pt(.35,.6),Pt(.3,.5)))}}g.add(L);let A=new ie;g.add(A);let C=new Ee({color:1981226,roughness:1,flatShading:!0}),B=new Ee({color:3811868,roughness:1}),it=new Ee({color:6051942,roughness:1,flatShading:!0});function v(nt){A.clear();let Et=Iy.includes(nt),pt=Et?70:34;for(let xt=0;xt<pt;xt++){let Ft=Pt(Math.PI*1.08,Math.PI*1.92),qt=Pt(24,48),Gt=Math.cos(Ft)*qt,be=Math.sin(Ft)*qt-1;if(Et){let It=Pt(6,13),St=new ie,ge=new Tt(new ze(.25,.4,It*.3,6),B);ge.position.y=It*.15,St.add(ge);for(let Ge=0;Ge<3;Ge++){let Hn=new Tt(new jn(It*(.32-Ge*.07),It*.5,7),C);Hn.position.y=It*(.42+Ge*.2),St.add(Hn)}St.position.set(Gt,0,be),A.add(St)}else{let It=new Tt(new nn(Pt(.8,2.6),0),Math.random()<.5?it:C);It.position.set(Gt,.3,be),It.scale.y=Pt(.5,.9),It.rotation.y=Math.random()*3,A.add(It)}}}let w=new Tt(new so(9.5,64),new Ee({map:Ay(),roughness:.92,metalness:.02}));w.rotation.x=-Math.PI/2,g.add(w);let tt=new Tt(new ti(9.5,.18,8,96),new Ee({color:4933206,roughness:.85}));tt.rotation.x=Math.PI/2,tt.position.y=.05,g.add(tt);let st=new Tt(new Ui(9,9),new Ke({map:ld("#a98bff"),transparent:!0,opacity:.38,blending:Qe,depthWrite:!1}));st.rotation.x=-Math.PI/2,st.position.y=.03,st.scale.x=-1,o.add(st);let at=new Ee({color:5919846,roughness:.9}),Mt=xo("rgba(255,170,80,1)","rgba(255,120,40,0)"),ht=[];for(let nt of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let Et=nt-Math.PI/2,pt=Math.cos(Et)*10.4,xt=Math.sin(Et)*10.4-1.5,Ft=new ie,qt=new Tt(new ze(.42,.5,4.2,10),at);qt.position.y=2.1;let Gt=new Tt(new dn(1.2,.3,1.2),at);Gt.position.y=4.35;let be=new Tt(new ze(.42,.22,.3,10),new Ee({color:2959923,metalness:.6,roughness:.4}));be.position.y=4.65;let It=new Qn(new Bn({map:Mt,color:16756832,blending:Qe,depthWrite:!1,transparent:!0}));It.position.y=5.05,It.scale.set(1.3,1.8,1);let St=new ni(16751178,10,14,2);St.position.y=5.1,Ft.add(qt,Gt,be,It,St),Ft.position.set(pt,0,xt),g.add(Ft),ht.push({light:St,flame:It,base:1,phase:Math.random()*10})}let vt=260,D=new ye,et=new Float32Array(vt*3),k=new Float32Array(vt);for(let nt=0;nt<vt;nt++)et[nt*3]=Pt(-14,14),et[nt*3+1]=Pt(0,7),et[nt*3+2]=Pt(-12,6),k[nt]=Math.random()*100;D.setAttribute("position",new Pe(et,3));let $=new ji({size:.12,map:xo(),transparent:!0,depthWrite:!1,blending:Qe,color:16777215,sizeAttenuation:!0});g.add(new tr(D,$));let X=xo(),I=xo("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),S=xo("rgba(150,120,255,1)","rgba(120,80,255,0)"),T=new Map;function O(nt,Et){let pt=new ie,xt=null,Ft=null,qt=null,Gt=1.95;Et.svg?(Gt=4.6,qt=new Bn({transparent:!0,alphaTest:.05}),Ft=new Qn(qt),Ft.center.set(.5,0),Ft.scale.set(Gt*1.33,Gt,1),Ry(Et.svg,(ge,Ge)=>{qt.map=ge,qt.needsUpdate=!0,Ft.scale.set(Gt*Ge,Gt,1)}),pt.add(Ft)):(xt=Bf(Uh(Et.character??"wizard"),nt==="me"?"me":nt.startsWith("ally:")?"ally":"opp",X,Et.staff),Gt=xt.height,pt.add(xt.root));let be=new Tt(new Ui(Gt*.7,Gt*.32),new Ke({map:I,transparent:!0,depthWrite:!1}));if(be.rotation.x=-Math.PI/2,be.position.y=.02,pt.add(be),nt!=="me"){let ge=new Tt(new Ui(Gt*1.1,Gt*1.1),new Ke({map:ld(nt==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:Qe,depthWrite:!1}));ge.rotation.x=-Math.PI/2,ge.position.y=.04,ge.name="circle",pt.add(ge)}let It=new Qn(new Bn({map:S,blending:Qe,depthWrite:!1,transparent:!0,opacity:0}));It.scale.set(Gt*1.2,Gt*1.2,1),It.position.y=Gt*.5,pt.add(It),o.add(pt);let St={key:nt,group:pt,model:xt,sprite:Ft,spriteMat:qt,height:Gt,ko:!1,flame:null,aura:It,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100}};return T.set(nt,St),St}function G(){for(let nt of T.values())o.remove(nt.group),nt.group.traverse(Et=>{let pt=Et;pt.geometry?.dispose?.(),pt.material?.dispose?.()});T.clear()}let F=new ie;a.add(F);let N=new R(1.08,-.52,-1.6),W=new R(1.14,-.6,-1.6);F.scale.setScalar(.72);let Z=N.clone(),z=new Ee({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),E=new Ee({color:4020950,roughness:.9,flatShading:!0,side:Re}),j=new Ee({color:15778970,roughness:.75,flatShading:!0}),q=new ie;F.add(q);let V=Hi("verdant",X),Y="verdant";q.add(V.group);let J=new ni(V.color,.6,4,2);J.position.y=nr,q.add(J);function ot(nt){nt!==Y&&(Y=nt,q.remove(V.group),V.group.traverse(Et=>{Et.geometry?.dispose?.()}),V=Hi(nt,X),q.add(V.group),J.color.copy(V.color))}{let nt=(Ft,qt,Gt,be,It,St)=>{let ge=new Tt(Ft,qt);return ge.position.set(be,It,St),Gt.add(ge),ge},Et=nt(new ro(.046,.075,4,10),j,q,.066,-.004,.014);Et.scale.set(.82,1,1.12),Et.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((Ft,qt)=>{let Gt=.05-qt*.002,be=nt(new ti(Gt,.019-qt*.001,6,14,Math.PI*1.32),j,q,0,Ft,0);be.rotation.x=-Math.PI/2;let It=Math.PI*1.32;nt(new rn(.019-qt*.001,6,5),j,q,Math.cos(It)*Gt,Ft,-Math.sin(It)*Gt)}),nt(new ro(.021,.075,4,8),j,q,.022,.074,.05).rotation.set(.3,0,1.25);let xt=new ie;xt.position.set(.09,-.08,.03),xt.rotation.set(-.55,0,.62),F.add(xt),nt(new ze(.05,.062,.2,10),j,xt,0,-.08,0),nt(new ze(.1,.16,.95,10,1,!0),E,xt,0,-.6,0),nt(new ti(.1,.028,6,14),z,xt,0,-.14,0).rotation.x=Math.PI/2}let P=new ni(16777215,1.4,3,2);P.position.set(.3,.3,-.5),a.add(P);let b={wizard:{sleeve:4020950,skin:15778970},witch:{sleeve:5979790,skin:15259346},goblin:{sleeve:8018478,skin:7323466},knight:{sleeve:12897496,skin:12107980},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},H=-1e9,K="ready",ct=0,Q=900,bt=()=>{K==="gone"&&(K="growing",ct=performance.now())},_t=0,ft=0,Lt=null,dt=!1,At={uTime:{value:0},uAmount:{value:0},uC0:{value:new zt},uC1:{value:new zt},uC2:{value:new zt},uC3:{value:new zt}},Bt=new Tt(new Ui(1,1),new Cn({uniforms:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:Qe,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime, uAmount; uniform vec3 uC0, uC1, uC2, uC3; varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y); }
      float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }
      void main() {
        vec2 uv = vUv;
        // tongues of fire licking upwards, and a current of mana running sideways along the bottom
        float tongues = fbm(vec2(uv.x * 9.0, uv.y * 1.6 - uTime * 2.3));
        float flow = fbm(vec2(uv.x * 4.0 - uTime * 1.2, uv.y * 2.2 - uTime * 0.9));
        float wisps = fbm(vec2(uv.x * 16.0 + uTime * 0.5, uv.y * 4.0 - uTime * 3.0));
        float f = (1.0 - uv.y) * 1.6 + (tongues - 0.5) * 1.6 + (flow - 0.5) * 0.9 + (wisps - 0.5) * 0.5 - 0.38;
        f = smoothstep(0.0, 0.85, f);
        float heat = f * (0.6 + 0.4 * tongues); // brighter in the tongues, not a flat band
        vec3 col = mix(uC3, uC2, smoothstep(0.0, 0.35, heat));
        col = mix(col, uC1, smoothstep(0.3, 0.6, heat));
        col = mix(col, uC0, smoothstep(0.7, 0.95, heat));
        gl_FragColor = vec4(col * min(f, 0.75) * uAmount * 0.55, 1.0); // added on top of the scene: glows, never hides it
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));Bt.renderOrder=30,Bt.frustumCulled=!1,a.add(Bt);function Ht(){let Et=Math.tan(_s.degToRad(a.fov/2))*1.2,pt=Et*.55;Bt.scale.set(Et*a.aspect*2.05,pt,1),Bt.position.set(0,-Et+pt/2,-1.2)}function Rt(nt){let Et={h:0,s:0,l:0};nt.getHSL(Et),At.uC0.value.setHSL(Et.h,1,.82),At.uC1.value.setHSL(Et.h,1,.6),At.uC2.value.setHSL(Et.h,.95,.45),At.uC3.value.setHSL((Et.h+.03)%1,.9,.22)}let Ct=new R;function kt(nt,Et="chest"){if(nt==="me")return Et==="staff"||Et==="head"?(V.gem.getWorldPosition(Ct),Ct.clone()):a.localToWorld(new R(Pt(-.15,.15),-.1,-1.4));let pt=T.get(nt);if(!pt)return new R(0,1.4,-3);if(pt.model&&Et==="staff")return pt.model.crystal.getWorldPosition(Ct),Ct.clone();let xt=pt.group.position.clone(),Ft=pt.height*pt.group.scale.y;return nt==="boss"&&Et==="mouth"?xt.add(new R(-pt.height*.55,pt.height*.62,.3)):xt.add(new R(0,Ft*(Et==="head"?.85:.6),0))}let jt=[],rt=0;function Ut(nt,Et,pt={}){if(n&&rt++&1)return;let xt=new Qn(new Bn({map:X,color:Et,blending:pt.solid?ai:Qe,depthWrite:!1,transparent:!0,opacity:pt.opacity??1}));xt.position.copy(nt),xt.scale.setScalar(pt.size??.25),o.add(xt),jt.push({sprite:xt,vel:pt.vel??new R,life:0,max:pt.life??.6,grow:pt.grow??0,gravity:pt.gravity??0})}function yt(nt,Et,pt=26,xt=3.2,Ft=.22){for(let qt=0;qt<pt;qt++){let Gt=new R(Pt(-1,1),Pt(-.6,1.2),Pt(-1,1)).normalize().multiplyScalar(Pt(xt*.4,xt));Ut(nt,Et,{vel:Gt,size:Pt(Ft*.6,Ft*1.4),life:Pt(.4,.9),gravity:-3})}Ut(nt,Et,{size:.6,grow:6,life:.35,opacity:.9})}function wt(nt,Et,pt=1){let xt=nt.group.position,Ft=nt.model?.45:nt.height*.35;for(let qt=0;qt<pt;qt++){let Gt=nt.group.scale.y;Ut(new R(xt.x+Pt(-Ft,Ft)*Gt,xt.y+Pt(.05,nt.height*.45)*Gt,xt.z+Pt(-Ft,Ft)*.5*Gt),Et,{size:Pt(.35,.7)*Gt,vel:new R(Pt(-.1,.1),Pt(1.4,2.6),0),life:Pt(.35,.65),grow:-.9,opacity:.75,solid:!0}),Ut(new R(xt.x+Pt(-Ft,Ft)*.6*Gt,xt.y+Pt(.05,nt.height*.35)*Gt,xt.z),Et,{size:Pt(.3,.5)*Gt,vel:new R(0,Pt(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Ut(new R(xt.x+Pt(-Ft,Ft)*Gt,xt.y+Pt(.2,nt.height*.9)*Gt,xt.z),16777215,{size:Pt(.05,.1)*Gt,vel:new R(0,Pt(1.5,3),0),life:.5})}}let Vt=[];function Yt(nt){for(let pt=0;pt<2;pt++){let xt=[],Ft=nt.clone().add(new R(Pt(-1.5,1.5),9,Pt(-1,1)));for(let Gt=0;Gt<=12;Gt++){let be=Ft.clone().lerp(nt,Gt/12);Gt>0&&Gt<12&&be.add(new R(Pt(-.45,.45),Pt(-.2,.2),Pt(-.3,.3))),xt.push(be)}let qt=new Pa(new ye().setFromPoints(xt),new eo({color:pt?16777215:10475775,transparent:!0,blending:Qe,depthWrite:!1}));o.add(qt),Vt.push({line:qt,life:0});for(let Gt=0;Gt<xt.length-1;Gt++){let be=xt[Gt].distanceTo(xt[Gt+1]);for(let It=0;It<be;It+=.09)Ut(xt[Gt].clone().lerp(xt[Gt+1],It/be),pt?16777215:9425151,{size:pt?.12:.3,life:.28,opacity:pt?1:.7})}}let Et=new ni(12576511,60,16,2);Et.position.copy(nt).add(new R(0,2,1)),o.add(Et),setTimeout(()=>o.remove(Et),160),yt(nt,12576511,30,4,.18)}let he=[];function Le(nt,Et,pt="#ffd479"){let xt=new Qn(new Bn({map:Ty(Et,pt),transparent:!0,depthWrite:!1,depthTest:!1}));xt.position.copy(kt(nt,"head")).add(new R(Pt(-.3,.3),.4,.3));let Ft=nt==="me"?.9:1.3;xt.scale.set(Ft,Ft/2,1),xt.renderOrder=10,o.add(xt),he.push({sprite:xt,life:0})}let ke=document.createElement("div");ke.className="arena3d-hit",document.body.append(ke);function me(nt="255,40,60",Et=""){ke.style.setProperty("--hit",nt),ke.className="arena3d-hit",ke.offsetWidth,ke.className=`arena3d-hit on ${Et}`}let Ve=0,wn=nt=>{Sy()||(Ve=Math.max(Ve,nt))},gi=[];function Mo(nt,Et,pt,xt,Ft,qt){let{tex:Gt,aspect:be}=wy(pt,xt),It=new Qn(new Bn({map:Gt,transparent:!0,depthWrite:!1}));It.scale.set(Ft*be*.4,Ft*.4,1),It.position.copy(nt),It.renderOrder=5,o.add(It);let St=nt.clone().lerp(Et,.5).add(new R(Pt(-.6,.6),1.2+nt.distanceTo(Et)*.08,0));return new Promise(ge=>gi.push({sprite:It,from:nt,to:Et,mid:St,t:0,dur:qt,color:new zt(xt),size:Ft,done:ge,trailAt:0}))}let In="battle",sr="",Ir="",we=null,_i=[],Wn=new Di(16777215,1);Wn.visible=!1,o.add(Wn,Wn.target);let Lr=(nt,Et)=>new R(nt[0],nt[2]-Et,-nt[1]);function vo(nt,Et){we&&(o.remove(we.group),we.dispose(),we=null);for(let pt of _i)o.remove(pt);_i.length=0;try{we=cd(nt,Et,n)}catch(pt){console.warn("3D arena failed, using the classic one",pt),we=null}if(g.visible=!we,st.position.y=we?.1:.03,Wn.visible=!!we,!we){Ir="";return}we.group.rotation.x=-Math.PI/2,we.group.position.y=-we.floor,o.add(we.group),we.group.traverse(pt=>{pt.name==="centre-pattern"&&(pt.visible=!1)});for(let pt of n?we.lights.slice(0,2):we.lights){let xt=new ni(new zt(...pt.color),pt.intensity*8,pt.dist,2);xt.position.copy(Lr(pt.pos,we.floor)),xt.userData.base=xt.intensity,xt.userData.flicker=pt.flicker??0,o.add(xt),_i.push(xt)}}function bo(nt){let Et=nt.key.dir;Wn.color.setRGB(...nt.key.color),Wn.intensity=nt.key.intensity*.35,Wn.position.set(Et[0]*50,Et[2]*50,-Et[1]*50),Wn.target.position.set(0,0,0),h.color.setRGB(...nt.ambient.sky),h.groundColor.setRGB(...nt.ambient.ground),h.intensity=nt.ambient.intensity,u.intensity=0,m.intensity*=.45,d.intensity*=.5;let pt=o.fog;pt.color.setRGB(...nt.fog.color),pt.near=nt.fog.near,pt.far=nt.fog.far,e.setClearColor(pt.color)}let As=0,yi=0,Ur=0,U=new hn,lt=new hn,mt=!1,gt=!1,ut=new zt(16777215),Nt=null;function Xt(nt,Et){let pt=c.z-Et,xt=Math.tan(_s.degToRad(a.fov/2))*pt;return nt*xt*a.aspect}function $t(){if(!Nt)return;let nt=Nt,Et=T.get("opp");Et?.model&&Et.group.scale.setScalar(1.3),Et&&Et.group.position.set(Xt(a.aspect<1?.08:nt.layout==="deck"?.36:.46,-2.2),0,-2.2);let pt=T.get("boss");pt&&pt.group.position.set(Xt(a.aspect<1?.15:.5,-5.5),0,-5.5),nt.allies.forEach((Ft,qt)=>{let Gt=T.get(`ally:${Ft.id}`);Gt&&Gt.group.position.set(Xt(-.36+qt*.13,-.6-qt*1.1),0,-.6-qt*1.1)});let xt=(pt??Et)?.group.position;for(let[Ft,qt]of T){if(!qt.model)continue;let Gt=Ft==="opp"?c:xt??new R(0,0,-3);qt.model.root.rotation.y=Math.atan2(Gt.x-qt.group.position.x,Gt.z-qt.group.position.z)}}function Kt(nt){Nt=nt,In=nt.layout,G();let Et=b[Uh(nt.me.character??"wizard")]??b.wizard;E.color.set(Et.sleeve),j.color.set(Et.skin),j.metalness=nt.me.character==="knight"?.3:0,gn(),ot(nt.me.staff??"verdant"),dt=!1,F.visible=!0,K="ready",Lt=null,At.uAmount.value=0,Bt.visible=!1,nt.opp&&O("opp",nt.opp),nt.boss&&O("boss",nt.boss);for(let xt of nt.allies)O(`ally:${xt.id}`,xt);$t();let pt=Py[nt.time];h.color.set(pt.sky),h.groundColor.set(pt.ground),h.intensity=pt.hemi*1.25,m.intensity=nt.time==="night"?1.3:nt.time==="sunset"?1:.7,u.color.set(pt.sun),u.intensity=pt.sunInt,u.position.set(...pt.sunPos),d.intensity=nt.time==="night"?9:5;for(let xt of ht)xt.base=pt.torch;$.color.set(pt.motes),ut=new zt(pt.spriteTint),sr!==nt.bgKey&&(sr=nt.bgKey,vo(nt.bgKey.split("-")[0],nt.time)),we?bo(we):Ir!==nt.bgKey&&(Ir=nt.bgKey,o.fog.near=20,o.fog.far=58,v(nt.bgKey.split("-")[0]),Cy(nt.bgSvg,(xt,Ft,qt)=>{_.map?.dispose(),_.map=xt,_.needsUpdate=!0,o.fog.color.copy(Ft).lerp(qt,.35),p.color.copy(Ft).multiplyScalar(.9),x.color.copy(Ft).lerp(new zt(5212730),.45).multiplyScalar(1.15),C.color.copy(Ft).lerp(new zt(1522212),.5),e.setClearColor(qt)}))}let ne=new Dt,ee=new Dt,Qt=.32,Me=.13,ae={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},Ue=nt=>{nt.pointerType!=="mouse"||nt.buttons||nt.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||ne.set(nt.clientX/innerWidth*2-1,nt.clientY/innerHeight*2-1)};addEventListener("pointermove",Ue,{passive:!0});function gn(){let nt=In==="deck"?W:N,Et=In==="deck"?.56:.72;if(a.aspect>=1.2){Z.copy(nt),F.scale.setScalar(Et);return}let pt=Math.tan(_s.degToRad(a.fov/2))*-nt.z,xt=pt*a.aspect;Z.set(xt*.78,-pt*.62,nt.z),F.scale.setScalar(Et*Math.max(.5,Math.min(1,a.aspect*.9)))}function _e(){let nt=i.clientWidth||innerWidth,Et=i.clientHeight||innerHeight;e.setSize(nt,Et,!1),a.aspect=nt/Et,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),$t(),Ht(),gn()}addEventListener("resize",_e);let te=0,Ye=0,ve=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!zi||i.clientWidth===te&&i.clientHeight===Ye||(te=i.clientWidth,Ye=i.clientHeight,_e())}):null;ve?.observe(i);let Ln=new zt(6974072),Bi=new zt(16722474),_n=new zt(9428223),Rs=new zt(2784511),Ne=new zt(16738842);function ri(nt,Et){let pt=Et<nt.hurtUntil,xt=Et<nt.frostUntil,Ft=Et<nt.burnUntil;if(nt.model&&nt.ko){for(let qt of nt.model.materials)qt.mat.color.copy(qt.color).lerp(Ln,.55),qt.mat.emissive.setRGB(0,0,0);return}if(nt.model){if(xt!==nt.frosted){nt.frosted=xt;for(let qt of nt.model.materials)qt.mat.opacity=xt?.5:1,qt.mat.depthWrite=!xt}for(let qt of nt.model.materials)qt.mat.color.copy(qt.color),xt&&qt.mat.color.lerp(_n,.75),pt?(qt.mat.emissive.copy(Bi),qt.mat.emissiveIntensity=.6):xt?(qt.mat.emissive.copy(Rs),qt.mat.emissiveIntensity=.45):Ft?(qt.mat.color.lerp(Ne,.35),qt.mat.emissive.copy(Ne),qt.mat.emissiveIntensity=.55+.3*Math.sin(Et/40)):(qt.mat.emissive.copy(qt.emissive),qt.mat.emissiveIntensity=1)}else nt.spriteMat&&(nt.spriteMat.color.copy(pt?new zt(1,.35,.35):xt?_n:Ft?new zt(1,.7,.5):ut),nt.spriteMat.opacity=xt?.6:nt.ko?nt.spriteMat.opacity:1)}let zi=!1,yn=0,ki=performance.now(),He=0,or=0,Cs=0,Ja=0;function hd(nt){if(r||document.hidden)return;if(Ja<45){Ja++;return}if(or++,Cs+=nt,Cs<2500)return;let Et=or*1e3/Cs;or=0,Cs=0,!(Et>=(n?22:34))&&(n?(r=!0,e.setPixelRatio(s()),_e()):Eo.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(Et),lowRes:r}})))}function Wh(nt){yn=requestAnimationFrame(Wh),hd(nt-ki);let Et=Math.min(1,Math.max(0,(nt-ki)/1e3)),pt=Math.min(.05,Et);ki=nt,He+=pt;let xt=performance.now(),Ft=!1;ee.lerp(ne,Ft?1:.05);let qt=Ft?0:Math.sin(He*.7)*.025;if(n)a.position.set(c.x+ee.x*.12,c.y-ee.y*.05+qt,c.z),a.lookAt(l.clone().add(new R(ee.x*1.5,-ee.y*.75,0))),ae.yaw=0,ae.pitch=0;else{ae.yaw=-ee.x*Qt,ae.pitch=-ee.y*Me,a.position.set(c.x,c.y+qt,c.z);let It=l.clone().sub(c).applyAxisAngle(new R(0,1,0),ae.yaw),St=It.clone().cross(new R(0,1,0)).normalize();It.applyAxisAngle(St,ae.pitch),a.lookAt(c.clone().add(It))}zi&&Nt&&(Nt.opp||Nt.allies.length)&&nt-ae.sentAt>150&&(Math.abs(ae.yaw-ae.sentYaw)>.02||Math.abs(ae.pitch-ae.sentPitch)>.02)&&(ae.sentAt=nt,ae.sentYaw=ae.yaw,ae.sentPitch=ae.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+ae.yaw.toFixed(3),pitch:+ae.pitch.toFixed(3)}}))),Ve>0&&(a.position.add(new R(Pt(-1,1),Pt(-1,1),0).multiplyScalar(Ve)),a.rotation.z+=Pt(-1,1)*Ve*.15,Ve=Math.max(0,Ve-pt*1.1)),yi+=(As-yi)*Math.min(1,pt*6),Ur=Math.max(0,Ur-pt*2.2),U.x+=(lt.x-U.x)*Math.min(1,pt*14),U.y+=(lt.y-U.y)*Math.min(1,pt*14),U.z+=(lt.z-U.z)*Math.min(1,pt*14),Ur<=0&&lt.set(0,0,0);let Gt=.5+.5*Math.sin(He*6);{let It=Math.max(0,1-(xt-H)/380),St=It>0?Math.sin(It*Math.PI):0,ge=Math.min(1,yi);_t+=((ge>.05&&!Ft?Math.min(1,.5+ge*.6):0)-_t)*Math.min(1,pt*3),ft+=pt*(2.6+ge*1.4);let Ge=Math.sin(ft),Hn=Math.sin(ft*2)/2;F.position.set(Z.x-ee.x*.04+Ge*.06*_t,Z.y+ee.y*.03+(Ft?0:Math.sin(He*1.6)*.008)+ge*.03+Hn*.11*_t,Z.z-St*.35),q.rotation.set(ge*.25-St*.75+U.x*.3+Hn*.18*_t,U.y*.3,.2-Ge*.24*_t+U.z*.3);let on=K==="ready"?1:0;if(K==="growing"){let ce=Math.min(1,(xt-ct)/Q);if(on=ce*ce*(3-2*ce),ce>=1)K="ready";else if(!Ft){V.gem.getWorldPosition(Ct);for(let Te=0;Te<2;Te++){let Fn=Ct.clone().add(new R(Pt(-.4,.4),Pt(-.4,.4),Pt(-.4,.4)));Ut(Fn,V.color,{size:Pt(.025,.06),vel:Ct.clone().sub(Fn).multiplyScalar(2.8),life:.36})}}}if(V.gem.scale.setScalar(on),V.gemMat.emissiveIntensity=.7+ge*(1.6+Gt*1.2)+St*3,J.intensity=(.5+ge*4+St*6)*on,V.glow.scale.setScalar((.3+ge*(.32+Gt*.18)+St*.6)*on),V.glow.material.opacity=.3+ge*.35,V.gem.rotation.y+=pt*(.8+ge*6),V.update(He,pt,ge),on>.9&&!Ft&&F.visible&&(V.gem.getWorldPosition(Ct),_t>.25&&Ut(Ct.clone(),V.color,{size:Pt(.03,.05),life:.55,opacity:.9}),ge>.2&&Math.random()<ge*.8)){let ce=Ct.clone().add(new R(Pt(-.35,.35),Pt(-.35,.35),Pt(-.35,.35)));Ut(ce,V.color.clone().lerp(new zt(16777215),.4),{size:Pt(.02,.05),vel:Ct.clone().sub(ce).multiplyScalar(2.6),life:.38})}if(Lt&&!Ft&&F.visible)for(let ce=0;ce<2;ce++){let Te=q.localToWorld(new R(Pt(-.05,.05),Pt(-.15,1.3),Pt(-.05,.05)));Ut(Te,Lt,{size:Pt(.05,.12),vel:new R(Pt(-.05,.05),Pt(.35,.8),0),life:Pt(.25,.45),solid:Math.random()<.4,opacity:.9})}At.uTime.value=Ft?0:He,At.uAmount.value+=((Lt&&F.visible?1:0)-At.uAmount.value)*Math.min(1,Et*3),Bt.visible=At.uAmount.value>.01}for(let[It,St]of T){let ge=St.group.getObjectByName("circle");if(ge&&(ge.rotation.z+=pt*.4),ri(St,xt),St.ko)continue;let Ge=Math.max(0,St.lungeUntil-xt)/450;if(St.model){let ce=St.model;ce.body.position.y=Ft?0:Math.sin(He*2+St.height*3)*.02;let Te=St.look,Fn=xt-Te.at>4e3,Dr=Fn?.22*Math.sin(He*.31+Te.seed)*Math.sin(He*.13+Te.seed*2):Te.yaw,Qa=Fn?.06*Math.sin(He*.23+Te.seed*3):Te.pitch;Te.curYaw+=(Dr-Te.curYaw)*Math.min(1,pt*7),Te.curPitch+=(Qa-Te.curPitch)*Math.min(1,pt*7),ce.head.rotation.set(-Te.curPitch*.8,Te.curYaw*.7,0),ce.body.rotation.y=Te.curYaw*.3;let ar=1-Ge,cr=Ge<=0?0:ar<.18?-.35*(ar/.18):ar<.4?-.35+1.35*((ar-.18)/.22):1-((ar-.4)/.6)**2;ce.body.rotation.x=Math.max(0,cr)*.2,ce.staffPivot.rotation.x=cr*1.9;let xi=It==="me"?yi:(It==="opp"||It.startsWith("ally:"))&&mt?In==="deck"?.7:.45:0,Ps=It==="me"?0:xi*(1-Math.max(0,cr)),fd=-.15-xi*.75-Math.max(0,cr)*.9+(It==="me"?U.x:0)+Math.sin(He*4.4)*.22*Ps;ce.arm.rotation.x+=(fd-ce.arm.rotation.x)*Math.min(1,pt*10),ce.arm.rotation.z=-.35+(It==="me"?U.z:0)+Math.sin(He*2.2)*.32*Ps,ce.arm.rotation.y=It==="me"?U.y:0;let lr=It==="me"?yi:xi;ce.crystalMat.emissiveIntensity=1.2+lr*(3+Gt*2)+Ge*3,ce.glow.scale.setScalar(.45+lr*(.5+Gt*.3)+Ge*.6),ce.glow.material.opacity=.45+lr*.5,ce.crystal.rotation.y+=pt*(.8+lr*6),ce.staff.update(He,pt,lr),lr>.5&&Math.random()<lr*.6&&(ce.crystal.getWorldPosition(Ct),Ut(Ct.clone().add(new R(Pt(-.1,.1),Pt(-.1,.1),Pt(-.1,.1))),ce.staff.color.getHex(),{size:Pt(.03,.08),vel:new R(Pt(-.2,.2),Pt(.2,.6),0),life:.7}))}else St.sprite&&(St.sprite.position.y=Ft?0:Math.abs(Math.sin(He*2))*.05,St.sprite.position.z=Ge*.4);let Hn=It==="opp"&&mt&&In==="deck"||It==="boss"&&gt,on=St.aura.material;if(on.opacity+=((Hn?.55+.2*Math.sin(He*5):St.flame?.35:0)-on.opacity)*Math.min(1,pt*5),on.color.copy(It==="boss"?new zt(16742954):St.flame??new zt(11832575)),St.flame&&wt(St,St.flame,2),xt<St.burnUntil&&wt(St,Math.random()<.5?16734746:16756784,3),xt<St.frostUntil&&Math.random()<.3&&wt(St,13628159,1),It==="boss"&&gt&&Math.random()<.8){let ce=kt("boss","mouth"),Te=ce.clone().add(new R(Pt(-1.5,1.5),Pt(-1,1),Pt(-1,1)));Ut(Te,16751162,{size:.12,vel:ce.clone().sub(Te).multiplyScalar(1.6),life:.55})}}for(let It of ht){let St=.85+.15*Math.sin(He*9+It.phase)+.08*Math.sin(He*23+It.phase*2);It.light.intensity=It.base*St,It.flame.scale.set(1.2*St,1.8*(.9+.2*St),1)}if(st.rotation.z+=pt*.05,we){we.update(He*30);for(let It of _i)It.userData.flicker&&(It.intensity=It.userData.base*(1-It.userData.flicker*(.5+.5*Math.sin(He*9+It.position.x)*Math.sin(He*23+It.position.z))))}let be=D.attributes.position;for(let It=0;It<vt;It++){let St=be.getY(It)+pt*(.12+k[It]%1*.2);St>7.5&&(St=0),be.setY(It,St),be.setX(It,be.getX(It)+Math.sin(He*.5+k[It])*pt*.15)}be.needsUpdate=!0,$.opacity=.55+.35*Math.sin(He*1.3);for(let It=gi.length-1;It>=0;It--){let St=gi[It];St.t+=pt/St.dur;let ge=Math.min(1,St.t),Ge=ge*ge*(1.6-.6*ge),Hn=St.from.clone().lerp(St.mid,Ge),on=St.mid.clone().lerp(St.to,Ge);St.sprite.position.copy(Hn.lerp(on,Ge)),St.gem&&(St.gem.position.copy(St.sprite.position),St.gem.rotation.y+=pt*12,St.gem.rotation.x+=pt*7);let ce=.55+Ge*.8,Te=St.sprite.material,Fn=Te.map?.image,Dr=Fn?Fn.width/Fn.height:1;St.sprite.scale.set(St.size*Dr*.4*ce,St.size*.4*ce,1),St.trailAt-=pt,St.trailAt<=0&&!Ft&&(St.trailAt=.016,Ut(St.sprite.position,St.color,{size:Pt(.05,.13)*St.size,life:.35,opacity:.8,vel:new R(Pt(-.3,.3),Pt(-.3,.3),Pt(-.3,.3))})),ge>=1&&(o.remove(St.sprite),Te.map?.dispose(),Te.dispose(),St.gem&&o.remove(St.gem),gi.splice(It,1),St.done())}for(let It=jt.length-1;It>=0;It--){let St=jt[It];if(St.life+=pt,St.life>=St.max){o.remove(St.sprite),St.sprite.material.dispose(),jt.splice(It,1);continue}St.vel.y+=St.gravity*pt,St.sprite.position.addScaledVector(St.vel,pt),St.grow&&St.sprite.scale.multiplyScalar(1+St.grow*pt),St.sprite.material.opacity=1-St.life/St.max}for(let It=Vt.length-1;It>=0;It--){let St=Vt[It];St.life+=pt,St.line.material.opacity=St.life<.08||St.life>.14&&St.life<.2?1:.15,St.life>.32&&(o.remove(St.line),St.line.geometry.dispose(),St.line.material.dispose(),Vt.splice(It,1))}for(let It=he.length-1;It>=0;It--){let St=he[It];St.life+=pt,St.sprite.position.y+=pt*.8,St.sprite.material.opacity=Math.min(1,2.2-St.life*2),St.life>1.1&&(o.remove(St.sprite),St.sprite.material.map?.dispose(),St.sprite.material.dispose(),he.splice(It,1))}e.render(o,a)}function ud(nt,Et,pt){let xt=T.get(nt),Ft=performance.now();Et==="bolt"&&(Yt(xt?kt(nt,"head"):pt),nt==="me"&&me("190,230,255","bolt")),Et==="frost"&&(xt&&(xt.frostUntil=Ft+1100),yt(pt,13628159,30,2.5,.16),nt==="me"&&me("140,210,255","frost")),Et==="fire"&&(xt&&(xt.burnUntil=Ft+1100),yt(pt,16742954,36,3.4,.24),nt==="me"&&me("255,120,30","fire"))}let Eo={setup:Kt,setActive(nt){nt!==zi&&(zi=nt,i.classList.toggle("on",nt),nt?(_e(),ki=performance.now(),Ja=0,or=0,Cs=0,yn=requestAnimationFrame(Wh)):cancelAnimationFrame(yn))},async cast(nt,Et,pt,xt={}){let Ft=xt.kind??"attack",qt=nt==="me"||nt.startsWith("ally:"),Gt=Ft==="heal"?"#5dffa8":Ft==="mana"?"#ffd479":xt.fx==="bolt"?"#bfe6ff":xt.fx==="frost"?"#8fdcff":xt.fx==="fire"?"#ff8a3a":qt?"#a98bff":"#ff6b6b",be=T.get(nt);if(be&&(be.lungeUntil=performance.now()+450),nt==="me"&&(yi=0,As=0),Ft!=="attack"){if(nt==="me"&&K!=="gone"&&F.visible){H=performance.now(),K="gone";let ce=new Tt(V.gem.geometry,V.gemMat),Te=kt("me","staff"),Fn=kt("me","chest"),Dr=Te.clone().lerp(Fn,.5).add(new R(0,.35,0));ce.position.copy(Te),ce.scale.setScalar(1.3),o.add(ce);let Qa=performance.now();await new Promise(ar=>{let cr=()=>{let xi=Math.min(1,(performance.now()-Qa)/520),Ps=Te.clone().lerp(Dr,xi).lerp(Dr.clone().lerp(Fn,xi),xi);ce.position.copy(Ps),ce.rotation.y+=.3,ce.scale.setScalar(1.3*(1-xi*.7)),Math.random()<.8&&Ut(Ps.clone(),Gt,{size:Pt(.03,.07),life:.35,opacity:.9}),xi<1?requestAnimationFrame(cr):(o.remove(ce),ar())};cr()})}let on=kt(nt);for(let ce=0;ce<30;ce++)Ut(on.clone().add(new R(Pt(-.5,.5),Pt(-.8,.2),Pt(-.3,.3))),Gt,{size:Pt(.08,.2),vel:new R(Pt(-.2,.2),Pt(.8,1.8),0),life:Pt(.6,1.1)});nt==="me"&&me(Ft==="heal"?"80,255,160":"255,212,121"),xt.damage&&Le(nt,`+${xt.damage}`,Gt);return}let It=kt(nt,nt==="boss"?"mouth":"staff"),St=kt(Et,"chest"),ge=(xt.crit?1.5:1)*1.15,Ge=Mo(It,St,pt,Gt,ge,.85);if(nt==="me"){H=performance.now(),K="gone";let on=new Tt(V.gem.geometry,V.gemMat);on.scale.setScalar(1.5),on.position.copy(It),o.add(on),gi[gi.length-1].gem=on}await Ge,yt(St,Gt,xt.crit?46:28,xt.crit?4.4:3.2,.2);let Hn=T.get(Et);Hn&&(Hn.hurtUntil=performance.now()+450),ud(Et,xt.fx,St),Et==="me"?(xt.fx||me(),wn(xt.crit?.16:.09)):wn(xt.crit?.07:.035),xt.damage&&Le(Et,`\u2212${xt.damage}${xt.crit?"!":""}`,Et==="me"?"#ff6b81":xt.crit?"#ff9a3a":"#ffd479")},fizzle(nt){let Et=kt(nt,nt==="boss"?"head":"staff");if(nt!=="me")for(let pt=0;pt<14;pt++)Ut(Et,10132136,{size:Pt(.1,.25),vel:new R(Pt(-.6,.6),Pt(.3,1),Pt(-.3,.3)),life:.8,opacity:.6});if(nt==="me"){if(yi=0,K!=="gone"&&F.visible){V.gem.getWorldPosition(Ct);for(let pt=0;pt<16;pt++)Ut(Ct.clone(),Math.random()<.5?V.color:10132136,{size:Pt(.02,.05),vel:new R(Pt(-.8,.8),Pt(-.2,.9),Pt(-.5,.5)),life:Pt(.4,.7),gravity:-2.5})}K="gone"}},ko(nt){if(nt==="me"){if(dt)return;dt=!0,Lt=null,V.gem.getWorldPosition(Ct),yt(Ct.clone(),10132136,18,1.6,.1),F.visible=!1;return}let Et=T.get(nt);if(!Et||Et.ko)return;Et.ko=!0,Et.flame=null,Et.aura.material.opacity=0;let pt=performance.now(),xt=()=>{let Ft=Math.min(1,(performance.now()-pt)/700),qt=Ft*Ft;Et.model?(Et.model.root.rotation.z=Math.PI/2*qt,Et.model.root.position.y=.24*qt):Et.spriteMat&&(Et.spriteMat.rotation=Math.PI/2*Ft*-1,Et.spriteMat.opacity=1-Ft*.6),Ft<1&&requestAnimationFrame(xt)};xt(),yt(kt(nt),16777215,40,3,.25)},onfire(nt,Et,pt){if(nt==="me"){Lt=Et&&!dt?new zt(pt??"#6ee7ff"):null,Lt&&Rt(Lt);return}let xt=T.get(nt);xt&&(xt.flame=Et?new zt(pt??"#6ee7ff"):null)},channel(nt){As=Math.max(0,Math.min(1,nt))},twitch(){bt(),Ur=.35,lt.set(Pt(-.35,.25),Pt(-.25,.25),Pt(-.3,.3)),Math.random()<.6&&K==="ready"&&(V.gem.getWorldPosition(Ct),Ut(Ct.clone(),V.color.clone().lerp(new zt(16777215),.5),{size:Pt(.04,.09),vel:new R(Pt(-.6,.6),Pt(.2,.9),Pt(-.3,.3)),life:.5}))},thrust(){H=performance.now(),V.gem.getWorldPosition(Ct),yt(Ct.clone(),V.color,18,1.6,.08)},oppChannel(nt){mt=nt},inhale(nt){gt=nt},breath(nt,Et){gt=!1;let pt=kt("boss","mouth");for(let xt=0;xt<160;xt++)setTimeout(()=>{let qt=(nt.length?kt(nt[xt%nt.length]):a.localToWorld(new R(0,-.2,-1))).clone().add(new R(Pt(-1.5,1.5),Pt(-.8,.8),0)).sub(pt).normalize().multiplyScalar(Pt(7,11));Ut(pt,Math.random()<.4?16765530:16734746,{size:Pt(.3,.7),vel:qt,life:Pt(.6,.9),grow:1.2})},xt*5);setTimeout(()=>{for(let xt of nt){let Ft=T.get(xt);Ft&&(Ft.hurtUntil=performance.now()+500,Ft.burnUntil=performance.now()+900),Le(xt,`\u2212${Et}`,"#ff9a3a")}nt.includes("me")&&(me("255,120,30"),wn(.16))},450)},claw(nt,Et){let pt=T.get("boss");pt&&(pt.lungeUntil=performance.now()+450),setTimeout(()=>{let xt=T.get(nt);xt&&(xt.hurtUntil=performance.now()+450),nt==="me"&&(me("255,40,60","claw"),wn(.13)),Le(nt,`\u2212${Et}`,"#ff6b81")},200)},float:Le,look(nt,Et,pt){let xt=T.get(nt);!xt||!Number.isFinite(Et)||!Number.isFinite(pt)||(xt.look.yaw=Math.max(-Qt,Math.min(Qt,Et)),xt.look.pitch=Math.max(-Me,Math.min(Me,pt)),xt.look.at=performance.now())},setLite(nt){let Et=n!==nt;n=nt,Et&&we&&Nt&&(sr="",Kt(Nt)),e.setPixelRatio(s()),L.count=nt?900:M,D.setDrawRange(0,nt?90:vt),_e()},dispose(){Eo.setActive(!1),ve?.disconnect(),removeEventListener("pointermove",Ue),removeEventListener("resize",_e),ke.remove(),we&&(we.dispose(),we=null),e.dispose()}};n&&Eo.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return V},get gemState(){return K},scene:o,camera:a,renderer:e}),_e();try{e.compile(o,a)}catch{}return Eo}globalThis.KWArena3D=Ly;globalThis.KWStaffPreview=zf;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
