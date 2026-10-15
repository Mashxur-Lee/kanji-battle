"use strict";(()=>{var hd=Object.defineProperty;var ud=(i,t,e)=>t in i?hd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Fe=(i,t,e)=>ud(i,typeof t!="symbol"?t+"":t,e);var fd=0,Gh=1,dd=2;var ju=1,pd=2,Si=3,An=0,Tn=1,Re=2,Zi=0,ai=1,je=2,Wh=3,Xh=4,md=5,gs=100,gd=101,_d=102,yd=103,xd=104,Md=200,vd=201,bd=202,Ed=203,Uc=204,Dc=205,Sd=206,wd=207,Td=208,Ad=209,Rd=210,Cd=211,Pd=212,Id=213,Ld=214,Nc=0,Hc=1,Fc=2,sr=3,Oc=4,Bc=5,zc=6,kc=7,oh=0,ah=1,Ud=2,$i=0,Dd=1,Nd=2,Hd=3,lo=4,Fd=5,Od=6,Bd=7;var tf=300,rr=301,or=302,Zr=303,Vc=304,Ha=306,xs=1e3,Ti=1001,Gc=1002,dn=1003,zd=1004;var bo=1005;var Zn=1006,Ja=1007;var ys=1008;var Ri=1009,ef=1010,nf=1011,$r=1012,ch=1013,Ms=1014,oi=1015,ho=1016,lh=1017,hh=1018,ar=1020,sf=35902,rf=1021,of=1022,Kn=1023,af=1024,cf=1025,er=1026,cr=1027,uh=1028,fh=1029,lf=1030,dh=1031;var ph=1033,ea=33776,na=33777,ia=33778,sa=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,Zc=36196,$c=37492,Kc=37496,Jc=37808,Qc=37809,jc=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,ol=37817,al=37818,cl=37819,ll=37820,hl=37821,ra=36492,ul=36494,fl=36495,hf=36283,dl=36284,pl=36285,ml=36286;var aa=2300,gl=2301,Qa=2302,qh=2400,Yh=2401,Zh=2402;var kd=3200,Vd=3201;var mh=0,Gd=1,qi="",fn="srgb",ji="srgb-linear",gh="display-p3",Fa="display-p3-linear",ca="linear",De="srgb",la="rec709",ha="p3";var Ds=7680;var $h=519,Wd=512,Xd=513,qd=514,uf=515,Yd=516,Zd=517,$d=518,Kd=519,_l=35044;var Kh="300 es",Ai=2e3,ua=2001,Ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jh=1234567,Vr=Math.PI/180,Kr=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function _h(i,t){return(i%t+t)%t}function Jd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qd(i,t,e){return i!==t?(e-i)/(t-i):0}function Gr(i,t,e){return(1-e)*i+e*t}function jd(i,t,e,n){return Gr(i,t,1-Math.exp(-e*n))}function t0(i,t=1){return t-Math.abs(_h(i,t*2)-t)}function e0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function n0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function i0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function s0(i,t){return i+Math.random()*(t-i)}function r0(i){return i*(.5-Math.random())}function o0(i){i!==void 0&&(Jh=i);let t=Jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function a0(i){return i*Vr}function c0(i){return i*Kr}function l0(i){return(i&i-1)===0&&i!==0}function h0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function u0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function f0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gr={DEG2RAD:Vr,RAD2DEG:Kr,generateUUID:ci,clamp:cn,euclideanModulo:_h,mapLinear:Jd,inverseLerp:Qd,lerp:Gr,damp:jd,pingpong:t0,smoothstep:e0,smootherstep:n0,randInt:i0,randFloat:s0,randFloatSpread:r0,seededRandom:o0,degToRad:a0,radToDeg:c0,isPowerOfTwo:l0,ceilPowerOfTwo:h0,floorPowerOfTwo:u0,setQuaternionFromProperEuler:f0,normalize:Ae,denormalize:$n},Dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=s[0],d=s[3],p=s[6],y=s[1],x=s[4],M=s[7],L=s[2],T=s[5],C=s[8];return r[0]=o*_+a*y+c*L,r[3]=o*d+a*x+c*T,r[6]=o*p+a*M+c*C,r[1]=l*_+h*y+u*L,r[4]=l*d+h*x+u*T,r[7]=l*p+h*M+u*C,r[2]=f*_+m*y+g*L,r[5]=f*d+m*x+g*T,r[8]=f*p+m*M+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,m=l*r-o*c,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ja.makeScale(t,e)),this}rotate(t){return this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ja=new fe;function ff(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function d0(){let i=fa("canvas");return i.style.display="block",i}var Qh={};function oa(i){i in Qh||(Qh[i]=!0,console.warn(i))}function p0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function m0(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function g0(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jh=new fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tu=new fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cr={[ji]:{transfer:ca,primaries:la,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[fn]:{transfer:De,primaries:la,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fa]:{transfer:ca,primaries:ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(tu),fromReference:i=>i.applyMatrix3(jh)},[gh]:{transfer:De,primaries:ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(tu),fromReference:i=>i.applyMatrix3(jh).convertLinearToSRGB()}},_0=new Set([ji,Fa]),Se={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Cr[t].toReference,s=Cr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Cr[i].primaries},getTransfer:function(i){return i===qi?ca:Cr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Cr[t].luminanceCoefficients)}};function nr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ns,yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ns===void 0&&(Ns=fa("canvas")),Ns.width=t.width,Ns.height=t.height;let n=Ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=nr(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(nr(e[n]/255)*255):e[n]=nr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},y0=0,da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ec(s[o].image)):r.push(ec(s[o]))}else r=ec(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var x0=0,Rn=class i extends Ki{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=Zn,o=ys,a=Kn,c=Ri,l=i.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=ci(),this.name="",this.source=new da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=tf;Rn.DEFAULT_ANISOTROPY=1;var Ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],g=c[9],_=c[2],d=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(m+1)/2,L=(p+1)/2,T=(h+f)/4,C=(u+_)/4,z=(g+d)/4;return x>M&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=C/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=z/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=z/r),this.set(n,s,r,e),this}let y=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},pa=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ml=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==m||h!==g){let d=1-a,p=c*f+l*m+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let L=Math.sqrt(x),T=Math.atan2(L,p*y);d=Math.sin(d*T)/L,a=Math.sin(a*T)/L}let M=a*y;if(c=c*d+f*M,l=l*d+m*M,h=h*d+g*M,u=u*d+_*M,d===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*m-l*f,t[e+1]=c*g+h*f+l*u-a*m,t[e+2]=l*g+h*m+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"YZX":this._x=f*h*u+l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u-f*m*g;break;case"XZY":this._x=f*h*u-l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nc.copy(this).projectOnVector(t),this.sub(nc)}reflect(t){return this.sub(nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nc=new R,eu=new tn,Pi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),So.subVectors(this.max,Pr),Hs.subVectors(t.a,Pr),Fs.subVectors(t.b,Pr),Os.subVectors(t.c,Pr),zi.subVectors(Fs,Hs),ki.subVectors(Os,Fs),ls.subVectors(Hs,Os);let e=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-ls.z,ls.y,zi.z,0,-zi.x,ki.z,0,-ki.x,ls.z,0,-ls.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-ls.y,ls.x,0];return!ic(e,Hs,Fs,Os,So)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,Hs,Fs,Os,So))?!1:(wo.crossVectors(zi,ki),e=[wo.x,wo.y,wo.z],ic(e,Hs,Fs,Os,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},xi=[new R,new R,new R,new R,new R,new R,new R,new R],Xn=new R,Eo=new Pi,Hs=new R,Fs=new R,Os=new R,zi=new R,ki=new R,ls=new R,Pr=new R,So=new R,wo=new R,hs=new R;function ic(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=t.dot(hs),l=e.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var M0=new Pi,Ir=new R,sc=new R,Ii=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):M0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);let e=Ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(sc)),this.expandByPoint(Ir.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mi=new R,rc=new R,To=new R,Vi=new R,oc=new R,Ao=new R,ac=new R,Jr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rc.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(rc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=Vi.dot(this.direction),c=-Vi.dot(To),l=Vi.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(rc).addScaledVector(To,f),m}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,r){oc.subVectors(e,t),Ao.subVectors(n,t),ac.crossVectors(oc,Ao);let o=this.direction.dot(ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,t);let c=a*this.direction.dot(Ao.crossVectors(Vi,Ao));if(c<0)return null;let l=a*this.direction.dot(oc.cross(Vi));if(l<0||c+l>o)return null;let h=-a*Vi.dot(ac);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,m,g,_,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,m,g,_,d)}set(t,e,n,s,r,o,a,c,l,h,u,f,m,g,_,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),o=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,m=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,m=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(v0,t,b0)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Gi.crossVectors(n,Un),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Gi.crossVectors(n,Un)),Gi.normalize(),Ro.crossVectors(Un,Gi),s[0]=Gi.x,s[4]=Ro.x,s[8]=Un.x,s[1]=Gi.y,s[5]=Ro.y,s[9]=Un.y,s[2]=Gi.z,s[6]=Ro.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],y=n[3],x=n[7],M=n[11],L=n[15],T=s[0],C=s[4],z=s[8],tt=s[12],v=s[1],A=s[5],nt=s[9],st=s[13],ct=s[2],Mt=s[6],lt=s[10],vt=s[14],N=s[3],j=s[7],k=s[11],Z=s[15];return r[0]=o*T+a*v+c*ct+l*N,r[4]=o*C+a*A+c*Mt+l*j,r[8]=o*z+a*nt+c*lt+l*k,r[12]=o*tt+a*st+c*vt+l*Z,r[1]=h*T+u*v+f*ct+m*N,r[5]=h*C+u*A+f*Mt+m*j,r[9]=h*z+u*nt+f*lt+m*k,r[13]=h*tt+u*st+f*vt+m*Z,r[2]=g*T+_*v+d*ct+p*N,r[6]=g*C+_*A+d*Mt+p*j,r[10]=g*z+_*nt+d*lt+p*k,r[14]=g*tt+_*st+d*vt+p*Z,r[3]=y*T+x*v+M*ct+L*N,r[7]=y*C+x*A+M*Mt+L*j,r[11]=y*z+x*nt+M*lt+L*k,r[15]=y*tt+x*st+M*vt+L*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*m-n*c*m)+_*(+e*c*m-e*l*f+r*o*f-s*o*m+s*l*h-r*c*h)+d*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],y=u*d*l-_*f*l+_*c*m-a*d*m-u*c*p+a*f*p,x=g*f*l-h*d*l-g*c*m+o*d*m+h*c*p-o*f*p,M=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*f+o*_*f+h*a*d-o*u*d,T=e*y+n*x+s*M+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=y*C,t[1]=(_*f*r-u*d*r-_*s*m+n*d*m+u*s*p-n*f*p)*C,t[2]=(a*d*r-_*c*r+_*s*l-n*d*l-a*s*p+n*c*p)*C,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*m-n*c*m)*C,t[4]=x*C,t[5]=(h*d*r-g*f*r+g*s*m-e*d*m-h*s*p+e*f*p)*C,t[6]=(g*c*r-o*d*r-g*s*l+e*d*l+o*s*p-e*c*p)*C,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*m+e*c*m)*C,t[8]=M*C,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*m-e*a*m)*C,t[12]=L*C,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*d+e*u*d)*C,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*d-e*a*d)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,m=r*h,g=r*u,_=o*h,d=o*u,p=a*u,y=c*l,x=c*h,M=c*u,L=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*L,s[1]=(m+M)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(f+p))*T,s[6]=(d+y)*T,s[7]=0,s[8]=(g+x)*C,s[9]=(d-y)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),a=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);let l=1/r,h=1/o,u=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,e.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ai){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,g;if(a===Ai)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ua)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ai){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,m=(n+s)*h,g,_;if(a===Ai)g=(o+r)*u,_=-2*u;else if(a===ua)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bs=new R,qn=new se,v0=new R(0,0,0),b0=new R(1,1,1),Gi=new R,Ro=new R,Un=new R,nu=new se,iu=new tn,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iu.setFromEuler(this),this.setFromQuaternion(iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var ma=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},E0=0,su=new R,zs=new tn,vi=new se,Co=new R,Lr=new R,S0=new R,w0=new tn,ru=new R(1,0,0),ou=new R(0,1,0),au=new R(0,0,1),cu={type:"added"},T0={type:"removed"},ks={type:"childadded",child:null},cc={type:"childremoved",child:null},$e=class i extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new hn,n=new tn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new fe}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Co.copy(t):Co.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Lr,Co,this.up):vi.lookAt(Co,Lr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(vi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(T0),cc.child=t,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,S0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,w0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};$e.DEFAULT_UP=new R(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new R,bi=new R,lc=new R,Ei=new R,Vs=new R,Gs=new R,lu=new R,hc=new R,uc=new R,fc=new R,dc=new Ce,pc=new Ce,mc=new Ce,Yi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),bi.subVectors(n,e),lc.subVectors(t,e);let o=Yn.dot(Yn),a=Yn.dot(bi),c=Yn.dot(lc),l=bi.dot(bi),h=bi.dot(lc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return dc.setScalar(0),pc.setScalar(0),mc.setScalar(0),dc.fromBufferAttribute(t,e),pc.fromBufferAttribute(t,n),mc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(dc,r.x),o.addScaledVector(pc,r.y),o.addScaledVector(mc,r.z),o}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),bi.subVectors(t,e),Yn.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Yn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,n),Gs.subVectors(r,n),hc.subVectors(t,n);let c=Vs.dot(hc),l=Gs.dot(hc);if(c<=0&&l<=0)return e.copy(n);uc.subVectors(t,s);let h=Vs.dot(uc),u=Gs.dot(uc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Vs,o);fc.subVectors(t,r);let m=Vs.dot(fc),g=Gs.dot(fc);if(g>=0&&m<=g)return e.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Gs,a);let d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return lu.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(lu,a);let p=1/(d+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Vs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Po={h:0,s:0,l:0};function gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=_h(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=gc(o,r,t+1/3),this.g=gc(o,r,t),this.b=gc(o,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){let n=df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}copyLinearToSRGB(t){return this.r=tc(t.r),this.g=tc(t.g),this.b=tc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Se.fromWorkingColorSpace(Mn.copy(this),t),Math.round(cn(Mn.r*255,0,255))*65536+Math.round(cn(Mn.g*255,0,255))*256+Math.round(cn(Mn.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(Mn.copy(this),e);let n=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=fn){Se.fromWorkingColorSpace(Mn.copy(this),t);let e=Mn.r,n=Mn.g,s=Mn.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Po);let n=Gr(Wi.h,Po.h,e),s=Gr(Wi.s,Po.s,e),r=Gr(Wi.l,Po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new zt;zt.NAMES=df;var A0=0,Jn=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=ai,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Dc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uc&&(n.blendSrc=this.blendSrc),this.blendDst!==Dc&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ze=new R,Io=new Dt,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Io.fromBufferAttribute(this,e),Io.applyMatrix3(t),this.setXY(e,Io.x,Io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}};var ga=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _a=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},R0=0,Fn=new se,_c=new $e,Ws=new R,Dn=new Pi,Ur=new Pi,an=new R,ye=class i extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ff(t)?_a:ga)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Dn.min,Ur.min),Dn.expandByPoint(an),an.addVectors(Dn.max,Ur.max),Dn.expandByPoint(an)):(Dn.expandByPoint(Ur.min),Dn.expandByPoint(Ur.max))}Dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)an.fromBufferAttribute(a,l),c&&(Ws.fromBufferAttribute(t,l),an.add(Ws)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new R,c[z]=new R;let l=new R,h=new R,u=new R,f=new Dt,m=new Dt,g=new Dt,_=new R,d=new R;function p(z,tt,v){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,tt),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,z),m.fromBufferAttribute(r,tt),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),m.sub(f),g.sub(f);let A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),a[z].add(_),a[tt].add(_),a[v].add(_),c[z].add(d),c[tt].add(d),c[v].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let z=0,tt=y.length;z<tt;++z){let v=y[z],A=v.start,nt=v.count;for(let st=A,ct=A+nt;st<ct;st+=3)p(t.getX(st+0),t.getX(st+1),t.getX(st+2))}let x=new R,M=new R,L=new R,T=new R;function C(z){L.fromBufferAttribute(s,z),T.copy(L);let tt=a[z];x.copy(tt),x.sub(L.multiplyScalar(L.dot(tt))).normalize(),M.crossVectors(T,tt);let A=M.dot(c[z])<0?-1:1;o.setXYZW(z,x.x,x.y,x.z,A)}for(let z=0,tt=y.length;z<tt;++z){let v=y[z],A=v.start,nt=v.count;for(let st=A,ct=A+nt;st<ct;st+=3)C(t.getX(st+0)),C(t.getX(st+1)),C(t.getX(st+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),m=0,g=0;for(let _=0,d=c.length;_<d;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[m++]}return new Pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new se,us=new Jr,Lo=new Ii,uu=new R,Uo=new R,Do=new R,No=new R,yc=new R,Ho=new R,fu=new R,Fo=new R,Tt=class extends $e{constructor(t=new ye,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(yc.fromBufferAttribute(u,t),o?Ho.addScaledVector(yc,h):Ho.addScaledVector(yc.sub(e),h))}e.add(Ho)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(Lo.containsPoint(us.origin)===!1&&(us.intersectSphere(Lo,uu)===null||us.origin.distanceToSquared(uu)>(t.far-t.near)**2))&&(hu.copy(r).invert(),us.copy(t.ray).applyMatrix4(hu),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let d=f[g],p=o[d.materialIndex],y=Math.max(d.start,m.start),x=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,L=x;M<L;M+=3){let T=a.getX(M),C=a.getX(M+1),z=a.getX(M+2);s=Oo(this,p,t,n,l,h,u,T,C,z),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){let y=a.getX(d),x=a.getX(d+1),M=a.getX(d+2);s=Oo(this,o,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let d=f[g],p=o[d.materialIndex],y=Math.max(d.start,m.start),x=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,L=x;M<L;M+=3){let T=M,C=M+1,z=M+2;s=Oo(this,p,t,n,l,h,u,T,C,z),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){let y=d,x=d+1,M=d+2;s=Oo(this,o,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function C0(i,t,e,n,s,r,o,a){let c;if(t.side===Tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===An,a),c===null)return null;Fo.copy(a),Fo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Fo);return l<e.near||l>e.far?null:{distance:l,point:Fo.clone(),object:i}}function Oo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Uo),i.getVertexPosition(c,Do),i.getVertexPosition(l,No);let h=C0(i,t,e,n,Uo,Do,No,fu);if(h){let u=new R;Yi.getBarycoord(fu,Uo,Do,No,u),s&&(h.uv=Yi.getInterpolatedAttribute(s,a,c,l,u,new Dt)),r&&(h.uv1=Yi.getInterpolatedAttribute(r,a,c,l,u,new Dt)),o&&(h.normal=Yi.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new R,materialIndex:0};Yi.getNormal(Uo,Do,No,f.normal),h.face=f,h.barycoord=u}return h}var en=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,d,p,y,x,M,L,T,C,z,tt){let v=M/C,A=L/z,nt=M/2,st=L/2,ct=T/2,Mt=C+1,lt=z+1,vt=0,N=0,j=new R;for(let k=0;k<lt;k++){let Z=k*A-st;for(let rt=0;rt<Mt;rt++){let W=rt*v-nt;j[_]=W*y,j[d]=Z*x,j[p]=ct,l.push(j.x,j.y,j.z),j[_]=0,j[d]=0,j[p]=T>0?1:-1,h.push(j.x,j.y,j.z),u.push(rt/C),u.push(1-k/z),vt+=1}}for(let k=0;k<z;k++)for(let Z=0;Z<C;Z++){let rt=f+Z+Mt*k,W=f+Z+Mt*(k+1),w=f+(Z+1)+Mt*(k+1),S=f+(Z+1)+Mt*k;c.push(rt,W,S),c.push(W,w,S),N+=6}a.addGroup(m,N,tt),m+=N,f+=vt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function lr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function En(i){let t={};for(let e=0;e<i.length;e++){let n=lr(i[e]);for(let s in n)t[s]=n[s]}return t}function P0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var I0={clone:lr,merge:En},L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=P0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ya=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new R,du=new Dt,pu=new Dt,ln=class extends ya{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,du,pu),e.subVectors(pu,du)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xs=-90,qs=1,vl=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Xs,qs,t,e);s.layers=this.layers,this.add(s);let r=new ln(Xs,qs,t,e);r.layers=this.layers,this.add(r);let o=new ln(Xs,qs,t,e);o.layers=this.layers,this.add(o);let a=new ln(Xs,qs,t,e);a.layers=this.layers,this.add(a);let c=new ln(Xs,qs,t,e);c.layers=this.layers,this.add(c);let l=new ln(Xs,qs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xa=class extends Rn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bl=class extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Zi});r.uniforms.tEquirect.value=e;let o=new Tt(s,r),a=e.minFilter;return e.minFilter===ys&&(e.minFilter=Zn),new vl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},xc=new R,D0=new R,N0=new fe,wi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xc.subVectors(n,e).cross(D0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(xc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||N0.getNormalMatrix(t),s=this.coplanarPoint(xc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new Ii,Bo=new R,Qr=class{constructor(t=new wi,e=new wi,n=new wi,s=new wi,r=new wi,o=new wi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ai){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],_=s[10],d=s[11],p=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,d-m,M-p).normalize(),n[1].setComponents(c+r,f+l,d+m,M+p).normalize(),n[2].setComponents(c+o,f+h,d+g,M+y).normalize(),n[3].setComponents(c-o,f-h,d-g,M-y).normalize(),n[4].setComponents(c-a,f-u,d-_,M-x).normalize(),e===Ai)n[5].setComponents(c+a,f+u,d+_,M+x).normalize();else if(e===ua)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function H0(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){let g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Li=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,m=[],g=[],_=[],d=[];for(let p=0;p<h;p++){let y=p*f-o;for(let x=0;x<l;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),d.push(x/a),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,M=y+l*(p+1),L=y+1+l*(p+1),T=y+1+l*p;m.push(x,M,T),m.push(M,L,T)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},F0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O0=`#ifdef USE_ALPHAHASH
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
#endif`,B0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G0=`#ifdef USE_AOMAP
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
#endif`,W0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X0=`#ifdef USE_BATCHING
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
#endif`,q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K0=`#ifdef USE_IRIDESCENCE
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
#endif`,J0=`#ifdef USE_BUMPMAP
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,op=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`
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
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Np=`struct PhysicalMaterial {
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
}`,Hp=`
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,tg=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,ng=`#define NORMAL
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
}`,ig=`#define NORMAL
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
}`,sg=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,lg=`#define TOON
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
}`,hg=`uniform float size;
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
}`,ug=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,pg=`uniform float rotation;
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
}`,mg=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:F0,alphahash_pars_fragment:O0,alphamap_fragment:B0,alphamap_pars_fragment:z0,alphatest_fragment:k0,alphatest_pars_fragment:V0,aomap_fragment:G0,aomap_pars_fragment:W0,batching_pars_vertex:X0,batching_vertex:q0,begin_vertex:Y0,beginnormal_vertex:Z0,bsdfs:$0,iridescence_fragment:K0,bumpmap_pars_fragment:J0,clipping_planes_fragment:Q0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:op,cube_uv_reflection_fragment:ap,defaultnormal_vertex:cp,displacementmap_pars_vertex:lp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:fp,colorspace_fragment:dp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Cp,envmap_vertex:xp,fog_vertex:Mp,fog_pars_vertex:vp,fog_fragment:bp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:wp,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Lp,lights_phong_pars_fragment:Up,lights_physical_fragment:Dp,lights_physical_pars_fragment:Np,lights_fragment_begin:Hp,lights_fragment_maps:Fp,lights_fragment_end:Op,logdepthbuf_fragment:Bp,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Vp,map_fragment:Gp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:$p,morphcolor_vertex:Kp,morphnormal_vertex:Jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:jp,normal_fragment_begin:tm,normal_fragment_maps:em,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:cm,iridescence_pars_fragment:lm,opaque_fragment:hm,packing:um,premultiplied_alpha_fragment:fm,project_vertex:dm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:_m,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:xm,shadowmap_vertex:Mm,shadowmask_pars_fragment:vm,skinbase_vertex:bm,skinning_pars_vertex:Em,skinning_vertex:Sm,skinnormal_vertex:wm,specularmap_fragment:Tm,specularmap_pars_fragment:Am,tonemapping_fragment:Rm,tonemapping_pars_fragment:Cm,transmission_fragment:Pm,transmission_pars_fragment:Im,uv_pars_fragment:Lm,uv_pars_vertex:Um,uv_vertex:Dm,worldpos_vertex:Nm,background_vert:Hm,background_frag:Fm,backgroundCube_vert:Om,backgroundCube_frag:Bm,cube_vert:zm,cube_frag:km,depth_vert:Vm,depth_frag:Gm,distanceRGBA_vert:Wm,distanceRGBA_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:Zm,linedashed_frag:$m,meshbasic_vert:Km,meshbasic_frag:Jm,meshlambert_vert:Qm,meshlambert_frag:jm,meshmatcap_vert:tg,meshmatcap_frag:eg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:sg,meshphong_frag:rg,meshphysical_vert:og,meshphysical_frag:ag,meshtoon_vert:cg,meshtoon_frag:lg,points_vert:hg,points_frag:ug,shadow_vert:fg,shadow_frag:dg,sprite_vert:pg,sprite_frag:mg},Wt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ri={basic:{uniforms:En([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:En([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:En([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:En([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:En([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:En([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:En([Wt.points,Wt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:En([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:En([Wt.common,Wt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:En([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:En([Wt.sprite,Wt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:En([Wt.common,Wt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:En([Wt.lights,Wt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ri.physical={uniforms:En([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var zo={r:0,b:0,g:0},ds=new hn,gg=new se;function _g(i,t,e,n,s,r,o){let a=new zt(0),c=r===!0?0:1,l,h,u=null,f=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,M=g(y);M===null?p(a,c):M&&M.isColor&&(p(M,1),x=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(y,x){let M=g(x);M&&(M.isCubeTexture||M.mapping===Ha)?(h===void 0&&(h=new Tt(new en(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:lr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ds.copy(x.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gg.makeRotationFromEuler(ds)),h.material.toneMapped=Se.getTransfer(M.colorSpace)!==De,(u!==M||f!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Tt(new Li(2,2),new Cn({name:"BackgroundMaterial",uniforms:lr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Se.getTransfer(M.colorSpace)!==De,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(zo,pf(i)),n.buffers.color.setClear(zo.r,zo.g,zo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:d}}function yg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,A,nt,st,ct){let Mt=!1,lt=u(st,nt,A);r!==lt&&(r=lt,l(r.object)),Mt=m(v,st,nt,ct),Mt&&g(v,st,nt,ct),ct!==null&&t.update(ct,i.ELEMENT_ARRAY_BUFFER),(Mt||o)&&(o=!1,M(v,A,nt,st),ct!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,A,nt){let st=nt.wireframe===!0,ct=n[v.id];ct===void 0&&(ct={},n[v.id]=ct);let Mt=ct[A.id];Mt===void 0&&(Mt={},ct[A.id]=Mt);let lt=Mt[st];return lt===void 0&&(lt=f(c()),Mt[st]=lt),lt}function f(v){let A=[],nt=[],st=[];for(let ct=0;ct<e;ct++)A[ct]=0,nt[ct]=0,st[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:nt,attributeDivisors:st,object:v,attributes:{},index:null}}function m(v,A,nt,st){let ct=r.attributes,Mt=A.attributes,lt=0,vt=nt.getAttributes();for(let N in vt)if(vt[N].location>=0){let k=ct[N],Z=Mt[N];if(Z===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor)),k===void 0||k.attribute!==Z||Z&&k.data!==Z.data)return!0;lt++}return r.attributesNum!==lt||r.index!==st}function g(v,A,nt,st){let ct={},Mt=A.attributes,lt=0,vt=nt.getAttributes();for(let N in vt)if(vt[N].location>=0){let k=Mt[N];k===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(k=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(k=v.instanceColor));let Z={};Z.attribute=k,k&&k.data&&(Z.data=k.data),ct[N]=Z,lt++}r.attributes=ct,r.attributesNum=lt,r.index=st}function _(){let v=r.newAttributes;for(let A=0,nt=v.length;A<nt;A++)v[A]=0}function d(v){p(v,0)}function p(v,A){let nt=r.newAttributes,st=r.enabledAttributes,ct=r.attributeDivisors;nt[v]=1,st[v]===0&&(i.enableVertexAttribArray(v),st[v]=1),ct[v]!==A&&(i.vertexAttribDivisor(v,A),ct[v]=A)}function y(){let v=r.newAttributes,A=r.enabledAttributes;for(let nt=0,st=A.length;nt<st;nt++)A[nt]!==v[nt]&&(i.disableVertexAttribArray(nt),A[nt]=0)}function x(v,A,nt,st,ct,Mt,lt){lt===!0?i.vertexAttribIPointer(v,A,nt,ct,Mt):i.vertexAttribPointer(v,A,nt,st,ct,Mt)}function M(v,A,nt,st){_();let ct=st.attributes,Mt=nt.getAttributes(),lt=A.defaultAttributeValues;for(let vt in Mt){let N=Mt[vt];if(N.location>=0){let j=ct[vt];if(j===void 0&&(vt==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),vt==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){let k=j.normalized,Z=j.itemSize,rt=t.get(j);if(rt===void 0)continue;let W=rt.buffer,w=rt.type,S=rt.bytesPerElement,U=w===i.INT||w===i.UNSIGNED_INT||j.gpuType===ch;if(j.isInterleavedBufferAttribute){let B=j.data,F=B.stride,D=j.offset;if(B.isInstancedInterleavedBuffer){for(let V=0;V<N.locationSize;V++)p(N.location+V,B.meshPerAttribute);v.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let V=0;V<N.locationSize;V++)d(N.location+V);i.bindBuffer(i.ARRAY_BUFFER,W);for(let V=0;V<N.locationSize;V++)x(N.location+V,Z/N.locationSize,w,k,F*S,(D+Z/N.locationSize*V)*S,U)}else{if(j.isInstancedBufferAttribute){for(let B=0;B<N.locationSize;B++)p(N.location+B,j.meshPerAttribute);v.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let B=0;B<N.locationSize;B++)d(N.location+B);i.bindBuffer(i.ARRAY_BUFFER,W);for(let B=0;B<N.locationSize;B++)x(N.location+B,Z/N.locationSize,w,k,Z*S,Z/N.locationSize*B*S,U)}}else if(lt!==void 0){let k=lt[vt];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(N.location,k);break;case 3:i.vertexAttrib3fv(N.location,k);break;case 4:i.vertexAttrib4fv(N.location,k);break;default:i.vertexAttrib1fv(N.location,k)}}}}y()}function L(){z();for(let v in n){let A=n[v];for(let nt in A){let st=A[nt];for(let ct in st)h(st[ct].object),delete st[ct];delete A[nt]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let A=n[v.id];for(let nt in A){let st=A[nt];for(let ct in st)h(st[ct].object),delete st[ct];delete A[nt]}delete n[v.id]}function C(v){for(let A in n){let nt=n[A];if(nt[v.id]===void 0)continue;let st=nt[v.id];for(let ct in st)h(st[ct].object),delete st[ct];delete nt[v.id]}}function z(){tt(),o=!0,r!==s&&(r=s,l(r.object))}function tt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:tt,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function xg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,f){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Kn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let z=C===ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ri&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==oi&&!z)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:L,maxSamples:T}}function vg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new wi,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):l();else{let y=r?0:n,x=y*4,M=p.clippingState||null;c.value=M,M=h(g,f,x,m);for(let L=0;L!==x;++L)M[L]=e[L];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){let _=u!==null?u.length:0,d=null;if(_!==0){if(d=c.value,g!==!0||d===null){let p=m+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<p)&&(d=new Float32Array(p));for(let x=0,M=m;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(d,M),d[M+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function bg(i){let t=new WeakMap;function e(o,a){return a===Zr?o.mapping=rr:a===Vc&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zr||a===Vc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new bl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ma=class extends ya{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},js=4,mu=[.125,.215,.35,.446,.526,.582],_s=20,Mc=new Ma,gu=new zt,vc=null,bc=0,Ec=0,Sc=!1,ms=(1+Math.sqrt(5))/2,Ys=1/ms,_u=[new R(-ms,Ys,0),new R(ms,Ys,0),new R(-Ys,0,ms),new R(Ys,0,ms),new R(0,ms,-Ys),new R(0,ms,Ys),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],va=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){vc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,bc,Ec),this._renderer.xr.enabled=Sc,t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:ho,format:Kn,colorSpace:ji,depthBuffer:!1},s=yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=Sg(r,t,e)}return s}_compileMaterial(t){let e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,Mc)}_sceneToCubeUV(t,e,n,s){let a=new ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(gu),h.toneMapping=$i,h.autoClear=!1;let m=new Ke({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Tt(new en,m),_=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(gu),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;ko(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===rr||t.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ko(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Mc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_u[(s-r-1)%_u.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Tt(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_s-1),_=r/g,d=isFinite(r)?1+Math.floor(h*_):_s;d>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${_s}`);let p=[],y=0;for(let C=0;C<_s;++C){let z=C/_,tt=Math.exp(-z*z/2);p.push(tt),C===0?y+=tt:C<d&&(y+=2*tt)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let M=this._sizeLods[s],L=3*M*(s>x-js?s-x+js:0),T=4*(this._cubeSize-M);ko(e,L,T,3*M,2*M),c.setRenderTarget(e),c.render(u,Mc)}};function Eg(i){let t=[],e=[],n=[],s=i,r=i-js+1+mu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-js?c=mu[o-i+js-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,d=2,p=1,y=new Float32Array(_*g*m),x=new Float32Array(d*g*m),M=new Float32Array(p*g*m);for(let T=0;T<m;T++){let C=T%3*2/3-1,z=T>2?0:-1,tt=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];y.set(tt,_*g*T),x.set(f,d*g*T);let v=[T,T,T,T,T,T];M.set(v,p*g*T)}let L=new ye;L.setAttribute("position",new Pe(y,_)),L.setAttribute("uv",new Pe(x,d)),L.setAttribute("faceIndex",new Pe(M,p)),t.push(L),s>js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yu(i,t,e){let n=new Ci(i,t,e);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sg(i,t,e){let n=new Float32Array(_s),s=new R(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function xu(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Mu(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function wg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Zr||c===Vc,h=c===rr||c===or;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new va(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new va(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&oa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ag(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)t.remove(_[d])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let d=0,p=_.length;d<p;d++)t.update(_[d],i.ARRAY_BUFFER)}}function l(u){let f=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let x=0,M=y.length;x<M;x+=3){let L=y[x+0],T=y[x+1],C=y[x+2];f.push(L,T,T,C,C,L)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let L=x+0,T=x+1,C=x+2;f.push(L,T,T,C,C,L)}}else return;let d=new(ff(f)?_a:ga)(f,1);d.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,d)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Rg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,n,1)}function u(f,m,g,_){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)l(f[p]/o,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y];for(let y=0;y<_.length;y++)e.update(p,n,_[y])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Cg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pg(i,t,e){let n=new WeakMap,s=new Ce;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let tt=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",tt)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*L*4*u),C=new pa(T,M,L,u);C.type=oi,C.needsUpdate=!0;let z=x*4;for(let v=0;v<u;v++){let A=d[v],nt=p[v],st=y[v],ct=M*L*4*v;for(let Mt=0;Mt<A.count;Mt++){let lt=Mt*z;m===!0&&(s.fromBufferAttribute(A,Mt),T[ct+lt+0]=s.x,T[ct+lt+1]=s.y,T[ct+lt+2]=s.z,T[ct+lt+3]=0),g===!0&&(s.fromBufferAttribute(nt,Mt),T[ct+lt+4]=s.x,T[ct+lt+5]=s.y,T[ct+lt+6]=s.z,T[ct+lt+7]=0),_===!0&&(s.fromBufferAttribute(st,Mt),T[ct+lt+8]=s.x,T[ct+lt+9]=s.y,T[ct+lt+10]=s.z,T[ct+lt+11]=st.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Dt(M,L)},n.set(a,f),a.addEventListener("dispose",tt)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ig(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ba=class extends Rn{constructor(t,e,n,s,r,o,a,c,l,h=er){if(h!==er&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===er&&(n=Ms),n===void 0&&h===cr&&(n=ar),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gf=new Rn,vu=new ba(1,1),_f=new pa,yf=new Ml,xf=new xa,bu=[],Eu=[],Su=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function _r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oa(i,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function Hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Tu.set(n),i.uniformMatrix2fv(this.addr,!1,Tu),sn(e,n)}}function Fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),sn(e,n)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Su.set(n),i.uniformMatrix4fv(this.addr,!1,Su),sn(e,n)}}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function Gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vu.compareFunction=uf,r=vu):r=gf,e.setTexture2D(t||r,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yf,s)}function $g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xf,s)}function Kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_f,s)}function Jg(i){switch(i){case 5126:return Lg;case 35664:return Ug;case 35665:return Dg;case 35666:return Ng;case 35674:return Hg;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Kg}}function Qg(i,t){i.uniform1fv(this.addr,t)}function jg(i,t){let e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function t_(i,t){let e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function e_(i,t){let e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function n_(i,t){let e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function i_(i,t){let e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function s_(i,t){let e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r_(i,t){i.uniform1iv(this.addr,t)}function o_(i,t){i.uniform2iv(this.addr,t)}function a_(i,t){i.uniform3iv(this.addr,t)}function c_(i,t){i.uniform4iv(this.addr,t)}function l_(i,t){i.uniform1uiv(this.addr,t)}function h_(i,t){i.uniform2uiv(this.addr,t)}function u_(i,t){i.uniform3uiv(this.addr,t)}function f_(i,t){i.uniform4uiv(this.addr,t)}function d_(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gf,r[o])}function p_(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yf,r[o])}function m_(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xf,r[o])}function g_(i,t,e){let n=this.cache,s=t.length,r=Oa(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_f,r[o])}function __(i){switch(i){case 5126:return Qg;case 35664:return jg;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return c_;case 5125:return l_;case 36294:return h_;case 36295:return u_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}var El=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jg(e.type)}},Sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=__(e.type)}},wl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},wc=/(\w+)(\])?(\[|\.)?/g;function Au(i,t){i.seq.push(t),i.map[t.id]=t}function y_(i,t,e){let n=i.name,s=n.length;for(wc.lastIndex=0;;){let r=wc.exec(n),o=wc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Au(e,l===void 0?new El(a,i,t):new Sl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new wl(a),Au(e,u)),e=u}}}var ir=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);y_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ru(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var x_=37297,M_=0;function v_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function b_(i){let t=Se.getPrimaries(Se.workingColorSpace),e=Se.getPrimaries(i),n;switch(t===e?n="":t===ha&&e===la?n="LinearDisplayP3ToLinearSRGB":t===la&&e===ha&&(n="LinearSRGBToLinearDisplayP3"),i){case ji:case Fa:return[n,"LinearTransferOETF"];case fn:case gh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+v_(i.getShaderSource(t),o)}else return s}function E_(i,t){let e=b_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function S_(i,t){let e;switch(t){case Dd:e="Linear";break;case Nd:e="Reinhard";break;case Hd:e="Cineon";break;case lo:e="ACESFilmic";break;case Od:e="AgX";break;case Bd:e="Neutral";break;case Fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vo=new R;function w_(){Se.getLuminanceCoefficients(Vo);let i=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function A_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function kr(i){return i!==""}function Pu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Iu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(C_,I_)}var P_=new Map;function I_(i,t){let e=ue[t];if(e===void 0){let n=P_.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tl(e)}var L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(i){return i.replace(L_,U_)}function U_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function D_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function N_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case or:t="ENVMAP_TYPE_CUBE";break;case Ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===or&&(t="ENVMAP_MODE_REFRACTION"),t}function F_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oh:t="ENVMAP_BLENDING_MULTIPLY";break;case ah:t="ENVMAP_BLENDING_MIX";break;case Ud:t="ENVMAP_BLENDING_ADD";break}return t}function O_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function B_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=D_(e),l=N_(e),h=H_(e),u=F_(e),f=O_(e),m=T_(e),g=A_(r),_=s.createProgram(),d,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(d=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?ue.tonemapping_pars_fragment:"",e.toneMapping!==$i?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),w_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),o=Tl(o),o=Pu(o,e),o=Iu(o,e),a=Tl(a),a=Pu(a,e),a=Iu(a,e),o=Lu(o),a=Lu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=y+d+o,M=y+p+a,L=Ru(s,s.VERTEX_SHADER,x),T=Ru(s,s.FRAGMENT_SHADER,M);s.attachShader(_,L),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(A){if(i.debug.checkShaderErrors){let nt=s.getProgramInfoLog(_).trim(),st=s.getShaderInfoLog(L).trim(),ct=s.getShaderInfoLog(T).trim(),Mt=!0,lt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,T);else{let vt=Cu(s,L,"vertex"),N=Cu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+nt+`
`+vt+`
`+N)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(st===""||ct==="")&&(lt=!1);lt&&(A.diagnostics={runnable:Mt,programLog:nt,vertexShader:{log:st,prefix:d},fragmentShader:{log:ct,prefix:p}})}s.deleteShader(L),s.deleteShader(T),z=new ir(s,_),tt=R_(s,_)}let z;this.getUniforms=function(){return z===void 0&&C(this),z};let tt;this.getAttributes=function(){return tt===void 0&&C(this),tt};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,x_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}var z_=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rl(t),e.set(t,n)),n}},Rl=class{constructor(t){this.id=z_++,this.code=t,this.usedTimes=0}};function k_(i,t,e,n,s,r,o){let a=new ma,c=new Al,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,m=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,A,nt,st,ct){let Mt=st.fog,lt=ct.geometry,vt=v.isMeshStandardMaterial?st.environment:null,N=(v.isMeshStandardMaterial?e:t).get(v.envMap||vt),j=N&&N.mapping===Ha?N.image.height:null,k=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let Z=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,rt=Z!==void 0?Z.length:0,W=0;lt.morphAttributes.position!==void 0&&(W=1),lt.morphAttributes.normal!==void 0&&(W=2),lt.morphAttributes.color!==void 0&&(W=3);let w,S,U,B;if(k){let Ve=ri[k];w=Ve.vertexShader,S=Ve.fragmentShader}else w=v.vertexShader,S=v.fragmentShader,c.update(v),U=c.getVertexShaderID(v),B=c.getFragmentShaderID(v);let F=i.getRenderTarget(),D=ct.isInstancedMesh===!0,V=ct.isBatchedMesh===!0,q=!!v.map,O=!!v.matcap,E=!!N,Q=!!v.aoMap,X=!!v.lightMap,G=!!v.bumpMap,Y=!!v.normalMap,K=!!v.displacementMap,ot=!!v.emissiveMap,P=!!v.metalnessMap,b=!!v.roughnessMap,H=v.anisotropy>0,$=v.clearcoat>0,at=v.dispersion>0,J=v.iridescence>0,bt=v.sheen>0,_t=v.transmission>0,ft=H&&!!v.anisotropyMap,Lt=$&&!!v.clearcoatMap,dt=$&&!!v.clearcoatNormalMap,At=$&&!!v.clearcoatRoughnessMap,Bt=J&&!!v.iridescenceMap,Ht=J&&!!v.iridescenceThicknessMap,Rt=bt&&!!v.sheenColorMap,Ct=bt&&!!v.sheenRoughnessMap,kt=!!v.specularMap,jt=!!v.specularColorMap,it=!!v.specularIntensityMap,Ut=_t&&!!v.transmissionMap,yt=_t&&!!v.thicknessMap,wt=!!v.gradientMap,Vt=!!v.alphaMap,Yt=v.alphaTest>0,he=!!v.alphaHash,Le=!!v.extensions,ke=$i;v.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ke=i.toneMapping);let me={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:w,fragmentShader:S,defines:v.defines,customVertexShaderID:U,customFragmentShaderID:B,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:V,batchingColor:V&&ct._colorsTexture!==null,instancing:D,instancingColor:D&&ct.instanceColor!==null,instancingMorph:D&&ct.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ji,alphaToCoverage:!!v.alphaToCoverage,map:q,matcap:O,envMap:E,envMapMode:E&&N.mapping,envMapCubeUVHeight:j,aoMap:Q,lightMap:X,bumpMap:G,normalMap:Y,displacementMap:m&&K,emissiveMap:ot,normalMapObjectSpace:Y&&v.normalMapType===Gd,normalMapTangentSpace:Y&&v.normalMapType===mh,metalnessMap:P,roughnessMap:b,anisotropy:H,anisotropyMap:ft,clearcoat:$,clearcoatMap:Lt,clearcoatNormalMap:dt,clearcoatRoughnessMap:At,dispersion:at,iridescence:J,iridescenceMap:Bt,iridescenceThicknessMap:Ht,sheen:bt,sheenColorMap:Rt,sheenRoughnessMap:Ct,specularMap:kt,specularColorMap:jt,specularIntensityMap:it,transmission:_t,transmissionMap:Ut,thicknessMap:yt,gradientMap:wt,opaque:v.transparent===!1&&v.blending===ai&&v.alphaToCoverage===!1,alphaMap:Vt,alphaTest:Yt,alphaHash:he,combine:v.combine,mapUv:q&&d(v.map.channel),aoMapUv:Q&&d(v.aoMap.channel),lightMapUv:X&&d(v.lightMap.channel),bumpMapUv:G&&d(v.bumpMap.channel),normalMapUv:Y&&d(v.normalMap.channel),displacementMapUv:K&&d(v.displacementMap.channel),emissiveMapUv:ot&&d(v.emissiveMap.channel),metalnessMapUv:P&&d(v.metalnessMap.channel),roughnessMapUv:b&&d(v.roughnessMap.channel),anisotropyMapUv:ft&&d(v.anisotropyMap.channel),clearcoatMapUv:Lt&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&d(v.sheenRoughnessMap.channel),specularMapUv:kt&&d(v.specularMap.channel),specularColorMapUv:jt&&d(v.specularColorMap.channel),specularIntensityMapUv:it&&d(v.specularIntensityMap.channel),transmissionMapUv:Ut&&d(v.transmissionMap.channel),thicknessMapUv:yt&&d(v.thicknessMap.channel),alphaMapUv:Vt&&d(v.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Y||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!lt.attributes.uv&&(q||Vt),fog:!!Mt,useFog:v.fog===!0,fogExp2:!!Mt&&Mt.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:ct.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:W,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&nt.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:q&&v.map.isVideoTexture===!0&&Se.getTransfer(v.map.colorSpace)===De,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Re,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Le&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&v.extensions.multiDraw===!0||V)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function y(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let nt in v.defines)A.push(nt),A.push(v.defines[nt]);return v.isRawShaderMaterial===!1&&(x(A,v),M(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function x(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),v.push(a.mask)}function L(v){let A=_[v.type],nt;if(A){let st=ri[A];nt=I0.clone(st.uniforms)}else nt=v.uniforms;return nt}function T(v,A){let nt;for(let st=0,ct=h.length;st<ct;st++){let Mt=h[st];if(Mt.cacheKey===A){nt=Mt,++nt.usedTimes;break}}return nt===void 0&&(nt=new B_(i,A,v,r),h.push(nt)),nt}function C(v){if(--v.usedTimes===0){let A=h.indexOf(v);h[A]=h[h.length-1],h.pop(),v.destroy()}}function z(v){c.remove(v)}function tt(){c.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:L,acquireProgram:T,releaseProgram:C,releaseShaderCache:z,programs:h,dispose:tt}}function V_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function G_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Du(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,m,g,_,d){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=d),t++,p}function a(u,f,m,g,_,d){let p=o(u,f,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(u,f,m,g,_,d){let p=o(u,f,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||G_),n.length>1&&n.sort(f||Du),s.length>1&&s.sort(f||Du)}function h(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function W_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Nu,i.set(n,[o])):s>=r.length?(o=new Nu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function X_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Y_=0;function Z_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $_(i){let t=new X_,e=q_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new se,o=new se;function a(l){let h=0,u=0,f=0;for(let tt=0;tt<9;tt++)n.probe[tt].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,y=0,x=0,M=0,L=0,T=0,C=0;l.sort(Z_);for(let tt=0,v=l.length;tt<v;tt++){let A=l[tt],nt=A.color,st=A.intensity,ct=A.distance,Mt=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=nt.r*st,u+=nt.g*st,f+=nt.b*st;else if(A.isLightProbe){for(let lt=0;lt<9;lt++)n.probe[lt].addScaledVector(A.sh.coefficients[lt],st);C++}else if(A.isDirectionalLight){let lt=t.get(A);if(lt.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let vt=A.shadow,N=e.get(A);N.shadowIntensity=vt.intensity,N.shadowBias=vt.bias,N.shadowNormalBias=vt.normalBias,N.shadowRadius=vt.radius,N.shadowMapSize=vt.mapSize,n.directionalShadow[m]=N,n.directionalShadowMap[m]=Mt,n.directionalShadowMatrix[m]=A.shadow.matrix,y++}n.directional[m]=lt,m++}else if(A.isSpotLight){let lt=t.get(A);lt.position.setFromMatrixPosition(A.matrixWorld),lt.color.copy(nt).multiplyScalar(st),lt.distance=ct,lt.coneCos=Math.cos(A.angle),lt.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),lt.decay=A.decay,n.spot[_]=lt;let vt=A.shadow;if(A.map&&(n.spotLightMap[L]=A.map,L++,vt.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[_]=vt.matrix,A.castShadow){let N=e.get(A);N.shadowIntensity=vt.intensity,N.shadowBias=vt.bias,N.shadowNormalBias=vt.normalBias,N.shadowRadius=vt.radius,N.shadowMapSize=vt.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=Mt,M++}_++}else if(A.isRectAreaLight){let lt=t.get(A);lt.color.copy(nt).multiplyScalar(st),lt.halfWidth.set(A.width*.5,0,0),lt.halfHeight.set(0,A.height*.5,0),n.rectArea[d]=lt,d++}else if(A.isPointLight){let lt=t.get(A);if(lt.color.copy(A.color).multiplyScalar(A.intensity),lt.distance=A.distance,lt.decay=A.decay,A.castShadow){let vt=A.shadow,N=e.get(A);N.shadowIntensity=vt.intensity,N.shadowBias=vt.bias,N.shadowNormalBias=vt.normalBias,N.shadowRadius=vt.radius,N.shadowMapSize=vt.mapSize,N.shadowCameraNear=vt.camera.near,N.shadowCameraFar=vt.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=Mt,n.pointShadowMatrix[g]=A.shadow.matrix,x++}n.point[g]=lt,g++}else if(A.isHemisphereLight){let lt=t.get(A);lt.skyColor.copy(A.color).multiplyScalar(st),lt.groundColor.copy(A.groundColor).multiplyScalar(st),n.hemi[p]=lt,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==m||z.pointLength!==g||z.spotLength!==_||z.rectAreaLength!==d||z.hemiLength!==p||z.numDirectionalShadows!==y||z.numPointShadows!==x||z.numSpotShadows!==M||z.numSpotMaps!==L||z.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,z.directionalLength=m,z.pointLength=g,z.spotLength=_,z.rectAreaLength=d,z.hemiLength=p,z.numDirectionalShadows=y,z.numPointShadows=x,z.numSpotShadows=M,z.numSpotMaps=L,z.numLightProbes=C,n.version=Y_++)}function c(l,h){let u=0,f=0,m=0,g=0,_=0,d=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let x=l[p];if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(x.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),m++}else if(x.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),o.identity(),r.copy(x.matrixWorld),r.premultiply(d),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(d),_++}}}return{setup:a,setupView:c,state:n}}function Hu(i){let t=new $_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function K_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Hu(i),t.set(s,[a])):r>=o.length?(a=new Hu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Cl=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pl=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q_=`uniform sampler2D shadow_pass;
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
}`;function j_(i,t,e){let n=new Qr,s=new Dt,r=new Dt,o=new Ce,a=new Cl({depthPacking:Vd}),c=new Pl,l={},h=e.maxTextureSize,u={[An]:Tn,[Tn]:An,[Re]:Re},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:J_,fragmentShader:Q_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Tt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let p=this.type;this.render=function(T,C,z){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;let tt=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),nt=i.state;nt.setBlending(Zi),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);let st=p!==Si&&this.type===Si,ct=p===Si&&this.type!==Si;for(let Mt=0,lt=T.length;Mt<lt;Mt++){let vt=T[Mt],N=vt.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",vt,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let j=N.getFrameExtents();if(s.multiply(j),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,N.mapSize.y=r.y)),N.map===null||st===!0||ct===!0){let Z=this.type!==Si?{minFilter:dn,magFilter:dn}:{};N.map!==null&&N.map.dispose(),N.map=new Ci(s.x,s.y,Z),N.map.texture.name=vt.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let k=N.getViewportCount();for(let Z=0;Z<k;Z++){let rt=N.getViewport(Z);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),nt.viewport(o),N.updateMatrices(vt,Z),n=N.getFrustum(),M(C,z,N.camera,vt,this.type)}N.isPointLightShadow!==!0&&this.type===Si&&y(N,z),N.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(tt,v,A)};function y(T,C){let z=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ci(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,z,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,z,m,_,null)}function x(T,C,z,tt){let v=null,A=z.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)v=A;else if(v=z.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let nt=v.uuid,st=C.uuid,ct=l[nt];ct===void 0&&(ct={},l[nt]=ct);let Mt=ct[st];Mt===void 0&&(Mt=v.clone(),ct[st]=Mt,C.addEventListener("dispose",L)),v=Mt}if(v.visible=C.visible,v.wireframe=C.wireframe,tt===Si?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,z.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let nt=i.properties.get(v);nt.light=z}return v}function M(T,C,z,tt,v){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Si)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld);let st=t.update(T),ct=T.material;if(Array.isArray(ct)){let Mt=st.groups;for(let lt=0,vt=Mt.length;lt<vt;lt++){let N=Mt[lt],j=ct[N.materialIndex];if(j&&j.visible){let k=x(T,j,tt,v);T.onBeforeShadow(i,T,C,z,st,k,N),i.renderBufferDirect(z,null,st,k,T,N),T.onAfterShadow(i,T,C,z,st,k,N)}}}else if(ct.visible){let Mt=x(T,ct,tt,v);T.onBeforeShadow(i,T,C,z,st,Mt,null),i.renderBufferDirect(z,null,st,Mt,T,null),T.onAfterShadow(i,T,C,z,st,Mt,null)}}let nt=T.children;for(let st=0,ct=nt.length;st<ct;st++)M(nt[st],C,z,tt,v)}function L(T){T.target.removeEventListener("dispose",L);for(let z in l){let tt=l[z],v=T.target.uuid;v in tt&&(tt[v].dispose(),delete tt[v])}}}var t1={[Nc]:Hc,[Fc]:zc,[Oc]:kc,[sr]:Bc,[Hc]:Nc,[zc]:Fc,[kc]:Oc,[Bc]:sr};function e1(i){function t(){let it=!1,Ut=new Ce,yt=null,wt=new Ce(0,0,0,0);return{setMask:function(Vt){yt!==Vt&&!it&&(i.colorMask(Vt,Vt,Vt,Vt),yt=Vt)},setLocked:function(Vt){it=Vt},setClear:function(Vt,Yt,he,Le,ke){ke===!0&&(Vt*=Le,Yt*=Le,he*=Le),Ut.set(Vt,Yt,he,Le),wt.equals(Ut)===!1&&(i.clearColor(Vt,Yt,he,Le),wt.copy(Ut))},reset:function(){it=!1,yt=null,wt.set(-1,0,0,0)}}}function e(){let it=!1,Ut=!1,yt=null,wt=null,Vt=null;return{setReversed:function(Yt){Ut=Yt},setTest:function(Yt){Yt?U(i.DEPTH_TEST):B(i.DEPTH_TEST)},setMask:function(Yt){yt!==Yt&&!it&&(i.depthMask(Yt),yt=Yt)},setFunc:function(Yt){if(Ut&&(Yt=t1[Yt]),wt!==Yt){switch(Yt){case Nc:i.depthFunc(i.NEVER);break;case Hc:i.depthFunc(i.ALWAYS);break;case Fc:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Oc:i.depthFunc(i.EQUAL);break;case Bc:i.depthFunc(i.GEQUAL);break;case zc:i.depthFunc(i.GREATER);break;case kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Yt}},setLocked:function(Yt){it=Yt},setClear:function(Yt){Vt!==Yt&&(i.clearDepth(Yt),Vt=Yt)},reset:function(){it=!1,yt=null,wt=null,Vt=null}}}function n(){let it=!1,Ut=null,yt=null,wt=null,Vt=null,Yt=null,he=null,Le=null,ke=null;return{setTest:function(me){it||(me?U(i.STENCIL_TEST):B(i.STENCIL_TEST))},setMask:function(me){Ut!==me&&!it&&(i.stencilMask(me),Ut=me)},setFunc:function(me,Ve,wn){(yt!==me||wt!==Ve||Vt!==wn)&&(i.stencilFunc(me,Ve,wn),yt=me,wt=Ve,Vt=wn)},setOp:function(me,Ve,wn){(Yt!==me||he!==Ve||Le!==wn)&&(i.stencilOp(me,Ve,wn),Yt=me,he=Ve,Le=wn)},setLocked:function(me){it=me},setClear:function(me){ke!==me&&(i.clearStencil(me),ke=me)},reset:function(){it=!1,Ut=null,yt=null,wt=null,Vt=null,Yt=null,he=null,Le=null,ke=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,f=[],m=null,g=!1,_=null,d=null,p=null,y=null,x=null,M=null,L=null,T=new zt(0,0,0),C=0,z=!1,tt=null,v=null,A=null,nt=null,st=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Mt=!1,lt=0,vt=i.getParameter(i.VERSION);vt.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(vt)[1]),Mt=lt>=1):vt.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),Mt=lt>=2);let N=null,j={},k=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),rt=new Ce().fromArray(k),W=new Ce().fromArray(Z);function w(it,Ut,yt,wt){let Vt=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(it,Yt),i.texParameteri(it,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(it,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<yt;he++)it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Ut+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return Yt}let S={};S[i.TEXTURE_2D]=w(i.TEXTURE_2D,i.TEXTURE_2D,1),S[i.TEXTURE_CUBE_MAP]=w(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),S[i.TEXTURE_2D_ARRAY]=w(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),S[i.TEXTURE_3D]=w(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),U(i.DEPTH_TEST),r.setFunc(sr),X(!1),G(Gh),U(i.CULL_FACE),E(Zi);function U(it){l[it]!==!0&&(i.enable(it),l[it]=!0)}function B(it){l[it]!==!1&&(i.disable(it),l[it]=!1)}function F(it,Ut){return h[it]!==Ut?(i.bindFramebuffer(it,Ut),h[it]=Ut,it===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ut),it===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function D(it,Ut){let yt=f,wt=!1;if(it){yt=u.get(Ut),yt===void 0&&(yt=[],u.set(Ut,yt));let Vt=it.textures;if(yt.length!==Vt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,he=Vt.length;Yt<he;Yt++)yt[Yt]=i.COLOR_ATTACHMENT0+Yt;yt.length=Vt.length,wt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(yt)}function V(it){return m!==it?(i.useProgram(it),m=it,!0):!1}let q={[gs]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[_d]:i.FUNC_REVERSE_SUBTRACT};q[yd]=i.MIN,q[xd]=i.MAX;let O={[Md]:i.ZERO,[vd]:i.ONE,[bd]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[Rd]:i.SRC_ALPHA_SATURATE,[Td]:i.DST_COLOR,[Sd]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Cd]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function E(it,Ut,yt,wt,Vt,Yt,he,Le,ke,me){if(it===Zi){g===!0&&(B(i.BLEND),g=!1);return}if(g===!1&&(U(i.BLEND),g=!0),it!==md){if(it!==_||me!==z){if((d!==gs||x!==gs)&&(i.blendEquation(i.FUNC_ADD),d=gs,x=gs),me)switch(it){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case je:i.blendFunc(i.ONE,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",it);break}else switch(it){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case je:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",it);break}p=null,y=null,M=null,L=null,T.set(0,0,0),C=0,_=it,z=me}return}Vt=Vt||Ut,Yt=Yt||yt,he=he||wt,(Ut!==d||Vt!==x)&&(i.blendEquationSeparate(q[Ut],q[Vt]),d=Ut,x=Vt),(yt!==p||wt!==y||Yt!==M||he!==L)&&(i.blendFuncSeparate(O[yt],O[wt],O[Yt],O[he]),p=yt,y=wt,M=Yt,L=he),(Le.equals(T)===!1||ke!==C)&&(i.blendColor(Le.r,Le.g,Le.b,ke),T.copy(Le),C=ke),_=it,z=!1}function Q(it,Ut){it.side===Re?B(i.CULL_FACE):U(i.CULL_FACE);let yt=it.side===Tn;Ut&&(yt=!yt),X(yt),it.blending===ai&&it.transparent===!1?E(Zi):E(it.blending,it.blendEquation,it.blendSrc,it.blendDst,it.blendEquationAlpha,it.blendSrcAlpha,it.blendDstAlpha,it.blendColor,it.blendAlpha,it.premultipliedAlpha),r.setFunc(it.depthFunc),r.setTest(it.depthTest),r.setMask(it.depthWrite),s.setMask(it.colorWrite);let wt=it.stencilWrite;o.setTest(wt),wt&&(o.setMask(it.stencilWriteMask),o.setFunc(it.stencilFunc,it.stencilRef,it.stencilFuncMask),o.setOp(it.stencilFail,it.stencilZFail,it.stencilZPass)),K(it.polygonOffset,it.polygonOffsetFactor,it.polygonOffsetUnits),it.alphaToCoverage===!0?U(i.SAMPLE_ALPHA_TO_COVERAGE):B(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(it){tt!==it&&(it?i.frontFace(i.CW):i.frontFace(i.CCW),tt=it)}function G(it){it!==fd?(U(i.CULL_FACE),it!==v&&(it===Gh?i.cullFace(i.BACK):it===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):B(i.CULL_FACE),v=it}function Y(it){it!==A&&(Mt&&i.lineWidth(it),A=it)}function K(it,Ut,yt){it?(U(i.POLYGON_OFFSET_FILL),(nt!==Ut||st!==yt)&&(i.polygonOffset(Ut,yt),nt=Ut,st=yt)):B(i.POLYGON_OFFSET_FILL)}function ot(it){it?U(i.SCISSOR_TEST):B(i.SCISSOR_TEST)}function P(it){it===void 0&&(it=i.TEXTURE0+ct-1),N!==it&&(i.activeTexture(it),N=it)}function b(it,Ut,yt){yt===void 0&&(N===null?yt=i.TEXTURE0+ct-1:yt=N);let wt=j[yt];wt===void 0&&(wt={type:void 0,texture:void 0},j[yt]=wt),(wt.type!==it||wt.texture!==Ut)&&(N!==yt&&(i.activeTexture(yt),N=yt),i.bindTexture(it,Ut||S[it]),wt.type=it,wt.texture=Ut)}function H(){let it=j[N];it!==void 0&&it.type!==void 0&&(i.bindTexture(it.type,null),it.type=void 0,it.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(it){console.error("THREE.WebGLState:",it)}}function Ht(it){rt.equals(it)===!1&&(i.scissor(it.x,it.y,it.z,it.w),rt.copy(it))}function Rt(it){W.equals(it)===!1&&(i.viewport(it.x,it.y,it.z,it.w),W.copy(it))}function Ct(it,Ut){let yt=c.get(Ut);yt===void 0&&(yt=new WeakMap,c.set(Ut,yt));let wt=yt.get(it);wt===void 0&&(wt=i.getUniformBlockIndex(Ut,it.name),yt.set(it,wt))}function kt(it,Ut){let wt=c.get(Ut).get(it);a.get(Ut)!==wt&&(i.uniformBlockBinding(Ut,wt,it.__bindingPointIndex),a.set(Ut,wt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},N=null,j={},h={},u=new WeakMap,f=[],m=null,g=!1,_=null,d=null,p=null,y=null,x=null,M=null,L=null,T=new zt(0,0,0),C=0,z=!1,tt=null,v=null,A=null,nt=null,st=null,rt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:U,disable:B,bindFramebuffer:F,drawBuffers:D,useProgram:V,setBlending:E,setMaterial:Q,setFlipSided:X,setCullFace:G,setLineWidth:Y,setPolygonOffset:K,setScissorTest:ot,activeTexture:P,bindTexture:b,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:at,texImage2D:At,texImage3D:Bt,updateUBOMapping:Ct,uniformBlockBinding:kt,texStorage2D:Lt,texStorage3D:dt,texSubImage2D:J,texSubImage3D:bt,compressedTexSubImage2D:_t,compressedTexSubImage3D:ft,scissor:Ht,viewport:Rt,reset:jt}}function Fu(i,t,e,n){let s=n1(n);switch(e){case rf:return i*t;case af:return i*t;case cf:return i*t*2;case uh:return i*t/s.components*s.byteLength;case fh:return i*t/s.components*s.byteLength;case lf:return i*t*2/s.components*s.byteLength;case dh:return i*t*2/s.components*s.byteLength;case of:return i*t*3/s.components*s.byteLength;case Kn:return i*t*4/s.components*s.byteLength;case ph:return i*t*4/s.components*s.byteLength;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xc:case Yc:return Math.max(i,16)*Math.max(t,8)/4;case Wc:case qc:return Math.max(i,8)*Math.max(t,8)/2;case Zc:case $c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ra:case ul:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hf:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n1(i){switch(i){case Ri:case ef:return{byteLength:1,components:1};case $r:case nf:case ho:return{byteLength:2,components:1};case lh:case hh:return{byteLength:2,components:4};case Ms:case ch:case oi:return{byteLength:4,components:1};case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function i1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Dt,h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return m?new OffscreenCanvas(P,b):fa("canvas")}function _(P,b,H){let $=1,at=ot(P);if((at.width>H||at.height>H)&&($=H/Math.max(at.width,at.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor($*at.width),bt=Math.floor($*at.height);u===void 0&&(u=g(J,bt));let _t=b?g(J,bt):u;return _t.width=J,_t.height=bt,_t.getContext("2d").drawImage(P,0,0,J,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+J+"x"+bt+")."),_t}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),P;return P}function d(P){return P.generateMipmaps&&P.minFilter!==dn&&P.minFilter!==Zn}function p(P){i.generateMipmap(P)}function y(P,b,H,$,at=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=b;if(b===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),b===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),b===i.RGBA){let bt=at?ca:Se.getTransfer($);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=bt===De?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(P,b){let H;return P?b===null||b===Ms||b===ar?H=i.DEPTH24_STENCIL8:b===oi?H=i.DEPTH32F_STENCIL8:b===$r&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ms||b===ar?H=i.DEPTH_COMPONENT24:b===oi?H=i.DEPTH_COMPONENT32F:b===$r&&(H=i.DEPTH_COMPONENT16),H}function M(P,b){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==dn&&P.minFilter!==Zn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function L(P){let b=P.target;b.removeEventListener("dispose",L),C(b),b.isVideoTexture&&h.delete(b)}function T(P){let b=P.target;b.removeEventListener("dispose",T),tt(b)}function C(P){let b=n.get(P);if(b.__webglInit===void 0)return;let H=P.source,$=f.get(H);if($){let at=$[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&z(P),Object.keys($).length===0&&f.delete(H)}n.remove(P)}function z(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let H=P.source,$=f.get(H);delete $[b.__cacheKey],o.memory.textures--}function tt(P){let b=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let at=0;at<b.__webglFramebuffer[$].length;at++)i.deleteFramebuffer(b.__webglFramebuffer[$][at]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=P.textures;for(let $=0,at=H.length;$<at;$++){let J=n.get(H[$]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(P)}let v=0;function A(){v=0}function nt(){let P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function st(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ct(P,b){let H=n.get(P);if(P.isVideoTexture&&Y(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(H,P,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function Mt(P,b){let H=n.get(P);if(P.version>0&&H.__version!==P.version){W(H,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function lt(P,b){let H=n.get(P);if(P.version>0&&H.__version!==P.version){W(H,P,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function vt(P,b){let H=n.get(P);if(P.version>0&&H.__version!==P.version){w(H,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let N={[xs]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Gc]:i.MIRRORED_REPEAT},j={[dn]:i.NEAREST,[zd]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[ys]:i.LINEAR_MIPMAP_LINEAR},k={[Wd]:i.NEVER,[Kd]:i.ALWAYS,[Xd]:i.LESS,[uf]:i.LEQUAL,[qd]:i.EQUAL,[$d]:i.GEQUAL,[Yd]:i.GREATER,[Zd]:i.NOTEQUAL};function Z(P,b){if(b.type===oi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Zn||b.magFilter===Ja||b.magFilter===bo||b.magFilter===ys||b.minFilter===Zn||b.minFilter===Ja||b.minFilter===bo||b.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,N[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,N[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,N[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,j[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,j[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,k[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==bo&&b.minFilter!==ys||b.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function rt(P,b){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",L));let $=b.source,at=f.get($);at===void 0&&(at={},f.set($,at));let J=st(b);if(J!==P.__cacheKey){at[J]===void 0&&(at[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),at[J].usedTimes++;let bt=at[P.__cacheKey];bt!==void 0&&(at[P.__cacheKey].usedTimes--,bt.usedTimes===0&&z(b)),P.__cacheKey=J,P.__webglTexture=at[J].texture}return H}function W(P,b,H){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);let at=rt(P,b),J=b.source;e.bindTexture($,P.__webglTexture,i.TEXTURE0+H);let bt=n.get(J);if(J.version!==bt.__version||at===!0){e.activeTexture(i.TEXTURE0+H);let _t=Se.getPrimaries(Se.workingColorSpace),ft=b.colorSpace===qi?null:Se.getPrimaries(b.colorSpace),Lt=b.colorSpace===qi||_t===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let dt=_(b.image,!1,s.maxTextureSize);dt=K(b,dt);let At=r.convert(b.format,b.colorSpace),Bt=r.convert(b.type),Ht=y(b.internalFormat,At,Bt,b.colorSpace,b.isVideoTexture);Z($,b);let Rt,Ct=b.mipmaps,kt=b.isVideoTexture!==!0,jt=bt.__version===void 0||at===!0,it=J.dataReady,Ut=M(b,dt);if(b.isDepthTexture)Ht=x(b.format===cr,b.type),jt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Ht,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Ht,dt.width,dt.height,0,At,Bt,null));else if(b.isDataTexture)if(Ct.length>0){kt&&jt&&e.texStorage2D(i.TEXTURE_2D,Ut,Ht,Ct[0].width,Ct[0].height);for(let yt=0,wt=Ct.length;yt<wt;yt++)Rt=Ct[yt],kt?it&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,At,Bt,Rt.data):e.texImage2D(i.TEXTURE_2D,yt,Ht,Rt.width,Rt.height,0,At,Bt,Rt.data);b.generateMipmaps=!1}else kt?(jt&&e.texStorage2D(i.TEXTURE_2D,Ut,Ht,dt.width,dt.height),it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,At,Bt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,dt.width,dt.height,0,At,Bt,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Ht,Ct[0].width,Ct[0].height,dt.depth);for(let yt=0,wt=Ct.length;yt<wt;yt++)if(Rt=Ct[yt],b.format!==Kn)if(At!==null)if(kt){if(it)if(b.layerUpdates.size>0){let Vt=Fu(Rt.width,Rt.height,b.format,b.type);for(let Yt of b.layerUpdates){let he=Rt.data.subarray(Yt*Vt/Rt.data.BYTES_PER_ELEMENT,(Yt+1)*Vt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,Yt,Rt.width,Rt.height,1,At,he,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,Rt.width,Rt.height,dt.depth,At,Rt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,Ht,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,Rt.width,Rt.height,dt.depth,At,Bt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,Ht,Rt.width,Rt.height,dt.depth,0,At,Bt,Rt.data)}else{kt&&jt&&e.texStorage2D(i.TEXTURE_2D,Ut,Ht,Ct[0].width,Ct[0].height);for(let yt=0,wt=Ct.length;yt<wt;yt++)Rt=Ct[yt],b.format!==Kn?At!==null?kt?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,Ht,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?it&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,At,Bt,Rt.data):e.texImage2D(i.TEXTURE_2D,yt,Ht,Rt.width,Rt.height,0,At,Bt,Rt.data)}else if(b.isDataArrayTexture)if(kt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Ht,dt.width,dt.height,dt.depth),it)if(b.layerUpdates.size>0){let yt=Fu(dt.width,dt.height,b.format,b.type);for(let wt of b.layerUpdates){let Vt=dt.data.subarray(wt*yt/dt.data.BYTES_PER_ELEMENT,(wt+1)*yt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,dt.width,dt.height,1,At,Bt,Vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,At,Bt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,dt.width,dt.height,dt.depth,0,At,Bt,dt.data);else if(b.isData3DTexture)kt?(jt&&e.texStorage3D(i.TEXTURE_3D,Ut,Ht,dt.width,dt.height,dt.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,At,Bt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,dt.width,dt.height,dt.depth,0,At,Bt,dt.data);else if(b.isFramebufferTexture){if(jt)if(kt)e.texStorage2D(i.TEXTURE_2D,Ut,Ht,dt.width,dt.height);else{let yt=dt.width,wt=dt.height;for(let Vt=0;Vt<Ut;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,Ht,yt,wt,0,At,Bt,null),yt>>=1,wt>>=1}}else if(Ct.length>0){if(kt&&jt){let yt=ot(Ct[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Ht,yt.width,yt.height)}for(let yt=0,wt=Ct.length;yt<wt;yt++)Rt=Ct[yt],kt?it&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,At,Bt,Rt):e.texImage2D(i.TEXTURE_2D,yt,Ht,At,Bt,Rt);b.generateMipmaps=!1}else if(kt){if(jt){let yt=ot(dt);e.texStorage2D(i.TEXTURE_2D,Ut,Ht,yt.width,yt.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Bt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Ht,At,Bt,dt);d(b)&&p($),bt.__version=J.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function w(P,b,H){if(b.image.length!==6)return;let $=rt(P,b),at=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let J=n.get(at);if(at.version!==J.__version||$===!0){e.activeTexture(i.TEXTURE0+H);let bt=Se.getPrimaries(Se.workingColorSpace),_t=b.colorSpace===qi?null:Se.getPrimaries(b.colorSpace),ft=b.colorSpace===qi||bt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,dt=b.image[0]&&b.image[0].isDataTexture,At=[];for(let wt=0;wt<6;wt++)!Lt&&!dt?At[wt]=_(b.image[wt],!0,s.maxCubemapSize):At[wt]=dt?b.image[wt].image:b.image[wt],At[wt]=K(b,At[wt]);let Bt=At[0],Ht=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type),Ct=y(b.internalFormat,Ht,Rt,b.colorSpace),kt=b.isVideoTexture!==!0,jt=J.__version===void 0||$===!0,it=at.dataReady,Ut=M(b,Bt);Z(i.TEXTURE_CUBE_MAP,b);let yt;if(Lt){kt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Ct,Bt.width,Bt.height);for(let wt=0;wt<6;wt++){yt=At[wt].mipmaps;for(let Vt=0;Vt<yt.length;Vt++){let Yt=yt[Vt];b.format!==Kn?Ht!==null?kt?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,0,0,Yt.width,Yt.height,Ht,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,Ct,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,0,0,Yt.width,Yt.height,Ht,Rt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,Ct,Yt.width,Yt.height,0,Ht,Rt,Yt.data)}}}else{if(yt=b.mipmaps,kt&&jt){yt.length>0&&Ut++;let wt=ot(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Ct,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(dt){kt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,At[wt].width,At[wt].height,Ht,Rt,At[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,At[wt].width,At[wt].height,0,Ht,Rt,At[wt].data);for(let Vt=0;Vt<yt.length;Vt++){let he=yt[Vt].image[wt].image;kt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,0,0,he.width,he.height,Ht,Rt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,Ct,he.width,he.height,0,Ht,Rt,he.data)}}else{kt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Ht,Rt,At[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,Ht,Rt,At[wt]);for(let Vt=0;Vt<yt.length;Vt++){let Yt=yt[Vt];kt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,0,0,Ht,Rt,Yt.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,Ct,Ht,Rt,Yt.image[wt])}}}d(b)&&p(i.TEXTURE_CUBE_MAP),J.__version=at.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function S(P,b,H,$,at,J){let bt=r.convert(H.format,H.colorSpace),_t=r.convert(H.type),ft=y(H.internalFormat,bt,_t,H.colorSpace);if(!n.get(b).__hasExternalTextures){let dt=Math.max(1,b.width>>J),At=Math.max(1,b.height>>J);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,J,ft,dt,At,b.depth,0,bt,_t,null):e.texImage2D(at,J,ft,dt,At,0,bt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),G(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,at,n.get(H).__webglTexture,0,X(b)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,at,n.get(H).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function U(P,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let $=b.depthTexture,at=$&&$.isDepthTexture?$.type:null,J=x(b.stencilBuffer,at),bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=X(b);G(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,J,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,P)}else{let $=b.textures;for(let at=0;at<$.length;at++){let J=$[at],bt=r.convert(J.format,J.colorSpace),_t=r.convert(J.type),ft=y(J.internalFormat,bt,_t,J.colorSpace),Lt=X(b);H&&G(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ft,b.width,b.height):G(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ft,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct(b.depthTexture,0);let $=n.get(b.depthTexture).__webglTexture,at=X(b);if(b.depthTexture.format===er)G(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(b.depthTexture.format===cr)G(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function F(P){let b=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",at)};$.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=$}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");B(b.__webglFramebuffer,P)}else if(H){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),U(b.__webglDepthbuffer[$],P,!1);else{let at=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),U(b.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(P,b,H){let $=n.get(P);b!==void 0&&S($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&F(P)}function V(P){let b=P.texture,H=n.get(P),$=n.get(b);P.addEventListener("dispose",T);let at=P.textures,J=P.isWebGLCubeRenderTarget===!0,bt=at.length>1;if(bt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[_t]=[];for(let ft=0;ft<b.mipmaps.length;ft++)H.__webglFramebuffer[_t][ft]=i.createFramebuffer()}else H.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let _t=0;_t<b.mipmaps.length;_t++)H.__webglFramebuffer[_t]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(bt)for(let _t=0,ft=at.length;_t<ft;_t++){let Lt=n.get(at[_t]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&G(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _t=0;_t<at.length;_t++){let ft=at[_t];H.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[_t]);let Lt=r.convert(ft.format,ft.colorSpace),dt=r.convert(ft.type),At=y(ft.internalFormat,Lt,dt,ft.colorSpace,P.isXRRenderTarget===!0),Bt=X(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,At,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,H.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),U(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Z(i.TEXTURE_CUBE_MAP,b);for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)S(H.__webglFramebuffer[_t][ft],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ft);else S(H.__webglFramebuffer[_t],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);d(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let _t=0,ft=at.length;_t<ft;_t++){let Lt=at[_t],dt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Z(i.TEXTURE_2D,Lt),S(H.__webglFramebuffer,P,Lt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),d(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,$.__webglTexture),Z(_t,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)S(H.__webglFramebuffer[ft],P,b,i.COLOR_ATTACHMENT0,_t,ft);else S(H.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,_t,0);d(b)&&p(_t),e.unbindTexture()}P.depthBuffer&&F(P)}function q(P){let b=P.textures;for(let H=0,$=b.length;H<$;H++){let at=b[H];if(d(at)){let J=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(at).__webglTexture;e.bindTexture(J,bt),p(J),e.unbindTexture()}}}let O=[],E=[];function Q(P){if(P.samples>0){if(G(P)===!1){let b=P.textures,H=P.width,$=P.height,at=i.COLOR_BUFFER_BIT,J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(P),_t=b.length>1;if(_t)for(let ft=0;ft<b.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);let Lt=n.get(b[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,at,i.NEAREST),c===!0&&(O.length=0,E.length=0,O.push(i.COLOR_ATTACHMENT0+ft),P.depthBuffer&&P.resolveDepthBuffer===!1&&(O.push(J),E.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let ft=0;ft<b.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);let Lt=n.get(b[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function X(P){return Math.min(s.maxSamples,P.samples)}function G(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Y(P){let b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function K(P,b){let H=P.colorSpace,$=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==ji&&H!==qi&&(Se.getTransfer(H)===De?($!==Kn||at!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=nt,this.resetTextureUnits=A,this.setTexture2D=ct,this.setTexture2DArray=Mt,this.setTexture3D=lt,this.setTextureCube=vt,this.rebindTextures=D,this.setupRenderTarget=V,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=S,this.useMultisampledRTT=G}function s1(i,t){function e(n,s=qi){let r,o=Se.getTransfer(s);if(n===Ri)return i.UNSIGNED_BYTE;if(n===lh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return i.BYTE;if(n===nf)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===ch)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===ho)return i.HALF_FLOAT;if(n===rf)return i.ALPHA;if(n===of)return i.RGB;if(n===Kn)return i.RGBA;if(n===af)return i.LUMINANCE;if(n===cf)return i.LUMINANCE_ALPHA;if(n===er)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===uh)return i.RED;if(n===fh)return i.RED_INTEGER;if(n===lf)return i.RG;if(n===dh)return i.RG_INTEGER;if(n===ph)return i.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wc||n===Xc||n===qc||n===Yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zc||n===$c||n===Kc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zc||n===$c)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jc||n===Qc||n===jc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===ul||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ra)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hf||n===dl||n===pl||n===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Il=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ie=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},r1={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let d=e.getJointPose(_,n),p=this._getHandJoint(l,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a1=`
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

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:o1,fragmentShader:a1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ul=class extends Ki{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,g=null,_=new Ll,d=e.getContextAttributes(),p=null,y=null,x=[],M=[],L=new Dt,T=null,C=new ln;C.layers.enable(1),C.viewport=new Ce;let z=new ln;z.layers.enable(2),z.viewport=new Ce;let tt=[C,z],v=new Il;v.layers.enable(1),v.layers.enable(2);let A=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let S=x[w];return S===void 0&&(S=new Wr,x[w]=S),S.getTargetRaySpace()},this.getControllerGrip=function(w){let S=x[w];return S===void 0&&(S=new Wr,x[w]=S),S.getGripSpace()},this.getHand=function(w){let S=x[w];return S===void 0&&(S=new Wr,x[w]=S),S.getHandSpace()};function st(w){let S=M.indexOf(w.inputSource);if(S===-1)return;let U=x[S];U!==void 0&&(U.update(w.inputSource,w.frame,l||o),U.dispatchEvent({type:w.type,data:w.inputSource}))}function ct(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",ct),s.removeEventListener("inputsourceschange",Mt);for(let w=0;w<x.length;w++){let S=M[w];S!==null&&(M[w]=null,x[w].disconnect(S))}A=null,nt=null,_.reset(),t.setRenderTarget(p),m=null,f=null,u=null,s=null,y=null,W.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){r=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){a=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(w){l=w},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(w){if(s=w,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",ct),s.addEventListener("inputsourceschange",Mt),d.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){let S={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,S),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Ci(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let S=null,U=null,B=null;d.depth&&(B=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,S=d.stencil?cr:er,U=d.stencil?ar:Ms);let F={colorFormat:e.RGBA8,depthFormat:B,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(F),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ci(f.textureWidth,f.textureHeight,{format:Kn,type:Ri,depthTexture:new ba(f.textureWidth,f.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,S),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Mt(w){for(let S=0;S<w.removed.length;S++){let U=w.removed[S],B=M.indexOf(U);B>=0&&(M[B]=null,x[B].disconnect(U))}for(let S=0;S<w.added.length;S++){let U=w.added[S],B=M.indexOf(U);if(B===-1){for(let D=0;D<x.length;D++)if(D>=M.length){M.push(U),B=D;break}else if(M[D]===null){M[D]=U,B=D;break}if(B===-1)break}let F=x[B];F&&F.connect(U)}}let lt=new R,vt=new R;function N(w,S,U){lt.setFromMatrixPosition(S.matrixWorld),vt.setFromMatrixPosition(U.matrixWorld);let B=lt.distanceTo(vt),F=S.projectionMatrix.elements,D=U.projectionMatrix.elements,V=F[14]/(F[10]-1),q=F[14]/(F[10]+1),O=(F[9]+1)/F[5],E=(F[9]-1)/F[5],Q=(F[8]-1)/F[0],X=(D[8]+1)/D[0],G=V*Q,Y=V*X,K=B/(-Q+X),ot=K*-Q;if(S.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(ot),w.translateZ(K),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),F[10]===-1)w.projectionMatrix.copy(S.projectionMatrix),w.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let P=V+K,b=q+K,H=G-ot,$=Y+(B-ot),at=O*q/b*P,J=E*q/b*P;w.projectionMatrix.makePerspective(H,$,at,J,P,b),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function j(w,S){S===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(S.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(s===null)return;let S=w.near,U=w.far;_.texture!==null&&(_.depthNear>0&&(S=_.depthNear),_.depthFar>0&&(U=_.depthFar)),v.near=z.near=C.near=S,v.far=z.far=C.far=U,(A!==v.near||nt!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,nt=v.far);let B=w.parent,F=v.cameras;j(v,B);for(let D=0;D<F.length;D++)j(F[D],B);F.length===2?N(v,C,z):v.projectionMatrix.copy(C.projectionMatrix),k(w,v,B)};function k(w,S,U){U===null?w.matrix.copy(S.matrixWorld):(w.matrix.copy(U.matrixWorld),w.matrix.invert(),w.matrix.multiply(S.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(S.projectionMatrix),w.projectionMatrixInverse.copy(S.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Kr*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(w){c=w,f!==null&&(f.fixedFoveation=w),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=w)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Z=null;function rt(w,S){if(h=S.getViewerPose(l||o),g=S,h!==null){let U=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let B=!1;U.length!==v.cameras.length&&(v.cameras.length=0,B=!0);for(let D=0;D<U.length;D++){let V=U[D],q=null;if(m!==null)q=m.getViewport(V);else{let E=u.getViewSubImage(f,V);q=E.viewport,D===0&&(t.setRenderTargetTextures(y,E.colorTexture,f.ignoreDepthValues?void 0:E.depthStencilTexture),t.setRenderTarget(y))}let O=tt[D];O===void 0&&(O=new ln,O.layers.enable(D),O.viewport=new Ce,tt[D]=O),O.matrix.fromArray(V.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(V.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(q.x,q.y,q.width,q.height),D===0&&(v.matrix.copy(O.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),B===!0&&v.cameras.push(O)}let F=s.enabledFeatures;if(F&&F.includes("depth-sensing")){let D=u.getDepthInformation(U[0]);D&&D.isValid&&D.texture&&_.init(t,D,s.renderState)}}for(let U=0;U<x.length;U++){let B=M[U],F=x[U];B!==null&&F!==void 0&&F.update(B,S,l||o)}Z&&Z(w,S),S.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:S}),g=null}let W=new mf;W.setAnimationLoop(rt),this.setAnimationLoop=function(w){Z=w},this.dispose=function(){}}},ps=new hn,c1=new se;function l1(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,pf(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,M)):p.isMeshMatcapMaterial?(r(d,p),g(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),_(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?c(d,p,y,x):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Tn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Tn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let y=t.get(p),x=y.envMap,M=y.envMapRotation;x&&(d.envMap.value=x,ps.copy(M),ps.x*=-1,ps.y*=-1,ps.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),d.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(ps)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,y,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=x*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,y){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){let y=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",d));let L=x.program;n.updateUBOMapping(y,L);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let M=i.createBuffer(),L=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],M=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,C=M.length;T<C;T++){let z=Array.isArray(M[T])?M[T]:[M[T]];for(let tt=0,v=z.length;tt<v;tt++){let A=z[tt];if(m(A,T,tt,L)===!0){let nt=A.__offset,st=Array.isArray(A.value)?A.value:[A.value],ct=0;for(let Mt=0;Mt<st.length;Mt++){let lt=st[Mt],vt=_(lt);typeof lt=="number"||typeof lt=="boolean"?(A.__data[0]=lt,i.bufferSubData(i.UNIFORM_BUFFER,nt+ct,A.__data)):lt.isMatrix3?(A.__data[0]=lt.elements[0],A.__data[1]=lt.elements[1],A.__data[2]=lt.elements[2],A.__data[3]=0,A.__data[4]=lt.elements[3],A.__data[5]=lt.elements[4],A.__data[6]=lt.elements[5],A.__data[7]=0,A.__data[8]=lt.elements[6],A.__data[9]=lt.elements[7],A.__data[10]=lt.elements[8],A.__data[11]=0):(lt.toArray(A.__data,ct),ct+=vt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,nt,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,M,L){let T=y.value,C=x+"_"+M;if(L[C]===void 0)return typeof T=="number"||typeof T=="boolean"?L[C]=T:L[C]=T.clone(),!0;{let z=L[C];if(typeof T=="number"||typeof T=="boolean"){if(z!==T)return L[C]=T,!0}else if(z.equals(T)===!1)return z.copy(T),!0}return!1}function g(y){let x=y.uniforms,M=0,L=16;for(let C=0,z=x.length;C<z;C++){let tt=Array.isArray(x[C])?x[C]:[x[C]];for(let v=0,A=tt.length;v<A;v++){let nt=tt[v],st=Array.isArray(nt.value)?nt.value:[nt.value];for(let ct=0,Mt=st.length;ct<Mt;ct++){let lt=st[ct],vt=_(lt),N=M%L,j=N%vt.boundary,k=N+j;M+=j,k!==0&&L-k<vt.storage&&(M+=L-k),nt.__data=new Float32Array(vt.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=M,M+=vt.storage}}}let T=M%L;return T>0&&(M+=L-T),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function d(y){let x=y.target;x.removeEventListener("dispose",d);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var hr=class{constructor(t={}){let{canvas:e=d0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,d=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=$i,this.toneMappingExposure=1;let x=this,M=!1,L=0,T=0,C=null,z=-1,tt=null,v=new Ce,A=new Ce,nt=null,st=new zt(0),ct=0,Mt=e.width,lt=e.height,vt=1,N=null,j=null,k=new Ce(0,0,Mt,lt),Z=new Ce(0,0,Mt,lt),rt=!1,W=new Qr,w=!1,S=!1,U=new se,B=new se,F=new R,D=new Ce,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function O(){return C===null?vt:1}let E=n;function Q(I,ht){return e.getContext(I,ht)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Yt,!1),E===null){let ht="webgl2";if(E=Q(ht,I),E===null)throw Q(ht)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let X,G,Y,K,ot,P,b,H,$,at,J,bt,_t,ft,Lt,dt,At,Bt,Ht,Rt,Ct,kt,jt,it;function Ut(){X=new Tg(E),X.init(),kt=new s1(E,X),G=new Mg(E,X,t,kt),Y=new e1(E),G.reverseDepthBuffer&&Y.buffers.depth.setReversed(!0),K=new Cg(E),ot=new V_,P=new i1(E,X,Y,ot,G,kt,K),b=new bg(x),H=new wg(x),$=new H0(E),jt=new yg(E,$),at=new Ag(E,$,K,jt),J=new Ig(E,at,$,K),Ht=new Pg(E,G,P),dt=new vg(ot),bt=new k_(x,b,H,X,G,jt,dt),_t=new l1(x,ot),ft=new W_,Lt=new K_(X),Bt=new _g(x,b,H,Y,J,f,c),At=new j_(x,J,G),it=new h1(E,K,G,Y),Rt=new xg(E,X,K),Ct=new Rg(E,X,K),K.programs=bt.programs,x.capabilities=G,x.extensions=X,x.properties=ot,x.renderLists=ft,x.shadowMap=At,x.state=Y,x.info=K}Ut();let yt=new Ul(x,E);this.xr=yt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let I=X.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=X.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(I){I!==void 0&&(vt=I,this.setSize(Mt,lt,!1))},this.getSize=function(I){return I.set(Mt,lt)},this.setSize=function(I,ht,mt=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=I,lt=ht,e.width=Math.floor(I*vt),e.height=Math.floor(ht*vt),mt===!0&&(e.style.width=I+"px",e.style.height=ht+"px"),this.setViewport(0,0,I,ht)},this.getDrawingBufferSize=function(I){return I.set(Mt*vt,lt*vt).floor()},this.setDrawingBufferSize=function(I,ht,mt){Mt=I,lt=ht,vt=mt,e.width=Math.floor(I*mt),e.height=Math.floor(ht*mt),this.setViewport(0,0,I,ht)},this.getCurrentViewport=function(I){return I.copy(v)},this.getViewport=function(I){return I.copy(k)},this.setViewport=function(I,ht,mt,gt){I.isVector4?k.set(I.x,I.y,I.z,I.w):k.set(I,ht,mt,gt),Y.viewport(v.copy(k).multiplyScalar(vt).round())},this.getScissor=function(I){return I.copy(Z)},this.setScissor=function(I,ht,mt,gt){I.isVector4?Z.set(I.x,I.y,I.z,I.w):Z.set(I,ht,mt,gt),Y.scissor(A.copy(Z).multiplyScalar(vt).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(I){Y.setScissorTest(rt=I)},this.setOpaqueSort=function(I){N=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(I=!0,ht=!0,mt=!0){let gt=0;if(I){let ut=!1;if(C!==null){let Nt=C.texture.format;ut=Nt===ph||Nt===dh||Nt===fh}if(ut){let Nt=C.texture.type,Xt=Nt===Ri||Nt===Ms||Nt===$r||Nt===ar||Nt===lh||Nt===hh,$t=Bt.getClearColor(),Kt=Bt.getClearAlpha(),ne=$t.r,ee=$t.g,Qt=$t.b;Xt?(m[0]=ne,m[1]=ee,m[2]=Qt,m[3]=Kt,E.clearBufferuiv(E.COLOR,0,m)):(g[0]=ne,g[1]=ee,g[2]=Qt,g[3]=Kt,E.clearBufferiv(E.COLOR,0,g))}else gt|=E.COLOR_BUFFER_BIT}ht&&(gt|=E.DEPTH_BUFFER_BIT,E.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),mt&&(gt|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Yt,!1),ft.dispose(),Lt.dispose(),ot.dispose(),b.dispose(),H.dispose(),J.dispose(),jt.dispose(),it.dispose(),bt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",mi),yt.removeEventListener("sessionend",yo),In.stop()};function wt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=K.autoReset,ht=At.enabled,mt=At.autoUpdate,gt=At.needsUpdate,ut=At.type;Ut(),K.autoReset=I,At.enabled=ht,At.autoUpdate=mt,At.needsUpdate=gt,At.type=ut}function Yt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function he(I){let ht=I.target;ht.removeEventListener("dispose",he),Le(ht)}function Le(I){ke(I),ot.remove(I)}function ke(I){let ht=ot.get(I).programs;ht!==void 0&&(ht.forEach(function(mt){bt.releaseProgram(mt)}),I.isShaderMaterial&&bt.releaseShaderCache(I))}this.renderBufferDirect=function(I,ht,mt,gt,ut,Nt){ht===null&&(ht=V);let Xt=ut.isMesh&&ut.matrixWorld.determinant()<0,$t=wr(I,ht,mt,gt,ut);Y.setMaterial(gt,Xt);let Kt=mt.index,ne=1;if(gt.wireframe===!0){if(Kt=at.getWireframeAttribute(mt),Kt===void 0)return;ne=2}let ee=mt.drawRange,Qt=mt.attributes.position,Me=ee.start*ne,ae=(ee.start+ee.count)*ne;Nt!==null&&(Me=Math.max(Me,Nt.start*ne),ae=Math.min(ae,(Nt.start+Nt.count)*ne)),Kt!==null?(Me=Math.max(Me,0),ae=Math.min(ae,Kt.count)):Qt!=null&&(Me=Math.max(Me,0),ae=Math.min(ae,Qt.count));let Ue=ae-Me;if(Ue<0||Ue===1/0)return;jt.setup(ut,gt,$t,mt,Kt);let gn,_e=Rt;if(Kt!==null&&(gn=$.get(Kt),_e=Ct,_e.setIndex(gn)),ut.isMesh)gt.wireframe===!0?(Y.setLineWidth(gt.wireframeLinewidth*O()),_e.setMode(E.LINES)):_e.setMode(E.TRIANGLES);else if(ut.isLine){let te=gt.linewidth;te===void 0&&(te=1),Y.setLineWidth(te*O()),ut.isLineSegments?_e.setMode(E.LINES):ut.isLineLoop?_e.setMode(E.LINE_LOOP):_e.setMode(E.LINE_STRIP)}else ut.isPoints?_e.setMode(E.POINTS):ut.isSprite&&_e.setMode(E.TRIANGLES);if(ut.isBatchedMesh)if(ut._multiDrawInstances!==null)_e.renderMultiDrawInstances(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount,ut._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))_e.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let te=ut._multiDrawStarts,Ye=ut._multiDrawCounts,ve=ut._multiDrawCount,Ln=Kt?$.get(Kt).bytesPerElement:1,Fi=ot.get(gt).currentProgram.getUniforms();for(let _n=0;_n<ve;_n++)Fi.setValue(E,"_gl_DrawID",_n),_e.render(te[_n]/Ln,Ye[_n])}else if(ut.isInstancedMesh)_e.renderInstances(Me,Ue,ut.count);else if(mt.isInstancedBufferGeometry){let te=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Ye=Math.min(mt.instanceCount,te);_e.renderInstances(Me,Ue,Ye)}else _e.render(Me,Ue)};function me(I,ht,mt){I.transparent===!0&&I.side===Re&&I.forceSinglePass===!1?(I.side=Tn,I.needsUpdate=!0,Is(I,ht,mt),I.side=An,I.needsUpdate=!0,Is(I,ht,mt),I.side=Re):Is(I,ht,mt)}this.compile=function(I,ht,mt=null){mt===null&&(mt=I),d=Lt.get(mt),d.init(ht),y.push(d),mt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ht.layers)&&(d.pushLight(ut),ut.castShadow&&d.pushShadow(ut))}),I!==mt&&I.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ht.layers)&&(d.pushLight(ut),ut.castShadow&&d.pushShadow(ut))}),d.setupLights();let gt=new Set;return I.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let Nt=ut.material;if(Nt)if(Array.isArray(Nt))for(let Xt=0;Xt<Nt.length;Xt++){let $t=Nt[Xt];me($t,mt,ut),gt.add($t)}else me(Nt,mt,ut),gt.add(Nt)}),y.pop(),d=null,gt},this.compileAsync=function(I,ht,mt=null){let gt=this.compile(I,ht,mt);return new Promise(ut=>{function Nt(){if(gt.forEach(function(Xt){ot.get(Xt).currentProgram.isReady()&&gt.delete(Xt)}),gt.size===0){ut(I);return}setTimeout(Nt,10)}X.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Ve=null;function wn(I){Ve&&Ve(I)}function mi(){In.stop()}function yo(){In.start()}let In=new mf;In.setAnimationLoop(wn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(I){Ve=I,yt.setAnimationLoop(I),I===null?In.stop():In.start()},yt.addEventListener("sessionstart",mi),yt.addEventListener("sessionend",yo),this.render=function(I,ht){if(ht!==void 0&&ht.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ht.parent===null&&ht.matrixWorldAutoUpdate===!0&&ht.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(ht),ht=yt.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,ht,C),d=Lt.get(I,y.length),d.init(ht),y.push(d),B.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),W.setFromProjectionMatrix(B),S=this.localClippingEnabled,w=dt.init(this.clippingPlanes,S),_=ft.get(I,p.length),_.init(),p.push(_),yt.enabled===!0&&yt.isPresenting===!0){let Nt=x.xr.getDepthSensingMesh();Nt!==null&&ss(Nt,ht,-1/0,x.sortObjects)}ss(I,ht,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,j),q=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,q&&Bt.addToRenderList(_,I),this.info.render.frame++,w===!0&&dt.beginShadows();let mt=d.state.shadowsArray;At.render(mt,I,ht),w===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let gt=_.opaque,ut=_.transmissive;if(d.setupLights(),ht.isArrayCamera){let Nt=ht.cameras;if(ut.length>0)for(let Xt=0,$t=Nt.length;Xt<$t;Xt++){let Kt=Nt[Xt];we(gt,ut,I,Kt)}q&&Bt.render(I);for(let Xt=0,$t=Nt.length;Xt<$t;Xt++){let Kt=Nt[Xt];Ps(_,I,Kt,Kt.viewport)}}else ut.length>0&&we(gt,ut,I,ht),q&&Bt.render(I),Ps(_,I,ht);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),I.isScene===!0&&I.onAfterRender(x,I,ht),jt.resetDefaultState(),z=-1,tt=null,y.pop(),y.length>0?(d=y[y.length-1],w===!0&&dt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ss(I,ht,mt,gt){if(I.visible===!1)return;if(I.layers.test(ht.layers)){if(I.isGroup)mt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ht);else if(I.isLight)d.pushLight(I),I.castShadow&&d.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||W.intersectsSprite(I)){gt&&D.setFromMatrixPosition(I.matrixWorld).applyMatrix4(B);let Xt=J.update(I),$t=I.material;$t.visible&&_.push(I,Xt,$t,mt,D.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||W.intersectsObject(I))){let Xt=J.update(I),$t=I.material;if(gt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),D.copy(I.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),D.copy(Xt.boundingSphere.center)),D.applyMatrix4(I.matrixWorld).applyMatrix4(B)),Array.isArray($t)){let Kt=Xt.groups;for(let ne=0,ee=Kt.length;ne<ee;ne++){let Qt=Kt[ne],Me=$t[Qt.materialIndex];Me&&Me.visible&&_.push(I,Xt,Me,mt,D.z,Qt)}}else $t.visible&&_.push(I,Xt,$t,mt,D.z,null)}}let Nt=I.children;for(let Xt=0,$t=Nt.length;Xt<$t;Xt++)ss(Nt[Xt],ht,mt,gt)}function Ps(I,ht,mt,gt){let ut=I.opaque,Nt=I.transmissive,Xt=I.transparent;d.setupLightsView(mt),w===!0&&dt.setGlobalState(x.clippingPlanes,mt),gt&&Y.viewport(v.copy(gt)),ut.length>0&&gi(ut,ht,mt),Nt.length>0&&gi(Nt,ht,mt),Xt.length>0&&gi(Xt,ht,mt),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function we(I,ht,mt,gt){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[gt.id]===void 0&&(d.state.transmissionRenderTarget[gt.id]=new Ci(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?ho:Ri,minFilter:ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));let Nt=d.state.transmissionRenderTarget[gt.id],Xt=gt.viewport||v;Nt.setSize(Xt.z,Xt.w);let $t=x.getRenderTarget();x.setRenderTarget(Nt),x.getClearColor(st),ct=x.getClearAlpha(),ct<1&&x.setClearColor(16777215,.5),x.clear(),q&&Bt.render(mt);let Kt=x.toneMapping;x.toneMapping=$i;let ne=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),d.setupLightsView(gt),w===!0&&dt.setGlobalState(x.clippingPlanes,gt),gi(I,mt,gt),P.updateMultisampleRenderTarget(Nt),P.updateRenderTargetMipmap(Nt),X.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Qt=0,Me=ht.length;Qt<Me;Qt++){let ae=ht[Qt],Ue=ae.object,gn=ae.geometry,_e=ae.material,te=ae.group;if(_e.side===Re&&Ue.layers.test(gt.layers)){let Ye=_e.side;_e.side=Tn,_e.needsUpdate=!0,Wn(Ue,mt,gt,gn,_e,te),_e.side=Ye,_e.needsUpdate=!0,ee=!0}}ee===!0&&(P.updateMultisampleRenderTarget(Nt),P.updateRenderTargetMipmap(Nt))}x.setRenderTarget($t),x.setClearColor(st,ct),ne!==void 0&&(gt.viewport=ne),x.toneMapping=Kt}function gi(I,ht,mt){let gt=ht.isScene===!0?ht.overrideMaterial:null;for(let ut=0,Nt=I.length;ut<Nt;ut++){let Xt=I[ut],$t=Xt.object,Kt=Xt.geometry,ne=gt===null?Xt.material:gt,ee=Xt.group;$t.layers.test(mt.layers)&&Wn($t,ht,mt,Kt,ne,ee)}}function Wn(I,ht,mt,gt,ut,Nt){I.onBeforeRender(x,ht,mt,gt,ut,Nt),I.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ut.onBeforeRender(x,ht,mt,gt,I,Nt),ut.transparent===!0&&ut.side===Re&&ut.forceSinglePass===!1?(ut.side=Tn,ut.needsUpdate=!0,x.renderBufferDirect(mt,ht,gt,ut,I,Nt),ut.side=An,ut.needsUpdate=!0,x.renderBufferDirect(mt,ht,gt,ut,I,Nt),ut.side=Re):x.renderBufferDirect(mt,ht,gt,ut,I,Nt),I.onAfterRender(x,ht,mt,gt,ut,Nt)}function Is(I,ht,mt){ht.isScene!==!0&&(ht=V);let gt=ot.get(I),ut=d.state.lights,Nt=d.state.shadowsArray,Xt=ut.state.version,$t=bt.getParameters(I,ut.state,Nt,ht,mt),Kt=bt.getProgramCacheKey($t),ne=gt.programs;gt.environment=I.isMeshStandardMaterial?ht.environment:null,gt.fog=ht.fog,gt.envMap=(I.isMeshStandardMaterial?H:b).get(I.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&I.envMap===null?ht.environmentRotation:I.envMapRotation,ne===void 0&&(I.addEventListener("dispose",he),ne=new Map,gt.programs=ne);let ee=ne.get(Kt);if(ee!==void 0){if(gt.currentProgram===ee&&gt.lightsStateVersion===Xt)return Mo(I,$t),ee}else $t.uniforms=bt.getUniforms(I),I.onBeforeCompile($t,x),ee=bt.acquireProgram($t,Kt),ne.set(Kt,ee),gt.uniforms=$t.uniforms;let Qt=gt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Qt.clippingPlanes=dt.uniform),Mo(I,$t),gt.needsLights=Ls(I),gt.lightsStateVersion=Xt,gt.needsLights&&(Qt.ambientLightColor.value=ut.state.ambient,Qt.lightProbe.value=ut.state.probe,Qt.directionalLights.value=ut.state.directional,Qt.directionalLightShadows.value=ut.state.directionalShadow,Qt.spotLights.value=ut.state.spot,Qt.spotLightShadows.value=ut.state.spotShadow,Qt.rectAreaLights.value=ut.state.rectArea,Qt.ltc_1.value=ut.state.rectAreaLTC1,Qt.ltc_2.value=ut.state.rectAreaLTC2,Qt.pointLights.value=ut.state.point,Qt.pointLightShadows.value=ut.state.pointShadow,Qt.hemisphereLights.value=ut.state.hemi,Qt.directionalShadowMap.value=ut.state.directionalShadowMap,Qt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Qt.spotShadowMap.value=ut.state.spotShadowMap,Qt.spotLightMatrix.value=ut.state.spotLightMatrix,Qt.spotLightMap.value=ut.state.spotLightMap,Qt.pointShadowMap.value=ut.state.pointShadowMap,Qt.pointShadowMatrix.value=ut.state.pointShadowMatrix),gt.currentProgram=ee,gt.uniformsList=null,ee}function xo(I){if(I.uniformsList===null){let ht=I.currentProgram.getUniforms();I.uniformsList=ir.seqWithValue(ht.seq,I.uniforms)}return I.uniformsList}function Mo(I,ht){let mt=ot.get(I);mt.outputColorSpace=ht.outputColorSpace,mt.batching=ht.batching,mt.batchingColor=ht.batchingColor,mt.instancing=ht.instancing,mt.instancingColor=ht.instancingColor,mt.instancingMorph=ht.instancingMorph,mt.skinning=ht.skinning,mt.morphTargets=ht.morphTargets,mt.morphNormals=ht.morphNormals,mt.morphColors=ht.morphColors,mt.morphTargetsCount=ht.morphTargetsCount,mt.numClippingPlanes=ht.numClippingPlanes,mt.numIntersection=ht.numClipIntersection,mt.vertexAlphas=ht.vertexAlphas,mt.vertexTangents=ht.vertexTangents,mt.toneMapping=ht.toneMapping}function wr(I,ht,mt,gt,ut){ht.isScene!==!0&&(ht=V),P.resetTextureUnits();let Nt=ht.fog,Xt=gt.isMeshStandardMaterial?ht.environment:null,$t=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ji,Kt=(gt.isMeshStandardMaterial?H:b).get(gt.envMap||Xt),ne=gt.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,ee=!!mt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),Qt=!!mt.morphAttributes.position,Me=!!mt.morphAttributes.normal,ae=!!mt.morphAttributes.color,Ue=$i;gt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ue=x.toneMapping);let gn=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,_e=gn!==void 0?gn.length:0,te=ot.get(gt),Ye=d.state.lights;if(w===!0&&(S===!0||I!==tt)){let yn=I===tt&&gt.id===z;dt.setState(gt,I,yn)}let ve=!1;gt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ye.state.version||te.outputColorSpace!==$t||ut.isBatchedMesh&&te.batching===!1||!ut.isBatchedMesh&&te.batching===!0||ut.isBatchedMesh&&te.batchingColor===!0&&ut.colorTexture===null||ut.isBatchedMesh&&te.batchingColor===!1&&ut.colorTexture!==null||ut.isInstancedMesh&&te.instancing===!1||!ut.isInstancedMesh&&te.instancing===!0||ut.isSkinnedMesh&&te.skinning===!1||!ut.isSkinnedMesh&&te.skinning===!0||ut.isInstancedMesh&&te.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&te.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&te.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&te.instancingMorph===!1&&ut.morphTexture!==null||te.envMap!==Kt||gt.fog===!0&&te.fog!==Nt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==dt.numPlanes||te.numIntersection!==dt.numIntersection)||te.vertexAlphas!==ne||te.vertexTangents!==ee||te.morphTargets!==Qt||te.morphNormals!==Me||te.morphColors!==ae||te.toneMapping!==Ue||te.morphTargetsCount!==_e)&&(ve=!0):(ve=!0,te.__version=gt.version);let Ln=te.currentProgram;ve===!0&&(Ln=Is(gt,ht,ut));let Fi=!1,_n=!1,Tr=!1,Ne=Ln.getUniforms(),si=te.uniforms;if(Y.useProgram(Ln.program)&&(Fi=!0,_n=!0,Tr=!0),gt.id!==z&&(z=gt.id,_n=!0),Fi||tt!==I){G.reverseDepthBuffer?(U.copy(I.projectionMatrix),m0(U),g0(U),Ne.setValue(E,"projectionMatrix",U)):Ne.setValue(E,"projectionMatrix",I.projectionMatrix),Ne.setValue(E,"viewMatrix",I.matrixWorldInverse);let yn=Ne.map.cameraPosition;yn!==void 0&&yn.setValue(E,F.setFromMatrixPosition(I.matrixWorld)),G.logarithmicDepthBuffer&&Ne.setValue(E,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&Ne.setValue(E,"isOrthographic",I.isOrthographicCamera===!0),tt!==I&&(tt=I,_n=!0,Tr=!0)}if(ut.isSkinnedMesh){Ne.setOptional(E,ut,"bindMatrix"),Ne.setOptional(E,ut,"bindMatrixInverse");let yn=ut.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ne.setValue(E,"boneTexture",yn.boneTexture,P))}ut.isBatchedMesh&&(Ne.setOptional(E,ut,"batchingTexture"),Ne.setValue(E,"batchingTexture",ut._matricesTexture,P),Ne.setOptional(E,ut,"batchingIdTexture"),Ne.setValue(E,"batchingIdTexture",ut._indirectTexture,P),Ne.setOptional(E,ut,"batchingColorTexture"),ut._colorsTexture!==null&&Ne.setValue(E,"batchingColorTexture",ut._colorsTexture,P));let Oi=mt.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Ht.update(ut,mt,Ln),(_n||te.receiveShadow!==ut.receiveShadow)&&(te.receiveShadow=ut.receiveShadow,Ne.setValue(E,"receiveShadow",ut.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(si.envMap.value=Kt,si.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&ht.environment!==null&&(si.envMapIntensity.value=ht.environmentIntensity),_n&&(Ne.setValue(E,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&_i(si,Tr),Nt&&gt.fog===!0&&_t.refreshFogUniforms(si,Nt),_t.refreshMaterialUniforms(si,gt,vt,lt,d.state.transmissionRenderTarget[I.id]),ir.upload(E,xo(te),si,P)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(ir.upload(E,xo(te),si,P),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&Ne.setValue(E,"center",ut.center),Ne.setValue(E,"modelViewMatrix",ut.modelViewMatrix),Ne.setValue(E,"normalMatrix",ut.normalMatrix),Ne.setValue(E,"modelMatrix",ut.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){let yn=gt.uniformsGroups;for(let Bi=0,He=yn.length;Bi<He;Bi++){let rs=yn[Bi];it.update(rs,Ln),it.bind(rs,Ln)}}return Ln}function _i(I,ht){I.ambientLightColor.needsUpdate=ht,I.lightProbe.needsUpdate=ht,I.directionalLights.needsUpdate=ht,I.directionalLightShadows.needsUpdate=ht,I.pointLights.needsUpdate=ht,I.pointLightShadows.needsUpdate=ht,I.spotLights.needsUpdate=ht,I.spotLightShadows.needsUpdate=ht,I.rectAreaLights.needsUpdate=ht,I.hemisphereLights.needsUpdate=ht}function Ls(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(I,ht,mt){ot.get(I.texture).__webglTexture=ht,ot.get(I.depthTexture).__webglTexture=mt;let gt=ot.get(I);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=mt===void 0,gt.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,ht){let mt=ot.get(I);mt.__webglFramebuffer=ht,mt.__useDefaultFramebuffer=ht===void 0},this.setRenderTarget=function(I,ht=0,mt=0){C=I,L=ht,T=mt;let gt=!0,ut=null,Nt=!1,Xt=!1;if(I){let Kt=ot.get(I);if(Kt.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(E.FRAMEBUFFER,null),gt=!1;else if(Kt.__webglFramebuffer===void 0)P.setupRenderTarget(I);else if(Kt.__hasExternalTextures)P.rebindTextures(I,ot.get(I.texture).__webglTexture,ot.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Qt=I.depthTexture;if(Kt.__boundDepthTexture!==Qt){if(Qt!==null&&ot.has(Qt)&&(I.width!==Qt.image.width||I.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(I)}}let ne=I.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Xt=!0);let ee=ot.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ee[ht])?ut=ee[ht][mt]:ut=ee[ht],Nt=!0):I.samples>0&&P.useMultisampledRTT(I)===!1?ut=ot.get(I).__webglMultisampledFramebuffer:Array.isArray(ee)?ut=ee[mt]:ut=ee,v.copy(I.viewport),A.copy(I.scissor),nt=I.scissorTest}else v.copy(k).multiplyScalar(vt).floor(),A.copy(Z).multiplyScalar(vt).floor(),nt=rt;if(Y.bindFramebuffer(E.FRAMEBUFFER,ut)&&gt&&Y.drawBuffers(I,ut),Y.viewport(v),Y.scissor(A),Y.setScissorTest(nt),Nt){let Kt=ot.get(I.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Kt.__webglTexture,mt)}else if(Xt){let Kt=ot.get(I.texture),ne=ht||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Kt.__webglTexture,mt||0,ne)}z=-1},this.readRenderTargetPixels=function(I,ht,mt,gt,ut,Nt,Xt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=ot.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Xt!==void 0&&($t=$t[Xt]),$t){Y.bindFramebuffer(E.FRAMEBUFFER,$t);try{let Kt=I.texture,ne=Kt.format,ee=Kt.type;if(!G.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ht>=0&&ht<=I.width-gt&&mt>=0&&mt<=I.height-ut&&E.readPixels(ht,mt,gt,ut,kt.convert(ne),kt.convert(ee),Nt)}finally{let Kt=C!==null?ot.get(C).__webglFramebuffer:null;Y.bindFramebuffer(E.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(I,ht,mt,gt,ut,Nt,Xt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=ot.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Xt!==void 0&&($t=$t[Xt]),$t){let Kt=I.texture,ne=Kt.format,ee=Kt.type;if(!G.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ht>=0&&ht<=I.width-gt&&mt>=0&&mt<=I.height-ut){Y.bindFramebuffer(E.FRAMEBUFFER,$t);let Qt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Qt),E.bufferData(E.PIXEL_PACK_BUFFER,Nt.byteLength,E.STREAM_READ),E.readPixels(ht,mt,gt,ut,kt.convert(ne),kt.convert(ee),0);let Me=C!==null?ot.get(C).__webglFramebuffer:null;Y.bindFramebuffer(E.FRAMEBUFFER,Me);let ae=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await p0(E,ae,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Qt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Nt),E.deleteBuffer(Qt),E.deleteSync(ae),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,ht=null,mt=0){I.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ht=arguments[0]||null,I=arguments[1]);let gt=Math.pow(2,-mt),ut=Math.floor(I.image.width*gt),Nt=Math.floor(I.image.height*gt),Xt=ht!==null?ht.x:0,$t=ht!==null?ht.y:0;P.setTexture2D(I,0),E.copyTexSubImage2D(E.TEXTURE_2D,mt,0,0,Xt,$t,ut,Nt),Y.unbindTexture()},this.copyTextureToTexture=function(I,ht,mt=null,gt=null,ut=0){I.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),gt=arguments[0]||null,I=arguments[1],ht=arguments[2],ut=arguments[3]||0,mt=null);let Nt,Xt,$t,Kt,ne,ee;mt!==null?(Nt=mt.max.x-mt.min.x,Xt=mt.max.y-mt.min.y,$t=mt.min.x,Kt=mt.min.y):(Nt=I.image.width,Xt=I.image.height,$t=0,Kt=0),gt!==null?(ne=gt.x,ee=gt.y):(ne=0,ee=0);let Qt=kt.convert(ht.format),Me=kt.convert(ht.type);P.setTexture2D(ht,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,ht.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,ht.unpackAlignment);let ae=E.getParameter(E.UNPACK_ROW_LENGTH),Ue=E.getParameter(E.UNPACK_IMAGE_HEIGHT),gn=E.getParameter(E.UNPACK_SKIP_PIXELS),_e=E.getParameter(E.UNPACK_SKIP_ROWS),te=E.getParameter(E.UNPACK_SKIP_IMAGES),Ye=I.isCompressedTexture?I.mipmaps[ut]:I.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,Ye.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ye.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,$t),E.pixelStorei(E.UNPACK_SKIP_ROWS,Kt),I.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ut,ne,ee,Nt,Xt,Qt,Me,Ye.data):I.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ut,ne,ee,Ye.width,Ye.height,Qt,Ye.data):E.texSubImage2D(E.TEXTURE_2D,ut,ne,ee,Nt,Xt,Qt,Me,Ye),E.pixelStorei(E.UNPACK_ROW_LENGTH,ae),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ue),E.pixelStorei(E.UNPACK_SKIP_PIXELS,gn),E.pixelStorei(E.UNPACK_SKIP_ROWS,_e),E.pixelStorei(E.UNPACK_SKIP_IMAGES,te),ut===0&&ht.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(I,ht,mt=null,gt=null,ut=0){I.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),mt=arguments[0]||null,gt=arguments[1]||null,I=arguments[2],ht=arguments[3],ut=arguments[4]||0);let Nt,Xt,$t,Kt,ne,ee,Qt,Me,ae,Ue=I.isCompressedTexture?I.mipmaps[ut]:I.image;mt!==null?(Nt=mt.max.x-mt.min.x,Xt=mt.max.y-mt.min.y,$t=mt.max.z-mt.min.z,Kt=mt.min.x,ne=mt.min.y,ee=mt.min.z):(Nt=Ue.width,Xt=Ue.height,$t=Ue.depth,Kt=0,ne=0,ee=0),gt!==null?(Qt=gt.x,Me=gt.y,ae=gt.z):(Qt=0,Me=0,ae=0);let gn=kt.convert(ht.format),_e=kt.convert(ht.type),te;if(ht.isData3DTexture)P.setTexture3D(ht,0),te=E.TEXTURE_3D;else if(ht.isDataArrayTexture||ht.isCompressedArrayTexture)P.setTexture2DArray(ht,0),te=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,ht.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,ht.unpackAlignment);let Ye=E.getParameter(E.UNPACK_ROW_LENGTH),ve=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ln=E.getParameter(E.UNPACK_SKIP_PIXELS),Fi=E.getParameter(E.UNPACK_SKIP_ROWS),_n=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ue.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ue.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Kt),E.pixelStorei(E.UNPACK_SKIP_ROWS,ne),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ee),I.isDataTexture||I.isData3DTexture?E.texSubImage3D(te,ut,Qt,Me,ae,Nt,Xt,$t,gn,_e,Ue.data):ht.isCompressedArrayTexture?E.compressedTexSubImage3D(te,ut,Qt,Me,ae,Nt,Xt,$t,gn,Ue.data):E.texSubImage3D(te,ut,Qt,Me,ae,Nt,Xt,$t,gn,_e,Ue),E.pixelStorei(E.UNPACK_ROW_LENGTH,Ye),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ve),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ln),E.pixelStorei(E.UNPACK_SKIP_ROWS,Fi),E.pixelStorei(E.UNPACK_SKIP_IMAGES,_n),ut===0&&ht.generateMipmaps&&E.generateMipmap(te),Y.unbindTexture()},this.initRenderTarget=function(I){ot.get(I).__webglFramebuffer===void 0&&P.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?P.setTextureCube(I,0):I.isData3DTexture?P.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?P.setTexture2DArray(I,0):P.setTexture2D(I,0),Y.unbindTexture()},this.resetState=function(){L=0,T=0,C=null,Y.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===gh?"display-p3":"srgb",e.unpackColorSpace=Se.workingColorSpace===Fa?"display-p3":"srgb"}};var Ea=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Dl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new R,Sa=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},On=class extends Jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zs,Dr=new R,$s=new R,Ks=new R,Js=new Dt,Nr=new Dt,Mf=new se,Go=new R,Hr=new R,Wo=new R,Ou=new Dt,Tc=new Dt,Bu=new Dt,Qn=class extends $e{constructor(t=new On){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dl(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Sa(n,3,0,!1)),Zs.setAttribute("uv",new Sa(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new Dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Mf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Ks.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Xo(Go.set(-.5,-.5,0),Ks,o,$s,s,r),Xo(Hr.set(.5,-.5,0),Ks,o,$s,s,r),Xo(Wo.set(.5,.5,0),Ks,o,$s,s,r),Ou.set(0,0),Tc.set(1,0),Bu.set(1,1);let a=t.ray.intersectTriangle(Go,Hr,Wo,!1,Dr);if(a===null&&(Xo(Hr.set(-.5,.5,0),Ks,o,$s,s,r),Tc.set(0,1),a=t.ray.intersectTriangle(Go,Wo,Hr,!1,Dr),a===null))return;let c=t.ray.origin.distanceTo(Dr);c<t.near||c>t.far||e.push({distance:c,point:Dr.clone(),uv:Yi.getInterpolation(Dr,Go,Hr,Wo,Ou,Tc,Bu,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Xo(i,t,e,n,s,r){Js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Nr.x=r*Js.x-s*Js.y,Nr.y=s*Js.x+r*Js.y):Nr.copy(Js),i.copy(t),i.x+=Nr.x,i.y+=Nr.y,i.applyMatrix4(Mf)}var Nl=class extends Rn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=dn,h=dn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wa=class extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new se,zu=new se,qo=[],ku=new Pi,u1=new se,Fr=new Tt,Or=new Ii,fr=class extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,u1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),ku.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(ku)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Or.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),t.ray.intersectsSphere(Or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),zu.multiplyMatrices(n,Qs),Fr.matrixWorld=zu,Fr.raycast(t,qo);for(let o=0,a=qo.length;o<a;o++){let c=qo[o];c.instanceId=r,c.object=this,e.push(c)}qo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nl(new Float32Array(s*this.count),s,this.count,uh,oi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var jr=class extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ta=new R,Aa=new R,Vu=new se,Br=new Jr,Yo=new Ii,Ac=new R,Gu=new R,Ra=class extends $e{constructor(t=new ye,e=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ta.fromBufferAttribute(e,s-1),Aa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(Aa);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,t.ray.intersectsSphere(Yo)===!1)return;Vu.copy(s).invert(),Br.copy(t.ray).applyMatrix4(Vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,d=g-1;_<d;_+=l){let p=h.getX(_),y=h.getX(_+1),x=Zo(this,t,Br,c,p,y);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),d=h.getX(m),p=Zo(this,t,Br,c,_,d);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,d=g-1;_<d;_+=l){let p=Zo(this,t,Br,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Zo(this,t,Br,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zo(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),Aa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ta,Aa,Ac,Gu)>n)return;Ac.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ac);if(!(c<t.near||c>t.far))return{distance:c,point:Gu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Ji=class extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wu=new se,Hl=new Jr,$o=new Ii,Ko=new R,Qi=class extends $e{constructor(t=new ye,e=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,t.ray.intersectsSphere($o)===!1)return;Wu.copy(s).invert(),Hl.copy(t.ray).applyMatrix4(Wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){let d=l.getX(g);Ko.fromBufferAttribute(u,d),Xu(Ko,d,c,s,t,e,this)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Ko.fromBufferAttribute(u,g),Xu(Ko,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xu(i,t,e,n,s,r,o){let a=Hl.distanceSqToPoint(i);if(a<e){let c=new R;Hl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Bn=class extends Rn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,m=(o-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Dt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,c=new se;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(cn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(cn(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},to=class extends zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*u+this.aX,l=f*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fl=class extends to{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,m*=h,s(o,a,f,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jo=new R,Rc=new xh,Cc=new xh,Pc=new xh,Ol=class extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Jo.subVectors(s[0],s[1]).add(s[0]),l=Jo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),Rc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,d),Cc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,d),Pc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Cc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Pc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Rc.calc(c),Cc.calc(c),Pc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function f1(i,t){let e=1-i;return e*e*t}function d1(i,t){return 2*(1-i)*i*t}function p1(i,t){return i*i*t}function Xr(i,t,e,n){return f1(i,t)+d1(i,e)+p1(i,n)}function m1(i,t){let e=1-i;return e*e*e*t}function g1(i,t){let e=1-i;return 3*e*e*i*t}function _1(i,t){return 3*(1-i)*i*i*t}function y1(i,t){return i*i*i*t}function qr(i,t,e,n,s){return m1(i,t)+g1(i,e)+_1(i,n)+y1(i,s)}var Ca=class extends zn{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(t,s.x,r.x,o.x,a.x),qr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bl=class extends zn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(t,s.x,r.x,o.x,a.x),qr(t,s.y,r.y,o.y,a.y),qr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pa=class extends zn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zl=class extends zn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends zn{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kl=class extends zn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,s.x,r.x,o.x),Xr(t,s.y,r.y,o.y),Xr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(qu(a,c.x,l.x,h.x,u.x),qu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},Vl=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:Ol,CubicBezierCurve:Ca,CubicBezierCurve3:Bl,EllipseCurve:to,LineCurve:Pa,LineCurve3:zl,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:kl,SplineCurve:La}),Gl=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Vl[s.type]().fromJSON(s))}return this}},eo=class extends Gl{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Pa(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ia(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ca(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s),new Dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new La(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new to(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Wl=class i extends ye{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=cn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,f=new Dt,m=new R,g=new R,_=new R,d=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:d=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-d,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:d=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-d,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*s,M=Math.sin(x),L=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*L,o.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);let C=c[3*T+0]*M,z=c[3*T+1],tt=c[3*T+0]*L;l.push(C,z,tt)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,L=M,T=M+t.length,C=M+t.length+1,z=M+1;r.push(L,T,z),r.push(C,z,T)}this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},no=class i extends Wl{constructor(t=1,e=1,n=4,s=8){let r=new eo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},io=class i extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new R,h=new Dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let m=n+u/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ze=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],m=[],g=0,_=[],d=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(m,2));function y(){let M=new R,L=new R,T=0,C=(e-t)/n;for(let z=0;z<=r;z++){let tt=[],v=z/r,A=v*(e-t)+t;for(let nt=0;nt<=s;nt++){let st=nt/s,ct=st*c+a,Mt=Math.sin(ct),lt=Math.cos(ct);L.x=A*Mt,L.y=-v*n+d,L.z=A*lt,u.push(L.x,L.y,L.z),M.set(Mt,C,lt).normalize(),f.push(M.x,M.y,M.z),m.push(st,1-v),tt.push(g++)}_.push(tt)}for(let z=0;z<s;z++)for(let tt=0;tt<r;tt++){let v=_[tt][z],A=_[tt+1][z],nt=_[tt+1][z+1],st=_[tt][z+1];t>0&&(h.push(v,A,st),T+=3),e>0&&(h.push(A,nt,st),T+=3)}l.addGroup(p,T,0),p+=T}function x(M){let L=g,T=new Dt,C=new R,z=0,tt=M===!0?t:e,v=M===!0?1:-1;for(let nt=1;nt<=s;nt++)u.push(0,d*v,0),f.push(0,v,0),m.push(.5,.5),g++;let A=g;for(let nt=0;nt<=s;nt++){let ct=nt/s*c+a,Mt=Math.cos(ct),lt=Math.sin(ct);C.x=tt*lt,C.y=d*v,C.z=tt*Mt,u.push(C.x,C.y,C.z),f.push(0,v,0),T.x=Mt*.5+.5,T.y=lt*.5*v+.5,m.push(T.x,T.y),g++}for(let nt=0;nt<s;nt++){let st=L+nt,ct=A+nt;M===!0?h.push(ct,ct+1,st):h.push(ct+1,ct,st),z+=3}l.addGroup(p,z,M===!0?1:2),p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pn=class i extends ze{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xl=class i extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new R,M=new R,L=new R;for(let T=0;T<e.length;T+=3)m(e[T+0],x),m(e[T+1],M),m(e[T+2],L),c(x,M,L,y)}function c(y,x,M,L){let T=L+1,C=[];for(let z=0;z<=T;z++){C[z]=[];let tt=y.clone().lerp(M,z/T),v=x.clone().lerp(M,z/T),A=T-z;for(let nt=0;nt<=A;nt++)nt===0&&z===T?C[z][nt]=tt:C[z][nt]=tt.clone().lerp(v,nt/A)}for(let z=0;z<T;z++)for(let tt=0;tt<2*(T-z)-1;tt++){let v=Math.floor(tt/2);tt%2===0?(f(C[z][v+1]),f(C[z+1][v]),f(C[z][v])):(f(C[z][v+1]),f(C[z+1][v+1]),f(C[z+1][v]))}}function l(y){let x=new R;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new R;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=d(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(M,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],L=o[y+4],T=Math.max(x,M,L),C=Math.min(x,M,L);T>.9&&C<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new R,x=new R,M=new R,L=new R,T=new Dt,C=new Dt,z=new Dt;for(let tt=0,v=0;tt<r.length;tt+=9,v+=6){y.set(r[tt+0],r[tt+1],r[tt+2]),x.set(r[tt+3],r[tt+4],r[tt+5]),M.set(r[tt+6],r[tt+7],r[tt+8]),T.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),z.set(o[v+4],o[v+5]),L.copy(y).add(x).add(M).divideScalar(3);let A=d(L);_(T,v+0,y,A),_(C,v+2,x,A),_(z,v+4,M,A)}}function _(y,x,M,L){L<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=L/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var so=class extends eo{constructor(t){super(t),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new eo().fromJSON(s))}return this}},x1={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=vf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,m;if(n&&(r=S1(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return ro(r,o,e,a,c,m,0),o}};function vf(i,t,e,n,s){let r,o;if(s===N1(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Yu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Yu(r,i[r],i[r+1],o);return o&&Ba(o,o.next)&&(ao(o),o=o.next),o}function vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ba(e,e.next)||Be(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ro(i,t,e,n,s,r,o){if(!i)return;!o&&r&&C1(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?v1(i,n,s,r):M1(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ao(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=b1(vs(i),t,e),ro(i,t,e,n,s,r,2)):o===2&&E1(i,t,e,n,s,r):ro(vs(i),t,e,n,s,r,1);break}}}function M1(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&tr(s,a,r,c,o,l,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function v1(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Be(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,d=h>u?h>f?h:f:u>f?u:f,p=ql(m,g,t,e,n),y=ql(_,d,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&tr(a,h,c,u,l,f,x.x,x.y)&&Be(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=m&&M.x<=_&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&tr(a,h,c,u,l,f,M.x,M.y)&&Be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&tr(a,h,c,u,l,f,x.x,x.y)&&Be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&tr(a,h,c,u,l,f,M.x,M.y)&&Be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function b1(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ba(s,r)&&bf(s,n,n.next,r)&&oo(s,r)&&oo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ao(n),ao(n.next),n=i=r),n=n.next}while(n!==i);return vs(n)}function E1(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&L1(o,a)){let c=Ef(o,a);o=vs(o,o.next),c=vs(c,c.next),ro(o,t,e,n,s,r,0),ro(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function S1(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=vf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(I1(l));for(s.sort(w1),r=0;r<s.length;r++)e=T1(s[r],e);return e}function w1(i,t){return i.x-t.x}function T1(i,t){let e=A1(i,t);if(!e)return t;let n=Ef(e,i);return vs(n,n.next),vs(e,e.next)}function A1(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&tr(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),oo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&R1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function R1(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function C1(i,t,e,n){let s=i;do s.z===0&&(s.z=ql(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,P1(s)}function P1(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ql(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function I1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function tr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function L1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!U1(i,t)&&(oo(i,t)&&oo(t,i)&&D1(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||Ba(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ba(i,t){return i.x===t.x&&i.y===t.y}function bf(i,t,e,n){let s=jo(Be(i,t,e)),r=jo(Be(i,t,n)),o=jo(Be(e,n,i)),a=jo(Be(e,n,t));return!!(s!==r&&o!==a||s===0&&Qo(i,e,t)||r===0&&Qo(i,n,t)||o===0&&Qo(e,i,n)||a===0&&Qo(e,t,n))}function Qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jo(i){return i>0?1:i<0?-1:0}function U1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function oo(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function D1(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ef(i,t){let e=new Yl(i.i,i.x,i.y),n=new Yl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Yu(i,t,e,n){let s=new Yl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function N1(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Yr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zu(t),$u(n,t);let o=t.length;e.forEach(Zu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,$u(n,e[c]);let a=x1.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Zu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $u(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ua=class i extends ye{constructor(t=new so([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:H1,x,M=!1,L,T,C,z;p&&(x=p.getSpacedPoints(h),M=!0,f=!1,L=p.computeFrenetFrames(h,!1),T=new R,C=new R,z=new R),f||(d=0,m=0,g=0,_=0);let tt=a.extractPoints(l),v=tt.shape,A=tt.holes;if(!Yr.isClockWise(v)){v=v.reverse();for(let O=0,E=A.length;O<E;O++){let Q=A[O];Yr.isClockWise(Q)&&(A[O]=Q.reverse())}}let st=Yr.triangulateShape(v,A),ct=v;for(let O=0,E=A.length;O<E;O++){let Q=A[O];v=v.concat(Q)}function Mt(O,E,Q){return E||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(E,Q)}let lt=v.length,vt=st.length;function N(O,E,Q){let X,G,Y,K=O.x-E.x,ot=O.y-E.y,P=Q.x-O.x,b=Q.y-O.y,H=K*K+ot*ot,$=K*b-ot*P;if(Math.abs($)>Number.EPSILON){let at=Math.sqrt(H),J=Math.sqrt(P*P+b*b),bt=E.x-ot/at,_t=E.y+K/at,ft=Q.x-b/J,Lt=Q.y+P/J,dt=((ft-bt)*b-(Lt-_t)*P)/(K*b-ot*P);X=bt+K*dt-O.x,G=_t+ot*dt-O.y;let At=X*X+G*G;if(At<=2)return new Dt(X,G);Y=Math.sqrt(At/2)}else{let at=!1;K>Number.EPSILON?P>Number.EPSILON&&(at=!0):K<-Number.EPSILON?P<-Number.EPSILON&&(at=!0):Math.sign(ot)===Math.sign(b)&&(at=!0),at?(X=-ot,G=K,Y=Math.sqrt(H)):(X=K,G=ot,Y=Math.sqrt(H/2))}return new Dt(X/Y,G/Y)}let j=[];for(let O=0,E=ct.length,Q=E-1,X=O+1;O<E;O++,Q++,X++)Q===E&&(Q=0),X===E&&(X=0),j[O]=N(ct[O],ct[Q],ct[X]);let k=[],Z,rt=j.concat();for(let O=0,E=A.length;O<E;O++){let Q=A[O];Z=[];for(let X=0,G=Q.length,Y=G-1,K=X+1;X<G;X++,Y++,K++)Y===G&&(Y=0),K===G&&(K=0),Z[X]=N(Q[X],Q[Y],Q[K]);k.push(Z),rt=rt.concat(Z)}for(let O=0;O<d;O++){let E=O/d,Q=m*Math.cos(E*Math.PI/2),X=g*Math.sin(E*Math.PI/2)+_;for(let G=0,Y=ct.length;G<Y;G++){let K=Mt(ct[G],j[G],X);B(K.x,K.y,-Q)}for(let G=0,Y=A.length;G<Y;G++){let K=A[G];Z=k[G];for(let ot=0,P=K.length;ot<P;ot++){let b=Mt(K[ot],Z[ot],X);B(b.x,b.y,-Q)}}}let W=g+_;for(let O=0;O<lt;O++){let E=f?Mt(v[O],rt[O],W):v[O];M?(C.copy(L.normals[0]).multiplyScalar(E.x),T.copy(L.binormals[0]).multiplyScalar(E.y),z.copy(x[0]).add(C).add(T),B(z.x,z.y,z.z)):B(E.x,E.y,0)}for(let O=1;O<=h;O++)for(let E=0;E<lt;E++){let Q=f?Mt(v[E],rt[E],W):v[E];M?(C.copy(L.normals[O]).multiplyScalar(Q.x),T.copy(L.binormals[O]).multiplyScalar(Q.y),z.copy(x[O]).add(C).add(T),B(z.x,z.y,z.z)):B(Q.x,Q.y,u/h*O)}for(let O=d-1;O>=0;O--){let E=O/d,Q=m*Math.cos(E*Math.PI/2),X=g*Math.sin(E*Math.PI/2)+_;for(let G=0,Y=ct.length;G<Y;G++){let K=Mt(ct[G],j[G],X);B(K.x,K.y,u+Q)}for(let G=0,Y=A.length;G<Y;G++){let K=A[G];Z=k[G];for(let ot=0,P=K.length;ot<P;ot++){let b=Mt(K[ot],Z[ot],X);M?B(b.x,b.y+x[h-1].y,x[h-1].x+Q):B(b.x,b.y,u+Q)}}}w(),S();function w(){let O=s.length/3;if(f){let E=0,Q=lt*E;for(let X=0;X<vt;X++){let G=st[X];F(G[2]+Q,G[1]+Q,G[0]+Q)}E=h+d*2,Q=lt*E;for(let X=0;X<vt;X++){let G=st[X];F(G[0]+Q,G[1]+Q,G[2]+Q)}}else{for(let E=0;E<vt;E++){let Q=st[E];F(Q[2],Q[1],Q[0])}for(let E=0;E<vt;E++){let Q=st[E];F(Q[0]+lt*h,Q[1]+lt*h,Q[2]+lt*h)}}n.addGroup(O,s.length/3-O,0)}function S(){let O=s.length/3,E=0;U(ct,E),E+=ct.length;for(let Q=0,X=A.length;Q<X;Q++){let G=A[Q];U(G,E),E+=G.length}n.addGroup(O,s.length/3-O,1)}function U(O,E){let Q=O.length;for(;--Q>=0;){let X=Q,G=Q-1;G<0&&(G=O.length-1);for(let Y=0,K=h+d*2;Y<K;Y++){let ot=lt*Y,P=lt*(Y+1),b=E+X+ot,H=E+G+ot,$=E+G+P,at=E+X+P;D(b,H,$,at)}}}function B(O,E,Q){c.push(O),c.push(E),c.push(Q)}function F(O,E,Q){V(O),V(E),V(Q);let X=s.length/3,G=y.generateTopUV(n,s,X-3,X-2,X-1);q(G[0]),q(G[1]),q(G[2])}function D(O,E,Q,X){V(O),V(E),V(X),V(E),V(Q),V(X);let G=s.length/3,Y=y.generateSideWallUV(n,s,G-6,G-3,G-2,G-1);q(Y[0]),q(Y[1]),q(Y[3]),q(Y[1]),q(Y[2]),q(Y[3])}function V(O){s.push(c[O*3+0]),s.push(c[O*3+1]),s.push(c[O*3+2])}function q(O){r.push(O.x),r.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return F1(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vl[s.type]().fromJSON(s)),new i(n,t.options)}},H1={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Dt(r,o),new Dt(a,c),new Dt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],m=t[s*3+1],g=t[s*3+2],_=t[r*3],d=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Dt(o,1-c),new Dt(l,1-u),new Dt(f,1-g),new Dt(_,1-p)]:[new Dt(a,1-c),new Dt(h,1-u),new Dt(m,1-g),new Dt(d,1-p)]}};function F1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xe=class i extends Xl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Je=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,f=new R,m=[],g=[],_=[],d=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){let T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),d.push(T+M,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],M=h[p][y],L=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&m.push(x,M,T),(p!==n-1||c<Math.PI)&&m.push(M,L,T)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var jn=class i extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let _=g/s*r,d=m/n*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(_),u.y=(t+e*Math.cos(d))*Math.sin(_),u.z=e*Math.sin(d),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let _=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,p=(s+1)*(m-1)+g,y=(s+1)*m+g;o.push(_,d,y),o.push(d,p,y)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ee=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var dr=class extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ta(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function O1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var pr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zl=class extends pr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yh:r=t,a=2*e-n;break;case Zh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yh:o=t,c=2*n-e;break;case Zh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),_=g*g,d=_*g,p=-f*d+2*f*_-f*g,y=(1+f)*d+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-m)*d+(1.5+m)*_+.5*g,M=m*d-m*_;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+y*o[l+L]+x*o[c+L]+M*o[u+L];return r}},$l=class extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Kl=class extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ti=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ta(e,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ta(t.times,Array),values:ta(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case aa:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&O1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=gl;var bs=class extends ti{constructor(t,e,n){super(t,e,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=aa;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends ti{};Jl.prototype.ValueTypeName="color";var Ql=class extends ti{};Ql.prototype.ValueTypeName="number";var jl=class extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Da=class extends ti{InterpolantFactoryMethodLinear(t){return new jl(this.times,this.values,this.getValueSize(),t)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends ti{constructor(t,e,n){super(t,e,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=aa;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends ti{};th.prototype.ValueTypeName="vector";var eh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},B1=new eh,nh=class{constructor(t){this.manager=t!==void 0?t:B1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nh.DEFAULT_MATERIAL_NAME="__DEFAULT";var co=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},mr=class extends co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ic=new se,Ku=new R,Ju=new R,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ku),Ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ju),e.updateMatrixWorld(),Ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Qu=new se,zr=new R,Lc=new R,ih=class extends Na{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(t.matrixWorld),n.position.copy(zr),Lc.copy(n.position),Lc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Lc),n.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu)}},ei=class extends co{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},sh=class extends Na{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ui=class extends co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Mh="\\[\\]\\.:\\/",z1=new RegExp("["+Mh+"]","g"),vh="[^"+Mh+"]",k1="[^"+Mh.replace("\\.","")+"]",V1=/((?:WC+[\/:])*)/.source.replace("WC",vh),G1=/(WCOD+)?/.source.replace("WCOD",k1),W1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),X1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),q1=new RegExp("^"+V1+G1+W1+X1+"$"),Y1=["material","materials","bones","map"],rh=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(z1,"")}static parseTrackName(t){let e=q1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Y1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=rh;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Sf=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var wf=i=>Sf.find(t=>t.id===i)??Sf[0];function Af(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var za=(i,t,e)=>i+(t-i)*e,Rf=i=>Math.min(1,Math.max(0,i)),uo=(i,t)=>Math.max(0,i)**t;function Sh(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var Cf=(i,t,e)=>new hn(i,t,e,"ZYX"),yr=class{constructor(t,e={}){Fe(this,"n",t);Fe(this,"geo",new ye);Fe(this,"per");Fe(this,"radial");Fe(this,"closed");Fe(this,"sharp");Fe(this,"caps");Fe(this,"samples");Fe(this,"pos");Fe(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let s=this.radial+1,r=this.samples*s+(this.caps?2:0);this.pos=new Float32Array(r*3),this.nor=new Float32Array(r*3);let o=new Float32Array(r*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*s+l)*2]=c/(this.samples-1),o[(c*s+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*s+l,u=h+s;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*s,l=c+1,h=(this.samples-1)*s;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new Pe(this.pos,3)),this.geo.setAttribute("normal",new Pe(this.nor,3)),this.geo.setAttribute("uv",new Pe(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:s,radial:r,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=y=>t[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))],u=y=>typeof e=="number"?e:e[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))];for(let y=0;y<a;y++){let x=Math.floor(y/s),M=y%s/s;!o&&x>=n-1&&(x=n-2,M=1);let L=h(x),T=h(x+1);for(let C=0;C<3;C++)if(this.sharp)c[y*3+C]=L[C]+(T[C]-L[C])*M;else{let z=o||x>0?h(x-1)[C]:2*L[C]-T[C],tt=o||x+2<n?h(x+2)[C]:2*T[C]-L[C],v=M*M,A=v*M;c[y*3+C]=.5*(2*L[C]+(-z+T[C])*M+(2*z-5*L[C]+4*T[C]-tt)*v+(-z+3*L[C]-3*T[C]+tt)*A)}l[y]=Math.max(1e-4,Math.abs(u(x)+(u(x+1)-u(x))*M))}let f=new R,m=new R,g=new R,_=new R,d=y=>{let x=o?(y-1+a-1)%(a-1):Math.max(0,y-1),M=o?(y+1)%(a-1):Math.min(a-1,y+1);return f.set(c[M*3]-c[x*3],c[M*3+1]-c[x*3+1],c[M*3+2]-c[x*3+2]),f.lengthSq()<1e-12&&f.set(0,0,1),f.normalize()};d(0),_.set(Math.abs(f.x)<.9?1:0,Math.abs(f.x)<.9?0:1,0),m.crossVectors(f,_).normalize();let p=r+1;for(let y=0;y<a;y++){d(y),m.addScaledVector(f,-m.dot(f)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(f,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(f,m);for(let x=0;x<=r;x++){let M=x/r*Math.PI*2,L=Math.cos(M),T=Math.sin(M),C=L*m.x+T*g.x,z=L*m.y+T*g.y,tt=L*m.z+T*g.z,v=(y*p+x)*3;this.nor[v]=C,this.nor[v+1]=z,this.nor[v+2]=tt,this.pos[v]=c[y*3]+l[y]*C,this.pos[v+1]=c[y*3+1]+l[y]*z,this.pos[v+2]=c[y*3+2]+l[y]*tt}if(this.caps&&(y===0||y===a-1)){let x=(a*p+(y?1:0))*3,M=y?1:-1;this.pos[x]=c[y*3],this.pos[x+1]=c[y*3+1],this.pos[x+2]=c[y*3+2],this.nor[x]=f.x*M,this.nor[x+1]=f.y*M,this.nor[x+2]=f.z*M}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function qe(i,t,e={}){return new yr(i.length,e).set(i,t).geo}function ni(i,t,e,n=12,s=.35,r={}){let o=new se().makeRotationFromEuler(Cf(...t)),a=[],c=[],l=new R;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+s*Math.sin(3*u)))}return qe(a,c,{closed:!0,per:6,...r})}function Di(i,t,e,n,s,r=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<s;u++){let f=u/(s-1),m=r+2*Math.PI*n*f,g=t+(e-t)*f,_=l(f)+(a&&o?a.uniform(-o,o):0),[d,p]=c?c(g):[0,0];h.push([d+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var Va=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function Vn(i,t,e,n,s){let r=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);r.push(...l,...h,0,0,i),r.push(...h,...l,0,0,-t)}let a=new ye;return a.setAttribute("position",new re(r,3)),a.setAttribute("uv",new re(new Array(r.length/3*2).fill(.5),2)),s&&a.applyMatrix4(new se().makeRotationFromEuler(Cf(...s))),a.computeVertexNormals(),a}function wh(i,t,e){let n=[],s=[],r=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),s.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;r.push(l,l+1,h+1,l,h+1,h)}let o=new ye;return o.setAttribute("position",new re(n,3)),o.setAttribute("uv",new re(s,2)),o.setIndex(r),o.computeVertexNormals(),o}var ka=class{constructor(){Fe(this,"parts",new Map)}add(t,e,n,s,r){let o=t.index?t:Z1(t),a=new se().compose(n?Array.isArray(n)?new R(...n):n:new R,new tn().setFromEuler(s??new hn),r===void 0?new R(1,1,1):typeof r=="number"?new R(r,r,r):new R(...r)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,s]of this.parts){let r=new Tt(Th(s),n);t.add(r),e.push(r);for(let o of s)o.dispose()}return this.parts.clear(),e}};function Z1(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,s)=>s)),t}function Th(i){let t=0,e=0;for(let f of i)t+=f.attributes.position.count,e+=f.index.count;let n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),a=i.some(f=>f.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let f of i){let m=f.attributes.position.count;n.set(f.attributes.position.array,l*3),f.attributes.normal||f.computeVertexNormals(),s.set(f.attributes.normal.array,l*3),f.attributes.uv&&r.set(f.attributes.uv.array,l*2),a&&f.attributes.color&&a.set(f.attributes.color.array,l*3);let g=f.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new ye;return u.setAttribute("position",new Pe(n,3)),u.setAttribute("normal",new Pe(s,3)),u.setAttribute("uv",new Pe(r,2)),a&&u.setAttribute("color",new Pe(a,3)),u.setIndex(new Pe(c,1)),u.computeBoundingSphere(),u}var Tf=new Map;function bh(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Eh(i,t,e,n=4,s=1){let r=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let f=Math.floor(l),m=Math.floor(h),g=l-f,_=h-m,d=g*g*(3-2*g),p=_*_*(3-2*_),y=(M,L)=>bh((M%c+c)%c,(L%c+c)%c,s+u),x=za(za(y(f,m),y(f+1,m),d),za(y(f,m+1),y(f+1,m+1),d),p);r+=x*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return r/a}function Pf(i,t,e,n=[1,1]){let s=Tf.get(i);if(!s){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),s=new Bn(o),s.wrapS=s.wrapT=xs,Tf.set(i,s)}let r=s.clone();return r.repeat.set(...n),r.needsUpdate=!0,r}var If=(i,t,e,n,s)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=s,i.data[t*4+3]=255};function Ss(i=1,t=[1,1],e=.35,n=1.25){return Pf(`noise${i}`,128,s=>{for(let r=0;r<128;r++)for(let o=0;o<128;o++){let a=Eh(o/(16*i),r/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,za(e,n,a)/1.25));If(s,r*128+o,c,c,c)}},t)}function Lf(i=6,t=.11,e=[1,1]){return Pf(`vein${i}:${t}`,128,n=>{let s=[];for(let r=0;r<i;r++)for(let o=0;o<i;o++)s.push([(o+bh(o,r,9))/i,(r+bh(o,r,11))/i]);for(let r=0;r<128;r++)for(let o=0;o<128;o++){let a=o/128+(Eh(o/16,r/16,8,2,5)-.5)*.08,c=r/128+(Eh(o/16+7,r/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of s)for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){let y=a-g-p,x=c-_-d,M=Math.sqrt(y*y+x*x);M<l?(h=l,l=M):M<h&&(h=M)}let u=(h-l)*i*.5,f=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*f*f);If(n,r*128+o,m,m,m)}},e)}var ts=1.13,fo=.66,oe=(i,t,e)=>new zt(i,t,e);function $1(i,t){let e=(r,o=!0)=>(o?i.push(r):t.push(r),r),n=(r,o=1.7)=>r.clone().multiplyScalar(o),s=r=>Math.min(2.4,.55+r*.13);return{bark:(r,o)=>e(new Ee({color:n(o,1.5),map:Ss(4,[3,2]),roughness:.9,emissive:r.clone().multiplyScalar(.4)})),plain:(r,o=.5)=>e(new Ee({color:n(r),roughness:o})),leaf:(r,o)=>e(new Ee({color:n(o,1.6),map:Ss(1,[2,2],.45),roughness:.45,side:Re,emissive:r.clone().multiplyScalar(.6)})),metal:(r,o=.28)=>e(new Ee({color:n(r,1.25),metalness:.55,roughness:o+.12})),veins:(r,o,a,c=6,l=.11,h=.1)=>e(new Ee({color:n(r,2.4),map:Ss(1,[3,2]),emissive:o,emissiveMap:Lf(c,l,[4,2]),emissiveIntensity:s(a),roughness:.6,metalness:h})),lava:()=>e(new Ee({color:oe(.3,.05,0),emissive:oe(1,.22,.015),emissiveMap:Ss(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(r,o,a,c=An)=>e(new Ee({color:o,emissive:r,emissiveMap:Ss(1,[2,2],.6),emissiveIntensity:s(a),roughness:.4,side:c})),emissive:(r,o)=>e(new Ee({color:r.clone().multiplyScalar(.15),emissive:r,emissiveIntensity:s(o),roughness:.4})),crystal:(r,o)=>e(new Ee({color:n(r,1.3),emissive:r,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(r,o=.3)=>e(new Ee({color:r,emissive:r.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Ee({color:oe(.55,.82,1),map:Ss(2,[4,1],.7),emissive:oe(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var Ts=i=>Math.max(8,Math.round(i*.5)),po=i=>Math.max(1,Math.round(i*.45)),Ga=i=>i-Math.floor(i);function K1(i,t,e,n,s,r=.09,o=.1){let a=i+n,c=(a%t+t)%t;return s*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-r*c)*(Math.cos(o*c)+r/o*Math.sin(o*c)))}function J1(i,t,e,n=8,s=10,r=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-s)/r))))}function Uf(i,t,e,n){let s=[];for(let r=0;r<t;r++){let o=new R(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),s.push([o.x,o.y,o.z])}return s}function Ah(i,t,e,n,s,r){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*s));return o.push(e),qe(o,o.map((a,c)=>r*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function Q1(i,t,e,n,s,r,o,a=.45){return wh(4,10,(c,l)=>{let h=2*c-1,u=.07+s*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-r*l**3,f=t+e*l,m=i+o*l,g=n*Math.max(.03,uo(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,d=h*g,p=Math.cos(m),y=Math.sin(m);return[_*p-d*y,_*y+d*p,f]})}function j1(i=.14,t=.055){return wh(3,6,(e,n)=>{let s=2*e-1,r=t*(.04+uo(Math.sin(Math.PI*n**.75),.9));return[s*r,n*i,-Math.abs(s)*r*.45-.18*i*n*n]})}var ws=new $e;function xr(i,t,e,n,s){ws.position.set(e[0],e[1],e[2]),typeof n=="number"?ws.scale.setScalar(Math.max(1e-5,n)):ws.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),s?ws.rotation.set(s[0],s[1],s[2],"ZYX"):ws.rotation.set(0,0,0),ws.updateMatrix(),i.setMatrixAt(t,ws.matrix)}var Ch=new Xe(1,1),Rh=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((s,r)=>{for(let o of n)o.offset.x-=r*e})};function ty(i){let{rng:t,m:e}=i,n=e.bark(oe(.045,.028,.014),oe(.3,.19,.1)),s=e.plain(oe(.1,.3,.05),.55),r=e.leaf(oe(.015,.14,.02),oe(.1,.34,.045)),o=.022,a=_=>Va(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(qe(c.map(_=>[...a(_),_]),l,{radial:8,per:5}),n);for(let _=0;_<5;_++){let d=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(d),y=Math.sin(d);i.stat(qe([[.03*p,.03*y,.3],[.06*p,.06*y,.17],[.1*p,.1*y,.07],[.14*p,.14*y,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,d,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:d-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},f=[.02,.1,.21,.25,.2,.1],m=[2.46,2.62,2.8,3.02,3.24,3.38];for(let _=0;_<6;_++){let d=2*Math.PI*_/6+t.uniform(-.15,.15),p=f.map((y,x)=>{let M=d+.22*x;return[y*Math.cos(M),y*Math.sin(M),m[x]+t.uniform(-.02,.02)]});i.stat(qe(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let y of[2,4])u(p[y],Math.atan2(p[y][1],p[y][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,d,p,y,x])=>{let M=Ts(56),L=Di(T=>Sh(c,l,_+(d-_)*T)+.018,_,d,p,M,y,.004,t,a);i.stat(qe(L,L.map((T,C)=>x*(1-.55*C/(M-1))),{radial:5,per:3}),s);for(let T=2;T<M-2;T+=Math.max(1,Math.floor((M-4)/po(22)))){let C=L[T],z=a(C[2]);u(C,Math.atan2(C[1]-z[1],C[0]-z[0]),t.uniform(.7,1.3))}});let g=i.inst(j1(),r,h.length);return i.anim(_=>{h.forEach((d,p)=>xr(g,p,d.p,d.s,[d.rx+.16*Math.sin(_*.2094+d.ph),d.ry,d.rz+.1*Math.sin(_*.1309+d.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:oe(.45,1,.35),hot:oe(.7,1,.3),mid:oe(.15,.8,.05)}}function ey(i){let{rng:t,m:e}=i,n=e.veins(oe(.085,.065,.055),oe(1,.3,.03),2,7,.06,0);n.roughness=.9;let s=e.lava(),r=e.core(oe(1,.36,.04),oe(.9,.12,.01),2,Re);Rh(i,s,.25),Rh(i,r,-.18);let o=.014,a=g=>Va(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(qe(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,d=2.35)=>Sh(c,l,_+(d-_)*g);for(let g=0;g<2;g++){let _=Ts(60),d=Di(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(qe(d,d.map((p,y)=>.012+.003*Math.sin(y*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=Ts(60),d=Di(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(qe(d,d.map((p,y)=>.0085+.002*Math.sin(y*.7)),{radial:5,per:3}),s)}{let g=Di(_=>h(_,.5,2.2)-.001,.5,2.2,-3,Ts(50),.8,0,void 0,a);i.stat(qe(g,.0055,{radial:4,per:3}),s)}i.stat(ni(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(ni(.082,[0,0,0],.008,10,0),s,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(Q1(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),r);i.stat(ni(.165,[0,0,0],.007,14,0),s,[0,0,2.86]);let u=6,f=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),d=t.uniform(.16,.2);f.push({p:[d*Math.cos(_),d*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(Ch,e.emissive(oe(1,.45,.05),10),u);return i.anim(g=>{f.forEach((_,d)=>{let p=Ga(g/60+_.ph),y=_.s*Math.min(1,p*6)*(1-.6*p);xr(m,d,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*y,.85*y,7*y])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:oe(1,.45,.1),hot:oe(1,.7,.15),mid:oe(1,.25,.02)}}function ny(i){let{rng:t,m:e}=i,n=e.metal(oe(.1,.12,.16),.3),s=e.metal(oe(.78,.84,.9),.18),r=e.water(),o=e.crystal(oe(.2,.7,1),2.5),a=e.crystal(oe(.4,.8,1),1.5);Rh(i,r,.3);let c=.006,l=_=>Va(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(qe(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(ni(.066,[0,0,0],.012,10,0),s,[0,0,2.56]);for(let _=0;_<3;_++){let d=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(qe([[.04*d,.04*p,2.55],[.085*d,.085*p,2.68],[.12*d,.12*p,2.82],[.13*d,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),s)}for(let _=0;_<2;_++)i.stat(qe(Di(.05,.4,2.45,7,Ts(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),s);{let _=Ts(64),d=Di(M=>.058+.012*Math.sin(M*20),.45,2.5,3.2,_,1,0,void 0,l),p=d.map((M,L)=>.012+.014*(.5+.5*Math.sin(L*.45))),y=new yr(_,{radial:6,per:3});y.set(d,p),i.mesh(y.geo,r);let x=p.slice();i.anim(M=>{for(let L=0;L<_;L++)x[L]=p[L]*(1+.6*Math.sin(M*.2618-L*.7));y.set(d,x)})}[.7,1,1.35,1.7,2.05].forEach((_,d)=>{let p=d*2.1;i.stat(Vn(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,d,p,y,x,M,L,T,C],z)=>{let v=20+z*50,A=z===0?1:-1,nt=y<p?-1:1,st=Math.PI/180,ct=Array.from({length:40},(rt,W)=>{let w=W/39;return{a:(p+(y-p)*w)*st,b:p*st+nt*T*st*w,R:_+(d-_)*w,y:M+.04*Math.sin(w*6),r:.004+x*uo(Math.sin(Math.PI*w),.8)}}),Mt=(rt,W,w,S)=>[rt*t.uniform(.35,1.4),W*t.uniform(.8,1.2),-S*w+t.uniform(-1.4,1.4),t.uniform(1,5)],lt=ct.map((rt,W)=>[Mt(.07,.35,.9,W),Mt(.035,.7,1.7,W),Mt(.03,.3,1,W),Mt(.015,.6,1.8,W),Mt(.32,.45,.9,W),Mt(.2,.8,1.6,W),Mt(.1,1.3,2.3,W)]),vt=new yr(40,{radial:6,per:2}),N=ct.map(()=>[0,0,0]),j=ct.map(()=>0),k=i.mesh(vt.geo,r,[0,0,3]);k.renderOrder=2;let Z=rt=>{let W=K1(rt,120,1,v,A),w=J1(rt,120,v,12),S=Math.floor((rt+v)/120),U=B=>B[0]*Math.sin(rt*B[1]+B[2]+S*B[3]);ct.forEach((B,F)=>{let D=lt[F],V=B.a*(1-w)+B.b*w+W,q=B.R*(1-w)+L*(1+w*(U(D[0])+U(D[1])))*w;N[F][0]=q*Math.cos(V),N[F][2]=q*Math.sin(V),N[F][1]=B.y*(1-w)+(M+U(D[2])+U(D[3]))*w,j[F]=B.r*(1+.3*(1-w)*Math.sin(rt*.2618-F*.8))*(1-w)+C*w*Math.max(.3,1+w*(U(D[4])+U(D[5])+U(D[6])))}),vt.set(N,j)};Z(0),i.anim(Z)});let f=[];for(let _=0;_<10;_++){let d=t.uniform(0,2*Math.PI),p=[Math.cos(d),0,Math.sin(d)],y=t.uniform(.2,.34),x=t.uniform(.12,.3);f.push({start:[p[0]*y,0,3+p[2]*y],vel:[p[0]*x+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*x+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of f)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:po(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(Ch,a,f.length+m.length);m.forEach((_,d)=>xr(g,f.length+d,_.p,_.s)),i.anim(_=>{f.forEach((d,p)=>{let y=Ga(_/d.per+d.ph),x=y*.9;xr(g,p,[d.start[0]+d.vel[0]*x,d.start[1]+d.vel[1]*x,d.start[2]+d.vel[2]*x-.9*x*x],d.s*Math.min(1,y*10)*Math.min(1,(1-y)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(Vn(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let d=2*Math.PI*_/3;i.stat(Vn(.02,.12,.016,4,[Math.sin(d)*.4,-Math.cos(d)*.4,0]),o,[.045*Math.cos(d),.045*Math.sin(d),.36])}return{z:3,r:.145,glass:oe(.3,.75,1),hot:oe(.5,.95,1),mid:oe(.05,.4,1)}}function iy(i){let{rng:t,m:e}=i,n=e.veins(oe(.03,.02,.06),oe(.85,.6,1),3,6,.09,.5),s=e.metal(oe(.62,.58,.72),.2),r=e.crystal(oe(.35,.15,1),3),o=e.emissive(oe(.65,.4,1),4),a=e.emissive(oe(.6,.3,1),3);i.stat(qe([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(ni(.04,[0,0,0],.007,10,0),s,[0,0,_]);i.stat(qe([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(qe(Di(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),s);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,d)=>i.stat(ni(d===0||d===4?.064:.058,[0,0,0],.011,10,0),s,[0,0,_]));let l=ni(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let d=e.emissive(oe(.65,.4,1),4),p=d.emissiveIntensity;d.transparent=!0;let y=i.mesh(l,d);i.anim(x=>{let M=Ga(x/60+_/4);y.position.z=.95+1.45*M,y.scale.set(1+.3*M,1+.3*M,1);let L=Math.min(1,M*8)*Math.min(1,(1-M)*3);d.emissiveIntensity=p*L,d.opacity=L})}let h=(_,d,p)=>Rf((Math.sin(_*.9+d)+Math.sin(_*.37+d*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let d=t.uniform(0,6.28),p=[.07*Math.cos(d),.07*Math.sin(d),c[_]],y=[.07*Math.cos(d+.9),.07*Math.sin(d+.9),c[_+1]],x=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2],M=i.mesh(Ah(t,[p[0]-x[0],p[1]-x[1],p[2]-x[2]],[y[0]-x[0],y[1]-x[1],y[2]-x[2]],6,.012,.005),o,x),L=t.uniform(0,6.28);i.anim(T=>{M.scale.setScalar(Math.max(1e-4,h(T,L,.3)))})}for(let _=0;_<3;_++){let d=2*Math.PI*_/3,p=.066;i.stat(Ah(t,[p*Math.cos(d),p*Math.sin(d),.95],[p*Math.cos(d+.6),p*Math.sin(d+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let d=new R(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),y=i.mesh(Ah(t,[d.x*.16,d.y*.16,d.z*.16],[d.x*p,d.y*p,d.z*p],7,.03,.005),o,[0,0,3]),x=t.uniform(0,6.28);i.anim(M=>{y.rotation.set(Math.floor(M/5+x)*1.7,0,Math.floor(M/4+x)*2.4,"ZYX"),y.scale.setScalar(Math.max(1e-4,h(M,x,.5)))})}for(let _=0;_<3;_++){let d=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],y=[2.5,2.66,2.85,3.08,3.22];i.stat(qe(p.map((x,M)=>[x*Math.cos(d+.3*M),x*Math.sin(d+.3*M),y[M]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),s)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,d,p,y])=>{let x=i.mesh(ni(_,d.map(M=>M*Math.PI/180),p,10),s,[0,0,3]);i.anim(M=>{x.rotation.z=M*y})}),i.stat(Vn(.58,.06,.03,4),s,[0,0,3.14]);let u=[new R(0,.6,.8),new R(.7,-.3,.65),new R(-.45,.5,.75)],f=[1,-2,3],m=Array.from({length:6},(_,d)=>{let p=u[d%3].clone().normalize(),y=Math.abs(p.z)<.9?new R(0,0,1):new R(1,0,0),x=p.clone().cross(y).normalize(),M=p.clone().cross(x);return{e1:x,e2:M,R:t.uniform(.32,.5),th0:Math.floor(d/3)*Math.PI+t.uniform(-.3,.3),w:f[d%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(Vn(.11,.11,.035,4),r,m.length);return i.anim(_=>{m.forEach((d,p)=>{let y=d.th0+_*d.w,x=d.R*(1+.12*Math.sin(_*.05236+d.ph));xr(g,p,[x*(d.e1.x*Math.cos(y)+d.e2.x*Math.sin(y)),x*(d.e1.y*Math.cos(y)+d.e2.y*Math.sin(y)),3+x*(d.e1.z*Math.cos(y)+d.e2.z*Math.sin(y))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(Vn(.1,.3,.04,5),r,[0,0,.32]),{z:3,r:.15,glass:oe(.6,.3,1),hot:oe(.7,.5,1),mid:oe(.4,.1,1),style:"flicker"}}function sy(i){let{rng:t,m:e}=i,n=e.veins(oe(.02,.03,.05),oe(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let s=e.metal(oe(.8,.86,.95),.15),r=e.crystal(oe(.25,.65,1),4),o=e.emissive(oe(.7,.9,1),14),a=e.emissive(oe(.3,.7,1),9);i.stat(qe([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(Vn(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let y=i.mesh(ni(.058+.006*p,[0,0,0],.006,12,.6),s,[0,0,.655+.42*p]);i.anim(x=>{y.rotation.z=x*(p%2===0?1:-1)*.05236})}let c=p=>{let y=Math.max(0,(p-.7)/.3);return .05+.26*uo(Math.sin(y*Math.PI/2),1.5)};for(let p=0;p<2;p++){let y=Ts(110);i.stat(qe(Di(c,.4,3.2,6,y,p*Math.PI),Array.from({length:y},(x,M)=>.0085+.004*Math.sin(M*.55+p)),{radial:5,per:3}),s)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,y,x,M])=>{let L=i.mesh(ni(p,y.map(T=>T*Math.PI/180),x,10),s,[0,0,3]);i.anim(T=>{L.rotation.z=T*M})}),i.stat(Vn(.62,.05,.032,4),r,[0,0,3.17]);let l=Uf(t,po(110),.35,.85);for(let p=0;p<po(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,y)=>p.map(x=>({rel:x,s:y(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),f=h(Uf(t,Math.max(po(30),8),.4,.9),()=>t.uniform(.02,.045)),m=Th([Vn(1,1,.14,4),Vn(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(y,x)=>x)),p))),g=i.inst(Ch,o,u.length),_=i.inst(m,o,f.length),d=(p,y,x)=>{y.forEach((M,L)=>{let T=Ga(x/M.per+M.ph),C=(1-T)**1.6;xr(p,L,[M.rel[0]*C,M.rel[1]*C,3+M.rel[2]*C],M.s*Math.min(1,T*8)*(1-T)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{d(g,u,p),d(_,f,p)}),i.stat(Vn(.08,.31,.05,6),r,[0,0,.33]);for(let p=0;p<3;p++){let y=2*Math.PI*p/3+.4,x=Math.cos(y),M=Math.sin(y);i.stat(qe([[.035*x,.035*M,.52],[.07*x,.07*M,.44],[.11*x,.11*M,.34],[.1*x,.1*M,.24]],[.02,.016,.011,.003],{radial:6}),s)}return{z:3,r:.17,glass:oe(.05,.25,1),hot:oe(.2,.5,1),mid:oe(0,.05,.4)}}var Df={verdant:ty,ember:ey,tide:ny,storm:iy,void:sy},ry={verdant:7,ember:8,tide:9,storm:10,void:11};function Ni(i,t){let e=wf(i),n=Df[e.base??e.id]?e.base??e.id:"verdant",s=new ie,r=new ie;r.rotation.x=-Math.PI/2,r.scale.setScalar(fo),r.position.y=ts-3*fo,s.add(r);let o=[],a=[],c=[],l=new ka,h={B:r,batch:l,rng:Af(ry[n]),m:$1(o,a),stat:(T,C,z,tt,v)=>l.add(T,C,z,tt,v),mesh:(T,C,z)=>{let tt=new Tt(T,C);return z&&tt.position.set(...z),r.add(tt),tt},inst:(T,C,z)=>{let tt=new fr(T,C,z);return tt.frustumCulled=!1,r.add(tt),tt},anim:T=>{c.push(T)}},u=Df[n](h);l.build(r);let f=new zt(e.gem),m=e.tint?new zt(e.tint):null,g=new Ee({color:m?u.glass.clone().lerp(f,.6):u.glass,emissive:f,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),_=new Tt(new Je(u.r*fo,20,14),g);_.position.y=ts+(u.z-3)*fo,_.renderOrder=1,s.add(_);let d=h.m.core(m?u.hot.clone().lerp(f,.7):u.hot,m?u.mid.clone().lerp(f,.5):u.mid,6),p=new Tt(new Je(u.r*fo*.6,14,10),d);_.add(p);let y=d.emissiveIntensity;if(c.push(T=>{if(u.style==="flicker"){let C=Math.abs(Math.sin(T*.9)*Math.sin(T*.37+1.1));p.scale.setScalar(1+.1*C),d.emissiveIntensity=y*(.55+.45*C)*1.6}else p.scale.setScalar(1+.05*Math.sin(T*.1309))}),o.splice(o.indexOf(d),1),m)for(let T of[...o,...a])T.color.lerp(m,.55),T.emissive.getHex()!==0&&T.emissive.lerp(m,.7);let x=new Qn(new On({map:t,color:f.getHex(),blending:je,depthWrite:!1,transparent:!0,opacity:.5}));x.scale.setScalar(.45),x.position.y=_.position.y,s.add(x);let M=Math.random()*20,L=(T,C)=>{M+=T*(1+C*1.5);let z=M*24;for(let tt of c)tt(z,T)};return L(0,0),{group:s,gem:_,gemMat:g,glow:x,color:f,materials:o,update(T,C,z){L(C,z)}}}var rn=i=>new zt(i),Qe={robe:rn(5979790),robeDeep:rn(4270443),trim:rn(8677055),dress:rn(1906980),dressHi:rn(2893366),lining:rn(4865358),skin:rn(15259346),hair:rn(11773126),hairDark:rn(8351894),hat:rn(5519749),hatBand:rn(8020144),boot:rn(2367531),belt:rn(2761011),moon:rn(15129784),lips:rn(5911888),eye:rn(1709088)};function Gn(i,t,e,n,s=!1){let r=[],o=[],a=(u,f)=>e(s?u%i/i:u/i,f/t),c=(u,f)=>n(s?(u%i+i)%i/i:u/i,f/t),l=(u,f,m)=>{let g=c((u[0]+f[0]+m[0])/3,(u[1]+f[1]+m[1])/3);for(let[_,d]of[u,f,m])r.push(...a(_,d)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let f=0;f<i;f++)l([f,u],[f,u+1],[f+1,u+1]),l([f,u],[f+1,u+1],[f+1,u]);let h=new ye;return h.setAttribute("position",new re(r,3)),h.setAttribute("color",new re(o,3)),h.computeVertexNormals(),h}function Ph(i,t,e,n,s=[1,1,1]){let r=i.length,o=i.map((l,h)=>new R(...i[Math.min(r-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return Gn(e,r-1,(l,h)=>{let u=Math.round(h*(r-1)),f=l*Math.PI*2,m=t(h),[g,_]=c[u],d=i[u];return[d[0]+(Math.cos(f)*g.x+Math.sin(f)*_.x)*m*s[0],d[1]+(Math.cos(f)*g.y+Math.sin(f)*_.y)*m*s[1],d[2]+(Math.cos(f)*g.z+Math.sin(f)*_.z)*m*s[2]]},(l,h)=>n(h,l),!0)}var ii=i=>1-Math.abs((i%1+1)%1*2-1),es=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e)));function Nf(i,t,e){let n=[],s=(w,S={})=>{let U=new Ee({color:S.vc?16777215:w,vertexColors:!!S.vc,metalness:S.metal??.04,roughness:S.rough??.82,flatShading:!0,emissive:S.emissive??0,transparent:!0,side:S.double?Re:An});return n.push({mat:U,color:U.color.clone(),emissive:U.emissive.clone()}),U},r=s(16777215,{vc:!0,double:!0}),o=s(Qe.skin,{rough:.7}),a=s(Qe.eye,{rough:.5}),c=s(Qe.moon,{metal:.35,rough:.35,emissive:2761744}),l=s(Qe.lips,{rough:.6}),h=(w,S,U,B=[0,0,0])=>{let F=new Tt(w,S);return F.position.set(...B),U.add(F),F},u=i==="ally"?rn(3111524):Qe.robe,f=i==="ally"?rn(2184517):Qe.robeDeep,m=i==="ally"?rn(6076568):Qe.trim,g=new ie,_=new ie;g.add(_);for(let w of[-1,1]){let S=w*.075;h(Ph([[S,.98,0],[S*1.05,.62,.01],[S*1.1,.3,0],[S*1.1,.13,-.01]],B=>.068-.03*B,7,()=>Qe.boot),r,_);let U=Gn(6,2,(B,F)=>{let D=B*Math.PI*2,V=F,q=-.05+V*.2,O=.13-V*.11,E=.045*(1-.65*V*V);return[S+Math.cos(D)*E,O+Math.sin(D)*E*.55,q]},()=>Qe.boot,!0);h(U,r,_),h(new ze(.012,.006,.12,5),a,_,[S,.06,-.045])}let d=Gn(14,8,(w,S)=>{let U=S<.25?.02:.02+(S-.25)*.55,B=U+w*(Math.PI*2-2*U),F=1.1-S*.82-(w>.35&&w<.65?0:.04*S)+.03*ii(w*7)*S,D=.165+.15*S**1.2;return[Math.sin(B)*D,F,Math.cos(B)*D*.82]},(w,S)=>es(Qe.dress,Qe.dressHi,.6*ii(w*7)*S));h(d,r,_),h(Gn(4,4,(w,S)=>{let U=-.35+w*.7,B=.15+.09*S;return[Math.sin(U)*B,.86-S*.6,Math.cos(U)*B*.62-.02]},()=>Qe.lining),r,_);let p=Gn(10,5,(w,S)=>{let U=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.11],[1.66,.062]],B=S*(U.length-1),F=Math.min(U.length-2,Math.floor(B)),D=B-F,V=U[F][0]+(U[F+1][0]-U[F][0])*D,q=U[F][1]+(U[F+1][1]-U[F][1])*D,O=w*Math.PI*2;return[Math.sin(O)*q*1.08,V,Math.cos(O)*q*.78]},(w,S)=>es(Qe.dress,Qe.dressHi,S>.8?.5:.15*ii(w*4)),!0);h(p,r,_),h(Gn(14,1,(w,S)=>{let U=w*Math.PI*2,B=.172+.006*S;return[Math.sin(U)*B*1.08,1.04+S*.11,Math.cos(U)*B*.82]},()=>Qe.belt,!0),r,_);let y=(w,S)=>{let U=new so;U.absarc(0,0,w,Math.PI*.18,Math.PI*1.82,!1),U.absarc(w*.38,0,w*.78,Math.PI*1.7,Math.PI*.3,!0);let B=new Ua(U,{depth:S,bevelEnabled:!0,bevelThickness:S*.4,bevelSize:w*.08,bevelSegments:1,curveSegments:6});return B.center(),B};h(new jn(.05,.012,4,10),c,_,[0,1.095,.152]).scale.set(1,.85,.6),h(y(.042,.012),c,_,[0,1.095,.162]).rotation.z=.5;let M=9,L=Gn(28,14,(w,S)=>{let U=.36+.48*S**1.2,B=U+w*(Math.PI*2-2*U),F=.07+.16*ii(w*M+.5)+(w<.06||w>.94?.08:0),D=.14,V,q,O;if(S<D){let E=S/D;V=1.61-.14*E**.8,q=.1+.155*E**.7,O=.72}else{let E=(S-D)/(1-D);V=1.47-E*(1.47-F),q=.255+.25*E**1.3,O=.72+.22*E}return q*=1+.07*Math.sin(B*8)*Math.max(0,S-D),[Math.sin(B)*q*(1.12-.1*S),V,Math.cos(B)*q*O-.03*S]},(w,S)=>{let U=S>.89||w<.03||w>.97,B=es(u,f,.35*ii(w*8+.25)+(w>.3&&w<.7?.15:0));return U?m:B});h(L,r,_),h(Gn(10,2,(w,S)=>{let U=Math.PI*.55+w*Math.PI*.9,B=.105+.045*S;return[Math.sin(U)*B*1.1,1.58+S*.13,Math.cos(U)*B*.85]},(w,S)=>es(u,m,S>.6?1:0)),r,_),h(new ze(.045,.055,.12,7),o,_,[0,1.63,0]);let T=new ie;T.position.set(0,1.76,0),_.add(T),h(new Xe(.115,1),o,T).scale.set(.84,1.12,.95),h(new Pn(.06,.08,6),o,T,[0,-.11,.03]).rotation.x=Math.PI;for(let w of[-1,1]){h(new Je(.016,6,4),a,T,[w*.043,.012,.108]).scale.set(1.5,.75,.5);let U=h(new en(.05,.008,.01),a,T,[w*.045,.045,.112]);U.rotation.z=w*-.22}h(new Pn(.013,.045,4),o,T,[0,-.015,.125]).rotation.x=Math.PI/2+.3,h(new Je(.02,6,3),l,T,[0,-.068,.11]).scale.set(1.2,.38,.45);let tt=(w,S)=>es(Qe.hair,Qe.hairDark,.25+.5*ii(w*9)*(.4+.6*S));h(Gn(18,10,(w,S)=>{let U=Math.PI*.42+w*Math.PI*1.16,B=.1-S*(.95+.14*ii(w*6+.3)),F=S<.25?.13+S*.28:.2+.05*Math.sin(S*3.1),D=.022*Math.sin(S*15+U*3)*S;return[Math.sin(U)*(F+D)*1.05,B,Math.cos(U)*(F+D)*.85-.02-.05*S]},tt),r,T);for(let w of[-1,1])for(let S of[0,1]){let U=w*(.125+S*.03),B=0-S*.04,F=Array.from({length:8},(D,V)=>{let q=V/7;return[U+w*(.06*q+.025*Math.sin(q*9+S)),.04-q*(.55+.08*S),B+.06*q-.03*Math.sin(q*7)]});h(Ph(F,D=>.035*(1-.6*D)+.008,5,(D,V)=>tt(V,D),[1,1,.55]),r,T)}let v=new ie;v.position.set(0,.075,-.005),v.rotation.set(-.12,0,.07),T.add(v),h(Gn(20,3,(w,S)=>{let U=w*Math.PI*2,B=.14+S*.3;return[Math.sin(U)*B,.02-.075*S*S+.012*Math.sin(U*3)*S,Math.cos(U)*B]},(w,S)=>es(Qe.hat,f,S>.9?.25:.2*ii(w*5)),!0),r,v),h(Ph([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],w=>.165*(1-w)**1.35+.004,8,(w,S)=>es(Qe.hat,f,.25*ii(S*4)+.15*w)),r,v),h(Gn(16,1,(w,S)=>{let U=w*Math.PI*2,B=.168-.006*S;return[Math.sin(U)*B,.025+S*.06,Math.cos(U)*B]},()=>Qe.hatBand,!0),r,v);let nt=h(y(.04,.012),c,v,[0,.055,.172]);nt.rotation.z=.5;let st=(w,S)=>Gn(10,6,(U,B)=>{let F=U*Math.PI*2,D=.065+.15*Math.max(0,(B-.3)/.7)**1.4,V=B<.99?0:.07*ii(U*4),q=-(B*w)-V,O=S*B*B;return[Math.cos(F)*D,q,Math.sin(F)*D*.9+O]},(U,B)=>B>.85?m:es(u,f,.3*ii(U*3)),!0),ct=new ie;ct.position.set(-.23,1.47,0),ct.rotation.set(.05,0,.12),_.add(ct),h(st(.6,.06),r,ct),h(new Je(.042,6,4),o,ct,[0,-.6,.05]).scale.set(.8,1.25,.6);let lt=new ie;lt.position.set(.23,1.47,.02),lt.rotation.z=-.35,_.add(lt);let vt=h(st(.5,0),r,lt);vt.rotation.x=-.5,h(new Je(.044,6,4),o,lt,[0,-.43,.24]).scale.set(.85,1.1,.7);let j=new ie;j.position.set(0,-.43,.24),j.rotation.z=.28,lt.add(j);let k=Ni(e,t);k.group.position.y=.3,j.add(k.group);for(let w of k.materials)n.push({mat:w,color:w.color.clone(),emissive:w.emissive.clone()});let{gem:Z,gemMat:rt,glow:W}=k;return{root:g,body:_,head:T,arm:lt,staffPivot:j,crystal:Z,crystalMat:rt,glow:W,staff:k,height:2,materials:n}}var oy={me:4020950,opp:12728908,ally:3121012};function Hf(i,t,e,n){if(i==="witch")return Nf(t,e,n);let s=[],r=(nt,st={})=>{let ct=new Ee({color:nt,metalness:st.metal??.05,roughness:st.rough??.8,flatShading:!0,emissive:st.emissive??0,emissiveIntensity:st.ei??1,transparent:!0});return s.push({mat:ct,color:ct.color.clone(),emissive:ct.emissive.clone()}),ct},o=(nt,st,ct=0,Mt=0,lt=0)=>{let vt=new Tt(nt,st);return vt.position.set(ct,Mt,lt),vt},c=i==="goblin"||i==="kid"?.78:1,l=r(i==="goblin"?7323466:15778970),h=r(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:oy[t],f=r(u),m=r(16766073,{metal:.2,rough:.4}),g=r(12897496,{metal:.3,rough:.45}),_=new ie,d=new ie;if(_.add(d),i==="wizard")d.add(o(new ze(.27,.46,1,9),f,0,.5,0)),d.add(o(new ze(.47,.47,.05,9),m,0,.03,0));else{let nt=i==="knight"?g:h;d.add(o(new ze(.09,.08,.6,6),nt,-.12,.3,0)),d.add(o(new ze(.09,.08,.6,6),nt,.12,.3,0)),d.add(o(new en(.16,.08,.26),h,-.12,.04,.05)),d.add(o(new en(.16,.08,.26),h,.12,.04,.05)),d.add(o(new ze(.3,.34,.32,8),f,0,.72,0))}let p=i==="knight"?g:f;if(d.add(o(new ze(.24,.29,.55,8),p,0,1.12,0)),d.add(o(new jn(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let nt=o(new en(.34,.6,.04),f,0,1,.27);d.add(nt),d.add(o(new Je(.13,6,4),g,-.3,1.36,0)),d.add(o(new Je(.13,6,4),g,.3,1.36,0))}i==="human"&&d.add(o(new en(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let y=new ie;y.position.set(0,1.58,0),d.add(y),y.add(o(new Xe(.2,1),l));for(let nt of[-.07,.07])y.add(o(new Je(.028,6,4),h,nt,.02,.18));if(i==="wizard"){let nt=r(15658740);y.add(o(new Pn(.17,.42,7),nt,0,-.2,.1).rotateX(Math.PI)),y.add(o(new en(.4,.34,.14),nt,0,-.06,-.13)),y.add(o(new ze(.36,.36,.04,12),f,0,.15,0));let st=o(new Pn(.24,.62,9),f,0,.47,0);st.rotation.z=.12,y.add(st),y.add(o(new jn(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let nt of[-1,1]){let st=o(new Pn(.07,.34,5),l,nt*.24,.05,0);st.rotation.z=-nt*1.25,y.add(st)}y.add(o(new Pn(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")y.add(o(new Xe(.235,1),g)),y.add(o(new en(.3,.05,.05),h,0,.02,.21)),y.add(o(new Pn(.06,.4,6),r(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")y.add(o(new en(.38,.2,.12),r(5913122),0,-.02,-.13)),y.add(o(new Je(.215,10,6,0,Math.PI*2,0,Math.PI/2),r(4029400),0,.03,0)),y.add(o(new en(.2,.025,.16),r(4029400),0,.05,.2));else if(i==="human"){let nt=r(5913122);y.add(o(new Je(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),nt,0,.02,-.01)),y.add(o(new en(.4,.22,.12),nt,0,-.04,-.13))}let x=i==="knight"?g:f,M=new ie;M.position.set(-.3,1.34,0),M.rotation.z=.25,d.add(M),M.add(o(new ze(.075,.1,.55,6),x,0,-.27,0)),M.add(o(new Je(.07,6,4),l,0,-.58,0));let L=new ie;L.position.set(.3,1.34,.02),L.rotation.z=-.35,d.add(L),L.add(o(new ze(.075,.1,.5,6),x,0,-.22,.05).rotateX(-.5));let T=o(new Je(.07,6,4),l,0,-.42,.22);L.add(T);let C=new ie;C.position.set(0,-.42,.22),C.rotation.z=.28,L.add(C);let z=Ni(n,e);z.group.position.y=.3,C.add(z.group);for(let nt of z.materials)s.push({mat:nt,color:nt.color.clone(),emissive:nt.emissive.clone()});let{gem:tt,gemMat:v,glow:A}=z;return _.scale.setScalar(c),{root:_,body:d,head:y,arm:L,staffPivot:C,crystal:tt,crystalMat:v,glow:A,staff:z,height:1.95*c,materials:s}}function Ih(i){return["wizard","witch","goblin","knight","kid","human"].find(t=>t===i)??"wizard"}function ay(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Bn(i);return n.colorSpace=fn,n}function Ff(i){let t;try{t=new hr({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=lo,t.setClearColor(0,0);let e=new ur;e.add(new mr(14673663,2760768,1.4));let n=new Ui(16777215,2.2);n.position.set(2,3,4),e.add(n);let s=new Ui(10456319,2);s.position.set(-3,2,-3),e.add(s);let r=new ei(16777215,3,3,2);e.add(r);let o=new ln(30,1,.1,50),a=ay(),c=new ie;c.rotation.z=.12,e.add(c);let l=null,h="";function u(y){return l&&h===y||(l&&(c.remove(l.group),l.group.traverse(x=>x.geometry?.dispose?.())),l=Ni(y,a),h=y,c.add(l.group),r.color.copy(l.color),r.position.set(.3,ts+.2,.6)),l}function f(){let y=i.clientWidth||300,x=i.clientHeight||420;t.setSize(y,x,!1),o.aspect=y/x;let M=1.55/Math.tan(gr.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,M),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,d=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(y){if(!d()){m=0;return}m=requestAnimationFrame(p);let x=Math.min(.05,(y-g)/1e3);g=y,_+=x,l&&(c.rotation.y+=x*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=x*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,x,.25),t.render(e,o))}return{show(y){u(y),f(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(y,x,M){let L=[],T=h,C=c.rotation.y,z=c.position.y;t.setPixelRatio(1),t.setSize(x,M,!1),o.aspect=x/M,o.position.set(.35,ts+.12,1.6),o.lookAt(0,ts-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let tt of y)u(tt).update(1.2,0,0),t.render(e,o),L.push(i.toDataURL("image/png"));return c.rotation.y=C,c.position.y=z,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),T&&u(T),f(),L},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function un(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,s)=>n+(s-n)*e(),int:(n,s)=>n+Math.floor(e()*(s-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var Ot=i=>i<0?0:i>1?1:i,xe=(i,t,e)=>{let n=Ot((e-i)/(t-i));return n*n*(3-2*n)},Yf=(i,t,e)=>i+(t-i)*e,Zt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],de=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],ns=(i,t)=>1-Math.exp(-i*t),go=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},le=i=>i*Math.PI/180;function pn(i,t){let e=le(i),n=le(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function Zf(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return Zt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var Wa=(()=>{let i=un(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function Ie(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,f=Wa[h+c],m=Wa[h+l],g=Wa[u+c],_=Wa[u+l];return(f*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var Of=Math.cos(.55),Bf=Math.sin(.55);function We(i,t,e=5,n=2.03,s=.5){let r=0,o=1,a=0;for(let c=0;c<e;c++){r+=o*Ie(i+17.3*c,t-9.1*c),a+=o;let l=(i*Of-t*Bf)*n,h=(i*Bf+t*Of)*n;i=l,t=h,o*=s}return r/a}var zf=Math.cos(.7),kf=Math.sin(.7);function $f(i,t,e=5,n=2.1,s=.52){let r=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*Ie(i+31.7*l,t+5.3*l)-1);h=h*h*c,r+=h*o,a+=o,c=Ot(h*2);let u=(i*zf-t*kf)*n,f=(i*kf+t*zf)*n;i=u,t=f,o*=s}return r/a}var Vf=new Map;function cy(i,t,e){let n=`${t}:${e}`,s=Vf.get(n);if(!s){let l=un(e*977+t);s=new Float32Array(t);for(let h=0;h<t;h++)s[h]=l.random();Vf.set(n,s)}let r=i*t,o=Math.floor(r),a=r-o,c=a*a*(3-2*a);return s[(o%t+t)%t]*(1-c)+s[((o+1)%t+t)%t]*c}function Gf(i,t=5,e=3,n=1,s=.5){let r=0,o=1,a=0;for(let c=0;c<t;c++)r+=o*cy(i,e*2**c,n+c),a+=o,o*=s;return r/a}function Hi(i,t){let e=i.stops;return(n,s,r)=>{let o=Math.asin(Math.max(-1,Math.min(1,r)))*180/Math.PI,a=Zf(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+s*l[1]+r*l[2])));for(let[u,f,m]of i.glow){let g=Math.exp(-h/u)*f*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-s*l[1]+r*l[2]))),f=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=f*i.anti_col[0],a[1]+=f*i.anti_col[1],a[2]+=f*i.anti_col[2]}}return a}}var Mr=(i,t)=>Math.round(255*Math.pow(Ot(ns(i,t)),1/2.2));function Dh(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function Nh(i,t=!1){let e=new Bn(i);return e.colorSpace=fn,t?e.wrapS=e.wrapT=Ti:e.wrapS=xs,e.anisotropy=2,e}function ly(i,t,e){let n=t/2,{c:s,g:r,img:o}=Dh(t,n),a=Hi(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??de(i.far2,.8),f=[],m=h.map(()=>[]);for(let M=0;M<t;M++){let L=(M+.5)/t,T=L*2*Math.PI;f.push(a(Math.cos(T)*Math.cos(.012),Math.sin(T)*Math.cos(.012),Math.sin(.012)));let C=1;for(let z of e.notchAz){let tt=Math.abs(go(T,le(z)));C*=1-.85*Math.exp(-((tt/le(20))**2))}h.forEach(([z,tt,v],A)=>{if(e.ridgeKind==="trees"){m[A].push(z+tt*Gf(L,6,18,v,.62)**1.5);return}let nt=1-Math.abs(2*Gf(L,7,4,v,.56)-1);m[A].push((z+tt*nt**1.3)*(.35+.65*C))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),d=null,p=[0,0,0],y=[0,0,0];if((i.milky??0)>0){let M=new R(.25,-.55,.8).normalize(),L=M.clone().cross(new R(0,0,1)).normalize(),T=M.clone().cross(L);d=[M.x,M.y,M.z],p=[L.x,L.y,L.z],y=[T.x,T.y,T.z]}for(let M=0;M<n;M++){let L=((M+.5)/n-.5)*Math.PI,T=Math.cos(L),C=Math.sin(L),z=n-1-M;for(let tt=0;tt<t;tt++){let v=(tt+.5)/t*2*Math.PI,A=T*Math.cos(v),nt=T*Math.sin(v),st=C,ct=a(A,nt,st);if(d&&L>0){let N=Math.asin(Math.max(-1,Math.min(1,A*d[0]+nt*d[1]+st*d[2]))),j=Math.atan2(A*y[0]+nt*y[1]+st*y[2],A*p[0]+nt*p[1]+st*p[2]),k=3*Math.cos(j),Z=3*Math.sin(j),rt=We(k+9*N,Z+4*N,4),W=xe(.5,.75,We(k*1.7+17+14*N,Z*1.7-5+6*N,3)),w=Math.exp(-((N/(i.milky_w??.2))**2))*(.25+1.3*rt)*(1-.65*W)*i.milky,S=i.milky_col??[.55,.58,.85];ct=[ct[0]+w*S[0],ct[1]+w*S[1],ct[2]+w*S[2]]}let Mt=0;h.forEach(([,,,N,j],k)=>{let Z=Ot((m[k][tt]-L)/l+.5);if(Z<=0)return;let rt=f[tt],W=Zt(j,rt,N),w=Zt(W,rt,Math.exp(-Math.max(L,0)/.025)*.55);ct=Zt(ct,w,Z),Mt=Math.max(Mt,Z)});let lt=Ot(-L/l+.5);lt>0&&(ct=Zt(ct,u,lt));let vt=(z*t+tt)*4;o.data[vt]=Mr(ct[0],c),o.data[vt+1]=Mr(ct[1],c),o.data[vt+2]=Mr(ct[2],c),o.data[vt+3]=255,g[z*t+tt]=Mt,_[z*t+tt]=(o.data[vt]+o.data[vt+1]+o.data[vt+2])/765}}let x=(i.stars??0)>0?hy(t,n,i.star_n,i.stars,g,_):null;return r.putImageData(o,0,0),{tex:Nh(s),stars:x}}function hy(i,t,e,n,s,r){let o=un(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let f=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(f),_=Math.floor(m/(2*Math.PI)*i)%i,d=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-d,y=(1-s[p*i+_])*Ot(1-r[p*i+_]*3),x=o.random()**6,M=a[o.int(0,3)];if(y<=.01)continue;let L=Math.min(1.6,(.1+.95*x)*n*y*2.2),T=140;c.push(T*Math.cos(g)*Math.cos(m),T*Math.cos(g)*Math.sin(m),T*Math.sin(g)),l.push(M[0]*L,M[1]*L,M[2]*L),h.push(1+x*2.5)}return{pos:c,col:l,size:h}}function uy(i,t,e){let n=t/2,{c:s,g:r,img:o}=Dh(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let f=0;f<n;f++){let m=((f+.5)/n-.5)*Math.PI,g=n-1-f;if(m<.02)continue;let _=Math.cos(m),d=Math.sin(m),p=1/(d+.16),y=c<50?xe(.02,.1,m)*(1-xe(c*.6,c,m)):xe(.02,.16,m);if(!(y<=0))for(let x=0;x<t;x++){let M=(x+.5)/t*2*Math.PI,L=_*Math.cos(M),T=_*Math.sin(M),C=L*p*i.cloud_scale,z=T*p*i.cloud_scale,tt=We(C*.6+9,z*.6+2,3)-.5,v=C+tt*1.4,A=z+tt*1.1,nt=We(v,A,5),st=xe(i.cov0,i.cov1,nt);if(st<=.002)continue;let ct=We(v+h,A+u,5),Mt=Ot(.55-(ct-nt)*3.4)*(1-.4*st),lt=Math.exp(-Math.acos(Math.max(-1,Math.min(1,L*e[0]+T*e[1]+d*e[2])))/1.1),vt=Zt(i.cloud_lit_far,i.cloud_lit_near,lt),N=de(i.cloud_shadow,.6+.4*lt),j=Zt(N,vt,Mt),k=st*(1-st)*4*lt*.6,Z=(g*t+x)*4;o.data[Z]=Mr(j[0]+k*i.cloud_rim[0],a),o.data[Z+1]=Mr(j[1]+k*i.cloud_rim[1],a),o.data[Z+2]=Mr(j[2]+k*i.cloud_rim[2],a),o.data[Z+3]=Math.round(255*st*y*i.cloud_opacity)}}return r.putImageData(o,0,0),Nh(s)}function fy(i,t,e={}){let n=e.span??1.4,{c:s,g:r,img:o}=Dh(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let f=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(f,m),_=Ot((1-g)/(n*2/t)+.5),d=Math.sqrt(Ot(1-g*g)),p=0;for(let[T,C]of e.rings??[])p=Math.max(p,C*(1-xe(T-.1,T,g)));let y;if(i==="sun")y=Zt(e.sunInner??[1,.62,.25],a,Math.pow(d,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let T=Ot(f*l[0]+m*l[1]+d*l[2]),C=xe(.5,.6,We(f*1.9+4,m*1.9-2,5))*.42,z=xe(.62,.8,Ie(f*14,m*14))*.12,tt=(.04+T**.8)*(.6+.4*d)*(.9-C-z)*(e.moonGain??1.55);y=de(a,tt),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-xe(n*.86,n,g);let x=_+(1-_)*p,M=x>1e-4?[0,1,2].map(T=>(_*y[T]+(1-_)*p*c[T])/x):[0,0,0],L=(h*t+u)*4;o.data[L]=Math.round(255*Math.pow(Ot(M[0]),1/2.2)),o.data[L+1]=Math.round(255*Math.pow(Ot(M[1]),1/2.2)),o.data[L+2]=Math.round(255*Math.pow(Ot(M[2]),1/2.2)),o.data[L+3]=Math.round(255*Ot(x))}return r.putImageData(o,0,0),Nh(s,!0)}var Jt=class{constructor(t=!1,e=0){Fe(this,"alpha",t);Fe(this,"pos",[]);Fe(this,"col",[]);Fe(this,"idx",[]);Fe(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((s,r)=>{let o=n?.[r];s.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new ye;return t.setAttribute("position",new re(this.pos,3)),t.setAttribute("color",new re(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new re(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function pe(i={}){let t=new dr({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Re:An}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var li=(i={})=>{let t=new Ke({vertexColors:!0,side:Re,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?je:ai,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},Sn=(i,t=1)=>new Ke({color:new zt(i[0]*t,i[1]*t,i[2]*t),side:Re,toneMapped:!1});function Wf(i,t,e){let n=[],s=[],r=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),s.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;r.push(l,h,l+1,h,h+1,l+1)}let o=new ye;return o.setAttribute("position",new re(n,3)),o.setAttribute("uv",new re(s,2)),o.setIndex(r),o}var Lh=(i,t=!1)=>new Ke({map:i,side:Re,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function Xf(i,t){let e=new Jt,n=(s,r,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[f,m,g,_]of[[s,0,r,r],[0,s,-r,r],[-s,0,-r,-r],[0,-s,r,-r]])h.push(e.v([f*c-m*l,f*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let f=0;f<8;f++)e.f(u,h[f],h[(f+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function hi(i){let t=new ie,e=[],n=ly(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),s=n.tex,r=new Tt(Wf(150,48,24),Lh(s));if(r.renderOrder=-10,r.frustumCulled=!1,t.add(r),e.push(s,r.geometry,r.material),n.stars&&n.stars.pos.length){let x=new ye;x.setAttribute("position",new re(n.stars.pos,3)),x.setAttribute("color",new re(n.stars.col,3)),x.setAttribute("size",new re(n.stars.size,1));let M=new Cn({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:je}),L=new Qi(x,M);L.renderOrder=-9.5,L.frustumCulled=!1,t.add(L),e.push(x,M)}let o=null;if(i.clouds!==!1){let x=uy(i.th,Math.min(1024,i.W),i.bodies[0]);o=new Tt(Wf(138,48,24),Lh(x,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(x,o.geometry,o.material)}let a=i.body.span??1.4,c=fy(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=Lh(c,!0);e.push(c,l);for(let x of i.bodies){let L=146*Math.tan(i.body.r)*a,T=new R(...x),C=T.clone().cross(new R(0,0,1));C.lengthSq()<1e-8&&(C=new R(1,0,0)),C.normalize();let z=C.clone().cross(T).normalize(),tt=T.clone().multiplyScalar(146),v=new ye,A=[tt.clone().addScaledVector(C,-L).addScaledVector(z,-L),tt.clone().addScaledVector(C,L).addScaledVector(z,-L),tt.clone().addScaledVector(C,L).addScaledVector(z,L),tt.clone().addScaledVector(C,-L).addScaledVector(z,L)];v.setAttribute("position",new re(A.flatMap(st=>[st.x,st.y,st.z]),3)),v.setAttribute("uv",new re([0,0,1,0,1,1,0,1],2)),v.setIndex([0,1,2,0,2,3]);let nt=new Tt(v,l);nt.renderOrder=-8,nt.frustumCulled=!1,t.add(nt),e.push(v)}let h=un(i.seed??21),u=[],f=Math.round(i.sparkles*(i.bigShare??.27)),m=new Ke({color:new zt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Re}),g=new Ke({color:new zt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Re}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},d=Xf(..._.big),p=Xf(..._.small);e.push(m,g,d,p);for(let x=0;x<i.sparkles;x++){let M=x<f,L=h.uniform(0,360),T=h.uniform(..._.el??[35,88]),C=pn(L,T);i.bodies.concat([pn(i.th.body_az+180,i.th.body_el)]).some(A=>C[0]*A[0]+C[1]*A[1]+C[2]*A[2]>Math.cos(le(24)))&&(L+=45);let z=pn(L,T).map(A=>A*135),tt=new Tt(M?d:p,M?m:g);tt.position.set(...z),tt.lookAt(0,0,0),tt.renderOrder=-7,t.add(tt);let v=M?24:12;u.push({m:tt,big:M,pulses:Array.from({length:v},(A,nt)=>Math.round((nt+.5)*3600/v+h.int(-15,15)))})}let y=null;return{group:t,envMap(){if(y)return y;let x=s.image,M=document.createElement("canvas");M.width=x.width,M.height=x.height;let L=M.getContext("2d");return L.translate(M.width*.5,0),L.scale(-1,1),L.drawImage(x,0,0),L.drawImage(x,-x.width,0),y=new Bn(M),y.colorSpace=fn,y.mapping=Zr,e.push(y),y},update(x){o&&(o.rotation.z=x%3600/3600*Math.PI*2);let M=x%3600;for(let L of u){let T=1;for(let C of L.pulses){if(M<C-18||M>C+14)continue;let z=[[C-18,1],[C-9,L.big?1.35:1.2],[C,L.big?.2:.35],[C+14,1]];for(let tt=0;tt<3;tt++)if(M>=z[tt][0]&&M<=z[tt+1][0]){let v=(M-z[tt][0])/(z[tt+1][0]-z[tt][0]);T=Yf(z[tt][1],z[tt+1][1],v*v*(3-2*v))}}L.m.scale.setScalar(T)}},dispose(){for(let x of e)x.dispose()}}}function mn(i,t,e=0,n=1,s=0){let r=Math.floor(i/t),o=(i-r*t)/t,a=o*o*(3-2*o),c=(r+s)%2?n:e,l=(r+s)%2?e:n;return Yf(c,l,a)}var Kf=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function vr(i,t,e,n){let s=new Jt,r=[];for(let o of i){if(o===0){let c=s.v([0,0,e(0,0)],n(0,0));r.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(s.v([h,u,e(h,u)],n(h,u)))}r.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?s.f(r[0][0],r[1][a],r[1][c]):s.f(r[o][a],r[o][c],r[o-1][c],r[o-1][a])}return s.geo()}function dy(i,t,e,n,s=0){let r=.6+.4*Ot(t)**.7,o=de(i,r*(.88+.24*e));return Zt(o,n,Ot(Ot(1-t*3)*.55+s*.75))}function ui(i,t,e,n,s,r,o=!0){let a=Ie(e*2.5+s,n*2.5+s),c=o?Ot((Ie(e*.7+s,n*.7-s)-.5)*2.5):0;return dy(i,t,a,r,c)}function Uh(i,t,e,n,s,r,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],r([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],r([o[0],o[1],e+n],1));for(let g=0;g<s;g++){let _=2*Math.PI*g/s,d=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(d,r(d,0))),l.push(i.v(p,r(p,1)))}let f=[],m=[];for(let g=0;g<s;g++)f.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<s;g++){let _=(g+1)%s;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(f[g],f[_],m[_],m[g])}}function py(i,t,e,n,s,r,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,s-=h/2,t+=l/2,e-=l/2;let u=(g,_,d)=>[g*Math.cos(_),g*Math.sin(_),d],f=g=>i.v(g,a(g,(g[2]-r)/o)),m=(g,_,d,p)=>i.f(f(g),f(_),f(d),f(p));for(let g=0;g<c;g++){let _=n+(s-n)*g/c,d=n+(s-n)*(g+1)/c;m(u(t,_,r+o),u(e,_,r+o),u(e,d,r+o),u(t,d,r+o)),m(u(e,_,r+o),u(e,_,r),u(e,d,r),u(e,d,r+o)),m(u(t,d,r+o),u(t,d,r),u(t,_,r),u(t,_,r+o))}m(u(t,n,r+o),u(t,n,r),u(e,n,r),u(e,n,r+o)),m(u(e,s,r+o),u(e,s,r),u(t,s,r),u(t,s,r+o))}function mo(i,t,e,n,s=[1,1,1]){let r=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],f=h[1]-l[1],m=Math.hypot(u,f)||1,g=-f/m,_=u/m;r.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],s)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],s))});for(let a=0;a<t.length-1;a++)i.f(r[a],o[a],o[a+1],r[a+1])}var qa=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function my(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(le(n)),.4+.4*Math.sin(le(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(le(n)),-.4+.4*Math.sin(le(n))]);return[[...t,...e]]}return i===1?[qa(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],qa(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function qf(i,t,e,n,s,r,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let f of my(t))mo(i,f.map(([m,g])=>[h+s*(m*c-g*l),u+s*(m*l+g*c)]),o,r)}function is(i){let{th:t,r:e}=i,n=t.stone,s=new Jt,r=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,d)=>r(ui(m,d,_[0],_[1],g,t.moss,i.patchy??!0),_)};Uh(s,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),Uh(s,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],d)=>{let p=d*.23;for(let y=0;y<_;y++)py(s,m,g,p+2*Math.PI*y/_,p+2*Math.PI*(y+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new Jt;Uh(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new Jt;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),d=Math.sin(g);mo(l,[[.3*_,.3*d],[2.2*_,2.2*d]],.07,c);for(let p of[-1,1]){let y=g+p*le(35);mo(l,[[1.3*_,1.3*d],[1.3*_+.7*Math.cos(y),1.3*d+.7*Math.sin(y)]],.05,c)}}mo(l,qa(2.3),.06,c),mo(l,qa(6),.05,c);let h=new Jt;for(let m=0;m<8;m++){let g=le(45*m);m===6?qf(h,0,g,7.4,.95,c+.01,.13):qf(h,m%3,g,8.2,.55,c+.01,.09)}let u=new ie;u.add(new Tt(s.geo(),pe())),u.add(new Tt(a.geo(),Sn(i.glowCol,i.glow*1.1)));let f=new Tt(l.geo(),Sn(i.lineCol,i.glow*1.3));return f.name="centre-pattern",u.add(f),u.add(new Tt(h.geo(),Sn(i.runeCol,i.glow*1.6))),u}function br(i){let{r:t}=i,e=i.wind??(()=>{let s=new R(.8,.6,0).normalize();return[s.x,s.y,0]})(),n=new Jt(!1,1);for(let s=0;s<i.tufts;s++){let r=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,r))continue;let a=r*Math.cos(o),c=r*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),f=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),d=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],y=[-Math.sin(_),Math.cos(_)],x=i.gh(u,f),M=i.base(r),L=i.tip(r,_),T=Zt(M,L,.55),C=[u,f,x],z=[u+p[0]*d*.3,f+p[1]*d*.3,x+m*.55],tt=[u+p[0]*d,f+p[1]*d,x+m],v=(lt,vt)=>{let N=lt[2]-x,j=.32*N*N;return n.v(lt,vt,[[e[0]*j,e[1]*j,0]])},A=v([C[0]-y[0]*g,C[1]-y[1]*g,C[2]],M),nt=v([C[0]+y[0]*g,C[1]+y[1]*g,C[2]],M),st=v([z[0]-y[0]*g*.65,z[1]-y[1]*g*.65,z[2]],T),ct=v([z[0]+y[0]*g*.65,z[1]+y[1]*g*.65,z[2]],T),Mt=v(tt,L);n.f(A,nt,ct,st),n.f(st,ct,Mt)}}return n.geo()}function Jf(i,t,e,n,s,r,o,a){let c=new R(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new R(0,0,1)).normalize(),u=l.clone().cross(h),f=12,m=o*s,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([d,p])=>{let y=(.45+3*a*d**1.6)*n;return Array.from({length:f},(x,M)=>{let L=2*Math.PI*M/f,T=c.clone().multiplyScalar(d).addScaledVector(h,Math.cos(L)*y).addScaledVector(u,Math.sin(L)*y);return i.v([t[0]+T.x,t[1]+T.y,t[2]+T.z],[r[0],r[1],r[2],p*m])})});for(let d=0;d<g.length-1;d++)for(let p=0;p<f;p++){let y=(p+1)%f;i.f(_[d][p],_[d][y],_[d+1][y],_[d+1][p])}}function Er(i,t,e,n,s,r,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[s[0],s[1],s[2],n(0,0)*r]),l=[...o,t].map(h=>Array.from({length:40},(u,f)=>{let m=2*Math.PI*f/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[s[0],s[1],s[2],n(g,_)*r])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let f=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][f],l[h][f])}}var As=()=>new Ke({vertexColors:!0,transparent:!0,depthWrite:!1,blending:je,side:Re,fog:!1}),Xa=null;function Qf(){if(Xa)return Xa;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Xa=new Bn(i),Xa}function fi(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let s=new Float32Array(i.n*3),r=new ye;r.setAttribute("position",new Pe(s,3));let o=new Ji({map:Qf(),color:new zt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:je,sizeAttenuation:!0,fog:!1}),a=new Qi(r,o);a.frustumCulled=!1;let c=l=>{let h=Kf(l);for(let u=0;u<i.n;u++){let f=i.twinkle?Math.sin(l*.05+n[u])*.15:0;s[u*3]=t[u][0]+e[u][0]*h+f,s[u*3+1]=t[u][1]+e[u][1]*h,s[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}r.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function Ya(i){let t=i.list.length,e=(l,h,u)=>{let f=new Float32Array(t*3),m=new ye;m.setAttribute("position",new Pe(f,3));let g=new Ji({map:Qf(),color:h,size:l,transparent:!0,depthWrite:!1,blending:je,opacity:u,fog:!1}),_=new Qi(m,g);return _.frustumCulled=!1,{p:_,pos:f,g:m}},n=i.gain??1,s=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),r=e(2.2*s,new zt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*s,new zt(1,1,1).lerp(new zt(i.col[0],i.col[1],i.col[2]),.3),1),a=new ie;a.add(r.p,o.p);let c=l=>{let h=Kf(l);i.list.forEach((u,f)=>{for(let m of[r.pos,o.pos])m[f*3]=u.p[0],m[f*3+1]=u.p[1],m[f*3+2]=u.p[2]+u.amp*h}),r.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function jf(i,t){let{r:e,idx:n,th:s}=t,r=n/2,o=Zt(s.back_lit[0],s.back_lit[1],r),a=Zt(s.back_dark[0],s.back_dark[1],r),c=s.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],f=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(s.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(s.back_w??1),_=e.uniform(0,6.28),d=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(M=>ns(M,s.exposure??1)),y=Math.exp(-((go(h,t.sunAz)/.5)**2))*(s.back_rim_k??0),x=[];for(let M=0;M<7;M++){let L=M/6,T=-2+(m+2)*L,C=g*(1-.55*L)*(1+.5*Math.exp(-Math.max(T,0)/3)),z=Math.sin(L*4+_)*1.2+d*T,tt=[u[0]+f[0]*z,u[1]+f[1]*z,T],v=1-.75*L*L,A=de(o,v),nt=de(a,v);c>0&&(A=Zt(A,p,c*.6*(1-.5*L)),nt=Zt(nt,p,c*.6*(1-.5*L))),y>.01&&(A=Zt(A,s.back_rim,.6*y*(1-L)),nt=Zt(nt,s.back_rim,.6*y*(1-L))),x.push([i.v([tt[0]-f[0]*C/2,tt[1]-f[1]*C/2,T],A),i.v([tt[0]+f[0]*C/2,tt[1]+f[1]*C/2,T],nt)])}for(let M=0;M<6;M++)i.f(x[M][0],x[M][1],x[M+1][1],x[M+1][0])}}function Za(){let i=new Jt,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,s=a=>Zf(e,a),r=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],s(a)))),o=i.v([.07*1.12*1.12,0,1.12],s(1.12));for(let a=0;a<r.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(r[a][c],r[a][l],r[a+1][l],r[a+1][c])}for(let a=0;a<n;a++)i.f(r[r.length-1][a],r[r.length-1][(a+1)%n],o);return i.geo()}function di(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let s of n)s.dispose()})}function pi(i){let t=(n,s=1,r=.5)=>{let o=(n[0]+n[1]+n[2])/3;return de(Zt([o,o,o],n,r),s)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let s=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(s)&&(e[n]=Array.isArray(s[0])?s.map(r=>t(r)):t(s))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var Hh={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},Sr=78,Fh=[90,270];function td(i,t){let e=i==="night"?Hh.NIGHT:i==="day"?{...pi(Hh.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:Hh.SUNSET,n=e.emit,s=n*.75,r=un(13),o=un(41),a=new ie,c=[pn(e.body_az,e.body_el)],l=Fh.map(W=>[Sr*Math.cos(le(W)),Sr*Math.sin(le(W))]),h=le(e.body_az),u=[Math.cos(h),Math.sin(h)],f=(()=>{let W=new R(.8,.6,0).normalize();return[W.x,W.y,0]})(),m=(W,w,S)=>{let U=(W%360+360)%360;return U>255&&U<285&&w>S},g=e.stone,_=(W,w)=>{let S=Math.hypot(W,w),U=Ot((S-12)/10)*.35*(Math.sin(W*.09)+Math.cos(w*.11)+.5*Math.sin((W+w)*.19));U+=Ot((S-60)/60)*3*Math.sin(W*.05+1)*Math.cos(w*.04);for(let[B,F]of l)U*=xe(22,40,Math.hypot(W-B,w-F));return U},d=(W,w)=>{let S=0;for(let U of Fh){let B=le(U),F=Math.cos(B),D=Math.sin(B),V=W*F+w*D,q=Math.abs(-W*D+w*F);V>9&&(S=Math.max(S,Math.exp(-((q/4)**2))*xe(9,16,V)*(1-xe(Sr-10,Sr-2,V))))}return S},p=(W,w)=>{let S=Ot((Math.hypot(W,w)-10)/70)**.8,U=We(W*.06+3,w*.06-7,3);return Zt(de(Zt(e.g_near,e.g_far,S),.75+.5*U),e.g_road,d(W,w)*.8)};a.add(new Tt(vr([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),pe({flat:!1}))),a.add(is({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:s}));let y=new Jt,x=(W,w,S,U,B,F)=>{let D=o.uniform(0,50),V=(G,Y)=>ui(B,Y,G[0],G[1],D,e.moss),q=(G,Y)=>Array.from({length:U},(K,ot)=>{let P=2*Math.PI*ot/U,b=[F[0]+W*Math.cos(P),F[1]+W*Math.sin(P),G];return y.v(b,V(b,Y))}),O=q(w,0),E=q(w+S,1),Q=q(w,0),X=q(w+S,1);for(let G=0;G<U;G++){let Y=(G+1)%U;y.f(Q[G],Q[Y],X[Y],X[G])}y.f(...E),y.f(...[...O].reverse())},M=[],L=Za(),T=li({gain:1.05}),C=[];for(let W of[45,135,225,315]){let w=le(W),S=9.35*Math.cos(w),U=9.35*Math.sin(w);x(.4,.3,1.1,12,g[3],[S,U]),x(.55,1.4,.3,12,g[0],[S,U]);let B=new Tt(L,T);B.position.set(S,U,1.75),a.add(B),M.push({m:B,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),C.push({pos:[S,U,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let z=new Jt,tt=new Jt(!1,2),v=(W,w,S,U,B)=>{let F=Math.cos(U),D=Math.sin(U),V=(q,O,E)=>{let Q=q*S[0],X=O*S[1],G=[w[0]+Q*F-X*D,w[1]+Q*D+X*F,w[2]+E*S[2]];return W.v(G,B(G))};for(let q of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])W.f(...q.map(([O,E,Q])=>V(O,E,Q)))},A=t?6:10;for(let W=0;W<A;W++){let w=2*Math.PI*(W+o.uniform(-.2,.2))/A,S=o.uniform(14,20),U=S*Math.cos(w),B=S*Math.sin(w),F=_(U,B),D=o.uniform(6,9),V=()=>e.cs_stone;v(z,[U,B,F+(D-.2)/2],[.2,.2,D+.2],Math.PI/4,V);let q=o.uniform(0,3.14),O=[-Math.sin(q),Math.cos(q)],E=[Math.cos(q),Math.sin(q)];v(z,[U,B,F+D-.2],[.08,1.3,.08],q,V);let Q=[U,B,F+D-.3],X=(K,ot)=>{let P=.35*Math.sin(1.4*K+ot)*K/5;return[E[0]*P+f[0]*(.15*K)/5,E[1]*P+f[1]*(.15*K)/5,0]},G=Array.from({length:6},(K,ot)=>Array.from({length:3},(P,b)=>tt.v([Q[0]+O[0]*(b-1)*.6,Q[1]+O[1]*(b-1)*.6,Q[2]-ot*.6],de(e.banner,1-.35*ot/5),[X(ot,0),X(ot,Math.PI)]))),Y=tt.v([Q[0],Q[1],Q[2]-3.6],de(e.banner,.6),[X(6,0),X(6,Math.PI)]);for(let K=0;K<5;K++)for(let ot=0;ot<2;ot++)tt.f(G[K][ot],G[K][ot+1],G[K+1][ot+1],G[K+1][ot]);tt.f(G[5][0],G[5][1],Y),tt.f(G[5][1],G[5][2],Y)}let nt=pe({double:!0,morph:!0}),st=new Tt(tt.geo(),nt);st.morphTargetInfluences=[0,0],a.add(new Tt(z.geo(),pe()),st,new Tt(y.geo(),pe()));let ct=[];Fh.forEach((W,w)=>{let S=new Jt,U=new Jt,B=new Jt,F=new Jt,D=new Jt,V=new Jt(!1,2),q=le(W),O=[Sr*Math.cos(q),Sr*Math.sin(q),0],E=q-Math.PI/2,Q=Math.cos(E),X=Math.sin(E),G=H=>[O[0]+H[0]*Q-H[1]*X,O[1]+H[0]*X+H[1]*Q,H[2]],Y=H=>{let $=Ie(H[0]*.8+w*10,H[2]*.8),at=.6+.4*Ot(H[2]/6);return de(e.cs_stone,at*(.75+.5*$)*(.8+.4*Ot(H[2]/30)))},K=(H,$,at,J)=>{for(let bt of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])H.f(...bt.map(([_t,ft,Lt])=>{let dt=[$[0]+_t*at[0],$[1]+ft*at[1],$[2]+Lt*at[2]];return H.v(G(dt),J(dt))}))},ot=(H,$,at,J,bt)=>{let _t=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([dt,At])=>[H+dt*J,$+At*J,at]),ft=[H,$,at+bt],Lt=dt=>de(e.cs_roof,.8+.4*Ot((dt[2]-22)/22));for(let dt=0;dt<4;dt++){let At=_t[dt],Bt=_t[(dt+1)%4];U.f(U.v(G(At),Lt(At)),U.v(G(Bt),Lt(Bt)),U.v(G(ft),Lt(ft)))}};K(S,[0,0,6],[40,4,12],Y);for(let H=-18;H<=18;H+=2.6)if(Math.abs(H)>4.6)for(let $ of[-1.6,1.6])K(S,[H,$,12.7],[1.4,.8,1.4],Y);for(let H of[-20,20]){K(S,[H,0,11],[8,8,22],Y);for(let $ of[12,20])K(S,[H,0,$],[8.6,8.6,.6],Y);ot(H,0,22,4.7,9),K(S,[H,0,31],[.12,.12,9],Y)}K(S,[0,0,17],[7,7,34],Y);for(let H of[13,24])K(S,[0,0,H],[7.6,7.6,.6],Y);ot(0,0,34,4.3,10),K(S,[0,0,46.5],[.12,.12,5],Y);for(let H of[-2.9,2.9])K(S,[H,-3.75,3.8],[.9,.6,7.6],Y);K(S,[0,-3.75,7.7],[6.8,.6,.9],Y),K(F,[0,-3.6,3.6],[4.6,.3,7.2],H=>H[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let H=0;H<7;H++)K(F,[-2.1+.7*H,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let H of[2,4.5,6.8])K(F,[0,-3.85,H],[4.6,.2,.12],()=>[.02,.016,.014]);{let H=Array.from({length:9},(at,J)=>[2.3*Math.cos(Math.PI*J/8),7.2+2.3*Math.sin(Math.PI*J/8)]);F.f(...H.map(([at,J])=>F.v(G([at,-3.75,J]),[.006,.005,.008])));let $=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];F.f(...[...$].reverse().map(at=>F.v(G(at),[.04,.025,.02])))}for(let H of[9.5,15,20.5,26,31])K(B,[0,-3.62,H],[.8,.3,1.7],()=>[1,1,1]);for(let H of[-20,20])for(let $ of[5,10,15,20])K(B,[H,-4.12,$],[.8,.3,1.7],()=>[1,1,1]);for(let H of[-4.3,4.3]){K(S,[H,-3.8,4.2],[.15,.15,1],Y);let $=new Xe(.35,1),at=$.attributes.position;for(let bt=0;bt<at.count;bt+=3)D.f(...[0,1,2].map(_t=>D.v(G([H+at.getX(bt+_t),-3.8+at.getY(bt+_t),5.1+at.getZ(bt+_t)*1.5]),[1,1,1])));$.dispose();let J=G([H,-4.6,5.3]);w===0&&C.push({pos:J,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[H,$,at,J,bt]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let _t=[0,.2,.4,.6,.82],ft=(Ct,kt)=>{let jt=.5*bt*Math.sin(7*Ct+kt)*Ct,it=.1*bt*Math.sin(5*Ct+kt)*Ct;return[-jt*X,jt*Q,it]},Lt=(Ct,kt,jt)=>V.v(G([Ct,$,kt]),e.flag_col,[ft(jt,0),ft(jt,Math.PI)]),dt=_t.map(Ct=>Lt(H+J*Ct,at+bt,Ct)),At=_t.map(Ct=>Lt(H+J*Ct,at,Ct)),Bt=Lt(H+J,at+bt,1),Ht=Lt(H+J,at,1),Rt=Lt(H+.9*J,at+bt/2,.9);for(let Ct=0;Ct<4;Ct++)V.f(At[Ct],At[Ct+1],dt[Ct+1],dt[Ct]);V.f(dt[4],Bt,Rt),V.f(At[4],Rt,Ht),V.f(dt[4],Rt,At[4])}a.add(new Tt(S.geo(),pe()),new Tt(U.geo(),pe()),new Tt(F.geo(),pe({double:!0}))),a.add(new Tt(B.geo(),Sn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new Tt(D.geo(),Sn(e.torch_col,1.5)));let b=new Tt(V.geo(),pe({double:!0,morph:!0}));b.morphTargetInfluences=[0,0],a.add(b),ct.push(b)});class Mt{constructor(w){Fe(this,"mode",w);Fe(this,"mb");Fe(this,"war",[]);Fe(this,"pending",[]);Fe(this,"faces",[]);this.mb=new Jt(!1,w==="clash"?2:w==="surge"?1:0)}part(w,S,U,B,F,D,V=-1,q=!1){let O=U.clone().sub(S);if(O.length()<1e-6)return;let E=O.normalize(),Q=Math.abs(E.z)<.9?new R(0,0,1):new R(1,0,0),X=E.clone().cross(Q).normalize(),G=E.clone().cross(X),Y=[[S,B],[U,F]].map(([K,ot])=>Array.from({length:D},(P,b)=>{let H=2*Math.PI*b/D,$=K.clone().addScaledVector(X,Math.cos(H)*ot).addScaledVector(G,Math.sin(H)*ot),at=new Dt($.x-w.x,$.y-w.y),J=at.length()>1e-6?.5+.5*at.normalize().dot(new Dt(u[0],u[1])):.5;return this.add([$.x,$.y,$.z],Zt(e.sil,e.sil_rim,.45*J*J),V,q)}));for(let K=0;K<D;K++){let ot=(K+1)%D;this.faces.push([Y[0][K],Y[0][ot],Y[1][ot],Y[1][K]])}this.faces.push([...Y[0]].reverse()),this.faces.push(Y[1])}add(w,S,U,B){return this.pending.push({p:w,c:S,wi:U,arm:B}),this.pending.length-1}warrior(w,S,U,B){let F=this.war.length,D=new se().makeRotationZ(S-Math.PI/2),V=(Q,X,G)=>w.clone().add(new R(Q,X,G).applyMatrix4(D)),q=w.clone().add(new R(0,0,1)),O=(Q,X,G,Y,K,ot=!1)=>this.part(q,V(...Q),V(...X),G,Y,K,F,ot);for(let[Q,X,G]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])O([Q*.11,0,.95],G,.1,.075,4),O(G,X,.075,.06,4);O([0,0,.95],[0,.1,1.48],.2,.23,6),O([0,.16,1.58],[0,.16,1.74],.11,.11,6),O([0,.16,1.74],[0,.16,1.92],.12,.02,6),O([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),O([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),U!=="spear"&&O([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),O([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),O([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),U==="sword"?O([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):U==="axe"?(O([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),O([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(O([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),O([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let E=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(Q=>{let X=V(...Q);return this.add([X.x,X.y,X.z],e.sil,F,!1)});this.faces.push(E),this.war.push({team:B,f:new R(0,1,0).applyMatrix4(D),axis:new R(1,0,0).applyMatrix4(D),pivot:V(.27,.1,1.42)})}finish(){let w=this.pending.map(S=>{let U=[],B=new R(...S.p);if(this.mode==="clash")for(let F of[0,1]){if(S.wi<0){U.push([0,0,0]);continue}let D=this.war[S.wi],V=D.team===F,q=D.f.clone().multiplyScalar(V?.32:-.22),O=B.clone().add(q);S.arm&&(O=D.pivot.clone().add(q).add(B.clone().sub(D.pivot).applyAxisAngle(D.axis,le(V?-60:25)))),U.push([O.x-B.x,O.y-B.y,O.z-B.z])}if(this.mode==="surge"){let F=this.war[S.wi];U.push([F.f.x*.5,F.f.y*.5,S.arm?.3:0])}return this.mb.v(S.p,S.c,U)});for(let S of this.faces)this.mb.f(...S.map(U=>w[U]));return this.mb.geo()}}let lt=pe({morph:!0,double:!0}),vt=[],N=t?5:8;for(let W=0;W<N;W++){let w=2*Math.PI*(W+o.uniform(-.3,.3))/N,S=o.uniform(17,36);m(w*180/Math.PI,S,15)&&(w+=.6);let U=S*Math.cos(w),B=S*Math.sin(w);for(let F=0;F<3;F++){let D=new Mt("clash"),V=o.uniform(0,6.283),q=new R(U+o.uniform(-4.5,4.5),B+o.uniform(-4.5,4.5),0),O=new R(Math.cos(V),Math.sin(V),0),E=o.uniform(.9,1.1);for(let[X,G]of[[0,-1],[1,1]]){let Y=q.clone().addScaledVector(O,E*G);Y.z=_(Y.x,Y.y),D.warrior(Y,X===0?V:V+Math.PI,o.choice(["sword","sword","axe","spear"]),X)}let Q=new Tt(D.finish(),lt);Q.morphTargetInfluences=[0,0],a.add(Q),vt.push({m:Q,w:2*Math.PI/r.uniform(40,95),w2:2*Math.PI/r.uniform(110,260),w3:2*Math.PI/r.uniform(150,400),p:r.uniform(0,6.28),p2:r.uniform(0,6.28),p3:r.uniform(0,6.28),bias:r.uniform(-.35,.35)})}}{let W=new Mt(null);for(let w=0;w<16;w++){let S=o.uniform(0,6.283),U=o.uniform(13,45);if(m(S*180/Math.PI,U,14))continue;let B=new R(U*Math.cos(S),U*Math.sin(S),0);B.z=_(B.x,B.y);let F=new se().makeRotationZ(o.uniform(0,6.283)),D=(q,O,E)=>B.clone().add(new R(q,O,E).applyMatrix4(F)),V=B.clone().add(new R(0,0,.2));W.part(V,D(0,-.4,.18),D(0,.45,.2),.2,.22,6),W.part(V,D(0,.55,.18),D(0,.7,.2),.11,.11,6),W.part(V,D(-.1,-.4,.12),D(-.2,-1.2,.1),.09,.07,4),W.part(V,D(.1,-.4,.12),D(.25,-1.1,.12),.09,.07,4),W.part(V,D(-.25,.35,.18),D(-.6,.1,.12),.06,.05,4),W.part(V,D(.25,.35,.18),D(.55,.7,.1),.06,.05,4),W.part(V,D(.7,.2,0),D(.9,.2,1.8),.03,.025,4),W.part(V,D(-.9,0,.05),D(-.9,0,.12),.4,.4,8)}a.add(new Tt(W.finish(),pe({double:!0})))}let j=[];{let W=[];for(let U=0;U<6;U++){let B=o.uniform(0,6.283),F=o.uniform(45,90);m(B*180/Math.PI,F,40)&&(B+=.8),W.push(new R(F*Math.cos(B),F*Math.sin(B),0))}let w=t?70:120,S=W.map(()=>new Mt("surge"));for(let U=0;U<w;U++){let B=S[U%W.length],F=W[U%W.length],D=F.clone().add(new R(o.uniform(-9,9),o.uniform(-9,9),0));D.z=_(D.x,D.y);let V=Math.atan2(F.y-D.y,F.x-D.x)+o.uniform(-.5,.5),q=B.war.length,O=new se().makeRotationZ(V-Math.PI/2),E=(X,G,Y)=>D.clone().add(new R(X,G,Y).applyMatrix4(O)),Q=D.clone().add(new R(0,0,.9));B.part(Q,E(0,0,0),E(0,0,1.45),.28,.22,4,q),B.part(Q,E(0,.05,1.45),E(0,.05,1.65),.12,.12,4,q),B.part(Q,E(.3,-.3,.9),E(.3,2,2.4),.03,.025,4,q,!0),B.war.push({team:0,f:new R(0,1,0).applyMatrix4(O),axis:new R(1,0,0).applyMatrix4(O),pivot:E(0,0,1.4)})}for(let U of S){let B=new Tt(U.finish(),lt);B.morphTargetInfluences=[0,0],a.add(B),j.push({m:B,w:2*Math.PI/r.uniform(90,170),p:r.uniform(0,6.28),w2:2*Math.PI/r.uniform(300,600),p2:r.uniform(0,6.28)})}}let k=new Tt(br({r,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(W,w)=>m(W,w,16),base:W=>de(e.grass_base,1-.6*Ot((W-12)/55)),tip:W=>de(e.grass_tip,1-.6*Ot((W-12)/55))}),pe({emit:.1,double:!0,morph:!0}));k.morphTargetInfluences=[0],a.add(k);let Z=fi({r:o,n:t?24:40,at:()=>{let W=o.uniform(0,6.283),w=30*Math.sqrt(o.random());return[w*Math.cos(W),w*Math.sin(W),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(Z.obj);let rt=hi({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(rt.group),{group:a,floor:.6,update(W){rt.update(W);for(let D of vt){let V=Math.sin(W*D.w+D.p+1.4*Math.sin(W*D.w2+D.p2))+D.bias,q=.55+.45*Math.sin(W*D.w3+D.p3),O=Ot(V)*q,E=Ot(-V)*q;D.m.morphTargetInfluences[0]=O*O*(3-2*O),D.m.morphTargetInfluences[1]=E*E*(3-2*E)}for(let D of j)D.m.morphTargetInfluences[0]=Ot(.5+.6*Math.sin(W*D.w+D.p)*(.6+.4*Math.sin(W*D.w2+D.p2)));let w=mn(W,90);st.morphTargetInfluences[0]=w,st.morphTargetInfluences[1]=1-w;for(let D of ct)D.morphTargetInfluences[0]=w,D.morphTargetInfluences[1]=1-w;k.morphTargetInfluences[0]=mn(W,45);let S=W%3600,U=Math.floor(S/8),B=(S-U*8)/8,F=B*B*(3-2*B);for(let D of M){let V=D.keys[U%450],q=D.keys[(U+1)%450];D.m.scale.set(V[0]+(q[0]-V[0])*F,V[1]+(q[1]-V[1])*F,V[2]+(q[2]-V[2])*F)}Z.update(W)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...C],dispose(){rt.dispose(),di(a)}}}var Oh={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function ed(i,t){let e=i==="night"?Oh.NIGHT:i==="day"?{...pi(Oh.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:Oh.SUNSET,n=e.emit,s=n*.75,r=un(11),o=un(99),a=new ie,c=le(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let N=new R(.8,.6,0).normalize();return[N.x,N.y,0]})(),u=(N,j)=>Ot((Math.hypot(N,j)-12)/10)*.25*(Math.sin(N*.22)+Math.cos(j*.27)+.5*Math.sin((N+j)*.5)),f=(N,j)=>{let k=Ot((Math.hypot(N,j)-6)/34)**.7,Z=.9+.2*(Math.sin(N*.5)*Math.cos(j*.5)*.5+.5),rt=We(N*.09+3,j*.09-7,3),W=Ie(N*1.7,j*1.7),w=Zt(e.g_near,e.g_far,k);return w=Zt(w,e.g_alt,Ot((rt-.45)*2.2)*.6*(1-.5*k)),de(w,Z*(1+.25*(W-.5)*(1-k)))},m=Hi(e,[pn(e.body_az,e.body_el)]);a.add(new Tt(vr([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,f),pe({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,N])=>[N[0],N[1]]),d=N=>{let j=_.reduce((Z,[rt,W])=>Z+Math.exp(-((Math.hypot(N[0]-rt,N[1]-W)/5.5)**2)),0),k=(.55+.45*Math.min(1,j))*(1-.4*Ot((Math.hypot(N[0],N[1])-5)/5))*.2*.5*e.beam_gain;return de(e.beam_col,k)};a.add(is({th:e,r,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:s,patchy:!1,bake:d}));{let N=new Jt;for(let j=0;j<10;j++){let k=r.uniform(0,6.283),Z=r.uniform(11.5,17),rt=r.uniform(.8,2),W=r.choice(e.stone),w=o.uniform(0,50),S=new Xe(1,1),U=S.attributes.position;for(let E=0;E<U.count;E++){let Q=r.uniform(.8,1.2);U.setXYZ(E,U.getX(E)*Q,U.getY(E)*Q,U.getZ(E)*Q)}let B=Z*Math.cos(k),F=Z*Math.sin(k),D=r.uniform(0,6.28),V=new se().compose(new R(B,F,u(B,F)+.3*rt),new tn().setFromAxisAngle(new R(0,0,1),D),new R(rt,rt*.9,rt*.7)),q=S.index?S.toNonIndexed():S,O=q.attributes.position;for(let E=0;E<O.count;E+=3){let Q=[];for(let X=0;X<3;X++){let G=O.getX(E+X),Y=O.getY(E+X),K=O.getZ(E+X),ot=new R(G,Y,K).applyMatrix4(V),P=.6+.4*Ot((K+1)/2)**.7,b=Ie(G*2+w,Y*2+K);Q.push(N.v([ot.x,ot.y,ot.z],Zt(de(W,P*(.88+.24*b)),e.moss,Ot(1-(K+1)/2*3)*.55)))}N.f(...Q)}q.dispose()}a.add(new Tt(N.geo(),pe()))}let p=[],y=(N,j,k)=>{for(let Z=0;Z<300;Z++){let rt=r.uniform(0,360);if(k&&rt>245&&rt<295)continue;let W=r.uniform(N,j),w=W*Math.cos(le(rt)),S=W*Math.sin(le(rt));if(p.every(([U,B])=>Math.hypot(w-U,S-B)>5.5))return p.push([w,S]),[w,S]}return null},x=pe({morph:!0}),M=li({gain:2.2}),L=[],T=t?12:18,C=t?6:10;for(let N=0;N<T+C;N++){let j=N<T,k=j?y(15,26,!0):y(32,46,!1);if(!k)continue;let Z=j?r.uniform(20,32):r.uniform(30,40),rt=j?r.uniform(1.1,2):r.uniform(2.2,3.2),W=j&&r.random()<.25,w=z(k[0],k[1],Z,rt,W),S=new Tt(w.bark.geo(),x);S.morphTargetInfluences=[0,0],a.add(S);let U=null;W&&(U=new Tt(w.eyes.geo(),M),U.morphTargetInfluences=[0,0],a.add(U));let B=[];if(W){let F=Array.from({length:Math.floor(174)},(D,V)=>60+V*20);for(let D=0;D<5;D++)B.push(F.splice(r.int(0,F.length-1),1)[0]);B.sort((D,V)=>D-V)}L.push({mesh:S,eyes:U,P:r.choice([100,120,150,180,200]),flip:r.int(0,1),blinks:B})}function z(N,j,k,Z,rt){let W=new Jt(!1,2),w=new Jt(!1,2),S=new R(-N,-j,0).normalize(),U=r.uniform(1.2,2.4),B=new R(r.uniform(-1,1),r.uniform(-1,1),0).normalize().multiplyScalar(r.uniform(.03,.1)),F=r.uniform(0,6.28),D=r.uniform(.4,1),V=r.choice([3,4,5]),q=r.uniform(0,6.28),O=H=>new R(N+B.x*H+D*Math.sin(.28*H+F),j+B.y*H+D*Math.cos(.23*H+F),H),E=(H,$)=>{let at=Math.max(H,0),J=Z*(1-.62*Ot(at/k))*(1+1.1*Math.exp(-at/1.6)),bt=$+.06*at;return J*(1+.28*Math.cos(V*bt+q)*Math.exp(-at/3.5)+.07*Math.cos(2*bt+F))},Q=H=>{let $=U*Ot(Math.max(H,0)/k)**2;return[h[0]*$,h[1]*$,0]},X=(H,$,at)=>{let J=new R(H.x,H.y,0);J.lengthSq()>1e-12&&J.normalize();let bt=Math.max(0,J.x*S.x+J.y*S.y),_t=.6+.4*Math.sin(at),ft=Zt(e.bark_dark,e.bark_lit,Ot(.85*bt*_t*(1-.3*Ot($/k)))),Lt=Math.max(0,J.x*l[0]+J.y*l[1]);ft=Zt(ft,e.bark_sun,Ot(e.bark_sun_k*Lt*(.5+.5*_t)*(1-.5*Ot($/k)))),ft=de(ft,.72+.28*Ot($/1.6));let dt=Ot(1-$/2.2)*.55*Ie(H.x*3+N,H.y*3+$*.8);return Zt(ft,e.moss,dt)},G=(H,$)=>W.v([H.x,H.y,H.z],$,[Q(H.z),[0,0,0]]),Y=t?10:14,K=t?8:12,ot=[];for(let H=0;H<Y;H++){let $=-.5+(k+.5)*(H/(Y-1))**1.15,at=O($),J=[];for(let bt=0;bt<K;bt++){let _t=2*Math.PI*bt/K,ft=new R(Math.cos(_t),Math.sin(_t),0);J.push(G(at.clone().addScaledVector(ft,E($,_t)),X(ft,$,_t*7+$*.4)))}ot.push(J)}for(let H=0;H<Y-1;H++)for(let $=0;$<K;$++){let at=($+1)%K;W.f(ot[H][$],ot[H][at],ot[H+1][at],ot[H+1][$])}let P=G(O(k).add(new R(0,0,.3)),e.bark_dark);for(let H=0;H<K;H++)W.f(P,ot[Y-1][H],ot[Y-1][(H+1)%K]);let b=r.int(2,4);for(let H=0;H<b;H++){let $=k*r.uniform(.35,.85),at=r.uniform(0,6.28),J=new R(Math.cos(at),Math.sin(at),0),bt=O($).addScaledVector(J,E($,at)*.7),_t=J.clone().add(new R(0,0,r.uniform(.4,1))).normalize(),ft=r.uniform(3.5,7.5),Lt=new R(-J.y,J.x,0),dt=[0,1,2,3,4].map(Ht=>bt.clone().addScaledVector(_t,ft*(Ht/4)).add(new R(0,0,.35*ft*(Ht/4)**2)).addScaledVector(Lt,Math.sin(Ht/4*3+H)*.5)),At=E($,at)*.32,Bt=dt.map((Ht,Rt)=>{let Ct=dt[Math.min(Rt+1,4)].clone().sub(dt[Math.max(Rt-1,0)]).normalize(),kt=Ct.clone().cross(new R(0,0,1));kt.length()<.001&&(kt=new R(1,0,0)),kt.normalize();let jt=Ct.clone().cross(kt);return Array.from({length:6},(it,Ut)=>{let yt=2*Math.PI*Ut/6,wt=kt.clone().multiplyScalar(Math.cos(yt)).addScaledVector(jt,Math.sin(yt));return G(Ht.clone().addScaledVector(wt,At*(1-.85*Rt/4)),X(wt,Ht.z,yt*5+Rt))})});for(let Ht=0;Ht<4;Ht++)for(let Rt=0;Rt<6;Rt++){let Ct=(Rt+1)%6;W.f(Bt[Ht][Rt],Bt[Ht][Ct],Bt[Ht+1][Ct],Bt[Ht+1][Rt])}}if(rt){let H=r.uniform(2.2,9),$=Math.atan2(S.y,S.x)+r.uniform(-.6,.6),at=new R(Math.cos($),Math.sin($),0),J=new R(-at.y,at.x,0),bt=O(H).addScaledVector(at,E(H,$)),_t=r.uniform(.18,.32),ft=_t*1.25,Lt=(Bt,Ht,Rt)=>bt.clone().addScaledVector(at,Rt).addScaledVector(J,Bt).add(new R(0,0,Ht)),dt=Array.from({length:10},(Bt,Ht)=>G(Lt(Math.cos(2*Math.PI*Ht/10)*(ft+_t*1.7),Math.sin(2*Math.PI*Ht/10)*_t*1.7,.07),[.004,.003,.02]));W.f(...dt);let At=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Bt of[1,-1]){let Ht=At.map(([Ct,kt])=>[Bt*(ft+Ct*_t),kt*_t]);Bt===-1&&(Ht=Ht.reverse());let Rt=Ht.map(([Ct,kt])=>{let jt=Lt(Ct,kt,.11);return w.v([jt.x,jt.y,jt.z],[1,.04,.04],[Q(jt.z),[0,0,H-jt.z]])});w.f(...Rt)}}return{bark:W,eyes:w}}let tt=e.grass_tip,v=pe({emit:e.grass_emit,double:!0,morph:!0}),A=t?260:500,nt=[0,1].map(()=>{let N=new Map,j=br({r,tufts:A,rmin:10.6,rspan:34,gh:u,base:Z=>de(e.grass_base,1-.6*Ot((Z-11)/34)),tip:(Z,rt)=>{let W=Math.round(Z*1e3),w=N.get(W);w||(w=Zt(tt[0],tt[1],r.random()),N.set(W,w));let S=.3*Math.abs(Math.cos(rt-c))*(i==="night"?.5:1);return de(Zt(w,e.grass_rim,S),1-.6*Ot((Z-11)/34))}}),k=new Tt(j,v);return k.morphTargetInfluences=[0],a.add(k),k});{let N=new Jt;for(let j=0;j<(t?40:70);j++){let k=14+22*o.random(),Z=o.uniform(0,2*Math.PI),rt=k*Math.cos(Z),W=k*Math.sin(Z),w=u(rt,W),S=[rt+o.uniform(-.06,.06),W+o.uniform(-.06,.06),w+o.uniform(.35,.7)];N.f(N.v([rt-.012,W,w],[.02,.07,.05]),N.v([rt+.012,W,w],[.02,.07,.05]),N.v([S[0]+.012,S[1],S[2]],[.08,.25,.12]),N.v([S[0]-.012,S[1],S[2]],[.08,.25,.12]));let U=o.choice(e.flower),B=N.v([S[0],S[1],S[2]+.02],[1,.9,.5]),F=Array.from({length:6},(D,V)=>{let q=2*Math.PI*V/6;return N.v([S[0]+.05*Math.cos(q),S[1]+.05*Math.sin(q),S[2]+.025],U)});for(let D=0;D<6;D++)N.f(B,F[D],F[(D+1)%6])}a.add(new Tt(N.geo(),pe({emit:e.flower_emit,double:!0})))}{let N=new Jt;for(let j=0;j<14;j++){let k=le(r.choice([r.uniform(195,245),r.uniform(295,345),r.uniform(0,360)])),Z=r.uniform(16,34),rt=r.uniform(1,1.8),W=Z*Math.cos(k),w=Z*Math.sin(k),S=u(W,w);for(let U=0;U<4;U++){let B=[r.uniform(-1.4,1.4),r.uniform(-1,1),r.uniform(.2,1)],F=r.uniform(.9,1.6),D=new Xe(F,1),V=D.attributes.position;for(let q=0;q<V.count;q+=3){let O=[];for(let E=0;E<3;E++){let Q=V.getZ(q+E)+B[2];O.push(N.v([W+(V.getX(q+E)+B[0])*rt,w+(V.getY(q+E)+B[1])*rt,S+Q*rt*.75],Zt(e.bush_lo,e.bush_hi,Ot((Q+.3)/2.6)*.8)))}N.f(...O)}D.dispose()}}a.add(new Tt(N.geo(),pe()))}{let N=new Jt;[[52,70,50,70],[59,80,55,75],[66,90,60,80]].forEach(([k,Z,rt,W],w)=>jf(N,{r,idx:w,radius:k,count:t?Math.round(Z*.6):Z,hmin:rt,hmax:W,th:e,sky:m,sunAz:c}));let j=li({fog:!1,gain:i==="night"?.45:.6});j.toneMapped=!1,a.add(new Tt(N.geo(),j))}let st=new Jt(!0);g.forEach(([N,j])=>{for(let[k,Z]of[[1,.45],[.7,.6],[.4,.8]])Jf(st,N,j,k,Z,e.beam_col,.35*e.beam_gain,2.6)});let ct=new Jt(!0);Er(ct,9.4,.7,(N,j)=>{let k=_.reduce((Z,[rt,W])=>Z+Math.exp(-((Math.hypot(N-rt,j-W)/5.5)**2)),0);return(.55+.45*Math.min(1,k))*xe(0,3,9.4-Math.hypot(N,j))},e.beam_col,.3*.5*e.beam_gain);let Mt=new Tt(st.geo(),As());a.add(Mt,new Tt(ct.geo(),As()));let lt=fi({r,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let N=r.uniform(0,6.283),j=r.uniform(0,22);return[j*Math.cos(N),j*Math.sin(N),r.uniform(.8,7)]},move:()=>{let N=r.uniform(-1.5,1.5);return[N,N*.5,r.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(lt.obj);let vt=hi({th:e,W:t?512:1024,bodies:[pn(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(vt.group),{group:a,floor:.62,update(N){vt.update(N);for(let k of L){let Z=mn(N,k.P/2,.15,1,k.flip),rt=0;for(let W of k.blinks)Math.abs(N%3600-W)<3&&(rt=1-Math.abs(N%3600-W)/3);k.mesh.morphTargetInfluences[0]=Z,k.mesh.morphTargetInfluences[1]=rt,k.eyes&&(k.eyes.morphTargetInfluences[0]=Z,k.eyes.morphTargetInfluences[1]=rt)}nt.forEach((k,Z)=>{k.morphTargetInfluences[0]=mn(N,45,0,1,Z)});let j=mn(N,450);Mt.rotation.set(.03*j*.1,.02*j*.1,0),lt.update(N)},key:{dir:pn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){vt.dispose(),di(a)}}}var Bh={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},Rs=2.3;function nd(i,t){let e=i==="night"?Bh.NIGHT:i==="day"?{...pi(Bh.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:Bh.SUNSET,n=e.emit,s=un(7),r=new ie,o=[pn(e.body_az,e.body_el),pn(e.body_az+180,e.body_el)],a=Hi(e,o),c=(N,j)=>Ot((Math.hypot(N,j)-13)/10)*.25*(Math.sin(N*.22)+Math.cos(j*.27)+.5*Math.sin((N+j)*.5)),l=(N,j)=>{let k=Ot((Math.hypot(N,j)-10)/50),Z=.9+.2*(Math.sin(N*.5)*Math.cos(j*.5)*.5+.5),rt=Zt(e.g_near,e.g_far,k);return rt=Zt(rt,e.g_alt,Ot((We(N*.09+3,j*.09-7,3)-.45)*2.2)*.6),de(rt,Z*(.9+.25*Ie(N*1.7,j*1.7)))},h=(N,j,k)=>Zt(de(N,(.6+.4*Ot(j)**.7)*(.88+.24*k)),e.moss,Ot(1-j*3)*.55);r.add(new Tt(vr([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),pe({flat:!1})));{let N=t?96:144,j=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],k=j.map(S=>Array.from({length:N},(U,B)=>{let F=2*Math.PI*B/N,D=S*Math.cos(F),V=S*Math.sin(F),q=1;for(let Q of[le(e.body_az),le(e.body_az+180)]){let X=Math.abs(((F-Q+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);q*=1-.8*Math.exp(-((X/le(17))**2))}let E=(4+42*xe(50,102,S))*(1-.65*xe(112,134,S))*(.12+1.15*$f(D*.032,V*.032,5))*(.55+.9*We(D*.01+5,V*.01-3,3))*q+1.2*We(D*.09,V*.09,3)*xe(46,60,S);return E*=xe(45.5,52,S),[D,V,c(D,V)+.03+E]})),Z=new Jt,rt=[],W=o;j.forEach((S,U)=>{rt.push([]);for(let B=0;B<N;B++){let F=k[U][B],D=2*Math.PI*B/N,V=k[U][(B+1)%N],q=k[U][(B-1+N)%N],O=k[Math.min(U+1,j.length-1)][B],E=k[Math.max(U-1,0)][B],Q=new R(O[0]-E[0],O[1]-E[1],O[2]-E[2]).cross(new R(V[0]-q[0],V[1]-q[1],V[2]-q[2])).normalize();Q.z<0&&Q.multiplyScalar(-1);let X=F[2]/45,G=1-Q.z,Y=We(F[0]*.12,F[1]*.12,3),K=de(Zt(e.rock_lo,e.rock_hi,Ot(Ot(X)**.7+.25*(Y-.5))),.8+.4*Y);K=Zt(K,e.veg,Ot((9-F[2])/9)*Ot(1-G*2.4)*.85),K=Zt(K,e.snow,xe(.55,.78,X+.22*(We(F[0]*.07,F[1]*.07,3)-.5))*Ot(1-G*1.7));let ot=0;for(let H of W)ot=Math.max(ot,Ot(Q.x*H[0]+Q.y*H[1]+Q.z*H[2]));ot=ot**1.2,K=[K[0]*(e.amb[0]+e.light_col[0]*ot*1.6),K[1]*(e.amb[1]+e.light_col[1]*ot*1.6),K[2]*(e.amb[2]+e.light_col[2]*ot*1.6)];let P=a(Math.cos(D)*Math.cos(.02),Math.sin(D)*Math.cos(.02),Math.sin(.02)).map(H=>ns(H,e.exposure)*e.haze_gain),b=Math.min(.97,Math.max(0,1-Math.exp(-(S-40)/e.haze_dist)+.5*Math.exp(-Math.max(F[2],0)/9)*xe(55,100,S)));K=Zt(K,P,b),K=Zt(l(F[0],F[1]),K,xe(46,58,S)).map(Ot),rt[U].push(Z.v(F,K))}});for(let S=0;S<j.length-1;S++)for(let U=0;U<N;U++){let B=(U+1)%N;Z.f(rt[S][U],rt[S][B],rt[S+1][B],rt[S+1][U])}let w=li({fog:!1,gain:.95});r.add(new Tt(Z.geo(),w))}let u=new Jt,f=new Jt,m=new Jt,g=new Jt,_=new Jt,d=new Jt,p=(N,j,k,Z,rt,W=!0)=>{let w=j.map(([S,U])=>Array.from({length:k},(B,F)=>{let D=[Z[0]+U*Math.cos(2*Math.PI*F/k),Z[1]+U*Math.sin(2*Math.PI*F/k),Z[2]+S];return N.v(D,rt(D))}));for(let S=0;S<w.length-1;S++)for(let U=0;U<k;U++){let B=(U+1)%k;N.f(w[S][U],w[S][B],w[S+1][B],w[S+1][U])}if(W){let S=w[w.length-1].map(U=>N.v(N.pos.slice(U*3,U*3+3),N.col.slice(U*3,U*3+3)));N.f(...S)}},y=(N,j,k,Z,rt,W,w=1,S=[1,1,1])=>{let U=Array.from({length:Z},(B,F)=>{let D=2*Math.PI*F/Z;return Array.from({length:rt},(V,q)=>{let O=2*Math.PI*q/rt,E=j+k*Math.cos(O);return N.v([E*Math.cos(D),E*Math.sin(D),W+k*w*Math.sin(O)],S)})});for(let B=0;B<Z;B++)for(let F=0;F<rt;F++){let D=(B+1)%Z,V=(F+1)%rt;N.f(U[B][F],U[D][F],U[D][V],U[B][V])}},x=(N,j,k,Z,rt,W=0)=>{let w=Math.cos(Z),S=Math.sin(Z),U=new Map,B=(D,V,q)=>{let O=`${D},${V},${q}`,E=U.get(O);E||(E=W?[s.uniform(-.03,.03),s.uniform(-.03,.03),s.uniform(-.02,.02)]:[0,0,0],U.set(O,E));let Q=D*k[0]+E[0],X=V*k[1]+E[1],G=q*k[2]+E[2];return N.v([j[0]+Q*w-X*S,j[1]+Q*S+X*w,j[2]+G],rt([Q,X,G],q+.5))},F=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let D of F)N.f(...D.map(([V,q,O])=>B(V,q,O)))},M=(N,j,k,Z)=>{let rt=s.uniform(0,50);x(u,N,j,k,(W,w)=>h(Z,w,Ie(W[0]*2.5+rt,W[1]*2.5+W[2]*1.7)),1)},L=(N,j,k,Z)=>{let rt=s.uniform(0,50);p(u,[[0,N],[k,N]],48,[0,0,j],W=>h(Z,(W[2]-j)/k,Ie(W[0]*1.2+rt,W[1]*1.2)))};L(8.2,0,1.4,e.stone[0]),L(7.2,1.4,.5,e.stone[3]),L(6.6,1.9,Rs-1.9,e.stone[0]),y(f,6.6,.18,48,6,Rs,1,e.stone[3]);let T=28;for(let N=0;N<T;N++){let j=2*Math.PI*N/T,k=1.4+s.uniform(-.08,.08);M([8.45*Math.cos(j),8.45*Math.sin(j),k/2],[1,1.95,k],j,s.choice(e.stone))}for(let[N,j]of[[9.8,.9],[11,.55],[12.2,.3]])for(let k=0;k<14;k++){if(s.random()<.2)continue;let Z=2*Math.PI*k/14+s.uniform(-.08,.08);M([N*Math.cos(Z),N*Math.sin(Z),j/2],[1.3,2.6,j],Z+s.uniform(-.1,.1),s.choice(e.stone))}for(let N of[5.8,4.2,2.6,1.2])y(g,N,.08,48,6,Rs+.02,.6);for(let N=0;N<16;N++){let j=2*Math.PI*N/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(j),5*Math.sin(j),Rs],()=>[1,1,1])}let C=[],z=Za(),tt=li({gain:1.05}),v=[];for(let N of[3,10,17,24]){let j=2*Math.PI*N/T,k=8.45*Math.cos(j),Z=8.45*Math.sin(j),rt=1.4;p(f,[[0,.28],[.9,.28]],12,[k,Z,rt],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[k,Z,rt+.9],()=>e.stone[0]);let W=new Tt(z,tt);W.position.set(k,Z,rt+1.25),r.add(W),C.push({m:W,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),v.push({pos:[k,Z,rt+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let A=(N,j,k,Z=1.8,rt=1.2)=>{let W=le(N),w=j*Math.cos(W),S=j*Math.sin(W),U=c(w,S)-.4,B=W-Math.PI/2,F=s.choice(e.stone),D=s.uniform(0,50),V=new Map,q=Math.cos(B),O=Math.sin(B),E=(Y,K,ot)=>{let P=`${Y},${K},${ot}`,b=V.get(P);b||(b=[s.uniform(-.07,.07),s.uniform(-.07,.07),s.uniform(-.05,.05)],V.set(P,b));let H=Y*Z,$=K*rt,at=(ot+.5)*k;if(at>k*.5){let _t=1-.18*((at-k*.5)/(k*.5));H*=_t,$*=_t}H+=b[0],$+=b[1];let J=at+b[2],bt=.5*Ie(H*2.2+D,J*.7)+.5*Ie(H*6+D,J*.25);return u.v([w+H*q-$*O,S+H*O+$*q,U+J],h(F,J/k,bt))},Q=4,X=Y=>-.5+Y/Q,G=Y=>{for(let K=0;K<Q;K++)for(let ot=0;ot<Q;ot++)u.f(E(...Y(K,ot)),E(...Y(K+1,ot)),E(...Y(K+1,ot+1)),E(...Y(K,ot+1)))};G((Y,K)=>[X(Y),-.5,X(K)]),G((Y,K)=>[X(K),.5,X(Y)]),G((Y,K)=>[-.5,X(K),X(Y)]),G((Y,K)=>[.5,X(Y),X(K)]),G((Y,K)=>[X(K),X(Y),.5]),G((Y,K)=>[X(Y),X(K),-.5]);for(let[Y,K,ot]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let b=-rt/2-.02,H=k*Y;x(d,[w+0*q-b*O,S+0*O+b*q,U+H],[K,.1,ot],B,()=>[1,1,1])}};for(let[N,j,k]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])A(N,j,k),A(N+180,j,k);for(let N=0;N<12;N++){let j=le(s.choice([s.uniform(195,245),s.uniform(295,345)])),k=s.uniform(13,18),Z=s.uniform(1,2.2),rt=s.choice(e.stone),W=s.uniform(0,50),w=k*Math.cos(j),S=k*Math.sin(j),U=s.uniform(0,6.28),B=new Xe(1,1),F=B.attributes.position,D=new se().compose(new R(w,S,c(w,S)+.3*Z),new tn().setFromAxisAngle(new R(0,0,1),U),new R(Z,Z*.9,Z*.7)),V=new Map;for(let q=0;q<F.count;q+=3)u.f(...[0,1,2].map(O=>{let E=F.getX(q+O),Q=F.getY(q+O),X=F.getZ(q+O),G=`${E.toFixed(3)},${Q.toFixed(3)},${X.toFixed(3)}`,Y=V.get(G);Y===void 0&&(Y=s.uniform(.8,1.2),V.set(G,Y));let K=new R(E*Y,Q*Y,X*Y).applyMatrix4(D);return u.v([K.x,K.y,K.z],h(rt,(X+1)/2,Ie(E*2+W,Q*2+X)))}));B.dispose()}r.add(new Tt(u.geo(),pe())),r.add(new Tt(f.geo(),pe({flat:!1})),new Tt(m.geo(),pe()));let nt=new Tt(g.geo(),Sn([1,.92,.75],.75*Math.min(1.6,n)));nt.name="centre-pattern",r.add(nt,new Tt(_.geo(),Sn([1,.92,.75],.75*Math.min(1.6,n)))),r.add(new Tt(d.geo(),Sn([1,.3,.1],1.1*Math.min(1.4,n))));let st=le(e.body_az),ct=pe({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),Mt=[0,1].map(()=>{let N=e.grass_tip[0],j=-1,k=br({r:s,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:rt=>{let W=1-.55*Ot((rt-13)/34);return[.03*W,.1*W,.1*W]},tip:(rt,W)=>(rt!==j&&(j=rt,N=Zt(e.grass_tip[0],e.grass_tip[1],s.random())),de(Zt(N,e.grass_rim,.3*Math.abs(Math.cos(W-st))*(i==="night"?.5:1)),1-.55*Ot((rt-13)/34)))}),Z=new Tt(k,ct);return Z.morphTargetInfluences=[0],r.add(Z),Z});{let N=new Jt;for(let j=0;j<(t?40:70);j++){let k=14+22*s.random(),Z=s.uniform(0,2*Math.PI),rt=k*Math.cos(Z),W=k*Math.sin(Z),w=c(rt,W),S=s.uniform(.35,.7),U=[rt+s.uniform(-.06,.06),W+s.uniform(-.06,.06),w+S];N.f(N.v([rt-.012,W,w],[.02,.07,.05]),N.v([rt+.012,W,w],[.02,.07,.05]),N.v([U[0]+.012,U[1],U[2]],[.08,.25,.12]),N.v([U[0]-.012,U[1],U[2]],[.08,.25,.12]));let B=s.choice(e.flower),F=N.v([U[0],U[1],U[2]+.02],[1,.9,.5]),D=Array.from({length:6},(V,q)=>{let O=2*Math.PI*q/6;return N.v([U[0]+.05*Math.cos(O),U[1]+.05*Math.sin(O),U[2]+.025],B)});for(let V=0;V<6;V++)N.f(F,D[V],D[(V+1)%6])}r.add(new Tt(N.geo(),pe({emit:e.flower_emit,double:!0})))}let lt=fi({r:s,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let N=s.uniform(0,6.283),j=s.uniform(4,26);return[j*Math.cos(N),j*Math.sin(N),s.uniform(1.5,10)]},move:()=>[s.uniform(-1,1),0,s.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&r.add(lt.obj);let vt=hi({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return r.add(vt.group),{group:r,floor:Rs,update(N){vt.update(N),Mt.forEach((W,w)=>{W.morphTargetInfluences[0]=mn(N,45,0,1,w)});let j=N%3600,k=Math.floor(j/8),Z=(j-k*8)/8,rt=Z*Z*(3-2*Z);for(let W of C){let w=W.keys[k%450],S=W.keys[(k+1)%450];W.m.scale.set(w[0]+(S[0]-w[0])*rt,w[1]+(S[1]-w[1])*rt,w[2]+(S[2]-w[2])*rt)}lt.update(N)},key:{dir:pn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,Rs+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,Rs+.5],color:[1,.5,.2],intensity:.35,dist:8},...v],dispose(){vt.dispose(),di(r)}}}var zh={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function id(i,t){let e=i==="night"?zh.NIGHT:i==="day"?{...pi(zh.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:zh.SUNSET,n=e.emit,s=n*.75,r=un(21),o=un(77),a=new ie,c=[pn(e.body_az,e.body_el)],l=Hi(e,c),h=le(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(F=>ns(F,e.exposure)),f=e.stone,m=hi({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(F,D)=>{let V=Math.hypot(F,D),q=Zt(e.water_lo,e.water_hi,Ot(We(F*.05+2,D*.05,3)*1.2-.15)),O=Math.exp(-(((V-9.9)/3)**2))*.12*.75;return q=[q[0]+e.glow_col[0]*O,q[1]+e.glow_col[1]*O,q[2]+e.glow_col[2]*O],Zt(q,de(u,.5),xe(32,150,V)**1.2)},_;{let F=new Jt(!1,2),D=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],V=t?48:72,q=D.map(E=>Array.from({length:V},(Q,X)=>{let G=E*Math.cos(2*Math.PI*X/V),Y=E*Math.sin(2*Math.PI*X/V),K=xe(9,13,E)*Math.exp(-E/90);return F.v([G,Y,0],g(G,Y),[[0,0,.06*Math.sin(.45*G+.33*Y)*K],[0,0,.06*Math.sin(.38*G-.41*Y+2)*K]])}));for(let E=0;E<D.length-1;E++)for(let Q=0;Q<V;Q++){let X=(Q+1)%V;F.f(q[E][Q],q[E+1][Q],q[E+1][X],q[E][X])}let O=new dr({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:ah});_=new Tt(F.geo(),O),_.morphTargetInfluences=[0,0],a.add(_)}let d=[];[.35,.9,1.7].slice(0,t?2:3).forEach((F,D)=>{let V=new Jt(!0),q=[10.5,12,15,19,24,30,38,48,60],O=48,E=q.map(G=>Array.from({length:O},(Y,K)=>{let ot=2*Math.PI*K/O,P=G*Math.cos(ot),b=G*Math.sin(ot),H=e.mist_a*Ot((We(P*.07+D*9,b*.07,3)-.38)*2.6)*xe(0,3,G-10.5)*xe(0,15,60-G);return V.v([P,b,F+.12*Math.sin(.3*P+D)],[...e.mist_col,H])}));for(let G=0;G<q.length-1;G++)for(let Y=0;Y<O;Y++){let K=(Y+1)%O;V.f(E[G][Y],E[G+1][Y],E[G+1][K],E[G][K])}let Q=new Ke({vertexColors:!0,transparent:!0,depthWrite:!1,side:Re,toneMapped:!1});Q.color.setScalar(1+.7);let X=new Tt(V.geo(),Q);X.renderOrder=3,a.add(X),d.push({m:X,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(is({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:s}));let p=new Jt,y=new Jt,x=[];for(let F of[45,135,225,315]){let D=le(F),V=o.uniform(1.6,2.6),q=o.choice(f),O=o.uniform(0,50),E=9.35*Math.cos(D),Q=9.35*Math.sin(D),X=10,G=.3,Y=[],K=[],ot=Array.from({length:X},()=>G+V-o.uniform(0,.45));for(let ft=0;ft<X;ft++){let Lt=2*Math.PI*ft/X,dt=o.uniform(-.05,.05),At=o.uniform(-.05,.05),Bt=o.uniform(-.05,.05),Ht=o.uniform(-.05,.05),Rt=[E+.62*Math.cos(Lt)+dt,Q+.62*Math.sin(Lt)+At,G],Ct=[E+.5*Math.cos(Lt)+Bt,Q+.5*Math.sin(Lt)+Ht,ot[ft]];Y.push(p.v(Rt,ui(q,0,Rt[0]-E,Rt[1]-Q,O,e.moss))),K.push(p.v(Ct,ui(q,(Ct[2]-G)/V,Ct[0]-E,Ct[1]-Q,O,e.moss)))}for(let ft=0;ft<X;ft++){let Lt=(ft+1)%X;p.f(Y[ft],Y[Lt],K[Lt],K[ft])}p.f(...K);let P=E-.55*Math.cos(D),b=Q-.55*Math.sin(D),H=D-Math.PI/2,$=Math.cos(H),at=Math.sin(H),J=.06,bt=V*.45/2,_t=.3+V*.5;y.f(...[[-J,-.03,-bt],[J,-.03,-bt],[J,-.03,bt],[-J,-.03,bt]].map(([ft,Lt,dt])=>y.v([P+ft*$-Lt*at,b+ft*at+Lt*$,_t+dt],[1,1,1]))),x.push([E,Q,.3+V])}let M=(F,D,V,q,O,E,Q,X)=>{let G=o.uniform(0,50),Y=Math.cos(Q),K=Math.sin(Q),ot=new Map,P=(b,H,$)=>{let at=b*q+o.uniform(-.03,.03),J=H*O+o.uniform(-.03,.03),bt=$*E;return p.v([F+at*Y-J*K,D+at*K+J*Y,V+bt],ui(X,$+.5,at,J,G,e.moss))};for(let b of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...b.map(([H,$,at])=>P(H,$,at)))};for(let F of[270,90])for(let D=0;D<5;D++){let V=11+D*1.7+o.uniform(-.2,.2),q=le(F+o.uniform(-5,5)),O=o.uniform(1.2,1.7);M(V*Math.cos(q),V*Math.sin(q),-.13,O,O*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(f))}for(let F=0;F<12;F++){let D=o.uniform(0,2*Math.PI);Math.min(Math.abs(go(D,Math.PI/2)),Math.abs(go(D,3*Math.PI/2)))<.18&&(D+=.5);let V=o.uniform(10.5,15),q=o.uniform(.7,1.8),O=o.choice(f),E=o.uniform(0,50),Q=o.uniform(0,6.28),X=new Xe(1,1),G=X.attributes.position,Y=new se().compose(new R(V*Math.cos(D),V*Math.sin(D),.05),new tn().setFromAxisAngle(new R(0,0,1),Q),new R(q,q*.9,q*.7));for(let K=0;K<G.count;K+=3)p.f(...[0,1,2].map(ot=>{let P=new R(G.getX(K+ot),G.getY(K+ot),G.getZ(K+ot)),b=P.z;return P.applyMatrix4(Y),p.v([P.x,P.y,P.z],ui(O,(b+1)/2,G.getX(K+ot),G.getY(K+ot),E,e.moss))}));X.dispose()}a.add(new Tt(p.geo(),pe()),new Tt(y.geo(),Sn(e.rune_col,1.4*s)));let L=(()=>{let F=new R(.8,.6,0).normalize();return[F.x,F.y,0]})(),T=le(e.body_az),C=[Math.cos(T),Math.sin(T)],z=[],tt=(F,D,V)=>{for(let q=0;q<300;q++){let O=r.uniform(0,360);if(V&&O>245&&O<295)continue;let E=r.uniform(F,D),Q=E*Math.cos(le(O)),X=E*Math.sin(le(O));if(z.every(([G,Y])=>Math.hypot(Q-G,X-Y)>6))return z.push([Q,X]),[Q,X]}return null},v=pe({morph:!0}),A=[],nt=[],st=[],ct=t?6:9,Mt=t?4:7;for(let F=0;F<ct+Mt;F++){let D=F<ct,V=D?tt(16,32,!0):tt(38,62,!1);if(!V)continue;let q=D?r.uniform(9,15):r.uniform(16,24),O=D?r.uniform(.28,.42):r.uniform(.5,.8),E=new Tt(lt(V[0],V[1],q,O),v);E.morphTargetInfluences=[0],a.add(E),A.push({m:E,P:r.choice([100,120,150,180,200]),flip:r.int(0,1)}),nt.push(V),st.push([V[0],V[1],2.2*O+.7])}function lt(F,D,V,q){let O=new Jt(!1,1),E=new R(-F,-D,0).normalize(),Q=r.uniform(.6,1.4),X=new R(r.uniform(-1,1),r.uniform(-1,1),0).normalize().multiplyScalar(r.uniform(.02,.07)),G=r.uniform(0,6.28),Y=ft=>new R(F+X.x*ft+.25*Math.sin(.5*ft+G),D+X.y*ft+.25*Math.cos(.4*ft+G),ft),K=ft=>{let Lt=Math.max(ft,0);return q*(1-.55*Ot(Lt/V))*(1+.7*Math.exp(-Lt/.8))},ot=(ft,Lt,dt=0)=>{let At=Q*Ot(Math.max(ft.z,0)/V)**2+dt;return O.v([ft.x,ft.y,ft.z],Lt,[[L[0]*At,L[1]*At,0]])},P=(ft,Lt)=>{let dt=new R(ft.x,ft.y,0);dt.lengthSq()>1e-12&&dt.normalize();let At=Zt(e.bark_dark,e.bark_lit,.6*Math.max(0,dt.x*E.x+dt.y*E.y));return At=Zt(At,e.bark_rim,Ot(e.bark_rim_k*Math.max(0,dt.x*C[0]+dt.y*C[1])*(1-.4*Ot(Lt/V)))),Zt(At,e.moss,Ot(1-Lt/1.8)*.6*Ie(ft.x*3+F,Lt*.8+D))},b=(ft,Lt,dt,At,Bt)=>{let Ht=ft.length,Rt=ft.map((jt,it)=>ft[Math.min(it+1,Ht-1)].clone().sub(ft[Math.max(it-1,0)]).normalize()),Ct=Rt[0].clone().cross(Math.abs(Rt[0].z)>.9?new R(1,0,0):new R(0,0,1)).normalize(),kt=ft.map((jt,it)=>{let Ut=Rt[it];Ct=Ct.clone().addScaledVector(Ut,-Ct.dot(Ut)).normalize();let yt=Ut.clone().cross(Ct);return Array.from({length:dt},(wt,Vt)=>{let Yt=2*Math.PI*Vt/dt,he=Ct.clone().multiplyScalar(Math.cos(Yt)).addScaledVector(yt,Math.sin(Yt));return ot(jt.clone().addScaledVector(he,Lt[it]),At(it,he),Bt?Bt(it):0)})});for(let jt=0;jt<Ht-1;jt++)for(let it=0;it<dt;it++){let Ut=(it+1)%dt;O.f(kt[jt][it],kt[jt][Ut],kt[jt+1][Ut],kt[jt+1][it])}},H=11,$=8,at=Array.from({length:H},(ft,Lt)=>{let dt=-.4+(V+.4)*Lt/(H-1),At=Y(dt);return Array.from({length:$},(Bt,Ht)=>{let Rt=2*Math.PI*Ht/$,Ct=new R(Math.cos(Rt),Math.sin(Rt),0);return ot(At.clone().addScaledVector(Ct,K(dt)*(1+.06*Math.sin(3*Rt+dt))),P(Ct,dt))})});for(let ft=0;ft<H-1;ft++)for(let Lt=0;Lt<$;Lt++){let dt=(Lt+1)%$;O.f(at[ft][Lt],at[ft][dt],at[ft+1][dt],at[ft+1][Lt])}O.f(...at[H-1]);let J=[],bt=r.int(3,5);for(let ft=0;ft<bt;ft++){let Lt=V*r.uniform(.42,.9),dt=r.uniform(0,6.28),At=new R(Math.cos(dt),Math.sin(dt),0),Bt=Y(Lt).addScaledVector(At,K(Lt)*.6),Ht=At.clone().add(new R(0,0,r.uniform(.5,1.1))).normalize(),Rt=r.uniform(2,5)*(V/12)*(1.1-.5*Lt/V),Ct=Array.from({length:6},(jt,it)=>Bt.clone().addScaledVector(Ht,Rt*(it/5)).add(new R(0,0,-.12*Rt*(it/5)**2))),kt=K(Lt)*.4;b(Ct,Ct.map((jt,it)=>kt*(1-.88*it/5)+.01),5,(jt,it)=>P(it,Ct[jt].z)),J.push(...Ct.slice(2,5))}let _t=r.int(4,8);for(let ft=0;ft<_t;ft++){let Lt=r.choice(J),dt=r.uniform(.8,2.2),At=r.uniform(0,6.28),Bt=Array.from({length:6},(Ht,Rt)=>Lt.clone().add(new R(.06*Math.sin(At+Rt)*Rt/5,.06*Math.cos(At+Rt*.8)*Rt/5,-dt*Rt/5)));b(Bt,Bt.map((Ht,Rt)=>.022*(1-.8*Rt/5)+.003),3,Ht=>Zt(e.vine_a,e.vine_b,Ht/5),Ht=>.45*(Ht/5)**1.5)}return O.geo()}{let F=new Jt,D=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[V,q,O]of st){let E=D.map(([X,G])=>Array.from({length:14},(Y,K)=>{let ot=2*Math.PI*K/14,P=O*X*(1+.12*Math.sin(3*ot+V)),b=[V+P*Math.cos(ot),q+P*Math.sin(ot),G+.05*Math.sin(5*ot+q)];return F.v(b,Zt(e.mud,e.moss,Ot(.3+.6*Ie(b[0]*.8,b[1]*.8))))})),Q=F.v([V,q,.52],e.moss);for(let X=0;X<E.length-1;X++)for(let G=0;G<14;G++){let Y=(G+1)%14;F.f(E[X][G],E[X][Y],E[X+1][Y],E[X+1][G])}for(let X=0;X<14;X++)F.f(Q,E[E.length-1][X],E[E.length-1][(X+1)%14])}a.add(new Tt(F.geo(),pe()))}let vt=pe({morph:!0,double:!0}),N=[0,1].map(F=>{let D=new Jt(!1,1),V=(t?160:300)/2,q=(X,G,Y,K,ot)=>Array.from({length:Y},(P,b)=>{let H=2*Math.PI*b/Y;return D.v([X[0]+G*Math.cos(H),X[1]+G*Math.sin(H),X[2]],K,[[L[0]*ot,L[1]*ot,0]])}),O=(X,G)=>{for(let Y=0;Y<X.length;Y++){let K=(Y+1)%X.length;D.f(X[Y],X[K],G[K],G[Y])}},E=0;for(;E<V;){let X,G;if(nt.length&&o.random()<.6){let[J,bt]=o.choice(nt),_t=o.uniform(0,6.283),ft=o.uniform(1,4.5);X=J+ft*Math.cos(_t),G=bt+ft*Math.sin(_t)}else{let J=o.uniform(0,6.283),bt=o.uniform(11.5,48);X=bt*Math.cos(J),G=bt*Math.sin(J)}if(Math.hypot(X,G)<11)continue;E++;let Y=o.uniform(1.2,3),K=o.uniform(-.25,.25)*Y*.5,ot=o.uniform(-.25,.25)*Y*.5,P=J=>[X+K*J*J,G+ot*J*J,-.3+(Y+.3)*J],b=J=>.12*Y*J*J,H=[0,.37,.74].map(J=>q(P(J),.018-.008*J,3,e.reed,b(J)));O(H[0],H[1]),O(H[1],H[2]);let $=[[.75,.012],[.83,.055],[.92,.045]].map(([J,bt])=>q(P(J),bt,5,e.cat,b(J)));O($[0],$[1]),O($[1],$[2]);let at=D.v(P(1),e.cat,[[L[0]*b(1),L[1]*b(1),0]]);for(let J=0;J<5;J++)D.f($[2][J],$[2][(J+1)%5],at)}let Q=new Tt(D.geo(),vt);return Q.morphTargetInfluences=[0],a.add(Q),Q});{let F=new Jt;for(let D=0;D<(t?36:60);D++){let V=o.uniform(0,6.283),q=o.uniform(11.5,44),O=q*Math.cos(V),E=q*Math.sin(V),Q=o.uniform(.3,.7),X=o.int(0,11),G=o.choice(e.lily),Y=F.v([O,E,.04],G),K=Array.from({length:12},(ot,P)=>{let b=2*Math.PI*P/12;return F.v([O+Q*Math.cos(b),E+Q*.9*Math.sin(b),.04],de(G,.8))});for(let ot=0;ot<12;ot++)ot!==X&&F.f(Y,K[ot],K[(ot+1)%12])}a.add(new Tt(F.geo(),pe({double:!0})))}let j=new Jt(!1,1),k=new Jt;for(let F=0;F<8;F++){let D=o.uniform(0,6.283),V=o.uniform(12,36),q=o.uniform(0,6.283),O=new R(V*Math.cos(D),V*Math.sin(D),.05),E=new se().makeRotationZ(q),Q=new Xe(1,1),X=Q.attributes.position,G=new se().makeTranslation(O.x,O.y,O.z).multiply(E).multiply(new se().makeScale(.22,.3,.13));for(let Y=0;Y<X.count;Y+=3)k.f(...[0,1,2].map(K=>{let ot=new R(X.getX(Y+K),X.getY(Y+K),X.getZ(Y+K)).applyMatrix4(G);return k.v([ot.x,ot.y,ot.z],[.008,.012,.009])}));Q.dispose();for(let Y of[-1,1]){let K=O.clone().add(new R(Y*.09,.12,.12).applyMatrix4(E)),P=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(b=>j.v([K.x+b[0]*.035,K.y+b[1]*.035,K.z+b[2]*.035],[1,1,1],[[0,0,b[2]*.035*(.08-1)]]));for(let[b,H]of[[0,2],[2,1],[1,3],[3,0]])j.f(P[b],P[H],P[4]),j.f(P[H],P[b],P[5])}}a.add(new Tt(k.geo(),pe()));let Z=new Tt(j.geo(),Sn(e.eye_col,1.8));Z.morphTargetInfluences=[0],a.add(Z);let rt=Array.from({length:Math.floor(3480/20)},(F,D)=>60+D*20),W=[];for(let F=0;F<6;F++)W.push(rt.splice(o.int(0,rt.length-1),1)[0]);{let F=new Jt;[[70,46,14,22],[95,58,18,30]].forEach(([D,V,q,O],E)=>{let Q=Zt(e.back_col,u,.55+.2*E);for(let X=0;X<V;X++){let G=2*Math.PI*(X+r.uniform(-.4,.4))/V+E*.5,Y=[D*Math.cos(G),D*Math.sin(G)],K=[-Math.sin(G),Math.cos(G)],ot=r.uniform(q,O),P=r.uniform(.35,.9)*(1+.5*E),b=r.uniform(0,6.28),H=r.uniform(-.06,.06),$=J=>{let bt=-2+(ot+2)*J,_t=Math.sin(J*3+b)*.5+H*bt;return[Y[0]+K[0]*_t,Y[1]+K[1]*_t,bt]},at=Array.from({length:6},(J,bt)=>{let _t=bt/5,ft=P*(1-.5*_t),Lt=Zt(Q,u,Ot(_t*_t*.9)),dt=$(_t);return[F.v([dt[0]-K[0]*ft/2,dt[1]-K[1]*ft/2,dt[2]],Lt),F.v([dt[0]+K[0]*ft/2,dt[1]+K[1]*ft/2,dt[2]],Lt)]});for(let J=0;J<5;J++)F.f(at[J][0],at[J][1],at[J+1][1],at[J+1][0]);for(let J of[-1,1]){let bt=$(r.uniform(.55,.8)),_t=[bt[0]+K[0]*J*ot*.16,bt[1]+K[1]*J*ot*.16,bt[2]+ot*.12],ft=Zt(Q,u,.6);F.f(F.v([bt[0],bt[1],bt[2]-.1],ft),F.v([bt[0],bt[1],bt[2]+.1],ft),F.v([_t[0],_t[1],_t[2]+.04],ft),F.v([_t[0],_t[1],_t[2]-.04],ft))}}}),a.add(new Tt(F.geo(),li({fog:!1})))}let w=[];for(let F=0;F<Math.round(14*e.orb_k*(t?.6:1));F++){let D=o.uniform(0,6.283),V=o.uniform(12,42);w.push({p:[V*Math.cos(D),V*Math.sin(D),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[F,D,V]of x)w.push({p:[F,D,V+.9],k:1.4,amp:o.uniform(.15,.4)});let S=Ya({list:w,col:e.orb_col,gain:1.2});a.add(S.group);let U=fi({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let F=o.uniform(0,6.283),D=o.uniform(4,44);return[D*Math.cos(F),D*Math.sin(F),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(U.obj);let B=new Jt(!0);return Er(B,9.4,.7,(F,D)=>{let V=Math.hypot(F,D);return V<.01?1:xe(0,3,9.4-V)*(.7+.3*Ie(V*.4,Math.atan2(D,F)*6.4))},e.wash_col,.28*.5),a.add(new Tt(B.geo(),As())),{group:a,floor:.6,update(F){m.update(F);for(let q of A)q.m.morphTargetInfluences[0]=mn(F,q.P/2,.15,1,q.flip);N.forEach((q,O)=>{q.morphTargetInfluences[0]=mn(F,60,0,1,O)}),_.morphTargetInfluences[0]=mn(F,90,0,1,0),_.morphTargetInfluences[1]=mn(F,90,0,1,1);let D=Math.sin(F%3600/3600*Math.PI);for(let q of d)q.m.rotation.z=q.s*D;let V=0;for(let q of W)Math.abs(F%3600-q)<3&&(V=1-Math.abs(F%3600-q)/3);Z.morphTargetInfluences[0]=V,S.update(F),U.update(F)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...x.map(F=>({pos:[F[0],F[1],F[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),di(a)}}}var kh={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},vn=24,gy=vn+1.6,_y=160;function sd(i,t){let e=i==="night"?kh.NIGHT:i==="day"?{...pi(kh.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:kh.SUNSET,n=e.emit,s=n*.75,r=un(31),o=un(55),a=new ie,c=[pn(e.body_az,e.body_el)],l=Hi(e,c),h=le(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(k=>ns(k,e.exposure)),f=le(e.body_az),m=(()=>{let k=new R(.8,.6,0).normalize();return[k.x,k.y,0]})(),g=e.stone,_=hi({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let d=k=>gy*(1+.25*(1-Math.exp(k/60))),p=(k,Z)=>.12*Math.sin(k*.33)*Math.cos(Z*.29)*xe(8,14,Math.hypot(k,Z)),y=(k,Z)=>Zt(Zt(e.earth_a,e.earth_b,Ot(We(k*.12+5,Z*.12-3,3)*1.4-.2)),e.moss,Ot((Ie(k*.4,Z*.4)-.62)*3)*.6);{let k=new Jt,Z=[8,10,12,14,16,18,20,22,vn-1,vn,vn+.6,vn+1.2,vn+1.6],rt={[vn+.6]:.3,[vn+1.2]:.15,[vn+1.6]:-.4},W=72,w=Z.map(S=>Array.from({length:W},(U,B)=>{let F=2*Math.PI*B/W,D=S*Math.cos(F),V=S*Math.sin(F);return k.v([D,V,rt[S]??p(D,V)],S<=vn+.01?y(D,V):Zt(e.bark,e.moss,.5+.3*Ie(D*.5,V*.5)))}));for(let S=0;S<Z.length-1;S++)for(let U=0;U<W;U++){let B=(U+1)%W;k.f(w[S][U],w[S+1][U],w[S+1][B],w[S][B])}a.add(new Tt(k.geo(),pe({flat:!1})))}{let k=new Jt,Z=t?28:40,rt=t?48:72,W=Array.from({length:Z},(w,S)=>{let U=-.4-_y*(S/(Z-1))**1.6;return Array.from({length:rt},(B,F)=>{let D=2*Math.PI*F/rt,V=d(U)*(1+.04*Math.sin(14*D+.8*Math.sin(.05*U))+.025*Math.sin(5*D+.02*U)),q=Math.sin(14*D+.8*Math.sin(.05*U)),O=Zt(e.bark,e.bark_hi,Ot(.5+.5*q)*.5);O=Zt(O,e.bark_hi,.4*Math.max(0,Math.cos(D-f))),O=Zt(O,e.moss,Ot(1+U/25)*Ot((Ie(D*3,U*.15)-.4)*2.5)*.8);let E=Math.abs(Math.sin(7*D+1.5*Math.sin(.04*U+3*D)));return O=Zt(O,e.vein,Ot(1-E*7)*(.4+.6*Ie(U*.05,D*2))*.9),k.v([V*Math.cos(D),V*Math.sin(D),U],Zt(O,de(u,.6),Ot((-U-15)/110)**1.2))})});for(let w=0;w<Z-1;w++)for(let S=0;S<rt;S++){let U=(S+1)%rt;k.f(W[w][S],W[w+1][S],W[w+1][U],W[w][U])}a.add(new Tt(k.geo(),pe({emit:.3,flat:!1})))}let x=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([k,Z],rt)=>{let W=new Jt(!0),w=d(k)-.3,S=[w,w+4,w+10,w+20,w+32,w+46,w+64,w+84,w+106,150],U=64,B=S.map(V=>Array.from({length:U},(q,O)=>{let E=2*Math.PI*O/U,Q=V*Math.cos(E),X=V*Math.sin(E),G=Z*(.55+.45*We(Q*.03+rt*7,X*.03,3))*xe(0,6,V-w);return W.v([Q,X,k],[...Zt(e.sea_col,u,xe(60,150,V)),G])}));for(let V=0;V<S.length-1;V++)for(let q=0;q<U;q++){let O=(q+1)%U;W.f(B[V][q],B[V+1][q],B[V+1][O],B[V][O])}let F=new Ke({vertexColors:!0,transparent:!0,depthWrite:!1,side:Re,fog:!1,toneMapped:!1});F.color.setScalar(1.7);let D=new Tt(W.geo(),F);D.renderOrder=2,a.add(D),x.push({m:D,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(is({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:s}));let M=new Jt,L=new Jt,T=[];for(let k of[0,60,120,180,240,300]){let Z=le(k),rt=12.5,W=o.uniform(5,8),w=1.8,S=1.2,U=rt*Math.cos(Z),B=rt*Math.sin(Z),F=-.4,D=Z-Math.PI/2,V=Math.cos(D),q=Math.sin(D),O=o.choice(g),E=o.uniform(0,50),Q=new Map,X=(ot,P,b)=>{let H=`${ot},${P},${b}`,$=Q.get(H);$||($=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],Q.set(H,$));let at=ot*w,J=P*S,bt=(b+.5)*W;if(bt>W*.5){let ft=1-.18*((bt-W*.5)/(W*.5));at*=ft,J*=ft}at+=$[0],J+=$[1];let _t=bt+$[2];return M.v([U+at*V-J*q,B+at*q+J*V,F+_t],ui(O,_t/W,at,_t*.7,E,e.moss))},G=4,Y=ot=>-.5+ot/G,K=ot=>{for(let P=0;P<G;P++)for(let b=0;b<G;b++)M.f(X(...ot(P,b)),X(...ot(P+1,b)),X(...ot(P+1,b+1)),X(...ot(P,b+1)))};K((ot,P)=>[Y(ot),-.5,Y(P)]),K((ot,P)=>[Y(P),.5,Y(ot)]),K((ot,P)=>[-.5,Y(P),Y(ot)]),K((ot,P)=>[.5,Y(ot),Y(P)]),K((ot,P)=>[Y(P),Y(ot),.5]);for(let[ot,P,b]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let H=-S/2-.02,$=W*ot,at=U-H*q,J=B+H*V;L.f(...[[-P/2,-b/2],[P/2,-b/2],[P/2,b/2],[-P/2,b/2]].map(([bt,_t])=>L.v([at+bt*V,J+bt*q,F+$+_t],[1,1,1])))}T.push([U,B,W-.4])}a.add(new Tt(M.geo(),pe()),new Tt(L.geo(),Sn(e.rune_col,1.4*s)));let C=(k,Z,rt,W,w,S,U,B,F=!0)=>{let D=Array.from({length:U},(q,O)=>{let E=Math.PI/2*O/U,Q=O/U;return Array.from({length:S},(X,G)=>{let Y=2*Math.PI*G/S,K=.1*Q*Q*w;return k.v([Z[0]+rt*Math.cos(E)*Math.cos(Y),Z[1]+W*Math.cos(E)*Math.sin(Y),Z[2]+w*Math.sin(E)],B(Q,Y),F?[[m[0]*K,m[1]*K,0]]:void 0)})}),V=k.v([Z[0],Z[1],Z[2]+w],B(1,0),F?[[m[0]*.1*w,m[1]*.1*w,0]]:void 0);for(let q=0;q<U-1;q++)for(let O=0;O<S;O++){let E=(O+1)%S;k.f(D[q][O],D[q][E],D[q+1][E],D[q+1][O])}for(let q=0;q<S;q++)k.f(D[U-1][q],D[U-1][(q+1)%S],V)},z=(k,Z,rt,W,w)=>{let S=new Jt(!1,1);for(let[B,F,D,V]of k){let q=o.uniform(.85,1.15),O=p(B,F)-.2,E=(Q,X)=>de(Zt(Z,rt,Ot(Q*(.75+.25*Math.cos(X-f)))**.9),q);for(let Q=0;Q<V;Q++){let X=o.uniform(0,6.283),G=Q?o.uniform(0,.6)*D:0,Y=D*o.uniform(.7,1);C(S,[B+G*Math.cos(X),F+G*Math.sin(X),O],Y,Y,Y*.85,W,w,E)}}let U=new Tt(S.geo(),pe({flat:!1,morph:!0}));return U.morphTargetInfluences=[0],a.add(U),U},tt=[];for(let k=0;tt.length<(t?40:70)&&k<3e3;k++){let Z=o.uniform(0,2*Math.PI),rt=o.uniform(11.5,vn-1.5);if(Z*180/Math.PI%360>255&&Z*180/Math.PI%360<285&&rt>15)continue;let W=rt*Math.cos(Z),w=rt*Math.sin(Z);T.some(([S,U])=>Math.hypot(W-S,w-U)<2.8)||tt.push([W,w,o.uniform(1,2.2),o.int(2,4)])}let v=z(tt,e.bush_lo,e.bush_hi,12,3),A=Array.from({length:30},(k,Z)=>{let rt=2*Math.PI*(Z+o.uniform(-.3,.3))/30,W=vn-.6+o.uniform(-.8,.8);return[W*Math.cos(rt),W*Math.sin(rt),o.uniform(2,3.5),2]}),nt=z(A,e.hedge_lo,e.hedge_hi,16,4);{let k=new Jt;[62,85,112,140].forEach((Z,rt)=>{let W=1+.25*rt;for(let w=0;w<(t?12:20);w++){let S=2*Math.PI*(w+r.uniform(-.4,.4))/20+rt*.4,U=Z+r.uniform(-6,6);for(let B=0;B<2;B++){let F=B?r.uniform(-9,9):0,D=U*Math.cos(S)-F*Math.sin(S),V=U*Math.sin(S)+F*Math.cos(S),q=r.uniform(9,16)*W*(B?.7:1),O=r.uniform(28,46)*W*(B?.75:1),E=.35+.15*rt,Q=r.uniform(.85,1.15);C(k,[D,V,-30],q,q,O,14,7,X=>Zt(de(e.can_col,Q),de(u,.7),Ot(E+.25*X)),!1)}}}),a.add(new Tt(k.geo(),pe({emit:.85,flat:!1})))}let st=[];for(let k=0;k<Math.round(18*e.orb_k*(t?.6:1));k++){let Z=o.uniform(0,6.283),rt=10.5+(vn-8.5)*Math.sqrt(o.random());st.push({p:[rt*Math.cos(Z),rt*Math.sin(Z),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[k,Z,rt]of T)st.push({p:[k,Z,rt+.9],k:1.4,amp:o.uniform(.15,.4)});let ct=Ya({list:st,col:e.orb_col,gain:1.2});a.add(ct.group);let Mt=Math.round(160*e.fire_k*(t?.5:1)),lt=Math.round(40*e.fire_k*(t?.5:1)),vt=0,N=fi({r:o,n:Mt+lt,at:()=>{if(vt++<Mt){let rt=o.uniform(0,6.283),W=(vn+4)*Math.sqrt(o.random());return[W*Math.cos(rt),W*Math.sin(rt),.3+8.7*o.random()**1.6]}let k=o.uniform(0,6.283),Z=o.uniform(vn+2,vn+14);return[Z*Math.cos(k),Z*Math.sin(k),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});Mt+lt>0&&a.add(N.obj);let j=new Jt(!0);return Er(j,9.4,.7,(k,Z)=>{let rt=Math.hypot(k,Z);return rt<.01?1:xe(0,3,9.4-rt)*(.7+.3*Ie(rt*.4,Math.atan2(Z,k)*6.4))},e.wash_col,.28*.5),a.add(new Tt(j.geo(),As())),{group:a,floor:.6,update(k){_.update(k),v.morphTargetInfluences[0]=mn(k,60,.15,1,1),nt.morphTargetInfluences[0]=mn(k,90,.15,1,1);let Z=Math.sin(k%3600/3600*Math.PI);for(let rt of x)rt.m.rotation.z=rt.s*Z;ct.update(k),N.update(k)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...T.slice(0,4).map(k=>({pos:[k[0],k[1],k[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),di(a)}}}var yy={forest:ed,plains:nd,swamp:id,worldtree:sd,castle:td};function rd(i,t,e){let n=yy[i];return n?n(t,e):null}var Pt=(i,t)=>i+Math.random()*(t-i),xy=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function Cs(i,t=!1){let e=new Bn(i);return e.colorSpace=fn,t&&(e.magFilter=dn,e.minFilter=dn,e.generateMipmaps=!1),e}function _o(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);return s.addColorStop(0,i),s.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128),Cs(e)}function od(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let s=0;s<n.length;s++)e.save(),e.rotate(s/n.length*Math.PI*2),e.fillText(n[s],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let s=0;s<=5;s++){let r=s*4*Math.PI/5-Math.PI/2,o=Math.cos(r)*180,a=Math.sin(r)*180;s?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),Cs(t)}function My(i,t,e=160){let n=document.createElement("canvas"),s=[...i].length;n.width=Math.max(256,Math.ceil(s*e*1.05+80)),n.height=e+80;let r=n.getContext("2d");return r.font=`900 ${e}px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=t,r.shadowBlur=34,r.fillStyle=t,r.fillText(i,n.width/2,n.height/2),r.shadowBlur=10,r.fillStyle="#ffffff",r.fillText(i,n.width/2,n.height/2),{tex:Cs(n),aspect:n.width/n.height}}function vy(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),Cs(e)}function by(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let s=n*56,r=s+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,r,c,l),t.arc(512,512,Math.max(s,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=Cs(i);return e.anisotropy=4,e}function Ey(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,s=e?Number(e[2]):20,r=Math.max(1,Math.floor(512/Math.max(n,s))),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*r}" height="${s*r}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*r,c.height=s*r;let l=c.getContext("2d");l.imageSmoothingEnabled=!1,l.drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(Cs(c,!0),n/s)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function Sy(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let s=document.createElement("canvas");s.width=2048,s.height=1152;let r=s.getContext("2d");r.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=r.getImageData(0,a,2048,c-a).data,h=0,u=0,f=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],f+=l[g+2],m++;return new zt(h/m/255,u/m/255,f/m/255).convertSRGBToLinear()};t(Cs(s),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var wy={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},Ty=["forest","swamp","worldtree"];function Ay(i,t={}){let e,n=!!t.lite;try{e=new hr({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let s=!1,r=()=>s?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(r()),e.toneMapping=lo,e.toneMappingExposure=1.15;let o=new ur;o.fog=new Ea(1709616,20,58);let a=new ln(55,16/9,.05,200),c=new R(0,1.75,7.2),l=new R(0,1.45,0);a.position.copy(c),o.add(a);let h=new mr(16777215,2236962,1),u=new Ui(16777215,1);o.add(h,u);let f=new ei(16777215,6,9,2);f.position.set(0,3,7.5),o.add(f);let m=new Ui(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new ie;o.add(g);let _=new Ke({color:16777215,fog:!1,side:Re}),d=new Tt(new ze(70,70,66,48,1,!0,Math.PI-.95,1.9),_);d.scale.set(-1,1,1),d.position.set(0,13,6),g.add(d);let p=new Ee({color:2767396,roughness:1}),y=new Tt(new io(90,48),p);y.rotation.x=-Math.PI/2,y.position.y=-.02,g.add(y);let x=new Ee({color:5208634,roughness:.9,flatShading:!0}),M=2600,L=new fr(new Pn(.05,.42,3),x,M);{let et=new se,Et=new tn,pt=new hn,xt=new R,Ft=new R,qt=new zt;for(let Gt=0;Gt<M;Gt++){let be=9.9+Math.pow(Math.random(),.7)*30,It=Math.random()*Math.PI*2;xt.set(Math.cos(It)*be,.18,Math.sin(It)*be-1),pt.set(Pt(-.25,.25),Math.random()*3,Pt(-.25,.25)),Et.setFromEuler(pt);let St=Pt(.7,1.6);Ft.set(St,St*Pt(.8,1.5),St),et.compose(xt,Et,Ft),L.setMatrixAt(Gt,et),L.setColorAt(Gt,qt.setHSL(Pt(.22,.32),Pt(.35,.6),Pt(.3,.5)))}}g.add(L);let T=new ie;g.add(T);let C=new Ee({color:1981226,roughness:1,flatShading:!0}),z=new Ee({color:3811868,roughness:1}),tt=new Ee({color:6051942,roughness:1,flatShading:!0});function v(et){T.clear();let Et=Ty.includes(et),pt=Et?70:34;for(let xt=0;xt<pt;xt++){let Ft=Pt(Math.PI*1.08,Math.PI*1.92),qt=Pt(24,48),Gt=Math.cos(Ft)*qt,be=Math.sin(Ft)*qt-1;if(Et){let It=Pt(6,13),St=new ie,ge=new Tt(new ze(.25,.4,It*.3,6),z);ge.position.y=It*.15,St.add(ge);for(let Ge=0;Ge<3;Ge++){let Nn=new Tt(new Pn(It*(.32-Ge*.07),It*.5,7),C);Nn.position.y=It*(.42+Ge*.2),St.add(Nn)}St.position.set(Gt,0,be),T.add(St)}else{let It=new Tt(new Xe(Pt(.8,2.6),0),Math.random()<.5?tt:C);It.position.set(Gt,.3,be),It.scale.y=Pt(.5,.9),It.rotation.y=Math.random()*3,T.add(It)}}}let A=new Tt(new io(9.5,64),new Ee({map:by(),roughness:.92,metalness:.02}));A.rotation.x=-Math.PI/2,g.add(A);let nt=new Tt(new jn(9.5,.18,8,96),new Ee({color:4933206,roughness:.85}));nt.rotation.x=Math.PI/2,nt.position.y=.05,g.add(nt);let st=new Tt(new Li(9,9),new Ke({map:od("#a98bff"),transparent:!0,opacity:.38,blending:je,depthWrite:!1}));st.rotation.x=-Math.PI/2,st.position.y=.03,st.scale.x=-1,o.add(st);let ct=new Ee({color:5919846,roughness:.9}),Mt=_o("rgba(255,170,80,1)","rgba(255,120,40,0)"),lt=[];for(let et of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let Et=et-Math.PI/2,pt=Math.cos(Et)*10.4,xt=Math.sin(Et)*10.4-1.5,Ft=new ie,qt=new Tt(new ze(.42,.5,4.2,10),ct);qt.position.y=2.1;let Gt=new Tt(new en(1.2,.3,1.2),ct);Gt.position.y=4.35;let be=new Tt(new ze(.42,.22,.3,10),new Ee({color:2959923,metalness:.6,roughness:.4}));be.position.y=4.65;let It=new Qn(new On({map:Mt,color:16756832,blending:je,depthWrite:!1,transparent:!0}));It.position.y=5.05,It.scale.set(1.3,1.8,1);let St=new ei(16751178,10,14,2);St.position.y=5.1,Ft.add(qt,Gt,be,It,St),Ft.position.set(pt,0,xt),g.add(Ft),lt.push({light:St,flame:It,base:1,phase:Math.random()*10})}let vt=260,N=new ye,j=new Float32Array(vt*3),k=new Float32Array(vt);for(let et=0;et<vt;et++)j[et*3]=Pt(-14,14),j[et*3+1]=Pt(0,7),j[et*3+2]=Pt(-12,6),k[et]=Math.random()*100;N.setAttribute("position",new Pe(j,3));let Z=new Ji({size:.12,map:_o(),transparent:!0,depthWrite:!1,blending:je,color:16777215,sizeAttenuation:!0});g.add(new Qi(N,Z));let rt=_o(),W=_o("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),w=_o("rgba(150,120,255,1)","rgba(120,80,255,0)"),S=new Map;function U(et,Et){let pt=new ie,xt=null,Ft=null,qt=null,Gt=1.95;Et.svg?(Gt=4.6,qt=new On({transparent:!0,alphaTest:.05}),Ft=new Qn(qt),Ft.center.set(.5,0),Ft.scale.set(Gt*1.33,Gt,1),Ey(Et.svg,(ge,Ge)=>{qt.map=ge,qt.needsUpdate=!0,Ft.scale.set(Gt*Ge,Gt,1)}),pt.add(Ft)):(xt=Hf(Ih(Et.character??"wizard"),et==="me"?"me":et.startsWith("ally:")?"ally":"opp",rt,Et.staff),Gt=xt.height,pt.add(xt.root));let be=new Tt(new Li(Gt*.7,Gt*.32),new Ke({map:W,transparent:!0,depthWrite:!1}));if(be.rotation.x=-Math.PI/2,be.position.y=.02,pt.add(be),et!=="me"){let ge=new Tt(new Li(Gt*1.1,Gt*1.1),new Ke({map:od(et==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:je,depthWrite:!1}));ge.rotation.x=-Math.PI/2,ge.position.y=.04,ge.name="circle",pt.add(ge)}let It=new Qn(new On({map:w,blending:je,depthWrite:!1,transparent:!0,opacity:0}));It.scale.set(Gt*1.2,Gt*1.2,1),It.position.y=Gt*.5,pt.add(It),o.add(pt);let St={key:et,group:pt,model:xt,sprite:Ft,spriteMat:qt,height:Gt,ko:!1,flame:null,aura:It,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100}};return S.set(et,St),St}function B(){for(let et of S.values())o.remove(et.group),et.group.traverse(Et=>{let pt=Et;pt.geometry?.dispose?.(),pt.material?.dispose?.()});S.clear()}let F=new ie;a.add(F);let D=new R(1.08,-.52,-1.6),V=new R(1.14,-.6,-1.6);F.scale.setScalar(.72);let q=D.clone(),O=new Ee({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),E=new Ee({color:4020950,roughness:.9,flatShading:!0,side:Re}),Q=new Ee({color:15778970,roughness:.75,flatShading:!0}),X=new ie;F.add(X);let G=Ni("verdant",rt),Y="verdant";X.add(G.group);let K=new ei(G.color,.6,4,2);K.position.y=ts,X.add(K);function ot(et){et!==Y&&(Y=et,X.remove(G.group),G.group.traverse(Et=>{Et.geometry?.dispose?.()}),G=Ni(et,rt),X.add(G.group),K.color.copy(G.color))}{let et=(Ft,qt,Gt,be,It,St)=>{let ge=new Tt(Ft,qt);return ge.position.set(be,It,St),Gt.add(ge),ge},Et=et(new no(.046,.075,4,10),Q,X,.066,-.004,.014);Et.scale.set(.82,1,1.12),Et.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((Ft,qt)=>{let Gt=.05-qt*.002,be=et(new jn(Gt,.019-qt*.001,6,14,Math.PI*1.32),Q,X,0,Ft,0);be.rotation.x=-Math.PI/2;let It=Math.PI*1.32;et(new Je(.019-qt*.001,6,5),Q,X,Math.cos(It)*Gt,Ft,-Math.sin(It)*Gt)}),et(new no(.021,.075,4,8),Q,X,.022,.074,.05).rotation.set(.3,0,1.25);let xt=new ie;xt.position.set(.09,-.08,.03),xt.rotation.set(-.55,0,.62),F.add(xt),et(new ze(.05,.062,.2,10),Q,xt,0,-.08,0),et(new ze(.1,.16,.95,10,1,!0),E,xt,0,-.6,0),et(new jn(.1,.028,6,14),O,xt,0,-.14,0).rotation.x=Math.PI/2}let P=new ei(16777215,1.4,3,2);P.position.set(.3,.3,-.5),a.add(P);let b={wizard:{sleeve:4020950,skin:15778970},witch:{sleeve:5979790,skin:15259346},goblin:{sleeve:8018478,skin:7323466},knight:{sleeve:12897496,skin:12107980},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},H=-1e9,$="ready",at=0,J=900,bt=()=>{$==="gone"&&($="growing",at=performance.now())},_t=0,ft=0,Lt=null,dt=!1,At={uTime:{value:0},uAmount:{value:0},uC0:{value:new zt},uC1:{value:new zt},uC2:{value:new zt},uC3:{value:new zt}},Bt=new Tt(new Li(1,1),new Cn({uniforms:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:je,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Bt.renderOrder=30,Bt.frustumCulled=!1,a.add(Bt);function Ht(){let Et=Math.tan(gr.degToRad(a.fov/2))*1.2,pt=Et*.55;Bt.scale.set(Et*a.aspect*2.05,pt,1),Bt.position.set(0,-Et+pt/2,-1.2)}function Rt(et){let Et={h:0,s:0,l:0};et.getHSL(Et),At.uC0.value.setHSL(Et.h,1,.82),At.uC1.value.setHSL(Et.h,1,.6),At.uC2.value.setHSL(Et.h,.95,.45),At.uC3.value.setHSL((Et.h+.03)%1,.9,.22)}let Ct=new R;function kt(et,Et="chest"){if(et==="me")return Et==="staff"||Et==="head"?(G.gem.getWorldPosition(Ct),Ct.clone()):a.localToWorld(new R(Pt(-.15,.15),-.1,-1.4));let pt=S.get(et);if(!pt)return new R(0,1.4,-3);if(pt.model&&Et==="staff")return pt.model.crystal.getWorldPosition(Ct),Ct.clone();let xt=pt.group.position.clone(),Ft=pt.height*pt.group.scale.y;return et==="boss"&&Et==="mouth"?xt.add(new R(-pt.height*.55,pt.height*.62,.3)):xt.add(new R(0,Ft*(Et==="head"?.85:.6),0))}let jt=[],it=0;function Ut(et,Et,pt={}){if(n&&it++&1)return;let xt=new Qn(new On({map:rt,color:Et,blending:pt.solid?ai:je,depthWrite:!1,transparent:!0,opacity:pt.opacity??1}));xt.position.copy(et),xt.scale.setScalar(pt.size??.25),o.add(xt),jt.push({sprite:xt,vel:pt.vel??new R,life:0,max:pt.life??.6,grow:pt.grow??0,gravity:pt.gravity??0})}function yt(et,Et,pt=26,xt=3.2,Ft=.22){for(let qt=0;qt<pt;qt++){let Gt=new R(Pt(-1,1),Pt(-.6,1.2),Pt(-1,1)).normalize().multiplyScalar(Pt(xt*.4,xt));Ut(et,Et,{vel:Gt,size:Pt(Ft*.6,Ft*1.4),life:Pt(.4,.9),gravity:-3})}Ut(et,Et,{size:.6,grow:6,life:.35,opacity:.9})}function wt(et,Et,pt=1){let xt=et.group.position,Ft=et.model?.45:et.height*.35;for(let qt=0;qt<pt;qt++){let Gt=et.group.scale.y;Ut(new R(xt.x+Pt(-Ft,Ft)*Gt,xt.y+Pt(.05,et.height*.45)*Gt,xt.z+Pt(-Ft,Ft)*.5*Gt),Et,{size:Pt(.35,.7)*Gt,vel:new R(Pt(-.1,.1),Pt(1.4,2.6),0),life:Pt(.35,.65),grow:-.9,opacity:.75,solid:!0}),Ut(new R(xt.x+Pt(-Ft,Ft)*.6*Gt,xt.y+Pt(.05,et.height*.35)*Gt,xt.z),Et,{size:Pt(.3,.5)*Gt,vel:new R(0,Pt(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Ut(new R(xt.x+Pt(-Ft,Ft)*Gt,xt.y+Pt(.2,et.height*.9)*Gt,xt.z),16777215,{size:Pt(.05,.1)*Gt,vel:new R(0,Pt(1.5,3),0),life:.5})}}let Vt=[];function Yt(et){for(let pt=0;pt<2;pt++){let xt=[],Ft=et.clone().add(new R(Pt(-1.5,1.5),9,Pt(-1,1)));for(let Gt=0;Gt<=12;Gt++){let be=Ft.clone().lerp(et,Gt/12);Gt>0&&Gt<12&&be.add(new R(Pt(-.45,.45),Pt(-.2,.2),Pt(-.3,.3))),xt.push(be)}let qt=new Ra(new ye().setFromPoints(xt),new jr({color:pt?16777215:10475775,transparent:!0,blending:je,depthWrite:!1}));o.add(qt),Vt.push({line:qt,life:0});for(let Gt=0;Gt<xt.length-1;Gt++){let be=xt[Gt].distanceTo(xt[Gt+1]);for(let It=0;It<be;It+=.09)Ut(xt[Gt].clone().lerp(xt[Gt+1],It/be),pt?16777215:9425151,{size:pt?.12:.3,life:.28,opacity:pt?1:.7})}}let Et=new ei(12576511,60,16,2);Et.position.copy(et).add(new R(0,2,1)),o.add(Et),setTimeout(()=>o.remove(Et),160),yt(et,12576511,30,4,.18)}let he=[];function Le(et,Et,pt="#ffd479"){let xt=new Qn(new On({map:vy(Et,pt),transparent:!0,depthWrite:!1,depthTest:!1}));xt.position.copy(kt(et,"head")).add(new R(Pt(-.3,.3),.4,.3));let Ft=et==="me"?.9:1.3;xt.scale.set(Ft,Ft/2,1),xt.renderOrder=10,o.add(xt),he.push({sprite:xt,life:0})}let ke=document.createElement("div");ke.className="arena3d-hit",document.body.append(ke);function me(et="255,40,60",Et=""){ke.style.setProperty("--hit",et),ke.className="arena3d-hit",ke.offsetWidth,ke.className=`arena3d-hit on ${Et}`}let Ve=0,wn=et=>{xy()||(Ve=Math.max(Ve,et))},mi=[];function yo(et,Et,pt,xt,Ft,qt){let{tex:Gt,aspect:be}=My(pt,xt),It=new Qn(new On({map:Gt,transparent:!0,depthWrite:!1}));It.scale.set(Ft*be*.4,Ft*.4,1),It.position.copy(et),It.renderOrder=5,o.add(It);let St=et.clone().lerp(Et,.5).add(new R(Pt(-.6,.6),1.2+et.distanceTo(Et)*.08,0));return new Promise(ge=>mi.push({sprite:It,from:et,to:Et,mid:St,t:0,dur:qt,color:new zt(xt),size:Ft,done:ge,trailAt:0}))}let In="battle",ss="",Ps="",we=null,gi=[],Wn=new Ui(16777215,1);Wn.visible=!1,o.add(Wn,Wn.target);let Is=(et,Et)=>new R(et[0],et[2]-Et,-et[1]);function xo(et,Et){we&&(o.remove(we.group),we.dispose(),we=null);for(let pt of gi)o.remove(pt);gi.length=0;try{we=rd(et,Et,n)}catch(pt){console.warn("3D arena failed, using the classic one",pt),we=null}if(g.visible=!we,st.position.y=we?.1:.03,Wn.visible=!!we,!we){Ps="";return}we.group.rotation.x=-Math.PI/2,we.group.position.y=-we.floor,o.add(we.group),we.group.traverse(pt=>{pt.name==="centre-pattern"&&(pt.visible=!1)});for(let pt of n?we.lights.slice(0,2):we.lights){let xt=new ei(new zt(...pt.color),pt.intensity*8,pt.dist,2);xt.position.copy(Is(pt.pos,we.floor)),xt.userData.base=xt.intensity,xt.userData.flicker=pt.flicker??0,o.add(xt),gi.push(xt)}}function Mo(et){let Et=et.key.dir;Wn.color.setRGB(...et.key.color),Wn.intensity=et.key.intensity*.35,Wn.position.set(Et[0]*50,Et[2]*50,-Et[1]*50),Wn.target.position.set(0,0,0),h.color.setRGB(...et.ambient.sky),h.groundColor.setRGB(...et.ambient.ground),h.intensity=et.ambient.intensity,u.intensity=0,m.intensity*=.45,f.intensity*=.5;let pt=o.fog;pt.color.setRGB(...et.fog.color),pt.near=et.fog.near,pt.far=et.fog.far,e.setClearColor(pt.color)}let wr=0,_i=0,Ls=0,I=new hn,ht=new hn,mt=!1,gt=!1,ut=new zt(16777215),Nt=null;function Xt(et,Et){let pt=c.z-Et,xt=Math.tan(gr.degToRad(a.fov/2))*pt;return et*xt*a.aspect}function $t(){if(!Nt)return;let et=Nt,Et=S.get("opp");Et?.model&&Et.group.scale.setScalar(1.3),Et&&Et.group.position.set(Xt(a.aspect<1?.08:et.layout==="deck"?.36:.46,-2.2),0,-2.2);let pt=S.get("boss");pt&&pt.group.position.set(Xt(a.aspect<1?.15:.5,-5.5),0,-5.5),et.allies.forEach((Ft,qt)=>{let Gt=S.get(`ally:${Ft.id}`);Gt&&Gt.group.position.set(Xt(-.36+qt*.13,-.6-qt*1.1),0,-.6-qt*1.1)});let xt=(pt??Et)?.group.position;for(let[Ft,qt]of S){if(!qt.model)continue;let Gt=Ft==="opp"?c:xt??new R(0,0,-3);qt.model.root.rotation.y=Math.atan2(Gt.x-qt.group.position.x,Gt.z-qt.group.position.z)}}function Kt(et){Nt=et,In=et.layout,B();let Et=b[Ih(et.me.character??"wizard")]??b.wizard;E.color.set(Et.sleeve),Q.color.set(Et.skin),Q.metalness=et.me.character==="knight"?.3:0,gn(),ot(et.me.staff??"verdant"),dt=!1,F.visible=!0,$="ready",Lt=null,At.uAmount.value=0,Bt.visible=!1,et.opp&&U("opp",et.opp),et.boss&&U("boss",et.boss);for(let xt of et.allies)U(`ally:${xt.id}`,xt);$t();let pt=wy[et.time];h.color.set(pt.sky),h.groundColor.set(pt.ground),h.intensity=pt.hemi*1.25,m.intensity=et.time==="night"?1.3:et.time==="sunset"?1:.7,u.color.set(pt.sun),u.intensity=pt.sunInt,u.position.set(...pt.sunPos),f.intensity=et.time==="night"?9:5;for(let xt of lt)xt.base=pt.torch;Z.color.set(pt.motes),ut=new zt(pt.spriteTint),ss!==et.bgKey&&(ss=et.bgKey,xo(et.bgKey.split("-")[0],et.time)),we?Mo(we):Ps!==et.bgKey&&(Ps=et.bgKey,o.fog.near=20,o.fog.far=58,v(et.bgKey.split("-")[0]),Sy(et.bgSvg,(xt,Ft,qt)=>{_.map?.dispose(),_.map=xt,_.needsUpdate=!0,o.fog.color.copy(Ft).lerp(qt,.35),p.color.copy(Ft).multiplyScalar(.9),x.color.copy(Ft).lerp(new zt(5212730),.45).multiplyScalar(1.15),C.color.copy(Ft).lerp(new zt(1522212),.5),e.setClearColor(qt)}))}let ne=new Dt,ee=new Dt,Qt=.32,Me=.13,ae={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},Ue=et=>{et.pointerType!=="mouse"||et.buttons||et.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||ne.set(et.clientX/innerWidth*2-1,et.clientY/innerHeight*2-1)};addEventListener("pointermove",Ue,{passive:!0});function gn(){let et=In==="deck"?V:D,Et=In==="deck"?.56:.72;if(a.aspect>=1.2){q.copy(et),F.scale.setScalar(Et);return}let pt=Math.tan(gr.degToRad(a.fov/2))*-et.z,xt=pt*a.aspect;q.set(xt*.78,-pt*.62,et.z),F.scale.setScalar(Et*Math.max(.5,Math.min(1,a.aspect*.9)))}function _e(){let et=i.clientWidth||innerWidth,Et=i.clientHeight||innerHeight;e.setSize(et,Et,!1),a.aspect=et/Et,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),$t(),Ht(),gn()}addEventListener("resize",_e);let te=0,Ye=0,ve=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!Oi||i.clientWidth===te&&i.clientHeight===Ye||(te=i.clientWidth,Ye=i.clientHeight,_e())}):null;ve?.observe(i);let Ln=new zt(6974072),Fi=new zt(16722474),_n=new zt(9428223),Tr=new zt(2784511),Ne=new zt(16738842);function si(et,Et){let pt=Et<et.hurtUntil,xt=Et<et.frostUntil,Ft=Et<et.burnUntil;if(et.model&&et.ko){for(let qt of et.model.materials)qt.mat.color.copy(qt.color).lerp(Ln,.55),qt.mat.emissive.setRGB(0,0,0);return}if(et.model){if(xt!==et.frosted){et.frosted=xt;for(let qt of et.model.materials)qt.mat.opacity=xt?.5:1,qt.mat.depthWrite=!xt}for(let qt of et.model.materials)qt.mat.color.copy(qt.color),xt&&qt.mat.color.lerp(_n,.75),pt?(qt.mat.emissive.copy(Fi),qt.mat.emissiveIntensity=.6):xt?(qt.mat.emissive.copy(Tr),qt.mat.emissiveIntensity=.45):Ft?(qt.mat.color.lerp(Ne,.35),qt.mat.emissive.copy(Ne),qt.mat.emissiveIntensity=.55+.3*Math.sin(Et/40)):(qt.mat.emissive.copy(qt.emissive),qt.mat.emissiveIntensity=1)}else et.spriteMat&&(et.spriteMat.color.copy(pt?new zt(1,.35,.35):xt?_n:Ft?new zt(1,.7,.5):ut),et.spriteMat.opacity=xt?.6:et.ko?et.spriteMat.opacity:1)}let Oi=!1,yn=0,Bi=performance.now(),He=0,rs=0,Ar=0,$a=0;function ad(et){if(s||document.hidden)return;if($a<45){$a++;return}if(rs++,Ar+=et,Ar<2500)return;let Et=rs*1e3/Ar;rs=0,Ar=0,!(Et>=(n?22:34))&&(n?(s=!0,e.setPixelRatio(r()),_e()):vo.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(Et),lowRes:s}})))}function Vh(et){yn=requestAnimationFrame(Vh),ad(et-Bi);let Et=Math.min(1,Math.max(0,(et-Bi)/1e3)),pt=Math.min(.05,Et);Bi=et,He+=pt;let xt=performance.now(),Ft=!1;ee.lerp(ne,Ft?1:.05);let qt=Ft?0:Math.sin(He*.7)*.025;if(n)a.position.set(c.x+ee.x*.12,c.y-ee.y*.05+qt,c.z),a.lookAt(l.clone().add(new R(ee.x*1.5,-ee.y*.75,0))),ae.yaw=0,ae.pitch=0;else{ae.yaw=-ee.x*Qt,ae.pitch=-ee.y*Me,a.position.set(c.x,c.y+qt,c.z);let It=l.clone().sub(c).applyAxisAngle(new R(0,1,0),ae.yaw),St=It.clone().cross(new R(0,1,0)).normalize();It.applyAxisAngle(St,ae.pitch),a.lookAt(c.clone().add(It))}Oi&&Nt&&(Nt.opp||Nt.allies.length)&&et-ae.sentAt>150&&(Math.abs(ae.yaw-ae.sentYaw)>.02||Math.abs(ae.pitch-ae.sentPitch)>.02)&&(ae.sentAt=et,ae.sentYaw=ae.yaw,ae.sentPitch=ae.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+ae.yaw.toFixed(3),pitch:+ae.pitch.toFixed(3)}}))),Ve>0&&(a.position.add(new R(Pt(-1,1),Pt(-1,1),0).multiplyScalar(Ve)),a.rotation.z+=Pt(-1,1)*Ve*.15,Ve=Math.max(0,Ve-pt*1.1)),_i+=(wr-_i)*Math.min(1,pt*6),Ls=Math.max(0,Ls-pt*2.2),I.x+=(ht.x-I.x)*Math.min(1,pt*14),I.y+=(ht.y-I.y)*Math.min(1,pt*14),I.z+=(ht.z-I.z)*Math.min(1,pt*14),Ls<=0&&ht.set(0,0,0);let Gt=.5+.5*Math.sin(He*6);{let It=Math.max(0,1-(xt-H)/380),St=It>0?Math.sin(It*Math.PI):0,ge=Math.min(1,_i);_t+=((ge>.05&&!Ft?Math.min(1,.5+ge*.6):0)-_t)*Math.min(1,pt*3),ft+=pt*(2.6+ge*1.4);let Ge=Math.sin(ft),Nn=Math.sin(ft*2)/2;F.position.set(q.x-ee.x*.04+Ge*.06*_t,q.y+ee.y*.03+(Ft?0:Math.sin(He*1.6)*.008)+ge*.03+Nn*.11*_t,q.z-St*.35),X.rotation.set(ge*.25-St*.75+I.x*.3+Nn*.18*_t,I.y*.3,.2-Ge*.24*_t+I.z*.3);let on=$==="ready"?1:0;if($==="growing"){let ce=Math.min(1,(xt-at)/J);if(on=ce*ce*(3-2*ce),ce>=1)$="ready";else if(!Ft){G.gem.getWorldPosition(Ct);for(let Te=0;Te<2;Te++){let Hn=Ct.clone().add(new R(Pt(-.4,.4),Pt(-.4,.4),Pt(-.4,.4)));Ut(Hn,G.color,{size:Pt(.025,.06),vel:Ct.clone().sub(Hn).multiplyScalar(2.8),life:.36})}}}if(G.gem.scale.setScalar(on),G.gemMat.emissiveIntensity=.7+ge*(1.6+Gt*1.2)+St*3,K.intensity=(.5+ge*4+St*6)*on,G.glow.scale.setScalar((.3+ge*(.32+Gt*.18)+St*.6)*on),G.glow.material.opacity=.3+ge*.35,G.gem.rotation.y+=pt*(.8+ge*6),G.update(He,pt,ge),on>.9&&!Ft&&F.visible&&(G.gem.getWorldPosition(Ct),_t>.25&&Ut(Ct.clone(),G.color,{size:Pt(.03,.05),life:.55,opacity:.9}),ge>.2&&Math.random()<ge*.8)){let ce=Ct.clone().add(new R(Pt(-.35,.35),Pt(-.35,.35),Pt(-.35,.35)));Ut(ce,G.color.clone().lerp(new zt(16777215),.4),{size:Pt(.02,.05),vel:Ct.clone().sub(ce).multiplyScalar(2.6),life:.38})}if(Lt&&!Ft&&F.visible)for(let ce=0;ce<2;ce++){let Te=X.localToWorld(new R(Pt(-.05,.05),Pt(-.15,1.3),Pt(-.05,.05)));Ut(Te,Lt,{size:Pt(.05,.12),vel:new R(Pt(-.05,.05),Pt(.35,.8),0),life:Pt(.25,.45),solid:Math.random()<.4,opacity:.9})}At.uTime.value=Ft?0:He,At.uAmount.value+=((Lt&&F.visible?1:0)-At.uAmount.value)*Math.min(1,Et*3),Bt.visible=At.uAmount.value>.01}for(let[It,St]of S){let ge=St.group.getObjectByName("circle");if(ge&&(ge.rotation.z+=pt*.4),si(St,xt),St.ko)continue;let Ge=Math.max(0,St.lungeUntil-xt)/450;if(St.model){let ce=St.model;ce.body.position.y=Ft?0:Math.sin(He*2+St.height*3)*.02;let Te=St.look,Hn=xt-Te.at>4e3,Us=Hn?.22*Math.sin(He*.31+Te.seed)*Math.sin(He*.13+Te.seed*2):Te.yaw,Ka=Hn?.06*Math.sin(He*.23+Te.seed*3):Te.pitch;Te.curYaw+=(Us-Te.curYaw)*Math.min(1,pt*7),Te.curPitch+=(Ka-Te.curPitch)*Math.min(1,pt*7),ce.head.rotation.set(-Te.curPitch*.8,Te.curYaw*.7,0),ce.body.rotation.y=Te.curYaw*.3;let os=1-Ge,as=Ge<=0?0:os<.18?-.35*(os/.18):os<.4?-.35+1.35*((os-.18)/.22):1-((os-.4)/.6)**2;ce.body.rotation.x=Math.max(0,as)*.2,ce.staffPivot.rotation.x=as*1.9;let yi=It==="me"?_i:(It==="opp"||It.startsWith("ally:"))&&mt?In==="deck"?.7:.45:0,Rr=It==="me"?0:yi*(1-Math.max(0,as)),ld=-.15-yi*.75-Math.max(0,as)*.9+(It==="me"?I.x:0)+Math.sin(He*4.4)*.22*Rr;ce.arm.rotation.x+=(ld-ce.arm.rotation.x)*Math.min(1,pt*10),ce.arm.rotation.z=-.35+(It==="me"?I.z:0)+Math.sin(He*2.2)*.32*Rr,ce.arm.rotation.y=It==="me"?I.y:0;let cs=It==="me"?_i:yi;ce.crystalMat.emissiveIntensity=1.2+cs*(3+Gt*2)+Ge*3,ce.glow.scale.setScalar(.45+cs*(.5+Gt*.3)+Ge*.6),ce.glow.material.opacity=.45+cs*.5,ce.crystal.rotation.y+=pt*(.8+cs*6),ce.staff.update(He,pt,cs),cs>.5&&Math.random()<cs*.6&&(ce.crystal.getWorldPosition(Ct),Ut(Ct.clone().add(new R(Pt(-.1,.1),Pt(-.1,.1),Pt(-.1,.1))),ce.staff.color.getHex(),{size:Pt(.03,.08),vel:new R(Pt(-.2,.2),Pt(.2,.6),0),life:.7}))}else St.sprite&&(St.sprite.position.y=Ft?0:Math.abs(Math.sin(He*2))*.05,St.sprite.position.z=Ge*.4);let Nn=It==="opp"&&mt&&In==="deck"||It==="boss"&&gt,on=St.aura.material;if(on.opacity+=((Nn?.55+.2*Math.sin(He*5):St.flame?.35:0)-on.opacity)*Math.min(1,pt*5),on.color.copy(It==="boss"?new zt(16742954):St.flame??new zt(11832575)),St.flame&&wt(St,St.flame,2),xt<St.burnUntil&&wt(St,Math.random()<.5?16734746:16756784,3),xt<St.frostUntil&&Math.random()<.3&&wt(St,13628159,1),It==="boss"&&gt&&Math.random()<.8){let ce=kt("boss","mouth"),Te=ce.clone().add(new R(Pt(-1.5,1.5),Pt(-1,1),Pt(-1,1)));Ut(Te,16751162,{size:.12,vel:ce.clone().sub(Te).multiplyScalar(1.6),life:.55})}}for(let It of lt){let St=.85+.15*Math.sin(He*9+It.phase)+.08*Math.sin(He*23+It.phase*2);It.light.intensity=It.base*St,It.flame.scale.set(1.2*St,1.8*(.9+.2*St),1)}if(st.rotation.z+=pt*.05,we){we.update(He*30);for(let It of gi)It.userData.flicker&&(It.intensity=It.userData.base*(1-It.userData.flicker*(.5+.5*Math.sin(He*9+It.position.x)*Math.sin(He*23+It.position.z))))}let be=N.attributes.position;for(let It=0;It<vt;It++){let St=be.getY(It)+pt*(.12+k[It]%1*.2);St>7.5&&(St=0),be.setY(It,St),be.setX(It,be.getX(It)+Math.sin(He*.5+k[It])*pt*.15)}be.needsUpdate=!0,Z.opacity=.55+.35*Math.sin(He*1.3);for(let It=mi.length-1;It>=0;It--){let St=mi[It];St.t+=pt/St.dur;let ge=Math.min(1,St.t),Ge=ge*ge*(1.6-.6*ge),Nn=St.from.clone().lerp(St.mid,Ge),on=St.mid.clone().lerp(St.to,Ge);St.sprite.position.copy(Nn.lerp(on,Ge)),St.gem&&(St.gem.position.copy(St.sprite.position),St.gem.rotation.y+=pt*12,St.gem.rotation.x+=pt*7);let ce=.55+Ge*.8,Te=St.sprite.material,Hn=Te.map?.image,Us=Hn?Hn.width/Hn.height:1;St.sprite.scale.set(St.size*Us*.4*ce,St.size*.4*ce,1),St.trailAt-=pt,St.trailAt<=0&&!Ft&&(St.trailAt=.016,Ut(St.sprite.position,St.color,{size:Pt(.05,.13)*St.size,life:.35,opacity:.8,vel:new R(Pt(-.3,.3),Pt(-.3,.3),Pt(-.3,.3))})),ge>=1&&(o.remove(St.sprite),Te.map?.dispose(),Te.dispose(),St.gem&&o.remove(St.gem),mi.splice(It,1),St.done())}for(let It=jt.length-1;It>=0;It--){let St=jt[It];if(St.life+=pt,St.life>=St.max){o.remove(St.sprite),St.sprite.material.dispose(),jt.splice(It,1);continue}St.vel.y+=St.gravity*pt,St.sprite.position.addScaledVector(St.vel,pt),St.grow&&St.sprite.scale.multiplyScalar(1+St.grow*pt),St.sprite.material.opacity=1-St.life/St.max}for(let It=Vt.length-1;It>=0;It--){let St=Vt[It];St.life+=pt,St.line.material.opacity=St.life<.08||St.life>.14&&St.life<.2?1:.15,St.life>.32&&(o.remove(St.line),St.line.geometry.dispose(),St.line.material.dispose(),Vt.splice(It,1))}for(let It=he.length-1;It>=0;It--){let St=he[It];St.life+=pt,St.sprite.position.y+=pt*.8,St.sprite.material.opacity=Math.min(1,2.2-St.life*2),St.life>1.1&&(o.remove(St.sprite),St.sprite.material.map?.dispose(),St.sprite.material.dispose(),he.splice(It,1))}e.render(o,a)}function cd(et,Et,pt){let xt=S.get(et),Ft=performance.now();Et==="bolt"&&(Yt(xt?kt(et,"head"):pt),et==="me"&&me("190,230,255","bolt")),Et==="frost"&&(xt&&(xt.frostUntil=Ft+1100),yt(pt,13628159,30,2.5,.16),et==="me"&&me("140,210,255","frost")),Et==="fire"&&(xt&&(xt.burnUntil=Ft+1100),yt(pt,16742954,36,3.4,.24),et==="me"&&me("255,120,30","fire"))}let vo={setup:Kt,setActive(et){et!==Oi&&(Oi=et,i.classList.toggle("on",et),et?(_e(),Bi=performance.now(),$a=0,rs=0,Ar=0,yn=requestAnimationFrame(Vh)):cancelAnimationFrame(yn))},async cast(et,Et,pt,xt={}){let Ft=xt.kind??"attack",qt=et==="me"||et.startsWith("ally:"),Gt=Ft==="heal"?"#5dffa8":Ft==="mana"?"#ffd479":xt.fx==="bolt"?"#bfe6ff":xt.fx==="frost"?"#8fdcff":xt.fx==="fire"?"#ff8a3a":qt?"#a98bff":"#ff6b6b",be=S.get(et);if(be&&(be.lungeUntil=performance.now()+450),et==="me"&&(_i=0,wr=0),Ft!=="attack"){if(et==="me"&&$!=="gone"&&F.visible){H=performance.now(),$="gone";let ce=new Tt(G.gem.geometry,G.gemMat),Te=kt("me","staff"),Hn=kt("me","chest"),Us=Te.clone().lerp(Hn,.5).add(new R(0,.35,0));ce.position.copy(Te),ce.scale.setScalar(1.3),o.add(ce);let Ka=performance.now();await new Promise(os=>{let as=()=>{let yi=Math.min(1,(performance.now()-Ka)/520),Rr=Te.clone().lerp(Us,yi).lerp(Us.clone().lerp(Hn,yi),yi);ce.position.copy(Rr),ce.rotation.y+=.3,ce.scale.setScalar(1.3*(1-yi*.7)),Math.random()<.8&&Ut(Rr.clone(),Gt,{size:Pt(.03,.07),life:.35,opacity:.9}),yi<1?requestAnimationFrame(as):(o.remove(ce),os())};as()})}let on=kt(et);for(let ce=0;ce<30;ce++)Ut(on.clone().add(new R(Pt(-.5,.5),Pt(-.8,.2),Pt(-.3,.3))),Gt,{size:Pt(.08,.2),vel:new R(Pt(-.2,.2),Pt(.8,1.8),0),life:Pt(.6,1.1)});et==="me"&&me(Ft==="heal"?"80,255,160":"255,212,121"),xt.damage&&Le(et,`+${xt.damage}`,Gt);return}let It=kt(et,et==="boss"?"mouth":"staff"),St=kt(Et,"chest"),ge=(xt.crit?1.5:1)*1.15,Ge=yo(It,St,pt,Gt,ge,.85);if(et==="me"){H=performance.now(),$="gone";let on=new Tt(G.gem.geometry,G.gemMat);on.scale.setScalar(1.5),on.position.copy(It),o.add(on),mi[mi.length-1].gem=on}await Ge,yt(St,Gt,xt.crit?46:28,xt.crit?4.4:3.2,.2);let Nn=S.get(Et);Nn&&(Nn.hurtUntil=performance.now()+450),cd(Et,xt.fx,St),Et==="me"?(xt.fx||me(),wn(xt.crit?.16:.09)):wn(xt.crit?.07:.035),xt.damage&&Le(Et,`\u2212${xt.damage}${xt.crit?"!":""}`,Et==="me"?"#ff6b81":xt.crit?"#ff9a3a":"#ffd479")},fizzle(et){let Et=kt(et,et==="boss"?"head":"staff");if(et!=="me")for(let pt=0;pt<14;pt++)Ut(Et,10132136,{size:Pt(.1,.25),vel:new R(Pt(-.6,.6),Pt(.3,1),Pt(-.3,.3)),life:.8,opacity:.6});if(et==="me"){if(_i=0,$!=="gone"&&F.visible){G.gem.getWorldPosition(Ct);for(let pt=0;pt<16;pt++)Ut(Ct.clone(),Math.random()<.5?G.color:10132136,{size:Pt(.02,.05),vel:new R(Pt(-.8,.8),Pt(-.2,.9),Pt(-.5,.5)),life:Pt(.4,.7),gravity:-2.5})}$="gone"}},ko(et){if(et==="me"){if(dt)return;dt=!0,Lt=null,G.gem.getWorldPosition(Ct),yt(Ct.clone(),10132136,18,1.6,.1),F.visible=!1;return}let Et=S.get(et);if(!Et||Et.ko)return;Et.ko=!0,Et.flame=null,Et.aura.material.opacity=0;let pt=performance.now(),xt=()=>{let Ft=Math.min(1,(performance.now()-pt)/700),qt=Ft*Ft;Et.model?(Et.model.root.rotation.z=Math.PI/2*qt,Et.model.root.position.y=.24*qt):Et.spriteMat&&(Et.spriteMat.rotation=Math.PI/2*Ft*-1,Et.spriteMat.opacity=1-Ft*.6),Ft<1&&requestAnimationFrame(xt)};xt(),yt(kt(et),16777215,40,3,.25)},onfire(et,Et,pt){if(et==="me"){Lt=Et&&!dt?new zt(pt??"#6ee7ff"):null,Lt&&Rt(Lt);return}let xt=S.get(et);xt&&(xt.flame=Et?new zt(pt??"#6ee7ff"):null)},channel(et){wr=Math.max(0,Math.min(1,et))},twitch(){bt(),Ls=.35,ht.set(Pt(-.35,.25),Pt(-.25,.25),Pt(-.3,.3)),Math.random()<.6&&$==="ready"&&(G.gem.getWorldPosition(Ct),Ut(Ct.clone(),G.color.clone().lerp(new zt(16777215),.5),{size:Pt(.04,.09),vel:new R(Pt(-.6,.6),Pt(.2,.9),Pt(-.3,.3)),life:.5}))},thrust(){H=performance.now(),G.gem.getWorldPosition(Ct),yt(Ct.clone(),G.color,18,1.6,.08)},oppChannel(et){mt=et},inhale(et){gt=et},breath(et,Et){gt=!1;let pt=kt("boss","mouth");for(let xt=0;xt<160;xt++)setTimeout(()=>{let qt=(et.length?kt(et[xt%et.length]):a.localToWorld(new R(0,-.2,-1))).clone().add(new R(Pt(-1.5,1.5),Pt(-.8,.8),0)).sub(pt).normalize().multiplyScalar(Pt(7,11));Ut(pt,Math.random()<.4?16765530:16734746,{size:Pt(.3,.7),vel:qt,life:Pt(.6,.9),grow:1.2})},xt*5);setTimeout(()=>{for(let xt of et){let Ft=S.get(xt);Ft&&(Ft.hurtUntil=performance.now()+500,Ft.burnUntil=performance.now()+900),Le(xt,`\u2212${Et}`,"#ff9a3a")}et.includes("me")&&(me("255,120,30"),wn(.16))},450)},claw(et,Et){let pt=S.get("boss");pt&&(pt.lungeUntil=performance.now()+450),setTimeout(()=>{let xt=S.get(et);xt&&(xt.hurtUntil=performance.now()+450),et==="me"&&(me("255,40,60","claw"),wn(.13)),Le(et,`\u2212${Et}`,"#ff6b81")},200)},float:Le,look(et,Et,pt){let xt=S.get(et);!xt||!Number.isFinite(Et)||!Number.isFinite(pt)||(xt.look.yaw=Math.max(-Qt,Math.min(Qt,Et)),xt.look.pitch=Math.max(-Me,Math.min(Me,pt)),xt.look.at=performance.now())},setLite(et){let Et=n!==et;n=et,Et&&we&&Nt&&(ss="",Kt(Nt)),e.setPixelRatio(r()),L.count=et?900:M,N.setDrawRange(0,et?90:vt),_e()},dispose(){vo.setActive(!1),ve?.disconnect(),removeEventListener("pointermove",Ue),removeEventListener("resize",_e),ke.remove(),we&&(we.dispose(),we=null),e.dispose()}};n&&vo.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return G},get gemState(){return $},scene:o,camera:a,renderer:e}),_e();try{e.compile(o,a)}catch{}return vo}globalThis.KWArena3D=Ay;globalThis.KWStaffPreview=Ff;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
