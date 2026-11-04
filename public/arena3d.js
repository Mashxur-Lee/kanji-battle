"use strict";(()=>{var Nd=Object.defineProperty;var Fd=(i,t,e)=>t in i?Nd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var tn=(i,t,e)=>Fd(i,typeof t!="symbol"?t+"":t,e);var Od=0,Zu=1,Bd=2;var sf=1,kd=2,Ji=3,zn=0,jn=1,Fe=2,Er=0,Pi=1,an=2,$u=3,Ku=4,zd=5,Kr=100,Vd=101,Gd=102,Wd=103,Xd=104,qd=200,Yd=201,Zd=202,$d=203,Dl=204,Hl=205,Kd=206,Jd=207,jd=208,Qd=209,tp=210,ep=211,np=212,ip=213,rp=214,Ul=0,Nl=1,Fl=2,Fs=3,Ol=4,Bl=5,kl=6,zl=7,nu=0,iu=1,sp=2,wr=0,op=1,ap=2,cp=3,$o=4,lp=5,hp=6,up=7;var of=300,Os=301,Bs=302,Ho=303,Vl=304,wc=306,Qr=1e3,Qi=1001,Gl=1002,Pn=1003,fp=1004;var ca=1005;var _i=1006,Jc=1007;var jr=1008;var er=1009,af=1010,cf=1011,Uo=1012,ru=1013,ts=1014,Ci=1015,Ko=1016,su=1017,ou=1018,ks=1020,lf=35902,hf=1021,uf=1022,xi=1023,ff=1024,df=1025,Hs=1026,zs=1027,au=1028,cu=1029,pf=1030,lu=1031;var hu=1033,za=33776,Va=33777,Ga=33778,Wa=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Zl=36196,$l=37492,Kl=37496,Jl=37808,jl=37809,Ql=37810,th=37811,eh=37812,nh=37813,ih=37814,rh=37815,sh=37816,oh=37817,ah=37818,ch=37819,lh=37820,hh=37821,Xa=36492,uh=36494,fh=36495,mf=36283,dh=36284,ph=36285,mh=36286;var Ya=2300,gh=2301,jc=2302,Ju=2400,ju=2401,Qu=2402;var dp=3200,pp=3201;var uu=0,mp=1,br="",on="srgb",Cr="srgb-linear",fu="display-p3",Tc="display-p3-linear",Za="linear",je="srgb",$a="rec709",Ka="p3";var ds=7680;var t0=519,gp=512,_p=513,yp=514,gf=515,xp=516,Mp=517,bp=518,vp=519,_h=35044;var e0="300 es",tr=2e3,Ja=2001,Tr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],n0=1234567,Ao=Math.PI/180,No=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[e&63|128]+Bn[e>>8&255]+"-"+Bn[e>>16&255]+Bn[e>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function En(i,t,e){return Math.max(t,Math.min(e,i))}function du(i,t){return(i%t+t)%t}function Ep(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function wp(i,t,e){return i!==t?(e-i)/(t-i):0}function Co(i,t,e){return(1-e)*i+e*t}function Tp(i,t,e,n){return Co(i,t,1-Math.exp(-e*n))}function Sp(i,t=1){return t-Math.abs(du(i,t*2)-t)}function Rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pp(i,t){return i+Math.random()*(t-i)}function Ip(i){return i*(.5-Math.random())}function Lp(i){i!==void 0&&(n0=i);let t=n0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dp(i){return i*Ao}function Hp(i){return i*No}function Up(i){return(i&i-1)===0&&i!==0}function Np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Op(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Js={DEG2RAD:Ao,RAD2DEG:No,generateUUID:Ii,clamp:En,euclideanModulo:du,mapLinear:Ep,inverseLerp:wp,lerp:Co,damp:Tp,pingpong:Sp,smoothstep:Rp,smootherstep:Ap,randInt:Cp,randFloat:Pp,randFloatSpread:Ip,seededRandom:Lp,degToRad:Dp,radToDeg:Hp,isPowerOfTwo:Up,ceilPowerOfTwo:Np,floorPowerOfTwo:Fp,setQuaternionFromProperEuler:Op,normalize:Ge,denormalize:yi},Ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xe=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],M=r[1],x=r[4],b=r[7],L=r[2],C=r[5],A=r[8];return s[0]=o*_+a*M+c*L,s[3]=o*f+a*x+c*C,s[6]=o*p+a*b+c*A,s[1]=l*_+h*M+u*L,s[4]=l*f+h*x+u*C,s[7]=l*p+h*b+u*A,s[2]=d*_+m*M+g*L,s[5]=d*f+m*x+g*C,s[8]=d*p+m*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=e*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qc.makeScale(t,e)),this}rotate(t){return this.premultiply(Qc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qc=new xe;function _f(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bp(){let i=ja("canvas");return i.style.display="block",i}var i0={};function qa(i){i in i0||(i0[i]=!0,console.warn(i))}function kp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function zp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var r0=new xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),s0=new xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[Cr]:{transfer:Za,primaries:$a,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[on]:{transfer:je,primaries:$a,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Tc]:{transfer:Za,primaries:Ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(s0),fromReference:i=>i.applyMatrix3(r0)},[fu]:{transfer:je,primaries:Ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(s0),fromReference:i=>i.applyMatrix3(r0).convertLinearToSRGB()}},Gp=new Set([Cr,Tc]),ze={enabled:!0,_workingColorSpace:Cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=mo[t].toReference,r=mo[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return mo[i].primaries},getTransfer:function(i){return i===br?Za:mo[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(mo[t].luminanceCoefficients)}};function Us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,yh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ps===void 0&&(ps=ja("canvas")),ps.width=t.width,ps.height=t.height;let n=ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ja("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Us(e[n]/255)*255):e[n]=Us(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wp=0,Qa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(el(r[o].image)):s.push(el(r[o]))}else s=el(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xp=0,Qn=class i extends Tr{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Qi,r=Qi,s=_i,o=jr,a=xi,c=er,l=i.DEFAULT_ANISOTROPY,h=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ii(),this.name="",this.source=new Qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==of)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case Gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case Gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=of;Qn.DEFAULT_ANISOTROPY=1;var qe=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,b=(m+1)/2,L=(p+1)/2,C=(h+d)/4,A=(u+_)/4,k=(g+f)/4;return x>b&&x>L?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=A/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=k/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=k/s),this.set(n,r,s,e),this}let M=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xh=class extends Tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Qn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nr=class extends xh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},tc=class extends Qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mh=class extends Qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qe=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let L=Math.sqrt(x),C=Math.atan2(L,p*M);f=Math.sin(f*C)/L,a=Math.sin(a*C)/L}let b=a*M;if(c=c*f+d*b,l=l*f+m*b,h=h*f+g*b,u=u*f+_*b,f===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(En(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(o0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(o0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nl.copy(this).projectOnVector(t),this.sub(nl)}reflect(t){return this.sub(nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new T,o0=new Qe,ir=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),ha.subVectors(this.max,go),ms.subVectors(t.a,go),gs.subVectors(t.b,go),_s.subVectors(t.c,go),mr.subVectors(gs,ms),gr.subVectors(_s,gs),Gr.subVectors(ms,_s);let e=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Gr.z,Gr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Gr.z,0,-Gr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Gr.y,Gr.x,0];return!il(e,ms,gs,_s,ha)||(e=[1,0,0,0,1,0,0,0,1],!il(e,ms,gs,_s,ha))?!1:(ua.crossVectors(mr,gr),e=[ua.x,ua.y,ua.z],il(e,ms,gs,_s,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qi=[new T,new T,new T,new T,new T,new T,new T,new T],pi=new T,la=new ir,ms=new T,gs=new T,_s=new T,mr=new T,gr=new T,Gr=new T,go=new T,ha=new T,ua=new T,Wr=new T;function il(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Wr.fromArray(i,s);let a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),c=t.dot(Wr),l=e.dot(Wr),h=n.dot(Wr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var qp=new ir,_o=new T,rl=new T,rr=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qp.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);let e=_o.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(_o,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(rl)),this.expandByPoint(_o.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yi=new T,sl=new T,fa=new T,_r=new T,ol=new T,da=new T,al=new T,Fo=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){sl.copy(t).add(e).multiplyScalar(.5),fa.copy(e).sub(t).normalize(),_r.copy(this.origin).sub(sl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(fa),a=_r.dot(this.direction),c=-_r.dot(fa),l=_r.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(sl).addScaledVector(fa,d),m}intersectSphere(t,e){Yi.subVectors(t.center,this.origin);let n=Yi.dot(this.direction),r=Yi.dot(Yi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,n,r,s){ol.subVectors(e,t),da.subVectors(n,t),al.crossVectors(ol,da);let o=this.direction.dot(al),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,t);let c=a*this.direction.dot(da.crossVectors(_r,da));if(c<0)return null;let l=a*this.direction.dot(ol.cross(_r));if(l<0||c+l>o)return null;let h=-a*_r.dot(al);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f)}set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/ys.setFromMatrixColumn(t,0).length(),s=1/ys.setFromMatrixColumn(t,1).length(),o=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yp,t,Zp)}lookAt(t,e,n){let r=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),yr.crossVectors(n,ii),yr.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),yr.crossVectors(n,ii)),yr.normalize(),pa.crossVectors(ii,yr),r[0]=yr.x,r[4]=pa.x,r[8]=ii.x,r[1]=yr.y,r[5]=pa.y,r[9]=ii.y,r[2]=yr.z,r[6]=pa.z,r[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],M=n[3],x=n[7],b=n[11],L=n[15],C=r[0],A=r[4],k=r[8],O=r[12],y=r[1],v=r[5],q=r[9],V=r[13],J=r[2],mt=r[6],$=r[10],lt=r[14],I=r[3],Q=r[7],B=r[11],j=r[15];return s[0]=o*C+a*y+c*J+l*I,s[4]=o*A+a*v+c*mt+l*Q,s[8]=o*k+a*q+c*$+l*B,s[12]=o*O+a*V+c*lt+l*j,s[1]=h*C+u*y+d*J+m*I,s[5]=h*A+u*v+d*mt+m*Q,s[9]=h*k+u*q+d*$+m*B,s[13]=h*O+u*V+d*lt+m*j,s[2]=g*C+_*y+f*J+p*I,s[6]=g*A+_*v+f*mt+p*Q,s[10]=g*k+_*q+f*$+p*B,s[14]=g*O+_*V+f*lt+p*j,s[3]=M*C+x*y+b*J+L*I,s[7]=M*A+x*v+b*mt+L*Q,s[11]=M*k+x*q+b*$+L*B,s[15]=M*O+x*V+b*lt+L*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*m-n*c*m)+_*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],M=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,x=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,b=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,C=e*M+n*x+r*b+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=M*A,t[1]=(_*d*s-u*f*s-_*r*m+n*f*m+u*r*p-n*d*p)*A,t[2]=(a*f*s-_*c*s+_*r*l-n*f*l-a*r*p+n*c*p)*A,t[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*m-n*c*m)*A,t[4]=x*A,t[5]=(h*f*s-g*d*s+g*r*m-e*f*m-h*r*p+e*d*p)*A,t[6]=(g*c*s-o*f*s-g*r*l+e*f*l+o*r*p-e*c*p)*A,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*m+e*c*m)*A,t[8]=b*A,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*A,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*A,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*A,t[12]=L*A,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*f+e*u*f)*A,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*f-e*a*f)*A,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,f=o*u,p=a*u,M=c*l,x=c*h,b=c*u,L=n.x,C=n.y,A=n.z;return r[0]=(1-(_+p))*L,r[1]=(m+b)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(d+p))*C,r[6]=(f+M)*C,r[7]=0,r[8]=(g+x)*A,r[9]=(f-M)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=ys.set(r[0],r[1],r[2]).length(),o=ys.set(r[4],r[5],r[6]).length(),a=ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],mi.copy(this);let l=1/s,h=1/o,u=1/a;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,e.setFromRotationMatrix(mi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=tr){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r),m,g;if(a===tr)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ja)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=tr){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*l,m=(n+r)*h,g,_;if(a===tr)g=(o+s)*u,_=-2*u;else if(a===Ja)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ys=new T,mi=new ue,Yp=new T(0,0,0),Zp=new T(1,1,1),yr=new T,pa=new T,ii=new T,a0=new ue,c0=new Qe,Tn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(En(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return a0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(a0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return c0.setFromEuler(this),this.setFromQuaternion(c0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var ec=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$p=0,l0=new T,xs=new Qe,Zi=new ue,ma=new T,yo=new T,Kp=new T,Jp=new Qe,h0=new T(1,0,0),u0=new T(0,1,0),f0=new T(0,0,1),d0={type:"added"},jp={type:"removed"},Ms={type:"childadded",child:null},cl={type:"childremoved",child:null},pn=class i extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new Tn,n=new Qe,r=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new xe}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(h0,t)}rotateY(t){return this.rotateOnAxis(u0,t)}rotateZ(t){return this.rotateOnAxis(f0,t)}translateOnAxis(t,e){return l0.copy(t).applyQuaternion(this.quaternion),this.position.add(l0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(h0,t)}translateY(t){return this.translateOnAxis(u0,t)}translateZ(t){return this.translateOnAxis(f0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ma.copy(t):ma.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(yo,ma,this.up):Zi.lookAt(ma,yo,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(Zi),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(d0),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jp),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(d0),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,t,Kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,Jp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};pn.DEFAULT_UP=new T(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new T,$i=new T,ll=new T,Ki=new T,bs=new T,vs=new T,p0=new T,hl=new T,ul=new T,fl=new T,dl=new qe,pl=new qe,ml=new qe,vr=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),gi.subVectors(t,e),r.cross(gi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){gi.subVectors(r,e),$i.subVectors(n,e),ll.subVectors(t,e);let o=gi.dot(gi),a=gi.dot($i),c=gi.dot(ll),l=$i.dot($i),h=$i.dot(ll),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ki.x),c.addScaledVector(o,Ki.y),c.addScaledVector(a,Ki.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return dl.setScalar(0),pl.setScalar(0),ml.setScalar(0),dl.fromBufferAttribute(t,e),pl.fromBufferAttribute(t,n),ml.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(dl,s.x),o.addScaledVector(pl,s.y),o.addScaledVector(ml,s.z),o}static isFrontFacing(t,e,n,r){return gi.subVectors(n,e),$i.subVectors(t,e),gi.cross($i).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),gi.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;bs.subVectors(r,n),vs.subVectors(s,n),hl.subVectors(t,n);let c=bs.dot(hl),l=vs.dot(hl);if(c<=0&&l<=0)return e.copy(n);ul.subVectors(t,r);let h=bs.dot(ul),u=vs.dot(ul);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(bs,o);fl.subVectors(t,s);let m=bs.dot(fl),g=vs.dot(fl);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(vs,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return p0.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(p0,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(bs,o).addScaledVector(vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},ga={h:0,s:0,l:0};function gl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ze.workingColorSpace){return this.r=t,this.g=e,this.b=n,ze.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ze.workingColorSpace){if(t=du(t,1),e=En(e,0,1),n=En(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=gl(o,s,t+1/3),this.g=gl(o,s,t),this.b=gl(o,s,t-1/3)}return ze.toWorkingColorSpace(this,r),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=tl(t.r),this.g=tl(t.g),this.b=tl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return ze.fromWorkingColorSpace(kn.copy(this),t),Math.round(En(kn.r*255,0,255))*65536+Math.round(En(kn.g*255,0,255))*256+Math.round(En(kn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ze.workingColorSpace){ze.fromWorkingColorSpace(kn.copy(this),e);let n=kn.r,r=kn.g,s=kn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ze.workingColorSpace){return ze.fromWorkingColorSpace(kn.copy(this),e),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=on){ze.fromWorkingColorSpace(kn.copy(this),t);let e=kn.r,n=kn.g,r=kn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(xr),this.setHSL(xr.h+t,xr.s+e,xr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xr),t.getHSL(ga);let n=Co(xr.h,ga.h,e),r=Co(xr.s,ga.s,e),s=Co(xr.l,ga.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new zt;zt.NAMES=yf;var Qp=0,Mi=class extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Pi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Hl,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dl&&(n.blendSrc=this.blendSrc),this.blendDst!==Hl&&(n.blendDst=this.blendDst),this.blendEquation!==Kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},cn=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var dn=new T,_a=new Ht,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_h&&(t.usage=this.usage),t}};var nc=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ic=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},tm=0,ai=new ue,_l=new pn,Es=new T,ri=new ir,xo=new ir,vn=new T,we=class i extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_f(t)?ic:nc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new xe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,e,n){return ai.makeTranslation(t,e,n),this.applyMatrix4(ai),this}scale(t,e,n){return ai.makeScale(t,e,n),this.applyMatrix4(ai),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(ri.min,xo.min),ri.expandByPoint(vn),vn.addVectors(ri.max,xo.max),ri.expandByPoint(vn)):(ri.expandByPoint(xo.min),ri.expandByPoint(xo.max))}ri.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)vn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(vn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)vn.fromBufferAttribute(a,l),c&&(Es.fromBufferAttribute(t,l),vn.add(Es)),r=Math.max(r,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new T,c[k]=new T;let l=new T,h=new T,u=new T,d=new Ht,m=new Ht,g=new Ht,_=new T,f=new T;function p(k,O,y){l.fromBufferAttribute(n,k),h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,k),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,y),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let v=1/(m.x*g.y-g.x*m.y);isFinite(v)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(v),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(v),a[k].add(_),a[O].add(_),a[y].add(_),c[k].add(f),c[O].add(f),c[y].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let k=0,O=M.length;k<O;++k){let y=M[k],v=y.start,q=y.count;for(let V=v,J=v+q;V<J;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let x=new T,b=new T,L=new T,C=new T;function A(k){L.fromBufferAttribute(r,k),C.copy(L);let O=a[k];x.copy(O),x.sub(L.multiplyScalar(L.dot(O))).normalize(),b.crossVectors(C,O);let v=b.dot(c[k])<0?-1:1;o.setXYZW(k,x.x,x.y,x.z,v)}for(let k=0,O=M.length;k<O;++k){let y=M[k],v=y.start,q=y.count;for(let V=v,J=v+q;V<J;V+=3)A(t.getX(V+0)),A(t.getX(V+1)),A(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new T,s=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new Oe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},m0=new ue,Xr=new Fo,ya=new rr,g0=new T,xa=new T,Ma=new T,ba=new T,yl=new T,va=new T,_0=new T,Ea=new T,At=class extends pn{constructor(t=new we,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){va.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(yl.fromBufferAttribute(u,t),o?va.addScaledVector(yl,h):va.addScaledVector(yl.sub(e),h))}e.add(va)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),Xr.copy(t.ray).recast(t.near),!(ya.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(ya,g0)===null||Xr.origin.distanceToSquared(g0)>(t.far-t.near)**2))&&(m0.copy(s).invert(),Xr.copy(t.ray).applyMatrix4(m0),!(n.boundingBox!==null&&Xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],M=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,L=x;b<L;b+=3){let C=a.getX(b),A=a.getX(b+1),k=a.getX(b+2);r=wa(this,p,t,n,l,h,u,C,A,k),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let M=a.getX(f),x=a.getX(f+1),b=a.getX(f+2);r=wa(this,o,t,n,l,h,u,M,x,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],M=Math.max(f.start,m.start),x=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,L=x;b<L;b+=3){let C=b,A=b+1,k=b+2;r=wa(this,p,t,n,l,h,u,C,A,k),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let M=f,x=f+1,b=f+2;r=wa(this,o,t,n,l,h,u,M,x,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}};function em(i,t,e,n,r,s,o,a){let c;if(t.side===jn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===zn,a),c===null)return null;Ea.copy(a),Ea.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ea);return l<e.near||l>e.far?null:{distance:l,point:Ea.clone(),object:i}}function wa(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,xa),i.getVertexPosition(c,Ma),i.getVertexPosition(l,ba);let h=em(i,t,e,n,xa,Ma,ba,_0);if(h){let u=new T;vr.getBarycoord(_0,xa,Ma,ba,u),r&&(h.uv=vr.getInterpolatedAttribute(r,a,c,l,u,new Ht)),s&&(h.uv1=vr.getInterpolatedAttribute(s,a,c,l,u,new Ht)),o&&(h.normal=vr.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new T,materialIndex:0};vr.getNormal(xa,Ma,ba,d.normal),h.face=d,h.barycoord=u}return h}var ln=class i extends we{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(_,f,p,M,x,b,L,C,A,k,O){let y=b/A,v=L/k,q=b/2,V=L/2,J=C/2,mt=A+1,$=k+1,lt=0,I=0,Q=new T;for(let B=0;B<$;B++){let j=B*v-V;for(let ct=0;ct<mt;ct++){let Y=ct*y-q;Q[_]=Y*M,Q[f]=j*x,Q[p]=J,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[f]=0,Q[p]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(ct/A),u.push(1-B/k),lt+=1}}for(let B=0;B<k;B++)for(let j=0;j<A;j++){let ct=d+j+mt*B,Y=d+j+mt*(B+1),R=d+(j+1)+mt*(B+1),S=d+(j+1)+mt*B;c.push(ct,Y,S),c.push(Y,R,S),I+=6}a.addGroup(m,I,O),m+=I,d+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Yn(i){let t={};for(let e=0;e<i.length;e++){let n=Vs(i[e]);for(let r in n)t[r]=n[r]}return t}function nm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}var im={clone:Vs,merge:Yn},rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},rc=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=tr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mr=new T,y0=new Ht,x0=new Ht,wn=class extends rc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=No*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z)}getViewSize(t,e){return this.getViewBounds(t,y0,x0),e.subVectors(x0,y0)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ws=-90,Ts=1,bh=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wn(ws,Ts,t,e);r.layers=this.layers,this.add(r);let s=new wn(ws,Ts,t,e);s.layers=this.layers,this.add(s);let o=new wn(ws,Ts,t,e);o.layers=this.layers,this.add(o);let a=new wn(ws,Ts,t,e);a.layers=this.layers,this.add(a);let c=new wn(ws,Ts,t,e);c.layers=this.layers,this.add(c);let l=new wn(ws,Ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===tr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},sc=class extends Qn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Os,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vh=class extends nr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new sc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_i}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ln(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Er});s.uniforms.tEquirect.value=e;let o=new At(r,s),a=e.minFilter;return e.minFilter===jr&&(e.minFilter=_i),new bh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},xl=new T,om=new T,am=new xe,ji=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=xl.subVectors(n,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(xl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||am.getNormalMatrix(t),r=this.coplanarPoint(xl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qr=new rr,Ta=new T,Oo=class{constructor(t=new ji,e=new ji,n=new ji,r=new ji,s=new ji,o=new ji){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=tr){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],M=r[13],x=r[14],b=r[15];if(n[0].setComponents(c-s,d-l,f-m,b-p).normalize(),n[1].setComponents(c+s,d+l,f+m,b+p).normalize(),n[2].setComponents(c+o,d+h,f+g,b+M).normalize(),n[3].setComponents(c-o,d-h,f-g,b-M).normalize(),n[4].setComponents(c-a,d-u,f-_,b-x).normalize(),e===tr)n[5].setComponents(c+a,d+u,f+_,b+x).normalize();else if(e===Ja)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(t){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(t.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ta.x=r.normal.x>0?t.max.x:t.min.x,Ta.y=r.normal.y>0?t.max.y:t.min.y,Ta.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function cm(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var sr=class i extends we{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let M=p*d-o;for(let x=0;x<l;x++){let b=x*u-s;g.push(b,-M,0),_.push(0,0,1),f.push(x/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let x=M+l*p,b=M+l*(p+1),L=M+1+l*(p+1),C=M+1+l*p;m.push(x,b,C),m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lm=`#define PI 3.141592653589793
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hm=`vec3 transformedNormal = objectNormal;
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
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`
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
}`,zm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tg=`uniform bool receiveShadow;
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
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
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
#endif`,ag=`struct PhysicalMaterial {
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
}`,cg=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yg=`#if defined( USE_POINTS_UV )
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
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yg=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n1=`#ifdef USE_TRANSMISSION
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
#endif`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`#include <common>
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
}`,m1=`#if DEPTH_PACKING == 3200
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
}`,g1=`#define DISTANCE
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
}`,_1=`#define DISTANCE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
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
}`,b1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,E1=`uniform vec3 diffuse;
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
}`,w1=`#define LAMBERT
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
}`,T1=`#define LAMBERT
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
}`,S1=`#define MATCAP
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
}`,R1=`#define MATCAP
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
}`,A1=`#define NORMAL
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
}`,C1=`#define NORMAL
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
}`,P1=`#define PHONG
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
}`,I1=`#define PHONG
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
}`,L1=`#define STANDARD
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
}`,D1=`#define STANDARD
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
}`,H1=`#define TOON
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
}`,U1=`#define TOON
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
}`,N1=`uniform float size;
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
}`,F1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,B1=`uniform vec3 color;
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
}`,k1=`uniform float rotation;
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
}`,z1=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:lm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:fm,alphatest_fragment:dm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:ym,begin_vertex:xm,beginnormal_vertex:Mm,bsdfs:bm,iridescence_fragment:vm,bumpmap_pars_fragment:Em,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:Rm,color_fragment:Am,color_pars_fragment:Cm,color_pars_vertex:Pm,color_vertex:Im,common:Lm,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Um,displacementmap_vertex:Nm,emissivemap_fragment:Fm,emissivemap_pars_fragment:Om,colorspace_fragment:Bm,colorspace_pars_fragment:km,envmap_fragment:zm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Gm,envmap_pars_vertex:Wm,envmap_physical_pars_fragment:eg,envmap_vertex:Xm,fog_vertex:qm,fog_pars_vertex:Ym,fog_fragment:Zm,fog_pars_fragment:$m,gradientmap_pars_fragment:Km,lightmap_pars_fragment:Jm,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Qm,lights_pars_begin:tg,lights_toon_fragment:ng,lights_toon_pars_fragment:ig,lights_phong_fragment:rg,lights_phong_pars_fragment:sg,lights_physical_fragment:og,lights_physical_pars_fragment:ag,lights_fragment_begin:cg,lights_fragment_maps:lg,lights_fragment_end:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:yg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:bg,morphcolor_vertex:vg,morphnormal_vertex:Eg,morphtarget_pars_vertex:wg,morphtarget_vertex:Tg,normal_fragment_begin:Sg,normal_fragment_maps:Rg,normal_pars_fragment:Ag,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:Ug,opaque_fragment:Ng,packing:Fg,premultiplied_alpha_fragment:Og,project_vertex:Bg,dithering_fragment:kg,dithering_pars_fragment:zg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:Zg,skinning_pars_vertex:$g,skinning_vertex:Kg,skinnormal_vertex:Jg,specularmap_fragment:jg,specularmap_pars_fragment:Qg,tonemapping_fragment:t1,tonemapping_pars_fragment:e1,transmission_fragment:n1,transmission_pars_fragment:i1,uv_pars_fragment:r1,uv_pars_vertex:s1,uv_vertex:o1,worldpos_vertex:a1,background_vert:c1,background_frag:l1,backgroundCube_vert:h1,backgroundCube_frag:u1,cube_vert:f1,cube_frag:d1,depth_vert:p1,depth_frag:m1,distanceRGBA_vert:g1,distanceRGBA_frag:_1,equirect_vert:y1,equirect_frag:x1,linedashed_vert:M1,linedashed_frag:b1,meshbasic_vert:v1,meshbasic_frag:E1,meshlambert_vert:w1,meshlambert_frag:T1,meshmatcap_vert:S1,meshmatcap_frag:R1,meshnormal_vert:A1,meshnormal_frag:C1,meshphong_vert:P1,meshphong_frag:I1,meshphysical_vert:L1,meshphysical_frag:D1,meshtoon_vert:H1,meshtoon_frag:U1,points_vert:N1,points_frag:F1,shadow_vert:O1,shadow_frag:B1,sprite_vert:k1,sprite_frag:z1},Zt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Ai={basic:{uniforms:Yn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Yn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Yn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Yn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Yn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Yn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Yn([Zt.points,Zt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Yn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Yn([Zt.common,Zt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Yn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Yn([Zt.sprite,Zt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Yn([Zt.common,Zt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Yn([Zt.lights,Zt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Ai.physical={uniforms:Yn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Sa={r:0,b:0,g:0},Yr=new Tn,V1=new ue;function G1(i,t,e,n,r,s,o){let a=new zt(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,b=g(M);b===null?p(a,c):b&&b.isColor&&(p(b,1),x=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(M,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===wc)?(h===void 0&&(h=new At(new ln(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Vs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Yr.copy(x.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(V1.makeRotationFromEuler(Yr)),h.material.toneMapped=ze.getTransfer(b.colorSpace)!==je,(u!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new At(new sr(2,2),new ti({name:"BackgroundMaterial",uniforms:Vs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ze.getTransfer(b.colorSpace)!==je,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(Sa,xf(i)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:f}}function W1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(y,v,q,V,J){let mt=!1,$=u(V,q,v);s!==$&&(s=$,l(s.object)),mt=m(y,V,q,J),mt&&g(y,V,q,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(mt||o)&&(o=!1,b(y,v,q,V),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,v,q){let V=q.wireframe===!0,J=n[y.id];J===void 0&&(J={},n[y.id]=J);let mt=J[v.id];mt===void 0&&(mt={},J[v.id]=mt);let $=mt[V];return $===void 0&&($=d(c()),mt[V]=$),$}function d(y){let v=[],q=[],V=[];for(let J=0;J<e;J++)v[J]=0,q[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:q,attributeDivisors:V,object:y,attributes:{},index:null}}function m(y,v,q,V){let J=s.attributes,mt=v.attributes,$=0,lt=q.getAttributes();for(let I in lt)if(lt[I].location>=0){let B=J[I],j=mt[I];if(j===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;$++}return s.attributesNum!==$||s.index!==V}function g(y,v,q,V){let J={},mt=v.attributes,$=0,lt=q.getAttributes();for(let I in lt)if(lt[I].location>=0){let B=mt[I];B===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(B=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(B=y.instanceColor));let j={};j.attribute=B,B&&B.data&&(j.data=B.data),J[I]=j,$++}s.attributes=J,s.attributesNum=$,s.index=V}function _(){let y=s.newAttributes;for(let v=0,q=y.length;v<q;v++)y[v]=0}function f(y){p(y,0)}function p(y,v){let q=s.newAttributes,V=s.enabledAttributes,J=s.attributeDivisors;q[y]=1,V[y]===0&&(i.enableVertexAttribArray(y),V[y]=1),J[y]!==v&&(i.vertexAttribDivisor(y,v),J[y]=v)}function M(){let y=s.newAttributes,v=s.enabledAttributes;for(let q=0,V=v.length;q<V;q++)v[q]!==y[q]&&(i.disableVertexAttribArray(q),v[q]=0)}function x(y,v,q,V,J,mt,$){$===!0?i.vertexAttribIPointer(y,v,q,J,mt):i.vertexAttribPointer(y,v,q,V,J,mt)}function b(y,v,q,V){_();let J=V.attributes,mt=q.getAttributes(),$=v.defaultAttributeValues;for(let lt in mt){let I=mt[lt];if(I.location>=0){let Q=J[lt];if(Q===void 0&&(lt==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),lt==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){let B=Q.normalized,j=Q.itemSize,ct=t.get(Q);if(ct===void 0)continue;let Y=ct.buffer,R=ct.type,S=ct.bytesPerElement,D=R===i.INT||R===i.UNSIGNED_INT||Q.gpuType===ru;if(Q.isInterleavedBufferAttribute){let W=Q.data,H=W.stride,U=Q.offset;if(W.isInstancedInterleavedBuffer){for(let X=0;X<I.locationSize;X++)p(I.location+X,W.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let X=0;X<I.locationSize;X++)f(I.location+X);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let X=0;X<I.locationSize;X++)x(I.location+X,j/I.locationSize,R,B,H*S,(U+j/I.locationSize*X)*S,D)}else{if(Q.isInstancedBufferAttribute){for(let W=0;W<I.locationSize;W++)p(I.location+W,Q.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let W=0;W<I.locationSize;W++)f(I.location+W);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let W=0;W<I.locationSize;W++)x(I.location+W,j/I.locationSize,R,B,j*S,j/I.locationSize*W*S,D)}}else if($!==void 0){let B=$[lt];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(I.location,B);break;case 3:i.vertexAttrib3fv(I.location,B);break;case 4:i.vertexAttrib4fv(I.location,B);break;default:i.vertexAttrib1fv(I.location,B)}}}}M()}function L(){k();for(let y in n){let v=n[y];for(let q in v){let V=v[q];for(let J in V)h(V[J].object),delete V[J];delete v[q]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;let v=n[y.id];for(let q in v){let V=v[q];for(let J in V)h(V[J].object),delete V[J];delete v[q]}delete n[y.id]}function A(y){for(let v in n){let q=n[v];if(q[y.id]===void 0)continue;let V=q[y.id];for(let J in V)h(V[J].object),delete V[J];delete q[y.id]}}function k(){O(),o=!0,s!==r&&(s=r,l(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:k,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:M}}function X1(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function q1(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==xi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let k=A===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==er&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!k)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:L,maxSamples:C}}function Y1(i){let t=this,e=null,n=0,r=!1,s=!1,o=new ji,a=new xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{let M=s?0:n,x=M*4,b=p.clippingState||null;c.value=b,b=h(g,d,x,m);for(let L=0;L!==x;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,b=m;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Z1(i){let t=new WeakMap;function e(o,a){return a===Ho?o.mapping=Os:a===Vl&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ho||a===Vl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new vh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var oc=class extends rc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ls=4,M0=[.125,.215,.35,.446,.526,.582],Jr=20,Ml=new oc,b0=new zt,bl=null,vl=0,El=0,wl=!1,$r=(1+Math.sqrt(5))/2,Ss=1/$r,v0=[new T(-$r,Ss,0),new T($r,Ss,0),new T(-Ss,0,$r),new T(Ss,0,$r),new T(0,$r,-Ss),new T(0,$r,Ss),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],ac=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){bl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bl,vl,El),this._renderer.xr.enabled=wl,t.scissorTest=!1,Ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bl=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Ko,format:xi,colorSpace:Cr,depthBuffer:!1},r=E0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$1(s)),this._blurMaterial=K1(s,t,e)}return r}_compileMaterial(t){let e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Ml)}_sceneToCubeUV(t,e,n,r){let a=new wn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(b0),h.toneMapping=wr,h.autoClear=!1;let m=new cn({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),g=new At(new ln,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(b0),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Ra(r,M*x,p>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Os||t.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Ra(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ml)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=v0[(r-s-1)%v0.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new At(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Jr-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):Jr;f>Jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Jr}`);let p=[],M=0;for(let A=0;A<Jr;++A){let k=A/_,O=Math.exp(-k*k/2);p.push(O),A===0?M+=O:A<f&&(M+=2*O)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let b=this._sizeLods[r],L=3*b*(r>x-Ls?r-x+Ls:0),C=4*(this._cubeSize-b);Ra(e,L,C,3*b,2*b),c.setRenderTarget(e),c.render(u,Ml)}};function $1(i){let t=[],e=[],n=[],r=i,s=i-Ls+1+M0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Ls?c=M0[o-i+Ls-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,M=new Float32Array(_*g*m),x=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let C=0;C<m;C++){let A=C%3*2/3-1,k=C>2?0:-1,O=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];M.set(O,_*g*C),x.set(d,f*g*C);let y=[C,C,C,C,C,C];b.set(y,p*g*C)}let L=new we;L.setAttribute("position",new Oe(M,_)),L.setAttribute("uv",new Oe(x,f)),L.setAttribute("faceIndex",new Oe(b,p)),t.push(L),r>Ls&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function E0(i,t,e){let n=new nr(i,t,e);return n.texture.mapping=wc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function K1(i,t,e){let n=new Float32Array(Jr),r=new T(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function w0(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function T0(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function J1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ho||c===Vl,h=c===Os||c===Bs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ac(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new ac(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function j1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&qa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Q1(i,t,e,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let M=m.array;_=m.version;for(let x=0,b=M.length;x<b;x+=3){let L=M[x+0],C=M[x+1],A=M[x+2];d.push(L,C,C,A,A,L)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,b=M.length/3-1;x<b;x+=3){let L=x+0,C=x+1,A=x+2;d.push(L,C,C,A,A,L)}}else return;let f=new(_f(d)?ic:nc)(d,1);f.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function t_(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function u(d,m,g,_){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=m[M];for(let M=0;M<_.length;M++)e.update(p,n,_[M])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function e_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function n_(i,t,e){let n=new WeakMap,r=new qe;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let O=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let b=a.attributes.position.count*x,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*L*4*u),A=new tc(C,b,L,u);A.type=Ci,A.needsUpdate=!0;let k=x*4;for(let y=0;y<u;y++){let v=f[y],q=p[y],V=M[y],J=b*L*4*y;for(let mt=0;mt<v.count;mt++){let $=mt*k;m===!0&&(r.fromBufferAttribute(v,mt),C[J+$+0]=r.x,C[J+$+1]=r.y,C[J+$+2]=r.z,C[J+$+3]=0),g===!0&&(r.fromBufferAttribute(q,mt),C[J+$+4]=r.x,C[J+$+5]=r.y,C[J+$+6]=r.z,C[J+$+7]=0),_===!0&&(r.fromBufferAttribute(V,mt),C[J+$+8]=r.x,C[J+$+9]=r.y,C[J+$+10]=r.z,C[J+$+11]=V.itemSize===4?r.w:1)}}d={count:u,texture:A,size:new Ht(b,L)},n.set(a,d),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function i_(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var cc=class extends Qn{constructor(t,e,n,r,s,o,a,c,l,h=Hs){if(h!==Hs&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hs&&(n=ts),n===void 0&&h===zs&&(n=ks),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bf=new Qn,S0=new cc(1,1),vf=new tc,Ef=new Mh,wf=new sc,R0=[],A0=[],C0=new Float32Array(16),P0=new Float32Array(9),I0=new Float32Array(4);function js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=R0[r];if(s===void 0&&(s=new Float32Array(r),R0[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function yn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sc(i,t){let e=A0[t];e===void 0&&(e=new Int32Array(t),A0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;i.uniform2fv(this.addr,t),xn(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(yn(e,t))return;i.uniform3fv(this.addr,t),xn(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;i.uniform4fv(this.addr,t),xn(e,t)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(yn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(yn(e,n))return;I0.set(n),i.uniformMatrix2fv(this.addr,!1,I0),xn(e,n)}}function l_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(yn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(yn(e,n))return;P0.set(n),i.uniformMatrix3fv(this.addr,!1,P0),xn(e,n)}}function h_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(yn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(yn(e,n))return;C0.set(n),i.uniformMatrix4fv(this.addr,!1,C0),xn(e,n)}}function u_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;i.uniform2iv(this.addr,t),xn(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(yn(e,t))return;i.uniform3iv(this.addr,t),xn(e,t)}}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;i.uniform4iv(this.addr,t),xn(e,t)}}function m_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;i.uniform2uiv(this.addr,t),xn(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(yn(e,t))return;i.uniform3uiv(this.addr,t),xn(e,t)}}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;i.uniform4uiv(this.addr,t),xn(e,t)}}function x_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(S0.compareFunction=gf,s=S0):s=bf,e.setTexture2D(t||s,r)}function M_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ef,r)}function b_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||wf,r)}function v_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||vf,r)}function E_(i){switch(i){case 5126:return r_;case 35664:return s_;case 35665:return o_;case 35666:return a_;case 35674:return c_;case 35675:return l_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return v_}}function w_(i,t){i.uniform1fv(this.addr,t)}function T_(i,t){let e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function S_(i,t){let e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function R_(i,t){let e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function A_(i,t){let e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C_(i,t){let e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function P_(i,t){let e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I_(i,t){i.uniform1iv(this.addr,t)}function L_(i,t){i.uniform2iv(this.addr,t)}function D_(i,t){i.uniform3iv(this.addr,t)}function H_(i,t){i.uniform4iv(this.addr,t)}function U_(i,t){i.uniform1uiv(this.addr,t)}function N_(i,t){i.uniform2uiv(this.addr,t)}function F_(i,t){i.uniform3uiv(this.addr,t)}function O_(i,t){i.uniform4uiv(this.addr,t)}function B_(i,t,e){let n=this.cache,r=t.length,s=Sc(e,r);yn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||bf,s[o])}function k_(i,t,e){let n=this.cache,r=t.length,s=Sc(e,r);yn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ef,s[o])}function z_(i,t,e){let n=this.cache,r=t.length,s=Sc(e,r);yn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||wf,s[o])}function V_(i,t,e){let n=this.cache,r=t.length,s=Sc(e,r);yn(n,s)||(i.uniform1iv(this.addr,s),xn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||vf,s[o])}function G_(i){switch(i){case 5126:return w_;case 35664:return T_;case 35665:return S_;case 35666:return R_;case 35674:return A_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return H_;case 5125:return U_;case 36294:return N_;case 36295:return F_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return V_}}var Eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E_(e.type)}},wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G_(e.type)}},Th=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function L0(i,t){i.seq.push(t),i.map[t.id]=t}function W_(i,t,e){let n=i.name,r=n.length;for(Tl.lastIndex=0;;){let s=Tl.exec(n),o=Tl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){L0(e,l===void 0?new Eh(a,i,t):new wh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Th(a),L0(e,u)),e=u}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);W_(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function D0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var X_=37297,q_=0;function Y_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Z_(i){let t=ze.getPrimaries(ze.workingColorSpace),e=ze.getPrimaries(i),n;switch(t===e?n="":t===Ka&&e===$a?n="LinearDisplayP3ToLinearSRGB":t===$a&&e===Ka&&(n="LinearSRGBToLinearDisplayP3"),i){case Cr:case Tc:return[n,"LinearTransferOETF"];case on:case fu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function H0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Y_(i.getShaderSource(t),o)}else return r}function $_(i,t){let e=Z_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function K_(i,t){let e;switch(t){case op:e="Linear";break;case ap:e="Reinhard";break;case cp:e="Cineon";break;case $o:e="ACESFilmic";break;case hp:e="AgX";break;case up:e="Neutral";break;case lp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Aa=new T;function J_(){ze.getLuminanceCoefficients(Aa);let i=Aa.x.toFixed(4),t=Aa.y.toFixed(4),e=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function Q_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ty(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ro(i){return i!==""}function U0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function N0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(i){return i.replace(ey,iy)}var ny=new Map;function iy(i,t){let e=ye[t];if(e===void 0){let n=ny.get(t);if(n!==void 0)e=ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sh(e)}var ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(i){return i.replace(ry,sy)}function sy(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function O0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function oy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function ay(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case Bs:t="ENVMAP_TYPE_CUBE";break;case wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cy(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Bs&&(t="ENVMAP_MODE_REFRACTION"),t}function ly(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nu:t="ENVMAP_BLENDING_MULTIPLY";break;case iu:t="ENVMAP_BLENDING_MIX";break;case sp:t="ENVMAP_BLENDING_ADD";break}return t}function hy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function uy(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=oy(e),l=ay(e),h=cy(e),u=ly(e),d=hy(e),m=j_(e),g=Q_(s),_=r.createProgram(),f,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ro).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(f=[O0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[O0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wr?"#define TONE_MAPPING":"",e.toneMapping!==wr?ye.tonemapping_pars_fragment:"",e.toneMapping!==wr?K_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,$_("linearToOutputTexel",e.outputColorSpace),J_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Sh(o),o=U0(o,e),o=N0(o,e),a=Sh(a),a=U0(a,e),a=N0(a,e),o=F0(o),a=F0(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===e0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===e0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=M+f+o,b=M+p+a,L=D0(r,r.VERTEX_SHADER,x),C=D0(r,r.FRAGMENT_SHADER,b);r.attachShader(_,L),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(v){if(i.debug.checkShaderErrors){let q=r.getProgramInfoLog(_).trim(),V=r.getShaderInfoLog(L).trim(),J=r.getShaderInfoLog(C).trim(),mt=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,C);else{let lt=H0(r,L,"vertex"),I=H0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+q+`
`+lt+`
`+I)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||J==="")&&($=!1);$&&(v.diagnostics={runnable:mt,programLog:q,vertexShader:{log:V,prefix:f},fragmentShader:{log:J,prefix:p}})}r.deleteShader(L),r.deleteShader(C),k=new Ns(r,_),O=ty(r,_)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let O;this.getAttributes=function(){return O===void 0&&A(this),O};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,X_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}var fy=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ah(t),e.set(t,n)),n}},Ah=class{constructor(t){this.id=fy++,this.code=t,this.usedTimes=0}};function dy(i,t,e,n,r,s,o){let a=new ec,c=new Rh,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,v,q,V,J){let mt=V.fog,$=J.geometry,lt=y.isMeshStandardMaterial?V.environment:null,I=(y.isMeshStandardMaterial?e:t).get(y.envMap||lt),Q=I&&I.mapping===wc?I.image.height:null,B=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let j=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ct=j!==void 0?j.length:0,Y=0;$.morphAttributes.position!==void 0&&(Y=1),$.morphAttributes.normal!==void 0&&(Y=2),$.morphAttributes.color!==void 0&&(Y=3);let R,S,D,W;if(B){let gn=Ai[B];R=gn.vertexShader,S=gn.fragmentShader}else R=y.vertexShader,S=y.fragmentShader,c.update(y),D=c.getVertexShaderID(y),W=c.getFragmentShaderID(y);let H=i.getRenderTarget(),U=J.isInstancedMesh===!0,X=J.isBatchedMesh===!0,Z=!!y.map,G=!!y.matcap,w=!!I,it=!!y.aoMap,K=!!y.lightMap,tt=!!y.bumpMap,et=!!y.normalMap,nt=!!y.displacementMap,rt=!!y.emissiveMap,P=!!y.metalnessMap,E=!!y.roughnessMap,F=y.anisotropy>0,ot=y.clearcoat>0,dt=y.dispersion>0,st=y.iridescence>0,Tt=y.sheen>0,vt=y.transmission>0,yt=F&&!!y.anisotropyMap,Ut=ot&&!!y.clearcoatMap,Mt=ot&&!!y.clearcoatNormalMap,Lt=ot&&!!y.clearcoatRoughnessMap,Yt=st&&!!y.iridescenceMap,Nt=st&&!!y.iridescenceThicknessMap,Ct=Tt&&!!y.sheenColorMap,Ot=Tt&&!!y.sheenRoughnessMap,Kt=!!y.specularMap,ie=!!y.specularColorMap,at=!!y.specularIntensityMap,Gt=vt&&!!y.transmissionMap,Et=vt&&!!y.thicknessMap,It=!!y.gradientMap,Ft=!!y.alphaMap,Vt=y.alphaTest>0,ge=!!y.alphaHash,sn=!!y.extensions,_e=wr;y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(_e=i.toneMapping);let de={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:R,fragmentShader:S,defines:y.defines,customVertexShaderID:D,customFragmentShaderID:W,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:X,batchingColor:X&&J._colorsTexture!==null,instancing:U,instancingColor:U&&J.instanceColor!==null,instancingMorph:U&&J.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Cr,alphaToCoverage:!!y.alphaToCoverage,map:Z,matcap:G,envMap:w,envMapMode:w&&I.mapping,envMapCubeUVHeight:Q,aoMap:it,lightMap:K,bumpMap:tt,normalMap:et,displacementMap:m&&nt,emissiveMap:rt,normalMapObjectSpace:et&&y.normalMapType===mp,normalMapTangentSpace:et&&y.normalMapType===uu,metalnessMap:P,roughnessMap:E,anisotropy:F,anisotropyMap:yt,clearcoat:ot,clearcoatMap:Ut,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Lt,dispersion:dt,iridescence:st,iridescenceMap:Yt,iridescenceThicknessMap:Nt,sheen:Tt,sheenColorMap:Ct,sheenRoughnessMap:Ot,specularMap:Kt,specularColorMap:ie,specularIntensityMap:at,transmission:vt,transmissionMap:Gt,thicknessMap:Et,gradientMap:It,opaque:y.transparent===!1&&y.blending===Pi&&y.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Vt,alphaHash:ge,combine:y.combine,mapUv:Z&&f(y.map.channel),aoMapUv:it&&f(y.aoMap.channel),lightMapUv:K&&f(y.lightMap.channel),bumpMapUv:tt&&f(y.bumpMap.channel),normalMapUv:et&&f(y.normalMap.channel),displacementMapUv:nt&&f(y.displacementMap.channel),emissiveMapUv:rt&&f(y.emissiveMap.channel),metalnessMapUv:P&&f(y.metalnessMap.channel),roughnessMapUv:E&&f(y.roughnessMap.channel),anisotropyMapUv:yt&&f(y.anisotropyMap.channel),clearcoatMapUv:Ut&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&f(y.sheenRoughnessMap.channel),specularMapUv:Kt&&f(y.specularMap.channel),specularColorMapUv:ie&&f(y.specularColorMap.channel),specularIntensityMapUv:at&&f(y.specularIntensityMap.channel),transmissionMapUv:Gt&&f(y.transmissionMap.channel),thicknessMapUv:Et&&f(y.thicknessMap.channel),alphaMapUv:Ft&&f(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(et||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!$.attributes.uv&&(Z||Ft),fog:!!mt,useFog:y.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Y,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Z&&y.map.isVideoTexture===!0&&ze.getTransfer(y.map.colorSpace)===je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===jn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:sn&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(sn&&y.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function M(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let q in y.defines)v.push(q),v.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(x(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function x(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),y.push(a.mask)}function L(y){let v=_[y.type],q;if(v){let V=Ai[v];q=im.clone(V.uniforms)}else q=y.uniforms;return q}function C(y,v){let q;for(let V=0,J=h.length;V<J;V++){let mt=h[V];if(mt.cacheKey===v){q=mt,++q.usedTimes;break}}return q===void 0&&(q=new uy(i,v,y,s),h.push(q)),q}function A(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function k(y){c.remove(y)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:L,acquireProgram:C,releaseProgram:A,releaseShaderCache:k,programs:h,dispose:O}}function py(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function my(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function B0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function k0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,g,_,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||my),n.length>1&&n.sort(d||B0),r.length>1&&r.sort(d||B0)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function gy(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new k0,i.set(n,[o])):r>=s.length?(o=new k0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function _y(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new zt};break;case"SpotLight":e={position:new T,direction:new T,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function yy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var xy=0;function My(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function by(i){let t=new _y,e=yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let r=new T,s=new ue,o=new ue;function a(l){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,M=0,x=0,b=0,L=0,C=0,A=0;l.sort(My);for(let O=0,y=l.length;O<y;O++){let v=l[O],q=v.color,V=v.intensity,J=v.distance,mt=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=q.r*V,u+=q.g*V,d+=q.b*V;else if(v.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(v.sh.coefficients[$],V);A++}else if(v.isDirectionalLight){let $=t.get(v);if($.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let lt=v.shadow,I=e.get(v);I.shadowIntensity=lt.intensity,I.shadowBias=lt.bias,I.shadowNormalBias=lt.normalBias,I.shadowRadius=lt.radius,I.shadowMapSize=lt.mapSize,n.directionalShadow[m]=I,n.directionalShadowMap[m]=mt,n.directionalShadowMatrix[m]=v.shadow.matrix,M++}n.directional[m]=$,m++}else if(v.isSpotLight){let $=t.get(v);$.position.setFromMatrixPosition(v.matrixWorld),$.color.copy(q).multiplyScalar(V),$.distance=J,$.coneCos=Math.cos(v.angle),$.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),$.decay=v.decay,n.spot[_]=$;let lt=v.shadow;if(v.map&&(n.spotLightMap[L]=v.map,L++,lt.updateMatrices(v),v.castShadow&&C++),n.spotLightMatrix[_]=lt.matrix,v.castShadow){let I=e.get(v);I.shadowIntensity=lt.intensity,I.shadowBias=lt.bias,I.shadowNormalBias=lt.normalBias,I.shadowRadius=lt.radius,I.shadowMapSize=lt.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=mt,b++}_++}else if(v.isRectAreaLight){let $=t.get(v);$.color.copy(q).multiplyScalar(V),$.halfWidth.set(v.width*.5,0,0),$.halfHeight.set(0,v.height*.5,0),n.rectArea[f]=$,f++}else if(v.isPointLight){let $=t.get(v);if($.color.copy(v.color).multiplyScalar(v.intensity),$.distance=v.distance,$.decay=v.decay,v.castShadow){let lt=v.shadow,I=e.get(v);I.shadowIntensity=lt.intensity,I.shadowBias=lt.bias,I.shadowNormalBias=lt.normalBias,I.shadowRadius=lt.radius,I.shadowMapSize=lt.mapSize,I.shadowCameraNear=lt.camera.near,I.shadowCameraFar=lt.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=mt,n.pointShadowMatrix[g]=v.shadow.matrix,x++}n.point[g]=$,g++}else if(v.isHemisphereLight){let $=t.get(v);$.skyColor.copy(v.color).multiplyScalar(V),$.groundColor.copy(v.groundColor).multiplyScalar(V),n.hemi[p]=$,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let k=n.hash;(k.directionalLength!==m||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==f||k.hemiLength!==p||k.numDirectionalShadows!==M||k.numPointShadows!==x||k.numSpotShadows!==b||k.numSpotMaps!==L||k.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,k.directionalLength=m,k.pointLength=g,k.spotLength=_,k.rectAreaLength=f,k.hemiLength=p,k.numDirectionalShadows=M,k.numPointShadows=x,k.numSpotShadows=b,k.numSpotMaps=L,k.numLightProbes=A,n.version=xy++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0,f=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let x=l[p];if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(x.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),m++}else if(x.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(x.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function z0(i){let t=new by(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function vy(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new z0(i),t.set(r,[a])):s>=o.length?(a=new z0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ch=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ph=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wy=`uniform sampler2D shadow_pass;
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
}`;function Ty(i,t,e){let n=new Oo,r=new Ht,s=new Ht,o=new qe,a=new Ch({depthPacking:pp}),c=new Ph,l={},h=e.maxTextureSize,u={[zn]:jn,[jn]:zn,[Fe]:Fe},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Ey,fragmentShader:wy}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new At(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sf;let p=this.type;this.render=function(C,A,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;let O=i.getRenderTarget(),y=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Er),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let V=p!==Ji&&this.type===Ji,J=p===Ji&&this.type!==Ji;for(let mt=0,$=C.length;mt<$;mt++){let lt=C[mt],I=lt.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let Q=I.getFrameExtents();if(r.multiply(Q),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,I.mapSize.y=s.y)),I.map===null||V===!0||J===!0){let j=this.type!==Ji?{minFilter:Pn,magFilter:Pn}:{};I.map!==null&&I.map.dispose(),I.map=new nr(r.x,r.y,j),I.map.texture.name=lt.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();let B=I.getViewportCount();for(let j=0;j<B;j++){let ct=I.getViewport(j);o.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),q.viewport(o),I.updateMatrices(lt,j),n=I.getFrustum(),b(A,k,I.camera,lt,this.type)}I.isPointLightShadow!==!0&&this.type===Ji&&M(I,k),I.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(O,y,v)};function M(C,A){let k=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new nr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,k,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,k,m,_,null)}function x(C,A,k,O){let y=null,v=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(v!==void 0)y=v;else if(y=k.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let q=y.uuid,V=A.uuid,J=l[q];J===void 0&&(J={},l[q]=J);let mt=J[V];mt===void 0&&(mt=y.clone(),J[V]=mt,A.addEventListener("dispose",L)),y=mt}if(y.visible=A.visible,y.wireframe=A.wireframe,O===Ji?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let q=i.properties.get(y);q.light=k}return y}function b(C,A,k,O,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Ji)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let V=t.update(C),J=C.material;if(Array.isArray(J)){let mt=V.groups;for(let $=0,lt=mt.length;$<lt;$++){let I=mt[$],Q=J[I.materialIndex];if(Q&&Q.visible){let B=x(C,Q,O,y);C.onBeforeShadow(i,C,A,k,V,B,I),i.renderBufferDirect(k,null,V,B,C,I),C.onAfterShadow(i,C,A,k,V,B,I)}}}else if(J.visible){let mt=x(C,J,O,y);C.onBeforeShadow(i,C,A,k,V,mt,null),i.renderBufferDirect(k,null,V,mt,C,null),C.onAfterShadow(i,C,A,k,V,mt,null)}}let q=C.children;for(let V=0,J=q.length;V<J;V++)b(q[V],A,k,O,y)}function L(C){C.target.removeEventListener("dispose",L);for(let k in l){let O=l[k],y=C.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}var Sy={[Ul]:Nl,[Fl]:kl,[Ol]:zl,[Fs]:Bl,[Nl]:Ul,[kl]:Fl,[zl]:Ol,[Bl]:Fs};function Ry(i){function t(){let at=!1,Gt=new qe,Et=null,It=new qe(0,0,0,0);return{setMask:function(Ft){Et!==Ft&&!at&&(i.colorMask(Ft,Ft,Ft,Ft),Et=Ft)},setLocked:function(Ft){at=Ft},setClear:function(Ft,Vt,ge,sn,_e){_e===!0&&(Ft*=sn,Vt*=sn,ge*=sn),Gt.set(Ft,Vt,ge,sn),It.equals(Gt)===!1&&(i.clearColor(Ft,Vt,ge,sn),It.copy(Gt))},reset:function(){at=!1,Et=null,It.set(-1,0,0,0)}}}function e(){let at=!1,Gt=!1,Et=null,It=null,Ft=null;return{setReversed:function(Vt){Gt=Vt},setTest:function(Vt){Vt?D(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(Vt){Et!==Vt&&!at&&(i.depthMask(Vt),Et=Vt)},setFunc:function(Vt){if(Gt&&(Vt=Sy[Vt]),It!==Vt){switch(Vt){case Ul:i.depthFunc(i.NEVER);break;case Nl:i.depthFunc(i.ALWAYS);break;case Fl:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case Ol:i.depthFunc(i.EQUAL);break;case Bl:i.depthFunc(i.GEQUAL);break;case kl:i.depthFunc(i.GREATER);break;case zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=Vt}},setLocked:function(Vt){at=Vt},setClear:function(Vt){Ft!==Vt&&(i.clearDepth(Vt),Ft=Vt)},reset:function(){at=!1,Et=null,It=null,Ft=null}}}function n(){let at=!1,Gt=null,Et=null,It=null,Ft=null,Vt=null,ge=null,sn=null,_e=null;return{setTest:function(de){at||(de?D(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(de){Gt!==de&&!at&&(i.stencilMask(de),Gt=de)},setFunc:function(de,gn,Kn){(Et!==de||It!==gn||Ft!==Kn)&&(i.stencilFunc(de,gn,Kn),Et=de,It=gn,Ft=Kn)},setOp:function(de,gn,Kn){(Vt!==de||ge!==gn||sn!==Kn)&&(i.stencilOp(de,gn,Kn),Vt=de,ge=gn,sn=Kn)},setLocked:function(de){at=de},setClear:function(de){_e!==de&&(i.clearStencil(de),_e=de)},reset:function(){at=!1,Gt=null,Et=null,It=null,Ft=null,Vt=null,ge=null,sn=null,_e=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,M=null,x=null,b=null,L=null,C=new zt(0,0,0),A=0,k=!1,O=null,y=null,v=null,q=null,V=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),mt=!1,$=0,lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(lt)[1]),mt=$>=1):lt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),mt=$>=2);let I=null,Q={},B=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ct=new qe().fromArray(B),Y=new qe().fromArray(j);function R(at,Gt,Et,It){let Ft=new Uint8Array(4),Vt=i.createTexture();i.bindTexture(at,Vt),i.texParameteri(at,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(at,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<Et;ge++)at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?i.texImage3D(Gt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(Gt+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return Vt}let S={};S[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),S[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),S[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),S[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),D(i.DEPTH_TEST),s.setFunc(Fs),K(!1),tt(Zu),D(i.CULL_FACE),w(Er);function D(at){l[at]!==!0&&(i.enable(at),l[at]=!0)}function W(at){l[at]!==!1&&(i.disable(at),l[at]=!1)}function H(at,Gt){return h[at]!==Gt?(i.bindFramebuffer(at,Gt),h[at]=Gt,at===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Gt),at===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Gt),!0):!1}function U(at,Gt){let Et=d,It=!1;if(at){Et=u.get(Gt),Et===void 0&&(Et=[],u.set(Gt,Et));let Ft=at.textures;if(Et.length!==Ft.length||Et[0]!==i.COLOR_ATTACHMENT0){for(let Vt=0,ge=Ft.length;Vt<ge;Vt++)Et[Vt]=i.COLOR_ATTACHMENT0+Vt;Et.length=Ft.length,It=!0}}else Et[0]!==i.BACK&&(Et[0]=i.BACK,It=!0);It&&i.drawBuffers(Et)}function X(at){return m!==at?(i.useProgram(at),m=at,!0):!1}let Z={[Kr]:i.FUNC_ADD,[Vd]:i.FUNC_SUBTRACT,[Gd]:i.FUNC_REVERSE_SUBTRACT};Z[Wd]=i.MIN,Z[Xd]=i.MAX;let G={[qd]:i.ZERO,[Yd]:i.ONE,[Zd]:i.SRC_COLOR,[Dl]:i.SRC_ALPHA,[tp]:i.SRC_ALPHA_SATURATE,[jd]:i.DST_COLOR,[Kd]:i.DST_ALPHA,[$d]:i.ONE_MINUS_SRC_COLOR,[Hl]:i.ONE_MINUS_SRC_ALPHA,[Qd]:i.ONE_MINUS_DST_COLOR,[Jd]:i.ONE_MINUS_DST_ALPHA,[ep]:i.CONSTANT_COLOR,[np]:i.ONE_MINUS_CONSTANT_COLOR,[ip]:i.CONSTANT_ALPHA,[rp]:i.ONE_MINUS_CONSTANT_ALPHA};function w(at,Gt,Et,It,Ft,Vt,ge,sn,_e,de){if(at===Er){g===!0&&(W(i.BLEND),g=!1);return}if(g===!1&&(D(i.BLEND),g=!0),at!==zd){if(at!==_||de!==k){if((f!==Kr||x!==Kr)&&(i.blendEquation(i.FUNC_ADD),f=Kr,x=Kr),de)switch(at){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFunc(i.ONE,i.ONE);break;case $u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ku:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ku:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}p=null,M=null,b=null,L=null,C.set(0,0,0),A=0,_=at,k=de}return}Ft=Ft||Gt,Vt=Vt||Et,ge=ge||It,(Gt!==f||Ft!==x)&&(i.blendEquationSeparate(Z[Gt],Z[Ft]),f=Gt,x=Ft),(Et!==p||It!==M||Vt!==b||ge!==L)&&(i.blendFuncSeparate(G[Et],G[It],G[Vt],G[ge]),p=Et,M=It,b=Vt,L=ge),(sn.equals(C)===!1||_e!==A)&&(i.blendColor(sn.r,sn.g,sn.b,_e),C.copy(sn),A=_e),_=at,k=!1}function it(at,Gt){at.side===Fe?W(i.CULL_FACE):D(i.CULL_FACE);let Et=at.side===jn;Gt&&(Et=!Et),K(Et),at.blending===Pi&&at.transparent===!1?w(Er):w(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),s.setFunc(at.depthFunc),s.setTest(at.depthTest),s.setMask(at.depthWrite),r.setMask(at.colorWrite);let It=at.stencilWrite;o.setTest(It),It&&(o.setMask(at.stencilWriteMask),o.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),o.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),nt(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(at){O!==at&&(at?i.frontFace(i.CW):i.frontFace(i.CCW),O=at)}function tt(at){at!==Od?(D(i.CULL_FACE),at!==y&&(at===Zu?i.cullFace(i.BACK):at===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),y=at}function et(at){at!==v&&(mt&&i.lineWidth(at),v=at)}function nt(at,Gt,Et){at?(D(i.POLYGON_OFFSET_FILL),(q!==Gt||V!==Et)&&(i.polygonOffset(Gt,Et),q=Gt,V=Et)):W(i.POLYGON_OFFSET_FILL)}function rt(at){at?D(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function P(at){at===void 0&&(at=i.TEXTURE0+J-1),I!==at&&(i.activeTexture(at),I=at)}function E(at,Gt,Et){Et===void 0&&(I===null?Et=i.TEXTURE0+J-1:Et=I);let It=Q[Et];It===void 0&&(It={type:void 0,texture:void 0},Q[Et]=It),(It.type!==at||It.texture!==Gt)&&(I!==Et&&(i.activeTexture(Et),I=Et),i.bindTexture(at,Gt||S[at]),It.type=at,It.texture=Gt)}function F(){let at=Q[I];at!==void 0&&at.type!==void 0&&(i.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ut(){try{i.texStorage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Nt(at){ct.equals(at)===!1&&(i.scissor(at.x,at.y,at.z,at.w),ct.copy(at))}function Ct(at){Y.equals(at)===!1&&(i.viewport(at.x,at.y,at.z,at.w),Y.copy(at))}function Ot(at,Gt){let Et=c.get(Gt);Et===void 0&&(Et=new WeakMap,c.set(Gt,Et));let It=Et.get(at);It===void 0&&(It=i.getUniformBlockIndex(Gt,at.name),Et.set(at,It))}function Kt(at,Gt){let It=c.get(Gt).get(at);a.get(Gt)!==It&&(i.uniformBlockBinding(Gt,It,at.__bindingPointIndex),a.set(Gt,It))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},I=null,Q={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,M=null,x=null,b=null,L=null,C=new zt(0,0,0),A=0,k=!1,O=null,y=null,v=null,q=null,V=null,ct.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:D,disable:W,bindFramebuffer:H,drawBuffers:U,useProgram:X,setBlending:w,setMaterial:it,setFlipSided:K,setCullFace:tt,setLineWidth:et,setPolygonOffset:nt,setScissorTest:rt,activeTexture:P,bindTexture:E,unbindTexture:F,compressedTexImage2D:ot,compressedTexImage3D:dt,texImage2D:Lt,texImage3D:Yt,updateUBOMapping:Ot,uniformBlockBinding:Kt,texStorage2D:Ut,texStorage3D:Mt,texSubImage2D:st,texSubImage3D:Tt,compressedTexSubImage2D:vt,compressedTexSubImage3D:yt,scissor:Nt,viewport:Ct,reset:ie}}function V0(i,t,e,n){let r=Ay(n);switch(e){case hf:return i*t;case ff:return i*t;case df:return i*t*2;case au:return i*t/r.components*r.byteLength;case cu:return i*t/r.components*r.byteLength;case pf:return i*t*2/r.components*r.byteLength;case lu:return i*t*2/r.components*r.byteLength;case uf:return i*t*3/r.components*r.byteLength;case xi:return i*t*4/r.components*r.byteLength;case hu:return i*t*4/r.components*r.byteLength;case za:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:case Yl:return Math.max(i,16)*Math.max(t,8)/4;case Wl:case ql:return Math.max(i,8)*Math.max(t,8)/2;case Zl:case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case eh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ih:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ah:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case uh:case fh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mf:case dh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ph:case mh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ay(i){switch(i){case er:case af:return{byteLength:1,components:1};case Uo:case cf:case Ko:return{byteLength:2,components:1};case su:case ou:return{byteLength:2,components:4};case ts:case ru:case Ci:return{byteLength:4,components:1};case lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cy(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return m?new OffscreenCanvas(P,E):ja("canvas")}function _(P,E,F){let ot=1,dt=rt(P);if((dt.width>F||dt.height>F)&&(ot=F/Math.max(dt.width,dt.height)),ot<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let st=Math.floor(ot*dt.width),Tt=Math.floor(ot*dt.height);u===void 0&&(u=g(st,Tt));let vt=E?g(st,Tt):u;return vt.width=st,vt.height=Tt,vt.getContext("2d").drawImage(P,0,0,st,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+st+"x"+Tt+")."),vt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==Pn&&P.minFilter!==_i}function p(P){i.generateMipmap(P)}function M(P,E,F,ot,dt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let st=E;if(E===i.RED&&(F===i.FLOAT&&(st=i.R32F),F===i.HALF_FLOAT&&(st=i.R16F),F===i.UNSIGNED_BYTE&&(st=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.R8UI),F===i.UNSIGNED_SHORT&&(st=i.R16UI),F===i.UNSIGNED_INT&&(st=i.R32UI),F===i.BYTE&&(st=i.R8I),F===i.SHORT&&(st=i.R16I),F===i.INT&&(st=i.R32I)),E===i.RG&&(F===i.FLOAT&&(st=i.RG32F),F===i.HALF_FLOAT&&(st=i.RG16F),F===i.UNSIGNED_BYTE&&(st=i.RG8)),E===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.RG8UI),F===i.UNSIGNED_SHORT&&(st=i.RG16UI),F===i.UNSIGNED_INT&&(st=i.RG32UI),F===i.BYTE&&(st=i.RG8I),F===i.SHORT&&(st=i.RG16I),F===i.INT&&(st=i.RG32I)),E===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.RGB8UI),F===i.UNSIGNED_SHORT&&(st=i.RGB16UI),F===i.UNSIGNED_INT&&(st=i.RGB32UI),F===i.BYTE&&(st=i.RGB8I),F===i.SHORT&&(st=i.RGB16I),F===i.INT&&(st=i.RGB32I)),E===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),F===i.UNSIGNED_INT&&(st=i.RGBA32UI),F===i.BYTE&&(st=i.RGBA8I),F===i.SHORT&&(st=i.RGBA16I),F===i.INT&&(st=i.RGBA32I)),E===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),E===i.RGBA){let Tt=dt?Za:ze.getTransfer(ot);F===i.FLOAT&&(st=i.RGBA32F),F===i.HALF_FLOAT&&(st=i.RGBA16F),F===i.UNSIGNED_BYTE&&(st=Tt===je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function x(P,E){let F;return P?E===null||E===ts||E===ks?F=i.DEPTH24_STENCIL8:E===Ci?F=i.DEPTH32F_STENCIL8:E===Uo&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ts||E===ks?F=i.DEPTH_COMPONENT24:E===Ci?F=i.DEPTH_COMPONENT32F:E===Uo&&(F=i.DEPTH_COMPONENT16),F}function b(P,E){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pn&&P.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function L(P){let E=P.target;E.removeEventListener("dispose",L),A(E),E.isVideoTexture&&h.delete(E)}function C(P){let E=P.target;E.removeEventListener("dispose",C),O(E)}function A(P){let E=n.get(P);if(E.__webglInit===void 0)return;let F=P.source,ot=d.get(F);if(ot){let dt=ot[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&k(P),Object.keys(ot).length===0&&d.delete(F)}n.remove(P)}function k(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let F=P.source,ot=d.get(F);delete ot[E.__cacheKey],o.memory.textures--}function O(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(E.__webglFramebuffer[ot]))for(let dt=0;dt<E.__webglFramebuffer[ot].length;dt++)i.deleteFramebuffer(E.__webglFramebuffer[ot][dt]);else i.deleteFramebuffer(E.__webglFramebuffer[ot]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ot])}else{if(Array.isArray(E.__webglFramebuffer))for(let ot=0;ot<E.__webglFramebuffer.length;ot++)i.deleteFramebuffer(E.__webglFramebuffer[ot]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ot=0;ot<E.__webglColorRenderbuffer.length;ot++)E.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ot]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let F=P.textures;for(let ot=0,dt=F.length;ot<dt;ot++){let st=n.get(F[ot]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(F[ot])}n.remove(P)}let y=0;function v(){y=0}function q(){let P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function V(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function J(P,E){let F=n.get(P);if(P.isVideoTexture&&et(P),P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){let ot=P.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,P,E);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function mt(P,E){let F=n.get(P);if(P.version>0&&F.__version!==P.version){Y(F,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function $(P,E){let F=n.get(P);if(P.version>0&&F.__version!==P.version){Y(F,P,E);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function lt(P,E){let F=n.get(P);if(P.version>0&&F.__version!==P.version){R(F,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}let I={[Qr]:i.REPEAT,[Qi]:i.CLAMP_TO_EDGE,[Gl]:i.MIRRORED_REPEAT},Q={[Pn]:i.NEAREST,[fp]:i.NEAREST_MIPMAP_NEAREST,[ca]:i.NEAREST_MIPMAP_LINEAR,[_i]:i.LINEAR,[Jc]:i.LINEAR_MIPMAP_NEAREST,[jr]:i.LINEAR_MIPMAP_LINEAR},B={[gp]:i.NEVER,[vp]:i.ALWAYS,[_p]:i.LESS,[gf]:i.LEQUAL,[yp]:i.EQUAL,[bp]:i.GEQUAL,[xp]:i.GREATER,[Mp]:i.NOTEQUAL};function j(P,E){if(E.type===Ci&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===Jc||E.magFilter===ca||E.magFilter===jr||E.minFilter===_i||E.minFilter===Jc||E.minFilter===ca||E.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,I[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,I[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,I[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Q[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==ca&&E.minFilter!==jr||E.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ct(P,E){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",L));let ot=E.source,dt=d.get(ot);dt===void 0&&(dt={},d.set(ot,dt));let st=V(E);if(st!==P.__cacheKey){dt[st]===void 0&&(dt[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),dt[st].usedTimes++;let Tt=dt[P.__cacheKey];Tt!==void 0&&(dt[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&k(E)),P.__cacheKey=st,P.__webglTexture=dt[st].texture}return F}function Y(P,E,F){let ot=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ot=i.TEXTURE_3D);let dt=ct(P,E),st=E.source;e.bindTexture(ot,P.__webglTexture,i.TEXTURE0+F);let Tt=n.get(st);if(st.version!==Tt.__version||dt===!0){e.activeTexture(i.TEXTURE0+F);let vt=ze.getPrimaries(ze.workingColorSpace),yt=E.colorSpace===br?null:ze.getPrimaries(E.colorSpace),Ut=E.colorSpace===br||vt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let Mt=_(E.image,!1,r.maxTextureSize);Mt=nt(E,Mt);let Lt=s.convert(E.format,E.colorSpace),Yt=s.convert(E.type),Nt=M(E.internalFormat,Lt,Yt,E.colorSpace,E.isVideoTexture);j(ot,E);let Ct,Ot=E.mipmaps,Kt=E.isVideoTexture!==!0,ie=Tt.__version===void 0||dt===!0,at=st.dataReady,Gt=b(E,Mt);if(E.isDepthTexture)Nt=x(E.format===zs,E.type),ie&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Nt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,Mt.width,Mt.height,0,Lt,Yt,null));else if(E.isDataTexture)if(Ot.length>0){Kt&&ie&&e.texStorage2D(i.TEXTURE_2D,Gt,Nt,Ot[0].width,Ot[0].height);for(let Et=0,It=Ot.length;Et<It;Et++)Ct=Ot[Et],Kt?at&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Yt,Ct.data):e.texImage2D(i.TEXTURE_2D,Et,Nt,Ct.width,Ct.height,0,Lt,Yt,Ct.data);E.generateMipmaps=!1}else Kt?(ie&&e.texStorage2D(i.TEXTURE_2D,Gt,Nt,Mt.width,Mt.height),at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Lt,Yt,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,Mt.width,Mt.height,0,Lt,Yt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Nt,Ot[0].width,Ot[0].height,Mt.depth);for(let Et=0,It=Ot.length;Et<It;Et++)if(Ct=Ot[Et],E.format!==xi)if(Lt!==null)if(Kt){if(at)if(E.layerUpdates.size>0){let Ft=V0(Ct.width,Ct.height,E.format,E.type);for(let Vt of E.layerUpdates){let ge=Ct.data.subarray(Vt*Ft/Ct.data.BYTES_PER_ELEMENT,(Vt+1)*Ft/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,Vt,Ct.width,Ct.height,1,Lt,ge,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,Ct.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,Nt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,Yt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,Nt,Ct.width,Ct.height,Mt.depth,0,Lt,Yt,Ct.data)}else{Kt&&ie&&e.texStorage2D(i.TEXTURE_2D,Gt,Nt,Ot[0].width,Ot[0].height);for(let Et=0,It=Ot.length;Et<It;Et++)Ct=Ot[Et],E.format!==xi?Lt!==null?Kt?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,Nt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?at&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Yt,Ct.data):e.texImage2D(i.TEXTURE_2D,Et,Nt,Ct.width,Ct.height,0,Lt,Yt,Ct.data)}else if(E.isDataArrayTexture)if(Kt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Nt,Mt.width,Mt.height,Mt.depth),at)if(E.layerUpdates.size>0){let Et=V0(Mt.width,Mt.height,E.format,E.type);for(let It of E.layerUpdates){let Ft=Mt.data.subarray(It*Et/Mt.data.BYTES_PER_ELEMENT,(It+1)*Et/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,Mt.width,Mt.height,1,Lt,Yt,Ft)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Yt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,Mt.width,Mt.height,Mt.depth,0,Lt,Yt,Mt.data);else if(E.isData3DTexture)Kt?(ie&&e.texStorage3D(i.TEXTURE_3D,Gt,Nt,Mt.width,Mt.height,Mt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Yt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,Mt.width,Mt.height,Mt.depth,0,Lt,Yt,Mt.data);else if(E.isFramebufferTexture){if(ie)if(Kt)e.texStorage2D(i.TEXTURE_2D,Gt,Nt,Mt.width,Mt.height);else{let Et=Mt.width,It=Mt.height;for(let Ft=0;Ft<Gt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Nt,Et,It,0,Lt,Yt,null),Et>>=1,It>>=1}}else if(Ot.length>0){if(Kt&&ie){let Et=rt(Ot[0]);e.texStorage2D(i.TEXTURE_2D,Gt,Nt,Et.width,Et.height)}for(let Et=0,It=Ot.length;Et<It;Et++)Ct=Ot[Et],Kt?at&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Lt,Yt,Ct):e.texImage2D(i.TEXTURE_2D,Et,Nt,Lt,Yt,Ct);E.generateMipmaps=!1}else if(Kt){if(ie){let Et=rt(Mt);e.texStorage2D(i.TEXTURE_2D,Gt,Nt,Et.width,Et.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Yt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Lt,Yt,Mt);f(E)&&p(ot),Tt.__version=st.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function R(P,E,F){if(E.image.length!==6)return;let ot=ct(P,E),dt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+F);let st=n.get(dt);if(dt.version!==st.__version||ot===!0){e.activeTexture(i.TEXTURE0+F);let Tt=ze.getPrimaries(ze.workingColorSpace),vt=E.colorSpace===br?null:ze.getPrimaries(E.colorSpace),yt=E.colorSpace===br||Tt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Ut=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let It=0;It<6;It++)!Ut&&!Mt?Lt[It]=_(E.image[It],!0,r.maxCubemapSize):Lt[It]=Mt?E.image[It].image:E.image[It],Lt[It]=nt(E,Lt[It]);let Yt=Lt[0],Nt=s.convert(E.format,E.colorSpace),Ct=s.convert(E.type),Ot=M(E.internalFormat,Nt,Ct,E.colorSpace),Kt=E.isVideoTexture!==!0,ie=st.__version===void 0||ot===!0,at=dt.dataReady,Gt=b(E,Yt);j(i.TEXTURE_CUBE_MAP,E);let Et;if(Ut){Kt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,Ot,Yt.width,Yt.height);for(let It=0;It<6;It++){Et=Lt[It].mipmaps;for(let Ft=0;Ft<Et.length;Ft++){let Vt=Et[Ft];E.format!==xi?Nt!==null?Kt?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,Ft,0,0,Vt.width,Vt.height,Nt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,Ft,Ot,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,Ft,0,0,Vt.width,Vt.height,Nt,Ct,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,Ft,Ot,Vt.width,Vt.height,0,Nt,Ct,Vt.data)}}}else{if(Et=E.mipmaps,Kt&&ie){Et.length>0&&Gt++;let It=rt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,Ot,It.width,It.height)}for(let It=0;It<6;It++)if(Mt){Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,Lt[It].width,Lt[It].height,Nt,Ct,Lt[It].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Ot,Lt[It].width,Lt[It].height,0,Nt,Ct,Lt[It].data);for(let Ft=0;Ft<Et.length;Ft++){let ge=Et[Ft].image[It].image;Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,Ft+1,0,0,ge.width,ge.height,Nt,Ct,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,Ft+1,Ot,ge.width,ge.height,0,Nt,Ct,ge.data)}}else{Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,Nt,Ct,Lt[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Ot,Nt,Ct,Lt[It]);for(let Ft=0;Ft<Et.length;Ft++){let Vt=Et[Ft];Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,Ft+1,0,0,Nt,Ct,Vt.image[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,Ft+1,Ot,Nt,Ct,Vt.image[It])}}}f(E)&&p(i.TEXTURE_CUBE_MAP),st.__version=dt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function S(P,E,F,ot,dt,st){let Tt=s.convert(F.format,F.colorSpace),vt=s.convert(F.type),yt=M(F.internalFormat,Tt,vt,F.colorSpace);if(!n.get(E).__hasExternalTextures){let Mt=Math.max(1,E.width>>st),Lt=Math.max(1,E.height>>st);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,st,yt,Mt,Lt,E.depth,0,Tt,vt,null):e.texImage2D(dt,st,yt,Mt,Lt,0,Tt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),tt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,dt,n.get(F).__webglTexture,0,K(E)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,dt,n.get(F).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(P,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let ot=E.depthTexture,dt=ot&&ot.isDepthTexture?ot.type:null,st=x(E.stencilBuffer,dt),Tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=K(E);tt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,st,E.width,E.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,st,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,st,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,P)}else{let ot=E.textures;for(let dt=0;dt<ot.length;dt++){let st=ot[dt],Tt=s.convert(st.format,st.colorSpace),vt=s.convert(st.type),yt=M(st.internalFormat,Tt,vt,st.colorSpace),Ut=K(E);F&&tt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,yt,E.width,E.height):tt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,yt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,yt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function W(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);let ot=n.get(E.depthTexture).__webglTexture,dt=K(E);if(E.depthTexture.format===Hs)tt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(E.depthTexture.format===zs)tt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function H(P){let E=n.get(P),F=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let ot=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ot){let dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ot.removeEventListener("dispose",dt)};ot.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ot}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");W(E.__webglFramebuffer,P)}else if(F){E.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ot]),E.__webglDepthbuffer[ot]===void 0)E.__webglDepthbuffer[ot]=i.createRenderbuffer(),D(E.__webglDepthbuffer[ot],P,!1);else{let dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),D(E.__webglDepthbuffer,P,!1);else{let ot=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function U(P,E,F){let ot=n.get(P);E!==void 0&&S(ot.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&H(P)}function X(P){let E=P.texture,F=n.get(P),ot=n.get(E);P.addEventListener("dispose",C);let dt=P.textures,st=P.isWebGLCubeRenderTarget===!0,Tt=dt.length>1;if(Tt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=E.version,o.memory.textures++),st){F.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[vt]=[];for(let yt=0;yt<E.mipmaps.length;yt++)F.__webglFramebuffer[vt][yt]=i.createFramebuffer()}else F.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)F.__webglFramebuffer[vt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let vt=0,yt=dt.length;vt<yt;vt++){let Ut=n.get(dt[vt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&tt(P)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let vt=0;vt<dt.length;vt++){let yt=dt[vt];F.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[vt]);let Ut=s.convert(yt.format,yt.colorSpace),Mt=s.convert(yt.type),Lt=M(yt.internalFormat,Ut,Mt,yt.colorSpace,P.isXRRenderTarget===!0),Yt=K(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Lt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,F.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),D(F.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),j(i.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)S(F.__webglFramebuffer[vt][yt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,yt);else S(F.__webglFramebuffer[vt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);f(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let vt=0,yt=dt.length;vt<yt;vt++){let Ut=dt[vt],Mt=n.get(Ut);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),j(i.TEXTURE_2D,Ut),S(F.__webglFramebuffer,P,Ut,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),f(Ut)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,ot.__webglTexture),j(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)S(F.__webglFramebuffer[yt],P,E,i.COLOR_ATTACHMENT0,vt,yt);else S(F.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,vt,0);f(E)&&p(vt),e.unbindTexture()}P.depthBuffer&&H(P)}function Z(P){let E=P.textures;for(let F=0,ot=E.length;F<ot;F++){let dt=E[F];if(f(dt)){let st=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Tt=n.get(dt).__webglTexture;e.bindTexture(st,Tt),p(st),e.unbindTexture()}}}let G=[],w=[];function it(P){if(P.samples>0){if(tt(P)===!1){let E=P.textures,F=P.width,ot=P.height,dt=i.COLOR_BUFFER_BIT,st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(P),vt=E.length>1;if(vt)for(let yt=0;yt<E.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let yt=0;yt<E.length;yt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);let Ut=n.get(E[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,F,ot,0,0,F,ot,dt,i.NEAREST),c===!0&&(G.length=0,w.length=0,G.push(i.COLOR_ATTACHMENT0+yt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(G.push(st),w.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let yt=0;yt<E.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);let Ut=n.get(E[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function K(P){return Math.min(r.maxSamples,P.samples)}function tt(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function nt(P,E){let F=P.colorSpace,ot=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==Cr&&F!==br&&(ze.getTransfer(F)===je?(ot!==xi||dt!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=v,this.setTexture2D=J,this.setTexture2DArray=mt,this.setTexture3D=$,this.setTextureCube=lt,this.rebindTextures=U,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=S,this.useMultisampledRTT=tt}function Py(i,t){function e(n,r=br){let s,o=ze.getTransfer(r);if(n===er)return i.UNSIGNED_BYTE;if(n===su)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ou)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return i.BYTE;if(n===cf)return i.SHORT;if(n===Uo)return i.UNSIGNED_SHORT;if(n===ru)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===Ko)return i.HALF_FLOAT;if(n===hf)return i.ALPHA;if(n===uf)return i.RGB;if(n===xi)return i.RGBA;if(n===ff)return i.LUMINANCE;if(n===df)return i.LUMINANCE_ALPHA;if(n===Hs)return i.DEPTH_COMPONENT;if(n===zs)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===cu)return i.RED_INTEGER;if(n===pf)return i.RG;if(n===lu)return i.RG_INTEGER;if(n===hu)return i.RGBA_INTEGER;if(n===za||n===Va||n===Ga||n===Wa)if(o===je)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===$l||n===Kl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zl||n===$l)return o===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Kl)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jl||n===jl||n===Ql||n===th||n===eh||n===nh||n===ih||n===rh||n===sh||n===oh||n===ah||n===ch||n===lh||n===hh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jl)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===th)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eh)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nh)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ih)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sh)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ah)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lh)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hh)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===uh||n===fh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Xa)return o===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mf||n===dh||n===ph||n===mh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ih=class extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xt=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iy={type:"move"},Po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dy=`
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

}`,Lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Qn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ti({vertexShader:Ly,fragmentShader:Dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends Tr{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=new Lh,f=e.getContextAttributes(),p=null,M=null,x=[],b=[],L=new Ht,C=null,A=new wn;A.layers.enable(1),A.viewport=new qe;let k=new wn;k.layers.enable(2),k.viewport=new qe;let O=[A,k],y=new Ih;y.layers.enable(1),y.layers.enable(2);let v=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let S=x[R];return S===void 0&&(S=new Po,x[R]=S),S.getTargetRaySpace()},this.getControllerGrip=function(R){let S=x[R];return S===void 0&&(S=new Po,x[R]=S),S.getGripSpace()},this.getHand=function(R){let S=x[R];return S===void 0&&(S=new Po,x[R]=S),S.getHandSpace()};function V(R){let S=b.indexOf(R.inputSource);if(S===-1)return;let D=x[S];D!==void 0&&(D.update(R.inputSource,R.frame,l||o),D.dispatchEvent({type:R.type,data:R.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",mt);for(let R=0;R<x.length;R++){let S=b[R];S!==null&&(b[R]=null,x[R].disconnect(S))}v=null,q=null,_.reset(),t.setRenderTarget(p),m=null,d=null,u=null,r=null,M=null,Y.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",mt),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){let S={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,S),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new nr(m.framebufferWidth,m.framebufferHeight,{format:xi,type:er,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let S=null,D=null,W=null;f.depth&&(W=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,S=f.stencil?zs:Hs,D=f.stencil?ks:ts);let H={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(H),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new nr(d.textureWidth,d.textureHeight,{format:xi,type:er,depthTexture:new cc(d.textureWidth,d.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,S),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Y.setContext(r),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function mt(R){for(let S=0;S<R.removed.length;S++){let D=R.removed[S],W=b.indexOf(D);W>=0&&(b[W]=null,x[W].disconnect(D))}for(let S=0;S<R.added.length;S++){let D=R.added[S],W=b.indexOf(D);if(W===-1){for(let U=0;U<x.length;U++)if(U>=b.length){b.push(D),W=U;break}else if(b[U]===null){b[U]=D,W=U;break}if(W===-1)break}let H=x[W];H&&H.connect(D)}}let $=new T,lt=new T;function I(R,S,D){$.setFromMatrixPosition(S.matrixWorld),lt.setFromMatrixPosition(D.matrixWorld);let W=$.distanceTo(lt),H=S.projectionMatrix.elements,U=D.projectionMatrix.elements,X=H[14]/(H[10]-1),Z=H[14]/(H[10]+1),G=(H[9]+1)/H[5],w=(H[9]-1)/H[5],it=(H[8]-1)/H[0],K=(U[8]+1)/U[0],tt=X*it,et=X*K,nt=W/(-it+K),rt=nt*-it;if(S.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(rt),R.translateZ(nt),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),H[10]===-1)R.projectionMatrix.copy(S.projectionMatrix),R.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let P=X+nt,E=Z+nt,F=tt-rt,ot=et+(W-rt),dt=G*Z/E*P,st=w*Z/E*P;R.projectionMatrix.makePerspective(F,ot,dt,st,P,E),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function Q(R,S){S===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(S.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;let S=R.near,D=R.far;_.texture!==null&&(_.depthNear>0&&(S=_.depthNear),_.depthFar>0&&(D=_.depthFar)),y.near=k.near=A.near=S,y.far=k.far=A.far=D,(v!==y.near||q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),v=y.near,q=y.far);let W=R.parent,H=y.cameras;Q(y,W);for(let U=0;U<H.length;U++)Q(H[U],W);H.length===2?I(y,A,k):y.projectionMatrix.copy(A.projectionMatrix),B(R,y,W)};function B(R,S,D){D===null?R.matrix.copy(S.matrixWorld):(R.matrix.copy(D.matrixWorld),R.matrix.invert(),R.matrix.multiply(S.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(S.projectionMatrix),R.projectionMatrixInverse.copy(S.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=No*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(R){c=R,d!==null&&(d.fixedFoveation=R),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=R)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let j=null;function ct(R,S){if(h=S.getViewerPose(l||o),g=S,h!==null){let D=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let W=!1;D.length!==y.cameras.length&&(y.cameras.length=0,W=!0);for(let U=0;U<D.length;U++){let X=D[U],Z=null;if(m!==null)Z=m.getViewport(X);else{let w=u.getViewSubImage(d,X);Z=w.viewport,U===0&&(t.setRenderTargetTextures(M,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(M))}let G=O[U];G===void 0&&(G=new wn,G.layers.enable(U),G.viewport=new qe,O[U]=G),G.matrix.fromArray(X.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(X.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Z.x,Z.y,Z.width,Z.height),U===0&&(y.matrix.copy(G.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),W===!0&&y.cameras.push(G)}let H=r.enabledFeatures;if(H&&H.includes("depth-sensing")){let U=u.getDepthInformation(D[0]);U&&U.isValid&&U.texture&&_.init(t,U,r.renderState)}}for(let D=0;D<x.length;D++){let W=b[D],H=x[D];W!==null&&H!==void 0&&H.update(W,S,l||o)}j&&j(R,S),S.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:S}),g=null}let Y=new Mf;Y.setAnimationLoop(ct),this.setAnimationLoop=function(R){j=R},this.dispose=function(){}}},Zr=new Tn,Hy=new ue;function Uy(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,xf(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,M,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,M,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===jn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===jn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let M=t.get(p),x=M.envMap,b=M.envMapRotation;x&&(f.envMap.value=x,Zr.copy(b),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),f.envMapRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(Zr)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,M,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let M=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ny(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){let b=x.program;n.uniformBlockBinding(M,b)}function l(M,x){let b=r[M.id];b===void 0&&(g(M),b=h(M),r[M.id]=b,M.addEventListener("dispose",f));let L=x.program;n.updateUBOMapping(M,L);let C=t.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function h(M){let x=u();M.__bindingPointIndex=x;let b=i.createBuffer(),L=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=r[M.id],b=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,A=b.length;C<A;C++){let k=Array.isArray(b[C])?b[C]:[b[C]];for(let O=0,y=k.length;O<y;O++){let v=k[O];if(m(v,C,O,L)===!0){let q=v.__offset,V=Array.isArray(v.value)?v.value:[v.value],J=0;for(let mt=0;mt<V.length;mt++){let $=V[mt],lt=_($);typeof $=="number"||typeof $=="boolean"?(v.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,q+J,v.__data)):$.isMatrix3?(v.__data[0]=$.elements[0],v.__data[1]=$.elements[1],v.__data[2]=$.elements[2],v.__data[3]=0,v.__data[4]=$.elements[3],v.__data[5]=$.elements[4],v.__data[6]=$.elements[5],v.__data[7]=0,v.__data[8]=$.elements[6],v.__data[9]=$.elements[7],v.__data[10]=$.elements[8],v.__data[11]=0):($.toArray(v.__data,J),J+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,b,L){let C=M.value,A=x+"_"+b;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{let k=L[A];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return L[A]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function g(M){let x=M.uniforms,b=0,L=16;for(let A=0,k=x.length;A<k;A++){let O=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,v=O.length;y<v;y++){let q=O[y],V=Array.isArray(q.value)?q.value:[q.value];for(let J=0,mt=V.length;J<mt;J++){let $=V[J],lt=_($),I=b%L,Q=I%lt.boundary,B=I+Q;b+=Q,B!==0&&L-B<lt.storage&&(b+=L-B),q.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=lt.storage}}}let C=b%L;return C>0&&(b+=L-C),M.__size=b,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function f(M){let x=M.target;x.removeEventListener("dispose",f);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(let M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Gs=class{constructor(t={}){let{canvas:e=Bp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=wr,this.toneMappingExposure=1;let x=this,b=!1,L=0,C=0,A=null,k=-1,O=null,y=new qe,v=new qe,q=null,V=new zt(0),J=0,mt=e.width,$=e.height,lt=1,I=null,Q=null,B=new qe(0,0,mt,$),j=new qe(0,0,mt,$),ct=!1,Y=new Oo,R=!1,S=!1,D=new ue,W=new ue,H=new T,U=new qe,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function G(){return A===null?lt:1}let w=n;function it(N,pt){return e.getContext(N,pt)}try{let N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),w===null){let pt="webgl2";if(w=it(pt,N),w===null)throw it(pt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let K,tt,et,nt,rt,P,E,F,ot,dt,st,Tt,vt,yt,Ut,Mt,Lt,Yt,Nt,Ct,Ot,Kt,ie,at;function Gt(){K=new j1(w),K.init(),Kt=new Py(w,K),tt=new q1(w,K,t,Kt),et=new Ry(w),tt.reverseDepthBuffer&&et.buffers.depth.setReversed(!0),nt=new e_(w),rt=new py,P=new Cy(w,K,et,rt,tt,Kt,nt),E=new Z1(x),F=new J1(x),ot=new cm(w),ie=new W1(w,ot),dt=new Q1(w,ot,nt,ie),st=new i_(w,dt,ot,nt),Nt=new n_(w,tt,P),Mt=new Y1(rt),Tt=new dy(x,E,F,K,tt,ie,Mt),vt=new Uy(x,rt),yt=new gy,Ut=new vy(K),Yt=new G1(x,E,F,et,st,d,c),Lt=new Ty(x,st,tt),at=new Ny(w,nt,tt,et),Ct=new X1(w,K,nt),Ot=new t_(w,K,nt),nt.programs=Tt.programs,x.capabilities=tt,x.extensions=K,x.properties=rt,x.renderLists=yt,x.shadowMap=Lt,x.state=et,x.info=nt}Gt();let Et=new Dh(x,w);this.xr=Et,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let N=K.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=K.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(N){N!==void 0&&(lt=N,this.setSize(mt,$,!1))},this.getSize=function(N){return N.set(mt,$)},this.setSize=function(N,pt,bt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}mt=N,$=pt,e.width=Math.floor(N*lt),e.height=Math.floor(pt*lt),bt===!0&&(e.style.width=N+"px",e.style.height=pt+"px"),this.setViewport(0,0,N,pt)},this.getDrawingBufferSize=function(N){return N.set(mt*lt,$*lt).floor()},this.setDrawingBufferSize=function(N,pt,bt){mt=N,$=pt,lt=bt,e.width=Math.floor(N*bt),e.height=Math.floor(pt*bt),this.setViewport(0,0,N,pt)},this.getCurrentViewport=function(N){return N.copy(y)},this.getViewport=function(N){return N.copy(B)},this.setViewport=function(N,pt,bt,_t){N.isVector4?B.set(N.x,N.y,N.z,N.w):B.set(N,pt,bt,_t),et.viewport(y.copy(B).multiplyScalar(lt).round())},this.getScissor=function(N){return N.copy(j)},this.setScissor=function(N,pt,bt,_t){N.isVector4?j.set(N.x,N.y,N.z,N.w):j.set(N,pt,bt,_t),et.scissor(v.copy(j).multiplyScalar(lt).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(N){et.setScissorTest(ct=N)},this.setOpaqueSort=function(N){I=N},this.setTransparentSort=function(N){Q=N},this.getClearColor=function(N){return N.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(N=!0,pt=!0,bt=!0){let _t=0;if(N){let gt=!1;if(A!==null){let kt=A.texture.format;gt=kt===hu||kt===lu||kt===cu}if(gt){let kt=A.texture.type,qt=kt===er||kt===ts||kt===Uo||kt===ks||kt===su||kt===ou,te=Yt.getClearColor(),ee=Yt.getClearAlpha(),he=te.r,le=te.g,Qt=te.b;qt?(m[0]=he,m[1]=le,m[2]=Qt,m[3]=ee,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=he,g[1]=le,g[2]=Qt,g[3]=ee,w.clearBufferiv(w.COLOR,0,g))}else _t|=w.COLOR_BUFFER_BIT}pt&&(_t|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),bt&&(_t|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),yt.dispose(),Ut.dispose(),rt.dispose(),E.dispose(),F.dispose(),st.dispose(),ie.dispose(),at.dispose(),Tt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",co),Et.removeEventListener("sessionend",Vi),wi.stop()};function It(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let N=nt.autoReset,pt=Lt.enabled,bt=Lt.autoUpdate,_t=Lt.needsUpdate,gt=Lt.type;Gt(),nt.autoReset=N,Lt.enabled=pt,Lt.autoUpdate=bt,Lt.needsUpdate=_t,Lt.type=gt}function Vt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ge(N){let pt=N.target;pt.removeEventListener("dispose",ge),sn(pt)}function sn(N){_e(N),rt.remove(N)}function _e(N){let pt=rt.get(N).programs;pt!==void 0&&(pt.forEach(function(bt){Tt.releaseProgram(bt)}),N.isShaderMaterial&&Tt.releaseShaderCache(N))}this.renderBufferDirect=function(N,pt,bt,_t,gt,kt){pt===null&&(pt=X);let qt=gt.isMesh&&gt.matrixWorld.determinant()<0,te=oa(N,pt,bt,_t,gt);et.setMaterial(_t,qt);let ee=bt.index,he=1;if(_t.wireframe===!0){if(ee=dt.getWireframeAttribute(bt),ee===void 0)return;he=2}let le=bt.drawRange,Qt=bt.attributes.position,Ie=le.start*he,ve=(le.start+le.count)*he;kt!==null&&(Ie=Math.max(Ie,kt.start*he),ve=Math.min(ve,(kt.start+kt.count)*he)),ee!==null?(Ie=Math.max(Ie,0),ve=Math.min(ve,ee.count)):Qt!=null&&(Ie=Math.max(Ie,0),ve=Math.min(ve,Qt.count));let We=ve-Ie;if(We<0||We===1/0)return;ie.setup(gt,_t,te,bt,ee);let Cn,Ce=Ct;if(ee!==null&&(Cn=ot.get(ee),Ce=Ot,Ce.setIndex(Cn)),gt.isMesh)_t.wireframe===!0?(et.setLineWidth(_t.wireframeLinewidth*G()),Ce.setMode(w.LINES)):Ce.setMode(w.TRIANGLES);else if(gt.isLine){let oe=_t.linewidth;oe===void 0&&(oe=1),et.setLineWidth(oe*G()),gt.isLineSegments?Ce.setMode(w.LINES):gt.isLineLoop?Ce.setMode(w.LINE_LOOP):Ce.setMode(w.LINE_STRIP)}else gt.isPoints?Ce.setMode(w.POINTS):gt.isSprite&&Ce.setMode(w.TRIANGLES);if(gt.isBatchedMesh)if(gt._multiDrawInstances!==null)Ce.renderMultiDrawInstances(gt._multiDrawStarts,gt._multiDrawCounts,gt._multiDrawCount,gt._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Ce.renderMultiDraw(gt._multiDrawStarts,gt._multiDrawCounts,gt._multiDrawCount);else{let oe=gt._multiDrawStarts,ke=gt._multiDrawCounts,Se=gt._multiDrawCount,Jn=ee?ot.get(ee).bytesPerElement:1,Wi=rt.get(_t).currentProgram.getUniforms();for(let Fn=0;Fn<Se;Fn++)Wi.setValue(w,"_gl_DrawID",Fn),Ce.render(oe[Fn]/Jn,ke[Fn])}else if(gt.isInstancedMesh)Ce.renderInstances(Ie,We,gt.count);else if(bt.isInstancedBufferGeometry){let oe=bt._maxInstanceCount!==void 0?bt._maxInstanceCount:1/0,ke=Math.min(bt.instanceCount,oe);Ce.renderInstances(Ie,We,ke)}else Ce.render(Ie,We)};function de(N,pt,bt){N.transparent===!0&&N.side===Fe&&N.forceSinglePass===!1?(N.side=jn,N.needsUpdate=!0,Gi(N,pt,bt),N.side=zn,N.needsUpdate=!0,Gi(N,pt,bt),N.side=Fe):Gi(N,pt,bt)}this.compile=function(N,pt,bt=null){bt===null&&(bt=N),f=Ut.get(bt),f.init(pt),M.push(f),bt.traverseVisible(function(gt){gt.isLight&&gt.layers.test(pt.layers)&&(f.pushLight(gt),gt.castShadow&&f.pushShadow(gt))}),N!==bt&&N.traverseVisible(function(gt){gt.isLight&&gt.layers.test(pt.layers)&&(f.pushLight(gt),gt.castShadow&&f.pushShadow(gt))}),f.setupLights();let _t=new Set;return N.traverse(function(gt){if(!(gt.isMesh||gt.isPoints||gt.isLine||gt.isSprite))return;let kt=gt.material;if(kt)if(Array.isArray(kt))for(let qt=0;qt<kt.length;qt++){let te=kt[qt];de(te,bt,gt),_t.add(te)}else de(kt,bt,gt),_t.add(kt)}),M.pop(),f=null,_t},this.compileAsync=function(N,pt,bt=null){let _t=this.compile(N,pt,bt);return new Promise(gt=>{function kt(){if(_t.forEach(function(qt){rt.get(qt).currentProgram.isReady()&&_t.delete(qt)}),_t.size===0){gt(N);return}setTimeout(kt,10)}K.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let gn=null;function Kn(N){gn&&gn(N)}function co(){wi.stop()}function Vi(){wi.start()}let wi=new Mf;wi.setAnimationLoop(Kn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(N){gn=N,Et.setAnimationLoop(N),N===null?wi.stop():wi.start()},Et.addEventListener("sessionstart",co),Et.addEventListener("sessionend",Vi),this.render=function(N,pt){if(pt!==void 0&&pt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),pt.parent===null&&pt.matrixWorldAutoUpdate===!0&&pt.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(pt),pt=Et.getCamera()),N.isScene===!0&&N.onBeforeRender(x,N,pt,A),f=Ut.get(N,M.length),f.init(pt),M.push(f),W.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),Y.setFromProjectionMatrix(W),S=this.localClippingEnabled,R=Mt.init(this.clippingPlanes,S),_=yt.get(N,p.length),_.init(),p.push(_),Et.enabled===!0&&Et.isPresenting===!0){let kt=x.xr.getDepthSensingMesh();kt!==null&&fr(kt,pt,-1/0,x.sortObjects)}fr(N,pt,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(I,Q),Z=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Z&&Yt.addToRenderList(_,N),this.info.render.frame++,R===!0&&Mt.beginShadows();let bt=f.state.shadowsArray;Lt.render(bt,N,pt),R===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let _t=_.opaque,gt=_.transmissive;if(f.setupLights(),pt.isArrayCamera){let kt=pt.cameras;if(gt.length>0)for(let qt=0,te=kt.length;qt<te;qt++){let ee=kt[qt];Ti(_t,gt,N,ee)}Z&&Yt.render(N);for(let qt=0,te=kt.length;qt<te;qt++){let ee=kt[qt];dr(_,N,ee,ee.viewport)}}else gt.length>0&&Ti(_t,gt,N,pt),Z&&Yt.render(N),dr(_,N,pt);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),N.isScene===!0&&N.onAfterRender(x,N,pt),ie.resetDefaultState(),k=-1,O=null,M.pop(),M.length>0?(f=M[M.length-1],R===!0&&Mt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function fr(N,pt,bt,_t){if(N.visible===!1)return;if(N.layers.test(pt.layers)){if(N.isGroup)bt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(pt);else if(N.isLight)f.pushLight(N),N.castShadow&&f.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Y.intersectsSprite(N)){_t&&U.setFromMatrixPosition(N.matrixWorld).applyMatrix4(W);let qt=st.update(N),te=N.material;te.visible&&_.push(N,qt,te,bt,U.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Y.intersectsObject(N))){let qt=st.update(N),te=N.material;if(_t&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),U.copy(N.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),U.copy(qt.boundingSphere.center)),U.applyMatrix4(N.matrixWorld).applyMatrix4(W)),Array.isArray(te)){let ee=qt.groups;for(let he=0,le=ee.length;he<le;he++){let Qt=ee[he],Ie=te[Qt.materialIndex];Ie&&Ie.visible&&_.push(N,qt,Ie,bt,U.z,Qt)}}else te.visible&&_.push(N,qt,te,bt,U.z,null)}}let kt=N.children;for(let qt=0,te=kt.length;qt<te;qt++)fr(kt[qt],pt,bt,_t)}function dr(N,pt,bt,_t){let gt=N.opaque,kt=N.transmissive,qt=N.transparent;f.setupLightsView(bt),R===!0&&Mt.setGlobalState(x.clippingPlanes,bt),_t&&et.viewport(y.copy(_t)),gt.length>0&&An(gt,pt,bt),kt.length>0&&An(kt,pt,bt),qt.length>0&&An(qt,pt,bt),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Ti(N,pt,bt,_t){if((bt.isScene===!0?bt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[_t.id]===void 0&&(f.state.transmissionRenderTarget[_t.id]=new nr(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Ko:er,minFilter:jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));let kt=f.state.transmissionRenderTarget[_t.id],qt=_t.viewport||y;kt.setSize(qt.z,qt.w);let te=x.getRenderTarget();x.setRenderTarget(kt),x.getClearColor(V),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Yt.render(bt);let ee=x.toneMapping;x.toneMapping=wr;let he=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),f.setupLightsView(_t),R===!0&&Mt.setGlobalState(x.clippingPlanes,_t),An(N,bt,_t),P.updateMultisampleRenderTarget(kt),P.updateRenderTargetMipmap(kt),K.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Qt=0,Ie=pt.length;Qt<Ie;Qt++){let ve=pt[Qt],We=ve.object,Cn=ve.geometry,Ce=ve.material,oe=ve.group;if(Ce.side===Fe&&We.layers.test(_t.layers)){let ke=Ce.side;Ce.side=jn,Ce.needsUpdate=!0,Si(We,bt,_t,Cn,Ce,oe),Ce.side=ke,Ce.needsUpdate=!0,le=!0}}le===!0&&(P.updateMultisampleRenderTarget(kt),P.updateRenderTargetMipmap(kt))}x.setRenderTarget(te),x.setClearColor(V,J),he!==void 0&&(_t.viewport=he),x.toneMapping=ee}function An(N,pt,bt){let _t=pt.isScene===!0?pt.overrideMaterial:null;for(let gt=0,kt=N.length;gt<kt;gt++){let qt=N[gt],te=qt.object,ee=qt.geometry,he=_t===null?qt.material:_t,le=qt.group;te.layers.test(bt.layers)&&Si(te,pt,bt,ee,he,le)}}function Si(N,pt,bt,_t,gt,kt){N.onBeforeRender(x,pt,bt,_t,gt,kt),N.modelViewMatrix.multiplyMatrices(bt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),gt.onBeforeRender(x,pt,bt,_t,N,kt),gt.transparent===!0&&gt.side===Fe&&gt.forceSinglePass===!1?(gt.side=jn,gt.needsUpdate=!0,x.renderBufferDirect(bt,pt,_t,gt,N,kt),gt.side=zn,gt.needsUpdate=!0,x.renderBufferDirect(bt,pt,_t,gt,N,kt),gt.side=Fe):x.renderBufferDirect(bt,pt,_t,gt,N,kt),N.onAfterRender(x,pt,bt,_t,gt,kt)}function Gi(N,pt,bt){pt.isScene!==!0&&(pt=X);let _t=rt.get(N),gt=f.state.lights,kt=f.state.shadowsArray,qt=gt.state.version,te=Tt.getParameters(N,gt.state,kt,pt,bt),ee=Tt.getProgramCacheKey(te),he=_t.programs;_t.environment=N.isMeshStandardMaterial?pt.environment:null,_t.fog=pt.fog,_t.envMap=(N.isMeshStandardMaterial?F:E).get(N.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&N.envMap===null?pt.environmentRotation:N.envMapRotation,he===void 0&&(N.addEventListener("dispose",ge),he=new Map,_t.programs=he);let le=he.get(ee);if(le!==void 0){if(_t.currentProgram===le&&_t.lightsStateVersion===qt)return Or(N,te),le}else te.uniforms=Tt.getUniforms(N),N.onBeforeCompile(te,x),le=Tt.acquireProgram(te,ee),he.set(ee,le),_t.uniforms=te.uniforms;let Qt=_t.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Qt.clippingPlanes=Mt.uniform),Or(N,te),_t.needsLights=Wc(N),_t.lightsStateVersion=qt,_t.needsLights&&(Qt.ambientLightColor.value=gt.state.ambient,Qt.lightProbe.value=gt.state.probe,Qt.directionalLights.value=gt.state.directional,Qt.directionalLightShadows.value=gt.state.directionalShadow,Qt.spotLights.value=gt.state.spot,Qt.spotLightShadows.value=gt.state.spotShadow,Qt.rectAreaLights.value=gt.state.rectArea,Qt.ltc_1.value=gt.state.rectAreaLTC1,Qt.ltc_2.value=gt.state.rectAreaLTC2,Qt.pointLights.value=gt.state.point,Qt.pointLightShadows.value=gt.state.pointShadow,Qt.hemisphereLights.value=gt.state.hemi,Qt.directionalShadowMap.value=gt.state.directionalShadowMap,Qt.directionalShadowMatrix.value=gt.state.directionalShadowMatrix,Qt.spotShadowMap.value=gt.state.spotShadowMap,Qt.spotLightMatrix.value=gt.state.spotLightMatrix,Qt.spotLightMap.value=gt.state.spotLightMap,Qt.pointShadowMap.value=gt.state.pointShadowMap,Qt.pointShadowMatrix.value=gt.state.pointShadowMatrix),_t.currentProgram=le,_t.uniformsList=null,le}function ei(N){if(N.uniformsList===null){let pt=N.currentProgram.getUniforms();N.uniformsList=Ns.seqWithValue(pt.seq,N.uniforms)}return N.uniformsList}function Or(N,pt){let bt=rt.get(N);bt.outputColorSpace=pt.outputColorSpace,bt.batching=pt.batching,bt.batchingColor=pt.batchingColor,bt.instancing=pt.instancing,bt.instancingColor=pt.instancingColor,bt.instancingMorph=pt.instancingMorph,bt.skinning=pt.skinning,bt.morphTargets=pt.morphTargets,bt.morphNormals=pt.morphNormals,bt.morphColors=pt.morphColors,bt.morphTargetsCount=pt.morphTargetsCount,bt.numClippingPlanes=pt.numClippingPlanes,bt.numIntersection=pt.numClipIntersection,bt.vertexAlphas=pt.vertexAlphas,bt.vertexTangents=pt.vertexTangents,bt.toneMapping=pt.toneMapping}function oa(N,pt,bt,_t,gt){pt.isScene!==!0&&(pt=X),P.resetTextureUnits();let kt=pt.fog,qt=_t.isMeshStandardMaterial?pt.environment:null,te=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Cr,ee=(_t.isMeshStandardMaterial?F:E).get(_t.envMap||qt),he=_t.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,le=!!bt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),Qt=!!bt.morphAttributes.position,Ie=!!bt.morphAttributes.normal,ve=!!bt.morphAttributes.color,We=wr;_t.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(We=x.toneMapping);let Cn=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,Ce=Cn!==void 0?Cn.length:0,oe=rt.get(_t),ke=f.state.lights;if(R===!0&&(S===!0||N!==O)){let Ne=N===O&&_t.id===k;Mt.setState(_t,N,Ne)}let Se=!1;_t.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==ke.state.version||oe.outputColorSpace!==te||gt.isBatchedMesh&&oe.batching===!1||!gt.isBatchedMesh&&oe.batching===!0||gt.isBatchedMesh&&oe.batchingColor===!0&&gt.colorTexture===null||gt.isBatchedMesh&&oe.batchingColor===!1&&gt.colorTexture!==null||gt.isInstancedMesh&&oe.instancing===!1||!gt.isInstancedMesh&&oe.instancing===!0||gt.isSkinnedMesh&&oe.skinning===!1||!gt.isSkinnedMesh&&oe.skinning===!0||gt.isInstancedMesh&&oe.instancingColor===!0&&gt.instanceColor===null||gt.isInstancedMesh&&oe.instancingColor===!1&&gt.instanceColor!==null||gt.isInstancedMesh&&oe.instancingMorph===!0&&gt.morphTexture===null||gt.isInstancedMesh&&oe.instancingMorph===!1&&gt.morphTexture!==null||oe.envMap!==ee||_t.fog===!0&&oe.fog!==kt||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==Mt.numPlanes||oe.numIntersection!==Mt.numIntersection)||oe.vertexAlphas!==he||oe.vertexTangents!==le||oe.morphTargets!==Qt||oe.morphNormals!==Ie||oe.morphColors!==ve||oe.toneMapping!==We||oe.morphTargetsCount!==Ce)&&(Se=!0):(Se=!0,oe.__version=_t.version);let Jn=oe.currentProgram;Se===!0&&(Jn=Gi(_t,pt,gt));let Wi=!1,Fn=!1,Br=!1,Ue=Jn.getUniforms(),oi=oe.uniforms;if(et.useProgram(Jn.program)&&(Wi=!0,Fn=!0,Br=!0),_t.id!==k&&(k=_t.id,Fn=!0),Wi||O!==N){tt.reverseDepthBuffer?(D.copy(N.projectionMatrix),zp(D),Vp(D),Ue.setValue(w,"projectionMatrix",D)):Ue.setValue(w,"projectionMatrix",N.projectionMatrix),Ue.setValue(w,"viewMatrix",N.matrixWorldInverse);let Ne=Ue.map.cameraPosition;Ne!==void 0&&Ne.setValue(w,H.setFromMatrixPosition(N.matrixWorld)),tt.logarithmicDepthBuffer&&Ue.setValue(w,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&Ue.setValue(w,"isOrthographic",N.isOrthographicCamera===!0),O!==N&&(O=N,Fn=!0,Br=!0)}if(gt.isSkinnedMesh){Ue.setOptional(w,gt,"bindMatrix"),Ue.setOptional(w,gt,"bindMatrixInverse");let Ne=gt.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ue.setValue(w,"boneTexture",Ne.boneTexture,P))}gt.isBatchedMesh&&(Ue.setOptional(w,gt,"batchingTexture"),Ue.setValue(w,"batchingTexture",gt._matricesTexture,P),Ue.setOptional(w,gt,"batchingIdTexture"),Ue.setValue(w,"batchingIdTexture",gt._indirectTexture,P),Ue.setOptional(w,gt,"batchingColorTexture"),gt._colorsTexture!==null&&Ue.setValue(w,"batchingColorTexture",gt._colorsTexture,P));let kr=bt.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0)&&Nt.update(gt,bt,Jn),(Fn||oe.receiveShadow!==gt.receiveShadow)&&(oe.receiveShadow=gt.receiveShadow,Ue.setValue(w,"receiveShadow",gt.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(oi.envMap.value=ee,oi.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&pt.environment!==null&&(oi.envMapIntensity.value=pt.environmentIntensity),Fn&&(Ue.setValue(w,"toneMappingExposure",x.toneMappingExposure),oe.needsLights&&Gc(oi,Br),kt&&_t.fog===!0&&vt.refreshFogUniforms(oi,kt),vt.refreshMaterialUniforms(oi,_t,lt,$,f.state.transmissionRenderTarget[N.id]),Ns.upload(w,ei(oe),oi,P)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(Ns.upload(w,ei(oe),oi,P),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&Ue.setValue(w,"center",gt.center),Ue.setValue(w,"modelViewMatrix",gt.modelViewMatrix),Ue.setValue(w,"normalMatrix",gt.normalMatrix),Ue.setValue(w,"modelMatrix",gt.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){let Ne=_t.uniformsGroups;for(let us=0,un=Ne.length;us<un;us++){let pr=Ne[us];at.update(pr,Jn),at.bind(pr,Jn)}}return Jn}function Gc(N,pt){N.ambientLightColor.needsUpdate=pt,N.lightProbe.needsUpdate=pt,N.directionalLights.needsUpdate=pt,N.directionalLightShadows.needsUpdate=pt,N.pointLights.needsUpdate=pt,N.pointLightShadows.needsUpdate=pt,N.spotLights.needsUpdate=pt,N.spotLightShadows.needsUpdate=pt,N.rectAreaLights.needsUpdate=pt,N.hemisphereLights.needsUpdate=pt}function Wc(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(N,pt,bt){rt.get(N.texture).__webglTexture=pt,rt.get(N.depthTexture).__webglTexture=bt;let _t=rt.get(N);_t.__hasExternalTextures=!0,_t.__autoAllocateDepthBuffer=bt===void 0,_t.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_t.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,pt){let bt=rt.get(N);bt.__webglFramebuffer=pt,bt.__useDefaultFramebuffer=pt===void 0},this.setRenderTarget=function(N,pt=0,bt=0){A=N,L=pt,C=bt;let _t=!0,gt=null,kt=!1,qt=!1;if(N){let ee=rt.get(N);if(ee.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(w.FRAMEBUFFER,null),_t=!1;else if(ee.__webglFramebuffer===void 0)P.setupRenderTarget(N);else if(ee.__hasExternalTextures)P.rebindTextures(N,rt.get(N.texture).__webglTexture,rt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Qt=N.depthTexture;if(ee.__boundDepthTexture!==Qt){if(Qt!==null&&rt.has(Qt)&&(N.width!==Qt.image.width||N.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(N)}}let he=N.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(qt=!0);let le=rt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(le[pt])?gt=le[pt][bt]:gt=le[pt],kt=!0):N.samples>0&&P.useMultisampledRTT(N)===!1?gt=rt.get(N).__webglMultisampledFramebuffer:Array.isArray(le)?gt=le[bt]:gt=le,y.copy(N.viewport),v.copy(N.scissor),q=N.scissorTest}else y.copy(B).multiplyScalar(lt).floor(),v.copy(j).multiplyScalar(lt).floor(),q=ct;if(et.bindFramebuffer(w.FRAMEBUFFER,gt)&&_t&&et.drawBuffers(N,gt),et.viewport(y),et.scissor(v),et.setScissorTest(q),kt){let ee=rt.get(N.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ee.__webglTexture,bt)}else if(qt){let ee=rt.get(N.texture),he=pt||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,ee.__webglTexture,bt||0,he)}k=-1},this.readRenderTargetPixels=function(N,pt,bt,_t,gt,kt,qt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=rt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&qt!==void 0&&(te=te[qt]),te){et.bindFramebuffer(w.FRAMEBUFFER,te);try{let ee=N.texture,he=ee.format,le=ee.type;if(!tt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}pt>=0&&pt<=N.width-_t&&bt>=0&&bt<=N.height-gt&&w.readPixels(pt,bt,_t,gt,Kt.convert(he),Kt.convert(le),kt)}finally{let ee=A!==null?rt.get(A).__webglFramebuffer:null;et.bindFramebuffer(w.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(N,pt,bt,_t,gt,kt,qt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=rt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&qt!==void 0&&(te=te[qt]),te){let ee=N.texture,he=ee.format,le=ee.type;if(!tt.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(pt>=0&&pt<=N.width-_t&&bt>=0&&bt<=N.height-gt){et.bindFramebuffer(w.FRAMEBUFFER,te);let Qt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Qt),w.bufferData(w.PIXEL_PACK_BUFFER,kt.byteLength,w.STREAM_READ),w.readPixels(pt,bt,_t,gt,Kt.convert(he),Kt.convert(le),0);let Ie=A!==null?rt.get(A).__webglFramebuffer:null;et.bindFramebuffer(w.FRAMEBUFFER,Ie);let ve=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await kp(w,ve,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Qt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,kt),w.deleteBuffer(Qt),w.deleteSync(ve),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,pt=null,bt=0){N.isTexture!==!0&&(qa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),pt=arguments[0]||null,N=arguments[1]);let _t=Math.pow(2,-bt),gt=Math.floor(N.image.width*_t),kt=Math.floor(N.image.height*_t),qt=pt!==null?pt.x:0,te=pt!==null?pt.y:0;P.setTexture2D(N,0),w.copyTexSubImage2D(w.TEXTURE_2D,bt,0,0,qt,te,gt,kt),et.unbindTexture()},this.copyTextureToTexture=function(N,pt,bt=null,_t=null,gt=0){N.isTexture!==!0&&(qa("WebGLRenderer: copyTextureToTexture function signature has changed."),_t=arguments[0]||null,N=arguments[1],pt=arguments[2],gt=arguments[3]||0,bt=null);let kt,qt,te,ee,he,le;bt!==null?(kt=bt.max.x-bt.min.x,qt=bt.max.y-bt.min.y,te=bt.min.x,ee=bt.min.y):(kt=N.image.width,qt=N.image.height,te=0,ee=0),_t!==null?(he=_t.x,le=_t.y):(he=0,le=0);let Qt=Kt.convert(pt.format),Ie=Kt.convert(pt.type);P.setTexture2D(pt,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,pt.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pt.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,pt.unpackAlignment);let ve=w.getParameter(w.UNPACK_ROW_LENGTH),We=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Cn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ce=w.getParameter(w.UNPACK_SKIP_ROWS),oe=w.getParameter(w.UNPACK_SKIP_IMAGES),ke=N.isCompressedTexture?N.mipmaps[gt]:N.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ke.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ke.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,te),w.pixelStorei(w.UNPACK_SKIP_ROWS,ee),N.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,gt,he,le,kt,qt,Qt,Ie,ke.data):N.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,gt,he,le,ke.width,ke.height,Qt,ke.data):w.texSubImage2D(w.TEXTURE_2D,gt,he,le,kt,qt,Qt,Ie,ke),w.pixelStorei(w.UNPACK_ROW_LENGTH,ve),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,We),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Cn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,oe),gt===0&&pt.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(N,pt,bt=null,_t=null,gt=0){N.isTexture!==!0&&(qa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),bt=arguments[0]||null,_t=arguments[1]||null,N=arguments[2],pt=arguments[3],gt=arguments[4]||0);let kt,qt,te,ee,he,le,Qt,Ie,ve,We=N.isCompressedTexture?N.mipmaps[gt]:N.image;bt!==null?(kt=bt.max.x-bt.min.x,qt=bt.max.y-bt.min.y,te=bt.max.z-bt.min.z,ee=bt.min.x,he=bt.min.y,le=bt.min.z):(kt=We.width,qt=We.height,te=We.depth,ee=0,he=0,le=0),_t!==null?(Qt=_t.x,Ie=_t.y,ve=_t.z):(Qt=0,Ie=0,ve=0);let Cn=Kt.convert(pt.format),Ce=Kt.convert(pt.type),oe;if(pt.isData3DTexture)P.setTexture3D(pt,0),oe=w.TEXTURE_3D;else if(pt.isDataArrayTexture||pt.isCompressedArrayTexture)P.setTexture2DArray(pt,0),oe=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,pt.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pt.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,pt.unpackAlignment);let ke=w.getParameter(w.UNPACK_ROW_LENGTH),Se=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Jn=w.getParameter(w.UNPACK_SKIP_PIXELS),Wi=w.getParameter(w.UNPACK_SKIP_ROWS),Fn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,We.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,We.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ee),w.pixelStorei(w.UNPACK_SKIP_ROWS,he),w.pixelStorei(w.UNPACK_SKIP_IMAGES,le),N.isDataTexture||N.isData3DTexture?w.texSubImage3D(oe,gt,Qt,Ie,ve,kt,qt,te,Cn,Ce,We.data):pt.isCompressedArrayTexture?w.compressedTexSubImage3D(oe,gt,Qt,Ie,ve,kt,qt,te,Cn,We.data):w.texSubImage3D(oe,gt,Qt,Ie,ve,kt,qt,te,Cn,Ce,We),w.pixelStorei(w.UNPACK_ROW_LENGTH,ke),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Se),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Jn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Wi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Fn),gt===0&&pt.generateMipmaps&&w.generateMipmap(oe),et.unbindTexture()},this.initRenderTarget=function(N){rt.get(N).__webglFramebuffer===void 0&&P.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?P.setTextureCube(N,0):N.isData3DTexture?P.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?P.setTexture2DArray(N,0):P.setTexture2D(N,0),et.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,et.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===fu?"display-p3":"srgb",e.unpackColorSpace=ze.workingColorSpace===Tc?"display-p3":"srgb"}};var lc=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qn=new T,hc=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyMatrix4(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.applyNormalMatrix(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qn.fromBufferAttribute(this,e),qn.transformDirection(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),r=Ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vn=class extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rs,Mo=new T,As=new T,Cs=new T,Ps=new Ht,bo=new Ht,Tf=new ue,Ca=new T,vo=new T,Pa=new T,G0=new Ht,Sl=new Ht,W0=new Ht,Zn=class extends pn{constructor(t=new Vn){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hh(e,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new hc(n,3,0,!1)),Rs.setAttribute("uv",new hc(n,2,3,!1))}this.geometry=Rs,this.material=t,this.center=new Ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Tf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Cs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Ia(Ca.set(-.5,-.5,0),Cs,o,As,r,s),Ia(vo.set(.5,-.5,0),Cs,o,As,r,s),Ia(Pa.set(.5,.5,0),Cs,o,As,r,s),G0.set(0,0),Sl.set(1,0),W0.set(1,1);let a=t.ray.intersectTriangle(Ca,vo,Pa,!1,Mo);if(a===null&&(Ia(vo.set(-.5,.5,0),Cs,o,As,r,s),Sl.set(0,1),a=t.ray.intersectTriangle(Ca,Pa,vo,!1,Mo),a===null))return;let c=t.ray.origin.distanceTo(Mo);c<t.near||c>t.far||e.push({distance:c,point:Mo.clone(),uv:vr.getInterpolation(Mo,Ca,vo,Pa,G0,Sl,W0,new Ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ia(i,t,e,n,r,s){Ps.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(bo.x=s*Ps.x-r*Ps.y,bo.y=r*Ps.x+s*Ps.y):bo.copy(Ps),i.copy(t),i.x+=bo.x,i.y+=bo.y,i.applyMatrix4(Tf)}var Uh=class extends Qn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=Pn,h=Pn,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uc=class extends Oe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Is=new ue,X0=new ue,La=[],q0=new ir,Fy=new ue,Eo=new At,wo=new rr,Xs=class extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Fy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ir),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),q0.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(q0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),wo.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(wo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(n),t.ray.intersectsSphere(wo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Is),X0.multiplyMatrices(n,Is),Eo.matrixWorld=X0,Eo.raycast(t,La);for(let o=0,a=La.length;o<a;o++){let c=La[o];c.instanceId=s,c.object=this,e.push(c)}La.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uh(new Float32Array(r*this.count),r,this.count,au,Ci));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qs=class extends Mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},fc=new T,dc=new T,Y0=new ue,To=new Fo,Da=new rr,Rl=new T,Z0=new T,Bo=class extends pn{constructor(t=new we,e=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)fc.fromBufferAttribute(e,r-1),dc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=fc.distanceTo(dc);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Da.radius+=s,t.ray.intersectsSphere(Da)===!1)return;Y0.copy(r).invert(),To.copy(t.ray).applyMatrix4(Y0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=h.getX(_),M=h.getX(_+1),x=Ha(this,t,To,c,p,M);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),f=h.getX(m),p=Ha(this,t,To,c,_,f);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=Ha(this,t,To,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Ha(this,t,To,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ha(i,t,e,n,r,s){let o=i.geometry.attributes.position;if(fc.fromBufferAttribute(o,r),dc.fromBufferAttribute(o,s),e.distanceSqToSegment(fc,dc,Rl,Z0)>n)return;Rl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Rl);if(!(c<t.near||c>t.far))return{distance:c,point:Z0.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Sr=class extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$0=new ue,Nh=new Fo,Ua=new rr,Na=new T,Rr=class extends pn{constructor(t=new we,e=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=s,t.ray.intersectsSphere(Ua)===!1)return;$0.copy(r).invert(),Nh.copy(t.ray).applyMatrix4($0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let f=l.getX(g);Na.fromBufferAttribute(u,f),K0(Na,f,c,r,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Na.fromBufferAttribute(u,g),K0(Na,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function K0(i,t,e,n,r,s,o){let a=Nh.distanceSqToPoint(i);if(a<e){let c=new T;Nh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var In=class extends Qn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Ht:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,r=[],s=[],o=[],a=new T,c=new ue;for(let m=0;m<=t;m++){let g=m/t;r[m]=this.getTangentAt(g,new T)}s[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(En(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(En(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ko=class extends ci{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ht){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fh=class extends ko{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,r(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Fa=new T,Al=new mu,Cl=new mu,Pl=new mu,zo=class extends ci{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new T){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Fa.subVectors(r[0],r[1]).add(r[0]),l=Fa);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Fa.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Al.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,f),Cl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,f),Pl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Cl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Pl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Al.calc(c),Cl.calc(c),Pl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new T().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function J0(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function Oy(i,t){let e=1-i;return e*e*t}function By(i,t){return 2*(1-i)*i*t}function ky(i,t){return i*i*t}function Io(i,t,e,n){return Oy(i,t)+By(i,e)+ky(i,n)}function zy(i,t){let e=1-i;return e*e*e*t}function Vy(i,t){let e=1-i;return 3*e*e*i*t}function Gy(i,t){return 3*(1-i)*i*i*t}function Wy(i,t){return i*i*i*t}function Lo(i,t,e,n,r){return zy(i,t)+Vy(i,e)+Gy(i,n)+Wy(i,r)}var pc=class extends ci{constructor(t=new Ht,e=new Ht,n=new Ht,r=new Ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ht){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Lo(t,r.x,s.x,o.x,a.x),Lo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oh=class extends ci{constructor(t=new T,e=new T,n=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new T){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Lo(t,r.x,s.x,o.x,a.x),Lo(t,r.y,s.y,o.y,a.y),Lo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mc=class extends ci{constructor(t=new Ht,e=new Ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bh=class extends ci{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends ci{constructor(t=new Ht,e=new Ht,n=new Ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ht){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Io(t,r.x,s.x,o.x),Io(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_c=class extends ci{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Io(t,r.x,s.x,o.x),Io(t,r.y,s.y,o.y),Io(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yc=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ht){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(J0(a,c.x,l.x,h.x,u.x),J0(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Ht().fromArray(r))}return this}},xc=Object.freeze({__proto__:null,ArcCurve:Fh,CatmullRomCurve3:zo,CubicBezierCurve:pc,CubicBezierCurve3:Oh,EllipseCurve:ko,LineCurve:mc,LineCurve3:Bh,QuadraticBezierCurve:gc,QuadraticBezierCurve3:_c,SplineCurve:yc}),kh=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new xc[r.type]().fromJSON(r))}return this}},Vo=class extends kh{constructor(t){super(),this.type="Path",this.currentPoint=new Ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mc(this.currentPoint.clone(),new Ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new gc(this.currentPoint.clone(),new Ht(t,e),new Ht(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new pc(this.currentPoint.clone(),new Ht(t,e),new Ht(n,r),new Ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new yc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new ko(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zh=class i extends we{constructor(t=[new Ht(0,-.5),new Ht(.5,0),new Ht(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=En(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new T,d=new Ht,m=new T,g=new T,_=new T,f=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:f=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let M=0;M<=e;M++){let x=n+M*h*r,b=Math.sin(x),L=Math.cos(x);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*b,u.y=t[C].y,u.z=t[C].x*L,o.push(u.x,u.y,u.z),d.x=M/e,d.y=C/(t.length-1),a.push(d.x,d.y);let A=c[3*C+0]*b,k=c[3*C+1],O=c[3*C+0]*L;l.push(A,k,O)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let b=x+M*t.length,L=b,C=b+t.length,A=b+t.length+1,k=b+1;s.push(L,C,k),s.push(A,k,C)}this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ar=class i extends zh{constructor(t=1,e=1,n=4,r=8){let s=new Vo;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Go=class i extends we{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new T,h=new Ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Te=class i extends we{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],g=0,_=[],f=n/2,p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(m,2));function M(){let b=new T,L=new T,C=0,A=(e-t)/n;for(let k=0;k<=s;k++){let O=[],y=k/s,v=y*(e-t)+t;for(let q=0;q<=r;q++){let V=q/r,J=V*c+a,mt=Math.sin(J),$=Math.cos(J);L.x=v*mt,L.y=-y*n+f,L.z=v*$,u.push(L.x,L.y,L.z),b.set(mt,A,$).normalize(),d.push(b.x,b.y,b.z),m.push(V,1-y),O.push(g++)}_.push(O)}for(let k=0;k<r;k++)for(let O=0;O<s;O++){let y=_[O][k],v=_[O+1][k],q=_[O+1][k+1],V=_[O][k+1];t>0&&(h.push(y,v,V),C+=3),e>0&&(h.push(v,q,V),C+=3)}l.addGroup(p,C,0),p+=C}function x(b){let L=g,C=new Ht,A=new T,k=0,O=b===!0?t:e,y=b===!0?1:-1;for(let q=1;q<=r;q++)u.push(0,f*y,0),d.push(0,y,0),m.push(.5,.5),g++;let v=g;for(let q=0;q<=r;q++){let J=q/r*c+a,mt=Math.cos(J),$=Math.sin(J);A.x=O*$,A.y=f*y,A.z=O*mt,u.push(A.x,A.y,A.z),d.push(0,y,0),C.x=mt*.5+.5,C.y=$*.5*y+.5,m.push(C.x,C.y),g++}for(let q=0;q<r;q++){let V=L+q,J=v+q;b===!0?h.push(J,J+1,V):h.push(J+1,J,V),k+=3}l.addGroup(p,k,b===!0?1:2),p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gn=class i extends Te{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mc=class i extends we{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new T,b=new T,L=new T;for(let C=0;C<e.length;C+=3)m(e[C+0],x),m(e[C+1],b),m(e[C+2],L),c(x,b,L,M)}function c(M,x,b,L){let C=L+1,A=[];for(let k=0;k<=C;k++){A[k]=[];let O=M.clone().lerp(b,k/C),y=x.clone().lerp(b,k/C),v=C-k;for(let q=0;q<=v;q++)q===0&&k===C?A[k][q]=O:A[k][q]=O.clone().lerp(y,q/v)}for(let k=0;k<C;k++)for(let O=0;O<2*(C-k)-1;O++){let y=Math.floor(O/2);O%2===0?(d(A[k][y+1]),d(A[k+1][y]),d(A[k][y])):(d(A[k][y+1]),d(A[k+1][y+1]),d(A[k+1][y]))}}function l(M){let x=new T;for(let b=0;b<s.length;b+=3)x.x=s[b+0],x.y=s[b+1],x.z=s[b+2],x.normalize().multiplyScalar(M),s[b+0]=x.x,s[b+1]=x.y,s[b+2]=x.z}function h(){let M=new T;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];let b=f(M)/2/Math.PI+.5,L=p(M)/Math.PI+.5;o.push(b,1-L)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let x=o[M+0],b=o[M+2],L=o[M+4],C=Math.max(x,b,L),A=Math.min(x,b,L);C>.9&&A<.1&&(x<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function m(M,x){let b=M*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){let M=new T,x=new T,b=new T,L=new T,C=new Ht,A=new Ht,k=new Ht;for(let O=0,y=0;O<s.length;O+=9,y+=6){M.set(s[O+0],s[O+1],s[O+2]),x.set(s[O+3],s[O+4],s[O+5]),b.set(s[O+6],s[O+7],s[O+8]),C.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),k.set(o[y+4],o[y+5]),L.copy(M).add(x).add(b).divideScalar(3);let v=f(L);_(C,y+0,M,v),_(A,y+2,x,v),_(k,y+4,b,v)}}function _(M,x,b,L){L<0&&M.x===1&&(o[x]=M.x-1),b.x===0&&b.z===0&&(o[x]=L/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var es=class extends Vo{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Vo().fromJSON(r))}return this}},Xy={triangulate:function(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Sf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=Ky(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Wo(s,o,e,a,c,m,0),o}};function Sf(i,t,e,n,r){let s,o;if(r===ax(i,t,e,n)>0)for(s=t;s<e;s+=n)o=j0(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=j0(s,i[s],i[s+1],o);return o&&Rc(o,o.next)&&(qo(o),o=o.next),o}function ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rc(e,e.next)||rn(e.prev,e,e.next)===0)){if(qo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wo(i,t,e,n,r,s,o){if(!i)return;!o&&s&&ex(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Yy(i,n,r,s):qy(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),qo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Zy(ns(i),t,e),Wo(i,t,e,n,r,s,2)):o===2&&$y(i,t,e,n,r,s):Wo(ns(i),t,e,n,r,s,1);break}}}function qy(i){let t=i.prev,e=i,n=i.next;if(rn(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&Ds(r,a,s,c,o,l,g.x,g.y)&&rn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yy(i,t,e,n){let r=i.prev,s=i,o=i.next;if(rn(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,p=Vh(m,g,t,e,n),M=Vh(_,f,t,e,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=p&&b&&b.z<=M;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&Ds(a,h,c,u,l,d,x.x,x.y)&&rn(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&Ds(a,h,c,u,l,d,b.x,b.y)&&rn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&Ds(a,h,c,u,l,d,x.x,x.y)&&rn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=M;){if(b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&Ds(a,h,c,u,l,d,b.x,b.y)&&rn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Zy(i,t,e){let n=i;do{let r=n.prev,s=n.next.next;!Rc(r,s)&&Rf(r,n,n.next,s)&&Xo(r,s)&&Xo(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),qo(n),qo(n.next),n=i=s),n=n.next}while(n!==i);return ns(n)}function $y(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rx(o,a)){let c=Af(o,a);o=ns(o,o.next),c=ns(c,c.next),Wo(o,t,e,n,r,s,0),Wo(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Ky(i,t,e,n){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=Sf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(ix(l));for(r.sort(Jy),s=0;s<r.length;s++)e=jy(r[s],e);return e}function Jy(i,t){return i.x-t.x}function jy(i,t){let e=Qy(i,t);if(!e)return t;let n=Af(e,i);return ns(n,n.next),ns(e,e.next)}function Qy(i,t){let e=t,n=-1/0,r,s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Ds(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Xo(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&tx(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function tx(i,t){return rn(i.prev,i,t.prev)<0&&rn(t.next,i,i.next)<0}function ex(i,t,e,n){let r=i;do r.z===0&&(r.z=Vh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,nx(r)}function nx(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Vh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ix(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ds(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function rx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sx(i,t)&&(Xo(i,t)&&Xo(t,i)&&ox(i,t)&&(rn(i.prev,i,t.prev)||rn(i,t.prev,t))||Rc(i,t)&&rn(i.prev,i,i.next)>0&&rn(t.prev,t,t.next)>0)}function rn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rc(i,t){return i.x===t.x&&i.y===t.y}function Rf(i,t,e,n){let r=Ba(rn(i,t,e)),s=Ba(rn(i,t,n)),o=Ba(rn(e,n,i)),a=Ba(rn(e,n,t));return!!(r!==s&&o!==a||r===0&&Oa(i,e,t)||s===0&&Oa(i,n,t)||o===0&&Oa(e,i,n)||a===0&&Oa(e,t,n))}function Oa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ba(i){return i>0?1:i<0?-1:0}function sx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xo(i,t){return rn(i.prev,i,i.next)<0?rn(i,t,i.next)>=0&&rn(i,i.prev,t)>=0:rn(i,t,i.prev)<0||rn(i,i.next,t)<0}function ox(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Af(i,t){let e=new Gh(i.i,i.x,i.y),n=new Gh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function j0(i,t,e,n){let r=new Gh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function qo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ax(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Do=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Q0(t),tf(n,t);let o=t.length;e.forEach(Q0);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,tf(n,e[c]);let a=Xy.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Q0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function tf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ys=class i extends we{constructor(t=new es([new Ht(.5,.5),new Ht(-.5,.5),new Ht(-.5,-.5),new Ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ae(r,3)),this.setAttribute("uv",new ae(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:cx,x,b=!1,L,C,A,k;p&&(x=p.getSpacedPoints(h),b=!0,d=!1,L=p.computeFrenetFrames(h,!1),C=new T,A=new T,k=new T),d||(f=0,m=0,g=0,_=0);let O=a.extractPoints(l),y=O.shape,v=O.holes;if(!Do.isClockWise(y)){y=y.reverse();for(let G=0,w=v.length;G<w;G++){let it=v[G];Do.isClockWise(it)&&(v[G]=it.reverse())}}let V=Do.triangulateShape(y,v),J=y;for(let G=0,w=v.length;G<w;G++){let it=v[G];y=y.concat(it)}function mt(G,w,it){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(w,it)}let $=y.length,lt=V.length;function I(G,w,it){let K,tt,et,nt=G.x-w.x,rt=G.y-w.y,P=it.x-G.x,E=it.y-G.y,F=nt*nt+rt*rt,ot=nt*E-rt*P;if(Math.abs(ot)>Number.EPSILON){let dt=Math.sqrt(F),st=Math.sqrt(P*P+E*E),Tt=w.x-rt/dt,vt=w.y+nt/dt,yt=it.x-E/st,Ut=it.y+P/st,Mt=((yt-Tt)*E-(Ut-vt)*P)/(nt*E-rt*P);K=Tt+nt*Mt-G.x,tt=vt+rt*Mt-G.y;let Lt=K*K+tt*tt;if(Lt<=2)return new Ht(K,tt);et=Math.sqrt(Lt/2)}else{let dt=!1;nt>Number.EPSILON?P>Number.EPSILON&&(dt=!0):nt<-Number.EPSILON?P<-Number.EPSILON&&(dt=!0):Math.sign(rt)===Math.sign(E)&&(dt=!0),dt?(K=-rt,tt=nt,et=Math.sqrt(F)):(K=nt,tt=rt,et=Math.sqrt(F/2))}return new Ht(K/et,tt/et)}let Q=[];for(let G=0,w=J.length,it=w-1,K=G+1;G<w;G++,it++,K++)it===w&&(it=0),K===w&&(K=0),Q[G]=I(J[G],J[it],J[K]);let B=[],j,ct=Q.concat();for(let G=0,w=v.length;G<w;G++){let it=v[G];j=[];for(let K=0,tt=it.length,et=tt-1,nt=K+1;K<tt;K++,et++,nt++)et===tt&&(et=0),nt===tt&&(nt=0),j[K]=I(it[K],it[et],it[nt]);B.push(j),ct=ct.concat(j)}for(let G=0;G<f;G++){let w=G/f,it=m*Math.cos(w*Math.PI/2),K=g*Math.sin(w*Math.PI/2)+_;for(let tt=0,et=J.length;tt<et;tt++){let nt=mt(J[tt],Q[tt],K);W(nt.x,nt.y,-it)}for(let tt=0,et=v.length;tt<et;tt++){let nt=v[tt];j=B[tt];for(let rt=0,P=nt.length;rt<P;rt++){let E=mt(nt[rt],j[rt],K);W(E.x,E.y,-it)}}}let Y=g+_;for(let G=0;G<$;G++){let w=d?mt(y[G],ct[G],Y):y[G];b?(A.copy(L.normals[0]).multiplyScalar(w.x),C.copy(L.binormals[0]).multiplyScalar(w.y),k.copy(x[0]).add(A).add(C),W(k.x,k.y,k.z)):W(w.x,w.y,0)}for(let G=1;G<=h;G++)for(let w=0;w<$;w++){let it=d?mt(y[w],ct[w],Y):y[w];b?(A.copy(L.normals[G]).multiplyScalar(it.x),C.copy(L.binormals[G]).multiplyScalar(it.y),k.copy(x[G]).add(A).add(C),W(k.x,k.y,k.z)):W(it.x,it.y,u/h*G)}for(let G=f-1;G>=0;G--){let w=G/f,it=m*Math.cos(w*Math.PI/2),K=g*Math.sin(w*Math.PI/2)+_;for(let tt=0,et=J.length;tt<et;tt++){let nt=mt(J[tt],Q[tt],K);W(nt.x,nt.y,u+it)}for(let tt=0,et=v.length;tt<et;tt++){let nt=v[tt];j=B[tt];for(let rt=0,P=nt.length;rt<P;rt++){let E=mt(nt[rt],j[rt],K);b?W(E.x,E.y+x[h-1].y,x[h-1].x+it):W(E.x,E.y,u+it)}}}R(),S();function R(){let G=r.length/3;if(d){let w=0,it=$*w;for(let K=0;K<lt;K++){let tt=V[K];H(tt[2]+it,tt[1]+it,tt[0]+it)}w=h+f*2,it=$*w;for(let K=0;K<lt;K++){let tt=V[K];H(tt[0]+it,tt[1]+it,tt[2]+it)}}else{for(let w=0;w<lt;w++){let it=V[w];H(it[2],it[1],it[0])}for(let w=0;w<lt;w++){let it=V[w];H(it[0]+$*h,it[1]+$*h,it[2]+$*h)}}n.addGroup(G,r.length/3-G,0)}function S(){let G=r.length/3,w=0;D(J,w),w+=J.length;for(let it=0,K=v.length;it<K;it++){let tt=v[it];D(tt,w),w+=tt.length}n.addGroup(G,r.length/3-G,1)}function D(G,w){let it=G.length;for(;--it>=0;){let K=it,tt=it-1;tt<0&&(tt=G.length-1);for(let et=0,nt=h+f*2;et<nt;et++){let rt=$*et,P=$*(et+1),E=w+K+rt,F=w+tt+rt,ot=w+tt+P,dt=w+K+P;U(E,F,ot,dt)}}}function W(G,w,it){c.push(G),c.push(w),c.push(it)}function H(G,w,it){X(G),X(w),X(it);let K=r.length/3,tt=M.generateTopUV(n,r,K-3,K-2,K-1);Z(tt[0]),Z(tt[1]),Z(tt[2])}function U(G,w,it,K){X(G),X(w),X(K),X(w),X(it),X(K);let tt=r.length/3,et=M.generateSideWallUV(n,r,tt-6,tt-3,tt-2,tt-1);Z(et[0]),Z(et[1]),Z(et[3]),Z(et[1]),Z(et[2]),Z(et[3])}function X(G){r.push(c[G*3+0]),r.push(c[G*3+1]),r.push(c[G*3+2])}function Z(G){s.push(G.x),s.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return lx(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new xc[r.type]().fromJSON(r)),new i(n,t.options)}},cx={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new Ht(s,o),new Ht(a,c),new Ht(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ht(o,1-c),new Ht(l,1-u),new Ht(d,1-g),new Ht(_,1-p)]:[new Ht(a,1-c),new Ht(h,1-u),new Ht(m,1-g),new Ht(f,1-p)]}};function lx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mn=class i extends Mc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Yo=class i extends Mc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Be=class i extends we{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new T,d=new T,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){let M=[],x=p/n,b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let C=L/e;u.x=-t*Math.cos(r+C*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(r+C*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(C+b,1-x),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let x=h[p][M+1],b=h[p][M],L=h[p+1][M],C=h[p+1][M+1];(p!==0||o>0)&&m.push(x,b,C),(p!==n-1||c<Math.PI)&&m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ln=class i extends we{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let _=g/r*s,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let _=(r+1)*m+g-1,f=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,M=(r+1)*m+g;o.push(_,f,M),o.push(f,p,M)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var bc=class i extends we{constructor(t=new _c(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new T,c=new T,l=new Ht,h=new T,u=[],d=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(m,2));function _(){for(let x=0;x<e;x++)f(x);f(s===!1?e:0),M(),p()}function f(x){h=t.getPointAt(x/e,h);let b=o.normals[x],L=o.binormals[x];for(let C=0;C<=r;C++){let A=C/r*Math.PI*2,k=Math.sin(A),O=-Math.cos(A);c.x=O*b.x+k*L.x,c.y=O*b.y+k*L.y,c.z=O*b.z+k*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let b=1;b<=r;b++){let L=(r+1)*(x-1)+(b-1),C=(r+1)*x+(b-1),A=(r+1)*x+b,k=(r+1)*(x-1)+b;g.push(L,C,k),g.push(C,A,k)}}function M(){for(let x=0;x<=e;x++)for(let b=0;b<=r;b++)l.x=x/e,l.y=b/r,m.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new xc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Pe=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Zs=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ka(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function hx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $s=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wh=class extends $s{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ju:s=t,a=2*e-n;break;case Qu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ju:o=t,c=2*n-e;break;case Qu:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,M=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-m)*f+(1.5+m)*_+.5*g,b=m*f-m*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+M*o[l+L]+x*o[c+L]+b*o[u+L];return s}},Xh=class extends $s{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},qh=class extends $s{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},bi=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ka(e,this.TimeBufferType),this.values=ka(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ka(t.times,Array),values:ka(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ya:e=this.InterpolantFactoryMethodDiscrete;break;case gh:e=this.InterpolantFactoryMethodLinear;break;case jc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ya;case this.InterpolantFactoryMethodLinear:return gh;case this.InterpolantFactoryMethodSmooth:return jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&hx(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=gh;var is=class extends bi{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ya;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Yh=class extends bi{};Yh.prototype.ValueTypeName="color";var Zh=class extends bi{};Zh.prototype.ValueTypeName="number";var $h=class extends $s{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)Qe.slerpFlat(s,0,o,l-a,o,l,c);return s}},vc=class extends bi{InterpolantFactoryMethodLinear(t){return new $h(this.times,this.values,this.getValueSize(),t)}};vc.prototype.ValueTypeName="quaternion";vc.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends bi{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ya;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Kh=class extends bi{};Kh.prototype.ValueTypeName="vector";var Jh=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},ux=new Jh,jh=class{constructor(t){this.manager=t!==void 0?t:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};jh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zo=class extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ks=class extends Zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Il=new ue,ef=new T,nf=new T,Ec=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(ef),nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nf),e.updateMatrixWorld(),Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var rf=new ue,So=new T,Ll=new T,Qh=class extends Ec{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),So.setFromMatrixPosition(t.matrixWorld),n.position.copy(So),Ll.copy(n.position),Ll.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ll),n.updateMatrixWorld(),r.makeTranslation(-So.x,-So.y,-So.z),rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf)}},vi=class extends Zo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},tu=class extends Ec{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends Zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new tu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var gu="\\[\\]\\.:\\/",fx=new RegExp("["+gu+"]","g"),_u="[^"+gu+"]",dx="[^"+gu.replace("\\.","")+"]",px=/((?:WC+[\/:])*)/.source.replace("WC",_u),mx=/(WCOD+)?/.source.replace("WCOD",dx),gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),_x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),yx=new RegExp("^"+px+mx+gx+_x+"$"),xx=["material","materials","bones","map"],eu=class{constructor(t,e,n){let r=n||en.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},en=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fx,"")}static parseTrackName(t){let e=yx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);xx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=eu;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Cf=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var Ac=i=>Cf.find(t=>t.id===i)??Cf[0];var Pf=["none","float","aim","twohand"],Jo=i=>Pf.includes(i);function Lf(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var Cc=(i,t,e)=>i+(t-i)*e,Df=i=>Math.min(1,Math.max(0,i)),jo=(i,t)=>Math.max(0,i)**t;function Mu(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var Hf=(i,t,e)=>new Tn(i,t,e,"ZYX"),Qs=class{constructor(t,e={}){tn(this,"n",t);tn(this,"geo",new we);tn(this,"per");tn(this,"radial");tn(this,"closed");tn(this,"sharp");tn(this,"caps");tn(this,"samples");tn(this,"pos");tn(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let r=this.radial+1,s=this.samples*r+(this.caps?2:0);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3);let o=new Float32Array(s*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*r+l)*2]=c/(this.samples-1),o[(c*r+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*r+l,u=h+r;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*r,l=c+1,h=(this.samples-1)*r;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new Oe(this.pos,3)),this.geo.setAttribute("normal",new Oe(this.nor,3)),this.geo.setAttribute("uv",new Oe(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:r,radial:s,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=M=>t[o?(M%n+n)%n:Math.min(n-1,Math.max(0,M))],u=M=>typeof e=="number"?e:e[o?(M%n+n)%n:Math.min(n-1,Math.max(0,M))];for(let M=0;M<a;M++){let x=Math.floor(M/r),b=M%r/r;!o&&x>=n-1&&(x=n-2,b=1);let L=h(x),C=h(x+1);for(let A=0;A<3;A++)if(this.sharp)c[M*3+A]=L[A]+(C[A]-L[A])*b;else{let k=o||x>0?h(x-1)[A]:2*L[A]-C[A],O=o||x+2<n?h(x+2)[A]:2*C[A]-L[A],y=b*b,v=y*b;c[M*3+A]=.5*(2*L[A]+(-k+C[A])*b+(2*k-5*L[A]+4*C[A]-O)*y+(-k+3*L[A]-3*C[A]+O)*v)}l[M]=Math.max(1e-4,Math.abs(u(x)+(u(x+1)-u(x))*b))}let d=new T,m=new T,g=new T,_=new T,f=M=>{let x=o?(M-1+a-1)%(a-1):Math.max(0,M-1),b=o?(M+1)%(a-1):Math.min(a-1,M+1);return d.set(c[b*3]-c[x*3],c[b*3+1]-c[x*3+1],c[b*3+2]-c[x*3+2]),d.lengthSq()<1e-12&&d.set(0,0,1),d.normalize()};f(0),_.set(Math.abs(d.x)<.9?1:0,Math.abs(d.x)<.9?0:1,0),m.crossVectors(d,_).normalize();let p=s+1;for(let M=0;M<a;M++){f(M),m.addScaledVector(d,-m.dot(d)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(d,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(d,m);for(let x=0;x<=s;x++){let b=x/s*Math.PI*2,L=Math.cos(b),C=Math.sin(b),A=L*m.x+C*g.x,k=L*m.y+C*g.y,O=L*m.z+C*g.z,y=(M*p+x)*3;this.nor[y]=A,this.nor[y+1]=k,this.nor[y+2]=O,this.pos[y]=c[M*3]+l[M]*A,this.pos[y+1]=c[M*3+1]+l[M]*k,this.pos[y+2]=c[M*3+2]+l[M]*O}if(this.caps&&(M===0||M===a-1)){let x=(a*p+(M?1:0))*3,b=M?1:-1;this.pos[x]=c[M*3],this.pos[x+1]=c[M*3+1],this.pos[x+2]=c[M*3+2],this.nor[x]=d.x*b,this.nor[x+1]=d.y*b,this.nor[x+2]=d.z*b}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function fn(i,t,e={}){return new Qs(i.length,e).set(i,t).geo}function Ei(i,t,e,n=12,r=.35,s={}){let o=new ue().makeRotationFromEuler(Hf(...t)),a=[],c=[],l=new T;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+r*Math.sin(3*u)))}return fn(a,c,{closed:!0,per:6,...s})}function ar(i,t,e,n,r,s=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<r;u++){let d=u/(r-1),m=s+2*Math.PI*n*d,g=t+(e-t)*d,_=l(d)+(a&&o?a.uniform(-o,o):0),[f,p]=c?c(g):[0,0];h.push([f+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var Ic=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function li(i,t,e,n,r){let s=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);s.push(...l,...h,0,0,i),s.push(...h,...l,0,0,-t)}let a=new we;return a.setAttribute("position",new ae(s,3)),a.setAttribute("uv",new ae(new Array(s.length/3*2).fill(.5),2)),r&&a.applyMatrix4(new ue().makeRotationFromEuler(Hf(...r))),a.computeVertexNormals(),a}function bu(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),r.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;s.push(l,l+1,h+1,l,h+1,h)}let o=new we;return o.setAttribute("position",new ae(n,3)),o.setAttribute("uv",new ae(r,2)),o.setIndex(s),o.computeVertexNormals(),o}var Pc=class{constructor(){tn(this,"parts",new Map)}add(t,e,n,r,s){let o=t.index?t:Mx(t),a=new ue().compose(n?Array.isArray(n)?new T(...n):n:new T,new Qe().setFromEuler(r??new Tn),s===void 0?new T(1,1,1):typeof s=="number"?new T(s,s,s):new T(...s)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,r]of this.parts){let s=new At(vu(r),n);t.add(s),e.push(s);for(let o of r)o.dispose()}return this.parts.clear(),e}};function Mx(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,r)=>r)),t}function vu(i){let t=0,e=0;for(let d of i)t+=d.attributes.position.count,e+=d.index.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=i.some(d=>d.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let d of i){let m=d.attributes.position.count;n.set(d.attributes.position.array,l*3),d.attributes.normal||d.computeVertexNormals(),r.set(d.attributes.normal.array,l*3),d.attributes.uv&&s.set(d.attributes.uv.array,l*2),a&&d.attributes.color&&a.set(d.attributes.color.array,l*3);let g=d.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new we;return u.setAttribute("position",new Oe(n,3)),u.setAttribute("normal",new Oe(r,3)),u.setAttribute("uv",new Oe(s,2)),a&&u.setAttribute("color",new Oe(a,3)),u.setIndex(new Oe(c,1)),u.computeBoundingSphere(),u}var If=new Map;function yu(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function xu(i,t,e,n=4,r=1){let s=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let d=Math.floor(l),m=Math.floor(h),g=l-d,_=h-m,f=g*g*(3-2*g),p=_*_*(3-2*_),M=(b,L)=>yu((b%c+c)%c,(L%c+c)%c,r+u),x=Cc(Cc(M(d,m),M(d+1,m),f),Cc(M(d,m+1),M(d+1,m+1),f),p);s+=x*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return s/a}function Uf(i,t,e,n=[1,1]){let r=If.get(i);if(!r){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),r=new In(o),r.wrapS=r.wrapT=Qr,If.set(i,r)}let s=r.clone();return s.repeat.set(...n),s.needsUpdate=!0,s}var Nf=(i,t,e,n,r)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=r,i.data[t*4+3]=255};function ss(i=1,t=[1,1],e=.35,n=1.25){return Uf(`noise${i}`,128,r=>{for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=xu(o/(16*i),s/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,Cc(e,n,a)/1.25));Nf(r,s*128+o,c,c,c)}},t)}function Ff(i=6,t=.11,e=[1,1]){return Uf(`vein${i}:${t}`,128,n=>{let r=[];for(let s=0;s<i;s++)for(let o=0;o<i;o++)r.push([(o+yu(o,s,9))/i,(s+yu(o,s,11))/i]);for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=o/128+(xu(o/16,s/16,8,2,5)-.5)*.08,c=s/128+(xu(o/16+7,s/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of r)for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let M=a-g-p,x=c-_-f,b=Math.sqrt(M*M+x*x);b<l?(h=l,l=b):b<h&&(h=b)}let u=(h-l)*i*.5,d=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*d*d);Nf(n,s*128+o,m,m,m)}},e)}var Pr=1.13,Qo=.66,fe=(i,t,e)=>new zt(i,t,e);function bx(i,t){let e=(s,o=!0)=>(o?i.push(s):t.push(s),s),n=(s,o=1.7)=>s.clone().multiplyScalar(o),r=s=>Math.min(2.4,.55+s*.13);return{bark:(s,o)=>e(new Pe({color:n(o,1.5),map:ss(4,[3,2]),roughness:.9,emissive:s.clone().multiplyScalar(.4)})),plain:(s,o=.5)=>e(new Pe({color:n(s),roughness:o})),leaf:(s,o)=>e(new Pe({color:n(o,1.6),map:ss(1,[2,2],.45),roughness:.45,side:Fe,emissive:s.clone().multiplyScalar(.6)})),metal:(s,o=.28)=>e(new Pe({color:n(s,1.25),metalness:.55,roughness:o+.12})),veins:(s,o,a,c=6,l=.11,h=.1)=>e(new Pe({color:n(s,2.4),map:ss(1,[3,2]),emissive:o,emissiveMap:Ff(c,l,[4,2]),emissiveIntensity:r(a),roughness:.6,metalness:h})),lava:()=>e(new Pe({color:fe(.3,.05,0),emissive:fe(1,.22,.015),emissiveMap:ss(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(s,o,a,c=zn)=>e(new Pe({color:o,emissive:s,emissiveMap:ss(1,[2,2],.6),emissiveIntensity:r(a),roughness:.4,side:c})),emissive:(s,o)=>e(new Pe({color:s.clone().multiplyScalar(.15),emissive:s,emissiveIntensity:r(o),roughness:.4})),crystal:(s,o)=>e(new Pe({color:n(s,1.3),emissive:s,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(s,o=.3)=>e(new Pe({color:s,emissive:s.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Pe({color:fe(.55,.82,1),map:ss(2,[4,1],.7),emissive:fe(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var as=i=>Math.max(8,Math.round(i*.5)),ta=i=>Math.max(1,Math.round(i*.45)),Lc=i=>i-Math.floor(i);function vx(i,t,e,n,r,s=.09,o=.1){let a=i+n,c=(a%t+t)%t;return r*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-s*c)*(Math.cos(o*c)+s/o*Math.sin(o*c)))}function Ex(i,t,e,n=8,r=10,s=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-r)/s))))}function Of(i,t,e,n){let r=[];for(let s=0;s<t;s++){let o=new T(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),r.push([o.x,o.y,o.z])}return r}function Eu(i,t,e,n,r,s){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*r));return o.push(e),fn(o,o.map((a,c)=>s*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function wx(i,t,e,n,r,s,o,a=.45){return bu(4,10,(c,l)=>{let h=2*c-1,u=.07+r*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-s*l**3,d=t+e*l,m=i+o*l,g=n*Math.max(.03,jo(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,f=h*g,p=Math.cos(m),M=Math.sin(m);return[_*p-f*M,_*M+f*p,d]})}function Tx(i=.14,t=.055){return bu(3,6,(e,n)=>{let r=2*e-1,s=t*(.04+jo(Math.sin(Math.PI*n**.75),.9));return[r*s,n*i,-Math.abs(r)*s*.45-.18*i*n*n]})}var os=new pn;function to(i,t,e,n,r){os.position.set(e[0],e[1],e[2]),typeof n=="number"?os.scale.setScalar(Math.max(1e-5,n)):os.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),r?os.rotation.set(r[0],r[1],r[2],"ZYX"):os.rotation.set(0,0,0),os.updateMatrix(),i.setMatrixAt(t,os.matrix)}var Tu=new Mn(1,1),wu=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((r,s)=>{for(let o of n)o.offset.x-=s*e})};function Sx(i){let{rng:t,m:e}=i,n=e.bark(fe(.045,.028,.014),fe(.3,.19,.1)),r=e.plain(fe(.1,.3,.05),.55),s=e.leaf(fe(.015,.14,.02),fe(.1,.34,.045)),o=.022,a=_=>Ic(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(fn([...c,2.6,2.63].map(_=>[...a(_),_]),[...l,.06,.015],{radial:8,per:5}),n);for(let _=0;_<5;_++){let f=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(f),M=Math.sin(f);i.stat(fn([[.03*p,.03*M,.3],[.06*p,.06*M,.17],[.1*p,.1*M,.07],[.14*p,.14*M,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,f,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:f-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},d=[.015,.09,.2,.235,.185,.06],m=[2.42,2.6,2.8,3.02,3.22,3.33];for(let _=0;_<6;_++){let f=2*Math.PI*_/6+t.uniform(-.15,.15),p=d.map((M,x)=>{let b=f+.22*x;return[M*Math.cos(b),M*Math.sin(b),m[x]+t.uniform(-.02,.02)]});i.stat(fn(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let M of[2,4])u(p[M],Math.atan2(p[M][1],p[M][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,f,p,M,x])=>{let b=as(56),L=ar(C=>Mu(c,l,_+(f-_)*C)+.018,_,f,p,b,M,.004,t,a);i.stat(fn(L,L.map((C,A)=>x*(1-.55*A/(b-1))),{radial:5,per:3}),r);for(let C=2;C<b-2;C+=Math.max(1,Math.floor((b-4)/ta(22)))){let A=L[C],k=a(A[2]);u(A,Math.atan2(A[1]-k[1],A[0]-k[0]),t.uniform(.7,1.3))}});let g=i.inst(Tx(),s,h.length);return i.anim(_=>{h.forEach((f,p)=>to(g,p,f.p,f.s,[f.rx+.16*Math.sin(_*.2094+f.ph),f.ry,f.rz+.1*Math.sin(_*.1309+f.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:fe(.45,1,.35),hot:fe(.7,1,.3),mid:fe(.15,.8,.05)}}function Rx(i){let{rng:t,m:e}=i,n=e.veins(fe(.085,.065,.055),fe(1,.3,.03),2,7,.06,0);n.roughness=.9;let r=e.lava(),s=e.core(fe(1,.36,.04),fe(.9,.12,.01),2,Fe);wu(i,r,.25),wu(i,s,-.18);let o=.014,a=g=>Ic(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(fn(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,f=2.35)=>Mu(c,l,_+(f-_)*g);for(let g=0;g<2;g++){let _=as(60),f=ar(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(fn(f,f.map((p,M)=>.012+.003*Math.sin(M*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=as(60),f=ar(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(fn(f,f.map((p,M)=>.0085+.002*Math.sin(M*.7)),{radial:5,per:3}),r)}{let g=ar(_=>h(_,.5,2.2)-.001,.5,2.2,-3,as(50),.8,0,void 0,a);i.stat(fn(g,.0055,{radial:4,per:3}),r)}i.stat(Ei(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(Ei(.082,[0,0,0],.008,10,0),r,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(wx(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),s);i.stat(Ei(.165,[0,0,0],.007,14,0),r,[0,0,2.86]);let u=6,d=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),f=t.uniform(.16,.2);d.push({p:[f*Math.cos(_),f*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(Tu,e.emissive(fe(1,.45,.05),10),u);return i.anim(g=>{d.forEach((_,f)=>{let p=Lc(g/60+_.ph),M=_.s*Math.min(1,p*6)*(1-.6*p);to(m,f,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*M,.85*M,7*M])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:fe(1,.45,.1),hot:fe(1,.7,.15),mid:fe(1,.25,.02)}}function Ax(i){let{rng:t,m:e}=i,n=e.metal(fe(.1,.12,.16),.3),r=e.metal(fe(.78,.84,.9),.18),s=e.water(),o=e.crystal(fe(.2,.7,1),2.5),a=e.crystal(fe(.4,.8,1),1.5);wu(i,s,.3);let c=.006,l=_=>Ic(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(fn(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(Ei(.066,[0,0,0],.012,10,0),r,[0,0,2.56]);for(let _=0;_<3;_++){let f=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(fn([[.04*f,.04*p,2.55],[.085*f,.085*p,2.68],[.12*f,.12*p,2.82],[.13*f,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),r)}for(let _=0;_<2;_++)i.stat(fn(ar(.05,.4,2.45,7,as(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),r);{let _=as(64),f=ar(b=>.058+.012*Math.sin(b*20),.45,2.5,3.2,_,1,0,void 0,l),p=f.map((b,L)=>.012+.014*(.5+.5*Math.sin(L*.45))),M=new Qs(_,{radial:6,per:3});M.set(f,p),i.mesh(M.geo,s);let x=p.slice();i.anim(b=>{for(let L=0;L<_;L++)x[L]=p[L]*(1+.6*Math.sin(b*.2618-L*.7));M.set(f,x)})}[.7,1,1.35,1.7,2.05].forEach((_,f)=>{let p=f*2.1;i.stat(li(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,f,p,M,x,b,L,C,A],k)=>{let y=20+k*50,v=k===0?1:-1,q=M<p?-1:1,V=Math.PI/180,J=Array.from({length:40},(ct,Y)=>{let R=Y/39;return{a:(p+(M-p)*R)*V,b:p*V+q*C*V*R,R:_+(f-_)*R,y:b+.04*Math.sin(R*6),r:.004+x*jo(Math.sin(Math.PI*R),.8)}}),mt=(ct,Y,R,S)=>[ct*t.uniform(.35,1.4),Y*t.uniform(.8,1.2),-S*R+t.uniform(-1.4,1.4),t.uniform(1,5)],$=J.map((ct,Y)=>[mt(.07,.35,.9,Y),mt(.035,.7,1.7,Y),mt(.03,.3,1,Y),mt(.015,.6,1.8,Y),mt(.32,.45,.9,Y),mt(.2,.8,1.6,Y),mt(.1,1.3,2.3,Y)]),lt=new Qs(40,{radial:6,per:2}),I=J.map(()=>[0,0,0]),Q=J.map(()=>0),B=i.mesh(lt.geo,s,[0,0,3]);B.renderOrder=2;let j=ct=>{let Y=vx(ct,120,1,y,v),R=Ex(ct,120,y,12),S=Math.floor((ct+y)/120),D=W=>W[0]*Math.sin(ct*W[1]+W[2]+S*W[3]);J.forEach((W,H)=>{let U=$[H],X=W.a*(1-R)+W.b*R+Y,Z=W.R*(1-R)+L*(1+R*(D(U[0])+D(U[1])))*R;I[H][0]=Z*Math.cos(X),I[H][2]=Z*Math.sin(X),I[H][1]=W.y*(1-R)+(b+D(U[2])+D(U[3]))*R,Q[H]=W.r*(1+.3*(1-R)*Math.sin(ct*.2618-H*.8))*(1-R)+A*R*Math.max(.3,1+R*(D(U[4])+D(U[5])+D(U[6])))}),lt.set(I,Q)};j(0),i.anim(j)});let d=[];for(let _=0;_<10;_++){let f=t.uniform(0,2*Math.PI),p=[Math.cos(f),0,Math.sin(f)],M=t.uniform(.2,.34),x=t.uniform(.12,.3);d.push({start:[p[0]*M,0,3+p[2]*M],vel:[p[0]*x+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*x+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of d)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:ta(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(Tu,a,d.length+m.length);m.forEach((_,f)=>to(g,d.length+f,_.p,_.s)),i.anim(_=>{d.forEach((f,p)=>{let M=Lc(_/f.per+f.ph),x=M*.9;to(g,p,[f.start[0]+f.vel[0]*x,f.start[1]+f.vel[1]*x,f.start[2]+f.vel[2]*x-.9*x*x],f.s*Math.min(1,M*10)*Math.min(1,(1-M)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(li(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let f=2*Math.PI*_/3;i.stat(li(.02,.12,.016,4,[Math.sin(f)*.4,-Math.cos(f)*.4,0]),o,[.045*Math.cos(f),.045*Math.sin(f),.36])}return{z:3,r:.145,glass:fe(.3,.75,1),hot:fe(.5,.95,1),mid:fe(.05,.4,1)}}function Cx(i){let{rng:t,m:e}=i,n=e.veins(fe(.03,.02,.06),fe(.85,.6,1),3,6,.09,.5),r=e.metal(fe(.62,.58,.72),.2),s=e.crystal(fe(.35,.15,1),3),o=e.emissive(fe(.65,.4,1),4),a=e.emissive(fe(.6,.3,1),3);i.stat(fn([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(Ei(.04,[0,0,0],.007,10,0),r,[0,0,_]);i.stat(fn([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(fn(ar(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),r);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,f)=>i.stat(Ei(f===0||f===4?.064:.058,[0,0,0],.011,10,0),r,[0,0,_]));let l=Ei(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let f=e.emissive(fe(.65,.4,1),4),p=f.emissiveIntensity;f.transparent=!0;let M=i.mesh(l,f);i.anim(x=>{let b=Lc(x/60+_/4);M.position.z=.95+1.45*b,M.scale.set(1+.3*b,1+.3*b,1);let L=Math.min(1,b*8)*Math.min(1,(1-b)*3);f.emissiveIntensity=p*L,f.opacity=L})}let h=(_,f,p)=>Df((Math.sin(_*.9+f)+Math.sin(_*.37+f*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let f=t.uniform(0,6.28),p=[.07*Math.cos(f),.07*Math.sin(f),c[_]],M=[.07*Math.cos(f+.9),.07*Math.sin(f+.9),c[_+1]],x=[(p[0]+M[0])/2,(p[1]+M[1])/2,(p[2]+M[2])/2],b=i.mesh(Eu(t,[p[0]-x[0],p[1]-x[1],p[2]-x[2]],[M[0]-x[0],M[1]-x[1],M[2]-x[2]],6,.012,.005),o,x),L=t.uniform(0,6.28);i.anim(C=>{b.scale.setScalar(Math.max(1e-4,h(C,L,.3)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=.066;i.stat(Eu(t,[p*Math.cos(f),p*Math.sin(f),.95],[p*Math.cos(f+.6),p*Math.sin(f+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let f=new T(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),M=i.mesh(Eu(t,[f.x*.16,f.y*.16,f.z*.16],[f.x*p,f.y*p,f.z*p],7,.03,.005),o,[0,0,3]),x=t.uniform(0,6.28);i.anim(b=>{M.rotation.set(Math.floor(b/5+x)*1.7,0,Math.floor(b/4+x)*2.4,"ZYX"),M.scale.setScalar(Math.max(1e-4,h(b,x,.5)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],M=[2.5,2.66,2.85,3.08,3.22];i.stat(fn(p.map((x,b)=>[x*Math.cos(f+.3*b),x*Math.sin(f+.3*b),M[b]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),r)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,f,p,M])=>{let x=i.mesh(Ei(_,f.map(b=>b*Math.PI/180),p,10),r,[0,0,3]);i.anim(b=>{x.rotation.z=b*M})}),i.stat(li(.58,.06,.03,4),r,[0,0,3.14]);let u=[new T(0,.6,.8),new T(.7,-.3,.65),new T(-.45,.5,.75)],d=[1,-2,3],m=Array.from({length:6},(_,f)=>{let p=u[f%3].clone().normalize(),M=Math.abs(p.z)<.9?new T(0,0,1):new T(1,0,0),x=p.clone().cross(M).normalize(),b=p.clone().cross(x);return{e1:x,e2:b,R:t.uniform(.32,.5),th0:Math.floor(f/3)*Math.PI+t.uniform(-.3,.3),w:d[f%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(li(.11,.11,.035,4),s,m.length);return i.anim(_=>{m.forEach((f,p)=>{let M=f.th0+_*f.w,x=f.R*(1+.12*Math.sin(_*.05236+f.ph));to(g,p,[x*(f.e1.x*Math.cos(M)+f.e2.x*Math.sin(M)),x*(f.e1.y*Math.cos(M)+f.e2.y*Math.sin(M)),3+x*(f.e1.z*Math.cos(M)+f.e2.z*Math.sin(M))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(li(.1,.3,.04,5),s,[0,0,.32]),{z:3,r:.15,glass:fe(.6,.3,1),hot:fe(.7,.5,1),mid:fe(.4,.1,1),style:"flicker"}}function Px(i){let{rng:t,m:e}=i,n=e.veins(fe(.02,.03,.05),fe(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let r=e.metal(fe(.8,.86,.95),.15),s=e.crystal(fe(.25,.65,1),4),o=e.emissive(fe(.7,.9,1),14),a=e.emissive(fe(.3,.7,1),9);i.stat(fn([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(li(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let M=i.mesh(Ei(.058+.006*p,[0,0,0],.006,12,.6),r,[0,0,.655+.42*p]);i.anim(x=>{M.rotation.z=x*(p%2===0?1:-1)*.05236})}let c=p=>{let M=Math.max(0,(p-.7)/.3);return .05+.26*jo(Math.sin(M*Math.PI/2),1.5)};for(let p=0;p<2;p++){let M=as(110);i.stat(fn(ar(c,.4,3.2,6,M,p*Math.PI),Array.from({length:M},(x,b)=>.0085+.004*Math.sin(b*.55+p)),{radial:5,per:3}),r)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,M,x,b])=>{let L=i.mesh(Ei(p,M.map(C=>C*Math.PI/180),x,10),r,[0,0,3]);i.anim(C=>{L.rotation.z=C*b})}),i.stat(li(.62,.05,.032,4),s,[0,0,3.17]);{let p=n.emissiveIntensity,M=a.emissiveIntensity,x=fe(.45,.82,1),b=0;i.anim((L,C)=>{b+=(i.charge()-b)*Math.min(1,C*5),n.emissiveIntensity=p*(1+5*b),a.emissiveIntensity=M*(1+2.5*b),r.emissive.copy(x).multiplyScalar(.85*b)})}let l=Of(t,ta(110),.35,.85);for(let p=0;p<ta(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,M)=>p.map(x=>({rel:x,s:M(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),d=h(Of(t,Math.max(ta(30),8),.4,.9),()=>t.uniform(.02,.045)),m=vu([li(1,1,.14,4),li(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(M,x)=>x)),p))),g=i.inst(Tu,o,u.length),_=i.inst(m,o,d.length),f=(p,M,x)=>{M.forEach((b,L)=>{let C=Lc(x/b.per+b.ph),A=(1-C)**1.6;to(p,L,[b.rel[0]*A,b.rel[1]*A,3+b.rel[2]*A],b.s*Math.min(1,C*8)*(1-C)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{f(g,u,p),f(_,d,p)}),i.stat(li(.08,.31,.05,6),s,[0,0,.33]);for(let p=0;p<3;p++){let M=2*Math.PI*p/3+.4,x=Math.cos(M),b=Math.sin(M);i.stat(fn([[.035*x,.035*b,.52],[.07*x,.07*b,.44],[.11*x,.11*b,.34],[.1*x,.1*b,.24]],[.02,.016,.011,.003],{radial:6}),r)}return{z:3,r:.17,glass:fe(.05,.25,1),hot:fe(.2,.5,1),mid:fe(0,.05,.4)}}var Bf={verdant:Sx,ember:Rx,tide:Ax,storm:Cx,void:Px},Ix={verdant:7,ember:8,tide:9,storm:10,void:11};function cr(i,t){let e=Ac(i),n=Bf[e.base??e.id]?e.base??e.id:"verdant",r=new Xt,s=new Xt;s.rotation.x=-Math.PI/2,s.scale.setScalar(Qo),s.position.y=Pr-3*Qo,r.add(s);let o=[],a=[],c=[],l=0,h=new Pc,u={B:s,batch:h,rng:Lf(Ix[n]),m:bx(o,a),stat:(A,k,O,y,v)=>h.add(A,k,O,y,v),mesh:(A,k,O)=>{let y=new At(A,k);return O&&y.position.set(...O),s.add(y),y},inst:(A,k,O)=>{let y=new Xs(A,k,O);return y.frustumCulled=!1,s.add(y),y},anim:A=>{c.push(A)},charge:()=>l},d=Bf[n](u);h.build(s);let m=new zt(e.gem),g=e.tint?new zt(e.tint):null,_=new Pe({color:g?d.glass.clone().lerp(m,.6):d.glass,emissive:m,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),f=new At(new Be(d.r*Qo,20,14),_);f.position.y=Pr+(d.z-3)*Qo,f.renderOrder=1,r.add(f);let p=u.m.core(g?d.hot.clone().lerp(m,.7):d.hot,g?d.mid.clone().lerp(m,.5):d.mid,6),M=new At(new Be(d.r*Qo*.6,14,10),p);f.add(M);let x=p.emissiveIntensity;if(c.push(A=>{if(d.style==="flicker"){let k=Math.abs(Math.sin(A*.9)*Math.sin(A*.37+1.1));M.scale.setScalar(1+.1*k),p.emissiveIntensity=x*(.55+.45*k)*1.6}else M.scale.setScalar(1+.05*Math.sin(A*.1309))}),o.splice(o.indexOf(p),1),g)for(let A of[...o,...a])A.color.lerp(g,.55),A.emissive.getHex()!==0&&A.emissive.lerp(g,.7);let b=new Zn(new Vn({map:t,color:m.getHex(),blending:an,depthWrite:!1,transparent:!0,opacity:.5}));b.scale.setScalar(.45),b.position.y=f.position.y,r.add(b);let L=Math.random()*20,C=(A,k)=>{l=k,L+=A*(1+k*1.5);let O=L*24;for(let y of c)y(O,A)};return C(0,0),{group:r,gem:f,gemMat:_,glow:b,color:m,materials:o,update(A,k,O){C(k,O)}}}var ce=i=>new zt(i),Ae=i=>1-Math.abs((i%1+1)%1*2-1),Ye=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),Ir=(i,t)=>Math.exp(-(i*i)/(t*t)),kf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function mn(i,t,e,n,r=!1){let s=[],o=[],a=(h,u)=>e(r?h%i/i:h/i,u/t),c=(h,u,d)=>{let m=(h[0]+u[0]+d[0])/3,g=(h[1]+u[1]+d[1])/3,_=n(r?m/i%1:m/i,g/t);for(let[f,p]of[h,u,d])s.push(...a(f,p)),o.push(_.r,_.g,_.b)};for(let h=0;h<t;h++)for(let u=0;u<i;u++)c([u,h],[u,h+1],[u+1,h+1]),c([u,h],[u+1,h+1],[u+1,h]);let l=new we;return l.setAttribute("position",new ae(s,3)),l.setAttribute("color",new ae(o,3)),l.computeVertexNormals(),l}function Hn(i,t,e,n=1,r=1,s=0,o=1){let a=i.length-1;return mn(t,a,(c,l)=>{let h=Math.min(a-1,Math.floor(l*a)),u=l*a-h,d=i[h][0]+(i[h+1][0]-i[h][0])*u,m=i[h][1]+(i[h+1][1]-i[h][1])*u,g=(s+c*(o-s))*Math.PI*2;return[Math.sin(g)*m*n,d,Math.cos(g)*m*r]},e,s===0&&o===1)}function $e(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new T(...i[Math.min(s-1,h+1)]).sub(new T(...i[Math.max(0,h-1)])).normalize()),a=new T(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new T(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return mn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}function Li(i,t,e=[0,0,0],n=[0,0,0]){let r=new ln(...i).toNonIndexed();r.rotateX(n[0]),r.rotateY(n[1]),r.rotateZ(n[2]),r.translate(...e);let s=r.attributes.position.count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=t.r,o[a*3+1]=t.g,o[a*3+2]=t.b;return r.setAttribute("color",new Oe(o,3)),r}function Sn(i,t){let e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=t.r,r[s*3+1]=t.g,r[s*3+2]=t.b;return e.setAttribute("color",new Oe(r,3)),e.computeVertexNormals(),e}function Dc(i){let t=new Be(1,28,22),e=t.attributes.position,n=t.attributes.uv;for(let r=0;r<e.count;r++){let s=e.getX(r),o=e.getY(r),a=e.getZ(r),c=Math.max(0,a),l=s*i.w,h=o*i.h,u=a*i.d;if(o<0){let d=-o;l*=1-i.jaw*d**1.25,u*=1-.12*d,h*=1+i.chin*d}l*=1+.04*Ir(o+.02,.22)*c,o>.2&&(l*=1-.08*(o-.2));for(let d of[-1,1])u-=.009*Ir(s-d*.38,.2)*Ir(o-.06,.13)*c;u+=i.brow*Ir(o-.27,.08)*Ir(s,.5)*c,u+=i.nose*Ir(s,.11)*c*kf(.2,-.2,o)*kf(-.4,-.27,o),u+=.004*Ir(s,.24)*Ir(o+.5,.07)*c,a<0&&(u*=1.06),e.setXYZ(r,l,h,u),a>.05?n.setXY(r,.5+s*.5,.5+o*.5):n.setXY(r,.02,.97)}return t.computeVertexNormals(),t}function Hc(i){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),r=(u,d)=>[(.5+u*.5)*512,(.5-d*.5)*512];n.fillStyle=i.skin,n.fillRect(0,0,512,512);let s=(u,d,m,g,_,f)=>{let[p,M]=r(u,d),x=m*512*.5;n.save(),n.translate(p,M),n.scale(1,g/m);let b=n.createRadialGradient(0,0,0,0,0,x);b.addColorStop(0,_.replace("A",String(f))),b.addColorStop(1,_.replace("A","0")),n.fillStyle=b,n.beginPath(),n.arc(0,0,x,0,Math.PI*2),n.fill(),n.restore()};for(let u of[-1,1])s(u*.62,-.18,.22,.3,i.shade,.35);s(0,-.72,.3,.12,i.shade,.3),s(.07,-.12,.05,.2,i.shade,.25);for(let u of[-1,1]){let d=u*.38,m=.06;s(d,m+.04,.26,.12,i.shade,.45);let[g,_]=r(d,m),f=i.eyeW*512*.5,p=i.eyeH*512*.5;if(n.save(),n.translate(g,_),n.scale(u,1),n.beginPath(),n.moveTo(-f,0),n.quadraticCurveTo(-f*.1,-p*1.1,f,-p*.15),n.quadraticCurveTo(f*.2,p*1.05,-f,0),n.closePath(),n.fillStyle=i.glowEyes?"#ffd23a":"#ece6ee",n.fill(),n.save(),n.clip(),n.fillStyle=i.iris,n.beginPath(),n.arc(-f*.1,p*.1,p*1.05,0,Math.PI*2),n.fill(),n.fillStyle="#120c14",n.beginPath(),i.glowEyes?n.ellipse(-f*.1,p*.1,p*.22,p*.8,0,0,Math.PI*2):n.arc(-f*.1,p*.1,p*.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.8)",n.beginPath(),n.arc(-f*.26,-p*.25,p*.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(40,25,35,.6)",n.fillRect(-f,-p*1.3,f*2,p*(.3+i.lid)),n.restore(),n.strokeStyle="#1c1418",n.lineCap="round",n.lineWidth=512*.009,n.beginPath(),n.moveTo(-f*1.02,.02*p),n.quadraticCurveTo(-f*.1,-p*(1.15-i.lid*.6),f*1.08,-p*.3),n.stroke(),n.strokeStyle="rgba(80,55,60,.5)",n.lineWidth=512*.004,n.beginPath(),n.moveTo(-f*.7,p*.55),n.quadraticCurveTo(0,p*1,f*.8,p*.25),n.stroke(),i.wrinkles){n.strokeStyle="rgba(120,90,90,.45)",n.lineWidth=512*.004;for(let M of[-1,0,1])n.beginPath(),n.moveTo(f*1.15,M*p*.4),n.lineTo(f*1.5,M*p*.8-p*.1),n.stroke();n.beginPath(),n.moveTo(-f*.6,p*1.4),n.quadraticCurveTo(0,p*2,f*.7,p*1.2),n.stroke()}n.strokeStyle=i.brow,n.lineWidth=i.browW,n.beginPath(),n.moveTo(-f*1,-p*(2.3-i.browTilt)),n.quadraticCurveTo(f*.15,-p*3.2,f*1.15,-p*(2.6+i.browTilt)),n.stroke(),n.restore()}if(i.wrinkles){n.strokeStyle="rgba(120,90,90,.4)",n.lineWidth=512*.004;for(let u of[.42,.5]){let[d,m]=r(-.25,u),[g,_]=r(.25,u);n.beginPath(),n.moveTo(d,m),n.quadraticCurveTo((d+g)/2,m-6,g,_),n.stroke()}}n.fillStyle="rgba(80,50,55,.5)";for(let u of[-1,1]){let[d,m]=r(u*.06,-.32);n.beginPath(),n.ellipse(d,m,512*.012,512*.006,0,0,Math.PI*2),n.fill()}let[o,a]=r(0,-.52),c=i.lipW*512*.5,l=.05*512*.5;if(i.snarl){n.fillStyle="#2a1416",n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.fill(),n.fillStyle="#e8e0c8",n.fillRect(o-c*.85,a-l*.9,c*1.7,l*.8),n.fillRect(o-c*.7,a+l*.25,c*1.4,l*.6),n.strokeStyle="#2a1416",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(o+u*c*.24,a-l),n.lineTo(o+u*c*.24,a+l),n.stroke();n.strokeStyle=i.lips,n.lineWidth=512*.008,n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.stroke()}else n.fillStyle=i.lips,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a-l*.9,o+c,a),n.quadraticCurveTo(o,a+l*1.2,o-c,a),n.fill(),n.strokeStyle="rgba(40,20,25,.7)",n.lineWidth=512*.005,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a+l*.3,o+c,a),n.stroke();let h=new In(e);return h.colorSpace=on,h.anisotropy=4,h}function eo(){let i=[];return{materials:i,mat:(e,n={})=>{let r=new Pe({color:n.vc?16777215:e,vertexColors:!!n.vc,metalness:n.metal??.04,roughness:n.rough??.8,flatShading:n.flat??!0,emissive:n.emissive??(n.vc?1315100:0),transparent:!0,side:n.double?Fe:zn});return i.push({mat:r,color:r.color.clone(),emissive:r.emissive.clone()}),r}}}var Bt=(i,t,e,n=[0,0,0])=>{let r=new At(i,t);return r.position.set(...n),e.add(r),r},hi=.3,Su=.58,Lx=1.3,Lr=1.3;function Di(i,t,e,n){let r=new Xt;r.position.set(t,e,0),i.add(r);let s=new Xt;s.position.set(-t,-e,0),r.add(s);let o=new Xt;o.position.set(0,n-e,0),r.add(o);let a=new Xt;return a.position.set(-t,-n,0),o.add(a),{hip:r,knee:o,thigh:s,shin:a}}function Dr(i,t,e,n,r,s){let o=new Xt;o.position.set(...t),o.rotation.z=-.68,i.add(o);let a=new Xt;a.rotation.x=.3,o.add(a);let c=cr(r,n);c.group.position.set(0,.24,.02),c.group.scale.setScalar(Su),a.add(c.group),s&&(s.position.set(0,0,.02),s.scale.multiplyScalar(Lx),a.add(s));for(let l of c.materials)e.push({mat:l,color:l.color.clone(),emissive:l.emissive.clone()});return{staffPivot:o,staff:c,crystal:c.gem,crystalMat:c.gemMat,glow:c.glow}}function zf(i,t,e){let n=new es;for(let r=0;r<8;r++){let s=Math.PI/2+r*Math.PI/4,o=r%2?t:i;r?n.lineTo(Math.cos(s)*o,Math.sin(s)*o):n.moveTo(Math.cos(s)*o,Math.sin(s)*o)}return n.closePath(),new Ys(n,{depth:e,bevelEnabled:!0,bevelThickness:e*.3,bevelSize:i*.06,bevelSegments:1}).center()}var Vf=(i,t,e)=>{let n=Ae(i*e);return Math.abs(n-t)<.2||Math.abs(n-(1-t))<.2};function ui(i,t,e,n=i,r=1){let s=new Xt,o=(a,c,l,h=[0,0,0],u=[1,1,1])=>{let d=Bt(Sn(a,c),t,s,l);return d.rotation.set(...h),d.scale.set(...u),d};if(e){o(new ln(.03,.085,.07),i,[.04,0,-.005]);for(let a=0;a<4;a++){let c=.03-a*.02,l=.028-a*.001,h=new Ln(l,.011,4,7,Math.PI*1.25);h.rotateX(Math.PI/2),o(h,n,[.012,c,0],[0,-.35,0])}o(new Ar(.011,.04,2,5),i,[.02,.048,.03],[.2,0,1.2])}else{o(new ln(.06,.07,.028),i,[0,-.035,0]);for(let a=0;a<4;a++)o(new ln(.013,.05-Math.abs(a-1.5)*.007,.016),n,[-.022+a*.0145,-.092+Math.abs(a-1.5)*.003,.006],[.25,0,0]);o(new ln(.014,.04,.016),n,[.034,-.045,.012],[.2,0,-.5])}return s.scale.setScalar(r),s}var Hr={goblin:16726564,witch:12086271,wizard:4827391,knight:16724016};function Ur(i,t,e,n){let r=new Xt;r.name="eyes",r.visible=!1;let s=new cn({color:new zt(e).lerp(new zt(16777215),.3),transparent:!0,depthWrite:!1}),o=new Vn({map:n,color:e,transparent:!0,opacity:.8,depthWrite:!1});for(let a of t){let c=new At(new Be(.011,8,6),s);c.position.set(...a),c.scale.set(1.6,.75,.5),r.add(c);let l=new Zn(o);l.position.set(a[0],a[1],a[2]+.012),l.scale.setScalar(.06),r.add(l)}return i.add(r),r}var Ke={robe:ce(3433416),robeDeep:ce(2575516),cream:ce(15853519),creamDeep:ce(14273968),gold:ce(14989388),goldDeep:ce(11568688),skin:ce(15916495),hair:ce(16052974),hairShade:ce(13618374),leather:ce(7686442),leatherDeep:ce(5583641),boot:ce(2903964)},cs={w:.088,h:.122,d:.106,jaw:.42,chin:.06,nose:.022,brow:.008};function Gf(i,t,e){let{materials:n,mat:r}=eo(),s=r(16777215,{vc:!0,double:!0}),o=r(Ke.skin,{rough:.7}),a=r(Ke.gold,{metal:.3,rough:.35,emissive:2760200}),c=i==="ally",l=c?ce(3117168):Ke.robe,h=c?ce(2255442):Ke.robeDeep,u=($,lt,I,Q)=>Vf($,lt,I)?Ke.gold:Q,d=new Xt,m=new Xt;d.add(m);let g=[];for(let $ of[-1,1]){let lt=Di(m,$*.09,.95,.5);g.push(lt),Bt(Sn(new Be(.06,7,5),Ke.boot),s,lt.shin,[$*.09,.05,.08]).scale.set(.9,.75,1.6)}Bt(Hn([[1.46,.1],[1.4,.165],[1.24,.18],[1.04,.165],[.7,.21],[.36,.255],[.3,.26],[.24,.266],[.18,.272],[.12,.278],[.04,.29]],36,($,lt)=>{let I=$<.06||$>.94,Q=Math.floor(lt*10);return Q===9?Ke.cream:Q>=6?u($,(Q-5.5)/3,12,I?Ke.creamDeep:h):I?Ye(Ke.cream,Ke.creamDeep,.3*lt):Ye(l,h,.3*Ae($*12)*lt)},1.1,.8),s,m);let _=mn(48,30,($,lt)=>{let I=.55+.35*lt**1.3,Q=I+$*(Math.PI*2-2*I),B=.13,j,ct,Y;if(lt<B){let R=lt/B;j=1.58-.15*R**.8,ct=.1+.15*R**.7,Y=.74}else{let R=(lt-B)/(1-B);j=1.43-R*1.3,ct=.25+.14*R**1.2,Y=.74+.16*R}return ct*=1+.05*Math.sin(Q*7)*Math.max(0,lt-B),[Math.sin(Q)*ct*1.1,j,Math.cos(Q)*ct*Y-.03*lt]},($,lt)=>$<.03||$>.97||lt>.95?Ke.cream:lt>.8?u($,(lt-.8)/.15,16,h):Ye(l,h,.25+.3*Ae($*9)));Bt(_,s,m),Bt(mn(6,4,($,lt)=>[($-.5)*(.26-.2*lt),1.56-lt*.3,-.15-.04*Math.cos(($-.5)*3)-.03*lt],($,lt)=>lt>.85?Ke.cream:Ye(h,l,.3*Ae($*2))),s,m),Bt(new Te(.035,.035,.014,10).rotateX(Math.PI/2),a,m,[0,1.47,.135]),Bt(new Ln(.035,.007,4,10),a,m,[0,1.47,.142]);for(let $ of[-1,1])Bt(new Te(.012,.012,.06,5).rotateZ(Math.PI/2),a,m,[$*.065,1.48,.125]);Bt(Hn([[1.08,.172],[1.02,.17]],16,()=>Ke.leather,1.1,.82),s,m),Bt(new Yo(.04,0),a,m,[0,1.05,.145]).scale.set(.9,1.1,.35),Bt(Sn(new Yo(.02,0),Ke.leatherDeep),s,m,[0,1.05,.158]).scale.set(.9,1.1,.3),Bt(mn(1,6,($,lt)=>[.03+($-.5)*.045+.02*Math.sin(lt*3),1.03-lt*.48,.15+.035*lt+.012*Math.sin(lt*6)],($,lt)=>lt>.9?Ke.gold:Ye(Ke.leather,Ke.leatherDeep,.3*lt)),s,m),Bt(new Te(.043,.052,.12,7),o,m,[0,1.53,0]);let p=new Xt;p.position.set(0,1.66,0),m.add(p);let M=r(16777215,{rough:.7,flat:!1});M.map=Hc({skin:"#f2ddcf",shade:"rgba(160,120,115,A)",iris:"#5d7590",eyeW:.2,eyeH:.07,lid:.55,brow:"#f0eee8",browW:15,browTilt:.2,lips:"#b77a72",lipW:.2,wrinkles:!0}),Bt(Dc(cs),M,p);let x=($,lt)=>Ye(Ke.hair,Ke.hairShade,.2+.5*Ae($*9)*(.3+.7*lt));Bt(mn(18,3,($,lt)=>{let I=-Math.PI+$*Math.PI*2,Q=Math.abs(I),B=Q<1?.62-.3*(Q/1):.32-.6*((Q-1)/(Math.PI-1)),j=Math.PI/2-lt*(Math.PI/2-B),ct=1.09;return[Math.sin(I)*Math.cos(j)*cs.w*ct,Math.sin(j)*cs.h*ct,Math.cos(I)*Math.cos(j)*cs.d*ct]},x,!0),s,p),Bt(mn(18,10,($,lt)=>{let I=Math.PI*.4+$*Math.PI*1.2,Q=.08-lt*(.72+.1*Ae($*6+.3)),B=lt<.25?.12+lt*.26:.185+.04*Math.sin(lt*3.1),j=.02*Math.sin(lt*14+I*3)*lt;return[Math.sin(I)*(B+j)*1.05,Q,Math.cos(I)*(B+j)*.8-.02-.05*lt]},x),s,p);for(let $ of[-1,1]){let lt=Array.from({length:8},(I,Q)=>{let B=Q/7;return[$*(.095+.05*B+.02*Math.sin(B*9)),.02-B*.5,0+.05*B-.025*Math.sin(B*7)]});Bt($e(lt,I=>.03*(1-.6*I)+.008,5,(I,Q)=>x(Q,I),[1,1,.6]),s,p)}Bt(mn(10,12,($,lt)=>{let I=$-.5,B=-.02-.06*(1-Math.abs(I)*2)**2-lt*(.56+.06*Ae($*3+.5)),j=(.09+.02*Math.sin(Math.PI*Math.min(1,lt*1.6)))*(1-.75*lt**1.6),ct=I*2*j+.008*Math.sin(lt*12+$*4),Y=.065+.04*Math.cos(I*Math.PI)+.085*lt**.8-(lt<.08?.03*Math.abs(I)*2:0);return[ct,B,Y]},($,lt)=>Ye(Ke.hair,Ke.hairShade,.15+.45*Ae($*5)*lt)),s,p);for(let $ of[-1,1])Bt($e([[$*.004,-.045,.108],[$*.035,-.055,.106],[$*.06,-.075,.095],[$*.07,-.11,.088]],lt=>.014*(1-.6*lt)+.004,5,()=>Ke.hair),s,p);let b=new Xt;b.position.set(0,.075,-.005),b.rotation.set(-.08,0,-.05),p.add(b),Bt(mn(20,3,($,lt)=>{let I=$*Math.PI*2,Q=.13+lt*.17;return[Math.sin(I)*Q,.02-.04*lt*lt,Math.cos(I)*Q]},($,lt)=>Ye(l,h,lt>.85?.4:.2*Ae($*5)),!0),s,b),Bt($e([[0,.01,0],[0,.2,-.01],[0,.38,-.04],[-.02,.52,-.09],[-.07,.6,-.16],[-.13,.6,-.21],[-.18,.55,-.23]],$=>.15*(1-$)**1.3+.004,8,($,lt)=>Ye(l,h,.25*Ae(lt*4)+.2*$)),s,b),Bt(mn(16,1,($,lt)=>{let I=$*Math.PI*2,Q=.153-.005*lt;return[Math.sin(I)*Q,.025+lt*.05,Math.cos(I)*Q]},$=>Ae($*16)>.5?Ke.gold:Ke.goldDeep,!0),s,b),Bt(zf(.055,.018,.01),a,b,[0,.08,.15]).rotation.x=-.1;let C=($,lt,I)=>mn(14,8,(Q,B)=>{let j=Q*Math.PI*2,ct=.06+I*Math.max(0,(B-.25)/.75)**1.3;return[Math.cos(j)*ct,-(B*$),Math.sin(j)*ct*.9+lt*B*B]},(Q,B)=>B>.88?Ke.cream:B>.72?u(Q,(B-.72)/.16,5,h):Ye(l,h,.3*Ae(Q*3)),!0),A=new Xt;A.position.set(-.22,1.42,0),A.rotation.set(-.42,0,-.2),m.add(A),Bt(C(.58,.05,.13),s,A);let k=ui(Ke.skin,s,!1);k.position.set(0,-.56,.04),k.scale.multiplyScalar(Lr),A.add(k);let O=new Xt;O.position.set(.22,1.42,.02),O.rotation.z=hi,m.add(O),Bt(C(.4,0,.065),s,O).rotation.x=-.5,Bt(new Te(.03,.033,.12,6),o,O,[0,-.38,.19]).rotation.x=-.5;let{staffPivot:y,staff:v,crystal:q,crystalMat:V,glow:J}=Dr(O,[0,-.43,.24],n,t,e,ui(Ke.skin,s,!0)),mt=Ur(p,[-1,1].map($=>[$*.38*cs.w,.06*cs.h,.9*cs.d]),Hr.wizard,t);return{root:d,body:m,head:p,arm:O,staffPivot:y,crystal:q,crystalMat:V,glow:J,staff:v,height:2,materials:n,eyes:mt,leftArm:A,legs:g}}var pe={plate:ce(14077887),plateHi:ce(15262420),plateLo:ce(11117201),plateDark:ce(8156776),white:ce(15789282),whiteLo:ce(14209732),under:ce(4862242),leather:ce(7226406),leatherLo:ce(5189401),sash:ce(7301690),sashLo:ce(5722928),slit:ce(1380879),steel:ce(13225168),grip:ce(4860952),brass:ce(12819016)};function Wf(i,t,e){let{materials:n,mat:r}=eo(),s=r(16777215,{vc:!0,double:!0}),o=r(16777215,{vc:!0,metal:.25,rough:.42,double:!0}),a=i==="ally"?ce(3119724):ce(12726316),c=i==="ally"?ce(2257999):ce(9314077),l=(O,y,v=6)=>Ye(pe.plate,Ae(O*v)>.5?pe.plateHi:pe.plateLo,.35+.15*y),h=new Xt,u=new Xt;h.add(u);let d=[];for(let O of[-1,1]){let y=O*.105,v=Di(u,y,.9,.53);d.push(v),Bt(mn(8,4,(q,V)=>{let J=q*Math.PI*2,mt=-.07+V*.25,$=.06-V*.035,lt=.058*(1-.7*V**1.6);return[y+Math.cos(J)*lt,Math.max(.005,$+Math.sin(J)*lt*.75),mt]},(q,V)=>Math.floor(V*4)%2?pe.plateLo:pe.plate,!0),o,v.shin),Bt($e([[y,.08,-.01],[y,.22,0],[y,.36,0],[y,.5,.005]],q=>.058+.016*Math.sin(q*2.6),8,(q,V)=>l(V,q)),o,v.shin),Bt(Sn(new Be(.065,8,6),pe.plateHi),o,v.shin,[y,.53,.025]).scale.set(1,.9,.85),Bt(Sn(new Gn(.05,.03,6).rotateZ(-O*Math.PI/2),pe.plateLo),o,v.shin,[y+O*.06,.53,.02]),Bt($e([[y,.56,0],[y*1.02,.72,0],[y*.98,.9,-.005]],q=>.068+.022*q,8,(q,V)=>l(V,q)),o,v.thigh)}Bt(Hn([[1,.19],[.8,.22],[.6,.25],[.5,.26]],16,O=>Ye(pe.under,pe.leatherLo,.4*Ae(O*8)),1.1,.85),s,u);for(let O of[!1,!0])Bt(mn(8,10,(y,v)=>{let q=(O?Math.PI:0)+(y-.5)*2.2,V=1.36-v*.76-.02*Ae(y*4)*v,J=(v<.45?.2+.03*Math.sin(v*7):.2+.12*(v-.45))+.012;return[Math.sin(q)*J*1.12,V,Math.cos(q)*J*.86]},(y,v)=>v>.82&&v<.87||v>.91&&v<.96?a:Ye(pe.white,pe.whiteLo,.35*Ae(y*4)*v)),s,u);Bt(Hn([[1.58,.11],[1.53,.2],[1.42,.245],[1.28,.23],[1.14,.2],[1.02,.205]],16,(O,y)=>O<.04||O>.96?pe.plateHi:l(O,y,8),1.12,.84),o,u);for(let O=0;O<3;O++)Bt(Hn([[1.02-O*.045,.205+O*.008],[.975-O*.045,.215+O*.008]],14,y=>O%2?pe.plateLo:pe.plate,1.12,.86),o,u);Bt(Hn([[1.66,.06],[1.62,.075],[1.57,.12]],12,(O,y)=>l(O,y)),o,u),Bt($e(Array.from({length:15},(O,y)=>{let v=y/14*Math.PI*2;return[Math.sin(v)*.235,1.07+.03*Math.cos(v+.6),Math.cos(v)*.19]}),()=>.03,6,(O,y)=>Ye(pe.sash,pe.sashLo,Ae(y*3+O*5)*.6),[1,1.4,1]),s,u);for(let O of[0,1])Bt($e([[-.2,1.06,.1],[-.22-O*.02,.95,.12],[-.21-O*.04,.82-O*.04,.12]],y=>.025*(1-.3*y),5,y=>Ye(pe.sash,pe.sashLo,y),[1.4,1,.5]),s,u);for(let O of[-1,1]){let y=Array.from({length:9},(v,q)=>{let V=q/8,J=-.9+V*4.6,mt=1.52-.48*V;return[O*Math.sin(J)*.285,mt+.06*Math.sin(V*Math.PI),Math.cos(J)*.222]});Bt($e(y,()=>.016,4,v=>Ye(pe.leather,pe.leatherLo,.4*Ae(v*4)),[1,1.5,1]),s,u)}Bt(Li([.06,.06,.02],pe.brass,[0,1.46,.235],[0,0,Math.PI/4]),s,u);let m=new Xt;m.position.set(0,1.18,-.24),m.rotation.z=.55,u.add(m),Bt(Li([.055,.82,.012],pe.steel,[0,-.12,0]),o,m),Bt(Sn(new Gn(.039,.07,4).rotateX(Math.PI).rotateY(Math.PI/4),pe.steel),o,m,[0,-.565,0]).scale.set(1,1,.22),Bt(Li([.24,.03,.035],pe.brass,[0,.3,0]),s,m),Bt(Sn(new Te(.018,.018,.16,6),pe.grip),s,m,[0,.39,0]),Bt(Sn(new Be(.03,6,4),pe.brass),s,m,[0,.48,0]),Bt(Hn([[.32,.02],[-.5,.05],[-.6,.03]],6,()=>pe.leatherLo,1,.5),s,m);let g=new Xt;g.position.set(0,1.73,0),u.add(g),Bt(Hn([[.13,0],[.125,.06],[.105,.105],[.045,.122],[.025,.124],[.005,.125],[-.06,.125],[-.125,.12],[-.135,.11]],14,(O,y)=>Math.floor(y*8)===4&&(O<.2||O>.8)?pe.slit:O<.025||O>.975?pe.plateHi:l(O,y,6),1,1.06),o,g);for(let O=0;O<4;O++)Bt(Li([.012,.012,.01],pe.slit,[.035+O%2*.025,-.05-Math.floor(O/2)*.03,.128],[0,.3,0]),s,g);for(let O of[-1,1])Bt(Sn(new Te(.014,.014,.01,8).rotateZ(Math.PI/2),pe.brass),s,g,[O*.128,-.01,0]);Bt(Li([.03,.025,.05],pe.brass,[0,.13,-.01]),s,g);for(let O=0;O<7;O++){let y=(O-3)/3,v=.42-Math.abs(y)*.08,q=Array.from({length:7},(V,J)=>{let mt=J/6,$=mt*2.2;return[y*.03*(1+mt),.14+Math.sin($)*.14*v/.42,-.01-(1-Math.cos($))*v*.45+.06*mt]});Bt($e(q,V=>.026*(1-V)**.7+.004,5,(V,J)=>Ye(a,c,.3*Ae(J*2)+.4*V)),s,g)}let _=(O,y)=>{Bt($e([[0,-.02,0],[0,-.14,0],[0,-.26,y*.3]],v=>.056-.006*v,7,(v,q)=>l(q,v)),o,O),Bt(Sn(new Be(.05,7,5),pe.plateHi),o,O,[0,-.27,y*.3-.01])};for(let O of[-1,1]){let y=new Xt;y.position.set(O*.27,1.5,0),y.rotation.z=-O*.5,u.add(y),Bt(Hn([[.075,0],[.06,.07],[.02,.12],[-.03,.135],[-.07,.13]],10,(v,q)=>q>.85?pe.plateLo:l(v,q,5),1,1),o,y),Bt(Hn([[-.06,.13],[-.1,.12]],10,()=>pe.plateLo),o,y),Bt(Sn(new Te(.035,.04,.02,10).rotateZ(-O*Math.PI/2),pe.plateHi),o,y,[O*.125,-.03,0]),Bt(Sn(new Be(.014,6,4),pe.brass),s,y,[O*.137,-.03,0])}let f=new Xt;f.position.set(-.26,1.44,0),f.rotation.set(-.3,0,-.08),u.add(f),_(f,.1),Bt($e([[0,-.28,.02],[0,-.42,.05],[0,-.52,.06]],O=>.048+.008*O,7,(O,y)=>l(y,O)),o,f);let p=ui(pe.plateHi,o,!1,pe.plateLo,1.15);p.position.set(0,-.53,.06),p.scale.multiplyScalar(Lr),f.add(p);let M=new Xt;M.position.set(.26,1.44,.02),M.rotation.z=hi,u.add(M),Bt($e([[0,-.02,0],[0,-.12,0],[0,-.22,.04]],O=>.056-.006*O,7,(O,y)=>l(y,O)),o,M),Bt(Sn(new Be(.05,7,5),pe.plateHi),o,M,[0,-.24,.05]),Bt($e([[0,-.25,.07],[0,-.33,.15],[0,-.39,.21]],O=>.045+.01*O,7,(O,y)=>l(y,O)),o,M);let{staffPivot:x,staff:b,crystal:L,crystalMat:C,glow:A}=Dr(M,[0,-.43,.25],n,t,e,ui(pe.plateHi,o,!0,pe.plateLo,1.15)),k=Ur(g,[[-.035,.016,.128],[.035,.016,.128]],Hr.knight,t);return{root:h,body:u,head:g,arm:M,staffPivot:x,crystal:L,crystalMat:C,glow:A,staff:b,height:2,materials:n,eyes:k,leftArm:f,legs:d}}var Le={skin:ce(8688447),skinLo:ce(6714670),skinHi:ce(10136146),hair:ce(2892832),hairHi:ce(4536623),red:ce(11744555),redLo:ce(8528668),leather:ce(8015404),leatherLo:ce(5583897),wrap:ce(11045474),wrapLo:ce(8217925),shorts:ce(3814191),shortsLo:ce(2695967),brass:ce(12161605),nail:ce(3947042),ear:ce(10709594)},Hi={w:.096,h:.112,d:.106,jaw:.22,chin:.02,nose:.036,brow:.016};function Xf(i,t,e){let{materials:n,mat:r}=eo(),s=r(16777215,{vc:!0,double:!0}),o=r(Le.skin,{rough:.75}),a=i==="ally"?ce(2920330):Le.red,c=i==="ally"?ce(2058598):Le.redLo,l=(y,v,q=5)=>Ye(Le.skin,Ae(y*q)>.5?Le.skinHi:Le.skinLo,.35+.1*v),h=new Xt,u=new Xt;h.add(u);let d=[];for(let y of[-1,1]){let v=y*.095,q=Di(u,v,.82,.44);d.push(q),Bt(mn(7,4,(V,J)=>{let mt=V*Math.PI*2,$=-.06+J*.23,lt=.05*(1-.35*J)*(J>.75?1-(J-.75)*1.6:1);return[v+y*.012*J+Math.cos(mt)*lt,Math.max(.004,.035+Math.sin(mt)*lt*.55-.01*J),$]},(V,J)=>l(V,J),!0),s,q.shin);for(let V=0;V<3;V++)Bt(Sn(new Be(.016,5,4),Le.skinLo),s,q.shin,[v+y*.012+(V-1)*.022,.016,.165-Math.abs(V-1)*.01]);Bt($e([[v,.05,-.01],[v,.3,-.005],[v*1.03,.47,.01]],V=>.04+.014*V+.008*Math.sin(V*5),7,(V,J)=>l(J,V)),s,q.shin),Bt($e([[v*1.03,.41,.01],[v*1.05,.65,0],[v,.82,-.005]],V=>.054+.008*V+.006*Math.sin(V*4),7,(V,J)=>l(J,V)),s,q.thigh),Bt($e([[v,.08,-.01],[v,.2,-.008],[v,.32,-.004],[v*1.02,.44,.005]],V=>.048+.008*V,7,(V,J)=>Ae(V*6+J*.5)>.5?Le.wrap:Le.wrapLo),s,q.shin)}Bt(Hn([[.96,.17],[.86,.19],[.74,.21],[.66,.2]],14,(y,v)=>Ye(Le.shorts,Le.shortsLo,.5*Ae(y*6)*v),1.08,.82),s,u),Bt(Hn([[1,.175],[.94,.178]],14,y=>Ae(y*7)>.85?Le.leatherLo:Le.leather,1.08,.84),s,u),Bt(Li([.06,.05,.02],Le.brass,[0,.97,.15]),s,u),Bt(Li([.035,.028,.024],Le.leatherLo,[0,.97,.152]),s,u);for(let y of[!1,!0])Bt(mn(6,6,(v,q)=>{let V=(y?Math.PI:0)+(v-.5)*.9,J=.19+.06*q,mt=.42+.1*Ae(v*3.5+.2)+.04*Math.sin(v*17);return[Math.sin(V)*J*1.08,.96-q*mt,Math.cos(V)*J*.86+(y?-.01:.01)]},(v,q)=>Ye(a,c,.25+.35*Ae(v*3)*q)),s,u);Bt(Hn([[1.36,.075],[1.32,.155],[1.24,.18],[1.13,.155],[1.02,.14],[.94,.152]],14,(y,v)=>Math.min(y,1-y)<.12&&v>.4?Ae(v*6)>.5?Le.skinHi:Le.skinLo:l(y,v,7),1.1,.74),s,u);for(let y of[-1,1]){let v=Array.from({length:9},(q,V)=>{let J=V/8,mt=-.9+J*4.4;return[y*Math.sin(mt)*.212,1.33-.36*J+.04*Math.sin(J*Math.PI),Math.cos(mt)*.145]});Bt($e(v,()=>.014,4,q=>Ye(Le.leather,Le.leatherLo,.4*Ae(q*4)),[1,2,1]),s,u)}Bt(Li([.05,.05,.02],Le.brass,[0,1.27,.15],[0,0,Math.PI/4]),s,u);let m=new Xt;m.position.set(-.2,1.31,0),m.rotation.z=.55,m.scale.setScalar(.8),u.add(m),Bt(Hn([[.06,0],[.045,.06],[0,.1],[-.05,.11],[-.08,.1]],9,(y,v)=>v>.8||Ae(y*9)>.8?Le.leatherLo:Le.leather,1,1.1),s,m),Bt($e(Array.from({length:11},(y,v)=>{let q=v/10*Math.PI*2;return[Math.sin(q)*.088,1.375+.02*Math.cos(q),Math.cos(q)*.08]}),()=>.03,7,(y,v)=>Ye(a,c,.5*Ae(v*2+y*6))),s,u),Bt(mn(8,5,(y,v)=>{let q=Math.PI+(y-.5)*(2.4-1.2*v),V=.13-.02*v;return[Math.sin(q)*V*1.1,1.42-v*.2+.03*Math.cos((y-.5)*6),Math.cos(q)*V-.04*v]},(y,v)=>Ye(a,c,.2+.4*Ae(y*3)*(1-v))),s,u);for(let y of[0,1])Bt($e([[-.04+y*.05,1.36,-.1],[-.07+y*.03,1.22,-.15],[-.09+y*.05,1.08,-.16]],v=>.035*(1-.3*v),5,v=>Ye(a,c,v),[1.4,1,.45]),s,u);Bt(new Te(.04,.05,.1,7),o,u,[0,1.4,0]);let g=new Xt;g.position.set(0,1.51,.01),u.add(g);let _=r(16777215,{rough:.75,flat:!1});_.map=Hc({skin:"#84933f",shade:"rgba(60,72,24,A)",iris:"#d2401c",eyeW:.2,eyeH:.075,lid:.2,brow:"#2a221c",browW:22,browTilt:1,lips:"#4e3a22",lipW:.34,snarl:!0,glowEyes:!0}),Bt(Dc(Hi),_,g);for(let y of[-1,1]){let v=[[y*.075,0,-.01],[y*.14,.03,-.03],[y*.21,.07,-.05],[y*.27,.105,-.07]];Bt($e(v,q=>.035*(1-q)**.9+.002,6,(q,V)=>l(V,q,3),[1,1,.35]),s,g),Bt($e(v.map(([q,V,J])=>[q*.98,V,J+.008]).slice(0,3),q=>.02*(1-q)+.002,5,()=>Le.ear,[1,1,.3]),s,g)}Bt(mn(16,3,(y,v)=>{let q=-Math.PI+y*Math.PI*2,V=Math.abs(q),J=V<.9?.55:.55-.65*((V-.9)/(Math.PI-.9)),mt=Math.PI/2-v*(Math.PI/2-J),$=1.08+.03*Ae(y*8);return[Math.sin(q)*Math.cos(mt)*Hi.w*$,Math.sin(mt)*Hi.h*$,Math.cos(q)*Math.cos(mt)*Hi.d*$]},(y,v)=>Ye(Le.hair,Le.hairHi,.4*Ae(y*8+v)),!0),s,g);for(let y=0;y<13;y++){let v=-Math.PI+y/13*Math.PI*2+.2*Math.sin(y*7.3),q=.55+.5*(y*.37%1),V=new T(Math.sin(v)*Math.cos(q),Math.sin(q),Math.cos(v)*Math.cos(q)),J=new T(V.x*Hi.w,V.y*Hi.h,V.z*Hi.d);Bt(Sn(new Gn(.022,.07+.03*(y*.61%1),4),y%3?Le.hair:Le.hairHi),s,g,[J.x,J.y,J.z]).quaternion.setFromUnitVectors(new T(0,1,0),V.add(new T(0,0,-.5)).normalize())}let f=(y,v,q)=>Bt($e([v,[(v[0]+q[0])/2,(v[1]+q[1])/2,(v[2]+q[2])/2],q],V=>.042-.006*V,7,(V,J)=>Ae(V*4+J*.4)>.5?Le.leather:Le.leatherLo),s,y),p=new Xt;p.position.set(-.2,1.3,0),p.rotation.set(-.35,0,-.15),u.add(p),Bt($e([[0,0,0],[0,-.14,0],[0,-.26,.02],[0,-.4,.05],[0,-.5,.06]],y=>.042-.012*y+.006*Math.sin(y*6),7,(y,v)=>l(v,y)),s,p),f(p,[0,-.32,.04],[0,-.48,.06]);let M=ui(Le.leather,s,!1,Le.skin,1.05);M.position.set(0,-.5,.065),M.scale.multiplyScalar(Lr),p.add(M);let x=new Xt;x.position.set(.2,1.3,.02),x.rotation.z=hi,u.add(x),Bt($e([[0,0,0],[0,-.12,0],[0,-.22,.04],[0,-.3,.12],[0,-.38,.2]],y=>.042-.012*y,7,(y,v)=>l(v,y)),s,x),f(x,[0,-.28,.1],[0,-.38,.19]);let{staffPivot:b,staff:L,crystal:C,crystalMat:A,glow:k}=Dr(x,[0,-.42,.23],n,t,e,ui(Le.leather,s,!0,Le.skin,1.05)),O=Ur(g,[-1,1].map(y=>[y*.38*Hi.w,.06*Hi.h,.9*Hi.d]),Hr.goblin,t);return{root:h,body:u,head:g,arm:x,staffPivot:b,crystal:C,crystalMat:A,glow:k,staff:L,height:1.75,materials:n,eyes:O,leftArm:p,legs:d}}var bn=i=>new zt(i),nn={robe:bn(8017597),robeDeep:bn(6045590),trim:bn(11242982),dress:bn(3484996),dressHi:bn(4931936),lining:bn(6969968),skin:bn(15654104),hair:bn(13615844),hairDark:bn(10194102),hat:bn(7097004),hatBand:bn(10256598),boot:bn(3880006),belt:bn(4207692),moon:bn(15787712),lips:bn(5911888),eye:bn(1709088)};function si(i,t,e,n,r=!1){let s=[],o=[],a=(u,d)=>e(r?u%i/i:u/i,d/t),c=(u,d)=>n(r?(u%i+i)%i/i:u/i,d/t),l=(u,d,m)=>{let g=c((u[0]+d[0]+m[0])/3,(u[1]+d[1]+m[1])/3);for(let[_,f]of[u,d,m])s.push(...a(_,f)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let d=0;d<i;d++)l([d,u],[d,u+1],[d+1,u+1]),l([d,u],[d+1,u+1],[d+1,u]);let h=new we;return h.setAttribute("position",new ae(s,3)),h.setAttribute("color",new ae(o,3)),h.computeVertexNormals(),h}function Uc(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new T(...i[Math.min(s-1,h+1)]).sub(new T(...i[Math.max(0,h-1)])).normalize()),a=new T(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new T(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return si(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}var fi=i=>1-Math.abs((i%1+1)%1*2-1),lr=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),hr={w:.087,h:.126,d:.108},Ui=(i,t)=>Math.exp(-(i*i)/(t*t)),qf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function Dx(){let i=new Be(1,28,22),t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++){let r=t.getX(n),s=t.getY(n),o=t.getZ(n),a=Math.max(0,o),c=r*hr.w,l=s*hr.h,h=o*hr.d;if(s<0){let d=-s;c*=1-.55*d**1.25,h*=1-.12*d,l*=1+.08*d}c*=1+.04*Ui(s+.02,.22)*a,s>.2&&(c*=1-.1*(s-.2));for(let d of[-1,1])h-=.008*Ui(r-d*.38,.2)*Ui(s-.06,.13)*a;h+=.006*Ui(s-.3,.07)*Ui(r,.5)*a;let u=Ui(r,.1)*a*qf(.2,-.2,s)*qf(-.38,-.26,s);h+=.017*u,h+=.005*Ui(r,.24)*Ui(s+.5,.07)*a,h-=.004*Ui(r,.3)*Ui(s+.38,.05)*a,o<0&&(h*=1.06),t.setXYZ(n,c,l,h),o>.05?e.setXY(n,.5+r*.5,.5+s*.5):e.setXY(n,.02,.97)}return i.computeVertexNormals(),i}function Hx(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=(h,u)=>[(.5+h*.5)*512,(.5-u*.5)*512];e.fillStyle="#e9d7d3",e.fillRect(0,0,512,512);let r=(h,u,d,m,g,_)=>{let[f,p]=n(h,u),M=d*512*.5;e.save(),e.translate(f,p),e.scale(1,m/d);let x=e.createRadialGradient(0,0,0,0,0,M);x.addColorStop(0,g.replace("A",String(_))),x.addColorStop(1,g.replace("A","0")),e.fillStyle=x,e.beginPath(),e.arc(0,0,M,0,Math.PI*2),e.fill(),e.restore()};for(let h of[-1,1])r(h*.62,-.18,.22,.3,"rgba(150,110,130,A)",.28),r(h*.42,-.2,.16,.1,"rgba(220,140,150,A)",.22);r(0,-.72,.3,.12,"rgba(140,100,120,A)",.25);for(let h of[-1,1]){let u=h*.38,d=.06;r(u,d+.06,.28,.12,"rgba(120,85,140,A)",.55);let[m,g]=n(u,d),_=.21*512*.5,f=.082*512*.5;e.save(),e.translate(m,g),e.scale(h,1),e.beginPath(),e.moveTo(-_,0),e.quadraticCurveTo(-_*.1,-f*1.1,_,-f*.15),e.quadraticCurveTo(_*.2,f*1.05,-_,0),e.closePath(),e.fillStyle="#efe9f2",e.fill(),e.save(),e.clip(),e.fillStyle="#4a3a5c",e.beginPath(),e.arc(-_*.12,f*.12,f*1.05,0,Math.PI*2),e.fill(),e.fillStyle="#1a1220",e.beginPath(),e.arc(-_*.12,f*.12,f*.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(-_*.28,-f*.25,f*.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,40,70,.55)",e.fillRect(-_,-f*1.2,_*2,f*.55),e.restore(),e.strokeStyle="#1c1420",e.lineCap="round",e.lineWidth=512*.01,e.beginPath(),e.moveTo(-_*1.02,.02*f),e.quadraticCurveTo(-_*.1,-f*1.15,_*1.12,-f*.35),e.stroke(),e.lineWidth=512*.006;for(let p=0;p<4;p++){let M=.55+p*.15;e.beginPath(),e.moveTo(_*(M*2-1),-f*(.95-p*.15)),e.lineTo(_*(M*2-1)+_*.18,-f*(1.35-p*.12)),e.stroke()}e.strokeStyle="rgba(90,60,90,.55)",e.lineWidth=512*.004,e.beginPath(),e.moveTo(-_*.9,-f*.9),e.quadraticCurveTo(0,-f*2,_*.95,-f*1),e.stroke(),e.strokeStyle="rgba(90,60,90,.4)",e.beginPath(),e.moveTo(-_*.6,f*.55),e.quadraticCurveTo(_*.1,f*1.05,_*.85,f*.2),e.stroke(),e.strokeStyle="#4a3a55",e.lineWidth=512*.011,e.beginPath(),e.moveTo(-_*.95,-f*2.7),e.quadraticCurveTo(_*.2,-f*3.4,_*1.15,-f*2.6),e.stroke(),e.restore()}r(.07,-.12,.05,.2,"rgba(160,120,135,A)",.22),e.fillStyle="rgba(110,70,90,.55)";for(let h of[-1,1]){let[u,d]=n(h*.06,-.31);e.beginPath(),e.ellipse(u,d,512*.012,512*.006,0,0,Math.PI*2),e.fill()}let[s,o]=n(0,-.5),a=.25*512*.5,c=.065*512*.5;e.fillStyle="#5b2f50",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s-a*.5,o-c*1.2,s-a*.1,o-c*.9),e.lineTo(s,o-c*.6),e.lineTo(s+a*.1,o-c*.9),e.quadraticCurveTo(s+a*.5,o-c*1.2,s+a,o),e.closePath(),e.fill(),e.fillStyle="#7b4468",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*2,s+a,o),e.closePath(),e.fill(),e.strokeStyle="#3a1c33",e.lineWidth=512*.006,e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*.35,s+a,o),e.stroke(),r(.03,-.535,.05,.02,"rgba(255,220,235,A)",.4);let l=new In(t);return l.colorSpace=on,l.anisotropy=4,l}function Yf(i,t,e){let n=[],r=(R,S={})=>{let D=new Pe({color:S.vc?16777215:R,vertexColors:!!S.vc,metalness:S.metal??.04,roughness:S.rough??.82,flatShading:!0,emissive:S.emissive??(S.vc?1709092:0),transparent:!0,side:S.double?Fe:zn});return n.push({mat:D,color:D.color.clone(),emissive:D.emissive.clone()}),D},s=r(16777215,{vc:!0,double:!0}),o=r(nn.skin,{rough:.7}),a=r(nn.eye,{rough:.5}),c=r(nn.moon,{metal:.35,rough:.35,emissive:2761744}),l=(R,S,D,W=[0,0,0])=>{let H=new At(R,S);return H.position.set(...W),D.add(H),H},h=i==="ally"?bn(3840636):nn.robe,u=i==="ally"?bn(2781272):nn.robeDeep,d=i==="ally"?bn(7655598):nn.trim,m=new Xt,g=new Xt;m.add(g);let _=[];for(let R of[-1,1]){let S=R*.075,D=Di(g,S,.96,.56);_.push(D),l(Uc([[S,.98,0],[S*1.04,.76,.008],[S*1.05,.54,.01]],H=>.068-.014*H,7,()=>nn.boot),s,D.thigh),l(Uc([[S*1.05,.58,.01],[S*1.1,.3,0],[S*1.1,.13,-.01]],H=>.054-.016*H,7,()=>nn.boot),s,D.shin);let W=si(6,2,(H,U)=>{let X=H*Math.PI*2,Z=U,G=-.05+Z*.2,w=.13-Z*.11,it=.045*(1-.65*Z*Z);return[S+Math.cos(X)*it,w+Math.sin(X)*it*.55,G]},()=>nn.boot,!0);l(W,s,D.shin),l(new Te(.012,.006,.12,5),a,D.shin,[S,.06,-.045])}let f=si(14,8,(R,S)=>{let D=S<.25?.02:.02+(S-.25)*.55,W=D+R*(Math.PI*2-2*D),H=1.1-S*.82-(R>.35&&R<.65?0:.04*S)+.03*fi(R*7)*S,U=.165+.15*S**1.2;return[Math.sin(W)*U,H,Math.cos(W)*U*.82]},(R,S)=>lr(nn.dress,nn.dressHi,.6*fi(R*7)*S));l(f,s,g),l(si(4,4,(R,S)=>{let D=-.35+R*.7,W=.15+.09*S;return[Math.sin(D)*W,.86-S*.6,Math.cos(D)*W*.62-.02]},()=>nn.lining),s,g);let p=si(10,5,(R,S)=>{let D=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.1],[1.67,.052]],W=S*(D.length-1),H=Math.min(D.length-2,Math.floor(W)),U=W-H,X=D[H][0]+(D[H+1][0]-D[H][0])*U,Z=D[H][1]+(D[H+1][1]-D[H][1])*U,G=R*Math.PI*2;return[Math.sin(G)*Z*1.08,X,Math.cos(G)*Z*.78]},(R,S)=>lr(nn.dress,nn.dressHi,S>.8?.5:.15*fi(R*4)),!0);l(p,s,g),l(si(14,1,(R,S)=>{let D=R*Math.PI*2,W=.172+.006*S;return[Math.sin(D)*W*1.08,1.04+S*.11,Math.cos(D)*W*.82]},()=>nn.belt,!0),s,g);let M=(R,S)=>{let D=new es;D.absarc(0,0,R,Math.PI*.18,Math.PI*1.82,!1),D.absarc(R*.38,0,R*.78,Math.PI*1.7,Math.PI*.3,!0);let W=new Ys(D,{depth:S,bevelEnabled:!0,bevelThickness:S*.4,bevelSize:R*.08,bevelSegments:1,curveSegments:6});return W.center(),W};l(new Ln(.05,.012,4,10),c,g,[0,1.095,.152]).scale.set(1,.85,.6),l(M(.042,.012),c,g,[0,1.095,.162]).rotation.z=.5;let b=9,L=si(28,14,(R,S)=>{let D=.36+.48*S**1.2,W=D+R*(Math.PI*2-2*D),H=.07+.16*fi(R*b+.5)+(R<.06||R>.94?.08:0),U=.14,X,Z,G;if(S<U){let w=S/U;X=1.61-.14*w**.8,Z=.1+.155*w**.7,G=.72}else{let w=(S-U)/(1-U);X=1.47-w*(1.47-H),Z=.255+.25*w**1.3,G=.72+.22*w}return Z*=1+.07*Math.sin(W*8)*Math.max(0,S-U),[Math.sin(W)*Z*(1.12-.1*S),X,Math.cos(W)*Z*G-.03*S]},(R,S)=>{let D=S>.89||R<.03||R>.97,W=lr(h,u,.35*fi(R*8+.25)+(R>.3&&R<.7?.15:0));return D?d:W});l(L,s,g),l(si(10,2,(R,S)=>{let D=Math.PI*.55+R*Math.PI*.9,W=.105+.045*S;return[Math.sin(D)*W*1.1,1.58+S*.13,Math.cos(D)*W*.85]},(R,S)=>lr(h,d,S>.6?1:0)),s,g),l(new Te(.045,.055,.12,7),o,g,[0,1.63,0]);let C=new Xt;C.position.set(0,1.76,0),g.add(C);let A=r(16777215,{rough:.7});A.map=Hx(),A.flatShading=!1,l(Dx(),A,C),l(si(20,4,(R,S)=>{let D=-Math.PI+R*Math.PI*2,W=Math.abs(D),H=W<.08?.72:W<.95?.6-.42*((W-.08)/.87)**.8:.18-.5*((W-.95)/(Math.PI-.95)),U=Math.PI/2-S*(Math.PI/2-H),X=1.085+.015*Math.sin(D*9);return[Math.sin(D)*Math.cos(U)*hr.w*X,Math.sin(U)*hr.h*X+.004,Math.cos(D)*Math.cos(U)*hr.d*X]},(R,S)=>lr(nn.hair,nn.hairDark,.15+.4*fi(R*14)*S),!0),s,C);let k=(R,S)=>lr(nn.hair,nn.hairDark,.25+.5*fi(R*9)*(.4+.6*S));l(si(18,10,(R,S)=>{let D=Math.PI*.42+R*Math.PI*1.16,W=.1-S*(.95+.14*fi(R*6+.3)),H=S<.25?.13+S*.28:.2+.05*Math.sin(S*3.1),U=.022*Math.sin(S*15+D*3)*S;return[Math.sin(D)*(H+U)*1.05,W,Math.cos(D)*(H+U)*.85-.02-.05*S]},k),s,C);for(let R of[-1,1])for(let S of[0,1]){let D=R*(.098+S*.03),W=.035-S*.05,H=Array.from({length:8},(U,X)=>{let Z=X/7;return[D+R*(.06*Z+.025*Math.sin(Z*9+S)),.04-Z*(.55+.08*S),W+.06*Z-.03*Math.sin(Z*7)]});l(Uc(H,U=>.035*(1-.6*U)+.008,5,(U,X)=>k(X,U),[1,1,.55]),s,C)}let O=new Xt;O.position.set(0,.075,-.005),O.rotation.set(-.12,0,.07),C.add(O),l(si(20,3,(R,S)=>{let D=R*Math.PI*2,W=.14+S*.24;return[Math.sin(D)*W,.02-.075*S*S+.012*Math.sin(D*3)*S,Math.cos(D)*W]},(R,S)=>lr(nn.hat,u,S>.9?.25:.2*fi(R*5)),!0),s,O),l(Uc([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],R=>.165*(1-R)**1.35+.004,8,(R,S)=>lr(nn.hat,u,.25*fi(S*4)+.15*R)),s,O),l(si(16,1,(R,S)=>{let D=R*Math.PI*2,W=.168-.006*S;return[Math.sin(D)*W,.025+S*.06,Math.cos(D)*W]},()=>nn.hatBand,!0),s,O);let v=l(M(.04,.012),c,O,[0,.055,.172]);v.rotation.z=.5;let q=(R,S,D=.15)=>si(10,6,(W,H)=>{let U=W*Math.PI*2,X=.065+D*Math.max(0,(H-.3)/.7)**1.4,Z=H<.99?0:.07*fi(W*4),G=-(H*R)-Z,w=S*H*H;return[Math.cos(U)*X,G,Math.sin(U)*X*.9+w]},(W,H)=>H>.85?d:lr(h,u,.3*fi(W*3)),!0),V=new Xt;V.position.set(-.23,1.47,0),V.rotation.set(-.42,0,-.2),g.add(V),l(q(.6,.06),s,V);let J=ui(nn.skin,s,!1);J.position.set(0,-.58,.05),J.scale.multiplyScalar(Lr),V.add(J);let mt=new Xt;mt.position.set(.23,1.47,.02),mt.rotation.z=hi,g.add(mt);let $=l(q(.4,0,.07),s,mt);$.rotation.x=-.5;let lt=l(new Te(.03,.034,.12,6),o,mt,[0,-.38,.19]);lt.rotation.x=-.5;let{staffPivot:I,staff:Q,crystal:B,crystalMat:j,glow:ct}=Dr(mt,[0,-.43,.24],n,t,e,ui(nn.skin,s,!0)),Y=Ur(C,[-1,1].map(R=>[R*.38*hr.w,.06*hr.h,.9*hr.d]),Hr.witch,t);return{root:m,body:g,head:C,arm:mt,staffPivot:I,crystal:B,crystalMat:j,glow:ct,staff:Q,height:2,materials:n,eyes:Y,leftArm:V,legs:_}}var Ux={me:4020950,opp:12728908,ally:3121012};function Zf(i,t,e,n){if(i==="witch")return Yf(t,e,n);if(i==="wizard")return Gf(t,e,n);if(i==="knight")return Wf(t,e,n);if(i==="goblin")return Xf(t,e,n);i=i;let r=[],s=(V,J={})=>{let mt=new Pe({color:V,metalness:J.metal??.05,roughness:J.rough??.8,flatShading:!0,emissive:J.emissive??0,emissiveIntensity:J.ei??1,transparent:!0});return r.push({mat:mt,color:mt.color.clone(),emissive:mt.emissive.clone()}),mt},o=(V,J,mt=0,$=0,lt=0)=>{let I=new At(V,J);return I.position.set(mt,$,lt),I},c=i==="goblin"||i==="kid"?.78:1,l=s(i==="goblin"?7323466:15778970),h=s(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:Ux[t],d=s(u),m=s(16766073,{metal:.2,rough:.4}),g=s(12897496,{metal:.3,rough:.45}),_=new Xt,f=new Xt;_.add(f);let p=[];if(i==="wizard")f.add(o(new Te(.27,.46,1,9),d,0,.5,0)),f.add(o(new Te(.47,.47,.05,9),m,0,.03,0));else{let V=i==="knight"?g:h;for(let J of[-.12,.12]){let mt=Di(f,J,.62,.32);p.push(mt),mt.thigh.add(o(new Te(.095,.085,.34,7),V,J,.46,0)),mt.shin.add(o(new Be(.085,7,5),V,J,.32,0)),mt.shin.add(o(new Te(.085,.075,.3,7),V,J,.17,0)),mt.shin.add(o(new ln(.16,.08,.26),h,J,.04,.05))}f.add(o(new Te(.3,.34,.32,8),d,0,.72,0))}let M=i==="knight"?g:d;if(f.add(o(new Te(.24,.29,.55,8),M,0,1.12,0)),f.add(o(new Ln(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let V=o(new ln(.34,.6,.04),d,0,1,.27);f.add(V),f.add(o(new Be(.13,6,4),g,-.3,1.36,0)),f.add(o(new Be(.13,6,4),g,.3,1.36,0))}i==="human"&&f.add(o(new ln(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let x=new Xt;x.position.set(0,1.58,0),f.add(x),x.add(o(new Mn(.2,1),l));for(let V of[-.07,.07])x.add(o(new Be(.028,6,4),h,V,.02,.18));if(i==="wizard"){let V=s(15658740);x.add(o(new Gn(.17,.42,7),V,0,-.2,.1).rotateX(Math.PI)),x.add(o(new ln(.4,.34,.14),V,0,-.06,-.13)),x.add(o(new Te(.36,.36,.04,12),d,0,.15,0));let J=o(new Gn(.24,.62,9),d,0,.47,0);J.rotation.z=.12,x.add(J),x.add(o(new Ln(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let V of[-1,1]){let J=o(new Gn(.07,.34,5),l,V*.24,.05,0);J.rotation.z=-V*1.25,x.add(J)}x.add(o(new Gn(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")x.add(o(new Mn(.235,1),g)),x.add(o(new ln(.3,.05,.05),h,0,.02,.21)),x.add(o(new Gn(.06,.4,6),s(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")x.add(o(new ln(.38,.2,.12),s(5913122),0,-.02,-.13)),x.add(o(new Be(.215,10,6,0,Math.PI*2,0,Math.PI/2),s(4029400),0,.03,0)),x.add(o(new ln(.2,.025,.16),s(4029400),0,.05,.2));else if(i==="human"){let V=s(5913122);x.add(o(new Be(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),V,0,.02,-.01)),x.add(o(new ln(.4,.22,.12),V,0,-.04,-.13))}let b=i==="knight"?g:d,L=new Xt;L.position.set(-.3,1.34,0),L.rotation.set(-.2,0,-.18),f.add(L),L.add(o(new Te(.075,.1,.55,6),b,0,-.27,0)),L.add(o(new Be(.075,6,4),l,0,-.58,0));let C=new Xt;C.position.set(.3,1.34,.02),C.rotation.z=hi,f.add(C),C.add(o(new Te(.075,.1,.5,6),b,0,-.22,.05).rotateX(-.5));let A=o(new Be(.075,6,4),l,0,-.42,.22);C.add(A);let k=new Xt;k.position.set(0,-.42,.22),k.rotation.z=-.37,C.add(k);let O=cr(n,e);O.group.position.y=.24,O.group.scale.setScalar(Su),k.add(O.group);for(let V of O.materials)r.push({mat:V,color:V.color.clone(),emissive:V.emissive.clone()});let{gem:y,gemMat:v,glow:q}=O;return _.scale.setScalar(c),{root:_,body:f,head:x,arm:C,staffPivot:k,crystal:y,crystalMat:v,glow:q,staff:O,height:1.95*c,materials:r,leftArm:L,legs:p,staffLean:0}}function Ru(i){return i==="kid"||i==="human"?"goblin":["wizard","witch","goblin","knight"].find(t=>t===i)??"wizard"}function Nx(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new In(i);return n.colorSpace=on,n}function $f(i){let t;try{t=new Gs({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=$o,t.setClearColor(0,0);let e=new Ws;e.add(new Ks(14673663,2760768,1.4));let n=new or(16777215,2.2);n.position.set(2,3,4),e.add(n);let r=new or(10456319,2);r.position.set(-3,2,-3),e.add(r);let s=new vi(16777215,3,3,2);e.add(s);let o=new wn(30,1,.1,50),a=Nx(),c=new Xt;c.rotation.z=.12,e.add(c);let l=null,h="";function u(M){return l&&h===M||(l&&(c.remove(l.group),l.group.traverse(x=>x.geometry?.dispose?.())),l=cr(M,a),h=M,c.add(l.group),s.color.copy(l.color),s.position.set(.3,Pr+.2,.6)),l}function d(){let M=i.clientWidth||300,x=i.clientHeight||420;t.setSize(M,x,!1),o.aspect=M/x;let b=1.55/Math.tan(Js.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,b),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,f=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(M){if(!f()){m=0;return}m=requestAnimationFrame(p);let x=Math.min(.05,(M-g)/1e3);g=M,_+=x,l&&(c.rotation.y+=x*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=x*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,x,.25),t.render(e,o))}return{show(M){u(M),d(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(M,x,b){let L=[],C=h,A=c.rotation.y,k=c.position.y;t.setPixelRatio(1),t.setSize(x,b,!1),o.aspect=x/b,o.position.set(.35,Pr+.12,1.6),o.lookAt(0,Pr-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let O of M)u(O).update(1.2,0,0),t.render(e,o),L.push(i.toDataURL("image/png"));return c.rotation.y=A,c.position.y=k,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),C&&u(C),d(),L},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function Rn(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,r)=>n+(r-n)*e(),int:(n,r)=>n+Math.floor(e()*(r-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var Wt=i=>i<0?0:i>1?1:i,De=(i,t,e)=>{let n=Wt((e-i)/(t-i));return n*n*(3-2*n)},sd=(i,t,e)=>i+(t-i)*e,jt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],Me=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],Nr=(i,t)=>1-Math.exp(-i*t),na=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},me=i=>i*Math.PI/180;function Un(i,t){let e=me(i),n=me(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function od(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return jt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var Nc=(()=>{let i=Rn(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function Ze(i,t){let e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,d=Nc[h+c],m=Nc[h+l],g=Nc[u+c],_=Nc[u+l];return(d*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var Kf=Math.cos(.55),Jf=Math.sin(.55);function hn(i,t,e=5,n=2.03,r=.5){let s=0,o=1,a=0;for(let c=0;c<e;c++){s+=o*Ze(i+17.3*c,t-9.1*c),a+=o;let l=(i*Kf-t*Jf)*n,h=(i*Jf+t*Kf)*n;i=l,t=h,o*=r}return s/a}var jf=Math.cos(.7),Qf=Math.sin(.7);function ad(i,t,e=5,n=2.1,r=.52){let s=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*Ze(i+31.7*l,t+5.3*l)-1);h=h*h*c,s+=h*o,a+=o,c=Wt(h*2);let u=(i*jf-t*Qf)*n,d=(i*Qf+t*jf)*n;i=u,t=d,o*=r}return s/a}var td=new Map;function Fx(i,t,e){let n=`${t}:${e}`,r=td.get(n);if(!r){let l=Rn(e*977+t);r=new Float32Array(t);for(let h=0;h<t;h++)r[h]=l.random();td.set(n,r)}let s=i*t,o=Math.floor(s),a=s-o,c=a*a*(3-2*a);return r[(o%t+t)%t]*(1-c)+r[((o+1)%t+t)%t]*c}function ed(i,t=5,e=3,n=1,r=.5){let s=0,o=1,a=0;for(let c=0;c<t;c++)s+=o*Fx(i,e*2**c,n+c),a+=o,o*=r;return s/a}function ur(i,t){let e=i.stops;return(n,r,s)=>{let o=Math.asin(Math.max(-1,Math.min(1,s)))*180/Math.PI,a=od(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+r*l[1]+s*l[2])));for(let[u,d,m]of i.glow){let g=Math.exp(-h/u)*d*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-r*l[1]+s*l[2]))),d=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=d*i.anti_col[0],a[1]+=d*i.anti_col[1],a[2]+=d*i.anti_col[2]}}return a}}var no=(i,t)=>Math.round(255*Math.pow(Wt(Nr(i,t)),1/2.2));function Pu(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function Iu(i,t=!1){let e=new In(i);return e.colorSpace=on,t?e.wrapS=e.wrapT=Qi:e.wrapS=Qr,e.anisotropy=2,e}function Ox(i,t,e){let n=t/2,{c:r,g:s,img:o}=Pu(t,n),a=ur(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??Me(i.far2,.8),d=[],m=h.map(()=>[]);for(let b=0;b<t;b++){let L=(b+.5)/t,C=L*2*Math.PI;d.push(a(Math.cos(C)*Math.cos(.012),Math.sin(C)*Math.cos(.012),Math.sin(.012)));let A=1;for(let k of e.notchAz){let O=Math.abs(na(C,me(k)));A*=1-.85*Math.exp(-((O/me(20))**2))}h.forEach(([k,O,y],v)=>{if(e.ridgeKind==="trees"){m[v].push(k+O*ed(L,6,18,y,.62)**1.5);return}let q=1-Math.abs(2*ed(L,7,4,y,.56)-1);m[v].push((k+O*q**1.3)*(.35+.65*A))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),f=null,p=[0,0,0],M=[0,0,0];if((i.milky??0)>0){let b=new T(.25,-.55,.8).normalize(),L=b.clone().cross(new T(0,0,1)).normalize(),C=b.clone().cross(L);f=[b.x,b.y,b.z],p=[L.x,L.y,L.z],M=[C.x,C.y,C.z]}for(let b=0;b<n;b++){let L=((b+.5)/n-.5)*Math.PI,C=Math.cos(L),A=Math.sin(L),k=n-1-b;for(let O=0;O<t;O++){let y=(O+.5)/t*2*Math.PI,v=C*Math.cos(y),q=C*Math.sin(y),V=A,J=a(v,q,V);if(f&&L>0){let I=Math.asin(Math.max(-1,Math.min(1,v*f[0]+q*f[1]+V*f[2]))),Q=Math.atan2(v*M[0]+q*M[1]+V*M[2],v*p[0]+q*p[1]+V*p[2]),B=3*Math.cos(Q),j=3*Math.sin(Q),ct=hn(B+9*I,j+4*I,4),Y=De(.5,.75,hn(B*1.7+17+14*I,j*1.7-5+6*I,3)),R=Math.exp(-((I/(i.milky_w??.2))**2))*(.25+1.3*ct)*(1-.65*Y)*i.milky,S=i.milky_col??[.55,.58,.85];J=[J[0]+R*S[0],J[1]+R*S[1],J[2]+R*S[2]]}let mt=0;h.forEach(([,,,I,Q],B)=>{let j=Wt((m[B][O]-L)/l+.5);if(j<=0)return;let ct=d[O],Y=jt(Q,ct,I),R=jt(Y,ct,Math.exp(-Math.max(L,0)/.025)*.55);J=jt(J,R,j),mt=Math.max(mt,j)});let $=Wt(-L/l+.5);$>0&&(J=jt(J,u,$));let lt=(k*t+O)*4;o.data[lt]=no(J[0],c),o.data[lt+1]=no(J[1],c),o.data[lt+2]=no(J[2],c),o.data[lt+3]=255,g[k*t+O]=mt,_[k*t+O]=(o.data[lt]+o.data[lt+1]+o.data[lt+2])/765}}let x=(i.stars??0)>0?Bx(t,n,i.star_n,i.stars,g,_):null;return s.putImageData(o,0,0),{tex:Iu(r),stars:x}}function Bx(i,t,e,n,r,s){let o=Rn(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let d=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(d),_=Math.floor(m/(2*Math.PI)*i)%i,f=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-f,M=(1-r[p*i+_])*Wt(1-s[p*i+_]*3),x=o.random()**6,b=a[o.int(0,3)];if(M<=.01)continue;let L=Math.min(1.6,(.1+.95*x)*n*M*2.2),C=140;c.push(C*Math.cos(g)*Math.cos(m),C*Math.cos(g)*Math.sin(m),C*Math.sin(g)),l.push(b[0]*L,b[1]*L,b[2]*L),h.push(1+x*2.5)}return{pos:c,col:l,size:h}}function kx(i,t,e){let n=t/2,{c:r,g:s,img:o}=Pu(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let d=0;d<n;d++){let m=((d+.5)/n-.5)*Math.PI,g=n-1-d;if(m<.02)continue;let _=Math.cos(m),f=Math.sin(m),p=1/(f+.16),M=c<50?De(.02,.1,m)*(1-De(c*.6,c,m)):De(.02,.16,m);if(!(M<=0))for(let x=0;x<t;x++){let b=(x+.5)/t*2*Math.PI,L=_*Math.cos(b),C=_*Math.sin(b),A=L*p*i.cloud_scale,k=C*p*i.cloud_scale,O=hn(A*.6+9,k*.6+2,3)-.5,y=A+O*1.4,v=k+O*1.1,q=hn(y,v,5),V=De(i.cov0,i.cov1,q);if(V<=.002)continue;let J=hn(y+h,v+u,5),mt=Wt(.55-(J-q)*3.4)*(1-.4*V),$=Math.exp(-Math.acos(Math.max(-1,Math.min(1,L*e[0]+C*e[1]+f*e[2])))/1.1),lt=jt(i.cloud_lit_far,i.cloud_lit_near,$),I=Me(i.cloud_shadow,.6+.4*$),Q=jt(I,lt,mt),B=V*(1-V)*4*$*.6,j=(g*t+x)*4;o.data[j]=no(Q[0]+B*i.cloud_rim[0],a),o.data[j+1]=no(Q[1]+B*i.cloud_rim[1],a),o.data[j+2]=no(Q[2]+B*i.cloud_rim[2],a),o.data[j+3]=Math.round(255*V*M*i.cloud_opacity)}}return s.putImageData(o,0,0),Iu(r)}function zx(i,t,e={}){let n=e.span??1.4,{c:r,g:s,img:o}=Pu(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(d,m),_=Wt((1-g)/(n*2/t)+.5),f=Math.sqrt(Wt(1-g*g)),p=0;for(let[C,A]of e.rings??[])p=Math.max(p,A*(1-De(C-.1,C,g)));let M;if(i==="sun")M=jt(e.sunInner??[1,.62,.25],a,Math.pow(f,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let C=Wt(d*l[0]+m*l[1]+f*l[2]),A=De(.5,.6,hn(d*1.9+4,m*1.9-2,5))*.42,k=De(.62,.8,Ze(d*14,m*14))*.12,O=(.04+C**.8)*(.6+.4*f)*(.9-A-k)*(e.moonGain??1.55);M=Me(a,O),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-De(n*.86,n,g);let x=_+(1-_)*p,b=x>1e-4?[0,1,2].map(C=>(_*M[C]+(1-_)*p*c[C])/x):[0,0,0],L=(h*t+u)*4;o.data[L]=Math.round(255*Math.pow(Wt(b[0]),1/2.2)),o.data[L+1]=Math.round(255*Math.pow(Wt(b[1]),1/2.2)),o.data[L+2]=Math.round(255*Math.pow(Wt(b[2]),1/2.2)),o.data[L+3]=Math.round(255*Wt(x))}return s.putImageData(o,0,0),Iu(r,!0)}var ne=class{constructor(t=!1,e=0){tn(this,"alpha",t);tn(this,"pos",[]);tn(this,"col",[]);tn(this,"idx",[]);tn(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((r,s)=>{let o=n?.[s];r.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new we;return t.setAttribute("position",new ae(this.pos,3)),t.setAttribute("color",new ae(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new ae(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function be(i={}){let t=new Zs({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Fe:zn}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var Ni=(i={})=>{let t=new cn({vertexColors:!0,side:Fe,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?an:Pi,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},$n=(i,t=1)=>new cn({color:new zt(i[0]*t,i[1]*t,i[2]*t),side:Fe,toneMapped:!1});function nd(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),r.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;s.push(l,h,l+1,h,h+1,l+1)}let o=new we;return o.setAttribute("position",new ae(n,3)),o.setAttribute("uv",new ae(r,2)),o.setIndex(s),o}var Au=(i,t=!1)=>new cn({map:i,side:Fe,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function id(i,t){let e=new ne,n=(r,s,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[d,m,g,_]of[[r,0,s,s],[0,r,-s,s],[-r,0,-s,-s],[0,-r,s,-s]])h.push(e.v([d*c-m*l,d*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let d=0;d<8;d++)e.f(u,h[d],h[(d+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function Fi(i){let t=new Xt,e=[],n=Ox(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),r=n.tex,s=new At(nd(150,48,24),Au(r));if(s.renderOrder=-10,s.frustumCulled=!1,t.add(s),e.push(r,s.geometry,s.material),n.stars&&n.stars.pos.length){let x=new we;x.setAttribute("position",new ae(n.stars.pos,3)),x.setAttribute("color",new ae(n.stars.col,3)),x.setAttribute("size",new ae(n.stars.size,1));let b=new ti({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:an}),L=new Rr(x,b);L.renderOrder=-9.5,L.frustumCulled=!1,t.add(L),e.push(x,b)}let o=null;if(i.clouds!==!1){let x=kx(i.th,Math.min(1024,i.W),i.bodies[0]);o=new At(nd(138,48,24),Au(x,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(x,o.geometry,o.material)}let a=i.body.span??1.4,c=zx(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=Au(c,!0);e.push(c,l);for(let x of i.bodies){let L=146*Math.tan(i.body.r)*a,C=new T(...x),A=C.clone().cross(new T(0,0,1));A.lengthSq()<1e-8&&(A=new T(1,0,0)),A.normalize();let k=A.clone().cross(C).normalize(),O=C.clone().multiplyScalar(146),y=new we,v=[O.clone().addScaledVector(A,-L).addScaledVector(k,-L),O.clone().addScaledVector(A,L).addScaledVector(k,-L),O.clone().addScaledVector(A,L).addScaledVector(k,L),O.clone().addScaledVector(A,-L).addScaledVector(k,L)];y.setAttribute("position",new ae(v.flatMap(V=>[V.x,V.y,V.z]),3)),y.setAttribute("uv",new ae([0,0,1,0,1,1,0,1],2)),y.setIndex([0,1,2,0,2,3]);let q=new At(y,l);q.renderOrder=-8,q.frustumCulled=!1,t.add(q),e.push(y)}let h=Rn(i.seed??21),u=[],d=Math.round(i.sparkles*(i.bigShare??.27)),m=new cn({color:new zt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Fe}),g=new cn({color:new zt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Fe}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},f=id(..._.big),p=id(..._.small);e.push(m,g,f,p);for(let x=0;x<i.sparkles;x++){let b=x<d,L=h.uniform(0,360),C=h.uniform(..._.el??[35,88]),A=Un(L,C);i.bodies.concat([Un(i.th.body_az+180,i.th.body_el)]).some(v=>A[0]*v[0]+A[1]*v[1]+A[2]*v[2]>Math.cos(me(24)))&&(L+=45);let k=Un(L,C).map(v=>v*135),O=new At(b?f:p,b?m:g);O.position.set(...k),O.lookAt(0,0,0),O.renderOrder=-7,t.add(O);let y=b?24:12;u.push({m:O,big:b,pulses:Array.from({length:y},(v,q)=>Math.round((q+.5)*3600/y+h.int(-15,15)))})}let M=null;return{group:t,envMap(){if(M)return M;let x=r.image,b=document.createElement("canvas");b.width=x.width,b.height=x.height;let L=b.getContext("2d");return L.translate(b.width*.5,0),L.scale(-1,1),L.drawImage(x,0,0),L.drawImage(x,-x.width,0),M=new In(b),M.colorSpace=on,M.mapping=Ho,e.push(M),M},update(x){o&&(o.rotation.z=x%3600/3600*Math.PI*2);let b=x%3600;for(let L of u){let C=1;for(let A of L.pulses){if(b<A-18||b>A+14)continue;let k=[[A-18,1],[A-9,L.big?1.35:1.2],[A,L.big?.2:.35],[A+14,1]];for(let O=0;O<3;O++)if(b>=k[O][0]&&b<=k[O+1][0]){let y=(b-k[O][0])/(k[O+1][0]-k[O][0]);C=sd(k[O][1],k[O+1][1],y*y*(3-2*y))}}L.m.scale.setScalar(C)}},dispose(){for(let x of e)x.dispose()}}}function Nn(i,t,e=0,n=1,r=0){let s=Math.floor(i/t),o=(i-s*t)/t,a=o*o*(3-2*o),c=(s+r)%2?n:e,l=(s+r)%2?e:n;return sd(c,l,a)}var cd=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function io(i,t,e,n){let r=new ne,s=[];for(let o of i){if(o===0){let c=r.v([0,0,e(0,0)],n(0,0));s.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(r.v([h,u,e(h,u)],n(h,u)))}s.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?r.f(s[0][0],s[1][a],s[1][c]):r.f(s[o][a],s[o][c],s[o-1][c],s[o-1][a])}return r.geo()}function Vx(i,t,e,n,r=0){let s=.6+.4*Wt(t)**.7,o=Me(i,s*(.88+.24*e));return jt(o,n,Wt(Wt(1-t*3)*.55+r*.75))}function Oi(i,t,e,n,r,s,o=!0){let a=Ze(e*2.5+r,n*2.5+r),c=o?Wt((Ze(e*.7+r,n*.7-r)-.5)*2.5):0;return Vx(i,t,a,s,c)}function Cu(i,t,e,n,r,s,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],s([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],s([o[0],o[1],e+n],1));for(let g=0;g<r;g++){let _=2*Math.PI*g/r,f=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(f,s(f,0))),l.push(i.v(p,s(p,1)))}let d=[],m=[];for(let g=0;g<r;g++)d.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<r;g++){let _=(g+1)%r;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(d[g],d[_],m[_],m[g])}}function Gx(i,t,e,n,r,s,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,r-=h/2,t+=l/2,e-=l/2;let u=(g,_,f)=>[g*Math.cos(_),g*Math.sin(_),f],d=g=>i.v(g,a(g,(g[2]-s)/o)),m=(g,_,f,p)=>i.f(d(g),d(_),d(f),d(p));for(let g=0;g<c;g++){let _=n+(r-n)*g/c,f=n+(r-n)*(g+1)/c;m(u(t,_,s+o),u(e,_,s+o),u(e,f,s+o),u(t,f,s+o)),m(u(e,_,s+o),u(e,_,s),u(e,f,s),u(e,f,s+o)),m(u(t,f,s+o),u(t,f,s),u(t,_,s),u(t,_,s+o))}m(u(t,n,s+o),u(t,n,s),u(e,n,s),u(e,n,s+o)),m(u(e,r,s+o),u(e,r,s),u(t,r,s),u(t,r,s+o))}function ea(i,t,e,n,r=[1,1,1]){let s=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],d=h[1]-l[1],m=Math.hypot(u,d)||1,g=-d/m,_=u/m;s.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],r)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],r))});for(let a=0;a<t.length-1;a++)i.f(s[a],o[a],o[a+1],s[a+1])}var Oc=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function Wx(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(me(n)),.4+.4*Math.sin(me(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(me(n)),-.4+.4*Math.sin(me(n))]);return[[...t,...e]]}return i===1?[Oc(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],Oc(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function rd(i,t,e,n,r,s,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let d of Wx(t))ea(i,d.map(([m,g])=>[h+r*(m*c-g*l),u+r*(m*l+g*c)]),o,s)}function Fr(i){let{th:t,r:e}=i,n=t.stone,r=new ne,s=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,f)=>s(Oi(m,f,_[0],_[1],g,t.moss,i.patchy??!0),_)};Cu(r,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),Cu(r,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],f)=>{let p=f*.23;for(let M=0;M<_;M++)Gx(r,m,g,p+2*Math.PI*M/_,p+2*Math.PI*(M+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new ne;Cu(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new ne;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),f=Math.sin(g);ea(l,[[.3*_,.3*f],[2.2*_,2.2*f]],.07,c);for(let p of[-1,1]){let M=g+p*me(35);ea(l,[[1.3*_,1.3*f],[1.3*_+.7*Math.cos(M),1.3*f+.7*Math.sin(M)]],.05,c)}}ea(l,Oc(2.3),.06,c),ea(l,Oc(6),.05,c);let h=new ne;for(let m=0;m<8;m++){let g=me(45*m);m===6?rd(h,0,g,7.4,.95,c+.01,.13):rd(h,m%3,g,8.2,.55,c+.01,.09)}let u=new Xt;u.add(new At(r.geo(),be())),u.add(new At(a.geo(),$n(i.glowCol,i.glow*1.1)));let d=new At(l.geo(),$n(i.lineCol,i.glow*1.3));return d.name="centre-pattern",u.add(d),u.add(new At(h.geo(),$n(i.runeCol,i.glow*1.6))),u}function ro(i){let{r:t}=i,e=i.wind??(()=>{let r=new T(.8,.6,0).normalize();return[r.x,r.y,0]})(),n=new ne(!1,1);for(let r=0;r<i.tufts;r++){let s=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,s))continue;let a=s*Math.cos(o),c=s*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),d=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),f=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],M=[-Math.sin(_),Math.cos(_)],x=i.gh(u,d),b=i.base(s),L=i.tip(s,_),C=jt(b,L,.55),A=[u,d,x],k=[u+p[0]*f*.3,d+p[1]*f*.3,x+m*.55],O=[u+p[0]*f,d+p[1]*f,x+m],y=($,lt)=>{let I=$[2]-x,Q=.32*I*I;return n.v($,lt,[[e[0]*Q,e[1]*Q,0]])},v=y([A[0]-M[0]*g,A[1]-M[1]*g,A[2]],b),q=y([A[0]+M[0]*g,A[1]+M[1]*g,A[2]],b),V=y([k[0]-M[0]*g*.65,k[1]-M[1]*g*.65,k[2]],C),J=y([k[0]+M[0]*g*.65,k[1]+M[1]*g*.65,k[2]],C),mt=y(O,L);n.f(v,q,J,V),n.f(V,J,mt)}}return n.geo()}function ld(i,t,e,n,r,s,o,a){let c=new T(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new T(0,0,1)).normalize(),u=l.clone().cross(h),d=12,m=o*r,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([f,p])=>{let M=(.45+3*a*f**1.6)*n;return Array.from({length:d},(x,b)=>{let L=2*Math.PI*b/d,C=c.clone().multiplyScalar(f).addScaledVector(h,Math.cos(L)*M).addScaledVector(u,Math.sin(L)*M);return i.v([t[0]+C.x,t[1]+C.y,t[2]+C.z],[s[0],s[1],s[2],p*m])})});for(let f=0;f<g.length-1;f++)for(let p=0;p<d;p++){let M=(p+1)%d;i.f(_[f][p],_[f][M],_[f+1][M],_[f+1][p])}}function so(i,t,e,n,r,s,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[r[0],r[1],r[2],n(0,0)*s]),l=[...o,t].map(h=>Array.from({length:40},(u,d)=>{let m=2*Math.PI*d/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[r[0],r[1],r[2],n(g,_)*s])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let d=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][d],l[h][d])}}var ls=()=>new cn({vertexColors:!0,transparent:!0,depthWrite:!1,blending:an,side:Fe,fog:!1}),Fc=null;function hd(){if(Fc)return Fc;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Fc=new In(i),Fc}function Bi(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let r=new Float32Array(i.n*3),s=new we;s.setAttribute("position",new Oe(r,3));let o=new Sr({map:hd(),color:new zt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:an,sizeAttenuation:!0,fog:!1}),a=new Rr(s,o);a.frustumCulled=!1;let c=l=>{let h=cd(l);for(let u=0;u<i.n;u++){let d=i.twinkle?Math.sin(l*.05+n[u])*.15:0;r[u*3]=t[u][0]+e[u][0]*h+d,r[u*3+1]=t[u][1]+e[u][1]*h,r[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}s.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function Bc(i){let t=i.list.length,e=(l,h,u)=>{let d=new Float32Array(t*3),m=new we;m.setAttribute("position",new Oe(d,3));let g=new Sr({map:hd(),color:h,size:l,transparent:!0,depthWrite:!1,blending:an,opacity:u,fog:!1}),_=new Rr(m,g);return _.frustumCulled=!1,{p:_,pos:d,g:m}},n=i.gain??1,r=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),s=e(2.2*r,new zt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*r,new zt(1,1,1).lerp(new zt(i.col[0],i.col[1],i.col[2]),.3),1),a=new Xt;a.add(s.p,o.p);let c=l=>{let h=cd(l);i.list.forEach((u,d)=>{for(let m of[s.pos,o.pos])m[d*3]=u.p[0],m[d*3+1]=u.p[1],m[d*3+2]=u.p[2]+u.amp*h}),s.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function ud(i,t){let{r:e,idx:n,th:r}=t,s=n/2,o=jt(r.back_lit[0],r.back_lit[1],s),a=jt(r.back_dark[0],r.back_dark[1],s),c=r.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],d=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(r.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(r.back_w??1),_=e.uniform(0,6.28),f=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(b=>Nr(b,r.exposure??1)),M=Math.exp(-((na(h,t.sunAz)/.5)**2))*(r.back_rim_k??0),x=[];for(let b=0;b<7;b++){let L=b/6,C=-2+(m+2)*L,A=g*(1-.55*L)*(1+.5*Math.exp(-Math.max(C,0)/3)),k=Math.sin(L*4+_)*1.2+f*C,O=[u[0]+d[0]*k,u[1]+d[1]*k,C],y=1-.75*L*L,v=Me(o,y),q=Me(a,y);c>0&&(v=jt(v,p,c*.6*(1-.5*L)),q=jt(q,p,c*.6*(1-.5*L))),M>.01&&(v=jt(v,r.back_rim,.6*M*(1-L)),q=jt(q,r.back_rim,.6*M*(1-L))),x.push([i.v([O[0]-d[0]*A/2,O[1]-d[1]*A/2,C],v),i.v([O[0]+d[0]*A/2,O[1]+d[1]*A/2,C],q)])}for(let b=0;b<6;b++)i.f(x[b][0],x[b][1],x[b+1][1],x[b+1][0])}}function kc(){let i=new ne,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,r=a=>od(e,a),s=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],r(a)))),o=i.v([.07*1.12*1.12,0,1.12],r(1.12));for(let a=0;a<s.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(s[a][c],s[a][l],s[a+1][l],s[a+1][c])}for(let a=0;a<n;a++)i.f(s[s.length-1][a],s[s.length-1][(a+1)%n],o);return i.geo()}function ki(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let r of n)r.dispose()})}function zi(i){let t=(n,r=1,s=.5)=>{let o=(n[0]+n[1]+n[2])/3;return Me(jt([o,o,o],n,s),r)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let r=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(r)&&(e[n]=Array.isArray(r[0])?r.map(s=>t(s)):t(r))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var Lu={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},oo=78,Du=[90,270];function fd(i,t){let e=i==="night"?Lu.NIGHT:i==="day"?{...zi(Lu.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:Lu.SUNSET,n=e.emit,r=n*.75,s=Rn(13),o=Rn(41),a=new Xt,c=[Un(e.body_az,e.body_el)],l=Du.map(Y=>[oo*Math.cos(me(Y)),oo*Math.sin(me(Y))]),h=me(e.body_az),u=[Math.cos(h),Math.sin(h)],d=(()=>{let Y=new T(.8,.6,0).normalize();return[Y.x,Y.y,0]})(),m=(Y,R,S)=>{let D=(Y%360+360)%360;return D>255&&D<285&&R>S},g=e.stone,_=(Y,R)=>{let S=Math.hypot(Y,R),D=Wt((S-12)/10)*.35*(Math.sin(Y*.09)+Math.cos(R*.11)+.5*Math.sin((Y+R)*.19));D+=Wt((S-60)/60)*3*Math.sin(Y*.05+1)*Math.cos(R*.04);for(let[W,H]of l)D*=De(22,40,Math.hypot(Y-W,R-H));return D},f=(Y,R)=>{let S=0;for(let D of Du){let W=me(D),H=Math.cos(W),U=Math.sin(W),X=Y*H+R*U,Z=Math.abs(-Y*U+R*H);X>9&&(S=Math.max(S,Math.exp(-((Z/4)**2))*De(9,16,X)*(1-De(oo-10,oo-2,X))))}return S},p=(Y,R)=>{let S=Wt((Math.hypot(Y,R)-10)/70)**.8,D=hn(Y*.06+3,R*.06-7,3);return jt(Me(jt(e.g_near,e.g_far,S),.75+.5*D),e.g_road,f(Y,R)*.8)};a.add(new At(io([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),be({flat:!1}))),a.add(Fr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let M=new ne,x=(Y,R,S,D,W,H)=>{let U=o.uniform(0,50),X=(tt,et)=>Oi(W,et,tt[0],tt[1],U,e.moss),Z=(tt,et)=>Array.from({length:D},(nt,rt)=>{let P=2*Math.PI*rt/D,E=[H[0]+Y*Math.cos(P),H[1]+Y*Math.sin(P),tt];return M.v(E,X(E,et))}),G=Z(R,0),w=Z(R+S,1),it=Z(R,0),K=Z(R+S,1);for(let tt=0;tt<D;tt++){let et=(tt+1)%D;M.f(it[tt],it[et],K[et],K[tt])}M.f(...w),M.f(...[...G].reverse())},b=[],L=kc(),C=Ni({gain:1.05}),A=[];for(let Y of[45,135,225,315]){let R=me(Y),S=9.35*Math.cos(R),D=9.35*Math.sin(R);x(.4,.3,1.1,12,g[3],[S,D]),x(.55,1.4,.3,12,g[0],[S,D]);let W=new At(L,C);W.position.set(S,D,1.75),a.add(W),b.push({m:W,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),A.push({pos:[S,D,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let k=new ne,O=new ne(!1,2),y=(Y,R,S,D,W)=>{let H=Math.cos(D),U=Math.sin(D),X=(Z,G,w)=>{let it=Z*S[0],K=G*S[1],tt=[R[0]+it*H-K*U,R[1]+it*U+K*H,R[2]+w*S[2]];return Y.v(tt,W(tt))};for(let Z of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])Y.f(...Z.map(([G,w,it])=>X(G,w,it)))},v=t?6:10;for(let Y=0;Y<v;Y++){let R=2*Math.PI*(Y+o.uniform(-.2,.2))/v,S=o.uniform(14,20),D=S*Math.cos(R),W=S*Math.sin(R),H=_(D,W),U=o.uniform(6,9),X=()=>e.cs_stone;y(k,[D,W,H+(U-.2)/2],[.2,.2,U+.2],Math.PI/4,X);let Z=o.uniform(0,3.14),G=[-Math.sin(Z),Math.cos(Z)],w=[Math.cos(Z),Math.sin(Z)];y(k,[D,W,H+U-.2],[.08,1.3,.08],Z,X);let it=[D,W,H+U-.3],K=(nt,rt)=>{let P=.35*Math.sin(1.4*nt+rt)*nt/5;return[w[0]*P+d[0]*(.15*nt)/5,w[1]*P+d[1]*(.15*nt)/5,0]},tt=Array.from({length:6},(nt,rt)=>Array.from({length:3},(P,E)=>O.v([it[0]+G[0]*(E-1)*.6,it[1]+G[1]*(E-1)*.6,it[2]-rt*.6],Me(e.banner,1-.35*rt/5),[K(rt,0),K(rt,Math.PI)]))),et=O.v([it[0],it[1],it[2]-3.6],Me(e.banner,.6),[K(6,0),K(6,Math.PI)]);for(let nt=0;nt<5;nt++)for(let rt=0;rt<2;rt++)O.f(tt[nt][rt],tt[nt][rt+1],tt[nt+1][rt+1],tt[nt+1][rt]);O.f(tt[5][0],tt[5][1],et),O.f(tt[5][1],tt[5][2],et)}let q=be({double:!0,morph:!0}),V=new At(O.geo(),q);V.morphTargetInfluences=[0,0],a.add(new At(k.geo(),be()),V,new At(M.geo(),be()));let J=[];Du.forEach((Y,R)=>{let S=new ne,D=new ne,W=new ne,H=new ne,U=new ne,X=new ne(!1,2),Z=me(Y),G=[oo*Math.cos(Z),oo*Math.sin(Z),0],w=Z-Math.PI/2,it=Math.cos(w),K=Math.sin(w),tt=F=>[G[0]+F[0]*it-F[1]*K,G[1]+F[0]*K+F[1]*it,F[2]],et=F=>{let ot=Ze(F[0]*.8+R*10,F[2]*.8),dt=.6+.4*Wt(F[2]/6);return Me(e.cs_stone,dt*(.75+.5*ot)*(.8+.4*Wt(F[2]/30)))},nt=(F,ot,dt,st)=>{for(let Tt of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])F.f(...Tt.map(([vt,yt,Ut])=>{let Mt=[ot[0]+vt*dt[0],ot[1]+yt*dt[1],ot[2]+Ut*dt[2]];return F.v(tt(Mt),st(Mt))}))},rt=(F,ot,dt,st,Tt)=>{let vt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Mt,Lt])=>[F+Mt*st,ot+Lt*st,dt]),yt=[F,ot,dt+Tt],Ut=Mt=>Me(e.cs_roof,.8+.4*Wt((Mt[2]-22)/22));for(let Mt=0;Mt<4;Mt++){let Lt=vt[Mt],Yt=vt[(Mt+1)%4];D.f(D.v(tt(Lt),Ut(Lt)),D.v(tt(Yt),Ut(Yt)),D.v(tt(yt),Ut(yt)))}};nt(S,[0,0,6],[40,4,12],et);for(let F=-18;F<=18;F+=2.6)if(Math.abs(F)>4.6)for(let ot of[-1.6,1.6])nt(S,[F,ot,12.7],[1.4,.8,1.4],et);for(let F of[-20,20]){nt(S,[F,0,11],[8,8,22],et);for(let ot of[12,20])nt(S,[F,0,ot],[8.6,8.6,.6],et);rt(F,0,22,4.7,9),nt(S,[F,0,31],[.12,.12,9],et)}nt(S,[0,0,17],[7,7,34],et);for(let F of[13,24])nt(S,[0,0,F],[7.6,7.6,.6],et);rt(0,0,34,4.3,10),nt(S,[0,0,46.5],[.12,.12,5],et);for(let F of[-2.9,2.9])nt(S,[F,-3.75,3.8],[.9,.6,7.6],et);nt(S,[0,-3.75,7.7],[6.8,.6,.9],et),nt(H,[0,-3.6,3.6],[4.6,.3,7.2],F=>F[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let F=0;F<7;F++)nt(H,[-2.1+.7*F,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let F of[2,4.5,6.8])nt(H,[0,-3.85,F],[4.6,.2,.12],()=>[.02,.016,.014]);{let F=Array.from({length:9},(dt,st)=>[2.3*Math.cos(Math.PI*st/8),7.2+2.3*Math.sin(Math.PI*st/8)]);H.f(...F.map(([dt,st])=>H.v(tt([dt,-3.75,st]),[.006,.005,.008])));let ot=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];H.f(...[...ot].reverse().map(dt=>H.v(tt(dt),[.04,.025,.02])))}for(let F of[9.5,15,20.5,26,31])nt(W,[0,-3.62,F],[.8,.3,1.7],()=>[1,1,1]);for(let F of[-20,20])for(let ot of[5,10,15,20])nt(W,[F,-4.12,ot],[.8,.3,1.7],()=>[1,1,1]);for(let F of[-4.3,4.3]){nt(S,[F,-3.8,4.2],[.15,.15,1],et);let ot=new Mn(.35,1),dt=ot.attributes.position;for(let Tt=0;Tt<dt.count;Tt+=3)U.f(...[0,1,2].map(vt=>U.v(tt([F+dt.getX(Tt+vt),-3.8+dt.getY(Tt+vt),5.1+dt.getZ(Tt+vt)*1.5]),[1,1,1])));ot.dispose();let st=tt([F,-4.6,5.3]);R===0&&A.push({pos:st,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[F,ot,dt,st,Tt]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let vt=[0,.2,.4,.6,.82],yt=(Ot,Kt)=>{let ie=.5*Tt*Math.sin(7*Ot+Kt)*Ot,at=.1*Tt*Math.sin(5*Ot+Kt)*Ot;return[-ie*K,ie*it,at]},Ut=(Ot,Kt,ie)=>X.v(tt([Ot,ot,Kt]),e.flag_col,[yt(ie,0),yt(ie,Math.PI)]),Mt=vt.map(Ot=>Ut(F+st*Ot,dt+Tt,Ot)),Lt=vt.map(Ot=>Ut(F+st*Ot,dt,Ot)),Yt=Ut(F+st,dt+Tt,1),Nt=Ut(F+st,dt,1),Ct=Ut(F+.9*st,dt+Tt/2,.9);for(let Ot=0;Ot<4;Ot++)X.f(Lt[Ot],Lt[Ot+1],Mt[Ot+1],Mt[Ot]);X.f(Mt[4],Yt,Ct),X.f(Lt[4],Ct,Nt),X.f(Mt[4],Ct,Lt[4])}a.add(new At(S.geo(),be()),new At(D.geo(),be()),new At(H.geo(),be({double:!0}))),a.add(new At(W.geo(),$n(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new At(U.geo(),$n(e.torch_col,1.5)));let E=new At(X.geo(),be({double:!0,morph:!0}));E.morphTargetInfluences=[0,0],a.add(E),J.push(E)});class mt{constructor(R){tn(this,"mode",R);tn(this,"mb");tn(this,"war",[]);tn(this,"pending",[]);tn(this,"faces",[]);this.mb=new ne(!1,R==="clash"?2:R==="surge"?1:0)}part(R,S,D,W,H,U,X=-1,Z=!1){let G=D.clone().sub(S);if(G.length()<1e-6)return;let w=G.normalize(),it=Math.abs(w.z)<.9?new T(0,0,1):new T(1,0,0),K=w.clone().cross(it).normalize(),tt=w.clone().cross(K),et=[[S,W],[D,H]].map(([nt,rt])=>Array.from({length:U},(P,E)=>{let F=2*Math.PI*E/U,ot=nt.clone().addScaledVector(K,Math.cos(F)*rt).addScaledVector(tt,Math.sin(F)*rt),dt=new Ht(ot.x-R.x,ot.y-R.y),st=dt.length()>1e-6?.5+.5*dt.normalize().dot(new Ht(u[0],u[1])):.5;return this.add([ot.x,ot.y,ot.z],jt(e.sil,e.sil_rim,.45*st*st),X,Z)}));for(let nt=0;nt<U;nt++){let rt=(nt+1)%U;this.faces.push([et[0][nt],et[0][rt],et[1][rt],et[1][nt]])}this.faces.push([...et[0]].reverse()),this.faces.push(et[1])}add(R,S,D,W){return this.pending.push({p:R,c:S,wi:D,arm:W}),this.pending.length-1}warrior(R,S,D,W){let H=this.war.length,U=new ue().makeRotationZ(S-Math.PI/2),X=(it,K,tt)=>R.clone().add(new T(it,K,tt).applyMatrix4(U)),Z=R.clone().add(new T(0,0,1)),G=(it,K,tt,et,nt,rt=!1)=>this.part(Z,X(...it),X(...K),tt,et,nt,H,rt);for(let[it,K,tt]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])G([it*.11,0,.95],tt,.1,.075,4),G(tt,K,.075,.06,4);G([0,0,.95],[0,.1,1.48],.2,.23,6),G([0,.16,1.58],[0,.16,1.74],.11,.11,6),G([0,.16,1.74],[0,.16,1.92],.12,.02,6),G([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),G([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),D!=="spear"&&G([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),G([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),G([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),D==="sword"?G([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):D==="axe"?(G([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),G([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(G([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),G([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let w=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(it=>{let K=X(...it);return this.add([K.x,K.y,K.z],e.sil,H,!1)});this.faces.push(w),this.war.push({team:W,f:new T(0,1,0).applyMatrix4(U),axis:new T(1,0,0).applyMatrix4(U),pivot:X(.27,.1,1.42)})}finish(){let R=this.pending.map(S=>{let D=[],W=new T(...S.p);if(this.mode==="clash")for(let H of[0,1]){if(S.wi<0){D.push([0,0,0]);continue}let U=this.war[S.wi],X=U.team===H,Z=U.f.clone().multiplyScalar(X?.32:-.22),G=W.clone().add(Z);S.arm&&(G=U.pivot.clone().add(Z).add(W.clone().sub(U.pivot).applyAxisAngle(U.axis,me(X?-60:25)))),D.push([G.x-W.x,G.y-W.y,G.z-W.z])}if(this.mode==="surge"){let H=this.war[S.wi];D.push([H.f.x*.5,H.f.y*.5,S.arm?.3:0])}return this.mb.v(S.p,S.c,D)});for(let S of this.faces)this.mb.f(...S.map(D=>R[D]));return this.mb.geo()}}let $=be({morph:!0,double:!0}),lt=[],I=t?5:8;for(let Y=0;Y<I;Y++){let R=2*Math.PI*(Y+o.uniform(-.3,.3))/I,S=o.uniform(17,36);m(R*180/Math.PI,S,15)&&(R+=.6);let D=S*Math.cos(R),W=S*Math.sin(R);for(let H=0;H<3;H++){let U=new mt("clash"),X=o.uniform(0,6.283),Z=new T(D+o.uniform(-4.5,4.5),W+o.uniform(-4.5,4.5),0),G=new T(Math.cos(X),Math.sin(X),0),w=o.uniform(.9,1.1);for(let[K,tt]of[[0,-1],[1,1]]){let et=Z.clone().addScaledVector(G,w*tt);et.z=_(et.x,et.y),U.warrior(et,K===0?X:X+Math.PI,o.choice(["sword","sword","axe","spear"]),K)}let it=new At(U.finish(),$);it.morphTargetInfluences=[0,0],a.add(it),lt.push({m:it,w:2*Math.PI/s.uniform(40,95),w2:2*Math.PI/s.uniform(110,260),w3:2*Math.PI/s.uniform(150,400),p:s.uniform(0,6.28),p2:s.uniform(0,6.28),p3:s.uniform(0,6.28),bias:s.uniform(-.35,.35)})}}{let Y=new mt(null);for(let R=0;R<16;R++){let S=o.uniform(0,6.283),D=o.uniform(13,45);if(m(S*180/Math.PI,D,14))continue;let W=new T(D*Math.cos(S),D*Math.sin(S),0);W.z=_(W.x,W.y);let H=new ue().makeRotationZ(o.uniform(0,6.283)),U=(Z,G,w)=>W.clone().add(new T(Z,G,w).applyMatrix4(H)),X=W.clone().add(new T(0,0,.2));Y.part(X,U(0,-.4,.18),U(0,.45,.2),.2,.22,6),Y.part(X,U(0,.55,.18),U(0,.7,.2),.11,.11,6),Y.part(X,U(-.1,-.4,.12),U(-.2,-1.2,.1),.09,.07,4),Y.part(X,U(.1,-.4,.12),U(.25,-1.1,.12),.09,.07,4),Y.part(X,U(-.25,.35,.18),U(-.6,.1,.12),.06,.05,4),Y.part(X,U(.25,.35,.18),U(.55,.7,.1),.06,.05,4),Y.part(X,U(.7,.2,0),U(.9,.2,1.8),.03,.025,4),Y.part(X,U(-.9,0,.05),U(-.9,0,.12),.4,.4,8)}a.add(new At(Y.finish(),be({double:!0})))}let Q=[];{let Y=[];for(let D=0;D<6;D++){let W=o.uniform(0,6.283),H=o.uniform(45,90);m(W*180/Math.PI,H,40)&&(W+=.8),Y.push(new T(H*Math.cos(W),H*Math.sin(W),0))}let R=t?70:120,S=Y.map(()=>new mt("surge"));for(let D=0;D<R;D++){let W=S[D%Y.length],H=Y[D%Y.length],U=H.clone().add(new T(o.uniform(-9,9),o.uniform(-9,9),0));U.z=_(U.x,U.y);let X=Math.atan2(H.y-U.y,H.x-U.x)+o.uniform(-.5,.5),Z=W.war.length,G=new ue().makeRotationZ(X-Math.PI/2),w=(K,tt,et)=>U.clone().add(new T(K,tt,et).applyMatrix4(G)),it=U.clone().add(new T(0,0,.9));W.part(it,w(0,0,0),w(0,0,1.45),.28,.22,4,Z),W.part(it,w(0,.05,1.45),w(0,.05,1.65),.12,.12,4,Z),W.part(it,w(.3,-.3,.9),w(.3,2,2.4),.03,.025,4,Z,!0),W.war.push({team:0,f:new T(0,1,0).applyMatrix4(G),axis:new T(1,0,0).applyMatrix4(G),pivot:w(0,0,1.4)})}for(let D of S){let W=new At(D.finish(),$);W.morphTargetInfluences=[0,0],a.add(W),Q.push({m:W,w:2*Math.PI/s.uniform(90,170),p:s.uniform(0,6.28),w2:2*Math.PI/s.uniform(300,600),p2:s.uniform(0,6.28)})}}let B=new At(ro({r:s,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(Y,R)=>m(Y,R,16),base:Y=>Me(e.grass_base,1-.6*Wt((Y-12)/55)),tip:Y=>Me(e.grass_tip,1-.6*Wt((Y-12)/55))}),be({emit:.1,double:!0,morph:!0}));B.morphTargetInfluences=[0],a.add(B);let j=Bi({r:o,n:t?24:40,at:()=>{let Y=o.uniform(0,6.283),R=30*Math.sqrt(o.random());return[R*Math.cos(Y),R*Math.sin(Y),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(j.obj);let ct=Fi({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(ct.group),{group:a,floor:.6,update(Y){ct.update(Y);for(let U of lt){let X=Math.sin(Y*U.w+U.p+1.4*Math.sin(Y*U.w2+U.p2))+U.bias,Z=.55+.45*Math.sin(Y*U.w3+U.p3),G=Wt(X)*Z,w=Wt(-X)*Z;U.m.morphTargetInfluences[0]=G*G*(3-2*G),U.m.morphTargetInfluences[1]=w*w*(3-2*w)}for(let U of Q)U.m.morphTargetInfluences[0]=Wt(.5+.6*Math.sin(Y*U.w+U.p)*(.6+.4*Math.sin(Y*U.w2+U.p2)));let R=Nn(Y,90);V.morphTargetInfluences[0]=R,V.morphTargetInfluences[1]=1-R;for(let U of J)U.morphTargetInfluences[0]=R,U.morphTargetInfluences[1]=1-R;B.morphTargetInfluences[0]=Nn(Y,45);let S=Y%3600,D=Math.floor(S/8),W=(S-D*8)/8,H=W*W*(3-2*W);for(let U of b){let X=U.keys[D%450],Z=U.keys[(D+1)%450];U.m.scale.set(X[0]+(Z[0]-X[0])*H,X[1]+(Z[1]-X[1])*H,X[2]+(Z[2]-X[2])*H)}j.update(Y)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:Me(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...A],dispose(){ct.dispose(),ki(a)}}}var Hu={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function dd(i,t){let e=i==="night"?Hu.NIGHT:i==="day"?{...zi(Hu.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:Hu.SUNSET,n=e.emit,r=n*.75,s=Rn(11),o=Rn(99),a=new Xt,c=me(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let I=new T(.8,.6,0).normalize();return[I.x,I.y,0]})(),u=(I,Q)=>Wt((Math.hypot(I,Q)-12)/10)*.25*(Math.sin(I*.22)+Math.cos(Q*.27)+.5*Math.sin((I+Q)*.5)),d=(I,Q)=>{let B=Wt((Math.hypot(I,Q)-6)/34)**.7,j=.9+.2*(Math.sin(I*.5)*Math.cos(Q*.5)*.5+.5),ct=hn(I*.09+3,Q*.09-7,3),Y=Ze(I*1.7,Q*1.7),R=jt(e.g_near,e.g_far,B);return R=jt(R,e.g_alt,Wt((ct-.45)*2.2)*.6*(1-.5*B)),Me(R,j*(1+.25*(Y-.5)*(1-B)))},m=ur(e,[Un(e.body_az,e.body_el)]);a.add(new At(io([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,d),be({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,I])=>[I[0],I[1]]),f=I=>{let Q=_.reduce((j,[ct,Y])=>j+Math.exp(-((Math.hypot(I[0]-ct,I[1]-Y)/5.5)**2)),0),B=(.55+.45*Math.min(1,Q))*(1-.4*Wt((Math.hypot(I[0],I[1])-5)/5))*.2*.5*e.beam_gain;return Me(e.beam_col,B)};a.add(Fr({th:e,r:s,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:r,patchy:!1,bake:f}));{let I=new ne;for(let Q=0;Q<10;Q++){let B=s.uniform(0,6.283),j=s.uniform(11.5,17),ct=s.uniform(.8,2),Y=s.choice(e.stone),R=o.uniform(0,50),S=new Mn(1,1),D=S.attributes.position;for(let w=0;w<D.count;w++){let it=s.uniform(.8,1.2);D.setXYZ(w,D.getX(w)*it,D.getY(w)*it,D.getZ(w)*it)}let W=j*Math.cos(B),H=j*Math.sin(B),U=s.uniform(0,6.28),X=new ue().compose(new T(W,H,u(W,H)+.3*ct),new Qe().setFromAxisAngle(new T(0,0,1),U),new T(ct,ct*.9,ct*.7)),Z=S.index?S.toNonIndexed():S,G=Z.attributes.position;for(let w=0;w<G.count;w+=3){let it=[];for(let K=0;K<3;K++){let tt=G.getX(w+K),et=G.getY(w+K),nt=G.getZ(w+K),rt=new T(tt,et,nt).applyMatrix4(X),P=.6+.4*Wt((nt+1)/2)**.7,E=Ze(tt*2+R,et*2+nt);it.push(I.v([rt.x,rt.y,rt.z],jt(Me(Y,P*(.88+.24*E)),e.moss,Wt(1-(nt+1)/2*3)*.55)))}I.f(...it)}Z.dispose()}a.add(new At(I.geo(),be()))}let p=[],M=(I,Q,B)=>{for(let j=0;j<300;j++){let ct=s.uniform(0,360);if(B&&ct>245&&ct<295)continue;let Y=s.uniform(I,Q),R=Y*Math.cos(me(ct)),S=Y*Math.sin(me(ct));if(p.every(([D,W])=>Math.hypot(R-D,S-W)>5.5))return p.push([R,S]),[R,S]}return null},x=be({morph:!0}),b=Ni({gain:2.2}),L=[],C=t?12:18,A=t?6:10;for(let I=0;I<C+A;I++){let Q=I<C,B=Q?M(15,26,!0):M(32,46,!1);if(!B)continue;let j=Q?s.uniform(46,62):s.uniform(58,76),ct=Q?s.uniform(1.2,2.1):s.uniform(2.3,3.3),Y=Q&&s.random()<.25,R=k(B[0],B[1],j,ct,Y),S=new At(R.bark.geo(),x);S.morphTargetInfluences=[0,0],a.add(S);let D=null;Y&&(D=new At(R.eyes.geo(),b),D.morphTargetInfluences=[0,0],a.add(D));let W=[];if(Y){let H=Array.from({length:Math.floor(174)},(U,X)=>60+X*20);for(let U=0;U<5;U++)W.push(H.splice(s.int(0,H.length-1),1)[0]);W.sort((U,X)=>U-X)}L.push({mesh:S,eyes:D,P:s.choice([100,120,150,180,200]),flip:s.int(0,1),blinks:W})}function k(I,Q,B,j,ct){let Y=new ne(!1,2),R=new ne(!1,2),S=new T(-I,-Q,0).normalize(),D=s.uniform(1.2,2.4),W=new T(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.03,.1)),H=s.uniform(0,6.28),U=s.uniform(.4,1),X=s.choice([3,4,5]),Z=s.uniform(0,6.28),G=F=>new T(I+W.x*F+U*Math.sin(.28*F+H),Q+W.y*F+U*Math.cos(.23*F+H),F),w=(F,ot)=>{let dt=Math.max(F,0),st=j*(1-.62*Wt(dt/B))*(1+1.1*Math.exp(-dt/1.6)),Tt=ot+.06*dt;return st*(1+.28*Math.cos(X*Tt+Z)*Math.exp(-dt/3.5)+.07*Math.cos(2*Tt+H))},it=F=>{let ot=D*Wt(Math.max(F,0)/B)**2;return[h[0]*ot,h[1]*ot,0]},K=(F,ot,dt)=>{let st=new T(F.x,F.y,0);st.lengthSq()>1e-12&&st.normalize();let Tt=Math.max(0,st.x*S.x+st.y*S.y),vt=.6+.4*Math.sin(dt),yt=jt(e.bark_dark,e.bark_lit,Wt(.85*Tt*vt*(1-.3*Wt(ot/B)))),Ut=Math.max(0,st.x*l[0]+st.y*l[1]);yt=jt(yt,e.bark_sun,Wt(e.bark_sun_k*Ut*(.5+.5*vt)*(1-.5*Wt(ot/B)))),yt=Me(yt,.72+.28*Wt(ot/1.6));let Mt=Wt(1-ot/2.2)*.55*Ze(F.x*3+I,F.y*3+ot*.8);return jt(yt,e.moss,Mt)},tt=(F,ot)=>Y.v([F.x,F.y,F.z],ot,[it(F.z),[0,0,0]]),et=t?10:14,nt=t?8:12,rt=[];for(let F=0;F<et;F++){let ot=-.5+(B+.5)*(F/(et-1))**1.15,dt=G(ot),st=[];for(let Tt=0;Tt<nt;Tt++){let vt=2*Math.PI*Tt/nt,yt=new T(Math.cos(vt),Math.sin(vt),0);st.push(tt(dt.clone().addScaledVector(yt,w(ot,vt)),K(yt,ot,vt*7+ot*.4)))}rt.push(st)}for(let F=0;F<et-1;F++)for(let ot=0;ot<nt;ot++){let dt=(ot+1)%nt;Y.f(rt[F][ot],rt[F][dt],rt[F+1][dt],rt[F+1][ot])}let P=tt(G(B).add(new T(0,0,.3)),e.bark_dark);for(let F=0;F<nt;F++)Y.f(P,rt[et-1][F],rt[et-1][(F+1)%nt]);let E=s.int(2,4);for(let F=0;F<E;F++){let ot=B*s.uniform(.35,.85),dt=s.uniform(0,6.28),st=new T(Math.cos(dt),Math.sin(dt),0),Tt=G(ot).addScaledVector(st,w(ot,dt)*.7),vt=st.clone().add(new T(0,0,s.uniform(.4,1))).normalize(),yt=s.uniform(3.5,7.5),Ut=new T(-st.y,st.x,0),Mt=[0,1,2,3,4].map(Nt=>Tt.clone().addScaledVector(vt,yt*(Nt/4)).add(new T(0,0,.35*yt*(Nt/4)**2)).addScaledVector(Ut,Math.sin(Nt/4*3+F)*.5)),Lt=w(ot,dt)*.32,Yt=Mt.map((Nt,Ct)=>{let Ot=Mt[Math.min(Ct+1,4)].clone().sub(Mt[Math.max(Ct-1,0)]).normalize(),Kt=Ot.clone().cross(new T(0,0,1));Kt.length()<.001&&(Kt=new T(1,0,0)),Kt.normalize();let ie=Ot.clone().cross(Kt);return Array.from({length:6},(at,Gt)=>{let Et=2*Math.PI*Gt/6,It=Kt.clone().multiplyScalar(Math.cos(Et)).addScaledVector(ie,Math.sin(Et));return tt(Nt.clone().addScaledVector(It,Lt*(1-.85*Ct/4)),K(It,Nt.z,Et*5+Ct))})});for(let Nt=0;Nt<4;Nt++)for(let Ct=0;Ct<6;Ct++){let Ot=(Ct+1)%6;Y.f(Yt[Nt][Ct],Yt[Nt][Ot],Yt[Nt+1][Ot],Yt[Nt+1][Ct])}}if(ct){let F=s.uniform(2.2,9),ot=Math.atan2(S.y,S.x)+s.uniform(-.6,.6),dt=new T(Math.cos(ot),Math.sin(ot),0),st=new T(-dt.y,dt.x,0),Tt=G(F).addScaledVector(dt,w(F,ot)),vt=s.uniform(.18,.32),yt=vt*1.25,Ut=(Yt,Nt,Ct)=>Tt.clone().addScaledVector(dt,Ct).addScaledVector(st,Yt).add(new T(0,0,Nt)),Mt=Array.from({length:10},(Yt,Nt)=>tt(Ut(Math.cos(2*Math.PI*Nt/10)*(yt+vt*1.7),Math.sin(2*Math.PI*Nt/10)*vt*1.7,.07),[.004,.003,.02]));Y.f(...Mt);let Lt=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Yt of[1,-1]){let Nt=Lt.map(([Ot,Kt])=>[Yt*(yt+Ot*vt),Kt*vt]);Yt===-1&&(Nt=Nt.reverse());let Ct=Nt.map(([Ot,Kt])=>{let ie=Ut(Ot,Kt,.11);return R.v([ie.x,ie.y,ie.z],[1,.04,.04],[it(ie.z),[0,0,F-ie.z]])});R.f(...Ct)}}return{bark:Y,eyes:R}}let O=e.grass_tip,y=be({emit:e.grass_emit,double:!0,morph:!0}),v=t?260:500,q=[0,1].map(()=>{let I=new Map,Q=ro({r:s,tufts:v,rmin:10.6,rspan:34,gh:u,base:j=>Me(e.grass_base,1-.6*Wt((j-11)/34)),tip:(j,ct)=>{let Y=Math.round(j*1e3),R=I.get(Y);R||(R=jt(O[0],O[1],s.random()),I.set(Y,R));let S=.3*Math.abs(Math.cos(ct-c))*(i==="night"?.5:1);return Me(jt(R,e.grass_rim,S),1-.6*Wt((j-11)/34))}}),B=new At(Q,y);return B.morphTargetInfluences=[0],a.add(B),B});{let I=new ne;for(let Q=0;Q<(t?40:70);Q++){let B=14+22*o.random(),j=o.uniform(0,2*Math.PI),ct=B*Math.cos(j),Y=B*Math.sin(j),R=u(ct,Y),S=[ct+o.uniform(-.06,.06),Y+o.uniform(-.06,.06),R+o.uniform(.35,.7)];I.f(I.v([ct-.012,Y,R],[.02,.07,.05]),I.v([ct+.012,Y,R],[.02,.07,.05]),I.v([S[0]+.012,S[1],S[2]],[.08,.25,.12]),I.v([S[0]-.012,S[1],S[2]],[.08,.25,.12]));let D=o.choice(e.flower),W=I.v([S[0],S[1],S[2]+.02],[1,.9,.5]),H=Array.from({length:6},(U,X)=>{let Z=2*Math.PI*X/6;return I.v([S[0]+.05*Math.cos(Z),S[1]+.05*Math.sin(Z),S[2]+.025],D)});for(let U=0;U<6;U++)I.f(W,H[U],H[(U+1)%6])}a.add(new At(I.geo(),be({emit:e.flower_emit,double:!0})))}{let I=new ne;for(let Q=0;Q<14;Q++){let B=me(s.choice([s.uniform(195,245),s.uniform(295,345),s.uniform(0,360)])),j=s.uniform(16,34),ct=s.uniform(1,1.8),Y=j*Math.cos(B),R=j*Math.sin(B),S=u(Y,R);for(let D=0;D<4;D++){let W=[s.uniform(-1.4,1.4),s.uniform(-1,1),s.uniform(.2,1)],H=s.uniform(.9,1.6),U=new Mn(H,1),X=U.attributes.position;for(let Z=0;Z<X.count;Z+=3){let G=[];for(let w=0;w<3;w++){let it=X.getZ(Z+w)+W[2];G.push(I.v([Y+(X.getX(Z+w)+W[0])*ct,R+(X.getY(Z+w)+W[1])*ct,S+it*ct*.75],jt(e.bush_lo,e.bush_hi,Wt((it+.3)/2.6)*.8)))}I.f(...G)}U.dispose()}}a.add(new At(I.geo(),be()))}{let I=new ne;[[52,70,110,150],[59,80,120,160],[66,90,130,170]].forEach(([B,j,ct,Y],R)=>ud(I,{r:s,idx:R,radius:B,count:t?Math.round(j*.6):j,hmin:ct,hmax:Y,th:e,sky:m,sunAz:c}));let Q=Ni({fog:!1,gain:i==="night"?.45:.6});Q.toneMapped=!1,a.add(new At(I.geo(),Q))}let V=new ne(!0);g.forEach(([I,Q])=>{for(let[B,j]of[[1,.45],[.7,.6],[.4,.8]])ld(V,I,Q,B,j,e.beam_col,.35*e.beam_gain,2.6)});let J=new ne(!0);so(J,9.4,.7,(I,Q)=>{let B=_.reduce((j,[ct,Y])=>j+Math.exp(-((Math.hypot(I-ct,Q-Y)/5.5)**2)),0);return(.55+.45*Math.min(1,B))*De(0,3,9.4-Math.hypot(I,Q))},e.beam_col,.3*.5*e.beam_gain);let mt=new At(V.geo(),ls());a.add(mt,new At(J.geo(),ls()));let $=Bi({r:s,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let I=s.uniform(0,6.283),Q=s.uniform(0,22);return[Q*Math.cos(I),Q*Math.sin(I),s.uniform(.8,7)]},move:()=>{let I=s.uniform(-1.5,1.5);return[I,I*.5,s.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add($.obj);let lt=Fi({th:e,W:t?512:1024,bodies:[Un(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(lt.group),{group:a,floor:.62,update(I){lt.update(I);for(let B of L){let j=Nn(I,B.P/2,.15,1,B.flip),ct=0;for(let Y of B.blinks)Math.abs(I%3600-Y)<3&&(ct=1-Math.abs(I%3600-Y)/3);B.mesh.morphTargetInfluences[0]=j,B.mesh.morphTargetInfluences[1]=ct,B.eyes&&(B.eyes.morphTargetInfluences[0]=j,B.eyes.morphTargetInfluences[1]=ct)}q.forEach((B,j)=>{B.morphTargetInfluences[0]=Nn(I,45,0,1,j)});let Q=Nn(I,450);mt.rotation.set(.03*Q*.1,.02*Q*.1,0),$.update(I)},key:{dir:Un(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:Me(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){lt.dispose(),ki(a)}}}var Uu={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},hs=2.3;function pd(i,t){let e=i==="night"?Uu.NIGHT:i==="day"?{...zi(Uu.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:Uu.SUNSET,n=e.emit,r=Rn(7),s=new Xt,o=[Un(e.body_az,e.body_el),Un(e.body_az+180,e.body_el)],a=ur(e,o),c=(I,Q)=>Wt((Math.hypot(I,Q)-13)/10)*.25*(Math.sin(I*.22)+Math.cos(Q*.27)+.5*Math.sin((I+Q)*.5)),l=(I,Q)=>{let B=Wt((Math.hypot(I,Q)-10)/50),j=.9+.2*(Math.sin(I*.5)*Math.cos(Q*.5)*.5+.5),ct=jt(e.g_near,e.g_far,B);return ct=jt(ct,e.g_alt,Wt((hn(I*.09+3,Q*.09-7,3)-.45)*2.2)*.6),Me(ct,j*(.9+.25*Ze(I*1.7,Q*1.7)))},h=(I,Q,B)=>jt(Me(I,(.6+.4*Wt(Q)**.7)*(.88+.24*B)),e.moss,Wt(1-Q*3)*.55);s.add(new At(io([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),be({flat:!1})));{let I=t?96:144,Q=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],B=Q.map(S=>Array.from({length:I},(D,W)=>{let H=2*Math.PI*W/I,U=S*Math.cos(H),X=S*Math.sin(H),Z=1;for(let it of[me(e.body_az),me(e.body_az+180)]){let K=Math.abs(((H-it+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);Z*=1-.8*Math.exp(-((K/me(17))**2))}let w=(4+42*De(50,102,S))*(1-.65*De(112,134,S))*(.12+1.15*ad(U*.032,X*.032,5))*(.55+.9*hn(U*.01+5,X*.01-3,3))*Z+1.2*hn(U*.09,X*.09,3)*De(46,60,S);return w*=De(45.5,52,S),[U,X,c(U,X)+.03+w]})),j=new ne,ct=[],Y=o;Q.forEach((S,D)=>{ct.push([]);for(let W=0;W<I;W++){let H=B[D][W],U=2*Math.PI*W/I,X=B[D][(W+1)%I],Z=B[D][(W-1+I)%I],G=B[Math.min(D+1,Q.length-1)][W],w=B[Math.max(D-1,0)][W],it=new T(G[0]-w[0],G[1]-w[1],G[2]-w[2]).cross(new T(X[0]-Z[0],X[1]-Z[1],X[2]-Z[2])).normalize();it.z<0&&it.multiplyScalar(-1);let K=H[2]/45,tt=1-it.z,et=hn(H[0]*.12,H[1]*.12,3),nt=Me(jt(e.rock_lo,e.rock_hi,Wt(Wt(K)**.7+.25*(et-.5))),.8+.4*et);nt=jt(nt,e.veg,Wt((9-H[2])/9)*Wt(1-tt*2.4)*.85),nt=jt(nt,e.snow,De(.55,.78,K+.22*(hn(H[0]*.07,H[1]*.07,3)-.5))*Wt(1-tt*1.7));let rt=0;for(let F of Y)rt=Math.max(rt,Wt(it.x*F[0]+it.y*F[1]+it.z*F[2]));rt=rt**1.2,nt=[nt[0]*(e.amb[0]+e.light_col[0]*rt*1.6),nt[1]*(e.amb[1]+e.light_col[1]*rt*1.6),nt[2]*(e.amb[2]+e.light_col[2]*rt*1.6)];let P=a(Math.cos(U)*Math.cos(.02),Math.sin(U)*Math.cos(.02),Math.sin(.02)).map(F=>Nr(F,e.exposure)*e.haze_gain),E=Math.min(.97,Math.max(0,1-Math.exp(-(S-40)/e.haze_dist)+.5*Math.exp(-Math.max(H[2],0)/9)*De(55,100,S)));nt=jt(nt,P,E),nt=jt(l(H[0],H[1]),nt,De(46,58,S)).map(Wt),ct[D].push(j.v(H,nt))}});for(let S=0;S<Q.length-1;S++)for(let D=0;D<I;D++){let W=(D+1)%I;j.f(ct[S][D],ct[S][W],ct[S+1][W],ct[S+1][D])}let R=Ni({fog:!1,gain:.95});s.add(new At(j.geo(),R))}let u=new ne,d=new ne,m=new ne,g=new ne,_=new ne,f=new ne,p=(I,Q,B,j,ct,Y=!0)=>{let R=Q.map(([S,D])=>Array.from({length:B},(W,H)=>{let U=[j[0]+D*Math.cos(2*Math.PI*H/B),j[1]+D*Math.sin(2*Math.PI*H/B),j[2]+S];return I.v(U,ct(U))}));for(let S=0;S<R.length-1;S++)for(let D=0;D<B;D++){let W=(D+1)%B;I.f(R[S][D],R[S][W],R[S+1][W],R[S+1][D])}if(Y){let S=R[R.length-1].map(D=>I.v(I.pos.slice(D*3,D*3+3),I.col.slice(D*3,D*3+3)));I.f(...S)}},M=(I,Q,B,j,ct,Y,R=1,S=[1,1,1])=>{let D=Array.from({length:j},(W,H)=>{let U=2*Math.PI*H/j;return Array.from({length:ct},(X,Z)=>{let G=2*Math.PI*Z/ct,w=Q+B*Math.cos(G);return I.v([w*Math.cos(U),w*Math.sin(U),Y+B*R*Math.sin(G)],S)})});for(let W=0;W<j;W++)for(let H=0;H<ct;H++){let U=(W+1)%j,X=(H+1)%ct;I.f(D[W][H],D[U][H],D[U][X],D[W][X])}},x=(I,Q,B,j,ct,Y=0)=>{let R=Math.cos(j),S=Math.sin(j),D=new Map,W=(U,X,Z)=>{let G=`${U},${X},${Z}`,w=D.get(G);w||(w=Y?[r.uniform(-.03,.03),r.uniform(-.03,.03),r.uniform(-.02,.02)]:[0,0,0],D.set(G,w));let it=U*B[0]+w[0],K=X*B[1]+w[1],tt=Z*B[2]+w[2];return I.v([Q[0]+it*R-K*S,Q[1]+it*S+K*R,Q[2]+tt],ct([it,K,tt],Z+.5))},H=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let U of H)I.f(...U.map(([X,Z,G])=>W(X,Z,G)))},b=(I,Q,B,j)=>{let ct=r.uniform(0,50);x(u,I,Q,B,(Y,R)=>h(j,R,Ze(Y[0]*2.5+ct,Y[1]*2.5+Y[2]*1.7)),1)},L=(I,Q,B,j)=>{let ct=r.uniform(0,50);p(u,[[0,I],[B,I]],48,[0,0,Q],Y=>h(j,(Y[2]-Q)/B,Ze(Y[0]*1.2+ct,Y[1]*1.2)))};L(8.2,0,1.4,e.stone[0]),L(7.2,1.4,.5,e.stone[3]),L(6.6,1.9,hs-1.9,e.stone[0]),M(d,6.6,.18,48,6,hs,1,e.stone[3]);let C=28;for(let I=0;I<C;I++){let Q=2*Math.PI*I/C,B=1.4+r.uniform(-.08,.08);b([8.45*Math.cos(Q),8.45*Math.sin(Q),B/2],[1,1.95,B],Q,r.choice(e.stone))}for(let[I,Q]of[[9.8,.9],[11,.55],[12.2,.3]])for(let B=0;B<14;B++){if(r.random()<.2)continue;let j=2*Math.PI*B/14+r.uniform(-.08,.08);b([I*Math.cos(j),I*Math.sin(j),Q/2],[1.3,2.6,Q],j+r.uniform(-.1,.1),r.choice(e.stone))}for(let I of[5.8,4.2,2.6,1.2])M(g,I,.08,48,6,hs+.02,.6);for(let I=0;I<16;I++){let Q=2*Math.PI*I/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(Q),5*Math.sin(Q),hs],()=>[1,1,1])}let A=[],k=kc(),O=Ni({gain:1.05}),y=[];for(let I of[3,10,17,24]){let Q=2*Math.PI*I/C,B=8.45*Math.cos(Q),j=8.45*Math.sin(Q),ct=1.4;p(d,[[0,.28],[.9,.28]],12,[B,j,ct],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[B,j,ct+.9],()=>e.stone[0]);let Y=new At(k,O);Y.position.set(B,j,ct+1.25),s.add(Y),A.push({m:Y,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),y.push({pos:[B,j,ct+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let v=(I,Q,B,j=1.8,ct=1.2)=>{let Y=me(I),R=Q*Math.cos(Y),S=Q*Math.sin(Y),D=c(R,S)-.4,W=Y-Math.PI/2,H=r.choice(e.stone),U=r.uniform(0,50),X=new Map,Z=Math.cos(W),G=Math.sin(W),w=(et,nt,rt)=>{let P=`${et},${nt},${rt}`,E=X.get(P);E||(E=[r.uniform(-.07,.07),r.uniform(-.07,.07),r.uniform(-.05,.05)],X.set(P,E));let F=et*j,ot=nt*ct,dt=(rt+.5)*B;if(dt>B*.5){let vt=1-.18*((dt-B*.5)/(B*.5));F*=vt,ot*=vt}F+=E[0],ot+=E[1];let st=dt+E[2],Tt=.5*Ze(F*2.2+U,st*.7)+.5*Ze(F*6+U,st*.25);return u.v([R+F*Z-ot*G,S+F*G+ot*Z,D+st],h(H,st/B,Tt))},it=4,K=et=>-.5+et/it,tt=et=>{for(let nt=0;nt<it;nt++)for(let rt=0;rt<it;rt++)u.f(w(...et(nt,rt)),w(...et(nt+1,rt)),w(...et(nt+1,rt+1)),w(...et(nt,rt+1)))};tt((et,nt)=>[K(et),-.5,K(nt)]),tt((et,nt)=>[K(nt),.5,K(et)]),tt((et,nt)=>[-.5,K(nt),K(et)]),tt((et,nt)=>[.5,K(et),K(nt)]),tt((et,nt)=>[K(nt),K(et),.5]),tt((et,nt)=>[K(et),K(nt),-.5]);for(let[et,nt,rt]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let E=-ct/2-.02,F=B*et;x(f,[R+0*Z-E*G,S+0*G+E*Z,D+F],[nt,.1,rt],W,()=>[1,1,1])}};for(let[I,Q,B]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])v(I,Q,B),v(I+180,Q,B);for(let I=0;I<12;I++){let Q=me(r.choice([r.uniform(195,245),r.uniform(295,345)])),B=r.uniform(13,18),j=r.uniform(1,2.2),ct=r.choice(e.stone),Y=r.uniform(0,50),R=B*Math.cos(Q),S=B*Math.sin(Q),D=r.uniform(0,6.28),W=new Mn(1,1),H=W.attributes.position,U=new ue().compose(new T(R,S,c(R,S)+.3*j),new Qe().setFromAxisAngle(new T(0,0,1),D),new T(j,j*.9,j*.7)),X=new Map;for(let Z=0;Z<H.count;Z+=3)u.f(...[0,1,2].map(G=>{let w=H.getX(Z+G),it=H.getY(Z+G),K=H.getZ(Z+G),tt=`${w.toFixed(3)},${it.toFixed(3)},${K.toFixed(3)}`,et=X.get(tt);et===void 0&&(et=r.uniform(.8,1.2),X.set(tt,et));let nt=new T(w*et,it*et,K*et).applyMatrix4(U);return u.v([nt.x,nt.y,nt.z],h(ct,(K+1)/2,Ze(w*2+Y,it*2+K)))}));W.dispose()}s.add(new At(u.geo(),be())),s.add(new At(d.geo(),be({flat:!1})),new At(m.geo(),be()));let q=new At(g.geo(),$n([1,.92,.75],.75*Math.min(1.6,n)));q.name="centre-pattern",s.add(q,new At(_.geo(),$n([1,.92,.75],.75*Math.min(1.6,n)))),s.add(new At(f.geo(),$n([1,.3,.1],1.1*Math.min(1.4,n))));let V=me(e.body_az),J=be({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),mt=[0,1].map(()=>{let I=e.grass_tip[0],Q=-1,B=ro({r,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:ct=>{let Y=1-.55*Wt((ct-13)/34);return[.03*Y,.1*Y,.1*Y]},tip:(ct,Y)=>(ct!==Q&&(Q=ct,I=jt(e.grass_tip[0],e.grass_tip[1],r.random())),Me(jt(I,e.grass_rim,.3*Math.abs(Math.cos(Y-V))*(i==="night"?.5:1)),1-.55*Wt((ct-13)/34)))}),j=new At(B,J);return j.morphTargetInfluences=[0],s.add(j),j});{let I=new ne;for(let Q=0;Q<(t?40:70);Q++){let B=14+22*r.random(),j=r.uniform(0,2*Math.PI),ct=B*Math.cos(j),Y=B*Math.sin(j),R=c(ct,Y),S=r.uniform(.35,.7),D=[ct+r.uniform(-.06,.06),Y+r.uniform(-.06,.06),R+S];I.f(I.v([ct-.012,Y,R],[.02,.07,.05]),I.v([ct+.012,Y,R],[.02,.07,.05]),I.v([D[0]+.012,D[1],D[2]],[.08,.25,.12]),I.v([D[0]-.012,D[1],D[2]],[.08,.25,.12]));let W=r.choice(e.flower),H=I.v([D[0],D[1],D[2]+.02],[1,.9,.5]),U=Array.from({length:6},(X,Z)=>{let G=2*Math.PI*Z/6;return I.v([D[0]+.05*Math.cos(G),D[1]+.05*Math.sin(G),D[2]+.025],W)});for(let X=0;X<6;X++)I.f(H,U[X],U[(X+1)%6])}s.add(new At(I.geo(),be({emit:e.flower_emit,double:!0})))}let $=Bi({r,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let I=r.uniform(0,6.283),Q=r.uniform(4,26);return[Q*Math.cos(I),Q*Math.sin(I),r.uniform(1.5,10)]},move:()=>[r.uniform(-1,1),0,r.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&s.add($.obj);let lt=Fi({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return s.add(lt.group),{group:s,floor:hs,update(I){lt.update(I),mt.forEach((Y,R)=>{Y.morphTargetInfluences[0]=Nn(I,45,0,1,R)});let Q=I%3600,B=Math.floor(Q/8),j=(Q-B*8)/8,ct=j*j*(3-2*j);for(let Y of A){let R=Y.keys[B%450],S=Y.keys[(B+1)%450];Y.m.scale.set(R[0]+(S[0]-R[0])*ct,R[1]+(S[1]-R[1])*ct,R[2]+(S[2]-R[2])*ct)}$.update(I)},key:{dir:Un(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:Me(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,hs+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,hs+.5],color:[1,.5,.2],intensity:.35,dist:8},...y],dispose(){lt.dispose(),ki(s)}}}var Nu={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function md(i,t){let e=i==="night"?Nu.NIGHT:i==="day"?{...zi(Nu.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:Nu.SUNSET,n=e.emit,r=n*.75,s=Rn(21),o=Rn(77),a=new Xt,c=[Un(e.body_az,e.body_el)],l=ur(e,c),h=me(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(H=>Nr(H,e.exposure)),d=e.stone,m=Fi({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(H,U)=>{let X=Math.hypot(H,U),Z=jt(e.water_lo,e.water_hi,Wt(hn(H*.05+2,U*.05,3)*1.2-.15)),G=Math.exp(-(((X-9.9)/3)**2))*.12*.75;return Z=[Z[0]+e.glow_col[0]*G,Z[1]+e.glow_col[1]*G,Z[2]+e.glow_col[2]*G],jt(Z,Me(u,.5),De(32,150,X)**1.2)},_;{let H=new ne(!1,2),U=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],X=t?48:72,Z=U.map(w=>Array.from({length:X},(it,K)=>{let tt=w*Math.cos(2*Math.PI*K/X),et=w*Math.sin(2*Math.PI*K/X),nt=De(9,13,w)*Math.exp(-w/90);return H.v([tt,et,0],g(tt,et),[[0,0,.06*Math.sin(.45*tt+.33*et)*nt],[0,0,.06*Math.sin(.38*tt-.41*et+2)*nt]])}));for(let w=0;w<U.length-1;w++)for(let it=0;it<X;it++){let K=(it+1)%X;H.f(Z[w][it],Z[w+1][it],Z[w+1][K],Z[w][K])}let G=new Zs({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:iu});_=new At(H.geo(),G),_.morphTargetInfluences=[0,0],a.add(_)}let f=[];[.35,.9,1.7].slice(0,t?2:3).forEach((H,U)=>{let X=new ne(!0),Z=[10.5,12,15,19,24,30,38,48,60],G=48,w=Z.map(tt=>Array.from({length:G},(et,nt)=>{let rt=2*Math.PI*nt/G,P=tt*Math.cos(rt),E=tt*Math.sin(rt),F=e.mist_a*Wt((hn(P*.07+U*9,E*.07,3)-.38)*2.6)*De(0,3,tt-10.5)*De(0,15,60-tt);return X.v([P,E,H+.12*Math.sin(.3*P+U)],[...e.mist_col,F])}));for(let tt=0;tt<Z.length-1;tt++)for(let et=0;et<G;et++){let nt=(et+1)%G;X.f(w[tt][et],w[tt+1][et],w[tt+1][nt],w[tt][nt])}let it=new cn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Fe,toneMapped:!1});it.color.setScalar(1+.7);let K=new At(X.geo(),it);K.renderOrder=3,a.add(K),f.push({m:K,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Fr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let p=new ne,M=new ne,x=[];for(let H of[45,135,225,315]){let U=me(H),X=o.uniform(1.6,2.6),Z=o.choice(d),G=o.uniform(0,50),w=9.35*Math.cos(U),it=9.35*Math.sin(U),K=10,tt=.3,et=[],nt=[],rt=Array.from({length:K},()=>tt+X-o.uniform(0,.45));for(let yt=0;yt<K;yt++){let Ut=2*Math.PI*yt/K,Mt=o.uniform(-.05,.05),Lt=o.uniform(-.05,.05),Yt=o.uniform(-.05,.05),Nt=o.uniform(-.05,.05),Ct=[w+.62*Math.cos(Ut)+Mt,it+.62*Math.sin(Ut)+Lt,tt],Ot=[w+.5*Math.cos(Ut)+Yt,it+.5*Math.sin(Ut)+Nt,rt[yt]];et.push(p.v(Ct,Oi(Z,0,Ct[0]-w,Ct[1]-it,G,e.moss))),nt.push(p.v(Ot,Oi(Z,(Ot[2]-tt)/X,Ot[0]-w,Ot[1]-it,G,e.moss)))}for(let yt=0;yt<K;yt++){let Ut=(yt+1)%K;p.f(et[yt],et[Ut],nt[Ut],nt[yt])}p.f(...nt);let P=w-.55*Math.cos(U),E=it-.55*Math.sin(U),F=U-Math.PI/2,ot=Math.cos(F),dt=Math.sin(F),st=.06,Tt=X*.45/2,vt=.3+X*.5;M.f(...[[-st,-.03,-Tt],[st,-.03,-Tt],[st,-.03,Tt],[-st,-.03,Tt]].map(([yt,Ut,Mt])=>M.v([P+yt*ot-Ut*dt,E+yt*dt+Ut*ot,vt+Mt],[1,1,1]))),x.push([w,it,.3+X])}let b=(H,U,X,Z,G,w,it,K)=>{let tt=o.uniform(0,50),et=Math.cos(it),nt=Math.sin(it),rt=new Map,P=(E,F,ot)=>{let dt=E*Z+o.uniform(-.03,.03),st=F*G+o.uniform(-.03,.03),Tt=ot*w;return p.v([H+dt*et-st*nt,U+dt*nt+st*et,X+Tt],Oi(K,ot+.5,dt,st,tt,e.moss))};for(let E of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...E.map(([F,ot,dt])=>P(F,ot,dt)))};for(let H of[270,90])for(let U=0;U<5;U++){let X=11+U*1.7+o.uniform(-.2,.2),Z=me(H+o.uniform(-5,5)),G=o.uniform(1.2,1.7);b(X*Math.cos(Z),X*Math.sin(Z),-.13,G,G*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(d))}for(let H=0;H<12;H++){let U=o.uniform(0,2*Math.PI);Math.min(Math.abs(na(U,Math.PI/2)),Math.abs(na(U,3*Math.PI/2)))<.18&&(U+=.5);let X=o.uniform(10.5,15),Z=o.uniform(.7,1.8),G=o.choice(d),w=o.uniform(0,50),it=o.uniform(0,6.28),K=new Mn(1,1),tt=K.attributes.position,et=new ue().compose(new T(X*Math.cos(U),X*Math.sin(U),.05),new Qe().setFromAxisAngle(new T(0,0,1),it),new T(Z,Z*.9,Z*.7));for(let nt=0;nt<tt.count;nt+=3)p.f(...[0,1,2].map(rt=>{let P=new T(tt.getX(nt+rt),tt.getY(nt+rt),tt.getZ(nt+rt)),E=P.z;return P.applyMatrix4(et),p.v([P.x,P.y,P.z],Oi(G,(E+1)/2,tt.getX(nt+rt),tt.getY(nt+rt),w,e.moss))}));K.dispose()}a.add(new At(p.geo(),be()),new At(M.geo(),$n(e.rune_col,1.4*r)));let L=(()=>{let H=new T(.8,.6,0).normalize();return[H.x,H.y,0]})(),C=me(e.body_az),A=[Math.cos(C),Math.sin(C)],k=[],O=(H,U,X)=>{for(let Z=0;Z<300;Z++){let G=s.uniform(0,360);if(X&&G>245&&G<295)continue;let w=s.uniform(H,U),it=w*Math.cos(me(G)),K=w*Math.sin(me(G));if(k.every(([tt,et])=>Math.hypot(it-tt,K-et)>6))return k.push([it,K]),[it,K]}return null},y=be({morph:!0}),v=[],q=[],V=[],J=t?6:9,mt=t?4:7;for(let H=0;H<J+mt;H++){let U=H<J,X=U?O(16,32,!0):O(38,62,!1);if(!X)continue;let Z=U?s.uniform(9,15):s.uniform(16,24),G=U?s.uniform(.28,.42):s.uniform(.5,.8),w=new At($(X[0],X[1],Z,G),y);w.morphTargetInfluences=[0],a.add(w),v.push({m:w,P:s.choice([100,120,150,180,200]),flip:s.int(0,1)}),q.push(X),V.push([X[0],X[1],2.2*G+.7])}function $(H,U,X,Z){let G=new ne(!1,1),w=new T(-H,-U,0).normalize(),it=s.uniform(.6,1.4),K=new T(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.02,.07)),tt=s.uniform(0,6.28),et=yt=>new T(H+K.x*yt+.25*Math.sin(.5*yt+tt),U+K.y*yt+.25*Math.cos(.4*yt+tt),yt),nt=yt=>{let Ut=Math.max(yt,0);return Z*(1-.55*Wt(Ut/X))*(1+.7*Math.exp(-Ut/.8))},rt=(yt,Ut,Mt=0)=>{let Lt=it*Wt(Math.max(yt.z,0)/X)**2+Mt;return G.v([yt.x,yt.y,yt.z],Ut,[[L[0]*Lt,L[1]*Lt,0]])},P=(yt,Ut)=>{let Mt=new T(yt.x,yt.y,0);Mt.lengthSq()>1e-12&&Mt.normalize();let Lt=jt(e.bark_dark,e.bark_lit,.6*Math.max(0,Mt.x*w.x+Mt.y*w.y));return Lt=jt(Lt,e.bark_rim,Wt(e.bark_rim_k*Math.max(0,Mt.x*A[0]+Mt.y*A[1])*(1-.4*Wt(Ut/X)))),jt(Lt,e.moss,Wt(1-Ut/1.8)*.6*Ze(yt.x*3+H,Ut*.8+U))},E=(yt,Ut,Mt,Lt,Yt)=>{let Nt=yt.length,Ct=yt.map((ie,at)=>yt[Math.min(at+1,Nt-1)].clone().sub(yt[Math.max(at-1,0)]).normalize()),Ot=Ct[0].clone().cross(Math.abs(Ct[0].z)>.9?new T(1,0,0):new T(0,0,1)).normalize(),Kt=yt.map((ie,at)=>{let Gt=Ct[at];Ot=Ot.clone().addScaledVector(Gt,-Ot.dot(Gt)).normalize();let Et=Gt.clone().cross(Ot);return Array.from({length:Mt},(It,Ft)=>{let Vt=2*Math.PI*Ft/Mt,ge=Ot.clone().multiplyScalar(Math.cos(Vt)).addScaledVector(Et,Math.sin(Vt));return rt(ie.clone().addScaledVector(ge,Ut[at]),Lt(at,ge),Yt?Yt(at):0)})});for(let ie=0;ie<Nt-1;ie++)for(let at=0;at<Mt;at++){let Gt=(at+1)%Mt;G.f(Kt[ie][at],Kt[ie][Gt],Kt[ie+1][Gt],Kt[ie+1][at])}},F=11,ot=8,dt=Array.from({length:F},(yt,Ut)=>{let Mt=-.4+(X+.4)*Ut/(F-1),Lt=et(Mt);return Array.from({length:ot},(Yt,Nt)=>{let Ct=2*Math.PI*Nt/ot,Ot=new T(Math.cos(Ct),Math.sin(Ct),0);return rt(Lt.clone().addScaledVector(Ot,nt(Mt)*(1+.06*Math.sin(3*Ct+Mt))),P(Ot,Mt))})});for(let yt=0;yt<F-1;yt++)for(let Ut=0;Ut<ot;Ut++){let Mt=(Ut+1)%ot;G.f(dt[yt][Ut],dt[yt][Mt],dt[yt+1][Mt],dt[yt+1][Ut])}G.f(...dt[F-1]);let st=[],Tt=s.int(3,5);for(let yt=0;yt<Tt;yt++){let Ut=X*s.uniform(.42,.9),Mt=s.uniform(0,6.28),Lt=new T(Math.cos(Mt),Math.sin(Mt),0),Yt=et(Ut).addScaledVector(Lt,nt(Ut)*.6),Nt=Lt.clone().add(new T(0,0,s.uniform(.5,1.1))).normalize(),Ct=s.uniform(2,5)*(X/12)*(1.1-.5*Ut/X),Ot=Array.from({length:6},(ie,at)=>Yt.clone().addScaledVector(Nt,Ct*(at/5)).add(new T(0,0,-.12*Ct*(at/5)**2))),Kt=nt(Ut)*.4;E(Ot,Ot.map((ie,at)=>Kt*(1-.88*at/5)+.01),5,(ie,at)=>P(at,Ot[ie].z)),st.push(...Ot.slice(2,5))}let vt=s.int(4,8);for(let yt=0;yt<vt;yt++){let Ut=s.choice(st),Mt=s.uniform(.8,2.2),Lt=s.uniform(0,6.28),Yt=Array.from({length:6},(Nt,Ct)=>Ut.clone().add(new T(.06*Math.sin(Lt+Ct)*Ct/5,.06*Math.cos(Lt+Ct*.8)*Ct/5,-Mt*Ct/5)));E(Yt,Yt.map((Nt,Ct)=>.022*(1-.8*Ct/5)+.003),3,Nt=>jt(e.vine_a,e.vine_b,Nt/5),Nt=>.45*(Nt/5)**1.5)}return G.geo()}{let H=new ne,U=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[X,Z,G]of V){let w=U.map(([K,tt])=>Array.from({length:14},(et,nt)=>{let rt=2*Math.PI*nt/14,P=G*K*(1+.12*Math.sin(3*rt+X)),E=[X+P*Math.cos(rt),Z+P*Math.sin(rt),tt+.05*Math.sin(5*rt+Z)];return H.v(E,jt(e.mud,e.moss,Wt(.3+.6*Ze(E[0]*.8,E[1]*.8))))})),it=H.v([X,Z,.52],e.moss);for(let K=0;K<w.length-1;K++)for(let tt=0;tt<14;tt++){let et=(tt+1)%14;H.f(w[K][tt],w[K][et],w[K+1][et],w[K+1][tt])}for(let K=0;K<14;K++)H.f(it,w[w.length-1][K],w[w.length-1][(K+1)%14])}a.add(new At(H.geo(),be()))}let lt=be({morph:!0,double:!0}),I=[0,1].map(H=>{let U=new ne(!1,1),X=(t?160:300)/2,Z=(K,tt,et,nt,rt)=>Array.from({length:et},(P,E)=>{let F=2*Math.PI*E/et;return U.v([K[0]+tt*Math.cos(F),K[1]+tt*Math.sin(F),K[2]],nt,[[L[0]*rt,L[1]*rt,0]])}),G=(K,tt)=>{for(let et=0;et<K.length;et++){let nt=(et+1)%K.length;U.f(K[et],K[nt],tt[nt],tt[et])}},w=0;for(;w<X;){let K,tt;if(q.length&&o.random()<.6){let[st,Tt]=o.choice(q),vt=o.uniform(0,6.283),yt=o.uniform(1,4.5);K=st+yt*Math.cos(vt),tt=Tt+yt*Math.sin(vt)}else{let st=o.uniform(0,6.283),Tt=o.uniform(11.5,48);K=Tt*Math.cos(st),tt=Tt*Math.sin(st)}if(Math.hypot(K,tt)<11)continue;w++;let et=o.uniform(1.2,3),nt=o.uniform(-.25,.25)*et*.5,rt=o.uniform(-.25,.25)*et*.5,P=st=>[K+nt*st*st,tt+rt*st*st,-.3+(et+.3)*st],E=st=>.12*et*st*st,F=[0,.37,.74].map(st=>Z(P(st),.018-.008*st,3,e.reed,E(st)));G(F[0],F[1]),G(F[1],F[2]);let ot=[[.75,.012],[.83,.055],[.92,.045]].map(([st,Tt])=>Z(P(st),Tt,5,e.cat,E(st)));G(ot[0],ot[1]),G(ot[1],ot[2]);let dt=U.v(P(1),e.cat,[[L[0]*E(1),L[1]*E(1),0]]);for(let st=0;st<5;st++)U.f(ot[2][st],ot[2][(st+1)%5],dt)}let it=new At(U.geo(),lt);return it.morphTargetInfluences=[0],a.add(it),it});{let H=new ne;for(let U=0;U<(t?36:60);U++){let X=o.uniform(0,6.283),Z=o.uniform(11.5,44),G=Z*Math.cos(X),w=Z*Math.sin(X),it=o.uniform(.3,.7),K=o.int(0,11),tt=o.choice(e.lily),et=H.v([G,w,.04],tt),nt=Array.from({length:12},(rt,P)=>{let E=2*Math.PI*P/12;return H.v([G+it*Math.cos(E),w+it*.9*Math.sin(E),.04],Me(tt,.8))});for(let rt=0;rt<12;rt++)rt!==K&&H.f(et,nt[rt],nt[(rt+1)%12])}a.add(new At(H.geo(),be({double:!0})))}let Q=new ne(!1,1),B=new ne;for(let H=0;H<8;H++){let U=o.uniform(0,6.283),X=o.uniform(12,36),Z=o.uniform(0,6.283),G=new T(X*Math.cos(U),X*Math.sin(U),.05),w=new ue().makeRotationZ(Z),it=new Mn(1,1),K=it.attributes.position,tt=new ue().makeTranslation(G.x,G.y,G.z).multiply(w).multiply(new ue().makeScale(.22,.3,.13));for(let et=0;et<K.count;et+=3)B.f(...[0,1,2].map(nt=>{let rt=new T(K.getX(et+nt),K.getY(et+nt),K.getZ(et+nt)).applyMatrix4(tt);return B.v([rt.x,rt.y,rt.z],[.008,.012,.009])}));it.dispose();for(let et of[-1,1]){let nt=G.clone().add(new T(et*.09,.12,.12).applyMatrix4(w)),P=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(E=>Q.v([nt.x+E[0]*.035,nt.y+E[1]*.035,nt.z+E[2]*.035],[1,1,1],[[0,0,E[2]*.035*(.08-1)]]));for(let[E,F]of[[0,2],[2,1],[1,3],[3,0]])Q.f(P[E],P[F],P[4]),Q.f(P[F],P[E],P[5])}}a.add(new At(B.geo(),be()));let j=new At(Q.geo(),$n(e.eye_col,1.8));j.morphTargetInfluences=[0],a.add(j);let ct=Array.from({length:Math.floor(3480/20)},(H,U)=>60+U*20),Y=[];for(let H=0;H<6;H++)Y.push(ct.splice(o.int(0,ct.length-1),1)[0]);{let H=new ne;[[70,46,14,22],[95,58,18,30]].forEach(([U,X,Z,G],w)=>{let it=jt(e.back_col,u,.55+.2*w);for(let K=0;K<X;K++){let tt=2*Math.PI*(K+s.uniform(-.4,.4))/X+w*.5,et=[U*Math.cos(tt),U*Math.sin(tt)],nt=[-Math.sin(tt),Math.cos(tt)],rt=s.uniform(Z,G),P=s.uniform(.35,.9)*(1+.5*w),E=s.uniform(0,6.28),F=s.uniform(-.06,.06),ot=st=>{let Tt=-2+(rt+2)*st,vt=Math.sin(st*3+E)*.5+F*Tt;return[et[0]+nt[0]*vt,et[1]+nt[1]*vt,Tt]},dt=Array.from({length:6},(st,Tt)=>{let vt=Tt/5,yt=P*(1-.5*vt),Ut=jt(it,u,Wt(vt*vt*.9)),Mt=ot(vt);return[H.v([Mt[0]-nt[0]*yt/2,Mt[1]-nt[1]*yt/2,Mt[2]],Ut),H.v([Mt[0]+nt[0]*yt/2,Mt[1]+nt[1]*yt/2,Mt[2]],Ut)]});for(let st=0;st<5;st++)H.f(dt[st][0],dt[st][1],dt[st+1][1],dt[st+1][0]);for(let st of[-1,1]){let Tt=ot(s.uniform(.55,.8)),vt=[Tt[0]+nt[0]*st*rt*.16,Tt[1]+nt[1]*st*rt*.16,Tt[2]+rt*.12],yt=jt(it,u,.6);H.f(H.v([Tt[0],Tt[1],Tt[2]-.1],yt),H.v([Tt[0],Tt[1],Tt[2]+.1],yt),H.v([vt[0],vt[1],vt[2]+.04],yt),H.v([vt[0],vt[1],vt[2]-.04],yt))}}}),a.add(new At(H.geo(),Ni({fog:!1})))}let R=[];for(let H=0;H<Math.round(14*e.orb_k*(t?.6:1));H++){let U=o.uniform(0,6.283),X=o.uniform(12,42);R.push({p:[X*Math.cos(U),X*Math.sin(U),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[H,U,X]of x)R.push({p:[H,U,X+.9],k:1.4,amp:o.uniform(.15,.4)});let S=Bc({list:R,col:e.orb_col,gain:1.2});a.add(S.group);let D=Bi({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let H=o.uniform(0,6.283),U=o.uniform(4,44);return[U*Math.cos(H),U*Math.sin(H),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(D.obj);let W=new ne(!0);return so(W,9.4,.7,(H,U)=>{let X=Math.hypot(H,U);return X<.01?1:De(0,3,9.4-X)*(.7+.3*Ze(X*.4,Math.atan2(U,H)*6.4))},e.wash_col,.28*.5),a.add(new At(W.geo(),ls())),{group:a,floor:.6,update(H){m.update(H);for(let Z of v)Z.m.morphTargetInfluences[0]=Nn(H,Z.P/2,.15,1,Z.flip);I.forEach((Z,G)=>{Z.morphTargetInfluences[0]=Nn(H,60,0,1,G)}),_.morphTargetInfluences[0]=Nn(H,90,0,1,0),_.morphTargetInfluences[1]=Nn(H,90,0,1,1);let U=Math.sin(H%3600/3600*Math.PI);for(let Z of f)Z.m.rotation.z=Z.s*U;let X=0;for(let Z of Y)Math.abs(H%3600-Z)<3&&(X=1-Math.abs(H%3600-Z)/3);j.morphTargetInfluences[0]=X,S.update(H),D.update(H)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:Me(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...x.map(H=>({pos:[H[0],H[1],H[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),ki(a)}}}var Fu={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},Wn=24,Xx=Wn+1.6,qx=160;function gd(i,t){let e=i==="night"?Fu.NIGHT:i==="day"?{...zi(Fu.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:Fu.SUNSET,n=e.emit,r=n*.75,s=Rn(31),o=Rn(55),a=new Xt,c=[Un(e.body_az,e.body_el)],l=ur(e,c),h=me(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(B=>Nr(B,e.exposure)),d=me(e.body_az),m=(()=>{let B=new T(.8,.6,0).normalize();return[B.x,B.y,0]})(),g=e.stone,_=Fi({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let f=B=>Xx*(1+.25*(1-Math.exp(B/60))),p=(B,j)=>.12*Math.sin(B*.33)*Math.cos(j*.29)*De(8,14,Math.hypot(B,j)),M=(B,j)=>jt(jt(e.earth_a,e.earth_b,Wt(hn(B*.12+5,j*.12-3,3)*1.4-.2)),e.moss,Wt((Ze(B*.4,j*.4)-.62)*3)*.6);{let B=new ne,j=[8,10,12,14,16,18,20,22,Wn-1,Wn,Wn+.6,Wn+1.2,Wn+1.6],ct={[Wn+.6]:.3,[Wn+1.2]:.15,[Wn+1.6]:-.4},Y=72,R=j.map(S=>Array.from({length:Y},(D,W)=>{let H=2*Math.PI*W/Y,U=S*Math.cos(H),X=S*Math.sin(H);return B.v([U,X,ct[S]??p(U,X)],S<=Wn+.01?M(U,X):jt(e.bark,e.moss,.5+.3*Ze(U*.5,X*.5)))}));for(let S=0;S<j.length-1;S++)for(let D=0;D<Y;D++){let W=(D+1)%Y;B.f(R[S][D],R[S+1][D],R[S+1][W],R[S][W])}a.add(new At(B.geo(),be({flat:!1})))}{let B=new ne,j=t?28:40,ct=t?48:72,Y=Array.from({length:j},(R,S)=>{let D=-.4-qx*(S/(j-1))**1.6;return Array.from({length:ct},(W,H)=>{let U=2*Math.PI*H/ct,X=f(D)*(1+.04*Math.sin(14*U+.8*Math.sin(.05*D))+.025*Math.sin(5*U+.02*D)),Z=Math.sin(14*U+.8*Math.sin(.05*D)),G=jt(e.bark,e.bark_hi,Wt(.5+.5*Z)*.5);G=jt(G,e.bark_hi,.4*Math.max(0,Math.cos(U-d))),G=jt(G,e.moss,Wt(1+D/25)*Wt((Ze(U*3,D*.15)-.4)*2.5)*.8);let w=Math.abs(Math.sin(7*U+1.5*Math.sin(.04*D+3*U)));return G=jt(G,e.vein,Wt(1-w*7)*(.4+.6*Ze(D*.05,U*2))*.9),B.v([X*Math.cos(U),X*Math.sin(U),D],jt(G,Me(u,.6),Wt((-D-15)/110)**1.2))})});for(let R=0;R<j-1;R++)for(let S=0;S<ct;S++){let D=(S+1)%ct;B.f(Y[R][S],Y[R+1][S],Y[R+1][D],Y[R][D])}a.add(new At(B.geo(),be({emit:.3,flat:!1})))}let x=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([B,j],ct)=>{let Y=new ne(!0),R=f(B)-.3,S=[R,R+4,R+10,R+20,R+32,R+46,R+64,R+84,R+106,150],D=64,W=S.map(X=>Array.from({length:D},(Z,G)=>{let w=2*Math.PI*G/D,it=X*Math.cos(w),K=X*Math.sin(w),tt=j*(.55+.45*hn(it*.03+ct*7,K*.03,3))*De(0,6,X-R);return Y.v([it,K,B],[...jt(e.sea_col,u,De(60,150,X)),tt])}));for(let X=0;X<S.length-1;X++)for(let Z=0;Z<D;Z++){let G=(Z+1)%D;Y.f(W[X][Z],W[X+1][Z],W[X+1][G],W[X][G])}let H=new cn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Fe,fog:!1,toneMapped:!1});H.color.setScalar(1.7);let U=new At(Y.geo(),H);U.renderOrder=2,a.add(U),x.push({m:U,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Fr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let b=new ne,L=new ne,C=[];for(let B of[0,60,120,180,240,300]){let j=me(B),ct=12.5,Y=o.uniform(5,8),R=1.8,S=1.2,D=ct*Math.cos(j),W=ct*Math.sin(j),H=-.4,U=j-Math.PI/2,X=Math.cos(U),Z=Math.sin(U),G=o.choice(g),w=o.uniform(0,50),it=new Map,K=(rt,P,E)=>{let F=`${rt},${P},${E}`,ot=it.get(F);ot||(ot=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],it.set(F,ot));let dt=rt*R,st=P*S,Tt=(E+.5)*Y;if(Tt>Y*.5){let yt=1-.18*((Tt-Y*.5)/(Y*.5));dt*=yt,st*=yt}dt+=ot[0],st+=ot[1];let vt=Tt+ot[2];return b.v([D+dt*X-st*Z,W+dt*Z+st*X,H+vt],Oi(G,vt/Y,dt,vt*.7,w,e.moss))},tt=4,et=rt=>-.5+rt/tt,nt=rt=>{for(let P=0;P<tt;P++)for(let E=0;E<tt;E++)b.f(K(...rt(P,E)),K(...rt(P+1,E)),K(...rt(P+1,E+1)),K(...rt(P,E+1)))};nt((rt,P)=>[et(rt),-.5,et(P)]),nt((rt,P)=>[et(P),.5,et(rt)]),nt((rt,P)=>[-.5,et(P),et(rt)]),nt((rt,P)=>[.5,et(rt),et(P)]),nt((rt,P)=>[et(P),et(rt),.5]);for(let[rt,P,E]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let F=-S/2-.02,ot=Y*rt,dt=D-F*Z,st=W+F*X;L.f(...[[-P/2,-E/2],[P/2,-E/2],[P/2,E/2],[-P/2,E/2]].map(([Tt,vt])=>L.v([dt+Tt*X,st+Tt*Z,H+ot+vt],[1,1,1])))}C.push([D,W,Y-.4])}a.add(new At(b.geo(),be()),new At(L.geo(),$n(e.rune_col,1.4*r)));let A=(B,j,ct,Y,R,S,D,W,H=!0)=>{let U=Array.from({length:D},(Z,G)=>{let w=Math.PI/2*G/D,it=G/D;return Array.from({length:S},(K,tt)=>{let et=2*Math.PI*tt/S,nt=.1*it*it*R;return B.v([j[0]+ct*Math.cos(w)*Math.cos(et),j[1]+Y*Math.cos(w)*Math.sin(et),j[2]+R*Math.sin(w)],W(it,et),H?[[m[0]*nt,m[1]*nt,0]]:void 0)})}),X=B.v([j[0],j[1],j[2]+R],W(1,0),H?[[m[0]*.1*R,m[1]*.1*R,0]]:void 0);for(let Z=0;Z<D-1;Z++)for(let G=0;G<S;G++){let w=(G+1)%S;B.f(U[Z][G],U[Z][w],U[Z+1][w],U[Z+1][G])}for(let Z=0;Z<S;Z++)B.f(U[D-1][Z],U[D-1][(Z+1)%S],X)},k=(B,j,ct,Y,R)=>{let S=new ne(!1,1);for(let[W,H,U,X]of B){let Z=o.uniform(.85,1.15),G=p(W,H)-.2,w=(it,K)=>Me(jt(j,ct,Wt(it*(.75+.25*Math.cos(K-d)))**.9),Z);for(let it=0;it<X;it++){let K=o.uniform(0,6.283),tt=it?o.uniform(0,.6)*U:0,et=U*o.uniform(.7,1);A(S,[W+tt*Math.cos(K),H+tt*Math.sin(K),G],et,et,et*.85,Y,R,w)}}let D=new At(S.geo(),be({flat:!1,morph:!0}));return D.morphTargetInfluences=[0],a.add(D),D},O=[];for(let B=0;O.length<(t?40:70)&&B<3e3;B++){let j=o.uniform(0,2*Math.PI),ct=o.uniform(11.5,Wn-1.5);if(j*180/Math.PI%360>255&&j*180/Math.PI%360<285&&ct>15)continue;let Y=ct*Math.cos(j),R=ct*Math.sin(j);C.some(([S,D])=>Math.hypot(Y-S,R-D)<2.8)||O.push([Y,R,o.uniform(1,2.2),o.int(2,4)])}let y=k(O,e.bush_lo,e.bush_hi,12,3),v=Array.from({length:30},(B,j)=>{let ct=2*Math.PI*(j+o.uniform(-.3,.3))/30,Y=Wn-.6+o.uniform(-.8,.8);return[Y*Math.cos(ct),Y*Math.sin(ct),o.uniform(2,3.5),2]}),q=k(v,e.hedge_lo,e.hedge_hi,16,4);{let B=new ne;[62,85,112,140].forEach((j,ct)=>{let Y=1+.25*ct;for(let R=0;R<(t?12:20);R++){let S=2*Math.PI*(R+s.uniform(-.4,.4))/20+ct*.4,D=j+s.uniform(-6,6);for(let W=0;W<2;W++){let H=W?s.uniform(-9,9):0,U=D*Math.cos(S)-H*Math.sin(S),X=D*Math.sin(S)+H*Math.cos(S),Z=s.uniform(9,16)*Y*(W?.7:1),G=s.uniform(28,46)*Y*(W?.75:1),w=.35+.15*ct,it=s.uniform(.85,1.15);A(B,[U,X,-30],Z,Z,G,14,7,K=>jt(Me(e.can_col,it),Me(u,.7),Wt(w+.25*K)),!1)}}}),a.add(new At(B.geo(),be({emit:.85,flat:!1})))}let V=[];for(let B=0;B<Math.round(18*e.orb_k*(t?.6:1));B++){let j=o.uniform(0,6.283),ct=10.5+(Wn-8.5)*Math.sqrt(o.random());V.push({p:[ct*Math.cos(j),ct*Math.sin(j),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[B,j,ct]of C)V.push({p:[B,j,ct+.9],k:1.4,amp:o.uniform(.15,.4)});let J=Bc({list:V,col:e.orb_col,gain:1.2});a.add(J.group);let mt=Math.round(160*e.fire_k*(t?.5:1)),$=Math.round(40*e.fire_k*(t?.5:1)),lt=0,I=Bi({r:o,n:mt+$,at:()=>{if(lt++<mt){let ct=o.uniform(0,6.283),Y=(Wn+4)*Math.sqrt(o.random());return[Y*Math.cos(ct),Y*Math.sin(ct),.3+8.7*o.random()**1.6]}let B=o.uniform(0,6.283),j=o.uniform(Wn+2,Wn+14);return[j*Math.cos(B),j*Math.sin(B),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});mt+$>0&&a.add(I.obj);let Q=new ne(!0);return so(Q,9.4,.7,(B,j)=>{let ct=Math.hypot(B,j);return ct<.01?1:De(0,3,9.4-ct)*(.7+.3*Ze(ct*.4,Math.atan2(j,B)*6.4))},e.wash_col,.28*.5),a.add(new At(Q.geo(),ls())),{group:a,floor:.6,update(B){_.update(B),y.morphTargetInfluences[0]=Nn(B,60,.15,1,1),q.morphTargetInfluences[0]=Nn(B,90,.15,1,1);let j=Math.sin(B%3600/3600*Math.PI);for(let ct of x)ct.m.rotation.z=ct.s*j;J.update(B),I.update(B)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:Me(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...C.slice(0,4).map(B=>({pos:[B[0],B[1],B[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),ki(a)}}}var Yx={forest:dd,plains:pd,swamp:md,worldtree:gd,castle:fd};function Ou(i,t,e){let n=Yx[i];return n?n(t,e):null}var ia=(i,t,e)=>i+(t-i)*e,Zx=new T(0,-1,0),$x=i=>{let t=i.staffLean??.3;return new T(0,Math.cos(t),Math.sin(t))},zc=new Qe,_d=new Qe;function Bu(i,t,e,n){let r=i.parent;t.updateMatrixWorld(!0);let o=r.worldToLocal(t.localToWorld(e.clone())).sub(i.position).normalize();zc.setFromUnitVectors(Zx,o),i.quaternion.slerp(zc,n)}function yd(i,t,e){i.root.updateMatrixWorld(!0),i.staffPivot.parent.getWorldQuaternion(_d).invert(),i.root.getWorldQuaternion(zc);let r=new Qe().setFromUnitVectors($x(i),t.clone().normalize()).premultiply(zc).premultiply(_d);i.staffPivot.quaternion.slerp(r,e)}var Kx=i=>i*i*(3-2*i);function Md(i,t,e,n){let r=Kx(Math.max(0,Math.min(1,e))),[s,o]=i.legs??[];if((()=>{i.root.position.y=0;for(let u of i.legs??[])u.hip.rotation.set(0,0,0),u.knee.rotation.set(0,0,0);i.staffPivot.rotation.y=0,i.staffPivot.rotation.z=Jx(i),i.leftArm&&i.leftArm.rotation.set(ra.x(i),0,ra.z(i))})(),t==="none"||r<=.001)return;let c=Math.sin(n*1.7)*.05,l=u=>{i.root.position.y=(u+c)*r},h=(u=0)=>{Bu(i.arm,i.body,new T(.03,1.02+u,.3),r),i.leftArm&&Bu(i.leftArm,i.body,new T(-.01,1.24+u,.32),r),yd(i,new T(0,1,.04),r)};if(t==="float")l(.32),s&&(s.hip.rotation.x=-.32*r,s.knee.rotation.x=1.15*r),o&&(o.hip.rotation.x=-.06*r,o.knee.rotation.x=.18*r),i.leftArm&&(i.leftArm.rotation.z=ia(ra.z(i),-.55,r));else if(t==="aim"){i.body.rotation.y=ia(i.body.rotation.y,-1.2,r),i.head.rotation.y=ia(i.head.rotation.y,1.05,r),i.root.updateMatrixWorld(!0);let u=i.body.worldToLocal(i.root.localToWorld(new T(.3,1,2)));Bu(i.arm,i.body,u,r),yd(i,new T(0,.12,1),r),i.leftArm&&(i.leftArm.rotation.x=ia(ra.x(i),.25,r),i.leftArm.rotation.z=ia(ra.z(i),-.35,r)),s&&(s.hip.rotation.x=.22*r),o&&(o.hip.rotation.x=-.2*r)}else t==="twohand"&&h()}var xd=new WeakMap,Vc=i=>{let t=xd.get(i);return t||(t={staffZ:i.staffPivot.rotation.z,leftX:i.leftArm?.rotation.x??-.38,leftZ:i.leftArm?.rotation.z??-.15},xd.set(i,t)),t},Jx=i=>Vc(i).staffZ,ra={x:i=>Vc(i).leftX,z:i=>Vc(i).leftZ};function bd(i){Vc(i)}var wt=(i,t)=>i+Math.random()*(t-i),jx=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function ao(i,t=!1){let e=new In(i);return e.colorSpace=on,t&&(e.magFilter=Pn,e.minFilter=Pn,e.generateMipmaps=!1),e}function sa(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),ao(e)}function vd(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let r=0;r<n.length;r++)e.save(),e.rotate(r/n.length*Math.PI*2),e.fillText(n[r],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let r=0;r<=5;r++){let s=r*4*Math.PI/5-Math.PI/2,o=Math.cos(s)*180,a=Math.sin(s)*180;r?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),ao(t)}function Qx(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),ao(e)}function tM(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let r=n*56,s=r+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,s,c,l),t.arc(512,512,Math.max(r,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=ao(i);return e.anisotropy=4,e}function eM(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,r=e?Number(e[2]):20,s=1024/Math.max(n,r),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*s}" height="${r*s}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*s,c.height=r*s,c.getContext("2d").drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(ao(c),n/r)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function nM(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let r=document.createElement("canvas");r.width=2048,r.height=1152;let s=r.getContext("2d");s.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=s.getImageData(0,a,2048,c-a).data,h=0,u=0,d=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],d+=l[g+2],m++;return new zt(h/m/255,u/m/255,d/m/255).convertSRGBToLinear()};t(ao(r),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var iM={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},rM=["forest","swamp","worldtree"];function sM(i,t={}){let e,n=!!t.lite;try{e=new Gs({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let r=!1,s=()=>r?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(s()),e.toneMapping=$o,e.toneMappingExposure=1.15;let o=new Ws;o.fog=new lc(1709616,20,58);let a=new wn(55,16/9,.05,200),c=new T(0,1.75,7.2),l=new T(0,1.45,0);a.position.copy(c),o.add(a);let h=new Ks(16777215,2236962,1),u=new or(16777215,1);o.add(h,u);let d=new vi(16777215,6,9,2);d.position.set(0,3,7.5),o.add(d);let m=new or(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new Xt;o.add(g);let _=new cn({color:16777215,fog:!1,side:Fe}),f=new At(new Te(70,70,66,48,1,!0,Math.PI-.95,1.9),_);f.scale.set(-1,1,1),f.position.set(0,13,6),g.add(f);let p=new Pe({color:2767396,roughness:1}),M=new At(new Go(90,48),p);M.rotation.x=-Math.PI/2,M.position.y=-.02,g.add(M);let x=new Pe({color:5208634,roughness:.9,flatShading:!0}),b=2600,L=new Xs(new Gn(.05,.42,3),x,b);{let z=new ue,ht=new Qe,ut=new Tn,ft=new T,St=new T,Rt=new zt;for(let Dt=0;Dt<b;Dt++){let $t=9.9+Math.pow(Math.random(),.7)*30,Jt=Math.random()*Math.PI*2;ft.set(Math.cos(Jt)*$t,.18,Math.sin(Jt)*$t-1),ut.set(wt(-.25,.25),Math.random()*3,wt(-.25,.25)),ht.setFromEuler(ut);let Pt=wt(.7,1.6);St.set(Pt,Pt*wt(.8,1.5),Pt),z.compose(ft,ht,St),L.setMatrixAt(Dt,z),L.setColorAt(Dt,Rt.setHSL(wt(.22,.32),wt(.35,.6),wt(.3,.5)))}}g.add(L);let C=new Xt;g.add(C);let A=new Pe({color:1981226,roughness:1,flatShading:!0}),k=new Pe({color:3811868,roughness:1}),O=new Pe({color:6051942,roughness:1,flatShading:!0});function y(z){C.clear();let ht=rM.includes(z),ut=ht?70:34;for(let ft=0;ft<ut;ft++){let St=wt(Math.PI*1.08,Math.PI*1.92),Rt=wt(24,48),Dt=Math.cos(St)*Rt,$t=Math.sin(St)*Rt-1;if(ht){let Jt=wt(6,13),Pt=new Xt,xt=new At(new Te(.25,.4,Jt*.3,6),k);xt.position.y=Jt*.15,Pt.add(xt);for(let re=0;re<3;re++){let He=new At(new Gn(Jt*(.32-re*.07),Jt*.5,7),A);He.position.y=Jt*(.42+re*.2),Pt.add(He)}Pt.position.set(Dt,0,$t),C.add(Pt)}else{let Jt=new At(new Mn(wt(.8,2.6),0),Math.random()<.5?O:A);Jt.position.set(Dt,.3,$t),Jt.scale.y=wt(.5,.9),Jt.rotation.y=Math.random()*3,C.add(Jt)}}}let v=new At(new Go(9.5,64),new Pe({map:tM(),roughness:.92,metalness:.02}));v.rotation.x=-Math.PI/2,g.add(v);let q=new At(new Ln(9.5,.18,8,96),new Pe({color:4933206,roughness:.85}));q.rotation.x=Math.PI/2,q.position.y=.05,g.add(q);let V=new At(new sr(9,9),new cn({map:vd("#a98bff"),transparent:!0,opacity:.38,blending:an,depthWrite:!1}));V.rotation.x=-Math.PI/2,V.position.y=.03,V.scale.x=-1,o.add(V);let J=new Pe({color:5919846,roughness:.9}),mt=sa("rgba(255,170,80,1)","rgba(255,120,40,0)"),$=[];for(let z of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let ht=z-Math.PI/2,ut=Math.cos(ht)*10.4,ft=Math.sin(ht)*10.4-1.5,St=new Xt,Rt=new At(new Te(.42,.5,4.2,10),J);Rt.position.y=2.1;let Dt=new At(new ln(1.2,.3,1.2),J);Dt.position.y=4.35;let $t=new At(new Te(.42,.22,.3,10),new Pe({color:2959923,metalness:.6,roughness:.4}));$t.position.y=4.65;let Jt=new Zn(new Vn({map:mt,color:16756832,blending:an,depthWrite:!1,transparent:!0}));Jt.position.y=5.05,Jt.scale.set(1.3,1.8,1);let Pt=new vi(16751178,10,14,2);Pt.position.y=5.1,St.add(Rt,Dt,$t,Jt,Pt),St.position.set(ut,0,ft),g.add(St),$.push({light:Pt,flame:Jt,base:1,phase:Math.random()*10})}let lt=260,I=new we,Q=new Float32Array(lt*3),B=new Float32Array(lt);for(let z=0;z<lt;z++)Q[z*3]=wt(-14,14),Q[z*3+1]=wt(0,7),Q[z*3+2]=wt(-12,6),B[z]=Math.random()*100;I.setAttribute("position",new Oe(Q,3));let j=new Sr({size:.12,map:sa(),transparent:!0,depthWrite:!1,blending:an,color:16777215,sizeAttenuation:!0});g.add(new Rr(I,j));let ct=sa(),Y=sa("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),R=sa("rgba(150,120,255,1)","rgba(120,80,255,0)"),S=new Map;function D(z,ht){let ut=new Xt,ft=null,St=null,Rt=null,Dt=1.95;ht.svg?(Dt=4.6,Rt=new Vn({transparent:!0,alphaTest:.05}),St=new Zn(Rt),St.center.set(.5,0),St.scale.set(Dt*1.33,Dt,1),eM(ht.svg,(xt,re)=>{Rt.map=xt,Rt.needsUpdate=!0,St.scale.set(Dt*re,Dt,1)}),ut.add(St)):(ft=Zf(Ru(ht.character??"wizard"),z==="me"?"me":z.startsWith("ally:")?"ally":"opp",ct,ht.staff),bd(ft),Dt=ft.height,ut.add(ft.root));let $t=new At(new sr(Dt*.7,Dt*.32),new cn({map:Y,transparent:!0,depthWrite:!1}));if($t.rotation.x=-Math.PI/2,$t.position.y=.02,ut.add($t),z!=="me"){let xt=new At(new sr(Dt*1.1,Dt*1.1),new cn({map:vd(z==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:an,depthWrite:!1}));xt.rotation.x=-Math.PI/2,xt.position.y=.04,xt.name="circle",ut.add(xt)}let Jt=new Zn(new Vn({map:R,blending:an,depthWrite:!1,transparent:!0,opacity:0}));Jt.scale.set(Dt*1.2,Dt*1.2,1),Jt.position.y=Dt*.5,ut.add(Jt),o.add(ut);let Pt={key:z,group:ut,model:ft,sprite:St,spriteMat:Rt,height:Dt,ko:!1,flame:null,aura:Jt,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,eyesFlashUntil:0,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100},pose:Jo(ht.pose)?ht.pose:"none",poseK:0,typing:!!ht.bot,staffId:ht.staff};return S.set(z,Pt),Pt}function W(){for(let z of S.values())o.remove(z.group),z.group.traverse(ht=>{let ut=ht;ut.geometry?.dispose?.(),ut.material?.dispose?.()});S.clear()}let H=new Xt;a.add(H);let U=new T(1.08,-.52,-1.6),X=new T(1.14,-.6,-1.6);H.scale.setScalar(.72);let Z=U.clone(),G=new Pe({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),w=new Pe({color:4020950,roughness:.9,flatShading:!0,side:Fe}),it=new Pe({color:15778970,roughness:.75,flatShading:!0}),K=new Xt,tt=new Xt,et=new Qe,nt=null;H.add(K);let rt=cr("verdant",ct),P="verdant";K.add(rt.group);let E=new vi(rt.color,.6,4,2);E.position.y=Pr,K.add(E);function F(z){z!==P&&(P=z,K.remove(rt.group),rt.group.traverse(ht=>{ht.geometry?.dispose?.()}),rt=cr(z,ct),K.add(rt.group),E.color.copy(rt.color))}{let z=(St,Rt,Dt,$t,Jt,Pt)=>{let xt=new At(St,Rt);return xt.position.set($t,Jt,Pt),Dt.add(xt),xt},ht=z(new Ar(.046,.075,4,10),it,K,.066,-.004,.014);ht.scale.set(.82,1,1.12),ht.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((St,Rt)=>{let Dt=.05-Rt*.002,$t=z(new Ln(Dt,.019-Rt*.001,6,14,Math.PI*1.32),it,K,0,St,0);$t.rotation.x=-Math.PI/2;let Jt=Math.PI*1.32;z(new Be(.019-Rt*.001,6,5),it,K,Math.cos(Jt)*Dt,St,-Math.sin(Jt)*Dt)}),z(new Ar(.021,.075,4,8),it,K,.022,.074,.05).rotation.set(.3,0,1.25);let ft=tt;ft.position.set(.09,-.08,.03),ft.rotation.set(-.55,0,.62),H.add(ft),et.copy(ft.quaternion),z(new Te(.05,.062,.2,10),it,ft,0,-.08,0),nt=z(new Te(.1,.16,.95,10,1,!0),w,ft,0,-.6,0),z(new Ln(.1,.028,6,14),G,ft,0,-.14,0).rotation.x=Math.PI/2}let ot=new Xt;{let z=(St,Rt,Dt,$t,Jt)=>{let Pt=new At(St,Rt);return Pt.position.set(Dt,$t,Jt),ot.add(Pt),Pt},ht=z(new Ar(.046,.075,4,10),it,-.066,0,.014);ht.scale.set(.82,1,1.12),ht.rotation.set(0,-.25,.08),[.052,.018,-.016,-.048].forEach((St,Rt)=>{z(new Ln(.05-Rt*.002,.019-Rt*.001,6,14,Math.PI*1.32),it,0,St,0).rotation.set(-Math.PI/2,0,Math.PI-Math.PI*.32)});let ut=new Xt;ut.position.set(-.09,-.08,.03),ut.rotation.set(-.5,0,-.75),ot.add(ut);let ft=(St,Rt,Dt)=>{let $t=new At(St,Rt);return $t.position.set(0,Dt,0),ut.add($t),$t};ft(new Te(.05,.062,.2,10),it,-.08),ft(new Te(.1,.16,.95,10,1,!0),w,-.6),ft(new Ln(.1,.028,6,14),G,-.14).rotation.x=Math.PI/2,ot.position.set(0,.26,0),ot.visible=!1,K.add(ot)}let dt=new vi(16777215,1.4,3,2);dt.position.set(.3,.3,-.5),a.add(dt);let st={wizard:{sleeve:3433416,skin:15916495},witch:{sleeve:8017597,skin:15654104},goblin:{sleeve:8015404,skin:8688447},knight:{sleeve:14077887,skin:14999246},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},Tt=-1e9,vt="ready",yt=0,Ut=900,Mt=()=>{vt==="gone"&&(vt="growing",yt=performance.now())},Lt=0,Yt=0,Nt=null,Ct="none",Ot=0,Kt=!1,ie=!1,at={uTime:{value:0},uAmount:{value:0},uC0:{value:new zt},uC1:{value:new zt},uC2:{value:new zt},uC3:{value:new zt}},Gt=new At(new sr(1,1),new ti({uniforms:at,transparent:!0,depthWrite:!1,depthTest:!1,blending:an,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Gt.renderOrder=30,Gt.frustumCulled=!1,a.add(Gt);function Et(){let ht=Math.tan(Js.degToRad(a.fov/2))*1.2,ut=ht*.55;Gt.scale.set(ht*a.aspect*2.05,ut,1),Gt.position.set(0,-ht+ut/2,-1.2)}function It(z){let ht={h:0,s:0,l:0};z.getHSL(ht),at.uC0.value.setHSL(ht.h,1,.82),at.uC1.value.setHSL(ht.h,1,.6),at.uC2.value.setHSL(ht.h,.95,.45),at.uC3.value.setHSL((ht.h+.03)%1,.9,.22)}let Ft=new T;function Vt(z,ht="chest"){if(z==="me")return ht==="staff"||ht==="head"?(rt.gem.getWorldPosition(Ft),Ft.clone()):a.localToWorld(new T(wt(-.15,.15),-.1,-1.4));let ut=S.get(z);if(!ut)return new T(0,1.4,-3);if(ut.model&&ht==="staff")return ut.model.crystal.getWorldPosition(Ft),Ft.clone();let ft=ut.group.position.clone(),St=ut.height*ut.group.scale.y;return z==="boss"&&ht==="mouth"?ft.add(new T(-ut.height*.55,ut.height*.62,.3)):ft.add(new T(0,St*(ht==="head"?.85:.6),0))}let ge=[],sn=0;function _e(z,ht,ut={}){if(n&&sn++&1)return;let ft=new Zn(new Vn({map:ct,color:ht,blending:ut.solid?Pi:an,depthWrite:!1,transparent:!0,opacity:ut.opacity??1}));ft.position.copy(z),ft.scale.setScalar(ut.size??.25),o.add(ft),ge.push({sprite:ft,vel:ut.vel??new T,life:0,max:ut.life??.6,grow:ut.grow??0,gravity:ut.gravity??0})}function de(z,ht,ut=26,ft=3.2,St=.22){for(let Rt=0;Rt<ut;Rt++){let Dt=new T(wt(-1,1),wt(-.6,1.2),wt(-1,1)).normalize().multiplyScalar(wt(ft*.4,ft));_e(z,ht,{vel:Dt,size:wt(St*.6,St*1.4),life:wt(.4,.9),gravity:-3})}_e(z,ht,{size:.6,grow:6,life:.35,opacity:.9})}function gn(z,ht,ut=1){let ft=z.group.position,St=z.model?.45:z.height*.35;for(let Rt=0;Rt<ut;Rt++){let Dt=z.group.scale.y;_e(new T(ft.x+wt(-St,St)*Dt,ft.y+wt(.05,z.height*.45)*Dt,ft.z+wt(-St,St)*.5*Dt),ht,{size:wt(.35,.7)*Dt,vel:new T(wt(-.1,.1),wt(1.4,2.6),0),life:wt(.35,.65),grow:-.9,opacity:.75,solid:!0}),_e(new T(ft.x+wt(-St,St)*.6*Dt,ft.y+wt(.05,z.height*.35)*Dt,ft.z),ht,{size:wt(.3,.5)*Dt,vel:new T(0,wt(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&_e(new T(ft.x+wt(-St,St)*Dt,ft.y+wt(.2,z.height*.9)*Dt,ft.z),16777215,{size:wt(.05,.1)*Dt,vel:new T(0,wt(1.5,3),0),life:.5})}}let Kn=[];function co(z,ht=12576511,ut=10475775){for(let ft=0;ft<2;ft++){let St=[],Rt=z.clone().add(new T(wt(-1.5,1.5),9,wt(-1,1)));for(let $t=0;$t<=12;$t++){let Jt=Rt.clone().lerp(z,$t/12);$t>0&&$t<12&&Jt.add(new T(wt(-.45,.45),wt(-.2,.2),wt(-.3,.3))),St.push(Jt)}let Dt=new Bo(new we().setFromPoints(St),new qs({color:ft?16777215:ut,transparent:!0,blending:an,depthWrite:!1}));o.add(Dt),Kn.push({line:Dt,life:0});for(let $t=0;$t<St.length-1;$t++){let Jt=St[$t].distanceTo(St[$t+1]);for(let Pt=0;Pt<Jt;Pt+=.09)_e(St[$t].clone().lerp(St[$t+1],Pt/Jt),ft?16777215:ut,{size:ft?.12:.3,life:.28,opacity:ft?1:.7})}}Vi.color.set(ht),Vi.position.copy(z).add(new T(0,2,1)),Vi.intensity=60,wi=performance.now()+160,de(z,ht,30,4,.18)}let Vi=new vi(12576511,0,16,2);o.add(Vi);let wi=0;{let z=new Bo(new we().setFromPoints([new T(0,-50,0),new T(0,-50.01,0)]),new qs({color:16777215,transparent:!0,opacity:0,blending:an,depthWrite:!1}));z.frustumCulled=!1,o.add(z)}let fr=[];function dr(z,ht,ut="#ffd479"){let ft=new Zn(new Vn({map:Qx(ht,ut),transparent:!0,depthWrite:!1,depthTest:!1}));ft.position.copy(Vt(z,"head")).add(new T(wt(-.3,.3),.4,.3));let St=z==="me"?.9:1.3;ft.scale.set(St,St/2,1),ft.renderOrder=10,o.add(ft),fr.push({sprite:ft,life:0})}let Ti=document.createElement("div");Ti.className="arena3d-hit",document.body.append(Ti);function An(z="255,40,60",ht=""){Ti.style.setProperty("--hit",z),Ti.className="arena3d-hit",Ti.offsetWidth,Ti.className=`arena3d-hit on ${ht}`}let Si=0,Gi=z=>{jx()||(Si=Math.max(Si,z))},ei=[],Or=new Set,oa=new Map;function Gc(z){let ht=oa.get(z);if(ht)return ht;let ut=document.createElement("canvas");ut.width=ut.height=128;let ft=ut.getContext("2d"),St=ft.createRadialGradient(64,64,0,64,64,64);St.addColorStop(0,"#ffffff"),St.addColorStop(.22,z),St.addColorStop(.5,`${z}88`),St.addColorStop(1,`${z}00`),ft.fillStyle=St,ft.fillRect(0,0,128,128);let Rt=new In(ut);return Rt.colorSpace=on,oa.set(z,Rt),Rt}function Wc(z,ht,ut,ft,St,Rt,Dt=!1){let $t=Gc(ft),Jt=new Zn(new Vn({map:$t,transparent:!0,depthWrite:!1,blending:an}));Jt.scale.set(St*.42,St*.42,1),Jt.position.copy(z),Jt.renderOrder=5,o.add(Jt);let Pt=Dt?z.clone().lerp(ht,.5).add(new T(Se(.28,z.clone().lerp(ht,.5).z)-z.clone().lerp(ht,.5).x,-.15,0)):z.clone().lerp(ht,.5).add(new T(wt(-.6,.6),1.2+z.distanceTo(ht)*.08,0));return new Promise(xt=>ei.push({sprite:Jt,from:z,to:ht,mid:Pt,t:0,dur:Rt,color:new zt(ft),size:St,done:xt,trailAt:0,incoming:Dt}))}let N="battle",pt="",bt="",_t=null,gt=new Map,kt=[],qt=new or(16777215,1);qt.visible=!1,o.add(qt,qt.target);let te=(z,ht)=>new T(z[0],z[2]-ht,-z[1]);function ee(z,ht){_t&&(o.remove(_t.group),t.preview||_t.dispose(),_t=null);for(let ft of kt)o.remove(ft);kt.length=0;let ut=`${z}-${ht}-${n}`;try{_t=t.preview&&gt.get(ut)||Ou(z,ht,n)}catch(ft){console.warn("3D arena failed, using the classic one",ft),_t=null}if(_t&&t.preview&&gt.set(ut,_t),g.visible=!_t,V.position.y=_t?.1:.03,qt.visible=!!_t,!_t){bt="";return}_t.group.rotation.x=-Math.PI/2,_t.group.position.y=-_t.floor,o.add(_t.group),_t.group.traverse(ft=>{ft.name==="centre-pattern"&&(ft.visible=!1)});for(let ft of n?_t.lights.slice(0,2):_t.lights){let St=new vi(new zt(...ft.color),ft.intensity*8,ft.dist,2);St.position.copy(te(ft.pos,_t.floor)),St.userData.base=St.intensity,St.userData.flicker=ft.flicker??0,o.add(St),kt.push(St)}}function he(z){let ht=z.key.dir;qt.color.setRGB(...z.key.color),qt.intensity=z.key.intensity*.35,qt.position.set(ht[0]*50,ht[2]*50,-ht[1]*50),qt.target.position.set(0,0,0),h.color.setRGB(...z.ambient.sky),h.groundColor.setRGB(...z.ambient.ground),h.intensity=z.ambient.intensity,u.intensity=0,m.intensity*=.45,d.intensity*=.5;let ut=o.fog;ut.color.setRGB(...z.fog.color),ut.near=z.fog.near,ut.far=z.fog.far,e.setClearColor(ut.color)}let le=0,Qt=0,Ie=0,ve=new Tn,We=new Tn,Cn=!1,Ce=!1,oe=new zt(16777215),ke=null;function Se(z,ht){let ut=c.z-ht,ft=Math.tan(Js.degToRad(a.fov/2))*ut;return z*ft*a.aspect}function Jn(){if(!ke)return;let z=ke,ht=S.get("opp");ht?.model&&ht.group.scale.setScalar(1.3),ht&&ht.group.position.set(Se(a.aspect<1?.08:z.layout==="deck"?.36:.46,-2.2),0,-2.2);let ut=S.get("boss");ut&&ut.group.position.set(Se(a.aspect<1?.15:.5,-5.5),0,-5.5),z.allies.forEach((St,Rt)=>{let Dt=S.get(`ally:${St.id}`);Dt&&Dt.group.position.set(Se(-.36+Rt*.13,-.6-Rt*1.1),0,-.6-Rt*1.1)});let ft=(ut??ht)?.group.position;for(let[St,Rt]of S){if(!Rt.model)continue;let Dt=St==="opp"?c:ft??new T(0,0,-3);Rt.model.root.rotation.y=Math.atan2(Dt.x-Rt.group.position.x,Dt.z-Rt.group.position.z)}}function Wi(z){ke=z,N=z.layout,W();let ht=st[Ru(z.me.character??"wizard")]??st.wizard;w.color.set(ht.sleeve),it.color.set(ht.skin),it.metalness=z.me.character==="knight"?.12:0,zu(),F(z.me.staff??"verdant"),ie=!1,H.visible=!0,vt="ready",Nt=null,at.uAmount.value=0,Gt.visible=!1,Ct=Jo(z.me.pose)?z.me.pose:"none",Ot=0,z.opp&&D("opp",z.opp),z.boss&&D("boss",z.boss);for(let ut of z.allies)D(`ally:${ut.id}`,ut);Jn(),Fn(z)}function Fn(z){let ht=iM[z.time];h.color.set(ht.sky),h.groundColor.set(ht.ground),h.intensity=ht.hemi*1.25,m.intensity=z.time==="night"?1.3:z.time==="sunset"?1:.7,u.color.set(ht.sun),u.intensity=ht.sunInt,u.position.set(...ht.sunPos),d.intensity=z.time==="night"?9:5;for(let ut of $)ut.base=ht.torch;j.color.set(ht.motes),oe=new zt(ht.spriteTint),pt!==z.bgKey&&(pt=z.bgKey,ee(z.bgKey.split("-")[0],z.time)),_t?he(_t):bt!==z.bgKey&&(bt=z.bgKey,o.fog.near=20,o.fog.far=58,y(z.bgKey.split("-")[0]),nM(z.bgSvg,(ut,ft,St)=>{_.map?.dispose(),_.map=ut,_.needsUpdate=!0,o.fog.color.copy(ft).lerp(St,.35),p.color.copy(ft).multiplyScalar(.9),x.color.copy(ft).lerp(new zt(5212730),.45).multiplyScalar(1.15),A.color.copy(ft).lerp(new zt(1522212),.5),e.setClearColor(St)}))}let Br=new Ht,Ue=new Ht,oi=.32,kr=.13,Ne={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},us=z=>{z.pointerType!=="mouse"||z.buttons||z.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||Br.set(z.clientX/innerWidth*2-1,z.clientY/innerHeight*2-1)};addEventListener("pointermove",us,{passive:!0});let un={yaw:0,pitch:0,refYaw:NaN,refPitch:0,at:0,live:0},pr=Math.PI/180,ku=z=>((z+180)%360+360)%360-180,Xc=z=>{if(z.alpha===null||z.beta===null||z.gamma===null||!lo)return;let ht=performance.now(),ut=un.at?Math.min(.1,(ht-un.at)/1e3):0;un.at=ht,un.live=ht;let ft=z.alpha*pr,St=z.beta*pr,Rt=z.gamma*pr,Dt=Math.sin(ft),$t=Math.cos(ft),Jt=Math.sin(St),Pt=Math.cos(St),xt=Math.sin(Rt),re=Math.cos(Rt),He=-xt*$t-re*Jt*Dt,_n=-xt*Dt+re*Jt*$t,Re=-re*Pt,Xe=Math.asin(Math.max(-1,Math.min(1,Re)))/pr,se=Math.abs(Re)>.96,Ee=Math.atan2(He,_n)/pr;(Number.isNaN(un.refYaw)||!ut)&&(un.refYaw=Ee,un.refPitch=Xe);let Ve=1-Math.exp(-ut/2.2);se&&(un.refYaw=Ee);let Xn=ku(Ee-un.refYaw),On=Xe-un.refPitch;un.refYaw=ku(un.refYaw+Xn*Ve),un.refPitch+=On*Ve,un.yaw=se?un.yaw*(1-Ve):Xn,un.pitch=On,Br.set(Math.max(-1,Math.min(1,un.yaw/16)),Math.max(-1,Math.min(1,-un.pitch/14)))},Ed=matchMedia("(pointer: coarse)").matches&&"DeviceOrientationEvent"in window,qc=()=>{removeEventListener("touchend",qc);let z=DeviceOrientationEvent;z.requestPermission&&z.requestPermission().then(ht=>{ht==="granted"&&addEventListener("deviceorientation",Xc)}).catch(()=>{})};Ed&&(DeviceOrientationEvent.requestPermission?addEventListener("touchend",qc,{passive:!0}):addEventListener("deviceorientation",Xc));function zu(){let z=N==="deck"?X:U,ht=N==="deck"?.56:.72;if(a.aspect>=1.2){Z.copy(z),H.scale.setScalar(ht);return}let ut=Math.tan(Js.degToRad(a.fov/2))*-z.z,ft=ut*a.aspect;Z.set(ft*.78,-ut*.62,z.z),H.scale.setScalar(ht*Math.max(.5,Math.min(1,a.aspect*.9)))}function zr(){let z=i.clientWidth||innerWidth,ht=i.clientHeight||innerHeight;e.setSize(z,ht,!1),a.aspect=z/ht,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),Jn(),Et(),zu()}addEventListener("resize",zr);let Vu=0,Gu=0,Wu=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!lo||i.clientWidth===Vu&&i.clientHeight===Gu||(Vu=i.clientWidth,Gu=i.clientHeight,zr())}):null;Wu?.observe(i);let wd=new zt(6974072),Td=new zt(16722474),Xu=new zt(9428223),Sd=new zt(2784511),Rd=new zt(16738842);function Ad(z,ht){let ut=ht<z.hurtUntil,ft=ht<z.frostUntil,St=ht<z.burnUntil;if(z.model&&z.ko){for(let Rt of z.model.materials)Rt.mat.color.copy(Rt.color).lerp(wd,.55),Rt.mat.emissive.setRGB(0,0,0);return}if(z.model){if(ft!==z.frosted){z.frosted=ft;for(let Rt of z.model.materials)Rt.mat.opacity=ft?.5:1,Rt.mat.depthWrite=!ft}for(let Rt of z.model.materials)if(Rt.mat.color.copy(Rt.color),ft&&Rt.mat.color.lerp(z.frostTint??Xu,.75),ut)Rt.mat.emissive.copy(Td),Rt.mat.emissiveIntensity=.6;else if(ft)Rt.mat.emissive.copy(z.frostTint??Sd),Rt.mat.emissiveIntensity=.45;else if(St){let Dt=z.burnTint??Rd;Rt.mat.color.lerp(Dt,.35),Rt.mat.emissive.copy(Dt),Rt.mat.emissiveIntensity=.55+.3*Math.sin(ht/40)}else Rt.mat.emissive.copy(Rt.emissive),Rt.mat.emissiveIntensity=1}else z.spriteMat&&(z.spriteMat.color.copy(ut?new zt(1,.35,.35):ft?Xu:St?new zt(1,.7,.5):oe),z.spriteMat.opacity=ft?.6:z.ko?z.spriteMat.opacity:1)}let lo=!1,Yc=0,ho=performance.now(),Je=0,Zc=!1,Vr=0,aa=0,uo=0,$c=0;function Cd(z){if(r||document.hidden)return;if($c<45){$c++;return}if(aa++,uo+=z,uo<2500)return;let ht=aa*1e3/uo;aa=0,uo=0,!(ht>=(n?22:34))&&(n?(r=!0,e.setPixelRatio(s()),zr()):po.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(ht),lowRes:r}})))}function qu(z){if(Yc=requestAnimationFrame(qu),!t.preview&&document.body.classList.contains("paused")){ho=z;return}t.preview||Cd(z-ho);let ht=Math.min(1,Math.max(0,(z-ho)/1e3)),ut=Math.min(.05,ht);ho=z,Je+=ut;let ft=performance.now(),St=!1;Ue.lerp(Br,St?1:performance.now()-un.live<300?Math.min(1,ht*14):.05);let Rt=St?0:Math.sin(Je*.7)*.025;if(n)a.position.set(c.x+Ue.x*.12,c.y-Ue.y*.05+Rt,c.z),a.lookAt(l.clone().add(new T(Ue.x*1.5,-Ue.y*.75,0))),Ne.yaw=0,Ne.pitch=0;else{Ne.yaw=-Ue.x*oi,Ne.pitch=-Ue.y*kr,a.position.set(c.x,c.y+Rt,c.z);let Pt=l.clone().sub(c).applyAxisAngle(new T(0,1,0),Ne.yaw),xt=Pt.clone().cross(new T(0,1,0)).normalize();Pt.applyAxisAngle(xt,Ne.pitch),a.lookAt(c.clone().add(Pt))}Vr+=((Zc?1:0)-Vr)*Math.min(1,ut*4);let Dt=S.get("opp");if(Vr>.001&&Dt){let Pt=Dt.group.position,xt=Vr*Vr*(3-2*Vr);a.position.lerp(new T(Pt.x+1.1,1.75+Rt,Pt.z+3.4),xt),a.lookAt(new T(0,0,-1).applyQuaternion(a.quaternion).multiplyScalar(4).add(a.position).lerp(new T(Pt.x-.1,1.45,Pt.z),xt))}!t.preview&&lo&&ke&&(ke.opp||ke.allies.length)&&z-Ne.sentAt>150&&(Math.abs(Ne.yaw-Ne.sentYaw)>.02||Math.abs(Ne.pitch-Ne.sentPitch)>.02)&&(Ne.sentAt=z,Ne.sentYaw=Ne.yaw,Ne.sentPitch=Ne.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+Ne.yaw.toFixed(3),pitch:+Ne.pitch.toFixed(3)}}))),Si>0&&(a.position.add(new T(wt(-1,1),wt(-1,1),0).multiplyScalar(Si)),a.rotation.z+=wt(-1,1)*Si*.15,Si=Math.max(0,Si-ut*1.1)),Qt+=(le-Qt)*Math.min(1,ut*6),Ie=Math.max(0,Ie-ut*2.2),ve.x+=(We.x-ve.x)*Math.min(1,ut*14),ve.y+=(We.y-ve.y)*Math.min(1,ut*14),ve.z+=(We.z-ve.z)*Math.min(1,ut*14),Ie<=0&&We.set(0,0,0);let $t=.5+.5*Math.sin(Je*6);{let Pt=Math.max(0,1-(ft-Tt)/380),xt=Pt>0?Math.sin(Pt*Math.PI):0,re=Math.min(1,Qt);Lt+=((re>.05&&!St?Math.min(1,.5+re*.6):0)-Lt)*Math.min(1,ut*3),Yt+=ut*(2.6+re*1.4);let He=Math.sin(Yt),_n=Math.sin(Yt*2)/2;H.position.set(Z.x-Ue.x*.04+He*.06*Lt,Z.y+Ue.y*.03+(St?0:Math.sin(Je*1.6)*.008)+re*.03+_n*.11*Lt,Z.z-xt*.35),K.rotation.set(re*.25-xt*.75+ve.x*.3+_n*.18*Lt,ve.y*.3,.2-He*.24*Lt+ve.z*.3),Ot+=((Nt&&Ct!=="none"&&!ie?1:0)-Ot)*Math.min(1,ht*3);let Re=Ot*Ot*(3-2*Ot);if(ot.visible=Re>.02&&Ct==="twohand",(Ct!=="aim"||Re<=.001)&&(tt.quaternion.copy(et),nt&&(nt.scale.y=1,nt.position.y=-.6)),Re>.001)if(Ct==="float"&&(a.position.y+=.2*Re+Math.sin(Je*1.7)*.04*Re),Ct==="aim"){let se=new T(Z.x*.74,Z.y*.72,Z.z-.05);H.position.lerp(se,Re);let Ee=S.get("opp")??S.get("boss");a.updateMatrixWorld(!0);let Xn=(Ee?a.worldToLocal(Ee.group.position.clone().add(new T(0,Ee.height*.55,0))):new T(0,-.1,-8)).sub(H.position).normalize(),On=new T(1,0,0).addScaledVector(Xn,-Xn.x).normalize(),ni=new T().crossVectors(On,Xn),Xi=new Qe().setFromRotationMatrix(new ue().makeBasis(On,Xn,ni));K.quaternion.slerp(Xi,Re);let di=H.position.clone().add(tt.position.clone().multiplyScalar(H.scale.x)),Kc=new T(Z.x*.95,Z.y*2.1,-.1).sub(di).normalize();if(tt.quaternion.copy(et).slerp(new Qe().setFromUnitVectors(new T(0,-1,0),Kc),Re),nt){let Ri=1+1.3*Re;nt.scale.y=Ri,nt.position.y=-.13-.475*Ri}}else Ct==="twohand"&&(H.position.x+=(.62-Z.x)*Re,H.position.y+=(Z.y-.12-Z.y)*Re,K.rotation.x+=(.05-K.rotation.x)*Re*.8,K.rotation.z+=(0-K.rotation.z)*Re,ot.scale.setScalar(Math.max(.01,Re)));let Xe=vt==="ready"?1:0;if(vt==="growing"){let se=Math.min(1,(ft-yt)/Ut);if(Xe=se*se*(3-2*se),se>=1)vt="ready";else if(!St){rt.gem.getWorldPosition(Ft);for(let Ee=0;Ee<2;Ee++){let Ve=Ft.clone().add(new T(wt(-.4,.4),wt(-.4,.4),wt(-.4,.4)));_e(Ve,rt.color,{size:wt(.025,.06),vel:Ft.clone().sub(Ve).multiplyScalar(2.8),life:.36})}}}if(rt.gem.scale.setScalar(Xe),rt.gemMat.emissiveIntensity=.7+re*(1.6+$t*1.2)+xt*3,E.intensity=(.5+re*4+xt*6)*Xe,rt.glow.scale.setScalar((.3+re*(.32+$t*.18)+xt*.6)*Xe),rt.glow.material.opacity=.3+re*.35,rt.gem.rotation.y+=ut*(.8+re*6),rt.update(Je,ut,re),Xe>.9&&!St&&H.visible&&(rt.gem.getWorldPosition(Ft),Lt>.25&&_e(Ft.clone(),rt.color,{size:wt(.03,.05),life:.55,opacity:.9}),re>.2&&Math.random()<re*.8)){let se=Ft.clone().add(new T(wt(-.35,.35),wt(-.35,.35),wt(-.35,.35)));_e(se,rt.color.clone().lerp(new zt(16777215),.4),{size:wt(.02,.05),vel:Ft.clone().sub(se).multiplyScalar(2.6),life:.38})}if(Nt&&!St&&H.visible)for(let se=0;se<2;se++){let Ee=K.localToWorld(new T(wt(-.05,.05),wt(-.15,1.3),wt(-.05,.05)));_e(Ee,Nt,{size:wt(.05,.12),vel:new T(wt(-.05,.05),wt(.35,.8),0),life:wt(.25,.45),solid:Math.random()<.4,opacity:.9})}at.uTime.value=St?0:Je,at.uAmount.value+=((Nt&&!Kt&&(H.visible||Zc)?1:0)-at.uAmount.value)*Math.min(1,ht*3),Gt.visible=at.uAmount.value>.01}for(let[Pt,xt]of S){let re=xt.group.getObjectByName("circle");if(re&&(re.rotation.z+=ut*.4),Ad(xt,ft),xt.ko)continue;let He=Math.max(0,xt.lungeUntil-ft)/450;if(xt.model){let se=xt.model;se.body.position.y=St?0:Math.sin(Je*2+xt.height*3)*.02;let Ee=xt.look,Ve=ft-Ee.at>4e3,Xn=Ve?.22*Math.sin(Je*.31+Ee.seed)*Math.sin(Je*.13+Ee.seed*2):Ee.yaw,On=Ve?.06*Math.sin(Je*.23+Ee.seed*3):Ee.pitch;Ee.curYaw+=(Xn-Ee.curYaw)*Math.min(1,ut*7),Ee.curPitch+=(On-Ee.curPitch)*Math.min(1,ut*7),se.head.rotation.set(-Ee.curPitch*.8,Ee.curYaw*.7,0),se.body.rotation.y=Ee.curYaw*.3;let ni=1-He,Xi=He<=0?0:ni<.18?-.35*(ni/.18):ni<.4?-.35+1.35*((ni-.18)/.22):1-((ni-.4)/.6)**2;se.body.rotation.x=Math.max(0,Xi)*.2,se.staffPivot.rotation.x=Xi*1.9;let di=Pt==="me"?Qt:(Pt==="opp"||Pt.startsWith("ally:"))&&Cn&&(N==="deck"||xt.typing)?N==="deck"?.7:.45:0,fs=Pt==="me"?0:di*(1-Math.max(0,Xi)),Kc=-.15-di*.75-Math.max(0,Xi)*.9+(Pt==="me"?ve.x:0)+Math.sin(Je*4.4)*.22*fs;se.arm.rotation.x+=(Kc-se.arm.rotation.x)*Math.min(1,ut*10),se.arm.rotation.z=hi+(Pt==="me"?ve.z:0)+Math.sin(Je*2.2)*.32*fs,se.arm.rotation.y=Pt==="me"?ve.y:0;let Ri=Pt==="me"?Qt:di;se.crystalMat.emissiveIntensity=1.2+Ri*(3+$t*2)+He*3,se.glow.scale.setScalar(.45+Ri*(.5+$t*.3)+He*.6),se.glow.material.opacity=.45+Ri*.5,se.crystal.rotation.y+=ut*(.8+Ri*6),se.staff.update(Je,ut,Ri),xt.poseK+=((xt.flame&&xt.pose!=="none"?1:0)-xt.poseK)*Math.min(1,ut*3),Md(se,xt.pose,xt.poseK,Je),Ri>.5&&Math.random()<Ri*.6&&(se.crystal.getWorldPosition(Ft),_e(Ft.clone().add(new T(wt(-.1,.1),wt(-.1,.1),wt(-.1,.1))),se.staff.color.getHex(),{size:wt(.03,.08),vel:new T(wt(-.2,.2),wt(.2,.6),0),life:.7}))}else xt.sprite&&(xt.sprite.position.y=St?0:Math.abs(Math.sin(Je*2))*.05,xt.sprite.position.z=He*.4);let _n=Pt==="opp"&&Cn&&N==="deck"||Pt==="boss"&&Ce,Re=xt.aura.material;Re.opacity+=((_n?.55+.2*Math.sin(Je*5):xt.flame?.35:0)-Re.opacity)*Math.min(1,ut*5),Re.color.copy(Pt==="boss"?new zt(16742954):xt.flame??new zt(11832575)),xt.flame&&gn(xt,xt.flame,2);let Xe=xt.model?.eyes;if(Xe?.visible){let se=Math.max(0,xt.eyesFlashUntil-ft)/1400,Ee=1+.25*Math.sin(Je*7)+se*3.5;for(let Ve of Xe.children)Ve.isSprite&&Ve.scale.setScalar(.06*Ee);!xt.flame&&se<=0&&(Xe.visible=!1)}if(ft<xt.burnUntil&&gn(xt,Math.random()<.5?16734746:16756784,3),ft<xt.frostUntil&&Math.random()<.3&&gn(xt,13628159,1),Pt==="boss"&&Ce&&Math.random()<.8){let se=Vt("boss","mouth"),Ee=se.clone().add(new T(wt(-1.5,1.5),wt(-1,1),wt(-1,1)));_e(Ee,16751162,{size:.12,vel:se.clone().sub(Ee).multiplyScalar(1.6),life:.55})}}for(let Pt of $){let xt=.85+.15*Math.sin(Je*9+Pt.phase)+.08*Math.sin(Je*23+Pt.phase*2);Pt.light.intensity=Pt.base*xt,Pt.flame.scale.set(1.2*xt,1.8*(.9+.2*xt),1)}if(V.rotation.z+=ut*.05,_t){_t.update(Je*30);for(let Pt of kt)Pt.userData.flicker&&(Pt.intensity=Pt.userData.base*(1-Pt.userData.flicker*(.5+.5*Math.sin(Je*9+Pt.position.x)*Math.sin(Je*23+Pt.position.z))))}let Jt=I.attributes.position;for(let Pt=0;Pt<lt;Pt++){let xt=Jt.getY(Pt)+ut*(.12+B[Pt]%1*.2);xt>7.5&&(xt=0),Jt.setY(Pt,xt),Jt.setX(Pt,Jt.getX(Pt)+Math.sin(Je*.5+B[Pt])*ut*.15)}Jt.needsUpdate=!0,j.opacity=.55+.35*Math.sin(Je*1.3);for(let Pt=ei.length-1;Pt>=0;Pt--){let xt=ei[Pt];xt.t+=ut/xt.dur;let re=Math.min(1,xt.t),He=re*re*(1.6-.6*re),_n=xt.from.clone().lerp(xt.mid,He),Re=xt.mid.clone().lerp(xt.to,He);xt.sprite.position.copy(_n.lerp(Re,He)),xt.gem&&(xt.gem.position.copy(xt.sprite.position),xt.gem.rotation.y+=ut*12,xt.gem.rotation.x+=ut*7);let Xe=xt.incoming?.55+He*.25:.55+He*.8,se=xt.sprite.material;xt.incoming&&(se.opacity=1-.75*Math.max(0,Math.min(1,(re-.35)/.5))),xt.sprite.scale.set(xt.size*.42*Xe,xt.size*.42*Xe,1),xt.trailAt-=ut,xt.trailAt<=0&&!St&&(xt.trailAt=.016,_e(xt.sprite.position,xt.color,{size:wt(.05,.13)*xt.size,life:.35,opacity:.8,vel:new T(wt(-.3,.3),wt(-.3,.3),wt(-.3,.3))})),re>=1&&(o.remove(xt.sprite),se.dispose(),xt.gem&&o.remove(xt.gem),ei.splice(Pt,1),xt.done())}for(let Pt=ge.length-1;Pt>=0;Pt--){let xt=ge[Pt];if(xt.life+=ut,xt.life>=xt.max){o.remove(xt.sprite),xt.sprite.material.dispose(),ge.splice(Pt,1);continue}xt.vel.y+=xt.gravity*ut,xt.sprite.position.addScaledVector(xt.vel,ut),xt.grow&&xt.sprite.scale.multiplyScalar(1+xt.grow*ut),xt.sprite.material.opacity=1-xt.life/xt.max}Vi.intensity>0&&performance.now()>wi&&(Vi.intensity=0),fo.length&&Ld(ut);for(let Pt=Kn.length-1;Pt>=0;Pt--){let xt=Kn[Pt];xt.life+=ut,xt.line.material.opacity=xt.life<.08||xt.life>.14&&xt.life<.2?1:.15,xt.life>.32&&(o.remove(xt.line),xt.line.geometry.dispose(),xt.line.material.dispose(),Kn.splice(Pt,1))}for(let Pt=fr.length-1;Pt>=0;Pt--){let xt=fr[Pt];xt.life+=ut,xt.sprite.position.y+=ut*.8,xt.sprite.material.opacity=Math.min(1,2.2-xt.life*2),xt.life>1.1&&(o.remove(xt.sprite),xt.sprite.material.map?.dispose(),xt.sprite.material.dispose(),fr.splice(Pt,1))}if(e.render(o,a),Kt&&Vr>.5){let Pt=a.position.clone(),xt=a.quaternion.clone(),re=H.visible;a.position.set(c.x,c.y+(a.position.y-c.y)*0,c.z),Ct==="float"&&(a.position.y+=.2*Ot),a.lookAt(l),H.visible=!0,a.updateMatrixWorld(!0);let He=e.getSize(new Ht),_n=Math.round(He.x*.42),Re=Math.round(He.y*.42);e.setScissorTest(!0),e.setViewport(He.x-_n-8,8,_n,Re),e.setScissor(He.x-_n-8,8,_n,Re),e.render(o,a),e.setScissorTest(!1),e.setViewport(0,0,He.x,He.y),H.visible=re,a.position.copy(Pt),a.quaternion.copy(xt)}}function Pd(z,ht,ut){let ft=S.get(z),St=performance.now();ft&&ht&&(ft.burnTint=void 0,ft.frostTint=void 0),ht==="bolt"&&(co(ft?Vt(z,"head"):ut),z==="me"&&An("190,230,255","bolt")),ht==="frost"&&(ft&&(ft.frostUntil=St+1100),de(ut,13628159,30,2.5,.16),z==="me"&&An("140,210,255","frost")),ht==="fire"&&(ft&&(ft.burnUntil=St+1100),de(ut,16742954,36,3.4,.24),z==="me"&&An("255,120,30","fire"))}let fo=[],Yu=new Map;function Id(z,ht,ut,ft){let St=ut.getHexString()+ft.getHexString(),Rt=Yu.get(St);Rt||(Rt=new Pe({color:ut,emissive:ut.clone().lerp(ft,.25).multiplyScalar(.35),roughness:.9,flatShading:!0}),Yu.set(St,Rt));let Dt=Math.random()*Math.PI*2;for(let $t=0;$t<4;$t++){let Jt=Dt+$t*Math.PI/2+wt(-.3,.3),Pt=wt(.75,1.05),xt=new T(z.x+Math.cos(Jt)*Pt,-.05,z.z+Math.sin(Jt)*Pt*.8),re=ht.clone().add(new T(wt(-.18,.18),wt(-.25,.2),wt(-.12,.12))),He=xt.clone().add(new T(Math.cos(Jt)*.35,.55,Math.sin(Jt)*.25)),_n=xt.clone().lerp(re,.6).add(new T(Math.cos(Jt)*.45,.55,Math.sin(Jt)*.3)),Re=new zo([xt,He,_n,re]),Xe=new bc(Re,24,.07,6,!1),se=Xe.attributes.position;for(let Ve=0;Ve<se.count;Ve++){let Xn=Math.floor(Ve/7)/24,On=Re.getPointAt(Math.min(1,Xn)),ni=1.25-Xn*.95;se.setXYZ(Ve,On.x+(se.getX(Ve)-On.x)*ni,On.y+(se.getY(Ve)-On.y)*ni,On.z+(se.getZ(Ve)-On.z)*ni)}Xe.computeVertexNormals(),Xe.setDrawRange(0,0);let Ee=new At(Xe,Rt);o.add(Ee),fo.push({mesh:Ee,t:-$t*.05,total:Xe.index.count,tip:re,leaf:ft});for(let Ve=0;Ve<8;Ve++)_e(xt.clone(),Ve%2?6965802:ft,{size:wt(.06,.14),vel:new T(wt(-.6,.6),wt(1,2.4),wt(-.6,.6)),life:wt(.4,.7),gravity:-6,solid:Ve%2===1})}}function Ld(z){for(let ht=fo.length-1;ht>=0;ht--){let ut=fo[ht];ut.t+=z;let ft=Math.min(1,Math.max(0,ut.t/.22)),St=Math.max(0,(ut.t-.62)/.3),Rt=Math.max(0,ft-St),Dt=Math.floor(ut.total/6*Rt)*6;ut.mesh.geometry.setDrawRange(0,Dt),ft>=1&&ut.t<.32&&Math.random()<.6&&_e(ut.tip.clone(),ut.leaf,{size:wt(.06,.12),vel:new T(wt(-.8,.8),wt(-.2,.9),wt(-.5,.5)),life:.5}),ut.t>.95&&(o.remove(ut.mesh),ut.mesh.geometry.dispose(),fo.splice(ht,1))}}function Dd(z,ht){let ut=new Zn(new Vn({map:ct,color:327951,transparent:!0,opacity:.9,depthWrite:!1}));ut.position.copy(z),ut.scale.setScalar(.1),ut.renderOrder=5,o.add(ut);let ft=new Zn(new Vn({map:ct,color:ht,blending:an,transparent:!0,opacity:.8,depthWrite:!1}));ft.position.copy(z),ft.scale.setScalar(2.6),o.add(ft);for(let Dt=0;Dt<34;Dt++){let $t=Math.random()*Math.PI*2,Jt=wt(1,1.9),Pt=wt(-.9,.9),xt=z.clone().add(new T(Math.cos($t)*Jt,Pt,Math.sin($t)*Jt*.6)),re=z.clone().sub(xt).multiplyScalar(2.2).add(new T(-Math.sin($t),0,Math.cos($t)).multiplyScalar(1.2));_e(xt,Dt%3?ht:16777215,{size:wt(.06,.14),vel:re,life:.42})}let St=performance.now(),Rt=()=>{let Dt=(performance.now()-St)/1e3;if(Dt<.45){ut.scale.setScalar(.1+Dt*2.4),ft.scale.setScalar(2.6*(1-Dt/.5)),ft.material.opacity=.8*(1-Dt/.5),requestAnimationFrame(Rt);return}o.remove(ut,ft),ut.material.dispose(),ft.material.dispose(),de(z,ht,34,4.2,.2),_e(z,16777215,{size:.9,grow:7,life:.3,opacity:.9})};requestAnimationFrame(Rt)}let Hd=z=>(z==="me"?P:S.get(z)?.staffId)??"verdant";function Ud(z,ht,ut){if(N==="deck"||z==="boss")return;let ft=Ac(Hd(z)),St=ft.base??ft.id,Rt=new zt(ft.gem),Dt=new zt(ft.tint??ft.gem),$t=S.get(ht),Jt=performance.now(),Pt=ht==="me"&&H.visible,xt=re=>`${Math.round(re.r*255)},${Math.round(re.g*255)},${Math.round(re.b*255)}`;if(St==="verdant"){let re=$t?$t.group.position.clone():new T(ut.x,0,ut.z),He=Pt?ut.clone().add(new T(0,.2,0)):Vt(ht,"chest"),_n=ft.season?Dt.clone().lerp(new zt(3811866),.55):new zt(5913890);if(!Pt)Id(re,He,_n,Rt);else for(let Re=0;Re<18;Re++)_e(ut.clone().add(new T(wt(-.6,.6),wt(-.6,-.1),0)),Re%3?Rt:6965802,{size:wt(.05,.12),vel:new T(wt(-1,1),wt(1,2.2),wt(-.3,.3)),life:wt(.5,.8),gravity:-5});ht==="me"&&An(xt(Rt),"frost")}else if(St==="ember"){if($t){$t.burnTint=ft.season?Rt.clone():void 0,$t.burnUntil=Jt+1100;for(let re=0;re<4;re++)setTimeout(()=>gn($t,Rt,3),re*90)}de(ut,Rt,36,3.4,.24),ht==="me"&&An(xt(Rt),"fire")}else if(St==="tide"){$t&&($t.frostTint=ft.season?Dt.clone():void 0,$t.frostUntil=Jt+1100),de(ut,Dt,30,2.5,.16);for(let re=0;re<14;re++)_e(ut.clone().add(new T(wt(-.5,.5),wt(-.7,.6),wt(-.3,.3))),16777215,{size:wt(.04,.09),vel:new T(0,wt(-.6,-.2),0),life:wt(.6,1)});ht==="me"&&An(xt(Dt),"frost")}else St==="storm"?(co($t?Vt(ht,"head"):ut,Rt.clone().lerp(new zt(16777215),.35),Rt),ht==="me"&&An(xt(Rt),"bolt")):St==="void"&&(Dd(Pt?ut:Vt(ht,"chest"),Rt),ht==="me"&&An(xt(Rt),"frost"))}let po={setup:Wi,setActive(z){z!==lo&&(lo=z,i.classList.toggle("on",z),z?(zr(),ho=performance.now(),$c=0,aa=0,uo=0,Yc=requestAnimationFrame(qu)):cancelAnimationFrame(Yc))},async cast(z,ht,ut,ft={}){let St=ft.kind??"attack",Rt=z==="me"||z.startsWith("ally:"),Dt=St==="heal"?"#5dffa8":St==="mana"?"#ffd479":ft.fx==="bolt"?"#bfe6ff":ft.fx==="frost"?"#8fdcff":ft.fx==="fire"?"#ff8a3a":Rt?"#a98bff":"#ff6b6b",$t=S.get(z);if($t&&($t.lungeUntil=performance.now()+450),z==="me"&&(Qt=0,le=0),St!=="attack"){if(z==="me"&&vt!=="gone"&&H.visible){Tt=performance.now(),vt="gone";let se=new At(rt.gem.geometry,rt.gemMat),Ee=Vt("me","staff"),Ve=Vt("me","chest"),Xn=Ee.clone().lerp(Ve,.5).add(new T(0,.35,0));se.position.copy(Ee),se.scale.setScalar(1.3),o.add(se);let On=performance.now();await new Promise(ni=>{let Xi=()=>{let di=Math.min(1,(performance.now()-On)/520),fs=Ee.clone().lerp(Xn,di).lerp(Xn.clone().lerp(Ve,di),di);se.position.copy(fs),se.rotation.y+=.3,se.scale.setScalar(1.3*(1-di*.7)),Math.random()<.8&&_e(fs.clone(),Dt,{size:wt(.03,.07),life:.35,opacity:.9}),di<1?requestAnimationFrame(Xi):(o.remove(se),ni())};Xi()})}let Xe=Vt(z);for(let se=0;se<30;se++)_e(Xe.clone().add(new T(wt(-.5,.5),wt(-.8,.2),wt(-.3,.3))),Dt,{size:wt(.08,.2),vel:new T(wt(-.2,.2),wt(.8,1.8),0),life:wt(.6,1.1)});z==="me"&&An(St==="heal"?"80,255,160":"255,212,121"),ft.damage&&dr(z,`+${ft.damage}`,Dt);return}let Jt=Vt(z,z==="boss"?"mouth":"staff"),Pt=ht==="me"&&H.visible,xt=Vt(ht,"chest"),re=Pt?xt.clone().add(new T(Se(.42,xt.z)-xt.x,-.5,0)):xt,He=(ft.crit?1.5:1)*1.15,_n=Wc(Jt,re,ut,Dt,He,.85,Pt);if(ei[ei.length-1].target=ht,z==="me"){Tt=performance.now(),vt="gone";let Xe=new At(rt.gem.geometry,rt.gemMat);Xe.scale.setScalar(1.5),Xe.position.copy(Jt),o.add(Xe),ei[ei.length-1].gem=Xe}await _n,Pt?de(re,Dt,ft.crit?14:8,ft.crit?1.6:1.1,.12):de(re,Dt,ft.crit?46:28,ft.crit?4.4:3.2,.2);let Re=S.get(ht);Re&&(Re.hurtUntil=performance.now()+450),Pd(ht,ft.fx,re),ft.fx||Ud(z,ht,re),ht==="me"?(!ft.fx&&(N==="deck"||z==="boss")&&An(),Gi(ft.crit?.16:.09)):Gi(ft.crit?.07:.035),ft.damage&&dr(ht,`\u2212${ft.damage}${ft.crit?"!":""}`,ht==="me"?"#ff6b81":ft.crit?"#ff9a3a":"#ffd479")},fizzle(z){let ht=Vt(z,z==="boss"?"head":"staff");if(z!=="me")for(let ut=0;ut<14;ut++)_e(ht,10132136,{size:wt(.1,.25),vel:new T(wt(-.6,.6),wt(.3,1),wt(-.3,.3)),life:.8,opacity:.6});if(z==="me"){if(Qt=0,vt!=="gone"&&H.visible){rt.gem.getWorldPosition(Ft);for(let ut=0;ut<16;ut++)_e(Ft.clone(),Math.random()<.5?rt.color:10132136,{size:wt(.02,.05),vel:new T(wt(-.8,.8),wt(-.2,.9),wt(-.5,.5)),life:wt(.4,.7),gravity:-2.5})}vt="gone"}},ko(z){if(ei.some(St=>St.target===z)&&!Or.has(z)){Or.add(z);let St=performance.now(),Rt=()=>{if(ei.some(Dt=>Dt.target===z)&&performance.now()-St<2500){setTimeout(Rt,60);return}setTimeout(()=>{Or.delete(z),po.ko(z)},120)};Rt();return}if(Or.has(z))return;if(z==="me"){if(ie)return;ie=!0,Nt=null,rt.gem.getWorldPosition(Ft),de(Ft.clone(),10132136,18,1.6,.1),H.visible=!1;return}let ht=S.get(z);if(!ht||ht.ko)return;ht.ko=!0,ht.flame=null,ht.aura.material.opacity=0;let ut=performance.now(),ft=()=>{let St=Math.min(1,(performance.now()-ut)/700),Rt=St*St;ht.model?(ht.model.root.rotation.z=Math.PI/2*Rt,ht.model.root.position.y=.24*Rt):ht.spriteMat&&(ht.spriteMat.rotation=Math.PI/2*St*-1,ht.spriteMat.opacity=1-St*.6),St<1&&requestAnimationFrame(ft)};ft(),de(Vt(z),16777215,40,3,.25)},onfire(z,ht,ut){if(z==="me"){Nt=ht&&!ie?new zt(ut??"#6ee7ff"):null,Nt&&It(Nt);return}let ft=S.get(z);ft&&(ft.flame=ht?new zt(ut??"#6ee7ff"):null),ft?.model?.eyes&&(ft.model.eyes.visible=ht)},setPose(z,ht){let ut=Jo(ht)?ht:"none";if(z==="me"){Ct=ut;return}let ft=S.get(z);ft&&(ft.pose=ut)},focusOpp(z){Zc=z,H.visible=!z},setInset(z){Kt=z},prewarm(z,ht){if(!t.preview)return;let ut=z.filter(Rt=>!gt.has(`${Rt}-${ht}-${n}`)),ft=Rt=>(globalThis.requestIdleCallback??(Dt=>setTimeout(Dt,200)))(Rt,{timeout:2e3}),St=()=>{let Rt=ut.shift();if(!Rt)return;let Dt=`${Rt}-${ht}-${n}`;if(!gt.has(Dt))try{let $t=Ou(Rt,ht,n);$t&&gt.set(Dt,$t)}catch{}ft(St)};ft(St)},setBackground(z,ht,ut){ke&&(ke={...ke,bgKey:z,time:ht,bgSvg:ut},Fn(ke))},flashEyes(z){let ht=S.get(z);ht?.model?.eyes&&(ht.model.eyes.visible=!0,ht.eyesFlashUntil=performance.now()+1400)},channel(z){le=Math.max(0,Math.min(1,z))},twitch(){Mt(),Ie=.35,We.set(wt(-.35,.25),wt(-.25,.25),wt(-.3,.3)),Math.random()<.6&&vt==="ready"&&(rt.gem.getWorldPosition(Ft),_e(Ft.clone(),rt.color.clone().lerp(new zt(16777215),.5),{size:wt(.04,.09),vel:new T(wt(-.6,.6),wt(.2,.9),wt(-.3,.3)),life:.5}))},thrust(){Tt=performance.now(),rt.gem.getWorldPosition(Ft),de(Ft.clone(),rt.color,18,1.6,.08)},oppChannel(z){Cn=z},typing(z,ht){let ut=S.get(z);ut&&(ut.typing=ht)},inhale(z){Ce=z},breath(z,ht){Ce=!1;let ut=Vt("boss","mouth");for(let ft=0;ft<160;ft++)setTimeout(()=>{let Rt=(z.length?Vt(z[ft%z.length]):a.localToWorld(new T(0,-.2,-1))).clone().add(new T(wt(-1.5,1.5),wt(-.8,.8),0)).sub(ut).normalize().multiplyScalar(wt(7,11));_e(ut,Math.random()<.4?16765530:16734746,{size:wt(.3,.7),vel:Rt,life:wt(.6,.9),grow:1.2})},ft*5);setTimeout(()=>{for(let ft of z){let St=S.get(ft);St&&(St.hurtUntil=performance.now()+500,St.burnUntil=performance.now()+900),dr(ft,`\u2212${ht}`,"#ff9a3a")}z.includes("me")&&(An("255,120,30"),Gi(.16))},450)},claw(z,ht){let ut=S.get("boss");ut&&(ut.lungeUntil=performance.now()+450),setTimeout(()=>{let ft=S.get(z);ft&&(ft.hurtUntil=performance.now()+450),z==="me"&&(An("255,40,60","claw"),Gi(.13)),dr(z,`\u2212${ht}`,"#ff6b81")},200)},float:dr,look(z,ht,ut){let ft=S.get(z);!ft||!Number.isFinite(ht)||!Number.isFinite(ut)||(ft.look.yaw=Math.max(-oi,Math.min(oi,ht)),ft.look.pitch=Math.max(-kr,Math.min(kr,ut)),ft.look.at=performance.now())},setLite(z){let ht=n!==z;n=z,ht&&_t&&ke&&(pt="",Wi(ke)),e.setPixelRatio(s()),L.count=z?900:b,I.setDrawRange(0,z?90:lt),zr()},dispose(){po.setActive(!1),Wu?.disconnect(),removeEventListener("pointermove",us),removeEventListener("deviceorientation",Xc),removeEventListener("touchend",qc),removeEventListener("resize",zr),Ti.remove(),_t&&(_t.dispose(),_t=null),e.dispose()}};n&&po.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return rt},get gemState(){return vt},scene:o,camera:a,renderer:e,setStaff:(z,ht)=>{if(z==="me")F(ht);else{let ut=S.get(z);ut&&(ut.staffId=ht)}}}),zr();try{e.compile(o,a)}catch{}return po}globalThis.KWArena3D=sM;globalThis.KWStaffPreview=$f;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
