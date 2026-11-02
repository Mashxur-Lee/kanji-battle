"use strict";(()=>{var Ed=Object.defineProperty;var wd=(i,t,e)=>t in i?Ed(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Je=(i,t,e)=>wd(i,typeof t!="symbol"?t+"":t,e);var Sd=0,ku=1,Td=2;var $0=1,Rd=2,Xi=3,Fn=0,Yn=1,De=2,mr=0,Si=1,hn=2,zu=3,Vu=4,Ad=5,Xr=100,Cd=101,Pd=102,Id=103,Ld=104,Dd=200,Ud=201,Nd=202,Hd=203,wl=204,Sl=205,Fd=206,Od=207,Bd=208,kd=209,zd=210,Vd=211,Gd=212,Wd=213,Xd=214,Tl=0,Rl=1,Al=2,Us=3,Cl=4,Pl=5,Il=6,Ll=7,$h=0,Jh=1,qd=2,gr=0,Yd=1,Zd=2,Kd=3,Zo=4,$d=5,Jd=6,jd=7;var J0=300,Ns=301,Hs=302,Uo=303,Dl=304,bc=306,Zr=1e3,Yi=1001,Ul=1002,Tn=1003,Qd=1004;var aa=1005;var fi=1006,Vc=1007;var Yr=1008;var Ki=1009,j0=1010,Q0=1011,No=1012,jh=1013,Kr=1014,wi=1015,Ko=1016,Qh=1017,tu=1018,Fs=1020,tf=35902,ef=1021,nf=1022,pi=1023,rf=1024,sf=1025,Is=1026,Os=1027,eu=1028,nu=1029,of=1030,iu=1031;var ru=1033,ka=33776,za=33777,Va=33778,Ga=33779,Nl=35840,Hl=35841,Fl=35842,Ol=35843,Bl=36196,kl=37492,zl=37496,Vl=37808,Gl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,Zl=37814,Kl=37815,$l=37816,Jl=37817,jl=37818,Ql=37819,th=37820,eh=37821,Wa=36492,nh=36494,ih=36495,af=36283,rh=36284,sh=36285,oh=36286;var qa=2300,ah=2301,Gc=2302,Gu=2400,Wu=2401,Xu=2402;var tp=3200,ep=3201;var su=0,np=1,dr="",nn="srgb",br="srgb-linear",ou="display-p3",vc="display-p3-linear",Ya="linear",Ze="srgb",Za="rec709",Ka="p3";var hs=7680;var qu=519,ip=512,rp=513,sp=514,cf=515,op=516,ap=517,cp=518,lp=519,ch=35044;var Yu="300 es",Zi=2e3,$a=2001,_r=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zu=1234567,Ao=Math.PI/180,Ho=180/Math.PI;function Ti(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[e&63|128]+Nn[e>>8&255]+"-"+Nn[e>>16&255]+Nn[e>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function vn(i,t,e){return Math.max(t,Math.min(e,i))}function au(i,t){return(i%t+t)%t}function hp(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function up(i,t,e){return i!==t?(e-i)/(t-i):0}function Co(i,t,e){return(1-e)*i+e*t}function fp(i,t,e,n){return Co(i,t,1-Math.exp(-e*n))}function dp(i,t=1){return t-Math.abs(au(i,t*2)-t)}function pp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _p(i,t){return i+Math.random()*(t-i)}function yp(i){return i*(.5-Math.random())}function xp(i){i!==void 0&&(Zu=i);let t=Zu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mp(i){return i*Ao}function bp(i){return i*Ho}function vp(i){return(i&i-1)===0&&i!==0}function Ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sp(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ys={DEG2RAD:Ao,RAD2DEG:Ho,generateUUID:Ti,clamp:vn,euclideanModulo:au,mapLinear:hp,inverseLerp:up,lerp:Co,damp:fp,pingpong:dp,smoothstep:pp,smootherstep:mp,randInt:gp,randFloat:_p,randFloatSpread:yp,seededRandom:xp,degToRad:Mp,radToDeg:bp,isPowerOfTwo:vp,ceilPowerOfTwo:Ep,floorPowerOfTwo:wp,setQuaternionFromProperEuler:Sp,normalize:Be,denormalize:di},Nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_e=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=r[0],d=r[3],p=r[6],M=r[1],x=r[4],b=r[7],L=r[2],C=r[5],A=r[8];return s[0]=o*_+a*M+c*L,s[3]=o*d+a*x+c*C,s[6]=o*p+a*b+c*A,s[1]=l*_+h*M+u*L,s[4]=l*d+h*x+u*C,s[7]=l*p+h*b+u*A,s[2]=f*_+m*M+g*L,s[5]=f*d+m*x+g*C,s[8]=f*p+m*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*s,m=l*s-o*c,g=e*u+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wc.makeScale(t,e)),this}rotate(t){return this.premultiply(Wc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new _e;function lf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tp(){let i=Ja("canvas");return i.style.display="block",i}var Ku={};function Xa(i){i in Ku||(Ku[i]=!0,console.warn(i))}function Rp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ap(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $u=new _e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ju=new _e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[br]:{transfer:Ya,primaries:Za,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[nn]:{transfer:Ze,primaries:Za,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vc]:{transfer:Ya,primaries:Ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ju),fromReference:i=>i.applyMatrix3($u)},[ou]:{transfer:Ze,primaries:Ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ju),fromReference:i=>i.applyMatrix3($u).convertLinearToSRGB()}},Pp=new Set([br,vc]),Oe={enabled:!0,_workingColorSpace:br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Pp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=mo[t].toReference,r=mo[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return mo[i].primaries},getTransfer:function(i){return i===dr?Ya:mo[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(mo[t].luminanceCoefficients)}};function Ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,lh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=Ja("canvas")),us.width=t.width,us.height=t.height;let n=us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ja("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ls(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ls(e[n]/255)*255):e[n]=Ls(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ip=0,ja=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,Zn=class i extends _r{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,r=Yi,s=fi,o=Yr,a=pi,c=Ki,l=i.DEFAULT_ANISOTROPY,h=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ti(),this.name="",this.source=new ja(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==J0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=J0;Zn.DEFAULT_ANISOTROPY=1;var ze=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],g=c[9],_=c[2],d=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,b=(m+1)/2,L=(p+1)/2,C=(h+f)/4,A=(u+_)/4,z=(g+d)/4;return x>b&&x>L?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=A/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=z/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=z/s),this.set(n,r,s,e),this}let M=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hh=class extends _r{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Zn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ja(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$i=class extends hh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qa=class extends Zn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var uh=class extends Zn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qe=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==m||h!==g){let d=1-a,p=c*f+l*m+h*g+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let L=Math.sqrt(x),C=Math.atan2(L,p*M);d=Math.sin(d*C)/L,a=Math.sin(a*C)/L}let b=a*M;if(c=c*d+f*b,l=l*d+m*b,h=h*d+g*b,u=u*d+_*b,d===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*f,t[e+1]=c*g+h*f+l*u-a*m,t[e+2]=l*g+h*m+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"YZX":this._x=f*h*u+l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u-f*m*g;break;case"XZY":this._x=f*h*u-l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(vn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ju.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yc=new R,ju=new Qe,Ji=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),la.subVectors(this.max,go),fs.subVectors(t.a,go),ds.subVectors(t.b,go),ps.subVectors(t.c,go),ar.subVectors(ds,fs),cr.subVectors(ps,ds),Or.subVectors(fs,ps);let e=[0,-ar.z,ar.y,0,-cr.z,cr.y,0,-Or.z,Or.y,ar.z,0,-ar.x,cr.z,0,-cr.x,Or.z,0,-Or.x,-ar.y,ar.x,0,-cr.y,cr.x,0,-Or.y,Or.x,0];return!Zc(e,fs,ds,ps,la)||(e=[1,0,0,0,1,0,0,0,1],!Zc(e,fs,ds,ps,la))?!1:(ha.crossVectors(ar,cr),e=[ha.x,ha.y,ha.z],Zc(e,fs,ds,ps,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ki=[new R,new R,new R,new R,new R,new R,new R,new R],li=new R,ca=new Ji,fs=new R,ds=new R,ps=new R,ar=new R,cr=new R,Or=new R,go=new R,la=new R,ha=new R,Br=new R;function Zc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Br.fromArray(i,s);let a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),c=t.dot(Br),l=e.dot(Br),h=n.dot(Br);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Dp=new Ji,_o=new R,Kc=new R,ji=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dp.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);let e=_o.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(_o,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(Kc)),this.expandByPoint(_o.copy(t.center).sub(Kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new R,$c=new R,ua=new R,lr=new R,Jc=new R,fa=new R,jc=new R,Fo=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){$c.copy(t).add(e).multiplyScalar(.5),ua.copy(e).sub(t).normalize(),lr.copy(this.origin).sub($c);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ua),a=lr.dot(this.direction),c=-lr.dot(ua),l=lr.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*c-a,f=o*a-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy($c).addScaledVector(ua,f),m}intersectSphere(t,e){zi.subVectors(t.center,this.origin);let n=zi.dot(this.direction),r=zi.dot(zi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,n,r,s){Jc.subVectors(e,t),fa.subVectors(n,t),jc.crossVectors(Jc,fa);let o=this.direction.dot(jc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,t);let c=a*this.direction.dot(fa.crossVectors(lr,fa));if(c<0)return null;let l=a*this.direction.dot(Jc.cross(lr));if(l<0||c+l>o)return null;let h=-a*lr.dot(jc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,f,m,g,_,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,f,m,g,_,d)}set(t,e,n,r,s,o,a,c,l,h,u,f,m,g,_,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/ms.setFromMatrixColumn(t,0).length(),s=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,m=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,m=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Up,t,Np)}lookAt(t,e,n){let r=this.elements;return Qn.subVectors(t,e),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),hr.crossVectors(n,Qn),hr.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),hr.crossVectors(n,Qn)),hr.normalize(),da.crossVectors(Qn,hr),r[0]=hr.x,r[4]=da.x,r[8]=Qn.x,r[1]=hr.y,r[5]=da.y,r[9]=Qn.y,r[2]=hr.z,r[6]=da.z,r[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],M=n[3],x=n[7],b=n[11],L=n[15],C=r[0],A=r[4],z=r[8],O=r[12],y=r[1],v=r[5],q=r[9],k=r[13],Q=r[2],dt=r[6],K=r[10],ct=r[14],I=r[3],tt=r[7],B=r[11],j=r[15];return s[0]=o*C+a*y+c*Q+l*I,s[4]=o*A+a*v+c*dt+l*tt,s[8]=o*z+a*q+c*K+l*B,s[12]=o*O+a*k+c*ct+l*j,s[1]=h*C+u*y+f*Q+m*I,s[5]=h*A+u*v+f*dt+m*tt,s[9]=h*z+u*q+f*K+m*B,s[13]=h*O+u*k+f*ct+m*j,s[2]=g*C+_*y+d*Q+p*I,s[6]=g*A+_*v+d*dt+p*tt,s[10]=g*z+_*q+d*K+p*B,s[14]=g*O+_*k+d*ct+p*j,s[3]=M*C+x*y+b*Q+L*I,s[7]=M*A+x*v+b*dt+L*tt,s[11]=M*z+x*q+b*K+L*B,s[15]=M*O+x*k+b*ct+L*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*f+n*l*f+r*a*m-n*c*m)+_*(+e*c*m-e*l*f+s*o*f-r*o*m+r*l*h-s*c*h)+d*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*f+r*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],M=u*d*l-_*f*l+_*c*m-a*d*m-u*c*p+a*f*p,x=g*f*l-h*d*l-g*c*m+o*d*m+h*c*p-o*f*p,b=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*f+o*_*f+h*a*d-o*u*d,C=e*M+n*x+r*b+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=M*A,t[1]=(_*f*s-u*d*s-_*r*m+n*d*m+u*r*p-n*f*p)*A,t[2]=(a*d*s-_*c*s+_*r*l-n*d*l-a*r*p+n*c*p)*A,t[3]=(u*c*s-a*f*s-u*r*l+n*f*l+a*r*m-n*c*m)*A,t[4]=x*A,t[5]=(h*d*s-g*f*s+g*r*m-e*d*m-h*r*p+e*f*p)*A,t[6]=(g*c*s-o*d*s-g*r*l+e*d*l+o*r*p-e*c*p)*A,t[7]=(o*f*s-h*c*s+h*r*l-e*f*l-o*r*m+e*c*m)*A,t[8]=b*A,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*A,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*A,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*A,t[12]=L*A,t[13]=(h*_*r-g*u*r+g*n*f-e*_*f-h*n*d+e*u*d)*A,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*d-e*a*d)*A,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,f=s*l,m=s*h,g=s*u,_=o*h,d=o*u,p=a*u,M=c*l,x=c*h,b=c*u,L=n.x,C=n.y,A=n.z;return r[0]=(1-(_+p))*L,r[1]=(m+b)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(f+p))*C,r[6]=(d+M)*C,r[7]=0,r[8]=(g+x)*A,r[9]=(d-M)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=ms.set(r[0],r[1],r[2]).length(),o=ms.set(r[4],r[5],r[6]).length(),a=ms.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hi.copy(this);let l=1/s,h=1/o,u=1/a;return hi.elements[0]*=l,hi.elements[1]*=l,hi.elements[2]*=l,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,e.setFromRotationMatrix(hi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Zi){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r),m,g;if(a===Zi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===$a)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Zi){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),f=(e+t)*l,m=(n+r)*h,g,_;if(a===Zi)g=(o+s)*u,_=-2*u;else if(a===$a)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new R,hi=new le,Up=new R(0,0,0),Np=new R(1,1,1),hr=new R,da=new R,Qn=new R,Qu=new le,t0=new Qe,gn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return t0.setFromEuler(this),this.setFromQuaternion(t0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var tc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hp=0,e0=new R,gs=new Qe,Vi=new le,pa=new R,yo=new R,Fp=new R,Op=new Qe,n0=new R(1,0,0),i0=new R(0,1,0),r0=new R(0,0,1),s0={type:"added"},Bp={type:"removed"},_s={type:"childadded",child:null},Qc={type:"childremoved",child:null},un=class i extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new gn,n=new Qe,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new _e}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(n0,t)}rotateY(t){return this.rotateOnAxis(i0,t)}rotateZ(t){return this.rotateOnAxis(r0,t)}translateOnAxis(t,e){return e0.copy(t).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(n0,t)}translateY(t){return this.translateOnAxis(i0,t)}translateZ(t){return this.translateOnAxis(r0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pa.copy(t):pa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(yo,pa,this.up):Vi.lookAt(pa,yo,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(Vi),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s0),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bp),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s0),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,t,Fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,Op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};un.DEFAULT_UP=new R(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=new R,Gi=new R,tl=new R,Wi=new R,ys=new R,xs=new R,o0=new R,el=new R,nl=new R,il=new R,rl=new ze,sl=new ze,ol=new ze,pr=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ui.subVectors(t,e),r.cross(ui);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ui.subVectors(r,e),Gi.subVectors(n,e),tl.subVectors(t,e);let o=ui.dot(ui),a=ui.dot(Gi),c=ui.dot(tl),l=Gi.dot(Gi),h=Gi.dot(tl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wi.x),c.addScaledVector(o,Wi.y),c.addScaledVector(a,Wi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return rl.setScalar(0),sl.setScalar(0),ol.setScalar(0),rl.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,n),ol.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(rl,s.x),o.addScaledVector(sl,s.y),o.addScaledVector(ol,s.z),o}static isFrontFacing(t,e,n,r){return ui.subVectors(n,e),Gi.subVectors(t,e),ui.cross(Gi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ui.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;ys.subVectors(r,n),xs.subVectors(s,n),el.subVectors(t,n);let c=ys.dot(el),l=xs.dot(el);if(c<=0&&l<=0)return e.copy(n);nl.subVectors(t,r);let h=ys.dot(nl),u=xs.dot(nl);if(h>=0&&u<=h)return e.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ys,o);il.subVectors(t,s);let m=ys.dot(il),g=xs.dot(il);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(xs,a);let d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return o0.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(o0,a);let p=1/(d+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(ys,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},ma={h:0,s:0,l:0};function al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Oe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Oe.workingColorSpace){if(t=au(t,1),e=vn(e,0,1),n=vn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=al(o,s,t+1/3),this.g=al(o,s,t),this.b=al(o,s,t-1/3)}return Oe.toWorkingColorSpace(this,r),this}setStyle(t,e=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}copyLinearToSRGB(t){return this.r=Xc(t.r),this.g=Xc(t.g),this.b=Xc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Oe.fromWorkingColorSpace(Hn.copy(this),t),Math.round(vn(Hn.r*255,0,255))*65536+Math.round(vn(Hn.g*255,0,255))*256+Math.round(vn(Hn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oe.workingColorSpace){Oe.fromWorkingColorSpace(Hn.copy(this),e);let n=Hn.r,r=Hn.g,s=Hn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=nn){Oe.fromWorkingColorSpace(Hn.copy(this),t);let e=Hn.r,n=Hn.g,r=Hn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+e,ur.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ur),t.getHSL(ma);let n=Co(ur.h,ma.h,e),r=Co(ur.s,ma.s,e),s=Co(ur.l,ma.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new Vt;Vt.NAMES=hf;var kp=0,mi=class extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Si,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Sl,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==Xr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rn=class extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ln=new R,ga=new Nt,Ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),r=Be(r,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ch&&(t.usage=this.usage),t}};var ec=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var nc=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},zp=0,ii=new le,cl=new un,Ms=new R,ti=new Ji,xo=new Ji,bn=new R,Ee=class i extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lf(t)?nc:ec)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new _e().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return cl.lookAt(t),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];ti.setFromBufferAttribute(s),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(ti.min,xo.min),ti.expandByPoint(bn),bn.addVectors(ti.max,xo.max),ti.expandByPoint(bn)):(ti.expandByPoint(xo.min),ti.expandByPoint(xo.max))}ti.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)bn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(bn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)bn.fromBufferAttribute(a,l),c&&(Ms.fromBufferAttribute(t,l),bn.add(Ms)),r=Math.max(r,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new R,c[z]=new R;let l=new R,h=new R,u=new R,f=new Nt,m=new Nt,g=new Nt,_=new R,d=new R;function p(z,O,y){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,y),f.fromBufferAttribute(s,z),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,y),h.sub(l),u.sub(l),m.sub(f),g.sub(f);let v=1/(m.x*g.y-g.x*m.y);isFinite(v)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(v),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(v),a[z].add(_),a[O].add(_),a[y].add(_),c[z].add(d),c[O].add(d),c[y].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let z=0,O=M.length;z<O;++z){let y=M[z],v=y.start,q=y.count;for(let k=v,Q=v+q;k<Q;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let x=new R,b=new R,L=new R,C=new R;function A(z){L.fromBufferAttribute(r,z),C.copy(L);let O=a[z];x.copy(O),x.sub(L.multiplyScalar(L.dot(O))).normalize(),b.crossVectors(C,O);let v=b.dot(c[z])<0?-1:1;o.setXYZW(z,x.x,x.y,x.z,v)}for(let z=0,O=M.length;z<O;++z){let y=M[z],v=y.start,q=y.count;for(let k=v,Q=v+q;k<Q;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)bn.fromBufferAttribute(t,e),bn.normalize(),t.setXYZ(e,bn.x,bn.y,bn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),m=0,g=0;for(let _=0,d=c.length;_<d;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[m++]}return new Ue(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},a0=new le,kr=new Fo,_a=new ji,c0=new R,ya=new R,xa=new R,Ma=new R,ll=new R,ba=new R,l0=new R,va=new R,Tt=class extends un{constructor(t=new Ee,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){ba.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(ll.fromBufferAttribute(u,t),o?ba.addScaledVector(ll,h):ba.addScaledVector(ll.sub(e),h))}e.add(ba)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),kr.copy(t.ray).recast(t.near),!(_a.containsPoint(kr.origin)===!1&&(kr.intersectSphere(_a,c0)===null||kr.origin.distanceToSquared(c0)>(t.far-t.near)**2))&&(a0.copy(s).invert(),kr.copy(t.ray).applyMatrix4(a0),!(n.boundingBox!==null&&kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let d=f[g],p=o[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let b=M,L=x;b<L;b+=3){let C=a.getX(b),A=a.getX(b+1),z=a.getX(b+2);r=Ea(this,p,t,n,l,h,u,C,A,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){let M=a.getX(d),x=a.getX(d+1),b=a.getX(d+2);r=Ea(this,o,t,n,l,h,u,M,x,b),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let d=f[g],p=o[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let b=M,L=x;b<L;b+=3){let C=b,A=b+1,z=b+2;r=Ea(this,p,t,n,l,h,u,C,A,z),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){let M=d,x=d+1,b=d+2;r=Ea(this,o,t,n,l,h,u,M,x,b),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}};function Vp(i,t,e,n,r,s,o,a){let c;if(t.side===Yn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Fn,a),c===null)return null;va.copy(a),va.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(va);return l<e.near||l>e.far?null:{distance:l,point:va.clone(),object:i}}function Ea(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,ya),i.getVertexPosition(c,xa),i.getVertexPosition(l,Ma);let h=Vp(i,t,e,n,ya,xa,Ma,l0);if(h){let u=new R;pr.getBarycoord(l0,ya,xa,Ma,u),r&&(h.uv=pr.getInterpolatedAttribute(r,a,c,l,u,new Nt)),s&&(h.uv1=pr.getInterpolatedAttribute(s,a,c,l,u,new Nt)),o&&(h.normal=pr.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new R,materialIndex:0};pr.getNormal(ya,xa,Ma,f.normal),h.face=f,h.barycoord=u}return h}var sn=class i extends Ee{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(_,d,p,M,x,b,L,C,A,z,O){let y=b/A,v=L/z,q=b/2,k=L/2,Q=C/2,dt=A+1,K=z+1,ct=0,I=0,tt=new R;for(let B=0;B<K;B++){let j=B*v-k;for(let ot=0;ot<dt;ot++){let Z=ot*y-q;tt[_]=Z*M,tt[d]=j*x,tt[p]=Q,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[d]=0,tt[p]=C>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(ot/A),u.push(1-B/z),ct+=1}}for(let B=0;B<z;B++)for(let j=0;j<A;j++){let ot=f+j+dt*B,Z=f+j+dt*(B+1),T=f+(j+1)+dt*(B+1),S=f+(j+1)+dt*B;c.push(ot,Z,S),c.push(Z,T,S),I+=6}a.addGroup(m,I,O),m+=I,f+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Wn(i){let t={};for(let e=0;e<i.length;e++){let n=Bs(i[e]);for(let r in n)t[r]=n[r]}return t}function Gp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}var Wp={clone:Bs,merge:Wn},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ic=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fr=new R,h0=new Nt,u0=new Nt,En=class extends ic{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fr.x,fr.y).multiplyScalar(-t/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-t/fr.z)}getViewSize(t,e){return this.getViewBounds(t,h0,u0),e.subVectors(u0,h0)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bs=-90,vs=1,fh=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new En(bs,vs,t,e);r.layers=this.layers,this.add(r);let s=new En(bs,vs,t,e);s.layers=this.layers,this.add(s);let o=new En(bs,vs,t,e);o.layers=this.layers,this.add(o);let a=new En(bs,vs,t,e);a.layers=this.layers,this.add(a);let c=new En(bs,vs,t,e);c.layers=this.layers,this.add(c);let l=new En(bs,vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},rc=class extends Zn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},dh=class extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new rc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sn(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:mr});s.uniforms.tEquirect.value=e;let o=new Tt(r,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=fi),new fh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},hl=new R,Yp=new R,Zp=new _e,qi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=hl.subVectors(n,e).cross(Yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(hl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zp.getNormalMatrix(t),r=this.coplanarPoint(hl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zr=new ji,wa=new R,Oo=class{constructor(t=new qi,e=new qi,n=new qi,r=new qi,s=new qi,o=new qi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zi){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],f=r[7],m=r[8],g=r[9],_=r[10],d=r[11],p=r[12],M=r[13],x=r[14],b=r[15];if(n[0].setComponents(c-s,f-l,d-m,b-p).normalize(),n[1].setComponents(c+s,f+l,d+m,b+p).normalize(),n[2].setComponents(c+o,f+h,d+g,b+M).normalize(),n[3].setComponents(c-o,f-h,d-g,b-M).normalize(),n[4].setComponents(c-a,f-u,d-_,b-x).normalize(),e===Zi)n[5].setComponents(c+a,f+u,d+_,b+x).normalize();else if(e===$a)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(t){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(t.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(wa.x=r.normal.x>0?t.max.x:t.min.x,wa.y=r.normal.y>0?t.max.y:t.min.y,wa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ff(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Kp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){let g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Qi=class i extends Ee{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,f=e/c,m=[],g=[],_=[],d=[];for(let p=0;p<h;p++){let M=p*f-o;for(let x=0;x<l;x++){let b=x*u-s;g.push(b,-M,0),_.push(0,0,1),d.push(x/a),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let x=M+l*p,b=M+l*(p+1),L=M+1+l*(p+1),C=M+1+l*p;m.push(x,b,C),m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,hm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bm=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`
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
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
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
#endif`,Zm=`struct PhysicalMaterial {
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
}`,Km=`
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
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
#endif`,fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ug=`float getShadowMask() {
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
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
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
}`,n1=`#if DEPTH_PACKING == 3200
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
}`,i1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,l1=`#include <common>
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
}`,h1=`uniform vec3 diffuse;
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
}`,u1=`#define LAMBERT
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
}`,f1=`#define LAMBERT
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
}`,d1=`#define MATCAP
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
}`,p1=`#define MATCAP
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
}`,m1=`#define NORMAL
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
}`,g1=`#define NORMAL
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
}`,_1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,M1=`#define STANDARD
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
}`,b1=`#define TOON
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
}`,v1=`#define TOON
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
}`,E1=`uniform float size;
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
}`,w1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,T1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,A1=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:$p,alphahash_pars_fragment:Jp,alphamap_fragment:jp,alphamap_pars_fragment:Qp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:rm,batching_vertex:sm,begin_vertex:om,beginnormal_vertex:am,bsdfs:cm,iridescence_fragment:lm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:dm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:ym,common:xm,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:bm,displacementmap_pars_vertex:vm,displacementmap_vertex:Em,emissivemap_fragment:wm,emissivemap_pars_fragment:Sm,colorspace_fragment:Tm,colorspace_pars_fragment:Rm,envmap_fragment:Am,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Pm,envmap_pars_vertex:Im,envmap_physical_pars_fragment:Vm,envmap_vertex:Lm,fog_vertex:Dm,fog_pars_vertex:Um,fog_fragment:Nm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:km,lights_pars_begin:zm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:qm,lights_physical_fragment:Ym,lights_physical_pars_fragment:Zm,lights_fragment_begin:Km,lights_fragment_maps:$m,lights_fragment_end:Jm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:eg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:rg,map_particle_pars_fragment:sg,metalnessmap_fragment:og,metalnessmap_pars_fragment:ag,morphinstance_vertex:cg,morphcolor_vertex:lg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:fg,normal_fragment_begin:dg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:gg,normal_vertex:_g,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:vg,opaque_fragment:Eg,packing:wg,premultiplied_alpha_fragment:Sg,project_vertex:Tg,dithering_fragment:Rg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ug,skinbase_vertex:Ng,skinning_pars_vertex:Hg,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:Bg,specularmap_pars_fragment:kg,tonemapping_fragment:zg,tonemapping_pars_fragment:Vg,transmission_fragment:Gg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:qg,uv_vertex:Yg,worldpos_vertex:Zg,background_vert:Kg,background_frag:$g,backgroundCube_vert:Jg,backgroundCube_frag:jg,cube_vert:Qg,cube_frag:t1,depth_vert:e1,depth_frag:n1,distanceRGBA_vert:i1,distanceRGBA_frag:r1,equirect_vert:s1,equirect_frag:o1,linedashed_vert:a1,linedashed_frag:c1,meshbasic_vert:l1,meshbasic_frag:h1,meshlambert_vert:u1,meshlambert_frag:f1,meshmatcap_vert:d1,meshmatcap_frag:p1,meshnormal_vert:m1,meshnormal_frag:g1,meshphong_vert:_1,meshphong_frag:y1,meshphysical_vert:x1,meshphysical_frag:M1,meshtoon_vert:b1,meshtoon_frag:v1,points_vert:E1,points_frag:w1,shadow_vert:S1,shadow_frag:T1,sprite_vert:R1,sprite_frag:A1},Yt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Ei={basic:{uniforms:Wn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Wn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Wn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Wn([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Wn([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Wn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Wn([Yt.points,Yt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Wn([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Wn([Yt.common,Yt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Wn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Wn([Yt.sprite,Yt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Wn([Yt.common,Yt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Wn([Yt.lights,Yt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ei.physical={uniforms:Wn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var Sa={r:0,b:0,g:0},Vr=new gn,C1=new le;function P1(i,t,e,n,r,s,o){let a=new Vt(0),c=s===!0?0:1,l,h,u=null,f=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,b=g(M);b===null?p(a,c):b&&b.isColor&&(p(b,1),x=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(M,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===bc)?(h===void 0&&(h=new Tt(new sn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Bs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Vr.copy(x.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Vr)),h.material.toneMapped=Oe.getTransfer(b.colorSpace)!==Ze,(u!==b||f!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Tt(new Qi(2,2),new Kn({name:"BackgroundMaterial",uniforms:Bs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Oe.getTransfer(b.colorSpace)!==Ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(Sa,uf(i)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:d}}function I1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(y,v,q,k,Q){let dt=!1,K=u(k,q,v);s!==K&&(s=K,l(s.object)),dt=m(y,k,q,Q),dt&&g(y,k,q,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(dt||o)&&(o=!1,b(y,v,q,k),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,v,q){let k=q.wireframe===!0,Q=n[y.id];Q===void 0&&(Q={},n[y.id]=Q);let dt=Q[v.id];dt===void 0&&(dt={},Q[v.id]=dt);let K=dt[k];return K===void 0&&(K=f(c()),dt[k]=K),K}function f(y){let v=[],q=[],k=[];for(let Q=0;Q<e;Q++)v[Q]=0,q[Q]=0,k[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:q,attributeDivisors:k,object:y,attributes:{},index:null}}function m(y,v,q,k){let Q=s.attributes,dt=v.attributes,K=0,ct=q.getAttributes();for(let I in ct)if(ct[I].location>=0){let B=Q[I],j=dt[I];if(j===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;K++}return s.attributesNum!==K||s.index!==k}function g(y,v,q,k){let Q={},dt=v.attributes,K=0,ct=q.getAttributes();for(let I in ct)if(ct[I].location>=0){let B=dt[I];B===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(B=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(B=y.instanceColor));let j={};j.attribute=B,B&&B.data&&(j.data=B.data),Q[I]=j,K++}s.attributes=Q,s.attributesNum=K,s.index=k}function _(){let y=s.newAttributes;for(let v=0,q=y.length;v<q;v++)y[v]=0}function d(y){p(y,0)}function p(y,v){let q=s.newAttributes,k=s.enabledAttributes,Q=s.attributeDivisors;q[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),Q[y]!==v&&(i.vertexAttribDivisor(y,v),Q[y]=v)}function M(){let y=s.newAttributes,v=s.enabledAttributes;for(let q=0,k=v.length;q<k;q++)v[q]!==y[q]&&(i.disableVertexAttribArray(q),v[q]=0)}function x(y,v,q,k,Q,dt,K){K===!0?i.vertexAttribIPointer(y,v,q,Q,dt):i.vertexAttribPointer(y,v,q,k,Q,dt)}function b(y,v,q,k){_();let Q=k.attributes,dt=q.getAttributes(),K=v.defaultAttributeValues;for(let ct in dt){let I=dt[ct];if(I.location>=0){let tt=Q[ct];if(tt===void 0&&(ct==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),ct==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){let B=tt.normalized,j=tt.itemSize,ot=t.get(tt);if(ot===void 0)continue;let Z=ot.buffer,T=ot.type,S=ot.bytesPerElement,D=T===i.INT||T===i.UNSIGNED_INT||tt.gpuType===jh;if(tt.isInterleavedBufferAttribute){let G=tt.data,U=G.stride,N=tt.offset;if(G.isInstancedInterleavedBuffer){for(let W=0;W<I.locationSize;W++)p(I.location+W,G.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let W=0;W<I.locationSize;W++)d(I.location+W);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let W=0;W<I.locationSize;W++)x(I.location+W,j/I.locationSize,T,B,U*S,(N+j/I.locationSize*W)*S,D)}else{if(tt.isInstancedBufferAttribute){for(let G=0;G<I.locationSize;G++)p(I.location+G,tt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let G=0;G<I.locationSize;G++)d(I.location+G);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let G=0;G<I.locationSize;G++)x(I.location+G,j/I.locationSize,T,B,j*S,j/I.locationSize*G*S,D)}}else if(K!==void 0){let B=K[ct];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(I.location,B);break;case 3:i.vertexAttrib3fv(I.location,B);break;case 4:i.vertexAttrib4fv(I.location,B);break;default:i.vertexAttrib1fv(I.location,B)}}}}M()}function L(){z();for(let y in n){let v=n[y];for(let q in v){let k=v[q];for(let Q in k)h(k[Q].object),delete k[Q];delete v[q]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;let v=n[y.id];for(let q in v){let k=v[q];for(let Q in k)h(k[Q].object),delete k[Q];delete v[q]}delete n[y.id]}function A(y){for(let v in n){let q=n[v];if(q[y.id]===void 0)continue;let k=q[y.id];for(let Q in k)h(k[Q].object),delete k[Q];delete q[y.id]}}function z(){O(),o=!0,s!==r&&(s=r,l(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:d,disableUnusedAttributes:M}}function L1(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,f){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function D1(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==pi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let z=A===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ki&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wi&&!z)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:L,maxSamples:C}}function U1(i){let t=this,e=null,n=0,r=!1,s=!1,o=new qi,a=new _e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!d)s?h(null):l();else{let M=s?0:n,x=M*4,b=p.clippingState||null;c.value=b,b=h(g,f,x,m);for(let L=0;L!==x;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){let _=u!==null?u.length:0,d=null;if(_!==0){if(d=c.value,g!==!0||d===null){let p=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<p)&&(d=new Float32Array(p));for(let x=0,b=m;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(d,b),d[b+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function N1(i){let t=new WeakMap;function e(o,a){return a===Uo?o.mapping=Ns:a===Dl&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uo||a===Dl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new dh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var sc=class extends ic{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cs=4,f0=[.125,.215,.35,.446,.526,.582],qr=20,ul=new sc,d0=new Vt,fl=null,dl=0,pl=0,ml=!1,Wr=(1+Math.sqrt(5))/2,Es=1/Wr,p0=[new R(-Wr,Es,0),new R(Wr,Es,0),new R(-Es,0,Wr),new R(Es,0,Wr),new R(0,Wr,-Es),new R(0,Wr,Es),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],oc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fl,dl,pl),this._renderer.xr.enabled=ml,t.scissorTest=!1,Ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Ko,format:pi,colorSpace:br,depthBuffer:!1},r=m0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m0(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H1(s)),this._blurMaterial=F1(s,t,e)}return r}_compileMaterial(t){let e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,ul)}_sceneToCubeUV(t,e,n,r){let a=new En(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(d0),h.toneMapping=gr,h.autoClear=!1;let m=new rn({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),g=new Tt(new sn,m),_=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(d0),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Ta(r,M*x,p>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Ns||t.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Ta(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ul)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=p0[(r-s-1)%p0.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Tt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qr-1),_=s/g,d=isFinite(s)?1+Math.floor(h*_):qr;d>qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${qr}`);let p=[],M=0;for(let A=0;A<qr;++A){let z=A/_,O=Math.exp(-z*z/2);p.push(O),A===0?M+=O:A<d&&(M+=2*O)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let b=this._sizeLods[r],L=3*b*(r>x-Cs?r-x+Cs:0),C=4*(this._cubeSize-b);Ta(e,L,C,3*b,2*b),c.setRenderTarget(e),c.render(u,ul)}};function H1(i){let t=[],e=[],n=[],r=i,s=i-Cs+1+f0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Cs?c=f0[o-i+Cs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,d=2,p=1,M=new Float32Array(_*g*m),x=new Float32Array(d*g*m),b=new Float32Array(p*g*m);for(let C=0;C<m;C++){let A=C%3*2/3-1,z=C>2?0:-1,O=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];M.set(O,_*g*C),x.set(f,d*g*C);let y=[C,C,C,C,C,C];b.set(y,p*g*C)}let L=new Ee;L.setAttribute("position",new Ue(M,_)),L.setAttribute("uv",new Ue(x,d)),L.setAttribute("faceIndex",new Ue(b,p)),t.push(L),r>Cs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function m0(i,t,e){let n=new $i(i,t,e);return n.texture.mapping=bc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function F1(i,t,e){let n=new Float32Array(qr),r=new R(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cu(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function g0(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function _0(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function O1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Uo||c===Dl,h=c===Ns||c===Hs;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new oc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new oc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function B1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Xa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function k1(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)t.remove(_[d])}f.removeEventListener("dispose",o),delete r[f.id];let m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let d=0,p=_.length;d<p;d++)t.update(_[d],i.ARRAY_BUFFER)}}function l(u){let f=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let M=m.array;_=m.version;for(let x=0,b=M.length;x<b;x+=3){let L=M[x+0],C=M[x+1],A=M[x+2];f.push(L,C,C,A,A,L)}}else if(g!==void 0){let M=g.array;_=g.version;for(let x=0,b=M.length/3-1;x<b;x+=3){let L=x+0,C=x+1,A=x+2;f.push(L,C,C,A,A,L)}}else return;let d=new(lf(f)?nc:ec)(f,1);d.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,d)}function h(u){let f=s.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function z1(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*o),e.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*o,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,n,1)}function u(f,m,g,_){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)l(f[p]/o,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=m[M];for(let M=0;M<_.length;M++)e.update(p,n,_[M])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function V1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function G1(i,t,e){let n=new WeakMap,r=new ze;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let O=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let b=a.attributes.position.count*x,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*L*4*u),A=new Qa(C,b,L,u);A.type=wi,A.needsUpdate=!0;let z=x*4;for(let y=0;y<u;y++){let v=d[y],q=p[y],k=M[y],Q=b*L*4*y;for(let dt=0;dt<v.count;dt++){let K=dt*z;m===!0&&(r.fromBufferAttribute(v,dt),C[Q+K+0]=r.x,C[Q+K+1]=r.y,C[Q+K+2]=r.z,C[Q+K+3]=0),g===!0&&(r.fromBufferAttribute(q,dt),C[Q+K+4]=r.x,C[Q+K+5]=r.y,C[Q+K+6]=r.z,C[Q+K+7]=0),_===!0&&(r.fromBufferAttribute(k,dt),C[Q+K+8]=r.x,C[Q+K+9]=r.y,C[Q+K+10]=r.z,C[Q+K+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new Nt(b,L)},n.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function W1(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var ac=class extends Zn{constructor(t,e,n,r,s,o,a,c,l,h=Is){if(h!==Is&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=Kr),n===void 0&&h===Os&&(n=Fs),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},df=new Zn,y0=new ac(1,1),pf=new Qa,mf=new uh,gf=new rc,x0=[],M0=[],b0=new Float32Array(16),v0=new Float32Array(9),E0=new Float32Array(4);function Zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=x0[r];if(s===void 0&&(s=new Float32Array(r),x0[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function _n(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function yn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ec(i,t){let e=M0[t];e===void 0&&(e=new Int32Array(t),M0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function X1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2fv(this.addr,t),yn(e,t)}}function Y1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;i.uniform3fv(this.addr,t),yn(e,t)}}function Z1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4fv(this.addr,t),yn(e,t)}}function K1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,n))return;E0.set(n),i.uniformMatrix2fv(this.addr,!1,E0),yn(e,n)}}function $1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,n))return;v0.set(n),i.uniformMatrix3fv(this.addr,!1,v0),yn(e,n)}}function J1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),yn(e,t)}else{if(_n(e,n))return;b0.set(n),i.uniformMatrix4fv(this.addr,!1,b0),yn(e,n)}}function j1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2iv(this.addr,t),yn(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3iv(this.addr,t),yn(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4iv(this.addr,t),yn(e,t)}}function n_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2uiv(this.addr,t),yn(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3uiv(this.addr,t),yn(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4uiv(this.addr,t),yn(e,t)}}function o_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(y0.compareFunction=cf,s=y0):s=df,e.setTexture2D(t||s,r)}function a_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||mf,r)}function c_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||gf,r)}function l_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||pf,r)}function h_(i){switch(i){case 5126:return X1;case 35664:return q1;case 35665:return Y1;case 35666:return Z1;case 35674:return K1;case 35675:return $1;case 35676:return J1;case 5124:case 35670:return j1;case 35667:case 35671:return Q1;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return r_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return l_}}function u_(i,t){i.uniform1fv(this.addr,t)}function f_(i,t){let e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function d_(i,t){let e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function p_(i,t){let e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function m_(i,t){let e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function g_(i,t){let e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function __(i,t){let e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y_(i,t){i.uniform1iv(this.addr,t)}function x_(i,t){i.uniform2iv(this.addr,t)}function M_(i,t){i.uniform3iv(this.addr,t)}function b_(i,t){i.uniform4iv(this.addr,t)}function v_(i,t){i.uniform1uiv(this.addr,t)}function E_(i,t){i.uniform2uiv(this.addr,t)}function w_(i,t){i.uniform3uiv(this.addr,t)}function S_(i,t){i.uniform4uiv(this.addr,t)}function T_(i,t,e){let n=this.cache,r=t.length,s=Ec(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||df,s[o])}function R_(i,t,e){let n=this.cache,r=t.length,s=Ec(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||mf,s[o])}function A_(i,t,e){let n=this.cache,r=t.length,s=Ec(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||gf,s[o])}function C_(i,t,e){let n=this.cache,r=t.length,s=Ec(e,r);_n(n,s)||(i.uniform1iv(this.addr,s),yn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||pf,s[o])}function P_(i){switch(i){case 5126:return u_;case 35664:return f_;case 35665:return d_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return y_;case 35667:case 35671:return x_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return v_;case 36294:return E_;case 36295:return w_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return C_}}var ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=h_(e.type)}},mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P_(e.type)}},gh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function w0(i,t){i.seq.push(t),i.map[t.id]=t}function I_(i,t,e){let n=i.name,r=n.length;for(gl.lastIndex=0;;){let s=gl.exec(n),o=gl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){w0(e,l===void 0?new ph(a,i,t):new mh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new gh(a),w0(e,u)),e=u}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);I_(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function S0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var L_=37297,D_=0;function U_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function N_(i){let t=Oe.getPrimaries(Oe.workingColorSpace),e=Oe.getPrimaries(i),n;switch(t===e?n="":t===Ka&&e===Za?n="LinearDisplayP3ToLinearSRGB":t===Za&&e===Ka&&(n="LinearSRGBToLinearDisplayP3"),i){case br:case vc:return[n,"LinearTransferOETF"];case nn:case ou:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function T0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+U_(i.getShaderSource(t),o)}else return r}function H_(i,t){let e=N_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function F_(i,t){let e;switch(t){case Yd:e="Linear";break;case Zd:e="Reinhard";break;case Kd:e="Cineon";break;case Zo:e="ACESFilmic";break;case Jd:e="AgX";break;case jd:e="Neutral";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ra=new R;function O_(){Oe.getLuminanceCoefficients(Ra);let i=Ra.x.toFixed(4),t=Ra.y.toFixed(4),e=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function k_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function z_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ro(i){return i!==""}function R0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function A0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(V_,W_)}var G_=new Map;function W_(i,t){let e=ge[t];if(e===void 0){let n=G_.get(t);if(n!==void 0)e=ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _h(e)}var X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(i){return i.replace(X_,q_)}function q_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function P0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Y_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function Z_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Hs:t="ENVMAP_TYPE_CUBE";break;case bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Hs&&(t="ENVMAP_MODE_REFRACTION"),t}function $_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case qd:t="ENVMAP_BLENDING_ADD";break}return t}function J_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function j_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Y_(e),l=Z_(e),h=K_(e),u=$_(e),f=J_(e),m=B_(e),g=k_(s),_=r.createProgram(),d,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ro).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(d=[P0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[P0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gr?"#define TONE_MAPPING":"",e.toneMapping!==gr?ge.tonemapping_pars_fragment:"",e.toneMapping!==gr?F_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,H_("linearToOutputTexel",e.outputColorSpace),O_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),o=_h(o),o=R0(o,e),o=A0(o,e),a=_h(a),a=R0(a,e),a=A0(a,e),o=C0(o),a=C0(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=M+d+o,b=M+p+a,L=S0(r,r.VERTEX_SHADER,x),C=S0(r,r.FRAGMENT_SHADER,b);r.attachShader(_,L),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(v){if(i.debug.checkShaderErrors){let q=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(L).trim(),Q=r.getShaderInfoLog(C).trim(),dt=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(dt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,C);else{let ct=T0(r,L,"vertex"),I=T0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+q+`
`+ct+`
`+I)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(k===""||Q==="")&&(K=!1);K&&(v.diagnostics={runnable:dt,programLog:q,vertexShader:{log:k,prefix:d},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(L),r.deleteShader(C),z=new Ds(r,_),O=z_(r,_)}let z;this.getUniforms=function(){return z===void 0&&A(this),z};let O;this.getAttributes=function(){return O===void 0&&A(this),O};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,L_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}var Q_=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xh(t),e.set(t,n)),n}},xh=class{constructor(t){this.id=Q_++,this.code=t,this.usedTimes=0}};function ty(i,t,e,n,r,s,o){let a=new tc,c=new yh,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,v,q,k,Q){let dt=k.fog,K=Q.geometry,ct=y.isMeshStandardMaterial?k.environment:null,I=(y.isMeshStandardMaterial?e:t).get(y.envMap||ct),tt=I&&I.mapping===bc?I.image.height:null,B=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let j=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=j!==void 0?j.length:0,Z=0;K.morphAttributes.position!==void 0&&(Z=1),K.morphAttributes.normal!==void 0&&(Z=2),K.morphAttributes.color!==void 0&&(Z=3);let T,S,D,G;if(B){let pn=Ei[B];T=pn.vertexShader,S=pn.fragmentShader}else T=y.vertexShader,S=y.fragmentShader,c.update(y),D=c.getVertexShaderID(y),G=c.getFragmentShaderID(y);let U=i.getRenderTarget(),N=Q.isInstancedMesh===!0,W=Q.isBatchedMesh===!0,$=!!y.map,V=!!y.matcap,w=!!I,nt=!!y.aoMap,J=!!y.lightMap,X=!!y.bumpMap,et=!!y.normalMap,it=!!y.displacementMap,ht=!!y.emissiveMap,P=!!y.metalnessMap,E=!!y.roughnessMap,F=y.anisotropy>0,st=y.clearcoat>0,lt=y.dispersion>0,rt=y.iridescence>0,wt=y.sheen>0,Et=y.transmission>0,_t=F&&!!y.anisotropyMap,Ut=st&&!!y.clearcoatMap,yt=st&&!!y.clearcoatNormalMap,Ct=st&&!!y.clearcoatRoughnessMap,Xt=rt&&!!y.iridescenceMap,kt=rt&&!!y.iridescenceThicknessMap,At=wt&&!!y.sheenColorMap,Ht=wt&&!!y.sheenRoughnessMap,Kt=!!y.specularMap,ne=!!y.specularColorMap,at=!!y.specularIntensityMap,Dt=Et&&!!y.transmissionMap,xt=Et&&!!y.thicknessMap,Rt=!!y.gradientMap,Zt=!!y.alphaMap,Ot=y.alphaTest>0,ue=!!y.alphaHash,Ke=!!y.extensions,dn=gr;y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(dn=i.toneMapping);let Ae={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:T,fragmentShader:S,defines:y.defines,customVertexShaderID:D,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:W,batchingColor:W&&Q._colorsTexture!==null,instancing:N,instancingColor:N&&Q.instanceColor!==null,instancingMorph:N&&Q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:br,alphaToCoverage:!!y.alphaToCoverage,map:$,matcap:V,envMap:w,envMapMode:w&&I.mapping,envMapCubeUVHeight:tt,aoMap:nt,lightMap:J,bumpMap:X,normalMap:et,displacementMap:m&&it,emissiveMap:ht,normalMapObjectSpace:et&&y.normalMapType===np,normalMapTangentSpace:et&&y.normalMapType===su,metalnessMap:P,roughnessMap:E,anisotropy:F,anisotropyMap:_t,clearcoat:st,clearcoatMap:Ut,clearcoatNormalMap:yt,clearcoatRoughnessMap:Ct,dispersion:lt,iridescence:rt,iridescenceMap:Xt,iridescenceThicknessMap:kt,sheen:wt,sheenColorMap:At,sheenRoughnessMap:Ht,specularMap:Kt,specularColorMap:ne,specularIntensityMap:at,transmission:Et,transmissionMap:Dt,thicknessMap:xt,gradientMap:Rt,opaque:y.transparent===!1&&y.blending===Si&&y.alphaToCoverage===!1,alphaMap:Zt,alphaTest:Ot,alphaHash:ue,combine:y.combine,mapUv:$&&d(y.map.channel),aoMapUv:nt&&d(y.aoMap.channel),lightMapUv:J&&d(y.lightMap.channel),bumpMapUv:X&&d(y.bumpMap.channel),normalMapUv:et&&d(y.normalMap.channel),displacementMapUv:it&&d(y.displacementMap.channel),emissiveMapUv:ht&&d(y.emissiveMap.channel),metalnessMapUv:P&&d(y.metalnessMap.channel),roughnessMapUv:E&&d(y.roughnessMap.channel),anisotropyMapUv:_t&&d(y.anisotropyMap.channel),clearcoatMapUv:Ut&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:yt&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&d(y.sheenRoughnessMap.channel),specularMapUv:Kt&&d(y.specularMap.channel),specularColorMapUv:ne&&d(y.specularColorMap.channel),specularIntensityMapUv:at&&d(y.specularIntensityMap.channel),transmissionMapUv:Dt&&d(y.transmissionMap.channel),thicknessMapUv:xt&&d(y.thicknessMap.channel),alphaMapUv:Zt&&d(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(et||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!K.attributes.uv&&($||Zt),fog:!!dt,useFog:y.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Z,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:dn,decodeVideoTexture:$&&y.map.isVideoTexture===!0&&Oe.getTransfer(y.map.colorSpace)===Ze,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===De,flipSided:y.side===Yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&y.extensions.multiDraw===!0||W)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function M(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let q in y.defines)v.push(q),v.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(x(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function x(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),y.push(a.mask)}function L(y){let v=_[y.type],q;if(v){let k=Ei[v];q=Wp.clone(k.uniforms)}else q=y.uniforms;return q}function C(y,v){let q;for(let k=0,Q=h.length;k<Q;k++){let dt=h[k];if(dt.cacheKey===v){q=dt,++q.usedTimes;break}}return q===void 0&&(q=new j_(i,v,y,s),h.push(q)),q}function A(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function z(y){c.remove(y)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:L,acquireProgram:C,releaseProgram:A,releaseShaderCache:z,programs:h,dispose:O}}function ey(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ny(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function I0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function L0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,m,g,_,d){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=d),t++,p}function a(u,f,m,g,_,d){let p=o(u,f,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function c(u,f,m,g,_,d){let p=o(u,f,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||ny),n.length>1&&n.sort(f||I0),r.length>1&&r.sort(f||I0)}function h(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function iy(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new L0,i.set(n,[o])):r>=s.length?(o=new L0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ry(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Vt};break;case"SpotLight":e={position:new R,direction:new R,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var oy=0;function ay(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cy(i){let t=new ry,e=sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let r=new R,s=new le,o=new le;function a(l){let h=0,u=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,M=0,x=0,b=0,L=0,C=0,A=0;l.sort(ay);for(let O=0,y=l.length;O<y;O++){let v=l[O],q=v.color,k=v.intensity,Q=v.distance,dt=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=q.r*k,u+=q.g*k,f+=q.b*k;else if(v.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(v.sh.coefficients[K],k);A++}else if(v.isDirectionalLight){let K=t.get(v);if(K.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let ct=v.shadow,I=e.get(v);I.shadowIntensity=ct.intensity,I.shadowBias=ct.bias,I.shadowNormalBias=ct.normalBias,I.shadowRadius=ct.radius,I.shadowMapSize=ct.mapSize,n.directionalShadow[m]=I,n.directionalShadowMap[m]=dt,n.directionalShadowMatrix[m]=v.shadow.matrix,M++}n.directional[m]=K,m++}else if(v.isSpotLight){let K=t.get(v);K.position.setFromMatrixPosition(v.matrixWorld),K.color.copy(q).multiplyScalar(k),K.distance=Q,K.coneCos=Math.cos(v.angle),K.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),K.decay=v.decay,n.spot[_]=K;let ct=v.shadow;if(v.map&&(n.spotLightMap[L]=v.map,L++,ct.updateMatrices(v),v.castShadow&&C++),n.spotLightMatrix[_]=ct.matrix,v.castShadow){let I=e.get(v);I.shadowIntensity=ct.intensity,I.shadowBias=ct.bias,I.shadowNormalBias=ct.normalBias,I.shadowRadius=ct.radius,I.shadowMapSize=ct.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=dt,b++}_++}else if(v.isRectAreaLight){let K=t.get(v);K.color.copy(q).multiplyScalar(k),K.halfWidth.set(v.width*.5,0,0),K.halfHeight.set(0,v.height*.5,0),n.rectArea[d]=K,d++}else if(v.isPointLight){let K=t.get(v);if(K.color.copy(v.color).multiplyScalar(v.intensity),K.distance=v.distance,K.decay=v.decay,v.castShadow){let ct=v.shadow,I=e.get(v);I.shadowIntensity=ct.intensity,I.shadowBias=ct.bias,I.shadowNormalBias=ct.normalBias,I.shadowRadius=ct.radius,I.shadowMapSize=ct.mapSize,I.shadowCameraNear=ct.camera.near,I.shadowCameraFar=ct.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=dt,n.pointShadowMatrix[g]=v.shadow.matrix,x++}n.point[g]=K,g++}else if(v.isHemisphereLight){let K=t.get(v);K.skyColor.copy(v.color).multiplyScalar(k),K.groundColor.copy(v.groundColor).multiplyScalar(k),n.hemi[p]=K,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Yt.LTC_FLOAT_1,n.rectAreaLTC2=Yt.LTC_FLOAT_2):(n.rectAreaLTC1=Yt.LTC_HALF_1,n.rectAreaLTC2=Yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==m||z.pointLength!==g||z.spotLength!==_||z.rectAreaLength!==d||z.hemiLength!==p||z.numDirectionalShadows!==M||z.numPointShadows!==x||z.numSpotShadows!==b||z.numSpotMaps!==L||z.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,z.directionalLength=m,z.pointLength=g,z.spotLength=_,z.rectAreaLength=d,z.hemiLength=p,z.numDirectionalShadows=M,z.numPointShadows=x,z.numSpotShadows=b,z.numSpotMaps=L,z.numLightProbes=A,n.version=oy++)}function c(l,h){let u=0,f=0,m=0,g=0,_=0,d=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let x=l[p];if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),u++}else if(x.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),m++}else if(x.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(d),o.identity(),s.copy(x.matrixWorld),s.premultiply(d),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(d),_++}}}return{setup:a,setupView:c,state:n}}function D0(i){let t=new cy(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function ly(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new D0(i),t.set(r,[a])):s>=o.length?(a=new D0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Mh=class extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bh=class extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
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
}`;function fy(i,t,e){let n=new Oo,r=new Nt,s=new Nt,o=new ze,a=new Mh({depthPacking:ep}),c=new bh,l={},h=e.maxTextureSize,u={[Fn]:Yn,[Yn]:Fn,[De]:De},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:hy,fragmentShader:uy}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Tt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$0;let p=this.type;this.render=function(C,A,z){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||C.length===0)return;let O=i.getRenderTarget(),y=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),q=i.state;q.setBlending(mr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let k=p!==Xi&&this.type===Xi,Q=p===Xi&&this.type!==Xi;for(let dt=0,K=C.length;dt<K;dt++){let ct=C[dt],I=ct.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let tt=I.getFrameExtents();if(r.multiply(tt),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/tt.x),r.x=s.x*tt.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/tt.y),r.y=s.y*tt.y,I.mapSize.y=s.y)),I.map===null||k===!0||Q===!0){let j=this.type!==Xi?{minFilter:Tn,magFilter:Tn}:{};I.map!==null&&I.map.dispose(),I.map=new $i(r.x,r.y,j),I.map.texture.name=ct.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();let B=I.getViewportCount();for(let j=0;j<B;j++){let ot=I.getViewport(j);o.set(s.x*ot.x,s.y*ot.y,s.x*ot.z,s.y*ot.w),q.viewport(o),I.updateMatrices(ct,j),n=I.getFrustum(),b(A,z,I.camera,ct,this.type)}I.isPointLightShadow!==!0&&this.type===Xi&&M(I,z),I.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(O,y,v)};function M(C,A){let z=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $i(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,z,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,z,m,_,null)}function x(C,A,z,O){let y=null,v=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(v!==void 0)y=v;else if(y=z.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let q=y.uuid,k=A.uuid,Q=l[q];Q===void 0&&(Q={},l[q]=Q);let dt=Q[k];dt===void 0&&(dt=y.clone(),Q[k]=dt,A.addEventListener("dispose",L)),y=dt}if(y.visible=A.visible,y.wireframe=A.wireframe,O===Xi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let q=i.properties.get(y);q.light=z}return y}function b(C,A,z,O,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Xi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let k=t.update(C),Q=C.material;if(Array.isArray(Q)){let dt=k.groups;for(let K=0,ct=dt.length;K<ct;K++){let I=dt[K],tt=Q[I.materialIndex];if(tt&&tt.visible){let B=x(C,tt,O,y);C.onBeforeShadow(i,C,A,z,k,B,I),i.renderBufferDirect(z,null,k,B,C,I),C.onAfterShadow(i,C,A,z,k,B,I)}}}else if(Q.visible){let dt=x(C,Q,O,y);C.onBeforeShadow(i,C,A,z,k,dt,null),i.renderBufferDirect(z,null,k,dt,C,null),C.onAfterShadow(i,C,A,z,k,dt,null)}}let q=C.children;for(let k=0,Q=q.length;k<Q;k++)b(q[k],A,z,O,y)}function L(C){C.target.removeEventListener("dispose",L);for(let z in l){let O=l[z],y=C.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}var dy={[Tl]:Rl,[Al]:Il,[Cl]:Ll,[Us]:Pl,[Rl]:Tl,[Il]:Al,[Ll]:Cl,[Pl]:Us};function py(i){function t(){let at=!1,Dt=new ze,xt=null,Rt=new ze(0,0,0,0);return{setMask:function(Zt){xt!==Zt&&!at&&(i.colorMask(Zt,Zt,Zt,Zt),xt=Zt)},setLocked:function(Zt){at=Zt},setClear:function(Zt,Ot,ue,Ke,dn){dn===!0&&(Zt*=Ke,Ot*=Ke,ue*=Ke),Dt.set(Zt,Ot,ue,Ke),Rt.equals(Dt)===!1&&(i.clearColor(Zt,Ot,ue,Ke),Rt.copy(Dt))},reset:function(){at=!1,xt=null,Rt.set(-1,0,0,0)}}}function e(){let at=!1,Dt=!1,xt=null,Rt=null,Zt=null;return{setReversed:function(Ot){Dt=Ot},setTest:function(Ot){Ot?D(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(Ot){xt!==Ot&&!at&&(i.depthMask(Ot),xt=Ot)},setFunc:function(Ot){if(Dt&&(Ot=dy[Ot]),Rt!==Ot){switch(Ot){case Tl:i.depthFunc(i.NEVER);break;case Rl:i.depthFunc(i.ALWAYS);break;case Al:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Cl:i.depthFunc(i.EQUAL);break;case Pl:i.depthFunc(i.GEQUAL);break;case Il:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=Ot}},setLocked:function(Ot){at=Ot},setClear:function(Ot){Zt!==Ot&&(i.clearDepth(Ot),Zt=Ot)},reset:function(){at=!1,xt=null,Rt=null,Zt=null}}}function n(){let at=!1,Dt=null,xt=null,Rt=null,Zt=null,Ot=null,ue=null,Ke=null,dn=null;return{setTest:function(Ae){at||(Ae?D(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(Ae){Dt!==Ae&&!at&&(i.stencilMask(Ae),Dt=Ae)},setFunc:function(Ae,pn,kn){(xt!==Ae||Rt!==pn||Zt!==kn)&&(i.stencilFunc(Ae,pn,kn),xt=Ae,Rt=pn,Zt=kn)},setOp:function(Ae,pn,kn){(Ot!==Ae||ue!==pn||Ke!==kn)&&(i.stencilOp(Ae,pn,kn),Ot=Ae,ue=pn,Ke=kn)},setLocked:function(Ae){at=Ae},setClear:function(Ae){dn!==Ae&&(i.clearStencil(Ae),dn=Ae)},reset:function(){at=!1,Dt=null,xt=null,Rt=null,Zt=null,Ot=null,ue=null,Ke=null,dn=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,f=[],m=null,g=!1,_=null,d=null,p=null,M=null,x=null,b=null,L=null,C=new Vt(0,0,0),A=0,z=!1,O=null,y=null,v=null,q=null,k=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),dt=!1,K=0,ct=i.getParameter(i.VERSION);ct.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ct)[1]),dt=K>=1):ct.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),dt=K>=2);let I=null,tt={},B=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ot=new ze().fromArray(B),Z=new ze().fromArray(j);function T(at,Dt,xt,Rt){let Zt=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(at,Ot),i.texParameteri(at,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(at,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<xt;ue++)at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Zt):i.texImage2D(Dt+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Zt);return Ot}let S={};S[i.TEXTURE_2D]=T(i.TEXTURE_2D,i.TEXTURE_2D,1),S[i.TEXTURE_CUBE_MAP]=T(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),S[i.TEXTURE_2D_ARRAY]=T(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),S[i.TEXTURE_3D]=T(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),D(i.DEPTH_TEST),s.setFunc(Us),J(!1),X(ku),D(i.CULL_FACE),w(mr);function D(at){l[at]!==!0&&(i.enable(at),l[at]=!0)}function G(at){l[at]!==!1&&(i.disable(at),l[at]=!1)}function U(at,Dt){return h[at]!==Dt?(i.bindFramebuffer(at,Dt),h[at]=Dt,at===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Dt),at===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function N(at,Dt){let xt=f,Rt=!1;if(at){xt=u.get(Dt),xt===void 0&&(xt=[],u.set(Dt,xt));let Zt=at.textures;if(xt.length!==Zt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,ue=Zt.length;Ot<ue;Ot++)xt[Ot]=i.COLOR_ATTACHMENT0+Ot;xt.length=Zt.length,Rt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(xt)}function W(at){return m!==at?(i.useProgram(at),m=at,!0):!1}let $={[Xr]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Pd]:i.FUNC_REVERSE_SUBTRACT};$[Id]=i.MIN,$[Ld]=i.MAX;let V={[Dd]:i.ZERO,[Ud]:i.ONE,[Nd]:i.SRC_COLOR,[wl]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[Hd]:i.ONE_MINUS_SRC_COLOR,[Sl]:i.ONE_MINUS_SRC_ALPHA,[kd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[Vd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Xd]:i.ONE_MINUS_CONSTANT_ALPHA};function w(at,Dt,xt,Rt,Zt,Ot,ue,Ke,dn,Ae){if(at===mr){g===!0&&(G(i.BLEND),g=!1);return}if(g===!1&&(D(i.BLEND),g=!0),at!==Ad){if(at!==_||Ae!==z){if((d!==Xr||x!==Xr)&&(i.blendEquation(i.FUNC_ADD),d=Xr,x=Xr),Ae)switch(at){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFunc(i.ONE,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}p=null,M=null,b=null,L=null,C.set(0,0,0),A=0,_=at,z=Ae}return}Zt=Zt||Dt,Ot=Ot||xt,ue=ue||Rt,(Dt!==d||Zt!==x)&&(i.blendEquationSeparate($[Dt],$[Zt]),d=Dt,x=Zt),(xt!==p||Rt!==M||Ot!==b||ue!==L)&&(i.blendFuncSeparate(V[xt],V[Rt],V[Ot],V[ue]),p=xt,M=Rt,b=Ot,L=ue),(Ke.equals(C)===!1||dn!==A)&&(i.blendColor(Ke.r,Ke.g,Ke.b,dn),C.copy(Ke),A=dn),_=at,z=!1}function nt(at,Dt){at.side===De?G(i.CULL_FACE):D(i.CULL_FACE);let xt=at.side===Yn;Dt&&(xt=!xt),J(xt),at.blending===Si&&at.transparent===!1?w(mr):w(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),s.setFunc(at.depthFunc),s.setTest(at.depthTest),s.setMask(at.depthWrite),r.setMask(at.colorWrite);let Rt=at.stencilWrite;o.setTest(Rt),Rt&&(o.setMask(at.stencilWriteMask),o.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),o.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),it(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(at){O!==at&&(at?i.frontFace(i.CW):i.frontFace(i.CCW),O=at)}function X(at){at!==Sd?(D(i.CULL_FACE),at!==y&&(at===ku?i.cullFace(i.BACK):at===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),y=at}function et(at){at!==v&&(dt&&i.lineWidth(at),v=at)}function it(at,Dt,xt){at?(D(i.POLYGON_OFFSET_FILL),(q!==Dt||k!==xt)&&(i.polygonOffset(Dt,xt),q=Dt,k=xt)):G(i.POLYGON_OFFSET_FILL)}function ht(at){at?D(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function P(at){at===void 0&&(at=i.TEXTURE0+Q-1),I!==at&&(i.activeTexture(at),I=at)}function E(at,Dt,xt){xt===void 0&&(I===null?xt=i.TEXTURE0+Q-1:xt=I);let Rt=tt[xt];Rt===void 0&&(Rt={type:void 0,texture:void 0},tt[xt]=Rt),(Rt.type!==at||Rt.texture!==Dt)&&(I!==xt&&(i.activeTexture(xt),I=xt),i.bindTexture(at,Dt||S[at]),Rt.type=at,Rt.texture=Dt)}function F(){let at=tt[I];at!==void 0&&at.type!==void 0&&(i.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ut(){try{i.texStorage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function kt(at){ot.equals(at)===!1&&(i.scissor(at.x,at.y,at.z,at.w),ot.copy(at))}function At(at){Z.equals(at)===!1&&(i.viewport(at.x,at.y,at.z,at.w),Z.copy(at))}function Ht(at,Dt){let xt=c.get(Dt);xt===void 0&&(xt=new WeakMap,c.set(Dt,xt));let Rt=xt.get(at);Rt===void 0&&(Rt=i.getUniformBlockIndex(Dt,at.name),xt.set(at,Rt))}function Kt(at,Dt){let Rt=c.get(Dt).get(at);a.get(Dt)!==Rt&&(i.uniformBlockBinding(Dt,Rt,at.__bindingPointIndex),a.set(Dt,Rt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},I=null,tt={},h={},u=new WeakMap,f=[],m=null,g=!1,_=null,d=null,p=null,M=null,x=null,b=null,L=null,C=new Vt(0,0,0),A=0,z=!1,O=null,y=null,v=null,q=null,k=null,ot.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:D,disable:G,bindFramebuffer:U,drawBuffers:N,useProgram:W,setBlending:w,setMaterial:nt,setFlipSided:J,setCullFace:X,setLineWidth:et,setPolygonOffset:it,setScissorTest:ht,activeTexture:P,bindTexture:E,unbindTexture:F,compressedTexImage2D:st,compressedTexImage3D:lt,texImage2D:Ct,texImage3D:Xt,updateUBOMapping:Ht,uniformBlockBinding:Kt,texStorage2D:Ut,texStorage3D:yt,texSubImage2D:rt,texSubImage3D:wt,compressedTexSubImage2D:Et,compressedTexSubImage3D:_t,scissor:kt,viewport:At,reset:ne}}function U0(i,t,e,n){let r=my(n);switch(e){case ef:return i*t;case rf:return i*t;case sf:return i*t*2;case eu:return i*t/r.components*r.byteLength;case nu:return i*t/r.components*r.byteLength;case of:return i*t*2/r.components*r.byteLength;case iu:return i*t*2/r.components*r.byteLength;case nf:return i*t*3/r.components*r.byteLength;case pi:return i*t*4/r.components*r.byteLength;case ru:return i*t*4/r.components*r.byteLength;case ka:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Ol:return Math.max(i,16)*Math.max(t,8)/4;case Nl:case Fl:return Math.max(i,8)*Math.max(t,8)/2;case Bl:case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case th:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case eh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wa:case nh:case ih:return Math.ceil(i/4)*Math.ceil(t/4)*16;case af:case rh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sh:case oh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function my(i){switch(i){case Ki:case j0:return{byteLength:1,components:1};case No:case Q0:case Ko:return{byteLength:2,components:1};case Qh:case tu:return{byteLength:2,components:4};case Kr:case jh:case wi:return{byteLength:4,components:1};case tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function gy(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return m?new OffscreenCanvas(P,E):Ja("canvas")}function _(P,E,F){let st=1,lt=ht(P);if((lt.width>F||lt.height>F)&&(st=F/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let rt=Math.floor(st*lt.width),wt=Math.floor(st*lt.height);u===void 0&&(u=g(rt,wt));let Et=E?g(rt,wt):u;return Et.width=rt,Et.height=wt,Et.getContext("2d").drawImage(P,0,0,rt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+rt+"x"+wt+")."),Et}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function d(P){return P.generateMipmaps&&P.minFilter!==Tn&&P.minFilter!==fi}function p(P){i.generateMipmap(P)}function M(P,E,F,st,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let rt=E;if(E===i.RED&&(F===i.FLOAT&&(rt=i.R32F),F===i.HALF_FLOAT&&(rt=i.R16F),F===i.UNSIGNED_BYTE&&(rt=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(rt=i.R8UI),F===i.UNSIGNED_SHORT&&(rt=i.R16UI),F===i.UNSIGNED_INT&&(rt=i.R32UI),F===i.BYTE&&(rt=i.R8I),F===i.SHORT&&(rt=i.R16I),F===i.INT&&(rt=i.R32I)),E===i.RG&&(F===i.FLOAT&&(rt=i.RG32F),F===i.HALF_FLOAT&&(rt=i.RG16F),F===i.UNSIGNED_BYTE&&(rt=i.RG8)),E===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(rt=i.RG8UI),F===i.UNSIGNED_SHORT&&(rt=i.RG16UI),F===i.UNSIGNED_INT&&(rt=i.RG32UI),F===i.BYTE&&(rt=i.RG8I),F===i.SHORT&&(rt=i.RG16I),F===i.INT&&(rt=i.RG32I)),E===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),F===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),F===i.UNSIGNED_INT&&(rt=i.RGB32UI),F===i.BYTE&&(rt=i.RGB8I),F===i.SHORT&&(rt=i.RGB16I),F===i.INT&&(rt=i.RGB32I)),E===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),F===i.UNSIGNED_INT&&(rt=i.RGBA32UI),F===i.BYTE&&(rt=i.RGBA8I),F===i.SHORT&&(rt=i.RGBA16I),F===i.INT&&(rt=i.RGBA32I)),E===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),E===i.RGBA){let wt=lt?Ya:Oe.getTransfer(st);F===i.FLOAT&&(rt=i.RGBA32F),F===i.HALF_FLOAT&&(rt=i.RGBA16F),F===i.UNSIGNED_BYTE&&(rt=wt===Ze?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function x(P,E){let F;return P?E===null||E===Kr||E===Fs?F=i.DEPTH24_STENCIL8:E===wi?F=i.DEPTH32F_STENCIL8:E===No&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Kr||E===Fs?F=i.DEPTH_COMPONENT24:E===wi?F=i.DEPTH_COMPONENT32F:E===No&&(F=i.DEPTH_COMPONENT16),F}function b(P,E){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==fi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function L(P){let E=P.target;E.removeEventListener("dispose",L),A(E),E.isVideoTexture&&h.delete(E)}function C(P){let E=P.target;E.removeEventListener("dispose",C),O(E)}function A(P){let E=n.get(P);if(E.__webglInit===void 0)return;let F=P.source,st=f.get(F);if(st){let lt=st[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&z(P),Object.keys(st).length===0&&f.delete(F)}n.remove(P)}function z(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let F=P.source,st=f.get(F);delete st[E.__cacheKey],o.memory.textures--}function O(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let lt=0;lt<E.__webglFramebuffer[st].length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[st][lt]);else i.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)i.deleteFramebuffer(E.__webglFramebuffer[st]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let F=P.textures;for(let st=0,lt=F.length;st<lt;st++){let rt=n.get(F[st]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(F[st])}n.remove(P)}let y=0;function v(){y=0}function q(){let P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function k(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Q(P,E){let F=n.get(P);if(P.isVideoTexture&&et(P),P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){let st=P.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,P,E);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function dt(P,E){let F=n.get(P);if(P.version>0&&F.__version!==P.version){Z(F,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function K(P,E){let F=n.get(P);if(P.version>0&&F.__version!==P.version){Z(F,P,E);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function ct(P,E){let F=n.get(P);if(P.version>0&&F.__version!==P.version){T(F,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}let I={[Zr]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[Ul]:i.MIRRORED_REPEAT},tt={[Tn]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[fi]:i.LINEAR,[Vc]:i.LINEAR_MIPMAP_NEAREST,[Yr]:i.LINEAR_MIPMAP_LINEAR},B={[ip]:i.NEVER,[lp]:i.ALWAYS,[rp]:i.LESS,[cf]:i.LEQUAL,[sp]:i.EQUAL,[cp]:i.GEQUAL,[op]:i.GREATER,[ap]:i.NOTEQUAL};function j(P,E){if(E.type===wi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===fi||E.magFilter===Vc||E.magFilter===aa||E.magFilter===Yr||E.minFilter===fi||E.minFilter===Vc||E.minFilter===aa||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,I[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,I[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,I[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,tt[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,tt[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==aa&&E.minFilter!==Yr||E.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ot(P,E){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",L));let st=E.source,lt=f.get(st);lt===void 0&&(lt={},f.set(st,lt));let rt=k(E);if(rt!==P.__cacheKey){lt[rt]===void 0&&(lt[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),lt[rt].usedTimes++;let wt=lt[P.__cacheKey];wt!==void 0&&(lt[P.__cacheKey].usedTimes--,wt.usedTimes===0&&z(E)),P.__cacheKey=rt,P.__webglTexture=lt[rt].texture}return F}function Z(P,E,F){let st=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=i.TEXTURE_3D);let lt=ot(P,E),rt=E.source;e.bindTexture(st,P.__webglTexture,i.TEXTURE0+F);let wt=n.get(rt);if(rt.version!==wt.__version||lt===!0){e.activeTexture(i.TEXTURE0+F);let Et=Oe.getPrimaries(Oe.workingColorSpace),_t=E.colorSpace===dr?null:Oe.getPrimaries(E.colorSpace),Ut=E.colorSpace===dr||Et===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let yt=_(E.image,!1,r.maxTextureSize);yt=it(E,yt);let Ct=s.convert(E.format,E.colorSpace),Xt=s.convert(E.type),kt=M(E.internalFormat,Ct,Xt,E.colorSpace,E.isVideoTexture);j(st,E);let At,Ht=E.mipmaps,Kt=E.isVideoTexture!==!0,ne=wt.__version===void 0||lt===!0,at=rt.dataReady,Dt=b(E,yt);if(E.isDepthTexture)kt=x(E.format===Os,E.type),ne&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,kt,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,kt,yt.width,yt.height,0,Ct,Xt,null));else if(E.isDataTexture)if(Ht.length>0){Kt&&ne&&e.texStorage2D(i.TEXTURE_2D,Dt,kt,Ht[0].width,Ht[0].height);for(let xt=0,Rt=Ht.length;xt<Rt;xt++)At=Ht[xt],Kt?at&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,At.width,At.height,Ct,Xt,At.data):e.texImage2D(i.TEXTURE_2D,xt,kt,At.width,At.height,0,Ct,Xt,At.data);E.generateMipmaps=!1}else Kt?(ne&&e.texStorage2D(i.TEXTURE_2D,Dt,kt,yt.width,yt.height),at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt.width,yt.height,Ct,Xt,yt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,yt.width,yt.height,0,Ct,Xt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,kt,Ht[0].width,Ht[0].height,yt.depth);for(let xt=0,Rt=Ht.length;xt<Rt;xt++)if(At=Ht[xt],E.format!==pi)if(Ct!==null)if(Kt){if(at)if(E.layerUpdates.size>0){let Zt=U0(At.width,At.height,E.format,E.type);for(let Ot of E.layerUpdates){let ue=At.data.subarray(Ot*Zt/At.data.BYTES_PER_ELEMENT,(Ot+1)*Zt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Ot,At.width,At.height,1,Ct,ue,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,At.width,At.height,yt.depth,Ct,At.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,kt,At.width,At.height,yt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,At.width,At.height,yt.depth,Ct,Xt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,kt,At.width,At.height,yt.depth,0,Ct,Xt,At.data)}else{Kt&&ne&&e.texStorage2D(i.TEXTURE_2D,Dt,kt,Ht[0].width,Ht[0].height);for(let xt=0,Rt=Ht.length;xt<Rt;xt++)At=Ht[xt],E.format!==pi?Ct!==null?Kt?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,At.width,At.height,Ct,At.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,kt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?at&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,At.width,At.height,Ct,Xt,At.data):e.texImage2D(i.TEXTURE_2D,xt,kt,At.width,At.height,0,Ct,Xt,At.data)}else if(E.isDataArrayTexture)if(Kt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,kt,yt.width,yt.height,yt.depth),at)if(E.layerUpdates.size>0){let xt=U0(yt.width,yt.height,E.format,E.type);for(let Rt of E.layerUpdates){let Zt=yt.data.subarray(Rt*xt/yt.data.BYTES_PER_ELEMENT,(Rt+1)*xt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,yt.width,yt.height,1,Ct,Xt,Zt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ct,Xt,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,yt.width,yt.height,yt.depth,0,Ct,Xt,yt.data);else if(E.isData3DTexture)Kt?(ne&&e.texStorage3D(i.TEXTURE_3D,Dt,kt,yt.width,yt.height,yt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ct,Xt,yt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,yt.width,yt.height,yt.depth,0,Ct,Xt,yt.data);else if(E.isFramebufferTexture){if(ne)if(Kt)e.texStorage2D(i.TEXTURE_2D,Dt,kt,yt.width,yt.height);else{let xt=yt.width,Rt=yt.height;for(let Zt=0;Zt<Dt;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,kt,xt,Rt,0,Ct,Xt,null),xt>>=1,Rt>>=1}}else if(Ht.length>0){if(Kt&&ne){let xt=ht(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Dt,kt,xt.width,xt.height)}for(let xt=0,Rt=Ht.length;xt<Rt;xt++)At=Ht[xt],Kt?at&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Ct,Xt,At):e.texImage2D(i.TEXTURE_2D,xt,kt,Ct,Xt,At);E.generateMipmaps=!1}else if(Kt){if(ne){let xt=ht(yt);e.texStorage2D(i.TEXTURE_2D,Dt,kt,xt.width,xt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Xt,yt)}else e.texImage2D(i.TEXTURE_2D,0,kt,Ct,Xt,yt);d(E)&&p(st),wt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function T(P,E,F){if(E.image.length!==6)return;let st=ot(P,E),lt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+F);let rt=n.get(lt);if(lt.version!==rt.__version||st===!0){e.activeTexture(i.TEXTURE0+F);let wt=Oe.getPrimaries(Oe.workingColorSpace),Et=E.colorSpace===dr?null:Oe.getPrimaries(E.colorSpace),_t=E.colorSpace===dr||wt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Ut=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let Rt=0;Rt<6;Rt++)!Ut&&!yt?Ct[Rt]=_(E.image[Rt],!0,r.maxCubemapSize):Ct[Rt]=yt?E.image[Rt].image:E.image[Rt],Ct[Rt]=it(E,Ct[Rt]);let Xt=Ct[0],kt=s.convert(E.format,E.colorSpace),At=s.convert(E.type),Ht=M(E.internalFormat,kt,At,E.colorSpace),Kt=E.isVideoTexture!==!0,ne=rt.__version===void 0||st===!0,at=lt.dataReady,Dt=b(E,Xt);j(i.TEXTURE_CUBE_MAP,E);let xt;if(Ut){Kt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ht,Xt.width,Xt.height);for(let Rt=0;Rt<6;Rt++){xt=Ct[Rt].mipmaps;for(let Zt=0;Zt<xt.length;Zt++){let Ot=xt[Zt];E.format!==pi?kt!==null?Kt?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,0,0,Ot.width,Ot.height,kt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,Ht,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,0,0,Ot.width,Ot.height,kt,At,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,Ht,Ot.width,Ot.height,0,kt,At,Ot.data)}}}else{if(xt=E.mipmaps,Kt&&ne){xt.length>0&&Dt++;let Rt=ht(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ht,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(yt){Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Ct[Rt].width,Ct[Rt].height,kt,At,Ct[Rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ht,Ct[Rt].width,Ct[Rt].height,0,kt,At,Ct[Rt].data);for(let Zt=0;Zt<xt.length;Zt++){let ue=xt[Zt].image[Rt].image;Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,0,0,ue.width,ue.height,kt,At,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,Ht,ue.width,ue.height,0,kt,At,ue.data)}}else{Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,kt,At,Ct[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ht,kt,At,Ct[Rt]);for(let Zt=0;Zt<xt.length;Zt++){let Ot=xt[Zt];Kt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,0,0,kt,At,Ot.image[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,Ht,kt,At,Ot.image[Rt])}}}d(E)&&p(i.TEXTURE_CUBE_MAP),rt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function S(P,E,F,st,lt,rt){let wt=s.convert(F.format,F.colorSpace),Et=s.convert(F.type),_t=M(F.internalFormat,wt,Et,F.colorSpace);if(!n.get(E).__hasExternalTextures){let yt=Math.max(1,E.width>>rt),Ct=Math.max(1,E.height>>rt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,rt,_t,yt,Ct,E.depth,0,wt,Et,null):e.texImage2D(lt,rt,_t,yt,Ct,0,wt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),X(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,lt,n.get(F).__webglTexture,0,J(E)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,lt,n.get(F).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(P,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let st=E.depthTexture,lt=st&&st.isDepthTexture?st.type:null,rt=x(E.stencilBuffer,lt),wt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=J(E);X(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,rt,E.width,E.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,rt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,rt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,P)}else{let st=E.textures;for(let lt=0;lt<st.length;lt++){let rt=st[lt],wt=s.convert(rt.format,rt.colorSpace),Et=s.convert(rt.type),_t=M(rt.internalFormat,wt,Et,rt.colorSpace),Ut=J(E);F&&X(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,_t,E.width,E.height):X(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,_t,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_t,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function G(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);let st=n.get(E.depthTexture).__webglTexture,lt=J(E);if(E.depthTexture.format===Is)X(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(E.depthTexture.format===Os)X(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function U(P){let E=n.get(P),F=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let st=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){let lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",lt)};st.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=st}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");G(E.__webglFramebuffer,P)}else if(F){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=i.createRenderbuffer(),D(E.__webglDepthbuffer[st],P,!1);else{let lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),D(E.__webglDepthbuffer,P,!1);else{let st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function N(P,E,F){let st=n.get(P);E!==void 0&&S(st.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&U(P)}function W(P){let E=P.texture,F=n.get(P),st=n.get(E);P.addEventListener("dispose",C);let lt=P.textures,rt=P.isWebGLCubeRenderTarget===!0,wt=lt.length>1;if(wt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=E.version,o.memory.textures++),rt){F.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[Et]=[];for(let _t=0;_t<E.mipmaps.length;_t++)F.__webglFramebuffer[Et][_t]=i.createFramebuffer()}else F.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let Et=0;Et<E.mipmaps.length;Et++)F.__webglFramebuffer[Et]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(wt)for(let Et=0,_t=lt.length;Et<_t;Et++){let Ut=n.get(lt[Et]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&X(P)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Et=0;Et<lt.length;Et++){let _t=lt[Et];F.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Et]);let Ut=s.convert(_t.format,_t.colorSpace),yt=s.convert(_t.type),Ct=M(_t.internalFormat,Ut,yt,_t.colorSpace,P.isXRRenderTarget===!0),Xt=J(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Ct,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,F.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),D(F.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),j(i.TEXTURE_CUBE_MAP,E);for(let Et=0;Et<6;Et++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)S(F.__webglFramebuffer[Et][_t],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,_t);else S(F.__webglFramebuffer[Et],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);d(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let Et=0,_t=lt.length;Et<_t;Et++){let Ut=lt[Et],yt=n.get(Ut);e.bindTexture(i.TEXTURE_2D,yt.__webglTexture),j(i.TEXTURE_2D,Ut),S(F.__webglFramebuffer,P,Ut,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),d(Ut)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,st.__webglTexture),j(Et,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)S(F.__webglFramebuffer[_t],P,E,i.COLOR_ATTACHMENT0,Et,_t);else S(F.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,Et,0);d(E)&&p(Et),e.unbindTexture()}P.depthBuffer&&U(P)}function $(P){let E=P.textures;for(let F=0,st=E.length;F<st;F++){let lt=E[F];if(d(lt)){let rt=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(lt).__webglTexture;e.bindTexture(rt,wt),p(rt),e.unbindTexture()}}}let V=[],w=[];function nt(P){if(P.samples>0){if(X(P)===!1){let E=P.textures,F=P.width,st=P.height,lt=i.COLOR_BUFFER_BIT,rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(P),Et=E.length>1;if(Et)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);let Ut=n.get(E[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,F,st,0,0,F,st,lt,i.NEAREST),c===!0&&(V.length=0,w.length=0,V.push(i.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(V.push(rt),w.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);let Ut=n.get(E[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function J(P){return Math.min(r.maxSamples,P.samples)}function X(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function it(P,E){let F=P.colorSpace,st=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==br&&F!==dr&&(Oe.getTransfer(F)===Ze?(st!==pi||lt!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function ht(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=v,this.setTexture2D=Q,this.setTexture2DArray=dt,this.setTexture3D=K,this.setTextureCube=ct,this.rebindTextures=N,this.setupRenderTarget=W,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=S,this.useMultisampledRTT=X}function _y(i,t){function e(n,r=dr){let s,o=Oe.getTransfer(r);if(n===Ki)return i.UNSIGNED_BYTE;if(n===Qh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===j0)return i.BYTE;if(n===Q0)return i.SHORT;if(n===No)return i.UNSIGNED_SHORT;if(n===jh)return i.INT;if(n===Kr)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===Ko)return i.HALF_FLOAT;if(n===ef)return i.ALPHA;if(n===nf)return i.RGB;if(n===pi)return i.RGBA;if(n===rf)return i.LUMINANCE;if(n===sf)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===eu)return i.RED;if(n===nu)return i.RED_INTEGER;if(n===of)return i.RG;if(n===iu)return i.RG_INTEGER;if(n===ru)return i.RGBA_INTEGER;if(n===ka||n===za||n===Va||n===Ga)if(o===Ze)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Hl||n===Fl||n===Ol)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===kl||n===zl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bl||n===kl)return o===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Kl||n===$l||n===Jl||n===jl||n===Ql||n===th||n===eh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ql)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===th)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eh)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===nh||n===ih)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Wa)return o===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===af||n===rh||n===sh||n===oh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Wa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var vh=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wt=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},yy={type:"move"},Po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let d=e.getJointPose(_,n),p=this._getHandJoint(l,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`,Eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Zn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Kn({vertexShader:xy,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wh=class extends _r{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,g=null,_=new Eh,d=e.getContextAttributes(),p=null,M=null,x=[],b=[],L=new Nt,C=null,A=new En;A.layers.enable(1),A.viewport=new ze;let z=new En;z.layers.enable(2),z.viewport=new ze;let O=[A,z],y=new vh;y.layers.enable(1),y.layers.enable(2);let v=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let S=x[T];return S===void 0&&(S=new Po,x[T]=S),S.getTargetRaySpace()},this.getControllerGrip=function(T){let S=x[T];return S===void 0&&(S=new Po,x[T]=S),S.getGripSpace()},this.getHand=function(T){let S=x[T];return S===void 0&&(S=new Po,x[T]=S),S.getHandSpace()};function k(T){let S=b.indexOf(T.inputSource);if(S===-1)return;let D=x[S];D!==void 0&&(D.update(T.inputSource,T.frame,l||o),D.dispatchEvent({type:T.type,data:T.inputSource}))}function Q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",dt);for(let T=0;T<x.length;T++){let S=b[T];S!==null&&(b[T]=null,x[T].disconnect(S))}v=null,q=null,_.reset(),t.setRenderTarget(p),m=null,f=null,u=null,r=null,M=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){s=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){a=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(T){l=T},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(T){if(r=T,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",dt),d.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){let S={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,S),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new $i(m.framebufferWidth,m.framebufferHeight,{format:pi,type:Ki,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let S=null,D=null,G=null;d.depth&&(G=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,S=d.stencil?Os:Is,D=d.stencil?Fs:Kr);let U={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(U),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new $i(f.textureWidth,f.textureHeight,{format:pi,type:Ki,depthTexture:new ac(f.textureWidth,f.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,S),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function dt(T){for(let S=0;S<T.removed.length;S++){let D=T.removed[S],G=b.indexOf(D);G>=0&&(b[G]=null,x[G].disconnect(D))}for(let S=0;S<T.added.length;S++){let D=T.added[S],G=b.indexOf(D);if(G===-1){for(let N=0;N<x.length;N++)if(N>=b.length){b.push(D),G=N;break}else if(b[N]===null){b[N]=D,G=N;break}if(G===-1)break}let U=x[G];U&&U.connect(D)}}let K=new R,ct=new R;function I(T,S,D){K.setFromMatrixPosition(S.matrixWorld),ct.setFromMatrixPosition(D.matrixWorld);let G=K.distanceTo(ct),U=S.projectionMatrix.elements,N=D.projectionMatrix.elements,W=U[14]/(U[10]-1),$=U[14]/(U[10]+1),V=(U[9]+1)/U[5],w=(U[9]-1)/U[5],nt=(U[8]-1)/U[0],J=(N[8]+1)/N[0],X=W*nt,et=W*J,it=G/(-nt+J),ht=it*-nt;if(S.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ht),T.translateZ(it),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),U[10]===-1)T.projectionMatrix.copy(S.projectionMatrix),T.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let P=W+it,E=$+it,F=X-ht,st=et+(G-ht),lt=V*$/E*P,rt=w*$/E*P;T.projectionMatrix.makePerspective(F,st,lt,rt,P,E),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function tt(T,S){S===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(S.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(r===null)return;let S=T.near,D=T.far;_.texture!==null&&(_.depthNear>0&&(S=_.depthNear),_.depthFar>0&&(D=_.depthFar)),y.near=z.near=A.near=S,y.far=z.far=A.far=D,(v!==y.near||q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),v=y.near,q=y.far);let G=T.parent,U=y.cameras;tt(y,G);for(let N=0;N<U.length;N++)tt(U[N],G);U.length===2?I(y,A,z):y.projectionMatrix.copy(A.projectionMatrix),B(T,y,G)};function B(T,S,D){D===null?T.matrix.copy(S.matrixWorld):(T.matrix.copy(D.matrixWorld),T.matrix.invert(),T.matrix.multiply(S.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(S.projectionMatrix),T.projectionMatrixInverse.copy(S.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Ho*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(T){c=T,f!==null&&(f.fixedFoveation=T),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=T)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let j=null;function ot(T,S){if(h=S.getViewerPose(l||o),g=S,h!==null){let D=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let G=!1;D.length!==y.cameras.length&&(y.cameras.length=0,G=!0);for(let N=0;N<D.length;N++){let W=D[N],$=null;if(m!==null)$=m.getViewport(W);else{let w=u.getViewSubImage(f,W);$=w.viewport,N===0&&(t.setRenderTargetTextures(M,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(M))}let V=O[N];V===void 0&&(V=new En,V.layers.enable(N),V.viewport=new ze,O[N]=V),V.matrix.fromArray(W.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(W.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set($.x,$.y,$.width,$.height),N===0&&(y.matrix.copy(V.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),G===!0&&y.cameras.push(V)}let U=r.enabledFeatures;if(U&&U.includes("depth-sensing")){let N=u.getDepthInformation(D[0]);N&&N.isValid&&N.texture&&_.init(t,N,r.renderState)}}for(let D=0;D<x.length;D++){let G=b[D],U=x[D];G!==null&&U!==void 0&&U.update(G,S,l||o)}j&&j(T,S),S.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:S}),g=null}let Z=new ff;Z.setAnimationLoop(ot),this.setAnimationLoop=function(T){j=T},this.dispose=function(){}}},Gr=new gn,by=new le;function vy(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,uf(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,M,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),u(d,p)):p.isMeshPhongMaterial?(s(d,p),h(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,b)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?c(d,p,M,x):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Yn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Yn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let M=t.get(p),x=M.envMap,b=M.envMapRotation;x&&(d.envMap.value=x,Gr.copy(b),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),d.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(Gr)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,M,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*M,d.scale.value=x*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,M){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){let M=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ey(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){let b=x.program;n.uniformBlockBinding(M,b)}function l(M,x){let b=r[M.id];b===void 0&&(g(M),b=h(M),r[M.id]=b,M.addEventListener("dispose",d));let L=x.program;n.updateUBOMapping(M,L);let C=t.render.frame;s[M.id]!==C&&(f(M),s[M.id]=C)}function h(M){let x=u();M.__bindingPointIndex=x;let b=i.createBuffer(),L=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let x=r[M.id],b=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,A=b.length;C<A;C++){let z=Array.isArray(b[C])?b[C]:[b[C]];for(let O=0,y=z.length;O<y;O++){let v=z[O];if(m(v,C,O,L)===!0){let q=v.__offset,k=Array.isArray(v.value)?v.value:[v.value],Q=0;for(let dt=0;dt<k.length;dt++){let K=k[dt],ct=_(K);typeof K=="number"||typeof K=="boolean"?(v.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,q+Q,v.__data)):K.isMatrix3?(v.__data[0]=K.elements[0],v.__data[1]=K.elements[1],v.__data[2]=K.elements[2],v.__data[3]=0,v.__data[4]=K.elements[3],v.__data[5]=K.elements[4],v.__data[6]=K.elements[5],v.__data[7]=0,v.__data[8]=K.elements[6],v.__data[9]=K.elements[7],v.__data[10]=K.elements[8],v.__data[11]=0):(K.toArray(v.__data,Q),Q+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,b,L){let C=M.value,A=x+"_"+b;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{let z=L[A];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return L[A]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function g(M){let x=M.uniforms,b=0,L=16;for(let A=0,z=x.length;A<z;A++){let O=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,v=O.length;y<v;y++){let q=O[y],k=Array.isArray(q.value)?q.value:[q.value];for(let Q=0,dt=k.length;Q<dt;Q++){let K=k[Q],ct=_(K),I=b%L,tt=I%ct.boundary,B=I+tt;b+=tt,B!==0&&L-B<ct.storage&&(b+=L-B),q.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=ct.storage}}}let C=b%L;return C>0&&(b+=L-C),M.__size=b,M.__cache={},this}function _(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function d(M){let x=M.target;x.removeEventListener("dispose",d);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(let M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var ks=class{constructor(t={}){let{canvas:e=Tp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,d=null,p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=gr,this.toneMappingExposure=1;let x=this,b=!1,L=0,C=0,A=null,z=-1,O=null,y=new ze,v=new ze,q=null,k=new Vt(0),Q=0,dt=e.width,K=e.height,ct=1,I=null,tt=null,B=new ze(0,0,dt,K),j=new ze(0,0,dt,K),ot=!1,Z=new Oo,T=!1,S=!1,D=new le,G=new le,U=new R,N=new ze,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function V(){return A===null?ct:1}let w=n;function nt(H,ft){return e.getContext(H,ft)}try{let H={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",Rt,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),w===null){let ft="webgl2";if(w=nt(ft,H),w===null)throw nt(ft)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(H){throw console.error("THREE.WebGLRenderer: "+H.message),H}let J,X,et,it,ht,P,E,F,st,lt,rt,wt,Et,_t,Ut,yt,Ct,Xt,kt,At,Ht,Kt,ne,at;function Dt(){J=new B1(w),J.init(),Kt=new _y(w,J),X=new D1(w,J,t,Kt),et=new py(w),X.reverseDepthBuffer&&et.buffers.depth.setReversed(!0),it=new V1(w),ht=new ey,P=new gy(w,J,et,ht,X,Kt,it),E=new N1(x),F=new O1(x),st=new Kp(w),ne=new I1(w,st),lt=new k1(w,st,it,ne),rt=new W1(w,lt,st,it),kt=new G1(w,X,P),yt=new U1(ht),wt=new ty(x,E,F,J,X,ne,yt),Et=new vy(x,ht),_t=new iy,Ut=new ly(J),Xt=new P1(x,E,F,et,rt,f,c),Ct=new fy(x,rt,X),at=new Ey(w,it,X,et),At=new L1(w,J,it),Ht=new z1(w,J,it),it.programs=wt.programs,x.capabilities=X,x.extensions=J,x.properties=ht,x.renderLists=_t,x.shadowMap=Ct,x.state=et,x.info=it}Dt();let xt=new wh(x,w);this.xr=xt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let H=J.get("WEBGL_lose_context");H&&H.loseContext()},this.forceContextRestore=function(){let H=J.get("WEBGL_lose_context");H&&H.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(H){H!==void 0&&(ct=H,this.setSize(dt,K,!1))},this.getSize=function(H){return H.set(dt,K)},this.setSize=function(H,ft,Mt=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}dt=H,K=ft,e.width=Math.floor(H*ct),e.height=Math.floor(ft*ct),Mt===!0&&(e.style.width=H+"px",e.style.height=ft+"px"),this.setViewport(0,0,H,ft)},this.getDrawingBufferSize=function(H){return H.set(dt*ct,K*ct).floor()},this.setDrawingBufferSize=function(H,ft,Mt){dt=H,K=ft,ct=Mt,e.width=Math.floor(H*Mt),e.height=Math.floor(ft*Mt),this.setViewport(0,0,H,ft)},this.getCurrentViewport=function(H){return H.copy(y)},this.getViewport=function(H){return H.copy(B)},this.setViewport=function(H,ft,Mt,bt){H.isVector4?B.set(H.x,H.y,H.z,H.w):B.set(H,ft,Mt,bt),et.viewport(y.copy(B).multiplyScalar(ct).round())},this.getScissor=function(H){return H.copy(j)},this.setScissor=function(H,ft,Mt,bt){H.isVector4?j.set(H.x,H.y,H.z,H.w):j.set(H,ft,Mt,bt),et.scissor(v.copy(j).multiplyScalar(ct).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(H){et.setScissorTest(ot=H)},this.setOpaqueSort=function(H){I=H},this.setTransparentSort=function(H){tt=H},this.getClearColor=function(H){return H.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(H=!0,ft=!0,Mt=!0){let bt=0;if(H){let pt=!1;if(A!==null){let zt=A.texture.format;pt=zt===ru||zt===iu||zt===nu}if(pt){let zt=A.texture.type,qt=zt===Ki||zt===Kr||zt===No||zt===Fs||zt===Qh||zt===tu,Jt=Xt.getClearColor(),$t=Xt.getClearAlpha(),re=Jt.r,ce=Jt.g,Qt=Jt.b;qt?(m[0]=re,m[1]=ce,m[2]=Qt,m[3]=$t,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=re,g[1]=ce,g[2]=Qt,g[3]=$t,w.clearBufferiv(w.COLOR,0,g))}else bt|=w.COLOR_BUFFER_BIT}ft&&(bt|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Mt&&(bt|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(bt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Rt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),_t.dispose(),Ut.dispose(),ht.dispose(),E.dispose(),F.dispose(),rt.dispose(),ne.dispose(),at.dispose(),wt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",xi),xt.removeEventListener("sessionend",Mi),zn.stop()};function Rt(H){H.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Zt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let H=it.autoReset,ft=Ct.enabled,Mt=Ct.autoUpdate,bt=Ct.needsUpdate,pt=Ct.type;Dt(),it.autoReset=H,Ct.enabled=ft,Ct.autoUpdate=Mt,Ct.needsUpdate=bt,Ct.type=pt}function Ot(H){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",H.statusMessage)}function ue(H){let ft=H.target;ft.removeEventListener("dispose",ue),Ke(ft)}function Ke(H){dn(H),ht.remove(H)}function dn(H){let ft=ht.get(H).programs;ft!==void 0&&(ft.forEach(function(Mt){wt.releaseProgram(Mt)}),H.isShaderMaterial&&wt.releaseShaderCache(H))}this.renderBufferDirect=function(H,ft,Mt,bt,pt,zt){ft===null&&(ft=W);let qt=pt.isMesh&&pt.matrixWorld.determinant()<0,Jt=ro(H,ft,Mt,bt,pt);et.setMaterial(bt,qt);let $t=Mt.index,re=1;if(bt.wireframe===!0){if($t=lt.getWireframeAttribute(Mt),$t===void 0)return;re=2}let ce=Mt.drawRange,Qt=Mt.attributes.position,Ie=ce.start*re,Me=(ce.start+ce.count)*re;zt!==null&&(Ie=Math.max(Ie,zt.start*re),Me=Math.min(Me,(zt.start+zt.count)*re)),$t!==null?(Ie=Math.max(Ie,0),Me=Math.min(Me,$t.count)):Qt!=null&&(Ie=Math.max(Ie,0),Me=Math.min(Me,Qt.count));let ke=Me-Ie;if(ke<0||ke===1/0)return;ne.setup(pt,bt,Jt,Mt,$t);let Dn,Ce=At;if($t!==null&&(Dn=st.get($t),Ce=Ht,Ce.setIndex(Dn)),pt.isMesh)bt.wireframe===!0?(et.setLineWidth(bt.wireframeLinewidth*V()),Ce.setMode(w.LINES)):Ce.setMode(w.TRIANGLES);else if(pt.isLine){let ee=bt.linewidth;ee===void 0&&(ee=1),et.setLineWidth(ee*V()),pt.isLineSegments?Ce.setMode(w.LINES):pt.isLineLoop?Ce.setMode(w.LINE_LOOP):Ce.setMode(w.LINE_STRIP)}else pt.isPoints?Ce.setMode(w.POINTS):pt.isSprite&&Ce.setMode(w.TRIANGLES);if(pt.isBatchedMesh)if(pt._multiDrawInstances!==null)Ce.renderMultiDrawInstances(pt._multiDrawStarts,pt._multiDrawCounts,pt._multiDrawCount,pt._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Ce.renderMultiDraw(pt._multiDrawStarts,pt._multiDrawCounts,pt._multiDrawCount);else{let ee=pt._multiDrawStarts,an=pt._multiDrawCounts,me=pt._multiDrawCount,Vn=$t?st.get($t).bytesPerElement:1,bi=ht.get(bt).currentProgram.getUniforms();for(let Le=0;Le<me;Le++)bi.setValue(w,"_gl_DrawID",Le),Ce.render(ee[Le]/Vn,an[Le])}else if(pt.isInstancedMesh)Ce.renderInstances(Ie,ke,pt.count);else if(Mt.isInstancedBufferGeometry){let ee=Mt._maxInstanceCount!==void 0?Mt._maxInstanceCount:1/0,an=Math.min(Mt.instanceCount,ee);Ce.renderInstances(Ie,ke,an)}else Ce.render(Ie,ke)};function Ae(H,ft,Mt){H.transparent===!0&&H.side===De&&H.forceSinglePass===!1?(H.side=Yn,H.needsUpdate=!0,os(H,ft,Mt),H.side=Fn,H.needsUpdate=!0,os(H,ft,Mt),H.side=De):os(H,ft,Mt)}this.compile=function(H,ft,Mt=null){Mt===null&&(Mt=H),d=Ut.get(Mt),d.init(ft),M.push(d),Mt.traverseVisible(function(pt){pt.isLight&&pt.layers.test(ft.layers)&&(d.pushLight(pt),pt.castShadow&&d.pushShadow(pt))}),H!==Mt&&H.traverseVisible(function(pt){pt.isLight&&pt.layers.test(ft.layers)&&(d.pushLight(pt),pt.castShadow&&d.pushShadow(pt))}),d.setupLights();let bt=new Set;return H.traverse(function(pt){if(!(pt.isMesh||pt.isPoints||pt.isLine||pt.isSprite))return;let zt=pt.material;if(zt)if(Array.isArray(zt))for(let qt=0;qt<zt.length;qt++){let Jt=zt[qt];Ae(Jt,Mt,pt),bt.add(Jt)}else Ae(zt,Mt,pt),bt.add(zt)}),M.pop(),d=null,bt},this.compileAsync=function(H,ft,Mt=null){let bt=this.compile(H,ft,Mt);return new Promise(pt=>{function zt(){if(bt.forEach(function(qt){ht.get(qt).currentProgram.isReady()&&bt.delete(qt)}),bt.size===0){pt(H);return}setTimeout(zt,10)}J.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let pn=null;function kn(H){pn&&pn(H)}function xi(){zn.stop()}function Mi(){zn.start()}let zn=new ff;zn.setAnimationLoop(kn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(H){pn=H,xt.setAnimationLoop(H),H===null?zn.stop():zn.start()},xt.addEventListener("sessionstart",xi),xt.addEventListener("sessionend",Mi),this.render=function(H,ft){if(ft!==void 0&&ft.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ft.parent===null&&ft.matrixWorldAutoUpdate===!0&&ft.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(ft),ft=xt.getCamera()),H.isScene===!0&&H.onBeforeRender(x,H,ft,A),d=Ut.get(H,M.length),d.init(ft),M.push(d),G.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),Z.setFromProjectionMatrix(G),S=this.localClippingEnabled,T=yt.init(this.clippingPlanes,S),_=_t.get(H,p.length),_.init(),p.push(_),xt.enabled===!0&&xt.isPresenting===!0){let zt=x.xr.getDepthSensingMesh();zt!==null&&or(zt,ft,-1/0,x.sortObjects)}or(H,ft,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(I,tt),$=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,$&&Xt.addToRenderList(_,H),this.info.render.frame++,T===!0&&yt.beginShadows();let Mt=d.state.shadowsArray;Ct.render(Mt,H,ft),T===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();let bt=_.opaque,pt=_.transmissive;if(d.setupLights(),ft.isArrayCamera){let zt=ft.cameras;if(pt.length>0)for(let qt=0,Jt=zt.length;qt<Jt;qt++){let $t=zt[qt];Pr(bt,pt,H,$t)}$&&Xt.render(H);for(let qt=0,Jt=zt.length;qt<Jt;qt++){let $t=zt[qt];Jn(_,H,$t,$t.viewport)}}else pt.length>0&&Pr(bt,pt,H,ft),$&&Xt.render(H),Jn(_,H,ft);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),H.isScene===!0&&H.onAfterRender(x,H,ft),ne.resetDefaultState(),z=-1,O=null,M.pop(),M.length>0?(d=M[M.length-1],T===!0&&yt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function or(H,ft,Mt,bt){if(H.visible===!1)return;if(H.layers.test(ft.layers)){if(H.isGroup)Mt=H.renderOrder;else if(H.isLOD)H.autoUpdate===!0&&H.update(ft);else if(H.isLight)d.pushLight(H),H.castShadow&&d.pushShadow(H);else if(H.isSprite){if(!H.frustumCulled||Z.intersectsSprite(H)){bt&&N.setFromMatrixPosition(H.matrixWorld).applyMatrix4(G);let qt=rt.update(H),Jt=H.material;Jt.visible&&_.push(H,qt,Jt,Mt,N.z,null)}}else if((H.isMesh||H.isLine||H.isPoints)&&(!H.frustumCulled||Z.intersectsObject(H))){let qt=rt.update(H),Jt=H.material;if(bt&&(H.boundingSphere!==void 0?(H.boundingSphere===null&&H.computeBoundingSphere(),N.copy(H.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),N.copy(qt.boundingSphere.center)),N.applyMatrix4(H.matrixWorld).applyMatrix4(G)),Array.isArray(Jt)){let $t=qt.groups;for(let re=0,ce=$t.length;re<ce;re++){let Qt=$t[re],Ie=Jt[Qt.materialIndex];Ie&&Ie.visible&&_.push(H,qt,Ie,Mt,N.z,Qt)}}else Jt.visible&&_.push(H,qt,Jt,Mt,N.z,null)}}let zt=H.children;for(let qt=0,Jt=zt.length;qt<Jt;qt++)or(zt[qt],ft,Mt,bt)}function Jn(H,ft,Mt,bt){let pt=H.opaque,zt=H.transmissive,qt=H.transparent;d.setupLightsView(Mt),T===!0&&yt.setGlobalState(x.clippingPlanes,Mt),bt&&et.viewport(y.copy(bt)),pt.length>0&&Ir(pt,ft,Mt),zt.length>0&&Ir(zt,ft,Mt),qt.length>0&&Ir(qt,ft,Mt),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Pr(H,ft,Mt,bt){if((Mt.isScene===!0?Mt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[bt.id]===void 0&&(d.state.transmissionRenderTarget[bt.id]=new $i(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Ko:Ki,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));let zt=d.state.transmissionRenderTarget[bt.id],qt=bt.viewport||y;zt.setSize(qt.z,qt.w);let Jt=x.getRenderTarget();x.setRenderTarget(zt),x.getClearColor(k),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),$&&Xt.render(Mt);let $t=x.toneMapping;x.toneMapping=gr;let re=bt.viewport;if(bt.viewport!==void 0&&(bt.viewport=void 0),d.setupLightsView(bt),T===!0&&yt.setGlobalState(x.clippingPlanes,bt),Ir(H,Mt,bt),P.updateMultisampleRenderTarget(zt),P.updateRenderTargetMipmap(zt),J.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Qt=0,Ie=ft.length;Qt<Ie;Qt++){let Me=ft[Qt],ke=Me.object,Dn=Me.geometry,Ce=Me.material,ee=Me.group;if(Ce.side===De&&ke.layers.test(bt.layers)){let an=Ce.side;Ce.side=Yn,Ce.needsUpdate=!0,sa(ke,Mt,bt,Dn,Ce,ee),Ce.side=an,Ce.needsUpdate=!0,ce=!0}}ce===!0&&(P.updateMultisampleRenderTarget(zt),P.updateRenderTargetMipmap(zt))}x.setRenderTarget(Jt),x.setClearColor(k,Q),re!==void 0&&(bt.viewport=re),x.toneMapping=$t}function Ir(H,ft,Mt){let bt=ft.isScene===!0?ft.overrideMaterial:null;for(let pt=0,zt=H.length;pt<zt;pt++){let qt=H[pt],Jt=qt.object,$t=qt.geometry,re=bt===null?qt.material:bt,ce=qt.group;Jt.layers.test(Mt.layers)&&sa(Jt,ft,Mt,$t,re,ce)}}function sa(H,ft,Mt,bt,pt,zt){H.onBeforeRender(x,ft,Mt,bt,pt,zt),H.modelViewMatrix.multiplyMatrices(Mt.matrixWorldInverse,H.matrixWorld),H.normalMatrix.getNormalMatrix(H.modelViewMatrix),pt.onBeforeRender(x,ft,Mt,bt,H,zt),pt.transparent===!0&&pt.side===De&&pt.forceSinglePass===!1?(pt.side=Yn,pt.needsUpdate=!0,x.renderBufferDirect(Mt,ft,bt,pt,H,zt),pt.side=Fn,pt.needsUpdate=!0,x.renderBufferDirect(Mt,ft,bt,pt,H,zt),pt.side=De):x.renderBufferDirect(Mt,ft,bt,pt,H,zt),H.onAfterRender(x,ft,Mt,bt,pt,zt)}function os(H,ft,Mt){ft.isScene!==!0&&(ft=W);let bt=ht.get(H),pt=d.state.lights,zt=d.state.shadowsArray,qt=pt.state.version,Jt=wt.getParameters(H,pt.state,zt,ft,Mt),$t=wt.getProgramCacheKey(Jt),re=bt.programs;bt.environment=H.isMeshStandardMaterial?ft.environment:null,bt.fog=ft.fog,bt.envMap=(H.isMeshStandardMaterial?F:E).get(H.envMap||bt.environment),bt.envMapRotation=bt.environment!==null&&H.envMap===null?ft.environmentRotation:H.envMapRotation,re===void 0&&(H.addEventListener("dispose",ue),re=new Map,bt.programs=re);let ce=re.get($t);if(ce!==void 0){if(bt.currentProgram===ce&&bt.lightsStateVersion===qt)return as(H,Jt),ce}else Jt.uniforms=wt.getUniforms(H),H.onBeforeCompile(Jt,x),ce=wt.acquireProgram(Jt,$t),re.set($t,ce),bt.uniforms=Jt.uniforms;let Qt=bt.uniforms;return(!H.isShaderMaterial&&!H.isRawShaderMaterial||H.clipping===!0)&&(Qt.clippingPlanes=yt.uniform),as(H,Jt),bt.needsLights=Lr(H),bt.lightsStateVersion=qt,bt.needsLights&&(Qt.ambientLightColor.value=pt.state.ambient,Qt.lightProbe.value=pt.state.probe,Qt.directionalLights.value=pt.state.directional,Qt.directionalLightShadows.value=pt.state.directionalShadow,Qt.spotLights.value=pt.state.spot,Qt.spotLightShadows.value=pt.state.spotShadow,Qt.rectAreaLights.value=pt.state.rectArea,Qt.ltc_1.value=pt.state.rectAreaLTC1,Qt.ltc_2.value=pt.state.rectAreaLTC2,Qt.pointLights.value=pt.state.point,Qt.pointLightShadows.value=pt.state.pointShadow,Qt.hemisphereLights.value=pt.state.hemi,Qt.directionalShadowMap.value=pt.state.directionalShadowMap,Qt.directionalShadowMatrix.value=pt.state.directionalShadowMatrix,Qt.spotShadowMap.value=pt.state.spotShadowMap,Qt.spotLightMatrix.value=pt.state.spotLightMatrix,Qt.spotLightMap.value=pt.state.spotLightMap,Qt.pointShadowMap.value=pt.state.pointShadowMap,Qt.pointShadowMatrix.value=pt.state.pointShadowMatrix),bt.currentProgram=ce,bt.uniformsList=null,ce}function Fi(H){if(H.uniformsList===null){let ft=H.currentProgram.getUniforms();H.uniformsList=Ds.seqWithValue(ft.seq,H.uniforms)}return H.uniformsList}function as(H,ft){let Mt=ht.get(H);Mt.outputColorSpace=ft.outputColorSpace,Mt.batching=ft.batching,Mt.batchingColor=ft.batchingColor,Mt.instancing=ft.instancing,Mt.instancingColor=ft.instancingColor,Mt.instancingMorph=ft.instancingMorph,Mt.skinning=ft.skinning,Mt.morphTargets=ft.morphTargets,Mt.morphNormals=ft.morphNormals,Mt.morphColors=ft.morphColors,Mt.morphTargetsCount=ft.morphTargetsCount,Mt.numClippingPlanes=ft.numClippingPlanes,Mt.numIntersection=ft.numClipIntersection,Mt.vertexAlphas=ft.vertexAlphas,Mt.vertexTangents=ft.vertexTangents,Mt.toneMapping=ft.toneMapping}function ro(H,ft,Mt,bt,pt){ft.isScene!==!0&&(ft=W),P.resetTextureUnits();let zt=ft.fog,qt=bt.isMeshStandardMaterial?ft.environment:null,Jt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:br,$t=(bt.isMeshStandardMaterial?F:E).get(bt.envMap||qt),re=bt.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,ce=!!Mt.attributes.tangent&&(!!bt.normalMap||bt.anisotropy>0),Qt=!!Mt.morphAttributes.position,Ie=!!Mt.morphAttributes.normal,Me=!!Mt.morphAttributes.color,ke=gr;bt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ke=x.toneMapping);let Dn=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Ce=Dn!==void 0?Dn.length:0,ee=ht.get(bt),an=d.state.lights;if(T===!0&&(S===!0||H!==O)){let Un=H===O&&bt.id===z;yt.setState(bt,H,Un)}let me=!1;bt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==an.state.version||ee.outputColorSpace!==Jt||pt.isBatchedMesh&&ee.batching===!1||!pt.isBatchedMesh&&ee.batching===!0||pt.isBatchedMesh&&ee.batchingColor===!0&&pt.colorTexture===null||pt.isBatchedMesh&&ee.batchingColor===!1&&pt.colorTexture!==null||pt.isInstancedMesh&&ee.instancing===!1||!pt.isInstancedMesh&&ee.instancing===!0||pt.isSkinnedMesh&&ee.skinning===!1||!pt.isSkinnedMesh&&ee.skinning===!0||pt.isInstancedMesh&&ee.instancingColor===!0&&pt.instanceColor===null||pt.isInstancedMesh&&ee.instancingColor===!1&&pt.instanceColor!==null||pt.isInstancedMesh&&ee.instancingMorph===!0&&pt.morphTexture===null||pt.isInstancedMesh&&ee.instancingMorph===!1&&pt.morphTexture!==null||ee.envMap!==$t||bt.fog===!0&&ee.fog!==zt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==yt.numPlanes||ee.numIntersection!==yt.numIntersection)||ee.vertexAlphas!==re||ee.vertexTangents!==ce||ee.morphTargets!==Qt||ee.morphNormals!==Ie||ee.morphColors!==Me||ee.toneMapping!==ke||ee.morphTargetsCount!==Ce)&&(me=!0):(me=!0,ee.__version=bt.version);let Vn=ee.currentProgram;me===!0&&(Vn=os(bt,ft,pt));let bi=!1,Le=!1,cs=!1,Pe=Vn.getUniforms(),vi=ee.uniforms;if(et.useProgram(Vn.program)&&(bi=!0,Le=!0,cs=!0),bt.id!==z&&(z=bt.id,Le=!0),bi||O!==H){X.reverseDepthBuffer?(D.copy(H.projectionMatrix),Ap(D),Cp(D),Pe.setValue(w,"projectionMatrix",D)):Pe.setValue(w,"projectionMatrix",H.projectionMatrix),Pe.setValue(w,"viewMatrix",H.matrixWorldInverse);let Un=Pe.map.cameraPosition;Un!==void 0&&Un.setValue(w,U.setFromMatrixPosition(H.matrixWorld)),X.logarithmicDepthBuffer&&Pe.setValue(w,"logDepthBufFC",2/(Math.log(H.far+1)/Math.LN2)),(bt.isMeshPhongMaterial||bt.isMeshToonMaterial||bt.isMeshLambertMaterial||bt.isMeshBasicMaterial||bt.isMeshStandardMaterial||bt.isShaderMaterial)&&Pe.setValue(w,"isOrthographic",H.isOrthographicCamera===!0),O!==H&&(O=H,Le=!0,cs=!0)}if(pt.isSkinnedMesh){Pe.setOptional(w,pt,"bindMatrix"),Pe.setOptional(w,pt,"bindMatrixInverse");let Un=pt.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Pe.setValue(w,"boneTexture",Un.boneTexture,P))}pt.isBatchedMesh&&(Pe.setOptional(w,pt,"batchingTexture"),Pe.setValue(w,"batchingTexture",pt._matricesTexture,P),Pe.setOptional(w,pt,"batchingIdTexture"),Pe.setValue(w,"batchingIdTexture",pt._indirectTexture,P),Pe.setOptional(w,pt,"batchingColorTexture"),pt._colorsTexture!==null&&Pe.setValue(w,"batchingColorTexture",pt._colorsTexture,P));let so=Mt.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0)&&kt.update(pt,Mt,Vn),(Le||ee.receiveShadow!==pt.receiveShadow)&&(ee.receiveShadow=pt.receiveShadow,Pe.setValue(w,"receiveShadow",pt.receiveShadow)),bt.isMeshGouraudMaterial&&bt.envMap!==null&&(vi.envMap.value=$t,vi.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),bt.isMeshStandardMaterial&&bt.envMap===null&&ft.environment!==null&&(vi.envMapIntensity.value=ft.environmentIntensity),Le&&(Pe.setValue(w,"toneMappingExposure",x.toneMappingExposure),ee.needsLights&&He(vi,cs),zt&&bt.fog===!0&&Et.refreshFogUniforms(vi,zt),Et.refreshMaterialUniforms(vi,bt,ct,K,d.state.transmissionRenderTarget[H.id]),Ds.upload(w,Fi(ee),vi,P)),bt.isShaderMaterial&&bt.uniformsNeedUpdate===!0&&(Ds.upload(w,Fi(ee),vi,P),bt.uniformsNeedUpdate=!1),bt.isSpriteMaterial&&Pe.setValue(w,"center",pt.center),Pe.setValue(w,"modelViewMatrix",pt.modelViewMatrix),Pe.setValue(w,"normalMatrix",pt.normalMatrix),Pe.setValue(w,"modelMatrix",pt.matrixWorld),bt.isShaderMaterial||bt.isRawShaderMaterial){let Un=bt.uniformsGroups;for(let oo=0,ao=Un.length;oo<ao;oo++){let co=Un[oo];at.update(co,Vn),at.bind(co,Vn)}}return Vn}function He(H,ft){H.ambientLightColor.needsUpdate=ft,H.lightProbe.needsUpdate=ft,H.directionalLights.needsUpdate=ft,H.directionalLightShadows.needsUpdate=ft,H.pointLights.needsUpdate=ft,H.pointLightShadows.needsUpdate=ft,H.spotLights.needsUpdate=ft,H.spotLightShadows.needsUpdate=ft,H.rectAreaLights.needsUpdate=ft,H.hemisphereLights.needsUpdate=ft}function Lr(H){return H.isMeshLambertMaterial||H.isMeshToonMaterial||H.isMeshPhongMaterial||H.isMeshStandardMaterial||H.isShadowMaterial||H.isShaderMaterial&&H.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(H,ft,Mt){ht.get(H.texture).__webglTexture=ft,ht.get(H.depthTexture).__webglTexture=Mt;let bt=ht.get(H);bt.__hasExternalTextures=!0,bt.__autoAllocateDepthBuffer=Mt===void 0,bt.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),bt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(H,ft){let Mt=ht.get(H);Mt.__webglFramebuffer=ft,Mt.__useDefaultFramebuffer=ft===void 0},this.setRenderTarget=function(H,ft=0,Mt=0){A=H,L=ft,C=Mt;let bt=!0,pt=null,zt=!1,qt=!1;if(H){let $t=ht.get(H);if($t.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(w.FRAMEBUFFER,null),bt=!1;else if($t.__webglFramebuffer===void 0)P.setupRenderTarget(H);else if($t.__hasExternalTextures)P.rebindTextures(H,ht.get(H.texture).__webglTexture,ht.get(H.depthTexture).__webglTexture);else if(H.depthBuffer){let Qt=H.depthTexture;if($t.__boundDepthTexture!==Qt){if(Qt!==null&&ht.has(Qt)&&(H.width!==Qt.image.width||H.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(H)}}let re=H.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(qt=!0);let ce=ht.get(H).__webglFramebuffer;H.isWebGLCubeRenderTarget?(Array.isArray(ce[ft])?pt=ce[ft][Mt]:pt=ce[ft],zt=!0):H.samples>0&&P.useMultisampledRTT(H)===!1?pt=ht.get(H).__webglMultisampledFramebuffer:Array.isArray(ce)?pt=ce[Mt]:pt=ce,y.copy(H.viewport),v.copy(H.scissor),q=H.scissorTest}else y.copy(B).multiplyScalar(ct).floor(),v.copy(j).multiplyScalar(ct).floor(),q=ot;if(et.bindFramebuffer(w.FRAMEBUFFER,pt)&&bt&&et.drawBuffers(H,pt),et.viewport(y),et.scissor(v),et.setScissorTest(q),zt){let $t=ht.get(H.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t.__webglTexture,Mt)}else if(qt){let $t=ht.get(H.texture),re=ft||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,$t.__webglTexture,Mt||0,re)}z=-1},this.readRenderTargetPixels=function(H,ft,Mt,bt,pt,zt,qt){if(!(H&&H.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=ht.get(H).__webglFramebuffer;if(H.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt){et.bindFramebuffer(w.FRAMEBUFFER,Jt);try{let $t=H.texture,re=$t.format,ce=$t.type;if(!X.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ft>=0&&ft<=H.width-bt&&Mt>=0&&Mt<=H.height-pt&&w.readPixels(ft,Mt,bt,pt,Kt.convert(re),Kt.convert(ce),zt)}finally{let $t=A!==null?ht.get(A).__webglFramebuffer:null;et.bindFramebuffer(w.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(H,ft,Mt,bt,pt,zt,qt){if(!(H&&H.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=ht.get(H).__webglFramebuffer;if(H.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt){let $t=H.texture,re=$t.format,ce=$t.type;if(!X.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ft>=0&&ft<=H.width-bt&&Mt>=0&&Mt<=H.height-pt){et.bindFramebuffer(w.FRAMEBUFFER,Jt);let Qt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Qt),w.bufferData(w.PIXEL_PACK_BUFFER,zt.byteLength,w.STREAM_READ),w.readPixels(ft,Mt,bt,pt,Kt.convert(re),Kt.convert(ce),0);let Ie=A!==null?ht.get(A).__webglFramebuffer:null;et.bindFramebuffer(w.FRAMEBUFFER,Ie);let Me=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Rp(w,Me,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Qt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,zt),w.deleteBuffer(Qt),w.deleteSync(Me),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(H,ft=null,Mt=0){H.isTexture!==!0&&(Xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ft=arguments[0]||null,H=arguments[1]);let bt=Math.pow(2,-Mt),pt=Math.floor(H.image.width*bt),zt=Math.floor(H.image.height*bt),qt=ft!==null?ft.x:0,Jt=ft!==null?ft.y:0;P.setTexture2D(H,0),w.copyTexSubImage2D(w.TEXTURE_2D,Mt,0,0,qt,Jt,pt,zt),et.unbindTexture()},this.copyTextureToTexture=function(H,ft,Mt=null,bt=null,pt=0){H.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture function signature has changed."),bt=arguments[0]||null,H=arguments[1],ft=arguments[2],pt=arguments[3]||0,Mt=null);let zt,qt,Jt,$t,re,ce;Mt!==null?(zt=Mt.max.x-Mt.min.x,qt=Mt.max.y-Mt.min.y,Jt=Mt.min.x,$t=Mt.min.y):(zt=H.image.width,qt=H.image.height,Jt=0,$t=0),bt!==null?(re=bt.x,ce=bt.y):(re=0,ce=0);let Qt=Kt.convert(ft.format),Ie=Kt.convert(ft.type);P.setTexture2D(ft,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ft.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ft.unpackAlignment);let Me=w.getParameter(w.UNPACK_ROW_LENGTH),ke=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Dn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ce=w.getParameter(w.UNPACK_SKIP_ROWS),ee=w.getParameter(w.UNPACK_SKIP_IMAGES),an=H.isCompressedTexture?H.mipmaps[pt]:H.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,an.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,an.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Jt),w.pixelStorei(w.UNPACK_SKIP_ROWS,$t),H.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,pt,re,ce,zt,qt,Qt,Ie,an.data):H.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,pt,re,ce,an.width,an.height,Qt,an.data):w.texSubImage2D(w.TEXTURE_2D,pt,re,ce,zt,qt,Qt,Ie,an),w.pixelStorei(w.UNPACK_ROW_LENGTH,Me),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ke),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Dn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ee),pt===0&&ft.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(H,ft,Mt=null,bt=null,pt=0){H.isTexture!==!0&&(Xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Mt=arguments[0]||null,bt=arguments[1]||null,H=arguments[2],ft=arguments[3],pt=arguments[4]||0);let zt,qt,Jt,$t,re,ce,Qt,Ie,Me,ke=H.isCompressedTexture?H.mipmaps[pt]:H.image;Mt!==null?(zt=Mt.max.x-Mt.min.x,qt=Mt.max.y-Mt.min.y,Jt=Mt.max.z-Mt.min.z,$t=Mt.min.x,re=Mt.min.y,ce=Mt.min.z):(zt=ke.width,qt=ke.height,Jt=ke.depth,$t=0,re=0,ce=0),bt!==null?(Qt=bt.x,Ie=bt.y,Me=bt.z):(Qt=0,Ie=0,Me=0);let Dn=Kt.convert(ft.format),Ce=Kt.convert(ft.type),ee;if(ft.isData3DTexture)P.setTexture3D(ft,0),ee=w.TEXTURE_3D;else if(ft.isDataArrayTexture||ft.isCompressedArrayTexture)P.setTexture2DArray(ft,0),ee=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ft.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ft.unpackAlignment);let an=w.getParameter(w.UNPACK_ROW_LENGTH),me=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Vn=w.getParameter(w.UNPACK_SKIP_PIXELS),bi=w.getParameter(w.UNPACK_SKIP_ROWS),Le=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ke.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ke.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,$t),w.pixelStorei(w.UNPACK_SKIP_ROWS,re),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ce),H.isDataTexture||H.isData3DTexture?w.texSubImage3D(ee,pt,Qt,Ie,Me,zt,qt,Jt,Dn,Ce,ke.data):ft.isCompressedArrayTexture?w.compressedTexSubImage3D(ee,pt,Qt,Ie,Me,zt,qt,Jt,Dn,ke.data):w.texSubImage3D(ee,pt,Qt,Ie,Me,zt,qt,Jt,Dn,Ce,ke),w.pixelStorei(w.UNPACK_ROW_LENGTH,an),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,me),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Vn),w.pixelStorei(w.UNPACK_SKIP_ROWS,bi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Le),pt===0&&ft.generateMipmaps&&w.generateMipmap(ee),et.unbindTexture()},this.initRenderTarget=function(H){ht.get(H).__webglFramebuffer===void 0&&P.setupRenderTarget(H)},this.initTexture=function(H){H.isCubeTexture?P.setTextureCube(H,0):H.isData3DTexture?P.setTexture3D(H,0):H.isDataArrayTexture||H.isCompressedArrayTexture?P.setTexture2DArray(H,0):P.setTexture2D(H,0),et.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,et.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ou?"display-p3":"srgb",e.unpackColorSpace=Oe.workingColorSpace===vc?"display-p3":"srgb"}};var cc=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zs=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Sh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ch,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new R,lc=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.applyMatrix4(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.applyNormalMatrix(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.transformDirection(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=di(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=di(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=di(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=di(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),r=Be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),r=Be(r,this.array),s=Be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$n=class extends mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ws,Mo=new R,Ss=new R,Ts=new R,Rs=new Nt,bo=new Nt,_f=new le,Aa=new R,vo=new R,Ca=new R,N0=new Nt,_l=new Nt,H0=new Nt,ei=class extends un{constructor(t=new $n){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sh(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new lc(n,3,0,!1)),ws.setAttribute("uv",new lc(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),_f.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ts.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Pa(Aa.set(-.5,-.5,0),Ts,o,Ss,r,s),Pa(vo.set(.5,-.5,0),Ts,o,Ss,r,s),Pa(Ca.set(.5,.5,0),Ts,o,Ss,r,s),N0.set(0,0),_l.set(1,0),H0.set(1,1);let a=t.ray.intersectTriangle(Aa,vo,Ca,!1,Mo);if(a===null&&(Pa(vo.set(-.5,.5,0),Ts,o,Ss,r,s),_l.set(0,1),a=t.ray.intersectTriangle(Aa,Ca,vo,!1,Mo),a===null))return;let c=t.ray.origin.distanceTo(Mo);c<t.near||c>t.far||e.push({distance:c,point:Mo.clone(),uv:pr.getInterpolation(Mo,Aa,vo,Ca,N0,_l,H0,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Pa(i,t,e,n,r,s){Rs.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(bo.x=s*Rs.x-r*Rs.y,bo.y=r*Rs.x+s*Rs.y):bo.copy(Rs),i.copy(t),i.x+=bo.x,i.y+=bo.y,i.applyMatrix4(_f)}var Th=class extends Zn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=Tn,h=Tn,u,f){super(null,o,a,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hc=class extends Ue{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},As=new le,F0=new le,Ia=[],O0=new Ji,wy=new le,Eo=new Tt,wo=new ji,Vs=class extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,wy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),O0.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(O0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),wo.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(wo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(n),t.ray.intersectsSphere(wo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,As),F0.multiplyMatrices(n,As),Eo.matrixWorld=F0,Eo.raycast(t,Ia);for(let o=0,a=Ia.length;o<a;o++){let c=Ia[o];c.instanceId=s,c.object=this,e.push(c)}Ia.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Th(new Float32Array(r*this.count),r,this.count,eu,wi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Bo=class extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},uc=new R,fc=new R,B0=new le,So=new Fo,La=new ji,yl=new R,k0=new R,dc=class extends un{constructor(t=new Ee,e=new Bo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)uc.fromBufferAttribute(e,r-1),fc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=uc.distanceTo(fc);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),La.radius+=s,t.ray.intersectsSphere(La)===!1)return;B0.copy(r).invert(),So.copy(t.ray).applyMatrix4(B0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,d=g-1;_<d;_+=l){let p=h.getX(_),M=h.getX(_+1),x=Da(this,t,So,c,p,M);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),d=h.getX(m),p=Da(this,t,So,c,_,d);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,d=g-1;_<d;_+=l){let p=Da(this,t,So,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Da(this,t,So,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Da(i,t,e,n,r,s){let o=i.geometry.attributes.position;if(uc.fromBufferAttribute(o,r),fc.fromBufferAttribute(o,s),e.distanceSqToSegment(uc,fc,yl,k0)>n)return;yl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(yl);if(!(c<t.near||c>t.far))return{distance:c,point:k0.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var yr=class extends mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},z0=new le,Rh=new Fo,Ua=new ji,Na=new R,xr=class extends un{constructor(t=new Ee,e=new yr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=s,t.ray.intersectsSphere(Ua)===!1)return;z0.copy(r).invert(),Rh.copy(t.ray).applyMatrix4(z0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){let d=l.getX(g);Na.fromBufferAttribute(u,d),V0(Na,d,c,r,t,e,this)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Na.fromBufferAttribute(u,g),V0(Na,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function V0(i,t,e,n,r,s,o){let a=Rh.distanceSqToPoint(i);if(a<e){let c=new R;Rh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Rn=class extends Zn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],f=n[r+1]-h,m=(o-h)/f;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Nt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,r=[],s=[],o=[],a=new R,c=new le;for(let m=0;m<=t;m++){let g=m/t;r[m]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(vn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(vn(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ko=class extends ri{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Nt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*u+this.aX,l=f*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ah=class extends ko{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,m*=h,r(o,a,f,m)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Ha=new R,xl=new lu,Ml=new lu,bl=new lu,Ch=class extends ri{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Ha.subVectors(r[0],r[1]).add(r[0]),l=Ha);let u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ha.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),xl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,d),Ml.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,d),bl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ml.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),bl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(xl.calc(c),Ml.calc(c),bl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function G0(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function Sy(i,t){let e=1-i;return e*e*t}function Ty(i,t){return 2*(1-i)*i*t}function Ry(i,t){return i*i*t}function Io(i,t,e,n){return Sy(i,t)+Ty(i,e)+Ry(i,n)}function Ay(i,t){let e=1-i;return e*e*e*t}function Cy(i,t){let e=1-i;return 3*e*e*i*t}function Py(i,t){return 3*(1-i)*i*i*t}function Iy(i,t){return i*i*i*t}function Lo(i,t,e,n,r){return Ay(i,t)+Cy(i,e)+Py(i,n)+Iy(i,r)}var pc=class extends ri{constructor(t=new Nt,e=new Nt,n=new Nt,r=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Nt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Lo(t,r.x,s.x,o.x,a.x),Lo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ph=class extends ri{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Lo(t,r.x,s.x,o.x,a.x),Lo(t,r.y,s.y,o.y,a.y),Lo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mc=class extends ri{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ih=class extends ri{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends ri{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Io(t,r.x,s.x,o.x),Io(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lh=class extends ri{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Io(t,r.x,s.x,o.x),Io(t,r.y,s.y,o.y),Io(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_c=class extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(G0(a,c.x,l.x,h.x,u.x),G0(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Nt().fromArray(r))}return this}},Dh=Object.freeze({__proto__:null,ArcCurve:Ah,CatmullRomCurve3:Ch,CubicBezierCurve:pc,CubicBezierCurve3:Ph,EllipseCurve:ko,LineCurve:mc,LineCurve3:Ih,QuadraticBezierCurve:gc,QuadraticBezierCurve3:Lh,SplineCurve:_c}),Uh=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new Dh[r.type]().fromJSON(r))}return this}},zo=class extends Uh{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mc(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new gc(this.currentPoint.clone(),new Nt(t,e),new Nt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new pc(this.currentPoint.clone(),new Nt(t,e),new Nt(n,r),new Nt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _c(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new ko(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Nh=class i extends Ee{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=vn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,f=new Nt,m=new R,g=new R,_=new R,d=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:d=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,m.x=p*1,m.y=-d,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:d=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,m.x=p*1,m.y=-d,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let M=0;M<=e;M++){let x=n+M*h*r,b=Math.sin(x),L=Math.cos(x);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*b,u.y=t[C].y,u.z=t[C].x*L,o.push(u.x,u.y,u.z),f.x=M/e,f.y=C/(t.length-1),a.push(f.x,f.y);let A=c[3*C+0]*b,z=c[3*C+1],O=c[3*C+0]*L;l.push(A,z,O)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){let b=x+M*t.length,L=b,C=b+t.length,A=b+t.length+1,z=b+1;s.push(L,C,z),s.push(A,z,C)}this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Mr=class i extends Nh{constructor(t=1,e=1,n=4,r=8){let s=new zo;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Vo=class i extends Ee{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new R,h=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},be=class i extends Ee{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],m=[],g=0,_=[],d=n/2,p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(m,2));function M(){let b=new R,L=new R,C=0,A=(e-t)/n;for(let z=0;z<=s;z++){let O=[],y=z/s,v=y*(e-t)+t;for(let q=0;q<=r;q++){let k=q/r,Q=k*c+a,dt=Math.sin(Q),K=Math.cos(Q);L.x=v*dt,L.y=-y*n+d,L.z=v*K,u.push(L.x,L.y,L.z),b.set(dt,A,K).normalize(),f.push(b.x,b.y,b.z),m.push(k,1-y),O.push(g++)}_.push(O)}for(let z=0;z<r;z++)for(let O=0;O<s;O++){let y=_[O][z],v=_[O+1][z],q=_[O+1][z+1],k=_[O][z+1];t>0&&(h.push(y,v,k),C+=3),e>0&&(h.push(v,q,k),C+=3)}l.addGroup(p,C,0),p+=C}function x(b){let L=g,C=new Nt,A=new R,z=0,O=b===!0?t:e,y=b===!0?1:-1;for(let q=1;q<=r;q++)u.push(0,d*y,0),f.push(0,y,0),m.push(.5,.5),g++;let v=g;for(let q=0;q<=r;q++){let Q=q/r*c+a,dt=Math.cos(Q),K=Math.sin(Q);A.x=O*K,A.y=d*y,A.z=O*dt,u.push(A.x,A.y,A.z),f.push(0,y,0),C.x=dt*.5+.5,C.y=K*.5*y+.5,m.push(C.x,C.y),g++}for(let q=0;q<r;q++){let k=L+q,Q=v+q;b===!0?h.push(Q,Q+1,k):h.push(Q+1,Q,k),z+=3}l.addGroup(p,z,b===!0?1:2),p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},On=class i extends be{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yc=class i extends Ee{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new R,b=new R,L=new R;for(let C=0;C<e.length;C+=3)m(e[C+0],x),m(e[C+1],b),m(e[C+2],L),c(x,b,L,M)}function c(M,x,b,L){let C=L+1,A=[];for(let z=0;z<=C;z++){A[z]=[];let O=M.clone().lerp(b,z/C),y=x.clone().lerp(b,z/C),v=C-z;for(let q=0;q<=v;q++)q===0&&z===C?A[z][q]=O:A[z][q]=O.clone().lerp(y,q/v)}for(let z=0;z<C;z++)for(let O=0;O<2*(C-z)-1;O++){let y=Math.floor(O/2);O%2===0?(f(A[z][y+1]),f(A[z+1][y]),f(A[z][y])):(f(A[z][y+1]),f(A[z+1][y+1]),f(A[z+1][y]))}}function l(M){let x=new R;for(let b=0;b<s.length;b+=3)x.x=s[b+0],x.y=s[b+1],x.z=s[b+2],x.normalize().multiplyScalar(M),s[b+0]=x.x,s[b+1]=x.y,s[b+2]=x.z}function h(){let M=new R;for(let x=0;x<s.length;x+=3){M.x=s[x+0],M.y=s[x+1],M.z=s[x+2];let b=d(M)/2/Math.PI+.5,L=p(M)/Math.PI+.5;o.push(b,1-L)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let x=o[M+0],b=o[M+2],L=o[M+4],C=Math.max(x,b,L),A=Math.min(x,b,L);C>.9&&A<.1&&(x<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),L<.2&&(o[M+4]+=1))}}function f(M){s.push(M.x,M.y,M.z)}function m(M,x){let b=M*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){let M=new R,x=new R,b=new R,L=new R,C=new Nt,A=new Nt,z=new Nt;for(let O=0,y=0;O<s.length;O+=9,y+=6){M.set(s[O+0],s[O+1],s[O+2]),x.set(s[O+3],s[O+4],s[O+5]),b.set(s[O+6],s[O+7],s[O+8]),C.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),z.set(o[y+4],o[y+5]),L.copy(M).add(x).add(b).divideScalar(3);let v=d(L);_(C,y+0,M,v),_(A,y+2,x,v),_(z,y+4,b,v)}}function _(M,x,b,L){L<0&&M.x===1&&(o[x]=M.x-1),b.x===0&&b.z===0&&(o[x]=L/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var $r=class extends zo{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new zo().fromJSON(r))}return this}},Ly={triangulate:function(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=yf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,f,m;if(n&&(s=Fy(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Go(s,o,e,a,c,m,0),o}};function yf(i,t,e,n,r){let s,o;if(r===Zy(i,t,e,n)>0)for(s=t;s<e;s+=n)o=W0(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=W0(s,i[s],i[s+1],o);return o&&wc(o,o.next)&&(Xo(o),o=o.next),o}function Jr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wc(e,e.next)||en(e.prev,e,e.next)===0)){if(Xo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Go(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Vy(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Uy(i,n,r,s):Dy(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Xo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Ny(Jr(i),t,e),Go(i,t,e,n,r,s,2)):o===2&&Hy(i,t,e,n,r,s):Go(Jr(i),t,e,n,r,s,1);break}}}function Dy(i){let t=i.prev,e=i,n=i.next;if(en(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,f=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&Ps(r,a,s,c,o,l,g.x,g.y)&&en(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Uy(i,t,e,n){let r=i.prev,s=i,o=i.next;if(en(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,f=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,d=h>u?h>f?h:f:u>f?u:f,p=Hh(m,g,t,e,n),M=Hh(_,d,t,e,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=p&&b&&b.z<=M;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==o&&Ps(a,h,c,u,l,f,x.x,x.y)&&en(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=m&&b.x<=_&&b.y>=g&&b.y<=d&&b!==r&&b!==o&&Ps(a,h,c,u,l,f,b.x,b.y)&&en(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==o&&Ps(a,h,c,u,l,f,x.x,x.y)&&en(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=M;){if(b.x>=m&&b.x<=_&&b.y>=g&&b.y<=d&&b!==r&&b!==o&&Ps(a,h,c,u,l,f,b.x,b.y)&&en(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ny(i,t,e){let n=i;do{let r=n.prev,s=n.next.next;!wc(r,s)&&xf(r,n,n.next,s)&&Wo(r,s)&&Wo(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Xo(n),Xo(n.next),n=i=s),n=n.next}while(n!==i);return Jr(n)}function Hy(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xy(o,a)){let c=Mf(o,a);o=Jr(o,o.next),c=Jr(c,c.next),Go(o,t,e,n,r,s,0),Go(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Fy(i,t,e,n){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=yf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(Wy(l));for(r.sort(Oy),s=0;s<r.length;s++)e=By(r[s],e);return e}function Oy(i,t){return i.x-t.x}function By(i,t){let e=ky(i,t);if(!e)return t;let n=Mf(e,i);return Jr(n,n.next),Jr(e,e.next)}function ky(i,t){let e=t,n=-1/0,r,s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Ps(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Wo(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&zy(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function zy(i,t){return en(i.prev,i,t.prev)<0&&en(t.next,i,i.next)<0}function Vy(i,t,e,n){let r=i;do r.z===0&&(r.z=Hh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Gy(r)}function Gy(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Hh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Wy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ps(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Xy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!qy(i,t)&&(Wo(i,t)&&Wo(t,i)&&Yy(i,t)&&(en(i.prev,i,t.prev)||en(i,t.prev,t))||wc(i,t)&&en(i.prev,i,i.next)>0&&en(t.prev,t,t.next)>0)}function en(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wc(i,t){return i.x===t.x&&i.y===t.y}function xf(i,t,e,n){let r=Oa(en(i,t,e)),s=Oa(en(i,t,n)),o=Oa(en(e,n,i)),a=Oa(en(e,n,t));return!!(r!==s&&o!==a||r===0&&Fa(i,e,t)||s===0&&Fa(i,n,t)||o===0&&Fa(e,i,n)||a===0&&Fa(e,t,n))}function Fa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oa(i){return i>0?1:i<0?-1:0}function qy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Wo(i,t){return en(i.prev,i,i.next)<0?en(i,t,i.next)>=0&&en(i,i.prev,t)>=0:en(i,t,i.prev)<0||en(i,i.next,t)<0}function Yy(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mf(i,t){let e=new Fh(i.i,i.x,i.y),n=new Fh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function W0(i,t,e,n){let r=new Fh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zy(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Do=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];X0(t),q0(n,t);let o=t.length;e.forEach(X0);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,q0(n,e[c]);let a=Ly.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function X0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function q0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gs=class i extends Ee{constructor(t=new $r([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ky,x,b=!1,L,C,A,z;p&&(x=p.getSpacedPoints(h),b=!0,f=!1,L=p.computeFrenetFrames(h,!1),C=new R,A=new R,z=new R),f||(d=0,m=0,g=0,_=0);let O=a.extractPoints(l),y=O.shape,v=O.holes;if(!Do.isClockWise(y)){y=y.reverse();for(let V=0,w=v.length;V<w;V++){let nt=v[V];Do.isClockWise(nt)&&(v[V]=nt.reverse())}}let k=Do.triangulateShape(y,v),Q=y;for(let V=0,w=v.length;V<w;V++){let nt=v[V];y=y.concat(nt)}function dt(V,w,nt){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(w,nt)}let K=y.length,ct=k.length;function I(V,w,nt){let J,X,et,it=V.x-w.x,ht=V.y-w.y,P=nt.x-V.x,E=nt.y-V.y,F=it*it+ht*ht,st=it*E-ht*P;if(Math.abs(st)>Number.EPSILON){let lt=Math.sqrt(F),rt=Math.sqrt(P*P+E*E),wt=w.x-ht/lt,Et=w.y+it/lt,_t=nt.x-E/rt,Ut=nt.y+P/rt,yt=((_t-wt)*E-(Ut-Et)*P)/(it*E-ht*P);J=wt+it*yt-V.x,X=Et+ht*yt-V.y;let Ct=J*J+X*X;if(Ct<=2)return new Nt(J,X);et=Math.sqrt(Ct/2)}else{let lt=!1;it>Number.EPSILON?P>Number.EPSILON&&(lt=!0):it<-Number.EPSILON?P<-Number.EPSILON&&(lt=!0):Math.sign(ht)===Math.sign(E)&&(lt=!0),lt?(J=-ht,X=it,et=Math.sqrt(F)):(J=it,X=ht,et=Math.sqrt(F/2))}return new Nt(J/et,X/et)}let tt=[];for(let V=0,w=Q.length,nt=w-1,J=V+1;V<w;V++,nt++,J++)nt===w&&(nt=0),J===w&&(J=0),tt[V]=I(Q[V],Q[nt],Q[J]);let B=[],j,ot=tt.concat();for(let V=0,w=v.length;V<w;V++){let nt=v[V];j=[];for(let J=0,X=nt.length,et=X-1,it=J+1;J<X;J++,et++,it++)et===X&&(et=0),it===X&&(it=0),j[J]=I(nt[J],nt[et],nt[it]);B.push(j),ot=ot.concat(j)}for(let V=0;V<d;V++){let w=V/d,nt=m*Math.cos(w*Math.PI/2),J=g*Math.sin(w*Math.PI/2)+_;for(let X=0,et=Q.length;X<et;X++){let it=dt(Q[X],tt[X],J);G(it.x,it.y,-nt)}for(let X=0,et=v.length;X<et;X++){let it=v[X];j=B[X];for(let ht=0,P=it.length;ht<P;ht++){let E=dt(it[ht],j[ht],J);G(E.x,E.y,-nt)}}}let Z=g+_;for(let V=0;V<K;V++){let w=f?dt(y[V],ot[V],Z):y[V];b?(A.copy(L.normals[0]).multiplyScalar(w.x),C.copy(L.binormals[0]).multiplyScalar(w.y),z.copy(x[0]).add(A).add(C),G(z.x,z.y,z.z)):G(w.x,w.y,0)}for(let V=1;V<=h;V++)for(let w=0;w<K;w++){let nt=f?dt(y[w],ot[w],Z):y[w];b?(A.copy(L.normals[V]).multiplyScalar(nt.x),C.copy(L.binormals[V]).multiplyScalar(nt.y),z.copy(x[V]).add(A).add(C),G(z.x,z.y,z.z)):G(nt.x,nt.y,u/h*V)}for(let V=d-1;V>=0;V--){let w=V/d,nt=m*Math.cos(w*Math.PI/2),J=g*Math.sin(w*Math.PI/2)+_;for(let X=0,et=Q.length;X<et;X++){let it=dt(Q[X],tt[X],J);G(it.x,it.y,u+nt)}for(let X=0,et=v.length;X<et;X++){let it=v[X];j=B[X];for(let ht=0,P=it.length;ht<P;ht++){let E=dt(it[ht],j[ht],J);b?G(E.x,E.y+x[h-1].y,x[h-1].x+nt):G(E.x,E.y,u+nt)}}}T(),S();function T(){let V=r.length/3;if(f){let w=0,nt=K*w;for(let J=0;J<ct;J++){let X=k[J];U(X[2]+nt,X[1]+nt,X[0]+nt)}w=h+d*2,nt=K*w;for(let J=0;J<ct;J++){let X=k[J];U(X[0]+nt,X[1]+nt,X[2]+nt)}}else{for(let w=0;w<ct;w++){let nt=k[w];U(nt[2],nt[1],nt[0])}for(let w=0;w<ct;w++){let nt=k[w];U(nt[0]+K*h,nt[1]+K*h,nt[2]+K*h)}}n.addGroup(V,r.length/3-V,0)}function S(){let V=r.length/3,w=0;D(Q,w),w+=Q.length;for(let nt=0,J=v.length;nt<J;nt++){let X=v[nt];D(X,w),w+=X.length}n.addGroup(V,r.length/3-V,1)}function D(V,w){let nt=V.length;for(;--nt>=0;){let J=nt,X=nt-1;X<0&&(X=V.length-1);for(let et=0,it=h+d*2;et<it;et++){let ht=K*et,P=K*(et+1),E=w+J+ht,F=w+X+ht,st=w+X+P,lt=w+J+P;N(E,F,st,lt)}}}function G(V,w,nt){c.push(V),c.push(w),c.push(nt)}function U(V,w,nt){W(V),W(w),W(nt);let J=r.length/3,X=M.generateTopUV(n,r,J-3,J-2,J-1);$(X[0]),$(X[1]),$(X[2])}function N(V,w,nt,J){W(V),W(w),W(J),W(w),W(nt),W(J);let X=r.length/3,et=M.generateSideWallUV(n,r,X-6,X-3,X-2,X-1);$(et[0]),$(et[1]),$(et[3]),$(et[1]),$(et[2]),$(et[3])}function W(V){r.push(c[V*3+0]),r.push(c[V*3+1]),r.push(c[V*3+2])}function $(V){s.push(V.x),s.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $y(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Dh[r.type]().fromJSON(r)),new i(n,t.options)}},Ky={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new Nt(s,o),new Nt(a,c),new Nt(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],d=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Nt(o,1-c),new Nt(l,1-u),new Nt(f,1-g),new Nt(_,1-p)]:[new Nt(a,1-c),new Nt(h,1-u),new Nt(m,1-g),new Nt(d,1-p)]}};function $y(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xn=class i extends yc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},qo=class i extends yc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ne=class i extends Ee{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,f=new R,m=[],g=[],_=[],d=[];for(let p=0;p<=n;p++){let M=[],x=p/n,b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let C=L/e;u.x=-t*Math.cos(r+C*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(r+C*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),d.push(C+b,1-x),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let x=h[p][M+1],b=h[p][M],L=h[p+1][M],C=h[p+1][M+1];(p!==0||o>0)&&m.push(x,b,C),(p!==n-1||c<Math.PI)&&m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var An=class i extends Ee{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let _=g/r*s,d=m/n*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(_),u.y=(t+e*Math.cos(d))*Math.sin(_),u.z=e*Math.sin(d),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let _=(r+1)*m+g-1,d=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,M=(r+1)*m+g;o.push(_,d,M),o.push(d,p,M)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Se=class extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ws=class extends mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ba(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Xs=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oh=class extends Xs{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gu,endingEnd:Gu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wu:s=t,a=2*e-n;break;case Xu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wu:o=t,c=2*n-e;break;case Xu:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,d=_*g,p=-f*d+2*f*_-f*g,M=(1+f)*d+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-m)*d+(1.5+m)*_+.5*g,b=m*d-m*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+M*o[l+L]+x*o[c+L]+b*o[u+L];return s}},Bh=class extends Xs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}},kh=class extends Xs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},gi=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ba(e,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ba(t.times,Array),values:Ba(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qa:e=this.InterpolantFactoryMethodDiscrete;break;case ah:e=this.InterpolantFactoryMethodLinear;break;case Gc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return ah;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&Jy(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Gc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=ah;var jr=class extends gi{constructor(t,e,n){super(t,e,n)}};jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=qa;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;var zh=class extends gi{};zh.prototype.ValueTypeName="color";var Vh=class extends gi{};Vh.prototype.ValueTypeName="number";var Gh=class extends Xs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)Qe.slerpFlat(s,0,o,l-a,o,l,c);return s}},xc=class extends gi{InterpolantFactoryMethodLinear(t){return new Gh(this.times,this.values,this.getValueSize(),t)}};xc.prototype.ValueTypeName="quaternion";xc.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends gi{constructor(t,e,n){super(t,e,n)}};Qr.prototype.ValueTypeName="string";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=qa;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wh=class extends gi{};Wh.prototype.ValueTypeName="vector";var Xh=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},jy=new Xh,qh=class{constructor(t){this.manager=t!==void 0?t:jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};qh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yo=class extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},qs=class extends Yo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vl=new le,Y0=new R,Z0=new R,Mc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Y0.setFromMatrixPosition(t.matrixWorld),e.position.copy(Y0),Z0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Z0),e.updateMatrixWorld(),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var K0=new le,To=new R,El=new R,Yh=class extends Mc{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),To.setFromMatrixPosition(t.matrixWorld),n.position.copy(To),El.copy(n.position),El.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(El),n.updateMatrixWorld(),r.makeTranslation(-To.x,-To.y,-To.z),K0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(K0)}},_i=class extends Yo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zh=class extends Mc{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends Yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Zh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var hu="\\[\\]\\.:\\/",Qy=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",tx="[^"+hu.replace("\\.","")+"]",ex=/((?:WC+[\/:])*)/.source.replace("WC",uu),nx=/(WCOD+)?/.source.replace("WCOD",tx),ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),sx=new RegExp("^"+ex+nx+ix+rx+"$"),ox=["material","materials","bones","map"],Kh=class{constructor(t,e,n){let r=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qy,"")}static parseTrackName(t){let e=sx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);ox.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=Kh;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var bf=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var vf=i=>bf.find(t=>t.id===i)??bf[0];var Ef=["none","float","aim","twohand"],$o=i=>Ef.includes(i);function Sf(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var Sc=(i,t,e)=>i+(t-i)*e,Tf=i=>Math.min(1,Math.max(0,i)),Jo=(i,t)=>Math.max(0,i)**t;function pu(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var Rf=(i,t,e)=>new gn(i,t,e,"ZYX"),Ks=class{constructor(t,e={}){Je(this,"n",t);Je(this,"geo",new Ee);Je(this,"per");Je(this,"radial");Je(this,"closed");Je(this,"sharp");Je(this,"caps");Je(this,"samples");Je(this,"pos");Je(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let r=this.radial+1,s=this.samples*r+(this.caps?2:0);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3);let o=new Float32Array(s*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*r+l)*2]=c/(this.samples-1),o[(c*r+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*r+l,u=h+r;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*r,l=c+1,h=(this.samples-1)*r;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new Ue(this.pos,3)),this.geo.setAttribute("normal",new Ue(this.nor,3)),this.geo.setAttribute("uv",new Ue(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:r,radial:s,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=M=>t[o?(M%n+n)%n:Math.min(n-1,Math.max(0,M))],u=M=>typeof e=="number"?e:e[o?(M%n+n)%n:Math.min(n-1,Math.max(0,M))];for(let M=0;M<a;M++){let x=Math.floor(M/r),b=M%r/r;!o&&x>=n-1&&(x=n-2,b=1);let L=h(x),C=h(x+1);for(let A=0;A<3;A++)if(this.sharp)c[M*3+A]=L[A]+(C[A]-L[A])*b;else{let z=o||x>0?h(x-1)[A]:2*L[A]-C[A],O=o||x+2<n?h(x+2)[A]:2*C[A]-L[A],y=b*b,v=y*b;c[M*3+A]=.5*(2*L[A]+(-z+C[A])*b+(2*z-5*L[A]+4*C[A]-O)*y+(-z+3*L[A]-3*C[A]+O)*v)}l[M]=Math.max(1e-4,Math.abs(u(x)+(u(x+1)-u(x))*b))}let f=new R,m=new R,g=new R,_=new R,d=M=>{let x=o?(M-1+a-1)%(a-1):Math.max(0,M-1),b=o?(M+1)%(a-1):Math.min(a-1,M+1);return f.set(c[b*3]-c[x*3],c[b*3+1]-c[x*3+1],c[b*3+2]-c[x*3+2]),f.lengthSq()<1e-12&&f.set(0,0,1),f.normalize()};d(0),_.set(Math.abs(f.x)<.9?1:0,Math.abs(f.x)<.9?0:1,0),m.crossVectors(f,_).normalize();let p=s+1;for(let M=0;M<a;M++){d(M),m.addScaledVector(f,-m.dot(f)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(f,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(f,m);for(let x=0;x<=s;x++){let b=x/s*Math.PI*2,L=Math.cos(b),C=Math.sin(b),A=L*m.x+C*g.x,z=L*m.y+C*g.y,O=L*m.z+C*g.z,y=(M*p+x)*3;this.nor[y]=A,this.nor[y+1]=z,this.nor[y+2]=O,this.pos[y]=c[M*3]+l[M]*A,this.pos[y+1]=c[M*3+1]+l[M]*z,this.pos[y+2]=c[M*3+2]+l[M]*O}if(this.caps&&(M===0||M===a-1)){let x=(a*p+(M?1:0))*3,b=M?1:-1;this.pos[x]=c[M*3],this.pos[x+1]=c[M*3+1],this.pos[x+2]=c[M*3+2],this.nor[x]=f.x*b,this.nor[x+1]=f.y*b,this.nor[x+2]=f.z*b}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function cn(i,t,e={}){return new Ks(i.length,e).set(i,t).geo}function yi(i,t,e,n=12,r=.35,s={}){let o=new le().makeRotationFromEuler(Rf(...t)),a=[],c=[],l=new R;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+r*Math.sin(3*u)))}return cn(a,c,{closed:!0,per:6,...s})}function er(i,t,e,n,r,s=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<r;u++){let f=u/(r-1),m=s+2*Math.PI*n*f,g=t+(e-t)*f,_=l(f)+(a&&o?a.uniform(-o,o):0),[d,p]=c?c(g):[0,0];h.push([d+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var Rc=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function si(i,t,e,n,r){let s=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);s.push(...l,...h,0,0,i),s.push(...h,...l,0,0,-t)}let a=new Ee;return a.setAttribute("position",new se(s,3)),a.setAttribute("uv",new se(new Array(s.length/3*2).fill(.5),2)),r&&a.applyMatrix4(new le().makeRotationFromEuler(Rf(...r))),a.computeVertexNormals(),a}function mu(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),r.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;s.push(l,l+1,h+1,l,h+1,h)}let o=new Ee;return o.setAttribute("position",new se(n,3)),o.setAttribute("uv",new se(r,2)),o.setIndex(s),o.computeVertexNormals(),o}var Tc=class{constructor(){Je(this,"parts",new Map)}add(t,e,n,r,s){let o=t.index?t:ax(t),a=new le().compose(n?Array.isArray(n)?new R(...n):n:new R,new Qe().setFromEuler(r??new gn),s===void 0?new R(1,1,1):typeof s=="number"?new R(s,s,s):new R(...s)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,r]of this.parts){let s=new Tt(gu(r),n);t.add(s),e.push(s);for(let o of r)o.dispose()}return this.parts.clear(),e}};function ax(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,r)=>r)),t}function gu(i){let t=0,e=0;for(let f of i)t+=f.attributes.position.count,e+=f.index.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=i.some(f=>f.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let f of i){let m=f.attributes.position.count;n.set(f.attributes.position.array,l*3),f.attributes.normal||f.computeVertexNormals(),r.set(f.attributes.normal.array,l*3),f.attributes.uv&&s.set(f.attributes.uv.array,l*2),a&&f.attributes.color&&a.set(f.attributes.color.array,l*3);let g=f.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new Ee;return u.setAttribute("position",new Ue(n,3)),u.setAttribute("normal",new Ue(r,3)),u.setAttribute("uv",new Ue(s,2)),a&&u.setAttribute("color",new Ue(a,3)),u.setIndex(new Ue(c,1)),u.computeBoundingSphere(),u}var wf=new Map;function fu(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function du(i,t,e,n=4,r=1){let s=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let f=Math.floor(l),m=Math.floor(h),g=l-f,_=h-m,d=g*g*(3-2*g),p=_*_*(3-2*_),M=(b,L)=>fu((b%c+c)%c,(L%c+c)%c,r+u),x=Sc(Sc(M(f,m),M(f+1,m),d),Sc(M(f,m+1),M(f+1,m+1),d),p);s+=x*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return s/a}function Af(i,t,e,n=[1,1]){let r=wf.get(i);if(!r){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),r=new Rn(o),r.wrapS=r.wrapT=Zr,wf.set(i,r)}let s=r.clone();return s.repeat.set(...n),s.needsUpdate=!0,s}var Cf=(i,t,e,n,r)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=r,i.data[t*4+3]=255};function ts(i=1,t=[1,1],e=.35,n=1.25){return Af(`noise${i}`,128,r=>{for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=du(o/(16*i),s/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,Sc(e,n,a)/1.25));Cf(r,s*128+o,c,c,c)}},t)}function Pf(i=6,t=.11,e=[1,1]){return Af(`vein${i}:${t}`,128,n=>{let r=[];for(let s=0;s<i;s++)for(let o=0;o<i;o++)r.push([(o+fu(o,s,9))/i,(s+fu(o,s,11))/i]);for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=o/128+(du(o/16,s/16,8,2,5)-.5)*.08,c=s/128+(du(o/16+7,s/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of r)for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){let M=a-g-p,x=c-_-d,b=Math.sqrt(M*M+x*x);b<l?(h=l,l=b):b<h&&(h=b)}let u=(h-l)*i*.5,f=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*f*f);Cf(n,s*128+o,m,m,m)}},e)}var vr=1.13,jo=.66,he=(i,t,e)=>new Vt(i,t,e);function cx(i,t){let e=(s,o=!0)=>(o?i.push(s):t.push(s),s),n=(s,o=1.7)=>s.clone().multiplyScalar(o),r=s=>Math.min(2.4,.55+s*.13);return{bark:(s,o)=>e(new Se({color:n(o,1.5),map:ts(4,[3,2]),roughness:.9,emissive:s.clone().multiplyScalar(.4)})),plain:(s,o=.5)=>e(new Se({color:n(s),roughness:o})),leaf:(s,o)=>e(new Se({color:n(o,1.6),map:ts(1,[2,2],.45),roughness:.45,side:De,emissive:s.clone().multiplyScalar(.6)})),metal:(s,o=.28)=>e(new Se({color:n(s,1.25),metalness:.55,roughness:o+.12})),veins:(s,o,a,c=6,l=.11,h=.1)=>e(new Se({color:n(s,2.4),map:ts(1,[3,2]),emissive:o,emissiveMap:Pf(c,l,[4,2]),emissiveIntensity:r(a),roughness:.6,metalness:h})),lava:()=>e(new Se({color:he(.3,.05,0),emissive:he(1,.22,.015),emissiveMap:ts(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(s,o,a,c=Fn)=>e(new Se({color:o,emissive:s,emissiveMap:ts(1,[2,2],.6),emissiveIntensity:r(a),roughness:.4,side:c})),emissive:(s,o)=>e(new Se({color:s.clone().multiplyScalar(.15),emissive:s,emissiveIntensity:r(o),roughness:.4})),crystal:(s,o)=>e(new Se({color:n(s,1.3),emissive:s,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(s,o=.3)=>e(new Se({color:s,emissive:s.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Se({color:he(.55,.82,1),map:ts(2,[4,1],.7),emissive:he(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var ns=i=>Math.max(8,Math.round(i*.5)),Qo=i=>Math.max(1,Math.round(i*.45)),Ac=i=>i-Math.floor(i);function lx(i,t,e,n,r,s=.09,o=.1){let a=i+n,c=(a%t+t)%t;return r*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-s*c)*(Math.cos(o*c)+s/o*Math.sin(o*c)))}function hx(i,t,e,n=8,r=10,s=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-r)/s))))}function If(i,t,e,n){let r=[];for(let s=0;s<t;s++){let o=new R(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),r.push([o.x,o.y,o.z])}return r}function _u(i,t,e,n,r,s){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*r));return o.push(e),cn(o,o.map((a,c)=>s*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function ux(i,t,e,n,r,s,o,a=.45){return mu(4,10,(c,l)=>{let h=2*c-1,u=.07+r*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-s*l**3,f=t+e*l,m=i+o*l,g=n*Math.max(.03,Jo(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,d=h*g,p=Math.cos(m),M=Math.sin(m);return[_*p-d*M,_*M+d*p,f]})}function fx(i=.14,t=.055){return mu(3,6,(e,n)=>{let r=2*e-1,s=t*(.04+Jo(Math.sin(Math.PI*n**.75),.9));return[r*s,n*i,-Math.abs(r)*s*.45-.18*i*n*n]})}var es=new un;function $s(i,t,e,n,r){es.position.set(e[0],e[1],e[2]),typeof n=="number"?es.scale.setScalar(Math.max(1e-5,n)):es.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),r?es.rotation.set(r[0],r[1],r[2],"ZYX"):es.rotation.set(0,0,0),es.updateMatrix(),i.setMatrixAt(t,es.matrix)}var xu=new xn(1,1),yu=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((r,s)=>{for(let o of n)o.offset.x-=s*e})};function dx(i){let{rng:t,m:e}=i,n=e.bark(he(.045,.028,.014),he(.3,.19,.1)),r=e.plain(he(.1,.3,.05),.55),s=e.leaf(he(.015,.14,.02),he(.1,.34,.045)),o=.022,a=_=>Rc(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(cn([...c,2.6,2.63].map(_=>[...a(_),_]),[...l,.06,.015],{radial:8,per:5}),n);for(let _=0;_<5;_++){let d=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(d),M=Math.sin(d);i.stat(cn([[.03*p,.03*M,.3],[.06*p,.06*M,.17],[.1*p,.1*M,.07],[.14*p,.14*M,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,d,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:d-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},f=[.015,.09,.2,.235,.185,.06],m=[2.42,2.6,2.8,3.02,3.22,3.33];for(let _=0;_<6;_++){let d=2*Math.PI*_/6+t.uniform(-.15,.15),p=f.map((M,x)=>{let b=d+.22*x;return[M*Math.cos(b),M*Math.sin(b),m[x]+t.uniform(-.02,.02)]});i.stat(cn(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let M of[2,4])u(p[M],Math.atan2(p[M][1],p[M][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,d,p,M,x])=>{let b=ns(56),L=er(C=>pu(c,l,_+(d-_)*C)+.018,_,d,p,b,M,.004,t,a);i.stat(cn(L,L.map((C,A)=>x*(1-.55*A/(b-1))),{radial:5,per:3}),r);for(let C=2;C<b-2;C+=Math.max(1,Math.floor((b-4)/Qo(22)))){let A=L[C],z=a(A[2]);u(A,Math.atan2(A[1]-z[1],A[0]-z[0]),t.uniform(.7,1.3))}});let g=i.inst(fx(),s,h.length);return i.anim(_=>{h.forEach((d,p)=>$s(g,p,d.p,d.s,[d.rx+.16*Math.sin(_*.2094+d.ph),d.ry,d.rz+.1*Math.sin(_*.1309+d.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:he(.45,1,.35),hot:he(.7,1,.3),mid:he(.15,.8,.05)}}function px(i){let{rng:t,m:e}=i,n=e.veins(he(.085,.065,.055),he(1,.3,.03),2,7,.06,0);n.roughness=.9;let r=e.lava(),s=e.core(he(1,.36,.04),he(.9,.12,.01),2,De);yu(i,r,.25),yu(i,s,-.18);let o=.014,a=g=>Rc(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(cn(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,d=2.35)=>pu(c,l,_+(d-_)*g);for(let g=0;g<2;g++){let _=ns(60),d=er(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(cn(d,d.map((p,M)=>.012+.003*Math.sin(M*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=ns(60),d=er(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(cn(d,d.map((p,M)=>.0085+.002*Math.sin(M*.7)),{radial:5,per:3}),r)}{let g=er(_=>h(_,.5,2.2)-.001,.5,2.2,-3,ns(50),.8,0,void 0,a);i.stat(cn(g,.0055,{radial:4,per:3}),r)}i.stat(yi(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(yi(.082,[0,0,0],.008,10,0),r,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(ux(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),s);i.stat(yi(.165,[0,0,0],.007,14,0),r,[0,0,2.86]);let u=6,f=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),d=t.uniform(.16,.2);f.push({p:[d*Math.cos(_),d*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(xu,e.emissive(he(1,.45,.05),10),u);return i.anim(g=>{f.forEach((_,d)=>{let p=Ac(g/60+_.ph),M=_.s*Math.min(1,p*6)*(1-.6*p);$s(m,d,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*M,.85*M,7*M])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:he(1,.45,.1),hot:he(1,.7,.15),mid:he(1,.25,.02)}}function mx(i){let{rng:t,m:e}=i,n=e.metal(he(.1,.12,.16),.3),r=e.metal(he(.78,.84,.9),.18),s=e.water(),o=e.crystal(he(.2,.7,1),2.5),a=e.crystal(he(.4,.8,1),1.5);yu(i,s,.3);let c=.006,l=_=>Rc(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(cn(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(yi(.066,[0,0,0],.012,10,0),r,[0,0,2.56]);for(let _=0;_<3;_++){let d=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(cn([[.04*d,.04*p,2.55],[.085*d,.085*p,2.68],[.12*d,.12*p,2.82],[.13*d,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),r)}for(let _=0;_<2;_++)i.stat(cn(er(.05,.4,2.45,7,ns(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),r);{let _=ns(64),d=er(b=>.058+.012*Math.sin(b*20),.45,2.5,3.2,_,1,0,void 0,l),p=d.map((b,L)=>.012+.014*(.5+.5*Math.sin(L*.45))),M=new Ks(_,{radial:6,per:3});M.set(d,p),i.mesh(M.geo,s);let x=p.slice();i.anim(b=>{for(let L=0;L<_;L++)x[L]=p[L]*(1+.6*Math.sin(b*.2618-L*.7));M.set(d,x)})}[.7,1,1.35,1.7,2.05].forEach((_,d)=>{let p=d*2.1;i.stat(si(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,d,p,M,x,b,L,C,A],z)=>{let y=20+z*50,v=z===0?1:-1,q=M<p?-1:1,k=Math.PI/180,Q=Array.from({length:40},(ot,Z)=>{let T=Z/39;return{a:(p+(M-p)*T)*k,b:p*k+q*C*k*T,R:_+(d-_)*T,y:b+.04*Math.sin(T*6),r:.004+x*Jo(Math.sin(Math.PI*T),.8)}}),dt=(ot,Z,T,S)=>[ot*t.uniform(.35,1.4),Z*t.uniform(.8,1.2),-S*T+t.uniform(-1.4,1.4),t.uniform(1,5)],K=Q.map((ot,Z)=>[dt(.07,.35,.9,Z),dt(.035,.7,1.7,Z),dt(.03,.3,1,Z),dt(.015,.6,1.8,Z),dt(.32,.45,.9,Z),dt(.2,.8,1.6,Z),dt(.1,1.3,2.3,Z)]),ct=new Ks(40,{radial:6,per:2}),I=Q.map(()=>[0,0,0]),tt=Q.map(()=>0),B=i.mesh(ct.geo,s,[0,0,3]);B.renderOrder=2;let j=ot=>{let Z=lx(ot,120,1,y,v),T=hx(ot,120,y,12),S=Math.floor((ot+y)/120),D=G=>G[0]*Math.sin(ot*G[1]+G[2]+S*G[3]);Q.forEach((G,U)=>{let N=K[U],W=G.a*(1-T)+G.b*T+Z,$=G.R*(1-T)+L*(1+T*(D(N[0])+D(N[1])))*T;I[U][0]=$*Math.cos(W),I[U][2]=$*Math.sin(W),I[U][1]=G.y*(1-T)+(b+D(N[2])+D(N[3]))*T,tt[U]=G.r*(1+.3*(1-T)*Math.sin(ot*.2618-U*.8))*(1-T)+A*T*Math.max(.3,1+T*(D(N[4])+D(N[5])+D(N[6])))}),ct.set(I,tt)};j(0),i.anim(j)});let f=[];for(let _=0;_<10;_++){let d=t.uniform(0,2*Math.PI),p=[Math.cos(d),0,Math.sin(d)],M=t.uniform(.2,.34),x=t.uniform(.12,.3);f.push({start:[p[0]*M,0,3+p[2]*M],vel:[p[0]*x+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*x+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of f)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:Qo(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(xu,a,f.length+m.length);m.forEach((_,d)=>$s(g,f.length+d,_.p,_.s)),i.anim(_=>{f.forEach((d,p)=>{let M=Ac(_/d.per+d.ph),x=M*.9;$s(g,p,[d.start[0]+d.vel[0]*x,d.start[1]+d.vel[1]*x,d.start[2]+d.vel[2]*x-.9*x*x],d.s*Math.min(1,M*10)*Math.min(1,(1-M)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(si(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let d=2*Math.PI*_/3;i.stat(si(.02,.12,.016,4,[Math.sin(d)*.4,-Math.cos(d)*.4,0]),o,[.045*Math.cos(d),.045*Math.sin(d),.36])}return{z:3,r:.145,glass:he(.3,.75,1),hot:he(.5,.95,1),mid:he(.05,.4,1)}}function gx(i){let{rng:t,m:e}=i,n=e.veins(he(.03,.02,.06),he(.85,.6,1),3,6,.09,.5),r=e.metal(he(.62,.58,.72),.2),s=e.crystal(he(.35,.15,1),3),o=e.emissive(he(.65,.4,1),4),a=e.emissive(he(.6,.3,1),3);i.stat(cn([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(yi(.04,[0,0,0],.007,10,0),r,[0,0,_]);i.stat(cn([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(cn(er(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),r);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,d)=>i.stat(yi(d===0||d===4?.064:.058,[0,0,0],.011,10,0),r,[0,0,_]));let l=yi(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let d=e.emissive(he(.65,.4,1),4),p=d.emissiveIntensity;d.transparent=!0;let M=i.mesh(l,d);i.anim(x=>{let b=Ac(x/60+_/4);M.position.z=.95+1.45*b,M.scale.set(1+.3*b,1+.3*b,1);let L=Math.min(1,b*8)*Math.min(1,(1-b)*3);d.emissiveIntensity=p*L,d.opacity=L})}let h=(_,d,p)=>Tf((Math.sin(_*.9+d)+Math.sin(_*.37+d*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let d=t.uniform(0,6.28),p=[.07*Math.cos(d),.07*Math.sin(d),c[_]],M=[.07*Math.cos(d+.9),.07*Math.sin(d+.9),c[_+1]],x=[(p[0]+M[0])/2,(p[1]+M[1])/2,(p[2]+M[2])/2],b=i.mesh(_u(t,[p[0]-x[0],p[1]-x[1],p[2]-x[2]],[M[0]-x[0],M[1]-x[1],M[2]-x[2]],6,.012,.005),o,x),L=t.uniform(0,6.28);i.anim(C=>{b.scale.setScalar(Math.max(1e-4,h(C,L,.3)))})}for(let _=0;_<3;_++){let d=2*Math.PI*_/3,p=.066;i.stat(_u(t,[p*Math.cos(d),p*Math.sin(d),.95],[p*Math.cos(d+.6),p*Math.sin(d+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let d=new R(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),M=i.mesh(_u(t,[d.x*.16,d.y*.16,d.z*.16],[d.x*p,d.y*p,d.z*p],7,.03,.005),o,[0,0,3]),x=t.uniform(0,6.28);i.anim(b=>{M.rotation.set(Math.floor(b/5+x)*1.7,0,Math.floor(b/4+x)*2.4,"ZYX"),M.scale.setScalar(Math.max(1e-4,h(b,x,.5)))})}for(let _=0;_<3;_++){let d=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],M=[2.5,2.66,2.85,3.08,3.22];i.stat(cn(p.map((x,b)=>[x*Math.cos(d+.3*b),x*Math.sin(d+.3*b),M[b]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),r)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,d,p,M])=>{let x=i.mesh(yi(_,d.map(b=>b*Math.PI/180),p,10),r,[0,0,3]);i.anim(b=>{x.rotation.z=b*M})}),i.stat(si(.58,.06,.03,4),r,[0,0,3.14]);let u=[new R(0,.6,.8),new R(.7,-.3,.65),new R(-.45,.5,.75)],f=[1,-2,3],m=Array.from({length:6},(_,d)=>{let p=u[d%3].clone().normalize(),M=Math.abs(p.z)<.9?new R(0,0,1):new R(1,0,0),x=p.clone().cross(M).normalize(),b=p.clone().cross(x);return{e1:x,e2:b,R:t.uniform(.32,.5),th0:Math.floor(d/3)*Math.PI+t.uniform(-.3,.3),w:f[d%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(si(.11,.11,.035,4),s,m.length);return i.anim(_=>{m.forEach((d,p)=>{let M=d.th0+_*d.w,x=d.R*(1+.12*Math.sin(_*.05236+d.ph));$s(g,p,[x*(d.e1.x*Math.cos(M)+d.e2.x*Math.sin(M)),x*(d.e1.y*Math.cos(M)+d.e2.y*Math.sin(M)),3+x*(d.e1.z*Math.cos(M)+d.e2.z*Math.sin(M))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(si(.1,.3,.04,5),s,[0,0,.32]),{z:3,r:.15,glass:he(.6,.3,1),hot:he(.7,.5,1),mid:he(.4,.1,1),style:"flicker"}}function _x(i){let{rng:t,m:e}=i,n=e.veins(he(.02,.03,.05),he(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let r=e.metal(he(.8,.86,.95),.15),s=e.crystal(he(.25,.65,1),4),o=e.emissive(he(.7,.9,1),14),a=e.emissive(he(.3,.7,1),9);i.stat(cn([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(si(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let M=i.mesh(yi(.058+.006*p,[0,0,0],.006,12,.6),r,[0,0,.655+.42*p]);i.anim(x=>{M.rotation.z=x*(p%2===0?1:-1)*.05236})}let c=p=>{let M=Math.max(0,(p-.7)/.3);return .05+.26*Jo(Math.sin(M*Math.PI/2),1.5)};for(let p=0;p<2;p++){let M=ns(110);i.stat(cn(er(c,.4,3.2,6,M,p*Math.PI),Array.from({length:M},(x,b)=>.0085+.004*Math.sin(b*.55+p)),{radial:5,per:3}),r)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,M,x,b])=>{let L=i.mesh(yi(p,M.map(C=>C*Math.PI/180),x,10),r,[0,0,3]);i.anim(C=>{L.rotation.z=C*b})}),i.stat(si(.62,.05,.032,4),s,[0,0,3.17]);{let p=n.emissiveIntensity,M=a.emissiveIntensity,x=he(.45,.82,1),b=0;i.anim((L,C)=>{b+=(i.charge()-b)*Math.min(1,C*5),n.emissiveIntensity=p*(1+5*b),a.emissiveIntensity=M*(1+2.5*b),r.emissive.copy(x).multiplyScalar(.85*b)})}let l=If(t,Qo(110),.35,.85);for(let p=0;p<Qo(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,M)=>p.map(x=>({rel:x,s:M(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),f=h(If(t,Math.max(Qo(30),8),.4,.9),()=>t.uniform(.02,.045)),m=gu([si(1,1,.14,4),si(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(M,x)=>x)),p))),g=i.inst(xu,o,u.length),_=i.inst(m,o,f.length),d=(p,M,x)=>{M.forEach((b,L)=>{let C=Ac(x/b.per+b.ph),A=(1-C)**1.6;$s(p,L,[b.rel[0]*A,b.rel[1]*A,3+b.rel[2]*A],b.s*Math.min(1,C*8)*(1-C)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{d(g,u,p),d(_,f,p)}),i.stat(si(.08,.31,.05,6),s,[0,0,.33]);for(let p=0;p<3;p++){let M=2*Math.PI*p/3+.4,x=Math.cos(M),b=Math.sin(M);i.stat(cn([[.035*x,.035*b,.52],[.07*x,.07*b,.44],[.11*x,.11*b,.34],[.1*x,.1*b,.24]],[.02,.016,.011,.003],{radial:6}),r)}return{z:3,r:.17,glass:he(.05,.25,1),hot:he(.2,.5,1),mid:he(0,.05,.4)}}var Lf={verdant:dx,ember:px,tide:mx,storm:gx,void:_x},yx={verdant:7,ember:8,tide:9,storm:10,void:11};function nr(i,t){let e=vf(i),n=Lf[e.base??e.id]?e.base??e.id:"verdant",r=new Wt,s=new Wt;s.rotation.x=-Math.PI/2,s.scale.setScalar(jo),s.position.y=vr-3*jo,r.add(s);let o=[],a=[],c=[],l=0,h=new Tc,u={B:s,batch:h,rng:Sf(yx[n]),m:cx(o,a),stat:(A,z,O,y,v)=>h.add(A,z,O,y,v),mesh:(A,z,O)=>{let y=new Tt(A,z);return O&&y.position.set(...O),s.add(y),y},inst:(A,z,O)=>{let y=new Vs(A,z,O);return y.frustumCulled=!1,s.add(y),y},anim:A=>{c.push(A)},charge:()=>l},f=Lf[n](u);h.build(s);let m=new Vt(e.gem),g=e.tint?new Vt(e.tint):null,_=new Se({color:g?f.glass.clone().lerp(m,.6):f.glass,emissive:m,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),d=new Tt(new Ne(f.r*jo,20,14),_);d.position.y=vr+(f.z-3)*jo,d.renderOrder=1,r.add(d);let p=u.m.core(g?f.hot.clone().lerp(m,.7):f.hot,g?f.mid.clone().lerp(m,.5):f.mid,6),M=new Tt(new Ne(f.r*jo*.6,14,10),p);d.add(M);let x=p.emissiveIntensity;if(c.push(A=>{if(f.style==="flicker"){let z=Math.abs(Math.sin(A*.9)*Math.sin(A*.37+1.1));M.scale.setScalar(1+.1*z),p.emissiveIntensity=x*(.55+.45*z)*1.6}else M.scale.setScalar(1+.05*Math.sin(A*.1309))}),o.splice(o.indexOf(p),1),g)for(let A of[...o,...a])A.color.lerp(g,.55),A.emissive.getHex()!==0&&A.emissive.lerp(g,.7);let b=new ei(new $n({map:t,color:m.getHex(),blending:hn,depthWrite:!1,transparent:!0,opacity:.5}));b.scale.setScalar(.45),b.position.y=d.position.y,r.add(b);let L=Math.random()*20,C=(A,z)=>{l=z,L+=A*(1+z*1.5);let O=L*24;for(let y of c)y(O,A)};return C(0,0),{group:r,gem:d,gemMat:_,glow:b,color:m,materials:o,update(A,z,O){C(z,O)}}}var ie=i=>new Vt(i),we=i=>1-Math.abs((i%1+1)%1*2-1),Ve=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),Er=(i,t)=>Math.exp(-(i*i)/(t*t)),Df=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function fn(i,t,e,n,r=!1){let s=[],o=[],a=(h,u)=>e(r?h%i/i:h/i,u/t),c=(h,u,f)=>{let m=(h[0]+u[0]+f[0])/3,g=(h[1]+u[1]+f[1])/3,_=n(r?m/i%1:m/i,g/t);for(let[d,p]of[h,u,f])s.push(...a(d,p)),o.push(_.r,_.g,_.b)};for(let h=0;h<t;h++)for(let u=0;u<i;u++)c([u,h],[u,h+1],[u+1,h+1]),c([u,h],[u+1,h+1],[u+1,h]);let l=new Ee;return l.setAttribute("position",new se(s,3)),l.setAttribute("color",new se(o,3)),l.computeVertexNormals(),l}function Pn(i,t,e,n=1,r=1,s=0,o=1){let a=i.length-1;return fn(t,a,(c,l)=>{let h=Math.min(a-1,Math.floor(l*a)),u=l*a-h,f=i[h][0]+(i[h+1][0]-i[h][0])*u,m=i[h][1]+(i[h+1][1]-i[h][1])*u,g=(s+c*(o-s))*Math.PI*2;return[Math.sin(g)*m*n,f,Math.cos(g)*m*r]},e,s===0&&o===1)}function We(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new R(...i[Math.min(s-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return fn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),f=l*Math.PI*2,m=t(h),[g,_]=c[u],d=i[u];return[d[0]+(Math.cos(f)*g.x+Math.sin(f)*_.x)*m*r[0],d[1]+(Math.cos(f)*g.y+Math.sin(f)*_.y)*m*r[1],d[2]+(Math.cos(f)*g.z+Math.sin(f)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}function Ri(i,t,e=[0,0,0],n=[0,0,0]){let r=new sn(...i).toNonIndexed();r.rotateX(n[0]),r.rotateY(n[1]),r.rotateZ(n[2]),r.translate(...e);let s=r.attributes.position.count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=t.r,o[a*3+1]=t.g,o[a*3+2]=t.b;return r.setAttribute("color",new Ue(o,3)),r}function wn(i,t){let e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=t.r,r[s*3+1]=t.g,r[s*3+2]=t.b;return e.setAttribute("color",new Ue(r,3)),e.computeVertexNormals(),e}function Cc(i){let t=new Ne(1,28,22),e=t.attributes.position,n=t.attributes.uv;for(let r=0;r<e.count;r++){let s=e.getX(r),o=e.getY(r),a=e.getZ(r),c=Math.max(0,a),l=s*i.w,h=o*i.h,u=a*i.d;if(o<0){let f=-o;l*=1-i.jaw*f**1.25,u*=1-.12*f,h*=1+i.chin*f}l*=1+.04*Er(o+.02,.22)*c,o>.2&&(l*=1-.08*(o-.2));for(let f of[-1,1])u-=.009*Er(s-f*.38,.2)*Er(o-.06,.13)*c;u+=i.brow*Er(o-.27,.08)*Er(s,.5)*c,u+=i.nose*Er(s,.11)*c*Df(.2,-.2,o)*Df(-.4,-.27,o),u+=.004*Er(s,.24)*Er(o+.5,.07)*c,a<0&&(u*=1.06),e.setXYZ(r,l,h,u),a>.05?n.setXY(r,.5+s*.5,.5+o*.5):n.setXY(r,.02,.97)}return t.computeVertexNormals(),t}function Pc(i){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),r=(u,f)=>[(.5+u*.5)*512,(.5-f*.5)*512];n.fillStyle=i.skin,n.fillRect(0,0,512,512);let s=(u,f,m,g,_,d)=>{let[p,M]=r(u,f),x=m*512*.5;n.save(),n.translate(p,M),n.scale(1,g/m);let b=n.createRadialGradient(0,0,0,0,0,x);b.addColorStop(0,_.replace("A",String(d))),b.addColorStop(1,_.replace("A","0")),n.fillStyle=b,n.beginPath(),n.arc(0,0,x,0,Math.PI*2),n.fill(),n.restore()};for(let u of[-1,1])s(u*.62,-.18,.22,.3,i.shade,.35);s(0,-.72,.3,.12,i.shade,.3),s(.07,-.12,.05,.2,i.shade,.25);for(let u of[-1,1]){let f=u*.38,m=.06;s(f,m+.04,.26,.12,i.shade,.45);let[g,_]=r(f,m),d=i.eyeW*512*.5,p=i.eyeH*512*.5;if(n.save(),n.translate(g,_),n.scale(u,1),n.beginPath(),n.moveTo(-d,0),n.quadraticCurveTo(-d*.1,-p*1.1,d,-p*.15),n.quadraticCurveTo(d*.2,p*1.05,-d,0),n.closePath(),n.fillStyle=i.glowEyes?"#ffd23a":"#ece6ee",n.fill(),n.save(),n.clip(),n.fillStyle=i.iris,n.beginPath(),n.arc(-d*.1,p*.1,p*1.05,0,Math.PI*2),n.fill(),n.fillStyle="#120c14",n.beginPath(),i.glowEyes?n.ellipse(-d*.1,p*.1,p*.22,p*.8,0,0,Math.PI*2):n.arc(-d*.1,p*.1,p*.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.8)",n.beginPath(),n.arc(-d*.26,-p*.25,p*.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(40,25,35,.6)",n.fillRect(-d,-p*1.3,d*2,p*(.3+i.lid)),n.restore(),n.strokeStyle="#1c1418",n.lineCap="round",n.lineWidth=512*.009,n.beginPath(),n.moveTo(-d*1.02,.02*p),n.quadraticCurveTo(-d*.1,-p*(1.15-i.lid*.6),d*1.08,-p*.3),n.stroke(),n.strokeStyle="rgba(80,55,60,.5)",n.lineWidth=512*.004,n.beginPath(),n.moveTo(-d*.7,p*.55),n.quadraticCurveTo(0,p*1,d*.8,p*.25),n.stroke(),i.wrinkles){n.strokeStyle="rgba(120,90,90,.45)",n.lineWidth=512*.004;for(let M of[-1,0,1])n.beginPath(),n.moveTo(d*1.15,M*p*.4),n.lineTo(d*1.5,M*p*.8-p*.1),n.stroke();n.beginPath(),n.moveTo(-d*.6,p*1.4),n.quadraticCurveTo(0,p*2,d*.7,p*1.2),n.stroke()}n.strokeStyle=i.brow,n.lineWidth=i.browW,n.beginPath(),n.moveTo(-d*1,-p*(2.3-i.browTilt)),n.quadraticCurveTo(d*.15,-p*3.2,d*1.15,-p*(2.6+i.browTilt)),n.stroke(),n.restore()}if(i.wrinkles){n.strokeStyle="rgba(120,90,90,.4)",n.lineWidth=512*.004;for(let u of[.42,.5]){let[f,m]=r(-.25,u),[g,_]=r(.25,u);n.beginPath(),n.moveTo(f,m),n.quadraticCurveTo((f+g)/2,m-6,g,_),n.stroke()}}n.fillStyle="rgba(80,50,55,.5)";for(let u of[-1,1]){let[f,m]=r(u*.06,-.32);n.beginPath(),n.ellipse(f,m,512*.012,512*.006,0,0,Math.PI*2),n.fill()}let[o,a]=r(0,-.52),c=i.lipW*512*.5,l=.05*512*.5;if(i.snarl){n.fillStyle="#2a1416",n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.fill(),n.fillStyle="#e8e0c8",n.fillRect(o-c*.85,a-l*.9,c*1.7,l*.8),n.fillRect(o-c*.7,a+l*.25,c*1.4,l*.6),n.strokeStyle="#2a1416",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(o+u*c*.24,a-l),n.lineTo(o+u*c*.24,a+l),n.stroke();n.strokeStyle=i.lips,n.lineWidth=512*.008,n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.stroke()}else n.fillStyle=i.lips,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a-l*.9,o+c,a),n.quadraticCurveTo(o,a+l*1.2,o-c,a),n.fill(),n.strokeStyle="rgba(40,20,25,.7)",n.lineWidth=512*.005,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a+l*.3,o+c,a),n.stroke();let h=new Rn(e);return h.colorSpace=nn,h.anisotropy=4,h}function Js(){let i=[];return{materials:i,mat:(e,n={})=>{let r=new Se({color:n.vc?16777215:e,vertexColors:!!n.vc,metalness:n.metal??.04,roughness:n.rough??.8,flatShading:n.flat??!0,emissive:n.emissive??(n.vc?1315100:0),transparent:!0,side:n.double?De:Fn});return i.push({mat:r,color:r.color.clone(),emissive:r.emissive.clone()}),r}}}var Bt=(i,t,e,n=[0,0,0])=>{let r=new Tt(i,t);return r.position.set(...n),e.add(r),r},oi=.3,Mu=.58,xx=1.3,wr=1.3;function Ai(i,t,e,n){let r=new Wt;r.position.set(t,e,0),i.add(r);let s=new Wt;s.position.set(-t,-e,0),r.add(s);let o=new Wt;o.position.set(0,n-e,0),r.add(o);let a=new Wt;return a.position.set(-t,-n,0),o.add(a),{hip:r,knee:o,thigh:s,shin:a}}function Sr(i,t,e,n,r,s){let o=new Wt;o.position.set(...t),o.rotation.z=-.68,i.add(o);let a=new Wt;a.rotation.x=.3,o.add(a);let c=nr(r,n);c.group.position.set(0,.24,.02),c.group.scale.setScalar(Mu),a.add(c.group),s&&(s.position.set(0,0,.02),s.scale.multiplyScalar(xx),a.add(s));for(let l of c.materials)e.push({mat:l,color:l.color.clone(),emissive:l.emissive.clone()});return{staffPivot:o,staff:c,crystal:c.gem,crystalMat:c.gemMat,glow:c.glow}}function Uf(i,t,e){let n=new $r;for(let r=0;r<8;r++){let s=Math.PI/2+r*Math.PI/4,o=r%2?t:i;r?n.lineTo(Math.cos(s)*o,Math.sin(s)*o):n.moveTo(Math.cos(s)*o,Math.sin(s)*o)}return n.closePath(),new Gs(n,{depth:e,bevelEnabled:!0,bevelThickness:e*.3,bevelSize:i*.06,bevelSegments:1}).center()}var Nf=(i,t,e)=>{let n=we(i*e);return Math.abs(n-t)<.2||Math.abs(n-(1-t))<.2};function ai(i,t,e,n=i,r=1){let s=new Wt,o=(a,c,l,h=[0,0,0],u=[1,1,1])=>{let f=Bt(wn(a,c),t,s,l);return f.rotation.set(...h),f.scale.set(...u),f};if(e){o(new sn(.03,.085,.07),i,[.04,0,-.005]);for(let a=0;a<4;a++){let c=.03-a*.02,l=.028-a*.001,h=new An(l,.011,4,7,Math.PI*1.25);h.rotateX(Math.PI/2),o(h,n,[.012,c,0],[0,-.35,0])}o(new Mr(.011,.04,2,5),i,[.02,.048,.03],[.2,0,1.2])}else{o(new sn(.06,.07,.028),i,[0,-.035,0]);for(let a=0;a<4;a++)o(new sn(.013,.05-Math.abs(a-1.5)*.007,.016),n,[-.022+a*.0145,-.092+Math.abs(a-1.5)*.003,.006],[.25,0,0]);o(new sn(.014,.04,.016),n,[.034,-.045,.012],[.2,0,-.5])}return s.scale.setScalar(r),s}var Tr={goblin:16726564,witch:12086271,wizard:4827391,knight:16724016};function Rr(i,t,e,n){let r=new Wt;r.name="eyes",r.visible=!1;let s=new rn({color:new Vt(e).lerp(new Vt(16777215),.3),transparent:!0,depthWrite:!1}),o=new $n({map:n,color:e,transparent:!0,opacity:.8,depthWrite:!1});for(let a of t){let c=new Tt(new Ne(.011,8,6),s);c.position.set(...a),c.scale.set(1.6,.75,.5),r.add(c);let l=new ei(o);l.position.set(a[0],a[1],a[2]+.012),l.scale.setScalar(.06),r.add(l)}return i.add(r),r}var Xe={robe:ie(3433416),robeDeep:ie(2575516),cream:ie(15853519),creamDeep:ie(14273968),gold:ie(14989388),goldDeep:ie(11568688),skin:ie(15916495),hair:ie(16052974),hairShade:ie(13618374),leather:ie(7686442),leatherDeep:ie(5583641),boot:ie(2903964)},is={w:.088,h:.122,d:.106,jaw:.42,chin:.06,nose:.022,brow:.008};function Hf(i,t,e){let{materials:n,mat:r}=Js(),s=r(16777215,{vc:!0,double:!0}),o=r(Xe.skin,{rough:.7}),a=r(Xe.gold,{metal:.3,rough:.35,emissive:2760200}),c=i==="ally",l=c?ie(3117168):Xe.robe,h=c?ie(2255442):Xe.robeDeep,u=(K,ct,I,tt)=>Nf(K,ct,I)?Xe.gold:tt,f=new Wt,m=new Wt;f.add(m);let g=[];for(let K of[-1,1]){let ct=Ai(m,K*.09,.95,.5);g.push(ct),Bt(wn(new Ne(.06,7,5),Xe.boot),s,ct.shin,[K*.09,.05,.08]).scale.set(.9,.75,1.6)}Bt(Pn([[1.46,.1],[1.4,.165],[1.24,.18],[1.04,.165],[.7,.21],[.36,.255],[.3,.26],[.24,.266],[.18,.272],[.12,.278],[.04,.29]],36,(K,ct)=>{let I=K<.06||K>.94,tt=Math.floor(ct*10);return tt===9?Xe.cream:tt>=6?u(K,(tt-5.5)/3,12,I?Xe.creamDeep:h):I?Ve(Xe.cream,Xe.creamDeep,.3*ct):Ve(l,h,.3*we(K*12)*ct)},1.1,.8),s,m);let _=fn(48,30,(K,ct)=>{let I=.55+.35*ct**1.3,tt=I+K*(Math.PI*2-2*I),B=.13,j,ot,Z;if(ct<B){let T=ct/B;j=1.58-.15*T**.8,ot=.1+.15*T**.7,Z=.74}else{let T=(ct-B)/(1-B);j=1.43-T*1.3,ot=.25+.14*T**1.2,Z=.74+.16*T}return ot*=1+.05*Math.sin(tt*7)*Math.max(0,ct-B),[Math.sin(tt)*ot*1.1,j,Math.cos(tt)*ot*Z-.03*ct]},(K,ct)=>K<.03||K>.97||ct>.95?Xe.cream:ct>.8?u(K,(ct-.8)/.15,16,h):Ve(l,h,.25+.3*we(K*9)));Bt(_,s,m),Bt(fn(6,4,(K,ct)=>[(K-.5)*(.26-.2*ct),1.56-ct*.3,-.15-.04*Math.cos((K-.5)*3)-.03*ct],(K,ct)=>ct>.85?Xe.cream:Ve(h,l,.3*we(K*2))),s,m),Bt(new be(.035,.035,.014,10).rotateX(Math.PI/2),a,m,[0,1.47,.135]),Bt(new An(.035,.007,4,10),a,m,[0,1.47,.142]);for(let K of[-1,1])Bt(new be(.012,.012,.06,5).rotateZ(Math.PI/2),a,m,[K*.065,1.48,.125]);Bt(Pn([[1.08,.172],[1.02,.17]],16,()=>Xe.leather,1.1,.82),s,m),Bt(new qo(.04,0),a,m,[0,1.05,.145]).scale.set(.9,1.1,.35),Bt(wn(new qo(.02,0),Xe.leatherDeep),s,m,[0,1.05,.158]).scale.set(.9,1.1,.3),Bt(fn(1,6,(K,ct)=>[.03+(K-.5)*.045+.02*Math.sin(ct*3),1.03-ct*.48,.15+.035*ct+.012*Math.sin(ct*6)],(K,ct)=>ct>.9?Xe.gold:Ve(Xe.leather,Xe.leatherDeep,.3*ct)),s,m),Bt(new be(.043,.052,.12,7),o,m,[0,1.53,0]);let p=new Wt;p.position.set(0,1.66,0),m.add(p);let M=r(16777215,{rough:.7,flat:!1});M.map=Pc({skin:"#f2ddcf",shade:"rgba(160,120,115,A)",iris:"#5d7590",eyeW:.2,eyeH:.07,lid:.55,brow:"#f0eee8",browW:15,browTilt:.2,lips:"#b77a72",lipW:.2,wrinkles:!0}),Bt(Cc(is),M,p);let x=(K,ct)=>Ve(Xe.hair,Xe.hairShade,.2+.5*we(K*9)*(.3+.7*ct));Bt(fn(18,3,(K,ct)=>{let I=-Math.PI+K*Math.PI*2,tt=Math.abs(I),B=tt<1?.62-.3*(tt/1):.32-.6*((tt-1)/(Math.PI-1)),j=Math.PI/2-ct*(Math.PI/2-B),ot=1.09;return[Math.sin(I)*Math.cos(j)*is.w*ot,Math.sin(j)*is.h*ot,Math.cos(I)*Math.cos(j)*is.d*ot]},x,!0),s,p),Bt(fn(18,10,(K,ct)=>{let I=Math.PI*.4+K*Math.PI*1.2,tt=.08-ct*(.72+.1*we(K*6+.3)),B=ct<.25?.12+ct*.26:.185+.04*Math.sin(ct*3.1),j=.02*Math.sin(ct*14+I*3)*ct;return[Math.sin(I)*(B+j)*1.05,tt,Math.cos(I)*(B+j)*.8-.02-.05*ct]},x),s,p);for(let K of[-1,1]){let ct=Array.from({length:8},(I,tt)=>{let B=tt/7;return[K*(.095+.05*B+.02*Math.sin(B*9)),.02-B*.5,0+.05*B-.025*Math.sin(B*7)]});Bt(We(ct,I=>.03*(1-.6*I)+.008,5,(I,tt)=>x(tt,I),[1,1,.6]),s,p)}Bt(fn(10,12,(K,ct)=>{let I=K-.5,B=-.02-.06*(1-Math.abs(I)*2)**2-ct*(.56+.06*we(K*3+.5)),j=(.09+.02*Math.sin(Math.PI*Math.min(1,ct*1.6)))*(1-.75*ct**1.6),ot=I*2*j+.008*Math.sin(ct*12+K*4),Z=.065+.04*Math.cos(I*Math.PI)+.085*ct**.8-(ct<.08?.03*Math.abs(I)*2:0);return[ot,B,Z]},(K,ct)=>Ve(Xe.hair,Xe.hairShade,.15+.45*we(K*5)*ct)),s,p);for(let K of[-1,1])Bt(We([[K*.004,-.045,.108],[K*.035,-.055,.106],[K*.06,-.075,.095],[K*.07,-.11,.088]],ct=>.014*(1-.6*ct)+.004,5,()=>Xe.hair),s,p);let b=new Wt;b.position.set(0,.075,-.005),b.rotation.set(-.08,0,-.05),p.add(b),Bt(fn(20,3,(K,ct)=>{let I=K*Math.PI*2,tt=.13+ct*.17;return[Math.sin(I)*tt,.02-.04*ct*ct,Math.cos(I)*tt]},(K,ct)=>Ve(l,h,ct>.85?.4:.2*we(K*5)),!0),s,b),Bt(We([[0,.01,0],[0,.2,-.01],[0,.38,-.04],[-.02,.52,-.09],[-.07,.6,-.16],[-.13,.6,-.21],[-.18,.55,-.23]],K=>.15*(1-K)**1.3+.004,8,(K,ct)=>Ve(l,h,.25*we(ct*4)+.2*K)),s,b),Bt(fn(16,1,(K,ct)=>{let I=K*Math.PI*2,tt=.153-.005*ct;return[Math.sin(I)*tt,.025+ct*.05,Math.cos(I)*tt]},K=>we(K*16)>.5?Xe.gold:Xe.goldDeep,!0),s,b),Bt(Uf(.055,.018,.01),a,b,[0,.08,.15]).rotation.x=-.1;let C=(K,ct,I)=>fn(14,8,(tt,B)=>{let j=tt*Math.PI*2,ot=.06+I*Math.max(0,(B-.25)/.75)**1.3;return[Math.cos(j)*ot,-(B*K),Math.sin(j)*ot*.9+ct*B*B]},(tt,B)=>B>.88?Xe.cream:B>.72?u(tt,(B-.72)/.16,5,h):Ve(l,h,.3*we(tt*3)),!0),A=new Wt;A.position.set(-.22,1.42,0),A.rotation.set(-.42,0,-.2),m.add(A),Bt(C(.58,.05,.13),s,A);let z=ai(Xe.skin,s,!1);z.position.set(0,-.56,.04),z.scale.multiplyScalar(wr);let O=new Wt;O.position.set(.22,1.42,.02),O.rotation.z=oi,m.add(O),Bt(C(.4,0,.065),s,O).rotation.x=-.5,Bt(new be(.03,.033,.12,6),o,O,[0,-.38,.19]).rotation.x=-.5;let{staffPivot:y,staff:v,crystal:q,crystalMat:k,glow:Q}=Sr(O,[0,-.43,.24],n,t,e,ai(Xe.skin,s,!0)),dt=Rr(p,[-1,1].map(K=>[K*.38*is.w,.06*is.h,.9*is.d]),Tr.wizard,t);return{root:f,body:m,head:p,arm:O,staffPivot:y,crystal:q,crystalMat:k,glow:Q,staff:v,height:2,materials:n,eyes:dt,leftArm:A,legs:g}}var de={plate:ie(14077887),plateHi:ie(15262420),plateLo:ie(11117201),plateDark:ie(8156776),white:ie(15789282),whiteLo:ie(14209732),under:ie(4862242),leather:ie(7226406),leatherLo:ie(5189401),sash:ie(7301690),sashLo:ie(5722928),slit:ie(1380879),steel:ie(13225168),grip:ie(4860952),brass:ie(12819016)};function Ff(i,t,e){let{materials:n,mat:r}=Js(),s=r(16777215,{vc:!0,double:!0}),o=r(16777215,{vc:!0,metal:.25,rough:.42,double:!0}),a=i==="ally"?ie(3119724):ie(12726316),c=i==="ally"?ie(2257999):ie(9314077),l=(O,y,v=6)=>Ve(de.plate,we(O*v)>.5?de.plateHi:de.plateLo,.35+.15*y),h=new Wt,u=new Wt;h.add(u);let f=[];for(let O of[-1,1]){let y=O*.105,v=Ai(u,y,.9,.53);f.push(v),Bt(fn(8,4,(q,k)=>{let Q=q*Math.PI*2,dt=-.07+k*.25,K=.06-k*.035,ct=.058*(1-.7*k**1.6);return[y+Math.cos(Q)*ct,Math.max(.005,K+Math.sin(Q)*ct*.75),dt]},(q,k)=>Math.floor(k*4)%2?de.plateLo:de.plate,!0),o,v.shin),Bt(We([[y,.08,-.01],[y,.22,0],[y,.36,0],[y,.5,.005]],q=>.058+.016*Math.sin(q*2.6),8,(q,k)=>l(k,q)),o,v.shin),Bt(wn(new Ne(.065,8,6),de.plateHi),o,v.shin,[y,.53,.025]).scale.set(1,.9,.85),Bt(wn(new On(.05,.03,6).rotateZ(-O*Math.PI/2),de.plateLo),o,v.shin,[y+O*.06,.53,.02]),Bt(We([[y,.56,0],[y*1.02,.72,0],[y*.98,.9,-.005]],q=>.068+.022*q,8,(q,k)=>l(k,q)),o,v.thigh)}Bt(Pn([[1,.19],[.8,.22],[.6,.25],[.5,.26]],16,O=>Ve(de.under,de.leatherLo,.4*we(O*8)),1.1,.85),s,u);for(let O of[!1,!0])Bt(fn(8,10,(y,v)=>{let q=(O?Math.PI:0)+(y-.5)*2.2,k=1.36-v*.76-.02*we(y*4)*v,Q=(v<.45?.2+.03*Math.sin(v*7):.2+.12*(v-.45))+.012;return[Math.sin(q)*Q*1.12,k,Math.cos(q)*Q*.86]},(y,v)=>v>.82&&v<.87||v>.91&&v<.96?a:Ve(de.white,de.whiteLo,.35*we(y*4)*v)),s,u);Bt(Pn([[1.58,.11],[1.53,.2],[1.42,.245],[1.28,.23],[1.14,.2],[1.02,.205]],16,(O,y)=>O<.04||O>.96?de.plateHi:l(O,y,8),1.12,.84),o,u);for(let O=0;O<3;O++)Bt(Pn([[1.02-O*.045,.205+O*.008],[.975-O*.045,.215+O*.008]],14,y=>O%2?de.plateLo:de.plate,1.12,.86),o,u);Bt(Pn([[1.66,.06],[1.62,.075],[1.57,.12]],12,(O,y)=>l(O,y)),o,u),Bt(We(Array.from({length:15},(O,y)=>{let v=y/14*Math.PI*2;return[Math.sin(v)*.235,1.07+.03*Math.cos(v+.6),Math.cos(v)*.19]}),()=>.03,6,(O,y)=>Ve(de.sash,de.sashLo,we(y*3+O*5)*.6),[1,1.4,1]),s,u);for(let O of[0,1])Bt(We([[-.2,1.06,.1],[-.22-O*.02,.95,.12],[-.21-O*.04,.82-O*.04,.12]],y=>.025*(1-.3*y),5,y=>Ve(de.sash,de.sashLo,y),[1.4,1,.5]),s,u);for(let O of[-1,1]){let y=Array.from({length:9},(v,q)=>{let k=q/8,Q=-.9+k*4.6,dt=1.52-.48*k;return[O*Math.sin(Q)*.285,dt+.06*Math.sin(k*Math.PI),Math.cos(Q)*.222]});Bt(We(y,()=>.016,4,v=>Ve(de.leather,de.leatherLo,.4*we(v*4)),[1,1.5,1]),s,u)}Bt(Ri([.06,.06,.02],de.brass,[0,1.46,.235],[0,0,Math.PI/4]),s,u);let m=new Wt;m.position.set(0,1.18,-.24),m.rotation.z=.55,u.add(m),Bt(Ri([.055,.82,.012],de.steel,[0,-.12,0]),o,m),Bt(wn(new On(.039,.07,4).rotateX(Math.PI).rotateY(Math.PI/4),de.steel),o,m,[0,-.565,0]).scale.set(1,1,.22),Bt(Ri([.24,.03,.035],de.brass,[0,.3,0]),s,m),Bt(wn(new be(.018,.018,.16,6),de.grip),s,m,[0,.39,0]),Bt(wn(new Ne(.03,6,4),de.brass),s,m,[0,.48,0]),Bt(Pn([[.32,.02],[-.5,.05],[-.6,.03]],6,()=>de.leatherLo,1,.5),s,m);let g=new Wt;g.position.set(0,1.73,0),u.add(g),Bt(Pn([[.13,0],[.125,.06],[.105,.105],[.045,.122],[.025,.124],[.005,.125],[-.06,.125],[-.125,.12],[-.135,.11]],14,(O,y)=>Math.floor(y*8)===4&&(O<.2||O>.8)?de.slit:O<.025||O>.975?de.plateHi:l(O,y,6),1,1.06),o,g);for(let O=0;O<4;O++)Bt(Ri([.012,.012,.01],de.slit,[.035+O%2*.025,-.05-Math.floor(O/2)*.03,.128],[0,.3,0]),s,g);for(let O of[-1,1])Bt(wn(new be(.014,.014,.01,8).rotateZ(Math.PI/2),de.brass),s,g,[O*.128,-.01,0]);Bt(Ri([.03,.025,.05],de.brass,[0,.13,-.01]),s,g);for(let O=0;O<7;O++){let y=(O-3)/3,v=.42-Math.abs(y)*.08,q=Array.from({length:7},(k,Q)=>{let dt=Q/6,K=dt*2.2;return[y*.03*(1+dt),.14+Math.sin(K)*.14*v/.42,-.01-(1-Math.cos(K))*v*.45+.06*dt]});Bt(We(q,k=>.026*(1-k)**.7+.004,5,(k,Q)=>Ve(a,c,.3*we(Q*2)+.4*k)),s,g)}let _=(O,y)=>{Bt(We([[0,-.02,0],[0,-.14,0],[0,-.26,y*.3]],v=>.056-.006*v,7,(v,q)=>l(q,v)),o,O),Bt(wn(new Ne(.05,7,5),de.plateHi),o,O,[0,-.27,y*.3-.01])};for(let O of[-1,1]){let y=new Wt;y.position.set(O*.27,1.5,0),y.rotation.z=-O*.5,u.add(y),Bt(Pn([[.075,0],[.06,.07],[.02,.12],[-.03,.135],[-.07,.13]],10,(v,q)=>q>.85?de.plateLo:l(v,q,5),1,1),o,y),Bt(Pn([[-.06,.13],[-.1,.12]],10,()=>de.plateLo),o,y),Bt(wn(new be(.035,.04,.02,10).rotateZ(-O*Math.PI/2),de.plateHi),o,y,[O*.125,-.03,0]),Bt(wn(new Ne(.014,6,4),de.brass),s,y,[O*.137,-.03,0])}let d=new Wt;d.position.set(-.26,1.44,0),d.rotation.set(-.3,0,-.08),u.add(d),_(d,.1),Bt(We([[0,-.28,.02],[0,-.42,.05],[0,-.52,.06]],O=>.048+.008*O,7,(O,y)=>l(y,O)),o,d);let p=ai(de.plateHi,o,!1,de.plateLo,1.15);p.position.set(0,-.53,.06),p.scale.multiplyScalar(wr);let M=new Wt;M.position.set(.26,1.44,.02),M.rotation.z=oi,u.add(M),Bt(We([[0,-.02,0],[0,-.12,0],[0,-.22,.04]],O=>.056-.006*O,7,(O,y)=>l(y,O)),o,M),Bt(wn(new Ne(.05,7,5),de.plateHi),o,M,[0,-.24,.05]),Bt(We([[0,-.25,.07],[0,-.33,.15],[0,-.39,.21]],O=>.045+.01*O,7,(O,y)=>l(y,O)),o,M);let{staffPivot:x,staff:b,crystal:L,crystalMat:C,glow:A}=Sr(M,[0,-.43,.25],n,t,e,ai(de.plateHi,o,!0,de.plateLo,1.15)),z=Rr(g,[[-.035,.016,.128],[.035,.016,.128]],Tr.knight,t);return{root:h,body:u,head:g,arm:M,staffPivot:x,crystal:L,crystalMat:C,glow:A,staff:b,height:2,materials:n,eyes:z,leftArm:d,legs:f}}var Te={skin:ie(8688447),skinLo:ie(6714670),skinHi:ie(10136146),hair:ie(2892832),hairHi:ie(4536623),red:ie(11744555),redLo:ie(8528668),leather:ie(8015404),leatherLo:ie(5583897),wrap:ie(11045474),wrapLo:ie(8217925),shorts:ie(3814191),shortsLo:ie(2695967),brass:ie(12161605),nail:ie(3947042),ear:ie(10709594)},Ci={w:.096,h:.112,d:.106,jaw:.22,chin:.02,nose:.036,brow:.016};function Of(i,t,e){let{materials:n,mat:r}=Js(),s=r(16777215,{vc:!0,double:!0}),o=r(Te.skin,{rough:.75}),a=i==="ally"?ie(2920330):Te.red,c=i==="ally"?ie(2058598):Te.redLo,l=(y,v,q=5)=>Ve(Te.skin,we(y*q)>.5?Te.skinHi:Te.skinLo,.35+.1*v),h=new Wt,u=new Wt;h.add(u);let f=[];for(let y of[-1,1]){let v=y*.095,q=Ai(u,v,.82,.44);f.push(q),Bt(fn(7,4,(k,Q)=>{let dt=k*Math.PI*2,K=-.06+Q*.23,ct=.05*(1-.35*Q)*(Q>.75?1-(Q-.75)*1.6:1);return[v+y*.012*Q+Math.cos(dt)*ct,Math.max(.004,.035+Math.sin(dt)*ct*.55-.01*Q),K]},(k,Q)=>l(k,Q),!0),s,q.shin);for(let k=0;k<3;k++)Bt(wn(new Ne(.016,5,4),Te.skinLo),s,q.shin,[v+y*.012+(k-1)*.022,.016,.165-Math.abs(k-1)*.01]);Bt(We([[v,.05,-.01],[v,.3,-.005],[v*1.03,.47,.01]],k=>.04+.014*k+.008*Math.sin(k*5),7,(k,Q)=>l(Q,k)),s,q.shin),Bt(We([[v*1.03,.41,.01],[v*1.05,.65,0],[v,.82,-.005]],k=>.054+.008*k+.006*Math.sin(k*4),7,(k,Q)=>l(Q,k)),s,q.thigh),Bt(We([[v,.08,-.01],[v,.2,-.008],[v,.32,-.004],[v*1.02,.44,.005]],k=>.048+.008*k,7,(k,Q)=>we(k*6+Q*.5)>.5?Te.wrap:Te.wrapLo),s,q.shin)}Bt(Pn([[.96,.17],[.86,.19],[.74,.21],[.66,.2]],14,(y,v)=>Ve(Te.shorts,Te.shortsLo,.5*we(y*6)*v),1.08,.82),s,u),Bt(Pn([[1,.175],[.94,.178]],14,y=>we(y*7)>.85?Te.leatherLo:Te.leather,1.08,.84),s,u),Bt(Ri([.06,.05,.02],Te.brass,[0,.97,.15]),s,u),Bt(Ri([.035,.028,.024],Te.leatherLo,[0,.97,.152]),s,u);for(let y of[!1,!0])Bt(fn(6,6,(v,q)=>{let k=(y?Math.PI:0)+(v-.5)*.9,Q=.19+.06*q,dt=.42+.1*we(v*3.5+.2)+.04*Math.sin(v*17);return[Math.sin(k)*Q*1.08,.96-q*dt,Math.cos(k)*Q*.86+(y?-.01:.01)]},(v,q)=>Ve(a,c,.25+.35*we(v*3)*q)),s,u);Bt(Pn([[1.36,.075],[1.32,.155],[1.24,.18],[1.13,.155],[1.02,.14],[.94,.152]],14,(y,v)=>Math.min(y,1-y)<.12&&v>.4?we(v*6)>.5?Te.skinHi:Te.skinLo:l(y,v,7),1.1,.74),s,u);for(let y of[-1,1]){let v=Array.from({length:9},(q,k)=>{let Q=k/8,dt=-.9+Q*4.4;return[y*Math.sin(dt)*.212,1.33-.36*Q+.04*Math.sin(Q*Math.PI),Math.cos(dt)*.145]});Bt(We(v,()=>.014,4,q=>Ve(Te.leather,Te.leatherLo,.4*we(q*4)),[1,2,1]),s,u)}Bt(Ri([.05,.05,.02],Te.brass,[0,1.27,.15],[0,0,Math.PI/4]),s,u);let m=new Wt;m.position.set(-.2,1.31,0),m.rotation.z=.55,m.scale.setScalar(.8),u.add(m),Bt(Pn([[.06,0],[.045,.06],[0,.1],[-.05,.11],[-.08,.1]],9,(y,v)=>v>.8||we(y*9)>.8?Te.leatherLo:Te.leather,1,1.1),s,m),Bt(We(Array.from({length:11},(y,v)=>{let q=v/10*Math.PI*2;return[Math.sin(q)*.088,1.375+.02*Math.cos(q),Math.cos(q)*.08]}),()=>.03,7,(y,v)=>Ve(a,c,.5*we(v*2+y*6))),s,u),Bt(fn(8,5,(y,v)=>{let q=Math.PI+(y-.5)*(2.4-1.2*v),k=.13-.02*v;return[Math.sin(q)*k*1.1,1.42-v*.2+.03*Math.cos((y-.5)*6),Math.cos(q)*k-.04*v]},(y,v)=>Ve(a,c,.2+.4*we(y*3)*(1-v))),s,u);for(let y of[0,1])Bt(We([[-.04+y*.05,1.36,-.1],[-.07+y*.03,1.22,-.15],[-.09+y*.05,1.08,-.16]],v=>.035*(1-.3*v),5,v=>Ve(a,c,v),[1.4,1,.45]),s,u);Bt(new be(.04,.05,.1,7),o,u,[0,1.4,0]);let g=new Wt;g.position.set(0,1.51,.01),u.add(g);let _=r(16777215,{rough:.75,flat:!1});_.map=Pc({skin:"#84933f",shade:"rgba(60,72,24,A)",iris:"#d2401c",eyeW:.2,eyeH:.075,lid:.2,brow:"#2a221c",browW:22,browTilt:1,lips:"#4e3a22",lipW:.34,snarl:!0,glowEyes:!0}),Bt(Cc(Ci),_,g);for(let y of[-1,1]){let v=[[y*.075,0,-.01],[y*.14,.03,-.03],[y*.21,.07,-.05],[y*.27,.105,-.07]];Bt(We(v,q=>.035*(1-q)**.9+.002,6,(q,k)=>l(k,q,3),[1,1,.35]),s,g),Bt(We(v.map(([q,k,Q])=>[q*.98,k,Q+.008]).slice(0,3),q=>.02*(1-q)+.002,5,()=>Te.ear,[1,1,.3]),s,g)}Bt(fn(16,3,(y,v)=>{let q=-Math.PI+y*Math.PI*2,k=Math.abs(q),Q=k<.9?.55:.55-.65*((k-.9)/(Math.PI-.9)),dt=Math.PI/2-v*(Math.PI/2-Q),K=1.08+.03*we(y*8);return[Math.sin(q)*Math.cos(dt)*Ci.w*K,Math.sin(dt)*Ci.h*K,Math.cos(q)*Math.cos(dt)*Ci.d*K]},(y,v)=>Ve(Te.hair,Te.hairHi,.4*we(y*8+v)),!0),s,g);for(let y=0;y<13;y++){let v=-Math.PI+y/13*Math.PI*2+.2*Math.sin(y*7.3),q=.55+.5*(y*.37%1),k=new R(Math.sin(v)*Math.cos(q),Math.sin(q),Math.cos(v)*Math.cos(q)),Q=new R(k.x*Ci.w,k.y*Ci.h,k.z*Ci.d);Bt(wn(new On(.022,.07+.03*(y*.61%1),4),y%3?Te.hair:Te.hairHi),s,g,[Q.x,Q.y,Q.z]).quaternion.setFromUnitVectors(new R(0,1,0),k.add(new R(0,0,-.5)).normalize())}let d=(y,v,q)=>Bt(We([v,[(v[0]+q[0])/2,(v[1]+q[1])/2,(v[2]+q[2])/2],q],k=>.042-.006*k,7,(k,Q)=>we(k*4+Q*.4)>.5?Te.leather:Te.leatherLo),s,y),p=new Wt;p.position.set(-.2,1.3,0),p.rotation.set(-.35,0,-.15),u.add(p),Bt(We([[0,0,0],[0,-.14,0],[0,-.26,.02],[0,-.4,.05],[0,-.5,.06]],y=>.042-.012*y+.006*Math.sin(y*6),7,(y,v)=>l(v,y)),s,p),d(p,[0,-.32,.04],[0,-.48,.06]);let M=ai(Te.leather,s,!1,Te.skin,1.05);M.position.set(0,-.5,.065),M.scale.multiplyScalar(wr);let x=new Wt;x.position.set(.2,1.3,.02),x.rotation.z=oi,u.add(x),Bt(We([[0,0,0],[0,-.12,0],[0,-.22,.04],[0,-.3,.12],[0,-.38,.2]],y=>.042-.012*y,7,(y,v)=>l(v,y)),s,x),d(x,[0,-.28,.1],[0,-.38,.19]);let{staffPivot:b,staff:L,crystal:C,crystalMat:A,glow:z}=Sr(x,[0,-.42,.23],n,t,e,ai(Te.leather,s,!0,Te.skin,1.05)),O=Rr(g,[-1,1].map(y=>[y*.38*Ci.w,.06*Ci.h,.9*Ci.d]),Tr.goblin,t);return{root:h,body:u,head:g,arm:x,staffPivot:b,crystal:C,crystalMat:A,glow:z,staff:L,height:1.75,materials:n,eyes:O,leftArm:p,legs:f}}var Mn=i=>new Vt(i),tn={robe:Mn(8017597),robeDeep:Mn(6045590),trim:Mn(11242982),dress:Mn(3484996),dressHi:Mn(4931936),lining:Mn(6969968),skin:Mn(15654104),hair:Mn(13615844),hairDark:Mn(10194102),hat:Mn(7097004),hatBand:Mn(10256598),boot:Mn(3880006),belt:Mn(4207692),moon:Mn(15787712),lips:Mn(5911888),eye:Mn(1709088)};function ni(i,t,e,n,r=!1){let s=[],o=[],a=(u,f)=>e(r?u%i/i:u/i,f/t),c=(u,f)=>n(r?(u%i+i)%i/i:u/i,f/t),l=(u,f,m)=>{let g=c((u[0]+f[0]+m[0])/3,(u[1]+f[1]+m[1])/3);for(let[_,d]of[u,f,m])s.push(...a(_,d)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let f=0;f<i;f++)l([f,u],[f,u+1],[f+1,u+1]),l([f,u],[f+1,u+1],[f+1,u]);let h=new Ee;return h.setAttribute("position",new se(s,3)),h.setAttribute("color",new se(o,3)),h.computeVertexNormals(),h}function Ic(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new R(...i[Math.min(s-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return ni(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),f=l*Math.PI*2,m=t(h),[g,_]=c[u],d=i[u];return[d[0]+(Math.cos(f)*g.x+Math.sin(f)*_.x)*m*r[0],d[1]+(Math.cos(f)*g.y+Math.sin(f)*_.y)*m*r[1],d[2]+(Math.cos(f)*g.z+Math.sin(f)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}var ci=i=>1-Math.abs((i%1+1)%1*2-1),ir=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),rr={w:.087,h:.126,d:.108},Pi=(i,t)=>Math.exp(-(i*i)/(t*t)),Bf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function Mx(){let i=new Ne(1,28,22),t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++){let r=t.getX(n),s=t.getY(n),o=t.getZ(n),a=Math.max(0,o),c=r*rr.w,l=s*rr.h,h=o*rr.d;if(s<0){let f=-s;c*=1-.55*f**1.25,h*=1-.12*f,l*=1+.08*f}c*=1+.04*Pi(s+.02,.22)*a,s>.2&&(c*=1-.1*(s-.2));for(let f of[-1,1])h-=.008*Pi(r-f*.38,.2)*Pi(s-.06,.13)*a;h+=.006*Pi(s-.3,.07)*Pi(r,.5)*a;let u=Pi(r,.1)*a*Bf(.2,-.2,s)*Bf(-.38,-.26,s);h+=.017*u,h+=.005*Pi(r,.24)*Pi(s+.5,.07)*a,h-=.004*Pi(r,.3)*Pi(s+.38,.05)*a,o<0&&(h*=1.06),t.setXYZ(n,c,l,h),o>.05?e.setXY(n,.5+r*.5,.5+s*.5):e.setXY(n,.02,.97)}return i.computeVertexNormals(),i}function bx(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=(h,u)=>[(.5+h*.5)*512,(.5-u*.5)*512];e.fillStyle="#e9d7d3",e.fillRect(0,0,512,512);let r=(h,u,f,m,g,_)=>{let[d,p]=n(h,u),M=f*512*.5;e.save(),e.translate(d,p),e.scale(1,m/f);let x=e.createRadialGradient(0,0,0,0,0,M);x.addColorStop(0,g.replace("A",String(_))),x.addColorStop(1,g.replace("A","0")),e.fillStyle=x,e.beginPath(),e.arc(0,0,M,0,Math.PI*2),e.fill(),e.restore()};for(let h of[-1,1])r(h*.62,-.18,.22,.3,"rgba(150,110,130,A)",.28),r(h*.42,-.2,.16,.1,"rgba(220,140,150,A)",.22);r(0,-.72,.3,.12,"rgba(140,100,120,A)",.25);for(let h of[-1,1]){let u=h*.38,f=.06;r(u,f+.06,.28,.12,"rgba(120,85,140,A)",.55);let[m,g]=n(u,f),_=.21*512*.5,d=.082*512*.5;e.save(),e.translate(m,g),e.scale(h,1),e.beginPath(),e.moveTo(-_,0),e.quadraticCurveTo(-_*.1,-d*1.1,_,-d*.15),e.quadraticCurveTo(_*.2,d*1.05,-_,0),e.closePath(),e.fillStyle="#efe9f2",e.fill(),e.save(),e.clip(),e.fillStyle="#4a3a5c",e.beginPath(),e.arc(-_*.12,d*.12,d*1.05,0,Math.PI*2),e.fill(),e.fillStyle="#1a1220",e.beginPath(),e.arc(-_*.12,d*.12,d*.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(-_*.28,-d*.25,d*.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,40,70,.55)",e.fillRect(-_,-d*1.2,_*2,d*.55),e.restore(),e.strokeStyle="#1c1420",e.lineCap="round",e.lineWidth=512*.01,e.beginPath(),e.moveTo(-_*1.02,.02*d),e.quadraticCurveTo(-_*.1,-d*1.15,_*1.12,-d*.35),e.stroke(),e.lineWidth=512*.006;for(let p=0;p<4;p++){let M=.55+p*.15;e.beginPath(),e.moveTo(_*(M*2-1),-d*(.95-p*.15)),e.lineTo(_*(M*2-1)+_*.18,-d*(1.35-p*.12)),e.stroke()}e.strokeStyle="rgba(90,60,90,.55)",e.lineWidth=512*.004,e.beginPath(),e.moveTo(-_*.9,-d*.9),e.quadraticCurveTo(0,-d*2,_*.95,-d*1),e.stroke(),e.strokeStyle="rgba(90,60,90,.4)",e.beginPath(),e.moveTo(-_*.6,d*.55),e.quadraticCurveTo(_*.1,d*1.05,_*.85,d*.2),e.stroke(),e.strokeStyle="#4a3a55",e.lineWidth=512*.011,e.beginPath(),e.moveTo(-_*.95,-d*2.7),e.quadraticCurveTo(_*.2,-d*3.4,_*1.15,-d*2.6),e.stroke(),e.restore()}r(.07,-.12,.05,.2,"rgba(160,120,135,A)",.22),e.fillStyle="rgba(110,70,90,.55)";for(let h of[-1,1]){let[u,f]=n(h*.06,-.31);e.beginPath(),e.ellipse(u,f,512*.012,512*.006,0,0,Math.PI*2),e.fill()}let[s,o]=n(0,-.5),a=.25*512*.5,c=.065*512*.5;e.fillStyle="#5b2f50",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s-a*.5,o-c*1.2,s-a*.1,o-c*.9),e.lineTo(s,o-c*.6),e.lineTo(s+a*.1,o-c*.9),e.quadraticCurveTo(s+a*.5,o-c*1.2,s+a,o),e.closePath(),e.fill(),e.fillStyle="#7b4468",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*2,s+a,o),e.closePath(),e.fill(),e.strokeStyle="#3a1c33",e.lineWidth=512*.006,e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*.35,s+a,o),e.stroke(),r(.03,-.535,.05,.02,"rgba(255,220,235,A)",.4);let l=new Rn(t);return l.colorSpace=nn,l.anisotropy=4,l}function kf(i,t,e){let n=[],r=(T,S={})=>{let D=new Se({color:S.vc?16777215:T,vertexColors:!!S.vc,metalness:S.metal??.04,roughness:S.rough??.82,flatShading:!0,emissive:S.emissive??(S.vc?1709092:0),transparent:!0,side:S.double?De:Fn});return n.push({mat:D,color:D.color.clone(),emissive:D.emissive.clone()}),D},s=r(16777215,{vc:!0,double:!0}),o=r(tn.skin,{rough:.7}),a=r(tn.eye,{rough:.5}),c=r(tn.moon,{metal:.35,rough:.35,emissive:2761744}),l=(T,S,D,G=[0,0,0])=>{let U=new Tt(T,S);return U.position.set(...G),D.add(U),U},h=i==="ally"?Mn(3840636):tn.robe,u=i==="ally"?Mn(2781272):tn.robeDeep,f=i==="ally"?Mn(7655598):tn.trim,m=new Wt,g=new Wt;m.add(g);let _=[];for(let T of[-1,1]){let S=T*.075,D=Ai(g,S,.96,.56);_.push(D),l(Ic([[S,.98,0],[S*1.04,.76,.008],[S*1.05,.54,.01]],U=>.068-.014*U,7,()=>tn.boot),s,D.thigh),l(Ic([[S*1.05,.58,.01],[S*1.1,.3,0],[S*1.1,.13,-.01]],U=>.054-.016*U,7,()=>tn.boot),s,D.shin);let G=ni(6,2,(U,N)=>{let W=U*Math.PI*2,$=N,V=-.05+$*.2,w=.13-$*.11,nt=.045*(1-.65*$*$);return[S+Math.cos(W)*nt,w+Math.sin(W)*nt*.55,V]},()=>tn.boot,!0);l(G,s,D.shin),l(new be(.012,.006,.12,5),a,D.shin,[S,.06,-.045])}let d=ni(14,8,(T,S)=>{let D=S<.25?.02:.02+(S-.25)*.55,G=D+T*(Math.PI*2-2*D),U=1.1-S*.82-(T>.35&&T<.65?0:.04*S)+.03*ci(T*7)*S,N=.165+.15*S**1.2;return[Math.sin(G)*N,U,Math.cos(G)*N*.82]},(T,S)=>ir(tn.dress,tn.dressHi,.6*ci(T*7)*S));l(d,s,g),l(ni(4,4,(T,S)=>{let D=-.35+T*.7,G=.15+.09*S;return[Math.sin(D)*G,.86-S*.6,Math.cos(D)*G*.62-.02]},()=>tn.lining),s,g);let p=ni(10,5,(T,S)=>{let D=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.1],[1.67,.052]],G=S*(D.length-1),U=Math.min(D.length-2,Math.floor(G)),N=G-U,W=D[U][0]+(D[U+1][0]-D[U][0])*N,$=D[U][1]+(D[U+1][1]-D[U][1])*N,V=T*Math.PI*2;return[Math.sin(V)*$*1.08,W,Math.cos(V)*$*.78]},(T,S)=>ir(tn.dress,tn.dressHi,S>.8?.5:.15*ci(T*4)),!0);l(p,s,g),l(ni(14,1,(T,S)=>{let D=T*Math.PI*2,G=.172+.006*S;return[Math.sin(D)*G*1.08,1.04+S*.11,Math.cos(D)*G*.82]},()=>tn.belt,!0),s,g);let M=(T,S)=>{let D=new $r;D.absarc(0,0,T,Math.PI*.18,Math.PI*1.82,!1),D.absarc(T*.38,0,T*.78,Math.PI*1.7,Math.PI*.3,!0);let G=new Gs(D,{depth:S,bevelEnabled:!0,bevelThickness:S*.4,bevelSize:T*.08,bevelSegments:1,curveSegments:6});return G.center(),G};l(new An(.05,.012,4,10),c,g,[0,1.095,.152]).scale.set(1,.85,.6),l(M(.042,.012),c,g,[0,1.095,.162]).rotation.z=.5;let b=9,L=ni(28,14,(T,S)=>{let D=.36+.48*S**1.2,G=D+T*(Math.PI*2-2*D),U=.07+.16*ci(T*b+.5)+(T<.06||T>.94?.08:0),N=.14,W,$,V;if(S<N){let w=S/N;W=1.61-.14*w**.8,$=.1+.155*w**.7,V=.72}else{let w=(S-N)/(1-N);W=1.47-w*(1.47-U),$=.255+.25*w**1.3,V=.72+.22*w}return $*=1+.07*Math.sin(G*8)*Math.max(0,S-N),[Math.sin(G)*$*(1.12-.1*S),W,Math.cos(G)*$*V-.03*S]},(T,S)=>{let D=S>.89||T<.03||T>.97,G=ir(h,u,.35*ci(T*8+.25)+(T>.3&&T<.7?.15:0));return D?f:G});l(L,s,g),l(ni(10,2,(T,S)=>{let D=Math.PI*.55+T*Math.PI*.9,G=.105+.045*S;return[Math.sin(D)*G*1.1,1.58+S*.13,Math.cos(D)*G*.85]},(T,S)=>ir(h,f,S>.6?1:0)),s,g),l(new be(.045,.055,.12,7),o,g,[0,1.63,0]);let C=new Wt;C.position.set(0,1.76,0),g.add(C);let A=r(16777215,{rough:.7});A.map=bx(),A.flatShading=!1,l(Mx(),A,C),l(ni(20,4,(T,S)=>{let D=-Math.PI+T*Math.PI*2,G=Math.abs(D),U=G<.08?.72:G<.95?.6-.42*((G-.08)/.87)**.8:.18-.5*((G-.95)/(Math.PI-.95)),N=Math.PI/2-S*(Math.PI/2-U),W=1.085+.015*Math.sin(D*9);return[Math.sin(D)*Math.cos(N)*rr.w*W,Math.sin(N)*rr.h*W+.004,Math.cos(D)*Math.cos(N)*rr.d*W]},(T,S)=>ir(tn.hair,tn.hairDark,.15+.4*ci(T*14)*S),!0),s,C);let z=(T,S)=>ir(tn.hair,tn.hairDark,.25+.5*ci(T*9)*(.4+.6*S));l(ni(18,10,(T,S)=>{let D=Math.PI*.42+T*Math.PI*1.16,G=.1-S*(.95+.14*ci(T*6+.3)),U=S<.25?.13+S*.28:.2+.05*Math.sin(S*3.1),N=.022*Math.sin(S*15+D*3)*S;return[Math.sin(D)*(U+N)*1.05,G,Math.cos(D)*(U+N)*.85-.02-.05*S]},z),s,C);for(let T of[-1,1])for(let S of[0,1]){let D=T*(.098+S*.03),G=.035-S*.05,U=Array.from({length:8},(N,W)=>{let $=W/7;return[D+T*(.06*$+.025*Math.sin($*9+S)),.04-$*(.55+.08*S),G+.06*$-.03*Math.sin($*7)]});l(Ic(U,N=>.035*(1-.6*N)+.008,5,(N,W)=>z(W,N),[1,1,.55]),s,C)}let O=new Wt;O.position.set(0,.075,-.005),O.rotation.set(-.12,0,.07),C.add(O),l(ni(20,3,(T,S)=>{let D=T*Math.PI*2,G=.14+S*.24;return[Math.sin(D)*G,.02-.075*S*S+.012*Math.sin(D*3)*S,Math.cos(D)*G]},(T,S)=>ir(tn.hat,u,S>.9?.25:.2*ci(T*5)),!0),s,O),l(Ic([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],T=>.165*(1-T)**1.35+.004,8,(T,S)=>ir(tn.hat,u,.25*ci(S*4)+.15*T)),s,O),l(ni(16,1,(T,S)=>{let D=T*Math.PI*2,G=.168-.006*S;return[Math.sin(D)*G,.025+S*.06,Math.cos(D)*G]},()=>tn.hatBand,!0),s,O);let v=l(M(.04,.012),c,O,[0,.055,.172]);v.rotation.z=.5;let q=(T,S,D=.15)=>ni(10,6,(G,U)=>{let N=G*Math.PI*2,W=.065+D*Math.max(0,(U-.3)/.7)**1.4,$=U<.99?0:.07*ci(G*4),V=-(U*T)-$,w=S*U*U;return[Math.cos(N)*W,V,Math.sin(N)*W*.9+w]},(G,U)=>U>.85?f:ir(h,u,.3*ci(G*3)),!0),k=new Wt;k.position.set(-.23,1.47,0),k.rotation.set(-.42,0,-.2),g.add(k),l(q(.6,.06),s,k);let Q=ai(tn.skin,s,!1);Q.position.set(0,-.58,.05),Q.scale.multiplyScalar(wr);let dt=new Wt;dt.position.set(.23,1.47,.02),dt.rotation.z=oi,g.add(dt);let K=l(q(.4,0,.07),s,dt);K.rotation.x=-.5;let ct=l(new be(.03,.034,.12,6),o,dt,[0,-.38,.19]);ct.rotation.x=-.5;let{staffPivot:I,staff:tt,crystal:B,crystalMat:j,glow:ot}=Sr(dt,[0,-.43,.24],n,t,e,ai(tn.skin,s,!0)),Z=Rr(C,[-1,1].map(T=>[T*.38*rr.w,.06*rr.h,.9*rr.d]),Tr.witch,t);return{root:m,body:g,head:C,arm:dt,staffPivot:I,crystal:B,crystalMat:j,glow:ot,staff:tt,height:2,materials:n,eyes:Z,leftArm:k,legs:_}}var vx={me:4020950,opp:12728908,ally:3121012};function zf(i,t,e,n){if(i==="witch")return kf(t,e,n);if(i==="wizard")return Hf(t,e,n);if(i==="knight")return Ff(t,e,n);if(i==="goblin")return Of(t,e,n);i=i;let r=[],s=(k,Q={})=>{let dt=new Se({color:k,metalness:Q.metal??.05,roughness:Q.rough??.8,flatShading:!0,emissive:Q.emissive??0,emissiveIntensity:Q.ei??1,transparent:!0});return r.push({mat:dt,color:dt.color.clone(),emissive:dt.emissive.clone()}),dt},o=(k,Q,dt=0,K=0,ct=0)=>{let I=new Tt(k,Q);return I.position.set(dt,K,ct),I},c=i==="goblin"||i==="kid"?.78:1,l=s(i==="goblin"?7323466:15778970),h=s(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:vx[t],f=s(u),m=s(16766073,{metal:.2,rough:.4}),g=s(12897496,{metal:.3,rough:.45}),_=new Wt,d=new Wt;_.add(d);let p=[];if(i==="wizard")d.add(o(new be(.27,.46,1,9),f,0,.5,0)),d.add(o(new be(.47,.47,.05,9),m,0,.03,0));else{let k=i==="knight"?g:h;for(let Q of[-.12,.12]){let dt=Ai(d,Q,.62,.32);p.push(dt),dt.thigh.add(o(new be(.095,.085,.34,7),k,Q,.46,0)),dt.shin.add(o(new Ne(.085,7,5),k,Q,.32,0)),dt.shin.add(o(new be(.085,.075,.3,7),k,Q,.17,0)),dt.shin.add(o(new sn(.16,.08,.26),h,Q,.04,.05))}d.add(o(new be(.3,.34,.32,8),f,0,.72,0))}let M=i==="knight"?g:f;if(d.add(o(new be(.24,.29,.55,8),M,0,1.12,0)),d.add(o(new An(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let k=o(new sn(.34,.6,.04),f,0,1,.27);d.add(k),d.add(o(new Ne(.13,6,4),g,-.3,1.36,0)),d.add(o(new Ne(.13,6,4),g,.3,1.36,0))}i==="human"&&d.add(o(new sn(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let x=new Wt;x.position.set(0,1.58,0),d.add(x),x.add(o(new xn(.2,1),l));for(let k of[-.07,.07])x.add(o(new Ne(.028,6,4),h,k,.02,.18));if(i==="wizard"){let k=s(15658740);x.add(o(new On(.17,.42,7),k,0,-.2,.1).rotateX(Math.PI)),x.add(o(new sn(.4,.34,.14),k,0,-.06,-.13)),x.add(o(new be(.36,.36,.04,12),f,0,.15,0));let Q=o(new On(.24,.62,9),f,0,.47,0);Q.rotation.z=.12,x.add(Q),x.add(o(new An(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let k of[-1,1]){let Q=o(new On(.07,.34,5),l,k*.24,.05,0);Q.rotation.z=-k*1.25,x.add(Q)}x.add(o(new On(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")x.add(o(new xn(.235,1),g)),x.add(o(new sn(.3,.05,.05),h,0,.02,.21)),x.add(o(new On(.06,.4,6),s(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")x.add(o(new sn(.38,.2,.12),s(5913122),0,-.02,-.13)),x.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2),s(4029400),0,.03,0)),x.add(o(new sn(.2,.025,.16),s(4029400),0,.05,.2));else if(i==="human"){let k=s(5913122);x.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),k,0,.02,-.01)),x.add(o(new sn(.4,.22,.12),k,0,-.04,-.13))}let b=i==="knight"?g:f,L=new Wt;L.position.set(-.3,1.34,0),L.rotation.set(-.2,0,-.18),d.add(L),L.add(o(new be(.075,.1,.55,6),b,0,-.27,0)),L.add(o(new Ne(.075,6,4),l,0,-.58,0));let C=new Wt;C.position.set(.3,1.34,.02),C.rotation.z=oi,d.add(C),C.add(o(new be(.075,.1,.5,6),b,0,-.22,.05).rotateX(-.5));let A=o(new Ne(.075,6,4),l,0,-.42,.22);C.add(A);let z=new Wt;z.position.set(0,-.42,.22),z.rotation.z=-.37,C.add(z);let O=nr(n,e);O.group.position.y=.24,O.group.scale.setScalar(Mu),z.add(O.group);for(let k of O.materials)r.push({mat:k,color:k.color.clone(),emissive:k.emissive.clone()});let{gem:y,gemMat:v,glow:q}=O;return _.scale.setScalar(c),{root:_,body:d,head:x,arm:C,staffPivot:z,crystal:y,crystalMat:v,glow:q,staff:O,height:1.95*c,materials:r,leftArm:L,legs:p,staffLean:0}}function bu(i){return i==="kid"||i==="human"?"goblin":["wizard","witch","goblin","knight"].find(t=>t===i)??"wizard"}function Ex(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Rn(i);return n.colorSpace=nn,n}function Vf(i){let t;try{t=new ks({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=Zo,t.setClearColor(0,0);let e=new zs;e.add(new qs(14673663,2760768,1.4));let n=new tr(16777215,2.2);n.position.set(2,3,4),e.add(n);let r=new tr(10456319,2);r.position.set(-3,2,-3),e.add(r);let s=new _i(16777215,3,3,2);e.add(s);let o=new En(30,1,.1,50),a=Ex(),c=new Wt;c.rotation.z=.12,e.add(c);let l=null,h="";function u(M){return l&&h===M||(l&&(c.remove(l.group),l.group.traverse(x=>x.geometry?.dispose?.())),l=nr(M,a),h=M,c.add(l.group),s.color.copy(l.color),s.position.set(.3,vr+.2,.6)),l}function f(){let M=i.clientWidth||300,x=i.clientHeight||420;t.setSize(M,x,!1),o.aspect=M/x;let b=1.55/Math.tan(Ys.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,b),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,d=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(M){if(!d()){m=0;return}m=requestAnimationFrame(p);let x=Math.min(.05,(M-g)/1e3);g=M,_+=x,l&&(c.rotation.y+=x*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=x*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,x,.25),t.render(e,o))}return{show(M){u(M),f(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(M,x,b){let L=[],C=h,A=c.rotation.y,z=c.position.y;t.setPixelRatio(1),t.setSize(x,b,!1),o.aspect=x/b,o.position.set(.35,vr+.12,1.6),o.lookAt(0,vr-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let O of M)u(O).update(1.2,0,0),t.render(e,o),L.push(i.toDataURL("image/png"));return c.rotation.y=A,c.position.y=z,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),C&&u(C),f(),L},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function Sn(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,r)=>n+(r-n)*e(),int:(n,r)=>n+Math.floor(e()*(r-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var Gt=i=>i<0?0:i>1?1:i,Re=(i,t,e)=>{let n=Gt((e-i)/(t-i));return n*n*(3-2*n)},jf=(i,t,e)=>i+(t-i)*e,jt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],ye=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],Ar=(i,t)=>1-Math.exp(-i*t),ea=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},pe=i=>i*Math.PI/180;function In(i,t){let e=pe(i),n=pe(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function Qf(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return jt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var Lc=(()=>{let i=Sn(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function Ge(i,t){let e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,f=Lc[h+c],m=Lc[h+l],g=Lc[u+c],_=Lc[u+l];return(f*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var Gf=Math.cos(.55),Wf=Math.sin(.55);function on(i,t,e=5,n=2.03,r=.5){let s=0,o=1,a=0;for(let c=0;c<e;c++){s+=o*Ge(i+17.3*c,t-9.1*c),a+=o;let l=(i*Gf-t*Wf)*n,h=(i*Wf+t*Gf)*n;i=l,t=h,o*=r}return s/a}var Xf=Math.cos(.7),qf=Math.sin(.7);function td(i,t,e=5,n=2.1,r=.52){let s=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*Ge(i+31.7*l,t+5.3*l)-1);h=h*h*c,s+=h*o,a+=o,c=Gt(h*2);let u=(i*Xf-t*qf)*n,f=(i*qf+t*Xf)*n;i=u,t=f,o*=r}return s/a}var Yf=new Map;function wx(i,t,e){let n=`${t}:${e}`,r=Yf.get(n);if(!r){let l=Sn(e*977+t);r=new Float32Array(t);for(let h=0;h<t;h++)r[h]=l.random();Yf.set(n,r)}let s=i*t,o=Math.floor(s),a=s-o,c=a*a*(3-2*a);return r[(o%t+t)%t]*(1-c)+r[((o+1)%t+t)%t]*c}function Zf(i,t=5,e=3,n=1,r=.5){let s=0,o=1,a=0;for(let c=0;c<t;c++)s+=o*wx(i,e*2**c,n+c),a+=o,o*=r;return s/a}function sr(i,t){let e=i.stops;return(n,r,s)=>{let o=Math.asin(Math.max(-1,Math.min(1,s)))*180/Math.PI,a=Qf(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+r*l[1]+s*l[2])));for(let[u,f,m]of i.glow){let g=Math.exp(-h/u)*f*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-r*l[1]+s*l[2]))),f=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=f*i.anti_col[0],a[1]+=f*i.anti_col[1],a[2]+=f*i.anti_col[2]}}return a}}var js=(i,t)=>Math.round(255*Math.pow(Gt(Ar(i,t)),1/2.2));function wu(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function Su(i,t=!1){let e=new Rn(i);return e.colorSpace=nn,t?e.wrapS=e.wrapT=Yi:e.wrapS=Zr,e.anisotropy=2,e}function Sx(i,t,e){let n=t/2,{c:r,g:s,img:o}=wu(t,n),a=sr(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??ye(i.far2,.8),f=[],m=h.map(()=>[]);for(let b=0;b<t;b++){let L=(b+.5)/t,C=L*2*Math.PI;f.push(a(Math.cos(C)*Math.cos(.012),Math.sin(C)*Math.cos(.012),Math.sin(.012)));let A=1;for(let z of e.notchAz){let O=Math.abs(ea(C,pe(z)));A*=1-.85*Math.exp(-((O/pe(20))**2))}h.forEach(([z,O,y],v)=>{if(e.ridgeKind==="trees"){m[v].push(z+O*Zf(L,6,18,y,.62)**1.5);return}let q=1-Math.abs(2*Zf(L,7,4,y,.56)-1);m[v].push((z+O*q**1.3)*(.35+.65*A))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),d=null,p=[0,0,0],M=[0,0,0];if((i.milky??0)>0){let b=new R(.25,-.55,.8).normalize(),L=b.clone().cross(new R(0,0,1)).normalize(),C=b.clone().cross(L);d=[b.x,b.y,b.z],p=[L.x,L.y,L.z],M=[C.x,C.y,C.z]}for(let b=0;b<n;b++){let L=((b+.5)/n-.5)*Math.PI,C=Math.cos(L),A=Math.sin(L),z=n-1-b;for(let O=0;O<t;O++){let y=(O+.5)/t*2*Math.PI,v=C*Math.cos(y),q=C*Math.sin(y),k=A,Q=a(v,q,k);if(d&&L>0){let I=Math.asin(Math.max(-1,Math.min(1,v*d[0]+q*d[1]+k*d[2]))),tt=Math.atan2(v*M[0]+q*M[1]+k*M[2],v*p[0]+q*p[1]+k*p[2]),B=3*Math.cos(tt),j=3*Math.sin(tt),ot=on(B+9*I,j+4*I,4),Z=Re(.5,.75,on(B*1.7+17+14*I,j*1.7-5+6*I,3)),T=Math.exp(-((I/(i.milky_w??.2))**2))*(.25+1.3*ot)*(1-.65*Z)*i.milky,S=i.milky_col??[.55,.58,.85];Q=[Q[0]+T*S[0],Q[1]+T*S[1],Q[2]+T*S[2]]}let dt=0;h.forEach(([,,,I,tt],B)=>{let j=Gt((m[B][O]-L)/l+.5);if(j<=0)return;let ot=f[O],Z=jt(tt,ot,I),T=jt(Z,ot,Math.exp(-Math.max(L,0)/.025)*.55);Q=jt(Q,T,j),dt=Math.max(dt,j)});let K=Gt(-L/l+.5);K>0&&(Q=jt(Q,u,K));let ct=(z*t+O)*4;o.data[ct]=js(Q[0],c),o.data[ct+1]=js(Q[1],c),o.data[ct+2]=js(Q[2],c),o.data[ct+3]=255,g[z*t+O]=dt,_[z*t+O]=(o.data[ct]+o.data[ct+1]+o.data[ct+2])/765}}let x=(i.stars??0)>0?Tx(t,n,i.star_n,i.stars,g,_):null;return s.putImageData(o,0,0),{tex:Su(r),stars:x}}function Tx(i,t,e,n,r,s){let o=Sn(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let f=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(f),_=Math.floor(m/(2*Math.PI)*i)%i,d=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-d,M=(1-r[p*i+_])*Gt(1-s[p*i+_]*3),x=o.random()**6,b=a[o.int(0,3)];if(M<=.01)continue;let L=Math.min(1.6,(.1+.95*x)*n*M*2.2),C=140;c.push(C*Math.cos(g)*Math.cos(m),C*Math.cos(g)*Math.sin(m),C*Math.sin(g)),l.push(b[0]*L,b[1]*L,b[2]*L),h.push(1+x*2.5)}return{pos:c,col:l,size:h}}function Rx(i,t,e){let n=t/2,{c:r,g:s,img:o}=wu(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let f=0;f<n;f++){let m=((f+.5)/n-.5)*Math.PI,g=n-1-f;if(m<.02)continue;let _=Math.cos(m),d=Math.sin(m),p=1/(d+.16),M=c<50?Re(.02,.1,m)*(1-Re(c*.6,c,m)):Re(.02,.16,m);if(!(M<=0))for(let x=0;x<t;x++){let b=(x+.5)/t*2*Math.PI,L=_*Math.cos(b),C=_*Math.sin(b),A=L*p*i.cloud_scale,z=C*p*i.cloud_scale,O=on(A*.6+9,z*.6+2,3)-.5,y=A+O*1.4,v=z+O*1.1,q=on(y,v,5),k=Re(i.cov0,i.cov1,q);if(k<=.002)continue;let Q=on(y+h,v+u,5),dt=Gt(.55-(Q-q)*3.4)*(1-.4*k),K=Math.exp(-Math.acos(Math.max(-1,Math.min(1,L*e[0]+C*e[1]+d*e[2])))/1.1),ct=jt(i.cloud_lit_far,i.cloud_lit_near,K),I=ye(i.cloud_shadow,.6+.4*K),tt=jt(I,ct,dt),B=k*(1-k)*4*K*.6,j=(g*t+x)*4;o.data[j]=js(tt[0]+B*i.cloud_rim[0],a),o.data[j+1]=js(tt[1]+B*i.cloud_rim[1],a),o.data[j+2]=js(tt[2]+B*i.cloud_rim[2],a),o.data[j+3]=Math.round(255*k*M*i.cloud_opacity)}}return s.putImageData(o,0,0),Su(r)}function Ax(i,t,e={}){let n=e.span??1.4,{c:r,g:s,img:o}=wu(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let f=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(f,m),_=Gt((1-g)/(n*2/t)+.5),d=Math.sqrt(Gt(1-g*g)),p=0;for(let[C,A]of e.rings??[])p=Math.max(p,A*(1-Re(C-.1,C,g)));let M;if(i==="sun")M=jt(e.sunInner??[1,.62,.25],a,Math.pow(d,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let C=Gt(f*l[0]+m*l[1]+d*l[2]),A=Re(.5,.6,on(f*1.9+4,m*1.9-2,5))*.42,z=Re(.62,.8,Ge(f*14,m*14))*.12,O=(.04+C**.8)*(.6+.4*d)*(.9-A-z)*(e.moonGain??1.55);M=ye(a,O),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-Re(n*.86,n,g);let x=_+(1-_)*p,b=x>1e-4?[0,1,2].map(C=>(_*M[C]+(1-_)*p*c[C])/x):[0,0,0],L=(h*t+u)*4;o.data[L]=Math.round(255*Math.pow(Gt(b[0]),1/2.2)),o.data[L+1]=Math.round(255*Math.pow(Gt(b[1]),1/2.2)),o.data[L+2]=Math.round(255*Math.pow(Gt(b[2]),1/2.2)),o.data[L+3]=Math.round(255*Gt(x))}return s.putImageData(o,0,0),Su(r,!0)}var te=class{constructor(t=!1,e=0){Je(this,"alpha",t);Je(this,"pos",[]);Je(this,"col",[]);Je(this,"idx",[]);Je(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((r,s)=>{let o=n?.[s];r.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new Ee;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("color",new se(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new se(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function xe(i={}){let t=new Ws({vertexColors:!0,flatShading:i.flat??!0,side:i.double?De:Fn}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var Ii=(i={})=>{let t=new rn({vertexColors:!0,side:De,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?hn:Si,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},Xn=(i,t=1)=>new rn({color:new Vt(i[0]*t,i[1]*t,i[2]*t),side:De,toneMapped:!1});function Kf(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),r.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;s.push(l,h,l+1,h,h+1,l+1)}let o=new Ee;return o.setAttribute("position",new se(n,3)),o.setAttribute("uv",new se(r,2)),o.setIndex(s),o}var vu=(i,t=!1)=>new rn({map:i,side:De,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function $f(i,t){let e=new te,n=(r,s,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[f,m,g,_]of[[r,0,s,s],[0,r,-s,s],[-r,0,-s,-s],[0,-r,s,-s]])h.push(e.v([f*c-m*l,f*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let f=0;f<8;f++)e.f(u,h[f],h[(f+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function Li(i){let t=new Wt,e=[],n=Sx(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),r=n.tex,s=new Tt(Kf(150,48,24),vu(r));if(s.renderOrder=-10,s.frustumCulled=!1,t.add(s),e.push(r,s.geometry,s.material),n.stars&&n.stars.pos.length){let x=new Ee;x.setAttribute("position",new se(n.stars.pos,3)),x.setAttribute("color",new se(n.stars.col,3)),x.setAttribute("size",new se(n.stars.size,1));let b=new Kn({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:hn}),L=new xr(x,b);L.renderOrder=-9.5,L.frustumCulled=!1,t.add(L),e.push(x,b)}let o=null;if(i.clouds!==!1){let x=Rx(i.th,Math.min(1024,i.W),i.bodies[0]);o=new Tt(Kf(138,48,24),vu(x,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(x,o.geometry,o.material)}let a=i.body.span??1.4,c=Ax(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=vu(c,!0);e.push(c,l);for(let x of i.bodies){let L=146*Math.tan(i.body.r)*a,C=new R(...x),A=C.clone().cross(new R(0,0,1));A.lengthSq()<1e-8&&(A=new R(1,0,0)),A.normalize();let z=A.clone().cross(C).normalize(),O=C.clone().multiplyScalar(146),y=new Ee,v=[O.clone().addScaledVector(A,-L).addScaledVector(z,-L),O.clone().addScaledVector(A,L).addScaledVector(z,-L),O.clone().addScaledVector(A,L).addScaledVector(z,L),O.clone().addScaledVector(A,-L).addScaledVector(z,L)];y.setAttribute("position",new se(v.flatMap(k=>[k.x,k.y,k.z]),3)),y.setAttribute("uv",new se([0,0,1,0,1,1,0,1],2)),y.setIndex([0,1,2,0,2,3]);let q=new Tt(y,l);q.renderOrder=-8,q.frustumCulled=!1,t.add(q),e.push(y)}let h=Sn(i.seed??21),u=[],f=Math.round(i.sparkles*(i.bigShare??.27)),m=new rn({color:new Vt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:De}),g=new rn({color:new Vt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:De}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},d=$f(..._.big),p=$f(..._.small);e.push(m,g,d,p);for(let x=0;x<i.sparkles;x++){let b=x<f,L=h.uniform(0,360),C=h.uniform(..._.el??[35,88]),A=In(L,C);i.bodies.concat([In(i.th.body_az+180,i.th.body_el)]).some(v=>A[0]*v[0]+A[1]*v[1]+A[2]*v[2]>Math.cos(pe(24)))&&(L+=45);let z=In(L,C).map(v=>v*135),O=new Tt(b?d:p,b?m:g);O.position.set(...z),O.lookAt(0,0,0),O.renderOrder=-7,t.add(O);let y=b?24:12;u.push({m:O,big:b,pulses:Array.from({length:y},(v,q)=>Math.round((q+.5)*3600/y+h.int(-15,15)))})}let M=null;return{group:t,envMap(){if(M)return M;let x=r.image,b=document.createElement("canvas");b.width=x.width,b.height=x.height;let L=b.getContext("2d");return L.translate(b.width*.5,0),L.scale(-1,1),L.drawImage(x,0,0),L.drawImage(x,-x.width,0),M=new Rn(b),M.colorSpace=nn,M.mapping=Uo,e.push(M),M},update(x){o&&(o.rotation.z=x%3600/3600*Math.PI*2);let b=x%3600;for(let L of u){let C=1;for(let A of L.pulses){if(b<A-18||b>A+14)continue;let z=[[A-18,1],[A-9,L.big?1.35:1.2],[A,L.big?.2:.35],[A+14,1]];for(let O=0;O<3;O++)if(b>=z[O][0]&&b<=z[O+1][0]){let y=(b-z[O][0])/(z[O+1][0]-z[O][0]);C=jf(z[O][1],z[O+1][1],y*y*(3-2*y))}}L.m.scale.setScalar(C)}},dispose(){for(let x of e)x.dispose()}}}function Ln(i,t,e=0,n=1,r=0){let s=Math.floor(i/t),o=(i-s*t)/t,a=o*o*(3-2*o),c=(s+r)%2?n:e,l=(s+r)%2?e:n;return jf(c,l,a)}var ed=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function Qs(i,t,e,n){let r=new te,s=[];for(let o of i){if(o===0){let c=r.v([0,0,e(0,0)],n(0,0));s.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(r.v([h,u,e(h,u)],n(h,u)))}s.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?r.f(s[0][0],s[1][a],s[1][c]):r.f(s[o][a],s[o][c],s[o-1][c],s[o-1][a])}return r.geo()}function Cx(i,t,e,n,r=0){let s=.6+.4*Gt(t)**.7,o=ye(i,s*(.88+.24*e));return jt(o,n,Gt(Gt(1-t*3)*.55+r*.75))}function Di(i,t,e,n,r,s,o=!0){let a=Ge(e*2.5+r,n*2.5+r),c=o?Gt((Ge(e*.7+r,n*.7-r)-.5)*2.5):0;return Cx(i,t,a,s,c)}function Eu(i,t,e,n,r,s,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],s([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],s([o[0],o[1],e+n],1));for(let g=0;g<r;g++){let _=2*Math.PI*g/r,d=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(d,s(d,0))),l.push(i.v(p,s(p,1)))}let f=[],m=[];for(let g=0;g<r;g++)f.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<r;g++){let _=(g+1)%r;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(f[g],f[_],m[_],m[g])}}function Px(i,t,e,n,r,s,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,r-=h/2,t+=l/2,e-=l/2;let u=(g,_,d)=>[g*Math.cos(_),g*Math.sin(_),d],f=g=>i.v(g,a(g,(g[2]-s)/o)),m=(g,_,d,p)=>i.f(f(g),f(_),f(d),f(p));for(let g=0;g<c;g++){let _=n+(r-n)*g/c,d=n+(r-n)*(g+1)/c;m(u(t,_,s+o),u(e,_,s+o),u(e,d,s+o),u(t,d,s+o)),m(u(e,_,s+o),u(e,_,s),u(e,d,s),u(e,d,s+o)),m(u(t,d,s+o),u(t,d,s),u(t,_,s),u(t,_,s+o))}m(u(t,n,s+o),u(t,n,s),u(e,n,s),u(e,n,s+o)),m(u(e,r,s+o),u(e,r,s),u(t,r,s),u(t,r,s+o))}function ta(i,t,e,n,r=[1,1,1]){let s=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],f=h[1]-l[1],m=Math.hypot(u,f)||1,g=-f/m,_=u/m;s.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],r)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],r))});for(let a=0;a<t.length-1;a++)i.f(s[a],o[a],o[a+1],s[a+1])}var Uc=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function Ix(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(pe(n)),.4+.4*Math.sin(pe(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(pe(n)),-.4+.4*Math.sin(pe(n))]);return[[...t,...e]]}return i===1?[Uc(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],Uc(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function Jf(i,t,e,n,r,s,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let f of Ix(t))ta(i,f.map(([m,g])=>[h+r*(m*c-g*l),u+r*(m*l+g*c)]),o,s)}function Cr(i){let{th:t,r:e}=i,n=t.stone,r=new te,s=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,d)=>s(Di(m,d,_[0],_[1],g,t.moss,i.patchy??!0),_)};Eu(r,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),Eu(r,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],d)=>{let p=d*.23;for(let M=0;M<_;M++)Px(r,m,g,p+2*Math.PI*M/_,p+2*Math.PI*(M+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new te;Eu(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new te;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),d=Math.sin(g);ta(l,[[.3*_,.3*d],[2.2*_,2.2*d]],.07,c);for(let p of[-1,1]){let M=g+p*pe(35);ta(l,[[1.3*_,1.3*d],[1.3*_+.7*Math.cos(M),1.3*d+.7*Math.sin(M)]],.05,c)}}ta(l,Uc(2.3),.06,c),ta(l,Uc(6),.05,c);let h=new te;for(let m=0;m<8;m++){let g=pe(45*m);m===6?Jf(h,0,g,7.4,.95,c+.01,.13):Jf(h,m%3,g,8.2,.55,c+.01,.09)}let u=new Wt;u.add(new Tt(r.geo(),xe())),u.add(new Tt(a.geo(),Xn(i.glowCol,i.glow*1.1)));let f=new Tt(l.geo(),Xn(i.lineCol,i.glow*1.3));return f.name="centre-pattern",u.add(f),u.add(new Tt(h.geo(),Xn(i.runeCol,i.glow*1.6))),u}function to(i){let{r:t}=i,e=i.wind??(()=>{let r=new R(.8,.6,0).normalize();return[r.x,r.y,0]})(),n=new te(!1,1);for(let r=0;r<i.tufts;r++){let s=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,s))continue;let a=s*Math.cos(o),c=s*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),f=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),d=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],M=[-Math.sin(_),Math.cos(_)],x=i.gh(u,f),b=i.base(s),L=i.tip(s,_),C=jt(b,L,.55),A=[u,f,x],z=[u+p[0]*d*.3,f+p[1]*d*.3,x+m*.55],O=[u+p[0]*d,f+p[1]*d,x+m],y=(K,ct)=>{let I=K[2]-x,tt=.32*I*I;return n.v(K,ct,[[e[0]*tt,e[1]*tt,0]])},v=y([A[0]-M[0]*g,A[1]-M[1]*g,A[2]],b),q=y([A[0]+M[0]*g,A[1]+M[1]*g,A[2]],b),k=y([z[0]-M[0]*g*.65,z[1]-M[1]*g*.65,z[2]],C),Q=y([z[0]+M[0]*g*.65,z[1]+M[1]*g*.65,z[2]],C),dt=y(O,L);n.f(v,q,Q,k),n.f(k,Q,dt)}}return n.geo()}function nd(i,t,e,n,r,s,o,a){let c=new R(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new R(0,0,1)).normalize(),u=l.clone().cross(h),f=12,m=o*r,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([d,p])=>{let M=(.45+3*a*d**1.6)*n;return Array.from({length:f},(x,b)=>{let L=2*Math.PI*b/f,C=c.clone().multiplyScalar(d).addScaledVector(h,Math.cos(L)*M).addScaledVector(u,Math.sin(L)*M);return i.v([t[0]+C.x,t[1]+C.y,t[2]+C.z],[s[0],s[1],s[2],p*m])})});for(let d=0;d<g.length-1;d++)for(let p=0;p<f;p++){let M=(p+1)%f;i.f(_[d][p],_[d][M],_[d+1][M],_[d+1][p])}}function eo(i,t,e,n,r,s,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[r[0],r[1],r[2],n(0,0)*s]),l=[...o,t].map(h=>Array.from({length:40},(u,f)=>{let m=2*Math.PI*f/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[r[0],r[1],r[2],n(g,_)*s])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let f=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][f],l[h][f])}}var rs=()=>new rn({vertexColors:!0,transparent:!0,depthWrite:!1,blending:hn,side:De,fog:!1}),Dc=null;function id(){if(Dc)return Dc;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Dc=new Rn(i),Dc}function Ui(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let r=new Float32Array(i.n*3),s=new Ee;s.setAttribute("position",new Ue(r,3));let o=new yr({map:id(),color:new Vt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:hn,sizeAttenuation:!0,fog:!1}),a=new xr(s,o);a.frustumCulled=!1;let c=l=>{let h=ed(l);for(let u=0;u<i.n;u++){let f=i.twinkle?Math.sin(l*.05+n[u])*.15:0;r[u*3]=t[u][0]+e[u][0]*h+f,r[u*3+1]=t[u][1]+e[u][1]*h,r[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}s.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function Nc(i){let t=i.list.length,e=(l,h,u)=>{let f=new Float32Array(t*3),m=new Ee;m.setAttribute("position",new Ue(f,3));let g=new yr({map:id(),color:h,size:l,transparent:!0,depthWrite:!1,blending:hn,opacity:u,fog:!1}),_=new xr(m,g);return _.frustumCulled=!1,{p:_,pos:f,g:m}},n=i.gain??1,r=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),s=e(2.2*r,new Vt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*r,new Vt(1,1,1).lerp(new Vt(i.col[0],i.col[1],i.col[2]),.3),1),a=new Wt;a.add(s.p,o.p);let c=l=>{let h=ed(l);i.list.forEach((u,f)=>{for(let m of[s.pos,o.pos])m[f*3]=u.p[0],m[f*3+1]=u.p[1],m[f*3+2]=u.p[2]+u.amp*h}),s.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function rd(i,t){let{r:e,idx:n,th:r}=t,s=n/2,o=jt(r.back_lit[0],r.back_lit[1],s),a=jt(r.back_dark[0],r.back_dark[1],s),c=r.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],f=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(r.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(r.back_w??1),_=e.uniform(0,6.28),d=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(b=>Ar(b,r.exposure??1)),M=Math.exp(-((ea(h,t.sunAz)/.5)**2))*(r.back_rim_k??0),x=[];for(let b=0;b<7;b++){let L=b/6,C=-2+(m+2)*L,A=g*(1-.55*L)*(1+.5*Math.exp(-Math.max(C,0)/3)),z=Math.sin(L*4+_)*1.2+d*C,O=[u[0]+f[0]*z,u[1]+f[1]*z,C],y=1-.75*L*L,v=ye(o,y),q=ye(a,y);c>0&&(v=jt(v,p,c*.6*(1-.5*L)),q=jt(q,p,c*.6*(1-.5*L))),M>.01&&(v=jt(v,r.back_rim,.6*M*(1-L)),q=jt(q,r.back_rim,.6*M*(1-L))),x.push([i.v([O[0]-f[0]*A/2,O[1]-f[1]*A/2,C],v),i.v([O[0]+f[0]*A/2,O[1]+f[1]*A/2,C],q)])}for(let b=0;b<6;b++)i.f(x[b][0],x[b][1],x[b+1][1],x[b+1][0])}}function Hc(){let i=new te,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,r=a=>Qf(e,a),s=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],r(a)))),o=i.v([.07*1.12*1.12,0,1.12],r(1.12));for(let a=0;a<s.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(s[a][c],s[a][l],s[a+1][l],s[a+1][c])}for(let a=0;a<n;a++)i.f(s[s.length-1][a],s[s.length-1][(a+1)%n],o);return i.geo()}function Ni(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let r of n)r.dispose()})}function Hi(i){let t=(n,r=1,s=.5)=>{let o=(n[0]+n[1]+n[2])/3;return ye(jt([o,o,o],n,s),r)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let r=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(r)&&(e[n]=Array.isArray(r[0])?r.map(s=>t(s)):t(r))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var Tu={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},no=78,Ru=[90,270];function sd(i,t){let e=i==="night"?Tu.NIGHT:i==="day"?{...Hi(Tu.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:Tu.SUNSET,n=e.emit,r=n*.75,s=Sn(13),o=Sn(41),a=new Wt,c=[In(e.body_az,e.body_el)],l=Ru.map(Z=>[no*Math.cos(pe(Z)),no*Math.sin(pe(Z))]),h=pe(e.body_az),u=[Math.cos(h),Math.sin(h)],f=(()=>{let Z=new R(.8,.6,0).normalize();return[Z.x,Z.y,0]})(),m=(Z,T,S)=>{let D=(Z%360+360)%360;return D>255&&D<285&&T>S},g=e.stone,_=(Z,T)=>{let S=Math.hypot(Z,T),D=Gt((S-12)/10)*.35*(Math.sin(Z*.09)+Math.cos(T*.11)+.5*Math.sin((Z+T)*.19));D+=Gt((S-60)/60)*3*Math.sin(Z*.05+1)*Math.cos(T*.04);for(let[G,U]of l)D*=Re(22,40,Math.hypot(Z-G,T-U));return D},d=(Z,T)=>{let S=0;for(let D of Ru){let G=pe(D),U=Math.cos(G),N=Math.sin(G),W=Z*U+T*N,$=Math.abs(-Z*N+T*U);W>9&&(S=Math.max(S,Math.exp(-(($/4)**2))*Re(9,16,W)*(1-Re(no-10,no-2,W))))}return S},p=(Z,T)=>{let S=Gt((Math.hypot(Z,T)-10)/70)**.8,D=on(Z*.06+3,T*.06-7,3);return jt(ye(jt(e.g_near,e.g_far,S),.75+.5*D),e.g_road,d(Z,T)*.8)};a.add(new Tt(Qs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),xe({flat:!1}))),a.add(Cr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let M=new te,x=(Z,T,S,D,G,U)=>{let N=o.uniform(0,50),W=(X,et)=>Di(G,et,X[0],X[1],N,e.moss),$=(X,et)=>Array.from({length:D},(it,ht)=>{let P=2*Math.PI*ht/D,E=[U[0]+Z*Math.cos(P),U[1]+Z*Math.sin(P),X];return M.v(E,W(E,et))}),V=$(T,0),w=$(T+S,1),nt=$(T,0),J=$(T+S,1);for(let X=0;X<D;X++){let et=(X+1)%D;M.f(nt[X],nt[et],J[et],J[X])}M.f(...w),M.f(...[...V].reverse())},b=[],L=Hc(),C=Ii({gain:1.05}),A=[];for(let Z of[45,135,225,315]){let T=pe(Z),S=9.35*Math.cos(T),D=9.35*Math.sin(T);x(.4,.3,1.1,12,g[3],[S,D]),x(.55,1.4,.3,12,g[0],[S,D]);let G=new Tt(L,C);G.position.set(S,D,1.75),a.add(G),b.push({m:G,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),A.push({pos:[S,D,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let z=new te,O=new te(!1,2),y=(Z,T,S,D,G)=>{let U=Math.cos(D),N=Math.sin(D),W=($,V,w)=>{let nt=$*S[0],J=V*S[1],X=[T[0]+nt*U-J*N,T[1]+nt*N+J*U,T[2]+w*S[2]];return Z.v(X,G(X))};for(let $ of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])Z.f(...$.map(([V,w,nt])=>W(V,w,nt)))},v=t?6:10;for(let Z=0;Z<v;Z++){let T=2*Math.PI*(Z+o.uniform(-.2,.2))/v,S=o.uniform(14,20),D=S*Math.cos(T),G=S*Math.sin(T),U=_(D,G),N=o.uniform(6,9),W=()=>e.cs_stone;y(z,[D,G,U+(N-.2)/2],[.2,.2,N+.2],Math.PI/4,W);let $=o.uniform(0,3.14),V=[-Math.sin($),Math.cos($)],w=[Math.cos($),Math.sin($)];y(z,[D,G,U+N-.2],[.08,1.3,.08],$,W);let nt=[D,G,U+N-.3],J=(it,ht)=>{let P=.35*Math.sin(1.4*it+ht)*it/5;return[w[0]*P+f[0]*(.15*it)/5,w[1]*P+f[1]*(.15*it)/5,0]},X=Array.from({length:6},(it,ht)=>Array.from({length:3},(P,E)=>O.v([nt[0]+V[0]*(E-1)*.6,nt[1]+V[1]*(E-1)*.6,nt[2]-ht*.6],ye(e.banner,1-.35*ht/5),[J(ht,0),J(ht,Math.PI)]))),et=O.v([nt[0],nt[1],nt[2]-3.6],ye(e.banner,.6),[J(6,0),J(6,Math.PI)]);for(let it=0;it<5;it++)for(let ht=0;ht<2;ht++)O.f(X[it][ht],X[it][ht+1],X[it+1][ht+1],X[it+1][ht]);O.f(X[5][0],X[5][1],et),O.f(X[5][1],X[5][2],et)}let q=xe({double:!0,morph:!0}),k=new Tt(O.geo(),q);k.morphTargetInfluences=[0,0],a.add(new Tt(z.geo(),xe()),k,new Tt(M.geo(),xe()));let Q=[];Ru.forEach((Z,T)=>{let S=new te,D=new te,G=new te,U=new te,N=new te,W=new te(!1,2),$=pe(Z),V=[no*Math.cos($),no*Math.sin($),0],w=$-Math.PI/2,nt=Math.cos(w),J=Math.sin(w),X=F=>[V[0]+F[0]*nt-F[1]*J,V[1]+F[0]*J+F[1]*nt,F[2]],et=F=>{let st=Ge(F[0]*.8+T*10,F[2]*.8),lt=.6+.4*Gt(F[2]/6);return ye(e.cs_stone,lt*(.75+.5*st)*(.8+.4*Gt(F[2]/30)))},it=(F,st,lt,rt)=>{for(let wt of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])F.f(...wt.map(([Et,_t,Ut])=>{let yt=[st[0]+Et*lt[0],st[1]+_t*lt[1],st[2]+Ut*lt[2]];return F.v(X(yt),rt(yt))}))},ht=(F,st,lt,rt,wt)=>{let Et=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([yt,Ct])=>[F+yt*rt,st+Ct*rt,lt]),_t=[F,st,lt+wt],Ut=yt=>ye(e.cs_roof,.8+.4*Gt((yt[2]-22)/22));for(let yt=0;yt<4;yt++){let Ct=Et[yt],Xt=Et[(yt+1)%4];D.f(D.v(X(Ct),Ut(Ct)),D.v(X(Xt),Ut(Xt)),D.v(X(_t),Ut(_t)))}};it(S,[0,0,6],[40,4,12],et);for(let F=-18;F<=18;F+=2.6)if(Math.abs(F)>4.6)for(let st of[-1.6,1.6])it(S,[F,st,12.7],[1.4,.8,1.4],et);for(let F of[-20,20]){it(S,[F,0,11],[8,8,22],et);for(let st of[12,20])it(S,[F,0,st],[8.6,8.6,.6],et);ht(F,0,22,4.7,9),it(S,[F,0,31],[.12,.12,9],et)}it(S,[0,0,17],[7,7,34],et);for(let F of[13,24])it(S,[0,0,F],[7.6,7.6,.6],et);ht(0,0,34,4.3,10),it(S,[0,0,46.5],[.12,.12,5],et);for(let F of[-2.9,2.9])it(S,[F,-3.75,3.8],[.9,.6,7.6],et);it(S,[0,-3.75,7.7],[6.8,.6,.9],et),it(U,[0,-3.6,3.6],[4.6,.3,7.2],F=>F[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let F=0;F<7;F++)it(U,[-2.1+.7*F,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let F of[2,4.5,6.8])it(U,[0,-3.85,F],[4.6,.2,.12],()=>[.02,.016,.014]);{let F=Array.from({length:9},(lt,rt)=>[2.3*Math.cos(Math.PI*rt/8),7.2+2.3*Math.sin(Math.PI*rt/8)]);U.f(...F.map(([lt,rt])=>U.v(X([lt,-3.75,rt]),[.006,.005,.008])));let st=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];U.f(...[...st].reverse().map(lt=>U.v(X(lt),[.04,.025,.02])))}for(let F of[9.5,15,20.5,26,31])it(G,[0,-3.62,F],[.8,.3,1.7],()=>[1,1,1]);for(let F of[-20,20])for(let st of[5,10,15,20])it(G,[F,-4.12,st],[.8,.3,1.7],()=>[1,1,1]);for(let F of[-4.3,4.3]){it(S,[F,-3.8,4.2],[.15,.15,1],et);let st=new xn(.35,1),lt=st.attributes.position;for(let wt=0;wt<lt.count;wt+=3)N.f(...[0,1,2].map(Et=>N.v(X([F+lt.getX(wt+Et),-3.8+lt.getY(wt+Et),5.1+lt.getZ(wt+Et)*1.5]),[1,1,1])));st.dispose();let rt=X([F,-4.6,5.3]);T===0&&A.push({pos:rt,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[F,st,lt,rt,wt]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let Et=[0,.2,.4,.6,.82],_t=(Ht,Kt)=>{let ne=.5*wt*Math.sin(7*Ht+Kt)*Ht,at=.1*wt*Math.sin(5*Ht+Kt)*Ht;return[-ne*J,ne*nt,at]},Ut=(Ht,Kt,ne)=>W.v(X([Ht,st,Kt]),e.flag_col,[_t(ne,0),_t(ne,Math.PI)]),yt=Et.map(Ht=>Ut(F+rt*Ht,lt+wt,Ht)),Ct=Et.map(Ht=>Ut(F+rt*Ht,lt,Ht)),Xt=Ut(F+rt,lt+wt,1),kt=Ut(F+rt,lt,1),At=Ut(F+.9*rt,lt+wt/2,.9);for(let Ht=0;Ht<4;Ht++)W.f(Ct[Ht],Ct[Ht+1],yt[Ht+1],yt[Ht]);W.f(yt[4],Xt,At),W.f(Ct[4],At,kt),W.f(yt[4],At,Ct[4])}a.add(new Tt(S.geo(),xe()),new Tt(D.geo(),xe()),new Tt(U.geo(),xe({double:!0}))),a.add(new Tt(G.geo(),Xn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new Tt(N.geo(),Xn(e.torch_col,1.5)));let E=new Tt(W.geo(),xe({double:!0,morph:!0}));E.morphTargetInfluences=[0,0],a.add(E),Q.push(E)});class dt{constructor(T){Je(this,"mode",T);Je(this,"mb");Je(this,"war",[]);Je(this,"pending",[]);Je(this,"faces",[]);this.mb=new te(!1,T==="clash"?2:T==="surge"?1:0)}part(T,S,D,G,U,N,W=-1,$=!1){let V=D.clone().sub(S);if(V.length()<1e-6)return;let w=V.normalize(),nt=Math.abs(w.z)<.9?new R(0,0,1):new R(1,0,0),J=w.clone().cross(nt).normalize(),X=w.clone().cross(J),et=[[S,G],[D,U]].map(([it,ht])=>Array.from({length:N},(P,E)=>{let F=2*Math.PI*E/N,st=it.clone().addScaledVector(J,Math.cos(F)*ht).addScaledVector(X,Math.sin(F)*ht),lt=new Nt(st.x-T.x,st.y-T.y),rt=lt.length()>1e-6?.5+.5*lt.normalize().dot(new Nt(u[0],u[1])):.5;return this.add([st.x,st.y,st.z],jt(e.sil,e.sil_rim,.45*rt*rt),W,$)}));for(let it=0;it<N;it++){let ht=(it+1)%N;this.faces.push([et[0][it],et[0][ht],et[1][ht],et[1][it]])}this.faces.push([...et[0]].reverse()),this.faces.push(et[1])}add(T,S,D,G){return this.pending.push({p:T,c:S,wi:D,arm:G}),this.pending.length-1}warrior(T,S,D,G){let U=this.war.length,N=new le().makeRotationZ(S-Math.PI/2),W=(nt,J,X)=>T.clone().add(new R(nt,J,X).applyMatrix4(N)),$=T.clone().add(new R(0,0,1)),V=(nt,J,X,et,it,ht=!1)=>this.part($,W(...nt),W(...J),X,et,it,U,ht);for(let[nt,J,X]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])V([nt*.11,0,.95],X,.1,.075,4),V(X,J,.075,.06,4);V([0,0,.95],[0,.1,1.48],.2,.23,6),V([0,.16,1.58],[0,.16,1.74],.11,.11,6),V([0,.16,1.74],[0,.16,1.92],.12,.02,6),V([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),V([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),D!=="spear"&&V([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),V([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),V([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),D==="sword"?V([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):D==="axe"?(V([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),V([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(V([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),V([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let w=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(nt=>{let J=W(...nt);return this.add([J.x,J.y,J.z],e.sil,U,!1)});this.faces.push(w),this.war.push({team:G,f:new R(0,1,0).applyMatrix4(N),axis:new R(1,0,0).applyMatrix4(N),pivot:W(.27,.1,1.42)})}finish(){let T=this.pending.map(S=>{let D=[],G=new R(...S.p);if(this.mode==="clash")for(let U of[0,1]){if(S.wi<0){D.push([0,0,0]);continue}let N=this.war[S.wi],W=N.team===U,$=N.f.clone().multiplyScalar(W?.32:-.22),V=G.clone().add($);S.arm&&(V=N.pivot.clone().add($).add(G.clone().sub(N.pivot).applyAxisAngle(N.axis,pe(W?-60:25)))),D.push([V.x-G.x,V.y-G.y,V.z-G.z])}if(this.mode==="surge"){let U=this.war[S.wi];D.push([U.f.x*.5,U.f.y*.5,S.arm?.3:0])}return this.mb.v(S.p,S.c,D)});for(let S of this.faces)this.mb.f(...S.map(D=>T[D]));return this.mb.geo()}}let K=xe({morph:!0,double:!0}),ct=[],I=t?5:8;for(let Z=0;Z<I;Z++){let T=2*Math.PI*(Z+o.uniform(-.3,.3))/I,S=o.uniform(17,36);m(T*180/Math.PI,S,15)&&(T+=.6);let D=S*Math.cos(T),G=S*Math.sin(T);for(let U=0;U<3;U++){let N=new dt("clash"),W=o.uniform(0,6.283),$=new R(D+o.uniform(-4.5,4.5),G+o.uniform(-4.5,4.5),0),V=new R(Math.cos(W),Math.sin(W),0),w=o.uniform(.9,1.1);for(let[J,X]of[[0,-1],[1,1]]){let et=$.clone().addScaledVector(V,w*X);et.z=_(et.x,et.y),N.warrior(et,J===0?W:W+Math.PI,o.choice(["sword","sword","axe","spear"]),J)}let nt=new Tt(N.finish(),K);nt.morphTargetInfluences=[0,0],a.add(nt),ct.push({m:nt,w:2*Math.PI/s.uniform(40,95),w2:2*Math.PI/s.uniform(110,260),w3:2*Math.PI/s.uniform(150,400),p:s.uniform(0,6.28),p2:s.uniform(0,6.28),p3:s.uniform(0,6.28),bias:s.uniform(-.35,.35)})}}{let Z=new dt(null);for(let T=0;T<16;T++){let S=o.uniform(0,6.283),D=o.uniform(13,45);if(m(S*180/Math.PI,D,14))continue;let G=new R(D*Math.cos(S),D*Math.sin(S),0);G.z=_(G.x,G.y);let U=new le().makeRotationZ(o.uniform(0,6.283)),N=($,V,w)=>G.clone().add(new R($,V,w).applyMatrix4(U)),W=G.clone().add(new R(0,0,.2));Z.part(W,N(0,-.4,.18),N(0,.45,.2),.2,.22,6),Z.part(W,N(0,.55,.18),N(0,.7,.2),.11,.11,6),Z.part(W,N(-.1,-.4,.12),N(-.2,-1.2,.1),.09,.07,4),Z.part(W,N(.1,-.4,.12),N(.25,-1.1,.12),.09,.07,4),Z.part(W,N(-.25,.35,.18),N(-.6,.1,.12),.06,.05,4),Z.part(W,N(.25,.35,.18),N(.55,.7,.1),.06,.05,4),Z.part(W,N(.7,.2,0),N(.9,.2,1.8),.03,.025,4),Z.part(W,N(-.9,0,.05),N(-.9,0,.12),.4,.4,8)}a.add(new Tt(Z.finish(),xe({double:!0})))}let tt=[];{let Z=[];for(let D=0;D<6;D++){let G=o.uniform(0,6.283),U=o.uniform(45,90);m(G*180/Math.PI,U,40)&&(G+=.8),Z.push(new R(U*Math.cos(G),U*Math.sin(G),0))}let T=t?70:120,S=Z.map(()=>new dt("surge"));for(let D=0;D<T;D++){let G=S[D%Z.length],U=Z[D%Z.length],N=U.clone().add(new R(o.uniform(-9,9),o.uniform(-9,9),0));N.z=_(N.x,N.y);let W=Math.atan2(U.y-N.y,U.x-N.x)+o.uniform(-.5,.5),$=G.war.length,V=new le().makeRotationZ(W-Math.PI/2),w=(J,X,et)=>N.clone().add(new R(J,X,et).applyMatrix4(V)),nt=N.clone().add(new R(0,0,.9));G.part(nt,w(0,0,0),w(0,0,1.45),.28,.22,4,$),G.part(nt,w(0,.05,1.45),w(0,.05,1.65),.12,.12,4,$),G.part(nt,w(.3,-.3,.9),w(.3,2,2.4),.03,.025,4,$,!0),G.war.push({team:0,f:new R(0,1,0).applyMatrix4(V),axis:new R(1,0,0).applyMatrix4(V),pivot:w(0,0,1.4)})}for(let D of S){let G=new Tt(D.finish(),K);G.morphTargetInfluences=[0,0],a.add(G),tt.push({m:G,w:2*Math.PI/s.uniform(90,170),p:s.uniform(0,6.28),w2:2*Math.PI/s.uniform(300,600),p2:s.uniform(0,6.28)})}}let B=new Tt(to({r:s,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(Z,T)=>m(Z,T,16),base:Z=>ye(e.grass_base,1-.6*Gt((Z-12)/55)),tip:Z=>ye(e.grass_tip,1-.6*Gt((Z-12)/55))}),xe({emit:.1,double:!0,morph:!0}));B.morphTargetInfluences=[0],a.add(B);let j=Ui({r:o,n:t?24:40,at:()=>{let Z=o.uniform(0,6.283),T=30*Math.sqrt(o.random());return[T*Math.cos(Z),T*Math.sin(Z),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(j.obj);let ot=Li({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(ot.group),{group:a,floor:.6,update(Z){ot.update(Z);for(let N of ct){let W=Math.sin(Z*N.w+N.p+1.4*Math.sin(Z*N.w2+N.p2))+N.bias,$=.55+.45*Math.sin(Z*N.w3+N.p3),V=Gt(W)*$,w=Gt(-W)*$;N.m.morphTargetInfluences[0]=V*V*(3-2*V),N.m.morphTargetInfluences[1]=w*w*(3-2*w)}for(let N of tt)N.m.morphTargetInfluences[0]=Gt(.5+.6*Math.sin(Z*N.w+N.p)*(.6+.4*Math.sin(Z*N.w2+N.p2)));let T=Ln(Z,90);k.morphTargetInfluences[0]=T,k.morphTargetInfluences[1]=1-T;for(let N of Q)N.morphTargetInfluences[0]=T,N.morphTargetInfluences[1]=1-T;B.morphTargetInfluences[0]=Ln(Z,45);let S=Z%3600,D=Math.floor(S/8),G=(S-D*8)/8,U=G*G*(3-2*G);for(let N of b){let W=N.keys[D%450],$=N.keys[(D+1)%450];N.m.scale.set(W[0]+($[0]-W[0])*U,W[1]+($[1]-W[1])*U,W[2]+($[2]-W[2])*U)}j.update(Z)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...A],dispose(){ot.dispose(),Ni(a)}}}var Au={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function od(i,t){let e=i==="night"?Au.NIGHT:i==="day"?{...Hi(Au.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:Au.SUNSET,n=e.emit,r=n*.75,s=Sn(11),o=Sn(99),a=new Wt,c=pe(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let I=new R(.8,.6,0).normalize();return[I.x,I.y,0]})(),u=(I,tt)=>Gt((Math.hypot(I,tt)-12)/10)*.25*(Math.sin(I*.22)+Math.cos(tt*.27)+.5*Math.sin((I+tt)*.5)),f=(I,tt)=>{let B=Gt((Math.hypot(I,tt)-6)/34)**.7,j=.9+.2*(Math.sin(I*.5)*Math.cos(tt*.5)*.5+.5),ot=on(I*.09+3,tt*.09-7,3),Z=Ge(I*1.7,tt*1.7),T=jt(e.g_near,e.g_far,B);return T=jt(T,e.g_alt,Gt((ot-.45)*2.2)*.6*(1-.5*B)),ye(T,j*(1+.25*(Z-.5)*(1-B)))},m=sr(e,[In(e.body_az,e.body_el)]);a.add(new Tt(Qs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,f),xe({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,I])=>[I[0],I[1]]),d=I=>{let tt=_.reduce((j,[ot,Z])=>j+Math.exp(-((Math.hypot(I[0]-ot,I[1]-Z)/5.5)**2)),0),B=(.55+.45*Math.min(1,tt))*(1-.4*Gt((Math.hypot(I[0],I[1])-5)/5))*.2*.5*e.beam_gain;return ye(e.beam_col,B)};a.add(Cr({th:e,r:s,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:r,patchy:!1,bake:d}));{let I=new te;for(let tt=0;tt<10;tt++){let B=s.uniform(0,6.283),j=s.uniform(11.5,17),ot=s.uniform(.8,2),Z=s.choice(e.stone),T=o.uniform(0,50),S=new xn(1,1),D=S.attributes.position;for(let w=0;w<D.count;w++){let nt=s.uniform(.8,1.2);D.setXYZ(w,D.getX(w)*nt,D.getY(w)*nt,D.getZ(w)*nt)}let G=j*Math.cos(B),U=j*Math.sin(B),N=s.uniform(0,6.28),W=new le().compose(new R(G,U,u(G,U)+.3*ot),new Qe().setFromAxisAngle(new R(0,0,1),N),new R(ot,ot*.9,ot*.7)),$=S.index?S.toNonIndexed():S,V=$.attributes.position;for(let w=0;w<V.count;w+=3){let nt=[];for(let J=0;J<3;J++){let X=V.getX(w+J),et=V.getY(w+J),it=V.getZ(w+J),ht=new R(X,et,it).applyMatrix4(W),P=.6+.4*Gt((it+1)/2)**.7,E=Ge(X*2+T,et*2+it);nt.push(I.v([ht.x,ht.y,ht.z],jt(ye(Z,P*(.88+.24*E)),e.moss,Gt(1-(it+1)/2*3)*.55)))}I.f(...nt)}$.dispose()}a.add(new Tt(I.geo(),xe()))}let p=[],M=(I,tt,B)=>{for(let j=0;j<300;j++){let ot=s.uniform(0,360);if(B&&ot>245&&ot<295)continue;let Z=s.uniform(I,tt),T=Z*Math.cos(pe(ot)),S=Z*Math.sin(pe(ot));if(p.every(([D,G])=>Math.hypot(T-D,S-G)>5.5))return p.push([T,S]),[T,S]}return null},x=xe({morph:!0}),b=Ii({gain:2.2}),L=[],C=t?12:18,A=t?6:10;for(let I=0;I<C+A;I++){let tt=I<C,B=tt?M(15,26,!0):M(32,46,!1);if(!B)continue;let j=tt?s.uniform(46,62):s.uniform(58,76),ot=tt?s.uniform(1.2,2.1):s.uniform(2.3,3.3),Z=tt&&s.random()<.25,T=z(B[0],B[1],j,ot,Z),S=new Tt(T.bark.geo(),x);S.morphTargetInfluences=[0,0],a.add(S);let D=null;Z&&(D=new Tt(T.eyes.geo(),b),D.morphTargetInfluences=[0,0],a.add(D));let G=[];if(Z){let U=Array.from({length:Math.floor(174)},(N,W)=>60+W*20);for(let N=0;N<5;N++)G.push(U.splice(s.int(0,U.length-1),1)[0]);G.sort((N,W)=>N-W)}L.push({mesh:S,eyes:D,P:s.choice([100,120,150,180,200]),flip:s.int(0,1),blinks:G})}function z(I,tt,B,j,ot){let Z=new te(!1,2),T=new te(!1,2),S=new R(-I,-tt,0).normalize(),D=s.uniform(1.2,2.4),G=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.03,.1)),U=s.uniform(0,6.28),N=s.uniform(.4,1),W=s.choice([3,4,5]),$=s.uniform(0,6.28),V=F=>new R(I+G.x*F+N*Math.sin(.28*F+U),tt+G.y*F+N*Math.cos(.23*F+U),F),w=(F,st)=>{let lt=Math.max(F,0),rt=j*(1-.62*Gt(lt/B))*(1+1.1*Math.exp(-lt/1.6)),wt=st+.06*lt;return rt*(1+.28*Math.cos(W*wt+$)*Math.exp(-lt/3.5)+.07*Math.cos(2*wt+U))},nt=F=>{let st=D*Gt(Math.max(F,0)/B)**2;return[h[0]*st,h[1]*st,0]},J=(F,st,lt)=>{let rt=new R(F.x,F.y,0);rt.lengthSq()>1e-12&&rt.normalize();let wt=Math.max(0,rt.x*S.x+rt.y*S.y),Et=.6+.4*Math.sin(lt),_t=jt(e.bark_dark,e.bark_lit,Gt(.85*wt*Et*(1-.3*Gt(st/B)))),Ut=Math.max(0,rt.x*l[0]+rt.y*l[1]);_t=jt(_t,e.bark_sun,Gt(e.bark_sun_k*Ut*(.5+.5*Et)*(1-.5*Gt(st/B)))),_t=ye(_t,.72+.28*Gt(st/1.6));let yt=Gt(1-st/2.2)*.55*Ge(F.x*3+I,F.y*3+st*.8);return jt(_t,e.moss,yt)},X=(F,st)=>Z.v([F.x,F.y,F.z],st,[nt(F.z),[0,0,0]]),et=t?10:14,it=t?8:12,ht=[];for(let F=0;F<et;F++){let st=-.5+(B+.5)*(F/(et-1))**1.15,lt=V(st),rt=[];for(let wt=0;wt<it;wt++){let Et=2*Math.PI*wt/it,_t=new R(Math.cos(Et),Math.sin(Et),0);rt.push(X(lt.clone().addScaledVector(_t,w(st,Et)),J(_t,st,Et*7+st*.4)))}ht.push(rt)}for(let F=0;F<et-1;F++)for(let st=0;st<it;st++){let lt=(st+1)%it;Z.f(ht[F][st],ht[F][lt],ht[F+1][lt],ht[F+1][st])}let P=X(V(B).add(new R(0,0,.3)),e.bark_dark);for(let F=0;F<it;F++)Z.f(P,ht[et-1][F],ht[et-1][(F+1)%it]);let E=s.int(2,4);for(let F=0;F<E;F++){let st=B*s.uniform(.35,.85),lt=s.uniform(0,6.28),rt=new R(Math.cos(lt),Math.sin(lt),0),wt=V(st).addScaledVector(rt,w(st,lt)*.7),Et=rt.clone().add(new R(0,0,s.uniform(.4,1))).normalize(),_t=s.uniform(3.5,7.5),Ut=new R(-rt.y,rt.x,0),yt=[0,1,2,3,4].map(kt=>wt.clone().addScaledVector(Et,_t*(kt/4)).add(new R(0,0,.35*_t*(kt/4)**2)).addScaledVector(Ut,Math.sin(kt/4*3+F)*.5)),Ct=w(st,lt)*.32,Xt=yt.map((kt,At)=>{let Ht=yt[Math.min(At+1,4)].clone().sub(yt[Math.max(At-1,0)]).normalize(),Kt=Ht.clone().cross(new R(0,0,1));Kt.length()<.001&&(Kt=new R(1,0,0)),Kt.normalize();let ne=Ht.clone().cross(Kt);return Array.from({length:6},(at,Dt)=>{let xt=2*Math.PI*Dt/6,Rt=Kt.clone().multiplyScalar(Math.cos(xt)).addScaledVector(ne,Math.sin(xt));return X(kt.clone().addScaledVector(Rt,Ct*(1-.85*At/4)),J(Rt,kt.z,xt*5+At))})});for(let kt=0;kt<4;kt++)for(let At=0;At<6;At++){let Ht=(At+1)%6;Z.f(Xt[kt][At],Xt[kt][Ht],Xt[kt+1][Ht],Xt[kt+1][At])}}if(ot){let F=s.uniform(2.2,9),st=Math.atan2(S.y,S.x)+s.uniform(-.6,.6),lt=new R(Math.cos(st),Math.sin(st),0),rt=new R(-lt.y,lt.x,0),wt=V(F).addScaledVector(lt,w(F,st)),Et=s.uniform(.18,.32),_t=Et*1.25,Ut=(Xt,kt,At)=>wt.clone().addScaledVector(lt,At).addScaledVector(rt,Xt).add(new R(0,0,kt)),yt=Array.from({length:10},(Xt,kt)=>X(Ut(Math.cos(2*Math.PI*kt/10)*(_t+Et*1.7),Math.sin(2*Math.PI*kt/10)*Et*1.7,.07),[.004,.003,.02]));Z.f(...yt);let Ct=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Xt of[1,-1]){let kt=Ct.map(([Ht,Kt])=>[Xt*(_t+Ht*Et),Kt*Et]);Xt===-1&&(kt=kt.reverse());let At=kt.map(([Ht,Kt])=>{let ne=Ut(Ht,Kt,.11);return T.v([ne.x,ne.y,ne.z],[1,.04,.04],[nt(ne.z),[0,0,F-ne.z]])});T.f(...At)}}return{bark:Z,eyes:T}}let O=e.grass_tip,y=xe({emit:e.grass_emit,double:!0,morph:!0}),v=t?260:500,q=[0,1].map(()=>{let I=new Map,tt=to({r:s,tufts:v,rmin:10.6,rspan:34,gh:u,base:j=>ye(e.grass_base,1-.6*Gt((j-11)/34)),tip:(j,ot)=>{let Z=Math.round(j*1e3),T=I.get(Z);T||(T=jt(O[0],O[1],s.random()),I.set(Z,T));let S=.3*Math.abs(Math.cos(ot-c))*(i==="night"?.5:1);return ye(jt(T,e.grass_rim,S),1-.6*Gt((j-11)/34))}}),B=new Tt(tt,y);return B.morphTargetInfluences=[0],a.add(B),B});{let I=new te;for(let tt=0;tt<(t?40:70);tt++){let B=14+22*o.random(),j=o.uniform(0,2*Math.PI),ot=B*Math.cos(j),Z=B*Math.sin(j),T=u(ot,Z),S=[ot+o.uniform(-.06,.06),Z+o.uniform(-.06,.06),T+o.uniform(.35,.7)];I.f(I.v([ot-.012,Z,T],[.02,.07,.05]),I.v([ot+.012,Z,T],[.02,.07,.05]),I.v([S[0]+.012,S[1],S[2]],[.08,.25,.12]),I.v([S[0]-.012,S[1],S[2]],[.08,.25,.12]));let D=o.choice(e.flower),G=I.v([S[0],S[1],S[2]+.02],[1,.9,.5]),U=Array.from({length:6},(N,W)=>{let $=2*Math.PI*W/6;return I.v([S[0]+.05*Math.cos($),S[1]+.05*Math.sin($),S[2]+.025],D)});for(let N=0;N<6;N++)I.f(G,U[N],U[(N+1)%6])}a.add(new Tt(I.geo(),xe({emit:e.flower_emit,double:!0})))}{let I=new te;for(let tt=0;tt<14;tt++){let B=pe(s.choice([s.uniform(195,245),s.uniform(295,345),s.uniform(0,360)])),j=s.uniform(16,34),ot=s.uniform(1,1.8),Z=j*Math.cos(B),T=j*Math.sin(B),S=u(Z,T);for(let D=0;D<4;D++){let G=[s.uniform(-1.4,1.4),s.uniform(-1,1),s.uniform(.2,1)],U=s.uniform(.9,1.6),N=new xn(U,1),W=N.attributes.position;for(let $=0;$<W.count;$+=3){let V=[];for(let w=0;w<3;w++){let nt=W.getZ($+w)+G[2];V.push(I.v([Z+(W.getX($+w)+G[0])*ot,T+(W.getY($+w)+G[1])*ot,S+nt*ot*.75],jt(e.bush_lo,e.bush_hi,Gt((nt+.3)/2.6)*.8)))}I.f(...V)}N.dispose()}}a.add(new Tt(I.geo(),xe()))}{let I=new te;[[52,70,110,150],[59,80,120,160],[66,90,130,170]].forEach(([B,j,ot,Z],T)=>rd(I,{r:s,idx:T,radius:B,count:t?Math.round(j*.6):j,hmin:ot,hmax:Z,th:e,sky:m,sunAz:c}));let tt=Ii({fog:!1,gain:i==="night"?.45:.6});tt.toneMapped=!1,a.add(new Tt(I.geo(),tt))}let k=new te(!0);g.forEach(([I,tt])=>{for(let[B,j]of[[1,.45],[.7,.6],[.4,.8]])nd(k,I,tt,B,j,e.beam_col,.35*e.beam_gain,2.6)});let Q=new te(!0);eo(Q,9.4,.7,(I,tt)=>{let B=_.reduce((j,[ot,Z])=>j+Math.exp(-((Math.hypot(I-ot,tt-Z)/5.5)**2)),0);return(.55+.45*Math.min(1,B))*Re(0,3,9.4-Math.hypot(I,tt))},e.beam_col,.3*.5*e.beam_gain);let dt=new Tt(k.geo(),rs());a.add(dt,new Tt(Q.geo(),rs()));let K=Ui({r:s,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let I=s.uniform(0,6.283),tt=s.uniform(0,22);return[tt*Math.cos(I),tt*Math.sin(I),s.uniform(.8,7)]},move:()=>{let I=s.uniform(-1.5,1.5);return[I,I*.5,s.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(K.obj);let ct=Li({th:e,W:t?512:1024,bodies:[In(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(ct.group),{group:a,floor:.62,update(I){ct.update(I);for(let B of L){let j=Ln(I,B.P/2,.15,1,B.flip),ot=0;for(let Z of B.blinks)Math.abs(I%3600-Z)<3&&(ot=1-Math.abs(I%3600-Z)/3);B.mesh.morphTargetInfluences[0]=j,B.mesh.morphTargetInfluences[1]=ot,B.eyes&&(B.eyes.morphTargetInfluences[0]=j,B.eyes.morphTargetInfluences[1]=ot)}q.forEach((B,j)=>{B.morphTargetInfluences[0]=Ln(I,45,0,1,j)});let tt=Ln(I,450);dt.rotation.set(.03*tt*.1,.02*tt*.1,0),K.update(I)},key:{dir:In(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){ct.dispose(),Ni(a)}}}var Cu={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},ss=2.3;function ad(i,t){let e=i==="night"?Cu.NIGHT:i==="day"?{...Hi(Cu.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:Cu.SUNSET,n=e.emit,r=Sn(7),s=new Wt,o=[In(e.body_az,e.body_el),In(e.body_az+180,e.body_el)],a=sr(e,o),c=(I,tt)=>Gt((Math.hypot(I,tt)-13)/10)*.25*(Math.sin(I*.22)+Math.cos(tt*.27)+.5*Math.sin((I+tt)*.5)),l=(I,tt)=>{let B=Gt((Math.hypot(I,tt)-10)/50),j=.9+.2*(Math.sin(I*.5)*Math.cos(tt*.5)*.5+.5),ot=jt(e.g_near,e.g_far,B);return ot=jt(ot,e.g_alt,Gt((on(I*.09+3,tt*.09-7,3)-.45)*2.2)*.6),ye(ot,j*(.9+.25*Ge(I*1.7,tt*1.7)))},h=(I,tt,B)=>jt(ye(I,(.6+.4*Gt(tt)**.7)*(.88+.24*B)),e.moss,Gt(1-tt*3)*.55);s.add(new Tt(Qs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),xe({flat:!1})));{let I=t?96:144,tt=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],B=tt.map(S=>Array.from({length:I},(D,G)=>{let U=2*Math.PI*G/I,N=S*Math.cos(U),W=S*Math.sin(U),$=1;for(let nt of[pe(e.body_az),pe(e.body_az+180)]){let J=Math.abs(((U-nt+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);$*=1-.8*Math.exp(-((J/pe(17))**2))}let w=(4+42*Re(50,102,S))*(1-.65*Re(112,134,S))*(.12+1.15*td(N*.032,W*.032,5))*(.55+.9*on(N*.01+5,W*.01-3,3))*$+1.2*on(N*.09,W*.09,3)*Re(46,60,S);return w*=Re(45.5,52,S),[N,W,c(N,W)+.03+w]})),j=new te,ot=[],Z=o;tt.forEach((S,D)=>{ot.push([]);for(let G=0;G<I;G++){let U=B[D][G],N=2*Math.PI*G/I,W=B[D][(G+1)%I],$=B[D][(G-1+I)%I],V=B[Math.min(D+1,tt.length-1)][G],w=B[Math.max(D-1,0)][G],nt=new R(V[0]-w[0],V[1]-w[1],V[2]-w[2]).cross(new R(W[0]-$[0],W[1]-$[1],W[2]-$[2])).normalize();nt.z<0&&nt.multiplyScalar(-1);let J=U[2]/45,X=1-nt.z,et=on(U[0]*.12,U[1]*.12,3),it=ye(jt(e.rock_lo,e.rock_hi,Gt(Gt(J)**.7+.25*(et-.5))),.8+.4*et);it=jt(it,e.veg,Gt((9-U[2])/9)*Gt(1-X*2.4)*.85),it=jt(it,e.snow,Re(.55,.78,J+.22*(on(U[0]*.07,U[1]*.07,3)-.5))*Gt(1-X*1.7));let ht=0;for(let F of Z)ht=Math.max(ht,Gt(nt.x*F[0]+nt.y*F[1]+nt.z*F[2]));ht=ht**1.2,it=[it[0]*(e.amb[0]+e.light_col[0]*ht*1.6),it[1]*(e.amb[1]+e.light_col[1]*ht*1.6),it[2]*(e.amb[2]+e.light_col[2]*ht*1.6)];let P=a(Math.cos(N)*Math.cos(.02),Math.sin(N)*Math.cos(.02),Math.sin(.02)).map(F=>Ar(F,e.exposure)*e.haze_gain),E=Math.min(.97,Math.max(0,1-Math.exp(-(S-40)/e.haze_dist)+.5*Math.exp(-Math.max(U[2],0)/9)*Re(55,100,S)));it=jt(it,P,E),it=jt(l(U[0],U[1]),it,Re(46,58,S)).map(Gt),ot[D].push(j.v(U,it))}});for(let S=0;S<tt.length-1;S++)for(let D=0;D<I;D++){let G=(D+1)%I;j.f(ot[S][D],ot[S][G],ot[S+1][G],ot[S+1][D])}let T=Ii({fog:!1,gain:.95});s.add(new Tt(j.geo(),T))}let u=new te,f=new te,m=new te,g=new te,_=new te,d=new te,p=(I,tt,B,j,ot,Z=!0)=>{let T=tt.map(([S,D])=>Array.from({length:B},(G,U)=>{let N=[j[0]+D*Math.cos(2*Math.PI*U/B),j[1]+D*Math.sin(2*Math.PI*U/B),j[2]+S];return I.v(N,ot(N))}));for(let S=0;S<T.length-1;S++)for(let D=0;D<B;D++){let G=(D+1)%B;I.f(T[S][D],T[S][G],T[S+1][G],T[S+1][D])}if(Z){let S=T[T.length-1].map(D=>I.v(I.pos.slice(D*3,D*3+3),I.col.slice(D*3,D*3+3)));I.f(...S)}},M=(I,tt,B,j,ot,Z,T=1,S=[1,1,1])=>{let D=Array.from({length:j},(G,U)=>{let N=2*Math.PI*U/j;return Array.from({length:ot},(W,$)=>{let V=2*Math.PI*$/ot,w=tt+B*Math.cos(V);return I.v([w*Math.cos(N),w*Math.sin(N),Z+B*T*Math.sin(V)],S)})});for(let G=0;G<j;G++)for(let U=0;U<ot;U++){let N=(G+1)%j,W=(U+1)%ot;I.f(D[G][U],D[N][U],D[N][W],D[G][W])}},x=(I,tt,B,j,ot,Z=0)=>{let T=Math.cos(j),S=Math.sin(j),D=new Map,G=(N,W,$)=>{let V=`${N},${W},${$}`,w=D.get(V);w||(w=Z?[r.uniform(-.03,.03),r.uniform(-.03,.03),r.uniform(-.02,.02)]:[0,0,0],D.set(V,w));let nt=N*B[0]+w[0],J=W*B[1]+w[1],X=$*B[2]+w[2];return I.v([tt[0]+nt*T-J*S,tt[1]+nt*S+J*T,tt[2]+X],ot([nt,J,X],$+.5))},U=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let N of U)I.f(...N.map(([W,$,V])=>G(W,$,V)))},b=(I,tt,B,j)=>{let ot=r.uniform(0,50);x(u,I,tt,B,(Z,T)=>h(j,T,Ge(Z[0]*2.5+ot,Z[1]*2.5+Z[2]*1.7)),1)},L=(I,tt,B,j)=>{let ot=r.uniform(0,50);p(u,[[0,I],[B,I]],48,[0,0,tt],Z=>h(j,(Z[2]-tt)/B,Ge(Z[0]*1.2+ot,Z[1]*1.2)))};L(8.2,0,1.4,e.stone[0]),L(7.2,1.4,.5,e.stone[3]),L(6.6,1.9,ss-1.9,e.stone[0]),M(f,6.6,.18,48,6,ss,1,e.stone[3]);let C=28;for(let I=0;I<C;I++){let tt=2*Math.PI*I/C,B=1.4+r.uniform(-.08,.08);b([8.45*Math.cos(tt),8.45*Math.sin(tt),B/2],[1,1.95,B],tt,r.choice(e.stone))}for(let[I,tt]of[[9.8,.9],[11,.55],[12.2,.3]])for(let B=0;B<14;B++){if(r.random()<.2)continue;let j=2*Math.PI*B/14+r.uniform(-.08,.08);b([I*Math.cos(j),I*Math.sin(j),tt/2],[1.3,2.6,tt],j+r.uniform(-.1,.1),r.choice(e.stone))}for(let I of[5.8,4.2,2.6,1.2])M(g,I,.08,48,6,ss+.02,.6);for(let I=0;I<16;I++){let tt=2*Math.PI*I/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(tt),5*Math.sin(tt),ss],()=>[1,1,1])}let A=[],z=Hc(),O=Ii({gain:1.05}),y=[];for(let I of[3,10,17,24]){let tt=2*Math.PI*I/C,B=8.45*Math.cos(tt),j=8.45*Math.sin(tt),ot=1.4;p(f,[[0,.28],[.9,.28]],12,[B,j,ot],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[B,j,ot+.9],()=>e.stone[0]);let Z=new Tt(z,O);Z.position.set(B,j,ot+1.25),s.add(Z),A.push({m:Z,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),y.push({pos:[B,j,ot+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let v=(I,tt,B,j=1.8,ot=1.2)=>{let Z=pe(I),T=tt*Math.cos(Z),S=tt*Math.sin(Z),D=c(T,S)-.4,G=Z-Math.PI/2,U=r.choice(e.stone),N=r.uniform(0,50),W=new Map,$=Math.cos(G),V=Math.sin(G),w=(et,it,ht)=>{let P=`${et},${it},${ht}`,E=W.get(P);E||(E=[r.uniform(-.07,.07),r.uniform(-.07,.07),r.uniform(-.05,.05)],W.set(P,E));let F=et*j,st=it*ot,lt=(ht+.5)*B;if(lt>B*.5){let Et=1-.18*((lt-B*.5)/(B*.5));F*=Et,st*=Et}F+=E[0],st+=E[1];let rt=lt+E[2],wt=.5*Ge(F*2.2+N,rt*.7)+.5*Ge(F*6+N,rt*.25);return u.v([T+F*$-st*V,S+F*V+st*$,D+rt],h(U,rt/B,wt))},nt=4,J=et=>-.5+et/nt,X=et=>{for(let it=0;it<nt;it++)for(let ht=0;ht<nt;ht++)u.f(w(...et(it,ht)),w(...et(it+1,ht)),w(...et(it+1,ht+1)),w(...et(it,ht+1)))};X((et,it)=>[J(et),-.5,J(it)]),X((et,it)=>[J(it),.5,J(et)]),X((et,it)=>[-.5,J(it),J(et)]),X((et,it)=>[.5,J(et),J(it)]),X((et,it)=>[J(it),J(et),.5]),X((et,it)=>[J(et),J(it),-.5]);for(let[et,it,ht]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let E=-ot/2-.02,F=B*et;x(d,[T+0*$-E*V,S+0*V+E*$,D+F],[it,.1,ht],G,()=>[1,1,1])}};for(let[I,tt,B]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])v(I,tt,B),v(I+180,tt,B);for(let I=0;I<12;I++){let tt=pe(r.choice([r.uniform(195,245),r.uniform(295,345)])),B=r.uniform(13,18),j=r.uniform(1,2.2),ot=r.choice(e.stone),Z=r.uniform(0,50),T=B*Math.cos(tt),S=B*Math.sin(tt),D=r.uniform(0,6.28),G=new xn(1,1),U=G.attributes.position,N=new le().compose(new R(T,S,c(T,S)+.3*j),new Qe().setFromAxisAngle(new R(0,0,1),D),new R(j,j*.9,j*.7)),W=new Map;for(let $=0;$<U.count;$+=3)u.f(...[0,1,2].map(V=>{let w=U.getX($+V),nt=U.getY($+V),J=U.getZ($+V),X=`${w.toFixed(3)},${nt.toFixed(3)},${J.toFixed(3)}`,et=W.get(X);et===void 0&&(et=r.uniform(.8,1.2),W.set(X,et));let it=new R(w*et,nt*et,J*et).applyMatrix4(N);return u.v([it.x,it.y,it.z],h(ot,(J+1)/2,Ge(w*2+Z,nt*2+J)))}));G.dispose()}s.add(new Tt(u.geo(),xe())),s.add(new Tt(f.geo(),xe({flat:!1})),new Tt(m.geo(),xe()));let q=new Tt(g.geo(),Xn([1,.92,.75],.75*Math.min(1.6,n)));q.name="centre-pattern",s.add(q,new Tt(_.geo(),Xn([1,.92,.75],.75*Math.min(1.6,n)))),s.add(new Tt(d.geo(),Xn([1,.3,.1],1.1*Math.min(1.4,n))));let k=pe(e.body_az),Q=xe({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),dt=[0,1].map(()=>{let I=e.grass_tip[0],tt=-1,B=to({r,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:ot=>{let Z=1-.55*Gt((ot-13)/34);return[.03*Z,.1*Z,.1*Z]},tip:(ot,Z)=>(ot!==tt&&(tt=ot,I=jt(e.grass_tip[0],e.grass_tip[1],r.random())),ye(jt(I,e.grass_rim,.3*Math.abs(Math.cos(Z-k))*(i==="night"?.5:1)),1-.55*Gt((ot-13)/34)))}),j=new Tt(B,Q);return j.morphTargetInfluences=[0],s.add(j),j});{let I=new te;for(let tt=0;tt<(t?40:70);tt++){let B=14+22*r.random(),j=r.uniform(0,2*Math.PI),ot=B*Math.cos(j),Z=B*Math.sin(j),T=c(ot,Z),S=r.uniform(.35,.7),D=[ot+r.uniform(-.06,.06),Z+r.uniform(-.06,.06),T+S];I.f(I.v([ot-.012,Z,T],[.02,.07,.05]),I.v([ot+.012,Z,T],[.02,.07,.05]),I.v([D[0]+.012,D[1],D[2]],[.08,.25,.12]),I.v([D[0]-.012,D[1],D[2]],[.08,.25,.12]));let G=r.choice(e.flower),U=I.v([D[0],D[1],D[2]+.02],[1,.9,.5]),N=Array.from({length:6},(W,$)=>{let V=2*Math.PI*$/6;return I.v([D[0]+.05*Math.cos(V),D[1]+.05*Math.sin(V),D[2]+.025],G)});for(let W=0;W<6;W++)I.f(U,N[W],N[(W+1)%6])}s.add(new Tt(I.geo(),xe({emit:e.flower_emit,double:!0})))}let K=Ui({r,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let I=r.uniform(0,6.283),tt=r.uniform(4,26);return[tt*Math.cos(I),tt*Math.sin(I),r.uniform(1.5,10)]},move:()=>[r.uniform(-1,1),0,r.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&s.add(K.obj);let ct=Li({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return s.add(ct.group),{group:s,floor:ss,update(I){ct.update(I),dt.forEach((Z,T)=>{Z.morphTargetInfluences[0]=Ln(I,45,0,1,T)});let tt=I%3600,B=Math.floor(tt/8),j=(tt-B*8)/8,ot=j*j*(3-2*j);for(let Z of A){let T=Z.keys[B%450],S=Z.keys[(B+1)%450];Z.m.scale.set(T[0]+(S[0]-T[0])*ot,T[1]+(S[1]-T[1])*ot,T[2]+(S[2]-T[2])*ot)}K.update(I)},key:{dir:In(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,ss+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,ss+.5],color:[1,.5,.2],intensity:.35,dist:8},...y],dispose(){ct.dispose(),Ni(s)}}}var Pu={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function cd(i,t){let e=i==="night"?Pu.NIGHT:i==="day"?{...Hi(Pu.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:Pu.SUNSET,n=e.emit,r=n*.75,s=Sn(21),o=Sn(77),a=new Wt,c=[In(e.body_az,e.body_el)],l=sr(e,c),h=pe(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(U=>Ar(U,e.exposure)),f=e.stone,m=Li({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(U,N)=>{let W=Math.hypot(U,N),$=jt(e.water_lo,e.water_hi,Gt(on(U*.05+2,N*.05,3)*1.2-.15)),V=Math.exp(-(((W-9.9)/3)**2))*.12*.75;return $=[$[0]+e.glow_col[0]*V,$[1]+e.glow_col[1]*V,$[2]+e.glow_col[2]*V],jt($,ye(u,.5),Re(32,150,W)**1.2)},_;{let U=new te(!1,2),N=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],W=t?48:72,$=N.map(w=>Array.from({length:W},(nt,J)=>{let X=w*Math.cos(2*Math.PI*J/W),et=w*Math.sin(2*Math.PI*J/W),it=Re(9,13,w)*Math.exp(-w/90);return U.v([X,et,0],g(X,et),[[0,0,.06*Math.sin(.45*X+.33*et)*it],[0,0,.06*Math.sin(.38*X-.41*et+2)*it]])}));for(let w=0;w<N.length-1;w++)for(let nt=0;nt<W;nt++){let J=(nt+1)%W;U.f($[w][nt],$[w+1][nt],$[w+1][J],$[w][J])}let V=new Ws({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:Jh});_=new Tt(U.geo(),V),_.morphTargetInfluences=[0,0],a.add(_)}let d=[];[.35,.9,1.7].slice(0,t?2:3).forEach((U,N)=>{let W=new te(!0),$=[10.5,12,15,19,24,30,38,48,60],V=48,w=$.map(X=>Array.from({length:V},(et,it)=>{let ht=2*Math.PI*it/V,P=X*Math.cos(ht),E=X*Math.sin(ht),F=e.mist_a*Gt((on(P*.07+N*9,E*.07,3)-.38)*2.6)*Re(0,3,X-10.5)*Re(0,15,60-X);return W.v([P,E,U+.12*Math.sin(.3*P+N)],[...e.mist_col,F])}));for(let X=0;X<$.length-1;X++)for(let et=0;et<V;et++){let it=(et+1)%V;W.f(w[X][et],w[X+1][et],w[X+1][it],w[X][it])}let nt=new rn({vertexColors:!0,transparent:!0,depthWrite:!1,side:De,toneMapped:!1});nt.color.setScalar(1+.7);let J=new Tt(W.geo(),nt);J.renderOrder=3,a.add(J),d.push({m:J,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Cr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let p=new te,M=new te,x=[];for(let U of[45,135,225,315]){let N=pe(U),W=o.uniform(1.6,2.6),$=o.choice(f),V=o.uniform(0,50),w=9.35*Math.cos(N),nt=9.35*Math.sin(N),J=10,X=.3,et=[],it=[],ht=Array.from({length:J},()=>X+W-o.uniform(0,.45));for(let _t=0;_t<J;_t++){let Ut=2*Math.PI*_t/J,yt=o.uniform(-.05,.05),Ct=o.uniform(-.05,.05),Xt=o.uniform(-.05,.05),kt=o.uniform(-.05,.05),At=[w+.62*Math.cos(Ut)+yt,nt+.62*Math.sin(Ut)+Ct,X],Ht=[w+.5*Math.cos(Ut)+Xt,nt+.5*Math.sin(Ut)+kt,ht[_t]];et.push(p.v(At,Di($,0,At[0]-w,At[1]-nt,V,e.moss))),it.push(p.v(Ht,Di($,(Ht[2]-X)/W,Ht[0]-w,Ht[1]-nt,V,e.moss)))}for(let _t=0;_t<J;_t++){let Ut=(_t+1)%J;p.f(et[_t],et[Ut],it[Ut],it[_t])}p.f(...it);let P=w-.55*Math.cos(N),E=nt-.55*Math.sin(N),F=N-Math.PI/2,st=Math.cos(F),lt=Math.sin(F),rt=.06,wt=W*.45/2,Et=.3+W*.5;M.f(...[[-rt,-.03,-wt],[rt,-.03,-wt],[rt,-.03,wt],[-rt,-.03,wt]].map(([_t,Ut,yt])=>M.v([P+_t*st-Ut*lt,E+_t*lt+Ut*st,Et+yt],[1,1,1]))),x.push([w,nt,.3+W])}let b=(U,N,W,$,V,w,nt,J)=>{let X=o.uniform(0,50),et=Math.cos(nt),it=Math.sin(nt),ht=new Map,P=(E,F,st)=>{let lt=E*$+o.uniform(-.03,.03),rt=F*V+o.uniform(-.03,.03),wt=st*w;return p.v([U+lt*et-rt*it,N+lt*it+rt*et,W+wt],Di(J,st+.5,lt,rt,X,e.moss))};for(let E of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...E.map(([F,st,lt])=>P(F,st,lt)))};for(let U of[270,90])for(let N=0;N<5;N++){let W=11+N*1.7+o.uniform(-.2,.2),$=pe(U+o.uniform(-5,5)),V=o.uniform(1.2,1.7);b(W*Math.cos($),W*Math.sin($),-.13,V,V*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(f))}for(let U=0;U<12;U++){let N=o.uniform(0,2*Math.PI);Math.min(Math.abs(ea(N,Math.PI/2)),Math.abs(ea(N,3*Math.PI/2)))<.18&&(N+=.5);let W=o.uniform(10.5,15),$=o.uniform(.7,1.8),V=o.choice(f),w=o.uniform(0,50),nt=o.uniform(0,6.28),J=new xn(1,1),X=J.attributes.position,et=new le().compose(new R(W*Math.cos(N),W*Math.sin(N),.05),new Qe().setFromAxisAngle(new R(0,0,1),nt),new R($,$*.9,$*.7));for(let it=0;it<X.count;it+=3)p.f(...[0,1,2].map(ht=>{let P=new R(X.getX(it+ht),X.getY(it+ht),X.getZ(it+ht)),E=P.z;return P.applyMatrix4(et),p.v([P.x,P.y,P.z],Di(V,(E+1)/2,X.getX(it+ht),X.getY(it+ht),w,e.moss))}));J.dispose()}a.add(new Tt(p.geo(),xe()),new Tt(M.geo(),Xn(e.rune_col,1.4*r)));let L=(()=>{let U=new R(.8,.6,0).normalize();return[U.x,U.y,0]})(),C=pe(e.body_az),A=[Math.cos(C),Math.sin(C)],z=[],O=(U,N,W)=>{for(let $=0;$<300;$++){let V=s.uniform(0,360);if(W&&V>245&&V<295)continue;let w=s.uniform(U,N),nt=w*Math.cos(pe(V)),J=w*Math.sin(pe(V));if(z.every(([X,et])=>Math.hypot(nt-X,J-et)>6))return z.push([nt,J]),[nt,J]}return null},y=xe({morph:!0}),v=[],q=[],k=[],Q=t?6:9,dt=t?4:7;for(let U=0;U<Q+dt;U++){let N=U<Q,W=N?O(16,32,!0):O(38,62,!1);if(!W)continue;let $=N?s.uniform(9,15):s.uniform(16,24),V=N?s.uniform(.28,.42):s.uniform(.5,.8),w=new Tt(K(W[0],W[1],$,V),y);w.morphTargetInfluences=[0],a.add(w),v.push({m:w,P:s.choice([100,120,150,180,200]),flip:s.int(0,1)}),q.push(W),k.push([W[0],W[1],2.2*V+.7])}function K(U,N,W,$){let V=new te(!1,1),w=new R(-U,-N,0).normalize(),nt=s.uniform(.6,1.4),J=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.02,.07)),X=s.uniform(0,6.28),et=_t=>new R(U+J.x*_t+.25*Math.sin(.5*_t+X),N+J.y*_t+.25*Math.cos(.4*_t+X),_t),it=_t=>{let Ut=Math.max(_t,0);return $*(1-.55*Gt(Ut/W))*(1+.7*Math.exp(-Ut/.8))},ht=(_t,Ut,yt=0)=>{let Ct=nt*Gt(Math.max(_t.z,0)/W)**2+yt;return V.v([_t.x,_t.y,_t.z],Ut,[[L[0]*Ct,L[1]*Ct,0]])},P=(_t,Ut)=>{let yt=new R(_t.x,_t.y,0);yt.lengthSq()>1e-12&&yt.normalize();let Ct=jt(e.bark_dark,e.bark_lit,.6*Math.max(0,yt.x*w.x+yt.y*w.y));return Ct=jt(Ct,e.bark_rim,Gt(e.bark_rim_k*Math.max(0,yt.x*A[0]+yt.y*A[1])*(1-.4*Gt(Ut/W)))),jt(Ct,e.moss,Gt(1-Ut/1.8)*.6*Ge(_t.x*3+U,Ut*.8+N))},E=(_t,Ut,yt,Ct,Xt)=>{let kt=_t.length,At=_t.map((ne,at)=>_t[Math.min(at+1,kt-1)].clone().sub(_t[Math.max(at-1,0)]).normalize()),Ht=At[0].clone().cross(Math.abs(At[0].z)>.9?new R(1,0,0):new R(0,0,1)).normalize(),Kt=_t.map((ne,at)=>{let Dt=At[at];Ht=Ht.clone().addScaledVector(Dt,-Ht.dot(Dt)).normalize();let xt=Dt.clone().cross(Ht);return Array.from({length:yt},(Rt,Zt)=>{let Ot=2*Math.PI*Zt/yt,ue=Ht.clone().multiplyScalar(Math.cos(Ot)).addScaledVector(xt,Math.sin(Ot));return ht(ne.clone().addScaledVector(ue,Ut[at]),Ct(at,ue),Xt?Xt(at):0)})});for(let ne=0;ne<kt-1;ne++)for(let at=0;at<yt;at++){let Dt=(at+1)%yt;V.f(Kt[ne][at],Kt[ne][Dt],Kt[ne+1][Dt],Kt[ne+1][at])}},F=11,st=8,lt=Array.from({length:F},(_t,Ut)=>{let yt=-.4+(W+.4)*Ut/(F-1),Ct=et(yt);return Array.from({length:st},(Xt,kt)=>{let At=2*Math.PI*kt/st,Ht=new R(Math.cos(At),Math.sin(At),0);return ht(Ct.clone().addScaledVector(Ht,it(yt)*(1+.06*Math.sin(3*At+yt))),P(Ht,yt))})});for(let _t=0;_t<F-1;_t++)for(let Ut=0;Ut<st;Ut++){let yt=(Ut+1)%st;V.f(lt[_t][Ut],lt[_t][yt],lt[_t+1][yt],lt[_t+1][Ut])}V.f(...lt[F-1]);let rt=[],wt=s.int(3,5);for(let _t=0;_t<wt;_t++){let Ut=W*s.uniform(.42,.9),yt=s.uniform(0,6.28),Ct=new R(Math.cos(yt),Math.sin(yt),0),Xt=et(Ut).addScaledVector(Ct,it(Ut)*.6),kt=Ct.clone().add(new R(0,0,s.uniform(.5,1.1))).normalize(),At=s.uniform(2,5)*(W/12)*(1.1-.5*Ut/W),Ht=Array.from({length:6},(ne,at)=>Xt.clone().addScaledVector(kt,At*(at/5)).add(new R(0,0,-.12*At*(at/5)**2))),Kt=it(Ut)*.4;E(Ht,Ht.map((ne,at)=>Kt*(1-.88*at/5)+.01),5,(ne,at)=>P(at,Ht[ne].z)),rt.push(...Ht.slice(2,5))}let Et=s.int(4,8);for(let _t=0;_t<Et;_t++){let Ut=s.choice(rt),yt=s.uniform(.8,2.2),Ct=s.uniform(0,6.28),Xt=Array.from({length:6},(kt,At)=>Ut.clone().add(new R(.06*Math.sin(Ct+At)*At/5,.06*Math.cos(Ct+At*.8)*At/5,-yt*At/5)));E(Xt,Xt.map((kt,At)=>.022*(1-.8*At/5)+.003),3,kt=>jt(e.vine_a,e.vine_b,kt/5),kt=>.45*(kt/5)**1.5)}return V.geo()}{let U=new te,N=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[W,$,V]of k){let w=N.map(([J,X])=>Array.from({length:14},(et,it)=>{let ht=2*Math.PI*it/14,P=V*J*(1+.12*Math.sin(3*ht+W)),E=[W+P*Math.cos(ht),$+P*Math.sin(ht),X+.05*Math.sin(5*ht+$)];return U.v(E,jt(e.mud,e.moss,Gt(.3+.6*Ge(E[0]*.8,E[1]*.8))))})),nt=U.v([W,$,.52],e.moss);for(let J=0;J<w.length-1;J++)for(let X=0;X<14;X++){let et=(X+1)%14;U.f(w[J][X],w[J][et],w[J+1][et],w[J+1][X])}for(let J=0;J<14;J++)U.f(nt,w[w.length-1][J],w[w.length-1][(J+1)%14])}a.add(new Tt(U.geo(),xe()))}let ct=xe({morph:!0,double:!0}),I=[0,1].map(U=>{let N=new te(!1,1),W=(t?160:300)/2,$=(J,X,et,it,ht)=>Array.from({length:et},(P,E)=>{let F=2*Math.PI*E/et;return N.v([J[0]+X*Math.cos(F),J[1]+X*Math.sin(F),J[2]],it,[[L[0]*ht,L[1]*ht,0]])}),V=(J,X)=>{for(let et=0;et<J.length;et++){let it=(et+1)%J.length;N.f(J[et],J[it],X[it],X[et])}},w=0;for(;w<W;){let J,X;if(q.length&&o.random()<.6){let[rt,wt]=o.choice(q),Et=o.uniform(0,6.283),_t=o.uniform(1,4.5);J=rt+_t*Math.cos(Et),X=wt+_t*Math.sin(Et)}else{let rt=o.uniform(0,6.283),wt=o.uniform(11.5,48);J=wt*Math.cos(rt),X=wt*Math.sin(rt)}if(Math.hypot(J,X)<11)continue;w++;let et=o.uniform(1.2,3),it=o.uniform(-.25,.25)*et*.5,ht=o.uniform(-.25,.25)*et*.5,P=rt=>[J+it*rt*rt,X+ht*rt*rt,-.3+(et+.3)*rt],E=rt=>.12*et*rt*rt,F=[0,.37,.74].map(rt=>$(P(rt),.018-.008*rt,3,e.reed,E(rt)));V(F[0],F[1]),V(F[1],F[2]);let st=[[.75,.012],[.83,.055],[.92,.045]].map(([rt,wt])=>$(P(rt),wt,5,e.cat,E(rt)));V(st[0],st[1]),V(st[1],st[2]);let lt=N.v(P(1),e.cat,[[L[0]*E(1),L[1]*E(1),0]]);for(let rt=0;rt<5;rt++)N.f(st[2][rt],st[2][(rt+1)%5],lt)}let nt=new Tt(N.geo(),ct);return nt.morphTargetInfluences=[0],a.add(nt),nt});{let U=new te;for(let N=0;N<(t?36:60);N++){let W=o.uniform(0,6.283),$=o.uniform(11.5,44),V=$*Math.cos(W),w=$*Math.sin(W),nt=o.uniform(.3,.7),J=o.int(0,11),X=o.choice(e.lily),et=U.v([V,w,.04],X),it=Array.from({length:12},(ht,P)=>{let E=2*Math.PI*P/12;return U.v([V+nt*Math.cos(E),w+nt*.9*Math.sin(E),.04],ye(X,.8))});for(let ht=0;ht<12;ht++)ht!==J&&U.f(et,it[ht],it[(ht+1)%12])}a.add(new Tt(U.geo(),xe({double:!0})))}let tt=new te(!1,1),B=new te;for(let U=0;U<8;U++){let N=o.uniform(0,6.283),W=o.uniform(12,36),$=o.uniform(0,6.283),V=new R(W*Math.cos(N),W*Math.sin(N),.05),w=new le().makeRotationZ($),nt=new xn(1,1),J=nt.attributes.position,X=new le().makeTranslation(V.x,V.y,V.z).multiply(w).multiply(new le().makeScale(.22,.3,.13));for(let et=0;et<J.count;et+=3)B.f(...[0,1,2].map(it=>{let ht=new R(J.getX(et+it),J.getY(et+it),J.getZ(et+it)).applyMatrix4(X);return B.v([ht.x,ht.y,ht.z],[.008,.012,.009])}));nt.dispose();for(let et of[-1,1]){let it=V.clone().add(new R(et*.09,.12,.12).applyMatrix4(w)),P=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(E=>tt.v([it.x+E[0]*.035,it.y+E[1]*.035,it.z+E[2]*.035],[1,1,1],[[0,0,E[2]*.035*(.08-1)]]));for(let[E,F]of[[0,2],[2,1],[1,3],[3,0]])tt.f(P[E],P[F],P[4]),tt.f(P[F],P[E],P[5])}}a.add(new Tt(B.geo(),xe()));let j=new Tt(tt.geo(),Xn(e.eye_col,1.8));j.morphTargetInfluences=[0],a.add(j);let ot=Array.from({length:Math.floor(3480/20)},(U,N)=>60+N*20),Z=[];for(let U=0;U<6;U++)Z.push(ot.splice(o.int(0,ot.length-1),1)[0]);{let U=new te;[[70,46,14,22],[95,58,18,30]].forEach(([N,W,$,V],w)=>{let nt=jt(e.back_col,u,.55+.2*w);for(let J=0;J<W;J++){let X=2*Math.PI*(J+s.uniform(-.4,.4))/W+w*.5,et=[N*Math.cos(X),N*Math.sin(X)],it=[-Math.sin(X),Math.cos(X)],ht=s.uniform($,V),P=s.uniform(.35,.9)*(1+.5*w),E=s.uniform(0,6.28),F=s.uniform(-.06,.06),st=rt=>{let wt=-2+(ht+2)*rt,Et=Math.sin(rt*3+E)*.5+F*wt;return[et[0]+it[0]*Et,et[1]+it[1]*Et,wt]},lt=Array.from({length:6},(rt,wt)=>{let Et=wt/5,_t=P*(1-.5*Et),Ut=jt(nt,u,Gt(Et*Et*.9)),yt=st(Et);return[U.v([yt[0]-it[0]*_t/2,yt[1]-it[1]*_t/2,yt[2]],Ut),U.v([yt[0]+it[0]*_t/2,yt[1]+it[1]*_t/2,yt[2]],Ut)]});for(let rt=0;rt<5;rt++)U.f(lt[rt][0],lt[rt][1],lt[rt+1][1],lt[rt+1][0]);for(let rt of[-1,1]){let wt=st(s.uniform(.55,.8)),Et=[wt[0]+it[0]*rt*ht*.16,wt[1]+it[1]*rt*ht*.16,wt[2]+ht*.12],_t=jt(nt,u,.6);U.f(U.v([wt[0],wt[1],wt[2]-.1],_t),U.v([wt[0],wt[1],wt[2]+.1],_t),U.v([Et[0],Et[1],Et[2]+.04],_t),U.v([Et[0],Et[1],Et[2]-.04],_t))}}}),a.add(new Tt(U.geo(),Ii({fog:!1})))}let T=[];for(let U=0;U<Math.round(14*e.orb_k*(t?.6:1));U++){let N=o.uniform(0,6.283),W=o.uniform(12,42);T.push({p:[W*Math.cos(N),W*Math.sin(N),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[U,N,W]of x)T.push({p:[U,N,W+.9],k:1.4,amp:o.uniform(.15,.4)});let S=Nc({list:T,col:e.orb_col,gain:1.2});a.add(S.group);let D=Ui({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let U=o.uniform(0,6.283),N=o.uniform(4,44);return[N*Math.cos(U),N*Math.sin(U),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(D.obj);let G=new te(!0);return eo(G,9.4,.7,(U,N)=>{let W=Math.hypot(U,N);return W<.01?1:Re(0,3,9.4-W)*(.7+.3*Ge(W*.4,Math.atan2(N,U)*6.4))},e.wash_col,.28*.5),a.add(new Tt(G.geo(),rs())),{group:a,floor:.6,update(U){m.update(U);for(let $ of v)$.m.morphTargetInfluences[0]=Ln(U,$.P/2,.15,1,$.flip);I.forEach(($,V)=>{$.morphTargetInfluences[0]=Ln(U,60,0,1,V)}),_.morphTargetInfluences[0]=Ln(U,90,0,1,0),_.morphTargetInfluences[1]=Ln(U,90,0,1,1);let N=Math.sin(U%3600/3600*Math.PI);for(let $ of d)$.m.rotation.z=$.s*N;let W=0;for(let $ of Z)Math.abs(U%3600-$)<3&&(W=1-Math.abs(U%3600-$)/3);j.morphTargetInfluences[0]=W,S.update(U),D.update(U)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...x.map(U=>({pos:[U[0],U[1],U[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),Ni(a)}}}var Iu={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},Bn=24,Lx=Bn+1.6,Dx=160;function ld(i,t){let e=i==="night"?Iu.NIGHT:i==="day"?{...Hi(Iu.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:Iu.SUNSET,n=e.emit,r=n*.75,s=Sn(31),o=Sn(55),a=new Wt,c=[In(e.body_az,e.body_el)],l=sr(e,c),h=pe(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(B=>Ar(B,e.exposure)),f=pe(e.body_az),m=(()=>{let B=new R(.8,.6,0).normalize();return[B.x,B.y,0]})(),g=e.stone,_=Li({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let d=B=>Lx*(1+.25*(1-Math.exp(B/60))),p=(B,j)=>.12*Math.sin(B*.33)*Math.cos(j*.29)*Re(8,14,Math.hypot(B,j)),M=(B,j)=>jt(jt(e.earth_a,e.earth_b,Gt(on(B*.12+5,j*.12-3,3)*1.4-.2)),e.moss,Gt((Ge(B*.4,j*.4)-.62)*3)*.6);{let B=new te,j=[8,10,12,14,16,18,20,22,Bn-1,Bn,Bn+.6,Bn+1.2,Bn+1.6],ot={[Bn+.6]:.3,[Bn+1.2]:.15,[Bn+1.6]:-.4},Z=72,T=j.map(S=>Array.from({length:Z},(D,G)=>{let U=2*Math.PI*G/Z,N=S*Math.cos(U),W=S*Math.sin(U);return B.v([N,W,ot[S]??p(N,W)],S<=Bn+.01?M(N,W):jt(e.bark,e.moss,.5+.3*Ge(N*.5,W*.5)))}));for(let S=0;S<j.length-1;S++)for(let D=0;D<Z;D++){let G=(D+1)%Z;B.f(T[S][D],T[S+1][D],T[S+1][G],T[S][G])}a.add(new Tt(B.geo(),xe({flat:!1})))}{let B=new te,j=t?28:40,ot=t?48:72,Z=Array.from({length:j},(T,S)=>{let D=-.4-Dx*(S/(j-1))**1.6;return Array.from({length:ot},(G,U)=>{let N=2*Math.PI*U/ot,W=d(D)*(1+.04*Math.sin(14*N+.8*Math.sin(.05*D))+.025*Math.sin(5*N+.02*D)),$=Math.sin(14*N+.8*Math.sin(.05*D)),V=jt(e.bark,e.bark_hi,Gt(.5+.5*$)*.5);V=jt(V,e.bark_hi,.4*Math.max(0,Math.cos(N-f))),V=jt(V,e.moss,Gt(1+D/25)*Gt((Ge(N*3,D*.15)-.4)*2.5)*.8);let w=Math.abs(Math.sin(7*N+1.5*Math.sin(.04*D+3*N)));return V=jt(V,e.vein,Gt(1-w*7)*(.4+.6*Ge(D*.05,N*2))*.9),B.v([W*Math.cos(N),W*Math.sin(N),D],jt(V,ye(u,.6),Gt((-D-15)/110)**1.2))})});for(let T=0;T<j-1;T++)for(let S=0;S<ot;S++){let D=(S+1)%ot;B.f(Z[T][S],Z[T+1][S],Z[T+1][D],Z[T][D])}a.add(new Tt(B.geo(),xe({emit:.3,flat:!1})))}let x=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([B,j],ot)=>{let Z=new te(!0),T=d(B)-.3,S=[T,T+4,T+10,T+20,T+32,T+46,T+64,T+84,T+106,150],D=64,G=S.map(W=>Array.from({length:D},($,V)=>{let w=2*Math.PI*V/D,nt=W*Math.cos(w),J=W*Math.sin(w),X=j*(.55+.45*on(nt*.03+ot*7,J*.03,3))*Re(0,6,W-T);return Z.v([nt,J,B],[...jt(e.sea_col,u,Re(60,150,W)),X])}));for(let W=0;W<S.length-1;W++)for(let $=0;$<D;$++){let V=($+1)%D;Z.f(G[W][$],G[W+1][$],G[W+1][V],G[W][V])}let U=new rn({vertexColors:!0,transparent:!0,depthWrite:!1,side:De,fog:!1,toneMapped:!1});U.color.setScalar(1.7);let N=new Tt(Z.geo(),U);N.renderOrder=2,a.add(N),x.push({m:N,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Cr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let b=new te,L=new te,C=[];for(let B of[0,60,120,180,240,300]){let j=pe(B),ot=12.5,Z=o.uniform(5,8),T=1.8,S=1.2,D=ot*Math.cos(j),G=ot*Math.sin(j),U=-.4,N=j-Math.PI/2,W=Math.cos(N),$=Math.sin(N),V=o.choice(g),w=o.uniform(0,50),nt=new Map,J=(ht,P,E)=>{let F=`${ht},${P},${E}`,st=nt.get(F);st||(st=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],nt.set(F,st));let lt=ht*T,rt=P*S,wt=(E+.5)*Z;if(wt>Z*.5){let _t=1-.18*((wt-Z*.5)/(Z*.5));lt*=_t,rt*=_t}lt+=st[0],rt+=st[1];let Et=wt+st[2];return b.v([D+lt*W-rt*$,G+lt*$+rt*W,U+Et],Di(V,Et/Z,lt,Et*.7,w,e.moss))},X=4,et=ht=>-.5+ht/X,it=ht=>{for(let P=0;P<X;P++)for(let E=0;E<X;E++)b.f(J(...ht(P,E)),J(...ht(P+1,E)),J(...ht(P+1,E+1)),J(...ht(P,E+1)))};it((ht,P)=>[et(ht),-.5,et(P)]),it((ht,P)=>[et(P),.5,et(ht)]),it((ht,P)=>[-.5,et(P),et(ht)]),it((ht,P)=>[.5,et(ht),et(P)]),it((ht,P)=>[et(P),et(ht),.5]);for(let[ht,P,E]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let F=-S/2-.02,st=Z*ht,lt=D-F*$,rt=G+F*W;L.f(...[[-P/2,-E/2],[P/2,-E/2],[P/2,E/2],[-P/2,E/2]].map(([wt,Et])=>L.v([lt+wt*W,rt+wt*$,U+st+Et],[1,1,1])))}C.push([D,G,Z-.4])}a.add(new Tt(b.geo(),xe()),new Tt(L.geo(),Xn(e.rune_col,1.4*r)));let A=(B,j,ot,Z,T,S,D,G,U=!0)=>{let N=Array.from({length:D},($,V)=>{let w=Math.PI/2*V/D,nt=V/D;return Array.from({length:S},(J,X)=>{let et=2*Math.PI*X/S,it=.1*nt*nt*T;return B.v([j[0]+ot*Math.cos(w)*Math.cos(et),j[1]+Z*Math.cos(w)*Math.sin(et),j[2]+T*Math.sin(w)],G(nt,et),U?[[m[0]*it,m[1]*it,0]]:void 0)})}),W=B.v([j[0],j[1],j[2]+T],G(1,0),U?[[m[0]*.1*T,m[1]*.1*T,0]]:void 0);for(let $=0;$<D-1;$++)for(let V=0;V<S;V++){let w=(V+1)%S;B.f(N[$][V],N[$][w],N[$+1][w],N[$+1][V])}for(let $=0;$<S;$++)B.f(N[D-1][$],N[D-1][($+1)%S],W)},z=(B,j,ot,Z,T)=>{let S=new te(!1,1);for(let[G,U,N,W]of B){let $=o.uniform(.85,1.15),V=p(G,U)-.2,w=(nt,J)=>ye(jt(j,ot,Gt(nt*(.75+.25*Math.cos(J-f)))**.9),$);for(let nt=0;nt<W;nt++){let J=o.uniform(0,6.283),X=nt?o.uniform(0,.6)*N:0,et=N*o.uniform(.7,1);A(S,[G+X*Math.cos(J),U+X*Math.sin(J),V],et,et,et*.85,Z,T,w)}}let D=new Tt(S.geo(),xe({flat:!1,morph:!0}));return D.morphTargetInfluences=[0],a.add(D),D},O=[];for(let B=0;O.length<(t?40:70)&&B<3e3;B++){let j=o.uniform(0,2*Math.PI),ot=o.uniform(11.5,Bn-1.5);if(j*180/Math.PI%360>255&&j*180/Math.PI%360<285&&ot>15)continue;let Z=ot*Math.cos(j),T=ot*Math.sin(j);C.some(([S,D])=>Math.hypot(Z-S,T-D)<2.8)||O.push([Z,T,o.uniform(1,2.2),o.int(2,4)])}let y=z(O,e.bush_lo,e.bush_hi,12,3),v=Array.from({length:30},(B,j)=>{let ot=2*Math.PI*(j+o.uniform(-.3,.3))/30,Z=Bn-.6+o.uniform(-.8,.8);return[Z*Math.cos(ot),Z*Math.sin(ot),o.uniform(2,3.5),2]}),q=z(v,e.hedge_lo,e.hedge_hi,16,4);{let B=new te;[62,85,112,140].forEach((j,ot)=>{let Z=1+.25*ot;for(let T=0;T<(t?12:20);T++){let S=2*Math.PI*(T+s.uniform(-.4,.4))/20+ot*.4,D=j+s.uniform(-6,6);for(let G=0;G<2;G++){let U=G?s.uniform(-9,9):0,N=D*Math.cos(S)-U*Math.sin(S),W=D*Math.sin(S)+U*Math.cos(S),$=s.uniform(9,16)*Z*(G?.7:1),V=s.uniform(28,46)*Z*(G?.75:1),w=.35+.15*ot,nt=s.uniform(.85,1.15);A(B,[N,W,-30],$,$,V,14,7,J=>jt(ye(e.can_col,nt),ye(u,.7),Gt(w+.25*J)),!1)}}}),a.add(new Tt(B.geo(),xe({emit:.85,flat:!1})))}let k=[];for(let B=0;B<Math.round(18*e.orb_k*(t?.6:1));B++){let j=o.uniform(0,6.283),ot=10.5+(Bn-8.5)*Math.sqrt(o.random());k.push({p:[ot*Math.cos(j),ot*Math.sin(j),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[B,j,ot]of C)k.push({p:[B,j,ot+.9],k:1.4,amp:o.uniform(.15,.4)});let Q=Nc({list:k,col:e.orb_col,gain:1.2});a.add(Q.group);let dt=Math.round(160*e.fire_k*(t?.5:1)),K=Math.round(40*e.fire_k*(t?.5:1)),ct=0,I=Ui({r:o,n:dt+K,at:()=>{if(ct++<dt){let ot=o.uniform(0,6.283),Z=(Bn+4)*Math.sqrt(o.random());return[Z*Math.cos(ot),Z*Math.sin(ot),.3+8.7*o.random()**1.6]}let B=o.uniform(0,6.283),j=o.uniform(Bn+2,Bn+14);return[j*Math.cos(B),j*Math.sin(B),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});dt+K>0&&a.add(I.obj);let tt=new te(!0);return eo(tt,9.4,.7,(B,j)=>{let ot=Math.hypot(B,j);return ot<.01?1:Re(0,3,9.4-ot)*(.7+.3*Ge(ot*.4,Math.atan2(j,B)*6.4))},e.wash_col,.28*.5),a.add(new Tt(tt.geo(),rs())),{group:a,floor:.6,update(B){_.update(B),y.morphTargetInfluences[0]=Ln(B,60,.15,1,1),q.morphTargetInfluences[0]=Ln(B,90,.15,1,1);let j=Math.sin(B%3600/3600*Math.PI);for(let ot of x)ot.m.rotation.z=ot.s*j;Q.update(B),I.update(B)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...C.slice(0,4).map(B=>({pos:[B[0],B[1],B[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),Ni(a)}}}var Ux={forest:od,plains:ad,swamp:cd,worldtree:ld,castle:sd};function Lu(i,t,e){let n=Ux[i];return n?n(t,e):null}var na=(i,t,e)=>i+(t-i)*e,Nx=new R(0,-1,0),Hx=i=>{let t=i.staffLean??.3;return new R(0,Math.cos(t),Math.sin(t))},Fc=new Qe,hd=new Qe;function Du(i,t,e,n){let r=i.parent;t.updateMatrixWorld(!0);let o=r.worldToLocal(t.localToWorld(e.clone())).sub(i.position).normalize();Fc.setFromUnitVectors(Nx,o),i.quaternion.slerp(Fc,n)}function ud(i,t,e){i.root.updateMatrixWorld(!0),i.staffPivot.parent.getWorldQuaternion(hd).invert(),i.root.getWorldQuaternion(Fc);let r=new Qe().setFromUnitVectors(Hx(i),t.clone().normalize()).premultiply(Fc).premultiply(hd);i.staffPivot.quaternion.slerp(r,e)}var Fx=i=>i*i*(3-2*i);function dd(i,t,e,n){let r=Fx(Math.max(0,Math.min(1,e))),[s,o]=i.legs??[];if((()=>{i.root.position.y=0;for(let u of i.legs??[])u.hip.rotation.set(0,0,0),u.knee.rotation.set(0,0,0);i.staffPivot.rotation.z=Ox(i),i.leftArm&&i.leftArm.rotation.set(ia.x(i),0,ia.z(i))})(),t==="none"||r<=.001)return;let c=Math.sin(n*1.7)*.05,l=u=>{i.root.position.y=(u+c)*r},h=(u=0)=>{Du(i.arm,i.body,new R(.03,1.02+u,.3),r),i.leftArm&&Du(i.leftArm,i.body,new R(-.01,1.24+u,.32),r),ud(i,new R(0,1,.04),r)};if(t==="float")l(.32),s&&(s.hip.rotation.x=-.32*r,s.knee.rotation.x=1.15*r),o&&(o.hip.rotation.x=-.06*r,o.knee.rotation.x=.18*r),i.leftArm&&(i.leftArm.rotation.z=na(ia.z(i),-.55,r));else if(t==="aim"){i.body.rotation.y=na(i.body.rotation.y,-1.2,r),i.head.rotation.y=na(i.head.rotation.y,1.05,r),i.root.updateMatrixWorld(!0);let u=i.body.worldToLocal(i.root.localToWorld(new R(.3,1,2)));Du(i.arm,i.body,u,r),ud(i,new R(0,.12,1),r),i.leftArm&&(i.leftArm.rotation.x=na(ia.x(i),.25,r),i.leftArm.rotation.z=na(ia.z(i),-.35,r)),s&&(s.hip.rotation.x=.22*r),o&&(o.hip.rotation.x=-.2*r)}else t==="twohand"&&h()}var fd=new WeakMap,Oc=i=>{let t=fd.get(i);return t||(t={staffZ:i.staffPivot.rotation.z,leftX:i.leftArm?.rotation.x??-.38,leftZ:i.leftArm?.rotation.z??-.15},fd.set(i,t)),t},Ox=i=>Oc(i).staffZ,ia={x:i=>Oc(i).leftX,z:i=>Oc(i).leftZ};function pd(i){Oc(i)}var Pt=(i,t)=>i+Math.random()*(t-i),Bx=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function io(i,t=!1){let e=new Rn(i);return e.colorSpace=nn,t&&(e.magFilter=Tn,e.minFilter=Tn,e.generateMipmaps=!1),e}function ra(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),io(e)}function md(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let r=0;r<n.length;r++)e.save(),e.rotate(r/n.length*Math.PI*2),e.fillText(n[r],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let r=0;r<=5;r++){let s=r*4*Math.PI/5-Math.PI/2,o=Math.cos(s)*180,a=Math.sin(s)*180;r?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),io(t)}function kx(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),io(e)}function zx(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let r=n*56,s=r+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,s,c,l),t.arc(512,512,Math.max(r,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=io(i);return e.anisotropy=4,e}function Vx(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,r=e?Number(e[2]):20,s=1024/Math.max(n,r),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*s}" height="${r*s}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*s,c.height=r*s,c.getContext("2d").drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(io(c),n/r)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function Gx(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let r=document.createElement("canvas");r.width=2048,r.height=1152;let s=r.getContext("2d");s.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=s.getImageData(0,a,2048,c-a).data,h=0,u=0,f=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],f+=l[g+2],m++;return new Vt(h/m/255,u/m/255,f/m/255).convertSRGBToLinear()};t(io(r),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var Wx={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},Xx=["forest","swamp","worldtree"];function qx(i,t={}){let e,n=!!t.lite;try{e=new ks({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let r=!1,s=()=>r?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(s()),e.toneMapping=Zo,e.toneMappingExposure=1.15;let o=new zs;o.fog=new cc(1709616,20,58);let a=new En(55,16/9,.05,200),c=new R(0,1.75,7.2),l=new R(0,1.45,0);a.position.copy(c),o.add(a);let h=new qs(16777215,2236962,1),u=new tr(16777215,1);o.add(h,u);let f=new _i(16777215,6,9,2);f.position.set(0,3,7.5),o.add(f);let m=new tr(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new Wt;o.add(g);let _=new rn({color:16777215,fog:!1,side:De}),d=new Tt(new be(70,70,66,48,1,!0,Math.PI-.95,1.9),_);d.scale.set(-1,1,1),d.position.set(0,13,6),g.add(d);let p=new Se({color:2767396,roughness:1}),M=new Tt(new Vo(90,48),p);M.rotation.x=-Math.PI/2,M.position.y=-.02,g.add(M);let x=new Se({color:5208634,roughness:.9,flatShading:!0}),b=2600,L=new Vs(new On(.05,.42,3),x,b);{let Y=new le,ut=new Qe,gt=new gn,mt=new R,St=new R,It=new Vt;for(let Ft=0;Ft<b;Ft++){let fe=9.9+Math.pow(Math.random(),.7)*30,oe=Math.random()*Math.PI*2;mt.set(Math.cos(oe)*fe,.18,Math.sin(oe)*fe-1),gt.set(Pt(-.25,.25),Math.random()*3,Pt(-.25,.25)),ut.setFromEuler(gt);let Lt=Pt(.7,1.6);St.set(Lt,Lt*Pt(.8,1.5),Lt),Y.compose(mt,ut,St),L.setMatrixAt(Ft,Y),L.setColorAt(Ft,It.setHSL(Pt(.22,.32),Pt(.35,.6),Pt(.3,.5)))}}g.add(L);let C=new Wt;g.add(C);let A=new Se({color:1981226,roughness:1,flatShading:!0}),z=new Se({color:3811868,roughness:1}),O=new Se({color:6051942,roughness:1,flatShading:!0});function y(Y){C.clear();let ut=Xx.includes(Y),gt=ut?70:34;for(let mt=0;mt<gt;mt++){let St=Pt(Math.PI*1.08,Math.PI*1.92),It=Pt(24,48),Ft=Math.cos(St)*It,fe=Math.sin(St)*It-1;if(ut){let oe=Pt(6,13),Lt=new Wt,vt=new Tt(new be(.25,.4,oe*.3,6),z);vt.position.y=oe*.15,Lt.add(vt);for(let ve=0;ve<3;ve++){let qe=new Tt(new On(oe*(.32-ve*.07),oe*.5,7),A);qe.position.y=oe*(.42+ve*.2),Lt.add(qe)}Lt.position.set(Ft,0,fe),C.add(Lt)}else{let oe=new Tt(new xn(Pt(.8,2.6),0),Math.random()<.5?O:A);oe.position.set(Ft,.3,fe),oe.scale.y=Pt(.5,.9),oe.rotation.y=Math.random()*3,C.add(oe)}}}let v=new Tt(new Vo(9.5,64),new Se({map:zx(),roughness:.92,metalness:.02}));v.rotation.x=-Math.PI/2,g.add(v);let q=new Tt(new An(9.5,.18,8,96),new Se({color:4933206,roughness:.85}));q.rotation.x=Math.PI/2,q.position.y=.05,g.add(q);let k=new Tt(new Qi(9,9),new rn({map:md("#a98bff"),transparent:!0,opacity:.38,blending:hn,depthWrite:!1}));k.rotation.x=-Math.PI/2,k.position.y=.03,k.scale.x=-1,o.add(k);let Q=new Se({color:5919846,roughness:.9}),dt=ra("rgba(255,170,80,1)","rgba(255,120,40,0)"),K=[];for(let Y of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let ut=Y-Math.PI/2,gt=Math.cos(ut)*10.4,mt=Math.sin(ut)*10.4-1.5,St=new Wt,It=new Tt(new be(.42,.5,4.2,10),Q);It.position.y=2.1;let Ft=new Tt(new sn(1.2,.3,1.2),Q);Ft.position.y=4.35;let fe=new Tt(new be(.42,.22,.3,10),new Se({color:2959923,metalness:.6,roughness:.4}));fe.position.y=4.65;let oe=new ei(new $n({map:dt,color:16756832,blending:hn,depthWrite:!1,transparent:!0}));oe.position.y=5.05,oe.scale.set(1.3,1.8,1);let Lt=new _i(16751178,10,14,2);Lt.position.y=5.1,St.add(It,Ft,fe,oe,Lt),St.position.set(gt,0,mt),g.add(St),K.push({light:Lt,flame:oe,base:1,phase:Math.random()*10})}let ct=260,I=new Ee,tt=new Float32Array(ct*3),B=new Float32Array(ct);for(let Y=0;Y<ct;Y++)tt[Y*3]=Pt(-14,14),tt[Y*3+1]=Pt(0,7),tt[Y*3+2]=Pt(-12,6),B[Y]=Math.random()*100;I.setAttribute("position",new Ue(tt,3));let j=new yr({size:.12,map:ra(),transparent:!0,depthWrite:!1,blending:hn,color:16777215,sizeAttenuation:!0});g.add(new xr(I,j));let ot=ra(),Z=ra("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),T=ra("rgba(150,120,255,1)","rgba(120,80,255,0)"),S=new Map;function D(Y,ut){let gt=new Wt,mt=null,St=null,It=null,Ft=1.95;ut.svg?(Ft=4.6,It=new $n({transparent:!0,alphaTest:.05}),St=new ei(It),St.center.set(.5,0),St.scale.set(Ft*1.33,Ft,1),Vx(ut.svg,(vt,ve)=>{It.map=vt,It.needsUpdate=!0,St.scale.set(Ft*ve,Ft,1)}),gt.add(St)):(mt=zf(bu(ut.character??"wizard"),Y==="me"?"me":Y.startsWith("ally:")?"ally":"opp",ot,ut.staff),pd(mt),Ft=mt.height,gt.add(mt.root));let fe=new Tt(new Qi(Ft*.7,Ft*.32),new rn({map:Z,transparent:!0,depthWrite:!1}));if(fe.rotation.x=-Math.PI/2,fe.position.y=.02,gt.add(fe),Y!=="me"){let vt=new Tt(new Qi(Ft*1.1,Ft*1.1),new rn({map:md(Y==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:hn,depthWrite:!1}));vt.rotation.x=-Math.PI/2,vt.position.y=.04,vt.name="circle",gt.add(vt)}let oe=new ei(new $n({map:T,blending:hn,depthWrite:!1,transparent:!0,opacity:0}));oe.scale.set(Ft*1.2,Ft*1.2,1),oe.position.y=Ft*.5,gt.add(oe),o.add(gt);let Lt={key:Y,group:gt,model:mt,sprite:St,spriteMat:It,height:Ft,ko:!1,flame:null,aura:oe,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,eyesFlashUntil:0,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100},pose:$o(ut.pose)?ut.pose:"none",poseK:0,typing:!!ut.bot};return S.set(Y,Lt),Lt}function G(){for(let Y of S.values())o.remove(Y.group),Y.group.traverse(ut=>{let gt=ut;gt.geometry?.dispose?.(),gt.material?.dispose?.()});S.clear()}let U=new Wt;a.add(U);let N=new R(1.08,-.52,-1.6),W=new R(1.14,-.6,-1.6);U.scale.setScalar(.72);let $=N.clone(),V=new Se({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),w=new Se({color:4020950,roughness:.9,flatShading:!0,side:De}),nt=new Se({color:15778970,roughness:.75,flatShading:!0}),J=new Wt;U.add(J);let X=nr("verdant",ot),et="verdant";J.add(X.group);let it=new _i(X.color,.6,4,2);it.position.y=vr,J.add(it);function ht(Y){Y!==et&&(et=Y,J.remove(X.group),X.group.traverse(ut=>{ut.geometry?.dispose?.()}),X=nr(Y,ot),J.add(X.group),it.color.copy(X.color))}{let Y=(St,It,Ft,fe,oe,Lt)=>{let vt=new Tt(St,It);return vt.position.set(fe,oe,Lt),Ft.add(vt),vt},ut=Y(new Mr(.046,.075,4,10),nt,J,.066,-.004,.014);ut.scale.set(.82,1,1.12),ut.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((St,It)=>{let Ft=.05-It*.002,fe=Y(new An(Ft,.019-It*.001,6,14,Math.PI*1.32),nt,J,0,St,0);fe.rotation.x=-Math.PI/2;let oe=Math.PI*1.32;Y(new Ne(.019-It*.001,6,5),nt,J,Math.cos(oe)*Ft,St,-Math.sin(oe)*Ft)}),Y(new Mr(.021,.075,4,8),nt,J,.022,.074,.05).rotation.set(.3,0,1.25);let mt=new Wt;mt.position.set(.09,-.08,.03),mt.rotation.set(-.55,0,.62),U.add(mt),Y(new be(.05,.062,.2,10),nt,mt,0,-.08,0),Y(new be(.1,.16,.95,10,1,!0),w,mt,0,-.6,0),Y(new An(.1,.028,6,14),V,mt,0,-.14,0).rotation.x=Math.PI/2}let P=new Wt;{let Y=(St,It,Ft,fe,oe)=>{let Lt=new Tt(St,It);return Lt.position.set(Ft,fe,oe),P.add(Lt),Lt},ut=Y(new Mr(.046,.075,4,10),nt,-.066,0,.014);ut.scale.set(.82,1,1.12),ut.rotation.set(0,-.25,.08),[.052,.018,-.016,-.048].forEach((St,It)=>{Y(new An(.05-It*.002,.019-It*.001,6,14,Math.PI*1.32),nt,0,St,0).rotation.set(-Math.PI/2,0,Math.PI-Math.PI*.32)});let gt=new Wt;gt.position.set(-.09,-.08,.03),gt.rotation.set(-.5,0,-.75),P.add(gt);let mt=(St,It,Ft)=>{let fe=new Tt(St,It);return fe.position.set(0,Ft,0),gt.add(fe),fe};mt(new be(.05,.062,.2,10),nt,-.08),mt(new be(.1,.16,.95,10,1,!0),w,-.6),mt(new An(.1,.028,6,14),V,-.14).rotation.x=Math.PI/2,P.position.set(0,.26,0),P.visible=!1,J.add(P)}let E=new _i(16777215,1.4,3,2);E.position.set(.3,.3,-.5),a.add(E);let F={wizard:{sleeve:3433416,skin:15916495},witch:{sleeve:8017597,skin:15654104},goblin:{sleeve:8015404,skin:8688447},knight:{sleeve:14077887,skin:14999246},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},st=-1e9,lt="ready",rt=0,wt=900,Et=()=>{lt==="gone"&&(lt="growing",rt=performance.now())},_t=0,Ut=0,yt=null,Ct="none",Xt=0,kt=!1,At=!1,Ht={uTime:{value:0},uAmount:{value:0},uC0:{value:new Vt},uC1:{value:new Vt},uC2:{value:new Vt},uC3:{value:new Vt}},Kt=new Tt(new Qi(1,1),new Kn({uniforms:Ht,transparent:!0,depthWrite:!1,depthTest:!1,blending:hn,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Kt.renderOrder=30,Kt.frustumCulled=!1,a.add(Kt);function ne(){let ut=Math.tan(Ys.degToRad(a.fov/2))*1.2,gt=ut*.55;Kt.scale.set(ut*a.aspect*2.05,gt,1),Kt.position.set(0,-ut+gt/2,-1.2)}function at(Y){let ut={h:0,s:0,l:0};Y.getHSL(ut),Ht.uC0.value.setHSL(ut.h,1,.82),Ht.uC1.value.setHSL(ut.h,1,.6),Ht.uC2.value.setHSL(ut.h,.95,.45),Ht.uC3.value.setHSL((ut.h+.03)%1,.9,.22)}let Dt=new R;function xt(Y,ut="chest"){if(Y==="me")return ut==="staff"||ut==="head"?(X.gem.getWorldPosition(Dt),Dt.clone()):a.localToWorld(new R(Pt(-.15,.15),-.1,-1.4));let gt=S.get(Y);if(!gt)return new R(0,1.4,-3);if(gt.model&&ut==="staff")return gt.model.crystal.getWorldPosition(Dt),Dt.clone();let mt=gt.group.position.clone(),St=gt.height*gt.group.scale.y;return Y==="boss"&&ut==="mouth"?mt.add(new R(-gt.height*.55,gt.height*.62,.3)):mt.add(new R(0,St*(ut==="head"?.85:.6),0))}let Rt=[],Zt=0;function Ot(Y,ut,gt={}){if(n&&Zt++&1)return;let mt=new ei(new $n({map:ot,color:ut,blending:gt.solid?Si:hn,depthWrite:!1,transparent:!0,opacity:gt.opacity??1}));mt.position.copy(Y),mt.scale.setScalar(gt.size??.25),o.add(mt),Rt.push({sprite:mt,vel:gt.vel??new R,life:0,max:gt.life??.6,grow:gt.grow??0,gravity:gt.gravity??0})}function ue(Y,ut,gt=26,mt=3.2,St=.22){for(let It=0;It<gt;It++){let Ft=new R(Pt(-1,1),Pt(-.6,1.2),Pt(-1,1)).normalize().multiplyScalar(Pt(mt*.4,mt));Ot(Y,ut,{vel:Ft,size:Pt(St*.6,St*1.4),life:Pt(.4,.9),gravity:-3})}Ot(Y,ut,{size:.6,grow:6,life:.35,opacity:.9})}function Ke(Y,ut,gt=1){let mt=Y.group.position,St=Y.model?.45:Y.height*.35;for(let It=0;It<gt;It++){let Ft=Y.group.scale.y;Ot(new R(mt.x+Pt(-St,St)*Ft,mt.y+Pt(.05,Y.height*.45)*Ft,mt.z+Pt(-St,St)*.5*Ft),ut,{size:Pt(.35,.7)*Ft,vel:new R(Pt(-.1,.1),Pt(1.4,2.6),0),life:Pt(.35,.65),grow:-.9,opacity:.75,solid:!0}),Ot(new R(mt.x+Pt(-St,St)*.6*Ft,mt.y+Pt(.05,Y.height*.35)*Ft,mt.z),ut,{size:Pt(.3,.5)*Ft,vel:new R(0,Pt(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Ot(new R(mt.x+Pt(-St,St)*Ft,mt.y+Pt(.2,Y.height*.9)*Ft,mt.z),16777215,{size:Pt(.05,.1)*Ft,vel:new R(0,Pt(1.5,3),0),life:.5})}}let dn=[];function Ae(Y){for(let gt=0;gt<2;gt++){let mt=[],St=Y.clone().add(new R(Pt(-1.5,1.5),9,Pt(-1,1)));for(let Ft=0;Ft<=12;Ft++){let fe=St.clone().lerp(Y,Ft/12);Ft>0&&Ft<12&&fe.add(new R(Pt(-.45,.45),Pt(-.2,.2),Pt(-.3,.3))),mt.push(fe)}let It=new dc(new Ee().setFromPoints(mt),new Bo({color:gt?16777215:10475775,transparent:!0,blending:hn,depthWrite:!1}));o.add(It),dn.push({line:It,life:0});for(let Ft=0;Ft<mt.length-1;Ft++){let fe=mt[Ft].distanceTo(mt[Ft+1]);for(let oe=0;oe<fe;oe+=.09)Ot(mt[Ft].clone().lerp(mt[Ft+1],oe/fe),gt?16777215:9425151,{size:gt?.12:.3,life:.28,opacity:gt?1:.7})}}let ut=new _i(12576511,60,16,2);ut.position.copy(Y).add(new R(0,2,1)),o.add(ut),setTimeout(()=>o.remove(ut),160),ue(Y,12576511,30,4,.18)}let pn=[];function kn(Y,ut,gt="#ffd479"){let mt=new ei(new $n({map:kx(ut,gt),transparent:!0,depthWrite:!1,depthTest:!1}));mt.position.copy(xt(Y,"head")).add(new R(Pt(-.3,.3),.4,.3));let St=Y==="me"?.9:1.3;mt.scale.set(St,St/2,1),mt.renderOrder=10,o.add(mt),pn.push({sprite:mt,life:0})}let xi=document.createElement("div");xi.className="arena3d-hit",document.body.append(xi);function Mi(Y="255,40,60",ut=""){xi.style.setProperty("--hit",Y),xi.className="arena3d-hit",xi.offsetWidth,xi.className=`arena3d-hit on ${ut}`}let zn=0,or=Y=>{Bx()||(zn=Math.max(zn,Y))},Jn=[],Pr=new Set,Ir=new Map;function sa(Y){let ut=Ir.get(Y);if(ut)return ut;let gt=document.createElement("canvas");gt.width=gt.height=128;let mt=gt.getContext("2d"),St=mt.createRadialGradient(64,64,0,64,64,64);St.addColorStop(0,"#ffffff"),St.addColorStop(.22,Y),St.addColorStop(.5,`${Y}88`),St.addColorStop(1,`${Y}00`),mt.fillStyle=St,mt.fillRect(0,0,128,128);let It=new Rn(gt);return It.colorSpace=nn,Ir.set(Y,It),It}function os(Y,ut,gt,mt,St,It,Ft=!1){let fe=sa(mt),oe=new ei(new $n({map:fe,transparent:!0,depthWrite:!1,blending:hn}));oe.scale.set(St*.42,St*.42,1),oe.position.copy(Y),oe.renderOrder=5,o.add(oe);let Lt=Ft?Y.clone().lerp(ut,.5).add(new R(ke(.28,Y.clone().lerp(ut,.5).z)-Y.clone().lerp(ut,.5).x,-.15,0)):Y.clone().lerp(ut,.5).add(new R(Pt(-.6,.6),1.2+Y.distanceTo(ut)*.08,0));return new Promise(vt=>Jn.push({sprite:oe,from:Y,to:ut,mid:Lt,t:0,dur:It,color:new Vt(mt),size:St,done:vt,trailAt:0,incoming:Ft}))}let Fi="battle",as="",ro="",He=null,Lr=new Map,H=[],ft=new tr(16777215,1);ft.visible=!1,o.add(ft,ft.target);let Mt=(Y,ut)=>new R(Y[0],Y[2]-ut,-Y[1]);function bt(Y,ut){He&&(o.remove(He.group),t.preview||He.dispose(),He=null);for(let mt of H)o.remove(mt);H.length=0;let gt=`${Y}-${ut}-${n}`;try{He=t.preview&&Lr.get(gt)||Lu(Y,ut,n)}catch(mt){console.warn("3D arena failed, using the classic one",mt),He=null}if(He&&t.preview&&Lr.set(gt,He),g.visible=!He,k.position.y=He?.1:.03,ft.visible=!!He,!He){ro="";return}He.group.rotation.x=-Math.PI/2,He.group.position.y=-He.floor,o.add(He.group),He.group.traverse(mt=>{mt.name==="centre-pattern"&&(mt.visible=!1)});for(let mt of n?He.lights.slice(0,2):He.lights){let St=new _i(new Vt(...mt.color),mt.intensity*8,mt.dist,2);St.position.copy(Mt(mt.pos,He.floor)),St.userData.base=St.intensity,St.userData.flicker=mt.flicker??0,o.add(St),H.push(St)}}function pt(Y){let ut=Y.key.dir;ft.color.setRGB(...Y.key.color),ft.intensity=Y.key.intensity*.35,ft.position.set(ut[0]*50,ut[2]*50,-ut[1]*50),ft.target.position.set(0,0,0),h.color.setRGB(...Y.ambient.sky),h.groundColor.setRGB(...Y.ambient.ground),h.intensity=Y.ambient.intensity,u.intensity=0,m.intensity*=.45,f.intensity*=.5;let gt=o.fog;gt.color.setRGB(...Y.fog.color),gt.near=Y.fog.near,gt.far=Y.fog.far,e.setClearColor(gt.color)}let zt=0,qt=0,Jt=0,$t=new gn,re=new gn,ce=!1,Qt=!1,Ie=new Vt(16777215),Me=null;function ke(Y,ut){let gt=c.z-ut,mt=Math.tan(Ys.degToRad(a.fov/2))*gt;return Y*mt*a.aspect}function Dn(){if(!Me)return;let Y=Me,ut=S.get("opp");ut?.model&&ut.group.scale.setScalar(1.3),ut&&ut.group.position.set(ke(a.aspect<1?.08:Y.layout==="deck"?.36:.46,-2.2),0,-2.2);let gt=S.get("boss");gt&&gt.group.position.set(ke(a.aspect<1?.15:.5,-5.5),0,-5.5),Y.allies.forEach((St,It)=>{let Ft=S.get(`ally:${St.id}`);Ft&&Ft.group.position.set(ke(-.36+It*.13,-.6-It*1.1),0,-.6-It*1.1)});let mt=(gt??ut)?.group.position;for(let[St,It]of S){if(!It.model)continue;let Ft=St==="opp"?c:mt??new R(0,0,-3);It.model.root.rotation.y=Math.atan2(Ft.x-It.group.position.x,Ft.z-It.group.position.z)}}function Ce(Y){Me=Y,Fi=Y.layout,G();let ut=F[bu(Y.me.character??"wizard")]??F.wizard;w.color.set(ut.sleeve),nt.color.set(ut.skin),nt.metalness=Y.me.character==="knight"?.12:0,co(),ht(Y.me.staff??"verdant"),At=!1,U.visible=!0,lt="ready",yt=null,Ht.uAmount.value=0,Kt.visible=!1,Ct=$o(Y.me.pose)?Y.me.pose:"none",Xt=0,Y.opp&&D("opp",Y.opp),Y.boss&&D("boss",Y.boss);for(let gt of Y.allies)D(`ally:${gt.id}`,gt);Dn(),ee(Y)}function ee(Y){let ut=Wx[Y.time];h.color.set(ut.sky),h.groundColor.set(ut.ground),h.intensity=ut.hemi*1.25,m.intensity=Y.time==="night"?1.3:Y.time==="sunset"?1:.7,u.color.set(ut.sun),u.intensity=ut.sunInt,u.position.set(...ut.sunPos),f.intensity=Y.time==="night"?9:5;for(let gt of K)gt.base=ut.torch;j.color.set(ut.motes),Ie=new Vt(ut.spriteTint),as!==Y.bgKey&&(as=Y.bgKey,bt(Y.bgKey.split("-")[0],Y.time)),He?pt(He):ro!==Y.bgKey&&(ro=Y.bgKey,o.fog.near=20,o.fog.far=58,y(Y.bgKey.split("-")[0]),Gx(Y.bgSvg,(gt,mt,St)=>{_.map?.dispose(),_.map=gt,_.needsUpdate=!0,o.fog.color.copy(mt).lerp(St,.35),p.color.copy(mt).multiplyScalar(.9),x.color.copy(mt).lerp(new Vt(5212730),.45).multiplyScalar(1.15),A.color.copy(mt).lerp(new Vt(1522212),.5),e.setClearColor(St)}))}let an=new Nt,me=new Nt,Vn=.32,bi=.13,Le={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},cs=Y=>{Y.pointerType!=="mouse"||Y.buttons||Y.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||an.set(Y.clientX/innerWidth*2-1,Y.clientY/innerHeight*2-1)};addEventListener("pointermove",cs,{passive:!0});let Pe={yaw:0,pitch:0,at:0,live:0},vi=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?-1:1,so=()=>((screen.orientation?.angle??window.orientation??0)%360+360)%360,Un=Y=>{let ut=Y.rotationRate;if(!ut||ut.beta===null||ut.gamma===null||!lo)return;let gt=performance.now(),mt=Pe.at?Math.min(.1,(gt-Pe.at)/1e3):0;Pe.at=gt,Pe.live=gt;let St=so(),It=Y.accelerationIncludingGravity,Ft=It&&It.x!==null&&It.y!==null&&It.z!==null?Math.hypot(It.x,It.y,It.z):0,fe=Ft>4?(ut.beta*It.x+ut.gamma*It.y+(ut.alpha??0)*It.z)/Ft*vi:St===90?ut.beta:St===270?-ut.beta:St===180?-ut.gamma:ut.gamma,oe=St===90?-ut.gamma:St===270?ut.gamma:St===180?-ut.beta:ut.beta,Lt=Math.exp(-mt/2.2);Pe.yaw=(Pe.yaw+fe*mt)*Lt,Pe.pitch=(Pe.pitch+oe*mt)*Lt,an.set(Math.max(-1,Math.min(1,-Pe.yaw/16)),Math.max(-1,Math.min(1,-Pe.pitch/14)))},oo=matchMedia("(pointer: coarse)").matches&&"DeviceMotionEvent"in window,ao=()=>{removeEventListener("touchend",ao);let Y=DeviceMotionEvent;Y.requestPermission&&Y.requestPermission().then(ut=>{ut==="granted"&&addEventListener("devicemotion",Un)}).catch(()=>{})};oo&&(DeviceMotionEvent.requestPermission?addEventListener("touchend",ao,{passive:!0}):addEventListener("devicemotion",Un));function co(){let Y=Fi==="deck"?W:N,ut=Fi==="deck"?.56:.72;if(a.aspect>=1.2){$.copy(Y),U.scale.setScalar(ut);return}let gt=Math.tan(Ys.degToRad(a.fov/2))*-Y.z,mt=gt*a.aspect;$.set(mt*.78,-gt*.62,Y.z),U.scale.setScalar(ut*Math.max(.5,Math.min(1,a.aspect*.9)))}function Dr(){let Y=i.clientWidth||innerWidth,ut=i.clientHeight||innerHeight;e.setSize(Y,ut,!1),a.aspect=Y/ut,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),Dn(),ne(),co()}addEventListener("resize",Dr);let Uu=0,Nu=0,Hu=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!lo||i.clientWidth===Uu&&i.clientHeight===Nu||(Uu=i.clientWidth,Nu=i.clientHeight,Dr())}):null;Hu?.observe(i);let gd=new Vt(6974072),_d=new Vt(16722474),Fu=new Vt(9428223),yd=new Vt(2784511),Ou=new Vt(16738842);function xd(Y,ut){let gt=ut<Y.hurtUntil,mt=ut<Y.frostUntil,St=ut<Y.burnUntil;if(Y.model&&Y.ko){for(let It of Y.model.materials)It.mat.color.copy(It.color).lerp(gd,.55),It.mat.emissive.setRGB(0,0,0);return}if(Y.model){if(mt!==Y.frosted){Y.frosted=mt;for(let It of Y.model.materials)It.mat.opacity=mt?.5:1,It.mat.depthWrite=!mt}for(let It of Y.model.materials)It.mat.color.copy(It.color),mt&&It.mat.color.lerp(Fu,.75),gt?(It.mat.emissive.copy(_d),It.mat.emissiveIntensity=.6):mt?(It.mat.emissive.copy(yd),It.mat.emissiveIntensity=.45):St?(It.mat.color.lerp(Ou,.35),It.mat.emissive.copy(Ou),It.mat.emissiveIntensity=.55+.3*Math.sin(ut/40)):(It.mat.emissive.copy(It.emissive),It.mat.emissiveIntensity=1)}else Y.spriteMat&&(Y.spriteMat.color.copy(gt?new Vt(1,.35,.35):mt?Fu:St?new Vt(1,.7,.5):Ie),Y.spriteMat.opacity=mt?.6:Y.ko?Y.spriteMat.opacity:1)}let lo=!1,Bc=0,ho=performance.now(),Ye=0,kc=!1,Ur=0,oa=0,uo=0,zc=0;function Md(Y){if(r||document.hidden)return;if(zc<45){zc++;return}if(oa++,uo+=Y,uo<2500)return;let ut=oa*1e3/uo;oa=0,uo=0,!(ut>=(n?22:34))&&(n?(r=!0,e.setPixelRatio(s()),Dr()):fo.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(ut),lowRes:r}})))}function Bu(Y){if(Bc=requestAnimationFrame(Bu),!t.preview&&document.body.classList.contains("paused")){ho=Y;return}t.preview||Md(Y-ho);let ut=Math.min(1,Math.max(0,(Y-ho)/1e3)),gt=Math.min(.05,ut);ho=Y,Ye+=gt;let mt=performance.now(),St=!1;me.lerp(an,St?1:performance.now()-Pe.live<300?Math.min(1,ut*14):.05);let It=St?0:Math.sin(Ye*.7)*.025;if(n)a.position.set(c.x+me.x*.12,c.y-me.y*.05+It,c.z),a.lookAt(l.clone().add(new R(me.x*1.5,-me.y*.75,0))),Le.yaw=0,Le.pitch=0;else{Le.yaw=-me.x*Vn,Le.pitch=-me.y*bi,a.position.set(c.x,c.y+It,c.z);let Lt=l.clone().sub(c).applyAxisAngle(new R(0,1,0),Le.yaw),vt=Lt.clone().cross(new R(0,1,0)).normalize();Lt.applyAxisAngle(vt,Le.pitch),a.lookAt(c.clone().add(Lt))}Ur+=((kc?1:0)-Ur)*Math.min(1,gt*4);let Ft=S.get("opp");if(Ur>.001&&Ft){let Lt=Ft.group.position,vt=Ur*Ur*(3-2*Ur);a.position.lerp(new R(Lt.x+1.1,1.75+It,Lt.z+3.4),vt),a.lookAt(new R(0,0,-1).applyQuaternion(a.quaternion).multiplyScalar(4).add(a.position).lerp(new R(Lt.x-.1,1.45,Lt.z),vt))}!t.preview&&lo&&Me&&(Me.opp||Me.allies.length)&&Y-Le.sentAt>150&&(Math.abs(Le.yaw-Le.sentYaw)>.02||Math.abs(Le.pitch-Le.sentPitch)>.02)&&(Le.sentAt=Y,Le.sentYaw=Le.yaw,Le.sentPitch=Le.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+Le.yaw.toFixed(3),pitch:+Le.pitch.toFixed(3)}}))),zn>0&&(a.position.add(new R(Pt(-1,1),Pt(-1,1),0).multiplyScalar(zn)),a.rotation.z+=Pt(-1,1)*zn*.15,zn=Math.max(0,zn-gt*1.1)),qt+=(zt-qt)*Math.min(1,gt*6),Jt=Math.max(0,Jt-gt*2.2),$t.x+=(re.x-$t.x)*Math.min(1,gt*14),$t.y+=(re.y-$t.y)*Math.min(1,gt*14),$t.z+=(re.z-$t.z)*Math.min(1,gt*14),Jt<=0&&re.set(0,0,0);let fe=.5+.5*Math.sin(Ye*6);{let Lt=Math.max(0,1-(mt-st)/380),vt=Lt>0?Math.sin(Lt*Math.PI):0,ve=Math.min(1,qt);_t+=((ve>.05&&!St?Math.min(1,.5+ve*.6):0)-_t)*Math.min(1,gt*3),Ut+=gt*(2.6+ve*1.4);let qe=Math.sin(Ut),jn=Math.sin(Ut*2)/2;U.position.set($.x-me.x*.04+qe*.06*_t,$.y+me.y*.03+(St?0:Math.sin(Ye*1.6)*.008)+ve*.03+jn*.11*_t,$.z-vt*.35),J.rotation.set(ve*.25-vt*.75+$t.x*.3+jn*.18*_t,$t.y*.3,.2-qe*.24*_t+$t.z*.3),Xt+=((yt&&Ct!=="none"&&!At?1:0)-Xt)*Math.min(1,ut*3);let $e=Xt*Xt*(3-2*Xt);if(P.visible=$e>.02&&Ct==="twohand",$e>.001)if(Ct==="float"&&(a.position.y+=.2*$e+Math.sin(Ye*1.7)*.04*$e),Ct==="aim"){U.position.x+=(.12-$.x)*$e,U.position.y+=(-.3-$.y)*$e*.6;let ae=S.has("opp")?xt("opp","chest"):S.has("boss")?xt("boss","chest"):null,Fe=0,qn=-1.35;if(ae){a.updateMatrixWorld(!0);let Oi=a.worldToLocal(ae.clone()).sub(U.position).normalize();Fe=Math.atan2(-Oi.x,-Oi.z),qn=-(Math.PI/2-Math.atan2(Oi.y,Math.hypot(Oi.x,Oi.z)))}let ls=new Qe().setFromAxisAngle(new R(0,1,0),Fe).multiply(new Qe().setFromEuler(new gn(qn,0,.05)));J.quaternion.slerp(ls,$e)}else Ct==="twohand"&&(U.position.x+=(.62-$.x)*$e,U.position.y+=($.y-.12-$.y)*$e,J.rotation.x+=(.05-J.rotation.x)*$e*.8,J.rotation.z+=(0-J.rotation.z)*$e,P.scale.setScalar(Math.max(.01,$e)));let mn=lt==="ready"?1:0;if(lt==="growing"){let ae=Math.min(1,(mt-rt)/wt);if(mn=ae*ae*(3-2*ae),ae>=1)lt="ready";else if(!St){X.gem.getWorldPosition(Dt);for(let Fe=0;Fe<2;Fe++){let qn=Dt.clone().add(new R(Pt(-.4,.4),Pt(-.4,.4),Pt(-.4,.4)));Ot(qn,X.color,{size:Pt(.025,.06),vel:Dt.clone().sub(qn).multiplyScalar(2.8),life:.36})}}}if(X.gem.scale.setScalar(mn),X.gemMat.emissiveIntensity=.7+ve*(1.6+fe*1.2)+vt*3,it.intensity=(.5+ve*4+vt*6)*mn,X.glow.scale.setScalar((.3+ve*(.32+fe*.18)+vt*.6)*mn),X.glow.material.opacity=.3+ve*.35,X.gem.rotation.y+=gt*(.8+ve*6),X.update(Ye,gt,ve),mn>.9&&!St&&U.visible&&(X.gem.getWorldPosition(Dt),_t>.25&&Ot(Dt.clone(),X.color,{size:Pt(.03,.05),life:.55,opacity:.9}),ve>.2&&Math.random()<ve*.8)){let ae=Dt.clone().add(new R(Pt(-.35,.35),Pt(-.35,.35),Pt(-.35,.35)));Ot(ae,X.color.clone().lerp(new Vt(16777215),.4),{size:Pt(.02,.05),vel:Dt.clone().sub(ae).multiplyScalar(2.6),life:.38})}if(yt&&!St&&U.visible)for(let ae=0;ae<2;ae++){let Fe=J.localToWorld(new R(Pt(-.05,.05),Pt(-.15,1.3),Pt(-.05,.05)));Ot(Fe,yt,{size:Pt(.05,.12),vel:new R(Pt(-.05,.05),Pt(.35,.8),0),life:Pt(.25,.45),solid:Math.random()<.4,opacity:.9})}Ht.uTime.value=St?0:Ye,Ht.uAmount.value+=((yt&&!kt&&(U.visible||kc)?1:0)-Ht.uAmount.value)*Math.min(1,ut*3),Kt.visible=Ht.uAmount.value>.01}for(let[Lt,vt]of S){let ve=vt.group.getObjectByName("circle");if(ve&&(ve.rotation.z+=gt*.4),xd(vt,mt),vt.ko)continue;let qe=Math.max(0,vt.lungeUntil-mt)/450;if(vt.model){let ae=vt.model;ae.body.position.y=St?0:Math.sin(Ye*2+vt.height*3)*.02;let Fe=vt.look,qn=mt-Fe.at>4e3,ls=qn?.22*Math.sin(Ye*.31+Fe.seed)*Math.sin(Ye*.13+Fe.seed*2):Fe.yaw,Oi=qn?.06*Math.sin(Ye*.23+Fe.seed*3):Fe.pitch;Fe.curYaw+=(ls-Fe.curYaw)*Math.min(1,gt*7),Fe.curPitch+=(Oi-Fe.curPitch)*Math.min(1,gt*7),ae.head.rotation.set(-Fe.curPitch*.8,Fe.curYaw*.7,0),ae.body.rotation.y=Fe.curYaw*.3;let Nr=1-qe,Hr=qe<=0?0:Nr<.18?-.35*(Nr/.18):Nr<.4?-.35+1.35*((Nr-.18)/.22):1-((Nr-.4)/.6)**2;ae.body.rotation.x=Math.max(0,Hr)*.2,ae.staffPivot.rotation.x=Hr*1.9;let Bi=Lt==="me"?qt:(Lt==="opp"||Lt.startsWith("ally:"))&&ce&&(Fi==="deck"||vt.typing)?Fi==="deck"?.7:.45:0,po=Lt==="me"?0:Bi*(1-Math.max(0,Hr)),vd=-.15-Bi*.75-Math.max(0,Hr)*.9+(Lt==="me"?$t.x:0)+Math.sin(Ye*4.4)*.22*po;ae.arm.rotation.x+=(vd-ae.arm.rotation.x)*Math.min(1,gt*10),ae.arm.rotation.z=oi+(Lt==="me"?$t.z:0)+Math.sin(Ye*2.2)*.32*po,ae.arm.rotation.y=Lt==="me"?$t.y:0;let Fr=Lt==="me"?qt:Bi;ae.crystalMat.emissiveIntensity=1.2+Fr*(3+fe*2)+qe*3,ae.glow.scale.setScalar(.45+Fr*(.5+fe*.3)+qe*.6),ae.glow.material.opacity=.45+Fr*.5,ae.crystal.rotation.y+=gt*(.8+Fr*6),ae.staff.update(Ye,gt,Fr),vt.poseK+=((vt.flame&&vt.pose!=="none"?1:0)-vt.poseK)*Math.min(1,gt*3),vt.pose!=="none"&&dd(ae,vt.pose,vt.poseK,Ye),Fr>.5&&Math.random()<Fr*.6&&(ae.crystal.getWorldPosition(Dt),Ot(Dt.clone().add(new R(Pt(-.1,.1),Pt(-.1,.1),Pt(-.1,.1))),ae.staff.color.getHex(),{size:Pt(.03,.08),vel:new R(Pt(-.2,.2),Pt(.2,.6),0),life:.7}))}else vt.sprite&&(vt.sprite.position.y=St?0:Math.abs(Math.sin(Ye*2))*.05,vt.sprite.position.z=qe*.4);let jn=Lt==="opp"&&ce&&Fi==="deck"||Lt==="boss"&&Qt,$e=vt.aura.material;$e.opacity+=((jn?.55+.2*Math.sin(Ye*5):vt.flame?.35:0)-$e.opacity)*Math.min(1,gt*5),$e.color.copy(Lt==="boss"?new Vt(16742954):vt.flame??new Vt(11832575)),vt.flame&&Ke(vt,vt.flame,2);let mn=vt.model?.eyes;if(mn?.visible){let ae=Math.max(0,vt.eyesFlashUntil-mt)/1400,Fe=1+.25*Math.sin(Ye*7)+ae*3.5;for(let qn of mn.children)qn.isSprite&&qn.scale.setScalar(.06*Fe);!vt.flame&&ae<=0&&(mn.visible=!1)}if(mt<vt.burnUntil&&Ke(vt,Math.random()<.5?16734746:16756784,3),mt<vt.frostUntil&&Math.random()<.3&&Ke(vt,13628159,1),Lt==="boss"&&Qt&&Math.random()<.8){let ae=xt("boss","mouth"),Fe=ae.clone().add(new R(Pt(-1.5,1.5),Pt(-1,1),Pt(-1,1)));Ot(Fe,16751162,{size:.12,vel:ae.clone().sub(Fe).multiplyScalar(1.6),life:.55})}}for(let Lt of K){let vt=.85+.15*Math.sin(Ye*9+Lt.phase)+.08*Math.sin(Ye*23+Lt.phase*2);Lt.light.intensity=Lt.base*vt,Lt.flame.scale.set(1.2*vt,1.8*(.9+.2*vt),1)}if(k.rotation.z+=gt*.05,He){He.update(Ye*30);for(let Lt of H)Lt.userData.flicker&&(Lt.intensity=Lt.userData.base*(1-Lt.userData.flicker*(.5+.5*Math.sin(Ye*9+Lt.position.x)*Math.sin(Ye*23+Lt.position.z))))}let oe=I.attributes.position;for(let Lt=0;Lt<ct;Lt++){let vt=oe.getY(Lt)+gt*(.12+B[Lt]%1*.2);vt>7.5&&(vt=0),oe.setY(Lt,vt),oe.setX(Lt,oe.getX(Lt)+Math.sin(Ye*.5+B[Lt])*gt*.15)}oe.needsUpdate=!0,j.opacity=.55+.35*Math.sin(Ye*1.3);for(let Lt=Jn.length-1;Lt>=0;Lt--){let vt=Jn[Lt];vt.t+=gt/vt.dur;let ve=Math.min(1,vt.t),qe=ve*ve*(1.6-.6*ve),jn=vt.from.clone().lerp(vt.mid,qe),$e=vt.mid.clone().lerp(vt.to,qe);vt.sprite.position.copy(jn.lerp($e,qe)),vt.gem&&(vt.gem.position.copy(vt.sprite.position),vt.gem.rotation.y+=gt*12,vt.gem.rotation.x+=gt*7);let mn=vt.incoming?.55+qe*.25:.55+qe*.8,ae=vt.sprite.material;vt.incoming&&(ae.opacity=1-.75*Math.max(0,Math.min(1,(ve-.35)/.5))),vt.sprite.scale.set(vt.size*.42*mn,vt.size*.42*mn,1),vt.trailAt-=gt,vt.trailAt<=0&&!St&&(vt.trailAt=.016,Ot(vt.sprite.position,vt.color,{size:Pt(.05,.13)*vt.size,life:.35,opacity:.8,vel:new R(Pt(-.3,.3),Pt(-.3,.3),Pt(-.3,.3))})),ve>=1&&(o.remove(vt.sprite),ae.dispose(),vt.gem&&o.remove(vt.gem),Jn.splice(Lt,1),vt.done())}for(let Lt=Rt.length-1;Lt>=0;Lt--){let vt=Rt[Lt];if(vt.life+=gt,vt.life>=vt.max){o.remove(vt.sprite),vt.sprite.material.dispose(),Rt.splice(Lt,1);continue}vt.vel.y+=vt.gravity*gt,vt.sprite.position.addScaledVector(vt.vel,gt),vt.grow&&vt.sprite.scale.multiplyScalar(1+vt.grow*gt),vt.sprite.material.opacity=1-vt.life/vt.max}for(let Lt=dn.length-1;Lt>=0;Lt--){let vt=dn[Lt];vt.life+=gt,vt.line.material.opacity=vt.life<.08||vt.life>.14&&vt.life<.2?1:.15,vt.life>.32&&(o.remove(vt.line),vt.line.geometry.dispose(),vt.line.material.dispose(),dn.splice(Lt,1))}for(let Lt=pn.length-1;Lt>=0;Lt--){let vt=pn[Lt];vt.life+=gt,vt.sprite.position.y+=gt*.8,vt.sprite.material.opacity=Math.min(1,2.2-vt.life*2),vt.life>1.1&&(o.remove(vt.sprite),vt.sprite.material.map?.dispose(),vt.sprite.material.dispose(),pn.splice(Lt,1))}if(e.render(o,a),kt&&Ur>.5){let Lt=a.position.clone(),vt=a.quaternion.clone(),ve=U.visible;a.position.set(c.x,c.y+(a.position.y-c.y)*0,c.z),Ct==="float"&&(a.position.y+=.2*Xt),a.lookAt(l),U.visible=!0,a.updateMatrixWorld(!0);let qe=e.getSize(new Nt),jn=Math.round(qe.x*.42),$e=Math.round(qe.y*.42);e.setScissorTest(!0),e.setViewport(qe.x-jn-8,8,jn,$e),e.setScissor(qe.x-jn-8,8,jn,$e),e.render(o,a),e.setScissorTest(!1),e.setViewport(0,0,qe.x,qe.y),U.visible=ve,a.position.copy(Lt),a.quaternion.copy(vt)}}function bd(Y,ut,gt){let mt=S.get(Y),St=performance.now();ut==="bolt"&&(Ae(mt?xt(Y,"head"):gt),Y==="me"&&Mi("190,230,255","bolt")),ut==="frost"&&(mt&&(mt.frostUntil=St+1100),ue(gt,13628159,30,2.5,.16),Y==="me"&&Mi("140,210,255","frost")),ut==="fire"&&(mt&&(mt.burnUntil=St+1100),ue(gt,16742954,36,3.4,.24),Y==="me"&&Mi("255,120,30","fire"))}let fo={setup:Ce,setActive(Y){Y!==lo&&(lo=Y,i.classList.toggle("on",Y),Y?(Dr(),ho=performance.now(),zc=0,oa=0,uo=0,Bc=requestAnimationFrame(Bu)):cancelAnimationFrame(Bc))},async cast(Y,ut,gt,mt={}){let St=mt.kind??"attack",It=Y==="me"||Y.startsWith("ally:"),Ft=St==="heal"?"#5dffa8":St==="mana"?"#ffd479":mt.fx==="bolt"?"#bfe6ff":mt.fx==="frost"?"#8fdcff":mt.fx==="fire"?"#ff8a3a":It?"#a98bff":"#ff6b6b",fe=S.get(Y);if(fe&&(fe.lungeUntil=performance.now()+450),Y==="me"&&(qt=0,zt=0),St!=="attack"){if(Y==="me"&&lt!=="gone"&&U.visible){st=performance.now(),lt="gone";let ae=new Tt(X.gem.geometry,X.gemMat),Fe=xt("me","staff"),qn=xt("me","chest"),ls=Fe.clone().lerp(qn,.5).add(new R(0,.35,0));ae.position.copy(Fe),ae.scale.setScalar(1.3),o.add(ae);let Oi=performance.now();await new Promise(Nr=>{let Hr=()=>{let Bi=Math.min(1,(performance.now()-Oi)/520),po=Fe.clone().lerp(ls,Bi).lerp(ls.clone().lerp(qn,Bi),Bi);ae.position.copy(po),ae.rotation.y+=.3,ae.scale.setScalar(1.3*(1-Bi*.7)),Math.random()<.8&&Ot(po.clone(),Ft,{size:Pt(.03,.07),life:.35,opacity:.9}),Bi<1?requestAnimationFrame(Hr):(o.remove(ae),Nr())};Hr()})}let mn=xt(Y);for(let ae=0;ae<30;ae++)Ot(mn.clone().add(new R(Pt(-.5,.5),Pt(-.8,.2),Pt(-.3,.3))),Ft,{size:Pt(.08,.2),vel:new R(Pt(-.2,.2),Pt(.8,1.8),0),life:Pt(.6,1.1)});Y==="me"&&Mi(St==="heal"?"80,255,160":"255,212,121"),mt.damage&&kn(Y,`+${mt.damage}`,Ft);return}let oe=xt(Y,Y==="boss"?"mouth":"staff"),Lt=ut==="me"&&U.visible,vt=xt(ut,"chest"),ve=Lt?vt.clone().add(new R(ke(.42,vt.z)-vt.x,-.5,0)):vt,qe=(mt.crit?1.5:1)*1.15,jn=os(oe,ve,gt,Ft,qe,.85,Lt);if(Jn[Jn.length-1].target=ut,Y==="me"){st=performance.now(),lt="gone";let mn=new Tt(X.gem.geometry,X.gemMat);mn.scale.setScalar(1.5),mn.position.copy(oe),o.add(mn),Jn[Jn.length-1].gem=mn}await jn,Lt?ue(ve,Ft,mt.crit?14:8,mt.crit?1.6:1.1,.12):ue(ve,Ft,mt.crit?46:28,mt.crit?4.4:3.2,.2);let $e=S.get(ut);$e&&($e.hurtUntil=performance.now()+450),bd(ut,mt.fx,ve),ut==="me"?(mt.fx||Mi(),or(mt.crit?.16:.09)):or(mt.crit?.07:.035),mt.damage&&kn(ut,`\u2212${mt.damage}${mt.crit?"!":""}`,ut==="me"?"#ff6b81":mt.crit?"#ff9a3a":"#ffd479")},fizzle(Y){let ut=xt(Y,Y==="boss"?"head":"staff");if(Y!=="me")for(let gt=0;gt<14;gt++)Ot(ut,10132136,{size:Pt(.1,.25),vel:new R(Pt(-.6,.6),Pt(.3,1),Pt(-.3,.3)),life:.8,opacity:.6});if(Y==="me"){if(qt=0,lt!=="gone"&&U.visible){X.gem.getWorldPosition(Dt);for(let gt=0;gt<16;gt++)Ot(Dt.clone(),Math.random()<.5?X.color:10132136,{size:Pt(.02,.05),vel:new R(Pt(-.8,.8),Pt(-.2,.9),Pt(-.5,.5)),life:Pt(.4,.7),gravity:-2.5})}lt="gone"}},ko(Y){if(Jn.some(St=>St.target===Y)&&!Pr.has(Y)){Pr.add(Y);let St=performance.now(),It=()=>{if(Jn.some(Ft=>Ft.target===Y)&&performance.now()-St<2500){setTimeout(It,60);return}setTimeout(()=>{Pr.delete(Y),fo.ko(Y)},120)};It();return}if(Pr.has(Y))return;if(Y==="me"){if(At)return;At=!0,yt=null,X.gem.getWorldPosition(Dt),ue(Dt.clone(),10132136,18,1.6,.1),U.visible=!1;return}let ut=S.get(Y);if(!ut||ut.ko)return;ut.ko=!0,ut.flame=null,ut.aura.material.opacity=0;let gt=performance.now(),mt=()=>{let St=Math.min(1,(performance.now()-gt)/700),It=St*St;ut.model?(ut.model.root.rotation.z=Math.PI/2*It,ut.model.root.position.y=.24*It):ut.spriteMat&&(ut.spriteMat.rotation=Math.PI/2*St*-1,ut.spriteMat.opacity=1-St*.6),St<1&&requestAnimationFrame(mt)};mt(),ue(xt(Y),16777215,40,3,.25)},onfire(Y,ut,gt){if(Y==="me"){yt=ut&&!At?new Vt(gt??"#6ee7ff"):null,yt&&at(yt);return}let mt=S.get(Y);mt&&(mt.flame=ut?new Vt(gt??"#6ee7ff"):null),mt?.model?.eyes&&(mt.model.eyes.visible=ut)},setPose(Y,ut){let gt=$o(ut)?ut:"none";if(Y==="me"){Ct=gt;return}let mt=S.get(Y);mt&&(mt.pose=gt)},focusOpp(Y){kc=Y,U.visible=!Y},setInset(Y){kt=Y},prewarm(Y,ut){if(!t.preview)return;let gt=Y.filter(It=>!Lr.has(`${It}-${ut}-${n}`)),mt=It=>(globalThis.requestIdleCallback??(Ft=>setTimeout(Ft,200)))(It,{timeout:2e3}),St=()=>{let It=gt.shift();if(!It)return;let Ft=`${It}-${ut}-${n}`;if(!Lr.has(Ft))try{let fe=Lu(It,ut,n);fe&&Lr.set(Ft,fe)}catch{}mt(St)};mt(St)},setBackground(Y,ut,gt){Me&&(Me={...Me,bgKey:Y,time:ut,bgSvg:gt},ee(Me))},flashEyes(Y){let ut=S.get(Y);ut?.model?.eyes&&(ut.model.eyes.visible=!0,ut.eyesFlashUntil=performance.now()+1400)},channel(Y){zt=Math.max(0,Math.min(1,Y))},twitch(){Et(),Jt=.35,re.set(Pt(-.35,.25),Pt(-.25,.25),Pt(-.3,.3)),Math.random()<.6&&lt==="ready"&&(X.gem.getWorldPosition(Dt),Ot(Dt.clone(),X.color.clone().lerp(new Vt(16777215),.5),{size:Pt(.04,.09),vel:new R(Pt(-.6,.6),Pt(.2,.9),Pt(-.3,.3)),life:.5}))},thrust(){st=performance.now(),X.gem.getWorldPosition(Dt),ue(Dt.clone(),X.color,18,1.6,.08)},oppChannel(Y){ce=Y},typing(Y,ut){let gt=S.get(Y);gt&&(gt.typing=ut)},inhale(Y){Qt=Y},breath(Y,ut){Qt=!1;let gt=xt("boss","mouth");for(let mt=0;mt<160;mt++)setTimeout(()=>{let It=(Y.length?xt(Y[mt%Y.length]):a.localToWorld(new R(0,-.2,-1))).clone().add(new R(Pt(-1.5,1.5),Pt(-.8,.8),0)).sub(gt).normalize().multiplyScalar(Pt(7,11));Ot(gt,Math.random()<.4?16765530:16734746,{size:Pt(.3,.7),vel:It,life:Pt(.6,.9),grow:1.2})},mt*5);setTimeout(()=>{for(let mt of Y){let St=S.get(mt);St&&(St.hurtUntil=performance.now()+500,St.burnUntil=performance.now()+900),kn(mt,`\u2212${ut}`,"#ff9a3a")}Y.includes("me")&&(Mi("255,120,30"),or(.16))},450)},claw(Y,ut){let gt=S.get("boss");gt&&(gt.lungeUntil=performance.now()+450),setTimeout(()=>{let mt=S.get(Y);mt&&(mt.hurtUntil=performance.now()+450),Y==="me"&&(Mi("255,40,60","claw"),or(.13)),kn(Y,`\u2212${ut}`,"#ff6b81")},200)},float:kn,look(Y,ut,gt){let mt=S.get(Y);!mt||!Number.isFinite(ut)||!Number.isFinite(gt)||(mt.look.yaw=Math.max(-Vn,Math.min(Vn,ut)),mt.look.pitch=Math.max(-bi,Math.min(bi,gt)),mt.look.at=performance.now())},setLite(Y){let ut=n!==Y;n=Y,ut&&He&&Me&&(as="",Ce(Me)),e.setPixelRatio(s()),L.count=Y?900:b,I.setDrawRange(0,Y?90:ct),Dr()},dispose(){fo.setActive(!1),Hu?.disconnect(),removeEventListener("pointermove",cs),removeEventListener("devicemotion",Un),removeEventListener("touchend",ao),removeEventListener("resize",Dr),xi.remove(),He&&(He.dispose(),He=null),e.dispose()}};n&&fo.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return X},get gemState(){return lt},scene:o,camera:a,renderer:e}),Dr();try{e.compile(o,a)}catch{}return fo}globalThis.KWArena3D=qx;globalThis.KWStaffPreview=Vf;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
