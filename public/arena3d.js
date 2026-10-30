"use strict";(()=>{var rd=Object.defineProperty;var sd=(i,t,e)=>t in i?rd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ze=(i,t,e)=>sd(i,typeof t!="symbol"?t+"":t,e);var od=0,Ru=1,ad=2;var F0=1,cd=2,Oi=3,Un=0,Xn=1,Le=2,dr=0,bi=1,fn=2,Au=3,Cu=4,ld=5,Br=100,hd=101,ud=102,fd=103,dd=104,pd=200,md=201,gd=202,_d=203,ml=204,gl=205,yd=206,xd=207,Md=208,bd=209,vd=210,Ed=211,wd=212,Sd=213,Td=214,_l=0,yl=1,xl=2,Cs=3,Ml=4,bl=5,vl=6,El=7,zh=0,Vh=1,Rd=2,pr=0,Ad=1,Cd=2,Pd=3,Bo=4,Id=5,Ld=6,Dd=7;var O0=300,Ps=301,Is=302,So=303,wl=304,fc=306,Vr=1e3,ki=1001,Sl=1002,Rn=1003,Ud=1004;var jo=1005;var hi=1006,Dc=1007;var zr=1008;var Vi=1009,B0=1010,k0=1011,To=1012,Gh=1013,Gr=1014,Mi=1015,ko=1016,Wh=1017,Xh=1018,Ls=1020,z0=35902,V0=1021,G0=1022,fi=1023,W0=1024,X0=1025,Ts=1026,Ds=1027,qh=1028,Yh=1029,q0=1030,Zh=1031;var $h=1033,Ia=33776,La=33777,Da=33778,Ua=33779,Tl=35840,Rl=35841,Al=35842,Cl=35843,Pl=36196,Il=37492,Ll=37496,Dl=37808,Ul=37809,Nl=37810,Hl=37811,Fl=37812,Ol=37813,Bl=37814,kl=37815,zl=37816,Vl=37817,Gl=37818,Wl=37819,Xl=37820,ql=37821,Na=36492,Yl=36494,Zl=36495,Y0=36283,$l=36284,Kl=36285,Jl=36286;var Fa=2300,jl=2301,Uc=2302,Pu=2400,Iu=2401,Lu=2402;var Nd=3200,Hd=3201;var Kh=0,Fd=1,ur="",on="srgb",yr="srgb-linear",Jh="display-p3",dc="display-p3-linear",Oa="linear",qe="srgb",Ba="rec709",ka="p3";var ss=7680;var Du=519,Od=512,Bd=513,kd=514,Z0=515,zd=516,Vd=517,Gd=518,Wd=519,Ql=35044;var Uu="300 es",zi=2e3,za=2001,mr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=1234567,xo=Math.PI/180,Ro=180/Math.PI;function vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function bn(i,t,e){return Math.max(t,Math.min(e,i))}function jh(i,t){return(i%t+t)%t}function Xd(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function qd(i,t,e){return i!==t?(e-i)/(t-i):0}function Mo(i,t,e){return(1-e)*i+e*t}function Yd(i,t,e,n){return Mo(i,t,1-Math.exp(-e*n))}function Zd(i,t=1){return t-Math.abs(jh(i,t*2)-t)}function $d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jd(i,t){return i+Math.random()*(t-i)}function Qd(i){return i*(.5-Math.random())}function tp(i){i!==void 0&&(Nu=i);let t=Nu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ep(i){return i*xo}function np(i){return i*Ro}function ip(i){return(i&i-1)===0&&i!==0}function rp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function op(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vs={DEG2RAD:xo,RAD2DEG:Ro,generateUUID:vi,clamp:bn,euclideanModulo:jh,mapLinear:Xd,inverseLerp:qd,lerp:Mo,damp:Yd,pingpong:Zd,smoothstep:$d,smootherstep:Kd,randInt:Jd,randFloat:jd,randFloatSpread:Qd,seededRandom:tp,degToRad:ep,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:rp,floorPowerOfTwo:sp,setQuaternionFromProperEuler:op,normalize:He,denormalize:ui},Nt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],y=r[1],M=r[4],b=r[7],L=r[2],P=r[5],v=r[8];return s[0]=o*_+a*y+c*L,s[3]=o*f+a*M+c*P,s[6]=o*p+a*b+c*v,s[1]=l*_+h*y+u*L,s[4]=l*f+h*M+u*P,s[7]=l*p+h*b+u*v,s[2]=d*_+m*y+g*L,s[5]=d*f+m*M+g*P,s[8]=d*p+m*b+g*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=e*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nc.makeScale(t,e)),this}rotate(t){return this.premultiply(Nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new me;function $0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ap(){let i=Va("canvas");return i.style.display="block",i}var Hu={};function Ha(i){i in Hu||(Hu[i]=!0,console.warn(i))}function cp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function lp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Fu=new me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ou=new me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),so={[yr]:{transfer:Oa,primaries:Ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[on]:{transfer:qe,primaries:Ba,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[dc]:{transfer:Oa,primaries:ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ou),fromReference:i=>i.applyMatrix3(Fu)},[Jh]:{transfer:qe,primaries:ka,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ou),fromReference:i=>i.applyMatrix3(Fu).convertLinearToSRGB()}},up=new Set([yr,dc]),Ue={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!up.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=so[t].toReference,r=so[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return so[i].primaries},getTransfer:function(i){return i===ur?Oa:so[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(so[t].luminanceCoefficients)}};function Rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var os,th=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Va("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Va("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rs(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rs(e[n]/255)*255):e[n]=Rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fp=0,Ga=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fc(r[o].image)):s.push(Fc(r[o]))}else s=Fc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dp=0,qn=class i extends mr{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ki,r=ki,s=hi,o=zr,a=fi,c=Vi,l=i.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=vi(),this.name="",this.source=new Ga(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==O0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=O0;qn.DEFAULT_ANISOTROPY=1;var Oe=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,b=(m+1)/2,L=(p+1)/2,P=(h+d)/4,v=(u+_)/4,T=(g+f)/4;return M>b&&M>L?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=P/n,s=v/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=P/r,s=T/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=v/s,r=T/s),this.set(n,r,s,e),this}let y=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eh=class extends mr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new qn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ga(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gi=class extends eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Wa=class extends qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nh=class extends qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let L=Math.sqrt(M),P=Math.atan2(L,p*y);f=Math.sin(f*P)/L,a=Math.sin(a*P)/L}let b=a*y;if(c=c*f+d*b,l=l*f+m*b,h=h*f+g*b,u=u*f+_*b,f===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oc.copy(this).projectOnVector(t),this.sub(Oc)}reflect(t){return this.sub(Oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oc=new A,Bu=new En,Wi=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(t.matrixWorld),this.union(Qo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),ta.subVectors(this.max,oo),as.subVectors(t.a,oo),cs.subVectors(t.b,oo),ls.subVectors(t.c,oo),sr.subVectors(cs,as),or.subVectors(ls,cs),Lr.subVectors(as,ls);let e=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Lr.z,Lr.y,sr.z,0,-sr.x,or.z,0,-or.x,Lr.z,0,-Lr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Lr.y,Lr.x,0];return!Bc(e,as,cs,ls,ta)||(e=[1,0,0,0,1,0,0,0,1],!Bc(e,as,cs,ls,ta))?!1:(ea.crossVectors(sr,or),e=[ea.x,ea.y,ea.z],Bc(e,as,cs,ls,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Di=[new A,new A,new A,new A,new A,new A,new A,new A],ai=new A,Qo=new Wi,as=new A,cs=new A,ls=new A,sr=new A,or=new A,Lr=new A,oo=new A,ta=new A,ea=new A,Dr=new A;function Bc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Dr.fromArray(i,s);let a=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),c=t.dot(Dr),l=e.dot(Dr),h=n.dot(Dr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var pp=new Wi,ao=new A,kc=new A,Xi=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pp.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);let e=ao.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ao,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(kc)),this.expandByPoint(ao.copy(t.center).sub(kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ui=new A,zc=new A,na=new A,ar=new A,Vc=new A,ia=new A,Gc=new A,Ao=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){zc.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),ar.copy(this.origin).sub(zc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(na),a=ar.dot(this.direction),c=-ar.dot(na),l=ar.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zc).addScaledVector(na,d),m}intersectSphere(t,e){Ui.subVectors(t.center,this.origin);let n=Ui.dot(this.direction),r=Ui.dot(Ui)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,r,s){Vc.subVectors(e,t),ia.subVectors(n,t),Gc.crossVectors(Vc,ia);let o=this.direction.dot(Gc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,t);let c=a*this.direction.dot(ia.crossVectors(ar,ia));if(c<0)return null;let l=a*this.direction.dot(Vc.cross(ar));if(l<0||c+l>o)return null;let h=-a*ar.dot(Gc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f)}set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,gp)}lookAt(t,e,n){let r=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),cr.crossVectors(n,Kn),cr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),cr.crossVectors(n,Kn)),cr.normalize(),ra.crossVectors(Kn,cr),r[0]=cr.x,r[4]=ra.x,r[8]=Kn.x,r[1]=cr.y,r[5]=ra.y,r[9]=Kn.y,r[2]=cr.z,r[6]=ra.z,r[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],y=n[3],M=n[7],b=n[11],L=n[15],P=r[0],v=r[4],T=r[8],N=r[12],x=r[1],S=r[5],Z=r[9],tt=r[13],q=r[2],at=r[6],ot=r[10],pt=r[14],D=r[3],et=r[7],z=r[11],J=r[15];return s[0]=o*P+a*x+c*q+l*D,s[4]=o*v+a*S+c*at+l*et,s[8]=o*T+a*Z+c*ot+l*z,s[12]=o*N+a*tt+c*pt+l*J,s[1]=h*P+u*x+d*q+m*D,s[5]=h*v+u*S+d*at+m*et,s[9]=h*T+u*Z+d*ot+m*z,s[13]=h*N+u*tt+d*pt+m*J,s[2]=g*P+_*x+f*q+p*D,s[6]=g*v+_*S+f*at+p*et,s[10]=g*T+_*Z+f*ot+p*z,s[14]=g*N+_*tt+f*pt+p*J,s[3]=y*P+M*x+b*q+L*D,s[7]=y*v+M*S+b*at+L*et,s[11]=y*T+M*Z+b*ot+L*z,s[15]=y*N+M*tt+b*pt+L*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*m-n*c*m)+_*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],y=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,M=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,b=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,P=e*y+n*M+r*b+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/P;return t[0]=y*v,t[1]=(_*d*s-u*f*s-_*r*m+n*f*m+u*r*p-n*d*p)*v,t[2]=(a*f*s-_*c*s+_*r*l-n*f*l-a*r*p+n*c*p)*v,t[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*m-n*c*m)*v,t[4]=M*v,t[5]=(h*f*s-g*d*s+g*r*m-e*f*m-h*r*p+e*d*p)*v,t[6]=(g*c*s-o*f*s-g*r*l+e*f*l+o*r*p-e*c*p)*v,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*m+e*c*m)*v,t[8]=b*v,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*v,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*v,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*v,t[12]=L*v,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*f+e*u*f)*v,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*f-e*a*f)*v,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*d+e*a*d)*v,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,f=o*u,p=a*u,y=c*l,M=c*h,b=c*u,L=n.x,P=n.y,v=n.z;return r[0]=(1-(_+p))*L,r[1]=(m+b)*L,r[2]=(g-M)*L,r[3]=0,r[4]=(m-b)*P,r[5]=(1-(d+p))*P,r[6]=(f+y)*P,r[7]=0,r[8]=(g+M)*v,r[9]=(f-y)*v,r[10]=(1-(d+_))*v,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=hs.set(r[0],r[1],r[2]).length(),o=hs.set(r[4],r[5],r[6]).length(),a=hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ci.copy(this);let l=1/s,h=1/o,u=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,e.setFromRotationMatrix(ci),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=zi){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r),m,g;if(a===zi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===za)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=zi){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*l,m=(n+r)*h,g,_;if(a===zi)g=(o+s)*u,_=-2*u;else if(a===za)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new A,ci=new ce,mp=new A(0,0,0),gp=new A(1,1,1),cr=new A,ra=new A,Kn=new A,ku=new ce,zu=new En,wn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(bn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zu.setFromEuler(this),this.setFromQuaternion(zu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Xa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_p=0,Vu=new A,us=new En,Ni=new ce,sa=new A,co=new A,yp=new A,xp=new En,Gu=new A(1,0,0),Wu=new A(0,1,0),Xu=new A(0,0,1),qu={type:"added"},Mp={type:"removed"},fs={type:"childadded",child:null},Wc={type:"childremoved",child:null},dn=class i extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new wn,n=new En,r=new A(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new me}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Gu,t)}rotateY(t){return this.rotateOnAxis(Wu,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return Vu.copy(t).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gu,t)}translateY(t){return this.translateOnAxis(Wu,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(co,sa,this.up):Ni.lookAt(sa,co,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Ni),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qu),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mp),Wc.child=t,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qu),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};dn.DEFAULT_UP=new A(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new A,Hi=new A,Xc=new A,Fi=new A,ds=new A,ps=new A,Yu=new A,qc=new A,Yc=new A,Zc=new A,$c=new Oe,Kc=new Oe,Jc=new Oe,fr=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),li.subVectors(t,e),r.cross(li);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){li.subVectors(r,e),Hi.subVectors(n,e),Xc.subVectors(t,e);let o=li.dot(li),a=li.dot(Hi),c=li.dot(Xc),l=Hi.dot(Hi),h=Hi.dot(Xc),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fi.x),c.addScaledVector(o,Fi.y),c.addScaledVector(a,Fi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return $c.setScalar(0),Kc.setScalar(0),Jc.setScalar(0),$c.fromBufferAttribute(t,e),Kc.fromBufferAttribute(t,n),Jc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector($c,s.x),o.addScaledVector(Kc,s.y),o.addScaledVector(Jc,s.z),o}static isFrontFacing(t,e,n,r){return li.subVectors(n,e),Hi.subVectors(t,e),li.cross(Hi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),li.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;ds.subVectors(r,n),ps.subVectors(s,n),qc.subVectors(t,n);let c=ds.dot(qc),l=ps.dot(qc);if(c<=0&&l<=0)return e.copy(n);Yc.subVectors(t,r);let h=ds.dot(Yc),u=ps.dot(Yc);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ds,o);Zc.subVectors(t,s);let m=ds.dot(Zc),g=ps.dot(Zc);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ps,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Yu.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(Yu,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},oa={h:0,s:0,l:0};function jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ue.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Ue.workingColorSpace){if(t=jh(t,1),e=bn(e,0,1),n=bn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=jc(o,s,t+1/3),this.g=jc(o,s,t),this.b=jc(o,s,t-1/3)}return Ue.toWorkingColorSpace(this,r),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=K0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=Hc(t.r),this.g=Hc(t.g),this.b=Hc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Ue.fromWorkingColorSpace(Dn.copy(this),t),Math.round(bn(Dn.r*255,0,255))*65536+Math.round(bn(Dn.g*255,0,255))*256+Math.round(bn(Dn.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Dn.copy(this),e);let n=Dn.r,r=Dn.g,s=Dn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Dn.copy(this),e),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=on){Ue.fromWorkingColorSpace(Dn.copy(this),t);let e=Dn.r,n=Dn.g,r=Dn.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+e,lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(lr),t.getHSL(oa);let n=Mo(lr.h,oa.h,e),r=Mo(lr.s,oa.s,e),s=Mo(lr.l,oa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new zt;zt.NAMES=K0;var bp=0,di=class extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=bi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},an=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var un=new A,aa=new Nt,De=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ql,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ql&&(t.usage=this.usage),t}};var qa=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ya=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},vp=0,ei=new ce,Qc=new dn,ms=new A,Jn=new Wi,lo=new Wi,Mn=new A,be=class i extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($0(t)?Ya:qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new me().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,n){return ei.makeTranslation(t,e,n),this.applyMatrix4(ei),this}scale(t,e,n){return ei.makeScale(t,e,n),this.applyMatrix4(ei),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Jn.min,lo.min),Jn.expandByPoint(Mn),Mn.addVectors(Jn.max,lo.max),Jn.expandByPoint(Mn)):(Jn.expandByPoint(lo.min),Jn.expandByPoint(lo.max))}Jn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Mn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Mn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Mn.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(t,l),Mn.add(ms)),r=Math.max(r,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new A,c[T]=new A;let l=new A,h=new A,u=new A,d=new Nt,m=new Nt,g=new Nt,_=new A,f=new A;function p(T,N,x){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,x),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,N),g.fromBufferAttribute(s,x),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(S),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(S),a[T].add(_),a[N].add(_),a[x].add(_),c[T].add(f),c[N].add(f),c[x].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let T=0,N=y.length;T<N;++T){let x=y[T],S=x.start,Z=x.count;for(let tt=S,q=S+Z;tt<q;tt+=3)p(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let M=new A,b=new A,L=new A,P=new A;function v(T){L.fromBufferAttribute(r,T),P.copy(L);let N=a[T];M.copy(N),M.sub(L.multiplyScalar(L.dot(N))).normalize(),b.crossVectors(P,N);let S=b.dot(c[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,S)}for(let T=0,N=y.length;T<N;++T){let x=y[T],S=x.start,Z=x.count;for(let tt=S,q=S+Z;tt<q;tt+=3)v(t.getX(tt+0)),v(t.getX(tt+1)),v(t.getX(tt+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new A,s=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Mn.fromBufferAttribute(t,e),Mn.normalize(),t.setXYZ(e,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new De(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zu=new ce,Ur=new Ao,ca=new Xi,$u=new A,la=new A,ha=new A,ua=new A,tl=new A,fa=new A,Ku=new A,da=new A,St=class extends dn{constructor(t=new be,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){fa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(tl.fromBufferAttribute(u,t),o?fa.addScaledVector(tl,h):fa.addScaledVector(tl.sub(e),h))}e.add(fa)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),Ur.copy(t.ray).recast(t.near),!(ca.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(ca,$u)===null||Ur.origin.distanceToSquared($u)>(t.far-t.near)**2))&&(Zu.copy(s).invert(),Ur.copy(t.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ur)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,L=M;b<L;b+=3){let P=a.getX(b),v=a.getX(b+1),T=a.getX(b+2);r=pa(this,p,t,n,l,h,u,P,v,T),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=a.getX(f),M=a.getX(f+1),b=a.getX(f+2);r=pa(this,o,t,n,l,h,u,y,M,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),M=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,L=M;b<L;b+=3){let P=b,v=b+1,T=b+2;r=pa(this,p,t,n,l,h,u,P,v,T),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=f,M=f+1,b=f+2;r=pa(this,o,t,n,l,h,u,y,M,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}};function Ep(i,t,e,n,r,s,o,a){let c;if(t.side===Xn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Un,a),c===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(da);return l<e.near||l>e.far?null:{distance:l,point:da.clone(),object:i}}function pa(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,la),i.getVertexPosition(c,ha),i.getVertexPosition(l,ua);let h=Ep(i,t,e,n,la,ha,ua,Ku);if(h){let u=new A;fr.getBarycoord(Ku,la,ha,ua,u),r&&(h.uv=fr.getInterpolatedAttribute(r,a,c,l,u,new Nt)),s&&(h.uv1=fr.getInterpolatedAttribute(s,a,c,l,u,new Nt)),o&&(h.normal=fr.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new A,materialIndex:0};fr.getNormal(la,ha,ua,d.normal),h.face=d,h.barycoord=u}return h}var en=class i extends be{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,f,p,y,M,b,L,P,v,T,N){let x=b/v,S=L/T,Z=b/2,tt=L/2,q=P/2,at=v+1,ot=T+1,pt=0,D=0,et=new A;for(let z=0;z<ot;z++){let J=z*S-tt;for(let W=0;W<at;W++){let U=W*x-Z;et[_]=U*y,et[f]=J*M,et[p]=q,l.push(et.x,et.y,et.z),et[_]=0,et[f]=0,et[p]=P>0?1:-1,h.push(et.x,et.y,et.z),u.push(W/v),u.push(1-z/T),pt+=1}}for(let z=0;z<T;z++)for(let J=0;J<v;J++){let W=d+J+at*z,U=d+J+at*(z+1),R=d+(J+1)+at*(z+1),C=d+(J+1)+at*z;c.push(W,U,C),c.push(U,R,C),D+=6}a.addGroup(m,D,N),m+=D,d+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function kn(i){let t={};for(let e=0;e<i.length;e++){let n=Us(i[e]);for(let r in n)t[r]=n[r]}return t}function wp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function J0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}var Sp={clone:Us,merge:kn},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Za=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hr=new A,Ju=new Nt,ju=new Nt,vn=class extends Za{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,ju),e.subVectors(ju,Ju)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,_s=1,ih=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vn(gs,_s,t,e);r.layers=this.layers,this.add(r);let s=new vn(gs,_s,t,e);s.layers=this.layers,this.add(s);let o=new vn(gs,_s,t,e);o.layers=this.layers,this.add(o);let a=new vn(gs,_s,t,e);a.layers=this.layers,this.add(a);let c=new vn(gs,_s,t,e);c.layers=this.layers,this.add(c);let l=new vn(gs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$a=class extends qn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rh=class extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new $a(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new en(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:dr});s.uniforms.tEquirect.value=e;let o=new St(r,s),a=e.minFilter;return e.minFilter===zr&&(e.minFilter=hi),new ih(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},el=new A,Ap=new A,Cp=new me,Bi=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=el.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(el),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cp.getNormalMatrix(t),r=this.coplanarPoint(el).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nr=new Xi,ma=new A,Co=class{constructor(t=new Bi,e=new Bi,n=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],y=r[13],M=r[14],b=r[15];if(n[0].setComponents(c-s,d-l,f-m,b-p).normalize(),n[1].setComponents(c+s,d+l,f+m,b+p).normalize(),n[2].setComponents(c+o,d+h,f+g,b+y).normalize(),n[3].setComponents(c-o,d-h,f-g,b-y).normalize(),n[4].setComponents(c-a,d-u,f-_,b-M).normalize(),e===zi)n[5].setComponents(c+a,d+u,f+_,b+M).normalize();else if(e===za)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ma.x=r.normal.x>0?t.max.x:t.min.x,ma.y=r.normal.y>0?t.max.y:t.min.y,ma.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function j0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Pp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var qi=class i extends be{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let y=p*d-o;for(let M=0;M<l;M++){let b=M*u-s;g.push(b,-y,0),_.push(0,0,1),f.push(M/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let M=y+l*p,b=y+l*(p+1),L=y+1+l*(p+1),P=y+1+l*p;m.push(M,b,P),m.push(b,L,P)}this.setIndex(m),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ip=`#ifdef USE_ALPHAHASH
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
}`,pe={alphahash_fragment:Ip,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Up,alphatest_fragment:Np,alphatest_pars_fragment:Hp,aomap_fragment:Fp,aomap_pars_fragment:Op,batching_pars_vertex:Bp,batching_vertex:kp,begin_vertex:zp,beginnormal_vertex:Vp,bsdfs:Gp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:$p,color_fragment:Kp,color_pars_fragment:Jp,color_pars_vertex:jp,color_vertex:Qp,common:tm,cube_uv_reflection_fragment:em,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:rm,emissivemap_fragment:sm,emissivemap_pars_fragment:om,colorspace_fragment:am,colorspace_pars_fragment:cm,envmap_fragment:lm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:fm,envmap_physical_pars_fragment:Em,envmap_vertex:dm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:_m,gradientmap_pars_fragment:ym,lightmap_pars_fragment:xm,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:bm,lights_pars_begin:vm,lights_toon_fragment:wm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Rm,lights_physical_fragment:Am,lights_physical_pars_fragment:Cm,lights_fragment_begin:Pm,lights_fragment_maps:Im,lights_fragment_end:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Hm,map_fragment:Fm,map_pars_fragment:Om,map_particle_fragment:Bm,map_particle_pars_fragment:km,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Gm,morphcolor_vertex:Wm,morphnormal_vertex:Xm,morphtarget_pars_vertex:qm,morphtarget_vertex:Ym,normal_fragment_begin:Zm,normal_fragment_maps:$m,normal_pars_fragment:Km,normal_pars_vertex:Jm,normal_vertex:jm,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:rg,packing:sg,premultiplied_alpha_fragment:og,project_vertex:ag,dithering_fragment:cg,dithering_pars_fragment:lg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:dg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:yg,skinnormal_vertex:xg,specularmap_fragment:Mg,specularmap_pars_fragment:bg,tonemapping_fragment:vg,tonemapping_pars_fragment:Eg,transmission_fragment:wg,transmission_pars_fragment:Sg,uv_pars_fragment:Tg,uv_pars_vertex:Rg,uv_vertex:Ag,worldpos_vertex:Cg,background_vert:Pg,background_frag:Ig,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:Ug,cube_frag:Ng,depth_vert:Hg,depth_frag:Fg,distanceRGBA_vert:Og,distanceRGBA_frag:Bg,equirect_vert:kg,equirect_frag:zg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:Zg,meshmatcap_frag:$g,meshnormal_vert:Kg,meshnormal_frag:Jg,meshphong_vert:jg,meshphong_frag:Qg,meshphysical_vert:t1,meshphysical_frag:e1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:r1,points_frag:s1,shadow_vert:o1,shadow_frag:a1,sprite_vert:c1,sprite_frag:l1},qt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},xi={basic:{uniforms:kn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:kn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new zt(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:kn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:kn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:kn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new zt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:kn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:kn([qt.points,qt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:kn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:kn([qt.common,qt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:kn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:kn([qt.sprite,qt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:kn([qt.common,qt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:kn([qt.lights,qt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};xi.physical={uniforms:kn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var ga={r:0,b:0,g:0},Hr=new wn,h1=new ce;function u1(i,t,e,n,r,s,o){let a=new zt(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1,b=g(y);b===null?p(a,c):b&&b.isColor&&(p(b,1),M=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,M){let b=g(M);b&&(b.isCubeTexture||b.mapping===fc)?(h===void 0&&(h=new St(new en(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Us(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Hr.copy(M.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(Hr)),h.material.toneMapped=Ue.getTransfer(b.colorSpace)!==qe,(u!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new St(new qi(2,2),new Yn({name:"BackgroundMaterial",uniforms:Us(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ue.getTransfer(b.colorSpace)!==qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(ga,J0(i)),n.buffers.color.setClear(ga.r,ga.g,ga.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:f}}function f1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(x,S,Z,tt,q){let at=!1,ot=u(tt,Z,S);s!==ot&&(s=ot,l(s.object)),at=m(x,tt,Z,q),at&&g(x,tt,Z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,b(x,S,Z,tt),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,S,Z){let tt=Z.wireframe===!0,q=n[x.id];q===void 0&&(q={},n[x.id]=q);let at=q[S.id];at===void 0&&(at={},q[S.id]=at);let ot=at[tt];return ot===void 0&&(ot=d(c()),at[tt]=ot),ot}function d(x){let S=[],Z=[],tt=[];for(let q=0;q<e;q++)S[q]=0,Z[q]=0,tt[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:Z,attributeDivisors:tt,object:x,attributes:{},index:null}}function m(x,S,Z,tt){let q=s.attributes,at=S.attributes,ot=0,pt=Z.getAttributes();for(let D in pt)if(pt[D].location>=0){let z=q[D],J=at[D];if(J===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),z===void 0||z.attribute!==J||J&&z.data!==J.data)return!0;ot++}return s.attributesNum!==ot||s.index!==tt}function g(x,S,Z,tt){let q={},at=S.attributes,ot=0,pt=Z.getAttributes();for(let D in pt)if(pt[D].location>=0){let z=at[D];z===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(z=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(z=x.instanceColor));let J={};J.attribute=z,z&&z.data&&(J.data=z.data),q[D]=J,ot++}s.attributes=q,s.attributesNum=ot,s.index=tt}function _(){let x=s.newAttributes;for(let S=0,Z=x.length;S<Z;S++)x[S]=0}function f(x){p(x,0)}function p(x,S){let Z=s.newAttributes,tt=s.enabledAttributes,q=s.attributeDivisors;Z[x]=1,tt[x]===0&&(i.enableVertexAttribArray(x),tt[x]=1),q[x]!==S&&(i.vertexAttribDivisor(x,S),q[x]=S)}function y(){let x=s.newAttributes,S=s.enabledAttributes;for(let Z=0,tt=S.length;Z<tt;Z++)S[Z]!==x[Z]&&(i.disableVertexAttribArray(Z),S[Z]=0)}function M(x,S,Z,tt,q,at,ot){ot===!0?i.vertexAttribIPointer(x,S,Z,q,at):i.vertexAttribPointer(x,S,Z,tt,q,at)}function b(x,S,Z,tt){_();let q=tt.attributes,at=Z.getAttributes(),ot=S.defaultAttributeValues;for(let pt in at){let D=at[pt];if(D.location>=0){let et=q[pt];if(et===void 0&&(pt==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),pt==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){let z=et.normalized,J=et.itemSize,W=t.get(et);if(W===void 0)continue;let U=W.buffer,R=W.type,C=W.bytesPerElement,k=R===i.INT||R===i.UNSIGNED_INT||et.gpuType===Gh;if(et.isInterleavedBufferAttribute){let X=et.data,B=X.stride,F=et.offset;if(X.isInstancedInterleavedBuffer){for(let Y=0;Y<D.locationSize;Y++)p(D.location+Y,X.meshPerAttribute);x.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Y=0;Y<D.locationSize;Y++)f(D.location+Y);i.bindBuffer(i.ARRAY_BUFFER,U);for(let Y=0;Y<D.locationSize;Y++)M(D.location+Y,J/D.locationSize,R,z,B*C,(F+J/D.locationSize*Y)*C,k)}else{if(et.isInstancedBufferAttribute){for(let X=0;X<D.locationSize;X++)p(D.location+X,et.meshPerAttribute);x.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let X=0;X<D.locationSize;X++)f(D.location+X);i.bindBuffer(i.ARRAY_BUFFER,U);for(let X=0;X<D.locationSize;X++)M(D.location+X,J/D.locationSize,R,z,J*C,J/D.locationSize*X*C,k)}}else if(ot!==void 0){let z=ot[pt];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(D.location,z);break;case 3:i.vertexAttrib3fv(D.location,z);break;case 4:i.vertexAttrib4fv(D.location,z);break;default:i.vertexAttrib1fv(D.location,z)}}}}y()}function L(){T();for(let x in n){let S=n[x];for(let Z in S){let tt=S[Z];for(let q in tt)h(tt[q].object),delete tt[q];delete S[Z]}delete n[x]}}function P(x){if(n[x.id]===void 0)return;let S=n[x.id];for(let Z in S){let tt=S[Z];for(let q in tt)h(tt[q].object),delete tt[q];delete S[Z]}delete n[x.id]}function v(x){for(let S in n){let Z=n[S];if(Z[x.id]===void 0)continue;let tt=Z[x.id];for(let q in tt)h(tt[q].object),delete tt[q];delete Z[x.id]}}function T(){N(),o=!0,s!==r&&(s=r,l(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:f,disableUnusedAttributes:y}}function d1(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function p1(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==fi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let T=v===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Vi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Mi&&!T)}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let v=t.get("EXT_clip_control");v.clipControlEXT(v.LOWER_LEFT_EXT,v.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:L,maxSamples:P}}function m1(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Bi,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{let y=s?0:n,M=y*4,b=p.clippingState||null;c.value=b,b=h(g,d,M,m);for(let L=0;L!==M;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<p)&&(f=new Float32Array(p));for(let M=0,b=m;M!==_;++M,b+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function g1(i){let t=new WeakMap;function e(o,a){return a===So?o.mapping=Ps:a===wl&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===So||a===wl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new rh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ka=class extends Za{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ws=4,Qu=[.125,.215,.35,.446,.526,.582],kr=20,nl=new Ka,t0=new zt,il=null,rl=0,sl=0,ol=!1,Or=(1+Math.sqrt(5))/2,ys=1/Or,e0=[new A(-Or,ys,0),new A(Or,ys,0),new A(-ys,0,Or),new A(ys,0,Or),new A(0,Or,-ys),new A(0,Or,ys),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(il,rl,sl),this._renderer.xr.enabled=ol,t.scissorTest=!1,_a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:ko,format:fi,colorSpace:yr,depthBuffer:!1},r=n0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_1(s)),this._blurMaterial=y1(s,t,e)}return r}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,nl)}_sceneToCubeUV(t,e,n,r){let a=new vn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(t0),h.toneMapping=pr,h.autoClear=!1;let m=new an({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),g=new St(new en,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(t0),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let M=this._cubeSize;_a(r,y*M,p>2?M:0,M,M),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Ps||t.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;_a(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,nl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=e0[(r-s-1)%e0.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kr-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):kr;f>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${kr}`);let p=[],y=0;for(let v=0;v<kr;++v){let T=v/_,N=Math.exp(-T*T/2);p.push(N),v===0?y+=N:v<f&&(y+=2*N)}for(let v=0;v<p.length;v++)p[v]=p[v]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let b=this._sizeLods[r],L=3*b*(r>M-ws?r-M+ws:0),P=4*(this._cubeSize-b);_a(e,L,P,3*b,2*b),c.setRenderTarget(e),c.render(u,nl)}};function _1(i){let t=[],e=[],n=[],r=i,s=i-ws+1+Qu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-ws?c=Qu[o-i+ws-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,y=new Float32Array(_*g*m),M=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let P=0;P<m;P++){let v=P%3*2/3-1,T=P>2?0:-1,N=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];y.set(N,_*g*P),M.set(d,f*g*P);let x=[P,P,P,P,P,P];b.set(x,p*g*P)}let L=new be;L.setAttribute("position",new De(y,_)),L.setAttribute("uv",new De(M,f)),L.setAttribute("faceIndex",new De(b,p)),t.push(L),r>ws&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function n0(i,t,e){let n=new Gi(i,t,e);return n.texture.mapping=fc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function y1(i,t,e){let n=new Float32Array(kr),r=new A(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qh(),fragmentShader:`

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
	`}function x1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===So||c===wl,h=c===Ps||c===Is;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ja(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Ja(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function M1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Ha("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function b1(i,t,e,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let M=0,b=y.length;M<b;M+=3){let L=y[M+0],P=y[M+1],v=y[M+2];d.push(L,P,P,v,v,L)}}else if(g!==void 0){let y=g.array;_=g.version;for(let M=0,b=y.length/3-1;M<b;M+=3){let L=M+0,P=M+1,v=M+2;d.push(L,P,P,v,v,L)}}else return;let f=new($0(d)?Ya:qa)(d,1);f.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function v1(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function u(d,m,g,_){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y];for(let y=0;y<_.length;y++)e.update(p,n,_[y])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function E1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function w1(i,t,e){let n=new WeakMap,r=new Oe;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let N=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let b=a.attributes.position.count*M,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let P=new Float32Array(b*L*4*u),v=new Wa(P,b,L,u);v.type=Mi,v.needsUpdate=!0;let T=M*4;for(let x=0;x<u;x++){let S=f[x],Z=p[x],tt=y[x],q=b*L*4*x;for(let at=0;at<S.count;at++){let ot=at*T;m===!0&&(r.fromBufferAttribute(S,at),P[q+ot+0]=r.x,P[q+ot+1]=r.y,P[q+ot+2]=r.z,P[q+ot+3]=0),g===!0&&(r.fromBufferAttribute(Z,at),P[q+ot+4]=r.x,P[q+ot+5]=r.y,P[q+ot+6]=r.z,P[q+ot+7]=0),_===!0&&(r.fromBufferAttribute(tt,at),P[q+ot+8]=r.x,P[q+ot+9]=r.y,P[q+ot+10]=r.z,P[q+ot+11]=tt.itemSize===4?r.w:1)}}d={count:u,texture:v,size:new Nt(b,L)},n.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function S1(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var ja=class extends qn{constructor(t,e,n,r,s,o,a,c,l,h=Ts){if(h!==Ts&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Gr),n===void 0&&h===Ds&&(n=Ls),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Rn,this.minFilter=c!==void 0?c:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Q0=new qn,s0=new ja(1,1),tf=new Wa,ef=new nh,nf=new $a,o0=[],a0=[],c0=new Float32Array(16),l0=new Float32Array(9),h0=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=o0[r];if(s===void 0&&(s=new Float32Array(r),o0[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function gn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _n(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pc(i,t){let e=a0[t];e===void 0&&(e=new Int32Array(t),a0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function T1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function R1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2fv(this.addr,t),_n(e,t)}}function A1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;i.uniform3fv(this.addr,t),_n(e,t)}}function C1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4fv(this.addr,t),_n(e,t)}}function P1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,n))return;h0.set(n),i.uniformMatrix2fv(this.addr,!1,h0),_n(e,n)}}function I1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,n))return;l0.set(n),i.uniformMatrix3fv(this.addr,!1,l0),_n(e,n)}}function L1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,n))return;c0.set(n),i.uniformMatrix4fv(this.addr,!1,c0),_n(e,n)}}function D1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function U1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2iv(this.addr,t),_n(e,t)}}function N1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3iv(this.addr,t),_n(e,t)}}function H1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4iv(this.addr,t),_n(e,t)}}function F1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function O1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2uiv(this.addr,t),_n(e,t)}}function B1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3uiv(this.addr,t),_n(e,t)}}function k1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4uiv(this.addr,t),_n(e,t)}}function z1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(s0.compareFunction=Z0,s=s0):s=Q0,e.setTexture2D(t||s,r)}function V1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ef,r)}function G1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||nf,r)}function W1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||tf,r)}function X1(i){switch(i){case 5126:return T1;case 35664:return R1;case 35665:return A1;case 35666:return C1;case 35674:return P1;case 35675:return I1;case 35676:return L1;case 5124:case 35670:return D1;case 35667:case 35671:return U1;case 35668:case 35672:return N1;case 35669:case 35673:return H1;case 5125:return F1;case 36294:return O1;case 36295:return B1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return W1}}function q1(i,t){i.uniform1fv(this.addr,t)}function Y1(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Z1(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function $1(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function K1(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function J1(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j1(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Q1(i,t){i.uniform1iv(this.addr,t)}function t_(i,t){i.uniform2iv(this.addr,t)}function e_(i,t){i.uniform3iv(this.addr,t)}function n_(i,t){i.uniform4iv(this.addr,t)}function i_(i,t){i.uniform1uiv(this.addr,t)}function r_(i,t){i.uniform2uiv(this.addr,t)}function s_(i,t){i.uniform3uiv(this.addr,t)}function o_(i,t){i.uniform4uiv(this.addr,t)}function a_(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Q0,s[o])}function c_(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ef,s[o])}function l_(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||nf,s[o])}function h_(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||tf,s[o])}function u_(i){switch(i){case 5126:return q1;case 35664:return Y1;case 35665:return Z1;case 35666:return $1;case 35674:return K1;case 35675:return J1;case 35676:return j1;case 5124:case 35670:return Q1;case 35667:case 35671:return t_;case 35668:case 35672:return e_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return r_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return h_}}var sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=X1(e.type)}},oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u_(e.type)}},ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},al=/(\w+)(\])?(\[|\.)?/g;function u0(i,t){i.seq.push(t),i.map[t.id]=t}function f_(i,t,e){let n=i.name,r=n.length;for(al.lastIndex=0;;){let s=al.exec(n),o=al.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){u0(e,l===void 0?new sh(a,i,t):new oh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ah(a),u0(e,u)),e=u}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);f_(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function f0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var d_=37297,p_=0;function m_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function g_(i){let t=Ue.getPrimaries(Ue.workingColorSpace),e=Ue.getPrimaries(i),n;switch(t===e?n="":t===ka&&e===Ba?n="LinearDisplayP3ToLinearSRGB":t===Ba&&e===ka&&(n="LinearSRGBToLinearDisplayP3"),i){case yr:case dc:return[n,"LinearTransferOETF"];case on:case Jh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function d0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+m_(i.getShaderSource(t),o)}else return r}function __(i,t){let e=g_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function y_(i,t){let e;switch(t){case Ad:e="Linear";break;case Cd:e="Reinhard";break;case Pd:e="Cineon";break;case Bo:e="ACESFilmic";break;case Ld:e="AgX";break;case Dd:e="Neutral";break;case Id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ya=new A;function x_(){Ue.getLuminanceCoefficients(ya);let i=ya.x.toFixed(4),t=ya.y.toFixed(4),e=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
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
#define LOW_PRECISION`),t}function A_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===F0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function C_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Is:t="ENVMAP_TYPE_CUBE";break;case fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function P_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Is&&(t="ENVMAP_MODE_REFRACTION"),t}function I_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zh:t="ENVMAP_BLENDING_MULTIPLY";break;case Vh:t="ENVMAP_BLENDING_MIX";break;case Rd:t="ENVMAP_BLENDING_ADD";break}return t}function L_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function D_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=A_(e),l=C_(e),h=P_(e),u=I_(e),d=L_(e),m=M_(e),g=b_(s),_=r.createProgram(),f,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(f=[_0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[_0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pr?"#define TONE_MAPPING":"",e.toneMapping!==pr?pe.tonemapping_pars_fragment:"",e.toneMapping!==pr?y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,__("linearToOutputTexel",e.outputColorSpace),x_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),o=ch(o),o=p0(o,e),o=m0(o,e),a=ch(a),a=p0(a,e),a=m0(a,e),o=g0(o),a=g0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+f+o,b=y+p+a,L=f0(r,r.VERTEX_SHADER,M),P=f0(r,r.FRAGMENT_SHADER,b);r.attachShader(_,L),r.attachShader(_,P),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function v(S){if(i.debug.checkShaderErrors){let Z=r.getProgramInfoLog(_).trim(),tt=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(P).trim(),at=!0,ot=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,P);else{let pt=d0(r,L,"vertex"),D=d0(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+Z+`
`+pt+`
`+D)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(tt===""||q==="")&&(ot=!1);ot&&(S.diagnostics={runnable:at,programLog:Z,vertexShader:{log:tt,prefix:f},fragmentShader:{log:q,prefix:p}})}r.deleteShader(L),r.deleteShader(P),T=new As(r,_),N=v_(r,_)}let T;this.getUniforms=function(){return T===void 0&&v(this),T};let N;this.getAttributes=function(){return N===void 0&&v(this),N};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,d_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}var U_=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hh(t),e.set(t,n)),n}},hh=class{constructor(t){this.id=U_++,this.code=t,this.usedTimes=0}};function N_(i,t,e,n,r,s,o){let a=new Xa,c=new lh,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,Z,tt,q){let at=tt.fog,ot=q.geometry,pt=x.isMeshStandardMaterial?tt.environment:null,D=(x.isMeshStandardMaterial?e:t).get(x.envMap||pt),et=D&&D.mapping===fc?D.image.height:null,z=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let J=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,W=J!==void 0?J.length:0,U=0;ot.morphAttributes.position!==void 0&&(U=1),ot.morphAttributes.normal!==void 0&&(U=2),ot.morphAttributes.color!==void 0&&(U=3);let R,C,k,X;if(z){let sn=xi[z];R=sn.vertexShader,C=sn.fragmentShader}else R=x.vertexShader,C=x.fragmentShader,c.update(x),k=c.getVertexShaderID(x),X=c.getFragmentShaderID(x);let B=i.getRenderTarget(),F=q.isInstancedMesh===!0,Y=q.isBatchedMesh===!0,Q=!!x.map,V=!!x.matcap,w=!!D,st=!!x.aoMap,K=!!x.lightMap,G=!!x.bumpMap,j=!!x.normalMap,it=!!x.displacementMap,lt=!!x.emissiveMap,I=!!x.metalnessMap,E=!!x.roughnessMap,O=x.anisotropy>0,nt=x.clearcoat>0,ht=x.dispersion>0,rt=x.iridescence>0,Et=x.sheen>0,bt=x.transmission>0,gt=O&&!!x.anisotropyMap,Lt=nt&&!!x.clearcoatMap,_t=nt&&!!x.clearcoatNormalMap,At=nt&&!!x.clearcoatRoughnessMap,Gt=rt&&!!x.iridescenceMap,Bt=rt&&!!x.iridescenceThicknessMap,Ct=Et&&!!x.sheenColorMap,Pt=Et&&!!x.sheenRoughnessMap,Wt=!!x.specularMap,ee=!!x.specularColorMap,ct=!!x.specularIntensityMap,Ut=bt&&!!x.transmissionMap,vt=bt&&!!x.thicknessMap,Tt=!!x.gradientMap,Xt=!!x.alphaMap,$t=x.alphaTest>0,fe=!!x.alphaHash,Ve=!!x.extensions,rn=pr;x.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(rn=i.toneMapping);let ye={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:R,fragmentShader:C,defines:x.defines,customVertexShaderID:k,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Y,batchingColor:Y&&q._colorsTexture!==null,instancing:F,instancingColor:F&&q.instanceColor!==null,instancingMorph:F&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:yr,alphaToCoverage:!!x.alphaToCoverage,map:Q,matcap:V,envMap:w,envMapMode:w&&D.mapping,envMapCubeUVHeight:et,aoMap:st,lightMap:K,bumpMap:G,normalMap:j,displacementMap:m&&it,emissiveMap:lt,normalMapObjectSpace:j&&x.normalMapType===Fd,normalMapTangentSpace:j&&x.normalMapType===Kh,metalnessMap:I,roughnessMap:E,anisotropy:O,anisotropyMap:gt,clearcoat:nt,clearcoatMap:Lt,clearcoatNormalMap:_t,clearcoatRoughnessMap:At,dispersion:ht,iridescence:rt,iridescenceMap:Gt,iridescenceThicknessMap:Bt,sheen:Et,sheenColorMap:Ct,sheenRoughnessMap:Pt,specularMap:Wt,specularColorMap:ee,specularIntensityMap:ct,transmission:bt,transmissionMap:Ut,thicknessMap:vt,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===bi&&x.alphaToCoverage===!1,alphaMap:Xt,alphaTest:$t,alphaHash:fe,combine:x.combine,mapUv:Q&&f(x.map.channel),aoMapUv:st&&f(x.aoMap.channel),lightMapUv:K&&f(x.lightMap.channel),bumpMapUv:G&&f(x.bumpMap.channel),normalMapUv:j&&f(x.normalMap.channel),displacementMapUv:it&&f(x.displacementMap.channel),emissiveMapUv:lt&&f(x.emissiveMap.channel),metalnessMapUv:I&&f(x.metalnessMap.channel),roughnessMapUv:E&&f(x.roughnessMap.channel),anisotropyMapUv:gt&&f(x.anisotropyMap.channel),clearcoatMapUv:Lt&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:_t&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&f(x.sheenRoughnessMap.channel),specularMapUv:Wt&&f(x.specularMap.channel),specularColorMapUv:ee&&f(x.specularColorMap.channel),specularIntensityMapUv:ct&&f(x.specularIntensityMap.channel),transmissionMapUv:Ut&&f(x.transmissionMap.channel),thicknessMapUv:vt&&f(x.thicknessMap.channel),alphaMapUv:Xt&&f(x.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(j||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ot.attributes.uv&&(Q||Xt),fog:!!at,useFog:x.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:U,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:rn,decodeVideoTexture:Q&&x.map.isVideoTexture===!0&&Ue.getTransfer(x.map.colorSpace)===qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Le,flipSided:x.side===Xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ve&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&x.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function y(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let Z in x.defines)S.push(Z),S.push(x.defines[Z]);return x.isRawShaderMaterial===!1&&(M(S,x),b(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function M(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function b(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function L(x){let S=_[x.type],Z;if(S){let tt=xi[S];Z=Sp.clone(tt.uniforms)}else Z=x.uniforms;return Z}function P(x,S){let Z;for(let tt=0,q=h.length;tt<q;tt++){let at=h[tt];if(at.cacheKey===S){Z=at,++Z.usedTimes;break}}return Z===void 0&&(Z=new D_(i,S,x,s),h.push(Z)),Z}function v(x){if(--x.usedTimes===0){let S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function T(x){c.remove(x)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:L,acquireProgram:P,releaseProgram:v,releaseShaderCache:T,programs:h,dispose:N}}function H_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function F_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function x0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,g,_,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||F_),n.length>1&&n.sort(d||y0),r.length>1&&r.sort(d||y0)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function O_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new x0,i.set(n,[o])):r>=s.length?(o=new x0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function B_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new zt};break;case"SpotLight":e={position:new A,direction:new A,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function k_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var z_=0;function V_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G_(i){let t=new B_,e=k_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);let r=new A,s=new ce,o=new ce;function a(l){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,y=0,M=0,b=0,L=0,P=0,v=0;l.sort(V_);for(let N=0,x=l.length;N<x;N++){let S=l[N],Z=S.color,tt=S.intensity,q=S.distance,at=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=Z.r*tt,u+=Z.g*tt,d+=Z.b*tt;else if(S.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(S.sh.coefficients[ot],tt);v++}else if(S.isDirectionalLight){let ot=t.get(S);if(ot.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let pt=S.shadow,D=e.get(S);D.shadowIntensity=pt.intensity,D.shadowBias=pt.bias,D.shadowNormalBias=pt.normalBias,D.shadowRadius=pt.radius,D.shadowMapSize=pt.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=S.shadow.matrix,y++}n.directional[m]=ot,m++}else if(S.isSpotLight){let ot=t.get(S);ot.position.setFromMatrixPosition(S.matrixWorld),ot.color.copy(Z).multiplyScalar(tt),ot.distance=q,ot.coneCos=Math.cos(S.angle),ot.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),ot.decay=S.decay,n.spot[_]=ot;let pt=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,pt.updateMatrices(S),S.castShadow&&P++),n.spotLightMatrix[_]=pt.matrix,S.castShadow){let D=e.get(S);D.shadowIntensity=pt.intensity,D.shadowBias=pt.bias,D.shadowNormalBias=pt.normalBias,D.shadowRadius=pt.radius,D.shadowMapSize=pt.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=at,b++}_++}else if(S.isRectAreaLight){let ot=t.get(S);ot.color.copy(Z).multiplyScalar(tt),ot.halfWidth.set(S.width*.5,0,0),ot.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=ot,f++}else if(S.isPointLight){let ot=t.get(S);if(ot.color.copy(S.color).multiplyScalar(S.intensity),ot.distance=S.distance,ot.decay=S.decay,S.castShadow){let pt=S.shadow,D=e.get(S);D.shadowIntensity=pt.intensity,D.shadowBias=pt.bias,D.shadowNormalBias=pt.normalBias,D.shadowRadius=pt.radius,D.shadowMapSize=pt.mapSize,D.shadowCameraNear=pt.camera.near,D.shadowCameraFar=pt.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=at,n.pointShadowMatrix[g]=S.shadow.matrix,M++}n.point[g]=ot,g++}else if(S.isHemisphereLight){let ot=t.get(S);ot.skyColor.copy(S.color).multiplyScalar(tt),ot.groundColor.copy(S.groundColor).multiplyScalar(tt),n.hemi[p]=ot,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qt.LTC_FLOAT_1,n.rectAreaLTC2=qt.LTC_FLOAT_2):(n.rectAreaLTC1=qt.LTC_HALF_1,n.rectAreaLTC2=qt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==m||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==f||T.hemiLength!==p||T.numDirectionalShadows!==y||T.numPointShadows!==M||T.numSpotShadows!==b||T.numSpotMaps!==L||T.numLightProbes!==v)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=v,T.directionalLength=m,T.pointLength=g,T.spotLength=_,T.rectAreaLength=f,T.hemiLength=p,T.numDirectionalShadows=y,T.numPointShadows=M,T.numSpotShadows=b,T.numSpotMaps=L,T.numLightProbes=v,n.version=z_++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0,f=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let M=l[p];if(M.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(M.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),m++}else if(M.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(M.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function M0(i){let t=new G_(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function W_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new M0(i),t.set(r,[a])):s>=o.length?(a=new M0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var uh=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fh=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},X_=`void main() {
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
}`;function Y_(i,t,e){let n=new Co,r=new Nt,s=new Nt,o=new Oe,a=new uh({depthPacking:Hd}),c=new fh,l={},h=e.maxTextureSize,u={[Un]:Xn,[Xn]:Un,[Le]:Le},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new St(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F0;let p=this.type;this.render=function(P,v,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;let N=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(dr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let tt=p!==Oi&&this.type===Oi,q=p===Oi&&this.type!==Oi;for(let at=0,ot=P.length;at<ot;at++){let pt=P[at],D=pt.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let et=D.getFrameExtents();if(r.multiply(et),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/et.x),r.x=s.x*et.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/et.y),r.y=s.y*et.y,D.mapSize.y=s.y)),D.map===null||tt===!0||q===!0){let J=this.type!==Oi?{minFilter:Rn,magFilter:Rn}:{};D.map!==null&&D.map.dispose(),D.map=new Gi(r.x,r.y,J),D.map.texture.name=pt.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let z=D.getViewportCount();for(let J=0;J<z;J++){let W=D.getViewport(J);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),Z.viewport(o),D.updateMatrices(pt,J),n=D.getFrustum(),b(v,T,D.camera,pt,this.type)}D.isPointLightShadow!==!0&&this.type===Oi&&y(D,T),D.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(N,x,S)};function y(P,v){let T=t.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Gi(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(v,null,T,d,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(v,null,T,m,_,null)}function M(P,v,T,N){let x=null,S=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)x=S;else if(x=T.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let Z=x.uuid,tt=v.uuid,q=l[Z];q===void 0&&(q={},l[Z]=q);let at=q[tt];at===void 0&&(at=x.clone(),q[tt]=at,v.addEventListener("dispose",L)),x=at}if(x.visible=v.visible,x.wireframe=v.wireframe,N===Oi?x.side=v.shadowSide!==null?v.shadowSide:v.side:x.side=v.shadowSide!==null?v.shadowSide:u[v.side],x.alphaMap=v.alphaMap,x.alphaTest=v.alphaTest,x.map=v.map,x.clipShadows=v.clipShadows,x.clippingPlanes=v.clippingPlanes,x.clipIntersection=v.clipIntersection,x.displacementMap=v.displacementMap,x.displacementScale=v.displacementScale,x.displacementBias=v.displacementBias,x.wireframeLinewidth=v.wireframeLinewidth,x.linewidth=v.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let Z=i.properties.get(x);Z.light=T}return x}function b(P,v,T,N,x){if(P.visible===!1)return;if(P.layers.test(v.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Oi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);let tt=t.update(P),q=P.material;if(Array.isArray(q)){let at=tt.groups;for(let ot=0,pt=at.length;ot<pt;ot++){let D=at[ot],et=q[D.materialIndex];if(et&&et.visible){let z=M(P,et,N,x);P.onBeforeShadow(i,P,v,T,tt,z,D),i.renderBufferDirect(T,null,tt,z,P,D),P.onAfterShadow(i,P,v,T,tt,z,D)}}}else if(q.visible){let at=M(P,q,N,x);P.onBeforeShadow(i,P,v,T,tt,at,null),i.renderBufferDirect(T,null,tt,at,P,null),P.onAfterShadow(i,P,v,T,tt,at,null)}}let Z=P.children;for(let tt=0,q=Z.length;tt<q;tt++)b(Z[tt],v,T,N,x)}function L(P){P.target.removeEventListener("dispose",L);for(let T in l){let N=l[T],x=P.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}var Z_={[_l]:yl,[xl]:vl,[Ml]:El,[Cs]:bl,[yl]:_l,[vl]:xl,[El]:Ml,[bl]:Cs};function $_(i){function t(){let ct=!1,Ut=new Oe,vt=null,Tt=new Oe(0,0,0,0);return{setMask:function(Xt){vt!==Xt&&!ct&&(i.colorMask(Xt,Xt,Xt,Xt),vt=Xt)},setLocked:function(Xt){ct=Xt},setClear:function(Xt,$t,fe,Ve,rn){rn===!0&&(Xt*=Ve,$t*=Ve,fe*=Ve),Ut.set(Xt,$t,fe,Ve),Tt.equals(Ut)===!1&&(i.clearColor(Xt,$t,fe,Ve),Tt.copy(Ut))},reset:function(){ct=!1,vt=null,Tt.set(-1,0,0,0)}}}function e(){let ct=!1,Ut=!1,vt=null,Tt=null,Xt=null;return{setReversed:function($t){Ut=$t},setTest:function($t){$t?k(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function($t){vt!==$t&&!ct&&(i.depthMask($t),vt=$t)},setFunc:function($t){if(Ut&&($t=Z_[$t]),Tt!==$t){switch($t){case _l:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case xl:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=$t}},setLocked:function($t){ct=$t},setClear:function($t){Xt!==$t&&(i.clearDepth($t),Xt=$t)},reset:function(){ct=!1,vt=null,Tt=null,Xt=null}}}function n(){let ct=!1,Ut=null,vt=null,Tt=null,Xt=null,$t=null,fe=null,Ve=null,rn=null;return{setTest:function(ye){ct||(ye?k(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(ye){Ut!==ye&&!ct&&(i.stencilMask(ye),Ut=ye)},setFunc:function(ye,sn,Gn){(vt!==ye||Tt!==sn||Xt!==Gn)&&(i.stencilFunc(ye,sn,Gn),vt=ye,Tt=sn,Xt=Gn)},setOp:function(ye,sn,Gn){($t!==ye||fe!==sn||Ve!==Gn)&&(i.stencilOp(ye,sn,Gn),$t=ye,fe=sn,Ve=Gn)},setLocked:function(ye){ct=ye},setClear:function(ye){rn!==ye&&(i.clearStencil(ye),rn=ye)},reset:function(){ct=!1,Ut=null,vt=null,Tt=null,Xt=null,$t=null,fe=null,Ve=null,rn=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,M=null,b=null,L=null,P=new zt(0,0,0),v=0,T=!1,N=null,x=null,S=null,Z=null,tt=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),at=!1,ot=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(pt)[1]),at=ot>=1):pt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),at=ot>=2);let D=null,et={},z=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),W=new Oe().fromArray(z),U=new Oe().fromArray(J);function R(ct,Ut,vt,Tt){let Xt=new Uint8Array(4),$t=i.createTexture();i.bindTexture(ct,$t),i.texParameteri(ct,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(ct,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<vt;fe++)ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Xt):i.texImage2D(Ut+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xt);return $t}let C={};C[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),C[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),C[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),k(i.DEPTH_TEST),s.setFunc(Cs),K(!1),G(Ru),k(i.CULL_FACE),w(dr);function k(ct){l[ct]!==!0&&(i.enable(ct),l[ct]=!0)}function X(ct){l[ct]!==!1&&(i.disable(ct),l[ct]=!1)}function B(ct,Ut){return h[ct]!==Ut?(i.bindFramebuffer(ct,Ut),h[ct]=Ut,ct===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ut),ct===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function F(ct,Ut){let vt=d,Tt=!1;if(ct){vt=u.get(Ut),vt===void 0&&(vt=[],u.set(Ut,vt));let Xt=ct.textures;if(vt.length!==Xt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,fe=Xt.length;$t<fe;$t++)vt[$t]=i.COLOR_ATTACHMENT0+$t;vt.length=Xt.length,Tt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(vt)}function Y(ct){return m!==ct?(i.useProgram(ct),m=ct,!0):!1}let Q={[Br]:i.FUNC_ADD,[hd]:i.FUNC_SUBTRACT,[ud]:i.FUNC_REVERSE_SUBTRACT};Q[fd]=i.MIN,Q[dd]=i.MAX;let V={[pd]:i.ZERO,[md]:i.ONE,[gd]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[Md]:i.DST_COLOR,[yd]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[xd]:i.ONE_MINUS_DST_ALPHA,[Ed]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Sd]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function w(ct,Ut,vt,Tt,Xt,$t,fe,Ve,rn,ye){if(ct===dr){g===!0&&(X(i.BLEND),g=!1);return}if(g===!1&&(k(i.BLEND),g=!0),ct!==ld){if(ct!==_||ye!==T){if((f!==Br||M!==Br)&&(i.blendEquation(i.FUNC_ADD),f=Br,M=Br),ye)switch(ct){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ct);break}else switch(ct){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ct);break}p=null,y=null,b=null,L=null,P.set(0,0,0),v=0,_=ct,T=ye}return}Xt=Xt||Ut,$t=$t||vt,fe=fe||Tt,(Ut!==f||Xt!==M)&&(i.blendEquationSeparate(Q[Ut],Q[Xt]),f=Ut,M=Xt),(vt!==p||Tt!==y||$t!==b||fe!==L)&&(i.blendFuncSeparate(V[vt],V[Tt],V[$t],V[fe]),p=vt,y=Tt,b=$t,L=fe),(Ve.equals(P)===!1||rn!==v)&&(i.blendColor(Ve.r,Ve.g,Ve.b,rn),P.copy(Ve),v=rn),_=ct,T=!1}function st(ct,Ut){ct.side===Le?X(i.CULL_FACE):k(i.CULL_FACE);let vt=ct.side===Xn;Ut&&(vt=!vt),K(vt),ct.blending===bi&&ct.transparent===!1?w(dr):w(ct.blending,ct.blendEquation,ct.blendSrc,ct.blendDst,ct.blendEquationAlpha,ct.blendSrcAlpha,ct.blendDstAlpha,ct.blendColor,ct.blendAlpha,ct.premultipliedAlpha),s.setFunc(ct.depthFunc),s.setTest(ct.depthTest),s.setMask(ct.depthWrite),r.setMask(ct.colorWrite);let Tt=ct.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(ct.stencilWriteMask),o.setFunc(ct.stencilFunc,ct.stencilRef,ct.stencilFuncMask),o.setOp(ct.stencilFail,ct.stencilZFail,ct.stencilZPass)),it(ct.polygonOffset,ct.polygonOffsetFactor,ct.polygonOffsetUnits),ct.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(ct){N!==ct&&(ct?i.frontFace(i.CW):i.frontFace(i.CCW),N=ct)}function G(ct){ct!==od?(k(i.CULL_FACE),ct!==x&&(ct===Ru?i.cullFace(i.BACK):ct===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),x=ct}function j(ct){ct!==S&&(at&&i.lineWidth(ct),S=ct)}function it(ct,Ut,vt){ct?(k(i.POLYGON_OFFSET_FILL),(Z!==Ut||tt!==vt)&&(i.polygonOffset(Ut,vt),Z=Ut,tt=vt)):X(i.POLYGON_OFFSET_FILL)}function lt(ct){ct?k(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function I(ct){ct===void 0&&(ct=i.TEXTURE0+q-1),D!==ct&&(i.activeTexture(ct),D=ct)}function E(ct,Ut,vt){vt===void 0&&(D===null?vt=i.TEXTURE0+q-1:vt=D);let Tt=et[vt];Tt===void 0&&(Tt={type:void 0,texture:void 0},et[vt]=Tt),(Tt.type!==ct||Tt.texture!==Ut)&&(D!==vt&&(i.activeTexture(vt),D=vt),i.bindTexture(ct,Ut||C[ct]),Tt.type=ct,Tt.texture=Ut)}function O(){let ct=et[D];ct!==void 0&&ct.type!==void 0&&(i.bindTexture(ct.type,null),ct.type=void 0,ct.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function _t(){try{i.texStorage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Bt(ct){W.equals(ct)===!1&&(i.scissor(ct.x,ct.y,ct.z,ct.w),W.copy(ct))}function Ct(ct){U.equals(ct)===!1&&(i.viewport(ct.x,ct.y,ct.z,ct.w),U.copy(ct))}function Pt(ct,Ut){let vt=c.get(Ut);vt===void 0&&(vt=new WeakMap,c.set(Ut,vt));let Tt=vt.get(ct);Tt===void 0&&(Tt=i.getUniformBlockIndex(Ut,ct.name),vt.set(ct,Tt))}function Wt(ct,Ut){let Tt=c.get(Ut).get(ct);a.get(Ut)!==Tt&&(i.uniformBlockBinding(Ut,Tt,ct.__bindingPointIndex),a.set(Ut,Tt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},D=null,et={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,M=null,b=null,L=null,P=new zt(0,0,0),v=0,T=!1,N=null,x=null,S=null,Z=null,tt=null,W.set(0,0,i.canvas.width,i.canvas.height),U.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:k,disable:X,bindFramebuffer:B,drawBuffers:F,useProgram:Y,setBlending:w,setMaterial:st,setFlipSided:K,setCullFace:G,setLineWidth:j,setPolygonOffset:it,setScissorTest:lt,activeTexture:I,bindTexture:E,unbindTexture:O,compressedTexImage2D:nt,compressedTexImage3D:ht,texImage2D:At,texImage3D:Gt,updateUBOMapping:Pt,uniformBlockBinding:Wt,texStorage2D:Lt,texStorage3D:_t,texSubImage2D:rt,texSubImage3D:Et,compressedTexSubImage2D:bt,compressedTexSubImage3D:gt,scissor:Bt,viewport:Ct,reset:ee}}function b0(i,t,e,n){let r=K_(n);switch(e){case V0:return i*t;case W0:return i*t;case X0:return i*t*2;case qh:return i*t/r.components*r.byteLength;case Yh:return i*t/r.components*r.byteLength;case q0:return i*t*2/r.components*r.byteLength;case Zh:return i*t*2/r.components*r.byteLength;case G0:return i*t*3/r.components*r.byteLength;case fi:return i*t*4/r.components*r.byteLength;case $h:return i*t*4/r.components*r.byteLength;case Ia:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Cl:return Math.max(i,16)*Math.max(t,8)/4;case Tl:case Al:return Math.max(i,8)*Math.max(t,8)/2;case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Na:case Yl:case Zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Y0:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kl:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K_(i){switch(i){case Vi:case B0:return{byteLength:1,components:1};case To:case k0:case ko:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case Gr:case Gh:case Mi:return{byteLength:4,components:1};case z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function J_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return m?new OffscreenCanvas(I,E):Va("canvas")}function _(I,E,O){let nt=1,ht=lt(I);if((ht.width>O||ht.height>O)&&(nt=O/Math.max(ht.width,ht.height)),nt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let rt=Math.floor(nt*ht.width),Et=Math.floor(nt*ht.height);u===void 0&&(u=g(rt,Et));let bt=E?g(rt,Et):u;return bt.width=rt,bt.height=Et,bt.getContext("2d").drawImage(I,0,0,rt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Et+")."),bt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function f(I){return I.generateMipmaps&&I.minFilter!==Rn&&I.minFilter!==hi}function p(I){i.generateMipmap(I)}function y(I,E,O,nt,ht=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let rt=E;if(E===i.RED&&(O===i.FLOAT&&(rt=i.R32F),O===i.HALF_FLOAT&&(rt=i.R16F),O===i.UNSIGNED_BYTE&&(rt=i.R8)),E===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.R8UI),O===i.UNSIGNED_SHORT&&(rt=i.R16UI),O===i.UNSIGNED_INT&&(rt=i.R32UI),O===i.BYTE&&(rt=i.R8I),O===i.SHORT&&(rt=i.R16I),O===i.INT&&(rt=i.R32I)),E===i.RG&&(O===i.FLOAT&&(rt=i.RG32F),O===i.HALF_FLOAT&&(rt=i.RG16F),O===i.UNSIGNED_BYTE&&(rt=i.RG8)),E===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.RG8UI),O===i.UNSIGNED_SHORT&&(rt=i.RG16UI),O===i.UNSIGNED_INT&&(rt=i.RG32UI),O===i.BYTE&&(rt=i.RG8I),O===i.SHORT&&(rt=i.RG16I),O===i.INT&&(rt=i.RG32I)),E===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),O===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),O===i.UNSIGNED_INT&&(rt=i.RGB32UI),O===i.BYTE&&(rt=i.RGB8I),O===i.SHORT&&(rt=i.RGB16I),O===i.INT&&(rt=i.RGB32I)),E===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),O===i.UNSIGNED_INT&&(rt=i.RGBA32UI),O===i.BYTE&&(rt=i.RGBA8I),O===i.SHORT&&(rt=i.RGBA16I),O===i.INT&&(rt=i.RGBA32I)),E===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),E===i.RGBA){let Et=ht?Oa:Ue.getTransfer(nt);O===i.FLOAT&&(rt=i.RGBA32F),O===i.HALF_FLOAT&&(rt=i.RGBA16F),O===i.UNSIGNED_BYTE&&(rt=Et===qe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function M(I,E){let O;return I?E===null||E===Gr||E===Ls?O=i.DEPTH24_STENCIL8:E===Mi?O=i.DEPTH32F_STENCIL8:E===To&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gr||E===Ls?O=i.DEPTH_COMPONENT24:E===Mi?O=i.DEPTH_COMPONENT32F:E===To&&(O=i.DEPTH_COMPONENT16),O}function b(I,E){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==Rn&&I.minFilter!==hi?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function L(I){let E=I.target;E.removeEventListener("dispose",L),v(E),E.isVideoTexture&&h.delete(E)}function P(I){let E=I.target;E.removeEventListener("dispose",P),N(E)}function v(I){let E=n.get(I);if(E.__webglInit===void 0)return;let O=I.source,nt=d.get(O);if(nt){let ht=nt[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&T(I),Object.keys(nt).length===0&&d.delete(O)}n.remove(I)}function T(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let O=I.source,nt=d.get(O);delete nt[E.__cacheKey],o.memory.textures--}function N(I){let E=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let ht=0;ht<E.__webglFramebuffer[nt].length;ht++)i.deleteFramebuffer(E.__webglFramebuffer[nt][ht]);else i.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)i.deleteFramebuffer(E.__webglFramebuffer[nt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let O=I.textures;for(let nt=0,ht=O.length;nt<ht;nt++){let rt=n.get(O[nt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(O[nt])}n.remove(I)}let x=0;function S(){x=0}function Z(){let I=x;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),x+=1,I}function tt(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function q(I,E){let O=n.get(I);if(I.isVideoTexture&&j(I),I.isRenderTargetTexture===!1&&I.version>0&&O.__version!==I.version){let nt=I.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(O,I,E);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+E)}function at(I,E){let O=n.get(I);if(I.version>0&&O.__version!==I.version){U(O,I,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+E)}function ot(I,E){let O=n.get(I);if(I.version>0&&O.__version!==I.version){U(O,I,E);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+E)}function pt(I,E){let O=n.get(I);if(I.version>0&&O.__version!==I.version){R(O,I,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+E)}let D={[Vr]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},et={[Rn]:i.NEAREST,[Ud]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[Dc]:i.LINEAR_MIPMAP_NEAREST,[zr]:i.LINEAR_MIPMAP_LINEAR},z={[Od]:i.NEVER,[Wd]:i.ALWAYS,[Bd]:i.LESS,[Z0]:i.LEQUAL,[kd]:i.EQUAL,[Gd]:i.GEQUAL,[zd]:i.GREATER,[Vd]:i.NOTEQUAL};function J(I,E){if(E.type===Mi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===hi||E.magFilter===Dc||E.magFilter===jo||E.magFilter===zr||E.minFilter===hi||E.minFilter===Dc||E.minFilter===jo||E.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,D[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,D[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,D[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,et[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,et[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Rn||E.minFilter!==jo&&E.minFilter!==zr||E.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function W(I,E){let O=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",L));let nt=E.source,ht=d.get(nt);ht===void 0&&(ht={},d.set(nt,ht));let rt=tt(E);if(rt!==I.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ht[rt].usedTimes++;let Et=ht[I.__cacheKey];Et!==void 0&&(ht[I.__cacheKey].usedTimes--,Et.usedTimes===0&&T(E)),I.__cacheKey=rt,I.__webglTexture=ht[rt].texture}return O}function U(I,E,O){let nt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=i.TEXTURE_3D);let ht=W(I,E),rt=E.source;e.bindTexture(nt,I.__webglTexture,i.TEXTURE0+O);let Et=n.get(rt);if(rt.version!==Et.__version||ht===!0){e.activeTexture(i.TEXTURE0+O);let bt=Ue.getPrimaries(Ue.workingColorSpace),gt=E.colorSpace===ur?null:Ue.getPrimaries(E.colorSpace),Lt=E.colorSpace===ur||bt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let _t=_(E.image,!1,r.maxTextureSize);_t=it(E,_t);let At=s.convert(E.format,E.colorSpace),Gt=s.convert(E.type),Bt=y(E.internalFormat,At,Gt,E.colorSpace,E.isVideoTexture);J(nt,E);let Ct,Pt=E.mipmaps,Wt=E.isVideoTexture!==!0,ee=Et.__version===void 0||ht===!0,ct=rt.dataReady,Ut=b(E,_t);if(E.isDepthTexture)Bt=M(E.format===Ds,E.type),ee&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Bt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Bt,_t.width,_t.height,0,At,Gt,null));else if(E.isDataTexture)if(Pt.length>0){Wt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,Pt[0].width,Pt[0].height);for(let vt=0,Tt=Pt.length;vt<Tt;vt++)Ct=Pt[vt],Wt?ct&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Ct.width,Ct.height,At,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,vt,Bt,Ct.width,Ct.height,0,At,Gt,Ct.data);E.generateMipmaps=!1}else Wt?(ee&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,_t.width,_t.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,At,Gt,_t.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,_t.width,_t.height,0,At,Gt,_t.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Wt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,Pt[0].width,Pt[0].height,_t.depth);for(let vt=0,Tt=Pt.length;vt<Tt;vt++)if(Ct=Pt[vt],E.format!==fi)if(At!==null)if(Wt){if(ct)if(E.layerUpdates.size>0){let Xt=b0(Ct.width,Ct.height,E.format,E.type);for(let $t of E.layerUpdates){let fe=Ct.data.subarray($t*Xt/Ct.data.BYTES_PER_ELEMENT,($t+1)*Xt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,$t,Ct.width,Ct.height,1,At,fe,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Ct.width,Ct.height,_t.depth,At,Ct.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Bt,Ct.width,Ct.height,_t.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Ct.width,Ct.height,_t.depth,At,Gt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Bt,Ct.width,Ct.height,_t.depth,0,At,Gt,Ct.data)}else{Wt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ut,Bt,Pt[0].width,Pt[0].height);for(let vt=0,Tt=Pt.length;vt<Tt;vt++)Ct=Pt[vt],E.format!==fi?At!==null?Wt?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Bt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?ct&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Ct.width,Ct.height,At,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,vt,Bt,Ct.width,Ct.height,0,At,Gt,Ct.data)}else if(E.isDataArrayTexture)if(Wt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Bt,_t.width,_t.height,_t.depth),ct)if(E.layerUpdates.size>0){let vt=b0(_t.width,_t.height,E.format,E.type);for(let Tt of E.layerUpdates){let Xt=_t.data.subarray(Tt*vt/_t.data.BYTES_PER_ELEMENT,(Tt+1)*vt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,_t.width,_t.height,1,At,Gt,Xt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,At,Gt,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,_t.width,_t.height,_t.depth,0,At,Gt,_t.data);else if(E.isData3DTexture)Wt?(ee&&e.texStorage3D(i.TEXTURE_3D,Ut,Bt,_t.width,_t.height,_t.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,At,Gt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,_t.width,_t.height,_t.depth,0,At,Gt,_t.data);else if(E.isFramebufferTexture){if(ee)if(Wt)e.texStorage2D(i.TEXTURE_2D,Ut,Bt,_t.width,_t.height);else{let vt=_t.width,Tt=_t.height;for(let Xt=0;Xt<Ut;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,Bt,vt,Tt,0,At,Gt,null),vt>>=1,Tt>>=1}}else if(Pt.length>0){if(Wt&&ee){let vt=lt(Pt[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,vt.width,vt.height)}for(let vt=0,Tt=Pt.length;vt<Tt;vt++)Ct=Pt[vt],Wt?ct&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,At,Gt,Ct):e.texImage2D(i.TEXTURE_2D,vt,Bt,At,Gt,Ct);E.generateMipmaps=!1}else if(Wt){if(ee){let vt=lt(_t);e.texStorage2D(i.TEXTURE_2D,Ut,Bt,vt.width,vt.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Gt,_t)}else e.texImage2D(i.TEXTURE_2D,0,Bt,At,Gt,_t);f(E)&&p(nt),Et.__version=rt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function R(I,E,O){if(E.image.length!==6)return;let nt=W(I,E),ht=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+O);let rt=n.get(ht);if(ht.version!==rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+O);let Et=Ue.getPrimaries(Ue.workingColorSpace),bt=E.colorSpace===ur?null:Ue.getPrimaries(E.colorSpace),gt=E.colorSpace===ur||Et===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,_t=E.image[0]&&E.image[0].isDataTexture,At=[];for(let Tt=0;Tt<6;Tt++)!Lt&&!_t?At[Tt]=_(E.image[Tt],!0,r.maxCubemapSize):At[Tt]=_t?E.image[Tt].image:E.image[Tt],At[Tt]=it(E,At[Tt]);let Gt=At[0],Bt=s.convert(E.format,E.colorSpace),Ct=s.convert(E.type),Pt=y(E.internalFormat,Bt,Ct,E.colorSpace),Wt=E.isVideoTexture!==!0,ee=rt.__version===void 0||nt===!0,ct=ht.dataReady,Ut=b(E,Gt);J(i.TEXTURE_CUBE_MAP,E);let vt;if(Lt){Wt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Pt,Gt.width,Gt.height);for(let Tt=0;Tt<6;Tt++){vt=At[Tt].mipmaps;for(let Xt=0;Xt<vt.length;Xt++){let $t=vt[Xt];E.format!==fi?Bt!==null?Wt?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,0,0,$t.width,$t.height,Bt,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,Pt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,0,0,$t.width,$t.height,Bt,Ct,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,Pt,$t.width,$t.height,0,Bt,Ct,$t.data)}}}else{if(vt=E.mipmaps,Wt&&ee){vt.length>0&&Ut++;let Tt=lt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Pt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(_t){Wt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,At[Tt].width,At[Tt].height,Bt,Ct,At[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Pt,At[Tt].width,At[Tt].height,0,Bt,Ct,At[Tt].data);for(let Xt=0;Xt<vt.length;Xt++){let fe=vt[Xt].image[Tt].image;Wt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,0,0,fe.width,fe.height,Bt,Ct,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,Pt,fe.width,fe.height,0,Bt,Ct,fe.data)}}else{Wt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Bt,Ct,At[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Pt,Bt,Ct,At[Tt]);for(let Xt=0;Xt<vt.length;Xt++){let $t=vt[Xt];Wt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,0,0,Bt,Ct,$t.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,Pt,Bt,Ct,$t.image[Tt])}}}f(E)&&p(i.TEXTURE_CUBE_MAP),rt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function C(I,E,O,nt,ht,rt){let Et=s.convert(O.format,O.colorSpace),bt=s.convert(O.type),gt=y(O.internalFormat,Et,bt,O.colorSpace);if(!n.get(E).__hasExternalTextures){let _t=Math.max(1,E.width>>rt),At=Math.max(1,E.height>>rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,gt,_t,At,E.depth,0,Et,bt,null):e.texImage2D(ht,rt,gt,_t,At,0,Et,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),G(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ht,n.get(O).__webglTexture,0,K(E)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ht,n.get(O).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(I,E,O){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let nt=E.depthTexture,ht=nt&&nt.isDepthTexture?nt.type:null,rt=M(E.stencilBuffer,ht),Et=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=K(E);G(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,rt,E.width,E.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,rt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,rt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,I)}else{let nt=E.textures;for(let ht=0;ht<nt.length;ht++){let rt=nt[ht],Et=s.convert(rt.format,rt.colorSpace),bt=s.convert(rt.type),gt=y(rt.internalFormat,Et,bt,rt.colorSpace),Lt=K(E);O&&G(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,gt,E.width,E.height):G(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,gt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,gt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);let nt=n.get(E.depthTexture).__webglTexture,ht=K(E);if(E.depthTexture.format===Ts)G(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(E.depthTexture.format===Ds)G(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function B(I){let E=n.get(I),O=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let nt=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){let ht=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",ht)};nt.addEventListener("dispose",ht),E.__depthDisposeCallback=ht}E.__boundDepthTexture=nt}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");X(E.__webglFramebuffer,I)}else if(O){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=i.createRenderbuffer(),k(E.__webglDepthbuffer[nt],I,!1);else{let ht=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),k(E.__webglDepthbuffer,I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(I,E,O){let nt=n.get(I);E!==void 0&&C(nt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&B(I)}function Y(I){let E=I.texture,O=n.get(I),nt=n.get(E);I.addEventListener("dispose",P);let ht=I.textures,rt=I.isWebGLCubeRenderTarget===!0,Et=ht.length>1;if(Et||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=E.version,o.memory.textures++),rt){O.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[bt]=[];for(let gt=0;gt<E.mipmaps.length;gt++)O.__webglFramebuffer[bt][gt]=i.createFramebuffer()}else O.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let bt=0;bt<E.mipmaps.length;bt++)O.__webglFramebuffer[bt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let bt=0,gt=ht.length;bt<gt;bt++){let Lt=n.get(ht[bt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&G(I)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let bt=0;bt<ht.length;bt++){let gt=ht[bt];O.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[bt]);let Lt=s.convert(gt.format,gt.colorSpace),_t=s.convert(gt.type),At=y(gt.internalFormat,Lt,_t,gt.colorSpace,I.isXRRenderTarget===!0),Gt=K(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,At,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,O.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),k(O.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),J(i.TEXTURE_CUBE_MAP,E);for(let bt=0;bt<6;bt++)if(E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)C(O.__webglFramebuffer[bt][gt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,gt);else C(O.__webglFramebuffer[bt],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);f(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let bt=0,gt=ht.length;bt<gt;bt++){let Lt=ht[bt],_t=n.get(Lt);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),J(i.TEXTURE_2D,Lt),C(O.__webglFramebuffer,I,Lt,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),f(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(bt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,nt.__webglTexture),J(bt,E),E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)C(O.__webglFramebuffer[gt],I,E,i.COLOR_ATTACHMENT0,bt,gt);else C(O.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,bt,0);f(E)&&p(bt),e.unbindTexture()}I.depthBuffer&&B(I)}function Q(I){let E=I.textures;for(let O=0,nt=E.length;O<nt;O++){let ht=E[O];if(f(ht)){let rt=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(ht).__webglTexture;e.bindTexture(rt,Et),p(rt),e.unbindTexture()}}}let V=[],w=[];function st(I){if(I.samples>0){if(G(I)===!1){let E=I.textures,O=I.width,nt=I.height,ht=i.COLOR_BUFFER_BIT,rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(I),bt=E.length>1;if(bt)for(let gt=0;gt<E.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<E.length;gt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Lt=n.get(E[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,O,nt,0,0,O,nt,ht,i.NEAREST),c===!0&&(V.length=0,w.length=0,V.push(i.COLOR_ATTACHMENT0+gt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(V.push(rt),w.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let gt=0;gt<E.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);let Lt=n.get(E[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function K(I){return Math.min(r.maxSamples,I.samples)}function G(I){let E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function j(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function it(I,E){let O=I.colorSpace,nt=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||O!==yr&&O!==ur&&(Ue.getTransfer(O)===qe?(nt!==fi||ht!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function lt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=S,this.setTexture2D=q,this.setTexture2DArray=at,this.setTexture3D=ot,this.setTextureCube=pt,this.rebindTextures=F,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=C,this.useMultisampledRTT=G}function j_(i,t){function e(n,r=ur){let s,o=Ue.getTransfer(r);if(n===Vi)return i.UNSIGNED_BYTE;if(n===Wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===z0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===B0)return i.BYTE;if(n===k0)return i.SHORT;if(n===To)return i.UNSIGNED_SHORT;if(n===Gh)return i.INT;if(n===Gr)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===ko)return i.HALF_FLOAT;if(n===V0)return i.ALPHA;if(n===G0)return i.RGB;if(n===fi)return i.RGBA;if(n===W0)return i.LUMINANCE;if(n===X0)return i.LUMINANCE_ALPHA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===qh)return i.RED;if(n===Yh)return i.RED_INTEGER;if(n===q0)return i.RG;if(n===Zh)return i.RG_INTEGER;if(n===$h)return i.RGBA_INTEGER;if(n===Ia||n===La||n===Da||n===Ua)if(o===qe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Rl||n===Al||n===Cl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Il||n===Ll)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pl||n===Il)return o===qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dl||n===Ul||n===Nl||n===Hl||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return o===qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Yl||n===Zl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Na)return o===qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Y0||n===$l||n===Kl||n===Jl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Na)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dh=class extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q_={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ty=`
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

}`,ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new qn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:ty,fragmentShader:ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mh=class extends mr{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=new ph,f=e.getContextAttributes(),p=null,y=null,M=[],b=[],L=new Nt,P=null,v=new vn;v.layers.enable(1),v.viewport=new Oe;let T=new vn;T.layers.enable(2),T.viewport=new Oe;let N=[v,T],x=new dh;x.layers.enable(1),x.layers.enable(2);let S=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let C=M[R];return C===void 0&&(C=new bo,M[R]=C),C.getTargetRaySpace()},this.getControllerGrip=function(R){let C=M[R];return C===void 0&&(C=new bo,M[R]=C),C.getGripSpace()},this.getHand=function(R){let C=M[R];return C===void 0&&(C=new bo,M[R]=C),C.getHandSpace()};function tt(R){let C=b.indexOf(R.inputSource);if(C===-1)return;let k=M[C];k!==void 0&&(k.update(R.inputSource,R.frame,l||o),k.dispatchEvent({type:R.type,data:R.inputSource}))}function q(){r.removeEventListener("select",tt),r.removeEventListener("selectstart",tt),r.removeEventListener("selectend",tt),r.removeEventListener("squeeze",tt),r.removeEventListener("squeezestart",tt),r.removeEventListener("squeezeend",tt),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",at);for(let R=0;R<M.length;R++){let C=b[R];C!==null&&(b[R]=null,M[R].disconnect(C))}S=null,Z=null,_.reset(),t.setRenderTarget(p),m=null,d=null,u=null,r=null,y=null,U.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",tt),r.addEventListener("selectstart",tt),r.addEventListener("selectend",tt),r.addEventListener("squeeze",tt),r.addEventListener("squeezestart",tt),r.addEventListener("squeezeend",tt),r.addEventListener("end",q),r.addEventListener("inputsourceschange",at),f.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){let C={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,C),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Gi(m.framebufferWidth,m.framebufferHeight,{format:fi,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let C=null,k=null,X=null;f.depth&&(X=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=f.stencil?Ds:Ts,k=f.stencil?Ls:Gr);let B={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(B),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Gi(d.textureWidth,d.textureHeight,{format:fi,type:Vi,depthTexture:new ja(d.textureWidth,d.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),U.setContext(r),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function at(R){for(let C=0;C<R.removed.length;C++){let k=R.removed[C],X=b.indexOf(k);X>=0&&(b[X]=null,M[X].disconnect(k))}for(let C=0;C<R.added.length;C++){let k=R.added[C],X=b.indexOf(k);if(X===-1){for(let F=0;F<M.length;F++)if(F>=b.length){b.push(k),X=F;break}else if(b[F]===null){b[F]=k,X=F;break}if(X===-1)break}let B=M[X];B&&B.connect(k)}}let ot=new A,pt=new A;function D(R,C,k){ot.setFromMatrixPosition(C.matrixWorld),pt.setFromMatrixPosition(k.matrixWorld);let X=ot.distanceTo(pt),B=C.projectionMatrix.elements,F=k.projectionMatrix.elements,Y=B[14]/(B[10]-1),Q=B[14]/(B[10]+1),V=(B[9]+1)/B[5],w=(B[9]-1)/B[5],st=(B[8]-1)/B[0],K=(F[8]+1)/F[0],G=Y*st,j=Y*K,it=X/(-st+K),lt=it*-st;if(C.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(lt),R.translateZ(it),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),B[10]===-1)R.projectionMatrix.copy(C.projectionMatrix),R.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{let I=Y+it,E=Q+it,O=G-lt,nt=j+(X-lt),ht=V*Q/E*I,rt=w*Q/E*I;R.projectionMatrix.makePerspective(O,nt,ht,rt,I,E),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function et(R,C){C===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(C.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;let C=R.near,k=R.far;_.texture!==null&&(_.depthNear>0&&(C=_.depthNear),_.depthFar>0&&(k=_.depthFar)),x.near=T.near=v.near=C,x.far=T.far=v.far=k,(S!==x.near||Z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,Z=x.far);let X=R.parent,B=x.cameras;et(x,X);for(let F=0;F<B.length;F++)et(B[F],X);B.length===2?D(x,v,T):x.projectionMatrix.copy(v.projectionMatrix),z(R,x,X)};function z(R,C,k){k===null?R.matrix.copy(C.matrixWorld):(R.matrix.copy(k.matrixWorld),R.matrix.invert(),R.matrix.multiply(C.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(C.projectionMatrix),R.projectionMatrixInverse.copy(C.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Ro*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(R){c=R,d!==null&&(d.fixedFoveation=R),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=R)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let J=null;function W(R,C){if(h=C.getViewerPose(l||o),g=C,h!==null){let k=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let X=!1;k.length!==x.cameras.length&&(x.cameras.length=0,X=!0);for(let F=0;F<k.length;F++){let Y=k[F],Q=null;if(m!==null)Q=m.getViewport(Y);else{let w=u.getViewSubImage(d,Y);Q=w.viewport,F===0&&(t.setRenderTargetTextures(y,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(y))}let V=N[F];V===void 0&&(V=new vn,V.layers.enable(F),V.viewport=new Oe,N[F]=V),V.matrix.fromArray(Y.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Y.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Q.x,Q.y,Q.width,Q.height),F===0&&(x.matrix.copy(V.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),X===!0&&x.cameras.push(V)}let B=r.enabledFeatures;if(B&&B.includes("depth-sensing")){let F=u.getDepthInformation(k[0]);F&&F.isValid&&F.texture&&_.init(t,F,r.renderState)}}for(let k=0;k<M.length;k++){let X=b[k],B=M[k];X!==null&&B!==void 0&&B.update(X,C,l||o)}J&&J(R,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),g=null}let U=new j0;U.setAnimationLoop(W),this.setAnimationLoop=function(R){J=R},this.dispose=function(){}}},Fr=new wn,ny=new ce;function iy(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,J0(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,y,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,y,M):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Xn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Xn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,b=y.envMapRotation;M&&(f.envMap.value=M,Fr.copy(b),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),f.envMapRotation.value.setFromMatrix4(ny.makeRotationFromEuler(Fr)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,y,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=M*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let y=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ry(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let b=M.program;n.uniformBlockBinding(y,b)}function l(y,M){let b=r[y.id];b===void 0&&(g(y),b=h(y),r[y.id]=b,y.addEventListener("dispose",f));let L=M.program;n.updateUBOMapping(y,L);let P=t.render.frame;s[y.id]!==P&&(d(y),s[y.id]=P)}function h(y){let M=u();y.__bindingPointIndex=M;let b=i.createBuffer(),L=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=r[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,v=b.length;P<v;P++){let T=Array.isArray(b[P])?b[P]:[b[P]];for(let N=0,x=T.length;N<x;N++){let S=T[N];if(m(S,P,N,L)===!0){let Z=S.__offset,tt=Array.isArray(S.value)?S.value:[S.value],q=0;for(let at=0;at<tt.length;at++){let ot=tt[at],pt=_(ot);typeof ot=="number"||typeof ot=="boolean"?(S.__data[0]=ot,i.bufferSubData(i.UNIFORM_BUFFER,Z+q,S.__data)):ot.isMatrix3?(S.__data[0]=ot.elements[0],S.__data[1]=ot.elements[1],S.__data[2]=ot.elements[2],S.__data[3]=0,S.__data[4]=ot.elements[3],S.__data[5]=ot.elements[4],S.__data[6]=ot.elements[5],S.__data[7]=0,S.__data[8]=ot.elements[6],S.__data[9]=ot.elements[7],S.__data[10]=ot.elements[8],S.__data[11]=0):(ot.toArray(S.__data,q),q+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,M,b,L){let P=y.value,v=M+"_"+b;if(L[v]===void 0)return typeof P=="number"||typeof P=="boolean"?L[v]=P:L[v]=P.clone(),!0;{let T=L[v];if(typeof P=="number"||typeof P=="boolean"){if(T!==P)return L[v]=P,!0}else if(T.equals(P)===!1)return T.copy(P),!0}return!1}function g(y){let M=y.uniforms,b=0,L=16;for(let v=0,T=M.length;v<T;v++){let N=Array.isArray(M[v])?M[v]:[M[v]];for(let x=0,S=N.length;x<S;x++){let Z=N[x],tt=Array.isArray(Z.value)?Z.value:[Z.value];for(let q=0,at=tt.length;q<at;q++){let ot=tt[q],pt=_(ot),D=b%L,et=D%pt.boundary,z=D+et;b+=et,z!==0&&L-z<pt.storage&&(b+=L-z),Z.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=pt.storage}}}let P=b%L;return P>0&&(b+=L-P),y.__size=b,y.__cache={},this}function _(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function f(y){let M=y.target;M.removeEventListener("dispose",f);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Ns=class{constructor(t={}){let{canvas:e=ap(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=pr,this.toneMappingExposure=1;let M=this,b=!1,L=0,P=0,v=null,T=-1,N=null,x=new Oe,S=new Oe,Z=null,tt=new zt(0),q=0,at=e.width,ot=e.height,pt=1,D=null,et=null,z=new Oe(0,0,at,ot),J=new Oe(0,0,at,ot),W=!1,U=new Co,R=!1,C=!1,k=new ce,X=new ce,B=new A,F=new Oe,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function V(){return v===null?pt:1}let w=n;function st(H,ft){return e.getContext(H,ft)}try{let H={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",$t,!1),w===null){let ft="webgl2";if(w=st(ft,H),w===null)throw st(ft)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(H){throw console.error("THREE.WebGLRenderer: "+H.message),H}let K,G,j,it,lt,I,E,O,nt,ht,rt,Et,bt,gt,Lt,_t,At,Gt,Bt,Ct,Pt,Wt,ee,ct;function Ut(){K=new M1(w),K.init(),Wt=new j_(w,K),G=new p1(w,K,t,Wt),j=new $_(w),G.reverseDepthBuffer&&j.buffers.depth.setReversed(!0),it=new E1(w),lt=new H_,I=new J_(w,K,j,lt,G,Wt,it),E=new g1(M),O=new x1(M),nt=new Pp(w),ee=new f1(w,nt),ht=new b1(w,nt,it,ee),rt=new S1(w,ht,nt,it),Bt=new w1(w,G,I),_t=new m1(lt),Et=new N_(M,E,O,K,G,ee,_t),bt=new iy(M,lt),gt=new O_,Lt=new W_(K),Gt=new u1(M,E,O,j,rt,d,c),At=new Y_(M,rt,G),ct=new ry(w,it,G,j),Ct=new d1(w,K,it),Pt=new v1(w,K,it),it.programs=Et.programs,M.capabilities=G,M.extensions=K,M.properties=lt,M.renderLists=gt,M.shadowMap=At,M.state=j,M.info=it}Ut();let vt=new mh(M,w);this.xr=vt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let H=K.get("WEBGL_lose_context");H&&H.loseContext()},this.forceContextRestore=function(){let H=K.get("WEBGL_lose_context");H&&H.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(H){H!==void 0&&(pt=H,this.setSize(at,ot,!1))},this.getSize=function(H){return H.set(at,ot)},this.setSize=function(H,ft,yt=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=H,ot=ft,e.width=Math.floor(H*pt),e.height=Math.floor(ft*pt),yt===!0&&(e.style.width=H+"px",e.style.height=ft+"px"),this.setViewport(0,0,H,ft)},this.getDrawingBufferSize=function(H){return H.set(at*pt,ot*pt).floor()},this.setDrawingBufferSize=function(H,ft,yt){at=H,ot=ft,pt=yt,e.width=Math.floor(H*yt),e.height=Math.floor(ft*yt),this.setViewport(0,0,H,ft)},this.getCurrentViewport=function(H){return H.copy(x)},this.getViewport=function(H){return H.copy(z)},this.setViewport=function(H,ft,yt,Mt){H.isVector4?z.set(H.x,H.y,H.z,H.w):z.set(H,ft,yt,Mt),j.viewport(x.copy(z).multiplyScalar(pt).round())},this.getScissor=function(H){return H.copy(J)},this.setScissor=function(H,ft,yt,Mt){H.isVector4?J.set(H.x,H.y,H.z,H.w):J.set(H,ft,yt,Mt),j.scissor(S.copy(J).multiplyScalar(pt).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(H){j.setScissorTest(W=H)},this.setOpaqueSort=function(H){D=H},this.setTransparentSort=function(H){et=H},this.getClearColor=function(H){return H.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(H=!0,ft=!0,yt=!0){let Mt=0;if(H){let ut=!1;if(v!==null){let Ft=v.texture.format;ut=Ft===$h||Ft===Zh||Ft===Yh}if(ut){let Ft=v.texture.type,Zt=Ft===Vi||Ft===Gr||Ft===To||Ft===Ls||Ft===Wh||Ft===Xh,Kt=Gt.getClearColor(),jt=Gt.getClearAlpha(),te=Kt.r,se=Kt.g,ne=Kt.b;Zt?(m[0]=te,m[1]=se,m[2]=ne,m[3]=jt,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=te,g[1]=se,g[2]=ne,g[3]=jt,w.clearBufferiv(w.COLOR,0,g))}else Mt|=w.COLOR_BUFFER_BIT}ft&&(Mt|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),yt&&(Mt|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),gt.dispose(),Lt.dispose(),lt.dispose(),E.dispose(),O.dispose(),rt.dispose(),ee.dispose(),ct.dispose(),Et.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",$n),vt.removeEventListener("sessionend",Tr),_i.stop()};function Tt(H){H.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let H=it.autoReset,ft=At.enabled,yt=At.autoUpdate,Mt=At.needsUpdate,ut=At.type;Ut(),it.autoReset=H,At.enabled=ft,At.autoUpdate=yt,At.needsUpdate=Mt,At.type=ut}function $t(H){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",H.statusMessage)}function fe(H){let ft=H.target;ft.removeEventListener("dispose",fe),Ve(ft)}function Ve(H){rn(H),lt.remove(H)}function rn(H){let ft=lt.get(H).programs;ft!==void 0&&(ft.forEach(function(yt){Et.releaseProgram(yt)}),H.isShaderMaterial&&Et.releaseShaderCache(H))}this.renderBufferDirect=function(H,ft,yt,Mt,ut,Ft){ft===null&&(ft=Y);let Zt=ut.isMesh&&ut.matrixWorld.determinant()<0,Kt=yi(H,ft,yt,Mt,ut);j.setMaterial(Mt,Zt);let jt=yt.index,te=1;if(Mt.wireframe===!0){if(jt=ht.getWireframeAttribute(yt),jt===void 0)return;te=2}let se=yt.drawRange,ne=yt.attributes.position,Ie=se.start*te,Fe=(se.start+se.count)*te;Ft!==null&&(Ie=Math.max(Ie,Ft.start*te),Fe=Math.min(Fe,(Ft.start+Ft.count)*te)),jt!==null?(Ie=Math.max(Ie,0),Fe=Math.min(Fe,jt.count)):ne!=null&&(Ie=Math.max(Ie,0),Fe=Math.min(Fe,ne.count));let Ge=Fe-Ie;if(Ge<0||Ge===1/0)return;ee.setup(ut,Mt,Kt,yt,jt);let Ke,we=Ct;if(jt!==null&&(Ke=nt.get(jt),we=Pt,we.setIndex(Ke)),ut.isMesh)Mt.wireframe===!0?(j.setLineWidth(Mt.wireframeLinewidth*V()),we.setMode(w.LINES)):we.setMode(w.TRIANGLES);else if(ut.isLine){let ie=Mt.linewidth;ie===void 0&&(ie=1),j.setLineWidth(ie*V()),ut.isLineSegments?we.setMode(w.LINES):ut.isLineLoop?we.setMode(w.LINE_LOOP):we.setMode(w.LINE_STRIP)}else ut.isPoints?we.setMode(w.POINTS):ut.isSprite&&we.setMode(w.TRIANGLES);if(ut.isBatchedMesh)if(ut._multiDrawInstances!==null)we.renderMultiDrawInstances(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount,ut._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))we.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let ie=ut._multiDrawStarts,Me=ut._multiDrawCounts,Pe=ut._multiDrawCount,Je=jt?nt.get(jt).bytesPerElement:1,nr=lt.get(Mt).currentProgram.getUniforms();for(let On=0;On<Pe;On++)nr.setValue(w,"_gl_DrawID",On),we.render(ie[On]/Je,Me[On])}else if(ut.isInstancedMesh)we.renderInstances(Ie,Ge,ut.count);else if(yt.isInstancedBufferGeometry){let ie=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,Me=Math.min(yt.instanceCount,ie);we.renderInstances(Ie,Ge,Me)}else we.render(Ie,Ge)};function ye(H,ft,yt){H.transparent===!0&&H.side===Le&&H.forceSinglePass===!1?(H.side=Xn,H.needsUpdate=!0,Ce(H,ft,yt),H.side=Un,H.needsUpdate=!0,Ce(H,ft,yt),H.side=Le):Ce(H,ft,yt)}this.compile=function(H,ft,yt=null){yt===null&&(yt=H),f=Lt.get(yt),f.init(ft),y.push(f),yt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ft.layers)&&(f.pushLight(ut),ut.castShadow&&f.pushShadow(ut))}),H!==yt&&H.traverseVisible(function(ut){ut.isLight&&ut.layers.test(ft.layers)&&(f.pushLight(ut),ut.castShadow&&f.pushShadow(ut))}),f.setupLights();let Mt=new Set;return H.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let Ft=ut.material;if(Ft)if(Array.isArray(Ft))for(let Zt=0;Zt<Ft.length;Zt++){let Kt=Ft[Zt];ye(Kt,yt,ut),Mt.add(Kt)}else ye(Ft,yt,ut),Mt.add(Ft)}),y.pop(),f=null,Mt},this.compileAsync=function(H,ft,yt=null){let Mt=this.compile(H,ft,yt);return new Promise(ut=>{function Ft(){if(Mt.forEach(function(Zt){lt.get(Zt).currentProgram.isReady()&&Mt.delete(Zt)}),Mt.size===0){ut(H);return}setTimeout(Ft,10)}K.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let sn=null;function Gn(H){sn&&sn(H)}function $n(){_i.stop()}function Tr(){_i.start()}let _i=new j0;_i.setAnimationLoop(Gn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(H){sn=H,vt.setAnimationLoop(H),H===null?_i.stop():_i.start()},vt.addEventListener("sessionstart",$n),vt.addEventListener("sessionend",Tr),this.render=function(H,ft){if(ft!==void 0&&ft.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ft.parent===null&&ft.matrixWorldAutoUpdate===!0&&ft.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(ft),ft=vt.getCamera()),H.isScene===!0&&H.onBeforeRender(M,H,ft,v),f=Lt.get(H,y.length),f.init(ft),y.push(f),X.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),U.setFromProjectionMatrix(X),C=this.localClippingEnabled,R=_t.init(this.clippingPlanes,C),_=gt.get(H,p.length),_.init(),p.push(_),vt.enabled===!0&&vt.isPresenting===!0){let Ft=M.xr.getDepthSensingMesh();Ft!==null&&Qs(Ft,ft,-1/0,M.sortObjects)}Qs(H,ft,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(D,et),Q=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Q&&Gt.addToRenderList(_,H),this.info.render.frame++,R===!0&&_t.beginShadows();let yt=f.state.shadowsArray;At.render(yt,H,ft),R===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let Mt=_.opaque,ut=_.transmissive;if(f.setupLights(),ft.isArrayCamera){let Ft=ft.cameras;if(ut.length>0)for(let Zt=0,Kt=Ft.length;Zt<Kt;Zt++){let jt=Ft[Zt];Qi(Mt,ut,H,jt)}Q&&Gt.render(H);for(let Zt=0,Kt=Ft.length;Zt<Kt;Zt++){let jt=Ft[Zt];Yo(_,H,jt,jt.viewport)}}else ut.length>0&&Qi(Mt,ut,H,ft),Q&&Gt.render(H),Yo(_,H,ft);v!==null&&(I.updateMultisampleRenderTarget(v),I.updateRenderTargetMipmap(v)),H.isScene===!0&&H.onAfterRender(M,H,ft),ee.resetDefaultState(),T=-1,N=null,y.pop(),y.length>0?(f=y[y.length-1],R===!0&&_t.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Qs(H,ft,yt,Mt){if(H.visible===!1)return;if(H.layers.test(ft.layers)){if(H.isGroup)yt=H.renderOrder;else if(H.isLOD)H.autoUpdate===!0&&H.update(ft);else if(H.isLight)f.pushLight(H),H.castShadow&&f.pushShadow(H);else if(H.isSprite){if(!H.frustumCulled||U.intersectsSprite(H)){Mt&&F.setFromMatrixPosition(H.matrixWorld).applyMatrix4(X);let Zt=rt.update(H),Kt=H.material;Kt.visible&&_.push(H,Zt,Kt,yt,F.z,null)}}else if((H.isMesh||H.isLine||H.isPoints)&&(!H.frustumCulled||U.intersectsObject(H))){let Zt=rt.update(H),Kt=H.material;if(Mt&&(H.boundingSphere!==void 0?(H.boundingSphere===null&&H.computeBoundingSphere(),F.copy(H.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),F.copy(Zt.boundingSphere.center)),F.applyMatrix4(H.matrixWorld).applyMatrix4(X)),Array.isArray(Kt)){let jt=Zt.groups;for(let te=0,se=jt.length;te<se;te++){let ne=jt[te],Ie=Kt[ne.materialIndex];Ie&&Ie.visible&&_.push(H,Zt,Ie,yt,F.z,ne)}}else Kt.visible&&_.push(H,Zt,Kt,yt,F.z,null)}}let Ft=H.children;for(let Zt=0,Kt=Ft.length;Zt<Kt;Zt++)Qs(Ft[Zt],ft,yt,Mt)}function Yo(H,ft,yt,Mt){let ut=H.opaque,Ft=H.transmissive,Zt=H.transparent;f.setupLightsView(yt),R===!0&&_t.setGlobalState(M.clippingPlanes,yt),Mt&&j.viewport(x.copy(Mt)),ut.length>0&&tr(ut,ft,yt),Ft.length>0&&tr(Ft,ft,yt),Zt.length>0&&tr(Zt,ft,yt),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Qi(H,ft,yt,Mt){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Mt.id]===void 0&&(f.state.transmissionRenderTarget[Mt.id]=new Gi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?ko:Vi,minFilter:zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));let Ft=f.state.transmissionRenderTarget[Mt.id],Zt=Mt.viewport||x;Ft.setSize(Zt.z,Zt.w);let Kt=M.getRenderTarget();M.setRenderTarget(Ft),M.getClearColor(tt),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),Q&&Gt.render(yt);let jt=M.toneMapping;M.toneMapping=pr;let te=Mt.viewport;if(Mt.viewport!==void 0&&(Mt.viewport=void 0),f.setupLightsView(Mt),R===!0&&_t.setGlobalState(M.clippingPlanes,Mt),tr(H,yt,Mt),I.updateMultisampleRenderTarget(Ft),I.updateRenderTargetMipmap(Ft),K.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ne=0,Ie=ft.length;ne<Ie;ne++){let Fe=ft[ne],Ge=Fe.object,Ke=Fe.geometry,we=Fe.material,ie=Fe.group;if(we.side===Le&&Ge.layers.test(Mt.layers)){let Me=we.side;we.side=Xn,we.needsUpdate=!0,es(Ge,yt,Mt,Ke,we,ie),we.side=Me,we.needsUpdate=!0,se=!0}}se===!0&&(I.updateMultisampleRenderTarget(Ft),I.updateRenderTargetMipmap(Ft))}M.setRenderTarget(Kt),M.setClearColor(tt,q),te!==void 0&&(Mt.viewport=te),M.toneMapping=jt}function tr(H,ft,yt){let Mt=ft.isScene===!0?ft.overrideMaterial:null;for(let ut=0,Ft=H.length;ut<Ft;ut++){let Zt=H[ut],Kt=Zt.object,jt=Zt.geometry,te=Mt===null?Zt.material:Mt,se=Zt.group;Kt.layers.test(yt.layers)&&es(Kt,ft,yt,jt,te,se)}}function es(H,ft,yt,Mt,ut,Ft){H.onBeforeRender(M,ft,yt,Mt,ut,Ft),H.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,H.matrixWorld),H.normalMatrix.getNormalMatrix(H.modelViewMatrix),ut.onBeforeRender(M,ft,yt,Mt,H,Ft),ut.transparent===!0&&ut.side===Le&&ut.forceSinglePass===!1?(ut.side=Xn,ut.needsUpdate=!0,M.renderBufferDirect(yt,ft,Mt,ut,H,Ft),ut.side=Un,ut.needsUpdate=!0,M.renderBufferDirect(yt,ft,Mt,ut,H,Ft),ut.side=Le):M.renderBufferDirect(yt,ft,Mt,ut,H,Ft),H.onAfterRender(M,ft,yt,Mt,ut,Ft)}function Ce(H,ft,yt){ft.isScene!==!0&&(ft=Y);let Mt=lt.get(H),ut=f.state.lights,Ft=f.state.shadowsArray,Zt=ut.state.version,Kt=Et.getParameters(H,ut.state,Ft,ft,yt),jt=Et.getProgramCacheKey(Kt),te=Mt.programs;Mt.environment=H.isMeshStandardMaterial?ft.environment:null,Mt.fog=ft.fog,Mt.envMap=(H.isMeshStandardMaterial?O:E).get(H.envMap||Mt.environment),Mt.envMapRotation=Mt.environment!==null&&H.envMap===null?ft.environmentRotation:H.envMapRotation,te===void 0&&(H.addEventListener("dispose",fe),te=new Map,Mt.programs=te);let se=te.get(jt);if(se!==void 0){if(Mt.currentProgram===se&&Mt.lightsStateVersion===Zt)return Rr(H,Kt),se}else Kt.uniforms=Et.getUniforms(H),H.onBeforeCompile(Kt,M),se=Et.acquireProgram(Kt,jt),te.set(jt,se),Mt.uniforms=Kt.uniforms;let ne=Mt.uniforms;return(!H.isShaderMaterial&&!H.isRawShaderMaterial||H.clipping===!0)&&(ne.clippingPlanes=_t.uniform),Rr(H,Kt),Mt.needsLights=Ac(H),Mt.lightsStateVersion=Zt,Mt.needsLights&&(ne.ambientLightColor.value=ut.state.ambient,ne.lightProbe.value=ut.state.probe,ne.directionalLights.value=ut.state.directional,ne.directionalLightShadows.value=ut.state.directionalShadow,ne.spotLights.value=ut.state.spot,ne.spotLightShadows.value=ut.state.spotShadow,ne.rectAreaLights.value=ut.state.rectArea,ne.ltc_1.value=ut.state.rectAreaLTC1,ne.ltc_2.value=ut.state.rectAreaLTC2,ne.pointLights.value=ut.state.point,ne.pointLightShadows.value=ut.state.pointShadow,ne.hemisphereLights.value=ut.state.hemi,ne.directionalShadowMap.value=ut.state.directionalShadowMap,ne.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,ne.spotShadowMap.value=ut.state.spotShadowMap,ne.spotLightMatrix.value=ut.state.spotLightMatrix,ne.spotLightMap.value=ut.state.spotLightMap,ne.pointShadowMap.value=ut.state.pointShadowMap,ne.pointShadowMatrix.value=ut.state.pointShadowMatrix),Mt.currentProgram=se,Mt.uniformsList=null,se}function er(H){if(H.uniformsList===null){let ft=H.currentProgram.getUniforms();H.uniformsList=As.seqWithValue(ft.seq,H.uniforms)}return H.uniformsList}function Rr(H,ft){let yt=lt.get(H);yt.outputColorSpace=ft.outputColorSpace,yt.batching=ft.batching,yt.batchingColor=ft.batchingColor,yt.instancing=ft.instancing,yt.instancingColor=ft.instancingColor,yt.instancingMorph=ft.instancingMorph,yt.skinning=ft.skinning,yt.morphTargets=ft.morphTargets,yt.morphNormals=ft.morphNormals,yt.morphColors=ft.morphColors,yt.morphTargetsCount=ft.morphTargetsCount,yt.numClippingPlanes=ft.numClippingPlanes,yt.numIntersection=ft.numClipIntersection,yt.vertexAlphas=ft.vertexAlphas,yt.vertexTangents=ft.vertexTangents,yt.toneMapping=ft.toneMapping}function yi(H,ft,yt,Mt,ut){ft.isScene!==!0&&(ft=Y),I.resetTextureUnits();let Ft=ft.fog,Zt=Mt.isMeshStandardMaterial?ft.environment:null,Kt=v===null?M.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:yr,jt=(Mt.isMeshStandardMaterial?O:E).get(Mt.envMap||Zt),te=Mt.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,se=!!yt.attributes.tangent&&(!!Mt.normalMap||Mt.anisotropy>0),ne=!!yt.morphAttributes.position,Ie=!!yt.morphAttributes.normal,Fe=!!yt.morphAttributes.color,Ge=pr;Mt.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Ge=M.toneMapping);let Ke=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,we=Ke!==void 0?Ke.length:0,ie=lt.get(Mt),Me=f.state.lights;if(R===!0&&(C===!0||H!==N)){let hn=H===N&&Mt.id===T;_t.setState(Mt,H,hn)}let Pe=!1;Mt.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Me.state.version||ie.outputColorSpace!==Kt||ut.isBatchedMesh&&ie.batching===!1||!ut.isBatchedMesh&&ie.batching===!0||ut.isBatchedMesh&&ie.batchingColor===!0&&ut.colorTexture===null||ut.isBatchedMesh&&ie.batchingColor===!1&&ut.colorTexture!==null||ut.isInstancedMesh&&ie.instancing===!1||!ut.isInstancedMesh&&ie.instancing===!0||ut.isSkinnedMesh&&ie.skinning===!1||!ut.isSkinnedMesh&&ie.skinning===!0||ut.isInstancedMesh&&ie.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&ie.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&ie.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&ie.instancingMorph===!1&&ut.morphTexture!==null||ie.envMap!==jt||Mt.fog===!0&&ie.fog!==Ft||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==_t.numPlanes||ie.numIntersection!==_t.numIntersection)||ie.vertexAlphas!==te||ie.vertexTangents!==se||ie.morphTargets!==ne||ie.morphNormals!==Ie||ie.morphColors!==Fe||ie.toneMapping!==Ge||ie.morphTargetsCount!==we)&&(Pe=!0):(Pe=!0,ie.__version=Mt.version);let Je=ie.currentProgram;Pe===!0&&(Je=Ce(Mt,ft,ut));let nr=!1,On=!1,Ar=!1,je=Je.getUniforms(),ti=ie.uniforms;if(j.useProgram(Je.program)&&(nr=!0,On=!0,Ar=!0),Mt.id!==T&&(T=Mt.id,On=!0),nr||N!==H){G.reverseDepthBuffer?(k.copy(H.projectionMatrix),lp(k),hp(k),je.setValue(w,"projectionMatrix",k)):je.setValue(w,"projectionMatrix",H.projectionMatrix),je.setValue(w,"viewMatrix",H.matrixWorldInverse);let hn=je.map.cameraPosition;hn!==void 0&&hn.setValue(w,B.setFromMatrixPosition(H.matrixWorld)),G.logarithmicDepthBuffer&&je.setValue(w,"logDepthBufFC",2/(Math.log(H.far+1)/Math.LN2)),(Mt.isMeshPhongMaterial||Mt.isMeshToonMaterial||Mt.isMeshLambertMaterial||Mt.isMeshBasicMaterial||Mt.isMeshStandardMaterial||Mt.isShaderMaterial)&&je.setValue(w,"isOrthographic",H.isOrthographicCamera===!0),N!==H&&(N=H,On=!0,Ar=!0)}if(ut.isSkinnedMesh){je.setOptional(w,ut,"bindMatrix"),je.setOptional(w,ut,"bindMatrixInverse");let hn=ut.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),je.setValue(w,"boneTexture",hn.boneTexture,I))}ut.isBatchedMesh&&(je.setOptional(w,ut,"batchingTexture"),je.setValue(w,"batchingTexture",ut._matricesTexture,I),je.setOptional(w,ut,"batchingIdTexture"),je.setValue(w,"batchingIdTexture",ut._indirectTexture,I),je.setOptional(w,ut,"batchingColorTexture"),ut._colorsTexture!==null&&je.setValue(w,"batchingColorTexture",ut._colorsTexture,I));let ns=yt.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Bt.update(ut,yt,Je),(On||ie.receiveShadow!==ut.receiveShadow)&&(ie.receiveShadow=ut.receiveShadow,je.setValue(w,"receiveShadow",ut.receiveShadow)),Mt.isMeshGouraudMaterial&&Mt.envMap!==null&&(ti.envMap.value=jt,ti.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),Mt.isMeshStandardMaterial&&Mt.envMap===null&&ft.environment!==null&&(ti.envMapIntensity.value=ft.environmentIntensity),On&&(je.setValue(w,"toneMappingExposure",M.toneMappingExposure),ie.needsLights&&Rc(ti,Ar),Ft&&Mt.fog===!0&&bt.refreshFogUniforms(ti,Ft),bt.refreshMaterialUniforms(ti,Mt,pt,ot,f.state.transmissionRenderTarget[H.id]),As.upload(w,er(ie),ti,I)),Mt.isShaderMaterial&&Mt.uniformsNeedUpdate===!0&&(As.upload(w,er(ie),ti,I),Mt.uniformsNeedUpdate=!1),Mt.isSpriteMaterial&&je.setValue(w,"center",ut.center),je.setValue(w,"modelViewMatrix",ut.modelViewMatrix),je.setValue(w,"normalMatrix",ut.normalMatrix),je.setValue(w,"modelMatrix",ut.matrixWorld),Mt.isShaderMaterial||Mt.isRawShaderMaterial){let hn=Mt.uniformsGroups;for(let is=0,Zo=hn.length;is<Zo;is++){let to=hn[is];ct.update(to,Je),ct.bind(to,Je)}}return Je}function Rc(H,ft){H.ambientLightColor.needsUpdate=ft,H.lightProbe.needsUpdate=ft,H.directionalLights.needsUpdate=ft,H.directionalLightShadows.needsUpdate=ft,H.pointLights.needsUpdate=ft,H.pointLightShadows.needsUpdate=ft,H.spotLights.needsUpdate=ft,H.spotLightShadows.needsUpdate=ft,H.rectAreaLights.needsUpdate=ft,H.hemisphereLights.needsUpdate=ft}function Ac(H){return H.isMeshLambertMaterial||H.isMeshToonMaterial||H.isMeshPhongMaterial||H.isMeshStandardMaterial||H.isShadowMaterial||H.isShaderMaterial&&H.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(H,ft,yt){lt.get(H.texture).__webglTexture=ft,lt.get(H.depthTexture).__webglTexture=yt;let Mt=lt.get(H);Mt.__hasExternalTextures=!0,Mt.__autoAllocateDepthBuffer=yt===void 0,Mt.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Mt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(H,ft){let yt=lt.get(H);yt.__webglFramebuffer=ft,yt.__useDefaultFramebuffer=ft===void 0},this.setRenderTarget=function(H,ft=0,yt=0){v=H,L=ft,P=yt;let Mt=!0,ut=null,Ft=!1,Zt=!1;if(H){let jt=lt.get(H);if(jt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(w.FRAMEBUFFER,null),Mt=!1;else if(jt.__webglFramebuffer===void 0)I.setupRenderTarget(H);else if(jt.__hasExternalTextures)I.rebindTextures(H,lt.get(H.texture).__webglTexture,lt.get(H.depthTexture).__webglTexture);else if(H.depthBuffer){let ne=H.depthTexture;if(jt.__boundDepthTexture!==ne){if(ne!==null&&lt.has(ne)&&(H.width!==ne.image.width||H.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(H)}}let te=H.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Zt=!0);let se=lt.get(H).__webglFramebuffer;H.isWebGLCubeRenderTarget?(Array.isArray(se[ft])?ut=se[ft][yt]:ut=se[ft],Ft=!0):H.samples>0&&I.useMultisampledRTT(H)===!1?ut=lt.get(H).__webglMultisampledFramebuffer:Array.isArray(se)?ut=se[yt]:ut=se,x.copy(H.viewport),S.copy(H.scissor),Z=H.scissorTest}else x.copy(z).multiplyScalar(pt).floor(),S.copy(J).multiplyScalar(pt).floor(),Z=W;if(j.bindFramebuffer(w.FRAMEBUFFER,ut)&&Mt&&j.drawBuffers(H,ut),j.viewport(x),j.scissor(S),j.setScissorTest(Z),Ft){let jt=lt.get(H.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+ft,jt.__webglTexture,yt)}else if(Zt){let jt=lt.get(H.texture),te=ft||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,jt.__webglTexture,yt||0,te)}T=-1},this.readRenderTargetPixels=function(H,ft,yt,Mt,ut,Ft,Zt){if(!(H&&H.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=lt.get(H).__webglFramebuffer;if(H.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt){j.bindFramebuffer(w.FRAMEBUFFER,Kt);try{let jt=H.texture,te=jt.format,se=jt.type;if(!G.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ft>=0&&ft<=H.width-Mt&&yt>=0&&yt<=H.height-ut&&w.readPixels(ft,yt,Mt,ut,Wt.convert(te),Wt.convert(se),Ft)}finally{let jt=v!==null?lt.get(v).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(H,ft,yt,Mt,ut,Ft,Zt){if(!(H&&H.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=lt.get(H).__webglFramebuffer;if(H.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt){let jt=H.texture,te=jt.format,se=jt.type;if(!G.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ft>=0&&ft<=H.width-Mt&&yt>=0&&yt<=H.height-ut){j.bindFramebuffer(w.FRAMEBUFFER,Kt);let ne=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ne),w.bufferData(w.PIXEL_PACK_BUFFER,Ft.byteLength,w.STREAM_READ),w.readPixels(ft,yt,Mt,ut,Wt.convert(te),Wt.convert(se),0);let Ie=v!==null?lt.get(v).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Ie);let Fe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await cp(w,Fe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ne),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Ft),w.deleteBuffer(ne),w.deleteSync(Fe),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(H,ft=null,yt=0){H.isTexture!==!0&&(Ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ft=arguments[0]||null,H=arguments[1]);let Mt=Math.pow(2,-yt),ut=Math.floor(H.image.width*Mt),Ft=Math.floor(H.image.height*Mt),Zt=ft!==null?ft.x:0,Kt=ft!==null?ft.y:0;I.setTexture2D(H,0),w.copyTexSubImage2D(w.TEXTURE_2D,yt,0,0,Zt,Kt,ut,Ft),j.unbindTexture()},this.copyTextureToTexture=function(H,ft,yt=null,Mt=null,ut=0){H.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture function signature has changed."),Mt=arguments[0]||null,H=arguments[1],ft=arguments[2],ut=arguments[3]||0,yt=null);let Ft,Zt,Kt,jt,te,se;yt!==null?(Ft=yt.max.x-yt.min.x,Zt=yt.max.y-yt.min.y,Kt=yt.min.x,jt=yt.min.y):(Ft=H.image.width,Zt=H.image.height,Kt=0,jt=0),Mt!==null?(te=Mt.x,se=Mt.y):(te=0,se=0);let ne=Wt.convert(ft.format),Ie=Wt.convert(ft.type);I.setTexture2D(ft,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ft.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ft.unpackAlignment);let Fe=w.getParameter(w.UNPACK_ROW_LENGTH),Ge=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ke=w.getParameter(w.UNPACK_SKIP_PIXELS),we=w.getParameter(w.UNPACK_SKIP_ROWS),ie=w.getParameter(w.UNPACK_SKIP_IMAGES),Me=H.isCompressedTexture?H.mipmaps[ut]:H.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Me.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Me.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Kt),w.pixelStorei(w.UNPACK_SKIP_ROWS,jt),H.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ut,te,se,Ft,Zt,ne,Ie,Me.data):H.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ut,te,se,Me.width,Me.height,ne,Me.data):w.texSubImage2D(w.TEXTURE_2D,ut,te,se,Ft,Zt,ne,Ie,Me),w.pixelStorei(w.UNPACK_ROW_LENGTH,Fe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ge),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ke),w.pixelStorei(w.UNPACK_SKIP_ROWS,we),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ie),ut===0&&ft.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(H,ft,yt=null,Mt=null,ut=0){H.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),yt=arguments[0]||null,Mt=arguments[1]||null,H=arguments[2],ft=arguments[3],ut=arguments[4]||0);let Ft,Zt,Kt,jt,te,se,ne,Ie,Fe,Ge=H.isCompressedTexture?H.mipmaps[ut]:H.image;yt!==null?(Ft=yt.max.x-yt.min.x,Zt=yt.max.y-yt.min.y,Kt=yt.max.z-yt.min.z,jt=yt.min.x,te=yt.min.y,se=yt.min.z):(Ft=Ge.width,Zt=Ge.height,Kt=Ge.depth,jt=0,te=0,se=0),Mt!==null?(ne=Mt.x,Ie=Mt.y,Fe=Mt.z):(ne=0,Ie=0,Fe=0);let Ke=Wt.convert(ft.format),we=Wt.convert(ft.type),ie;if(ft.isData3DTexture)I.setTexture3D(ft,0),ie=w.TEXTURE_3D;else if(ft.isDataArrayTexture||ft.isCompressedArrayTexture)I.setTexture2DArray(ft,0),ie=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ft.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ft.unpackAlignment);let Me=w.getParameter(w.UNPACK_ROW_LENGTH),Pe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Je=w.getParameter(w.UNPACK_SKIP_PIXELS),nr=w.getParameter(w.UNPACK_SKIP_ROWS),On=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ge.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ge.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,jt),w.pixelStorei(w.UNPACK_SKIP_ROWS,te),w.pixelStorei(w.UNPACK_SKIP_IMAGES,se),H.isDataTexture||H.isData3DTexture?w.texSubImage3D(ie,ut,ne,Ie,Fe,Ft,Zt,Kt,Ke,we,Ge.data):ft.isCompressedArrayTexture?w.compressedTexSubImage3D(ie,ut,ne,Ie,Fe,Ft,Zt,Kt,Ke,Ge.data):w.texSubImage3D(ie,ut,ne,Ie,Fe,Ft,Zt,Kt,Ke,we,Ge),w.pixelStorei(w.UNPACK_ROW_LENGTH,Me),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Pe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Je),w.pixelStorei(w.UNPACK_SKIP_ROWS,nr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,On),ut===0&&ft.generateMipmaps&&w.generateMipmap(ie),j.unbindTexture()},this.initRenderTarget=function(H){lt.get(H).__webglFramebuffer===void 0&&I.setupRenderTarget(H)},this.initTexture=function(H){H.isCubeTexture?I.setTextureCube(H,0):H.isData3DTexture?I.setTexture3D(H,0):H.isDataArrayTexture||H.isCompressedArrayTexture?I.setTexture2DArray(H,0):I.setTexture2D(H,0),j.unbindTexture()},this.resetState=function(){L=0,P=0,v=null,j.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Jh?"display-p3":"srgb",e.unpackColorSpace=Ue.workingColorSpace===dc?"display-p3":"srgb"}};var Qa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hs=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},gh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ql,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bn=new A,tc=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.applyMatrix4(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.applyNormalMatrix(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Bn.fromBufferAttribute(this,e),Bn.transformDirection(t),this.setXYZ(e,Bn.x,Bn.y,Bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ui(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zn=class extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xs,ho=new A,Ms=new A,bs=new A,vs=new Nt,uo=new Nt,rf=new ce,xa=new A,fo=new A,Ma=new A,v0=new Nt,cl=new Nt,E0=new Nt,jn=class extends dn{constructor(t=new Zn){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gh(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new tc(n,3,0,!1)),xs.setAttribute("uv",new tc(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),rf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;ba(xa.set(-.5,-.5,0),bs,o,Ms,r,s),ba(fo.set(.5,-.5,0),bs,o,Ms,r,s),ba(Ma.set(.5,.5,0),bs,o,Ms,r,s),v0.set(0,0),cl.set(1,0),E0.set(1,1);let a=t.ray.intersectTriangle(xa,fo,Ma,!1,ho);if(a===null&&(ba(fo.set(-.5,.5,0),bs,o,Ms,r,s),cl.set(0,1),a=t.ray.intersectTriangle(xa,Ma,fo,!1,ho),a===null))return;let c=t.ray.origin.distanceTo(ho);c<t.near||c>t.far||e.push({distance:c,point:ho.clone(),uv:fr.getInterpolation(ho,xa,fo,Ma,v0,cl,E0,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ba(i,t,e,n,r,s){vs.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(uo.x=s*vs.x-r*vs.y,uo.y=r*vs.x+s*vs.y):uo.copy(vs),i.copy(t),i.x+=uo.x,i.y+=uo.y,i.applyMatrix4(rf)}var _h=class extends qn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=Rn,h=Rn,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ec=class extends De{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new ce,w0=new ce,va=[],S0=new Wi,sy=new ce,po=new St,mo=new Xi,Fs=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,sy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),S0.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(S0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),mo.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(mo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),t.ray.intersectsSphere(mo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Es),w0.multiplyMatrices(n,Es),po.matrixWorld=w0,po.raycast(t,va);for(let o=0,a=va.length;o<a;o++){let c=va[o];c.instanceId=s,c.object=this,e.push(c)}va.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new _h(new Float32Array(r*this.count),r,this.count,qh,Mi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Po=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},nc=new A,ic=new A,T0=new ce,go=new Ao,Ea=new Xi,ll=new A,R0=new A,rc=class extends dn{constructor(t=new be,e=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)nc.fromBufferAttribute(e,r-1),ic.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=nc.distanceTo(ic);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,t.ray.intersectsSphere(Ea)===!1)return;T0.copy(r).invert(),go.copy(t.ray).applyMatrix4(T0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=h.getX(_),y=h.getX(_+1),M=wa(this,t,go,c,p,y);M&&e.push(M)}if(this.isLineLoop){let _=h.getX(g-1),f=h.getX(m),p=wa(this,t,go,c,_,f);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=wa(this,t,go,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=wa(this,t,go,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function wa(i,t,e,n,r,s){let o=i.geometry.attributes.position;if(nc.fromBufferAttribute(o,r),ic.fromBufferAttribute(o,s),e.distanceSqToSegment(nc,ic,ll,R0)>n)return;ll.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ll);if(!(c<t.near||c>t.far))return{distance:c,point:R0.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var gr=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},A0=new ce,yh=new Ao,Sa=new Xi,Ta=new A,_r=class extends dn{constructor(t=new be,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=s,t.ray.intersectsSphere(Sa)===!1)return;A0.copy(r).invert(),yh.copy(t.ray).applyMatrix4(A0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let f=l.getX(g);Ta.fromBufferAttribute(u,f),C0(Ta,f,c,r,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Ta.fromBufferAttribute(u,g),C0(Ta,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function C0(i,t,e,n,r,s,o){let a=yh.distanceSqToPoint(i);if(a<e){let c=new A;yh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var An=class extends qn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Nt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,r=[],s=[],o=[],a=new A,c=new ce;for(let m=0;m<=t;m++){let g=m/t;r[m]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(bn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(bn(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Io=class extends ni{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Nt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xh=class extends Io{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tu(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,r(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Ra=new A,hl=new tu,ul=new tu,fl=new tu,Mh=class extends ni{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new A){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Ra.subVectors(r[0],r[1]).add(r[0]),l=Ra);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ra.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ra),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),hl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,f),ul.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,f),fl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ul.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),fl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(hl.calc(c),ul.calc(c),fl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new A().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function P0(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function oy(i,t){let e=1-i;return e*e*t}function ay(i,t){return 2*(1-i)*i*t}function cy(i,t){return i*i*t}function vo(i,t,e,n){return oy(i,t)+ay(i,e)+cy(i,n)}function ly(i,t){let e=1-i;return e*e*e*t}function hy(i,t){let e=1-i;return 3*e*e*i*t}function uy(i,t){return 3*(1-i)*i*i*t}function fy(i,t){return i*i*i*t}function Eo(i,t,e,n,r){return ly(i,t)+hy(i,e)+uy(i,n)+fy(i,r)}var sc=class extends ni{constructor(t=new Nt,e=new Nt,n=new Nt,r=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Nt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Eo(t,r.x,s.x,o.x,a.x),Eo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bh=class extends ni{constructor(t=new A,e=new A,n=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new A){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Eo(t,r.x,s.x,o.x,a.x),Eo(t,r.y,s.y,o.y,a.y),Eo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oc=class extends ni{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vh=class extends ni{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ac=class extends ni{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(vo(t,r.x,s.x,o.x),vo(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eh=class extends ni{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(vo(t,r.x,s.x,o.x),vo(t,r.y,s.y,o.y),vo(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cc=class extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(P0(a,c.x,l.x,h.x,u.x),P0(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Nt().fromArray(r))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:Mh,CubicBezierCurve:sc,CubicBezierCurve3:bh,EllipseCurve:Io,LineCurve:oc,LineCurve3:vh,QuadraticBezierCurve:ac,QuadraticBezierCurve3:Eh,SplineCurve:cc}),Sh=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new wh[r.type]().fromJSON(r))}return this}},Lo=class extends Sh{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new oc(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new ac(this.currentPoint.clone(),new Nt(t,e),new Nt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new sc(this.currentPoint.clone(),new Nt(t,e),new Nt(n,r),new Nt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new cc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new Io(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Th=class i extends be{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=bn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,d=new Nt,m=new A,g=new A,_=new A,f=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=e;y++){let M=n+y*h*r,b=Math.sin(M),L=Math.cos(M);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*b,u.y=t[P].y,u.z=t[P].x*L,o.push(u.x,u.y,u.z),d.x=y/e,d.y=P/(t.length-1),a.push(d.x,d.y);let v=c[3*P+0]*b,T=c[3*P+1],N=c[3*P+0]*L;l.push(v,T,N)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let b=M+y*t.length,L=b,P=b+t.length,v=b+t.length+1,T=b+1;s.push(L,P,T),s.push(v,T,P)}this.setIndex(s),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Wr=class i extends Th{constructor(t=1,e=1,n=4,r=8){let s=new Lo;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Do=class i extends be{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new A,h=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ee=class i extends be{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],g=0,_=[],f=n/2,p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(m,2));function y(){let b=new A,L=new A,P=0,v=(e-t)/n;for(let T=0;T<=s;T++){let N=[],x=T/s,S=x*(e-t)+t;for(let Z=0;Z<=r;Z++){let tt=Z/r,q=tt*c+a,at=Math.sin(q),ot=Math.cos(q);L.x=S*at,L.y=-x*n+f,L.z=S*ot,u.push(L.x,L.y,L.z),b.set(at,v,ot).normalize(),d.push(b.x,b.y,b.z),m.push(tt,1-x),N.push(g++)}_.push(N)}for(let T=0;T<r;T++)for(let N=0;N<s;N++){let x=_[N][T],S=_[N+1][T],Z=_[N+1][T+1],tt=_[N][T+1];t>0&&(h.push(x,S,tt),P+=3),e>0&&(h.push(S,Z,tt),P+=3)}l.addGroup(p,P,0),p+=P}function M(b){let L=g,P=new Nt,v=new A,T=0,N=b===!0?t:e,x=b===!0?1:-1;for(let Z=1;Z<=r;Z++)u.push(0,f*x,0),d.push(0,x,0),m.push(.5,.5),g++;let S=g;for(let Z=0;Z<=r;Z++){let q=Z/r*c+a,at=Math.cos(q),ot=Math.sin(q);v.x=N*ot,v.y=f*x,v.z=N*at,u.push(v.x,v.y,v.z),d.push(0,x,0),P.x=at*.5+.5,P.y=ot*.5*x+.5,m.push(P.x,P.y),g++}for(let Z=0;Z<r;Z++){let tt=L+Z,q=S+Z;b===!0?h.push(q,q+1,tt):h.push(q+1,q,tt),T+=3}l.addGroup(p,T,b===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nn=class i extends Ee{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lc=class i extends be{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new A,b=new A,L=new A;for(let P=0;P<e.length;P+=3)m(e[P+0],M),m(e[P+1],b),m(e[P+2],L),c(M,b,L,y)}function c(y,M,b,L){let P=L+1,v=[];for(let T=0;T<=P;T++){v[T]=[];let N=y.clone().lerp(b,T/P),x=M.clone().lerp(b,T/P),S=P-T;for(let Z=0;Z<=S;Z++)Z===0&&T===P?v[T][Z]=N:v[T][Z]=N.clone().lerp(x,Z/S)}for(let T=0;T<P;T++)for(let N=0;N<2*(P-T)-1;N++){let x=Math.floor(N/2);N%2===0?(d(v[T][x+1]),d(v[T+1][x]),d(v[T][x])):(d(v[T][x+1]),d(v[T+1][x+1]),d(v[T+1][x]))}}function l(y){let M=new A;for(let b=0;b<s.length;b+=3)M.x=s[b+0],M.y=s[b+1],M.z=s[b+2],M.normalize().multiplyScalar(y),s[b+0]=M.x,s[b+1]=M.y,s[b+2]=M.z}function h(){let y=new A;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];let b=f(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(b,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let M=o[y+0],b=o[y+2],L=o[y+4],P=Math.max(M,b,L),v=Math.min(M,b,L);P>.9&&v<.1&&(M<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function m(y,M){let b=y*3;M.x=t[b+0],M.y=t[b+1],M.z=t[b+2]}function g(){let y=new A,M=new A,b=new A,L=new A,P=new Nt,v=new Nt,T=new Nt;for(let N=0,x=0;N<s.length;N+=9,x+=6){y.set(s[N+0],s[N+1],s[N+2]),M.set(s[N+3],s[N+4],s[N+5]),b.set(s[N+6],s[N+7],s[N+8]),P.set(o[x+0],o[x+1]),v.set(o[x+2],o[x+3]),T.set(o[x+4],o[x+5]),L.copy(y).add(M).add(b).divideScalar(3);let S=f(L);_(P,x+0,y,S),_(v,x+2,M,S),_(T,x+4,b,S)}}function _(y,M,b,L){L<0&&y.x===1&&(o[M]=y.x-1),b.x===0&&b.z===0&&(o[M]=L/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Xr=class extends Lo{constructor(t){super(t),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Lo().fromJSON(r))}return this}},dy={triangulate:function(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=sf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=yy(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Uo(s,o,e,a,c,m,0),o}};function sf(i,t,e,n,r){let s,o;if(r===Cy(i,t,e,n)>0)for(s=t;s<e;s+=n)o=I0(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=I0(s,i[s],i[s+1],o);return o&&mc(o,o.next)&&(Ho(o),o=o.next),o}function qr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mc(e,e.next)||tn(e.prev,e,e.next)===0)){if(Ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Uo(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Ey(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?my(i,n,r,s):py(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ho(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=gy(qr(i),t,e),Uo(i,t,e,n,r,s,2)):o===2&&_y(i,t,e,n,r,s):Uo(qr(i),t,e,n,r,s,1);break}}}function py(i){let t=i.prev,e=i,n=i.next;if(tn(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&Ss(r,a,s,c,o,l,g.x,g.y)&&tn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function my(i,t,e,n){let r=i.prev,s=i,o=i.next;if(tn(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,p=Rh(m,g,t,e,n),y=Rh(_,f,t,e,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=p&&b&&b.z<=y;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==r&&M!==o&&Ss(a,h,c,u,l,d,M.x,M.y)&&tn(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&Ss(a,h,c,u,l,d,b.x,b.y)&&tn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=p;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=f&&M!==r&&M!==o&&Ss(a,h,c,u,l,d,M.x,M.y)&&tn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=y;){if(b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&Ss(a,h,c,u,l,d,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function gy(i,t,e){let n=i;do{let r=n.prev,s=n.next.next;!mc(r,s)&&of(r,n,n.next,s)&&No(r,s)&&No(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ho(n),Ho(n.next),n=i=s),n=n.next}while(n!==i);return qr(n)}function _y(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ty(o,a)){let c=af(o,a);o=qr(o,o.next),c=qr(c,c.next),Uo(o,t,e,n,r,s,0),Uo(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function yy(i,t,e,n){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=sf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(Sy(l));for(r.sort(xy),s=0;s<r.length;s++)e=My(r[s],e);return e}function xy(i,t){return i.x-t.x}function My(i,t){let e=by(i,t);if(!e)return t;let n=af(e,i);return qr(n,n.next),qr(e,e.next)}function by(i,t){let e=t,n=-1/0,r,s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&Ss(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),No(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&vy(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function vy(i,t){return tn(i.prev,i,t.prev)<0&&tn(t.next,i,i.next)<0}function Ey(i,t,e,n){let r=i;do r.z===0&&(r.z=Rh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,wy(r)}function wy(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Rh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ss(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ty(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ry(i,t)&&(No(i,t)&&No(t,i)&&Ay(i,t)&&(tn(i.prev,i,t.prev)||tn(i,t.prev,t))||mc(i,t)&&tn(i.prev,i,i.next)>0&&tn(t.prev,t,t.next)>0)}function tn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mc(i,t){return i.x===t.x&&i.y===t.y}function of(i,t,e,n){let r=Ca(tn(i,t,e)),s=Ca(tn(i,t,n)),o=Ca(tn(e,n,i)),a=Ca(tn(e,n,t));return!!(r!==s&&o!==a||r===0&&Aa(i,e,t)||s===0&&Aa(i,n,t)||o===0&&Aa(e,i,n)||a===0&&Aa(e,t,n))}function Aa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ca(i){return i>0?1:i<0?-1:0}function Ry(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&of(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function No(i,t){return tn(i.prev,i,i.next)<0?tn(i,t,i.next)>=0&&tn(i,i.prev,t)>=0:tn(i,t,i.prev)<0||tn(i,i.next,t)<0}function Ay(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function af(i,t){let e=new Ah(i.i,i.x,i.y),n=new Ah(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function I0(i,t,e,n){let r=new Ah(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ah(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cy(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var wo=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];L0(t),D0(n,t);let o=t.length;e.forEach(L0);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,D0(n,e[c]);let a=dy.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function L0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function D0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Os=class i extends be{constructor(t=new Xr([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new oe(r,3)),this.setAttribute("uv",new oe(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Py,M,b=!1,L,P,v,T;p&&(M=p.getSpacedPoints(h),b=!0,d=!1,L=p.computeFrenetFrames(h,!1),P=new A,v=new A,T=new A),d||(f=0,m=0,g=0,_=0);let N=a.extractPoints(l),x=N.shape,S=N.holes;if(!wo.isClockWise(x)){x=x.reverse();for(let V=0,w=S.length;V<w;V++){let st=S[V];wo.isClockWise(st)&&(S[V]=st.reverse())}}let tt=wo.triangulateShape(x,S),q=x;for(let V=0,w=S.length;V<w;V++){let st=S[V];x=x.concat(st)}function at(V,w,st){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(w,st)}let ot=x.length,pt=tt.length;function D(V,w,st){let K,G,j,it=V.x-w.x,lt=V.y-w.y,I=st.x-V.x,E=st.y-V.y,O=it*it+lt*lt,nt=it*E-lt*I;if(Math.abs(nt)>Number.EPSILON){let ht=Math.sqrt(O),rt=Math.sqrt(I*I+E*E),Et=w.x-lt/ht,bt=w.y+it/ht,gt=st.x-E/rt,Lt=st.y+I/rt,_t=((gt-Et)*E-(Lt-bt)*I)/(it*E-lt*I);K=Et+it*_t-V.x,G=bt+lt*_t-V.y;let At=K*K+G*G;if(At<=2)return new Nt(K,G);j=Math.sqrt(At/2)}else{let ht=!1;it>Number.EPSILON?I>Number.EPSILON&&(ht=!0):it<-Number.EPSILON?I<-Number.EPSILON&&(ht=!0):Math.sign(lt)===Math.sign(E)&&(ht=!0),ht?(K=-lt,G=it,j=Math.sqrt(O)):(K=it,G=lt,j=Math.sqrt(O/2))}return new Nt(K/j,G/j)}let et=[];for(let V=0,w=q.length,st=w-1,K=V+1;V<w;V++,st++,K++)st===w&&(st=0),K===w&&(K=0),et[V]=D(q[V],q[st],q[K]);let z=[],J,W=et.concat();for(let V=0,w=S.length;V<w;V++){let st=S[V];J=[];for(let K=0,G=st.length,j=G-1,it=K+1;K<G;K++,j++,it++)j===G&&(j=0),it===G&&(it=0),J[K]=D(st[K],st[j],st[it]);z.push(J),W=W.concat(J)}for(let V=0;V<f;V++){let w=V/f,st=m*Math.cos(w*Math.PI/2),K=g*Math.sin(w*Math.PI/2)+_;for(let G=0,j=q.length;G<j;G++){let it=at(q[G],et[G],K);X(it.x,it.y,-st)}for(let G=0,j=S.length;G<j;G++){let it=S[G];J=z[G];for(let lt=0,I=it.length;lt<I;lt++){let E=at(it[lt],J[lt],K);X(E.x,E.y,-st)}}}let U=g+_;for(let V=0;V<ot;V++){let w=d?at(x[V],W[V],U):x[V];b?(v.copy(L.normals[0]).multiplyScalar(w.x),P.copy(L.binormals[0]).multiplyScalar(w.y),T.copy(M[0]).add(v).add(P),X(T.x,T.y,T.z)):X(w.x,w.y,0)}for(let V=1;V<=h;V++)for(let w=0;w<ot;w++){let st=d?at(x[w],W[w],U):x[w];b?(v.copy(L.normals[V]).multiplyScalar(st.x),P.copy(L.binormals[V]).multiplyScalar(st.y),T.copy(M[V]).add(v).add(P),X(T.x,T.y,T.z)):X(st.x,st.y,u/h*V)}for(let V=f-1;V>=0;V--){let w=V/f,st=m*Math.cos(w*Math.PI/2),K=g*Math.sin(w*Math.PI/2)+_;for(let G=0,j=q.length;G<j;G++){let it=at(q[G],et[G],K);X(it.x,it.y,u+st)}for(let G=0,j=S.length;G<j;G++){let it=S[G];J=z[G];for(let lt=0,I=it.length;lt<I;lt++){let E=at(it[lt],J[lt],K);b?X(E.x,E.y+M[h-1].y,M[h-1].x+st):X(E.x,E.y,u+st)}}}R(),C();function R(){let V=r.length/3;if(d){let w=0,st=ot*w;for(let K=0;K<pt;K++){let G=tt[K];B(G[2]+st,G[1]+st,G[0]+st)}w=h+f*2,st=ot*w;for(let K=0;K<pt;K++){let G=tt[K];B(G[0]+st,G[1]+st,G[2]+st)}}else{for(let w=0;w<pt;w++){let st=tt[w];B(st[2],st[1],st[0])}for(let w=0;w<pt;w++){let st=tt[w];B(st[0]+ot*h,st[1]+ot*h,st[2]+ot*h)}}n.addGroup(V,r.length/3-V,0)}function C(){let V=r.length/3,w=0;k(q,w),w+=q.length;for(let st=0,K=S.length;st<K;st++){let G=S[st];k(G,w),w+=G.length}n.addGroup(V,r.length/3-V,1)}function k(V,w){let st=V.length;for(;--st>=0;){let K=st,G=st-1;G<0&&(G=V.length-1);for(let j=0,it=h+f*2;j<it;j++){let lt=ot*j,I=ot*(j+1),E=w+K+lt,O=w+G+lt,nt=w+G+I,ht=w+K+I;F(E,O,nt,ht)}}}function X(V,w,st){c.push(V),c.push(w),c.push(st)}function B(V,w,st){Y(V),Y(w),Y(st);let K=r.length/3,G=y.generateTopUV(n,r,K-3,K-2,K-1);Q(G[0]),Q(G[1]),Q(G[2])}function F(V,w,st,K){Y(V),Y(w),Y(K),Y(w),Y(st),Y(K);let G=r.length/3,j=y.generateSideWallUV(n,r,G-6,G-3,G-2,G-1);Q(j[0]),Q(j[1]),Q(j[3]),Q(j[1]),Q(j[2]),Q(j[3])}function Y(V){r.push(c[V*3+0]),r.push(c[V*3+1]),r.push(c[V*3+2])}function Q(V){s.push(V.x),s.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Iy(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new wh[r.type]().fromJSON(r)),new i(n,t.options)}},Py={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new Nt(s,o),new Nt(a,c),new Nt(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Nt(o,1-c),new Nt(l,1-u),new Nt(d,1-g),new Nt(_,1-p)]:[new Nt(a,1-c),new Nt(h,1-u),new Nt(m,1-g),new Nt(f,1-p)]}};function Iy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var yn=class i extends lc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fo=class i extends lc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ne=class i extends be{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new A,d=new A,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){let y=[],M=p/n,b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let P=L/e;u.x=-t*Math.cos(r+P*s)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(r+P*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(P+b,1-M),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let M=h[p][y+1],b=h[p][y],L=h[p+1][y],P=h[p+1][y+1];(p!==0||o>0)&&m.push(M,b,P),(p!==n-1||c<Math.PI)&&m.push(b,L,P)}this.setIndex(m),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zn=class i extends be{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let _=g/r*s,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let _=(r+1)*m+g-1,f=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,y=(r+1)*m+g;o.push(_,f,y),o.push(f,p,y)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Te=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Bs=class extends di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Pa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ly(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ks=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ch=class extends ks{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pu,endingEnd:Pu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Iu:s=t,a=2*e-n;break;case Lu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Iu:o=t,c=2*n-e;break;case Lu:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,y=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-m)*f+(1.5+m)*_+.5*g,b=m*f-m*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+y*o[l+L]+M*o[c+L]+b*o[u+L];return s}},Ph=class extends ks{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},Ih=class extends ks{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pa(e,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Pa(t.times,Array),values:Pa(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ih(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ch(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fa:e=this.InterpolantFactoryMethodDiscrete;break;case jl:e=this.InterpolantFactoryMethodLinear;break;case Uc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&Ly(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Uc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=jl;var Yr=class extends pi{constructor(t,e,n){super(t,e,n)}};Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Fa;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends pi{};Lh.prototype.ValueTypeName="color";var Dh=class extends pi{};Dh.prototype.ValueTypeName="number";var Uh=class extends ks{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)En.slerpFlat(s,0,o,l-a,o,l,c);return s}},hc=class extends pi{InterpolantFactoryMethodLinear(t){return new Uh(this.times,this.values,this.getValueSize(),t)}};hc.prototype.ValueTypeName="quaternion";hc.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends pi{constructor(t,e,n){super(t,e,n)}};Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Fa;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nh=class extends pi{};Nh.prototype.ValueTypeName="vector";var Hh=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Dy=new Hh,Fh=class{constructor(t){this.manager=t!==void 0?t:Dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oo=class extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},zs=class extends Oo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dl=new ce,U0=new A,N0=new A,uc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;U0.setFromMatrixPosition(t.matrixWorld),e.position.copy(U0),N0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(N0),e.updateMatrixWorld(),dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var H0=new ce,_o=new A,pl=new A,Oh=class extends uc{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_o.setFromMatrixPosition(t.matrixWorld),n.position.copy(_o),pl.copy(n.position),pl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pl),n.updateMatrixWorld(),r.makeTranslation(-_o.x,-_o.y,-_o.z),H0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(H0)}},mi=class extends Oo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Bh=class extends uc{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yi=class extends Oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Bh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var eu="\\[\\]\\.:\\/",Uy=new RegExp("["+eu+"]","g"),nu="[^"+eu+"]",Ny="[^"+eu.replace("\\.","")+"]",Hy=/((?:WC+[\/:])*)/.source.replace("WC",nu),Fy=/(WCOD+)?/.source.replace("WCOD",Ny),Oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),By=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),ky=new RegExp("^"+Hy+Fy+Oy+By+"$"),zy=["material","materials","bones","map"],kh=class{constructor(t,e,n){let r=n||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(t){let e=ky.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);zy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=kh;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var cf=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var lf=i=>cf.find(t=>t.id===i)??cf[0];function uf(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var gc=(i,t,e)=>i+(t-i)*e,ff=i=>Math.min(1,Math.max(0,i)),zo=(i,t)=>Math.max(0,i)**t;function su(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var df=(i,t,e)=>new wn(i,t,e,"ZYX"),Ws=class{constructor(t,e={}){Ze(this,"n",t);Ze(this,"geo",new be);Ze(this,"per");Ze(this,"radial");Ze(this,"closed");Ze(this,"sharp");Ze(this,"caps");Ze(this,"samples");Ze(this,"pos");Ze(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let r=this.radial+1,s=this.samples*r+(this.caps?2:0);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3);let o=new Float32Array(s*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*r+l)*2]=c/(this.samples-1),o[(c*r+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*r+l,u=h+r;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*r,l=c+1,h=(this.samples-1)*r;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new De(this.pos,3)),this.geo.setAttribute("normal",new De(this.nor,3)),this.geo.setAttribute("uv",new De(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:r,radial:s,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=y=>t[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))],u=y=>typeof e=="number"?e:e[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))];for(let y=0;y<a;y++){let M=Math.floor(y/r),b=y%r/r;!o&&M>=n-1&&(M=n-2,b=1);let L=h(M),P=h(M+1);for(let v=0;v<3;v++)if(this.sharp)c[y*3+v]=L[v]+(P[v]-L[v])*b;else{let T=o||M>0?h(M-1)[v]:2*L[v]-P[v],N=o||M+2<n?h(M+2)[v]:2*P[v]-L[v],x=b*b,S=x*b;c[y*3+v]=.5*(2*L[v]+(-T+P[v])*b+(2*T-5*L[v]+4*P[v]-N)*x+(-T+3*L[v]-3*P[v]+N)*S)}l[y]=Math.max(1e-4,Math.abs(u(M)+(u(M+1)-u(M))*b))}let d=new A,m=new A,g=new A,_=new A,f=y=>{let M=o?(y-1+a-1)%(a-1):Math.max(0,y-1),b=o?(y+1)%(a-1):Math.min(a-1,y+1);return d.set(c[b*3]-c[M*3],c[b*3+1]-c[M*3+1],c[b*3+2]-c[M*3+2]),d.lengthSq()<1e-12&&d.set(0,0,1),d.normalize()};f(0),_.set(Math.abs(d.x)<.9?1:0,Math.abs(d.x)<.9?0:1,0),m.crossVectors(d,_).normalize();let p=s+1;for(let y=0;y<a;y++){f(y),m.addScaledVector(d,-m.dot(d)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(d,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(d,m);for(let M=0;M<=s;M++){let b=M/s*Math.PI*2,L=Math.cos(b),P=Math.sin(b),v=L*m.x+P*g.x,T=L*m.y+P*g.y,N=L*m.z+P*g.z,x=(y*p+M)*3;this.nor[x]=v,this.nor[x+1]=T,this.nor[x+2]=N,this.pos[x]=c[y*3]+l[y]*v,this.pos[x+1]=c[y*3+1]+l[y]*T,this.pos[x+2]=c[y*3+2]+l[y]*N}if(this.caps&&(y===0||y===a-1)){let M=(a*p+(y?1:0))*3,b=y?1:-1;this.pos[M]=c[y*3],this.pos[M+1]=c[y*3+1],this.pos[M+2]=c[y*3+2],this.nor[M]=d.x*b,this.nor[M+1]=d.y*b,this.nor[M+2]=d.z*b}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function ln(i,t,e={}){return new Ws(i.length,e).set(i,t).geo}function gi(i,t,e,n=12,r=.35,s={}){let o=new ce().makeRotationFromEuler(df(...t)),a=[],c=[],l=new A;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+r*Math.sin(3*u)))}return ln(a,c,{closed:!0,per:6,...s})}function Zi(i,t,e,n,r,s=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<r;u++){let d=u/(r-1),m=s+2*Math.PI*n*d,g=t+(e-t)*d,_=l(d)+(a&&o?a.uniform(-o,o):0),[f,p]=c?c(g):[0,0];h.push([f+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var yc=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function ii(i,t,e,n,r){let s=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);s.push(...l,...h,0,0,i),s.push(...h,...l,0,0,-t)}let a=new be;return a.setAttribute("position",new oe(s,3)),a.setAttribute("uv",new oe(new Array(s.length/3*2).fill(.5),2)),r&&a.applyMatrix4(new ce().makeRotationFromEuler(df(...r))),a.computeVertexNormals(),a}function ou(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),r.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;s.push(l,l+1,h+1,l,h+1,h)}let o=new be;return o.setAttribute("position",new oe(n,3)),o.setAttribute("uv",new oe(r,2)),o.setIndex(s),o.computeVertexNormals(),o}var _c=class{constructor(){Ze(this,"parts",new Map)}add(t,e,n,r,s){let o=t.index?t:Vy(t),a=new ce().compose(n?Array.isArray(n)?new A(...n):n:new A,new En().setFromEuler(r??new wn),s===void 0?new A(1,1,1):typeof s=="number"?new A(s,s,s):new A(...s)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,r]of this.parts){let s=new St(au(r),n);t.add(s),e.push(s);for(let o of r)o.dispose()}return this.parts.clear(),e}};function Vy(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,r)=>r)),t}function au(i){let t=0,e=0;for(let d of i)t+=d.attributes.position.count,e+=d.index.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=i.some(d=>d.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let d of i){let m=d.attributes.position.count;n.set(d.attributes.position.array,l*3),d.attributes.normal||d.computeVertexNormals(),r.set(d.attributes.normal.array,l*3),d.attributes.uv&&s.set(d.attributes.uv.array,l*2),a&&d.attributes.color&&a.set(d.attributes.color.array,l*3);let g=d.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new be;return u.setAttribute("position",new De(n,3)),u.setAttribute("normal",new De(r,3)),u.setAttribute("uv",new De(s,2)),a&&u.setAttribute("color",new De(a,3)),u.setIndex(new De(c,1)),u.computeBoundingSphere(),u}var hf=new Map;function iu(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function ru(i,t,e,n=4,r=1){let s=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let d=Math.floor(l),m=Math.floor(h),g=l-d,_=h-m,f=g*g*(3-2*g),p=_*_*(3-2*_),y=(b,L)=>iu((b%c+c)%c,(L%c+c)%c,r+u),M=gc(gc(y(d,m),y(d+1,m),f),gc(y(d,m+1),y(d+1,m+1),f),p);s+=M*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return s/a}function pf(i,t,e,n=[1,1]){let r=hf.get(i);if(!r){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),r=new An(o),r.wrapS=r.wrapT=Vr,hf.set(i,r)}let s=r.clone();return s.repeat.set(...n),s.needsUpdate=!0,s}var mf=(i,t,e,n,r)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=r,i.data[t*4+3]=255};function $r(i=1,t=[1,1],e=.35,n=1.25){return pf(`noise${i}`,128,r=>{for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=ru(o/(16*i),s/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,gc(e,n,a)/1.25));mf(r,s*128+o,c,c,c)}},t)}function gf(i=6,t=.11,e=[1,1]){return pf(`vein${i}:${t}`,128,n=>{let r=[];for(let s=0;s<i;s++)for(let o=0;o<i;o++)r.push([(o+iu(o,s,9))/i,(s+iu(o,s,11))/i]);for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=o/128+(ru(o/16,s/16,8,2,5)-.5)*.08,c=s/128+(ru(o/16+7,s/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of r)for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let y=a-g-p,M=c-_-f,b=Math.sqrt(y*y+M*M);b<l?(h=l,l=b):b<h&&(h=b)}let u=(h-l)*i*.5,d=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*d*d);mf(n,s*128+o,m,m,m)}},e)}var xr=1.13,Vo=.66,le=(i,t,e)=>new zt(i,t,e);function Gy(i,t){let e=(s,o=!0)=>(o?i.push(s):t.push(s),s),n=(s,o=1.7)=>s.clone().multiplyScalar(o),r=s=>Math.min(2.4,.55+s*.13);return{bark:(s,o)=>e(new Te({color:n(o,1.5),map:$r(4,[3,2]),roughness:.9,emissive:s.clone().multiplyScalar(.4)})),plain:(s,o=.5)=>e(new Te({color:n(s),roughness:o})),leaf:(s,o)=>e(new Te({color:n(o,1.6),map:$r(1,[2,2],.45),roughness:.45,side:Le,emissive:s.clone().multiplyScalar(.6)})),metal:(s,o=.28)=>e(new Te({color:n(s,1.25),metalness:.55,roughness:o+.12})),veins:(s,o,a,c=6,l=.11,h=.1)=>e(new Te({color:n(s,2.4),map:$r(1,[3,2]),emissive:o,emissiveMap:gf(c,l,[4,2]),emissiveIntensity:r(a),roughness:.6,metalness:h})),lava:()=>e(new Te({color:le(.3,.05,0),emissive:le(1,.22,.015),emissiveMap:$r(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(s,o,a,c=Un)=>e(new Te({color:o,emissive:s,emissiveMap:$r(1,[2,2],.6),emissiveIntensity:r(a),roughness:.4,side:c})),emissive:(s,o)=>e(new Te({color:s.clone().multiplyScalar(.15),emissive:s,emissiveIntensity:r(o),roughness:.4})),crystal:(s,o)=>e(new Te({color:n(s,1.3),emissive:s,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(s,o=.3)=>e(new Te({color:s,emissive:s.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Te({color:le(.55,.82,1),map:$r(2,[4,1],.7),emissive:le(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var Jr=i=>Math.max(8,Math.round(i*.5)),Go=i=>Math.max(1,Math.round(i*.45)),xc=i=>i-Math.floor(i);function Wy(i,t,e,n,r,s=.09,o=.1){let a=i+n,c=(a%t+t)%t;return r*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-s*c)*(Math.cos(o*c)+s/o*Math.sin(o*c)))}function Xy(i,t,e,n=8,r=10,s=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-r)/s))))}function _f(i,t,e,n){let r=[];for(let s=0;s<t;s++){let o=new A(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),r.push([o.x,o.y,o.z])}return r}function cu(i,t,e,n,r,s){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*r));return o.push(e),ln(o,o.map((a,c)=>s*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function qy(i,t,e,n,r,s,o,a=.45){return ou(4,10,(c,l)=>{let h=2*c-1,u=.07+r*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-s*l**3,d=t+e*l,m=i+o*l,g=n*Math.max(.03,zo(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,f=h*g,p=Math.cos(m),y=Math.sin(m);return[_*p-f*y,_*y+f*p,d]})}function Yy(i=.14,t=.055){return ou(3,6,(e,n)=>{let r=2*e-1,s=t*(.04+zo(Math.sin(Math.PI*n**.75),.9));return[r*s,n*i,-Math.abs(r)*s*.45-.18*i*n*n]})}var Kr=new dn;function Xs(i,t,e,n,r){Kr.position.set(e[0],e[1],e[2]),typeof n=="number"?Kr.scale.setScalar(Math.max(1e-5,n)):Kr.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),r?Kr.rotation.set(r[0],r[1],r[2],"ZYX"):Kr.rotation.set(0,0,0),Kr.updateMatrix(),i.setMatrixAt(t,Kr.matrix)}var hu=new yn(1,1),lu=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((r,s)=>{for(let o of n)o.offset.x-=s*e})};function Zy(i){let{rng:t,m:e}=i,n=e.bark(le(.045,.028,.014),le(.3,.19,.1)),r=e.plain(le(.1,.3,.05),.55),s=e.leaf(le(.015,.14,.02),le(.1,.34,.045)),o=.022,a=_=>yc(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(ln([...c,2.6,2.63].map(_=>[...a(_),_]),[...l,.06,.015],{radial:8,per:5}),n);for(let _=0;_<5;_++){let f=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(f),y=Math.sin(f);i.stat(ln([[.03*p,.03*y,.3],[.06*p,.06*y,.17],[.1*p,.1*y,.07],[.14*p,.14*y,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,f,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:f-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},d=[.015,.09,.2,.235,.185,.06],m=[2.42,2.6,2.8,3.02,3.22,3.33];for(let _=0;_<6;_++){let f=2*Math.PI*_/6+t.uniform(-.15,.15),p=d.map((y,M)=>{let b=f+.22*M;return[y*Math.cos(b),y*Math.sin(b),m[M]+t.uniform(-.02,.02)]});i.stat(ln(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let y of[2,4])u(p[y],Math.atan2(p[y][1],p[y][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,f,p,y,M])=>{let b=Jr(56),L=Zi(P=>su(c,l,_+(f-_)*P)+.018,_,f,p,b,y,.004,t,a);i.stat(ln(L,L.map((P,v)=>M*(1-.55*v/(b-1))),{radial:5,per:3}),r);for(let P=2;P<b-2;P+=Math.max(1,Math.floor((b-4)/Go(22)))){let v=L[P],T=a(v[2]);u(v,Math.atan2(v[1]-T[1],v[0]-T[0]),t.uniform(.7,1.3))}});let g=i.inst(Yy(),s,h.length);return i.anim(_=>{h.forEach((f,p)=>Xs(g,p,f.p,f.s,[f.rx+.16*Math.sin(_*.2094+f.ph),f.ry,f.rz+.1*Math.sin(_*.1309+f.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:le(.45,1,.35),hot:le(.7,1,.3),mid:le(.15,.8,.05)}}function $y(i){let{rng:t,m:e}=i,n=e.veins(le(.085,.065,.055),le(1,.3,.03),2,7,.06,0);n.roughness=.9;let r=e.lava(),s=e.core(le(1,.36,.04),le(.9,.12,.01),2,Le);lu(i,r,.25),lu(i,s,-.18);let o=.014,a=g=>yc(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(ln(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,f=2.35)=>su(c,l,_+(f-_)*g);for(let g=0;g<2;g++){let _=Jr(60),f=Zi(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(ln(f,f.map((p,y)=>.012+.003*Math.sin(y*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=Jr(60),f=Zi(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(ln(f,f.map((p,y)=>.0085+.002*Math.sin(y*.7)),{radial:5,per:3}),r)}{let g=Zi(_=>h(_,.5,2.2)-.001,.5,2.2,-3,Jr(50),.8,0,void 0,a);i.stat(ln(g,.0055,{radial:4,per:3}),r)}i.stat(gi(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(gi(.082,[0,0,0],.008,10,0),r,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(qy(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),s);i.stat(gi(.165,[0,0,0],.007,14,0),r,[0,0,2.86]);let u=6,d=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),f=t.uniform(.16,.2);d.push({p:[f*Math.cos(_),f*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(hu,e.emissive(le(1,.45,.05),10),u);return i.anim(g=>{d.forEach((_,f)=>{let p=xc(g/60+_.ph),y=_.s*Math.min(1,p*6)*(1-.6*p);Xs(m,f,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*y,.85*y,7*y])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:le(1,.45,.1),hot:le(1,.7,.15),mid:le(1,.25,.02)}}function Ky(i){let{rng:t,m:e}=i,n=e.metal(le(.1,.12,.16),.3),r=e.metal(le(.78,.84,.9),.18),s=e.water(),o=e.crystal(le(.2,.7,1),2.5),a=e.crystal(le(.4,.8,1),1.5);lu(i,s,.3);let c=.006,l=_=>yc(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(ln(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(gi(.066,[0,0,0],.012,10,0),r,[0,0,2.56]);for(let _=0;_<3;_++){let f=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(ln([[.04*f,.04*p,2.55],[.085*f,.085*p,2.68],[.12*f,.12*p,2.82],[.13*f,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),r)}for(let _=0;_<2;_++)i.stat(ln(Zi(.05,.4,2.45,7,Jr(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),r);{let _=Jr(64),f=Zi(b=>.058+.012*Math.sin(b*20),.45,2.5,3.2,_,1,0,void 0,l),p=f.map((b,L)=>.012+.014*(.5+.5*Math.sin(L*.45))),y=new Ws(_,{radial:6,per:3});y.set(f,p),i.mesh(y.geo,s);let M=p.slice();i.anim(b=>{for(let L=0;L<_;L++)M[L]=p[L]*(1+.6*Math.sin(b*.2618-L*.7));y.set(f,M)})}[.7,1,1.35,1.7,2.05].forEach((_,f)=>{let p=f*2.1;i.stat(ii(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,f,p,y,M,b,L,P,v],T)=>{let x=20+T*50,S=T===0?1:-1,Z=y<p?-1:1,tt=Math.PI/180,q=Array.from({length:40},(W,U)=>{let R=U/39;return{a:(p+(y-p)*R)*tt,b:p*tt+Z*P*tt*R,R:_+(f-_)*R,y:b+.04*Math.sin(R*6),r:.004+M*zo(Math.sin(Math.PI*R),.8)}}),at=(W,U,R,C)=>[W*t.uniform(.35,1.4),U*t.uniform(.8,1.2),-C*R+t.uniform(-1.4,1.4),t.uniform(1,5)],ot=q.map((W,U)=>[at(.07,.35,.9,U),at(.035,.7,1.7,U),at(.03,.3,1,U),at(.015,.6,1.8,U),at(.32,.45,.9,U),at(.2,.8,1.6,U),at(.1,1.3,2.3,U)]),pt=new Ws(40,{radial:6,per:2}),D=q.map(()=>[0,0,0]),et=q.map(()=>0),z=i.mesh(pt.geo,s,[0,0,3]);z.renderOrder=2;let J=W=>{let U=Wy(W,120,1,x,S),R=Xy(W,120,x,12),C=Math.floor((W+x)/120),k=X=>X[0]*Math.sin(W*X[1]+X[2]+C*X[3]);q.forEach((X,B)=>{let F=ot[B],Y=X.a*(1-R)+X.b*R+U,Q=X.R*(1-R)+L*(1+R*(k(F[0])+k(F[1])))*R;D[B][0]=Q*Math.cos(Y),D[B][2]=Q*Math.sin(Y),D[B][1]=X.y*(1-R)+(b+k(F[2])+k(F[3]))*R,et[B]=X.r*(1+.3*(1-R)*Math.sin(W*.2618-B*.8))*(1-R)+v*R*Math.max(.3,1+R*(k(F[4])+k(F[5])+k(F[6])))}),pt.set(D,et)};J(0),i.anim(J)});let d=[];for(let _=0;_<10;_++){let f=t.uniform(0,2*Math.PI),p=[Math.cos(f),0,Math.sin(f)],y=t.uniform(.2,.34),M=t.uniform(.12,.3);d.push({start:[p[0]*y,0,3+p[2]*y],vel:[p[0]*M+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*M+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of d)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:Go(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(hu,a,d.length+m.length);m.forEach((_,f)=>Xs(g,d.length+f,_.p,_.s)),i.anim(_=>{d.forEach((f,p)=>{let y=xc(_/f.per+f.ph),M=y*.9;Xs(g,p,[f.start[0]+f.vel[0]*M,f.start[1]+f.vel[1]*M,f.start[2]+f.vel[2]*M-.9*M*M],f.s*Math.min(1,y*10)*Math.min(1,(1-y)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(ii(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let f=2*Math.PI*_/3;i.stat(ii(.02,.12,.016,4,[Math.sin(f)*.4,-Math.cos(f)*.4,0]),o,[.045*Math.cos(f),.045*Math.sin(f),.36])}return{z:3,r:.145,glass:le(.3,.75,1),hot:le(.5,.95,1),mid:le(.05,.4,1)}}function Jy(i){let{rng:t,m:e}=i,n=e.veins(le(.03,.02,.06),le(.85,.6,1),3,6,.09,.5),r=e.metal(le(.62,.58,.72),.2),s=e.crystal(le(.35,.15,1),3),o=e.emissive(le(.65,.4,1),4),a=e.emissive(le(.6,.3,1),3);i.stat(ln([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(gi(.04,[0,0,0],.007,10,0),r,[0,0,_]);i.stat(ln([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(ln(Zi(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),r);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,f)=>i.stat(gi(f===0||f===4?.064:.058,[0,0,0],.011,10,0),r,[0,0,_]));let l=gi(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let f=e.emissive(le(.65,.4,1),4),p=f.emissiveIntensity;f.transparent=!0;let y=i.mesh(l,f);i.anim(M=>{let b=xc(M/60+_/4);y.position.z=.95+1.45*b,y.scale.set(1+.3*b,1+.3*b,1);let L=Math.min(1,b*8)*Math.min(1,(1-b)*3);f.emissiveIntensity=p*L,f.opacity=L})}let h=(_,f,p)=>ff((Math.sin(_*.9+f)+Math.sin(_*.37+f*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let f=t.uniform(0,6.28),p=[.07*Math.cos(f),.07*Math.sin(f),c[_]],y=[.07*Math.cos(f+.9),.07*Math.sin(f+.9),c[_+1]],M=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2],b=i.mesh(cu(t,[p[0]-M[0],p[1]-M[1],p[2]-M[2]],[y[0]-M[0],y[1]-M[1],y[2]-M[2]],6,.012,.005),o,M),L=t.uniform(0,6.28);i.anim(P=>{b.scale.setScalar(Math.max(1e-4,h(P,L,.3)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=.066;i.stat(cu(t,[p*Math.cos(f),p*Math.sin(f),.95],[p*Math.cos(f+.6),p*Math.sin(f+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let f=new A(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),y=i.mesh(cu(t,[f.x*.16,f.y*.16,f.z*.16],[f.x*p,f.y*p,f.z*p],7,.03,.005),o,[0,0,3]),M=t.uniform(0,6.28);i.anim(b=>{y.rotation.set(Math.floor(b/5+M)*1.7,0,Math.floor(b/4+M)*2.4,"ZYX"),y.scale.setScalar(Math.max(1e-4,h(b,M,.5)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],y=[2.5,2.66,2.85,3.08,3.22];i.stat(ln(p.map((M,b)=>[M*Math.cos(f+.3*b),M*Math.sin(f+.3*b),y[b]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),r)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,f,p,y])=>{let M=i.mesh(gi(_,f.map(b=>b*Math.PI/180),p,10),r,[0,0,3]);i.anim(b=>{M.rotation.z=b*y})}),i.stat(ii(.58,.06,.03,4),r,[0,0,3.14]);let u=[new A(0,.6,.8),new A(.7,-.3,.65),new A(-.45,.5,.75)],d=[1,-2,3],m=Array.from({length:6},(_,f)=>{let p=u[f%3].clone().normalize(),y=Math.abs(p.z)<.9?new A(0,0,1):new A(1,0,0),M=p.clone().cross(y).normalize(),b=p.clone().cross(M);return{e1:M,e2:b,R:t.uniform(.32,.5),th0:Math.floor(f/3)*Math.PI+t.uniform(-.3,.3),w:d[f%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(ii(.11,.11,.035,4),s,m.length);return i.anim(_=>{m.forEach((f,p)=>{let y=f.th0+_*f.w,M=f.R*(1+.12*Math.sin(_*.05236+f.ph));Xs(g,p,[M*(f.e1.x*Math.cos(y)+f.e2.x*Math.sin(y)),M*(f.e1.y*Math.cos(y)+f.e2.y*Math.sin(y)),3+M*(f.e1.z*Math.cos(y)+f.e2.z*Math.sin(y))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(ii(.1,.3,.04,5),s,[0,0,.32]),{z:3,r:.15,glass:le(.6,.3,1),hot:le(.7,.5,1),mid:le(.4,.1,1),style:"flicker"}}function jy(i){let{rng:t,m:e}=i,n=e.veins(le(.02,.03,.05),le(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let r=e.metal(le(.8,.86,.95),.15),s=e.crystal(le(.25,.65,1),4),o=e.emissive(le(.7,.9,1),14),a=e.emissive(le(.3,.7,1),9);i.stat(ln([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(ii(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let y=i.mesh(gi(.058+.006*p,[0,0,0],.006,12,.6),r,[0,0,.655+.42*p]);i.anim(M=>{y.rotation.z=M*(p%2===0?1:-1)*.05236})}let c=p=>{let y=Math.max(0,(p-.7)/.3);return .05+.26*zo(Math.sin(y*Math.PI/2),1.5)};for(let p=0;p<2;p++){let y=Jr(110);i.stat(ln(Zi(c,.4,3.2,6,y,p*Math.PI),Array.from({length:y},(M,b)=>.0085+.004*Math.sin(b*.55+p)),{radial:5,per:3}),r)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,y,M,b])=>{let L=i.mesh(gi(p,y.map(P=>P*Math.PI/180),M,10),r,[0,0,3]);i.anim(P=>{L.rotation.z=P*b})}),i.stat(ii(.62,.05,.032,4),s,[0,0,3.17]);{let p=n.emissiveIntensity,y=a.emissiveIntensity,M=le(.45,.82,1),b=0;i.anim((L,P)=>{b+=(i.charge()-b)*Math.min(1,P*5),n.emissiveIntensity=p*(1+5*b),a.emissiveIntensity=y*(1+2.5*b),r.emissive.copy(M).multiplyScalar(.85*b)})}let l=_f(t,Go(110),.35,.85);for(let p=0;p<Go(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,y)=>p.map(M=>({rel:M,s:y(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),d=h(_f(t,Math.max(Go(30),8),.4,.9),()=>t.uniform(.02,.045)),m=au([ii(1,1,.14,4),ii(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(y,M)=>M)),p))),g=i.inst(hu,o,u.length),_=i.inst(m,o,d.length),f=(p,y,M)=>{y.forEach((b,L)=>{let P=xc(M/b.per+b.ph),v=(1-P)**1.6;Xs(p,L,[b.rel[0]*v,b.rel[1]*v,3+b.rel[2]*v],b.s*Math.min(1,P*8)*(1-P)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{f(g,u,p),f(_,d,p)}),i.stat(ii(.08,.31,.05,6),s,[0,0,.33]);for(let p=0;p<3;p++){let y=2*Math.PI*p/3+.4,M=Math.cos(y),b=Math.sin(y);i.stat(ln([[.035*M,.035*b,.52],[.07*M,.07*b,.44],[.11*M,.11*b,.34],[.1*M,.1*b,.24]],[.02,.016,.011,.003],{radial:6}),r)}return{z:3,r:.17,glass:le(.05,.25,1),hot:le(.2,.5,1),mid:le(0,.05,.4)}}var yf={verdant:Zy,ember:$y,tide:Ky,storm:Jy,void:jy},Qy={verdant:7,ember:8,tide:9,storm:10,void:11};function $i(i,t){let e=lf(i),n=yf[e.base??e.id]?e.base??e.id:"verdant",r=new Yt,s=new Yt;s.rotation.x=-Math.PI/2,s.scale.setScalar(Vo),s.position.y=xr-3*Vo,r.add(s);let o=[],a=[],c=[],l=0,h=new _c,u={B:s,batch:h,rng:uf(Qy[n]),m:Gy(o,a),stat:(v,T,N,x,S)=>h.add(v,T,N,x,S),mesh:(v,T,N)=>{let x=new St(v,T);return N&&x.position.set(...N),s.add(x),x},inst:(v,T,N)=>{let x=new Fs(v,T,N);return x.frustumCulled=!1,s.add(x),x},anim:v=>{c.push(v)},charge:()=>l},d=yf[n](u);h.build(s);let m=new zt(e.gem),g=e.tint?new zt(e.tint):null,_=new Te({color:g?d.glass.clone().lerp(m,.6):d.glass,emissive:m,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),f=new St(new Ne(d.r*Vo,20,14),_);f.position.y=xr+(d.z-3)*Vo,f.renderOrder=1,r.add(f);let p=u.m.core(g?d.hot.clone().lerp(m,.7):d.hot,g?d.mid.clone().lerp(m,.5):d.mid,6),y=new St(new Ne(d.r*Vo*.6,14,10),p);f.add(y);let M=p.emissiveIntensity;if(c.push(v=>{if(d.style==="flicker"){let T=Math.abs(Math.sin(v*.9)*Math.sin(v*.37+1.1));y.scale.setScalar(1+.1*T),p.emissiveIntensity=M*(.55+.45*T)*1.6}else y.scale.setScalar(1+.05*Math.sin(v*.1309))}),o.splice(o.indexOf(p),1),g)for(let v of[...o,...a])v.color.lerp(g,.55),v.emissive.getHex()!==0&&v.emissive.lerp(g,.7);let b=new jn(new Zn({map:t,color:m.getHex(),blending:fn,depthWrite:!1,transparent:!0,opacity:.5}));b.scale.setScalar(.45),b.position.y=f.position.y,r.add(b);let L=Math.random()*20,P=(v,T)=>{l=T,L+=v*(1+T*1.5);let N=L*24;for(let x of c)x(N,v)};return P(0,0),{group:r,gem:f,gemMat:_,glow:b,color:m,materials:o,update(v,T,N){P(T,N)}}}var re=i=>new zt(i),ve=i=>1-Math.abs((i%1+1)%1*2-1),Be=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),Mr=(i,t)=>Math.exp(-(i*i)/(t*t)),xf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function pn(i,t,e,n,r=!1){let s=[],o=[],a=(h,u)=>e(r?h%i/i:h/i,u/t),c=(h,u,d)=>{let m=(h[0]+u[0]+d[0])/3,g=(h[1]+u[1]+d[1])/3,_=n(r?m/i%1:m/i,g/t);for(let[f,p]of[h,u,d])s.push(...a(f,p)),o.push(_.r,_.g,_.b)};for(let h=0;h<t;h++)for(let u=0;u<i;u++)c([u,h],[u,h+1],[u+1,h+1]),c([u,h],[u+1,h+1],[u+1,h]);let l=new be;return l.setAttribute("position",new oe(s,3)),l.setAttribute("color",new oe(o,3)),l.computeVertexNormals(),l}function Cn(i,t,e,n=1,r=1,s=0,o=1){let a=i.length-1;return pn(t,a,(c,l)=>{let h=Math.min(a-1,Math.floor(l*a)),u=l*a-h,d=i[h][0]+(i[h+1][0]-i[h][0])*u,m=i[h][1]+(i[h+1][1]-i[h][1])*u,g=(s+c*(o-s))*Math.PI*2;return[Math.sin(g)*m*n,d,Math.cos(g)*m*r]},e,s===0&&o===1)}function We(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new A(...i[Math.min(s-1,h+1)]).sub(new A(...i[Math.max(0,h-1)])).normalize()),a=new A(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new A(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return pn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}function Ei(i,t,e=[0,0,0],n=[0,0,0]){let r=new en(...i).toNonIndexed();r.rotateX(n[0]),r.rotateY(n[1]),r.rotateZ(n[2]),r.translate(...e);let s=r.attributes.position.count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=t.r,o[a*3+1]=t.g,o[a*3+2]=t.b;return r.setAttribute("color",new De(o,3)),r}function Sn(i,t){let e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=t.r,r[s*3+1]=t.g,r[s*3+2]=t.b;return e.setAttribute("color",new De(r,3)),e.computeVertexNormals(),e}function Mc(i){let t=new Ne(1,28,22),e=t.attributes.position,n=t.attributes.uv;for(let r=0;r<e.count;r++){let s=e.getX(r),o=e.getY(r),a=e.getZ(r),c=Math.max(0,a),l=s*i.w,h=o*i.h,u=a*i.d;if(o<0){let d=-o;l*=1-i.jaw*d**1.25,u*=1-.12*d,h*=1+i.chin*d}l*=1+.04*Mr(o+.02,.22)*c,o>.2&&(l*=1-.08*(o-.2));for(let d of[-1,1])u-=.009*Mr(s-d*.38,.2)*Mr(o-.06,.13)*c;u+=i.brow*Mr(o-.27,.08)*Mr(s,.5)*c,u+=i.nose*Mr(s,.11)*c*xf(.2,-.2,o)*xf(-.4,-.27,o),u+=.004*Mr(s,.24)*Mr(o+.5,.07)*c,a<0&&(u*=1.06),e.setXYZ(r,l,h,u),a>.05?n.setXY(r,.5+s*.5,.5+o*.5):n.setXY(r,.02,.97)}return t.computeVertexNormals(),t}function bc(i){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),r=(u,d)=>[(.5+u*.5)*512,(.5-d*.5)*512];n.fillStyle=i.skin,n.fillRect(0,0,512,512);let s=(u,d,m,g,_,f)=>{let[p,y]=r(u,d),M=m*512*.5;n.save(),n.translate(p,y),n.scale(1,g/m);let b=n.createRadialGradient(0,0,0,0,0,M);b.addColorStop(0,_.replace("A",String(f))),b.addColorStop(1,_.replace("A","0")),n.fillStyle=b,n.beginPath(),n.arc(0,0,M,0,Math.PI*2),n.fill(),n.restore()};for(let u of[-1,1])s(u*.62,-.18,.22,.3,i.shade,.35);s(0,-.72,.3,.12,i.shade,.3),s(.07,-.12,.05,.2,i.shade,.25);for(let u of[-1,1]){let d=u*.38,m=.06;s(d,m+.04,.26,.12,i.shade,.45);let[g,_]=r(d,m),f=i.eyeW*512*.5,p=i.eyeH*512*.5;if(n.save(),n.translate(g,_),n.scale(u,1),n.beginPath(),n.moveTo(-f,0),n.quadraticCurveTo(-f*.1,-p*1.1,f,-p*.15),n.quadraticCurveTo(f*.2,p*1.05,-f,0),n.closePath(),n.fillStyle=i.glowEyes?"#ffd23a":"#ece6ee",n.fill(),n.save(),n.clip(),n.fillStyle=i.iris,n.beginPath(),n.arc(-f*.1,p*.1,p*1.05,0,Math.PI*2),n.fill(),n.fillStyle="#120c14",n.beginPath(),i.glowEyes?n.ellipse(-f*.1,p*.1,p*.22,p*.8,0,0,Math.PI*2):n.arc(-f*.1,p*.1,p*.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.8)",n.beginPath(),n.arc(-f*.26,-p*.25,p*.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(40,25,35,.6)",n.fillRect(-f,-p*1.3,f*2,p*(.3+i.lid)),n.restore(),n.strokeStyle="#1c1418",n.lineCap="round",n.lineWidth=512*.009,n.beginPath(),n.moveTo(-f*1.02,.02*p),n.quadraticCurveTo(-f*.1,-p*(1.15-i.lid*.6),f*1.08,-p*.3),n.stroke(),n.strokeStyle="rgba(80,55,60,.5)",n.lineWidth=512*.004,n.beginPath(),n.moveTo(-f*.7,p*.55),n.quadraticCurveTo(0,p*1,f*.8,p*.25),n.stroke(),i.wrinkles){n.strokeStyle="rgba(120,90,90,.45)",n.lineWidth=512*.004;for(let y of[-1,0,1])n.beginPath(),n.moveTo(f*1.15,y*p*.4),n.lineTo(f*1.5,y*p*.8-p*.1),n.stroke();n.beginPath(),n.moveTo(-f*.6,p*1.4),n.quadraticCurveTo(0,p*2,f*.7,p*1.2),n.stroke()}n.strokeStyle=i.brow,n.lineWidth=i.browW,n.beginPath(),n.moveTo(-f*1,-p*(2.3-i.browTilt)),n.quadraticCurveTo(f*.15,-p*3.2,f*1.15,-p*(2.6+i.browTilt)),n.stroke(),n.restore()}if(i.wrinkles){n.strokeStyle="rgba(120,90,90,.4)",n.lineWidth=512*.004;for(let u of[.42,.5]){let[d,m]=r(-.25,u),[g,_]=r(.25,u);n.beginPath(),n.moveTo(d,m),n.quadraticCurveTo((d+g)/2,m-6,g,_),n.stroke()}}n.fillStyle="rgba(80,50,55,.5)";for(let u of[-1,1]){let[d,m]=r(u*.06,-.32);n.beginPath(),n.ellipse(d,m,512*.012,512*.006,0,0,Math.PI*2),n.fill()}let[o,a]=r(0,-.52),c=i.lipW*512*.5,l=.05*512*.5;if(i.snarl){n.fillStyle="#2a1416",n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.fill(),n.fillStyle="#e8e0c8",n.fillRect(o-c*.85,a-l*.9,c*1.7,l*.8),n.fillRect(o-c*.7,a+l*.25,c*1.4,l*.6),n.strokeStyle="#2a1416",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(o+u*c*.24,a-l),n.lineTo(o+u*c*.24,a+l),n.stroke();n.strokeStyle=i.lips,n.lineWidth=512*.008,n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.stroke()}else n.fillStyle=i.lips,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a-l*.9,o+c,a),n.quadraticCurveTo(o,a+l*1.2,o-c,a),n.fill(),n.strokeStyle="rgba(40,20,25,.7)",n.lineWidth=512*.005,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a+l*.3,o+c,a),n.stroke();let h=new An(e);return h.colorSpace=on,h.anisotropy=4,h}function qs(){let i=[];return{materials:i,mat:(e,n={})=>{let r=new Te({color:n.vc?16777215:e,vertexColors:!!n.vc,metalness:n.metal??.04,roughness:n.rough??.8,flatShading:n.flat??!0,emissive:n.emissive??(n.vc?1315100:0),transparent:!0,side:n.double?Le:Un});return i.push({mat:r,color:r.color.clone(),emissive:r.emissive.clone()}),r}}}var Ot=(i,t,e,n=[0,0,0])=>{let r=new St(i,t);return r.position.set(...n),e.add(r),r},ri=-.85;function br(i,t,e,n,r,s){let o=new Yt;o.position.set(...t),o.rotation.z=.47,i.add(o);let a=new Yt;a.rotation.x=.3,o.add(a);let c=$i(r,n);c.group.position.set(0,.24,.02),c.group.scale.setScalar(.8),a.add(c.group),s&&(s.position.set(0,0,.02),s.scale.multiplyScalar(1.7),a.add(s));for(let l of c.materials)e.push({mat:l,color:l.color.clone(),emissive:l.emissive.clone()});return{staffPivot:o,staff:c,crystal:c.gem,crystalMat:c.gemMat,glow:c.glow}}function Mf(i,t,e){let n=new Xr;for(let r=0;r<8;r++){let s=Math.PI/2+r*Math.PI/4,o=r%2?t:i;r?n.lineTo(Math.cos(s)*o,Math.sin(s)*o):n.moveTo(Math.cos(s)*o,Math.sin(s)*o)}return n.closePath(),new Os(n,{depth:e,bevelEnabled:!0,bevelThickness:e*.3,bevelSize:i*.06,bevelSegments:1}).center()}var bf=(i,t,e)=>{let n=ve(i*e);return Math.abs(n-t)<.2||Math.abs(n-(1-t))<.2};function si(i,t,e,n=i,r=1){let s=new Yt,o=(a,c,l,h=[0,0,0],u=[1,1,1])=>{let d=Ot(Sn(a,c),t,s,l);return d.rotation.set(...h),d.scale.set(...u),d};if(e){o(new en(.03,.085,.07),i,[.04,0,-.005]);for(let a=0;a<4;a++){let c=.03-a*.02,l=.028-a*.001,h=new zn(l,.011,4,7,Math.PI*1.25);h.rotateX(Math.PI/2),o(h,n,[.012,c,0],[0,-.35,0])}o(new Wr(.011,.04,2,5),i,[.02,.048,.03],[.2,0,1.2])}else{o(new en(.06,.07,.028),i,[0,-.035,0]);for(let a=0;a<4;a++)o(new en(.013,.05-Math.abs(a-1.5)*.007,.016),n,[-.022+a*.0145,-.092+Math.abs(a-1.5)*.003,.006],[.25,0,0]);o(new en(.014,.04,.016),n,[.034,-.045,.012],[.2,0,-.5])}return s.scale.setScalar(r),s}var vr={goblin:16726564,witch:12086271,wizard:4827391,knight:16724016};function Er(i,t,e,n){let r=new Yt;r.name="eyes",r.visible=!1;let s=new an({color:new zt(e).lerp(new zt(16777215),.3),transparent:!0,depthWrite:!1}),o=new Zn({map:n,color:e,transparent:!0,opacity:.8,depthWrite:!1});for(let a of t){let c=new St(new Ne(.011,8,6),s);c.position.set(...a),c.scale.set(1.6,.75,.5),r.add(c);let l=new jn(o);l.position.set(a[0],a[1],a[2]+.012),l.scale.setScalar(.06),r.add(l)}return i.add(r),r}var ze={robe:re(3433416),robeDeep:re(2575516),cream:re(15853519),creamDeep:re(14273968),gold:re(14989388),goldDeep:re(11568688),skin:re(15916495),hair:re(16052974),hairShade:re(13618374),leather:re(7686442),leatherDeep:re(5583641),boot:re(2903964)},jr={w:.088,h:.122,d:.106,jaw:.42,chin:.06,nose:.022,brow:.008};function vf(i,t,e){let{materials:n,mat:r}=qs(),s=r(16777215,{vc:!0,double:!0}),o=r(ze.skin,{rough:.7}),a=r(ze.gold,{metal:.3,rough:.35,emissive:2760200}),c=i==="ally",l=c?re(3117168):ze.robe,h=c?re(2255442):ze.robeDeep,u=(q,at,ot,pt)=>bf(q,at,ot)?ze.gold:pt,d=new Yt,m=new Yt;d.add(m);for(let q of[-1,1])Ot(Sn(new Ne(.06,7,5),ze.boot),s,m,[q*.09,.05,.08]).scale.set(.9,.75,1.6);Ot(Cn([[1.46,.1],[1.4,.165],[1.24,.18],[1.04,.165],[.7,.21],[.36,.255],[.3,.26],[.24,.266],[.18,.272],[.12,.278],[.04,.29]],36,(q,at)=>{let ot=q<.06||q>.94,pt=Math.floor(at*10);return pt===9?ze.cream:pt>=6?u(q,(pt-5.5)/3,12,ot?ze.creamDeep:h):ot?Be(ze.cream,ze.creamDeep,.3*at):Be(l,h,.3*ve(q*12)*at)},1.1,.8),s,m);let g=pn(48,30,(q,at)=>{let ot=.55+.35*at**1.3,pt=ot+q*(Math.PI*2-2*ot),D=.13,et,z,J;if(at<D){let W=at/D;et=1.58-.15*W**.8,z=.1+.15*W**.7,J=.74}else{let W=(at-D)/(1-D);et=1.43-W*1.3,z=.25+.14*W**1.2,J=.74+.16*W}return z*=1+.05*Math.sin(pt*7)*Math.max(0,at-D),[Math.sin(pt)*z*1.1,et,Math.cos(pt)*z*J-.03*at]},(q,at)=>q<.03||q>.97||at>.95?ze.cream:at>.8?u(q,(at-.8)/.15,16,h):Be(l,h,.25+.3*ve(q*9)));Ot(g,s,m),Ot(pn(6,4,(q,at)=>[(q-.5)*(.26-.2*at),1.56-at*.3,-.15-.04*Math.cos((q-.5)*3)-.03*at],(q,at)=>at>.85?ze.cream:Be(h,l,.3*ve(q*2))),s,m),Ot(new Ee(.035,.035,.014,10).rotateX(Math.PI/2),a,m,[0,1.47,.135]),Ot(new zn(.035,.007,4,10),a,m,[0,1.47,.142]);for(let q of[-1,1])Ot(new Ee(.012,.012,.06,5).rotateZ(Math.PI/2),a,m,[q*.065,1.48,.125]);Ot(Cn([[1.08,.172],[1.02,.17]],16,()=>ze.leather,1.1,.82),s,m),Ot(new Fo(.04,0),a,m,[0,1.05,.145]).scale.set(.9,1.1,.35),Ot(Sn(new Fo(.02,0),ze.leatherDeep),s,m,[0,1.05,.158]).scale.set(.9,1.1,.3),Ot(pn(1,6,(q,at)=>[.03+(q-.5)*.045+.02*Math.sin(at*3),1.03-at*.48,.15+.035*at+.012*Math.sin(at*6)],(q,at)=>at>.9?ze.gold:Be(ze.leather,ze.leatherDeep,.3*at)),s,m),Ot(new Ee(.043,.052,.12,7),o,m,[0,1.53,0]);let f=new Yt;f.position.set(0,1.66,0),m.add(f);let p=r(16777215,{rough:.7,flat:!1});p.map=bc({skin:"#f2ddcf",shade:"rgba(160,120,115,A)",iris:"#5d7590",eyeW:.2,eyeH:.07,lid:.55,brow:"#f0eee8",browW:15,browTilt:.2,lips:"#b77a72",lipW:.2,wrinkles:!0}),Ot(Mc(jr),p,f);let y=(q,at)=>Be(ze.hair,ze.hairShade,.2+.5*ve(q*9)*(.3+.7*at));Ot(pn(18,3,(q,at)=>{let ot=-Math.PI+q*Math.PI*2,pt=Math.abs(ot),D=pt<1?.62-.3*(pt/1):.32-.6*((pt-1)/(Math.PI-1)),et=Math.PI/2-at*(Math.PI/2-D),z=1.09;return[Math.sin(ot)*Math.cos(et)*jr.w*z,Math.sin(et)*jr.h*z,Math.cos(ot)*Math.cos(et)*jr.d*z]},y,!0),s,f),Ot(pn(18,10,(q,at)=>{let ot=Math.PI*.4+q*Math.PI*1.2,pt=.08-at*(.72+.1*ve(q*6+.3)),D=at<.25?.12+at*.26:.185+.04*Math.sin(at*3.1),et=.02*Math.sin(at*14+ot*3)*at;return[Math.sin(ot)*(D+et)*1.05,pt,Math.cos(ot)*(D+et)*.8-.02-.05*at]},y),s,f);for(let q of[-1,1]){let at=Array.from({length:8},(ot,pt)=>{let D=pt/7;return[q*(.095+.05*D+.02*Math.sin(D*9)),.02-D*.5,0+.05*D-.025*Math.sin(D*7)]});Ot(We(at,ot=>.03*(1-.6*ot)+.008,5,(ot,pt)=>y(pt,ot),[1,1,.6]),s,f)}Ot(pn(10,12,(q,at)=>{let ot=q-.5,D=-.02-.06*(1-Math.abs(ot)*2)**2-at*(.56+.06*ve(q*3+.5)),et=(.09+.02*Math.sin(Math.PI*Math.min(1,at*1.6)))*(1-.75*at**1.6),z=ot*2*et+.008*Math.sin(at*12+q*4),J=.065+.04*Math.cos(ot*Math.PI)+.085*at**.8-(at<.08?.03*Math.abs(ot)*2:0);return[z,D,J]},(q,at)=>Be(ze.hair,ze.hairShade,.15+.45*ve(q*5)*at)),s,f);for(let q of[-1,1])Ot(We([[q*.004,-.045,.108],[q*.035,-.055,.106],[q*.06,-.075,.095],[q*.07,-.11,.088]],at=>.014*(1-.6*at)+.004,5,()=>ze.hair),s,f);let M=new Yt;M.position.set(0,.075,-.005),M.rotation.set(-.08,0,-.05),f.add(M),Ot(pn(20,3,(q,at)=>{let ot=q*Math.PI*2,pt=.13+at*.17;return[Math.sin(ot)*pt,.02-.04*at*at,Math.cos(ot)*pt]},(q,at)=>Be(l,h,at>.85?.4:.2*ve(q*5)),!0),s,M),Ot(We([[0,.01,0],[0,.2,-.01],[0,.38,-.04],[-.02,.52,-.09],[-.07,.6,-.16],[-.13,.6,-.21],[-.18,.55,-.23]],q=>.15*(1-q)**1.3+.004,8,(q,at)=>Be(l,h,.25*ve(at*4)+.2*q)),s,M),Ot(pn(16,1,(q,at)=>{let ot=q*Math.PI*2,pt=.153-.005*at;return[Math.sin(ot)*pt,.025+at*.05,Math.cos(ot)*pt]},q=>ve(q*16)>.5?ze.gold:ze.goldDeep,!0),s,M),Ot(Mf(.055,.018,.01),a,M,[0,.08,.15]).rotation.x=-.1;let L=(q,at,ot)=>pn(14,8,(pt,D)=>{let et=pt*Math.PI*2,z=.06+ot*Math.max(0,(D-.25)/.75)**1.3;return[Math.cos(et)*z,-(D*q),Math.sin(et)*z*.9+at*D*D]},(pt,D)=>D>.88?ze.cream:D>.72?u(pt,(D-.72)/.16,5,h):Be(l,h,.3*ve(pt*3)),!0),P=new Yt;P.position.set(-.22,1.42,0),P.rotation.set(.05,0,.12),m.add(P),Ot(L(.58,.05,.13),s,P),P.add(si(ze.skin,s,!1)).position.set(0,-.56,.04);let v=new Yt;v.position.set(.22,1.42,.02),v.rotation.z=ri,m.add(v),Ot(L(.4,0,.065),s,v).rotation.x=-.5,Ot(new Ee(.03,.033,.12,6),o,v,[0,-.38,.19]).rotation.x=-.5;let{staffPivot:T,staff:N,crystal:x,crystalMat:S,glow:Z}=br(v,[0,-.43,.24],n,t,e,si(ze.skin,s,!0)),tt=Er(f,[-1,1].map(q=>[q*.38*jr.w,.06*jr.h,.9*jr.d]),vr.wizard,t);return{root:d,body:m,head:f,arm:v,staffPivot:T,crystal:x,crystalMat:S,glow:Z,staff:N,height:2,materials:n,eyes:tt}}var he={plate:re(14077887),plateHi:re(15262420),plateLo:re(11117201),plateDark:re(8156776),white:re(15789282),whiteLo:re(14209732),under:re(4862242),leather:re(7226406),leatherLo:re(5189401),sash:re(7301690),sashLo:re(5722928),slit:re(1380879),steel:re(13225168),grip:re(4860952),brass:re(12819016)};function Ef(i,t,e){let{materials:n,mat:r}=qs(),s=r(16777215,{vc:!0,double:!0}),o=r(16777215,{vc:!0,metal:.25,rough:.42,double:!0}),a=i==="ally"?re(3119724):re(12726316),c=i==="ally"?re(2257999):re(9314077),l=(v,T,N=6)=>Be(he.plate,ve(v*N)>.5?he.plateHi:he.plateLo,.35+.15*T),h=new Yt,u=new Yt;h.add(u);for(let v of[-1,1]){let T=v*.105;Ot(pn(8,4,(N,x)=>{let S=N*Math.PI*2,Z=-.07+x*.25,tt=.06-x*.035,q=.058*(1-.7*x**1.6);return[T+Math.cos(S)*q,Math.max(.005,tt+Math.sin(S)*q*.75),Z]},(N,x)=>Math.floor(x*4)%2?he.plateLo:he.plate,!0),o,u),Ot(We([[T,.08,-.01],[T,.22,0],[T,.36,0],[T,.5,.005]],N=>.058+.016*Math.sin(N*2.6),8,(N,x)=>l(x,N)),o,u),Ot(Sn(new Ne(.065,8,6),he.plateHi),o,u,[T,.53,.025]).scale.set(1,.9,.85),Ot(Sn(new Nn(.05,.03,6).rotateZ(-v*Math.PI/2),he.plateLo),o,u,[T+v*.06,.53,.02]),Ot(We([[T,.56,0],[T*1.02,.72,0],[T*.98,.9,-.005]],N=>.068+.022*N,8,(N,x)=>l(x,N)),o,u)}Ot(Cn([[1,.19],[.8,.22],[.6,.25],[.5,.26]],16,v=>Be(he.under,he.leatherLo,.4*ve(v*8)),1.1,.85),s,u);for(let v of[!1,!0])Ot(pn(8,10,(T,N)=>{let x=(v?Math.PI:0)+(T-.5)*2.2,S=1.36-N*.76-.02*ve(T*4)*N,Z=(N<.45?.2+.03*Math.sin(N*7):.2+.12*(N-.45))+.012;return[Math.sin(x)*Z*1.12,S,Math.cos(x)*Z*.86]},(T,N)=>N>.82&&N<.87||N>.91&&N<.96?a:Be(he.white,he.whiteLo,.35*ve(T*4)*N)),s,u);Ot(Cn([[1.58,.11],[1.53,.2],[1.42,.245],[1.28,.23],[1.14,.2],[1.02,.205]],16,(v,T)=>v<.04||v>.96?he.plateHi:l(v,T,8),1.12,.84),o,u);for(let v=0;v<3;v++)Ot(Cn([[1.02-v*.045,.205+v*.008],[.975-v*.045,.215+v*.008]],14,T=>v%2?he.plateLo:he.plate,1.12,.86),o,u);Ot(Cn([[1.66,.06],[1.62,.075],[1.57,.12]],12,(v,T)=>l(v,T)),o,u),Ot(We(Array.from({length:15},(v,T)=>{let N=T/14*Math.PI*2;return[Math.sin(N)*.235,1.07+.03*Math.cos(N+.6),Math.cos(N)*.19]}),()=>.03,6,(v,T)=>Be(he.sash,he.sashLo,ve(T*3+v*5)*.6),[1,1.4,1]),s,u);for(let v of[0,1])Ot(We([[-.2,1.06,.1],[-.22-v*.02,.95,.12],[-.21-v*.04,.82-v*.04,.12]],T=>.025*(1-.3*T),5,T=>Be(he.sash,he.sashLo,T),[1.4,1,.5]),s,u);for(let v of[-1,1]){let T=Array.from({length:9},(N,x)=>{let S=x/8,Z=-.9+S*4.6,tt=1.52-.48*S;return[v*Math.sin(Z)*.285,tt+.06*Math.sin(S*Math.PI),Math.cos(Z)*.222]});Ot(We(T,()=>.016,4,N=>Be(he.leather,he.leatherLo,.4*ve(N*4)),[1,1.5,1]),s,u)}Ot(Ei([.06,.06,.02],he.brass,[0,1.46,.235],[0,0,Math.PI/4]),s,u);let d=new Yt;d.position.set(0,1.18,-.24),d.rotation.z=.55,u.add(d),Ot(Ei([.055,.82,.012],he.steel,[0,-.12,0]),o,d),Ot(Sn(new Nn(.039,.07,4).rotateX(Math.PI).rotateY(Math.PI/4),he.steel),o,d,[0,-.565,0]).scale.set(1,1,.22),Ot(Ei([.24,.03,.035],he.brass,[0,.3,0]),s,d),Ot(Sn(new Ee(.018,.018,.16,6),he.grip),s,d,[0,.39,0]),Ot(Sn(new Ne(.03,6,4),he.brass),s,d,[0,.48,0]),Ot(Cn([[.32,.02],[-.5,.05],[-.6,.03]],6,()=>he.leatherLo,1,.5),s,d);let m=new Yt;m.position.set(0,1.73,0),u.add(m),Ot(Cn([[.13,0],[.125,.06],[.105,.105],[.045,.122],[.025,.124],[.005,.125],[-.06,.125],[-.125,.12],[-.135,.11]],14,(v,T)=>Math.floor(T*8)===4&&(v<.2||v>.8)?he.slit:v<.025||v>.975?he.plateHi:l(v,T,6),1,1.06),o,m);for(let v=0;v<4;v++)Ot(Ei([.012,.012,.01],he.slit,[.035+v%2*.025,-.05-Math.floor(v/2)*.03,.128],[0,.3,0]),s,m);for(let v of[-1,1])Ot(Sn(new Ee(.014,.014,.01,8).rotateZ(Math.PI/2),he.brass),s,m,[v*.128,-.01,0]);Ot(Ei([.03,.025,.05],he.brass,[0,.13,-.01]),s,m);for(let v=0;v<7;v++){let T=(v-3)/3,N=.42-Math.abs(T)*.08,x=Array.from({length:7},(S,Z)=>{let tt=Z/6,q=tt*2.2;return[T*.03*(1+tt),.14+Math.sin(q)*.14*N/.42,-.01-(1-Math.cos(q))*N*.45+.06*tt]});Ot(We(x,S=>.026*(1-S)**.7+.004,5,(S,Z)=>Be(a,c,.3*ve(Z*2)+.4*S)),s,m)}let g=(v,T)=>{Ot(We([[0,-.02,0],[0,-.14,0],[0,-.26,T*.3]],N=>.056-.006*N,7,(N,x)=>l(x,N)),o,v),Ot(Sn(new Ne(.05,7,5),he.plateHi),o,v,[0,-.27,T*.3-.01])};for(let v of[-1,1]){let T=new Yt;T.position.set(v*.27,1.5,0),T.rotation.z=-v*.5,u.add(T),Ot(Cn([[.075,0],[.06,.07],[.02,.12],[-.03,.135],[-.07,.13]],10,(N,x)=>x>.85?he.plateLo:l(N,x,5),1,1),o,T),Ot(Cn([[-.06,.13],[-.1,.12]],10,()=>he.plateLo),o,T),Ot(Sn(new Ee(.035,.04,.02,10).rotateZ(-v*Math.PI/2),he.plateHi),o,T,[v*.125,-.03,0]),Ot(Sn(new Ne(.014,6,4),he.brass),s,T,[v*.137,-.03,0])}let _=new Yt;_.position.set(-.26,1.44,0),_.rotation.set(.05,0,.1),u.add(_),g(_,.1),Ot(We([[0,-.28,.02],[0,-.42,.05],[0,-.52,.06]],v=>.048+.008*v,7,(v,T)=>l(T,v)),o,_),_.add(si(he.plateHi,o,!1,he.plateLo,1.15)).position.set(0,-.53,.06);let f=new Yt;f.position.set(.26,1.44,.02),f.rotation.z=ri,u.add(f),Ot(We([[0,-.02,0],[0,-.12,0],[0,-.22,.04]],v=>.056-.006*v,7,(v,T)=>l(T,v)),o,f),Ot(Sn(new Ne(.05,7,5),he.plateHi),o,f,[0,-.24,.05]),Ot(We([[0,-.25,.07],[0,-.33,.15],[0,-.39,.21]],v=>.045+.01*v,7,(v,T)=>l(T,v)),o,f);let{staffPivot:p,staff:y,crystal:M,crystalMat:b,glow:L}=br(f,[0,-.43,.25],n,t,e,si(he.plateHi,o,!0,he.plateLo,1.15)),P=Er(m,[[-.035,.016,.128],[.035,.016,.128]],vr.knight,t);return{root:h,body:u,head:m,arm:f,staffPivot:p,crystal:M,crystalMat:b,glow:L,staff:y,height:2,materials:n,eyes:P}}var Re={skin:re(8688447),skinLo:re(6714670),skinHi:re(10136146),hair:re(2892832),hairHi:re(4536623),red:re(11744555),redLo:re(8528668),leather:re(8015404),leatherLo:re(5583897),wrap:re(11045474),wrapLo:re(8217925),shorts:re(3814191),shortsLo:re(2695967),brass:re(12161605),nail:re(3947042),ear:re(10709594)},wi={w:.096,h:.112,d:.106,jaw:.22,chin:.02,nose:.036,brow:.016};function wf(i,t,e){let{materials:n,mat:r}=qs(),s=r(16777215,{vc:!0,double:!0}),o=r(Re.skin,{rough:.75}),a=i==="ally"?re(2920330):Re.red,c=i==="ally"?re(2058598):Re.redLo,l=(T,N,x=5)=>Be(Re.skin,ve(T*x)>.5?Re.skinHi:Re.skinLo,.35+.1*N),h=new Yt,u=new Yt;h.add(u);for(let T of[-1,1]){let N=T*.095;Ot(pn(7,4,(x,S)=>{let Z=x*Math.PI*2,tt=-.06+S*.23,q=.05*(1-.35*S)*(S>.75?1-(S-.75)*1.6:1);return[N+T*.012*S+Math.cos(Z)*q,Math.max(.004,.035+Math.sin(Z)*q*.55-.01*S),tt]},(x,S)=>l(x,S),!0),s,u);for(let x=0;x<3;x++)Ot(Sn(new Ne(.016,5,4),Re.skinLo),s,u,[N+T*.012+(x-1)*.022,.016,.165-Math.abs(x-1)*.01]);Ot(We([[N,.05,-.01],[N,.3,-.005],[N*1.03,.48,.01],[N*1.05,.65,0],[N,.8,-.005]],x=>.04+.022*x+.008*Math.sin(x*7),7,(x,S)=>l(S,x)),s,u),Ot(We([[N,.08,-.01],[N,.2,-.008],[N,.32,-.004],[N*1.02,.44,.005]],x=>.048+.008*x,7,(x,S)=>ve(x*6+S*.5)>.5?Re.wrap:Re.wrapLo),s,u)}Ot(Cn([[.96,.17],[.86,.19],[.74,.21],[.66,.2]],14,(T,N)=>Be(Re.shorts,Re.shortsLo,.5*ve(T*6)*N),1.08,.82),s,u),Ot(Cn([[1,.175],[.94,.178]],14,T=>ve(T*7)>.85?Re.leatherLo:Re.leather,1.08,.84),s,u),Ot(Ei([.06,.05,.02],Re.brass,[0,.97,.15]),s,u),Ot(Ei([.035,.028,.024],Re.leatherLo,[0,.97,.152]),s,u);for(let T of[!1,!0])Ot(pn(6,6,(N,x)=>{let S=(T?Math.PI:0)+(N-.5)*.9,Z=.19+.06*x,tt=.42+.1*ve(N*3.5+.2)+.04*Math.sin(N*17);return[Math.sin(S)*Z*1.08,.96-x*tt,Math.cos(S)*Z*.86+(T?-.01:.01)]},(N,x)=>Be(a,c,.25+.35*ve(N*3)*x)),s,u);Ot(Cn([[1.36,.075],[1.32,.155],[1.24,.18],[1.13,.155],[1.02,.14],[.94,.152]],14,(T,N)=>Math.min(T,1-T)<.12&&N>.4?ve(N*6)>.5?Re.skinHi:Re.skinLo:l(T,N,7),1.1,.74),s,u);for(let T of[-1,1]){let N=Array.from({length:9},(x,S)=>{let Z=S/8,tt=-.9+Z*4.4;return[T*Math.sin(tt)*.212,1.33-.36*Z+.04*Math.sin(Z*Math.PI),Math.cos(tt)*.145]});Ot(We(N,()=>.014,4,x=>Be(Re.leather,Re.leatherLo,.4*ve(x*4)),[1,2,1]),s,u)}Ot(Ei([.05,.05,.02],Re.brass,[0,1.27,.15],[0,0,Math.PI/4]),s,u);let d=new Yt;d.position.set(-.2,1.31,0),d.rotation.z=.55,d.scale.setScalar(.8),u.add(d),Ot(Cn([[.06,0],[.045,.06],[0,.1],[-.05,.11],[-.08,.1]],9,(T,N)=>N>.8||ve(T*9)>.8?Re.leatherLo:Re.leather,1,1.1),s,d),Ot(We(Array.from({length:11},(T,N)=>{let x=N/10*Math.PI*2;return[Math.sin(x)*.088,1.375+.02*Math.cos(x),Math.cos(x)*.08]}),()=>.03,7,(T,N)=>Be(a,c,.5*ve(N*2+T*6))),s,u),Ot(pn(8,5,(T,N)=>{let x=Math.PI+(T-.5)*(2.4-1.2*N),S=.13-.02*N;return[Math.sin(x)*S*1.1,1.42-N*.2+.03*Math.cos((T-.5)*6),Math.cos(x)*S-.04*N]},(T,N)=>Be(a,c,.2+.4*ve(T*3)*(1-N))),s,u);for(let T of[0,1])Ot(We([[-.04+T*.05,1.36,-.1],[-.07+T*.03,1.22,-.15],[-.09+T*.05,1.08,-.16]],N=>.035*(1-.3*N),5,N=>Be(a,c,N),[1.4,1,.45]),s,u);Ot(new Ee(.04,.05,.1,7),o,u,[0,1.4,0]);let m=new Yt;m.position.set(0,1.51,.01),u.add(m);let g=r(16777215,{rough:.75,flat:!1});g.map=bc({skin:"#84933f",shade:"rgba(60,72,24,A)",iris:"#d2401c",eyeW:.2,eyeH:.075,lid:.2,brow:"#2a221c",browW:22,browTilt:1,lips:"#4e3a22",lipW:.34,snarl:!0,glowEyes:!0}),Ot(Mc(wi),g,m);for(let T of[-1,1]){let N=[[T*.075,0,-.01],[T*.14,.03,-.03],[T*.21,.07,-.05],[T*.27,.105,-.07]];Ot(We(N,x=>.035*(1-x)**.9+.002,6,(x,S)=>l(S,x,3),[1,1,.35]),s,m),Ot(We(N.map(([x,S,Z])=>[x*.98,S,Z+.008]).slice(0,3),x=>.02*(1-x)+.002,5,()=>Re.ear,[1,1,.3]),s,m)}Ot(pn(16,3,(T,N)=>{let x=-Math.PI+T*Math.PI*2,S=Math.abs(x),Z=S<.9?.55:.55-.65*((S-.9)/(Math.PI-.9)),tt=Math.PI/2-N*(Math.PI/2-Z),q=1.08+.03*ve(T*8);return[Math.sin(x)*Math.cos(tt)*wi.w*q,Math.sin(tt)*wi.h*q,Math.cos(x)*Math.cos(tt)*wi.d*q]},(T,N)=>Be(Re.hair,Re.hairHi,.4*ve(T*8+N)),!0),s,m);for(let T=0;T<13;T++){let N=-Math.PI+T/13*Math.PI*2+.2*Math.sin(T*7.3),x=.55+.5*(T*.37%1),S=new A(Math.sin(N)*Math.cos(x),Math.sin(x),Math.cos(N)*Math.cos(x)),Z=new A(S.x*wi.w,S.y*wi.h,S.z*wi.d);Ot(Sn(new Nn(.022,.07+.03*(T*.61%1),4),T%3?Re.hair:Re.hairHi),s,m,[Z.x,Z.y,Z.z]).quaternion.setFromUnitVectors(new A(0,1,0),S.add(new A(0,0,-.5)).normalize())}let _=(T,N,x)=>Ot(We([N,[(N[0]+x[0])/2,(N[1]+x[1])/2,(N[2]+x[2])/2],x],S=>.042-.006*S,7,(S,Z)=>ve(S*4+Z*.4)>.5?Re.leather:Re.leatherLo),s,T),f=new Yt;f.position.set(-.2,1.3,0),f.rotation.set(.05,0,.14),u.add(f),Ot(We([[0,0,0],[0,-.14,0],[0,-.26,.02],[0,-.4,.05],[0,-.5,.06]],T=>.042-.012*T+.006*Math.sin(T*6),7,(T,N)=>l(N,T)),s,f),_(f,[0,-.32,.04],[0,-.48,.06]),f.add(si(Re.leather,s,!1,Re.skin,1.05)).position.set(0,-.5,.065);let p=new Yt;p.position.set(.2,1.3,.02),p.rotation.z=ri,u.add(p),Ot(We([[0,0,0],[0,-.12,0],[0,-.22,.04],[0,-.3,.12],[0,-.38,.2]],T=>.042-.012*T,7,(T,N)=>l(N,T)),s,p),_(p,[0,-.28,.1],[0,-.38,.19]);let{staffPivot:y,staff:M,crystal:b,crystalMat:L,glow:P}=br(p,[0,-.42,.23],n,t,e,si(Re.leather,s,!0,Re.skin,1.05)),v=Er(m,[-1,1].map(T=>[T*.38*wi.w,.06*wi.h,.9*wi.d]),vr.goblin,t);return{root:h,body:u,head:m,arm:p,staffPivot:y,crystal:b,crystalMat:L,glow:P,staff:M,height:1.75,materials:n,eyes:v}}var xn=i=>new zt(i),nn={robe:xn(8017597),robeDeep:xn(6045590),trim:xn(11242982),dress:xn(3484996),dressHi:xn(4931936),lining:xn(6969968),skin:xn(15654104),hair:xn(13615844),hairDark:xn(10194102),hat:xn(7097004),hatBand:xn(10256598),boot:xn(3880006),belt:xn(4207692),moon:xn(15787712),lips:xn(5911888),eye:xn(1709088)};function Qn(i,t,e,n,r=!1){let s=[],o=[],a=(u,d)=>e(r?u%i/i:u/i,d/t),c=(u,d)=>n(r?(u%i+i)%i/i:u/i,d/t),l=(u,d,m)=>{let g=c((u[0]+d[0]+m[0])/3,(u[1]+d[1]+m[1])/3);for(let[_,f]of[u,d,m])s.push(...a(_,f)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let d=0;d<i;d++)l([d,u],[d,u+1],[d+1,u+1]),l([d,u],[d+1,u+1],[d+1,u]);let h=new be;return h.setAttribute("position",new oe(s,3)),h.setAttribute("color",new oe(o,3)),h.computeVertexNormals(),h}function uu(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new A(...i[Math.min(s-1,h+1)]).sub(new A(...i[Math.max(0,h-1)])).normalize()),a=new A(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new A(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return Qn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}var oi=i=>1-Math.abs((i%1+1)%1*2-1),Ki=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),Ji={w:.087,h:.126,d:.108},Si=(i,t)=>Math.exp(-(i*i)/(t*t)),Sf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function tx(){let i=new Ne(1,28,22),t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++){let r=t.getX(n),s=t.getY(n),o=t.getZ(n),a=Math.max(0,o),c=r*Ji.w,l=s*Ji.h,h=o*Ji.d;if(s<0){let d=-s;c*=1-.55*d**1.25,h*=1-.12*d,l*=1+.08*d}c*=1+.04*Si(s+.02,.22)*a,s>.2&&(c*=1-.1*(s-.2));for(let d of[-1,1])h-=.008*Si(r-d*.38,.2)*Si(s-.06,.13)*a;h+=.006*Si(s-.3,.07)*Si(r,.5)*a;let u=Si(r,.1)*a*Sf(.2,-.2,s)*Sf(-.38,-.26,s);h+=.017*u,h+=.005*Si(r,.24)*Si(s+.5,.07)*a,h-=.004*Si(r,.3)*Si(s+.38,.05)*a,o<0&&(h*=1.06),t.setXYZ(n,c,l,h),o>.05?e.setXY(n,.5+r*.5,.5+s*.5):e.setXY(n,.02,.97)}return i.computeVertexNormals(),i}function ex(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=(h,u)=>[(.5+h*.5)*512,(.5-u*.5)*512];e.fillStyle="#e9d7d3",e.fillRect(0,0,512,512);let r=(h,u,d,m,g,_)=>{let[f,p]=n(h,u),y=d*512*.5;e.save(),e.translate(f,p),e.scale(1,m/d);let M=e.createRadialGradient(0,0,0,0,0,y);M.addColorStop(0,g.replace("A",String(_))),M.addColorStop(1,g.replace("A","0")),e.fillStyle=M,e.beginPath(),e.arc(0,0,y,0,Math.PI*2),e.fill(),e.restore()};for(let h of[-1,1])r(h*.62,-.18,.22,.3,"rgba(150,110,130,A)",.28),r(h*.42,-.2,.16,.1,"rgba(220,140,150,A)",.22);r(0,-.72,.3,.12,"rgba(140,100,120,A)",.25);for(let h of[-1,1]){let u=h*.38,d=.06;r(u,d+.06,.28,.12,"rgba(120,85,140,A)",.55);let[m,g]=n(u,d),_=.21*512*.5,f=.082*512*.5;e.save(),e.translate(m,g),e.scale(h,1),e.beginPath(),e.moveTo(-_,0),e.quadraticCurveTo(-_*.1,-f*1.1,_,-f*.15),e.quadraticCurveTo(_*.2,f*1.05,-_,0),e.closePath(),e.fillStyle="#efe9f2",e.fill(),e.save(),e.clip(),e.fillStyle="#4a3a5c",e.beginPath(),e.arc(-_*.12,f*.12,f*1.05,0,Math.PI*2),e.fill(),e.fillStyle="#1a1220",e.beginPath(),e.arc(-_*.12,f*.12,f*.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(-_*.28,-f*.25,f*.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,40,70,.55)",e.fillRect(-_,-f*1.2,_*2,f*.55),e.restore(),e.strokeStyle="#1c1420",e.lineCap="round",e.lineWidth=512*.01,e.beginPath(),e.moveTo(-_*1.02,.02*f),e.quadraticCurveTo(-_*.1,-f*1.15,_*1.12,-f*.35),e.stroke(),e.lineWidth=512*.006;for(let p=0;p<4;p++){let y=.55+p*.15;e.beginPath(),e.moveTo(_*(y*2-1),-f*(.95-p*.15)),e.lineTo(_*(y*2-1)+_*.18,-f*(1.35-p*.12)),e.stroke()}e.strokeStyle="rgba(90,60,90,.55)",e.lineWidth=512*.004,e.beginPath(),e.moveTo(-_*.9,-f*.9),e.quadraticCurveTo(0,-f*2,_*.95,-f*1),e.stroke(),e.strokeStyle="rgba(90,60,90,.4)",e.beginPath(),e.moveTo(-_*.6,f*.55),e.quadraticCurveTo(_*.1,f*1.05,_*.85,f*.2),e.stroke(),e.strokeStyle="#4a3a55",e.lineWidth=512*.011,e.beginPath(),e.moveTo(-_*.95,-f*2.7),e.quadraticCurveTo(_*.2,-f*3.4,_*1.15,-f*2.6),e.stroke(),e.restore()}r(.07,-.12,.05,.2,"rgba(160,120,135,A)",.22),e.fillStyle="rgba(110,70,90,.55)";for(let h of[-1,1]){let[u,d]=n(h*.06,-.31);e.beginPath(),e.ellipse(u,d,512*.012,512*.006,0,0,Math.PI*2),e.fill()}let[s,o]=n(0,-.5),a=.25*512*.5,c=.065*512*.5;e.fillStyle="#5b2f50",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s-a*.5,o-c*1.2,s-a*.1,o-c*.9),e.lineTo(s,o-c*.6),e.lineTo(s+a*.1,o-c*.9),e.quadraticCurveTo(s+a*.5,o-c*1.2,s+a,o),e.closePath(),e.fill(),e.fillStyle="#7b4468",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*2,s+a,o),e.closePath(),e.fill(),e.strokeStyle="#3a1c33",e.lineWidth=512*.006,e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*.35,s+a,o),e.stroke(),r(.03,-.535,.05,.02,"rgba(255,220,235,A)",.4);let l=new An(t);return l.colorSpace=on,l.anisotropy=4,l}function Tf(i,t,e){let n=[],r=(W,U={})=>{let R=new Te({color:U.vc?16777215:W,vertexColors:!!U.vc,metalness:U.metal??.04,roughness:U.rough??.82,flatShading:!0,emissive:U.emissive??(U.vc?1709092:0),transparent:!0,side:U.double?Le:Un});return n.push({mat:R,color:R.color.clone(),emissive:R.emissive.clone()}),R},s=r(16777215,{vc:!0,double:!0}),o=r(nn.skin,{rough:.7}),a=r(nn.eye,{rough:.5}),c=r(nn.moon,{metal:.35,rough:.35,emissive:2761744}),l=(W,U,R,C=[0,0,0])=>{let k=new St(W,U);return k.position.set(...C),R.add(k),k},h=i==="ally"?xn(3840636):nn.robe,u=i==="ally"?xn(2781272):nn.robeDeep,d=i==="ally"?xn(7655598):nn.trim,m=new Yt,g=new Yt;m.add(g);for(let W of[-1,1]){let U=W*.075;l(uu([[U,.98,0],[U*1.05,.62,.01],[U*1.1,.3,0],[U*1.1,.13,-.01]],C=>.068-.03*C,7,()=>nn.boot),s,g);let R=Qn(6,2,(C,k)=>{let X=C*Math.PI*2,B=k,F=-.05+B*.2,Y=.13-B*.11,Q=.045*(1-.65*B*B);return[U+Math.cos(X)*Q,Y+Math.sin(X)*Q*.55,F]},()=>nn.boot,!0);l(R,s,g),l(new Ee(.012,.006,.12,5),a,g,[U,.06,-.045])}let _=Qn(14,8,(W,U)=>{let R=U<.25?.02:.02+(U-.25)*.55,C=R+W*(Math.PI*2-2*R),k=1.1-U*.82-(W>.35&&W<.65?0:.04*U)+.03*oi(W*7)*U,X=.165+.15*U**1.2;return[Math.sin(C)*X,k,Math.cos(C)*X*.82]},(W,U)=>Ki(nn.dress,nn.dressHi,.6*oi(W*7)*U));l(_,s,g),l(Qn(4,4,(W,U)=>{let R=-.35+W*.7,C=.15+.09*U;return[Math.sin(R)*C,.86-U*.6,Math.cos(R)*C*.62-.02]},()=>nn.lining),s,g);let f=Qn(10,5,(W,U)=>{let R=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.1],[1.67,.052]],C=U*(R.length-1),k=Math.min(R.length-2,Math.floor(C)),X=C-k,B=R[k][0]+(R[k+1][0]-R[k][0])*X,F=R[k][1]+(R[k+1][1]-R[k][1])*X,Y=W*Math.PI*2;return[Math.sin(Y)*F*1.08,B,Math.cos(Y)*F*.78]},(W,U)=>Ki(nn.dress,nn.dressHi,U>.8?.5:.15*oi(W*4)),!0);l(f,s,g),l(Qn(14,1,(W,U)=>{let R=W*Math.PI*2,C=.172+.006*U;return[Math.sin(R)*C*1.08,1.04+U*.11,Math.cos(R)*C*.82]},()=>nn.belt,!0),s,g);let p=(W,U)=>{let R=new Xr;R.absarc(0,0,W,Math.PI*.18,Math.PI*1.82,!1),R.absarc(W*.38,0,W*.78,Math.PI*1.7,Math.PI*.3,!0);let C=new Os(R,{depth:U,bevelEnabled:!0,bevelThickness:U*.4,bevelSize:W*.08,bevelSegments:1,curveSegments:6});return C.center(),C};l(new zn(.05,.012,4,10),c,g,[0,1.095,.152]).scale.set(1,.85,.6),l(p(.042,.012),c,g,[0,1.095,.162]).rotation.z=.5;let M=9,b=Qn(28,14,(W,U)=>{let R=.36+.48*U**1.2,C=R+W*(Math.PI*2-2*R),k=.07+.16*oi(W*M+.5)+(W<.06||W>.94?.08:0),X=.14,B,F,Y;if(U<X){let Q=U/X;B=1.61-.14*Q**.8,F=.1+.155*Q**.7,Y=.72}else{let Q=(U-X)/(1-X);B=1.47-Q*(1.47-k),F=.255+.25*Q**1.3,Y=.72+.22*Q}return F*=1+.07*Math.sin(C*8)*Math.max(0,U-X),[Math.sin(C)*F*(1.12-.1*U),B,Math.cos(C)*F*Y-.03*U]},(W,U)=>{let R=U>.89||W<.03||W>.97,C=Ki(h,u,.35*oi(W*8+.25)+(W>.3&&W<.7?.15:0));return R?d:C});l(b,s,g),l(Qn(10,2,(W,U)=>{let R=Math.PI*.55+W*Math.PI*.9,C=.105+.045*U;return[Math.sin(R)*C*1.1,1.58+U*.13,Math.cos(R)*C*.85]},(W,U)=>Ki(h,d,U>.6?1:0)),s,g),l(new Ee(.045,.055,.12,7),o,g,[0,1.63,0]);let L=new Yt;L.position.set(0,1.76,0),g.add(L);let P=r(16777215,{rough:.7});P.map=ex(),P.flatShading=!1,l(tx(),P,L),l(Qn(20,4,(W,U)=>{let R=-Math.PI+W*Math.PI*2,C=Math.abs(R),k=C<.08?.72:C<.95?.6-.42*((C-.08)/.87)**.8:.18-.5*((C-.95)/(Math.PI-.95)),X=Math.PI/2-U*(Math.PI/2-k),B=1.085+.015*Math.sin(R*9);return[Math.sin(R)*Math.cos(X)*Ji.w*B,Math.sin(X)*Ji.h*B+.004,Math.cos(R)*Math.cos(X)*Ji.d*B]},(W,U)=>Ki(nn.hair,nn.hairDark,.15+.4*oi(W*14)*U),!0),s,L);let v=(W,U)=>Ki(nn.hair,nn.hairDark,.25+.5*oi(W*9)*(.4+.6*U));l(Qn(18,10,(W,U)=>{let R=Math.PI*.42+W*Math.PI*1.16,C=.1-U*(.95+.14*oi(W*6+.3)),k=U<.25?.13+U*.28:.2+.05*Math.sin(U*3.1),X=.022*Math.sin(U*15+R*3)*U;return[Math.sin(R)*(k+X)*1.05,C,Math.cos(R)*(k+X)*.85-.02-.05*U]},v),s,L);for(let W of[-1,1])for(let U of[0,1]){let R=W*(.098+U*.03),C=.035-U*.05,k=Array.from({length:8},(X,B)=>{let F=B/7;return[R+W*(.06*F+.025*Math.sin(F*9+U)),.04-F*(.55+.08*U),C+.06*F-.03*Math.sin(F*7)]});l(uu(k,X=>.035*(1-.6*X)+.008,5,(X,B)=>v(B,X),[1,1,.55]),s,L)}let T=new Yt;T.position.set(0,.075,-.005),T.rotation.set(-.12,0,.07),L.add(T),l(Qn(20,3,(W,U)=>{let R=W*Math.PI*2,C=.14+U*.24;return[Math.sin(R)*C,.02-.075*U*U+.012*Math.sin(R*3)*U,Math.cos(R)*C]},(W,U)=>Ki(nn.hat,u,U>.9?.25:.2*oi(W*5)),!0),s,T),l(uu([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],W=>.165*(1-W)**1.35+.004,8,(W,U)=>Ki(nn.hat,u,.25*oi(U*4)+.15*W)),s,T),l(Qn(16,1,(W,U)=>{let R=W*Math.PI*2,C=.168-.006*U;return[Math.sin(R)*C,.025+U*.06,Math.cos(R)*C]},()=>nn.hatBand,!0),s,T);let x=l(p(.04,.012),c,T,[0,.055,.172]);x.rotation.z=.5;let S=(W,U,R=.15)=>Qn(10,6,(C,k)=>{let X=C*Math.PI*2,B=.065+R*Math.max(0,(k-.3)/.7)**1.4,F=k<.99?0:.07*oi(C*4),Y=-(k*W)-F,Q=U*k*k;return[Math.cos(X)*B,Y,Math.sin(X)*B*.9+Q]},(C,k)=>k>.85?d:Ki(h,u,.3*oi(C*3)),!0),Z=new Yt;Z.position.set(-.23,1.47,0),Z.rotation.set(.05,0,.12),g.add(Z),l(S(.6,.06),s,Z),Z.add(si(nn.skin,s,!1)).position.set(0,-.58,.05);let tt=new Yt;tt.position.set(.23,1.47,.02),tt.rotation.z=ri,g.add(tt);let q=l(S(.4,0,.07),s,tt);q.rotation.x=-.5;let at=l(new Ee(.03,.034,.12,6),o,tt,[0,-.38,.19]);at.rotation.x=-.5;let{staffPivot:ot,staff:pt,crystal:D,crystalMat:et,glow:z}=br(tt,[0,-.43,.24],n,t,e,si(nn.skin,s,!0)),J=Er(L,[-1,1].map(W=>[W*.38*Ji.w,.06*Ji.h,.9*Ji.d]),vr.witch,t);return{root:m,body:g,head:L,arm:tt,staffPivot:ot,crystal:D,crystalMat:et,glow:z,staff:pt,height:2,materials:n,eyes:J}}var nx={me:4020950,opp:12728908,ally:3121012};function Rf(i,t,e,n){if(i==="witch")return Tf(t,e,n);if(i==="wizard")return vf(t,e,n);if(i==="knight")return Ef(t,e,n);if(i==="goblin")return wf(t,e,n);i=i;let r=[],s=(Z,tt={})=>{let q=new Te({color:Z,metalness:tt.metal??.05,roughness:tt.rough??.8,flatShading:!0,emissive:tt.emissive??0,emissiveIntensity:tt.ei??1,transparent:!0});return r.push({mat:q,color:q.color.clone(),emissive:q.emissive.clone()}),q},o=(Z,tt,q=0,at=0,ot=0)=>{let pt=new St(Z,tt);return pt.position.set(q,at,ot),pt},c=i==="goblin"||i==="kid"?.78:1,l=s(i==="goblin"?7323466:15778970),h=s(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:nx[t],d=s(u),m=s(16766073,{metal:.2,rough:.4}),g=s(12897496,{metal:.3,rough:.45}),_=new Yt,f=new Yt;if(_.add(f),i==="wizard")f.add(o(new Ee(.27,.46,1,9),d,0,.5,0)),f.add(o(new Ee(.47,.47,.05,9),m,0,.03,0));else{let Z=i==="knight"?g:h;f.add(o(new Ee(.09,.08,.6,6),Z,-.12,.3,0)),f.add(o(new Ee(.09,.08,.6,6),Z,.12,.3,0)),f.add(o(new en(.16,.08,.26),h,-.12,.04,.05)),f.add(o(new en(.16,.08,.26),h,.12,.04,.05)),f.add(o(new Ee(.3,.34,.32,8),d,0,.72,0))}let p=i==="knight"?g:d;if(f.add(o(new Ee(.24,.29,.55,8),p,0,1.12,0)),f.add(o(new zn(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let Z=o(new en(.34,.6,.04),d,0,1,.27);f.add(Z),f.add(o(new Ne(.13,6,4),g,-.3,1.36,0)),f.add(o(new Ne(.13,6,4),g,.3,1.36,0))}i==="human"&&f.add(o(new en(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let y=new Yt;y.position.set(0,1.58,0),f.add(y),y.add(o(new yn(.2,1),l));for(let Z of[-.07,.07])y.add(o(new Ne(.028,6,4),h,Z,.02,.18));if(i==="wizard"){let Z=s(15658740);y.add(o(new Nn(.17,.42,7),Z,0,-.2,.1).rotateX(Math.PI)),y.add(o(new en(.4,.34,.14),Z,0,-.06,-.13)),y.add(o(new Ee(.36,.36,.04,12),d,0,.15,0));let tt=o(new Nn(.24,.62,9),d,0,.47,0);tt.rotation.z=.12,y.add(tt),y.add(o(new zn(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let Z of[-1,1]){let tt=o(new Nn(.07,.34,5),l,Z*.24,.05,0);tt.rotation.z=-Z*1.25,y.add(tt)}y.add(o(new Nn(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")y.add(o(new yn(.235,1),g)),y.add(o(new en(.3,.05,.05),h,0,.02,.21)),y.add(o(new Nn(.06,.4,6),s(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")y.add(o(new en(.38,.2,.12),s(5913122),0,-.02,-.13)),y.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2),s(4029400),0,.03,0)),y.add(o(new en(.2,.025,.16),s(4029400),0,.05,.2));else if(i==="human"){let Z=s(5913122);y.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),Z,0,.02,-.01)),y.add(o(new en(.4,.22,.12),Z,0,-.04,-.13))}let M=i==="knight"?g:d,b=new Yt;b.position.set(-.3,1.34,0),b.rotation.z=.25,f.add(b),b.add(o(new Ee(.075,.1,.55,6),M,0,-.27,0)),b.add(o(new Ne(.07,6,4),l,0,-.58,0));let L=new Yt;L.position.set(.3,1.34,.02),L.rotation.z=ri,f.add(L),L.add(o(new Ee(.075,.1,.5,6),M,0,-.22,.05).rotateX(-.5));let P=o(new Ne(.07,6,4),l,0,-.42,.22);L.add(P);let v=new Yt;v.position.set(0,-.42,.22),v.rotation.z=.77,L.add(v);let T=$i(n,e);T.group.position.y=.24,T.group.scale.setScalar(.8),v.add(T.group);for(let Z of T.materials)r.push({mat:Z,color:Z.color.clone(),emissive:Z.emissive.clone()});let{gem:N,gemMat:x,glow:S}=T;return _.scale.setScalar(c),{root:_,body:f,head:y,arm:L,staffPivot:v,crystal:N,crystalMat:x,glow:S,staff:T,height:1.95*c,materials:r}}function fu(i){return["wizard","witch","goblin","knight","kid","human"].find(t=>t===i)??"wizard"}function ix(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new An(i);return n.colorSpace=on,n}function Af(i){let t;try{t=new Ns({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=Bo,t.setClearColor(0,0);let e=new Hs;e.add(new zs(14673663,2760768,1.4));let n=new Yi(16777215,2.2);n.position.set(2,3,4),e.add(n);let r=new Yi(10456319,2);r.position.set(-3,2,-3),e.add(r);let s=new mi(16777215,3,3,2);e.add(s);let o=new vn(30,1,.1,50),a=ix(),c=new Yt;c.rotation.z=.12,e.add(c);let l=null,h="";function u(y){return l&&h===y||(l&&(c.remove(l.group),l.group.traverse(M=>M.geometry?.dispose?.())),l=$i(y,a),h=y,c.add(l.group),s.color.copy(l.color),s.position.set(.3,xr+.2,.6)),l}function d(){let y=i.clientWidth||300,M=i.clientHeight||420;t.setSize(y,M,!1),o.aspect=y/M;let b=1.55/Math.tan(Vs.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,b),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,f=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(y){if(!f()){m=0;return}m=requestAnimationFrame(p);let M=Math.min(.05,(y-g)/1e3);g=y,_+=M,l&&(c.rotation.y+=M*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=M*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,M,.25),t.render(e,o))}return{show(y){u(y),d(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(y,M,b){let L=[],P=h,v=c.rotation.y,T=c.position.y;t.setPixelRatio(1),t.setSize(M,b,!1),o.aspect=M/b,o.position.set(.35,xr+.12,1.6),o.lookAt(0,xr-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let N of y)u(N).update(1.2,0,0),t.render(e,o),L.push(i.toDataURL("image/png"));return c.rotation.y=v,c.position.y=T,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),P&&u(P),d(),L},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function Tn(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,r)=>n+(r-n)*e(),int:(n,r)=>n+Math.floor(e()*(r-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var Vt=i=>i<0?0:i>1?1:i,Ae=(i,t,e)=>{let n=Vt((e-i)/(t-i));return n*n*(3-2*n)},Of=(i,t,e)=>i+(t-i)*e,Jt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],ge=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],wr=(i,t)=>1-Math.exp(-i*t),Xo=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},ue=i=>i*Math.PI/180;function Pn(i,t){let e=ue(i),n=ue(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function Bf(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return Jt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var vc=(()=>{let i=Tn(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function ke(i,t){let e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,d=vc[h+c],m=vc[h+l],g=vc[u+c],_=vc[u+l];return(d*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var Cf=Math.cos(.55),Pf=Math.sin(.55);function cn(i,t,e=5,n=2.03,r=.5){let s=0,o=1,a=0;for(let c=0;c<e;c++){s+=o*ke(i+17.3*c,t-9.1*c),a+=o;let l=(i*Cf-t*Pf)*n,h=(i*Pf+t*Cf)*n;i=l,t=h,o*=r}return s/a}var If=Math.cos(.7),Lf=Math.sin(.7);function kf(i,t,e=5,n=2.1,r=.52){let s=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*ke(i+31.7*l,t+5.3*l)-1);h=h*h*c,s+=h*o,a+=o,c=Vt(h*2);let u=(i*If-t*Lf)*n,d=(i*Lf+t*If)*n;i=u,t=d,o*=r}return s/a}var Df=new Map;function rx(i,t,e){let n=`${t}:${e}`,r=Df.get(n);if(!r){let l=Tn(e*977+t);r=new Float32Array(t);for(let h=0;h<t;h++)r[h]=l.random();Df.set(n,r)}let s=i*t,o=Math.floor(s),a=s-o,c=a*a*(3-2*a);return r[(o%t+t)%t]*(1-c)+r[((o+1)%t+t)%t]*c}function Uf(i,t=5,e=3,n=1,r=.5){let s=0,o=1,a=0;for(let c=0;c<t;c++)s+=o*rx(i,e*2**c,n+c),a+=o,o*=r;return s/a}function ji(i,t){let e=i.stops;return(n,r,s)=>{let o=Math.asin(Math.max(-1,Math.min(1,s)))*180/Math.PI,a=Bf(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+r*l[1]+s*l[2])));for(let[u,d,m]of i.glow){let g=Math.exp(-h/u)*d*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-r*l[1]+s*l[2]))),d=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=d*i.anti_col[0],a[1]+=d*i.anti_col[1],a[2]+=d*i.anti_col[2]}}return a}}var Ys=(i,t)=>Math.round(255*Math.pow(Vt(wr(i,t)),1/2.2));function mu(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function gu(i,t=!1){let e=new An(i);return e.colorSpace=on,t?e.wrapS=e.wrapT=ki:e.wrapS=Vr,e.anisotropy=2,e}function sx(i,t,e){let n=t/2,{c:r,g:s,img:o}=mu(t,n),a=ji(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??ge(i.far2,.8),d=[],m=h.map(()=>[]);for(let b=0;b<t;b++){let L=(b+.5)/t,P=L*2*Math.PI;d.push(a(Math.cos(P)*Math.cos(.012),Math.sin(P)*Math.cos(.012),Math.sin(.012)));let v=1;for(let T of e.notchAz){let N=Math.abs(Xo(P,ue(T)));v*=1-.85*Math.exp(-((N/ue(20))**2))}h.forEach(([T,N,x],S)=>{if(e.ridgeKind==="trees"){m[S].push(T+N*Uf(L,6,18,x,.62)**1.5);return}let Z=1-Math.abs(2*Uf(L,7,4,x,.56)-1);m[S].push((T+N*Z**1.3)*(.35+.65*v))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),f=null,p=[0,0,0],y=[0,0,0];if((i.milky??0)>0){let b=new A(.25,-.55,.8).normalize(),L=b.clone().cross(new A(0,0,1)).normalize(),P=b.clone().cross(L);f=[b.x,b.y,b.z],p=[L.x,L.y,L.z],y=[P.x,P.y,P.z]}for(let b=0;b<n;b++){let L=((b+.5)/n-.5)*Math.PI,P=Math.cos(L),v=Math.sin(L),T=n-1-b;for(let N=0;N<t;N++){let x=(N+.5)/t*2*Math.PI,S=P*Math.cos(x),Z=P*Math.sin(x),tt=v,q=a(S,Z,tt);if(f&&L>0){let D=Math.asin(Math.max(-1,Math.min(1,S*f[0]+Z*f[1]+tt*f[2]))),et=Math.atan2(S*y[0]+Z*y[1]+tt*y[2],S*p[0]+Z*p[1]+tt*p[2]),z=3*Math.cos(et),J=3*Math.sin(et),W=cn(z+9*D,J+4*D,4),U=Ae(.5,.75,cn(z*1.7+17+14*D,J*1.7-5+6*D,3)),R=Math.exp(-((D/(i.milky_w??.2))**2))*(.25+1.3*W)*(1-.65*U)*i.milky,C=i.milky_col??[.55,.58,.85];q=[q[0]+R*C[0],q[1]+R*C[1],q[2]+R*C[2]]}let at=0;h.forEach(([,,,D,et],z)=>{let J=Vt((m[z][N]-L)/l+.5);if(J<=0)return;let W=d[N],U=Jt(et,W,D),R=Jt(U,W,Math.exp(-Math.max(L,0)/.025)*.55);q=Jt(q,R,J),at=Math.max(at,J)});let ot=Vt(-L/l+.5);ot>0&&(q=Jt(q,u,ot));let pt=(T*t+N)*4;o.data[pt]=Ys(q[0],c),o.data[pt+1]=Ys(q[1],c),o.data[pt+2]=Ys(q[2],c),o.data[pt+3]=255,g[T*t+N]=at,_[T*t+N]=(o.data[pt]+o.data[pt+1]+o.data[pt+2])/765}}let M=(i.stars??0)>0?ox(t,n,i.star_n,i.stars,g,_):null;return s.putImageData(o,0,0),{tex:gu(r),stars:M}}function ox(i,t,e,n,r,s){let o=Tn(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let d=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(d),_=Math.floor(m/(2*Math.PI)*i)%i,f=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-f,y=(1-r[p*i+_])*Vt(1-s[p*i+_]*3),M=o.random()**6,b=a[o.int(0,3)];if(y<=.01)continue;let L=Math.min(1.6,(.1+.95*M)*n*y*2.2),P=140;c.push(P*Math.cos(g)*Math.cos(m),P*Math.cos(g)*Math.sin(m),P*Math.sin(g)),l.push(b[0]*L,b[1]*L,b[2]*L),h.push(1+M*2.5)}return{pos:c,col:l,size:h}}function ax(i,t,e){let n=t/2,{c:r,g:s,img:o}=mu(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let d=0;d<n;d++){let m=((d+.5)/n-.5)*Math.PI,g=n-1-d;if(m<.02)continue;let _=Math.cos(m),f=Math.sin(m),p=1/(f+.16),y=c<50?Ae(.02,.1,m)*(1-Ae(c*.6,c,m)):Ae(.02,.16,m);if(!(y<=0))for(let M=0;M<t;M++){let b=(M+.5)/t*2*Math.PI,L=_*Math.cos(b),P=_*Math.sin(b),v=L*p*i.cloud_scale,T=P*p*i.cloud_scale,N=cn(v*.6+9,T*.6+2,3)-.5,x=v+N*1.4,S=T+N*1.1,Z=cn(x,S,5),tt=Ae(i.cov0,i.cov1,Z);if(tt<=.002)continue;let q=cn(x+h,S+u,5),at=Vt(.55-(q-Z)*3.4)*(1-.4*tt),ot=Math.exp(-Math.acos(Math.max(-1,Math.min(1,L*e[0]+P*e[1]+f*e[2])))/1.1),pt=Jt(i.cloud_lit_far,i.cloud_lit_near,ot),D=ge(i.cloud_shadow,.6+.4*ot),et=Jt(D,pt,at),z=tt*(1-tt)*4*ot*.6,J=(g*t+M)*4;o.data[J]=Ys(et[0]+z*i.cloud_rim[0],a),o.data[J+1]=Ys(et[1]+z*i.cloud_rim[1],a),o.data[J+2]=Ys(et[2]+z*i.cloud_rim[2],a),o.data[J+3]=Math.round(255*tt*y*i.cloud_opacity)}}return s.putImageData(o,0,0),gu(r)}function cx(i,t,e={}){let n=e.span??1.4,{c:r,g:s,img:o}=mu(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(d,m),_=Vt((1-g)/(n*2/t)+.5),f=Math.sqrt(Vt(1-g*g)),p=0;for(let[P,v]of e.rings??[])p=Math.max(p,v*(1-Ae(P-.1,P,g)));let y;if(i==="sun")y=Jt(e.sunInner??[1,.62,.25],a,Math.pow(f,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let P=Vt(d*l[0]+m*l[1]+f*l[2]),v=Ae(.5,.6,cn(d*1.9+4,m*1.9-2,5))*.42,T=Ae(.62,.8,ke(d*14,m*14))*.12,N=(.04+P**.8)*(.6+.4*f)*(.9-v-T)*(e.moonGain??1.55);y=ge(a,N),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-Ae(n*.86,n,g);let M=_+(1-_)*p,b=M>1e-4?[0,1,2].map(P=>(_*y[P]+(1-_)*p*c[P])/M):[0,0,0],L=(h*t+u)*4;o.data[L]=Math.round(255*Math.pow(Vt(b[0]),1/2.2)),o.data[L+1]=Math.round(255*Math.pow(Vt(b[1]),1/2.2)),o.data[L+2]=Math.round(255*Math.pow(Vt(b[2]),1/2.2)),o.data[L+3]=Math.round(255*Vt(M))}return s.putImageData(o,0,0),gu(r,!0)}var Qt=class{constructor(t=!1,e=0){Ze(this,"alpha",t);Ze(this,"pos",[]);Ze(this,"col",[]);Ze(this,"idx",[]);Ze(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((r,s)=>{let o=n?.[s];r.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new be;return t.setAttribute("position",new oe(this.pos,3)),t.setAttribute("color",new oe(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new oe(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function _e(i={}){let t=new Bs({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Le:Un}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var Ti=(i={})=>{let t=new an({vertexColors:!0,side:Le,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?fn:bi,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},Vn=(i,t=1)=>new an({color:new zt(i[0]*t,i[1]*t,i[2]*t),side:Le,toneMapped:!1});function Nf(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),r.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;s.push(l,h,l+1,h,h+1,l+1)}let o=new be;return o.setAttribute("position",new oe(n,3)),o.setAttribute("uv",new oe(r,2)),o.setIndex(s),o}var du=(i,t=!1)=>new an({map:i,side:Le,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function Hf(i,t){let e=new Qt,n=(r,s,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[d,m,g,_]of[[r,0,s,s],[0,r,-s,s],[-r,0,-s,-s],[0,-r,s,-s]])h.push(e.v([d*c-m*l,d*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let d=0;d<8;d++)e.f(u,h[d],h[(d+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function Ri(i){let t=new Yt,e=[],n=sx(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),r=n.tex,s=new St(Nf(150,48,24),du(r));if(s.renderOrder=-10,s.frustumCulled=!1,t.add(s),e.push(r,s.geometry,s.material),n.stars&&n.stars.pos.length){let M=new be;M.setAttribute("position",new oe(n.stars.pos,3)),M.setAttribute("color",new oe(n.stars.col,3)),M.setAttribute("size",new oe(n.stars.size,1));let b=new Yn({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:fn}),L=new _r(M,b);L.renderOrder=-9.5,L.frustumCulled=!1,t.add(L),e.push(M,b)}let o=null;if(i.clouds!==!1){let M=ax(i.th,Math.min(1024,i.W),i.bodies[0]);o=new St(Nf(138,48,24),du(M,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(M,o.geometry,o.material)}let a=i.body.span??1.4,c=cx(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=du(c,!0);e.push(c,l);for(let M of i.bodies){let L=146*Math.tan(i.body.r)*a,P=new A(...M),v=P.clone().cross(new A(0,0,1));v.lengthSq()<1e-8&&(v=new A(1,0,0)),v.normalize();let T=v.clone().cross(P).normalize(),N=P.clone().multiplyScalar(146),x=new be,S=[N.clone().addScaledVector(v,-L).addScaledVector(T,-L),N.clone().addScaledVector(v,L).addScaledVector(T,-L),N.clone().addScaledVector(v,L).addScaledVector(T,L),N.clone().addScaledVector(v,-L).addScaledVector(T,L)];x.setAttribute("position",new oe(S.flatMap(tt=>[tt.x,tt.y,tt.z]),3)),x.setAttribute("uv",new oe([0,0,1,0,1,1,0,1],2)),x.setIndex([0,1,2,0,2,3]);let Z=new St(x,l);Z.renderOrder=-8,Z.frustumCulled=!1,t.add(Z),e.push(x)}let h=Tn(i.seed??21),u=[],d=Math.round(i.sparkles*(i.bigShare??.27)),m=new an({color:new zt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Le}),g=new an({color:new zt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Le}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},f=Hf(..._.big),p=Hf(..._.small);e.push(m,g,f,p);for(let M=0;M<i.sparkles;M++){let b=M<d,L=h.uniform(0,360),P=h.uniform(..._.el??[35,88]),v=Pn(L,P);i.bodies.concat([Pn(i.th.body_az+180,i.th.body_el)]).some(S=>v[0]*S[0]+v[1]*S[1]+v[2]*S[2]>Math.cos(ue(24)))&&(L+=45);let T=Pn(L,P).map(S=>S*135),N=new St(b?f:p,b?m:g);N.position.set(...T),N.lookAt(0,0,0),N.renderOrder=-7,t.add(N);let x=b?24:12;u.push({m:N,big:b,pulses:Array.from({length:x},(S,Z)=>Math.round((Z+.5)*3600/x+h.int(-15,15)))})}let y=null;return{group:t,envMap(){if(y)return y;let M=r.image,b=document.createElement("canvas");b.width=M.width,b.height=M.height;let L=b.getContext("2d");return L.translate(b.width*.5,0),L.scale(-1,1),L.drawImage(M,0,0),L.drawImage(M,-M.width,0),y=new An(b),y.colorSpace=on,y.mapping=So,e.push(y),y},update(M){o&&(o.rotation.z=M%3600/3600*Math.PI*2);let b=M%3600;for(let L of u){let P=1;for(let v of L.pulses){if(b<v-18||b>v+14)continue;let T=[[v-18,1],[v-9,L.big?1.35:1.2],[v,L.big?.2:.35],[v+14,1]];for(let N=0;N<3;N++)if(b>=T[N][0]&&b<=T[N+1][0]){let x=(b-T[N][0])/(T[N+1][0]-T[N][0]);P=Of(T[N][1],T[N+1][1],x*x*(3-2*x))}}L.m.scale.setScalar(P)}},dispose(){for(let M of e)M.dispose()}}}function In(i,t,e=0,n=1,r=0){let s=Math.floor(i/t),o=(i-s*t)/t,a=o*o*(3-2*o),c=(s+r)%2?n:e,l=(s+r)%2?e:n;return Of(c,l,a)}var zf=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function Zs(i,t,e,n){let r=new Qt,s=[];for(let o of i){if(o===0){let c=r.v([0,0,e(0,0)],n(0,0));s.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(r.v([h,u,e(h,u)],n(h,u)))}s.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?r.f(s[0][0],s[1][a],s[1][c]):r.f(s[o][a],s[o][c],s[o-1][c],s[o-1][a])}return r.geo()}function lx(i,t,e,n,r=0){let s=.6+.4*Vt(t)**.7,o=ge(i,s*(.88+.24*e));return Jt(o,n,Vt(Vt(1-t*3)*.55+r*.75))}function Ai(i,t,e,n,r,s,o=!0){let a=ke(e*2.5+r,n*2.5+r),c=o?Vt((ke(e*.7+r,n*.7-r)-.5)*2.5):0;return lx(i,t,a,s,c)}function pu(i,t,e,n,r,s,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],s([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],s([o[0],o[1],e+n],1));for(let g=0;g<r;g++){let _=2*Math.PI*g/r,f=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(f,s(f,0))),l.push(i.v(p,s(p,1)))}let d=[],m=[];for(let g=0;g<r;g++)d.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<r;g++){let _=(g+1)%r;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(d[g],d[_],m[_],m[g])}}function hx(i,t,e,n,r,s,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,r-=h/2,t+=l/2,e-=l/2;let u=(g,_,f)=>[g*Math.cos(_),g*Math.sin(_),f],d=g=>i.v(g,a(g,(g[2]-s)/o)),m=(g,_,f,p)=>i.f(d(g),d(_),d(f),d(p));for(let g=0;g<c;g++){let _=n+(r-n)*g/c,f=n+(r-n)*(g+1)/c;m(u(t,_,s+o),u(e,_,s+o),u(e,f,s+o),u(t,f,s+o)),m(u(e,_,s+o),u(e,_,s),u(e,f,s),u(e,f,s+o)),m(u(t,f,s+o),u(t,f,s),u(t,_,s),u(t,_,s+o))}m(u(t,n,s+o),u(t,n,s),u(e,n,s),u(e,n,s+o)),m(u(e,r,s+o),u(e,r,s),u(t,r,s),u(t,r,s+o))}function Wo(i,t,e,n,r=[1,1,1]){let s=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],d=h[1]-l[1],m=Math.hypot(u,d)||1,g=-d/m,_=u/m;s.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],r)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],r))});for(let a=0;a<t.length-1;a++)i.f(s[a],o[a],o[a+1],s[a+1])}var wc=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function ux(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(ue(n)),.4+.4*Math.sin(ue(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(ue(n)),-.4+.4*Math.sin(ue(n))]);return[[...t,...e]]}return i===1?[wc(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],wc(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function Ff(i,t,e,n,r,s,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let d of ux(t))Wo(i,d.map(([m,g])=>[h+r*(m*c-g*l),u+r*(m*l+g*c)]),o,s)}function Sr(i){let{th:t,r:e}=i,n=t.stone,r=new Qt,s=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,f)=>s(Ai(m,f,_[0],_[1],g,t.moss,i.patchy??!0),_)};pu(r,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),pu(r,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],f)=>{let p=f*.23;for(let y=0;y<_;y++)hx(r,m,g,p+2*Math.PI*y/_,p+2*Math.PI*(y+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new Qt;pu(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new Qt;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),f=Math.sin(g);Wo(l,[[.3*_,.3*f],[2.2*_,2.2*f]],.07,c);for(let p of[-1,1]){let y=g+p*ue(35);Wo(l,[[1.3*_,1.3*f],[1.3*_+.7*Math.cos(y),1.3*f+.7*Math.sin(y)]],.05,c)}}Wo(l,wc(2.3),.06,c),Wo(l,wc(6),.05,c);let h=new Qt;for(let m=0;m<8;m++){let g=ue(45*m);m===6?Ff(h,0,g,7.4,.95,c+.01,.13):Ff(h,m%3,g,8.2,.55,c+.01,.09)}let u=new Yt;u.add(new St(r.geo(),_e())),u.add(new St(a.geo(),Vn(i.glowCol,i.glow*1.1)));let d=new St(l.geo(),Vn(i.lineCol,i.glow*1.3));return d.name="centre-pattern",u.add(d),u.add(new St(h.geo(),Vn(i.runeCol,i.glow*1.6))),u}function $s(i){let{r:t}=i,e=i.wind??(()=>{let r=new A(.8,.6,0).normalize();return[r.x,r.y,0]})(),n=new Qt(!1,1);for(let r=0;r<i.tufts;r++){let s=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,s))continue;let a=s*Math.cos(o),c=s*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),d=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),f=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],y=[-Math.sin(_),Math.cos(_)],M=i.gh(u,d),b=i.base(s),L=i.tip(s,_),P=Jt(b,L,.55),v=[u,d,M],T=[u+p[0]*f*.3,d+p[1]*f*.3,M+m*.55],N=[u+p[0]*f,d+p[1]*f,M+m],x=(ot,pt)=>{let D=ot[2]-M,et=.32*D*D;return n.v(ot,pt,[[e[0]*et,e[1]*et,0]])},S=x([v[0]-y[0]*g,v[1]-y[1]*g,v[2]],b),Z=x([v[0]+y[0]*g,v[1]+y[1]*g,v[2]],b),tt=x([T[0]-y[0]*g*.65,T[1]-y[1]*g*.65,T[2]],P),q=x([T[0]+y[0]*g*.65,T[1]+y[1]*g*.65,T[2]],P),at=x(N,L);n.f(S,Z,q,tt),n.f(tt,q,at)}}return n.geo()}function Vf(i,t,e,n,r,s,o,a){let c=new A(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new A(0,0,1)).normalize(),u=l.clone().cross(h),d=12,m=o*r,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([f,p])=>{let y=(.45+3*a*f**1.6)*n;return Array.from({length:d},(M,b)=>{let L=2*Math.PI*b/d,P=c.clone().multiplyScalar(f).addScaledVector(h,Math.cos(L)*y).addScaledVector(u,Math.sin(L)*y);return i.v([t[0]+P.x,t[1]+P.y,t[2]+P.z],[s[0],s[1],s[2],p*m])})});for(let f=0;f<g.length-1;f++)for(let p=0;p<d;p++){let y=(p+1)%d;i.f(_[f][p],_[f][y],_[f+1][y],_[f+1][p])}}function Ks(i,t,e,n,r,s,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[r[0],r[1],r[2],n(0,0)*s]),l=[...o,t].map(h=>Array.from({length:40},(u,d)=>{let m=2*Math.PI*d/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[r[0],r[1],r[2],n(g,_)*s])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let d=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][d],l[h][d])}}var Qr=()=>new an({vertexColors:!0,transparent:!0,depthWrite:!1,blending:fn,side:Le,fog:!1}),Ec=null;function Gf(){if(Ec)return Ec;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ec=new An(i),Ec}function Ci(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let r=new Float32Array(i.n*3),s=new be;s.setAttribute("position",new De(r,3));let o=new gr({map:Gf(),color:new zt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:fn,sizeAttenuation:!0,fog:!1}),a=new _r(s,o);a.frustumCulled=!1;let c=l=>{let h=zf(l);for(let u=0;u<i.n;u++){let d=i.twinkle?Math.sin(l*.05+n[u])*.15:0;r[u*3]=t[u][0]+e[u][0]*h+d,r[u*3+1]=t[u][1]+e[u][1]*h,r[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}s.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function Sc(i){let t=i.list.length,e=(l,h,u)=>{let d=new Float32Array(t*3),m=new be;m.setAttribute("position",new De(d,3));let g=new gr({map:Gf(),color:h,size:l,transparent:!0,depthWrite:!1,blending:fn,opacity:u,fog:!1}),_=new _r(m,g);return _.frustumCulled=!1,{p:_,pos:d,g:m}},n=i.gain??1,r=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),s=e(2.2*r,new zt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*r,new zt(1,1,1).lerp(new zt(i.col[0],i.col[1],i.col[2]),.3),1),a=new Yt;a.add(s.p,o.p);let c=l=>{let h=zf(l);i.list.forEach((u,d)=>{for(let m of[s.pos,o.pos])m[d*3]=u.p[0],m[d*3+1]=u.p[1],m[d*3+2]=u.p[2]+u.amp*h}),s.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function Wf(i,t){let{r:e,idx:n,th:r}=t,s=n/2,o=Jt(r.back_lit[0],r.back_lit[1],s),a=Jt(r.back_dark[0],r.back_dark[1],s),c=r.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],d=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(r.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(r.back_w??1),_=e.uniform(0,6.28),f=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(b=>wr(b,r.exposure??1)),y=Math.exp(-((Xo(h,t.sunAz)/.5)**2))*(r.back_rim_k??0),M=[];for(let b=0;b<7;b++){let L=b/6,P=-2+(m+2)*L,v=g*(1-.55*L)*(1+.5*Math.exp(-Math.max(P,0)/3)),T=Math.sin(L*4+_)*1.2+f*P,N=[u[0]+d[0]*T,u[1]+d[1]*T,P],x=1-.75*L*L,S=ge(o,x),Z=ge(a,x);c>0&&(S=Jt(S,p,c*.6*(1-.5*L)),Z=Jt(Z,p,c*.6*(1-.5*L))),y>.01&&(S=Jt(S,r.back_rim,.6*y*(1-L)),Z=Jt(Z,r.back_rim,.6*y*(1-L))),M.push([i.v([N[0]-d[0]*v/2,N[1]-d[1]*v/2,P],S),i.v([N[0]+d[0]*v/2,N[1]+d[1]*v/2,P],Z)])}for(let b=0;b<6;b++)i.f(M[b][0],M[b][1],M[b+1][1],M[b+1][0])}}function Tc(){let i=new Qt,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,r=a=>Bf(e,a),s=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],r(a)))),o=i.v([.07*1.12*1.12,0,1.12],r(1.12));for(let a=0;a<s.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(s[a][c],s[a][l],s[a+1][l],s[a+1][c])}for(let a=0;a<n;a++)i.f(s[s.length-1][a],s[s.length-1][(a+1)%n],o);return i.geo()}function Pi(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let r of n)r.dispose()})}function Ii(i){let t=(n,r=1,s=.5)=>{let o=(n[0]+n[1]+n[2])/3;return ge(Jt([o,o,o],n,s),r)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let r=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(r)&&(e[n]=Array.isArray(r[0])?r.map(s=>t(s)):t(r))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var _u={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},Js=78,yu=[90,270];function Xf(i,t){let e=i==="night"?_u.NIGHT:i==="day"?{...Ii(_u.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:_u.SUNSET,n=e.emit,r=n*.75,s=Tn(13),o=Tn(41),a=new Yt,c=[Pn(e.body_az,e.body_el)],l=yu.map(U=>[Js*Math.cos(ue(U)),Js*Math.sin(ue(U))]),h=ue(e.body_az),u=[Math.cos(h),Math.sin(h)],d=(()=>{let U=new A(.8,.6,0).normalize();return[U.x,U.y,0]})(),m=(U,R,C)=>{let k=(U%360+360)%360;return k>255&&k<285&&R>C},g=e.stone,_=(U,R)=>{let C=Math.hypot(U,R),k=Vt((C-12)/10)*.35*(Math.sin(U*.09)+Math.cos(R*.11)+.5*Math.sin((U+R)*.19));k+=Vt((C-60)/60)*3*Math.sin(U*.05+1)*Math.cos(R*.04);for(let[X,B]of l)k*=Ae(22,40,Math.hypot(U-X,R-B));return k},f=(U,R)=>{let C=0;for(let k of yu){let X=ue(k),B=Math.cos(X),F=Math.sin(X),Y=U*B+R*F,Q=Math.abs(-U*F+R*B);Y>9&&(C=Math.max(C,Math.exp(-((Q/4)**2))*Ae(9,16,Y)*(1-Ae(Js-10,Js-2,Y))))}return C},p=(U,R)=>{let C=Vt((Math.hypot(U,R)-10)/70)**.8,k=cn(U*.06+3,R*.06-7,3);return Jt(ge(Jt(e.g_near,e.g_far,C),.75+.5*k),e.g_road,f(U,R)*.8)};a.add(new St(Zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),_e({flat:!1}))),a.add(Sr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let y=new Qt,M=(U,R,C,k,X,B)=>{let F=o.uniform(0,50),Y=(G,j)=>Ai(X,j,G[0],G[1],F,e.moss),Q=(G,j)=>Array.from({length:k},(it,lt)=>{let I=2*Math.PI*lt/k,E=[B[0]+U*Math.cos(I),B[1]+U*Math.sin(I),G];return y.v(E,Y(E,j))}),V=Q(R,0),w=Q(R+C,1),st=Q(R,0),K=Q(R+C,1);for(let G=0;G<k;G++){let j=(G+1)%k;y.f(st[G],st[j],K[j],K[G])}y.f(...w),y.f(...[...V].reverse())},b=[],L=Tc(),P=Ti({gain:1.05}),v=[];for(let U of[45,135,225,315]){let R=ue(U),C=9.35*Math.cos(R),k=9.35*Math.sin(R);M(.4,.3,1.1,12,g[3],[C,k]),M(.55,1.4,.3,12,g[0],[C,k]);let X=new St(L,P);X.position.set(C,k,1.75),a.add(X),b.push({m:X,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),v.push({pos:[C,k,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let T=new Qt,N=new Qt(!1,2),x=(U,R,C,k,X)=>{let B=Math.cos(k),F=Math.sin(k),Y=(Q,V,w)=>{let st=Q*C[0],K=V*C[1],G=[R[0]+st*B-K*F,R[1]+st*F+K*B,R[2]+w*C[2]];return U.v(G,X(G))};for(let Q of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])U.f(...Q.map(([V,w,st])=>Y(V,w,st)))},S=t?6:10;for(let U=0;U<S;U++){let R=2*Math.PI*(U+o.uniform(-.2,.2))/S,C=o.uniform(14,20),k=C*Math.cos(R),X=C*Math.sin(R),B=_(k,X),F=o.uniform(6,9),Y=()=>e.cs_stone;x(T,[k,X,B+(F-.2)/2],[.2,.2,F+.2],Math.PI/4,Y);let Q=o.uniform(0,3.14),V=[-Math.sin(Q),Math.cos(Q)],w=[Math.cos(Q),Math.sin(Q)];x(T,[k,X,B+F-.2],[.08,1.3,.08],Q,Y);let st=[k,X,B+F-.3],K=(it,lt)=>{let I=.35*Math.sin(1.4*it+lt)*it/5;return[w[0]*I+d[0]*(.15*it)/5,w[1]*I+d[1]*(.15*it)/5,0]},G=Array.from({length:6},(it,lt)=>Array.from({length:3},(I,E)=>N.v([st[0]+V[0]*(E-1)*.6,st[1]+V[1]*(E-1)*.6,st[2]-lt*.6],ge(e.banner,1-.35*lt/5),[K(lt,0),K(lt,Math.PI)]))),j=N.v([st[0],st[1],st[2]-3.6],ge(e.banner,.6),[K(6,0),K(6,Math.PI)]);for(let it=0;it<5;it++)for(let lt=0;lt<2;lt++)N.f(G[it][lt],G[it][lt+1],G[it+1][lt+1],G[it+1][lt]);N.f(G[5][0],G[5][1],j),N.f(G[5][1],G[5][2],j)}let Z=_e({double:!0,morph:!0}),tt=new St(N.geo(),Z);tt.morphTargetInfluences=[0,0],a.add(new St(T.geo(),_e()),tt,new St(y.geo(),_e()));let q=[];yu.forEach((U,R)=>{let C=new Qt,k=new Qt,X=new Qt,B=new Qt,F=new Qt,Y=new Qt(!1,2),Q=ue(U),V=[Js*Math.cos(Q),Js*Math.sin(Q),0],w=Q-Math.PI/2,st=Math.cos(w),K=Math.sin(w),G=O=>[V[0]+O[0]*st-O[1]*K,V[1]+O[0]*K+O[1]*st,O[2]],j=O=>{let nt=ke(O[0]*.8+R*10,O[2]*.8),ht=.6+.4*Vt(O[2]/6);return ge(e.cs_stone,ht*(.75+.5*nt)*(.8+.4*Vt(O[2]/30)))},it=(O,nt,ht,rt)=>{for(let Et of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])O.f(...Et.map(([bt,gt,Lt])=>{let _t=[nt[0]+bt*ht[0],nt[1]+gt*ht[1],nt[2]+Lt*ht[2]];return O.v(G(_t),rt(_t))}))},lt=(O,nt,ht,rt,Et)=>{let bt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([_t,At])=>[O+_t*rt,nt+At*rt,ht]),gt=[O,nt,ht+Et],Lt=_t=>ge(e.cs_roof,.8+.4*Vt((_t[2]-22)/22));for(let _t=0;_t<4;_t++){let At=bt[_t],Gt=bt[(_t+1)%4];k.f(k.v(G(At),Lt(At)),k.v(G(Gt),Lt(Gt)),k.v(G(gt),Lt(gt)))}};it(C,[0,0,6],[40,4,12],j);for(let O=-18;O<=18;O+=2.6)if(Math.abs(O)>4.6)for(let nt of[-1.6,1.6])it(C,[O,nt,12.7],[1.4,.8,1.4],j);for(let O of[-20,20]){it(C,[O,0,11],[8,8,22],j);for(let nt of[12,20])it(C,[O,0,nt],[8.6,8.6,.6],j);lt(O,0,22,4.7,9),it(C,[O,0,31],[.12,.12,9],j)}it(C,[0,0,17],[7,7,34],j);for(let O of[13,24])it(C,[0,0,O],[7.6,7.6,.6],j);lt(0,0,34,4.3,10),it(C,[0,0,46.5],[.12,.12,5],j);for(let O of[-2.9,2.9])it(C,[O,-3.75,3.8],[.9,.6,7.6],j);it(C,[0,-3.75,7.7],[6.8,.6,.9],j),it(B,[0,-3.6,3.6],[4.6,.3,7.2],O=>O[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let O=0;O<7;O++)it(B,[-2.1+.7*O,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let O of[2,4.5,6.8])it(B,[0,-3.85,O],[4.6,.2,.12],()=>[.02,.016,.014]);{let O=Array.from({length:9},(ht,rt)=>[2.3*Math.cos(Math.PI*rt/8),7.2+2.3*Math.sin(Math.PI*rt/8)]);B.f(...O.map(([ht,rt])=>B.v(G([ht,-3.75,rt]),[.006,.005,.008])));let nt=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];B.f(...[...nt].reverse().map(ht=>B.v(G(ht),[.04,.025,.02])))}for(let O of[9.5,15,20.5,26,31])it(X,[0,-3.62,O],[.8,.3,1.7],()=>[1,1,1]);for(let O of[-20,20])for(let nt of[5,10,15,20])it(X,[O,-4.12,nt],[.8,.3,1.7],()=>[1,1,1]);for(let O of[-4.3,4.3]){it(C,[O,-3.8,4.2],[.15,.15,1],j);let nt=new yn(.35,1),ht=nt.attributes.position;for(let Et=0;Et<ht.count;Et+=3)F.f(...[0,1,2].map(bt=>F.v(G([O+ht.getX(Et+bt),-3.8+ht.getY(Et+bt),5.1+ht.getZ(Et+bt)*1.5]),[1,1,1])));nt.dispose();let rt=G([O,-4.6,5.3]);R===0&&v.push({pos:rt,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[O,nt,ht,rt,Et]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let bt=[0,.2,.4,.6,.82],gt=(Pt,Wt)=>{let ee=.5*Et*Math.sin(7*Pt+Wt)*Pt,ct=.1*Et*Math.sin(5*Pt+Wt)*Pt;return[-ee*K,ee*st,ct]},Lt=(Pt,Wt,ee)=>Y.v(G([Pt,nt,Wt]),e.flag_col,[gt(ee,0),gt(ee,Math.PI)]),_t=bt.map(Pt=>Lt(O+rt*Pt,ht+Et,Pt)),At=bt.map(Pt=>Lt(O+rt*Pt,ht,Pt)),Gt=Lt(O+rt,ht+Et,1),Bt=Lt(O+rt,ht,1),Ct=Lt(O+.9*rt,ht+Et/2,.9);for(let Pt=0;Pt<4;Pt++)Y.f(At[Pt],At[Pt+1],_t[Pt+1],_t[Pt]);Y.f(_t[4],Gt,Ct),Y.f(At[4],Ct,Bt),Y.f(_t[4],Ct,At[4])}a.add(new St(C.geo(),_e()),new St(k.geo(),_e()),new St(B.geo(),_e({double:!0}))),a.add(new St(X.geo(),Vn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new St(F.geo(),Vn(e.torch_col,1.5)));let E=new St(Y.geo(),_e({double:!0,morph:!0}));E.morphTargetInfluences=[0,0],a.add(E),q.push(E)});class at{constructor(R){Ze(this,"mode",R);Ze(this,"mb");Ze(this,"war",[]);Ze(this,"pending",[]);Ze(this,"faces",[]);this.mb=new Qt(!1,R==="clash"?2:R==="surge"?1:0)}part(R,C,k,X,B,F,Y=-1,Q=!1){let V=k.clone().sub(C);if(V.length()<1e-6)return;let w=V.normalize(),st=Math.abs(w.z)<.9?new A(0,0,1):new A(1,0,0),K=w.clone().cross(st).normalize(),G=w.clone().cross(K),j=[[C,X],[k,B]].map(([it,lt])=>Array.from({length:F},(I,E)=>{let O=2*Math.PI*E/F,nt=it.clone().addScaledVector(K,Math.cos(O)*lt).addScaledVector(G,Math.sin(O)*lt),ht=new Nt(nt.x-R.x,nt.y-R.y),rt=ht.length()>1e-6?.5+.5*ht.normalize().dot(new Nt(u[0],u[1])):.5;return this.add([nt.x,nt.y,nt.z],Jt(e.sil,e.sil_rim,.45*rt*rt),Y,Q)}));for(let it=0;it<F;it++){let lt=(it+1)%F;this.faces.push([j[0][it],j[0][lt],j[1][lt],j[1][it]])}this.faces.push([...j[0]].reverse()),this.faces.push(j[1])}add(R,C,k,X){return this.pending.push({p:R,c:C,wi:k,arm:X}),this.pending.length-1}warrior(R,C,k,X){let B=this.war.length,F=new ce().makeRotationZ(C-Math.PI/2),Y=(st,K,G)=>R.clone().add(new A(st,K,G).applyMatrix4(F)),Q=R.clone().add(new A(0,0,1)),V=(st,K,G,j,it,lt=!1)=>this.part(Q,Y(...st),Y(...K),G,j,it,B,lt);for(let[st,K,G]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])V([st*.11,0,.95],G,.1,.075,4),V(G,K,.075,.06,4);V([0,0,.95],[0,.1,1.48],.2,.23,6),V([0,.16,1.58],[0,.16,1.74],.11,.11,6),V([0,.16,1.74],[0,.16,1.92],.12,.02,6),V([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),V([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),k!=="spear"&&V([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),V([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),V([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),k==="sword"?V([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):k==="axe"?(V([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),V([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(V([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),V([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let w=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(st=>{let K=Y(...st);return this.add([K.x,K.y,K.z],e.sil,B,!1)});this.faces.push(w),this.war.push({team:X,f:new A(0,1,0).applyMatrix4(F),axis:new A(1,0,0).applyMatrix4(F),pivot:Y(.27,.1,1.42)})}finish(){let R=this.pending.map(C=>{let k=[],X=new A(...C.p);if(this.mode==="clash")for(let B of[0,1]){if(C.wi<0){k.push([0,0,0]);continue}let F=this.war[C.wi],Y=F.team===B,Q=F.f.clone().multiplyScalar(Y?.32:-.22),V=X.clone().add(Q);C.arm&&(V=F.pivot.clone().add(Q).add(X.clone().sub(F.pivot).applyAxisAngle(F.axis,ue(Y?-60:25)))),k.push([V.x-X.x,V.y-X.y,V.z-X.z])}if(this.mode==="surge"){let B=this.war[C.wi];k.push([B.f.x*.5,B.f.y*.5,C.arm?.3:0])}return this.mb.v(C.p,C.c,k)});for(let C of this.faces)this.mb.f(...C.map(k=>R[k]));return this.mb.geo()}}let ot=_e({morph:!0,double:!0}),pt=[],D=t?5:8;for(let U=0;U<D;U++){let R=2*Math.PI*(U+o.uniform(-.3,.3))/D,C=o.uniform(17,36);m(R*180/Math.PI,C,15)&&(R+=.6);let k=C*Math.cos(R),X=C*Math.sin(R);for(let B=0;B<3;B++){let F=new at("clash"),Y=o.uniform(0,6.283),Q=new A(k+o.uniform(-4.5,4.5),X+o.uniform(-4.5,4.5),0),V=new A(Math.cos(Y),Math.sin(Y),0),w=o.uniform(.9,1.1);for(let[K,G]of[[0,-1],[1,1]]){let j=Q.clone().addScaledVector(V,w*G);j.z=_(j.x,j.y),F.warrior(j,K===0?Y:Y+Math.PI,o.choice(["sword","sword","axe","spear"]),K)}let st=new St(F.finish(),ot);st.morphTargetInfluences=[0,0],a.add(st),pt.push({m:st,w:2*Math.PI/s.uniform(40,95),w2:2*Math.PI/s.uniform(110,260),w3:2*Math.PI/s.uniform(150,400),p:s.uniform(0,6.28),p2:s.uniform(0,6.28),p3:s.uniform(0,6.28),bias:s.uniform(-.35,.35)})}}{let U=new at(null);for(let R=0;R<16;R++){let C=o.uniform(0,6.283),k=o.uniform(13,45);if(m(C*180/Math.PI,k,14))continue;let X=new A(k*Math.cos(C),k*Math.sin(C),0);X.z=_(X.x,X.y);let B=new ce().makeRotationZ(o.uniform(0,6.283)),F=(Q,V,w)=>X.clone().add(new A(Q,V,w).applyMatrix4(B)),Y=X.clone().add(new A(0,0,.2));U.part(Y,F(0,-.4,.18),F(0,.45,.2),.2,.22,6),U.part(Y,F(0,.55,.18),F(0,.7,.2),.11,.11,6),U.part(Y,F(-.1,-.4,.12),F(-.2,-1.2,.1),.09,.07,4),U.part(Y,F(.1,-.4,.12),F(.25,-1.1,.12),.09,.07,4),U.part(Y,F(-.25,.35,.18),F(-.6,.1,.12),.06,.05,4),U.part(Y,F(.25,.35,.18),F(.55,.7,.1),.06,.05,4),U.part(Y,F(.7,.2,0),F(.9,.2,1.8),.03,.025,4),U.part(Y,F(-.9,0,.05),F(-.9,0,.12),.4,.4,8)}a.add(new St(U.finish(),_e({double:!0})))}let et=[];{let U=[];for(let k=0;k<6;k++){let X=o.uniform(0,6.283),B=o.uniform(45,90);m(X*180/Math.PI,B,40)&&(X+=.8),U.push(new A(B*Math.cos(X),B*Math.sin(X),0))}let R=t?70:120,C=U.map(()=>new at("surge"));for(let k=0;k<R;k++){let X=C[k%U.length],B=U[k%U.length],F=B.clone().add(new A(o.uniform(-9,9),o.uniform(-9,9),0));F.z=_(F.x,F.y);let Y=Math.atan2(B.y-F.y,B.x-F.x)+o.uniform(-.5,.5),Q=X.war.length,V=new ce().makeRotationZ(Y-Math.PI/2),w=(K,G,j)=>F.clone().add(new A(K,G,j).applyMatrix4(V)),st=F.clone().add(new A(0,0,.9));X.part(st,w(0,0,0),w(0,0,1.45),.28,.22,4,Q),X.part(st,w(0,.05,1.45),w(0,.05,1.65),.12,.12,4,Q),X.part(st,w(.3,-.3,.9),w(.3,2,2.4),.03,.025,4,Q,!0),X.war.push({team:0,f:new A(0,1,0).applyMatrix4(V),axis:new A(1,0,0).applyMatrix4(V),pivot:w(0,0,1.4)})}for(let k of C){let X=new St(k.finish(),ot);X.morphTargetInfluences=[0,0],a.add(X),et.push({m:X,w:2*Math.PI/s.uniform(90,170),p:s.uniform(0,6.28),w2:2*Math.PI/s.uniform(300,600),p2:s.uniform(0,6.28)})}}let z=new St($s({r:s,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(U,R)=>m(U,R,16),base:U=>ge(e.grass_base,1-.6*Vt((U-12)/55)),tip:U=>ge(e.grass_tip,1-.6*Vt((U-12)/55))}),_e({emit:.1,double:!0,morph:!0}));z.morphTargetInfluences=[0],a.add(z);let J=Ci({r:o,n:t?24:40,at:()=>{let U=o.uniform(0,6.283),R=30*Math.sqrt(o.random());return[R*Math.cos(U),R*Math.sin(U),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(J.obj);let W=Ri({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(W.group),{group:a,floor:.6,update(U){W.update(U);for(let F of pt){let Y=Math.sin(U*F.w+F.p+1.4*Math.sin(U*F.w2+F.p2))+F.bias,Q=.55+.45*Math.sin(U*F.w3+F.p3),V=Vt(Y)*Q,w=Vt(-Y)*Q;F.m.morphTargetInfluences[0]=V*V*(3-2*V),F.m.morphTargetInfluences[1]=w*w*(3-2*w)}for(let F of et)F.m.morphTargetInfluences[0]=Vt(.5+.6*Math.sin(U*F.w+F.p)*(.6+.4*Math.sin(U*F.w2+F.p2)));let R=In(U,90);tt.morphTargetInfluences[0]=R,tt.morphTargetInfluences[1]=1-R;for(let F of q)F.morphTargetInfluences[0]=R,F.morphTargetInfluences[1]=1-R;z.morphTargetInfluences[0]=In(U,45);let C=U%3600,k=Math.floor(C/8),X=(C-k*8)/8,B=X*X*(3-2*X);for(let F of b){let Y=F.keys[k%450],Q=F.keys[(k+1)%450];F.m.scale.set(Y[0]+(Q[0]-Y[0])*B,Y[1]+(Q[1]-Y[1])*B,Y[2]+(Q[2]-Y[2])*B)}J.update(U)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...v],dispose(){W.dispose(),Pi(a)}}}var xu={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function qf(i,t){let e=i==="night"?xu.NIGHT:i==="day"?{...Ii(xu.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:xu.SUNSET,n=e.emit,r=n*.75,s=Tn(11),o=Tn(99),a=new Yt,c=ue(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let D=new A(.8,.6,0).normalize();return[D.x,D.y,0]})(),u=(D,et)=>Vt((Math.hypot(D,et)-12)/10)*.25*(Math.sin(D*.22)+Math.cos(et*.27)+.5*Math.sin((D+et)*.5)),d=(D,et)=>{let z=Vt((Math.hypot(D,et)-6)/34)**.7,J=.9+.2*(Math.sin(D*.5)*Math.cos(et*.5)*.5+.5),W=cn(D*.09+3,et*.09-7,3),U=ke(D*1.7,et*1.7),R=Jt(e.g_near,e.g_far,z);return R=Jt(R,e.g_alt,Vt((W-.45)*2.2)*.6*(1-.5*z)),ge(R,J*(1+.25*(U-.5)*(1-z)))},m=ji(e,[Pn(e.body_az,e.body_el)]);a.add(new St(Zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,d),_e({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,D])=>[D[0],D[1]]),f=D=>{let et=_.reduce((J,[W,U])=>J+Math.exp(-((Math.hypot(D[0]-W,D[1]-U)/5.5)**2)),0),z=(.55+.45*Math.min(1,et))*(1-.4*Vt((Math.hypot(D[0],D[1])-5)/5))*.2*.5*e.beam_gain;return ge(e.beam_col,z)};a.add(Sr({th:e,r:s,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:r,patchy:!1,bake:f}));{let D=new Qt;for(let et=0;et<10;et++){let z=s.uniform(0,6.283),J=s.uniform(11.5,17),W=s.uniform(.8,2),U=s.choice(e.stone),R=o.uniform(0,50),C=new yn(1,1),k=C.attributes.position;for(let w=0;w<k.count;w++){let st=s.uniform(.8,1.2);k.setXYZ(w,k.getX(w)*st,k.getY(w)*st,k.getZ(w)*st)}let X=J*Math.cos(z),B=J*Math.sin(z),F=s.uniform(0,6.28),Y=new ce().compose(new A(X,B,u(X,B)+.3*W),new En().setFromAxisAngle(new A(0,0,1),F),new A(W,W*.9,W*.7)),Q=C.index?C.toNonIndexed():C,V=Q.attributes.position;for(let w=0;w<V.count;w+=3){let st=[];for(let K=0;K<3;K++){let G=V.getX(w+K),j=V.getY(w+K),it=V.getZ(w+K),lt=new A(G,j,it).applyMatrix4(Y),I=.6+.4*Vt((it+1)/2)**.7,E=ke(G*2+R,j*2+it);st.push(D.v([lt.x,lt.y,lt.z],Jt(ge(U,I*(.88+.24*E)),e.moss,Vt(1-(it+1)/2*3)*.55)))}D.f(...st)}Q.dispose()}a.add(new St(D.geo(),_e()))}let p=[],y=(D,et,z)=>{for(let J=0;J<300;J++){let W=s.uniform(0,360);if(z&&W>245&&W<295)continue;let U=s.uniform(D,et),R=U*Math.cos(ue(W)),C=U*Math.sin(ue(W));if(p.every(([k,X])=>Math.hypot(R-k,C-X)>5.5))return p.push([R,C]),[R,C]}return null},M=_e({morph:!0}),b=Ti({gain:2.2}),L=[],P=t?12:18,v=t?6:10;for(let D=0;D<P+v;D++){let et=D<P,z=et?y(15,26,!0):y(32,46,!1);if(!z)continue;let J=et?s.uniform(46,62):s.uniform(58,76),W=et?s.uniform(1.2,2.1):s.uniform(2.3,3.3),U=et&&s.random()<.25,R=T(z[0],z[1],J,W,U),C=new St(R.bark.geo(),M);C.morphTargetInfluences=[0,0],a.add(C);let k=null;U&&(k=new St(R.eyes.geo(),b),k.morphTargetInfluences=[0,0],a.add(k));let X=[];if(U){let B=Array.from({length:Math.floor(174)},(F,Y)=>60+Y*20);for(let F=0;F<5;F++)X.push(B.splice(s.int(0,B.length-1),1)[0]);X.sort((F,Y)=>F-Y)}L.push({mesh:C,eyes:k,P:s.choice([100,120,150,180,200]),flip:s.int(0,1),blinks:X})}function T(D,et,z,J,W){let U=new Qt(!1,2),R=new Qt(!1,2),C=new A(-D,-et,0).normalize(),k=s.uniform(1.2,2.4),X=new A(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.03,.1)),B=s.uniform(0,6.28),F=s.uniform(.4,1),Y=s.choice([3,4,5]),Q=s.uniform(0,6.28),V=O=>new A(D+X.x*O+F*Math.sin(.28*O+B),et+X.y*O+F*Math.cos(.23*O+B),O),w=(O,nt)=>{let ht=Math.max(O,0),rt=J*(1-.62*Vt(ht/z))*(1+1.1*Math.exp(-ht/1.6)),Et=nt+.06*ht;return rt*(1+.28*Math.cos(Y*Et+Q)*Math.exp(-ht/3.5)+.07*Math.cos(2*Et+B))},st=O=>{let nt=k*Vt(Math.max(O,0)/z)**2;return[h[0]*nt,h[1]*nt,0]},K=(O,nt,ht)=>{let rt=new A(O.x,O.y,0);rt.lengthSq()>1e-12&&rt.normalize();let Et=Math.max(0,rt.x*C.x+rt.y*C.y),bt=.6+.4*Math.sin(ht),gt=Jt(e.bark_dark,e.bark_lit,Vt(.85*Et*bt*(1-.3*Vt(nt/z)))),Lt=Math.max(0,rt.x*l[0]+rt.y*l[1]);gt=Jt(gt,e.bark_sun,Vt(e.bark_sun_k*Lt*(.5+.5*bt)*(1-.5*Vt(nt/z)))),gt=ge(gt,.72+.28*Vt(nt/1.6));let _t=Vt(1-nt/2.2)*.55*ke(O.x*3+D,O.y*3+nt*.8);return Jt(gt,e.moss,_t)},G=(O,nt)=>U.v([O.x,O.y,O.z],nt,[st(O.z),[0,0,0]]),j=t?10:14,it=t?8:12,lt=[];for(let O=0;O<j;O++){let nt=-.5+(z+.5)*(O/(j-1))**1.15,ht=V(nt),rt=[];for(let Et=0;Et<it;Et++){let bt=2*Math.PI*Et/it,gt=new A(Math.cos(bt),Math.sin(bt),0);rt.push(G(ht.clone().addScaledVector(gt,w(nt,bt)),K(gt,nt,bt*7+nt*.4)))}lt.push(rt)}for(let O=0;O<j-1;O++)for(let nt=0;nt<it;nt++){let ht=(nt+1)%it;U.f(lt[O][nt],lt[O][ht],lt[O+1][ht],lt[O+1][nt])}let I=G(V(z).add(new A(0,0,.3)),e.bark_dark);for(let O=0;O<it;O++)U.f(I,lt[j-1][O],lt[j-1][(O+1)%it]);let E=s.int(2,4);for(let O=0;O<E;O++){let nt=z*s.uniform(.35,.85),ht=s.uniform(0,6.28),rt=new A(Math.cos(ht),Math.sin(ht),0),Et=V(nt).addScaledVector(rt,w(nt,ht)*.7),bt=rt.clone().add(new A(0,0,s.uniform(.4,1))).normalize(),gt=s.uniform(3.5,7.5),Lt=new A(-rt.y,rt.x,0),_t=[0,1,2,3,4].map(Bt=>Et.clone().addScaledVector(bt,gt*(Bt/4)).add(new A(0,0,.35*gt*(Bt/4)**2)).addScaledVector(Lt,Math.sin(Bt/4*3+O)*.5)),At=w(nt,ht)*.32,Gt=_t.map((Bt,Ct)=>{let Pt=_t[Math.min(Ct+1,4)].clone().sub(_t[Math.max(Ct-1,0)]).normalize(),Wt=Pt.clone().cross(new A(0,0,1));Wt.length()<.001&&(Wt=new A(1,0,0)),Wt.normalize();let ee=Pt.clone().cross(Wt);return Array.from({length:6},(ct,Ut)=>{let vt=2*Math.PI*Ut/6,Tt=Wt.clone().multiplyScalar(Math.cos(vt)).addScaledVector(ee,Math.sin(vt));return G(Bt.clone().addScaledVector(Tt,At*(1-.85*Ct/4)),K(Tt,Bt.z,vt*5+Ct))})});for(let Bt=0;Bt<4;Bt++)for(let Ct=0;Ct<6;Ct++){let Pt=(Ct+1)%6;U.f(Gt[Bt][Ct],Gt[Bt][Pt],Gt[Bt+1][Pt],Gt[Bt+1][Ct])}}if(W){let O=s.uniform(2.2,9),nt=Math.atan2(C.y,C.x)+s.uniform(-.6,.6),ht=new A(Math.cos(nt),Math.sin(nt),0),rt=new A(-ht.y,ht.x,0),Et=V(O).addScaledVector(ht,w(O,nt)),bt=s.uniform(.18,.32),gt=bt*1.25,Lt=(Gt,Bt,Ct)=>Et.clone().addScaledVector(ht,Ct).addScaledVector(rt,Gt).add(new A(0,0,Bt)),_t=Array.from({length:10},(Gt,Bt)=>G(Lt(Math.cos(2*Math.PI*Bt/10)*(gt+bt*1.7),Math.sin(2*Math.PI*Bt/10)*bt*1.7,.07),[.004,.003,.02]));U.f(..._t);let At=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Gt of[1,-1]){let Bt=At.map(([Pt,Wt])=>[Gt*(gt+Pt*bt),Wt*bt]);Gt===-1&&(Bt=Bt.reverse());let Ct=Bt.map(([Pt,Wt])=>{let ee=Lt(Pt,Wt,.11);return R.v([ee.x,ee.y,ee.z],[1,.04,.04],[st(ee.z),[0,0,O-ee.z]])});R.f(...Ct)}}return{bark:U,eyes:R}}let N=e.grass_tip,x=_e({emit:e.grass_emit,double:!0,morph:!0}),S=t?260:500,Z=[0,1].map(()=>{let D=new Map,et=$s({r:s,tufts:S,rmin:10.6,rspan:34,gh:u,base:J=>ge(e.grass_base,1-.6*Vt((J-11)/34)),tip:(J,W)=>{let U=Math.round(J*1e3),R=D.get(U);R||(R=Jt(N[0],N[1],s.random()),D.set(U,R));let C=.3*Math.abs(Math.cos(W-c))*(i==="night"?.5:1);return ge(Jt(R,e.grass_rim,C),1-.6*Vt((J-11)/34))}}),z=new St(et,x);return z.morphTargetInfluences=[0],a.add(z),z});{let D=new Qt;for(let et=0;et<(t?40:70);et++){let z=14+22*o.random(),J=o.uniform(0,2*Math.PI),W=z*Math.cos(J),U=z*Math.sin(J),R=u(W,U),C=[W+o.uniform(-.06,.06),U+o.uniform(-.06,.06),R+o.uniform(.35,.7)];D.f(D.v([W-.012,U,R],[.02,.07,.05]),D.v([W+.012,U,R],[.02,.07,.05]),D.v([C[0]+.012,C[1],C[2]],[.08,.25,.12]),D.v([C[0]-.012,C[1],C[2]],[.08,.25,.12]));let k=o.choice(e.flower),X=D.v([C[0],C[1],C[2]+.02],[1,.9,.5]),B=Array.from({length:6},(F,Y)=>{let Q=2*Math.PI*Y/6;return D.v([C[0]+.05*Math.cos(Q),C[1]+.05*Math.sin(Q),C[2]+.025],k)});for(let F=0;F<6;F++)D.f(X,B[F],B[(F+1)%6])}a.add(new St(D.geo(),_e({emit:e.flower_emit,double:!0})))}{let D=new Qt;for(let et=0;et<14;et++){let z=ue(s.choice([s.uniform(195,245),s.uniform(295,345),s.uniform(0,360)])),J=s.uniform(16,34),W=s.uniform(1,1.8),U=J*Math.cos(z),R=J*Math.sin(z),C=u(U,R);for(let k=0;k<4;k++){let X=[s.uniform(-1.4,1.4),s.uniform(-1,1),s.uniform(.2,1)],B=s.uniform(.9,1.6),F=new yn(B,1),Y=F.attributes.position;for(let Q=0;Q<Y.count;Q+=3){let V=[];for(let w=0;w<3;w++){let st=Y.getZ(Q+w)+X[2];V.push(D.v([U+(Y.getX(Q+w)+X[0])*W,R+(Y.getY(Q+w)+X[1])*W,C+st*W*.75],Jt(e.bush_lo,e.bush_hi,Vt((st+.3)/2.6)*.8)))}D.f(...V)}F.dispose()}}a.add(new St(D.geo(),_e()))}{let D=new Qt;[[52,70,110,150],[59,80,120,160],[66,90,130,170]].forEach(([z,J,W,U],R)=>Wf(D,{r:s,idx:R,radius:z,count:t?Math.round(J*.6):J,hmin:W,hmax:U,th:e,sky:m,sunAz:c}));let et=Ti({fog:!1,gain:i==="night"?.45:.6});et.toneMapped=!1,a.add(new St(D.geo(),et))}let tt=new Qt(!0);g.forEach(([D,et])=>{for(let[z,J]of[[1,.45],[.7,.6],[.4,.8]])Vf(tt,D,et,z,J,e.beam_col,.35*e.beam_gain,2.6)});let q=new Qt(!0);Ks(q,9.4,.7,(D,et)=>{let z=_.reduce((J,[W,U])=>J+Math.exp(-((Math.hypot(D-W,et-U)/5.5)**2)),0);return(.55+.45*Math.min(1,z))*Ae(0,3,9.4-Math.hypot(D,et))},e.beam_col,.3*.5*e.beam_gain);let at=new St(tt.geo(),Qr());a.add(at,new St(q.geo(),Qr()));let ot=Ci({r:s,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let D=s.uniform(0,6.283),et=s.uniform(0,22);return[et*Math.cos(D),et*Math.sin(D),s.uniform(.8,7)]},move:()=>{let D=s.uniform(-1.5,1.5);return[D,D*.5,s.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(ot.obj);let pt=Ri({th:e,W:t?512:1024,bodies:[Pn(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(pt.group),{group:a,floor:.62,update(D){pt.update(D);for(let z of L){let J=In(D,z.P/2,.15,1,z.flip),W=0;for(let U of z.blinks)Math.abs(D%3600-U)<3&&(W=1-Math.abs(D%3600-U)/3);z.mesh.morphTargetInfluences[0]=J,z.mesh.morphTargetInfluences[1]=W,z.eyes&&(z.eyes.morphTargetInfluences[0]=J,z.eyes.morphTargetInfluences[1]=W)}Z.forEach((z,J)=>{z.morphTargetInfluences[0]=In(D,45,0,1,J)});let et=In(D,450);at.rotation.set(.03*et*.1,.02*et*.1,0),ot.update(D)},key:{dir:Pn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){pt.dispose(),Pi(a)}}}var Mu={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},ts=2.3;function Yf(i,t){let e=i==="night"?Mu.NIGHT:i==="day"?{...Ii(Mu.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:Mu.SUNSET,n=e.emit,r=Tn(7),s=new Yt,o=[Pn(e.body_az,e.body_el),Pn(e.body_az+180,e.body_el)],a=ji(e,o),c=(D,et)=>Vt((Math.hypot(D,et)-13)/10)*.25*(Math.sin(D*.22)+Math.cos(et*.27)+.5*Math.sin((D+et)*.5)),l=(D,et)=>{let z=Vt((Math.hypot(D,et)-10)/50),J=.9+.2*(Math.sin(D*.5)*Math.cos(et*.5)*.5+.5),W=Jt(e.g_near,e.g_far,z);return W=Jt(W,e.g_alt,Vt((cn(D*.09+3,et*.09-7,3)-.45)*2.2)*.6),ge(W,J*(.9+.25*ke(D*1.7,et*1.7)))},h=(D,et,z)=>Jt(ge(D,(.6+.4*Vt(et)**.7)*(.88+.24*z)),e.moss,Vt(1-et*3)*.55);s.add(new St(Zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),_e({flat:!1})));{let D=t?96:144,et=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],z=et.map(C=>Array.from({length:D},(k,X)=>{let B=2*Math.PI*X/D,F=C*Math.cos(B),Y=C*Math.sin(B),Q=1;for(let st of[ue(e.body_az),ue(e.body_az+180)]){let K=Math.abs(((B-st+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);Q*=1-.8*Math.exp(-((K/ue(17))**2))}let w=(4+42*Ae(50,102,C))*(1-.65*Ae(112,134,C))*(.12+1.15*kf(F*.032,Y*.032,5))*(.55+.9*cn(F*.01+5,Y*.01-3,3))*Q+1.2*cn(F*.09,Y*.09,3)*Ae(46,60,C);return w*=Ae(45.5,52,C),[F,Y,c(F,Y)+.03+w]})),J=new Qt,W=[],U=o;et.forEach((C,k)=>{W.push([]);for(let X=0;X<D;X++){let B=z[k][X],F=2*Math.PI*X/D,Y=z[k][(X+1)%D],Q=z[k][(X-1+D)%D],V=z[Math.min(k+1,et.length-1)][X],w=z[Math.max(k-1,0)][X],st=new A(V[0]-w[0],V[1]-w[1],V[2]-w[2]).cross(new A(Y[0]-Q[0],Y[1]-Q[1],Y[2]-Q[2])).normalize();st.z<0&&st.multiplyScalar(-1);let K=B[2]/45,G=1-st.z,j=cn(B[0]*.12,B[1]*.12,3),it=ge(Jt(e.rock_lo,e.rock_hi,Vt(Vt(K)**.7+.25*(j-.5))),.8+.4*j);it=Jt(it,e.veg,Vt((9-B[2])/9)*Vt(1-G*2.4)*.85),it=Jt(it,e.snow,Ae(.55,.78,K+.22*(cn(B[0]*.07,B[1]*.07,3)-.5))*Vt(1-G*1.7));let lt=0;for(let O of U)lt=Math.max(lt,Vt(st.x*O[0]+st.y*O[1]+st.z*O[2]));lt=lt**1.2,it=[it[0]*(e.amb[0]+e.light_col[0]*lt*1.6),it[1]*(e.amb[1]+e.light_col[1]*lt*1.6),it[2]*(e.amb[2]+e.light_col[2]*lt*1.6)];let I=a(Math.cos(F)*Math.cos(.02),Math.sin(F)*Math.cos(.02),Math.sin(.02)).map(O=>wr(O,e.exposure)*e.haze_gain),E=Math.min(.97,Math.max(0,1-Math.exp(-(C-40)/e.haze_dist)+.5*Math.exp(-Math.max(B[2],0)/9)*Ae(55,100,C)));it=Jt(it,I,E),it=Jt(l(B[0],B[1]),it,Ae(46,58,C)).map(Vt),W[k].push(J.v(B,it))}});for(let C=0;C<et.length-1;C++)for(let k=0;k<D;k++){let X=(k+1)%D;J.f(W[C][k],W[C][X],W[C+1][X],W[C+1][k])}let R=Ti({fog:!1,gain:.95});s.add(new St(J.geo(),R))}let u=new Qt,d=new Qt,m=new Qt,g=new Qt,_=new Qt,f=new Qt,p=(D,et,z,J,W,U=!0)=>{let R=et.map(([C,k])=>Array.from({length:z},(X,B)=>{let F=[J[0]+k*Math.cos(2*Math.PI*B/z),J[1]+k*Math.sin(2*Math.PI*B/z),J[2]+C];return D.v(F,W(F))}));for(let C=0;C<R.length-1;C++)for(let k=0;k<z;k++){let X=(k+1)%z;D.f(R[C][k],R[C][X],R[C+1][X],R[C+1][k])}if(U){let C=R[R.length-1].map(k=>D.v(D.pos.slice(k*3,k*3+3),D.col.slice(k*3,k*3+3)));D.f(...C)}},y=(D,et,z,J,W,U,R=1,C=[1,1,1])=>{let k=Array.from({length:J},(X,B)=>{let F=2*Math.PI*B/J;return Array.from({length:W},(Y,Q)=>{let V=2*Math.PI*Q/W,w=et+z*Math.cos(V);return D.v([w*Math.cos(F),w*Math.sin(F),U+z*R*Math.sin(V)],C)})});for(let X=0;X<J;X++)for(let B=0;B<W;B++){let F=(X+1)%J,Y=(B+1)%W;D.f(k[X][B],k[F][B],k[F][Y],k[X][Y])}},M=(D,et,z,J,W,U=0)=>{let R=Math.cos(J),C=Math.sin(J),k=new Map,X=(F,Y,Q)=>{let V=`${F},${Y},${Q}`,w=k.get(V);w||(w=U?[r.uniform(-.03,.03),r.uniform(-.03,.03),r.uniform(-.02,.02)]:[0,0,0],k.set(V,w));let st=F*z[0]+w[0],K=Y*z[1]+w[1],G=Q*z[2]+w[2];return D.v([et[0]+st*R-K*C,et[1]+st*C+K*R,et[2]+G],W([st,K,G],Q+.5))},B=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let F of B)D.f(...F.map(([Y,Q,V])=>X(Y,Q,V)))},b=(D,et,z,J)=>{let W=r.uniform(0,50);M(u,D,et,z,(U,R)=>h(J,R,ke(U[0]*2.5+W,U[1]*2.5+U[2]*1.7)),1)},L=(D,et,z,J)=>{let W=r.uniform(0,50);p(u,[[0,D],[z,D]],48,[0,0,et],U=>h(J,(U[2]-et)/z,ke(U[0]*1.2+W,U[1]*1.2)))};L(8.2,0,1.4,e.stone[0]),L(7.2,1.4,.5,e.stone[3]),L(6.6,1.9,ts-1.9,e.stone[0]),y(d,6.6,.18,48,6,ts,1,e.stone[3]);let P=28;for(let D=0;D<P;D++){let et=2*Math.PI*D/P,z=1.4+r.uniform(-.08,.08);b([8.45*Math.cos(et),8.45*Math.sin(et),z/2],[1,1.95,z],et,r.choice(e.stone))}for(let[D,et]of[[9.8,.9],[11,.55],[12.2,.3]])for(let z=0;z<14;z++){if(r.random()<.2)continue;let J=2*Math.PI*z/14+r.uniform(-.08,.08);b([D*Math.cos(J),D*Math.sin(J),et/2],[1.3,2.6,et],J+r.uniform(-.1,.1),r.choice(e.stone))}for(let D of[5.8,4.2,2.6,1.2])y(g,D,.08,48,6,ts+.02,.6);for(let D=0;D<16;D++){let et=2*Math.PI*D/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(et),5*Math.sin(et),ts],()=>[1,1,1])}let v=[],T=Tc(),N=Ti({gain:1.05}),x=[];for(let D of[3,10,17,24]){let et=2*Math.PI*D/P,z=8.45*Math.cos(et),J=8.45*Math.sin(et),W=1.4;p(d,[[0,.28],[.9,.28]],12,[z,J,W],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[z,J,W+.9],()=>e.stone[0]);let U=new St(T,N);U.position.set(z,J,W+1.25),s.add(U),v.push({m:U,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),x.push({pos:[z,J,W+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let S=(D,et,z,J=1.8,W=1.2)=>{let U=ue(D),R=et*Math.cos(U),C=et*Math.sin(U),k=c(R,C)-.4,X=U-Math.PI/2,B=r.choice(e.stone),F=r.uniform(0,50),Y=new Map,Q=Math.cos(X),V=Math.sin(X),w=(j,it,lt)=>{let I=`${j},${it},${lt}`,E=Y.get(I);E||(E=[r.uniform(-.07,.07),r.uniform(-.07,.07),r.uniform(-.05,.05)],Y.set(I,E));let O=j*J,nt=it*W,ht=(lt+.5)*z;if(ht>z*.5){let bt=1-.18*((ht-z*.5)/(z*.5));O*=bt,nt*=bt}O+=E[0],nt+=E[1];let rt=ht+E[2],Et=.5*ke(O*2.2+F,rt*.7)+.5*ke(O*6+F,rt*.25);return u.v([R+O*Q-nt*V,C+O*V+nt*Q,k+rt],h(B,rt/z,Et))},st=4,K=j=>-.5+j/st,G=j=>{for(let it=0;it<st;it++)for(let lt=0;lt<st;lt++)u.f(w(...j(it,lt)),w(...j(it+1,lt)),w(...j(it+1,lt+1)),w(...j(it,lt+1)))};G((j,it)=>[K(j),-.5,K(it)]),G((j,it)=>[K(it),.5,K(j)]),G((j,it)=>[-.5,K(it),K(j)]),G((j,it)=>[.5,K(j),K(it)]),G((j,it)=>[K(it),K(j),.5]),G((j,it)=>[K(j),K(it),-.5]);for(let[j,it,lt]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let E=-W/2-.02,O=z*j;M(f,[R+0*Q-E*V,C+0*V+E*Q,k+O],[it,.1,lt],X,()=>[1,1,1])}};for(let[D,et,z]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])S(D,et,z),S(D+180,et,z);for(let D=0;D<12;D++){let et=ue(r.choice([r.uniform(195,245),r.uniform(295,345)])),z=r.uniform(13,18),J=r.uniform(1,2.2),W=r.choice(e.stone),U=r.uniform(0,50),R=z*Math.cos(et),C=z*Math.sin(et),k=r.uniform(0,6.28),X=new yn(1,1),B=X.attributes.position,F=new ce().compose(new A(R,C,c(R,C)+.3*J),new En().setFromAxisAngle(new A(0,0,1),k),new A(J,J*.9,J*.7)),Y=new Map;for(let Q=0;Q<B.count;Q+=3)u.f(...[0,1,2].map(V=>{let w=B.getX(Q+V),st=B.getY(Q+V),K=B.getZ(Q+V),G=`${w.toFixed(3)},${st.toFixed(3)},${K.toFixed(3)}`,j=Y.get(G);j===void 0&&(j=r.uniform(.8,1.2),Y.set(G,j));let it=new A(w*j,st*j,K*j).applyMatrix4(F);return u.v([it.x,it.y,it.z],h(W,(K+1)/2,ke(w*2+U,st*2+K)))}));X.dispose()}s.add(new St(u.geo(),_e())),s.add(new St(d.geo(),_e({flat:!1})),new St(m.geo(),_e()));let Z=new St(g.geo(),Vn([1,.92,.75],.75*Math.min(1.6,n)));Z.name="centre-pattern",s.add(Z,new St(_.geo(),Vn([1,.92,.75],.75*Math.min(1.6,n)))),s.add(new St(f.geo(),Vn([1,.3,.1],1.1*Math.min(1.4,n))));let tt=ue(e.body_az),q=_e({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),at=[0,1].map(()=>{let D=e.grass_tip[0],et=-1,z=$s({r,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:W=>{let U=1-.55*Vt((W-13)/34);return[.03*U,.1*U,.1*U]},tip:(W,U)=>(W!==et&&(et=W,D=Jt(e.grass_tip[0],e.grass_tip[1],r.random())),ge(Jt(D,e.grass_rim,.3*Math.abs(Math.cos(U-tt))*(i==="night"?.5:1)),1-.55*Vt((W-13)/34)))}),J=new St(z,q);return J.morphTargetInfluences=[0],s.add(J),J});{let D=new Qt;for(let et=0;et<(t?40:70);et++){let z=14+22*r.random(),J=r.uniform(0,2*Math.PI),W=z*Math.cos(J),U=z*Math.sin(J),R=c(W,U),C=r.uniform(.35,.7),k=[W+r.uniform(-.06,.06),U+r.uniform(-.06,.06),R+C];D.f(D.v([W-.012,U,R],[.02,.07,.05]),D.v([W+.012,U,R],[.02,.07,.05]),D.v([k[0]+.012,k[1],k[2]],[.08,.25,.12]),D.v([k[0]-.012,k[1],k[2]],[.08,.25,.12]));let X=r.choice(e.flower),B=D.v([k[0],k[1],k[2]+.02],[1,.9,.5]),F=Array.from({length:6},(Y,Q)=>{let V=2*Math.PI*Q/6;return D.v([k[0]+.05*Math.cos(V),k[1]+.05*Math.sin(V),k[2]+.025],X)});for(let Y=0;Y<6;Y++)D.f(B,F[Y],F[(Y+1)%6])}s.add(new St(D.geo(),_e({emit:e.flower_emit,double:!0})))}let ot=Ci({r,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let D=r.uniform(0,6.283),et=r.uniform(4,26);return[et*Math.cos(D),et*Math.sin(D),r.uniform(1.5,10)]},move:()=>[r.uniform(-1,1),0,r.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&s.add(ot.obj);let pt=Ri({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return s.add(pt.group),{group:s,floor:ts,update(D){pt.update(D),at.forEach((U,R)=>{U.morphTargetInfluences[0]=In(D,45,0,1,R)});let et=D%3600,z=Math.floor(et/8),J=(et-z*8)/8,W=J*J*(3-2*J);for(let U of v){let R=U.keys[z%450],C=U.keys[(z+1)%450];U.m.scale.set(R[0]+(C[0]-R[0])*W,R[1]+(C[1]-R[1])*W,R[2]+(C[2]-R[2])*W)}ot.update(D)},key:{dir:Pn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,ts+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,ts+.5],color:[1,.5,.2],intensity:.35,dist:8},...x],dispose(){pt.dispose(),Pi(s)}}}var bu={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function Zf(i,t){let e=i==="night"?bu.NIGHT:i==="day"?{...Ii(bu.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:bu.SUNSET,n=e.emit,r=n*.75,s=Tn(21),o=Tn(77),a=new Yt,c=[Pn(e.body_az,e.body_el)],l=ji(e,c),h=ue(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(B=>wr(B,e.exposure)),d=e.stone,m=Ri({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(B,F)=>{let Y=Math.hypot(B,F),Q=Jt(e.water_lo,e.water_hi,Vt(cn(B*.05+2,F*.05,3)*1.2-.15)),V=Math.exp(-(((Y-9.9)/3)**2))*.12*.75;return Q=[Q[0]+e.glow_col[0]*V,Q[1]+e.glow_col[1]*V,Q[2]+e.glow_col[2]*V],Jt(Q,ge(u,.5),Ae(32,150,Y)**1.2)},_;{let B=new Qt(!1,2),F=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],Y=t?48:72,Q=F.map(w=>Array.from({length:Y},(st,K)=>{let G=w*Math.cos(2*Math.PI*K/Y),j=w*Math.sin(2*Math.PI*K/Y),it=Ae(9,13,w)*Math.exp(-w/90);return B.v([G,j,0],g(G,j),[[0,0,.06*Math.sin(.45*G+.33*j)*it],[0,0,.06*Math.sin(.38*G-.41*j+2)*it]])}));for(let w=0;w<F.length-1;w++)for(let st=0;st<Y;st++){let K=(st+1)%Y;B.f(Q[w][st],Q[w+1][st],Q[w+1][K],Q[w][K])}let V=new Bs({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:Vh});_=new St(B.geo(),V),_.morphTargetInfluences=[0,0],a.add(_)}let f=[];[.35,.9,1.7].slice(0,t?2:3).forEach((B,F)=>{let Y=new Qt(!0),Q=[10.5,12,15,19,24,30,38,48,60],V=48,w=Q.map(G=>Array.from({length:V},(j,it)=>{let lt=2*Math.PI*it/V,I=G*Math.cos(lt),E=G*Math.sin(lt),O=e.mist_a*Vt((cn(I*.07+F*9,E*.07,3)-.38)*2.6)*Ae(0,3,G-10.5)*Ae(0,15,60-G);return Y.v([I,E,B+.12*Math.sin(.3*I+F)],[...e.mist_col,O])}));for(let G=0;G<Q.length-1;G++)for(let j=0;j<V;j++){let it=(j+1)%V;Y.f(w[G][j],w[G+1][j],w[G+1][it],w[G][it])}let st=new an({vertexColors:!0,transparent:!0,depthWrite:!1,side:Le,toneMapped:!1});st.color.setScalar(1+.7);let K=new St(Y.geo(),st);K.renderOrder=3,a.add(K),f.push({m:K,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Sr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let p=new Qt,y=new Qt,M=[];for(let B of[45,135,225,315]){let F=ue(B),Y=o.uniform(1.6,2.6),Q=o.choice(d),V=o.uniform(0,50),w=9.35*Math.cos(F),st=9.35*Math.sin(F),K=10,G=.3,j=[],it=[],lt=Array.from({length:K},()=>G+Y-o.uniform(0,.45));for(let gt=0;gt<K;gt++){let Lt=2*Math.PI*gt/K,_t=o.uniform(-.05,.05),At=o.uniform(-.05,.05),Gt=o.uniform(-.05,.05),Bt=o.uniform(-.05,.05),Ct=[w+.62*Math.cos(Lt)+_t,st+.62*Math.sin(Lt)+At,G],Pt=[w+.5*Math.cos(Lt)+Gt,st+.5*Math.sin(Lt)+Bt,lt[gt]];j.push(p.v(Ct,Ai(Q,0,Ct[0]-w,Ct[1]-st,V,e.moss))),it.push(p.v(Pt,Ai(Q,(Pt[2]-G)/Y,Pt[0]-w,Pt[1]-st,V,e.moss)))}for(let gt=0;gt<K;gt++){let Lt=(gt+1)%K;p.f(j[gt],j[Lt],it[Lt],it[gt])}p.f(...it);let I=w-.55*Math.cos(F),E=st-.55*Math.sin(F),O=F-Math.PI/2,nt=Math.cos(O),ht=Math.sin(O),rt=.06,Et=Y*.45/2,bt=.3+Y*.5;y.f(...[[-rt,-.03,-Et],[rt,-.03,-Et],[rt,-.03,Et],[-rt,-.03,Et]].map(([gt,Lt,_t])=>y.v([I+gt*nt-Lt*ht,E+gt*ht+Lt*nt,bt+_t],[1,1,1]))),M.push([w,st,.3+Y])}let b=(B,F,Y,Q,V,w,st,K)=>{let G=o.uniform(0,50),j=Math.cos(st),it=Math.sin(st),lt=new Map,I=(E,O,nt)=>{let ht=E*Q+o.uniform(-.03,.03),rt=O*V+o.uniform(-.03,.03),Et=nt*w;return p.v([B+ht*j-rt*it,F+ht*it+rt*j,Y+Et],Ai(K,nt+.5,ht,rt,G,e.moss))};for(let E of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...E.map(([O,nt,ht])=>I(O,nt,ht)))};for(let B of[270,90])for(let F=0;F<5;F++){let Y=11+F*1.7+o.uniform(-.2,.2),Q=ue(B+o.uniform(-5,5)),V=o.uniform(1.2,1.7);b(Y*Math.cos(Q),Y*Math.sin(Q),-.13,V,V*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(d))}for(let B=0;B<12;B++){let F=o.uniform(0,2*Math.PI);Math.min(Math.abs(Xo(F,Math.PI/2)),Math.abs(Xo(F,3*Math.PI/2)))<.18&&(F+=.5);let Y=o.uniform(10.5,15),Q=o.uniform(.7,1.8),V=o.choice(d),w=o.uniform(0,50),st=o.uniform(0,6.28),K=new yn(1,1),G=K.attributes.position,j=new ce().compose(new A(Y*Math.cos(F),Y*Math.sin(F),.05),new En().setFromAxisAngle(new A(0,0,1),st),new A(Q,Q*.9,Q*.7));for(let it=0;it<G.count;it+=3)p.f(...[0,1,2].map(lt=>{let I=new A(G.getX(it+lt),G.getY(it+lt),G.getZ(it+lt)),E=I.z;return I.applyMatrix4(j),p.v([I.x,I.y,I.z],Ai(V,(E+1)/2,G.getX(it+lt),G.getY(it+lt),w,e.moss))}));K.dispose()}a.add(new St(p.geo(),_e()),new St(y.geo(),Vn(e.rune_col,1.4*r)));let L=(()=>{let B=new A(.8,.6,0).normalize();return[B.x,B.y,0]})(),P=ue(e.body_az),v=[Math.cos(P),Math.sin(P)],T=[],N=(B,F,Y)=>{for(let Q=0;Q<300;Q++){let V=s.uniform(0,360);if(Y&&V>245&&V<295)continue;let w=s.uniform(B,F),st=w*Math.cos(ue(V)),K=w*Math.sin(ue(V));if(T.every(([G,j])=>Math.hypot(st-G,K-j)>6))return T.push([st,K]),[st,K]}return null},x=_e({morph:!0}),S=[],Z=[],tt=[],q=t?6:9,at=t?4:7;for(let B=0;B<q+at;B++){let F=B<q,Y=F?N(16,32,!0):N(38,62,!1);if(!Y)continue;let Q=F?s.uniform(9,15):s.uniform(16,24),V=F?s.uniform(.28,.42):s.uniform(.5,.8),w=new St(ot(Y[0],Y[1],Q,V),x);w.morphTargetInfluences=[0],a.add(w),S.push({m:w,P:s.choice([100,120,150,180,200]),flip:s.int(0,1)}),Z.push(Y),tt.push([Y[0],Y[1],2.2*V+.7])}function ot(B,F,Y,Q){let V=new Qt(!1,1),w=new A(-B,-F,0).normalize(),st=s.uniform(.6,1.4),K=new A(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.02,.07)),G=s.uniform(0,6.28),j=gt=>new A(B+K.x*gt+.25*Math.sin(.5*gt+G),F+K.y*gt+.25*Math.cos(.4*gt+G),gt),it=gt=>{let Lt=Math.max(gt,0);return Q*(1-.55*Vt(Lt/Y))*(1+.7*Math.exp(-Lt/.8))},lt=(gt,Lt,_t=0)=>{let At=st*Vt(Math.max(gt.z,0)/Y)**2+_t;return V.v([gt.x,gt.y,gt.z],Lt,[[L[0]*At,L[1]*At,0]])},I=(gt,Lt)=>{let _t=new A(gt.x,gt.y,0);_t.lengthSq()>1e-12&&_t.normalize();let At=Jt(e.bark_dark,e.bark_lit,.6*Math.max(0,_t.x*w.x+_t.y*w.y));return At=Jt(At,e.bark_rim,Vt(e.bark_rim_k*Math.max(0,_t.x*v[0]+_t.y*v[1])*(1-.4*Vt(Lt/Y)))),Jt(At,e.moss,Vt(1-Lt/1.8)*.6*ke(gt.x*3+B,Lt*.8+F))},E=(gt,Lt,_t,At,Gt)=>{let Bt=gt.length,Ct=gt.map((ee,ct)=>gt[Math.min(ct+1,Bt-1)].clone().sub(gt[Math.max(ct-1,0)]).normalize()),Pt=Ct[0].clone().cross(Math.abs(Ct[0].z)>.9?new A(1,0,0):new A(0,0,1)).normalize(),Wt=gt.map((ee,ct)=>{let Ut=Ct[ct];Pt=Pt.clone().addScaledVector(Ut,-Pt.dot(Ut)).normalize();let vt=Ut.clone().cross(Pt);return Array.from({length:_t},(Tt,Xt)=>{let $t=2*Math.PI*Xt/_t,fe=Pt.clone().multiplyScalar(Math.cos($t)).addScaledVector(vt,Math.sin($t));return lt(ee.clone().addScaledVector(fe,Lt[ct]),At(ct,fe),Gt?Gt(ct):0)})});for(let ee=0;ee<Bt-1;ee++)for(let ct=0;ct<_t;ct++){let Ut=(ct+1)%_t;V.f(Wt[ee][ct],Wt[ee][Ut],Wt[ee+1][Ut],Wt[ee+1][ct])}},O=11,nt=8,ht=Array.from({length:O},(gt,Lt)=>{let _t=-.4+(Y+.4)*Lt/(O-1),At=j(_t);return Array.from({length:nt},(Gt,Bt)=>{let Ct=2*Math.PI*Bt/nt,Pt=new A(Math.cos(Ct),Math.sin(Ct),0);return lt(At.clone().addScaledVector(Pt,it(_t)*(1+.06*Math.sin(3*Ct+_t))),I(Pt,_t))})});for(let gt=0;gt<O-1;gt++)for(let Lt=0;Lt<nt;Lt++){let _t=(Lt+1)%nt;V.f(ht[gt][Lt],ht[gt][_t],ht[gt+1][_t],ht[gt+1][Lt])}V.f(...ht[O-1]);let rt=[],Et=s.int(3,5);for(let gt=0;gt<Et;gt++){let Lt=Y*s.uniform(.42,.9),_t=s.uniform(0,6.28),At=new A(Math.cos(_t),Math.sin(_t),0),Gt=j(Lt).addScaledVector(At,it(Lt)*.6),Bt=At.clone().add(new A(0,0,s.uniform(.5,1.1))).normalize(),Ct=s.uniform(2,5)*(Y/12)*(1.1-.5*Lt/Y),Pt=Array.from({length:6},(ee,ct)=>Gt.clone().addScaledVector(Bt,Ct*(ct/5)).add(new A(0,0,-.12*Ct*(ct/5)**2))),Wt=it(Lt)*.4;E(Pt,Pt.map((ee,ct)=>Wt*(1-.88*ct/5)+.01),5,(ee,ct)=>I(ct,Pt[ee].z)),rt.push(...Pt.slice(2,5))}let bt=s.int(4,8);for(let gt=0;gt<bt;gt++){let Lt=s.choice(rt),_t=s.uniform(.8,2.2),At=s.uniform(0,6.28),Gt=Array.from({length:6},(Bt,Ct)=>Lt.clone().add(new A(.06*Math.sin(At+Ct)*Ct/5,.06*Math.cos(At+Ct*.8)*Ct/5,-_t*Ct/5)));E(Gt,Gt.map((Bt,Ct)=>.022*(1-.8*Ct/5)+.003),3,Bt=>Jt(e.vine_a,e.vine_b,Bt/5),Bt=>.45*(Bt/5)**1.5)}return V.geo()}{let B=new Qt,F=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[Y,Q,V]of tt){let w=F.map(([K,G])=>Array.from({length:14},(j,it)=>{let lt=2*Math.PI*it/14,I=V*K*(1+.12*Math.sin(3*lt+Y)),E=[Y+I*Math.cos(lt),Q+I*Math.sin(lt),G+.05*Math.sin(5*lt+Q)];return B.v(E,Jt(e.mud,e.moss,Vt(.3+.6*ke(E[0]*.8,E[1]*.8))))})),st=B.v([Y,Q,.52],e.moss);for(let K=0;K<w.length-1;K++)for(let G=0;G<14;G++){let j=(G+1)%14;B.f(w[K][G],w[K][j],w[K+1][j],w[K+1][G])}for(let K=0;K<14;K++)B.f(st,w[w.length-1][K],w[w.length-1][(K+1)%14])}a.add(new St(B.geo(),_e()))}let pt=_e({morph:!0,double:!0}),D=[0,1].map(B=>{let F=new Qt(!1,1),Y=(t?160:300)/2,Q=(K,G,j,it,lt)=>Array.from({length:j},(I,E)=>{let O=2*Math.PI*E/j;return F.v([K[0]+G*Math.cos(O),K[1]+G*Math.sin(O),K[2]],it,[[L[0]*lt,L[1]*lt,0]])}),V=(K,G)=>{for(let j=0;j<K.length;j++){let it=(j+1)%K.length;F.f(K[j],K[it],G[it],G[j])}},w=0;for(;w<Y;){let K,G;if(Z.length&&o.random()<.6){let[rt,Et]=o.choice(Z),bt=o.uniform(0,6.283),gt=o.uniform(1,4.5);K=rt+gt*Math.cos(bt),G=Et+gt*Math.sin(bt)}else{let rt=o.uniform(0,6.283),Et=o.uniform(11.5,48);K=Et*Math.cos(rt),G=Et*Math.sin(rt)}if(Math.hypot(K,G)<11)continue;w++;let j=o.uniform(1.2,3),it=o.uniform(-.25,.25)*j*.5,lt=o.uniform(-.25,.25)*j*.5,I=rt=>[K+it*rt*rt,G+lt*rt*rt,-.3+(j+.3)*rt],E=rt=>.12*j*rt*rt,O=[0,.37,.74].map(rt=>Q(I(rt),.018-.008*rt,3,e.reed,E(rt)));V(O[0],O[1]),V(O[1],O[2]);let nt=[[.75,.012],[.83,.055],[.92,.045]].map(([rt,Et])=>Q(I(rt),Et,5,e.cat,E(rt)));V(nt[0],nt[1]),V(nt[1],nt[2]);let ht=F.v(I(1),e.cat,[[L[0]*E(1),L[1]*E(1),0]]);for(let rt=0;rt<5;rt++)F.f(nt[2][rt],nt[2][(rt+1)%5],ht)}let st=new St(F.geo(),pt);return st.morphTargetInfluences=[0],a.add(st),st});{let B=new Qt;for(let F=0;F<(t?36:60);F++){let Y=o.uniform(0,6.283),Q=o.uniform(11.5,44),V=Q*Math.cos(Y),w=Q*Math.sin(Y),st=o.uniform(.3,.7),K=o.int(0,11),G=o.choice(e.lily),j=B.v([V,w,.04],G),it=Array.from({length:12},(lt,I)=>{let E=2*Math.PI*I/12;return B.v([V+st*Math.cos(E),w+st*.9*Math.sin(E),.04],ge(G,.8))});for(let lt=0;lt<12;lt++)lt!==K&&B.f(j,it[lt],it[(lt+1)%12])}a.add(new St(B.geo(),_e({double:!0})))}let et=new Qt(!1,1),z=new Qt;for(let B=0;B<8;B++){let F=o.uniform(0,6.283),Y=o.uniform(12,36),Q=o.uniform(0,6.283),V=new A(Y*Math.cos(F),Y*Math.sin(F),.05),w=new ce().makeRotationZ(Q),st=new yn(1,1),K=st.attributes.position,G=new ce().makeTranslation(V.x,V.y,V.z).multiply(w).multiply(new ce().makeScale(.22,.3,.13));for(let j=0;j<K.count;j+=3)z.f(...[0,1,2].map(it=>{let lt=new A(K.getX(j+it),K.getY(j+it),K.getZ(j+it)).applyMatrix4(G);return z.v([lt.x,lt.y,lt.z],[.008,.012,.009])}));st.dispose();for(let j of[-1,1]){let it=V.clone().add(new A(j*.09,.12,.12).applyMatrix4(w)),I=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(E=>et.v([it.x+E[0]*.035,it.y+E[1]*.035,it.z+E[2]*.035],[1,1,1],[[0,0,E[2]*.035*(.08-1)]]));for(let[E,O]of[[0,2],[2,1],[1,3],[3,0]])et.f(I[E],I[O],I[4]),et.f(I[O],I[E],I[5])}}a.add(new St(z.geo(),_e()));let J=new St(et.geo(),Vn(e.eye_col,1.8));J.morphTargetInfluences=[0],a.add(J);let W=Array.from({length:Math.floor(3480/20)},(B,F)=>60+F*20),U=[];for(let B=0;B<6;B++)U.push(W.splice(o.int(0,W.length-1),1)[0]);{let B=new Qt;[[70,46,14,22],[95,58,18,30]].forEach(([F,Y,Q,V],w)=>{let st=Jt(e.back_col,u,.55+.2*w);for(let K=0;K<Y;K++){let G=2*Math.PI*(K+s.uniform(-.4,.4))/Y+w*.5,j=[F*Math.cos(G),F*Math.sin(G)],it=[-Math.sin(G),Math.cos(G)],lt=s.uniform(Q,V),I=s.uniform(.35,.9)*(1+.5*w),E=s.uniform(0,6.28),O=s.uniform(-.06,.06),nt=rt=>{let Et=-2+(lt+2)*rt,bt=Math.sin(rt*3+E)*.5+O*Et;return[j[0]+it[0]*bt,j[1]+it[1]*bt,Et]},ht=Array.from({length:6},(rt,Et)=>{let bt=Et/5,gt=I*(1-.5*bt),Lt=Jt(st,u,Vt(bt*bt*.9)),_t=nt(bt);return[B.v([_t[0]-it[0]*gt/2,_t[1]-it[1]*gt/2,_t[2]],Lt),B.v([_t[0]+it[0]*gt/2,_t[1]+it[1]*gt/2,_t[2]],Lt)]});for(let rt=0;rt<5;rt++)B.f(ht[rt][0],ht[rt][1],ht[rt+1][1],ht[rt+1][0]);for(let rt of[-1,1]){let Et=nt(s.uniform(.55,.8)),bt=[Et[0]+it[0]*rt*lt*.16,Et[1]+it[1]*rt*lt*.16,Et[2]+lt*.12],gt=Jt(st,u,.6);B.f(B.v([Et[0],Et[1],Et[2]-.1],gt),B.v([Et[0],Et[1],Et[2]+.1],gt),B.v([bt[0],bt[1],bt[2]+.04],gt),B.v([bt[0],bt[1],bt[2]-.04],gt))}}}),a.add(new St(B.geo(),Ti({fog:!1})))}let R=[];for(let B=0;B<Math.round(14*e.orb_k*(t?.6:1));B++){let F=o.uniform(0,6.283),Y=o.uniform(12,42);R.push({p:[Y*Math.cos(F),Y*Math.sin(F),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[B,F,Y]of M)R.push({p:[B,F,Y+.9],k:1.4,amp:o.uniform(.15,.4)});let C=Sc({list:R,col:e.orb_col,gain:1.2});a.add(C.group);let k=Ci({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let B=o.uniform(0,6.283),F=o.uniform(4,44);return[F*Math.cos(B),F*Math.sin(B),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(k.obj);let X=new Qt(!0);return Ks(X,9.4,.7,(B,F)=>{let Y=Math.hypot(B,F);return Y<.01?1:Ae(0,3,9.4-Y)*(.7+.3*ke(Y*.4,Math.atan2(F,B)*6.4))},e.wash_col,.28*.5),a.add(new St(X.geo(),Qr())),{group:a,floor:.6,update(B){m.update(B);for(let Q of S)Q.m.morphTargetInfluences[0]=In(B,Q.P/2,.15,1,Q.flip);D.forEach((Q,V)=>{Q.morphTargetInfluences[0]=In(B,60,0,1,V)}),_.morphTargetInfluences[0]=In(B,90,0,1,0),_.morphTargetInfluences[1]=In(B,90,0,1,1);let F=Math.sin(B%3600/3600*Math.PI);for(let Q of f)Q.m.rotation.z=Q.s*F;let Y=0;for(let Q of U)Math.abs(B%3600-Q)<3&&(Y=1-Math.abs(B%3600-Q)/3);J.morphTargetInfluences[0]=Y,C.update(B),k.update(B)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...M.map(B=>({pos:[B[0],B[1],B[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),Pi(a)}}}var vu={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},Fn=24,fx=Fn+1.6,dx=160;function $f(i,t){let e=i==="night"?vu.NIGHT:i==="day"?{...Ii(vu.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:vu.SUNSET,n=e.emit,r=n*.75,s=Tn(31),o=Tn(55),a=new Yt,c=[Pn(e.body_az,e.body_el)],l=ji(e,c),h=ue(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(z=>wr(z,e.exposure)),d=ue(e.body_az),m=(()=>{let z=new A(.8,.6,0).normalize();return[z.x,z.y,0]})(),g=e.stone,_=Ri({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let f=z=>fx*(1+.25*(1-Math.exp(z/60))),p=(z,J)=>.12*Math.sin(z*.33)*Math.cos(J*.29)*Ae(8,14,Math.hypot(z,J)),y=(z,J)=>Jt(Jt(e.earth_a,e.earth_b,Vt(cn(z*.12+5,J*.12-3,3)*1.4-.2)),e.moss,Vt((ke(z*.4,J*.4)-.62)*3)*.6);{let z=new Qt,J=[8,10,12,14,16,18,20,22,Fn-1,Fn,Fn+.6,Fn+1.2,Fn+1.6],W={[Fn+.6]:.3,[Fn+1.2]:.15,[Fn+1.6]:-.4},U=72,R=J.map(C=>Array.from({length:U},(k,X)=>{let B=2*Math.PI*X/U,F=C*Math.cos(B),Y=C*Math.sin(B);return z.v([F,Y,W[C]??p(F,Y)],C<=Fn+.01?y(F,Y):Jt(e.bark,e.moss,.5+.3*ke(F*.5,Y*.5)))}));for(let C=0;C<J.length-1;C++)for(let k=0;k<U;k++){let X=(k+1)%U;z.f(R[C][k],R[C+1][k],R[C+1][X],R[C][X])}a.add(new St(z.geo(),_e({flat:!1})))}{let z=new Qt,J=t?28:40,W=t?48:72,U=Array.from({length:J},(R,C)=>{let k=-.4-dx*(C/(J-1))**1.6;return Array.from({length:W},(X,B)=>{let F=2*Math.PI*B/W,Y=f(k)*(1+.04*Math.sin(14*F+.8*Math.sin(.05*k))+.025*Math.sin(5*F+.02*k)),Q=Math.sin(14*F+.8*Math.sin(.05*k)),V=Jt(e.bark,e.bark_hi,Vt(.5+.5*Q)*.5);V=Jt(V,e.bark_hi,.4*Math.max(0,Math.cos(F-d))),V=Jt(V,e.moss,Vt(1+k/25)*Vt((ke(F*3,k*.15)-.4)*2.5)*.8);let w=Math.abs(Math.sin(7*F+1.5*Math.sin(.04*k+3*F)));return V=Jt(V,e.vein,Vt(1-w*7)*(.4+.6*ke(k*.05,F*2))*.9),z.v([Y*Math.cos(F),Y*Math.sin(F),k],Jt(V,ge(u,.6),Vt((-k-15)/110)**1.2))})});for(let R=0;R<J-1;R++)for(let C=0;C<W;C++){let k=(C+1)%W;z.f(U[R][C],U[R+1][C],U[R+1][k],U[R][k])}a.add(new St(z.geo(),_e({emit:.3,flat:!1})))}let M=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([z,J],W)=>{let U=new Qt(!0),R=f(z)-.3,C=[R,R+4,R+10,R+20,R+32,R+46,R+64,R+84,R+106,150],k=64,X=C.map(Y=>Array.from({length:k},(Q,V)=>{let w=2*Math.PI*V/k,st=Y*Math.cos(w),K=Y*Math.sin(w),G=J*(.55+.45*cn(st*.03+W*7,K*.03,3))*Ae(0,6,Y-R);return U.v([st,K,z],[...Jt(e.sea_col,u,Ae(60,150,Y)),G])}));for(let Y=0;Y<C.length-1;Y++)for(let Q=0;Q<k;Q++){let V=(Q+1)%k;U.f(X[Y][Q],X[Y+1][Q],X[Y+1][V],X[Y][V])}let B=new an({vertexColors:!0,transparent:!0,depthWrite:!1,side:Le,fog:!1,toneMapped:!1});B.color.setScalar(1.7);let F=new St(U.geo(),B);F.renderOrder=2,a.add(F),M.push({m:F,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Sr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let b=new Qt,L=new Qt,P=[];for(let z of[0,60,120,180,240,300]){let J=ue(z),W=12.5,U=o.uniform(5,8),R=1.8,C=1.2,k=W*Math.cos(J),X=W*Math.sin(J),B=-.4,F=J-Math.PI/2,Y=Math.cos(F),Q=Math.sin(F),V=o.choice(g),w=o.uniform(0,50),st=new Map,K=(lt,I,E)=>{let O=`${lt},${I},${E}`,nt=st.get(O);nt||(nt=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],st.set(O,nt));let ht=lt*R,rt=I*C,Et=(E+.5)*U;if(Et>U*.5){let gt=1-.18*((Et-U*.5)/(U*.5));ht*=gt,rt*=gt}ht+=nt[0],rt+=nt[1];let bt=Et+nt[2];return b.v([k+ht*Y-rt*Q,X+ht*Q+rt*Y,B+bt],Ai(V,bt/U,ht,bt*.7,w,e.moss))},G=4,j=lt=>-.5+lt/G,it=lt=>{for(let I=0;I<G;I++)for(let E=0;E<G;E++)b.f(K(...lt(I,E)),K(...lt(I+1,E)),K(...lt(I+1,E+1)),K(...lt(I,E+1)))};it((lt,I)=>[j(lt),-.5,j(I)]),it((lt,I)=>[j(I),.5,j(lt)]),it((lt,I)=>[-.5,j(I),j(lt)]),it((lt,I)=>[.5,j(lt),j(I)]),it((lt,I)=>[j(I),j(lt),.5]);for(let[lt,I,E]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let O=-C/2-.02,nt=U*lt,ht=k-O*Q,rt=X+O*Y;L.f(...[[-I/2,-E/2],[I/2,-E/2],[I/2,E/2],[-I/2,E/2]].map(([Et,bt])=>L.v([ht+Et*Y,rt+Et*Q,B+nt+bt],[1,1,1])))}P.push([k,X,U-.4])}a.add(new St(b.geo(),_e()),new St(L.geo(),Vn(e.rune_col,1.4*r)));let v=(z,J,W,U,R,C,k,X,B=!0)=>{let F=Array.from({length:k},(Q,V)=>{let w=Math.PI/2*V/k,st=V/k;return Array.from({length:C},(K,G)=>{let j=2*Math.PI*G/C,it=.1*st*st*R;return z.v([J[0]+W*Math.cos(w)*Math.cos(j),J[1]+U*Math.cos(w)*Math.sin(j),J[2]+R*Math.sin(w)],X(st,j),B?[[m[0]*it,m[1]*it,0]]:void 0)})}),Y=z.v([J[0],J[1],J[2]+R],X(1,0),B?[[m[0]*.1*R,m[1]*.1*R,0]]:void 0);for(let Q=0;Q<k-1;Q++)for(let V=0;V<C;V++){let w=(V+1)%C;z.f(F[Q][V],F[Q][w],F[Q+1][w],F[Q+1][V])}for(let Q=0;Q<C;Q++)z.f(F[k-1][Q],F[k-1][(Q+1)%C],Y)},T=(z,J,W,U,R)=>{let C=new Qt(!1,1);for(let[X,B,F,Y]of z){let Q=o.uniform(.85,1.15),V=p(X,B)-.2,w=(st,K)=>ge(Jt(J,W,Vt(st*(.75+.25*Math.cos(K-d)))**.9),Q);for(let st=0;st<Y;st++){let K=o.uniform(0,6.283),G=st?o.uniform(0,.6)*F:0,j=F*o.uniform(.7,1);v(C,[X+G*Math.cos(K),B+G*Math.sin(K),V],j,j,j*.85,U,R,w)}}let k=new St(C.geo(),_e({flat:!1,morph:!0}));return k.morphTargetInfluences=[0],a.add(k),k},N=[];for(let z=0;N.length<(t?40:70)&&z<3e3;z++){let J=o.uniform(0,2*Math.PI),W=o.uniform(11.5,Fn-1.5);if(J*180/Math.PI%360>255&&J*180/Math.PI%360<285&&W>15)continue;let U=W*Math.cos(J),R=W*Math.sin(J);P.some(([C,k])=>Math.hypot(U-C,R-k)<2.8)||N.push([U,R,o.uniform(1,2.2),o.int(2,4)])}let x=T(N,e.bush_lo,e.bush_hi,12,3),S=Array.from({length:30},(z,J)=>{let W=2*Math.PI*(J+o.uniform(-.3,.3))/30,U=Fn-.6+o.uniform(-.8,.8);return[U*Math.cos(W),U*Math.sin(W),o.uniform(2,3.5),2]}),Z=T(S,e.hedge_lo,e.hedge_hi,16,4);{let z=new Qt;[62,85,112,140].forEach((J,W)=>{let U=1+.25*W;for(let R=0;R<(t?12:20);R++){let C=2*Math.PI*(R+s.uniform(-.4,.4))/20+W*.4,k=J+s.uniform(-6,6);for(let X=0;X<2;X++){let B=X?s.uniform(-9,9):0,F=k*Math.cos(C)-B*Math.sin(C),Y=k*Math.sin(C)+B*Math.cos(C),Q=s.uniform(9,16)*U*(X?.7:1),V=s.uniform(28,46)*U*(X?.75:1),w=.35+.15*W,st=s.uniform(.85,1.15);v(z,[F,Y,-30],Q,Q,V,14,7,K=>Jt(ge(e.can_col,st),ge(u,.7),Vt(w+.25*K)),!1)}}}),a.add(new St(z.geo(),_e({emit:.85,flat:!1})))}let tt=[];for(let z=0;z<Math.round(18*e.orb_k*(t?.6:1));z++){let J=o.uniform(0,6.283),W=10.5+(Fn-8.5)*Math.sqrt(o.random());tt.push({p:[W*Math.cos(J),W*Math.sin(J),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[z,J,W]of P)tt.push({p:[z,J,W+.9],k:1.4,amp:o.uniform(.15,.4)});let q=Sc({list:tt,col:e.orb_col,gain:1.2});a.add(q.group);let at=Math.round(160*e.fire_k*(t?.5:1)),ot=Math.round(40*e.fire_k*(t?.5:1)),pt=0,D=Ci({r:o,n:at+ot,at:()=>{if(pt++<at){let W=o.uniform(0,6.283),U=(Fn+4)*Math.sqrt(o.random());return[U*Math.cos(W),U*Math.sin(W),.3+8.7*o.random()**1.6]}let z=o.uniform(0,6.283),J=o.uniform(Fn+2,Fn+14);return[J*Math.cos(z),J*Math.sin(z),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});at+ot>0&&a.add(D.obj);let et=new Qt(!0);return Ks(et,9.4,.7,(z,J)=>{let W=Math.hypot(z,J);return W<.01?1:Ae(0,3,9.4-W)*(.7+.3*ke(W*.4,Math.atan2(J,z)*6.4))},e.wash_col,.28*.5),a.add(new St(et.geo(),Qr())),{group:a,floor:.6,update(z){_.update(z),x.morphTargetInfluences[0]=In(z,60,.15,1,1),Z.morphTargetInfluences[0]=In(z,90,.15,1,1);let J=Math.sin(z%3600/3600*Math.PI);for(let W of M)W.m.rotation.z=W.s*J;q.update(z),D.update(z)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...P.slice(0,4).map(z=>({pos:[z[0],z[1],z[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),Pi(a)}}}var px={forest:qf,plains:Yf,swamp:Zf,worldtree:$f,castle:Xf};function Eu(i,t,e){let n=px[i];return n?n(t,e):null}var It=(i,t)=>i+Math.random()*(t-i),mx=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function js(i,t=!1){let e=new An(i);return e.colorSpace=on,t&&(e.magFilter=Rn,e.minFilter=Rn,e.generateMipmaps=!1),e}function qo(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),js(e)}function Kf(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let r=0;r<n.length;r++)e.save(),e.rotate(r/n.length*Math.PI*2),e.fillText(n[r],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let r=0;r<=5;r++){let s=r*4*Math.PI/5-Math.PI/2,o=Math.cos(s)*180,a=Math.sin(s)*180;r?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),js(t)}function gx(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),js(e)}function _x(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let r=n*56,s=r+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,s,c,l),t.arc(512,512,Math.max(r,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=js(i);return e.anisotropy=4,e}function yx(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,r=e?Number(e[2]):20,s=1024/Math.max(n,r),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*s}" height="${r*s}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*s,c.height=r*s,c.getContext("2d").drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(js(c),n/r)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function xx(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let r=document.createElement("canvas");r.width=2048,r.height=1152;let s=r.getContext("2d");s.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=s.getImageData(0,a,2048,c-a).data,h=0,u=0,d=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],d+=l[g+2],m++;return new zt(h/m/255,u/m/255,d/m/255).convertSRGBToLinear()};t(js(r),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var Mx={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},bx=["forest","swamp","worldtree"];function vx(i,t={}){let e,n=!!t.lite;try{e=new Ns({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let r=!1,s=()=>r?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(s()),e.toneMapping=Bo,e.toneMappingExposure=1.15;let o=new Hs;o.fog=new Qa(1709616,20,58);let a=new vn(55,16/9,.05,200),c=new A(0,1.75,7.2),l=new A(0,1.45,0);a.position.copy(c),o.add(a);let h=new zs(16777215,2236962,1),u=new Yi(16777215,1);o.add(h,u);let d=new mi(16777215,6,9,2);d.position.set(0,3,7.5),o.add(d);let m=new Yi(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new Yt;o.add(g);let _=new an({color:16777215,fog:!1,side:Le}),f=new St(new Ee(70,70,66,48,1,!0,Math.PI-.95,1.9),_);f.scale.set(-1,1,1),f.position.set(0,13,6),g.add(f);let p=new Te({color:2767396,roughness:1}),y=new St(new Do(90,48),p);y.rotation.x=-Math.PI/2,y.position.y=-.02,g.add(y);let M=new Te({color:5208634,roughness:.9,flatShading:!0}),b=2600,L=new Fs(new Nn(.05,.42,3),M,b);{let $=new ce,dt=new En,xt=new wn,mt=new A,Rt=new A,Dt=new zt;for(let kt=0;kt<b;kt++){let xe=9.9+Math.pow(Math.random(),.7)*30,ae=Math.random()*Math.PI*2;mt.set(Math.cos(ae)*xe,.18,Math.sin(ae)*xe-1),xt.set(It(-.25,.25),Math.random()*3,It(-.25,.25)),dt.setFromEuler(xt);let Ht=It(.7,1.6);Rt.set(Ht,Ht*It(.8,1.5),Ht),$.compose(mt,dt,Rt),L.setMatrixAt(kt,$),L.setColorAt(kt,Dt.setHSL(It(.22,.32),It(.35,.6),It(.3,.5)))}}g.add(L);let P=new Yt;g.add(P);let v=new Te({color:1981226,roughness:1,flatShading:!0}),T=new Te({color:3811868,roughness:1}),N=new Te({color:6051942,roughness:1,flatShading:!0});function x($){P.clear();let dt=bx.includes($),xt=dt?70:34;for(let mt=0;mt<xt;mt++){let Rt=It(Math.PI*1.08,Math.PI*1.92),Dt=It(24,48),kt=Math.cos(Rt)*Dt,xe=Math.sin(Rt)*Dt-1;if(dt){let ae=It(6,13),Ht=new Yt,wt=new St(new Ee(.25,.4,ae*.3,6),T);wt.position.y=ae*.15,Ht.add(wt);for(let Se=0;Se<3;Se++){let mn=new St(new Nn(ae*(.32-Se*.07),ae*.5,7),v);mn.position.y=ae*(.42+Se*.2),Ht.add(mn)}Ht.position.set(kt,0,xe),P.add(Ht)}else{let ae=new St(new yn(It(.8,2.6),0),Math.random()<.5?N:v);ae.position.set(kt,.3,xe),ae.scale.y=It(.5,.9),ae.rotation.y=Math.random()*3,P.add(ae)}}}let S=new St(new Do(9.5,64),new Te({map:_x(),roughness:.92,metalness:.02}));S.rotation.x=-Math.PI/2,g.add(S);let Z=new St(new zn(9.5,.18,8,96),new Te({color:4933206,roughness:.85}));Z.rotation.x=Math.PI/2,Z.position.y=.05,g.add(Z);let tt=new St(new qi(9,9),new an({map:Kf("#a98bff"),transparent:!0,opacity:.38,blending:fn,depthWrite:!1}));tt.rotation.x=-Math.PI/2,tt.position.y=.03,tt.scale.x=-1,o.add(tt);let q=new Te({color:5919846,roughness:.9}),at=qo("rgba(255,170,80,1)","rgba(255,120,40,0)"),ot=[];for(let $ of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let dt=$-Math.PI/2,xt=Math.cos(dt)*10.4,mt=Math.sin(dt)*10.4-1.5,Rt=new Yt,Dt=new St(new Ee(.42,.5,4.2,10),q);Dt.position.y=2.1;let kt=new St(new en(1.2,.3,1.2),q);kt.position.y=4.35;let xe=new St(new Ee(.42,.22,.3,10),new Te({color:2959923,metalness:.6,roughness:.4}));xe.position.y=4.65;let ae=new jn(new Zn({map:at,color:16756832,blending:fn,depthWrite:!1,transparent:!0}));ae.position.y=5.05,ae.scale.set(1.3,1.8,1);let Ht=new mi(16751178,10,14,2);Ht.position.y=5.1,Rt.add(Dt,kt,xe,ae,Ht),Rt.position.set(xt,0,mt),g.add(Rt),ot.push({light:Ht,flame:ae,base:1,phase:Math.random()*10})}let pt=260,D=new be,et=new Float32Array(pt*3),z=new Float32Array(pt);for(let $=0;$<pt;$++)et[$*3]=It(-14,14),et[$*3+1]=It(0,7),et[$*3+2]=It(-12,6),z[$]=Math.random()*100;D.setAttribute("position",new De(et,3));let J=new gr({size:.12,map:qo(),transparent:!0,depthWrite:!1,blending:fn,color:16777215,sizeAttenuation:!0});g.add(new _r(D,J));let W=qo(),U=qo("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),R=qo("rgba(150,120,255,1)","rgba(120,80,255,0)"),C=new Map;function k($,dt){let xt=new Yt,mt=null,Rt=null,Dt=null,kt=1.95;dt.svg?(kt=4.6,Dt=new Zn({transparent:!0,alphaTest:.05}),Rt=new jn(Dt),Rt.center.set(.5,0),Rt.scale.set(kt*1.33,kt,1),yx(dt.svg,(wt,Se)=>{Dt.map=wt,Dt.needsUpdate=!0,Rt.scale.set(kt*Se,kt,1)}),xt.add(Rt)):(mt=Rf(fu(dt.character??"wizard"),$==="me"?"me":$.startsWith("ally:")?"ally":"opp",W,dt.staff),kt=mt.height,xt.add(mt.root));let xe=new St(new qi(kt*.7,kt*.32),new an({map:U,transparent:!0,depthWrite:!1}));if(xe.rotation.x=-Math.PI/2,xe.position.y=.02,xt.add(xe),$!=="me"){let wt=new St(new qi(kt*1.1,kt*1.1),new an({map:Kf($==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:fn,depthWrite:!1}));wt.rotation.x=-Math.PI/2,wt.position.y=.04,wt.name="circle",xt.add(wt)}let ae=new jn(new Zn({map:R,blending:fn,depthWrite:!1,transparent:!0,opacity:0}));ae.scale.set(kt*1.2,kt*1.2,1),ae.position.y=kt*.5,xt.add(ae),o.add(xt);let Ht={key:$,group:xt,model:mt,sprite:Rt,spriteMat:Dt,height:kt,ko:!1,flame:null,aura:ae,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,eyesFlashUntil:0,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100}};return C.set($,Ht),Ht}function X(){for(let $ of C.values())o.remove($.group),$.group.traverse(dt=>{let xt=dt;xt.geometry?.dispose?.(),xt.material?.dispose?.()});C.clear()}let B=new Yt;a.add(B);let F=new A(1.08,-.52,-1.6),Y=new A(1.14,-.6,-1.6);B.scale.setScalar(.72);let Q=F.clone(),V=new Te({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),w=new Te({color:4020950,roughness:.9,flatShading:!0,side:Le}),st=new Te({color:15778970,roughness:.75,flatShading:!0}),K=new Yt;B.add(K);let G=$i("verdant",W),j="verdant";K.add(G.group);let it=new mi(G.color,.6,4,2);it.position.y=xr,K.add(it);function lt($){$!==j&&(j=$,K.remove(G.group),G.group.traverse(dt=>{dt.geometry?.dispose?.()}),G=$i($,W),K.add(G.group),it.color.copy(G.color))}{let $=(Rt,Dt,kt,xe,ae,Ht)=>{let wt=new St(Rt,Dt);return wt.position.set(xe,ae,Ht),kt.add(wt),wt},dt=$(new Wr(.046,.075,4,10),st,K,.066,-.004,.014);dt.scale.set(.82,1,1.12),dt.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((Rt,Dt)=>{let kt=.05-Dt*.002,xe=$(new zn(kt,.019-Dt*.001,6,14,Math.PI*1.32),st,K,0,Rt,0);xe.rotation.x=-Math.PI/2;let ae=Math.PI*1.32;$(new Ne(.019-Dt*.001,6,5),st,K,Math.cos(ae)*kt,Rt,-Math.sin(ae)*kt)}),$(new Wr(.021,.075,4,8),st,K,.022,.074,.05).rotation.set(.3,0,1.25);let mt=new Yt;mt.position.set(.09,-.08,.03),mt.rotation.set(-.55,0,.62),B.add(mt),$(new Ee(.05,.062,.2,10),st,mt,0,-.08,0),$(new Ee(.1,.16,.95,10,1,!0),w,mt,0,-.6,0),$(new zn(.1,.028,6,14),V,mt,0,-.14,0).rotation.x=Math.PI/2}let I=new mi(16777215,1.4,3,2);I.position.set(.3,.3,-.5),a.add(I);let E={wizard:{sleeve:3433416,skin:15916495},witch:{sleeve:8017597,skin:15654104},goblin:{sleeve:8015404,skin:8688447},knight:{sleeve:14077887,skin:14999246},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},O=-1e9,nt="ready",ht=0,rt=900,Et=()=>{nt==="gone"&&(nt="growing",ht=performance.now())},bt=0,gt=0,Lt=null,_t=!1,At={uTime:{value:0},uAmount:{value:0},uC0:{value:new zt},uC1:{value:new zt},uC2:{value:new zt},uC3:{value:new zt}},Gt=new St(new qi(1,1),new Yn({uniforms:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:fn,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Gt.renderOrder=30,Gt.frustumCulled=!1,a.add(Gt);function Bt(){let dt=Math.tan(Vs.degToRad(a.fov/2))*1.2,xt=dt*.55;Gt.scale.set(dt*a.aspect*2.05,xt,1),Gt.position.set(0,-dt+xt/2,-1.2)}function Ct($){let dt={h:0,s:0,l:0};$.getHSL(dt),At.uC0.value.setHSL(dt.h,1,.82),At.uC1.value.setHSL(dt.h,1,.6),At.uC2.value.setHSL(dt.h,.95,.45),At.uC3.value.setHSL((dt.h+.03)%1,.9,.22)}let Pt=new A;function Wt($,dt="chest"){if($==="me")return dt==="staff"||dt==="head"?(G.gem.getWorldPosition(Pt),Pt.clone()):a.localToWorld(new A(It(-.15,.15),-.1,-1.4));let xt=C.get($);if(!xt)return new A(0,1.4,-3);if(xt.model&&dt==="staff")return xt.model.crystal.getWorldPosition(Pt),Pt.clone();let mt=xt.group.position.clone(),Rt=xt.height*xt.group.scale.y;return $==="boss"&&dt==="mouth"?mt.add(new A(-xt.height*.55,xt.height*.62,.3)):mt.add(new A(0,Rt*(dt==="head"?.85:.6),0))}let ee=[],ct=0;function Ut($,dt,xt={}){if(n&&ct++&1)return;let mt=new jn(new Zn({map:W,color:dt,blending:xt.solid?bi:fn,depthWrite:!1,transparent:!0,opacity:xt.opacity??1}));mt.position.copy($),mt.scale.setScalar(xt.size??.25),o.add(mt),ee.push({sprite:mt,vel:xt.vel??new A,life:0,max:xt.life??.6,grow:xt.grow??0,gravity:xt.gravity??0})}function vt($,dt,xt=26,mt=3.2,Rt=.22){for(let Dt=0;Dt<xt;Dt++){let kt=new A(It(-1,1),It(-.6,1.2),It(-1,1)).normalize().multiplyScalar(It(mt*.4,mt));Ut($,dt,{vel:kt,size:It(Rt*.6,Rt*1.4),life:It(.4,.9),gravity:-3})}Ut($,dt,{size:.6,grow:6,life:.35,opacity:.9})}function Tt($,dt,xt=1){let mt=$.group.position,Rt=$.model?.45:$.height*.35;for(let Dt=0;Dt<xt;Dt++){let kt=$.group.scale.y;Ut(new A(mt.x+It(-Rt,Rt)*kt,mt.y+It(.05,$.height*.45)*kt,mt.z+It(-Rt,Rt)*.5*kt),dt,{size:It(.35,.7)*kt,vel:new A(It(-.1,.1),It(1.4,2.6),0),life:It(.35,.65),grow:-.9,opacity:.75,solid:!0}),Ut(new A(mt.x+It(-Rt,Rt)*.6*kt,mt.y+It(.05,$.height*.35)*kt,mt.z),dt,{size:It(.3,.5)*kt,vel:new A(0,It(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Ut(new A(mt.x+It(-Rt,Rt)*kt,mt.y+It(.2,$.height*.9)*kt,mt.z),16777215,{size:It(.05,.1)*kt,vel:new A(0,It(1.5,3),0),life:.5})}}let Xt=[];function $t($){for(let xt=0;xt<2;xt++){let mt=[],Rt=$.clone().add(new A(It(-1.5,1.5),9,It(-1,1)));for(let kt=0;kt<=12;kt++){let xe=Rt.clone().lerp($,kt/12);kt>0&&kt<12&&xe.add(new A(It(-.45,.45),It(-.2,.2),It(-.3,.3))),mt.push(xe)}let Dt=new rc(new be().setFromPoints(mt),new Po({color:xt?16777215:10475775,transparent:!0,blending:fn,depthWrite:!1}));o.add(Dt),Xt.push({line:Dt,life:0});for(let kt=0;kt<mt.length-1;kt++){let xe=mt[kt].distanceTo(mt[kt+1]);for(let ae=0;ae<xe;ae+=.09)Ut(mt[kt].clone().lerp(mt[kt+1],ae/xe),xt?16777215:9425151,{size:xt?.12:.3,life:.28,opacity:xt?1:.7})}}let dt=new mi(12576511,60,16,2);dt.position.copy($).add(new A(0,2,1)),o.add(dt),setTimeout(()=>o.remove(dt),160),vt($,12576511,30,4,.18)}let fe=[];function Ve($,dt,xt="#ffd479"){let mt=new jn(new Zn({map:gx(dt,xt),transparent:!0,depthWrite:!1,depthTest:!1}));mt.position.copy(Wt($,"head")).add(new A(It(-.3,.3),.4,.3));let Rt=$==="me"?.9:1.3;mt.scale.set(Rt,Rt/2,1),mt.renderOrder=10,o.add(mt),fe.push({sprite:mt,life:0})}let rn=document.createElement("div");rn.className="arena3d-hit",document.body.append(rn);function ye($="255,40,60",dt=""){rn.style.setProperty("--hit",$),rn.className="arena3d-hit",rn.offsetWidth,rn.className=`arena3d-hit on ${dt}`}let sn=0,Gn=$=>{mx()||(sn=Math.max(sn,$))},$n=[],Tr=new Set,_i=new Map;function Qs($){let dt=_i.get($);if(dt)return dt;let xt=document.createElement("canvas");xt.width=xt.height=128;let mt=xt.getContext("2d"),Rt=mt.createRadialGradient(64,64,0,64,64,64);Rt.addColorStop(0,"#ffffff"),Rt.addColorStop(.22,$),Rt.addColorStop(.5,`${$}88`),Rt.addColorStop(1,`${$}00`),mt.fillStyle=Rt,mt.fillRect(0,0,128,128);let Dt=new An(xt);return Dt.colorSpace=on,_i.set($,Dt),Dt}function Yo($,dt,xt,mt,Rt,Dt,kt=!1){let xe=Qs(mt),ae=new jn(new Zn({map:xe,transparent:!0,depthWrite:!1,blending:fn}));ae.scale.set(Rt*.42,Rt*.42,1),ae.position.copy($),ae.renderOrder=5,o.add(ae);let Ht=kt?$.clone().lerp(dt,.5).add(new A(se(.28,$.clone().lerp(dt,.5).z)-$.clone().lerp(dt,.5).x,-.15,0)):$.clone().lerp(dt,.5).add(new A(It(-.6,.6),1.2+$.distanceTo(dt)*.08,0));return new Promise(wt=>$n.push({sprite:ae,from:$,to:dt,mid:Ht,t:0,dur:Dt,color:new zt(mt),size:Rt,done:wt,trailAt:0,incoming:kt}))}let Qi="battle",tr="",es="",Ce=null,er=new Map,Rr=[],yi=new Yi(16777215,1);yi.visible=!1,o.add(yi,yi.target);let Rc=($,dt)=>new A($[0],$[2]-dt,-$[1]);function Ac($,dt){Ce&&(o.remove(Ce.group),t.preview||Ce.dispose(),Ce=null);for(let mt of Rr)o.remove(mt);Rr.length=0;let xt=`${$}-${dt}-${n}`;try{Ce=t.preview&&er.get(xt)||Eu($,dt,n)}catch(mt){console.warn("3D arena failed, using the classic one",mt),Ce=null}if(Ce&&t.preview&&er.set(xt,Ce),g.visible=!Ce,tt.position.y=Ce?.1:.03,yi.visible=!!Ce,!Ce){es="";return}Ce.group.rotation.x=-Math.PI/2,Ce.group.position.y=-Ce.floor,o.add(Ce.group),Ce.group.traverse(mt=>{mt.name==="centre-pattern"&&(mt.visible=!1)});for(let mt of n?Ce.lights.slice(0,2):Ce.lights){let Rt=new mi(new zt(...mt.color),mt.intensity*8,mt.dist,2);Rt.position.copy(Rc(mt.pos,Ce.floor)),Rt.userData.base=Rt.intensity,Rt.userData.flicker=mt.flicker??0,o.add(Rt),Rr.push(Rt)}}function H($){let dt=$.key.dir;yi.color.setRGB(...$.key.color),yi.intensity=$.key.intensity*.35,yi.position.set(dt[0]*50,dt[2]*50,-dt[1]*50),yi.target.position.set(0,0,0),h.color.setRGB(...$.ambient.sky),h.groundColor.setRGB(...$.ambient.ground),h.intensity=$.ambient.intensity,u.intensity=0,m.intensity*=.45,d.intensity*=.5;let xt=o.fog;xt.color.setRGB(...$.fog.color),xt.near=$.fog.near,xt.far=$.fog.far,e.setClearColor(xt.color)}let ft=0,yt=0,Mt=0,ut=new wn,Ft=new wn,Zt=!1,Kt=!1,jt=new zt(16777215),te=null;function se($,dt){let xt=c.z-dt,mt=Math.tan(Vs.degToRad(a.fov/2))*xt;return $*mt*a.aspect}function ne(){if(!te)return;let $=te,dt=C.get("opp");dt?.model&&dt.group.scale.setScalar(1.3),dt&&dt.group.position.set(se(a.aspect<1?.08:$.layout==="deck"?.36:.46,-2.2),0,-2.2);let xt=C.get("boss");xt&&xt.group.position.set(se(a.aspect<1?.15:.5,-5.5),0,-5.5),$.allies.forEach((Rt,Dt)=>{let kt=C.get(`ally:${Rt.id}`);kt&&kt.group.position.set(se(-.36+Dt*.13,-.6-Dt*1.1),0,-.6-Dt*1.1)});let mt=(xt??dt)?.group.position;for(let[Rt,Dt]of C){if(!Dt.model)continue;let kt=Rt==="opp"?c:mt??new A(0,0,-3);Dt.model.root.rotation.y=Math.atan2(kt.x-Dt.group.position.x,kt.z-Dt.group.position.z)}}function Ie($){te=$,Qi=$.layout,X();let dt=E[fu($.me.character??"wizard")]??E.wizard;w.color.set(dt.sleeve),st.color.set(dt.skin),st.metalness=$.me.character==="knight"?.12:0,ns(),lt($.me.staff??"verdant"),_t=!1,B.visible=!0,nt="ready",Lt=null,At.uAmount.value=0,Gt.visible=!1,$.opp&&k("opp",$.opp),$.boss&&k("boss",$.boss);for(let xt of $.allies)k(`ally:${xt.id}`,xt);ne(),Fe($)}function Fe($){let dt=Mx[$.time];h.color.set(dt.sky),h.groundColor.set(dt.ground),h.intensity=dt.hemi*1.25,m.intensity=$.time==="night"?1.3:$.time==="sunset"?1:.7,u.color.set(dt.sun),u.intensity=dt.sunInt,u.position.set(...dt.sunPos),d.intensity=$.time==="night"?9:5;for(let xt of ot)xt.base=dt.torch;J.color.set(dt.motes),jt=new zt(dt.spriteTint),tr!==$.bgKey&&(tr=$.bgKey,Ac($.bgKey.split("-")[0],$.time)),Ce?H(Ce):es!==$.bgKey&&(es=$.bgKey,o.fog.near=20,o.fog.far=58,x($.bgKey.split("-")[0]),xx($.bgSvg,(xt,mt,Rt)=>{_.map?.dispose(),_.map=xt,_.needsUpdate=!0,o.fog.color.copy(mt).lerp(Rt,.35),p.color.copy(mt).multiplyScalar(.9),M.color.copy(mt).lerp(new zt(5212730),.45).multiplyScalar(1.15),v.color.copy(mt).lerp(new zt(1522212),.5),e.setClearColor(Rt)}))}let Ge=new Nt,Ke=new Nt,we=.32,ie=.13,Me={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},Pe=$=>{$.pointerType!=="mouse"||$.buttons||$.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||Ge.set($.clientX/innerWidth*2-1,$.clientY/innerHeight*2-1)};addEventListener("pointermove",Pe,{passive:!0});let Je={yaw:0,pitch:0,at:0,live:0},nr=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?-1:1,On=()=>((screen.orientation?.angle??window.orientation??0)%360+360)%360,Ar=$=>{let dt=$.rotationRate;if(!dt||dt.beta===null||dt.gamma===null||!eo)return;let xt=performance.now(),mt=Je.at?Math.min(.1,(xt-Je.at)/1e3):0;Je.at=xt,Je.live=xt;let Rt=On(),Dt=$.accelerationIncludingGravity,kt=Dt&&Dt.x!==null&&Dt.y!==null&&Dt.z!==null?Math.hypot(Dt.x,Dt.y,Dt.z):0,xe=kt>4?(dt.beta*Dt.x+dt.gamma*Dt.y+(dt.alpha??0)*Dt.z)/kt*nr:Rt===90?dt.beta:Rt===270?-dt.beta:Rt===180?-dt.gamma:dt.gamma,ae=Rt===90?-dt.gamma:Rt===270?dt.gamma:Rt===180?-dt.beta:dt.beta,Ht=Math.exp(-mt/2.2);Je.yaw=(Je.yaw+xe*mt)*Ht,Je.pitch=(Je.pitch+ae*mt)*Ht,Ge.set(Math.max(-1,Math.min(1,-Je.yaw/16)),Math.max(-1,Math.min(1,-Je.pitch/14)))},je=matchMedia("(pointer: coarse)").matches&&"DeviceMotionEvent"in window,ti=()=>{removeEventListener("touchend",ti);let $=DeviceMotionEvent;$.requestPermission&&$.requestPermission().then(dt=>{dt==="granted"&&addEventListener("devicemotion",Ar)}).catch(()=>{})};je&&(DeviceMotionEvent.requestPermission?addEventListener("touchend",ti,{passive:!0}):addEventListener("devicemotion",Ar));function ns(){let $=Qi==="deck"?Y:F,dt=Qi==="deck"?.56:.72;if(a.aspect>=1.2){Q.copy($),B.scale.setScalar(dt);return}let xt=Math.tan(Vs.degToRad(a.fov/2))*-$.z,mt=xt*a.aspect;Q.set(mt*.78,-xt*.62,$.z),B.scale.setScalar(dt*Math.max(.5,Math.min(1,a.aspect*.9)))}function hn(){let $=i.clientWidth||innerWidth,dt=i.clientHeight||innerHeight;e.setSize($,dt,!1),a.aspect=$/dt,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),ne(),Bt(),ns()}addEventListener("resize",hn);let is=0,Zo=0,to=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!eo||i.clientWidth===is&&i.clientHeight===Zo||(is=i.clientWidth,Zo=i.clientHeight,hn())}):null;to?.observe(i);let Jf=new zt(6974072),jf=new zt(16722474),wu=new zt(9428223),Qf=new zt(2784511),Su=new zt(16738842);function td($,dt){let xt=dt<$.hurtUntil,mt=dt<$.frostUntil,Rt=dt<$.burnUntil;if($.model&&$.ko){for(let Dt of $.model.materials)Dt.mat.color.copy(Dt.color).lerp(Jf,.55),Dt.mat.emissive.setRGB(0,0,0);return}if($.model){if(mt!==$.frosted){$.frosted=mt;for(let Dt of $.model.materials)Dt.mat.opacity=mt?.5:1,Dt.mat.depthWrite=!mt}for(let Dt of $.model.materials)Dt.mat.color.copy(Dt.color),mt&&Dt.mat.color.lerp(wu,.75),xt?(Dt.mat.emissive.copy(jf),Dt.mat.emissiveIntensity=.6):mt?(Dt.mat.emissive.copy(Qf),Dt.mat.emissiveIntensity=.45):Rt?(Dt.mat.color.lerp(Su,.35),Dt.mat.emissive.copy(Su),Dt.mat.emissiveIntensity=.55+.3*Math.sin(dt/40)):(Dt.mat.emissive.copy(Dt.emissive),Dt.mat.emissiveIntensity=1)}else $.spriteMat&&($.spriteMat.color.copy(xt?new zt(1,.35,.35):mt?wu:Rt?new zt(1,.7,.5):jt),$.spriteMat.opacity=mt?.6:$.ko?$.spriteMat.opacity:1)}let eo=!1,Cc=0,$o=performance.now(),Qe=0,Pc=!1,rs=0,Ko=0,no=0,Ic=0;function ed($){if(r||document.hidden)return;if(Ic<45){Ic++;return}if(Ko++,no+=$,no<2500)return;let dt=Ko*1e3/no;Ko=0,no=0,!(dt>=(n?22:34))&&(n?(r=!0,e.setPixelRatio(s()),hn()):io.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(dt),lowRes:r}})))}function Tu($){Cc=requestAnimationFrame(Tu),t.preview||ed($-$o);let dt=Math.min(1,Math.max(0,($-$o)/1e3)),xt=Math.min(.05,dt);$o=$,Qe+=xt;let mt=performance.now(),Rt=!1;Ke.lerp(Ge,Rt?1:performance.now()-Je.live<300?Math.min(1,dt*14):.05);let Dt=Rt?0:Math.sin(Qe*.7)*.025;if(n)a.position.set(c.x+Ke.x*.12,c.y-Ke.y*.05+Dt,c.z),a.lookAt(l.clone().add(new A(Ke.x*1.5,-Ke.y*.75,0))),Me.yaw=0,Me.pitch=0;else{Me.yaw=-Ke.x*we,Me.pitch=-Ke.y*ie,a.position.set(c.x,c.y+Dt,c.z);let Ht=l.clone().sub(c).applyAxisAngle(new A(0,1,0),Me.yaw),wt=Ht.clone().cross(new A(0,1,0)).normalize();Ht.applyAxisAngle(wt,Me.pitch),a.lookAt(c.clone().add(Ht))}rs+=((Pc?1:0)-rs)*Math.min(1,xt*4);let kt=C.get("opp");if(rs>.001&&kt){let Ht=kt.group.position,wt=rs*rs*(3-2*rs);a.position.lerp(new A(Ht.x+1.1,1.75+Dt,Ht.z+3.4),wt),a.lookAt(new A(0,0,-1).applyQuaternion(a.quaternion).multiplyScalar(4).add(a.position).lerp(new A(Ht.x-.1,1.45,Ht.z),wt))}!t.preview&&eo&&te&&(te.opp||te.allies.length)&&$-Me.sentAt>150&&(Math.abs(Me.yaw-Me.sentYaw)>.02||Math.abs(Me.pitch-Me.sentPitch)>.02)&&(Me.sentAt=$,Me.sentYaw=Me.yaw,Me.sentPitch=Me.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+Me.yaw.toFixed(3),pitch:+Me.pitch.toFixed(3)}}))),sn>0&&(a.position.add(new A(It(-1,1),It(-1,1),0).multiplyScalar(sn)),a.rotation.z+=It(-1,1)*sn*.15,sn=Math.max(0,sn-xt*1.1)),yt+=(ft-yt)*Math.min(1,xt*6),Mt=Math.max(0,Mt-xt*2.2),ut.x+=(Ft.x-ut.x)*Math.min(1,xt*14),ut.y+=(Ft.y-ut.y)*Math.min(1,xt*14),ut.z+=(Ft.z-ut.z)*Math.min(1,xt*14),Mt<=0&&Ft.set(0,0,0);let xe=.5+.5*Math.sin(Qe*6);{let Ht=Math.max(0,1-(mt-O)/380),wt=Ht>0?Math.sin(Ht*Math.PI):0,Se=Math.min(1,yt);bt+=((Se>.05&&!Rt?Math.min(1,.5+Se*.6):0)-bt)*Math.min(1,xt*3),gt+=xt*(2.6+Se*1.4);let mn=Math.sin(gt),ir=Math.sin(gt*2)/2;B.position.set(Q.x-Ke.x*.04+mn*.06*bt,Q.y+Ke.y*.03+(Rt?0:Math.sin(Qe*1.6)*.008)+Se*.03+ir*.11*bt,Q.z-wt*.35),K.rotation.set(Se*.25-wt*.75+ut.x*.3+ir*.18*bt,ut.y*.3,.2-mn*.24*bt+ut.z*.3);let Wn=nt==="ready"?1:0;if(nt==="growing"){let Ye=Math.min(1,(mt-ht)/rt);if(Wn=Ye*Ye*(3-2*Ye),Ye>=1)nt="ready";else if(!Rt){G.gem.getWorldPosition(Pt);for(let de=0;de<2;de++){let Xe=Pt.clone().add(new A(It(-.4,.4),It(-.4,.4),It(-.4,.4)));Ut(Xe,G.color,{size:It(.025,.06),vel:Pt.clone().sub(Xe).multiplyScalar(2.8),life:.36})}}}if(G.gem.scale.setScalar(Wn),G.gemMat.emissiveIntensity=.7+Se*(1.6+xe*1.2)+wt*3,it.intensity=(.5+Se*4+wt*6)*Wn,G.glow.scale.setScalar((.3+Se*(.32+xe*.18)+wt*.6)*Wn),G.glow.material.opacity=.3+Se*.35,G.gem.rotation.y+=xt*(.8+Se*6),G.update(Qe,xt,Se),Wn>.9&&!Rt&&B.visible&&(G.gem.getWorldPosition(Pt),bt>.25&&Ut(Pt.clone(),G.color,{size:It(.03,.05),life:.55,opacity:.9}),Se>.2&&Math.random()<Se*.8)){let Ye=Pt.clone().add(new A(It(-.35,.35),It(-.35,.35),It(-.35,.35)));Ut(Ye,G.color.clone().lerp(new zt(16777215),.4),{size:It(.02,.05),vel:Pt.clone().sub(Ye).multiplyScalar(2.6),life:.38})}if(Lt&&!Rt&&B.visible)for(let Ye=0;Ye<2;Ye++){let de=K.localToWorld(new A(It(-.05,.05),It(-.15,1.3),It(-.05,.05)));Ut(de,Lt,{size:It(.05,.12),vel:new A(It(-.05,.05),It(.35,.8),0),life:It(.25,.45),solid:Math.random()<.4,opacity:.9})}At.uTime.value=Rt?0:Qe,At.uAmount.value+=((Lt&&(B.visible||Pc)?1:0)-At.uAmount.value)*Math.min(1,dt*3),Gt.visible=At.uAmount.value>.01}for(let[Ht,wt]of C){let Se=wt.group.getObjectByName("circle");if(Se&&(Se.rotation.z+=xt*.4),td(wt,mt),wt.ko)continue;let mn=Math.max(0,wt.lungeUntil-mt)/450;if(wt.model){let de=wt.model;de.body.position.y=Rt?0:Math.sin(Qe*2+wt.height*3)*.02;let Xe=wt.look,rr=mt-Xe.at>4e3,Jo=rr?.22*Math.sin(Qe*.31+Xe.seed)*Math.sin(Qe*.13+Xe.seed*2):Xe.yaw,Lc=rr?.06*Math.sin(Qe*.23+Xe.seed*3):Xe.pitch;Xe.curYaw+=(Jo-Xe.curYaw)*Math.min(1,xt*7),Xe.curPitch+=(Lc-Xe.curPitch)*Math.min(1,xt*7),de.head.rotation.set(-Xe.curPitch*.8,Xe.curYaw*.7,0),de.body.rotation.y=Xe.curYaw*.3;let Cr=1-mn,Pr=mn<=0?0:Cr<.18?-.35*(Cr/.18):Cr<.4?-.35+1.35*((Cr-.18)/.22):1-((Cr-.4)/.6)**2;de.body.rotation.x=Math.max(0,Pr)*.2,de.staffPivot.rotation.x=Pr*1.9;let Li=Ht==="me"?yt:(Ht==="opp"||Ht.startsWith("ally:"))&&Zt?Qi==="deck"?.7:.45:0,ro=Ht==="me"?0:Li*(1-Math.max(0,Pr)),id=-.15-Li*.75-Math.max(0,Pr)*.9+(Ht==="me"?ut.x:0)+Math.sin(Qe*4.4)*.22*ro;de.arm.rotation.x+=(id-de.arm.rotation.x)*Math.min(1,xt*10),de.arm.rotation.z=ri+(Ht==="me"?ut.z:0)+Math.sin(Qe*2.2)*.32*ro,de.arm.rotation.y=Ht==="me"?ut.y:0;let Ir=Ht==="me"?yt:Li;de.crystalMat.emissiveIntensity=1.2+Ir*(3+xe*2)+mn*3,de.glow.scale.setScalar(.45+Ir*(.5+xe*.3)+mn*.6),de.glow.material.opacity=.45+Ir*.5,de.crystal.rotation.y+=xt*(.8+Ir*6),de.staff.update(Qe,xt,Ir),Ir>.5&&Math.random()<Ir*.6&&(de.crystal.getWorldPosition(Pt),Ut(Pt.clone().add(new A(It(-.1,.1),It(-.1,.1),It(-.1,.1))),de.staff.color.getHex(),{size:It(.03,.08),vel:new A(It(-.2,.2),It(.2,.6),0),life:.7}))}else wt.sprite&&(wt.sprite.position.y=Rt?0:Math.abs(Math.sin(Qe*2))*.05,wt.sprite.position.z=mn*.4);let ir=Ht==="opp"&&Zt&&Qi==="deck"||Ht==="boss"&&Kt,Wn=wt.aura.material;Wn.opacity+=((ir?.55+.2*Math.sin(Qe*5):wt.flame?.35:0)-Wn.opacity)*Math.min(1,xt*5),Wn.color.copy(Ht==="boss"?new zt(16742954):wt.flame??new zt(11832575)),wt.flame&&Tt(wt,wt.flame,2);let Ye=wt.model?.eyes;if(Ye?.visible){let de=Math.max(0,wt.eyesFlashUntil-mt)/1400,Xe=1+.25*Math.sin(Qe*7)+de*3.5;for(let rr of Ye.children)rr.isSprite&&rr.scale.setScalar(.06*Xe);!wt.flame&&de<=0&&(Ye.visible=!1)}if(mt<wt.burnUntil&&Tt(wt,Math.random()<.5?16734746:16756784,3),mt<wt.frostUntil&&Math.random()<.3&&Tt(wt,13628159,1),Ht==="boss"&&Kt&&Math.random()<.8){let de=Wt("boss","mouth"),Xe=de.clone().add(new A(It(-1.5,1.5),It(-1,1),It(-1,1)));Ut(Xe,16751162,{size:.12,vel:de.clone().sub(Xe).multiplyScalar(1.6),life:.55})}}for(let Ht of ot){let wt=.85+.15*Math.sin(Qe*9+Ht.phase)+.08*Math.sin(Qe*23+Ht.phase*2);Ht.light.intensity=Ht.base*wt,Ht.flame.scale.set(1.2*wt,1.8*(.9+.2*wt),1)}if(tt.rotation.z+=xt*.05,Ce){Ce.update(Qe*30);for(let Ht of Rr)Ht.userData.flicker&&(Ht.intensity=Ht.userData.base*(1-Ht.userData.flicker*(.5+.5*Math.sin(Qe*9+Ht.position.x)*Math.sin(Qe*23+Ht.position.z))))}let ae=D.attributes.position;for(let Ht=0;Ht<pt;Ht++){let wt=ae.getY(Ht)+xt*(.12+z[Ht]%1*.2);wt>7.5&&(wt=0),ae.setY(Ht,wt),ae.setX(Ht,ae.getX(Ht)+Math.sin(Qe*.5+z[Ht])*xt*.15)}ae.needsUpdate=!0,J.opacity=.55+.35*Math.sin(Qe*1.3);for(let Ht=$n.length-1;Ht>=0;Ht--){let wt=$n[Ht];wt.t+=xt/wt.dur;let Se=Math.min(1,wt.t),mn=Se*Se*(1.6-.6*Se),ir=wt.from.clone().lerp(wt.mid,mn),Wn=wt.mid.clone().lerp(wt.to,mn);wt.sprite.position.copy(ir.lerp(Wn,mn)),wt.gem&&(wt.gem.position.copy(wt.sprite.position),wt.gem.rotation.y+=xt*12,wt.gem.rotation.x+=xt*7);let Ye=wt.incoming?.55+mn*.25:.55+mn*.8,de=wt.sprite.material;wt.incoming&&(de.opacity=1-.75*Math.max(0,Math.min(1,(Se-.35)/.5))),wt.sprite.scale.set(wt.size*.42*Ye,wt.size*.42*Ye,1),wt.trailAt-=xt,wt.trailAt<=0&&!Rt&&(wt.trailAt=.016,Ut(wt.sprite.position,wt.color,{size:It(.05,.13)*wt.size,life:.35,opacity:.8,vel:new A(It(-.3,.3),It(-.3,.3),It(-.3,.3))})),Se>=1&&(o.remove(wt.sprite),de.dispose(),wt.gem&&o.remove(wt.gem),$n.splice(Ht,1),wt.done())}for(let Ht=ee.length-1;Ht>=0;Ht--){let wt=ee[Ht];if(wt.life+=xt,wt.life>=wt.max){o.remove(wt.sprite),wt.sprite.material.dispose(),ee.splice(Ht,1);continue}wt.vel.y+=wt.gravity*xt,wt.sprite.position.addScaledVector(wt.vel,xt),wt.grow&&wt.sprite.scale.multiplyScalar(1+wt.grow*xt),wt.sprite.material.opacity=1-wt.life/wt.max}for(let Ht=Xt.length-1;Ht>=0;Ht--){let wt=Xt[Ht];wt.life+=xt,wt.line.material.opacity=wt.life<.08||wt.life>.14&&wt.life<.2?1:.15,wt.life>.32&&(o.remove(wt.line),wt.line.geometry.dispose(),wt.line.material.dispose(),Xt.splice(Ht,1))}for(let Ht=fe.length-1;Ht>=0;Ht--){let wt=fe[Ht];wt.life+=xt,wt.sprite.position.y+=xt*.8,wt.sprite.material.opacity=Math.min(1,2.2-wt.life*2),wt.life>1.1&&(o.remove(wt.sprite),wt.sprite.material.map?.dispose(),wt.sprite.material.dispose(),fe.splice(Ht,1))}e.render(o,a)}function nd($,dt,xt){let mt=C.get($),Rt=performance.now();dt==="bolt"&&($t(mt?Wt($,"head"):xt),$==="me"&&ye("190,230,255","bolt")),dt==="frost"&&(mt&&(mt.frostUntil=Rt+1100),vt(xt,13628159,30,2.5,.16),$==="me"&&ye("140,210,255","frost")),dt==="fire"&&(mt&&(mt.burnUntil=Rt+1100),vt(xt,16742954,36,3.4,.24),$==="me"&&ye("255,120,30","fire"))}let io={setup:Ie,setActive($){$!==eo&&(eo=$,i.classList.toggle("on",$),$?(hn(),$o=performance.now(),Ic=0,Ko=0,no=0,Cc=requestAnimationFrame(Tu)):cancelAnimationFrame(Cc))},async cast($,dt,xt,mt={}){let Rt=mt.kind??"attack",Dt=$==="me"||$.startsWith("ally:"),kt=Rt==="heal"?"#5dffa8":Rt==="mana"?"#ffd479":mt.fx==="bolt"?"#bfe6ff":mt.fx==="frost"?"#8fdcff":mt.fx==="fire"?"#ff8a3a":Dt?"#a98bff":"#ff6b6b",xe=C.get($);if(xe&&(xe.lungeUntil=performance.now()+450),$==="me"&&(yt=0,ft=0),Rt!=="attack"){if($==="me"&&nt!=="gone"&&B.visible){O=performance.now(),nt="gone";let de=new St(G.gem.geometry,G.gemMat),Xe=Wt("me","staff"),rr=Wt("me","chest"),Jo=Xe.clone().lerp(rr,.5).add(new A(0,.35,0));de.position.copy(Xe),de.scale.setScalar(1.3),o.add(de);let Lc=performance.now();await new Promise(Cr=>{let Pr=()=>{let Li=Math.min(1,(performance.now()-Lc)/520),ro=Xe.clone().lerp(Jo,Li).lerp(Jo.clone().lerp(rr,Li),Li);de.position.copy(ro),de.rotation.y+=.3,de.scale.setScalar(1.3*(1-Li*.7)),Math.random()<.8&&Ut(ro.clone(),kt,{size:It(.03,.07),life:.35,opacity:.9}),Li<1?requestAnimationFrame(Pr):(o.remove(de),Cr())};Pr()})}let Ye=Wt($);for(let de=0;de<30;de++)Ut(Ye.clone().add(new A(It(-.5,.5),It(-.8,.2),It(-.3,.3))),kt,{size:It(.08,.2),vel:new A(It(-.2,.2),It(.8,1.8),0),life:It(.6,1.1)});$==="me"&&ye(Rt==="heal"?"80,255,160":"255,212,121"),mt.damage&&Ve($,`+${mt.damage}`,kt);return}let ae=Wt($,$==="boss"?"mouth":"staff"),Ht=dt==="me"&&B.visible,wt=Wt(dt,"chest"),Se=Ht?wt.clone().add(new A(se(.42,wt.z)-wt.x,-.5,0)):wt,mn=(mt.crit?1.5:1)*1.15,ir=Yo(ae,Se,xt,kt,mn,.85,Ht);if($n[$n.length-1].target=dt,$==="me"){O=performance.now(),nt="gone";let Ye=new St(G.gem.geometry,G.gemMat);Ye.scale.setScalar(1.5),Ye.position.copy(ae),o.add(Ye),$n[$n.length-1].gem=Ye}await ir,Ht?vt(Se,kt,mt.crit?14:8,mt.crit?1.6:1.1,.12):vt(Se,kt,mt.crit?46:28,mt.crit?4.4:3.2,.2);let Wn=C.get(dt);Wn&&(Wn.hurtUntil=performance.now()+450),nd(dt,mt.fx,Se),dt==="me"?(mt.fx||ye(),Gn(mt.crit?.16:.09)):Gn(mt.crit?.07:.035),mt.damage&&Ve(dt,`\u2212${mt.damage}${mt.crit?"!":""}`,dt==="me"?"#ff6b81":mt.crit?"#ff9a3a":"#ffd479")},fizzle($){let dt=Wt($,$==="boss"?"head":"staff");if($!=="me")for(let xt=0;xt<14;xt++)Ut(dt,10132136,{size:It(.1,.25),vel:new A(It(-.6,.6),It(.3,1),It(-.3,.3)),life:.8,opacity:.6});if($==="me"){if(yt=0,nt!=="gone"&&B.visible){G.gem.getWorldPosition(Pt);for(let xt=0;xt<16;xt++)Ut(Pt.clone(),Math.random()<.5?G.color:10132136,{size:It(.02,.05),vel:new A(It(-.8,.8),It(-.2,.9),It(-.5,.5)),life:It(.4,.7),gravity:-2.5})}nt="gone"}},ko($){if($n.some(Rt=>Rt.target===$)&&!Tr.has($)){Tr.add($);let Rt=performance.now(),Dt=()=>{if($n.some(kt=>kt.target===$)&&performance.now()-Rt<2500){setTimeout(Dt,60);return}setTimeout(()=>{Tr.delete($),io.ko($)},120)};Dt();return}if(Tr.has($))return;if($==="me"){if(_t)return;_t=!0,Lt=null,G.gem.getWorldPosition(Pt),vt(Pt.clone(),10132136,18,1.6,.1),B.visible=!1;return}let dt=C.get($);if(!dt||dt.ko)return;dt.ko=!0,dt.flame=null,dt.aura.material.opacity=0;let xt=performance.now(),mt=()=>{let Rt=Math.min(1,(performance.now()-xt)/700),Dt=Rt*Rt;dt.model?(dt.model.root.rotation.z=Math.PI/2*Dt,dt.model.root.position.y=.24*Dt):dt.spriteMat&&(dt.spriteMat.rotation=Math.PI/2*Rt*-1,dt.spriteMat.opacity=1-Rt*.6),Rt<1&&requestAnimationFrame(mt)};mt(),vt(Wt($),16777215,40,3,.25)},onfire($,dt,xt){if($==="me"){Lt=dt&&!_t?new zt(xt??"#6ee7ff"):null,Lt&&Ct(Lt);return}let mt=C.get($);mt&&(mt.flame=dt?new zt(xt??"#6ee7ff"):null),mt?.model?.eyes&&(mt.model.eyes.visible=dt)},focusOpp($){Pc=$,B.visible=!$},prewarm($,dt){if(!t.preview)return;let xt=$.filter(Dt=>!er.has(`${Dt}-${dt}-${n}`)),mt=Dt=>(globalThis.requestIdleCallback??(kt=>setTimeout(kt,200)))(Dt,{timeout:2e3}),Rt=()=>{let Dt=xt.shift();if(!Dt)return;let kt=`${Dt}-${dt}-${n}`;if(!er.has(kt))try{let xe=Eu(Dt,dt,n);xe&&er.set(kt,xe)}catch{}mt(Rt)};mt(Rt)},setBackground($,dt,xt){te&&(te={...te,bgKey:$,time:dt,bgSvg:xt},Fe(te))},flashEyes($){let dt=C.get($);dt?.model?.eyes&&(dt.model.eyes.visible=!0,dt.eyesFlashUntil=performance.now()+1400)},channel($){ft=Math.max(0,Math.min(1,$))},twitch(){Et(),Mt=.35,Ft.set(It(-.35,.25),It(-.25,.25),It(-.3,.3)),Math.random()<.6&&nt==="ready"&&(G.gem.getWorldPosition(Pt),Ut(Pt.clone(),G.color.clone().lerp(new zt(16777215),.5),{size:It(.04,.09),vel:new A(It(-.6,.6),It(.2,.9),It(-.3,.3)),life:.5}))},thrust(){O=performance.now(),G.gem.getWorldPosition(Pt),vt(Pt.clone(),G.color,18,1.6,.08)},oppChannel($){Zt=$},inhale($){Kt=$},breath($,dt){Kt=!1;let xt=Wt("boss","mouth");for(let mt=0;mt<160;mt++)setTimeout(()=>{let Dt=($.length?Wt($[mt%$.length]):a.localToWorld(new A(0,-.2,-1))).clone().add(new A(It(-1.5,1.5),It(-.8,.8),0)).sub(xt).normalize().multiplyScalar(It(7,11));Ut(xt,Math.random()<.4?16765530:16734746,{size:It(.3,.7),vel:Dt,life:It(.6,.9),grow:1.2})},mt*5);setTimeout(()=>{for(let mt of $){let Rt=C.get(mt);Rt&&(Rt.hurtUntil=performance.now()+500,Rt.burnUntil=performance.now()+900),Ve(mt,`\u2212${dt}`,"#ff9a3a")}$.includes("me")&&(ye("255,120,30"),Gn(.16))},450)},claw($,dt){let xt=C.get("boss");xt&&(xt.lungeUntil=performance.now()+450),setTimeout(()=>{let mt=C.get($);mt&&(mt.hurtUntil=performance.now()+450),$==="me"&&(ye("255,40,60","claw"),Gn(.13)),Ve($,`\u2212${dt}`,"#ff6b81")},200)},float:Ve,look($,dt,xt){let mt=C.get($);!mt||!Number.isFinite(dt)||!Number.isFinite(xt)||(mt.look.yaw=Math.max(-we,Math.min(we,dt)),mt.look.pitch=Math.max(-ie,Math.min(ie,xt)),mt.look.at=performance.now())},setLite($){let dt=n!==$;n=$,dt&&Ce&&te&&(tr="",Ie(te)),e.setPixelRatio(s()),L.count=$?900:b,D.setDrawRange(0,$?90:pt),hn()},dispose(){io.setActive(!1),to?.disconnect(),removeEventListener("pointermove",Pe),removeEventListener("devicemotion",Ar),removeEventListener("touchend",ti),removeEventListener("resize",hn),rn.remove(),Ce&&(Ce.dispose(),Ce=null),e.dispose()}};n&&io.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return G},get gemState(){return nt},scene:o,camera:a,renderer:e}),hn();try{e.compile(o,a)}catch{}return io}globalThis.KWArena3D=vx;globalThis.KWStaffPreview=Af;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
