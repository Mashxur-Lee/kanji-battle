"use strict";(()=>{var Bf=Object.defineProperty;var kf=(i,t,e)=>t in i?Bf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ye=(i,t,e)=>kf(i,typeof t!="symbol"?t+"":t,e);var zf=0,uu=1,Vf=2;var b0=1,Gf=2,Fi=3,Ln=0,zn=1,Ie=2,cr=0,xi=1,ln=2,fu=3,du=4,Wf=5,Ir=100,Xf=101,qf=102,Yf=103,Zf=104,$f=200,Kf=201,Jf=202,jf=203,nl=204,il=205,Qf=206,td=207,ed=208,nd=209,id=210,rd=211,sd=212,od=213,ad=214,rl=0,sl=1,ol=2,bs=3,al=4,cl=5,ll=6,hl=7,Rh=0,Ch=1,cd=2,lr=0,ld=1,hd=2,ud=3,Po=4,fd=5,dd=6,pd=7;var v0=300,vs=301,Es=302,mo=303,ul=304,nc=306,Ur=1e3,Bi=1001,fl=1002,En=1003,md=1004;var Vo=1005;var ci=1006,Mc=1007;var Dr=1008;var zi=1009,E0=1010,w0=1011,go=1012,Ph=1013,Nr=1014,yi=1015,Io=1016,Ih=1017,Lh=1018,ws=1020,S0=35902,T0=1021,A0=1022,hi=1023,R0=1024,C0=1025,ys=1026,Ss=1027,Dh=1028,Uh=1029,P0=1030,Nh=1031;var Hh=1033,ba=33776,va=33777,Ea=33778,wa=33779,dl=35840,pl=35841,ml=35842,gl=35843,_l=36196,yl=37492,xl=37496,Ml=37808,bl=37809,vl=37810,El=37811,wl=37812,Sl=37813,Tl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Il=37819,Ll=37820,Dl=37821,Sa=36492,Ul=36494,Nl=36495,I0=36283,Hl=36284,Fl=36285,Ol=36286;var Aa=2300,Bl=2301,bc=2302,pu=2400,mu=2401,gu=2402;var gd=3200,_d=3201;var Fh=0,yd=1,or="",tn="srgb",dr="srgb-linear",Oh="display-p3",ic="display-p3-linear",Ra="linear",Ge="srgb",Ca="rec709",Pa="p3";var Jr=7680;var _u=519,xd=512,Md=513,bd=514,L0=515,vd=516,Ed=517,wd=518,Sd=519,kl=35044;var yu="300 es",ki=2e3,Ia=2001,hr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=1234567,co=Math.PI/180,_o=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function xn(i,t,e){return Math.max(t,Math.min(e,i))}function Bh(i,t){return(i%t+t)%t}function Td(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Ad(i,t,e){return i!==t?(e-i)/(t-i):0}function lo(i,t,e){return(1-e)*i+e*t}function Rd(i,t,e,n){return lo(i,t,1-Math.exp(-e*n))}function Cd(i,t=1){return t-Math.abs(Bh(i,t*2)-t)}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ld(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dd(i,t){return i+Math.random()*(t-i)}function Ud(i){return i*(.5-Math.random())}function Nd(i){i!==void 0&&(xu=i);let t=xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hd(i){return i*co}function Fd(i){return i*_o}function Od(i){return(i&i-1)===0&&i!==0}function Bd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zd(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Us={DEG2RAD:co,RAD2DEG:_o,generateUUID:Mi,clamp:xn,euclideanModulo:Bh,mapLinear:Td,inverseLerp:Ad,lerp:lo,damp:Rd,pingpong:Cd,smoothstep:Pd,smootherstep:Id,randInt:Ld,randFloat:Dd,randFloatSpread:Ud,seededRandom:Nd,degToRad:Hd,radToDeg:Fd,isPowerOfTwo:Od,ceilPowerOfTwo:Bd,floorPowerOfTwo:kd,setQuaternionFromProperEuler:zd,normalize:He,denormalize:li},Ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pe=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],y=r[1],x=r[4],b=r[7],L=r[2],E=r[5],v=r[8];return s[0]=o*_+a*y+c*L,s[3]=o*f+a*x+c*E,s[6]=o*p+a*b+c*v,s[1]=l*_+h*y+u*L,s[4]=l*f+h*x+u*E,s[7]=l*p+h*b+u*v,s[2]=d*_+m*y+g*L,s[5]=d*f+m*x+g*E,s[8]=d*p+m*b+g*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=e*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vc.makeScale(t,e)),this}rotate(t){return this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vc=new pe;function D0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){let i=La("canvas");return i.style.display="block",i}var Mu={};function Ta(i){i in Mu||(Mu[i]=!0,console.warn(i))}function Gd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Wd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var bu=new pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vu=new pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$s={[dr]:{transfer:Ra,primaries:Ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[tn]:{transfer:Ge,primaries:Ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ic]:{transfer:Ra,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(vu),fromReference:i=>i.applyMatrix3(bu)},[Oh]:{transfer:Ge,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(vu),fromReference:i=>i.applyMatrix3(bu).convertLinearToSRGB()}},qd=new Set([dr,ic]),De={enabled:!0,_workingColorSpace:dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!qd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=$s[t].toReference,r=$s[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return $s[i].primaries},getTransfer:function(i){return i===or?Ra:$s[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray($s[t].luminanceCoefficients)}};function xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ec(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jr,zl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jr===void 0&&(jr=La("canvas")),jr.width=t.width,jr.height=t.height;let n=jr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xs(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xs(e[n]/255)*255):e[n]=xs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yd=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wc(r[o].image)):s.push(wc(r[o]))}else s=wc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zd=0,Vn=class i extends hr{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bi,r=Bi,s=ci,o=Dr,a=hi,c=zi,l=i.DEFAULT_ANISOTROPY,h=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Mi(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==v0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=v0;Vn.DEFAULT_ANISOTROPY=1;var Fe=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,b=(m+1)/2,L=(p+1)/2,E=(h+d)/4,v=(u+_)/4,A=(g+f)/4;return x>b&&x>L?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=v/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=E/r,s=A/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=v/s,r=A/s),this.set(n,r,s,e),this}let y=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vl=class extends hr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vi=class extends Vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ua=class extends Vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gl=class extends Vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let L=Math.sqrt(x),E=Math.atan2(L,p*y);f=Math.sin(f*E)/L,a=Math.sin(a*E)/L}let b=a*y;if(c=c*f+d*b,l=l*f+m*b,h=h*f+g*b,u=u*f+_*b,f===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sc.copy(this).projectOnVector(t),this.sub(Sc)}reflect(t){return this.sub(Sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sc=new C,Eu=new hn,Gi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Wo.subVectors(this.max,Ks),Qr.subVectors(t.a,Ks),ts.subVectors(t.b,Ks),es.subVectors(t.c,Ks),tr.subVectors(ts,Qr),er.subVectors(es,ts),wr.subVectors(Qr,es);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-wr.z,wr.y,tr.z,0,-tr.x,er.z,0,-er.x,wr.z,0,-wr.x,-tr.y,tr.x,0,-er.y,er.x,0,-wr.y,wr.x,0];return!Tc(e,Qr,ts,es,Wo)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,Qr,ts,es,Wo))?!1:(Xo.crossVectors(tr,er),e=[Xo.x,Xo.y,Xo.z],Tc(e,Qr,ts,es,Wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Li=[new C,new C,new C,new C,new C,new C,new C,new C],si=new C,Go=new Gi,Qr=new C,ts=new C,es=new C,tr=new C,er=new C,wr=new C,Ks=new C,Wo=new C,Xo=new C,Sr=new C;function Tc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Sr.fromArray(i,s);let a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),c=t.dot(Sr),l=e.dot(Sr),h=n.dot(Sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $d=new Gi,Js=new C,Ac=new C,Wi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Js,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Ac)),this.expandByPoint(Js.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new C,Rc=new C,qo=new C,nr=new C,Cc=new C,Yo=new C,Pc=new C,yo=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Rc.copy(t).add(e).multiplyScalar(.5),qo.copy(e).sub(t).normalize(),nr.copy(this.origin).sub(Rc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(qo),a=nr.dot(this.direction),c=-nr.dot(qo),l=nr.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rc).addScaledVector(qo,d),m}intersectSphere(t,e){Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),r=Di.dot(Di)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,r,s){Cc.subVectors(e,t),Yo.subVectors(n,t),Pc.crossVectors(Cc,Yo);let o=this.direction.dot(Pc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,t);let c=a*this.direction.dot(Yo.crossVectors(nr,Yo));if(c<0)return null;let l=a*this.direction.dot(Cc.cross(nr));if(l<0||c+l>o)return null;let h=-a*nr.dot(Pc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f)}set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Jd)}lookAt(t,e,n){let r=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),ir.crossVectors(n,qn),ir.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),ir.crossVectors(n,qn)),ir.normalize(),Zo.crossVectors(qn,ir),r[0]=ir.x,r[4]=Zo.x,r[8]=qn.x,r[1]=ir.y,r[5]=Zo.y,r[9]=qn.y,r[2]=ir.z,r[6]=Zo.z,r[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],y=n[3],x=n[7],b=n[11],L=n[15],E=r[0],v=r[4],A=r[8],k=r[12],M=r[1],T=r[5],J=r[9],z=r[13],X=r[2],ut=r[6],ot=r[10],pt=r[14],U=r[3],tt=r[7],V=r[11],K=r[15];return s[0]=o*E+a*M+c*X+l*U,s[4]=o*v+a*T+c*ut+l*tt,s[8]=o*A+a*J+c*ot+l*V,s[12]=o*k+a*z+c*pt+l*K,s[1]=h*E+u*M+d*X+m*U,s[5]=h*v+u*T+d*ut+m*tt,s[9]=h*A+u*J+d*ot+m*V,s[13]=h*k+u*z+d*pt+m*K,s[2]=g*E+_*M+f*X+p*U,s[6]=g*v+_*T+f*ut+p*tt,s[10]=g*A+_*J+f*ot+p*V,s[14]=g*k+_*z+f*pt+p*K,s[3]=y*E+x*M+b*X+L*U,s[7]=y*v+x*T+b*ut+L*tt,s[11]=y*A+x*J+b*ot+L*V,s[15]=y*k+x*z+b*pt+L*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*m-n*c*m)+_*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],y=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,x=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,b=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,E=e*y+n*x+r*b+s*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/E;return t[0]=y*v,t[1]=(_*d*s-u*f*s-_*r*m+n*f*m+u*r*p-n*d*p)*v,t[2]=(a*f*s-_*c*s+_*r*l-n*f*l-a*r*p+n*c*p)*v,t[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*m-n*c*m)*v,t[4]=x*v,t[5]=(h*f*s-g*d*s+g*r*m-e*f*m-h*r*p+e*d*p)*v,t[6]=(g*c*s-o*f*s-g*r*l+e*f*l+o*r*p-e*c*p)*v,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*m+e*c*m)*v,t[8]=b*v,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*v,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*v,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*v,t[12]=L*v,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*f+e*u*f)*v,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*f-e*a*f)*v,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*d+e*a*d)*v,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,f=o*u,p=a*u,y=c*l,x=c*h,b=c*u,L=n.x,E=n.y,v=n.z;return r[0]=(1-(_+p))*L,r[1]=(m+b)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-b)*E,r[5]=(1-(d+p))*E,r[6]=(f+y)*E,r[7]=0,r[8]=(g+x)*v,r[9]=(f-y)*v,r[10]=(1-(d+_))*v,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=ns.set(r[0],r[1],r[2]).length(),o=ns.set(r[4],r[5],r[6]).length(),a=ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],oi.copy(this);let l=1/s,h=1/o,u=1/a;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=ki){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r),m,g;if(a===ki)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ia)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ki){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*l,m=(n+r)*h,g,_;if(a===ki)g=(o+s)*u,_=-2*u;else if(a===Ia)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new C,oi=new ae,Kd=new C(0,0,0),Jd=new C(1,1,1),ir=new C,Zo=new C,qn=new C,wu=new ae,Su=new hn,bn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jd=0,Tu=new C,is=new hn,Ui=new ae,$o=new C,js=new C,Qd=new C,tp=new hn,Au=new C(1,0,0),Ru=new C(0,1,0),Cu=new C(0,0,1),Pu={type:"added"},ep={type:"removed"},rs={type:"childadded",child:null},Ic={type:"childremoved",child:null},on=class i extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new bn,n=new hn,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new pe}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Tu.copy(t).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$o.copy(t):$o.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(js,$o,this.up):Ui.lookAt($o,js,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),is.setFromRotationMatrix(Ui),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ep),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pu),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};on.DEFAULT_UP=new C(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ai=new C,Ni=new C,Lc=new C,Hi=new C,ss=new C,os=new C,Iu=new C,Dc=new C,Uc=new C,Nc=new C,Hc=new Fe,Fc=new Fe,Oc=new Fe,ar=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ai.subVectors(t,e),r.cross(ai);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ai.subVectors(r,e),Ni.subVectors(n,e),Lc.subVectors(t,e);let o=ai.dot(ai),a=ai.dot(Ni),c=ai.dot(Lc),l=Ni.dot(Ni),h=Ni.dot(Lc),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hi.x),c.addScaledVector(o,Hi.y),c.addScaledVector(a,Hi.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Hc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Hc.fromBufferAttribute(t,e),Fc.fromBufferAttribute(t,n),Oc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Hc,s.x),o.addScaledVector(Fc,s.y),o.addScaledVector(Oc,s.z),o}static isFrontFacing(t,e,n,r){return ai.subVectors(n,e),Ni.subVectors(t,e),ai.cross(Ni).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ai.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;ss.subVectors(r,n),os.subVectors(s,n),Dc.subVectors(t,n);let c=ss.dot(Dc),l=os.dot(Dc);if(c<=0&&l<=0)return e.copy(n);Uc.subVectors(t,r);let h=ss.dot(Uc),u=os.dot(Uc);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ss,o);Nc.subVectors(t,s);let m=ss.dot(Nc),g=os.dot(Nc);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(os,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Iu.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(Iu,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ss,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=De.workingColorSpace){return this.r=t,this.g=e,this.b=n,De.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=De.workingColorSpace){if(t=Bh(t,1),e=xn(e,0,1),n=xn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Bc(o,s,t+1/3),this.g=Bc(o,s,t),this.b=Bc(o,s,t-1/3)}return De.toWorkingColorSpace(this,r),this}setStyle(t,e=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=U0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=Ec(t.r),this.g=Ec(t.g),this.b=Ec(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return De.fromWorkingColorSpace(In.copy(this),t),Math.round(xn(In.r*255,0,255))*65536+Math.round(xn(In.g*255,0,255))*256+Math.round(xn(In.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.fromWorkingColorSpace(In.copy(this),e);let n=In.r,r=In.g,s=In.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=De.workingColorSpace){return De.fromWorkingColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=tn){De.fromWorkingColorSpace(In.copy(this),t);let e=In.r,n=In.g,r=In.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+e,rr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rr),t.getHSL(Ko);let n=lo(rr.h,Ko.h,e),r=lo(rr.s,Ko.s,e),s=lo(rr.l,Ko.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new kt;kt.NAMES=U0;var np=0,ui=class extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=xi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==Ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},an=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var sn=new C,Jo=new Ut,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jo.fromBufferAttribute(this,e),Jo.applyMatrix3(t),this.setXY(e,Jo.x,Jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kl&&(t.usage=this.usage),t}};var Ha=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fa=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},ip=0,jn=new ae,kc=new on,as=new C,Yn=new Gi,Qs=new Gi,yn=new C,be=class i extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(D0(t)?Fa:Ha)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new pe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(Yn.min,Qs.min),Yn.expandByPoint(yn),yn.addVectors(Yn.max,Qs.max),Yn.expandByPoint(yn)):(Yn.expandByPoint(Qs.min),Yn.expandByPoint(Qs.max))}Yn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)yn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(yn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)yn.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(t,l),yn.add(as)),r=Math.max(r,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new C,c[A]=new C;let l=new C,h=new C,u=new C,d=new Ut,m=new Ut,g=new Ut,_=new C,f=new C;function p(A,k,M){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,k),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(T),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(T),a[A].add(_),a[k].add(_),a[M].add(_),c[A].add(f),c[k].add(f),c[M].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,k=y.length;A<k;++A){let M=y[A],T=M.start,J=M.count;for(let z=T,X=T+J;z<X;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let x=new C,b=new C,L=new C,E=new C;function v(A){L.fromBufferAttribute(r,A),E.copy(L);let k=a[A];x.copy(k),x.sub(L.multiplyScalar(L.dot(k))).normalize(),b.crossVectors(E,k);let T=b.dot(c[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,T)}for(let A=0,k=y.length;A<k;++A){let M=y[A],T=M.start,J=M.count;for(let z=T,X=T+J;z<X;z+=3)v(t.getX(z+0)),v(t.getX(z+1)),v(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new Le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lu=new ae,Tr=new yo,jo=new Wi,Du=new C,Qo=new C,ta=new C,ea=new C,zc=new C,na=new C,Uu=new C,ia=new C,St=class extends on{constructor(t=new be,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){na.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(zc.fromBufferAttribute(u,t),o?na.addScaledVector(zc,h):na.addScaledVector(zc.sub(e),h))}e.add(na)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),Tr.copy(t.ray).recast(t.near),!(jo.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(jo,Du)===null||Tr.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Lu.copy(s).invert(),Tr.copy(t.ray).applyMatrix4(Lu),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,L=x;b<L;b+=3){let E=a.getX(b),v=a.getX(b+1),A=a.getX(b+2);r=ra(this,p,t,n,l,h,u,E,v,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=a.getX(f),x=a.getX(f+1),b=a.getX(f+2);r=ra(this,o,t,n,l,h,u,y,x,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,L=x;b<L;b+=3){let E=b,v=b+1,A=b+2;r=ra(this,p,t,n,l,h,u,E,v,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=f,x=f+1,b=f+2;r=ra(this,o,t,n,l,h,u,y,x,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}};function rp(i,t,e,n,r,s,o,a){let c;if(t.side===zn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Ln,a),c===null)return null;ia.copy(a),ia.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ia);return l<e.near||l>e.far?null:{distance:l,point:ia.clone(),object:i}}function ra(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Qo),i.getVertexPosition(c,ta),i.getVertexPosition(l,ea);let h=rp(i,t,e,n,Qo,ta,ea,Uu);if(h){let u=new C;ar.getBarycoord(Uu,Qo,ta,ea,u),r&&(h.uv=ar.getInterpolatedAttribute(r,a,c,l,u,new Ut)),s&&(h.uv1=ar.getInterpolatedAttribute(s,a,c,l,u,new Ut)),o&&(h.normal=ar.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new C,materialIndex:0};ar.getNormal(Qo,ta,ea,d.normal),h.face=d,h.barycoord=u}return h}var un=class i extends be{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(_,f,p,y,x,b,L,E,v,A,k){let M=b/v,T=L/A,J=b/2,z=L/2,X=E/2,ut=v+1,ot=A+1,pt=0,U=0,tt=new C;for(let V=0;V<ot;V++){let K=V*T-z;for(let Z=0;Z<ut;Z++){let D=Z*M-J;tt[_]=D*y,tt[f]=K*x,tt[p]=X,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[f]=0,tt[p]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Z/v),u.push(1-V/A),pt+=1}}for(let V=0;V<A;V++)for(let K=0;K<v;K++){let Z=d+K+ut*V,D=d+K+ut*(V+1),R=d+(K+1)+ut*(V+1),P=d+(K+1)+ut*V;c.push(Z,D,P),c.push(D,R,P),U+=6}a.addGroup(m,U,k),m+=U,d+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function On(i){let t={};for(let e=0;e<i.length;e++){let n=Ts(i[e]);for(let r in n)t[r]=n[r]}return t}function sp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function N0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}var op={clone:Ts,merge:On},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Oa=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sr=new C,Nu=new Ut,Hu=new Ut,Mn=class extends Oa{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,e){return this.getViewBounds(t,Nu,Hu),e.subVectors(Hu,Nu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(co*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cs=-90,ls=1,Wl=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mn(cs,ls,t,e);r.layers=this.layers,this.add(r);let s=new Mn(cs,ls,t,e);s.layers=this.layers,this.add(s);let o=new Mn(cs,ls,t,e);o.layers=this.layers,this.add(o);let a=new Mn(cs,ls,t,e);a.layers=this.layers,this.add(a);let c=new Mn(cs,ls,t,e);c.layers=this.layers,this.add(c);let l=new Mn(cs,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===ki)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ba=class extends Vn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xl=class extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ba(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new un(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:cr});s.uniforms.tEquirect.value=e;let o=new St(r,s),a=e.minFilter;return e.minFilter===Dr&&(e.minFilter=ci),new Wl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Vc=new C,lp=new C,hp=new pe,Oi=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Vc.subVectors(n,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Vc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hp.getNormalMatrix(t),r=this.coplanarPoint(Vc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ar=new Wi,sa=new C,xo=class{constructor(t=new Oi,e=new Oi,n=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ki){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],y=r[13],x=r[14],b=r[15];if(n[0].setComponents(c-s,d-l,f-m,b-p).normalize(),n[1].setComponents(c+s,d+l,f+m,b+p).normalize(),n[2].setComponents(c+o,d+h,f+g,b+y).normalize(),n[3].setComponents(c-o,d-h,f-g,b-y).normalize(),n[4].setComponents(c-a,d-u,f-_,b-x).normalize(),e===ki)n[5].setComponents(c+a,d+u,f+_,b+x).normalize();else if(e===Ia)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(sa.x=r.normal.x>0?t.max.x:t.min.x,sa.y=r.normal.y>0?t.max.y:t.min.y,sa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function H0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function up(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Xi=class i extends be{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let y=p*d-o;for(let x=0;x<l;x++){let b=x*u-s;g.push(b,-y,0),_.push(0,0,1),f.push(x/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,b=y+l*(p+1),L=y+1+l*(p+1),E=y+1+l*p;m.push(x,b,E),m.push(b,L,E)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
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
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Tp=`#ifdef USE_BUMPMAP
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Np=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fp=`vec3 transformedNormal = objectNormal;
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
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`
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
}`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
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
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lm=`PhysicalMaterial material;
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
#endif`,hm=`struct PhysicalMaterial {
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
}`,um=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
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
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
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
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
}`,xg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Ig=`#define NORMAL
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
}`,Lg=`#define NORMAL
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
}`,Dg=`#define PHONG
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
}`,Ug=`#define PHONG
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
}`,Ng=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,Fg=`#define TOON
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
}`,Og=`#define TOON
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
}`,Bg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Vg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:fp,alphahash_pars_fragment:dp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:gp,alphatest_pars_fragment:_p,aomap_fragment:yp,aomap_pars_fragment:xp,batching_pars_vertex:Mp,batching_vertex:bp,begin_vertex:vp,beginnormal_vertex:Ep,bsdfs:wp,iridescence_fragment:Sp,bumpmap_pars_fragment:Tp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Pp,color_fragment:Ip,color_pars_fragment:Lp,color_pars_vertex:Dp,color_vertex:Up,common:Np,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Op,displacementmap_vertex:Bp,emissivemap_fragment:kp,emissivemap_pars_fragment:zp,colorspace_fragment:Vp,colorspace_pars_fragment:Gp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:qp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:rm,envmap_vertex:Zp,fog_vertex:$p,fog_pars_vertex:Kp,fog_fragment:Jp,fog_pars_fragment:jp,gradientmap_pars_fragment:Qp,lightmap_pars_fragment:tm,lights_lambert_fragment:em,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:sm,lights_toon_pars_fragment:om,lights_phong_fragment:am,lights_phong_pars_fragment:cm,lights_physical_fragment:lm,lights_physical_pars_fragment:hm,lights_fragment_begin:um,lights_fragment_maps:fm,lights_fragment_end:dm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:mm,logdepthbuf_pars_vertex:gm,logdepthbuf_vertex:_m,map_fragment:ym,map_pars_fragment:xm,map_particle_fragment:Mm,map_particle_pars_fragment:bm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:Em,morphinstance_vertex:wm,morphcolor_vertex:Sm,morphnormal_vertex:Tm,morphtarget_pars_vertex:Am,morphtarget_vertex:Rm,normal_fragment_begin:Cm,normal_fragment_maps:Pm,normal_pars_fragment:Im,normal_pars_vertex:Lm,normal_vertex:Dm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Om,opaque_fragment:Bm,packing:km,premultiplied_alpha_fragment:zm,project_vertex:Vm,dithering_fragment:Gm,dithering_pars_fragment:Wm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:qm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:Zm,shadowmap_vertex:$m,shadowmask_pars_fragment:Km,skinbase_vertex:Jm,skinning_pars_vertex:jm,skinning_vertex:Qm,skinnormal_vertex:tg,specularmap_fragment:eg,specularmap_pars_fragment:ng,tonemapping_fragment:ig,tonemapping_pars_fragment:rg,transmission_fragment:sg,transmission_pars_fragment:og,uv_pars_fragment:ag,uv_pars_vertex:cg,uv_vertex:lg,worldpos_vertex:hg,background_vert:ug,background_frag:fg,backgroundCube_vert:dg,backgroundCube_frag:pg,cube_vert:mg,cube_frag:gg,depth_vert:_g,depth_frag:yg,distanceRGBA_vert:xg,distanceRGBA_frag:Mg,equirect_vert:bg,equirect_frag:vg,linedashed_vert:Eg,linedashed_frag:wg,meshbasic_vert:Sg,meshbasic_frag:Tg,meshlambert_vert:Ag,meshlambert_frag:Rg,meshmatcap_vert:Cg,meshmatcap_frag:Pg,meshnormal_vert:Ig,meshnormal_frag:Lg,meshphong_vert:Dg,meshphong_frag:Ug,meshphysical_vert:Ng,meshphysical_frag:Hg,meshtoon_vert:Fg,meshtoon_frag:Og,points_vert:Bg,points_frag:kg,shadow_vert:zg,shadow_frag:Vg,sprite_vert:Gg,sprite_frag:Wg},Xt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},_i={basic:{uniforms:On([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:On([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new kt(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:On([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:On([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:On([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new kt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:On([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:On([Xt.points,Xt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:On([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:On([Xt.common,Xt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:On([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:On([Xt.sprite,Xt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:On([Xt.common,Xt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:On([Xt.lights,Xt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};_i.physical={uniforms:On([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var oa={r:0,b:0,g:0},Rr=new bn,Xg=new ae;function qg(i,t,e,n,r,s,o){let a=new kt(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,b=g(y);b===null?p(a,c):b&&b.isColor&&(p(b,1),x=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===nc)?(h===void 0&&(h=new St(new un(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Ts(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Rr.copy(x.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Rr)),h.material.toneMapped=De.getTransfer(b.colorSpace)!==Ge,(u!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new St(new Xi(2,2),new Gn({name:"BackgroundMaterial",uniforms:Ts(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=De.getTransfer(b.colorSpace)!==Ge,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(oa,N0(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:f}}function Yg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(M,T,J,z,X){let ut=!1,ot=u(z,J,T);s!==ot&&(s=ot,l(s.object)),ut=m(M,z,J,X),ut&&g(M,z,J,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(ut||o)&&(o=!1,b(M,T,J,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,T,J){let z=J.wireframe===!0,X=n[M.id];X===void 0&&(X={},n[M.id]=X);let ut=X[T.id];ut===void 0&&(ut={},X[T.id]=ut);let ot=ut[z];return ot===void 0&&(ot=d(c()),ut[z]=ot),ot}function d(M){let T=[],J=[],z=[];for(let X=0;X<e;X++)T[X]=0,J[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:J,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,T,J,z){let X=s.attributes,ut=T.attributes,ot=0,pt=J.getAttributes();for(let U in pt)if(pt[U].location>=0){let V=X[U],K=ut[U];if(K===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),V===void 0||V.attribute!==K||K&&V.data!==K.data)return!0;ot++}return s.attributesNum!==ot||s.index!==z}function g(M,T,J,z){let X={},ut=T.attributes,ot=0,pt=J.getAttributes();for(let U in pt)if(pt[U].location>=0){let V=ut[U];V===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(V=M.instanceColor));let K={};K.attribute=V,V&&V.data&&(K.data=V.data),X[U]=K,ot++}s.attributes=X,s.attributesNum=ot,s.index=z}function _(){let M=s.newAttributes;for(let T=0,J=M.length;T<J;T++)M[T]=0}function f(M){p(M,0)}function p(M,T){let J=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;J[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),X[M]!==T&&(i.vertexAttribDivisor(M,T),X[M]=T)}function y(){let M=s.newAttributes,T=s.enabledAttributes;for(let J=0,z=T.length;J<z;J++)T[J]!==M[J]&&(i.disableVertexAttribArray(J),T[J]=0)}function x(M,T,J,z,X,ut,ot){ot===!0?i.vertexAttribIPointer(M,T,J,X,ut):i.vertexAttribPointer(M,T,J,z,X,ut)}function b(M,T,J,z){_();let X=z.attributes,ut=J.getAttributes(),ot=T.defaultAttributeValues;for(let pt in ut){let U=ut[pt];if(U.location>=0){let tt=X[pt];if(tt===void 0&&(pt==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),pt==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){let V=tt.normalized,K=tt.itemSize,Z=t.get(tt);if(Z===void 0)continue;let D=Z.buffer,R=Z.type,P=Z.bytesPerElement,B=R===i.INT||R===i.UNSIGNED_INT||tt.gpuType===Ph;if(tt.isInterleavedBufferAttribute){let q=tt.data,O=q.stride,H=tt.offset;if(q.isInstancedInterleavedBuffer){for(let Y=0;Y<U.locationSize;Y++)p(U.location+Y,q.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Y=0;Y<U.locationSize;Y++)f(U.location+Y);i.bindBuffer(i.ARRAY_BUFFER,D);for(let Y=0;Y<U.locationSize;Y++)x(U.location+Y,K/U.locationSize,R,V,O*P,(H+K/U.locationSize*Y)*P,B)}else{if(tt.isInstancedBufferAttribute){for(let q=0;q<U.locationSize;q++)p(U.location+q,tt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let q=0;q<U.locationSize;q++)f(U.location+q);i.bindBuffer(i.ARRAY_BUFFER,D);for(let q=0;q<U.locationSize;q++)x(U.location+q,K/U.locationSize,R,V,K*P,K/U.locationSize*q*P,B)}}else if(ot!==void 0){let V=ot[pt];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(U.location,V);break;case 3:i.vertexAttrib3fv(U.location,V);break;case 4:i.vertexAttrib4fv(U.location,V);break;default:i.vertexAttrib1fv(U.location,V)}}}}y()}function L(){A();for(let M in n){let T=n[M];for(let J in T){let z=T[J];for(let X in z)h(z[X].object),delete z[X];delete T[J]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let T=n[M.id];for(let J in T){let z=T[J];for(let X in z)h(z[X].object),delete z[X];delete T[J]}delete n[M.id]}function v(M){for(let T in n){let J=n[T];if(J[M.id]===void 0)continue;let z=J[M.id];for(let X in z)h(z[X].object),delete z[X];delete J[M.id]}}function A(){k(),o=!0,s!==r&&(s=r,l(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:f,disableUnusedAttributes:y}}function Zg(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $g(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==hi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let A=v===Io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==zi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==yi&&!A)}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let v=t.get("EXT_clip_control");v.clipControlEXT(v.LOWER_LEFT_EXT,v.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:L,maxSamples:E}}function Kg(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Oi,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{let y=s?0:n,x=y*4,b=p.clippingState||null;c.value=b,b=h(g,d,x,m);for(let L=0;L!==x;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,b=m;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Jg(i){let t=new WeakMap;function e(o,a){return a===mo?o.mapping=vs:a===ul&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===mo||a===ul)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Xl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var ka=class extends Oa{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,Fu=[.125,.215,.35,.446,.526,.582],Lr=20,Gc=new ka,Ou=new kt,Wc=null,Xc=0,qc=0,Yc=!1,Pr=(1+Math.sqrt(5))/2,hs=1/Pr,Bu=[new C(-Pr,hs,0),new C(Pr,hs,0),new C(-hs,0,Pr),new C(hs,0,Pr),new C(0,Pr,-hs),new C(0,Pr,hs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],za=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,t.scissorTest=!1,aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Io,format:hi,colorSpace:dr,depthBuffer:!1},r=ku(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jg(s)),this._blurMaterial=Qg(s,t,e)}return r}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,Gc)}_sceneToCubeUV(t,e,n,r){let a=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ou),h.toneMapping=lr,h.autoClear=!1;let m=new an({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new St(new un,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(Ou),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;aa(r,y*x,p>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===vs||t.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;aa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Gc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bu[(r-s-1)%Bu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Lr-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):Lr;f>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Lr}`);let p=[],y=0;for(let v=0;v<Lr;++v){let A=v/_,k=Math.exp(-A*A/2);p.push(k),v===0?y+=k:v<f&&(y+=2*k)}for(let v=0;v<p.length;v++)p[v]=p[v]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let b=this._sizeLods[r],L=3*b*(r>x-gs?r-x+gs:0),E=4*(this._cubeSize-b);aa(e,L,E,3*b,2*b),c.setRenderTarget(e),c.render(u,Gc)}};function jg(i){let t=[],e=[],n=[],r=i,s=i-gs+1+Fu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-gs?c=Fu[o-i+gs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,y=new Float32Array(_*g*m),x=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let E=0;E<m;E++){let v=E%3*2/3-1,A=E>2?0:-1,k=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];y.set(k,_*g*E),x.set(d,f*g*E);let M=[E,E,E,E,E,E];b.set(M,p*g*E)}let L=new be;L.setAttribute("position",new Le(y,_)),L.setAttribute("uv",new Le(x,f)),L.setAttribute("faceIndex",new Le(b,p)),t.push(L),r>gs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ku(i,t,e){let n=new Vi(i,t,e);return n.texture.mapping=nc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Qg(i,t,e){let n=new Float32Array(Lr),r=new C(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kh(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function zu(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Vu(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function t1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===mo||c===ul,h=c===vs||c===Es;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new za(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new za(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function e1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Ta("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function n1(i,t,e,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let x=0,b=y.length;x<b;x+=3){let L=y[x+0],E=y[x+1],v=y[x+2];d.push(L,E,E,v,v,L)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let L=x+0,E=x+1,v=x+2;d.push(L,E,E,v,v,L)}}else return;let f=new(D0(d)?Fa:Ha)(d,1);f.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function i1(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function u(d,m,g,_){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y];for(let y=0;y<_.length;y++)e.update(p,n,_[y])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function r1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function s1(i,t,e){let n=new WeakMap,r=new Fe;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let k=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let b=a.attributes.position.count*x,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*L*4*u),v=new Ua(E,b,L,u);v.type=yi,v.needsUpdate=!0;let A=x*4;for(let M=0;M<u;M++){let T=f[M],J=p[M],z=y[M],X=b*L*4*M;for(let ut=0;ut<T.count;ut++){let ot=ut*A;m===!0&&(r.fromBufferAttribute(T,ut),E[X+ot+0]=r.x,E[X+ot+1]=r.y,E[X+ot+2]=r.z,E[X+ot+3]=0),g===!0&&(r.fromBufferAttribute(J,ut),E[X+ot+4]=r.x,E[X+ot+5]=r.y,E[X+ot+6]=r.z,E[X+ot+7]=0),_===!0&&(r.fromBufferAttribute(z,ut),E[X+ot+8]=r.x,E[X+ot+9]=r.y,E[X+ot+10]=r.z,E[X+ot+11]=z.itemSize===4?r.w:1)}}d={count:u,texture:v,size:new Ut(b,L)},n.set(a,d),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function o1(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var Va=class extends Vn{constructor(t,e,n,r,s,o,a,c,l,h=ys){if(h!==ys&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=Nr),n===void 0&&h===Ss&&(n=ws),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},F0=new Vn,Gu=new Va(1,1),O0=new Ua,B0=new Gl,k0=new Ba,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Wu[r];if(s===void 0&&(s=new Float32Array(r),Wu[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function fn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function dn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rc(i,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function a1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function c1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2fv(this.addr,t),dn(e,t)}}function l1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;i.uniform3fv(this.addr,t),dn(e,t)}}function h1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4fv(this.addr,t),dn(e,t)}}function u1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),dn(e,n)}}function f1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),dn(e,n)}}function d1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),dn(e,n)}}function p1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function m1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2iv(this.addr,t),dn(e,t)}}function g1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3iv(this.addr,t),dn(e,t)}}function _1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4iv(this.addr,t),dn(e,t)}}function y1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2uiv(this.addr,t),dn(e,t)}}function M1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3uiv(this.addr,t),dn(e,t)}}function b1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4uiv(this.addr,t),dn(e,t)}}function v1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Gu.compareFunction=L0,s=Gu):s=F0,e.setTexture2D(t||s,r)}function E1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||B0,r)}function w1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||k0,r)}function S1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||O0,r)}function T1(i){switch(i){case 5126:return a1;case 35664:return c1;case 35665:return l1;case 35666:return h1;case 35674:return u1;case 35675:return f1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return y1;case 36294:return x1;case 36295:return M1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return S1}}function A1(i,t){i.uniform1fv(this.addr,t)}function R1(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function C1(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function P1(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function I1(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function L1(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function D1(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function U1(i,t){i.uniform1iv(this.addr,t)}function N1(i,t){i.uniform2iv(this.addr,t)}function H1(i,t){i.uniform3iv(this.addr,t)}function F1(i,t){i.uniform4iv(this.addr,t)}function O1(i,t){i.uniform1uiv(this.addr,t)}function B1(i,t){i.uniform2uiv(this.addr,t)}function k1(i,t){i.uniform3uiv(this.addr,t)}function z1(i,t){i.uniform4uiv(this.addr,t)}function V1(i,t,e){let n=this.cache,r=t.length,s=rc(e,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||F0,s[o])}function G1(i,t,e){let n=this.cache,r=t.length,s=rc(e,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||B0,s[o])}function W1(i,t,e){let n=this.cache,r=t.length,s=rc(e,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||k0,s[o])}function X1(i,t,e){let n=this.cache,r=t.length,s=rc(e,r);fn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||O0,s[o])}function q1(i){switch(i){case 5126:return A1;case 35664:return R1;case 35665:return C1;case 35666:return P1;case 35674:return I1;case 35675:return L1;case 35676:return D1;case 5124:case 35670:return U1;case 35667:case 35671:return N1;case 35668:case 35672:return H1;case 35669:case 35673:return F1;case 5125:return O1;case 36294:return B1;case 36295:return k1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}var ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T1(e.type)}},Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q1(e.type)}},Zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function $u(i,t){i.seq.push(t),i.map[t.id]=t}function Y1(i,t,e){let n=i.name,r=n.length;for(Zc.lastIndex=0;;){let s=Zc.exec(n),o=Zc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){$u(e,l===void 0?new ql(a,i,t):new Yl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Zl(a),$u(e,u)),e=u}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Y1(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Ku(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Z1=37297,$1=0;function K1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function J1(i){let t=De.getPrimaries(De.workingColorSpace),e=De.getPrimaries(i),n;switch(t===e?n="":t===Pa&&e===Ca?n="LinearDisplayP3ToLinearSRGB":t===Ca&&e===Pa&&(n="LinearSRGBToLinearDisplayP3"),i){case dr:case ic:return[n,"LinearTransferOETF"];case tn:case Oh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ju(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+K1(i.getShaderSource(t),o)}else return r}function j1(i,t){let e=J1(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Q1(i,t){let e;switch(t){case ld:e="Linear";break;case hd:e="Reinhard";break;case ud:e="Cineon";break;case Po:e="ACESFilmic";break;case dd:e="AgX";break;case pd:e="Neutral";break;case fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ca=new C;function t_(){De.getLuminanceCoefficients(ca);let i=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function n_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ao(i){return i!==""}function ju(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(r_,o_)}var s_=new Map;function o_(i,t){let e=de[t];if(e===void 0){let n=s_.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}var a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(i){return i.replace(a_,c_)}function c_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function e0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function l_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===b0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fi&&(t="SHADOWMAP_TYPE_VSM"),t}function h_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case Es:t="ENVMAP_TYPE_CUBE";break;case nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Es&&(t="ENVMAP_MODE_REFRACTION"),t}function f_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ch:t="ENVMAP_BLENDING_MIX";break;case cd:t="ENVMAP_BLENDING_ADD";break}return t}function d_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function p_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=l_(e),l=h_(e),h=u_(e),u=f_(e),d=d_(e),m=e_(e),g=n_(s),_=r.createProgram(),f,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ao).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ao).join(`
`),p.length>0&&(p+=`
`)):(f=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),p=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==lr?"#define TONE_MAPPING":"",e.toneMapping!==lr?de.tonemapping_pars_fragment:"",e.toneMapping!==lr?Q1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,j1("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),o=$l(o),o=ju(o,e),o=Qu(o,e),a=$l(a),a=ju(a,e),a=Qu(a,e),o=t0(o),a=t0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=y+f+o,b=y+p+a,L=Ku(r,r.VERTEX_SHADER,x),E=Ku(r,r.FRAGMENT_SHADER,b);r.attachShader(_,L),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function v(T){if(i.debug.checkShaderErrors){let J=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(L).trim(),X=r.getShaderInfoLog(E).trim(),ut=!0,ot=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ut=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,E);else{let pt=Ju(r,L,"vertex"),U=Ju(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+J+`
`+pt+`
`+U)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(z===""||X==="")&&(ot=!1);ot&&(T.diagnostics={runnable:ut,programLog:J,vertexShader:{log:z,prefix:f},fragmentShader:{log:X,prefix:p}})}r.deleteShader(L),r.deleteShader(E),A=new Ms(r,_),k=i_(r,_)}let A;this.getUniforms=function(){return A===void 0&&v(this),A};let k;this.getAttributes=function(){return k===void 0&&v(this),k};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Z1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=E,this}var m_=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jl(t),e.set(t,n)),n}},Jl=class{constructor(t){this.id=m_++,this.code=t,this.usedTimes=0}};function g_(i,t,e,n,r,s,o){let a=new Na,c=new Kl,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,T,J,z,X){let ut=z.fog,ot=X.geometry,pt=M.isMeshStandardMaterial?z.environment:null,U=(M.isMeshStandardMaterial?e:t).get(M.envMap||pt),tt=U&&U.mapping===nc?U.image.height:null,V=_[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let K=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Z=K!==void 0?K.length:0,D=0;ot.morphAttributes.position!==void 0&&(D=1),ot.morphAttributes.normal!==void 0&&(D=2),ot.morphAttributes.color!==void 0&&(D=3);let R,P,B,q;if(V){let Je=_i[V];R=Je.vertexShader,P=Je.fragmentShader}else R=M.vertexShader,P=M.fragmentShader,c.update(M),B=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);let O=i.getRenderTarget(),H=X.isInstancedMesh===!0,Y=X.isBatchedMesh===!0,Q=!!M.map,G=!!M.matcap,S=!!U,rt=!!M.aoMap,$=!!M.lightMap,W=!!M.bumpMap,j=!!M.normalMap,nt=!!M.displacementMap,ct=!!M.emissiveMap,I=!!M.metalnessMap,w=!!M.roughnessMap,F=M.anisotropy>0,et=M.clearcoat>0,lt=M.dispersion>0,it=M.iridescence>0,vt=M.sheen>0,xt=M.transmission>0,dt=F&&!!M.anisotropyMap,Lt=et&&!!M.clearcoatMap,mt=et&&!!M.clearcoatNormalMap,At=et&&!!M.clearcoatRoughnessMap,zt=it&&!!M.iridescenceMap,Ft=it&&!!M.iridescenceThicknessMap,Rt=vt&&!!M.sheenColorMap,Ct=vt&&!!M.sheenRoughnessMap,Vt=!!M.specularMap,ee=!!M.specularColorMap,at=!!M.specularIntensityMap,Dt=xt&&!!M.transmissionMap,Mt=xt&&!!M.thicknessMap,Tt=!!M.gradientMap,Gt=!!M.alphaMap,$t=M.alphaTest>0,fe=!!M.alphaHash,ke=!!M.extensions,Ke=lr;M.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let ye={shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:R,fragmentShader:P,defines:M.defines,customVertexShaderID:B,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Y,batchingColor:Y&&X._colorsTexture!==null,instancing:H,instancingColor:H&&X.instanceColor!==null,instancingMorph:H&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:O===null?i.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:dr,alphaToCoverage:!!M.alphaToCoverage,map:Q,matcap:G,envMap:S,envMapMode:S&&U.mapping,envMapCubeUVHeight:tt,aoMap:rt,lightMap:$,bumpMap:W,normalMap:j,displacementMap:m&&nt,emissiveMap:ct,normalMapObjectSpace:j&&M.normalMapType===yd,normalMapTangentSpace:j&&M.normalMapType===Fh,metalnessMap:I,roughnessMap:w,anisotropy:F,anisotropyMap:dt,clearcoat:et,clearcoatMap:Lt,clearcoatNormalMap:mt,clearcoatRoughnessMap:At,dispersion:lt,iridescence:it,iridescenceMap:zt,iridescenceThicknessMap:Ft,sheen:vt,sheenColorMap:Rt,sheenRoughnessMap:Ct,specularMap:Vt,specularColorMap:ee,specularIntensityMap:at,transmission:xt,transmissionMap:Dt,thicknessMap:Mt,gradientMap:Tt,opaque:M.transparent===!1&&M.blending===xi&&M.alphaToCoverage===!1,alphaMap:Gt,alphaTest:$t,alphaHash:fe,combine:M.combine,mapUv:Q&&f(M.map.channel),aoMapUv:rt&&f(M.aoMap.channel),lightMapUv:$&&f(M.lightMap.channel),bumpMapUv:W&&f(M.bumpMap.channel),normalMapUv:j&&f(M.normalMap.channel),displacementMapUv:nt&&f(M.displacementMap.channel),emissiveMapUv:ct&&f(M.emissiveMap.channel),metalnessMapUv:I&&f(M.metalnessMap.channel),roughnessMapUv:w&&f(M.roughnessMap.channel),anisotropyMapUv:dt&&f(M.anisotropyMap.channel),clearcoatMapUv:Lt&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:mt&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&f(M.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&f(M.sheenRoughnessMap.channel),specularMapUv:Vt&&f(M.specularMap.channel),specularColorMapUv:ee&&f(M.specularColorMap.channel),specularIntensityMapUv:at&&f(M.specularIntensityMap.channel),transmissionMapUv:Dt&&f(M.transmissionMap.channel),thicknessMapUv:Mt&&f(M.thicknessMap.channel),alphaMapUv:Gt&&f(M.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(j||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ot.attributes.uv&&(Q||Gt),fog:!!ut,useFog:M.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:D,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Q&&M.map.isVideoTexture===!0&&De.getTransfer(M.map.colorSpace)===Ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ie,flipSided:M.side===zn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function y(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let J in M.defines)T.push(J),T.push(M.defines[J]);return M.isRawShaderMaterial===!1&&(x(T,M),b(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function b(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),M.push(a.mask)}function L(M){let T=_[M.type],J;if(T){let z=_i[T];J=op.clone(z.uniforms)}else J=M.uniforms;return J}function E(M,T){let J;for(let z=0,X=h.length;z<X;z++){let ut=h[z];if(ut.cacheKey===T){J=ut,++J.usedTimes;break}}return J===void 0&&(J=new p_(i,T,M,s),h.push(J)),J}function v(M){if(--M.usedTimes===0){let T=h.indexOf(M);h[T]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function k(){c.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:L,acquireProgram:E,releaseProgram:v,releaseShaderCache:A,programs:h,dispose:k}}function __(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function n0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function i0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,g,_,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||y_),n.length>1&&n.sort(d||n0),r.length>1&&r.sort(d||n0)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function x_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new i0,i.set(n,[o])):r>=s.length?(o=new i0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function M_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new kt};break;case"SpotLight":e={position:new C,direction:new C,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function b_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var v_=0;function E_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w_(i){let t=new M_,e=b_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let r=new C,s=new ae,o=new ae;function a(l){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,y=0,x=0,b=0,L=0,E=0,v=0;l.sort(E_);for(let k=0,M=l.length;k<M;k++){let T=l[k],J=T.color,z=T.intensity,X=T.distance,ut=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=J.r*z,u+=J.g*z,d+=J.b*z;else if(T.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(T.sh.coefficients[ot],z);v++}else if(T.isDirectionalLight){let ot=t.get(T);if(ot.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let pt=T.shadow,U=e.get(T);U.shadowIntensity=pt.intensity,U.shadowBias=pt.bias,U.shadowNormalBias=pt.normalBias,U.shadowRadius=pt.radius,U.shadowMapSize=pt.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=ut,n.directionalShadowMatrix[m]=T.shadow.matrix,y++}n.directional[m]=ot,m++}else if(T.isSpotLight){let ot=t.get(T);ot.position.setFromMatrixPosition(T.matrixWorld),ot.color.copy(J).multiplyScalar(z),ot.distance=X,ot.coneCos=Math.cos(T.angle),ot.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),ot.decay=T.decay,n.spot[_]=ot;let pt=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,pt.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[_]=pt.matrix,T.castShadow){let U=e.get(T);U.shadowIntensity=pt.intensity,U.shadowBias=pt.bias,U.shadowNormalBias=pt.normalBias,U.shadowRadius=pt.radius,U.shadowMapSize=pt.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=ut,b++}_++}else if(T.isRectAreaLight){let ot=t.get(T);ot.color.copy(J).multiplyScalar(z),ot.halfWidth.set(T.width*.5,0,0),ot.halfHeight.set(0,T.height*.5,0),n.rectArea[f]=ot,f++}else if(T.isPointLight){let ot=t.get(T);if(ot.color.copy(T.color).multiplyScalar(T.intensity),ot.distance=T.distance,ot.decay=T.decay,T.castShadow){let pt=T.shadow,U=e.get(T);U.shadowIntensity=pt.intensity,U.shadowBias=pt.bias,U.shadowNormalBias=pt.normalBias,U.shadowRadius=pt.radius,U.shadowMapSize=pt.mapSize,U.shadowCameraNear=pt.camera.near,U.shadowCameraFar=pt.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=ut,n.pointShadowMatrix[g]=T.shadow.matrix,x++}n.point[g]=ot,g++}else if(T.isHemisphereLight){let ot=t.get(T);ot.skyColor.copy(T.color).multiplyScalar(z),ot.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[p]=ot,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==m||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==f||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==x||A.numSpotShadows!==b||A.numSpotMaps!==L||A.numLightProbes!==v)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+L-E,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=v,A.directionalLength=m,A.pointLength=g,A.spotLength=_,A.rectAreaLength=f,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=x,A.numSpotShadows=b,A.numSpotMaps=L,A.numLightProbes=v,n.version=v_++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0,f=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let x=l[p];if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(x.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),m++}else if(x.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(x.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function r0(i){let t=new w_(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function S_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new r0(i),t.set(r,[a])):s>=o.length?(a=new r0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var jl=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ql=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`;function R_(i,t,e){let n=new xo,r=new Ut,s=new Ut,o=new Fe,a=new jl({depthPacking:_d}),c=new Ql,l={},h=e.maxTextureSize,u={[Ln]:zn,[zn]:Ln,[Ie]:Ie},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new St(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0;let p=this.type;this.render=function(E,v,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let k=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),J=i.state;J.setBlending(cr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let z=p!==Fi&&this.type===Fi,X=p===Fi&&this.type!==Fi;for(let ut=0,ot=E.length;ut<ot;ut++){let pt=E[ut],U=pt.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let tt=U.getFrameExtents();if(r.multiply(tt),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/tt.x),r.x=s.x*tt.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/tt.y),r.y=s.y*tt.y,U.mapSize.y=s.y)),U.map===null||z===!0||X===!0){let K=this.type!==Fi?{minFilter:En,magFilter:En}:{};U.map!==null&&U.map.dispose(),U.map=new Vi(r.x,r.y,K),U.map.texture.name=pt.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let V=U.getViewportCount();for(let K=0;K<V;K++){let Z=U.getViewport(K);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),J.viewport(o),U.updateMatrices(pt,K),n=U.getFrustum(),b(v,A,U.camera,pt,this.type)}U.isPointLightShadow!==!0&&this.type===Fi&&y(U,A),U.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(k,M,T)};function y(E,v){let A=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vi(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(v,null,A,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(v,null,A,m,_,null)}function x(E,v,A,k){let M=null,T=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let J=M.uuid,z=v.uuid,X=l[J];X===void 0&&(X={},l[J]=X);let ut=X[z];ut===void 0&&(ut=M.clone(),X[z]=ut,v.addEventListener("dispose",L)),M=ut}if(M.visible=v.visible,M.wireframe=v.wireframe,k===Fi?M.side=v.shadowSide!==null?v.shadowSide:v.side:M.side=v.shadowSide!==null?v.shadowSide:u[v.side],M.alphaMap=v.alphaMap,M.alphaTest=v.alphaTest,M.map=v.map,M.clipShadows=v.clipShadows,M.clippingPlanes=v.clippingPlanes,M.clipIntersection=v.clipIntersection,M.displacementMap=v.displacementMap,M.displacementScale=v.displacementScale,M.displacementBias=v.displacementBias,M.wireframeLinewidth=v.wireframeLinewidth,M.linewidth=v.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let J=i.properties.get(M);J.light=A}return M}function b(E,v,A,k,M){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Fi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let z=t.update(E),X=E.material;if(Array.isArray(X)){let ut=z.groups;for(let ot=0,pt=ut.length;ot<pt;ot++){let U=ut[ot],tt=X[U.materialIndex];if(tt&&tt.visible){let V=x(E,tt,k,M);E.onBeforeShadow(i,E,v,A,z,V,U),i.renderBufferDirect(A,null,z,V,E,U),E.onAfterShadow(i,E,v,A,z,V,U)}}}else if(X.visible){let ut=x(E,X,k,M);E.onBeforeShadow(i,E,v,A,z,ut,null),i.renderBufferDirect(A,null,z,ut,E,null),E.onAfterShadow(i,E,v,A,z,ut,null)}}let J=E.children;for(let z=0,X=J.length;z<X;z++)b(J[z],v,A,k,M)}function L(E){E.target.removeEventListener("dispose",L);for(let A in l){let k=l[A],M=E.target.uuid;M in k&&(k[M].dispose(),delete k[M])}}}var C_={[rl]:sl,[ol]:ll,[al]:hl,[bs]:cl,[sl]:rl,[ll]:ol,[hl]:al,[cl]:bs};function P_(i){function t(){let at=!1,Dt=new Fe,Mt=null,Tt=new Fe(0,0,0,0);return{setMask:function(Gt){Mt!==Gt&&!at&&(i.colorMask(Gt,Gt,Gt,Gt),Mt=Gt)},setLocked:function(Gt){at=Gt},setClear:function(Gt,$t,fe,ke,Ke){Ke===!0&&(Gt*=ke,$t*=ke,fe*=ke),Dt.set(Gt,$t,fe,ke),Tt.equals(Dt)===!1&&(i.clearColor(Gt,$t,fe,ke),Tt.copy(Dt))},reset:function(){at=!1,Mt=null,Tt.set(-1,0,0,0)}}}function e(){let at=!1,Dt=!1,Mt=null,Tt=null,Gt=null;return{setReversed:function($t){Dt=$t},setTest:function($t){$t?B(i.DEPTH_TEST):q(i.DEPTH_TEST)},setMask:function($t){Mt!==$t&&!at&&(i.depthMask($t),Mt=$t)},setFunc:function($t){if(Dt&&($t=C_[$t]),Tt!==$t){switch($t){case rl:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case ol:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case cl:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=$t}},setLocked:function($t){at=$t},setClear:function($t){Gt!==$t&&(i.clearDepth($t),Gt=$t)},reset:function(){at=!1,Mt=null,Tt=null,Gt=null}}}function n(){let at=!1,Dt=null,Mt=null,Tt=null,Gt=null,$t=null,fe=null,ke=null,Ke=null;return{setTest:function(ye){at||(ye?B(i.STENCIL_TEST):q(i.STENCIL_TEST))},setMask:function(ye){Dt!==ye&&!at&&(i.stencilMask(ye),Dt=ye)},setFunc:function(ye,Je,kn){(Mt!==ye||Tt!==Je||Gt!==kn)&&(i.stencilFunc(ye,Je,kn),Mt=ye,Tt=Je,Gt=kn)},setOp:function(ye,Je,kn){($t!==ye||fe!==Je||ke!==kn)&&(i.stencilOp(ye,Je,kn),$t=ye,fe=Je,ke=kn)},setLocked:function(ye){at=ye},setClear:function(ye){Ke!==ye&&(i.clearStencil(ye),Ke=ye)},reset:function(){at=!1,Dt=null,Mt=null,Tt=null,Gt=null,$t=null,fe=null,ke=null,Ke=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,x=null,b=null,L=null,E=new kt(0,0,0),v=0,A=!1,k=null,M=null,T=null,J=null,z=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ut=!1,ot=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(pt)[1]),ut=ot>=1):pt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),ut=ot>=2);let U=null,tt={},V=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),Z=new Fe().fromArray(V),D=new Fe().fromArray(K);function R(at,Dt,Mt,Tt){let Gt=new Uint8Array(4),$t=i.createTexture();i.bindTexture(at,$t),i.texParameteri(at,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(at,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<Mt;fe++)at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Gt):i.texImage2D(Dt+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Gt);return $t}let P={};P[i.TEXTURE_2D]=R(i.TEXTURE_2D,i.TEXTURE_2D,1),P[i.TEXTURE_CUBE_MAP]=R(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[i.TEXTURE_2D_ARRAY]=R(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),P[i.TEXTURE_3D]=R(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),B(i.DEPTH_TEST),s.setFunc(bs),$(!1),W(uu),B(i.CULL_FACE),S(cr);function B(at){l[at]!==!0&&(i.enable(at),l[at]=!0)}function q(at){l[at]!==!1&&(i.disable(at),l[at]=!1)}function O(at,Dt){return h[at]!==Dt?(i.bindFramebuffer(at,Dt),h[at]=Dt,at===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Dt),at===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function H(at,Dt){let Mt=d,Tt=!1;if(at){Mt=u.get(Dt),Mt===void 0&&(Mt=[],u.set(Dt,Mt));let Gt=at.textures;if(Mt.length!==Gt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,fe=Gt.length;$t<fe;$t++)Mt[$t]=i.COLOR_ATTACHMENT0+$t;Mt.length=Gt.length,Tt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(Mt)}function Y(at){return m!==at?(i.useProgram(at),m=at,!0):!1}let Q={[Ir]:i.FUNC_ADD,[Xf]:i.FUNC_SUBTRACT,[qf]:i.FUNC_REVERSE_SUBTRACT};Q[Yf]=i.MIN,Q[Zf]=i.MAX;let G={[$f]:i.ZERO,[Kf]:i.ONE,[Jf]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[ed]:i.DST_COLOR,[Qf]:i.DST_ALPHA,[jf]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[td]:i.ONE_MINUS_DST_ALPHA,[rd]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[od]:i.CONSTANT_ALPHA,[ad]:i.ONE_MINUS_CONSTANT_ALPHA};function S(at,Dt,Mt,Tt,Gt,$t,fe,ke,Ke,ye){if(at===cr){g===!0&&(q(i.BLEND),g=!1);return}if(g===!1&&(B(i.BLEND),g=!0),at!==Wf){if(at!==_||ye!==A){if((f!==Ir||x!==Ir)&&(i.blendEquation(i.FUNC_ADD),f=Ir,x=Ir),ye)switch(at){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.ONE,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}else switch(at){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ln:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",at);break}p=null,y=null,b=null,L=null,E.set(0,0,0),v=0,_=at,A=ye}return}Gt=Gt||Dt,$t=$t||Mt,fe=fe||Tt,(Dt!==f||Gt!==x)&&(i.blendEquationSeparate(Q[Dt],Q[Gt]),f=Dt,x=Gt),(Mt!==p||Tt!==y||$t!==b||fe!==L)&&(i.blendFuncSeparate(G[Mt],G[Tt],G[$t],G[fe]),p=Mt,y=Tt,b=$t,L=fe),(ke.equals(E)===!1||Ke!==v)&&(i.blendColor(ke.r,ke.g,ke.b,Ke),E.copy(ke),v=Ke),_=at,A=!1}function rt(at,Dt){at.side===Ie?q(i.CULL_FACE):B(i.CULL_FACE);let Mt=at.side===zn;Dt&&(Mt=!Mt),$(Mt),at.blending===xi&&at.transparent===!1?S(cr):S(at.blending,at.blendEquation,at.blendSrc,at.blendDst,at.blendEquationAlpha,at.blendSrcAlpha,at.blendDstAlpha,at.blendColor,at.blendAlpha,at.premultipliedAlpha),s.setFunc(at.depthFunc),s.setTest(at.depthTest),s.setMask(at.depthWrite),r.setMask(at.colorWrite);let Tt=at.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(at.stencilWriteMask),o.setFunc(at.stencilFunc,at.stencilRef,at.stencilFuncMask),o.setOp(at.stencilFail,at.stencilZFail,at.stencilZPass)),nt(at.polygonOffset,at.polygonOffsetFactor,at.polygonOffsetUnits),at.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):q(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(at){k!==at&&(at?i.frontFace(i.CW):i.frontFace(i.CCW),k=at)}function W(at){at!==zf?(B(i.CULL_FACE),at!==M&&(at===uu?i.cullFace(i.BACK):at===Vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):q(i.CULL_FACE),M=at}function j(at){at!==T&&(ut&&i.lineWidth(at),T=at)}function nt(at,Dt,Mt){at?(B(i.POLYGON_OFFSET_FILL),(J!==Dt||z!==Mt)&&(i.polygonOffset(Dt,Mt),J=Dt,z=Mt)):q(i.POLYGON_OFFSET_FILL)}function ct(at){at?B(i.SCISSOR_TEST):q(i.SCISSOR_TEST)}function I(at){at===void 0&&(at=i.TEXTURE0+X-1),U!==at&&(i.activeTexture(at),U=at)}function w(at,Dt,Mt){Mt===void 0&&(U===null?Mt=i.TEXTURE0+X-1:Mt=U);let Tt=tt[Mt];Tt===void 0&&(Tt={type:void 0,texture:void 0},tt[Mt]=Tt),(Tt.type!==at||Tt.texture!==Dt)&&(U!==Mt&&(i.activeTexture(Mt),U=Mt),i.bindTexture(at,Dt||P[at]),Tt.type=at,Tt.texture=Dt)}function F(){let at=tt[U];at!==void 0&&at.type!==void 0&&(i.bindTexture(at.type,null),at.type=void 0,at.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(at){console.error("THREE.WebGLState:",at)}}function Ft(at){Z.equals(at)===!1&&(i.scissor(at.x,at.y,at.z,at.w),Z.copy(at))}function Rt(at){D.equals(at)===!1&&(i.viewport(at.x,at.y,at.z,at.w),D.copy(at))}function Ct(at,Dt){let Mt=c.get(Dt);Mt===void 0&&(Mt=new WeakMap,c.set(Dt,Mt));let Tt=Mt.get(at);Tt===void 0&&(Tt=i.getUniformBlockIndex(Dt,at.name),Mt.set(at,Tt))}function Vt(at,Dt){let Tt=c.get(Dt).get(at);a.get(Dt)!==Tt&&(i.uniformBlockBinding(Dt,Tt,at.__bindingPointIndex),a.set(Dt,Tt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},U=null,tt={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,x=null,b=null,L=null,E=new kt(0,0,0),v=0,A=!1,k=null,M=null,T=null,J=null,z=null,Z.set(0,0,i.canvas.width,i.canvas.height),D.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:B,disable:q,bindFramebuffer:O,drawBuffers:H,useProgram:Y,setBlending:S,setMaterial:rt,setFlipSided:$,setCullFace:W,setLineWidth:j,setPolygonOffset:nt,setScissorTest:ct,activeTexture:I,bindTexture:w,unbindTexture:F,compressedTexImage2D:et,compressedTexImage3D:lt,texImage2D:At,texImage3D:zt,updateUBOMapping:Ct,uniformBlockBinding:Vt,texStorage2D:Lt,texStorage3D:mt,texSubImage2D:it,texSubImage3D:vt,compressedTexSubImage2D:xt,compressedTexSubImage3D:dt,scissor:Ft,viewport:Rt,reset:ee}}function s0(i,t,e,n){let r=I_(n);switch(e){case T0:return i*t;case R0:return i*t;case C0:return i*t*2;case Dh:return i*t/r.components*r.byteLength;case Uh:return i*t/r.components*r.byteLength;case P0:return i*t*2/r.components*r.byteLength;case Nh:return i*t*2/r.components*r.byteLength;case A0:return i*t*3/r.components*r.byteLength;case hi:return i*t*4/r.components*r.byteLength;case Hh:return i*t*4/r.components*r.byteLength;case ba:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(t,8)/4;case dl:case ml:return Math.max(i,8)*Math.max(t,8)/2;case _l:case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sa:case Ul:case Nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case I0:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fl:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I_(i){switch(i){case zi:case E0:return{byteLength:1,components:1};case go:case w0:case Io:return{byteLength:2,components:1};case Ih:case Lh:return{byteLength:2,components:4};case Nr:case Ph:case yi:return{byteLength:4,components:1};case S0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function L_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return m?new OffscreenCanvas(I,w):La("canvas")}function _(I,w,F){let et=1,lt=ct(I);if((lt.width>F||lt.height>F)&&(et=F/Math.max(lt.width,lt.height)),et<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let it=Math.floor(et*lt.width),vt=Math.floor(et*lt.height);u===void 0&&(u=g(it,vt));let xt=w?g(it,vt):u;return xt.width=it,xt.height=vt,xt.getContext("2d").drawImage(I,0,0,it,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+vt+")."),xt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),I;return I}function f(I){return I.generateMipmaps&&I.minFilter!==En&&I.minFilter!==ci}function p(I){i.generateMipmap(I)}function y(I,w,F,et,lt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let it=w;if(w===i.RED&&(F===i.FLOAT&&(it=i.R32F),F===i.HALF_FLOAT&&(it=i.R16F),F===i.UNSIGNED_BYTE&&(it=i.R8)),w===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(it=i.R8UI),F===i.UNSIGNED_SHORT&&(it=i.R16UI),F===i.UNSIGNED_INT&&(it=i.R32UI),F===i.BYTE&&(it=i.R8I),F===i.SHORT&&(it=i.R16I),F===i.INT&&(it=i.R32I)),w===i.RG&&(F===i.FLOAT&&(it=i.RG32F),F===i.HALF_FLOAT&&(it=i.RG16F),F===i.UNSIGNED_BYTE&&(it=i.RG8)),w===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(it=i.RG8UI),F===i.UNSIGNED_SHORT&&(it=i.RG16UI),F===i.UNSIGNED_INT&&(it=i.RG32UI),F===i.BYTE&&(it=i.RG8I),F===i.SHORT&&(it=i.RG16I),F===i.INT&&(it=i.RG32I)),w===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(it=i.RGB8UI),F===i.UNSIGNED_SHORT&&(it=i.RGB16UI),F===i.UNSIGNED_INT&&(it=i.RGB32UI),F===i.BYTE&&(it=i.RGB8I),F===i.SHORT&&(it=i.RGB16I),F===i.INT&&(it=i.RGB32I)),w===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),F===i.UNSIGNED_INT&&(it=i.RGBA32UI),F===i.BYTE&&(it=i.RGBA8I),F===i.SHORT&&(it=i.RGBA16I),F===i.INT&&(it=i.RGBA32I)),w===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),w===i.RGBA){let vt=lt?Ra:De.getTransfer(et);F===i.FLOAT&&(it=i.RGBA32F),F===i.HALF_FLOAT&&(it=i.RGBA16F),F===i.UNSIGNED_BYTE&&(it=vt===Ge?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(I,w){let F;return I?w===null||w===Nr||w===ws?F=i.DEPTH24_STENCIL8:w===yi?F=i.DEPTH32F_STENCIL8:w===go&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Nr||w===ws?F=i.DEPTH_COMPONENT24:w===yi?F=i.DEPTH_COMPONENT32F:w===go&&(F=i.DEPTH_COMPONENT16),F}function b(I,w){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==En&&I.minFilter!==ci?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function L(I){let w=I.target;w.removeEventListener("dispose",L),v(w),w.isVideoTexture&&h.delete(w)}function E(I){let w=I.target;w.removeEventListener("dispose",E),k(w)}function v(I){let w=n.get(I);if(w.__webglInit===void 0)return;let F=I.source,et=d.get(F);if(et){let lt=et[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&A(I),Object.keys(et).length===0&&d.delete(F)}n.remove(I)}function A(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let F=I.source,et=d.get(F);delete et[w.__cacheKey],o.memory.textures--}function k(I){let w=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let lt=0;lt<w.__webglFramebuffer[et].length;lt++)i.deleteFramebuffer(w.__webglFramebuffer[et][lt]);else i.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)i.deleteFramebuffer(w.__webglFramebuffer[et]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let F=I.textures;for(let et=0,lt=F.length;et<lt;et++){let it=n.get(F[et]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(F[et])}n.remove(I)}let M=0;function T(){M=0}function J(){let I=M;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),M+=1,I}function z(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function X(I,w){let F=n.get(I);if(I.isVideoTexture&&j(I),I.isRenderTargetTexture===!1&&I.version>0&&F.__version!==I.version){let et=I.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(F,I,w);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+w)}function ut(I,w){let F=n.get(I);if(I.version>0&&F.__version!==I.version){D(F,I,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+w)}function ot(I,w){let F=n.get(I);if(I.version>0&&F.__version!==I.version){D(F,I,w);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+w)}function pt(I,w){let F=n.get(I);if(I.version>0&&F.__version!==I.version){R(F,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+w)}let U={[Ur]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[fl]:i.MIRRORED_REPEAT},tt={[En]:i.NEAREST,[md]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[ci]:i.LINEAR,[Mc]:i.LINEAR_MIPMAP_NEAREST,[Dr]:i.LINEAR_MIPMAP_LINEAR},V={[xd]:i.NEVER,[Sd]:i.ALWAYS,[Md]:i.LESS,[L0]:i.LEQUAL,[bd]:i.EQUAL,[wd]:i.GEQUAL,[vd]:i.GREATER,[Ed]:i.NOTEQUAL};function K(I,w){if(w.type===yi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ci||w.magFilter===Mc||w.magFilter===Vo||w.magFilter===Dr||w.minFilter===ci||w.minFilter===Mc||w.minFilter===Vo||w.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,U[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,U[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,U[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,tt[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,tt[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,V[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===En||w.minFilter!==Vo&&w.minFilter!==Dr||w.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Z(I,w){let F=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",L));let et=w.source,lt=d.get(et);lt===void 0&&(lt={},d.set(et,lt));let it=z(w);if(it!==I.__cacheKey){lt[it]===void 0&&(lt[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),lt[it].usedTimes++;let vt=lt[I.__cacheKey];vt!==void 0&&(lt[I.__cacheKey].usedTimes--,vt.usedTimes===0&&A(w)),I.__cacheKey=it,I.__webglTexture=lt[it].texture}return F}function D(I,w,F){let et=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=i.TEXTURE_3D);let lt=Z(I,w),it=w.source;e.bindTexture(et,I.__webglTexture,i.TEXTURE0+F);let vt=n.get(it);if(it.version!==vt.__version||lt===!0){e.activeTexture(i.TEXTURE0+F);let xt=De.getPrimaries(De.workingColorSpace),dt=w.colorSpace===or?null:De.getPrimaries(w.colorSpace),Lt=w.colorSpace===or||xt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let mt=_(w.image,!1,r.maxTextureSize);mt=nt(w,mt);let At=s.convert(w.format,w.colorSpace),zt=s.convert(w.type),Ft=y(w.internalFormat,At,zt,w.colorSpace,w.isVideoTexture);K(et,w);let Rt,Ct=w.mipmaps,Vt=w.isVideoTexture!==!0,ee=vt.__version===void 0||lt===!0,at=it.dataReady,Dt=b(w,mt);if(w.isDepthTexture)Ft=x(w.format===Ss,w.type),ee&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ft,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,mt.width,mt.height,0,At,zt,null));else if(w.isDataTexture)if(Ct.length>0){Vt&&ee&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Ct[0].width,Ct[0].height);for(let Mt=0,Tt=Ct.length;Mt<Tt;Mt++)Rt=Ct[Mt],Vt?at&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Rt.width,Rt.height,At,zt,Rt.data):e.texImage2D(i.TEXTURE_2D,Mt,Ft,Rt.width,Rt.height,0,At,zt,Rt.data);w.generateMipmaps=!1}else Vt?(ee&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,mt.width,mt.height),at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,At,zt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,mt.width,mt.height,0,At,zt,mt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Vt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ft,Ct[0].width,Ct[0].height,mt.depth);for(let Mt=0,Tt=Ct.length;Mt<Tt;Mt++)if(Rt=Ct[Mt],w.format!==hi)if(At!==null)if(Vt){if(at)if(w.layerUpdates.size>0){let Gt=s0(Rt.width,Rt.height,w.format,w.type);for(let $t of w.layerUpdates){let fe=Rt.data.subarray($t*Gt/Rt.data.BYTES_PER_ELEMENT,($t+1)*Gt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,$t,Rt.width,Rt.height,1,At,fe,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Rt.width,Rt.height,mt.depth,At,Rt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,Ft,Rt.width,Rt.height,mt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Rt.width,Rt.height,mt.depth,At,zt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,Ft,Rt.width,Rt.height,mt.depth,0,At,zt,Rt.data)}else{Vt&&ee&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Ct[0].width,Ct[0].height);for(let Mt=0,Tt=Ct.length;Mt<Tt;Mt++)Rt=Ct[Mt],w.format!==hi?At!==null?Vt?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,Ft,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?at&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Rt.width,Rt.height,At,zt,Rt.data):e.texImage2D(i.TEXTURE_2D,Mt,Ft,Rt.width,Rt.height,0,At,zt,Rt.data)}else if(w.isDataArrayTexture)if(Vt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ft,mt.width,mt.height,mt.depth),at)if(w.layerUpdates.size>0){let Mt=s0(mt.width,mt.height,w.format,w.type);for(let Tt of w.layerUpdates){let Gt=mt.data.subarray(Tt*Mt/mt.data.BYTES_PER_ELEMENT,(Tt+1)*Mt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,mt.width,mt.height,1,At,zt,Gt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,At,zt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,mt.width,mt.height,mt.depth,0,At,zt,mt.data);else if(w.isData3DTexture)Vt?(ee&&e.texStorage3D(i.TEXTURE_3D,Dt,Ft,mt.width,mt.height,mt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,At,zt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,mt.width,mt.height,mt.depth,0,At,zt,mt.data);else if(w.isFramebufferTexture){if(ee)if(Vt)e.texStorage2D(i.TEXTURE_2D,Dt,Ft,mt.width,mt.height);else{let Mt=mt.width,Tt=mt.height;for(let Gt=0;Gt<Dt;Gt++)e.texImage2D(i.TEXTURE_2D,Gt,Ft,Mt,Tt,0,At,zt,null),Mt>>=1,Tt>>=1}}else if(Ct.length>0){if(Vt&&ee){let Mt=ct(Ct[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Mt.width,Mt.height)}for(let Mt=0,Tt=Ct.length;Mt<Tt;Mt++)Rt=Ct[Mt],Vt?at&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,At,zt,Rt):e.texImage2D(i.TEXTURE_2D,Mt,Ft,At,zt,Rt);w.generateMipmaps=!1}else if(Vt){if(ee){let Mt=ct(mt);e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Mt.width,Mt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,zt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,At,zt,mt);f(w)&&p(et),vt.__version=it.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function R(I,w,F){if(w.image.length!==6)return;let et=Z(I,w),lt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+F);let it=n.get(lt);if(lt.version!==it.__version||et===!0){e.activeTexture(i.TEXTURE0+F);let vt=De.getPrimaries(De.workingColorSpace),xt=w.colorSpace===or?null:De.getPrimaries(w.colorSpace),dt=w.colorSpace===or||vt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Lt=w.isCompressedTexture||w.image[0].isCompressedTexture,mt=w.image[0]&&w.image[0].isDataTexture,At=[];for(let Tt=0;Tt<6;Tt++)!Lt&&!mt?At[Tt]=_(w.image[Tt],!0,r.maxCubemapSize):At[Tt]=mt?w.image[Tt].image:w.image[Tt],At[Tt]=nt(w,At[Tt]);let zt=At[0],Ft=s.convert(w.format,w.colorSpace),Rt=s.convert(w.type),Ct=y(w.internalFormat,Ft,Rt,w.colorSpace),Vt=w.isVideoTexture!==!0,ee=it.__version===void 0||et===!0,at=lt.dataReady,Dt=b(w,zt);K(i.TEXTURE_CUBE_MAP,w);let Mt;if(Lt){Vt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ct,zt.width,zt.height);for(let Tt=0;Tt<6;Tt++){Mt=At[Tt].mipmaps;for(let Gt=0;Gt<Mt.length;Gt++){let $t=Mt[Gt];w.format!==hi?Ft!==null?Vt?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Gt,0,0,$t.width,$t.height,Ft,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Gt,Ct,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Gt,0,0,$t.width,$t.height,Ft,Rt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Gt,Ct,$t.width,$t.height,0,Ft,Rt,$t.data)}}}else{if(Mt=w.mipmaps,Vt&&ee){Mt.length>0&&Dt++;let Tt=ct(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ct,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(mt){Vt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,At[Tt].width,At[Tt].height,Ft,Rt,At[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,At[Tt].width,At[Tt].height,0,Ft,Rt,At[Tt].data);for(let Gt=0;Gt<Mt.length;Gt++){let fe=Mt[Gt].image[Tt].image;Vt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Gt+1,0,0,fe.width,fe.height,Ft,Rt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Gt+1,Ct,fe.width,fe.height,0,Ft,Rt,fe.data)}}else{Vt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Ft,Rt,At[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,Ft,Rt,At[Tt]);for(let Gt=0;Gt<Mt.length;Gt++){let $t=Mt[Gt];Vt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Gt+1,0,0,Ft,Rt,$t.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Gt+1,Ct,Ft,Rt,$t.image[Tt])}}}f(w)&&p(i.TEXTURE_CUBE_MAP),it.__version=lt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function P(I,w,F,et,lt,it){let vt=s.convert(F.format,F.colorSpace),xt=s.convert(F.type),dt=y(F.internalFormat,vt,xt,F.colorSpace);if(!n.get(w).__hasExternalTextures){let mt=Math.max(1,w.width>>it),At=Math.max(1,w.height>>it);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,dt,mt,At,w.depth,0,vt,xt,null):e.texImage2D(lt,it,dt,mt,At,0,vt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),W(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,lt,n.get(F).__webglTexture,0,$(w)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,lt,n.get(F).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function B(I,w,F){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let et=w.depthTexture,lt=et&&et.isDepthTexture?et.type:null,it=x(w.stencilBuffer,lt),vt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=$(w);W(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,it,w.width,w.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,it,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,it,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,I)}else{let et=w.textures;for(let lt=0;lt<et.length;lt++){let it=et[lt],vt=s.convert(it.format,it.colorSpace),xt=s.convert(it.type),dt=y(it.internalFormat,vt,xt,it.colorSpace),Lt=$(w);F&&W(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,dt,w.width,w.height):W(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,dt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,dt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let et=n.get(w.depthTexture).__webglTexture,lt=$(w);if(w.depthTexture.format===ys)W(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(w.depthTexture.format===Ss)W(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function O(I){let w=n.get(I),F=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let et=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){let lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",lt)};et.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=et}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");q(w.__webglFramebuffer,I)}else if(F){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=i.createRenderbuffer(),B(w.__webglDepthbuffer[et],I,!1);else{let lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=w.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),B(w.__webglDepthbuffer,I,!1);else{let et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function H(I,w,F){let et=n.get(I);w!==void 0&&P(et.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&O(I)}function Y(I){let w=I.texture,F=n.get(I),et=n.get(w);I.addEventListener("dispose",E);let lt=I.textures,it=I.isWebGLCubeRenderTarget===!0,vt=lt.length>1;if(vt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=w.version,o.memory.textures++),it){F.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[xt]=[];for(let dt=0;dt<w.mipmaps.length;dt++)F.__webglFramebuffer[xt][dt]=i.createFramebuffer()}else F.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)F.__webglFramebuffer[xt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(vt)for(let xt=0,dt=lt.length;xt<dt;xt++){let Lt=n.get(lt[xt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&W(I)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xt=0;xt<lt.length;xt++){let dt=lt[xt];F.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[xt]);let Lt=s.convert(dt.format,dt.colorSpace),mt=s.convert(dt.type),At=y(dt.internalFormat,Lt,mt,dt.colorSpace,I.isXRRenderTarget===!0),zt=$(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,At,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,F.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),B(F.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),K(i.TEXTURE_CUBE_MAP,w);for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)P(F.__webglFramebuffer[xt][dt],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,dt);else P(F.__webglFramebuffer[xt],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);f(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let xt=0,dt=lt.length;xt<dt;xt++){let Lt=lt[xt],mt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),K(i.TEXTURE_2D,Lt),P(F.__webglFramebuffer,I,Lt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),f(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,et.__webglTexture),K(xt,w),w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)P(F.__webglFramebuffer[dt],I,w,i.COLOR_ATTACHMENT0,xt,dt);else P(F.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,xt,0);f(w)&&p(xt),e.unbindTexture()}I.depthBuffer&&O(I)}function Q(I){let w=I.textures;for(let F=0,et=w.length;F<et;F++){let lt=w[F];if(f(lt)){let it=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(lt).__webglTexture;e.bindTexture(it,vt),p(it),e.unbindTexture()}}}let G=[],S=[];function rt(I){if(I.samples>0){if(W(I)===!1){let w=I.textures,F=I.width,et=I.height,lt=i.COLOR_BUFFER_BIT,it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(I),xt=w.length>1;if(xt)for(let dt=0;dt<w.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let dt=0;dt<w.length;dt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let Lt=n.get(w[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,F,et,0,0,F,et,lt,i.NEAREST),c===!0&&(G.length=0,S.length=0,G.push(i.COLOR_ATTACHMENT0+dt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(G.push(it),S.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,S)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let dt=0;dt<w.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let Lt=n.get(w[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function $(I){return Math.min(r.maxSamples,I.samples)}function W(I){let w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function j(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function nt(I,w){let F=I.colorSpace,et=I.format,lt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||F!==dr&&F!==or&&(De.getTransfer(F)===Ge?(et!==hi||lt!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}function ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=ut,this.setTexture3D=ot,this.setTextureCube=pt,this.rebindTextures=H,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=P,this.useMultisampledRTT=W}function D_(i,t){function e(n,r=or){let s,o=De.getTransfer(r);if(n===zi)return i.UNSIGNED_BYTE;if(n===Ih)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===S0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===E0)return i.BYTE;if(n===w0)return i.SHORT;if(n===go)return i.UNSIGNED_SHORT;if(n===Ph)return i.INT;if(n===Nr)return i.UNSIGNED_INT;if(n===yi)return i.FLOAT;if(n===Io)return i.HALF_FLOAT;if(n===T0)return i.ALPHA;if(n===A0)return i.RGB;if(n===hi)return i.RGBA;if(n===R0)return i.LUMINANCE;if(n===C0)return i.LUMINANCE_ALPHA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Dh)return i.RED;if(n===Uh)return i.RED_INTEGER;if(n===P0)return i.RG;if(n===Nh)return i.RG_INTEGER;if(n===Hh)return i.RGBA_INTEGER;if(n===ba||n===va||n===Ea||n===wa)if(o===Ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dl||n===pl||n===ml||n===gl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===yl||n===xl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_l||n===yl)return o===Ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ml||n===bl||n===vl||n===El||n===wl||n===Sl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ml)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===Ul||n===Nl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Sa)return o===Ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===I0||n===Hl||n===Fl||n===Ol)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var th=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Zt=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},U_={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Vn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Gn({vertexShader:N_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nh=class extends hr{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=new eh,f=e.getContextAttributes(),p=null,y=null,x=[],b=[],L=new Ut,E=null,v=new Mn;v.layers.enable(1),v.viewport=new Fe;let A=new Mn;A.layers.enable(2),A.viewport=new Fe;let k=[v,A],M=new th;M.layers.enable(1),M.layers.enable(2);let T=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let P=x[R];return P===void 0&&(P=new ho,x[R]=P),P.getTargetRaySpace()},this.getControllerGrip=function(R){let P=x[R];return P===void 0&&(P=new ho,x[R]=P),P.getGripSpace()},this.getHand=function(R){let P=x[R];return P===void 0&&(P=new ho,x[R]=P),P.getHandSpace()};function z(R){let P=b.indexOf(R.inputSource);if(P===-1)return;let B=x[P];B!==void 0&&(B.update(R.inputSource,R.frame,l||o),B.dispatchEvent({type:R.type,data:R.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ut);for(let R=0;R<x.length;R++){let P=b[R];P!==null&&(b[R]=null,x[R].disconnect(P))}T=null,J=null,_.reset(),t.setRenderTarget(p),m=null,d=null,u=null,r=null,y=null,D.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ut),f.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){let P={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,P),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Vi(m.framebufferWidth,m.framebufferHeight,{format:hi,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let P=null,B=null,q=null;f.depth&&(q=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,P=f.stencil?Ss:ys,B=f.stencil?ws:Nr);let O={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(O),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Vi(d.textureWidth,d.textureHeight,{format:hi,type:zi,depthTexture:new Va(d.textureWidth,d.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),D.setContext(r),D.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ut(R){for(let P=0;P<R.removed.length;P++){let B=R.removed[P],q=b.indexOf(B);q>=0&&(b[q]=null,x[q].disconnect(B))}for(let P=0;P<R.added.length;P++){let B=R.added[P],q=b.indexOf(B);if(q===-1){for(let H=0;H<x.length;H++)if(H>=b.length){b.push(B),q=H;break}else if(b[H]===null){b[H]=B,q=H;break}if(q===-1)break}let O=x[q];O&&O.connect(B)}}let ot=new C,pt=new C;function U(R,P,B){ot.setFromMatrixPosition(P.matrixWorld),pt.setFromMatrixPosition(B.matrixWorld);let q=ot.distanceTo(pt),O=P.projectionMatrix.elements,H=B.projectionMatrix.elements,Y=O[14]/(O[10]-1),Q=O[14]/(O[10]+1),G=(O[9]+1)/O[5],S=(O[9]-1)/O[5],rt=(O[8]-1)/O[0],$=(H[8]+1)/H[0],W=Y*rt,j=Y*$,nt=q/(-rt+$),ct=nt*-rt;if(P.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(ct),R.translateZ(nt),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),O[10]===-1)R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{let I=Y+nt,w=Q+nt,F=W-ct,et=j+(q-ct),lt=G*Q/w*I,it=S*Q/w*I;R.projectionMatrix.makePerspective(F,et,lt,it,I,w),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function tt(R,P){P===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(P.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;let P=R.near,B=R.far;_.texture!==null&&(_.depthNear>0&&(P=_.depthNear),_.depthFar>0&&(B=_.depthFar)),M.near=A.near=v.near=P,M.far=A.far=v.far=B,(T!==M.near||J!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,J=M.far);let q=R.parent,O=M.cameras;tt(M,q);for(let H=0;H<O.length;H++)tt(O[H],q);O.length===2?U(M,v,A):M.projectionMatrix.copy(v.projectionMatrix),V(R,M,q)};function V(R,P,B){B===null?R.matrix.copy(P.matrixWorld):(R.matrix.copy(B.matrixWorld),R.matrix.invert(),R.matrix.multiply(P.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=_o*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(R){c=R,d!==null&&(d.fixedFoveation=R),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=R)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let K=null;function Z(R,P){if(h=P.getViewerPose(l||o),g=P,h!==null){let B=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let q=!1;B.length!==M.cameras.length&&(M.cameras.length=0,q=!0);for(let H=0;H<B.length;H++){let Y=B[H],Q=null;if(m!==null)Q=m.getViewport(Y);else{let S=u.getViewSubImage(d,Y);Q=S.viewport,H===0&&(t.setRenderTargetTextures(y,S.colorTexture,d.ignoreDepthValues?void 0:S.depthStencilTexture),t.setRenderTarget(y))}let G=k[H];G===void 0&&(G=new Mn,G.layers.enable(H),G.viewport=new Fe,k[H]=G),G.matrix.fromArray(Y.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(Y.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(Q.x,Q.y,Q.width,Q.height),H===0&&(M.matrix.copy(G.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),q===!0&&M.cameras.push(G)}let O=r.enabledFeatures;if(O&&O.includes("depth-sensing")){let H=u.getDepthInformation(B[0]);H&&H.isValid&&H.texture&&_.init(t,H,r.renderState)}}for(let B=0;B<x.length;B++){let q=b[B],O=x[B];q!==null&&O!==void 0&&O.update(q,P,l||o)}K&&K(R,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),g=null}let D=new H0;D.setAnimationLoop(Z),this.setAnimationLoop=function(R){K=R},this.dispose=function(){}}},Cr=new bn,F_=new ae;function O_(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,N0(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,y,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,y,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===zn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===zn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y=t.get(p),x=y.envMap,b=y.envMapRotation;x&&(f.envMap.value=x,Cr.copy(b),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),f.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Cr)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,y,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let y=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function B_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){let b=x.program;n.uniformBlockBinding(y,b)}function l(y,x){let b=r[y.id];b===void 0&&(g(y),b=h(y),r[y.id]=b,y.addEventListener("dispose",f));let L=x.program;n.updateUBOMapping(y,L);let E=t.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function h(y){let x=u();y.__bindingPointIndex=x;let b=i.createBuffer(),L=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=r[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,v=b.length;E<v;E++){let A=Array.isArray(b[E])?b[E]:[b[E]];for(let k=0,M=A.length;k<M;k++){let T=A[k];if(m(T,E,k,L)===!0){let J=T.__offset,z=Array.isArray(T.value)?T.value:[T.value],X=0;for(let ut=0;ut<z.length;ut++){let ot=z[ut],pt=_(ot);typeof ot=="number"||typeof ot=="boolean"?(T.__data[0]=ot,i.bufferSubData(i.UNIFORM_BUFFER,J+X,T.__data)):ot.isMatrix3?(T.__data[0]=ot.elements[0],T.__data[1]=ot.elements[1],T.__data[2]=ot.elements[2],T.__data[3]=0,T.__data[4]=ot.elements[3],T.__data[5]=ot.elements[4],T.__data[6]=ot.elements[5],T.__data[7]=0,T.__data[8]=ot.elements[6],T.__data[9]=ot.elements[7],T.__data[10]=ot.elements[8],T.__data[11]=0):(ot.toArray(T.__data,X),X+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,b,L){let E=y.value,v=x+"_"+b;if(L[v]===void 0)return typeof E=="number"||typeof E=="boolean"?L[v]=E:L[v]=E.clone(),!0;{let A=L[v];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return L[v]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(y){let x=y.uniforms,b=0,L=16;for(let v=0,A=x.length;v<A;v++){let k=Array.isArray(x[v])?x[v]:[x[v]];for(let M=0,T=k.length;M<T;M++){let J=k[M],z=Array.isArray(J.value)?J.value:[J.value];for(let X=0,ut=z.length;X<ut;X++){let ot=z[X],pt=_(ot),U=b%L,tt=U%pt.boundary,V=U+tt;b+=tt,V!==0&&L-V<pt.storage&&(b+=L-V),J.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=b,b+=pt.storage}}}let E=b%L;return E>0&&(b+=L-E),y.__size=b,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){let x=y.target;x.removeEventListener("dispose",f);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var As=class{constructor(t={}){let{canvas:e=Vd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=lr,this.toneMappingExposure=1;let x=this,b=!1,L=0,E=0,v=null,A=-1,k=null,M=new Fe,T=new Fe,J=null,z=new kt(0),X=0,ut=e.width,ot=e.height,pt=1,U=null,tt=null,V=new Fe(0,0,ut,ot),K=new Fe(0,0,ut,ot),Z=!1,D=new xo,R=!1,P=!1,B=new ae,q=new ae,O=new C,H=new Fe,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function G(){return v===null?pt:1}let S=n;function rt(N,ht){return e.getContext(N,ht)}try{let N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",$t,!1),S===null){let ht="webgl2";if(S=rt(ht,N),S===null)throw rt(ht)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let $,W,j,nt,ct,I,w,F,et,lt,it,vt,xt,dt,Lt,mt,At,zt,Ft,Rt,Ct,Vt,ee,at;function Dt(){$=new e1(S),$.init(),Vt=new D_(S,$),W=new $g(S,$,t,Vt),j=new P_(S),W.reverseDepthBuffer&&j.buffers.depth.setReversed(!0),nt=new r1(S),ct=new __,I=new L_(S,$,j,ct,W,Vt,nt),w=new Jg(x),F=new t1(x),et=new up(S),ee=new Yg(S,et),lt=new n1(S,et,nt,ee),it=new o1(S,lt,et,nt),Ft=new s1(S,W,I),mt=new Kg(ct),vt=new g_(x,w,F,$,W,ee,mt),xt=new O_(x,ct),dt=new x_,Lt=new S_($),zt=new qg(x,w,F,j,it,d,c),At=new R_(x,it,W),at=new B_(S,nt,W,j),Rt=new Zg(S,$,nt),Ct=new i1(S,$,nt),nt.programs=vt.programs,x.capabilities=W,x.extensions=$,x.properties=ct,x.renderLists=dt,x.shadowMap=At,x.state=j,x.info=nt}Dt();let Mt=new nh(x,S);this.xr=Mt,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let N=$.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=$.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(N){N!==void 0&&(pt=N,this.setSize(ut,ot,!1))},this.getSize=function(N){return N.set(ut,ot)},this.setSize=function(N,ht,_t=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ut=N,ot=ht,e.width=Math.floor(N*pt),e.height=Math.floor(ht*pt),_t===!0&&(e.style.width=N+"px",e.style.height=ht+"px"),this.setViewport(0,0,N,ht)},this.getDrawingBufferSize=function(N){return N.set(ut*pt,ot*pt).floor()},this.setDrawingBufferSize=function(N,ht,_t){ut=N,ot=ht,pt=_t,e.width=Math.floor(N*_t),e.height=Math.floor(ht*_t),this.setViewport(0,0,N,ht)},this.getCurrentViewport=function(N){return N.copy(M)},this.getViewport=function(N){return N.copy(V)},this.setViewport=function(N,ht,_t,yt){N.isVector4?V.set(N.x,N.y,N.z,N.w):V.set(N,ht,_t,yt),j.viewport(M.copy(V).multiplyScalar(pt).round())},this.getScissor=function(N){return N.copy(K)},this.setScissor=function(N,ht,_t,yt){N.isVector4?K.set(N.x,N.y,N.z,N.w):K.set(N,ht,_t,yt),j.scissor(T.copy(K).multiplyScalar(pt).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(N){j.setScissorTest(Z=N)},this.setOpaqueSort=function(N){U=N},this.setTransparentSort=function(N){tt=N},this.getClearColor=function(N){return N.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(N=!0,ht=!0,_t=!0){let yt=0;if(N){let ft=!1;if(v!==null){let Ht=v.texture.format;ft=Ht===Hh||Ht===Nh||Ht===Uh}if(ft){let Ht=v.texture.type,qt=Ht===zi||Ht===Nr||Ht===go||Ht===ws||Ht===Ih||Ht===Lh,Jt=zt.getClearColor(),jt=zt.getClearAlpha(),oe=Jt.r,ie=Jt.g,te=Jt.b;qt?(m[0]=oe,m[1]=ie,m[2]=te,m[3]=jt,S.clearBufferuiv(S.COLOR,0,m)):(g[0]=oe,g[1]=ie,g[2]=te,g[3]=jt,S.clearBufferiv(S.COLOR,0,g))}else yt|=S.COLOR_BUFFER_BIT}ht&&(yt|=S.DEPTH_BUFFER_BIT,S.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),_t&&(yt|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(yt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),dt.dispose(),Lt.dispose(),ct.dispose(),w.dispose(),F.dispose(),it.dispose(),ee.dispose(),at.dispose(),vt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Ri),Mt.removeEventListener("sessionend",Oo),Wn.stop()};function Tt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let N=nt.autoReset,ht=At.enabled,_t=At.autoUpdate,yt=At.needsUpdate,ft=At.type;Dt(),nt.autoReset=N,At.enabled=ht,At.autoUpdate=_t,At.needsUpdate=yt,At.type=ft}function $t(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function fe(N){let ht=N.target;ht.removeEventListener("dispose",fe),ke(ht)}function ke(N){Ke(N),ct.remove(N)}function Ke(N){let ht=ct.get(N).programs;ht!==void 0&&(ht.forEach(function(_t){vt.releaseProgram(_t)}),N.isShaderMaterial&&vt.releaseShaderCache(N))}this.renderBufferDirect=function(N,ht,_t,yt,ft,Ht){ht===null&&(ht=Y);let qt=ft.isMesh&&ft.matrixWorld.determinant()<0,Jt=Xs(N,ht,_t,yt,ft);j.setMaterial(yt,qt);let jt=_t.index,oe=1;if(yt.wireframe===!0){if(jt=lt.getWireframeAttribute(_t),jt===void 0)return;oe=2}let ie=_t.drawRange,te=_t.attributes.position,Ae=ie.start*oe,le=(ie.start+ie.count)*oe;Ht!==null&&(Ae=Math.max(Ae,Ht.start*oe),le=Math.min(le,(Ht.start+Ht.count)*oe)),jt!==null?(Ae=Math.max(Ae,0),le=Math.min(le,jt.count)):te!=null&&(Ae=Math.max(Ae,0),le=Math.min(le,te.count));let Ve=le-Ae;if(Ve<0||Ve===1/0)return;ee.setup(ft,yt,Jt,_t,jt);let An,Me=Rt;if(jt!==null&&(An=et.get(jt),Me=Ct,Me.setIndex(An)),ft.isMesh)yt.wireframe===!0?(j.setLineWidth(yt.wireframeLinewidth*G()),Me.setMode(S.LINES)):Me.setMode(S.TRIANGLES);else if(ft.isLine){let ne=yt.linewidth;ne===void 0&&(ne=1),j.setLineWidth(ne*G()),ft.isLineSegments?Me.setMode(S.LINES):ft.isLineLoop?Me.setMode(S.LINE_LOOP):Me.setMode(S.LINE_STRIP)}else ft.isPoints?Me.setMode(S.POINTS):ft.isSprite&&Me.setMode(S.TRIANGLES);if(ft.isBatchedMesh)if(ft._multiDrawInstances!==null)Me.renderMultiDrawInstances(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount,ft._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Me.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{let ne=ft._multiDrawStarts,rn=ft._multiDrawCounts,Re=ft._multiDrawCount,Xn=jt?et.get(jt).bytesPerElement:1,Ji=ct.get(yt).currentProgram.getUniforms();for(let Rn=0;Rn<Re;Rn++)Ji.setValue(S,"_gl_DrawID",Rn),Me.render(ne[Rn]/Xn,rn[Rn])}else if(ft.isInstancedMesh)Me.renderInstances(Ae,Ve,ft.count);else if(_t.isInstancedBufferGeometry){let ne=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,rn=Math.min(_t.instanceCount,ne);Me.renderInstances(Ae,Ve,rn)}else Me.render(Ae,Ve)};function ye(N,ht,_t){N.transparent===!0&&N.side===Ie&&N.forceSinglePass===!1?(N.side=zn,N.needsUpdate=!0,Zr(N,ht,_t),N.side=Ln,N.needsUpdate=!0,Zr(N,ht,_t),N.side=Ie):Zr(N,ht,_t)}this.compile=function(N,ht,_t=null){_t===null&&(_t=N),f=Lt.get(_t),f.init(ht),y.push(f),_t.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ht.layers)&&(f.pushLight(ft),ft.castShadow&&f.pushShadow(ft))}),N!==_t&&N.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ht.layers)&&(f.pushLight(ft),ft.castShadow&&f.pushShadow(ft))}),f.setupLights();let yt=new Set;return N.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;let Ht=ft.material;if(Ht)if(Array.isArray(Ht))for(let qt=0;qt<Ht.length;qt++){let Jt=Ht[qt];ye(Jt,_t,ft),yt.add(Jt)}else ye(Ht,_t,ft),yt.add(Ht)}),y.pop(),f=null,yt},this.compileAsync=function(N,ht,_t=null){let yt=this.compile(N,ht,_t);return new Promise(ft=>{function Ht(){if(yt.forEach(function(qt){ct.get(qt).currentProgram.isReady()&&yt.delete(qt)}),yt.size===0){ft(N);return}setTimeout(Ht,10)}$.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let Je=null;function kn(N){Je&&Je(N)}function Ri(){Wn.stop()}function Oo(){Wn.start()}let Wn=new H0;Wn.setAnimationLoop(kn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(N){Je=N,Mt.setAnimationLoop(N),N===null?Wn.stop():Wn.start()},Mt.addEventListener("sessionstart",Ri),Mt.addEventListener("sessionend",Oo),this.render=function(N,ht){if(ht!==void 0&&ht.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ht.parent===null&&ht.matrixWorldAutoUpdate===!0&&ht.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(ht),ht=Mt.getCamera()),N.isScene===!0&&N.onBeforeRender(x,N,ht,v),f=Lt.get(N,y.length),f.init(ht),y.push(f),q.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),D.setFromProjectionMatrix(q),P=this.localClippingEnabled,R=mt.init(this.clippingPlanes,P),_=dt.get(N,p.length),_.init(),p.push(_),Mt.enabled===!0&&Mt.isPresenting===!0){let Ht=x.xr.getDepthSensingMesh();Ht!==null&&xr(Ht,ht,-1/0,x.sortObjects)}xr(N,ht,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(U,tt),Q=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Q&&zt.addToRenderList(_,N),this.info.render.frame++,R===!0&&mt.beginShadows();let _t=f.state.shadowsArray;At.render(_t,N,ht),R===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let yt=_.opaque,ft=_.transmissive;if(f.setupLights(),ht.isArrayCamera){let Ht=ht.cameras;if(ft.length>0)for(let qt=0,Jt=Ht.length;qt<Jt;qt++){let jt=Ht[qt];Ue(yt,ft,N,jt)}Q&&zt.render(N);for(let qt=0,Jt=Ht.length;qt<Jt;qt++){let jt=Ht[qt];Yr(_,N,jt,jt.viewport)}}else ft.length>0&&Ue(yt,ft,N,ht),Q&&zt.render(N),Yr(_,N,ht);v!==null&&(I.updateMultisampleRenderTarget(v),I.updateRenderTargetMipmap(v)),N.isScene===!0&&N.onAfterRender(x,N,ht),ee.resetDefaultState(),A=-1,k=null,y.pop(),y.length>0?(f=y[y.length-1],R===!0&&mt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function xr(N,ht,_t,yt){if(N.visible===!1)return;if(N.layers.test(ht.layers)){if(N.isGroup)_t=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ht);else if(N.isLight)f.pushLight(N),N.castShadow&&f.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||D.intersectsSprite(N)){yt&&H.setFromMatrixPosition(N.matrixWorld).applyMatrix4(q);let qt=it.update(N),Jt=N.material;Jt.visible&&_.push(N,qt,Jt,_t,H.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||D.intersectsObject(N))){let qt=it.update(N),Jt=N.material;if(yt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),H.copy(N.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),H.copy(qt.boundingSphere.center)),H.applyMatrix4(N.matrixWorld).applyMatrix4(q)),Array.isArray(Jt)){let jt=qt.groups;for(let oe=0,ie=jt.length;oe<ie;oe++){let te=jt[oe],Ae=Jt[te.materialIndex];Ae&&Ae.visible&&_.push(N,qt,Ae,_t,H.z,te)}}else Jt.visible&&_.push(N,qt,Jt,_t,H.z,null)}}let Ht=N.children;for(let qt=0,Jt=Ht.length;qt<Jt;qt++)xr(Ht[qt],ht,_t,yt)}function Yr(N,ht,_t,yt){let ft=N.opaque,Ht=N.transmissive,qt=N.transparent;f.setupLightsView(_t),R===!0&&mt.setGlobalState(x.clippingPlanes,_t),yt&&j.viewport(M.copy(yt)),ft.length>0&&Ci(ft,ht,_t),Ht.length>0&&Ci(Ht,ht,_t),qt.length>0&&Ci(qt,ht,_t),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Ue(N,ht,_t,yt){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[yt.id]===void 0&&(f.state.transmissionRenderTarget[yt.id]=new Vi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Io:zi,minFilter:Dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));let Ht=f.state.transmissionRenderTarget[yt.id],qt=yt.viewport||M;Ht.setSize(qt.z,qt.w);let Jt=x.getRenderTarget();x.setRenderTarget(Ht),x.getClearColor(z),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Q&&zt.render(_t);let jt=x.toneMapping;x.toneMapping=lr;let oe=yt.viewport;if(yt.viewport!==void 0&&(yt.viewport=void 0),f.setupLightsView(yt),R===!0&&mt.setGlobalState(x.clippingPlanes,yt),Ci(N,_t,yt),I.updateMultisampleRenderTarget(Ht),I.updateRenderTargetMipmap(Ht),$.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let te=0,Ae=ht.length;te<Ae;te++){let le=ht[te],Ve=le.object,An=le.geometry,Me=le.material,ne=le.group;if(Me.side===Ie&&Ve.layers.test(yt.layers)){let rn=Me.side;Me.side=zn,Me.needsUpdate=!0,ri(Ve,_t,yt,An,Me,ne),Me.side=rn,Me.needsUpdate=!0,ie=!0}}ie===!0&&(I.updateMultisampleRenderTarget(Ht),I.updateRenderTargetMipmap(Ht))}x.setRenderTarget(Jt),x.setClearColor(z,X),oe!==void 0&&(yt.viewport=oe),x.toneMapping=jt}function Ci(N,ht,_t){let yt=ht.isScene===!0?ht.overrideMaterial:null;for(let ft=0,Ht=N.length;ft<Ht;ft++){let qt=N[ft],Jt=qt.object,jt=qt.geometry,oe=yt===null?qt.material:yt,ie=qt.group;Jt.layers.test(_t.layers)&&ri(Jt,ht,_t,jt,oe,ie)}}function ri(N,ht,_t,yt,ft,Ht){N.onBeforeRender(x,ht,_t,yt,ft,Ht),N.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ft.onBeforeRender(x,ht,_t,yt,N,Ht),ft.transparent===!0&&ft.side===Ie&&ft.forceSinglePass===!1?(ft.side=zn,ft.needsUpdate=!0,x.renderBufferDirect(_t,ht,yt,ft,N,Ht),ft.side=Ln,ft.needsUpdate=!0,x.renderBufferDirect(_t,ht,yt,ft,N,Ht),ft.side=Ie):x.renderBufferDirect(_t,ht,yt,ft,N,Ht),N.onAfterRender(x,ht,_t,yt,ft,Ht)}function Zr(N,ht,_t){ht.isScene!==!0&&(ht=Y);let yt=ct.get(N),ft=f.state.lights,Ht=f.state.shadowsArray,qt=ft.state.version,Jt=vt.getParameters(N,ft.state,Ht,ht,_t),jt=vt.getProgramCacheKey(Jt),oe=yt.programs;yt.environment=N.isMeshStandardMaterial?ht.environment:null,yt.fog=ht.fog,yt.envMap=(N.isMeshStandardMaterial?F:w).get(N.envMap||yt.environment),yt.envMapRotation=yt.environment!==null&&N.envMap===null?ht.environmentRotation:N.envMapRotation,oe===void 0&&(N.addEventListener("dispose",fe),oe=new Map,yt.programs=oe);let ie=oe.get(jt);if(ie!==void 0){if(yt.currentProgram===ie&&yt.lightsStateVersion===qt)return ko(N,Jt),ie}else Jt.uniforms=vt.getUniforms(N),N.onBeforeCompile(Jt,x),ie=vt.acquireProgram(Jt,jt),oe.set(jt,ie),yt.uniforms=Jt.uniforms;let te=yt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(te.clippingPlanes=mt.uniform),ko(N,Jt),yt.needsLights=$r(N),yt.lightsStateVersion=qt,yt.needsLights&&(te.ambientLightColor.value=ft.state.ambient,te.lightProbe.value=ft.state.probe,te.directionalLights.value=ft.state.directional,te.directionalLightShadows.value=ft.state.directionalShadow,te.spotLights.value=ft.state.spot,te.spotLightShadows.value=ft.state.spotShadow,te.rectAreaLights.value=ft.state.rectArea,te.ltc_1.value=ft.state.rectAreaLTC1,te.ltc_2.value=ft.state.rectAreaLTC2,te.pointLights.value=ft.state.point,te.pointLightShadows.value=ft.state.pointShadow,te.hemisphereLights.value=ft.state.hemi,te.directionalShadowMap.value=ft.state.directionalShadowMap,te.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,te.spotShadowMap.value=ft.state.spotShadowMap,te.spotLightMatrix.value=ft.state.spotLightMatrix,te.spotLightMap.value=ft.state.spotLightMap,te.pointShadowMap.value=ft.state.pointShadowMap,te.pointShadowMatrix.value=ft.state.pointShadowMatrix),yt.currentProgram=ie,yt.uniformsList=null,ie}function Bo(N){if(N.uniformsList===null){let ht=N.currentProgram.getUniforms();N.uniformsList=Ms.seqWithValue(ht.seq,N.uniforms)}return N.uniformsList}function ko(N,ht){let _t=ct.get(N);_t.outputColorSpace=ht.outputColorSpace,_t.batching=ht.batching,_t.batchingColor=ht.batchingColor,_t.instancing=ht.instancing,_t.instancingColor=ht.instancingColor,_t.instancingMorph=ht.instancingMorph,_t.skinning=ht.skinning,_t.morphTargets=ht.morphTargets,_t.morphNormals=ht.morphNormals,_t.morphColors=ht.morphColors,_t.morphTargetsCount=ht.morphTargetsCount,_t.numClippingPlanes=ht.numClippingPlanes,_t.numIntersection=ht.numClipIntersection,_t.vertexAlphas=ht.vertexAlphas,_t.vertexTangents=ht.vertexTangents,_t.toneMapping=ht.toneMapping}function Xs(N,ht,_t,yt,ft){ht.isScene!==!0&&(ht=Y),I.resetTextureUnits();let Ht=ht.fog,qt=yt.isMeshStandardMaterial?ht.environment:null,Jt=v===null?x.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:dr,jt=(yt.isMeshStandardMaterial?F:w).get(yt.envMap||qt),oe=yt.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,ie=!!_t.attributes.tangent&&(!!yt.normalMap||yt.anisotropy>0),te=!!_t.morphAttributes.position,Ae=!!_t.morphAttributes.normal,le=!!_t.morphAttributes.color,Ve=lr;yt.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(Ve=x.toneMapping);let An=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,Me=An!==void 0?An.length:0,ne=ct.get(yt),rn=f.state.lights;if(R===!0&&(P===!0||N!==k)){let Cn=N===k&&yt.id===A;mt.setState(yt,N,Cn)}let Re=!1;yt.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==rn.state.version||ne.outputColorSpace!==Jt||ft.isBatchedMesh&&ne.batching===!1||!ft.isBatchedMesh&&ne.batching===!0||ft.isBatchedMesh&&ne.batchingColor===!0&&ft.colorTexture===null||ft.isBatchedMesh&&ne.batchingColor===!1&&ft.colorTexture!==null||ft.isInstancedMesh&&ne.instancing===!1||!ft.isInstancedMesh&&ne.instancing===!0||ft.isSkinnedMesh&&ne.skinning===!1||!ft.isSkinnedMesh&&ne.skinning===!0||ft.isInstancedMesh&&ne.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&ne.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&ne.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&ne.instancingMorph===!1&&ft.morphTexture!==null||ne.envMap!==jt||yt.fog===!0&&ne.fog!==Ht||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==mt.numPlanes||ne.numIntersection!==mt.numIntersection)||ne.vertexAlphas!==oe||ne.vertexTangents!==ie||ne.morphTargets!==te||ne.morphNormals!==Ae||ne.morphColors!==le||ne.toneMapping!==Ve||ne.morphTargetsCount!==Me)&&(Re=!0):(Re=!0,ne.__version=yt.version);let Xn=ne.currentProgram;Re===!0&&(Xn=Zr(yt,ht,ft));let Ji=!1,Rn=!1,qs=!1,Xe=Xn.getUniforms(),gi=ne.uniforms;if(j.useProgram(Xn.program)&&(Ji=!0,Rn=!0,qs=!0),yt.id!==A&&(A=yt.id,Rn=!0),Ji||k!==N){W.reverseDepthBuffer?(B.copy(N.projectionMatrix),Wd(B),Xd(B),Xe.setValue(S,"projectionMatrix",B)):Xe.setValue(S,"projectionMatrix",N.projectionMatrix),Xe.setValue(S,"viewMatrix",N.matrixWorldInverse);let Cn=Xe.map.cameraPosition;Cn!==void 0&&Cn.setValue(S,O.setFromMatrixPosition(N.matrixWorld)),W.logarithmicDepthBuffer&&Xe.setValue(S,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(yt.isMeshPhongMaterial||yt.isMeshToonMaterial||yt.isMeshLambertMaterial||yt.isMeshBasicMaterial||yt.isMeshStandardMaterial||yt.isShaderMaterial)&&Xe.setValue(S,"isOrthographic",N.isOrthographicCamera===!0),k!==N&&(k=N,Rn=!0,qs=!0)}if(ft.isSkinnedMesh){Xe.setOptional(S,ft,"bindMatrix"),Xe.setOptional(S,ft,"bindMatrixInverse");let Cn=ft.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Xe.setValue(S,"boneTexture",Cn.boneTexture,I))}ft.isBatchedMesh&&(Xe.setOptional(S,ft,"batchingTexture"),Xe.setValue(S,"batchingTexture",ft._matricesTexture,I),Xe.setOptional(S,ft,"batchingIdTexture"),Xe.setValue(S,"batchingIdTexture",ft._indirectTexture,I),Xe.setOptional(S,ft,"batchingColorTexture"),ft._colorsTexture!==null&&Xe.setValue(S,"batchingColorTexture",ft._colorsTexture,I));let ji=_t.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Ft.update(ft,_t,Xn),(Rn||ne.receiveShadow!==ft.receiveShadow)&&(ne.receiveShadow=ft.receiveShadow,Xe.setValue(S,"receiveShadow",ft.receiveShadow)),yt.isMeshGouraudMaterial&&yt.envMap!==null&&(gi.envMap.value=jt,gi.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),yt.isMeshStandardMaterial&&yt.envMap===null&&ht.environment!==null&&(gi.envMapIntensity.value=ht.environmentIntensity),Rn&&(Xe.setValue(S,"toneMappingExposure",x.toneMappingExposure),ne.needsLights&&Pi(gi,qs),Ht&&yt.fog===!0&&xt.refreshFogUniforms(gi,Ht),xt.refreshMaterialUniforms(gi,yt,pt,ot,f.state.transmissionRenderTarget[N.id]),Ms.upload(S,Bo(ne),gi,I)),yt.isShaderMaterial&&yt.uniformsNeedUpdate===!0&&(Ms.upload(S,Bo(ne),gi,I),yt.uniformsNeedUpdate=!1),yt.isSpriteMaterial&&Xe.setValue(S,"center",ft.center),Xe.setValue(S,"modelViewMatrix",ft.modelViewMatrix),Xe.setValue(S,"normalMatrix",ft.normalMatrix),Xe.setValue(S,"modelMatrix",ft.matrixWorld),yt.isShaderMaterial||yt.isRawShaderMaterial){let Cn=yt.uniformsGroups;for(let Qi=0,qe=Cn.length;Qi<qe;Qi++){let Mr=Cn[Qi];at.update(Mr,Xn),at.bind(Mr,Xn)}}return Xn}function Pi(N,ht){N.ambientLightColor.needsUpdate=ht,N.lightProbe.needsUpdate=ht,N.directionalLights.needsUpdate=ht,N.directionalLightShadows.needsUpdate=ht,N.pointLights.needsUpdate=ht,N.pointLightShadows.needsUpdate=ht,N.spotLights.needsUpdate=ht,N.spotLightShadows.needsUpdate=ht,N.rectAreaLights.needsUpdate=ht,N.hemisphereLights.needsUpdate=ht}function $r(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(N,ht,_t){ct.get(N.texture).__webglTexture=ht,ct.get(N.depthTexture).__webglTexture=_t;let yt=ct.get(N);yt.__hasExternalTextures=!0,yt.__autoAllocateDepthBuffer=_t===void 0,yt.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),yt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,ht){let _t=ct.get(N);_t.__webglFramebuffer=ht,_t.__useDefaultFramebuffer=ht===void 0},this.setRenderTarget=function(N,ht=0,_t=0){v=N,L=ht,E=_t;let yt=!0,ft=null,Ht=!1,qt=!1;if(N){let jt=ct.get(N);if(jt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(S.FRAMEBUFFER,null),yt=!1;else if(jt.__webglFramebuffer===void 0)I.setupRenderTarget(N);else if(jt.__hasExternalTextures)I.rebindTextures(N,ct.get(N.texture).__webglTexture,ct.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let te=N.depthTexture;if(jt.__boundDepthTexture!==te){if(te!==null&&ct.has(te)&&(N.width!==te.image.width||N.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(N)}}let oe=N.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(qt=!0);let ie=ct.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ie[ht])?ft=ie[ht][_t]:ft=ie[ht],Ht=!0):N.samples>0&&I.useMultisampledRTT(N)===!1?ft=ct.get(N).__webglMultisampledFramebuffer:Array.isArray(ie)?ft=ie[_t]:ft=ie,M.copy(N.viewport),T.copy(N.scissor),J=N.scissorTest}else M.copy(V).multiplyScalar(pt).floor(),T.copy(K).multiplyScalar(pt).floor(),J=Z;if(j.bindFramebuffer(S.FRAMEBUFFER,ft)&&yt&&j.drawBuffers(N,ft),j.viewport(M),j.scissor(T),j.setScissorTest(J),Ht){let jt=ct.get(N.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jt.__webglTexture,_t)}else if(qt){let jt=ct.get(N.texture),oe=ht||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,jt.__webglTexture,_t||0,oe)}A=-1},this.readRenderTargetPixels=function(N,ht,_t,yt,ft,Ht,qt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=ct.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt){j.bindFramebuffer(S.FRAMEBUFFER,Jt);try{let jt=N.texture,oe=jt.format,ie=jt.type;if(!W.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ht>=0&&ht<=N.width-yt&&_t>=0&&_t<=N.height-ft&&S.readPixels(ht,_t,yt,ft,Vt.convert(oe),Vt.convert(ie),Ht)}finally{let jt=v!==null?ct.get(v).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(N,ht,_t,yt,ft,Ht,qt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=ct.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt){let jt=N.texture,oe=jt.format,ie=jt.type;if(!W.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ht>=0&&ht<=N.width-yt&&_t>=0&&_t<=N.height-ft){j.bindFramebuffer(S.FRAMEBUFFER,Jt);let te=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,te),S.bufferData(S.PIXEL_PACK_BUFFER,Ht.byteLength,S.STREAM_READ),S.readPixels(ht,_t,yt,ft,Vt.convert(oe),Vt.convert(ie),0);let Ae=v!==null?ct.get(v).__webglFramebuffer:null;j.bindFramebuffer(S.FRAMEBUFFER,Ae);let le=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Gd(S,le,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,te),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Ht),S.deleteBuffer(te),S.deleteSync(le),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,ht=null,_t=0){N.isTexture!==!0&&(Ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ht=arguments[0]||null,N=arguments[1]);let yt=Math.pow(2,-_t),ft=Math.floor(N.image.width*yt),Ht=Math.floor(N.image.height*yt),qt=ht!==null?ht.x:0,Jt=ht!==null?ht.y:0;I.setTexture2D(N,0),S.copyTexSubImage2D(S.TEXTURE_2D,_t,0,0,qt,Jt,ft,Ht),j.unbindTexture()},this.copyTextureToTexture=function(N,ht,_t=null,yt=null,ft=0){N.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture function signature has changed."),yt=arguments[0]||null,N=arguments[1],ht=arguments[2],ft=arguments[3]||0,_t=null);let Ht,qt,Jt,jt,oe,ie;_t!==null?(Ht=_t.max.x-_t.min.x,qt=_t.max.y-_t.min.y,Jt=_t.min.x,jt=_t.min.y):(Ht=N.image.width,qt=N.image.height,Jt=0,jt=0),yt!==null?(oe=yt.x,ie=yt.y):(oe=0,ie=0);let te=Vt.convert(ht.format),Ae=Vt.convert(ht.type);I.setTexture2D(ht,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ht.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ht.unpackAlignment);let le=S.getParameter(S.UNPACK_ROW_LENGTH),Ve=S.getParameter(S.UNPACK_IMAGE_HEIGHT),An=S.getParameter(S.UNPACK_SKIP_PIXELS),Me=S.getParameter(S.UNPACK_SKIP_ROWS),ne=S.getParameter(S.UNPACK_SKIP_IMAGES),rn=N.isCompressedTexture?N.mipmaps[ft]:N.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,rn.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,rn.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Jt),S.pixelStorei(S.UNPACK_SKIP_ROWS,jt),N.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ft,oe,ie,Ht,qt,te,Ae,rn.data):N.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ft,oe,ie,rn.width,rn.height,te,rn.data):S.texSubImage2D(S.TEXTURE_2D,ft,oe,ie,Ht,qt,te,Ae,rn),S.pixelStorei(S.UNPACK_ROW_LENGTH,le),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ve),S.pixelStorei(S.UNPACK_SKIP_PIXELS,An),S.pixelStorei(S.UNPACK_SKIP_ROWS,Me),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ne),ft===0&&ht.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(N,ht,_t=null,yt=null,ft=0){N.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),_t=arguments[0]||null,yt=arguments[1]||null,N=arguments[2],ht=arguments[3],ft=arguments[4]||0);let Ht,qt,Jt,jt,oe,ie,te,Ae,le,Ve=N.isCompressedTexture?N.mipmaps[ft]:N.image;_t!==null?(Ht=_t.max.x-_t.min.x,qt=_t.max.y-_t.min.y,Jt=_t.max.z-_t.min.z,jt=_t.min.x,oe=_t.min.y,ie=_t.min.z):(Ht=Ve.width,qt=Ve.height,Jt=Ve.depth,jt=0,oe=0,ie=0),yt!==null?(te=yt.x,Ae=yt.y,le=yt.z):(te=0,Ae=0,le=0);let An=Vt.convert(ht.format),Me=Vt.convert(ht.type),ne;if(ht.isData3DTexture)I.setTexture3D(ht,0),ne=S.TEXTURE_3D;else if(ht.isDataArrayTexture||ht.isCompressedArrayTexture)I.setTexture2DArray(ht,0),ne=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,ht.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,ht.unpackAlignment);let rn=S.getParameter(S.UNPACK_ROW_LENGTH),Re=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Xn=S.getParameter(S.UNPACK_SKIP_PIXELS),Ji=S.getParameter(S.UNPACK_SKIP_ROWS),Rn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Ve.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ve.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,jt),S.pixelStorei(S.UNPACK_SKIP_ROWS,oe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ie),N.isDataTexture||N.isData3DTexture?S.texSubImage3D(ne,ft,te,Ae,le,Ht,qt,Jt,An,Me,Ve.data):ht.isCompressedArrayTexture?S.compressedTexSubImage3D(ne,ft,te,Ae,le,Ht,qt,Jt,An,Ve.data):S.texSubImage3D(ne,ft,te,Ae,le,Ht,qt,Jt,An,Me,Ve),S.pixelStorei(S.UNPACK_ROW_LENGTH,rn),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Re),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Xn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ji),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Rn),ft===0&&ht.generateMipmaps&&S.generateMipmap(ne),j.unbindTexture()},this.initRenderTarget=function(N){ct.get(N).__webglFramebuffer===void 0&&I.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?I.setTextureCube(N,0):N.isData3DTexture?I.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?I.setTexture2DArray(N,0):I.setTexture2D(N,0),j.unbindTexture()},this.resetState=function(){L=0,E=0,v=null,j.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Oh?"display-p3":"srgb",e.unpackColorSpace=De.workingColorSpace===ic?"display-p3":"srgb"}};var Ga=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ih=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=kl,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fn=new C,Wa=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix4(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyNormalMatrix(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.transformDirection(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qn=class extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,to=new C,fs=new C,ds=new C,ps=new Ut,eo=new Ut,z0=new ae,la=new C,no=new C,ha=new C,o0=new Ut,$c=new Ut,a0=new Ut,fi=class extends on{constructor(t=new Qn){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ih(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Wa(n,3,0,!1)),us.setAttribute("uv",new Wa(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),z0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ds.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;ua(la.set(-.5,-.5,0),ds,o,fs,r,s),ua(no.set(.5,-.5,0),ds,o,fs,r,s),ua(ha.set(.5,.5,0),ds,o,fs,r,s),o0.set(0,0),$c.set(1,0),a0.set(1,1);let a=t.ray.intersectTriangle(la,no,ha,!1,to);if(a===null&&(ua(no.set(-.5,.5,0),ds,o,fs,r,s),$c.set(0,1),a=t.ray.intersectTriangle(la,ha,no,!1,to),a===null))return;let c=t.ray.origin.distanceTo(to);c<t.near||c>t.far||e.push({distance:c,point:to.clone(),uv:ar.getInterpolation(to,la,no,ha,o0,$c,a0,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ua(i,t,e,n,r,s){ps.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(eo.x=s*ps.x-r*ps.y,eo.y=r*ps.x+s*ps.y):eo.copy(ps),i.copy(t),i.x+=eo.x,i.y+=eo.y,i.applyMatrix4(z0)}var rh=class extends Vn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=En,h=En,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xa=class extends Le{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new ae,c0=new ae,fa=[],l0=new Gi,k_=new ae,io=new St,ro=new Wi,Cs=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,k_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),l0.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(l0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),ro.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),t.ray.intersectsSphere(ro)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),c0.multiplyMatrices(n,ms),io.matrixWorld=c0,io.raycast(t,fa);for(let o=0,a=fa.length;o<a;o++){let c=fa[o];c.instanceId=s,c.object=this,e.push(c)}fa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new rh(new Float32Array(r*this.count),r,this.count,Dh,yi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Mo=class extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qa=new C,Ya=new C,h0=new ae,so=new yo,da=new Wi,Kc=new C,u0=new C,Za=class extends on{constructor(t=new be,e=new Mo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)qa.fromBufferAttribute(e,r-1),Ya.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=qa.distanceTo(Ya);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),da.radius+=s,t.ray.intersectsSphere(da)===!1)return;h0.copy(r).invert(),so.copy(t.ray).applyMatrix4(h0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=h.getX(_),y=h.getX(_+1),x=pa(this,t,so,c,p,y);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),f=h.getX(m),p=pa(this,t,so,c,_,f);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=pa(this,t,so,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=pa(this,t,so,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function pa(i,t,e,n,r,s){let o=i.geometry.attributes.position;if(qa.fromBufferAttribute(o,r),Ya.fromBufferAttribute(o,s),e.distanceSqToSegment(qa,Ya,Kc,u0)>n)return;Kc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Kc);if(!(c<t.near||c>t.far))return{distance:c,point:u0.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var ur=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},f0=new ae,sh=new yo,ma=new Wi,ga=new C,fr=class extends on{constructor(t=new be,e=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),ma.radius+=s,t.ray.intersectsSphere(ma)===!1)return;f0.copy(r).invert(),sh.copy(t.ray).applyMatrix4(f0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let f=l.getX(g);ga.fromBufferAttribute(u,f),d0(ga,f,c,r,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)ga.fromBufferAttribute(u,g),d0(ga,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function d0(i,t,e,n,r,s,o){let a=sh.distanceSqToPoint(i);if(a<e){let c=new C;sh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Dn=class extends Vn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Ut:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,r=[],s=[],o=[],a=new C,c=new ae;for(let m=0;m<=t;m++){let g=m/t;r[m]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(xn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(xn(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},bo=class extends ti{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ut){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oh=class extends bo{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zh(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,r(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var _a=new C,Jc=new zh,jc=new zh,Qc=new zh,ah=class extends ti{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new C){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(_a.subVectors(r[0],r[1]).add(r[0]),l=_a);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(_a.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=_a),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Jc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,f),jc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,f),Qc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),jc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Qc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Jc.calc(c),jc.calc(c),Qc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new C().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function p0(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function z_(i,t){let e=1-i;return e*e*t}function V_(i,t){return 2*(1-i)*i*t}function G_(i,t){return i*i*t}function uo(i,t,e,n){return z_(i,t)+V_(i,e)+G_(i,n)}function W_(i,t){let e=1-i;return e*e*e*t}function X_(i,t){let e=1-i;return 3*e*e*i*t}function q_(i,t){return 3*(1-i)*i*i*t}function Y_(i,t){return i*i*i*t}function fo(i,t,e,n,r){return W_(i,t)+X_(i,e)+q_(i,n)+Y_(i,r)}var $a=class extends ti{constructor(t=new Ut,e=new Ut,n=new Ut,r=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ut){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,r.x,s.x,o.x,a.x),fo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ch=class extends ti{constructor(t=new C,e=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new C){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,r.x,s.x,o.x,a.x),fo(t,r.y,s.y,o.y,a.y),fo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ka=class extends ti{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lh=class extends ti{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends ti{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(uo(t,r.x,s.x,o.x),uo(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hh=class extends ti{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(uo(t,r.x,s.x,o.x),uo(t,r.y,s.y,o.y),uo(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(p0(a,c.x,l.x,h.x,u.x),p0(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Ut().fromArray(r))}return this}},uh=Object.freeze({__proto__:null,ArcCurve:oh,CatmullRomCurve3:ah,CubicBezierCurve:$a,CubicBezierCurve3:ch,EllipseCurve:bo,LineCurve:Ka,LineCurve3:lh,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:hh,SplineCurve:ja}),fh=class extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new uh[r.type]().fromJSON(r))}return this}},vo=class extends fh{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ka(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Ja(this.currentPoint.clone(),new Ut(t,e),new Ut(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new $a(this.currentPoint.clone(),new Ut(t,e),new Ut(n,r),new Ut(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ja(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new bo(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},dh=class i extends be{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=xn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new C,d=new Ut,m=new C,g=new C,_=new C,f=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*r,b=Math.sin(x),L=Math.cos(x);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*b,u.y=t[E].y,u.z=t[E].x*L,o.push(u.x,u.y,u.z),d.x=y/e,d.y=E/(t.length-1),a.push(d.x,d.y);let v=c[3*E+0]*b,A=c[3*E+1],k=c[3*E+0]*L;l.push(v,A,k)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let b=x+y*t.length,L=b,E=b+t.length,v=b+t.length+1,A=b+1;s.push(L,E,A),s.push(v,A,E)}this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Eo=class i extends dh{constructor(t=1,e=1,n=4,r=8){let s=new vo;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},wo=class i extends be{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new C,h=new Ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ee=class i extends be{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],g=0,_=[],f=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(m,2));function y(){let b=new C,L=new C,E=0,v=(e-t)/n;for(let A=0;A<=s;A++){let k=[],M=A/s,T=M*(e-t)+t;for(let J=0;J<=r;J++){let z=J/r,X=z*c+a,ut=Math.sin(X),ot=Math.cos(X);L.x=T*ut,L.y=-M*n+f,L.z=T*ot,u.push(L.x,L.y,L.z),b.set(ut,v,ot).normalize(),d.push(b.x,b.y,b.z),m.push(z,1-M),k.push(g++)}_.push(k)}for(let A=0;A<r;A++)for(let k=0;k<s;k++){let M=_[k][A],T=_[k+1][A],J=_[k+1][A+1],z=_[k][A+1];t>0&&(h.push(M,T,z),E+=3),e>0&&(h.push(T,J,z),E+=3)}l.addGroup(p,E,0),p+=E}function x(b){let L=g,E=new Ut,v=new C,A=0,k=b===!0?t:e,M=b===!0?1:-1;for(let J=1;J<=r;J++)u.push(0,f*M,0),d.push(0,M,0),m.push(.5,.5),g++;let T=g;for(let J=0;J<=r;J++){let X=J/r*c+a,ut=Math.cos(X),ot=Math.sin(X);v.x=k*ot,v.y=f*M,v.z=k*ut,u.push(v.x,v.y,v.z),d.push(0,M,0),E.x=ut*.5+.5,E.y=ot*.5*M+.5,m.push(E.x,E.y),g++}for(let J=0;J<r;J++){let z=L+J,X=T+J;b===!0?h.push(X,X+1,z):h.push(X+1,X,z),A+=3}l.addGroup(p,A,b===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Un=class i extends Ee{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qa=class i extends be{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new C,b=new C,L=new C;for(let E=0;E<e.length;E+=3)m(e[E+0],x),m(e[E+1],b),m(e[E+2],L),c(x,b,L,y)}function c(y,x,b,L){let E=L+1,v=[];for(let A=0;A<=E;A++){v[A]=[];let k=y.clone().lerp(b,A/E),M=x.clone().lerp(b,A/E),T=E-A;for(let J=0;J<=T;J++)J===0&&A===E?v[A][J]=k:v[A][J]=k.clone().lerp(M,J/T)}for(let A=0;A<E;A++)for(let k=0;k<2*(E-A)-1;k++){let M=Math.floor(k/2);k%2===0?(d(v[A][M+1]),d(v[A+1][M]),d(v[A][M])):(d(v[A][M+1]),d(v[A+1][M+1]),d(v[A+1][M]))}}function l(y){let x=new C;for(let b=0;b<s.length;b+=3)x.x=s[b+0],x.y=s[b+1],x.z=s[b+2],x.normalize().multiplyScalar(y),s[b+0]=x.x,s[b+1]=x.y,s[b+2]=x.z}function h(){let y=new C;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let b=f(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(b,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],b=o[y+2],L=o[y+4],E=Math.max(x,b,L),v=Math.min(x,b,L);E>.9&&v<.1&&(x<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function m(y,x){let b=y*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){let y=new C,x=new C,b=new C,L=new C,E=new Ut,v=new Ut,A=new Ut;for(let k=0,M=0;k<s.length;k+=9,M+=6){y.set(s[k+0],s[k+1],s[k+2]),x.set(s[k+3],s[k+4],s[k+5]),b.set(s[k+6],s[k+7],s[k+8]),E.set(o[M+0],o[M+1]),v.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),L.copy(y).add(x).add(b).divideScalar(3);let T=f(L);_(E,M+0,y,T),_(v,M+2,x,T),_(A,M+4,b,T)}}function _(y,x,b,L){L<0&&y.x===1&&(o[x]=y.x-1),b.x===0&&b.z===0&&(o[x]=L/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Hr=class extends vo{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new vo().fromJSON(r))}return this}},Z_={triangulate:function(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=V0(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=Q_(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return So(s,o,e,a,c,m,0),o}};function V0(i,t,e,n,r){let s,o;if(r===hy(i,t,e,n)>0)for(s=t;s<e;s+=n)o=m0(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=m0(s,i[s],i[s+1],o);return o&&sc(o,o.next)&&(Ao(o),o=o.next),o}function Fr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sc(e,e.next)||$e(e.prev,e,e.next)===0)){if(Ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function So(i,t,e,n,r,s,o){if(!i)return;!o&&s&&ry(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?K_(i,n,r,s):$_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ao(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=J_(Fr(i),t,e),So(i,t,e,n,r,s,2)):o===2&&j_(i,t,e,n,r,s):So(Fr(i),t,e,n,r,s,1);break}}}function $_(i){let t=i.prev,e=i,n=i.next;if($e(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&_s(r,a,s,c,o,l,g.x,g.y)&&$e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function K_(i,t,e,n){let r=i.prev,s=i,o=i.next;if($e(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,p=ph(m,g,t,e,n),y=ph(_,f,t,e,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=p&&b&&b.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&_s(a,h,c,u,l,d,x.x,x.y)&&$e(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&_s(a,h,c,u,l,d,b.x,b.y)&&$e(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&_s(a,h,c,u,l,d,x.x,x.y)&&$e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&_s(a,h,c,u,l,d,b.x,b.y)&&$e(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function J_(i,t,e){let n=i;do{let r=n.prev,s=n.next.next;!sc(r,s)&&G0(r,n,n.next,s)&&To(r,s)&&To(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ao(n),Ao(n.next),n=i=s),n=n.next}while(n!==i);return Fr(n)}function j_(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ay(o,a)){let c=W0(o,a);o=Fr(o,o.next),c=Fr(c,c.next),So(o,t,e,n,r,s,0),So(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Q_(i,t,e,n){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=V0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(oy(l));for(r.sort(ty),s=0;s<r.length;s++)e=ey(r[s],e);return e}function ty(i,t){return i.x-t.x}function ey(i,t){let e=ny(i,t);if(!e)return t;let n=W0(e,i);return Fr(n,n.next),Fr(e,e.next)}function ny(i,t){let e=t,n=-1/0,r,s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&_s(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),To(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&iy(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function iy(i,t){return $e(i.prev,i,t.prev)<0&&$e(t.next,i,i.next)<0}function ry(i,t,e,n){let r=i;do r.z===0&&(r.z=ph(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,sy(r)}function sy(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function ph(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function oy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _s(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function ay(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cy(i,t)&&(To(i,t)&&To(t,i)&&ly(i,t)&&($e(i.prev,i,t.prev)||$e(i,t.prev,t))||sc(i,t)&&$e(i.prev,i,i.next)>0&&$e(t.prev,t,t.next)>0)}function $e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sc(i,t){return i.x===t.x&&i.y===t.y}function G0(i,t,e,n){let r=xa($e(i,t,e)),s=xa($e(i,t,n)),o=xa($e(e,n,i)),a=xa($e(e,n,t));return!!(r!==s&&o!==a||r===0&&ya(i,e,t)||s===0&&ya(i,n,t)||o===0&&ya(e,i,n)||a===0&&ya(e,t,n))}function ya(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xa(i){return i>0?1:i<0?-1:0}function cy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&G0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function To(i,t){return $e(i.prev,i,i.next)<0?$e(i,t,i.next)>=0&&$e(i,i.prev,t)>=0:$e(i,t,i.prev)<0||$e(i,i.next,t)<0}function ly(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function W0(i,t){let e=new mh(i.i,i.x,i.y),n=new mh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function m0(i,t,e,n){let r=new mh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hy(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var po=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];g0(t),_0(n,t);let o=t.length;e.forEach(g0);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,_0(n,e[c]);let a=Z_.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function g0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ps=class i extends be{constructor(t=new Hr([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:uy,x,b=!1,L,E,v,A;p&&(x=p.getSpacedPoints(h),b=!0,d=!1,L=p.computeFrenetFrames(h,!1),E=new C,v=new C,A=new C),d||(f=0,m=0,g=0,_=0);let k=a.extractPoints(l),M=k.shape,T=k.holes;if(!po.isClockWise(M)){M=M.reverse();for(let G=0,S=T.length;G<S;G++){let rt=T[G];po.isClockWise(rt)&&(T[G]=rt.reverse())}}let z=po.triangulateShape(M,T),X=M;for(let G=0,S=T.length;G<S;G++){let rt=T[G];M=M.concat(rt)}function ut(G,S,rt){return S||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(S,rt)}let ot=M.length,pt=z.length;function U(G,S,rt){let $,W,j,nt=G.x-S.x,ct=G.y-S.y,I=rt.x-G.x,w=rt.y-G.y,F=nt*nt+ct*ct,et=nt*w-ct*I;if(Math.abs(et)>Number.EPSILON){let lt=Math.sqrt(F),it=Math.sqrt(I*I+w*w),vt=S.x-ct/lt,xt=S.y+nt/lt,dt=rt.x-w/it,Lt=rt.y+I/it,mt=((dt-vt)*w-(Lt-xt)*I)/(nt*w-ct*I);$=vt+nt*mt-G.x,W=xt+ct*mt-G.y;let At=$*$+W*W;if(At<=2)return new Ut($,W);j=Math.sqrt(At/2)}else{let lt=!1;nt>Number.EPSILON?I>Number.EPSILON&&(lt=!0):nt<-Number.EPSILON?I<-Number.EPSILON&&(lt=!0):Math.sign(ct)===Math.sign(w)&&(lt=!0),lt?($=-ct,W=nt,j=Math.sqrt(F)):($=nt,W=ct,j=Math.sqrt(F/2))}return new Ut($/j,W/j)}let tt=[];for(let G=0,S=X.length,rt=S-1,$=G+1;G<S;G++,rt++,$++)rt===S&&(rt=0),$===S&&($=0),tt[G]=U(X[G],X[rt],X[$]);let V=[],K,Z=tt.concat();for(let G=0,S=T.length;G<S;G++){let rt=T[G];K=[];for(let $=0,W=rt.length,j=W-1,nt=$+1;$<W;$++,j++,nt++)j===W&&(j=0),nt===W&&(nt=0),K[$]=U(rt[$],rt[j],rt[nt]);V.push(K),Z=Z.concat(K)}for(let G=0;G<f;G++){let S=G/f,rt=m*Math.cos(S*Math.PI/2),$=g*Math.sin(S*Math.PI/2)+_;for(let W=0,j=X.length;W<j;W++){let nt=ut(X[W],tt[W],$);q(nt.x,nt.y,-rt)}for(let W=0,j=T.length;W<j;W++){let nt=T[W];K=V[W];for(let ct=0,I=nt.length;ct<I;ct++){let w=ut(nt[ct],K[ct],$);q(w.x,w.y,-rt)}}}let D=g+_;for(let G=0;G<ot;G++){let S=d?ut(M[G],Z[G],D):M[G];b?(v.copy(L.normals[0]).multiplyScalar(S.x),E.copy(L.binormals[0]).multiplyScalar(S.y),A.copy(x[0]).add(v).add(E),q(A.x,A.y,A.z)):q(S.x,S.y,0)}for(let G=1;G<=h;G++)for(let S=0;S<ot;S++){let rt=d?ut(M[S],Z[S],D):M[S];b?(v.copy(L.normals[G]).multiplyScalar(rt.x),E.copy(L.binormals[G]).multiplyScalar(rt.y),A.copy(x[G]).add(v).add(E),q(A.x,A.y,A.z)):q(rt.x,rt.y,u/h*G)}for(let G=f-1;G>=0;G--){let S=G/f,rt=m*Math.cos(S*Math.PI/2),$=g*Math.sin(S*Math.PI/2)+_;for(let W=0,j=X.length;W<j;W++){let nt=ut(X[W],tt[W],$);q(nt.x,nt.y,u+rt)}for(let W=0,j=T.length;W<j;W++){let nt=T[W];K=V[W];for(let ct=0,I=nt.length;ct<I;ct++){let w=ut(nt[ct],K[ct],$);b?q(w.x,w.y+x[h-1].y,x[h-1].x+rt):q(w.x,w.y,u+rt)}}}R(),P();function R(){let G=r.length/3;if(d){let S=0,rt=ot*S;for(let $=0;$<pt;$++){let W=z[$];O(W[2]+rt,W[1]+rt,W[0]+rt)}S=h+f*2,rt=ot*S;for(let $=0;$<pt;$++){let W=z[$];O(W[0]+rt,W[1]+rt,W[2]+rt)}}else{for(let S=0;S<pt;S++){let rt=z[S];O(rt[2],rt[1],rt[0])}for(let S=0;S<pt;S++){let rt=z[S];O(rt[0]+ot*h,rt[1]+ot*h,rt[2]+ot*h)}}n.addGroup(G,r.length/3-G,0)}function P(){let G=r.length/3,S=0;B(X,S),S+=X.length;for(let rt=0,$=T.length;rt<$;rt++){let W=T[rt];B(W,S),S+=W.length}n.addGroup(G,r.length/3-G,1)}function B(G,S){let rt=G.length;for(;--rt>=0;){let $=rt,W=rt-1;W<0&&(W=G.length-1);for(let j=0,nt=h+f*2;j<nt;j++){let ct=ot*j,I=ot*(j+1),w=S+$+ct,F=S+W+ct,et=S+W+I,lt=S+$+I;H(w,F,et,lt)}}}function q(G,S,rt){c.push(G),c.push(S),c.push(rt)}function O(G,S,rt){Y(G),Y(S),Y(rt);let $=r.length/3,W=y.generateTopUV(n,r,$-3,$-2,$-1);Q(W[0]),Q(W[1]),Q(W[2])}function H(G,S,rt,$){Y(G),Y(S),Y($),Y(S),Y(rt),Y($);let W=r.length/3,j=y.generateSideWallUV(n,r,W-6,W-3,W-2,W-1);Q(j[0]),Q(j[1]),Q(j[3]),Q(j[1]),Q(j[2]),Q(j[3])}function Y(G){r.push(c[G*3+0]),r.push(c[G*3+1]),r.push(c[G*3+2])}function Q(G){s.push(G.x),s.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fy(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new uh[r.type]().fromJSON(r)),new i(n,t.options)}},uy={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new Ut(s,o),new Ut(a,c),new Ut(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ut(o,1-c),new Ut(l,1-u),new Ut(d,1-g),new Ut(_,1-p)]:[new Ut(a,1-c),new Ut(h,1-u),new Ut(m,1-g),new Ut(f,1-p)]}};function fy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var pn=class i extends Qa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ro=class i extends Qa{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var we=class i extends be{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,d=new C,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){let y=[],x=p/n,b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let E=L/e;u.x=-t*Math.cos(r+E*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(r+E*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(E+b,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],b=h[p][y],L=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&m.push(x,b,E),(p!==n-1||c<Math.PI)&&m.push(b,L,E)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Zn=class i extends be{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new C,u=new C,d=new C;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let _=g/r*s,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let _=(r+1)*m+g-1,f=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,y=(r+1)*m+g;o.push(_,f,y),o.push(f,p,y)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Se=class extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Is=class extends ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ma(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ls=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gh=class extends Ls{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case mu:s=t,a=2*e-n;break;case gu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mu:o=t,c=2*n-e;break;case gu:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,y=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-m)*f+(1.5+m)*_+.5*g,b=m*f-m*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+y*o[l+L]+x*o[c+L]+b*o[u+L];return s}},_h=class extends Ls{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},yh=class extends Ls{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},di=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ma(e,this.TimeBufferType),this.values=Ma(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ma(t.times,Array),values:Ma(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Aa:e=this.InterpolantFactoryMethodDiscrete;break;case Bl:e=this.InterpolantFactoryMethodLinear;break;case bc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Bl;case this.InterpolantFactoryMethodSmooth:return bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&dy(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===bc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Bl;var Or=class extends di{constructor(t,e,n){super(t,e,n)}};Or.prototype.ValueTypeName="bool";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Aa;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends di{};xh.prototype.ValueTypeName="color";var Mh=class extends di{};Mh.prototype.ValueTypeName="number";var bh=class extends Ls{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)hn.slerpFlat(s,0,o,l-a,o,l,c);return s}},tc=class extends di{InterpolantFactoryMethodLinear(t){return new bh(this.times,this.values,this.getValueSize(),t)}};tc.prototype.ValueTypeName="quaternion";tc.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends di{constructor(t,e,n){super(t,e,n)}};Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Aa;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends di{};vh.prototype.ValueTypeName="vector";var Eh=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},py=new Eh,wh=class{constructor(t){this.manager=t!==void 0?t:py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Co=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ds=class extends Co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},tl=new ae,y0=new C,x0=new C,ec=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;y0.setFromMatrixPosition(t.matrixWorld),e.position.copy(y0),x0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(x0),e.updateMatrixWorld(),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var M0=new ae,oo=new C,el=new C,Sh=class extends ec{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),oo.setFromMatrixPosition(t.matrixWorld),n.position.copy(oo),el.copy(n.position),el.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(el),n.updateMatrixWorld(),r.makeTranslation(-oo.x,-oo.y,-oo.z),M0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(M0)}},pi=class extends Co{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Th=class extends ec{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends Co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Th}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Vh="\\[\\]\\.:\\/",my=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",gy="[^"+Vh.replace("\\.","")+"]",_y=/((?:WC+[\/:])*)/.source.replace("WC",Gh),yy=/(WCOD+)?/.source.replace("WCOD",gy),xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),My=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),by=new RegExp("^"+_y+yy+xy+My+"$"),vy=["material","materials","bones","map"],Ah=class{constructor(t,e,n){let r=n||Ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(my,"")}static parseTrackName(t){let e=by.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);vy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ze.Composite=Ah;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ox=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var X0=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var q0=i=>X0.find(t=>t.id===i)??X0[0];function Z0(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var oc=(i,t,e)=>i+(t-i)*e,$0=i=>Math.min(1,Math.max(0,i)),Lo=(i,t)=>Math.max(0,i)**t;function qh(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var K0=(i,t,e)=>new bn(i,t,e,"ZYX"),Hs=class{constructor(t,e={}){Ye(this,"n",t);Ye(this,"geo",new be);Ye(this,"per");Ye(this,"radial");Ye(this,"closed");Ye(this,"sharp");Ye(this,"caps");Ye(this,"samples");Ye(this,"pos");Ye(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let r=this.radial+1,s=this.samples*r+(this.caps?2:0);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3);let o=new Float32Array(s*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*r+l)*2]=c/(this.samples-1),o[(c*r+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*r+l,u=h+r;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*r,l=c+1,h=(this.samples-1)*r;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new Le(this.pos,3)),this.geo.setAttribute("normal",new Le(this.nor,3)),this.geo.setAttribute("uv",new Le(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:r,radial:s,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=y=>t[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))],u=y=>typeof e=="number"?e:e[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))];for(let y=0;y<a;y++){let x=Math.floor(y/r),b=y%r/r;!o&&x>=n-1&&(x=n-2,b=1);let L=h(x),E=h(x+1);for(let v=0;v<3;v++)if(this.sharp)c[y*3+v]=L[v]+(E[v]-L[v])*b;else{let A=o||x>0?h(x-1)[v]:2*L[v]-E[v],k=o||x+2<n?h(x+2)[v]:2*E[v]-L[v],M=b*b,T=M*b;c[y*3+v]=.5*(2*L[v]+(-A+E[v])*b+(2*A-5*L[v]+4*E[v]-k)*M+(-A+3*L[v]-3*E[v]+k)*T)}l[y]=Math.max(1e-4,Math.abs(u(x)+(u(x+1)-u(x))*b))}let d=new C,m=new C,g=new C,_=new C,f=y=>{let x=o?(y-1+a-1)%(a-1):Math.max(0,y-1),b=o?(y+1)%(a-1):Math.min(a-1,y+1);return d.set(c[b*3]-c[x*3],c[b*3+1]-c[x*3+1],c[b*3+2]-c[x*3+2]),d.lengthSq()<1e-12&&d.set(0,0,1),d.normalize()};f(0),_.set(Math.abs(d.x)<.9?1:0,Math.abs(d.x)<.9?0:1,0),m.crossVectors(d,_).normalize();let p=s+1;for(let y=0;y<a;y++){f(y),m.addScaledVector(d,-m.dot(d)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(d,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(d,m);for(let x=0;x<=s;x++){let b=x/s*Math.PI*2,L=Math.cos(b),E=Math.sin(b),v=L*m.x+E*g.x,A=L*m.y+E*g.y,k=L*m.z+E*g.z,M=(y*p+x)*3;this.nor[M]=v,this.nor[M+1]=A,this.nor[M+2]=k,this.pos[M]=c[y*3]+l[y]*v,this.pos[M+1]=c[y*3+1]+l[y]*A,this.pos[M+2]=c[y*3+2]+l[y]*k}if(this.caps&&(y===0||y===a-1)){let x=(a*p+(y?1:0))*3,b=y?1:-1;this.pos[x]=c[y*3],this.pos[x+1]=c[y*3+1],this.pos[x+2]=c[y*3+2],this.nor[x]=d.x*b,this.nor[x+1]=d.y*b,this.nor[x+2]=d.z*b}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function en(i,t,e={}){return new Hs(i.length,e).set(i,t).geo}function mi(i,t,e,n=12,r=.35,s={}){let o=new ae().makeRotationFromEuler(K0(...t)),a=[],c=[],l=new C;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+r*Math.sin(3*u)))}return en(a,c,{closed:!0,per:6,...s})}function Yi(i,t,e,n,r,s=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<r;u++){let d=u/(r-1),m=s+2*Math.PI*n*d,g=t+(e-t)*d,_=l(d)+(a&&o?a.uniform(-o,o):0),[f,p]=c?c(g):[0,0];h.push([f+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var cc=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function ei(i,t,e,n,r){let s=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);s.push(...l,...h,0,0,i),s.push(...h,...l,0,0,-t)}let a=new be;return a.setAttribute("position",new se(s,3)),a.setAttribute("uv",new se(new Array(s.length/3*2).fill(.5),2)),r&&a.applyMatrix4(new ae().makeRotationFromEuler(K0(...r))),a.computeVertexNormals(),a}function Yh(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),r.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;s.push(l,l+1,h+1,l,h+1,h)}let o=new be;return o.setAttribute("position",new se(n,3)),o.setAttribute("uv",new se(r,2)),o.setIndex(s),o.computeVertexNormals(),o}var ac=class{constructor(){Ye(this,"parts",new Map)}add(t,e,n,r,s){let o=t.index?t:Ey(t),a=new ae().compose(n?Array.isArray(n)?new C(...n):n:new C,new hn().setFromEuler(r??new bn),s===void 0?new C(1,1,1):typeof s=="number"?new C(s,s,s):new C(...s)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,r]of this.parts){let s=new St(Zh(r),n);t.add(s),e.push(s);for(let o of r)o.dispose()}return this.parts.clear(),e}};function Ey(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,r)=>r)),t}function Zh(i){let t=0,e=0;for(let d of i)t+=d.attributes.position.count,e+=d.index.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=i.some(d=>d.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let d of i){let m=d.attributes.position.count;n.set(d.attributes.position.array,l*3),d.attributes.normal||d.computeVertexNormals(),r.set(d.attributes.normal.array,l*3),d.attributes.uv&&s.set(d.attributes.uv.array,l*2),a&&d.attributes.color&&a.set(d.attributes.color.array,l*3);let g=d.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new be;return u.setAttribute("position",new Le(n,3)),u.setAttribute("normal",new Le(r,3)),u.setAttribute("uv",new Le(s,2)),a&&u.setAttribute("color",new Le(a,3)),u.setIndex(new Le(c,1)),u.computeBoundingSphere(),u}var Y0=new Map;function Wh(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Xh(i,t,e,n=4,r=1){let s=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let d=Math.floor(l),m=Math.floor(h),g=l-d,_=h-m,f=g*g*(3-2*g),p=_*_*(3-2*_),y=(b,L)=>Wh((b%c+c)%c,(L%c+c)%c,r+u),x=oc(oc(y(d,m),y(d+1,m),f),oc(y(d,m+1),y(d+1,m+1),f),p);s+=x*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return s/a}function J0(i,t,e,n=[1,1]){let r=Y0.get(i);if(!r){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),r=new Dn(o),r.wrapS=r.wrapT=Ur,Y0.set(i,r)}let s=r.clone();return s.repeat.set(...n),s.needsUpdate=!0,s}var j0=(i,t,e,n,r)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=r,i.data[t*4+3]=255};function kr(i=1,t=[1,1],e=.35,n=1.25){return J0(`noise${i}`,128,r=>{for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=Xh(o/(16*i),s/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,oc(e,n,a)/1.25));j0(r,s*128+o,c,c,c)}},t)}function Q0(i=6,t=.11,e=[1,1]){return J0(`vein${i}:${t}`,128,n=>{let r=[];for(let s=0;s<i;s++)for(let o=0;o<i;o++)r.push([(o+Wh(o,s,9))/i,(s+Wh(o,s,11))/i]);for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=o/128+(Xh(o/16,s/16,8,2,5)-.5)*.08,c=s/128+(Xh(o/16+7,s/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of r)for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let y=a-g-p,x=c-_-f,b=Math.sqrt(y*y+x*x);b<l?(h=l,l=b):b<h&&(h=b)}let u=(h-l)*i*.5,d=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*d*d);j0(n,s*128+o,m,m,m)}},e)}var pr=1.13,Do=.66,ce=(i,t,e)=>new kt(i,t,e);function wy(i,t){let e=(s,o=!0)=>(o?i.push(s):t.push(s),s),n=(s,o=1.7)=>s.clone().multiplyScalar(o),r=s=>Math.min(2.4,.55+s*.13);return{bark:(s,o)=>e(new Se({color:n(o,1.5),map:kr(4,[3,2]),roughness:.9,emissive:s.clone().multiplyScalar(.4)})),plain:(s,o=.5)=>e(new Se({color:n(s),roughness:o})),leaf:(s,o)=>e(new Se({color:n(o,1.6),map:kr(1,[2,2],.45),roughness:.45,side:Ie,emissive:s.clone().multiplyScalar(.6)})),metal:(s,o=.28)=>e(new Se({color:n(s,1.25),metalness:.55,roughness:o+.12})),veins:(s,o,a,c=6,l=.11,h=.1)=>e(new Se({color:n(s,2.4),map:kr(1,[3,2]),emissive:o,emissiveMap:Q0(c,l,[4,2]),emissiveIntensity:r(a),roughness:.6,metalness:h})),lava:()=>e(new Se({color:ce(.3,.05,0),emissive:ce(1,.22,.015),emissiveMap:kr(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(s,o,a,c=Ln)=>e(new Se({color:o,emissive:s,emissiveMap:kr(1,[2,2],.6),emissiveIntensity:r(a),roughness:.4,side:c})),emissive:(s,o)=>e(new Se({color:s.clone().multiplyScalar(.15),emissive:s,emissiveIntensity:r(o),roughness:.4})),crystal:(s,o)=>e(new Se({color:n(s,1.3),emissive:s,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(s,o=.3)=>e(new Se({color:s,emissive:s.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Se({color:ce(.55,.82,1),map:kr(2,[4,1],.7),emissive:ce(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var Vr=i=>Math.max(8,Math.round(i*.5)),Uo=i=>Math.max(1,Math.round(i*.45)),lc=i=>i-Math.floor(i);function Sy(i,t,e,n,r,s=.09,o=.1){let a=i+n,c=(a%t+t)%t;return r*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-s*c)*(Math.cos(o*c)+s/o*Math.sin(o*c)))}function Ty(i,t,e,n=8,r=10,s=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-r)/s))))}function tf(i,t,e,n){let r=[];for(let s=0;s<t;s++){let o=new C(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),r.push([o.x,o.y,o.z])}return r}function $h(i,t,e,n,r,s){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*r));return o.push(e),en(o,o.map((a,c)=>s*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function Ay(i,t,e,n,r,s,o,a=.45){return Yh(4,10,(c,l)=>{let h=2*c-1,u=.07+r*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-s*l**3,d=t+e*l,m=i+o*l,g=n*Math.max(.03,Lo(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,f=h*g,p=Math.cos(m),y=Math.sin(m);return[_*p-f*y,_*y+f*p,d]})}function Ry(i=.14,t=.055){return Yh(3,6,(e,n)=>{let r=2*e-1,s=t*(.04+Lo(Math.sin(Math.PI*n**.75),.9));return[r*s,n*i,-Math.abs(r)*s*.45-.18*i*n*n]})}var zr=new on;function Fs(i,t,e,n,r){zr.position.set(e[0],e[1],e[2]),typeof n=="number"?zr.scale.setScalar(Math.max(1e-5,n)):zr.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),r?zr.rotation.set(r[0],r[1],r[2],"ZYX"):zr.rotation.set(0,0,0),zr.updateMatrix(),i.setMatrixAt(t,zr.matrix)}var Jh=new pn(1,1),Kh=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((r,s)=>{for(let o of n)o.offset.x-=s*e})};function Cy(i){let{rng:t,m:e}=i,n=e.bark(ce(.045,.028,.014),ce(.3,.19,.1)),r=e.plain(ce(.1,.3,.05),.55),s=e.leaf(ce(.015,.14,.02),ce(.1,.34,.045)),o=.022,a=_=>cc(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(en([...c,2.6,2.63].map(_=>[...a(_),_]),[...l,.06,.015],{radial:8,per:5}),n);for(let _=0;_<5;_++){let f=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(f),y=Math.sin(f);i.stat(en([[.03*p,.03*y,.3],[.06*p,.06*y,.17],[.1*p,.1*y,.07],[.14*p,.14*y,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,f,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:f-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},d=[.015,.09,.2,.235,.185,.06],m=[2.42,2.6,2.8,3.02,3.22,3.33];for(let _=0;_<6;_++){let f=2*Math.PI*_/6+t.uniform(-.15,.15),p=d.map((y,x)=>{let b=f+.22*x;return[y*Math.cos(b),y*Math.sin(b),m[x]+t.uniform(-.02,.02)]});i.stat(en(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let y of[2,4])u(p[y],Math.atan2(p[y][1],p[y][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,f,p,y,x])=>{let b=Vr(56),L=Yi(E=>qh(c,l,_+(f-_)*E)+.018,_,f,p,b,y,.004,t,a);i.stat(en(L,L.map((E,v)=>x*(1-.55*v/(b-1))),{radial:5,per:3}),r);for(let E=2;E<b-2;E+=Math.max(1,Math.floor((b-4)/Uo(22)))){let v=L[E],A=a(v[2]);u(v,Math.atan2(v[1]-A[1],v[0]-A[0]),t.uniform(.7,1.3))}});let g=i.inst(Ry(),s,h.length);return i.anim(_=>{h.forEach((f,p)=>Fs(g,p,f.p,f.s,[f.rx+.16*Math.sin(_*.2094+f.ph),f.ry,f.rz+.1*Math.sin(_*.1309+f.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:ce(.45,1,.35),hot:ce(.7,1,.3),mid:ce(.15,.8,.05)}}function Py(i){let{rng:t,m:e}=i,n=e.veins(ce(.085,.065,.055),ce(1,.3,.03),2,7,.06,0);n.roughness=.9;let r=e.lava(),s=e.core(ce(1,.36,.04),ce(.9,.12,.01),2,Ie);Kh(i,r,.25),Kh(i,s,-.18);let o=.014,a=g=>cc(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(en(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,f=2.35)=>qh(c,l,_+(f-_)*g);for(let g=0;g<2;g++){let _=Vr(60),f=Yi(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(en(f,f.map((p,y)=>.012+.003*Math.sin(y*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=Vr(60),f=Yi(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(en(f,f.map((p,y)=>.0085+.002*Math.sin(y*.7)),{radial:5,per:3}),r)}{let g=Yi(_=>h(_,.5,2.2)-.001,.5,2.2,-3,Vr(50),.8,0,void 0,a);i.stat(en(g,.0055,{radial:4,per:3}),r)}i.stat(mi(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(mi(.082,[0,0,0],.008,10,0),r,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(Ay(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),s);i.stat(mi(.165,[0,0,0],.007,14,0),r,[0,0,2.86]);let u=6,d=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),f=t.uniform(.16,.2);d.push({p:[f*Math.cos(_),f*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(Jh,e.emissive(ce(1,.45,.05),10),u);return i.anim(g=>{d.forEach((_,f)=>{let p=lc(g/60+_.ph),y=_.s*Math.min(1,p*6)*(1-.6*p);Fs(m,f,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*y,.85*y,7*y])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:ce(1,.45,.1),hot:ce(1,.7,.15),mid:ce(1,.25,.02)}}function Iy(i){let{rng:t,m:e}=i,n=e.metal(ce(.1,.12,.16),.3),r=e.metal(ce(.78,.84,.9),.18),s=e.water(),o=e.crystal(ce(.2,.7,1),2.5),a=e.crystal(ce(.4,.8,1),1.5);Kh(i,s,.3);let c=.006,l=_=>cc(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(en(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(mi(.066,[0,0,0],.012,10,0),r,[0,0,2.56]);for(let _=0;_<3;_++){let f=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(en([[.04*f,.04*p,2.55],[.085*f,.085*p,2.68],[.12*f,.12*p,2.82],[.13*f,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),r)}for(let _=0;_<2;_++)i.stat(en(Yi(.05,.4,2.45,7,Vr(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),r);{let _=Vr(64),f=Yi(b=>.058+.012*Math.sin(b*20),.45,2.5,3.2,_,1,0,void 0,l),p=f.map((b,L)=>.012+.014*(.5+.5*Math.sin(L*.45))),y=new Hs(_,{radial:6,per:3});y.set(f,p),i.mesh(y.geo,s);let x=p.slice();i.anim(b=>{for(let L=0;L<_;L++)x[L]=p[L]*(1+.6*Math.sin(b*.2618-L*.7));y.set(f,x)})}[.7,1,1.35,1.7,2.05].forEach((_,f)=>{let p=f*2.1;i.stat(ei(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,f,p,y,x,b,L,E,v],A)=>{let M=20+A*50,T=A===0?1:-1,J=y<p?-1:1,z=Math.PI/180,X=Array.from({length:40},(Z,D)=>{let R=D/39;return{a:(p+(y-p)*R)*z,b:p*z+J*E*z*R,R:_+(f-_)*R,y:b+.04*Math.sin(R*6),r:.004+x*Lo(Math.sin(Math.PI*R),.8)}}),ut=(Z,D,R,P)=>[Z*t.uniform(.35,1.4),D*t.uniform(.8,1.2),-P*R+t.uniform(-1.4,1.4),t.uniform(1,5)],ot=X.map((Z,D)=>[ut(.07,.35,.9,D),ut(.035,.7,1.7,D),ut(.03,.3,1,D),ut(.015,.6,1.8,D),ut(.32,.45,.9,D),ut(.2,.8,1.6,D),ut(.1,1.3,2.3,D)]),pt=new Hs(40,{radial:6,per:2}),U=X.map(()=>[0,0,0]),tt=X.map(()=>0),V=i.mesh(pt.geo,s,[0,0,3]);V.renderOrder=2;let K=Z=>{let D=Sy(Z,120,1,M,T),R=Ty(Z,120,M,12),P=Math.floor((Z+M)/120),B=q=>q[0]*Math.sin(Z*q[1]+q[2]+P*q[3]);X.forEach((q,O)=>{let H=ot[O],Y=q.a*(1-R)+q.b*R+D,Q=q.R*(1-R)+L*(1+R*(B(H[0])+B(H[1])))*R;U[O][0]=Q*Math.cos(Y),U[O][2]=Q*Math.sin(Y),U[O][1]=q.y*(1-R)+(b+B(H[2])+B(H[3]))*R,tt[O]=q.r*(1+.3*(1-R)*Math.sin(Z*.2618-O*.8))*(1-R)+v*R*Math.max(.3,1+R*(B(H[4])+B(H[5])+B(H[6])))}),pt.set(U,tt)};K(0),i.anim(K)});let d=[];for(let _=0;_<10;_++){let f=t.uniform(0,2*Math.PI),p=[Math.cos(f),0,Math.sin(f)],y=t.uniform(.2,.34),x=t.uniform(.12,.3);d.push({start:[p[0]*y,0,3+p[2]*y],vel:[p[0]*x+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*x+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of d)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:Uo(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(Jh,a,d.length+m.length);m.forEach((_,f)=>Fs(g,d.length+f,_.p,_.s)),i.anim(_=>{d.forEach((f,p)=>{let y=lc(_/f.per+f.ph),x=y*.9;Fs(g,p,[f.start[0]+f.vel[0]*x,f.start[1]+f.vel[1]*x,f.start[2]+f.vel[2]*x-.9*x*x],f.s*Math.min(1,y*10)*Math.min(1,(1-y)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(ei(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let f=2*Math.PI*_/3;i.stat(ei(.02,.12,.016,4,[Math.sin(f)*.4,-Math.cos(f)*.4,0]),o,[.045*Math.cos(f),.045*Math.sin(f),.36])}return{z:3,r:.145,glass:ce(.3,.75,1),hot:ce(.5,.95,1),mid:ce(.05,.4,1)}}function Ly(i){let{rng:t,m:e}=i,n=e.veins(ce(.03,.02,.06),ce(.85,.6,1),3,6,.09,.5),r=e.metal(ce(.62,.58,.72),.2),s=e.crystal(ce(.35,.15,1),3),o=e.emissive(ce(.65,.4,1),4),a=e.emissive(ce(.6,.3,1),3);i.stat(en([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(mi(.04,[0,0,0],.007,10,0),r,[0,0,_]);i.stat(en([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(en(Yi(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),r);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,f)=>i.stat(mi(f===0||f===4?.064:.058,[0,0,0],.011,10,0),r,[0,0,_]));let l=mi(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let f=e.emissive(ce(.65,.4,1),4),p=f.emissiveIntensity;f.transparent=!0;let y=i.mesh(l,f);i.anim(x=>{let b=lc(x/60+_/4);y.position.z=.95+1.45*b,y.scale.set(1+.3*b,1+.3*b,1);let L=Math.min(1,b*8)*Math.min(1,(1-b)*3);f.emissiveIntensity=p*L,f.opacity=L})}let h=(_,f,p)=>$0((Math.sin(_*.9+f)+Math.sin(_*.37+f*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let f=t.uniform(0,6.28),p=[.07*Math.cos(f),.07*Math.sin(f),c[_]],y=[.07*Math.cos(f+.9),.07*Math.sin(f+.9),c[_+1]],x=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2],b=i.mesh($h(t,[p[0]-x[0],p[1]-x[1],p[2]-x[2]],[y[0]-x[0],y[1]-x[1],y[2]-x[2]],6,.012,.005),o,x),L=t.uniform(0,6.28);i.anim(E=>{b.scale.setScalar(Math.max(1e-4,h(E,L,.3)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=.066;i.stat($h(t,[p*Math.cos(f),p*Math.sin(f),.95],[p*Math.cos(f+.6),p*Math.sin(f+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let f=new C(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),y=i.mesh($h(t,[f.x*.16,f.y*.16,f.z*.16],[f.x*p,f.y*p,f.z*p],7,.03,.005),o,[0,0,3]),x=t.uniform(0,6.28);i.anim(b=>{y.rotation.set(Math.floor(b/5+x)*1.7,0,Math.floor(b/4+x)*2.4,"ZYX"),y.scale.setScalar(Math.max(1e-4,h(b,x,.5)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],y=[2.5,2.66,2.85,3.08,3.22];i.stat(en(p.map((x,b)=>[x*Math.cos(f+.3*b),x*Math.sin(f+.3*b),y[b]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),r)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,f,p,y])=>{let x=i.mesh(mi(_,f.map(b=>b*Math.PI/180),p,10),r,[0,0,3]);i.anim(b=>{x.rotation.z=b*y})}),i.stat(ei(.58,.06,.03,4),r,[0,0,3.14]);let u=[new C(0,.6,.8),new C(.7,-.3,.65),new C(-.45,.5,.75)],d=[1,-2,3],m=Array.from({length:6},(_,f)=>{let p=u[f%3].clone().normalize(),y=Math.abs(p.z)<.9?new C(0,0,1):new C(1,0,0),x=p.clone().cross(y).normalize(),b=p.clone().cross(x);return{e1:x,e2:b,R:t.uniform(.32,.5),th0:Math.floor(f/3)*Math.PI+t.uniform(-.3,.3),w:d[f%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(ei(.11,.11,.035,4),s,m.length);return i.anim(_=>{m.forEach((f,p)=>{let y=f.th0+_*f.w,x=f.R*(1+.12*Math.sin(_*.05236+f.ph));Fs(g,p,[x*(f.e1.x*Math.cos(y)+f.e2.x*Math.sin(y)),x*(f.e1.y*Math.cos(y)+f.e2.y*Math.sin(y)),3+x*(f.e1.z*Math.cos(y)+f.e2.z*Math.sin(y))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(ei(.1,.3,.04,5),s,[0,0,.32]),{z:3,r:.15,glass:ce(.6,.3,1),hot:ce(.7,.5,1),mid:ce(.4,.1,1),style:"flicker"}}function Dy(i){let{rng:t,m:e}=i,n=e.veins(ce(.02,.03,.05),ce(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let r=e.metal(ce(.8,.86,.95),.15),s=e.crystal(ce(.25,.65,1),4),o=e.emissive(ce(.7,.9,1),14),a=e.emissive(ce(.3,.7,1),9);i.stat(en([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(ei(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let y=i.mesh(mi(.058+.006*p,[0,0,0],.006,12,.6),r,[0,0,.655+.42*p]);i.anim(x=>{y.rotation.z=x*(p%2===0?1:-1)*.05236})}let c=p=>{let y=Math.max(0,(p-.7)/.3);return .05+.26*Lo(Math.sin(y*Math.PI/2),1.5)};for(let p=0;p<2;p++){let y=Vr(110);i.stat(en(Yi(c,.4,3.2,6,y,p*Math.PI),Array.from({length:y},(x,b)=>.0085+.004*Math.sin(b*.55+p)),{radial:5,per:3}),r)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,y,x,b])=>{let L=i.mesh(mi(p,y.map(E=>E*Math.PI/180),x,10),r,[0,0,3]);i.anim(E=>{L.rotation.z=E*b})}),i.stat(ei(.62,.05,.032,4),s,[0,0,3.17]);let l=tf(t,Uo(110),.35,.85);for(let p=0;p<Uo(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,y)=>p.map(x=>({rel:x,s:y(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),d=h(tf(t,Math.max(Uo(30),8),.4,.9),()=>t.uniform(.02,.045)),m=Zh([ei(1,1,.14,4),ei(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(y,x)=>x)),p))),g=i.inst(Jh,o,u.length),_=i.inst(m,o,d.length),f=(p,y,x)=>{y.forEach((b,L)=>{let E=lc(x/b.per+b.ph),v=(1-E)**1.6;Fs(p,L,[b.rel[0]*v,b.rel[1]*v,3+b.rel[2]*v],b.s*Math.min(1,E*8)*(1-E)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{f(g,u,p),f(_,d,p)}),i.stat(ei(.08,.31,.05,6),s,[0,0,.33]);for(let p=0;p<3;p++){let y=2*Math.PI*p/3+.4,x=Math.cos(y),b=Math.sin(y);i.stat(en([[.035*x,.035*b,.52],[.07*x,.07*b,.44],[.11*x,.11*b,.34],[.1*x,.1*b,.24]],[.02,.016,.011,.003],{radial:6}),r)}return{z:3,r:.17,glass:ce(.05,.25,1),hot:ce(.2,.5,1),mid:ce(0,.05,.4)}}var ef={verdant:Cy,ember:Py,tide:Iy,storm:Ly,void:Dy},Uy={verdant:7,ember:8,tide:9,storm:10,void:11};function Zi(i,t){let e=q0(i),n=ef[e.base??e.id]?e.base??e.id:"verdant",r=new Zt,s=new Zt;s.rotation.x=-Math.PI/2,s.scale.setScalar(Do),s.position.y=pr-3*Do,r.add(s);let o=[],a=[],c=[],l=new ac,h={B:s,batch:l,rng:Z0(Uy[n]),m:wy(o,a),stat:(E,v,A,k,M)=>l.add(E,v,A,k,M),mesh:(E,v,A)=>{let k=new St(E,v);return A&&k.position.set(...A),s.add(k),k},inst:(E,v,A)=>{let k=new Cs(E,v,A);return k.frustumCulled=!1,s.add(k),k},anim:E=>{c.push(E)}},u=ef[n](h);l.build(s);let d=new kt(e.gem),m=e.tint?new kt(e.tint):null,g=new Se({color:m?u.glass.clone().lerp(d,.6):u.glass,emissive:d,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),_=new St(new we(u.r*Do,20,14),g);_.position.y=pr+(u.z-3)*Do,_.renderOrder=1,r.add(_);let f=h.m.core(m?u.hot.clone().lerp(d,.7):u.hot,m?u.mid.clone().lerp(d,.5):u.mid,6),p=new St(new we(u.r*Do*.6,14,10),f);_.add(p);let y=f.emissiveIntensity;if(c.push(E=>{if(u.style==="flicker"){let v=Math.abs(Math.sin(E*.9)*Math.sin(E*.37+1.1));p.scale.setScalar(1+.1*v),f.emissiveIntensity=y*(.55+.45*v)*1.6}else p.scale.setScalar(1+.05*Math.sin(E*.1309))}),o.splice(o.indexOf(f),1),m)for(let E of[...o,...a])E.color.lerp(m,.55),E.emissive.getHex()!==0&&E.emissive.lerp(m,.7);let x=new fi(new Qn({map:t,color:d.getHex(),blending:ln,depthWrite:!1,transparent:!0,opacity:.5}));x.scale.setScalar(.45),x.position.y=_.position.y,r.add(x);let b=Math.random()*20,L=(E,v)=>{b+=E*(1+v*1.5);let A=b*24;for(let k of c)k(A,E)};return L(0,0),{group:r,gem:_,gemMat:g,glow:x,color:d,materials:o,update(E,v,A){L(v,A)}}}var re=i=>new kt(i),ve=i=>1-Math.abs((i%1+1)%1*2-1),Oe=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),mr=(i,t)=>Math.exp(-(i*i)/(t*t)),nf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function cn(i,t,e,n,r=!1){let s=[],o=[],a=(h,u)=>e(r?h%i/i:h/i,u/t),c=(h,u,d)=>{let m=(h[0]+u[0]+d[0])/3,g=(h[1]+u[1]+d[1])/3,_=n(r?m/i%1:m/i,g/t);for(let[f,p]of[h,u,d])s.push(...a(f,p)),o.push(_.r,_.g,_.b)};for(let h=0;h<t;h++)for(let u=0;u<i;u++)c([u,h],[u,h+1],[u+1,h+1]),c([u,h],[u+1,h+1],[u+1,h]);let l=new be;return l.setAttribute("position",new se(s,3)),l.setAttribute("color",new se(o,3)),l.computeVertexNormals(),l}function wn(i,t,e,n=1,r=1,s=0,o=1){let a=i.length-1;return cn(t,a,(c,l)=>{let h=Math.min(a-1,Math.floor(l*a)),u=l*a-h,d=i[h][0]+(i[h+1][0]-i[h][0])*u,m=i[h][1]+(i[h+1][1]-i[h][1])*u,g=(s+c*(o-s))*Math.PI*2;return[Math.sin(g)*m*n,d,Math.cos(g)*m*r]},e,s===0&&o===1)}function ze(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new C(...i[Math.min(s-1,h+1)]).sub(new C(...i[Math.max(0,h-1)])).normalize()),a=new C(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new C(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return cn(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}function ni(i,t,e=[0,0,0],n=[0,0,0]){let r=new un(...i).toNonIndexed();r.rotateX(n[0]),r.rotateY(n[1]),r.rotateZ(n[2]),r.translate(...e);let s=r.attributes.position.count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=t.r,o[a*3+1]=t.g,o[a*3+2]=t.b;return r.setAttribute("color",new Le(o,3)),r}function mn(i,t){let e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=t.r,r[s*3+1]=t.g,r[s*3+2]=t.b;return e.setAttribute("color",new Le(r,3)),e.computeVertexNormals(),e}function hc(i){let t=new we(1,28,22),e=t.attributes.position,n=t.attributes.uv;for(let r=0;r<e.count;r++){let s=e.getX(r),o=e.getY(r),a=e.getZ(r),c=Math.max(0,a),l=s*i.w,h=o*i.h,u=a*i.d;if(o<0){let d=-o;l*=1-i.jaw*d**1.25,u*=1-.12*d,h*=1+i.chin*d}l*=1+.04*mr(o+.02,.22)*c,o>.2&&(l*=1-.08*(o-.2));for(let d of[-1,1])u-=.009*mr(s-d*.38,.2)*mr(o-.06,.13)*c;u+=i.brow*mr(o-.27,.08)*mr(s,.5)*c,u+=i.nose*mr(s,.11)*c*nf(.2,-.2,o)*nf(-.4,-.27,o),u+=.004*mr(s,.24)*mr(o+.5,.07)*c,a<0&&(u*=1.06),e.setXYZ(r,l,h,u),a>.05?n.setXY(r,.5+s*.5,.5+o*.5):n.setXY(r,.02,.97)}return t.computeVertexNormals(),t}function uc(i){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),r=(u,d)=>[(.5+u*.5)*512,(.5-d*.5)*512];n.fillStyle=i.skin,n.fillRect(0,0,512,512);let s=(u,d,m,g,_,f)=>{let[p,y]=r(u,d),x=m*512*.5;n.save(),n.translate(p,y),n.scale(1,g/m);let b=n.createRadialGradient(0,0,0,0,0,x);b.addColorStop(0,_.replace("A",String(f))),b.addColorStop(1,_.replace("A","0")),n.fillStyle=b,n.beginPath(),n.arc(0,0,x,0,Math.PI*2),n.fill(),n.restore()};for(let u of[-1,1])s(u*.62,-.18,.22,.3,i.shade,.35);s(0,-.72,.3,.12,i.shade,.3),s(.07,-.12,.05,.2,i.shade,.25);for(let u of[-1,1]){let d=u*.38,m=.06;s(d,m+.04,.26,.12,i.shade,.45);let[g,_]=r(d,m),f=i.eyeW*512*.5,p=i.eyeH*512*.5;if(n.save(),n.translate(g,_),n.scale(u,1),n.beginPath(),n.moveTo(-f,0),n.quadraticCurveTo(-f*.1,-p*1.1,f,-p*.15),n.quadraticCurveTo(f*.2,p*1.05,-f,0),n.closePath(),n.fillStyle=i.glowEyes?"#ffd23a":"#ece6ee",n.fill(),n.save(),n.clip(),n.fillStyle=i.iris,n.beginPath(),n.arc(-f*.1,p*.1,p*1.05,0,Math.PI*2),n.fill(),n.fillStyle="#120c14",n.beginPath(),i.glowEyes?n.ellipse(-f*.1,p*.1,p*.22,p*.8,0,0,Math.PI*2):n.arc(-f*.1,p*.1,p*.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.8)",n.beginPath(),n.arc(-f*.26,-p*.25,p*.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(40,25,35,.6)",n.fillRect(-f,-p*1.3,f*2,p*(.3+i.lid)),n.restore(),n.strokeStyle="#1c1418",n.lineCap="round",n.lineWidth=512*.009,n.beginPath(),n.moveTo(-f*1.02,.02*p),n.quadraticCurveTo(-f*.1,-p*(1.15-i.lid*.6),f*1.08,-p*.3),n.stroke(),n.strokeStyle="rgba(80,55,60,.5)",n.lineWidth=512*.004,n.beginPath(),n.moveTo(-f*.7,p*.55),n.quadraticCurveTo(0,p*1,f*.8,p*.25),n.stroke(),i.wrinkles){n.strokeStyle="rgba(120,90,90,.45)",n.lineWidth=512*.004;for(let y of[-1,0,1])n.beginPath(),n.moveTo(f*1.15,y*p*.4),n.lineTo(f*1.5,y*p*.8-p*.1),n.stroke();n.beginPath(),n.moveTo(-f*.6,p*1.4),n.quadraticCurveTo(0,p*2,f*.7,p*1.2),n.stroke()}n.strokeStyle=i.brow,n.lineWidth=i.browW,n.beginPath(),n.moveTo(-f*1,-p*(2.3-i.browTilt)),n.quadraticCurveTo(f*.15,-p*3.2,f*1.15,-p*(2.6+i.browTilt)),n.stroke(),n.restore()}if(i.wrinkles){n.strokeStyle="rgba(120,90,90,.4)",n.lineWidth=512*.004;for(let u of[.42,.5]){let[d,m]=r(-.25,u),[g,_]=r(.25,u);n.beginPath(),n.moveTo(d,m),n.quadraticCurveTo((d+g)/2,m-6,g,_),n.stroke()}}n.fillStyle="rgba(80,50,55,.5)";for(let u of[-1,1]){let[d,m]=r(u*.06,-.32);n.beginPath(),n.ellipse(d,m,512*.012,512*.006,0,0,Math.PI*2),n.fill()}let[o,a]=r(0,-.52),c=i.lipW*512*.5,l=.05*512*.5;if(i.snarl){n.fillStyle="#2a1416",n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.fill(),n.fillStyle="#e8e0c8",n.fillRect(o-c*.85,a-l*.9,c*1.7,l*.8),n.fillRect(o-c*.7,a+l*.25,c*1.4,l*.6),n.strokeStyle="#2a1416",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(o+u*c*.24,a-l),n.lineTo(o+u*c*.24,a+l),n.stroke();n.strokeStyle=i.lips,n.lineWidth=512*.008,n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.stroke()}else n.fillStyle=i.lips,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a-l*.9,o+c,a),n.quadraticCurveTo(o,a+l*1.2,o-c,a),n.fill(),n.strokeStyle="rgba(40,20,25,.7)",n.lineWidth=512*.005,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a+l*.3,o+c,a),n.stroke();let h=new Dn(e);return h.colorSpace=tn,h.anisotropy=4,h}function Os(){let i=[];return{materials:i,mat:(e,n={})=>{let r=new Se({color:n.vc?16777215:e,vertexColors:!!n.vc,metalness:n.metal??.04,roughness:n.rough??.8,flatShading:n.flat??!0,emissive:n.emissive??(n.vc?1315100:0),transparent:!0,side:n.double?Ie:Ln});return i.push({mat:r,color:r.color.clone(),emissive:r.emissive.clone()}),r}}}var Nt=(i,t,e,n=[0,0,0])=>{let r=new St(i,t);return r.position.set(...n),e.add(r),r};function gr(i,t,e,n,r){let s=new Zt;s.position.set(...t),s.rotation.z=-.02,i.add(s);let o=new Zt;o.rotation.x=.3,s.add(o);let a=Zi(r,n);a.group.position.set(0,.3,.02),o.add(a.group);for(let c of a.materials)e.push({mat:c,color:c.color.clone(),emissive:c.emissive.clone()});return{staffPivot:s,staff:a,crystal:a.gem,crystalMat:a.gemMat,glow:a.glow}}function rf(i,t,e){let n=new Hr;for(let r=0;r<8;r++){let s=Math.PI/2+r*Math.PI/4,o=r%2?t:i;r?n.lineTo(Math.cos(s)*o,Math.sin(s)*o):n.moveTo(Math.cos(s)*o,Math.sin(s)*o)}return n.closePath(),new Ps(n,{depth:e,bevelEnabled:!0,bevelThickness:e*.3,bevelSize:i*.06,bevelSegments:1}).center()}var sf=(i,t,e)=>{let n=ve(i*e);return Math.abs(n-t)<.2||Math.abs(n-(1-t))<.2};var We={robe:re(3433416),robeDeep:re(2575516),cream:re(15853519),creamDeep:re(14273968),gold:re(14989388),goldDeep:re(11568688),skin:re(15916495),hair:re(16052974),hairShade:re(13618374),leather:re(7686442),leatherDeep:re(5583641),boot:re(2903964)},fc={w:.088,h:.122,d:.106,jaw:.42,chin:.06,nose:.022,brow:.008};function of(i,t,e){let{materials:n,mat:r}=Os(),s=r(16777215,{vc:!0,double:!0}),o=r(We.skin,{rough:.7}),a=r(We.gold,{metal:.3,rough:.35,emissive:2760200}),c=i==="ally",l=c?re(3117168):We.robe,h=c?re(2255442):We.robeDeep,u=(z,X,ut,ot)=>sf(z,X,ut)?We.gold:ot,d=new Zt,m=new Zt;d.add(m);for(let z of[-1,1])Nt(mn(new we(.06,7,5),We.boot),s,m,[z*.09,.05,.08]).scale.set(.9,.75,1.6);Nt(wn([[1.46,.1],[1.4,.165],[1.24,.18],[1.04,.165],[.7,.21],[.36,.255],[.3,.26],[.24,.266],[.18,.272],[.12,.278],[.04,.29]],36,(z,X)=>{let ut=z<.06||z>.94,ot=Math.floor(X*10);return ot===9?We.cream:ot>=6?u(z,(ot-5.5)/3,12,ut?We.creamDeep:h):ut?Oe(We.cream,We.creamDeep,.3*X):Oe(l,h,.3*ve(z*12)*X)},1.1,.8),s,m);let g=cn(48,30,(z,X)=>{let ut=.55+.35*X**1.3,ot=ut+z*(Math.PI*2-2*ut),pt=.13,U,tt,V;if(X<pt){let K=X/pt;U=1.58-.15*K**.8,tt=.1+.15*K**.7,V=.74}else{let K=(X-pt)/(1-pt);U=1.43-K*1.3,tt=.25+.14*K**1.2,V=.74+.16*K}return tt*=1+.05*Math.sin(ot*7)*Math.max(0,X-pt),[Math.sin(ot)*tt*1.1,U,Math.cos(ot)*tt*V-.03*X]},(z,X)=>z<.03||z>.97||X>.95?We.cream:X>.8?u(z,(X-.8)/.15,16,h):Oe(l,h,.25+.3*ve(z*9)));Nt(g,s,m),Nt(cn(6,4,(z,X)=>[(z-.5)*(.26-.2*X),1.56-X*.3,-.15-.04*Math.cos((z-.5)*3)-.03*X],(z,X)=>X>.85?We.cream:Oe(h,l,.3*ve(z*2))),s,m),Nt(new Ee(.035,.035,.014,10).rotateX(Math.PI/2),a,m,[0,1.47,.135]),Nt(new Zn(.035,.007,4,10),a,m,[0,1.47,.142]);for(let z of[-1,1])Nt(new Ee(.012,.012,.06,5).rotateZ(Math.PI/2),a,m,[z*.065,1.48,.125]);Nt(wn([[1.08,.172],[1.02,.17]],16,()=>We.leather,1.1,.82),s,m),Nt(new Ro(.04,0),a,m,[0,1.05,.145]).scale.set(.9,1.1,.35),Nt(mn(new Ro(.02,0),We.leatherDeep),s,m,[0,1.05,.158]).scale.set(.9,1.1,.3),Nt(cn(1,6,(z,X)=>[.03+(z-.5)*.045+.02*Math.sin(X*3),1.03-X*.48,.15+.035*X+.012*Math.sin(X*6)],(z,X)=>X>.9?We.gold:Oe(We.leather,We.leatherDeep,.3*X)),s,m),Nt(new Ee(.043,.052,.12,7),o,m,[0,1.53,0]);let f=new Zt;f.position.set(0,1.66,0),m.add(f);let p=r(16777215,{rough:.7,flat:!1});p.map=uc({skin:"#f2ddcf",shade:"rgba(160,120,115,A)",iris:"#5d7590",eyeW:.2,eyeH:.07,lid:.55,brow:"#f0eee8",browW:15,browTilt:.2,lips:"#b77a72",lipW:.2,wrinkles:!0}),Nt(hc(fc),p,f);let y=(z,X)=>Oe(We.hair,We.hairShade,.2+.5*ve(z*9)*(.3+.7*X));Nt(cn(18,3,(z,X)=>{let ut=-Math.PI+z*Math.PI*2,ot=Math.abs(ut),pt=ot<1?.62-.3*(ot/1):.32-.6*((ot-1)/(Math.PI-1)),U=Math.PI/2-X*(Math.PI/2-pt),tt=1.09;return[Math.sin(ut)*Math.cos(U)*fc.w*tt,Math.sin(U)*fc.h*tt,Math.cos(ut)*Math.cos(U)*fc.d*tt]},y,!0),s,f),Nt(cn(18,10,(z,X)=>{let ut=Math.PI*.4+z*Math.PI*1.2,ot=.08-X*(.72+.1*ve(z*6+.3)),pt=X<.25?.12+X*.26:.185+.04*Math.sin(X*3.1),U=.02*Math.sin(X*14+ut*3)*X;return[Math.sin(ut)*(pt+U)*1.05,ot,Math.cos(ut)*(pt+U)*.8-.02-.05*X]},y),s,f);for(let z of[-1,1]){let X=Array.from({length:8},(ut,ot)=>{let pt=ot/7;return[z*(.095+.05*pt+.02*Math.sin(pt*9)),.02-pt*.5,0+.05*pt-.025*Math.sin(pt*7)]});Nt(ze(X,ut=>.03*(1-.6*ut)+.008,5,(ut,ot)=>y(ot,ut),[1,1,.6]),s,f)}Nt(cn(10,12,(z,X)=>{let ut=z-.5,pt=-.02-.06*(1-Math.abs(ut)*2)**2-X*(.56+.06*ve(z*3+.5)),U=(.09+.02*Math.sin(Math.PI*Math.min(1,X*1.6)))*(1-.75*X**1.6),tt=ut*2*U+.008*Math.sin(X*12+z*4),V=.065+.04*Math.cos(ut*Math.PI)+.085*X**.8-(X<.08?.03*Math.abs(ut)*2:0);return[tt,pt,V]},(z,X)=>Oe(We.hair,We.hairShade,.15+.45*ve(z*5)*X)),s,f);for(let z of[-1,1])Nt(ze([[z*.004,-.045,.108],[z*.035,-.055,.106],[z*.06,-.075,.095],[z*.07,-.11,.088]],X=>.014*(1-.6*X)+.004,5,()=>We.hair),s,f);let x=new Zt;x.position.set(0,.075,-.005),x.rotation.set(-.08,0,-.05),f.add(x),Nt(cn(20,3,(z,X)=>{let ut=z*Math.PI*2,ot=.13+X*.17;return[Math.sin(ut)*ot,.02-.04*X*X,Math.cos(ut)*ot]},(z,X)=>Oe(l,h,X>.85?.4:.2*ve(z*5)),!0),s,x),Nt(ze([[0,.01,0],[0,.2,-.01],[0,.38,-.04],[-.02,.52,-.09],[-.07,.6,-.16],[-.13,.6,-.21],[-.18,.55,-.23]],z=>.15*(1-z)**1.3+.004,8,(z,X)=>Oe(l,h,.25*ve(X*4)+.2*z)),s,x),Nt(cn(16,1,(z,X)=>{let ut=z*Math.PI*2,ot=.153-.005*X;return[Math.sin(ut)*ot,.025+X*.05,Math.cos(ut)*ot]},z=>ve(z*16)>.5?We.gold:We.goldDeep,!0),s,x),Nt(rf(.055,.018,.01),a,x,[0,.08,.15]).rotation.x=-.1;let L=(z,X,ut)=>cn(14,8,(ot,pt)=>{let U=ot*Math.PI*2,tt=.06+ut*Math.max(0,(pt-.25)/.75)**1.3;return[Math.cos(U)*tt,-(pt*z),Math.sin(U)*tt*.9+X*pt*pt]},(ot,pt)=>pt>.88?We.cream:pt>.72?u(ot,(pt-.72)/.16,5,h):Oe(l,h,.3*ve(ot*3)),!0),E=new Zt;E.position.set(-.22,1.42,0),E.rotation.set(.05,0,.12),m.add(E),Nt(L(.58,.05,.13),s,E),Nt(new we(.04,6,4),o,E,[0,-.58,.04]).scale.set(.8,1.25,.6);let v=new Zt;v.position.set(.22,1.42,.02),v.rotation.z=-.35,m.add(v),Nt(L(.4,0,.065),s,v).rotation.x=-.5,Nt(new Ee(.03,.033,.12,6),o,v,[0,-.38,.19]).rotation.x=-.5,Nt(new we(.043,6,4),o,v,[0,-.43,.24]).scale.set(.85,1.1,.7);let{staffPivot:A,staff:k,crystal:M,crystalMat:T,glow:J}=gr(v,[0,-.43,.24],n,t,e);return{root:d,body:m,head:f,arm:v,staffPivot:A,crystal:M,crystalMat:T,glow:J,staff:k,height:2,materials:n}}var me={plate:re(14077887),plateHi:re(15262420),plateLo:re(11117201),plateDark:re(8156776),white:re(15789282),whiteLo:re(14209732),under:re(4862242),leather:re(7226406),leatherLo:re(5189401),sash:re(7301690),sashLo:re(5722928),slit:re(1380879),steel:re(13225168),grip:re(4860952),brass:re(12819016)};function af(i,t,e){let{materials:n,mat:r}=Os(),s=r(16777215,{vc:!0,double:!0}),o=r(16777215,{vc:!0,metal:.25,rough:.42,double:!0}),a=i==="ally"?re(3119724):re(12726316),c=i==="ally"?re(2257999):re(9314077),l=(E,v,A=6)=>Oe(me.plate,ve(E*A)>.5?me.plateHi:me.plateLo,.35+.15*v),h=new Zt,u=new Zt;h.add(u);for(let E of[-1,1]){let v=E*.105;Nt(cn(8,4,(A,k)=>{let M=A*Math.PI*2,T=-.07+k*.25,J=.06-k*.035,z=.058*(1-.7*k**1.6);return[v+Math.cos(M)*z,Math.max(.005,J+Math.sin(M)*z*.75),T]},(A,k)=>Math.floor(k*4)%2?me.plateLo:me.plate,!0),o,u),Nt(ze([[v,.08,-.01],[v,.22,0],[v,.36,0],[v,.5,.005]],A=>.058+.016*Math.sin(A*2.6),8,(A,k)=>l(k,A)),o,u),Nt(mn(new we(.065,8,6),me.plateHi),o,u,[v,.53,.025]).scale.set(1,.9,.85),Nt(mn(new Un(.05,.03,6).rotateZ(-E*Math.PI/2),me.plateLo),o,u,[v+E*.06,.53,.02]),Nt(ze([[v,.56,0],[v*1.02,.72,0],[v*.98,.9,-.005]],A=>.068+.022*A,8,(A,k)=>l(k,A)),o,u)}Nt(wn([[1,.19],[.8,.22],[.6,.25],[.5,.26]],16,E=>Oe(me.under,me.leatherLo,.4*ve(E*8)),1.1,.85),s,u);for(let E of[!1,!0])Nt(cn(8,10,(v,A)=>{let k=(E?Math.PI:0)+(v-.5)*2.2,M=1.36-A*.76-.02*ve(v*4)*A,T=(A<.45?.2+.03*Math.sin(A*7):.2+.12*(A-.45))+.012;return[Math.sin(k)*T*1.12,M,Math.cos(k)*T*.86]},(v,A)=>A>.82&&A<.87||A>.91&&A<.96?a:Oe(me.white,me.whiteLo,.35*ve(v*4)*A)),s,u);Nt(wn([[1.58,.11],[1.53,.2],[1.42,.245],[1.28,.23],[1.14,.2],[1.02,.205]],16,(E,v)=>E<.04||E>.96?me.plateHi:l(E,v,8),1.12,.84),o,u);for(let E=0;E<3;E++)Nt(wn([[1.02-E*.045,.205+E*.008],[.975-E*.045,.215+E*.008]],14,v=>E%2?me.plateLo:me.plate,1.12,.86),o,u);Nt(wn([[1.66,.06],[1.62,.075],[1.57,.12]],12,(E,v)=>l(E,v)),o,u),Nt(ze(Array.from({length:15},(E,v)=>{let A=v/14*Math.PI*2;return[Math.sin(A)*.235,1.07+.03*Math.cos(A+.6),Math.cos(A)*.19]}),()=>.03,6,(E,v)=>Oe(me.sash,me.sashLo,ve(v*3+E*5)*.6),[1,1.4,1]),s,u);for(let E of[0,1])Nt(ze([[-.2,1.06,.1],[-.22-E*.02,.95,.12],[-.21-E*.04,.82-E*.04,.12]],v=>.025*(1-.3*v),5,v=>Oe(me.sash,me.sashLo,v),[1.4,1,.5]),s,u);for(let E of[-1,1]){let v=Array.from({length:9},(A,k)=>{let M=k/8,T=-.9+M*4.6,J=1.52-.48*M;return[E*Math.sin(T)*.285,J+.06*Math.sin(M*Math.PI),Math.cos(T)*.222]});Nt(ze(v,()=>.016,4,A=>Oe(me.leather,me.leatherLo,.4*ve(A*4)),[1,1.5,1]),s,u)}Nt(ni([.06,.06,.02],me.brass,[0,1.46,.235],[0,0,Math.PI/4]),s,u);let d=new Zt;d.position.set(0,1.18,-.24),d.rotation.z=.55,u.add(d),Nt(ni([.055,.82,.012],me.steel,[0,-.12,0]),o,d),Nt(mn(new Un(.039,.07,4).rotateX(Math.PI).rotateY(Math.PI/4),me.steel),o,d,[0,-.565,0]).scale.set(1,1,.22),Nt(ni([.24,.03,.035],me.brass,[0,.3,0]),s,d),Nt(mn(new Ee(.018,.018,.16,6),me.grip),s,d,[0,.39,0]),Nt(mn(new we(.03,6,4),me.brass),s,d,[0,.48,0]),Nt(wn([[.32,.02],[-.5,.05],[-.6,.03]],6,()=>me.leatherLo,1,.5),s,d);let m=new Zt;m.position.set(0,1.73,0),u.add(m),Nt(wn([[.13,0],[.125,.06],[.105,.105],[.045,.122],[.025,.124],[.005,.125],[-.06,.125],[-.125,.12],[-.135,.11]],14,(E,v)=>Math.floor(v*8)===4&&(E<.2||E>.8)?me.slit:E<.025||E>.975?me.plateHi:l(E,v,6),1,1.06),o,m);for(let E=0;E<4;E++)Nt(ni([.012,.012,.01],me.slit,[.035+E%2*.025,-.05-Math.floor(E/2)*.03,.128],[0,.3,0]),s,m);for(let E of[-1,1])Nt(mn(new Ee(.014,.014,.01,8).rotateZ(Math.PI/2),me.brass),s,m,[E*.128,-.01,0]);Nt(ni([.03,.025,.05],me.brass,[0,.13,-.01]),s,m);for(let E=0;E<7;E++){let v=(E-3)/3,A=.42-Math.abs(v)*.08,k=Array.from({length:7},(M,T)=>{let J=T/6,z=J*2.2;return[v*.03*(1+J),.14+Math.sin(z)*.14*A/.42,-.01-(1-Math.cos(z))*A*.45+.06*J]});Nt(ze(k,M=>.026*(1-M)**.7+.004,5,(M,T)=>Oe(a,c,.3*ve(T*2)+.4*M)),s,m)}let g=(E,v)=>{Nt(ze([[0,-.02,0],[0,-.14,0],[0,-.26,v*.3]],A=>.056-.006*A,7,(A,k)=>l(k,A)),o,E),Nt(mn(new we(.05,7,5),me.plateHi),o,E,[0,-.27,v*.3-.01])};for(let E of[-1,1]){let v=new Zt;v.position.set(E*.27,1.5,0),v.rotation.z=-E*.5,u.add(v),Nt(wn([[.075,0],[.06,.07],[.02,.12],[-.03,.135],[-.07,.13]],10,(A,k)=>k>.85?me.plateLo:l(A,k,5),1,1),o,v),Nt(wn([[-.06,.13],[-.1,.12]],10,()=>me.plateLo),o,v),Nt(mn(new Ee(.035,.04,.02,10).rotateZ(-E*Math.PI/2),me.plateHi),o,v,[E*.125,-.03,0]),Nt(mn(new we(.014,6,4),me.brass),s,v,[E*.137,-.03,0])}let _=new Zt;_.position.set(-.26,1.44,0),_.rotation.set(.05,0,.1),u.add(_),g(_,.1),Nt(ze([[0,-.28,.02],[0,-.42,.05],[0,-.52,.06]],E=>.048+.008*E,7,(E,v)=>l(v,E)),o,_),Nt(ni([.058,.09,.062],me.plateLo,[0,-.58,.06]),o,_);let f=new Zt;f.position.set(.26,1.44,.02),f.rotation.z=-.35,u.add(f),Nt(ze([[0,-.02,0],[0,-.12,0],[0,-.22,.04]],E=>.056-.006*E,7,(E,v)=>l(v,E)),o,f),Nt(mn(new we(.05,7,5),me.plateHi),o,f,[0,-.24,.05]),Nt(ze([[0,-.25,.07],[0,-.33,.15],[0,-.39,.21]],E=>.045+.01*E,7,(E,v)=>l(v,E)),o,f),Nt(ni([.06,.08,.068],me.plateLo,[0,0,0],[-.5,0,0]),o,f).position.set(0,-.43,.24);let{staffPivot:p,staff:y,crystal:x,crystalMat:b,glow:L}=gr(f,[0,-.43,.25],n,t,e);return{root:h,body:u,head:m,arm:f,staffPivot:p,crystal:x,crystalMat:b,glow:L,staff:y,height:2,materials:n}}var Pe={skin:re(8688447),skinLo:re(6714670),skinHi:re(10136146),hair:re(2892832),hairHi:re(4536623),red:re(11744555),redLo:re(8528668),leather:re(8015404),leatherLo:re(5583897),wrap:re(11045474),wrapLo:re(8217925),shorts:re(3814191),shortsLo:re(2695967),brass:re(12161605),nail:re(3947042),ear:re(10709594)},Gr={w:.096,h:.112,d:.106,jaw:.22,chin:.02,nose:.036,brow:.016};function cf(i,t,e){let{materials:n,mat:r}=Os(),s=r(16777215,{vc:!0,double:!0}),o=r(Pe.skin,{rough:.75}),a=i==="ally"?re(2920330):Pe.red,c=i==="ally"?re(2058598):Pe.redLo,l=(v,A,k=5)=>Oe(Pe.skin,ve(v*k)>.5?Pe.skinHi:Pe.skinLo,.35+.1*A),h=new Zt,u=new Zt;h.add(u);for(let v of[-1,1]){let A=v*.095;Nt(cn(7,4,(k,M)=>{let T=k*Math.PI*2,J=-.06+M*.23,z=.05*(1-.35*M)*(M>.75?1-(M-.75)*1.6:1);return[A+v*.012*M+Math.cos(T)*z,Math.max(.004,.035+Math.sin(T)*z*.55-.01*M),J]},(k,M)=>l(k,M),!0),s,u);for(let k=0;k<3;k++)Nt(mn(new we(.016,5,4),Pe.skinLo),s,u,[A+v*.012+(k-1)*.022,.016,.165-Math.abs(k-1)*.01]);Nt(ze([[A,.05,-.01],[A,.3,-.005],[A*1.03,.48,.01],[A*1.05,.65,0],[A,.8,-.005]],k=>.04+.022*k+.008*Math.sin(k*7),7,(k,M)=>l(M,k)),s,u),Nt(ze([[A,.08,-.01],[A,.2,-.008],[A,.32,-.004],[A*1.02,.44,.005]],k=>.048+.008*k,7,(k,M)=>ve(k*6+M*.5)>.5?Pe.wrap:Pe.wrapLo),s,u)}Nt(wn([[.96,.17],[.86,.19],[.74,.21],[.66,.2]],14,(v,A)=>Oe(Pe.shorts,Pe.shortsLo,.5*ve(v*6)*A),1.08,.82),s,u),Nt(wn([[1,.175],[.94,.178]],14,v=>ve(v*7)>.85?Pe.leatherLo:Pe.leather,1.08,.84),s,u),Nt(ni([.06,.05,.02],Pe.brass,[0,.97,.15]),s,u),Nt(ni([.035,.028,.024],Pe.leatherLo,[0,.97,.152]),s,u);for(let v of[!1,!0])Nt(cn(6,6,(A,k)=>{let M=(v?Math.PI:0)+(A-.5)*.9,T=.19+.06*k,J=.42+.1*ve(A*3.5+.2)+.04*Math.sin(A*17);return[Math.sin(M)*T*1.08,.96-k*J,Math.cos(M)*T*.86+(v?-.01:.01)]},(A,k)=>Oe(a,c,.25+.35*ve(A*3)*k)),s,u);Nt(wn([[1.36,.075],[1.32,.155],[1.24,.18],[1.13,.155],[1.02,.14],[.94,.152]],14,(v,A)=>Math.min(v,1-v)<.12&&A>.4?ve(A*6)>.5?Pe.skinHi:Pe.skinLo:l(v,A,7),1.1,.74),s,u);for(let v of[-1,1]){let A=Array.from({length:9},(k,M)=>{let T=M/8,J=-.9+T*4.4;return[v*Math.sin(J)*.212,1.33-.36*T+.04*Math.sin(T*Math.PI),Math.cos(J)*.145]});Nt(ze(A,()=>.014,4,k=>Oe(Pe.leather,Pe.leatherLo,.4*ve(k*4)),[1,2,1]),s,u)}Nt(ni([.05,.05,.02],Pe.brass,[0,1.27,.15],[0,0,Math.PI/4]),s,u);let d=new Zt;d.position.set(-.2,1.31,0),d.rotation.z=.55,d.scale.setScalar(.8),u.add(d),Nt(wn([[.06,0],[.045,.06],[0,.1],[-.05,.11],[-.08,.1]],9,(v,A)=>A>.8||ve(v*9)>.8?Pe.leatherLo:Pe.leather,1,1.1),s,d),Nt(ze(Array.from({length:11},(v,A)=>{let k=A/10*Math.PI*2;return[Math.sin(k)*.088,1.375+.02*Math.cos(k),Math.cos(k)*.08]}),()=>.03,7,(v,A)=>Oe(a,c,.5*ve(A*2+v*6))),s,u),Nt(cn(8,5,(v,A)=>{let k=Math.PI+(v-.5)*(2.4-1.2*A),M=.13-.02*A;return[Math.sin(k)*M*1.1,1.42-A*.2+.03*Math.cos((v-.5)*6),Math.cos(k)*M-.04*A]},(v,A)=>Oe(a,c,.2+.4*ve(v*3)*(1-A))),s,u);for(let v of[0,1])Nt(ze([[-.04+v*.05,1.36,-.1],[-.07+v*.03,1.22,-.15],[-.09+v*.05,1.08,-.16]],A=>.035*(1-.3*A),5,A=>Oe(a,c,A),[1.4,1,.45]),s,u);Nt(new Ee(.04,.05,.1,7),o,u,[0,1.4,0]);let m=new Zt;m.position.set(0,1.51,.01),u.add(m);let g=r(16777215,{rough:.75,flat:!1});g.map=uc({skin:"#84933f",shade:"rgba(60,72,24,A)",iris:"#d2401c",eyeW:.2,eyeH:.075,lid:.2,brow:"#2a221c",browW:22,browTilt:1,lips:"#4e3a22",lipW:.34,snarl:!0,glowEyes:!0}),Nt(hc(Gr),g,m);for(let v of[-1,1]){let A=[[v*.075,0,-.01],[v*.14,.03,-.03],[v*.21,.07,-.05],[v*.27,.105,-.07]];Nt(ze(A,k=>.035*(1-k)**.9+.002,6,(k,M)=>l(M,k,3),[1,1,.35]),s,m),Nt(ze(A.map(([k,M,T])=>[k*.98,M,T+.008]).slice(0,3),k=>.02*(1-k)+.002,5,()=>Pe.ear,[1,1,.3]),s,m)}Nt(cn(16,3,(v,A)=>{let k=-Math.PI+v*Math.PI*2,M=Math.abs(k),T=M<.9?.55:.55-.65*((M-.9)/(Math.PI-.9)),J=Math.PI/2-A*(Math.PI/2-T),z=1.08+.03*ve(v*8);return[Math.sin(k)*Math.cos(J)*Gr.w*z,Math.sin(J)*Gr.h*z,Math.cos(k)*Math.cos(J)*Gr.d*z]},(v,A)=>Oe(Pe.hair,Pe.hairHi,.4*ve(v*8+A)),!0),s,m);for(let v=0;v<13;v++){let A=-Math.PI+v/13*Math.PI*2+.2*Math.sin(v*7.3),k=.55+.5*(v*.37%1),M=new C(Math.sin(A)*Math.cos(k),Math.sin(k),Math.cos(A)*Math.cos(k)),T=new C(M.x*Gr.w,M.y*Gr.h,M.z*Gr.d);Nt(mn(new Un(.022,.07+.03*(v*.61%1),4),v%3?Pe.hair:Pe.hairHi),s,m,[T.x,T.y,T.z]).quaternion.setFromUnitVectors(new C(0,1,0),M.add(new C(0,0,-.5)).normalize())}let _=(v,A,k)=>Nt(ze([A,[(A[0]+k[0])/2,(A[1]+k[1])/2,(A[2]+k[2])/2],k],M=>.042-.006*M,7,(M,T)=>ve(M*4+T*.4)>.5?Pe.leather:Pe.leatherLo),s,v),f=new Zt;f.position.set(-.2,1.3,0),f.rotation.set(.05,0,.14),u.add(f),Nt(ze([[0,0,0],[0,-.14,0],[0,-.26,.02],[0,-.4,.05],[0,-.5,.06]],v=>.042-.012*v+.006*Math.sin(v*6),7,(v,A)=>l(A,v)),s,f),_(f,[0,-.32,.04],[0,-.48,.06]),Nt(mn(new we(.04,6,4),Pe.leatherLo),s,f,[0,-.54,.065]).scale.set(.85,1.2,.75);let p=new Zt;p.position.set(.2,1.3,.02),p.rotation.z=-.35,u.add(p),Nt(ze([[0,0,0],[0,-.12,0],[0,-.22,.04],[0,-.3,.12],[0,-.38,.2]],v=>.042-.012*v,7,(v,A)=>l(A,v)),s,p),_(p,[0,-.28,.1],[0,-.38,.19]),Nt(mn(new we(.042,6,4),Pe.leatherLo),s,p,[0,-.42,.23]).scale.set(.85,1.1,.75);let{staffPivot:y,staff:x,crystal:b,crystalMat:L,glow:E}=gr(p,[0,-.42,.23],n,t,e);return{root:h,body:u,head:m,arm:p,staffPivot:y,crystal:b,crystalMat:L,glow:E,staff:x,height:1.75,materials:n}}var gn=i=>new kt(i),nn={robe:gn(8017597),robeDeep:gn(6045590),trim:gn(11242982),dress:gn(3484996),dressHi:gn(4931936),lining:gn(6969968),skin:gn(15654104),hair:gn(13615844),hairDark:gn(10194102),hat:gn(7097004),hatBand:gn(10256598),boot:gn(3880006),belt:gn(4207692),moon:gn(15787712),lips:gn(5911888),eye:gn(1709088)};function $n(i,t,e,n,r=!1){let s=[],o=[],a=(u,d)=>e(r?u%i/i:u/i,d/t),c=(u,d)=>n(r?(u%i+i)%i/i:u/i,d/t),l=(u,d,m)=>{let g=c((u[0]+d[0]+m[0])/3,(u[1]+d[1]+m[1])/3);for(let[_,f]of[u,d,m])s.push(...a(_,f)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let d=0;d<i;d++)l([d,u],[d,u+1],[d+1,u+1]),l([d,u],[d+1,u+1],[d+1,u]);let h=new be;return h.setAttribute("position",new se(s,3)),h.setAttribute("color",new se(o,3)),h.computeVertexNormals(),h}function jh(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new C(...i[Math.min(s-1,h+1)]).sub(new C(...i[Math.max(0,h-1)])).normalize()),a=new C(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new C(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return $n(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}var ii=i=>1-Math.abs((i%1+1)%1*2-1),$i=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),Bs={w:.087,h:.126,d:.108},bi=(i,t)=>Math.exp(-(i*i)/(t*t)),lf=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function Ny(){let i=new we(1,28,22),t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++){let r=t.getX(n),s=t.getY(n),o=t.getZ(n),a=Math.max(0,o),c=r*Bs.w,l=s*Bs.h,h=o*Bs.d;if(s<0){let d=-s;c*=1-.55*d**1.25,h*=1-.12*d,l*=1+.08*d}c*=1+.04*bi(s+.02,.22)*a,s>.2&&(c*=1-.1*(s-.2));for(let d of[-1,1])h-=.008*bi(r-d*.38,.2)*bi(s-.06,.13)*a;h+=.006*bi(s-.3,.07)*bi(r,.5)*a;let u=bi(r,.1)*a*lf(.2,-.2,s)*lf(-.38,-.26,s);h+=.017*u,h+=.005*bi(r,.24)*bi(s+.5,.07)*a,h-=.004*bi(r,.3)*bi(s+.38,.05)*a,o<0&&(h*=1.06),t.setXYZ(n,c,l,h),o>.05?e.setXY(n,.5+r*.5,.5+s*.5):e.setXY(n,.02,.97)}return i.computeVertexNormals(),i}function Hy(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=(h,u)=>[(.5+h*.5)*512,(.5-u*.5)*512];e.fillStyle="#e9d7d3",e.fillRect(0,0,512,512);let r=(h,u,d,m,g,_)=>{let[f,p]=n(h,u),y=d*512*.5;e.save(),e.translate(f,p),e.scale(1,m/d);let x=e.createRadialGradient(0,0,0,0,0,y);x.addColorStop(0,g.replace("A",String(_))),x.addColorStop(1,g.replace("A","0")),e.fillStyle=x,e.beginPath(),e.arc(0,0,y,0,Math.PI*2),e.fill(),e.restore()};for(let h of[-1,1])r(h*.62,-.18,.22,.3,"rgba(150,110,130,A)",.28),r(h*.42,-.2,.16,.1,"rgba(220,140,150,A)",.22);r(0,-.72,.3,.12,"rgba(140,100,120,A)",.25);for(let h of[-1,1]){let u=h*.38,d=.06;r(u,d+.06,.28,.12,"rgba(120,85,140,A)",.55);let[m,g]=n(u,d),_=.21*512*.5,f=.082*512*.5;e.save(),e.translate(m,g),e.scale(h,1),e.beginPath(),e.moveTo(-_,0),e.quadraticCurveTo(-_*.1,-f*1.1,_,-f*.15),e.quadraticCurveTo(_*.2,f*1.05,-_,0),e.closePath(),e.fillStyle="#efe9f2",e.fill(),e.save(),e.clip(),e.fillStyle="#4a3a5c",e.beginPath(),e.arc(-_*.12,f*.12,f*1.05,0,Math.PI*2),e.fill(),e.fillStyle="#1a1220",e.beginPath(),e.arc(-_*.12,f*.12,f*.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(-_*.28,-f*.25,f*.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,40,70,.55)",e.fillRect(-_,-f*1.2,_*2,f*.55),e.restore(),e.strokeStyle="#1c1420",e.lineCap="round",e.lineWidth=512*.01,e.beginPath(),e.moveTo(-_*1.02,.02*f),e.quadraticCurveTo(-_*.1,-f*1.15,_*1.12,-f*.35),e.stroke(),e.lineWidth=512*.006;for(let p=0;p<4;p++){let y=.55+p*.15;e.beginPath(),e.moveTo(_*(y*2-1),-f*(.95-p*.15)),e.lineTo(_*(y*2-1)+_*.18,-f*(1.35-p*.12)),e.stroke()}e.strokeStyle="rgba(90,60,90,.55)",e.lineWidth=512*.004,e.beginPath(),e.moveTo(-_*.9,-f*.9),e.quadraticCurveTo(0,-f*2,_*.95,-f*1),e.stroke(),e.strokeStyle="rgba(90,60,90,.4)",e.beginPath(),e.moveTo(-_*.6,f*.55),e.quadraticCurveTo(_*.1,f*1.05,_*.85,f*.2),e.stroke(),e.strokeStyle="#4a3a55",e.lineWidth=512*.011,e.beginPath(),e.moveTo(-_*.95,-f*2.7),e.quadraticCurveTo(_*.2,-f*3.4,_*1.15,-f*2.6),e.stroke(),e.restore()}r(.07,-.12,.05,.2,"rgba(160,120,135,A)",.22),e.fillStyle="rgba(110,70,90,.55)";for(let h of[-1,1]){let[u,d]=n(h*.06,-.31);e.beginPath(),e.ellipse(u,d,512*.012,512*.006,0,0,Math.PI*2),e.fill()}let[s,o]=n(0,-.5),a=.25*512*.5,c=.065*512*.5;e.fillStyle="#5b2f50",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s-a*.5,o-c*1.2,s-a*.1,o-c*.9),e.lineTo(s,o-c*.6),e.lineTo(s+a*.1,o-c*.9),e.quadraticCurveTo(s+a*.5,o-c*1.2,s+a,o),e.closePath(),e.fill(),e.fillStyle="#7b4468",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*2,s+a,o),e.closePath(),e.fill(),e.strokeStyle="#3a1c33",e.lineWidth=512*.006,e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*.35,s+a,o),e.stroke(),r(.03,-.535,.05,.02,"rgba(255,220,235,A)",.4);let l=new Dn(t);return l.colorSpace=tn,l.anisotropy=4,l}function hf(i,t,e){let n=[],r=(Z,D={})=>{let R=new Se({color:D.vc?16777215:Z,vertexColors:!!D.vc,metalness:D.metal??.04,roughness:D.rough??.82,flatShading:!0,emissive:D.emissive??(D.vc?1709092:0),transparent:!0,side:D.double?Ie:Ln});return n.push({mat:R,color:R.color.clone(),emissive:R.emissive.clone()}),R},s=r(16777215,{vc:!0,double:!0}),o=r(nn.skin,{rough:.7}),a=r(nn.eye,{rough:.5}),c=r(nn.moon,{metal:.35,rough:.35,emissive:2761744}),l=(Z,D,R,P=[0,0,0])=>{let B=new St(Z,D);return B.position.set(...P),R.add(B),B},h=i==="ally"?gn(3840636):nn.robe,u=i==="ally"?gn(2781272):nn.robeDeep,d=i==="ally"?gn(7655598):nn.trim,m=new Zt,g=new Zt;m.add(g);for(let Z of[-1,1]){let D=Z*.075;l(jh([[D,.98,0],[D*1.05,.62,.01],[D*1.1,.3,0],[D*1.1,.13,-.01]],P=>.068-.03*P,7,()=>nn.boot),s,g);let R=$n(6,2,(P,B)=>{let q=P*Math.PI*2,O=B,H=-.05+O*.2,Y=.13-O*.11,Q=.045*(1-.65*O*O);return[D+Math.cos(q)*Q,Y+Math.sin(q)*Q*.55,H]},()=>nn.boot,!0);l(R,s,g),l(new Ee(.012,.006,.12,5),a,g,[D,.06,-.045])}let _=$n(14,8,(Z,D)=>{let R=D<.25?.02:.02+(D-.25)*.55,P=R+Z*(Math.PI*2-2*R),B=1.1-D*.82-(Z>.35&&Z<.65?0:.04*D)+.03*ii(Z*7)*D,q=.165+.15*D**1.2;return[Math.sin(P)*q,B,Math.cos(P)*q*.82]},(Z,D)=>$i(nn.dress,nn.dressHi,.6*ii(Z*7)*D));l(_,s,g),l($n(4,4,(Z,D)=>{let R=-.35+Z*.7,P=.15+.09*D;return[Math.sin(R)*P,.86-D*.6,Math.cos(R)*P*.62-.02]},()=>nn.lining),s,g);let f=$n(10,5,(Z,D)=>{let R=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.1],[1.67,.052]],P=D*(R.length-1),B=Math.min(R.length-2,Math.floor(P)),q=P-B,O=R[B][0]+(R[B+1][0]-R[B][0])*q,H=R[B][1]+(R[B+1][1]-R[B][1])*q,Y=Z*Math.PI*2;return[Math.sin(Y)*H*1.08,O,Math.cos(Y)*H*.78]},(Z,D)=>$i(nn.dress,nn.dressHi,D>.8?.5:.15*ii(Z*4)),!0);l(f,s,g),l($n(14,1,(Z,D)=>{let R=Z*Math.PI*2,P=.172+.006*D;return[Math.sin(R)*P*1.08,1.04+D*.11,Math.cos(R)*P*.82]},()=>nn.belt,!0),s,g);let p=(Z,D)=>{let R=new Hr;R.absarc(0,0,Z,Math.PI*.18,Math.PI*1.82,!1),R.absarc(Z*.38,0,Z*.78,Math.PI*1.7,Math.PI*.3,!0);let P=new Ps(R,{depth:D,bevelEnabled:!0,bevelThickness:D*.4,bevelSize:Z*.08,bevelSegments:1,curveSegments:6});return P.center(),P};l(new Zn(.05,.012,4,10),c,g,[0,1.095,.152]).scale.set(1,.85,.6),l(p(.042,.012),c,g,[0,1.095,.162]).rotation.z=.5;let x=9,b=$n(28,14,(Z,D)=>{let R=.36+.48*D**1.2,P=R+Z*(Math.PI*2-2*R),B=.07+.16*ii(Z*x+.5)+(Z<.06||Z>.94?.08:0),q=.14,O,H,Y;if(D<q){let Q=D/q;O=1.61-.14*Q**.8,H=.1+.155*Q**.7,Y=.72}else{let Q=(D-q)/(1-q);O=1.47-Q*(1.47-B),H=.255+.25*Q**1.3,Y=.72+.22*Q}return H*=1+.07*Math.sin(P*8)*Math.max(0,D-q),[Math.sin(P)*H*(1.12-.1*D),O,Math.cos(P)*H*Y-.03*D]},(Z,D)=>{let R=D>.89||Z<.03||Z>.97,P=$i(h,u,.35*ii(Z*8+.25)+(Z>.3&&Z<.7?.15:0));return R?d:P});l(b,s,g),l($n(10,2,(Z,D)=>{let R=Math.PI*.55+Z*Math.PI*.9,P=.105+.045*D;return[Math.sin(R)*P*1.1,1.58+D*.13,Math.cos(R)*P*.85]},(Z,D)=>$i(h,d,D>.6?1:0)),s,g),l(new Ee(.045,.055,.12,7),o,g,[0,1.63,0]);let L=new Zt;L.position.set(0,1.76,0),g.add(L);let E=r(16777215,{rough:.7});E.map=Hy(),E.flatShading=!1,l(Ny(),E,L),l($n(20,4,(Z,D)=>{let R=-Math.PI+Z*Math.PI*2,P=Math.abs(R),B=P<.08?.72:P<.95?.6-.42*((P-.08)/.87)**.8:.18-.5*((P-.95)/(Math.PI-.95)),q=Math.PI/2-D*(Math.PI/2-B),O=1.085+.015*Math.sin(R*9);return[Math.sin(R)*Math.cos(q)*Bs.w*O,Math.sin(q)*Bs.h*O+.004,Math.cos(R)*Math.cos(q)*Bs.d*O]},(Z,D)=>$i(nn.hair,nn.hairDark,.15+.4*ii(Z*14)*D),!0),s,L);let v=(Z,D)=>$i(nn.hair,nn.hairDark,.25+.5*ii(Z*9)*(.4+.6*D));l($n(18,10,(Z,D)=>{let R=Math.PI*.42+Z*Math.PI*1.16,P=.1-D*(.95+.14*ii(Z*6+.3)),B=D<.25?.13+D*.28:.2+.05*Math.sin(D*3.1),q=.022*Math.sin(D*15+R*3)*D;return[Math.sin(R)*(B+q)*1.05,P,Math.cos(R)*(B+q)*.85-.02-.05*D]},v),s,L);for(let Z of[-1,1])for(let D of[0,1]){let R=Z*(.098+D*.03),P=.035-D*.05,B=Array.from({length:8},(q,O)=>{let H=O/7;return[R+Z*(.06*H+.025*Math.sin(H*9+D)),.04-H*(.55+.08*D),P+.06*H-.03*Math.sin(H*7)]});l(jh(B,q=>.035*(1-.6*q)+.008,5,(q,O)=>v(O,q),[1,1,.55]),s,L)}let A=new Zt;A.position.set(0,.075,-.005),A.rotation.set(-.12,0,.07),L.add(A),l($n(20,3,(Z,D)=>{let R=Z*Math.PI*2,P=.14+D*.24;return[Math.sin(R)*P,.02-.075*D*D+.012*Math.sin(R*3)*D,Math.cos(R)*P]},(Z,D)=>$i(nn.hat,u,D>.9?.25:.2*ii(Z*5)),!0),s,A),l(jh([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],Z=>.165*(1-Z)**1.35+.004,8,(Z,D)=>$i(nn.hat,u,.25*ii(D*4)+.15*Z)),s,A),l($n(16,1,(Z,D)=>{let R=Z*Math.PI*2,P=.168-.006*D;return[Math.sin(R)*P,.025+D*.06,Math.cos(R)*P]},()=>nn.hatBand,!0),s,A);let M=l(p(.04,.012),c,A,[0,.055,.172]);M.rotation.z=.5;let T=(Z,D,R=.15)=>$n(10,6,(P,B)=>{let q=P*Math.PI*2,O=.065+R*Math.max(0,(B-.3)/.7)**1.4,H=B<.99?0:.07*ii(P*4),Y=-(B*Z)-H,Q=D*B*B;return[Math.cos(q)*O,Y,Math.sin(q)*O*.9+Q]},(P,B)=>B>.85?d:$i(h,u,.3*ii(P*3)),!0),J=new Zt;J.position.set(-.23,1.47,0),J.rotation.set(.05,0,.12),g.add(J),l(T(.6,.06),s,J),l(new we(.042,6,4),o,J,[0,-.6,.05]).scale.set(.8,1.25,.6);let X=new Zt;X.position.set(.23,1.47,.02),X.rotation.z=-.35,g.add(X);let ut=l(T(.4,0,.07),s,X);ut.rotation.x=-.5;let ot=l(new Ee(.03,.034,.12,6),o,X,[0,-.38,.19]);ot.rotation.x=-.5,l(new we(.044,6,4),o,X,[0,-.43,.24]).scale.set(.85,1.1,.7);let{staffPivot:pt,staff:U,crystal:tt,crystalMat:V,glow:K}=gr(X,[0,-.43,.24],n,t,e);return{root:m,body:g,head:L,arm:X,staffPivot:pt,crystal:tt,crystalMat:V,glow:K,staff:U,height:2,materials:n}}var Fy={me:4020950,opp:12728908,ally:3121012};function uf(i,t,e,n){if(i==="witch")return hf(t,e,n);if(i==="wizard")return of(t,e,n);if(i==="knight")return af(t,e,n);if(i==="goblin")return cf(t,e,n);i=i;let r=[],s=(J,z={})=>{let X=new Se({color:J,metalness:z.metal??.05,roughness:z.rough??.8,flatShading:!0,emissive:z.emissive??0,emissiveIntensity:z.ei??1,transparent:!0});return r.push({mat:X,color:X.color.clone(),emissive:X.emissive.clone()}),X},o=(J,z,X=0,ut=0,ot=0)=>{let pt=new St(J,z);return pt.position.set(X,ut,ot),pt},c=i==="goblin"||i==="kid"?.78:1,l=s(i==="goblin"?7323466:15778970),h=s(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:Fy[t],d=s(u),m=s(16766073,{metal:.2,rough:.4}),g=s(12897496,{metal:.3,rough:.45}),_=new Zt,f=new Zt;if(_.add(f),i==="wizard")f.add(o(new Ee(.27,.46,1,9),d,0,.5,0)),f.add(o(new Ee(.47,.47,.05,9),m,0,.03,0));else{let J=i==="knight"?g:h;f.add(o(new Ee(.09,.08,.6,6),J,-.12,.3,0)),f.add(o(new Ee(.09,.08,.6,6),J,.12,.3,0)),f.add(o(new un(.16,.08,.26),h,-.12,.04,.05)),f.add(o(new un(.16,.08,.26),h,.12,.04,.05)),f.add(o(new Ee(.3,.34,.32,8),d,0,.72,0))}let p=i==="knight"?g:d;if(f.add(o(new Ee(.24,.29,.55,8),p,0,1.12,0)),f.add(o(new Zn(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let J=o(new un(.34,.6,.04),d,0,1,.27);f.add(J),f.add(o(new we(.13,6,4),g,-.3,1.36,0)),f.add(o(new we(.13,6,4),g,.3,1.36,0))}i==="human"&&f.add(o(new un(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let y=new Zt;y.position.set(0,1.58,0),f.add(y),y.add(o(new pn(.2,1),l));for(let J of[-.07,.07])y.add(o(new we(.028,6,4),h,J,.02,.18));if(i==="wizard"){let J=s(15658740);y.add(o(new Un(.17,.42,7),J,0,-.2,.1).rotateX(Math.PI)),y.add(o(new un(.4,.34,.14),J,0,-.06,-.13)),y.add(o(new Ee(.36,.36,.04,12),d,0,.15,0));let z=o(new Un(.24,.62,9),d,0,.47,0);z.rotation.z=.12,y.add(z),y.add(o(new Zn(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let J of[-1,1]){let z=o(new Un(.07,.34,5),l,J*.24,.05,0);z.rotation.z=-J*1.25,y.add(z)}y.add(o(new Un(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")y.add(o(new pn(.235,1),g)),y.add(o(new un(.3,.05,.05),h,0,.02,.21)),y.add(o(new Un(.06,.4,6),s(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")y.add(o(new un(.38,.2,.12),s(5913122),0,-.02,-.13)),y.add(o(new we(.215,10,6,0,Math.PI*2,0,Math.PI/2),s(4029400),0,.03,0)),y.add(o(new un(.2,.025,.16),s(4029400),0,.05,.2));else if(i==="human"){let J=s(5913122);y.add(o(new we(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),J,0,.02,-.01)),y.add(o(new un(.4,.22,.12),J,0,-.04,-.13))}let x=i==="knight"?g:d,b=new Zt;b.position.set(-.3,1.34,0),b.rotation.z=.25,f.add(b),b.add(o(new Ee(.075,.1,.55,6),x,0,-.27,0)),b.add(o(new we(.07,6,4),l,0,-.58,0));let L=new Zt;L.position.set(.3,1.34,.02),L.rotation.z=-.35,f.add(L),L.add(o(new Ee(.075,.1,.5,6),x,0,-.22,.05).rotateX(-.5));let E=o(new we(.07,6,4),l,0,-.42,.22);L.add(E);let v=new Zt;v.position.set(0,-.42,.22),v.rotation.z=.28,L.add(v);let A=Zi(n,e);A.group.position.y=.3,v.add(A.group);for(let J of A.materials)r.push({mat:J,color:J.color.clone(),emissive:J.emissive.clone()});let{gem:k,gemMat:M,glow:T}=A;return _.scale.setScalar(c),{root:_,body:f,head:y,arm:L,staffPivot:v,crystal:k,crystalMat:M,glow:T,staff:A,height:1.95*c,materials:r}}function Qh(i){return["wizard","witch","goblin","knight","kid","human"].find(t=>t===i)??"wizard"}function Oy(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Dn(i);return n.colorSpace=tn,n}function ff(i){let t;try{t=new As({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=Po,t.setClearColor(0,0);let e=new Rs;e.add(new Ds(14673663,2760768,1.4));let n=new qi(16777215,2.2);n.position.set(2,3,4),e.add(n);let r=new qi(10456319,2);r.position.set(-3,2,-3),e.add(r);let s=new pi(16777215,3,3,2);e.add(s);let o=new Mn(30,1,.1,50),a=Oy(),c=new Zt;c.rotation.z=.12,e.add(c);let l=null,h="";function u(y){return l&&h===y||(l&&(c.remove(l.group),l.group.traverse(x=>x.geometry?.dispose?.())),l=Zi(y,a),h=y,c.add(l.group),s.color.copy(l.color),s.position.set(.3,pr+.2,.6)),l}function d(){let y=i.clientWidth||300,x=i.clientHeight||420;t.setSize(y,x,!1),o.aspect=y/x;let b=1.55/Math.tan(Us.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,b),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,f=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(y){if(!f()){m=0;return}m=requestAnimationFrame(p);let x=Math.min(.05,(y-g)/1e3);g=y,_+=x,l&&(c.rotation.y+=x*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=x*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,x,.25),t.render(e,o))}return{show(y){u(y),d(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(y,x,b){let L=[],E=h,v=c.rotation.y,A=c.position.y;t.setPixelRatio(1),t.setSize(x,b,!1),o.aspect=x/b,o.position.set(.35,pr+.12,1.6),o.lookAt(0,pr-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let k of y)u(k).update(1.2,0,0),t.render(e,o),L.push(i.toDataURL("image/png"));return c.rotation.y=v,c.position.y=A,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),E&&u(E),d(),L},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function vn(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,r)=>n+(r-n)*e(),int:(n,r)=>n+Math.floor(e()*(r-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var Bt=i=>i<0?0:i>1?1:i,Te=(i,t,e)=>{let n=Bt((e-i)/(t-i));return n*n*(3-2*n)},vf=(i,t,e)=>i+(t-i)*e,Kt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],ge=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],_r=(i,t)=>1-Math.exp(-i*t),Ho=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},ue=i=>i*Math.PI/180;function Sn(i,t){let e=ue(i),n=ue(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function Ef(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return Kt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var dc=(()=>{let i=vn(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function Be(i,t){let e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,d=dc[h+c],m=dc[h+l],g=dc[u+c],_=dc[u+l];return(d*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var df=Math.cos(.55),pf=Math.sin(.55);function Qe(i,t,e=5,n=2.03,r=.5){let s=0,o=1,a=0;for(let c=0;c<e;c++){s+=o*Be(i+17.3*c,t-9.1*c),a+=o;let l=(i*df-t*pf)*n,h=(i*pf+t*df)*n;i=l,t=h,o*=r}return s/a}var mf=Math.cos(.7),gf=Math.sin(.7);function wf(i,t,e=5,n=2.1,r=.52){let s=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*Be(i+31.7*l,t+5.3*l)-1);h=h*h*c,s+=h*o,a+=o,c=Bt(h*2);let u=(i*mf-t*gf)*n,d=(i*gf+t*mf)*n;i=u,t=d,o*=r}return s/a}var _f=new Map;function By(i,t,e){let n=`${t}:${e}`,r=_f.get(n);if(!r){let l=vn(e*977+t);r=new Float32Array(t);for(let h=0;h<t;h++)r[h]=l.random();_f.set(n,r)}let s=i*t,o=Math.floor(s),a=s-o,c=a*a*(3-2*a);return r[(o%t+t)%t]*(1-c)+r[((o+1)%t+t)%t]*c}function yf(i,t=5,e=3,n=1,r=.5){let s=0,o=1,a=0;for(let c=0;c<t;c++)s+=o*By(i,e*2**c,n+c),a+=o,o*=r;return s/a}function Ki(i,t){let e=i.stops;return(n,r,s)=>{let o=Math.asin(Math.max(-1,Math.min(1,s)))*180/Math.PI,a=Ef(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+r*l[1]+s*l[2])));for(let[u,d,m]of i.glow){let g=Math.exp(-h/u)*d*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-r*l[1]+s*l[2]))),d=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=d*i.anti_col[0],a[1]+=d*i.anti_col[1],a[2]+=d*i.anti_col[2]}}return a}}var ks=(i,t)=>Math.round(255*Math.pow(Bt(_r(i,t)),1/2.2));function nu(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function iu(i,t=!1){let e=new Dn(i);return e.colorSpace=tn,t?e.wrapS=e.wrapT=Bi:e.wrapS=Ur,e.anisotropy=2,e}function ky(i,t,e){let n=t/2,{c:r,g:s,img:o}=nu(t,n),a=Ki(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??ge(i.far2,.8),d=[],m=h.map(()=>[]);for(let b=0;b<t;b++){let L=(b+.5)/t,E=L*2*Math.PI;d.push(a(Math.cos(E)*Math.cos(.012),Math.sin(E)*Math.cos(.012),Math.sin(.012)));let v=1;for(let A of e.notchAz){let k=Math.abs(Ho(E,ue(A)));v*=1-.85*Math.exp(-((k/ue(20))**2))}h.forEach(([A,k,M],T)=>{if(e.ridgeKind==="trees"){m[T].push(A+k*yf(L,6,18,M,.62)**1.5);return}let J=1-Math.abs(2*yf(L,7,4,M,.56)-1);m[T].push((A+k*J**1.3)*(.35+.65*v))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),f=null,p=[0,0,0],y=[0,0,0];if((i.milky??0)>0){let b=new C(.25,-.55,.8).normalize(),L=b.clone().cross(new C(0,0,1)).normalize(),E=b.clone().cross(L);f=[b.x,b.y,b.z],p=[L.x,L.y,L.z],y=[E.x,E.y,E.z]}for(let b=0;b<n;b++){let L=((b+.5)/n-.5)*Math.PI,E=Math.cos(L),v=Math.sin(L),A=n-1-b;for(let k=0;k<t;k++){let M=(k+.5)/t*2*Math.PI,T=E*Math.cos(M),J=E*Math.sin(M),z=v,X=a(T,J,z);if(f&&L>0){let U=Math.asin(Math.max(-1,Math.min(1,T*f[0]+J*f[1]+z*f[2]))),tt=Math.atan2(T*y[0]+J*y[1]+z*y[2],T*p[0]+J*p[1]+z*p[2]),V=3*Math.cos(tt),K=3*Math.sin(tt),Z=Qe(V+9*U,K+4*U,4),D=Te(.5,.75,Qe(V*1.7+17+14*U,K*1.7-5+6*U,3)),R=Math.exp(-((U/(i.milky_w??.2))**2))*(.25+1.3*Z)*(1-.65*D)*i.milky,P=i.milky_col??[.55,.58,.85];X=[X[0]+R*P[0],X[1]+R*P[1],X[2]+R*P[2]]}let ut=0;h.forEach(([,,,U,tt],V)=>{let K=Bt((m[V][k]-L)/l+.5);if(K<=0)return;let Z=d[k],D=Kt(tt,Z,U),R=Kt(D,Z,Math.exp(-Math.max(L,0)/.025)*.55);X=Kt(X,R,K),ut=Math.max(ut,K)});let ot=Bt(-L/l+.5);ot>0&&(X=Kt(X,u,ot));let pt=(A*t+k)*4;o.data[pt]=ks(X[0],c),o.data[pt+1]=ks(X[1],c),o.data[pt+2]=ks(X[2],c),o.data[pt+3]=255,g[A*t+k]=ut,_[A*t+k]=(o.data[pt]+o.data[pt+1]+o.data[pt+2])/765}}let x=(i.stars??0)>0?zy(t,n,i.star_n,i.stars,g,_):null;return s.putImageData(o,0,0),{tex:iu(r),stars:x}}function zy(i,t,e,n,r,s){let o=vn(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let d=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(d),_=Math.floor(m/(2*Math.PI)*i)%i,f=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-f,y=(1-r[p*i+_])*Bt(1-s[p*i+_]*3),x=o.random()**6,b=a[o.int(0,3)];if(y<=.01)continue;let L=Math.min(1.6,(.1+.95*x)*n*y*2.2),E=140;c.push(E*Math.cos(g)*Math.cos(m),E*Math.cos(g)*Math.sin(m),E*Math.sin(g)),l.push(b[0]*L,b[1]*L,b[2]*L),h.push(1+x*2.5)}return{pos:c,col:l,size:h}}function Vy(i,t,e){let n=t/2,{c:r,g:s,img:o}=nu(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let d=0;d<n;d++){let m=((d+.5)/n-.5)*Math.PI,g=n-1-d;if(m<.02)continue;let _=Math.cos(m),f=Math.sin(m),p=1/(f+.16),y=c<50?Te(.02,.1,m)*(1-Te(c*.6,c,m)):Te(.02,.16,m);if(!(y<=0))for(let x=0;x<t;x++){let b=(x+.5)/t*2*Math.PI,L=_*Math.cos(b),E=_*Math.sin(b),v=L*p*i.cloud_scale,A=E*p*i.cloud_scale,k=Qe(v*.6+9,A*.6+2,3)-.5,M=v+k*1.4,T=A+k*1.1,J=Qe(M,T,5),z=Te(i.cov0,i.cov1,J);if(z<=.002)continue;let X=Qe(M+h,T+u,5),ut=Bt(.55-(X-J)*3.4)*(1-.4*z),ot=Math.exp(-Math.acos(Math.max(-1,Math.min(1,L*e[0]+E*e[1]+f*e[2])))/1.1),pt=Kt(i.cloud_lit_far,i.cloud_lit_near,ot),U=ge(i.cloud_shadow,.6+.4*ot),tt=Kt(U,pt,ut),V=z*(1-z)*4*ot*.6,K=(g*t+x)*4;o.data[K]=ks(tt[0]+V*i.cloud_rim[0],a),o.data[K+1]=ks(tt[1]+V*i.cloud_rim[1],a),o.data[K+2]=ks(tt[2]+V*i.cloud_rim[2],a),o.data[K+3]=Math.round(255*z*y*i.cloud_opacity)}}return s.putImageData(o,0,0),iu(r)}function Gy(i,t,e={}){let n=e.span??1.4,{c:r,g:s,img:o}=nu(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(d,m),_=Bt((1-g)/(n*2/t)+.5),f=Math.sqrt(Bt(1-g*g)),p=0;for(let[E,v]of e.rings??[])p=Math.max(p,v*(1-Te(E-.1,E,g)));let y;if(i==="sun")y=Kt(e.sunInner??[1,.62,.25],a,Math.pow(f,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let E=Bt(d*l[0]+m*l[1]+f*l[2]),v=Te(.5,.6,Qe(d*1.9+4,m*1.9-2,5))*.42,A=Te(.62,.8,Be(d*14,m*14))*.12,k=(.04+E**.8)*(.6+.4*f)*(.9-v-A)*(e.moonGain??1.55);y=ge(a,k),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-Te(n*.86,n,g);let x=_+(1-_)*p,b=x>1e-4?[0,1,2].map(E=>(_*y[E]+(1-_)*p*c[E])/x):[0,0,0],L=(h*t+u)*4;o.data[L]=Math.round(255*Math.pow(Bt(b[0]),1/2.2)),o.data[L+1]=Math.round(255*Math.pow(Bt(b[1]),1/2.2)),o.data[L+2]=Math.round(255*Math.pow(Bt(b[2]),1/2.2)),o.data[L+3]=Math.round(255*Bt(x))}return s.putImageData(o,0,0),iu(r,!0)}var Qt=class{constructor(t=!1,e=0){Ye(this,"alpha",t);Ye(this,"pos",[]);Ye(this,"col",[]);Ye(this,"idx",[]);Ye(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((r,s)=>{let o=n?.[s];r.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new be;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("color",new se(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new se(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function _e(i={}){let t=new Is({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Ie:Ln}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var vi=(i={})=>{let t=new an({vertexColors:!0,side:Ie,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?ln:xi,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},Bn=(i,t=1)=>new an({color:new kt(i[0]*t,i[1]*t,i[2]*t),side:Ie,toneMapped:!1});function xf(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),r.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;s.push(l,h,l+1,h,h+1,l+1)}let o=new be;return o.setAttribute("position",new se(n,3)),o.setAttribute("uv",new se(r,2)),o.setIndex(s),o}var tu=(i,t=!1)=>new an({map:i,side:Ie,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function Mf(i,t){let e=new Qt,n=(r,s,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[d,m,g,_]of[[r,0,s,s],[0,r,-s,s],[-r,0,-s,-s],[0,-r,s,-s]])h.push(e.v([d*c-m*l,d*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let d=0;d<8;d++)e.f(u,h[d],h[(d+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function Ei(i){let t=new Zt,e=[],n=ky(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),r=n.tex,s=new St(xf(150,48,24),tu(r));if(s.renderOrder=-10,s.frustumCulled=!1,t.add(s),e.push(r,s.geometry,s.material),n.stars&&n.stars.pos.length){let x=new be;x.setAttribute("position",new se(n.stars.pos,3)),x.setAttribute("color",new se(n.stars.col,3)),x.setAttribute("size",new se(n.stars.size,1));let b=new Gn({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:ln}),L=new fr(x,b);L.renderOrder=-9.5,L.frustumCulled=!1,t.add(L),e.push(x,b)}let o=null;if(i.clouds!==!1){let x=Vy(i.th,Math.min(1024,i.W),i.bodies[0]);o=new St(xf(138,48,24),tu(x,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(x,o.geometry,o.material)}let a=i.body.span??1.4,c=Gy(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=tu(c,!0);e.push(c,l);for(let x of i.bodies){let L=146*Math.tan(i.body.r)*a,E=new C(...x),v=E.clone().cross(new C(0,0,1));v.lengthSq()<1e-8&&(v=new C(1,0,0)),v.normalize();let A=v.clone().cross(E).normalize(),k=E.clone().multiplyScalar(146),M=new be,T=[k.clone().addScaledVector(v,-L).addScaledVector(A,-L),k.clone().addScaledVector(v,L).addScaledVector(A,-L),k.clone().addScaledVector(v,L).addScaledVector(A,L),k.clone().addScaledVector(v,-L).addScaledVector(A,L)];M.setAttribute("position",new se(T.flatMap(z=>[z.x,z.y,z.z]),3)),M.setAttribute("uv",new se([0,0,1,0,1,1,0,1],2)),M.setIndex([0,1,2,0,2,3]);let J=new St(M,l);J.renderOrder=-8,J.frustumCulled=!1,t.add(J),e.push(M)}let h=vn(i.seed??21),u=[],d=Math.round(i.sparkles*(i.bigShare??.27)),m=new an({color:new kt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Ie}),g=new an({color:new kt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Ie}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},f=Mf(..._.big),p=Mf(..._.small);e.push(m,g,f,p);for(let x=0;x<i.sparkles;x++){let b=x<d,L=h.uniform(0,360),E=h.uniform(..._.el??[35,88]),v=Sn(L,E);i.bodies.concat([Sn(i.th.body_az+180,i.th.body_el)]).some(T=>v[0]*T[0]+v[1]*T[1]+v[2]*T[2]>Math.cos(ue(24)))&&(L+=45);let A=Sn(L,E).map(T=>T*135),k=new St(b?f:p,b?m:g);k.position.set(...A),k.lookAt(0,0,0),k.renderOrder=-7,t.add(k);let M=b?24:12;u.push({m:k,big:b,pulses:Array.from({length:M},(T,J)=>Math.round((J+.5)*3600/M+h.int(-15,15)))})}let y=null;return{group:t,envMap(){if(y)return y;let x=r.image,b=document.createElement("canvas");b.width=x.width,b.height=x.height;let L=b.getContext("2d");return L.translate(b.width*.5,0),L.scale(-1,1),L.drawImage(x,0,0),L.drawImage(x,-x.width,0),y=new Dn(b),y.colorSpace=tn,y.mapping=mo,e.push(y),y},update(x){o&&(o.rotation.z=x%3600/3600*Math.PI*2);let b=x%3600;for(let L of u){let E=1;for(let v of L.pulses){if(b<v-18||b>v+14)continue;let A=[[v-18,1],[v-9,L.big?1.35:1.2],[v,L.big?.2:.35],[v+14,1]];for(let k=0;k<3;k++)if(b>=A[k][0]&&b<=A[k+1][0]){let M=(b-A[k][0])/(A[k+1][0]-A[k][0]);E=vf(A[k][1],A[k+1][1],M*M*(3-2*M))}}L.m.scale.setScalar(E)}},dispose(){for(let x of e)x.dispose()}}}function Tn(i,t,e=0,n=1,r=0){let s=Math.floor(i/t),o=(i-s*t)/t,a=o*o*(3-2*o),c=(s+r)%2?n:e,l=(s+r)%2?e:n;return vf(c,l,a)}var Sf=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function zs(i,t,e,n){let r=new Qt,s=[];for(let o of i){if(o===0){let c=r.v([0,0,e(0,0)],n(0,0));s.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(r.v([h,u,e(h,u)],n(h,u)))}s.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?r.f(s[0][0],s[1][a],s[1][c]):r.f(s[o][a],s[o][c],s[o-1][c],s[o-1][a])}return r.geo()}function Wy(i,t,e,n,r=0){let s=.6+.4*Bt(t)**.7,o=ge(i,s*(.88+.24*e));return Kt(o,n,Bt(Bt(1-t*3)*.55+r*.75))}function wi(i,t,e,n,r,s,o=!0){let a=Be(e*2.5+r,n*2.5+r),c=o?Bt((Be(e*.7+r,n*.7-r)-.5)*2.5):0;return Wy(i,t,a,s,c)}function eu(i,t,e,n,r,s,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],s([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],s([o[0],o[1],e+n],1));for(let g=0;g<r;g++){let _=2*Math.PI*g/r,f=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(f,s(f,0))),l.push(i.v(p,s(p,1)))}let d=[],m=[];for(let g=0;g<r;g++)d.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<r;g++){let _=(g+1)%r;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(d[g],d[_],m[_],m[g])}}function Xy(i,t,e,n,r,s,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,r-=h/2,t+=l/2,e-=l/2;let u=(g,_,f)=>[g*Math.cos(_),g*Math.sin(_),f],d=g=>i.v(g,a(g,(g[2]-s)/o)),m=(g,_,f,p)=>i.f(d(g),d(_),d(f),d(p));for(let g=0;g<c;g++){let _=n+(r-n)*g/c,f=n+(r-n)*(g+1)/c;m(u(t,_,s+o),u(e,_,s+o),u(e,f,s+o),u(t,f,s+o)),m(u(e,_,s+o),u(e,_,s),u(e,f,s),u(e,f,s+o)),m(u(t,f,s+o),u(t,f,s),u(t,_,s),u(t,_,s+o))}m(u(t,n,s+o),u(t,n,s),u(e,n,s),u(e,n,s+o)),m(u(e,r,s+o),u(e,r,s),u(t,r,s),u(t,r,s+o))}function No(i,t,e,n,r=[1,1,1]){let s=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],d=h[1]-l[1],m=Math.hypot(u,d)||1,g=-d/m,_=u/m;s.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],r)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],r))});for(let a=0;a<t.length-1;a++)i.f(s[a],o[a],o[a+1],s[a+1])}var mc=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function qy(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(ue(n)),.4+.4*Math.sin(ue(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(ue(n)),-.4+.4*Math.sin(ue(n))]);return[[...t,...e]]}return i===1?[mc(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],mc(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function bf(i,t,e,n,r,s,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let d of qy(t))No(i,d.map(([m,g])=>[h+r*(m*c-g*l),u+r*(m*l+g*c)]),o,s)}function yr(i){let{th:t,r:e}=i,n=t.stone,r=new Qt,s=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,f)=>s(wi(m,f,_[0],_[1],g,t.moss,i.patchy??!0),_)};eu(r,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),eu(r,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],f)=>{let p=f*.23;for(let y=0;y<_;y++)Xy(r,m,g,p+2*Math.PI*y/_,p+2*Math.PI*(y+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new Qt;eu(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new Qt;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),f=Math.sin(g);No(l,[[.3*_,.3*f],[2.2*_,2.2*f]],.07,c);for(let p of[-1,1]){let y=g+p*ue(35);No(l,[[1.3*_,1.3*f],[1.3*_+.7*Math.cos(y),1.3*f+.7*Math.sin(y)]],.05,c)}}No(l,mc(2.3),.06,c),No(l,mc(6),.05,c);let h=new Qt;for(let m=0;m<8;m++){let g=ue(45*m);m===6?bf(h,0,g,7.4,.95,c+.01,.13):bf(h,m%3,g,8.2,.55,c+.01,.09)}let u=new Zt;u.add(new St(r.geo(),_e())),u.add(new St(a.geo(),Bn(i.glowCol,i.glow*1.1)));let d=new St(l.geo(),Bn(i.lineCol,i.glow*1.3));return d.name="centre-pattern",u.add(d),u.add(new St(h.geo(),Bn(i.runeCol,i.glow*1.6))),u}function Vs(i){let{r:t}=i,e=i.wind??(()=>{let r=new C(.8,.6,0).normalize();return[r.x,r.y,0]})(),n=new Qt(!1,1);for(let r=0;r<i.tufts;r++){let s=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,s))continue;let a=s*Math.cos(o),c=s*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),d=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),f=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],y=[-Math.sin(_),Math.cos(_)],x=i.gh(u,d),b=i.base(s),L=i.tip(s,_),E=Kt(b,L,.55),v=[u,d,x],A=[u+p[0]*f*.3,d+p[1]*f*.3,x+m*.55],k=[u+p[0]*f,d+p[1]*f,x+m],M=(ot,pt)=>{let U=ot[2]-x,tt=.32*U*U;return n.v(ot,pt,[[e[0]*tt,e[1]*tt,0]])},T=M([v[0]-y[0]*g,v[1]-y[1]*g,v[2]],b),J=M([v[0]+y[0]*g,v[1]+y[1]*g,v[2]],b),z=M([A[0]-y[0]*g*.65,A[1]-y[1]*g*.65,A[2]],E),X=M([A[0]+y[0]*g*.65,A[1]+y[1]*g*.65,A[2]],E),ut=M(k,L);n.f(T,J,X,z),n.f(z,X,ut)}}return n.geo()}function Tf(i,t,e,n,r,s,o,a){let c=new C(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new C(0,0,1)).normalize(),u=l.clone().cross(h),d=12,m=o*r,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([f,p])=>{let y=(.45+3*a*f**1.6)*n;return Array.from({length:d},(x,b)=>{let L=2*Math.PI*b/d,E=c.clone().multiplyScalar(f).addScaledVector(h,Math.cos(L)*y).addScaledVector(u,Math.sin(L)*y);return i.v([t[0]+E.x,t[1]+E.y,t[2]+E.z],[s[0],s[1],s[2],p*m])})});for(let f=0;f<g.length-1;f++)for(let p=0;p<d;p++){let y=(p+1)%d;i.f(_[f][p],_[f][y],_[f+1][y],_[f+1][p])}}function Gs(i,t,e,n,r,s,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[r[0],r[1],r[2],n(0,0)*s]),l=[...o,t].map(h=>Array.from({length:40},(u,d)=>{let m=2*Math.PI*d/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[r[0],r[1],r[2],n(g,_)*s])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let d=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][d],l[h][d])}}var Wr=()=>new an({vertexColors:!0,transparent:!0,depthWrite:!1,blending:ln,side:Ie,fog:!1}),pc=null;function Af(){if(pc)return pc;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),pc=new Dn(i),pc}function Si(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let r=new Float32Array(i.n*3),s=new be;s.setAttribute("position",new Le(r,3));let o=new ur({map:Af(),color:new kt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:ln,sizeAttenuation:!0,fog:!1}),a=new fr(s,o);a.frustumCulled=!1;let c=l=>{let h=Sf(l);for(let u=0;u<i.n;u++){let d=i.twinkle?Math.sin(l*.05+n[u])*.15:0;r[u*3]=t[u][0]+e[u][0]*h+d,r[u*3+1]=t[u][1]+e[u][1]*h,r[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}s.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function gc(i){let t=i.list.length,e=(l,h,u)=>{let d=new Float32Array(t*3),m=new be;m.setAttribute("position",new Le(d,3));let g=new ur({map:Af(),color:h,size:l,transparent:!0,depthWrite:!1,blending:ln,opacity:u,fog:!1}),_=new fr(m,g);return _.frustumCulled=!1,{p:_,pos:d,g:m}},n=i.gain??1,r=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),s=e(2.2*r,new kt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*r,new kt(1,1,1).lerp(new kt(i.col[0],i.col[1],i.col[2]),.3),1),a=new Zt;a.add(s.p,o.p);let c=l=>{let h=Sf(l);i.list.forEach((u,d)=>{for(let m of[s.pos,o.pos])m[d*3]=u.p[0],m[d*3+1]=u.p[1],m[d*3+2]=u.p[2]+u.amp*h}),s.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function Rf(i,t){let{r:e,idx:n,th:r}=t,s=n/2,o=Kt(r.back_lit[0],r.back_lit[1],s),a=Kt(r.back_dark[0],r.back_dark[1],s),c=r.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],d=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(r.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(r.back_w??1),_=e.uniform(0,6.28),f=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(b=>_r(b,r.exposure??1)),y=Math.exp(-((Ho(h,t.sunAz)/.5)**2))*(r.back_rim_k??0),x=[];for(let b=0;b<7;b++){let L=b/6,E=-2+(m+2)*L,v=g*(1-.55*L)*(1+.5*Math.exp(-Math.max(E,0)/3)),A=Math.sin(L*4+_)*1.2+f*E,k=[u[0]+d[0]*A,u[1]+d[1]*A,E],M=1-.75*L*L,T=ge(o,M),J=ge(a,M);c>0&&(T=Kt(T,p,c*.6*(1-.5*L)),J=Kt(J,p,c*.6*(1-.5*L))),y>.01&&(T=Kt(T,r.back_rim,.6*y*(1-L)),J=Kt(J,r.back_rim,.6*y*(1-L))),x.push([i.v([k[0]-d[0]*v/2,k[1]-d[1]*v/2,E],T),i.v([k[0]+d[0]*v/2,k[1]+d[1]*v/2,E],J)])}for(let b=0;b<6;b++)i.f(x[b][0],x[b][1],x[b+1][1],x[b+1][0])}}function _c(){let i=new Qt,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,r=a=>Ef(e,a),s=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],r(a)))),o=i.v([.07*1.12*1.12,0,1.12],r(1.12));for(let a=0;a<s.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(s[a][c],s[a][l],s[a+1][l],s[a+1][c])}for(let a=0;a<n;a++)i.f(s[s.length-1][a],s[s.length-1][(a+1)%n],o);return i.geo()}function Ti(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let r of n)r.dispose()})}function Ai(i){let t=(n,r=1,s=.5)=>{let o=(n[0]+n[1]+n[2])/3;return ge(Kt([o,o,o],n,s),r)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let r=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(r)&&(e[n]=Array.isArray(r[0])?r.map(s=>t(s)):t(r))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var ru={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},Ws=78,su=[90,270];function Cf(i,t){let e=i==="night"?ru.NIGHT:i==="day"?{...Ai(ru.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:ru.SUNSET,n=e.emit,r=n*.75,s=vn(13),o=vn(41),a=new Zt,c=[Sn(e.body_az,e.body_el)],l=su.map(D=>[Ws*Math.cos(ue(D)),Ws*Math.sin(ue(D))]),h=ue(e.body_az),u=[Math.cos(h),Math.sin(h)],d=(()=>{let D=new C(.8,.6,0).normalize();return[D.x,D.y,0]})(),m=(D,R,P)=>{let B=(D%360+360)%360;return B>255&&B<285&&R>P},g=e.stone,_=(D,R)=>{let P=Math.hypot(D,R),B=Bt((P-12)/10)*.35*(Math.sin(D*.09)+Math.cos(R*.11)+.5*Math.sin((D+R)*.19));B+=Bt((P-60)/60)*3*Math.sin(D*.05+1)*Math.cos(R*.04);for(let[q,O]of l)B*=Te(22,40,Math.hypot(D-q,R-O));return B},f=(D,R)=>{let P=0;for(let B of su){let q=ue(B),O=Math.cos(q),H=Math.sin(q),Y=D*O+R*H,Q=Math.abs(-D*H+R*O);Y>9&&(P=Math.max(P,Math.exp(-((Q/4)**2))*Te(9,16,Y)*(1-Te(Ws-10,Ws-2,Y))))}return P},p=(D,R)=>{let P=Bt((Math.hypot(D,R)-10)/70)**.8,B=Qe(D*.06+3,R*.06-7,3);return Kt(ge(Kt(e.g_near,e.g_far,P),.75+.5*B),e.g_road,f(D,R)*.8)};a.add(new St(zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),_e({flat:!1}))),a.add(yr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let y=new Qt,x=(D,R,P,B,q,O)=>{let H=o.uniform(0,50),Y=(W,j)=>wi(q,j,W[0],W[1],H,e.moss),Q=(W,j)=>Array.from({length:B},(nt,ct)=>{let I=2*Math.PI*ct/B,w=[O[0]+D*Math.cos(I),O[1]+D*Math.sin(I),W];return y.v(w,Y(w,j))}),G=Q(R,0),S=Q(R+P,1),rt=Q(R,0),$=Q(R+P,1);for(let W=0;W<B;W++){let j=(W+1)%B;y.f(rt[W],rt[j],$[j],$[W])}y.f(...S),y.f(...[...G].reverse())},b=[],L=_c(),E=vi({gain:1.05}),v=[];for(let D of[45,135,225,315]){let R=ue(D),P=9.35*Math.cos(R),B=9.35*Math.sin(R);x(.4,.3,1.1,12,g[3],[P,B]),x(.55,1.4,.3,12,g[0],[P,B]);let q=new St(L,E);q.position.set(P,B,1.75),a.add(q),b.push({m:q,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),v.push({pos:[P,B,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let A=new Qt,k=new Qt(!1,2),M=(D,R,P,B,q)=>{let O=Math.cos(B),H=Math.sin(B),Y=(Q,G,S)=>{let rt=Q*P[0],$=G*P[1],W=[R[0]+rt*O-$*H,R[1]+rt*H+$*O,R[2]+S*P[2]];return D.v(W,q(W))};for(let Q of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])D.f(...Q.map(([G,S,rt])=>Y(G,S,rt)))},T=t?6:10;for(let D=0;D<T;D++){let R=2*Math.PI*(D+o.uniform(-.2,.2))/T,P=o.uniform(14,20),B=P*Math.cos(R),q=P*Math.sin(R),O=_(B,q),H=o.uniform(6,9),Y=()=>e.cs_stone;M(A,[B,q,O+(H-.2)/2],[.2,.2,H+.2],Math.PI/4,Y);let Q=o.uniform(0,3.14),G=[-Math.sin(Q),Math.cos(Q)],S=[Math.cos(Q),Math.sin(Q)];M(A,[B,q,O+H-.2],[.08,1.3,.08],Q,Y);let rt=[B,q,O+H-.3],$=(nt,ct)=>{let I=.35*Math.sin(1.4*nt+ct)*nt/5;return[S[0]*I+d[0]*(.15*nt)/5,S[1]*I+d[1]*(.15*nt)/5,0]},W=Array.from({length:6},(nt,ct)=>Array.from({length:3},(I,w)=>k.v([rt[0]+G[0]*(w-1)*.6,rt[1]+G[1]*(w-1)*.6,rt[2]-ct*.6],ge(e.banner,1-.35*ct/5),[$(ct,0),$(ct,Math.PI)]))),j=k.v([rt[0],rt[1],rt[2]-3.6],ge(e.banner,.6),[$(6,0),$(6,Math.PI)]);for(let nt=0;nt<5;nt++)for(let ct=0;ct<2;ct++)k.f(W[nt][ct],W[nt][ct+1],W[nt+1][ct+1],W[nt+1][ct]);k.f(W[5][0],W[5][1],j),k.f(W[5][1],W[5][2],j)}let J=_e({double:!0,morph:!0}),z=new St(k.geo(),J);z.morphTargetInfluences=[0,0],a.add(new St(A.geo(),_e()),z,new St(y.geo(),_e()));let X=[];su.forEach((D,R)=>{let P=new Qt,B=new Qt,q=new Qt,O=new Qt,H=new Qt,Y=new Qt(!1,2),Q=ue(D),G=[Ws*Math.cos(Q),Ws*Math.sin(Q),0],S=Q-Math.PI/2,rt=Math.cos(S),$=Math.sin(S),W=F=>[G[0]+F[0]*rt-F[1]*$,G[1]+F[0]*$+F[1]*rt,F[2]],j=F=>{let et=Be(F[0]*.8+R*10,F[2]*.8),lt=.6+.4*Bt(F[2]/6);return ge(e.cs_stone,lt*(.75+.5*et)*(.8+.4*Bt(F[2]/30)))},nt=(F,et,lt,it)=>{for(let vt of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])F.f(...vt.map(([xt,dt,Lt])=>{let mt=[et[0]+xt*lt[0],et[1]+dt*lt[1],et[2]+Lt*lt[2]];return F.v(W(mt),it(mt))}))},ct=(F,et,lt,it,vt)=>{let xt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([mt,At])=>[F+mt*it,et+At*it,lt]),dt=[F,et,lt+vt],Lt=mt=>ge(e.cs_roof,.8+.4*Bt((mt[2]-22)/22));for(let mt=0;mt<4;mt++){let At=xt[mt],zt=xt[(mt+1)%4];B.f(B.v(W(At),Lt(At)),B.v(W(zt),Lt(zt)),B.v(W(dt),Lt(dt)))}};nt(P,[0,0,6],[40,4,12],j);for(let F=-18;F<=18;F+=2.6)if(Math.abs(F)>4.6)for(let et of[-1.6,1.6])nt(P,[F,et,12.7],[1.4,.8,1.4],j);for(let F of[-20,20]){nt(P,[F,0,11],[8,8,22],j);for(let et of[12,20])nt(P,[F,0,et],[8.6,8.6,.6],j);ct(F,0,22,4.7,9),nt(P,[F,0,31],[.12,.12,9],j)}nt(P,[0,0,17],[7,7,34],j);for(let F of[13,24])nt(P,[0,0,F],[7.6,7.6,.6],j);ct(0,0,34,4.3,10),nt(P,[0,0,46.5],[.12,.12,5],j);for(let F of[-2.9,2.9])nt(P,[F,-3.75,3.8],[.9,.6,7.6],j);nt(P,[0,-3.75,7.7],[6.8,.6,.9],j),nt(O,[0,-3.6,3.6],[4.6,.3,7.2],F=>F[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let F=0;F<7;F++)nt(O,[-2.1+.7*F,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let F of[2,4.5,6.8])nt(O,[0,-3.85,F],[4.6,.2,.12],()=>[.02,.016,.014]);{let F=Array.from({length:9},(lt,it)=>[2.3*Math.cos(Math.PI*it/8),7.2+2.3*Math.sin(Math.PI*it/8)]);O.f(...F.map(([lt,it])=>O.v(W([lt,-3.75,it]),[.006,.005,.008])));let et=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];O.f(...[...et].reverse().map(lt=>O.v(W(lt),[.04,.025,.02])))}for(let F of[9.5,15,20.5,26,31])nt(q,[0,-3.62,F],[.8,.3,1.7],()=>[1,1,1]);for(let F of[-20,20])for(let et of[5,10,15,20])nt(q,[F,-4.12,et],[.8,.3,1.7],()=>[1,1,1]);for(let F of[-4.3,4.3]){nt(P,[F,-3.8,4.2],[.15,.15,1],j);let et=new pn(.35,1),lt=et.attributes.position;for(let vt=0;vt<lt.count;vt+=3)H.f(...[0,1,2].map(xt=>H.v(W([F+lt.getX(vt+xt),-3.8+lt.getY(vt+xt),5.1+lt.getZ(vt+xt)*1.5]),[1,1,1])));et.dispose();let it=W([F,-4.6,5.3]);R===0&&v.push({pos:it,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[F,et,lt,it,vt]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let xt=[0,.2,.4,.6,.82],dt=(Ct,Vt)=>{let ee=.5*vt*Math.sin(7*Ct+Vt)*Ct,at=.1*vt*Math.sin(5*Ct+Vt)*Ct;return[-ee*$,ee*rt,at]},Lt=(Ct,Vt,ee)=>Y.v(W([Ct,et,Vt]),e.flag_col,[dt(ee,0),dt(ee,Math.PI)]),mt=xt.map(Ct=>Lt(F+it*Ct,lt+vt,Ct)),At=xt.map(Ct=>Lt(F+it*Ct,lt,Ct)),zt=Lt(F+it,lt+vt,1),Ft=Lt(F+it,lt,1),Rt=Lt(F+.9*it,lt+vt/2,.9);for(let Ct=0;Ct<4;Ct++)Y.f(At[Ct],At[Ct+1],mt[Ct+1],mt[Ct]);Y.f(mt[4],zt,Rt),Y.f(At[4],Rt,Ft),Y.f(mt[4],Rt,At[4])}a.add(new St(P.geo(),_e()),new St(B.geo(),_e()),new St(O.geo(),_e({double:!0}))),a.add(new St(q.geo(),Bn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new St(H.geo(),Bn(e.torch_col,1.5)));let w=new St(Y.geo(),_e({double:!0,morph:!0}));w.morphTargetInfluences=[0,0],a.add(w),X.push(w)});class ut{constructor(R){Ye(this,"mode",R);Ye(this,"mb");Ye(this,"war",[]);Ye(this,"pending",[]);Ye(this,"faces",[]);this.mb=new Qt(!1,R==="clash"?2:R==="surge"?1:0)}part(R,P,B,q,O,H,Y=-1,Q=!1){let G=B.clone().sub(P);if(G.length()<1e-6)return;let S=G.normalize(),rt=Math.abs(S.z)<.9?new C(0,0,1):new C(1,0,0),$=S.clone().cross(rt).normalize(),W=S.clone().cross($),j=[[P,q],[B,O]].map(([nt,ct])=>Array.from({length:H},(I,w)=>{let F=2*Math.PI*w/H,et=nt.clone().addScaledVector($,Math.cos(F)*ct).addScaledVector(W,Math.sin(F)*ct),lt=new Ut(et.x-R.x,et.y-R.y),it=lt.length()>1e-6?.5+.5*lt.normalize().dot(new Ut(u[0],u[1])):.5;return this.add([et.x,et.y,et.z],Kt(e.sil,e.sil_rim,.45*it*it),Y,Q)}));for(let nt=0;nt<H;nt++){let ct=(nt+1)%H;this.faces.push([j[0][nt],j[0][ct],j[1][ct],j[1][nt]])}this.faces.push([...j[0]].reverse()),this.faces.push(j[1])}add(R,P,B,q){return this.pending.push({p:R,c:P,wi:B,arm:q}),this.pending.length-1}warrior(R,P,B,q){let O=this.war.length,H=new ae().makeRotationZ(P-Math.PI/2),Y=(rt,$,W)=>R.clone().add(new C(rt,$,W).applyMatrix4(H)),Q=R.clone().add(new C(0,0,1)),G=(rt,$,W,j,nt,ct=!1)=>this.part(Q,Y(...rt),Y(...$),W,j,nt,O,ct);for(let[rt,$,W]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])G([rt*.11,0,.95],W,.1,.075,4),G(W,$,.075,.06,4);G([0,0,.95],[0,.1,1.48],.2,.23,6),G([0,.16,1.58],[0,.16,1.74],.11,.11,6),G([0,.16,1.74],[0,.16,1.92],.12,.02,6),G([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),G([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),B!=="spear"&&G([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),G([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),G([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),B==="sword"?G([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):B==="axe"?(G([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),G([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(G([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),G([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let S=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(rt=>{let $=Y(...rt);return this.add([$.x,$.y,$.z],e.sil,O,!1)});this.faces.push(S),this.war.push({team:q,f:new C(0,1,0).applyMatrix4(H),axis:new C(1,0,0).applyMatrix4(H),pivot:Y(.27,.1,1.42)})}finish(){let R=this.pending.map(P=>{let B=[],q=new C(...P.p);if(this.mode==="clash")for(let O of[0,1]){if(P.wi<0){B.push([0,0,0]);continue}let H=this.war[P.wi],Y=H.team===O,Q=H.f.clone().multiplyScalar(Y?.32:-.22),G=q.clone().add(Q);P.arm&&(G=H.pivot.clone().add(Q).add(q.clone().sub(H.pivot).applyAxisAngle(H.axis,ue(Y?-60:25)))),B.push([G.x-q.x,G.y-q.y,G.z-q.z])}if(this.mode==="surge"){let O=this.war[P.wi];B.push([O.f.x*.5,O.f.y*.5,P.arm?.3:0])}return this.mb.v(P.p,P.c,B)});for(let P of this.faces)this.mb.f(...P.map(B=>R[B]));return this.mb.geo()}}let ot=_e({morph:!0,double:!0}),pt=[],U=t?5:8;for(let D=0;D<U;D++){let R=2*Math.PI*(D+o.uniform(-.3,.3))/U,P=o.uniform(17,36);m(R*180/Math.PI,P,15)&&(R+=.6);let B=P*Math.cos(R),q=P*Math.sin(R);for(let O=0;O<3;O++){let H=new ut("clash"),Y=o.uniform(0,6.283),Q=new C(B+o.uniform(-4.5,4.5),q+o.uniform(-4.5,4.5),0),G=new C(Math.cos(Y),Math.sin(Y),0),S=o.uniform(.9,1.1);for(let[$,W]of[[0,-1],[1,1]]){let j=Q.clone().addScaledVector(G,S*W);j.z=_(j.x,j.y),H.warrior(j,$===0?Y:Y+Math.PI,o.choice(["sword","sword","axe","spear"]),$)}let rt=new St(H.finish(),ot);rt.morphTargetInfluences=[0,0],a.add(rt),pt.push({m:rt,w:2*Math.PI/s.uniform(40,95),w2:2*Math.PI/s.uniform(110,260),w3:2*Math.PI/s.uniform(150,400),p:s.uniform(0,6.28),p2:s.uniform(0,6.28),p3:s.uniform(0,6.28),bias:s.uniform(-.35,.35)})}}{let D=new ut(null);for(let R=0;R<16;R++){let P=o.uniform(0,6.283),B=o.uniform(13,45);if(m(P*180/Math.PI,B,14))continue;let q=new C(B*Math.cos(P),B*Math.sin(P),0);q.z=_(q.x,q.y);let O=new ae().makeRotationZ(o.uniform(0,6.283)),H=(Q,G,S)=>q.clone().add(new C(Q,G,S).applyMatrix4(O)),Y=q.clone().add(new C(0,0,.2));D.part(Y,H(0,-.4,.18),H(0,.45,.2),.2,.22,6),D.part(Y,H(0,.55,.18),H(0,.7,.2),.11,.11,6),D.part(Y,H(-.1,-.4,.12),H(-.2,-1.2,.1),.09,.07,4),D.part(Y,H(.1,-.4,.12),H(.25,-1.1,.12),.09,.07,4),D.part(Y,H(-.25,.35,.18),H(-.6,.1,.12),.06,.05,4),D.part(Y,H(.25,.35,.18),H(.55,.7,.1),.06,.05,4),D.part(Y,H(.7,.2,0),H(.9,.2,1.8),.03,.025,4),D.part(Y,H(-.9,0,.05),H(-.9,0,.12),.4,.4,8)}a.add(new St(D.finish(),_e({double:!0})))}let tt=[];{let D=[];for(let B=0;B<6;B++){let q=o.uniform(0,6.283),O=o.uniform(45,90);m(q*180/Math.PI,O,40)&&(q+=.8),D.push(new C(O*Math.cos(q),O*Math.sin(q),0))}let R=t?70:120,P=D.map(()=>new ut("surge"));for(let B=0;B<R;B++){let q=P[B%D.length],O=D[B%D.length],H=O.clone().add(new C(o.uniform(-9,9),o.uniform(-9,9),0));H.z=_(H.x,H.y);let Y=Math.atan2(O.y-H.y,O.x-H.x)+o.uniform(-.5,.5),Q=q.war.length,G=new ae().makeRotationZ(Y-Math.PI/2),S=($,W,j)=>H.clone().add(new C($,W,j).applyMatrix4(G)),rt=H.clone().add(new C(0,0,.9));q.part(rt,S(0,0,0),S(0,0,1.45),.28,.22,4,Q),q.part(rt,S(0,.05,1.45),S(0,.05,1.65),.12,.12,4,Q),q.part(rt,S(.3,-.3,.9),S(.3,2,2.4),.03,.025,4,Q,!0),q.war.push({team:0,f:new C(0,1,0).applyMatrix4(G),axis:new C(1,0,0).applyMatrix4(G),pivot:S(0,0,1.4)})}for(let B of P){let q=new St(B.finish(),ot);q.morphTargetInfluences=[0,0],a.add(q),tt.push({m:q,w:2*Math.PI/s.uniform(90,170),p:s.uniform(0,6.28),w2:2*Math.PI/s.uniform(300,600),p2:s.uniform(0,6.28)})}}let V=new St(Vs({r:s,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(D,R)=>m(D,R,16),base:D=>ge(e.grass_base,1-.6*Bt((D-12)/55)),tip:D=>ge(e.grass_tip,1-.6*Bt((D-12)/55))}),_e({emit:.1,double:!0,morph:!0}));V.morphTargetInfluences=[0],a.add(V);let K=Si({r:o,n:t?24:40,at:()=>{let D=o.uniform(0,6.283),R=30*Math.sqrt(o.random());return[R*Math.cos(D),R*Math.sin(D),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(K.obj);let Z=Ei({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(Z.group),{group:a,floor:.6,update(D){Z.update(D);for(let H of pt){let Y=Math.sin(D*H.w+H.p+1.4*Math.sin(D*H.w2+H.p2))+H.bias,Q=.55+.45*Math.sin(D*H.w3+H.p3),G=Bt(Y)*Q,S=Bt(-Y)*Q;H.m.morphTargetInfluences[0]=G*G*(3-2*G),H.m.morphTargetInfluences[1]=S*S*(3-2*S)}for(let H of tt)H.m.morphTargetInfluences[0]=Bt(.5+.6*Math.sin(D*H.w+H.p)*(.6+.4*Math.sin(D*H.w2+H.p2)));let R=Tn(D,90);z.morphTargetInfluences[0]=R,z.morphTargetInfluences[1]=1-R;for(let H of X)H.morphTargetInfluences[0]=R,H.morphTargetInfluences[1]=1-R;V.morphTargetInfluences[0]=Tn(D,45);let P=D%3600,B=Math.floor(P/8),q=(P-B*8)/8,O=q*q*(3-2*q);for(let H of b){let Y=H.keys[B%450],Q=H.keys[(B+1)%450];H.m.scale.set(Y[0]+(Q[0]-Y[0])*O,Y[1]+(Q[1]-Y[1])*O,Y[2]+(Q[2]-Y[2])*O)}K.update(D)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...v],dispose(){Z.dispose(),Ti(a)}}}var ou={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function Pf(i,t){let e=i==="night"?ou.NIGHT:i==="day"?{...Ai(ou.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:ou.SUNSET,n=e.emit,r=n*.75,s=vn(11),o=vn(99),a=new Zt,c=ue(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let U=new C(.8,.6,0).normalize();return[U.x,U.y,0]})(),u=(U,tt)=>Bt((Math.hypot(U,tt)-12)/10)*.25*(Math.sin(U*.22)+Math.cos(tt*.27)+.5*Math.sin((U+tt)*.5)),d=(U,tt)=>{let V=Bt((Math.hypot(U,tt)-6)/34)**.7,K=.9+.2*(Math.sin(U*.5)*Math.cos(tt*.5)*.5+.5),Z=Qe(U*.09+3,tt*.09-7,3),D=Be(U*1.7,tt*1.7),R=Kt(e.g_near,e.g_far,V);return R=Kt(R,e.g_alt,Bt((Z-.45)*2.2)*.6*(1-.5*V)),ge(R,K*(1+.25*(D-.5)*(1-V)))},m=Ki(e,[Sn(e.body_az,e.body_el)]);a.add(new St(zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,d),_e({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,U])=>[U[0],U[1]]),f=U=>{let tt=_.reduce((K,[Z,D])=>K+Math.exp(-((Math.hypot(U[0]-Z,U[1]-D)/5.5)**2)),0),V=(.55+.45*Math.min(1,tt))*(1-.4*Bt((Math.hypot(U[0],U[1])-5)/5))*.2*.5*e.beam_gain;return ge(e.beam_col,V)};a.add(yr({th:e,r:s,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:r,patchy:!1,bake:f}));{let U=new Qt;for(let tt=0;tt<10;tt++){let V=s.uniform(0,6.283),K=s.uniform(11.5,17),Z=s.uniform(.8,2),D=s.choice(e.stone),R=o.uniform(0,50),P=new pn(1,1),B=P.attributes.position;for(let S=0;S<B.count;S++){let rt=s.uniform(.8,1.2);B.setXYZ(S,B.getX(S)*rt,B.getY(S)*rt,B.getZ(S)*rt)}let q=K*Math.cos(V),O=K*Math.sin(V),H=s.uniform(0,6.28),Y=new ae().compose(new C(q,O,u(q,O)+.3*Z),new hn().setFromAxisAngle(new C(0,0,1),H),new C(Z,Z*.9,Z*.7)),Q=P.index?P.toNonIndexed():P,G=Q.attributes.position;for(let S=0;S<G.count;S+=3){let rt=[];for(let $=0;$<3;$++){let W=G.getX(S+$),j=G.getY(S+$),nt=G.getZ(S+$),ct=new C(W,j,nt).applyMatrix4(Y),I=.6+.4*Bt((nt+1)/2)**.7,w=Be(W*2+R,j*2+nt);rt.push(U.v([ct.x,ct.y,ct.z],Kt(ge(D,I*(.88+.24*w)),e.moss,Bt(1-(nt+1)/2*3)*.55)))}U.f(...rt)}Q.dispose()}a.add(new St(U.geo(),_e()))}let p=[],y=(U,tt,V)=>{for(let K=0;K<300;K++){let Z=s.uniform(0,360);if(V&&Z>245&&Z<295)continue;let D=s.uniform(U,tt),R=D*Math.cos(ue(Z)),P=D*Math.sin(ue(Z));if(p.every(([B,q])=>Math.hypot(R-B,P-q)>5.5))return p.push([R,P]),[R,P]}return null},x=_e({morph:!0}),b=vi({gain:2.2}),L=[],E=t?12:18,v=t?6:10;for(let U=0;U<E+v;U++){let tt=U<E,V=tt?y(15,26,!0):y(32,46,!1);if(!V)continue;let K=tt?s.uniform(20,32):s.uniform(30,40),Z=tt?s.uniform(1.1,2):s.uniform(2.2,3.2),D=tt&&s.random()<.25,R=A(V[0],V[1],K,Z,D),P=new St(R.bark.geo(),x);P.morphTargetInfluences=[0,0],a.add(P);let B=null;D&&(B=new St(R.eyes.geo(),b),B.morphTargetInfluences=[0,0],a.add(B));let q=[];if(D){let O=Array.from({length:Math.floor(174)},(H,Y)=>60+Y*20);for(let H=0;H<5;H++)q.push(O.splice(s.int(0,O.length-1),1)[0]);q.sort((H,Y)=>H-Y)}L.push({mesh:P,eyes:B,P:s.choice([100,120,150,180,200]),flip:s.int(0,1),blinks:q})}function A(U,tt,V,K,Z){let D=new Qt(!1,2),R=new Qt(!1,2),P=new C(-U,-tt,0).normalize(),B=s.uniform(1.2,2.4),q=new C(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.03,.1)),O=s.uniform(0,6.28),H=s.uniform(.4,1),Y=s.choice([3,4,5]),Q=s.uniform(0,6.28),G=F=>new C(U+q.x*F+H*Math.sin(.28*F+O),tt+q.y*F+H*Math.cos(.23*F+O),F),S=(F,et)=>{let lt=Math.max(F,0),it=K*(1-.62*Bt(lt/V))*(1+1.1*Math.exp(-lt/1.6)),vt=et+.06*lt;return it*(1+.28*Math.cos(Y*vt+Q)*Math.exp(-lt/3.5)+.07*Math.cos(2*vt+O))},rt=F=>{let et=B*Bt(Math.max(F,0)/V)**2;return[h[0]*et,h[1]*et,0]},$=(F,et,lt)=>{let it=new C(F.x,F.y,0);it.lengthSq()>1e-12&&it.normalize();let vt=Math.max(0,it.x*P.x+it.y*P.y),xt=.6+.4*Math.sin(lt),dt=Kt(e.bark_dark,e.bark_lit,Bt(.85*vt*xt*(1-.3*Bt(et/V)))),Lt=Math.max(0,it.x*l[0]+it.y*l[1]);dt=Kt(dt,e.bark_sun,Bt(e.bark_sun_k*Lt*(.5+.5*xt)*(1-.5*Bt(et/V)))),dt=ge(dt,.72+.28*Bt(et/1.6));let mt=Bt(1-et/2.2)*.55*Be(F.x*3+U,F.y*3+et*.8);return Kt(dt,e.moss,mt)},W=(F,et)=>D.v([F.x,F.y,F.z],et,[rt(F.z),[0,0,0]]),j=t?10:14,nt=t?8:12,ct=[];for(let F=0;F<j;F++){let et=-.5+(V+.5)*(F/(j-1))**1.15,lt=G(et),it=[];for(let vt=0;vt<nt;vt++){let xt=2*Math.PI*vt/nt,dt=new C(Math.cos(xt),Math.sin(xt),0);it.push(W(lt.clone().addScaledVector(dt,S(et,xt)),$(dt,et,xt*7+et*.4)))}ct.push(it)}for(let F=0;F<j-1;F++)for(let et=0;et<nt;et++){let lt=(et+1)%nt;D.f(ct[F][et],ct[F][lt],ct[F+1][lt],ct[F+1][et])}let I=W(G(V).add(new C(0,0,.3)),e.bark_dark);for(let F=0;F<nt;F++)D.f(I,ct[j-1][F],ct[j-1][(F+1)%nt]);let w=s.int(2,4);for(let F=0;F<w;F++){let et=V*s.uniform(.35,.85),lt=s.uniform(0,6.28),it=new C(Math.cos(lt),Math.sin(lt),0),vt=G(et).addScaledVector(it,S(et,lt)*.7),xt=it.clone().add(new C(0,0,s.uniform(.4,1))).normalize(),dt=s.uniform(3.5,7.5),Lt=new C(-it.y,it.x,0),mt=[0,1,2,3,4].map(Ft=>vt.clone().addScaledVector(xt,dt*(Ft/4)).add(new C(0,0,.35*dt*(Ft/4)**2)).addScaledVector(Lt,Math.sin(Ft/4*3+F)*.5)),At=S(et,lt)*.32,zt=mt.map((Ft,Rt)=>{let Ct=mt[Math.min(Rt+1,4)].clone().sub(mt[Math.max(Rt-1,0)]).normalize(),Vt=Ct.clone().cross(new C(0,0,1));Vt.length()<.001&&(Vt=new C(1,0,0)),Vt.normalize();let ee=Ct.clone().cross(Vt);return Array.from({length:6},(at,Dt)=>{let Mt=2*Math.PI*Dt/6,Tt=Vt.clone().multiplyScalar(Math.cos(Mt)).addScaledVector(ee,Math.sin(Mt));return W(Ft.clone().addScaledVector(Tt,At*(1-.85*Rt/4)),$(Tt,Ft.z,Mt*5+Rt))})});for(let Ft=0;Ft<4;Ft++)for(let Rt=0;Rt<6;Rt++){let Ct=(Rt+1)%6;D.f(zt[Ft][Rt],zt[Ft][Ct],zt[Ft+1][Ct],zt[Ft+1][Rt])}}if(Z){let F=s.uniform(2.2,9),et=Math.atan2(P.y,P.x)+s.uniform(-.6,.6),lt=new C(Math.cos(et),Math.sin(et),0),it=new C(-lt.y,lt.x,0),vt=G(F).addScaledVector(lt,S(F,et)),xt=s.uniform(.18,.32),dt=xt*1.25,Lt=(zt,Ft,Rt)=>vt.clone().addScaledVector(lt,Rt).addScaledVector(it,zt).add(new C(0,0,Ft)),mt=Array.from({length:10},(zt,Ft)=>W(Lt(Math.cos(2*Math.PI*Ft/10)*(dt+xt*1.7),Math.sin(2*Math.PI*Ft/10)*xt*1.7,.07),[.004,.003,.02]));D.f(...mt);let At=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let zt of[1,-1]){let Ft=At.map(([Ct,Vt])=>[zt*(dt+Ct*xt),Vt*xt]);zt===-1&&(Ft=Ft.reverse());let Rt=Ft.map(([Ct,Vt])=>{let ee=Lt(Ct,Vt,.11);return R.v([ee.x,ee.y,ee.z],[1,.04,.04],[rt(ee.z),[0,0,F-ee.z]])});R.f(...Rt)}}return{bark:D,eyes:R}}let k=e.grass_tip,M=_e({emit:e.grass_emit,double:!0,morph:!0}),T=t?260:500,J=[0,1].map(()=>{let U=new Map,tt=Vs({r:s,tufts:T,rmin:10.6,rspan:34,gh:u,base:K=>ge(e.grass_base,1-.6*Bt((K-11)/34)),tip:(K,Z)=>{let D=Math.round(K*1e3),R=U.get(D);R||(R=Kt(k[0],k[1],s.random()),U.set(D,R));let P=.3*Math.abs(Math.cos(Z-c))*(i==="night"?.5:1);return ge(Kt(R,e.grass_rim,P),1-.6*Bt((K-11)/34))}}),V=new St(tt,M);return V.morphTargetInfluences=[0],a.add(V),V});{let U=new Qt;for(let tt=0;tt<(t?40:70);tt++){let V=14+22*o.random(),K=o.uniform(0,2*Math.PI),Z=V*Math.cos(K),D=V*Math.sin(K),R=u(Z,D),P=[Z+o.uniform(-.06,.06),D+o.uniform(-.06,.06),R+o.uniform(.35,.7)];U.f(U.v([Z-.012,D,R],[.02,.07,.05]),U.v([Z+.012,D,R],[.02,.07,.05]),U.v([P[0]+.012,P[1],P[2]],[.08,.25,.12]),U.v([P[0]-.012,P[1],P[2]],[.08,.25,.12]));let B=o.choice(e.flower),q=U.v([P[0],P[1],P[2]+.02],[1,.9,.5]),O=Array.from({length:6},(H,Y)=>{let Q=2*Math.PI*Y/6;return U.v([P[0]+.05*Math.cos(Q),P[1]+.05*Math.sin(Q),P[2]+.025],B)});for(let H=0;H<6;H++)U.f(q,O[H],O[(H+1)%6])}a.add(new St(U.geo(),_e({emit:e.flower_emit,double:!0})))}{let U=new Qt;for(let tt=0;tt<14;tt++){let V=ue(s.choice([s.uniform(195,245),s.uniform(295,345),s.uniform(0,360)])),K=s.uniform(16,34),Z=s.uniform(1,1.8),D=K*Math.cos(V),R=K*Math.sin(V),P=u(D,R);for(let B=0;B<4;B++){let q=[s.uniform(-1.4,1.4),s.uniform(-1,1),s.uniform(.2,1)],O=s.uniform(.9,1.6),H=new pn(O,1),Y=H.attributes.position;for(let Q=0;Q<Y.count;Q+=3){let G=[];for(let S=0;S<3;S++){let rt=Y.getZ(Q+S)+q[2];G.push(U.v([D+(Y.getX(Q+S)+q[0])*Z,R+(Y.getY(Q+S)+q[1])*Z,P+rt*Z*.75],Kt(e.bush_lo,e.bush_hi,Bt((rt+.3)/2.6)*.8)))}U.f(...G)}H.dispose()}}a.add(new St(U.geo(),_e()))}{let U=new Qt;[[52,70,50,70],[59,80,55,75],[66,90,60,80]].forEach(([V,K,Z,D],R)=>Rf(U,{r:s,idx:R,radius:V,count:t?Math.round(K*.6):K,hmin:Z,hmax:D,th:e,sky:m,sunAz:c}));let tt=vi({fog:!1,gain:i==="night"?.45:.6});tt.toneMapped=!1,a.add(new St(U.geo(),tt))}let z=new Qt(!0);g.forEach(([U,tt])=>{for(let[V,K]of[[1,.45],[.7,.6],[.4,.8]])Tf(z,U,tt,V,K,e.beam_col,.35*e.beam_gain,2.6)});let X=new Qt(!0);Gs(X,9.4,.7,(U,tt)=>{let V=_.reduce((K,[Z,D])=>K+Math.exp(-((Math.hypot(U-Z,tt-D)/5.5)**2)),0);return(.55+.45*Math.min(1,V))*Te(0,3,9.4-Math.hypot(U,tt))},e.beam_col,.3*.5*e.beam_gain);let ut=new St(z.geo(),Wr());a.add(ut,new St(X.geo(),Wr()));let ot=Si({r:s,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let U=s.uniform(0,6.283),tt=s.uniform(0,22);return[tt*Math.cos(U),tt*Math.sin(U),s.uniform(.8,7)]},move:()=>{let U=s.uniform(-1.5,1.5);return[U,U*.5,s.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(ot.obj);let pt=Ei({th:e,W:t?512:1024,bodies:[Sn(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(pt.group),{group:a,floor:.62,update(U){pt.update(U);for(let V of L){let K=Tn(U,V.P/2,.15,1,V.flip),Z=0;for(let D of V.blinks)Math.abs(U%3600-D)<3&&(Z=1-Math.abs(U%3600-D)/3);V.mesh.morphTargetInfluences[0]=K,V.mesh.morphTargetInfluences[1]=Z,V.eyes&&(V.eyes.morphTargetInfluences[0]=K,V.eyes.morphTargetInfluences[1]=Z)}J.forEach((V,K)=>{V.morphTargetInfluences[0]=Tn(U,45,0,1,K)});let tt=Tn(U,450);ut.rotation.set(.03*tt*.1,.02*tt*.1,0),ot.update(U)},key:{dir:Sn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){pt.dispose(),Ti(a)}}}var au={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},Xr=2.3;function If(i,t){let e=i==="night"?au.NIGHT:i==="day"?{...Ai(au.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:au.SUNSET,n=e.emit,r=vn(7),s=new Zt,o=[Sn(e.body_az,e.body_el),Sn(e.body_az+180,e.body_el)],a=Ki(e,o),c=(U,tt)=>Bt((Math.hypot(U,tt)-13)/10)*.25*(Math.sin(U*.22)+Math.cos(tt*.27)+.5*Math.sin((U+tt)*.5)),l=(U,tt)=>{let V=Bt((Math.hypot(U,tt)-10)/50),K=.9+.2*(Math.sin(U*.5)*Math.cos(tt*.5)*.5+.5),Z=Kt(e.g_near,e.g_far,V);return Z=Kt(Z,e.g_alt,Bt((Qe(U*.09+3,tt*.09-7,3)-.45)*2.2)*.6),ge(Z,K*(.9+.25*Be(U*1.7,tt*1.7)))},h=(U,tt,V)=>Kt(ge(U,(.6+.4*Bt(tt)**.7)*(.88+.24*V)),e.moss,Bt(1-tt*3)*.55);s.add(new St(zs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),_e({flat:!1})));{let U=t?96:144,tt=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],V=tt.map(P=>Array.from({length:U},(B,q)=>{let O=2*Math.PI*q/U,H=P*Math.cos(O),Y=P*Math.sin(O),Q=1;for(let rt of[ue(e.body_az),ue(e.body_az+180)]){let $=Math.abs(((O-rt+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);Q*=1-.8*Math.exp(-(($/ue(17))**2))}let S=(4+42*Te(50,102,P))*(1-.65*Te(112,134,P))*(.12+1.15*wf(H*.032,Y*.032,5))*(.55+.9*Qe(H*.01+5,Y*.01-3,3))*Q+1.2*Qe(H*.09,Y*.09,3)*Te(46,60,P);return S*=Te(45.5,52,P),[H,Y,c(H,Y)+.03+S]})),K=new Qt,Z=[],D=o;tt.forEach((P,B)=>{Z.push([]);for(let q=0;q<U;q++){let O=V[B][q],H=2*Math.PI*q/U,Y=V[B][(q+1)%U],Q=V[B][(q-1+U)%U],G=V[Math.min(B+1,tt.length-1)][q],S=V[Math.max(B-1,0)][q],rt=new C(G[0]-S[0],G[1]-S[1],G[2]-S[2]).cross(new C(Y[0]-Q[0],Y[1]-Q[1],Y[2]-Q[2])).normalize();rt.z<0&&rt.multiplyScalar(-1);let $=O[2]/45,W=1-rt.z,j=Qe(O[0]*.12,O[1]*.12,3),nt=ge(Kt(e.rock_lo,e.rock_hi,Bt(Bt($)**.7+.25*(j-.5))),.8+.4*j);nt=Kt(nt,e.veg,Bt((9-O[2])/9)*Bt(1-W*2.4)*.85),nt=Kt(nt,e.snow,Te(.55,.78,$+.22*(Qe(O[0]*.07,O[1]*.07,3)-.5))*Bt(1-W*1.7));let ct=0;for(let F of D)ct=Math.max(ct,Bt(rt.x*F[0]+rt.y*F[1]+rt.z*F[2]));ct=ct**1.2,nt=[nt[0]*(e.amb[0]+e.light_col[0]*ct*1.6),nt[1]*(e.amb[1]+e.light_col[1]*ct*1.6),nt[2]*(e.amb[2]+e.light_col[2]*ct*1.6)];let I=a(Math.cos(H)*Math.cos(.02),Math.sin(H)*Math.cos(.02),Math.sin(.02)).map(F=>_r(F,e.exposure)*e.haze_gain),w=Math.min(.97,Math.max(0,1-Math.exp(-(P-40)/e.haze_dist)+.5*Math.exp(-Math.max(O[2],0)/9)*Te(55,100,P)));nt=Kt(nt,I,w),nt=Kt(l(O[0],O[1]),nt,Te(46,58,P)).map(Bt),Z[B].push(K.v(O,nt))}});for(let P=0;P<tt.length-1;P++)for(let B=0;B<U;B++){let q=(B+1)%U;K.f(Z[P][B],Z[P][q],Z[P+1][q],Z[P+1][B])}let R=vi({fog:!1,gain:.95});s.add(new St(K.geo(),R))}let u=new Qt,d=new Qt,m=new Qt,g=new Qt,_=new Qt,f=new Qt,p=(U,tt,V,K,Z,D=!0)=>{let R=tt.map(([P,B])=>Array.from({length:V},(q,O)=>{let H=[K[0]+B*Math.cos(2*Math.PI*O/V),K[1]+B*Math.sin(2*Math.PI*O/V),K[2]+P];return U.v(H,Z(H))}));for(let P=0;P<R.length-1;P++)for(let B=0;B<V;B++){let q=(B+1)%V;U.f(R[P][B],R[P][q],R[P+1][q],R[P+1][B])}if(D){let P=R[R.length-1].map(B=>U.v(U.pos.slice(B*3,B*3+3),U.col.slice(B*3,B*3+3)));U.f(...P)}},y=(U,tt,V,K,Z,D,R=1,P=[1,1,1])=>{let B=Array.from({length:K},(q,O)=>{let H=2*Math.PI*O/K;return Array.from({length:Z},(Y,Q)=>{let G=2*Math.PI*Q/Z,S=tt+V*Math.cos(G);return U.v([S*Math.cos(H),S*Math.sin(H),D+V*R*Math.sin(G)],P)})});for(let q=0;q<K;q++)for(let O=0;O<Z;O++){let H=(q+1)%K,Y=(O+1)%Z;U.f(B[q][O],B[H][O],B[H][Y],B[q][Y])}},x=(U,tt,V,K,Z,D=0)=>{let R=Math.cos(K),P=Math.sin(K),B=new Map,q=(H,Y,Q)=>{let G=`${H},${Y},${Q}`,S=B.get(G);S||(S=D?[r.uniform(-.03,.03),r.uniform(-.03,.03),r.uniform(-.02,.02)]:[0,0,0],B.set(G,S));let rt=H*V[0]+S[0],$=Y*V[1]+S[1],W=Q*V[2]+S[2];return U.v([tt[0]+rt*R-$*P,tt[1]+rt*P+$*R,tt[2]+W],Z([rt,$,W],Q+.5))},O=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let H of O)U.f(...H.map(([Y,Q,G])=>q(Y,Q,G)))},b=(U,tt,V,K)=>{let Z=r.uniform(0,50);x(u,U,tt,V,(D,R)=>h(K,R,Be(D[0]*2.5+Z,D[1]*2.5+D[2]*1.7)),1)},L=(U,tt,V,K)=>{let Z=r.uniform(0,50);p(u,[[0,U],[V,U]],48,[0,0,tt],D=>h(K,(D[2]-tt)/V,Be(D[0]*1.2+Z,D[1]*1.2)))};L(8.2,0,1.4,e.stone[0]),L(7.2,1.4,.5,e.stone[3]),L(6.6,1.9,Xr-1.9,e.stone[0]),y(d,6.6,.18,48,6,Xr,1,e.stone[3]);let E=28;for(let U=0;U<E;U++){let tt=2*Math.PI*U/E,V=1.4+r.uniform(-.08,.08);b([8.45*Math.cos(tt),8.45*Math.sin(tt),V/2],[1,1.95,V],tt,r.choice(e.stone))}for(let[U,tt]of[[9.8,.9],[11,.55],[12.2,.3]])for(let V=0;V<14;V++){if(r.random()<.2)continue;let K=2*Math.PI*V/14+r.uniform(-.08,.08);b([U*Math.cos(K),U*Math.sin(K),tt/2],[1.3,2.6,tt],K+r.uniform(-.1,.1),r.choice(e.stone))}for(let U of[5.8,4.2,2.6,1.2])y(g,U,.08,48,6,Xr+.02,.6);for(let U=0;U<16;U++){let tt=2*Math.PI*U/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(tt),5*Math.sin(tt),Xr],()=>[1,1,1])}let v=[],A=_c(),k=vi({gain:1.05}),M=[];for(let U of[3,10,17,24]){let tt=2*Math.PI*U/E,V=8.45*Math.cos(tt),K=8.45*Math.sin(tt),Z=1.4;p(d,[[0,.28],[.9,.28]],12,[V,K,Z],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[V,K,Z+.9],()=>e.stone[0]);let D=new St(A,k);D.position.set(V,K,Z+1.25),s.add(D),v.push({m:D,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),M.push({pos:[V,K,Z+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let T=(U,tt,V,K=1.8,Z=1.2)=>{let D=ue(U),R=tt*Math.cos(D),P=tt*Math.sin(D),B=c(R,P)-.4,q=D-Math.PI/2,O=r.choice(e.stone),H=r.uniform(0,50),Y=new Map,Q=Math.cos(q),G=Math.sin(q),S=(j,nt,ct)=>{let I=`${j},${nt},${ct}`,w=Y.get(I);w||(w=[r.uniform(-.07,.07),r.uniform(-.07,.07),r.uniform(-.05,.05)],Y.set(I,w));let F=j*K,et=nt*Z,lt=(ct+.5)*V;if(lt>V*.5){let xt=1-.18*((lt-V*.5)/(V*.5));F*=xt,et*=xt}F+=w[0],et+=w[1];let it=lt+w[2],vt=.5*Be(F*2.2+H,it*.7)+.5*Be(F*6+H,it*.25);return u.v([R+F*Q-et*G,P+F*G+et*Q,B+it],h(O,it/V,vt))},rt=4,$=j=>-.5+j/rt,W=j=>{for(let nt=0;nt<rt;nt++)for(let ct=0;ct<rt;ct++)u.f(S(...j(nt,ct)),S(...j(nt+1,ct)),S(...j(nt+1,ct+1)),S(...j(nt,ct+1)))};W((j,nt)=>[$(j),-.5,$(nt)]),W((j,nt)=>[$(nt),.5,$(j)]),W((j,nt)=>[-.5,$(nt),$(j)]),W((j,nt)=>[.5,$(j),$(nt)]),W((j,nt)=>[$(nt),$(j),.5]),W((j,nt)=>[$(j),$(nt),-.5]);for(let[j,nt,ct]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let w=-Z/2-.02,F=V*j;x(f,[R+0*Q-w*G,P+0*G+w*Q,B+F],[nt,.1,ct],q,()=>[1,1,1])}};for(let[U,tt,V]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])T(U,tt,V),T(U+180,tt,V);for(let U=0;U<12;U++){let tt=ue(r.choice([r.uniform(195,245),r.uniform(295,345)])),V=r.uniform(13,18),K=r.uniform(1,2.2),Z=r.choice(e.stone),D=r.uniform(0,50),R=V*Math.cos(tt),P=V*Math.sin(tt),B=r.uniform(0,6.28),q=new pn(1,1),O=q.attributes.position,H=new ae().compose(new C(R,P,c(R,P)+.3*K),new hn().setFromAxisAngle(new C(0,0,1),B),new C(K,K*.9,K*.7)),Y=new Map;for(let Q=0;Q<O.count;Q+=3)u.f(...[0,1,2].map(G=>{let S=O.getX(Q+G),rt=O.getY(Q+G),$=O.getZ(Q+G),W=`${S.toFixed(3)},${rt.toFixed(3)},${$.toFixed(3)}`,j=Y.get(W);j===void 0&&(j=r.uniform(.8,1.2),Y.set(W,j));let nt=new C(S*j,rt*j,$*j).applyMatrix4(H);return u.v([nt.x,nt.y,nt.z],h(Z,($+1)/2,Be(S*2+D,rt*2+$)))}));q.dispose()}s.add(new St(u.geo(),_e())),s.add(new St(d.geo(),_e({flat:!1})),new St(m.geo(),_e()));let J=new St(g.geo(),Bn([1,.92,.75],.75*Math.min(1.6,n)));J.name="centre-pattern",s.add(J,new St(_.geo(),Bn([1,.92,.75],.75*Math.min(1.6,n)))),s.add(new St(f.geo(),Bn([1,.3,.1],1.1*Math.min(1.4,n))));let z=ue(e.body_az),X=_e({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),ut=[0,1].map(()=>{let U=e.grass_tip[0],tt=-1,V=Vs({r,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:Z=>{let D=1-.55*Bt((Z-13)/34);return[.03*D,.1*D,.1*D]},tip:(Z,D)=>(Z!==tt&&(tt=Z,U=Kt(e.grass_tip[0],e.grass_tip[1],r.random())),ge(Kt(U,e.grass_rim,.3*Math.abs(Math.cos(D-z))*(i==="night"?.5:1)),1-.55*Bt((Z-13)/34)))}),K=new St(V,X);return K.morphTargetInfluences=[0],s.add(K),K});{let U=new Qt;for(let tt=0;tt<(t?40:70);tt++){let V=14+22*r.random(),K=r.uniform(0,2*Math.PI),Z=V*Math.cos(K),D=V*Math.sin(K),R=c(Z,D),P=r.uniform(.35,.7),B=[Z+r.uniform(-.06,.06),D+r.uniform(-.06,.06),R+P];U.f(U.v([Z-.012,D,R],[.02,.07,.05]),U.v([Z+.012,D,R],[.02,.07,.05]),U.v([B[0]+.012,B[1],B[2]],[.08,.25,.12]),U.v([B[0]-.012,B[1],B[2]],[.08,.25,.12]));let q=r.choice(e.flower),O=U.v([B[0],B[1],B[2]+.02],[1,.9,.5]),H=Array.from({length:6},(Y,Q)=>{let G=2*Math.PI*Q/6;return U.v([B[0]+.05*Math.cos(G),B[1]+.05*Math.sin(G),B[2]+.025],q)});for(let Y=0;Y<6;Y++)U.f(O,H[Y],H[(Y+1)%6])}s.add(new St(U.geo(),_e({emit:e.flower_emit,double:!0})))}let ot=Si({r,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let U=r.uniform(0,6.283),tt=r.uniform(4,26);return[tt*Math.cos(U),tt*Math.sin(U),r.uniform(1.5,10)]},move:()=>[r.uniform(-1,1),0,r.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&s.add(ot.obj);let pt=Ei({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return s.add(pt.group),{group:s,floor:Xr,update(U){pt.update(U),ut.forEach((D,R)=>{D.morphTargetInfluences[0]=Tn(U,45,0,1,R)});let tt=U%3600,V=Math.floor(tt/8),K=(tt-V*8)/8,Z=K*K*(3-2*K);for(let D of v){let R=D.keys[V%450],P=D.keys[(V+1)%450];D.m.scale.set(R[0]+(P[0]-R[0])*Z,R[1]+(P[1]-R[1])*Z,R[2]+(P[2]-R[2])*Z)}ot.update(U)},key:{dir:Sn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,Xr+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,Xr+.5],color:[1,.5,.2],intensity:.35,dist:8},...M],dispose(){pt.dispose(),Ti(s)}}}var cu={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function Lf(i,t){let e=i==="night"?cu.NIGHT:i==="day"?{...Ai(cu.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:cu.SUNSET,n=e.emit,r=n*.75,s=vn(21),o=vn(77),a=new Zt,c=[Sn(e.body_az,e.body_el)],l=Ki(e,c),h=ue(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(O=>_r(O,e.exposure)),d=e.stone,m=Ei({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(O,H)=>{let Y=Math.hypot(O,H),Q=Kt(e.water_lo,e.water_hi,Bt(Qe(O*.05+2,H*.05,3)*1.2-.15)),G=Math.exp(-(((Y-9.9)/3)**2))*.12*.75;return Q=[Q[0]+e.glow_col[0]*G,Q[1]+e.glow_col[1]*G,Q[2]+e.glow_col[2]*G],Kt(Q,ge(u,.5),Te(32,150,Y)**1.2)},_;{let O=new Qt(!1,2),H=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],Y=t?48:72,Q=H.map(S=>Array.from({length:Y},(rt,$)=>{let W=S*Math.cos(2*Math.PI*$/Y),j=S*Math.sin(2*Math.PI*$/Y),nt=Te(9,13,S)*Math.exp(-S/90);return O.v([W,j,0],g(W,j),[[0,0,.06*Math.sin(.45*W+.33*j)*nt],[0,0,.06*Math.sin(.38*W-.41*j+2)*nt]])}));for(let S=0;S<H.length-1;S++)for(let rt=0;rt<Y;rt++){let $=(rt+1)%Y;O.f(Q[S][rt],Q[S+1][rt],Q[S+1][$],Q[S][$])}let G=new Is({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:Ch});_=new St(O.geo(),G),_.morphTargetInfluences=[0,0],a.add(_)}let f=[];[.35,.9,1.7].slice(0,t?2:3).forEach((O,H)=>{let Y=new Qt(!0),Q=[10.5,12,15,19,24,30,38,48,60],G=48,S=Q.map(W=>Array.from({length:G},(j,nt)=>{let ct=2*Math.PI*nt/G,I=W*Math.cos(ct),w=W*Math.sin(ct),F=e.mist_a*Bt((Qe(I*.07+H*9,w*.07,3)-.38)*2.6)*Te(0,3,W-10.5)*Te(0,15,60-W);return Y.v([I,w,O+.12*Math.sin(.3*I+H)],[...e.mist_col,F])}));for(let W=0;W<Q.length-1;W++)for(let j=0;j<G;j++){let nt=(j+1)%G;Y.f(S[W][j],S[W+1][j],S[W+1][nt],S[W][nt])}let rt=new an({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie,toneMapped:!1});rt.color.setScalar(1+.7);let $=new St(Y.geo(),rt);$.renderOrder=3,a.add($),f.push({m:$,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(yr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let p=new Qt,y=new Qt,x=[];for(let O of[45,135,225,315]){let H=ue(O),Y=o.uniform(1.6,2.6),Q=o.choice(d),G=o.uniform(0,50),S=9.35*Math.cos(H),rt=9.35*Math.sin(H),$=10,W=.3,j=[],nt=[],ct=Array.from({length:$},()=>W+Y-o.uniform(0,.45));for(let dt=0;dt<$;dt++){let Lt=2*Math.PI*dt/$,mt=o.uniform(-.05,.05),At=o.uniform(-.05,.05),zt=o.uniform(-.05,.05),Ft=o.uniform(-.05,.05),Rt=[S+.62*Math.cos(Lt)+mt,rt+.62*Math.sin(Lt)+At,W],Ct=[S+.5*Math.cos(Lt)+zt,rt+.5*Math.sin(Lt)+Ft,ct[dt]];j.push(p.v(Rt,wi(Q,0,Rt[0]-S,Rt[1]-rt,G,e.moss))),nt.push(p.v(Ct,wi(Q,(Ct[2]-W)/Y,Ct[0]-S,Ct[1]-rt,G,e.moss)))}for(let dt=0;dt<$;dt++){let Lt=(dt+1)%$;p.f(j[dt],j[Lt],nt[Lt],nt[dt])}p.f(...nt);let I=S-.55*Math.cos(H),w=rt-.55*Math.sin(H),F=H-Math.PI/2,et=Math.cos(F),lt=Math.sin(F),it=.06,vt=Y*.45/2,xt=.3+Y*.5;y.f(...[[-it,-.03,-vt],[it,-.03,-vt],[it,-.03,vt],[-it,-.03,vt]].map(([dt,Lt,mt])=>y.v([I+dt*et-Lt*lt,w+dt*lt+Lt*et,xt+mt],[1,1,1]))),x.push([S,rt,.3+Y])}let b=(O,H,Y,Q,G,S,rt,$)=>{let W=o.uniform(0,50),j=Math.cos(rt),nt=Math.sin(rt),ct=new Map,I=(w,F,et)=>{let lt=w*Q+o.uniform(-.03,.03),it=F*G+o.uniform(-.03,.03),vt=et*S;return p.v([O+lt*j-it*nt,H+lt*nt+it*j,Y+vt],wi($,et+.5,lt,it,W,e.moss))};for(let w of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...w.map(([F,et,lt])=>I(F,et,lt)))};for(let O of[270,90])for(let H=0;H<5;H++){let Y=11+H*1.7+o.uniform(-.2,.2),Q=ue(O+o.uniform(-5,5)),G=o.uniform(1.2,1.7);b(Y*Math.cos(Q),Y*Math.sin(Q),-.13,G,G*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(d))}for(let O=0;O<12;O++){let H=o.uniform(0,2*Math.PI);Math.min(Math.abs(Ho(H,Math.PI/2)),Math.abs(Ho(H,3*Math.PI/2)))<.18&&(H+=.5);let Y=o.uniform(10.5,15),Q=o.uniform(.7,1.8),G=o.choice(d),S=o.uniform(0,50),rt=o.uniform(0,6.28),$=new pn(1,1),W=$.attributes.position,j=new ae().compose(new C(Y*Math.cos(H),Y*Math.sin(H),.05),new hn().setFromAxisAngle(new C(0,0,1),rt),new C(Q,Q*.9,Q*.7));for(let nt=0;nt<W.count;nt+=3)p.f(...[0,1,2].map(ct=>{let I=new C(W.getX(nt+ct),W.getY(nt+ct),W.getZ(nt+ct)),w=I.z;return I.applyMatrix4(j),p.v([I.x,I.y,I.z],wi(G,(w+1)/2,W.getX(nt+ct),W.getY(nt+ct),S,e.moss))}));$.dispose()}a.add(new St(p.geo(),_e()),new St(y.geo(),Bn(e.rune_col,1.4*r)));let L=(()=>{let O=new C(.8,.6,0).normalize();return[O.x,O.y,0]})(),E=ue(e.body_az),v=[Math.cos(E),Math.sin(E)],A=[],k=(O,H,Y)=>{for(let Q=0;Q<300;Q++){let G=s.uniform(0,360);if(Y&&G>245&&G<295)continue;let S=s.uniform(O,H),rt=S*Math.cos(ue(G)),$=S*Math.sin(ue(G));if(A.every(([W,j])=>Math.hypot(rt-W,$-j)>6))return A.push([rt,$]),[rt,$]}return null},M=_e({morph:!0}),T=[],J=[],z=[],X=t?6:9,ut=t?4:7;for(let O=0;O<X+ut;O++){let H=O<X,Y=H?k(16,32,!0):k(38,62,!1);if(!Y)continue;let Q=H?s.uniform(9,15):s.uniform(16,24),G=H?s.uniform(.28,.42):s.uniform(.5,.8),S=new St(ot(Y[0],Y[1],Q,G),M);S.morphTargetInfluences=[0],a.add(S),T.push({m:S,P:s.choice([100,120,150,180,200]),flip:s.int(0,1)}),J.push(Y),z.push([Y[0],Y[1],2.2*G+.7])}function ot(O,H,Y,Q){let G=new Qt(!1,1),S=new C(-O,-H,0).normalize(),rt=s.uniform(.6,1.4),$=new C(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.02,.07)),W=s.uniform(0,6.28),j=dt=>new C(O+$.x*dt+.25*Math.sin(.5*dt+W),H+$.y*dt+.25*Math.cos(.4*dt+W),dt),nt=dt=>{let Lt=Math.max(dt,0);return Q*(1-.55*Bt(Lt/Y))*(1+.7*Math.exp(-Lt/.8))},ct=(dt,Lt,mt=0)=>{let At=rt*Bt(Math.max(dt.z,0)/Y)**2+mt;return G.v([dt.x,dt.y,dt.z],Lt,[[L[0]*At,L[1]*At,0]])},I=(dt,Lt)=>{let mt=new C(dt.x,dt.y,0);mt.lengthSq()>1e-12&&mt.normalize();let At=Kt(e.bark_dark,e.bark_lit,.6*Math.max(0,mt.x*S.x+mt.y*S.y));return At=Kt(At,e.bark_rim,Bt(e.bark_rim_k*Math.max(0,mt.x*v[0]+mt.y*v[1])*(1-.4*Bt(Lt/Y)))),Kt(At,e.moss,Bt(1-Lt/1.8)*.6*Be(dt.x*3+O,Lt*.8+H))},w=(dt,Lt,mt,At,zt)=>{let Ft=dt.length,Rt=dt.map((ee,at)=>dt[Math.min(at+1,Ft-1)].clone().sub(dt[Math.max(at-1,0)]).normalize()),Ct=Rt[0].clone().cross(Math.abs(Rt[0].z)>.9?new C(1,0,0):new C(0,0,1)).normalize(),Vt=dt.map((ee,at)=>{let Dt=Rt[at];Ct=Ct.clone().addScaledVector(Dt,-Ct.dot(Dt)).normalize();let Mt=Dt.clone().cross(Ct);return Array.from({length:mt},(Tt,Gt)=>{let $t=2*Math.PI*Gt/mt,fe=Ct.clone().multiplyScalar(Math.cos($t)).addScaledVector(Mt,Math.sin($t));return ct(ee.clone().addScaledVector(fe,Lt[at]),At(at,fe),zt?zt(at):0)})});for(let ee=0;ee<Ft-1;ee++)for(let at=0;at<mt;at++){let Dt=(at+1)%mt;G.f(Vt[ee][at],Vt[ee][Dt],Vt[ee+1][Dt],Vt[ee+1][at])}},F=11,et=8,lt=Array.from({length:F},(dt,Lt)=>{let mt=-.4+(Y+.4)*Lt/(F-1),At=j(mt);return Array.from({length:et},(zt,Ft)=>{let Rt=2*Math.PI*Ft/et,Ct=new C(Math.cos(Rt),Math.sin(Rt),0);return ct(At.clone().addScaledVector(Ct,nt(mt)*(1+.06*Math.sin(3*Rt+mt))),I(Ct,mt))})});for(let dt=0;dt<F-1;dt++)for(let Lt=0;Lt<et;Lt++){let mt=(Lt+1)%et;G.f(lt[dt][Lt],lt[dt][mt],lt[dt+1][mt],lt[dt+1][Lt])}G.f(...lt[F-1]);let it=[],vt=s.int(3,5);for(let dt=0;dt<vt;dt++){let Lt=Y*s.uniform(.42,.9),mt=s.uniform(0,6.28),At=new C(Math.cos(mt),Math.sin(mt),0),zt=j(Lt).addScaledVector(At,nt(Lt)*.6),Ft=At.clone().add(new C(0,0,s.uniform(.5,1.1))).normalize(),Rt=s.uniform(2,5)*(Y/12)*(1.1-.5*Lt/Y),Ct=Array.from({length:6},(ee,at)=>zt.clone().addScaledVector(Ft,Rt*(at/5)).add(new C(0,0,-.12*Rt*(at/5)**2))),Vt=nt(Lt)*.4;w(Ct,Ct.map((ee,at)=>Vt*(1-.88*at/5)+.01),5,(ee,at)=>I(at,Ct[ee].z)),it.push(...Ct.slice(2,5))}let xt=s.int(4,8);for(let dt=0;dt<xt;dt++){let Lt=s.choice(it),mt=s.uniform(.8,2.2),At=s.uniform(0,6.28),zt=Array.from({length:6},(Ft,Rt)=>Lt.clone().add(new C(.06*Math.sin(At+Rt)*Rt/5,.06*Math.cos(At+Rt*.8)*Rt/5,-mt*Rt/5)));w(zt,zt.map((Ft,Rt)=>.022*(1-.8*Rt/5)+.003),3,Ft=>Kt(e.vine_a,e.vine_b,Ft/5),Ft=>.45*(Ft/5)**1.5)}return G.geo()}{let O=new Qt,H=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[Y,Q,G]of z){let S=H.map(([$,W])=>Array.from({length:14},(j,nt)=>{let ct=2*Math.PI*nt/14,I=G*$*(1+.12*Math.sin(3*ct+Y)),w=[Y+I*Math.cos(ct),Q+I*Math.sin(ct),W+.05*Math.sin(5*ct+Q)];return O.v(w,Kt(e.mud,e.moss,Bt(.3+.6*Be(w[0]*.8,w[1]*.8))))})),rt=O.v([Y,Q,.52],e.moss);for(let $=0;$<S.length-1;$++)for(let W=0;W<14;W++){let j=(W+1)%14;O.f(S[$][W],S[$][j],S[$+1][j],S[$+1][W])}for(let $=0;$<14;$++)O.f(rt,S[S.length-1][$],S[S.length-1][($+1)%14])}a.add(new St(O.geo(),_e()))}let pt=_e({morph:!0,double:!0}),U=[0,1].map(O=>{let H=new Qt(!1,1),Y=(t?160:300)/2,Q=($,W,j,nt,ct)=>Array.from({length:j},(I,w)=>{let F=2*Math.PI*w/j;return H.v([$[0]+W*Math.cos(F),$[1]+W*Math.sin(F),$[2]],nt,[[L[0]*ct,L[1]*ct,0]])}),G=($,W)=>{for(let j=0;j<$.length;j++){let nt=(j+1)%$.length;H.f($[j],$[nt],W[nt],W[j])}},S=0;for(;S<Y;){let $,W;if(J.length&&o.random()<.6){let[it,vt]=o.choice(J),xt=o.uniform(0,6.283),dt=o.uniform(1,4.5);$=it+dt*Math.cos(xt),W=vt+dt*Math.sin(xt)}else{let it=o.uniform(0,6.283),vt=o.uniform(11.5,48);$=vt*Math.cos(it),W=vt*Math.sin(it)}if(Math.hypot($,W)<11)continue;S++;let j=o.uniform(1.2,3),nt=o.uniform(-.25,.25)*j*.5,ct=o.uniform(-.25,.25)*j*.5,I=it=>[$+nt*it*it,W+ct*it*it,-.3+(j+.3)*it],w=it=>.12*j*it*it,F=[0,.37,.74].map(it=>Q(I(it),.018-.008*it,3,e.reed,w(it)));G(F[0],F[1]),G(F[1],F[2]);let et=[[.75,.012],[.83,.055],[.92,.045]].map(([it,vt])=>Q(I(it),vt,5,e.cat,w(it)));G(et[0],et[1]),G(et[1],et[2]);let lt=H.v(I(1),e.cat,[[L[0]*w(1),L[1]*w(1),0]]);for(let it=0;it<5;it++)H.f(et[2][it],et[2][(it+1)%5],lt)}let rt=new St(H.geo(),pt);return rt.morphTargetInfluences=[0],a.add(rt),rt});{let O=new Qt;for(let H=0;H<(t?36:60);H++){let Y=o.uniform(0,6.283),Q=o.uniform(11.5,44),G=Q*Math.cos(Y),S=Q*Math.sin(Y),rt=o.uniform(.3,.7),$=o.int(0,11),W=o.choice(e.lily),j=O.v([G,S,.04],W),nt=Array.from({length:12},(ct,I)=>{let w=2*Math.PI*I/12;return O.v([G+rt*Math.cos(w),S+rt*.9*Math.sin(w),.04],ge(W,.8))});for(let ct=0;ct<12;ct++)ct!==$&&O.f(j,nt[ct],nt[(ct+1)%12])}a.add(new St(O.geo(),_e({double:!0})))}let tt=new Qt(!1,1),V=new Qt;for(let O=0;O<8;O++){let H=o.uniform(0,6.283),Y=o.uniform(12,36),Q=o.uniform(0,6.283),G=new C(Y*Math.cos(H),Y*Math.sin(H),.05),S=new ae().makeRotationZ(Q),rt=new pn(1,1),$=rt.attributes.position,W=new ae().makeTranslation(G.x,G.y,G.z).multiply(S).multiply(new ae().makeScale(.22,.3,.13));for(let j=0;j<$.count;j+=3)V.f(...[0,1,2].map(nt=>{let ct=new C($.getX(j+nt),$.getY(j+nt),$.getZ(j+nt)).applyMatrix4(W);return V.v([ct.x,ct.y,ct.z],[.008,.012,.009])}));rt.dispose();for(let j of[-1,1]){let nt=G.clone().add(new C(j*.09,.12,.12).applyMatrix4(S)),I=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(w=>tt.v([nt.x+w[0]*.035,nt.y+w[1]*.035,nt.z+w[2]*.035],[1,1,1],[[0,0,w[2]*.035*(.08-1)]]));for(let[w,F]of[[0,2],[2,1],[1,3],[3,0]])tt.f(I[w],I[F],I[4]),tt.f(I[F],I[w],I[5])}}a.add(new St(V.geo(),_e()));let K=new St(tt.geo(),Bn(e.eye_col,1.8));K.morphTargetInfluences=[0],a.add(K);let Z=Array.from({length:Math.floor(3480/20)},(O,H)=>60+H*20),D=[];for(let O=0;O<6;O++)D.push(Z.splice(o.int(0,Z.length-1),1)[0]);{let O=new Qt;[[70,46,14,22],[95,58,18,30]].forEach(([H,Y,Q,G],S)=>{let rt=Kt(e.back_col,u,.55+.2*S);for(let $=0;$<Y;$++){let W=2*Math.PI*($+s.uniform(-.4,.4))/Y+S*.5,j=[H*Math.cos(W),H*Math.sin(W)],nt=[-Math.sin(W),Math.cos(W)],ct=s.uniform(Q,G),I=s.uniform(.35,.9)*(1+.5*S),w=s.uniform(0,6.28),F=s.uniform(-.06,.06),et=it=>{let vt=-2+(ct+2)*it,xt=Math.sin(it*3+w)*.5+F*vt;return[j[0]+nt[0]*xt,j[1]+nt[1]*xt,vt]},lt=Array.from({length:6},(it,vt)=>{let xt=vt/5,dt=I*(1-.5*xt),Lt=Kt(rt,u,Bt(xt*xt*.9)),mt=et(xt);return[O.v([mt[0]-nt[0]*dt/2,mt[1]-nt[1]*dt/2,mt[2]],Lt),O.v([mt[0]+nt[0]*dt/2,mt[1]+nt[1]*dt/2,mt[2]],Lt)]});for(let it=0;it<5;it++)O.f(lt[it][0],lt[it][1],lt[it+1][1],lt[it+1][0]);for(let it of[-1,1]){let vt=et(s.uniform(.55,.8)),xt=[vt[0]+nt[0]*it*ct*.16,vt[1]+nt[1]*it*ct*.16,vt[2]+ct*.12],dt=Kt(rt,u,.6);O.f(O.v([vt[0],vt[1],vt[2]-.1],dt),O.v([vt[0],vt[1],vt[2]+.1],dt),O.v([xt[0],xt[1],xt[2]+.04],dt),O.v([xt[0],xt[1],xt[2]-.04],dt))}}}),a.add(new St(O.geo(),vi({fog:!1})))}let R=[];for(let O=0;O<Math.round(14*e.orb_k*(t?.6:1));O++){let H=o.uniform(0,6.283),Y=o.uniform(12,42);R.push({p:[Y*Math.cos(H),Y*Math.sin(H),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[O,H,Y]of x)R.push({p:[O,H,Y+.9],k:1.4,amp:o.uniform(.15,.4)});let P=gc({list:R,col:e.orb_col,gain:1.2});a.add(P.group);let B=Si({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let O=o.uniform(0,6.283),H=o.uniform(4,44);return[H*Math.cos(O),H*Math.sin(O),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(B.obj);let q=new Qt(!0);return Gs(q,9.4,.7,(O,H)=>{let Y=Math.hypot(O,H);return Y<.01?1:Te(0,3,9.4-Y)*(.7+.3*Be(Y*.4,Math.atan2(H,O)*6.4))},e.wash_col,.28*.5),a.add(new St(q.geo(),Wr())),{group:a,floor:.6,update(O){m.update(O);for(let Q of T)Q.m.morphTargetInfluences[0]=Tn(O,Q.P/2,.15,1,Q.flip);U.forEach((Q,G)=>{Q.morphTargetInfluences[0]=Tn(O,60,0,1,G)}),_.morphTargetInfluences[0]=Tn(O,90,0,1,0),_.morphTargetInfluences[1]=Tn(O,90,0,1,1);let H=Math.sin(O%3600/3600*Math.PI);for(let Q of f)Q.m.rotation.z=Q.s*H;let Y=0;for(let Q of D)Math.abs(O%3600-Q)<3&&(Y=1-Math.abs(O%3600-Q)/3);K.morphTargetInfluences[0]=Y,P.update(O),B.update(O)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...x.map(O=>({pos:[O[0],O[1],O[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),Ti(a)}}}var lu={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},Hn=24,Yy=Hn+1.6,Zy=160;function Df(i,t){let e=i==="night"?lu.NIGHT:i==="day"?{...Ai(lu.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:lu.SUNSET,n=e.emit,r=n*.75,s=vn(31),o=vn(55),a=new Zt,c=[Sn(e.body_az,e.body_el)],l=Ki(e,c),h=ue(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(V=>_r(V,e.exposure)),d=ue(e.body_az),m=(()=>{let V=new C(.8,.6,0).normalize();return[V.x,V.y,0]})(),g=e.stone,_=Ei({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let f=V=>Yy*(1+.25*(1-Math.exp(V/60))),p=(V,K)=>.12*Math.sin(V*.33)*Math.cos(K*.29)*Te(8,14,Math.hypot(V,K)),y=(V,K)=>Kt(Kt(e.earth_a,e.earth_b,Bt(Qe(V*.12+5,K*.12-3,3)*1.4-.2)),e.moss,Bt((Be(V*.4,K*.4)-.62)*3)*.6);{let V=new Qt,K=[8,10,12,14,16,18,20,22,Hn-1,Hn,Hn+.6,Hn+1.2,Hn+1.6],Z={[Hn+.6]:.3,[Hn+1.2]:.15,[Hn+1.6]:-.4},D=72,R=K.map(P=>Array.from({length:D},(B,q)=>{let O=2*Math.PI*q/D,H=P*Math.cos(O),Y=P*Math.sin(O);return V.v([H,Y,Z[P]??p(H,Y)],P<=Hn+.01?y(H,Y):Kt(e.bark,e.moss,.5+.3*Be(H*.5,Y*.5)))}));for(let P=0;P<K.length-1;P++)for(let B=0;B<D;B++){let q=(B+1)%D;V.f(R[P][B],R[P+1][B],R[P+1][q],R[P][q])}a.add(new St(V.geo(),_e({flat:!1})))}{let V=new Qt,K=t?28:40,Z=t?48:72,D=Array.from({length:K},(R,P)=>{let B=-.4-Zy*(P/(K-1))**1.6;return Array.from({length:Z},(q,O)=>{let H=2*Math.PI*O/Z,Y=f(B)*(1+.04*Math.sin(14*H+.8*Math.sin(.05*B))+.025*Math.sin(5*H+.02*B)),Q=Math.sin(14*H+.8*Math.sin(.05*B)),G=Kt(e.bark,e.bark_hi,Bt(.5+.5*Q)*.5);G=Kt(G,e.bark_hi,.4*Math.max(0,Math.cos(H-d))),G=Kt(G,e.moss,Bt(1+B/25)*Bt((Be(H*3,B*.15)-.4)*2.5)*.8);let S=Math.abs(Math.sin(7*H+1.5*Math.sin(.04*B+3*H)));return G=Kt(G,e.vein,Bt(1-S*7)*(.4+.6*Be(B*.05,H*2))*.9),V.v([Y*Math.cos(H),Y*Math.sin(H),B],Kt(G,ge(u,.6),Bt((-B-15)/110)**1.2))})});for(let R=0;R<K-1;R++)for(let P=0;P<Z;P++){let B=(P+1)%Z;V.f(D[R][P],D[R+1][P],D[R+1][B],D[R][B])}a.add(new St(V.geo(),_e({emit:.3,flat:!1})))}let x=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([V,K],Z)=>{let D=new Qt(!0),R=f(V)-.3,P=[R,R+4,R+10,R+20,R+32,R+46,R+64,R+84,R+106,150],B=64,q=P.map(Y=>Array.from({length:B},(Q,G)=>{let S=2*Math.PI*G/B,rt=Y*Math.cos(S),$=Y*Math.sin(S),W=K*(.55+.45*Qe(rt*.03+Z*7,$*.03,3))*Te(0,6,Y-R);return D.v([rt,$,V],[...Kt(e.sea_col,u,Te(60,150,Y)),W])}));for(let Y=0;Y<P.length-1;Y++)for(let Q=0;Q<B;Q++){let G=(Q+1)%B;D.f(q[Y][Q],q[Y+1][Q],q[Y+1][G],q[Y][G])}let O=new an({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie,fog:!1,toneMapped:!1});O.color.setScalar(1.7);let H=new St(D.geo(),O);H.renderOrder=2,a.add(H),x.push({m:H,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(yr({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let b=new Qt,L=new Qt,E=[];for(let V of[0,60,120,180,240,300]){let K=ue(V),Z=12.5,D=o.uniform(5,8),R=1.8,P=1.2,B=Z*Math.cos(K),q=Z*Math.sin(K),O=-.4,H=K-Math.PI/2,Y=Math.cos(H),Q=Math.sin(H),G=o.choice(g),S=o.uniform(0,50),rt=new Map,$=(ct,I,w)=>{let F=`${ct},${I},${w}`,et=rt.get(F);et||(et=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],rt.set(F,et));let lt=ct*R,it=I*P,vt=(w+.5)*D;if(vt>D*.5){let dt=1-.18*((vt-D*.5)/(D*.5));lt*=dt,it*=dt}lt+=et[0],it+=et[1];let xt=vt+et[2];return b.v([B+lt*Y-it*Q,q+lt*Q+it*Y,O+xt],wi(G,xt/D,lt,xt*.7,S,e.moss))},W=4,j=ct=>-.5+ct/W,nt=ct=>{for(let I=0;I<W;I++)for(let w=0;w<W;w++)b.f($(...ct(I,w)),$(...ct(I+1,w)),$(...ct(I+1,w+1)),$(...ct(I,w+1)))};nt((ct,I)=>[j(ct),-.5,j(I)]),nt((ct,I)=>[j(I),.5,j(ct)]),nt((ct,I)=>[-.5,j(I),j(ct)]),nt((ct,I)=>[.5,j(ct),j(I)]),nt((ct,I)=>[j(I),j(ct),.5]);for(let[ct,I,w]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let F=-P/2-.02,et=D*ct,lt=B-F*Q,it=q+F*Y;L.f(...[[-I/2,-w/2],[I/2,-w/2],[I/2,w/2],[-I/2,w/2]].map(([vt,xt])=>L.v([lt+vt*Y,it+vt*Q,O+et+xt],[1,1,1])))}E.push([B,q,D-.4])}a.add(new St(b.geo(),_e()),new St(L.geo(),Bn(e.rune_col,1.4*r)));let v=(V,K,Z,D,R,P,B,q,O=!0)=>{let H=Array.from({length:B},(Q,G)=>{let S=Math.PI/2*G/B,rt=G/B;return Array.from({length:P},($,W)=>{let j=2*Math.PI*W/P,nt=.1*rt*rt*R;return V.v([K[0]+Z*Math.cos(S)*Math.cos(j),K[1]+D*Math.cos(S)*Math.sin(j),K[2]+R*Math.sin(S)],q(rt,j),O?[[m[0]*nt,m[1]*nt,0]]:void 0)})}),Y=V.v([K[0],K[1],K[2]+R],q(1,0),O?[[m[0]*.1*R,m[1]*.1*R,0]]:void 0);for(let Q=0;Q<B-1;Q++)for(let G=0;G<P;G++){let S=(G+1)%P;V.f(H[Q][G],H[Q][S],H[Q+1][S],H[Q+1][G])}for(let Q=0;Q<P;Q++)V.f(H[B-1][Q],H[B-1][(Q+1)%P],Y)},A=(V,K,Z,D,R)=>{let P=new Qt(!1,1);for(let[q,O,H,Y]of V){let Q=o.uniform(.85,1.15),G=p(q,O)-.2,S=(rt,$)=>ge(Kt(K,Z,Bt(rt*(.75+.25*Math.cos($-d)))**.9),Q);for(let rt=0;rt<Y;rt++){let $=o.uniform(0,6.283),W=rt?o.uniform(0,.6)*H:0,j=H*o.uniform(.7,1);v(P,[q+W*Math.cos($),O+W*Math.sin($),G],j,j,j*.85,D,R,S)}}let B=new St(P.geo(),_e({flat:!1,morph:!0}));return B.morphTargetInfluences=[0],a.add(B),B},k=[];for(let V=0;k.length<(t?40:70)&&V<3e3;V++){let K=o.uniform(0,2*Math.PI),Z=o.uniform(11.5,Hn-1.5);if(K*180/Math.PI%360>255&&K*180/Math.PI%360<285&&Z>15)continue;let D=Z*Math.cos(K),R=Z*Math.sin(K);E.some(([P,B])=>Math.hypot(D-P,R-B)<2.8)||k.push([D,R,o.uniform(1,2.2),o.int(2,4)])}let M=A(k,e.bush_lo,e.bush_hi,12,3),T=Array.from({length:30},(V,K)=>{let Z=2*Math.PI*(K+o.uniform(-.3,.3))/30,D=Hn-.6+o.uniform(-.8,.8);return[D*Math.cos(Z),D*Math.sin(Z),o.uniform(2,3.5),2]}),J=A(T,e.hedge_lo,e.hedge_hi,16,4);{let V=new Qt;[62,85,112,140].forEach((K,Z)=>{let D=1+.25*Z;for(let R=0;R<(t?12:20);R++){let P=2*Math.PI*(R+s.uniform(-.4,.4))/20+Z*.4,B=K+s.uniform(-6,6);for(let q=0;q<2;q++){let O=q?s.uniform(-9,9):0,H=B*Math.cos(P)-O*Math.sin(P),Y=B*Math.sin(P)+O*Math.cos(P),Q=s.uniform(9,16)*D*(q?.7:1),G=s.uniform(28,46)*D*(q?.75:1),S=.35+.15*Z,rt=s.uniform(.85,1.15);v(V,[H,Y,-30],Q,Q,G,14,7,$=>Kt(ge(e.can_col,rt),ge(u,.7),Bt(S+.25*$)),!1)}}}),a.add(new St(V.geo(),_e({emit:.85,flat:!1})))}let z=[];for(let V=0;V<Math.round(18*e.orb_k*(t?.6:1));V++){let K=o.uniform(0,6.283),Z=10.5+(Hn-8.5)*Math.sqrt(o.random());z.push({p:[Z*Math.cos(K),Z*Math.sin(K),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[V,K,Z]of E)z.push({p:[V,K,Z+.9],k:1.4,amp:o.uniform(.15,.4)});let X=gc({list:z,col:e.orb_col,gain:1.2});a.add(X.group);let ut=Math.round(160*e.fire_k*(t?.5:1)),ot=Math.round(40*e.fire_k*(t?.5:1)),pt=0,U=Si({r:o,n:ut+ot,at:()=>{if(pt++<ut){let Z=o.uniform(0,6.283),D=(Hn+4)*Math.sqrt(o.random());return[D*Math.cos(Z),D*Math.sin(Z),.3+8.7*o.random()**1.6]}let V=o.uniform(0,6.283),K=o.uniform(Hn+2,Hn+14);return[K*Math.cos(V),K*Math.sin(V),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});ut+ot>0&&a.add(U.obj);let tt=new Qt(!0);return Gs(tt,9.4,.7,(V,K)=>{let Z=Math.hypot(V,K);return Z<.01?1:Te(0,3,9.4-Z)*(.7+.3*Be(Z*.4,Math.atan2(K,V)*6.4))},e.wash_col,.28*.5),a.add(new St(tt.geo(),Wr())),{group:a,floor:.6,update(V){_.update(V),M.morphTargetInfluences[0]=Tn(V,60,.15,1,1),J.morphTargetInfluences[0]=Tn(V,90,.15,1,1);let K=Math.sin(V%3600/3600*Math.PI);for(let Z of x)Z.m.rotation.z=Z.s*K;X.update(V),U.update(V)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:ge(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...E.slice(0,4).map(V=>({pos:[V[0],V[1],V[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),Ti(a)}}}var $y={forest:Pf,plains:If,swamp:Lf,worldtree:Df,castle:Cf};function Uf(i,t,e){let n=$y[i];return n?n(t,e):null}var Pt=(i,t)=>i+Math.random()*(t-i),Ky=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function qr(i,t=!1){let e=new Dn(i);return e.colorSpace=tn,t&&(e.magFilter=En,e.minFilter=En,e.generateMipmaps=!1),e}function Fo(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),qr(e)}function Nf(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let r=0;r<n.length;r++)e.save(),e.rotate(r/n.length*Math.PI*2),e.fillText(n[r],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let r=0;r<=5;r++){let s=r*4*Math.PI/5-Math.PI/2,o=Math.cos(s)*180,a=Math.sin(s)*180;r?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),qr(t)}function Jy(i,t,e=160){let n=document.createElement("canvas"),r=[...i].length;n.width=Math.max(256,Math.ceil(r*e*1.05+80)),n.height=e+80;let s=n.getContext("2d");return s.font=`900 ${e}px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif`,s.textAlign="center",s.textBaseline="middle",s.shadowColor=t,s.shadowBlur=34,s.fillStyle=t,s.fillText(i,n.width/2,n.height/2),s.shadowBlur=10,s.fillStyle="#ffffff",s.fillText(i,n.width/2,n.height/2),{tex:qr(n),aspect:n.width/n.height}}function jy(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),qr(e)}function Qy(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let r=n*56,s=r+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,s,c,l),t.arc(512,512,Math.max(r,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=qr(i);return e.anisotropy=4,e}function tx(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,r=e?Number(e[2]):20,s=Math.max(1,Math.floor(512/Math.max(n,r))),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*s}" height="${r*s}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*s,c.height=r*s;let l=c.getContext("2d");l.imageSmoothingEnabled=!1,l.drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(qr(c,!0),n/r)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function ex(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let r=document.createElement("canvas");r.width=2048,r.height=1152;let s=r.getContext("2d");s.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=s.getImageData(0,a,2048,c-a).data,h=0,u=0,d=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],d+=l[g+2],m++;return new kt(h/m/255,u/m/255,d/m/255).convertSRGBToLinear()};t(qr(r),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var nx={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},ix=["forest","swamp","worldtree"];function rx(i,t={}){let e,n=!!t.lite;try{e=new As({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let r=!1,s=()=>r?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(s()),e.toneMapping=Po,e.toneMappingExposure=1.15;let o=new Rs;o.fog=new Ga(1709616,20,58);let a=new Mn(55,16/9,.05,200),c=new C(0,1.75,7.2),l=new C(0,1.45,0);a.position.copy(c),o.add(a);let h=new Ds(16777215,2236962,1),u=new qi(16777215,1);o.add(h,u);let d=new pi(16777215,6,9,2);d.position.set(0,3,7.5),o.add(d);let m=new qi(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new Zt;o.add(g);let _=new an({color:16777215,fog:!1,side:Ie}),f=new St(new Ee(70,70,66,48,1,!0,Math.PI-.95,1.9),_);f.scale.set(-1,1,1),f.position.set(0,13,6),g.add(f);let p=new Se({color:2767396,roughness:1}),y=new St(new wo(90,48),p);y.rotation.x=-Math.PI/2,y.position.y=-.02,g.add(y);let x=new Se({color:5208634,roughness:.9,flatShading:!0}),b=2600,L=new Cs(new Un(.05,.42,3),x,b);{let st=new ae,Et=new hn,gt=new bn,bt=new C,Ot=new C,Yt=new kt;for(let Wt=0;Wt<b;Wt++){let Ce=9.9+Math.pow(Math.random(),.7)*30,It=Math.random()*Math.PI*2;bt.set(Math.cos(It)*Ce,.18,Math.sin(It)*Ce-1),gt.set(Pt(-.25,.25),Math.random()*3,Pt(-.25,.25)),Et.setFromEuler(gt);let wt=Pt(.7,1.6);Ot.set(wt,wt*Pt(.8,1.5),wt),st.compose(bt,Et,Ot),L.setMatrixAt(Wt,st),L.setColorAt(Wt,Yt.setHSL(Pt(.22,.32),Pt(.35,.6),Pt(.3,.5)))}}g.add(L);let E=new Zt;g.add(E);let v=new Se({color:1981226,roughness:1,flatShading:!0}),A=new Se({color:3811868,roughness:1}),k=new Se({color:6051942,roughness:1,flatShading:!0});function M(st){E.clear();let Et=ix.includes(st),gt=Et?70:34;for(let bt=0;bt<gt;bt++){let Ot=Pt(Math.PI*1.08,Math.PI*1.92),Yt=Pt(24,48),Wt=Math.cos(Ot)*Yt,Ce=Math.sin(Ot)*Yt-1;if(Et){let It=Pt(6,13),wt=new Zt,xe=new St(new Ee(.25,.4,It*.3,6),A);xe.position.y=It*.15,wt.add(xe);for(let je=0;je<3;je++){let Kn=new St(new Un(It*(.32-je*.07),It*.5,7),v);Kn.position.y=It*(.42+je*.2),wt.add(Kn)}wt.position.set(Wt,0,Ce),E.add(wt)}else{let It=new St(new pn(Pt(.8,2.6),0),Math.random()<.5?k:v);It.position.set(Wt,.3,Ce),It.scale.y=Pt(.5,.9),It.rotation.y=Math.random()*3,E.add(It)}}}let T=new St(new wo(9.5,64),new Se({map:Qy(),roughness:.92,metalness:.02}));T.rotation.x=-Math.PI/2,g.add(T);let J=new St(new Zn(9.5,.18,8,96),new Se({color:4933206,roughness:.85}));J.rotation.x=Math.PI/2,J.position.y=.05,g.add(J);let z=new St(new Xi(9,9),new an({map:Nf("#a98bff"),transparent:!0,opacity:.38,blending:ln,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.position.y=.03,z.scale.x=-1,o.add(z);let X=new Se({color:5919846,roughness:.9}),ut=Fo("rgba(255,170,80,1)","rgba(255,120,40,0)"),ot=[];for(let st of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let Et=st-Math.PI/2,gt=Math.cos(Et)*10.4,bt=Math.sin(Et)*10.4-1.5,Ot=new Zt,Yt=new St(new Ee(.42,.5,4.2,10),X);Yt.position.y=2.1;let Wt=new St(new un(1.2,.3,1.2),X);Wt.position.y=4.35;let Ce=new St(new Ee(.42,.22,.3,10),new Se({color:2959923,metalness:.6,roughness:.4}));Ce.position.y=4.65;let It=new fi(new Qn({map:ut,color:16756832,blending:ln,depthWrite:!1,transparent:!0}));It.position.y=5.05,It.scale.set(1.3,1.8,1);let wt=new pi(16751178,10,14,2);wt.position.y=5.1,Ot.add(Yt,Wt,Ce,It,wt),Ot.position.set(gt,0,bt),g.add(Ot),ot.push({light:wt,flame:It,base:1,phase:Math.random()*10})}let pt=260,U=new be,tt=new Float32Array(pt*3),V=new Float32Array(pt);for(let st=0;st<pt;st++)tt[st*3]=Pt(-14,14),tt[st*3+1]=Pt(0,7),tt[st*3+2]=Pt(-12,6),V[st]=Math.random()*100;U.setAttribute("position",new Le(tt,3));let K=new ur({size:.12,map:Fo(),transparent:!0,depthWrite:!1,blending:ln,color:16777215,sizeAttenuation:!0});g.add(new fr(U,K));let Z=Fo(),D=Fo("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),R=Fo("rgba(150,120,255,1)","rgba(120,80,255,0)"),P=new Map;function B(st,Et){let gt=new Zt,bt=null,Ot=null,Yt=null,Wt=1.95;Et.svg?(Wt=4.6,Yt=new Qn({transparent:!0,alphaTest:.05}),Ot=new fi(Yt),Ot.center.set(.5,0),Ot.scale.set(Wt*1.33,Wt,1),tx(Et.svg,(xe,je)=>{Yt.map=xe,Yt.needsUpdate=!0,Ot.scale.set(Wt*je,Wt,1)}),gt.add(Ot)):(bt=uf(Qh(Et.character??"wizard"),st==="me"?"me":st.startsWith("ally:")?"ally":"opp",Z,Et.staff),Wt=bt.height,gt.add(bt.root));let Ce=new St(new Xi(Wt*.7,Wt*.32),new an({map:D,transparent:!0,depthWrite:!1}));if(Ce.rotation.x=-Math.PI/2,Ce.position.y=.02,gt.add(Ce),st!=="me"){let xe=new St(new Xi(Wt*1.1,Wt*1.1),new an({map:Nf(st==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:ln,depthWrite:!1}));xe.rotation.x=-Math.PI/2,xe.position.y=.04,xe.name="circle",gt.add(xe)}let It=new fi(new Qn({map:R,blending:ln,depthWrite:!1,transparent:!0,opacity:0}));It.scale.set(Wt*1.2,Wt*1.2,1),It.position.y=Wt*.5,gt.add(It),o.add(gt);let wt={key:st,group:gt,model:bt,sprite:Ot,spriteMat:Yt,height:Wt,ko:!1,flame:null,aura:It,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100}};return P.set(st,wt),wt}function q(){for(let st of P.values())o.remove(st.group),st.group.traverse(Et=>{let gt=Et;gt.geometry?.dispose?.(),gt.material?.dispose?.()});P.clear()}let O=new Zt;a.add(O);let H=new C(1.08,-.52,-1.6),Y=new C(1.14,-.6,-1.6);O.scale.setScalar(.72);let Q=H.clone(),G=new Se({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),S=new Se({color:4020950,roughness:.9,flatShading:!0,side:Ie}),rt=new Se({color:15778970,roughness:.75,flatShading:!0}),$=new Zt;O.add($);let W=Zi("verdant",Z),j="verdant";$.add(W.group);let nt=new pi(W.color,.6,4,2);nt.position.y=pr,$.add(nt);function ct(st){st!==j&&(j=st,$.remove(W.group),W.group.traverse(Et=>{Et.geometry?.dispose?.()}),W=Zi(st,Z),$.add(W.group),nt.color.copy(W.color))}{let st=(Ot,Yt,Wt,Ce,It,wt)=>{let xe=new St(Ot,Yt);return xe.position.set(Ce,It,wt),Wt.add(xe),xe},Et=st(new Eo(.046,.075,4,10),rt,$,.066,-.004,.014);Et.scale.set(.82,1,1.12),Et.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((Ot,Yt)=>{let Wt=.05-Yt*.002,Ce=st(new Zn(Wt,.019-Yt*.001,6,14,Math.PI*1.32),rt,$,0,Ot,0);Ce.rotation.x=-Math.PI/2;let It=Math.PI*1.32;st(new we(.019-Yt*.001,6,5),rt,$,Math.cos(It)*Wt,Ot,-Math.sin(It)*Wt)}),st(new Eo(.021,.075,4,8),rt,$,.022,.074,.05).rotation.set(.3,0,1.25);let bt=new Zt;bt.position.set(.09,-.08,.03),bt.rotation.set(-.55,0,.62),O.add(bt),st(new Ee(.05,.062,.2,10),rt,bt,0,-.08,0),st(new Ee(.1,.16,.95,10,1,!0),S,bt,0,-.6,0),st(new Zn(.1,.028,6,14),G,bt,0,-.14,0).rotation.x=Math.PI/2}let I=new pi(16777215,1.4,3,2);I.position.set(.3,.3,-.5),a.add(I);let w={wizard:{sleeve:3433416,skin:15916495},witch:{sleeve:8017597,skin:15654104},goblin:{sleeve:8015404,skin:8688447},knight:{sleeve:14077887,skin:11117201},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},F=-1e9,et="ready",lt=0,it=900,vt=()=>{et==="gone"&&(et="growing",lt=performance.now())},xt=0,dt=0,Lt=null,mt=!1,At={uTime:{value:0},uAmount:{value:0},uC0:{value:new kt},uC1:{value:new kt},uC2:{value:new kt},uC3:{value:new kt}},zt=new St(new Xi(1,1),new Gn({uniforms:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:ln,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));zt.renderOrder=30,zt.frustumCulled=!1,a.add(zt);function Ft(){let Et=Math.tan(Us.degToRad(a.fov/2))*1.2,gt=Et*.55;zt.scale.set(Et*a.aspect*2.05,gt,1),zt.position.set(0,-Et+gt/2,-1.2)}function Rt(st){let Et={h:0,s:0,l:0};st.getHSL(Et),At.uC0.value.setHSL(Et.h,1,.82),At.uC1.value.setHSL(Et.h,1,.6),At.uC2.value.setHSL(Et.h,.95,.45),At.uC3.value.setHSL((Et.h+.03)%1,.9,.22)}let Ct=new C;function Vt(st,Et="chest"){if(st==="me")return Et==="staff"||Et==="head"?(W.gem.getWorldPosition(Ct),Ct.clone()):a.localToWorld(new C(Pt(-.15,.15),-.1,-1.4));let gt=P.get(st);if(!gt)return new C(0,1.4,-3);if(gt.model&&Et==="staff")return gt.model.crystal.getWorldPosition(Ct),Ct.clone();let bt=gt.group.position.clone(),Ot=gt.height*gt.group.scale.y;return st==="boss"&&Et==="mouth"?bt.add(new C(-gt.height*.55,gt.height*.62,.3)):bt.add(new C(0,Ot*(Et==="head"?.85:.6),0))}let ee=[],at=0;function Dt(st,Et,gt={}){if(n&&at++&1)return;let bt=new fi(new Qn({map:Z,color:Et,blending:gt.solid?xi:ln,depthWrite:!1,transparent:!0,opacity:gt.opacity??1}));bt.position.copy(st),bt.scale.setScalar(gt.size??.25),o.add(bt),ee.push({sprite:bt,vel:gt.vel??new C,life:0,max:gt.life??.6,grow:gt.grow??0,gravity:gt.gravity??0})}function Mt(st,Et,gt=26,bt=3.2,Ot=.22){for(let Yt=0;Yt<gt;Yt++){let Wt=new C(Pt(-1,1),Pt(-.6,1.2),Pt(-1,1)).normalize().multiplyScalar(Pt(bt*.4,bt));Dt(st,Et,{vel:Wt,size:Pt(Ot*.6,Ot*1.4),life:Pt(.4,.9),gravity:-3})}Dt(st,Et,{size:.6,grow:6,life:.35,opacity:.9})}function Tt(st,Et,gt=1){let bt=st.group.position,Ot=st.model?.45:st.height*.35;for(let Yt=0;Yt<gt;Yt++){let Wt=st.group.scale.y;Dt(new C(bt.x+Pt(-Ot,Ot)*Wt,bt.y+Pt(.05,st.height*.45)*Wt,bt.z+Pt(-Ot,Ot)*.5*Wt),Et,{size:Pt(.35,.7)*Wt,vel:new C(Pt(-.1,.1),Pt(1.4,2.6),0),life:Pt(.35,.65),grow:-.9,opacity:.75,solid:!0}),Dt(new C(bt.x+Pt(-Ot,Ot)*.6*Wt,bt.y+Pt(.05,st.height*.35)*Wt,bt.z),Et,{size:Pt(.3,.5)*Wt,vel:new C(0,Pt(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Dt(new C(bt.x+Pt(-Ot,Ot)*Wt,bt.y+Pt(.2,st.height*.9)*Wt,bt.z),16777215,{size:Pt(.05,.1)*Wt,vel:new C(0,Pt(1.5,3),0),life:.5})}}let Gt=[];function $t(st){for(let gt=0;gt<2;gt++){let bt=[],Ot=st.clone().add(new C(Pt(-1.5,1.5),9,Pt(-1,1)));for(let Wt=0;Wt<=12;Wt++){let Ce=Ot.clone().lerp(st,Wt/12);Wt>0&&Wt<12&&Ce.add(new C(Pt(-.45,.45),Pt(-.2,.2),Pt(-.3,.3))),bt.push(Ce)}let Yt=new Za(new be().setFromPoints(bt),new Mo({color:gt?16777215:10475775,transparent:!0,blending:ln,depthWrite:!1}));o.add(Yt),Gt.push({line:Yt,life:0});for(let Wt=0;Wt<bt.length-1;Wt++){let Ce=bt[Wt].distanceTo(bt[Wt+1]);for(let It=0;It<Ce;It+=.09)Dt(bt[Wt].clone().lerp(bt[Wt+1],It/Ce),gt?16777215:9425151,{size:gt?.12:.3,life:.28,opacity:gt?1:.7})}}let Et=new pi(12576511,60,16,2);Et.position.copy(st).add(new C(0,2,1)),o.add(Et),setTimeout(()=>o.remove(Et),160),Mt(st,12576511,30,4,.18)}let fe=[];function ke(st,Et,gt="#ffd479"){let bt=new fi(new Qn({map:jy(Et,gt),transparent:!0,depthWrite:!1,depthTest:!1}));bt.position.copy(Vt(st,"head")).add(new C(Pt(-.3,.3),.4,.3));let Ot=st==="me"?.9:1.3;bt.scale.set(Ot,Ot/2,1),bt.renderOrder=10,o.add(bt),fe.push({sprite:bt,life:0})}let Ke=document.createElement("div");Ke.className="arena3d-hit",document.body.append(Ke);function ye(st="255,40,60",Et=""){Ke.style.setProperty("--hit",st),Ke.className="arena3d-hit",Ke.offsetWidth,Ke.className=`arena3d-hit on ${Et}`}let Je=0,kn=st=>{Ky()||(Je=Math.max(Je,st))},Ri=[];function Oo(st,Et,gt,bt,Ot,Yt){let{tex:Wt,aspect:Ce}=Jy(gt,bt),It=new fi(new Qn({map:Wt,transparent:!0,depthWrite:!1}));It.scale.set(Ot*Ce*.4,Ot*.4,1),It.position.copy(st),It.renderOrder=5,o.add(It);let wt=st.clone().lerp(Et,.5).add(new C(Pt(-.6,.6),1.2+st.distanceTo(Et)*.08,0));return new Promise(xe=>Ri.push({sprite:It,from:st,to:Et,mid:wt,t:0,dur:Yt,color:new kt(bt),size:Ot,done:xe,trailAt:0}))}let Wn="battle",xr="",Yr="",Ue=null,Ci=[],ri=new qi(16777215,1);ri.visible=!1,o.add(ri,ri.target);let Zr=(st,Et)=>new C(st[0],st[2]-Et,-st[1]);function Bo(st,Et){Ue&&(o.remove(Ue.group),Ue.dispose(),Ue=null);for(let gt of Ci)o.remove(gt);Ci.length=0;try{Ue=Uf(st,Et,n)}catch(gt){console.warn("3D arena failed, using the classic one",gt),Ue=null}if(g.visible=!Ue,z.position.y=Ue?.1:.03,ri.visible=!!Ue,!Ue){Yr="";return}Ue.group.rotation.x=-Math.PI/2,Ue.group.position.y=-Ue.floor,o.add(Ue.group),Ue.group.traverse(gt=>{gt.name==="centre-pattern"&&(gt.visible=!1)});for(let gt of n?Ue.lights.slice(0,2):Ue.lights){let bt=new pi(new kt(...gt.color),gt.intensity*8,gt.dist,2);bt.position.copy(Zr(gt.pos,Ue.floor)),bt.userData.base=bt.intensity,bt.userData.flicker=gt.flicker??0,o.add(bt),Ci.push(bt)}}function ko(st){let Et=st.key.dir;ri.color.setRGB(...st.key.color),ri.intensity=st.key.intensity*.35,ri.position.set(Et[0]*50,Et[2]*50,-Et[1]*50),ri.target.position.set(0,0,0),h.color.setRGB(...st.ambient.sky),h.groundColor.setRGB(...st.ambient.ground),h.intensity=st.ambient.intensity,u.intensity=0,m.intensity*=.45,d.intensity*=.5;let gt=o.fog;gt.color.setRGB(...st.fog.color),gt.near=st.fog.near,gt.far=st.fog.far,e.setClearColor(gt.color)}let Xs=0,Pi=0,$r=0,N=new bn,ht=new bn,_t=!1,yt=!1,ft=new kt(16777215),Ht=null;function qt(st,Et){let gt=c.z-Et,bt=Math.tan(Us.degToRad(a.fov/2))*gt;return st*bt*a.aspect}function Jt(){if(!Ht)return;let st=Ht,Et=P.get("opp");Et?.model&&Et.group.scale.setScalar(1.3),Et&&Et.group.position.set(qt(a.aspect<1?.08:st.layout==="deck"?.36:.46,-2.2),0,-2.2);let gt=P.get("boss");gt&&gt.group.position.set(qt(a.aspect<1?.15:.5,-5.5),0,-5.5),st.allies.forEach((Ot,Yt)=>{let Wt=P.get(`ally:${Ot.id}`);Wt&&Wt.group.position.set(qt(-.36+Yt*.13,-.6-Yt*1.1),0,-.6-Yt*1.1)});let bt=(gt??Et)?.group.position;for(let[Ot,Yt]of P){if(!Yt.model)continue;let Wt=Ot==="opp"?c:bt??new C(0,0,-3);Yt.model.root.rotation.y=Math.atan2(Wt.x-Yt.group.position.x,Wt.z-Yt.group.position.z)}}function jt(st){Ht=st,Wn=st.layout,q();let Et=w[Qh(st.me.character??"wizard")]??w.wizard;S.color.set(Et.sleeve),rt.color.set(Et.skin),rt.metalness=st.me.character==="knight"?.3:0,An(),ct(st.me.staff??"verdant"),mt=!1,O.visible=!0,et="ready",Lt=null,At.uAmount.value=0,zt.visible=!1,st.opp&&B("opp",st.opp),st.boss&&B("boss",st.boss);for(let bt of st.allies)B(`ally:${bt.id}`,bt);Jt();let gt=nx[st.time];h.color.set(gt.sky),h.groundColor.set(gt.ground),h.intensity=gt.hemi*1.25,m.intensity=st.time==="night"?1.3:st.time==="sunset"?1:.7,u.color.set(gt.sun),u.intensity=gt.sunInt,u.position.set(...gt.sunPos),d.intensity=st.time==="night"?9:5;for(let bt of ot)bt.base=gt.torch;K.color.set(gt.motes),ft=new kt(gt.spriteTint),xr!==st.bgKey&&(xr=st.bgKey,Bo(st.bgKey.split("-")[0],st.time)),Ue?ko(Ue):Yr!==st.bgKey&&(Yr=st.bgKey,o.fog.near=20,o.fog.far=58,M(st.bgKey.split("-")[0]),ex(st.bgSvg,(bt,Ot,Yt)=>{_.map?.dispose(),_.map=bt,_.needsUpdate=!0,o.fog.color.copy(Ot).lerp(Yt,.35),p.color.copy(Ot).multiplyScalar(.9),x.color.copy(Ot).lerp(new kt(5212730),.45).multiplyScalar(1.15),v.color.copy(Ot).lerp(new kt(1522212),.5),e.setClearColor(Yt)}))}let oe=new Ut,ie=new Ut,te=.32,Ae=.13,le={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},Ve=st=>{st.pointerType!=="mouse"||st.buttons||st.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||oe.set(st.clientX/innerWidth*2-1,st.clientY/innerHeight*2-1)};addEventListener("pointermove",Ve,{passive:!0});function An(){let st=Wn==="deck"?Y:H,Et=Wn==="deck"?.56:.72;if(a.aspect>=1.2){Q.copy(st),O.scale.setScalar(Et);return}let gt=Math.tan(Us.degToRad(a.fov/2))*-st.z,bt=gt*a.aspect;Q.set(bt*.78,-gt*.62,st.z),O.scale.setScalar(Et*Math.max(.5,Math.min(1,a.aspect*.9)))}function Me(){let st=i.clientWidth||innerWidth,Et=i.clientHeight||innerHeight;e.setSize(st,Et,!1),a.aspect=st/Et,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),Jt(),Ft(),An()}addEventListener("resize",Me);let ne=0,rn=0,Re=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!ji||i.clientWidth===ne&&i.clientHeight===rn||(ne=i.clientWidth,rn=i.clientHeight,Me())}):null;Re?.observe(i);let Xn=new kt(6974072),Ji=new kt(16722474),Rn=new kt(9428223),qs=new kt(2784511),Xe=new kt(16738842);function gi(st,Et){let gt=Et<st.hurtUntil,bt=Et<st.frostUntil,Ot=Et<st.burnUntil;if(st.model&&st.ko){for(let Yt of st.model.materials)Yt.mat.color.copy(Yt.color).lerp(Xn,.55),Yt.mat.emissive.setRGB(0,0,0);return}if(st.model){if(bt!==st.frosted){st.frosted=bt;for(let Yt of st.model.materials)Yt.mat.opacity=bt?.5:1,Yt.mat.depthWrite=!bt}for(let Yt of st.model.materials)Yt.mat.color.copy(Yt.color),bt&&Yt.mat.color.lerp(Rn,.75),gt?(Yt.mat.emissive.copy(Ji),Yt.mat.emissiveIntensity=.6):bt?(Yt.mat.emissive.copy(qs),Yt.mat.emissiveIntensity=.45):Ot?(Yt.mat.color.lerp(Xe,.35),Yt.mat.emissive.copy(Xe),Yt.mat.emissiveIntensity=.55+.3*Math.sin(Et/40)):(Yt.mat.emissive.copy(Yt.emissive),Yt.mat.emissiveIntensity=1)}else st.spriteMat&&(st.spriteMat.color.copy(gt?new kt(1,.35,.35):bt?Rn:Ot?new kt(1,.7,.5):ft),st.spriteMat.opacity=bt?.6:st.ko?st.spriteMat.opacity:1)}let ji=!1,Cn=0,Qi=performance.now(),qe=0,Mr=0,Ys=0,yc=0;function Hf(st){if(r||document.hidden)return;if(yc<45){yc++;return}if(Mr++,Ys+=st,Ys<2500)return;let Et=Mr*1e3/Ys;Mr=0,Ys=0,!(Et>=(n?22:34))&&(n?(r=!0,e.setPixelRatio(s()),Me()):zo.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(Et),lowRes:r}})))}function hu(st){Cn=requestAnimationFrame(hu),Hf(st-Qi);let Et=Math.min(1,Math.max(0,(st-Qi)/1e3)),gt=Math.min(.05,Et);Qi=st,qe+=gt;let bt=performance.now(),Ot=!1;ie.lerp(oe,Ot?1:.05);let Yt=Ot?0:Math.sin(qe*.7)*.025;if(n)a.position.set(c.x+ie.x*.12,c.y-ie.y*.05+Yt,c.z),a.lookAt(l.clone().add(new C(ie.x*1.5,-ie.y*.75,0))),le.yaw=0,le.pitch=0;else{le.yaw=-ie.x*te,le.pitch=-ie.y*Ae,a.position.set(c.x,c.y+Yt,c.z);let It=l.clone().sub(c).applyAxisAngle(new C(0,1,0),le.yaw),wt=It.clone().cross(new C(0,1,0)).normalize();It.applyAxisAngle(wt,le.pitch),a.lookAt(c.clone().add(It))}ji&&Ht&&(Ht.opp||Ht.allies.length)&&st-le.sentAt>150&&(Math.abs(le.yaw-le.sentYaw)>.02||Math.abs(le.pitch-le.sentPitch)>.02)&&(le.sentAt=st,le.sentYaw=le.yaw,le.sentPitch=le.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+le.yaw.toFixed(3),pitch:+le.pitch.toFixed(3)}}))),Je>0&&(a.position.add(new C(Pt(-1,1),Pt(-1,1),0).multiplyScalar(Je)),a.rotation.z+=Pt(-1,1)*Je*.15,Je=Math.max(0,Je-gt*1.1)),Pi+=(Xs-Pi)*Math.min(1,gt*6),$r=Math.max(0,$r-gt*2.2),N.x+=(ht.x-N.x)*Math.min(1,gt*14),N.y+=(ht.y-N.y)*Math.min(1,gt*14),N.z+=(ht.z-N.z)*Math.min(1,gt*14),$r<=0&&ht.set(0,0,0);let Wt=.5+.5*Math.sin(qe*6);{let It=Math.max(0,1-(bt-F)/380),wt=It>0?Math.sin(It*Math.PI):0,xe=Math.min(1,Pi);xt+=((xe>.05&&!Ot?Math.min(1,.5+xe*.6):0)-xt)*Math.min(1,gt*3),dt+=gt*(2.6+xe*1.4);let je=Math.sin(dt),Kn=Math.sin(dt*2)/2;O.position.set(Q.x-ie.x*.04+je*.06*xt,Q.y+ie.y*.03+(Ot?0:Math.sin(qe*1.6)*.008)+xe*.03+Kn*.11*xt,Q.z-wt*.35),$.rotation.set(xe*.25-wt*.75+N.x*.3+Kn*.18*xt,N.y*.3,.2-je*.24*xt+N.z*.3);let _n=et==="ready"?1:0;if(et==="growing"){let he=Math.min(1,(bt-lt)/it);if(_n=he*he*(3-2*he),he>=1)et="ready";else if(!Ot){W.gem.getWorldPosition(Ct);for(let Ne=0;Ne<2;Ne++){let Jn=Ct.clone().add(new C(Pt(-.4,.4),Pt(-.4,.4),Pt(-.4,.4)));Dt(Jn,W.color,{size:Pt(.025,.06),vel:Ct.clone().sub(Jn).multiplyScalar(2.8),life:.36})}}}if(W.gem.scale.setScalar(_n),W.gemMat.emissiveIntensity=.7+xe*(1.6+Wt*1.2)+wt*3,nt.intensity=(.5+xe*4+wt*6)*_n,W.glow.scale.setScalar((.3+xe*(.32+Wt*.18)+wt*.6)*_n),W.glow.material.opacity=.3+xe*.35,W.gem.rotation.y+=gt*(.8+xe*6),W.update(qe,gt,xe),_n>.9&&!Ot&&O.visible&&(W.gem.getWorldPosition(Ct),xt>.25&&Dt(Ct.clone(),W.color,{size:Pt(.03,.05),life:.55,opacity:.9}),xe>.2&&Math.random()<xe*.8)){let he=Ct.clone().add(new C(Pt(-.35,.35),Pt(-.35,.35),Pt(-.35,.35)));Dt(he,W.color.clone().lerp(new kt(16777215),.4),{size:Pt(.02,.05),vel:Ct.clone().sub(he).multiplyScalar(2.6),life:.38})}if(Lt&&!Ot&&O.visible)for(let he=0;he<2;he++){let Ne=$.localToWorld(new C(Pt(-.05,.05),Pt(-.15,1.3),Pt(-.05,.05)));Dt(Ne,Lt,{size:Pt(.05,.12),vel:new C(Pt(-.05,.05),Pt(.35,.8),0),life:Pt(.25,.45),solid:Math.random()<.4,opacity:.9})}At.uTime.value=Ot?0:qe,At.uAmount.value+=((Lt&&O.visible?1:0)-At.uAmount.value)*Math.min(1,Et*3),zt.visible=At.uAmount.value>.01}for(let[It,wt]of P){let xe=wt.group.getObjectByName("circle");if(xe&&(xe.rotation.z+=gt*.4),gi(wt,bt),wt.ko)continue;let je=Math.max(0,wt.lungeUntil-bt)/450;if(wt.model){let he=wt.model;he.body.position.y=Ot?0:Math.sin(qe*2+wt.height*3)*.02;let Ne=wt.look,Jn=bt-Ne.at>4e3,Kr=Jn?.22*Math.sin(qe*.31+Ne.seed)*Math.sin(qe*.13+Ne.seed*2):Ne.yaw,xc=Jn?.06*Math.sin(qe*.23+Ne.seed*3):Ne.pitch;Ne.curYaw+=(Kr-Ne.curYaw)*Math.min(1,gt*7),Ne.curPitch+=(xc-Ne.curPitch)*Math.min(1,gt*7),he.head.rotation.set(-Ne.curPitch*.8,Ne.curYaw*.7,0),he.body.rotation.y=Ne.curYaw*.3;let br=1-je,vr=je<=0?0:br<.18?-.35*(br/.18):br<.4?-.35+1.35*((br-.18)/.22):1-((br-.4)/.6)**2;he.body.rotation.x=Math.max(0,vr)*.2,he.staffPivot.rotation.x=vr*1.9;let Ii=It==="me"?Pi:(It==="opp"||It.startsWith("ally:"))&&_t?Wn==="deck"?.7:.45:0,Zs=It==="me"?0:Ii*(1-Math.max(0,vr)),Of=-.15-Ii*.75-Math.max(0,vr)*.9+(It==="me"?N.x:0)+Math.sin(qe*4.4)*.22*Zs;he.arm.rotation.x+=(Of-he.arm.rotation.x)*Math.min(1,gt*10),he.arm.rotation.z=-.35+(It==="me"?N.z:0)+Math.sin(qe*2.2)*.32*Zs,he.arm.rotation.y=It==="me"?N.y:0;let Er=It==="me"?Pi:Ii;he.crystalMat.emissiveIntensity=1.2+Er*(3+Wt*2)+je*3,he.glow.scale.setScalar(.45+Er*(.5+Wt*.3)+je*.6),he.glow.material.opacity=.45+Er*.5,he.crystal.rotation.y+=gt*(.8+Er*6),he.staff.update(qe,gt,Er),Er>.5&&Math.random()<Er*.6&&(he.crystal.getWorldPosition(Ct),Dt(Ct.clone().add(new C(Pt(-.1,.1),Pt(-.1,.1),Pt(-.1,.1))),he.staff.color.getHex(),{size:Pt(.03,.08),vel:new C(Pt(-.2,.2),Pt(.2,.6),0),life:.7}))}else wt.sprite&&(wt.sprite.position.y=Ot?0:Math.abs(Math.sin(qe*2))*.05,wt.sprite.position.z=je*.4);let Kn=It==="opp"&&_t&&Wn==="deck"||It==="boss"&&yt,_n=wt.aura.material;if(_n.opacity+=((Kn?.55+.2*Math.sin(qe*5):wt.flame?.35:0)-_n.opacity)*Math.min(1,gt*5),_n.color.copy(It==="boss"?new kt(16742954):wt.flame??new kt(11832575)),wt.flame&&Tt(wt,wt.flame,2),bt<wt.burnUntil&&Tt(wt,Math.random()<.5?16734746:16756784,3),bt<wt.frostUntil&&Math.random()<.3&&Tt(wt,13628159,1),It==="boss"&&yt&&Math.random()<.8){let he=Vt("boss","mouth"),Ne=he.clone().add(new C(Pt(-1.5,1.5),Pt(-1,1),Pt(-1,1)));Dt(Ne,16751162,{size:.12,vel:he.clone().sub(Ne).multiplyScalar(1.6),life:.55})}}for(let It of ot){let wt=.85+.15*Math.sin(qe*9+It.phase)+.08*Math.sin(qe*23+It.phase*2);It.light.intensity=It.base*wt,It.flame.scale.set(1.2*wt,1.8*(.9+.2*wt),1)}if(z.rotation.z+=gt*.05,Ue){Ue.update(qe*30);for(let It of Ci)It.userData.flicker&&(It.intensity=It.userData.base*(1-It.userData.flicker*(.5+.5*Math.sin(qe*9+It.position.x)*Math.sin(qe*23+It.position.z))))}let Ce=U.attributes.position;for(let It=0;It<pt;It++){let wt=Ce.getY(It)+gt*(.12+V[It]%1*.2);wt>7.5&&(wt=0),Ce.setY(It,wt),Ce.setX(It,Ce.getX(It)+Math.sin(qe*.5+V[It])*gt*.15)}Ce.needsUpdate=!0,K.opacity=.55+.35*Math.sin(qe*1.3);for(let It=Ri.length-1;It>=0;It--){let wt=Ri[It];wt.t+=gt/wt.dur;let xe=Math.min(1,wt.t),je=xe*xe*(1.6-.6*xe),Kn=wt.from.clone().lerp(wt.mid,je),_n=wt.mid.clone().lerp(wt.to,je);wt.sprite.position.copy(Kn.lerp(_n,je)),wt.gem&&(wt.gem.position.copy(wt.sprite.position),wt.gem.rotation.y+=gt*12,wt.gem.rotation.x+=gt*7);let he=.55+je*.8,Ne=wt.sprite.material,Jn=Ne.map?.image,Kr=Jn?Jn.width/Jn.height:1;wt.sprite.scale.set(wt.size*Kr*.4*he,wt.size*.4*he,1),wt.trailAt-=gt,wt.trailAt<=0&&!Ot&&(wt.trailAt=.016,Dt(wt.sprite.position,wt.color,{size:Pt(.05,.13)*wt.size,life:.35,opacity:.8,vel:new C(Pt(-.3,.3),Pt(-.3,.3),Pt(-.3,.3))})),xe>=1&&(o.remove(wt.sprite),Ne.map?.dispose(),Ne.dispose(),wt.gem&&o.remove(wt.gem),Ri.splice(It,1),wt.done())}for(let It=ee.length-1;It>=0;It--){let wt=ee[It];if(wt.life+=gt,wt.life>=wt.max){o.remove(wt.sprite),wt.sprite.material.dispose(),ee.splice(It,1);continue}wt.vel.y+=wt.gravity*gt,wt.sprite.position.addScaledVector(wt.vel,gt),wt.grow&&wt.sprite.scale.multiplyScalar(1+wt.grow*gt),wt.sprite.material.opacity=1-wt.life/wt.max}for(let It=Gt.length-1;It>=0;It--){let wt=Gt[It];wt.life+=gt,wt.line.material.opacity=wt.life<.08||wt.life>.14&&wt.life<.2?1:.15,wt.life>.32&&(o.remove(wt.line),wt.line.geometry.dispose(),wt.line.material.dispose(),Gt.splice(It,1))}for(let It=fe.length-1;It>=0;It--){let wt=fe[It];wt.life+=gt,wt.sprite.position.y+=gt*.8,wt.sprite.material.opacity=Math.min(1,2.2-wt.life*2),wt.life>1.1&&(o.remove(wt.sprite),wt.sprite.material.map?.dispose(),wt.sprite.material.dispose(),fe.splice(It,1))}e.render(o,a)}function Ff(st,Et,gt){let bt=P.get(st),Ot=performance.now();Et==="bolt"&&($t(bt?Vt(st,"head"):gt),st==="me"&&ye("190,230,255","bolt")),Et==="frost"&&(bt&&(bt.frostUntil=Ot+1100),Mt(gt,13628159,30,2.5,.16),st==="me"&&ye("140,210,255","frost")),Et==="fire"&&(bt&&(bt.burnUntil=Ot+1100),Mt(gt,16742954,36,3.4,.24),st==="me"&&ye("255,120,30","fire"))}let zo={setup:jt,setActive(st){st!==ji&&(ji=st,i.classList.toggle("on",st),st?(Me(),Qi=performance.now(),yc=0,Mr=0,Ys=0,Cn=requestAnimationFrame(hu)):cancelAnimationFrame(Cn))},async cast(st,Et,gt,bt={}){let Ot=bt.kind??"attack",Yt=st==="me"||st.startsWith("ally:"),Wt=Ot==="heal"?"#5dffa8":Ot==="mana"?"#ffd479":bt.fx==="bolt"?"#bfe6ff":bt.fx==="frost"?"#8fdcff":bt.fx==="fire"?"#ff8a3a":Yt?"#a98bff":"#ff6b6b",Ce=P.get(st);if(Ce&&(Ce.lungeUntil=performance.now()+450),st==="me"&&(Pi=0,Xs=0),Ot!=="attack"){if(st==="me"&&et!=="gone"&&O.visible){F=performance.now(),et="gone";let he=new St(W.gem.geometry,W.gemMat),Ne=Vt("me","staff"),Jn=Vt("me","chest"),Kr=Ne.clone().lerp(Jn,.5).add(new C(0,.35,0));he.position.copy(Ne),he.scale.setScalar(1.3),o.add(he);let xc=performance.now();await new Promise(br=>{let vr=()=>{let Ii=Math.min(1,(performance.now()-xc)/520),Zs=Ne.clone().lerp(Kr,Ii).lerp(Kr.clone().lerp(Jn,Ii),Ii);he.position.copy(Zs),he.rotation.y+=.3,he.scale.setScalar(1.3*(1-Ii*.7)),Math.random()<.8&&Dt(Zs.clone(),Wt,{size:Pt(.03,.07),life:.35,opacity:.9}),Ii<1?requestAnimationFrame(vr):(o.remove(he),br())};vr()})}let _n=Vt(st);for(let he=0;he<30;he++)Dt(_n.clone().add(new C(Pt(-.5,.5),Pt(-.8,.2),Pt(-.3,.3))),Wt,{size:Pt(.08,.2),vel:new C(Pt(-.2,.2),Pt(.8,1.8),0),life:Pt(.6,1.1)});st==="me"&&ye(Ot==="heal"?"80,255,160":"255,212,121"),bt.damage&&ke(st,`+${bt.damage}`,Wt);return}let It=Vt(st,st==="boss"?"mouth":"staff"),wt=Vt(Et,"chest"),xe=(bt.crit?1.5:1)*1.15,je=Oo(It,wt,gt,Wt,xe,.85);if(st==="me"){F=performance.now(),et="gone";let _n=new St(W.gem.geometry,W.gemMat);_n.scale.setScalar(1.5),_n.position.copy(It),o.add(_n),Ri[Ri.length-1].gem=_n}await je,Mt(wt,Wt,bt.crit?46:28,bt.crit?4.4:3.2,.2);let Kn=P.get(Et);Kn&&(Kn.hurtUntil=performance.now()+450),Ff(Et,bt.fx,wt),Et==="me"?(bt.fx||ye(),kn(bt.crit?.16:.09)):kn(bt.crit?.07:.035),bt.damage&&ke(Et,`\u2212${bt.damage}${bt.crit?"!":""}`,Et==="me"?"#ff6b81":bt.crit?"#ff9a3a":"#ffd479")},fizzle(st){let Et=Vt(st,st==="boss"?"head":"staff");if(st!=="me")for(let gt=0;gt<14;gt++)Dt(Et,10132136,{size:Pt(.1,.25),vel:new C(Pt(-.6,.6),Pt(.3,1),Pt(-.3,.3)),life:.8,opacity:.6});if(st==="me"){if(Pi=0,et!=="gone"&&O.visible){W.gem.getWorldPosition(Ct);for(let gt=0;gt<16;gt++)Dt(Ct.clone(),Math.random()<.5?W.color:10132136,{size:Pt(.02,.05),vel:new C(Pt(-.8,.8),Pt(-.2,.9),Pt(-.5,.5)),life:Pt(.4,.7),gravity:-2.5})}et="gone"}},ko(st){if(st==="me"){if(mt)return;mt=!0,Lt=null,W.gem.getWorldPosition(Ct),Mt(Ct.clone(),10132136,18,1.6,.1),O.visible=!1;return}let Et=P.get(st);if(!Et||Et.ko)return;Et.ko=!0,Et.flame=null,Et.aura.material.opacity=0;let gt=performance.now(),bt=()=>{let Ot=Math.min(1,(performance.now()-gt)/700),Yt=Ot*Ot;Et.model?(Et.model.root.rotation.z=Math.PI/2*Yt,Et.model.root.position.y=.24*Yt):Et.spriteMat&&(Et.spriteMat.rotation=Math.PI/2*Ot*-1,Et.spriteMat.opacity=1-Ot*.6),Ot<1&&requestAnimationFrame(bt)};bt(),Mt(Vt(st),16777215,40,3,.25)},onfire(st,Et,gt){if(st==="me"){Lt=Et&&!mt?new kt(gt??"#6ee7ff"):null,Lt&&Rt(Lt);return}let bt=P.get(st);bt&&(bt.flame=Et?new kt(gt??"#6ee7ff"):null)},channel(st){Xs=Math.max(0,Math.min(1,st))},twitch(){vt(),$r=.35,ht.set(Pt(-.35,.25),Pt(-.25,.25),Pt(-.3,.3)),Math.random()<.6&&et==="ready"&&(W.gem.getWorldPosition(Ct),Dt(Ct.clone(),W.color.clone().lerp(new kt(16777215),.5),{size:Pt(.04,.09),vel:new C(Pt(-.6,.6),Pt(.2,.9),Pt(-.3,.3)),life:.5}))},thrust(){F=performance.now(),W.gem.getWorldPosition(Ct),Mt(Ct.clone(),W.color,18,1.6,.08)},oppChannel(st){_t=st},inhale(st){yt=st},breath(st,Et){yt=!1;let gt=Vt("boss","mouth");for(let bt=0;bt<160;bt++)setTimeout(()=>{let Yt=(st.length?Vt(st[bt%st.length]):a.localToWorld(new C(0,-.2,-1))).clone().add(new C(Pt(-1.5,1.5),Pt(-.8,.8),0)).sub(gt).normalize().multiplyScalar(Pt(7,11));Dt(gt,Math.random()<.4?16765530:16734746,{size:Pt(.3,.7),vel:Yt,life:Pt(.6,.9),grow:1.2})},bt*5);setTimeout(()=>{for(let bt of st){let Ot=P.get(bt);Ot&&(Ot.hurtUntil=performance.now()+500,Ot.burnUntil=performance.now()+900),ke(bt,`\u2212${Et}`,"#ff9a3a")}st.includes("me")&&(ye("255,120,30"),kn(.16))},450)},claw(st,Et){let gt=P.get("boss");gt&&(gt.lungeUntil=performance.now()+450),setTimeout(()=>{let bt=P.get(st);bt&&(bt.hurtUntil=performance.now()+450),st==="me"&&(ye("255,40,60","claw"),kn(.13)),ke(st,`\u2212${Et}`,"#ff6b81")},200)},float:ke,look(st,Et,gt){let bt=P.get(st);!bt||!Number.isFinite(Et)||!Number.isFinite(gt)||(bt.look.yaw=Math.max(-te,Math.min(te,Et)),bt.look.pitch=Math.max(-Ae,Math.min(Ae,gt)),bt.look.at=performance.now())},setLite(st){let Et=n!==st;n=st,Et&&Ue&&Ht&&(xr="",jt(Ht)),e.setPixelRatio(s()),L.count=st?900:b,U.setDrawRange(0,st?90:pt),Me()},dispose(){zo.setActive(!1),Re?.disconnect(),removeEventListener("pointermove",Ve),removeEventListener("resize",Me),Ke.remove(),Ue&&(Ue.dispose(),Ue=null),e.dispose()}};n&&zo.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return W},get gemState(){return et},scene:o,camera:a,renderer:e}),Me();try{e.compile(o,a)}catch{}return zo}globalThis.KWArena3D=rx;globalThis.KWStaffPreview=ff;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
