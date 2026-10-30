"use strict";(()=>{var rd=Object.defineProperty;var sd=(i,t,e)=>t in i?rd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ze=(i,t,e)=>sd(i,typeof t!="symbol"?t+"":t,e);var od=0,Ru=1,ad=2;var F0=1,cd=2,Oi=3,Un=0,Xn=1,Le=2,dr=0,bi=1,fn=2,Au=3,Cu=4,ld=5,Br=100,hd=101,ud=102,fd=103,dd=104,pd=200,md=201,gd=202,_d=203,ml=204,gl=205,yd=206,xd=207,Md=208,bd=209,vd=210,Ed=211,wd=212,Sd=213,Td=214,_l=0,yl=1,xl=2,Cs=3,Ml=4,bl=5,vl=6,El=7,zh=0,Vh=1,Rd=2,pr=0,Ad=1,Cd=2,Pd=3,Bo=4,Id=5,Ld=6,Dd=7;var O0=300,Ps=301,Is=302,So=303,wl=304,fc=306,Vr=1e3,ki=1001,Sl=1002,Rn=1003,Ud=1004;var jo=1005;var hi=1006,Dc=1007;var zr=1008;var Vi=1009,B0=1010,k0=1011,To=1012,Gh=1013,Gr=1014,Mi=1015,ko=1016,Wh=1017,Xh=1018,Ls=1020,z0=35902,V0=1021,G0=1022,fi=1023,W0=1024,X0=1025,Ts=1026,Ds=1027,qh=1028,Yh=1029,q0=1030,Zh=1031;var $h=1033,Ia=33776,La=33777,Da=33778,Ua=33779,Tl=35840,Rl=35841,Al=35842,Cl=35843,Pl=36196,Il=37492,Ll=37496,Dl=37808,Ul=37809,Nl=37810,Hl=37811,Fl=37812,Ol=37813,Bl=37814,kl=37815,zl=37816,Vl=37817,Gl=37818,Wl=37819,Xl=37820,ql=37821,Na=36492,Yl=36494,Zl=36495,Y0=36283,$l=36284,Kl=36285,Jl=36286;var Fa=2300,jl=2301,Uc=2302,Pu=2400,Iu=2401,Lu=2402;var Nd=3200,Hd=3201;var Kh=0,Fd=1,ur="",on="srgb",yr="srgb-linear",Jh="display-p3",dc="display-p3-linear",Oa="linear",qe="srgb",Ba="rec709",ka="p3";var ss=7680;var Du=519,Od=512,Bd=513,kd=514,Z0=515,zd=516,Vd=517,Gd=518,Wd=519,Ql=35044;var Uu="300 es",zi=2e3,za=2001,mr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=1234567,xo=Math.PI/180,Ro=180/Math.PI;function vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function bn(i,t,e){return Math.max(t,Math.min(e,i))}function jh(i,t){return(i%t+t)%t}function Xd(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function qd(i,t,e){return i!==t?(e-i)/(t-i):0}function Mo(i,t,e){return(1-e)*i+e*t}function Yd(i,t,e,n){return Mo(i,t,1-Math.exp(-e*n))}function Zd(i,t=1){return t-Math.abs(jh(i,t*2)-t)}function $d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jd(i,t){return i+Math.random()*(t-i)}function Qd(i){return i*(.5-Math.random())}function tp(i){i!==void 0&&(Nu=i);let t=Nu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ep(i){return i*xo}function np(i){return i*Ro}function ip(i){return(i&i-1)===0&&i!==0}function rp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function op(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vs={DEG2RAD:xo,RAD2DEG:Ro,generateUUID:vi,clamp:bn,euclideanModulo:jh,mapLinear:Xd,inverseLerp:qd,lerp:Mo,damp:Yd,pingpong:Zd,smoothstep:$d,smootherstep:Kd,randInt:Jd,randFloat:jd,randFloatSpread:Qd,seededRandom:tp,degToRad:ep,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:rp,floorPowerOfTwo:sp,setQuaternionFromProperEuler:op,normalize:He,denormalize:ui},Nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],x=r[1],M=r[4],b=r[7],D=r[2],P=r[5],A=r[8];return s[0]=o*_+a*x+c*D,s[3]=o*f+a*M+c*P,s[6]=o*p+a*b+c*A,s[1]=l*_+h*x+u*D,s[4]=l*f+h*M+u*P,s[7]=l*p+h*b+u*A,s[2]=d*_+m*x+g*D,s[5]=d*f+m*M+g*P,s[8]=d*p+m*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=e*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nc.makeScale(t,e)),this}rotate(t){return this.premultiply(Nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new me;function $0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ap(){let i=Va("canvas");return i.style.display="block",i}var Hu={};function Ha(i){i in Hu||(Hu[i]=!0,console.warn(i))}function cp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function lp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Fu=new me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ou=new me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),so={[yr]:{transfer:Oa,primaries:Ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[on]:{transfer:qe,primaries:Ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[dc]:{transfer:Oa,primaries:ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ou),fromReference:i=>i.applyMatrix3(Fu)},[Jh]:{transfer:qe,primaries:ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ou),fromReference:i=>i.applyMatrix3(Fu).convertLinearToSRGB()}},up=new Set([yr,dc]),Ue={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!up.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=so[t].toReference,r=so[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return so[i].primaries},getTransfer:function(i){return i===ur?Oa:so[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(so[t].luminanceCoefficients)}};function Rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var os,th=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Va("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Va("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rs(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rs(e[n]/255)*255):e[n]=Rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fp=0,Ga=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fc(r[o].image)):s.push(Fc(r[o]))}else s=Fc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dp=0,qn=class i extends mr{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ki,r=ki,s=hi,o=zr,a=fi,c=Vi,l=i.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=vi(),this.name="",this.source=new Ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==O0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=O0;qn.DEFAULT_ANISOTROPY=1;var Oe=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,b=(m+1)/2,D=(p+1)/2,P=(h+d)/4,A=(u+_)/4,C=(g+f)/4;return M>b&&M>D?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=P/n,s=A/n):b>D?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=P/r,s=C/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=A/s,r=C/s),this.set(n,r,s,e),this}let x=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eh=class extends mr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new qn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ga(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gi=class extends eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Wa=class extends qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nh=class extends qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let D=Math.sqrt(M),P=Math.atan2(D,p*x);f=Math.sin(f*P)/D,a=Math.sin(a*P)/D}let b=a*x;if(c=c*f+d*b,l=l*f+m*b,h=h*f+g*b,u=u*f+_*b,f===1-a){let D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oc.copy(this).projectOnVector(t),this.sub(Oc)}reflect(t){return this.sub(Oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new T,Bu=new En,Wi=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),ta.subVectors(this.max,oo),as.subVectors(t.a,oo),cs.subVectors(t.b,oo),ls.subVectors(t.c,oo),sr.subVectors(cs,as),or.subVectors(ls,cs),Lr.subVectors(as,ls);let e=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Lr.z,Lr.y,sr.z,0,-sr.x,or.z,0,-or.x,Lr.z,0,-Lr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Lr.y,Lr.x,0];return!Bc(e,as,cs,ls,ta)||(e=[1,0,0,0,1,0,0,0,1],!Bc(e,as,cs,ls,ta))?!1:(ea.crossVectors(sr,or),e=[ea.x,ea.y,ea.z],Bc(e,as,cs,ls,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Di=[new T,new T,new T,new T,new T,new T,new T,new T],ai=new T,Qo=new Wi,as=new T,cs=new T,ls=new T,sr=new T,or=new T,Lr=new T,oo=new T,ta=new T,ea=new T,Dr=new T;function Bc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Dr.fromArray(i,s);let a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),c=t.dot(Dr),l=e.dot(Dr),h=n.dot(Dr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var pp=new Wi,ao=new T,kc=new T,Xi=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pp.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);let e=ao.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ao,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(kc)),this.expandByPoint(ao.copy(t.center).sub(kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ui=new T,zc=new T,na=new T,ar=new T,Vc=new T,ia=new T,Gc=new T,Ao=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){zc.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),ar.copy(this.origin).sub(zc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(na),a=ar.dot(this.direction),c=-ar.dot(na),l=ar.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zc).addScaledVector(na,d),m}intersectSphere(t,e){Ui.subVectors(t.center,this.origin);let n=Ui.dot(this.direction),r=Ui.dot(Ui)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,r,s){Vc.subVectors(e,t),ia.subVectors(n,t),Gc.crossVectors(Vc,ia);let o=this.direction.dot(Gc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,t);let c=a*this.direction.dot(ia.crossVectors(ar,ia));if(c<0)return null;let l=a*this.direction.dot(Vc.cross(ar));if(l<0||c+l>o)return null;let h=-a*ar.dot(Gc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f)}set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,gp)}lookAt(t,e,n){let r=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),cr.crossVectors(n,Kn),cr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),cr.crossVectors(n,Kn)),cr.normalize(),ra.crossVectors(Kn,cr),r[0]=cr.x,r[4]=ra.x,r[8]=Kn.x,r[1]=cr.y,r[5]=ra.y,r[9]=Kn.y,r[2]=cr.z,r[6]=ra.z,r[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],x=n[3],M=n[7],b=n[11],D=n[15],P=r[0],A=r[4],C=r[8],U=r[12],y=r[1],v=r[5],W=r[9],j=r[13],ot=r[2],st=r[6],Y=r[10],pt=r[14],L=r[3],J=r[7],V=r[11],Z=r[15];return s[0]=o*P+a*y+c*ot+l*L,s[4]=o*A+a*v+c*st+l*J,s[8]=o*C+a*W+c*Y+l*V,s[12]=o*U+a*j+c*pt+l*Z,s[1]=h*P+u*y+d*ot+m*L,s[5]=h*A+u*v+d*st+m*J,s[9]=h*C+u*W+d*Y+m*V,s[13]=h*U+u*j+d*pt+m*Z,s[2]=g*P+_*y+f*ot+p*L,s[6]=g*A+_*v+f*st+p*J,s[10]=g*C+_*W+f*Y+p*V,s[14]=g*U+_*j+f*pt+p*Z,s[3]=x*P+M*y+b*ot+D*L,s[7]=x*A+M*v+b*st+D*J,s[11]=x*C+M*W+b*Y+D*V,s[15]=x*U+M*j+b*pt+D*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*m-n*c*m)+_*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],x=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,M=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,b=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,D=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,P=e*x+n*M+r*b+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/P;return t[0]=x*A,t[1]=(_*d*s-u*f*s-_*r*m+n*f*m+u*r*p-n*d*p)*A,t[2]=(a*f*s-_*c*s+_*r*l-n*f*l-a*r*p+n*c*p)*A,t[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*m-n*c*m)*A,t[4]=M*A,t[5]=(h*f*s-g*d*s+g*r*m-e*f*m-h*r*p+e*d*p)*A,t[6]=(g*c*s-o*f*s-g*r*l+e*f*l+o*r*p-e*c*p)*A,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*m+e*c*m)*A,t[8]=b*A,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*A,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*A,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*A,t[12]=D*A,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*f+e*u*f)*A,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*f-e*a*f)*A,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,f=o*u,p=a*u,x=c*l,M=c*h,b=c*u,D=n.x,P=n.y,A=n.z;return r[0]=(1-(_+p))*D,r[1]=(m+b)*D,r[2]=(g-M)*D,r[3]=0,r[4]=(m-b)*P,r[5]=(1-(d+p))*P,r[6]=(f+x)*P,r[7]=0,r[8]=(g+M)*A,r[9]=(f-x)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=hs.set(r[0],r[1],r[2]).length(),o=hs.set(r[4],r[5],r[6]).length(),a=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ci.copy(this);let l=1/s,h=1/o,u=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,e.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=zi){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r),m,g;if(a===zi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===za)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=zi){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*l,m=(n+r)*h,g,_;if(a===zi)g=(o+s)*u,_=-2*u;else if(a===za)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new T,ci=new ce,mp=new T(0,0,0),gp=new T(1,1,1),cr=new T,ra=new T,Kn=new T,ku=new ce,zu=new En,wn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(bn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zu.setFromEuler(this),this.setFromQuaternion(zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Xa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_p=0,Vu=new T,us=new En,Ni=new ce,sa=new T,co=new T,yp=new T,xp=new En,Gu=new T(1,0,0),Wu=new T(0,1,0),Xu=new T(0,0,1),qu={type:"added"},Mp={type:"removed"},fs={type:"childadded",child:null},Wc={type:"childremoved",child:null},dn=class i extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new wn,n=new En,r=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new me}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Gu,t)}rotateY(t){return this.rotateOnAxis(Wu,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gu,t)}translateY(t){return this.translateOnAxis(Wu,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(co,sa,this.up):Ni.lookAt(sa,co,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Ni),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qu),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mp),Wc.child=t,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qu),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};dn.DEFAULT_UP=new T(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new T,Hi=new T,Xc=new T,Fi=new T,ds=new T,ps=new T,Yu=new T,qc=new T,Yc=new T,Zc=new T,$c=new Oe,Kc=new Oe,Jc=new Oe,fr=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),li.subVectors(t,e),r.cross(li);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){li.subVectors(r,e),Hi.subVectors(n,e),Xc.subVectors(t,e);let o=li.dot(li),a=li.dot(Hi),c=li.dot(Xc),l=Hi.dot(Hi),h=Hi.dot(Xc),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fi.x),c.addScaledVector(o,Fi.y),c.addScaledVector(a,Fi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return $c.setScalar(0),Kc.setScalar(0),Jc.setScalar(0),$c.fromBufferAttribute(t,e),Kc.fromBufferAttribute(t,n),Jc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector($c,s.x),o.addScaledVector(Kc,s.y),o.addScaledVector(Jc,s.z),o}static isFrontFacing(t,e,n,r){return li.subVectors(n,e),Hi.subVectors(t,e),li.cross(Hi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),li.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;ds.subVectors(r,n),ps.subVectors(s,n),qc.subVectors(t,n);let c=ds.dot(qc),l=ps.dot(qc);if(c<=0&&l<=0)return e.copy(n);Yc.subVectors(t,r);let h=ds.dot(Yc),u=ps.dot(Yc);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ds,o);Zc.subVectors(t,s);let m=ds.dot(Zc),g=ps.dot(Zc);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ps,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Yu.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(Yu,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},oa={h:0,s:0,l:0};function jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ue.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Ue.workingColorSpace){if(t=jh(t,1),e=bn(e,0,1),n=bn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=jc(o,s,t+1/3),this.g=jc(o,s,t),this.b=jc(o,s,t-1/3)}return Ue.toWorkingColorSpace(this,r),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=K0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=Hc(t.r),this.g=Hc(t.g),this.b=Hc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Ue.fromWorkingColorSpace(Dn.copy(this),t),Math.round(bn(Dn.r*255,0,255))*65536+Math.round(bn(Dn.g*255,0,255))*256+Math.round(bn(Dn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Dn.copy(this),e);let n=Dn.r,r=Dn.g,s=Dn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Dn.copy(this),e),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=on){Ue.fromWorkingColorSpace(Dn.copy(this),t);let e=Dn.r,n=Dn.g,r=Dn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+e,lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(lr),t.getHSL(oa);let n=Mo(lr.h,oa.h,e),r=Mo(lr.s,oa.s,e),s=Mo(lr.l,oa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new zt;zt.NAMES=K0;var bp=0,di=class extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=bi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},an=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var un=new T,aa=new Nt,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ql,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ql&&(t.usage=this.usage),t}};var qa=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ya=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},vp=0,ei=new ce,Qc=new dn,ms=new T,Jn=new Wi,lo=new Wi,Mn=new T,be=class i extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($0(t)?Ya:qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new me().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,n){return ei.makeTranslation(t,e,n),this.applyMatrix4(ei),this}scale(t,e,n){return ei.makeScale(t,e,n),this.applyMatrix4(ei),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Jn.min,lo.min),Jn.expandByPoint(Mn),Mn.addVectors(Jn.max,lo.max),Jn.expandByPoint(Mn)):(Jn.expandByPoint(lo.min),Jn.expandByPoint(lo.max))}Jn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Mn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Mn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Mn.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(t,l),Mn.add(ms)),r=Math.max(r,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new T,c[C]=new T;let l=new T,h=new T,u=new T,d=new Nt,m=new Nt,g=new Nt,_=new T,f=new T;function p(C,U,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,U),g.fromBufferAttribute(s,y),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let v=1/(m.x*g.y-g.x*m.y);isFinite(v)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(v),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(v),a[C].add(_),a[U].add(_),a[y].add(_),c[C].add(f),c[U].add(f),c[y].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,U=x.length;C<U;++C){let y=x[C],v=y.start,W=y.count;for(let j=v,ot=v+W;j<ot;j+=3)p(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let M=new T,b=new T,D=new T,P=new T;function A(C){D.fromBufferAttribute(r,C),P.copy(D);let U=a[C];M.copy(U),M.sub(D.multiplyScalar(D.dot(U))).normalize(),b.crossVectors(P,U);let v=b.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,v)}for(let C=0,U=x.length;C<U;++C){let y=x[C],v=y.start,W=y.count;for(let j=v,ot=v+W;j<ot;j+=3)A(t.getX(j+0)),A(t.getX(j+1)),A(t.getX(j+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new T,s=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Mn.fromBufferAttribute(t,e),Mn.normalize(),t.setXYZ(e,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new De(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zu=new ce,Ur=new Ao,ca=new Xi,$u=new T,la=new T,ha=new T,ua=new T,tl=new T,fa=new T,Ku=new T,da=new T,St=class extends dn{constructor(t=new be,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){fa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(tl.fromBufferAttribute(u,t),o?fa.addScaledVector(tl,h):fa.addScaledVector(tl.sub(e),h))}e.add(fa)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),Ur.copy(t.ray).recast(t.near),!(ca.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(ca,$u)===null||Ur.origin.distanceToSquared($u)>(t.far-t.near)**2))&&(Zu.copy(s).invert(),Ur.copy(t.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ur)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],x=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=x,D=M;b<D;b+=3){let P=a.getX(b),A=a.getX(b+1),C=a.getX(b+2);r=pa(this,p,t,n,l,h,u,P,A,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let x=a.getX(f),M=a.getX(f+1),b=a.getX(f+2);r=pa(this,o,t,n,l,h,u,x,M,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],x=Math.max(f.start,m.start),M=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=x,D=M;b<D;b+=3){let P=b,A=b+1,C=b+2;r=pa(this,p,t,n,l,h,u,P,A,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let x=f,M=f+1,b=f+2;r=pa(this,o,t,n,l,h,u,x,M,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}};function Ep(i,t,e,n,r,s,o,a){let c;if(t.side===Xn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Un,a),c===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(da);return l<e.near||l>e.far?null:{distance:l,point:da.clone(),object:i}}function pa(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,la),i.getVertexPosition(c,ha),i.getVertexPosition(l,ua);let h=Ep(i,t,e,n,la,ha,ua,Ku);if(h){let u=new T;fr.getBarycoord(Ku,la,ha,ua,u),r&&(h.uv=fr.getInterpolatedAttribute(r,a,c,l,u,new Nt)),s&&(h.uv1=fr.getInterpolatedAttribute(s,a,c,l,u,new Nt)),o&&(h.normal=fr.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new T,materialIndex:0};fr.getNormal(la,ha,ua,d.normal),h.face=d,h.barycoord=u}return h}var en=class i extends be{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,f,p,x,M,b,D,P,A,C,U){let y=b/A,v=D/C,W=b/2,j=D/2,ot=P/2,st=A+1,Y=C+1,pt=0,L=0,J=new T;for(let V=0;V<Y;V++){let Z=V*v-j;for(let ct=0;ct<st;ct++){let N=ct*y-W;J[_]=N*x,J[f]=Z*M,J[p]=ot,l.push(J.x,J.y,J.z),J[_]=0,J[f]=0,J[p]=P>0?1:-1,h.push(J.x,J.y,J.z),u.push(ct/A),u.push(1-V/C),pt+=1}}for(let V=0;V<C;V++)for(let Z=0;Z<A;Z++){let ct=d+Z+st*V,N=d+Z+st*(V+1),S=d+(Z+1)+st*(V+1),R=d+(Z+1)+st*V;c.push(ct,N,R),c.push(N,S,R),L+=6}a.addGroup(m,L,U),m+=L,d+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function kn(i){let t={};for(let e=0;e<i.length;e++){let n=Us(i[e]);for(let r in n)t[r]=n[r]}return t}function wp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function J0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}var Sp={clone:Us,merge:kn},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Za=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hr=new T,Ju=new Nt,ju=new Nt,vn=class extends Za{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,ju),e.subVectors(ju,Ju)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,_s=1,ih=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vn(gs,_s,t,e);r.layers=this.layers,this.add(r);let s=new vn(gs,_s,t,e);s.layers=this.layers,this.add(s);let o=new vn(gs,_s,t,e);o.layers=this.layers,this.add(o);let a=new vn(gs,_s,t,e);a.layers=this.layers,this.add(a);let c=new vn(gs,_s,t,e);c.layers=this.layers,this.add(c);let l=new vn(gs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$a=class extends qn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rh=class extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new $a(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new en(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:dr});s.uniforms.tEquirect.value=e;let o=new St(r,s),a=e.minFilter;return e.minFilter===zr&&(e.minFilter=hi),new ih(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},el=new T,Ap=new T,Cp=new me,Bi=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=el.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(el),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cp.getNormalMatrix(t),r=this.coplanarPoint(el).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nr=new Xi,ma=new T,Co=class{constructor(t=new Bi,e=new Bi,n=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],x=r[13],M=r[14],b=r[15];if(n[0].setComponents(c-s,d-l,f-m,b-p).normalize(),n[1].setComponents(c+s,d+l,f+m,b+p).normalize(),n[2].setComponents(c+o,d+h,f+g,b+x).normalize(),n[3].setComponents(c-o,d-h,f-g,b-x).normalize(),n[4].setComponents(c-a,d-u,f-_,b-M).normalize(),e===zi)n[5].setComponents(c+a,d+u,f+_,b+M).normalize();else if(e===za)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ma.x=r.normal.x>0?t.max.x:t.min.x,ma.y=r.normal.y>0?t.max.y:t.min.y,ma.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function j0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Pp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var qi=class i extends be{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let x=p*d-o;for(let M=0;M<l;M++){let b=M*u-s;g.push(b,-x,0),_.push(0,0,1),f.push(M/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let M=x+l*p,b=x+l*(p+1),D=x+1+l*(p+1),P=x+1+l*p;m.push(M,b,P),m.push(b,D,P)}this.setIndex(m),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tm=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",cm=`
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
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Cm=`struct PhysicalMaterial {
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
}`,Pm=`
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,Og=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
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
}`,Zg=`#define MATCAP
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
}`,$g=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,Qg=`#define PHONG
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
}`,t1=`#define STANDARD
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
}`,e1=`#define STANDARD
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
}`,n1=`#define TOON
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
}`,i1=`#define TOON
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
}`,r1=`uniform float size;
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
}`,s1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,a1=`uniform vec3 color;
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
}`,c1=`uniform float rotation;
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
}`,l1=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:Ip,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Up,alphatest_fragment:Np,alphatest_pars_fragment:Hp,aomap_fragment:Fp,aomap_pars_fragment:Op,batching_pars_vertex:Bp,batching_vertex:kp,begin_vertex:zp,beginnormal_vertex:Vp,bsdfs:Gp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:$p,color_fragment:Kp,color_pars_fragment:Jp,color_pars_vertex:jp,color_vertex:Qp,common:tm,cube_uv_reflection_fragment:em,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:rm,emissivemap_fragment:sm,emissivemap_pars_fragment:om,colorspace_fragment:am,colorspace_pars_fragment:cm,envmap_fragment:lm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:fm,envmap_physical_pars_fragment:Em,envmap_vertex:dm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:_m,gradientmap_pars_fragment:ym,lightmap_pars_fragment:xm,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:bm,lights_pars_begin:vm,lights_toon_fragment:wm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Rm,lights_physical_fragment:Am,lights_physical_pars_fragment:Cm,lights_fragment_begin:Pm,lights_fragment_maps:Im,lights_fragment_end:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Hm,map_fragment:Fm,map_pars_fragment:Om,map_particle_fragment:Bm,map_particle_pars_fragment:km,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Gm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:Zm,normal_fragment_maps:$m,normal_pars_fragment:Km,normal_pars_vertex:Jm,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:rg,packing:sg,premultiplied_alpha_fragment:og,project_vertex:ag,dithering_fragment:cg,dithering_pars_fragment:lg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:dg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:yg,skinnormal_vertex:xg,specularmap_fragment:Mg,specularmap_pars_fragment:bg,tonemapping_fragment:vg,tonemapping_pars_fragment:Eg,transmission_fragment:wg,transmission_pars_fragment:Sg,uv_pars_fragment:Tg,uv_pars_vertex:Rg,uv_vertex:Ag,worldpos_vertex:Cg,background_vert:Pg,background_frag:Ig,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:Ug,cube_frag:Ng,depth_vert:Hg,depth_frag:Fg,distanceRGBA_vert:Og,distanceRGBA_frag:Bg,equirect_vert:kg,equirect_frag:zg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:Zg,meshmatcap_frag:$g,meshnormal_vert:Kg,meshnormal_frag:Jg,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:t1,meshphysical_frag:e1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:r1,points_frag:s1,shadow_vert:o1,shadow_frag:a1,sprite_vert:c1,sprite_frag:l1},qt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},xi={basic:{uniforms:kn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:kn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new zt(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:kn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:kn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:kn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new zt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:kn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:kn([qt.points,qt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:kn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:kn([qt.common,qt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:kn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:kn([qt.sprite,qt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:kn([qt.common,qt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:kn([qt.lights,qt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};xi.physical={uniforms:kn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var ga={r:0,b:0,g:0},Hr=new wn,h1=new ce;function u1(i,t,e,n,r,s,o){let a=new zt(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1,b=g(x);b===null?p(a,c):b&&b.isColor&&(p(b,1),M=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,M){let b=g(M);b&&(b.isCubeTexture||b.mapping===fc)?(h===void 0&&(h=new St(new en(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Us(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Hr.copy(M.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(Hr)),h.material.toneMapped=Ue.getTransfer(b.colorSpace)!==qe,(u!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new St(new qi(2,2),new Yn({name:"BackgroundMaterial",uniforms:Us(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ue.getTransfer(b.colorSpace)!==qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(ga,J0(i)),n.buffers.color.setClear(ga.r,ga.g,ga.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:f}}function f1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(y,v,W,j,ot){let st=!1,Y=u(j,W,v);s!==Y&&(s=Y,l(s.object)),st=m(y,j,W,ot),st&&g(y,j,W,ot),ot!==null&&t.update(ot,i.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,b(y,v,W,j),ot!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,v,W){let j=W.wireframe===!0,ot=n[y.id];ot===void 0&&(ot={},n[y.id]=ot);let st=ot[v.id];st===void 0&&(st={},ot[v.id]=st);let Y=st[j];return Y===void 0&&(Y=d(c()),st[j]=Y),Y}function d(y){let v=[],W=[],j=[];for(let ot=0;ot<e;ot++)v[ot]=0,W[ot]=0,j[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:W,attributeDivisors:j,object:y,attributes:{},index:null}}function m(y,v,W,j){let ot=s.attributes,st=v.attributes,Y=0,pt=W.getAttributes();for(let L in pt)if(pt[L].location>=0){let V=ot[L],Z=st[L];if(Z===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),V===void 0||V.attribute!==Z||Z&&V.data!==Z.data)return!0;Y++}return s.attributesNum!==Y||s.index!==j}function g(y,v,W,j){let ot={},st=v.attributes,Y=0,pt=W.getAttributes();for(let L in pt)if(pt[L].location>=0){let V=st[L];V===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(V=y.instanceColor));let Z={};Z.attribute=V,V&&V.data&&(Z.data=V.data),ot[L]=Z,Y++}s.attributes=ot,s.attributesNum=Y,s.index=j}function _(){let y=s.newAttributes;for(let v=0,W=y.length;v<W;v++)y[v]=0}function f(y){p(y,0)}function p(y,v){let W=s.newAttributes,j=s.enabledAttributes,ot=s.attributeDivisors;W[y]=1,j[y]===0&&(i.enableVertexAttribArray(y),j[y]=1),ot[y]!==v&&(i.vertexAttribDivisor(y,v),ot[y]=v)}function x(){let y=s.newAttributes,v=s.enabledAttributes;for(let W=0,j=v.length;W<j;W++)v[W]!==y[W]&&(i.disableVertexAttribArray(W),v[W]=0)}function M(y,v,W,j,ot,st,Y){Y===!0?i.vertexAttribIPointer(y,v,W,ot,st):i.vertexAttribPointer(y,v,W,j,ot,st)}function b(y,v,W,j){_();let ot=j.attributes,st=W.getAttributes(),Y=v.defaultAttributeValues;for(let pt in st){let L=st[pt];if(L.location>=0){let J=ot[pt];if(J===void 0&&(pt==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),pt==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){let V=J.normalized,Z=J.itemSize,ct=t.get(J);if(ct===void 0)continue;let N=ct.buffer,S=ct.type,R=ct.bytesPerElement,H=S===i.INT||S===i.UNSIGNED_INT||J.gpuType===Gh;if(J.isInterleavedBufferAttribute){let q=J.data,B=q.stride,F=J.offset;if(q.isInstancedInterleavedBuffer){for(let G=0;G<L.locationSize;G++)p(L.location+G,q.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let G=0;G<L.locationSize;G++)f(L.location+G);i.bindBuffer(i.ARRAY_BUFFER,N);for(let G=0;G<L.locationSize;G++)M(L.location+G,Z/L.locationSize,S,V,B*R,(F+Z/L.locationSize*G)*R,H)}else{if(J.isInstancedBufferAttribute){for(let q=0;q<L.locationSize;q++)p(L.location+q,J.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let q=0;q<L.locationSize;q++)f(L.location+q);i.bindBuffer(i.ARRAY_BUFFER,N);for(let q=0;q<L.locationSize;q++)M(L.location+q,Z/L.locationSize,S,V,Z*R,Z/L.locationSize*q*R,H)}}else if(Y!==void 0){let V=Y[pt];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(L.location,V);break;case 3:i.vertexAttrib3fv(L.location,V);break;case 4:i.vertexAttrib4fv(L.location,V);break;default:i.vertexAttrib1fv(L.location,V)}}}}x()}function D(){C();for(let y in n){let v=n[y];for(let W in v){let j=v[W];for(let ot in j)h(j[ot].object),delete j[ot];delete v[W]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;let v=n[y.id];for(let W in v){let j=v[W];for(let ot in j)h(j[ot].object),delete j[ot];delete v[W]}delete n[y.id]}function A(y){for(let v in n){let W=n[v];if(W[y.id]===void 0)continue;let j=W[y.id];for(let ot in j)h(j[ot].object),delete j[ot];delete W[y.id]}}function C(){U(),o=!0,s!==r&&(s=r,l(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:U,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:x}}function d1(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function p1(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==fi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Vi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mi&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:D,maxSamples:P}}function m1(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Bi,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{let x=s?0:n,M=x*4,b=p.clippingState||null;c.value=b,b=h(g,d,M,m);for(let D=0;D!==M;++D)b[D]=e[D];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,b=m;M!==_;++M,b+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function g1(i){let t=new WeakMap;function e(o,a){return a===So?o.mapping=Ps:a===wl&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===So||a===wl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new rh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ka=class extends Za{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ws=4,Qu=[.125,.215,.35,.446,.526,.582],kr=20,nl=new Ka,t0=new zt,il=null,rl=0,sl=0,ol=!1,Or=(1+Math.sqrt(5))/2,ys=1/Or,e0=[new T(-Or,ys,0),new T(Or,ys,0),new T(-ys,0,Or),new T(ys,0,Or),new T(0,Or,-ys),new T(0,Or,ys),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(il,rl,sl),this._renderer.xr.enabled=ol,t.scissorTest=!1,_a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:ko,format:fi,colorSpace:yr,depthBuffer:!1},r=n0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_1(s)),this._blurMaterial=y1(s,t,e)}return r}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,nl)}_sceneToCubeUV(t,e,n,r){let a=new vn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(t0),h.toneMapping=pr,h.autoClear=!1;let m=new an({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),g=new St(new en,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(t0),_=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;_a(r,x*M,p>2?M:0,M,M),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Ps||t.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;_a(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,nl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=e0[(r-s-1)%e0.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kr-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):kr;f>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${kr}`);let p=[],x=0;for(let A=0;A<kr;++A){let C=A/_,U=Math.exp(-C*C/2);p.push(U),A===0?x+=U:A<f&&(x+=2*U)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let b=this._sizeLods[r],D=3*b*(r>M-ws?r-M+ws:0),P=4*(this._cubeSize-b);_a(e,D,P,3*b,2*b),c.setRenderTarget(e),c.render(u,nl)}};function _1(i){let t=[],e=[],n=[],r=i,s=i-ws+1+Qu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-ws?c=Qu[o-i+ws-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,x=new Float32Array(_*g*m),M=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let P=0;P<m;P++){let A=P%3*2/3-1,C=P>2?0:-1,U=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(U,_*g*P),M.set(d,f*g*P);let y=[P,P,P,P,P,P];b.set(y,p*g*P)}let D=new be;D.setAttribute("position",new De(x,_)),D.setAttribute("uv",new De(M,f)),D.setAttribute("faceIndex",new De(b,p)),t.push(D),r>ws&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function n0(i,t,e){let n=new Gi(i,t,e);return n.texture.mapping=fc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function y1(i,t,e){let n=new Float32Array(kr),r=new T(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function i0(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function r0(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}function x1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===So||c===wl,h=c===Ps||c===Is;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ja(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Ja(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function M1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Ha("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function b1(i,t,e,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let x=m.array;_=m.version;for(let M=0,b=x.length;M<b;M+=3){let D=x[M+0],P=x[M+1],A=x[M+2];d.push(D,P,P,A,A,D)}}else if(g!==void 0){let x=g.array;_=g.version;for(let M=0,b=x.length/3-1;M<b;M+=3){let D=M+0,P=M+1,A=M+2;d.push(D,P,P,A,A,D)}}else return;let f=new($0(d)?Ya:qa)(d,1);f.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function v1(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function u(d,m,g,_){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=m[x];for(let x=0;x<_.length;x++)e.update(p,n,_[x])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function E1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function w1(i,t,e){let n=new WeakMap,r=new Oe;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let U=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let b=a.attributes.position.count*M,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let P=new Float32Array(b*D*4*u),A=new Wa(P,b,D,u);A.type=Mi,A.needsUpdate=!0;let C=M*4;for(let y=0;y<u;y++){let v=f[y],W=p[y],j=x[y],ot=b*D*4*y;for(let st=0;st<v.count;st++){let Y=st*C;m===!0&&(r.fromBufferAttribute(v,st),P[ot+Y+0]=r.x,P[ot+Y+1]=r.y,P[ot+Y+2]=r.z,P[ot+Y+3]=0),g===!0&&(r.fromBufferAttribute(W,st),P[ot+Y+4]=r.x,P[ot+Y+5]=r.y,P[ot+Y+6]=r.z,P[ot+Y+7]=0),_===!0&&(r.fromBufferAttribute(j,st),P[ot+Y+8]=r.x,P[ot+Y+9]=r.y,P[ot+Y+10]=r.z,P[ot+Y+11]=j.itemSize===4?r.w:1)}}d={count:u,texture:A,size:new Nt(b,D)},n.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function S1(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var ja=class extends qn{constructor(t,e,n,r,s,o,a,c,l,h=Ts){if(h!==Ts&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Gr),n===void 0&&h===Ds&&(n=Ls),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Rn,this.minFilter=c!==void 0?c:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Q0=new qn,s0=new ja(1,1),tf=new Wa,ef=new nh,nf=new $a,o0=[],a0=[],c0=new Float32Array(16),l0=new Float32Array(9),h0=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=o0[r];if(s===void 0&&(s=new Float32Array(r),o0[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function gn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _n(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pc(i,t){let e=a0[t];e===void 0&&(e=new Int32Array(t),a0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function T1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function R1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2fv(this.addr,t),_n(e,t)}}function A1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;i.uniform3fv(this.addr,t),_n(e,t)}}function C1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4fv(this.addr,t),_n(e,t)}}function P1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,n))return;h0.set(n),i.uniformMatrix2fv(this.addr,!1,h0),_n(e,n)}}function I1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,n))return;l0.set(n),i.uniformMatrix3fv(this.addr,!1,l0),_n(e,n)}}function L1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,n))return;c0.set(n),i.uniformMatrix4fv(this.addr,!1,c0),_n(e,n)}}function D1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function U1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2iv(this.addr,t),_n(e,t)}}function N1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3iv(this.addr,t),_n(e,t)}}function H1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4iv(this.addr,t),_n(e,t)}}function F1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function O1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2uiv(this.addr,t),_n(e,t)}}function B1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3uiv(this.addr,t),_n(e,t)}}function k1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4uiv(this.addr,t),_n(e,t)}}function z1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(s0.compareFunction=Z0,s=s0):s=Q0,e.setTexture2D(t||s,r)}function V1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ef,r)}function G1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||nf,r)}function W1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||tf,r)}function X1(i){switch(i){case 5126:return T1;case 35664:return R1;case 35665:return A1;case 35666:return C1;case 35674:return P1;case 35675:return I1;case 35676:return L1;case 5124:case 35670:return D1;case 35667:case 35671:return U1;case 35668:case 35672:return N1;case 35669:case 35673:return H1;case 5125:return F1;case 36294:return O1;case 36295:return B1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return W1}}function q1(i,t){i.uniform1fv(this.addr,t)}function Y1(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Z1(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function $1(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function K1(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function J1(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j1(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Q1(i,t){i.uniform1iv(this.addr,t)}function t_(i,t){i.uniform2iv(this.addr,t)}function e_(i,t){i.uniform3iv(this.addr,t)}function n_(i,t){i.uniform4iv(this.addr,t)}function i_(i,t){i.uniform1uiv(this.addr,t)}function r_(i,t){i.uniform2uiv(this.addr,t)}function s_(i,t){i.uniform3uiv(this.addr,t)}function o_(i,t){i.uniform4uiv(this.addr,t)}function a_(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Q0,s[o])}function c_(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ef,s[o])}function l_(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||nf,s[o])}function h_(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||tf,s[o])}function u_(i){switch(i){case 5126:return q1;case 35664:return Y1;case 35665:return Z1;case 35666:return $1;case 35674:return K1;case 35675:return J1;case 35676:return j1;case 5124:case 35670:return Q1;case 35667:case 35671:return t_;case 35668:case 35672:return e_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return r_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}var sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=X1(e.type)}},oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u_(e.type)}},ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},al=/(\w+)(\])?(\[|\.)?/g;function u0(i,t){i.seq.push(t),i.map[t.id]=t}function f_(i,t,e){let n=i.name,r=n.length;for(al.lastIndex=0;;){let s=al.exec(n),o=al.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){u0(e,l===void 0?new sh(a,i,t):new oh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ah(a),u0(e,u)),e=u}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);f_(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function f0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var d_=37297,p_=0;function m_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function g_(i){let t=Ue.getPrimaries(Ue.workingColorSpace),e=Ue.getPrimaries(i),n;switch(t===e?n="":t===ka&&e===Ba?n="LinearDisplayP3ToLinearSRGB":t===Ba&&e===ka&&(n="LinearSRGBToLinearDisplayP3"),i){case yr:case dc:return[n,"LinearTransferOETF"];case on:case Jh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function d0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+m_(i.getShaderSource(t),o)}else return r}function __(i,t){let e=g_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function y_(i,t){let e;switch(t){case Ad:e="Linear";break;case Cd:e="Reinhard";break;case Pd:e="Cineon";break;case Bo:e="ACESFilmic";break;case Ld:e="AgX";break;case Dd:e="Neutral";break;case Id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ya=new T;function x_(){Ue.getLuminanceCoefficients(ya);let i=ya.x.toFixed(4),t=ya.y.toFixed(4),e=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function b_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function v_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yo(i){return i!==""}function p0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function m0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(i){return i.replace(E_,S_)}var w_=new Map;function S_(i,t){let e=pe[t];if(e===void 0){let n=w_.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ch(e)}var T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g0(i){return i.replace(T_,R_)}function R_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function A_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===F0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function C_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Is:t="ENVMAP_TYPE_CUBE";break;case fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function P_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Is&&(t="ENVMAP_MODE_REFRACTION"),t}function I_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:t="ENVMAP_BLENDING_MULTIPLY";break;case Vh:t="ENVMAP_BLENDING_MIX";break;case Rd:t="ENVMAP_BLENDING_ADD";break}return t}function L_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function D_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=A_(e),l=C_(e),h=P_(e),u=I_(e),d=L_(e),m=M_(e),g=b_(s),_=r.createProgram(),f,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(f=[_0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[_0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pr?"#define TONE_MAPPING":"",e.toneMapping!==pr?pe.tonemapping_pars_fragment:"",e.toneMapping!==pr?y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,__("linearToOutputTexel",e.outputColorSpace),x_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),o=ch(o),o=p0(o,e),o=m0(o,e),a=ch(a),a=p0(a,e),a=m0(a,e),o=g0(o),a=g0(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=x+f+o,b=x+p+a,D=f0(r,r.VERTEX_SHADER,M),P=f0(r,r.FRAGMENT_SHADER,b);r.attachShader(_,D),r.attachShader(_,P),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(v){if(i.debug.checkShaderErrors){let W=r.getProgramInfoLog(_).trim(),j=r.getShaderInfoLog(D).trim(),ot=r.getShaderInfoLog(P).trim(),st=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,D,P);else{let pt=d0(r,D,"vertex"),L=d0(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+W+`
`+pt+`
`+L)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||ot==="")&&(Y=!1);Y&&(v.diagnostics={runnable:st,programLog:W,vertexShader:{log:j,prefix:f},fragmentShader:{log:ot,prefix:p}})}r.deleteShader(D),r.deleteShader(P),C=new As(r,_),U=v_(r,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let U;this.getAttributes=function(){return U===void 0&&A(this),U};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,d_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=P,this}var U_=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hh(t),e.set(t,n)),n}},hh=class{constructor(t){this.id=U_++,this.code=t,this.usedTimes=0}};function N_(i,t,e,n,r,s,o){let a=new Xa,c=new lh,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,v,W,j,ot){let st=j.fog,Y=ot.geometry,pt=y.isMeshStandardMaterial?j.environment:null,L=(y.isMeshStandardMaterial?e:t).get(y.envMap||pt),J=L&&L.mapping===fc?L.image.height:null,V=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let Z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ct=Z!==void 0?Z.length:0,N=0;Y.morphAttributes.position!==void 0&&(N=1),Y.morphAttributes.normal!==void 0&&(N=2),Y.morphAttributes.color!==void 0&&(N=3);let S,R,H,q;if(V){let sn=xi[V];S=sn.vertexShader,R=sn.fragmentShader}else S=y.vertexShader,R=y.fragmentShader,c.update(y),H=c.getVertexShaderID(y),q=c.getFragmentShaderID(y);let B=i.getRenderTarget(),F=ot.isInstancedMesh===!0,G=ot.isBatchedMesh===!0,tt=!!y.map,z=!!y.matcap,w=!!L,rt=!!y.aoMap,K=!!y.lightMap,X=!!y.bumpMap,Q=!!y.normalMap,nt=!!y.displacementMap,lt=!!y.emissiveMap,I=!!y.metalnessMap,E=!!y.roughnessMap,k=y.anisotropy>0,et=y.clearcoat>0,ht=y.dispersion>0,it=y.iridescence>0,Et=y.sheen>0,bt=y.transmission>0,gt=k&&!!y.anisotropyMap,Lt=et&&!!y.clearcoatMap,_t=et&&!!y.clearcoatNormalMap,At=et&&!!y.clearcoatRoughnessMap,Gt=it&&!!y.iridescenceMap,Bt=it&&!!y.iridescenceThicknessMap,Ct=Et&&!!y.sheenColorMap,Pt=Et&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,ee=!!y.specularColorMap,at=!!y.specularIntensityMap,Ut=bt&&!!y.transmissionMap,vt=bt&&!!y.thicknessMap,Tt=!!y.gradientMap,Xt=!!y.alphaMap,$t=y.alphaTest>0,fe=!!y.alphaHash,Ve=!!y.extensions,rn=pr;y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(rn=i.toneMapping);let ye={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:S,fragmentShader:R,defines:y.defines,customVertexShaderID:H,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:G,batchingColor:G&&ot._colorsTexture!==null,instancing:F,instancingColor:F&&ot.instanceColor!==null,instancingMorph:F&&ot.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:yr,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:z,envMap:w,envMapMode:w&&L.mapping,envMapCubeUVHeight:J,aoMap:rt,lightMap:K,bumpMap:X,normalMap:Q,displacementMap:m&&nt,emissiveMap:lt,normalMapObjectSpace:Q&&y.normalMapType===Fd,normalMapTangentSpace:Q&&y.normalMapType===Kh,metalnessMap:I,roughnessMap:E,anisotropy:k,anisotropyMap:gt,clearcoat:et,clearcoatMap:Lt,clearcoatNormalMap:_t,clearcoatRoughnessMap:At,dispersion:ht,iridescence:it,iridescenceMap:Gt,iridescenceThicknessMap:Bt,sheen:Et,sheenColorMap:Ct,sheenRoughnessMap:Pt,specularMap:Wt,specularColorMap:ee,specularIntensityMap:at,transmission:bt,transmissionMap:Ut,thicknessMap:vt,gradientMap:Tt,opaque:y.transparent===!1&&y.blending===bi&&y.alphaToCoverage===!1,alphaMap:Xt,alphaTest:$t,alphaHash:fe,combine:y.combine,mapUv:tt&&f(y.map.channel),aoMapUv:rt&&f(y.aoMap.channel),lightMapUv:K&&f(y.lightMap.channel),bumpMapUv:X&&f(y.bumpMap.channel),normalMapUv:Q&&f(y.normalMap.channel),displacementMapUv:nt&&f(y.displacementMap.channel),emissiveMapUv:lt&&f(y.emissiveMap.channel),metalnessMapUv:I&&f(y.metalnessMap.channel),roughnessMapUv:E&&f(y.roughnessMap.channel),anisotropyMapUv:gt&&f(y.anisotropyMap.channel),clearcoatMapUv:Lt&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&f(y.sheenRoughnessMap.channel),specularMapUv:Wt&&f(y.specularMap.channel),specularColorMapUv:ee&&f(y.specularColorMap.channel),specularIntensityMapUv:at&&f(y.specularIntensityMap.channel),transmissionMapUv:Ut&&f(y.transmissionMap.channel),thicknessMapUv:vt&&f(y.thicknessMap.channel),alphaMapUv:Xt&&f(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Q||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!Y.attributes.uv&&(tt||Xt),fog:!!st,useFog:y.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:ot.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:N,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:rn,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Ue.getTransfer(y.map.colorSpace)===qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Le,flipSided:y.side===Xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ve&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&y.extensions.multiDraw===!0||G)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function x(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let W in y.defines)v.push(W),v.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(M(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),y.push(a.mask)}function D(y){let v=_[y.type],W;if(v){let j=xi[v];W=Sp.clone(j.uniforms)}else W=y.uniforms;return W}function P(y,v){let W;for(let j=0,ot=h.length;j<ot;j++){let st=h[j];if(st.cacheKey===v){W=st,++W.usedTimes;break}}return W===void 0&&(W=new D_(i,v,y,s),h.push(W)),W}function A(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function C(y){c.remove(y)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:D,acquireProgram:P,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:U}}function H_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function F_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function x0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,g,_,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||F_),n.length>1&&n.sort(d||y0),r.length>1&&r.sort(d||y0)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function O_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new x0,i.set(n,[o])):r>=s.length?(o=new x0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function B_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new zt};break;case"SpotLight":e={position:new T,direction:new T,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function k_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var z_=0;function V_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G_(i){let t=new B_,e=k_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let r=new T,s=new ce,o=new ce;function a(l){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,x=0,M=0,b=0,D=0,P=0,A=0;l.sort(V_);for(let U=0,y=l.length;U<y;U++){let v=l[U],W=v.color,j=v.intensity,ot=v.distance,st=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=W.r*j,u+=W.g*j,d+=W.b*j;else if(v.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(v.sh.coefficients[Y],j);A++}else if(v.isDirectionalLight){let Y=t.get(v);if(Y.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let pt=v.shadow,L=e.get(v);L.shadowIntensity=pt.intensity,L.shadowBias=pt.bias,L.shadowNormalBias=pt.normalBias,L.shadowRadius=pt.radius,L.shadowMapSize=pt.mapSize,n.directionalShadow[m]=L,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=v.shadow.matrix,x++}n.directional[m]=Y,m++}else if(v.isSpotLight){let Y=t.get(v);Y.position.setFromMatrixPosition(v.matrixWorld),Y.color.copy(W).multiplyScalar(j),Y.distance=ot,Y.coneCos=Math.cos(v.angle),Y.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),Y.decay=v.decay,n.spot[_]=Y;let pt=v.shadow;if(v.map&&(n.spotLightMap[D]=v.map,D++,pt.updateMatrices(v),v.castShadow&&P++),n.spotLightMatrix[_]=pt.matrix,v.castShadow){let L=e.get(v);L.shadowIntensity=pt.intensity,L.shadowBias=pt.bias,L.shadowNormalBias=pt.normalBias,L.shadowRadius=pt.radius,L.shadowMapSize=pt.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=st,b++}_++}else if(v.isRectAreaLight){let Y=t.get(v);Y.color.copy(W).multiplyScalar(j),Y.halfWidth.set(v.width*.5,0,0),Y.halfHeight.set(0,v.height*.5,0),n.rectArea[f]=Y,f++}else if(v.isPointLight){let Y=t.get(v);if(Y.color.copy(v.color).multiplyScalar(v.intensity),Y.distance=v.distance,Y.decay=v.decay,v.castShadow){let pt=v.shadow,L=e.get(v);L.shadowIntensity=pt.intensity,L.shadowBias=pt.bias,L.shadowNormalBias=pt.normalBias,L.shadowRadius=pt.radius,L.shadowMapSize=pt.mapSize,L.shadowCameraNear=pt.camera.near,L.shadowCameraFar=pt.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=v.shadow.matrix,M++}n.point[g]=Y,g++}else if(v.isHemisphereLight){let Y=t.get(v);Y.skyColor.copy(v.color).multiplyScalar(j),Y.groundColor.copy(v.groundColor).multiplyScalar(j),n.hemi[p]=Y,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qt.LTC_FLOAT_1,n.rectAreaLTC2=qt.LTC_FLOAT_2):(n.rectAreaLTC1=qt.LTC_HALF_1,n.rectAreaLTC2=qt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==f||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==b||C.numSpotMaps!==D||C.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=f,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=b,C.numSpotMaps=D,C.numLightProbes=A,n.version=z_++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0,f=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let M=l[p];if(M.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(M.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),m++}else if(M.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(M.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function M0(i){let t=new G_(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function W_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new M0(i),t.set(r,[a])):s>=o.length?(a=new M0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var uh=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fh=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`;function Y_(i,t,e){let n=new Co,r=new Nt,s=new Nt,o=new Oe,a=new uh({depthPacking:Hd}),c=new fh,l={},h=e.maxTextureSize,u={[Un]:Xn,[Xn]:Un,[Le]:Le},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new St(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F0;let p=this.type;this.render=function(P,A,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;let U=i.getRenderTarget(),y=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),W=i.state;W.setBlending(dr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let j=p!==Oi&&this.type===Oi,ot=p===Oi&&this.type!==Oi;for(let st=0,Y=P.length;st<Y;st++){let pt=P[st],L=pt.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let J=L.getFrameExtents();if(r.multiply(J),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,L.mapSize.y=s.y)),L.map===null||j===!0||ot===!0){let Z=this.type!==Oi?{minFilter:Rn,magFilter:Rn}:{};L.map!==null&&L.map.dispose(),L.map=new Gi(r.x,r.y,Z),L.map.texture.name=pt.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let V=L.getViewportCount();for(let Z=0;Z<V;Z++){let ct=L.getViewport(Z);o.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),W.viewport(o),L.updateMatrices(pt,Z),n=L.getFrustum(),b(A,C,L.camera,pt,this.type)}L.isPointLightShadow!==!0&&this.type===Oi&&x(L,C),L.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(U,y,v)};function x(P,A){let C=t.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Gi(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(A,null,C,m,_,null)}function M(P,A,C,U){let y=null,v=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(v!==void 0)y=v;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let W=y.uuid,j=A.uuid,ot=l[W];ot===void 0&&(ot={},l[W]=ot);let st=ot[j];st===void 0&&(st=y.clone(),ot[j]=st,A.addEventListener("dispose",D)),y=st}if(y.visible=A.visible,y.wireframe=A.wireframe,U===Oi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let W=i.properties.get(y);W.light=C}return y}function b(P,A,C,U,y){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Oi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);let j=t.update(P),ot=P.material;if(Array.isArray(ot)){let st=j.groups;for(let Y=0,pt=st.length;Y<pt;Y++){let L=st[Y],J=ot[L.materialIndex];if(J&&J.visible){let V=M(P,J,U,y);P.onBeforeShadow(i,P,A,C,j,V,L),i.renderBufferDirect(C,null,j,V,P,L),P.onAfterShadow(i,P,A,C,j,V,L)}}}else if(ot.visible){let st=M(P,ot,U,y);P.onBeforeShadow(i,P,A,C,j,st,null),i.renderBufferDirect(C,null,j,st,P,null),P.onAfterShadow(i,P,A,C,j,st,null)}}let W=P.children;for(let j=0,ot=W.length;j<ot;j++)b(W[j],A,C,U,y)}function D(P){P.target.removeEventListener("dispose",D);for(let C in l){let U=l[C],y=P.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}var Z_={[_l]:yl,[xl]:vl,[Ml]:El,[Cs]:bl,[yl]:_l,[vl]:xl,[El]:Ml,[bl]:Cs};function $_(i){function t(){let at=!1,Ut=new Oe,vt=null,Tt=new Oe(0,0,0,0);return{setMask:function(Xt){vt!==Xt&&!at&&(i.colorMask(Xt,Xt,Xt,Xt),vt=Xt)},setLocked:function(Xt){at=Xt},setClear:function(Xt,$t,fe,Ve,rn){rn===!0&&(Xt*=Ve,$t*=Ve,fe*=Ve),Ut.set(Xt,$t,fe,Ve),Tt.equals(Ut)===!1&&(i.clearColor(Xt,$t,fe,Ve),Tt.copy(Ut))},reset:function(){at=!1,vt=null,Tt.set(-1,0,0,0)}}}function e(){let at=!1,Ut=!1,vt=null,Tt=null,Xt=null;return{setReversed:function($t){Ut=$t},setTest:function($t){$t?H(i.DEPTH_TEST):q(i.DEPTH_TEST)},setMask:function($t){vt!==$t&&!at&&(i.depthMask($t),vt=$t)},setFunc:function($t){if(Ut&&($t=Z_[$t]),Tt!==$t){switch($t){case _l:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=$t}},setLocked:function($t){at=$t},setClear:function($t){Xt!==$t&&(i.clearDepth($t),Xt=$t)},reset:function(){at=!1,vt=null,Tt=null,Xt=null}}}function n(){let at=!1,Ut=null,vt=null,Tt=null,Xt=null,$t=null,fe=null,Ve=null,rn=null;return{setTest:function(ye){at||(ye?H(i.STENCIL_TEST):q(i.STENCIL_TEST))},setMask:function(ye){Ut!==ye&&!at&&(i.stencilMask(ye),Ut=ye)},setFunc:function(ye,sn,Gn){(vt!==ye||Tt!==sn||Xt!==Gn)&&(i.stencilFunc(ye,sn,Gn),vt=ye,Tt=sn,Xt=Gn)},setOp:function(ye,sn,Gn){($t!==ye||fe!==sn||Ve!==Gn)&&(i.stencilOp(ye,sn,Gn),$t=ye,fe=sn,Ve=Gn)},setLocked:function(ye){at=ye},setClear:function(ye){rn!==ye&&(i.clearStencil(ye),rn=ye)},reset:function(){at=!1,Ut=null,vt=null,Tt=null,Xt=null,$t=null,fe=null,Ve=null,rn=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,x=null,M=null,b=null,D=null,P=new zt(0,0,0),A=0,C=!1,U=null,y=null,v=null,W=null,j=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,Y=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(pt)[1]),st=Y>=1):pt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),st=Y>=2);let L=null,J={},V=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ct=new Oe().fromArray(V),N=new Oe().fromArray(Z);function S(at,Ut,vt,Tt){let Xt=new Uint8Array(4),$t=i.createTexture();i.bindTexture(at,$t),i.texParameteri(at,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(at,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<vt;fe++)at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Xt):i.texImage2D(Ut+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xt);return $t}let R={};R[i.TEXTURE_2D]=S(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=S(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[i.TEXTURE_2D_ARRAY]=S(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=S(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),H(i.DEPTH_TEST),s.setFunc(Cs),K(!1),X(Ru),H(i.CULL_FACE),w(dr);function H(at){l[at]!==!0&&(i.enable(at),l[at]=!0)}function q(at){l[at]!==!1&&(i.disable(at),l[at]=!1)}function B(at,Ut){return h[at]!==Ut?(i.bindFramebuffer(at,Ut),h[at]=Ut,at===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ut),at===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function F(at,Ut){let vt=d,Tt=!1;if(at){vt=u.get(Ut),vt===void 0&&(vt=[],u.set(Ut,vt));let Xt=at.textures;if(vt.length!==Xt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,fe=Xt.length;$t<fe;$t++)vt[$t]=i.COLOR_ATTACHMENT0+$t;vt.length=Xt.length,Tt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(vt)}function G(at){return m!==at?(i.useProgram(at),m=at,!0):!1}let tt={[Br]:i.FUNC_ADD,[hd]:i.FUNC_SUBTRACT,[ud]:i.FUNC_REVERSE_SUBTRACT};tt[fd]=i.MIN,tt[dd]=i.MAX;let z={[pd]:i.ZERO,[md]:i.ONE,[gd]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[yd]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[xd]:i.ONE_MINUS_DST_ALPHA,[Ed]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Sd]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function w(at,Ut,vt,Tt,Xt,$t,fe,Ve,rn,ye){if(at===dr){g===!0&&(q(i.BLEND),g=!1);return}if(g===!1&&(H(i.BLEND),g=!0),at!==ld){if(at!==_||ye!==C){if((f!==Br||M!==Br)&&(i.blendEquation(i.FUNC_ADD),f=Br,M=Br),ye)switch(at){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}p=null,x=null,b=null,D=null,P.set(0,0,0),A=0,_=at,C=ye}return}Xt=Xt||Ut,$t=$t||vt,fe=fe||Tt,(Ut!==f||Xt!==M)&&(i.blendEquationSeparate(tt[Ut],tt[Xt]),f=Ut,M=Xt),(vt!==p||Tt!==x||$t!==b||fe!==D)&&(i.blendFuncSeparate(z[vt],z[Tt],z[$t],z[fe]),p=vt,x=Tt,b=$t,D=fe),(Ve.equals(P)===!1||rn!==A)&&(i.blendColor(Ve.r,Ve.g,Ve.b,rn),P.copy(Ve),A=rn),_=at,C=!1}function rt(at,Ut){at.side===Le?q(i.CULL_FACE):H(i.CULL_FACE);let vt=at.side===Xn;Ut&&(vt=!vt),K(vt),at.blending===bi&&at.transparent===!1?w(dr):w(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),s.setFunc(at.depthFunc),s.setTest(at.depthTest),s.setMask(at.depthWrite),r.setMask(at.colorWrite);let Tt=at.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(at.stencilWriteMask),o.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),o.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),nt(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):q(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(at){U!==at&&(at?i.frontFace(i.CW):i.frontFace(i.CCW),U=at)}function X(at){at!==od?(H(i.CULL_FACE),at!==y&&(at===Ru?i.cullFace(i.BACK):at===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):q(i.CULL_FACE),y=at}function Q(at){at!==v&&(st&&i.lineWidth(at),v=at)}function nt(at,Ut,vt){at?(H(i.POLYGON_OFFSET_FILL),(W!==Ut||j!==vt)&&(i.polygonOffset(Ut,vt),W=Ut,j=vt)):q(i.POLYGON_OFFSET_FILL)}function lt(at){at?H(i.SCISSOR_TEST):q(i.SCISSOR_TEST)}function I(at){at===void 0&&(at=i.TEXTURE0+ot-1),L!==at&&(i.activeTexture(at),L=at)}function E(at,Ut,vt){vt===void 0&&(L===null?vt=i.TEXTURE0+ot-1:vt=L);let Tt=J[vt];Tt===void 0&&(Tt={type:void 0,texture:void 0},J[vt]=Tt),(Tt.type!==at||Tt.texture!==Ut)&&(L!==vt&&(i.activeTexture(vt),L=vt),i.bindTexture(at,Ut||R[at]),Tt.type=at,Tt.texture=Ut)}function k(){let at=J[L];at!==void 0&&at.type!==void 0&&(i.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function _t(){try{i.texStorage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Bt(at){ct.equals(at)===!1&&(i.scissor(at.x,at.y,at.z,at.w),ct.copy(at))}function Ct(at){N.equals(at)===!1&&(i.viewport(at.x,at.y,at.z,at.w),N.copy(at))}function Pt(at,Ut){let vt=c.get(Ut);vt===void 0&&(vt=new WeakMap,c.set(Ut,vt));let Tt=vt.get(at);Tt===void 0&&(Tt=i.getUniformBlockIndex(Ut,at.name),vt.set(at,Tt))}function Wt(at,Ut){let Tt=c.get(Ut).get(at);a.get(Ut)!==Tt&&(i.uniformBlockBinding(Ut,Tt,at.__bindingPointIndex),a.set(Ut,Tt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},L=null,J={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,x=null,M=null,b=null,D=null,P=new zt(0,0,0),A=0,C=!1,U=null,y=null,v=null,W=null,j=null,ct.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:H,disable:q,bindFramebuffer:B,drawBuffers:F,useProgram:G,setBlending:w,setMaterial:rt,setFlipSided:K,setCullFace:X,setLineWidth:Q,setPolygonOffset:nt,setScissorTest:lt,activeTexture:I,bindTexture:E,unbindTexture:k,compressedTexImage2D:et,compressedTexImage3D:ht,texImage2D:At,texImage3D:Gt,updateUBOMapping:Pt,uniformBlockBinding:Wt,texStorage2D:Lt,texStorage3D:_t,texSubImage2D:it,texSubImage3D:Et,compressedTexSubImage2D:bt,compressedTexSubImage3D:gt,scissor:Bt,viewport:Ct,reset:ee}}function b0(i,t,e,n){let r=K_(n);switch(e){case V0:return i*t;case W0:return i*t;case X0:return i*t*2;case qh:return i*t/r.components*r.byteLength;case Yh:return i*t/r.components*r.byteLength;case q0:return i*t*2/r.components*r.byteLength;case Zh:return i*t*2/r.components*r.byteLength;case G0:return i*t*3/r.components*r.byteLength;case fi:return i*t*4/r.components*r.byteLength;case $h:return i*t*4/r.components*r.byteLength;case Ia:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Cl:return Math.max(i,16)*Math.max(t,8)/4;case Tl:case Al:return Math.max(i,8)*Math.max(t,8)/2;case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Na:case Yl:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Y0:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K_(i){switch(i){case Vi:case B0:return{byteLength:1,components:1};case To:case k0:case ko:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case Gr:case Gh:case Mi:return{byteLength:4,components:1};case z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function J_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return m?new OffscreenCanvas(I,E):Va("canvas")}function _(I,E,k){let et=1,ht=lt(I);if((ht.width>k||ht.height>k)&&(et=k/Math.max(ht.width,ht.height)),et<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let it=Math.floor(et*ht.width),Et=Math.floor(et*ht.height);u===void 0&&(u=g(it,Et));let bt=E?g(it,Et):u;return bt.width=it,bt.height=Et,bt.getContext("2d").drawImage(I,0,0,it,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+it+"x"+Et+")."),bt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function f(I){return I.generateMipmaps&&I.minFilter!==Rn&&I.minFilter!==hi}function p(I){i.generateMipmap(I)}function x(I,E,k,et,ht=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let it=E;if(E===i.RED&&(k===i.FLOAT&&(it=i.R32F),k===i.HALF_FLOAT&&(it=i.R16F),k===i.UNSIGNED_BYTE&&(it=i.R8)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(it=i.R8UI),k===i.UNSIGNED_SHORT&&(it=i.R16UI),k===i.UNSIGNED_INT&&(it=i.R32UI),k===i.BYTE&&(it=i.R8I),k===i.SHORT&&(it=i.R16I),k===i.INT&&(it=i.R32I)),E===i.RG&&(k===i.FLOAT&&(it=i.RG32F),k===i.HALF_FLOAT&&(it=i.RG16F),k===i.UNSIGNED_BYTE&&(it=i.RG8)),E===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(it=i.RG8UI),k===i.UNSIGNED_SHORT&&(it=i.RG16UI),k===i.UNSIGNED_INT&&(it=i.RG32UI),k===i.BYTE&&(it=i.RG8I),k===i.SHORT&&(it=i.RG16I),k===i.INT&&(it=i.RG32I)),E===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(it=i.RGB8UI),k===i.UNSIGNED_SHORT&&(it=i.RGB16UI),k===i.UNSIGNED_INT&&(it=i.RGB32UI),k===i.BYTE&&(it=i.RGB8I),k===i.SHORT&&(it=i.RGB16I),k===i.INT&&(it=i.RGB32I)),E===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),k===i.UNSIGNED_INT&&(it=i.RGBA32UI),k===i.BYTE&&(it=i.RGBA8I),k===i.SHORT&&(it=i.RGBA16I),k===i.INT&&(it=i.RGBA32I)),E===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),E===i.RGBA){let Et=ht?Oa:Ue.getTransfer(et);k===i.FLOAT&&(it=i.RGBA32F),k===i.HALF_FLOAT&&(it=i.RGBA16F),k===i.UNSIGNED_BYTE&&(it=Et===qe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(I,E){let k;return I?E===null||E===Gr||E===Ls?k=i.DEPTH24_STENCIL8:E===Mi?k=i.DEPTH32F_STENCIL8:E===To&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gr||E===Ls?k=i.DEPTH_COMPONENT24:E===Mi?k=i.DEPTH_COMPONENT32F:E===To&&(k=i.DEPTH_COMPONENT16),k}function b(I,E){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==Rn&&I.minFilter!==hi?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function D(I){let E=I.target;E.removeEventListener("dispose",D),A(E),E.isVideoTexture&&h.delete(E)}function P(I){let E=I.target;E.removeEventListener("dispose",P),U(E)}function A(I){let E=n.get(I);if(E.__webglInit===void 0)return;let k=I.source,et=d.get(k);if(et){let ht=et[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&C(I),Object.keys(et).length===0&&d.delete(k)}n.remove(I)}function C(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let k=I.source,et=d.get(k);delete et[E.__cacheKey],o.memory.textures--}function U(I){let E=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let ht=0;ht<E.__webglFramebuffer[et].length;ht++)i.deleteFramebuffer(E.__webglFramebuffer[et][ht]);else i.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)i.deleteFramebuffer(E.__webglFramebuffer[et]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let k=I.textures;for(let et=0,ht=k.length;et<ht;et++){let it=n.get(k[et]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(k[et])}n.remove(I)}let y=0;function v(){y=0}function W(){let I=y;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),y+=1,I}function j(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ot(I,E){let k=n.get(I);if(I.isVideoTexture&&Q(I),I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){let et=I.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(k,I,E);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function st(I,E){let k=n.get(I);if(I.version>0&&k.__version!==I.version){N(k,I,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function Y(I,E){let k=n.get(I);if(I.version>0&&k.__version!==I.version){N(k,I,E);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function pt(I,E){let k=n.get(I);if(I.version>0&&k.__version!==I.version){S(k,I,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}let L={[Vr]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},J={[Rn]:i.NEAREST,[Ud]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[Dc]:i.LINEAR_MIPMAP_NEAREST,[zr]:i.LINEAR_MIPMAP_LINEAR},V={[Od]:i.NEVER,[Wd]:i.ALWAYS,[Bd]:i.LESS,[Z0]:i.LEQUAL,[kd]:i.EQUAL,[Gd]:i.GEQUAL,[zd]:i.GREATER,[Vd]:i.NOTEQUAL};function Z(I,E){if(E.type===Mi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===hi||E.magFilter===Dc||E.magFilter===jo||E.magFilter===zr||E.minFilter===hi||E.minFilter===Dc||E.minFilter===jo||E.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,L[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,L[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,L[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,J[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,J[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,V[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Rn||E.minFilter!==jo&&E.minFilter!==zr||E.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ct(I,E){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",D));let et=E.source,ht=d.get(et);ht===void 0&&(ht={},d.set(et,ht));let it=j(E);if(it!==I.__cacheKey){ht[it]===void 0&&(ht[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ht[it].usedTimes++;let Et=ht[I.__cacheKey];Et!==void 0&&(ht[I.__cacheKey].usedTimes--,Et.usedTimes===0&&C(E)),I.__cacheKey=it,I.__webglTexture=ht[it].texture}return k}function N(I,E,k){let et=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=i.TEXTURE_3D);let ht=ct(I,E),it=E.source;e.bindTexture(et,I.__webglTexture,i.TEXTURE0+k);let Et=n.get(it);if(it.version!==Et.__version||ht===!0){e.activeTexture(i.TEXTURE0+k);let bt=Ue.getPrimaries(Ue.workingColorSpace),gt=E.colorSpace===ur?null:Ue.getPrimaries(E.colorSpace),Lt=E.colorSpace===ur||bt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let _t=_(E.image,!1,r.maxTextureSize);_t=nt(E,_t);let At=s.convert(E.format,E.colorSpace),Gt=s.convert(E.type),Bt=x(E.internalFormat,At,Gt,E.colorSpace,E.isVideoTexture);Z(et,E);let Ct,Pt=E.mipmaps,Wt=E.isVideoTexture!==!0,ee=Et.__version===void 0||ht===!0,at=it.dataReady,Ut=b(E,_t);if(E.isDepthTexture)Bt=M(E.format===Ds,E.type),ee&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Bt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Bt,_t.width,_t.height,0,At,Gt,null));else if(E.isDataTexture)if(Pt.length>0){Wt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,Pt[0].width,Pt[0].height);for(let vt=0,Tt=Pt.length;vt<Tt;vt++)Ct=Pt[vt],Wt?at&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Ct.width,Ct.height,At,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,vt,Bt,Ct.width,Ct.height,0,At,Gt,Ct.data);E.generateMipmaps=!1}else Wt?(ee&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,_t.width,_t.height),at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,At,Gt,_t.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,_t.width,_t.height,0,At,Gt,_t.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Wt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,Pt[0].width,Pt[0].height,_t.depth);for(let vt=0,Tt=Pt.length;vt<Tt;vt++)if(Ct=Pt[vt],E.format!==fi)if(At!==null)if(Wt){if(at)if(E.layerUpdates.size>0){let Xt=b0(Ct.width,Ct.height,E.format,E.type);for(let $t of E.layerUpdates){let fe=Ct.data.subarray($t*Xt/Ct.data.BYTES_PER_ELEMENT,($t+1)*Xt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,$t,Ct.width,Ct.height,1,At,fe,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Ct.width,Ct.height,_t.depth,At,Ct.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Bt,Ct.width,Ct.height,_t.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Ct.width,Ct.height,_t.depth,At,Gt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Bt,Ct.width,Ct.height,_t.depth,0,At,Gt,Ct.data)}else{Wt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,Pt[0].width,Pt[0].height);for(let vt=0,Tt=Pt.length;vt<Tt;vt++)Ct=Pt[vt],E.format!==fi?At!==null?Wt?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Bt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?at&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Ct.width,Ct.height,At,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,vt,Bt,Ct.width,Ct.height,0,At,Gt,Ct.data)}else if(E.isDataArrayTexture)if(Wt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,_t.width,_t.height,_t.depth),at)if(E.layerUpdates.size>0){let vt=b0(_t.width,_t.height,E.format,E.type);for(let Tt of E.layerUpdates){let Xt=_t.data.subarray(Tt*vt/_t.data.BYTES_PER_ELEMENT,(Tt+1)*vt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,_t.width,_t.height,1,At,Gt,Xt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,At,Gt,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,_t.width,_t.height,_t.depth,0,At,Gt,_t.data);else if(E.isData3DTexture)Wt?(ee&&e.texStorage3D(i.TEXTURE_3D,Ut,Bt,_t.width,_t.height,_t.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,At,Gt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,_t.width,_t.height,_t.depth,0,At,Gt,_t.data);else if(E.isFramebufferTexture){if(ee)if(Wt)e.texStorage2D(i.TEXTURE_2D,Ut,Bt,_t.width,_t.height);else{let vt=_t.width,Tt=_t.height;for(let Xt=0;Xt<Ut;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,Bt,vt,Tt,0,At,Gt,null),vt>>=1,Tt>>=1}}else if(Pt.length>0){if(Wt&&ee){let vt=lt(Pt[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,vt.width,vt.height)}for(let vt=0,Tt=Pt.length;vt<Tt;vt++)Ct=Pt[vt],Wt?at&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,At,Gt,Ct):e.texImage2D(i.TEXTURE_2D,vt,Bt,At,Gt,Ct);E.generateMipmaps=!1}else if(Wt){if(ee){let vt=lt(_t);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,vt.width,vt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Gt,_t)}else e.texImage2D(i.TEXTURE_2D,0,Bt,At,Gt,_t);f(E)&&p(et),Et.__version=it.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function S(I,E,k){if(E.image.length!==6)return;let et=ct(I,E),ht=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+k);let it=n.get(ht);if(ht.version!==it.__version||et===!0){e.activeTexture(i.TEXTURE0+k);let Et=Ue.getPrimaries(Ue.workingColorSpace),bt=E.colorSpace===ur?null:Ue.getPrimaries(E.colorSpace),gt=E.colorSpace===ur||Et===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,_t=E.image[0]&&E.image[0].isDataTexture,At=[];for(let Tt=0;Tt<6;Tt++)!Lt&&!_t?At[Tt]=_(E.image[Tt],!0,r.maxCubemapSize):At[Tt]=_t?E.image[Tt].image:E.image[Tt],At[Tt]=nt(E,At[Tt]);let Gt=At[0],Bt=s.convert(E.format,E.colorSpace),Ct=s.convert(E.type),Pt=x(E.internalFormat,Bt,Ct,E.colorSpace),Wt=E.isVideoTexture!==!0,ee=it.__version===void 0||et===!0,at=ht.dataReady,Ut=b(E,Gt);Z(i.TEXTURE_CUBE_MAP,E);let vt;if(Lt){Wt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Pt,Gt.width,Gt.height);for(let Tt=0;Tt<6;Tt++){vt=At[Tt].mipmaps;for(let Xt=0;Xt<vt.length;Xt++){let $t=vt[Xt];E.format!==fi?Bt!==null?Wt?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,0,0,$t.width,$t.height,Bt,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,Pt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,0,0,$t.width,$t.height,Bt,Ct,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,Pt,$t.width,$t.height,0,Bt,Ct,$t.data)}}}else{if(vt=E.mipmaps,Wt&&ee){vt.length>0&&Ut++;let Tt=lt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Pt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(_t){Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,At[Tt].width,At[Tt].height,Bt,Ct,At[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Pt,At[Tt].width,At[Tt].height,0,Bt,Ct,At[Tt].data);for(let Xt=0;Xt<vt.length;Xt++){let fe=vt[Xt].image[Tt].image;Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,0,0,fe.width,fe.height,Bt,Ct,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,Pt,fe.width,fe.height,0,Bt,Ct,fe.data)}}else{Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Bt,Ct,At[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Pt,Bt,Ct,At[Tt]);for(let Xt=0;Xt<vt.length;Xt++){let $t=vt[Xt];Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,0,0,Bt,Ct,$t.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,Pt,Bt,Ct,$t.image[Tt])}}}f(E)&&p(i.TEXTURE_CUBE_MAP),it.__version=ht.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function R(I,E,k,et,ht,it){let Et=s.convert(k.format,k.colorSpace),bt=s.convert(k.type),gt=x(k.internalFormat,Et,bt,k.colorSpace);if(!n.get(E).__hasExternalTextures){let _t=Math.max(1,E.width>>it),At=Math.max(1,E.height>>it);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,it,gt,_t,At,E.depth,0,Et,bt,null):e.texImage2D(ht,it,gt,_t,At,0,Et,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),X(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ht,n.get(k).__webglTexture,0,K(E)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ht,n.get(k).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function H(I,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let et=E.depthTexture,ht=et&&et.isDepthTexture?et.type:null,it=M(E.stencilBuffer,ht),Et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=K(E);X(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,it,E.width,E.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,it,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,it,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,I)}else{let et=E.textures;for(let ht=0;ht<et.length;ht++){let it=et[ht],Et=s.convert(it.format,it.colorSpace),bt=s.convert(it.type),gt=x(it.internalFormat,Et,bt,it.colorSpace),Lt=K(E);k&&X(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,gt,E.width,E.height):X(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,gt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,gt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ot(E.depthTexture,0);let et=n.get(E.depthTexture).__webglTexture,ht=K(E);if(E.depthTexture.format===Ts)X(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(E.depthTexture.format===Ds)X(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function B(I){let E=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let et=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){let ht=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",ht)};et.addEventListener("dispose",ht),E.__depthDisposeCallback=ht}E.__boundDepthTexture=et}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");q(E.__webglFramebuffer,I)}else if(k){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=i.createRenderbuffer(),H(E.__webglDepthbuffer[et],I,!1);else{let ht=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),H(E.__webglDepthbuffer,I,!1);else{let et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(I,E,k){let et=n.get(I);E!==void 0&&R(et.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&B(I)}function G(I){let E=I.texture,k=n.get(I),et=n.get(E);I.addEventListener("dispose",P);let ht=I.textures,it=I.isWebGLCubeRenderTarget===!0,Et=ht.length>1;if(Et||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=E.version,o.memory.textures++),it){k.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[bt]=[];for(let gt=0;gt<E.mipmaps.length;gt++)k.__webglFramebuffer[bt][gt]=i.createFramebuffer()}else k.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let bt=0;bt<E.mipmaps.length;bt++)k.__webglFramebuffer[bt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Et)for(let bt=0,gt=ht.length;bt<gt;bt++){let Lt=n.get(ht[bt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&X(I)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let bt=0;bt<ht.length;bt++){let gt=ht[bt];k.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[bt]);let Lt=s.convert(gt.format,gt.colorSpace),_t=s.convert(gt.type),At=x(gt.internalFormat,Lt,_t,gt.colorSpace,I.isXRRenderTarget===!0),Gt=K(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,At,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,k.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),H(k.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Z(i.TEXTURE_CUBE_MAP,E);for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)R(k.__webglFramebuffer[bt][gt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,gt);else R(k.__webglFramebuffer[bt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);f(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let bt=0,gt=ht.length;bt<gt;bt++){let Lt=ht[bt],_t=n.get(Lt);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),Z(i.TEXTURE_2D,Lt),R(k.__webglFramebuffer,I,Lt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),f(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(bt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,et.__webglTexture),Z(bt,E),E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)R(k.__webglFramebuffer[gt],I,E,i.COLOR_ATTACHMENT0,bt,gt);else R(k.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,bt,0);f(E)&&p(bt),e.unbindTexture()}I.depthBuffer&&B(I)}function tt(I){let E=I.textures;for(let k=0,et=E.length;k<et;k++){let ht=E[k];if(f(ht)){let it=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(ht).__webglTexture;e.bindTexture(it,Et),p(it),e.unbindTexture()}}}let z=[],w=[];function rt(I){if(I.samples>0){if(X(I)===!1){let E=I.textures,k=I.width,et=I.height,ht=i.COLOR_BUFFER_BIT,it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(I),bt=E.length>1;if(bt)for(let gt=0;gt<E.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<E.length;gt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Lt=n.get(E[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,k,et,0,0,k,et,ht,i.NEAREST),c===!0&&(z.length=0,w.length=0,z.push(i.COLOR_ATTACHMENT0+gt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(z.push(it),w.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let gt=0;gt<E.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Lt=n.get(E[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function K(I){return Math.min(r.maxSamples,I.samples)}function X(I){let E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Q(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function nt(I,E){let k=I.colorSpace,et=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==yr&&k!==ur&&(Ue.getTransfer(k)===qe?(et!==fi||ht!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function lt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=v,this.setTexture2D=ot,this.setTexture2DArray=st,this.setTexture3D=Y,this.setTextureCube=pt,this.rebindTextures=F,this.setupRenderTarget=G,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=R,this.useMultisampledRTT=X}function j_(i,t){function e(n,r=ur){let s,o=Ue.getTransfer(r);if(n===Vi)return i.UNSIGNED_BYTE;if(n===Wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===z0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===B0)return i.BYTE;if(n===k0)return i.SHORT;if(n===To)return i.UNSIGNED_SHORT;if(n===Gh)return i.INT;if(n===Gr)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===ko)return i.HALF_FLOAT;if(n===V0)return i.ALPHA;if(n===G0)return i.RGB;if(n===fi)return i.RGBA;if(n===W0)return i.LUMINANCE;if(n===X0)return i.LUMINANCE_ALPHA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===qh)return i.RED;if(n===Yh)return i.RED_INTEGER;if(n===q0)return i.RG;if(n===Zh)return i.RG_INTEGER;if(n===$h)return i.RGBA_INTEGER;if(n===Ia||n===La||n===Da||n===Ua)if(o===qe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Rl||n===Al||n===Cl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Il||n===Ll)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pl||n===Il)return o===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dl||n===Ul||n===Nl||n===Hl||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Yl||n===Zl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Na)return o===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Y0||n===$l||n===Kl||n===Jl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Na)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dh=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q_={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ey=`
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

}`,ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new qn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:ty,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mh=class extends mr{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=new ph,f=e.getContextAttributes(),p=null,x=null,M=[],b=[],D=new Nt,P=null,A=new vn;A.layers.enable(1),A.viewport=new Oe;let C=new vn;C.layers.enable(2),C.viewport=new Oe;let U=[A,C],y=new dh;y.layers.enable(1),y.layers.enable(2);let v=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let R=M[S];return R===void 0&&(R=new bo,M[S]=R),R.getTargetRaySpace()},this.getControllerGrip=function(S){let R=M[S];return R===void 0&&(R=new bo,M[S]=R),R.getGripSpace()},this.getHand=function(S){let R=M[S];return R===void 0&&(R=new bo,M[S]=R),R.getHandSpace()};function j(S){let R=b.indexOf(S.inputSource);if(R===-1)return;let H=M[R];H!==void 0&&(H.update(S.inputSource,S.frame,l||o),H.dispatchEvent({type:S.type,data:S.inputSource}))}function ot(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",ot),r.removeEventListener("inputsourceschange",st);for(let S=0;S<M.length;S++){let R=b[S];R!==null&&(b[S]=null,M[S].disconnect(R))}v=null,W=null,_.reset(),t.setRenderTarget(p),m=null,d=null,u=null,r=null,x=null,N.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){s=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){a=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(S){l=S},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(S){if(r=S,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",ot),r.addEventListener("inputsourceschange",st),f.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),r.renderState.layers===void 0){let R={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,R),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Gi(m.framebufferWidth,m.framebufferHeight,{format:fi,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let R=null,H=null,q=null;f.depth&&(q=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,R=f.stencil?Ds:Ts,H=f.stencil?Ls:Gr);let B={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(B),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Gi(d.textureWidth,d.textureHeight,{format:fi,type:Vi,depthTexture:new ja(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function st(S){for(let R=0;R<S.removed.length;R++){let H=S.removed[R],q=b.indexOf(H);q>=0&&(b[q]=null,M[q].disconnect(H))}for(let R=0;R<S.added.length;R++){let H=S.added[R],q=b.indexOf(H);if(q===-1){for(let F=0;F<M.length;F++)if(F>=b.length){b.push(H),q=F;break}else if(b[F]===null){b[F]=H,q=F;break}if(q===-1)break}let B=M[q];B&&B.connect(H)}}let Y=new T,pt=new T;function L(S,R,H){Y.setFromMatrixPosition(R.matrixWorld),pt.setFromMatrixPosition(H.matrixWorld);let q=Y.distanceTo(pt),B=R.projectionMatrix.elements,F=H.projectionMatrix.elements,G=B[14]/(B[10]-1),tt=B[14]/(B[10]+1),z=(B[9]+1)/B[5],w=(B[9]-1)/B[5],rt=(B[8]-1)/B[0],K=(F[8]+1)/F[0],X=G*rt,Q=G*K,nt=q/(-rt+K),lt=nt*-rt;if(R.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(lt),S.translateZ(nt),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),B[10]===-1)S.projectionMatrix.copy(R.projectionMatrix),S.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let I=G+nt,E=tt+nt,k=X-lt,et=Q+(q-lt),ht=z*tt/E*I,it=w*tt/E*I;S.projectionMatrix.makePerspective(k,et,ht,it,I,E),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function J(S,R){R===null?S.matrixWorld.copy(S.matrix):S.matrixWorld.multiplyMatrices(R.matrixWorld,S.matrix),S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(r===null)return;let R=S.near,H=S.far;_.texture!==null&&(_.depthNear>0&&(R=_.depthNear),_.depthFar>0&&(H=_.depthFar)),y.near=C.near=A.near=R,y.far=C.far=A.far=H,(v!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),v=y.near,W=y.far);let q=S.parent,B=y.cameras;J(y,q);for(let F=0;F<B.length;F++)J(B[F],q);B.length===2?L(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),V(S,y,q)};function V(S,R,H){H===null?S.matrix.copy(R.matrixWorld):(S.matrix.copy(H.matrixWorld),S.matrix.invert(),S.matrix.multiply(R.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(R.projectionMatrix),S.projectionMatrixInverse.copy(R.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=Ro*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(S){c=S,d!==null&&(d.fixedFoveation=S),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=S)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let Z=null;function ct(S,R){if(h=R.getViewerPose(l||o),g=R,h!==null){let H=h.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let q=!1;H.length!==y.cameras.length&&(y.cameras.length=0,q=!0);for(let F=0;F<H.length;F++){let G=H[F],tt=null;if(m!==null)tt=m.getViewport(G);else{let w=u.getViewSubImage(d,G);tt=w.viewport,F===0&&(t.setRenderTargetTextures(x,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(x))}let z=U[F];z===void 0&&(z=new vn,z.layers.enable(F),z.viewport=new Oe,U[F]=z),z.matrix.fromArray(G.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(G.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(tt.x,tt.y,tt.width,tt.height),F===0&&(y.matrix.copy(z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),q===!0&&y.cameras.push(z)}let B=r.enabledFeatures;if(B&&B.includes("depth-sensing")){let F=u.getDepthInformation(H[0]);F&&F.isValid&&F.texture&&_.init(t,F,r.renderState)}}for(let H=0;H<M.length;H++){let q=b[H],B=M[H];q!==null&&B!==void 0&&B.update(q,R,l||o)}Z&&Z(S,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),g=null}let N=new j0;N.setAnimationLoop(ct),this.setAnimationLoop=function(S){Z=S},this.dispose=function(){}}},Fr=new wn,ny=new ce;function iy(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,J0(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,x,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,x,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Xn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Xn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x=t.get(p),M=x.envMap,b=x.envMapRotation;M&&(f.envMap.value=M,Fr.copy(b),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),f.envMapRotation.value.setFromMatrix4(ny.makeRotationFromEuler(Fr)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,x,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*x,f.scale.value=M*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,x){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let x=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ry(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){let b=M.program;n.uniformBlockBinding(x,b)}function l(x,M){let b=r[x.id];b===void 0&&(g(x),b=h(x),r[x.id]=b,x.addEventListener("dispose",f));let D=M.program;n.updateUBOMapping(x,D);let P=t.render.frame;s[x.id]!==P&&(d(x),s[x.id]=P)}function h(x){let M=u();x.__bindingPointIndex=M;let b=i.createBuffer(),D=x.__size,P=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=r[x.id],b=x.uniforms,D=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,A=b.length;P<A;P++){let C=Array.isArray(b[P])?b[P]:[b[P]];for(let U=0,y=C.length;U<y;U++){let v=C[U];if(m(v,P,U,D)===!0){let W=v.__offset,j=Array.isArray(v.value)?v.value:[v.value],ot=0;for(let st=0;st<j.length;st++){let Y=j[st],pt=_(Y);typeof Y=="number"||typeof Y=="boolean"?(v.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,W+ot,v.__data)):Y.isMatrix3?(v.__data[0]=Y.elements[0],v.__data[1]=Y.elements[1],v.__data[2]=Y.elements[2],v.__data[3]=0,v.__data[4]=Y.elements[3],v.__data[5]=Y.elements[4],v.__data[6]=Y.elements[5],v.__data[7]=0,v.__data[8]=Y.elements[6],v.__data[9]=Y.elements[7],v.__data[10]=Y.elements[8],v.__data[11]=0):(Y.toArray(v.__data,ot),ot+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,M,b,D){let P=x.value,A=M+"_"+b;if(D[A]===void 0)return typeof P=="number"||typeof P=="boolean"?D[A]=P:D[A]=P.clone(),!0;{let C=D[A];if(typeof P=="number"||typeof P=="boolean"){if(C!==P)return D[A]=P,!0}else if(C.equals(P)===!1)return C.copy(P),!0}return!1}function g(x){let M=x.uniforms,b=0,D=16;for(let A=0,C=M.length;A<C;A++){let U=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,v=U.length;y<v;y++){let W=U[y],j=Array.isArray(W.value)?W.value:[W.value];for(let ot=0,st=j.length;ot<st;ot++){let Y=j[ot],pt=_(Y),L=b%D,J=L%pt.boundary,V=L+J;b+=J,V!==0&&D-V<pt.storage&&(b+=D-V),W.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=pt.storage}}}let P=b%D;return P>0&&(b+=D-P),x.__size=b,x.__cache={},this}function _(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function f(x){let M=x.target;M.removeEventListener("dispose",f);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Ns=class{constructor(t={}){let{canvas:e=ap(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=pr,this.toneMappingExposure=1;let M=this,b=!1,D=0,P=0,A=null,C=-1,U=null,y=new Oe,v=new Oe,W=null,j=new zt(0),ot=0,st=e.width,Y=e.height,pt=1,L=null,J=null,V=new Oe(0,0,st,Y),Z=new Oe(0,0,st,Y),ct=!1,N=new Co,S=!1,R=!1,H=new ce,q=new ce,B=new T,F=new Oe,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function z(){return A===null?pt:1}let w=n;function rt(O,ft){return e.getContext(O,ft)}try{let O={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",$t,!1),w===null){let ft="webgl2";if(w=rt(ft,O),w===null)throw rt(ft)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let K,X,Q,nt,lt,I,E,k,et,ht,it,Et,bt,gt,Lt,_t,At,Gt,Bt,Ct,Pt,Wt,ee,at;function Ut(){K=new M1(w),K.init(),Wt=new j_(w,K),X=new p1(w,K,t,Wt),Q=new $_(w),X.reverseDepthBuffer&&Q.buffers.depth.setReversed(!0),nt=new E1(w),lt=new H_,I=new J_(w,K,Q,lt,X,Wt,nt),E=new g1(M),k=new x1(M),et=new Pp(w),ee=new f1(w,et),ht=new b1(w,et,nt,ee),it=new S1(w,ht,et,nt),Bt=new w1(w,X,I),_t=new m1(lt),Et=new N_(M,E,k,K,X,ee,_t),bt=new iy(M,lt),gt=new O_,Lt=new W_(K),Gt=new u1(M,E,k,Q,it,d,c),At=new Y_(M,it,X),at=new ry(w,nt,X,Q),Ct=new d1(w,K,nt),Pt=new v1(w,K,nt),nt.programs=Et.programs,M.capabilities=X,M.extensions=K,M.properties=lt,M.renderLists=gt,M.shadowMap=At,M.state=Q,M.info=nt}Ut();let vt=new mh(M,w);this.xr=vt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let O=K.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=K.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(O){O!==void 0&&(pt=O,this.setSize(st,Y,!1))},this.getSize=function(O){return O.set(st,Y)},this.setSize=function(O,ft,yt=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=O,Y=ft,e.width=Math.floor(O*pt),e.height=Math.floor(ft*pt),yt===!0&&(e.style.width=O+"px",e.style.height=ft+"px"),this.setViewport(0,0,O,ft)},this.getDrawingBufferSize=function(O){return O.set(st*pt,Y*pt).floor()},this.setDrawingBufferSize=function(O,ft,yt){st=O,Y=ft,pt=yt,e.width=Math.floor(O*yt),e.height=Math.floor(ft*yt),this.setViewport(0,0,O,ft)},this.getCurrentViewport=function(O){return O.copy(y)},this.getViewport=function(O){return O.copy(V)},this.setViewport=function(O,ft,yt,Mt){O.isVector4?V.set(O.x,O.y,O.z,O.w):V.set(O,ft,yt,Mt),Q.viewport(y.copy(V).multiplyScalar(pt).round())},this.getScissor=function(O){return O.copy(Z)},this.setScissor=function(O,ft,yt,Mt){O.isVector4?Z.set(O.x,O.y,O.z,O.w):Z.set(O,ft,yt,Mt),Q.scissor(v.copy(Z).multiplyScalar(pt).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(O){Q.setScissorTest(ct=O)},this.setOpaqueSort=function(O){L=O},this.setTransparentSort=function(O){J=O},this.getClearColor=function(O){return O.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(O=!0,ft=!0,yt=!0){let Mt=0;if(O){let ut=!1;if(A!==null){let Ft=A.texture.format;ut=Ft===$h||Ft===Zh||Ft===Yh}if(ut){let Ft=A.texture.type,Zt=Ft===Vi||Ft===Gr||Ft===To||Ft===Ls||Ft===Wh||Ft===Xh,Kt=Gt.getClearColor(),jt=Gt.getClearAlpha(),te=Kt.r,se=Kt.g,ne=Kt.b;Zt?(m[0]=te,m[1]=se,m[2]=ne,m[3]=jt,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=te,g[1]=se,g[2]=ne,g[3]=jt,w.clearBufferiv(w.COLOR,0,g))}else Mt|=w.COLOR_BUFFER_BIT}ft&&(Mt|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),yt&&(Mt|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),gt.dispose(),Lt.dispose(),lt.dispose(),E.dispose(),k.dispose(),it.dispose(),ee.dispose(),at.dispose(),Et.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",$n),vt.removeEventListener("sessionend",Tr),_i.stop()};function Tt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let O=nt.autoReset,ft=At.enabled,yt=At.autoUpdate,Mt=At.needsUpdate,ut=At.type;Ut(),nt.autoReset=O,At.enabled=ft,At.autoUpdate=yt,At.needsUpdate=Mt,At.type=ut}function $t(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function fe(O){let ft=O.target;ft.removeEventListener("dispose",fe),Ve(ft)}function Ve(O){rn(O),lt.remove(O)}function rn(O){let ft=lt.get(O).programs;ft!==void 0&&(ft.forEach(function(yt){Et.releaseProgram(yt)}),O.isShaderMaterial&&Et.releaseShaderCache(O))}this.renderBufferDirect=function(O,ft,yt,Mt,ut,Ft){ft===null&&(ft=G);let Zt=ut.isMesh&&ut.matrixWorld.determinant()<0,Kt=yi(O,ft,yt,Mt,ut);Q.setMaterial(Mt,Zt);let jt=yt.index,te=1;if(Mt.wireframe===!0){if(jt=ht.getWireframeAttribute(yt),jt===void 0)return;te=2}let se=yt.drawRange,ne=yt.attributes.position,Ie=se.start*te,Fe=(se.start+se.count)*te;Ft!==null&&(Ie=Math.max(Ie,Ft.start*te),Fe=Math.min(Fe,(Ft.start+Ft.count)*te)),jt!==null?(Ie=Math.max(Ie,0),Fe=Math.min(Fe,jt.count)):ne!=null&&(Ie=Math.max(Ie,0),Fe=Math.min(Fe,ne.count));let Ge=Fe-Ie;if(Ge<0||Ge===1/0)return;ee.setup(ut,Mt,Kt,yt,jt);let Ke,we=Ct;if(jt!==null&&(Ke=et.get(jt),we=Pt,we.setIndex(Ke)),ut.isMesh)Mt.wireframe===!0?(Q.setLineWidth(Mt.wireframeLinewidth*z()),we.setMode(w.LINES)):we.setMode(w.TRIANGLES);else if(ut.isLine){let ie=Mt.linewidth;ie===void 0&&(ie=1),Q.setLineWidth(ie*z()),ut.isLineSegments?we.setMode(w.LINES):ut.isLineLoop?we.setMode(w.LINE_LOOP):we.setMode(w.LINE_STRIP)}else ut.isPoints?we.setMode(w.POINTS):ut.isSprite&&we.setMode(w.TRIANGLES);if(ut.isBatchedMesh)if(ut._multiDrawInstances!==null)we.renderMultiDrawInstances(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount,ut._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))we.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let ie=ut._multiDrawStarts,Me=ut._multiDrawCounts,Pe=ut._multiDrawCount,Je=jt?et.get(jt).bytesPerElement:1,nr=lt.get(Mt).currentProgram.getUniforms();for(let On=0;On<Pe;On++)nr.setValue(w,"_gl_DrawID",On),we.render(ie[On]/Je,Me[On])}else if(ut.isInstancedMesh)we.renderInstances(Ie,Ge,ut.count);else if(yt.isInstancedBufferGeometry){let ie=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,Me=Math.min(yt.instanceCount,ie);we.renderInstances(Ie,Ge,Me)}else we.render(Ie,Ge)};function ye(O,ft,yt){O.transparent===!0&&O.side===Le&&O.forceSinglePass===!1?(O.side=Xn,O.needsUpdate=!0,Ce(O,ft,yt),O.side=Un,O.needsUpdate=!0,Ce(O,ft,yt),O.side=Le):Ce(O,ft,yt)}this.compile=function(O,ft,yt=null){yt===null&&(yt=O),f=Lt.get(yt),f.init(ft),x.push(f),yt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ft.layers)&&(f.pushLight(ut),ut.castShadow&&f.pushShadow(ut))}),O!==yt&&O.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ft.layers)&&(f.pushLight(ut),ut.castShadow&&f.pushShadow(ut))}),f.setupLights();let Mt=new Set;return O.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let Ft=ut.material;if(Ft)if(Array.isArray(Ft))for(let Zt=0;Zt<Ft.length;Zt++){let Kt=Ft[Zt];ye(Kt,yt,ut),Mt.add(Kt)}else ye(Ft,yt,ut),Mt.add(Ft)}),x.pop(),f=null,Mt},this.compileAsync=function(O,ft,yt=null){let Mt=this.compile(O,ft,yt);return new Promise(ut=>{function Ft(){if(Mt.forEach(function(Zt){lt.get(Zt).currentProgram.isReady()&&Mt.delete(Zt)}),Mt.size===0){ut(O);return}setTimeout(Ft,10)}K.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let sn=null;function Gn(O){sn&&sn(O)}function $n(){_i.stop()}function Tr(){_i.start()}let _i=new j0;_i.setAnimationLoop(Gn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(O){sn=O,vt.setAnimationLoop(O),O===null?_i.stop():_i.start()},vt.addEventListener("sessionstart",$n),vt.addEventListener("sessionend",Tr),this.render=function(O,ft){if(ft!==void 0&&ft.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ft.parent===null&&ft.matrixWorldAutoUpdate===!0&&ft.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(ft),ft=vt.getCamera()),O.isScene===!0&&O.onBeforeRender(M,O,ft,A),f=Lt.get(O,x.length),f.init(ft),x.push(f),q.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),N.setFromProjectionMatrix(q),R=this.localClippingEnabled,S=_t.init(this.clippingPlanes,R),_=gt.get(O,p.length),_.init(),p.push(_),vt.enabled===!0&&vt.isPresenting===!0){let Ft=M.xr.getDepthSensingMesh();Ft!==null&&Qs(Ft,ft,-1/0,M.sortObjects)}Qs(O,ft,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(L,J),tt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,tt&&Gt.addToRenderList(_,O),this.info.render.frame++,S===!0&&_t.beginShadows();let yt=f.state.shadowsArray;At.render(yt,O,ft),S===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let Mt=_.opaque,ut=_.transmissive;if(f.setupLights(),ft.isArrayCamera){let Ft=ft.cameras;if(ut.length>0)for(let Zt=0,Kt=Ft.length;Zt<Kt;Zt++){let jt=Ft[Zt];Qi(Mt,ut,O,jt)}tt&&Gt.render(O);for(let Zt=0,Kt=Ft.length;Zt<Kt;Zt++){let jt=Ft[Zt];Yo(_,O,jt,jt.viewport)}}else ut.length>0&&Qi(Mt,ut,O,ft),tt&&Gt.render(O),Yo(_,O,ft);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),O.isScene===!0&&O.onAfterRender(M,O,ft),ee.resetDefaultState(),C=-1,U=null,x.pop(),x.length>0?(f=x[x.length-1],S===!0&&_t.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Qs(O,ft,yt,Mt){if(O.visible===!1)return;if(O.layers.test(ft.layers)){if(O.isGroup)yt=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ft);else if(O.isLight)f.pushLight(O),O.castShadow&&f.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||N.intersectsSprite(O)){Mt&&F.setFromMatrixPosition(O.matrixWorld).applyMatrix4(q);let Zt=it.update(O),Kt=O.material;Kt.visible&&_.push(O,Zt,Kt,yt,F.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||N.intersectsObject(O))){let Zt=it.update(O),Kt=O.material;if(Mt&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),F.copy(O.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),F.copy(Zt.boundingSphere.center)),F.applyMatrix4(O.matrixWorld).applyMatrix4(q)),Array.isArray(Kt)){let jt=Zt.groups;for(let te=0,se=jt.length;te<se;te++){let ne=jt[te],Ie=Kt[ne.materialIndex];Ie&&Ie.visible&&_.push(O,Zt,Ie,yt,F.z,ne)}}else Kt.visible&&_.push(O,Zt,Kt,yt,F.z,null)}}let Ft=O.children;for(let Zt=0,Kt=Ft.length;Zt<Kt;Zt++)Qs(Ft[Zt],ft,yt,Mt)}function Yo(O,ft,yt,Mt){let ut=O.opaque,Ft=O.transmissive,Zt=O.transparent;f.setupLightsView(yt),S===!0&&_t.setGlobalState(M.clippingPlanes,yt),Mt&&Q.viewport(y.copy(Mt)),ut.length>0&&tr(ut,ft,yt),Ft.length>0&&tr(Ft,ft,yt),Zt.length>0&&tr(Zt,ft,yt),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Qi(O,ft,yt,Mt){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Mt.id]===void 0&&(f.state.transmissionRenderTarget[Mt.id]=new Gi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?ko:Vi,minFilter:zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));let Ft=f.state.transmissionRenderTarget[Mt.id],Zt=Mt.viewport||y;Ft.setSize(Zt.z,Zt.w);let Kt=M.getRenderTarget();M.setRenderTarget(Ft),M.getClearColor(j),ot=M.getClearAlpha(),ot<1&&M.setClearColor(16777215,.5),M.clear(),tt&&Gt.render(yt);let jt=M.toneMapping;M.toneMapping=pr;let te=Mt.viewport;if(Mt.viewport!==void 0&&(Mt.viewport=void 0),f.setupLightsView(Mt),S===!0&&_t.setGlobalState(M.clippingPlanes,Mt),tr(O,yt,Mt),I.updateMultisampleRenderTarget(Ft),I.updateRenderTargetMipmap(Ft),K.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ne=0,Ie=ft.length;ne<Ie;ne++){let Fe=ft[ne],Ge=Fe.object,Ke=Fe.geometry,we=Fe.material,ie=Fe.group;if(we.side===Le&&Ge.layers.test(Mt.layers)){let Me=we.side;we.side=Xn,we.needsUpdate=!0,es(Ge,yt,Mt,Ke,we,ie),we.side=Me,we.needsUpdate=!0,se=!0}}se===!0&&(I.updateMultisampleRenderTarget(Ft),I.updateRenderTargetMipmap(Ft))}M.setRenderTarget(Kt),M.setClearColor(j,ot),te!==void 0&&(Mt.viewport=te),M.toneMapping=jt}function tr(O,ft,yt){let Mt=ft.isScene===!0?ft.overrideMaterial:null;for(let ut=0,Ft=O.length;ut<Ft;ut++){let Zt=O[ut],Kt=Zt.object,jt=Zt.geometry,te=Mt===null?Zt.material:Mt,se=Zt.group;Kt.layers.test(yt.layers)&&es(Kt,ft,yt,jt,te,se)}}function es(O,ft,yt,Mt,ut,Ft){O.onBeforeRender(M,ft,yt,Mt,ut,Ft),O.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ut.onBeforeRender(M,ft,yt,Mt,O,Ft),ut.transparent===!0&&ut.side===Le&&ut.forceSinglePass===!1?(ut.side=Xn,ut.needsUpdate=!0,M.renderBufferDirect(yt,ft,Mt,ut,O,Ft),ut.side=Un,ut.needsUpdate=!0,M.renderBufferDirect(yt,ft,Mt,ut,O,Ft),ut.side=Le):M.renderBufferDirect(yt,ft,Mt,ut,O,Ft),O.onAfterRender(M,ft,yt,Mt,ut,Ft)}function Ce(O,ft,yt){ft.isScene!==!0&&(ft=G);let Mt=lt.get(O),ut=f.state.lights,Ft=f.state.shadowsArray,Zt=ut.state.version,Kt=Et.getParameters(O,ut.state,Ft,ft,yt),jt=Et.getProgramCacheKey(Kt),te=Mt.programs;Mt.environment=O.isMeshStandardMaterial?ft.environment:null,Mt.fog=ft.fog,Mt.envMap=(O.isMeshStandardMaterial?k:E).get(O.envMap||Mt.environment),Mt.envMapRotation=Mt.environment!==null&&O.envMap===null?ft.environmentRotation:O.envMapRotation,te===void 0&&(O.addEventListener("dispose",fe),te=new Map,Mt.programs=te);let se=te.get(jt);if(se!==void 0){if(Mt.currentProgram===se&&Mt.lightsStateVersion===Zt)return Rr(O,Kt),se}else Kt.uniforms=Et.getUniforms(O),O.onBeforeCompile(Kt,M),se=Et.acquireProgram(Kt,jt),te.set(jt,se),Mt.uniforms=Kt.uniforms;let ne=Mt.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(ne.clippingPlanes=_t.uniform),Rr(O,Kt),Mt.needsLights=Ac(O),Mt.lightsStateVersion=Zt,Mt.needsLights&&(ne.ambientLightColor.value=ut.state.ambient,ne.lightProbe.value=ut.state.probe,ne.directionalLights.value=ut.state.directional,ne.directionalLightShadows.value=ut.state.directionalShadow,ne.spotLights.value=ut.state.spot,ne.spotLightShadows.value=ut.state.spotShadow,ne.rectAreaLights.value=ut.state.rectArea,ne.ltc_1.value=ut.state.rectAreaLTC1,ne.ltc_2.value=ut.state.rectAreaLTC2,ne.pointLights.value=ut.state.point,ne.pointLightShadows.value=ut.state.pointShadow,ne.hemisphereLights.value=ut.state.hemi,ne.directionalShadowMap.value=ut.state.directionalShadowMap,ne.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,ne.spotShadowMap.value=ut.state.spotShadowMap,ne.spotLightMatrix.value=ut.state.spotLightMatrix,ne.spotLightMap.value=ut.state.spotLightMap,ne.pointShadowMap.value=ut.state.pointShadowMap,ne.pointShadowMatrix.value=ut.state.pointShadowMatrix),Mt.currentProgram=se,Mt.uniformsList=null,se}function er(O){if(O.uniformsList===null){let ft=O.currentProgram.getUniforms();O.uniformsList=As.seqWithValue(ft.seq,O.uniforms)}return O.uniformsList}function Rr(O,ft){let yt=lt.get(O);yt.outputColorSpace=ft.outputColorSpace,yt.batching=ft.batching,yt.batchingColor=ft.batchingColor,yt.instancing=ft.instancing,yt.instancingColor=ft.instancingColor,yt.instancingMorph=ft.instancingMorph,yt.skinning=ft.skinning,yt.morphTargets=ft.morphTargets,yt.morphNormals=ft.morphNormals,yt.morphColors=ft.morphColors,yt.morphTargetsCount=ft.morphTargetsCount,yt.numClippingPlanes=ft.numClippingPlanes,yt.numIntersection=ft.numClipIntersection,yt.vertexAlphas=ft.vertexAlphas,yt.vertexTangents=ft.vertexTangents,yt.toneMapping=ft.toneMapping}function yi(O,ft,yt,Mt,ut){ft.isScene!==!0&&(ft=G),I.resetTextureUnits();let Ft=ft.fog,Zt=Mt.isMeshStandardMaterial?ft.environment:null,Kt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yr,jt=(Mt.isMeshStandardMaterial?k:E).get(Mt.envMap||Zt),te=Mt.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,se=!!yt.attributes.tangent&&(!!Mt.normalMap||Mt.anisotropy>0),ne=!!yt.morphAttributes.position,Ie=!!yt.morphAttributes.normal,Fe=!!yt.morphAttributes.color,Ge=pr;Mt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ge=M.toneMapping);let Ke=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,we=Ke!==void 0?Ke.length:0,ie=lt.get(Mt),Me=f.state.lights;if(S===!0&&(R===!0||O!==U)){let hn=O===U&&Mt.id===C;_t.setState(Mt,O,hn)}let Pe=!1;Mt.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Me.state.version||ie.outputColorSpace!==Kt||ut.isBatchedMesh&&ie.batching===!1||!ut.isBatchedMesh&&ie.batching===!0||ut.isBatchedMesh&&ie.batchingColor===!0&&ut.colorTexture===null||ut.isBatchedMesh&&ie.batchingColor===!1&&ut.colorTexture!==null||ut.isInstancedMesh&&ie.instancing===!1||!ut.isInstancedMesh&&ie.instancing===!0||ut.isSkinnedMesh&&ie.skinning===!1||!ut.isSkinnedMesh&&ie.skinning===!0||ut.isInstancedMesh&&ie.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&ie.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&ie.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&ie.instancingMorph===!1&&ut.morphTexture!==null||ie.envMap!==jt||Mt.fog===!0&&ie.fog!==Ft||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==_t.numPlanes||ie.numIntersection!==_t.numIntersection)||ie.vertexAlphas!==te||ie.vertexTangents!==se||ie.morphTargets!==ne||ie.morphNormals!==Ie||ie.morphColors!==Fe||ie.toneMapping!==Ge||ie.morphTargetsCount!==we)&&(Pe=!0):(Pe=!0,ie.__version=Mt.version);let Je=ie.currentProgram;Pe===!0&&(Je=Ce(Mt,ft,ut));let nr=!1,On=!1,Ar=!1,je=Je.getUniforms(),ti=ie.uniforms;if(Q.useProgram(Je.program)&&(nr=!0,On=!0,Ar=!0),Mt.id!==C&&(C=Mt.id,On=!0),nr||U!==O){X.reverseDepthBuffer?(H.copy(O.projectionMatrix),lp(H),hp(H),je.setValue(w,"projectionMatrix",H)):je.setValue(w,"projectionMatrix",O.projectionMatrix),je.setValue(w,"viewMatrix",O.matrixWorldInverse);let hn=je.map.cameraPosition;hn!==void 0&&hn.setValue(w,B.setFromMatrixPosition(O.matrixWorld)),X.logarithmicDepthBuffer&&je.setValue(w,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(Mt.isMeshPhongMaterial||Mt.isMeshToonMaterial||Mt.isMeshLambertMaterial||Mt.isMeshBasicMaterial||Mt.isMeshStandardMaterial||Mt.isShaderMaterial)&&je.setValue(w,"isOrthographic",O.isOrthographicCamera===!0),U!==O&&(U=O,On=!0,Ar=!0)}if(ut.isSkinnedMesh){je.setOptional(w,ut,"bindMatrix"),je.setOptional(w,ut,"bindMatrixInverse");let hn=ut.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),je.setValue(w,"boneTexture",hn.boneTexture,I))}ut.isBatchedMesh&&(je.setOptional(w,ut,"batchingTexture"),je.setValue(w,"batchingTexture",ut._matricesTexture,I),je.setOptional(w,ut,"batchingIdTexture"),je.setValue(w,"batchingIdTexture",ut._indirectTexture,I),je.setOptional(w,ut,"batchingColorTexture"),ut._colorsTexture!==null&&je.setValue(w,"batchingColorTexture",ut._colorsTexture,I));let ns=yt.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Bt.update(ut,yt,Je),(On||ie.receiveShadow!==ut.receiveShadow)&&(ie.receiveShadow=ut.receiveShadow,je.setValue(w,"receiveShadow",ut.receiveShadow)),Mt.isMeshGouraudMaterial&&Mt.envMap!==null&&(ti.envMap.value=jt,ti.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),Mt.isMeshStandardMaterial&&Mt.envMap===null&&ft.environment!==null&&(ti.envMapIntensity.value=ft.environmentIntensity),On&&(je.setValue(w,"toneMappingExposure",M.toneMappingExposure),ie.needsLights&&Rc(ti,Ar),Ft&&Mt.fog===!0&&bt.refreshFogUniforms(ti,Ft),bt.refreshMaterialUniforms(ti,Mt,pt,Y,f.state.transmissionRenderTarget[O.id]),As.upload(w,er(ie),ti,I)),Mt.isShaderMaterial&&Mt.uniformsNeedUpdate===!0&&(As.upload(w,er(ie),ti,I),Mt.uniformsNeedUpdate=!1),Mt.isSpriteMaterial&&je.setValue(w,"center",ut.center),je.setValue(w,"modelViewMatrix",ut.modelViewMatrix),je.setValue(w,"normalMatrix",ut.normalMatrix),je.setValue(w,"modelMatrix",ut.matrixWorld),Mt.isShaderMaterial||Mt.isRawShaderMaterial){let hn=Mt.uniformsGroups;for(let is=0,Zo=hn.length;is<Zo;is++){let to=hn[is];at.update(to,Je),at.bind(to,Je)}}return Je}function Rc(O,ft){O.ambientLightColor.needsUpdate=ft,O.lightProbe.needsUpdate=ft,O.directionalLights.needsUpdate=ft,O.directionalLightShadows.needsUpdate=ft,O.pointLights.needsUpdate=ft,O.pointLightShadows.needsUpdate=ft,O.spotLights.needsUpdate=ft,O.spotLightShadows.needsUpdate=ft,O.rectAreaLights.needsUpdate=ft,O.hemisphereLights.needsUpdate=ft}function Ac(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(O,ft,yt){lt.get(O.texture).__webglTexture=ft,lt.get(O.depthTexture).__webglTexture=yt;let Mt=lt.get(O);Mt.__hasExternalTextures=!0,Mt.__autoAllocateDepthBuffer=yt===void 0,Mt.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Mt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,ft){let yt=lt.get(O);yt.__webglFramebuffer=ft,yt.__useDefaultFramebuffer=ft===void 0},this.setRenderTarget=function(O,ft=0,yt=0){A=O,D=ft,P=yt;let Mt=!0,ut=null,Ft=!1,Zt=!1;if(O){let jt=lt.get(O);if(jt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(w.FRAMEBUFFER,null),Mt=!1;else if(jt.__webglFramebuffer===void 0)I.setupRenderTarget(O);else if(jt.__hasExternalTextures)I.rebindTextures(O,lt.get(O.texture).__webglTexture,lt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let ne=O.depthTexture;if(jt.__boundDepthTexture!==ne){if(ne!==null&&lt.has(ne)&&(O.width!==ne.image.width||O.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(O)}}let te=O.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Zt=!0);let se=lt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(se[ft])?ut=se[ft][yt]:ut=se[ft],Ft=!0):O.samples>0&&I.useMultisampledRTT(O)===!1?ut=lt.get(O).__webglMultisampledFramebuffer:Array.isArray(se)?ut=se[yt]:ut=se,y.copy(O.viewport),v.copy(O.scissor),W=O.scissorTest}else y.copy(V).multiplyScalar(pt).floor(),v.copy(Z).multiplyScalar(pt).floor(),W=ct;if(Q.bindFramebuffer(w.FRAMEBUFFER,ut)&&Mt&&Q.drawBuffers(O,ut),Q.viewport(y),Q.scissor(v),Q.setScissorTest(W),Ft){let jt=lt.get(O.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt.__webglTexture,yt)}else if(Zt){let jt=lt.get(O.texture),te=ft||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,jt.__webglTexture,yt||0,te)}C=-1},this.readRenderTargetPixels=function(O,ft,yt,Mt,ut,Ft,Zt){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=lt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt){Q.bindFramebuffer(w.FRAMEBUFFER,Kt);try{let jt=O.texture,te=jt.format,se=jt.type;if(!X.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!X.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ft>=0&&ft<=O.width-Mt&&yt>=0&&yt<=O.height-ut&&w.readPixels(ft,yt,Mt,ut,Wt.convert(te),Wt.convert(se),Ft)}finally{let jt=A!==null?lt.get(A).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(O,ft,yt,Mt,ut,Ft,Zt){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=lt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt){let jt=O.texture,te=jt.format,se=jt.type;if(!X.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!X.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ft>=0&&ft<=O.width-Mt&&yt>=0&&yt<=O.height-ut){Q.bindFramebuffer(w.FRAMEBUFFER,Kt);let ne=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ne),w.bufferData(w.PIXEL_PACK_BUFFER,Ft.byteLength,w.STREAM_READ),w.readPixels(ft,yt,Mt,ut,Wt.convert(te),Wt.convert(se),0);let Ie=A!==null?lt.get(A).__webglFramebuffer:null;Q.bindFramebuffer(w.FRAMEBUFFER,Ie);let Fe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await cp(w,Fe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ne),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Ft),w.deleteBuffer(ne),w.deleteSync(Fe),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,ft=null,yt=0){O.isTexture!==!0&&(Ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ft=arguments[0]||null,O=arguments[1]);let Mt=Math.pow(2,-yt),ut=Math.floor(O.image.width*Mt),Ft=Math.floor(O.image.height*Mt),Zt=ft!==null?ft.x:0,Kt=ft!==null?ft.y:0;I.setTexture2D(O,0),w.copyTexSubImage2D(w.TEXTURE_2D,yt,0,0,Zt,Kt,ut,Ft),Q.unbindTexture()},this.copyTextureToTexture=function(O,ft,yt=null,Mt=null,ut=0){O.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture function signature has changed."),Mt=arguments[0]||null,O=arguments[1],ft=arguments[2],ut=arguments[3]||0,yt=null);let Ft,Zt,Kt,jt,te,se;yt!==null?(Ft=yt.max.x-yt.min.x,Zt=yt.max.y-yt.min.y,Kt=yt.min.x,jt=yt.min.y):(Ft=O.image.width,Zt=O.image.height,Kt=0,jt=0),Mt!==null?(te=Mt.x,se=Mt.y):(te=0,se=0);let ne=Wt.convert(ft.format),Ie=Wt.convert(ft.type);I.setTexture2D(ft,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ft.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ft.unpackAlignment);let Fe=w.getParameter(w.UNPACK_ROW_LENGTH),Ge=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ke=w.getParameter(w.UNPACK_SKIP_PIXELS),we=w.getParameter(w.UNPACK_SKIP_ROWS),ie=w.getParameter(w.UNPACK_SKIP_IMAGES),Me=O.isCompressedTexture?O.mipmaps[ut]:O.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Me.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Me.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Kt),w.pixelStorei(w.UNPACK_SKIP_ROWS,jt),O.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ut,te,se,Ft,Zt,ne,Ie,Me.data):O.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ut,te,se,Me.width,Me.height,ne,Me.data):w.texSubImage2D(w.TEXTURE_2D,ut,te,se,Ft,Zt,ne,Ie,Me),w.pixelStorei(w.UNPACK_ROW_LENGTH,Fe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ge),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ke),w.pixelStorei(w.UNPACK_SKIP_ROWS,we),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ie),ut===0&&ft.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(O,ft,yt=null,Mt=null,ut=0){O.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),yt=arguments[0]||null,Mt=arguments[1]||null,O=arguments[2],ft=arguments[3],ut=arguments[4]||0);let Ft,Zt,Kt,jt,te,se,ne,Ie,Fe,Ge=O.isCompressedTexture?O.mipmaps[ut]:O.image;yt!==null?(Ft=yt.max.x-yt.min.x,Zt=yt.max.y-yt.min.y,Kt=yt.max.z-yt.min.z,jt=yt.min.x,te=yt.min.y,se=yt.min.z):(Ft=Ge.width,Zt=Ge.height,Kt=Ge.depth,jt=0,te=0,se=0),Mt!==null?(ne=Mt.x,Ie=Mt.y,Fe=Mt.z):(ne=0,Ie=0,Fe=0);let Ke=Wt.convert(ft.format),we=Wt.convert(ft.type),ie;if(ft.isData3DTexture)I.setTexture3D(ft,0),ie=w.TEXTURE_3D;else if(ft.isDataArrayTexture||ft.isCompressedArrayTexture)I.setTexture2DArray(ft,0),ie=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ft.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ft.unpackAlignment);let Me=w.getParameter(w.UNPACK_ROW_LENGTH),Pe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Je=w.getParameter(w.UNPACK_SKIP_PIXELS),nr=w.getParameter(w.UNPACK_SKIP_ROWS),On=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ge.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ge.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,jt),w.pixelStorei(w.UNPACK_SKIP_ROWS,te),w.pixelStorei(w.UNPACK_SKIP_IMAGES,se),O.isDataTexture||O.isData3DTexture?w.texSubImage3D(ie,ut,ne,Ie,Fe,Ft,Zt,Kt,Ke,we,Ge.data):ft.isCompressedArrayTexture?w.compressedTexSubImage3D(ie,ut,ne,Ie,Fe,Ft,Zt,Kt,Ke,Ge.data):w.texSubImage3D(ie,ut,ne,Ie,Fe,Ft,Zt,Kt,Ke,we,Ge),w.pixelStorei(w.UNPACK_ROW_LENGTH,Me),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Pe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(w.UNPACK_SKIP_ROWS,nr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,On),ut===0&&ft.generateMipmaps&&w.generateMipmap(ie),Q.unbindTexture()},this.initRenderTarget=function(O){lt.get(O).__webglFramebuffer===void 0&&I.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?I.setTextureCube(O,0):O.isData3DTexture?I.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?I.setTexture2DArray(O,0):I.setTexture2D(O,0),Q.unbindTexture()},this.resetState=function(){D=0,P=0,A=null,Q.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Jh?"display-p3":"srgb",e.unpackColorSpace=Ue.workingColorSpace===dc?"display-p3":"srgb"}};var Qa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hs=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},gh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ql,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bn=new T,tc=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix4(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.applyNormalMatrix(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.transformDirection(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ui(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zn=class extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xs,ho=new T,Ms=new T,bs=new T,vs=new Nt,uo=new Nt,rf=new ce,xa=new T,fo=new T,Ma=new T,v0=new Nt,cl=new Nt,E0=new Nt,jn=class extends dn{constructor(t=new Zn){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gh(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new tc(n,3,0,!1)),xs.setAttribute("uv",new tc(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),rf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;ba(xa.set(-.5,-.5,0),bs,o,Ms,r,s),ba(fo.set(.5,-.5,0),bs,o,Ms,r,s),ba(Ma.set(.5,.5,0),bs,o,Ms,r,s),v0.set(0,0),cl.set(1,0),E0.set(1,1);let a=t.ray.intersectTriangle(xa,fo,Ma,!1,ho);if(a===null&&(ba(fo.set(-.5,.5,0),bs,o,Ms,r,s),cl.set(0,1),a=t.ray.intersectTriangle(xa,Ma,fo,!1,ho),a===null))return;let c=t.ray.origin.distanceTo(ho);c<t.near||c>t.far||e.push({distance:c,point:ho.clone(),uv:fr.getInterpolation(ho,xa,fo,Ma,v0,cl,E0,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ba(i,t,e,n,r,s){vs.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(uo.x=s*vs.x-r*vs.y,uo.y=r*vs.x+s*vs.y):uo.copy(vs),i.copy(t),i.x+=uo.x,i.y+=uo.y,i.applyMatrix4(rf)}var _h=class extends qn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=Rn,h=Rn,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ec=class extends De{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new ce,w0=new ce,va=[],S0=new Wi,sy=new ce,po=new St,mo=new Xi,Fs=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,sy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),S0.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(S0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),mo.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(mo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),t.ray.intersectsSphere(mo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Es),w0.multiplyMatrices(n,Es),po.matrixWorld=w0,po.raycast(t,va);for(let o=0,a=va.length;o<a;o++){let c=va[o];c.instanceId=s,c.object=this,e.push(c)}va.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new _h(new Float32Array(r*this.count),r,this.count,qh,Mi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Po=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},nc=new T,ic=new T,T0=new ce,go=new Ao,Ea=new Xi,ll=new T,R0=new T,rc=class extends dn{constructor(t=new be,e=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)nc.fromBufferAttribute(e,r-1),ic.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=nc.distanceTo(ic);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,t.ray.intersectsSphere(Ea)===!1)return;T0.copy(r).invert(),go.copy(t.ray).applyMatrix4(T0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=h.getX(_),x=h.getX(_+1),M=wa(this,t,go,c,p,x);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(g-1),f=h.getX(m),p=wa(this,t,go,c,_,f);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=wa(this,t,go,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=wa(this,t,go,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function wa(i,t,e,n,r,s){let o=i.geometry.attributes.position;if(nc.fromBufferAttribute(o,r),ic.fromBufferAttribute(o,s),e.distanceSqToSegment(nc,ic,ll,R0)>n)return;ll.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ll);if(!(c<t.near||c>t.far))return{distance:c,point:R0.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var gr=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},A0=new ce,yh=new Ao,Sa=new Xi,Ta=new T,_r=class extends dn{constructor(t=new be,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=s,t.ray.intersectsSphere(Sa)===!1)return;A0.copy(r).invert(),yh.copy(t.ray).applyMatrix4(A0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let f=l.getX(g);Ta.fromBufferAttribute(u,f),C0(Ta,f,c,r,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Ta.fromBufferAttribute(u,g),C0(Ta,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function C0(i,t,e,n,r,s,o){let a=yh.distanceSqToPoint(i);if(a<e){let c=new T;yh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var An=class extends qn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Nt:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,r=[],s=[],o=[],a=new T,c=new ce;for(let m=0;m<=t;m++){let g=m/t;r[m]=this.getTangentAt(g,new T)}s[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(bn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(bn(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Io=class extends ni{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Nt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xh=class extends Io{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tu(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,r(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Ra=new T,hl=new tu,ul=new tu,fl=new tu,Mh=class extends ni{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new T){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Ra.subVectors(r[0],r[1]).add(r[0]),l=Ra);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ra.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),hl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,f),ul.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,f),fl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ul.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),fl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(hl.calc(c),ul.calc(c),fl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new T().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function P0(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function oy(i,t){let e=1-i;return e*e*t}function ay(i,t){return 2*(1-i)*i*t}function cy(i,t){return i*i*t}function vo(i,t,e,n){return oy(i,t)+ay(i,e)+cy(i,n)}function ly(i,t){let e=1-i;return e*e*e*t}function hy(i,t){let e=1-i;return 3*e*e*i*t}function uy(i,t){return 3*(1-i)*i*i*t}function fy(i,t){return i*i*i*t}function Eo(i,t,e,n,r){return ly(i,t)+hy(i,e)+uy(i,n)+fy(i,r)}var sc=class extends ni{constructor(t=new Nt,e=new Nt,n=new Nt,r=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Nt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Eo(t,r.x,s.x,o.x,a.x),Eo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bh=class extends ni{constructor(t=new T,e=new T,n=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new T){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Eo(t,r.x,s.x,o.x,a.x),Eo(t,r.y,s.y,o.y,a.y),Eo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oc=class extends ni{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vh=class extends ni{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ac=class extends ni{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(vo(t,r.x,s.x,o.x),vo(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eh=class extends ni{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(vo(t,r.x,s.x,o.x),vo(t,r.y,s.y,o.y),vo(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cc=class extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(P0(a,c.x,l.x,h.x,u.x),P0(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Nt().fromArray(r))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:Mh,CubicBezierCurve:sc,CubicBezierCurve3:bh,EllipseCurve:Io,LineCurve:oc,LineCurve3:vh,QuadraticBezierCurve:ac,QuadraticBezierCurve3:Eh,SplineCurve:cc}),Sh=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new wh[r.type]().fromJSON(r))}return this}},Lo=class extends Sh{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new oc(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new ac(this.currentPoint.clone(),new Nt(t,e),new Nt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new sc(this.currentPoint.clone(),new Nt(t,e),new Nt(n,r),new Nt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new cc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new Io(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Th=class i extends be{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=bn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new T,d=new Nt,m=new T,g=new T,_=new T,f=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:f=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let x=0;x<=e;x++){let M=n+x*h*r,b=Math.sin(M),D=Math.cos(M);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*b,u.y=t[P].y,u.z=t[P].x*D,o.push(u.x,u.y,u.z),d.x=x/e,d.y=P/(t.length-1),a.push(d.x,d.y);let A=c[3*P+0]*b,C=c[3*P+1],U=c[3*P+0]*D;l.push(A,C,U)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){let b=M+x*t.length,D=b,P=b+t.length,A=b+t.length+1,C=b+1;s.push(D,P,C),s.push(A,C,P)}this.setIndex(s),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Wr=class i extends Th{constructor(t=1,e=1,n=4,r=8){let s=new Lo;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Do=class i extends be{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new T,h=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ee=class i extends be{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],g=0,_=[],f=n/2,p=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(m,2));function x(){let b=new T,D=new T,P=0,A=(e-t)/n;for(let C=0;C<=s;C++){let U=[],y=C/s,v=y*(e-t)+t;for(let W=0;W<=r;W++){let j=W/r,ot=j*c+a,st=Math.sin(ot),Y=Math.cos(ot);D.x=v*st,D.y=-y*n+f,D.z=v*Y,u.push(D.x,D.y,D.z),b.set(st,A,Y).normalize(),d.push(b.x,b.y,b.z),m.push(j,1-y),U.push(g++)}_.push(U)}for(let C=0;C<r;C++)for(let U=0;U<s;U++){let y=_[U][C],v=_[U+1][C],W=_[U+1][C+1],j=_[U][C+1];t>0&&(h.push(y,v,j),P+=3),e>0&&(h.push(v,W,j),P+=3)}l.addGroup(p,P,0),p+=P}function M(b){let D=g,P=new Nt,A=new T,C=0,U=b===!0?t:e,y=b===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,f*y,0),d.push(0,y,0),m.push(.5,.5),g++;let v=g;for(let W=0;W<=r;W++){let ot=W/r*c+a,st=Math.cos(ot),Y=Math.sin(ot);A.x=U*Y,A.y=f*y,A.z=U*st,u.push(A.x,A.y,A.z),d.push(0,y,0),P.x=st*.5+.5,P.y=Y*.5*y+.5,m.push(P.x,P.y),g++}for(let W=0;W<r;W++){let j=D+W,ot=v+W;b===!0?h.push(ot,ot+1,j):h.push(ot+1,ot,j),C+=3}l.addGroup(p,C,b===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nn=class i extends Ee{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lc=class i extends be{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let M=new T,b=new T,D=new T;for(let P=0;P<e.length;P+=3)m(e[P+0],M),m(e[P+1],b),m(e[P+2],D),c(M,b,D,x)}function c(x,M,b,D){let P=D+1,A=[];for(let C=0;C<=P;C++){A[C]=[];let U=x.clone().lerp(b,C/P),y=M.clone().lerp(b,C/P),v=P-C;for(let W=0;W<=v;W++)W===0&&C===P?A[C][W]=U:A[C][W]=U.clone().lerp(y,W/v)}for(let C=0;C<P;C++)for(let U=0;U<2*(P-C)-1;U++){let y=Math.floor(U/2);U%2===0?(d(A[C][y+1]),d(A[C+1][y]),d(A[C][y])):(d(A[C][y+1]),d(A[C+1][y+1]),d(A[C+1][y]))}}function l(x){let M=new T;for(let b=0;b<s.length;b+=3)M.x=s[b+0],M.y=s[b+1],M.z=s[b+2],M.normalize().multiplyScalar(x),s[b+0]=M.x,s[b+1]=M.y,s[b+2]=M.z}function h(){let x=new T;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];let b=f(x)/2/Math.PI+.5,D=p(x)/Math.PI+.5;o.push(b,1-D)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let M=o[x+0],b=o[x+2],D=o[x+4],P=Math.max(M,b,D),A=Math.min(M,b,D);P>.9&&A<.1&&(M<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),D<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function m(x,M){let b=x*3;M.x=t[b+0],M.y=t[b+1],M.z=t[b+2]}function g(){let x=new T,M=new T,b=new T,D=new T,P=new Nt,A=new Nt,C=new Nt;for(let U=0,y=0;U<s.length;U+=9,y+=6){x.set(s[U+0],s[U+1],s[U+2]),M.set(s[U+3],s[U+4],s[U+5]),b.set(s[U+6],s[U+7],s[U+8]),P.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),D.copy(x).add(M).add(b).divideScalar(3);let v=f(D);_(P,y+0,x,v),_(A,y+2,M,v),_(C,y+4,b,v)}}function _(x,M,b,D){D<0&&x.x===1&&(o[M]=x.x-1),b.x===0&&b.z===0&&(o[M]=D/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Xr=class extends Lo{constructor(t){super(t),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Lo().fromJSON(r))}return this}},dy={triangulate:function(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=sf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=yy(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Uo(s,o,e,a,c,m,0),o}};function sf(i,t,e,n,r){let s,o;if(r===Cy(i,t,e,n)>0)for(s=t;s<e;s+=n)o=I0(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=I0(s,i[s],i[s+1],o);return o&&mc(o,o.next)&&(Ho(o),o=o.next),o}function qr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mc(e,e.next)||tn(e.prev,e,e.next)===0)){if(Ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Uo(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Ey(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?my(i,n,r,s):py(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ho(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=gy(qr(i),t,e),Uo(i,t,e,n,r,s,2)):o===2&&_y(i,t,e,n,r,s):Uo(qr(i),t,e,n,r,s,1);break}}}function py(i){let t=i.prev,e=i,n=i.next;if(tn(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&Ss(r,a,s,c,o,l,g.x,g.y)&&tn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function my(i,t,e,n){let r=i.prev,s=i,o=i.next;if(tn(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,p=Rh(m,g,t,e,n),x=Rh(_,f,t,e,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=p&&b&&b.z<=x;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==r&&M!==o&&Ss(a,h,c,u,l,d,M.x,M.y)&&tn(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&Ss(a,h,c,u,l,d,b.x,b.y)&&tn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=p;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==r&&M!==o&&Ss(a,h,c,u,l,d,M.x,M.y)&&tn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=x;){if(b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&Ss(a,h,c,u,l,d,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function gy(i,t,e){let n=i;do{let r=n.prev,s=n.next.next;!mc(r,s)&&of(r,n,n.next,s)&&No(r,s)&&No(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ho(n),Ho(n.next),n=i=s),n=n.next}while(n!==i);return qr(n)}function _y(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ty(o,a)){let c=af(o,a);o=qr(o,o.next),c=qr(c,c.next),Uo(o,t,e,n,r,s,0),Uo(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function yy(i,t,e,n){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=sf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(Sy(l));for(r.sort(xy),s=0;s<r.length;s++)e=My(r[s],e);return e}function xy(i,t){return i.x-t.x}function My(i,t){let e=by(i,t);if(!e)return t;let n=af(e,i);return qr(n,n.next),qr(e,e.next)}function by(i,t){let e=t,n=-1/0,r,s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Ss(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),No(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&vy(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function vy(i,t){return tn(i.prev,i,t.prev)<0&&tn(t.next,i,i.next)<0}function Ey(i,t,e,n){let r=i;do r.z===0&&(r.z=Rh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,wy(r)}function wy(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Rh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ss(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ty(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ry(i,t)&&(No(i,t)&&No(t,i)&&Ay(i,t)&&(tn(i.prev,i,t.prev)||tn(i,t.prev,t))||mc(i,t)&&tn(i.prev,i,i.next)>0&&tn(t.prev,t,t.next)>0)}function tn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mc(i,t){return i.x===t.x&&i.y===t.y}function of(i,t,e,n){let r=Ca(tn(i,t,e)),s=Ca(tn(i,t,n)),o=Ca(tn(e,n,i)),a=Ca(tn(e,n,t));return!!(r!==s&&o!==a||r===0&&Aa(i,e,t)||s===0&&Aa(i,n,t)||o===0&&Aa(e,i,n)||a===0&&Aa(e,t,n))}function Aa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ca(i){return i>0?1:i<0?-1:0}function Ry(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&of(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function No(i,t){return tn(i.prev,i,i.next)<0?tn(i,t,i.next)>=0&&tn(i,i.prev,t)>=0:tn(i,t,i.prev)<0||tn(i,i.next,t)<0}function Ay(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function af(i,t){let e=new Ah(i.i,i.x,i.y),n=new Ah(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function I0(i,t,e,n){let r=new Ah(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ah(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cy(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var wo=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];L0(t),D0(n,t);let o=t.length;e.forEach(L0);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,D0(n,e[c]);let a=dy.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function L0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function D0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Os=class i extends be{constructor(t=new Xr([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new oe(r,3)),this.setAttribute("uv",new oe(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Py,M,b=!1,D,P,A,C;p&&(M=p.getSpacedPoints(h),b=!0,d=!1,D=p.computeFrenetFrames(h,!1),P=new T,A=new T,C=new T),d||(f=0,m=0,g=0,_=0);let U=a.extractPoints(l),y=U.shape,v=U.holes;if(!wo.isClockWise(y)){y=y.reverse();for(let z=0,w=v.length;z<w;z++){let rt=v[z];wo.isClockWise(rt)&&(v[z]=rt.reverse())}}let j=wo.triangulateShape(y,v),ot=y;for(let z=0,w=v.length;z<w;z++){let rt=v[z];y=y.concat(rt)}function st(z,w,rt){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(w,rt)}let Y=y.length,pt=j.length;function L(z,w,rt){let K,X,Q,nt=z.x-w.x,lt=z.y-w.y,I=rt.x-z.x,E=rt.y-z.y,k=nt*nt+lt*lt,et=nt*E-lt*I;if(Math.abs(et)>Number.EPSILON){let ht=Math.sqrt(k),it=Math.sqrt(I*I+E*E),Et=w.x-lt/ht,bt=w.y+nt/ht,gt=rt.x-E/it,Lt=rt.y+I/it,_t=((gt-Et)*E-(Lt-bt)*I)/(nt*E-lt*I);K=Et+nt*_t-z.x,X=bt+lt*_t-z.y;let At=K*K+X*X;if(At<=2)return new Nt(K,X);Q=Math.sqrt(At/2)}else{let ht=!1;nt>Number.EPSILON?I>Number.EPSILON&&(ht=!0):nt<-Number.EPSILON?I<-Number.EPSILON&&(ht=!0):Math.sign(lt)===Math.sign(E)&&(ht=!0),ht?(K=-lt,X=nt,Q=Math.sqrt(k)):(K=nt,X=lt,Q=Math.sqrt(k/2))}return new Nt(K/Q,X/Q)}let J=[];for(let z=0,w=ot.length,rt=w-1,K=z+1;z<w;z++,rt++,K++)rt===w&&(rt=0),K===w&&(K=0),J[z]=L(ot[z],ot[rt],ot[K]);let V=[],Z,ct=J.concat();for(let z=0,w=v.length;z<w;z++){let rt=v[z];Z=[];for(let K=0,X=rt.length,Q=X-1,nt=K+1;K<X;K++,Q++,nt++)Q===X&&(Q=0),nt===X&&(nt=0),Z[K]=L(rt[K],rt[Q],rt[nt]);V.push(Z),ct=ct.concat(Z)}for(let z=0;z<f;z++){let w=z/f,rt=m*Math.cos(w*Math.PI/2),K=g*Math.sin(w*Math.PI/2)+_;for(let X=0,Q=ot.length;X<Q;X++){let nt=st(ot[X],J[X],K);q(nt.x,nt.y,-rt)}for(let X=0,Q=v.length;X<Q;X++){let nt=v[X];Z=V[X];for(let lt=0,I=nt.length;lt<I;lt++){let E=st(nt[lt],Z[lt],K);q(E.x,E.y,-rt)}}}let N=g+_;for(let z=0;z<Y;z++){let w=d?st(y[z],ct[z],N):y[z];b?(A.copy(D.normals[0]).multiplyScalar(w.x),P.copy(D.binormals[0]).multiplyScalar(w.y),C.copy(M[0]).add(A).add(P),q(C.x,C.y,C.z)):q(w.x,w.y,0)}for(let z=1;z<=h;z++)for(let w=0;w<Y;w++){let rt=d?st(y[w],ct[w],N):y[w];b?(A.copy(D.normals[z]).multiplyScalar(rt.x),P.copy(D.binormals[z]).multiplyScalar(rt.y),C.copy(M[z]).add(A).add(P),q(C.x,C.y,C.z)):q(rt.x,rt.y,u/h*z)}for(let z=f-1;z>=0;z--){let w=z/f,rt=m*Math.cos(w*Math.PI/2),K=g*Math.sin(w*Math.PI/2)+_;for(let X=0,Q=ot.length;X<Q;X++){let nt=st(ot[X],J[X],K);q(nt.x,nt.y,u+rt)}for(let X=0,Q=v.length;X<Q;X++){let nt=v[X];Z=V[X];for(let lt=0,I=nt.length;lt<I;lt++){let E=st(nt[lt],Z[lt],K);b?q(E.x,E.y+M[h-1].y,M[h-1].x+rt):q(E.x,E.y,u+rt)}}}S(),R();function S(){let z=r.length/3;if(d){let w=0,rt=Y*w;for(let K=0;K<pt;K++){let X=j[K];B(X[2]+rt,X[1]+rt,X[0]+rt)}w=h+f*2,rt=Y*w;for(let K=0;K<pt;K++){let X=j[K];B(X[0]+rt,X[1]+rt,X[2]+rt)}}else{for(let w=0;w<pt;w++){let rt=j[w];B(rt[2],rt[1],rt[0])}for(let w=0;w<pt;w++){let rt=j[w];B(rt[0]+Y*h,rt[1]+Y*h,rt[2]+Y*h)}}n.addGroup(z,r.length/3-z,0)}function R(){let z=r.length/3,w=0;H(ot,w),w+=ot.length;for(let rt=0,K=v.length;rt<K;rt++){let X=v[rt];H(X,w),w+=X.length}n.addGroup(z,r.length/3-z,1)}function H(z,w){let rt=z.length;for(;--rt>=0;){let K=rt,X=rt-1;X<0&&(X=z.length-1);for(let Q=0,nt=h+f*2;Q<nt;Q++){let lt=Y*Q,I=Y*(Q+1),E=w+K+lt,k=w+X+lt,et=w+X+I,ht=w+K+I;F(E,k,et,ht)}}}function q(z,w,rt){c.push(z),c.push(w),c.push(rt)}function B(z,w,rt){G(z),G(w),G(rt);let K=r.length/3,X=x.generateTopUV(n,r,K-3,K-2,K-1);tt(X[0]),tt(X[1]),tt(X[2])}function F(z,w,rt,K){G(z),G(w),G(K),G(w),G(rt),G(K);let X=r.length/3,Q=x.generateSideWallUV(n,r,X-6,X-3,X-2,X-1);tt(Q[0]),tt(Q[1]),tt(Q[3]),tt(Q[1]),tt(Q[2]),tt(Q[3])}function G(z){r.push(c[z*3+0]),r.push(c[z*3+1]),r.push(c[z*3+2])}function tt(z){s.push(z.x),s.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Iy(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new wh[r.type]().fromJSON(r)),new i(n,t.options)}},Py={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new Nt(s,o),new Nt(a,c),new Nt(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Nt(o,1-c),new Nt(l,1-u),new Nt(d,1-g),new Nt(_,1-p)]:[new Nt(a,1-c),new Nt(h,1-u),new Nt(m,1-g),new Nt(f,1-p)]}};function Iy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var yn=class i extends lc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fo=class i extends lc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ne=class i extends be{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new T,d=new T,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){let x=[],M=p/n,b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){let P=D/e;u.x=-t*Math.cos(r+P*s)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(r+P*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(P+b,1-M),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){let M=h[p][x+1],b=h[p][x],D=h[p+1][x],P=h[p+1][x+1];(p!==0||o>0)&&m.push(M,b,P),(p!==n-1||c<Math.PI)&&m.push(b,D,P)}this.setIndex(m),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zn=class i extends be{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let _=g/r*s,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let _=(r+1)*m+g-1,f=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,x=(r+1)*m+g;o.push(_,f,x),o.push(f,p,x)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Te=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Bs=class extends di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Pa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ly(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ks=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ch=class extends ks{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pu,endingEnd:Pu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Iu:s=t,a=2*e-n;break;case Lu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Iu:o=t,c=2*n-e;break;case Lu:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,x=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-m)*f+(1.5+m)*_+.5*g,b=m*f-m*_;for(let D=0;D!==a;++D)s[D]=p*o[h+D]+x*o[l+D]+M*o[c+D]+b*o[u+D];return s}},Ph=class extends ks{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},Ih=class extends ks{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pa(e,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Pa(t.times,Array),values:Pa(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ch(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fa:e=this.InterpolantFactoryMethodDiscrete;break;case jl:e=this.InterpolantFactoryMethodLinear;break;case Uc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&Ly(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Uc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=jl;var Yr=class extends pi{constructor(t,e,n){super(t,e,n)}};Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Fa;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends pi{};Lh.prototype.ValueTypeName="color";var Dh=class extends pi{};Dh.prototype.ValueTypeName="number";var Uh=class extends ks{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)En.slerpFlat(s,0,o,l-a,o,l,c);return s}},hc=class extends pi{InterpolantFactoryMethodLinear(t){return new Uh(this.times,this.values,this.getValueSize(),t)}};hc.prototype.ValueTypeName="quaternion";hc.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends pi{constructor(t,e,n){super(t,e,n)}};Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Fa;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nh=class extends pi{};Nh.prototype.ValueTypeName="vector";var Hh=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Dy=new Hh,Fh=class{constructor(t){this.manager=t!==void 0?t:Dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oo=class extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},zs=class extends Oo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dl=new ce,U0=new T,N0=new T,uc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;U0.setFromMatrixPosition(t.matrixWorld),e.position.copy(U0),N0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(N0),e.updateMatrixWorld(),dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var H0=new ce,_o=new T,pl=new T,Oh=class extends uc{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_o.setFromMatrixPosition(t.matrixWorld),n.position.copy(_o),pl.copy(n.position),pl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pl),n.updateMatrixWorld(),r.makeTranslation(-_o.x,-_o.y,-_o.z),H0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(H0)}},mi=class extends Oo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Bh=class extends uc{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yi=class extends Oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Bh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var eu="\\[\\]\\.:\\/",Uy=new RegExp("["+eu+"]","g"),nu="[^"+eu+"]",Ny="[^"+eu.replace("\\.","")+"]",Hy=/((?:WC+[\/:])*)/.source.replace("WC",nu),Fy=/(WCOD+)?/.source.replace("WCOD",Ny),Oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),ky=new RegExp("^"+Hy+Fy+Oy+By+"$"),zy=["material","materials","bones","map"],kh=class{constructor(t,e,n){let r=n||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(t){let e=ky.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);zy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=kh;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var cf=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var lf=i=>cf.find(t=>t.id===i)??cf[0];function uf(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var gc=(i,t,e)=>i+(t-i)*e,ff=i=>Math.min(1,Math.max(0,i)),zo=(i,t)=>Math.max(0,i)**t;function su(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var df=(i,t,e)=>new wn(i,t,e,"ZYX"),Ws=class{constructor(t,e={}){Ze(this,"n",t);Ze(this,"geo",new be);Ze(this,"per");Ze(this,"radial");Ze(this,"closed");Ze(this,"sharp");Ze(this,"caps");Ze(this,"samples");Ze(this,"pos");Ze(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let r=this.radial+1,s=this.samples*r+(this.caps?2:0);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3);let o=new Float32Array(s*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*r+l)*2]=c/(this.samples-1),o[(c*r+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*r+l,u=h+r;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*r,l=c+1,h=(this.samples-1)*r;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new De(this.pos,3)),this.geo.setAttribute("normal",new De(this.nor,3)),this.geo.setAttribute("uv",new De(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:r,radial:s,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=x=>t[o?(x%n+n)%n:Math.min(n-1,Math.max(0,x))],u=x=>typeof e=="number"?e:e[o?(x%n+n)%n:Math.min(n-1,Math.max(0,x))];for(let x=0;x<a;x++){let M=Math.floor(x/r),b=x%r/r;!o&&M>=n-1&&(M=n-2,b=1);let D=h(M),P=h(M+1);for(let A=0;A<3;A++)if(this.sharp)c[x*3+A]=D[A]+(P[A]-D[A])*b;else{let C=o||M>0?h(M-1)[A]:2*D[A]-P[A],U=o||M+2<n?h(M+2)[A]:2*P[A]-D[A],y=b*b,v=y*b;c[x*3+A]=.5*(2*D[A]+(-C+P[A])*b+(2*C-5*D[A]+4*P[A]-U)*y+(-C+3*D[A]-3*P[A]+U)*v)}l[x]=Math.max(1e-4,Math.abs(u(M)+(u(M+1)-u(M))*b))}let d=new T,m=new T,g=new T,_=new T,f=x=>{let M=o?(x-1+a-1)%(a-1):Math.max(0,x-1),b=o?(x+1)%(a-1):Math.min(a-1,x+1);return d.set(c[b*3]-c[M*3],c[b*3+1]-c[M*3+1],c[b*3+2]-c[M*3+2]),d.lengthSq()<1e-12&&d.set(0,0,1),d.normalize()};f(0),_.set(Math.abs(d.x)<.9?1:0,Math.abs(d.x)<.9?0:1,0),m.crossVectors(d,_).normalize();let p=s+1;for(let x=0;x<a;x++){f(x),m.addScaledVector(d,-m.dot(d)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(d,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(d,m);for(let M=0;M<=s;M++){let b=M/s*Math.PI*2,D=Math.cos(b),P=Math.sin(b),A=D*m.x+P*g.x,C=D*m.y+P*g.y,U=D*m.z+P*g.z,y=(x*p+M)*3;this.nor[y]=A,this.nor[y+1]=C,this.nor[y+2]=U,this.pos[y]=c[x*3]+l[x]*A,this.pos[y+1]=c[x*3+1]+l[x]*C,this.pos[y+2]=c[x*3+2]+l[x]*U}if(this.caps&&(x===0||x===a-1)){let M=(a*p+(x?1:0))*3,b=x?1:-1;this.pos[M]=c[x*3],this.pos[M+1]=c[x*3+1],this.pos[M+2]=c[x*3+2],this.nor[M]=d.x*b,this.nor[M+1]=d.y*b,this.nor[M+2]=d.z*b}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function ln(i,t,e={}){return new Ws(i.length,e).set(i,t).geo}function gi(i,t,e,n=12,r=.35,s={}){let o=new ce().makeRotationFromEuler(df(...t)),a=[],c=[],l=new T;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+r*Math.sin(3*u)))}return ln(a,c,{closed:!0,per:6,...s})}function Zi(i,t,e,n,r,s=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<r;u++){let d=u/(r-1),m=s+2*Math.PI*n*d,g=t+(e-t)*d,_=l(d)+(a&&o?a.uniform(-o,o):0),[f,p]=c?c(g):[0,0];h.push([f+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var yc=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function ii(i,t,e,n,r){let s=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);s.push(...l,...h,0,0,i),s.push(...h,...l,0,0,-t)}let a=new be;return a.setAttribute("position",new oe(s,3)),a.setAttribute("uv",new oe(new Array(s.length/3*2).fill(.5),2)),r&&a.applyMatrix4(new ce().makeRotationFromEuler(df(...r))),a.computeVertexNormals(),a}function ou(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),r.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;s.push(l,l+1,h+1,l,h+1,h)}let o=new be;return o.setAttribute("position",new oe(n,3)),o.setAttribute("uv",new oe(r,2)),o.setIndex(s),o.computeVertexNormals(),o}var _c=class{constructor(){Ze(this,"parts",new Map)}add(t,e,n,r,s){let o=t.index?t:Vy(t),a=new ce().compose(n?Array.isArray(n)?new T(...n):n:new T,new En().setFromEuler(r??new wn),s===void 0?new T(1,1,1):typeof s=="number"?new T(s,s,s):new T(...s)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,r]of this.parts){let s=new St(au(r),n);t.add(s),e.push(s);for(let o of r)o.dispose()}return this.parts.clear(),e}};function Vy(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,r)=>r)),t}function au(i){let t=0,e=0;for(let d of i)t+=d.attributes.position.count,e+=d.index.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=i.some(d=>d.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let d of i){let m=d.attributes.position.count;n.set(d.attributes.position.array,l*3),d.attributes.normal||d.computeVertexNormals(),r.set(d.attributes.normal.array,l*3),d.attributes.uv&&s.set(d.attributes.uv.array,l*2),a&&d.attributes.color&&a.set(d.attributes.color.array,l*3);let g=d.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new be;return u.setAttribute("position",new De(n,3)),u.setAttribute("normal",new De(r,3)),u.setAttribute("uv",new De(s,2)),a&&u.setAttribute("color",new De(a,3)),u.setIndex(new De(c,1)),u.computeBoundingSphere(),u}var hf=new Map;function iu(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function ru(i,t,e,n=4,r=1){let s=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let d=Math.floor(l),m=Math.floor(h),g=l-d,_=h-m,f=g*g*(3-2*g),p=_*_*(3-2*_),x=(b,D)=>iu((b%c+c)%c,(D%c+c)%c,r+u),M=gc(gc(x(d,m),x(d+1,m),f),gc(x(d,m+1),x(d+1,m+1),f),p);s+=M*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return s/a}function pf(i,t,e,n=[1,1]){let r=hf.get(i);if(!r){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),r=new An(o),r.wrapS=r.wrapT=Vr,hf.set(i,r)}let s=r.clone();return s.repeat.set(...n),s.needsUpdate=!0,s}var mf=(i,t,e,n,r)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=r,i.data[t*4+3]=255};function $r(i=1,t=[1,1],e=.35,n=1.25){return pf(`noise${i}`,128,r=>{for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=ru(o/(16*i),s/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,gc(e,n,a)/1.25));mf(r,s*128+o,c,c,c)}},t)}function gf(i=6,t=.11,e=[1,1]){return pf(`vein${i}:${t}`,128,n=>{let r=[];for(let s=0;s<i;s++)for(let o=0;o<i;o++)r.push([(o+iu(o,s,9))/i,(s+iu(o,s,11))/i]);for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=o/128+(ru(o/16,s/16,8,2,5)-.5)*.08,c=s/128+(ru(o/16+7,s/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of r)for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let x=a-g-p,M=c-_-f,b=Math.sqrt(x*x+M*M);b<l?(h=l,l=b):b<h&&(h=b)}let u=(h-l)*i*.5,d=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*d*d);mf(n,s*128+o,m,m,m)}},e)}var xr=1.13,Vo=.66,le=(i,t,e)=>new zt(i,t,e);function Gy(i,t){let e=(s,o=!0)=>(o?i.push(s):t.push(s),s),n=(s,o=1.7)=>s.clone().multiplyScalar(o),r=s=>Math.min(2.4,.55+s*.13);return{bark:(s,o)=>e(new Te({color:n(o,1.5),map:$r(4,[3,2]),roughness:.9,emissive:s.clone().multiplyScalar(.4)})),plain:(s,o=.5)=>e(new Te({color:n(s),roughness:o})),leaf:(s,o)=>e(new Te({color:n(o,1.6),map:$r(1,[2,2],.45),roughness:.45,side:Le,emissive:s.clone().multiplyScalar(.6)})),metal:(s,o=.28)=>e(new Te({color:n(s,1.25),metalness:.55,roughness:o+.12})),veins:(s,o,a,c=6,l=.11,h=.1)=>e(new Te({color:n(s,2.4),map:$r(1,[3,2]),emissive:o,emissiveMap:gf(c,l,[4,2]),emissiveIntensity:r(a),roughness:.6,metalness:h})),lava:()=>e(new Te({color:le(.3,.05,0),emissive:le(1,.22,.015),emissiveMap:$r(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(s,o,a,c=Un)=>e(new Te({color:o,emissive:s,emissiveMap:$r(1,[2,2],.6),emissiveIntensity:r(a),roughness:.4,side:c})),emissive:(s,o)=>e(new Te({color:s.clone().multiplyScalar(.15),emissive:s,emissiveIntensity:r(o),roughness:.4})),crystal:(s,o)=>e(new Te({color:n(s,1.3),emissive:s,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(s,o=.3)=>e(new Te({color:s,emissive:s.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Te({color:le(.55,.82,1),map:$r(2,[4,1],.7),emissive:le(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var Jr=i=>Math.max(8,Math.round(i*.5)),Go=i=>Math.max(1,Math.round(i*.45)),xc=i=>i-Math.floor(i);function Wy(i,t,e,n,r,s=.09,o=.1){let a=i+n,c=(a%t+t)%t;return r*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-s*c)*(Math.cos(o*c)+s/o*Math.sin(o*c)))}function Xy(i,t,e,n=8,r=10,s=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-r)/s))))}function _f(i,t,e,n){let r=[];for(let s=0;s<t;s++){let o=new T(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),r.push([o.x,o.y,o.z])}return r}function cu(i,t,e,n,r,s){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*r));return o.push(e),ln(o,o.map((a,c)=>s*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function qy(i,t,e,n,r,s,o,a=.45){return ou(4,10,(c,l)=>{let h=2*c-1,u=.07+r*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-s*l**3,d=t+e*l,m=i+o*l,g=n*Math.max(.03,zo(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,f=h*g,p=Math.cos(m),x=Math.sin(m);return[_*p-f*x,_*x+f*p,d]})}function Yy(i=.14,t=.055){return ou(3,6,(e,n)=>{let r=2*e-1,s=t*(.04+zo(Math.sin(Math.PI*n**.75),.9));return[r*s,n*i,-Math.abs(r)*s*.45-.18*i*n*n]})}var Kr=new dn;function Xs(i,t,e,n,r){Kr.position.set(e[0],e[1],e[2]),typeof n=="number"?Kr.scale.setScalar(Math.max(1e-5,n)):Kr.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),r?Kr.rotation.set(r[0],r[1],r[2],"ZYX"):Kr.rotation.set(0,0,0),Kr.updateMatrix(),i.setMatrixAt(t,Kr.matrix)}var hu=new yn(1,1),lu=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((r,s)=>{for(let o of n)o.offset.x-=s*e})};function Zy(i){let{rng:t,m:e}=i,n=e.bark(le(.045,.028,.014),le(.3,.19,.1)),r=e.plain(le(.1,.3,.05),.55),s=e.leaf(le(.015,.14,.02),le(.1,.34,.045)),o=.022,a=_=>yc(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(ln([...c,2.6,2.63].map(_=>[...a(_),_]),[...l,.06,.015],{radial:8,per:5}),n);for(let _=0;_<5;_++){let f=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(f),x=Math.sin(f);i.stat(ln([[.03*p,.03*x,.3],[.06*p,.06*x,.17],[.1*p,.1*x,.07],[.14*p,.14*x,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,f,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:f-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},d=[.015,.09,.2,.235,.185,.06],m=[2.42,2.6,2.8,3.02,3.22,3.33];for(let _=0;_<6;_++){let f=2*Math.PI*_/6+t.uniform(-.15,.15),p=d.map((x,M)=>{let b=f+.22*M;return[x*Math.cos(b),x*Math.sin(b),m[M]+t.uniform(-.02,.02)]});i.stat(ln(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let x of[2,4])u(p[x],Math.atan2(p[x][1],p[x][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,f,p,x,M])=>{let b=Jr(56),D=Zi(P=>su(c,l,_+(f-_)*P)+.018,_,f,p,b,x,.004,t,a);i.stat(ln(D,D.map((P,A)=>M*(1-.55*A/(b-1))),{radial:5,per:3}),r);for(let P=2;P<b-2;P+=Math.max(1,Math.floor((b-4)/Go(22)))){let A=D[P],C=a(A[2]);u(A,Math.atan2(A[1]-C[1],A[0]-C[0]),t.uniform(.7,1.3))}});let g=i.inst(Yy(),s,h.length);return i.anim(_=>{h.forEach((f,p)=>Xs(g,p,f.p,f.s,[f.rx+.16*Math.sin(_*.2094+f.ph),f.ry,f.rz+.1*Math.sin(_*.1309+f.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:le(.45,1,.35),hot:le(.7,1,.3),mid:le(.15,.8,.05)}}function $y(i){let{rng:t,m:e}=i,n=e.veins(le(.085,.065,.055),le(1,.3,.03),2,7,.06,0);n.roughness=.9;let r=e.lava(),s=e.core(le(1,.36,.04),le(.9,.12,.01),2,Le);lu(i,r,.25),lu(i,s,-.18);let o=.014,a=g=>yc(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(ln(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,f=2.35)=>su(c,l,_+(f-_)*g);for(let g=0;g<2;g++){let _=Jr(60),f=Zi(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(ln(f,f.map((p,x)=>.012+.003*Math.sin(x*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=Jr(60),f=Zi(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(ln(f,f.map((p,x)=>.0085+.002*Math.sin(x*.7)),{radial:5,per:3}),r)}{let g=Zi(_=>h(_,.5,2.2)-.001,.5,2.2,-3,Jr(50),.8,0,void 0,a);i.stat(ln(g,.0055,{radial:4,per:3}),r)}i.stat(gi(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(gi(.082,[0,0,0],.008,10,0),r,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(qy(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),s);i.stat(gi(.165,[0,0,0],.007,14,0),r,[0,0,2.86]);let u=6,d=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),f=t.uniform(.16,.2);d.push({p:[f*Math.cos(_),f*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(hu,e.emissive(le(1,.45,.05),10),u);return i.anim(g=>{d.forEach((_,f)=>{let p=xc(g/60+_.ph),x=_.s*Math.min(1,p*6)*(1-.6*p);Xs(m,f,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*x,.85*x,7*x])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:le(1,.45,.1),hot:le(1,.7,.15),mid:le(1,.25,.02)}}function Ky(i){let{rng:t,m:e}=i,n=e.metal(le(.1,.12,.16),.3),r=e.metal(le(.78,.84,.9),.18),s=e.water(),o=e.crystal(le(.2,.7,1),2.5),a=e.crystal(le(.4,.8,1),1.5);lu(i,s,.3);let c=.006,l=_=>yc(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(ln(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(gi(.066,[0,0,0],.012,10,0),r,[0,0,2.56]);for(let _=0;_<3;_++){let f=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(ln([[.04*f,.04*p,2.55],[.085*f,.085*p,2.68],[.12*f,.12*p,2.82],[.13*f,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),r)}for(let _=0;_<2;_++)i.stat(ln(Zi(.05,.4,2.45,7,Jr(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),r);{let _=Jr(64),f=Zi(b=>.058+.012*Math.sin(b*20),.45,2.5,3.2,_,1,0,void 0,l),p=f.map((b,D)=>.012+.014*(.5+.5*Math.sin(D*.45))),x=new Ws(_,{radial:6,per:3});x.set(f,p),i.mesh(x.geo,s);let M=p.slice();i.anim(b=>{for(let D=0;D<_;D++)M[D]=p[D]*(1+.6*Math.sin(b*.2618-D*.7));x.set(f,M)})}[.7,1,1.35,1.7,2.05].forEach((_,f)=>{let p=f*2.1;i.stat(ii(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,f,p,x,M,b,D,P,A],C)=>{let y=20+C*50,v=C===0?1:-1,W=x<p?-1:1,j=Math.PI/180,ot=Array.from({length:40},(ct,N)=>{let S=N/39;return{a:(p+(x-p)*S)*j,b:p*j+W*P*j*S,R:_+(f-_)*S,y:b+.04*Math.sin(S*6),r:.004+M*zo(Math.sin(Math.PI*S),.8)}}),st=(ct,N,S,R)=>[ct*t.uniform(.35,1.4),N*t.uniform(.8,1.2),-R*S+t.uniform(-1.4,1.4),t.uniform(1,5)],Y=ot.map((ct,N)=>[st(.07,.35,.9,N),st(.035,.7,1.7,N),st(.03,.3,1,N),st(.015,.6,1.8,N),st(.32,.45,.9,N),st(.2,.8,1.6,N),st(.1,1.3,2.3,N)]),pt=new Ws(40,{radial:6,per:2}),L=ot.map(()=>[0,0,0]),J=ot.map(()=>0),V=i.mesh(pt.geo,s,[0,0,3]);V.renderOrder=2;let Z=ct=>{let N=Wy(ct,120,1,y,v),S=Xy(ct,120,y,12),R=Math.floor((ct+y)/120),H=q=>q[0]*Math.sin(ct*q[1]+q[2]+R*q[3]);ot.forEach((q,B)=>{let F=Y[B],G=q.a*(1-S)+q.b*S+N,tt=q.R*(1-S)+D*(1+S*(H(F[0])+H(F[1])))*S;L[B][0]=tt*Math.cos(G),L[B][2]=tt*Math.sin(G),L[B][1]=q.y*(1-S)+(b+H(F[2])+H(F[3]))*S,J[B]=q.r*(1+.3*(1-S)*Math.sin(ct*.2618-B*.8))*(1-S)+A*S*Math.max(.3,1+S*(H(F[4])+H(F[5])+H(F[6])))}),pt.set(L,J)};Z(0),i.anim(Z)});let d=[];for(let _=0;_<10;_++){let f=t.uniform(0,2*Math.PI),p=[Math.cos(f),0,Math.sin(f)],x=t.uniform(.2,.34),M=t.uniform(.12,.3);d.push({start:[p[0]*x,0,3+p[2]*x],vel:[p[0]*M+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*M+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of d)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:Go(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(hu,a,d.length+m.length);m.forEach((_,f)=>Xs(g,d.length+f,_.p,_.s)),i.anim(_=>{d.forEach((f,p)=>{let x=xc(_/f.per+f.ph),M=x*.9;Xs(g,p,[f.start[0]+f.vel[0]*M,f.start[1]+f.vel[1]*M,f.start[2]+f.vel[2]*M-.9*M*M],f.s*Math.min(1,x*10)*Math.min(1,(1-x)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(ii(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let f=2*Math.PI*_/3;i.stat(ii(.02,.12,.016,4,[Math.sin(f)*.4,-Math.cos(f)*.4,0]),o,[.045*Math.cos(f),.045*Math.sin(f),.36])}return{z:3,r:.145,glass:le(.3,.75,1),hot:le(.5,.95,1),mid:le(.05,.4,1)}}function Jy(i){let{rng:t,m:e}=i,n=e.veins(le(.03,.02,.06),le(.85,.6,1),3,6,.09,.5),r=e.metal(le(.62,.58,.72),.2),s=e.crystal(le(.35,.15,1),3),o=e.emissive(le(.65,.4,1),4),a=e.emissive(le(.6,.3,1),3);i.stat(ln([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(gi(.04,[0,0,0],.007,10,0),r,[0,0,_]);i.stat(ln([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(ln(Zi(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),r);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,f)=>i.stat(gi(f===0||f===4?.064:.058,[0,0,0],.011,10,0),r,[0,0,_]));let l=gi(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let f=e.emissive(le(.65,.4,1),4),p=f.emissiveIntensity;f.transparent=!0;let x=i.mesh(l,f);i.anim(M=>{let b=xc(M/60+_/4);x.position.z=.95+1.45*b,x.scale.set(1+.3*b,1+.3*b,1);let D=Math.min(1,b*8)*Math.min(1,(1-b)*3);f.emissiveIntensity=p*D,f.opacity=D})}let h=(_,f,p)=>ff((Math.sin(_*.9+f)+Math.sin(_*.37+f*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let f=t.uniform(0,6.28),p=[.07*Math.cos(f),.07*Math.sin(f),c[_]],x=[.07*Math.cos(f+.9),.07*Math.sin(f+.9),c[_+1]],M=[(p[0]+x[0])/2,(p[1]+x[1])/2,(p[2]+x[2])/2],b=i.mesh(cu(t,[p[0]-M[0],p[1]-M[1],p[2]-M[2]],[x[0]-M[0],x[1]-M[1],x[2]-M[2]],6,.012,.005),o,M),D=t.uniform(0,6.28);i.anim(P=>{b.scale.setScalar(Math.max(1e-4,h(P,D,.3)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=.066;i.stat(cu(t,[p*Math.cos(f),p*Math.sin(f),.95],[p*Math.cos(f+.6),p*Math.sin(f+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let f=new T(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),x=i.mesh(cu(t,[f.x*.16,f.y*.16,f.z*.16],[f.x*p,f.y*p,f.z*p],7,.03,.005),o,[0,0,3]),M=t.uniform(0,6.28);i.anim(b=>{x.rotation.set(Math.floor(b/5+M)*1.7,0,Math.floor(b/4+M)*2.4,"ZYX"),x.scale.setScalar(Math.max(1e-4,h(b,M,.5)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],x=[2.5,2.66,2.85,3.08,3.22];i.stat(ln(p.map((M,b)=>[M*Math.cos(f+.3*b),M*Math.sin(f+.3*b),x[b]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),r)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,f,p,x])=>{let M=i.mesh(gi(_,f.map(b=>b*Math.PI/180),p,10),r,[0,0,3]);i.anim(b=>{M.rotation.z=b*x})}),i.stat(ii(.58,.06,.03,4),r,[0,0,3.14]);let u=[new T(0,.6,.8),new T(.7,-.3,.65),new T(-.45,.5,.75)],d=[1,-2,3],m=Array.from({length:6},(_,f)=>{let p=u[f%3].clone().normalize(),x=Math.abs(p.z)<.9?new T(0,0,1):new T(1,0,0),M=p.clone().cross(x).normalize(),b=p.clone().cross(M);return{e1:M,e2:b,R:t.uniform(.32,.5),th0:Math.floor(f/3)*Math.PI+t.uniform(-.3,.3),w:d[f%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(ii(.11,.11,.035,4),s,m.length);return i.anim(_=>{m.forEach((f,p)=>{let x=f.th0+_*f.w,M=f.R*(1+.12*Math.sin(_*.05236+f.ph));Xs(g,p,[M*(f.e1.x*Math.cos(x)+f.e2.x*Math.sin(x)),M*(f.e1.y*Math.cos(x)+f.e2.y*Math.sin(x)),3+M*(f.e1.z*Math.cos(x)+f.e2.z*Math.sin(x))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(ii(.1,.3,.04,5),s,[0,0,.32]),{z:3,r:.15,glass:le(.6,.3,1),hot:le(.7,.5,1),mid:le(.4,.1,1),style:"flicker"}}function jy(i){let{rng:t,m:e}=i,n=e.veins(le(.02,.03,.05),le(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let r=e.metal(le(.8,.86,.95),.15),s=e.crystal(le(.25,.65,1),4),o=e.emissive(le(.7,.9,1),14),a=e.emissive(le(.3,.7,1),9);i.stat(ln([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(ii(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let x=i.mesh(gi(.058+.006*p,[0,0,0],.006,12,.6),r,[0,0,.655+.42*p]);i.anim(M=>{x.rotation.z=M*(p%2===0?1:-1)*.05236})}let c=p=>{let x=Math.max(0,(p-.7)/.3);return .05+.26*zo(Math.sin(x*Math.PI/2),1.5)};for(let p=0;p<2;p++){let x=Jr(110);i.stat(ln(Zi(c,.4,3.2,6,x,p*Math.PI),Array.from({length:x},(M,b)=>.0085+.004*Math.sin(b*.55+p)),{radial:5,per:3}),r)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,x,M,b])=>{let D=i.mesh(gi(p,x.map(P=>P*Math.PI/180),M,10),r,[0,0,3]);i.anim(P=>{D.rotation.z=P*b})}),i.stat(ii(.62,.05,.032,4),s,[0,0,3.17]);{let p=n.emissiveIntensity,x=a.emissiveIntensity,M=le(.45,.82,1),b=0;i.anim((D,P)=>{b+=(i.charge()-b)*Math.min(1,P*5),n.emissiveIntensity=p*(1+5*b),a.emissiveIntensity=x*(1+2.5*b),r.emissive.copy(M).multiplyScalar(.85*b)})}let l=_f(t,Go(110),.35,.85);for(let p=0;p<Go(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,x)=>p.map(M=>({rel:M,s:x(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),d=h(_f(t,Math.max(Go(30),8),.4,.9),()=>t.uniform(.02,.045)),m=au([ii(1,1,.14,4),ii(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(x,M)=>M)),p))),g=i.inst(hu,o,u.length),_=i.inst(m,o,d.length),f=(p,x,M)=>{x.forEach((b,D)=>{let P=xc(M/b.per+b.ph),A=(1-P)**1.6;Xs(p,D,[b.rel[0]*A,b.rel[1]*A,3+b.rel[2]*A],b.s*Math.min(1,P*8)*(1-P)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{f(g,u,p),f(_,d,p)}),i.stat(ii(.08,.31,.05,6),s,[0,0,.33]);for(let p=0;p<3;p++){let x=2*Math.PI*p/3+.4,M=Math.cos(x),b=Math.sin(x);i.stat(ln([[.035*M,.035*b,.52],[.07*M,.07*b,.44],[.11*M,.11*b,.34],[.1*M,.1*b,.24]],[.02,.016,.011,.003],{radial:6}),r)}return{z:3,r:.17,glass:le(.05,.25,1),hot:le(.2,.5,1),mid:le(0,.05,.4)}}var yf={verdant:Zy,ember:$y,tide:Ky,storm:Jy,void:jy},Qy={verdant:7,ember:8,tide:9,storm:10,void:11};function $i(i,t){let e=lf(i),n=yf[e.base??e.id]?e.base??e.id:"verdant",r=new Yt,s=new Yt;s.rotation.x=-Math.PI/2,s.scale.setScalar(Vo),s.position.y=xr-3*Vo,r.add(s);let o=[],a=[],c=[],l=0,h=new _c,u={B:s,batch:h,rng:uf(Qy[n]),m:Gy(o,a),stat:(A,C,U,y,v)=>h.add(A,C,U,y,v),mesh:(A,C,U)=>{let y=new St(A,C);return U&&y.position.set(...U),s.add(y),y},inst:(A,C,U)=>{let y=new Fs(A,C,U);return y.frustumCulled=!1,s.add(y),y},anim:A=>{c.push(A)},charge:()=>l},d=yf[n](u);h.build(s);let m=new zt(e.gem),g=e.tint?new zt(e.tint):null,_=new Te({color:g?d.glass.clone().lerp(m,.6):d.glass,emissive:m,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),f=new St(new Ne(d.r*Vo,20,14),_);f.position.y=xr+(d.z-3)*Vo,f.renderOrder=1,r.add(f);let p=u.m.core(g?d.hot.clone().lerp(m,.7):d.hot,g?d.mid.clone().lerp(m,.5):d.mid,6),x=new St(new Ne(d.r*Vo*.6,14,10),p);f.add(x);let M=p.emissiveIntensity;if(c.push(A=>{if(d.style==="flicker"){let C=Math.abs(Math.sin(A*.9)*Math.sin(A*.37+1.1));x.scale.setScalar(1+.1*C),p.emissiveIntensity=M*(.55+.45*C)*1.6}else x.scale.setScalar(1+.05*Math.sin(A*.1309))}),o.splice(o.indexOf(p),1),g)for(let A of[...o,...a])A.color.lerp(g,.55),A.emissive.getHex()!==0&&A.emissive.lerp(g,.7);let b=new jn(new Zn({map:t,color:m.getHex(),blending:fn,depthWrite:!1,transparent:!0,opacity:.5}));b.scale.setScalar(.45),b.position.y=f.position.y,r.add(b);let D=Math.random()*20,P=(A,C)=>{l=C,D+=A*(1+C*1.5);let U=D*24;for(let y of c)y(U,A)};return P(0,0),{group:r,gem:f,gemMat:_,glow:b,color:m,materials:o,update(A,C,U){P(C,U)}}}var re=i=>new zt(i),ve=i=>1-Math.abs((i%1+1)%1*2-1),Be=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),Mr=(i,t)=>Math.exp(-(i*i)/(t*t)),xf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function pn(i,t,e,n,r=!1){let s=[],o=[],a=(h,u)=>e(r?h%i/i:h/i,u/t),c=(h,u,d)=>{let m=(h[0]+u[0]+d[0])/3,g=(h[1]+u[1]+d[1])/3,_=n(r?m/i%1:m/i,g/t);for(let[f,p]of[h,u,d])s.push(...a(f,p)),o.push(_.r,_.g,_.b)};for(let h=0;h<t;h++)for(let u=0;u<i;u++)c([u,h],[u,h+1],[u+1,h+1]),c([u,h],[u+1,h+1],[u+1,h]);let l=new be;return l.setAttribute("position",new oe(s,3)),l.setAttribute("color",new oe(o,3)),l.computeVertexNormals(),l}function Cn(i,t,e,n=1,r=1,s=0,o=1){let a=i.length-1;return pn(t,a,(c,l)=>{let h=Math.min(a-1,Math.floor(l*a)),u=l*a-h,d=i[h][0]+(i[h+1][0]-i[h][0])*u,m=i[h][1]+(i[h+1][1]-i[h][1])*u,g=(s+c*(o-s))*Math.PI*2;return[Math.sin(g)*m*n,d,Math.cos(g)*m*r]},e,s===0&&o===1)}function We(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new T(...i[Math.min(s-1,h+1)]).sub(new T(...i[Math.max(0,h-1)])).normalize()),a=new T(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new T(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return pn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}function Ei(i,t,e=[0,0,0],n=[0,0,0]){let r=new en(...i).toNonIndexed();r.rotateX(n[0]),r.rotateY(n[1]),r.rotateZ(n[2]),r.translate(...e);let s=r.attributes.position.count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=t.r,o[a*3+1]=t.g,o[a*3+2]=t.b;return r.setAttribute("color",new De(o,3)),r}function Sn(i,t){let e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=t.r,r[s*3+1]=t.g,r[s*3+2]=t.b;return e.setAttribute("color",new De(r,3)),e.computeVertexNormals(),e}function Mc(i){let t=new Ne(1,28,22),e=t.attributes.position,n=t.attributes.uv;for(let r=0;r<e.count;r++){let s=e.getX(r),o=e.getY(r),a=e.getZ(r),c=Math.max(0,a),l=s*i.w,h=o*i.h,u=a*i.d;if(o<0){let d=-o;l*=1-i.jaw*d**1.25,u*=1-.12*d,h*=1+i.chin*d}l*=1+.04*Mr(o+.02,.22)*c,o>.2&&(l*=1-.08*(o-.2));for(let d of[-1,1])u-=.009*Mr(s-d*.38,.2)*Mr(o-.06,.13)*c;u+=i.brow*Mr(o-.27,.08)*Mr(s,.5)*c,u+=i.nose*Mr(s,.11)*c*xf(.2,-.2,o)*xf(-.4,-.27,o),u+=.004*Mr(s,.24)*Mr(o+.5,.07)*c,a<0&&(u*=1.06),e.setXYZ(r,l,h,u),a>.05?n.setXY(r,.5+s*.5,.5+o*.5):n.setXY(r,.02,.97)}return t.computeVertexNormals(),t}function bc(i){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),r=(u,d)=>[(.5+u*.5)*512,(.5-d*.5)*512];n.fillStyle=i.skin,n.fillRect(0,0,512,512);let s=(u,d,m,g,_,f)=>{let[p,x]=r(u,d),M=m*512*.5;n.save(),n.translate(p,x),n.scale(1,g/m);let b=n.createRadialGradient(0,0,0,0,0,M);b.addColorStop(0,_.replace("A",String(f))),b.addColorStop(1,_.replace("A","0")),n.fillStyle=b,n.beginPath(),n.arc(0,0,M,0,Math.PI*2),n.fill(),n.restore()};for(let u of[-1,1])s(u*.62,-.18,.22,.3,i.shade,.35);s(0,-.72,.3,.12,i.shade,.3),s(.07,-.12,.05,.2,i.shade,.25);for(let u of[-1,1]){let d=u*.38,m=.06;s(d,m+.04,.26,.12,i.shade,.45);let[g,_]=r(d,m),f=i.eyeW*512*.5,p=i.eyeH*512*.5;if(n.save(),n.translate(g,_),n.scale(u,1),n.beginPath(),n.moveTo(-f,0),n.quadraticCurveTo(-f*.1,-p*1.1,f,-p*.15),n.quadraticCurveTo(f*.2,p*1.05,-f,0),n.closePath(),n.fillStyle=i.glowEyes?"#ffd23a":"#ece6ee",n.fill(),n.save(),n.clip(),n.fillStyle=i.iris,n.beginPath(),n.arc(-f*.1,p*.1,p*1.05,0,Math.PI*2),n.fill(),n.fillStyle="#120c14",n.beginPath(),i.glowEyes?n.ellipse(-f*.1,p*.1,p*.22,p*.8,0,0,Math.PI*2):n.arc(-f*.1,p*.1,p*.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.8)",n.beginPath(),n.arc(-f*.26,-p*.25,p*.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(40,25,35,.6)",n.fillRect(-f,-p*1.3,f*2,p*(.3+i.lid)),n.restore(),n.strokeStyle="#1c1418",n.lineCap="round",n.lineWidth=512*.009,n.beginPath(),n.moveTo(-f*1.02,.02*p),n.quadraticCurveTo(-f*.1,-p*(1.15-i.lid*.6),f*1.08,-p*.3),n.stroke(),n.strokeStyle="rgba(80,55,60,.5)",n.lineWidth=512*.004,n.beginPath(),n.moveTo(-f*.7,p*.55),n.quadraticCurveTo(0,p*1,f*.8,p*.25),n.stroke(),i.wrinkles){n.strokeStyle="rgba(120,90,90,.45)",n.lineWidth=512*.004;for(let x of[-1,0,1])n.beginPath(),n.moveTo(f*1.15,x*p*.4),n.lineTo(f*1.5,x*p*.8-p*.1),n.stroke();n.beginPath(),n.moveTo(-f*.6,p*1.4),n.quadraticCurveTo(0,p*2,f*.7,p*1.2),n.stroke()}n.strokeStyle=i.brow,n.lineWidth=i.browW,n.beginPath(),n.moveTo(-f*1,-p*(2.3-i.browTilt)),n.quadraticCurveTo(f*.15,-p*3.2,f*1.15,-p*(2.6+i.browTilt)),n.stroke(),n.restore()}if(i.wrinkles){n.strokeStyle="rgba(120,90,90,.4)",n.lineWidth=512*.004;for(let u of[.42,.5]){let[d,m]=r(-.25,u),[g,_]=r(.25,u);n.beginPath(),n.moveTo(d,m),n.quadraticCurveTo((d+g)/2,m-6,g,_),n.stroke()}}n.fillStyle="rgba(80,50,55,.5)";for(let u of[-1,1]){let[d,m]=r(u*.06,-.32);n.beginPath(),n.ellipse(d,m,512*.012,512*.006,0,0,Math.PI*2),n.fill()}let[o,a]=r(0,-.52),c=i.lipW*512*.5,l=.05*512*.5;if(i.snarl){n.fillStyle="#2a1416",n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.fill(),n.fillStyle="#e8e0c8",n.fillRect(o-c*.85,a-l*.9,c*1.7,l*.8),n.fillRect(o-c*.7,a+l*.25,c*1.4,l*.6),n.strokeStyle="#2a1416",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(o+u*c*.24,a-l),n.lineTo(o+u*c*.24,a+l),n.stroke();n.strokeStyle=i.lips,n.lineWidth=512*.008,n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.stroke()}else n.fillStyle=i.lips,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a-l*.9,o+c,a),n.quadraticCurveTo(o,a+l*1.2,o-c,a),n.fill(),n.strokeStyle="rgba(40,20,25,.7)",n.lineWidth=512*.005,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a+l*.3,o+c,a),n.stroke();let h=new An(e);return h.colorSpace=on,h.anisotropy=4,h}function qs(){let i=[];return{materials:i,mat:(e,n={})=>{let r=new Te({color:n.vc?16777215:e,vertexColors:!!n.vc,metalness:n.metal??.04,roughness:n.rough??.8,flatShading:n.flat??!0,emissive:n.emissive??(n.vc?1315100:0),transparent:!0,side:n.double?Le:Un});return i.push({mat:r,color:r.color.clone(),emissive:r.emissive.clone()}),r}}}var Ot=(i,t,e,n=[0,0,0])=>{let r=new St(i,t);return r.position.set(...n),e.add(r),r},ri=.3;function br(i,t,e,n,r,s){let o=new Yt;o.position.set(...t),o.rotation.z=-.68,i.add(o);let a=new Yt;a.rotation.x=.3,o.add(a);let c=$i(r,n);c.group.position.set(0,.24,.02),c.group.scale.setScalar(.8),a.add(c.group),s&&(s.position.set(0,0,.02),s.scale.multiplyScalar(1.7),a.add(s));for(let l of c.materials)e.push({mat:l,color:l.color.clone(),emissive:l.emissive.clone()});return{staffPivot:o,staff:c,crystal:c.gem,crystalMat:c.gemMat,glow:c.glow}}function Mf(i,t,e){let n=new Xr;for(let r=0;r<8;r++){let s=Math.PI/2+r*Math.PI/4,o=r%2?t:i;r?n.lineTo(Math.cos(s)*o,Math.sin(s)*o):n.moveTo(Math.cos(s)*o,Math.sin(s)*o)}return n.closePath(),new Os(n,{depth:e,bevelEnabled:!0,bevelThickness:e*.3,bevelSize:i*.06,bevelSegments:1}).center()}var bf=(i,t,e)=>{let n=ve(i*e);return Math.abs(n-t)<.2||Math.abs(n-(1-t))<.2};function si(i,t,e,n=i,r=1){let s=new Yt,o=(a,c,l,h=[0,0,0],u=[1,1,1])=>{let d=Ot(Sn(a,c),t,s,l);return d.rotation.set(...h),d.scale.set(...u),d};if(e){o(new en(.03,.085,.07),i,[.04,0,-.005]);for(let a=0;a<4;a++){let c=.03-a*.02,l=.028-a*.001,h=new zn(l,.011,4,7,Math.PI*1.25);h.rotateX(Math.PI/2),o(h,n,[.012,c,0],[0,-.35,0])}o(new Wr(.011,.04,2,5),i,[.02,.048,.03],[.2,0,1.2])}else{o(new en(.06,.07,.028),i,[0,-.035,0]);for(let a=0;a<4;a++)o(new en(.013,.05-Math.abs(a-1.5)*.007,.016),n,[-.022+a*.0145,-.092+Math.abs(a-1.5)*.003,.006],[.25,0,0]);o(new en(.014,.04,.016),n,[.034,-.045,.012],[.2,0,-.5])}return s.scale.setScalar(r),s}var vr={goblin:16726564,witch:12086271,wizard:4827391,knight:16724016};function Er(i,t,e,n){let r=new Yt;r.name="eyes",r.visible=!1;let s=new an({color:new zt(e).lerp(new zt(16777215),.3),transparent:!0,depthWrite:!1}),o=new Zn({map:n,color:e,transparent:!0,opacity:.8,depthWrite:!1});for(let a of t){let c=new St(new Ne(.011,8,6),s);c.position.set(...a),c.scale.set(1.6,.75,.5),r.add(c);let l=new jn(o);l.position.set(a[0],a[1],a[2]+.012),l.scale.setScalar(.06),r.add(l)}return i.add(r),r}var ze={robe:re(3433416),robeDeep:re(2575516),cream:re(15853519),creamDeep:re(14273968),gold:re(14989388),goldDeep:re(11568688),skin:re(15916495),hair:re(16052974),hairShade:re(13618374),leather:re(7686442),leatherDeep:re(5583641),boot:re(2903964)},jr={w:.088,h:.122,d:.106,jaw:.42,chin:.06,nose:.022,brow:.008};function vf(i,t,e){let{materials:n,mat:r}=qs(),s=r(16777215,{vc:!0,double:!0}),o=r(ze.skin,{rough:.7}),a=r(ze.gold,{metal:.3,rough:.35,emissive:2760200}),c=i==="ally",l=c?re(3117168):ze.robe,h=c?re(2255442):ze.robeDeep,u=(st,Y,pt,L)=>bf(st,Y,pt)?ze.gold:L,d=new Yt,m=new Yt;d.add(m);for(let st of[-1,1])Ot(Sn(new Ne(.06,7,5),ze.boot),s,m,[st*.09,.05,.08]).scale.set(.9,.75,1.6);Ot(Cn([[1.46,.1],[1.4,.165],[1.24,.18],[1.04,.165],[.7,.21],[.36,.255],[.3,.26],[.24,.266],[.18,.272],[.12,.278],[.04,.29]],36,(st,Y)=>{let pt=st<.06||st>.94,L=Math.floor(Y*10);return L===9?ze.cream:L>=6?u(st,(L-5.5)/3,12,pt?ze.creamDeep:h):pt?Be(ze.cream,ze.creamDeep,.3*Y):Be(l,h,.3*ve(st*12)*Y)},1.1,.8),s,m);let g=pn(48,30,(st,Y)=>{let pt=.55+.35*Y**1.3,L=pt+st*(Math.PI*2-2*pt),J=.13,V,Z,ct;if(Y<J){let N=Y/J;V=1.58-.15*N**.8,Z=.1+.15*N**.7,ct=.74}else{let N=(Y-J)/(1-J);V=1.43-N*1.3,Z=.25+.14*N**1.2,ct=.74+.16*N}return Z*=1+.05*Math.sin(L*7)*Math.max(0,Y-J),[Math.sin(L)*Z*1.1,V,Math.cos(L)*Z*ct-.03*Y]},(st,Y)=>st<.03||st>.97||Y>.95?ze.cream:Y>.8?u(st,(Y-.8)/.15,16,h):Be(l,h,.25+.3*ve(st*9)));Ot(g,s,m),Ot(pn(6,4,(st,Y)=>[(st-.5)*(.26-.2*Y),1.56-Y*.3,-.15-.04*Math.cos((st-.5)*3)-.03*Y],(st,Y)=>Y>.85?ze.cream:Be(h,l,.3*ve(st*2))),s,m),Ot(new Ee(.035,.035,.014,10).rotateX(Math.PI/2),a,m,[0,1.47,.135]),Ot(new zn(.035,.007,4,10),a,m,[0,1.47,.142]);for(let st of[-1,1])Ot(new Ee(.012,.012,.06,5).rotateZ(Math.PI/2),a,m,[st*.065,1.48,.125]);Ot(Cn([[1.08,.172],[1.02,.17]],16,()=>ze.leather,1.1,.82),s,m),Ot(new Fo(.04,0),a,m,[0,1.05,.145]).scale.set(.9,1.1,.35),Ot(Sn(new Fo(.02,0),ze.leatherDeep),s,m,[0,1.05,.158]).scale.set(.9,1.1,.3),Ot(pn(1,6,(st,Y)=>[.03+(st-.5)*.045+.02*Math.sin(Y*3),1.03-Y*.48,.15+.035*Y+.012*Math.sin(Y*6)],(st,Y)=>Y>.9?ze.gold:Be(ze.leather,ze.leatherDeep,.3*Y)),s,m),Ot(new Ee(.043,.052,.12,7),o,m,[0,1.53,0]);let f=new Yt;f.position.set(0,1.66,0),m.add(f);let p=r(16777215,{rough:.7,flat:!1});p.map=bc({skin:"#f2ddcf",shade:"rgba(160,120,115,A)",iris:"#5d7590",eyeW:.2,eyeH:.07,lid:.55,brow:"#f0eee8",browW:15,browTilt:.2,lips:"#b77a72",lipW:.2,wrinkles:!0}),Ot(Mc(jr),p,f);let x=(st,Y)=>Be(ze.hair,ze.hairShade,.2+.5*ve(st*9)*(.3+.7*Y));Ot(pn(18,3,(st,Y)=>{let pt=-Math.PI+st*Math.PI*2,L=Math.abs(pt),J=L<1?.62-.3*(L/1):.32-.6*((L-1)/(Math.PI-1)),V=Math.PI/2-Y*(Math.PI/2-J),Z=1.09;return[Math.sin(pt)*Math.cos(V)*jr.w*Z,Math.sin(V)*jr.h*Z,Math.cos(pt)*Math.cos(V)*jr.d*Z]},x,!0),s,f),Ot(pn(18,10,(st,Y)=>{let pt=Math.PI*.4+st*Math.PI*1.2,L=.08-Y*(.72+.1*ve(st*6+.3)),J=Y<.25?.12+Y*.26:.185+.04*Math.sin(Y*3.1),V=.02*Math.sin(Y*14+pt*3)*Y;return[Math.sin(pt)*(J+V)*1.05,L,Math.cos(pt)*(J+V)*.8-.02-.05*Y]},x),s,f);for(let st of[-1,1]){let Y=Array.from({length:8},(pt,L)=>{let J=L/7;return[st*(.095+.05*J+.02*Math.sin(J*9)),.02-J*.5,0+.05*J-.025*Math.sin(J*7)]});Ot(We(Y,pt=>.03*(1-.6*pt)+.008,5,(pt,L)=>x(L,pt),[1,1,.6]),s,f)}Ot(pn(10,12,(st,Y)=>{let pt=st-.5,J=-.02-.06*(1-Math.abs(pt)*2)**2-Y*(.56+.06*ve(st*3+.5)),V=(.09+.02*Math.sin(Math.PI*Math.min(1,Y*1.6)))*(1-.75*Y**1.6),Z=pt*2*V+.008*Math.sin(Y*12+st*4),ct=.065+.04*Math.cos(pt*Math.PI)+.085*Y**.8-(Y<.08?.03*Math.abs(pt)*2:0);return[Z,J,ct]},(st,Y)=>Be(ze.hair,ze.hairShade,.15+.45*ve(st*5)*Y)),s,f);for(let st of[-1,1])Ot(We([[st*.004,-.045,.108],[st*.035,-.055,.106],[st*.06,-.075,.095],[st*.07,-.11,.088]],Y=>.014*(1-.6*Y)+.004,5,()=>ze.hair),s,f);let M=new Yt;M.position.set(0,.075,-.005),M.rotation.set(-.08,0,-.05),f.add(M),Ot(pn(20,3,(st,Y)=>{let pt=st*Math.PI*2,L=.13+Y*.17;return[Math.sin(pt)*L,.02-.04*Y*Y,Math.cos(pt)*L]},(st,Y)=>Be(l,h,Y>.85?.4:.2*ve(st*5)),!0),s,M),Ot(We([[0,.01,0],[0,.2,-.01],[0,.38,-.04],[-.02,.52,-.09],[-.07,.6,-.16],[-.13,.6,-.21],[-.18,.55,-.23]],st=>.15*(1-st)**1.3+.004,8,(st,Y)=>Be(l,h,.25*ve(Y*4)+.2*st)),s,M),Ot(pn(16,1,(st,Y)=>{let pt=st*Math.PI*2,L=.153-.005*Y;return[Math.sin(pt)*L,.025+Y*.05,Math.cos(pt)*L]},st=>ve(st*16)>.5?ze.gold:ze.goldDeep,!0),s,M),Ot(Mf(.055,.018,.01),a,M,[0,.08,.15]).rotation.x=-.1;let D=(st,Y,pt)=>pn(14,8,(L,J)=>{let V=L*Math.PI*2,Z=.06+pt*Math.max(0,(J-.25)/.75)**1.3;return[Math.cos(V)*Z,-(J*st),Math.sin(V)*Z*.9+Y*J*J]},(L,J)=>J>.88?ze.cream:J>.72?u(L,(J-.72)/.16,5,h):Be(l,h,.3*ve(L*3)),!0),P=new Yt;P.position.set(-.22,1.42,0),P.rotation.set(-.42,0,-.2),m.add(P),Ot(D(.58,.05,.13),s,P);let A=si(ze.skin,s,!1);A.position.set(0,-.56,.04),P.add(A);let C=new Yt;C.position.set(.22,1.42,.02),C.rotation.z=ri,m.add(C),Ot(D(.4,0,.065),s,C).rotation.x=-.5,Ot(new Ee(.03,.033,.12,6),o,C,[0,-.38,.19]).rotation.x=-.5;let{staffPivot:U,staff:y,crystal:v,crystalMat:W,glow:j}=br(C,[0,-.43,.24],n,t,e,si(ze.skin,s,!0)),ot=Er(f,[-1,1].map(st=>[st*.38*jr.w,.06*jr.h,.9*jr.d]),vr.wizard,t);return{root:d,body:m,head:f,arm:C,staffPivot:U,crystal:v,crystalMat:W,glow:j,staff:y,height:2,materials:n,eyes:ot}}var he={plate:re(14077887),plateHi:re(15262420),plateLo:re(11117201),plateDark:re(8156776),white:re(15789282),whiteLo:re(14209732),under:re(4862242),leather:re(7226406),leatherLo:re(5189401),sash:re(7301690),sashLo:re(5722928),slit:re(1380879),steel:re(13225168),grip:re(4860952),brass:re(12819016)};function Ef(i,t,e){let{materials:n,mat:r}=qs(),s=r(16777215,{vc:!0,double:!0}),o=r(16777215,{vc:!0,metal:.25,rough:.42,double:!0}),a=i==="ally"?re(3119724):re(12726316),c=i==="ally"?re(2257999):re(9314077),l=(C,U,y=6)=>Be(he.plate,ve(C*y)>.5?he.plateHi:he.plateLo,.35+.15*U),h=new Yt,u=new Yt;h.add(u);for(let C of[-1,1]){let U=C*.105;Ot(pn(8,4,(y,v)=>{let W=y*Math.PI*2,j=-.07+v*.25,ot=.06-v*.035,st=.058*(1-.7*v**1.6);return[U+Math.cos(W)*st,Math.max(.005,ot+Math.sin(W)*st*.75),j]},(y,v)=>Math.floor(v*4)%2?he.plateLo:he.plate,!0),o,u),Ot(We([[U,.08,-.01],[U,.22,0],[U,.36,0],[U,.5,.005]],y=>.058+.016*Math.sin(y*2.6),8,(y,v)=>l(v,y)),o,u),Ot(Sn(new Ne(.065,8,6),he.plateHi),o,u,[U,.53,.025]).scale.set(1,.9,.85),Ot(Sn(new Nn(.05,.03,6).rotateZ(-C*Math.PI/2),he.plateLo),o,u,[U+C*.06,.53,.02]),Ot(We([[U,.56,0],[U*1.02,.72,0],[U*.98,.9,-.005]],y=>.068+.022*y,8,(y,v)=>l(v,y)),o,u)}Ot(Cn([[1,.19],[.8,.22],[.6,.25],[.5,.26]],16,C=>Be(he.under,he.leatherLo,.4*ve(C*8)),1.1,.85),s,u);for(let C of[!1,!0])Ot(pn(8,10,(U,y)=>{let v=(C?Math.PI:0)+(U-.5)*2.2,W=1.36-y*.76-.02*ve(U*4)*y,j=(y<.45?.2+.03*Math.sin(y*7):.2+.12*(y-.45))+.012;return[Math.sin(v)*j*1.12,W,Math.cos(v)*j*.86]},(U,y)=>y>.82&&y<.87||y>.91&&y<.96?a:Be(he.white,he.whiteLo,.35*ve(U*4)*y)),s,u);Ot(Cn([[1.58,.11],[1.53,.2],[1.42,.245],[1.28,.23],[1.14,.2],[1.02,.205]],16,(C,U)=>C<.04||C>.96?he.plateHi:l(C,U,8),1.12,.84),o,u);for(let C=0;C<3;C++)Ot(Cn([[1.02-C*.045,.205+C*.008],[.975-C*.045,.215+C*.008]],14,U=>C%2?he.plateLo:he.plate,1.12,.86),o,u);Ot(Cn([[1.66,.06],[1.62,.075],[1.57,.12]],12,(C,U)=>l(C,U)),o,u),Ot(We(Array.from({length:15},(C,U)=>{let y=U/14*Math.PI*2;return[Math.sin(y)*.235,1.07+.03*Math.cos(y+.6),Math.cos(y)*.19]}),()=>.03,6,(C,U)=>Be(he.sash,he.sashLo,ve(U*3+C*5)*.6),[1,1.4,1]),s,u);for(let C of[0,1])Ot(We([[-.2,1.06,.1],[-.22-C*.02,.95,.12],[-.21-C*.04,.82-C*.04,.12]],U=>.025*(1-.3*U),5,U=>Be(he.sash,he.sashLo,U),[1.4,1,.5]),s,u);for(let C of[-1,1]){let U=Array.from({length:9},(y,v)=>{let W=v/8,j=-.9+W*4.6,ot=1.52-.48*W;return[C*Math.sin(j)*.285,ot+.06*Math.sin(W*Math.PI),Math.cos(j)*.222]});Ot(We(U,()=>.016,4,y=>Be(he.leather,he.leatherLo,.4*ve(y*4)),[1,1.5,1]),s,u)}Ot(Ei([.06,.06,.02],he.brass,[0,1.46,.235],[0,0,Math.PI/4]),s,u);let d=new Yt;d.position.set(0,1.18,-.24),d.rotation.z=.55,u.add(d),Ot(Ei([.055,.82,.012],he.steel,[0,-.12,0]),o,d),Ot(Sn(new Nn(.039,.07,4).rotateX(Math.PI).rotateY(Math.PI/4),he.steel),o,d,[0,-.565,0]).scale.set(1,1,.22),Ot(Ei([.24,.03,.035],he.brass,[0,.3,0]),s,d),Ot(Sn(new Ee(.018,.018,.16,6),he.grip),s,d,[0,.39,0]),Ot(Sn(new Ne(.03,6,4),he.brass),s,d,[0,.48,0]),Ot(Cn([[.32,.02],[-.5,.05],[-.6,.03]],6,()=>he.leatherLo,1,.5),s,d);let m=new Yt;m.position.set(0,1.73,0),u.add(m),Ot(Cn([[.13,0],[.125,.06],[.105,.105],[.045,.122],[.025,.124],[.005,.125],[-.06,.125],[-.125,.12],[-.135,.11]],14,(C,U)=>Math.floor(U*8)===4&&(C<.2||C>.8)?he.slit:C<.025||C>.975?he.plateHi:l(C,U,6),1,1.06),o,m);for(let C=0;C<4;C++)Ot(Ei([.012,.012,.01],he.slit,[.035+C%2*.025,-.05-Math.floor(C/2)*.03,.128],[0,.3,0]),s,m);for(let C of[-1,1])Ot(Sn(new Ee(.014,.014,.01,8).rotateZ(Math.PI/2),he.brass),s,m,[C*.128,-.01,0]);Ot(Ei([.03,.025,.05],he.brass,[0,.13,-.01]),s,m);for(let C=0;C<7;C++){let U=(C-3)/3,y=.42-Math.abs(U)*.08,v=Array.from({length:7},(W,j)=>{let ot=j/6,st=ot*2.2;return[U*.03*(1+ot),.14+Math.sin(st)*.14*y/.42,-.01-(1-Math.cos(st))*y*.45+.06*ot]});Ot(We(v,W=>.026*(1-W)**.7+.004,5,(W,j)=>Be(a,c,.3*ve(j*2)+.4*W)),s,m)}let g=(C,U)=>{Ot(We([[0,-.02,0],[0,-.14,0],[0,-.26,U*.3]],y=>.056-.006*y,7,(y,v)=>l(v,y)),o,C),Ot(Sn(new Ne(.05,7,5),he.plateHi),o,C,[0,-.27,U*.3-.01])};for(let C of[-1,1]){let U=new Yt;U.position.set(C*.27,1.5,0),U.rotation.z=-C*.5,u.add(U),Ot(Cn([[.075,0],[.06,.07],[.02,.12],[-.03,.135],[-.07,.13]],10,(y,v)=>v>.85?he.plateLo:l(y,v,5),1,1),o,U),Ot(Cn([[-.06,.13],[-.1,.12]],10,()=>he.plateLo),o,U),Ot(Sn(new Ee(.035,.04,.02,10).rotateZ(-C*Math.PI/2),he.plateHi),o,U,[C*.125,-.03,0]),Ot(Sn(new Ne(.014,6,4),he.brass),s,U,[C*.137,-.03,0])}let _=new Yt;_.position.set(-.26,1.44,0),_.rotation.set(-.3,0,-.08),u.add(_),g(_,.1),Ot(We([[0,-.28,.02],[0,-.42,.05],[0,-.52,.06]],C=>.048+.008*C,7,(C,U)=>l(U,C)),o,_);let f=si(he.plateHi,o,!1,he.plateLo,1.15);f.position.set(0,-.53,.06),_.add(f);let p=new Yt;p.position.set(.26,1.44,.02),p.rotation.z=ri,u.add(p),Ot(We([[0,-.02,0],[0,-.12,0],[0,-.22,.04]],C=>.056-.006*C,7,(C,U)=>l(U,C)),o,p),Ot(Sn(new Ne(.05,7,5),he.plateHi),o,p,[0,-.24,.05]),Ot(We([[0,-.25,.07],[0,-.33,.15],[0,-.39,.21]],C=>.045+.01*C,7,(C,U)=>l(U,C)),o,p);let{staffPivot:x,staff:M,crystal:b,crystalMat:D,glow:P}=br(p,[0,-.43,.25],n,t,e,si(he.plateHi,o,!0,he.plateLo,1.15)),A=Er(m,[[-.035,.016,.128],[.035,.016,.128]],vr.knight,t);return{root:h,body:u,head:m,arm:p,staffPivot:x,crystal:b,crystalMat:D,glow:P,staff:M,height:2,materials:n,eyes:A}}var Re={skin:re(8688447),skinLo:re(6714670),skinHi:re(10136146),hair:re(2892832),hairHi:re(4536623),red:re(11744555),redLo:re(8528668),leather:re(8015404),leatherLo:re(5583897),wrap:re(11045474),wrapLo:re(8217925),shorts:re(3814191),shortsLo:re(2695967),brass:re(12161605),nail:re(3947042),ear:re(10709594)},wi={w:.096,h:.112,d:.106,jaw:.22,chin:.02,nose:.036,brow:.016};function wf(i,t,e){let{materials:n,mat:r}=qs(),s=r(16777215,{vc:!0,double:!0}),o=r(Re.skin,{rough:.75}),a=i==="ally"?re(2920330):Re.red,c=i==="ally"?re(2058598):Re.redLo,l=(U,y,v=5)=>Be(Re.skin,ve(U*v)>.5?Re.skinHi:Re.skinLo,.35+.1*y),h=new Yt,u=new Yt;h.add(u);for(let U of[-1,1]){let y=U*.095;Ot(pn(7,4,(v,W)=>{let j=v*Math.PI*2,ot=-.06+W*.23,st=.05*(1-.35*W)*(W>.75?1-(W-.75)*1.6:1);return[y+U*.012*W+Math.cos(j)*st,Math.max(.004,.035+Math.sin(j)*st*.55-.01*W),ot]},(v,W)=>l(v,W),!0),s,u);for(let v=0;v<3;v++)Ot(Sn(new Ne(.016,5,4),Re.skinLo),s,u,[y+U*.012+(v-1)*.022,.016,.165-Math.abs(v-1)*.01]);Ot(We([[y,.05,-.01],[y,.3,-.005],[y*1.03,.48,.01],[y*1.05,.65,0],[y,.8,-.005]],v=>.04+.022*v+.008*Math.sin(v*7),7,(v,W)=>l(W,v)),s,u),Ot(We([[y,.08,-.01],[y,.2,-.008],[y,.32,-.004],[y*1.02,.44,.005]],v=>.048+.008*v,7,(v,W)=>ve(v*6+W*.5)>.5?Re.wrap:Re.wrapLo),s,u)}Ot(Cn([[.96,.17],[.86,.19],[.74,.21],[.66,.2]],14,(U,y)=>Be(Re.shorts,Re.shortsLo,.5*ve(U*6)*y),1.08,.82),s,u),Ot(Cn([[1,.175],[.94,.178]],14,U=>ve(U*7)>.85?Re.leatherLo:Re.leather,1.08,.84),s,u),Ot(Ei([.06,.05,.02],Re.brass,[0,.97,.15]),s,u),Ot(Ei([.035,.028,.024],Re.leatherLo,[0,.97,.152]),s,u);for(let U of[!1,!0])Ot(pn(6,6,(y,v)=>{let W=(U?Math.PI:0)+(y-.5)*.9,j=.19+.06*v,ot=.42+.1*ve(y*3.5+.2)+.04*Math.sin(y*17);return[Math.sin(W)*j*1.08,.96-v*ot,Math.cos(W)*j*.86+(U?-.01:.01)]},(y,v)=>Be(a,c,.25+.35*ve(y*3)*v)),s,u);Ot(Cn([[1.36,.075],[1.32,.155],[1.24,.18],[1.13,.155],[1.02,.14],[.94,.152]],14,(U,y)=>Math.min(U,1-U)<.12&&y>.4?ve(y*6)>.5?Re.skinHi:Re.skinLo:l(U,y,7),1.1,.74),s,u);for(let U of[-1,1]){let y=Array.from({length:9},(v,W)=>{let j=W/8,ot=-.9+j*4.4;return[U*Math.sin(ot)*.212,1.33-.36*j+.04*Math.sin(j*Math.PI),Math.cos(ot)*.145]});Ot(We(y,()=>.014,4,v=>Be(Re.leather,Re.leatherLo,.4*ve(v*4)),[1,2,1]),s,u)}Ot(Ei([.05,.05,.02],Re.brass,[0,1.27,.15],[0,0,Math.PI/4]),s,u);let d=new Yt;d.position.set(-.2,1.31,0),d.rotation.z=.55,d.scale.setScalar(.8),u.add(d),Ot(Cn([[.06,0],[.045,.06],[0,.1],[-.05,.11],[-.08,.1]],9,(U,y)=>y>.8||ve(U*9)>.8?Re.leatherLo:Re.leather,1,1.1),s,d),Ot(We(Array.from({length:11},(U,y)=>{let v=y/10*Math.PI*2;return[Math.sin(v)*.088,1.375+.02*Math.cos(v),Math.cos(v)*.08]}),()=>.03,7,(U,y)=>Be(a,c,.5*ve(y*2+U*6))),s,u),Ot(pn(8,5,(U,y)=>{let v=Math.PI+(U-.5)*(2.4-1.2*y),W=.13-.02*y;return[Math.sin(v)*W*1.1,1.42-y*.2+.03*Math.cos((U-.5)*6),Math.cos(v)*W-.04*y]},(U,y)=>Be(a,c,.2+.4*ve(U*3)*(1-y))),s,u);for(let U of[0,1])Ot(We([[-.04+U*.05,1.36,-.1],[-.07+U*.03,1.22,-.15],[-.09+U*.05,1.08,-.16]],y=>.035*(1-.3*y),5,y=>Be(a,c,y),[1.4,1,.45]),s,u);Ot(new Ee(.04,.05,.1,7),o,u,[0,1.4,0]);let m=new Yt;m.position.set(0,1.51,.01),u.add(m);let g=r(16777215,{rough:.75,flat:!1});g.map=bc({skin:"#84933f",shade:"rgba(60,72,24,A)",iris:"#d2401c",eyeW:.2,eyeH:.075,lid:.2,brow:"#2a221c",browW:22,browTilt:1,lips:"#4e3a22",lipW:.34,snarl:!0,glowEyes:!0}),Ot(Mc(wi),g,m);for(let U of[-1,1]){let y=[[U*.075,0,-.01],[U*.14,.03,-.03],[U*.21,.07,-.05],[U*.27,.105,-.07]];Ot(We(y,v=>.035*(1-v)**.9+.002,6,(v,W)=>l(W,v,3),[1,1,.35]),s,m),Ot(We(y.map(([v,W,j])=>[v*.98,W,j+.008]).slice(0,3),v=>.02*(1-v)+.002,5,()=>Re.ear,[1,1,.3]),s,m)}Ot(pn(16,3,(U,y)=>{let v=-Math.PI+U*Math.PI*2,W=Math.abs(v),j=W<.9?.55:.55-.65*((W-.9)/(Math.PI-.9)),ot=Math.PI/2-y*(Math.PI/2-j),st=1.08+.03*ve(U*8);return[Math.sin(v)*Math.cos(ot)*wi.w*st,Math.sin(ot)*wi.h*st,Math.cos(v)*Math.cos(ot)*wi.d*st]},(U,y)=>Be(Re.hair,Re.hairHi,.4*ve(U*8+y)),!0),s,m);for(let U=0;U<13;U++){let y=-Math.PI+U/13*Math.PI*2+.2*Math.sin(U*7.3),v=.55+.5*(U*.37%1),W=new T(Math.sin(y)*Math.cos(v),Math.sin(v),Math.cos(y)*Math.cos(v)),j=new T(W.x*wi.w,W.y*wi.h,W.z*wi.d);Ot(Sn(new Nn(.022,.07+.03*(U*.61%1),4),U%3?Re.hair:Re.hairHi),s,m,[j.x,j.y,j.z]).quaternion.setFromUnitVectors(new T(0,1,0),W.add(new T(0,0,-.5)).normalize())}let _=(U,y,v)=>Ot(We([y,[(y[0]+v[0])/2,(y[1]+v[1])/2,(y[2]+v[2])/2],v],W=>.042-.006*W,7,(W,j)=>ve(W*4+j*.4)>.5?Re.leather:Re.leatherLo),s,U),f=new Yt;f.position.set(-.2,1.3,0),f.rotation.set(-.35,0,-.15),u.add(f),Ot(We([[0,0,0],[0,-.14,0],[0,-.26,.02],[0,-.4,.05],[0,-.5,.06]],U=>.042-.012*U+.006*Math.sin(U*6),7,(U,y)=>l(y,U)),s,f),_(f,[0,-.32,.04],[0,-.48,.06]);let p=si(Re.leather,s,!1,Re.skin,1.05);p.position.set(0,-.5,.065),f.add(p);let x=new Yt;x.position.set(.2,1.3,.02),x.rotation.z=ri,u.add(x),Ot(We([[0,0,0],[0,-.12,0],[0,-.22,.04],[0,-.3,.12],[0,-.38,.2]],U=>.042-.012*U,7,(U,y)=>l(y,U)),s,x),_(x,[0,-.28,.1],[0,-.38,.19]);let{staffPivot:M,staff:b,crystal:D,crystalMat:P,glow:A}=br(x,[0,-.42,.23],n,t,e,si(Re.leather,s,!0,Re.skin,1.05)),C=Er(m,[-1,1].map(U=>[U*.38*wi.w,.06*wi.h,.9*wi.d]),vr.goblin,t);return{root:h,body:u,head:m,arm:x,staffPivot:M,crystal:D,crystalMat:P,glow:A,staff:b,height:1.75,materials:n,eyes:C}}var xn=i=>new zt(i),nn={robe:xn(8017597),robeDeep:xn(6045590),trim:xn(11242982),dress:xn(3484996),dressHi:xn(4931936),lining:xn(6969968),skin:xn(15654104),hair:xn(13615844),hairDark:xn(10194102),hat:xn(7097004),hatBand:xn(10256598),boot:xn(3880006),belt:xn(4207692),moon:xn(15787712),lips:xn(5911888),eye:xn(1709088)};function Qn(i,t,e,n,r=!1){let s=[],o=[],a=(u,d)=>e(r?u%i/i:u/i,d/t),c=(u,d)=>n(r?(u%i+i)%i/i:u/i,d/t),l=(u,d,m)=>{let g=c((u[0]+d[0]+m[0])/3,(u[1]+d[1]+m[1])/3);for(let[_,f]of[u,d,m])s.push(...a(_,f)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let d=0;d<i;d++)l([d,u],[d,u+1],[d+1,u+1]),l([d,u],[d+1,u+1],[d+1,u]);let h=new be;return h.setAttribute("position",new oe(s,3)),h.setAttribute("color",new oe(o,3)),h.computeVertexNormals(),h}function uu(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new T(...i[Math.min(s-1,h+1)]).sub(new T(...i[Math.max(0,h-1)])).normalize()),a=new T(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new T(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return Qn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}var oi=i=>1-Math.abs((i%1+1)%1*2-1),Ki=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),Ji={w:.087,h:.126,d:.108},Si=(i,t)=>Math.exp(-(i*i)/(t*t)),Sf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function tx(){let i=new Ne(1,28,22),t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++){let r=t.getX(n),s=t.getY(n),o=t.getZ(n),a=Math.max(0,o),c=r*Ji.w,l=s*Ji.h,h=o*Ji.d;if(s<0){let d=-s;c*=1-.55*d**1.25,h*=1-.12*d,l*=1+.08*d}c*=1+.04*Si(s+.02,.22)*a,s>.2&&(c*=1-.1*(s-.2));for(let d of[-1,1])h-=.008*Si(r-d*.38,.2)*Si(s-.06,.13)*a;h+=.006*Si(s-.3,.07)*Si(r,.5)*a;let u=Si(r,.1)*a*Sf(.2,-.2,s)*Sf(-.38,-.26,s);h+=.017*u,h+=.005*Si(r,.24)*Si(s+.5,.07)*a,h-=.004*Si(r,.3)*Si(s+.38,.05)*a,o<0&&(h*=1.06),t.setXYZ(n,c,l,h),o>.05?e.setXY(n,.5+r*.5,.5+s*.5):e.setXY(n,.02,.97)}return i.computeVertexNormals(),i}function ex(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=(h,u)=>[(.5+h*.5)*512,(.5-u*.5)*512];e.fillStyle="#e9d7d3",e.fillRect(0,0,512,512);let r=(h,u,d,m,g,_)=>{let[f,p]=n(h,u),x=d*512*.5;e.save(),e.translate(f,p),e.scale(1,m/d);let M=e.createRadialGradient(0,0,0,0,0,x);M.addColorStop(0,g.replace("A",String(_))),M.addColorStop(1,g.replace("A","0")),e.fillStyle=M,e.beginPath(),e.arc(0,0,x,0,Math.PI*2),e.fill(),e.restore()};for(let h of[-1,1])r(h*.62,-.18,.22,.3,"rgba(150,110,130,A)",.28),r(h*.42,-.2,.16,.1,"rgba(220,140,150,A)",.22);r(0,-.72,.3,.12,"rgba(140,100,120,A)",.25);for(let h of[-1,1]){let u=h*.38,d=.06;r(u,d+.06,.28,.12,"rgba(120,85,140,A)",.55);let[m,g]=n(u,d),_=.21*512*.5,f=.082*512*.5;e.save(),e.translate(m,g),e.scale(h,1),e.beginPath(),e.moveTo(-_,0),e.quadraticCurveTo(-_*.1,-f*1.1,_,-f*.15),e.quadraticCurveTo(_*.2,f*1.05,-_,0),e.closePath(),e.fillStyle="#efe9f2",e.fill(),e.save(),e.clip(),e.fillStyle="#4a3a5c",e.beginPath(),e.arc(-_*.12,f*.12,f*1.05,0,Math.PI*2),e.fill(),e.fillStyle="#1a1220",e.beginPath(),e.arc(-_*.12,f*.12,f*.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(-_*.28,-f*.25,f*.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,40,70,.55)",e.fillRect(-_,-f*1.2,_*2,f*.55),e.restore(),e.strokeStyle="#1c1420",e.lineCap="round",e.lineWidth=512*.01,e.beginPath(),e.moveTo(-_*1.02,.02*f),e.quadraticCurveTo(-_*.1,-f*1.15,_*1.12,-f*.35),e.stroke(),e.lineWidth=512*.006;for(let p=0;p<4;p++){let x=.55+p*.15;e.beginPath(),e.moveTo(_*(x*2-1),-f*(.95-p*.15)),e.lineTo(_*(x*2-1)+_*.18,-f*(1.35-p*.12)),e.stroke()}e.strokeStyle="rgba(90,60,90,.55)",e.lineWidth=512*.004,e.beginPath(),e.moveTo(-_*.9,-f*.9),e.quadraticCurveTo(0,-f*2,_*.95,-f*1),e.stroke(),e.strokeStyle="rgba(90,60,90,.4)",e.beginPath(),e.moveTo(-_*.6,f*.55),e.quadraticCurveTo(_*.1,f*1.05,_*.85,f*.2),e.stroke(),e.strokeStyle="#4a3a55",e.lineWidth=512*.011,e.beginPath(),e.moveTo(-_*.95,-f*2.7),e.quadraticCurveTo(_*.2,-f*3.4,_*1.15,-f*2.6),e.stroke(),e.restore()}r(.07,-.12,.05,.2,"rgba(160,120,135,A)",.22),e.fillStyle="rgba(110,70,90,.55)";for(let h of[-1,1]){let[u,d]=n(h*.06,-.31);e.beginPath(),e.ellipse(u,d,512*.012,512*.006,0,0,Math.PI*2),e.fill()}let[s,o]=n(0,-.5),a=.25*512*.5,c=.065*512*.5;e.fillStyle="#5b2f50",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s-a*.5,o-c*1.2,s-a*.1,o-c*.9),e.lineTo(s,o-c*.6),e.lineTo(s+a*.1,o-c*.9),e.quadraticCurveTo(s+a*.5,o-c*1.2,s+a,o),e.closePath(),e.fill(),e.fillStyle="#7b4468",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*2,s+a,o),e.closePath(),e.fill(),e.strokeStyle="#3a1c33",e.lineWidth=512*.006,e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*.35,s+a,o),e.stroke(),r(.03,-.535,.05,.02,"rgba(255,220,235,A)",.4);let l=new An(t);return l.colorSpace=on,l.anisotropy=4,l}function Tf(i,t,e){let n=[],r=(N,S={})=>{let R=new Te({color:S.vc?16777215:N,vertexColors:!!S.vc,metalness:S.metal??.04,roughness:S.rough??.82,flatShading:!0,emissive:S.emissive??(S.vc?1709092:0),transparent:!0,side:S.double?Le:Un});return n.push({mat:R,color:R.color.clone(),emissive:R.emissive.clone()}),R},s=r(16777215,{vc:!0,double:!0}),o=r(nn.skin,{rough:.7}),a=r(nn.eye,{rough:.5}),c=r(nn.moon,{metal:.35,rough:.35,emissive:2761744}),l=(N,S,R,H=[0,0,0])=>{let q=new St(N,S);return q.position.set(...H),R.add(q),q},h=i==="ally"?xn(3840636):nn.robe,u=i==="ally"?xn(2781272):nn.robeDeep,d=i==="ally"?xn(7655598):nn.trim,m=new Yt,g=new Yt;m.add(g);for(let N of[-1,1]){let S=N*.075;l(uu([[S,.98,0],[S*1.05,.62,.01],[S*1.1,.3,0],[S*1.1,.13,-.01]],H=>.068-.03*H,7,()=>nn.boot),s,g);let R=Qn(6,2,(H,q)=>{let B=H*Math.PI*2,F=q,G=-.05+F*.2,tt=.13-F*.11,z=.045*(1-.65*F*F);return[S+Math.cos(B)*z,tt+Math.sin(B)*z*.55,G]},()=>nn.boot,!0);l(R,s,g),l(new Ee(.012,.006,.12,5),a,g,[S,.06,-.045])}let _=Qn(14,8,(N,S)=>{let R=S<.25?.02:.02+(S-.25)*.55,H=R+N*(Math.PI*2-2*R),q=1.1-S*.82-(N>.35&&N<.65?0:.04*S)+.03*oi(N*7)*S,B=.165+.15*S**1.2;return[Math.sin(H)*B,q,Math.cos(H)*B*.82]},(N,S)=>Ki(nn.dress,nn.dressHi,.6*oi(N*7)*S));l(_,s,g),l(Qn(4,4,(N,S)=>{let R=-.35+N*.7,H=.15+.09*S;return[Math.sin(R)*H,.86-S*.6,Math.cos(R)*H*.62-.02]},()=>nn.lining),s,g);let f=Qn(10,5,(N,S)=>{let R=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.1],[1.67,.052]],H=S*(R.length-1),q=Math.min(R.length-2,Math.floor(H)),B=H-q,F=R[q][0]+(R[q+1][0]-R[q][0])*B,G=R[q][1]+(R[q+1][1]-R[q][1])*B,tt=N*Math.PI*2;return[Math.sin(tt)*G*1.08,F,Math.cos(tt)*G*.78]},(N,S)=>Ki(nn.dress,nn.dressHi,S>.8?.5:.15*oi(N*4)),!0);l(f,s,g),l(Qn(14,1,(N,S)=>{let R=N*Math.PI*2,H=.172+.006*S;return[Math.sin(R)*H*1.08,1.04+S*.11,Math.cos(R)*H*.82]},()=>nn.belt,!0),s,g);let p=(N,S)=>{let R=new Xr;R.absarc(0,0,N,Math.PI*.18,Math.PI*1.82,!1),R.absarc(N*.38,0,N*.78,Math.PI*1.7,Math.PI*.3,!0);let H=new Os(R,{depth:S,bevelEnabled:!0,bevelThickness:S*.4,bevelSize:N*.08,bevelSegments:1,curveSegments:6});return H.center(),H};l(new zn(.05,.012,4,10),c,g,[0,1.095,.152]).scale.set(1,.85,.6),l(p(.042,.012),c,g,[0,1.095,.162]).rotation.z=.5;let M=9,b=Qn(28,14,(N,S)=>{let R=.36+.48*S**1.2,H=R+N*(Math.PI*2-2*R),q=.07+.16*oi(N*M+.5)+(N<.06||N>.94?.08:0),B=.14,F,G,tt;if(S<B){let z=S/B;F=1.61-.14*z**.8,G=.1+.155*z**.7,tt=.72}else{let z=(S-B)/(1-B);F=1.47-z*(1.47-q),G=.255+.25*z**1.3,tt=.72+.22*z}return G*=1+.07*Math.sin(H*8)*Math.max(0,S-B),[Math.sin(H)*G*(1.12-.1*S),F,Math.cos(H)*G*tt-.03*S]},(N,S)=>{let R=S>.89||N<.03||N>.97,H=Ki(h,u,.35*oi(N*8+.25)+(N>.3&&N<.7?.15:0));return R?d:H});l(b,s,g),l(Qn(10,2,(N,S)=>{let R=Math.PI*.55+N*Math.PI*.9,H=.105+.045*S;return[Math.sin(R)*H*1.1,1.58+S*.13,Math.cos(R)*H*.85]},(N,S)=>Ki(h,d,S>.6?1:0)),s,g),l(new Ee(.045,.055,.12,7),o,g,[0,1.63,0]);let D=new Yt;D.position.set(0,1.76,0),g.add(D);let P=r(16777215,{rough:.7});P.map=ex(),P.flatShading=!1,l(tx(),P,D),l(Qn(20,4,(N,S)=>{let R=-Math.PI+N*Math.PI*2,H=Math.abs(R),q=H<.08?.72:H<.95?.6-.42*((H-.08)/.87)**.8:.18-.5*((H-.95)/(Math.PI-.95)),B=Math.PI/2-S*(Math.PI/2-q),F=1.085+.015*Math.sin(R*9);return[Math.sin(R)*Math.cos(B)*Ji.w*F,Math.sin(B)*Ji.h*F+.004,Math.cos(R)*Math.cos(B)*Ji.d*F]},(N,S)=>Ki(nn.hair,nn.hairDark,.15+.4*oi(N*14)*S),!0),s,D);let A=(N,S)=>Ki(nn.hair,nn.hairDark,.25+.5*oi(N*9)*(.4+.6*S));l(Qn(18,10,(N,S)=>{let R=Math.PI*.42+N*Math.PI*1.16,H=.1-S*(.95+.14*oi(N*6+.3)),q=S<.25?.13+S*.28:.2+.05*Math.sin(S*3.1),B=.022*Math.sin(S*15+R*3)*S;return[Math.sin(R)*(q+B)*1.05,H,Math.cos(R)*(q+B)*.85-.02-.05*S]},A),s,D);for(let N of[-1,1])for(let S of[0,1]){let R=N*(.098+S*.03),H=.035-S*.05,q=Array.from({length:8},(B,F)=>{let G=F/7;return[R+N*(.06*G+.025*Math.sin(G*9+S)),.04-G*(.55+.08*S),H+.06*G-.03*Math.sin(G*7)]});l(uu(q,B=>.035*(1-.6*B)+.008,5,(B,F)=>A(F,B),[1,1,.55]),s,D)}let C=new Yt;C.position.set(0,.075,-.005),C.rotation.set(-.12,0,.07),D.add(C),l(Qn(20,3,(N,S)=>{let R=N*Math.PI*2,H=.14+S*.24;return[Math.sin(R)*H,.02-.075*S*S+.012*Math.sin(R*3)*S,Math.cos(R)*H]},(N,S)=>Ki(nn.hat,u,S>.9?.25:.2*oi(N*5)),!0),s,C),l(uu([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],N=>.165*(1-N)**1.35+.004,8,(N,S)=>Ki(nn.hat,u,.25*oi(S*4)+.15*N)),s,C),l(Qn(16,1,(N,S)=>{let R=N*Math.PI*2,H=.168-.006*S;return[Math.sin(R)*H,.025+S*.06,Math.cos(R)*H]},()=>nn.hatBand,!0),s,C);let y=l(p(.04,.012),c,C,[0,.055,.172]);y.rotation.z=.5;let v=(N,S,R=.15)=>Qn(10,6,(H,q)=>{let B=H*Math.PI*2,F=.065+R*Math.max(0,(q-.3)/.7)**1.4,G=q<.99?0:.07*oi(H*4),tt=-(q*N)-G,z=S*q*q;return[Math.cos(B)*F,tt,Math.sin(B)*F*.9+z]},(H,q)=>q>.85?d:Ki(h,u,.3*oi(H*3)),!0),W=new Yt;W.position.set(-.23,1.47,0),W.rotation.set(-.42,0,-.2),g.add(W),l(v(.6,.06),s,W);let j=si(nn.skin,s,!1);j.position.set(0,-.58,.05),W.add(j);let ot=new Yt;ot.position.set(.23,1.47,.02),ot.rotation.z=ri,g.add(ot);let st=l(v(.4,0,.07),s,ot);st.rotation.x=-.5;let Y=l(new Ee(.03,.034,.12,6),o,ot,[0,-.38,.19]);Y.rotation.x=-.5;let{staffPivot:pt,staff:L,crystal:J,crystalMat:V,glow:Z}=br(ot,[0,-.43,.24],n,t,e,si(nn.skin,s,!0)),ct=Er(D,[-1,1].map(N=>[N*.38*Ji.w,.06*Ji.h,.9*Ji.d]),vr.witch,t);return{root:m,body:g,head:D,arm:ot,staffPivot:pt,crystal:J,crystalMat:V,glow:Z,staff:L,height:2,materials:n,eyes:ct}}var nx={me:4020950,opp:12728908,ally:3121012};function Rf(i,t,e,n){if(i==="witch")return Tf(t,e,n);if(i==="wizard")return vf(t,e,n);if(i==="knight")return Ef(t,e,n);if(i==="goblin")return wf(t,e,n);i=i;let r=[],s=(W,j={})=>{let ot=new Te({color:W,metalness:j.metal??.05,roughness:j.rough??.8,flatShading:!0,emissive:j.emissive??0,emissiveIntensity:j.ei??1,transparent:!0});return r.push({mat:ot,color:ot.color.clone(),emissive:ot.emissive.clone()}),ot},o=(W,j,ot=0,st=0,Y=0)=>{let pt=new St(W,j);return pt.position.set(ot,st,Y),pt},c=i==="goblin"||i==="kid"?.78:1,l=s(i==="goblin"?7323466:15778970),h=s(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:nx[t],d=s(u),m=s(16766073,{metal:.2,rough:.4}),g=s(12897496,{metal:.3,rough:.45}),_=new Yt,f=new Yt;if(_.add(f),i==="wizard")f.add(o(new Ee(.27,.46,1,9),d,0,.5,0)),f.add(o(new Ee(.47,.47,.05,9),m,0,.03,0));else{let W=i==="knight"?g:h;f.add(o(new Ee(.09,.08,.6,6),W,-.12,.3,0)),f.add(o(new Ee(.09,.08,.6,6),W,.12,.3,0)),f.add(o(new en(.16,.08,.26),h,-.12,.04,.05)),f.add(o(new en(.16,.08,.26),h,.12,.04,.05)),f.add(o(new Ee(.3,.34,.32,8),d,0,.72,0))}let p=i==="knight"?g:d;if(f.add(o(new Ee(.24,.29,.55,8),p,0,1.12,0)),f.add(o(new zn(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let W=o(new en(.34,.6,.04),d,0,1,.27);f.add(W),f.add(o(new Ne(.13,6,4),g,-.3,1.36,0)),f.add(o(new Ne(.13,6,4),g,.3,1.36,0))}i==="human"&&f.add(o(new en(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let x=new Yt;x.position.set(0,1.58,0),f.add(x),x.add(o(new yn(.2,1),l));for(let W of[-.07,.07])x.add(o(new Ne(.028,6,4),h,W,.02,.18));if(i==="wizard"){let W=s(15658740);x.add(o(new Nn(.17,.42,7),W,0,-.2,.1).rotateX(Math.PI)),x.add(o(new en(.4,.34,.14),W,0,-.06,-.13)),x.add(o(new Ee(.36,.36,.04,12),d,0,.15,0));let j=o(new Nn(.24,.62,9),d,0,.47,0);j.rotation.z=.12,x.add(j),x.add(o(new zn(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let W of[-1,1]){let j=o(new Nn(.07,.34,5),l,W*.24,.05,0);j.rotation.z=-W*1.25,x.add(j)}x.add(o(new Nn(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")x.add(o(new yn(.235,1),g)),x.add(o(new en(.3,.05,.05),h,0,.02,.21)),x.add(o(new Nn(.06,.4,6),s(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")x.add(o(new en(.38,.2,.12),s(5913122),0,-.02,-.13)),x.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2),s(4029400),0,.03,0)),x.add(o(new en(.2,.025,.16),s(4029400),0,.05,.2));else if(i==="human"){let W=s(5913122);x.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),W,0,.02,-.01)),x.add(o(new en(.4,.22,.12),W,0,-.04,-.13))}let M=i==="knight"?g:d,b=new Yt;b.position.set(-.3,1.34,0),b.rotation.z=.25,f.add(b),b.add(o(new Ee(.075,.1,.55,6),M,0,-.27,0)),b.add(o(new Ne(.07,6,4),l,0,-.58,0));let D=new Yt;D.position.set(.3,1.34,.02),D.rotation.z=ri,f.add(D),D.add(o(new Ee(.075,.1,.5,6),M,0,-.22,.05).rotateX(-.5));let P=o(new Ne(.07,6,4),l,0,-.42,.22);D.add(P);let A=new Yt;A.position.set(0,-.42,.22),A.rotation.z=-.37,D.add(A);let C=$i(n,e);C.group.position.y=.24,C.group.scale.setScalar(.8),A.add(C.group);for(let W of C.materials)r.push({mat:W,color:W.color.clone(),emissive:W.emissive.clone()});let{gem:U,gemMat:y,glow:v}=C;return _.scale.setScalar(c),{root:_,body:f,head:x,arm:D,staffPivot:A,crystal:U,crystalMat:y,glow:v,staff:C,height:1.95*c,materials:r}}function fu(i){return["wizard","witch","goblin","knight","kid","human"].find(t=>t===i)??"wizard"}function ix(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new An(i);return n.colorSpace=on,n}function Af(i){let t;try{t=new Ns({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=Bo,t.setClearColor(0,0);let e=new Hs;e.add(new zs(14673663,2760768,1.4));let n=new Yi(16777215,2.2);n.position.set(2,3,4),e.add(n);let r=new Yi(10456319,2);r.position.set(-3,2,-3),e.add(r);let s=new mi(16777215,3,3,2);e.add(s);let o=new vn(30,1,.1,50),a=ix(),c=new Yt;c.rotation.z=.12,e.add(c);let l=null,h="";function u(x){return l&&h===x||(l&&(c.remove(l.group),l.group.traverse(M=>M.geometry?.dispose?.())),l=$i(x,a),h=x,c.add(l.group),s.color.copy(l.color),s.position.set(.3,xr+.2,.6)),l}function d(){let x=i.clientWidth||300,M=i.clientHeight||420;t.setSize(x,M,!1),o.aspect=x/M;let b=1.55/Math.tan(Vs.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,b),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,f=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(x){if(!f()){m=0;return}m=requestAnimationFrame(p);let M=Math.min(.05,(x-g)/1e3);g=x,_+=M,l&&(c.rotation.y+=M*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=M*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,M,.25),t.render(e,o))}return{show(x){u(x),d(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(x,M,b){let D=[],P=h,A=c.rotation.y,C=c.position.y;t.setPixelRatio(1),t.setSize(M,b,!1),o.aspect=M/b,o.position.set(.35,xr+.12,1.6),o.lookAt(0,xr-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let U of x)u(U).update(1.2,0,0),t.render(e,o),D.push(i.toDataURL("image/png"));return c.rotation.y=A,c.position.y=C,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),P&&u(P),d(),D},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function Tn(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,r)=>n+(r-n)*e(),int:(n,r)=>n+Math.floor(e()*(r-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var Vt=i=>i<0?0:i>1?1:i,Ae=(i,t,e)=>{let n=Vt((e-i)/(t-i));return n*n*(3-2*n)},Of=(i,t,e)=>i+(t-i)*e,Jt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],ge=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],wr=(i,t)=>1-Math.exp(-i*t),Xo=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},ue=i=>i*Math.PI/180;function Pn(i,t){let e=ue(i),n=ue(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function Bf(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return Jt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var vc=(()=>{let i=Tn(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function ke(i,t){let e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,d=vc[h+c],m=vc[h+l],g=vc[u+c],_=vc[u+l];return(d*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var Cf=Math.cos(.55),Pf=Math.sin(.55);function cn(i,t,e=5,n=2.03,r=.5){let s=0,o=1,a=0;for(let c=0;c<e;c++){s+=o*ke(i+17.3*c,t-9.1*c),a+=o;let l=(i*Cf-t*Pf)*n,h=(i*Pf+t*Cf)*n;i=l,t=h,o*=r}return s/a}var If=Math.cos(.7),Lf=Math.sin(.7);function kf(i,t,e=5,n=2.1,r=.52){let s=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*ke(i+31.7*l,t+5.3*l)-1);h=h*h*c,s+=h*o,a+=o,c=Vt(h*2);let u=(i*If-t*Lf)*n,d=(i*Lf+t*If)*n;i=u,t=d,o*=r}return s/a}var Df=new Map;function rx(i,t,e){let n=`${t}:${e}`,r=Df.get(n);if(!r){let l=Tn(e*977+t);r=new Float32Array(t);for(let h=0;h<t;h++)r[h]=l.random();Df.set(n,r)}let s=i*t,o=Math.floor(s),a=s-o,c=a*a*(3-2*a);return r[(o%t+t)%t]*(1-c)+r[((o+1)%t+t)%t]*c}function Uf(i,t=5,e=3,n=1,r=.5){let s=0,o=1,a=0;for(let c=0;c<t;c++)s+=o*rx(i,e*2**c,n+c),a+=o,o*=r;return s/a}function ji(i,t){let e=i.stops;return(n,r,s)=>{let o=Math.asin(Math.max(-1,Math.min(1,s)))*180/Math.PI,a=Bf(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+r*l[1]+s*l[2])));for(let[u,d,m]of i.glow){let g=Math.exp(-h/u)*d*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-r*l[1]+s*l[2]))),d=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=d*i.anti_col[0],a[1]+=d*i.anti_col[1],a[2]+=d*i.anti_col[2]}}return a}}var Ys=(i,t)=>Math.round(255*Math.pow(Vt(wr(i,t)),1/2.2));function mu(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function gu(i,t=!1){let e=new An(i);return e.colorSpace=on,t?e.wrapS=e.wrapT=ki:e.wrapS=Vr,e.anisotropy=2,e}function sx(i,t,e){let n=t/2,{c:r,g:s,img:o}=mu(t,n),a=ji(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??ge(i.far2,.8),d=[],m=h.map(()=>[]);for(let b=0;b<t;b++){let D=(b+.5)/t,P=D*2*Math.PI;d.push(a(Math.cos(P)*Math.cos(.012),Math.sin(P)*Math.cos(.012),Math.sin(.012)));let A=1;for(let C of e.notchAz){let U=Math.abs(Xo(P,ue(C)));A*=1-.85*Math.exp(-((U/ue(20))**2))}h.forEach(([C,U,y],v)=>{if(e.ridgeKind==="trees"){m[v].push(C+U*Uf(D,6,18,y,.62)**1.5);return}let W=1-Math.abs(2*Uf(D,7,4,y,.56)-1);m[v].push((C+U*W**1.3)*(.35+.65*A))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),f=null,p=[0,0,0],x=[0,0,0];if((i.milky??0)>0){let b=new T(.25,-.55,.8).normalize(),D=b.clone().cross(new T(0,0,1)).normalize(),P=b.clone().cross(D);f=[b.x,b.y,b.z],p=[D.x,D.y,D.z],x=[P.x,P.y,P.z]}for(let b=0;b<n;b++){let D=((b+.5)/n-.5)*Math.PI,P=Math.cos(D),A=Math.sin(D),C=n-1-b;for(let U=0;U<t;U++){let y=(U+.5)/t*2*Math.PI,v=P*Math.cos(y),W=P*Math.sin(y),j=A,ot=a(v,W,j);if(f&&D>0){let L=Math.asin(Math.max(-1,Math.min(1,v*f[0]+W*f[1]+j*f[2]))),J=Math.atan2(v*x[0]+W*x[1]+j*x[2],v*p[0]+W*p[1]+j*p[2]),V=3*Math.cos(J),Z=3*Math.sin(J),ct=cn(V+9*L,Z+4*L,4),N=Ae(.5,.75,cn(V*1.7+17+14*L,Z*1.7-5+6*L,3)),S=Math.exp(-((L/(i.milky_w??.2))**2))*(.25+1.3*ct)*(1-.65*N)*i.milky,R=i.milky_col??[.55,.58,.85];ot=[ot[0]+S*R[0],ot[1]+S*R[1],ot[2]+S*R[2]]}let st=0;h.forEach(([,,,L,J],V)=>{let Z=Vt((m[V][U]-D)/l+.5);if(Z<=0)return;let ct=d[U],N=Jt(J,ct,L),S=Jt(N,ct,Math.exp(-Math.max(D,0)/.025)*.55);ot=Jt(ot,S,Z),st=Math.max(st,Z)});let Y=Vt(-D/l+.5);Y>0&&(ot=Jt(ot,u,Y));let pt=(C*t+U)*4;o.data[pt]=Ys(ot[0],c),o.data[pt+1]=Ys(ot[1],c),o.data[pt+2]=Ys(ot[2],c),o.data[pt+3]=255,g[C*t+U]=st,_[C*t+U]=(o.data[pt]+o.data[pt+1]+o.data[pt+2])/765}}let M=(i.stars??0)>0?ox(t,n,i.star_n,i.stars,g,_):null;return s.putImageData(o,0,0),{tex:gu(r),stars:M}}function ox(i,t,e,n,r,s){let o=Tn(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let d=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(d),_=Math.floor(m/(2*Math.PI)*i)%i,f=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-f,x=(1-r[p*i+_])*Vt(1-s[p*i+_]*3),M=o.random()**6,b=a[o.int(0,3)];if(x<=.01)continue;let D=Math.min(1.6,(.1+.95*M)*n*x*2.2),P=140;c.push(P*Math.cos(g)*Math.cos(m),P*Math.cos(g)*Math.sin(m),P*Math.sin(g)),l.push(b[0]*D,b[1]*D,b[2]*D),h.push(1+M*2.5)}return{pos:c,col:l,size:h}}function ax(i,t,e){let n=t/2,{c:r,g:s,img:o}=mu(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let d=0;d<n;d++){let m=((d+.5)/n-.5)*Math.PI,g=n-1-d;if(m<.02)continue;let _=Math.cos(m),f=Math.sin(m),p=1/(f+.16),x=c<50?Ae(.02,.1,m)*(1-Ae(c*.6,c,m)):Ae(.02,.16,m);if(!(x<=0))for(let M=0;M<t;M++){let b=(M+.5)/t*2*Math.PI,D=_*Math.cos(b),P=_*Math.sin(b),A=D*p*i.cloud_scale,C=P*p*i.cloud_scale,U=cn(A*.6+9,C*.6+2,3)-.5,y=A+U*1.4,v=C+U*1.1,W=cn(y,v,5),j=Ae(i.cov0,i.cov1,W);if(j<=.002)continue;let ot=cn(y+h,v+u,5),st=Vt(.55-(ot-W)*3.4)*(1-.4*j),Y=Math.exp(-Math.acos(Math.max(-1,Math.min(1,D*e[0]+P*e[1]+f*e[2])))/1.1),pt=Jt(i.cloud_lit_far,i.cloud_lit_near,Y),L=ge(i.cloud_shadow,.6+.4*Y),J=Jt(L,pt,st),V=j*(1-j)*4*Y*.6,Z=(g*t+M)*4;o.data[Z]=Ys(J[0]+V*i.cloud_rim[0],a),o.data[Z+1]=Ys(J[1]+V*i.cloud_rim[1],a),o.data[Z+2]=Ys(J[2]+V*i.cloud_rim[2],a),o.data[Z+3]=Math.round(255*j*x*i.cloud_opacity)}}return s.putImageData(o,0,0),gu(r)}function cx(i,t,e={}){let n=e.span??1.4,{c:r,g:s,img:o}=mu(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(d,m),_=Vt((1-g)/(n*2/t)+.5),f=Math.sqrt(Vt(1-g*g)),p=0;for(let[P,A]of e.rings??[])p=Math.max(p,A*(1-Ae(P-.1,P,g)));let x;if(i==="sun")x=Jt(e.sunInner??[1,.62,.25],a,Math.pow(f,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let P=Vt(d*l[0]+m*l[1]+f*l[2]),A=Ae(.5,.6,cn(d*1.9+4,m*1.9-2,5))*.42,C=Ae(.62,.8,ke(d*14,m*14))*.12,U=(.04+P**.8)*(.6+.4*f)*(.9-A-C)*(e.moonGain??1.55);x=ge(a,U),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-Ae(n*.86,n,g);let M=_+(1-_)*p,b=M>1e-4?[0,1,2].map(P=>(_*x[P]+(1-_)*p*c[P])/M):[0,0,0],D=(h*t+u)*4;o.data[D]=Math.round(255*Math.pow(Vt(b[0]),1/2.2)),o.data[D+1]=Math.round(255*Math.pow(Vt(b[1]),1/2.2)),o.data[D+2]=Math.round(255*Math.pow(Vt(b[2]),1/2.2)),o.data[D+3]=Math.round(255*Vt(M))}return s.putImageData(o,0,0),gu(r,!0)}var Qt=class{constructor(t=!1,e=0){Ze(this,"alpha",t);Ze(this,"pos",[]);Ze(this,"col",[]);Ze(this,"idx",[]);Ze(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((r,s)=>{let o=n?.[s];r.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new be;return t.setAttribute("position",new oe(this.pos,3)),t.setAttribute("color",new oe(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new oe(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function _e(i={}){let t=new Bs({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Le:Un}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var Ti=(i={})=>{let t=new an({vertexColors:!0,side:Le,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?fn:bi,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},Vn=(i,t=1)=>new an({color:new zt(i[0]*t,i[1]*t,i[2]*t),side:Le,toneMapped:!1});function Nf(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),r.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;s.push(l,h,l+1,h,h+1,l+1)}let o=new be;return o.setAttribute("position",new oe(n,3)),o.setAttribute("uv",new oe(r,2)),o.setIndex(s),o}var du=(i,t=!1)=>new an({map:i,side:Le,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function Hf(i,t){let e=new Qt,n=(r,s,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[d,m,g,_]of[[r,0,s,s],[0,r,-s,s],[-r,0,-s,-s],[0,-r,s,-s]])h.push(e.v([d*c-m*l,d*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let d=0;d<8;d++)e.f(u,h[d],h[(d+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function Ri(i){let t=new Yt,e=[],n=sx(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),r=n.tex,s=new St(Nf(150,48,24),du(r));if(s.renderOrder=-10,s.frustumCulled=!1,t.add(s),e.push(r,s.geometry,s.material),n.stars&&n.stars.pos.length){let M=new be;M.setAttribute("position",new oe(n.stars.pos,3)),M.setAttribute("color",new oe(n.stars.col,3)),M.setAttribute("size",new oe(n.stars.size,1));let b=new Yn({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:fn}),D=new _r(M,b);D.renderOrder=-9.5,D.frustumCulled=!1,t.add(D),e.push(M,b)}let o=null;if(i.clouds!==!1){let M=ax(i.th,Math.min(1024,i.W),i.bodies[0]);o=new St(Nf(138,48,24),du(M,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(M,o.geometry,o.material)}let a=i.body.span??1.4,c=cx(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=du(c,!0);e.push(c,l);for(let M of i.bodies){let D=146*Math.tan(i.body.r)*a,P=new T(...M),A=P.clone().cross(new T(0,0,1));A.lengthSq()<1e-8&&(A=new T(1,0,0)),A.normalize();let C=A.clone().cross(P).normalize(),U=P.clone().multiplyScalar(146),y=new be,v=[U.clone().addScaledVector(A,-D).addScaledVector(C,-D),U.clone().addScaledVector(A,D).addScaledVector(C,-D),U.clone().addScaledVector(A,D).addScaledVector(C,D),U.clone().addScaledVector(A,-D).addScaledVector(C,D)];y.setAttribute("position",new oe(v.flatMap(j=>[j.x,j.y,j.z]),3)),y.setAttribute("uv",new oe([0,0,1,0,1,1,0,1],2)),y.setIndex([0,1,2,0,2,3]);let W=new St(y,l);W.renderOrder=-8,W.frustumCulled=!1,t.add(W),e.push(y)}let h=Tn(i.seed??21),u=[],d=Math.round(i.sparkles*(i.bigShare??.27)),m=new an({color:new zt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Le}),g=new an({color:new zt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Le}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},f=Hf(..._.big),p=Hf(..._.small);e.push(m,g,f,p);for(let M=0;M<i.sparkles;M++){let b=M<d,D=h.uniform(0,360),P=h.uniform(..._.el??[35,88]),A=Pn(D,P);i.bodies.concat([Pn(i.th.body_az+180,i.th.body_el)]).some(v=>A[0]*v[0]+A[1]*v[1]+A[2]*v[2]>Math.cos(ue(24)))&&(D+=45);let C=Pn(D,P).map(v=>v*135),U=new St(b?f:p,b?m:g);U.position.set(...C),U.lookAt(0,0,0),U.renderOrder=-7,t.add(U);let y=b?24:12;u.push({m:U,big:b,pulses:Array.from({length:y},(v,W)=>Math.round((W+.5)*3600/y+h.int(-15,15)))})}let x=null;return{group:t,envMap(){if(x)return x;let M=r.image,b=document.createElement("canvas");b.width=M.width,b.height=M.height;let D=b.getContext("2d");return D.translate(b.width*.5,0),D.scale(-1,1),D.drawImage(M,0,0),D.drawImage(M,-M.width,0),x=new An(b),x.colorSpace=on,x.mapping=So,e.push(x),x},update(M){o&&(o.rotation.z=M%3600/3600*Math.PI*2);let b=M%3600;for(let D of u){let P=1;for(let A of D.pulses){if(b<A-18||b>A+14)continue;let C=[[A-18,1],[A-9,D.big?1.35:1.2],[A,D.big?.2:.35],[A+14,1]];for(let U=0;U<3;U++)if(b>=C[U][0]&&b<=C[U+1][0]){let y=(b-C[U][0])/(C[U+1][0]-C[U][0]);P=Of(C[U][1],C[U+1][1],y*y*(3-2*y))}}D.m.scale.setScalar(P)}},dispose(){for(let M of e)M.dispose()}}}function In(i,t,e=0,n=1,r=0){let s=Math.floor(i/t),o=(i-s*t)/t,a=o*o*(3-2*o),c=(s+r)%2?n:e,l=(s+r)%2?e:n;return Of(c,l,a)}var zf=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function Zs(i,t,e,n){let r=new Qt,s=[];for(let o of i){if(o===0){let c=r.v([0,0,e(0,0)],n(0,0));s.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(r.v([h,u,e(h,u)],n(h,u)))}s.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?r.f(s[0][0],s[1][a],s[1][c]):r.f(s[o][a],s[o][c],s[o-1][c],s[o-1][a])}return r.geo()}function lx(i,t,e,n,r=0){let s=.6+.4*Vt(t)**.7,o=ge(i,s*(.88+.24*e));return Jt(o,n,Vt(Vt(1-t*3)*.55+r*.75))}function Ai(i,t,e,n,r,s,o=!0){let a=ke(e*2.5+r,n*2.5+r),c=o?Vt((ke(e*.7+r,n*.7-r)-.5)*2.5):0;return lx(i,t,a,s,c)}function pu(i,t,e,n,r,s,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],s([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],s([o[0],o[1],e+n],1));for(let g=0;g<r;g++){let _=2*Math.PI*g/r,f=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(f,s(f,0))),l.push(i.v(p,s(p,1)))}let d=[],m=[];for(let g=0;g<r;g++)d.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<r;g++){let _=(g+1)%r;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(d[g],d[_],m[_],m[g])}}function hx(i,t,e,n,r,s,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,r-=h/2,t+=l/2,e-=l/2;let u=(g,_,f)=>[g*Math.cos(_),g*Math.sin(_),f],d=g=>i.v(g,a(g,(g[2]-s)/o)),m=(g,_,f,p)=>i.f(d(g),d(_),d(f),d(p));for(let g=0;g<c;g++){let _=n+(r-n)*g/c,f=n+(r-n)*(g+1)/c;m(u(t,_,s+o),u(e,_,s+o),u(e,f,s+o),u(t,f,s+o)),m(u(e,_,s+o),u(e,_,s),u(e,f,s),u(e,f,s+o)),m(u(t,f,s+o),u(t,f,s),u(t,_,s),u(t,_,s+o))}m(u(t,n,s+o),u(t,n,s),u(e,n,s),u(e,n,s+o)),m(u(e,r,s+o),u(e,r,s),u(t,r,s),u(t,r,s+o))}function Wo(i,t,e,n,r=[1,1,1]){let s=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],d=h[1]-l[1],m=Math.hypot(u,d)||1,g=-d/m,_=u/m;s.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],r)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],r))});for(let a=0;a<t.length-1;a++)i.f(s[a],o[a],o[a+1],s[a+1])}var wc=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function ux(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(ue(n)),.4+.4*Math.sin(ue(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(ue(n)),-.4+.4*Math.sin(ue(n))]);return[[...t,...e]]}return i===1?[wc(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],wc(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function Ff(i,t,e,n,r,s,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let d of ux(t))Wo(i,d.map(([m,g])=>[h+r*(m*c-g*l),u+r*(m*l+g*c)]),o,s)}function Sr(i){let{th:t,r:e}=i,n=t.stone,r=new Qt,s=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,f)=>s(Ai(m,f,_[0],_[1],g,t.moss,i.patchy??!0),_)};pu(r,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),pu(r,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],f)=>{let p=f*.23;for(let x=0;x<_;x++)hx(r,m,g,p+2*Math.PI*x/_,p+2*Math.PI*(x+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new Qt;pu(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new Qt;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),f=Math.sin(g);Wo(l,[[.3*_,.3*f],[2.2*_,2.2*f]],.07,c);for(let p of[-1,1]){let x=g+p*ue(35);Wo(l,[[1.3*_,1.3*f],[1.3*_+.7*Math.cos(x),1.3*f+.7*Math.sin(x)]],.05,c)}}Wo(l,wc(2.3),.06,c),Wo(l,wc(6),.05,c);let h=new Qt;for(let m=0;m<8;m++){let g=ue(45*m);m===6?Ff(h,0,g,7.4,.95,c+.01,.13):Ff(h,m%3,g,8.2,.55,c+.01,.09)}let u=new Yt;u.add(new St(r.geo(),_e())),u.add(new St(a.geo(),Vn(i.glowCol,i.glow*1.1)));let d=new St(l.geo(),Vn(i.lineCol,i.glow*1.3));return d.name="centre-pattern",u.add(d),u.add(new St(h.geo(),Vn(i.runeCol,i.glow*1.6))),u}function $s(i){let{r:t}=i,e=i.wind??(()=>{let r=new T(.8,.6,0).normalize();return[r.x,r.y,0]})(),n=new Qt(!1,1);for(let r=0;r<i.tufts;r++){let s=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,s))continue;let a=s*Math.cos(o),c=s*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),d=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),f=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],x=[-Math.sin(_),Math.cos(_)],M=i.gh(u,d),b=i.base(s),D=i.tip(s,_),P=Jt(b,D,.55),A=[u,d,M],C=[u+p[0]*f*.3,d+p[1]*f*.3,M+m*.55],U=[u+p[0]*f,d+p[1]*f,M+m],y=(Y,pt)=>{let L=Y[2]-M,J=.32*L*L;return n.v(Y,pt,[[e[0]*J,e[1]*J,0]])},v=y([A[0]-x[0]*g,A[1]-x[1]*g,A[2]],b),W=y([A[0]+x[0]*g,A[1]+x[1]*g,A[2]],b),j=y([C[0]-x[0]*g*.65,C[1]-x[1]*g*.65,C[2]],P),ot=y([C[0]+x[0]*g*.65,C[1]+x[1]*g*.65,C[2]],P),st=y(U,D);n.f(v,W,ot,j),n.f(j,ot,st)}}return n.geo()}function Vf(i,t,e,n,r,s,o,a){let c=new T(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new T(0,0,1)).normalize(),u=l.clone().cross(h),d=12,m=o*r,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([f,p])=>{let x=(.45+3*a*f**1.6)*n;return Array.from({length:d},(M,b)=>{let D=2*Math.PI*b/d,P=c.clone().multiplyScalar(f).addScaledVector(h,Math.cos(D)*x).addScaledVector(u,Math.sin(D)*x);return i.v([t[0]+P.x,t[1]+P.y,t[2]+P.z],[s[0],s[1],s[2],p*m])})});for(let f=0;f<g.length-1;f++)for(let p=0;p<d;p++){let x=(p+1)%d;i.f(_[f][p],_[f][x],_[f+1][x],_[f+1][p])}}function Ks(i,t,e,n,r,s,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[r[0],r[1],r[2],n(0,0)*s]),l=[...o,t].map(h=>Array.from({length:40},(u,d)=>{let m=2*Math.PI*d/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[r[0],r[1],r[2],n(g,_)*s])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let d=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][d],l[h][d])}}var Qr=()=>new an({vertexColors:!0,transparent:!0,depthWrite:!1,blending:fn,side:Le,fog:!1}),Ec=null;function Gf(){if(Ec)return Ec;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ec=new An(i),Ec}function Ci(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let r=new Float32Array(i.n*3),s=new be;s.setAttribute("position",new De(r,3));let o=new gr({map:Gf(),color:new zt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:fn,sizeAttenuation:!0,fog:!1}),a=new _r(s,o);a.frustumCulled=!1;let c=l=>{let h=zf(l);for(let u=0;u<i.n;u++){let d=i.twinkle?Math.sin(l*.05+n[u])*.15:0;r[u*3]=t[u][0]+e[u][0]*h+d,r[u*3+1]=t[u][1]+e[u][1]*h,r[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}s.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function Sc(i){let t=i.list.length,e=(l,h,u)=>{let d=new Float32Array(t*3),m=new be;m.setAttribute("position",new De(d,3));let g=new gr({map:Gf(),color:h,size:l,transparent:!0,depthWrite:!1,blending:fn,opacity:u,fog:!1}),_=new _r(m,g);return _.frustumCulled=!1,{p:_,pos:d,g:m}},n=i.gain??1,r=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),s=e(2.2*r,new zt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*r,new zt(1,1,1).lerp(new zt(i.col[0],i.col[1],i.col[2]),.3),1),a=new Yt;a.add(s.p,o.p);let c=l=>{let h=zf(l);i.list.forEach((u,d)=>{for(let m of[s.pos,o.pos])m[d*3]=u.p[0],m[d*3+1]=u.p[1],m[d*3+2]=u.p[2]+u.amp*h}),s.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function Wf(i,t){let{r:e,idx:n,th:r}=t,s=n/2,o=Jt(r.back_lit[0],r.back_lit[1],s),a=Jt(r.back_dark[0],r.back_dark[1],s),c=r.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],d=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(r.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(r.back_w??1),_=e.uniform(0,6.28),f=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(b=>wr(b,r.exposure??1)),x=Math.exp(-((Xo(h,t.sunAz)/.5)**2))*(r.back_rim_k??0),M=[];for(let b=0;b<7;b++){let D=b/6,P=-2+(m+2)*D,A=g*(1-.55*D)*(1+.5*Math.exp(-Math.max(P,0)/3)),C=Math.sin(D*4+_)*1.2+f*P,U=[u[0]+d[0]*C,u[1]+d[1]*C,P],y=1-.75*D*D,v=ge(o,y),W=ge(a,y);c>0&&(v=Jt(v,p,c*.6*(1-.5*D)),W=Jt(W,p,c*.6*(1-.5*D))),x>.01&&(v=Jt(v,r.back_rim,.6*x*(1-D)),W=Jt(W,r.back_rim,.6*x*(1-D))),M.push([i.v([U[0]-d[0]*A/2,U[1]-d[1]*A/2,P],v),i.v([U[0]+d[0]*A/2,U[1]+d[1]*A/2,P],W)])}for(let b=0;b<6;b++)i.f(M[b][0],M[b][1],M[b+1][1],M[b+1][0])}}function Tc(){let i=new Qt,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,r=a=>Bf(e,a),s=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],r(a)))),o=i.v([.07*1.12*1.12,0,1.12],r(1.12));for(let a=0;a<s.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(s[a][c],s[a][l],s[a+1][l],s[a+1][c])}for(let a=0;a<n;a++)i.f(s[s.length-1][a],s[s.length-1][(a+1)%n],o);return i.geo()}function Pi(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let r of n)r.dispose()})}function Ii(i){let t=(n,r=1,s=.5)=>{let o=(n[0]+n[1]+n[2])/3;return ge(Jt([o,o,o],n,s),r)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let r=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(r)&&(e[n]=Array.isArray(r[0])?r.map(s=>t(s)):t(r))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var _u={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},Js=78,yu=[90,270];function Xf(i,t){let e=i==="night"?_u.NIGHT:i==="day"?{...Ii(_u.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:_u.SUNSET,n=e.emit,r=n*.75,s=Tn(13),o=Tn(41),a=new Yt,c=[Pn(e.body_az,e.body_el)],l=yu.map(N=>[Js*Math.cos(ue(N)),Js*Math.sin(ue(N))]),h=ue(e.body_az),u=[Math.cos(h),Math.sin(h)],d=(()=>{let N=new T(.8,.6,0).normalize();return[N.x,N.y,0]})(),m=(N,S,R)=>{let H=(N%360+360)%360;return H>255&&H<285&&S>R},g=e.stone,_=(N,S)=>{let R=Math.hypot(N,S),H=Vt((R-12)/10)*.35*(Math.sin(N*.09)+Math.cos(S*.11)+.5*Math.sin((N+S)*.19));H+=Vt((R-60)/60)*3*Math.sin(N*.05+1)*Math.cos(S*.04);for(let[q,B]of l)H*=Ae(22,40,Math.hypot(N-q,S-B));return H},f=(N,S)=>{let R=0;for(let H of yu){let q=ue(H),B=Math.cos(q),F=Math.sin(q),G=N*B+S*F,tt=Math.abs(-N*F+S*B);G>9&&(R=Math.max(R,Math.exp(-((tt/4)**2))*Ae(9,16,G)*(1-Ae(Js-10,Js-2,G))))}return R},p=(N,S)=>{let R=Vt((Math.hypot(N,S)-10)/70)**.8,H=cn(N*.06+3,S*.06-7,3);return Jt(ge(Jt(e.g_near,e.g_far,R),.75+.5*H),e.g_road,f(N,S)*.8)};a.add(new St(Zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),_e({flat:!1}))),a.add(Sr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let x=new Qt,M=(N,S,R,H,q,B)=>{let F=o.uniform(0,50),G=(X,Q)=>Ai(q,Q,X[0],X[1],F,e.moss),tt=(X,Q)=>Array.from({length:H},(nt,lt)=>{let I=2*Math.PI*lt/H,E=[B[0]+N*Math.cos(I),B[1]+N*Math.sin(I),X];return x.v(E,G(E,Q))}),z=tt(S,0),w=tt(S+R,1),rt=tt(S,0),K=tt(S+R,1);for(let X=0;X<H;X++){let Q=(X+1)%H;x.f(rt[X],rt[Q],K[Q],K[X])}x.f(...w),x.f(...[...z].reverse())},b=[],D=Tc(),P=Ti({gain:1.05}),A=[];for(let N of[45,135,225,315]){let S=ue(N),R=9.35*Math.cos(S),H=9.35*Math.sin(S);M(.4,.3,1.1,12,g[3],[R,H]),M(.55,1.4,.3,12,g[0],[R,H]);let q=new St(D,P);q.position.set(R,H,1.75),a.add(q),b.push({m:q,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),A.push({pos:[R,H,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let C=new Qt,U=new Qt(!1,2),y=(N,S,R,H,q)=>{let B=Math.cos(H),F=Math.sin(H),G=(tt,z,w)=>{let rt=tt*R[0],K=z*R[1],X=[S[0]+rt*B-K*F,S[1]+rt*F+K*B,S[2]+w*R[2]];return N.v(X,q(X))};for(let tt of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])N.f(...tt.map(([z,w,rt])=>G(z,w,rt)))},v=t?6:10;for(let N=0;N<v;N++){let S=2*Math.PI*(N+o.uniform(-.2,.2))/v,R=o.uniform(14,20),H=R*Math.cos(S),q=R*Math.sin(S),B=_(H,q),F=o.uniform(6,9),G=()=>e.cs_stone;y(C,[H,q,B+(F-.2)/2],[.2,.2,F+.2],Math.PI/4,G);let tt=o.uniform(0,3.14),z=[-Math.sin(tt),Math.cos(tt)],w=[Math.cos(tt),Math.sin(tt)];y(C,[H,q,B+F-.2],[.08,1.3,.08],tt,G);let rt=[H,q,B+F-.3],K=(nt,lt)=>{let I=.35*Math.sin(1.4*nt+lt)*nt/5;return[w[0]*I+d[0]*(.15*nt)/5,w[1]*I+d[1]*(.15*nt)/5,0]},X=Array.from({length:6},(nt,lt)=>Array.from({length:3},(I,E)=>U.v([rt[0]+z[0]*(E-1)*.6,rt[1]+z[1]*(E-1)*.6,rt[2]-lt*.6],ge(e.banner,1-.35*lt/5),[K(lt,0),K(lt,Math.PI)]))),Q=U.v([rt[0],rt[1],rt[2]-3.6],ge(e.banner,.6),[K(6,0),K(6,Math.PI)]);for(let nt=0;nt<5;nt++)for(let lt=0;lt<2;lt++)U.f(X[nt][lt],X[nt][lt+1],X[nt+1][lt+1],X[nt+1][lt]);U.f(X[5][0],X[5][1],Q),U.f(X[5][1],X[5][2],Q)}let W=_e({double:!0,morph:!0}),j=new St(U.geo(),W);j.morphTargetInfluences=[0,0],a.add(new St(C.geo(),_e()),j,new St(x.geo(),_e()));let ot=[];yu.forEach((N,S)=>{let R=new Qt,H=new Qt,q=new Qt,B=new Qt,F=new Qt,G=new Qt(!1,2),tt=ue(N),z=[Js*Math.cos(tt),Js*Math.sin(tt),0],w=tt-Math.PI/2,rt=Math.cos(w),K=Math.sin(w),X=k=>[z[0]+k[0]*rt-k[1]*K,z[1]+k[0]*K+k[1]*rt,k[2]],Q=k=>{let et=ke(k[0]*.8+S*10,k[2]*.8),ht=.6+.4*Vt(k[2]/6);return ge(e.cs_stone,ht*(.75+.5*et)*(.8+.4*Vt(k[2]/30)))},nt=(k,et,ht,it)=>{for(let Et of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])k.f(...Et.map(([bt,gt,Lt])=>{let _t=[et[0]+bt*ht[0],et[1]+gt*ht[1],et[2]+Lt*ht[2]];return k.v(X(_t),it(_t))}))},lt=(k,et,ht,it,Et)=>{let bt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([_t,At])=>[k+_t*it,et+At*it,ht]),gt=[k,et,ht+Et],Lt=_t=>ge(e.cs_roof,.8+.4*Vt((_t[2]-22)/22));for(let _t=0;_t<4;_t++){let At=bt[_t],Gt=bt[(_t+1)%4];H.f(H.v(X(At),Lt(At)),H.v(X(Gt),Lt(Gt)),H.v(X(gt),Lt(gt)))}};nt(R,[0,0,6],[40,4,12],Q);for(let k=-18;k<=18;k+=2.6)if(Math.abs(k)>4.6)for(let et of[-1.6,1.6])nt(R,[k,et,12.7],[1.4,.8,1.4],Q);for(let k of[-20,20]){nt(R,[k,0,11],[8,8,22],Q);for(let et of[12,20])nt(R,[k,0,et],[8.6,8.6,.6],Q);lt(k,0,22,4.7,9),nt(R,[k,0,31],[.12,.12,9],Q)}nt(R,[0,0,17],[7,7,34],Q);for(let k of[13,24])nt(R,[0,0,k],[7.6,7.6,.6],Q);lt(0,0,34,4.3,10),nt(R,[0,0,46.5],[.12,.12,5],Q);for(let k of[-2.9,2.9])nt(R,[k,-3.75,3.8],[.9,.6,7.6],Q);nt(R,[0,-3.75,7.7],[6.8,.6,.9],Q),nt(B,[0,-3.6,3.6],[4.6,.3,7.2],k=>k[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let k=0;k<7;k++)nt(B,[-2.1+.7*k,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let k of[2,4.5,6.8])nt(B,[0,-3.85,k],[4.6,.2,.12],()=>[.02,.016,.014]);{let k=Array.from({length:9},(ht,it)=>[2.3*Math.cos(Math.PI*it/8),7.2+2.3*Math.sin(Math.PI*it/8)]);B.f(...k.map(([ht,it])=>B.v(X([ht,-3.75,it]),[.006,.005,.008])));let et=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];B.f(...[...et].reverse().map(ht=>B.v(X(ht),[.04,.025,.02])))}for(let k of[9.5,15,20.5,26,31])nt(q,[0,-3.62,k],[.8,.3,1.7],()=>[1,1,1]);for(let k of[-20,20])for(let et of[5,10,15,20])nt(q,[k,-4.12,et],[.8,.3,1.7],()=>[1,1,1]);for(let k of[-4.3,4.3]){nt(R,[k,-3.8,4.2],[.15,.15,1],Q);let et=new yn(.35,1),ht=et.attributes.position;for(let Et=0;Et<ht.count;Et+=3)F.f(...[0,1,2].map(bt=>F.v(X([k+ht.getX(Et+bt),-3.8+ht.getY(Et+bt),5.1+ht.getZ(Et+bt)*1.5]),[1,1,1])));et.dispose();let it=X([k,-4.6,5.3]);S===0&&A.push({pos:it,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[k,et,ht,it,Et]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let bt=[0,.2,.4,.6,.82],gt=(Pt,Wt)=>{let ee=.5*Et*Math.sin(7*Pt+Wt)*Pt,at=.1*Et*Math.sin(5*Pt+Wt)*Pt;return[-ee*K,ee*rt,at]},Lt=(Pt,Wt,ee)=>G.v(X([Pt,et,Wt]),e.flag_col,[gt(ee,0),gt(ee,Math.PI)]),_t=bt.map(Pt=>Lt(k+it*Pt,ht+Et,Pt)),At=bt.map(Pt=>Lt(k+it*Pt,ht,Pt)),Gt=Lt(k+it,ht+Et,1),Bt=Lt(k+it,ht,1),Ct=Lt(k+.9*it,ht+Et/2,.9);for(let Pt=0;Pt<4;Pt++)G.f(At[Pt],At[Pt+1],_t[Pt+1],_t[Pt]);G.f(_t[4],Gt,Ct),G.f(At[4],Ct,Bt),G.f(_t[4],Ct,At[4])}a.add(new St(R.geo(),_e()),new St(H.geo(),_e()),new St(B.geo(),_e({double:!0}))),a.add(new St(q.geo(),Vn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new St(F.geo(),Vn(e.torch_col,1.5)));let E=new St(G.geo(),_e({double:!0,morph:!0}));E.morphTargetInfluences=[0,0],a.add(E),ot.push(E)});class st{constructor(S){Ze(this,"mode",S);Ze(this,"mb");Ze(this,"war",[]);Ze(this,"pending",[]);Ze(this,"faces",[]);this.mb=new Qt(!1,S==="clash"?2:S==="surge"?1:0)}part(S,R,H,q,B,F,G=-1,tt=!1){let z=H.clone().sub(R);if(z.length()<1e-6)return;let w=z.normalize(),rt=Math.abs(w.z)<.9?new T(0,0,1):new T(1,0,0),K=w.clone().cross(rt).normalize(),X=w.clone().cross(K),Q=[[R,q],[H,B]].map(([nt,lt])=>Array.from({length:F},(I,E)=>{let k=2*Math.PI*E/F,et=nt.clone().addScaledVector(K,Math.cos(k)*lt).addScaledVector(X,Math.sin(k)*lt),ht=new Nt(et.x-S.x,et.y-S.y),it=ht.length()>1e-6?.5+.5*ht.normalize().dot(new Nt(u[0],u[1])):.5;return this.add([et.x,et.y,et.z],Jt(e.sil,e.sil_rim,.45*it*it),G,tt)}));for(let nt=0;nt<F;nt++){let lt=(nt+1)%F;this.faces.push([Q[0][nt],Q[0][lt],Q[1][lt],Q[1][nt]])}this.faces.push([...Q[0]].reverse()),this.faces.push(Q[1])}add(S,R,H,q){return this.pending.push({p:S,c:R,wi:H,arm:q}),this.pending.length-1}warrior(S,R,H,q){let B=this.war.length,F=new ce().makeRotationZ(R-Math.PI/2),G=(rt,K,X)=>S.clone().add(new T(rt,K,X).applyMatrix4(F)),tt=S.clone().add(new T(0,0,1)),z=(rt,K,X,Q,nt,lt=!1)=>this.part(tt,G(...rt),G(...K),X,Q,nt,B,lt);for(let[rt,K,X]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])z([rt*.11,0,.95],X,.1,.075,4),z(X,K,.075,.06,4);z([0,0,.95],[0,.1,1.48],.2,.23,6),z([0,.16,1.58],[0,.16,1.74],.11,.11,6),z([0,.16,1.74],[0,.16,1.92],.12,.02,6),z([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),z([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),H!=="spear"&&z([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),z([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),z([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),H==="sword"?z([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):H==="axe"?(z([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),z([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(z([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),z([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let w=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(rt=>{let K=G(...rt);return this.add([K.x,K.y,K.z],e.sil,B,!1)});this.faces.push(w),this.war.push({team:q,f:new T(0,1,0).applyMatrix4(F),axis:new T(1,0,0).applyMatrix4(F),pivot:G(.27,.1,1.42)})}finish(){let S=this.pending.map(R=>{let H=[],q=new T(...R.p);if(this.mode==="clash")for(let B of[0,1]){if(R.wi<0){H.push([0,0,0]);continue}let F=this.war[R.wi],G=F.team===B,tt=F.f.clone().multiplyScalar(G?.32:-.22),z=q.clone().add(tt);R.arm&&(z=F.pivot.clone().add(tt).add(q.clone().sub(F.pivot).applyAxisAngle(F.axis,ue(G?-60:25)))),H.push([z.x-q.x,z.y-q.y,z.z-q.z])}if(this.mode==="surge"){let B=this.war[R.wi];H.push([B.f.x*.5,B.f.y*.5,R.arm?.3:0])}return this.mb.v(R.p,R.c,H)});for(let R of this.faces)this.mb.f(...R.map(H=>S[H]));return this.mb.geo()}}let Y=_e({morph:!0,double:!0}),pt=[],L=t?5:8;for(let N=0;N<L;N++){let S=2*Math.PI*(N+o.uniform(-.3,.3))/L,R=o.uniform(17,36);m(S*180/Math.PI,R,15)&&(S+=.6);let H=R*Math.cos(S),q=R*Math.sin(S);for(let B=0;B<3;B++){let F=new st("clash"),G=o.uniform(0,6.283),tt=new T(H+o.uniform(-4.5,4.5),q+o.uniform(-4.5,4.5),0),z=new T(Math.cos(G),Math.sin(G),0),w=o.uniform(.9,1.1);for(let[K,X]of[[0,-1],[1,1]]){let Q=tt.clone().addScaledVector(z,w*X);Q.z=_(Q.x,Q.y),F.warrior(Q,K===0?G:G+Math.PI,o.choice(["sword","sword","axe","spear"]),K)}let rt=new St(F.finish(),Y);rt.morphTargetInfluences=[0,0],a.add(rt),pt.push({m:rt,w:2*Math.PI/s.uniform(40,95),w2:2*Math.PI/s.uniform(110,260),w3:2*Math.PI/s.uniform(150,400),p:s.uniform(0,6.28),p2:s.uniform(0,6.28),p3:s.uniform(0,6.28),bias:s.uniform(-.35,.35)})}}{let N=new st(null);for(let S=0;S<16;S++){let R=o.uniform(0,6.283),H=o.uniform(13,45);if(m(R*180/Math.PI,H,14))continue;let q=new T(H*Math.cos(R),H*Math.sin(R),0);q.z=_(q.x,q.y);let B=new ce().makeRotationZ(o.uniform(0,6.283)),F=(tt,z,w)=>q.clone().add(new T(tt,z,w).applyMatrix4(B)),G=q.clone().add(new T(0,0,.2));N.part(G,F(0,-.4,.18),F(0,.45,.2),.2,.22,6),N.part(G,F(0,.55,.18),F(0,.7,.2),.11,.11,6),N.part(G,F(-.1,-.4,.12),F(-.2,-1.2,.1),.09,.07,4),N.part(G,F(.1,-.4,.12),F(.25,-1.1,.12),.09,.07,4),N.part(G,F(-.25,.35,.18),F(-.6,.1,.12),.06,.05,4),N.part(G,F(.25,.35,.18),F(.55,.7,.1),.06,.05,4),N.part(G,F(.7,.2,0),F(.9,.2,1.8),.03,.025,4),N.part(G,F(-.9,0,.05),F(-.9,0,.12),.4,.4,8)}a.add(new St(N.finish(),_e({double:!0})))}let J=[];{let N=[];for(let H=0;H<6;H++){let q=o.uniform(0,6.283),B=o.uniform(45,90);m(q*180/Math.PI,B,40)&&(q+=.8),N.push(new T(B*Math.cos(q),B*Math.sin(q),0))}let S=t?70:120,R=N.map(()=>new st("surge"));for(let H=0;H<S;H++){let q=R[H%N.length],B=N[H%N.length],F=B.clone().add(new T(o.uniform(-9,9),o.uniform(-9,9),0));F.z=_(F.x,F.y);let G=Math.atan2(B.y-F.y,B.x-F.x)+o.uniform(-.5,.5),tt=q.war.length,z=new ce().makeRotationZ(G-Math.PI/2),w=(K,X,Q)=>F.clone().add(new T(K,X,Q).applyMatrix4(z)),rt=F.clone().add(new T(0,0,.9));q.part(rt,w(0,0,0),w(0,0,1.45),.28,.22,4,tt),q.part(rt,w(0,.05,1.45),w(0,.05,1.65),.12,.12,4,tt),q.part(rt,w(.3,-.3,.9),w(.3,2,2.4),.03,.025,4,tt,!0),q.war.push({team:0,f:new T(0,1,0).applyMatrix4(z),axis:new T(1,0,0).applyMatrix4(z),pivot:w(0,0,1.4)})}for(let H of R){let q=new St(H.finish(),Y);q.morphTargetInfluences=[0,0],a.add(q),J.push({m:q,w:2*Math.PI/s.uniform(90,170),p:s.uniform(0,6.28),w2:2*Math.PI/s.uniform(300,600),p2:s.uniform(0,6.28)})}}let V=new St($s({r:s,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(N,S)=>m(N,S,16),base:N=>ge(e.grass_base,1-.6*Vt((N-12)/55)),tip:N=>ge(e.grass_tip,1-.6*Vt((N-12)/55))}),_e({emit:.1,double:!0,morph:!0}));V.morphTargetInfluences=[0],a.add(V);let Z=Ci({r:o,n:t?24:40,at:()=>{let N=o.uniform(0,6.283),S=30*Math.sqrt(o.random());return[S*Math.cos(N),S*Math.sin(N),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(Z.obj);let ct=Ri({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(ct.group),{group:a,floor:.6,update(N){ct.update(N);for(let F of pt){let G=Math.sin(N*F.w+F.p+1.4*Math.sin(N*F.w2+F.p2))+F.bias,tt=.55+.45*Math.sin(N*F.w3+F.p3),z=Vt(G)*tt,w=Vt(-G)*tt;F.m.morphTargetInfluences[0]=z*z*(3-2*z),F.m.morphTargetInfluences[1]=w*w*(3-2*w)}for(let F of J)F.m.morphTargetInfluences[0]=Vt(.5+.6*Math.sin(N*F.w+F.p)*(.6+.4*Math.sin(N*F.w2+F.p2)));let S=In(N,90);j.morphTargetInfluences[0]=S,j.morphTargetInfluences[1]=1-S;for(let F of ot)F.morphTargetInfluences[0]=S,F.morphTargetInfluences[1]=1-S;V.morphTargetInfluences[0]=In(N,45);let R=N%3600,H=Math.floor(R/8),q=(R-H*8)/8,B=q*q*(3-2*q);for(let F of b){let G=F.keys[H%450],tt=F.keys[(H+1)%450];F.m.scale.set(G[0]+(tt[0]-G[0])*B,G[1]+(tt[1]-G[1])*B,G[2]+(tt[2]-G[2])*B)}Z.update(N)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...A],dispose(){ct.dispose(),Pi(a)}}}var xu={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function qf(i,t){let e=i==="night"?xu.NIGHT:i==="day"?{...Ii(xu.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:xu.SUNSET,n=e.emit,r=n*.75,s=Tn(11),o=Tn(99),a=new Yt,c=ue(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let L=new T(.8,.6,0).normalize();return[L.x,L.y,0]})(),u=(L,J)=>Vt((Math.hypot(L,J)-12)/10)*.25*(Math.sin(L*.22)+Math.cos(J*.27)+.5*Math.sin((L+J)*.5)),d=(L,J)=>{let V=Vt((Math.hypot(L,J)-6)/34)**.7,Z=.9+.2*(Math.sin(L*.5)*Math.cos(J*.5)*.5+.5),ct=cn(L*.09+3,J*.09-7,3),N=ke(L*1.7,J*1.7),S=Jt(e.g_near,e.g_far,V);return S=Jt(S,e.g_alt,Vt((ct-.45)*2.2)*.6*(1-.5*V)),ge(S,Z*(1+.25*(N-.5)*(1-V)))},m=ji(e,[Pn(e.body_az,e.body_el)]);a.add(new St(Zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,d),_e({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,L])=>[L[0],L[1]]),f=L=>{let J=_.reduce((Z,[ct,N])=>Z+Math.exp(-((Math.hypot(L[0]-ct,L[1]-N)/5.5)**2)),0),V=(.55+.45*Math.min(1,J))*(1-.4*Vt((Math.hypot(L[0],L[1])-5)/5))*.2*.5*e.beam_gain;return ge(e.beam_col,V)};a.add(Sr({th:e,r:s,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:r,patchy:!1,bake:f}));{let L=new Qt;for(let J=0;J<10;J++){let V=s.uniform(0,6.283),Z=s.uniform(11.5,17),ct=s.uniform(.8,2),N=s.choice(e.stone),S=o.uniform(0,50),R=new yn(1,1),H=R.attributes.position;for(let w=0;w<H.count;w++){let rt=s.uniform(.8,1.2);H.setXYZ(w,H.getX(w)*rt,H.getY(w)*rt,H.getZ(w)*rt)}let q=Z*Math.cos(V),B=Z*Math.sin(V),F=s.uniform(0,6.28),G=new ce().compose(new T(q,B,u(q,B)+.3*ct),new En().setFromAxisAngle(new T(0,0,1),F),new T(ct,ct*.9,ct*.7)),tt=R.index?R.toNonIndexed():R,z=tt.attributes.position;for(let w=0;w<z.count;w+=3){let rt=[];for(let K=0;K<3;K++){let X=z.getX(w+K),Q=z.getY(w+K),nt=z.getZ(w+K),lt=new T(X,Q,nt).applyMatrix4(G),I=.6+.4*Vt((nt+1)/2)**.7,E=ke(X*2+S,Q*2+nt);rt.push(L.v([lt.x,lt.y,lt.z],Jt(ge(N,I*(.88+.24*E)),e.moss,Vt(1-(nt+1)/2*3)*.55)))}L.f(...rt)}tt.dispose()}a.add(new St(L.geo(),_e()))}let p=[],x=(L,J,V)=>{for(let Z=0;Z<300;Z++){let ct=s.uniform(0,360);if(V&&ct>245&&ct<295)continue;let N=s.uniform(L,J),S=N*Math.cos(ue(ct)),R=N*Math.sin(ue(ct));if(p.every(([H,q])=>Math.hypot(S-H,R-q)>5.5))return p.push([S,R]),[S,R]}return null},M=_e({morph:!0}),b=Ti({gain:2.2}),D=[],P=t?12:18,A=t?6:10;for(let L=0;L<P+A;L++){let J=L<P,V=J?x(15,26,!0):x(32,46,!1);if(!V)continue;let Z=J?s.uniform(46,62):s.uniform(58,76),ct=J?s.uniform(1.2,2.1):s.uniform(2.3,3.3),N=J&&s.random()<.25,S=C(V[0],V[1],Z,ct,N),R=new St(S.bark.geo(),M);R.morphTargetInfluences=[0,0],a.add(R);let H=null;N&&(H=new St(S.eyes.geo(),b),H.morphTargetInfluences=[0,0],a.add(H));let q=[];if(N){let B=Array.from({length:Math.floor(174)},(F,G)=>60+G*20);for(let F=0;F<5;F++)q.push(B.splice(s.int(0,B.length-1),1)[0]);q.sort((F,G)=>F-G)}D.push({mesh:R,eyes:H,P:s.choice([100,120,150,180,200]),flip:s.int(0,1),blinks:q})}function C(L,J,V,Z,ct){let N=new Qt(!1,2),S=new Qt(!1,2),R=new T(-L,-J,0).normalize(),H=s.uniform(1.2,2.4),q=new T(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.03,.1)),B=s.uniform(0,6.28),F=s.uniform(.4,1),G=s.choice([3,4,5]),tt=s.uniform(0,6.28),z=k=>new T(L+q.x*k+F*Math.sin(.28*k+B),J+q.y*k+F*Math.cos(.23*k+B),k),w=(k,et)=>{let ht=Math.max(k,0),it=Z*(1-.62*Vt(ht/V))*(1+1.1*Math.exp(-ht/1.6)),Et=et+.06*ht;return it*(1+.28*Math.cos(G*Et+tt)*Math.exp(-ht/3.5)+.07*Math.cos(2*Et+B))},rt=k=>{let et=H*Vt(Math.max(k,0)/V)**2;return[h[0]*et,h[1]*et,0]},K=(k,et,ht)=>{let it=new T(k.x,k.y,0);it.lengthSq()>1e-12&&it.normalize();let Et=Math.max(0,it.x*R.x+it.y*R.y),bt=.6+.4*Math.sin(ht),gt=Jt(e.bark_dark,e.bark_lit,Vt(.85*Et*bt*(1-.3*Vt(et/V)))),Lt=Math.max(0,it.x*l[0]+it.y*l[1]);gt=Jt(gt,e.bark_sun,Vt(e.bark_sun_k*Lt*(.5+.5*bt)*(1-.5*Vt(et/V)))),gt=ge(gt,.72+.28*Vt(et/1.6));let _t=Vt(1-et/2.2)*.55*ke(k.x*3+L,k.y*3+et*.8);return Jt(gt,e.moss,_t)},X=(k,et)=>N.v([k.x,k.y,k.z],et,[rt(k.z),[0,0,0]]),Q=t?10:14,nt=t?8:12,lt=[];for(let k=0;k<Q;k++){let et=-.5+(V+.5)*(k/(Q-1))**1.15,ht=z(et),it=[];for(let Et=0;Et<nt;Et++){let bt=2*Math.PI*Et/nt,gt=new T(Math.cos(bt),Math.sin(bt),0);it.push(X(ht.clone().addScaledVector(gt,w(et,bt)),K(gt,et,bt*7+et*.4)))}lt.push(it)}for(let k=0;k<Q-1;k++)for(let et=0;et<nt;et++){let ht=(et+1)%nt;N.f(lt[k][et],lt[k][ht],lt[k+1][ht],lt[k+1][et])}let I=X(z(V).add(new T(0,0,.3)),e.bark_dark);for(let k=0;k<nt;k++)N.f(I,lt[Q-1][k],lt[Q-1][(k+1)%nt]);let E=s.int(2,4);for(let k=0;k<E;k++){let et=V*s.uniform(.35,.85),ht=s.uniform(0,6.28),it=new T(Math.cos(ht),Math.sin(ht),0),Et=z(et).addScaledVector(it,w(et,ht)*.7),bt=it.clone().add(new T(0,0,s.uniform(.4,1))).normalize(),gt=s.uniform(3.5,7.5),Lt=new T(-it.y,it.x,0),_t=[0,1,2,3,4].map(Bt=>Et.clone().addScaledVector(bt,gt*(Bt/4)).add(new T(0,0,.35*gt*(Bt/4)**2)).addScaledVector(Lt,Math.sin(Bt/4*3+k)*.5)),At=w(et,ht)*.32,Gt=_t.map((Bt,Ct)=>{let Pt=_t[Math.min(Ct+1,4)].clone().sub(_t[Math.max(Ct-1,0)]).normalize(),Wt=Pt.clone().cross(new T(0,0,1));Wt.length()<.001&&(Wt=new T(1,0,0)),Wt.normalize();let ee=Pt.clone().cross(Wt);return Array.from({length:6},(at,Ut)=>{let vt=2*Math.PI*Ut/6,Tt=Wt.clone().multiplyScalar(Math.cos(vt)).addScaledVector(ee,Math.sin(vt));return X(Bt.clone().addScaledVector(Tt,At*(1-.85*Ct/4)),K(Tt,Bt.z,vt*5+Ct))})});for(let Bt=0;Bt<4;Bt++)for(let Ct=0;Ct<6;Ct++){let Pt=(Ct+1)%6;N.f(Gt[Bt][Ct],Gt[Bt][Pt],Gt[Bt+1][Pt],Gt[Bt+1][Ct])}}if(ct){let k=s.uniform(2.2,9),et=Math.atan2(R.y,R.x)+s.uniform(-.6,.6),ht=new T(Math.cos(et),Math.sin(et),0),it=new T(-ht.y,ht.x,0),Et=z(k).addScaledVector(ht,w(k,et)),bt=s.uniform(.18,.32),gt=bt*1.25,Lt=(Gt,Bt,Ct)=>Et.clone().addScaledVector(ht,Ct).addScaledVector(it,Gt).add(new T(0,0,Bt)),_t=Array.from({length:10},(Gt,Bt)=>X(Lt(Math.cos(2*Math.PI*Bt/10)*(gt+bt*1.7),Math.sin(2*Math.PI*Bt/10)*bt*1.7,.07),[.004,.003,.02]));N.f(..._t);let At=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Gt of[1,-1]){let Bt=At.map(([Pt,Wt])=>[Gt*(gt+Pt*bt),Wt*bt]);Gt===-1&&(Bt=Bt.reverse());let Ct=Bt.map(([Pt,Wt])=>{let ee=Lt(Pt,Wt,.11);return S.v([ee.x,ee.y,ee.z],[1,.04,.04],[rt(ee.z),[0,0,k-ee.z]])});S.f(...Ct)}}return{bark:N,eyes:S}}let U=e.grass_tip,y=_e({emit:e.grass_emit,double:!0,morph:!0}),v=t?260:500,W=[0,1].map(()=>{let L=new Map,J=$s({r:s,tufts:v,rmin:10.6,rspan:34,gh:u,base:Z=>ge(e.grass_base,1-.6*Vt((Z-11)/34)),tip:(Z,ct)=>{let N=Math.round(Z*1e3),S=L.get(N);S||(S=Jt(U[0],U[1],s.random()),L.set(N,S));let R=.3*Math.abs(Math.cos(ct-c))*(i==="night"?.5:1);return ge(Jt(S,e.grass_rim,R),1-.6*Vt((Z-11)/34))}}),V=new St(J,y);return V.morphTargetInfluences=[0],a.add(V),V});{let L=new Qt;for(let J=0;J<(t?40:70);J++){let V=14+22*o.random(),Z=o.uniform(0,2*Math.PI),ct=V*Math.cos(Z),N=V*Math.sin(Z),S=u(ct,N),R=[ct+o.uniform(-.06,.06),N+o.uniform(-.06,.06),S+o.uniform(.35,.7)];L.f(L.v([ct-.012,N,S],[.02,.07,.05]),L.v([ct+.012,N,S],[.02,.07,.05]),L.v([R[0]+.012,R[1],R[2]],[.08,.25,.12]),L.v([R[0]-.012,R[1],R[2]],[.08,.25,.12]));let H=o.choice(e.flower),q=L.v([R[0],R[1],R[2]+.02],[1,.9,.5]),B=Array.from({length:6},(F,G)=>{let tt=2*Math.PI*G/6;return L.v([R[0]+.05*Math.cos(tt),R[1]+.05*Math.sin(tt),R[2]+.025],H)});for(let F=0;F<6;F++)L.f(q,B[F],B[(F+1)%6])}a.add(new St(L.geo(),_e({emit:e.flower_emit,double:!0})))}{let L=new Qt;for(let J=0;J<14;J++){let V=ue(s.choice([s.uniform(195,245),s.uniform(295,345),s.uniform(0,360)])),Z=s.uniform(16,34),ct=s.uniform(1,1.8),N=Z*Math.cos(V),S=Z*Math.sin(V),R=u(N,S);for(let H=0;H<4;H++){let q=[s.uniform(-1.4,1.4),s.uniform(-1,1),s.uniform(.2,1)],B=s.uniform(.9,1.6),F=new yn(B,1),G=F.attributes.position;for(let tt=0;tt<G.count;tt+=3){let z=[];for(let w=0;w<3;w++){let rt=G.getZ(tt+w)+q[2];z.push(L.v([N+(G.getX(tt+w)+q[0])*ct,S+(G.getY(tt+w)+q[1])*ct,R+rt*ct*.75],Jt(e.bush_lo,e.bush_hi,Vt((rt+.3)/2.6)*.8)))}L.f(...z)}F.dispose()}}a.add(new St(L.geo(),_e()))}{let L=new Qt;[[52,70,110,150],[59,80,120,160],[66,90,130,170]].forEach(([V,Z,ct,N],S)=>Wf(L,{r:s,idx:S,radius:V,count:t?Math.round(Z*.6):Z,hmin:ct,hmax:N,th:e,sky:m,sunAz:c}));let J=Ti({fog:!1,gain:i==="night"?.45:.6});J.toneMapped=!1,a.add(new St(L.geo(),J))}let j=new Qt(!0);g.forEach(([L,J])=>{for(let[V,Z]of[[1,.45],[.7,.6],[.4,.8]])Vf(j,L,J,V,Z,e.beam_col,.35*e.beam_gain,2.6)});let ot=new Qt(!0);Ks(ot,9.4,.7,(L,J)=>{let V=_.reduce((Z,[ct,N])=>Z+Math.exp(-((Math.hypot(L-ct,J-N)/5.5)**2)),0);return(.55+.45*Math.min(1,V))*Ae(0,3,9.4-Math.hypot(L,J))},e.beam_col,.3*.5*e.beam_gain);let st=new St(j.geo(),Qr());a.add(st,new St(ot.geo(),Qr()));let Y=Ci({r:s,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let L=s.uniform(0,6.283),J=s.uniform(0,22);return[J*Math.cos(L),J*Math.sin(L),s.uniform(.8,7)]},move:()=>{let L=s.uniform(-1.5,1.5);return[L,L*.5,s.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(Y.obj);let pt=Ri({th:e,W:t?512:1024,bodies:[Pn(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(pt.group),{group:a,floor:.62,update(L){pt.update(L);for(let V of D){let Z=In(L,V.P/2,.15,1,V.flip),ct=0;for(let N of V.blinks)Math.abs(L%3600-N)<3&&(ct=1-Math.abs(L%3600-N)/3);V.mesh.morphTargetInfluences[0]=Z,V.mesh.morphTargetInfluences[1]=ct,V.eyes&&(V.eyes.morphTargetInfluences[0]=Z,V.eyes.morphTargetInfluences[1]=ct)}W.forEach((V,Z)=>{V.morphTargetInfluences[0]=In(L,45,0,1,Z)});let J=In(L,450);st.rotation.set(.03*J*.1,.02*J*.1,0),Y.update(L)},key:{dir:Pn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){pt.dispose(),Pi(a)}}}var Mu={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},ts=2.3;function Yf(i,t){let e=i==="night"?Mu.NIGHT:i==="day"?{...Ii(Mu.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:Mu.SUNSET,n=e.emit,r=Tn(7),s=new Yt,o=[Pn(e.body_az,e.body_el),Pn(e.body_az+180,e.body_el)],a=ji(e,o),c=(L,J)=>Vt((Math.hypot(L,J)-13)/10)*.25*(Math.sin(L*.22)+Math.cos(J*.27)+.5*Math.sin((L+J)*.5)),l=(L,J)=>{let V=Vt((Math.hypot(L,J)-10)/50),Z=.9+.2*(Math.sin(L*.5)*Math.cos(J*.5)*.5+.5),ct=Jt(e.g_near,e.g_far,V);return ct=Jt(ct,e.g_alt,Vt((cn(L*.09+3,J*.09-7,3)-.45)*2.2)*.6),ge(ct,Z*(.9+.25*ke(L*1.7,J*1.7)))},h=(L,J,V)=>Jt(ge(L,(.6+.4*Vt(J)**.7)*(.88+.24*V)),e.moss,Vt(1-J*3)*.55);s.add(new St(Zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),_e({flat:!1})));{let L=t?96:144,J=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],V=J.map(R=>Array.from({length:L},(H,q)=>{let B=2*Math.PI*q/L,F=R*Math.cos(B),G=R*Math.sin(B),tt=1;for(let rt of[ue(e.body_az),ue(e.body_az+180)]){let K=Math.abs(((B-rt+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);tt*=1-.8*Math.exp(-((K/ue(17))**2))}let w=(4+42*Ae(50,102,R))*(1-.65*Ae(112,134,R))*(.12+1.15*kf(F*.032,G*.032,5))*(.55+.9*cn(F*.01+5,G*.01-3,3))*tt+1.2*cn(F*.09,G*.09,3)*Ae(46,60,R);return w*=Ae(45.5,52,R),[F,G,c(F,G)+.03+w]})),Z=new Qt,ct=[],N=o;J.forEach((R,H)=>{ct.push([]);for(let q=0;q<L;q++){let B=V[H][q],F=2*Math.PI*q/L,G=V[H][(q+1)%L],tt=V[H][(q-1+L)%L],z=V[Math.min(H+1,J.length-1)][q],w=V[Math.max(H-1,0)][q],rt=new T(z[0]-w[0],z[1]-w[1],z[2]-w[2]).cross(new T(G[0]-tt[0],G[1]-tt[1],G[2]-tt[2])).normalize();rt.z<0&&rt.multiplyScalar(-1);let K=B[2]/45,X=1-rt.z,Q=cn(B[0]*.12,B[1]*.12,3),nt=ge(Jt(e.rock_lo,e.rock_hi,Vt(Vt(K)**.7+.25*(Q-.5))),.8+.4*Q);nt=Jt(nt,e.veg,Vt((9-B[2])/9)*Vt(1-X*2.4)*.85),nt=Jt(nt,e.snow,Ae(.55,.78,K+.22*(cn(B[0]*.07,B[1]*.07,3)-.5))*Vt(1-X*1.7));let lt=0;for(let k of N)lt=Math.max(lt,Vt(rt.x*k[0]+rt.y*k[1]+rt.z*k[2]));lt=lt**1.2,nt=[nt[0]*(e.amb[0]+e.light_col[0]*lt*1.6),nt[1]*(e.amb[1]+e.light_col[1]*lt*1.6),nt[2]*(e.amb[2]+e.light_col[2]*lt*1.6)];let I=a(Math.cos(F)*Math.cos(.02),Math.sin(F)*Math.cos(.02),Math.sin(.02)).map(k=>wr(k,e.exposure)*e.haze_gain),E=Math.min(.97,Math.max(0,1-Math.exp(-(R-40)/e.haze_dist)+.5*Math.exp(-Math.max(B[2],0)/9)*Ae(55,100,R)));nt=Jt(nt,I,E),nt=Jt(l(B[0],B[1]),nt,Ae(46,58,R)).map(Vt),ct[H].push(Z.v(B,nt))}});for(let R=0;R<J.length-1;R++)for(let H=0;H<L;H++){let q=(H+1)%L;Z.f(ct[R][H],ct[R][q],ct[R+1][q],ct[R+1][H])}let S=Ti({fog:!1,gain:.95});s.add(new St(Z.geo(),S))}let u=new Qt,d=new Qt,m=new Qt,g=new Qt,_=new Qt,f=new Qt,p=(L,J,V,Z,ct,N=!0)=>{let S=J.map(([R,H])=>Array.from({length:V},(q,B)=>{let F=[Z[0]+H*Math.cos(2*Math.PI*B/V),Z[1]+H*Math.sin(2*Math.PI*B/V),Z[2]+R];return L.v(F,ct(F))}));for(let R=0;R<S.length-1;R++)for(let H=0;H<V;H++){let q=(H+1)%V;L.f(S[R][H],S[R][q],S[R+1][q],S[R+1][H])}if(N){let R=S[S.length-1].map(H=>L.v(L.pos.slice(H*3,H*3+3),L.col.slice(H*3,H*3+3)));L.f(...R)}},x=(L,J,V,Z,ct,N,S=1,R=[1,1,1])=>{let H=Array.from({length:Z},(q,B)=>{let F=2*Math.PI*B/Z;return Array.from({length:ct},(G,tt)=>{let z=2*Math.PI*tt/ct,w=J+V*Math.cos(z);return L.v([w*Math.cos(F),w*Math.sin(F),N+V*S*Math.sin(z)],R)})});for(let q=0;q<Z;q++)for(let B=0;B<ct;B++){let F=(q+1)%Z,G=(B+1)%ct;L.f(H[q][B],H[F][B],H[F][G],H[q][G])}},M=(L,J,V,Z,ct,N=0)=>{let S=Math.cos(Z),R=Math.sin(Z),H=new Map,q=(F,G,tt)=>{let z=`${F},${G},${tt}`,w=H.get(z);w||(w=N?[r.uniform(-.03,.03),r.uniform(-.03,.03),r.uniform(-.02,.02)]:[0,0,0],H.set(z,w));let rt=F*V[0]+w[0],K=G*V[1]+w[1],X=tt*V[2]+w[2];return L.v([J[0]+rt*S-K*R,J[1]+rt*R+K*S,J[2]+X],ct([rt,K,X],tt+.5))},B=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let F of B)L.f(...F.map(([G,tt,z])=>q(G,tt,z)))},b=(L,J,V,Z)=>{let ct=r.uniform(0,50);M(u,L,J,V,(N,S)=>h(Z,S,ke(N[0]*2.5+ct,N[1]*2.5+N[2]*1.7)),1)},D=(L,J,V,Z)=>{let ct=r.uniform(0,50);p(u,[[0,L],[V,L]],48,[0,0,J],N=>h(Z,(N[2]-J)/V,ke(N[0]*1.2+ct,N[1]*1.2)))};D(8.2,0,1.4,e.stone[0]),D(7.2,1.4,.5,e.stone[3]),D(6.6,1.9,ts-1.9,e.stone[0]),x(d,6.6,.18,48,6,ts,1,e.stone[3]);let P=28;for(let L=0;L<P;L++){let J=2*Math.PI*L/P,V=1.4+r.uniform(-.08,.08);b([8.45*Math.cos(J),8.45*Math.sin(J),V/2],[1,1.95,V],J,r.choice(e.stone))}for(let[L,J]of[[9.8,.9],[11,.55],[12.2,.3]])for(let V=0;V<14;V++){if(r.random()<.2)continue;let Z=2*Math.PI*V/14+r.uniform(-.08,.08);b([L*Math.cos(Z),L*Math.sin(Z),J/2],[1.3,2.6,J],Z+r.uniform(-.1,.1),r.choice(e.stone))}for(let L of[5.8,4.2,2.6,1.2])x(g,L,.08,48,6,ts+.02,.6);for(let L=0;L<16;L++){let J=2*Math.PI*L/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(J),5*Math.sin(J),ts],()=>[1,1,1])}let A=[],C=Tc(),U=Ti({gain:1.05}),y=[];for(let L of[3,10,17,24]){let J=2*Math.PI*L/P,V=8.45*Math.cos(J),Z=8.45*Math.sin(J),ct=1.4;p(d,[[0,.28],[.9,.28]],12,[V,Z,ct],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[V,Z,ct+.9],()=>e.stone[0]);let N=new St(C,U);N.position.set(V,Z,ct+1.25),s.add(N),A.push({m:N,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),y.push({pos:[V,Z,ct+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let v=(L,J,V,Z=1.8,ct=1.2)=>{let N=ue(L),S=J*Math.cos(N),R=J*Math.sin(N),H=c(S,R)-.4,q=N-Math.PI/2,B=r.choice(e.stone),F=r.uniform(0,50),G=new Map,tt=Math.cos(q),z=Math.sin(q),w=(Q,nt,lt)=>{let I=`${Q},${nt},${lt}`,E=G.get(I);E||(E=[r.uniform(-.07,.07),r.uniform(-.07,.07),r.uniform(-.05,.05)],G.set(I,E));let k=Q*Z,et=nt*ct,ht=(lt+.5)*V;if(ht>V*.5){let bt=1-.18*((ht-V*.5)/(V*.5));k*=bt,et*=bt}k+=E[0],et+=E[1];let it=ht+E[2],Et=.5*ke(k*2.2+F,it*.7)+.5*ke(k*6+F,it*.25);return u.v([S+k*tt-et*z,R+k*z+et*tt,H+it],h(B,it/V,Et))},rt=4,K=Q=>-.5+Q/rt,X=Q=>{for(let nt=0;nt<rt;nt++)for(let lt=0;lt<rt;lt++)u.f(w(...Q(nt,lt)),w(...Q(nt+1,lt)),w(...Q(nt+1,lt+1)),w(...Q(nt,lt+1)))};X((Q,nt)=>[K(Q),-.5,K(nt)]),X((Q,nt)=>[K(nt),.5,K(Q)]),X((Q,nt)=>[-.5,K(nt),K(Q)]),X((Q,nt)=>[.5,K(Q),K(nt)]),X((Q,nt)=>[K(nt),K(Q),.5]),X((Q,nt)=>[K(Q),K(nt),-.5]);for(let[Q,nt,lt]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let E=-ct/2-.02,k=V*Q;M(f,[S+0*tt-E*z,R+0*z+E*tt,H+k],[nt,.1,lt],q,()=>[1,1,1])}};for(let[L,J,V]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])v(L,J,V),v(L+180,J,V);for(let L=0;L<12;L++){let J=ue(r.choice([r.uniform(195,245),r.uniform(295,345)])),V=r.uniform(13,18),Z=r.uniform(1,2.2),ct=r.choice(e.stone),N=r.uniform(0,50),S=V*Math.cos(J),R=V*Math.sin(J),H=r.uniform(0,6.28),q=new yn(1,1),B=q.attributes.position,F=new ce().compose(new T(S,R,c(S,R)+.3*Z),new En().setFromAxisAngle(new T(0,0,1),H),new T(Z,Z*.9,Z*.7)),G=new Map;for(let tt=0;tt<B.count;tt+=3)u.f(...[0,1,2].map(z=>{let w=B.getX(tt+z),rt=B.getY(tt+z),K=B.getZ(tt+z),X=`${w.toFixed(3)},${rt.toFixed(3)},${K.toFixed(3)}`,Q=G.get(X);Q===void 0&&(Q=r.uniform(.8,1.2),G.set(X,Q));let nt=new T(w*Q,rt*Q,K*Q).applyMatrix4(F);return u.v([nt.x,nt.y,nt.z],h(ct,(K+1)/2,ke(w*2+N,rt*2+K)))}));q.dispose()}s.add(new St(u.geo(),_e())),s.add(new St(d.geo(),_e({flat:!1})),new St(m.geo(),_e()));let W=new St(g.geo(),Vn([1,.92,.75],.75*Math.min(1.6,n)));W.name="centre-pattern",s.add(W,new St(_.geo(),Vn([1,.92,.75],.75*Math.min(1.6,n)))),s.add(new St(f.geo(),Vn([1,.3,.1],1.1*Math.min(1.4,n))));let j=ue(e.body_az),ot=_e({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),st=[0,1].map(()=>{let L=e.grass_tip[0],J=-1,V=$s({r,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:ct=>{let N=1-.55*Vt((ct-13)/34);return[.03*N,.1*N,.1*N]},tip:(ct,N)=>(ct!==J&&(J=ct,L=Jt(e.grass_tip[0],e.grass_tip[1],r.random())),ge(Jt(L,e.grass_rim,.3*Math.abs(Math.cos(N-j))*(i==="night"?.5:1)),1-.55*Vt((ct-13)/34)))}),Z=new St(V,ot);return Z.morphTargetInfluences=[0],s.add(Z),Z});{let L=new Qt;for(let J=0;J<(t?40:70);J++){let V=14+22*r.random(),Z=r.uniform(0,2*Math.PI),ct=V*Math.cos(Z),N=V*Math.sin(Z),S=c(ct,N),R=r.uniform(.35,.7),H=[ct+r.uniform(-.06,.06),N+r.uniform(-.06,.06),S+R];L.f(L.v([ct-.012,N,S],[.02,.07,.05]),L.v([ct+.012,N,S],[.02,.07,.05]),L.v([H[0]+.012,H[1],H[2]],[.08,.25,.12]),L.v([H[0]-.012,H[1],H[2]],[.08,.25,.12]));let q=r.choice(e.flower),B=L.v([H[0],H[1],H[2]+.02],[1,.9,.5]),F=Array.from({length:6},(G,tt)=>{let z=2*Math.PI*tt/6;return L.v([H[0]+.05*Math.cos(z),H[1]+.05*Math.sin(z),H[2]+.025],q)});for(let G=0;G<6;G++)L.f(B,F[G],F[(G+1)%6])}s.add(new St(L.geo(),_e({emit:e.flower_emit,double:!0})))}let Y=Ci({r,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let L=r.uniform(0,6.283),J=r.uniform(4,26);return[J*Math.cos(L),J*Math.sin(L),r.uniform(1.5,10)]},move:()=>[r.uniform(-1,1),0,r.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&s.add(Y.obj);let pt=Ri({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return s.add(pt.group),{group:s,floor:ts,update(L){pt.update(L),st.forEach((N,S)=>{N.morphTargetInfluences[0]=In(L,45,0,1,S)});let J=L%3600,V=Math.floor(J/8),Z=(J-V*8)/8,ct=Z*Z*(3-2*Z);for(let N of A){let S=N.keys[V%450],R=N.keys[(V+1)%450];N.m.scale.set(S[0]+(R[0]-S[0])*ct,S[1]+(R[1]-S[1])*ct,S[2]+(R[2]-S[2])*ct)}Y.update(L)},key:{dir:Pn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,ts+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,ts+.5],color:[1,.5,.2],intensity:.35,dist:8},...y],dispose(){pt.dispose(),Pi(s)}}}var bu={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function Zf(i,t){let e=i==="night"?bu.NIGHT:i==="day"?{...Ii(bu.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:bu.SUNSET,n=e.emit,r=n*.75,s=Tn(21),o=Tn(77),a=new Yt,c=[Pn(e.body_az,e.body_el)],l=ji(e,c),h=ue(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(B=>wr(B,e.exposure)),d=e.stone,m=Ri({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(B,F)=>{let G=Math.hypot(B,F),tt=Jt(e.water_lo,e.water_hi,Vt(cn(B*.05+2,F*.05,3)*1.2-.15)),z=Math.exp(-(((G-9.9)/3)**2))*.12*.75;return tt=[tt[0]+e.glow_col[0]*z,tt[1]+e.glow_col[1]*z,tt[2]+e.glow_col[2]*z],Jt(tt,ge(u,.5),Ae(32,150,G)**1.2)},_;{let B=new Qt(!1,2),F=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],G=t?48:72,tt=F.map(w=>Array.from({length:G},(rt,K)=>{let X=w*Math.cos(2*Math.PI*K/G),Q=w*Math.sin(2*Math.PI*K/G),nt=Ae(9,13,w)*Math.exp(-w/90);return B.v([X,Q,0],g(X,Q),[[0,0,.06*Math.sin(.45*X+.33*Q)*nt],[0,0,.06*Math.sin(.38*X-.41*Q+2)*nt]])}));for(let w=0;w<F.length-1;w++)for(let rt=0;rt<G;rt++){let K=(rt+1)%G;B.f(tt[w][rt],tt[w+1][rt],tt[w+1][K],tt[w][K])}let z=new Bs({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:Vh});_=new St(B.geo(),z),_.morphTargetInfluences=[0,0],a.add(_)}let f=[];[.35,.9,1.7].slice(0,t?2:3).forEach((B,F)=>{let G=new Qt(!0),tt=[10.5,12,15,19,24,30,38,48,60],z=48,w=tt.map(X=>Array.from({length:z},(Q,nt)=>{let lt=2*Math.PI*nt/z,I=X*Math.cos(lt),E=X*Math.sin(lt),k=e.mist_a*Vt((cn(I*.07+F*9,E*.07,3)-.38)*2.6)*Ae(0,3,X-10.5)*Ae(0,15,60-X);return G.v([I,E,B+.12*Math.sin(.3*I+F)],[...e.mist_col,k])}));for(let X=0;X<tt.length-1;X++)for(let Q=0;Q<z;Q++){let nt=(Q+1)%z;G.f(w[X][Q],w[X+1][Q],w[X+1][nt],w[X][nt])}let rt=new an({vertexColors:!0,transparent:!0,depthWrite:!1,side:Le,toneMapped:!1});rt.color.setScalar(1+.7);let K=new St(G.geo(),rt);K.renderOrder=3,a.add(K),f.push({m:K,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Sr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let p=new Qt,x=new Qt,M=[];for(let B of[45,135,225,315]){let F=ue(B),G=o.uniform(1.6,2.6),tt=o.choice(d),z=o.uniform(0,50),w=9.35*Math.cos(F),rt=9.35*Math.sin(F),K=10,X=.3,Q=[],nt=[],lt=Array.from({length:K},()=>X+G-o.uniform(0,.45));for(let gt=0;gt<K;gt++){let Lt=2*Math.PI*gt/K,_t=o.uniform(-.05,.05),At=o.uniform(-.05,.05),Gt=o.uniform(-.05,.05),Bt=o.uniform(-.05,.05),Ct=[w+.62*Math.cos(Lt)+_t,rt+.62*Math.sin(Lt)+At,X],Pt=[w+.5*Math.cos(Lt)+Gt,rt+.5*Math.sin(Lt)+Bt,lt[gt]];Q.push(p.v(Ct,Ai(tt,0,Ct[0]-w,Ct[1]-rt,z,e.moss))),nt.push(p.v(Pt,Ai(tt,(Pt[2]-X)/G,Pt[0]-w,Pt[1]-rt,z,e.moss)))}for(let gt=0;gt<K;gt++){let Lt=(gt+1)%K;p.f(Q[gt],Q[Lt],nt[Lt],nt[gt])}p.f(...nt);let I=w-.55*Math.cos(F),E=rt-.55*Math.sin(F),k=F-Math.PI/2,et=Math.cos(k),ht=Math.sin(k),it=.06,Et=G*.45/2,bt=.3+G*.5;x.f(...[[-it,-.03,-Et],[it,-.03,-Et],[it,-.03,Et],[-it,-.03,Et]].map(([gt,Lt,_t])=>x.v([I+gt*et-Lt*ht,E+gt*ht+Lt*et,bt+_t],[1,1,1]))),M.push([w,rt,.3+G])}let b=(B,F,G,tt,z,w,rt,K)=>{let X=o.uniform(0,50),Q=Math.cos(rt),nt=Math.sin(rt),lt=new Map,I=(E,k,et)=>{let ht=E*tt+o.uniform(-.03,.03),it=k*z+o.uniform(-.03,.03),Et=et*w;return p.v([B+ht*Q-it*nt,F+ht*nt+it*Q,G+Et],Ai(K,et+.5,ht,it,X,e.moss))};for(let E of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...E.map(([k,et,ht])=>I(k,et,ht)))};for(let B of[270,90])for(let F=0;F<5;F++){let G=11+F*1.7+o.uniform(-.2,.2),tt=ue(B+o.uniform(-5,5)),z=o.uniform(1.2,1.7);b(G*Math.cos(tt),G*Math.sin(tt),-.13,z,z*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(d))}for(let B=0;B<12;B++){let F=o.uniform(0,2*Math.PI);Math.min(Math.abs(Xo(F,Math.PI/2)),Math.abs(Xo(F,3*Math.PI/2)))<.18&&(F+=.5);let G=o.uniform(10.5,15),tt=o.uniform(.7,1.8),z=o.choice(d),w=o.uniform(0,50),rt=o.uniform(0,6.28),K=new yn(1,1),X=K.attributes.position,Q=new ce().compose(new T(G*Math.cos(F),G*Math.sin(F),.05),new En().setFromAxisAngle(new T(0,0,1),rt),new T(tt,tt*.9,tt*.7));for(let nt=0;nt<X.count;nt+=3)p.f(...[0,1,2].map(lt=>{let I=new T(X.getX(nt+lt),X.getY(nt+lt),X.getZ(nt+lt)),E=I.z;return I.applyMatrix4(Q),p.v([I.x,I.y,I.z],Ai(z,(E+1)/2,X.getX(nt+lt),X.getY(nt+lt),w,e.moss))}));K.dispose()}a.add(new St(p.geo(),_e()),new St(x.geo(),Vn(e.rune_col,1.4*r)));let D=(()=>{let B=new T(.8,.6,0).normalize();return[B.x,B.y,0]})(),P=ue(e.body_az),A=[Math.cos(P),Math.sin(P)],C=[],U=(B,F,G)=>{for(let tt=0;tt<300;tt++){let z=s.uniform(0,360);if(G&&z>245&&z<295)continue;let w=s.uniform(B,F),rt=w*Math.cos(ue(z)),K=w*Math.sin(ue(z));if(C.every(([X,Q])=>Math.hypot(rt-X,K-Q)>6))return C.push([rt,K]),[rt,K]}return null},y=_e({morph:!0}),v=[],W=[],j=[],ot=t?6:9,st=t?4:7;for(let B=0;B<ot+st;B++){let F=B<ot,G=F?U(16,32,!0):U(38,62,!1);if(!G)continue;let tt=F?s.uniform(9,15):s.uniform(16,24),z=F?s.uniform(.28,.42):s.uniform(.5,.8),w=new St(Y(G[0],G[1],tt,z),y);w.morphTargetInfluences=[0],a.add(w),v.push({m:w,P:s.choice([100,120,150,180,200]),flip:s.int(0,1)}),W.push(G),j.push([G[0],G[1],2.2*z+.7])}function Y(B,F,G,tt){let z=new Qt(!1,1),w=new T(-B,-F,0).normalize(),rt=s.uniform(.6,1.4),K=new T(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.02,.07)),X=s.uniform(0,6.28),Q=gt=>new T(B+K.x*gt+.25*Math.sin(.5*gt+X),F+K.y*gt+.25*Math.cos(.4*gt+X),gt),nt=gt=>{let Lt=Math.max(gt,0);return tt*(1-.55*Vt(Lt/G))*(1+.7*Math.exp(-Lt/.8))},lt=(gt,Lt,_t=0)=>{let At=rt*Vt(Math.max(gt.z,0)/G)**2+_t;return z.v([gt.x,gt.y,gt.z],Lt,[[D[0]*At,D[1]*At,0]])},I=(gt,Lt)=>{let _t=new T(gt.x,gt.y,0);_t.lengthSq()>1e-12&&_t.normalize();let At=Jt(e.bark_dark,e.bark_lit,.6*Math.max(0,_t.x*w.x+_t.y*w.y));return At=Jt(At,e.bark_rim,Vt(e.bark_rim_k*Math.max(0,_t.x*A[0]+_t.y*A[1])*(1-.4*Vt(Lt/G)))),Jt(At,e.moss,Vt(1-Lt/1.8)*.6*ke(gt.x*3+B,Lt*.8+F))},E=(gt,Lt,_t,At,Gt)=>{let Bt=gt.length,Ct=gt.map((ee,at)=>gt[Math.min(at+1,Bt-1)].clone().sub(gt[Math.max(at-1,0)]).normalize()),Pt=Ct[0].clone().cross(Math.abs(Ct[0].z)>.9?new T(1,0,0):new T(0,0,1)).normalize(),Wt=gt.map((ee,at)=>{let Ut=Ct[at];Pt=Pt.clone().addScaledVector(Ut,-Pt.dot(Ut)).normalize();let vt=Ut.clone().cross(Pt);return Array.from({length:_t},(Tt,Xt)=>{let $t=2*Math.PI*Xt/_t,fe=Pt.clone().multiplyScalar(Math.cos($t)).addScaledVector(vt,Math.sin($t));return lt(ee.clone().addScaledVector(fe,Lt[at]),At(at,fe),Gt?Gt(at):0)})});for(let ee=0;ee<Bt-1;ee++)for(let at=0;at<_t;at++){let Ut=(at+1)%_t;z.f(Wt[ee][at],Wt[ee][Ut],Wt[ee+1][Ut],Wt[ee+1][at])}},k=11,et=8,ht=Array.from({length:k},(gt,Lt)=>{let _t=-.4+(G+.4)*Lt/(k-1),At=Q(_t);return Array.from({length:et},(Gt,Bt)=>{let Ct=2*Math.PI*Bt/et,Pt=new T(Math.cos(Ct),Math.sin(Ct),0);return lt(At.clone().addScaledVector(Pt,nt(_t)*(1+.06*Math.sin(3*Ct+_t))),I(Pt,_t))})});for(let gt=0;gt<k-1;gt++)for(let Lt=0;Lt<et;Lt++){let _t=(Lt+1)%et;z.f(ht[gt][Lt],ht[gt][_t],ht[gt+1][_t],ht[gt+1][Lt])}z.f(...ht[k-1]);let it=[],Et=s.int(3,5);for(let gt=0;gt<Et;gt++){let Lt=G*s.uniform(.42,.9),_t=s.uniform(0,6.28),At=new T(Math.cos(_t),Math.sin(_t),0),Gt=Q(Lt).addScaledVector(At,nt(Lt)*.6),Bt=At.clone().add(new T(0,0,s.uniform(.5,1.1))).normalize(),Ct=s.uniform(2,5)*(G/12)*(1.1-.5*Lt/G),Pt=Array.from({length:6},(ee,at)=>Gt.clone().addScaledVector(Bt,Ct*(at/5)).add(new T(0,0,-.12*Ct*(at/5)**2))),Wt=nt(Lt)*.4;E(Pt,Pt.map((ee,at)=>Wt*(1-.88*at/5)+.01),5,(ee,at)=>I(at,Pt[ee].z)),it.push(...Pt.slice(2,5))}let bt=s.int(4,8);for(let gt=0;gt<bt;gt++){let Lt=s.choice(it),_t=s.uniform(.8,2.2),At=s.uniform(0,6.28),Gt=Array.from({length:6},(Bt,Ct)=>Lt.clone().add(new T(.06*Math.sin(At+Ct)*Ct/5,.06*Math.cos(At+Ct*.8)*Ct/5,-_t*Ct/5)));E(Gt,Gt.map((Bt,Ct)=>.022*(1-.8*Ct/5)+.003),3,Bt=>Jt(e.vine_a,e.vine_b,Bt/5),Bt=>.45*(Bt/5)**1.5)}return z.geo()}{let B=new Qt,F=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[G,tt,z]of j){let w=F.map(([K,X])=>Array.from({length:14},(Q,nt)=>{let lt=2*Math.PI*nt/14,I=z*K*(1+.12*Math.sin(3*lt+G)),E=[G+I*Math.cos(lt),tt+I*Math.sin(lt),X+.05*Math.sin(5*lt+tt)];return B.v(E,Jt(e.mud,e.moss,Vt(.3+.6*ke(E[0]*.8,E[1]*.8))))})),rt=B.v([G,tt,.52],e.moss);for(let K=0;K<w.length-1;K++)for(let X=0;X<14;X++){let Q=(X+1)%14;B.f(w[K][X],w[K][Q],w[K+1][Q],w[K+1][X])}for(let K=0;K<14;K++)B.f(rt,w[w.length-1][K],w[w.length-1][(K+1)%14])}a.add(new St(B.geo(),_e()))}let pt=_e({morph:!0,double:!0}),L=[0,1].map(B=>{let F=new Qt(!1,1),G=(t?160:300)/2,tt=(K,X,Q,nt,lt)=>Array.from({length:Q},(I,E)=>{let k=2*Math.PI*E/Q;return F.v([K[0]+X*Math.cos(k),K[1]+X*Math.sin(k),K[2]],nt,[[D[0]*lt,D[1]*lt,0]])}),z=(K,X)=>{for(let Q=0;Q<K.length;Q++){let nt=(Q+1)%K.length;F.f(K[Q],K[nt],X[nt],X[Q])}},w=0;for(;w<G;){let K,X;if(W.length&&o.random()<.6){let[it,Et]=o.choice(W),bt=o.uniform(0,6.283),gt=o.uniform(1,4.5);K=it+gt*Math.cos(bt),X=Et+gt*Math.sin(bt)}else{let it=o.uniform(0,6.283),Et=o.uniform(11.5,48);K=Et*Math.cos(it),X=Et*Math.sin(it)}if(Math.hypot(K,X)<11)continue;w++;let Q=o.uniform(1.2,3),nt=o.uniform(-.25,.25)*Q*.5,lt=o.uniform(-.25,.25)*Q*.5,I=it=>[K+nt*it*it,X+lt*it*it,-.3+(Q+.3)*it],E=it=>.12*Q*it*it,k=[0,.37,.74].map(it=>tt(I(it),.018-.008*it,3,e.reed,E(it)));z(k[0],k[1]),z(k[1],k[2]);let et=[[.75,.012],[.83,.055],[.92,.045]].map(([it,Et])=>tt(I(it),Et,5,e.cat,E(it)));z(et[0],et[1]),z(et[1],et[2]);let ht=F.v(I(1),e.cat,[[D[0]*E(1),D[1]*E(1),0]]);for(let it=0;it<5;it++)F.f(et[2][it],et[2][(it+1)%5],ht)}let rt=new St(F.geo(),pt);return rt.morphTargetInfluences=[0],a.add(rt),rt});{let B=new Qt;for(let F=0;F<(t?36:60);F++){let G=o.uniform(0,6.283),tt=o.uniform(11.5,44),z=tt*Math.cos(G),w=tt*Math.sin(G),rt=o.uniform(.3,.7),K=o.int(0,11),X=o.choice(e.lily),Q=B.v([z,w,.04],X),nt=Array.from({length:12},(lt,I)=>{let E=2*Math.PI*I/12;return B.v([z+rt*Math.cos(E),w+rt*.9*Math.sin(E),.04],ge(X,.8))});for(let lt=0;lt<12;lt++)lt!==K&&B.f(Q,nt[lt],nt[(lt+1)%12])}a.add(new St(B.geo(),_e({double:!0})))}let J=new Qt(!1,1),V=new Qt;for(let B=0;B<8;B++){let F=o.uniform(0,6.283),G=o.uniform(12,36),tt=o.uniform(0,6.283),z=new T(G*Math.cos(F),G*Math.sin(F),.05),w=new ce().makeRotationZ(tt),rt=new yn(1,1),K=rt.attributes.position,X=new ce().makeTranslation(z.x,z.y,z.z).multiply(w).multiply(new ce().makeScale(.22,.3,.13));for(let Q=0;Q<K.count;Q+=3)V.f(...[0,1,2].map(nt=>{let lt=new T(K.getX(Q+nt),K.getY(Q+nt),K.getZ(Q+nt)).applyMatrix4(X);return V.v([lt.x,lt.y,lt.z],[.008,.012,.009])}));rt.dispose();for(let Q of[-1,1]){let nt=z.clone().add(new T(Q*.09,.12,.12).applyMatrix4(w)),I=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(E=>J.v([nt.x+E[0]*.035,nt.y+E[1]*.035,nt.z+E[2]*.035],[1,1,1],[[0,0,E[2]*.035*(.08-1)]]));for(let[E,k]of[[0,2],[2,1],[1,3],[3,0]])J.f(I[E],I[k],I[4]),J.f(I[k],I[E],I[5])}}a.add(new St(V.geo(),_e()));let Z=new St(J.geo(),Vn(e.eye_col,1.8));Z.morphTargetInfluences=[0],a.add(Z);let ct=Array.from({length:Math.floor(3480/20)},(B,F)=>60+F*20),N=[];for(let B=0;B<6;B++)N.push(ct.splice(o.int(0,ct.length-1),1)[0]);{let B=new Qt;[[70,46,14,22],[95,58,18,30]].forEach(([F,G,tt,z],w)=>{let rt=Jt(e.back_col,u,.55+.2*w);for(let K=0;K<G;K++){let X=2*Math.PI*(K+s.uniform(-.4,.4))/G+w*.5,Q=[F*Math.cos(X),F*Math.sin(X)],nt=[-Math.sin(X),Math.cos(X)],lt=s.uniform(tt,z),I=s.uniform(.35,.9)*(1+.5*w),E=s.uniform(0,6.28),k=s.uniform(-.06,.06),et=it=>{let Et=-2+(lt+2)*it,bt=Math.sin(it*3+E)*.5+k*Et;return[Q[0]+nt[0]*bt,Q[1]+nt[1]*bt,Et]},ht=Array.from({length:6},(it,Et)=>{let bt=Et/5,gt=I*(1-.5*bt),Lt=Jt(rt,u,Vt(bt*bt*.9)),_t=et(bt);return[B.v([_t[0]-nt[0]*gt/2,_t[1]-nt[1]*gt/2,_t[2]],Lt),B.v([_t[0]+nt[0]*gt/2,_t[1]+nt[1]*gt/2,_t[2]],Lt)]});for(let it=0;it<5;it++)B.f(ht[it][0],ht[it][1],ht[it+1][1],ht[it+1][0]);for(let it of[-1,1]){let Et=et(s.uniform(.55,.8)),bt=[Et[0]+nt[0]*it*lt*.16,Et[1]+nt[1]*it*lt*.16,Et[2]+lt*.12],gt=Jt(rt,u,.6);B.f(B.v([Et[0],Et[1],Et[2]-.1],gt),B.v([Et[0],Et[1],Et[2]+.1],gt),B.v([bt[0],bt[1],bt[2]+.04],gt),B.v([bt[0],bt[1],bt[2]-.04],gt))}}}),a.add(new St(B.geo(),Ti({fog:!1})))}let S=[];for(let B=0;B<Math.round(14*e.orb_k*(t?.6:1));B++){let F=o.uniform(0,6.283),G=o.uniform(12,42);S.push({p:[G*Math.cos(F),G*Math.sin(F),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[B,F,G]of M)S.push({p:[B,F,G+.9],k:1.4,amp:o.uniform(.15,.4)});let R=Sc({list:S,col:e.orb_col,gain:1.2});a.add(R.group);let H=Ci({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let B=o.uniform(0,6.283),F=o.uniform(4,44);return[F*Math.cos(B),F*Math.sin(B),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(H.obj);let q=new Qt(!0);return Ks(q,9.4,.7,(B,F)=>{let G=Math.hypot(B,F);return G<.01?1:Ae(0,3,9.4-G)*(.7+.3*ke(G*.4,Math.atan2(F,B)*6.4))},e.wash_col,.28*.5),a.add(new St(q.geo(),Qr())),{group:a,floor:.6,update(B){m.update(B);for(let tt of v)tt.m.morphTargetInfluences[0]=In(B,tt.P/2,.15,1,tt.flip);L.forEach((tt,z)=>{tt.morphTargetInfluences[0]=In(B,60,0,1,z)}),_.morphTargetInfluences[0]=In(B,90,0,1,0),_.morphTargetInfluences[1]=In(B,90,0,1,1);let F=Math.sin(B%3600/3600*Math.PI);for(let tt of f)tt.m.rotation.z=tt.s*F;let G=0;for(let tt of N)Math.abs(B%3600-tt)<3&&(G=1-Math.abs(B%3600-tt)/3);Z.morphTargetInfluences[0]=G,R.update(B),H.update(B)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...M.map(B=>({pos:[B[0],B[1],B[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),Pi(a)}}}var vu={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},Fn=24,fx=Fn+1.6,dx=160;function $f(i,t){let e=i==="night"?vu.NIGHT:i==="day"?{...Ii(vu.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:vu.SUNSET,n=e.emit,r=n*.75,s=Tn(31),o=Tn(55),a=new Yt,c=[Pn(e.body_az,e.body_el)],l=ji(e,c),h=ue(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(V=>wr(V,e.exposure)),d=ue(e.body_az),m=(()=>{let V=new T(.8,.6,0).normalize();return[V.x,V.y,0]})(),g=e.stone,_=Ri({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let f=V=>fx*(1+.25*(1-Math.exp(V/60))),p=(V,Z)=>.12*Math.sin(V*.33)*Math.cos(Z*.29)*Ae(8,14,Math.hypot(V,Z)),x=(V,Z)=>Jt(Jt(e.earth_a,e.earth_b,Vt(cn(V*.12+5,Z*.12-3,3)*1.4-.2)),e.moss,Vt((ke(V*.4,Z*.4)-.62)*3)*.6);{let V=new Qt,Z=[8,10,12,14,16,18,20,22,Fn-1,Fn,Fn+.6,Fn+1.2,Fn+1.6],ct={[Fn+.6]:.3,[Fn+1.2]:.15,[Fn+1.6]:-.4},N=72,S=Z.map(R=>Array.from({length:N},(H,q)=>{let B=2*Math.PI*q/N,F=R*Math.cos(B),G=R*Math.sin(B);return V.v([F,G,ct[R]??p(F,G)],R<=Fn+.01?x(F,G):Jt(e.bark,e.moss,.5+.3*ke(F*.5,G*.5)))}));for(let R=0;R<Z.length-1;R++)for(let H=0;H<N;H++){let q=(H+1)%N;V.f(S[R][H],S[R+1][H],S[R+1][q],S[R][q])}a.add(new St(V.geo(),_e({flat:!1})))}{let V=new Qt,Z=t?28:40,ct=t?48:72,N=Array.from({length:Z},(S,R)=>{let H=-.4-dx*(R/(Z-1))**1.6;return Array.from({length:ct},(q,B)=>{let F=2*Math.PI*B/ct,G=f(H)*(1+.04*Math.sin(14*F+.8*Math.sin(.05*H))+.025*Math.sin(5*F+.02*H)),tt=Math.sin(14*F+.8*Math.sin(.05*H)),z=Jt(e.bark,e.bark_hi,Vt(.5+.5*tt)*.5);z=Jt(z,e.bark_hi,.4*Math.max(0,Math.cos(F-d))),z=Jt(z,e.moss,Vt(1+H/25)*Vt((ke(F*3,H*.15)-.4)*2.5)*.8);let w=Math.abs(Math.sin(7*F+1.5*Math.sin(.04*H+3*F)));return z=Jt(z,e.vein,Vt(1-w*7)*(.4+.6*ke(H*.05,F*2))*.9),V.v([G*Math.cos(F),G*Math.sin(F),H],Jt(z,ge(u,.6),Vt((-H-15)/110)**1.2))})});for(let S=0;S<Z-1;S++)for(let R=0;R<ct;R++){let H=(R+1)%ct;V.f(N[S][R],N[S+1][R],N[S+1][H],N[S][H])}a.add(new St(V.geo(),_e({emit:.3,flat:!1})))}let M=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([V,Z],ct)=>{let N=new Qt(!0),S=f(V)-.3,R=[S,S+4,S+10,S+20,S+32,S+46,S+64,S+84,S+106,150],H=64,q=R.map(G=>Array.from({length:H},(tt,z)=>{let w=2*Math.PI*z/H,rt=G*Math.cos(w),K=G*Math.sin(w),X=Z*(.55+.45*cn(rt*.03+ct*7,K*.03,3))*Ae(0,6,G-S);return N.v([rt,K,V],[...Jt(e.sea_col,u,Ae(60,150,G)),X])}));for(let G=0;G<R.length-1;G++)for(let tt=0;tt<H;tt++){let z=(tt+1)%H;N.f(q[G][tt],q[G+1][tt],q[G+1][z],q[G][z])}let B=new an({vertexColors:!0,transparent:!0,depthWrite:!1,side:Le,fog:!1,toneMapped:!1});B.color.setScalar(1.7);let F=new St(N.geo(),B);F.renderOrder=2,a.add(F),M.push({m:F,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Sr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let b=new Qt,D=new Qt,P=[];for(let V of[0,60,120,180,240,300]){let Z=ue(V),ct=12.5,N=o.uniform(5,8),S=1.8,R=1.2,H=ct*Math.cos(Z),q=ct*Math.sin(Z),B=-.4,F=Z-Math.PI/2,G=Math.cos(F),tt=Math.sin(F),z=o.choice(g),w=o.uniform(0,50),rt=new Map,K=(lt,I,E)=>{let k=`${lt},${I},${E}`,et=rt.get(k);et||(et=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],rt.set(k,et));let ht=lt*S,it=I*R,Et=(E+.5)*N;if(Et>N*.5){let gt=1-.18*((Et-N*.5)/(N*.5));ht*=gt,it*=gt}ht+=et[0],it+=et[1];let bt=Et+et[2];return b.v([H+ht*G-it*tt,q+ht*tt+it*G,B+bt],Ai(z,bt/N,ht,bt*.7,w,e.moss))},X=4,Q=lt=>-.5+lt/X,nt=lt=>{for(let I=0;I<X;I++)for(let E=0;E<X;E++)b.f(K(...lt(I,E)),K(...lt(I+1,E)),K(...lt(I+1,E+1)),K(...lt(I,E+1)))};nt((lt,I)=>[Q(lt),-.5,Q(I)]),nt((lt,I)=>[Q(I),.5,Q(lt)]),nt((lt,I)=>[-.5,Q(I),Q(lt)]),nt((lt,I)=>[.5,Q(lt),Q(I)]),nt((lt,I)=>[Q(I),Q(lt),.5]);for(let[lt,I,E]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let k=-R/2-.02,et=N*lt,ht=H-k*tt,it=q+k*G;D.f(...[[-I/2,-E/2],[I/2,-E/2],[I/2,E/2],[-I/2,E/2]].map(([Et,bt])=>D.v([ht+Et*G,it+Et*tt,B+et+bt],[1,1,1])))}P.push([H,q,N-.4])}a.add(new St(b.geo(),_e()),new St(D.geo(),Vn(e.rune_col,1.4*r)));let A=(V,Z,ct,N,S,R,H,q,B=!0)=>{let F=Array.from({length:H},(tt,z)=>{let w=Math.PI/2*z/H,rt=z/H;return Array.from({length:R},(K,X)=>{let Q=2*Math.PI*X/R,nt=.1*rt*rt*S;return V.v([Z[0]+ct*Math.cos(w)*Math.cos(Q),Z[1]+N*Math.cos(w)*Math.sin(Q),Z[2]+S*Math.sin(w)],q(rt,Q),B?[[m[0]*nt,m[1]*nt,0]]:void 0)})}),G=V.v([Z[0],Z[1],Z[2]+S],q(1,0),B?[[m[0]*.1*S,m[1]*.1*S,0]]:void 0);for(let tt=0;tt<H-1;tt++)for(let z=0;z<R;z++){let w=(z+1)%R;V.f(F[tt][z],F[tt][w],F[tt+1][w],F[tt+1][z])}for(let tt=0;tt<R;tt++)V.f(F[H-1][tt],F[H-1][(tt+1)%R],G)},C=(V,Z,ct,N,S)=>{let R=new Qt(!1,1);for(let[q,B,F,G]of V){let tt=o.uniform(.85,1.15),z=p(q,B)-.2,w=(rt,K)=>ge(Jt(Z,ct,Vt(rt*(.75+.25*Math.cos(K-d)))**.9),tt);for(let rt=0;rt<G;rt++){let K=o.uniform(0,6.283),X=rt?o.uniform(0,.6)*F:0,Q=F*o.uniform(.7,1);A(R,[q+X*Math.cos(K),B+X*Math.sin(K),z],Q,Q,Q*.85,N,S,w)}}let H=new St(R.geo(),_e({flat:!1,morph:!0}));return H.morphTargetInfluences=[0],a.add(H),H},U=[];for(let V=0;U.length<(t?40:70)&&V<3e3;V++){let Z=o.uniform(0,2*Math.PI),ct=o.uniform(11.5,Fn-1.5);if(Z*180/Math.PI%360>255&&Z*180/Math.PI%360<285&&ct>15)continue;let N=ct*Math.cos(Z),S=ct*Math.sin(Z);P.some(([R,H])=>Math.hypot(N-R,S-H)<2.8)||U.push([N,S,o.uniform(1,2.2),o.int(2,4)])}let y=C(U,e.bush_lo,e.bush_hi,12,3),v=Array.from({length:30},(V,Z)=>{let ct=2*Math.PI*(Z+o.uniform(-.3,.3))/30,N=Fn-.6+o.uniform(-.8,.8);return[N*Math.cos(ct),N*Math.sin(ct),o.uniform(2,3.5),2]}),W=C(v,e.hedge_lo,e.hedge_hi,16,4);{let V=new Qt;[62,85,112,140].forEach((Z,ct)=>{let N=1+.25*ct;for(let S=0;S<(t?12:20);S++){let R=2*Math.PI*(S+s.uniform(-.4,.4))/20+ct*.4,H=Z+s.uniform(-6,6);for(let q=0;q<2;q++){let B=q?s.uniform(-9,9):0,F=H*Math.cos(R)-B*Math.sin(R),G=H*Math.sin(R)+B*Math.cos(R),tt=s.uniform(9,16)*N*(q?.7:1),z=s.uniform(28,46)*N*(q?.75:1),w=.35+.15*ct,rt=s.uniform(.85,1.15);A(V,[F,G,-30],tt,tt,z,14,7,K=>Jt(ge(e.can_col,rt),ge(u,.7),Vt(w+.25*K)),!1)}}}),a.add(new St(V.geo(),_e({emit:.85,flat:!1})))}let j=[];for(let V=0;V<Math.round(18*e.orb_k*(t?.6:1));V++){let Z=o.uniform(0,6.283),ct=10.5+(Fn-8.5)*Math.sqrt(o.random());j.push({p:[ct*Math.cos(Z),ct*Math.sin(Z),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[V,Z,ct]of P)j.push({p:[V,Z,ct+.9],k:1.4,amp:o.uniform(.15,.4)});let ot=Sc({list:j,col:e.orb_col,gain:1.2});a.add(ot.group);let st=Math.round(160*e.fire_k*(t?.5:1)),Y=Math.round(40*e.fire_k*(t?.5:1)),pt=0,L=Ci({r:o,n:st+Y,at:()=>{if(pt++<st){let ct=o.uniform(0,6.283),N=(Fn+4)*Math.sqrt(o.random());return[N*Math.cos(ct),N*Math.sin(ct),.3+8.7*o.random()**1.6]}let V=o.uniform(0,6.283),Z=o.uniform(Fn+2,Fn+14);return[Z*Math.cos(V),Z*Math.sin(V),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});st+Y>0&&a.add(L.obj);let J=new Qt(!0);return Ks(J,9.4,.7,(V,Z)=>{let ct=Math.hypot(V,Z);return ct<.01?1:Ae(0,3,9.4-ct)*(.7+.3*ke(ct*.4,Math.atan2(Z,V)*6.4))},e.wash_col,.28*.5),a.add(new St(J.geo(),Qr())),{group:a,floor:.6,update(V){_.update(V),y.morphTargetInfluences[0]=In(V,60,.15,1,1),W.morphTargetInfluences[0]=In(V,90,.15,1,1);let Z=Math.sin(V%3600/3600*Math.PI);for(let ct of M)ct.m.rotation.z=ct.s*Z;ot.update(V),L.update(V)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...P.slice(0,4).map(V=>({pos:[V[0],V[1],V[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),Pi(a)}}}var px={forest:qf,plains:Yf,swamp:Zf,worldtree:$f,castle:Xf};function Eu(i,t,e){let n=px[i];return n?n(t,e):null}var It=(i,t)=>i+Math.random()*(t-i),mx=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function js(i,t=!1){let e=new An(i);return e.colorSpace=on,t&&(e.magFilter=Rn,e.minFilter=Rn,e.generateMipmaps=!1),e}function qo(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),js(e)}function Kf(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let r=0;r<n.length;r++)e.save(),e.rotate(r/n.length*Math.PI*2),e.fillText(n[r],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let r=0;r<=5;r++){let s=r*4*Math.PI/5-Math.PI/2,o=Math.cos(s)*180,a=Math.sin(s)*180;r?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),js(t)}function gx(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),js(e)}function _x(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let r=n*56,s=r+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,s,c,l),t.arc(512,512,Math.max(r,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=js(i);return e.anisotropy=4,e}function yx(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,r=e?Number(e[2]):20,s=1024/Math.max(n,r),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*s}" height="${r*s}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*s,c.height=r*s,c.getContext("2d").drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(js(c),n/r)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function xx(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let r=document.createElement("canvas");r.width=2048,r.height=1152;let s=r.getContext("2d");s.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=s.getImageData(0,a,2048,c-a).data,h=0,u=0,d=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],d+=l[g+2],m++;return new zt(h/m/255,u/m/255,d/m/255).convertSRGBToLinear()};t(js(r),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var Mx={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},bx=["forest","swamp","worldtree"];function vx(i,t={}){let e,n=!!t.lite;try{e=new Ns({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let r=!1,s=()=>r?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(s()),e.toneMapping=Bo,e.toneMappingExposure=1.15;let o=new Hs;o.fog=new Qa(1709616,20,58);let a=new vn(55,16/9,.05,200),c=new T(0,1.75,7.2),l=new T(0,1.45,0);a.position.copy(c),o.add(a);let h=new zs(16777215,2236962,1),u=new Yi(16777215,1);o.add(h,u);let d=new mi(16777215,6,9,2);d.position.set(0,3,7.5),o.add(d);let m=new Yi(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new Yt;o.add(g);let _=new an({color:16777215,fog:!1,side:Le}),f=new St(new Ee(70,70,66,48,1,!0,Math.PI-.95,1.9),_);f.scale.set(-1,1,1),f.position.set(0,13,6),g.add(f);let p=new Te({color:2767396,roughness:1}),x=new St(new Do(90,48),p);x.rotation.x=-Math.PI/2,x.position.y=-.02,g.add(x);let M=new Te({color:5208634,roughness:.9,flatShading:!0}),b=2600,D=new Fs(new Nn(.05,.42,3),M,b);{let $=new ce,dt=new En,xt=new wn,mt=new T,Rt=new T,Dt=new zt;for(let kt=0;kt<b;kt++){let xe=9.9+Math.pow(Math.random(),.7)*30,ae=Math.random()*Math.PI*2;mt.set(Math.cos(ae)*xe,.18,Math.sin(ae)*xe-1),xt.set(It(-.25,.25),Math.random()*3,It(-.25,.25)),dt.setFromEuler(xt);let Ht=It(.7,1.6);Rt.set(Ht,Ht*It(.8,1.5),Ht),$.compose(mt,dt,Rt),D.setMatrixAt(kt,$),D.setColorAt(kt,Dt.setHSL(It(.22,.32),It(.35,.6),It(.3,.5)))}}g.add(D);let P=new Yt;g.add(P);let A=new Te({color:1981226,roughness:1,flatShading:!0}),C=new Te({color:3811868,roughness:1}),U=new Te({color:6051942,roughness:1,flatShading:!0});function y($){P.clear();let dt=bx.includes($),xt=dt?70:34;for(let mt=0;mt<xt;mt++){let Rt=It(Math.PI*1.08,Math.PI*1.92),Dt=It(24,48),kt=Math.cos(Rt)*Dt,xe=Math.sin(Rt)*Dt-1;if(dt){let ae=It(6,13),Ht=new Yt,wt=new St(new Ee(.25,.4,ae*.3,6),C);wt.position.y=ae*.15,Ht.add(wt);for(let Se=0;Se<3;Se++){let mn=new St(new Nn(ae*(.32-Se*.07),ae*.5,7),A);mn.position.y=ae*(.42+Se*.2),Ht.add(mn)}Ht.position.set(kt,0,xe),P.add(Ht)}else{let ae=new St(new yn(It(.8,2.6),0),Math.random()<.5?U:A);ae.position.set(kt,.3,xe),ae.scale.y=It(.5,.9),ae.rotation.y=Math.random()*3,P.add(ae)}}}let v=new St(new Do(9.5,64),new Te({map:_x(),roughness:.92,metalness:.02}));v.rotation.x=-Math.PI/2,g.add(v);let W=new St(new zn(9.5,.18,8,96),new Te({color:4933206,roughness:.85}));W.rotation.x=Math.PI/2,W.position.y=.05,g.add(W);let j=new St(new qi(9,9),new an({map:Kf("#a98bff"),transparent:!0,opacity:.38,blending:fn,depthWrite:!1}));j.rotation.x=-Math.PI/2,j.position.y=.03,j.scale.x=-1,o.add(j);let ot=new Te({color:5919846,roughness:.9}),st=qo("rgba(255,170,80,1)","rgba(255,120,40,0)"),Y=[];for(let $ of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let dt=$-Math.PI/2,xt=Math.cos(dt)*10.4,mt=Math.sin(dt)*10.4-1.5,Rt=new Yt,Dt=new St(new Ee(.42,.5,4.2,10),ot);Dt.position.y=2.1;let kt=new St(new en(1.2,.3,1.2),ot);kt.position.y=4.35;let xe=new St(new Ee(.42,.22,.3,10),new Te({color:2959923,metalness:.6,roughness:.4}));xe.position.y=4.65;let ae=new jn(new Zn({map:st,color:16756832,blending:fn,depthWrite:!1,transparent:!0}));ae.position.y=5.05,ae.scale.set(1.3,1.8,1);let Ht=new mi(16751178,10,14,2);Ht.position.y=5.1,Rt.add(Dt,kt,xe,ae,Ht),Rt.position.set(xt,0,mt),g.add(Rt),Y.push({light:Ht,flame:ae,base:1,phase:Math.random()*10})}let pt=260,L=new be,J=new Float32Array(pt*3),V=new Float32Array(pt);for(let $=0;$<pt;$++)J[$*3]=It(-14,14),J[$*3+1]=It(0,7),J[$*3+2]=It(-12,6),V[$]=Math.random()*100;L.setAttribute("position",new De(J,3));let Z=new gr({size:.12,map:qo(),transparent:!0,depthWrite:!1,blending:fn,color:16777215,sizeAttenuation:!0});g.add(new _r(L,Z));let ct=qo(),N=qo("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),S=qo("rgba(150,120,255,1)","rgba(120,80,255,0)"),R=new Map;function H($,dt){let xt=new Yt,mt=null,Rt=null,Dt=null,kt=1.95;dt.svg?(kt=4.6,Dt=new Zn({transparent:!0,alphaTest:.05}),Rt=new jn(Dt),Rt.center.set(.5,0),Rt.scale.set(kt*1.33,kt,1),yx(dt.svg,(wt,Se)=>{Dt.map=wt,Dt.needsUpdate=!0,Rt.scale.set(kt*Se,kt,1)}),xt.add(Rt)):(mt=Rf(fu(dt.character??"wizard"),$==="me"?"me":$.startsWith("ally:")?"ally":"opp",ct,dt.staff),kt=mt.height,xt.add(mt.root));let xe=new St(new qi(kt*.7,kt*.32),new an({map:N,transparent:!0,depthWrite:!1}));if(xe.rotation.x=-Math.PI/2,xe.position.y=.02,xt.add(xe),$!=="me"){let wt=new St(new qi(kt*1.1,kt*1.1),new an({map:Kf($==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:fn,depthWrite:!1}));wt.rotation.x=-Math.PI/2,wt.position.y=.04,wt.name="circle",xt.add(wt)}let ae=new jn(new Zn({map:S,blending:fn,depthWrite:!1,transparent:!0,opacity:0}));ae.scale.set(kt*1.2,kt*1.2,1),ae.position.y=kt*.5,xt.add(ae),o.add(xt);let Ht={key:$,group:xt,model:mt,sprite:Rt,spriteMat:Dt,height:kt,ko:!1,flame:null,aura:ae,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,eyesFlashUntil:0,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100}};return R.set($,Ht),Ht}function q(){for(let $ of R.values())o.remove($.group),$.group.traverse(dt=>{let xt=dt;xt.geometry?.dispose?.(),xt.material?.dispose?.()});R.clear()}let B=new Yt;a.add(B);let F=new T(1.08,-.52,-1.6),G=new T(1.14,-.6,-1.6);B.scale.setScalar(.72);let tt=F.clone(),z=new Te({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),w=new Te({color:4020950,roughness:.9,flatShading:!0,side:Le}),rt=new Te({color:15778970,roughness:.75,flatShading:!0}),K=new Yt;B.add(K);let X=$i("verdant",ct),Q="verdant";K.add(X.group);let nt=new mi(X.color,.6,4,2);nt.position.y=xr,K.add(nt);function lt($){$!==Q&&(Q=$,K.remove(X.group),X.group.traverse(dt=>{dt.geometry?.dispose?.()}),X=$i($,ct),K.add(X.group),nt.color.copy(X.color))}{let $=(Rt,Dt,kt,xe,ae,Ht)=>{let wt=new St(Rt,Dt);return wt.position.set(xe,ae,Ht),kt.add(wt),wt},dt=$(new Wr(.046,.075,4,10),rt,K,.066,-.004,.014);dt.scale.set(.82,1,1.12),dt.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((Rt,Dt)=>{let kt=.05-Dt*.002,xe=$(new zn(kt,.019-Dt*.001,6,14,Math.PI*1.32),rt,K,0,Rt,0);xe.rotation.x=-Math.PI/2;let ae=Math.PI*1.32;$(new Ne(.019-Dt*.001,6,5),rt,K,Math.cos(ae)*kt,Rt,-Math.sin(ae)*kt)}),$(new Wr(.021,.075,4,8),rt,K,.022,.074,.05).rotation.set(.3,0,1.25);let mt=new Yt;mt.position.set(.09,-.08,.03),mt.rotation.set(-.55,0,.62),B.add(mt),$(new Ee(.05,.062,.2,10),rt,mt,0,-.08,0),$(new Ee(.1,.16,.95,10,1,!0),w,mt,0,-.6,0),$(new zn(.1,.028,6,14),z,mt,0,-.14,0).rotation.x=Math.PI/2}let I=new mi(16777215,1.4,3,2);I.position.set(.3,.3,-.5),a.add(I);let E={wizard:{sleeve:3433416,skin:15916495},witch:{sleeve:8017597,skin:15654104},goblin:{sleeve:8015404,skin:8688447},knight:{sleeve:14077887,skin:14999246},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},k=-1e9,et="ready",ht=0,it=900,Et=()=>{et==="gone"&&(et="growing",ht=performance.now())},bt=0,gt=0,Lt=null,_t=!1,At={uTime:{value:0},uAmount:{value:0},uC0:{value:new zt},uC1:{value:new zt},uC2:{value:new zt},uC3:{value:new zt}},Gt=new St(new qi(1,1),new Yn({uniforms:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:fn,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Gt.renderOrder=30,Gt.frustumCulled=!1,a.add(Gt);function Bt(){let dt=Math.tan(Vs.degToRad(a.fov/2))*1.2,xt=dt*.55;Gt.scale.set(dt*a.aspect*2.05,xt,1),Gt.position.set(0,-dt+xt/2,-1.2)}function Ct($){let dt={h:0,s:0,l:0};$.getHSL(dt),At.uC0.value.setHSL(dt.h,1,.82),At.uC1.value.setHSL(dt.h,1,.6),At.uC2.value.setHSL(dt.h,.95,.45),At.uC3.value.setHSL((dt.h+.03)%1,.9,.22)}let Pt=new T;function Wt($,dt="chest"){if($==="me")return dt==="staff"||dt==="head"?(X.gem.getWorldPosition(Pt),Pt.clone()):a.localToWorld(new T(It(-.15,.15),-.1,-1.4));let xt=R.get($);if(!xt)return new T(0,1.4,-3);if(xt.model&&dt==="staff")return xt.model.crystal.getWorldPosition(Pt),Pt.clone();let mt=xt.group.position.clone(),Rt=xt.height*xt.group.scale.y;return $==="boss"&&dt==="mouth"?mt.add(new T(-xt.height*.55,xt.height*.62,.3)):mt.add(new T(0,Rt*(dt==="head"?.85:.6),0))}let ee=[],at=0;function Ut($,dt,xt={}){if(n&&at++&1)return;let mt=new jn(new Zn({map:ct,color:dt,blending:xt.solid?bi:fn,depthWrite:!1,transparent:!0,opacity:xt.opacity??1}));mt.position.copy($),mt.scale.setScalar(xt.size??.25),o.add(mt),ee.push({sprite:mt,vel:xt.vel??new T,life:0,max:xt.life??.6,grow:xt.grow??0,gravity:xt.gravity??0})}function vt($,dt,xt=26,mt=3.2,Rt=.22){for(let Dt=0;Dt<xt;Dt++){let kt=new T(It(-1,1),It(-.6,1.2),It(-1,1)).normalize().multiplyScalar(It(mt*.4,mt));Ut($,dt,{vel:kt,size:It(Rt*.6,Rt*1.4),life:It(.4,.9),gravity:-3})}Ut($,dt,{size:.6,grow:6,life:.35,opacity:.9})}function Tt($,dt,xt=1){let mt=$.group.position,Rt=$.model?.45:$.height*.35;for(let Dt=0;Dt<xt;Dt++){let kt=$.group.scale.y;Ut(new T(mt.x+It(-Rt,Rt)*kt,mt.y+It(.05,$.height*.45)*kt,mt.z+It(-Rt,Rt)*.5*kt),dt,{size:It(.35,.7)*kt,vel:new T(It(-.1,.1),It(1.4,2.6),0),life:It(.35,.65),grow:-.9,opacity:.75,solid:!0}),Ut(new T(mt.x+It(-Rt,Rt)*.6*kt,mt.y+It(.05,$.height*.35)*kt,mt.z),dt,{size:It(.3,.5)*kt,vel:new T(0,It(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Ut(new T(mt.x+It(-Rt,Rt)*kt,mt.y+It(.2,$.height*.9)*kt,mt.z),16777215,{size:It(.05,.1)*kt,vel:new T(0,It(1.5,3),0),life:.5})}}let Xt=[];function $t($){for(let xt=0;xt<2;xt++){let mt=[],Rt=$.clone().add(new T(It(-1.5,1.5),9,It(-1,1)));for(let kt=0;kt<=12;kt++){let xe=Rt.clone().lerp($,kt/12);kt>0&&kt<12&&xe.add(new T(It(-.45,.45),It(-.2,.2),It(-.3,.3))),mt.push(xe)}let Dt=new rc(new be().setFromPoints(mt),new Po({color:xt?16777215:10475775,transparent:!0,blending:fn,depthWrite:!1}));o.add(Dt),Xt.push({line:Dt,life:0});for(let kt=0;kt<mt.length-1;kt++){let xe=mt[kt].distanceTo(mt[kt+1]);for(let ae=0;ae<xe;ae+=.09)Ut(mt[kt].clone().lerp(mt[kt+1],ae/xe),xt?16777215:9425151,{size:xt?.12:.3,life:.28,opacity:xt?1:.7})}}let dt=new mi(12576511,60,16,2);dt.position.copy($).add(new T(0,2,1)),o.add(dt),setTimeout(()=>o.remove(dt),160),vt($,12576511,30,4,.18)}let fe=[];function Ve($,dt,xt="#ffd479"){let mt=new jn(new Zn({map:gx(dt,xt),transparent:!0,depthWrite:!1,depthTest:!1}));mt.position.copy(Wt($,"head")).add(new T(It(-.3,.3),.4,.3));let Rt=$==="me"?.9:1.3;mt.scale.set(Rt,Rt/2,1),mt.renderOrder=10,o.add(mt),fe.push({sprite:mt,life:0})}let rn=document.createElement("div");rn.className="arena3d-hit",document.body.append(rn);function ye($="255,40,60",dt=""){rn.style.setProperty("--hit",$),rn.className="arena3d-hit",rn.offsetWidth,rn.className=`arena3d-hit on ${dt}`}let sn=0,Gn=$=>{mx()||(sn=Math.max(sn,$))},$n=[],Tr=new Set,_i=new Map;function Qs($){let dt=_i.get($);if(dt)return dt;let xt=document.createElement("canvas");xt.width=xt.height=128;let mt=xt.getContext("2d"),Rt=mt.createRadialGradient(64,64,0,64,64,64);Rt.addColorStop(0,"#ffffff"),Rt.addColorStop(.22,$),Rt.addColorStop(.5,`${$}88`),Rt.addColorStop(1,`${$}00`),mt.fillStyle=Rt,mt.fillRect(0,0,128,128);let Dt=new An(xt);return Dt.colorSpace=on,_i.set($,Dt),Dt}function Yo($,dt,xt,mt,Rt,Dt,kt=!1){let xe=Qs(mt),ae=new jn(new Zn({map:xe,transparent:!0,depthWrite:!1,blending:fn}));ae.scale.set(Rt*.42,Rt*.42,1),ae.position.copy($),ae.renderOrder=5,o.add(ae);let Ht=kt?$.clone().lerp(dt,.5).add(new T(se(.28,$.clone().lerp(dt,.5).z)-$.clone().lerp(dt,.5).x,-.15,0)):$.clone().lerp(dt,.5).add(new T(It(-.6,.6),1.2+$.distanceTo(dt)*.08,0));return new Promise(wt=>$n.push({sprite:ae,from:$,to:dt,mid:Ht,t:0,dur:Dt,color:new zt(mt),size:Rt,done:wt,trailAt:0,incoming:kt}))}let Qi="battle",tr="",es="",Ce=null,er=new Map,Rr=[],yi=new Yi(16777215,1);yi.visible=!1,o.add(yi,yi.target);let Rc=($,dt)=>new T($[0],$[2]-dt,-$[1]);function Ac($,dt){Ce&&(o.remove(Ce.group),t.preview||Ce.dispose(),Ce=null);for(let mt of Rr)o.remove(mt);Rr.length=0;let xt=`${$}-${dt}-${n}`;try{Ce=t.preview&&er.get(xt)||Eu($,dt,n)}catch(mt){console.warn("3D arena failed, using the classic one",mt),Ce=null}if(Ce&&t.preview&&er.set(xt,Ce),g.visible=!Ce,j.position.y=Ce?.1:.03,yi.visible=!!Ce,!Ce){es="";return}Ce.group.rotation.x=-Math.PI/2,Ce.group.position.y=-Ce.floor,o.add(Ce.group),Ce.group.traverse(mt=>{mt.name==="centre-pattern"&&(mt.visible=!1)});for(let mt of n?Ce.lights.slice(0,2):Ce.lights){let Rt=new mi(new zt(...mt.color),mt.intensity*8,mt.dist,2);Rt.position.copy(Rc(mt.pos,Ce.floor)),Rt.userData.base=Rt.intensity,Rt.userData.flicker=mt.flicker??0,o.add(Rt),Rr.push(Rt)}}function O($){let dt=$.key.dir;yi.color.setRGB(...$.key.color),yi.intensity=$.key.intensity*.35,yi.position.set(dt[0]*50,dt[2]*50,-dt[1]*50),yi.target.position.set(0,0,0),h.color.setRGB(...$.ambient.sky),h.groundColor.setRGB(...$.ambient.ground),h.intensity=$.ambient.intensity,u.intensity=0,m.intensity*=.45,d.intensity*=.5;let xt=o.fog;xt.color.setRGB(...$.fog.color),xt.near=$.fog.near,xt.far=$.fog.far,e.setClearColor(xt.color)}let ft=0,yt=0,Mt=0,ut=new wn,Ft=new wn,Zt=!1,Kt=!1,jt=new zt(16777215),te=null;function se($,dt){let xt=c.z-dt,mt=Math.tan(Vs.degToRad(a.fov/2))*xt;return $*mt*a.aspect}function ne(){if(!te)return;let $=te,dt=R.get("opp");dt?.model&&dt.group.scale.setScalar(1.3),dt&&dt.group.position.set(se(a.aspect<1?.08:$.layout==="deck"?.36:.46,-2.2),0,-2.2);let xt=R.get("boss");xt&&xt.group.position.set(se(a.aspect<1?.15:.5,-5.5),0,-5.5),$.allies.forEach((Rt,Dt)=>{let kt=R.get(`ally:${Rt.id}`);kt&&kt.group.position.set(se(-.36+Dt*.13,-.6-Dt*1.1),0,-.6-Dt*1.1)});let mt=(xt??dt)?.group.position;for(let[Rt,Dt]of R){if(!Dt.model)continue;let kt=Rt==="opp"?c:mt??new T(0,0,-3);Dt.model.root.rotation.y=Math.atan2(kt.x-Dt.group.position.x,kt.z-Dt.group.position.z)}}function Ie($){te=$,Qi=$.layout,q();let dt=E[fu($.me.character??"wizard")]??E.wizard;w.color.set(dt.sleeve),rt.color.set(dt.skin),rt.metalness=$.me.character==="knight"?.12:0,ns(),lt($.me.staff??"verdant"),_t=!1,B.visible=!0,et="ready",Lt=null,At.uAmount.value=0,Gt.visible=!1,$.opp&&H("opp",$.opp),$.boss&&H("boss",$.boss);for(let xt of $.allies)H(`ally:${xt.id}`,xt);ne(),Fe($)}function Fe($){let dt=Mx[$.time];h.color.set(dt.sky),h.groundColor.set(dt.ground),h.intensity=dt.hemi*1.25,m.intensity=$.time==="night"?1.3:$.time==="sunset"?1:.7,u.color.set(dt.sun),u.intensity=dt.sunInt,u.position.set(...dt.sunPos),d.intensity=$.time==="night"?9:5;for(let xt of Y)xt.base=dt.torch;Z.color.set(dt.motes),jt=new zt(dt.spriteTint),tr!==$.bgKey&&(tr=$.bgKey,Ac($.bgKey.split("-")[0],$.time)),Ce?O(Ce):es!==$.bgKey&&(es=$.bgKey,o.fog.near=20,o.fog.far=58,y($.bgKey.split("-")[0]),xx($.bgSvg,(xt,mt,Rt)=>{_.map?.dispose(),_.map=xt,_.needsUpdate=!0,o.fog.color.copy(mt).lerp(Rt,.35),p.color.copy(mt).multiplyScalar(.9),M.color.copy(mt).lerp(new zt(5212730),.45).multiplyScalar(1.15),A.color.copy(mt).lerp(new zt(1522212),.5),e.setClearColor(Rt)}))}let Ge=new Nt,Ke=new Nt,we=.32,ie=.13,Me={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},Pe=$=>{$.pointerType!=="mouse"||$.buttons||$.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||Ge.set($.clientX/innerWidth*2-1,$.clientY/innerHeight*2-1)};addEventListener("pointermove",Pe,{passive:!0});let Je={yaw:0,pitch:0,at:0,live:0},nr=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?-1:1,On=()=>((screen.orientation?.angle??window.orientation??0)%360+360)%360,Ar=$=>{let dt=$.rotationRate;if(!dt||dt.beta===null||dt.gamma===null||!eo)return;let xt=performance.now(),mt=Je.at?Math.min(.1,(xt-Je.at)/1e3):0;Je.at=xt,Je.live=xt;let Rt=On(),Dt=$.accelerationIncludingGravity,kt=Dt&&Dt.x!==null&&Dt.y!==null&&Dt.z!==null?Math.hypot(Dt.x,Dt.y,Dt.z):0,xe=kt>4?(dt.beta*Dt.x+dt.gamma*Dt.y+(dt.alpha??0)*Dt.z)/kt*nr:Rt===90?dt.beta:Rt===270?-dt.beta:Rt===180?-dt.gamma:dt.gamma,ae=Rt===90?-dt.gamma:Rt===270?dt.gamma:Rt===180?-dt.beta:dt.beta,Ht=Math.exp(-mt/2.2);Je.yaw=(Je.yaw+xe*mt)*Ht,Je.pitch=(Je.pitch+ae*mt)*Ht,Ge.set(Math.max(-1,Math.min(1,-Je.yaw/16)),Math.max(-1,Math.min(1,-Je.pitch/14)))},je=matchMedia("(pointer: coarse)").matches&&"DeviceMotionEvent"in window,ti=()=>{removeEventListener("touchend",ti);let $=DeviceMotionEvent;$.requestPermission&&$.requestPermission().then(dt=>{dt==="granted"&&addEventListener("devicemotion",Ar)}).catch(()=>{})};je&&(DeviceMotionEvent.requestPermission?addEventListener("touchend",ti,{passive:!0}):addEventListener("devicemotion",Ar));function ns(){let $=Qi==="deck"?G:F,dt=Qi==="deck"?.56:.72;if(a.aspect>=1.2){tt.copy($),B.scale.setScalar(dt);return}let xt=Math.tan(Vs.degToRad(a.fov/2))*-$.z,mt=xt*a.aspect;tt.set(mt*.78,-xt*.62,$.z),B.scale.setScalar(dt*Math.max(.5,Math.min(1,a.aspect*.9)))}function hn(){let $=i.clientWidth||innerWidth,dt=i.clientHeight||innerHeight;e.setSize($,dt,!1),a.aspect=$/dt,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),ne(),Bt(),ns()}addEventListener("resize",hn);let is=0,Zo=0,to=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!eo||i.clientWidth===is&&i.clientHeight===Zo||(is=i.clientWidth,Zo=i.clientHeight,hn())}):null;to?.observe(i);let Jf=new zt(6974072),jf=new zt(16722474),wu=new zt(9428223),Qf=new zt(2784511),Su=new zt(16738842);function td($,dt){let xt=dt<$.hurtUntil,mt=dt<$.frostUntil,Rt=dt<$.burnUntil;if($.model&&$.ko){for(let Dt of $.model.materials)Dt.mat.color.copy(Dt.color).lerp(Jf,.55),Dt.mat.emissive.setRGB(0,0,0);return}if($.model){if(mt!==$.frosted){$.frosted=mt;for(let Dt of $.model.materials)Dt.mat.opacity=mt?.5:1,Dt.mat.depthWrite=!mt}for(let Dt of $.model.materials)Dt.mat.color.copy(Dt.color),mt&&Dt.mat.color.lerp(wu,.75),xt?(Dt.mat.emissive.copy(jf),Dt.mat.emissiveIntensity=.6):mt?(Dt.mat.emissive.copy(Qf),Dt.mat.emissiveIntensity=.45):Rt?(Dt.mat.color.lerp(Su,.35),Dt.mat.emissive.copy(Su),Dt.mat.emissiveIntensity=.55+.3*Math.sin(dt/40)):(Dt.mat.emissive.copy(Dt.emissive),Dt.mat.emissiveIntensity=1)}else $.spriteMat&&($.spriteMat.color.copy(xt?new zt(1,.35,.35):mt?wu:Rt?new zt(1,.7,.5):jt),$.spriteMat.opacity=mt?.6:$.ko?$.spriteMat.opacity:1)}let eo=!1,Cc=0,$o=performance.now(),Qe=0,Pc=!1,rs=0,Ko=0,no=0,Ic=0;function ed($){if(r||document.hidden)return;if(Ic<45){Ic++;return}if(Ko++,no+=$,no<2500)return;let dt=Ko*1e3/no;Ko=0,no=0,!(dt>=(n?22:34))&&(n?(r=!0,e.setPixelRatio(s()),hn()):io.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(dt),lowRes:r}})))}function Tu($){Cc=requestAnimationFrame(Tu),t.preview||ed($-$o);let dt=Math.min(1,Math.max(0,($-$o)/1e3)),xt=Math.min(.05,dt);$o=$,Qe+=xt;let mt=performance.now(),Rt=!1;Ke.lerp(Ge,Rt?1:performance.now()-Je.live<300?Math.min(1,dt*14):.05);let Dt=Rt?0:Math.sin(Qe*.7)*.025;if(n)a.position.set(c.x+Ke.x*.12,c.y-Ke.y*.05+Dt,c.z),a.lookAt(l.clone().add(new T(Ke.x*1.5,-Ke.y*.75,0))),Me.yaw=0,Me.pitch=0;else{Me.yaw=-Ke.x*we,Me.pitch=-Ke.y*ie,a.position.set(c.x,c.y+Dt,c.z);let Ht=l.clone().sub(c).applyAxisAngle(new T(0,1,0),Me.yaw),wt=Ht.clone().cross(new T(0,1,0)).normalize();Ht.applyAxisAngle(wt,Me.pitch),a.lookAt(c.clone().add(Ht))}rs+=((Pc?1:0)-rs)*Math.min(1,xt*4);let kt=R.get("opp");if(rs>.001&&kt){let Ht=kt.group.position,wt=rs*rs*(3-2*rs);a.position.lerp(new T(Ht.x+1.1,1.75+Dt,Ht.z+3.4),wt),a.lookAt(new T(0,0,-1).applyQuaternion(a.quaternion).multiplyScalar(4).add(a.position).lerp(new T(Ht.x-.1,1.45,Ht.z),wt))}!t.preview&&eo&&te&&(te.opp||te.allies.length)&&$-Me.sentAt>150&&(Math.abs(Me.yaw-Me.sentYaw)>.02||Math.abs(Me.pitch-Me.sentPitch)>.02)&&(Me.sentAt=$,Me.sentYaw=Me.yaw,Me.sentPitch=Me.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+Me.yaw.toFixed(3),pitch:+Me.pitch.toFixed(3)}}))),sn>0&&(a.position.add(new T(It(-1,1),It(-1,1),0).multiplyScalar(sn)),a.rotation.z+=It(-1,1)*sn*.15,sn=Math.max(0,sn-xt*1.1)),yt+=(ft-yt)*Math.min(1,xt*6),Mt=Math.max(0,Mt-xt*2.2),ut.x+=(Ft.x-ut.x)*Math.min(1,xt*14),ut.y+=(Ft.y-ut.y)*Math.min(1,xt*14),ut.z+=(Ft.z-ut.z)*Math.min(1,xt*14),Mt<=0&&Ft.set(0,0,0);let xe=.5+.5*Math.sin(Qe*6);{let Ht=Math.max(0,1-(mt-k)/380),wt=Ht>0?Math.sin(Ht*Math.PI):0,Se=Math.min(1,yt);bt+=((Se>.05&&!Rt?Math.min(1,.5+Se*.6):0)-bt)*Math.min(1,xt*3),gt+=xt*(2.6+Se*1.4);let mn=Math.sin(gt),ir=Math.sin(gt*2)/2;B.position.set(tt.x-Ke.x*.04+mn*.06*bt,tt.y+Ke.y*.03+(Rt?0:Math.sin(Qe*1.6)*.008)+Se*.03+ir*.11*bt,tt.z-wt*.35),K.rotation.set(Se*.25-wt*.75+ut.x*.3+ir*.18*bt,ut.y*.3,.2-mn*.24*bt+ut.z*.3);let Wn=et==="ready"?1:0;if(et==="growing"){let Ye=Math.min(1,(mt-ht)/it);if(Wn=Ye*Ye*(3-2*Ye),Ye>=1)et="ready";else if(!Rt){X.gem.getWorldPosition(Pt);for(let de=0;de<2;de++){let Xe=Pt.clone().add(new T(It(-.4,.4),It(-.4,.4),It(-.4,.4)));Ut(Xe,X.color,{size:It(.025,.06),vel:Pt.clone().sub(Xe).multiplyScalar(2.8),life:.36})}}}if(X.gem.scale.setScalar(Wn),X.gemMat.emissiveIntensity=.7+Se*(1.6+xe*1.2)+wt*3,nt.intensity=(.5+Se*4+wt*6)*Wn,X.glow.scale.setScalar((.3+Se*(.32+xe*.18)+wt*.6)*Wn),X.glow.material.opacity=.3+Se*.35,X.gem.rotation.y+=xt*(.8+Se*6),X.update(Qe,xt,Se),Wn>.9&&!Rt&&B.visible&&(X.gem.getWorldPosition(Pt),bt>.25&&Ut(Pt.clone(),X.color,{size:It(.03,.05),life:.55,opacity:.9}),Se>.2&&Math.random()<Se*.8)){let Ye=Pt.clone().add(new T(It(-.35,.35),It(-.35,.35),It(-.35,.35)));Ut(Ye,X.color.clone().lerp(new zt(16777215),.4),{size:It(.02,.05),vel:Pt.clone().sub(Ye).multiplyScalar(2.6),life:.38})}if(Lt&&!Rt&&B.visible)for(let Ye=0;Ye<2;Ye++){let de=K.localToWorld(new T(It(-.05,.05),It(-.15,1.3),It(-.05,.05)));Ut(de,Lt,{size:It(.05,.12),vel:new T(It(-.05,.05),It(.35,.8),0),life:It(.25,.45),solid:Math.random()<.4,opacity:.9})}At.uTime.value=Rt?0:Qe,At.uAmount.value+=((Lt&&(B.visible||Pc)?1:0)-At.uAmount.value)*Math.min(1,dt*3),Gt.visible=At.uAmount.value>.01}for(let[Ht,wt]of R){let Se=wt.group.getObjectByName("circle");if(Se&&(Se.rotation.z+=xt*.4),td(wt,mt),wt.ko)continue;let mn=Math.max(0,wt.lungeUntil-mt)/450;if(wt.model){let de=wt.model;de.body.position.y=Rt?0:Math.sin(Qe*2+wt.height*3)*.02;let Xe=wt.look,rr=mt-Xe.at>4e3,Jo=rr?.22*Math.sin(Qe*.31+Xe.seed)*Math.sin(Qe*.13+Xe.seed*2):Xe.yaw,Lc=rr?.06*Math.sin(Qe*.23+Xe.seed*3):Xe.pitch;Xe.curYaw+=(Jo-Xe.curYaw)*Math.min(1,xt*7),Xe.curPitch+=(Lc-Xe.curPitch)*Math.min(1,xt*7),de.head.rotation.set(-Xe.curPitch*.8,Xe.curYaw*.7,0),de.body.rotation.y=Xe.curYaw*.3;let Cr=1-mn,Pr=mn<=0?0:Cr<.18?-.35*(Cr/.18):Cr<.4?-.35+1.35*((Cr-.18)/.22):1-((Cr-.4)/.6)**2;de.body.rotation.x=Math.max(0,Pr)*.2,de.staffPivot.rotation.x=Pr*1.9;let Li=Ht==="me"?yt:(Ht==="opp"||Ht.startsWith("ally:"))&&Zt?Qi==="deck"?.7:.45:0,ro=Ht==="me"?0:Li*(1-Math.max(0,Pr)),id=-.15-Li*.75-Math.max(0,Pr)*.9+(Ht==="me"?ut.x:0)+Math.sin(Qe*4.4)*.22*ro;de.arm.rotation.x+=(id-de.arm.rotation.x)*Math.min(1,xt*10),de.arm.rotation.z=ri+(Ht==="me"?ut.z:0)+Math.sin(Qe*2.2)*.32*ro,de.arm.rotation.y=Ht==="me"?ut.y:0;let Ir=Ht==="me"?yt:Li;de.crystalMat.emissiveIntensity=1.2+Ir*(3+xe*2)+mn*3,de.glow.scale.setScalar(.45+Ir*(.5+xe*.3)+mn*.6),de.glow.material.opacity=.45+Ir*.5,de.crystal.rotation.y+=xt*(.8+Ir*6),de.staff.update(Qe,xt,Ir),Ir>.5&&Math.random()<Ir*.6&&(de.crystal.getWorldPosition(Pt),Ut(Pt.clone().add(new T(It(-.1,.1),It(-.1,.1),It(-.1,.1))),de.staff.color.getHex(),{size:It(.03,.08),vel:new T(It(-.2,.2),It(.2,.6),0),life:.7}))}else wt.sprite&&(wt.sprite.position.y=Rt?0:Math.abs(Math.sin(Qe*2))*.05,wt.sprite.position.z=mn*.4);let ir=Ht==="opp"&&Zt&&Qi==="deck"||Ht==="boss"&&Kt,Wn=wt.aura.material;Wn.opacity+=((ir?.55+.2*Math.sin(Qe*5):wt.flame?.35:0)-Wn.opacity)*Math.min(1,xt*5),Wn.color.copy(Ht==="boss"?new zt(16742954):wt.flame??new zt(11832575)),wt.flame&&Tt(wt,wt.flame,2);let Ye=wt.model?.eyes;if(Ye?.visible){let de=Math.max(0,wt.eyesFlashUntil-mt)/1400,Xe=1+.25*Math.sin(Qe*7)+de*3.5;for(let rr of Ye.children)rr.isSprite&&rr.scale.setScalar(.06*Xe);!wt.flame&&de<=0&&(Ye.visible=!1)}if(mt<wt.burnUntil&&Tt(wt,Math.random()<.5?16734746:16756784,3),mt<wt.frostUntil&&Math.random()<.3&&Tt(wt,13628159,1),Ht==="boss"&&Kt&&Math.random()<.8){let de=Wt("boss","mouth"),Xe=de.clone().add(new T(It(-1.5,1.5),It(-1,1),It(-1,1)));Ut(Xe,16751162,{size:.12,vel:de.clone().sub(Xe).multiplyScalar(1.6),life:.55})}}for(let Ht of Y){let wt=.85+.15*Math.sin(Qe*9+Ht.phase)+.08*Math.sin(Qe*23+Ht.phase*2);Ht.light.intensity=Ht.base*wt,Ht.flame.scale.set(1.2*wt,1.8*(.9+.2*wt),1)}if(j.rotation.z+=xt*.05,Ce){Ce.update(Qe*30);for(let Ht of Rr)Ht.userData.flicker&&(Ht.intensity=Ht.userData.base*(1-Ht.userData.flicker*(.5+.5*Math.sin(Qe*9+Ht.position.x)*Math.sin(Qe*23+Ht.position.z))))}let ae=L.attributes.position;for(let Ht=0;Ht<pt;Ht++){let wt=ae.getY(Ht)+xt*(.12+V[Ht]%1*.2);wt>7.5&&(wt=0),ae.setY(Ht,wt),ae.setX(Ht,ae.getX(Ht)+Math.sin(Qe*.5+V[Ht])*xt*.15)}ae.needsUpdate=!0,Z.opacity=.55+.35*Math.sin(Qe*1.3);for(let Ht=$n.length-1;Ht>=0;Ht--){let wt=$n[Ht];wt.t+=xt/wt.dur;let Se=Math.min(1,wt.t),mn=Se*Se*(1.6-.6*Se),ir=wt.from.clone().lerp(wt.mid,mn),Wn=wt.mid.clone().lerp(wt.to,mn);wt.sprite.position.copy(ir.lerp(Wn,mn)),wt.gem&&(wt.gem.position.copy(wt.sprite.position),wt.gem.rotation.y+=xt*12,wt.gem.rotation.x+=xt*7);let Ye=wt.incoming?.55+mn*.25:.55+mn*.8,de=wt.sprite.material;wt.incoming&&(de.opacity=1-.75*Math.max(0,Math.min(1,(Se-.35)/.5))),wt.sprite.scale.set(wt.size*.42*Ye,wt.size*.42*Ye,1),wt.trailAt-=xt,wt.trailAt<=0&&!Rt&&(wt.trailAt=.016,Ut(wt.sprite.position,wt.color,{size:It(.05,.13)*wt.size,life:.35,opacity:.8,vel:new T(It(-.3,.3),It(-.3,.3),It(-.3,.3))})),Se>=1&&(o.remove(wt.sprite),de.dispose(),wt.gem&&o.remove(wt.gem),$n.splice(Ht,1),wt.done())}for(let Ht=ee.length-1;Ht>=0;Ht--){let wt=ee[Ht];if(wt.life+=xt,wt.life>=wt.max){o.remove(wt.sprite),wt.sprite.material.dispose(),ee.splice(Ht,1);continue}wt.vel.y+=wt.gravity*xt,wt.sprite.position.addScaledVector(wt.vel,xt),wt.grow&&wt.sprite.scale.multiplyScalar(1+wt.grow*xt),wt.sprite.material.opacity=1-wt.life/wt.max}for(let Ht=Xt.length-1;Ht>=0;Ht--){let wt=Xt[Ht];wt.life+=xt,wt.line.material.opacity=wt.life<.08||wt.life>.14&&wt.life<.2?1:.15,wt.life>.32&&(o.remove(wt.line),wt.line.geometry.dispose(),wt.line.material.dispose(),Xt.splice(Ht,1))}for(let Ht=fe.length-1;Ht>=0;Ht--){let wt=fe[Ht];wt.life+=xt,wt.sprite.position.y+=xt*.8,wt.sprite.material.opacity=Math.min(1,2.2-wt.life*2),wt.life>1.1&&(o.remove(wt.sprite),wt.sprite.material.map?.dispose(),wt.sprite.material.dispose(),fe.splice(Ht,1))}e.render(o,a)}function nd($,dt,xt){let mt=R.get($),Rt=performance.now();dt==="bolt"&&($t(mt?Wt($,"head"):xt),$==="me"&&ye("190,230,255","bolt")),dt==="frost"&&(mt&&(mt.frostUntil=Rt+1100),vt(xt,13628159,30,2.5,.16),$==="me"&&ye("140,210,255","frost")),dt==="fire"&&(mt&&(mt.burnUntil=Rt+1100),vt(xt,16742954,36,3.4,.24),$==="me"&&ye("255,120,30","fire"))}let io={setup:Ie,setActive($){$!==eo&&(eo=$,i.classList.toggle("on",$),$?(hn(),$o=performance.now(),Ic=0,Ko=0,no=0,Cc=requestAnimationFrame(Tu)):cancelAnimationFrame(Cc))},async cast($,dt,xt,mt={}){let Rt=mt.kind??"attack",Dt=$==="me"||$.startsWith("ally:"),kt=Rt==="heal"?"#5dffa8":Rt==="mana"?"#ffd479":mt.fx==="bolt"?"#bfe6ff":mt.fx==="frost"?"#8fdcff":mt.fx==="fire"?"#ff8a3a":Dt?"#a98bff":"#ff6b6b",xe=R.get($);if(xe&&(xe.lungeUntil=performance.now()+450),$==="me"&&(yt=0,ft=0),Rt!=="attack"){if($==="me"&&et!=="gone"&&B.visible){k=performance.now(),et="gone";let de=new St(X.gem.geometry,X.gemMat),Xe=Wt("me","staff"),rr=Wt("me","chest"),Jo=Xe.clone().lerp(rr,.5).add(new T(0,.35,0));de.position.copy(Xe),de.scale.setScalar(1.3),o.add(de);let Lc=performance.now();await new Promise(Cr=>{let Pr=()=>{let Li=Math.min(1,(performance.now()-Lc)/520),ro=Xe.clone().lerp(Jo,Li).lerp(Jo.clone().lerp(rr,Li),Li);de.position.copy(ro),de.rotation.y+=.3,de.scale.setScalar(1.3*(1-Li*.7)),Math.random()<.8&&Ut(ro.clone(),kt,{size:It(.03,.07),life:.35,opacity:.9}),Li<1?requestAnimationFrame(Pr):(o.remove(de),Cr())};Pr()})}let Ye=Wt($);for(let de=0;de<30;de++)Ut(Ye.clone().add(new T(It(-.5,.5),It(-.8,.2),It(-.3,.3))),kt,{size:It(.08,.2),vel:new T(It(-.2,.2),It(.8,1.8),0),life:It(.6,1.1)});$==="me"&&ye(Rt==="heal"?"80,255,160":"255,212,121"),mt.damage&&Ve($,`+${mt.damage}`,kt);return}let ae=Wt($,$==="boss"?"mouth":"staff"),Ht=dt==="me"&&B.visible,wt=Wt(dt,"chest"),Se=Ht?wt.clone().add(new T(se(.42,wt.z)-wt.x,-.5,0)):wt,mn=(mt.crit?1.5:1)*1.15,ir=Yo(ae,Se,xt,kt,mn,.85,Ht);if($n[$n.length-1].target=dt,$==="me"){k=performance.now(),et="gone";let Ye=new St(X.gem.geometry,X.gemMat);Ye.scale.setScalar(1.5),Ye.position.copy(ae),o.add(Ye),$n[$n.length-1].gem=Ye}await ir,Ht?vt(Se,kt,mt.crit?14:8,mt.crit?1.6:1.1,.12):vt(Se,kt,mt.crit?46:28,mt.crit?4.4:3.2,.2);let Wn=R.get(dt);Wn&&(Wn.hurtUntil=performance.now()+450),nd(dt,mt.fx,Se),dt==="me"?(mt.fx||ye(),Gn(mt.crit?.16:.09)):Gn(mt.crit?.07:.035),mt.damage&&Ve(dt,`\u2212${mt.damage}${mt.crit?"!":""}`,dt==="me"?"#ff6b81":mt.crit?"#ff9a3a":"#ffd479")},fizzle($){let dt=Wt($,$==="boss"?"head":"staff");if($!=="me")for(let xt=0;xt<14;xt++)Ut(dt,10132136,{size:It(.1,.25),vel:new T(It(-.6,.6),It(.3,1),It(-.3,.3)),life:.8,opacity:.6});if($==="me"){if(yt=0,et!=="gone"&&B.visible){X.gem.getWorldPosition(Pt);for(let xt=0;xt<16;xt++)Ut(Pt.clone(),Math.random()<.5?X.color:10132136,{size:It(.02,.05),vel:new T(It(-.8,.8),It(-.2,.9),It(-.5,.5)),life:It(.4,.7),gravity:-2.5})}et="gone"}},ko($){if($n.some(Rt=>Rt.target===$)&&!Tr.has($)){Tr.add($);let Rt=performance.now(),Dt=()=>{if($n.some(kt=>kt.target===$)&&performance.now()-Rt<2500){setTimeout(Dt,60);return}setTimeout(()=>{Tr.delete($),io.ko($)},120)};Dt();return}if(Tr.has($))return;if($==="me"){if(_t)return;_t=!0,Lt=null,X.gem.getWorldPosition(Pt),vt(Pt.clone(),10132136,18,1.6,.1),B.visible=!1;return}let dt=R.get($);if(!dt||dt.ko)return;dt.ko=!0,dt.flame=null,dt.aura.material.opacity=0;let xt=performance.now(),mt=()=>{let Rt=Math.min(1,(performance.now()-xt)/700),Dt=Rt*Rt;dt.model?(dt.model.root.rotation.z=Math.PI/2*Dt,dt.model.root.position.y=.24*Dt):dt.spriteMat&&(dt.spriteMat.rotation=Math.PI/2*Rt*-1,dt.spriteMat.opacity=1-Rt*.6),Rt<1&&requestAnimationFrame(mt)};mt(),vt(Wt($),16777215,40,3,.25)},onfire($,dt,xt){if($==="me"){Lt=dt&&!_t?new zt(xt??"#6ee7ff"):null,Lt&&Ct(Lt);return}let mt=R.get($);mt&&(mt.flame=dt?new zt(xt??"#6ee7ff"):null),mt?.model?.eyes&&(mt.model.eyes.visible=dt)},focusOpp($){Pc=$,B.visible=!$},prewarm($,dt){if(!t.preview)return;let xt=$.filter(Dt=>!er.has(`${Dt}-${dt}-${n}`)),mt=Dt=>(globalThis.requestIdleCallback??(kt=>setTimeout(kt,200)))(Dt,{timeout:2e3}),Rt=()=>{let Dt=xt.shift();if(!Dt)return;let kt=`${Dt}-${dt}-${n}`;if(!er.has(kt))try{let xe=Eu(Dt,dt,n);xe&&er.set(kt,xe)}catch{}mt(Rt)};mt(Rt)},setBackground($,dt,xt){te&&(te={...te,bgKey:$,time:dt,bgSvg:xt},Fe(te))},flashEyes($){let dt=R.get($);dt?.model?.eyes&&(dt.model.eyes.visible=!0,dt.eyesFlashUntil=performance.now()+1400)},channel($){ft=Math.max(0,Math.min(1,$))},twitch(){Et(),Mt=.35,Ft.set(It(-.35,.25),It(-.25,.25),It(-.3,.3)),Math.random()<.6&&et==="ready"&&(X.gem.getWorldPosition(Pt),Ut(Pt.clone(),X.color.clone().lerp(new zt(16777215),.5),{size:It(.04,.09),vel:new T(It(-.6,.6),It(.2,.9),It(-.3,.3)),life:.5}))},thrust(){k=performance.now(),X.gem.getWorldPosition(Pt),vt(Pt.clone(),X.color,18,1.6,.08)},oppChannel($){Zt=$},inhale($){Kt=$},breath($,dt){Kt=!1;let xt=Wt("boss","mouth");for(let mt=0;mt<160;mt++)setTimeout(()=>{let Dt=($.length?Wt($[mt%$.length]):a.localToWorld(new T(0,-.2,-1))).clone().add(new T(It(-1.5,1.5),It(-.8,.8),0)).sub(xt).normalize().multiplyScalar(It(7,11));Ut(xt,Math.random()<.4?16765530:16734746,{size:It(.3,.7),vel:Dt,life:It(.6,.9),grow:1.2})},mt*5);setTimeout(()=>{for(let mt of $){let Rt=R.get(mt);Rt&&(Rt.hurtUntil=performance.now()+500,Rt.burnUntil=performance.now()+900),Ve(mt,`\u2212${dt}`,"#ff9a3a")}$.includes("me")&&(ye("255,120,30"),Gn(.16))},450)},claw($,dt){let xt=R.get("boss");xt&&(xt.lungeUntil=performance.now()+450),setTimeout(()=>{let mt=R.get($);mt&&(mt.hurtUntil=performance.now()+450),$==="me"&&(ye("255,40,60","claw"),Gn(.13)),Ve($,`\u2212${dt}`,"#ff6b81")},200)},float:Ve,look($,dt,xt){let mt=R.get($);!mt||!Number.isFinite(dt)||!Number.isFinite(xt)||(mt.look.yaw=Math.max(-we,Math.min(we,dt)),mt.look.pitch=Math.max(-ie,Math.min(ie,xt)),mt.look.at=performance.now())},setLite($){let dt=n!==$;n=$,dt&&Ce&&te&&(tr="",Ie(te)),e.setPixelRatio(s()),D.count=$?900:b,L.setDrawRange(0,$?90:pt),hn()},dispose(){io.setActive(!1),to?.disconnect(),removeEventListener("pointermove",Pe),removeEventListener("devicemotion",Ar),removeEventListener("touchend",ti),removeEventListener("resize",hn),rn.remove(),Ce&&(Ce.dispose(),Ce=null),e.dispose()}};n&&io.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return X},get gemState(){return et},scene:o,camera:a,renderer:e}),hn();try{e.compile(o,a)}catch{}return io}globalThis.KWArena3D=vx;globalThis.KWStaffPreview=Af;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
