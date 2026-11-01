"use strict";(()=>{var Md=Object.defineProperty;var bd=(i,t,e)=>t in i?Md(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ke=(i,t,e)=>bd(i,typeof t!="symbol"?t+"":t,e);var vd=0,Fu=1,Ed=2;var Y0=1,wd=2,Wi=3,On=0,Zn=1,Ie=2,pr=0,Ri=1,hn=2,Ou=3,Bu=4,Sd=5,Gr=100,Td=101,Rd=102,Ad=103,Cd=104,Pd=200,Id=201,Ld=202,Dd=203,vl=204,El=205,Ud=206,Nd=207,Hd=208,Fd=209,Od=210,Bd=211,kd=212,zd=213,Vd=214,wl=0,Sl=1,Tl=2,Ds=3,Rl=4,Al=5,Cl=6,Pl=7,Zh=0,Kh=1,Gd=2,mr=0,Wd=1,Xd=2,qd=3,Go=4,Yd=5,Zd=6,Kd=7;var Z0=300,Us=301,Ns=302,Co=303,Il=304,yc=306,qr=1e3,qi=1001,Ll=1002,Tn=1003,$d=1004;var ra=1005;var di=1006,kc=1007;var Xr=1008;var Zi=1009,K0=1010,$0=1011,Po=1012,$h=1013,Yr=1014,Ti=1015,Wo=1016,Jh=1017,jh=1018,Hs=1020,J0=35902,j0=1021,Q0=1022,mi=1023,tf=1024,ef=1025,Ps=1026,Fs=1027,Qh=1028,tu=1029,nf=1030,eu=1031;var nu=1033,Fa=33776,Oa=33777,Ba=33778,ka=33779,Dl=35840,Ul=35841,Nl=35842,Hl=35843,Fl=36196,Ol=37492,Bl=37496,kl=37808,zl=37809,Vl=37810,Gl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,Zl=37816,Kl=37817,$l=37818,Jl=37819,jl=37820,Ql=37821,za=36492,th=36494,eh=36495,rf=36283,nh=36284,ih=36285,rh=36286;var Ga=2300,sh=2301,zc=2302,ku=2400,zu=2401,Vu=2402;var Jd=3200,jd=3201;var iu=0,Qd=1,fr="",nn="srgb",Mr="srgb-linear",ru="display-p3",xc="display-p3-linear",Wa="linear",Ze="srgb",Xa="rec709",qa="p3";var ls=7680;var Gu=519,tp=512,ep=513,np=514,sf=515,ip=516,rp=517,sp=518,op=519,oh=35044;var Wu="300 es",Yi=2e3,Ya=2001,gr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=1234567,Eo=Math.PI/180,Io=180/Math.PI;function Ai(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function Mn(i,t,e){return Math.max(t,Math.min(e,i))}function su(i,t){return(i%t+t)%t}function ap(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function cp(i,t,e){return i!==t?(e-i)/(t-i):0}function wo(i,t,e){return(1-e)*i+e*t}function lp(i,t,e,n){return wo(i,t,1-Math.exp(-e*n))}function hp(i,t=1){return t-Math.abs(su(i,t*2)-t)}function up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function fp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pp(i,t){return i+Math.random()*(t-i)}function mp(i){return i*(.5-Math.random())}function gp(i){i!==void 0&&(Xu=i);let t=Xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _p(i){return i*Eo}function yp(i){return i*Io}function xp(i){return(i&i-1)===0&&i!==0}function Mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vp(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qs={DEG2RAD:Eo,RAD2DEG:Io,generateUUID:Ai,clamp:Mn,euclideanModulo:su,mapLinear:ap,inverseLerp:cp,lerp:wo,damp:lp,pingpong:hp,smoothstep:up,smootherstep:fp,randInt:dp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:_p,radToDeg:yp,isPowerOfTwo:xp,ceilPowerOfTwo:Mp,floorPowerOfTwo:bp,setQuaternionFromProperEuler:vp,normalize:He,denormalize:pi},Ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_e=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],x=r[1],M=r[4],b=r[7],L=r[2],C=r[5],A=r[8];return s[0]=o*_+a*x+c*L,s[3]=o*f+a*M+c*C,s[6]=o*p+a*b+c*A,s[1]=l*_+h*x+u*L,s[4]=l*f+h*M+u*C,s[7]=l*p+h*b+u*A,s[2]=d*_+m*x+g*L,s[5]=d*f+m*M+g*C,s[8]=d*p+m*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=e*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vc.makeScale(t,e)),this}rotate(t){return this.premultiply(Vc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vc=new _e;function of(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ep(){let i=Za("canvas");return i.style.display="block",i}var qu={};function Va(i){i in qu||(qu[i]=!0,console.warn(i))}function wp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Sp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Yu=new _e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zu=new _e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[Mr]:{transfer:Wa,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[nn]:{transfer:Ze,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xc]:{transfer:Wa,primaries:qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Zu),fromReference:i=>i.applyMatrix3(Yu)},[ru]:{transfer:Ze,primaries:qa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zu),fromReference:i=>i.applyMatrix3(Yu).convertLinearToSRGB()}},Rp=new Set([Mr,xc]),Ue={enabled:!0,_workingColorSpace:Mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Rp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=lo[t].toReference,r=lo[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return lo[i].primaries},getTransfer:function(i){return i===fr?Wa:lo[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(lo[t].luminanceCoefficients)}};function Is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,ah=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=Za("canvas")),hs.width=t.width,hs.height=t.height;let n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Za("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Is(e[n]/255)*255):e[n]=Is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ap=0,Ka=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wc(r[o].image)):s.push(Wc(r[o]))}else s=Wc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cp=0,Kn=class i extends gr{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=qi,r=qi,s=di,o=Xr,a=mi,c=Zi,l=i.DEFAULT_ANISOTROPY,h=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ai(),this.name="",this.source=new Ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Z0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qr:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case Ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qr:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case Ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Z0;Kn.DEFAULT_ANISOTROPY=1;var Fe=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,b=(m+1)/2,L=(p+1)/2,C=(h+d)/4,A=(u+_)/4,k=(g+f)/4;return M>b&&M>L?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=C/n,s=A/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=k/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=k/s),this.set(n,r,s,e),this}let x=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ch=class extends gr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Kn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ka(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ki=class extends ch{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$a=class extends Kn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lh=class extends Kn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let L=Math.sqrt(M),C=Math.atan2(L,p*x);f=Math.sin(f*C)/L,a=Math.sin(a*C)/L}let b=a*x;if(c=c*f+d*b,l=l*f+m*b,h=h*f+g*b,u=u*f+_*b,f===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ku.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xc.copy(this).projectOnVector(t),this.sub(Xc)}reflect(t){return this.sub(Xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xc=new R,Ku=new rn,$i=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ho),oa.subVectors(this.max,ho),us.subVectors(t.a,ho),fs.subVectors(t.b,ho),ds.subVectors(t.c,ho),or.subVectors(fs,us),ar.subVectors(ds,fs),Hr.subVectors(us,ds);let e=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Hr.z,Hr.y,or.z,0,-or.x,ar.z,0,-ar.x,Hr.z,0,-Hr.x,-or.y,or.x,0,-ar.y,ar.x,0,-Hr.y,Hr.x,0];return!qc(e,us,fs,ds,oa)||(e=[1,0,0,0,1,0,0,0,1],!qc(e,us,fs,ds,oa))?!1:(aa.crossVectors(or,ar),e=[aa.x,aa.y,aa.z],qc(e,us,fs,ds,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bi=[new R,new R,new R,new R,new R,new R,new R,new R],hi=new R,sa=new $i,us=new R,fs=new R,ds=new R,or=new R,ar=new R,Hr=new R,ho=new R,oa=new R,aa=new R,Fr=new R;function qc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Fr.fromArray(i,s);let a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),c=t.dot(Fr),l=e.dot(Fr),h=n.dot(Fr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Pp=new $i,uo=new R,Yc=new R,Ji=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pp.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uo.subVectors(t,this.center);let e=uo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(uo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uo.copy(t.center).add(Yc)),this.expandByPoint(uo.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ki=new R,Zc=new R,ca=new R,cr=new R,Kc=new R,la=new R,$c=new R,Lo=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Zc.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(Zc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ca),a=cr.dot(this.direction),c=-cr.dot(ca),l=cr.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Zc).addScaledVector(ca,d),m}intersectSphere(t,e){ki.subVectors(t.center,this.origin);let n=ki.dot(this.direction),r=ki.dot(ki)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,n,r,s){Kc.subVectors(e,t),la.subVectors(n,t),$c.crossVectors(Kc,la);let o=this.direction.dot($c),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cr.subVectors(this.origin,t);let c=a*this.direction.dot(la.crossVectors(cr,la));if(c<0)return null;let l=a*this.direction.dot(Kc.cross(cr));if(l<0||c+l>o)return null;let h=-a*cr.dot($c);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f)}set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ip,t,Lp)}lookAt(t,e,n){let r=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),lr.crossVectors(n,jn),lr.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),lr.crossVectors(n,jn)),lr.normalize(),ha.crossVectors(jn,lr),r[0]=lr.x,r[4]=ha.x,r[8]=jn.x,r[1]=lr.y,r[5]=ha.y,r[9]=jn.y,r[2]=lr.z,r[6]=ha.z,r[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],x=n[3],M=n[7],b=n[11],L=n[15],C=r[0],A=r[4],k=r[8],O=r[12],y=r[1],v=r[5],V=r[9],W=r[13],et=r[2],pt=r[6],K=r[10],at=r[14],I=r[3],Q=r[7],B=r[11],j=r[15];return s[0]=o*C+a*y+c*et+l*I,s[4]=o*A+a*v+c*pt+l*Q,s[8]=o*k+a*V+c*K+l*B,s[12]=o*O+a*W+c*at+l*j,s[1]=h*C+u*y+d*et+m*I,s[5]=h*A+u*v+d*pt+m*Q,s[9]=h*k+u*V+d*K+m*B,s[13]=h*O+u*W+d*at+m*j,s[2]=g*C+_*y+f*et+p*I,s[6]=g*A+_*v+f*pt+p*Q,s[10]=g*k+_*V+f*K+p*B,s[14]=g*O+_*W+f*at+p*j,s[3]=x*C+M*y+b*et+L*I,s[7]=x*A+M*v+b*pt+L*Q,s[11]=x*k+M*V+b*K+L*B,s[15]=x*O+M*W+b*at+L*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*m-n*c*m)+_*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],x=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,M=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,b=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,C=e*x+n*M+r*b+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=x*A,t[1]=(_*d*s-u*f*s-_*r*m+n*f*m+u*r*p-n*d*p)*A,t[2]=(a*f*s-_*c*s+_*r*l-n*f*l-a*r*p+n*c*p)*A,t[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*m-n*c*m)*A,t[4]=M*A,t[5]=(h*f*s-g*d*s+g*r*m-e*f*m-h*r*p+e*d*p)*A,t[6]=(g*c*s-o*f*s-g*r*l+e*f*l+o*r*p-e*c*p)*A,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*m+e*c*m)*A,t[8]=b*A,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*A,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*A,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*A,t[12]=L*A,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*f+e*u*f)*A,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*f-e*a*f)*A,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,f=o*u,p=a*u,x=c*l,M=c*h,b=c*u,L=n.x,C=n.y,A=n.z;return r[0]=(1-(_+p))*L,r[1]=(m+b)*L,r[2]=(g-M)*L,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(d+p))*C,r[6]=(f+x)*C,r[7]=0,r[8]=(g+M)*A,r[9]=(f-x)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=ps.set(r[0],r[1],r[2]).length(),o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ui.copy(this);let l=1/s,h=1/o,u=1/a;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,e.setFromRotationMatrix(ui),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Yi){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r),m,g;if(a===Yi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ya)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Yi){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*l,m=(n+r)*h,g,_;if(a===Yi)g=(o+s)*u,_=-2*u;else if(a===Ya)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ps=new R,ui=new le,Ip=new R(0,0,0),Lp=new R(1,1,1),lr=new R,ha=new R,jn=new R,$u=new le,Ju=new rn,vn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $u.makeRotationFromQuaternion(t),this.setFromRotationMatrix($u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Ja=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dp=0,ju=new R,ms=new rn,zi=new le,ua=new R,fo=new R,Up=new R,Np=new rn,Qu=new R(1,0,0),t0=new R(0,1,0),e0=new R(0,0,1),n0={type:"added"},Hp={type:"removed"},gs={type:"childadded",child:null},Jc={type:"childremoved",child:null},un=class i extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new vn,n=new rn,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new _e}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Qu,t)}rotateY(t){return this.rotateOnAxis(t0,t)}rotateZ(t){return this.rotateOnAxis(e0,t)}translateOnAxis(t,e){return ju.copy(t).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qu,t)}translateY(t){return this.translateOnAxis(t0,t)}translateZ(t){return this.translateOnAxis(e0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(fo,ua,this.up):zi.lookAt(ua,fo,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(zi),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(n0),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),Jc.child=t,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(n0),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,t,Up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,Np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};un.DEFAULT_UP=new R(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new R,Vi=new R,jc=new R,Gi=new R,_s=new R,ys=new R,i0=new R,Qc=new R,tl=new R,el=new R,nl=new Fe,il=new Fe,rl=new Fe,dr=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),fi.subVectors(t,e),r.cross(fi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){fi.subVectors(r,e),Vi.subVectors(n,e),jc.subVectors(t,e);let o=fi.dot(fi),a=fi.dot(Vi),c=fi.dot(jc),l=Vi.dot(Vi),h=Vi.dot(jc),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gi.x),c.addScaledVector(o,Gi.y),c.addScaledVector(a,Gi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return nl.setScalar(0),il.setScalar(0),rl.setScalar(0),nl.fromBufferAttribute(t,e),il.fromBufferAttribute(t,n),rl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(nl,s.x),o.addScaledVector(il,s.y),o.addScaledVector(rl,s.z),o}static isFrontFacing(t,e,n,r){return fi.subVectors(n,e),Vi.subVectors(t,e),fi.cross(Vi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),fi.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;_s.subVectors(r,n),ys.subVectors(s,n),Qc.subVectors(t,n);let c=_s.dot(Qc),l=ys.dot(Qc);if(c<=0&&l<=0)return e.copy(n);tl.subVectors(t,r);let h=_s.dot(tl),u=ys.dot(tl);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(_s,o);el.subVectors(t,s);let m=_s.dot(el),g=ys.dot(el);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ys,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return i0.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(i0,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(_s,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},fa={h:0,s:0,l:0};function sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ue.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Ue.workingColorSpace){if(t=su(t,1),e=Mn(e,0,1),n=Mn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=sl(o,s,t+1/3),this.g=sl(o,s,t),this.b=sl(o,s,t-1/3)}return Ue.toWorkingColorSpace(this,r),this}setStyle(t,e=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=Gc(t.r),this.g=Gc(t.g),this.b=Gc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Ue.fromWorkingColorSpace(Fn.copy(this),t),Math.round(Mn(Fn.r*255,0,255))*65536+Math.round(Mn(Fn.g*255,0,255))*256+Math.round(Mn(Fn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Fn.copy(this),e);let n=Fn.r,r=Fn.g,s=Fn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=nn){Ue.fromWorkingColorSpace(Fn.copy(this),t);let e=Fn.r,n=Fn.g,r=Fn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(hr),this.setHSL(hr.h+t,hr.s+e,hr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hr),t.getHSL(fa);let n=wo(hr.h,fa.h,e),r=wo(hr.s,fa.s,e),s=wo(hr.l,fa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Vt;Vt.NAMES=af;var Fp=0,gi=class extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Ri,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=El,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==El&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},sn=class extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ln=new R,da=new Ut,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}};var ja=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qa=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Op=0,ii=new le,ol=new un,xs=new R,Qn=new $i,po=new $i,xn=new R,ve=class i extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(of(t)?Qa:ja)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new _e().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];po.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Qn.min,po.min),Qn.expandByPoint(xn),xn.addVectors(Qn.max,po.max),Qn.expandByPoint(xn)):(Qn.expandByPoint(po.min),Qn.expandByPoint(po.max))}Qn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)xn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(xn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xn.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(t,l),xn.add(xs)),r=Math.max(r,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new R,c[k]=new R;let l=new R,h=new R,u=new R,d=new Ut,m=new Ut,g=new Ut,_=new R,f=new R;function p(k,O,y){l.fromBufferAttribute(n,k),h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,k),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,y),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let v=1/(m.x*g.y-g.x*m.y);isFinite(v)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(v),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(v),a[k].add(_),a[O].add(_),a[y].add(_),c[k].add(f),c[O].add(f),c[y].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let k=0,O=x.length;k<O;++k){let y=x[k],v=y.start,V=y.count;for(let W=v,et=v+V;W<et;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let M=new R,b=new R,L=new R,C=new R;function A(k){L.fromBufferAttribute(r,k),C.copy(L);let O=a[k];M.copy(O),M.sub(L.multiplyScalar(L.dot(O))).normalize(),b.crossVectors(C,O);let v=b.dot(c[k])<0?-1:1;o.setXYZW(k,M.x,M.y,M.z,v)}for(let k=0,O=x.length;k<O;++k){let y=x[k],v=y.start,V=y.count;for(let W=v,et=v+V;W<et;W+=3)A(t.getX(W+0)),A(t.getX(W+1)),A(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new Le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},r0=new le,Or=new Lo,pa=new Ji,s0=new R,ma=new R,ga=new R,_a=new R,al=new R,ya=new R,o0=new R,xa=new R,Rt=class extends un{constructor(t=new ve,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){ya.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(al.fromBufferAttribute(u,t),o?ya.addScaledVector(al,h):ya.addScaledVector(al.sub(e),h))}e.add(ya)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),Or.copy(t.ray).recast(t.near),!(pa.containsPoint(Or.origin)===!1&&(Or.intersectSphere(pa,s0)===null||Or.origin.distanceToSquared(s0)>(t.far-t.near)**2))&&(r0.copy(s).invert(),Or.copy(t.ray).applyMatrix4(r0),!(n.boundingBox!==null&&Or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Or)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],x=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=x,L=M;b<L;b+=3){let C=a.getX(b),A=a.getX(b+1),k=a.getX(b+2);r=Ma(this,p,t,n,l,h,u,C,A,k),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let x=a.getX(f),M=a.getX(f+1),b=a.getX(f+2);r=Ma(this,o,t,n,l,h,u,x,M,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],x=Math.max(f.start,m.start),M=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=x,L=M;b<L;b+=3){let C=b,A=b+1,k=b+2;r=Ma(this,p,t,n,l,h,u,C,A,k),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let x=f,M=f+1,b=f+2;r=Ma(this,o,t,n,l,h,u,x,M,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}};function Bp(i,t,e,n,r,s,o,a){let c;if(t.side===Zn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===On,a),c===null)return null;xa.copy(a),xa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(xa);return l<e.near||l>e.far?null:{distance:l,point:xa.clone(),object:i}}function Ma(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,ma),i.getVertexPosition(c,ga),i.getVertexPosition(l,_a);let h=Bp(i,t,e,n,ma,ga,_a,o0);if(h){let u=new R;dr.getBarycoord(o0,ma,ga,_a,u),r&&(h.uv=dr.getInterpolatedAttribute(r,a,c,l,u,new Ut)),s&&(h.uv1=dr.getInterpolatedAttribute(s,a,c,l,u,new Ut)),o&&(h.normal=dr.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};dr.getNormal(ma,ga,_a,d.normal),h.face=d,h.barycoord=u}return h}var tn=class i extends ve{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,f,p,x,M,b,L,C,A,k,O){let y=b/A,v=L/k,V=b/2,W=L/2,et=C/2,pt=A+1,K=k+1,at=0,I=0,Q=new R;for(let B=0;B<K;B++){let j=B*v-W;for(let ct=0;ct<pt;ct++){let Y=ct*y-V;Q[_]=Y*x,Q[f]=j*M,Q[p]=et,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[f]=0,Q[p]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(ct/A),u.push(1-B/k),at+=1}}for(let B=0;B<k;B++)for(let j=0;j<A;j++){let ct=d+j+pt*B,Y=d+j+pt*(B+1),T=d+(j+1)+pt*(B+1),S=d+(j+1)+pt*B;c.push(ct,Y,S),c.push(Y,T,S),I+=6}a.addGroup(m,I,O),m+=I,d+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Wn(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let r in n)t[r]=n[r]}return t}function kp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}var zp={clone:Os,merge:Wn},Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},tc=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ur=new R,a0=new Ut,c0=new Ut,bn=class extends tc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,e){return this.getViewBounds(t,a0,c0),e.subVectors(c0,a0)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ms=-90,bs=1,hh=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new bn(Ms,bs,t,e);r.layers=this.layers,this.add(r);let s=new bn(Ms,bs,t,e);s.layers=this.layers,this.add(s);let o=new bn(Ms,bs,t,e);o.layers=this.layers,this.add(o);let a=new bn(Ms,bs,t,e);a.layers=this.layers,this.add(a);let c=new bn(Ms,bs,t,e);c.layers=this.layers,this.add(c);let l=new bn(Ms,bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ec=class extends Kn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uh=class extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ec(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:di}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tn(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:pr});s.uniforms.tEquirect.value=e;let o=new Rt(r,s),a=e.minFilter;return e.minFilter===Xr&&(e.minFilter=di),new hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},cl=new R,Wp=new R,Xp=new _e,Xi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=cl.subVectors(n,e).cross(Wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(cl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xp.getNormalMatrix(t),r=this.coplanarPoint(cl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Br=new Ji,ba=new R,Do=class{constructor(t=new Xi,e=new Xi,n=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yi){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],x=r[13],M=r[14],b=r[15];if(n[0].setComponents(c-s,d-l,f-m,b-p).normalize(),n[1].setComponents(c+s,d+l,f+m,b+p).normalize(),n[2].setComponents(c+o,d+h,f+g,b+x).normalize(),n[3].setComponents(c-o,d-h,f-g,b-x).normalize(),n[4].setComponents(c-a,d-u,f-_,b-M).normalize(),e===Yi)n[5].setComponents(c+a,d+u,f+_,b+M).normalize();else if(e===Ya)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(t){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(t.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ba.x=r.normal.x>0?t.max.x:t.min.x,ba.y=r.normal.y>0?t.max.y:t.min.y,ba.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function qp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ji=class i extends ve{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let x=p*d-o;for(let M=0;M<l;M++){let b=M*u-s;g.push(b,-x,0),_.push(0,0,1),f.push(M/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let M=x+l*p,b=x+l*(p+1),L=x+1+l*(p+1),C=x+1+l*p;m.push(M,b,C),m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`
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
}`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
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
#endif`,Xm=`struct PhysicalMaterial {
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
}`,qm=`
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ng=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
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
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,t1=`#define DISTANCE
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
}`,e1=`#define DISTANCE
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
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
}`,s1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,a1=`uniform vec3 diffuse;
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
}`,c1=`#define LAMBERT
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
}`,l1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,u1=`#define MATCAP
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
}`,f1=`#define NORMAL
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
}`,d1=`#define NORMAL
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
}`,p1=`#define PHONG
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
}`,m1=`#define PHONG
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
}`,g1=`#define STANDARD
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
}`,_1=`#define STANDARD
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
}`,y1=`#define TOON
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
}`,x1=`#define TOON
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
}`,M1=`uniform float size;
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
}`,b1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,E1=`uniform vec3 color;
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
}`,w1=`uniform float rotation;
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
}`,S1=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Yp,alphahash_pars_fragment:Zp,alphamap_fragment:Kp,alphamap_pars_fragment:$p,alphatest_fragment:Jp,alphatest_pars_fragment:jp,aomap_fragment:Qp,aomap_pars_fragment:tm,batching_pars_vertex:em,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:rm,bsdfs:sm,iridescence_fragment:om,bumpmap_pars_fragment:am,clipping_planes_fragment:cm,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:um,color_fragment:fm,color_pars_fragment:dm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:ym,displacementmap_pars_vertex:xm,displacementmap_vertex:Mm,emissivemap_fragment:bm,emissivemap_pars_fragment:vm,colorspace_fragment:Em,colorspace_pars_fragment:wm,envmap_fragment:Sm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Rm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Bm,envmap_vertex:Cm,fog_vertex:Pm,fog_pars_vertex:Im,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Fm,lights_pars_begin:Om,lights_toon_fragment:km,lights_toon_pars_fragment:zm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:Zm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:jm,map_fragment:Qm,map_pars_fragment:tg,map_particle_fragment:eg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:rg,morphinstance_vertex:sg,morphcolor_vertex:og,morphnormal_vertex:ag,morphtarget_pars_vertex:cg,morphtarget_vertex:lg,normal_fragment_begin:hg,normal_fragment_maps:ug,normal_pars_fragment:fg,normal_pars_vertex:dg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:yg,iridescence_pars_fragment:xg,opaque_fragment:Mg,packing:bg,premultiplied_alpha_fragment:vg,project_vertex:Eg,dithering_fragment:wg,dithering_pars_fragment:Sg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Cg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Ig,skinbase_vertex:Lg,skinning_pars_vertex:Dg,skinning_vertex:Ug,skinnormal_vertex:Ng,specularmap_fragment:Hg,specularmap_pars_fragment:Fg,tonemapping_fragment:Og,tonemapping_pars_fragment:Bg,transmission_fragment:kg,transmission_pars_fragment:zg,uv_pars_fragment:Vg,uv_pars_vertex:Gg,uv_vertex:Wg,worldpos_vertex:Xg,background_vert:qg,background_frag:Yg,backgroundCube_vert:Zg,backgroundCube_frag:Kg,cube_vert:$g,cube_frag:Jg,depth_vert:jg,depth_frag:Qg,distanceRGBA_vert:t1,distanceRGBA_frag:e1,equirect_vert:n1,equirect_frag:i1,linedashed_vert:r1,linedashed_frag:s1,meshbasic_vert:o1,meshbasic_frag:a1,meshlambert_vert:c1,meshlambert_frag:l1,meshmatcap_vert:h1,meshmatcap_frag:u1,meshnormal_vert:f1,meshnormal_frag:d1,meshphong_vert:p1,meshphong_frag:m1,meshphysical_vert:g1,meshphysical_frag:_1,meshtoon_vert:y1,meshtoon_frag:x1,points_vert:M1,points_frag:b1,shadow_vert:v1,shadow_frag:E1,sprite_vert:w1,sprite_frag:S1},Yt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Si={basic:{uniforms:Wn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Wn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Wn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Wn([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Wn([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Wn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Wn([Yt.points,Yt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Wn([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Wn([Yt.common,Yt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Wn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Wn([Yt.sprite,Yt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Wn([Yt.common,Yt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Wn([Yt.lights,Yt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Si.physical={uniforms:Wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var va={r:0,b:0,g:0},kr=new vn,T1=new le;function R1(i,t,e,n,r,s,o){let a=new Vt(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1,b=g(x);b===null?p(a,c):b&&b.isColor&&(p(b,1),M=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,M){let b=g(M);b&&(b.isCubeTexture||b.mapping===yc)?(h===void 0&&(h=new Rt(new tn(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Os(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),kr.copy(M.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(T1.makeRotationFromEuler(kr)),h.material.toneMapped=Ue.getTransfer(b.colorSpace)!==Ze,(u!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Rt(new ji(2,2),new $n({name:"BackgroundMaterial",uniforms:Os(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ue.getTransfer(b.colorSpace)!==Ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(va,cf(i)),n.buffers.color.setClear(va.r,va.g,va.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:f}}function A1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(y,v,V,W,et){let pt=!1,K=u(W,V,v);s!==K&&(s=K,l(s.object)),pt=m(y,W,V,et),pt&&g(y,W,V,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(pt||o)&&(o=!1,b(y,v,V,W),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,v,V){let W=V.wireframe===!0,et=n[y.id];et===void 0&&(et={},n[y.id]=et);let pt=et[v.id];pt===void 0&&(pt={},et[v.id]=pt);let K=pt[W];return K===void 0&&(K=d(c()),pt[W]=K),K}function d(y){let v=[],V=[],W=[];for(let et=0;et<e;et++)v[et]=0,V[et]=0,W[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:V,attributeDivisors:W,object:y,attributes:{},index:null}}function m(y,v,V,W){let et=s.attributes,pt=v.attributes,K=0,at=V.getAttributes();for(let I in at)if(at[I].location>=0){let B=et[I],j=pt[I];if(j===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;K++}return s.attributesNum!==K||s.index!==W}function g(y,v,V,W){let et={},pt=v.attributes,K=0,at=V.getAttributes();for(let I in at)if(at[I].location>=0){let B=pt[I];B===void 0&&(I==="instanceMatrix"&&y.instanceMatrix&&(B=y.instanceMatrix),I==="instanceColor"&&y.instanceColor&&(B=y.instanceColor));let j={};j.attribute=B,B&&B.data&&(j.data=B.data),et[I]=j,K++}s.attributes=et,s.attributesNum=K,s.index=W}function _(){let y=s.newAttributes;for(let v=0,V=y.length;v<V;v++)y[v]=0}function f(y){p(y,0)}function p(y,v){let V=s.newAttributes,W=s.enabledAttributes,et=s.attributeDivisors;V[y]=1,W[y]===0&&(i.enableVertexAttribArray(y),W[y]=1),et[y]!==v&&(i.vertexAttribDivisor(y,v),et[y]=v)}function x(){let y=s.newAttributes,v=s.enabledAttributes;for(let V=0,W=v.length;V<W;V++)v[V]!==y[V]&&(i.disableVertexAttribArray(V),v[V]=0)}function M(y,v,V,W,et,pt,K){K===!0?i.vertexAttribIPointer(y,v,V,et,pt):i.vertexAttribPointer(y,v,V,W,et,pt)}function b(y,v,V,W){_();let et=W.attributes,pt=V.getAttributes(),K=v.defaultAttributeValues;for(let at in pt){let I=pt[at];if(I.location>=0){let Q=et[at];if(Q===void 0&&(at==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),at==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){let B=Q.normalized,j=Q.itemSize,ct=t.get(Q);if(ct===void 0)continue;let Y=ct.buffer,T=ct.type,S=ct.bytesPerElement,D=T===i.INT||T===i.UNSIGNED_INT||Q.gpuType===$h;if(Q.isInterleavedBufferAttribute){let G=Q.data,H=G.stride,U=Q.offset;if(G.isInstancedInterleavedBuffer){for(let X=0;X<I.locationSize;X++)p(I.location+X,G.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let X=0;X<I.locationSize;X++)f(I.location+X);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let X=0;X<I.locationSize;X++)M(I.location+X,j/I.locationSize,T,B,H*S,(U+j/I.locationSize*X)*S,D)}else{if(Q.isInstancedBufferAttribute){for(let G=0;G<I.locationSize;G++)p(I.location+G,Q.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let G=0;G<I.locationSize;G++)f(I.location+G);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let G=0;G<I.locationSize;G++)M(I.location+G,j/I.locationSize,T,B,j*S,j/I.locationSize*G*S,D)}}else if(K!==void 0){let B=K[at];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(I.location,B);break;case 3:i.vertexAttrib3fv(I.location,B);break;case 4:i.vertexAttrib4fv(I.location,B);break;default:i.vertexAttrib1fv(I.location,B)}}}}x()}function L(){k();for(let y in n){let v=n[y];for(let V in v){let W=v[V];for(let et in W)h(W[et].object),delete W[et];delete v[V]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;let v=n[y.id];for(let V in v){let W=v[V];for(let et in W)h(W[et].object),delete W[et];delete v[V]}delete n[y.id]}function A(y){for(let v in n){let V=n[v];if(V[y.id]===void 0)continue;let W=V[y.id];for(let et in W)h(W[et].object),delete W[et];delete V[y.id]}}function k(){O(),o=!0,s!==r&&(s=r,l(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:k,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:x}}function C1(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function P1(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==mi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let k=A===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Zi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ti&&!k)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:L,maxSamples:C}}function I1(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Xi,a=new _e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{let x=s?0:n,M=x*4,b=p.clippingState||null;c.value=b,b=h(g,d,M,m);for(let L=0;L!==M;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,b=m;M!==_;++M,b+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function L1(i){let t=new WeakMap;function e(o,a){return a===Co?o.mapping=Us:a===Il&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Co||a===Il)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new uh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var nc=class extends tc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},As=4,l0=[.125,.215,.35,.446,.526,.582],Wr=20,ll=new nc,h0=new Vt,hl=null,ul=0,fl=0,dl=!1,Vr=(1+Math.sqrt(5))/2,vs=1/Vr,u0=[new R(-Vr,vs,0),new R(Vr,vs,0),new R(-vs,0,Vr),new R(vs,0,Vr),new R(0,Vr,-vs),new R(0,Vr,vs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],ic=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hl,ul,fl),this._renderer.xr.enabled=dl,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:di,minFilter:di,generateMipmaps:!1,type:Wo,format:mi,colorSpace:Mr,depthBuffer:!1},r=f0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f0(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D1(s)),this._blurMaterial=U1(s,t,e)}return r}_compileMaterial(t){let e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,r){let a=new bn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(h0),h.toneMapping=mr,h.autoClear=!1;let m=new sn({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),g=new Rt(new tn,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(h0),_=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;Ea(r,x*M,p>2?M:0,M,M),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Us||t.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=p0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Ea(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=u0[(r-s-1)%u0.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Rt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wr-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):Wr;f>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Wr}`);let p=[],x=0;for(let A=0;A<Wr;++A){let k=A/_,O=Math.exp(-k*k/2);p.push(O),A===0?x+=O:A<f&&(x+=2*O)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let b=this._sizeLods[r],L=3*b*(r>M-As?r-M+As:0),C=4*(this._cubeSize-b);Ea(e,L,C,3*b,2*b),c.setRenderTarget(e),c.render(u,ll)}};function D1(i){let t=[],e=[],n=[],r=i,s=i-As+1+l0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-As?c=l0[o-i+As-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,x=new Float32Array(_*g*m),M=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let C=0;C<m;C++){let A=C%3*2/3-1,k=C>2?0:-1,O=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];x.set(O,_*g*C),M.set(d,f*g*C);let y=[C,C,C,C,C,C];b.set(y,p*g*C)}let L=new ve;L.setAttribute("position",new Le(x,_)),L.setAttribute("uv",new Le(M,f)),L.setAttribute("faceIndex",new Le(b,p)),t.push(L),r>As&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function f0(i,t,e){let n=new Ki(i,t,e);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function U1(i,t,e){let n=new Float32Array(Wr),r=new R(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ou(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function d0(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function p0(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function N1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Co||c===Il,h=c===Us||c===Ns;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ic(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new ic(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function H1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Va("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function F1(i,t,e,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let x=m.array;_=m.version;for(let M=0,b=x.length;M<b;M+=3){let L=x[M+0],C=x[M+1],A=x[M+2];d.push(L,C,C,A,A,L)}}else if(g!==void 0){let x=g.array;_=g.version;for(let M=0,b=x.length/3-1;M<b;M+=3){let L=M+0,C=M+1,A=M+2;d.push(L,C,C,A,A,L)}}else return;let f=new(of(d)?Qa:ja)(d,1);f.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function O1(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function u(d,m,g,_){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=m[x];for(let x=0;x<_.length;x++)e.update(p,n,_[x])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function B1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function k1(i,t,e){let n=new WeakMap,r=new Fe;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let O=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let b=a.attributes.position.count*M,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*L*4*u),A=new $a(C,b,L,u);A.type=Ti,A.needsUpdate=!0;let k=M*4;for(let y=0;y<u;y++){let v=f[y],V=p[y],W=x[y],et=b*L*4*y;for(let pt=0;pt<v.count;pt++){let K=pt*k;m===!0&&(r.fromBufferAttribute(v,pt),C[et+K+0]=r.x,C[et+K+1]=r.y,C[et+K+2]=r.z,C[et+K+3]=0),g===!0&&(r.fromBufferAttribute(V,pt),C[et+K+4]=r.x,C[et+K+5]=r.y,C[et+K+6]=r.z,C[et+K+7]=0),_===!0&&(r.fromBufferAttribute(W,pt),C[et+K+8]=r.x,C[et+K+9]=r.y,C[et+K+10]=r.z,C[et+K+11]=W.itemSize===4?r.w:1)}}d={count:u,texture:A,size:new Ut(b,L)},n.set(a,d),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function z1(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var rc=class extends Kn{constructor(t,e,n,r,s,o,a,c,l,h=Ps){if(h!==Ps&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=Yr),n===void 0&&h===Fs&&(n=Hs),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},hf=new Kn,m0=new rc(1,1),uf=new $a,ff=new lh,df=new ec,g0=[],_0=[],y0=new Float32Array(16),x0=new Float32Array(9),M0=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=g0[r];if(s===void 0&&(s=new Float32Array(r),g0[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function gn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mc(i,t){let e=_0[t];e===void 0&&(e=new Int32Array(t),_0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function V1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2fv(this.addr,t),gn(e,t)}}function W1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;i.uniform3fv(this.addr,t),gn(e,t)}}function X1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4fv(this.addr,t),gn(e,t)}}function q1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;M0.set(n),i.uniformMatrix2fv(this.addr,!1,M0),gn(e,n)}}function Y1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;x0.set(n),i.uniformMatrix3fv(this.addr,!1,x0),gn(e,n)}}function Z1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;y0.set(n),i.uniformMatrix4fv(this.addr,!1,y0),gn(e,n)}}function K1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2iv(this.addr,t),gn(e,t)}}function J1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3iv(this.addr,t),gn(e,t)}}function j1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4iv(this.addr,t),gn(e,t)}}function Q1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2uiv(this.addr,t),gn(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3uiv(this.addr,t),gn(e,t)}}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4uiv(this.addr,t),gn(e,t)}}function i_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(m0.compareFunction=sf,s=m0):s=hf,e.setTexture2D(t||s,r)}function r_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ff,r)}function s_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||df,r)}function o_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||uf,r)}function a_(i){switch(i){case 5126:return V1;case 35664:return G1;case 35665:return W1;case 35666:return X1;case 35674:return q1;case 35675:return Y1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return $1;case 35668:case 35672:return J1;case 35669:case 35673:return j1;case 5125:return Q1;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(i,t){i.uniform1fv(this.addr,t)}function l_(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function h_(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function u_(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function f_(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function d_(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function p_(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function m_(i,t){i.uniform1iv(this.addr,t)}function g_(i,t){i.uniform2iv(this.addr,t)}function __(i,t){i.uniform3iv(this.addr,t)}function y_(i,t){i.uniform4iv(this.addr,t)}function x_(i,t){i.uniform1uiv(this.addr,t)}function M_(i,t){i.uniform2uiv(this.addr,t)}function b_(i,t){i.uniform3uiv(this.addr,t)}function v_(i,t){i.uniform4uiv(this.addr,t)}function E_(i,t,e){let n=this.cache,r=t.length,s=Mc(e,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||hf,s[o])}function w_(i,t,e){let n=this.cache,r=t.length,s=Mc(e,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ff,s[o])}function S_(i,t,e){let n=this.cache,r=t.length,s=Mc(e,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||df,s[o])}function T_(i,t,e){let n=this.cache,r=t.length,s=Mc(e,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||uf,s[o])}function R_(i){switch(i){case 5126:return c_;case 35664:return l_;case 35665:return h_;case 35666:return u_;case 35674:return f_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return y_;case 5125:return x_;case 36294:return M_;case 36295:return b_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return T_}}var fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=a_(e.type)}},dh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R_(e.type)}},ph=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;function b0(i,t){i.seq.push(t),i.map[t.id]=t}function A_(i,t,e){let n=i.name,r=n.length;for(pl.lastIndex=0;;){let s=pl.exec(n),o=pl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){b0(e,l===void 0?new fh(a,i,t):new dh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ph(a),b0(e,u)),e=u}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);A_(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function v0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var C_=37297,P_=0;function I_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function L_(i){let t=Ue.getPrimaries(Ue.workingColorSpace),e=Ue.getPrimaries(i),n;switch(t===e?n="":t===qa&&e===Xa?n="LinearDisplayP3ToLinearSRGB":t===Xa&&e===qa&&(n="LinearSRGBToLinearDisplayP3"),i){case Mr:case xc:return[n,"LinearTransferOETF"];case nn:case ru:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function E0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+I_(i.getShaderSource(t),o)}else return r}function D_(i,t){let e=L_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function U_(i,t){let e;switch(t){case Wd:e="Linear";break;case Xd:e="Reinhard";break;case qd:e="Cineon";break;case Go:e="ACESFilmic";break;case Zd:e="AgX";break;case Kd:e="Neutral";break;case Yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wa=new R;function N_(){Ue.getLuminanceCoefficients(wa);let i=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function F_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function O_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vo(i){return i!==""}function w0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function S0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(B_,z_)}var k_=new Map;function z_(i,t){let e=ge[t];if(e===void 0){let n=k_.get(t);if(n!==void 0)e=ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mh(e)}var V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T0(i){return i.replace(V_,G_)}function G_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function R0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function W_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Y0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function X_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case yc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ns&&(t="ENVMAP_MODE_REFRACTION"),t}function Y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zh:t="ENVMAP_BLENDING_MULTIPLY";break;case Kh:t="ENVMAP_BLENDING_MIX";break;case Gd:t="ENVMAP_BLENDING_ADD";break}return t}function Z_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function K_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=W_(e),l=X_(e),h=q_(e),u=Y_(e),d=Z_(e),m=H_(e),g=F_(s),_=r.createProgram(),f,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vo).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(f=[R0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[R0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mr?"#define TONE_MAPPING":"",e.toneMapping!==mr?ge.tonemapping_pars_fragment:"",e.toneMapping!==mr?U_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,D_("linearToOutputTexel",e.outputColorSpace),N_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=mh(o),o=w0(o,e),o=S0(o,e),a=mh(a),a=w0(a,e),a=S0(a,e),o=T0(o),a=T0(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=x+f+o,b=x+p+a,L=v0(r,r.VERTEX_SHADER,M),C=v0(r,r.FRAGMENT_SHADER,b);r.attachShader(_,L),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(v){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(_).trim(),W=r.getShaderInfoLog(L).trim(),et=r.getShaderInfoLog(C).trim(),pt=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,C);else{let at=E0(r,L,"vertex"),I=E0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+V+`
`+at+`
`+I)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||et==="")&&(K=!1);K&&(v.diagnostics={runnable:pt,programLog:V,vertexShader:{log:W,prefix:f},fragmentShader:{log:et,prefix:p}})}r.deleteShader(L),r.deleteShader(C),k=new Ls(r,_),O=O_(r,_)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let O;this.getAttributes=function(){return O===void 0&&A(this),O};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,C_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}var $_=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _h(t),e.set(t,n)),n}},_h=class{constructor(t){this.id=$_++,this.code=t,this.usedTimes=0}};function J_(i,t,e,n,r,s,o){let a=new Ja,c=new gh,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,v,V,W,et){let pt=W.fog,K=et.geometry,at=y.isMeshStandardMaterial?W.environment:null,I=(y.isMeshStandardMaterial?e:t).get(y.envMap||at),Q=I&&I.mapping===yc?I.image.height:null,B=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let j=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ct=j!==void 0?j.length:0,Y=0;K.morphAttributes.position!==void 0&&(Y=1),K.morphAttributes.normal!==void 0&&(Y=2),K.morphAttributes.color!==void 0&&(Y=3);let T,S,D,G;if(B){let cn=Si[B];T=cn.vertexShader,S=cn.fragmentShader}else T=y.vertexShader,S=y.fragmentShader,c.update(y),D=c.getVertexShaderID(y),G=c.getFragmentShaderID(y);let H=i.getRenderTarget(),U=et.isInstancedMesh===!0,X=et.isBatchedMesh===!0,J=!!y.map,z=!!y.matcap,w=!!I,it=!!y.aoMap,$=!!y.lightMap,q=!!y.bumpMap,tt=!!y.normalMap,rt=!!y.displacementMap,ht=!!y.emissiveMap,P=!!y.metalnessMap,E=!!y.roughnessMap,F=y.anisotropy>0,ot=y.clearcoat>0,lt=y.dispersion>0,st=y.iridescence>0,wt=y.sheen>0,vt=y.transmission>0,gt=F&&!!y.anisotropyMap,Lt=ot&&!!y.clearcoatMap,yt=ot&&!!y.clearcoatNormalMap,At=ot&&!!y.clearcoatRoughnessMap,Xt=st&&!!y.iridescenceMap,Ht=st&&!!y.iridescenceThicknessMap,Tt=wt&&!!y.sheenColorMap,Ft=wt&&!!y.sheenRoughnessMap,$t=!!y.specularMap,ne=!!y.specularColorMap,nt=!!y.specularIntensityMap,zt=vt&&!!y.transmissionMap,bt=vt&&!!y.thicknessMap,Ct=!!y.gradientMap,Ot=!!y.alphaMap,qt=y.alphaTest>0,me=!!y.alphaHash,We=!!y.extensions,Dn=mr;y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Dn=i.toneMapping);let be={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:T,fragmentShader:S,defines:y.defines,customVertexShaderID:D,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:X,batchingColor:X&&et._colorsTexture!==null,instancing:U,instancingColor:U&&et.instanceColor!==null,instancingMorph:U&&et.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Mr,alphaToCoverage:!!y.alphaToCoverage,map:J,matcap:z,envMap:w,envMapMode:w&&I.mapping,envMapCubeUVHeight:Q,aoMap:it,lightMap:$,bumpMap:q,normalMap:tt,displacementMap:m&&rt,emissiveMap:ht,normalMapObjectSpace:tt&&y.normalMapType===Qd,normalMapTangentSpace:tt&&y.normalMapType===iu,metalnessMap:P,roughnessMap:E,anisotropy:F,anisotropyMap:gt,clearcoat:ot,clearcoatMap:Lt,clearcoatNormalMap:yt,clearcoatRoughnessMap:At,dispersion:lt,iridescence:st,iridescenceMap:Xt,iridescenceThicknessMap:Ht,sheen:wt,sheenColorMap:Tt,sheenRoughnessMap:Ft,specularMap:$t,specularColorMap:ne,specularIntensityMap:nt,transmission:vt,transmissionMap:zt,thicknessMap:bt,gradientMap:Ct,opaque:y.transparent===!1&&y.blending===Ri&&y.alphaToCoverage===!1,alphaMap:Ot,alphaTest:qt,alphaHash:me,combine:y.combine,mapUv:J&&f(y.map.channel),aoMapUv:it&&f(y.aoMap.channel),lightMapUv:$&&f(y.lightMap.channel),bumpMapUv:q&&f(y.bumpMap.channel),normalMapUv:tt&&f(y.normalMap.channel),displacementMapUv:rt&&f(y.displacementMap.channel),emissiveMapUv:ht&&f(y.emissiveMap.channel),metalnessMapUv:P&&f(y.metalnessMap.channel),roughnessMapUv:E&&f(y.roughnessMap.channel),anisotropyMapUv:gt&&f(y.anisotropyMap.channel),clearcoatMapUv:Lt&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:yt&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&f(y.sheenRoughnessMap.channel),specularMapUv:$t&&f(y.specularMap.channel),specularColorMapUv:ne&&f(y.specularColorMap.channel),specularIntensityMapUv:nt&&f(y.specularIntensityMap.channel),transmissionMapUv:zt&&f(y.transmissionMap.channel),thicknessMapUv:bt&&f(y.thicknessMap.channel),alphaMapUv:Ot&&f(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(tt||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!K.attributes.uv&&(J||Ot),fog:!!pt,useFog:y.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:et.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Y,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dn,decodeVideoTexture:J&&y.map.isVideoTexture===!0&&Ue.getTransfer(y.map.colorSpace)===Ze,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ie,flipSided:y.side===Zn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function x(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let V in y.defines)v.push(V),v.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(M(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),y.push(a.mask)}function L(y){let v=_[y.type],V;if(v){let W=Si[v];V=zp.clone(W.uniforms)}else V=y.uniforms;return V}function C(y,v){let V;for(let W=0,et=h.length;W<et;W++){let pt=h[W];if(pt.cacheKey===v){V=pt,++V.usedTimes;break}}return V===void 0&&(V=new K_(i,v,y,s),h.push(V)),V}function A(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function k(y){c.remove(y)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:L,acquireProgram:C,releaseProgram:A,releaseShaderCache:k,programs:h,dispose:O}}function j_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function A0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function C0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,g,_,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Q_),n.length>1&&n.sort(d||A0),r.length>1&&r.sort(d||A0)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function ty(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new C0,i.set(n,[o])):r>=s.length?(o=new C0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Vt};break;case"SpotLight":e={position:new R,direction:new R,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function ny(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var iy=0;function ry(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function sy(i){let t=new ey,e=ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let r=new R,s=new le,o=new le;function a(l){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,x=0,M=0,b=0,L=0,C=0,A=0;l.sort(ry);for(let O=0,y=l.length;O<y;O++){let v=l[O],V=v.color,W=v.intensity,et=v.distance,pt=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=V.r*W,u+=V.g*W,d+=V.b*W;else if(v.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(v.sh.coefficients[K],W);A++}else if(v.isDirectionalLight){let K=t.get(v);if(K.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let at=v.shadow,I=e.get(v);I.shadowIntensity=at.intensity,I.shadowBias=at.bias,I.shadowNormalBias=at.normalBias,I.shadowRadius=at.radius,I.shadowMapSize=at.mapSize,n.directionalShadow[m]=I,n.directionalShadowMap[m]=pt,n.directionalShadowMatrix[m]=v.shadow.matrix,x++}n.directional[m]=K,m++}else if(v.isSpotLight){let K=t.get(v);K.position.setFromMatrixPosition(v.matrixWorld),K.color.copy(V).multiplyScalar(W),K.distance=et,K.coneCos=Math.cos(v.angle),K.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),K.decay=v.decay,n.spot[_]=K;let at=v.shadow;if(v.map&&(n.spotLightMap[L]=v.map,L++,at.updateMatrices(v),v.castShadow&&C++),n.spotLightMatrix[_]=at.matrix,v.castShadow){let I=e.get(v);I.shadowIntensity=at.intensity,I.shadowBias=at.bias,I.shadowNormalBias=at.normalBias,I.shadowRadius=at.radius,I.shadowMapSize=at.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=pt,b++}_++}else if(v.isRectAreaLight){let K=t.get(v);K.color.copy(V).multiplyScalar(W),K.halfWidth.set(v.width*.5,0,0),K.halfHeight.set(0,v.height*.5,0),n.rectArea[f]=K,f++}else if(v.isPointLight){let K=t.get(v);if(K.color.copy(v.color).multiplyScalar(v.intensity),K.distance=v.distance,K.decay=v.decay,v.castShadow){let at=v.shadow,I=e.get(v);I.shadowIntensity=at.intensity,I.shadowBias=at.bias,I.shadowNormalBias=at.normalBias,I.shadowRadius=at.radius,I.shadowMapSize=at.mapSize,I.shadowCameraNear=at.camera.near,I.shadowCameraFar=at.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=pt,n.pointShadowMatrix[g]=v.shadow.matrix,M++}n.point[g]=K,g++}else if(v.isHemisphereLight){let K=t.get(v);K.skyColor.copy(v.color).multiplyScalar(W),K.groundColor.copy(v.groundColor).multiplyScalar(W),n.hemi[p]=K,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Yt.LTC_FLOAT_1,n.rectAreaLTC2=Yt.LTC_FLOAT_2):(n.rectAreaLTC1=Yt.LTC_HALF_1,n.rectAreaLTC2=Yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let k=n.hash;(k.directionalLength!==m||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==f||k.hemiLength!==p||k.numDirectionalShadows!==x||k.numPointShadows!==M||k.numSpotShadows!==b||k.numSpotMaps!==L||k.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,k.directionalLength=m,k.pointLength=g,k.spotLength=_,k.rectAreaLength=f,k.hemiLength=p,k.numDirectionalShadows=x,k.numPointShadows=M,k.numSpotShadows=b,k.numSpotMaps=L,k.numLightProbes=A,n.version=iy++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0,f=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let M=l[p];if(M.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(M.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),m++}else if(M.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(M.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function P0(i){let t=new sy(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function oy(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new P0(i),t.set(r,[a])):s>=o.length?(a=new P0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var yh=class extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xh=class extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
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
}`;function ly(i,t,e){let n=new Do,r=new Ut,s=new Ut,o=new Fe,a=new yh({depthPacking:jd}),c=new xh,l={},h=e.maxTextureSize,u={[On]:Zn,[Zn]:On,[Ie]:Ie},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:ay,fragmentShader:cy}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new ve;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Rt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let p=this.type;this.render=function(C,A,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;let O=i.getRenderTarget(),y=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),V=i.state;V.setBlending(pr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let W=p!==Wi&&this.type===Wi,et=p===Wi&&this.type!==Wi;for(let pt=0,K=C.length;pt<K;pt++){let at=C[pt],I=at.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);let Q=I.getFrameExtents();if(r.multiply(Q),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,I.mapSize.y=s.y)),I.map===null||W===!0||et===!0){let j=this.type!==Wi?{minFilter:Tn,magFilter:Tn}:{};I.map!==null&&I.map.dispose(),I.map=new Ki(r.x,r.y,j),I.map.texture.name=at.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();let B=I.getViewportCount();for(let j=0;j<B;j++){let ct=I.getViewport(j);o.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),V.viewport(o),I.updateMatrices(at,j),n=I.getFrustum(),b(A,k,I.camera,at,this.type)}I.isPointLightShadow!==!0&&this.type===Wi&&x(I,k),I.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(O,y,v)};function x(C,A){let k=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ki(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,k,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,k,m,_,null)}function M(C,A,k,O){let y=null,v=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(v!==void 0)y=v;else if(y=k.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let V=y.uuid,W=A.uuid,et=l[V];et===void 0&&(et={},l[V]=et);let pt=et[W];pt===void 0&&(pt=y.clone(),et[W]=pt,A.addEventListener("dispose",L)),y=pt}if(y.visible=A.visible,y.wireframe=A.wireframe,O===Wi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=i.properties.get(y);V.light=k}return y}function b(C,A,k,O,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Wi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let W=t.update(C),et=C.material;if(Array.isArray(et)){let pt=W.groups;for(let K=0,at=pt.length;K<at;K++){let I=pt[K],Q=et[I.materialIndex];if(Q&&Q.visible){let B=M(C,Q,O,y);C.onBeforeShadow(i,C,A,k,W,B,I),i.renderBufferDirect(k,null,W,B,C,I),C.onAfterShadow(i,C,A,k,W,B,I)}}}else if(et.visible){let pt=M(C,et,O,y);C.onBeforeShadow(i,C,A,k,W,pt,null),i.renderBufferDirect(k,null,W,pt,C,null),C.onAfterShadow(i,C,A,k,W,pt,null)}}let V=C.children;for(let W=0,et=V.length;W<et;W++)b(V[W],A,k,O,y)}function L(C){C.target.removeEventListener("dispose",L);for(let k in l){let O=l[k],y=C.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}var hy={[wl]:Sl,[Tl]:Cl,[Rl]:Pl,[Ds]:Al,[Sl]:wl,[Cl]:Tl,[Pl]:Rl,[Al]:Ds};function uy(i){function t(){let nt=!1,zt=new Fe,bt=null,Ct=new Fe(0,0,0,0);return{setMask:function(Ot){bt!==Ot&&!nt&&(i.colorMask(Ot,Ot,Ot,Ot),bt=Ot)},setLocked:function(Ot){nt=Ot},setClear:function(Ot,qt,me,We,Dn){Dn===!0&&(Ot*=We,qt*=We,me*=We),zt.set(Ot,qt,me,We),Ct.equals(zt)===!1&&(i.clearColor(Ot,qt,me,We),Ct.copy(zt))},reset:function(){nt=!1,bt=null,Ct.set(-1,0,0,0)}}}function e(){let nt=!1,zt=!1,bt=null,Ct=null,Ot=null;return{setReversed:function(qt){zt=qt},setTest:function(qt){qt?D(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(qt){bt!==qt&&!nt&&(i.depthMask(qt),bt=qt)},setFunc:function(qt){if(zt&&(qt=hy[qt]),Ct!==qt){switch(qt){case wl:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case Tl:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case Rl:i.depthFunc(i.EQUAL);break;case Al:i.depthFunc(i.GEQUAL);break;case Cl:i.depthFunc(i.GREATER);break;case Pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=qt}},setLocked:function(qt){nt=qt},setClear:function(qt){Ot!==qt&&(i.clearDepth(qt),Ot=qt)},reset:function(){nt=!1,bt=null,Ct=null,Ot=null}}}function n(){let nt=!1,zt=null,bt=null,Ct=null,Ot=null,qt=null,me=null,We=null,Dn=null;return{setTest:function(be){nt||(be?D(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(be){zt!==be&&!nt&&(i.stencilMask(be),zt=be)},setFunc:function(be,cn,Sn){(bt!==be||Ct!==cn||Ot!==Sn)&&(i.stencilFunc(be,cn,Sn),bt=be,Ct=cn,Ot=Sn)},setOp:function(be,cn,Sn){(qt!==be||me!==cn||We!==Sn)&&(i.stencilOp(be,cn,Sn),qt=be,me=cn,We=Sn)},setLocked:function(be){nt=be},setClear:function(be){Dn!==be&&(i.clearStencil(be),Dn=be)},reset:function(){nt=!1,zt=null,bt=null,Ct=null,Ot=null,qt=null,me=null,We=null,Dn=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,x=null,M=null,b=null,L=null,C=new Vt(0,0,0),A=0,k=!1,O=null,y=null,v=null,V=null,W=null,et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),pt=!1,K=0,at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(at)[1]),pt=K>=1):at.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),pt=K>=2);let I=null,Q={},B=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ct=new Fe().fromArray(B),Y=new Fe().fromArray(j);function T(nt,zt,bt,Ct){let Ot=new Uint8Array(4),qt=i.createTexture();i.bindTexture(nt,qt),i.texParameteri(nt,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(nt,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<bt;me++)nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?i.texImage3D(zt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(zt+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return qt}let S={};S[i.TEXTURE_2D]=T(i.TEXTURE_2D,i.TEXTURE_2D,1),S[i.TEXTURE_CUBE_MAP]=T(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),S[i.TEXTURE_2D_ARRAY]=T(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),S[i.TEXTURE_3D]=T(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),D(i.DEPTH_TEST),s.setFunc(Ds),$(!1),q(Fu),D(i.CULL_FACE),w(pr);function D(nt){l[nt]!==!0&&(i.enable(nt),l[nt]=!0)}function G(nt){l[nt]!==!1&&(i.disable(nt),l[nt]=!1)}function H(nt,zt){return h[nt]!==zt?(i.bindFramebuffer(nt,zt),h[nt]=zt,nt===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=zt),nt===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=zt),!0):!1}function U(nt,zt){let bt=d,Ct=!1;if(nt){bt=u.get(zt),bt===void 0&&(bt=[],u.set(zt,bt));let Ot=nt.textures;if(bt.length!==Ot.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,me=Ot.length;qt<me;qt++)bt[qt]=i.COLOR_ATTACHMENT0+qt;bt.length=Ot.length,Ct=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(bt)}function X(nt){return m!==nt?(i.useProgram(nt),m=nt,!0):!1}let J={[Gr]:i.FUNC_ADD,[Td]:i.FUNC_SUBTRACT,[Rd]:i.FUNC_REVERSE_SUBTRACT};J[Ad]=i.MIN,J[Cd]=i.MAX;let z={[Pd]:i.ZERO,[Id]:i.ONE,[Ld]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[Od]:i.SRC_ALPHA_SATURATE,[Hd]:i.DST_COLOR,[Ud]:i.DST_ALPHA,[Dd]:i.ONE_MINUS_SRC_COLOR,[El]:i.ONE_MINUS_SRC_ALPHA,[Fd]:i.ONE_MINUS_DST_COLOR,[Nd]:i.ONE_MINUS_DST_ALPHA,[Bd]:i.CONSTANT_COLOR,[kd]:i.ONE_MINUS_CONSTANT_COLOR,[zd]:i.CONSTANT_ALPHA,[Vd]:i.ONE_MINUS_CONSTANT_ALPHA};function w(nt,zt,bt,Ct,Ot,qt,me,We,Dn,be){if(nt===pr){g===!0&&(G(i.BLEND),g=!1);return}if(g===!1&&(D(i.BLEND),g=!0),nt!==Sd){if(nt!==_||be!==k){if((f!==Gr||M!==Gr)&&(i.blendEquation(i.FUNC_ADD),f=Gr,M=Gr),be)switch(nt){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFunc(i.ONE,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}else switch(nt){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}p=null,x=null,b=null,L=null,C.set(0,0,0),A=0,_=nt,k=be}return}Ot=Ot||zt,qt=qt||bt,me=me||Ct,(zt!==f||Ot!==M)&&(i.blendEquationSeparate(J[zt],J[Ot]),f=zt,M=Ot),(bt!==p||Ct!==x||qt!==b||me!==L)&&(i.blendFuncSeparate(z[bt],z[Ct],z[qt],z[me]),p=bt,x=Ct,b=qt,L=me),(We.equals(C)===!1||Dn!==A)&&(i.blendColor(We.r,We.g,We.b,Dn),C.copy(We),A=Dn),_=nt,k=!1}function it(nt,zt){nt.side===Ie?G(i.CULL_FACE):D(i.CULL_FACE);let bt=nt.side===Zn;zt&&(bt=!bt),$(bt),nt.blending===Ri&&nt.transparent===!1?w(pr):w(nt.blending,nt.blendEquation,nt.blendSrc,nt.blendDst,nt.blendEquationAlpha,nt.blendSrcAlpha,nt.blendDstAlpha,nt.blendColor,nt.blendAlpha,nt.premultipliedAlpha),s.setFunc(nt.depthFunc),s.setTest(nt.depthTest),s.setMask(nt.depthWrite),r.setMask(nt.colorWrite);let Ct=nt.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(nt.stencilWriteMask),o.setFunc(nt.stencilFunc,nt.stencilRef,nt.stencilFuncMask),o.setOp(nt.stencilFail,nt.stencilZFail,nt.stencilZPass)),rt(nt.polygonOffset,nt.polygonOffsetFactor,nt.polygonOffsetUnits),nt.alphaToCoverage===!0?D(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(nt){O!==nt&&(nt?i.frontFace(i.CW):i.frontFace(i.CCW),O=nt)}function q(nt){nt!==vd?(D(i.CULL_FACE),nt!==y&&(nt===Fu?i.cullFace(i.BACK):nt===Ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),y=nt}function tt(nt){nt!==v&&(pt&&i.lineWidth(nt),v=nt)}function rt(nt,zt,bt){nt?(D(i.POLYGON_OFFSET_FILL),(V!==zt||W!==bt)&&(i.polygonOffset(zt,bt),V=zt,W=bt)):G(i.POLYGON_OFFSET_FILL)}function ht(nt){nt?D(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function P(nt){nt===void 0&&(nt=i.TEXTURE0+et-1),I!==nt&&(i.activeTexture(nt),I=nt)}function E(nt,zt,bt){bt===void 0&&(I===null?bt=i.TEXTURE0+et-1:bt=I);let Ct=Q[bt];Ct===void 0&&(Ct={type:void 0,texture:void 0},Q[bt]=Ct),(Ct.type!==nt||Ct.texture!==zt)&&(I!==bt&&(i.activeTexture(bt),I=bt),i.bindTexture(nt,zt||S[nt]),Ct.type=nt,Ct.texture=zt)}function F(){let nt=Q[I];nt!==void 0&&nt.type!==void 0&&(i.bindTexture(nt.type,null),nt.type=void 0,nt.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function yt(){try{i.texStorage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Ht(nt){ct.equals(nt)===!1&&(i.scissor(nt.x,nt.y,nt.z,nt.w),ct.copy(nt))}function Tt(nt){Y.equals(nt)===!1&&(i.viewport(nt.x,nt.y,nt.z,nt.w),Y.copy(nt))}function Ft(nt,zt){let bt=c.get(zt);bt===void 0&&(bt=new WeakMap,c.set(zt,bt));let Ct=bt.get(nt);Ct===void 0&&(Ct=i.getUniformBlockIndex(zt,nt.name),bt.set(nt,Ct))}function $t(nt,zt){let Ct=c.get(zt).get(nt);a.get(zt)!==Ct&&(i.uniformBlockBinding(zt,Ct,nt.__bindingPointIndex),a.set(zt,Ct))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},I=null,Q={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,x=null,M=null,b=null,L=null,C=new Vt(0,0,0),A=0,k=!1,O=null,y=null,v=null,V=null,W=null,ct.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:D,disable:G,bindFramebuffer:H,drawBuffers:U,useProgram:X,setBlending:w,setMaterial:it,setFlipSided:$,setCullFace:q,setLineWidth:tt,setPolygonOffset:rt,setScissorTest:ht,activeTexture:P,bindTexture:E,unbindTexture:F,compressedTexImage2D:ot,compressedTexImage3D:lt,texImage2D:At,texImage3D:Xt,updateUBOMapping:Ft,uniformBlockBinding:$t,texStorage2D:Lt,texStorage3D:yt,texSubImage2D:st,texSubImage3D:wt,compressedTexSubImage2D:vt,compressedTexSubImage3D:gt,scissor:Ht,viewport:Tt,reset:ne}}function I0(i,t,e,n){let r=fy(n);switch(e){case j0:return i*t;case tf:return i*t;case ef:return i*t*2;case Qh:return i*t/r.components*r.byteLength;case tu:return i*t/r.components*r.byteLength;case nf:return i*t*2/r.components*r.byteLength;case eu:return i*t*2/r.components*r.byteLength;case Q0:return i*t*3/r.components*r.byteLength;case mi:return i*t*4/r.components*r.byteLength;case nu:return i*t*4/r.components*r.byteLength;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Hl:return Math.max(i,16)*Math.max(t,8)/4;case Dl:case Nl:return Math.max(i,8)*Math.max(t,8)/2;case Fl:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case za:case th:case eh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rf:case nh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ih:case rh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fy(i){switch(i){case Zi:case K0:return{byteLength:1,components:1};case Po:case $0:case Wo:return{byteLength:2,components:1};case Jh:case jh:return{byteLength:2,components:4};case Yr:case $h:case Ti:return{byteLength:4,components:1};case J0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dy(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return m?new OffscreenCanvas(P,E):Za("canvas")}function _(P,E,F){let ot=1,lt=ht(P);if((lt.width>F||lt.height>F)&&(ot=F/Math.max(lt.width,lt.height)),ot<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let st=Math.floor(ot*lt.width),wt=Math.floor(ot*lt.height);u===void 0&&(u=g(st,wt));let vt=E?g(st,wt):u;return vt.width=st,vt.height=wt,vt.getContext("2d").drawImage(P,0,0,st,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+st+"x"+wt+")."),vt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==Tn&&P.minFilter!==di}function p(P){i.generateMipmap(P)}function x(P,E,F,ot,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let st=E;if(E===i.RED&&(F===i.FLOAT&&(st=i.R32F),F===i.HALF_FLOAT&&(st=i.R16F),F===i.UNSIGNED_BYTE&&(st=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.R8UI),F===i.UNSIGNED_SHORT&&(st=i.R16UI),F===i.UNSIGNED_INT&&(st=i.R32UI),F===i.BYTE&&(st=i.R8I),F===i.SHORT&&(st=i.R16I),F===i.INT&&(st=i.R32I)),E===i.RG&&(F===i.FLOAT&&(st=i.RG32F),F===i.HALF_FLOAT&&(st=i.RG16F),F===i.UNSIGNED_BYTE&&(st=i.RG8)),E===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.RG8UI),F===i.UNSIGNED_SHORT&&(st=i.RG16UI),F===i.UNSIGNED_INT&&(st=i.RG32UI),F===i.BYTE&&(st=i.RG8I),F===i.SHORT&&(st=i.RG16I),F===i.INT&&(st=i.RG32I)),E===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.RGB8UI),F===i.UNSIGNED_SHORT&&(st=i.RGB16UI),F===i.UNSIGNED_INT&&(st=i.RGB32UI),F===i.BYTE&&(st=i.RGB8I),F===i.SHORT&&(st=i.RGB16I),F===i.INT&&(st=i.RGB32I)),E===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),F===i.UNSIGNED_INT&&(st=i.RGBA32UI),F===i.BYTE&&(st=i.RGBA8I),F===i.SHORT&&(st=i.RGBA16I),F===i.INT&&(st=i.RGBA32I)),E===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),E===i.RGBA){let wt=lt?Wa:Ue.getTransfer(ot);F===i.FLOAT&&(st=i.RGBA32F),F===i.HALF_FLOAT&&(st=i.RGBA16F),F===i.UNSIGNED_BYTE&&(st=wt===Ze?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(P,E){let F;return P?E===null||E===Yr||E===Hs?F=i.DEPTH24_STENCIL8:E===Ti?F=i.DEPTH32F_STENCIL8:E===Po&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===Hs?F=i.DEPTH_COMPONENT24:E===Ti?F=i.DEPTH_COMPONENT32F:E===Po&&(F=i.DEPTH_COMPONENT16),F}function b(P,E){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==di?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function L(P){let E=P.target;E.removeEventListener("dispose",L),A(E),E.isVideoTexture&&h.delete(E)}function C(P){let E=P.target;E.removeEventListener("dispose",C),O(E)}function A(P){let E=n.get(P);if(E.__webglInit===void 0)return;let F=P.source,ot=d.get(F);if(ot){let lt=ot[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&k(P),Object.keys(ot).length===0&&d.delete(F)}n.remove(P)}function k(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let F=P.source,ot=d.get(F);delete ot[E.__cacheKey],o.memory.textures--}function O(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(E.__webglFramebuffer[ot]))for(let lt=0;lt<E.__webglFramebuffer[ot].length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[ot][lt]);else i.deleteFramebuffer(E.__webglFramebuffer[ot]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ot])}else{if(Array.isArray(E.__webglFramebuffer))for(let ot=0;ot<E.__webglFramebuffer.length;ot++)i.deleteFramebuffer(E.__webglFramebuffer[ot]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ot=0;ot<E.__webglColorRenderbuffer.length;ot++)E.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ot]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let F=P.textures;for(let ot=0,lt=F.length;ot<lt;ot++){let st=n.get(F[ot]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(F[ot])}n.remove(P)}let y=0;function v(){y=0}function V(){let P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function W(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function et(P,E){let F=n.get(P);if(P.isVideoTexture&&tt(P),P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){let ot=P.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,P,E);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function pt(P,E){let F=n.get(P);if(P.version>0&&F.__version!==P.version){Y(F,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function K(P,E){let F=n.get(P);if(P.version>0&&F.__version!==P.version){Y(F,P,E);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function at(P,E){let F=n.get(P);if(P.version>0&&F.__version!==P.version){T(F,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}let I={[qr]:i.REPEAT,[qi]:i.CLAMP_TO_EDGE,[Ll]:i.MIRRORED_REPEAT},Q={[Tn]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[di]:i.LINEAR,[kc]:i.LINEAR_MIPMAP_NEAREST,[Xr]:i.LINEAR_MIPMAP_LINEAR},B={[tp]:i.NEVER,[op]:i.ALWAYS,[ep]:i.LESS,[sf]:i.LEQUAL,[np]:i.EQUAL,[sp]:i.GEQUAL,[ip]:i.GREATER,[rp]:i.NOTEQUAL};function j(P,E){if(E.type===Ti&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===di||E.magFilter===kc||E.magFilter===ra||E.magFilter===Xr||E.minFilter===di||E.minFilter===kc||E.minFilter===ra||E.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,I[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,I[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,I[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Q[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==ra&&E.minFilter!==Xr||E.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ct(P,E){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",L));let ot=E.source,lt=d.get(ot);lt===void 0&&(lt={},d.set(ot,lt));let st=W(E);if(st!==P.__cacheKey){lt[st]===void 0&&(lt[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),lt[st].usedTimes++;let wt=lt[P.__cacheKey];wt!==void 0&&(lt[P.__cacheKey].usedTimes--,wt.usedTimes===0&&k(E)),P.__cacheKey=st,P.__webglTexture=lt[st].texture}return F}function Y(P,E,F){let ot=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ot=i.TEXTURE_3D);let lt=ct(P,E),st=E.source;e.bindTexture(ot,P.__webglTexture,i.TEXTURE0+F);let wt=n.get(st);if(st.version!==wt.__version||lt===!0){e.activeTexture(i.TEXTURE0+F);let vt=Ue.getPrimaries(Ue.workingColorSpace),gt=E.colorSpace===fr?null:Ue.getPrimaries(E.colorSpace),Lt=E.colorSpace===fr||vt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let yt=_(E.image,!1,r.maxTextureSize);yt=rt(E,yt);let At=s.convert(E.format,E.colorSpace),Xt=s.convert(E.type),Ht=x(E.internalFormat,At,Xt,E.colorSpace,E.isVideoTexture);j(ot,E);let Tt,Ft=E.mipmaps,$t=E.isVideoTexture!==!0,ne=wt.__version===void 0||lt===!0,nt=st.dataReady,zt=b(E,yt);if(E.isDepthTexture)Ht=M(E.format===Fs,E.type),ne&&($t?e.texStorage2D(i.TEXTURE_2D,1,Ht,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,Ht,yt.width,yt.height,0,At,Xt,null));else if(E.isDataTexture)if(Ft.length>0){$t&&ne&&e.texStorage2D(i.TEXTURE_2D,zt,Ht,Ft[0].width,Ft[0].height);for(let bt=0,Ct=Ft.length;bt<Ct;bt++)Tt=Ft[bt],$t?nt&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,Tt.width,Tt.height,At,Xt,Tt.data):e.texImage2D(i.TEXTURE_2D,bt,Ht,Tt.width,Tt.height,0,At,Xt,Tt.data);E.generateMipmaps=!1}else $t?(ne&&e.texStorage2D(i.TEXTURE_2D,zt,Ht,yt.width,yt.height),nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt.width,yt.height,At,Xt,yt.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,yt.width,yt.height,0,At,Xt,yt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$t&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Ht,Ft[0].width,Ft[0].height,yt.depth);for(let bt=0,Ct=Ft.length;bt<Ct;bt++)if(Tt=Ft[bt],E.format!==mi)if(At!==null)if($t){if(nt)if(E.layerUpdates.size>0){let Ot=I0(Tt.width,Tt.height,E.format,E.type);for(let qt of E.layerUpdates){let me=Tt.data.subarray(qt*Ot/Tt.data.BYTES_PER_ELEMENT,(qt+1)*Ot/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,qt,Tt.width,Tt.height,1,At,me,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,Tt.width,Tt.height,yt.depth,At,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,bt,Ht,Tt.width,Tt.height,yt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,Tt.width,Tt.height,yt.depth,At,Xt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,bt,Ht,Tt.width,Tt.height,yt.depth,0,At,Xt,Tt.data)}else{$t&&ne&&e.texStorage2D(i.TEXTURE_2D,zt,Ht,Ft[0].width,Ft[0].height);for(let bt=0,Ct=Ft.length;bt<Ct;bt++)Tt=Ft[bt],E.format!==mi?At!==null?$t?nt&&e.compressedTexSubImage2D(i.TEXTURE_2D,bt,0,0,Tt.width,Tt.height,At,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,bt,Ht,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?nt&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,Tt.width,Tt.height,At,Xt,Tt.data):e.texImage2D(i.TEXTURE_2D,bt,Ht,Tt.width,Tt.height,0,At,Xt,Tt.data)}else if(E.isDataArrayTexture)if($t){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,zt,Ht,yt.width,yt.height,yt.depth),nt)if(E.layerUpdates.size>0){let bt=I0(yt.width,yt.height,E.format,E.type);for(let Ct of E.layerUpdates){let Ot=yt.data.subarray(Ct*bt/yt.data.BYTES_PER_ELEMENT,(Ct+1)*bt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,yt.width,yt.height,1,At,Xt,Ot)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,At,Xt,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,yt.width,yt.height,yt.depth,0,At,Xt,yt.data);else if(E.isData3DTexture)$t?(ne&&e.texStorage3D(i.TEXTURE_3D,zt,Ht,yt.width,yt.height,yt.depth),nt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,At,Xt,yt.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,yt.width,yt.height,yt.depth,0,At,Xt,yt.data);else if(E.isFramebufferTexture){if(ne)if($t)e.texStorage2D(i.TEXTURE_2D,zt,Ht,yt.width,yt.height);else{let bt=yt.width,Ct=yt.height;for(let Ot=0;Ot<zt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,Ht,bt,Ct,0,At,Xt,null),bt>>=1,Ct>>=1}}else if(Ft.length>0){if($t&&ne){let bt=ht(Ft[0]);e.texStorage2D(i.TEXTURE_2D,zt,Ht,bt.width,bt.height)}for(let bt=0,Ct=Ft.length;bt<Ct;bt++)Tt=Ft[bt],$t?nt&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,At,Xt,Tt):e.texImage2D(i.TEXTURE_2D,bt,Ht,At,Xt,Tt);E.generateMipmaps=!1}else if($t){if(ne){let bt=ht(yt);e.texStorage2D(i.TEXTURE_2D,zt,Ht,bt.width,bt.height)}nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Xt,yt)}else e.texImage2D(i.TEXTURE_2D,0,Ht,At,Xt,yt);f(E)&&p(ot),wt.__version=st.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function T(P,E,F){if(E.image.length!==6)return;let ot=ct(P,E),lt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+F);let st=n.get(lt);if(lt.version!==st.__version||ot===!0){e.activeTexture(i.TEXTURE0+F);let wt=Ue.getPrimaries(Ue.workingColorSpace),vt=E.colorSpace===fr?null:Ue.getPrimaries(E.colorSpace),gt=E.colorSpace===fr||wt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,yt=E.image[0]&&E.image[0].isDataTexture,At=[];for(let Ct=0;Ct<6;Ct++)!Lt&&!yt?At[Ct]=_(E.image[Ct],!0,r.maxCubemapSize):At[Ct]=yt?E.image[Ct].image:E.image[Ct],At[Ct]=rt(E,At[Ct]);let Xt=At[0],Ht=s.convert(E.format,E.colorSpace),Tt=s.convert(E.type),Ft=x(E.internalFormat,Ht,Tt,E.colorSpace),$t=E.isVideoTexture!==!0,ne=st.__version===void 0||ot===!0,nt=lt.dataReady,zt=b(E,Xt);j(i.TEXTURE_CUBE_MAP,E);let bt;if(Lt){$t&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Ft,Xt.width,Xt.height);for(let Ct=0;Ct<6;Ct++){bt=At[Ct].mipmaps;for(let Ot=0;Ot<bt.length;Ot++){let qt=bt[Ot];E.format!==mi?Ht!==null?$t?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot,0,0,qt.width,qt.height,Ht,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot,Ft,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot,0,0,qt.width,qt.height,Ht,Tt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot,Ft,qt.width,qt.height,0,Ht,Tt,qt.data)}}}else{if(bt=E.mipmaps,$t&&ne){bt.length>0&&zt++;let Ct=ht(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Ft,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(yt){$t?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,At[Ct].width,At[Ct].height,Ht,Tt,At[Ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Ft,At[Ct].width,At[Ct].height,0,Ht,Tt,At[Ct].data);for(let Ot=0;Ot<bt.length;Ot++){let me=bt[Ot].image[Ct].image;$t?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot+1,0,0,me.width,me.height,Ht,Tt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot+1,Ft,me.width,me.height,0,Ht,Tt,me.data)}}else{$t?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Ht,Tt,At[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Ft,Ht,Tt,At[Ct]);for(let Ot=0;Ot<bt.length;Ot++){let qt=bt[Ot];$t?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot+1,0,0,Ht,Tt,qt.image[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot+1,Ft,Ht,Tt,qt.image[Ct])}}}f(E)&&p(i.TEXTURE_CUBE_MAP),st.__version=lt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function S(P,E,F,ot,lt,st){let wt=s.convert(F.format,F.colorSpace),vt=s.convert(F.type),gt=x(F.internalFormat,wt,vt,F.colorSpace);if(!n.get(E).__hasExternalTextures){let yt=Math.max(1,E.width>>st),At=Math.max(1,E.height>>st);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,st,gt,yt,At,E.depth,0,wt,vt,null):e.texImage2D(lt,st,gt,yt,At,0,wt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),q(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,lt,n.get(F).__webglTexture,0,$(E)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,lt,n.get(F).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function D(P,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let ot=E.depthTexture,lt=ot&&ot.isDepthTexture?ot.type:null,st=M(E.stencilBuffer,lt),wt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=$(E);q(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,st,E.width,E.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,st,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,st,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,P)}else{let ot=E.textures;for(let lt=0;lt<ot.length;lt++){let st=ot[lt],wt=s.convert(st.format,st.colorSpace),vt=s.convert(st.type),gt=x(st.internalFormat,wt,vt,st.colorSpace),Lt=$(E);F&&q(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,gt,E.width,E.height):q(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,gt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,gt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function G(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),et(E.depthTexture,0);let ot=n.get(E.depthTexture).__webglTexture,lt=$(E);if(E.depthTexture.format===Ps)q(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(E.depthTexture.format===Fs)q(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function H(P){let E=n.get(P),F=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let ot=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ot){let lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ot.removeEventListener("dispose",lt)};ot.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=ot}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");G(E.__webglFramebuffer,P)}else if(F){E.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ot]),E.__webglDepthbuffer[ot]===void 0)E.__webglDepthbuffer[ot]=i.createRenderbuffer(),D(E.__webglDepthbuffer[ot],P,!1);else{let lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),D(E.__webglDepthbuffer,P,!1);else{let ot=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function U(P,E,F){let ot=n.get(P);E!==void 0&&S(ot.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&H(P)}function X(P){let E=P.texture,F=n.get(P),ot=n.get(E);P.addEventListener("dispose",C);let lt=P.textures,st=P.isWebGLCubeRenderTarget===!0,wt=lt.length>1;if(wt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=E.version,o.memory.textures++),st){F.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[vt]=[];for(let gt=0;gt<E.mipmaps.length;gt++)F.__webglFramebuffer[vt][gt]=i.createFramebuffer()}else F.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)F.__webglFramebuffer[vt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(wt)for(let vt=0,gt=lt.length;vt<gt;vt++){let Lt=n.get(lt[vt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&q(P)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let vt=0;vt<lt.length;vt++){let gt=lt[vt];F.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[vt]);let Lt=s.convert(gt.format,gt.colorSpace),yt=s.convert(gt.type),At=x(gt.internalFormat,Lt,yt,gt.colorSpace,P.isXRRenderTarget===!0),Xt=$(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,At,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,F.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),D(F.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),j(i.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)S(F.__webglFramebuffer[vt][gt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,gt);else S(F.__webglFramebuffer[vt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);f(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let vt=0,gt=lt.length;vt<gt;vt++){let Lt=lt[vt],yt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,yt.__webglTexture),j(i.TEXTURE_2D,Lt),S(F.__webglFramebuffer,P,Lt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),f(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,ot.__webglTexture),j(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)S(F.__webglFramebuffer[gt],P,E,i.COLOR_ATTACHMENT0,vt,gt);else S(F.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,vt,0);f(E)&&p(vt),e.unbindTexture()}P.depthBuffer&&H(P)}function J(P){let E=P.textures;for(let F=0,ot=E.length;F<ot;F++){let lt=E[F];if(f(lt)){let st=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(lt).__webglTexture;e.bindTexture(st,wt),p(st),e.unbindTexture()}}}let z=[],w=[];function it(P){if(P.samples>0){if(q(P)===!1){let E=P.textures,F=P.width,ot=P.height,lt=i.COLOR_BUFFER_BIT,st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(P),vt=E.length>1;if(vt)for(let gt=0;gt<E.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<E.length;gt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let Lt=n.get(E[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,F,ot,0,0,F,ot,lt,i.NEAREST),c===!0&&(z.length=0,w.length=0,z.push(i.COLOR_ATTACHMENT0+gt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(z.push(st),w.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let gt=0;gt<E.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let Lt=n.get(E[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function $(P){return Math.min(r.maxSamples,P.samples)}function q(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function tt(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function rt(P,E){let F=P.colorSpace,ot=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==Mr&&F!==fr&&(Ue.getTransfer(F)===Ze?(ot!==mi||lt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function ht(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=v,this.setTexture2D=et,this.setTexture2DArray=pt,this.setTexture3D=K,this.setTextureCube=at,this.rebindTextures=U,this.setupRenderTarget=X,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=S,this.useMultisampledRTT=q}function py(i,t){function e(n,r=fr){let s,o=Ue.getTransfer(r);if(n===Zi)return i.UNSIGNED_BYTE;if(n===Jh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===J0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===K0)return i.BYTE;if(n===$0)return i.SHORT;if(n===Po)return i.UNSIGNED_SHORT;if(n===$h)return i.INT;if(n===Yr)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===Wo)return i.HALF_FLOAT;if(n===j0)return i.ALPHA;if(n===Q0)return i.RGB;if(n===mi)return i.RGBA;if(n===tf)return i.LUMINANCE;if(n===ef)return i.LUMINANCE_ALPHA;if(n===Ps)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===Qh)return i.RED;if(n===tu)return i.RED_INTEGER;if(n===nf)return i.RG;if(n===eu)return i.RG_INTEGER;if(n===nu)return i.RGBA_INTEGER;if(n===Fa||n===Oa||n===Ba||n===ka)if(o===Ze)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Ul||n===Nl||n===Hl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Ol||n===Bl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fl||n===Ol)return o===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===zl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Kl||n===$l||n===Jl||n===jl||n===Ql)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===th||n===eh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===za)return o===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rf||n===nh||n===ih||n===rh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===za)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ih)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Mh=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Wt=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},my={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_y=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Kn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $n({vertexShader:gy,fragmentShader:_y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends gr{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=new bh,f=e.getContextAttributes(),p=null,x=null,M=[],b=[],L=new Ut,C=null,A=new bn;A.layers.enable(1),A.viewport=new Fe;let k=new bn;k.layers.enable(2),k.viewport=new Fe;let O=[A,k],y=new Mh;y.layers.enable(1),y.layers.enable(2);let v=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let S=M[T];return S===void 0&&(S=new So,M[T]=S),S.getTargetRaySpace()},this.getControllerGrip=function(T){let S=M[T];return S===void 0&&(S=new So,M[T]=S),S.getGripSpace()},this.getHand=function(T){let S=M[T];return S===void 0&&(S=new So,M[T]=S),S.getHandSpace()};function W(T){let S=b.indexOf(T.inputSource);if(S===-1)return;let D=M[S];D!==void 0&&(D.update(T.inputSource,T.frame,l||o),D.dispatchEvent({type:T.type,data:T.inputSource}))}function et(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",et),r.removeEventListener("inputsourceschange",pt);for(let T=0;T<M.length;T++){let S=b[T];S!==null&&(b[T]=null,M[T].disconnect(S))}v=null,V=null,_.reset(),t.setRenderTarget(p),m=null,d=null,u=null,r=null,x=null,Y.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){s=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){a=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(T){l=T},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(T){if(r=T,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",et),r.addEventListener("inputsourceschange",pt),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){let S={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,S),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Ki(m.framebufferWidth,m.framebufferHeight,{format:mi,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let S=null,D=null,G=null;f.depth&&(G=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,S=f.stencil?Fs:Ps,D=f.stencil?Hs:Yr);let H={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(H),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ki(d.textureWidth,d.textureHeight,{format:mi,type:Zi,depthTexture:new rc(d.textureWidth,d.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,S),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Y.setContext(r),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function pt(T){for(let S=0;S<T.removed.length;S++){let D=T.removed[S],G=b.indexOf(D);G>=0&&(b[G]=null,M[G].disconnect(D))}for(let S=0;S<T.added.length;S++){let D=T.added[S],G=b.indexOf(D);if(G===-1){for(let U=0;U<M.length;U++)if(U>=b.length){b.push(D),G=U;break}else if(b[U]===null){b[U]=D,G=U;break}if(G===-1)break}let H=M[G];H&&H.connect(D)}}let K=new R,at=new R;function I(T,S,D){K.setFromMatrixPosition(S.matrixWorld),at.setFromMatrixPosition(D.matrixWorld);let G=K.distanceTo(at),H=S.projectionMatrix.elements,U=D.projectionMatrix.elements,X=H[14]/(H[10]-1),J=H[14]/(H[10]+1),z=(H[9]+1)/H[5],w=(H[9]-1)/H[5],it=(H[8]-1)/H[0],$=(U[8]+1)/U[0],q=X*it,tt=X*$,rt=G/(-it+$),ht=rt*-it;if(S.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ht),T.translateZ(rt),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),H[10]===-1)T.projectionMatrix.copy(S.projectionMatrix),T.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let P=X+rt,E=J+rt,F=q-ht,ot=tt+(G-ht),lt=z*J/E*P,st=w*J/E*P;T.projectionMatrix.makePerspective(F,ot,lt,st,P,E),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function Q(T,S){S===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(S.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(r===null)return;let S=T.near,D=T.far;_.texture!==null&&(_.depthNear>0&&(S=_.depthNear),_.depthFar>0&&(D=_.depthFar)),y.near=k.near=A.near=S,y.far=k.far=A.far=D,(v!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),v=y.near,V=y.far);let G=T.parent,H=y.cameras;Q(y,G);for(let U=0;U<H.length;U++)Q(H[U],G);H.length===2?I(y,A,k):y.projectionMatrix.copy(A.projectionMatrix),B(T,y,G)};function B(T,S,D){D===null?T.matrix.copy(S.matrixWorld):(T.matrix.copy(D.matrixWorld),T.matrix.invert(),T.matrix.multiply(S.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(S.projectionMatrix),T.projectionMatrixInverse.copy(S.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=Io*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(T){c=T,d!==null&&(d.fixedFoveation=T),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=T)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let j=null;function ct(T,S){if(h=S.getViewerPose(l||o),g=S,h!==null){let D=h.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let G=!1;D.length!==y.cameras.length&&(y.cameras.length=0,G=!0);for(let U=0;U<D.length;U++){let X=D[U],J=null;if(m!==null)J=m.getViewport(X);else{let w=u.getViewSubImage(d,X);J=w.viewport,U===0&&(t.setRenderTargetTextures(x,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(x))}let z=O[U];z===void 0&&(z=new bn,z.layers.enable(U),z.viewport=new Fe,O[U]=z),z.matrix.fromArray(X.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(X.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(J.x,J.y,J.width,J.height),U===0&&(y.matrix.copy(z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),G===!0&&y.cameras.push(z)}let H=r.enabledFeatures;if(H&&H.includes("depth-sensing")){let U=u.getDepthInformation(D[0]);U&&U.isValid&&U.texture&&_.init(t,U,r.renderState)}}for(let D=0;D<M.length;D++){let G=b[D],H=M[D];G!==null&&H!==void 0&&H.update(G,S,l||o)}j&&j(T,S),S.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:S}),g=null}let Y=new lf;Y.setAnimationLoop(ct),this.setAnimationLoop=function(T){j=T},this.dispose=function(){}}},zr=new vn,yy=new le;function xy(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,cf(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,x,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,x,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Zn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Zn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x=t.get(p),M=x.envMap,b=x.envMapRotation;M&&(f.envMap.value=M,zr.copy(b),zr.x*=-1,zr.y*=-1,zr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),f.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(zr)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,x,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=M*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let x=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function My(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){let b=M.program;n.uniformBlockBinding(x,b)}function l(x,M){let b=r[x.id];b===void 0&&(g(x),b=h(x),r[x.id]=b,x.addEventListener("dispose",f));let L=M.program;n.updateUBOMapping(x,L);let C=t.render.frame;s[x.id]!==C&&(d(x),s[x.id]=C)}function h(x){let M=u();x.__bindingPointIndex=M;let b=i.createBuffer(),L=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=r[x.id],b=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,A=b.length;C<A;C++){let k=Array.isArray(b[C])?b[C]:[b[C]];for(let O=0,y=k.length;O<y;O++){let v=k[O];if(m(v,C,O,L)===!0){let V=v.__offset,W=Array.isArray(v.value)?v.value:[v.value],et=0;for(let pt=0;pt<W.length;pt++){let K=W[pt],at=_(K);typeof K=="number"||typeof K=="boolean"?(v.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,V+et,v.__data)):K.isMatrix3?(v.__data[0]=K.elements[0],v.__data[1]=K.elements[1],v.__data[2]=K.elements[2],v.__data[3]=0,v.__data[4]=K.elements[3],v.__data[5]=K.elements[4],v.__data[6]=K.elements[5],v.__data[7]=0,v.__data[8]=K.elements[6],v.__data[9]=K.elements[7],v.__data[10]=K.elements[8],v.__data[11]=0):(K.toArray(v.__data,et),et+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,M,b,L){let C=x.value,A=M+"_"+b;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{let k=L[A];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return L[A]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function g(x){let M=x.uniforms,b=0,L=16;for(let A=0,k=M.length;A<k;A++){let O=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,v=O.length;y<v;y++){let V=O[y],W=Array.isArray(V.value)?V.value:[V.value];for(let et=0,pt=W.length;et<pt;et++){let K=W[et],at=_(K),I=b%L,Q=I%at.boundary,B=I+Q;b+=Q,B!==0&&L-B<at.storage&&(b+=L-B),V.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=at.storage}}}let C=b%L;return C>0&&(b+=L-C),x.__size=b,x.__cache={},this}function _(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function f(x){let M=x.target;M.removeEventListener("dispose",f);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Bs=class{constructor(t={}){let{canvas:e=Ep(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=mr,this.toneMappingExposure=1;let M=this,b=!1,L=0,C=0,A=null,k=-1,O=null,y=new Fe,v=new Fe,V=null,W=new Vt(0),et=0,pt=e.width,K=e.height,at=1,I=null,Q=null,B=new Fe(0,0,pt,K),j=new Fe(0,0,pt,K),ct=!1,Y=new Do,T=!1,S=!1,D=new le,G=new le,H=new R,U=new Fe,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function z(){return A===null?at:1}let w=n;function it(N,ft){return e.getContext(N,ft)}try{let N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",qt,!1),w===null){let ft="webgl2";if(w=it(ft,N),w===null)throw it(ft)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let $,q,tt,rt,ht,P,E,F,ot,lt,st,wt,vt,gt,Lt,yt,At,Xt,Ht,Tt,Ft,$t,ne,nt;function zt(){$=new H1(w),$.init(),$t=new py(w,$),q=new P1(w,$,t,$t),tt=new uy(w),q.reverseDepthBuffer&&tt.buffers.depth.setReversed(!0),rt=new B1(w),ht=new j_,P=new dy(w,$,tt,ht,q,$t,rt),E=new L1(M),F=new N1(M),ot=new qp(w),ne=new A1(w,ot),lt=new F1(w,ot,rt,ne),st=new z1(w,lt,ot,rt),Ht=new k1(w,q,P),yt=new I1(ht),wt=new J_(M,E,F,$,q,ne,yt),vt=new xy(M,ht),gt=new ty,Lt=new oy($),Xt=new R1(M,E,F,tt,st,d,c),At=new ly(M,st,q),nt=new My(w,rt,q,tt),Tt=new C1(w,$,rt),Ft=new O1(w,$,rt),rt.programs=wt.programs,M.capabilities=q,M.extensions=$,M.properties=ht,M.renderLists=gt,M.shadowMap=At,M.state=tt,M.info=rt}zt();let bt=new vh(M,w);this.xr=bt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let N=$.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=$.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(N){N!==void 0&&(at=N,this.setSize(pt,K,!1))},this.getSize=function(N){return N.set(pt,K)},this.setSize=function(N,ft,xt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pt=N,K=ft,e.width=Math.floor(N*at),e.height=Math.floor(ft*at),xt===!0&&(e.style.width=N+"px",e.style.height=ft+"px"),this.setViewport(0,0,N,ft)},this.getDrawingBufferSize=function(N){return N.set(pt*at,K*at).floor()},this.setDrawingBufferSize=function(N,ft,xt){pt=N,K=ft,at=xt,e.width=Math.floor(N*xt),e.height=Math.floor(ft*xt),this.setViewport(0,0,N,ft)},this.getCurrentViewport=function(N){return N.copy(y)},this.getViewport=function(N){return N.copy(B)},this.setViewport=function(N,ft,xt,Mt){N.isVector4?B.set(N.x,N.y,N.z,N.w):B.set(N,ft,xt,Mt),tt.viewport(y.copy(B).multiplyScalar(at).round())},this.getScissor=function(N){return N.copy(j)},this.setScissor=function(N,ft,xt,Mt){N.isVector4?j.set(N.x,N.y,N.z,N.w):j.set(N,ft,xt,Mt),tt.scissor(v.copy(j).multiplyScalar(at).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(N){tt.setScissorTest(ct=N)},this.setOpaqueSort=function(N){I=N},this.setTransparentSort=function(N){Q=N},this.getClearColor=function(N){return N.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(N=!0,ft=!0,xt=!0){let Mt=0;if(N){let dt=!1;if(A!==null){let Nt=A.texture.format;dt=Nt===nu||Nt===eu||Nt===tu}if(dt){let Nt=A.texture.type,Zt=Nt===Zi||Nt===Yr||Nt===Po||Nt===Hs||Nt===Jh||Nt===jh,Kt=Xt.getClearColor(),Jt=Xt.getClearAlpha(),se=Kt.r,oe=Kt.g,te=Kt.b;Zt?(m[0]=se,m[1]=oe,m[2]=te,m[3]=Jt,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=se,g[1]=oe,g[2]=te,g[3]=Jt,w.clearBufferiv(w.COLOR,0,g))}else Mt|=w.COLOR_BUFFER_BIT}ft&&(Mt|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),xt&&(Mt|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",qt,!1),gt.dispose(),Lt.dispose(),ht.dispose(),E.dispose(),F.dispose(),st.dispose(),ne.dispose(),nt.dispose(),wt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Mi),bt.removeEventListener("sessionend",bi),ni.stop()};function Ct(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let N=rt.autoReset,ft=At.enabled,xt=At.autoUpdate,Mt=At.needsUpdate,dt=At.type;zt(),rt.autoReset=N,At.enabled=ft,At.autoUpdate=xt,At.needsUpdate=Mt,At.type=dt}function qt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function me(N){let ft=N.target;ft.removeEventListener("dispose",me),We(ft)}function We(N){Dn(N),ht.remove(N)}function Dn(N){let ft=ht.get(N).programs;ft!==void 0&&(ft.forEach(function(xt){wt.releaseProgram(xt)}),N.isShaderMaterial&&wt.releaseShaderCache(N))}this.renderBufferDirect=function(N,ft,xt,Mt,dt,Nt){ft===null&&(ft=X);let Zt=dt.isMesh&&dt.matrixWorld.determinant()<0,Kt=De(N,ft,xt,Mt,dt);tt.setMaterial(Mt,Zt);let Jt=xt.index,se=1;if(Mt.wireframe===!0){if(Jt=lt.getWireframeAttribute(xt),Jt===void 0)return;se=2}let oe=xt.drawRange,te=xt.attributes.position,fe=oe.start*se,Pe=(oe.start+oe.count)*se;Nt!==null&&(fe=Math.max(fe,Nt.start*se),Pe=Math.min(Pe,(Nt.start+Nt.count)*se)),Jt!==null?(fe=Math.max(fe,0),Pe=Math.min(Pe,Jt.count)):te!=null&&(fe=Math.max(fe,0),Pe=Math.min(Pe,te.count));let Xe=Pe-fe;if(Xe<0||Xe===1/0)return;ne.setup(dt,Mt,Kt,xt,Jt);let Un,Ce=Tt;if(Jt!==null&&(Un=ot.get(Jt),Ce=Ft,Ce.setIndex(Un)),dt.isMesh)Mt.wireframe===!0?(tt.setLineWidth(Mt.wireframeLinewidth*z()),Ce.setMode(w.LINES)):Ce.setMode(w.TRIANGLES);else if(dt.isLine){let ee=Mt.linewidth;ee===void 0&&(ee=1),tt.setLineWidth(ee*z()),dt.isLineSegments?Ce.setMode(w.LINES):dt.isLineLoop?Ce.setMode(w.LINE_LOOP):Ce.setMode(w.LINE_STRIP)}else dt.isPoints?Ce.setMode(w.POINTS):dt.isSprite&&Ce.setMode(w.TRIANGLES);if(dt.isBatchedMesh)if(dt._multiDrawInstances!==null)Ce.renderMultiDrawInstances(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount,dt._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Ce.renderMultiDraw(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount);else{let ee=dt._multiDrawStarts,ke=dt._multiDrawCounts,we=dt._multiDrawCount,zn=Jt?ot.get(Jt).bytesPerElement:1,qe=ht.get(Mt).currentProgram.getUniforms();for(let Nn=0;Nn<we;Nn++)qe.setValue(w,"_gl_DrawID",Nn),Ce.render(ee[Nn]/zn,ke[Nn])}else if(dt.isInstancedMesh)Ce.renderInstances(fe,Xe,dt.count);else if(xt.isInstancedBufferGeometry){let ee=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,ke=Math.min(xt.instanceCount,ee);Ce.renderInstances(fe,Xe,ke)}else Ce.render(fe,Xe)};function be(N,ft,xt){N.transparent===!0&&N.side===Ie&&N.forceSinglePass===!1?(N.side=Zn,N.needsUpdate=!0,vi(N,ft,xt),N.side=On,N.needsUpdate=!0,vi(N,ft,xt),N.side=Ie):vi(N,ft,xt)}this.compile=function(N,ft,xt=null){xt===null&&(xt=N),f=Lt.get(xt),f.init(ft),x.push(f),xt.traverseVisible(function(dt){dt.isLight&&dt.layers.test(ft.layers)&&(f.pushLight(dt),dt.castShadow&&f.pushShadow(dt))}),N!==xt&&N.traverseVisible(function(dt){dt.isLight&&dt.layers.test(ft.layers)&&(f.pushLight(dt),dt.castShadow&&f.pushShadow(dt))}),f.setupLights();let Mt=new Set;return N.traverse(function(dt){if(!(dt.isMesh||dt.isPoints||dt.isLine||dt.isSprite))return;let Nt=dt.material;if(Nt)if(Array.isArray(Nt))for(let Zt=0;Zt<Nt.length;Zt++){let Kt=Nt[Zt];be(Kt,xt,dt),Mt.add(Kt)}else be(Nt,xt,dt),Mt.add(Nt)}),x.pop(),f=null,Mt},this.compileAsync=function(N,ft,xt=null){let Mt=this.compile(N,ft,xt);return new Promise(dt=>{function Nt(){if(Mt.forEach(function(Zt){ht.get(Zt).currentProgram.isReady()&&Mt.delete(Zt)}),Mt.size===0){dt(N);return}setTimeout(Nt,10)}$.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let cn=null;function Sn(N){cn&&cn(N)}function Mi(){ni.stop()}function bi(){ni.start()}let ni=new lf;ni.setAnimationLoop(Sn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(N){cn=N,bt.setAnimationLoop(N),N===null?ni.stop():ni.start()},bt.addEventListener("sessionstart",Mi),bt.addEventListener("sessionend",bi),this.render=function(N,ft){if(ft!==void 0&&ft.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ft.parent===null&&ft.matrixWorldAutoUpdate===!0&&ft.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(ft),ft=bt.getCamera()),N.isScene===!0&&N.onBeforeRender(M,N,ft,A),f=Lt.get(N,x.length),f.init(ft),x.push(f),G.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),Y.setFromProjectionMatrix(G),S=this.localClippingEnabled,T=yt.init(this.clippingPlanes,S),_=gt.get(N,p.length),_.init(),p.push(_),bt.enabled===!0&&bt.isPresenting===!0){let Nt=M.xr.getDepthSensingMesh();Nt!==null&&qn(Nt,ft,-1/0,M.sortObjects)}qn(N,ft,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(I,Q),J=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,J&&Xt.addToRenderList(_,N),this.info.render.frame++,T===!0&&yt.beginShadows();let xt=f.state.shadowsArray;At.render(xt,N,ft),T===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Mt=_.opaque,dt=_.transmissive;if(f.setupLights(),ft.isArrayCamera){let Nt=ft.cameras;if(dt.length>0)for(let Zt=0,Kt=Nt.length;Zt<Kt;Zt++){let Jt=Nt[Zt];io(Mt,dt,N,Jt)}J&&Xt.render(N);for(let Zt=0,Kt=Nt.length;Zt<Kt;Zt++){let Jt=Nt[Zt];Cr(_,N,Jt,Jt.viewport)}}else dt.length>0&&io(Mt,dt,N,ft),J&&Xt.render(N),Cr(_,N,ft);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),N.isScene===!0&&N.onAfterRender(M,N,ft),ne.resetDefaultState(),k=-1,O=null,x.pop(),x.length>0?(f=x[x.length-1],T===!0&&yt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function qn(N,ft,xt,Mt){if(N.visible===!1)return;if(N.layers.test(ft.layers)){if(N.isGroup)xt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ft);else if(N.isLight)f.pushLight(N),N.castShadow&&f.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Y.intersectsSprite(N)){Mt&&U.setFromMatrixPosition(N.matrixWorld).applyMatrix4(G);let Zt=st.update(N),Kt=N.material;Kt.visible&&_.push(N,Zt,Kt,xt,U.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Y.intersectsObject(N))){let Zt=st.update(N),Kt=N.material;if(Mt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),U.copy(N.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),U.copy(Zt.boundingSphere.center)),U.applyMatrix4(N.matrixWorld).applyMatrix4(G)),Array.isArray(Kt)){let Jt=Zt.groups;for(let se=0,oe=Jt.length;se<oe;se++){let te=Jt[se],fe=Kt[te.materialIndex];fe&&fe.visible&&_.push(N,Zt,fe,xt,U.z,te)}}else Kt.visible&&_.push(N,Zt,Kt,xt,U.z,null)}}let Nt=N.children;for(let Zt=0,Kt=Nt.length;Zt<Kt;Zt++)qn(Nt[Zt],ft,xt,Mt)}function Cr(N,ft,xt,Mt){let dt=N.opaque,Nt=N.transmissive,Zt=N.transparent;f.setupLightsView(xt),T===!0&&yt.setGlobalState(M.clippingPlanes,xt),Mt&&tt.viewport(y.copy(Mt)),dt.length>0&&rs(dt,ft,xt),Nt.length>0&&rs(Nt,ft,xt),Zt.length>0&&rs(Zt,ft,xt),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function io(N,ft,xt,Mt){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Mt.id]===void 0&&(f.state.transmissionRenderTarget[Mt.id]=new Ki(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Wo:Zi,minFilter:Xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));let Nt=f.state.transmissionRenderTarget[Mt.id],Zt=Mt.viewport||y;Nt.setSize(Zt.z,Zt.w);let Kt=M.getRenderTarget();M.setRenderTarget(Nt),M.getClearColor(W),et=M.getClearAlpha(),et<1&&M.setClearColor(16777215,.5),M.clear(),J&&Xt.render(xt);let Jt=M.toneMapping;M.toneMapping=mr;let se=Mt.viewport;if(Mt.viewport!==void 0&&(Mt.viewport=void 0),f.setupLightsView(Mt),T===!0&&yt.setGlobalState(M.clippingPlanes,Mt),rs(N,xt,Mt),P.updateMultisampleRenderTarget(Nt),P.updateRenderTargetMipmap(Nt),$.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let te=0,fe=ft.length;te<fe;te++){let Pe=ft[te],Xe=Pe.object,Un=Pe.geometry,Ce=Pe.material,ee=Pe.group;if(Ce.side===Ie&&Xe.layers.test(Mt.layers)){let ke=Ce.side;Ce.side=Zn,Ce.needsUpdate=!0,ta(Xe,xt,Mt,Un,Ce,ee),Ce.side=ke,Ce.needsUpdate=!0,oe=!0}}oe===!0&&(P.updateMultisampleRenderTarget(Nt),P.updateRenderTargetMipmap(Nt))}M.setRenderTarget(Kt),M.setClearColor(W,et),se!==void 0&&(Mt.viewport=se),M.toneMapping=Jt}function rs(N,ft,xt){let Mt=ft.isScene===!0?ft.overrideMaterial:null;for(let dt=0,Nt=N.length;dt<Nt;dt++){let Zt=N[dt],Kt=Zt.object,Jt=Zt.geometry,se=Mt===null?Zt.material:Mt,oe=Zt.group;Kt.layers.test(xt.layers)&&ta(Kt,ft,xt,Jt,se,oe)}}function ta(N,ft,xt,Mt,dt,Nt){N.onBeforeRender(M,ft,xt,Mt,dt,Nt),N.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),dt.onBeforeRender(M,ft,xt,Mt,N,Nt),dt.transparent===!0&&dt.side===Ie&&dt.forceSinglePass===!1?(dt.side=Zn,dt.needsUpdate=!0,M.renderBufferDirect(xt,ft,Mt,dt,N,Nt),dt.side=On,dt.needsUpdate=!0,M.renderBufferDirect(xt,ft,Mt,dt,N,Nt),dt.side=Ie):M.renderBufferDirect(xt,ft,Mt,dt,N,Nt),N.onAfterRender(M,ft,xt,Mt,dt,Nt)}function vi(N,ft,xt){ft.isScene!==!0&&(ft=X);let Mt=ht.get(N),dt=f.state.lights,Nt=f.state.shadowsArray,Zt=dt.state.version,Kt=wt.getParameters(N,dt.state,Nt,ft,xt),Jt=wt.getProgramCacheKey(Kt),se=Mt.programs;Mt.environment=N.isMeshStandardMaterial?ft.environment:null,Mt.fog=ft.fog,Mt.envMap=(N.isMeshStandardMaterial?F:E).get(N.envMap||Mt.environment),Mt.envMapRotation=Mt.environment!==null&&N.envMap===null?ft.environmentRotation:N.envMapRotation,se===void 0&&(N.addEventListener("dispose",me),se=new Map,Mt.programs=se);let oe=se.get(Jt);if(oe!==void 0){if(Mt.currentProgram===oe&&Mt.lightsStateVersion===Zt)return os(N,Kt),oe}else Kt.uniforms=wt.getUniforms(N),N.onBeforeCompile(Kt,M),oe=wt.acquireProgram(Kt,Jt),se.set(Jt,oe),Mt.uniforms=Kt.uniforms;let te=Mt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(te.clippingPlanes=yt.uniform),os(N,Kt),Mt.needsLights=as(N),Mt.lightsStateVersion=Zt,Mt.needsLights&&(te.ambientLightColor.value=dt.state.ambient,te.lightProbe.value=dt.state.probe,te.directionalLights.value=dt.state.directional,te.directionalLightShadows.value=dt.state.directionalShadow,te.spotLights.value=dt.state.spot,te.spotLightShadows.value=dt.state.spotShadow,te.rectAreaLights.value=dt.state.rectArea,te.ltc_1.value=dt.state.rectAreaLTC1,te.ltc_2.value=dt.state.rectAreaLTC2,te.pointLights.value=dt.state.point,te.pointLightShadows.value=dt.state.pointShadow,te.hemisphereLights.value=dt.state.hemi,te.directionalShadowMap.value=dt.state.directionalShadowMap,te.directionalShadowMatrix.value=dt.state.directionalShadowMatrix,te.spotShadowMap.value=dt.state.spotShadowMap,te.spotLightMatrix.value=dt.state.spotLightMatrix,te.spotLightMap.value=dt.state.spotLightMap,te.pointShadowMap.value=dt.state.pointShadowMap,te.pointShadowMatrix.value=dt.state.pointShadowMatrix),Mt.currentProgram=oe,Mt.uniformsList=null,oe}function ss(N){if(N.uniformsList===null){let ft=N.currentProgram.getUniforms();N.uniformsList=Ls.seqWithValue(ft.seq,N.uniforms)}return N.uniformsList}function os(N,ft){let xt=ht.get(N);xt.outputColorSpace=ft.outputColorSpace,xt.batching=ft.batching,xt.batchingColor=ft.batchingColor,xt.instancing=ft.instancing,xt.instancingColor=ft.instancingColor,xt.instancingMorph=ft.instancingMorph,xt.skinning=ft.skinning,xt.morphTargets=ft.morphTargets,xt.morphNormals=ft.morphNormals,xt.morphColors=ft.morphColors,xt.morphTargetsCount=ft.morphTargetsCount,xt.numClippingPlanes=ft.numClippingPlanes,xt.numIntersection=ft.numClipIntersection,xt.vertexAlphas=ft.vertexAlphas,xt.vertexTangents=ft.vertexTangents,xt.toneMapping=ft.toneMapping}function De(N,ft,xt,Mt,dt){ft.isScene!==!0&&(ft=X),P.resetTextureUnits();let Nt=ft.fog,Zt=Mt.isMeshStandardMaterial?ft.environment:null,Kt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mr,Jt=(Mt.isMeshStandardMaterial?F:E).get(Mt.envMap||Zt),se=Mt.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,oe=!!xt.attributes.tangent&&(!!Mt.normalMap||Mt.anisotropy>0),te=!!xt.morphAttributes.position,fe=!!xt.morphAttributes.normal,Pe=!!xt.morphAttributes.color,Xe=mr;Mt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Xe=M.toneMapping);let Un=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,Ce=Un!==void 0?Un.length:0,ee=ht.get(Mt),ke=f.state.lights;if(T===!0&&(S===!0||N!==O)){let Yn=N===O&&Mt.id===k;yt.setState(Mt,N,Yn)}let we=!1;Mt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==ke.state.version||ee.outputColorSpace!==Kt||dt.isBatchedMesh&&ee.batching===!1||!dt.isBatchedMesh&&ee.batching===!0||dt.isBatchedMesh&&ee.batchingColor===!0&&dt.colorTexture===null||dt.isBatchedMesh&&ee.batchingColor===!1&&dt.colorTexture!==null||dt.isInstancedMesh&&ee.instancing===!1||!dt.isInstancedMesh&&ee.instancing===!0||dt.isSkinnedMesh&&ee.skinning===!1||!dt.isSkinnedMesh&&ee.skinning===!0||dt.isInstancedMesh&&ee.instancingColor===!0&&dt.instanceColor===null||dt.isInstancedMesh&&ee.instancingColor===!1&&dt.instanceColor!==null||dt.isInstancedMesh&&ee.instancingMorph===!0&&dt.morphTexture===null||dt.isInstancedMesh&&ee.instancingMorph===!1&&dt.morphTexture!==null||ee.envMap!==Jt||Mt.fog===!0&&ee.fog!==Nt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==yt.numPlanes||ee.numIntersection!==yt.numIntersection)||ee.vertexAlphas!==se||ee.vertexTangents!==oe||ee.morphTargets!==te||ee.morphNormals!==fe||ee.morphColors!==Pe||ee.toneMapping!==Xe||ee.morphTargetsCount!==Ce)&&(we=!0):(we=!0,ee.__version=Mt.version);let zn=ee.currentProgram;we===!0&&(zn=vi(Mt,ft,dt));let qe=!1,Nn=!1,Vn=!1,je=zn.getUniforms(),Ei=ee.uniforms;if(tt.useProgram(zn.program)&&(qe=!0,Nn=!0,Vn=!0),Mt.id!==k&&(k=Mt.id,Nn=!0),qe||O!==N){q.reverseDepthBuffer?(D.copy(N.projectionMatrix),Sp(D),Tp(D),je.setValue(w,"projectionMatrix",D)):je.setValue(w,"projectionMatrix",N.projectionMatrix),je.setValue(w,"viewMatrix",N.matrixWorldInverse);let Yn=je.map.cameraPosition;Yn!==void 0&&Yn.setValue(w,H.setFromMatrixPosition(N.matrixWorld)),q.logarithmicDepthBuffer&&je.setValue(w,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(Mt.isMeshPhongMaterial||Mt.isMeshToonMaterial||Mt.isMeshLambertMaterial||Mt.isMeshBasicMaterial||Mt.isMeshStandardMaterial||Mt.isShaderMaterial)&&je.setValue(w,"isOrthographic",N.isOrthographicCamera===!0),O!==N&&(O=N,Nn=!0,Vn=!0)}if(dt.isSkinnedMesh){je.setOptional(w,dt,"bindMatrix"),je.setOptional(w,dt,"bindMatrixInverse");let Yn=dt.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),je.setValue(w,"boneTexture",Yn.boneTexture,P))}dt.isBatchedMesh&&(je.setOptional(w,dt,"batchingTexture"),je.setValue(w,"batchingTexture",dt._matricesTexture,P),je.setOptional(w,dt,"batchingIdTexture"),je.setValue(w,"batchingIdTexture",dt._indirectTexture,P),je.setOptional(w,dt,"batchingColorTexture"),dt._colorsTexture!==null&&je.setValue(w,"batchingColorTexture",dt._colorsTexture,P));let Ir=xt.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0)&&Ht.update(dt,xt,zn),(Nn||ee.receiveShadow!==dt.receiveShadow)&&(ee.receiveShadow=dt.receiveShadow,je.setValue(w,"receiveShadow",dt.receiveShadow)),Mt.isMeshGouraudMaterial&&Mt.envMap!==null&&(Ei.envMap.value=Jt,Ei.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),Mt.isMeshStandardMaterial&&Mt.envMap===null&&ft.environment!==null&&(Ei.envMapIntensity.value=ft.environmentIntensity),Nn&&(je.setValue(w,"toneMappingExposure",M.toneMappingExposure),ee.needsLights&&Pr(Ei,Vn),Nt&&Mt.fog===!0&&vt.refreshFogUniforms(Ei,Nt),vt.refreshMaterialUniforms(Ei,Mt,at,K,f.state.transmissionRenderTarget[N.id]),Ls.upload(w,ss(ee),Ei,P)),Mt.isShaderMaterial&&Mt.uniformsNeedUpdate===!0&&(Ls.upload(w,ss(ee),Ei,P),Mt.uniformsNeedUpdate=!1),Mt.isSpriteMaterial&&je.setValue(w,"center",dt.center),je.setValue(w,"modelViewMatrix",dt.modelViewMatrix),je.setValue(w,"normalMatrix",dt.normalMatrix),je.setValue(w,"modelMatrix",dt.matrixWorld),Mt.isShaderMaterial||Mt.isRawShaderMaterial){let Yn=Mt.uniformsGroups;for(let Lr=0,ea=Yn.length;Lr<ea;Lr++){let wi=Yn[Lr];nt.update(wi,zn),nt.bind(wi,zn)}}return zn}function Pr(N,ft){N.ambientLightColor.needsUpdate=ft,N.lightProbe.needsUpdate=ft,N.directionalLights.needsUpdate=ft,N.directionalLightShadows.needsUpdate=ft,N.pointLights.needsUpdate=ft,N.pointLightShadows.needsUpdate=ft,N.spotLights.needsUpdate=ft,N.spotLightShadows.needsUpdate=ft,N.rectAreaLights.needsUpdate=ft,N.hemisphereLights.needsUpdate=ft}function as(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(N,ft,xt){ht.get(N.texture).__webglTexture=ft,ht.get(N.depthTexture).__webglTexture=xt;let Mt=ht.get(N);Mt.__hasExternalTextures=!0,Mt.__autoAllocateDepthBuffer=xt===void 0,Mt.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Mt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,ft){let xt=ht.get(N);xt.__webglFramebuffer=ft,xt.__useDefaultFramebuffer=ft===void 0},this.setRenderTarget=function(N,ft=0,xt=0){A=N,L=ft,C=xt;let Mt=!0,dt=null,Nt=!1,Zt=!1;if(N){let Jt=ht.get(N);if(Jt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(w.FRAMEBUFFER,null),Mt=!1;else if(Jt.__webglFramebuffer===void 0)P.setupRenderTarget(N);else if(Jt.__hasExternalTextures)P.rebindTextures(N,ht.get(N.texture).__webglTexture,ht.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let te=N.depthTexture;if(Jt.__boundDepthTexture!==te){if(te!==null&&ht.has(te)&&(N.width!==te.image.width||N.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(N)}}let se=N.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Zt=!0);let oe=ht.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(oe[ft])?dt=oe[ft][xt]:dt=oe[ft],Nt=!0):N.samples>0&&P.useMultisampledRTT(N)===!1?dt=ht.get(N).__webglMultisampledFramebuffer:Array.isArray(oe)?dt=oe[xt]:dt=oe,y.copy(N.viewport),v.copy(N.scissor),V=N.scissorTest}else y.copy(B).multiplyScalar(at).floor(),v.copy(j).multiplyScalar(at).floor(),V=ct;if(tt.bindFramebuffer(w.FRAMEBUFFER,dt)&&Mt&&tt.drawBuffers(N,dt),tt.viewport(y),tt.scissor(v),tt.setScissorTest(V),Nt){let Jt=ht.get(N.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt.__webglTexture,xt)}else if(Zt){let Jt=ht.get(N.texture),se=ft||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Jt.__webglTexture,xt||0,se)}k=-1},this.readRenderTargetPixels=function(N,ft,xt,Mt,dt,Nt,Zt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=ht.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt){tt.bindFramebuffer(w.FRAMEBUFFER,Kt);try{let Jt=N.texture,se=Jt.format,oe=Jt.type;if(!q.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ft>=0&&ft<=N.width-Mt&&xt>=0&&xt<=N.height-dt&&w.readPixels(ft,xt,Mt,dt,$t.convert(se),$t.convert(oe),Nt)}finally{let Jt=A!==null?ht.get(A).__webglFramebuffer:null;tt.bindFramebuffer(w.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(N,ft,xt,Mt,dt,Nt,Zt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=ht.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt){let Jt=N.texture,se=Jt.format,oe=Jt.type;if(!q.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ft>=0&&ft<=N.width-Mt&&xt>=0&&xt<=N.height-dt){tt.bindFramebuffer(w.FRAMEBUFFER,Kt);let te=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,te),w.bufferData(w.PIXEL_PACK_BUFFER,Nt.byteLength,w.STREAM_READ),w.readPixels(ft,xt,Mt,dt,$t.convert(se),$t.convert(oe),0);let fe=A!==null?ht.get(A).__webglFramebuffer:null;tt.bindFramebuffer(w.FRAMEBUFFER,fe);let Pe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await wp(w,Pe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,te),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Nt),w.deleteBuffer(te),w.deleteSync(Pe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,ft=null,xt=0){N.isTexture!==!0&&(Va("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ft=arguments[0]||null,N=arguments[1]);let Mt=Math.pow(2,-xt),dt=Math.floor(N.image.width*Mt),Nt=Math.floor(N.image.height*Mt),Zt=ft!==null?ft.x:0,Kt=ft!==null?ft.y:0;P.setTexture2D(N,0),w.copyTexSubImage2D(w.TEXTURE_2D,xt,0,0,Zt,Kt,dt,Nt),tt.unbindTexture()},this.copyTextureToTexture=function(N,ft,xt=null,Mt=null,dt=0){N.isTexture!==!0&&(Va("WebGLRenderer: copyTextureToTexture function signature has changed."),Mt=arguments[0]||null,N=arguments[1],ft=arguments[2],dt=arguments[3]||0,xt=null);let Nt,Zt,Kt,Jt,se,oe;xt!==null?(Nt=xt.max.x-xt.min.x,Zt=xt.max.y-xt.min.y,Kt=xt.min.x,Jt=xt.min.y):(Nt=N.image.width,Zt=N.image.height,Kt=0,Jt=0),Mt!==null?(se=Mt.x,oe=Mt.y):(se=0,oe=0);let te=$t.convert(ft.format),fe=$t.convert(ft.type);P.setTexture2D(ft,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ft.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ft.unpackAlignment);let Pe=w.getParameter(w.UNPACK_ROW_LENGTH),Xe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Un=w.getParameter(w.UNPACK_SKIP_PIXELS),Ce=w.getParameter(w.UNPACK_SKIP_ROWS),ee=w.getParameter(w.UNPACK_SKIP_IMAGES),ke=N.isCompressedTexture?N.mipmaps[dt]:N.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ke.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ke.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Kt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Jt),N.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,dt,se,oe,Nt,Zt,te,fe,ke.data):N.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,dt,se,oe,ke.width,ke.height,te,ke.data):w.texSubImage2D(w.TEXTURE_2D,dt,se,oe,Nt,Zt,te,fe,ke),w.pixelStorei(w.UNPACK_ROW_LENGTH,Pe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Un),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ce),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ee),dt===0&&ft.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),tt.unbindTexture()},this.copyTextureToTexture3D=function(N,ft,xt=null,Mt=null,dt=0){N.isTexture!==!0&&(Va("WebGLRenderer: copyTextureToTexture3D function signature has changed."),xt=arguments[0]||null,Mt=arguments[1]||null,N=arguments[2],ft=arguments[3],dt=arguments[4]||0);let Nt,Zt,Kt,Jt,se,oe,te,fe,Pe,Xe=N.isCompressedTexture?N.mipmaps[dt]:N.image;xt!==null?(Nt=xt.max.x-xt.min.x,Zt=xt.max.y-xt.min.y,Kt=xt.max.z-xt.min.z,Jt=xt.min.x,se=xt.min.y,oe=xt.min.z):(Nt=Xe.width,Zt=Xe.height,Kt=Xe.depth,Jt=0,se=0,oe=0),Mt!==null?(te=Mt.x,fe=Mt.y,Pe=Mt.z):(te=0,fe=0,Pe=0);let Un=$t.convert(ft.format),Ce=$t.convert(ft.type),ee;if(ft.isData3DTexture)P.setTexture3D(ft,0),ee=w.TEXTURE_3D;else if(ft.isDataArrayTexture||ft.isCompressedArrayTexture)P.setTexture2DArray(ft,0),ee=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ft.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ft.unpackAlignment);let ke=w.getParameter(w.UNPACK_ROW_LENGTH),we=w.getParameter(w.UNPACK_IMAGE_HEIGHT),zn=w.getParameter(w.UNPACK_SKIP_PIXELS),qe=w.getParameter(w.UNPACK_SKIP_ROWS),Nn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Xe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Jt),w.pixelStorei(w.UNPACK_SKIP_ROWS,se),w.pixelStorei(w.UNPACK_SKIP_IMAGES,oe),N.isDataTexture||N.isData3DTexture?w.texSubImage3D(ee,dt,te,fe,Pe,Nt,Zt,Kt,Un,Ce,Xe.data):ft.isCompressedArrayTexture?w.compressedTexSubImage3D(ee,dt,te,fe,Pe,Nt,Zt,Kt,Un,Xe.data):w.texSubImage3D(ee,dt,te,fe,Pe,Nt,Zt,Kt,Un,Ce,Xe),w.pixelStorei(w.UNPACK_ROW_LENGTH,ke),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,we),w.pixelStorei(w.UNPACK_SKIP_PIXELS,zn),w.pixelStorei(w.UNPACK_SKIP_ROWS,qe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Nn),dt===0&&ft.generateMipmaps&&w.generateMipmap(ee),tt.unbindTexture()},this.initRenderTarget=function(N){ht.get(N).__webglFramebuffer===void 0&&P.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?P.setTextureCube(N,0):N.isData3DTexture?P.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?P.setTexture2DArray(N,0):P.setTexture2D(N,0),tt.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,tt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ru?"display-p3":"srgb",e.unpackColorSpace=Ue.workingColorSpace===xc?"display-p3":"srgb"}};var sc=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ks=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Eh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new R,oc=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.applyMatrix4(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.applyNormalMatrix(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.transformDirection(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jn=class extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Es,mo=new R,ws=new R,Ss=new R,Ts=new Ut,go=new Ut,pf=new le,Sa=new R,_o=new R,Ta=new R,L0=new Ut,ml=new Ut,D0=new Ut,ti=class extends un{constructor(t=new Jn){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eh(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new oc(n,3,0,!1)),Es.setAttribute("uv",new oc(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),pf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ss.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Ra(Sa.set(-.5,-.5,0),Ss,o,ws,r,s),Ra(_o.set(.5,-.5,0),Ss,o,ws,r,s),Ra(Ta.set(.5,.5,0),Ss,o,ws,r,s),L0.set(0,0),ml.set(1,0),D0.set(1,1);let a=t.ray.intersectTriangle(Sa,_o,Ta,!1,mo);if(a===null&&(Ra(_o.set(-.5,.5,0),Ss,o,ws,r,s),ml.set(0,1),a=t.ray.intersectTriangle(Sa,Ta,_o,!1,mo),a===null))return;let c=t.ray.origin.distanceTo(mo);c<t.near||c>t.far||e.push({distance:c,point:mo.clone(),uv:dr.getInterpolation(mo,Sa,_o,Ta,L0,ml,D0,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ra(i,t,e,n,r,s){Ts.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(go.x=s*Ts.x-r*Ts.y,go.y=r*Ts.x+s*Ts.y):go.copy(Ts),i.copy(t),i.x+=go.x,i.y+=go.y,i.applyMatrix4(pf)}var wh=class extends Kn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=Tn,h=Tn,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ac=class extends Le{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Rs=new le,U0=new le,Aa=[],N0=new $i,by=new le,yo=new Rt,xo=new Ji,zs=class extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,by)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),N0.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(N0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),xo.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(xo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(n),t.ray.intersectsSphere(xo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Rs),U0.multiplyMatrices(n,Rs),yo.matrixWorld=U0,yo.raycast(t,Aa);for(let o=0,a=Aa.length;o<a;o++){let c=Aa[o];c.instanceId=s,c.object=this,e.push(c)}Aa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new wh(new Float32Array(r*this.count),r,this.count,Qh,Ti));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Uo=class extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},cc=new R,lc=new R,H0=new le,Mo=new Lo,Ca=new Ji,gl=new R,F0=new R,hc=class extends un{constructor(t=new ve,e=new Uo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)cc.fromBufferAttribute(e,r-1),lc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=cc.distanceTo(lc);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),Ca.radius+=s,t.ray.intersectsSphere(Ca)===!1)return;H0.copy(r).invert(),Mo.copy(t.ray).applyMatrix4(H0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=h.getX(_),x=h.getX(_+1),M=Pa(this,t,Mo,c,p,x);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(g-1),f=h.getX(m),p=Pa(this,t,Mo,c,_,f);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=Pa(this,t,Mo,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Pa(this,t,Mo,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Pa(i,t,e,n,r,s){let o=i.geometry.attributes.position;if(cc.fromBufferAttribute(o,r),lc.fromBufferAttribute(o,s),e.distanceSqToSegment(cc,lc,gl,F0)>n)return;gl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(gl);if(!(c<t.near||c>t.far))return{distance:c,point:F0.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var _r=class extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},O0=new le,Sh=new Lo,Ia=new Ji,La=new R,yr=class extends un{constructor(t=new ve,e=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=s,t.ray.intersectsSphere(Ia)===!1)return;O0.copy(r).invert(),Sh.copy(t.ray).applyMatrix4(O0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let f=l.getX(g);La.fromBufferAttribute(u,f),B0(La,f,c,r,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)La.fromBufferAttribute(u,g),B0(La,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function B0(i,t,e,n,r,s,o){let a=Sh.distanceSqToPoint(i);if(a<e){let c=new R;Sh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Rn=class extends Kn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Ut:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,r=[],s=[],o=[],a=new R,c=new le;for(let m=0;m<=t;m++){let g=m/t;r[m]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Mn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Mn(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},No=class extends ri{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ut){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Th=class extends No{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function au(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,r(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Da=new R,_l=new au,yl=new au,xl=new au,Rh=class extends ri{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Da.subVectors(r[0],r[1]).add(r[0]),l=Da);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Da.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Da),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),_l.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,f),yl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,f),xl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),yl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),xl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(_l.calc(c),yl.calc(c),xl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function k0(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function vy(i,t){let e=1-i;return e*e*t}function Ey(i,t){return 2*(1-i)*i*t}function wy(i,t){return i*i*t}function To(i,t,e,n){return vy(i,t)+Ey(i,e)+wy(i,n)}function Sy(i,t){let e=1-i;return e*e*e*t}function Ty(i,t){let e=1-i;return 3*e*e*i*t}function Ry(i,t){return 3*(1-i)*i*i*t}function Ay(i,t){return i*i*i*t}function Ro(i,t,e,n,r){return Sy(i,t)+Ty(i,e)+Ry(i,n)+Ay(i,r)}var uc=class extends ri{constructor(t=new Ut,e=new Ut,n=new Ut,r=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ut){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ro(t,r.x,s.x,o.x,a.x),Ro(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ah=class extends ri{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ro(t,r.x,s.x,o.x,a.x),Ro(t,r.y,s.y,o.y,a.y),Ro(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fc=class extends ri{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ch=class extends ri{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dc=class extends ri{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(To(t,r.x,s.x,o.x),To(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ph=class extends ri{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(To(t,r.x,s.x,o.x),To(t,r.y,s.y,o.y),To(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pc=class extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(k0(a,c.x,l.x,h.x,u.x),k0(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Ut().fromArray(r))}return this}},Ih=Object.freeze({__proto__:null,ArcCurve:Th,CatmullRomCurve3:Rh,CubicBezierCurve:uc,CubicBezierCurve3:Ah,EllipseCurve:No,LineCurve:fc,LineCurve3:Ch,QuadraticBezierCurve:dc,QuadraticBezierCurve3:Ph,SplineCurve:pc}),Lh=class extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ih[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new Ih[r.type]().fromJSON(r))}return this}},Ho=class extends Lh{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fc(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new dc(this.currentPoint.clone(),new Ut(t,e),new Ut(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new uc(this.currentPoint.clone(),new Ut(t,e),new Ut(n,r),new Ut(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new pc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new No(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Dh=class i extends ve{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Mn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,d=new Ut,m=new R,g=new R,_=new R,f=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:f=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let x=0;x<=e;x++){let M=n+x*h*r,b=Math.sin(M),L=Math.cos(M);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*b,u.y=t[C].y,u.z=t[C].x*L,o.push(u.x,u.y,u.z),d.x=x/e,d.y=C/(t.length-1),a.push(d.x,d.y);let A=c[3*C+0]*b,k=c[3*C+1],O=c[3*C+0]*L;l.push(A,k,O)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){let b=M+x*t.length,L=b,C=b+t.length,A=b+t.length+1,k=b+1;s.push(L,C,k),s.push(A,k,C)}this.setIndex(s),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},xr=class i extends Dh{constructor(t=1,e=1,n=4,r=8){let s=new Ho;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Fo=class i extends ve{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new R,h=new Ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Me=class i extends ve{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],g=0,_=[],f=n/2,p=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(m,2));function x(){let b=new R,L=new R,C=0,A=(e-t)/n;for(let k=0;k<=s;k++){let O=[],y=k/s,v=y*(e-t)+t;for(let V=0;V<=r;V++){let W=V/r,et=W*c+a,pt=Math.sin(et),K=Math.cos(et);L.x=v*pt,L.y=-y*n+f,L.z=v*K,u.push(L.x,L.y,L.z),b.set(pt,A,K).normalize(),d.push(b.x,b.y,b.z),m.push(W,1-y),O.push(g++)}_.push(O)}for(let k=0;k<r;k++)for(let O=0;O<s;O++){let y=_[O][k],v=_[O+1][k],V=_[O+1][k+1],W=_[O][k+1];t>0&&(h.push(y,v,W),C+=3),e>0&&(h.push(v,V,W),C+=3)}l.addGroup(p,C,0),p+=C}function M(b){let L=g,C=new Ut,A=new R,k=0,O=b===!0?t:e,y=b===!0?1:-1;for(let V=1;V<=r;V++)u.push(0,f*y,0),d.push(0,y,0),m.push(.5,.5),g++;let v=g;for(let V=0;V<=r;V++){let et=V/r*c+a,pt=Math.cos(et),K=Math.sin(et);A.x=O*K,A.y=f*y,A.z=O*pt,u.push(A.x,A.y,A.z),d.push(0,y,0),C.x=pt*.5+.5,C.y=K*.5*y+.5,m.push(C.x,C.y),g++}for(let V=0;V<r;V++){let W=L+V,et=v+V;b===!0?h.push(et,et+1,W):h.push(et+1,et,W),k+=3}l.addGroup(p,k,b===!0?1:2),p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bn=class i extends Me{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mc=class i extends ve{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let M=new R,b=new R,L=new R;for(let C=0;C<e.length;C+=3)m(e[C+0],M),m(e[C+1],b),m(e[C+2],L),c(M,b,L,x)}function c(x,M,b,L){let C=L+1,A=[];for(let k=0;k<=C;k++){A[k]=[];let O=x.clone().lerp(b,k/C),y=M.clone().lerp(b,k/C),v=C-k;for(let V=0;V<=v;V++)V===0&&k===C?A[k][V]=O:A[k][V]=O.clone().lerp(y,V/v)}for(let k=0;k<C;k++)for(let O=0;O<2*(C-k)-1;O++){let y=Math.floor(O/2);O%2===0?(d(A[k][y+1]),d(A[k+1][y]),d(A[k][y])):(d(A[k][y+1]),d(A[k+1][y+1]),d(A[k+1][y]))}}function l(x){let M=new R;for(let b=0;b<s.length;b+=3)M.x=s[b+0],M.y=s[b+1],M.z=s[b+2],M.normalize().multiplyScalar(x),s[b+0]=M.x,s[b+1]=M.y,s[b+2]=M.z}function h(){let x=new R;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];let b=f(x)/2/Math.PI+.5,L=p(x)/Math.PI+.5;o.push(b,1-L)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let M=o[x+0],b=o[x+2],L=o[x+4],C=Math.max(M,b,L),A=Math.min(M,b,L);C>.9&&A<.1&&(M<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),L<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function m(x,M){let b=x*3;M.x=t[b+0],M.y=t[b+1],M.z=t[b+2]}function g(){let x=new R,M=new R,b=new R,L=new R,C=new Ut,A=new Ut,k=new Ut;for(let O=0,y=0;O<s.length;O+=9,y+=6){x.set(s[O+0],s[O+1],s[O+2]),M.set(s[O+3],s[O+4],s[O+5]),b.set(s[O+6],s[O+7],s[O+8]),C.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),k.set(o[y+4],o[y+5]),L.copy(x).add(M).add(b).divideScalar(3);let v=f(L);_(C,y+0,x,v),_(A,y+2,M,v),_(k,y+4,b,v)}}function _(x,M,b,L){L<0&&x.x===1&&(o[M]=x.x-1),b.x===0&&b.z===0&&(o[M]=L/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Zr=class extends Ho{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Ho().fromJSON(r))}return this}},Cy={triangulate:function(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=mf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=Uy(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Oo(s,o,e,a,c,m,0),o}};function mf(i,t,e,n,r){let s,o;if(r===Xy(i,t,e,n)>0)for(s=t;s<e;s+=n)o=z0(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=z0(s,i[s],i[s+1],o);return o&&bc(o,o.next)&&(ko(o),o=o.next),o}function Kr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bc(e,e.next)||Qe(e.prev,e,e.next)===0)){if(ko(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Oo(i,t,e,n,r,s,o){if(!i)return;!o&&s&&By(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Iy(i,n,r,s):Py(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ko(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Ly(Kr(i),t,e),Oo(i,t,e,n,r,s,2)):o===2&&Dy(i,t,e,n,r,s):Oo(Kr(i),t,e,n,r,s,1);break}}}function Py(i){let t=i.prev,e=i,n=i.next;if(Qe(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&Cs(r,a,s,c,o,l,g.x,g.y)&&Qe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Iy(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Qe(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,p=Uh(m,g,t,e,n),x=Uh(_,f,t,e,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=p&&b&&b.z<=x;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==r&&M!==o&&Cs(a,h,c,u,l,d,M.x,M.y)&&Qe(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&Cs(a,h,c,u,l,d,b.x,b.y)&&Qe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=p;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==r&&M!==o&&Cs(a,h,c,u,l,d,M.x,M.y)&&Qe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=x;){if(b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&Cs(a,h,c,u,l,d,b.x,b.y)&&Qe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ly(i,t,e){let n=i;do{let r=n.prev,s=n.next.next;!bc(r,s)&&gf(r,n,n.next,s)&&Bo(r,s)&&Bo(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ko(n),ko(n.next),n=i=s),n=n.next}while(n!==i);return Kr(n)}function Dy(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vy(o,a)){let c=_f(o,a);o=Kr(o,o.next),c=Kr(c,c.next),Oo(o,t,e,n,r,s,0),Oo(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Uy(i,t,e,n){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=mf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(zy(l));for(r.sort(Ny),s=0;s<r.length;s++)e=Hy(r[s],e);return e}function Ny(i,t){return i.x-t.x}function Hy(i,t){let e=Fy(i,t);if(!e)return t;let n=_f(e,i);return Kr(n,n.next),Kr(e,e.next)}function Fy(i,t){let e=t,n=-1/0,r,s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Cs(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Bo(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&Oy(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function Oy(i,t){return Qe(i.prev,i,t.prev)<0&&Qe(t.next,i,i.next)<0}function By(i,t,e,n){let r=i;do r.z===0&&(r.z=Uh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ky(r)}function ky(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Uh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cs(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Vy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Gy(i,t)&&(Bo(i,t)&&Bo(t,i)&&Wy(i,t)&&(Qe(i.prev,i,t.prev)||Qe(i,t.prev,t))||bc(i,t)&&Qe(i.prev,i,i.next)>0&&Qe(t.prev,t,t.next)>0)}function Qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bc(i,t){return i.x===t.x&&i.y===t.y}function gf(i,t,e,n){let r=Na(Qe(i,t,e)),s=Na(Qe(i,t,n)),o=Na(Qe(e,n,i)),a=Na(Qe(e,n,t));return!!(r!==s&&o!==a||r===0&&Ua(i,e,t)||s===0&&Ua(i,n,t)||o===0&&Ua(e,i,n)||a===0&&Ua(e,t,n))}function Ua(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Na(i){return i>0?1:i<0?-1:0}function Gy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Bo(i,t){return Qe(i.prev,i,i.next)<0?Qe(i,t,i.next)>=0&&Qe(i,i.prev,t)>=0:Qe(i,t,i.prev)<0||Qe(i,i.next,t)<0}function Wy(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _f(i,t){let e=new Nh(i.i,i.x,i.y),n=new Nh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function z0(i,t,e,n){let r=new Nh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ko(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xy(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Ao=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];V0(t),G0(n,t);let o=t.length;e.forEach(V0);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,G0(n,e[c]);let a=Cy.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function V0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function G0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vs=class i extends ve{constructor(t=new Zr([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new re(r,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:qy,M,b=!1,L,C,A,k;p&&(M=p.getSpacedPoints(h),b=!0,d=!1,L=p.computeFrenetFrames(h,!1),C=new R,A=new R,k=new R),d||(f=0,m=0,g=0,_=0);let O=a.extractPoints(l),y=O.shape,v=O.holes;if(!Ao.isClockWise(y)){y=y.reverse();for(let z=0,w=v.length;z<w;z++){let it=v[z];Ao.isClockWise(it)&&(v[z]=it.reverse())}}let W=Ao.triangulateShape(y,v),et=y;for(let z=0,w=v.length;z<w;z++){let it=v[z];y=y.concat(it)}function pt(z,w,it){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(w,it)}let K=y.length,at=W.length;function I(z,w,it){let $,q,tt,rt=z.x-w.x,ht=z.y-w.y,P=it.x-z.x,E=it.y-z.y,F=rt*rt+ht*ht,ot=rt*E-ht*P;if(Math.abs(ot)>Number.EPSILON){let lt=Math.sqrt(F),st=Math.sqrt(P*P+E*E),wt=w.x-ht/lt,vt=w.y+rt/lt,gt=it.x-E/st,Lt=it.y+P/st,yt=((gt-wt)*E-(Lt-vt)*P)/(rt*E-ht*P);$=wt+rt*yt-z.x,q=vt+ht*yt-z.y;let At=$*$+q*q;if(At<=2)return new Ut($,q);tt=Math.sqrt(At/2)}else{let lt=!1;rt>Number.EPSILON?P>Number.EPSILON&&(lt=!0):rt<-Number.EPSILON?P<-Number.EPSILON&&(lt=!0):Math.sign(ht)===Math.sign(E)&&(lt=!0),lt?($=-ht,q=rt,tt=Math.sqrt(F)):($=rt,q=ht,tt=Math.sqrt(F/2))}return new Ut($/tt,q/tt)}let Q=[];for(let z=0,w=et.length,it=w-1,$=z+1;z<w;z++,it++,$++)it===w&&(it=0),$===w&&($=0),Q[z]=I(et[z],et[it],et[$]);let B=[],j,ct=Q.concat();for(let z=0,w=v.length;z<w;z++){let it=v[z];j=[];for(let $=0,q=it.length,tt=q-1,rt=$+1;$<q;$++,tt++,rt++)tt===q&&(tt=0),rt===q&&(rt=0),j[$]=I(it[$],it[tt],it[rt]);B.push(j),ct=ct.concat(j)}for(let z=0;z<f;z++){let w=z/f,it=m*Math.cos(w*Math.PI/2),$=g*Math.sin(w*Math.PI/2)+_;for(let q=0,tt=et.length;q<tt;q++){let rt=pt(et[q],Q[q],$);G(rt.x,rt.y,-it)}for(let q=0,tt=v.length;q<tt;q++){let rt=v[q];j=B[q];for(let ht=0,P=rt.length;ht<P;ht++){let E=pt(rt[ht],j[ht],$);G(E.x,E.y,-it)}}}let Y=g+_;for(let z=0;z<K;z++){let w=d?pt(y[z],ct[z],Y):y[z];b?(A.copy(L.normals[0]).multiplyScalar(w.x),C.copy(L.binormals[0]).multiplyScalar(w.y),k.copy(M[0]).add(A).add(C),G(k.x,k.y,k.z)):G(w.x,w.y,0)}for(let z=1;z<=h;z++)for(let w=0;w<K;w++){let it=d?pt(y[w],ct[w],Y):y[w];b?(A.copy(L.normals[z]).multiplyScalar(it.x),C.copy(L.binormals[z]).multiplyScalar(it.y),k.copy(M[z]).add(A).add(C),G(k.x,k.y,k.z)):G(it.x,it.y,u/h*z)}for(let z=f-1;z>=0;z--){let w=z/f,it=m*Math.cos(w*Math.PI/2),$=g*Math.sin(w*Math.PI/2)+_;for(let q=0,tt=et.length;q<tt;q++){let rt=pt(et[q],Q[q],$);G(rt.x,rt.y,u+it)}for(let q=0,tt=v.length;q<tt;q++){let rt=v[q];j=B[q];for(let ht=0,P=rt.length;ht<P;ht++){let E=pt(rt[ht],j[ht],$);b?G(E.x,E.y+M[h-1].y,M[h-1].x+it):G(E.x,E.y,u+it)}}}T(),S();function T(){let z=r.length/3;if(d){let w=0,it=K*w;for(let $=0;$<at;$++){let q=W[$];H(q[2]+it,q[1]+it,q[0]+it)}w=h+f*2,it=K*w;for(let $=0;$<at;$++){let q=W[$];H(q[0]+it,q[1]+it,q[2]+it)}}else{for(let w=0;w<at;w++){let it=W[w];H(it[2],it[1],it[0])}for(let w=0;w<at;w++){let it=W[w];H(it[0]+K*h,it[1]+K*h,it[2]+K*h)}}n.addGroup(z,r.length/3-z,0)}function S(){let z=r.length/3,w=0;D(et,w),w+=et.length;for(let it=0,$=v.length;it<$;it++){let q=v[it];D(q,w),w+=q.length}n.addGroup(z,r.length/3-z,1)}function D(z,w){let it=z.length;for(;--it>=0;){let $=it,q=it-1;q<0&&(q=z.length-1);for(let tt=0,rt=h+f*2;tt<rt;tt++){let ht=K*tt,P=K*(tt+1),E=w+$+ht,F=w+q+ht,ot=w+q+P,lt=w+$+P;U(E,F,ot,lt)}}}function G(z,w,it){c.push(z),c.push(w),c.push(it)}function H(z,w,it){X(z),X(w),X(it);let $=r.length/3,q=x.generateTopUV(n,r,$-3,$-2,$-1);J(q[0]),J(q[1]),J(q[2])}function U(z,w,it,$){X(z),X(w),X($),X(w),X(it),X($);let q=r.length/3,tt=x.generateSideWallUV(n,r,q-6,q-3,q-2,q-1);J(tt[0]),J(tt[1]),J(tt[3]),J(tt[1]),J(tt[2]),J(tt[3])}function X(z){r.push(c[z*3+0]),r.push(c[z*3+1]),r.push(c[z*3+2])}function J(z){s.push(z.x),s.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Yy(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Ih[r.type]().fromJSON(r)),new i(n,t.options)}},qy={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new Ut(s,o),new Ut(a,c),new Ut(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ut(o,1-c),new Ut(l,1-u),new Ut(d,1-g),new Ut(_,1-p)]:[new Ut(a,1-c),new Ut(h,1-u),new Ut(m,1-g),new Ut(f,1-p)]}};function Yy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _n=class i extends mc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},zo=class i extends mc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ne=class i extends ve{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,d=new R,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){let x=[],M=p/n,b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let C=L/e;u.x=-t*Math.cos(r+C*s)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(r+C*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(C+b,1-M),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let M=h[p][x+1],b=h[p][x],L=h[p+1][x],C=h[p+1][x+1];(p!==0||o>0)&&m.push(M,b,C),(p!==n-1||c<Math.PI)&&m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var An=class i extends ve{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let _=g/r*s,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let _=(r+1)*m+g-1,f=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,x=(r+1)*m+g;o.push(_,f,x),o.push(f,p,x)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Te=class extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Gs=class extends gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ha(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Zy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ws=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hh=class extends Ws{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case zu:s=t,a=2*e-n;break;case Vu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zu:o=t,c=2*n-e;break;case Vu:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,x=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-m)*f+(1.5+m)*_+.5*g,b=m*f-m*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+x*o[l+L]+M*o[c+L]+b*o[u+L];return s}},Fh=class extends Ws{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},Oh=class extends Ws{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},_i=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ha(e,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ha(t.times,Array),values:Ha(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Oh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ga:e=this.InterpolantFactoryMethodDiscrete;break;case sh:e=this.InterpolantFactoryMethodLinear;break;case zc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ga;case this.InterpolantFactoryMethodLinear:return sh;case this.InterpolantFactoryMethodSmooth:return zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&Zy(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===zc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=sh;var $r=class extends _i{constructor(t,e,n){super(t,e,n)}};$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Ga;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Bh=class extends _i{};Bh.prototype.ValueTypeName="color";var kh=class extends _i{};kh.prototype.ValueTypeName="number";var zh=class extends Ws{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)rn.slerpFlat(s,0,o,l-a,o,l,c);return s}},gc=class extends _i{InterpolantFactoryMethodLinear(t){return new zh(this.times,this.values,this.getValueSize(),t)}};gc.prototype.ValueTypeName="quaternion";gc.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends _i{constructor(t,e,n){super(t,e,n)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Ga;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vh=class extends _i{};Vh.prototype.ValueTypeName="vector";var Gh=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Ky=new Gh,Wh=class{constructor(t){this.manager=t!==void 0?t:Ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vo=class extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Xs=class extends Vo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ml=new le,W0=new R,X0=new R,_c=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;W0.setFromMatrixPosition(t.matrixWorld),e.position.copy(W0),X0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(X0),e.updateMatrixWorld(),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var q0=new le,bo=new R,bl=new R,Xh=class extends _c{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bo.setFromMatrixPosition(t.matrixWorld),n.position.copy(bo),bl.copy(n.position),bl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bl),n.updateMatrixWorld(),r.makeTranslation(-bo.x,-bo.y,-bo.z),q0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(q0)}},yi=class extends Vo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},qh=class extends _c{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends Vo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new qh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var cu="\\[\\]\\.:\\/",$y=new RegExp("["+cu+"]","g"),lu="[^"+cu+"]",Jy="[^"+cu.replace("\\.","")+"]",jy=/((?:WC+[\/:])*)/.source.replace("WC",lu),Qy=/(WCOD+)?/.source.replace("WCOD",Jy),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lu),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lu),nx=new RegExp("^"+jy+Qy+tx+ex+"$"),ix=["material","materials","bones","map"],Yh=class{constructor(t,e,n){let r=n||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($y,"")}static parseTrackName(t){let e=nx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);ix.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=Yh;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var yf=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var xf=i=>yf.find(t=>t.id===i)??yf[0];var Mf=["none","float","aim","twohand","lotus"],Xo=i=>Mf.includes(i);function vf(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var vc=(i,t,e)=>i+(t-i)*e,Ef=i=>Math.min(1,Math.max(0,i)),qo=(i,t)=>Math.max(0,i)**t;function fu(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var wf=(i,t,e)=>new vn(i,t,e,"ZYX"),Zs=class{constructor(t,e={}){Ke(this,"n",t);Ke(this,"geo",new ve);Ke(this,"per");Ke(this,"radial");Ke(this,"closed");Ke(this,"sharp");Ke(this,"caps");Ke(this,"samples");Ke(this,"pos");Ke(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let r=this.radial+1,s=this.samples*r+(this.caps?2:0);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3);let o=new Float32Array(s*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*r+l)*2]=c/(this.samples-1),o[(c*r+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*r+l,u=h+r;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*r,l=c+1,h=(this.samples-1)*r;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new Le(this.pos,3)),this.geo.setAttribute("normal",new Le(this.nor,3)),this.geo.setAttribute("uv",new Le(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:r,radial:s,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=x=>t[o?(x%n+n)%n:Math.min(n-1,Math.max(0,x))],u=x=>typeof e=="number"?e:e[o?(x%n+n)%n:Math.min(n-1,Math.max(0,x))];for(let x=0;x<a;x++){let M=Math.floor(x/r),b=x%r/r;!o&&M>=n-1&&(M=n-2,b=1);let L=h(M),C=h(M+1);for(let A=0;A<3;A++)if(this.sharp)c[x*3+A]=L[A]+(C[A]-L[A])*b;else{let k=o||M>0?h(M-1)[A]:2*L[A]-C[A],O=o||M+2<n?h(M+2)[A]:2*C[A]-L[A],y=b*b,v=y*b;c[x*3+A]=.5*(2*L[A]+(-k+C[A])*b+(2*k-5*L[A]+4*C[A]-O)*y+(-k+3*L[A]-3*C[A]+O)*v)}l[x]=Math.max(1e-4,Math.abs(u(M)+(u(M+1)-u(M))*b))}let d=new R,m=new R,g=new R,_=new R,f=x=>{let M=o?(x-1+a-1)%(a-1):Math.max(0,x-1),b=o?(x+1)%(a-1):Math.min(a-1,x+1);return d.set(c[b*3]-c[M*3],c[b*3+1]-c[M*3+1],c[b*3+2]-c[M*3+2]),d.lengthSq()<1e-12&&d.set(0,0,1),d.normalize()};f(0),_.set(Math.abs(d.x)<.9?1:0,Math.abs(d.x)<.9?0:1,0),m.crossVectors(d,_).normalize();let p=s+1;for(let x=0;x<a;x++){f(x),m.addScaledVector(d,-m.dot(d)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(d,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(d,m);for(let M=0;M<=s;M++){let b=M/s*Math.PI*2,L=Math.cos(b),C=Math.sin(b),A=L*m.x+C*g.x,k=L*m.y+C*g.y,O=L*m.z+C*g.z,y=(x*p+M)*3;this.nor[y]=A,this.nor[y+1]=k,this.nor[y+2]=O,this.pos[y]=c[x*3]+l[x]*A,this.pos[y+1]=c[x*3+1]+l[x]*k,this.pos[y+2]=c[x*3+2]+l[x]*O}if(this.caps&&(x===0||x===a-1)){let M=(a*p+(x?1:0))*3,b=x?1:-1;this.pos[M]=c[x*3],this.pos[M+1]=c[x*3+1],this.pos[M+2]=c[x*3+2],this.nor[M]=d.x*b,this.nor[M+1]=d.y*b,this.nor[M+2]=d.z*b}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function an(i,t,e={}){return new Zs(i.length,e).set(i,t).geo}function xi(i,t,e,n=12,r=.35,s={}){let o=new le().makeRotationFromEuler(wf(...t)),a=[],c=[],l=new R;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+r*Math.sin(3*u)))}return an(a,c,{closed:!0,per:6,...s})}function tr(i,t,e,n,r,s=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<r;u++){let d=u/(r-1),m=s+2*Math.PI*n*d,g=t+(e-t)*d,_=l(d)+(a&&o?a.uniform(-o,o):0),[f,p]=c?c(g):[0,0];h.push([f+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var wc=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function si(i,t,e,n,r){let s=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);s.push(...l,...h,0,0,i),s.push(...h,...l,0,0,-t)}let a=new ve;return a.setAttribute("position",new re(s,3)),a.setAttribute("uv",new re(new Array(s.length/3*2).fill(.5),2)),r&&a.applyMatrix4(new le().makeRotationFromEuler(wf(...r))),a.computeVertexNormals(),a}function du(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),r.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;s.push(l,l+1,h+1,l,h+1,h)}let o=new ve;return o.setAttribute("position",new re(n,3)),o.setAttribute("uv",new re(r,2)),o.setIndex(s),o.computeVertexNormals(),o}var Ec=class{constructor(){Ke(this,"parts",new Map)}add(t,e,n,r,s){let o=t.index?t:rx(t),a=new le().compose(n?Array.isArray(n)?new R(...n):n:new R,new rn().setFromEuler(r??new vn),s===void 0?new R(1,1,1):typeof s=="number"?new R(s,s,s):new R(...s)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,r]of this.parts){let s=new Rt(pu(r),n);t.add(s),e.push(s);for(let o of r)o.dispose()}return this.parts.clear(),e}};function rx(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,r)=>r)),t}function pu(i){let t=0,e=0;for(let d of i)t+=d.attributes.position.count,e+=d.index.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=i.some(d=>d.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let d of i){let m=d.attributes.position.count;n.set(d.attributes.position.array,l*3),d.attributes.normal||d.computeVertexNormals(),r.set(d.attributes.normal.array,l*3),d.attributes.uv&&s.set(d.attributes.uv.array,l*2),a&&d.attributes.color&&a.set(d.attributes.color.array,l*3);let g=d.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new ve;return u.setAttribute("position",new Le(n,3)),u.setAttribute("normal",new Le(r,3)),u.setAttribute("uv",new Le(s,2)),a&&u.setAttribute("color",new Le(a,3)),u.setIndex(new Le(c,1)),u.computeBoundingSphere(),u}var bf=new Map;function hu(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function uu(i,t,e,n=4,r=1){let s=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let d=Math.floor(l),m=Math.floor(h),g=l-d,_=h-m,f=g*g*(3-2*g),p=_*_*(3-2*_),x=(b,L)=>hu((b%c+c)%c,(L%c+c)%c,r+u),M=vc(vc(x(d,m),x(d+1,m),f),vc(x(d,m+1),x(d+1,m+1),f),p);s+=M*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return s/a}function Sf(i,t,e,n=[1,1]){let r=bf.get(i);if(!r){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),r=new Rn(o),r.wrapS=r.wrapT=qr,bf.set(i,r)}let s=r.clone();return s.repeat.set(...n),s.needsUpdate=!0,s}var Tf=(i,t,e,n,r)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=r,i.data[t*4+3]=255};function jr(i=1,t=[1,1],e=.35,n=1.25){return Sf(`noise${i}`,128,r=>{for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=uu(o/(16*i),s/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,vc(e,n,a)/1.25));Tf(r,s*128+o,c,c,c)}},t)}function Rf(i=6,t=.11,e=[1,1]){return Sf(`vein${i}:${t}`,128,n=>{let r=[];for(let s=0;s<i;s++)for(let o=0;o<i;o++)r.push([(o+hu(o,s,9))/i,(s+hu(o,s,11))/i]);for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=o/128+(uu(o/16,s/16,8,2,5)-.5)*.08,c=s/128+(uu(o/16+7,s/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of r)for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let x=a-g-p,M=c-_-f,b=Math.sqrt(x*x+M*M);b<l?(h=l,l=b):b<h&&(h=b)}let u=(h-l)*i*.5,d=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*d*d);Tf(n,s*128+o,m,m,m)}},e)}var br=1.13,Yo=.66,he=(i,t,e)=>new Vt(i,t,e);function sx(i,t){let e=(s,o=!0)=>(o?i.push(s):t.push(s),s),n=(s,o=1.7)=>s.clone().multiplyScalar(o),r=s=>Math.min(2.4,.55+s*.13);return{bark:(s,o)=>e(new Te({color:n(o,1.5),map:jr(4,[3,2]),roughness:.9,emissive:s.clone().multiplyScalar(.4)})),plain:(s,o=.5)=>e(new Te({color:n(s),roughness:o})),leaf:(s,o)=>e(new Te({color:n(o,1.6),map:jr(1,[2,2],.45),roughness:.45,side:Ie,emissive:s.clone().multiplyScalar(.6)})),metal:(s,o=.28)=>e(new Te({color:n(s,1.25),metalness:.55,roughness:o+.12})),veins:(s,o,a,c=6,l=.11,h=.1)=>e(new Te({color:n(s,2.4),map:jr(1,[3,2]),emissive:o,emissiveMap:Rf(c,l,[4,2]),emissiveIntensity:r(a),roughness:.6,metalness:h})),lava:()=>e(new Te({color:he(.3,.05,0),emissive:he(1,.22,.015),emissiveMap:jr(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(s,o,a,c=On)=>e(new Te({color:o,emissive:s,emissiveMap:jr(1,[2,2],.6),emissiveIntensity:r(a),roughness:.4,side:c})),emissive:(s,o)=>e(new Te({color:s.clone().multiplyScalar(.15),emissive:s,emissiveIntensity:r(o),roughness:.4})),crystal:(s,o)=>e(new Te({color:n(s,1.3),emissive:s,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(s,o=.3)=>e(new Te({color:s,emissive:s.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Te({color:he(.55,.82,1),map:jr(2,[4,1],.7),emissive:he(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var ts=i=>Math.max(8,Math.round(i*.5)),Zo=i=>Math.max(1,Math.round(i*.45)),Sc=i=>i-Math.floor(i);function ox(i,t,e,n,r,s=.09,o=.1){let a=i+n,c=(a%t+t)%t;return r*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-s*c)*(Math.cos(o*c)+s/o*Math.sin(o*c)))}function ax(i,t,e,n=8,r=10,s=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-r)/s))))}function Af(i,t,e,n){let r=[];for(let s=0;s<t;s++){let o=new R(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),r.push([o.x,o.y,o.z])}return r}function mu(i,t,e,n,r,s){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*r));return o.push(e),an(o,o.map((a,c)=>s*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function cx(i,t,e,n,r,s,o,a=.45){return du(4,10,(c,l)=>{let h=2*c-1,u=.07+r*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-s*l**3,d=t+e*l,m=i+o*l,g=n*Math.max(.03,qo(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,f=h*g,p=Math.cos(m),x=Math.sin(m);return[_*p-f*x,_*x+f*p,d]})}function lx(i=.14,t=.055){return du(3,6,(e,n)=>{let r=2*e-1,s=t*(.04+qo(Math.sin(Math.PI*n**.75),.9));return[r*s,n*i,-Math.abs(r)*s*.45-.18*i*n*n]})}var Qr=new un;function Ks(i,t,e,n,r){Qr.position.set(e[0],e[1],e[2]),typeof n=="number"?Qr.scale.setScalar(Math.max(1e-5,n)):Qr.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),r?Qr.rotation.set(r[0],r[1],r[2],"ZYX"):Qr.rotation.set(0,0,0),Qr.updateMatrix(),i.setMatrixAt(t,Qr.matrix)}var _u=new _n(1,1),gu=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((r,s)=>{for(let o of n)o.offset.x-=s*e})};function hx(i){let{rng:t,m:e}=i,n=e.bark(he(.045,.028,.014),he(.3,.19,.1)),r=e.plain(he(.1,.3,.05),.55),s=e.leaf(he(.015,.14,.02),he(.1,.34,.045)),o=.022,a=_=>wc(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(an([...c,2.6,2.63].map(_=>[...a(_),_]),[...l,.06,.015],{radial:8,per:5}),n);for(let _=0;_<5;_++){let f=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(f),x=Math.sin(f);i.stat(an([[.03*p,.03*x,.3],[.06*p,.06*x,.17],[.1*p,.1*x,.07],[.14*p,.14*x,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,f,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:f-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},d=[.015,.09,.2,.235,.185,.06],m=[2.42,2.6,2.8,3.02,3.22,3.33];for(let _=0;_<6;_++){let f=2*Math.PI*_/6+t.uniform(-.15,.15),p=d.map((x,M)=>{let b=f+.22*M;return[x*Math.cos(b),x*Math.sin(b),m[M]+t.uniform(-.02,.02)]});i.stat(an(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let x of[2,4])u(p[x],Math.atan2(p[x][1],p[x][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,f,p,x,M])=>{let b=ts(56),L=tr(C=>fu(c,l,_+(f-_)*C)+.018,_,f,p,b,x,.004,t,a);i.stat(an(L,L.map((C,A)=>M*(1-.55*A/(b-1))),{radial:5,per:3}),r);for(let C=2;C<b-2;C+=Math.max(1,Math.floor((b-4)/Zo(22)))){let A=L[C],k=a(A[2]);u(A,Math.atan2(A[1]-k[1],A[0]-k[0]),t.uniform(.7,1.3))}});let g=i.inst(lx(),s,h.length);return i.anim(_=>{h.forEach((f,p)=>Ks(g,p,f.p,f.s,[f.rx+.16*Math.sin(_*.2094+f.ph),f.ry,f.rz+.1*Math.sin(_*.1309+f.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:he(.45,1,.35),hot:he(.7,1,.3),mid:he(.15,.8,.05)}}function ux(i){let{rng:t,m:e}=i,n=e.veins(he(.085,.065,.055),he(1,.3,.03),2,7,.06,0);n.roughness=.9;let r=e.lava(),s=e.core(he(1,.36,.04),he(.9,.12,.01),2,Ie);gu(i,r,.25),gu(i,s,-.18);let o=.014,a=g=>wc(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(an(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,f=2.35)=>fu(c,l,_+(f-_)*g);for(let g=0;g<2;g++){let _=ts(60),f=tr(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(an(f,f.map((p,x)=>.012+.003*Math.sin(x*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=ts(60),f=tr(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(an(f,f.map((p,x)=>.0085+.002*Math.sin(x*.7)),{radial:5,per:3}),r)}{let g=tr(_=>h(_,.5,2.2)-.001,.5,2.2,-3,ts(50),.8,0,void 0,a);i.stat(an(g,.0055,{radial:4,per:3}),r)}i.stat(xi(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(xi(.082,[0,0,0],.008,10,0),r,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(cx(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),s);i.stat(xi(.165,[0,0,0],.007,14,0),r,[0,0,2.86]);let u=6,d=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),f=t.uniform(.16,.2);d.push({p:[f*Math.cos(_),f*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(_u,e.emissive(he(1,.45,.05),10),u);return i.anim(g=>{d.forEach((_,f)=>{let p=Sc(g/60+_.ph),x=_.s*Math.min(1,p*6)*(1-.6*p);Ks(m,f,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*x,.85*x,7*x])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:he(1,.45,.1),hot:he(1,.7,.15),mid:he(1,.25,.02)}}function fx(i){let{rng:t,m:e}=i,n=e.metal(he(.1,.12,.16),.3),r=e.metal(he(.78,.84,.9),.18),s=e.water(),o=e.crystal(he(.2,.7,1),2.5),a=e.crystal(he(.4,.8,1),1.5);gu(i,s,.3);let c=.006,l=_=>wc(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(an(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(xi(.066,[0,0,0],.012,10,0),r,[0,0,2.56]);for(let _=0;_<3;_++){let f=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(an([[.04*f,.04*p,2.55],[.085*f,.085*p,2.68],[.12*f,.12*p,2.82],[.13*f,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),r)}for(let _=0;_<2;_++)i.stat(an(tr(.05,.4,2.45,7,ts(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),r);{let _=ts(64),f=tr(b=>.058+.012*Math.sin(b*20),.45,2.5,3.2,_,1,0,void 0,l),p=f.map((b,L)=>.012+.014*(.5+.5*Math.sin(L*.45))),x=new Zs(_,{radial:6,per:3});x.set(f,p),i.mesh(x.geo,s);let M=p.slice();i.anim(b=>{for(let L=0;L<_;L++)M[L]=p[L]*(1+.6*Math.sin(b*.2618-L*.7));x.set(f,M)})}[.7,1,1.35,1.7,2.05].forEach((_,f)=>{let p=f*2.1;i.stat(si(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,f,p,x,M,b,L,C,A],k)=>{let y=20+k*50,v=k===0?1:-1,V=x<p?-1:1,W=Math.PI/180,et=Array.from({length:40},(ct,Y)=>{let T=Y/39;return{a:(p+(x-p)*T)*W,b:p*W+V*C*W*T,R:_+(f-_)*T,y:b+.04*Math.sin(T*6),r:.004+M*qo(Math.sin(Math.PI*T),.8)}}),pt=(ct,Y,T,S)=>[ct*t.uniform(.35,1.4),Y*t.uniform(.8,1.2),-S*T+t.uniform(-1.4,1.4),t.uniform(1,5)],K=et.map((ct,Y)=>[pt(.07,.35,.9,Y),pt(.035,.7,1.7,Y),pt(.03,.3,1,Y),pt(.015,.6,1.8,Y),pt(.32,.45,.9,Y),pt(.2,.8,1.6,Y),pt(.1,1.3,2.3,Y)]),at=new Zs(40,{radial:6,per:2}),I=et.map(()=>[0,0,0]),Q=et.map(()=>0),B=i.mesh(at.geo,s,[0,0,3]);B.renderOrder=2;let j=ct=>{let Y=ox(ct,120,1,y,v),T=ax(ct,120,y,12),S=Math.floor((ct+y)/120),D=G=>G[0]*Math.sin(ct*G[1]+G[2]+S*G[3]);et.forEach((G,H)=>{let U=K[H],X=G.a*(1-T)+G.b*T+Y,J=G.R*(1-T)+L*(1+T*(D(U[0])+D(U[1])))*T;I[H][0]=J*Math.cos(X),I[H][2]=J*Math.sin(X),I[H][1]=G.y*(1-T)+(b+D(U[2])+D(U[3]))*T,Q[H]=G.r*(1+.3*(1-T)*Math.sin(ct*.2618-H*.8))*(1-T)+A*T*Math.max(.3,1+T*(D(U[4])+D(U[5])+D(U[6])))}),at.set(I,Q)};j(0),i.anim(j)});let d=[];for(let _=0;_<10;_++){let f=t.uniform(0,2*Math.PI),p=[Math.cos(f),0,Math.sin(f)],x=t.uniform(.2,.34),M=t.uniform(.12,.3);d.push({start:[p[0]*x,0,3+p[2]*x],vel:[p[0]*M+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*M+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of d)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:Zo(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(_u,a,d.length+m.length);m.forEach((_,f)=>Ks(g,d.length+f,_.p,_.s)),i.anim(_=>{d.forEach((f,p)=>{let x=Sc(_/f.per+f.ph),M=x*.9;Ks(g,p,[f.start[0]+f.vel[0]*M,f.start[1]+f.vel[1]*M,f.start[2]+f.vel[2]*M-.9*M*M],f.s*Math.min(1,x*10)*Math.min(1,(1-x)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(si(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let f=2*Math.PI*_/3;i.stat(si(.02,.12,.016,4,[Math.sin(f)*.4,-Math.cos(f)*.4,0]),o,[.045*Math.cos(f),.045*Math.sin(f),.36])}return{z:3,r:.145,glass:he(.3,.75,1),hot:he(.5,.95,1),mid:he(.05,.4,1)}}function dx(i){let{rng:t,m:e}=i,n=e.veins(he(.03,.02,.06),he(.85,.6,1),3,6,.09,.5),r=e.metal(he(.62,.58,.72),.2),s=e.crystal(he(.35,.15,1),3),o=e.emissive(he(.65,.4,1),4),a=e.emissive(he(.6,.3,1),3);i.stat(an([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(xi(.04,[0,0,0],.007,10,0),r,[0,0,_]);i.stat(an([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(an(tr(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),r);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,f)=>i.stat(xi(f===0||f===4?.064:.058,[0,0,0],.011,10,0),r,[0,0,_]));let l=xi(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let f=e.emissive(he(.65,.4,1),4),p=f.emissiveIntensity;f.transparent=!0;let x=i.mesh(l,f);i.anim(M=>{let b=Sc(M/60+_/4);x.position.z=.95+1.45*b,x.scale.set(1+.3*b,1+.3*b,1);let L=Math.min(1,b*8)*Math.min(1,(1-b)*3);f.emissiveIntensity=p*L,f.opacity=L})}let h=(_,f,p)=>Ef((Math.sin(_*.9+f)+Math.sin(_*.37+f*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let f=t.uniform(0,6.28),p=[.07*Math.cos(f),.07*Math.sin(f),c[_]],x=[.07*Math.cos(f+.9),.07*Math.sin(f+.9),c[_+1]],M=[(p[0]+x[0])/2,(p[1]+x[1])/2,(p[2]+x[2])/2],b=i.mesh(mu(t,[p[0]-M[0],p[1]-M[1],p[2]-M[2]],[x[0]-M[0],x[1]-M[1],x[2]-M[2]],6,.012,.005),o,M),L=t.uniform(0,6.28);i.anim(C=>{b.scale.setScalar(Math.max(1e-4,h(C,L,.3)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=.066;i.stat(mu(t,[p*Math.cos(f),p*Math.sin(f),.95],[p*Math.cos(f+.6),p*Math.sin(f+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let f=new R(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),x=i.mesh(mu(t,[f.x*.16,f.y*.16,f.z*.16],[f.x*p,f.y*p,f.z*p],7,.03,.005),o,[0,0,3]),M=t.uniform(0,6.28);i.anim(b=>{x.rotation.set(Math.floor(b/5+M)*1.7,0,Math.floor(b/4+M)*2.4,"ZYX"),x.scale.setScalar(Math.max(1e-4,h(b,M,.5)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],x=[2.5,2.66,2.85,3.08,3.22];i.stat(an(p.map((M,b)=>[M*Math.cos(f+.3*b),M*Math.sin(f+.3*b),x[b]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),r)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,f,p,x])=>{let M=i.mesh(xi(_,f.map(b=>b*Math.PI/180),p,10),r,[0,0,3]);i.anim(b=>{M.rotation.z=b*x})}),i.stat(si(.58,.06,.03,4),r,[0,0,3.14]);let u=[new R(0,.6,.8),new R(.7,-.3,.65),new R(-.45,.5,.75)],d=[1,-2,3],m=Array.from({length:6},(_,f)=>{let p=u[f%3].clone().normalize(),x=Math.abs(p.z)<.9?new R(0,0,1):new R(1,0,0),M=p.clone().cross(x).normalize(),b=p.clone().cross(M);return{e1:M,e2:b,R:t.uniform(.32,.5),th0:Math.floor(f/3)*Math.PI+t.uniform(-.3,.3),w:d[f%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(si(.11,.11,.035,4),s,m.length);return i.anim(_=>{m.forEach((f,p)=>{let x=f.th0+_*f.w,M=f.R*(1+.12*Math.sin(_*.05236+f.ph));Ks(g,p,[M*(f.e1.x*Math.cos(x)+f.e2.x*Math.sin(x)),M*(f.e1.y*Math.cos(x)+f.e2.y*Math.sin(x)),3+M*(f.e1.z*Math.cos(x)+f.e2.z*Math.sin(x))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(si(.1,.3,.04,5),s,[0,0,.32]),{z:3,r:.15,glass:he(.6,.3,1),hot:he(.7,.5,1),mid:he(.4,.1,1),style:"flicker"}}function px(i){let{rng:t,m:e}=i,n=e.veins(he(.02,.03,.05),he(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let r=e.metal(he(.8,.86,.95),.15),s=e.crystal(he(.25,.65,1),4),o=e.emissive(he(.7,.9,1),14),a=e.emissive(he(.3,.7,1),9);i.stat(an([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(si(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let x=i.mesh(xi(.058+.006*p,[0,0,0],.006,12,.6),r,[0,0,.655+.42*p]);i.anim(M=>{x.rotation.z=M*(p%2===0?1:-1)*.05236})}let c=p=>{let x=Math.max(0,(p-.7)/.3);return .05+.26*qo(Math.sin(x*Math.PI/2),1.5)};for(let p=0;p<2;p++){let x=ts(110);i.stat(an(tr(c,.4,3.2,6,x,p*Math.PI),Array.from({length:x},(M,b)=>.0085+.004*Math.sin(b*.55+p)),{radial:5,per:3}),r)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,x,M,b])=>{let L=i.mesh(xi(p,x.map(C=>C*Math.PI/180),M,10),r,[0,0,3]);i.anim(C=>{L.rotation.z=C*b})}),i.stat(si(.62,.05,.032,4),s,[0,0,3.17]);{let p=n.emissiveIntensity,x=a.emissiveIntensity,M=he(.45,.82,1),b=0;i.anim((L,C)=>{b+=(i.charge()-b)*Math.min(1,C*5),n.emissiveIntensity=p*(1+5*b),a.emissiveIntensity=x*(1+2.5*b),r.emissive.copy(M).multiplyScalar(.85*b)})}let l=Af(t,Zo(110),.35,.85);for(let p=0;p<Zo(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,x)=>p.map(M=>({rel:M,s:x(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),d=h(Af(t,Math.max(Zo(30),8),.4,.9),()=>t.uniform(.02,.045)),m=pu([si(1,1,.14,4),si(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(x,M)=>M)),p))),g=i.inst(_u,o,u.length),_=i.inst(m,o,d.length),f=(p,x,M)=>{x.forEach((b,L)=>{let C=Sc(M/b.per+b.ph),A=(1-C)**1.6;Ks(p,L,[b.rel[0]*A,b.rel[1]*A,3+b.rel[2]*A],b.s*Math.min(1,C*8)*(1-C)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{f(g,u,p),f(_,d,p)}),i.stat(si(.08,.31,.05,6),s,[0,0,.33]);for(let p=0;p<3;p++){let x=2*Math.PI*p/3+.4,M=Math.cos(x),b=Math.sin(x);i.stat(an([[.035*M,.035*b,.52],[.07*M,.07*b,.44],[.11*M,.11*b,.34],[.1*M,.1*b,.24]],[.02,.016,.011,.003],{radial:6}),r)}return{z:3,r:.17,glass:he(.05,.25,1),hot:he(.2,.5,1),mid:he(0,.05,.4)}}var Cf={verdant:hx,ember:ux,tide:fx,storm:dx,void:px},mx={verdant:7,ember:8,tide:9,storm:10,void:11};function er(i,t){let e=xf(i),n=Cf[e.base??e.id]?e.base??e.id:"verdant",r=new Wt,s=new Wt;s.rotation.x=-Math.PI/2,s.scale.setScalar(Yo),s.position.y=br-3*Yo,r.add(s);let o=[],a=[],c=[],l=0,h=new Ec,u={B:s,batch:h,rng:vf(mx[n]),m:sx(o,a),stat:(A,k,O,y,v)=>h.add(A,k,O,y,v),mesh:(A,k,O)=>{let y=new Rt(A,k);return O&&y.position.set(...O),s.add(y),y},inst:(A,k,O)=>{let y=new zs(A,k,O);return y.frustumCulled=!1,s.add(y),y},anim:A=>{c.push(A)},charge:()=>l},d=Cf[n](u);h.build(s);let m=new Vt(e.gem),g=e.tint?new Vt(e.tint):null,_=new Te({color:g?d.glass.clone().lerp(m,.6):d.glass,emissive:m,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),f=new Rt(new Ne(d.r*Yo,20,14),_);f.position.y=br+(d.z-3)*Yo,f.renderOrder=1,r.add(f);let p=u.m.core(g?d.hot.clone().lerp(m,.7):d.hot,g?d.mid.clone().lerp(m,.5):d.mid,6),x=new Rt(new Ne(d.r*Yo*.6,14,10),p);f.add(x);let M=p.emissiveIntensity;if(c.push(A=>{if(d.style==="flicker"){let k=Math.abs(Math.sin(A*.9)*Math.sin(A*.37+1.1));x.scale.setScalar(1+.1*k),p.emissiveIntensity=M*(.55+.45*k)*1.6}else x.scale.setScalar(1+.05*Math.sin(A*.1309))}),o.splice(o.indexOf(p),1),g)for(let A of[...o,...a])A.color.lerp(g,.55),A.emissive.getHex()!==0&&A.emissive.lerp(g,.7);let b=new ti(new Jn({map:t,color:m.getHex(),blending:hn,depthWrite:!1,transparent:!0,opacity:.5}));b.scale.setScalar(.45),b.position.y=f.position.y,r.add(b);let L=Math.random()*20,C=(A,k)=>{l=k,L+=A*(1+k*1.5);let O=L*24;for(let y of c)y(O,A)};return C(0,0),{group:r,gem:f,gemMat:_,glow:b,color:m,materials:o,update(A,k,O){C(k,O)}}}var ie=i=>new Vt(i),Ee=i=>1-Math.abs((i%1+1)%1*2-1),Oe=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),vr=(i,t)=>Math.exp(-(i*i)/(t*t)),Pf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function fn(i,t,e,n,r=!1){let s=[],o=[],a=(h,u)=>e(r?h%i/i:h/i,u/t),c=(h,u,d)=>{let m=(h[0]+u[0]+d[0])/3,g=(h[1]+u[1]+d[1])/3,_=n(r?m/i%1:m/i,g/t);for(let[f,p]of[h,u,d])s.push(...a(f,p)),o.push(_.r,_.g,_.b)};for(let h=0;h<t;h++)for(let u=0;u<i;u++)c([u,h],[u,h+1],[u+1,h+1]),c([u,h],[u+1,h+1],[u+1,h]);let l=new ve;return l.setAttribute("position",new re(s,3)),l.setAttribute("color",new re(o,3)),l.computeVertexNormals(),l}function Pn(i,t,e,n=1,r=1,s=0,o=1){let a=i.length-1;return fn(t,a,(c,l)=>{let h=Math.min(a-1,Math.floor(l*a)),u=l*a-h,d=i[h][0]+(i[h+1][0]-i[h][0])*u,m=i[h][1]+(i[h+1][1]-i[h][1])*u,g=(s+c*(o-s))*Math.PI*2;return[Math.sin(g)*m*n,d,Math.cos(g)*m*r]},e,s===0&&o===1)}function Ve(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new R(...i[Math.min(s-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return fn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}function Ci(i,t,e=[0,0,0],n=[0,0,0]){let r=new tn(...i).toNonIndexed();r.rotateX(n[0]),r.rotateY(n[1]),r.rotateZ(n[2]),r.translate(...e);let s=r.attributes.position.count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=t.r,o[a*3+1]=t.g,o[a*3+2]=t.b;return r.setAttribute("color",new Le(o,3)),r}function En(i,t){let e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=t.r,r[s*3+1]=t.g,r[s*3+2]=t.b;return e.setAttribute("color",new Le(r,3)),e.computeVertexNormals(),e}function Tc(i){let t=new Ne(1,28,22),e=t.attributes.position,n=t.attributes.uv;for(let r=0;r<e.count;r++){let s=e.getX(r),o=e.getY(r),a=e.getZ(r),c=Math.max(0,a),l=s*i.w,h=o*i.h,u=a*i.d;if(o<0){let d=-o;l*=1-i.jaw*d**1.25,u*=1-.12*d,h*=1+i.chin*d}l*=1+.04*vr(o+.02,.22)*c,o>.2&&(l*=1-.08*(o-.2));for(let d of[-1,1])u-=.009*vr(s-d*.38,.2)*vr(o-.06,.13)*c;u+=i.brow*vr(o-.27,.08)*vr(s,.5)*c,u+=i.nose*vr(s,.11)*c*Pf(.2,-.2,o)*Pf(-.4,-.27,o),u+=.004*vr(s,.24)*vr(o+.5,.07)*c,a<0&&(u*=1.06),e.setXYZ(r,l,h,u),a>.05?n.setXY(r,.5+s*.5,.5+o*.5):n.setXY(r,.02,.97)}return t.computeVertexNormals(),t}function Rc(i){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),r=(u,d)=>[(.5+u*.5)*512,(.5-d*.5)*512];n.fillStyle=i.skin,n.fillRect(0,0,512,512);let s=(u,d,m,g,_,f)=>{let[p,x]=r(u,d),M=m*512*.5;n.save(),n.translate(p,x),n.scale(1,g/m);let b=n.createRadialGradient(0,0,0,0,0,M);b.addColorStop(0,_.replace("A",String(f))),b.addColorStop(1,_.replace("A","0")),n.fillStyle=b,n.beginPath(),n.arc(0,0,M,0,Math.PI*2),n.fill(),n.restore()};for(let u of[-1,1])s(u*.62,-.18,.22,.3,i.shade,.35);s(0,-.72,.3,.12,i.shade,.3),s(.07,-.12,.05,.2,i.shade,.25);for(let u of[-1,1]){let d=u*.38,m=.06;s(d,m+.04,.26,.12,i.shade,.45);let[g,_]=r(d,m),f=i.eyeW*512*.5,p=i.eyeH*512*.5;if(n.save(),n.translate(g,_),n.scale(u,1),n.beginPath(),n.moveTo(-f,0),n.quadraticCurveTo(-f*.1,-p*1.1,f,-p*.15),n.quadraticCurveTo(f*.2,p*1.05,-f,0),n.closePath(),n.fillStyle=i.glowEyes?"#ffd23a":"#ece6ee",n.fill(),n.save(),n.clip(),n.fillStyle=i.iris,n.beginPath(),n.arc(-f*.1,p*.1,p*1.05,0,Math.PI*2),n.fill(),n.fillStyle="#120c14",n.beginPath(),i.glowEyes?n.ellipse(-f*.1,p*.1,p*.22,p*.8,0,0,Math.PI*2):n.arc(-f*.1,p*.1,p*.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.8)",n.beginPath(),n.arc(-f*.26,-p*.25,p*.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(40,25,35,.6)",n.fillRect(-f,-p*1.3,f*2,p*(.3+i.lid)),n.restore(),n.strokeStyle="#1c1418",n.lineCap="round",n.lineWidth=512*.009,n.beginPath(),n.moveTo(-f*1.02,.02*p),n.quadraticCurveTo(-f*.1,-p*(1.15-i.lid*.6),f*1.08,-p*.3),n.stroke(),n.strokeStyle="rgba(80,55,60,.5)",n.lineWidth=512*.004,n.beginPath(),n.moveTo(-f*.7,p*.55),n.quadraticCurveTo(0,p*1,f*.8,p*.25),n.stroke(),i.wrinkles){n.strokeStyle="rgba(120,90,90,.45)",n.lineWidth=512*.004;for(let x of[-1,0,1])n.beginPath(),n.moveTo(f*1.15,x*p*.4),n.lineTo(f*1.5,x*p*.8-p*.1),n.stroke();n.beginPath(),n.moveTo(-f*.6,p*1.4),n.quadraticCurveTo(0,p*2,f*.7,p*1.2),n.stroke()}n.strokeStyle=i.brow,n.lineWidth=i.browW,n.beginPath(),n.moveTo(-f*1,-p*(2.3-i.browTilt)),n.quadraticCurveTo(f*.15,-p*3.2,f*1.15,-p*(2.6+i.browTilt)),n.stroke(),n.restore()}if(i.wrinkles){n.strokeStyle="rgba(120,90,90,.4)",n.lineWidth=512*.004;for(let u of[.42,.5]){let[d,m]=r(-.25,u),[g,_]=r(.25,u);n.beginPath(),n.moveTo(d,m),n.quadraticCurveTo((d+g)/2,m-6,g,_),n.stroke()}}n.fillStyle="rgba(80,50,55,.5)";for(let u of[-1,1]){let[d,m]=r(u*.06,-.32);n.beginPath(),n.ellipse(d,m,512*.012,512*.006,0,0,Math.PI*2),n.fill()}let[o,a]=r(0,-.52),c=i.lipW*512*.5,l=.05*512*.5;if(i.snarl){n.fillStyle="#2a1416",n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.fill(),n.fillStyle="#e8e0c8",n.fillRect(o-c*.85,a-l*.9,c*1.7,l*.8),n.fillRect(o-c*.7,a+l*.25,c*1.4,l*.6),n.strokeStyle="#2a1416",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(o+u*c*.24,a-l),n.lineTo(o+u*c*.24,a+l),n.stroke();n.strokeStyle=i.lips,n.lineWidth=512*.008,n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.stroke()}else n.fillStyle=i.lips,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a-l*.9,o+c,a),n.quadraticCurveTo(o,a+l*1.2,o-c,a),n.fill(),n.strokeStyle="rgba(40,20,25,.7)",n.lineWidth=512*.005,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a+l*.3,o+c,a),n.stroke();let h=new Rn(e);return h.colorSpace=nn,h.anisotropy=4,h}function $s(){let i=[];return{materials:i,mat:(e,n={})=>{let r=new Te({color:n.vc?16777215:e,vertexColors:!!n.vc,metalness:n.metal??.04,roughness:n.rough??.8,flatShading:n.flat??!0,emissive:n.emissive??(n.vc?1315100:0),transparent:!0,side:n.double?Ie:On});return i.push({mat:r,color:r.color.clone(),emissive:r.emissive.clone()}),r}}}var kt=(i,t,e,n=[0,0,0])=>{let r=new Rt(i,t);return r.position.set(...n),e.add(r),r},oi=.3;function Er(i,t,e,n){let r=new Wt;r.position.set(t,e,0),i.add(r);let s=new Wt;s.position.set(-t,-e,0),r.add(s);let o=new Wt;o.position.set(0,n-e,0),r.add(o);let a=new Wt;return a.position.set(-t,-n,0),o.add(a),{hip:r,knee:o,thigh:s,shin:a}}function wr(i,t,e,n,r,s){let o=new Wt;o.position.set(...t),o.rotation.z=-.68,i.add(o);let a=new Wt;a.rotation.x=.3,o.add(a);let c=er(r,n);c.group.position.set(0,.24,.02),c.group.scale.setScalar(.8),a.add(c.group),s&&(s.position.set(0,0,.02),s.scale.multiplyScalar(1.7),a.add(s));for(let l of c.materials)e.push({mat:l,color:l.color.clone(),emissive:l.emissive.clone()});return{staffPivot:o,staff:c,crystal:c.gem,crystalMat:c.gemMat,glow:c.glow}}function If(i,t,e){let n=new Zr;for(let r=0;r<8;r++){let s=Math.PI/2+r*Math.PI/4,o=r%2?t:i;r?n.lineTo(Math.cos(s)*o,Math.sin(s)*o):n.moveTo(Math.cos(s)*o,Math.sin(s)*o)}return n.closePath(),new Vs(n,{depth:e,bevelEnabled:!0,bevelThickness:e*.3,bevelSize:i*.06,bevelSegments:1}).center()}var Lf=(i,t,e)=>{let n=Ee(i*e);return Math.abs(n-t)<.2||Math.abs(n-(1-t))<.2};function ai(i,t,e,n=i,r=1){let s=new Wt,o=(a,c,l,h=[0,0,0],u=[1,1,1])=>{let d=kt(En(a,c),t,s,l);return d.rotation.set(...h),d.scale.set(...u),d};if(e){o(new tn(.03,.085,.07),i,[.04,0,-.005]);for(let a=0;a<4;a++){let c=.03-a*.02,l=.028-a*.001,h=new An(l,.011,4,7,Math.PI*1.25);h.rotateX(Math.PI/2),o(h,n,[.012,c,0],[0,-.35,0])}o(new xr(.011,.04,2,5),i,[.02,.048,.03],[.2,0,1.2])}else{o(new tn(.06,.07,.028),i,[0,-.035,0]);for(let a=0;a<4;a++)o(new tn(.013,.05-Math.abs(a-1.5)*.007,.016),n,[-.022+a*.0145,-.092+Math.abs(a-1.5)*.003,.006],[.25,0,0]);o(new tn(.014,.04,.016),n,[.034,-.045,.012],[.2,0,-.5])}return s.scale.setScalar(r),s}var Sr={goblin:16726564,witch:12086271,wizard:4827391,knight:16724016};function Tr(i,t,e,n){let r=new Wt;r.name="eyes",r.visible=!1;let s=new sn({color:new Vt(e).lerp(new Vt(16777215),.3),transparent:!0,depthWrite:!1}),o=new Jn({map:n,color:e,transparent:!0,opacity:.8,depthWrite:!1});for(let a of t){let c=new Rt(new Ne(.011,8,6),s);c.position.set(...a),c.scale.set(1.6,.75,.5),r.add(c);let l=new ti(o);l.position.set(a[0],a[1],a[2]+.012),l.scale.setScalar(.06),r.add(l)}return i.add(r),r}var Ge={robe:ie(3433416),robeDeep:ie(2575516),cream:ie(15853519),creamDeep:ie(14273968),gold:ie(14989388),goldDeep:ie(11568688),skin:ie(15916495),hair:ie(16052974),hairShade:ie(13618374),leather:ie(7686442),leatherDeep:ie(5583641),boot:ie(2903964)},es={w:.088,h:.122,d:.106,jaw:.42,chin:.06,nose:.022,brow:.008};function Df(i,t,e){let{materials:n,mat:r}=$s(),s=r(16777215,{vc:!0,double:!0}),o=r(Ge.skin,{rough:.7}),a=r(Ge.gold,{metal:.3,rough:.35,emissive:2760200}),c=i==="ally",l=c?ie(3117168):Ge.robe,h=c?ie(2255442):Ge.robeDeep,u=(K,at,I,Q)=>Lf(K,at,I)?Ge.gold:Q,d=new Wt,m=new Wt;d.add(m);let g=[];for(let K of[-1,1]){let at=Er(m,K*.09,.95,.5);g.push(at),kt(En(new Ne(.06,7,5),Ge.boot),s,at.shin,[K*.09,.05,.08]).scale.set(.9,.75,1.6)}kt(Pn([[1.46,.1],[1.4,.165],[1.24,.18],[1.04,.165],[.7,.21],[.36,.255],[.3,.26],[.24,.266],[.18,.272],[.12,.278],[.04,.29]],36,(K,at)=>{let I=K<.06||K>.94,Q=Math.floor(at*10);return Q===9?Ge.cream:Q>=6?u(K,(Q-5.5)/3,12,I?Ge.creamDeep:h):I?Oe(Ge.cream,Ge.creamDeep,.3*at):Oe(l,h,.3*Ee(K*12)*at)},1.1,.8),s,m);let _=fn(48,30,(K,at)=>{let I=.55+.35*at**1.3,Q=I+K*(Math.PI*2-2*I),B=.13,j,ct,Y;if(at<B){let T=at/B;j=1.58-.15*T**.8,ct=.1+.15*T**.7,Y=.74}else{let T=(at-B)/(1-B);j=1.43-T*1.3,ct=.25+.14*T**1.2,Y=.74+.16*T}return ct*=1+.05*Math.sin(Q*7)*Math.max(0,at-B),[Math.sin(Q)*ct*1.1,j,Math.cos(Q)*ct*Y-.03*at]},(K,at)=>K<.03||K>.97||at>.95?Ge.cream:at>.8?u(K,(at-.8)/.15,16,h):Oe(l,h,.25+.3*Ee(K*9)));kt(_,s,m),kt(fn(6,4,(K,at)=>[(K-.5)*(.26-.2*at),1.56-at*.3,-.15-.04*Math.cos((K-.5)*3)-.03*at],(K,at)=>at>.85?Ge.cream:Oe(h,l,.3*Ee(K*2))),s,m),kt(new Me(.035,.035,.014,10).rotateX(Math.PI/2),a,m,[0,1.47,.135]),kt(new An(.035,.007,4,10),a,m,[0,1.47,.142]);for(let K of[-1,1])kt(new Me(.012,.012,.06,5).rotateZ(Math.PI/2),a,m,[K*.065,1.48,.125]);kt(Pn([[1.08,.172],[1.02,.17]],16,()=>Ge.leather,1.1,.82),s,m),kt(new zo(.04,0),a,m,[0,1.05,.145]).scale.set(.9,1.1,.35),kt(En(new zo(.02,0),Ge.leatherDeep),s,m,[0,1.05,.158]).scale.set(.9,1.1,.3),kt(fn(1,6,(K,at)=>[.03+(K-.5)*.045+.02*Math.sin(at*3),1.03-at*.48,.15+.035*at+.012*Math.sin(at*6)],(K,at)=>at>.9?Ge.gold:Oe(Ge.leather,Ge.leatherDeep,.3*at)),s,m),kt(new Me(.043,.052,.12,7),o,m,[0,1.53,0]);let p=new Wt;p.position.set(0,1.66,0),m.add(p);let x=r(16777215,{rough:.7,flat:!1});x.map=Rc({skin:"#f2ddcf",shade:"rgba(160,120,115,A)",iris:"#5d7590",eyeW:.2,eyeH:.07,lid:.55,brow:"#f0eee8",browW:15,browTilt:.2,lips:"#b77a72",lipW:.2,wrinkles:!0}),kt(Tc(es),x,p);let M=(K,at)=>Oe(Ge.hair,Ge.hairShade,.2+.5*Ee(K*9)*(.3+.7*at));kt(fn(18,3,(K,at)=>{let I=-Math.PI+K*Math.PI*2,Q=Math.abs(I),B=Q<1?.62-.3*(Q/1):.32-.6*((Q-1)/(Math.PI-1)),j=Math.PI/2-at*(Math.PI/2-B),ct=1.09;return[Math.sin(I)*Math.cos(j)*es.w*ct,Math.sin(j)*es.h*ct,Math.cos(I)*Math.cos(j)*es.d*ct]},M,!0),s,p),kt(fn(18,10,(K,at)=>{let I=Math.PI*.4+K*Math.PI*1.2,Q=.08-at*(.72+.1*Ee(K*6+.3)),B=at<.25?.12+at*.26:.185+.04*Math.sin(at*3.1),j=.02*Math.sin(at*14+I*3)*at;return[Math.sin(I)*(B+j)*1.05,Q,Math.cos(I)*(B+j)*.8-.02-.05*at]},M),s,p);for(let K of[-1,1]){let at=Array.from({length:8},(I,Q)=>{let B=Q/7;return[K*(.095+.05*B+.02*Math.sin(B*9)),.02-B*.5,0+.05*B-.025*Math.sin(B*7)]});kt(Ve(at,I=>.03*(1-.6*I)+.008,5,(I,Q)=>M(Q,I),[1,1,.6]),s,p)}kt(fn(10,12,(K,at)=>{let I=K-.5,B=-.02-.06*(1-Math.abs(I)*2)**2-at*(.56+.06*Ee(K*3+.5)),j=(.09+.02*Math.sin(Math.PI*Math.min(1,at*1.6)))*(1-.75*at**1.6),ct=I*2*j+.008*Math.sin(at*12+K*4),Y=.065+.04*Math.cos(I*Math.PI)+.085*at**.8-(at<.08?.03*Math.abs(I)*2:0);return[ct,B,Y]},(K,at)=>Oe(Ge.hair,Ge.hairShade,.15+.45*Ee(K*5)*at)),s,p);for(let K of[-1,1])kt(Ve([[K*.004,-.045,.108],[K*.035,-.055,.106],[K*.06,-.075,.095],[K*.07,-.11,.088]],at=>.014*(1-.6*at)+.004,5,()=>Ge.hair),s,p);let b=new Wt;b.position.set(0,.075,-.005),b.rotation.set(-.08,0,-.05),p.add(b),kt(fn(20,3,(K,at)=>{let I=K*Math.PI*2,Q=.13+at*.17;return[Math.sin(I)*Q,.02-.04*at*at,Math.cos(I)*Q]},(K,at)=>Oe(l,h,at>.85?.4:.2*Ee(K*5)),!0),s,b),kt(Ve([[0,.01,0],[0,.2,-.01],[0,.38,-.04],[-.02,.52,-.09],[-.07,.6,-.16],[-.13,.6,-.21],[-.18,.55,-.23]],K=>.15*(1-K)**1.3+.004,8,(K,at)=>Oe(l,h,.25*Ee(at*4)+.2*K)),s,b),kt(fn(16,1,(K,at)=>{let I=K*Math.PI*2,Q=.153-.005*at;return[Math.sin(I)*Q,.025+at*.05,Math.cos(I)*Q]},K=>Ee(K*16)>.5?Ge.gold:Ge.goldDeep,!0),s,b),kt(If(.055,.018,.01),a,b,[0,.08,.15]).rotation.x=-.1;let C=(K,at,I)=>fn(14,8,(Q,B)=>{let j=Q*Math.PI*2,ct=.06+I*Math.max(0,(B-.25)/.75)**1.3;return[Math.cos(j)*ct,-(B*K),Math.sin(j)*ct*.9+at*B*B]},(Q,B)=>B>.88?Ge.cream:B>.72?u(Q,(B-.72)/.16,5,h):Oe(l,h,.3*Ee(Q*3)),!0),A=new Wt;A.position.set(-.22,1.42,0),A.rotation.set(-.42,0,-.2),m.add(A),kt(C(.58,.05,.13),s,A);let k=ai(Ge.skin,s,!1);k.position.set(0,-.56,.04),A.add(k);let O=new Wt;O.position.set(.22,1.42,.02),O.rotation.z=oi,m.add(O),kt(C(.4,0,.065),s,O).rotation.x=-.5,kt(new Me(.03,.033,.12,6),o,O,[0,-.38,.19]).rotation.x=-.5;let{staffPivot:y,staff:v,crystal:V,crystalMat:W,glow:et}=wr(O,[0,-.43,.24],n,t,e,ai(Ge.skin,s,!0)),pt=Tr(p,[-1,1].map(K=>[K*.38*es.w,.06*es.h,.9*es.d]),Sr.wizard,t);return{root:d,body:m,head:p,arm:O,staffPivot:y,crystal:V,crystalMat:W,glow:et,staff:v,height:2,materials:n,eyes:pt,leftArm:A,legs:g}}var de={plate:ie(14077887),plateHi:ie(15262420),plateLo:ie(11117201),plateDark:ie(8156776),white:ie(15789282),whiteLo:ie(14209732),under:ie(4862242),leather:ie(7226406),leatherLo:ie(5189401),sash:ie(7301690),sashLo:ie(5722928),slit:ie(1380879),steel:ie(13225168),grip:ie(4860952),brass:ie(12819016)};function Uf(i,t,e){let{materials:n,mat:r}=$s(),s=r(16777215,{vc:!0,double:!0}),o=r(16777215,{vc:!0,metal:.25,rough:.42,double:!0}),a=i==="ally"?ie(3119724):ie(12726316),c=i==="ally"?ie(2257999):ie(9314077),l=(O,y,v=6)=>Oe(de.plate,Ee(O*v)>.5?de.plateHi:de.plateLo,.35+.15*y),h=new Wt,u=new Wt;h.add(u);let d=[];for(let O of[-1,1]){let y=O*.105,v=Er(u,y,.9,.53);d.push(v),kt(fn(8,4,(V,W)=>{let et=V*Math.PI*2,pt=-.07+W*.25,K=.06-W*.035,at=.058*(1-.7*W**1.6);return[y+Math.cos(et)*at,Math.max(.005,K+Math.sin(et)*at*.75),pt]},(V,W)=>Math.floor(W*4)%2?de.plateLo:de.plate,!0),o,v.shin),kt(Ve([[y,.08,-.01],[y,.22,0],[y,.36,0],[y,.5,.005]],V=>.058+.016*Math.sin(V*2.6),8,(V,W)=>l(W,V)),o,v.shin),kt(En(new Ne(.065,8,6),de.plateHi),o,v.shin,[y,.53,.025]).scale.set(1,.9,.85),kt(En(new Bn(.05,.03,6).rotateZ(-O*Math.PI/2),de.plateLo),o,v.shin,[y+O*.06,.53,.02]),kt(Ve([[y,.56,0],[y*1.02,.72,0],[y*.98,.9,-.005]],V=>.068+.022*V,8,(V,W)=>l(W,V)),o,v.thigh)}kt(Pn([[1,.19],[.8,.22],[.6,.25],[.5,.26]],16,O=>Oe(de.under,de.leatherLo,.4*Ee(O*8)),1.1,.85),s,u);for(let O of[!1,!0])kt(fn(8,10,(y,v)=>{let V=(O?Math.PI:0)+(y-.5)*2.2,W=1.36-v*.76-.02*Ee(y*4)*v,et=(v<.45?.2+.03*Math.sin(v*7):.2+.12*(v-.45))+.012;return[Math.sin(V)*et*1.12,W,Math.cos(V)*et*.86]},(y,v)=>v>.82&&v<.87||v>.91&&v<.96?a:Oe(de.white,de.whiteLo,.35*Ee(y*4)*v)),s,u);kt(Pn([[1.58,.11],[1.53,.2],[1.42,.245],[1.28,.23],[1.14,.2],[1.02,.205]],16,(O,y)=>O<.04||O>.96?de.plateHi:l(O,y,8),1.12,.84),o,u);for(let O=0;O<3;O++)kt(Pn([[1.02-O*.045,.205+O*.008],[.975-O*.045,.215+O*.008]],14,y=>O%2?de.plateLo:de.plate,1.12,.86),o,u);kt(Pn([[1.66,.06],[1.62,.075],[1.57,.12]],12,(O,y)=>l(O,y)),o,u),kt(Ve(Array.from({length:15},(O,y)=>{let v=y/14*Math.PI*2;return[Math.sin(v)*.235,1.07+.03*Math.cos(v+.6),Math.cos(v)*.19]}),()=>.03,6,(O,y)=>Oe(de.sash,de.sashLo,Ee(y*3+O*5)*.6),[1,1.4,1]),s,u);for(let O of[0,1])kt(Ve([[-.2,1.06,.1],[-.22-O*.02,.95,.12],[-.21-O*.04,.82-O*.04,.12]],y=>.025*(1-.3*y),5,y=>Oe(de.sash,de.sashLo,y),[1.4,1,.5]),s,u);for(let O of[-1,1]){let y=Array.from({length:9},(v,V)=>{let W=V/8,et=-.9+W*4.6,pt=1.52-.48*W;return[O*Math.sin(et)*.285,pt+.06*Math.sin(W*Math.PI),Math.cos(et)*.222]});kt(Ve(y,()=>.016,4,v=>Oe(de.leather,de.leatherLo,.4*Ee(v*4)),[1,1.5,1]),s,u)}kt(Ci([.06,.06,.02],de.brass,[0,1.46,.235],[0,0,Math.PI/4]),s,u);let m=new Wt;m.position.set(0,1.18,-.24),m.rotation.z=.55,u.add(m),kt(Ci([.055,.82,.012],de.steel,[0,-.12,0]),o,m),kt(En(new Bn(.039,.07,4).rotateX(Math.PI).rotateY(Math.PI/4),de.steel),o,m,[0,-.565,0]).scale.set(1,1,.22),kt(Ci([.24,.03,.035],de.brass,[0,.3,0]),s,m),kt(En(new Me(.018,.018,.16,6),de.grip),s,m,[0,.39,0]),kt(En(new Ne(.03,6,4),de.brass),s,m,[0,.48,0]),kt(Pn([[.32,.02],[-.5,.05],[-.6,.03]],6,()=>de.leatherLo,1,.5),s,m);let g=new Wt;g.position.set(0,1.73,0),u.add(g),kt(Pn([[.13,0],[.125,.06],[.105,.105],[.045,.122],[.025,.124],[.005,.125],[-.06,.125],[-.125,.12],[-.135,.11]],14,(O,y)=>Math.floor(y*8)===4&&(O<.2||O>.8)?de.slit:O<.025||O>.975?de.plateHi:l(O,y,6),1,1.06),o,g);for(let O=0;O<4;O++)kt(Ci([.012,.012,.01],de.slit,[.035+O%2*.025,-.05-Math.floor(O/2)*.03,.128],[0,.3,0]),s,g);for(let O of[-1,1])kt(En(new Me(.014,.014,.01,8).rotateZ(Math.PI/2),de.brass),s,g,[O*.128,-.01,0]);kt(Ci([.03,.025,.05],de.brass,[0,.13,-.01]),s,g);for(let O=0;O<7;O++){let y=(O-3)/3,v=.42-Math.abs(y)*.08,V=Array.from({length:7},(W,et)=>{let pt=et/6,K=pt*2.2;return[y*.03*(1+pt),.14+Math.sin(K)*.14*v/.42,-.01-(1-Math.cos(K))*v*.45+.06*pt]});kt(Ve(V,W=>.026*(1-W)**.7+.004,5,(W,et)=>Oe(a,c,.3*Ee(et*2)+.4*W)),s,g)}let _=(O,y)=>{kt(Ve([[0,-.02,0],[0,-.14,0],[0,-.26,y*.3]],v=>.056-.006*v,7,(v,V)=>l(V,v)),o,O),kt(En(new Ne(.05,7,5),de.plateHi),o,O,[0,-.27,y*.3-.01])};for(let O of[-1,1]){let y=new Wt;y.position.set(O*.27,1.5,0),y.rotation.z=-O*.5,u.add(y),kt(Pn([[.075,0],[.06,.07],[.02,.12],[-.03,.135],[-.07,.13]],10,(v,V)=>V>.85?de.plateLo:l(v,V,5),1,1),o,y),kt(Pn([[-.06,.13],[-.1,.12]],10,()=>de.plateLo),o,y),kt(En(new Me(.035,.04,.02,10).rotateZ(-O*Math.PI/2),de.plateHi),o,y,[O*.125,-.03,0]),kt(En(new Ne(.014,6,4),de.brass),s,y,[O*.137,-.03,0])}let f=new Wt;f.position.set(-.26,1.44,0),f.rotation.set(-.3,0,-.08),u.add(f),_(f,.1),kt(Ve([[0,-.28,.02],[0,-.42,.05],[0,-.52,.06]],O=>.048+.008*O,7,(O,y)=>l(y,O)),o,f);let p=ai(de.plateHi,o,!1,de.plateLo,1.15);p.position.set(0,-.53,.06),f.add(p);let x=new Wt;x.position.set(.26,1.44,.02),x.rotation.z=oi,u.add(x),kt(Ve([[0,-.02,0],[0,-.12,0],[0,-.22,.04]],O=>.056-.006*O,7,(O,y)=>l(y,O)),o,x),kt(En(new Ne(.05,7,5),de.plateHi),o,x,[0,-.24,.05]),kt(Ve([[0,-.25,.07],[0,-.33,.15],[0,-.39,.21]],O=>.045+.01*O,7,(O,y)=>l(y,O)),o,x);let{staffPivot:M,staff:b,crystal:L,crystalMat:C,glow:A}=wr(x,[0,-.43,.25],n,t,e,ai(de.plateHi,o,!0,de.plateLo,1.15)),k=Tr(g,[[-.035,.016,.128],[.035,.016,.128]],Sr.knight,t);return{root:h,body:u,head:g,arm:x,staffPivot:M,crystal:L,crystalMat:C,glow:A,staff:b,height:2,materials:n,eyes:k,leftArm:f,legs:d}}var Re={skin:ie(8688447),skinLo:ie(6714670),skinHi:ie(10136146),hair:ie(2892832),hairHi:ie(4536623),red:ie(11744555),redLo:ie(8528668),leather:ie(8015404),leatherLo:ie(5583897),wrap:ie(11045474),wrapLo:ie(8217925),shorts:ie(3814191),shortsLo:ie(2695967),brass:ie(12161605),nail:ie(3947042),ear:ie(10709594)},Pi={w:.096,h:.112,d:.106,jaw:.22,chin:.02,nose:.036,brow:.016};function Nf(i,t,e){let{materials:n,mat:r}=$s(),s=r(16777215,{vc:!0,double:!0}),o=r(Re.skin,{rough:.75}),a=i==="ally"?ie(2920330):Re.red,c=i==="ally"?ie(2058598):Re.redLo,l=(y,v,V=5)=>Oe(Re.skin,Ee(y*V)>.5?Re.skinHi:Re.skinLo,.35+.1*v),h=new Wt,u=new Wt;h.add(u);let d=[];for(let y of[-1,1]){let v=y*.095,V=Er(u,v,.82,.44);d.push(V),kt(fn(7,4,(W,et)=>{let pt=W*Math.PI*2,K=-.06+et*.23,at=.05*(1-.35*et)*(et>.75?1-(et-.75)*1.6:1);return[v+y*.012*et+Math.cos(pt)*at,Math.max(.004,.035+Math.sin(pt)*at*.55-.01*et),K]},(W,et)=>l(W,et),!0),s,V.shin);for(let W=0;W<3;W++)kt(En(new Ne(.016,5,4),Re.skinLo),s,V.shin,[v+y*.012+(W-1)*.022,.016,.165-Math.abs(W-1)*.01]);kt(Ve([[v,.05,-.01],[v,.3,-.005],[v*1.03,.47,.01]],W=>.04+.014*W+.008*Math.sin(W*5),7,(W,et)=>l(et,W)),s,V.shin),kt(Ve([[v*1.03,.41,.01],[v*1.05,.65,0],[v,.82,-.005]],W=>.054+.008*W+.006*Math.sin(W*4),7,(W,et)=>l(et,W)),s,V.thigh),kt(Ve([[v,.08,-.01],[v,.2,-.008],[v,.32,-.004],[v*1.02,.44,.005]],W=>.048+.008*W,7,(W,et)=>Ee(W*6+et*.5)>.5?Re.wrap:Re.wrapLo),s,V.shin)}kt(Pn([[.96,.17],[.86,.19],[.74,.21],[.66,.2]],14,(y,v)=>Oe(Re.shorts,Re.shortsLo,.5*Ee(y*6)*v),1.08,.82),s,u),kt(Pn([[1,.175],[.94,.178]],14,y=>Ee(y*7)>.85?Re.leatherLo:Re.leather,1.08,.84),s,u),kt(Ci([.06,.05,.02],Re.brass,[0,.97,.15]),s,u),kt(Ci([.035,.028,.024],Re.leatherLo,[0,.97,.152]),s,u);for(let y of[!1,!0])kt(fn(6,6,(v,V)=>{let W=(y?Math.PI:0)+(v-.5)*.9,et=.19+.06*V,pt=.42+.1*Ee(v*3.5+.2)+.04*Math.sin(v*17);return[Math.sin(W)*et*1.08,.96-V*pt,Math.cos(W)*et*.86+(y?-.01:.01)]},(v,V)=>Oe(a,c,.25+.35*Ee(v*3)*V)),s,u);kt(Pn([[1.36,.075],[1.32,.155],[1.24,.18],[1.13,.155],[1.02,.14],[.94,.152]],14,(y,v)=>Math.min(y,1-y)<.12&&v>.4?Ee(v*6)>.5?Re.skinHi:Re.skinLo:l(y,v,7),1.1,.74),s,u);for(let y of[-1,1]){let v=Array.from({length:9},(V,W)=>{let et=W/8,pt=-.9+et*4.4;return[y*Math.sin(pt)*.212,1.33-.36*et+.04*Math.sin(et*Math.PI),Math.cos(pt)*.145]});kt(Ve(v,()=>.014,4,V=>Oe(Re.leather,Re.leatherLo,.4*Ee(V*4)),[1,2,1]),s,u)}kt(Ci([.05,.05,.02],Re.brass,[0,1.27,.15],[0,0,Math.PI/4]),s,u);let m=new Wt;m.position.set(-.2,1.31,0),m.rotation.z=.55,m.scale.setScalar(.8),u.add(m),kt(Pn([[.06,0],[.045,.06],[0,.1],[-.05,.11],[-.08,.1]],9,(y,v)=>v>.8||Ee(y*9)>.8?Re.leatherLo:Re.leather,1,1.1),s,m),kt(Ve(Array.from({length:11},(y,v)=>{let V=v/10*Math.PI*2;return[Math.sin(V)*.088,1.375+.02*Math.cos(V),Math.cos(V)*.08]}),()=>.03,7,(y,v)=>Oe(a,c,.5*Ee(v*2+y*6))),s,u),kt(fn(8,5,(y,v)=>{let V=Math.PI+(y-.5)*(2.4-1.2*v),W=.13-.02*v;return[Math.sin(V)*W*1.1,1.42-v*.2+.03*Math.cos((y-.5)*6),Math.cos(V)*W-.04*v]},(y,v)=>Oe(a,c,.2+.4*Ee(y*3)*(1-v))),s,u);for(let y of[0,1])kt(Ve([[-.04+y*.05,1.36,-.1],[-.07+y*.03,1.22,-.15],[-.09+y*.05,1.08,-.16]],v=>.035*(1-.3*v),5,v=>Oe(a,c,v),[1.4,1,.45]),s,u);kt(new Me(.04,.05,.1,7),o,u,[0,1.4,0]);let g=new Wt;g.position.set(0,1.51,.01),u.add(g);let _=r(16777215,{rough:.75,flat:!1});_.map=Rc({skin:"#84933f",shade:"rgba(60,72,24,A)",iris:"#d2401c",eyeW:.2,eyeH:.075,lid:.2,brow:"#2a221c",browW:22,browTilt:1,lips:"#4e3a22",lipW:.34,snarl:!0,glowEyes:!0}),kt(Tc(Pi),_,g);for(let y of[-1,1]){let v=[[y*.075,0,-.01],[y*.14,.03,-.03],[y*.21,.07,-.05],[y*.27,.105,-.07]];kt(Ve(v,V=>.035*(1-V)**.9+.002,6,(V,W)=>l(W,V,3),[1,1,.35]),s,g),kt(Ve(v.map(([V,W,et])=>[V*.98,W,et+.008]).slice(0,3),V=>.02*(1-V)+.002,5,()=>Re.ear,[1,1,.3]),s,g)}kt(fn(16,3,(y,v)=>{let V=-Math.PI+y*Math.PI*2,W=Math.abs(V),et=W<.9?.55:.55-.65*((W-.9)/(Math.PI-.9)),pt=Math.PI/2-v*(Math.PI/2-et),K=1.08+.03*Ee(y*8);return[Math.sin(V)*Math.cos(pt)*Pi.w*K,Math.sin(pt)*Pi.h*K,Math.cos(V)*Math.cos(pt)*Pi.d*K]},(y,v)=>Oe(Re.hair,Re.hairHi,.4*Ee(y*8+v)),!0),s,g);for(let y=0;y<13;y++){let v=-Math.PI+y/13*Math.PI*2+.2*Math.sin(y*7.3),V=.55+.5*(y*.37%1),W=new R(Math.sin(v)*Math.cos(V),Math.sin(V),Math.cos(v)*Math.cos(V)),et=new R(W.x*Pi.w,W.y*Pi.h,W.z*Pi.d);kt(En(new Bn(.022,.07+.03*(y*.61%1),4),y%3?Re.hair:Re.hairHi),s,g,[et.x,et.y,et.z]).quaternion.setFromUnitVectors(new R(0,1,0),W.add(new R(0,0,-.5)).normalize())}let f=(y,v,V)=>kt(Ve([v,[(v[0]+V[0])/2,(v[1]+V[1])/2,(v[2]+V[2])/2],V],W=>.042-.006*W,7,(W,et)=>Ee(W*4+et*.4)>.5?Re.leather:Re.leatherLo),s,y),p=new Wt;p.position.set(-.2,1.3,0),p.rotation.set(-.35,0,-.15),u.add(p),kt(Ve([[0,0,0],[0,-.14,0],[0,-.26,.02],[0,-.4,.05],[0,-.5,.06]],y=>.042-.012*y+.006*Math.sin(y*6),7,(y,v)=>l(v,y)),s,p),f(p,[0,-.32,.04],[0,-.48,.06]);let x=ai(Re.leather,s,!1,Re.skin,1.05);x.position.set(0,-.5,.065),p.add(x);let M=new Wt;M.position.set(.2,1.3,.02),M.rotation.z=oi,u.add(M),kt(Ve([[0,0,0],[0,-.12,0],[0,-.22,.04],[0,-.3,.12],[0,-.38,.2]],y=>.042-.012*y,7,(y,v)=>l(v,y)),s,M),f(M,[0,-.28,.1],[0,-.38,.19]);let{staffPivot:b,staff:L,crystal:C,crystalMat:A,glow:k}=wr(M,[0,-.42,.23],n,t,e,ai(Re.leather,s,!0,Re.skin,1.05)),O=Tr(g,[-1,1].map(y=>[y*.38*Pi.w,.06*Pi.h,.9*Pi.d]),Sr.goblin,t);return{root:h,body:u,head:g,arm:M,staffPivot:b,crystal:C,crystalMat:A,glow:k,staff:L,height:1.75,materials:n,eyes:O,leftArm:p,legs:d}}var yn=i=>new Vt(i),Je={robe:yn(8017597),robeDeep:yn(6045590),trim:yn(11242982),dress:yn(3484996),dressHi:yn(4931936),lining:yn(6969968),skin:yn(15654104),hair:yn(13615844),hairDark:yn(10194102),hat:yn(7097004),hatBand:yn(10256598),boot:yn(3880006),belt:yn(4207692),moon:yn(15787712),lips:yn(5911888),eye:yn(1709088)};function ei(i,t,e,n,r=!1){let s=[],o=[],a=(u,d)=>e(r?u%i/i:u/i,d/t),c=(u,d)=>n(r?(u%i+i)%i/i:u/i,d/t),l=(u,d,m)=>{let g=c((u[0]+d[0]+m[0])/3,(u[1]+d[1]+m[1])/3);for(let[_,f]of[u,d,m])s.push(...a(_,f)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let d=0;d<i;d++)l([d,u],[d,u+1],[d+1,u+1]),l([d,u],[d+1,u+1],[d+1,u]);let h=new ve;return h.setAttribute("position",new re(s,3)),h.setAttribute("color",new re(o,3)),h.computeVertexNormals(),h}function Ac(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new R(...i[Math.min(s-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return ei(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}var ci=i=>1-Math.abs((i%1+1)%1*2-1),nr=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),ir={w:.087,h:.126,d:.108},Ii=(i,t)=>Math.exp(-(i*i)/(t*t)),Hf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function gx(){let i=new Ne(1,28,22),t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++){let r=t.getX(n),s=t.getY(n),o=t.getZ(n),a=Math.max(0,o),c=r*ir.w,l=s*ir.h,h=o*ir.d;if(s<0){let d=-s;c*=1-.55*d**1.25,h*=1-.12*d,l*=1+.08*d}c*=1+.04*Ii(s+.02,.22)*a,s>.2&&(c*=1-.1*(s-.2));for(let d of[-1,1])h-=.008*Ii(r-d*.38,.2)*Ii(s-.06,.13)*a;h+=.006*Ii(s-.3,.07)*Ii(r,.5)*a;let u=Ii(r,.1)*a*Hf(.2,-.2,s)*Hf(-.38,-.26,s);h+=.017*u,h+=.005*Ii(r,.24)*Ii(s+.5,.07)*a,h-=.004*Ii(r,.3)*Ii(s+.38,.05)*a,o<0&&(h*=1.06),t.setXYZ(n,c,l,h),o>.05?e.setXY(n,.5+r*.5,.5+s*.5):e.setXY(n,.02,.97)}return i.computeVertexNormals(),i}function _x(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=(h,u)=>[(.5+h*.5)*512,(.5-u*.5)*512];e.fillStyle="#e9d7d3",e.fillRect(0,0,512,512);let r=(h,u,d,m,g,_)=>{let[f,p]=n(h,u),x=d*512*.5;e.save(),e.translate(f,p),e.scale(1,m/d);let M=e.createRadialGradient(0,0,0,0,0,x);M.addColorStop(0,g.replace("A",String(_))),M.addColorStop(1,g.replace("A","0")),e.fillStyle=M,e.beginPath(),e.arc(0,0,x,0,Math.PI*2),e.fill(),e.restore()};for(let h of[-1,1])r(h*.62,-.18,.22,.3,"rgba(150,110,130,A)",.28),r(h*.42,-.2,.16,.1,"rgba(220,140,150,A)",.22);r(0,-.72,.3,.12,"rgba(140,100,120,A)",.25);for(let h of[-1,1]){let u=h*.38,d=.06;r(u,d+.06,.28,.12,"rgba(120,85,140,A)",.55);let[m,g]=n(u,d),_=.21*512*.5,f=.082*512*.5;e.save(),e.translate(m,g),e.scale(h,1),e.beginPath(),e.moveTo(-_,0),e.quadraticCurveTo(-_*.1,-f*1.1,_,-f*.15),e.quadraticCurveTo(_*.2,f*1.05,-_,0),e.closePath(),e.fillStyle="#efe9f2",e.fill(),e.save(),e.clip(),e.fillStyle="#4a3a5c",e.beginPath(),e.arc(-_*.12,f*.12,f*1.05,0,Math.PI*2),e.fill(),e.fillStyle="#1a1220",e.beginPath(),e.arc(-_*.12,f*.12,f*.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(-_*.28,-f*.25,f*.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,40,70,.55)",e.fillRect(-_,-f*1.2,_*2,f*.55),e.restore(),e.strokeStyle="#1c1420",e.lineCap="round",e.lineWidth=512*.01,e.beginPath(),e.moveTo(-_*1.02,.02*f),e.quadraticCurveTo(-_*.1,-f*1.15,_*1.12,-f*.35),e.stroke(),e.lineWidth=512*.006;for(let p=0;p<4;p++){let x=.55+p*.15;e.beginPath(),e.moveTo(_*(x*2-1),-f*(.95-p*.15)),e.lineTo(_*(x*2-1)+_*.18,-f*(1.35-p*.12)),e.stroke()}e.strokeStyle="rgba(90,60,90,.55)",e.lineWidth=512*.004,e.beginPath(),e.moveTo(-_*.9,-f*.9),e.quadraticCurveTo(0,-f*2,_*.95,-f*1),e.stroke(),e.strokeStyle="rgba(90,60,90,.4)",e.beginPath(),e.moveTo(-_*.6,f*.55),e.quadraticCurveTo(_*.1,f*1.05,_*.85,f*.2),e.stroke(),e.strokeStyle="#4a3a55",e.lineWidth=512*.011,e.beginPath(),e.moveTo(-_*.95,-f*2.7),e.quadraticCurveTo(_*.2,-f*3.4,_*1.15,-f*2.6),e.stroke(),e.restore()}r(.07,-.12,.05,.2,"rgba(160,120,135,A)",.22),e.fillStyle="rgba(110,70,90,.55)";for(let h of[-1,1]){let[u,d]=n(h*.06,-.31);e.beginPath(),e.ellipse(u,d,512*.012,512*.006,0,0,Math.PI*2),e.fill()}let[s,o]=n(0,-.5),a=.25*512*.5,c=.065*512*.5;e.fillStyle="#5b2f50",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s-a*.5,o-c*1.2,s-a*.1,o-c*.9),e.lineTo(s,o-c*.6),e.lineTo(s+a*.1,o-c*.9),e.quadraticCurveTo(s+a*.5,o-c*1.2,s+a,o),e.closePath(),e.fill(),e.fillStyle="#7b4468",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*2,s+a,o),e.closePath(),e.fill(),e.strokeStyle="#3a1c33",e.lineWidth=512*.006,e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*.35,s+a,o),e.stroke(),r(.03,-.535,.05,.02,"rgba(255,220,235,A)",.4);let l=new Rn(t);return l.colorSpace=nn,l.anisotropy=4,l}function Ff(i,t,e){let n=[],r=(T,S={})=>{let D=new Te({color:S.vc?16777215:T,vertexColors:!!S.vc,metalness:S.metal??.04,roughness:S.rough??.82,flatShading:!0,emissive:S.emissive??(S.vc?1709092:0),transparent:!0,side:S.double?Ie:On});return n.push({mat:D,color:D.color.clone(),emissive:D.emissive.clone()}),D},s=r(16777215,{vc:!0,double:!0}),o=r(Je.skin,{rough:.7}),a=r(Je.eye,{rough:.5}),c=r(Je.moon,{metal:.35,rough:.35,emissive:2761744}),l=(T,S,D,G=[0,0,0])=>{let H=new Rt(T,S);return H.position.set(...G),D.add(H),H},h=i==="ally"?yn(3840636):Je.robe,u=i==="ally"?yn(2781272):Je.robeDeep,d=i==="ally"?yn(7655598):Je.trim,m=new Wt,g=new Wt;m.add(g);let _=[];for(let T of[-1,1]){let S=T*.075,D=Er(g,S,.96,.56);_.push(D),l(Ac([[S,.98,0],[S*1.04,.76,.008],[S*1.05,.54,.01]],H=>.068-.014*H,7,()=>Je.boot),s,D.thigh),l(Ac([[S*1.05,.58,.01],[S*1.1,.3,0],[S*1.1,.13,-.01]],H=>.054-.016*H,7,()=>Je.boot),s,D.shin);let G=ei(6,2,(H,U)=>{let X=H*Math.PI*2,J=U,z=-.05+J*.2,w=.13-J*.11,it=.045*(1-.65*J*J);return[S+Math.cos(X)*it,w+Math.sin(X)*it*.55,z]},()=>Je.boot,!0);l(G,s,D.shin),l(new Me(.012,.006,.12,5),a,D.shin,[S,.06,-.045])}let f=ei(14,8,(T,S)=>{let D=S<.25?.02:.02+(S-.25)*.55,G=D+T*(Math.PI*2-2*D),H=1.1-S*.82-(T>.35&&T<.65?0:.04*S)+.03*ci(T*7)*S,U=.165+.15*S**1.2;return[Math.sin(G)*U,H,Math.cos(G)*U*.82]},(T,S)=>nr(Je.dress,Je.dressHi,.6*ci(T*7)*S));l(f,s,g),l(ei(4,4,(T,S)=>{let D=-.35+T*.7,G=.15+.09*S;return[Math.sin(D)*G,.86-S*.6,Math.cos(D)*G*.62-.02]},()=>Je.lining),s,g);let p=ei(10,5,(T,S)=>{let D=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.1],[1.67,.052]],G=S*(D.length-1),H=Math.min(D.length-2,Math.floor(G)),U=G-H,X=D[H][0]+(D[H+1][0]-D[H][0])*U,J=D[H][1]+(D[H+1][1]-D[H][1])*U,z=T*Math.PI*2;return[Math.sin(z)*J*1.08,X,Math.cos(z)*J*.78]},(T,S)=>nr(Je.dress,Je.dressHi,S>.8?.5:.15*ci(T*4)),!0);l(p,s,g),l(ei(14,1,(T,S)=>{let D=T*Math.PI*2,G=.172+.006*S;return[Math.sin(D)*G*1.08,1.04+S*.11,Math.cos(D)*G*.82]},()=>Je.belt,!0),s,g);let x=(T,S)=>{let D=new Zr;D.absarc(0,0,T,Math.PI*.18,Math.PI*1.82,!1),D.absarc(T*.38,0,T*.78,Math.PI*1.7,Math.PI*.3,!0);let G=new Vs(D,{depth:S,bevelEnabled:!0,bevelThickness:S*.4,bevelSize:T*.08,bevelSegments:1,curveSegments:6});return G.center(),G};l(new An(.05,.012,4,10),c,g,[0,1.095,.152]).scale.set(1,.85,.6),l(x(.042,.012),c,g,[0,1.095,.162]).rotation.z=.5;let b=9,L=ei(28,14,(T,S)=>{let D=.36+.48*S**1.2,G=D+T*(Math.PI*2-2*D),H=.07+.16*ci(T*b+.5)+(T<.06||T>.94?.08:0),U=.14,X,J,z;if(S<U){let w=S/U;X=1.61-.14*w**.8,J=.1+.155*w**.7,z=.72}else{let w=(S-U)/(1-U);X=1.47-w*(1.47-H),J=.255+.25*w**1.3,z=.72+.22*w}return J*=1+.07*Math.sin(G*8)*Math.max(0,S-U),[Math.sin(G)*J*(1.12-.1*S),X,Math.cos(G)*J*z-.03*S]},(T,S)=>{let D=S>.89||T<.03||T>.97,G=nr(h,u,.35*ci(T*8+.25)+(T>.3&&T<.7?.15:0));return D?d:G});l(L,s,g),l(ei(10,2,(T,S)=>{let D=Math.PI*.55+T*Math.PI*.9,G=.105+.045*S;return[Math.sin(D)*G*1.1,1.58+S*.13,Math.cos(D)*G*.85]},(T,S)=>nr(h,d,S>.6?1:0)),s,g),l(new Me(.045,.055,.12,7),o,g,[0,1.63,0]);let C=new Wt;C.position.set(0,1.76,0),g.add(C);let A=r(16777215,{rough:.7});A.map=_x(),A.flatShading=!1,l(gx(),A,C),l(ei(20,4,(T,S)=>{let D=-Math.PI+T*Math.PI*2,G=Math.abs(D),H=G<.08?.72:G<.95?.6-.42*((G-.08)/.87)**.8:.18-.5*((G-.95)/(Math.PI-.95)),U=Math.PI/2-S*(Math.PI/2-H),X=1.085+.015*Math.sin(D*9);return[Math.sin(D)*Math.cos(U)*ir.w*X,Math.sin(U)*ir.h*X+.004,Math.cos(D)*Math.cos(U)*ir.d*X]},(T,S)=>nr(Je.hair,Je.hairDark,.15+.4*ci(T*14)*S),!0),s,C);let k=(T,S)=>nr(Je.hair,Je.hairDark,.25+.5*ci(T*9)*(.4+.6*S));l(ei(18,10,(T,S)=>{let D=Math.PI*.42+T*Math.PI*1.16,G=.1-S*(.95+.14*ci(T*6+.3)),H=S<.25?.13+S*.28:.2+.05*Math.sin(S*3.1),U=.022*Math.sin(S*15+D*3)*S;return[Math.sin(D)*(H+U)*1.05,G,Math.cos(D)*(H+U)*.85-.02-.05*S]},k),s,C);for(let T of[-1,1])for(let S of[0,1]){let D=T*(.098+S*.03),G=.035-S*.05,H=Array.from({length:8},(U,X)=>{let J=X/7;return[D+T*(.06*J+.025*Math.sin(J*9+S)),.04-J*(.55+.08*S),G+.06*J-.03*Math.sin(J*7)]});l(Ac(H,U=>.035*(1-.6*U)+.008,5,(U,X)=>k(X,U),[1,1,.55]),s,C)}let O=new Wt;O.position.set(0,.075,-.005),O.rotation.set(-.12,0,.07),C.add(O),l(ei(20,3,(T,S)=>{let D=T*Math.PI*2,G=.14+S*.24;return[Math.sin(D)*G,.02-.075*S*S+.012*Math.sin(D*3)*S,Math.cos(D)*G]},(T,S)=>nr(Je.hat,u,S>.9?.25:.2*ci(T*5)),!0),s,O),l(Ac([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],T=>.165*(1-T)**1.35+.004,8,(T,S)=>nr(Je.hat,u,.25*ci(S*4)+.15*T)),s,O),l(ei(16,1,(T,S)=>{let D=T*Math.PI*2,G=.168-.006*S;return[Math.sin(D)*G,.025+S*.06,Math.cos(D)*G]},()=>Je.hatBand,!0),s,O);let v=l(x(.04,.012),c,O,[0,.055,.172]);v.rotation.z=.5;let V=(T,S,D=.15)=>ei(10,6,(G,H)=>{let U=G*Math.PI*2,X=.065+D*Math.max(0,(H-.3)/.7)**1.4,J=H<.99?0:.07*ci(G*4),z=-(H*T)-J,w=S*H*H;return[Math.cos(U)*X,z,Math.sin(U)*X*.9+w]},(G,H)=>H>.85?d:nr(h,u,.3*ci(G*3)),!0),W=new Wt;W.position.set(-.23,1.47,0),W.rotation.set(-.42,0,-.2),g.add(W),l(V(.6,.06),s,W);let et=ai(Je.skin,s,!1);et.position.set(0,-.58,.05),W.add(et);let pt=new Wt;pt.position.set(.23,1.47,.02),pt.rotation.z=oi,g.add(pt);let K=l(V(.4,0,.07),s,pt);K.rotation.x=-.5;let at=l(new Me(.03,.034,.12,6),o,pt,[0,-.38,.19]);at.rotation.x=-.5;let{staffPivot:I,staff:Q,crystal:B,crystalMat:j,glow:ct}=wr(pt,[0,-.43,.24],n,t,e,ai(Je.skin,s,!0)),Y=Tr(C,[-1,1].map(T=>[T*.38*ir.w,.06*ir.h,.9*ir.d]),Sr.witch,t);return{root:m,body:g,head:C,arm:pt,staffPivot:I,crystal:B,crystalMat:j,glow:ct,staff:Q,height:2,materials:n,eyes:Y,leftArm:W,legs:_}}var yx={me:4020950,opp:12728908,ally:3121012};function Of(i,t,e,n){if(i==="witch")return Ff(t,e,n);if(i==="wizard")return Df(t,e,n);if(i==="knight")return Uf(t,e,n);if(i==="goblin")return Nf(t,e,n);i=i;let r=[],s=(V,W={})=>{let et=new Te({color:V,metalness:W.metal??.05,roughness:W.rough??.8,flatShading:!0,emissive:W.emissive??0,emissiveIntensity:W.ei??1,transparent:!0});return r.push({mat:et,color:et.color.clone(),emissive:et.emissive.clone()}),et},o=(V,W,et=0,pt=0,K=0)=>{let at=new Rt(V,W);return at.position.set(et,pt,K),at},c=i==="goblin"||i==="kid"?.78:1,l=s(i==="goblin"?7323466:15778970),h=s(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:yx[t],d=s(u),m=s(16766073,{metal:.2,rough:.4}),g=s(12897496,{metal:.3,rough:.45}),_=new Wt,f=new Wt;if(_.add(f),i==="wizard")f.add(o(new Me(.27,.46,1,9),d,0,.5,0)),f.add(o(new Me(.47,.47,.05,9),m,0,.03,0));else{let V=i==="knight"?g:h;f.add(o(new Me(.09,.08,.6,6),V,-.12,.3,0)),f.add(o(new Me(.09,.08,.6,6),V,.12,.3,0)),f.add(o(new tn(.16,.08,.26),h,-.12,.04,.05)),f.add(o(new tn(.16,.08,.26),h,.12,.04,.05)),f.add(o(new Me(.3,.34,.32,8),d,0,.72,0))}let p=i==="knight"?g:d;if(f.add(o(new Me(.24,.29,.55,8),p,0,1.12,0)),f.add(o(new An(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let V=o(new tn(.34,.6,.04),d,0,1,.27);f.add(V),f.add(o(new Ne(.13,6,4),g,-.3,1.36,0)),f.add(o(new Ne(.13,6,4),g,.3,1.36,0))}i==="human"&&f.add(o(new tn(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let x=new Wt;x.position.set(0,1.58,0),f.add(x),x.add(o(new _n(.2,1),l));for(let V of[-.07,.07])x.add(o(new Ne(.028,6,4),h,V,.02,.18));if(i==="wizard"){let V=s(15658740);x.add(o(new Bn(.17,.42,7),V,0,-.2,.1).rotateX(Math.PI)),x.add(o(new tn(.4,.34,.14),V,0,-.06,-.13)),x.add(o(new Me(.36,.36,.04,12),d,0,.15,0));let W=o(new Bn(.24,.62,9),d,0,.47,0);W.rotation.z=.12,x.add(W),x.add(o(new An(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let V of[-1,1]){let W=o(new Bn(.07,.34,5),l,V*.24,.05,0);W.rotation.z=-V*1.25,x.add(W)}x.add(o(new Bn(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")x.add(o(new _n(.235,1),g)),x.add(o(new tn(.3,.05,.05),h,0,.02,.21)),x.add(o(new Bn(.06,.4,6),s(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")x.add(o(new tn(.38,.2,.12),s(5913122),0,-.02,-.13)),x.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2),s(4029400),0,.03,0)),x.add(o(new tn(.2,.025,.16),s(4029400),0,.05,.2));else if(i==="human"){let V=s(5913122);x.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),V,0,.02,-.01)),x.add(o(new tn(.4,.22,.12),V,0,-.04,-.13))}let M=i==="knight"?g:d,b=new Wt;b.position.set(-.3,1.34,0),b.rotation.z=.25,f.add(b),b.add(o(new Me(.075,.1,.55,6),M,0,-.27,0)),b.add(o(new Ne(.07,6,4),l,0,-.58,0));let L=new Wt;L.position.set(.3,1.34,.02),L.rotation.z=oi,f.add(L),L.add(o(new Me(.075,.1,.5,6),M,0,-.22,.05).rotateX(-.5));let C=o(new Ne(.07,6,4),l,0,-.42,.22);L.add(C);let A=new Wt;A.position.set(0,-.42,.22),A.rotation.z=-.37,L.add(A);let k=er(n,e);k.group.position.y=.24,k.group.scale.setScalar(.8),A.add(k.group);for(let V of k.materials)r.push({mat:V,color:V.color.clone(),emissive:V.emissive.clone()});let{gem:O,gemMat:y,glow:v}=k;return _.scale.setScalar(c),{root:_,body:f,head:x,arm:L,staffPivot:A,crystal:O,crystalMat:y,glow:v,staff:k,height:1.95*c,materials:r}}function yu(i){return["wizard","witch","goblin","knight","kid","human"].find(t=>t===i)??"wizard"}function xx(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Rn(i);return n.colorSpace=nn,n}function Bf(i){let t;try{t=new Bs({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=Go,t.setClearColor(0,0);let e=new ks;e.add(new Xs(14673663,2760768,1.4));let n=new Qi(16777215,2.2);n.position.set(2,3,4),e.add(n);let r=new Qi(10456319,2);r.position.set(-3,2,-3),e.add(r);let s=new yi(16777215,3,3,2);e.add(s);let o=new bn(30,1,.1,50),a=xx(),c=new Wt;c.rotation.z=.12,e.add(c);let l=null,h="";function u(x){return l&&h===x||(l&&(c.remove(l.group),l.group.traverse(M=>M.geometry?.dispose?.())),l=er(x,a),h=x,c.add(l.group),s.color.copy(l.color),s.position.set(.3,br+.2,.6)),l}function d(){let x=i.clientWidth||300,M=i.clientHeight||420;t.setSize(x,M,!1),o.aspect=x/M;let b=1.55/Math.tan(qs.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,b),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,f=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(x){if(!f()){m=0;return}m=requestAnimationFrame(p);let M=Math.min(.05,(x-g)/1e3);g=x,_+=M,l&&(c.rotation.y+=M*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=M*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,M,.25),t.render(e,o))}return{show(x){u(x),d(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(x,M,b){let L=[],C=h,A=c.rotation.y,k=c.position.y;t.setPixelRatio(1),t.setSize(M,b,!1),o.aspect=M/b,o.position.set(.35,br+.12,1.6),o.lookAt(0,br-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let O of x)u(O).update(1.2,0,0),t.render(e,o),L.push(i.toDataURL("image/png"));return c.rotation.y=A,c.position.y=k,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),C&&u(C),d(),L},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function wn(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,r)=>n+(r-n)*e(),int:(n,r)=>n+Math.floor(e()*(r-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var Gt=i=>i<0?0:i>1?1:i,Ae=(i,t,e)=>{let n=Gt((e-i)/(t-i));return n*n*(3-2*n)},Kf=(i,t,e)=>i+(t-i)*e,jt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],ye=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],Rr=(i,t)=>1-Math.exp(-i*t),$o=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},pe=i=>i*Math.PI/180;function In(i,t){let e=pe(i),n=pe(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function $f(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return jt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var Cc=(()=>{let i=wn(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function Be(i,t){let e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,d=Cc[h+c],m=Cc[h+l],g=Cc[u+c],_=Cc[u+l];return(d*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var kf=Math.cos(.55),zf=Math.sin(.55);function on(i,t,e=5,n=2.03,r=.5){let s=0,o=1,a=0;for(let c=0;c<e;c++){s+=o*Be(i+17.3*c,t-9.1*c),a+=o;let l=(i*kf-t*zf)*n,h=(i*zf+t*kf)*n;i=l,t=h,o*=r}return s/a}var Vf=Math.cos(.7),Gf=Math.sin(.7);function Jf(i,t,e=5,n=2.1,r=.52){let s=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*Be(i+31.7*l,t+5.3*l)-1);h=h*h*c,s+=h*o,a+=o,c=Gt(h*2);let u=(i*Vf-t*Gf)*n,d=(i*Gf+t*Vf)*n;i=u,t=d,o*=r}return s/a}var Wf=new Map;function Mx(i,t,e){let n=`${t}:${e}`,r=Wf.get(n);if(!r){let l=wn(e*977+t);r=new Float32Array(t);for(let h=0;h<t;h++)r[h]=l.random();Wf.set(n,r)}let s=i*t,o=Math.floor(s),a=s-o,c=a*a*(3-2*a);return r[(o%t+t)%t]*(1-c)+r[((o+1)%t+t)%t]*c}function Xf(i,t=5,e=3,n=1,r=.5){let s=0,o=1,a=0;for(let c=0;c<t;c++)s+=o*Mx(i,e*2**c,n+c),a+=o,o*=r;return s/a}function rr(i,t){let e=i.stops;return(n,r,s)=>{let o=Math.asin(Math.max(-1,Math.min(1,s)))*180/Math.PI,a=$f(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+r*l[1]+s*l[2])));for(let[u,d,m]of i.glow){let g=Math.exp(-h/u)*d*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-r*l[1]+s*l[2]))),d=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=d*i.anti_col[0],a[1]+=d*i.anti_col[1],a[2]+=d*i.anti_col[2]}}return a}}var Js=(i,t)=>Math.round(255*Math.pow(Gt(Rr(i,t)),1/2.2));function bu(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function vu(i,t=!1){let e=new Rn(i);return e.colorSpace=nn,t?e.wrapS=e.wrapT=qi:e.wrapS=qr,e.anisotropy=2,e}function bx(i,t,e){let n=t/2,{c:r,g:s,img:o}=bu(t,n),a=rr(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??ye(i.far2,.8),d=[],m=h.map(()=>[]);for(let b=0;b<t;b++){let L=(b+.5)/t,C=L*2*Math.PI;d.push(a(Math.cos(C)*Math.cos(.012),Math.sin(C)*Math.cos(.012),Math.sin(.012)));let A=1;for(let k of e.notchAz){let O=Math.abs($o(C,pe(k)));A*=1-.85*Math.exp(-((O/pe(20))**2))}h.forEach(([k,O,y],v)=>{if(e.ridgeKind==="trees"){m[v].push(k+O*Xf(L,6,18,y,.62)**1.5);return}let V=1-Math.abs(2*Xf(L,7,4,y,.56)-1);m[v].push((k+O*V**1.3)*(.35+.65*A))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),f=null,p=[0,0,0],x=[0,0,0];if((i.milky??0)>0){let b=new R(.25,-.55,.8).normalize(),L=b.clone().cross(new R(0,0,1)).normalize(),C=b.clone().cross(L);f=[b.x,b.y,b.z],p=[L.x,L.y,L.z],x=[C.x,C.y,C.z]}for(let b=0;b<n;b++){let L=((b+.5)/n-.5)*Math.PI,C=Math.cos(L),A=Math.sin(L),k=n-1-b;for(let O=0;O<t;O++){let y=(O+.5)/t*2*Math.PI,v=C*Math.cos(y),V=C*Math.sin(y),W=A,et=a(v,V,W);if(f&&L>0){let I=Math.asin(Math.max(-1,Math.min(1,v*f[0]+V*f[1]+W*f[2]))),Q=Math.atan2(v*x[0]+V*x[1]+W*x[2],v*p[0]+V*p[1]+W*p[2]),B=3*Math.cos(Q),j=3*Math.sin(Q),ct=on(B+9*I,j+4*I,4),Y=Ae(.5,.75,on(B*1.7+17+14*I,j*1.7-5+6*I,3)),T=Math.exp(-((I/(i.milky_w??.2))**2))*(.25+1.3*ct)*(1-.65*Y)*i.milky,S=i.milky_col??[.55,.58,.85];et=[et[0]+T*S[0],et[1]+T*S[1],et[2]+T*S[2]]}let pt=0;h.forEach(([,,,I,Q],B)=>{let j=Gt((m[B][O]-L)/l+.5);if(j<=0)return;let ct=d[O],Y=jt(Q,ct,I),T=jt(Y,ct,Math.exp(-Math.max(L,0)/.025)*.55);et=jt(et,T,j),pt=Math.max(pt,j)});let K=Gt(-L/l+.5);K>0&&(et=jt(et,u,K));let at=(k*t+O)*4;o.data[at]=Js(et[0],c),o.data[at+1]=Js(et[1],c),o.data[at+2]=Js(et[2],c),o.data[at+3]=255,g[k*t+O]=pt,_[k*t+O]=(o.data[at]+o.data[at+1]+o.data[at+2])/765}}let M=(i.stars??0)>0?vx(t,n,i.star_n,i.stars,g,_):null;return s.putImageData(o,0,0),{tex:vu(r),stars:M}}function vx(i,t,e,n,r,s){let o=wn(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let d=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(d),_=Math.floor(m/(2*Math.PI)*i)%i,f=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-f,x=(1-r[p*i+_])*Gt(1-s[p*i+_]*3),M=o.random()**6,b=a[o.int(0,3)];if(x<=.01)continue;let L=Math.min(1.6,(.1+.95*M)*n*x*2.2),C=140;c.push(C*Math.cos(g)*Math.cos(m),C*Math.cos(g)*Math.sin(m),C*Math.sin(g)),l.push(b[0]*L,b[1]*L,b[2]*L),h.push(1+M*2.5)}return{pos:c,col:l,size:h}}function Ex(i,t,e){let n=t/2,{c:r,g:s,img:o}=bu(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let d=0;d<n;d++){let m=((d+.5)/n-.5)*Math.PI,g=n-1-d;if(m<.02)continue;let _=Math.cos(m),f=Math.sin(m),p=1/(f+.16),x=c<50?Ae(.02,.1,m)*(1-Ae(c*.6,c,m)):Ae(.02,.16,m);if(!(x<=0))for(let M=0;M<t;M++){let b=(M+.5)/t*2*Math.PI,L=_*Math.cos(b),C=_*Math.sin(b),A=L*p*i.cloud_scale,k=C*p*i.cloud_scale,O=on(A*.6+9,k*.6+2,3)-.5,y=A+O*1.4,v=k+O*1.1,V=on(y,v,5),W=Ae(i.cov0,i.cov1,V);if(W<=.002)continue;let et=on(y+h,v+u,5),pt=Gt(.55-(et-V)*3.4)*(1-.4*W),K=Math.exp(-Math.acos(Math.max(-1,Math.min(1,L*e[0]+C*e[1]+f*e[2])))/1.1),at=jt(i.cloud_lit_far,i.cloud_lit_near,K),I=ye(i.cloud_shadow,.6+.4*K),Q=jt(I,at,pt),B=W*(1-W)*4*K*.6,j=(g*t+M)*4;o.data[j]=Js(Q[0]+B*i.cloud_rim[0],a),o.data[j+1]=Js(Q[1]+B*i.cloud_rim[1],a),o.data[j+2]=Js(Q[2]+B*i.cloud_rim[2],a),o.data[j+3]=Math.round(255*W*x*i.cloud_opacity)}}return s.putImageData(o,0,0),vu(r)}function wx(i,t,e={}){let n=e.span??1.4,{c:r,g:s,img:o}=bu(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(d,m),_=Gt((1-g)/(n*2/t)+.5),f=Math.sqrt(Gt(1-g*g)),p=0;for(let[C,A]of e.rings??[])p=Math.max(p,A*(1-Ae(C-.1,C,g)));let x;if(i==="sun")x=jt(e.sunInner??[1,.62,.25],a,Math.pow(f,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let C=Gt(d*l[0]+m*l[1]+f*l[2]),A=Ae(.5,.6,on(d*1.9+4,m*1.9-2,5))*.42,k=Ae(.62,.8,Be(d*14,m*14))*.12,O=(.04+C**.8)*(.6+.4*f)*(.9-A-k)*(e.moonGain??1.55);x=ye(a,O),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-Ae(n*.86,n,g);let M=_+(1-_)*p,b=M>1e-4?[0,1,2].map(C=>(_*x[C]+(1-_)*p*c[C])/M):[0,0,0],L=(h*t+u)*4;o.data[L]=Math.round(255*Math.pow(Gt(b[0]),1/2.2)),o.data[L+1]=Math.round(255*Math.pow(Gt(b[1]),1/2.2)),o.data[L+2]=Math.round(255*Math.pow(Gt(b[2]),1/2.2)),o.data[L+3]=Math.round(255*Gt(M))}return s.putImageData(o,0,0),vu(r,!0)}var Qt=class{constructor(t=!1,e=0){Ke(this,"alpha",t);Ke(this,"pos",[]);Ke(this,"col",[]);Ke(this,"idx",[]);Ke(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((r,s)=>{let o=n?.[s];r.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new ve;return t.setAttribute("position",new re(this.pos,3)),t.setAttribute("color",new re(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new re(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function xe(i={}){let t=new Gs({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Ie:On}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var Li=(i={})=>{let t=new sn({vertexColors:!0,side:Ie,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?hn:Ri,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},Xn=(i,t=1)=>new sn({color:new Vt(i[0]*t,i[1]*t,i[2]*t),side:Ie,toneMapped:!1});function qf(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),r.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;s.push(l,h,l+1,h,h+1,l+1)}let o=new ve;return o.setAttribute("position",new re(n,3)),o.setAttribute("uv",new re(r,2)),o.setIndex(s),o}var xu=(i,t=!1)=>new sn({map:i,side:Ie,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function Yf(i,t){let e=new Qt,n=(r,s,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[d,m,g,_]of[[r,0,s,s],[0,r,-s,s],[-r,0,-s,-s],[0,-r,s,-s]])h.push(e.v([d*c-m*l,d*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let d=0;d<8;d++)e.f(u,h[d],h[(d+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function Di(i){let t=new Wt,e=[],n=bx(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),r=n.tex,s=new Rt(qf(150,48,24),xu(r));if(s.renderOrder=-10,s.frustumCulled=!1,t.add(s),e.push(r,s.geometry,s.material),n.stars&&n.stars.pos.length){let M=new ve;M.setAttribute("position",new re(n.stars.pos,3)),M.setAttribute("color",new re(n.stars.col,3)),M.setAttribute("size",new re(n.stars.size,1));let b=new $n({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:hn}),L=new yr(M,b);L.renderOrder=-9.5,L.frustumCulled=!1,t.add(L),e.push(M,b)}let o=null;if(i.clouds!==!1){let M=Ex(i.th,Math.min(1024,i.W),i.bodies[0]);o=new Rt(qf(138,48,24),xu(M,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(M,o.geometry,o.material)}let a=i.body.span??1.4,c=wx(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=xu(c,!0);e.push(c,l);for(let M of i.bodies){let L=146*Math.tan(i.body.r)*a,C=new R(...M),A=C.clone().cross(new R(0,0,1));A.lengthSq()<1e-8&&(A=new R(1,0,0)),A.normalize();let k=A.clone().cross(C).normalize(),O=C.clone().multiplyScalar(146),y=new ve,v=[O.clone().addScaledVector(A,-L).addScaledVector(k,-L),O.clone().addScaledVector(A,L).addScaledVector(k,-L),O.clone().addScaledVector(A,L).addScaledVector(k,L),O.clone().addScaledVector(A,-L).addScaledVector(k,L)];y.setAttribute("position",new re(v.flatMap(W=>[W.x,W.y,W.z]),3)),y.setAttribute("uv",new re([0,0,1,0,1,1,0,1],2)),y.setIndex([0,1,2,0,2,3]);let V=new Rt(y,l);V.renderOrder=-8,V.frustumCulled=!1,t.add(V),e.push(y)}let h=wn(i.seed??21),u=[],d=Math.round(i.sparkles*(i.bigShare??.27)),m=new sn({color:new Vt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Ie}),g=new sn({color:new Vt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Ie}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},f=Yf(..._.big),p=Yf(..._.small);e.push(m,g,f,p);for(let M=0;M<i.sparkles;M++){let b=M<d,L=h.uniform(0,360),C=h.uniform(..._.el??[35,88]),A=In(L,C);i.bodies.concat([In(i.th.body_az+180,i.th.body_el)]).some(v=>A[0]*v[0]+A[1]*v[1]+A[2]*v[2]>Math.cos(pe(24)))&&(L+=45);let k=In(L,C).map(v=>v*135),O=new Rt(b?f:p,b?m:g);O.position.set(...k),O.lookAt(0,0,0),O.renderOrder=-7,t.add(O);let y=b?24:12;u.push({m:O,big:b,pulses:Array.from({length:y},(v,V)=>Math.round((V+.5)*3600/y+h.int(-15,15)))})}let x=null;return{group:t,envMap(){if(x)return x;let M=r.image,b=document.createElement("canvas");b.width=M.width,b.height=M.height;let L=b.getContext("2d");return L.translate(b.width*.5,0),L.scale(-1,1),L.drawImage(M,0,0),L.drawImage(M,-M.width,0),x=new Rn(b),x.colorSpace=nn,x.mapping=Co,e.push(x),x},update(M){o&&(o.rotation.z=M%3600/3600*Math.PI*2);let b=M%3600;for(let L of u){let C=1;for(let A of L.pulses){if(b<A-18||b>A+14)continue;let k=[[A-18,1],[A-9,L.big?1.35:1.2],[A,L.big?.2:.35],[A+14,1]];for(let O=0;O<3;O++)if(b>=k[O][0]&&b<=k[O+1][0]){let y=(b-k[O][0])/(k[O+1][0]-k[O][0]);C=Kf(k[O][1],k[O+1][1],y*y*(3-2*y))}}L.m.scale.setScalar(C)}},dispose(){for(let M of e)M.dispose()}}}function Ln(i,t,e=0,n=1,r=0){let s=Math.floor(i/t),o=(i-s*t)/t,a=o*o*(3-2*o),c=(s+r)%2?n:e,l=(s+r)%2?e:n;return Kf(c,l,a)}var jf=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function js(i,t,e,n){let r=new Qt,s=[];for(let o of i){if(o===0){let c=r.v([0,0,e(0,0)],n(0,0));s.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(r.v([h,u,e(h,u)],n(h,u)))}s.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?r.f(s[0][0],s[1][a],s[1][c]):r.f(s[o][a],s[o][c],s[o-1][c],s[o-1][a])}return r.geo()}function Sx(i,t,e,n,r=0){let s=.6+.4*Gt(t)**.7,o=ye(i,s*(.88+.24*e));return jt(o,n,Gt(Gt(1-t*3)*.55+r*.75))}function Ui(i,t,e,n,r,s,o=!0){let a=Be(e*2.5+r,n*2.5+r),c=o?Gt((Be(e*.7+r,n*.7-r)-.5)*2.5):0;return Sx(i,t,a,s,c)}function Mu(i,t,e,n,r,s,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],s([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],s([o[0],o[1],e+n],1));for(let g=0;g<r;g++){let _=2*Math.PI*g/r,f=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(f,s(f,0))),l.push(i.v(p,s(p,1)))}let d=[],m=[];for(let g=0;g<r;g++)d.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<r;g++){let _=(g+1)%r;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(d[g],d[_],m[_],m[g])}}function Tx(i,t,e,n,r,s,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,r-=h/2,t+=l/2,e-=l/2;let u=(g,_,f)=>[g*Math.cos(_),g*Math.sin(_),f],d=g=>i.v(g,a(g,(g[2]-s)/o)),m=(g,_,f,p)=>i.f(d(g),d(_),d(f),d(p));for(let g=0;g<c;g++){let _=n+(r-n)*g/c,f=n+(r-n)*(g+1)/c;m(u(t,_,s+o),u(e,_,s+o),u(e,f,s+o),u(t,f,s+o)),m(u(e,_,s+o),u(e,_,s),u(e,f,s),u(e,f,s+o)),m(u(t,f,s+o),u(t,f,s),u(t,_,s),u(t,_,s+o))}m(u(t,n,s+o),u(t,n,s),u(e,n,s),u(e,n,s+o)),m(u(e,r,s+o),u(e,r,s),u(t,r,s),u(t,r,s+o))}function Ko(i,t,e,n,r=[1,1,1]){let s=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],d=h[1]-l[1],m=Math.hypot(u,d)||1,g=-d/m,_=u/m;s.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],r)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],r))});for(let a=0;a<t.length-1;a++)i.f(s[a],o[a],o[a+1],s[a+1])}var Ic=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function Rx(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(pe(n)),.4+.4*Math.sin(pe(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(pe(n)),-.4+.4*Math.sin(pe(n))]);return[[...t,...e]]}return i===1?[Ic(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],Ic(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function Zf(i,t,e,n,r,s,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let d of Rx(t))Ko(i,d.map(([m,g])=>[h+r*(m*c-g*l),u+r*(m*l+g*c)]),o,s)}function Ar(i){let{th:t,r:e}=i,n=t.stone,r=new Qt,s=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,f)=>s(Ui(m,f,_[0],_[1],g,t.moss,i.patchy??!0),_)};Mu(r,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),Mu(r,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],f)=>{let p=f*.23;for(let x=0;x<_;x++)Tx(r,m,g,p+2*Math.PI*x/_,p+2*Math.PI*(x+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new Qt;Mu(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new Qt;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),f=Math.sin(g);Ko(l,[[.3*_,.3*f],[2.2*_,2.2*f]],.07,c);for(let p of[-1,1]){let x=g+p*pe(35);Ko(l,[[1.3*_,1.3*f],[1.3*_+.7*Math.cos(x),1.3*f+.7*Math.sin(x)]],.05,c)}}Ko(l,Ic(2.3),.06,c),Ko(l,Ic(6),.05,c);let h=new Qt;for(let m=0;m<8;m++){let g=pe(45*m);m===6?Zf(h,0,g,7.4,.95,c+.01,.13):Zf(h,m%3,g,8.2,.55,c+.01,.09)}let u=new Wt;u.add(new Rt(r.geo(),xe())),u.add(new Rt(a.geo(),Xn(i.glowCol,i.glow*1.1)));let d=new Rt(l.geo(),Xn(i.lineCol,i.glow*1.3));return d.name="centre-pattern",u.add(d),u.add(new Rt(h.geo(),Xn(i.runeCol,i.glow*1.6))),u}function Qs(i){let{r:t}=i,e=i.wind??(()=>{let r=new R(.8,.6,0).normalize();return[r.x,r.y,0]})(),n=new Qt(!1,1);for(let r=0;r<i.tufts;r++){let s=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,s))continue;let a=s*Math.cos(o),c=s*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),d=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),f=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],x=[-Math.sin(_),Math.cos(_)],M=i.gh(u,d),b=i.base(s),L=i.tip(s,_),C=jt(b,L,.55),A=[u,d,M],k=[u+p[0]*f*.3,d+p[1]*f*.3,M+m*.55],O=[u+p[0]*f,d+p[1]*f,M+m],y=(K,at)=>{let I=K[2]-M,Q=.32*I*I;return n.v(K,at,[[e[0]*Q,e[1]*Q,0]])},v=y([A[0]-x[0]*g,A[1]-x[1]*g,A[2]],b),V=y([A[0]+x[0]*g,A[1]+x[1]*g,A[2]],b),W=y([k[0]-x[0]*g*.65,k[1]-x[1]*g*.65,k[2]],C),et=y([k[0]+x[0]*g*.65,k[1]+x[1]*g*.65,k[2]],C),pt=y(O,L);n.f(v,V,et,W),n.f(W,et,pt)}}return n.geo()}function Qf(i,t,e,n,r,s,o,a){let c=new R(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new R(0,0,1)).normalize(),u=l.clone().cross(h),d=12,m=o*r,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([f,p])=>{let x=(.45+3*a*f**1.6)*n;return Array.from({length:d},(M,b)=>{let L=2*Math.PI*b/d,C=c.clone().multiplyScalar(f).addScaledVector(h,Math.cos(L)*x).addScaledVector(u,Math.sin(L)*x);return i.v([t[0]+C.x,t[1]+C.y,t[2]+C.z],[s[0],s[1],s[2],p*m])})});for(let f=0;f<g.length-1;f++)for(let p=0;p<d;p++){let x=(p+1)%d;i.f(_[f][p],_[f][x],_[f+1][x],_[f+1][p])}}function to(i,t,e,n,r,s,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[r[0],r[1],r[2],n(0,0)*s]),l=[...o,t].map(h=>Array.from({length:40},(u,d)=>{let m=2*Math.PI*d/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[r[0],r[1],r[2],n(g,_)*s])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let d=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][d],l[h][d])}}var ns=()=>new sn({vertexColors:!0,transparent:!0,depthWrite:!1,blending:hn,side:Ie,fog:!1}),Pc=null;function td(){if(Pc)return Pc;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Pc=new Rn(i),Pc}function Ni(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let r=new Float32Array(i.n*3),s=new ve;s.setAttribute("position",new Le(r,3));let o=new _r({map:td(),color:new Vt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:hn,sizeAttenuation:!0,fog:!1}),a=new yr(s,o);a.frustumCulled=!1;let c=l=>{let h=jf(l);for(let u=0;u<i.n;u++){let d=i.twinkle?Math.sin(l*.05+n[u])*.15:0;r[u*3]=t[u][0]+e[u][0]*h+d,r[u*3+1]=t[u][1]+e[u][1]*h,r[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}s.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function Lc(i){let t=i.list.length,e=(l,h,u)=>{let d=new Float32Array(t*3),m=new ve;m.setAttribute("position",new Le(d,3));let g=new _r({map:td(),color:h,size:l,transparent:!0,depthWrite:!1,blending:hn,opacity:u,fog:!1}),_=new yr(m,g);return _.frustumCulled=!1,{p:_,pos:d,g:m}},n=i.gain??1,r=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),s=e(2.2*r,new Vt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*r,new Vt(1,1,1).lerp(new Vt(i.col[0],i.col[1],i.col[2]),.3),1),a=new Wt;a.add(s.p,o.p);let c=l=>{let h=jf(l);i.list.forEach((u,d)=>{for(let m of[s.pos,o.pos])m[d*3]=u.p[0],m[d*3+1]=u.p[1],m[d*3+2]=u.p[2]+u.amp*h}),s.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function ed(i,t){let{r:e,idx:n,th:r}=t,s=n/2,o=jt(r.back_lit[0],r.back_lit[1],s),a=jt(r.back_dark[0],r.back_dark[1],s),c=r.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],d=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(r.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(r.back_w??1),_=e.uniform(0,6.28),f=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(b=>Rr(b,r.exposure??1)),x=Math.exp(-(($o(h,t.sunAz)/.5)**2))*(r.back_rim_k??0),M=[];for(let b=0;b<7;b++){let L=b/6,C=-2+(m+2)*L,A=g*(1-.55*L)*(1+.5*Math.exp(-Math.max(C,0)/3)),k=Math.sin(L*4+_)*1.2+f*C,O=[u[0]+d[0]*k,u[1]+d[1]*k,C],y=1-.75*L*L,v=ye(o,y),V=ye(a,y);c>0&&(v=jt(v,p,c*.6*(1-.5*L)),V=jt(V,p,c*.6*(1-.5*L))),x>.01&&(v=jt(v,r.back_rim,.6*x*(1-L)),V=jt(V,r.back_rim,.6*x*(1-L))),M.push([i.v([O[0]-d[0]*A/2,O[1]-d[1]*A/2,C],v),i.v([O[0]+d[0]*A/2,O[1]+d[1]*A/2,C],V)])}for(let b=0;b<6;b++)i.f(M[b][0],M[b][1],M[b+1][1],M[b+1][0])}}function Dc(){let i=new Qt,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,r=a=>$f(e,a),s=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],r(a)))),o=i.v([.07*1.12*1.12,0,1.12],r(1.12));for(let a=0;a<s.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(s[a][c],s[a][l],s[a+1][l],s[a+1][c])}for(let a=0;a<n;a++)i.f(s[s.length-1][a],s[s.length-1][(a+1)%n],o);return i.geo()}function Hi(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let r of n)r.dispose()})}function Fi(i){let t=(n,r=1,s=.5)=>{let o=(n[0]+n[1]+n[2])/3;return ye(jt([o,o,o],n,s),r)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let r=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(r)&&(e[n]=Array.isArray(r[0])?r.map(s=>t(s)):t(r))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var Eu={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},eo=78,wu=[90,270];function nd(i,t){let e=i==="night"?Eu.NIGHT:i==="day"?{...Fi(Eu.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:Eu.SUNSET,n=e.emit,r=n*.75,s=wn(13),o=wn(41),a=new Wt,c=[In(e.body_az,e.body_el)],l=wu.map(Y=>[eo*Math.cos(pe(Y)),eo*Math.sin(pe(Y))]),h=pe(e.body_az),u=[Math.cos(h),Math.sin(h)],d=(()=>{let Y=new R(.8,.6,0).normalize();return[Y.x,Y.y,0]})(),m=(Y,T,S)=>{let D=(Y%360+360)%360;return D>255&&D<285&&T>S},g=e.stone,_=(Y,T)=>{let S=Math.hypot(Y,T),D=Gt((S-12)/10)*.35*(Math.sin(Y*.09)+Math.cos(T*.11)+.5*Math.sin((Y+T)*.19));D+=Gt((S-60)/60)*3*Math.sin(Y*.05+1)*Math.cos(T*.04);for(let[G,H]of l)D*=Ae(22,40,Math.hypot(Y-G,T-H));return D},f=(Y,T)=>{let S=0;for(let D of wu){let G=pe(D),H=Math.cos(G),U=Math.sin(G),X=Y*H+T*U,J=Math.abs(-Y*U+T*H);X>9&&(S=Math.max(S,Math.exp(-((J/4)**2))*Ae(9,16,X)*(1-Ae(eo-10,eo-2,X))))}return S},p=(Y,T)=>{let S=Gt((Math.hypot(Y,T)-10)/70)**.8,D=on(Y*.06+3,T*.06-7,3);return jt(ye(jt(e.g_near,e.g_far,S),.75+.5*D),e.g_road,f(Y,T)*.8)};a.add(new Rt(js([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),xe({flat:!1}))),a.add(Ar({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let x=new Qt,M=(Y,T,S,D,G,H)=>{let U=o.uniform(0,50),X=(q,tt)=>Ui(G,tt,q[0],q[1],U,e.moss),J=(q,tt)=>Array.from({length:D},(rt,ht)=>{let P=2*Math.PI*ht/D,E=[H[0]+Y*Math.cos(P),H[1]+Y*Math.sin(P),q];return x.v(E,X(E,tt))}),z=J(T,0),w=J(T+S,1),it=J(T,0),$=J(T+S,1);for(let q=0;q<D;q++){let tt=(q+1)%D;x.f(it[q],it[tt],$[tt],$[q])}x.f(...w),x.f(...[...z].reverse())},b=[],L=Dc(),C=Li({gain:1.05}),A=[];for(let Y of[45,135,225,315]){let T=pe(Y),S=9.35*Math.cos(T),D=9.35*Math.sin(T);M(.4,.3,1.1,12,g[3],[S,D]),M(.55,1.4,.3,12,g[0],[S,D]);let G=new Rt(L,C);G.position.set(S,D,1.75),a.add(G),b.push({m:G,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),A.push({pos:[S,D,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let k=new Qt,O=new Qt(!1,2),y=(Y,T,S,D,G)=>{let H=Math.cos(D),U=Math.sin(D),X=(J,z,w)=>{let it=J*S[0],$=z*S[1],q=[T[0]+it*H-$*U,T[1]+it*U+$*H,T[2]+w*S[2]];return Y.v(q,G(q))};for(let J of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])Y.f(...J.map(([z,w,it])=>X(z,w,it)))},v=t?6:10;for(let Y=0;Y<v;Y++){let T=2*Math.PI*(Y+o.uniform(-.2,.2))/v,S=o.uniform(14,20),D=S*Math.cos(T),G=S*Math.sin(T),H=_(D,G),U=o.uniform(6,9),X=()=>e.cs_stone;y(k,[D,G,H+(U-.2)/2],[.2,.2,U+.2],Math.PI/4,X);let J=o.uniform(0,3.14),z=[-Math.sin(J),Math.cos(J)],w=[Math.cos(J),Math.sin(J)];y(k,[D,G,H+U-.2],[.08,1.3,.08],J,X);let it=[D,G,H+U-.3],$=(rt,ht)=>{let P=.35*Math.sin(1.4*rt+ht)*rt/5;return[w[0]*P+d[0]*(.15*rt)/5,w[1]*P+d[1]*(.15*rt)/5,0]},q=Array.from({length:6},(rt,ht)=>Array.from({length:3},(P,E)=>O.v([it[0]+z[0]*(E-1)*.6,it[1]+z[1]*(E-1)*.6,it[2]-ht*.6],ye(e.banner,1-.35*ht/5),[$(ht,0),$(ht,Math.PI)]))),tt=O.v([it[0],it[1],it[2]-3.6],ye(e.banner,.6),[$(6,0),$(6,Math.PI)]);for(let rt=0;rt<5;rt++)for(let ht=0;ht<2;ht++)O.f(q[rt][ht],q[rt][ht+1],q[rt+1][ht+1],q[rt+1][ht]);O.f(q[5][0],q[5][1],tt),O.f(q[5][1],q[5][2],tt)}let V=xe({double:!0,morph:!0}),W=new Rt(O.geo(),V);W.morphTargetInfluences=[0,0],a.add(new Rt(k.geo(),xe()),W,new Rt(x.geo(),xe()));let et=[];wu.forEach((Y,T)=>{let S=new Qt,D=new Qt,G=new Qt,H=new Qt,U=new Qt,X=new Qt(!1,2),J=pe(Y),z=[eo*Math.cos(J),eo*Math.sin(J),0],w=J-Math.PI/2,it=Math.cos(w),$=Math.sin(w),q=F=>[z[0]+F[0]*it-F[1]*$,z[1]+F[0]*$+F[1]*it,F[2]],tt=F=>{let ot=Be(F[0]*.8+T*10,F[2]*.8),lt=.6+.4*Gt(F[2]/6);return ye(e.cs_stone,lt*(.75+.5*ot)*(.8+.4*Gt(F[2]/30)))},rt=(F,ot,lt,st)=>{for(let wt of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])F.f(...wt.map(([vt,gt,Lt])=>{let yt=[ot[0]+vt*lt[0],ot[1]+gt*lt[1],ot[2]+Lt*lt[2]];return F.v(q(yt),st(yt))}))},ht=(F,ot,lt,st,wt)=>{let vt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([yt,At])=>[F+yt*st,ot+At*st,lt]),gt=[F,ot,lt+wt],Lt=yt=>ye(e.cs_roof,.8+.4*Gt((yt[2]-22)/22));for(let yt=0;yt<4;yt++){let At=vt[yt],Xt=vt[(yt+1)%4];D.f(D.v(q(At),Lt(At)),D.v(q(Xt),Lt(Xt)),D.v(q(gt),Lt(gt)))}};rt(S,[0,0,6],[40,4,12],tt);for(let F=-18;F<=18;F+=2.6)if(Math.abs(F)>4.6)for(let ot of[-1.6,1.6])rt(S,[F,ot,12.7],[1.4,.8,1.4],tt);for(let F of[-20,20]){rt(S,[F,0,11],[8,8,22],tt);for(let ot of[12,20])rt(S,[F,0,ot],[8.6,8.6,.6],tt);ht(F,0,22,4.7,9),rt(S,[F,0,31],[.12,.12,9],tt)}rt(S,[0,0,17],[7,7,34],tt);for(let F of[13,24])rt(S,[0,0,F],[7.6,7.6,.6],tt);ht(0,0,34,4.3,10),rt(S,[0,0,46.5],[.12,.12,5],tt);for(let F of[-2.9,2.9])rt(S,[F,-3.75,3.8],[.9,.6,7.6],tt);rt(S,[0,-3.75,7.7],[6.8,.6,.9],tt),rt(H,[0,-3.6,3.6],[4.6,.3,7.2],F=>F[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let F=0;F<7;F++)rt(H,[-2.1+.7*F,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let F of[2,4.5,6.8])rt(H,[0,-3.85,F],[4.6,.2,.12],()=>[.02,.016,.014]);{let F=Array.from({length:9},(lt,st)=>[2.3*Math.cos(Math.PI*st/8),7.2+2.3*Math.sin(Math.PI*st/8)]);H.f(...F.map(([lt,st])=>H.v(q([lt,-3.75,st]),[.006,.005,.008])));let ot=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];H.f(...[...ot].reverse().map(lt=>H.v(q(lt),[.04,.025,.02])))}for(let F of[9.5,15,20.5,26,31])rt(G,[0,-3.62,F],[.8,.3,1.7],()=>[1,1,1]);for(let F of[-20,20])for(let ot of[5,10,15,20])rt(G,[F,-4.12,ot],[.8,.3,1.7],()=>[1,1,1]);for(let F of[-4.3,4.3]){rt(S,[F,-3.8,4.2],[.15,.15,1],tt);let ot=new _n(.35,1),lt=ot.attributes.position;for(let wt=0;wt<lt.count;wt+=3)U.f(...[0,1,2].map(vt=>U.v(q([F+lt.getX(wt+vt),-3.8+lt.getY(wt+vt),5.1+lt.getZ(wt+vt)*1.5]),[1,1,1])));ot.dispose();let st=q([F,-4.6,5.3]);T===0&&A.push({pos:st,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[F,ot,lt,st,wt]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let vt=[0,.2,.4,.6,.82],gt=(Ft,$t)=>{let ne=.5*wt*Math.sin(7*Ft+$t)*Ft,nt=.1*wt*Math.sin(5*Ft+$t)*Ft;return[-ne*$,ne*it,nt]},Lt=(Ft,$t,ne)=>X.v(q([Ft,ot,$t]),e.flag_col,[gt(ne,0),gt(ne,Math.PI)]),yt=vt.map(Ft=>Lt(F+st*Ft,lt+wt,Ft)),At=vt.map(Ft=>Lt(F+st*Ft,lt,Ft)),Xt=Lt(F+st,lt+wt,1),Ht=Lt(F+st,lt,1),Tt=Lt(F+.9*st,lt+wt/2,.9);for(let Ft=0;Ft<4;Ft++)X.f(At[Ft],At[Ft+1],yt[Ft+1],yt[Ft]);X.f(yt[4],Xt,Tt),X.f(At[4],Tt,Ht),X.f(yt[4],Tt,At[4])}a.add(new Rt(S.geo(),xe()),new Rt(D.geo(),xe()),new Rt(H.geo(),xe({double:!0}))),a.add(new Rt(G.geo(),Xn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new Rt(U.geo(),Xn(e.torch_col,1.5)));let E=new Rt(X.geo(),xe({double:!0,morph:!0}));E.morphTargetInfluences=[0,0],a.add(E),et.push(E)});class pt{constructor(T){Ke(this,"mode",T);Ke(this,"mb");Ke(this,"war",[]);Ke(this,"pending",[]);Ke(this,"faces",[]);this.mb=new Qt(!1,T==="clash"?2:T==="surge"?1:0)}part(T,S,D,G,H,U,X=-1,J=!1){let z=D.clone().sub(S);if(z.length()<1e-6)return;let w=z.normalize(),it=Math.abs(w.z)<.9?new R(0,0,1):new R(1,0,0),$=w.clone().cross(it).normalize(),q=w.clone().cross($),tt=[[S,G],[D,H]].map(([rt,ht])=>Array.from({length:U},(P,E)=>{let F=2*Math.PI*E/U,ot=rt.clone().addScaledVector($,Math.cos(F)*ht).addScaledVector(q,Math.sin(F)*ht),lt=new Ut(ot.x-T.x,ot.y-T.y),st=lt.length()>1e-6?.5+.5*lt.normalize().dot(new Ut(u[0],u[1])):.5;return this.add([ot.x,ot.y,ot.z],jt(e.sil,e.sil_rim,.45*st*st),X,J)}));for(let rt=0;rt<U;rt++){let ht=(rt+1)%U;this.faces.push([tt[0][rt],tt[0][ht],tt[1][ht],tt[1][rt]])}this.faces.push([...tt[0]].reverse()),this.faces.push(tt[1])}add(T,S,D,G){return this.pending.push({p:T,c:S,wi:D,arm:G}),this.pending.length-1}warrior(T,S,D,G){let H=this.war.length,U=new le().makeRotationZ(S-Math.PI/2),X=(it,$,q)=>T.clone().add(new R(it,$,q).applyMatrix4(U)),J=T.clone().add(new R(0,0,1)),z=(it,$,q,tt,rt,ht=!1)=>this.part(J,X(...it),X(...$),q,tt,rt,H,ht);for(let[it,$,q]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])z([it*.11,0,.95],q,.1,.075,4),z(q,$,.075,.06,4);z([0,0,.95],[0,.1,1.48],.2,.23,6),z([0,.16,1.58],[0,.16,1.74],.11,.11,6),z([0,.16,1.74],[0,.16,1.92],.12,.02,6),z([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),z([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),D!=="spear"&&z([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),z([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),z([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),D==="sword"?z([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):D==="axe"?(z([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),z([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(z([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),z([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let w=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(it=>{let $=X(...it);return this.add([$.x,$.y,$.z],e.sil,H,!1)});this.faces.push(w),this.war.push({team:G,f:new R(0,1,0).applyMatrix4(U),axis:new R(1,0,0).applyMatrix4(U),pivot:X(.27,.1,1.42)})}finish(){let T=this.pending.map(S=>{let D=[],G=new R(...S.p);if(this.mode==="clash")for(let H of[0,1]){if(S.wi<0){D.push([0,0,0]);continue}let U=this.war[S.wi],X=U.team===H,J=U.f.clone().multiplyScalar(X?.32:-.22),z=G.clone().add(J);S.arm&&(z=U.pivot.clone().add(J).add(G.clone().sub(U.pivot).applyAxisAngle(U.axis,pe(X?-60:25)))),D.push([z.x-G.x,z.y-G.y,z.z-G.z])}if(this.mode==="surge"){let H=this.war[S.wi];D.push([H.f.x*.5,H.f.y*.5,S.arm?.3:0])}return this.mb.v(S.p,S.c,D)});for(let S of this.faces)this.mb.f(...S.map(D=>T[D]));return this.mb.geo()}}let K=xe({morph:!0,double:!0}),at=[],I=t?5:8;for(let Y=0;Y<I;Y++){let T=2*Math.PI*(Y+o.uniform(-.3,.3))/I,S=o.uniform(17,36);m(T*180/Math.PI,S,15)&&(T+=.6);let D=S*Math.cos(T),G=S*Math.sin(T);for(let H=0;H<3;H++){let U=new pt("clash"),X=o.uniform(0,6.283),J=new R(D+o.uniform(-4.5,4.5),G+o.uniform(-4.5,4.5),0),z=new R(Math.cos(X),Math.sin(X),0),w=o.uniform(.9,1.1);for(let[$,q]of[[0,-1],[1,1]]){let tt=J.clone().addScaledVector(z,w*q);tt.z=_(tt.x,tt.y),U.warrior(tt,$===0?X:X+Math.PI,o.choice(["sword","sword","axe","spear"]),$)}let it=new Rt(U.finish(),K);it.morphTargetInfluences=[0,0],a.add(it),at.push({m:it,w:2*Math.PI/s.uniform(40,95),w2:2*Math.PI/s.uniform(110,260),w3:2*Math.PI/s.uniform(150,400),p:s.uniform(0,6.28),p2:s.uniform(0,6.28),p3:s.uniform(0,6.28),bias:s.uniform(-.35,.35)})}}{let Y=new pt(null);for(let T=0;T<16;T++){let S=o.uniform(0,6.283),D=o.uniform(13,45);if(m(S*180/Math.PI,D,14))continue;let G=new R(D*Math.cos(S),D*Math.sin(S),0);G.z=_(G.x,G.y);let H=new le().makeRotationZ(o.uniform(0,6.283)),U=(J,z,w)=>G.clone().add(new R(J,z,w).applyMatrix4(H)),X=G.clone().add(new R(0,0,.2));Y.part(X,U(0,-.4,.18),U(0,.45,.2),.2,.22,6),Y.part(X,U(0,.55,.18),U(0,.7,.2),.11,.11,6),Y.part(X,U(-.1,-.4,.12),U(-.2,-1.2,.1),.09,.07,4),Y.part(X,U(.1,-.4,.12),U(.25,-1.1,.12),.09,.07,4),Y.part(X,U(-.25,.35,.18),U(-.6,.1,.12),.06,.05,4),Y.part(X,U(.25,.35,.18),U(.55,.7,.1),.06,.05,4),Y.part(X,U(.7,.2,0),U(.9,.2,1.8),.03,.025,4),Y.part(X,U(-.9,0,.05),U(-.9,0,.12),.4,.4,8)}a.add(new Rt(Y.finish(),xe({double:!0})))}let Q=[];{let Y=[];for(let D=0;D<6;D++){let G=o.uniform(0,6.283),H=o.uniform(45,90);m(G*180/Math.PI,H,40)&&(G+=.8),Y.push(new R(H*Math.cos(G),H*Math.sin(G),0))}let T=t?70:120,S=Y.map(()=>new pt("surge"));for(let D=0;D<T;D++){let G=S[D%Y.length],H=Y[D%Y.length],U=H.clone().add(new R(o.uniform(-9,9),o.uniform(-9,9),0));U.z=_(U.x,U.y);let X=Math.atan2(H.y-U.y,H.x-U.x)+o.uniform(-.5,.5),J=G.war.length,z=new le().makeRotationZ(X-Math.PI/2),w=($,q,tt)=>U.clone().add(new R($,q,tt).applyMatrix4(z)),it=U.clone().add(new R(0,0,.9));G.part(it,w(0,0,0),w(0,0,1.45),.28,.22,4,J),G.part(it,w(0,.05,1.45),w(0,.05,1.65),.12,.12,4,J),G.part(it,w(.3,-.3,.9),w(.3,2,2.4),.03,.025,4,J,!0),G.war.push({team:0,f:new R(0,1,0).applyMatrix4(z),axis:new R(1,0,0).applyMatrix4(z),pivot:w(0,0,1.4)})}for(let D of S){let G=new Rt(D.finish(),K);G.morphTargetInfluences=[0,0],a.add(G),Q.push({m:G,w:2*Math.PI/s.uniform(90,170),p:s.uniform(0,6.28),w2:2*Math.PI/s.uniform(300,600),p2:s.uniform(0,6.28)})}}let B=new Rt(Qs({r:s,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(Y,T)=>m(Y,T,16),base:Y=>ye(e.grass_base,1-.6*Gt((Y-12)/55)),tip:Y=>ye(e.grass_tip,1-.6*Gt((Y-12)/55))}),xe({emit:.1,double:!0,morph:!0}));B.morphTargetInfluences=[0],a.add(B);let j=Ni({r:o,n:t?24:40,at:()=>{let Y=o.uniform(0,6.283),T=30*Math.sqrt(o.random());return[T*Math.cos(Y),T*Math.sin(Y),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(j.obj);let ct=Di({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(ct.group),{group:a,floor:.6,update(Y){ct.update(Y);for(let U of at){let X=Math.sin(Y*U.w+U.p+1.4*Math.sin(Y*U.w2+U.p2))+U.bias,J=.55+.45*Math.sin(Y*U.w3+U.p3),z=Gt(X)*J,w=Gt(-X)*J;U.m.morphTargetInfluences[0]=z*z*(3-2*z),U.m.morphTargetInfluences[1]=w*w*(3-2*w)}for(let U of Q)U.m.morphTargetInfluences[0]=Gt(.5+.6*Math.sin(Y*U.w+U.p)*(.6+.4*Math.sin(Y*U.w2+U.p2)));let T=Ln(Y,90);W.morphTargetInfluences[0]=T,W.morphTargetInfluences[1]=1-T;for(let U of et)U.morphTargetInfluences[0]=T,U.morphTargetInfluences[1]=1-T;B.morphTargetInfluences[0]=Ln(Y,45);let S=Y%3600,D=Math.floor(S/8),G=(S-D*8)/8,H=G*G*(3-2*G);for(let U of b){let X=U.keys[D%450],J=U.keys[(D+1)%450];U.m.scale.set(X[0]+(J[0]-X[0])*H,X[1]+(J[1]-X[1])*H,X[2]+(J[2]-X[2])*H)}j.update(Y)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...A],dispose(){ct.dispose(),Hi(a)}}}var Su={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function id(i,t){let e=i==="night"?Su.NIGHT:i==="day"?{...Fi(Su.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:Su.SUNSET,n=e.emit,r=n*.75,s=wn(11),o=wn(99),a=new Wt,c=pe(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let I=new R(.8,.6,0).normalize();return[I.x,I.y,0]})(),u=(I,Q)=>Gt((Math.hypot(I,Q)-12)/10)*.25*(Math.sin(I*.22)+Math.cos(Q*.27)+.5*Math.sin((I+Q)*.5)),d=(I,Q)=>{let B=Gt((Math.hypot(I,Q)-6)/34)**.7,j=.9+.2*(Math.sin(I*.5)*Math.cos(Q*.5)*.5+.5),ct=on(I*.09+3,Q*.09-7,3),Y=Be(I*1.7,Q*1.7),T=jt(e.g_near,e.g_far,B);return T=jt(T,e.g_alt,Gt((ct-.45)*2.2)*.6*(1-.5*B)),ye(T,j*(1+.25*(Y-.5)*(1-B)))},m=rr(e,[In(e.body_az,e.body_el)]);a.add(new Rt(js([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,d),xe({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,I])=>[I[0],I[1]]),f=I=>{let Q=_.reduce((j,[ct,Y])=>j+Math.exp(-((Math.hypot(I[0]-ct,I[1]-Y)/5.5)**2)),0),B=(.55+.45*Math.min(1,Q))*(1-.4*Gt((Math.hypot(I[0],I[1])-5)/5))*.2*.5*e.beam_gain;return ye(e.beam_col,B)};a.add(Ar({th:e,r:s,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:r,patchy:!1,bake:f}));{let I=new Qt;for(let Q=0;Q<10;Q++){let B=s.uniform(0,6.283),j=s.uniform(11.5,17),ct=s.uniform(.8,2),Y=s.choice(e.stone),T=o.uniform(0,50),S=new _n(1,1),D=S.attributes.position;for(let w=0;w<D.count;w++){let it=s.uniform(.8,1.2);D.setXYZ(w,D.getX(w)*it,D.getY(w)*it,D.getZ(w)*it)}let G=j*Math.cos(B),H=j*Math.sin(B),U=s.uniform(0,6.28),X=new le().compose(new R(G,H,u(G,H)+.3*ct),new rn().setFromAxisAngle(new R(0,0,1),U),new R(ct,ct*.9,ct*.7)),J=S.index?S.toNonIndexed():S,z=J.attributes.position;for(let w=0;w<z.count;w+=3){let it=[];for(let $=0;$<3;$++){let q=z.getX(w+$),tt=z.getY(w+$),rt=z.getZ(w+$),ht=new R(q,tt,rt).applyMatrix4(X),P=.6+.4*Gt((rt+1)/2)**.7,E=Be(q*2+T,tt*2+rt);it.push(I.v([ht.x,ht.y,ht.z],jt(ye(Y,P*(.88+.24*E)),e.moss,Gt(1-(rt+1)/2*3)*.55)))}I.f(...it)}J.dispose()}a.add(new Rt(I.geo(),xe()))}let p=[],x=(I,Q,B)=>{for(let j=0;j<300;j++){let ct=s.uniform(0,360);if(B&&ct>245&&ct<295)continue;let Y=s.uniform(I,Q),T=Y*Math.cos(pe(ct)),S=Y*Math.sin(pe(ct));if(p.every(([D,G])=>Math.hypot(T-D,S-G)>5.5))return p.push([T,S]),[T,S]}return null},M=xe({morph:!0}),b=Li({gain:2.2}),L=[],C=t?12:18,A=t?6:10;for(let I=0;I<C+A;I++){let Q=I<C,B=Q?x(15,26,!0):x(32,46,!1);if(!B)continue;let j=Q?s.uniform(46,62):s.uniform(58,76),ct=Q?s.uniform(1.2,2.1):s.uniform(2.3,3.3),Y=Q&&s.random()<.25,T=k(B[0],B[1],j,ct,Y),S=new Rt(T.bark.geo(),M);S.morphTargetInfluences=[0,0],a.add(S);let D=null;Y&&(D=new Rt(T.eyes.geo(),b),D.morphTargetInfluences=[0,0],a.add(D));let G=[];if(Y){let H=Array.from({length:Math.floor(174)},(U,X)=>60+X*20);for(let U=0;U<5;U++)G.push(H.splice(s.int(0,H.length-1),1)[0]);G.sort((U,X)=>U-X)}L.push({mesh:S,eyes:D,P:s.choice([100,120,150,180,200]),flip:s.int(0,1),blinks:G})}function k(I,Q,B,j,ct){let Y=new Qt(!1,2),T=new Qt(!1,2),S=new R(-I,-Q,0).normalize(),D=s.uniform(1.2,2.4),G=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.03,.1)),H=s.uniform(0,6.28),U=s.uniform(.4,1),X=s.choice([3,4,5]),J=s.uniform(0,6.28),z=F=>new R(I+G.x*F+U*Math.sin(.28*F+H),Q+G.y*F+U*Math.cos(.23*F+H),F),w=(F,ot)=>{let lt=Math.max(F,0),st=j*(1-.62*Gt(lt/B))*(1+1.1*Math.exp(-lt/1.6)),wt=ot+.06*lt;return st*(1+.28*Math.cos(X*wt+J)*Math.exp(-lt/3.5)+.07*Math.cos(2*wt+H))},it=F=>{let ot=D*Gt(Math.max(F,0)/B)**2;return[h[0]*ot,h[1]*ot,0]},$=(F,ot,lt)=>{let st=new R(F.x,F.y,0);st.lengthSq()>1e-12&&st.normalize();let wt=Math.max(0,st.x*S.x+st.y*S.y),vt=.6+.4*Math.sin(lt),gt=jt(e.bark_dark,e.bark_lit,Gt(.85*wt*vt*(1-.3*Gt(ot/B)))),Lt=Math.max(0,st.x*l[0]+st.y*l[1]);gt=jt(gt,e.bark_sun,Gt(e.bark_sun_k*Lt*(.5+.5*vt)*(1-.5*Gt(ot/B)))),gt=ye(gt,.72+.28*Gt(ot/1.6));let yt=Gt(1-ot/2.2)*.55*Be(F.x*3+I,F.y*3+ot*.8);return jt(gt,e.moss,yt)},q=(F,ot)=>Y.v([F.x,F.y,F.z],ot,[it(F.z),[0,0,0]]),tt=t?10:14,rt=t?8:12,ht=[];for(let F=0;F<tt;F++){let ot=-.5+(B+.5)*(F/(tt-1))**1.15,lt=z(ot),st=[];for(let wt=0;wt<rt;wt++){let vt=2*Math.PI*wt/rt,gt=new R(Math.cos(vt),Math.sin(vt),0);st.push(q(lt.clone().addScaledVector(gt,w(ot,vt)),$(gt,ot,vt*7+ot*.4)))}ht.push(st)}for(let F=0;F<tt-1;F++)for(let ot=0;ot<rt;ot++){let lt=(ot+1)%rt;Y.f(ht[F][ot],ht[F][lt],ht[F+1][lt],ht[F+1][ot])}let P=q(z(B).add(new R(0,0,.3)),e.bark_dark);for(let F=0;F<rt;F++)Y.f(P,ht[tt-1][F],ht[tt-1][(F+1)%rt]);let E=s.int(2,4);for(let F=0;F<E;F++){let ot=B*s.uniform(.35,.85),lt=s.uniform(0,6.28),st=new R(Math.cos(lt),Math.sin(lt),0),wt=z(ot).addScaledVector(st,w(ot,lt)*.7),vt=st.clone().add(new R(0,0,s.uniform(.4,1))).normalize(),gt=s.uniform(3.5,7.5),Lt=new R(-st.y,st.x,0),yt=[0,1,2,3,4].map(Ht=>wt.clone().addScaledVector(vt,gt*(Ht/4)).add(new R(0,0,.35*gt*(Ht/4)**2)).addScaledVector(Lt,Math.sin(Ht/4*3+F)*.5)),At=w(ot,lt)*.32,Xt=yt.map((Ht,Tt)=>{let Ft=yt[Math.min(Tt+1,4)].clone().sub(yt[Math.max(Tt-1,0)]).normalize(),$t=Ft.clone().cross(new R(0,0,1));$t.length()<.001&&($t=new R(1,0,0)),$t.normalize();let ne=Ft.clone().cross($t);return Array.from({length:6},(nt,zt)=>{let bt=2*Math.PI*zt/6,Ct=$t.clone().multiplyScalar(Math.cos(bt)).addScaledVector(ne,Math.sin(bt));return q(Ht.clone().addScaledVector(Ct,At*(1-.85*Tt/4)),$(Ct,Ht.z,bt*5+Tt))})});for(let Ht=0;Ht<4;Ht++)for(let Tt=0;Tt<6;Tt++){let Ft=(Tt+1)%6;Y.f(Xt[Ht][Tt],Xt[Ht][Ft],Xt[Ht+1][Ft],Xt[Ht+1][Tt])}}if(ct){let F=s.uniform(2.2,9),ot=Math.atan2(S.y,S.x)+s.uniform(-.6,.6),lt=new R(Math.cos(ot),Math.sin(ot),0),st=new R(-lt.y,lt.x,0),wt=z(F).addScaledVector(lt,w(F,ot)),vt=s.uniform(.18,.32),gt=vt*1.25,Lt=(Xt,Ht,Tt)=>wt.clone().addScaledVector(lt,Tt).addScaledVector(st,Xt).add(new R(0,0,Ht)),yt=Array.from({length:10},(Xt,Ht)=>q(Lt(Math.cos(2*Math.PI*Ht/10)*(gt+vt*1.7),Math.sin(2*Math.PI*Ht/10)*vt*1.7,.07),[.004,.003,.02]));Y.f(...yt);let At=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Xt of[1,-1]){let Ht=At.map(([Ft,$t])=>[Xt*(gt+Ft*vt),$t*vt]);Xt===-1&&(Ht=Ht.reverse());let Tt=Ht.map(([Ft,$t])=>{let ne=Lt(Ft,$t,.11);return T.v([ne.x,ne.y,ne.z],[1,.04,.04],[it(ne.z),[0,0,F-ne.z]])});T.f(...Tt)}}return{bark:Y,eyes:T}}let O=e.grass_tip,y=xe({emit:e.grass_emit,double:!0,morph:!0}),v=t?260:500,V=[0,1].map(()=>{let I=new Map,Q=Qs({r:s,tufts:v,rmin:10.6,rspan:34,gh:u,base:j=>ye(e.grass_base,1-.6*Gt((j-11)/34)),tip:(j,ct)=>{let Y=Math.round(j*1e3),T=I.get(Y);T||(T=jt(O[0],O[1],s.random()),I.set(Y,T));let S=.3*Math.abs(Math.cos(ct-c))*(i==="night"?.5:1);return ye(jt(T,e.grass_rim,S),1-.6*Gt((j-11)/34))}}),B=new Rt(Q,y);return B.morphTargetInfluences=[0],a.add(B),B});{let I=new Qt;for(let Q=0;Q<(t?40:70);Q++){let B=14+22*o.random(),j=o.uniform(0,2*Math.PI),ct=B*Math.cos(j),Y=B*Math.sin(j),T=u(ct,Y),S=[ct+o.uniform(-.06,.06),Y+o.uniform(-.06,.06),T+o.uniform(.35,.7)];I.f(I.v([ct-.012,Y,T],[.02,.07,.05]),I.v([ct+.012,Y,T],[.02,.07,.05]),I.v([S[0]+.012,S[1],S[2]],[.08,.25,.12]),I.v([S[0]-.012,S[1],S[2]],[.08,.25,.12]));let D=o.choice(e.flower),G=I.v([S[0],S[1],S[2]+.02],[1,.9,.5]),H=Array.from({length:6},(U,X)=>{let J=2*Math.PI*X/6;return I.v([S[0]+.05*Math.cos(J),S[1]+.05*Math.sin(J),S[2]+.025],D)});for(let U=0;U<6;U++)I.f(G,H[U],H[(U+1)%6])}a.add(new Rt(I.geo(),xe({emit:e.flower_emit,double:!0})))}{let I=new Qt;for(let Q=0;Q<14;Q++){let B=pe(s.choice([s.uniform(195,245),s.uniform(295,345),s.uniform(0,360)])),j=s.uniform(16,34),ct=s.uniform(1,1.8),Y=j*Math.cos(B),T=j*Math.sin(B),S=u(Y,T);for(let D=0;D<4;D++){let G=[s.uniform(-1.4,1.4),s.uniform(-1,1),s.uniform(.2,1)],H=s.uniform(.9,1.6),U=new _n(H,1),X=U.attributes.position;for(let J=0;J<X.count;J+=3){let z=[];for(let w=0;w<3;w++){let it=X.getZ(J+w)+G[2];z.push(I.v([Y+(X.getX(J+w)+G[0])*ct,T+(X.getY(J+w)+G[1])*ct,S+it*ct*.75],jt(e.bush_lo,e.bush_hi,Gt((it+.3)/2.6)*.8)))}I.f(...z)}U.dispose()}}a.add(new Rt(I.geo(),xe()))}{let I=new Qt;[[52,70,110,150],[59,80,120,160],[66,90,130,170]].forEach(([B,j,ct,Y],T)=>ed(I,{r:s,idx:T,radius:B,count:t?Math.round(j*.6):j,hmin:ct,hmax:Y,th:e,sky:m,sunAz:c}));let Q=Li({fog:!1,gain:i==="night"?.45:.6});Q.toneMapped=!1,a.add(new Rt(I.geo(),Q))}let W=new Qt(!0);g.forEach(([I,Q])=>{for(let[B,j]of[[1,.45],[.7,.6],[.4,.8]])Qf(W,I,Q,B,j,e.beam_col,.35*e.beam_gain,2.6)});let et=new Qt(!0);to(et,9.4,.7,(I,Q)=>{let B=_.reduce((j,[ct,Y])=>j+Math.exp(-((Math.hypot(I-ct,Q-Y)/5.5)**2)),0);return(.55+.45*Math.min(1,B))*Ae(0,3,9.4-Math.hypot(I,Q))},e.beam_col,.3*.5*e.beam_gain);let pt=new Rt(W.geo(),ns());a.add(pt,new Rt(et.geo(),ns()));let K=Ni({r:s,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let I=s.uniform(0,6.283),Q=s.uniform(0,22);return[Q*Math.cos(I),Q*Math.sin(I),s.uniform(.8,7)]},move:()=>{let I=s.uniform(-1.5,1.5);return[I,I*.5,s.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(K.obj);let at=Di({th:e,W:t?512:1024,bodies:[In(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(at.group),{group:a,floor:.62,update(I){at.update(I);for(let B of L){let j=Ln(I,B.P/2,.15,1,B.flip),ct=0;for(let Y of B.blinks)Math.abs(I%3600-Y)<3&&(ct=1-Math.abs(I%3600-Y)/3);B.mesh.morphTargetInfluences[0]=j,B.mesh.morphTargetInfluences[1]=ct,B.eyes&&(B.eyes.morphTargetInfluences[0]=j,B.eyes.morphTargetInfluences[1]=ct)}V.forEach((B,j)=>{B.morphTargetInfluences[0]=Ln(I,45,0,1,j)});let Q=Ln(I,450);pt.rotation.set(.03*Q*.1,.02*Q*.1,0),K.update(I)},key:{dir:In(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){at.dispose(),Hi(a)}}}var Tu={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},is=2.3;function rd(i,t){let e=i==="night"?Tu.NIGHT:i==="day"?{...Fi(Tu.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:Tu.SUNSET,n=e.emit,r=wn(7),s=new Wt,o=[In(e.body_az,e.body_el),In(e.body_az+180,e.body_el)],a=rr(e,o),c=(I,Q)=>Gt((Math.hypot(I,Q)-13)/10)*.25*(Math.sin(I*.22)+Math.cos(Q*.27)+.5*Math.sin((I+Q)*.5)),l=(I,Q)=>{let B=Gt((Math.hypot(I,Q)-10)/50),j=.9+.2*(Math.sin(I*.5)*Math.cos(Q*.5)*.5+.5),ct=jt(e.g_near,e.g_far,B);return ct=jt(ct,e.g_alt,Gt((on(I*.09+3,Q*.09-7,3)-.45)*2.2)*.6),ye(ct,j*(.9+.25*Be(I*1.7,Q*1.7)))},h=(I,Q,B)=>jt(ye(I,(.6+.4*Gt(Q)**.7)*(.88+.24*B)),e.moss,Gt(1-Q*3)*.55);s.add(new Rt(js([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),xe({flat:!1})));{let I=t?96:144,Q=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],B=Q.map(S=>Array.from({length:I},(D,G)=>{let H=2*Math.PI*G/I,U=S*Math.cos(H),X=S*Math.sin(H),J=1;for(let it of[pe(e.body_az),pe(e.body_az+180)]){let $=Math.abs(((H-it+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);J*=1-.8*Math.exp(-(($/pe(17))**2))}let w=(4+42*Ae(50,102,S))*(1-.65*Ae(112,134,S))*(.12+1.15*Jf(U*.032,X*.032,5))*(.55+.9*on(U*.01+5,X*.01-3,3))*J+1.2*on(U*.09,X*.09,3)*Ae(46,60,S);return w*=Ae(45.5,52,S),[U,X,c(U,X)+.03+w]})),j=new Qt,ct=[],Y=o;Q.forEach((S,D)=>{ct.push([]);for(let G=0;G<I;G++){let H=B[D][G],U=2*Math.PI*G/I,X=B[D][(G+1)%I],J=B[D][(G-1+I)%I],z=B[Math.min(D+1,Q.length-1)][G],w=B[Math.max(D-1,0)][G],it=new R(z[0]-w[0],z[1]-w[1],z[2]-w[2]).cross(new R(X[0]-J[0],X[1]-J[1],X[2]-J[2])).normalize();it.z<0&&it.multiplyScalar(-1);let $=H[2]/45,q=1-it.z,tt=on(H[0]*.12,H[1]*.12,3),rt=ye(jt(e.rock_lo,e.rock_hi,Gt(Gt($)**.7+.25*(tt-.5))),.8+.4*tt);rt=jt(rt,e.veg,Gt((9-H[2])/9)*Gt(1-q*2.4)*.85),rt=jt(rt,e.snow,Ae(.55,.78,$+.22*(on(H[0]*.07,H[1]*.07,3)-.5))*Gt(1-q*1.7));let ht=0;for(let F of Y)ht=Math.max(ht,Gt(it.x*F[0]+it.y*F[1]+it.z*F[2]));ht=ht**1.2,rt=[rt[0]*(e.amb[0]+e.light_col[0]*ht*1.6),rt[1]*(e.amb[1]+e.light_col[1]*ht*1.6),rt[2]*(e.amb[2]+e.light_col[2]*ht*1.6)];let P=a(Math.cos(U)*Math.cos(.02),Math.sin(U)*Math.cos(.02),Math.sin(.02)).map(F=>Rr(F,e.exposure)*e.haze_gain),E=Math.min(.97,Math.max(0,1-Math.exp(-(S-40)/e.haze_dist)+.5*Math.exp(-Math.max(H[2],0)/9)*Ae(55,100,S)));rt=jt(rt,P,E),rt=jt(l(H[0],H[1]),rt,Ae(46,58,S)).map(Gt),ct[D].push(j.v(H,rt))}});for(let S=0;S<Q.length-1;S++)for(let D=0;D<I;D++){let G=(D+1)%I;j.f(ct[S][D],ct[S][G],ct[S+1][G],ct[S+1][D])}let T=Li({fog:!1,gain:.95});s.add(new Rt(j.geo(),T))}let u=new Qt,d=new Qt,m=new Qt,g=new Qt,_=new Qt,f=new Qt,p=(I,Q,B,j,ct,Y=!0)=>{let T=Q.map(([S,D])=>Array.from({length:B},(G,H)=>{let U=[j[0]+D*Math.cos(2*Math.PI*H/B),j[1]+D*Math.sin(2*Math.PI*H/B),j[2]+S];return I.v(U,ct(U))}));for(let S=0;S<T.length-1;S++)for(let D=0;D<B;D++){let G=(D+1)%B;I.f(T[S][D],T[S][G],T[S+1][G],T[S+1][D])}if(Y){let S=T[T.length-1].map(D=>I.v(I.pos.slice(D*3,D*3+3),I.col.slice(D*3,D*3+3)));I.f(...S)}},x=(I,Q,B,j,ct,Y,T=1,S=[1,1,1])=>{let D=Array.from({length:j},(G,H)=>{let U=2*Math.PI*H/j;return Array.from({length:ct},(X,J)=>{let z=2*Math.PI*J/ct,w=Q+B*Math.cos(z);return I.v([w*Math.cos(U),w*Math.sin(U),Y+B*T*Math.sin(z)],S)})});for(let G=0;G<j;G++)for(let H=0;H<ct;H++){let U=(G+1)%j,X=(H+1)%ct;I.f(D[G][H],D[U][H],D[U][X],D[G][X])}},M=(I,Q,B,j,ct,Y=0)=>{let T=Math.cos(j),S=Math.sin(j),D=new Map,G=(U,X,J)=>{let z=`${U},${X},${J}`,w=D.get(z);w||(w=Y?[r.uniform(-.03,.03),r.uniform(-.03,.03),r.uniform(-.02,.02)]:[0,0,0],D.set(z,w));let it=U*B[0]+w[0],$=X*B[1]+w[1],q=J*B[2]+w[2];return I.v([Q[0]+it*T-$*S,Q[1]+it*S+$*T,Q[2]+q],ct([it,$,q],J+.5))},H=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let U of H)I.f(...U.map(([X,J,z])=>G(X,J,z)))},b=(I,Q,B,j)=>{let ct=r.uniform(0,50);M(u,I,Q,B,(Y,T)=>h(j,T,Be(Y[0]*2.5+ct,Y[1]*2.5+Y[2]*1.7)),1)},L=(I,Q,B,j)=>{let ct=r.uniform(0,50);p(u,[[0,I],[B,I]],48,[0,0,Q],Y=>h(j,(Y[2]-Q)/B,Be(Y[0]*1.2+ct,Y[1]*1.2)))};L(8.2,0,1.4,e.stone[0]),L(7.2,1.4,.5,e.stone[3]),L(6.6,1.9,is-1.9,e.stone[0]),x(d,6.6,.18,48,6,is,1,e.stone[3]);let C=28;for(let I=0;I<C;I++){let Q=2*Math.PI*I/C,B=1.4+r.uniform(-.08,.08);b([8.45*Math.cos(Q),8.45*Math.sin(Q),B/2],[1,1.95,B],Q,r.choice(e.stone))}for(let[I,Q]of[[9.8,.9],[11,.55],[12.2,.3]])for(let B=0;B<14;B++){if(r.random()<.2)continue;let j=2*Math.PI*B/14+r.uniform(-.08,.08);b([I*Math.cos(j),I*Math.sin(j),Q/2],[1.3,2.6,Q],j+r.uniform(-.1,.1),r.choice(e.stone))}for(let I of[5.8,4.2,2.6,1.2])x(g,I,.08,48,6,is+.02,.6);for(let I=0;I<16;I++){let Q=2*Math.PI*I/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(Q),5*Math.sin(Q),is],()=>[1,1,1])}let A=[],k=Dc(),O=Li({gain:1.05}),y=[];for(let I of[3,10,17,24]){let Q=2*Math.PI*I/C,B=8.45*Math.cos(Q),j=8.45*Math.sin(Q),ct=1.4;p(d,[[0,.28],[.9,.28]],12,[B,j,ct],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[B,j,ct+.9],()=>e.stone[0]);let Y=new Rt(k,O);Y.position.set(B,j,ct+1.25),s.add(Y),A.push({m:Y,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),y.push({pos:[B,j,ct+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let v=(I,Q,B,j=1.8,ct=1.2)=>{let Y=pe(I),T=Q*Math.cos(Y),S=Q*Math.sin(Y),D=c(T,S)-.4,G=Y-Math.PI/2,H=r.choice(e.stone),U=r.uniform(0,50),X=new Map,J=Math.cos(G),z=Math.sin(G),w=(tt,rt,ht)=>{let P=`${tt},${rt},${ht}`,E=X.get(P);E||(E=[r.uniform(-.07,.07),r.uniform(-.07,.07),r.uniform(-.05,.05)],X.set(P,E));let F=tt*j,ot=rt*ct,lt=(ht+.5)*B;if(lt>B*.5){let vt=1-.18*((lt-B*.5)/(B*.5));F*=vt,ot*=vt}F+=E[0],ot+=E[1];let st=lt+E[2],wt=.5*Be(F*2.2+U,st*.7)+.5*Be(F*6+U,st*.25);return u.v([T+F*J-ot*z,S+F*z+ot*J,D+st],h(H,st/B,wt))},it=4,$=tt=>-.5+tt/it,q=tt=>{for(let rt=0;rt<it;rt++)for(let ht=0;ht<it;ht++)u.f(w(...tt(rt,ht)),w(...tt(rt+1,ht)),w(...tt(rt+1,ht+1)),w(...tt(rt,ht+1)))};q((tt,rt)=>[$(tt),-.5,$(rt)]),q((tt,rt)=>[$(rt),.5,$(tt)]),q((tt,rt)=>[-.5,$(rt),$(tt)]),q((tt,rt)=>[.5,$(tt),$(rt)]),q((tt,rt)=>[$(rt),$(tt),.5]),q((tt,rt)=>[$(tt),$(rt),-.5]);for(let[tt,rt,ht]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let E=-ct/2-.02,F=B*tt;M(f,[T+0*J-E*z,S+0*z+E*J,D+F],[rt,.1,ht],G,()=>[1,1,1])}};for(let[I,Q,B]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])v(I,Q,B),v(I+180,Q,B);for(let I=0;I<12;I++){let Q=pe(r.choice([r.uniform(195,245),r.uniform(295,345)])),B=r.uniform(13,18),j=r.uniform(1,2.2),ct=r.choice(e.stone),Y=r.uniform(0,50),T=B*Math.cos(Q),S=B*Math.sin(Q),D=r.uniform(0,6.28),G=new _n(1,1),H=G.attributes.position,U=new le().compose(new R(T,S,c(T,S)+.3*j),new rn().setFromAxisAngle(new R(0,0,1),D),new R(j,j*.9,j*.7)),X=new Map;for(let J=0;J<H.count;J+=3)u.f(...[0,1,2].map(z=>{let w=H.getX(J+z),it=H.getY(J+z),$=H.getZ(J+z),q=`${w.toFixed(3)},${it.toFixed(3)},${$.toFixed(3)}`,tt=X.get(q);tt===void 0&&(tt=r.uniform(.8,1.2),X.set(q,tt));let rt=new R(w*tt,it*tt,$*tt).applyMatrix4(U);return u.v([rt.x,rt.y,rt.z],h(ct,($+1)/2,Be(w*2+Y,it*2+$)))}));G.dispose()}s.add(new Rt(u.geo(),xe())),s.add(new Rt(d.geo(),xe({flat:!1})),new Rt(m.geo(),xe()));let V=new Rt(g.geo(),Xn([1,.92,.75],.75*Math.min(1.6,n)));V.name="centre-pattern",s.add(V,new Rt(_.geo(),Xn([1,.92,.75],.75*Math.min(1.6,n)))),s.add(new Rt(f.geo(),Xn([1,.3,.1],1.1*Math.min(1.4,n))));let W=pe(e.body_az),et=xe({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),pt=[0,1].map(()=>{let I=e.grass_tip[0],Q=-1,B=Qs({r,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:ct=>{let Y=1-.55*Gt((ct-13)/34);return[.03*Y,.1*Y,.1*Y]},tip:(ct,Y)=>(ct!==Q&&(Q=ct,I=jt(e.grass_tip[0],e.grass_tip[1],r.random())),ye(jt(I,e.grass_rim,.3*Math.abs(Math.cos(Y-W))*(i==="night"?.5:1)),1-.55*Gt((ct-13)/34)))}),j=new Rt(B,et);return j.morphTargetInfluences=[0],s.add(j),j});{let I=new Qt;for(let Q=0;Q<(t?40:70);Q++){let B=14+22*r.random(),j=r.uniform(0,2*Math.PI),ct=B*Math.cos(j),Y=B*Math.sin(j),T=c(ct,Y),S=r.uniform(.35,.7),D=[ct+r.uniform(-.06,.06),Y+r.uniform(-.06,.06),T+S];I.f(I.v([ct-.012,Y,T],[.02,.07,.05]),I.v([ct+.012,Y,T],[.02,.07,.05]),I.v([D[0]+.012,D[1],D[2]],[.08,.25,.12]),I.v([D[0]-.012,D[1],D[2]],[.08,.25,.12]));let G=r.choice(e.flower),H=I.v([D[0],D[1],D[2]+.02],[1,.9,.5]),U=Array.from({length:6},(X,J)=>{let z=2*Math.PI*J/6;return I.v([D[0]+.05*Math.cos(z),D[1]+.05*Math.sin(z),D[2]+.025],G)});for(let X=0;X<6;X++)I.f(H,U[X],U[(X+1)%6])}s.add(new Rt(I.geo(),xe({emit:e.flower_emit,double:!0})))}let K=Ni({r,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let I=r.uniform(0,6.283),Q=r.uniform(4,26);return[Q*Math.cos(I),Q*Math.sin(I),r.uniform(1.5,10)]},move:()=>[r.uniform(-1,1),0,r.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&s.add(K.obj);let at=Di({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return s.add(at.group),{group:s,floor:is,update(I){at.update(I),pt.forEach((Y,T)=>{Y.morphTargetInfluences[0]=Ln(I,45,0,1,T)});let Q=I%3600,B=Math.floor(Q/8),j=(Q-B*8)/8,ct=j*j*(3-2*j);for(let Y of A){let T=Y.keys[B%450],S=Y.keys[(B+1)%450];Y.m.scale.set(T[0]+(S[0]-T[0])*ct,T[1]+(S[1]-T[1])*ct,T[2]+(S[2]-T[2])*ct)}K.update(I)},key:{dir:In(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,is+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,is+.5],color:[1,.5,.2],intensity:.35,dist:8},...y],dispose(){at.dispose(),Hi(s)}}}var Ru={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function sd(i,t){let e=i==="night"?Ru.NIGHT:i==="day"?{...Fi(Ru.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:Ru.SUNSET,n=e.emit,r=n*.75,s=wn(21),o=wn(77),a=new Wt,c=[In(e.body_az,e.body_el)],l=rr(e,c),h=pe(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(H=>Rr(H,e.exposure)),d=e.stone,m=Di({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(H,U)=>{let X=Math.hypot(H,U),J=jt(e.water_lo,e.water_hi,Gt(on(H*.05+2,U*.05,3)*1.2-.15)),z=Math.exp(-(((X-9.9)/3)**2))*.12*.75;return J=[J[0]+e.glow_col[0]*z,J[1]+e.glow_col[1]*z,J[2]+e.glow_col[2]*z],jt(J,ye(u,.5),Ae(32,150,X)**1.2)},_;{let H=new Qt(!1,2),U=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],X=t?48:72,J=U.map(w=>Array.from({length:X},(it,$)=>{let q=w*Math.cos(2*Math.PI*$/X),tt=w*Math.sin(2*Math.PI*$/X),rt=Ae(9,13,w)*Math.exp(-w/90);return H.v([q,tt,0],g(q,tt),[[0,0,.06*Math.sin(.45*q+.33*tt)*rt],[0,0,.06*Math.sin(.38*q-.41*tt+2)*rt]])}));for(let w=0;w<U.length-1;w++)for(let it=0;it<X;it++){let $=(it+1)%X;H.f(J[w][it],J[w+1][it],J[w+1][$],J[w][$])}let z=new Gs({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:Kh});_=new Rt(H.geo(),z),_.morphTargetInfluences=[0,0],a.add(_)}let f=[];[.35,.9,1.7].slice(0,t?2:3).forEach((H,U)=>{let X=new Qt(!0),J=[10.5,12,15,19,24,30,38,48,60],z=48,w=J.map(q=>Array.from({length:z},(tt,rt)=>{let ht=2*Math.PI*rt/z,P=q*Math.cos(ht),E=q*Math.sin(ht),F=e.mist_a*Gt((on(P*.07+U*9,E*.07,3)-.38)*2.6)*Ae(0,3,q-10.5)*Ae(0,15,60-q);return X.v([P,E,H+.12*Math.sin(.3*P+U)],[...e.mist_col,F])}));for(let q=0;q<J.length-1;q++)for(let tt=0;tt<z;tt++){let rt=(tt+1)%z;X.f(w[q][tt],w[q+1][tt],w[q+1][rt],w[q][rt])}let it=new sn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie,toneMapped:!1});it.color.setScalar(1+.7);let $=new Rt(X.geo(),it);$.renderOrder=3,a.add($),f.push({m:$,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Ar({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let p=new Qt,x=new Qt,M=[];for(let H of[45,135,225,315]){let U=pe(H),X=o.uniform(1.6,2.6),J=o.choice(d),z=o.uniform(0,50),w=9.35*Math.cos(U),it=9.35*Math.sin(U),$=10,q=.3,tt=[],rt=[],ht=Array.from({length:$},()=>q+X-o.uniform(0,.45));for(let gt=0;gt<$;gt++){let Lt=2*Math.PI*gt/$,yt=o.uniform(-.05,.05),At=o.uniform(-.05,.05),Xt=o.uniform(-.05,.05),Ht=o.uniform(-.05,.05),Tt=[w+.62*Math.cos(Lt)+yt,it+.62*Math.sin(Lt)+At,q],Ft=[w+.5*Math.cos(Lt)+Xt,it+.5*Math.sin(Lt)+Ht,ht[gt]];tt.push(p.v(Tt,Ui(J,0,Tt[0]-w,Tt[1]-it,z,e.moss))),rt.push(p.v(Ft,Ui(J,(Ft[2]-q)/X,Ft[0]-w,Ft[1]-it,z,e.moss)))}for(let gt=0;gt<$;gt++){let Lt=(gt+1)%$;p.f(tt[gt],tt[Lt],rt[Lt],rt[gt])}p.f(...rt);let P=w-.55*Math.cos(U),E=it-.55*Math.sin(U),F=U-Math.PI/2,ot=Math.cos(F),lt=Math.sin(F),st=.06,wt=X*.45/2,vt=.3+X*.5;x.f(...[[-st,-.03,-wt],[st,-.03,-wt],[st,-.03,wt],[-st,-.03,wt]].map(([gt,Lt,yt])=>x.v([P+gt*ot-Lt*lt,E+gt*lt+Lt*ot,vt+yt],[1,1,1]))),M.push([w,it,.3+X])}let b=(H,U,X,J,z,w,it,$)=>{let q=o.uniform(0,50),tt=Math.cos(it),rt=Math.sin(it),ht=new Map,P=(E,F,ot)=>{let lt=E*J+o.uniform(-.03,.03),st=F*z+o.uniform(-.03,.03),wt=ot*w;return p.v([H+lt*tt-st*rt,U+lt*rt+st*tt,X+wt],Ui($,ot+.5,lt,st,q,e.moss))};for(let E of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...E.map(([F,ot,lt])=>P(F,ot,lt)))};for(let H of[270,90])for(let U=0;U<5;U++){let X=11+U*1.7+o.uniform(-.2,.2),J=pe(H+o.uniform(-5,5)),z=o.uniform(1.2,1.7);b(X*Math.cos(J),X*Math.sin(J),-.13,z,z*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(d))}for(let H=0;H<12;H++){let U=o.uniform(0,2*Math.PI);Math.min(Math.abs($o(U,Math.PI/2)),Math.abs($o(U,3*Math.PI/2)))<.18&&(U+=.5);let X=o.uniform(10.5,15),J=o.uniform(.7,1.8),z=o.choice(d),w=o.uniform(0,50),it=o.uniform(0,6.28),$=new _n(1,1),q=$.attributes.position,tt=new le().compose(new R(X*Math.cos(U),X*Math.sin(U),.05),new rn().setFromAxisAngle(new R(0,0,1),it),new R(J,J*.9,J*.7));for(let rt=0;rt<q.count;rt+=3)p.f(...[0,1,2].map(ht=>{let P=new R(q.getX(rt+ht),q.getY(rt+ht),q.getZ(rt+ht)),E=P.z;return P.applyMatrix4(tt),p.v([P.x,P.y,P.z],Ui(z,(E+1)/2,q.getX(rt+ht),q.getY(rt+ht),w,e.moss))}));$.dispose()}a.add(new Rt(p.geo(),xe()),new Rt(x.geo(),Xn(e.rune_col,1.4*r)));let L=(()=>{let H=new R(.8,.6,0).normalize();return[H.x,H.y,0]})(),C=pe(e.body_az),A=[Math.cos(C),Math.sin(C)],k=[],O=(H,U,X)=>{for(let J=0;J<300;J++){let z=s.uniform(0,360);if(X&&z>245&&z<295)continue;let w=s.uniform(H,U),it=w*Math.cos(pe(z)),$=w*Math.sin(pe(z));if(k.every(([q,tt])=>Math.hypot(it-q,$-tt)>6))return k.push([it,$]),[it,$]}return null},y=xe({morph:!0}),v=[],V=[],W=[],et=t?6:9,pt=t?4:7;for(let H=0;H<et+pt;H++){let U=H<et,X=U?O(16,32,!0):O(38,62,!1);if(!X)continue;let J=U?s.uniform(9,15):s.uniform(16,24),z=U?s.uniform(.28,.42):s.uniform(.5,.8),w=new Rt(K(X[0],X[1],J,z),y);w.morphTargetInfluences=[0],a.add(w),v.push({m:w,P:s.choice([100,120,150,180,200]),flip:s.int(0,1)}),V.push(X),W.push([X[0],X[1],2.2*z+.7])}function K(H,U,X,J){let z=new Qt(!1,1),w=new R(-H,-U,0).normalize(),it=s.uniform(.6,1.4),$=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.02,.07)),q=s.uniform(0,6.28),tt=gt=>new R(H+$.x*gt+.25*Math.sin(.5*gt+q),U+$.y*gt+.25*Math.cos(.4*gt+q),gt),rt=gt=>{let Lt=Math.max(gt,0);return J*(1-.55*Gt(Lt/X))*(1+.7*Math.exp(-Lt/.8))},ht=(gt,Lt,yt=0)=>{let At=it*Gt(Math.max(gt.z,0)/X)**2+yt;return z.v([gt.x,gt.y,gt.z],Lt,[[L[0]*At,L[1]*At,0]])},P=(gt,Lt)=>{let yt=new R(gt.x,gt.y,0);yt.lengthSq()>1e-12&&yt.normalize();let At=jt(e.bark_dark,e.bark_lit,.6*Math.max(0,yt.x*w.x+yt.y*w.y));return At=jt(At,e.bark_rim,Gt(e.bark_rim_k*Math.max(0,yt.x*A[0]+yt.y*A[1])*(1-.4*Gt(Lt/X)))),jt(At,e.moss,Gt(1-Lt/1.8)*.6*Be(gt.x*3+H,Lt*.8+U))},E=(gt,Lt,yt,At,Xt)=>{let Ht=gt.length,Tt=gt.map((ne,nt)=>gt[Math.min(nt+1,Ht-1)].clone().sub(gt[Math.max(nt-1,0)]).normalize()),Ft=Tt[0].clone().cross(Math.abs(Tt[0].z)>.9?new R(1,0,0):new R(0,0,1)).normalize(),$t=gt.map((ne,nt)=>{let zt=Tt[nt];Ft=Ft.clone().addScaledVector(zt,-Ft.dot(zt)).normalize();let bt=zt.clone().cross(Ft);return Array.from({length:yt},(Ct,Ot)=>{let qt=2*Math.PI*Ot/yt,me=Ft.clone().multiplyScalar(Math.cos(qt)).addScaledVector(bt,Math.sin(qt));return ht(ne.clone().addScaledVector(me,Lt[nt]),At(nt,me),Xt?Xt(nt):0)})});for(let ne=0;ne<Ht-1;ne++)for(let nt=0;nt<yt;nt++){let zt=(nt+1)%yt;z.f($t[ne][nt],$t[ne][zt],$t[ne+1][zt],$t[ne+1][nt])}},F=11,ot=8,lt=Array.from({length:F},(gt,Lt)=>{let yt=-.4+(X+.4)*Lt/(F-1),At=tt(yt);return Array.from({length:ot},(Xt,Ht)=>{let Tt=2*Math.PI*Ht/ot,Ft=new R(Math.cos(Tt),Math.sin(Tt),0);return ht(At.clone().addScaledVector(Ft,rt(yt)*(1+.06*Math.sin(3*Tt+yt))),P(Ft,yt))})});for(let gt=0;gt<F-1;gt++)for(let Lt=0;Lt<ot;Lt++){let yt=(Lt+1)%ot;z.f(lt[gt][Lt],lt[gt][yt],lt[gt+1][yt],lt[gt+1][Lt])}z.f(...lt[F-1]);let st=[],wt=s.int(3,5);for(let gt=0;gt<wt;gt++){let Lt=X*s.uniform(.42,.9),yt=s.uniform(0,6.28),At=new R(Math.cos(yt),Math.sin(yt),0),Xt=tt(Lt).addScaledVector(At,rt(Lt)*.6),Ht=At.clone().add(new R(0,0,s.uniform(.5,1.1))).normalize(),Tt=s.uniform(2,5)*(X/12)*(1.1-.5*Lt/X),Ft=Array.from({length:6},(ne,nt)=>Xt.clone().addScaledVector(Ht,Tt*(nt/5)).add(new R(0,0,-.12*Tt*(nt/5)**2))),$t=rt(Lt)*.4;E(Ft,Ft.map((ne,nt)=>$t*(1-.88*nt/5)+.01),5,(ne,nt)=>P(nt,Ft[ne].z)),st.push(...Ft.slice(2,5))}let vt=s.int(4,8);for(let gt=0;gt<vt;gt++){let Lt=s.choice(st),yt=s.uniform(.8,2.2),At=s.uniform(0,6.28),Xt=Array.from({length:6},(Ht,Tt)=>Lt.clone().add(new R(.06*Math.sin(At+Tt)*Tt/5,.06*Math.cos(At+Tt*.8)*Tt/5,-yt*Tt/5)));E(Xt,Xt.map((Ht,Tt)=>.022*(1-.8*Tt/5)+.003),3,Ht=>jt(e.vine_a,e.vine_b,Ht/5),Ht=>.45*(Ht/5)**1.5)}return z.geo()}{let H=new Qt,U=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[X,J,z]of W){let w=U.map(([$,q])=>Array.from({length:14},(tt,rt)=>{let ht=2*Math.PI*rt/14,P=z*$*(1+.12*Math.sin(3*ht+X)),E=[X+P*Math.cos(ht),J+P*Math.sin(ht),q+.05*Math.sin(5*ht+J)];return H.v(E,jt(e.mud,e.moss,Gt(.3+.6*Be(E[0]*.8,E[1]*.8))))})),it=H.v([X,J,.52],e.moss);for(let $=0;$<w.length-1;$++)for(let q=0;q<14;q++){let tt=(q+1)%14;H.f(w[$][q],w[$][tt],w[$+1][tt],w[$+1][q])}for(let $=0;$<14;$++)H.f(it,w[w.length-1][$],w[w.length-1][($+1)%14])}a.add(new Rt(H.geo(),xe()))}let at=xe({morph:!0,double:!0}),I=[0,1].map(H=>{let U=new Qt(!1,1),X=(t?160:300)/2,J=($,q,tt,rt,ht)=>Array.from({length:tt},(P,E)=>{let F=2*Math.PI*E/tt;return U.v([$[0]+q*Math.cos(F),$[1]+q*Math.sin(F),$[2]],rt,[[L[0]*ht,L[1]*ht,0]])}),z=($,q)=>{for(let tt=0;tt<$.length;tt++){let rt=(tt+1)%$.length;U.f($[tt],$[rt],q[rt],q[tt])}},w=0;for(;w<X;){let $,q;if(V.length&&o.random()<.6){let[st,wt]=o.choice(V),vt=o.uniform(0,6.283),gt=o.uniform(1,4.5);$=st+gt*Math.cos(vt),q=wt+gt*Math.sin(vt)}else{let st=o.uniform(0,6.283),wt=o.uniform(11.5,48);$=wt*Math.cos(st),q=wt*Math.sin(st)}if(Math.hypot($,q)<11)continue;w++;let tt=o.uniform(1.2,3),rt=o.uniform(-.25,.25)*tt*.5,ht=o.uniform(-.25,.25)*tt*.5,P=st=>[$+rt*st*st,q+ht*st*st,-.3+(tt+.3)*st],E=st=>.12*tt*st*st,F=[0,.37,.74].map(st=>J(P(st),.018-.008*st,3,e.reed,E(st)));z(F[0],F[1]),z(F[1],F[2]);let ot=[[.75,.012],[.83,.055],[.92,.045]].map(([st,wt])=>J(P(st),wt,5,e.cat,E(st)));z(ot[0],ot[1]),z(ot[1],ot[2]);let lt=U.v(P(1),e.cat,[[L[0]*E(1),L[1]*E(1),0]]);for(let st=0;st<5;st++)U.f(ot[2][st],ot[2][(st+1)%5],lt)}let it=new Rt(U.geo(),at);return it.morphTargetInfluences=[0],a.add(it),it});{let H=new Qt;for(let U=0;U<(t?36:60);U++){let X=o.uniform(0,6.283),J=o.uniform(11.5,44),z=J*Math.cos(X),w=J*Math.sin(X),it=o.uniform(.3,.7),$=o.int(0,11),q=o.choice(e.lily),tt=H.v([z,w,.04],q),rt=Array.from({length:12},(ht,P)=>{let E=2*Math.PI*P/12;return H.v([z+it*Math.cos(E),w+it*.9*Math.sin(E),.04],ye(q,.8))});for(let ht=0;ht<12;ht++)ht!==$&&H.f(tt,rt[ht],rt[(ht+1)%12])}a.add(new Rt(H.geo(),xe({double:!0})))}let Q=new Qt(!1,1),B=new Qt;for(let H=0;H<8;H++){let U=o.uniform(0,6.283),X=o.uniform(12,36),J=o.uniform(0,6.283),z=new R(X*Math.cos(U),X*Math.sin(U),.05),w=new le().makeRotationZ(J),it=new _n(1,1),$=it.attributes.position,q=new le().makeTranslation(z.x,z.y,z.z).multiply(w).multiply(new le().makeScale(.22,.3,.13));for(let tt=0;tt<$.count;tt+=3)B.f(...[0,1,2].map(rt=>{let ht=new R($.getX(tt+rt),$.getY(tt+rt),$.getZ(tt+rt)).applyMatrix4(q);return B.v([ht.x,ht.y,ht.z],[.008,.012,.009])}));it.dispose();for(let tt of[-1,1]){let rt=z.clone().add(new R(tt*.09,.12,.12).applyMatrix4(w)),P=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(E=>Q.v([rt.x+E[0]*.035,rt.y+E[1]*.035,rt.z+E[2]*.035],[1,1,1],[[0,0,E[2]*.035*(.08-1)]]));for(let[E,F]of[[0,2],[2,1],[1,3],[3,0]])Q.f(P[E],P[F],P[4]),Q.f(P[F],P[E],P[5])}}a.add(new Rt(B.geo(),xe()));let j=new Rt(Q.geo(),Xn(e.eye_col,1.8));j.morphTargetInfluences=[0],a.add(j);let ct=Array.from({length:Math.floor(3480/20)},(H,U)=>60+U*20),Y=[];for(let H=0;H<6;H++)Y.push(ct.splice(o.int(0,ct.length-1),1)[0]);{let H=new Qt;[[70,46,14,22],[95,58,18,30]].forEach(([U,X,J,z],w)=>{let it=jt(e.back_col,u,.55+.2*w);for(let $=0;$<X;$++){let q=2*Math.PI*($+s.uniform(-.4,.4))/X+w*.5,tt=[U*Math.cos(q),U*Math.sin(q)],rt=[-Math.sin(q),Math.cos(q)],ht=s.uniform(J,z),P=s.uniform(.35,.9)*(1+.5*w),E=s.uniform(0,6.28),F=s.uniform(-.06,.06),ot=st=>{let wt=-2+(ht+2)*st,vt=Math.sin(st*3+E)*.5+F*wt;return[tt[0]+rt[0]*vt,tt[1]+rt[1]*vt,wt]},lt=Array.from({length:6},(st,wt)=>{let vt=wt/5,gt=P*(1-.5*vt),Lt=jt(it,u,Gt(vt*vt*.9)),yt=ot(vt);return[H.v([yt[0]-rt[0]*gt/2,yt[1]-rt[1]*gt/2,yt[2]],Lt),H.v([yt[0]+rt[0]*gt/2,yt[1]+rt[1]*gt/2,yt[2]],Lt)]});for(let st=0;st<5;st++)H.f(lt[st][0],lt[st][1],lt[st+1][1],lt[st+1][0]);for(let st of[-1,1]){let wt=ot(s.uniform(.55,.8)),vt=[wt[0]+rt[0]*st*ht*.16,wt[1]+rt[1]*st*ht*.16,wt[2]+ht*.12],gt=jt(it,u,.6);H.f(H.v([wt[0],wt[1],wt[2]-.1],gt),H.v([wt[0],wt[1],wt[2]+.1],gt),H.v([vt[0],vt[1],vt[2]+.04],gt),H.v([vt[0],vt[1],vt[2]-.04],gt))}}}),a.add(new Rt(H.geo(),Li({fog:!1})))}let T=[];for(let H=0;H<Math.round(14*e.orb_k*(t?.6:1));H++){let U=o.uniform(0,6.283),X=o.uniform(12,42);T.push({p:[X*Math.cos(U),X*Math.sin(U),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[H,U,X]of M)T.push({p:[H,U,X+.9],k:1.4,amp:o.uniform(.15,.4)});let S=Lc({list:T,col:e.orb_col,gain:1.2});a.add(S.group);let D=Ni({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let H=o.uniform(0,6.283),U=o.uniform(4,44);return[U*Math.cos(H),U*Math.sin(H),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(D.obj);let G=new Qt(!0);return to(G,9.4,.7,(H,U)=>{let X=Math.hypot(H,U);return X<.01?1:Ae(0,3,9.4-X)*(.7+.3*Be(X*.4,Math.atan2(U,H)*6.4))},e.wash_col,.28*.5),a.add(new Rt(G.geo(),ns())),{group:a,floor:.6,update(H){m.update(H);for(let J of v)J.m.morphTargetInfluences[0]=Ln(H,J.P/2,.15,1,J.flip);I.forEach((J,z)=>{J.morphTargetInfluences[0]=Ln(H,60,0,1,z)}),_.morphTargetInfluences[0]=Ln(H,90,0,1,0),_.morphTargetInfluences[1]=Ln(H,90,0,1,1);let U=Math.sin(H%3600/3600*Math.PI);for(let J of f)J.m.rotation.z=J.s*U;let X=0;for(let J of Y)Math.abs(H%3600-J)<3&&(X=1-Math.abs(H%3600-J)/3);j.morphTargetInfluences[0]=X,S.update(H),D.update(H)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...M.map(H=>({pos:[H[0],H[1],H[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),Hi(a)}}}var Au={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},kn=24,Ax=kn+1.6,Cx=160;function od(i,t){let e=i==="night"?Au.NIGHT:i==="day"?{...Fi(Au.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:Au.SUNSET,n=e.emit,r=n*.75,s=wn(31),o=wn(55),a=new Wt,c=[In(e.body_az,e.body_el)],l=rr(e,c),h=pe(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(B=>Rr(B,e.exposure)),d=pe(e.body_az),m=(()=>{let B=new R(.8,.6,0).normalize();return[B.x,B.y,0]})(),g=e.stone,_=Di({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let f=B=>Ax*(1+.25*(1-Math.exp(B/60))),p=(B,j)=>.12*Math.sin(B*.33)*Math.cos(j*.29)*Ae(8,14,Math.hypot(B,j)),x=(B,j)=>jt(jt(e.earth_a,e.earth_b,Gt(on(B*.12+5,j*.12-3,3)*1.4-.2)),e.moss,Gt((Be(B*.4,j*.4)-.62)*3)*.6);{let B=new Qt,j=[8,10,12,14,16,18,20,22,kn-1,kn,kn+.6,kn+1.2,kn+1.6],ct={[kn+.6]:.3,[kn+1.2]:.15,[kn+1.6]:-.4},Y=72,T=j.map(S=>Array.from({length:Y},(D,G)=>{let H=2*Math.PI*G/Y,U=S*Math.cos(H),X=S*Math.sin(H);return B.v([U,X,ct[S]??p(U,X)],S<=kn+.01?x(U,X):jt(e.bark,e.moss,.5+.3*Be(U*.5,X*.5)))}));for(let S=0;S<j.length-1;S++)for(let D=0;D<Y;D++){let G=(D+1)%Y;B.f(T[S][D],T[S+1][D],T[S+1][G],T[S][G])}a.add(new Rt(B.geo(),xe({flat:!1})))}{let B=new Qt,j=t?28:40,ct=t?48:72,Y=Array.from({length:j},(T,S)=>{let D=-.4-Cx*(S/(j-1))**1.6;return Array.from({length:ct},(G,H)=>{let U=2*Math.PI*H/ct,X=f(D)*(1+.04*Math.sin(14*U+.8*Math.sin(.05*D))+.025*Math.sin(5*U+.02*D)),J=Math.sin(14*U+.8*Math.sin(.05*D)),z=jt(e.bark,e.bark_hi,Gt(.5+.5*J)*.5);z=jt(z,e.bark_hi,.4*Math.max(0,Math.cos(U-d))),z=jt(z,e.moss,Gt(1+D/25)*Gt((Be(U*3,D*.15)-.4)*2.5)*.8);let w=Math.abs(Math.sin(7*U+1.5*Math.sin(.04*D+3*U)));return z=jt(z,e.vein,Gt(1-w*7)*(.4+.6*Be(D*.05,U*2))*.9),B.v([X*Math.cos(U),X*Math.sin(U),D],jt(z,ye(u,.6),Gt((-D-15)/110)**1.2))})});for(let T=0;T<j-1;T++)for(let S=0;S<ct;S++){let D=(S+1)%ct;B.f(Y[T][S],Y[T+1][S],Y[T+1][D],Y[T][D])}a.add(new Rt(B.geo(),xe({emit:.3,flat:!1})))}let M=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([B,j],ct)=>{let Y=new Qt(!0),T=f(B)-.3,S=[T,T+4,T+10,T+20,T+32,T+46,T+64,T+84,T+106,150],D=64,G=S.map(X=>Array.from({length:D},(J,z)=>{let w=2*Math.PI*z/D,it=X*Math.cos(w),$=X*Math.sin(w),q=j*(.55+.45*on(it*.03+ct*7,$*.03,3))*Ae(0,6,X-T);return Y.v([it,$,B],[...jt(e.sea_col,u,Ae(60,150,X)),q])}));for(let X=0;X<S.length-1;X++)for(let J=0;J<D;J++){let z=(J+1)%D;Y.f(G[X][J],G[X+1][J],G[X+1][z],G[X][z])}let H=new sn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie,fog:!1,toneMapped:!1});H.color.setScalar(1.7);let U=new Rt(Y.geo(),H);U.renderOrder=2,a.add(U),M.push({m:U,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Ar({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let b=new Qt,L=new Qt,C=[];for(let B of[0,60,120,180,240,300]){let j=pe(B),ct=12.5,Y=o.uniform(5,8),T=1.8,S=1.2,D=ct*Math.cos(j),G=ct*Math.sin(j),H=-.4,U=j-Math.PI/2,X=Math.cos(U),J=Math.sin(U),z=o.choice(g),w=o.uniform(0,50),it=new Map,$=(ht,P,E)=>{let F=`${ht},${P},${E}`,ot=it.get(F);ot||(ot=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],it.set(F,ot));let lt=ht*T,st=P*S,wt=(E+.5)*Y;if(wt>Y*.5){let gt=1-.18*((wt-Y*.5)/(Y*.5));lt*=gt,st*=gt}lt+=ot[0],st+=ot[1];let vt=wt+ot[2];return b.v([D+lt*X-st*J,G+lt*J+st*X,H+vt],Ui(z,vt/Y,lt,vt*.7,w,e.moss))},q=4,tt=ht=>-.5+ht/q,rt=ht=>{for(let P=0;P<q;P++)for(let E=0;E<q;E++)b.f($(...ht(P,E)),$(...ht(P+1,E)),$(...ht(P+1,E+1)),$(...ht(P,E+1)))};rt((ht,P)=>[tt(ht),-.5,tt(P)]),rt((ht,P)=>[tt(P),.5,tt(ht)]),rt((ht,P)=>[-.5,tt(P),tt(ht)]),rt((ht,P)=>[.5,tt(ht),tt(P)]),rt((ht,P)=>[tt(P),tt(ht),.5]);for(let[ht,P,E]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let F=-S/2-.02,ot=Y*ht,lt=D-F*J,st=G+F*X;L.f(...[[-P/2,-E/2],[P/2,-E/2],[P/2,E/2],[-P/2,E/2]].map(([wt,vt])=>L.v([lt+wt*X,st+wt*J,H+ot+vt],[1,1,1])))}C.push([D,G,Y-.4])}a.add(new Rt(b.geo(),xe()),new Rt(L.geo(),Xn(e.rune_col,1.4*r)));let A=(B,j,ct,Y,T,S,D,G,H=!0)=>{let U=Array.from({length:D},(J,z)=>{let w=Math.PI/2*z/D,it=z/D;return Array.from({length:S},($,q)=>{let tt=2*Math.PI*q/S,rt=.1*it*it*T;return B.v([j[0]+ct*Math.cos(w)*Math.cos(tt),j[1]+Y*Math.cos(w)*Math.sin(tt),j[2]+T*Math.sin(w)],G(it,tt),H?[[m[0]*rt,m[1]*rt,0]]:void 0)})}),X=B.v([j[0],j[1],j[2]+T],G(1,0),H?[[m[0]*.1*T,m[1]*.1*T,0]]:void 0);for(let J=0;J<D-1;J++)for(let z=0;z<S;z++){let w=(z+1)%S;B.f(U[J][z],U[J][w],U[J+1][w],U[J+1][z])}for(let J=0;J<S;J++)B.f(U[D-1][J],U[D-1][(J+1)%S],X)},k=(B,j,ct,Y,T)=>{let S=new Qt(!1,1);for(let[G,H,U,X]of B){let J=o.uniform(.85,1.15),z=p(G,H)-.2,w=(it,$)=>ye(jt(j,ct,Gt(it*(.75+.25*Math.cos($-d)))**.9),J);for(let it=0;it<X;it++){let $=o.uniform(0,6.283),q=it?o.uniform(0,.6)*U:0,tt=U*o.uniform(.7,1);A(S,[G+q*Math.cos($),H+q*Math.sin($),z],tt,tt,tt*.85,Y,T,w)}}let D=new Rt(S.geo(),xe({flat:!1,morph:!0}));return D.morphTargetInfluences=[0],a.add(D),D},O=[];for(let B=0;O.length<(t?40:70)&&B<3e3;B++){let j=o.uniform(0,2*Math.PI),ct=o.uniform(11.5,kn-1.5);if(j*180/Math.PI%360>255&&j*180/Math.PI%360<285&&ct>15)continue;let Y=ct*Math.cos(j),T=ct*Math.sin(j);C.some(([S,D])=>Math.hypot(Y-S,T-D)<2.8)||O.push([Y,T,o.uniform(1,2.2),o.int(2,4)])}let y=k(O,e.bush_lo,e.bush_hi,12,3),v=Array.from({length:30},(B,j)=>{let ct=2*Math.PI*(j+o.uniform(-.3,.3))/30,Y=kn-.6+o.uniform(-.8,.8);return[Y*Math.cos(ct),Y*Math.sin(ct),o.uniform(2,3.5),2]}),V=k(v,e.hedge_lo,e.hedge_hi,16,4);{let B=new Qt;[62,85,112,140].forEach((j,ct)=>{let Y=1+.25*ct;for(let T=0;T<(t?12:20);T++){let S=2*Math.PI*(T+s.uniform(-.4,.4))/20+ct*.4,D=j+s.uniform(-6,6);for(let G=0;G<2;G++){let H=G?s.uniform(-9,9):0,U=D*Math.cos(S)-H*Math.sin(S),X=D*Math.sin(S)+H*Math.cos(S),J=s.uniform(9,16)*Y*(G?.7:1),z=s.uniform(28,46)*Y*(G?.75:1),w=.35+.15*ct,it=s.uniform(.85,1.15);A(B,[U,X,-30],J,J,z,14,7,$=>jt(ye(e.can_col,it),ye(u,.7),Gt(w+.25*$)),!1)}}}),a.add(new Rt(B.geo(),xe({emit:.85,flat:!1})))}let W=[];for(let B=0;B<Math.round(18*e.orb_k*(t?.6:1));B++){let j=o.uniform(0,6.283),ct=10.5+(kn-8.5)*Math.sqrt(o.random());W.push({p:[ct*Math.cos(j),ct*Math.sin(j),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[B,j,ct]of C)W.push({p:[B,j,ct+.9],k:1.4,amp:o.uniform(.15,.4)});let et=Lc({list:W,col:e.orb_col,gain:1.2});a.add(et.group);let pt=Math.round(160*e.fire_k*(t?.5:1)),K=Math.round(40*e.fire_k*(t?.5:1)),at=0,I=Ni({r:o,n:pt+K,at:()=>{if(at++<pt){let ct=o.uniform(0,6.283),Y=(kn+4)*Math.sqrt(o.random());return[Y*Math.cos(ct),Y*Math.sin(ct),.3+8.7*o.random()**1.6]}let B=o.uniform(0,6.283),j=o.uniform(kn+2,kn+14);return[j*Math.cos(B),j*Math.sin(B),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});pt+K>0&&a.add(I.obj);let Q=new Qt(!0);return to(Q,9.4,.7,(B,j)=>{let ct=Math.hypot(B,j);return ct<.01?1:Ae(0,3,9.4-ct)*(.7+.3*Be(ct*.4,Math.atan2(j,B)*6.4))},e.wash_col,.28*.5),a.add(new Rt(Q.geo(),ns())),{group:a,floor:.6,update(B){_.update(B),y.morphTargetInfluences[0]=Ln(B,60,.15,1,1),V.morphTargetInfluences[0]=Ln(B,90,.15,1,1);let j=Math.sin(B%3600/3600*Math.PI);for(let ct of M)ct.m.rotation.z=ct.s*j;et.update(B),I.update(B)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ye(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...C.slice(0,4).map(B=>({pos:[B[0],B[1],B[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),Hi(a)}}}var Px={forest:id,plains:rd,swamp:sd,worldtree:od,castle:nd};function Cu(i,t,e){let n=Px[i];return n?n(t,e):null}var Jo=(i,t,e)=>i+(t-i)*e,Ix=new R(0,-1,0),Lx=new R(0,Math.cos(.3),Math.sin(.3)),Uc=new rn,ad=new rn;function Pu(i,t,e,n){let r=i.parent;t.updateMatrixWorld(!0);let o=r.worldToLocal(t.localToWorld(e.clone())).sub(i.position).normalize();Uc.setFromUnitVectors(Ix,o),i.quaternion.slerp(Uc,n)}function cd(i,t,e){i.root.updateMatrixWorld(!0),i.staffPivot.parent.getWorldQuaternion(ad).invert(),i.root.getWorldQuaternion(Uc);let r=new rn().setFromUnitVectors(Lx,t.clone().normalize()).premultiply(Uc).premultiply(ad);i.staffPivot.quaternion.slerp(r,e)}var Dx=i=>i*i*(3-2*i);function hd(i,t,e,n){let r=Dx(Math.max(0,Math.min(1,e))),[s,o]=i.legs??[];if((()=>{i.root.position.y=0;for(let u of i.legs??[])u.hip.rotation.set(0,0,0),u.knee.rotation.set(0,0,0);i.staffPivot.rotation.z=Ux(i),i.leftArm&&i.leftArm.rotation.set(jo.x(i),0,jo.z(i))})(),t==="none"||r<=.001)return;let c=Math.sin(n*1.7)*.05,l=u=>{i.root.position.y=(u+c)*r},h=(u=0)=>{Pu(i.arm,i.body,new R(.03,1.02+u,.3),r),i.leftArm&&Pu(i.leftArm,i.body,new R(-.01,1.24+u,.32),r),cd(i,new R(0,1,.04),r)};if(t==="float")l(.32),s&&(s.hip.rotation.x=-.32*r,s.knee.rotation.x=1.15*r),o&&(o.hip.rotation.x=-.06*r,o.knee.rotation.x=.18*r),i.leftArm&&(i.leftArm.rotation.z=Jo(jo.z(i),-.55,r));else if(t==="aim"){i.body.rotation.y=Jo(i.body.rotation.y,-1.2,r),i.head.rotation.y=Jo(i.head.rotation.y,1.05,r),i.root.updateMatrixWorld(!0);let u=i.body.worldToLocal(i.root.localToWorld(new R(.25,1.42,2)));Pu(i.arm,i.body,u,r),cd(i,new R(0,.08,1),r),i.leftArm&&(i.leftArm.rotation.x=Jo(jo.x(i),.25,r),i.leftArm.rotation.z=Jo(jo.z(i),-.35,r)),s&&(s.hip.rotation.x=.22*r),o&&(o.hip.rotation.x=-.2*r)}else t==="twohand"?h():t==="lotus"&&(l(.5),s&&(s.hip.rotation.set(-1.45*r,0,-.55*r),s.knee.rotation.set(2.2*r,0,0)),o&&(o.hip.rotation.set(-1.45*r,0,.55*r),o.knee.rotation.set(2.2*r,0,0)),h())}var ld=new WeakMap,Nc=i=>{let t=ld.get(i);return t||(t={staffZ:i.staffPivot.rotation.z,leftX:i.leftArm?.rotation.x??-.38,leftZ:i.leftArm?.rotation.z??-.15},ld.set(i,t)),t},Ux=i=>Nc(i).staffZ,jo={x:i=>Nc(i).leftX,z:i=>Nc(i).leftZ};function ud(i){Nc(i)}var Pt=(i,t)=>i+Math.random()*(t-i),Nx=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function no(i,t=!1){let e=new Rn(i);return e.colorSpace=nn,t&&(e.magFilter=Tn,e.minFilter=Tn,e.generateMipmaps=!1),e}function Qo(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),no(e)}function fd(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let r=0;r<n.length;r++)e.save(),e.rotate(r/n.length*Math.PI*2),e.fillText(n[r],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let r=0;r<=5;r++){let s=r*4*Math.PI/5-Math.PI/2,o=Math.cos(s)*180,a=Math.sin(s)*180;r?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),no(t)}function Hx(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),no(e)}function Fx(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let r=n*56,s=r+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,s,c,l),t.arc(512,512,Math.max(r,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=no(i);return e.anisotropy=4,e}function Ox(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,r=e?Number(e[2]):20,s=1024/Math.max(n,r),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*s}" height="${r*s}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*s,c.height=r*s,c.getContext("2d").drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(no(c),n/r)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function Bx(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let r=document.createElement("canvas");r.width=2048,r.height=1152;let s=r.getContext("2d");s.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=s.getImageData(0,a,2048,c-a).data,h=0,u=0,d=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],d+=l[g+2],m++;return new Vt(h/m/255,u/m/255,d/m/255).convertSRGBToLinear()};t(no(r),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var kx={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},zx=["forest","swamp","worldtree"];function Vx(i,t={}){let e,n=!!t.lite;try{e=new Bs({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let r=!1,s=()=>r?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(s()),e.toneMapping=Go,e.toneMappingExposure=1.15;let o=new ks;o.fog=new sc(1709616,20,58);let a=new bn(55,16/9,.05,200),c=new R(0,1.75,7.2),l=new R(0,1.45,0);a.position.copy(c),o.add(a);let h=new Xs(16777215,2236962,1),u=new Qi(16777215,1);o.add(h,u);let d=new yi(16777215,6,9,2);d.position.set(0,3,7.5),o.add(d);let m=new Qi(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new Wt;o.add(g);let _=new sn({color:16777215,fog:!1,side:Ie}),f=new Rt(new Me(70,70,66,48,1,!0,Math.PI-.95,1.9),_);f.scale.set(-1,1,1),f.position.set(0,13,6),g.add(f);let p=new Te({color:2767396,roughness:1}),x=new Rt(new Fo(90,48),p);x.rotation.x=-Math.PI/2,x.position.y=-.02,g.add(x);let M=new Te({color:5208634,roughness:.9,flatShading:!0}),b=2600,L=new zs(new Bn(.05,.42,3),M,b);{let Z=new le,ut=new rn,_t=new vn,mt=new R,St=new R,It=new Vt;for(let Bt=0;Bt<b;Bt++){let ue=9.9+Math.pow(Math.random(),.7)*30,ae=Math.random()*Math.PI*2;mt.set(Math.cos(ae)*ue,.18,Math.sin(ae)*ue-1),_t.set(Pt(-.25,.25),Math.random()*3,Pt(-.25,.25)),ut.setFromEuler(_t);let Dt=Pt(.7,1.6);St.set(Dt,Dt*Pt(.8,1.5),Dt),Z.compose(mt,ut,St),L.setMatrixAt(Bt,Z),L.setColorAt(Bt,It.setHSL(Pt(.22,.32),Pt(.35,.6),Pt(.3,.5)))}}g.add(L);let C=new Wt;g.add(C);let A=new Te({color:1981226,roughness:1,flatShading:!0}),k=new Te({color:3811868,roughness:1}),O=new Te({color:6051942,roughness:1,flatShading:!0});function y(Z){C.clear();let ut=zx.includes(Z),_t=ut?70:34;for(let mt=0;mt<_t;mt++){let St=Pt(Math.PI*1.08,Math.PI*1.92),It=Pt(24,48),Bt=Math.cos(St)*It,ue=Math.sin(St)*It-1;if(ut){let ae=Pt(6,13),Dt=new Wt,Et=new Rt(new Me(.25,.4,ae*.3,6),k);Et.position.y=ae*.15,Dt.add(Et);for(let Se=0;Se<3;Se++){let dn=new Rt(new Bn(ae*(.32-Se*.07),ae*.5,7),A);dn.position.y=ae*(.42+Se*.2),Dt.add(dn)}Dt.position.set(Bt,0,ue),C.add(Dt)}else{let ae=new Rt(new _n(Pt(.8,2.6),0),Math.random()<.5?O:A);ae.position.set(Bt,.3,ue),ae.scale.y=Pt(.5,.9),ae.rotation.y=Math.random()*3,C.add(ae)}}}let v=new Rt(new Fo(9.5,64),new Te({map:Fx(),roughness:.92,metalness:.02}));v.rotation.x=-Math.PI/2,g.add(v);let V=new Rt(new An(9.5,.18,8,96),new Te({color:4933206,roughness:.85}));V.rotation.x=Math.PI/2,V.position.y=.05,g.add(V);let W=new Rt(new ji(9,9),new sn({map:fd("#a98bff"),transparent:!0,opacity:.38,blending:hn,depthWrite:!1}));W.rotation.x=-Math.PI/2,W.position.y=.03,W.scale.x=-1,o.add(W);let et=new Te({color:5919846,roughness:.9}),pt=Qo("rgba(255,170,80,1)","rgba(255,120,40,0)"),K=[];for(let Z of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let ut=Z-Math.PI/2,_t=Math.cos(ut)*10.4,mt=Math.sin(ut)*10.4-1.5,St=new Wt,It=new Rt(new Me(.42,.5,4.2,10),et);It.position.y=2.1;let Bt=new Rt(new tn(1.2,.3,1.2),et);Bt.position.y=4.35;let ue=new Rt(new Me(.42,.22,.3,10),new Te({color:2959923,metalness:.6,roughness:.4}));ue.position.y=4.65;let ae=new ti(new Jn({map:pt,color:16756832,blending:hn,depthWrite:!1,transparent:!0}));ae.position.y=5.05,ae.scale.set(1.3,1.8,1);let Dt=new yi(16751178,10,14,2);Dt.position.y=5.1,St.add(It,Bt,ue,ae,Dt),St.position.set(_t,0,mt),g.add(St),K.push({light:Dt,flame:ae,base:1,phase:Math.random()*10})}let at=260,I=new ve,Q=new Float32Array(at*3),B=new Float32Array(at);for(let Z=0;Z<at;Z++)Q[Z*3]=Pt(-14,14),Q[Z*3+1]=Pt(0,7),Q[Z*3+2]=Pt(-12,6),B[Z]=Math.random()*100;I.setAttribute("position",new Le(Q,3));let j=new _r({size:.12,map:Qo(),transparent:!0,depthWrite:!1,blending:hn,color:16777215,sizeAttenuation:!0});g.add(new yr(I,j));let ct=Qo(),Y=Qo("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),T=Qo("rgba(150,120,255,1)","rgba(120,80,255,0)"),S=new Map;function D(Z,ut){let _t=new Wt,mt=null,St=null,It=null,Bt=1.95;ut.svg?(Bt=4.6,It=new Jn({transparent:!0,alphaTest:.05}),St=new ti(It),St.center.set(.5,0),St.scale.set(Bt*1.33,Bt,1),Ox(ut.svg,(Et,Se)=>{It.map=Et,It.needsUpdate=!0,St.scale.set(Bt*Se,Bt,1)}),_t.add(St)):(mt=Of(yu(ut.character??"wizard"),Z==="me"?"me":Z.startsWith("ally:")?"ally":"opp",ct,ut.staff),ud(mt),Bt=mt.height,_t.add(mt.root));let ue=new Rt(new ji(Bt*.7,Bt*.32),new sn({map:Y,transparent:!0,depthWrite:!1}));if(ue.rotation.x=-Math.PI/2,ue.position.y=.02,_t.add(ue),Z!=="me"){let Et=new Rt(new ji(Bt*1.1,Bt*1.1),new sn({map:fd(Z==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:hn,depthWrite:!1}));Et.rotation.x=-Math.PI/2,Et.position.y=.04,Et.name="circle",_t.add(Et)}let ae=new ti(new Jn({map:T,blending:hn,depthWrite:!1,transparent:!0,opacity:0}));ae.scale.set(Bt*1.2,Bt*1.2,1),ae.position.y=Bt*.5,_t.add(ae),o.add(_t);let Dt={key:Z,group:_t,model:mt,sprite:St,spriteMat:It,height:Bt,ko:!1,flame:null,aura:ae,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,eyesFlashUntil:0,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100},pose:Xo(ut.pose)?ut.pose:"none",poseK:0};return S.set(Z,Dt),Dt}function G(){for(let Z of S.values())o.remove(Z.group),Z.group.traverse(ut=>{let _t=ut;_t.geometry?.dispose?.(),_t.material?.dispose?.()});S.clear()}let H=new Wt;a.add(H);let U=new R(1.08,-.52,-1.6),X=new R(1.14,-.6,-1.6);H.scale.setScalar(.72);let J=U.clone(),z=new Te({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),w=new Te({color:4020950,roughness:.9,flatShading:!0,side:Ie}),it=new Te({color:15778970,roughness:.75,flatShading:!0}),$=new Wt;H.add($);let q=er("verdant",ct),tt="verdant";$.add(q.group);let rt=new yi(q.color,.6,4,2);rt.position.y=br,$.add(rt);function ht(Z){Z!==tt&&(tt=Z,$.remove(q.group),q.group.traverse(ut=>{ut.geometry?.dispose?.()}),q=er(Z,ct),$.add(q.group),rt.color.copy(q.color))}{let Z=(St,It,Bt,ue,ae,Dt)=>{let Et=new Rt(St,It);return Et.position.set(ue,ae,Dt),Bt.add(Et),Et},ut=Z(new xr(.046,.075,4,10),it,$,.066,-.004,.014);ut.scale.set(.82,1,1.12),ut.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((St,It)=>{let Bt=.05-It*.002,ue=Z(new An(Bt,.019-It*.001,6,14,Math.PI*1.32),it,$,0,St,0);ue.rotation.x=-Math.PI/2;let ae=Math.PI*1.32;Z(new Ne(.019-It*.001,6,5),it,$,Math.cos(ae)*Bt,St,-Math.sin(ae)*Bt)}),Z(new xr(.021,.075,4,8),it,$,.022,.074,.05).rotation.set(.3,0,1.25);let mt=new Wt;mt.position.set(.09,-.08,.03),mt.rotation.set(-.55,0,.62),H.add(mt),Z(new Me(.05,.062,.2,10),it,mt,0,-.08,0),Z(new Me(.1,.16,.95,10,1,!0),w,mt,0,-.6,0),Z(new An(.1,.028,6,14),z,mt,0,-.14,0).rotation.x=Math.PI/2}let P=new Wt;{let Z=(St,It,Bt,ue,ae)=>{let Dt=new Rt(St,It);return Dt.position.set(Bt,ue,ae),P.add(Dt),Dt},ut=Z(new xr(.046,.075,4,10),it,-.066,0,.014);ut.scale.set(.82,1,1.12),ut.rotation.set(0,-.25,.08),[.052,.018,-.016,-.048].forEach((St,It)=>{Z(new An(.05-It*.002,.019-It*.001,6,14,Math.PI*1.32),it,0,St,0).rotation.set(-Math.PI/2,0,Math.PI-Math.PI*.32)});let _t=new Wt;_t.position.set(-.09,-.08,.03),_t.rotation.set(-.5,0,-.75),P.add(_t);let mt=(St,It,Bt)=>{let ue=new Rt(St,It);return ue.position.set(0,Bt,0),_t.add(ue),ue};mt(new Me(.05,.062,.2,10),it,-.08),mt(new Me(.1,.16,.95,10,1,!0),w,-.6),mt(new An(.1,.028,6,14),z,-.14).rotation.x=Math.PI/2,P.position.set(0,.26,0),P.visible=!1,$.add(P)}let E=new yi(16777215,1.4,3,2);E.position.set(.3,.3,-.5),a.add(E);let F={wizard:{sleeve:3433416,skin:15916495},witch:{sleeve:8017597,skin:15654104},goblin:{sleeve:8015404,skin:8688447},knight:{sleeve:14077887,skin:14999246},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},ot=-1e9,lt="ready",st=0,wt=900,vt=()=>{lt==="gone"&&(lt="growing",st=performance.now())},gt=0,Lt=0,yt=null,At="none",Xt=0,Ht=!1,Tt={uTime:{value:0},uAmount:{value:0},uC0:{value:new Vt},uC1:{value:new Vt},uC2:{value:new Vt},uC3:{value:new Vt}},Ft=new Rt(new ji(1,1),new $n({uniforms:Tt,transparent:!0,depthWrite:!1,depthTest:!1,blending:hn,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Ft.renderOrder=30,Ft.frustumCulled=!1,a.add(Ft);function $t(){let ut=Math.tan(qs.degToRad(a.fov/2))*1.2,_t=ut*.55;Ft.scale.set(ut*a.aspect*2.05,_t,1),Ft.position.set(0,-ut+_t/2,-1.2)}function ne(Z){let ut={h:0,s:0,l:0};Z.getHSL(ut),Tt.uC0.value.setHSL(ut.h,1,.82),Tt.uC1.value.setHSL(ut.h,1,.6),Tt.uC2.value.setHSL(ut.h,.95,.45),Tt.uC3.value.setHSL((ut.h+.03)%1,.9,.22)}let nt=new R;function zt(Z,ut="chest"){if(Z==="me")return ut==="staff"||ut==="head"?(q.gem.getWorldPosition(nt),nt.clone()):a.localToWorld(new R(Pt(-.15,.15),-.1,-1.4));let _t=S.get(Z);if(!_t)return new R(0,1.4,-3);if(_t.model&&ut==="staff")return _t.model.crystal.getWorldPosition(nt),nt.clone();let mt=_t.group.position.clone(),St=_t.height*_t.group.scale.y;return Z==="boss"&&ut==="mouth"?mt.add(new R(-_t.height*.55,_t.height*.62,.3)):mt.add(new R(0,St*(ut==="head"?.85:.6),0))}let bt=[],Ct=0;function Ot(Z,ut,_t={}){if(n&&Ct++&1)return;let mt=new ti(new Jn({map:ct,color:ut,blending:_t.solid?Ri:hn,depthWrite:!1,transparent:!0,opacity:_t.opacity??1}));mt.position.copy(Z),mt.scale.setScalar(_t.size??.25),o.add(mt),bt.push({sprite:mt,vel:_t.vel??new R,life:0,max:_t.life??.6,grow:_t.grow??0,gravity:_t.gravity??0})}function qt(Z,ut,_t=26,mt=3.2,St=.22){for(let It=0;It<_t;It++){let Bt=new R(Pt(-1,1),Pt(-.6,1.2),Pt(-1,1)).normalize().multiplyScalar(Pt(mt*.4,mt));Ot(Z,ut,{vel:Bt,size:Pt(St*.6,St*1.4),life:Pt(.4,.9),gravity:-3})}Ot(Z,ut,{size:.6,grow:6,life:.35,opacity:.9})}function me(Z,ut,_t=1){let mt=Z.group.position,St=Z.model?.45:Z.height*.35;for(let It=0;It<_t;It++){let Bt=Z.group.scale.y;Ot(new R(mt.x+Pt(-St,St)*Bt,mt.y+Pt(.05,Z.height*.45)*Bt,mt.z+Pt(-St,St)*.5*Bt),ut,{size:Pt(.35,.7)*Bt,vel:new R(Pt(-.1,.1),Pt(1.4,2.6),0),life:Pt(.35,.65),grow:-.9,opacity:.75,solid:!0}),Ot(new R(mt.x+Pt(-St,St)*.6*Bt,mt.y+Pt(.05,Z.height*.35)*Bt,mt.z),ut,{size:Pt(.3,.5)*Bt,vel:new R(0,Pt(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Ot(new R(mt.x+Pt(-St,St)*Bt,mt.y+Pt(.2,Z.height*.9)*Bt,mt.z),16777215,{size:Pt(.05,.1)*Bt,vel:new R(0,Pt(1.5,3),0),life:.5})}}let We=[];function Dn(Z){for(let _t=0;_t<2;_t++){let mt=[],St=Z.clone().add(new R(Pt(-1.5,1.5),9,Pt(-1,1)));for(let Bt=0;Bt<=12;Bt++){let ue=St.clone().lerp(Z,Bt/12);Bt>0&&Bt<12&&ue.add(new R(Pt(-.45,.45),Pt(-.2,.2),Pt(-.3,.3))),mt.push(ue)}let It=new hc(new ve().setFromPoints(mt),new Uo({color:_t?16777215:10475775,transparent:!0,blending:hn,depthWrite:!1}));o.add(It),We.push({line:It,life:0});for(let Bt=0;Bt<mt.length-1;Bt++){let ue=mt[Bt].distanceTo(mt[Bt+1]);for(let ae=0;ae<ue;ae+=.09)Ot(mt[Bt].clone().lerp(mt[Bt+1],ae/ue),_t?16777215:9425151,{size:_t?.12:.3,life:.28,opacity:_t?1:.7})}}let ut=new yi(12576511,60,16,2);ut.position.copy(Z).add(new R(0,2,1)),o.add(ut),setTimeout(()=>o.remove(ut),160),qt(Z,12576511,30,4,.18)}let be=[];function cn(Z,ut,_t="#ffd479"){let mt=new ti(new Jn({map:Hx(ut,_t),transparent:!0,depthWrite:!1,depthTest:!1}));mt.position.copy(zt(Z,"head")).add(new R(Pt(-.3,.3),.4,.3));let St=Z==="me"?.9:1.3;mt.scale.set(St,St/2,1),mt.renderOrder=10,o.add(mt),be.push({sprite:mt,life:0})}let Sn=document.createElement("div");Sn.className="arena3d-hit",document.body.append(Sn);function Mi(Z="255,40,60",ut=""){Sn.style.setProperty("--hit",Z),Sn.className="arena3d-hit",Sn.offsetWidth,Sn.className=`arena3d-hit on ${ut}`}let bi=0,ni=Z=>{Nx()||(bi=Math.max(bi,Z))},qn=[],Cr=new Set,io=new Map;function rs(Z){let ut=io.get(Z);if(ut)return ut;let _t=document.createElement("canvas");_t.width=_t.height=128;let mt=_t.getContext("2d"),St=mt.createRadialGradient(64,64,0,64,64,64);St.addColorStop(0,"#ffffff"),St.addColorStop(.22,Z),St.addColorStop(.5,`${Z}88`),St.addColorStop(1,`${Z}00`),mt.fillStyle=St,mt.fillRect(0,0,128,128);let It=new Rn(_t);return It.colorSpace=nn,io.set(Z,It),It}function ta(Z,ut,_t,mt,St,It,Bt=!1){let ue=rs(mt),ae=new ti(new Jn({map:ue,transparent:!0,depthWrite:!1,blending:hn}));ae.scale.set(St*.42,St*.42,1),ae.position.copy(Z),ae.renderOrder=5,o.add(ae);let Dt=Bt?Z.clone().lerp(ut,.5).add(new R(Pe(.28,Z.clone().lerp(ut,.5).z)-Z.clone().lerp(ut,.5).x,-.15,0)):Z.clone().lerp(ut,.5).add(new R(Pt(-.6,.6),1.2+Z.distanceTo(ut)*.08,0));return new Promise(Et=>qn.push({sprite:ae,from:Z,to:ut,mid:Dt,t:0,dur:It,color:new Vt(mt),size:St,done:Et,trailAt:0,incoming:Bt}))}let vi="battle",ss="",os="",De=null,Pr=new Map,as=[],N=new Qi(16777215,1);N.visible=!1,o.add(N,N.target);let ft=(Z,ut)=>new R(Z[0],Z[2]-ut,-Z[1]);function xt(Z,ut){De&&(o.remove(De.group),t.preview||De.dispose(),De=null);for(let mt of as)o.remove(mt);as.length=0;let _t=`${Z}-${ut}-${n}`;try{De=t.preview&&Pr.get(_t)||Cu(Z,ut,n)}catch(mt){console.warn("3D arena failed, using the classic one",mt),De=null}if(De&&t.preview&&Pr.set(_t,De),g.visible=!De,W.position.y=De?.1:.03,N.visible=!!De,!De){os="";return}De.group.rotation.x=-Math.PI/2,De.group.position.y=-De.floor,o.add(De.group),De.group.traverse(mt=>{mt.name==="centre-pattern"&&(mt.visible=!1)});for(let mt of n?De.lights.slice(0,2):De.lights){let St=new yi(new Vt(...mt.color),mt.intensity*8,mt.dist,2);St.position.copy(ft(mt.pos,De.floor)),St.userData.base=St.intensity,St.userData.flicker=mt.flicker??0,o.add(St),as.push(St)}}function Mt(Z){let ut=Z.key.dir;N.color.setRGB(...Z.key.color),N.intensity=Z.key.intensity*.35,N.position.set(ut[0]*50,ut[2]*50,-ut[1]*50),N.target.position.set(0,0,0),h.color.setRGB(...Z.ambient.sky),h.groundColor.setRGB(...Z.ambient.ground),h.intensity=Z.ambient.intensity,u.intensity=0,m.intensity*=.45,d.intensity*=.5;let _t=o.fog;_t.color.setRGB(...Z.fog.color),_t.near=Z.fog.near,_t.far=Z.fog.far,e.setClearColor(_t.color)}let dt=0,Nt=0,Zt=0,Kt=new vn,Jt=new vn,se=!1,oe=!1,te=new Vt(16777215),fe=null;function Pe(Z,ut){let _t=c.z-ut,mt=Math.tan(qs.degToRad(a.fov/2))*_t;return Z*mt*a.aspect}function Xe(){if(!fe)return;let Z=fe,ut=S.get("opp");ut?.model&&ut.group.scale.setScalar(1.3),ut&&ut.group.position.set(Pe(a.aspect<1?.08:Z.layout==="deck"?.36:.46,-2.2),0,-2.2);let _t=S.get("boss");_t&&_t.group.position.set(Pe(a.aspect<1?.15:.5,-5.5),0,-5.5),Z.allies.forEach((St,It)=>{let Bt=S.get(`ally:${St.id}`);Bt&&Bt.group.position.set(Pe(-.36+It*.13,-.6-It*1.1),0,-.6-It*1.1)});let mt=(_t??ut)?.group.position;for(let[St,It]of S){if(!It.model)continue;let Bt=St==="opp"?c:mt??new R(0,0,-3);It.model.root.rotation.y=Math.atan2(Bt.x-It.group.position.x,Bt.z-It.group.position.z)}}function Un(Z){fe=Z,vi=Z.layout,G();let ut=F[yu(Z.me.character??"wizard")]??F.wizard;w.color.set(ut.sleeve),it.color.set(ut.skin),it.metalness=Z.me.character==="knight"?.12:0,ea(),ht(Z.me.staff??"verdant"),Ht=!1,H.visible=!0,lt="ready",yt=null,Tt.uAmount.value=0,Ft.visible=!1,At=Xo(Z.me.pose)?Z.me.pose:"none",Xt=0,Z.opp&&D("opp",Z.opp),Z.boss&&D("boss",Z.boss);for(let _t of Z.allies)D(`ally:${_t.id}`,_t);Xe(),Ce(Z)}function Ce(Z){let ut=kx[Z.time];h.color.set(ut.sky),h.groundColor.set(ut.ground),h.intensity=ut.hemi*1.25,m.intensity=Z.time==="night"?1.3:Z.time==="sunset"?1:.7,u.color.set(ut.sun),u.intensity=ut.sunInt,u.position.set(...ut.sunPos),d.intensity=Z.time==="night"?9:5;for(let _t of K)_t.base=ut.torch;j.color.set(ut.motes),te=new Vt(ut.spriteTint),ss!==Z.bgKey&&(ss=Z.bgKey,xt(Z.bgKey.split("-")[0],Z.time)),De?Mt(De):os!==Z.bgKey&&(os=Z.bgKey,o.fog.near=20,o.fog.far=58,y(Z.bgKey.split("-")[0]),Bx(Z.bgSvg,(_t,mt,St)=>{_.map?.dispose(),_.map=_t,_.needsUpdate=!0,o.fog.color.copy(mt).lerp(St,.35),p.color.copy(mt).multiplyScalar(.9),M.color.copy(mt).lerp(new Vt(5212730),.45).multiplyScalar(1.15),A.color.copy(mt).lerp(new Vt(1522212),.5),e.setClearColor(St)}))}let ee=new Ut,ke=new Ut,we=.32,zn=.13,qe={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},Nn=Z=>{Z.pointerType!=="mouse"||Z.buttons||Z.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||ee.set(Z.clientX/innerWidth*2-1,Z.clientY/innerHeight*2-1)};addEventListener("pointermove",Nn,{passive:!0});let Vn={yaw:0,pitch:0,at:0,live:0},je=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?-1:1,Ei=()=>((screen.orientation?.angle??window.orientation??0)%360+360)%360,Ir=Z=>{let ut=Z.rotationRate;if(!ut||ut.beta===null||ut.gamma===null||!ro)return;let _t=performance.now(),mt=Vn.at?Math.min(.1,(_t-Vn.at)/1e3):0;Vn.at=_t,Vn.live=_t;let St=Ei(),It=Z.accelerationIncludingGravity,Bt=It&&It.x!==null&&It.y!==null&&It.z!==null?Math.hypot(It.x,It.y,It.z):0,ue=Bt>4?(ut.beta*It.x+ut.gamma*It.y+(ut.alpha??0)*It.z)/Bt*je:St===90?ut.beta:St===270?-ut.beta:St===180?-ut.gamma:ut.gamma,ae=St===90?-ut.gamma:St===270?ut.gamma:St===180?-ut.beta:ut.beta,Dt=Math.exp(-mt/2.2);Vn.yaw=(Vn.yaw+ue*mt)*Dt,Vn.pitch=(Vn.pitch+ae*mt)*Dt,ee.set(Math.max(-1,Math.min(1,-Vn.yaw/16)),Math.max(-1,Math.min(1,-Vn.pitch/14)))},Yn=matchMedia("(pointer: coarse)").matches&&"DeviceMotionEvent"in window,Lr=()=>{removeEventListener("touchend",Lr);let Z=DeviceMotionEvent;Z.requestPermission&&Z.requestPermission().then(ut=>{ut==="granted"&&addEventListener("devicemotion",Ir)}).catch(()=>{})};Yn&&(DeviceMotionEvent.requestPermission?addEventListener("touchend",Lr,{passive:!0}):addEventListener("devicemotion",Ir));function ea(){let Z=vi==="deck"?X:U,ut=vi==="deck"?.56:.72;if(a.aspect>=1.2){J.copy(Z),H.scale.setScalar(ut);return}let _t=Math.tan(qs.degToRad(a.fov/2))*-Z.z,mt=_t*a.aspect;J.set(mt*.78,-_t*.62,Z.z),H.scale.setScalar(ut*Math.max(.5,Math.min(1,a.aspect*.9)))}function wi(){let Z=i.clientWidth||innerWidth,ut=i.clientHeight||innerHeight;e.setSize(Z,ut,!1),a.aspect=Z/ut,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),Xe(),$t(),ea()}addEventListener("resize",wi);let Iu=0,Lu=0,Du=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!ro||i.clientWidth===Iu&&i.clientHeight===Lu||(Iu=i.clientWidth,Lu=i.clientHeight,wi())}):null;Du?.observe(i);let dd=new Vt(6974072),pd=new Vt(16722474),Uu=new Vt(9428223),md=new Vt(2784511),Nu=new Vt(16738842);function gd(Z,ut){let _t=ut<Z.hurtUntil,mt=ut<Z.frostUntil,St=ut<Z.burnUntil;if(Z.model&&Z.ko){for(let It of Z.model.materials)It.mat.color.copy(It.color).lerp(dd,.55),It.mat.emissive.setRGB(0,0,0);return}if(Z.model){if(mt!==Z.frosted){Z.frosted=mt;for(let It of Z.model.materials)It.mat.opacity=mt?.5:1,It.mat.depthWrite=!mt}for(let It of Z.model.materials)It.mat.color.copy(It.color),mt&&It.mat.color.lerp(Uu,.75),_t?(It.mat.emissive.copy(pd),It.mat.emissiveIntensity=.6):mt?(It.mat.emissive.copy(md),It.mat.emissiveIntensity=.45):St?(It.mat.color.lerp(Nu,.35),It.mat.emissive.copy(Nu),It.mat.emissiveIntensity=.55+.3*Math.sin(ut/40)):(It.mat.emissive.copy(It.emissive),It.mat.emissiveIntensity=1)}else Z.spriteMat&&(Z.spriteMat.color.copy(_t?new Vt(1,.35,.35):mt?Uu:St?new Vt(1,.7,.5):te),Z.spriteMat.opacity=mt?.6:Z.ko?Z.spriteMat.opacity:1)}let ro=!1,Hc=0,so=performance.now(),Ye=0,Fc=!1,cs=0,na=0,oo=0,Oc=0;function _d(Z){if(r||document.hidden)return;if(Oc<45){Oc++;return}if(na++,oo+=Z,oo<2500)return;let ut=na*1e3/oo;na=0,oo=0,!(ut>=(n?22:34))&&(n?(r=!0,e.setPixelRatio(s()),wi()):ao.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(ut),lowRes:r}})))}function Hu(Z){if(Hc=requestAnimationFrame(Hu),!t.preview&&document.body.classList.contains("paused")){so=Z;return}t.preview||_d(Z-so);let ut=Math.min(1,Math.max(0,(Z-so)/1e3)),_t=Math.min(.05,ut);so=Z,Ye+=_t;let mt=performance.now(),St=!1;ke.lerp(ee,St?1:performance.now()-Vn.live<300?Math.min(1,ut*14):.05);let It=St?0:Math.sin(Ye*.7)*.025;if(n)a.position.set(c.x+ke.x*.12,c.y-ke.y*.05+It,c.z),a.lookAt(l.clone().add(new R(ke.x*1.5,-ke.y*.75,0))),qe.yaw=0,qe.pitch=0;else{qe.yaw=-ke.x*we,qe.pitch=-ke.y*zn,a.position.set(c.x,c.y+It,c.z);let Dt=l.clone().sub(c).applyAxisAngle(new R(0,1,0),qe.yaw),Et=Dt.clone().cross(new R(0,1,0)).normalize();Dt.applyAxisAngle(Et,qe.pitch),a.lookAt(c.clone().add(Dt))}cs+=((Fc?1:0)-cs)*Math.min(1,_t*4);let Bt=S.get("opp");if(cs>.001&&Bt){let Dt=Bt.group.position,Et=cs*cs*(3-2*cs);a.position.lerp(new R(Dt.x+1.1,1.75+It,Dt.z+3.4),Et),a.lookAt(new R(0,0,-1).applyQuaternion(a.quaternion).multiplyScalar(4).add(a.position).lerp(new R(Dt.x-.1,1.45,Dt.z),Et))}!t.preview&&ro&&fe&&(fe.opp||fe.allies.length)&&Z-qe.sentAt>150&&(Math.abs(qe.yaw-qe.sentYaw)>.02||Math.abs(qe.pitch-qe.sentPitch)>.02)&&(qe.sentAt=Z,qe.sentYaw=qe.yaw,qe.sentPitch=qe.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+qe.yaw.toFixed(3),pitch:+qe.pitch.toFixed(3)}}))),bi>0&&(a.position.add(new R(Pt(-1,1),Pt(-1,1),0).multiplyScalar(bi)),a.rotation.z+=Pt(-1,1)*bi*.15,bi=Math.max(0,bi-_t*1.1)),Nt+=(dt-Nt)*Math.min(1,_t*6),Zt=Math.max(0,Zt-_t*2.2),Kt.x+=(Jt.x-Kt.x)*Math.min(1,_t*14),Kt.y+=(Jt.y-Kt.y)*Math.min(1,_t*14),Kt.z+=(Jt.z-Kt.z)*Math.min(1,_t*14),Zt<=0&&Jt.set(0,0,0);let ue=.5+.5*Math.sin(Ye*6);{let Dt=Math.max(0,1-(mt-ot)/380),Et=Dt>0?Math.sin(Dt*Math.PI):0,Se=Math.min(1,Nt);gt+=((Se>.05&&!St?Math.min(1,.5+Se*.6):0)-gt)*Math.min(1,_t*3),Lt+=_t*(2.6+Se*1.4);let dn=Math.sin(Lt),sr=Math.sin(Lt*2)/2;H.position.set(J.x-ke.x*.04+dn*.06*gt,J.y+ke.y*.03+(St?0:Math.sin(Ye*1.6)*.008)+Se*.03+sr*.11*gt,J.z-Et*.35),$.rotation.set(Se*.25-Et*.75+Kt.x*.3+sr*.18*gt,Kt.y*.3,.2-dn*.24*gt+Kt.z*.3),Xt+=((yt&&At!=="none"&&!Ht?1:0)-Xt)*Math.min(1,ut*3);let en=Xt*Xt*(3-2*Xt);P.visible=en>.02&&(At==="twohand"||At==="lotus"),en>.001&&((At==="float"||At==="lotus")&&(a.position.y+=(At==="lotus"?.3:.2)*en+Math.sin(Ye*1.7)*.04*en),At==="aim"?(H.position.x+=(.12-J.x)*en*.85,H.position.y+=(-.3-J.y)*en*.6,$.rotation.x+=(-1.35-$.rotation.x)*en,$.rotation.z+=(.05-$.rotation.z)*en):(At==="twohand"||At==="lotus")&&(H.position.x+=(.04-J.x)*en,H.position.y+=(J.y-.08-J.y)*en,$.rotation.x+=(.05-$.rotation.x)*en*.8,$.rotation.z+=(0-$.rotation.z)*en,P.scale.setScalar(Math.max(.01,en))));let pn=lt==="ready"?1:0;if(lt==="growing"){let ce=Math.min(1,(mt-st)/wt);if(pn=ce*ce*(3-2*ce),ce>=1)lt="ready";else if(!St){q.gem.getWorldPosition(nt);for(let ze=0;ze<2;ze++){let li=nt.clone().add(new R(Pt(-.4,.4),Pt(-.4,.4),Pt(-.4,.4)));Ot(li,q.color,{size:Pt(.025,.06),vel:nt.clone().sub(li).multiplyScalar(2.8),life:.36})}}}if(q.gem.scale.setScalar(pn),q.gemMat.emissiveIntensity=.7+Se*(1.6+ue*1.2)+Et*3,rt.intensity=(.5+Se*4+Et*6)*pn,q.glow.scale.setScalar((.3+Se*(.32+ue*.18)+Et*.6)*pn),q.glow.material.opacity=.3+Se*.35,q.gem.rotation.y+=_t*(.8+Se*6),q.update(Ye,_t,Se),pn>.9&&!St&&H.visible&&(q.gem.getWorldPosition(nt),gt>.25&&Ot(nt.clone(),q.color,{size:Pt(.03,.05),life:.55,opacity:.9}),Se>.2&&Math.random()<Se*.8)){let ce=nt.clone().add(new R(Pt(-.35,.35),Pt(-.35,.35),Pt(-.35,.35)));Ot(ce,q.color.clone().lerp(new Vt(16777215),.4),{size:Pt(.02,.05),vel:nt.clone().sub(ce).multiplyScalar(2.6),life:.38})}if(yt&&!St&&H.visible)for(let ce=0;ce<2;ce++){let ze=$.localToWorld(new R(Pt(-.05,.05),Pt(-.15,1.3),Pt(-.05,.05)));Ot(ze,yt,{size:Pt(.05,.12),vel:new R(Pt(-.05,.05),Pt(.35,.8),0),life:Pt(.25,.45),solid:Math.random()<.4,opacity:.9})}Tt.uTime.value=St?0:Ye,Tt.uAmount.value+=((yt&&(H.visible||Fc)?1:0)-Tt.uAmount.value)*Math.min(1,ut*3),Ft.visible=Tt.uAmount.value>.01}for(let[Dt,Et]of S){let Se=Et.group.getObjectByName("circle");if(Se&&(Se.rotation.z+=_t*.4),gd(Et,mt),Et.ko)continue;let dn=Math.max(0,Et.lungeUntil-mt)/450;if(Et.model){let ce=Et.model;ce.body.position.y=St?0:Math.sin(Ye*2+Et.height*3)*.02;let ze=Et.look,li=mt-ze.at>4e3,ia=li?.22*Math.sin(Ye*.31+ze.seed)*Math.sin(Ye*.13+ze.seed*2):ze.yaw,Bc=li?.06*Math.sin(Ye*.23+ze.seed*3):ze.pitch;ze.curYaw+=(ia-ze.curYaw)*Math.min(1,_t*7),ze.curPitch+=(Bc-ze.curPitch)*Math.min(1,_t*7),ce.head.rotation.set(-ze.curPitch*.8,ze.curYaw*.7,0),ce.body.rotation.y=ze.curYaw*.3;let Dr=1-dn,Ur=dn<=0?0:Dr<.18?-.35*(Dr/.18):Dr<.4?-.35+1.35*((Dr-.18)/.22):1-((Dr-.4)/.6)**2;ce.body.rotation.x=Math.max(0,Ur)*.2,ce.staffPivot.rotation.x=Ur*1.9;let Oi=Dt==="me"?Nt:(Dt==="opp"||Dt.startsWith("ally:"))&&se?vi==="deck"?.7:.45:0,co=Dt==="me"?0:Oi*(1-Math.max(0,Ur)),xd=-.15-Oi*.75-Math.max(0,Ur)*.9+(Dt==="me"?Kt.x:0)+Math.sin(Ye*4.4)*.22*co;ce.arm.rotation.x+=(xd-ce.arm.rotation.x)*Math.min(1,_t*10),ce.arm.rotation.z=oi+(Dt==="me"?Kt.z:0)+Math.sin(Ye*2.2)*.32*co,ce.arm.rotation.y=Dt==="me"?Kt.y:0;let Nr=Dt==="me"?Nt:Oi;ce.crystalMat.emissiveIntensity=1.2+Nr*(3+ue*2)+dn*3,ce.glow.scale.setScalar(.45+Nr*(.5+ue*.3)+dn*.6),ce.glow.material.opacity=.45+Nr*.5,ce.crystal.rotation.y+=_t*(.8+Nr*6),ce.staff.update(Ye,_t,Nr),Et.poseK+=((Et.flame&&Et.pose!=="none"?1:0)-Et.poseK)*Math.min(1,_t*3),Et.pose!=="none"&&hd(ce,Et.pose,Et.poseK,Ye),Nr>.5&&Math.random()<Nr*.6&&(ce.crystal.getWorldPosition(nt),Ot(nt.clone().add(new R(Pt(-.1,.1),Pt(-.1,.1),Pt(-.1,.1))),ce.staff.color.getHex(),{size:Pt(.03,.08),vel:new R(Pt(-.2,.2),Pt(.2,.6),0),life:.7}))}else Et.sprite&&(Et.sprite.position.y=St?0:Math.abs(Math.sin(Ye*2))*.05,Et.sprite.position.z=dn*.4);let sr=Dt==="opp"&&se&&vi==="deck"||Dt==="boss"&&oe,en=Et.aura.material;en.opacity+=((sr?.55+.2*Math.sin(Ye*5):Et.flame?.35:0)-en.opacity)*Math.min(1,_t*5),en.color.copy(Dt==="boss"?new Vt(16742954):Et.flame??new Vt(11832575)),Et.flame&&me(Et,Et.flame,2);let pn=Et.model?.eyes;if(pn?.visible){let ce=Math.max(0,Et.eyesFlashUntil-mt)/1400,ze=1+.25*Math.sin(Ye*7)+ce*3.5;for(let li of pn.children)li.isSprite&&li.scale.setScalar(.06*ze);!Et.flame&&ce<=0&&(pn.visible=!1)}if(mt<Et.burnUntil&&me(Et,Math.random()<.5?16734746:16756784,3),mt<Et.frostUntil&&Math.random()<.3&&me(Et,13628159,1),Dt==="boss"&&oe&&Math.random()<.8){let ce=zt("boss","mouth"),ze=ce.clone().add(new R(Pt(-1.5,1.5),Pt(-1,1),Pt(-1,1)));Ot(ze,16751162,{size:.12,vel:ce.clone().sub(ze).multiplyScalar(1.6),life:.55})}}for(let Dt of K){let Et=.85+.15*Math.sin(Ye*9+Dt.phase)+.08*Math.sin(Ye*23+Dt.phase*2);Dt.light.intensity=Dt.base*Et,Dt.flame.scale.set(1.2*Et,1.8*(.9+.2*Et),1)}if(W.rotation.z+=_t*.05,De){De.update(Ye*30);for(let Dt of as)Dt.userData.flicker&&(Dt.intensity=Dt.userData.base*(1-Dt.userData.flicker*(.5+.5*Math.sin(Ye*9+Dt.position.x)*Math.sin(Ye*23+Dt.position.z))))}let ae=I.attributes.position;for(let Dt=0;Dt<at;Dt++){let Et=ae.getY(Dt)+_t*(.12+B[Dt]%1*.2);Et>7.5&&(Et=0),ae.setY(Dt,Et),ae.setX(Dt,ae.getX(Dt)+Math.sin(Ye*.5+B[Dt])*_t*.15)}ae.needsUpdate=!0,j.opacity=.55+.35*Math.sin(Ye*1.3);for(let Dt=qn.length-1;Dt>=0;Dt--){let Et=qn[Dt];Et.t+=_t/Et.dur;let Se=Math.min(1,Et.t),dn=Se*Se*(1.6-.6*Se),sr=Et.from.clone().lerp(Et.mid,dn),en=Et.mid.clone().lerp(Et.to,dn);Et.sprite.position.copy(sr.lerp(en,dn)),Et.gem&&(Et.gem.position.copy(Et.sprite.position),Et.gem.rotation.y+=_t*12,Et.gem.rotation.x+=_t*7);let pn=Et.incoming?.55+dn*.25:.55+dn*.8,ce=Et.sprite.material;Et.incoming&&(ce.opacity=1-.75*Math.max(0,Math.min(1,(Se-.35)/.5))),Et.sprite.scale.set(Et.size*.42*pn,Et.size*.42*pn,1),Et.trailAt-=_t,Et.trailAt<=0&&!St&&(Et.trailAt=.016,Ot(Et.sprite.position,Et.color,{size:Pt(.05,.13)*Et.size,life:.35,opacity:.8,vel:new R(Pt(-.3,.3),Pt(-.3,.3),Pt(-.3,.3))})),Se>=1&&(o.remove(Et.sprite),ce.dispose(),Et.gem&&o.remove(Et.gem),qn.splice(Dt,1),Et.done())}for(let Dt=bt.length-1;Dt>=0;Dt--){let Et=bt[Dt];if(Et.life+=_t,Et.life>=Et.max){o.remove(Et.sprite),Et.sprite.material.dispose(),bt.splice(Dt,1);continue}Et.vel.y+=Et.gravity*_t,Et.sprite.position.addScaledVector(Et.vel,_t),Et.grow&&Et.sprite.scale.multiplyScalar(1+Et.grow*_t),Et.sprite.material.opacity=1-Et.life/Et.max}for(let Dt=We.length-1;Dt>=0;Dt--){let Et=We[Dt];Et.life+=_t,Et.line.material.opacity=Et.life<.08||Et.life>.14&&Et.life<.2?1:.15,Et.life>.32&&(o.remove(Et.line),Et.line.geometry.dispose(),Et.line.material.dispose(),We.splice(Dt,1))}for(let Dt=be.length-1;Dt>=0;Dt--){let Et=be[Dt];Et.life+=_t,Et.sprite.position.y+=_t*.8,Et.sprite.material.opacity=Math.min(1,2.2-Et.life*2),Et.life>1.1&&(o.remove(Et.sprite),Et.sprite.material.map?.dispose(),Et.sprite.material.dispose(),be.splice(Dt,1))}e.render(o,a)}function yd(Z,ut,_t){let mt=S.get(Z),St=performance.now();ut==="bolt"&&(Dn(mt?zt(Z,"head"):_t),Z==="me"&&Mi("190,230,255","bolt")),ut==="frost"&&(mt&&(mt.frostUntil=St+1100),qt(_t,13628159,30,2.5,.16),Z==="me"&&Mi("140,210,255","frost")),ut==="fire"&&(mt&&(mt.burnUntil=St+1100),qt(_t,16742954,36,3.4,.24),Z==="me"&&Mi("255,120,30","fire"))}let ao={setup:Un,setActive(Z){Z!==ro&&(ro=Z,i.classList.toggle("on",Z),Z?(wi(),so=performance.now(),Oc=0,na=0,oo=0,Hc=requestAnimationFrame(Hu)):cancelAnimationFrame(Hc))},async cast(Z,ut,_t,mt={}){let St=mt.kind??"attack",It=Z==="me"||Z.startsWith("ally:"),Bt=St==="heal"?"#5dffa8":St==="mana"?"#ffd479":mt.fx==="bolt"?"#bfe6ff":mt.fx==="frost"?"#8fdcff":mt.fx==="fire"?"#ff8a3a":It?"#a98bff":"#ff6b6b",ue=S.get(Z);if(ue&&(ue.lungeUntil=performance.now()+450),Z==="me"&&(Nt=0,dt=0),St!=="attack"){if(Z==="me"&&lt!=="gone"&&H.visible){ot=performance.now(),lt="gone";let ce=new Rt(q.gem.geometry,q.gemMat),ze=zt("me","staff"),li=zt("me","chest"),ia=ze.clone().lerp(li,.5).add(new R(0,.35,0));ce.position.copy(ze),ce.scale.setScalar(1.3),o.add(ce);let Bc=performance.now();await new Promise(Dr=>{let Ur=()=>{let Oi=Math.min(1,(performance.now()-Bc)/520),co=ze.clone().lerp(ia,Oi).lerp(ia.clone().lerp(li,Oi),Oi);ce.position.copy(co),ce.rotation.y+=.3,ce.scale.setScalar(1.3*(1-Oi*.7)),Math.random()<.8&&Ot(co.clone(),Bt,{size:Pt(.03,.07),life:.35,opacity:.9}),Oi<1?requestAnimationFrame(Ur):(o.remove(ce),Dr())};Ur()})}let pn=zt(Z);for(let ce=0;ce<30;ce++)Ot(pn.clone().add(new R(Pt(-.5,.5),Pt(-.8,.2),Pt(-.3,.3))),Bt,{size:Pt(.08,.2),vel:new R(Pt(-.2,.2),Pt(.8,1.8),0),life:Pt(.6,1.1)});Z==="me"&&Mi(St==="heal"?"80,255,160":"255,212,121"),mt.damage&&cn(Z,`+${mt.damage}`,Bt);return}let ae=zt(Z,Z==="boss"?"mouth":"staff"),Dt=ut==="me"&&H.visible,Et=zt(ut,"chest"),Se=Dt?Et.clone().add(new R(Pe(.42,Et.z)-Et.x,-.5,0)):Et,dn=(mt.crit?1.5:1)*1.15,sr=ta(ae,Se,_t,Bt,dn,.85,Dt);if(qn[qn.length-1].target=ut,Z==="me"){ot=performance.now(),lt="gone";let pn=new Rt(q.gem.geometry,q.gemMat);pn.scale.setScalar(1.5),pn.position.copy(ae),o.add(pn),qn[qn.length-1].gem=pn}await sr,Dt?qt(Se,Bt,mt.crit?14:8,mt.crit?1.6:1.1,.12):qt(Se,Bt,mt.crit?46:28,mt.crit?4.4:3.2,.2);let en=S.get(ut);en&&(en.hurtUntil=performance.now()+450),yd(ut,mt.fx,Se),ut==="me"?(mt.fx||Mi(),ni(mt.crit?.16:.09)):ni(mt.crit?.07:.035),mt.damage&&cn(ut,`\u2212${mt.damage}${mt.crit?"!":""}`,ut==="me"?"#ff6b81":mt.crit?"#ff9a3a":"#ffd479")},fizzle(Z){let ut=zt(Z,Z==="boss"?"head":"staff");if(Z!=="me")for(let _t=0;_t<14;_t++)Ot(ut,10132136,{size:Pt(.1,.25),vel:new R(Pt(-.6,.6),Pt(.3,1),Pt(-.3,.3)),life:.8,opacity:.6});if(Z==="me"){if(Nt=0,lt!=="gone"&&H.visible){q.gem.getWorldPosition(nt);for(let _t=0;_t<16;_t++)Ot(nt.clone(),Math.random()<.5?q.color:10132136,{size:Pt(.02,.05),vel:new R(Pt(-.8,.8),Pt(-.2,.9),Pt(-.5,.5)),life:Pt(.4,.7),gravity:-2.5})}lt="gone"}},ko(Z){if(qn.some(St=>St.target===Z)&&!Cr.has(Z)){Cr.add(Z);let St=performance.now(),It=()=>{if(qn.some(Bt=>Bt.target===Z)&&performance.now()-St<2500){setTimeout(It,60);return}setTimeout(()=>{Cr.delete(Z),ao.ko(Z)},120)};It();return}if(Cr.has(Z))return;if(Z==="me"){if(Ht)return;Ht=!0,yt=null,q.gem.getWorldPosition(nt),qt(nt.clone(),10132136,18,1.6,.1),H.visible=!1;return}let ut=S.get(Z);if(!ut||ut.ko)return;ut.ko=!0,ut.flame=null,ut.aura.material.opacity=0;let _t=performance.now(),mt=()=>{let St=Math.min(1,(performance.now()-_t)/700),It=St*St;ut.model?(ut.model.root.rotation.z=Math.PI/2*It,ut.model.root.position.y=.24*It):ut.spriteMat&&(ut.spriteMat.rotation=Math.PI/2*St*-1,ut.spriteMat.opacity=1-St*.6),St<1&&requestAnimationFrame(mt)};mt(),qt(zt(Z),16777215,40,3,.25)},onfire(Z,ut,_t){if(Z==="me"){yt=ut&&!Ht?new Vt(_t??"#6ee7ff"):null,yt&&ne(yt);return}let mt=S.get(Z);mt&&(mt.flame=ut?new Vt(_t??"#6ee7ff"):null),mt?.model?.eyes&&(mt.model.eyes.visible=ut)},setPose(Z,ut){let _t=Xo(ut)?ut:"none";if(Z==="me"){At=_t;return}let mt=S.get(Z);mt&&(mt.pose=_t)},focusOpp(Z){Fc=Z,H.visible=!Z},prewarm(Z,ut){if(!t.preview)return;let _t=Z.filter(It=>!Pr.has(`${It}-${ut}-${n}`)),mt=It=>(globalThis.requestIdleCallback??(Bt=>setTimeout(Bt,200)))(It,{timeout:2e3}),St=()=>{let It=_t.shift();if(!It)return;let Bt=`${It}-${ut}-${n}`;if(!Pr.has(Bt))try{let ue=Cu(It,ut,n);ue&&Pr.set(Bt,ue)}catch{}mt(St)};mt(St)},setBackground(Z,ut,_t){fe&&(fe={...fe,bgKey:Z,time:ut,bgSvg:_t},Ce(fe))},flashEyes(Z){let ut=S.get(Z);ut?.model?.eyes&&(ut.model.eyes.visible=!0,ut.eyesFlashUntil=performance.now()+1400)},channel(Z){dt=Math.max(0,Math.min(1,Z))},twitch(){vt(),Zt=.35,Jt.set(Pt(-.35,.25),Pt(-.25,.25),Pt(-.3,.3)),Math.random()<.6&&lt==="ready"&&(q.gem.getWorldPosition(nt),Ot(nt.clone(),q.color.clone().lerp(new Vt(16777215),.5),{size:Pt(.04,.09),vel:new R(Pt(-.6,.6),Pt(.2,.9),Pt(-.3,.3)),life:.5}))},thrust(){ot=performance.now(),q.gem.getWorldPosition(nt),qt(nt.clone(),q.color,18,1.6,.08)},oppChannel(Z){se=Z},inhale(Z){oe=Z},breath(Z,ut){oe=!1;let _t=zt("boss","mouth");for(let mt=0;mt<160;mt++)setTimeout(()=>{let It=(Z.length?zt(Z[mt%Z.length]):a.localToWorld(new R(0,-.2,-1))).clone().add(new R(Pt(-1.5,1.5),Pt(-.8,.8),0)).sub(_t).normalize().multiplyScalar(Pt(7,11));Ot(_t,Math.random()<.4?16765530:16734746,{size:Pt(.3,.7),vel:It,life:Pt(.6,.9),grow:1.2})},mt*5);setTimeout(()=>{for(let mt of Z){let St=S.get(mt);St&&(St.hurtUntil=performance.now()+500,St.burnUntil=performance.now()+900),cn(mt,`\u2212${ut}`,"#ff9a3a")}Z.includes("me")&&(Mi("255,120,30"),ni(.16))},450)},claw(Z,ut){let _t=S.get("boss");_t&&(_t.lungeUntil=performance.now()+450),setTimeout(()=>{let mt=S.get(Z);mt&&(mt.hurtUntil=performance.now()+450),Z==="me"&&(Mi("255,40,60","claw"),ni(.13)),cn(Z,`\u2212${ut}`,"#ff6b81")},200)},float:cn,look(Z,ut,_t){let mt=S.get(Z);!mt||!Number.isFinite(ut)||!Number.isFinite(_t)||(mt.look.yaw=Math.max(-we,Math.min(we,ut)),mt.look.pitch=Math.max(-zn,Math.min(zn,_t)),mt.look.at=performance.now())},setLite(Z){let ut=n!==Z;n=Z,ut&&De&&fe&&(ss="",Un(fe)),e.setPixelRatio(s()),L.count=Z?900:b,I.setDrawRange(0,Z?90:at),wi()},dispose(){ao.setActive(!1),Du?.disconnect(),removeEventListener("pointermove",Nn),removeEventListener("devicemotion",Ir),removeEventListener("touchend",Lr),removeEventListener("resize",wi),Sn.remove(),De&&(De.dispose(),De=null),e.dispose()}};n&&ao.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return q},get gemState(){return lt},scene:o,camera:a,renderer:e}),wi();try{e.compile(o,a)}catch{}return ao}globalThis.KWArena3D=Vx;globalThis.KWStaffPreview=Bf;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
