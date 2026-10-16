"use strict";(()=>{var Xf=Object.defineProperty;var qf=(i,t,e)=>t in i?Xf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var qe=(i,t,e)=>qf(i,typeof t!="symbol"?t+"":t,e);var Yf=0,_u=1,Zf=2;var A0=1,$f=2,Bi=3,In=0,Wn=1,Pe=2,ar=0,Mi=1,un=2,yu=3,xu=4,Kf=5,Cr=100,Jf=101,jf=102,Qf=103,td=104,ed=200,nd=201,id=202,rd=203,cl=204,ll=205,sd=206,od=207,ad=208,cd=209,ld=210,hd=211,ud=212,fd=213,dd=214,hl=0,ul=1,fl=2,bs=3,dl=4,pl=5,ml=6,gl=7,Uh=0,Nh=1,pd=2,cr=0,md=1,gd=2,_d=3,Io=4,yd=5,xd=6,Md=7;var R0=300,vs=301,Es=302,_o=303,_l=304,ac=306,Lr=1e3,zi=1001,yl=1002,wn=1003,bd=1004;var Yo=1005;var li=1006,Tc=1007;var Ir=1008;var Gi=1009,C0=1010,P0=1011,yo=1012,Hh=1013,Dr=1014,xi=1015,Lo=1016,Fh=1017,Oh=1018,ws=1020,I0=35902,L0=1021,D0=1022,ui=1023,U0=1024,N0=1025,ys=1026,Ss=1027,Bh=1028,kh=1029,H0=1030,zh=1031;var Vh=1033,Ta=33776,Aa=33777,Ra=33778,Ca=33779,xl=35840,Ml=35841,bl=35842,vl=35843,El=36196,wl=37492,Sl=37496,Tl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,Ul=37816,Nl=37817,Hl=37818,Fl=37819,Ol=37820,Bl=37821,Pa=36492,kl=36494,zl=36495,F0=36283,Vl=36284,Gl=36285,Wl=36286;var La=2300,Xl=2301,Ac=2302,Mu=2400,bu=2401,vu=2402;var vd=3200,Ed=3201;var Gh=0,wd=1,sr="",nn="srgb",fr="srgb-linear",Wh="display-p3",cc="display-p3-linear",Da="linear",We="srgb",Ua="rec709",Na="p3";var Jr=7680;var Eu=519,Sd=512,Td=513,Ad=514,O0=515,Rd=516,Cd=517,Pd=518,Id=519,ql=35044;var wu="300 es",Vi=2e3,Ha=2001,lr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,ho=Math.PI/180,xo=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[e&63|128]+Cn[e>>8&255]+"-"+Cn[e>>16&255]+Cn[e>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function xn(i,t,e){return Math.max(t,Math.min(e,i))}function Xh(i,t){return(i%t+t)%t}function Ld(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Dd(i,t,e){return i!==t?(e-i)/(t-i):0}function uo(i,t,e){return(1-e)*i+e*t}function Ud(i,t,e,n){return uo(i,t,1-Math.exp(-e*n))}function Nd(i,t=1){return t-Math.abs(Xh(i,t*2)-t)}function Hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Bd(i,t){return i+Math.random()*(t-i)}function kd(i){return i*(.5-Math.random())}function zd(i){i!==void 0&&(Su=i);let t=Su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vd(i){return i*ho}function Gd(i){return i*xo}function Wd(i){return(i&i-1)===0&&i!==0}function Xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yd(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Us={DEG2RAD:ho,RAD2DEG:xo,generateUUID:bi,clamp:xn,euclideanModulo:Xh,mapLinear:Ld,inverseLerp:Dd,lerp:uo,damp:Ud,pingpong:Nd,smoothstep:Hd,smootherstep:Fd,randInt:Od,randFloat:Bd,randFloatSpread:kd,seededRandom:zd,degToRad:Vd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:qd,setQuaternionFromProperEuler:Yd,normalize:Ne,denormalize:hi},Ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},me=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],y=r[1],x=r[4],b=r[7],L=r[2],E=r[5],v=r[8];return s[0]=o*_+a*y+c*L,s[3]=o*f+a*x+c*E,s[6]=o*p+a*b+c*v,s[1]=l*_+h*y+u*L,s[4]=l*f+h*x+u*E,s[7]=l*p+h*b+u*v,s[2]=d*_+m*y+g*L,s[5]=d*f+m*x+g*E,s[8]=d*p+m*b+g*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=e*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Rc.makeScale(t,e)),this}rotate(t){return this.premultiply(Rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new me;function B0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zd(){let i=Fa("canvas");return i.style.display="block",i}var Tu={};function Ia(i){i in Tu||(Tu[i]=!0,console.warn(i))}function $d(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Kd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Au=new me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ru=new me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[fr]:{transfer:Da,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[nn]:{transfer:We,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[cc]:{transfer:Da,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ru),fromReference:i=>i.applyMatrix3(Au)},[Wh]:{transfer:We,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ru),fromReference:i=>i.applyMatrix3(Au).convertLinearToSRGB()}},jd=new Set([fr,cc]),Le={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Js[t].toReference,r=Js[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Js[i].primaries},getTransfer:function(i){return i===sr?Da:Js[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Js[t].luminanceCoefficients)}};function xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jr,Yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jr===void 0&&(jr=Fa("canvas")),jr.width=t.width,jr.height=t.height;let n=jr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xs(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xs(e[n]/255)*255):e[n]=xs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qd=0,Oa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pc(r[o].image)):s.push(Pc(r[o]))}else s=Pc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tp=0,Xn=class i extends lr{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zi,r=zi,s=li,o=Ir,a=ui,c=Gi,l=i.DEFAULT_ANISOTROPY,h=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=bi(),this.name="",this.source=new Oa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==R0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lr:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lr:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=R0;Xn.DEFAULT_ANISOTROPY=1;var Fe=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,b=(m+1)/2,L=(p+1)/2,E=(h+d)/4,v=(u+_)/4,A=(g+f)/4;return x>b&&x>L?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=v/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=E/r,s=A/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=v/s,r=A/s),this.set(n,r,s,e),this}let y=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zl=class extends lr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Xn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Oa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends Zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ba=class extends Xn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $l=class extends Xn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let L=Math.sqrt(x),E=Math.atan2(L,p*y);f=Math.sin(f*E)/L,a=Math.sin(a*E)/L}let b=a*y;if(c=c*f+d*b,l=l*f+m*b,h=h*f+g*b,u=u*f+_*b,f===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ic.copy(this).projectOnVector(t),this.sub(Ic)}reflect(t){return this.sub(Ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ic=new R,Cu=new fn,Xi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(t.matrixWorld),this.union(Zo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),$o.subVectors(this.max,js),Qr.subVectors(t.a,js),ts.subVectors(t.b,js),es.subVectors(t.c,js),Qi.subVectors(ts,Qr),tr.subVectors(es,ts),vr.subVectors(Qr,es);let e=[0,-Qi.z,Qi.y,0,-tr.z,tr.y,0,-vr.z,vr.y,Qi.z,0,-Qi.x,tr.z,0,-tr.x,vr.z,0,-vr.x,-Qi.y,Qi.x,0,-tr.y,tr.x,0,-vr.y,vr.x,0];return!Lc(e,Qr,ts,es,$o)||(e=[1,0,0,0,1,0,0,0,1],!Lc(e,Qr,ts,es,$o))?!1:(Ko.crossVectors(Qi,tr),e=[Ko.x,Ko.y,Ko.z],Lc(e,Qr,ts,es,$o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ui=[new R,new R,new R,new R,new R,new R,new R,new R],oi=new R,Zo=new Xi,Qr=new R,ts=new R,es=new R,Qi=new R,tr=new R,vr=new R,js=new R,$o=new R,Ko=new R,Er=new R;function Lc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Er.fromArray(i,s);let a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),c=t.dot(Er),l=e.dot(Er),h=n.dot(Er);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ep=new Xi,Qs=new R,Dc=new R,qi=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ep.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Qs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Dc)),this.expandByPoint(Qs.copy(t.center).sub(Dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new R,Uc=new R,Jo=new R,er=new R,Nc=new R,jo=new R,Hc=new R,Mo=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Uc.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),er.copy(this.origin).sub(Uc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Jo),a=er.dot(this.direction),c=-er.dot(Jo),l=er.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Uc).addScaledVector(Jo,d),m}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);let n=Ni.dot(this.direction),r=Ni.dot(Ni)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,r,s){Nc.subVectors(e,t),jo.subVectors(n,t),Hc.crossVectors(Nc,jo);let o=this.direction.dot(Hc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,t);let c=a*this.direction.dot(jo.crossVectors(er,jo));if(c<0)return null;let l=a*this.direction.dot(Nc.cross(er));if(l<0||c+l>o)return null;let h=-a*er.dot(Hc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f)}set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(np,t,ip)}lookAt(t,e,n){let r=this.elements;return Zn.subVectors(t,e),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),nr.crossVectors(n,Zn),nr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),nr.crossVectors(n,Zn)),nr.normalize(),Qo.crossVectors(Zn,nr),r[0]=nr.x,r[4]=Qo.x,r[8]=Zn.x,r[1]=nr.y,r[5]=Qo.y,r[9]=Zn.y,r[2]=nr.z,r[6]=Qo.z,r[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],y=n[3],x=n[7],b=n[11],L=n[15],E=r[0],v=r[4],A=r[8],z=r[12],M=r[1],T=r[5],J=r[9],V=r[13],Z=r[2],ut=r[6],ot=r[10],pt=r[14],D=r[3],tt=r[7],W=r[11],O=r[15];return s[0]=o*E+a*M+c*Z+l*D,s[4]=o*v+a*T+c*ut+l*tt,s[8]=o*A+a*J+c*ot+l*W,s[12]=o*z+a*V+c*pt+l*O,s[1]=h*E+u*M+d*Z+m*D,s[5]=h*v+u*T+d*ut+m*tt,s[9]=h*A+u*J+d*ot+m*W,s[13]=h*z+u*V+d*pt+m*O,s[2]=g*E+_*M+f*Z+p*D,s[6]=g*v+_*T+f*ut+p*tt,s[10]=g*A+_*J+f*ot+p*W,s[14]=g*z+_*V+f*pt+p*O,s[3]=y*E+x*M+b*Z+L*D,s[7]=y*v+x*T+b*ut+L*tt,s[11]=y*A+x*J+b*ot+L*W,s[15]=y*z+x*V+b*pt+L*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*m-n*c*m)+_*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],y=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,x=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,b=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,E=e*y+n*x+r*b+s*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/E;return t[0]=y*v,t[1]=(_*d*s-u*f*s-_*r*m+n*f*m+u*r*p-n*d*p)*v,t[2]=(a*f*s-_*c*s+_*r*l-n*f*l-a*r*p+n*c*p)*v,t[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*m-n*c*m)*v,t[4]=x*v,t[5]=(h*f*s-g*d*s+g*r*m-e*f*m-h*r*p+e*d*p)*v,t[6]=(g*c*s-o*f*s-g*r*l+e*f*l+o*r*p-e*c*p)*v,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*m+e*c*m)*v,t[8]=b*v,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*v,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*v,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*v,t[12]=L*v,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*f+e*u*f)*v,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*f-e*a*f)*v,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*d+e*a*d)*v,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,f=o*u,p=a*u,y=c*l,x=c*h,b=c*u,L=n.x,E=n.y,v=n.z;return r[0]=(1-(_+p))*L,r[1]=(m+b)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-b)*E,r[5]=(1-(d+p))*E,r[6]=(f+y)*E,r[7]=0,r[8]=(g+x)*v,r[9]=(f-y)*v,r[10]=(1-(d+_))*v,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=ns.set(r[0],r[1],r[2]).length(),o=ns.set(r[4],r[5],r[6]).length(),a=ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ai.copy(this);let l=1/s,h=1/o,u=1/a;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,e.setFromRotationMatrix(ai),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Vi){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r),m,g;if(a===Vi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ha)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Vi){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*l,m=(n+r)*h,g,_;if(a===Vi)g=(o+s)*u,_=-2*u;else if(a===Ha)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new R,ai=new ae,np=new R(0,0,0),ip=new R(1,1,1),nr=new R,Qo=new R,Zn=new R,Pu=new ae,Iu=new fn,bn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var ka=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rp=0,Lu=new R,is=new fn,Hi=new ae,ta=new R,to=new R,sp=new R,op=new fn,Du=new R(1,0,0),Uu=new R(0,1,0),Nu=new R(0,0,1),Hu={type:"added"},ap={type:"removed"},rs={type:"childadded",child:null},Fc={type:"childremoved",child:null},an=class i extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new bn,n=new fn,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new me}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Du,t)}rotateY(t){return this.rotateOnAxis(Uu,t)}rotateZ(t){return this.rotateOnAxis(Nu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Du,t)}translateY(t){return this.translateOnAxis(Uu,t)}translateZ(t){return this.translateOnAxis(Nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(to,ta,this.up):Hi.lookAt(ta,to,this.up),this.quaternion.setFromRotationMatrix(Hi),r&&(Hi.extractRotation(r.matrixWorld),is.setFromRotationMatrix(Hi),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hu),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ap),Fc.child=t,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hu),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};an.DEFAULT_UP=new R(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new R,Fi=new R,Oc=new R,Oi=new R,ss=new R,os=new R,Fu=new R,Bc=new R,kc=new R,zc=new R,Vc=new Fe,Gc=new Fe,Wc=new Fe,or=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ci.subVectors(t,e),r.cross(ci);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ci.subVectors(r,e),Fi.subVectors(n,e),Oc.subVectors(t,e);let o=ci.dot(ci),a=ci.dot(Fi),c=ci.dot(Oc),l=Fi.dot(Fi),h=Fi.dot(Oc),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Oi.x),c.addScaledVector(o,Oi.y),c.addScaledVector(a,Oi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Vc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,n),Wc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Vc,s.x),o.addScaledVector(Gc,s.y),o.addScaledVector(Wc,s.z),o}static isFrontFacing(t,e,n,r){return ci.subVectors(n,e),Fi.subVectors(t,e),ci.cross(Fi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;ss.subVectors(r,n),os.subVectors(s,n),Bc.subVectors(t,n);let c=ss.dot(Bc),l=os.dot(Bc);if(c<=0&&l<=0)return e.copy(n);kc.subVectors(t,r);let h=ss.dot(kc),u=os.dot(kc);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ss,o);zc.subVectors(t,s);let m=ss.dot(zc),g=os.dot(zc);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(os,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Fu.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(Fu,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ss,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Le.workingColorSpace){if(t=Xh(t,1),e=xn(e,0,1),n=xn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xc(o,s,t+1/3),this.g=Xc(o,s,t),this.b=Xc(o,s,t-1/3)}return Le.toWorkingColorSpace(this,r),this}setStyle(t,e=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=k0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=Cc(t.r),this.g=Cc(t.g),this.b=Cc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Le.fromWorkingColorSpace(Pn.copy(this),t),Math.round(xn(Pn.r*255,0,255))*65536+Math.round(xn(Pn.g*255,0,255))*256+Math.round(xn(Pn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(Pn.copy(this),e);let n=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=nn){Le.fromWorkingColorSpace(Pn.copy(this),t);let e=Pn.r,n=Pn.g,r=Pn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ir),this.setHSL(ir.h+t,ir.s+e,ir.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ir),t.getHSL(ea);let n=uo(ir.h,ea.h,e),r=uo(ir.s,ea.s,e),s=uo(ir.l,ea.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new zt;zt.NAMES=k0;var cp=0,fi=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Mi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ll,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==Cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},cn=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var on=new R,na=new Ut,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),r=Ne(r,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}};var za=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Va=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},lp=0,Qn=new ae,qc=new an,as=new R,$n=new Xi,eo=new Xi,yn=new R,Me=class i extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B0(t)?Va:za)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new me().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,n){return Qn.makeTranslation(t,e,n),this.applyMatrix4(Qn),this}scale(t,e,n){return Qn.makeScale(t,e,n),this.applyMatrix4(Qn),this}lookAt(t){return qc.lookAt(t),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors($n.min,eo.min),$n.expandByPoint(yn),yn.addVectors($n.max,eo.max),$n.expandByPoint(yn)):($n.expandByPoint(eo.min),$n.expandByPoint(eo.max))}$n.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)yn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(yn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)yn.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(t,l),yn.add(as)),r=Math.max(r,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new R,c[A]=new R;let l=new R,h=new R,u=new R,d=new Ut,m=new Ut,g=new Ut,_=new R,f=new R;function p(A,z,M){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,z),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(T),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(T),a[A].add(_),a[z].add(_),a[M].add(_),c[A].add(f),c[z].add(f),c[M].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,z=y.length;A<z;++A){let M=y[A],T=M.start,J=M.count;for(let V=T,Z=T+J;V<Z;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let x=new R,b=new R,L=new R,E=new R;function v(A){L.fromBufferAttribute(r,A),E.copy(L);let z=a[A];x.copy(z),x.sub(L.multiplyScalar(L.dot(z))).normalize(),b.crossVectors(E,z);let T=b.dot(c[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,T)}for(let A=0,z=y.length;A<z;++A){let M=y[A],T=M.start,J=M.count;for(let V=T,Z=T+J;V<Z;V+=3)v(t.getX(V+0)),v(t.getX(V+1)),v(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ou=new ae,wr=new Mo,ia=new qi,Bu=new R,ra=new R,sa=new R,oa=new R,Yc=new R,aa=new R,ku=new R,ca=new R,St=class extends an{constructor(t=new Me,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){aa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Yc.fromBufferAttribute(u,t),o?aa.addScaledVector(Yc,h):aa.addScaledVector(Yc.sub(e),h))}e.add(aa)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),wr.copy(t.ray).recast(t.near),!(ia.containsPoint(wr.origin)===!1&&(wr.intersectSphere(ia,Bu)===null||wr.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Ou.copy(s).invert(),wr.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,L=x;b<L;b+=3){let E=a.getX(b),v=a.getX(b+1),A=a.getX(b+2);r=la(this,p,t,n,l,h,u,E,v,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=a.getX(f),x=a.getX(f+1),b=a.getX(f+2);r=la(this,o,t,n,l,h,u,y,x,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,L=x;b<L;b+=3){let E=b,v=b+1,A=b+2;r=la(this,p,t,n,l,h,u,E,v,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=f,x=f+1,b=f+2;r=la(this,o,t,n,l,h,u,y,x,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}};function hp(i,t,e,n,r,s,o,a){let c;if(t.side===Wn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===In,a),c===null)return null;ca.copy(a),ca.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ca);return l<e.near||l>e.far?null:{distance:l,point:ca.clone(),object:i}}function la(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,ra),i.getVertexPosition(c,sa),i.getVertexPosition(l,oa);let h=hp(i,t,e,n,ra,sa,oa,ku);if(h){let u=new R;or.getBarycoord(ku,ra,sa,oa,u),r&&(h.uv=or.getInterpolatedAttribute(r,a,c,l,u,new Ut)),s&&(h.uv1=or.getInterpolatedAttribute(s,a,c,l,u,new Ut)),o&&(h.normal=or.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};or.getNormal(ra,sa,oa,d.normal),h.face=d,h.barycoord=u}return h}var $e=class i extends Me{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(_,f,p,y,x,b,L,E,v,A,z){let M=b/v,T=L/A,J=b/2,V=L/2,Z=E/2,ut=v+1,ot=A+1,pt=0,D=0,tt=new R;for(let W=0;W<ot;W++){let O=W*T-V;for(let G=0;G<ut;G++){let H=G*M-J;tt[_]=H*y,tt[f]=O*x,tt[p]=Z,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[f]=0,tt[p]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(G/v),u.push(1-W/A),pt+=1}}for(let W=0;W<A;W++)for(let O=0;O<v;O++){let G=d+O+ut*W,H=d+O+ut*(W+1),C=d+(O+1)+ut*(W+1),I=d+(O+1)+ut*W;c.push(G,H,I),c.push(H,C,I),D+=6}a.addGroup(m,D,z),m+=D,d+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function On(i){let t={};for(let e=0;e<i.length;e++){let n=Ts(i[e]);for(let r in n)t[r]=n[r]}return t}function up(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function z0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}var fp={clone:Ts,merge:On},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ga=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rr=new R,zu=new Ut,Vu=new Ut,Mn=class extends Ga{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rr.x,rr.y).multiplyScalar(-t/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-t/rr.z)}getViewSize(t,e){return this.getViewBounds(t,zu,Vu),e.subVectors(Vu,zu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ho*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cs=-90,ls=1,Kl=class extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mn(cs,ls,t,e);r.layers=this.layers,this.add(r);let s=new Mn(cs,ls,t,e);s.layers=this.layers,this.add(s);let o=new Mn(cs,ls,t,e);o.layers=this.layers,this.add(o);let a=new Mn(cs,ls,t,e);a.layers=this.layers,this.add(a);let c=new Mn(cs,ls,t,e);c.layers=this.layers,this.add(c);let l=new Mn(cs,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wa=class extends Xn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Jl=class extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Wa(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $e(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:ar});s.uniforms.tEquirect.value=e;let o=new St(r,s),a=e.minFilter;return e.minFilter===Ir&&(e.minFilter=li),new Kl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Zc=new R,mp=new R,gp=new me,ki=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Zc.subVectors(n,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Zc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gp.getNormalMatrix(t),r=this.coplanarPoint(Zc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sr=new qi,ha=new R,bo=class{constructor(t=new ki,e=new ki,n=new ki,r=new ki,s=new ki,o=new ki){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],y=r[13],x=r[14],b=r[15];if(n[0].setComponents(c-s,d-l,f-m,b-p).normalize(),n[1].setComponents(c+s,d+l,f+m,b+p).normalize(),n[2].setComponents(c+o,d+h,f+g,b+y).normalize(),n[3].setComponents(c-o,d-h,f-g,b-y).normalize(),n[4].setComponents(c-a,d-u,f-_,b-x).normalize(),e===Vi)n[5].setComponents(c+a,d+u,f+_,b+x).normalize();else if(e===Ha)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ha.x=r.normal.x>0?t.max.x:t.min.x,ha.y=r.normal.y>0?t.max.y:t.min.y,ha.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function V0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function _p(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Yi=class i extends Me{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let y=p*d-o;for(let x=0;x<l;x++){let b=x*u-s;g.push(b,-y,0),_.push(0,0,1),f.push(x/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,b=y+l*(p+1),L=y+1+l*(p+1),E=y+1+l*p;m.push(x,b,E),m.push(b,L,E)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
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
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zp=`#define PI 3.141592653589793
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
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`
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
}`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
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
#endif`,gm=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Am=`#if defined( USE_POINTS_UV )
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
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ng=`float getShadowMask() {
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
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Sg=`#define DISTANCE
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Ng=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,Bg=`#define PHONG
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
}`,kg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,Xg=`uniform float size;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:yp,alphahash_pars_fragment:xp,alphamap_fragment:Mp,alphamap_pars_fragment:bp,alphatest_fragment:vp,alphatest_pars_fragment:Ep,aomap_fragment:wp,aomap_pars_fragment:Sp,batching_pars_vertex:Tp,batching_vertex:Ap,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Ip,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Hp,color_fragment:Fp,color_pars_fragment:Op,color_pars_vertex:Bp,color_vertex:kp,common:zp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:Yp,colorspace_fragment:Zp,colorspace_pars_fragment:$p,envmap_fragment:Kp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:tm,fog_vertex:em,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:rm,gradientmap_pars_fragment:sm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:cm,lights_pars_begin:lm,lights_toon_fragment:um,lights_toon_pars_fragment:fm,lights_phong_fragment:dm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:ym,lights_fragment_end:xm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:bm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:Em,map_fragment:wm,map_pars_fragment:Sm,map_particle_fragment:Tm,map_particle_pars_fragment:Am,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Im,morphnormal_vertex:Lm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Hm,normal_pars_fragment:Fm,normal_pars_vertex:Om,normal_vertex:Bm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:Xm,packing:qm,premultiplied_alpha_fragment:Ym,project_vertex:Zm,dithering_fragment:$m,dithering_pars_fragment:Km,roughnessmap_fragment:Jm,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:tg,shadowmap_vertex:eg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:rg,skinning_vertex:sg,skinnormal_vertex:og,specularmap_fragment:ag,specularmap_pars_fragment:cg,tonemapping_fragment:lg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:fg,uv_pars_fragment:dg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:_g,background_frag:yg,backgroundCube_vert:xg,backgroundCube_frag:Mg,cube_vert:bg,cube_frag:vg,depth_vert:Eg,depth_frag:wg,distanceRGBA_vert:Sg,distanceRGBA_frag:Tg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Ig,meshbasic_frag:Lg,meshlambert_vert:Dg,meshlambert_frag:Ug,meshmatcap_vert:Ng,meshmatcap_frag:Hg,meshnormal_vert:Fg,meshnormal_frag:Og,meshphong_vert:Bg,meshphong_frag:kg,meshphysical_vert:zg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:Xg,points_frag:qg,shadow_vert:Yg,shadow_frag:Zg,sprite_vert:$g,sprite_frag:Kg},qt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},yi={basic:{uniforms:On([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:On([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new zt(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:On([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:On([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:On([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new zt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:On([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:On([qt.points,qt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:On([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:On([qt.common,qt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:On([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:On([qt.sprite,qt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:On([qt.common,qt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:On([qt.lights,qt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};yi.physical={uniforms:On([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var ua={r:0,b:0,g:0},Tr=new bn,Jg=new ae;function jg(i,t,e,n,r,s,o){let a=new zt(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,b=g(y);b===null?p(a,c):b&&b.isColor&&(p(b,1),x=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===ac)?(h===void 0&&(h=new St(new $e(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ts(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Tr.copy(x.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Tr)),h.material.toneMapped=Le.getTransfer(b.colorSpace)!==We,(u!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new St(new Yi(2,2),new qn({name:"BackgroundMaterial",uniforms:Ts(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Le.getTransfer(b.colorSpace)!==We,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(ua,z0(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:f}}function Qg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(M,T,J,V,Z){let ut=!1,ot=u(V,J,T);s!==ot&&(s=ot,l(s.object)),ut=m(M,V,J,Z),ut&&g(M,V,J,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(ut||o)&&(o=!1,b(M,T,J,V),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,T,J){let V=J.wireframe===!0,Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let ut=Z[T.id];ut===void 0&&(ut={},Z[T.id]=ut);let ot=ut[V];return ot===void 0&&(ot=d(c()),ut[V]=ot),ot}function d(M){let T=[],J=[],V=[];for(let Z=0;Z<e;Z++)T[Z]=0,J[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:J,attributeDivisors:V,object:M,attributes:{},index:null}}function m(M,T,J,V){let Z=s.attributes,ut=T.attributes,ot=0,pt=J.getAttributes();for(let D in pt)if(pt[D].location>=0){let W=Z[D],O=ut[D];if(O===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(O=M.instanceColor)),W===void 0||W.attribute!==O||O&&W.data!==O.data)return!0;ot++}return s.attributesNum!==ot||s.index!==V}function g(M,T,J,V){let Z={},ut=T.attributes,ot=0,pt=J.getAttributes();for(let D in pt)if(pt[D].location>=0){let W=ut[D];W===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(W=M.instanceColor));let O={};O.attribute=W,W&&W.data&&(O.data=W.data),Z[D]=O,ot++}s.attributes=Z,s.attributesNum=ot,s.index=V}function _(){let M=s.newAttributes;for(let T=0,J=M.length;T<J;T++)M[T]=0}function f(M){p(M,0)}function p(M,T){let J=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;J[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),Z[M]!==T&&(i.vertexAttribDivisor(M,T),Z[M]=T)}function y(){let M=s.newAttributes,T=s.enabledAttributes;for(let J=0,V=T.length;J<V;J++)T[J]!==M[J]&&(i.disableVertexAttribArray(J),T[J]=0)}function x(M,T,J,V,Z,ut,ot){ot===!0?i.vertexAttribIPointer(M,T,J,Z,ut):i.vertexAttribPointer(M,T,J,V,Z,ut)}function b(M,T,J,V){_();let Z=V.attributes,ut=J.getAttributes(),ot=T.defaultAttributeValues;for(let pt in ut){let D=ut[pt];if(D.location>=0){let tt=Z[pt];if(tt===void 0&&(pt==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),pt==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){let W=tt.normalized,O=tt.itemSize,G=t.get(tt);if(G===void 0)continue;let H=G.buffer,C=G.type,I=G.bytesPerElement,k=C===i.INT||C===i.UNSIGNED_INT||tt.gpuType===Hh;if(tt.isInterleavedBufferAttribute){let $=tt.data,B=$.stride,F=tt.offset;if($.isInstancedInterleavedBuffer){for(let Y=0;Y<D.locationSize;Y++)p(D.location+Y,$.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Y=0;Y<D.locationSize;Y++)f(D.location+Y);i.bindBuffer(i.ARRAY_BUFFER,H);for(let Y=0;Y<D.locationSize;Y++)x(D.location+Y,O/D.locationSize,C,W,B*I,(F+O/D.locationSize*Y)*I,k)}else{if(tt.isInstancedBufferAttribute){for(let $=0;$<D.locationSize;$++)p(D.location+$,tt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let $=0;$<D.locationSize;$++)f(D.location+$);i.bindBuffer(i.ARRAY_BUFFER,H);for(let $=0;$<D.locationSize;$++)x(D.location+$,O/D.locationSize,C,W,O*I,O/D.locationSize*$*I,k)}}else if(ot!==void 0){let W=ot[pt];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(D.location,W);break;case 3:i.vertexAttrib3fv(D.location,W);break;case 4:i.vertexAttrib4fv(D.location,W);break;default:i.vertexAttrib1fv(D.location,W)}}}}y()}function L(){A();for(let M in n){let T=n[M];for(let J in T){let V=T[J];for(let Z in V)h(V[Z].object),delete V[Z];delete T[J]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let T=n[M.id];for(let J in T){let V=T[J];for(let Z in V)h(V[Z].object),delete V[Z];delete T[J]}delete n[M.id]}function v(M){for(let T in n){let J=n[T];if(J[M.id]===void 0)continue;let V=J[M.id];for(let Z in V)h(V[Z].object),delete V[Z];delete J[M.id]}}function A(){z(),o=!0,s!==r&&(s=r,l(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:f,disableUnusedAttributes:y}}function t1(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function e1(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==ui&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let A=v===Lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Gi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==xi&&!A)}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let v=t.get("EXT_clip_control");v.clipControlEXT(v.LOWER_LEFT_EXT,v.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:L,maxSamples:E}}function n1(i){let t=this,e=null,n=0,r=!1,s=!1,o=new ki,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{let y=s?0:n,x=y*4,b=p.clippingState||null;c.value=b,b=h(g,d,x,m);for(let L=0;L!==x;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,b=m;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function i1(i){let t=new WeakMap;function e(o,a){return a===_o?o.mapping=vs:a===_l&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_o||a===_l)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Jl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Xa=class extends Ga{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,Gu=[.125,.215,.35,.446,.526,.582],Pr=20,$c=new Xa,Wu=new zt,Kc=null,Jc=0,jc=0,Qc=!1,Rr=(1+Math.sqrt(5))/2,hs=1/Rr,Xu=[new R(-Rr,hs,0),new R(Rr,hs,0),new R(-hs,0,Rr),new R(hs,0,Rr),new R(0,Rr,-hs),new R(0,Rr,hs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],qa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Kc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kc,Jc,jc),this._renderer.xr.enabled=Qc,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Lo,format:ui,colorSpace:fr,depthBuffer:!1},r=qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r1(s)),this._blurMaterial=s1(s,t,e)}return r}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,$c)}_sceneToCubeUV(t,e,n,r){let a=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wu),h.toneMapping=cr,h.autoClear=!1;let m=new cn({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),g=new St(new $e,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(Wu),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;fa(r,y*x,p>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===vs||t.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;fa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,$c)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xu[(r-s-1)%Xu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pr-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):Pr;f>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Pr}`);let p=[],y=0;for(let v=0;v<Pr;++v){let A=v/_,z=Math.exp(-A*A/2);p.push(z),v===0?y+=z:v<f&&(y+=2*z)}for(let v=0;v<p.length;v++)p[v]=p[v]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let b=this._sizeLods[r],L=3*b*(r>x-gs?r-x+gs:0),E=4*(this._cubeSize-b);fa(e,L,E,3*b,2*b),c.setRenderTarget(e),c.render(u,$c)}};function r1(i){let t=[],e=[],n=[],r=i,s=i-gs+1+Gu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-gs?c=Gu[o-i+gs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,y=new Float32Array(_*g*m),x=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let E=0;E<m;E++){let v=E%3*2/3-1,A=E>2?0:-1,z=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];y.set(z,_*g*E),x.set(d,f*g*E);let M=[E,E,E,E,E,E];b.set(M,p*g*E)}let L=new Me;L.setAttribute("position",new Ie(y,_)),L.setAttribute("uv",new Ie(x,f)),L.setAttribute("faceIndex",new Ie(b,p)),t.push(L),r>gs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qu(i,t,e){let n=new Wi(i,t,e);return n.texture.mapping=ac,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function s1(i,t,e){let n=new Float32Array(Pr),r=new R(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Yu(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Zu(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function o1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===_o||c===_l,h=c===vs||c===Es;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new qa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new qa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function a1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Ia("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function c1(i,t,e,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let x=0,b=y.length;x<b;x+=3){let L=y[x+0],E=y[x+1],v=y[x+2];d.push(L,E,E,v,v,L)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let L=x+0,E=x+1,v=x+2;d.push(L,E,E,v,v,L)}}else return;let f=new(B0(d)?Va:za)(d,1);f.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function l1(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function u(d,m,g,_){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y];for(let y=0;y<_.length;y++)e.update(p,n,_[y])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function h1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function u1(i,t,e){let n=new WeakMap,r=new Fe;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let z=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let b=a.attributes.position.count*x,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*L*4*u),v=new Ba(E,b,L,u);v.type=xi,v.needsUpdate=!0;let A=x*4;for(let M=0;M<u;M++){let T=f[M],J=p[M],V=y[M],Z=b*L*4*M;for(let ut=0;ut<T.count;ut++){let ot=ut*A;m===!0&&(r.fromBufferAttribute(T,ut),E[Z+ot+0]=r.x,E[Z+ot+1]=r.y,E[Z+ot+2]=r.z,E[Z+ot+3]=0),g===!0&&(r.fromBufferAttribute(J,ut),E[Z+ot+4]=r.x,E[Z+ot+5]=r.y,E[Z+ot+6]=r.z,E[Z+ot+7]=0),_===!0&&(r.fromBufferAttribute(V,ut),E[Z+ot+8]=r.x,E[Z+ot+9]=r.y,E[Z+ot+10]=r.z,E[Z+ot+11]=V.itemSize===4?r.w:1)}}d={count:u,texture:v,size:new Ut(b,L)},n.set(a,d),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function f1(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var Ya=class extends Xn{constructor(t,e,n,r,s,o,a,c,l,h=ys){if(h!==ys&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=Dr),n===void 0&&h===Ss&&(n=ws),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:wn,this.minFilter=c!==void 0?c:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},G0=new Xn,$u=new Ya(1,1),W0=new Ba,X0=new $l,q0=new Wa,Ku=[],Ju=[],ju=new Float32Array(16),Qu=new Float32Array(9),t0=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Ku[r];if(s===void 0&&(s=new Float32Array(r),Ku[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lc(i,t){let e=Ju[t];e===void 0&&(e=new Int32Array(t),Ju[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function d1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function p1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2fv(this.addr,t),pn(e,t)}}function m1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;i.uniform3fv(this.addr,t),pn(e,t)}}function g1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4fv(this.addr,t),pn(e,t)}}function _1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;t0.set(n),i.uniformMatrix2fv(this.addr,!1,t0),pn(e,n)}}function y1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),pn(e,n)}}function x1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;ju.set(n),i.uniformMatrix4fv(this.addr,!1,ju),pn(e,n)}}function M1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function b1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2iv(this.addr,t),pn(e,t)}}function v1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3iv(this.addr,t),pn(e,t)}}function E1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4iv(this.addr,t),pn(e,t)}}function w1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function S1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2uiv(this.addr,t),pn(e,t)}}function T1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3uiv(this.addr,t),pn(e,t)}}function A1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4uiv(this.addr,t),pn(e,t)}}function R1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?($u.compareFunction=O0,s=$u):s=G0,e.setTexture2D(t||s,r)}function C1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||X0,r)}function P1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||q0,r)}function I1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||W0,r)}function L1(i){switch(i){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return y1;case 35676:return x1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return v1;case 35669:case 35673:return E1;case 5125:return w1;case 36294:return S1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return I1}}function D1(i,t){i.uniform1fv(this.addr,t)}function U1(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function N1(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function H1(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function F1(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function O1(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function B1(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function k1(i,t){i.uniform1iv(this.addr,t)}function z1(i,t){i.uniform2iv(this.addr,t)}function V1(i,t){i.uniform3iv(this.addr,t)}function G1(i,t){i.uniform4iv(this.addr,t)}function W1(i,t){i.uniform1uiv(this.addr,t)}function X1(i,t){i.uniform2uiv(this.addr,t)}function q1(i,t){i.uniform3uiv(this.addr,t)}function Y1(i,t){i.uniform4uiv(this.addr,t)}function Z1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);dn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||G0,s[o])}function $1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);dn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||X0,s[o])}function K1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);dn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||q0,s[o])}function J1(i,t,e){let n=this.cache,r=t.length,s=lc(e,r);dn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||W0,s[o])}function j1(i){switch(i){case 5126:return D1;case 35664:return U1;case 35665:return N1;case 35666:return H1;case 35674:return F1;case 35675:return O1;case 35676:return B1;case 5124:case 35670:return k1;case 35667:case 35671:return z1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return X1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return J1}}var jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L1(e.type)}},Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j1(e.type)}},th=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function e0(i,t){i.seq.push(t),i.map[t.id]=t}function Q1(i,t,e){let n=i.name,r=n.length;for(tl.lastIndex=0;;){let s=tl.exec(n),o=tl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){e0(e,l===void 0?new jl(a,i,t):new Ql(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new th(a),e0(e,u)),e=u}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Q1(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function n0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var t_=37297,e_=0;function n_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function i_(i){let t=Le.getPrimaries(Le.workingColorSpace),e=Le.getPrimaries(i),n;switch(t===e?n="":t===Na&&e===Ua?n="LinearDisplayP3ToLinearSRGB":t===Ua&&e===Na&&(n="LinearSRGBToLinearDisplayP3"),i){case fr:case cc:return[n,"LinearTransferOETF"];case nn:case Wh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function i0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+n_(i.getShaderSource(t),o)}else return r}function r_(i,t){let e=i_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function s_(i,t){let e;switch(t){case md:e="Linear";break;case gd:e="Reinhard";break;case _d:e="Cineon";break;case Io:e="ACESFilmic";break;case xd:e="AgX";break;case Md:e="Neutral";break;case yd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var da=new R;function o_(){Le.getLuminanceCoefficients(da);let i=da.x.toFixed(4),t=da.y.toFixed(4),e=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function c_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function lo(i){return i!==""}function r0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function s0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(i){return i.replace(h_,f_)}var u_=new Map;function f_(i,t){let e=pe[t];if(e===void 0){let n=u_.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return eh(e)}var d_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(i){return i.replace(d_,p_)}function p_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function a0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function m_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===A0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$f?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function g_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case Es:t="ENVMAP_TYPE_CUBE";break;case ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function __(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Es&&(t="ENVMAP_MODE_REFRACTION"),t}function y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uh:t="ENVMAP_BLENDING_MULTIPLY";break;case Nh:t="ENVMAP_BLENDING_MIX";break;case pd:t="ENVMAP_BLENDING_ADD";break}return t}function x_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function M_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=m_(e),l=g_(e),h=__(e),u=y_(e),d=x_(e),m=a_(e),g=c_(s),_=r.createProgram(),f,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lo).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lo).join(`
`),p.length>0&&(p+=`
`)):(f=[a0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),p=[a0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?pe.tonemapping_pars_fragment:"",e.toneMapping!==cr?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,r_("linearToOutputTexel",e.outputColorSpace),o_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lo).join(`
`)),o=eh(o),o=r0(o,e),o=s0(o,e),a=eh(a),a=r0(a,e),a=s0(a,e),o=o0(o),a=o0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=y+f+o,b=y+p+a,L=n0(r,r.VERTEX_SHADER,x),E=n0(r,r.FRAGMENT_SHADER,b);r.attachShader(_,L),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function v(T){if(i.debug.checkShaderErrors){let J=r.getProgramInfoLog(_).trim(),V=r.getShaderInfoLog(L).trim(),Z=r.getShaderInfoLog(E).trim(),ut=!0,ot=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ut=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,E);else{let pt=i0(r,L,"vertex"),D=i0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+J+`
`+pt+`
`+D)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(V===""||Z==="")&&(ot=!1);ot&&(T.diagnostics={runnable:ut,programLog:J,vertexShader:{log:V,prefix:f},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(L),r.deleteShader(E),A=new Ms(r,_),z=l_(r,_)}let A;this.getUniforms=function(){return A===void 0&&v(this),A};let z;this.getAttributes=function(){return z===void 0&&v(this),z};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,t_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=E,this}var b_=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ih(t),e.set(t,n)),n}},ih=class{constructor(t){this.id=b_++,this.code=t,this.usedTimes=0}};function v_(i,t,e,n,r,s,o){let a=new ka,c=new nh,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,T,J,V,Z){let ut=V.fog,ot=Z.geometry,pt=M.isMeshStandardMaterial?V.environment:null,D=(M.isMeshStandardMaterial?e:t).get(M.envMap||pt),tt=D&&D.mapping===ac?D.image.height:null,W=_[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let O=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,G=O!==void 0?O.length:0,H=0;ot.morphAttributes.position!==void 0&&(H=1),ot.morphAttributes.normal!==void 0&&(H=2),ot.morphAttributes.color!==void 0&&(H=3);let C,I,k,$;if(W){let je=yi[W];C=je.vertexShader,I=je.fragmentShader}else C=M.vertexShader,I=M.fragmentShader,c.update(M),k=c.getVertexShaderID(M),$=c.getFragmentShaderID(M);let B=i.getRenderTarget(),F=Z.isInstancedMesh===!0,Y=Z.isBatchedMesh===!0,nt=!!M.map,X=!!M.matcap,S=!!D,st=!!M.aoMap,K=!!M.lightMap,q=!!M.bumpMap,j=!!M.normalMap,it=!!M.displacementMap,ct=!!M.emissiveMap,P=!!M.metalnessMap,w=!!M.roughnessMap,N=M.anisotropy>0,et=M.clearcoat>0,lt=M.dispersion>0,rt=M.iridescence>0,Et=M.sheen>0,Mt=M.transmission>0,dt=N&&!!M.anisotropyMap,Lt=et&&!!M.clearcoatMap,mt=et&&!!M.clearcoatNormalMap,At=et&&!!M.clearcoatRoughnessMap,Vt=rt&&!!M.iridescenceMap,Ot=rt&&!!M.iridescenceThicknessMap,Rt=Et&&!!M.sheenColorMap,Ct=Et&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,ee=!!M.specularColorMap,at=!!M.specularIntensityMap,Dt=Mt&&!!M.transmissionMap,bt=Mt&&!!M.thicknessMap,Tt=!!M.gradientMap,Xt=!!M.alphaMap,$t=M.alphaTest>0,de=!!M.alphaHash,ze=!!M.extensions,Je=cr;M.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Je=i.toneMapping);let ye={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:C,fragmentShader:I,defines:M.defines,customVertexShaderID:k,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Y,batchingColor:Y&&Z._colorsTexture!==null,instancing:F,instancingColor:F&&Z.instanceColor!==null,instancingMorph:F&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:fr,alphaToCoverage:!!M.alphaToCoverage,map:nt,matcap:X,envMap:S,envMapMode:S&&D.mapping,envMapCubeUVHeight:tt,aoMap:st,lightMap:K,bumpMap:q,normalMap:j,displacementMap:m&&it,emissiveMap:ct,normalMapObjectSpace:j&&M.normalMapType===wd,normalMapTangentSpace:j&&M.normalMapType===Gh,metalnessMap:P,roughnessMap:w,anisotropy:N,anisotropyMap:dt,clearcoat:et,clearcoatMap:Lt,clearcoatNormalMap:mt,clearcoatRoughnessMap:At,dispersion:lt,iridescence:rt,iridescenceMap:Vt,iridescenceThicknessMap:Ot,sheen:Et,sheenColorMap:Rt,sheenRoughnessMap:Ct,specularMap:Wt,specularColorMap:ee,specularIntensityMap:at,transmission:Mt,transmissionMap:Dt,thicknessMap:bt,gradientMap:Tt,opaque:M.transparent===!1&&M.blending===Mi&&M.alphaToCoverage===!1,alphaMap:Xt,alphaTest:$t,alphaHash:de,combine:M.combine,mapUv:nt&&f(M.map.channel),aoMapUv:st&&f(M.aoMap.channel),lightMapUv:K&&f(M.lightMap.channel),bumpMapUv:q&&f(M.bumpMap.channel),normalMapUv:j&&f(M.normalMap.channel),displacementMapUv:it&&f(M.displacementMap.channel),emissiveMapUv:ct&&f(M.emissiveMap.channel),metalnessMapUv:P&&f(M.metalnessMap.channel),roughnessMapUv:w&&f(M.roughnessMap.channel),anisotropyMapUv:dt&&f(M.anisotropyMap.channel),clearcoatMapUv:Lt&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:mt&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&f(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&f(M.sheenRoughnessMap.channel),specularMapUv:Wt&&f(M.specularMap.channel),specularColorMapUv:ee&&f(M.specularColorMap.channel),specularIntensityMapUv:at&&f(M.specularIntensityMap.channel),transmissionMapUv:Dt&&f(M.transmissionMap.channel),thicknessMapUv:bt&&f(M.thicknessMap.channel),alphaMapUv:Xt&&f(M.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(j||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ot.attributes.uv&&(nt||Xt),fog:!!ut,useFog:M.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:H,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:nt&&M.map.isVideoTexture===!0&&Le.getTransfer(M.map.colorSpace)===We,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pe,flipSided:M.side===Wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function y(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let J in M.defines)T.push(J),T.push(M.defines[J]);return M.isRawShaderMaterial===!1&&(x(T,M),b(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function b(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),M.push(a.mask)}function L(M){let T=_[M.type],J;if(T){let V=yi[T];J=fp.clone(V.uniforms)}else J=M.uniforms;return J}function E(M,T){let J;for(let V=0,Z=h.length;V<Z;V++){let ut=h[V];if(ut.cacheKey===T){J=ut,++J.usedTimes;break}}return J===void 0&&(J=new M_(i,T,M,s),h.push(J)),J}function v(M){if(--M.usedTimes===0){let T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:L,acquireProgram:E,releaseProgram:v,releaseShaderCache:A,programs:h,dispose:z}}function E_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function w_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function c0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function l0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,g,_,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||w_),n.length>1&&n.sort(d||c0),r.length>1&&r.sort(d||c0)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function S_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new l0,i.set(n,[o])):r>=s.length?(o=new l0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function T_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new zt};break;case"SpotLight":e={position:new R,direction:new R,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var R_=0;function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P_(i){let t=new T_,e=A_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let r=new R,s=new ae,o=new ae;function a(l){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,y=0,x=0,b=0,L=0,E=0,v=0;l.sort(C_);for(let z=0,M=l.length;z<M;z++){let T=l[z],J=T.color,V=T.intensity,Z=T.distance,ut=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=J.r*V,u+=J.g*V,d+=J.b*V;else if(T.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(T.sh.coefficients[ot],V);v++}else if(T.isDirectionalLight){let ot=t.get(T);if(ot.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let pt=T.shadow,D=e.get(T);D.shadowIntensity=pt.intensity,D.shadowBias=pt.bias,D.shadowNormalBias=pt.normalBias,D.shadowRadius=pt.radius,D.shadowMapSize=pt.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=ut,n.directionalShadowMatrix[m]=T.shadow.matrix,y++}n.directional[m]=ot,m++}else if(T.isSpotLight){let ot=t.get(T);ot.position.setFromMatrixPosition(T.matrixWorld),ot.color.copy(J).multiplyScalar(V),ot.distance=Z,ot.coneCos=Math.cos(T.angle),ot.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),ot.decay=T.decay,n.spot[_]=ot;let pt=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,pt.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[_]=pt.matrix,T.castShadow){let D=e.get(T);D.shadowIntensity=pt.intensity,D.shadowBias=pt.bias,D.shadowNormalBias=pt.normalBias,D.shadowRadius=pt.radius,D.shadowMapSize=pt.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=ut,b++}_++}else if(T.isRectAreaLight){let ot=t.get(T);ot.color.copy(J).multiplyScalar(V),ot.halfWidth.set(T.width*.5,0,0),ot.halfHeight.set(0,T.height*.5,0),n.rectArea[f]=ot,f++}else if(T.isPointLight){let ot=t.get(T);if(ot.color.copy(T.color).multiplyScalar(T.intensity),ot.distance=T.distance,ot.decay=T.decay,T.castShadow){let pt=T.shadow,D=e.get(T);D.shadowIntensity=pt.intensity,D.shadowBias=pt.bias,D.shadowNormalBias=pt.normalBias,D.shadowRadius=pt.radius,D.shadowMapSize=pt.mapSize,D.shadowCameraNear=pt.camera.near,D.shadowCameraFar=pt.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=ut,n.pointShadowMatrix[g]=T.shadow.matrix,x++}n.point[g]=ot,g++}else if(T.isHemisphereLight){let ot=t.get(T);ot.skyColor.copy(T.color).multiplyScalar(V),ot.groundColor.copy(T.groundColor).multiplyScalar(V),n.hemi[p]=ot,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qt.LTC_FLOAT_1,n.rectAreaLTC2=qt.LTC_FLOAT_2):(n.rectAreaLTC1=qt.LTC_HALF_1,n.rectAreaLTC2=qt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==m||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==f||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==x||A.numSpotShadows!==b||A.numSpotMaps!==L||A.numLightProbes!==v)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=v,A.directionalLength=m,A.pointLength=g,A.spotLength=_,A.rectAreaLength=f,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=x,A.numSpotShadows=b,A.numSpotMaps=L,A.numLightProbes=v,n.version=R_++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0,f=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let x=l[p];if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(x.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),m++}else if(x.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(x.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function h0(i){let t=new P_(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function I_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new h0(i),t.set(r,[a])):s>=o.length?(a=new h0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var rh=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sh=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`;function U_(i,t,e){let n=new bo,r=new Ut,s=new Ut,o=new Fe,a=new rh({depthPacking:Ed}),c=new sh,l={},h=e.maxTextureSize,u={[In]:Wn,[Wn]:In,[Pe]:Pe},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new St(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A0;let p=this.type;this.render=function(E,v,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let z=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),J=i.state;J.setBlending(ar),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let V=p!==Bi&&this.type===Bi,Z=p===Bi&&this.type!==Bi;for(let ut=0,ot=E.length;ut<ot;ut++){let pt=E[ut],D=pt.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let tt=D.getFrameExtents();if(r.multiply(tt),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/tt.x),r.x=s.x*tt.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/tt.y),r.y=s.y*tt.y,D.mapSize.y=s.y)),D.map===null||V===!0||Z===!0){let O=this.type!==Bi?{minFilter:wn,magFilter:wn}:{};D.map!==null&&D.map.dispose(),D.map=new Wi(r.x,r.y,O),D.map.texture.name=pt.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let W=D.getViewportCount();for(let O=0;O<W;O++){let G=D.getViewport(O);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),J.viewport(o),D.updateMatrices(pt,O),n=D.getFrustum(),b(v,A,D.camera,pt,this.type)}D.isPointLightShadow!==!0&&this.type===Bi&&y(D,A),D.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(z,M,T)};function y(E,v){let A=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wi(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(v,null,A,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(v,null,A,m,_,null)}function x(E,v,A,z){let M=null,T=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let J=M.uuid,V=v.uuid,Z=l[J];Z===void 0&&(Z={},l[J]=Z);let ut=Z[V];ut===void 0&&(ut=M.clone(),Z[V]=ut,v.addEventListener("dispose",L)),M=ut}if(M.visible=v.visible,M.wireframe=v.wireframe,z===Bi?M.side=v.shadowSide!==null?v.shadowSide:v.side:M.side=v.shadowSide!==null?v.shadowSide:u[v.side],M.alphaMap=v.alphaMap,M.alphaTest=v.alphaTest,M.map=v.map,M.clipShadows=v.clipShadows,M.clippingPlanes=v.clippingPlanes,M.clipIntersection=v.clipIntersection,M.displacementMap=v.displacementMap,M.displacementScale=v.displacementScale,M.displacementBias=v.displacementBias,M.wireframeLinewidth=v.wireframeLinewidth,M.linewidth=v.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let J=i.properties.get(M);J.light=A}return M}function b(E,v,A,z,M){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Bi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let V=t.update(E),Z=E.material;if(Array.isArray(Z)){let ut=V.groups;for(let ot=0,pt=ut.length;ot<pt;ot++){let D=ut[ot],tt=Z[D.materialIndex];if(tt&&tt.visible){let W=x(E,tt,z,M);E.onBeforeShadow(i,E,v,A,V,W,D),i.renderBufferDirect(A,null,V,W,E,D),E.onAfterShadow(i,E,v,A,V,W,D)}}}else if(Z.visible){let ut=x(E,Z,z,M);E.onBeforeShadow(i,E,v,A,V,ut,null),i.renderBufferDirect(A,null,V,ut,E,null),E.onAfterShadow(i,E,v,A,V,ut,null)}}let J=E.children;for(let V=0,Z=J.length;V<Z;V++)b(J[V],v,A,z,M)}function L(E){E.target.removeEventListener("dispose",L);for(let A in l){let z=l[A],M=E.target.uuid;M in z&&(z[M].dispose(),delete z[M])}}}var N_={[hl]:ul,[fl]:ml,[dl]:gl,[bs]:pl,[ul]:hl,[ml]:fl,[gl]:dl,[pl]:bs};function H_(i){function t(){let at=!1,Dt=new Fe,bt=null,Tt=new Fe(0,0,0,0);return{setMask:function(Xt){bt!==Xt&&!at&&(i.colorMask(Xt,Xt,Xt,Xt),bt=Xt)},setLocked:function(Xt){at=Xt},setClear:function(Xt,$t,de,ze,Je){Je===!0&&(Xt*=ze,$t*=ze,de*=ze),Dt.set(Xt,$t,de,ze),Tt.equals(Dt)===!1&&(i.clearColor(Xt,$t,de,ze),Tt.copy(Dt))},reset:function(){at=!1,bt=null,Tt.set(-1,0,0,0)}}}function e(){let at=!1,Dt=!1,bt=null,Tt=null,Xt=null;return{setReversed:function($t){Dt=$t},setTest:function($t){$t?k(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function($t){bt!==$t&&!at&&(i.depthMask($t),bt=$t)},setFunc:function($t){if(Dt&&($t=N_[$t]),Tt!==$t){switch($t){case hl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case dl:i.depthFunc(i.EQUAL);break;case pl:i.depthFunc(i.GEQUAL);break;case ml:i.depthFunc(i.GREATER);break;case gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=$t}},setLocked:function($t){at=$t},setClear:function($t){Xt!==$t&&(i.clearDepth($t),Xt=$t)},reset:function(){at=!1,bt=null,Tt=null,Xt=null}}}function n(){let at=!1,Dt=null,bt=null,Tt=null,Xt=null,$t=null,de=null,ze=null,Je=null;return{setTest:function(ye){at||(ye?k(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(ye){Dt!==ye&&!at&&(i.stencilMask(ye),Dt=ye)},setFunc:function(ye,je,zn){(bt!==ye||Tt!==je||Xt!==zn)&&(i.stencilFunc(ye,je,zn),bt=ye,Tt=je,Xt=zn)},setOp:function(ye,je,zn){($t!==ye||de!==je||ze!==zn)&&(i.stencilOp(ye,je,zn),$t=ye,de=je,ze=zn)},setLocked:function(ye){at=ye},setClear:function(ye){Je!==ye&&(i.clearStencil(ye),Je=ye)},reset:function(){at=!1,Dt=null,bt=null,Tt=null,Xt=null,$t=null,de=null,ze=null,Je=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,x=null,b=null,L=null,E=new zt(0,0,0),v=0,A=!1,z=null,M=null,T=null,J=null,V=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ut=!1,ot=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(pt)[1]),ut=ot>=1):pt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),ut=ot>=2);let D=null,tt={},W=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),G=new Fe().fromArray(W),H=new Fe().fromArray(O);function C(at,Dt,bt,Tt){let Xt=new Uint8Array(4),$t=i.createTexture();i.bindTexture(at,$t),i.texParameteri(at,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(at,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<bt;de++)at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Xt):i.texImage2D(Dt+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xt);return $t}let I={};I[i.TEXTURE_2D]=C(i.TEXTURE_2D,i.TEXTURE_2D,1),I[i.TEXTURE_CUBE_MAP]=C(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[i.TEXTURE_2D_ARRAY]=C(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),I[i.TEXTURE_3D]=C(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),k(i.DEPTH_TEST),s.setFunc(bs),K(!1),q(_u),k(i.CULL_FACE),S(ar);function k(at){l[at]!==!0&&(i.enable(at),l[at]=!0)}function $(at){l[at]!==!1&&(i.disable(at),l[at]=!1)}function B(at,Dt){return h[at]!==Dt?(i.bindFramebuffer(at,Dt),h[at]=Dt,at===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Dt),at===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function F(at,Dt){let bt=d,Tt=!1;if(at){bt=u.get(Dt),bt===void 0&&(bt=[],u.set(Dt,bt));let Xt=at.textures;if(bt.length!==Xt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,de=Xt.length;$t<de;$t++)bt[$t]=i.COLOR_ATTACHMENT0+$t;bt.length=Xt.length,Tt=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(bt)}function Y(at){return m!==at?(i.useProgram(at),m=at,!0):!1}let nt={[Cr]:i.FUNC_ADD,[Jf]:i.FUNC_SUBTRACT,[jf]:i.FUNC_REVERSE_SUBTRACT};nt[Qf]=i.MIN,nt[td]=i.MAX;let X={[ed]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[sd]:i.DST_ALPHA,[rd]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[dd]:i.ONE_MINUS_CONSTANT_ALPHA};function S(at,Dt,bt,Tt,Xt,$t,de,ze,Je,ye){if(at===ar){g===!0&&($(i.BLEND),g=!1);return}if(g===!1&&(k(i.BLEND),g=!0),at!==Kf){if(at!==_||ye!==A){if((f!==Cr||x!==Cr)&&(i.blendEquation(i.FUNC_ADD),f=Cr,x=Cr),ye)switch(at){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case un:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case un:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}p=null,y=null,b=null,L=null,E.set(0,0,0),v=0,_=at,A=ye}return}Xt=Xt||Dt,$t=$t||bt,de=de||Tt,(Dt!==f||Xt!==x)&&(i.blendEquationSeparate(nt[Dt],nt[Xt]),f=Dt,x=Xt),(bt!==p||Tt!==y||$t!==b||de!==L)&&(i.blendFuncSeparate(X[bt],X[Tt],X[$t],X[de]),p=bt,y=Tt,b=$t,L=de),(ze.equals(E)===!1||Je!==v)&&(i.blendColor(ze.r,ze.g,ze.b,Je),E.copy(ze),v=Je),_=at,A=!1}function st(at,Dt){at.side===Pe?$(i.CULL_FACE):k(i.CULL_FACE);let bt=at.side===Wn;Dt&&(bt=!bt),K(bt),at.blending===Mi&&at.transparent===!1?S(ar):S(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),s.setFunc(at.depthFunc),s.setTest(at.depthTest),s.setMask(at.depthWrite),r.setMask(at.colorWrite);let Tt=at.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(at.stencilWriteMask),o.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),o.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),it(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(at){z!==at&&(at?i.frontFace(i.CW):i.frontFace(i.CCW),z=at)}function q(at){at!==Yf?(k(i.CULL_FACE),at!==M&&(at===_u?i.cullFace(i.BACK):at===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),M=at}function j(at){at!==T&&(ut&&i.lineWidth(at),T=at)}function it(at,Dt,bt){at?(k(i.POLYGON_OFFSET_FILL),(J!==Dt||V!==bt)&&(i.polygonOffset(Dt,bt),J=Dt,V=bt)):$(i.POLYGON_OFFSET_FILL)}function ct(at){at?k(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function P(at){at===void 0&&(at=i.TEXTURE0+Z-1),D!==at&&(i.activeTexture(at),D=at)}function w(at,Dt,bt){bt===void 0&&(D===null?bt=i.TEXTURE0+Z-1:bt=D);let Tt=tt[bt];Tt===void 0&&(Tt={type:void 0,texture:void 0},tt[bt]=Tt),(Tt.type!==at||Tt.texture!==Dt)&&(D!==bt&&(i.activeTexture(bt),D=bt),i.bindTexture(at,Dt||I[at]),Tt.type=at,Tt.texture=Dt)}function N(){let at=tt[D];at!==void 0&&at.type!==void 0&&(i.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ot(at){G.equals(at)===!1&&(i.scissor(at.x,at.y,at.z,at.w),G.copy(at))}function Rt(at){H.equals(at)===!1&&(i.viewport(at.x,at.y,at.z,at.w),H.copy(at))}function Ct(at,Dt){let bt=c.get(Dt);bt===void 0&&(bt=new WeakMap,c.set(Dt,bt));let Tt=bt.get(at);Tt===void 0&&(Tt=i.getUniformBlockIndex(Dt,at.name),bt.set(at,Tt))}function Wt(at,Dt){let Tt=c.get(Dt).get(at);a.get(Dt)!==Tt&&(i.uniformBlockBinding(Dt,Tt,at.__bindingPointIndex),a.set(Dt,Tt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},D=null,tt={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,x=null,b=null,L=null,E=new zt(0,0,0),v=0,A=!1,z=null,M=null,T=null,J=null,V=null,G.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:k,disable:$,bindFramebuffer:B,drawBuffers:F,useProgram:Y,setBlending:S,setMaterial:st,setFlipSided:K,setCullFace:q,setLineWidth:j,setPolygonOffset:it,setScissorTest:ct,activeTexture:P,bindTexture:w,unbindTexture:N,compressedTexImage2D:et,compressedTexImage3D:lt,texImage2D:At,texImage3D:Vt,updateUBOMapping:Ct,uniformBlockBinding:Wt,texStorage2D:Lt,texStorage3D:mt,texSubImage2D:rt,texSubImage3D:Et,compressedTexSubImage2D:Mt,compressedTexSubImage3D:dt,scissor:Ot,viewport:Rt,reset:ee}}function u0(i,t,e,n){let r=F_(n);switch(e){case L0:return i*t;case U0:return i*t;case N0:return i*t*2;case Bh:return i*t/r.components*r.byteLength;case kh:return i*t/r.components*r.byteLength;case H0:return i*t*2/r.components*r.byteLength;case zh:return i*t*2/r.components*r.byteLength;case D0:return i*t*3/r.components*r.byteLength;case ui:return i*t*4/r.components*r.byteLength;case Vh:return i*t*4/r.components*r.byteLength;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:case vl:return Math.max(i,16)*Math.max(t,8)/4;case xl:case bl:return Math.max(i,8)*Math.max(t,8)/2;case El:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pa:case kl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case F0:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F_(i){switch(i){case Gi:case C0:return{byteLength:1,components:1};case yo:case P0:case Lo:return{byteLength:2,components:1};case Fh:case Oh:return{byteLength:2,components:4};case Dr:case Hh:case xi:return{byteLength:4,components:1};case I0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function O_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return m?new OffscreenCanvas(P,w):Fa("canvas")}function _(P,w,N){let et=1,lt=ct(P);if((lt.width>N||lt.height>N)&&(et=N/Math.max(lt.width,lt.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let rt=Math.floor(et*lt.width),Et=Math.floor(et*lt.height);u===void 0&&(u=g(rt,Et));let Mt=w?g(rt,Et):u;return Mt.width=rt,Mt.height=Et,Mt.getContext("2d").drawImage(P,0,0,rt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+rt+"x"+Et+")."),Mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==wn&&P.minFilter!==li}function p(P){i.generateMipmap(P)}function y(P,w,N,et,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let rt=w;if(w===i.RED&&(N===i.FLOAT&&(rt=i.R32F),N===i.HALF_FLOAT&&(rt=i.R16F),N===i.UNSIGNED_BYTE&&(rt=i.R8)),w===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(rt=i.R8UI),N===i.UNSIGNED_SHORT&&(rt=i.R16UI),N===i.UNSIGNED_INT&&(rt=i.R32UI),N===i.BYTE&&(rt=i.R8I),N===i.SHORT&&(rt=i.R16I),N===i.INT&&(rt=i.R32I)),w===i.RG&&(N===i.FLOAT&&(rt=i.RG32F),N===i.HALF_FLOAT&&(rt=i.RG16F),N===i.UNSIGNED_BYTE&&(rt=i.RG8)),w===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(rt=i.RG8UI),N===i.UNSIGNED_SHORT&&(rt=i.RG16UI),N===i.UNSIGNED_INT&&(rt=i.RG32UI),N===i.BYTE&&(rt=i.RG8I),N===i.SHORT&&(rt=i.RG16I),N===i.INT&&(rt=i.RG32I)),w===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),N===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),N===i.UNSIGNED_INT&&(rt=i.RGB32UI),N===i.BYTE&&(rt=i.RGB8I),N===i.SHORT&&(rt=i.RGB16I),N===i.INT&&(rt=i.RGB32I)),w===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),N===i.UNSIGNED_INT&&(rt=i.RGBA32UI),N===i.BYTE&&(rt=i.RGBA8I),N===i.SHORT&&(rt=i.RGBA16I),N===i.INT&&(rt=i.RGBA32I)),w===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),w===i.RGBA){let Et=lt?Da:Le.getTransfer(et);N===i.FLOAT&&(rt=i.RGBA32F),N===i.HALF_FLOAT&&(rt=i.RGBA16F),N===i.UNSIGNED_BYTE&&(rt=Et===We?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function x(P,w){let N;return P?w===null||w===Dr||w===ws?N=i.DEPTH24_STENCIL8:w===xi?N=i.DEPTH32F_STENCIL8:w===yo&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Dr||w===ws?N=i.DEPTH_COMPONENT24:w===xi?N=i.DEPTH_COMPONENT32F:w===yo&&(N=i.DEPTH_COMPONENT16),N}function b(P,w){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==wn&&P.minFilter!==li?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function L(P){let w=P.target;w.removeEventListener("dispose",L),v(w),w.isVideoTexture&&h.delete(w)}function E(P){let w=P.target;w.removeEventListener("dispose",E),z(w)}function v(P){let w=n.get(P);if(w.__webglInit===void 0)return;let N=P.source,et=d.get(N);if(et){let lt=et[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&A(P),Object.keys(et).length===0&&d.delete(N)}n.remove(P)}function A(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let N=P.source,et=d.get(N);delete et[w.__cacheKey],o.memory.textures--}function z(P){let w=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let lt=0;lt<w.__webglFramebuffer[et].length;lt++)i.deleteFramebuffer(w.__webglFramebuffer[et][lt]);else i.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)i.deleteFramebuffer(w.__webglFramebuffer[et]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let N=P.textures;for(let et=0,lt=N.length;et<lt;et++){let rt=n.get(N[et]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(N[et])}n.remove(P)}let M=0;function T(){M=0}function J(){let P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function V(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Z(P,w){let N=n.get(P);if(P.isVideoTexture&&j(P),P.isRenderTargetTexture===!1&&P.version>0&&N.__version!==P.version){let et=P.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(N,P,w);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+w)}function ut(P,w){let N=n.get(P);if(P.version>0&&N.__version!==P.version){H(N,P,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+w)}function ot(P,w){let N=n.get(P);if(P.version>0&&N.__version!==P.version){H(N,P,w);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+w)}function pt(P,w){let N=n.get(P);if(P.version>0&&N.__version!==P.version){C(N,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+w)}let D={[Lr]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[yl]:i.MIRRORED_REPEAT},tt={[wn]:i.NEAREST,[bd]:i.NEAREST_MIPMAP_NEAREST,[Yo]:i.NEAREST_MIPMAP_LINEAR,[li]:i.LINEAR,[Tc]:i.LINEAR_MIPMAP_NEAREST,[Ir]:i.LINEAR_MIPMAP_LINEAR},W={[Sd]:i.NEVER,[Id]:i.ALWAYS,[Td]:i.LESS,[O0]:i.LEQUAL,[Ad]:i.EQUAL,[Pd]:i.GEQUAL,[Rd]:i.GREATER,[Cd]:i.NOTEQUAL};function O(P,w){if(w.type===xi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===li||w.magFilter===Tc||w.magFilter===Yo||w.magFilter===Ir||w.minFilter===li||w.minFilter===Tc||w.minFilter===Yo||w.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,D[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,D[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,D[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,tt[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,tt[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,W[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==Yo&&w.minFilter!==Ir||w.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function G(P,w){let N=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",L));let et=w.source,lt=d.get(et);lt===void 0&&(lt={},d.set(et,lt));let rt=V(w);if(rt!==P.__cacheKey){lt[rt]===void 0&&(lt[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),lt[rt].usedTimes++;let Et=lt[P.__cacheKey];Et!==void 0&&(lt[P.__cacheKey].usedTimes--,Et.usedTimes===0&&A(w)),P.__cacheKey=rt,P.__webglTexture=lt[rt].texture}return N}function H(P,w,N){let et=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=i.TEXTURE_3D);let lt=G(P,w),rt=w.source;e.bindTexture(et,P.__webglTexture,i.TEXTURE0+N);let Et=n.get(rt);if(rt.version!==Et.__version||lt===!0){e.activeTexture(i.TEXTURE0+N);let Mt=Le.getPrimaries(Le.workingColorSpace),dt=w.colorSpace===sr?null:Le.getPrimaries(w.colorSpace),Lt=w.colorSpace===sr||Mt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let mt=_(w.image,!1,r.maxTextureSize);mt=it(w,mt);let At=s.convert(w.format,w.colorSpace),Vt=s.convert(w.type),Ot=y(w.internalFormat,At,Vt,w.colorSpace,w.isVideoTexture);O(et,w);let Rt,Ct=w.mipmaps,Wt=w.isVideoTexture!==!0,ee=Et.__version===void 0||lt===!0,at=rt.dataReady,Dt=b(w,mt);if(w.isDepthTexture)Ot=x(w.format===Ss,w.type),ee&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Ot,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,mt.width,mt.height,0,At,Vt,null));else if(w.isDataTexture)if(Ct.length>0){Wt&&ee&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,Ct[0].width,Ct[0].height);for(let bt=0,Tt=Ct.length;bt<Tt;bt++)Rt=Ct[bt],Wt?at&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,At,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,bt,Ot,Rt.width,Rt.height,0,At,Vt,Rt.data);w.generateMipmaps=!1}else Wt?(ee&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,mt.width,mt.height),at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,At,Vt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,mt.width,mt.height,0,At,Vt,mt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Wt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,Ct[0].width,Ct[0].height,mt.depth);for(let bt=0,Tt=Ct.length;bt<Tt;bt++)if(Rt=Ct[bt],w.format!==ui)if(At!==null)if(Wt){if(at)if(w.layerUpdates.size>0){let Xt=u0(Rt.width,Rt.height,w.format,w.type);for(let $t of w.layerUpdates){let de=Rt.data.subarray($t*Xt/Rt.data.BYTES_PER_ELEMENT,($t+1)*Xt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,$t,Rt.width,Rt.height,1,At,de,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,mt.depth,At,Rt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,bt,Ot,Rt.width,Rt.height,mt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,mt.depth,At,Vt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,bt,Ot,Rt.width,Rt.height,mt.depth,0,At,Vt,Rt.data)}else{Wt&&ee&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,Ct[0].width,Ct[0].height);for(let bt=0,Tt=Ct.length;bt<Tt;bt++)Rt=Ct[bt],w.format!==ui?At!==null?Wt?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,bt,Ot,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?at&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,At,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,bt,Ot,Rt.width,Rt.height,0,At,Vt,Rt.data)}else if(w.isDataArrayTexture)if(Wt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,mt.width,mt.height,mt.depth),at)if(w.layerUpdates.size>0){let bt=u0(mt.width,mt.height,w.format,w.type);for(let Tt of w.layerUpdates){let Xt=mt.data.subarray(Tt*bt/mt.data.BYTES_PER_ELEMENT,(Tt+1)*bt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,mt.width,mt.height,1,At,Vt,Xt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,At,Vt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,mt.width,mt.height,mt.depth,0,At,Vt,mt.data);else if(w.isData3DTexture)Wt?(ee&&e.texStorage3D(i.TEXTURE_3D,Dt,Ot,mt.width,mt.height,mt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,At,Vt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,mt.width,mt.height,mt.depth,0,At,Vt,mt.data);else if(w.isFramebufferTexture){if(ee)if(Wt)e.texStorage2D(i.TEXTURE_2D,Dt,Ot,mt.width,mt.height);else{let bt=mt.width,Tt=mt.height;for(let Xt=0;Xt<Dt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,Ot,bt,Tt,0,At,Vt,null),bt>>=1,Tt>>=1}}else if(Ct.length>0){if(Wt&&ee){let bt=ct(Ct[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,bt.width,bt.height)}for(let bt=0,Tt=Ct.length;bt<Tt;bt++)Rt=Ct[bt],Wt?at&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,At,Vt,Rt):e.texImage2D(i.TEXTURE_2D,bt,Ot,At,Vt,Rt);w.generateMipmaps=!1}else if(Wt){if(ee){let bt=ct(mt);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,bt.width,bt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Vt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,At,Vt,mt);f(w)&&p(et),Et.__version=rt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function C(P,w,N){if(w.image.length!==6)return;let et=G(P,w),lt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+N);let rt=n.get(lt);if(lt.version!==rt.__version||et===!0){e.activeTexture(i.TEXTURE0+N);let Et=Le.getPrimaries(Le.workingColorSpace),Mt=w.colorSpace===sr?null:Le.getPrimaries(w.colorSpace),dt=w.colorSpace===sr||Et===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Lt=w.isCompressedTexture||w.image[0].isCompressedTexture,mt=w.image[0]&&w.image[0].isDataTexture,At=[];for(let Tt=0;Tt<6;Tt++)!Lt&&!mt?At[Tt]=_(w.image[Tt],!0,r.maxCubemapSize):At[Tt]=mt?w.image[Tt].image:w.image[Tt],At[Tt]=it(w,At[Tt]);let Vt=At[0],Ot=s.convert(w.format,w.colorSpace),Rt=s.convert(w.type),Ct=y(w.internalFormat,Ot,Rt,w.colorSpace),Wt=w.isVideoTexture!==!0,ee=rt.__version===void 0||et===!0,at=lt.dataReady,Dt=b(w,Vt);O(i.TEXTURE_CUBE_MAP,w);let bt;if(Lt){Wt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ct,Vt.width,Vt.height);for(let Tt=0;Tt<6;Tt++){bt=At[Tt].mipmaps;for(let Xt=0;Xt<bt.length;Xt++){let $t=bt[Xt];w.format!==ui?Ot!==null?Wt?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,0,0,$t.width,$t.height,Ot,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,Ct,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,0,0,$t.width,$t.height,Ot,Rt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt,Ct,$t.width,$t.height,0,Ot,Rt,$t.data)}}}else{if(bt=w.mipmaps,Wt&&ee){bt.length>0&&Dt++;let Tt=ct(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ct,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(mt){Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,At[Tt].width,At[Tt].height,Ot,Rt,At[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,At[Tt].width,At[Tt].height,0,Ot,Rt,At[Tt].data);for(let Xt=0;Xt<bt.length;Xt++){let de=bt[Xt].image[Tt].image;Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,0,0,de.width,de.height,Ot,Rt,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,Ct,de.width,de.height,0,Ot,Rt,de.data)}}else{Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Ot,Rt,At[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,Ot,Rt,At[Tt]);for(let Xt=0;Xt<bt.length;Xt++){let $t=bt[Xt];Wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,0,0,Ot,Rt,$t.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Xt+1,Ct,Ot,Rt,$t.image[Tt])}}}f(w)&&p(i.TEXTURE_CUBE_MAP),rt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function I(P,w,N,et,lt,rt){let Et=s.convert(N.format,N.colorSpace),Mt=s.convert(N.type),dt=y(N.internalFormat,Et,Mt,N.colorSpace);if(!n.get(w).__hasExternalTextures){let mt=Math.max(1,w.width>>rt),At=Math.max(1,w.height>>rt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,rt,dt,mt,At,w.depth,0,Et,Mt,null):e.texImage2D(lt,rt,dt,mt,At,0,Et,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),q(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,lt,n.get(N).__webglTexture,0,K(w)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,lt,n.get(N).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(P,w,N){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let et=w.depthTexture,lt=et&&et.isDepthTexture?et.type:null,rt=x(w.stencilBuffer,lt),Et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=K(w);q(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,rt,w.width,w.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,rt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,P)}else{let et=w.textures;for(let lt=0;lt<et.length;lt++){let rt=et[lt],Et=s.convert(rt.format,rt.colorSpace),Mt=s.convert(rt.type),dt=y(rt.internalFormat,Et,Mt,rt.colorSpace),Lt=K(w);N&&q(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,dt,w.width,w.height):q(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,dt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,dt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);let et=n.get(w.depthTexture).__webglTexture,lt=K(w);if(w.depthTexture.format===ys)q(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(w.depthTexture.format===Ss)q(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function B(P){let w=n.get(P),N=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let et=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){let lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",lt)};et.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=et}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");$(w.__webglFramebuffer,P)}else if(N){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=i.createRenderbuffer(),k(w.__webglDepthbuffer[et],P,!1);else{let lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=w.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),k(w.__webglDepthbuffer,P,!1);else{let et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(P,w,N){let et=n.get(P);w!==void 0&&I(et.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&B(P)}function Y(P){let w=P.texture,N=n.get(P),et=n.get(w);P.addEventListener("dispose",E);let lt=P.textures,rt=P.isWebGLCubeRenderTarget===!0,Et=lt.length>1;if(Et||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=w.version,o.memory.textures++),rt){N.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer[Mt]=[];for(let dt=0;dt<w.mipmaps.length;dt++)N.__webglFramebuffer[Mt][dt]=i.createFramebuffer()}else N.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)N.__webglFramebuffer[Mt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Et)for(let Mt=0,dt=lt.length;Mt<dt;Mt++){let Lt=n.get(lt[Mt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&q(P)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Mt=0;Mt<lt.length;Mt++){let dt=lt[Mt];N.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Mt]);let Lt=s.convert(dt.format,dt.colorSpace),mt=s.convert(dt.type),At=y(dt.internalFormat,Lt,mt,dt.colorSpace,P.isXRRenderTarget===!0),Vt=K(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,At,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,N.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),k(N.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),O(i.TEXTURE_CUBE_MAP,w);for(let Mt=0;Mt<6;Mt++)if(w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)I(N.__webglFramebuffer[Mt][dt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,dt);else I(N.__webglFramebuffer[Mt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);f(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let Mt=0,dt=lt.length;Mt<dt;Mt++){let Lt=lt[Mt],mt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),O(i.TEXTURE_2D,Lt),I(N.__webglFramebuffer,P,Lt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),f(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Mt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,et.__webglTexture),O(Mt,w),w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)I(N.__webglFramebuffer[dt],P,w,i.COLOR_ATTACHMENT0,Mt,dt);else I(N.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,Mt,0);f(w)&&p(Mt),e.unbindTexture()}P.depthBuffer&&B(P)}function nt(P){let w=P.textures;for(let N=0,et=w.length;N<et;N++){let lt=w[N];if(f(lt)){let rt=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(lt).__webglTexture;e.bindTexture(rt,Et),p(rt),e.unbindTexture()}}}let X=[],S=[];function st(P){if(P.samples>0){if(q(P)===!1){let w=P.textures,N=P.width,et=P.height,lt=i.COLOR_BUFFER_BIT,rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(P),Mt=w.length>1;if(Mt)for(let dt=0;dt<w.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let dt=0;dt<w.length;dt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[dt]);let Lt=n.get(w[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,N,et,0,0,N,et,lt,i.NEAREST),c===!0&&(X.length=0,S.length=0,X.push(i.COLOR_ATTACHMENT0+dt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(X.push(rt),S.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let dt=0;dt<w.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[dt]);let Lt=n.get(w[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function K(P){return Math.min(r.maxSamples,P.samples)}function q(P){let w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function j(P){let w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function it(P,w){let N=P.colorSpace,et=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||N!==fr&&N!==sr&&(Le.getTransfer(N)===We?(et!==ui||lt!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),w}function ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=T,this.setTexture2D=Z,this.setTexture2DArray=ut,this.setTexture3D=ot,this.setTextureCube=pt,this.rebindTextures=F,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=I,this.useMultisampledRTT=q}function B_(i,t){function e(n,r=sr){let s,o=Le.getTransfer(r);if(n===Gi)return i.UNSIGNED_BYTE;if(n===Fh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===I0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===C0)return i.BYTE;if(n===P0)return i.SHORT;if(n===yo)return i.UNSIGNED_SHORT;if(n===Hh)return i.INT;if(n===Dr)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===Lo)return i.HALF_FLOAT;if(n===L0)return i.ALPHA;if(n===D0)return i.RGB;if(n===ui)return i.RGBA;if(n===U0)return i.LUMINANCE;if(n===N0)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Bh)return i.RED;if(n===kh)return i.RED_INTEGER;if(n===H0)return i.RG;if(n===zh)return i.RG_INTEGER;if(n===Vh)return i.RGBA_INTEGER;if(n===Ta||n===Aa||n===Ra||n===Ca)if(o===We)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===Ml||n===bl||n===vl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===wl||n===Sl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===El||n===wl)return o===We?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Hl||n===Fl||n===Ol||n===Bl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Il)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ol)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===kl||n===zl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Pa)return o===We?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===F0||n===Vl||n===Gl||n===Wl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Pa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var oh=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},k_={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Xn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qn({vertexShader:z_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends lr{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=new ah,f=e.getContextAttributes(),p=null,y=null,x=[],b=[],L=new Ut,E=null,v=new Mn;v.layers.enable(1),v.viewport=new Fe;let A=new Mn;A.layers.enable(2),A.viewport=new Fe;let z=[v,A],M=new oh;M.layers.enable(1),M.layers.enable(2);let T=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let I=x[C];return I===void 0&&(I=new fo,x[C]=I),I.getTargetRaySpace()},this.getControllerGrip=function(C){let I=x[C];return I===void 0&&(I=new fo,x[C]=I),I.getGripSpace()},this.getHand=function(C){let I=x[C];return I===void 0&&(I=new fo,x[C]=I),I.getHandSpace()};function V(C){let I=b.indexOf(C.inputSource);if(I===-1)return;let k=x[I];k!==void 0&&(k.update(C.inputSource,C.frame,l||o),k.dispatchEvent({type:C.type,data:C.inputSource}))}function Z(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ut);for(let C=0;C<x.length;C++){let I=b[C];I!==null&&(b[C]=null,x[C].disconnect(I))}T=null,J=null,_.reset(),t.setRenderTarget(p),m=null,d=null,u=null,r=null,y=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ut),f.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){let I={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,I),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Wi(m.framebufferWidth,m.framebufferHeight,{format:ui,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let I=null,k=null,$=null;f.depth&&($=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,I=f.stencil?Ss:ys,k=f.stencil?ws:Dr);let B={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(B),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Wi(d.textureWidth,d.textureHeight,{format:ui,type:Gi,depthTexture:new Ya(d.textureWidth,d.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),H.setContext(r),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ut(C){for(let I=0;I<C.removed.length;I++){let k=C.removed[I],$=b.indexOf(k);$>=0&&(b[$]=null,x[$].disconnect(k))}for(let I=0;I<C.added.length;I++){let k=C.added[I],$=b.indexOf(k);if($===-1){for(let F=0;F<x.length;F++)if(F>=b.length){b.push(k),$=F;break}else if(b[F]===null){b[F]=k,$=F;break}if($===-1)break}let B=x[$];B&&B.connect(k)}}let ot=new R,pt=new R;function D(C,I,k){ot.setFromMatrixPosition(I.matrixWorld),pt.setFromMatrixPosition(k.matrixWorld);let $=ot.distanceTo(pt),B=I.projectionMatrix.elements,F=k.projectionMatrix.elements,Y=B[14]/(B[10]-1),nt=B[14]/(B[10]+1),X=(B[9]+1)/B[5],S=(B[9]-1)/B[5],st=(B[8]-1)/B[0],K=(F[8]+1)/F[0],q=Y*st,j=Y*K,it=$/(-st+K),ct=it*-st;if(I.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(ct),C.translateZ(it),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),B[10]===-1)C.projectionMatrix.copy(I.projectionMatrix),C.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{let P=Y+it,w=nt+it,N=q-ct,et=j+($-ct),lt=X*nt/w*P,rt=S*nt/w*P;C.projectionMatrix.makePerspective(N,et,lt,rt,P,w),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function tt(C,I){I===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(I.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(r===null)return;let I=C.near,k=C.far;_.texture!==null&&(_.depthNear>0&&(I=_.depthNear),_.depthFar>0&&(k=_.depthFar)),M.near=A.near=v.near=I,M.far=A.far=v.far=k,(T!==M.near||J!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,J=M.far);let $=C.parent,B=M.cameras;tt(M,$);for(let F=0;F<B.length;F++)tt(B[F],$);B.length===2?D(M,v,A):M.projectionMatrix.copy(v.projectionMatrix),W(C,M,$)};function W(C,I,k){k===null?C.matrix.copy(I.matrixWorld):(C.matrix.copy(k.matrixWorld),C.matrix.invert(),C.matrix.multiply(I.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(I.projectionMatrix),C.projectionMatrixInverse.copy(I.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=xo*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(C){c=C,d!==null&&(d.fixedFoveation=C),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=C)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let O=null;function G(C,I){if(h=I.getViewerPose(l||o),g=I,h!==null){let k=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let $=!1;k.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let F=0;F<k.length;F++){let Y=k[F],nt=null;if(m!==null)nt=m.getViewport(Y);else{let S=u.getViewSubImage(d,Y);nt=S.viewport,F===0&&(t.setRenderTargetTextures(y,S.colorTexture,d.ignoreDepthValues?void 0:S.depthStencilTexture),t.setRenderTarget(y))}let X=z[F];X===void 0&&(X=new Mn,X.layers.enable(F),X.viewport=new Fe,z[F]=X),X.matrix.fromArray(Y.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Y.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(nt.x,nt.y,nt.width,nt.height),F===0&&(M.matrix.copy(X.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(X)}let B=r.enabledFeatures;if(B&&B.includes("depth-sensing")){let F=u.getDepthInformation(k[0]);F&&F.isValid&&F.texture&&_.init(t,F,r.renderState)}}for(let k=0;k<x.length;k++){let $=b[k],B=x[k];$!==null&&B!==void 0&&B.update($,I,l||o)}O&&O(C,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),g=null}let H=new V0;H.setAnimationLoop(G),this.setAnimationLoop=function(C){O=C},this.dispose=function(){}}},Ar=new bn,G_=new ae;function W_(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,z0(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,y,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,y,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Wn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Wn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y=t.get(p),x=y.envMap,b=y.envMapRotation;x&&(f.envMap.value=x,Ar.copy(b),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),f.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(Ar)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,y,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let y=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function X_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){let b=x.program;n.uniformBlockBinding(y,b)}function l(y,x){let b=r[y.id];b===void 0&&(g(y),b=h(y),r[y.id]=b,y.addEventListener("dispose",f));let L=x.program;n.updateUBOMapping(y,L);let E=t.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function h(y){let x=u();y.__bindingPointIndex=x;let b=i.createBuffer(),L=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=r[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,v=b.length;E<v;E++){let A=Array.isArray(b[E])?b[E]:[b[E]];for(let z=0,M=A.length;z<M;z++){let T=A[z];if(m(T,E,z,L)===!0){let J=T.__offset,V=Array.isArray(T.value)?T.value:[T.value],Z=0;for(let ut=0;ut<V.length;ut++){let ot=V[ut],pt=_(ot);typeof ot=="number"||typeof ot=="boolean"?(T.__data[0]=ot,i.bufferSubData(i.UNIFORM_BUFFER,J+Z,T.__data)):ot.isMatrix3?(T.__data[0]=ot.elements[0],T.__data[1]=ot.elements[1],T.__data[2]=ot.elements[2],T.__data[3]=0,T.__data[4]=ot.elements[3],T.__data[5]=ot.elements[4],T.__data[6]=ot.elements[5],T.__data[7]=0,T.__data[8]=ot.elements[6],T.__data[9]=ot.elements[7],T.__data[10]=ot.elements[8],T.__data[11]=0):(ot.toArray(T.__data,Z),Z+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,b,L){let E=y.value,v=x+"_"+b;if(L[v]===void 0)return typeof E=="number"||typeof E=="boolean"?L[v]=E:L[v]=E.clone(),!0;{let A=L[v];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return L[v]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(y){let x=y.uniforms,b=0,L=16;for(let v=0,A=x.length;v<A;v++){let z=Array.isArray(x[v])?x[v]:[x[v]];for(let M=0,T=z.length;M<T;M++){let J=z[M],V=Array.isArray(J.value)?J.value:[J.value];for(let Z=0,ut=V.length;Z<ut;Z++){let ot=V[Z],pt=_(ot),D=b%L,tt=D%pt.boundary,W=D+tt;b+=tt,W!==0&&L-W<pt.storage&&(b+=L-W),J.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=b,b+=pt.storage}}}let E=b%L;return E>0&&(b+=L-E),y.__size=b,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){let x=y.target;x.removeEventListener("dispose",f);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var As=class{constructor(t={}){let{canvas:e=Zd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=cr,this.toneMappingExposure=1;let x=this,b=!1,L=0,E=0,v=null,A=-1,z=null,M=new Fe,T=new Fe,J=null,V=new zt(0),Z=0,ut=e.width,ot=e.height,pt=1,D=null,tt=null,W=new Fe(0,0,ut,ot),O=new Fe(0,0,ut,ot),G=!1,H=new bo,C=!1,I=!1,k=new ae,$=new ae,B=new R,F=new Fe,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function X(){return v===null?pt:1}let S=n;function st(U,ht){return e.getContext(U,ht)}try{let U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",$t,!1),S===null){let ht="webgl2";if(S=st(ht,U),S===null)throw st(ht)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let K,q,j,it,ct,P,w,N,et,lt,rt,Et,Mt,dt,Lt,mt,At,Vt,Ot,Rt,Ct,Wt,ee,at;function Dt(){K=new a1(S),K.init(),Wt=new B_(S,K),q=new e1(S,K,t,Wt),j=new H_(S),q.reverseDepthBuffer&&j.buffers.depth.setReversed(!0),it=new h1(S),ct=new E_,P=new O_(S,K,j,ct,q,Wt,it),w=new i1(x),N=new o1(x),et=new _p(S),ee=new Qg(S,et),lt=new c1(S,et,it,ee),rt=new f1(S,lt,et,it),Ot=new u1(S,q,P),mt=new n1(ct),Et=new v_(x,w,N,K,q,ee,mt),Mt=new W_(x,ct),dt=new S_,Lt=new I_(K),Vt=new jg(x,w,N,j,rt,d,c),At=new U_(x,rt,q),at=new X_(S,it,q,j),Rt=new t1(S,K,it),Ct=new l1(S,K,it),it.programs=Et.programs,x.capabilities=q,x.extensions=K,x.properties=ct,x.renderLists=dt,x.shadowMap=At,x.state=j,x.info=it}Dt();let bt=new ch(x,S);this.xr=bt,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let U=K.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=K.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(U){U!==void 0&&(pt=U,this.setSize(ut,ot,!1))},this.getSize=function(U){return U.set(ut,ot)},this.setSize=function(U,ht,_t=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ut=U,ot=ht,e.width=Math.floor(U*pt),e.height=Math.floor(ht*pt),_t===!0&&(e.style.width=U+"px",e.style.height=ht+"px"),this.setViewport(0,0,U,ht)},this.getDrawingBufferSize=function(U){return U.set(ut*pt,ot*pt).floor()},this.setDrawingBufferSize=function(U,ht,_t){ut=U,ot=ht,pt=_t,e.width=Math.floor(U*_t),e.height=Math.floor(ht*_t),this.setViewport(0,0,U,ht)},this.getCurrentViewport=function(U){return U.copy(M)},this.getViewport=function(U){return U.copy(W)},this.setViewport=function(U,ht,_t,yt){U.isVector4?W.set(U.x,U.y,U.z,U.w):W.set(U,ht,_t,yt),j.viewport(M.copy(W).multiplyScalar(pt).round())},this.getScissor=function(U){return U.copy(O)},this.setScissor=function(U,ht,_t,yt){U.isVector4?O.set(U.x,U.y,U.z,U.w):O.set(U,ht,_t,yt),j.scissor(T.copy(O).multiplyScalar(pt).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(U){j.setScissorTest(G=U)},this.setOpaqueSort=function(U){D=U},this.setTransparentSort=function(U){tt=U},this.getClearColor=function(U){return U.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(U=!0,ht=!0,_t=!0){let yt=0;if(U){let ft=!1;if(v!==null){let Nt=v.texture.format;ft=Nt===Vh||Nt===zh||Nt===kh}if(ft){let Nt=v.texture.type,Zt=Nt===Gi||Nt===Dr||Nt===yo||Nt===ws||Nt===Fh||Nt===Oh,Jt=Vt.getClearColor(),jt=Vt.getClearAlpha(),oe=Jt.r,ie=Jt.g,te=Jt.b;Zt?(m[0]=oe,m[1]=ie,m[2]=te,m[3]=jt,S.clearBufferuiv(S.COLOR,0,m)):(g[0]=oe,g[1]=ie,g[2]=te,g[3]=jt,S.clearBufferiv(S.COLOR,0,g))}else yt|=S.COLOR_BUFFER_BIT}ht&&(yt|=S.DEPTH_BUFFER_BIT,S.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),_t&&(yt|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(yt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),dt.dispose(),Lt.dispose(),ct.dispose(),w.dispose(),N.dispose(),rt.dispose(),ee.dispose(),at.dispose(),Et.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Pi),bt.removeEventListener("sessionend",Bo),Yn.stop()};function Tt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let U=it.autoReset,ht=At.enabled,_t=At.autoUpdate,yt=At.needsUpdate,ft=At.type;Dt(),it.autoReset=U,At.enabled=ht,At.autoUpdate=_t,At.needsUpdate=yt,At.type=ft}function $t(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function de(U){let ht=U.target;ht.removeEventListener("dispose",de),ze(ht)}function ze(U){Je(U),ct.remove(U)}function Je(U){let ht=ct.get(U).programs;ht!==void 0&&(ht.forEach(function(_t){Et.releaseProgram(_t)}),U.isShaderMaterial&&Et.releaseShaderCache(U))}this.renderBufferDirect=function(U,ht,_t,yt,ft,Nt){ht===null&&(ht=Y);let Zt=ft.isMesh&&ft.matrixWorld.determinant()<0,Jt=Xs(U,ht,_t,yt,ft);j.setMaterial(yt,Zt);let jt=_t.index,oe=1;if(yt.wireframe===!0){if(jt=lt.getWireframeAttribute(_t),jt===void 0)return;oe=2}let ie=_t.drawRange,te=_t.attributes.position,Re=ie.start*oe,le=(ie.start+ie.count)*oe;Nt!==null&&(Re=Math.max(Re,Nt.start*oe),le=Math.min(le,(Nt.start+Nt.count)*oe)),jt!==null?(Re=Math.max(Re,0),le=Math.min(le,jt.count)):te!=null&&(Re=Math.max(Re,0),le=Math.min(le,te.count));let Ge=le-Re;if(Ge<0||Ge===1/0)return;ee.setup(ft,yt,Jt,_t,jt);let sn,Ce=Rt;if(jt!==null&&(sn=et.get(jt),Ce=Ct,Ce.setIndex(sn)),ft.isMesh)yt.wireframe===!0?(j.setLineWidth(yt.wireframeLinewidth*X()),Ce.setMode(S.LINES)):Ce.setMode(S.TRIANGLES);else if(ft.isLine){let ne=yt.linewidth;ne===void 0&&(ne=1),j.setLineWidth(ne*X()),ft.isLineSegments?Ce.setMode(S.LINES):ft.isLineLoop?Ce.setMode(S.LINE_LOOP):Ce.setMode(S.LINE_STRIP)}else ft.isPoints?Ce.setMode(S.POINTS):ft.isSprite&&Ce.setMode(S.TRIANGLES);if(ft.isBatchedMesh)if(ft._multiDrawInstances!==null)Ce.renderMultiDrawInstances(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount,ft._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Ce.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{let ne=ft._multiDrawStarts,hn=ft._multiDrawCounts,we=ft._multiDrawCount,Vn=jt?et.get(jt).bytesPerElement:1,Gn=ct.get(yt).currentProgram.getUniforms();for(let Rn=0;Rn<we;Rn++)Gn.setValue(S,"_gl_DrawID",Rn),Ce.render(ne[Rn]/Vn,hn[Rn])}else if(ft.isInstancedMesh)Ce.renderInstances(Re,Ge,ft.count);else if(_t.isInstancedBufferGeometry){let ne=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,hn=Math.min(_t.instanceCount,ne);Ce.renderInstances(Re,Ge,hn)}else Ce.render(Re,Ge)};function ye(U,ht,_t){U.transparent===!0&&U.side===Pe&&U.forceSinglePass===!1?(U.side=Wn,U.needsUpdate=!0,Yr(U,ht,_t),U.side=In,U.needsUpdate=!0,Yr(U,ht,_t),U.side=Pe):Yr(U,ht,_t)}this.compile=function(U,ht,_t=null){_t===null&&(_t=U),f=Lt.get(_t),f.init(ht),y.push(f),_t.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ht.layers)&&(f.pushLight(ft),ft.castShadow&&f.pushShadow(ft))}),U!==_t&&U.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ht.layers)&&(f.pushLight(ft),ft.castShadow&&f.pushShadow(ft))}),f.setupLights();let yt=new Set;return U.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;let Nt=ft.material;if(Nt)if(Array.isArray(Nt))for(let Zt=0;Zt<Nt.length;Zt++){let Jt=Nt[Zt];ye(Jt,_t,ft),yt.add(Jt)}else ye(Nt,_t,ft),yt.add(Nt)}),y.pop(),f=null,yt},this.compileAsync=function(U,ht,_t=null){let yt=this.compile(U,ht,_t);return new Promise(ft=>{function Nt(){if(yt.forEach(function(Zt){ct.get(Zt).currentProgram.isReady()&&yt.delete(Zt)}),yt.size===0){ft(U);return}setTimeout(Nt,10)}K.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let je=null;function zn(U){je&&je(U)}function Pi(){Yn.stop()}function Bo(){Yn.start()}let Yn=new V0;Yn.setAnimationLoop(zn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(U){je=U,bt.setAnimationLoop(U),U===null?Yn.stop():Yn.start()},bt.addEventListener("sessionstart",Pi),bt.addEventListener("sessionend",Bo),this.render=function(U,ht){if(ht!==void 0&&ht.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ht.parent===null&&ht.matrixWorldAutoUpdate===!0&&ht.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(ht),ht=bt.getCamera()),U.isScene===!0&&U.onBeforeRender(x,U,ht,v),f=Lt.get(U,y.length),f.init(ht),y.push(f),$.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),H.setFromProjectionMatrix($),I=this.localClippingEnabled,C=mt.init(this.clippingPlanes,I),_=dt.get(U,p.length),_.init(),p.push(_),bt.enabled===!0&&bt.isPresenting===!0){let Nt=x.xr.getDepthSensingMesh();Nt!==null&&yr(Nt,ht,-1/0,x.sortObjects)}yr(U,ht,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,tt),nt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,nt&&Vt.addToRenderList(_,U),this.info.render.frame++,C===!0&&mt.beginShadows();let _t=f.state.shadowsArray;At.render(_t,U,ht),C===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let yt=_.opaque,ft=_.transmissive;if(f.setupLights(),ht.isArrayCamera){let Nt=ht.cameras;if(ft.length>0)for(let Zt=0,Jt=Nt.length;Zt<Jt;Zt++){let jt=Nt[Zt];De(yt,ft,U,jt)}nt&&Vt.render(U);for(let Zt=0,Jt=Nt.length;Zt<Jt;Zt++){let jt=Nt[Zt];qr(_,U,jt,jt.viewport)}}else ft.length>0&&De(yt,ft,U,ht),nt&&Vt.render(U),qr(_,U,ht);v!==null&&(P.updateMultisampleRenderTarget(v),P.updateRenderTargetMipmap(v)),U.isScene===!0&&U.onAfterRender(x,U,ht),ee.resetDefaultState(),A=-1,z=null,y.pop(),y.length>0?(f=y[y.length-1],C===!0&&mt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function yr(U,ht,_t,yt){if(U.visible===!1)return;if(U.layers.test(ht.layers)){if(U.isGroup)_t=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ht);else if(U.isLight)f.pushLight(U),U.castShadow&&f.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||H.intersectsSprite(U)){yt&&F.setFromMatrixPosition(U.matrixWorld).applyMatrix4($);let Zt=rt.update(U),Jt=U.material;Jt.visible&&_.push(U,Zt,Jt,_t,F.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||H.intersectsObject(U))){let Zt=rt.update(U),Jt=U.material;if(yt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),F.copy(U.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),F.copy(Zt.boundingSphere.center)),F.applyMatrix4(U.matrixWorld).applyMatrix4($)),Array.isArray(Jt)){let jt=Zt.groups;for(let oe=0,ie=jt.length;oe<ie;oe++){let te=jt[oe],Re=Jt[te.materialIndex];Re&&Re.visible&&_.push(U,Zt,Re,_t,F.z,te)}}else Jt.visible&&_.push(U,Zt,Jt,_t,F.z,null)}}let Nt=U.children;for(let Zt=0,Jt=Nt.length;Zt<Jt;Zt++)yr(Nt[Zt],ht,_t,yt)}function qr(U,ht,_t,yt){let ft=U.opaque,Nt=U.transmissive,Zt=U.transparent;f.setupLightsView(_t),C===!0&&mt.setGlobalState(x.clippingPlanes,_t),yt&&j.viewport(M.copy(yt)),ft.length>0&&Ii(ft,ht,_t),Nt.length>0&&Ii(Nt,ht,_t),Zt.length>0&&Ii(Zt,ht,_t),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function De(U,ht,_t,yt){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[yt.id]===void 0&&(f.state.transmissionRenderTarget[yt.id]=new Wi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Lo:Gi,minFilter:Ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));let Nt=f.state.transmissionRenderTarget[yt.id],Zt=yt.viewport||M;Nt.setSize(Zt.z,Zt.w);let Jt=x.getRenderTarget();x.setRenderTarget(Nt),x.getClearColor(V),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),nt&&Vt.render(_t);let jt=x.toneMapping;x.toneMapping=cr;let oe=yt.viewport;if(yt.viewport!==void 0&&(yt.viewport=void 0),f.setupLightsView(yt),C===!0&&mt.setGlobalState(x.clippingPlanes,yt),Ii(U,_t,yt),P.updateMultisampleRenderTarget(Nt),P.updateRenderTargetMipmap(Nt),K.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let te=0,Re=ht.length;te<Re;te++){let le=ht[te],Ge=le.object,sn=le.geometry,Ce=le.material,ne=le.group;if(Ce.side===Pe&&Ge.layers.test(yt.layers)){let hn=Ce.side;Ce.side=Wn,Ce.needsUpdate=!0,si(Ge,_t,yt,sn,Ce,ne),Ce.side=hn,Ce.needsUpdate=!0,ie=!0}}ie===!0&&(P.updateMultisampleRenderTarget(Nt),P.updateRenderTargetMipmap(Nt))}x.setRenderTarget(Jt),x.setClearColor(V,Z),oe!==void 0&&(yt.viewport=oe),x.toneMapping=jt}function Ii(U,ht,_t){let yt=ht.isScene===!0?ht.overrideMaterial:null;for(let ft=0,Nt=U.length;ft<Nt;ft++){let Zt=U[ft],Jt=Zt.object,jt=Zt.geometry,oe=yt===null?Zt.material:yt,ie=Zt.group;Jt.layers.test(_t.layers)&&si(Jt,ht,_t,jt,oe,ie)}}function si(U,ht,_t,yt,ft,Nt){U.onBeforeRender(x,ht,_t,yt,ft,Nt),U.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ft.onBeforeRender(x,ht,_t,yt,U,Nt),ft.transparent===!0&&ft.side===Pe&&ft.forceSinglePass===!1?(ft.side=Wn,ft.needsUpdate=!0,x.renderBufferDirect(_t,ht,yt,ft,U,Nt),ft.side=In,ft.needsUpdate=!0,x.renderBufferDirect(_t,ht,yt,ft,U,Nt),ft.side=Pe):x.renderBufferDirect(_t,ht,yt,ft,U,Nt),U.onAfterRender(x,ht,_t,yt,ft,Nt)}function Yr(U,ht,_t){ht.isScene!==!0&&(ht=Y);let yt=ct.get(U),ft=f.state.lights,Nt=f.state.shadowsArray,Zt=ft.state.version,Jt=Et.getParameters(U,ft.state,Nt,ht,_t),jt=Et.getProgramCacheKey(Jt),oe=yt.programs;yt.environment=U.isMeshStandardMaterial?ht.environment:null,yt.fog=ht.fog,yt.envMap=(U.isMeshStandardMaterial?N:w).get(U.envMap||yt.environment),yt.envMapRotation=yt.environment!==null&&U.envMap===null?ht.environmentRotation:U.envMapRotation,oe===void 0&&(U.addEventListener("dispose",de),oe=new Map,yt.programs=oe);let ie=oe.get(jt);if(ie!==void 0){if(yt.currentProgram===ie&&yt.lightsStateVersion===Zt)return zo(U,Jt),ie}else Jt.uniforms=Et.getUniforms(U),U.onBeforeCompile(Jt,x),ie=Et.acquireProgram(Jt,jt),oe.set(jt,ie),yt.uniforms=Jt.uniforms;let te=yt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(te.clippingPlanes=mt.uniform),zo(U,Jt),yt.needsLights=Zr(U),yt.lightsStateVersion=Zt,yt.needsLights&&(te.ambientLightColor.value=ft.state.ambient,te.lightProbe.value=ft.state.probe,te.directionalLights.value=ft.state.directional,te.directionalLightShadows.value=ft.state.directionalShadow,te.spotLights.value=ft.state.spot,te.spotLightShadows.value=ft.state.spotShadow,te.rectAreaLights.value=ft.state.rectArea,te.ltc_1.value=ft.state.rectAreaLTC1,te.ltc_2.value=ft.state.rectAreaLTC2,te.pointLights.value=ft.state.point,te.pointLightShadows.value=ft.state.pointShadow,te.hemisphereLights.value=ft.state.hemi,te.directionalShadowMap.value=ft.state.directionalShadowMap,te.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,te.spotShadowMap.value=ft.state.spotShadowMap,te.spotLightMatrix.value=ft.state.spotLightMatrix,te.spotLightMap.value=ft.state.spotLightMap,te.pointShadowMap.value=ft.state.pointShadowMap,te.pointShadowMatrix.value=ft.state.pointShadowMatrix),yt.currentProgram=ie,yt.uniformsList=null,ie}function ko(U){if(U.uniformsList===null){let ht=U.currentProgram.getUniforms();U.uniformsList=Ms.seqWithValue(ht.seq,U.uniforms)}return U.uniformsList}function zo(U,ht){let _t=ct.get(U);_t.outputColorSpace=ht.outputColorSpace,_t.batching=ht.batching,_t.batchingColor=ht.batchingColor,_t.instancing=ht.instancing,_t.instancingColor=ht.instancingColor,_t.instancingMorph=ht.instancingMorph,_t.skinning=ht.skinning,_t.morphTargets=ht.morphTargets,_t.morphNormals=ht.morphNormals,_t.morphColors=ht.morphColors,_t.morphTargetsCount=ht.morphTargetsCount,_t.numClippingPlanes=ht.numClippingPlanes,_t.numIntersection=ht.numClipIntersection,_t.vertexAlphas=ht.vertexAlphas,_t.vertexTangents=ht.vertexTangents,_t.toneMapping=ht.toneMapping}function Xs(U,ht,_t,yt,ft){ht.isScene!==!0&&(ht=Y),P.resetTextureUnits();let Nt=ht.fog,Zt=yt.isMeshStandardMaterial?ht.environment:null,Jt=v===null?x.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:fr,jt=(yt.isMeshStandardMaterial?N:w).get(yt.envMap||Zt),oe=yt.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,ie=!!_t.attributes.tangent&&(!!yt.normalMap||yt.anisotropy>0),te=!!_t.morphAttributes.position,Re=!!_t.morphAttributes.normal,le=!!_t.morphAttributes.color,Ge=cr;yt.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Ge=x.toneMapping);let sn=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,Ce=sn!==void 0?sn.length:0,ne=ct.get(yt),hn=f.state.lights;if(C===!0&&(I===!0||U!==z)){let Hn=U===z&&yt.id===A;mt.setState(yt,U,Hn)}let we=!1;yt.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==hn.state.version||ne.outputColorSpace!==Jt||ft.isBatchedMesh&&ne.batching===!1||!ft.isBatchedMesh&&ne.batching===!0||ft.isBatchedMesh&&ne.batchingColor===!0&&ft.colorTexture===null||ft.isBatchedMesh&&ne.batchingColor===!1&&ft.colorTexture!==null||ft.isInstancedMesh&&ne.instancing===!1||!ft.isInstancedMesh&&ne.instancing===!0||ft.isSkinnedMesh&&ne.skinning===!1||!ft.isSkinnedMesh&&ne.skinning===!0||ft.isInstancedMesh&&ne.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&ne.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&ne.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&ne.instancingMorph===!1&&ft.morphTexture!==null||ne.envMap!==jt||yt.fog===!0&&ne.fog!==Nt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==mt.numPlanes||ne.numIntersection!==mt.numIntersection)||ne.vertexAlphas!==oe||ne.vertexTangents!==ie||ne.morphTargets!==te||ne.morphNormals!==Re||ne.morphColors!==le||ne.toneMapping!==Ge||ne.morphTargetsCount!==Ce)&&(we=!0):(we=!0,ne.__version=yt.version);let Vn=ne.currentProgram;we===!0&&(Vn=Yr(yt,ht,ft));let Gn=!1,Rn=!1,$r=!1,Xe=Vn.getUniforms(),_i=ne.uniforms;if(j.useProgram(Vn.program)&&(Gn=!0,Rn=!0,$r=!0),yt.id!==A&&(A=yt.id,Rn=!0),Gn||z!==U){q.reverseDepthBuffer?(k.copy(U.projectionMatrix),Kd(k),Jd(k),Xe.setValue(S,"projectionMatrix",k)):Xe.setValue(S,"projectionMatrix",U.projectionMatrix),Xe.setValue(S,"viewMatrix",U.matrixWorldInverse);let Hn=Xe.map.cameraPosition;Hn!==void 0&&Hn.setValue(S,B.setFromMatrixPosition(U.matrixWorld)),q.logarithmicDepthBuffer&&Xe.setValue(S,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(yt.isMeshPhongMaterial||yt.isMeshToonMaterial||yt.isMeshLambertMaterial||yt.isMeshBasicMaterial||yt.isMeshStandardMaterial||yt.isShaderMaterial)&&Xe.setValue(S,"isOrthographic",U.isOrthographicCamera===!0),z!==U&&(z=U,Rn=!0,$r=!0)}if(ft.isSkinnedMesh){Xe.setOptional(S,ft,"bindMatrix"),Xe.setOptional(S,ft,"bindMatrixInverse");let Hn=ft.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Xe.setValue(S,"boneTexture",Hn.boneTexture,P))}ft.isBatchedMesh&&(Xe.setOptional(S,ft,"batchingTexture"),Xe.setValue(S,"batchingTexture",ft._matricesTexture,P),Xe.setOptional(S,ft,"batchingIdTexture"),Xe.setValue(S,"batchingIdTexture",ft._indirectTexture,P),Xe.setOptional(S,ft,"batchingColorTexture"),ft._colorsTexture!==null&&Xe.setValue(S,"batchingColorTexture",ft._colorsTexture,P));let qs=_t.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Ot.update(ft,_t,Vn),(Rn||ne.receiveShadow!==ft.receiveShadow)&&(ne.receiveShadow=ft.receiveShadow,Xe.setValue(S,"receiveShadow",ft.receiveShadow)),yt.isMeshGouraudMaterial&&yt.envMap!==null&&(_i.envMap.value=jt,_i.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),yt.isMeshStandardMaterial&&yt.envMap===null&&ht.environment!==null&&(_i.envMapIntensity.value=ht.environmentIntensity),Rn&&(Xe.setValue(S,"toneMappingExposure",x.toneMappingExposure),ne.needsLights&&Li(_i,$r),Nt&&yt.fog===!0&&Mt.refreshFogUniforms(_i,Nt),Mt.refreshMaterialUniforms(_i,yt,pt,ot,f.state.transmissionRenderTarget[U.id]),Ms.upload(S,ko(ne),_i,P)),yt.isShaderMaterial&&yt.uniformsNeedUpdate===!0&&(Ms.upload(S,ko(ne),_i,P),yt.uniformsNeedUpdate=!1),yt.isSpriteMaterial&&Xe.setValue(S,"center",ft.center),Xe.setValue(S,"modelViewMatrix",ft.modelViewMatrix),Xe.setValue(S,"normalMatrix",ft.normalMatrix),Xe.setValue(S,"modelMatrix",ft.matrixWorld),yt.isShaderMaterial||yt.isRawShaderMaterial){let Hn=yt.uniformsGroups;for(let Ys=0,Vo=Hn.length;Ys<Vo;Ys++){let Go=Hn[Ys];at.update(Go,Vn),at.bind(Go,Vn)}}return Vn}function Li(U,ht){U.ambientLightColor.needsUpdate=ht,U.lightProbe.needsUpdate=ht,U.directionalLights.needsUpdate=ht,U.directionalLightShadows.needsUpdate=ht,U.pointLights.needsUpdate=ht,U.pointLightShadows.needsUpdate=ht,U.spotLights.needsUpdate=ht,U.spotLightShadows.needsUpdate=ht,U.rectAreaLights.needsUpdate=ht,U.hemisphereLights.needsUpdate=ht}function Zr(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(U,ht,_t){ct.get(U.texture).__webglTexture=ht,ct.get(U.depthTexture).__webglTexture=_t;let yt=ct.get(U);yt.__hasExternalTextures=!0,yt.__autoAllocateDepthBuffer=_t===void 0,yt.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),yt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,ht){let _t=ct.get(U);_t.__webglFramebuffer=ht,_t.__useDefaultFramebuffer=ht===void 0},this.setRenderTarget=function(U,ht=0,_t=0){v=U,L=ht,E=_t;let yt=!0,ft=null,Nt=!1,Zt=!1;if(U){let jt=ct.get(U);if(jt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(S.FRAMEBUFFER,null),yt=!1;else if(jt.__webglFramebuffer===void 0)P.setupRenderTarget(U);else if(jt.__hasExternalTextures)P.rebindTextures(U,ct.get(U.texture).__webglTexture,ct.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let te=U.depthTexture;if(jt.__boundDepthTexture!==te){if(te!==null&&ct.has(te)&&(U.width!==te.image.width||U.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(U)}}let oe=U.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Zt=!0);let ie=ct.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ie[ht])?ft=ie[ht][_t]:ft=ie[ht],Nt=!0):U.samples>0&&P.useMultisampledRTT(U)===!1?ft=ct.get(U).__webglMultisampledFramebuffer:Array.isArray(ie)?ft=ie[_t]:ft=ie,M.copy(U.viewport),T.copy(U.scissor),J=U.scissorTest}else M.copy(W).multiplyScalar(pt).floor(),T.copy(O).multiplyScalar(pt).floor(),J=G;if(j.bindFramebuffer(S.FRAMEBUFFER,ft)&&yt&&j.drawBuffers(U,ft),j.viewport(M),j.scissor(T),j.setScissorTest(J),Nt){let jt=ct.get(U.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt.__webglTexture,_t)}else if(Zt){let jt=ct.get(U.texture),oe=ht||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,jt.__webglTexture,_t||0,oe)}A=-1},this.readRenderTargetPixels=function(U,ht,_t,yt,ft,Nt,Zt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt){j.bindFramebuffer(S.FRAMEBUFFER,Jt);try{let jt=U.texture,oe=jt.format,ie=jt.type;if(!q.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ht>=0&&ht<=U.width-yt&&_t>=0&&_t<=U.height-ft&&S.readPixels(ht,_t,yt,ft,Wt.convert(oe),Wt.convert(ie),Nt)}finally{let jt=v!==null?ct.get(v).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(U,ht,_t,yt,ft,Nt,Zt){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=ct.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt){let jt=U.texture,oe=jt.format,ie=jt.type;if(!q.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ht>=0&&ht<=U.width-yt&&_t>=0&&_t<=U.height-ft){j.bindFramebuffer(S.FRAMEBUFFER,Jt);let te=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,te),S.bufferData(S.PIXEL_PACK_BUFFER,Nt.byteLength,S.STREAM_READ),S.readPixels(ht,_t,yt,ft,Wt.convert(oe),Wt.convert(ie),0);let Re=v!==null?ct.get(v).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,Re);let le=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await $d(S,le,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,te),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Nt),S.deleteBuffer(te),S.deleteSync(le),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,ht=null,_t=0){U.isTexture!==!0&&(Ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ht=arguments[0]||null,U=arguments[1]);let yt=Math.pow(2,-_t),ft=Math.floor(U.image.width*yt),Nt=Math.floor(U.image.height*yt),Zt=ht!==null?ht.x:0,Jt=ht!==null?ht.y:0;P.setTexture2D(U,0),S.copyTexSubImage2D(S.TEXTURE_2D,_t,0,0,Zt,Jt,ft,Nt),j.unbindTexture()},this.copyTextureToTexture=function(U,ht,_t=null,yt=null,ft=0){U.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture function signature has changed."),yt=arguments[0]||null,U=arguments[1],ht=arguments[2],ft=arguments[3]||0,_t=null);let Nt,Zt,Jt,jt,oe,ie;_t!==null?(Nt=_t.max.x-_t.min.x,Zt=_t.max.y-_t.min.y,Jt=_t.min.x,jt=_t.min.y):(Nt=U.image.width,Zt=U.image.height,Jt=0,jt=0),yt!==null?(oe=yt.x,ie=yt.y):(oe=0,ie=0);let te=Wt.convert(ht.format),Re=Wt.convert(ht.type);P.setTexture2D(ht,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ht.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ht.unpackAlignment);let le=S.getParameter(S.UNPACK_ROW_LENGTH),Ge=S.getParameter(S.UNPACK_IMAGE_HEIGHT),sn=S.getParameter(S.UNPACK_SKIP_PIXELS),Ce=S.getParameter(S.UNPACK_SKIP_ROWS),ne=S.getParameter(S.UNPACK_SKIP_IMAGES),hn=U.isCompressedTexture?U.mipmaps[ft]:U.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,hn.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,hn.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Jt),S.pixelStorei(S.UNPACK_SKIP_ROWS,jt),U.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ft,oe,ie,Nt,Zt,te,Re,hn.data):U.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ft,oe,ie,hn.width,hn.height,te,hn.data):S.texSubImage2D(S.TEXTURE_2D,ft,oe,ie,Nt,Zt,te,Re,hn),S.pixelStorei(S.UNPACK_ROW_LENGTH,le),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ge),S.pixelStorei(S.UNPACK_SKIP_PIXELS,sn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ce),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ne),ft===0&&ht.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(U,ht,_t=null,yt=null,ft=0){U.isTexture!==!0&&(Ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),_t=arguments[0]||null,yt=arguments[1]||null,U=arguments[2],ht=arguments[3],ft=arguments[4]||0);let Nt,Zt,Jt,jt,oe,ie,te,Re,le,Ge=U.isCompressedTexture?U.mipmaps[ft]:U.image;_t!==null?(Nt=_t.max.x-_t.min.x,Zt=_t.max.y-_t.min.y,Jt=_t.max.z-_t.min.z,jt=_t.min.x,oe=_t.min.y,ie=_t.min.z):(Nt=Ge.width,Zt=Ge.height,Jt=Ge.depth,jt=0,oe=0,ie=0),yt!==null?(te=yt.x,Re=yt.y,le=yt.z):(te=0,Re=0,le=0);let sn=Wt.convert(ht.format),Ce=Wt.convert(ht.type),ne;if(ht.isData3DTexture)P.setTexture3D(ht,0),ne=S.TEXTURE_3D;else if(ht.isDataArrayTexture||ht.isCompressedArrayTexture)P.setTexture2DArray(ht,0),ne=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ht.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ht.unpackAlignment);let hn=S.getParameter(S.UNPACK_ROW_LENGTH),we=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Vn=S.getParameter(S.UNPACK_SKIP_PIXELS),Gn=S.getParameter(S.UNPACK_SKIP_ROWS),Rn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ge.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ge.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,jt),S.pixelStorei(S.UNPACK_SKIP_ROWS,oe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ie),U.isDataTexture||U.isData3DTexture?S.texSubImage3D(ne,ft,te,Re,le,Nt,Zt,Jt,sn,Ce,Ge.data):ht.isCompressedArrayTexture?S.compressedTexSubImage3D(ne,ft,te,Re,le,Nt,Zt,Jt,sn,Ge.data):S.texSubImage3D(ne,ft,te,Re,le,Nt,Zt,Jt,sn,Ce,Ge),S.pixelStorei(S.UNPACK_ROW_LENGTH,hn),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,we),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Vn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Gn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Rn),ft===0&&ht.generateMipmaps&&S.generateMipmap(ne),j.unbindTexture()},this.initRenderTarget=function(U){ct.get(U).__webglFramebuffer===void 0&&P.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?P.setTextureCube(U,0):U.isData3DTexture?P.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?P.setTexture2DArray(U,0):P.setTexture2D(U,0),j.unbindTexture()},this.resetState=function(){L=0,E=0,v=null,j.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Wh?"display-p3":"srgb",e.unpackColorSpace=Le.workingColorSpace===cc?"display-p3":"srgb"}};var Za=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},lh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fn=new R,$a=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix4(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyNormalMatrix(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.transformDirection(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),r=Ne(r,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ti=class extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,no=new R,fs=new R,ds=new R,ps=new Ut,io=new Ut,Y0=new ae,pa=new R,ro=new R,ma=new R,f0=new Ut,el=new Ut,d0=new Ut,di=class extends an{constructor(t=new ti){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lh(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new $a(n,3,0,!1)),us.setAttribute("uv",new $a(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Y0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ds.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;ga(pa.set(-.5,-.5,0),ds,o,fs,r,s),ga(ro.set(.5,-.5,0),ds,o,fs,r,s),ga(ma.set(.5,.5,0),ds,o,fs,r,s),f0.set(0,0),el.set(1,0),d0.set(1,1);let a=t.ray.intersectTriangle(pa,ro,ma,!1,no);if(a===null&&(ga(ro.set(-.5,.5,0),ds,o,fs,r,s),el.set(0,1),a=t.ray.intersectTriangle(pa,ma,ro,!1,no),a===null))return;let c=t.ray.origin.distanceTo(no);c<t.near||c>t.far||e.push({distance:c,point:no.clone(),uv:or.getInterpolation(no,pa,ro,ma,f0,el,d0,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ga(i,t,e,n,r,s){ps.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(io.x=s*ps.x-r*ps.y,io.y=r*ps.x+s*ps.y):io.copy(ps),i.copy(t),i.x+=io.x,i.y+=io.y,i.applyMatrix4(Y0)}var hh=class extends Xn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=wn,h=wn,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ka=class extends Ie{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new ae,p0=new ae,_a=[],m0=new Xi,q_=new ae,so=new St,oo=new qi,Cs=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ka(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,q_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),m0.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(m0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),oo.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),p0.multiplyMatrices(n,ms),so.matrixWorld=p0,so.raycast(t,_a);for(let o=0,a=_a.length;o<a;o++){let c=_a[o];c.instanceId=s,c.object=this,e.push(c)}_a.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ka(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new hh(new Float32Array(r*this.count),r,this.count,Bh,xi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var vo=class extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ja=new R,ja=new R,g0=new ae,ao=new Mo,ya=new qi,nl=new R,_0=new R,Qa=class extends an{constructor(t=new Me,e=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ja.fromBufferAttribute(e,r-1),ja.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ja.distanceTo(ja);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),ya.radius+=s,t.ray.intersectsSphere(ya)===!1)return;g0.copy(r).invert(),ao.copy(t.ray).applyMatrix4(g0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=h.getX(_),y=h.getX(_+1),x=xa(this,t,ao,c,p,y);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),f=h.getX(m),p=xa(this,t,ao,c,_,f);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=xa(this,t,ao,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=xa(this,t,ao,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function xa(i,t,e,n,r,s){let o=i.geometry.attributes.position;if(Ja.fromBufferAttribute(o,r),ja.fromBufferAttribute(o,s),e.distanceSqToSegment(Ja,ja,nl,_0)>n)return;nl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(nl);if(!(c<t.near||c>t.far))return{distance:c,point:_0.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var hr=class extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},y0=new ae,uh=new Mo,Ma=new qi,ba=new R,ur=class extends an{constructor(t=new Me,e=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=s,t.ray.intersectsSphere(Ma)===!1)return;y0.copy(r).invert(),uh.copy(t.ray).applyMatrix4(y0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let f=l.getX(g);ba.fromBufferAttribute(u,f),x0(ba,f,c,r,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)ba.fromBufferAttribute(u,g),x0(ba,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function x0(i,t,e,n,r,s,o){let a=uh.distanceSqToPoint(i);if(a<e){let c=new R;uh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ln=class extends Xn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Ut:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,r=[],s=[],o=[],a=new R,c=new ae;for(let m=0;m<=t;m++){let g=m/t;r[m]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(xn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(xn(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Eo=class extends ei{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ut){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fh=class extends Eo{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yh(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,r(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var va=new R,il=new Yh,rl=new Yh,sl=new Yh,dh=class extends ei{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(va.subVectors(r[0],r[1]).add(r[0]),l=va);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(va.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),il.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,f),rl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,f),sl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(il.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),sl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(il.calc(c),rl.calc(c),sl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function M0(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function Y_(i,t){let e=1-i;return e*e*t}function Z_(i,t){return 2*(1-i)*i*t}function $_(i,t){return i*i*t}function po(i,t,e,n){return Y_(i,t)+Z_(i,e)+$_(i,n)}function K_(i,t){let e=1-i;return e*e*e*t}function J_(i,t){let e=1-i;return 3*e*e*i*t}function j_(i,t){return 3*(1-i)*i*i*t}function Q_(i,t){return i*i*i*t}function mo(i,t,e,n,r){return K_(i,t)+J_(i,e)+j_(i,n)+Q_(i,r)}var tc=class extends ei{constructor(t=new Ut,e=new Ut,n=new Ut,r=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ut){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(mo(t,r.x,s.x,o.x,a.x),mo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ph=class extends ei{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(mo(t,r.x,s.x,o.x,a.x),mo(t,r.y,s.y,o.y,a.y),mo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ec=class extends ei{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mh=class extends ei{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nc=class extends ei{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(po(t,r.x,s.x,o.x),po(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gh=class extends ei{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(po(t,r.x,s.x,o.x),po(t,r.y,s.y,o.y),po(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ic=class extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(M0(a,c.x,l.x,h.x,u.x),M0(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Ut().fromArray(r))}return this}},_h=Object.freeze({__proto__:null,ArcCurve:fh,CatmullRomCurve3:dh,CubicBezierCurve:tc,CubicBezierCurve3:ph,EllipseCurve:Eo,LineCurve:ec,LineCurve3:mh,QuadraticBezierCurve:nc,QuadraticBezierCurve3:gh,SplineCurve:ic}),yh=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _h[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new _h[r.type]().fromJSON(r))}return this}},wo=class extends yh{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ec(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new nc(this.currentPoint.clone(),new Ut(t,e),new Ut(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new tc(this.currentPoint.clone(),new Ut(t,e),new Ut(n,r),new Ut(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ic(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new Eo(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xh=class i extends Me{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=xn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,d=new Ut,m=new R,g=new R,_=new R,f=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*r,b=Math.sin(x),L=Math.cos(x);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*b,u.y=t[E].y,u.z=t[E].x*L,o.push(u.x,u.y,u.z),d.x=y/e,d.y=E/(t.length-1),a.push(d.x,d.y);let v=c[3*E+0]*b,A=c[3*E+1],z=c[3*E+0]*L;l.push(v,A,z)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let b=x+y*t.length,L=b,E=b+t.length,v=b+t.length+1,A=b+1;s.push(L,E,A),s.push(v,A,E)}this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ur=class i extends xh{constructor(t=1,e=1,n=4,r=8){let s=new wo;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},So=class i extends Me{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new R,h=new Ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ee=class i extends Me{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],g=0,_=[],f=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(m,2));function y(){let b=new R,L=new R,E=0,v=(e-t)/n;for(let A=0;A<=s;A++){let z=[],M=A/s,T=M*(e-t)+t;for(let J=0;J<=r;J++){let V=J/r,Z=V*c+a,ut=Math.sin(Z),ot=Math.cos(Z);L.x=T*ut,L.y=-M*n+f,L.z=T*ot,u.push(L.x,L.y,L.z),b.set(ut,v,ot).normalize(),d.push(b.x,b.y,b.z),m.push(V,1-M),z.push(g++)}_.push(z)}for(let A=0;A<r;A++)for(let z=0;z<s;z++){let M=_[z][A],T=_[z+1][A],J=_[z+1][A+1],V=_[z][A+1];t>0&&(h.push(M,T,V),E+=3),e>0&&(h.push(T,J,V),E+=3)}l.addGroup(p,E,0),p+=E}function x(b){let L=g,E=new Ut,v=new R,A=0,z=b===!0?t:e,M=b===!0?1:-1;for(let J=1;J<=r;J++)u.push(0,f*M,0),d.push(0,M,0),m.push(.5,.5),g++;let T=g;for(let J=0;J<=r;J++){let Z=J/r*c+a,ut=Math.cos(Z),ot=Math.sin(Z);v.x=z*ot,v.y=f*M,v.z=z*ut,u.push(v.x,v.y,v.z),d.push(0,M,0),E.x=ut*.5+.5,E.y=ot*.5*M+.5,m.push(E.x,E.y),g++}for(let J=0;J<r;J++){let V=L+J,Z=T+J;b===!0?h.push(Z,Z+1,V):h.push(Z+1,Z,V),A+=3}l.addGroup(p,A,b===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dn=class i extends Ee{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rc=class i extends Me{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new R,b=new R,L=new R;for(let E=0;E<e.length;E+=3)m(e[E+0],x),m(e[E+1],b),m(e[E+2],L),c(x,b,L,y)}function c(y,x,b,L){let E=L+1,v=[];for(let A=0;A<=E;A++){v[A]=[];let z=y.clone().lerp(b,A/E),M=x.clone().lerp(b,A/E),T=E-A;for(let J=0;J<=T;J++)J===0&&A===E?v[A][J]=z:v[A][J]=z.clone().lerp(M,J/T)}for(let A=0;A<E;A++)for(let z=0;z<2*(E-A)-1;z++){let M=Math.floor(z/2);z%2===0?(d(v[A][M+1]),d(v[A+1][M]),d(v[A][M])):(d(v[A][M+1]),d(v[A+1][M+1]),d(v[A+1][M]))}}function l(y){let x=new R;for(let b=0;b<s.length;b+=3)x.x=s[b+0],x.y=s[b+1],x.z=s[b+2],x.normalize().multiplyScalar(y),s[b+0]=x.x,s[b+1]=x.y,s[b+2]=x.z}function h(){let y=new R;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let b=f(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(b,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],b=o[y+2],L=o[y+4],E=Math.max(x,b,L),v=Math.min(x,b,L);E>.9&&v<.1&&(x<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function m(y,x){let b=y*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){let y=new R,x=new R,b=new R,L=new R,E=new Ut,v=new Ut,A=new Ut;for(let z=0,M=0;z<s.length;z+=9,M+=6){y.set(s[z+0],s[z+1],s[z+2]),x.set(s[z+3],s[z+4],s[z+5]),b.set(s[z+6],s[z+7],s[z+8]),E.set(o[M+0],o[M+1]),v.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),L.copy(y).add(x).add(b).divideScalar(3);let T=f(L);_(E,M+0,y,T),_(v,M+2,x,T),_(A,M+4,b,T)}}function _(y,x,b,L){L<0&&y.x===1&&(o[x]=y.x-1),b.x===0&&b.z===0&&(o[x]=L/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Nr=class extends wo{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new wo().fromJSON(r))}return this}},ty={triangulate:function(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Z0(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=sy(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return To(s,o,e,a,c,m,0),o}};function Z0(i,t,e,n,r){let s,o;if(r===gy(i,t,e,n)>0)for(s=t;s<e;s+=n)o=b0(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=b0(s,i[s],i[s+1],o);return o&&hc(o,o.next)&&(Ro(o),o=o.next),o}function Hr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hc(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Ro(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function To(i,t,e,n,r,s,o){if(!i)return;!o&&s&&hy(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?ny(i,n,r,s):ey(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ro(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=iy(Hr(i),t,e),To(i,t,e,n,r,s,2)):o===2&&ry(i,t,e,n,r,s):To(Hr(i),t,e,n,r,s,1);break}}}function ey(i){let t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&_s(r,a,s,c,o,l,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ny(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ze(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,p=Mh(m,g,t,e,n),y=Mh(_,f,t,e,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=p&&b&&b.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&_s(a,h,c,u,l,d,x.x,x.y)&&Ze(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&_s(a,h,c,u,l,d,b.x,b.y)&&Ze(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&_s(a,h,c,u,l,d,x.x,x.y)&&Ze(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&_s(a,h,c,u,l,d,b.x,b.y)&&Ze(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function iy(i,t,e){let n=i;do{let r=n.prev,s=n.next.next;!hc(r,s)&&$0(r,n,n.next,s)&&Ao(r,s)&&Ao(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ro(n),Ro(n.next),n=i=s),n=n.next}while(n!==i);return Hr(n)}function ry(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dy(o,a)){let c=K0(o,a);o=Hr(o,o.next),c=Hr(c,c.next),To(o,t,e,n,r,s,0),To(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function sy(i,t,e,n){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=Z0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(fy(l));for(r.sort(oy),s=0;s<r.length;s++)e=ay(r[s],e);return e}function oy(i,t){return i.x-t.x}function ay(i,t){let e=cy(i,t);if(!e)return t;let n=K0(e,i);return Hr(n,n.next),Hr(e,e.next)}function cy(i,t){let e=t,n=-1/0,r,s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&_s(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Ao(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&ly(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function ly(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function hy(i,t,e,n){let r=i;do r.z===0&&(r.z=Mh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,uy(r)}function uy(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Mh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _s(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function dy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!py(i,t)&&(Ao(i,t)&&Ao(t,i)&&my(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||hc(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hc(i,t){return i.x===t.x&&i.y===t.y}function $0(i,t,e,n){let r=wa(Ze(i,t,e)),s=wa(Ze(i,t,n)),o=wa(Ze(e,n,i)),a=wa(Ze(e,n,t));return!!(r!==s&&o!==a||r===0&&Ea(i,e,t)||s===0&&Ea(i,n,t)||o===0&&Ea(e,i,n)||a===0&&Ea(e,t,n))}function Ea(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wa(i){return i>0?1:i<0?-1:0}function py(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ao(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function my(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function K0(i,t){let e=new bh(i.i,i.x,i.y),n=new bh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function b0(i,t,e,n){let r=new bh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gy(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var go=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];v0(t),E0(n,t);let o=t.length;e.forEach(v0);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,E0(n,e[c]);let a=ty.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function v0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function E0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ps=class i extends Me{constructor(t=new Nr([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:_y,x,b=!1,L,E,v,A;p&&(x=p.getSpacedPoints(h),b=!0,d=!1,L=p.computeFrenetFrames(h,!1),E=new R,v=new R,A=new R),d||(f=0,m=0,g=0,_=0);let z=a.extractPoints(l),M=z.shape,T=z.holes;if(!go.isClockWise(M)){M=M.reverse();for(let X=0,S=T.length;X<S;X++){let st=T[X];go.isClockWise(st)&&(T[X]=st.reverse())}}let V=go.triangulateShape(M,T),Z=M;for(let X=0,S=T.length;X<S;X++){let st=T[X];M=M.concat(st)}function ut(X,S,st){return S||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(S,st)}let ot=M.length,pt=V.length;function D(X,S,st){let K,q,j,it=X.x-S.x,ct=X.y-S.y,P=st.x-X.x,w=st.y-X.y,N=it*it+ct*ct,et=it*w-ct*P;if(Math.abs(et)>Number.EPSILON){let lt=Math.sqrt(N),rt=Math.sqrt(P*P+w*w),Et=S.x-ct/lt,Mt=S.y+it/lt,dt=st.x-w/rt,Lt=st.y+P/rt,mt=((dt-Et)*w-(Lt-Mt)*P)/(it*w-ct*P);K=Et+it*mt-X.x,q=Mt+ct*mt-X.y;let At=K*K+q*q;if(At<=2)return new Ut(K,q);j=Math.sqrt(At/2)}else{let lt=!1;it>Number.EPSILON?P>Number.EPSILON&&(lt=!0):it<-Number.EPSILON?P<-Number.EPSILON&&(lt=!0):Math.sign(ct)===Math.sign(w)&&(lt=!0),lt?(K=-ct,q=it,j=Math.sqrt(N)):(K=it,q=ct,j=Math.sqrt(N/2))}return new Ut(K/j,q/j)}let tt=[];for(let X=0,S=Z.length,st=S-1,K=X+1;X<S;X++,st++,K++)st===S&&(st=0),K===S&&(K=0),tt[X]=D(Z[X],Z[st],Z[K]);let W=[],O,G=tt.concat();for(let X=0,S=T.length;X<S;X++){let st=T[X];O=[];for(let K=0,q=st.length,j=q-1,it=K+1;K<q;K++,j++,it++)j===q&&(j=0),it===q&&(it=0),O[K]=D(st[K],st[j],st[it]);W.push(O),G=G.concat(O)}for(let X=0;X<f;X++){let S=X/f,st=m*Math.cos(S*Math.PI/2),K=g*Math.sin(S*Math.PI/2)+_;for(let q=0,j=Z.length;q<j;q++){let it=ut(Z[q],tt[q],K);$(it.x,it.y,-st)}for(let q=0,j=T.length;q<j;q++){let it=T[q];O=W[q];for(let ct=0,P=it.length;ct<P;ct++){let w=ut(it[ct],O[ct],K);$(w.x,w.y,-st)}}}let H=g+_;for(let X=0;X<ot;X++){let S=d?ut(M[X],G[X],H):M[X];b?(v.copy(L.normals[0]).multiplyScalar(S.x),E.copy(L.binormals[0]).multiplyScalar(S.y),A.copy(x[0]).add(v).add(E),$(A.x,A.y,A.z)):$(S.x,S.y,0)}for(let X=1;X<=h;X++)for(let S=0;S<ot;S++){let st=d?ut(M[S],G[S],H):M[S];b?(v.copy(L.normals[X]).multiplyScalar(st.x),E.copy(L.binormals[X]).multiplyScalar(st.y),A.copy(x[X]).add(v).add(E),$(A.x,A.y,A.z)):$(st.x,st.y,u/h*X)}for(let X=f-1;X>=0;X--){let S=X/f,st=m*Math.cos(S*Math.PI/2),K=g*Math.sin(S*Math.PI/2)+_;for(let q=0,j=Z.length;q<j;q++){let it=ut(Z[q],tt[q],K);$(it.x,it.y,u+st)}for(let q=0,j=T.length;q<j;q++){let it=T[q];O=W[q];for(let ct=0,P=it.length;ct<P;ct++){let w=ut(it[ct],O[ct],K);b?$(w.x,w.y+x[h-1].y,x[h-1].x+st):$(w.x,w.y,u+st)}}}C(),I();function C(){let X=r.length/3;if(d){let S=0,st=ot*S;for(let K=0;K<pt;K++){let q=V[K];B(q[2]+st,q[1]+st,q[0]+st)}S=h+f*2,st=ot*S;for(let K=0;K<pt;K++){let q=V[K];B(q[0]+st,q[1]+st,q[2]+st)}}else{for(let S=0;S<pt;S++){let st=V[S];B(st[2],st[1],st[0])}for(let S=0;S<pt;S++){let st=V[S];B(st[0]+ot*h,st[1]+ot*h,st[2]+ot*h)}}n.addGroup(X,r.length/3-X,0)}function I(){let X=r.length/3,S=0;k(Z,S),S+=Z.length;for(let st=0,K=T.length;st<K;st++){let q=T[st];k(q,S),S+=q.length}n.addGroup(X,r.length/3-X,1)}function k(X,S){let st=X.length;for(;--st>=0;){let K=st,q=st-1;q<0&&(q=X.length-1);for(let j=0,it=h+f*2;j<it;j++){let ct=ot*j,P=ot*(j+1),w=S+K+ct,N=S+q+ct,et=S+q+P,lt=S+K+P;F(w,N,et,lt)}}}function $(X,S,st){c.push(X),c.push(S),c.push(st)}function B(X,S,st){Y(X),Y(S),Y(st);let K=r.length/3,q=y.generateTopUV(n,r,K-3,K-2,K-1);nt(q[0]),nt(q[1]),nt(q[2])}function F(X,S,st,K){Y(X),Y(S),Y(K),Y(S),Y(st),Y(K);let q=r.length/3,j=y.generateSideWallUV(n,r,q-6,q-3,q-2,q-1);nt(j[0]),nt(j[1]),nt(j[3]),nt(j[1]),nt(j[2]),nt(j[3])}function Y(X){r.push(c[X*3+0]),r.push(c[X*3+1]),r.push(c[X*3+2])}function nt(X){s.push(X.x),s.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yy(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new _h[r.type]().fromJSON(r)),new i(n,t.options)}},_y={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new Ut(s,o),new Ut(a,c),new Ut(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ut(o,1-c),new Ut(l,1-u),new Ut(d,1-g),new Ut(_,1-p)]:[new Ut(a,1-c),new Ut(h,1-u),new Ut(m,1-g),new Ut(f,1-p)]}};function yy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var mn=class i extends rc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Co=class i extends rc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var He=class i extends Me{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,d=new R,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){let y=[],x=p/n,b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let E=L/e;u.x=-t*Math.cos(r+E*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(r+E*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(E+b,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],b=h[p][y],L=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&m.push(x,b,E),(p!==n-1||c<Math.PI)&&m.push(b,L,E)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bn=class i extends Me{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let _=g/r*s,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let _=(r+1)*m+g-1,f=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,y=(r+1)*m+g;o.push(_,f,y),o.push(f,p,y)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Se=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Is=class extends fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Sa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ls=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vh=class extends Ls{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mu,endingEnd:Mu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bu:s=t,a=2*e-n;break;case vu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bu:o=t,c=2*n-e;break;case vu:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,y=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-m)*f+(1.5+m)*_+.5*g,b=m*f-m*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+y*o[l+L]+x*o[c+L]+b*o[u+L];return s}},Eh=class extends Ls{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},wh=class extends Ls{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sa(e,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Sa(t.times,Array),values:Sa(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case La:e=this.InterpolantFactoryMethodDiscrete;break;case Xl:e=this.InterpolantFactoryMethodLinear;break;case Ac:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&xy(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ac,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Xl;var Fr=class extends pi{constructor(t,e,n){super(t,e,n)}};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=La;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Sh=class extends pi{};Sh.prototype.ValueTypeName="color";var Th=class extends pi{};Th.prototype.ValueTypeName="number";var Ah=class extends Ls{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)fn.slerpFlat(s,0,o,l-a,o,l,c);return s}},sc=class extends pi{InterpolantFactoryMethodLinear(t){return new Ah(this.times,this.values,this.getValueSize(),t)}};sc.prototype.ValueTypeName="quaternion";sc.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends pi{constructor(t,e,n){super(t,e,n)}};Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=La;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends pi{};Rh.prototype.ValueTypeName="vector";var Ch=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},My=new Ch,Ph=class{constructor(t){this.manager=t!==void 0?t:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ph.DEFAULT_MATERIAL_NAME="__DEFAULT";var Po=class extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ds=class extends Po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ol=new ae,w0=new R,S0=new R,oc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;w0.setFromMatrixPosition(t.matrixWorld),e.position.copy(w0),S0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(S0),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var T0=new ae,co=new R,al=new R,Ih=class extends oc{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),co.setFromMatrixPosition(t.matrixWorld),n.position.copy(co),al.copy(n.position),al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(al),n.updateMatrixWorld(),r.makeTranslation(-co.x,-co.y,-co.z),T0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(T0)}},mi=class extends Po{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Lh=class extends oc{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zi=class extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Lh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Zh="\\[\\]\\.:\\/",by=new RegExp("["+Zh+"]","g"),$h="[^"+Zh+"]",vy="[^"+Zh.replace("\\.","")+"]",Ey=/((?:WC+[\/:])*)/.source.replace("WC",$h),wy=/(WCOD+)?/.source.replace("WCOD",vy),Sy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),Ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),Ay=new RegExp("^"+Ey+wy+Sy+Ty+"$"),Ry=["material","materials","bones","map"],Dh=class{constructor(t,e,n){let r=n||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(by,"")}static parseTrackName(t){let e=Ay.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Ry.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=Dh;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var J0=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var j0=i=>J0.find(t=>t.id===i)??J0[0];function tf(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var uc=(i,t,e)=>i+(t-i)*e,ef=i=>Math.min(1,Math.max(0,i)),Do=(i,t)=>Math.max(0,i)**t;function jh(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var nf=(i,t,e)=>new bn(i,t,e,"ZYX"),Hs=class{constructor(t,e={}){qe(this,"n",t);qe(this,"geo",new Me);qe(this,"per");qe(this,"radial");qe(this,"closed");qe(this,"sharp");qe(this,"caps");qe(this,"samples");qe(this,"pos");qe(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let r=this.radial+1,s=this.samples*r+(this.caps?2:0);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3);let o=new Float32Array(s*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*r+l)*2]=c/(this.samples-1),o[(c*r+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*r+l,u=h+r;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*r,l=c+1,h=(this.samples-1)*r;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new Ie(this.pos,3)),this.geo.setAttribute("normal",new Ie(this.nor,3)),this.geo.setAttribute("uv",new Ie(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:r,radial:s,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=y=>t[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))],u=y=>typeof e=="number"?e:e[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))];for(let y=0;y<a;y++){let x=Math.floor(y/r),b=y%r/r;!o&&x>=n-1&&(x=n-2,b=1);let L=h(x),E=h(x+1);for(let v=0;v<3;v++)if(this.sharp)c[y*3+v]=L[v]+(E[v]-L[v])*b;else{let A=o||x>0?h(x-1)[v]:2*L[v]-E[v],z=o||x+2<n?h(x+2)[v]:2*E[v]-L[v],M=b*b,T=M*b;c[y*3+v]=.5*(2*L[v]+(-A+E[v])*b+(2*A-5*L[v]+4*E[v]-z)*M+(-A+3*L[v]-3*E[v]+z)*T)}l[y]=Math.max(1e-4,Math.abs(u(x)+(u(x+1)-u(x))*b))}let d=new R,m=new R,g=new R,_=new R,f=y=>{let x=o?(y-1+a-1)%(a-1):Math.max(0,y-1),b=o?(y+1)%(a-1):Math.min(a-1,y+1);return d.set(c[b*3]-c[x*3],c[b*3+1]-c[x*3+1],c[b*3+2]-c[x*3+2]),d.lengthSq()<1e-12&&d.set(0,0,1),d.normalize()};f(0),_.set(Math.abs(d.x)<.9?1:0,Math.abs(d.x)<.9?0:1,0),m.crossVectors(d,_).normalize();let p=s+1;for(let y=0;y<a;y++){f(y),m.addScaledVector(d,-m.dot(d)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(d,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(d,m);for(let x=0;x<=s;x++){let b=x/s*Math.PI*2,L=Math.cos(b),E=Math.sin(b),v=L*m.x+E*g.x,A=L*m.y+E*g.y,z=L*m.z+E*g.z,M=(y*p+x)*3;this.nor[M]=v,this.nor[M+1]=A,this.nor[M+2]=z,this.pos[M]=c[y*3]+l[y]*v,this.pos[M+1]=c[y*3+1]+l[y]*A,this.pos[M+2]=c[y*3+2]+l[y]*z}if(this.caps&&(y===0||y===a-1)){let x=(a*p+(y?1:0))*3,b=y?1:-1;this.pos[x]=c[y*3],this.pos[x+1]=c[y*3+1],this.pos[x+2]=c[y*3+2],this.nor[x]=d.x*b,this.nor[x+1]=d.y*b,this.nor[x+2]=d.z*b}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function rn(i,t,e={}){return new Hs(i.length,e).set(i,t).geo}function gi(i,t,e,n=12,r=.35,s={}){let o=new ae().makeRotationFromEuler(nf(...t)),a=[],c=[],l=new R;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+r*Math.sin(3*u)))}return rn(a,c,{closed:!0,per:6,...s})}function $i(i,t,e,n,r,s=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<r;u++){let d=u/(r-1),m=s+2*Math.PI*n*d,g=t+(e-t)*d,_=l(d)+(a&&o?a.uniform(-o,o):0),[f,p]=c?c(g):[0,0];h.push([f+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var dc=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function ni(i,t,e,n,r){let s=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);s.push(...l,...h,0,0,i),s.push(...h,...l,0,0,-t)}let a=new Me;return a.setAttribute("position",new se(s,3)),a.setAttribute("uv",new se(new Array(s.length/3*2).fill(.5),2)),r&&a.applyMatrix4(new ae().makeRotationFromEuler(nf(...r))),a.computeVertexNormals(),a}function Qh(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),r.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;s.push(l,l+1,h+1,l,h+1,h)}let o=new Me;return o.setAttribute("position",new se(n,3)),o.setAttribute("uv",new se(r,2)),o.setIndex(s),o.computeVertexNormals(),o}var fc=class{constructor(){qe(this,"parts",new Map)}add(t,e,n,r,s){let o=t.index?t:Cy(t),a=new ae().compose(n?Array.isArray(n)?new R(...n):n:new R,new fn().setFromEuler(r??new bn),s===void 0?new R(1,1,1):typeof s=="number"?new R(s,s,s):new R(...s)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,r]of this.parts){let s=new St(tu(r),n);t.add(s),e.push(s);for(let o of r)o.dispose()}return this.parts.clear(),e}};function Cy(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,r)=>r)),t}function tu(i){let t=0,e=0;for(let d of i)t+=d.attributes.position.count,e+=d.index.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=i.some(d=>d.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let d of i){let m=d.attributes.position.count;n.set(d.attributes.position.array,l*3),d.attributes.normal||d.computeVertexNormals(),r.set(d.attributes.normal.array,l*3),d.attributes.uv&&s.set(d.attributes.uv.array,l*2),a&&d.attributes.color&&a.set(d.attributes.color.array,l*3);let g=d.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new Me;return u.setAttribute("position",new Ie(n,3)),u.setAttribute("normal",new Ie(r,3)),u.setAttribute("uv",new Ie(s,2)),a&&u.setAttribute("color",new Ie(a,3)),u.setIndex(new Ie(c,1)),u.computeBoundingSphere(),u}var Q0=new Map;function Kh(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Jh(i,t,e,n=4,r=1){let s=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let d=Math.floor(l),m=Math.floor(h),g=l-d,_=h-m,f=g*g*(3-2*g),p=_*_*(3-2*_),y=(b,L)=>Kh((b%c+c)%c,(L%c+c)%c,r+u),x=uc(uc(y(d,m),y(d+1,m),f),uc(y(d,m+1),y(d+1,m+1),f),p);s+=x*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return s/a}function rf(i,t,e,n=[1,1]){let r=Q0.get(i);if(!r){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),r=new Ln(o),r.wrapS=r.wrapT=Lr,Q0.set(i,r)}let s=r.clone();return s.repeat.set(...n),s.needsUpdate=!0,s}var sf=(i,t,e,n,r)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=r,i.data[t*4+3]=255};function Br(i=1,t=[1,1],e=.35,n=1.25){return rf(`noise${i}`,128,r=>{for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=Jh(o/(16*i),s/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,uc(e,n,a)/1.25));sf(r,s*128+o,c,c,c)}},t)}function of(i=6,t=.11,e=[1,1]){return rf(`vein${i}:${t}`,128,n=>{let r=[];for(let s=0;s<i;s++)for(let o=0;o<i;o++)r.push([(o+Kh(o,s,9))/i,(s+Kh(o,s,11))/i]);for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=o/128+(Jh(o/16,s/16,8,2,5)-.5)*.08,c=s/128+(Jh(o/16+7,s/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of r)for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let y=a-g-p,x=c-_-f,b=Math.sqrt(y*y+x*x);b<l?(h=l,l=b):b<h&&(h=b)}let u=(h-l)*i*.5,d=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*d*d);sf(n,s*128+o,m,m,m)}},e)}var dr=1.13,Uo=.66,ce=(i,t,e)=>new zt(i,t,e);function Py(i,t){let e=(s,o=!0)=>(o?i.push(s):t.push(s),s),n=(s,o=1.7)=>s.clone().multiplyScalar(o),r=s=>Math.min(2.4,.55+s*.13);return{bark:(s,o)=>e(new Se({color:n(o,1.5),map:Br(4,[3,2]),roughness:.9,emissive:s.clone().multiplyScalar(.4)})),plain:(s,o=.5)=>e(new Se({color:n(s),roughness:o})),leaf:(s,o)=>e(new Se({color:n(o,1.6),map:Br(1,[2,2],.45),roughness:.45,side:Pe,emissive:s.clone().multiplyScalar(.6)})),metal:(s,o=.28)=>e(new Se({color:n(s,1.25),metalness:.55,roughness:o+.12})),veins:(s,o,a,c=6,l=.11,h=.1)=>e(new Se({color:n(s,2.4),map:Br(1,[3,2]),emissive:o,emissiveMap:of(c,l,[4,2]),emissiveIntensity:r(a),roughness:.6,metalness:h})),lava:()=>e(new Se({color:ce(.3,.05,0),emissive:ce(1,.22,.015),emissiveMap:Br(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(s,o,a,c=In)=>e(new Se({color:o,emissive:s,emissiveMap:Br(1,[2,2],.6),emissiveIntensity:r(a),roughness:.4,side:c})),emissive:(s,o)=>e(new Se({color:s.clone().multiplyScalar(.15),emissive:s,emissiveIntensity:r(o),roughness:.4})),crystal:(s,o)=>e(new Se({color:n(s,1.3),emissive:s,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(s,o=.3)=>e(new Se({color:s,emissive:s.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Se({color:ce(.55,.82,1),map:Br(2,[4,1],.7),emissive:ce(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var zr=i=>Math.max(8,Math.round(i*.5)),No=i=>Math.max(1,Math.round(i*.45)),pc=i=>i-Math.floor(i);function Iy(i,t,e,n,r,s=.09,o=.1){let a=i+n,c=(a%t+t)%t;return r*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-s*c)*(Math.cos(o*c)+s/o*Math.sin(o*c)))}function Ly(i,t,e,n=8,r=10,s=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-r)/s))))}function af(i,t,e,n){let r=[];for(let s=0;s<t;s++){let o=new R(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),r.push([o.x,o.y,o.z])}return r}function eu(i,t,e,n,r,s){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*r));return o.push(e),rn(o,o.map((a,c)=>s*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function Dy(i,t,e,n,r,s,o,a=.45){return Qh(4,10,(c,l)=>{let h=2*c-1,u=.07+r*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-s*l**3,d=t+e*l,m=i+o*l,g=n*Math.max(.03,Do(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,f=h*g,p=Math.cos(m),y=Math.sin(m);return[_*p-f*y,_*y+f*p,d]})}function Uy(i=.14,t=.055){return Qh(3,6,(e,n)=>{let r=2*e-1,s=t*(.04+Do(Math.sin(Math.PI*n**.75),.9));return[r*s,n*i,-Math.abs(r)*s*.45-.18*i*n*n]})}var kr=new an;function Fs(i,t,e,n,r){kr.position.set(e[0],e[1],e[2]),typeof n=="number"?kr.scale.setScalar(Math.max(1e-5,n)):kr.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),r?kr.rotation.set(r[0],r[1],r[2],"ZYX"):kr.rotation.set(0,0,0),kr.updateMatrix(),i.setMatrixAt(t,kr.matrix)}var iu=new mn(1,1),nu=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((r,s)=>{for(let o of n)o.offset.x-=s*e})};function Ny(i){let{rng:t,m:e}=i,n=e.bark(ce(.045,.028,.014),ce(.3,.19,.1)),r=e.plain(ce(.1,.3,.05),.55),s=e.leaf(ce(.015,.14,.02),ce(.1,.34,.045)),o=.022,a=_=>dc(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(rn([...c,2.6,2.63].map(_=>[...a(_),_]),[...l,.06,.015],{radial:8,per:5}),n);for(let _=0;_<5;_++){let f=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(f),y=Math.sin(f);i.stat(rn([[.03*p,.03*y,.3],[.06*p,.06*y,.17],[.1*p,.1*y,.07],[.14*p,.14*y,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,f,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:f-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},d=[.015,.09,.2,.235,.185,.06],m=[2.42,2.6,2.8,3.02,3.22,3.33];for(let _=0;_<6;_++){let f=2*Math.PI*_/6+t.uniform(-.15,.15),p=d.map((y,x)=>{let b=f+.22*x;return[y*Math.cos(b),y*Math.sin(b),m[x]+t.uniform(-.02,.02)]});i.stat(rn(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let y of[2,4])u(p[y],Math.atan2(p[y][1],p[y][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,f,p,y,x])=>{let b=zr(56),L=$i(E=>jh(c,l,_+(f-_)*E)+.018,_,f,p,b,y,.004,t,a);i.stat(rn(L,L.map((E,v)=>x*(1-.55*v/(b-1))),{radial:5,per:3}),r);for(let E=2;E<b-2;E+=Math.max(1,Math.floor((b-4)/No(22)))){let v=L[E],A=a(v[2]);u(v,Math.atan2(v[1]-A[1],v[0]-A[0]),t.uniform(.7,1.3))}});let g=i.inst(Uy(),s,h.length);return i.anim(_=>{h.forEach((f,p)=>Fs(g,p,f.p,f.s,[f.rx+.16*Math.sin(_*.2094+f.ph),f.ry,f.rz+.1*Math.sin(_*.1309+f.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:ce(.45,1,.35),hot:ce(.7,1,.3),mid:ce(.15,.8,.05)}}function Hy(i){let{rng:t,m:e}=i,n=e.veins(ce(.085,.065,.055),ce(1,.3,.03),2,7,.06,0);n.roughness=.9;let r=e.lava(),s=e.core(ce(1,.36,.04),ce(.9,.12,.01),2,Pe);nu(i,r,.25),nu(i,s,-.18);let o=.014,a=g=>dc(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(rn(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,f=2.35)=>jh(c,l,_+(f-_)*g);for(let g=0;g<2;g++){let _=zr(60),f=$i(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(rn(f,f.map((p,y)=>.012+.003*Math.sin(y*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=zr(60),f=$i(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(rn(f,f.map((p,y)=>.0085+.002*Math.sin(y*.7)),{radial:5,per:3}),r)}{let g=$i(_=>h(_,.5,2.2)-.001,.5,2.2,-3,zr(50),.8,0,void 0,a);i.stat(rn(g,.0055,{radial:4,per:3}),r)}i.stat(gi(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(gi(.082,[0,0,0],.008,10,0),r,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(Dy(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),s);i.stat(gi(.165,[0,0,0],.007,14,0),r,[0,0,2.86]);let u=6,d=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),f=t.uniform(.16,.2);d.push({p:[f*Math.cos(_),f*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(iu,e.emissive(ce(1,.45,.05),10),u);return i.anim(g=>{d.forEach((_,f)=>{let p=pc(g/60+_.ph),y=_.s*Math.min(1,p*6)*(1-.6*p);Fs(m,f,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*y,.85*y,7*y])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:ce(1,.45,.1),hot:ce(1,.7,.15),mid:ce(1,.25,.02)}}function Fy(i){let{rng:t,m:e}=i,n=e.metal(ce(.1,.12,.16),.3),r=e.metal(ce(.78,.84,.9),.18),s=e.water(),o=e.crystal(ce(.2,.7,1),2.5),a=e.crystal(ce(.4,.8,1),1.5);nu(i,s,.3);let c=.006,l=_=>dc(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(rn(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(gi(.066,[0,0,0],.012,10,0),r,[0,0,2.56]);for(let _=0;_<3;_++){let f=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(rn([[.04*f,.04*p,2.55],[.085*f,.085*p,2.68],[.12*f,.12*p,2.82],[.13*f,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),r)}for(let _=0;_<2;_++)i.stat(rn($i(.05,.4,2.45,7,zr(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),r);{let _=zr(64),f=$i(b=>.058+.012*Math.sin(b*20),.45,2.5,3.2,_,1,0,void 0,l),p=f.map((b,L)=>.012+.014*(.5+.5*Math.sin(L*.45))),y=new Hs(_,{radial:6,per:3});y.set(f,p),i.mesh(y.geo,s);let x=p.slice();i.anim(b=>{for(let L=0;L<_;L++)x[L]=p[L]*(1+.6*Math.sin(b*.2618-L*.7));y.set(f,x)})}[.7,1,1.35,1.7,2.05].forEach((_,f)=>{let p=f*2.1;i.stat(ni(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,f,p,y,x,b,L,E,v],A)=>{let M=20+A*50,T=A===0?1:-1,J=y<p?-1:1,V=Math.PI/180,Z=Array.from({length:40},(G,H)=>{let C=H/39;return{a:(p+(y-p)*C)*V,b:p*V+J*E*V*C,R:_+(f-_)*C,y:b+.04*Math.sin(C*6),r:.004+x*Do(Math.sin(Math.PI*C),.8)}}),ut=(G,H,C,I)=>[G*t.uniform(.35,1.4),H*t.uniform(.8,1.2),-I*C+t.uniform(-1.4,1.4),t.uniform(1,5)],ot=Z.map((G,H)=>[ut(.07,.35,.9,H),ut(.035,.7,1.7,H),ut(.03,.3,1,H),ut(.015,.6,1.8,H),ut(.32,.45,.9,H),ut(.2,.8,1.6,H),ut(.1,1.3,2.3,H)]),pt=new Hs(40,{radial:6,per:2}),D=Z.map(()=>[0,0,0]),tt=Z.map(()=>0),W=i.mesh(pt.geo,s,[0,0,3]);W.renderOrder=2;let O=G=>{let H=Iy(G,120,1,M,T),C=Ly(G,120,M,12),I=Math.floor((G+M)/120),k=$=>$[0]*Math.sin(G*$[1]+$[2]+I*$[3]);Z.forEach(($,B)=>{let F=ot[B],Y=$.a*(1-C)+$.b*C+H,nt=$.R*(1-C)+L*(1+C*(k(F[0])+k(F[1])))*C;D[B][0]=nt*Math.cos(Y),D[B][2]=nt*Math.sin(Y),D[B][1]=$.y*(1-C)+(b+k(F[2])+k(F[3]))*C,tt[B]=$.r*(1+.3*(1-C)*Math.sin(G*.2618-B*.8))*(1-C)+v*C*Math.max(.3,1+C*(k(F[4])+k(F[5])+k(F[6])))}),pt.set(D,tt)};O(0),i.anim(O)});let d=[];for(let _=0;_<10;_++){let f=t.uniform(0,2*Math.PI),p=[Math.cos(f),0,Math.sin(f)],y=t.uniform(.2,.34),x=t.uniform(.12,.3);d.push({start:[p[0]*y,0,3+p[2]*y],vel:[p[0]*x+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*x+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of d)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:No(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(iu,a,d.length+m.length);m.forEach((_,f)=>Fs(g,d.length+f,_.p,_.s)),i.anim(_=>{d.forEach((f,p)=>{let y=pc(_/f.per+f.ph),x=y*.9;Fs(g,p,[f.start[0]+f.vel[0]*x,f.start[1]+f.vel[1]*x,f.start[2]+f.vel[2]*x-.9*x*x],f.s*Math.min(1,y*10)*Math.min(1,(1-y)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(ni(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let f=2*Math.PI*_/3;i.stat(ni(.02,.12,.016,4,[Math.sin(f)*.4,-Math.cos(f)*.4,0]),o,[.045*Math.cos(f),.045*Math.sin(f),.36])}return{z:3,r:.145,glass:ce(.3,.75,1),hot:ce(.5,.95,1),mid:ce(.05,.4,1)}}function Oy(i){let{rng:t,m:e}=i,n=e.veins(ce(.03,.02,.06),ce(.85,.6,1),3,6,.09,.5),r=e.metal(ce(.62,.58,.72),.2),s=e.crystal(ce(.35,.15,1),3),o=e.emissive(ce(.65,.4,1),4),a=e.emissive(ce(.6,.3,1),3);i.stat(rn([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(gi(.04,[0,0,0],.007,10,0),r,[0,0,_]);i.stat(rn([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(rn($i(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),r);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,f)=>i.stat(gi(f===0||f===4?.064:.058,[0,0,0],.011,10,0),r,[0,0,_]));let l=gi(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let f=e.emissive(ce(.65,.4,1),4),p=f.emissiveIntensity;f.transparent=!0;let y=i.mesh(l,f);i.anim(x=>{let b=pc(x/60+_/4);y.position.z=.95+1.45*b,y.scale.set(1+.3*b,1+.3*b,1);let L=Math.min(1,b*8)*Math.min(1,(1-b)*3);f.emissiveIntensity=p*L,f.opacity=L})}let h=(_,f,p)=>ef((Math.sin(_*.9+f)+Math.sin(_*.37+f*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let f=t.uniform(0,6.28),p=[.07*Math.cos(f),.07*Math.sin(f),c[_]],y=[.07*Math.cos(f+.9),.07*Math.sin(f+.9),c[_+1]],x=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2],b=i.mesh(eu(t,[p[0]-x[0],p[1]-x[1],p[2]-x[2]],[y[0]-x[0],y[1]-x[1],y[2]-x[2]],6,.012,.005),o,x),L=t.uniform(0,6.28);i.anim(E=>{b.scale.setScalar(Math.max(1e-4,h(E,L,.3)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=.066;i.stat(eu(t,[p*Math.cos(f),p*Math.sin(f),.95],[p*Math.cos(f+.6),p*Math.sin(f+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let f=new R(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),y=i.mesh(eu(t,[f.x*.16,f.y*.16,f.z*.16],[f.x*p,f.y*p,f.z*p],7,.03,.005),o,[0,0,3]),x=t.uniform(0,6.28);i.anim(b=>{y.rotation.set(Math.floor(b/5+x)*1.7,0,Math.floor(b/4+x)*2.4,"ZYX"),y.scale.setScalar(Math.max(1e-4,h(b,x,.5)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],y=[2.5,2.66,2.85,3.08,3.22];i.stat(rn(p.map((x,b)=>[x*Math.cos(f+.3*b),x*Math.sin(f+.3*b),y[b]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),r)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,f,p,y])=>{let x=i.mesh(gi(_,f.map(b=>b*Math.PI/180),p,10),r,[0,0,3]);i.anim(b=>{x.rotation.z=b*y})}),i.stat(ni(.58,.06,.03,4),r,[0,0,3.14]);let u=[new R(0,.6,.8),new R(.7,-.3,.65),new R(-.45,.5,.75)],d=[1,-2,3],m=Array.from({length:6},(_,f)=>{let p=u[f%3].clone().normalize(),y=Math.abs(p.z)<.9?new R(0,0,1):new R(1,0,0),x=p.clone().cross(y).normalize(),b=p.clone().cross(x);return{e1:x,e2:b,R:t.uniform(.32,.5),th0:Math.floor(f/3)*Math.PI+t.uniform(-.3,.3),w:d[f%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(ni(.11,.11,.035,4),s,m.length);return i.anim(_=>{m.forEach((f,p)=>{let y=f.th0+_*f.w,x=f.R*(1+.12*Math.sin(_*.05236+f.ph));Fs(g,p,[x*(f.e1.x*Math.cos(y)+f.e2.x*Math.sin(y)),x*(f.e1.y*Math.cos(y)+f.e2.y*Math.sin(y)),3+x*(f.e1.z*Math.cos(y)+f.e2.z*Math.sin(y))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(ni(.1,.3,.04,5),s,[0,0,.32]),{z:3,r:.15,glass:ce(.6,.3,1),hot:ce(.7,.5,1),mid:ce(.4,.1,1),style:"flicker"}}function By(i){let{rng:t,m:e}=i,n=e.veins(ce(.02,.03,.05),ce(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let r=e.metal(ce(.8,.86,.95),.15),s=e.crystal(ce(.25,.65,1),4),o=e.emissive(ce(.7,.9,1),14),a=e.emissive(ce(.3,.7,1),9);i.stat(rn([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(ni(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let y=i.mesh(gi(.058+.006*p,[0,0,0],.006,12,.6),r,[0,0,.655+.42*p]);i.anim(x=>{y.rotation.z=x*(p%2===0?1:-1)*.05236})}let c=p=>{let y=Math.max(0,(p-.7)/.3);return .05+.26*Do(Math.sin(y*Math.PI/2),1.5)};for(let p=0;p<2;p++){let y=zr(110);i.stat(rn($i(c,.4,3.2,6,y,p*Math.PI),Array.from({length:y},(x,b)=>.0085+.004*Math.sin(b*.55+p)),{radial:5,per:3}),r)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,y,x,b])=>{let L=i.mesh(gi(p,y.map(E=>E*Math.PI/180),x,10),r,[0,0,3]);i.anim(E=>{L.rotation.z=E*b})}),i.stat(ni(.62,.05,.032,4),s,[0,0,3.17]);let l=af(t,No(110),.35,.85);for(let p=0;p<No(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,y)=>p.map(x=>({rel:x,s:y(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),d=h(af(t,Math.max(No(30),8),.4,.9),()=>t.uniform(.02,.045)),m=tu([ni(1,1,.14,4),ni(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(y,x)=>x)),p))),g=i.inst(iu,o,u.length),_=i.inst(m,o,d.length),f=(p,y,x)=>{y.forEach((b,L)=>{let E=pc(x/b.per+b.ph),v=(1-E)**1.6;Fs(p,L,[b.rel[0]*v,b.rel[1]*v,3+b.rel[2]*v],b.s*Math.min(1,E*8)*(1-E)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{f(g,u,p),f(_,d,p)}),i.stat(ni(.08,.31,.05,6),s,[0,0,.33]);for(let p=0;p<3;p++){let y=2*Math.PI*p/3+.4,x=Math.cos(y),b=Math.sin(y);i.stat(rn([[.035*x,.035*b,.52],[.07*x,.07*b,.44],[.11*x,.11*b,.34],[.1*x,.1*b,.24]],[.02,.016,.011,.003],{radial:6}),r)}return{z:3,r:.17,glass:ce(.05,.25,1),hot:ce(.2,.5,1),mid:ce(0,.05,.4)}}var cf={verdant:Ny,ember:Hy,tide:Fy,storm:Oy,void:By},ky={verdant:7,ember:8,tide:9,storm:10,void:11};function Ki(i,t){let e=j0(i),n=cf[e.base??e.id]?e.base??e.id:"verdant",r=new Yt,s=new Yt;s.rotation.x=-Math.PI/2,s.scale.setScalar(Uo),s.position.y=dr-3*Uo,r.add(s);let o=[],a=[],c=[],l=new fc,h={B:s,batch:l,rng:tf(ky[n]),m:Py(o,a),stat:(E,v,A,z,M)=>l.add(E,v,A,z,M),mesh:(E,v,A)=>{let z=new St(E,v);return A&&z.position.set(...A),s.add(z),z},inst:(E,v,A)=>{let z=new Cs(E,v,A);return z.frustumCulled=!1,s.add(z),z},anim:E=>{c.push(E)}},u=cf[n](h);l.build(s);let d=new zt(e.gem),m=e.tint?new zt(e.tint):null,g=new Se({color:m?u.glass.clone().lerp(d,.6):u.glass,emissive:d,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),_=new St(new He(u.r*Uo,20,14),g);_.position.y=dr+(u.z-3)*Uo,_.renderOrder=1,r.add(_);let f=h.m.core(m?u.hot.clone().lerp(d,.7):u.hot,m?u.mid.clone().lerp(d,.5):u.mid,6),p=new St(new He(u.r*Uo*.6,14,10),f);_.add(p);let y=f.emissiveIntensity;if(c.push(E=>{if(u.style==="flicker"){let v=Math.abs(Math.sin(E*.9)*Math.sin(E*.37+1.1));p.scale.setScalar(1+.1*v),f.emissiveIntensity=y*(.55+.45*v)*1.6}else p.scale.setScalar(1+.05*Math.sin(E*.1309))}),o.splice(o.indexOf(f),1),m)for(let E of[...o,...a])E.color.lerp(m,.55),E.emissive.getHex()!==0&&E.emissive.lerp(m,.7);let x=new di(new ti({map:t,color:d.getHex(),blending:un,depthWrite:!1,transparent:!0,opacity:.5}));x.scale.setScalar(.45),x.position.y=_.position.y,r.add(x);let b=Math.random()*20,L=(E,v)=>{b+=E*(1+v*1.5);let A=b*24;for(let z of c)z(A,E)};return L(0,0),{group:r,gem:_,gemMat:g,glow:x,color:d,materials:o,update(E,v,A){L(v,A)}}}var re=i=>new zt(i),be=i=>1-Math.abs((i%1+1)%1*2-1),Oe=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),pr=(i,t)=>Math.exp(-(i*i)/(t*t)),lf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function ln(i,t,e,n,r=!1){let s=[],o=[],a=(h,u)=>e(r?h%i/i:h/i,u/t),c=(h,u,d)=>{let m=(h[0]+u[0]+d[0])/3,g=(h[1]+u[1]+d[1])/3,_=n(r?m/i%1:m/i,g/t);for(let[f,p]of[h,u,d])s.push(...a(f,p)),o.push(_.r,_.g,_.b)};for(let h=0;h<t;h++)for(let u=0;u<i;u++)c([u,h],[u,h+1],[u+1,h+1]),c([u,h],[u+1,h+1],[u+1,h]);let l=new Me;return l.setAttribute("position",new se(s,3)),l.setAttribute("color",new se(o,3)),l.computeVertexNormals(),l}function Sn(i,t,e,n=1,r=1,s=0,o=1){let a=i.length-1;return ln(t,a,(c,l)=>{let h=Math.min(a-1,Math.floor(l*a)),u=l*a-h,d=i[h][0]+(i[h+1][0]-i[h][0])*u,m=i[h][1]+(i[h+1][1]-i[h][1])*u,g=(s+c*(o-s))*Math.PI*2;return[Math.sin(g)*m*n,d,Math.cos(g)*m*r]},e,s===0&&o===1)}function Ve(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new R(...i[Math.min(s-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return ln(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}function vi(i,t,e=[0,0,0],n=[0,0,0]){let r=new $e(...i).toNonIndexed();r.rotateX(n[0]),r.rotateY(n[1]),r.rotateZ(n[2]),r.translate(...e);let s=r.attributes.position.count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=t.r,o[a*3+1]=t.g,o[a*3+2]=t.b;return r.setAttribute("color",new Ie(o,3)),r}function vn(i,t){let e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=t.r,r[s*3+1]=t.g,r[s*3+2]=t.b;return e.setAttribute("color",new Ie(r,3)),e.computeVertexNormals(),e}function mc(i){let t=new He(1,28,22),e=t.attributes.position,n=t.attributes.uv;for(let r=0;r<e.count;r++){let s=e.getX(r),o=e.getY(r),a=e.getZ(r),c=Math.max(0,a),l=s*i.w,h=o*i.h,u=a*i.d;if(o<0){let d=-o;l*=1-i.jaw*d**1.25,u*=1-.12*d,h*=1+i.chin*d}l*=1+.04*pr(o+.02,.22)*c,o>.2&&(l*=1-.08*(o-.2));for(let d of[-1,1])u-=.009*pr(s-d*.38,.2)*pr(o-.06,.13)*c;u+=i.brow*pr(o-.27,.08)*pr(s,.5)*c,u+=i.nose*pr(s,.11)*c*lf(.2,-.2,o)*lf(-.4,-.27,o),u+=.004*pr(s,.24)*pr(o+.5,.07)*c,a<0&&(u*=1.06),e.setXYZ(r,l,h,u),a>.05?n.setXY(r,.5+s*.5,.5+o*.5):n.setXY(r,.02,.97)}return t.computeVertexNormals(),t}function gc(i){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),r=(u,d)=>[(.5+u*.5)*512,(.5-d*.5)*512];n.fillStyle=i.skin,n.fillRect(0,0,512,512);let s=(u,d,m,g,_,f)=>{let[p,y]=r(u,d),x=m*512*.5;n.save(),n.translate(p,y),n.scale(1,g/m);let b=n.createRadialGradient(0,0,0,0,0,x);b.addColorStop(0,_.replace("A",String(f))),b.addColorStop(1,_.replace("A","0")),n.fillStyle=b,n.beginPath(),n.arc(0,0,x,0,Math.PI*2),n.fill(),n.restore()};for(let u of[-1,1])s(u*.62,-.18,.22,.3,i.shade,.35);s(0,-.72,.3,.12,i.shade,.3),s(.07,-.12,.05,.2,i.shade,.25);for(let u of[-1,1]){let d=u*.38,m=.06;s(d,m+.04,.26,.12,i.shade,.45);let[g,_]=r(d,m),f=i.eyeW*512*.5,p=i.eyeH*512*.5;if(n.save(),n.translate(g,_),n.scale(u,1),n.beginPath(),n.moveTo(-f,0),n.quadraticCurveTo(-f*.1,-p*1.1,f,-p*.15),n.quadraticCurveTo(f*.2,p*1.05,-f,0),n.closePath(),n.fillStyle=i.glowEyes?"#ffd23a":"#ece6ee",n.fill(),n.save(),n.clip(),n.fillStyle=i.iris,n.beginPath(),n.arc(-f*.1,p*.1,p*1.05,0,Math.PI*2),n.fill(),n.fillStyle="#120c14",n.beginPath(),i.glowEyes?n.ellipse(-f*.1,p*.1,p*.22,p*.8,0,0,Math.PI*2):n.arc(-f*.1,p*.1,p*.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.8)",n.beginPath(),n.arc(-f*.26,-p*.25,p*.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(40,25,35,.6)",n.fillRect(-f,-p*1.3,f*2,p*(.3+i.lid)),n.restore(),n.strokeStyle="#1c1418",n.lineCap="round",n.lineWidth=512*.009,n.beginPath(),n.moveTo(-f*1.02,.02*p),n.quadraticCurveTo(-f*.1,-p*(1.15-i.lid*.6),f*1.08,-p*.3),n.stroke(),n.strokeStyle="rgba(80,55,60,.5)",n.lineWidth=512*.004,n.beginPath(),n.moveTo(-f*.7,p*.55),n.quadraticCurveTo(0,p*1,f*.8,p*.25),n.stroke(),i.wrinkles){n.strokeStyle="rgba(120,90,90,.45)",n.lineWidth=512*.004;for(let y of[-1,0,1])n.beginPath(),n.moveTo(f*1.15,y*p*.4),n.lineTo(f*1.5,y*p*.8-p*.1),n.stroke();n.beginPath(),n.moveTo(-f*.6,p*1.4),n.quadraticCurveTo(0,p*2,f*.7,p*1.2),n.stroke()}n.strokeStyle=i.brow,n.lineWidth=i.browW,n.beginPath(),n.moveTo(-f*1,-p*(2.3-i.browTilt)),n.quadraticCurveTo(f*.15,-p*3.2,f*1.15,-p*(2.6+i.browTilt)),n.stroke(),n.restore()}if(i.wrinkles){n.strokeStyle="rgba(120,90,90,.4)",n.lineWidth=512*.004;for(let u of[.42,.5]){let[d,m]=r(-.25,u),[g,_]=r(.25,u);n.beginPath(),n.moveTo(d,m),n.quadraticCurveTo((d+g)/2,m-6,g,_),n.stroke()}}n.fillStyle="rgba(80,50,55,.5)";for(let u of[-1,1]){let[d,m]=r(u*.06,-.32);n.beginPath(),n.ellipse(d,m,512*.012,512*.006,0,0,Math.PI*2),n.fill()}let[o,a]=r(0,-.52),c=i.lipW*512*.5,l=.05*512*.5;if(i.snarl){n.fillStyle="#2a1416",n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.fill(),n.fillStyle="#e8e0c8",n.fillRect(o-c*.85,a-l*.9,c*1.7,l*.8),n.fillRect(o-c*.7,a+l*.25,c*1.4,l*.6),n.strokeStyle="#2a1416",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(o+u*c*.24,a-l),n.lineTo(o+u*c*.24,a+l),n.stroke();n.strokeStyle=i.lips,n.lineWidth=512*.008,n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.stroke()}else n.fillStyle=i.lips,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a-l*.9,o+c,a),n.quadraticCurveTo(o,a+l*1.2,o-c,a),n.fill(),n.strokeStyle="rgba(40,20,25,.7)",n.lineWidth=512*.005,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a+l*.3,o+c,a),n.stroke();let h=new Ln(e);return h.colorSpace=nn,h.anisotropy=4,h}function Os(){let i=[];return{materials:i,mat:(e,n={})=>{let r=new Se({color:n.vc?16777215:e,vertexColors:!!n.vc,metalness:n.metal??.04,roughness:n.rough??.8,flatShading:n.flat??!0,emissive:n.emissive??(n.vc?1315100:0),transparent:!0,side:n.double?Pe:In});return i.push({mat:r,color:r.color.clone(),emissive:r.emissive.clone()}),r}}}var Ft=(i,t,e,n=[0,0,0])=>{let r=new St(i,t);return r.position.set(...n),e.add(r),r};function mr(i,t,e,n,r,s){let o=new Yt;o.position.set(...t),o.rotation.z=-.02,i.add(o);let a=new Yt;a.rotation.x=.3,o.add(a);let c=Ki(r,n);c.group.position.set(0,.3,.02),a.add(c.group),s&&(s.position.set(0,0,.02),a.add(s));for(let l of c.materials)e.push({mat:l,color:l.color.clone(),emissive:l.emissive.clone()});return{staffPivot:o,staff:c,crystal:c.gem,crystalMat:c.gemMat,glow:c.glow}}function hf(i,t,e){let n=new Nr;for(let r=0;r<8;r++){let s=Math.PI/2+r*Math.PI/4,o=r%2?t:i;r?n.lineTo(Math.cos(s)*o,Math.sin(s)*o):n.moveTo(Math.cos(s)*o,Math.sin(s)*o)}return n.closePath(),new Ps(n,{depth:e,bevelEnabled:!0,bevelThickness:e*.3,bevelSize:i*.06,bevelSegments:1}).center()}var uf=(i,t,e)=>{let n=be(i*e);return Math.abs(n-t)<.2||Math.abs(n-(1-t))<.2};function ii(i,t,e,n=i,r=1){let s=new Yt,o=(a,c,l,h=[0,0,0],u=[1,1,1])=>{let d=Ft(vn(a,c),t,s,l);return d.rotation.set(...h),d.scale.set(...u),d};if(e){o(new $e(.03,.085,.07),i,[.04,0,-.005]);for(let a=0;a<4;a++){let c=.03-a*.02,l=.028-a*.001,h=new Bn(l,.011,4,7,Math.PI*1.25);h.rotateX(Math.PI/2),o(h,n,[.012,c,0],[0,-.35,0])}o(new Ur(.011,.04,2,5),i,[.02,.048,.03],[.2,0,1.2])}else{o(new $e(.06,.07,.028),i,[0,-.035,0]);for(let a=0;a<4;a++)o(new $e(.013,.05-Math.abs(a-1.5)*.007,.016),n,[-.022+a*.0145,-.092+Math.abs(a-1.5)*.003,.006],[.25,0,0]);o(new $e(.014,.04,.016),n,[.034,-.045,.012],[.2,0,-.5])}return s.scale.setScalar(r),s}var ke={robe:re(3433416),robeDeep:re(2575516),cream:re(15853519),creamDeep:re(14273968),gold:re(14989388),goldDeep:re(11568688),skin:re(15916495),hair:re(16052974),hairShade:re(13618374),leather:re(7686442),leatherDeep:re(5583641),boot:re(2903964)},_c={w:.088,h:.122,d:.106,jaw:.42,chin:.06,nose:.022,brow:.008};function ff(i,t,e){let{materials:n,mat:r}=Os(),s=r(16777215,{vc:!0,double:!0}),o=r(ke.skin,{rough:.7}),a=r(ke.gold,{metal:.3,rough:.35,emissive:2760200}),c=i==="ally",l=c?re(3117168):ke.robe,h=c?re(2255442):ke.robeDeep,u=(V,Z,ut,ot)=>uf(V,Z,ut)?ke.gold:ot,d=new Yt,m=new Yt;d.add(m);for(let V of[-1,1])Ft(vn(new He(.06,7,5),ke.boot),s,m,[V*.09,.05,.08]).scale.set(.9,.75,1.6);Ft(Sn([[1.46,.1],[1.4,.165],[1.24,.18],[1.04,.165],[.7,.21],[.36,.255],[.3,.26],[.24,.266],[.18,.272],[.12,.278],[.04,.29]],36,(V,Z)=>{let ut=V<.06||V>.94,ot=Math.floor(Z*10);return ot===9?ke.cream:ot>=6?u(V,(ot-5.5)/3,12,ut?ke.creamDeep:h):ut?Oe(ke.cream,ke.creamDeep,.3*Z):Oe(l,h,.3*be(V*12)*Z)},1.1,.8),s,m);let g=ln(48,30,(V,Z)=>{let ut=.55+.35*Z**1.3,ot=ut+V*(Math.PI*2-2*ut),pt=.13,D,tt,W;if(Z<pt){let O=Z/pt;D=1.58-.15*O**.8,tt=.1+.15*O**.7,W=.74}else{let O=(Z-pt)/(1-pt);D=1.43-O*1.3,tt=.25+.14*O**1.2,W=.74+.16*O}return tt*=1+.05*Math.sin(ot*7)*Math.max(0,Z-pt),[Math.sin(ot)*tt*1.1,D,Math.cos(ot)*tt*W-.03*Z]},(V,Z)=>V<.03||V>.97||Z>.95?ke.cream:Z>.8?u(V,(Z-.8)/.15,16,h):Oe(l,h,.25+.3*be(V*9)));Ft(g,s,m),Ft(ln(6,4,(V,Z)=>[(V-.5)*(.26-.2*Z),1.56-Z*.3,-.15-.04*Math.cos((V-.5)*3)-.03*Z],(V,Z)=>Z>.85?ke.cream:Oe(h,l,.3*be(V*2))),s,m),Ft(new Ee(.035,.035,.014,10).rotateX(Math.PI/2),a,m,[0,1.47,.135]),Ft(new Bn(.035,.007,4,10),a,m,[0,1.47,.142]);for(let V of[-1,1])Ft(new Ee(.012,.012,.06,5).rotateZ(Math.PI/2),a,m,[V*.065,1.48,.125]);Ft(Sn([[1.08,.172],[1.02,.17]],16,()=>ke.leather,1.1,.82),s,m),Ft(new Co(.04,0),a,m,[0,1.05,.145]).scale.set(.9,1.1,.35),Ft(vn(new Co(.02,0),ke.leatherDeep),s,m,[0,1.05,.158]).scale.set(.9,1.1,.3),Ft(ln(1,6,(V,Z)=>[.03+(V-.5)*.045+.02*Math.sin(Z*3),1.03-Z*.48,.15+.035*Z+.012*Math.sin(Z*6)],(V,Z)=>Z>.9?ke.gold:Oe(ke.leather,ke.leatherDeep,.3*Z)),s,m),Ft(new Ee(.043,.052,.12,7),o,m,[0,1.53,0]);let f=new Yt;f.position.set(0,1.66,0),m.add(f);let p=r(16777215,{rough:.7,flat:!1});p.map=gc({skin:"#f2ddcf",shade:"rgba(160,120,115,A)",iris:"#5d7590",eyeW:.2,eyeH:.07,lid:.55,brow:"#f0eee8",browW:15,browTilt:.2,lips:"#b77a72",lipW:.2,wrinkles:!0}),Ft(mc(_c),p,f);let y=(V,Z)=>Oe(ke.hair,ke.hairShade,.2+.5*be(V*9)*(.3+.7*Z));Ft(ln(18,3,(V,Z)=>{let ut=-Math.PI+V*Math.PI*2,ot=Math.abs(ut),pt=ot<1?.62-.3*(ot/1):.32-.6*((ot-1)/(Math.PI-1)),D=Math.PI/2-Z*(Math.PI/2-pt),tt=1.09;return[Math.sin(ut)*Math.cos(D)*_c.w*tt,Math.sin(D)*_c.h*tt,Math.cos(ut)*Math.cos(D)*_c.d*tt]},y,!0),s,f),Ft(ln(18,10,(V,Z)=>{let ut=Math.PI*.4+V*Math.PI*1.2,ot=.08-Z*(.72+.1*be(V*6+.3)),pt=Z<.25?.12+Z*.26:.185+.04*Math.sin(Z*3.1),D=.02*Math.sin(Z*14+ut*3)*Z;return[Math.sin(ut)*(pt+D)*1.05,ot,Math.cos(ut)*(pt+D)*.8-.02-.05*Z]},y),s,f);for(let V of[-1,1]){let Z=Array.from({length:8},(ut,ot)=>{let pt=ot/7;return[V*(.095+.05*pt+.02*Math.sin(pt*9)),.02-pt*.5,0+.05*pt-.025*Math.sin(pt*7)]});Ft(Ve(Z,ut=>.03*(1-.6*ut)+.008,5,(ut,ot)=>y(ot,ut),[1,1,.6]),s,f)}Ft(ln(10,12,(V,Z)=>{let ut=V-.5,pt=-.02-.06*(1-Math.abs(ut)*2)**2-Z*(.56+.06*be(V*3+.5)),D=(.09+.02*Math.sin(Math.PI*Math.min(1,Z*1.6)))*(1-.75*Z**1.6),tt=ut*2*D+.008*Math.sin(Z*12+V*4),W=.065+.04*Math.cos(ut*Math.PI)+.085*Z**.8-(Z<.08?.03*Math.abs(ut)*2:0);return[tt,pt,W]},(V,Z)=>Oe(ke.hair,ke.hairShade,.15+.45*be(V*5)*Z)),s,f);for(let V of[-1,1])Ft(Ve([[V*.004,-.045,.108],[V*.035,-.055,.106],[V*.06,-.075,.095],[V*.07,-.11,.088]],Z=>.014*(1-.6*Z)+.004,5,()=>ke.hair),s,f);let x=new Yt;x.position.set(0,.075,-.005),x.rotation.set(-.08,0,-.05),f.add(x),Ft(ln(20,3,(V,Z)=>{let ut=V*Math.PI*2,ot=.13+Z*.17;return[Math.sin(ut)*ot,.02-.04*Z*Z,Math.cos(ut)*ot]},(V,Z)=>Oe(l,h,Z>.85?.4:.2*be(V*5)),!0),s,x),Ft(Ve([[0,.01,0],[0,.2,-.01],[0,.38,-.04],[-.02,.52,-.09],[-.07,.6,-.16],[-.13,.6,-.21],[-.18,.55,-.23]],V=>.15*(1-V)**1.3+.004,8,(V,Z)=>Oe(l,h,.25*be(Z*4)+.2*V)),s,x),Ft(ln(16,1,(V,Z)=>{let ut=V*Math.PI*2,ot=.153-.005*Z;return[Math.sin(ut)*ot,.025+Z*.05,Math.cos(ut)*ot]},V=>be(V*16)>.5?ke.gold:ke.goldDeep,!0),s,x),Ft(hf(.055,.018,.01),a,x,[0,.08,.15]).rotation.x=-.1;let L=(V,Z,ut)=>ln(14,8,(ot,pt)=>{let D=ot*Math.PI*2,tt=.06+ut*Math.max(0,(pt-.25)/.75)**1.3;return[Math.cos(D)*tt,-(pt*V),Math.sin(D)*tt*.9+Z*pt*pt]},(ot,pt)=>pt>.88?ke.cream:pt>.72?u(ot,(pt-.72)/.16,5,h):Oe(l,h,.3*be(ot*3)),!0),E=new Yt;E.position.set(-.22,1.42,0),E.rotation.set(.05,0,.12),m.add(E),Ft(L(.58,.05,.13),s,E),E.add(ii(ke.skin,s,!1)).position.set(0,-.56,.04);let v=new Yt;v.position.set(.22,1.42,.02),v.rotation.z=-.35,m.add(v),Ft(L(.4,0,.065),s,v).rotation.x=-.5,Ft(new Ee(.03,.033,.12,6),o,v,[0,-.38,.19]).rotation.x=-.5;let{staffPivot:A,staff:z,crystal:M,crystalMat:T,glow:J}=mr(v,[0,-.43,.24],n,t,e,ii(ke.skin,s,!0));return{root:d,body:m,head:f,arm:v,staffPivot:A,crystal:M,crystalMat:T,glow:J,staff:z,height:2,materials:n}}var ue={plate:re(14077887),plateHi:re(15262420),plateLo:re(11117201),plateDark:re(8156776),white:re(15789282),whiteLo:re(14209732),under:re(4862242),leather:re(7226406),leatherLo:re(5189401),sash:re(7301690),sashLo:re(5722928),slit:re(1380879),steel:re(13225168),grip:re(4860952),brass:re(12819016)};function df(i,t,e){let{materials:n,mat:r}=Os(),s=r(16777215,{vc:!0,double:!0}),o=r(16777215,{vc:!0,metal:.25,rough:.42,double:!0}),a=i==="ally"?re(3119724):re(12726316),c=i==="ally"?re(2257999):re(9314077),l=(E,v,A=6)=>Oe(ue.plate,be(E*A)>.5?ue.plateHi:ue.plateLo,.35+.15*v),h=new Yt,u=new Yt;h.add(u);for(let E of[-1,1]){let v=E*.105;Ft(ln(8,4,(A,z)=>{let M=A*Math.PI*2,T=-.07+z*.25,J=.06-z*.035,V=.058*(1-.7*z**1.6);return[v+Math.cos(M)*V,Math.max(.005,J+Math.sin(M)*V*.75),T]},(A,z)=>Math.floor(z*4)%2?ue.plateLo:ue.plate,!0),o,u),Ft(Ve([[v,.08,-.01],[v,.22,0],[v,.36,0],[v,.5,.005]],A=>.058+.016*Math.sin(A*2.6),8,(A,z)=>l(z,A)),o,u),Ft(vn(new He(.065,8,6),ue.plateHi),o,u,[v,.53,.025]).scale.set(1,.9,.85),Ft(vn(new Dn(.05,.03,6).rotateZ(-E*Math.PI/2),ue.plateLo),o,u,[v+E*.06,.53,.02]),Ft(Ve([[v,.56,0],[v*1.02,.72,0],[v*.98,.9,-.005]],A=>.068+.022*A,8,(A,z)=>l(z,A)),o,u)}Ft(Sn([[1,.19],[.8,.22],[.6,.25],[.5,.26]],16,E=>Oe(ue.under,ue.leatherLo,.4*be(E*8)),1.1,.85),s,u);for(let E of[!1,!0])Ft(ln(8,10,(v,A)=>{let z=(E?Math.PI:0)+(v-.5)*2.2,M=1.36-A*.76-.02*be(v*4)*A,T=(A<.45?.2+.03*Math.sin(A*7):.2+.12*(A-.45))+.012;return[Math.sin(z)*T*1.12,M,Math.cos(z)*T*.86]},(v,A)=>A>.82&&A<.87||A>.91&&A<.96?a:Oe(ue.white,ue.whiteLo,.35*be(v*4)*A)),s,u);Ft(Sn([[1.58,.11],[1.53,.2],[1.42,.245],[1.28,.23],[1.14,.2],[1.02,.205]],16,(E,v)=>E<.04||E>.96?ue.plateHi:l(E,v,8),1.12,.84),o,u);for(let E=0;E<3;E++)Ft(Sn([[1.02-E*.045,.205+E*.008],[.975-E*.045,.215+E*.008]],14,v=>E%2?ue.plateLo:ue.plate,1.12,.86),o,u);Ft(Sn([[1.66,.06],[1.62,.075],[1.57,.12]],12,(E,v)=>l(E,v)),o,u),Ft(Ve(Array.from({length:15},(E,v)=>{let A=v/14*Math.PI*2;return[Math.sin(A)*.235,1.07+.03*Math.cos(A+.6),Math.cos(A)*.19]}),()=>.03,6,(E,v)=>Oe(ue.sash,ue.sashLo,be(v*3+E*5)*.6),[1,1.4,1]),s,u);for(let E of[0,1])Ft(Ve([[-.2,1.06,.1],[-.22-E*.02,.95,.12],[-.21-E*.04,.82-E*.04,.12]],v=>.025*(1-.3*v),5,v=>Oe(ue.sash,ue.sashLo,v),[1.4,1,.5]),s,u);for(let E of[-1,1]){let v=Array.from({length:9},(A,z)=>{let M=z/8,T=-.9+M*4.6,J=1.52-.48*M;return[E*Math.sin(T)*.285,J+.06*Math.sin(M*Math.PI),Math.cos(T)*.222]});Ft(Ve(v,()=>.016,4,A=>Oe(ue.leather,ue.leatherLo,.4*be(A*4)),[1,1.5,1]),s,u)}Ft(vi([.06,.06,.02],ue.brass,[0,1.46,.235],[0,0,Math.PI/4]),s,u);let d=new Yt;d.position.set(0,1.18,-.24),d.rotation.z=.55,u.add(d),Ft(vi([.055,.82,.012],ue.steel,[0,-.12,0]),o,d),Ft(vn(new Dn(.039,.07,4).rotateX(Math.PI).rotateY(Math.PI/4),ue.steel),o,d,[0,-.565,0]).scale.set(1,1,.22),Ft(vi([.24,.03,.035],ue.brass,[0,.3,0]),s,d),Ft(vn(new Ee(.018,.018,.16,6),ue.grip),s,d,[0,.39,0]),Ft(vn(new He(.03,6,4),ue.brass),s,d,[0,.48,0]),Ft(Sn([[.32,.02],[-.5,.05],[-.6,.03]],6,()=>ue.leatherLo,1,.5),s,d);let m=new Yt;m.position.set(0,1.73,0),u.add(m),Ft(Sn([[.13,0],[.125,.06],[.105,.105],[.045,.122],[.025,.124],[.005,.125],[-.06,.125],[-.125,.12],[-.135,.11]],14,(E,v)=>Math.floor(v*8)===4&&(E<.2||E>.8)?ue.slit:E<.025||E>.975?ue.plateHi:l(E,v,6),1,1.06),o,m);for(let E=0;E<4;E++)Ft(vi([.012,.012,.01],ue.slit,[.035+E%2*.025,-.05-Math.floor(E/2)*.03,.128],[0,.3,0]),s,m);for(let E of[-1,1])Ft(vn(new Ee(.014,.014,.01,8).rotateZ(Math.PI/2),ue.brass),s,m,[E*.128,-.01,0]);Ft(vi([.03,.025,.05],ue.brass,[0,.13,-.01]),s,m);for(let E=0;E<7;E++){let v=(E-3)/3,A=.42-Math.abs(v)*.08,z=Array.from({length:7},(M,T)=>{let J=T/6,V=J*2.2;return[v*.03*(1+J),.14+Math.sin(V)*.14*A/.42,-.01-(1-Math.cos(V))*A*.45+.06*J]});Ft(Ve(z,M=>.026*(1-M)**.7+.004,5,(M,T)=>Oe(a,c,.3*be(T*2)+.4*M)),s,m)}let g=(E,v)=>{Ft(Ve([[0,-.02,0],[0,-.14,0],[0,-.26,v*.3]],A=>.056-.006*A,7,(A,z)=>l(z,A)),o,E),Ft(vn(new He(.05,7,5),ue.plateHi),o,E,[0,-.27,v*.3-.01])};for(let E of[-1,1]){let v=new Yt;v.position.set(E*.27,1.5,0),v.rotation.z=-E*.5,u.add(v),Ft(Sn([[.075,0],[.06,.07],[.02,.12],[-.03,.135],[-.07,.13]],10,(A,z)=>z>.85?ue.plateLo:l(A,z,5),1,1),o,v),Ft(Sn([[-.06,.13],[-.1,.12]],10,()=>ue.plateLo),o,v),Ft(vn(new Ee(.035,.04,.02,10).rotateZ(-E*Math.PI/2),ue.plateHi),o,v,[E*.125,-.03,0]),Ft(vn(new He(.014,6,4),ue.brass),s,v,[E*.137,-.03,0])}let _=new Yt;_.position.set(-.26,1.44,0),_.rotation.set(.05,0,.1),u.add(_),g(_,.1),Ft(Ve([[0,-.28,.02],[0,-.42,.05],[0,-.52,.06]],E=>.048+.008*E,7,(E,v)=>l(v,E)),o,_),_.add(ii(ue.plateHi,o,!1,ue.plateLo,1.15)).position.set(0,-.53,.06);let f=new Yt;f.position.set(.26,1.44,.02),f.rotation.z=-.35,u.add(f),Ft(Ve([[0,-.02,0],[0,-.12,0],[0,-.22,.04]],E=>.056-.006*E,7,(E,v)=>l(v,E)),o,f),Ft(vn(new He(.05,7,5),ue.plateHi),o,f,[0,-.24,.05]),Ft(Ve([[0,-.25,.07],[0,-.33,.15],[0,-.39,.21]],E=>.045+.01*E,7,(E,v)=>l(v,E)),o,f);let{staffPivot:p,staff:y,crystal:x,crystalMat:b,glow:L}=mr(f,[0,-.43,.25],n,t,e,ii(ue.plateHi,o,!0,ue.plateLo,1.15));return{root:h,body:u,head:m,arm:f,staffPivot:p,crystal:x,crystalMat:b,glow:L,staff:y,height:2,materials:n}}var Te={skin:re(8688447),skinLo:re(6714670),skinHi:re(10136146),hair:re(2892832),hairHi:re(4536623),red:re(11744555),redLo:re(8528668),leather:re(8015404),leatherLo:re(5583897),wrap:re(11045474),wrapLo:re(8217925),shorts:re(3814191),shortsLo:re(2695967),brass:re(12161605),nail:re(3947042),ear:re(10709594)},Vr={w:.096,h:.112,d:.106,jaw:.22,chin:.02,nose:.036,brow:.016};function pf(i,t,e){let{materials:n,mat:r}=Os(),s=r(16777215,{vc:!0,double:!0}),o=r(Te.skin,{rough:.75}),a=i==="ally"?re(2920330):Te.red,c=i==="ally"?re(2058598):Te.redLo,l=(v,A,z=5)=>Oe(Te.skin,be(v*z)>.5?Te.skinHi:Te.skinLo,.35+.1*A),h=new Yt,u=new Yt;h.add(u);for(let v of[-1,1]){let A=v*.095;Ft(ln(7,4,(z,M)=>{let T=z*Math.PI*2,J=-.06+M*.23,V=.05*(1-.35*M)*(M>.75?1-(M-.75)*1.6:1);return[A+v*.012*M+Math.cos(T)*V,Math.max(.004,.035+Math.sin(T)*V*.55-.01*M),J]},(z,M)=>l(z,M),!0),s,u);for(let z=0;z<3;z++)Ft(vn(new He(.016,5,4),Te.skinLo),s,u,[A+v*.012+(z-1)*.022,.016,.165-Math.abs(z-1)*.01]);Ft(Ve([[A,.05,-.01],[A,.3,-.005],[A*1.03,.48,.01],[A*1.05,.65,0],[A,.8,-.005]],z=>.04+.022*z+.008*Math.sin(z*7),7,(z,M)=>l(M,z)),s,u),Ft(Ve([[A,.08,-.01],[A,.2,-.008],[A,.32,-.004],[A*1.02,.44,.005]],z=>.048+.008*z,7,(z,M)=>be(z*6+M*.5)>.5?Te.wrap:Te.wrapLo),s,u)}Ft(Sn([[.96,.17],[.86,.19],[.74,.21],[.66,.2]],14,(v,A)=>Oe(Te.shorts,Te.shortsLo,.5*be(v*6)*A),1.08,.82),s,u),Ft(Sn([[1,.175],[.94,.178]],14,v=>be(v*7)>.85?Te.leatherLo:Te.leather,1.08,.84),s,u),Ft(vi([.06,.05,.02],Te.brass,[0,.97,.15]),s,u),Ft(vi([.035,.028,.024],Te.leatherLo,[0,.97,.152]),s,u);for(let v of[!1,!0])Ft(ln(6,6,(A,z)=>{let M=(v?Math.PI:0)+(A-.5)*.9,T=.19+.06*z,J=.42+.1*be(A*3.5+.2)+.04*Math.sin(A*17);return[Math.sin(M)*T*1.08,.96-z*J,Math.cos(M)*T*.86+(v?-.01:.01)]},(A,z)=>Oe(a,c,.25+.35*be(A*3)*z)),s,u);Ft(Sn([[1.36,.075],[1.32,.155],[1.24,.18],[1.13,.155],[1.02,.14],[.94,.152]],14,(v,A)=>Math.min(v,1-v)<.12&&A>.4?be(A*6)>.5?Te.skinHi:Te.skinLo:l(v,A,7),1.1,.74),s,u);for(let v of[-1,1]){let A=Array.from({length:9},(z,M)=>{let T=M/8,J=-.9+T*4.4;return[v*Math.sin(J)*.212,1.33-.36*T+.04*Math.sin(T*Math.PI),Math.cos(J)*.145]});Ft(Ve(A,()=>.014,4,z=>Oe(Te.leather,Te.leatherLo,.4*be(z*4)),[1,2,1]),s,u)}Ft(vi([.05,.05,.02],Te.brass,[0,1.27,.15],[0,0,Math.PI/4]),s,u);let d=new Yt;d.position.set(-.2,1.31,0),d.rotation.z=.55,d.scale.setScalar(.8),u.add(d),Ft(Sn([[.06,0],[.045,.06],[0,.1],[-.05,.11],[-.08,.1]],9,(v,A)=>A>.8||be(v*9)>.8?Te.leatherLo:Te.leather,1,1.1),s,d),Ft(Ve(Array.from({length:11},(v,A)=>{let z=A/10*Math.PI*2;return[Math.sin(z)*.088,1.375+.02*Math.cos(z),Math.cos(z)*.08]}),()=>.03,7,(v,A)=>Oe(a,c,.5*be(A*2+v*6))),s,u),Ft(ln(8,5,(v,A)=>{let z=Math.PI+(v-.5)*(2.4-1.2*A),M=.13-.02*A;return[Math.sin(z)*M*1.1,1.42-A*.2+.03*Math.cos((v-.5)*6),Math.cos(z)*M-.04*A]},(v,A)=>Oe(a,c,.2+.4*be(v*3)*(1-A))),s,u);for(let v of[0,1])Ft(Ve([[-.04+v*.05,1.36,-.1],[-.07+v*.03,1.22,-.15],[-.09+v*.05,1.08,-.16]],A=>.035*(1-.3*A),5,A=>Oe(a,c,A),[1.4,1,.45]),s,u);Ft(new Ee(.04,.05,.1,7),o,u,[0,1.4,0]);let m=new Yt;m.position.set(0,1.51,.01),u.add(m);let g=r(16777215,{rough:.75,flat:!1});g.map=gc({skin:"#84933f",shade:"rgba(60,72,24,A)",iris:"#d2401c",eyeW:.2,eyeH:.075,lid:.2,brow:"#2a221c",browW:22,browTilt:1,lips:"#4e3a22",lipW:.34,snarl:!0,glowEyes:!0}),Ft(mc(Vr),g,m);for(let v of[-1,1]){let A=[[v*.075,0,-.01],[v*.14,.03,-.03],[v*.21,.07,-.05],[v*.27,.105,-.07]];Ft(Ve(A,z=>.035*(1-z)**.9+.002,6,(z,M)=>l(M,z,3),[1,1,.35]),s,m),Ft(Ve(A.map(([z,M,T])=>[z*.98,M,T+.008]).slice(0,3),z=>.02*(1-z)+.002,5,()=>Te.ear,[1,1,.3]),s,m)}Ft(ln(16,3,(v,A)=>{let z=-Math.PI+v*Math.PI*2,M=Math.abs(z),T=M<.9?.55:.55-.65*((M-.9)/(Math.PI-.9)),J=Math.PI/2-A*(Math.PI/2-T),V=1.08+.03*be(v*8);return[Math.sin(z)*Math.cos(J)*Vr.w*V,Math.sin(J)*Vr.h*V,Math.cos(z)*Math.cos(J)*Vr.d*V]},(v,A)=>Oe(Te.hair,Te.hairHi,.4*be(v*8+A)),!0),s,m);for(let v=0;v<13;v++){let A=-Math.PI+v/13*Math.PI*2+.2*Math.sin(v*7.3),z=.55+.5*(v*.37%1),M=new R(Math.sin(A)*Math.cos(z),Math.sin(z),Math.cos(A)*Math.cos(z)),T=new R(M.x*Vr.w,M.y*Vr.h,M.z*Vr.d);Ft(vn(new Dn(.022,.07+.03*(v*.61%1),4),v%3?Te.hair:Te.hairHi),s,m,[T.x,T.y,T.z]).quaternion.setFromUnitVectors(new R(0,1,0),M.add(new R(0,0,-.5)).normalize())}let _=(v,A,z)=>Ft(Ve([A,[(A[0]+z[0])/2,(A[1]+z[1])/2,(A[2]+z[2])/2],z],M=>.042-.006*M,7,(M,T)=>be(M*4+T*.4)>.5?Te.leather:Te.leatherLo),s,v),f=new Yt;f.position.set(-.2,1.3,0),f.rotation.set(.05,0,.14),u.add(f),Ft(Ve([[0,0,0],[0,-.14,0],[0,-.26,.02],[0,-.4,.05],[0,-.5,.06]],v=>.042-.012*v+.006*Math.sin(v*6),7,(v,A)=>l(A,v)),s,f),_(f,[0,-.32,.04],[0,-.48,.06]),f.add(ii(Te.leather,s,!1,Te.skin,1.05)).position.set(0,-.5,.065);let p=new Yt;p.position.set(.2,1.3,.02),p.rotation.z=-.35,u.add(p),Ft(Ve([[0,0,0],[0,-.12,0],[0,-.22,.04],[0,-.3,.12],[0,-.38,.2]],v=>.042-.012*v,7,(v,A)=>l(A,v)),s,p),_(p,[0,-.28,.1],[0,-.38,.19]);let{staffPivot:y,staff:x,crystal:b,crystalMat:L,glow:E}=mr(p,[0,-.42,.23],n,t,e,ii(Te.leather,s,!0,Te.skin,1.05));return{root:h,body:u,head:m,arm:p,staffPivot:y,crystal:b,crystalMat:L,glow:E,staff:x,height:1.75,materials:n}}var gn=i=>new zt(i),Ke={robe:gn(8017597),robeDeep:gn(6045590),trim:gn(11242982),dress:gn(3484996),dressHi:gn(4931936),lining:gn(6969968),skin:gn(15654104),hair:gn(13615844),hairDark:gn(10194102),hat:gn(7097004),hatBand:gn(10256598),boot:gn(3880006),belt:gn(4207692),moon:gn(15787712),lips:gn(5911888),eye:gn(1709088)};function Kn(i,t,e,n,r=!1){let s=[],o=[],a=(u,d)=>e(r?u%i/i:u/i,d/t),c=(u,d)=>n(r?(u%i+i)%i/i:u/i,d/t),l=(u,d,m)=>{let g=c((u[0]+d[0]+m[0])/3,(u[1]+d[1]+m[1])/3);for(let[_,f]of[u,d,m])s.push(...a(_,f)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let d=0;d<i;d++)l([d,u],[d,u+1],[d+1,u+1]),l([d,u],[d+1,u+1],[d+1,u]);let h=new Me;return h.setAttribute("position",new se(s,3)),h.setAttribute("color",new se(o,3)),h.computeVertexNormals(),h}function ru(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new R(...i[Math.min(s-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return Kn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}var ri=i=>1-Math.abs((i%1+1)%1*2-1),Ji=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),Bs={w:.087,h:.126,d:.108},Ei=(i,t)=>Math.exp(-(i*i)/(t*t)),mf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function zy(){let i=new He(1,28,22),t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++){let r=t.getX(n),s=t.getY(n),o=t.getZ(n),a=Math.max(0,o),c=r*Bs.w,l=s*Bs.h,h=o*Bs.d;if(s<0){let d=-s;c*=1-.55*d**1.25,h*=1-.12*d,l*=1+.08*d}c*=1+.04*Ei(s+.02,.22)*a,s>.2&&(c*=1-.1*(s-.2));for(let d of[-1,1])h-=.008*Ei(r-d*.38,.2)*Ei(s-.06,.13)*a;h+=.006*Ei(s-.3,.07)*Ei(r,.5)*a;let u=Ei(r,.1)*a*mf(.2,-.2,s)*mf(-.38,-.26,s);h+=.017*u,h+=.005*Ei(r,.24)*Ei(s+.5,.07)*a,h-=.004*Ei(r,.3)*Ei(s+.38,.05)*a,o<0&&(h*=1.06),t.setXYZ(n,c,l,h),o>.05?e.setXY(n,.5+r*.5,.5+s*.5):e.setXY(n,.02,.97)}return i.computeVertexNormals(),i}function Vy(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=(h,u)=>[(.5+h*.5)*512,(.5-u*.5)*512];e.fillStyle="#e9d7d3",e.fillRect(0,0,512,512);let r=(h,u,d,m,g,_)=>{let[f,p]=n(h,u),y=d*512*.5;e.save(),e.translate(f,p),e.scale(1,m/d);let x=e.createRadialGradient(0,0,0,0,0,y);x.addColorStop(0,g.replace("A",String(_))),x.addColorStop(1,g.replace("A","0")),e.fillStyle=x,e.beginPath(),e.arc(0,0,y,0,Math.PI*2),e.fill(),e.restore()};for(let h of[-1,1])r(h*.62,-.18,.22,.3,"rgba(150,110,130,A)",.28),r(h*.42,-.2,.16,.1,"rgba(220,140,150,A)",.22);r(0,-.72,.3,.12,"rgba(140,100,120,A)",.25);for(let h of[-1,1]){let u=h*.38,d=.06;r(u,d+.06,.28,.12,"rgba(120,85,140,A)",.55);let[m,g]=n(u,d),_=.21*512*.5,f=.082*512*.5;e.save(),e.translate(m,g),e.scale(h,1),e.beginPath(),e.moveTo(-_,0),e.quadraticCurveTo(-_*.1,-f*1.1,_,-f*.15),e.quadraticCurveTo(_*.2,f*1.05,-_,0),e.closePath(),e.fillStyle="#efe9f2",e.fill(),e.save(),e.clip(),e.fillStyle="#4a3a5c",e.beginPath(),e.arc(-_*.12,f*.12,f*1.05,0,Math.PI*2),e.fill(),e.fillStyle="#1a1220",e.beginPath(),e.arc(-_*.12,f*.12,f*.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(-_*.28,-f*.25,f*.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,40,70,.55)",e.fillRect(-_,-f*1.2,_*2,f*.55),e.restore(),e.strokeStyle="#1c1420",e.lineCap="round",e.lineWidth=512*.01,e.beginPath(),e.moveTo(-_*1.02,.02*f),e.quadraticCurveTo(-_*.1,-f*1.15,_*1.12,-f*.35),e.stroke(),e.lineWidth=512*.006;for(let p=0;p<4;p++){let y=.55+p*.15;e.beginPath(),e.moveTo(_*(y*2-1),-f*(.95-p*.15)),e.lineTo(_*(y*2-1)+_*.18,-f*(1.35-p*.12)),e.stroke()}e.strokeStyle="rgba(90,60,90,.55)",e.lineWidth=512*.004,e.beginPath(),e.moveTo(-_*.9,-f*.9),e.quadraticCurveTo(0,-f*2,_*.95,-f*1),e.stroke(),e.strokeStyle="rgba(90,60,90,.4)",e.beginPath(),e.moveTo(-_*.6,f*.55),e.quadraticCurveTo(_*.1,f*1.05,_*.85,f*.2),e.stroke(),e.strokeStyle="#4a3a55",e.lineWidth=512*.011,e.beginPath(),e.moveTo(-_*.95,-f*2.7),e.quadraticCurveTo(_*.2,-f*3.4,_*1.15,-f*2.6),e.stroke(),e.restore()}r(.07,-.12,.05,.2,"rgba(160,120,135,A)",.22),e.fillStyle="rgba(110,70,90,.55)";for(let h of[-1,1]){let[u,d]=n(h*.06,-.31);e.beginPath(),e.ellipse(u,d,512*.012,512*.006,0,0,Math.PI*2),e.fill()}let[s,o]=n(0,-.5),a=.25*512*.5,c=.065*512*.5;e.fillStyle="#5b2f50",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s-a*.5,o-c*1.2,s-a*.1,o-c*.9),e.lineTo(s,o-c*.6),e.lineTo(s+a*.1,o-c*.9),e.quadraticCurveTo(s+a*.5,o-c*1.2,s+a,o),e.closePath(),e.fill(),e.fillStyle="#7b4468",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*2,s+a,o),e.closePath(),e.fill(),e.strokeStyle="#3a1c33",e.lineWidth=512*.006,e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*.35,s+a,o),e.stroke(),r(.03,-.535,.05,.02,"rgba(255,220,235,A)",.4);let l=new Ln(t);return l.colorSpace=nn,l.anisotropy=4,l}function gf(i,t,e){let n=[],r=(O,G={})=>{let H=new Se({color:G.vc?16777215:O,vertexColors:!!G.vc,metalness:G.metal??.04,roughness:G.rough??.82,flatShading:!0,emissive:G.emissive??(G.vc?1709092:0),transparent:!0,side:G.double?Pe:In});return n.push({mat:H,color:H.color.clone(),emissive:H.emissive.clone()}),H},s=r(16777215,{vc:!0,double:!0}),o=r(Ke.skin,{rough:.7}),a=r(Ke.eye,{rough:.5}),c=r(Ke.moon,{metal:.35,rough:.35,emissive:2761744}),l=(O,G,H,C=[0,0,0])=>{let I=new St(O,G);return I.position.set(...C),H.add(I),I},h=i==="ally"?gn(3840636):Ke.robe,u=i==="ally"?gn(2781272):Ke.robeDeep,d=i==="ally"?gn(7655598):Ke.trim,m=new Yt,g=new Yt;m.add(g);for(let O of[-1,1]){let G=O*.075;l(ru([[G,.98,0],[G*1.05,.62,.01],[G*1.1,.3,0],[G*1.1,.13,-.01]],C=>.068-.03*C,7,()=>Ke.boot),s,g);let H=Kn(6,2,(C,I)=>{let k=C*Math.PI*2,$=I,B=-.05+$*.2,F=.13-$*.11,Y=.045*(1-.65*$*$);return[G+Math.cos(k)*Y,F+Math.sin(k)*Y*.55,B]},()=>Ke.boot,!0);l(H,s,g),l(new Ee(.012,.006,.12,5),a,g,[G,.06,-.045])}let _=Kn(14,8,(O,G)=>{let H=G<.25?.02:.02+(G-.25)*.55,C=H+O*(Math.PI*2-2*H),I=1.1-G*.82-(O>.35&&O<.65?0:.04*G)+.03*ri(O*7)*G,k=.165+.15*G**1.2;return[Math.sin(C)*k,I,Math.cos(C)*k*.82]},(O,G)=>Ji(Ke.dress,Ke.dressHi,.6*ri(O*7)*G));l(_,s,g),l(Kn(4,4,(O,G)=>{let H=-.35+O*.7,C=.15+.09*G;return[Math.sin(H)*C,.86-G*.6,Math.cos(H)*C*.62-.02]},()=>Ke.lining),s,g);let f=Kn(10,5,(O,G)=>{let H=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.1],[1.67,.052]],C=G*(H.length-1),I=Math.min(H.length-2,Math.floor(C)),k=C-I,$=H[I][0]+(H[I+1][0]-H[I][0])*k,B=H[I][1]+(H[I+1][1]-H[I][1])*k,F=O*Math.PI*2;return[Math.sin(F)*B*1.08,$,Math.cos(F)*B*.78]},(O,G)=>Ji(Ke.dress,Ke.dressHi,G>.8?.5:.15*ri(O*4)),!0);l(f,s,g),l(Kn(14,1,(O,G)=>{let H=O*Math.PI*2,C=.172+.006*G;return[Math.sin(H)*C*1.08,1.04+G*.11,Math.cos(H)*C*.82]},()=>Ke.belt,!0),s,g);let p=(O,G)=>{let H=new Nr;H.absarc(0,0,O,Math.PI*.18,Math.PI*1.82,!1),H.absarc(O*.38,0,O*.78,Math.PI*1.7,Math.PI*.3,!0);let C=new Ps(H,{depth:G,bevelEnabled:!0,bevelThickness:G*.4,bevelSize:O*.08,bevelSegments:1,curveSegments:6});return C.center(),C};l(new Bn(.05,.012,4,10),c,g,[0,1.095,.152]).scale.set(1,.85,.6),l(p(.042,.012),c,g,[0,1.095,.162]).rotation.z=.5;let x=9,b=Kn(28,14,(O,G)=>{let H=.36+.48*G**1.2,C=H+O*(Math.PI*2-2*H),I=.07+.16*ri(O*x+.5)+(O<.06||O>.94?.08:0),k=.14,$,B,F;if(G<k){let Y=G/k;$=1.61-.14*Y**.8,B=.1+.155*Y**.7,F=.72}else{let Y=(G-k)/(1-k);$=1.47-Y*(1.47-I),B=.255+.25*Y**1.3,F=.72+.22*Y}return B*=1+.07*Math.sin(C*8)*Math.max(0,G-k),[Math.sin(C)*B*(1.12-.1*G),$,Math.cos(C)*B*F-.03*G]},(O,G)=>{let H=G>.89||O<.03||O>.97,C=Ji(h,u,.35*ri(O*8+.25)+(O>.3&&O<.7?.15:0));return H?d:C});l(b,s,g),l(Kn(10,2,(O,G)=>{let H=Math.PI*.55+O*Math.PI*.9,C=.105+.045*G;return[Math.sin(H)*C*1.1,1.58+G*.13,Math.cos(H)*C*.85]},(O,G)=>Ji(h,d,G>.6?1:0)),s,g),l(new Ee(.045,.055,.12,7),o,g,[0,1.63,0]);let L=new Yt;L.position.set(0,1.76,0),g.add(L);let E=r(16777215,{rough:.7});E.map=Vy(),E.flatShading=!1,l(zy(),E,L),l(Kn(20,4,(O,G)=>{let H=-Math.PI+O*Math.PI*2,C=Math.abs(H),I=C<.08?.72:C<.95?.6-.42*((C-.08)/.87)**.8:.18-.5*((C-.95)/(Math.PI-.95)),k=Math.PI/2-G*(Math.PI/2-I),$=1.085+.015*Math.sin(H*9);return[Math.sin(H)*Math.cos(k)*Bs.w*$,Math.sin(k)*Bs.h*$+.004,Math.cos(H)*Math.cos(k)*Bs.d*$]},(O,G)=>Ji(Ke.hair,Ke.hairDark,.15+.4*ri(O*14)*G),!0),s,L);let v=(O,G)=>Ji(Ke.hair,Ke.hairDark,.25+.5*ri(O*9)*(.4+.6*G));l(Kn(18,10,(O,G)=>{let H=Math.PI*.42+O*Math.PI*1.16,C=.1-G*(.95+.14*ri(O*6+.3)),I=G<.25?.13+G*.28:.2+.05*Math.sin(G*3.1),k=.022*Math.sin(G*15+H*3)*G;return[Math.sin(H)*(I+k)*1.05,C,Math.cos(H)*(I+k)*.85-.02-.05*G]},v),s,L);for(let O of[-1,1])for(let G of[0,1]){let H=O*(.098+G*.03),C=.035-G*.05,I=Array.from({length:8},(k,$)=>{let B=$/7;return[H+O*(.06*B+.025*Math.sin(B*9+G)),.04-B*(.55+.08*G),C+.06*B-.03*Math.sin(B*7)]});l(ru(I,k=>.035*(1-.6*k)+.008,5,(k,$)=>v($,k),[1,1,.55]),s,L)}let A=new Yt;A.position.set(0,.075,-.005),A.rotation.set(-.12,0,.07),L.add(A),l(Kn(20,3,(O,G)=>{let H=O*Math.PI*2,C=.14+G*.24;return[Math.sin(H)*C,.02-.075*G*G+.012*Math.sin(H*3)*G,Math.cos(H)*C]},(O,G)=>Ji(Ke.hat,u,G>.9?.25:.2*ri(O*5)),!0),s,A),l(ru([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],O=>.165*(1-O)**1.35+.004,8,(O,G)=>Ji(Ke.hat,u,.25*ri(G*4)+.15*O)),s,A),l(Kn(16,1,(O,G)=>{let H=O*Math.PI*2,C=.168-.006*G;return[Math.sin(H)*C,.025+G*.06,Math.cos(H)*C]},()=>Ke.hatBand,!0),s,A);let M=l(p(.04,.012),c,A,[0,.055,.172]);M.rotation.z=.5;let T=(O,G,H=.15)=>Kn(10,6,(C,I)=>{let k=C*Math.PI*2,$=.065+H*Math.max(0,(I-.3)/.7)**1.4,B=I<.99?0:.07*ri(C*4),F=-(I*O)-B,Y=G*I*I;return[Math.cos(k)*$,F,Math.sin(k)*$*.9+Y]},(C,I)=>I>.85?d:Ji(h,u,.3*ri(C*3)),!0),J=new Yt;J.position.set(-.23,1.47,0),J.rotation.set(.05,0,.12),g.add(J),l(T(.6,.06),s,J),J.add(ii(Ke.skin,s,!1)).position.set(0,-.58,.05);let V=new Yt;V.position.set(.23,1.47,.02),V.rotation.z=-.35,g.add(V);let Z=l(T(.4,0,.07),s,V);Z.rotation.x=-.5;let ut=l(new Ee(.03,.034,.12,6),o,V,[0,-.38,.19]);ut.rotation.x=-.5;let{staffPivot:ot,staff:pt,crystal:D,crystalMat:tt,glow:W}=mr(V,[0,-.43,.24],n,t,e,ii(Ke.skin,s,!0));return{root:m,body:g,head:L,arm:V,staffPivot:ot,crystal:D,crystalMat:tt,glow:W,staff:pt,height:2,materials:n}}var Gy={me:4020950,opp:12728908,ally:3121012};function _f(i,t,e,n){if(i==="witch")return gf(t,e,n);if(i==="wizard")return ff(t,e,n);if(i==="knight")return df(t,e,n);if(i==="goblin")return pf(t,e,n);i=i;let r=[],s=(J,V={})=>{let Z=new Se({color:J,metalness:V.metal??.05,roughness:V.rough??.8,flatShading:!0,emissive:V.emissive??0,emissiveIntensity:V.ei??1,transparent:!0});return r.push({mat:Z,color:Z.color.clone(),emissive:Z.emissive.clone()}),Z},o=(J,V,Z=0,ut=0,ot=0)=>{let pt=new St(J,V);return pt.position.set(Z,ut,ot),pt},c=i==="goblin"||i==="kid"?.78:1,l=s(i==="goblin"?7323466:15778970),h=s(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:Gy[t],d=s(u),m=s(16766073,{metal:.2,rough:.4}),g=s(12897496,{metal:.3,rough:.45}),_=new Yt,f=new Yt;if(_.add(f),i==="wizard")f.add(o(new Ee(.27,.46,1,9),d,0,.5,0)),f.add(o(new Ee(.47,.47,.05,9),m,0,.03,0));else{let J=i==="knight"?g:h;f.add(o(new Ee(.09,.08,.6,6),J,-.12,.3,0)),f.add(o(new Ee(.09,.08,.6,6),J,.12,.3,0)),f.add(o(new $e(.16,.08,.26),h,-.12,.04,.05)),f.add(o(new $e(.16,.08,.26),h,.12,.04,.05)),f.add(o(new Ee(.3,.34,.32,8),d,0,.72,0))}let p=i==="knight"?g:d;if(f.add(o(new Ee(.24,.29,.55,8),p,0,1.12,0)),f.add(o(new Bn(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let J=o(new $e(.34,.6,.04),d,0,1,.27);f.add(J),f.add(o(new He(.13,6,4),g,-.3,1.36,0)),f.add(o(new He(.13,6,4),g,.3,1.36,0))}i==="human"&&f.add(o(new $e(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let y=new Yt;y.position.set(0,1.58,0),f.add(y),y.add(o(new mn(.2,1),l));for(let J of[-.07,.07])y.add(o(new He(.028,6,4),h,J,.02,.18));if(i==="wizard"){let J=s(15658740);y.add(o(new Dn(.17,.42,7),J,0,-.2,.1).rotateX(Math.PI)),y.add(o(new $e(.4,.34,.14),J,0,-.06,-.13)),y.add(o(new Ee(.36,.36,.04,12),d,0,.15,0));let V=o(new Dn(.24,.62,9),d,0,.47,0);V.rotation.z=.12,y.add(V),y.add(o(new Bn(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let J of[-1,1]){let V=o(new Dn(.07,.34,5),l,J*.24,.05,0);V.rotation.z=-J*1.25,y.add(V)}y.add(o(new Dn(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")y.add(o(new mn(.235,1),g)),y.add(o(new $e(.3,.05,.05),h,0,.02,.21)),y.add(o(new Dn(.06,.4,6),s(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")y.add(o(new $e(.38,.2,.12),s(5913122),0,-.02,-.13)),y.add(o(new He(.215,10,6,0,Math.PI*2,0,Math.PI/2),s(4029400),0,.03,0)),y.add(o(new $e(.2,.025,.16),s(4029400),0,.05,.2));else if(i==="human"){let J=s(5913122);y.add(o(new He(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),J,0,.02,-.01)),y.add(o(new $e(.4,.22,.12),J,0,-.04,-.13))}let x=i==="knight"?g:d,b=new Yt;b.position.set(-.3,1.34,0),b.rotation.z=.25,f.add(b),b.add(o(new Ee(.075,.1,.55,6),x,0,-.27,0)),b.add(o(new He(.07,6,4),l,0,-.58,0));let L=new Yt;L.position.set(.3,1.34,.02),L.rotation.z=-.35,f.add(L),L.add(o(new Ee(.075,.1,.5,6),x,0,-.22,.05).rotateX(-.5));let E=o(new He(.07,6,4),l,0,-.42,.22);L.add(E);let v=new Yt;v.position.set(0,-.42,.22),v.rotation.z=.28,L.add(v);let A=Ki(n,e);A.group.position.y=.3,v.add(A.group);for(let J of A.materials)r.push({mat:J,color:J.color.clone(),emissive:J.emissive.clone()});let{gem:z,gemMat:M,glow:T}=A;return _.scale.setScalar(c),{root:_,body:f,head:y,arm:L,staffPivot:v,crystal:z,crystalMat:M,glow:T,staff:A,height:1.95*c,materials:r}}function su(i){return["wizard","witch","goblin","knight","kid","human"].find(t=>t===i)??"wizard"}function Wy(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Ln(i);return n.colorSpace=nn,n}function yf(i){let t;try{t=new As({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=Io,t.setClearColor(0,0);let e=new Rs;e.add(new Ds(14673663,2760768,1.4));let n=new Zi(16777215,2.2);n.position.set(2,3,4),e.add(n);let r=new Zi(10456319,2);r.position.set(-3,2,-3),e.add(r);let s=new mi(16777215,3,3,2);e.add(s);let o=new Mn(30,1,.1,50),a=Wy(),c=new Yt;c.rotation.z=.12,e.add(c);let l=null,h="";function u(y){return l&&h===y||(l&&(c.remove(l.group),l.group.traverse(x=>x.geometry?.dispose?.())),l=Ki(y,a),h=y,c.add(l.group),s.color.copy(l.color),s.position.set(.3,dr+.2,.6)),l}function d(){let y=i.clientWidth||300,x=i.clientHeight||420;t.setSize(y,x,!1),o.aspect=y/x;let b=1.55/Math.tan(Us.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,b),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,f=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(y){if(!f()){m=0;return}m=requestAnimationFrame(p);let x=Math.min(.05,(y-g)/1e3);g=y,_+=x,l&&(c.rotation.y+=x*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=x*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,x,.25),t.render(e,o))}return{show(y){u(y),d(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(y,x,b){let L=[],E=h,v=c.rotation.y,A=c.position.y;t.setPixelRatio(1),t.setSize(x,b,!1),o.aspect=x/b,o.position.set(.35,dr+.12,1.6),o.lookAt(0,dr-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let z of y)u(z).update(1.2,0,0),t.render(e,o),L.push(i.toDataURL("image/png"));return c.rotation.y=v,c.position.y=A,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),E&&u(E),d(),L},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function En(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,r)=>n+(r-n)*e(),int:(n,r)=>n+Math.floor(e()*(r-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var kt=i=>i<0?0:i>1?1:i,Ae=(i,t,e)=>{let n=kt((e-i)/(t-i));return n*n*(3-2*n)},Rf=(i,t,e)=>i+(t-i)*e,Kt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],ge=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],gr=(i,t)=>1-Math.exp(-i*t),Fo=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},fe=i=>i*Math.PI/180;function Tn(i,t){let e=fe(i),n=fe(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function Cf(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return Kt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var yc=(()=>{let i=En(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function Be(i,t){let e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,d=yc[h+c],m=yc[h+l],g=yc[u+c],_=yc[u+l];return(d*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var xf=Math.cos(.55),Mf=Math.sin(.55);function en(i,t,e=5,n=2.03,r=.5){let s=0,o=1,a=0;for(let c=0;c<e;c++){s+=o*Be(i+17.3*c,t-9.1*c),a+=o;let l=(i*xf-t*Mf)*n,h=(i*Mf+t*xf)*n;i=l,t=h,o*=r}return s/a}var bf=Math.cos(.7),vf=Math.sin(.7);function Pf(i,t,e=5,n=2.1,r=.52){let s=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*Be(i+31.7*l,t+5.3*l)-1);h=h*h*c,s+=h*o,a+=o,c=kt(h*2);let u=(i*bf-t*vf)*n,d=(i*vf+t*bf)*n;i=u,t=d,o*=r}return s/a}var Ef=new Map;function Xy(i,t,e){let n=`${t}:${e}`,r=Ef.get(n);if(!r){let l=En(e*977+t);r=new Float32Array(t);for(let h=0;h<t;h++)r[h]=l.random();Ef.set(n,r)}let s=i*t,o=Math.floor(s),a=s-o,c=a*a*(3-2*a);return r[(o%t+t)%t]*(1-c)+r[((o+1)%t+t)%t]*c}function wf(i,t=5,e=3,n=1,r=.5){let s=0,o=1,a=0;for(let c=0;c<t;c++)s+=o*Xy(i,e*2**c,n+c),a+=o,o*=r;return s/a}function ji(i,t){let e=i.stops;return(n,r,s)=>{let o=Math.asin(Math.max(-1,Math.min(1,s)))*180/Math.PI,a=Cf(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+r*l[1]+s*l[2])));for(let[u,d,m]of i.glow){let g=Math.exp(-h/u)*d*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-r*l[1]+s*l[2]))),d=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=d*i.anti_col[0],a[1]+=d*i.anti_col[1],a[2]+=d*i.anti_col[2]}}return a}}var ks=(i,t)=>Math.round(255*Math.pow(kt(gr(i,t)),1/2.2));function cu(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function lu(i,t=!1){let e=new Ln(i);return e.colorSpace=nn,t?e.wrapS=e.wrapT=zi:e.wrapS=Lr,e.anisotropy=2,e}function qy(i,t,e){let n=t/2,{c:r,g:s,img:o}=cu(t,n),a=ji(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??ge(i.far2,.8),d=[],m=h.map(()=>[]);for(let b=0;b<t;b++){let L=(b+.5)/t,E=L*2*Math.PI;d.push(a(Math.cos(E)*Math.cos(.012),Math.sin(E)*Math.cos(.012),Math.sin(.012)));let v=1;for(let A of e.notchAz){let z=Math.abs(Fo(E,fe(A)));v*=1-.85*Math.exp(-((z/fe(20))**2))}h.forEach(([A,z,M],T)=>{if(e.ridgeKind==="trees"){m[T].push(A+z*wf(L,6,18,M,.62)**1.5);return}let J=1-Math.abs(2*wf(L,7,4,M,.56)-1);m[T].push((A+z*J**1.3)*(.35+.65*v))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),f=null,p=[0,0,0],y=[0,0,0];if((i.milky??0)>0){let b=new R(.25,-.55,.8).normalize(),L=b.clone().cross(new R(0,0,1)).normalize(),E=b.clone().cross(L);f=[b.x,b.y,b.z],p=[L.x,L.y,L.z],y=[E.x,E.y,E.z]}for(let b=0;b<n;b++){let L=((b+.5)/n-.5)*Math.PI,E=Math.cos(L),v=Math.sin(L),A=n-1-b;for(let z=0;z<t;z++){let M=(z+.5)/t*2*Math.PI,T=E*Math.cos(M),J=E*Math.sin(M),V=v,Z=a(T,J,V);if(f&&L>0){let D=Math.asin(Math.max(-1,Math.min(1,T*f[0]+J*f[1]+V*f[2]))),tt=Math.atan2(T*y[0]+J*y[1]+V*y[2],T*p[0]+J*p[1]+V*p[2]),W=3*Math.cos(tt),O=3*Math.sin(tt),G=en(W+9*D,O+4*D,4),H=Ae(.5,.75,en(W*1.7+17+14*D,O*1.7-5+6*D,3)),C=Math.exp(-((D/(i.milky_w??.2))**2))*(.25+1.3*G)*(1-.65*H)*i.milky,I=i.milky_col??[.55,.58,.85];Z=[Z[0]+C*I[0],Z[1]+C*I[1],Z[2]+C*I[2]]}let ut=0;h.forEach(([,,,D,tt],W)=>{let O=kt((m[W][z]-L)/l+.5);if(O<=0)return;let G=d[z],H=Kt(tt,G,D),C=Kt(H,G,Math.exp(-Math.max(L,0)/.025)*.55);Z=Kt(Z,C,O),ut=Math.max(ut,O)});let ot=kt(-L/l+.5);ot>0&&(Z=Kt(Z,u,ot));let pt=(A*t+z)*4;o.data[pt]=ks(Z[0],c),o.data[pt+1]=ks(Z[1],c),o.data[pt+2]=ks(Z[2],c),o.data[pt+3]=255,g[A*t+z]=ut,_[A*t+z]=(o.data[pt]+o.data[pt+1]+o.data[pt+2])/765}}let x=(i.stars??0)>0?Yy(t,n,i.star_n,i.stars,g,_):null;return s.putImageData(o,0,0),{tex:lu(r),stars:x}}function Yy(i,t,e,n,r,s){let o=En(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let d=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(d),_=Math.floor(m/(2*Math.PI)*i)%i,f=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-f,y=(1-r[p*i+_])*kt(1-s[p*i+_]*3),x=o.random()**6,b=a[o.int(0,3)];if(y<=.01)continue;let L=Math.min(1.6,(.1+.95*x)*n*y*2.2),E=140;c.push(E*Math.cos(g)*Math.cos(m),E*Math.cos(g)*Math.sin(m),E*Math.sin(g)),l.push(b[0]*L,b[1]*L,b[2]*L),h.push(1+x*2.5)}return{pos:c,col:l,size:h}}function Zy(i,t,e){let n=t/2,{c:r,g:s,img:o}=cu(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let d=0;d<n;d++){let m=((d+.5)/n-.5)*Math.PI,g=n-1-d;if(m<.02)continue;let _=Math.cos(m),f=Math.sin(m),p=1/(f+.16),y=c<50?Ae(.02,.1,m)*(1-Ae(c*.6,c,m)):Ae(.02,.16,m);if(!(y<=0))for(let x=0;x<t;x++){let b=(x+.5)/t*2*Math.PI,L=_*Math.cos(b),E=_*Math.sin(b),v=L*p*i.cloud_scale,A=E*p*i.cloud_scale,z=en(v*.6+9,A*.6+2,3)-.5,M=v+z*1.4,T=A+z*1.1,J=en(M,T,5),V=Ae(i.cov0,i.cov1,J);if(V<=.002)continue;let Z=en(M+h,T+u,5),ut=kt(.55-(Z-J)*3.4)*(1-.4*V),ot=Math.exp(-Math.acos(Math.max(-1,Math.min(1,L*e[0]+E*e[1]+f*e[2])))/1.1),pt=Kt(i.cloud_lit_far,i.cloud_lit_near,ot),D=ge(i.cloud_shadow,.6+.4*ot),tt=Kt(D,pt,ut),W=V*(1-V)*4*ot*.6,O=(g*t+x)*4;o.data[O]=ks(tt[0]+W*i.cloud_rim[0],a),o.data[O+1]=ks(tt[1]+W*i.cloud_rim[1],a),o.data[O+2]=ks(tt[2]+W*i.cloud_rim[2],a),o.data[O+3]=Math.round(255*V*y*i.cloud_opacity)}}return s.putImageData(o,0,0),lu(r)}function $y(i,t,e={}){let n=e.span??1.4,{c:r,g:s,img:o}=cu(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(d,m),_=kt((1-g)/(n*2/t)+.5),f=Math.sqrt(kt(1-g*g)),p=0;for(let[E,v]of e.rings??[])p=Math.max(p,v*(1-Ae(E-.1,E,g)));let y;if(i==="sun")y=Kt(e.sunInner??[1,.62,.25],a,Math.pow(f,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let E=kt(d*l[0]+m*l[1]+f*l[2]),v=Ae(.5,.6,en(d*1.9+4,m*1.9-2,5))*.42,A=Ae(.62,.8,Be(d*14,m*14))*.12,z=(.04+E**.8)*(.6+.4*f)*(.9-v-A)*(e.moonGain??1.55);y=ge(a,z),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-Ae(n*.86,n,g);let x=_+(1-_)*p,b=x>1e-4?[0,1,2].map(E=>(_*y[E]+(1-_)*p*c[E])/x):[0,0,0],L=(h*t+u)*4;o.data[L]=Math.round(255*Math.pow(kt(b[0]),1/2.2)),o.data[L+1]=Math.round(255*Math.pow(kt(b[1]),1/2.2)),o.data[L+2]=Math.round(255*Math.pow(kt(b[2]),1/2.2)),o.data[L+3]=Math.round(255*kt(x))}return s.putImageData(o,0,0),lu(r,!0)}var Qt=class{constructor(t=!1,e=0){qe(this,"alpha",t);qe(this,"pos",[]);qe(this,"col",[]);qe(this,"idx",[]);qe(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((r,s)=>{let o=n?.[s];r.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new Me;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("color",new se(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new se(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function _e(i={}){let t=new Is({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Pe:In}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var wi=(i={})=>{let t=new cn({vertexColors:!0,side:Pe,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?un:Mi,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},kn=(i,t=1)=>new cn({color:new zt(i[0]*t,i[1]*t,i[2]*t),side:Pe,toneMapped:!1});function Sf(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),r.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;s.push(l,h,l+1,h,h+1,l+1)}let o=new Me;return o.setAttribute("position",new se(n,3)),o.setAttribute("uv",new se(r,2)),o.setIndex(s),o}var ou=(i,t=!1)=>new cn({map:i,side:Pe,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function Tf(i,t){let e=new Qt,n=(r,s,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[d,m,g,_]of[[r,0,s,s],[0,r,-s,s],[-r,0,-s,-s],[0,-r,s,-s]])h.push(e.v([d*c-m*l,d*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let d=0;d<8;d++)e.f(u,h[d],h[(d+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function Si(i){let t=new Yt,e=[],n=qy(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),r=n.tex,s=new St(Sf(150,48,24),ou(r));if(s.renderOrder=-10,s.frustumCulled=!1,t.add(s),e.push(r,s.geometry,s.material),n.stars&&n.stars.pos.length){let x=new Me;x.setAttribute("position",new se(n.stars.pos,3)),x.setAttribute("color",new se(n.stars.col,3)),x.setAttribute("size",new se(n.stars.size,1));let b=new qn({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:un}),L=new ur(x,b);L.renderOrder=-9.5,L.frustumCulled=!1,t.add(L),e.push(x,b)}let o=null;if(i.clouds!==!1){let x=Zy(i.th,Math.min(1024,i.W),i.bodies[0]);o=new St(Sf(138,48,24),ou(x,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(x,o.geometry,o.material)}let a=i.body.span??1.4,c=$y(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=ou(c,!0);e.push(c,l);for(let x of i.bodies){let L=146*Math.tan(i.body.r)*a,E=new R(...x),v=E.clone().cross(new R(0,0,1));v.lengthSq()<1e-8&&(v=new R(1,0,0)),v.normalize();let A=v.clone().cross(E).normalize(),z=E.clone().multiplyScalar(146),M=new Me,T=[z.clone().addScaledVector(v,-L).addScaledVector(A,-L),z.clone().addScaledVector(v,L).addScaledVector(A,-L),z.clone().addScaledVector(v,L).addScaledVector(A,L),z.clone().addScaledVector(v,-L).addScaledVector(A,L)];M.setAttribute("position",new se(T.flatMap(V=>[V.x,V.y,V.z]),3)),M.setAttribute("uv",new se([0,0,1,0,1,1,0,1],2)),M.setIndex([0,1,2,0,2,3]);let J=new St(M,l);J.renderOrder=-8,J.frustumCulled=!1,t.add(J),e.push(M)}let h=En(i.seed??21),u=[],d=Math.round(i.sparkles*(i.bigShare??.27)),m=new cn({color:new zt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Pe}),g=new cn({color:new zt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Pe}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},f=Tf(..._.big),p=Tf(..._.small);e.push(m,g,f,p);for(let x=0;x<i.sparkles;x++){let b=x<d,L=h.uniform(0,360),E=h.uniform(..._.el??[35,88]),v=Tn(L,E);i.bodies.concat([Tn(i.th.body_az+180,i.th.body_el)]).some(T=>v[0]*T[0]+v[1]*T[1]+v[2]*T[2]>Math.cos(fe(24)))&&(L+=45);let A=Tn(L,E).map(T=>T*135),z=new St(b?f:p,b?m:g);z.position.set(...A),z.lookAt(0,0,0),z.renderOrder=-7,t.add(z);let M=b?24:12;u.push({m:z,big:b,pulses:Array.from({length:M},(T,J)=>Math.round((J+.5)*3600/M+h.int(-15,15)))})}let y=null;return{group:t,envMap(){if(y)return y;let x=r.image,b=document.createElement("canvas");b.width=x.width,b.height=x.height;let L=b.getContext("2d");return L.translate(b.width*.5,0),L.scale(-1,1),L.drawImage(x,0,0),L.drawImage(x,-x.width,0),y=new Ln(b),y.colorSpace=nn,y.mapping=_o,e.push(y),y},update(x){o&&(o.rotation.z=x%3600/3600*Math.PI*2);let b=x%3600;for(let L of u){let E=1;for(let v of L.pulses){if(b<v-18||b>v+14)continue;let A=[[v-18,1],[v-9,L.big?1.35:1.2],[v,L.big?.2:.35],[v+14,1]];for(let z=0;z<3;z++)if(b>=A[z][0]&&b<=A[z+1][0]){let M=(b-A[z][0])/(A[z+1][0]-A[z][0]);E=Rf(A[z][1],A[z+1][1],M*M*(3-2*M))}}L.m.scale.setScalar(E)}},dispose(){for(let x of e)x.dispose()}}}function An(i,t,e=0,n=1,r=0){let s=Math.floor(i/t),o=(i-s*t)/t,a=o*o*(3-2*o),c=(s+r)%2?n:e,l=(s+r)%2?e:n;return Rf(c,l,a)}var If=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function zs(i,t,e,n){let r=new Qt,s=[];for(let o of i){if(o===0){let c=r.v([0,0,e(0,0)],n(0,0));s.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(r.v([h,u,e(h,u)],n(h,u)))}s.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?r.f(s[0][0],s[1][a],s[1][c]):r.f(s[o][a],s[o][c],s[o-1][c],s[o-1][a])}return r.geo()}function Ky(i,t,e,n,r=0){let s=.6+.4*kt(t)**.7,o=ge(i,s*(.88+.24*e));return Kt(o,n,kt(kt(1-t*3)*.55+r*.75))}function Ti(i,t,e,n,r,s,o=!0){let a=Be(e*2.5+r,n*2.5+r),c=o?kt((Be(e*.7+r,n*.7-r)-.5)*2.5):0;return Ky(i,t,a,s,c)}function au(i,t,e,n,r,s,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],s([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],s([o[0],o[1],e+n],1));for(let g=0;g<r;g++){let _=2*Math.PI*g/r,f=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(f,s(f,0))),l.push(i.v(p,s(p,1)))}let d=[],m=[];for(let g=0;g<r;g++)d.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<r;g++){let _=(g+1)%r;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(d[g],d[_],m[_],m[g])}}function Jy(i,t,e,n,r,s,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,r-=h/2,t+=l/2,e-=l/2;let u=(g,_,f)=>[g*Math.cos(_),g*Math.sin(_),f],d=g=>i.v(g,a(g,(g[2]-s)/o)),m=(g,_,f,p)=>i.f(d(g),d(_),d(f),d(p));for(let g=0;g<c;g++){let _=n+(r-n)*g/c,f=n+(r-n)*(g+1)/c;m(u(t,_,s+o),u(e,_,s+o),u(e,f,s+o),u(t,f,s+o)),m(u(e,_,s+o),u(e,_,s),u(e,f,s),u(e,f,s+o)),m(u(t,f,s+o),u(t,f,s),u(t,_,s),u(t,_,s+o))}m(u(t,n,s+o),u(t,n,s),u(e,n,s),u(e,n,s+o)),m(u(e,r,s+o),u(e,r,s),u(t,r,s),u(t,r,s+o))}function Ho(i,t,e,n,r=[1,1,1]){let s=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],d=h[1]-l[1],m=Math.hypot(u,d)||1,g=-d/m,_=u/m;s.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],r)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],r))});for(let a=0;a<t.length-1;a++)i.f(s[a],o[a],o[a+1],s[a+1])}var Mc=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function jy(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(fe(n)),.4+.4*Math.sin(fe(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(fe(n)),-.4+.4*Math.sin(fe(n))]);return[[...t,...e]]}return i===1?[Mc(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],Mc(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function Af(i,t,e,n,r,s,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let d of jy(t))Ho(i,d.map(([m,g])=>[h+r*(m*c-g*l),u+r*(m*l+g*c)]),o,s)}function _r(i){let{th:t,r:e}=i,n=t.stone,r=new Qt,s=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,f)=>s(Ti(m,f,_[0],_[1],g,t.moss,i.patchy??!0),_)};au(r,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),au(r,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],f)=>{let p=f*.23;for(let y=0;y<_;y++)Jy(r,m,g,p+2*Math.PI*y/_,p+2*Math.PI*(y+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new Qt;au(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new Qt;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),f=Math.sin(g);Ho(l,[[.3*_,.3*f],[2.2*_,2.2*f]],.07,c);for(let p of[-1,1]){let y=g+p*fe(35);Ho(l,[[1.3*_,1.3*f],[1.3*_+.7*Math.cos(y),1.3*f+.7*Math.sin(y)]],.05,c)}}Ho(l,Mc(2.3),.06,c),Ho(l,Mc(6),.05,c);let h=new Qt;for(let m=0;m<8;m++){let g=fe(45*m);m===6?Af(h,0,g,7.4,.95,c+.01,.13):Af(h,m%3,g,8.2,.55,c+.01,.09)}let u=new Yt;u.add(new St(r.geo(),_e())),u.add(new St(a.geo(),kn(i.glowCol,i.glow*1.1)));let d=new St(l.geo(),kn(i.lineCol,i.glow*1.3));return d.name="centre-pattern",u.add(d),u.add(new St(h.geo(),kn(i.runeCol,i.glow*1.6))),u}function Vs(i){let{r:t}=i,e=i.wind??(()=>{let r=new R(.8,.6,0).normalize();return[r.x,r.y,0]})(),n=new Qt(!1,1);for(let r=0;r<i.tufts;r++){let s=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,s))continue;let a=s*Math.cos(o),c=s*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),d=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),f=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],y=[-Math.sin(_),Math.cos(_)],x=i.gh(u,d),b=i.base(s),L=i.tip(s,_),E=Kt(b,L,.55),v=[u,d,x],A=[u+p[0]*f*.3,d+p[1]*f*.3,x+m*.55],z=[u+p[0]*f,d+p[1]*f,x+m],M=(ot,pt)=>{let D=ot[2]-x,tt=.32*D*D;return n.v(ot,pt,[[e[0]*tt,e[1]*tt,0]])},T=M([v[0]-y[0]*g,v[1]-y[1]*g,v[2]],b),J=M([v[0]+y[0]*g,v[1]+y[1]*g,v[2]],b),V=M([A[0]-y[0]*g*.65,A[1]-y[1]*g*.65,A[2]],E),Z=M([A[0]+y[0]*g*.65,A[1]+y[1]*g*.65,A[2]],E),ut=M(z,L);n.f(T,J,Z,V),n.f(V,Z,ut)}}return n.geo()}function Lf(i,t,e,n,r,s,o,a){let c=new R(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new R(0,0,1)).normalize(),u=l.clone().cross(h),d=12,m=o*r,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([f,p])=>{let y=(.45+3*a*f**1.6)*n;return Array.from({length:d},(x,b)=>{let L=2*Math.PI*b/d,E=c.clone().multiplyScalar(f).addScaledVector(h,Math.cos(L)*y).addScaledVector(u,Math.sin(L)*y);return i.v([t[0]+E.x,t[1]+E.y,t[2]+E.z],[s[0],s[1],s[2],p*m])})});for(let f=0;f<g.length-1;f++)for(let p=0;p<d;p++){let y=(p+1)%d;i.f(_[f][p],_[f][y],_[f+1][y],_[f+1][p])}}function Gs(i,t,e,n,r,s,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[r[0],r[1],r[2],n(0,0)*s]),l=[...o,t].map(h=>Array.from({length:40},(u,d)=>{let m=2*Math.PI*d/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[r[0],r[1],r[2],n(g,_)*s])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let d=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][d],l[h][d])}}var Gr=()=>new cn({vertexColors:!0,transparent:!0,depthWrite:!1,blending:un,side:Pe,fog:!1}),xc=null;function Df(){if(xc)return xc;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),xc=new Ln(i),xc}function Ai(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let r=new Float32Array(i.n*3),s=new Me;s.setAttribute("position",new Ie(r,3));let o=new hr({map:Df(),color:new zt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:un,sizeAttenuation:!0,fog:!1}),a=new ur(s,o);a.frustumCulled=!1;let c=l=>{let h=If(l);for(let u=0;u<i.n;u++){let d=i.twinkle?Math.sin(l*.05+n[u])*.15:0;r[u*3]=t[u][0]+e[u][0]*h+d,r[u*3+1]=t[u][1]+e[u][1]*h,r[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}s.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function bc(i){let t=i.list.length,e=(l,h,u)=>{let d=new Float32Array(t*3),m=new Me;m.setAttribute("position",new Ie(d,3));let g=new hr({map:Df(),color:h,size:l,transparent:!0,depthWrite:!1,blending:un,opacity:u,fog:!1}),_=new ur(m,g);return _.frustumCulled=!1,{p:_,pos:d,g:m}},n=i.gain??1,r=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),s=e(2.2*r,new zt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*r,new zt(1,1,1).lerp(new zt(i.col[0],i.col[1],i.col[2]),.3),1),a=new Yt;a.add(s.p,o.p);let c=l=>{let h=If(l);i.list.forEach((u,d)=>{for(let m of[s.pos,o.pos])m[d*3]=u.p[0],m[d*3+1]=u.p[1],m[d*3+2]=u.p[2]+u.amp*h}),s.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function Uf(i,t){let{r:e,idx:n,th:r}=t,s=n/2,o=Kt(r.back_lit[0],r.back_lit[1],s),a=Kt(r.back_dark[0],r.back_dark[1],s),c=r.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],d=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(r.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(r.back_w??1),_=e.uniform(0,6.28),f=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(b=>gr(b,r.exposure??1)),y=Math.exp(-((Fo(h,t.sunAz)/.5)**2))*(r.back_rim_k??0),x=[];for(let b=0;b<7;b++){let L=b/6,E=-2+(m+2)*L,v=g*(1-.55*L)*(1+.5*Math.exp(-Math.max(E,0)/3)),A=Math.sin(L*4+_)*1.2+f*E,z=[u[0]+d[0]*A,u[1]+d[1]*A,E],M=1-.75*L*L,T=ge(o,M),J=ge(a,M);c>0&&(T=Kt(T,p,c*.6*(1-.5*L)),J=Kt(J,p,c*.6*(1-.5*L))),y>.01&&(T=Kt(T,r.back_rim,.6*y*(1-L)),J=Kt(J,r.back_rim,.6*y*(1-L))),x.push([i.v([z[0]-d[0]*v/2,z[1]-d[1]*v/2,E],T),i.v([z[0]+d[0]*v/2,z[1]+d[1]*v/2,E],J)])}for(let b=0;b<6;b++)i.f(x[b][0],x[b][1],x[b+1][1],x[b+1][0])}}function vc(){let i=new Qt,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,r=a=>Cf(e,a),s=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],r(a)))),o=i.v([.07*1.12*1.12,0,1.12],r(1.12));for(let a=0;a<s.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(s[a][c],s[a][l],s[a+1][l],s[a+1][c])}for(let a=0;a<n;a++)i.f(s[s.length-1][a],s[s.length-1][(a+1)%n],o);return i.geo()}function Ri(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let r of n)r.dispose()})}function Ci(i){let t=(n,r=1,s=.5)=>{let o=(n[0]+n[1]+n[2])/3;return ge(Kt([o,o,o],n,s),r)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let r=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(r)&&(e[n]=Array.isArray(r[0])?r.map(s=>t(s)):t(r))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var hu={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},Ws=78,uu=[90,270];function Nf(i,t){let e=i==="night"?hu.NIGHT:i==="day"?{...Ci(hu.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:hu.SUNSET,n=e.emit,r=n*.75,s=En(13),o=En(41),a=new Yt,c=[Tn(e.body_az,e.body_el)],l=uu.map(H=>[Ws*Math.cos(fe(H)),Ws*Math.sin(fe(H))]),h=fe(e.body_az),u=[Math.cos(h),Math.sin(h)],d=(()=>{let H=new R(.8,.6,0).normalize();return[H.x,H.y,0]})(),m=(H,C,I)=>{let k=(H%360+360)%360;return k>255&&k<285&&C>I},g=e.stone,_=(H,C)=>{let I=Math.hypot(H,C),k=kt((I-12)/10)*.35*(Math.sin(H*.09)+Math.cos(C*.11)+.5*Math.sin((H+C)*.19));k+=kt((I-60)/60)*3*Math.sin(H*.05+1)*Math.cos(C*.04);for(let[$,B]of l)k*=Ae(22,40,Math.hypot(H-$,C-B));return k},f=(H,C)=>{let I=0;for(let k of uu){let $=fe(k),B=Math.cos($),F=Math.sin($),Y=H*B+C*F,nt=Math.abs(-H*F+C*B);Y>9&&(I=Math.max(I,Math.exp(-((nt/4)**2))*Ae(9,16,Y)*(1-Ae(Ws-10,Ws-2,Y))))}return I},p=(H,C)=>{let I=kt((Math.hypot(H,C)-10)/70)**.8,k=en(H*.06+3,C*.06-7,3);return Kt(ge(Kt(e.g_near,e.g_far,I),.75+.5*k),e.g_road,f(H,C)*.8)};a.add(new St(zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),_e({flat:!1}))),a.add(_r({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let y=new Qt,x=(H,C,I,k,$,B)=>{let F=o.uniform(0,50),Y=(q,j)=>Ti($,j,q[0],q[1],F,e.moss),nt=(q,j)=>Array.from({length:k},(it,ct)=>{let P=2*Math.PI*ct/k,w=[B[0]+H*Math.cos(P),B[1]+H*Math.sin(P),q];return y.v(w,Y(w,j))}),X=nt(C,0),S=nt(C+I,1),st=nt(C,0),K=nt(C+I,1);for(let q=0;q<k;q++){let j=(q+1)%k;y.f(st[q],st[j],K[j],K[q])}y.f(...S),y.f(...[...X].reverse())},b=[],L=vc(),E=wi({gain:1.05}),v=[];for(let H of[45,135,225,315]){let C=fe(H),I=9.35*Math.cos(C),k=9.35*Math.sin(C);x(.4,.3,1.1,12,g[3],[I,k]),x(.55,1.4,.3,12,g[0],[I,k]);let $=new St(L,E);$.position.set(I,k,1.75),a.add($),b.push({m:$,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),v.push({pos:[I,k,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let A=new Qt,z=new Qt(!1,2),M=(H,C,I,k,$)=>{let B=Math.cos(k),F=Math.sin(k),Y=(nt,X,S)=>{let st=nt*I[0],K=X*I[1],q=[C[0]+st*B-K*F,C[1]+st*F+K*B,C[2]+S*I[2]];return H.v(q,$(q))};for(let nt of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])H.f(...nt.map(([X,S,st])=>Y(X,S,st)))},T=t?6:10;for(let H=0;H<T;H++){let C=2*Math.PI*(H+o.uniform(-.2,.2))/T,I=o.uniform(14,20),k=I*Math.cos(C),$=I*Math.sin(C),B=_(k,$),F=o.uniform(6,9),Y=()=>e.cs_stone;M(A,[k,$,B+(F-.2)/2],[.2,.2,F+.2],Math.PI/4,Y);let nt=o.uniform(0,3.14),X=[-Math.sin(nt),Math.cos(nt)],S=[Math.cos(nt),Math.sin(nt)];M(A,[k,$,B+F-.2],[.08,1.3,.08],nt,Y);let st=[k,$,B+F-.3],K=(it,ct)=>{let P=.35*Math.sin(1.4*it+ct)*it/5;return[S[0]*P+d[0]*(.15*it)/5,S[1]*P+d[1]*(.15*it)/5,0]},q=Array.from({length:6},(it,ct)=>Array.from({length:3},(P,w)=>z.v([st[0]+X[0]*(w-1)*.6,st[1]+X[1]*(w-1)*.6,st[2]-ct*.6],ge(e.banner,1-.35*ct/5),[K(ct,0),K(ct,Math.PI)]))),j=z.v([st[0],st[1],st[2]-3.6],ge(e.banner,.6),[K(6,0),K(6,Math.PI)]);for(let it=0;it<5;it++)for(let ct=0;ct<2;ct++)z.f(q[it][ct],q[it][ct+1],q[it+1][ct+1],q[it+1][ct]);z.f(q[5][0],q[5][1],j),z.f(q[5][1],q[5][2],j)}let J=_e({double:!0,morph:!0}),V=new St(z.geo(),J);V.morphTargetInfluences=[0,0],a.add(new St(A.geo(),_e()),V,new St(y.geo(),_e()));let Z=[];uu.forEach((H,C)=>{let I=new Qt,k=new Qt,$=new Qt,B=new Qt,F=new Qt,Y=new Qt(!1,2),nt=fe(H),X=[Ws*Math.cos(nt),Ws*Math.sin(nt),0],S=nt-Math.PI/2,st=Math.cos(S),K=Math.sin(S),q=N=>[X[0]+N[0]*st-N[1]*K,X[1]+N[0]*K+N[1]*st,N[2]],j=N=>{let et=Be(N[0]*.8+C*10,N[2]*.8),lt=.6+.4*kt(N[2]/6);return ge(e.cs_stone,lt*(.75+.5*et)*(.8+.4*kt(N[2]/30)))},it=(N,et,lt,rt)=>{for(let Et of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])N.f(...Et.map(([Mt,dt,Lt])=>{let mt=[et[0]+Mt*lt[0],et[1]+dt*lt[1],et[2]+Lt*lt[2]];return N.v(q(mt),rt(mt))}))},ct=(N,et,lt,rt,Et)=>{let Mt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([mt,At])=>[N+mt*rt,et+At*rt,lt]),dt=[N,et,lt+Et],Lt=mt=>ge(e.cs_roof,.8+.4*kt((mt[2]-22)/22));for(let mt=0;mt<4;mt++){let At=Mt[mt],Vt=Mt[(mt+1)%4];k.f(k.v(q(At),Lt(At)),k.v(q(Vt),Lt(Vt)),k.v(q(dt),Lt(dt)))}};it(I,[0,0,6],[40,4,12],j);for(let N=-18;N<=18;N+=2.6)if(Math.abs(N)>4.6)for(let et of[-1.6,1.6])it(I,[N,et,12.7],[1.4,.8,1.4],j);for(let N of[-20,20]){it(I,[N,0,11],[8,8,22],j);for(let et of[12,20])it(I,[N,0,et],[8.6,8.6,.6],j);ct(N,0,22,4.7,9),it(I,[N,0,31],[.12,.12,9],j)}it(I,[0,0,17],[7,7,34],j);for(let N of[13,24])it(I,[0,0,N],[7.6,7.6,.6],j);ct(0,0,34,4.3,10),it(I,[0,0,46.5],[.12,.12,5],j);for(let N of[-2.9,2.9])it(I,[N,-3.75,3.8],[.9,.6,7.6],j);it(I,[0,-3.75,7.7],[6.8,.6,.9],j),it(B,[0,-3.6,3.6],[4.6,.3,7.2],N=>N[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let N=0;N<7;N++)it(B,[-2.1+.7*N,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let N of[2,4.5,6.8])it(B,[0,-3.85,N],[4.6,.2,.12],()=>[.02,.016,.014]);{let N=Array.from({length:9},(lt,rt)=>[2.3*Math.cos(Math.PI*rt/8),7.2+2.3*Math.sin(Math.PI*rt/8)]);B.f(...N.map(([lt,rt])=>B.v(q([lt,-3.75,rt]),[.006,.005,.008])));let et=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];B.f(...[...et].reverse().map(lt=>B.v(q(lt),[.04,.025,.02])))}for(let N of[9.5,15,20.5,26,31])it($,[0,-3.62,N],[.8,.3,1.7],()=>[1,1,1]);for(let N of[-20,20])for(let et of[5,10,15,20])it($,[N,-4.12,et],[.8,.3,1.7],()=>[1,1,1]);for(let N of[-4.3,4.3]){it(I,[N,-3.8,4.2],[.15,.15,1],j);let et=new mn(.35,1),lt=et.attributes.position;for(let Et=0;Et<lt.count;Et+=3)F.f(...[0,1,2].map(Mt=>F.v(q([N+lt.getX(Et+Mt),-3.8+lt.getY(Et+Mt),5.1+lt.getZ(Et+Mt)*1.5]),[1,1,1])));et.dispose();let rt=q([N,-4.6,5.3]);C===0&&v.push({pos:rt,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[N,et,lt,rt,Et]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let Mt=[0,.2,.4,.6,.82],dt=(Ct,Wt)=>{let ee=.5*Et*Math.sin(7*Ct+Wt)*Ct,at=.1*Et*Math.sin(5*Ct+Wt)*Ct;return[-ee*K,ee*st,at]},Lt=(Ct,Wt,ee)=>Y.v(q([Ct,et,Wt]),e.flag_col,[dt(ee,0),dt(ee,Math.PI)]),mt=Mt.map(Ct=>Lt(N+rt*Ct,lt+Et,Ct)),At=Mt.map(Ct=>Lt(N+rt*Ct,lt,Ct)),Vt=Lt(N+rt,lt+Et,1),Ot=Lt(N+rt,lt,1),Rt=Lt(N+.9*rt,lt+Et/2,.9);for(let Ct=0;Ct<4;Ct++)Y.f(At[Ct],At[Ct+1],mt[Ct+1],mt[Ct]);Y.f(mt[4],Vt,Rt),Y.f(At[4],Rt,Ot),Y.f(mt[4],Rt,At[4])}a.add(new St(I.geo(),_e()),new St(k.geo(),_e()),new St(B.geo(),_e({double:!0}))),a.add(new St($.geo(),kn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new St(F.geo(),kn(e.torch_col,1.5)));let w=new St(Y.geo(),_e({double:!0,morph:!0}));w.morphTargetInfluences=[0,0],a.add(w),Z.push(w)});class ut{constructor(C){qe(this,"mode",C);qe(this,"mb");qe(this,"war",[]);qe(this,"pending",[]);qe(this,"faces",[]);this.mb=new Qt(!1,C==="clash"?2:C==="surge"?1:0)}part(C,I,k,$,B,F,Y=-1,nt=!1){let X=k.clone().sub(I);if(X.length()<1e-6)return;let S=X.normalize(),st=Math.abs(S.z)<.9?new R(0,0,1):new R(1,0,0),K=S.clone().cross(st).normalize(),q=S.clone().cross(K),j=[[I,$],[k,B]].map(([it,ct])=>Array.from({length:F},(P,w)=>{let N=2*Math.PI*w/F,et=it.clone().addScaledVector(K,Math.cos(N)*ct).addScaledVector(q,Math.sin(N)*ct),lt=new Ut(et.x-C.x,et.y-C.y),rt=lt.length()>1e-6?.5+.5*lt.normalize().dot(new Ut(u[0],u[1])):.5;return this.add([et.x,et.y,et.z],Kt(e.sil,e.sil_rim,.45*rt*rt),Y,nt)}));for(let it=0;it<F;it++){let ct=(it+1)%F;this.faces.push([j[0][it],j[0][ct],j[1][ct],j[1][it]])}this.faces.push([...j[0]].reverse()),this.faces.push(j[1])}add(C,I,k,$){return this.pending.push({p:C,c:I,wi:k,arm:$}),this.pending.length-1}warrior(C,I,k,$){let B=this.war.length,F=new ae().makeRotationZ(I-Math.PI/2),Y=(st,K,q)=>C.clone().add(new R(st,K,q).applyMatrix4(F)),nt=C.clone().add(new R(0,0,1)),X=(st,K,q,j,it,ct=!1)=>this.part(nt,Y(...st),Y(...K),q,j,it,B,ct);for(let[st,K,q]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])X([st*.11,0,.95],q,.1,.075,4),X(q,K,.075,.06,4);X([0,0,.95],[0,.1,1.48],.2,.23,6),X([0,.16,1.58],[0,.16,1.74],.11,.11,6),X([0,.16,1.74],[0,.16,1.92],.12,.02,6),X([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),X([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),k!=="spear"&&X([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),X([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),X([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),k==="sword"?X([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):k==="axe"?(X([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),X([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(X([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),X([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let S=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(st=>{let K=Y(...st);return this.add([K.x,K.y,K.z],e.sil,B,!1)});this.faces.push(S),this.war.push({team:$,f:new R(0,1,0).applyMatrix4(F),axis:new R(1,0,0).applyMatrix4(F),pivot:Y(.27,.1,1.42)})}finish(){let C=this.pending.map(I=>{let k=[],$=new R(...I.p);if(this.mode==="clash")for(let B of[0,1]){if(I.wi<0){k.push([0,0,0]);continue}let F=this.war[I.wi],Y=F.team===B,nt=F.f.clone().multiplyScalar(Y?.32:-.22),X=$.clone().add(nt);I.arm&&(X=F.pivot.clone().add(nt).add($.clone().sub(F.pivot).applyAxisAngle(F.axis,fe(Y?-60:25)))),k.push([X.x-$.x,X.y-$.y,X.z-$.z])}if(this.mode==="surge"){let B=this.war[I.wi];k.push([B.f.x*.5,B.f.y*.5,I.arm?.3:0])}return this.mb.v(I.p,I.c,k)});for(let I of this.faces)this.mb.f(...I.map(k=>C[k]));return this.mb.geo()}}let ot=_e({morph:!0,double:!0}),pt=[],D=t?5:8;for(let H=0;H<D;H++){let C=2*Math.PI*(H+o.uniform(-.3,.3))/D,I=o.uniform(17,36);m(C*180/Math.PI,I,15)&&(C+=.6);let k=I*Math.cos(C),$=I*Math.sin(C);for(let B=0;B<3;B++){let F=new ut("clash"),Y=o.uniform(0,6.283),nt=new R(k+o.uniform(-4.5,4.5),$+o.uniform(-4.5,4.5),0),X=new R(Math.cos(Y),Math.sin(Y),0),S=o.uniform(.9,1.1);for(let[K,q]of[[0,-1],[1,1]]){let j=nt.clone().addScaledVector(X,S*q);j.z=_(j.x,j.y),F.warrior(j,K===0?Y:Y+Math.PI,o.choice(["sword","sword","axe","spear"]),K)}let st=new St(F.finish(),ot);st.morphTargetInfluences=[0,0],a.add(st),pt.push({m:st,w:2*Math.PI/s.uniform(40,95),w2:2*Math.PI/s.uniform(110,260),w3:2*Math.PI/s.uniform(150,400),p:s.uniform(0,6.28),p2:s.uniform(0,6.28),p3:s.uniform(0,6.28),bias:s.uniform(-.35,.35)})}}{let H=new ut(null);for(let C=0;C<16;C++){let I=o.uniform(0,6.283),k=o.uniform(13,45);if(m(I*180/Math.PI,k,14))continue;let $=new R(k*Math.cos(I),k*Math.sin(I),0);$.z=_($.x,$.y);let B=new ae().makeRotationZ(o.uniform(0,6.283)),F=(nt,X,S)=>$.clone().add(new R(nt,X,S).applyMatrix4(B)),Y=$.clone().add(new R(0,0,.2));H.part(Y,F(0,-.4,.18),F(0,.45,.2),.2,.22,6),H.part(Y,F(0,.55,.18),F(0,.7,.2),.11,.11,6),H.part(Y,F(-.1,-.4,.12),F(-.2,-1.2,.1),.09,.07,4),H.part(Y,F(.1,-.4,.12),F(.25,-1.1,.12),.09,.07,4),H.part(Y,F(-.25,.35,.18),F(-.6,.1,.12),.06,.05,4),H.part(Y,F(.25,.35,.18),F(.55,.7,.1),.06,.05,4),H.part(Y,F(.7,.2,0),F(.9,.2,1.8),.03,.025,4),H.part(Y,F(-.9,0,.05),F(-.9,0,.12),.4,.4,8)}a.add(new St(H.finish(),_e({double:!0})))}let tt=[];{let H=[];for(let k=0;k<6;k++){let $=o.uniform(0,6.283),B=o.uniform(45,90);m($*180/Math.PI,B,40)&&($+=.8),H.push(new R(B*Math.cos($),B*Math.sin($),0))}let C=t?70:120,I=H.map(()=>new ut("surge"));for(let k=0;k<C;k++){let $=I[k%H.length],B=H[k%H.length],F=B.clone().add(new R(o.uniform(-9,9),o.uniform(-9,9),0));F.z=_(F.x,F.y);let Y=Math.atan2(B.y-F.y,B.x-F.x)+o.uniform(-.5,.5),nt=$.war.length,X=new ae().makeRotationZ(Y-Math.PI/2),S=(K,q,j)=>F.clone().add(new R(K,q,j).applyMatrix4(X)),st=F.clone().add(new R(0,0,.9));$.part(st,S(0,0,0),S(0,0,1.45),.28,.22,4,nt),$.part(st,S(0,.05,1.45),S(0,.05,1.65),.12,.12,4,nt),$.part(st,S(.3,-.3,.9),S(.3,2,2.4),.03,.025,4,nt,!0),$.war.push({team:0,f:new R(0,1,0).applyMatrix4(X),axis:new R(1,0,0).applyMatrix4(X),pivot:S(0,0,1.4)})}for(let k of I){let $=new St(k.finish(),ot);$.morphTargetInfluences=[0,0],a.add($),tt.push({m:$,w:2*Math.PI/s.uniform(90,170),p:s.uniform(0,6.28),w2:2*Math.PI/s.uniform(300,600),p2:s.uniform(0,6.28)})}}let W=new St(Vs({r:s,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(H,C)=>m(H,C,16),base:H=>ge(e.grass_base,1-.6*kt((H-12)/55)),tip:H=>ge(e.grass_tip,1-.6*kt((H-12)/55))}),_e({emit:.1,double:!0,morph:!0}));W.morphTargetInfluences=[0],a.add(W);let O=Ai({r:o,n:t?24:40,at:()=>{let H=o.uniform(0,6.283),C=30*Math.sqrt(o.random());return[C*Math.cos(H),C*Math.sin(H),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(O.obj);let G=Si({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(G.group),{group:a,floor:.6,update(H){G.update(H);for(let F of pt){let Y=Math.sin(H*F.w+F.p+1.4*Math.sin(H*F.w2+F.p2))+F.bias,nt=.55+.45*Math.sin(H*F.w3+F.p3),X=kt(Y)*nt,S=kt(-Y)*nt;F.m.morphTargetInfluences[0]=X*X*(3-2*X),F.m.morphTargetInfluences[1]=S*S*(3-2*S)}for(let F of tt)F.m.morphTargetInfluences[0]=kt(.5+.6*Math.sin(H*F.w+F.p)*(.6+.4*Math.sin(H*F.w2+F.p2)));let C=An(H,90);V.morphTargetInfluences[0]=C,V.morphTargetInfluences[1]=1-C;for(let F of Z)F.morphTargetInfluences[0]=C,F.morphTargetInfluences[1]=1-C;W.morphTargetInfluences[0]=An(H,45);let I=H%3600,k=Math.floor(I/8),$=(I-k*8)/8,B=$*$*(3-2*$);for(let F of b){let Y=F.keys[k%450],nt=F.keys[(k+1)%450];F.m.scale.set(Y[0]+(nt[0]-Y[0])*B,Y[1]+(nt[1]-Y[1])*B,Y[2]+(nt[2]-Y[2])*B)}O.update(H)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...v],dispose(){G.dispose(),Ri(a)}}}var fu={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function Hf(i,t){let e=i==="night"?fu.NIGHT:i==="day"?{...Ci(fu.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:fu.SUNSET,n=e.emit,r=n*.75,s=En(11),o=En(99),a=new Yt,c=fe(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let D=new R(.8,.6,0).normalize();return[D.x,D.y,0]})(),u=(D,tt)=>kt((Math.hypot(D,tt)-12)/10)*.25*(Math.sin(D*.22)+Math.cos(tt*.27)+.5*Math.sin((D+tt)*.5)),d=(D,tt)=>{let W=kt((Math.hypot(D,tt)-6)/34)**.7,O=.9+.2*(Math.sin(D*.5)*Math.cos(tt*.5)*.5+.5),G=en(D*.09+3,tt*.09-7,3),H=Be(D*1.7,tt*1.7),C=Kt(e.g_near,e.g_far,W);return C=Kt(C,e.g_alt,kt((G-.45)*2.2)*.6*(1-.5*W)),ge(C,O*(1+.25*(H-.5)*(1-W)))},m=ji(e,[Tn(e.body_az,e.body_el)]);a.add(new St(zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,d),_e({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,D])=>[D[0],D[1]]),f=D=>{let tt=_.reduce((O,[G,H])=>O+Math.exp(-((Math.hypot(D[0]-G,D[1]-H)/5.5)**2)),0),W=(.55+.45*Math.min(1,tt))*(1-.4*kt((Math.hypot(D[0],D[1])-5)/5))*.2*.5*e.beam_gain;return ge(e.beam_col,W)};a.add(_r({th:e,r:s,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:r,patchy:!1,bake:f}));{let D=new Qt;for(let tt=0;tt<10;tt++){let W=s.uniform(0,6.283),O=s.uniform(11.5,17),G=s.uniform(.8,2),H=s.choice(e.stone),C=o.uniform(0,50),I=new mn(1,1),k=I.attributes.position;for(let S=0;S<k.count;S++){let st=s.uniform(.8,1.2);k.setXYZ(S,k.getX(S)*st,k.getY(S)*st,k.getZ(S)*st)}let $=O*Math.cos(W),B=O*Math.sin(W),F=s.uniform(0,6.28),Y=new ae().compose(new R($,B,u($,B)+.3*G),new fn().setFromAxisAngle(new R(0,0,1),F),new R(G,G*.9,G*.7)),nt=I.index?I.toNonIndexed():I,X=nt.attributes.position;for(let S=0;S<X.count;S+=3){let st=[];for(let K=0;K<3;K++){let q=X.getX(S+K),j=X.getY(S+K),it=X.getZ(S+K),ct=new R(q,j,it).applyMatrix4(Y),P=.6+.4*kt((it+1)/2)**.7,w=Be(q*2+C,j*2+it);st.push(D.v([ct.x,ct.y,ct.z],Kt(ge(H,P*(.88+.24*w)),e.moss,kt(1-(it+1)/2*3)*.55)))}D.f(...st)}nt.dispose()}a.add(new St(D.geo(),_e()))}let p=[],y=(D,tt,W)=>{for(let O=0;O<300;O++){let G=s.uniform(0,360);if(W&&G>245&&G<295)continue;let H=s.uniform(D,tt),C=H*Math.cos(fe(G)),I=H*Math.sin(fe(G));if(p.every(([k,$])=>Math.hypot(C-k,I-$)>5.5))return p.push([C,I]),[C,I]}return null},x=_e({morph:!0}),b=wi({gain:2.2}),L=[],E=t?12:18,v=t?6:10;for(let D=0;D<E+v;D++){let tt=D<E,W=tt?y(15,26,!0):y(32,46,!1);if(!W)continue;let O=tt?s.uniform(20,32):s.uniform(30,40),G=tt?s.uniform(1.1,2):s.uniform(2.2,3.2),H=tt&&s.random()<.25,C=A(W[0],W[1],O,G,H),I=new St(C.bark.geo(),x);I.morphTargetInfluences=[0,0],a.add(I);let k=null;H&&(k=new St(C.eyes.geo(),b),k.morphTargetInfluences=[0,0],a.add(k));let $=[];if(H){let B=Array.from({length:Math.floor(174)},(F,Y)=>60+Y*20);for(let F=0;F<5;F++)$.push(B.splice(s.int(0,B.length-1),1)[0]);$.sort((F,Y)=>F-Y)}L.push({mesh:I,eyes:k,P:s.choice([100,120,150,180,200]),flip:s.int(0,1),blinks:$})}function A(D,tt,W,O,G){let H=new Qt(!1,2),C=new Qt(!1,2),I=new R(-D,-tt,0).normalize(),k=s.uniform(1.2,2.4),$=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.03,.1)),B=s.uniform(0,6.28),F=s.uniform(.4,1),Y=s.choice([3,4,5]),nt=s.uniform(0,6.28),X=N=>new R(D+$.x*N+F*Math.sin(.28*N+B),tt+$.y*N+F*Math.cos(.23*N+B),N),S=(N,et)=>{let lt=Math.max(N,0),rt=O*(1-.62*kt(lt/W))*(1+1.1*Math.exp(-lt/1.6)),Et=et+.06*lt;return rt*(1+.28*Math.cos(Y*Et+nt)*Math.exp(-lt/3.5)+.07*Math.cos(2*Et+B))},st=N=>{let et=k*kt(Math.max(N,0)/W)**2;return[h[0]*et,h[1]*et,0]},K=(N,et,lt)=>{let rt=new R(N.x,N.y,0);rt.lengthSq()>1e-12&&rt.normalize();let Et=Math.max(0,rt.x*I.x+rt.y*I.y),Mt=.6+.4*Math.sin(lt),dt=Kt(e.bark_dark,e.bark_lit,kt(.85*Et*Mt*(1-.3*kt(et/W)))),Lt=Math.max(0,rt.x*l[0]+rt.y*l[1]);dt=Kt(dt,e.bark_sun,kt(e.bark_sun_k*Lt*(.5+.5*Mt)*(1-.5*kt(et/W)))),dt=ge(dt,.72+.28*kt(et/1.6));let mt=kt(1-et/2.2)*.55*Be(N.x*3+D,N.y*3+et*.8);return Kt(dt,e.moss,mt)},q=(N,et)=>H.v([N.x,N.y,N.z],et,[st(N.z),[0,0,0]]),j=t?10:14,it=t?8:12,ct=[];for(let N=0;N<j;N++){let et=-.5+(W+.5)*(N/(j-1))**1.15,lt=X(et),rt=[];for(let Et=0;Et<it;Et++){let Mt=2*Math.PI*Et/it,dt=new R(Math.cos(Mt),Math.sin(Mt),0);rt.push(q(lt.clone().addScaledVector(dt,S(et,Mt)),K(dt,et,Mt*7+et*.4)))}ct.push(rt)}for(let N=0;N<j-1;N++)for(let et=0;et<it;et++){let lt=(et+1)%it;H.f(ct[N][et],ct[N][lt],ct[N+1][lt],ct[N+1][et])}let P=q(X(W).add(new R(0,0,.3)),e.bark_dark);for(let N=0;N<it;N++)H.f(P,ct[j-1][N],ct[j-1][(N+1)%it]);let w=s.int(2,4);for(let N=0;N<w;N++){let et=W*s.uniform(.35,.85),lt=s.uniform(0,6.28),rt=new R(Math.cos(lt),Math.sin(lt),0),Et=X(et).addScaledVector(rt,S(et,lt)*.7),Mt=rt.clone().add(new R(0,0,s.uniform(.4,1))).normalize(),dt=s.uniform(3.5,7.5),Lt=new R(-rt.y,rt.x,0),mt=[0,1,2,3,4].map(Ot=>Et.clone().addScaledVector(Mt,dt*(Ot/4)).add(new R(0,0,.35*dt*(Ot/4)**2)).addScaledVector(Lt,Math.sin(Ot/4*3+N)*.5)),At=S(et,lt)*.32,Vt=mt.map((Ot,Rt)=>{let Ct=mt[Math.min(Rt+1,4)].clone().sub(mt[Math.max(Rt-1,0)]).normalize(),Wt=Ct.clone().cross(new R(0,0,1));Wt.length()<.001&&(Wt=new R(1,0,0)),Wt.normalize();let ee=Ct.clone().cross(Wt);return Array.from({length:6},(at,Dt)=>{let bt=2*Math.PI*Dt/6,Tt=Wt.clone().multiplyScalar(Math.cos(bt)).addScaledVector(ee,Math.sin(bt));return q(Ot.clone().addScaledVector(Tt,At*(1-.85*Rt/4)),K(Tt,Ot.z,bt*5+Rt))})});for(let Ot=0;Ot<4;Ot++)for(let Rt=0;Rt<6;Rt++){let Ct=(Rt+1)%6;H.f(Vt[Ot][Rt],Vt[Ot][Ct],Vt[Ot+1][Ct],Vt[Ot+1][Rt])}}if(G){let N=s.uniform(2.2,9),et=Math.atan2(I.y,I.x)+s.uniform(-.6,.6),lt=new R(Math.cos(et),Math.sin(et),0),rt=new R(-lt.y,lt.x,0),Et=X(N).addScaledVector(lt,S(N,et)),Mt=s.uniform(.18,.32),dt=Mt*1.25,Lt=(Vt,Ot,Rt)=>Et.clone().addScaledVector(lt,Rt).addScaledVector(rt,Vt).add(new R(0,0,Ot)),mt=Array.from({length:10},(Vt,Ot)=>q(Lt(Math.cos(2*Math.PI*Ot/10)*(dt+Mt*1.7),Math.sin(2*Math.PI*Ot/10)*Mt*1.7,.07),[.004,.003,.02]));H.f(...mt);let At=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Vt of[1,-1]){let Ot=At.map(([Ct,Wt])=>[Vt*(dt+Ct*Mt),Wt*Mt]);Vt===-1&&(Ot=Ot.reverse());let Rt=Ot.map(([Ct,Wt])=>{let ee=Lt(Ct,Wt,.11);return C.v([ee.x,ee.y,ee.z],[1,.04,.04],[st(ee.z),[0,0,N-ee.z]])});C.f(...Rt)}}return{bark:H,eyes:C}}let z=e.grass_tip,M=_e({emit:e.grass_emit,double:!0,morph:!0}),T=t?260:500,J=[0,1].map(()=>{let D=new Map,tt=Vs({r:s,tufts:T,rmin:10.6,rspan:34,gh:u,base:O=>ge(e.grass_base,1-.6*kt((O-11)/34)),tip:(O,G)=>{let H=Math.round(O*1e3),C=D.get(H);C||(C=Kt(z[0],z[1],s.random()),D.set(H,C));let I=.3*Math.abs(Math.cos(G-c))*(i==="night"?.5:1);return ge(Kt(C,e.grass_rim,I),1-.6*kt((O-11)/34))}}),W=new St(tt,M);return W.morphTargetInfluences=[0],a.add(W),W});{let D=new Qt;for(let tt=0;tt<(t?40:70);tt++){let W=14+22*o.random(),O=o.uniform(0,2*Math.PI),G=W*Math.cos(O),H=W*Math.sin(O),C=u(G,H),I=[G+o.uniform(-.06,.06),H+o.uniform(-.06,.06),C+o.uniform(.35,.7)];D.f(D.v([G-.012,H,C],[.02,.07,.05]),D.v([G+.012,H,C],[.02,.07,.05]),D.v([I[0]+.012,I[1],I[2]],[.08,.25,.12]),D.v([I[0]-.012,I[1],I[2]],[.08,.25,.12]));let k=o.choice(e.flower),$=D.v([I[0],I[1],I[2]+.02],[1,.9,.5]),B=Array.from({length:6},(F,Y)=>{let nt=2*Math.PI*Y/6;return D.v([I[0]+.05*Math.cos(nt),I[1]+.05*Math.sin(nt),I[2]+.025],k)});for(let F=0;F<6;F++)D.f($,B[F],B[(F+1)%6])}a.add(new St(D.geo(),_e({emit:e.flower_emit,double:!0})))}{let D=new Qt;for(let tt=0;tt<14;tt++){let W=fe(s.choice([s.uniform(195,245),s.uniform(295,345),s.uniform(0,360)])),O=s.uniform(16,34),G=s.uniform(1,1.8),H=O*Math.cos(W),C=O*Math.sin(W),I=u(H,C);for(let k=0;k<4;k++){let $=[s.uniform(-1.4,1.4),s.uniform(-1,1),s.uniform(.2,1)],B=s.uniform(.9,1.6),F=new mn(B,1),Y=F.attributes.position;for(let nt=0;nt<Y.count;nt+=3){let X=[];for(let S=0;S<3;S++){let st=Y.getZ(nt+S)+$[2];X.push(D.v([H+(Y.getX(nt+S)+$[0])*G,C+(Y.getY(nt+S)+$[1])*G,I+st*G*.75],Kt(e.bush_lo,e.bush_hi,kt((st+.3)/2.6)*.8)))}D.f(...X)}F.dispose()}}a.add(new St(D.geo(),_e()))}{let D=new Qt;[[52,70,50,70],[59,80,55,75],[66,90,60,80]].forEach(([W,O,G,H],C)=>Uf(D,{r:s,idx:C,radius:W,count:t?Math.round(O*.6):O,hmin:G,hmax:H,th:e,sky:m,sunAz:c}));let tt=wi({fog:!1,gain:i==="night"?.45:.6});tt.toneMapped=!1,a.add(new St(D.geo(),tt))}let V=new Qt(!0);g.forEach(([D,tt])=>{for(let[W,O]of[[1,.45],[.7,.6],[.4,.8]])Lf(V,D,tt,W,O,e.beam_col,.35*e.beam_gain,2.6)});let Z=new Qt(!0);Gs(Z,9.4,.7,(D,tt)=>{let W=_.reduce((O,[G,H])=>O+Math.exp(-((Math.hypot(D-G,tt-H)/5.5)**2)),0);return(.55+.45*Math.min(1,W))*Ae(0,3,9.4-Math.hypot(D,tt))},e.beam_col,.3*.5*e.beam_gain);let ut=new St(V.geo(),Gr());a.add(ut,new St(Z.geo(),Gr()));let ot=Ai({r:s,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let D=s.uniform(0,6.283),tt=s.uniform(0,22);return[tt*Math.cos(D),tt*Math.sin(D),s.uniform(.8,7)]},move:()=>{let D=s.uniform(-1.5,1.5);return[D,D*.5,s.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(ot.obj);let pt=Si({th:e,W:t?512:1024,bodies:[Tn(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(pt.group),{group:a,floor:.62,update(D){pt.update(D);for(let W of L){let O=An(D,W.P/2,.15,1,W.flip),G=0;for(let H of W.blinks)Math.abs(D%3600-H)<3&&(G=1-Math.abs(D%3600-H)/3);W.mesh.morphTargetInfluences[0]=O,W.mesh.morphTargetInfluences[1]=G,W.eyes&&(W.eyes.morphTargetInfluences[0]=O,W.eyes.morphTargetInfluences[1]=G)}J.forEach((W,O)=>{W.morphTargetInfluences[0]=An(D,45,0,1,O)});let tt=An(D,450);ut.rotation.set(.03*tt*.1,.02*tt*.1,0),ot.update(D)},key:{dir:Tn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){pt.dispose(),Ri(a)}}}var du={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},Wr=2.3;function Ff(i,t){let e=i==="night"?du.NIGHT:i==="day"?{...Ci(du.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:du.SUNSET,n=e.emit,r=En(7),s=new Yt,o=[Tn(e.body_az,e.body_el),Tn(e.body_az+180,e.body_el)],a=ji(e,o),c=(D,tt)=>kt((Math.hypot(D,tt)-13)/10)*.25*(Math.sin(D*.22)+Math.cos(tt*.27)+.5*Math.sin((D+tt)*.5)),l=(D,tt)=>{let W=kt((Math.hypot(D,tt)-10)/50),O=.9+.2*(Math.sin(D*.5)*Math.cos(tt*.5)*.5+.5),G=Kt(e.g_near,e.g_far,W);return G=Kt(G,e.g_alt,kt((en(D*.09+3,tt*.09-7,3)-.45)*2.2)*.6),ge(G,O*(.9+.25*Be(D*1.7,tt*1.7)))},h=(D,tt,W)=>Kt(ge(D,(.6+.4*kt(tt)**.7)*(.88+.24*W)),e.moss,kt(1-tt*3)*.55);s.add(new St(zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),_e({flat:!1})));{let D=t?96:144,tt=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],W=tt.map(I=>Array.from({length:D},(k,$)=>{let B=2*Math.PI*$/D,F=I*Math.cos(B),Y=I*Math.sin(B),nt=1;for(let st of[fe(e.body_az),fe(e.body_az+180)]){let K=Math.abs(((B-st+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);nt*=1-.8*Math.exp(-((K/fe(17))**2))}let S=(4+42*Ae(50,102,I))*(1-.65*Ae(112,134,I))*(.12+1.15*Pf(F*.032,Y*.032,5))*(.55+.9*en(F*.01+5,Y*.01-3,3))*nt+1.2*en(F*.09,Y*.09,3)*Ae(46,60,I);return S*=Ae(45.5,52,I),[F,Y,c(F,Y)+.03+S]})),O=new Qt,G=[],H=o;tt.forEach((I,k)=>{G.push([]);for(let $=0;$<D;$++){let B=W[k][$],F=2*Math.PI*$/D,Y=W[k][($+1)%D],nt=W[k][($-1+D)%D],X=W[Math.min(k+1,tt.length-1)][$],S=W[Math.max(k-1,0)][$],st=new R(X[0]-S[0],X[1]-S[1],X[2]-S[2]).cross(new R(Y[0]-nt[0],Y[1]-nt[1],Y[2]-nt[2])).normalize();st.z<0&&st.multiplyScalar(-1);let K=B[2]/45,q=1-st.z,j=en(B[0]*.12,B[1]*.12,3),it=ge(Kt(e.rock_lo,e.rock_hi,kt(kt(K)**.7+.25*(j-.5))),.8+.4*j);it=Kt(it,e.veg,kt((9-B[2])/9)*kt(1-q*2.4)*.85),it=Kt(it,e.snow,Ae(.55,.78,K+.22*(en(B[0]*.07,B[1]*.07,3)-.5))*kt(1-q*1.7));let ct=0;for(let N of H)ct=Math.max(ct,kt(st.x*N[0]+st.y*N[1]+st.z*N[2]));ct=ct**1.2,it=[it[0]*(e.amb[0]+e.light_col[0]*ct*1.6),it[1]*(e.amb[1]+e.light_col[1]*ct*1.6),it[2]*(e.amb[2]+e.light_col[2]*ct*1.6)];let P=a(Math.cos(F)*Math.cos(.02),Math.sin(F)*Math.cos(.02),Math.sin(.02)).map(N=>gr(N,e.exposure)*e.haze_gain),w=Math.min(.97,Math.max(0,1-Math.exp(-(I-40)/e.haze_dist)+.5*Math.exp(-Math.max(B[2],0)/9)*Ae(55,100,I)));it=Kt(it,P,w),it=Kt(l(B[0],B[1]),it,Ae(46,58,I)).map(kt),G[k].push(O.v(B,it))}});for(let I=0;I<tt.length-1;I++)for(let k=0;k<D;k++){let $=(k+1)%D;O.f(G[I][k],G[I][$],G[I+1][$],G[I+1][k])}let C=wi({fog:!1,gain:.95});s.add(new St(O.geo(),C))}let u=new Qt,d=new Qt,m=new Qt,g=new Qt,_=new Qt,f=new Qt,p=(D,tt,W,O,G,H=!0)=>{let C=tt.map(([I,k])=>Array.from({length:W},($,B)=>{let F=[O[0]+k*Math.cos(2*Math.PI*B/W),O[1]+k*Math.sin(2*Math.PI*B/W),O[2]+I];return D.v(F,G(F))}));for(let I=0;I<C.length-1;I++)for(let k=0;k<W;k++){let $=(k+1)%W;D.f(C[I][k],C[I][$],C[I+1][$],C[I+1][k])}if(H){let I=C[C.length-1].map(k=>D.v(D.pos.slice(k*3,k*3+3),D.col.slice(k*3,k*3+3)));D.f(...I)}},y=(D,tt,W,O,G,H,C=1,I=[1,1,1])=>{let k=Array.from({length:O},($,B)=>{let F=2*Math.PI*B/O;return Array.from({length:G},(Y,nt)=>{let X=2*Math.PI*nt/G,S=tt+W*Math.cos(X);return D.v([S*Math.cos(F),S*Math.sin(F),H+W*C*Math.sin(X)],I)})});for(let $=0;$<O;$++)for(let B=0;B<G;B++){let F=($+1)%O,Y=(B+1)%G;D.f(k[$][B],k[F][B],k[F][Y],k[$][Y])}},x=(D,tt,W,O,G,H=0)=>{let C=Math.cos(O),I=Math.sin(O),k=new Map,$=(F,Y,nt)=>{let X=`${F},${Y},${nt}`,S=k.get(X);S||(S=H?[r.uniform(-.03,.03),r.uniform(-.03,.03),r.uniform(-.02,.02)]:[0,0,0],k.set(X,S));let st=F*W[0]+S[0],K=Y*W[1]+S[1],q=nt*W[2]+S[2];return D.v([tt[0]+st*C-K*I,tt[1]+st*I+K*C,tt[2]+q],G([st,K,q],nt+.5))},B=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let F of B)D.f(...F.map(([Y,nt,X])=>$(Y,nt,X)))},b=(D,tt,W,O)=>{let G=r.uniform(0,50);x(u,D,tt,W,(H,C)=>h(O,C,Be(H[0]*2.5+G,H[1]*2.5+H[2]*1.7)),1)},L=(D,tt,W,O)=>{let G=r.uniform(0,50);p(u,[[0,D],[W,D]],48,[0,0,tt],H=>h(O,(H[2]-tt)/W,Be(H[0]*1.2+G,H[1]*1.2)))};L(8.2,0,1.4,e.stone[0]),L(7.2,1.4,.5,e.stone[3]),L(6.6,1.9,Wr-1.9,e.stone[0]),y(d,6.6,.18,48,6,Wr,1,e.stone[3]);let E=28;for(let D=0;D<E;D++){let tt=2*Math.PI*D/E,W=1.4+r.uniform(-.08,.08);b([8.45*Math.cos(tt),8.45*Math.sin(tt),W/2],[1,1.95,W],tt,r.choice(e.stone))}for(let[D,tt]of[[9.8,.9],[11,.55],[12.2,.3]])for(let W=0;W<14;W++){if(r.random()<.2)continue;let O=2*Math.PI*W/14+r.uniform(-.08,.08);b([D*Math.cos(O),D*Math.sin(O),tt/2],[1.3,2.6,tt],O+r.uniform(-.1,.1),r.choice(e.stone))}for(let D of[5.8,4.2,2.6,1.2])y(g,D,.08,48,6,Wr+.02,.6);for(let D=0;D<16;D++){let tt=2*Math.PI*D/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(tt),5*Math.sin(tt),Wr],()=>[1,1,1])}let v=[],A=vc(),z=wi({gain:1.05}),M=[];for(let D of[3,10,17,24]){let tt=2*Math.PI*D/E,W=8.45*Math.cos(tt),O=8.45*Math.sin(tt),G=1.4;p(d,[[0,.28],[.9,.28]],12,[W,O,G],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[W,O,G+.9],()=>e.stone[0]);let H=new St(A,z);H.position.set(W,O,G+1.25),s.add(H),v.push({m:H,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),M.push({pos:[W,O,G+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let T=(D,tt,W,O=1.8,G=1.2)=>{let H=fe(D),C=tt*Math.cos(H),I=tt*Math.sin(H),k=c(C,I)-.4,$=H-Math.PI/2,B=r.choice(e.stone),F=r.uniform(0,50),Y=new Map,nt=Math.cos($),X=Math.sin($),S=(j,it,ct)=>{let P=`${j},${it},${ct}`,w=Y.get(P);w||(w=[r.uniform(-.07,.07),r.uniform(-.07,.07),r.uniform(-.05,.05)],Y.set(P,w));let N=j*O,et=it*G,lt=(ct+.5)*W;if(lt>W*.5){let Mt=1-.18*((lt-W*.5)/(W*.5));N*=Mt,et*=Mt}N+=w[0],et+=w[1];let rt=lt+w[2],Et=.5*Be(N*2.2+F,rt*.7)+.5*Be(N*6+F,rt*.25);return u.v([C+N*nt-et*X,I+N*X+et*nt,k+rt],h(B,rt/W,Et))},st=4,K=j=>-.5+j/st,q=j=>{for(let it=0;it<st;it++)for(let ct=0;ct<st;ct++)u.f(S(...j(it,ct)),S(...j(it+1,ct)),S(...j(it+1,ct+1)),S(...j(it,ct+1)))};q((j,it)=>[K(j),-.5,K(it)]),q((j,it)=>[K(it),.5,K(j)]),q((j,it)=>[-.5,K(it),K(j)]),q((j,it)=>[.5,K(j),K(it)]),q((j,it)=>[K(it),K(j),.5]),q((j,it)=>[K(j),K(it),-.5]);for(let[j,it,ct]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let w=-G/2-.02,N=W*j;x(f,[C+0*nt-w*X,I+0*X+w*nt,k+N],[it,.1,ct],$,()=>[1,1,1])}};for(let[D,tt,W]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])T(D,tt,W),T(D+180,tt,W);for(let D=0;D<12;D++){let tt=fe(r.choice([r.uniform(195,245),r.uniform(295,345)])),W=r.uniform(13,18),O=r.uniform(1,2.2),G=r.choice(e.stone),H=r.uniform(0,50),C=W*Math.cos(tt),I=W*Math.sin(tt),k=r.uniform(0,6.28),$=new mn(1,1),B=$.attributes.position,F=new ae().compose(new R(C,I,c(C,I)+.3*O),new fn().setFromAxisAngle(new R(0,0,1),k),new R(O,O*.9,O*.7)),Y=new Map;for(let nt=0;nt<B.count;nt+=3)u.f(...[0,1,2].map(X=>{let S=B.getX(nt+X),st=B.getY(nt+X),K=B.getZ(nt+X),q=`${S.toFixed(3)},${st.toFixed(3)},${K.toFixed(3)}`,j=Y.get(q);j===void 0&&(j=r.uniform(.8,1.2),Y.set(q,j));let it=new R(S*j,st*j,K*j).applyMatrix4(F);return u.v([it.x,it.y,it.z],h(G,(K+1)/2,Be(S*2+H,st*2+K)))}));$.dispose()}s.add(new St(u.geo(),_e())),s.add(new St(d.geo(),_e({flat:!1})),new St(m.geo(),_e()));let J=new St(g.geo(),kn([1,.92,.75],.75*Math.min(1.6,n)));J.name="centre-pattern",s.add(J,new St(_.geo(),kn([1,.92,.75],.75*Math.min(1.6,n)))),s.add(new St(f.geo(),kn([1,.3,.1],1.1*Math.min(1.4,n))));let V=fe(e.body_az),Z=_e({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),ut=[0,1].map(()=>{let D=e.grass_tip[0],tt=-1,W=Vs({r,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:G=>{let H=1-.55*kt((G-13)/34);return[.03*H,.1*H,.1*H]},tip:(G,H)=>(G!==tt&&(tt=G,D=Kt(e.grass_tip[0],e.grass_tip[1],r.random())),ge(Kt(D,e.grass_rim,.3*Math.abs(Math.cos(H-V))*(i==="night"?.5:1)),1-.55*kt((G-13)/34)))}),O=new St(W,Z);return O.morphTargetInfluences=[0],s.add(O),O});{let D=new Qt;for(let tt=0;tt<(t?40:70);tt++){let W=14+22*r.random(),O=r.uniform(0,2*Math.PI),G=W*Math.cos(O),H=W*Math.sin(O),C=c(G,H),I=r.uniform(.35,.7),k=[G+r.uniform(-.06,.06),H+r.uniform(-.06,.06),C+I];D.f(D.v([G-.012,H,C],[.02,.07,.05]),D.v([G+.012,H,C],[.02,.07,.05]),D.v([k[0]+.012,k[1],k[2]],[.08,.25,.12]),D.v([k[0]-.012,k[1],k[2]],[.08,.25,.12]));let $=r.choice(e.flower),B=D.v([k[0],k[1],k[2]+.02],[1,.9,.5]),F=Array.from({length:6},(Y,nt)=>{let X=2*Math.PI*nt/6;return D.v([k[0]+.05*Math.cos(X),k[1]+.05*Math.sin(X),k[2]+.025],$)});for(let Y=0;Y<6;Y++)D.f(B,F[Y],F[(Y+1)%6])}s.add(new St(D.geo(),_e({emit:e.flower_emit,double:!0})))}let ot=Ai({r,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let D=r.uniform(0,6.283),tt=r.uniform(4,26);return[tt*Math.cos(D),tt*Math.sin(D),r.uniform(1.5,10)]},move:()=>[r.uniform(-1,1),0,r.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&s.add(ot.obj);let pt=Si({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return s.add(pt.group),{group:s,floor:Wr,update(D){pt.update(D),ut.forEach((H,C)=>{H.morphTargetInfluences[0]=An(D,45,0,1,C)});let tt=D%3600,W=Math.floor(tt/8),O=(tt-W*8)/8,G=O*O*(3-2*O);for(let H of v){let C=H.keys[W%450],I=H.keys[(W+1)%450];H.m.scale.set(C[0]+(I[0]-C[0])*G,C[1]+(I[1]-C[1])*G,C[2]+(I[2]-C[2])*G)}ot.update(D)},key:{dir:Tn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,Wr+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,Wr+.5],color:[1,.5,.2],intensity:.35,dist:8},...M],dispose(){pt.dispose(),Ri(s)}}}var pu={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function Of(i,t){let e=i==="night"?pu.NIGHT:i==="day"?{...Ci(pu.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:pu.SUNSET,n=e.emit,r=n*.75,s=En(21),o=En(77),a=new Yt,c=[Tn(e.body_az,e.body_el)],l=ji(e,c),h=fe(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(B=>gr(B,e.exposure)),d=e.stone,m=Si({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(B,F)=>{let Y=Math.hypot(B,F),nt=Kt(e.water_lo,e.water_hi,kt(en(B*.05+2,F*.05,3)*1.2-.15)),X=Math.exp(-(((Y-9.9)/3)**2))*.12*.75;return nt=[nt[0]+e.glow_col[0]*X,nt[1]+e.glow_col[1]*X,nt[2]+e.glow_col[2]*X],Kt(nt,ge(u,.5),Ae(32,150,Y)**1.2)},_;{let B=new Qt(!1,2),F=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],Y=t?48:72,nt=F.map(S=>Array.from({length:Y},(st,K)=>{let q=S*Math.cos(2*Math.PI*K/Y),j=S*Math.sin(2*Math.PI*K/Y),it=Ae(9,13,S)*Math.exp(-S/90);return B.v([q,j,0],g(q,j),[[0,0,.06*Math.sin(.45*q+.33*j)*it],[0,0,.06*Math.sin(.38*q-.41*j+2)*it]])}));for(let S=0;S<F.length-1;S++)for(let st=0;st<Y;st++){let K=(st+1)%Y;B.f(nt[S][st],nt[S+1][st],nt[S+1][K],nt[S][K])}let X=new Is({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:Nh});_=new St(B.geo(),X),_.morphTargetInfluences=[0,0],a.add(_)}let f=[];[.35,.9,1.7].slice(0,t?2:3).forEach((B,F)=>{let Y=new Qt(!0),nt=[10.5,12,15,19,24,30,38,48,60],X=48,S=nt.map(q=>Array.from({length:X},(j,it)=>{let ct=2*Math.PI*it/X,P=q*Math.cos(ct),w=q*Math.sin(ct),N=e.mist_a*kt((en(P*.07+F*9,w*.07,3)-.38)*2.6)*Ae(0,3,q-10.5)*Ae(0,15,60-q);return Y.v([P,w,B+.12*Math.sin(.3*P+F)],[...e.mist_col,N])}));for(let q=0;q<nt.length-1;q++)for(let j=0;j<X;j++){let it=(j+1)%X;Y.f(S[q][j],S[q+1][j],S[q+1][it],S[q][it])}let st=new cn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Pe,toneMapped:!1});st.color.setScalar(1+.7);let K=new St(Y.geo(),st);K.renderOrder=3,a.add(K),f.push({m:K,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(_r({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let p=new Qt,y=new Qt,x=[];for(let B of[45,135,225,315]){let F=fe(B),Y=o.uniform(1.6,2.6),nt=o.choice(d),X=o.uniform(0,50),S=9.35*Math.cos(F),st=9.35*Math.sin(F),K=10,q=.3,j=[],it=[],ct=Array.from({length:K},()=>q+Y-o.uniform(0,.45));for(let dt=0;dt<K;dt++){let Lt=2*Math.PI*dt/K,mt=o.uniform(-.05,.05),At=o.uniform(-.05,.05),Vt=o.uniform(-.05,.05),Ot=o.uniform(-.05,.05),Rt=[S+.62*Math.cos(Lt)+mt,st+.62*Math.sin(Lt)+At,q],Ct=[S+.5*Math.cos(Lt)+Vt,st+.5*Math.sin(Lt)+Ot,ct[dt]];j.push(p.v(Rt,Ti(nt,0,Rt[0]-S,Rt[1]-st,X,e.moss))),it.push(p.v(Ct,Ti(nt,(Ct[2]-q)/Y,Ct[0]-S,Ct[1]-st,X,e.moss)))}for(let dt=0;dt<K;dt++){let Lt=(dt+1)%K;p.f(j[dt],j[Lt],it[Lt],it[dt])}p.f(...it);let P=S-.55*Math.cos(F),w=st-.55*Math.sin(F),N=F-Math.PI/2,et=Math.cos(N),lt=Math.sin(N),rt=.06,Et=Y*.45/2,Mt=.3+Y*.5;y.f(...[[-rt,-.03,-Et],[rt,-.03,-Et],[rt,-.03,Et],[-rt,-.03,Et]].map(([dt,Lt,mt])=>y.v([P+dt*et-Lt*lt,w+dt*lt+Lt*et,Mt+mt],[1,1,1]))),x.push([S,st,.3+Y])}let b=(B,F,Y,nt,X,S,st,K)=>{let q=o.uniform(0,50),j=Math.cos(st),it=Math.sin(st),ct=new Map,P=(w,N,et)=>{let lt=w*nt+o.uniform(-.03,.03),rt=N*X+o.uniform(-.03,.03),Et=et*S;return p.v([B+lt*j-rt*it,F+lt*it+rt*j,Y+Et],Ti(K,et+.5,lt,rt,q,e.moss))};for(let w of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...w.map(([N,et,lt])=>P(N,et,lt)))};for(let B of[270,90])for(let F=0;F<5;F++){let Y=11+F*1.7+o.uniform(-.2,.2),nt=fe(B+o.uniform(-5,5)),X=o.uniform(1.2,1.7);b(Y*Math.cos(nt),Y*Math.sin(nt),-.13,X,X*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(d))}for(let B=0;B<12;B++){let F=o.uniform(0,2*Math.PI);Math.min(Math.abs(Fo(F,Math.PI/2)),Math.abs(Fo(F,3*Math.PI/2)))<.18&&(F+=.5);let Y=o.uniform(10.5,15),nt=o.uniform(.7,1.8),X=o.choice(d),S=o.uniform(0,50),st=o.uniform(0,6.28),K=new mn(1,1),q=K.attributes.position,j=new ae().compose(new R(Y*Math.cos(F),Y*Math.sin(F),.05),new fn().setFromAxisAngle(new R(0,0,1),st),new R(nt,nt*.9,nt*.7));for(let it=0;it<q.count;it+=3)p.f(...[0,1,2].map(ct=>{let P=new R(q.getX(it+ct),q.getY(it+ct),q.getZ(it+ct)),w=P.z;return P.applyMatrix4(j),p.v([P.x,P.y,P.z],Ti(X,(w+1)/2,q.getX(it+ct),q.getY(it+ct),S,e.moss))}));K.dispose()}a.add(new St(p.geo(),_e()),new St(y.geo(),kn(e.rune_col,1.4*r)));let L=(()=>{let B=new R(.8,.6,0).normalize();return[B.x,B.y,0]})(),E=fe(e.body_az),v=[Math.cos(E),Math.sin(E)],A=[],z=(B,F,Y)=>{for(let nt=0;nt<300;nt++){let X=s.uniform(0,360);if(Y&&X>245&&X<295)continue;let S=s.uniform(B,F),st=S*Math.cos(fe(X)),K=S*Math.sin(fe(X));if(A.every(([q,j])=>Math.hypot(st-q,K-j)>6))return A.push([st,K]),[st,K]}return null},M=_e({morph:!0}),T=[],J=[],V=[],Z=t?6:9,ut=t?4:7;for(let B=0;B<Z+ut;B++){let F=B<Z,Y=F?z(16,32,!0):z(38,62,!1);if(!Y)continue;let nt=F?s.uniform(9,15):s.uniform(16,24),X=F?s.uniform(.28,.42):s.uniform(.5,.8),S=new St(ot(Y[0],Y[1],nt,X),M);S.morphTargetInfluences=[0],a.add(S),T.push({m:S,P:s.choice([100,120,150,180,200]),flip:s.int(0,1)}),J.push(Y),V.push([Y[0],Y[1],2.2*X+.7])}function ot(B,F,Y,nt){let X=new Qt(!1,1),S=new R(-B,-F,0).normalize(),st=s.uniform(.6,1.4),K=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.02,.07)),q=s.uniform(0,6.28),j=dt=>new R(B+K.x*dt+.25*Math.sin(.5*dt+q),F+K.y*dt+.25*Math.cos(.4*dt+q),dt),it=dt=>{let Lt=Math.max(dt,0);return nt*(1-.55*kt(Lt/Y))*(1+.7*Math.exp(-Lt/.8))},ct=(dt,Lt,mt=0)=>{let At=st*kt(Math.max(dt.z,0)/Y)**2+mt;return X.v([dt.x,dt.y,dt.z],Lt,[[L[0]*At,L[1]*At,0]])},P=(dt,Lt)=>{let mt=new R(dt.x,dt.y,0);mt.lengthSq()>1e-12&&mt.normalize();let At=Kt(e.bark_dark,e.bark_lit,.6*Math.max(0,mt.x*S.x+mt.y*S.y));return At=Kt(At,e.bark_rim,kt(e.bark_rim_k*Math.max(0,mt.x*v[0]+mt.y*v[1])*(1-.4*kt(Lt/Y)))),Kt(At,e.moss,kt(1-Lt/1.8)*.6*Be(dt.x*3+B,Lt*.8+F))},w=(dt,Lt,mt,At,Vt)=>{let Ot=dt.length,Rt=dt.map((ee,at)=>dt[Math.min(at+1,Ot-1)].clone().sub(dt[Math.max(at-1,0)]).normalize()),Ct=Rt[0].clone().cross(Math.abs(Rt[0].z)>.9?new R(1,0,0):new R(0,0,1)).normalize(),Wt=dt.map((ee,at)=>{let Dt=Rt[at];Ct=Ct.clone().addScaledVector(Dt,-Ct.dot(Dt)).normalize();let bt=Dt.clone().cross(Ct);return Array.from({length:mt},(Tt,Xt)=>{let $t=2*Math.PI*Xt/mt,de=Ct.clone().multiplyScalar(Math.cos($t)).addScaledVector(bt,Math.sin($t));return ct(ee.clone().addScaledVector(de,Lt[at]),At(at,de),Vt?Vt(at):0)})});for(let ee=0;ee<Ot-1;ee++)for(let at=0;at<mt;at++){let Dt=(at+1)%mt;X.f(Wt[ee][at],Wt[ee][Dt],Wt[ee+1][Dt],Wt[ee+1][at])}},N=11,et=8,lt=Array.from({length:N},(dt,Lt)=>{let mt=-.4+(Y+.4)*Lt/(N-1),At=j(mt);return Array.from({length:et},(Vt,Ot)=>{let Rt=2*Math.PI*Ot/et,Ct=new R(Math.cos(Rt),Math.sin(Rt),0);return ct(At.clone().addScaledVector(Ct,it(mt)*(1+.06*Math.sin(3*Rt+mt))),P(Ct,mt))})});for(let dt=0;dt<N-1;dt++)for(let Lt=0;Lt<et;Lt++){let mt=(Lt+1)%et;X.f(lt[dt][Lt],lt[dt][mt],lt[dt+1][mt],lt[dt+1][Lt])}X.f(...lt[N-1]);let rt=[],Et=s.int(3,5);for(let dt=0;dt<Et;dt++){let Lt=Y*s.uniform(.42,.9),mt=s.uniform(0,6.28),At=new R(Math.cos(mt),Math.sin(mt),0),Vt=j(Lt).addScaledVector(At,it(Lt)*.6),Ot=At.clone().add(new R(0,0,s.uniform(.5,1.1))).normalize(),Rt=s.uniform(2,5)*(Y/12)*(1.1-.5*Lt/Y),Ct=Array.from({length:6},(ee,at)=>Vt.clone().addScaledVector(Ot,Rt*(at/5)).add(new R(0,0,-.12*Rt*(at/5)**2))),Wt=it(Lt)*.4;w(Ct,Ct.map((ee,at)=>Wt*(1-.88*at/5)+.01),5,(ee,at)=>P(at,Ct[ee].z)),rt.push(...Ct.slice(2,5))}let Mt=s.int(4,8);for(let dt=0;dt<Mt;dt++){let Lt=s.choice(rt),mt=s.uniform(.8,2.2),At=s.uniform(0,6.28),Vt=Array.from({length:6},(Ot,Rt)=>Lt.clone().add(new R(.06*Math.sin(At+Rt)*Rt/5,.06*Math.cos(At+Rt*.8)*Rt/5,-mt*Rt/5)));w(Vt,Vt.map((Ot,Rt)=>.022*(1-.8*Rt/5)+.003),3,Ot=>Kt(e.vine_a,e.vine_b,Ot/5),Ot=>.45*(Ot/5)**1.5)}return X.geo()}{let B=new Qt,F=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[Y,nt,X]of V){let S=F.map(([K,q])=>Array.from({length:14},(j,it)=>{let ct=2*Math.PI*it/14,P=X*K*(1+.12*Math.sin(3*ct+Y)),w=[Y+P*Math.cos(ct),nt+P*Math.sin(ct),q+.05*Math.sin(5*ct+nt)];return B.v(w,Kt(e.mud,e.moss,kt(.3+.6*Be(w[0]*.8,w[1]*.8))))})),st=B.v([Y,nt,.52],e.moss);for(let K=0;K<S.length-1;K++)for(let q=0;q<14;q++){let j=(q+1)%14;B.f(S[K][q],S[K][j],S[K+1][j],S[K+1][q])}for(let K=0;K<14;K++)B.f(st,S[S.length-1][K],S[S.length-1][(K+1)%14])}a.add(new St(B.geo(),_e()))}let pt=_e({morph:!0,double:!0}),D=[0,1].map(B=>{let F=new Qt(!1,1),Y=(t?160:300)/2,nt=(K,q,j,it,ct)=>Array.from({length:j},(P,w)=>{let N=2*Math.PI*w/j;return F.v([K[0]+q*Math.cos(N),K[1]+q*Math.sin(N),K[2]],it,[[L[0]*ct,L[1]*ct,0]])}),X=(K,q)=>{for(let j=0;j<K.length;j++){let it=(j+1)%K.length;F.f(K[j],K[it],q[it],q[j])}},S=0;for(;S<Y;){let K,q;if(J.length&&o.random()<.6){let[rt,Et]=o.choice(J),Mt=o.uniform(0,6.283),dt=o.uniform(1,4.5);K=rt+dt*Math.cos(Mt),q=Et+dt*Math.sin(Mt)}else{let rt=o.uniform(0,6.283),Et=o.uniform(11.5,48);K=Et*Math.cos(rt),q=Et*Math.sin(rt)}if(Math.hypot(K,q)<11)continue;S++;let j=o.uniform(1.2,3),it=o.uniform(-.25,.25)*j*.5,ct=o.uniform(-.25,.25)*j*.5,P=rt=>[K+it*rt*rt,q+ct*rt*rt,-.3+(j+.3)*rt],w=rt=>.12*j*rt*rt,N=[0,.37,.74].map(rt=>nt(P(rt),.018-.008*rt,3,e.reed,w(rt)));X(N[0],N[1]),X(N[1],N[2]);let et=[[.75,.012],[.83,.055],[.92,.045]].map(([rt,Et])=>nt(P(rt),Et,5,e.cat,w(rt)));X(et[0],et[1]),X(et[1],et[2]);let lt=F.v(P(1),e.cat,[[L[0]*w(1),L[1]*w(1),0]]);for(let rt=0;rt<5;rt++)F.f(et[2][rt],et[2][(rt+1)%5],lt)}let st=new St(F.geo(),pt);return st.morphTargetInfluences=[0],a.add(st),st});{let B=new Qt;for(let F=0;F<(t?36:60);F++){let Y=o.uniform(0,6.283),nt=o.uniform(11.5,44),X=nt*Math.cos(Y),S=nt*Math.sin(Y),st=o.uniform(.3,.7),K=o.int(0,11),q=o.choice(e.lily),j=B.v([X,S,.04],q),it=Array.from({length:12},(ct,P)=>{let w=2*Math.PI*P/12;return B.v([X+st*Math.cos(w),S+st*.9*Math.sin(w),.04],ge(q,.8))});for(let ct=0;ct<12;ct++)ct!==K&&B.f(j,it[ct],it[(ct+1)%12])}a.add(new St(B.geo(),_e({double:!0})))}let tt=new Qt(!1,1),W=new Qt;for(let B=0;B<8;B++){let F=o.uniform(0,6.283),Y=o.uniform(12,36),nt=o.uniform(0,6.283),X=new R(Y*Math.cos(F),Y*Math.sin(F),.05),S=new ae().makeRotationZ(nt),st=new mn(1,1),K=st.attributes.position,q=new ae().makeTranslation(X.x,X.y,X.z).multiply(S).multiply(new ae().makeScale(.22,.3,.13));for(let j=0;j<K.count;j+=3)W.f(...[0,1,2].map(it=>{let ct=new R(K.getX(j+it),K.getY(j+it),K.getZ(j+it)).applyMatrix4(q);return W.v([ct.x,ct.y,ct.z],[.008,.012,.009])}));st.dispose();for(let j of[-1,1]){let it=X.clone().add(new R(j*.09,.12,.12).applyMatrix4(S)),P=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(w=>tt.v([it.x+w[0]*.035,it.y+w[1]*.035,it.z+w[2]*.035],[1,1,1],[[0,0,w[2]*.035*(.08-1)]]));for(let[w,N]of[[0,2],[2,1],[1,3],[3,0]])tt.f(P[w],P[N],P[4]),tt.f(P[N],P[w],P[5])}}a.add(new St(W.geo(),_e()));let O=new St(tt.geo(),kn(e.eye_col,1.8));O.morphTargetInfluences=[0],a.add(O);let G=Array.from({length:Math.floor(3480/20)},(B,F)=>60+F*20),H=[];for(let B=0;B<6;B++)H.push(G.splice(o.int(0,G.length-1),1)[0]);{let B=new Qt;[[70,46,14,22],[95,58,18,30]].forEach(([F,Y,nt,X],S)=>{let st=Kt(e.back_col,u,.55+.2*S);for(let K=0;K<Y;K++){let q=2*Math.PI*(K+s.uniform(-.4,.4))/Y+S*.5,j=[F*Math.cos(q),F*Math.sin(q)],it=[-Math.sin(q),Math.cos(q)],ct=s.uniform(nt,X),P=s.uniform(.35,.9)*(1+.5*S),w=s.uniform(0,6.28),N=s.uniform(-.06,.06),et=rt=>{let Et=-2+(ct+2)*rt,Mt=Math.sin(rt*3+w)*.5+N*Et;return[j[0]+it[0]*Mt,j[1]+it[1]*Mt,Et]},lt=Array.from({length:6},(rt,Et)=>{let Mt=Et/5,dt=P*(1-.5*Mt),Lt=Kt(st,u,kt(Mt*Mt*.9)),mt=et(Mt);return[B.v([mt[0]-it[0]*dt/2,mt[1]-it[1]*dt/2,mt[2]],Lt),B.v([mt[0]+it[0]*dt/2,mt[1]+it[1]*dt/2,mt[2]],Lt)]});for(let rt=0;rt<5;rt++)B.f(lt[rt][0],lt[rt][1],lt[rt+1][1],lt[rt+1][0]);for(let rt of[-1,1]){let Et=et(s.uniform(.55,.8)),Mt=[Et[0]+it[0]*rt*ct*.16,Et[1]+it[1]*rt*ct*.16,Et[2]+ct*.12],dt=Kt(st,u,.6);B.f(B.v([Et[0],Et[1],Et[2]-.1],dt),B.v([Et[0],Et[1],Et[2]+.1],dt),B.v([Mt[0],Mt[1],Mt[2]+.04],dt),B.v([Mt[0],Mt[1],Mt[2]-.04],dt))}}}),a.add(new St(B.geo(),wi({fog:!1})))}let C=[];for(let B=0;B<Math.round(14*e.orb_k*(t?.6:1));B++){let F=o.uniform(0,6.283),Y=o.uniform(12,42);C.push({p:[Y*Math.cos(F),Y*Math.sin(F),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[B,F,Y]of x)C.push({p:[B,F,Y+.9],k:1.4,amp:o.uniform(.15,.4)});let I=bc({list:C,col:e.orb_col,gain:1.2});a.add(I.group);let k=Ai({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let B=o.uniform(0,6.283),F=o.uniform(4,44);return[F*Math.cos(B),F*Math.sin(B),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(k.obj);let $=new Qt(!0);return Gs($,9.4,.7,(B,F)=>{let Y=Math.hypot(B,F);return Y<.01?1:Ae(0,3,9.4-Y)*(.7+.3*Be(Y*.4,Math.atan2(F,B)*6.4))},e.wash_col,.28*.5),a.add(new St($.geo(),Gr())),{group:a,floor:.6,update(B){m.update(B);for(let nt of T)nt.m.morphTargetInfluences[0]=An(B,nt.P/2,.15,1,nt.flip);D.forEach((nt,X)=>{nt.morphTargetInfluences[0]=An(B,60,0,1,X)}),_.morphTargetInfluences[0]=An(B,90,0,1,0),_.morphTargetInfluences[1]=An(B,90,0,1,1);let F=Math.sin(B%3600/3600*Math.PI);for(let nt of f)nt.m.rotation.z=nt.s*F;let Y=0;for(let nt of H)Math.abs(B%3600-nt)<3&&(Y=1-Math.abs(B%3600-nt)/3);O.morphTargetInfluences[0]=Y,I.update(B),k.update(B)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...x.map(B=>({pos:[B[0],B[1],B[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),Ri(a)}}}var mu={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},Nn=24,Qy=Nn+1.6,tx=160;function Bf(i,t){let e=i==="night"?mu.NIGHT:i==="day"?{...Ci(mu.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:mu.SUNSET,n=e.emit,r=n*.75,s=En(31),o=En(55),a=new Yt,c=[Tn(e.body_az,e.body_el)],l=ji(e,c),h=fe(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(W=>gr(W,e.exposure)),d=fe(e.body_az),m=(()=>{let W=new R(.8,.6,0).normalize();return[W.x,W.y,0]})(),g=e.stone,_=Si({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let f=W=>Qy*(1+.25*(1-Math.exp(W/60))),p=(W,O)=>.12*Math.sin(W*.33)*Math.cos(O*.29)*Ae(8,14,Math.hypot(W,O)),y=(W,O)=>Kt(Kt(e.earth_a,e.earth_b,kt(en(W*.12+5,O*.12-3,3)*1.4-.2)),e.moss,kt((Be(W*.4,O*.4)-.62)*3)*.6);{let W=new Qt,O=[8,10,12,14,16,18,20,22,Nn-1,Nn,Nn+.6,Nn+1.2,Nn+1.6],G={[Nn+.6]:.3,[Nn+1.2]:.15,[Nn+1.6]:-.4},H=72,C=O.map(I=>Array.from({length:H},(k,$)=>{let B=2*Math.PI*$/H,F=I*Math.cos(B),Y=I*Math.sin(B);return W.v([F,Y,G[I]??p(F,Y)],I<=Nn+.01?y(F,Y):Kt(e.bark,e.moss,.5+.3*Be(F*.5,Y*.5)))}));for(let I=0;I<O.length-1;I++)for(let k=0;k<H;k++){let $=(k+1)%H;W.f(C[I][k],C[I+1][k],C[I+1][$],C[I][$])}a.add(new St(W.geo(),_e({flat:!1})))}{let W=new Qt,O=t?28:40,G=t?48:72,H=Array.from({length:O},(C,I)=>{let k=-.4-tx*(I/(O-1))**1.6;return Array.from({length:G},($,B)=>{let F=2*Math.PI*B/G,Y=f(k)*(1+.04*Math.sin(14*F+.8*Math.sin(.05*k))+.025*Math.sin(5*F+.02*k)),nt=Math.sin(14*F+.8*Math.sin(.05*k)),X=Kt(e.bark,e.bark_hi,kt(.5+.5*nt)*.5);X=Kt(X,e.bark_hi,.4*Math.max(0,Math.cos(F-d))),X=Kt(X,e.moss,kt(1+k/25)*kt((Be(F*3,k*.15)-.4)*2.5)*.8);let S=Math.abs(Math.sin(7*F+1.5*Math.sin(.04*k+3*F)));return X=Kt(X,e.vein,kt(1-S*7)*(.4+.6*Be(k*.05,F*2))*.9),W.v([Y*Math.cos(F),Y*Math.sin(F),k],Kt(X,ge(u,.6),kt((-k-15)/110)**1.2))})});for(let C=0;C<O-1;C++)for(let I=0;I<G;I++){let k=(I+1)%G;W.f(H[C][I],H[C+1][I],H[C+1][k],H[C][k])}a.add(new St(W.geo(),_e({emit:.3,flat:!1})))}let x=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([W,O],G)=>{let H=new Qt(!0),C=f(W)-.3,I=[C,C+4,C+10,C+20,C+32,C+46,C+64,C+84,C+106,150],k=64,$=I.map(Y=>Array.from({length:k},(nt,X)=>{let S=2*Math.PI*X/k,st=Y*Math.cos(S),K=Y*Math.sin(S),q=O*(.55+.45*en(st*.03+G*7,K*.03,3))*Ae(0,6,Y-C);return H.v([st,K,W],[...Kt(e.sea_col,u,Ae(60,150,Y)),q])}));for(let Y=0;Y<I.length-1;Y++)for(let nt=0;nt<k;nt++){let X=(nt+1)%k;H.f($[Y][nt],$[Y+1][nt],$[Y+1][X],$[Y][X])}let B=new cn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Pe,fog:!1,toneMapped:!1});B.color.setScalar(1.7);let F=new St(H.geo(),B);F.renderOrder=2,a.add(F),x.push({m:F,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(_r({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let b=new Qt,L=new Qt,E=[];for(let W of[0,60,120,180,240,300]){let O=fe(W),G=12.5,H=o.uniform(5,8),C=1.8,I=1.2,k=G*Math.cos(O),$=G*Math.sin(O),B=-.4,F=O-Math.PI/2,Y=Math.cos(F),nt=Math.sin(F),X=o.choice(g),S=o.uniform(0,50),st=new Map,K=(ct,P,w)=>{let N=`${ct},${P},${w}`,et=st.get(N);et||(et=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],st.set(N,et));let lt=ct*C,rt=P*I,Et=(w+.5)*H;if(Et>H*.5){let dt=1-.18*((Et-H*.5)/(H*.5));lt*=dt,rt*=dt}lt+=et[0],rt+=et[1];let Mt=Et+et[2];return b.v([k+lt*Y-rt*nt,$+lt*nt+rt*Y,B+Mt],Ti(X,Mt/H,lt,Mt*.7,S,e.moss))},q=4,j=ct=>-.5+ct/q,it=ct=>{for(let P=0;P<q;P++)for(let w=0;w<q;w++)b.f(K(...ct(P,w)),K(...ct(P+1,w)),K(...ct(P+1,w+1)),K(...ct(P,w+1)))};it((ct,P)=>[j(ct),-.5,j(P)]),it((ct,P)=>[j(P),.5,j(ct)]),it((ct,P)=>[-.5,j(P),j(ct)]),it((ct,P)=>[.5,j(ct),j(P)]),it((ct,P)=>[j(P),j(ct),.5]);for(let[ct,P,w]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let N=-I/2-.02,et=H*ct,lt=k-N*nt,rt=$+N*Y;L.f(...[[-P/2,-w/2],[P/2,-w/2],[P/2,w/2],[-P/2,w/2]].map(([Et,Mt])=>L.v([lt+Et*Y,rt+Et*nt,B+et+Mt],[1,1,1])))}E.push([k,$,H-.4])}a.add(new St(b.geo(),_e()),new St(L.geo(),kn(e.rune_col,1.4*r)));let v=(W,O,G,H,C,I,k,$,B=!0)=>{let F=Array.from({length:k},(nt,X)=>{let S=Math.PI/2*X/k,st=X/k;return Array.from({length:I},(K,q)=>{let j=2*Math.PI*q/I,it=.1*st*st*C;return W.v([O[0]+G*Math.cos(S)*Math.cos(j),O[1]+H*Math.cos(S)*Math.sin(j),O[2]+C*Math.sin(S)],$(st,j),B?[[m[0]*it,m[1]*it,0]]:void 0)})}),Y=W.v([O[0],O[1],O[2]+C],$(1,0),B?[[m[0]*.1*C,m[1]*.1*C,0]]:void 0);for(let nt=0;nt<k-1;nt++)for(let X=0;X<I;X++){let S=(X+1)%I;W.f(F[nt][X],F[nt][S],F[nt+1][S],F[nt+1][X])}for(let nt=0;nt<I;nt++)W.f(F[k-1][nt],F[k-1][(nt+1)%I],Y)},A=(W,O,G,H,C)=>{let I=new Qt(!1,1);for(let[$,B,F,Y]of W){let nt=o.uniform(.85,1.15),X=p($,B)-.2,S=(st,K)=>ge(Kt(O,G,kt(st*(.75+.25*Math.cos(K-d)))**.9),nt);for(let st=0;st<Y;st++){let K=o.uniform(0,6.283),q=st?o.uniform(0,.6)*F:0,j=F*o.uniform(.7,1);v(I,[$+q*Math.cos(K),B+q*Math.sin(K),X],j,j,j*.85,H,C,S)}}let k=new St(I.geo(),_e({flat:!1,morph:!0}));return k.morphTargetInfluences=[0],a.add(k),k},z=[];for(let W=0;z.length<(t?40:70)&&W<3e3;W++){let O=o.uniform(0,2*Math.PI),G=o.uniform(11.5,Nn-1.5);if(O*180/Math.PI%360>255&&O*180/Math.PI%360<285&&G>15)continue;let H=G*Math.cos(O),C=G*Math.sin(O);E.some(([I,k])=>Math.hypot(H-I,C-k)<2.8)||z.push([H,C,o.uniform(1,2.2),o.int(2,4)])}let M=A(z,e.bush_lo,e.bush_hi,12,3),T=Array.from({length:30},(W,O)=>{let G=2*Math.PI*(O+o.uniform(-.3,.3))/30,H=Nn-.6+o.uniform(-.8,.8);return[H*Math.cos(G),H*Math.sin(G),o.uniform(2,3.5),2]}),J=A(T,e.hedge_lo,e.hedge_hi,16,4);{let W=new Qt;[62,85,112,140].forEach((O,G)=>{let H=1+.25*G;for(let C=0;C<(t?12:20);C++){let I=2*Math.PI*(C+s.uniform(-.4,.4))/20+G*.4,k=O+s.uniform(-6,6);for(let $=0;$<2;$++){let B=$?s.uniform(-9,9):0,F=k*Math.cos(I)-B*Math.sin(I),Y=k*Math.sin(I)+B*Math.cos(I),nt=s.uniform(9,16)*H*($?.7:1),X=s.uniform(28,46)*H*($?.75:1),S=.35+.15*G,st=s.uniform(.85,1.15);v(W,[F,Y,-30],nt,nt,X,14,7,K=>Kt(ge(e.can_col,st),ge(u,.7),kt(S+.25*K)),!1)}}}),a.add(new St(W.geo(),_e({emit:.85,flat:!1})))}let V=[];for(let W=0;W<Math.round(18*e.orb_k*(t?.6:1));W++){let O=o.uniform(0,6.283),G=10.5+(Nn-8.5)*Math.sqrt(o.random());V.push({p:[G*Math.cos(O),G*Math.sin(O),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[W,O,G]of E)V.push({p:[W,O,G+.9],k:1.4,amp:o.uniform(.15,.4)});let Z=bc({list:V,col:e.orb_col,gain:1.2});a.add(Z.group);let ut=Math.round(160*e.fire_k*(t?.5:1)),ot=Math.round(40*e.fire_k*(t?.5:1)),pt=0,D=Ai({r:o,n:ut+ot,at:()=>{if(pt++<ut){let G=o.uniform(0,6.283),H=(Nn+4)*Math.sqrt(o.random());return[H*Math.cos(G),H*Math.sin(G),.3+8.7*o.random()**1.6]}let W=o.uniform(0,6.283),O=o.uniform(Nn+2,Nn+14);return[O*Math.cos(W),O*Math.sin(W),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});ut+ot>0&&a.add(D.obj);let tt=new Qt(!0);return Gs(tt,9.4,.7,(W,O)=>{let G=Math.hypot(W,O);return G<.01?1:Ae(0,3,9.4-G)*(.7+.3*Be(G*.4,Math.atan2(O,W)*6.4))},e.wash_col,.28*.5),a.add(new St(tt.geo(),Gr())),{group:a,floor:.6,update(W){_.update(W),M.morphTargetInfluences[0]=An(W,60,.15,1,1),J.morphTargetInfluences[0]=An(W,90,.15,1,1);let O=Math.sin(W%3600/3600*Math.PI);for(let G of x)G.m.rotation.z=G.s*O;Z.update(W),D.update(W)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...E.slice(0,4).map(W=>({pos:[W[0],W[1],W[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),Ri(a)}}}var ex={forest:Hf,plains:Ff,swamp:Of,worldtree:Bf,castle:Nf};function kf(i,t,e){let n=ex[i];return n?n(t,e):null}var It=(i,t)=>i+Math.random()*(t-i),nx=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function Xr(i,t=!1){let e=new Ln(i);return e.colorSpace=nn,t&&(e.magFilter=wn,e.minFilter=wn,e.generateMipmaps=!1),e}function Oo(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),Xr(e)}function zf(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let r=0;r<n.length;r++)e.save(),e.rotate(r/n.length*Math.PI*2),e.fillText(n[r],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let r=0;r<=5;r++){let s=r*4*Math.PI/5-Math.PI/2,o=Math.cos(s)*180,a=Math.sin(s)*180;r?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),Xr(t)}function ix(i,t,e=160){let n=document.createElement("canvas"),r=[...i].length;n.width=Math.max(256,Math.ceil(r*e*1.05+80)),n.height=e+80;let s=n.getContext("2d");return s.font=`900 ${e}px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif`,s.textAlign="center",s.textBaseline="middle",s.shadowColor=t,s.shadowBlur=34,s.fillStyle=t,s.fillText(i,n.width/2,n.height/2),s.shadowBlur=10,s.fillStyle="#ffffff",s.fillText(i,n.width/2,n.height/2),{tex:Xr(n),aspect:n.width/n.height}}function rx(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),Xr(e)}function sx(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let r=n*56,s=r+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,s,c,l),t.arc(512,512,Math.max(r,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=Xr(i);return e.anisotropy=4,e}function ox(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,r=e?Number(e[2]):20,s=1024/Math.max(n,r),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*s}" height="${r*s}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*s,c.height=r*s,c.getContext("2d").drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(Xr(c),n/r)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function ax(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let r=document.createElement("canvas");r.width=2048,r.height=1152;let s=r.getContext("2d");s.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=s.getImageData(0,a,2048,c-a).data,h=0,u=0,d=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],d+=l[g+2],m++;return new zt(h/m/255,u/m/255,d/m/255).convertSRGBToLinear()};t(Xr(r),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var cx={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},lx=["forest","swamp","worldtree"];function hx(i,t={}){let e,n=!!t.lite;try{e=new As({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let r=!1,s=()=>r?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(s()),e.toneMapping=Io,e.toneMappingExposure=1.15;let o=new Rs;o.fog=new Za(1709616,20,58);let a=new Mn(55,16/9,.05,200),c=new R(0,1.75,7.2),l=new R(0,1.45,0);a.position.copy(c),o.add(a);let h=new Ds(16777215,2236962,1),u=new Zi(16777215,1);o.add(h,u);let d=new mi(16777215,6,9,2);d.position.set(0,3,7.5),o.add(d);let m=new Zi(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new Yt;o.add(g);let _=new cn({color:16777215,fog:!1,side:Pe}),f=new St(new Ee(70,70,66,48,1,!0,Math.PI-.95,1.9),_);f.scale.set(-1,1,1),f.position.set(0,13,6),g.add(f);let p=new Se({color:2767396,roughness:1}),y=new St(new So(90,48),p);y.rotation.x=-Math.PI/2,y.position.y=-.02,g.add(y);let x=new Se({color:5208634,roughness:.9,flatShading:!0}),b=2600,L=new Cs(new Dn(.05,.42,3),x,b);{let Q=new ae,vt=new fn,gt=new bn,xt=new R,Ht=new R,Bt=new zt;for(let Gt=0;Gt<b;Gt++){let ve=9.9+Math.pow(Math.random(),.7)*30,Pt=Math.random()*Math.PI*2;xt.set(Math.cos(Pt)*ve,.18,Math.sin(Pt)*ve-1),gt.set(It(-.25,.25),Math.random()*3,It(-.25,.25)),vt.setFromEuler(gt);let wt=It(.7,1.6);Ht.set(wt,wt*It(.8,1.5),wt),Q.compose(xt,vt,Ht),L.setMatrixAt(Gt,Q),L.setColorAt(Gt,Bt.setHSL(It(.22,.32),It(.35,.6),It(.3,.5)))}}g.add(L);let E=new Yt;g.add(E);let v=new Se({color:1981226,roughness:1,flatShading:!0}),A=new Se({color:3811868,roughness:1}),z=new Se({color:6051942,roughness:1,flatShading:!0});function M(Q){E.clear();let vt=lx.includes(Q),gt=vt?70:34;for(let xt=0;xt<gt;xt++){let Ht=It(Math.PI*1.08,Math.PI*1.92),Bt=It(24,48),Gt=Math.cos(Ht)*Bt,ve=Math.sin(Ht)*Bt-1;if(vt){let Pt=It(6,13),wt=new Yt,xe=new St(new Ee(.25,.4,Pt*.3,6),A);xe.position.y=Pt*.15,wt.add(xe);for(let tn=0;tn<3;tn++){let Jn=new St(new Dn(Pt*(.32-tn*.07),Pt*.5,7),v);Jn.position.y=Pt*(.42+tn*.2),wt.add(Jn)}wt.position.set(Gt,0,ve),E.add(wt)}else{let Pt=new St(new mn(It(.8,2.6),0),Math.random()<.5?z:v);Pt.position.set(Gt,.3,ve),Pt.scale.y=It(.5,.9),Pt.rotation.y=Math.random()*3,E.add(Pt)}}}let T=new St(new So(9.5,64),new Se({map:sx(),roughness:.92,metalness:.02}));T.rotation.x=-Math.PI/2,g.add(T);let J=new St(new Bn(9.5,.18,8,96),new Se({color:4933206,roughness:.85}));J.rotation.x=Math.PI/2,J.position.y=.05,g.add(J);let V=new St(new Yi(9,9),new cn({map:zf("#a98bff"),transparent:!0,opacity:.38,blending:un,depthWrite:!1}));V.rotation.x=-Math.PI/2,V.position.y=.03,V.scale.x=-1,o.add(V);let Z=new Se({color:5919846,roughness:.9}),ut=Oo("rgba(255,170,80,1)","rgba(255,120,40,0)"),ot=[];for(let Q of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let vt=Q-Math.PI/2,gt=Math.cos(vt)*10.4,xt=Math.sin(vt)*10.4-1.5,Ht=new Yt,Bt=new St(new Ee(.42,.5,4.2,10),Z);Bt.position.y=2.1;let Gt=new St(new $e(1.2,.3,1.2),Z);Gt.position.y=4.35;let ve=new St(new Ee(.42,.22,.3,10),new Se({color:2959923,metalness:.6,roughness:.4}));ve.position.y=4.65;let Pt=new di(new ti({map:ut,color:16756832,blending:un,depthWrite:!1,transparent:!0}));Pt.position.y=5.05,Pt.scale.set(1.3,1.8,1);let wt=new mi(16751178,10,14,2);wt.position.y=5.1,Ht.add(Bt,Gt,ve,Pt,wt),Ht.position.set(gt,0,xt),g.add(Ht),ot.push({light:wt,flame:Pt,base:1,phase:Math.random()*10})}let pt=260,D=new Me,tt=new Float32Array(pt*3),W=new Float32Array(pt);for(let Q=0;Q<pt;Q++)tt[Q*3]=It(-14,14),tt[Q*3+1]=It(0,7),tt[Q*3+2]=It(-12,6),W[Q]=Math.random()*100;D.setAttribute("position",new Ie(tt,3));let O=new hr({size:.12,map:Oo(),transparent:!0,depthWrite:!1,blending:un,color:16777215,sizeAttenuation:!0});g.add(new ur(D,O));let G=Oo(),H=Oo("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),C=Oo("rgba(150,120,255,1)","rgba(120,80,255,0)"),I=new Map;function k(Q,vt){let gt=new Yt,xt=null,Ht=null,Bt=null,Gt=1.95;vt.svg?(Gt=4.6,Bt=new ti({transparent:!0,alphaTest:.05}),Ht=new di(Bt),Ht.center.set(.5,0),Ht.scale.set(Gt*1.33,Gt,1),ox(vt.svg,(xe,tn)=>{Bt.map=xe,Bt.needsUpdate=!0,Ht.scale.set(Gt*tn,Gt,1)}),gt.add(Ht)):(xt=_f(su(vt.character??"wizard"),Q==="me"?"me":Q.startsWith("ally:")?"ally":"opp",G,vt.staff),Gt=xt.height,gt.add(xt.root));let ve=new St(new Yi(Gt*.7,Gt*.32),new cn({map:H,transparent:!0,depthWrite:!1}));if(ve.rotation.x=-Math.PI/2,ve.position.y=.02,gt.add(ve),Q!=="me"){let xe=new St(new Yi(Gt*1.1,Gt*1.1),new cn({map:zf(Q==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:un,depthWrite:!1}));xe.rotation.x=-Math.PI/2,xe.position.y=.04,xe.name="circle",gt.add(xe)}let Pt=new di(new ti({map:C,blending:un,depthWrite:!1,transparent:!0,opacity:0}));Pt.scale.set(Gt*1.2,Gt*1.2,1),Pt.position.y=Gt*.5,gt.add(Pt),o.add(gt);let wt={key:Q,group:gt,model:xt,sprite:Ht,spriteMat:Bt,height:Gt,ko:!1,flame:null,aura:Pt,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100}};return I.set(Q,wt),wt}function $(){for(let Q of I.values())o.remove(Q.group),Q.group.traverse(vt=>{let gt=vt;gt.geometry?.dispose?.(),gt.material?.dispose?.()});I.clear()}let B=new Yt;a.add(B);let F=new R(1.08,-.52,-1.6),Y=new R(1.14,-.6,-1.6);B.scale.setScalar(.72);let nt=F.clone(),X=new Se({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),S=new Se({color:4020950,roughness:.9,flatShading:!0,side:Pe}),st=new Se({color:15778970,roughness:.75,flatShading:!0}),K=new Yt;B.add(K);let q=Ki("verdant",G),j="verdant";K.add(q.group);let it=new mi(q.color,.6,4,2);it.position.y=dr,K.add(it);function ct(Q){Q!==j&&(j=Q,K.remove(q.group),q.group.traverse(vt=>{vt.geometry?.dispose?.()}),q=Ki(Q,G),K.add(q.group),it.color.copy(q.color))}{let Q=(Ht,Bt,Gt,ve,Pt,wt)=>{let xe=new St(Ht,Bt);return xe.position.set(ve,Pt,wt),Gt.add(xe),xe},vt=Q(new Ur(.046,.075,4,10),st,K,.066,-.004,.014);vt.scale.set(.82,1,1.12),vt.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((Ht,Bt)=>{let Gt=.05-Bt*.002,ve=Q(new Bn(Gt,.019-Bt*.001,6,14,Math.PI*1.32),st,K,0,Ht,0);ve.rotation.x=-Math.PI/2;let Pt=Math.PI*1.32;Q(new He(.019-Bt*.001,6,5),st,K,Math.cos(Pt)*Gt,Ht,-Math.sin(Pt)*Gt)}),Q(new Ur(.021,.075,4,8),st,K,.022,.074,.05).rotation.set(.3,0,1.25);let xt=new Yt;xt.position.set(.09,-.08,.03),xt.rotation.set(-.55,0,.62),B.add(xt),Q(new Ee(.05,.062,.2,10),st,xt,0,-.08,0),Q(new Ee(.1,.16,.95,10,1,!0),S,xt,0,-.6,0),Q(new Bn(.1,.028,6,14),X,xt,0,-.14,0).rotation.x=Math.PI/2}let P=new mi(16777215,1.4,3,2);P.position.set(.3,.3,-.5),a.add(P);let w={wizard:{sleeve:3433416,skin:15916495},witch:{sleeve:8017597,skin:15654104},goblin:{sleeve:8015404,skin:8688447},knight:{sleeve:14077887,skin:14999246},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},N=-1e9,et="ready",lt=0,rt=900,Et=()=>{et==="gone"&&(et="growing",lt=performance.now())},Mt=0,dt=0,Lt=null,mt=!1,At={uTime:{value:0},uAmount:{value:0},uC0:{value:new zt},uC1:{value:new zt},uC2:{value:new zt},uC3:{value:new zt}},Vt=new St(new Yi(1,1),new qn({uniforms:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:un,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Vt.renderOrder=30,Vt.frustumCulled=!1,a.add(Vt);function Ot(){let vt=Math.tan(Us.degToRad(a.fov/2))*1.2,gt=vt*.55;Vt.scale.set(vt*a.aspect*2.05,gt,1),Vt.position.set(0,-vt+gt/2,-1.2)}function Rt(Q){let vt={h:0,s:0,l:0};Q.getHSL(vt),At.uC0.value.setHSL(vt.h,1,.82),At.uC1.value.setHSL(vt.h,1,.6),At.uC2.value.setHSL(vt.h,.95,.45),At.uC3.value.setHSL((vt.h+.03)%1,.9,.22)}let Ct=new R;function Wt(Q,vt="chest"){if(Q==="me")return vt==="staff"||vt==="head"?(q.gem.getWorldPosition(Ct),Ct.clone()):a.localToWorld(new R(It(-.15,.15),-.1,-1.4));let gt=I.get(Q);if(!gt)return new R(0,1.4,-3);if(gt.model&&vt==="staff")return gt.model.crystal.getWorldPosition(Ct),Ct.clone();let xt=gt.group.position.clone(),Ht=gt.height*gt.group.scale.y;return Q==="boss"&&vt==="mouth"?xt.add(new R(-gt.height*.55,gt.height*.62,.3)):xt.add(new R(0,Ht*(vt==="head"?.85:.6),0))}let ee=[],at=0;function Dt(Q,vt,gt={}){if(n&&at++&1)return;let xt=new di(new ti({map:G,color:vt,blending:gt.solid?Mi:un,depthWrite:!1,transparent:!0,opacity:gt.opacity??1}));xt.position.copy(Q),xt.scale.setScalar(gt.size??.25),o.add(xt),ee.push({sprite:xt,vel:gt.vel??new R,life:0,max:gt.life??.6,grow:gt.grow??0,gravity:gt.gravity??0})}function bt(Q,vt,gt=26,xt=3.2,Ht=.22){for(let Bt=0;Bt<gt;Bt++){let Gt=new R(It(-1,1),It(-.6,1.2),It(-1,1)).normalize().multiplyScalar(It(xt*.4,xt));Dt(Q,vt,{vel:Gt,size:It(Ht*.6,Ht*1.4),life:It(.4,.9),gravity:-3})}Dt(Q,vt,{size:.6,grow:6,life:.35,opacity:.9})}function Tt(Q,vt,gt=1){let xt=Q.group.position,Ht=Q.model?.45:Q.height*.35;for(let Bt=0;Bt<gt;Bt++){let Gt=Q.group.scale.y;Dt(new R(xt.x+It(-Ht,Ht)*Gt,xt.y+It(.05,Q.height*.45)*Gt,xt.z+It(-Ht,Ht)*.5*Gt),vt,{size:It(.35,.7)*Gt,vel:new R(It(-.1,.1),It(1.4,2.6),0),life:It(.35,.65),grow:-.9,opacity:.75,solid:!0}),Dt(new R(xt.x+It(-Ht,Ht)*.6*Gt,xt.y+It(.05,Q.height*.35)*Gt,xt.z),vt,{size:It(.3,.5)*Gt,vel:new R(0,It(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Dt(new R(xt.x+It(-Ht,Ht)*Gt,xt.y+It(.2,Q.height*.9)*Gt,xt.z),16777215,{size:It(.05,.1)*Gt,vel:new R(0,It(1.5,3),0),life:.5})}}let Xt=[];function $t(Q){for(let gt=0;gt<2;gt++){let xt=[],Ht=Q.clone().add(new R(It(-1.5,1.5),9,It(-1,1)));for(let Gt=0;Gt<=12;Gt++){let ve=Ht.clone().lerp(Q,Gt/12);Gt>0&&Gt<12&&ve.add(new R(It(-.45,.45),It(-.2,.2),It(-.3,.3))),xt.push(ve)}let Bt=new Qa(new Me().setFromPoints(xt),new vo({color:gt?16777215:10475775,transparent:!0,blending:un,depthWrite:!1}));o.add(Bt),Xt.push({line:Bt,life:0});for(let Gt=0;Gt<xt.length-1;Gt++){let ve=xt[Gt].distanceTo(xt[Gt+1]);for(let Pt=0;Pt<ve;Pt+=.09)Dt(xt[Gt].clone().lerp(xt[Gt+1],Pt/ve),gt?16777215:9425151,{size:gt?.12:.3,life:.28,opacity:gt?1:.7})}}let vt=new mi(12576511,60,16,2);vt.position.copy(Q).add(new R(0,2,1)),o.add(vt),setTimeout(()=>o.remove(vt),160),bt(Q,12576511,30,4,.18)}let de=[];function ze(Q,vt,gt="#ffd479"){let xt=new di(new ti({map:rx(vt,gt),transparent:!0,depthWrite:!1,depthTest:!1}));xt.position.copy(Wt(Q,"head")).add(new R(It(-.3,.3),.4,.3));let Ht=Q==="me"?.9:1.3;xt.scale.set(Ht,Ht/2,1),xt.renderOrder=10,o.add(xt),de.push({sprite:xt,life:0})}let Je=document.createElement("div");Je.className="arena3d-hit",document.body.append(Je);function ye(Q="255,40,60",vt=""){Je.style.setProperty("--hit",Q),Je.className="arena3d-hit",Je.offsetWidth,Je.className=`arena3d-hit on ${vt}`}let je=0,zn=Q=>{nx()||(je=Math.max(je,Q))},Pi=[];function Bo(Q,vt,gt,xt,Ht,Bt){let{tex:Gt,aspect:ve}=ix(gt,xt),Pt=new di(new ti({map:Gt,transparent:!0,depthWrite:!1}));Pt.scale.set(Ht*ve*.4,Ht*.4,1),Pt.position.copy(Q),Pt.renderOrder=5,o.add(Pt);let wt=Q.clone().lerp(vt,.5).add(new R(It(-.6,.6),1.2+Q.distanceTo(vt)*.08,0));return new Promise(xe=>Pi.push({sprite:Pt,from:Q,to:vt,mid:wt,t:0,dur:Bt,color:new zt(xt),size:Ht,done:xe,trailAt:0}))}let Yn="battle",yr="",qr="",De=null,Ii=[],si=new Zi(16777215,1);si.visible=!1,o.add(si,si.target);let Yr=(Q,vt)=>new R(Q[0],Q[2]-vt,-Q[1]);function ko(Q,vt){De&&(o.remove(De.group),De.dispose(),De=null);for(let gt of Ii)o.remove(gt);Ii.length=0;try{De=kf(Q,vt,n)}catch(gt){console.warn("3D arena failed, using the classic one",gt),De=null}if(g.visible=!De,V.position.y=De?.1:.03,si.visible=!!De,!De){qr="";return}De.group.rotation.x=-Math.PI/2,De.group.position.y=-De.floor,o.add(De.group),De.group.traverse(gt=>{gt.name==="centre-pattern"&&(gt.visible=!1)});for(let gt of n?De.lights.slice(0,2):De.lights){let xt=new mi(new zt(...gt.color),gt.intensity*8,gt.dist,2);xt.position.copy(Yr(gt.pos,De.floor)),xt.userData.base=xt.intensity,xt.userData.flicker=gt.flicker??0,o.add(xt),Ii.push(xt)}}function zo(Q){let vt=Q.key.dir;si.color.setRGB(...Q.key.color),si.intensity=Q.key.intensity*.35,si.position.set(vt[0]*50,vt[2]*50,-vt[1]*50),si.target.position.set(0,0,0),h.color.setRGB(...Q.ambient.sky),h.groundColor.setRGB(...Q.ambient.ground),h.intensity=Q.ambient.intensity,u.intensity=0,m.intensity*=.45,d.intensity*=.5;let gt=o.fog;gt.color.setRGB(...Q.fog.color),gt.near=Q.fog.near,gt.far=Q.fog.far,e.setClearColor(gt.color)}let Xs=0,Li=0,Zr=0,U=new bn,ht=new bn,_t=!1,yt=!1,ft=new zt(16777215),Nt=null;function Zt(Q,vt){let gt=c.z-vt,xt=Math.tan(Us.degToRad(a.fov/2))*gt;return Q*xt*a.aspect}function Jt(){if(!Nt)return;let Q=Nt,vt=I.get("opp");vt?.model&&vt.group.scale.setScalar(1.3),vt&&vt.group.position.set(Zt(a.aspect<1?.08:Q.layout==="deck"?.36:.46,-2.2),0,-2.2);let gt=I.get("boss");gt&&gt.group.position.set(Zt(a.aspect<1?.15:.5,-5.5),0,-5.5),Q.allies.forEach((Ht,Bt)=>{let Gt=I.get(`ally:${Ht.id}`);Gt&&Gt.group.position.set(Zt(-.36+Bt*.13,-.6-Bt*1.1),0,-.6-Bt*1.1)});let xt=(gt??vt)?.group.position;for(let[Ht,Bt]of I){if(!Bt.model)continue;let Gt=Ht==="opp"?c:xt??new R(0,0,-3);Bt.model.root.rotation.y=Math.atan2(Gt.x-Bt.group.position.x,Gt.z-Bt.group.position.z)}}function jt(Q){Nt=Q,Yn=Q.layout,$();let vt=w[su(Q.me.character??"wizard")]??w.wizard;S.color.set(vt.sleeve),st.color.set(vt.skin),st.metalness=Q.me.character==="knight"?.12:0,Vn(),ct(Q.me.staff??"verdant"),mt=!1,B.visible=!0,et="ready",Lt=null,At.uAmount.value=0,Vt.visible=!1,Q.opp&&k("opp",Q.opp),Q.boss&&k("boss",Q.boss);for(let xt of Q.allies)k(`ally:${xt.id}`,xt);Jt();let gt=cx[Q.time];h.color.set(gt.sky),h.groundColor.set(gt.ground),h.intensity=gt.hemi*1.25,m.intensity=Q.time==="night"?1.3:Q.time==="sunset"?1:.7,u.color.set(gt.sun),u.intensity=gt.sunInt,u.position.set(...gt.sunPos),d.intensity=Q.time==="night"?9:5;for(let xt of ot)xt.base=gt.torch;O.color.set(gt.motes),ft=new zt(gt.spriteTint),yr!==Q.bgKey&&(yr=Q.bgKey,ko(Q.bgKey.split("-")[0],Q.time)),De?zo(De):qr!==Q.bgKey&&(qr=Q.bgKey,o.fog.near=20,o.fog.far=58,M(Q.bgKey.split("-")[0]),ax(Q.bgSvg,(xt,Ht,Bt)=>{_.map?.dispose(),_.map=xt,_.needsUpdate=!0,o.fog.color.copy(Ht).lerp(Bt,.35),p.color.copy(Ht).multiplyScalar(.9),x.color.copy(Ht).lerp(new zt(5212730),.45).multiplyScalar(1.15),v.color.copy(Ht).lerp(new zt(1522212),.5),e.setClearColor(Bt)}))}let oe=new Ut,ie=new Ut,te=.32,Re=.13,le={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},Ge=Q=>{Q.pointerType!=="mouse"||Q.buttons||Q.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||oe.set(Q.clientX/innerWidth*2-1,Q.clientY/innerHeight*2-1)};addEventListener("pointermove",Ge,{passive:!0});let sn={base:null,x:0,y:0,at:0},Ce=Q=>(Q+540)%360-180,ne=Q=>{if(Q.alpha===null||Q.beta===null||Q.gamma===null||!Zs)return;let vt=(screen.orientation?.angle??window.orientation??0)%360,gt=vt===90?-Q.beta:vt===270||vt===-90?Q.beta:Q.gamma,xt=vt===90?Q.gamma:vt===270||vt===-90?-Q.gamma:Q.beta,Ht=performance.now();(!sn.base||Ht-sn.at>1500)&&(sn.base={a:Q.alpha,x:gt,y:xt});let Bt=sn.base,Gt=Math.min(1,(Ht-sn.at)/9e3);sn.at=Ht,Bt.a+=Ce(Q.alpha-Bt.a)*Gt,Bt.x+=(gt-Bt.x)*Gt,Bt.y+=(xt-Bt.y)*Gt;let ve=-Ce(Q.alpha-Bt.a)/22+(gt-Bt.x)/26,Pt=-(xt-Bt.y)/30;oe.set(Math.max(-1,Math.min(1,ve)),Math.max(-1,Math.min(1,Pt)))},hn=matchMedia("(pointer: coarse)").matches&&"DeviceOrientationEvent"in window,we=()=>{removeEventListener("touchend",we);let Q=DeviceOrientationEvent;Q.requestPermission&&Q.requestPermission().then(vt=>{vt==="granted"&&addEventListener("deviceorientation",ne)}).catch(()=>{})};hn&&(DeviceOrientationEvent.requestPermission?addEventListener("touchend",we,{passive:!0}):addEventListener("deviceorientation",ne));function Vn(){let Q=Yn==="deck"?Y:F,vt=Yn==="deck"?.56:.72;if(a.aspect>=1.2){nt.copy(Q),B.scale.setScalar(vt);return}let gt=Math.tan(Us.degToRad(a.fov/2))*-Q.z,xt=gt*a.aspect;nt.set(xt*.78,-gt*.62,Q.z),B.scale.setScalar(vt*Math.max(.5,Math.min(1,a.aspect*.9)))}function Gn(){let Q=i.clientWidth||innerWidth,vt=i.clientHeight||innerHeight;e.setSize(Q,vt,!1),a.aspect=Q/vt,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),Jt(),Ot(),Vn()}addEventListener("resize",Gn);let Rn=0,$r=0,Xe=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!Zs||i.clientWidth===Rn&&i.clientHeight===$r||(Rn=i.clientWidth,$r=i.clientHeight,Gn())}):null;Xe?.observe(i);let _i=new zt(6974072),qs=new zt(16722474),Hn=new zt(9428223),Ys=new zt(2784511),Vo=new zt(16738842);function Go(Q,vt){let gt=vt<Q.hurtUntil,xt=vt<Q.frostUntil,Ht=vt<Q.burnUntil;if(Q.model&&Q.ko){for(let Bt of Q.model.materials)Bt.mat.color.copy(Bt.color).lerp(_i,.55),Bt.mat.emissive.setRGB(0,0,0);return}if(Q.model){if(xt!==Q.frosted){Q.frosted=xt;for(let Bt of Q.model.materials)Bt.mat.opacity=xt?.5:1,Bt.mat.depthWrite=!xt}for(let Bt of Q.model.materials)Bt.mat.color.copy(Bt.color),xt&&Bt.mat.color.lerp(Hn,.75),gt?(Bt.mat.emissive.copy(qs),Bt.mat.emissiveIntensity=.6):xt?(Bt.mat.emissive.copy(Ys),Bt.mat.emissiveIntensity=.45):Ht?(Bt.mat.color.lerp(Vo,.35),Bt.mat.emissive.copy(Vo),Bt.mat.emissiveIntensity=.55+.3*Math.sin(vt/40)):(Bt.mat.emissive.copy(Bt.emissive),Bt.mat.emissiveIntensity=1)}else Q.spriteMat&&(Q.spriteMat.color.copy(gt?new zt(1,.35,.35):xt?Hn:Ht?new zt(1,.7,.5):ft),Q.spriteMat.opacity=xt?.6:Q.ko?Q.spriteMat.opacity:1)}let Zs=!1,Ec=0,Wo=performance.now(),Qe=0,Xo=0,$s=0,wc=0;function Vf(Q){if(r||document.hidden)return;if(wc<45){wc++;return}if(Xo++,$s+=Q,$s<2500)return;let vt=Xo*1e3/$s;Xo=0,$s=0,!(vt>=(n?22:34))&&(n?(r=!0,e.setPixelRatio(s()),Gn()):qo.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(vt),lowRes:r}})))}function gu(Q){Ec=requestAnimationFrame(gu),Vf(Q-Wo);let vt=Math.min(1,Math.max(0,(Q-Wo)/1e3)),gt=Math.min(.05,vt);Wo=Q,Qe+=gt;let xt=performance.now(),Ht=!1;ie.lerp(oe,Ht?1:.05);let Bt=Ht?0:Math.sin(Qe*.7)*.025;if(n)a.position.set(c.x+ie.x*.12,c.y-ie.y*.05+Bt,c.z),a.lookAt(l.clone().add(new R(ie.x*1.5,-ie.y*.75,0))),le.yaw=0,le.pitch=0;else{le.yaw=-ie.x*te,le.pitch=-ie.y*Re,a.position.set(c.x,c.y+Bt,c.z);let Pt=l.clone().sub(c).applyAxisAngle(new R(0,1,0),le.yaw),wt=Pt.clone().cross(new R(0,1,0)).normalize();Pt.applyAxisAngle(wt,le.pitch),a.lookAt(c.clone().add(Pt))}Zs&&Nt&&(Nt.opp||Nt.allies.length)&&Q-le.sentAt>150&&(Math.abs(le.yaw-le.sentYaw)>.02||Math.abs(le.pitch-le.sentPitch)>.02)&&(le.sentAt=Q,le.sentYaw=le.yaw,le.sentPitch=le.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+le.yaw.toFixed(3),pitch:+le.pitch.toFixed(3)}}))),je>0&&(a.position.add(new R(It(-1,1),It(-1,1),0).multiplyScalar(je)),a.rotation.z+=It(-1,1)*je*.15,je=Math.max(0,je-gt*1.1)),Li+=(Xs-Li)*Math.min(1,gt*6),Zr=Math.max(0,Zr-gt*2.2),U.x+=(ht.x-U.x)*Math.min(1,gt*14),U.y+=(ht.y-U.y)*Math.min(1,gt*14),U.z+=(ht.z-U.z)*Math.min(1,gt*14),Zr<=0&&ht.set(0,0,0);let Gt=.5+.5*Math.sin(Qe*6);{let Pt=Math.max(0,1-(xt-N)/380),wt=Pt>0?Math.sin(Pt*Math.PI):0,xe=Math.min(1,Li);Mt+=((xe>.05&&!Ht?Math.min(1,.5+xe*.6):0)-Mt)*Math.min(1,gt*3),dt+=gt*(2.6+xe*1.4);let tn=Math.sin(dt),Jn=Math.sin(dt*2)/2;B.position.set(nt.x-ie.x*.04+tn*.06*Mt,nt.y+ie.y*.03+(Ht?0:Math.sin(Qe*1.6)*.008)+xe*.03+Jn*.11*Mt,nt.z-wt*.35),K.rotation.set(xe*.25-wt*.75+U.x*.3+Jn*.18*Mt,U.y*.3,.2-tn*.24*Mt+U.z*.3);let _n=et==="ready"?1:0;if(et==="growing"){let he=Math.min(1,(xt-lt)/rt);if(_n=he*he*(3-2*he),he>=1)et="ready";else if(!Ht){q.gem.getWorldPosition(Ct);for(let Ue=0;Ue<2;Ue++){let jn=Ct.clone().add(new R(It(-.4,.4),It(-.4,.4),It(-.4,.4)));Dt(jn,q.color,{size:It(.025,.06),vel:Ct.clone().sub(jn).multiplyScalar(2.8),life:.36})}}}if(q.gem.scale.setScalar(_n),q.gemMat.emissiveIntensity=.7+xe*(1.6+Gt*1.2)+wt*3,it.intensity=(.5+xe*4+wt*6)*_n,q.glow.scale.setScalar((.3+xe*(.32+Gt*.18)+wt*.6)*_n),q.glow.material.opacity=.3+xe*.35,q.gem.rotation.y+=gt*(.8+xe*6),q.update(Qe,gt,xe),_n>.9&&!Ht&&B.visible&&(q.gem.getWorldPosition(Ct),Mt>.25&&Dt(Ct.clone(),q.color,{size:It(.03,.05),life:.55,opacity:.9}),xe>.2&&Math.random()<xe*.8)){let he=Ct.clone().add(new R(It(-.35,.35),It(-.35,.35),It(-.35,.35)));Dt(he,q.color.clone().lerp(new zt(16777215),.4),{size:It(.02,.05),vel:Ct.clone().sub(he).multiplyScalar(2.6),life:.38})}if(Lt&&!Ht&&B.visible)for(let he=0;he<2;he++){let Ue=K.localToWorld(new R(It(-.05,.05),It(-.15,1.3),It(-.05,.05)));Dt(Ue,Lt,{size:It(.05,.12),vel:new R(It(-.05,.05),It(.35,.8),0),life:It(.25,.45),solid:Math.random()<.4,opacity:.9})}At.uTime.value=Ht?0:Qe,At.uAmount.value+=((Lt&&B.visible?1:0)-At.uAmount.value)*Math.min(1,vt*3),Vt.visible=At.uAmount.value>.01}for(let[Pt,wt]of I){let xe=wt.group.getObjectByName("circle");if(xe&&(xe.rotation.z+=gt*.4),Go(wt,xt),wt.ko)continue;let tn=Math.max(0,wt.lungeUntil-xt)/450;if(wt.model){let he=wt.model;he.body.position.y=Ht?0:Math.sin(Qe*2+wt.height*3)*.02;let Ue=wt.look,jn=xt-Ue.at>4e3,Kr=jn?.22*Math.sin(Qe*.31+Ue.seed)*Math.sin(Qe*.13+Ue.seed*2):Ue.yaw,Sc=jn?.06*Math.sin(Qe*.23+Ue.seed*3):Ue.pitch;Ue.curYaw+=(Kr-Ue.curYaw)*Math.min(1,gt*7),Ue.curPitch+=(Sc-Ue.curPitch)*Math.min(1,gt*7),he.head.rotation.set(-Ue.curPitch*.8,Ue.curYaw*.7,0),he.body.rotation.y=Ue.curYaw*.3;let xr=1-tn,Mr=tn<=0?0:xr<.18?-.35*(xr/.18):xr<.4?-.35+1.35*((xr-.18)/.22):1-((xr-.4)/.6)**2;he.body.rotation.x=Math.max(0,Mr)*.2,he.staffPivot.rotation.x=Mr*1.9;let Di=Pt==="me"?Li:(Pt==="opp"||Pt.startsWith("ally:"))&&_t?Yn==="deck"?.7:.45:0,Ks=Pt==="me"?0:Di*(1-Math.max(0,Mr)),Wf=-.15-Di*.75-Math.max(0,Mr)*.9+(Pt==="me"?U.x:0)+Math.sin(Qe*4.4)*.22*Ks;he.arm.rotation.x+=(Wf-he.arm.rotation.x)*Math.min(1,gt*10),he.arm.rotation.z=-.35+(Pt==="me"?U.z:0)+Math.sin(Qe*2.2)*.32*Ks,he.arm.rotation.y=Pt==="me"?U.y:0;let br=Pt==="me"?Li:Di;he.crystalMat.emissiveIntensity=1.2+br*(3+Gt*2)+tn*3,he.glow.scale.setScalar(.45+br*(.5+Gt*.3)+tn*.6),he.glow.material.opacity=.45+br*.5,he.crystal.rotation.y+=gt*(.8+br*6),he.staff.update(Qe,gt,br),br>.5&&Math.random()<br*.6&&(he.crystal.getWorldPosition(Ct),Dt(Ct.clone().add(new R(It(-.1,.1),It(-.1,.1),It(-.1,.1))),he.staff.color.getHex(),{size:It(.03,.08),vel:new R(It(-.2,.2),It(.2,.6),0),life:.7}))}else wt.sprite&&(wt.sprite.position.y=Ht?0:Math.abs(Math.sin(Qe*2))*.05,wt.sprite.position.z=tn*.4);let Jn=Pt==="opp"&&_t&&Yn==="deck"||Pt==="boss"&&yt,_n=wt.aura.material;if(_n.opacity+=((Jn?.55+.2*Math.sin(Qe*5):wt.flame?.35:0)-_n.opacity)*Math.min(1,gt*5),_n.color.copy(Pt==="boss"?new zt(16742954):wt.flame??new zt(11832575)),wt.flame&&Tt(wt,wt.flame,2),xt<wt.burnUntil&&Tt(wt,Math.random()<.5?16734746:16756784,3),xt<wt.frostUntil&&Math.random()<.3&&Tt(wt,13628159,1),Pt==="boss"&&yt&&Math.random()<.8){let he=Wt("boss","mouth"),Ue=he.clone().add(new R(It(-1.5,1.5),It(-1,1),It(-1,1)));Dt(Ue,16751162,{size:.12,vel:he.clone().sub(Ue).multiplyScalar(1.6),life:.55})}}for(let Pt of ot){let wt=.85+.15*Math.sin(Qe*9+Pt.phase)+.08*Math.sin(Qe*23+Pt.phase*2);Pt.light.intensity=Pt.base*wt,Pt.flame.scale.set(1.2*wt,1.8*(.9+.2*wt),1)}if(V.rotation.z+=gt*.05,De){De.update(Qe*30);for(let Pt of Ii)Pt.userData.flicker&&(Pt.intensity=Pt.userData.base*(1-Pt.userData.flicker*(.5+.5*Math.sin(Qe*9+Pt.position.x)*Math.sin(Qe*23+Pt.position.z))))}let ve=D.attributes.position;for(let Pt=0;Pt<pt;Pt++){let wt=ve.getY(Pt)+gt*(.12+W[Pt]%1*.2);wt>7.5&&(wt=0),ve.setY(Pt,wt),ve.setX(Pt,ve.getX(Pt)+Math.sin(Qe*.5+W[Pt])*gt*.15)}ve.needsUpdate=!0,O.opacity=.55+.35*Math.sin(Qe*1.3);for(let Pt=Pi.length-1;Pt>=0;Pt--){let wt=Pi[Pt];wt.t+=gt/wt.dur;let xe=Math.min(1,wt.t),tn=xe*xe*(1.6-.6*xe),Jn=wt.from.clone().lerp(wt.mid,tn),_n=wt.mid.clone().lerp(wt.to,tn);wt.sprite.position.copy(Jn.lerp(_n,tn)),wt.gem&&(wt.gem.position.copy(wt.sprite.position),wt.gem.rotation.y+=gt*12,wt.gem.rotation.x+=gt*7);let he=.55+tn*.8,Ue=wt.sprite.material,jn=Ue.map?.image,Kr=jn?jn.width/jn.height:1;wt.sprite.scale.set(wt.size*Kr*.4*he,wt.size*.4*he,1),wt.trailAt-=gt,wt.trailAt<=0&&!Ht&&(wt.trailAt=.016,Dt(wt.sprite.position,wt.color,{size:It(.05,.13)*wt.size,life:.35,opacity:.8,vel:new R(It(-.3,.3),It(-.3,.3),It(-.3,.3))})),xe>=1&&(o.remove(wt.sprite),Ue.map?.dispose(),Ue.dispose(),wt.gem&&o.remove(wt.gem),Pi.splice(Pt,1),wt.done())}for(let Pt=ee.length-1;Pt>=0;Pt--){let wt=ee[Pt];if(wt.life+=gt,wt.life>=wt.max){o.remove(wt.sprite),wt.sprite.material.dispose(),ee.splice(Pt,1);continue}wt.vel.y+=wt.gravity*gt,wt.sprite.position.addScaledVector(wt.vel,gt),wt.grow&&wt.sprite.scale.multiplyScalar(1+wt.grow*gt),wt.sprite.material.opacity=1-wt.life/wt.max}for(let Pt=Xt.length-1;Pt>=0;Pt--){let wt=Xt[Pt];wt.life+=gt,wt.line.material.opacity=wt.life<.08||wt.life>.14&&wt.life<.2?1:.15,wt.life>.32&&(o.remove(wt.line),wt.line.geometry.dispose(),wt.line.material.dispose(),Xt.splice(Pt,1))}for(let Pt=de.length-1;Pt>=0;Pt--){let wt=de[Pt];wt.life+=gt,wt.sprite.position.y+=gt*.8,wt.sprite.material.opacity=Math.min(1,2.2-wt.life*2),wt.life>1.1&&(o.remove(wt.sprite),wt.sprite.material.map?.dispose(),wt.sprite.material.dispose(),de.splice(Pt,1))}e.render(o,a)}function Gf(Q,vt,gt){let xt=I.get(Q),Ht=performance.now();vt==="bolt"&&($t(xt?Wt(Q,"head"):gt),Q==="me"&&ye("190,230,255","bolt")),vt==="frost"&&(xt&&(xt.frostUntil=Ht+1100),bt(gt,13628159,30,2.5,.16),Q==="me"&&ye("140,210,255","frost")),vt==="fire"&&(xt&&(xt.burnUntil=Ht+1100),bt(gt,16742954,36,3.4,.24),Q==="me"&&ye("255,120,30","fire"))}let qo={setup:jt,setActive(Q){Q!==Zs&&(Zs=Q,i.classList.toggle("on",Q),Q?(Gn(),Wo=performance.now(),wc=0,Xo=0,$s=0,Ec=requestAnimationFrame(gu)):cancelAnimationFrame(Ec))},async cast(Q,vt,gt,xt={}){let Ht=xt.kind??"attack",Bt=Q==="me"||Q.startsWith("ally:"),Gt=Ht==="heal"?"#5dffa8":Ht==="mana"?"#ffd479":xt.fx==="bolt"?"#bfe6ff":xt.fx==="frost"?"#8fdcff":xt.fx==="fire"?"#ff8a3a":Bt?"#a98bff":"#ff6b6b",ve=I.get(Q);if(ve&&(ve.lungeUntil=performance.now()+450),Q==="me"&&(Li=0,Xs=0),Ht!=="attack"){if(Q==="me"&&et!=="gone"&&B.visible){N=performance.now(),et="gone";let he=new St(q.gem.geometry,q.gemMat),Ue=Wt("me","staff"),jn=Wt("me","chest"),Kr=Ue.clone().lerp(jn,.5).add(new R(0,.35,0));he.position.copy(Ue),he.scale.setScalar(1.3),o.add(he);let Sc=performance.now();await new Promise(xr=>{let Mr=()=>{let Di=Math.min(1,(performance.now()-Sc)/520),Ks=Ue.clone().lerp(Kr,Di).lerp(Kr.clone().lerp(jn,Di),Di);he.position.copy(Ks),he.rotation.y+=.3,he.scale.setScalar(1.3*(1-Di*.7)),Math.random()<.8&&Dt(Ks.clone(),Gt,{size:It(.03,.07),life:.35,opacity:.9}),Di<1?requestAnimationFrame(Mr):(o.remove(he),xr())};Mr()})}let _n=Wt(Q);for(let he=0;he<30;he++)Dt(_n.clone().add(new R(It(-.5,.5),It(-.8,.2),It(-.3,.3))),Gt,{size:It(.08,.2),vel:new R(It(-.2,.2),It(.8,1.8),0),life:It(.6,1.1)});Q==="me"&&ye(Ht==="heal"?"80,255,160":"255,212,121"),xt.damage&&ze(Q,`+${xt.damage}`,Gt);return}let Pt=Wt(Q,Q==="boss"?"mouth":"staff"),wt=Wt(vt,"chest"),xe=(xt.crit?1.5:1)*1.15,tn=Bo(Pt,wt,gt,Gt,xe,.85);if(Q==="me"){N=performance.now(),et="gone";let _n=new St(q.gem.geometry,q.gemMat);_n.scale.setScalar(1.5),_n.position.copy(Pt),o.add(_n),Pi[Pi.length-1].gem=_n}await tn,bt(wt,Gt,xt.crit?46:28,xt.crit?4.4:3.2,.2);let Jn=I.get(vt);Jn&&(Jn.hurtUntil=performance.now()+450),Gf(vt,xt.fx,wt),vt==="me"?(xt.fx||ye(),zn(xt.crit?.16:.09)):zn(xt.crit?.07:.035),xt.damage&&ze(vt,`\u2212${xt.damage}${xt.crit?"!":""}`,vt==="me"?"#ff6b81":xt.crit?"#ff9a3a":"#ffd479")},fizzle(Q){let vt=Wt(Q,Q==="boss"?"head":"staff");if(Q!=="me")for(let gt=0;gt<14;gt++)Dt(vt,10132136,{size:It(.1,.25),vel:new R(It(-.6,.6),It(.3,1),It(-.3,.3)),life:.8,opacity:.6});if(Q==="me"){if(Li=0,et!=="gone"&&B.visible){q.gem.getWorldPosition(Ct);for(let gt=0;gt<16;gt++)Dt(Ct.clone(),Math.random()<.5?q.color:10132136,{size:It(.02,.05),vel:new R(It(-.8,.8),It(-.2,.9),It(-.5,.5)),life:It(.4,.7),gravity:-2.5})}et="gone"}},ko(Q){if(Q==="me"){if(mt)return;mt=!0,Lt=null,q.gem.getWorldPosition(Ct),bt(Ct.clone(),10132136,18,1.6,.1),B.visible=!1;return}let vt=I.get(Q);if(!vt||vt.ko)return;vt.ko=!0,vt.flame=null,vt.aura.material.opacity=0;let gt=performance.now(),xt=()=>{let Ht=Math.min(1,(performance.now()-gt)/700),Bt=Ht*Ht;vt.model?(vt.model.root.rotation.z=Math.PI/2*Bt,vt.model.root.position.y=.24*Bt):vt.spriteMat&&(vt.spriteMat.rotation=Math.PI/2*Ht*-1,vt.spriteMat.opacity=1-Ht*.6),Ht<1&&requestAnimationFrame(xt)};xt(),bt(Wt(Q),16777215,40,3,.25)},onfire(Q,vt,gt){if(Q==="me"){Lt=vt&&!mt?new zt(gt??"#6ee7ff"):null,Lt&&Rt(Lt);return}let xt=I.get(Q);xt&&(xt.flame=vt?new zt(gt??"#6ee7ff"):null)},channel(Q){Xs=Math.max(0,Math.min(1,Q))},twitch(){Et(),Zr=.35,ht.set(It(-.35,.25),It(-.25,.25),It(-.3,.3)),Math.random()<.6&&et==="ready"&&(q.gem.getWorldPosition(Ct),Dt(Ct.clone(),q.color.clone().lerp(new zt(16777215),.5),{size:It(.04,.09),vel:new R(It(-.6,.6),It(.2,.9),It(-.3,.3)),life:.5}))},thrust(){N=performance.now(),q.gem.getWorldPosition(Ct),bt(Ct.clone(),q.color,18,1.6,.08)},oppChannel(Q){_t=Q},inhale(Q){yt=Q},breath(Q,vt){yt=!1;let gt=Wt("boss","mouth");for(let xt=0;xt<160;xt++)setTimeout(()=>{let Bt=(Q.length?Wt(Q[xt%Q.length]):a.localToWorld(new R(0,-.2,-1))).clone().add(new R(It(-1.5,1.5),It(-.8,.8),0)).sub(gt).normalize().multiplyScalar(It(7,11));Dt(gt,Math.random()<.4?16765530:16734746,{size:It(.3,.7),vel:Bt,life:It(.6,.9),grow:1.2})},xt*5);setTimeout(()=>{for(let xt of Q){let Ht=I.get(xt);Ht&&(Ht.hurtUntil=performance.now()+500,Ht.burnUntil=performance.now()+900),ze(xt,`\u2212${vt}`,"#ff9a3a")}Q.includes("me")&&(ye("255,120,30"),zn(.16))},450)},claw(Q,vt){let gt=I.get("boss");gt&&(gt.lungeUntil=performance.now()+450),setTimeout(()=>{let xt=I.get(Q);xt&&(xt.hurtUntil=performance.now()+450),Q==="me"&&(ye("255,40,60","claw"),zn(.13)),ze(Q,`\u2212${vt}`,"#ff6b81")},200)},float:ze,look(Q,vt,gt){let xt=I.get(Q);!xt||!Number.isFinite(vt)||!Number.isFinite(gt)||(xt.look.yaw=Math.max(-te,Math.min(te,vt)),xt.look.pitch=Math.max(-Re,Math.min(Re,gt)),xt.look.at=performance.now())},setLite(Q){let vt=n!==Q;n=Q,vt&&De&&Nt&&(yr="",jt(Nt)),e.setPixelRatio(s()),L.count=Q?900:b,D.setDrawRange(0,Q?90:pt),Gn()},dispose(){qo.setActive(!1),Xe?.disconnect(),removeEventListener("pointermove",Ge),removeEventListener("deviceorientation",ne),removeEventListener("touchend",we),removeEventListener("resize",Gn),Je.remove(),De&&(De.dispose(),De=null),e.dispose()}};n&&qo.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return q},get gemState(){return et},scene:o,camera:a,renderer:e}),Gn();try{e.compile(o,a)}catch{}return qo}globalThis.KWArena3D=hx;globalThis.KWStaffPreview=yf;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
