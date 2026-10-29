"use strict";(()=>{var td=Object.defineProperty;var ed=(i,t,e)=>t in i?td(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ze=(i,t,e)=>ed(i,typeof t!="symbol"?t+"":t,e);var nd=0,Su=1,id=2;var N0=1,rd=2,zi=3,Dn=0,Xn=1,Ie=2,ur=0,vi=1,pn=2,Tu=3,Au=4,sd=5,Nr=100,od=101,ad=102,cd=103,ld=104,hd=200,ud=201,fd=202,dd=203,dl=204,pl=205,pd=206,md=207,gd=208,_d=209,yd=210,xd=211,Md=212,bd=213,vd=214,ml=0,gl=1,_l=2,Ts=3,yl=4,xl=5,Ml=6,bl=7,Bh=0,kh=1,Ed=2,fr=0,wd=1,Sd=2,Td=3,Uo=4,Ad=5,Rd=6,Cd=7;var H0=300,As=301,Rs=302,Mo=303,vl=304,lc=306,Or=1e3,Gi=1001,El=1002,An=1003,Pd=1004;var $o=1005;var fi=1006,Ic=1007;var Fr=1008;var Xi=1009,F0=1010,O0=1011,bo=1012,zh=1013,Br=1014,bi=1015,No=1016,Vh=1017,Gh=1018,Cs=1020,B0=35902,k0=1021,z0=1022,pi=1023,V0=1024,G0=1025,Es=1026,Ps=1027,Wh=1028,Xh=1029,W0=1030,qh=1031;var Yh=1033,Ra=33776,Ca=33777,Pa=33778,Ia=33779,wl=35840,Sl=35841,Tl=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Il=37808,Ll=37809,Dl=37810,Ul=37811,Nl=37812,Hl=37813,Fl=37814,Ol=37815,Bl=37816,kl=37817,zl=37818,Vl=37819,Gl=37820,Wl=37821,La=36492,Xl=36494,ql=36495,X0=36283,Yl=36284,Zl=36285,$l=36286;var Ua=2300,Kl=2301,Lc=2302,Ru=2400,Cu=2401,Pu=2402;var Id=3200,Ld=3201;var Zh=0,Dd=1,lr="",an="srgb",gr="srgb-linear",$h="display-p3",hc="display-p3-linear",Na="linear",Ye="srgb",Ha="rec709",Fa="p3";var ns=7680;var Iu=519,Ud=512,Nd=513,Hd=514,q0=515,Fd=516,Od=517,Bd=518,kd=519,Jl=35044;var Lu="300 es",Wi=2e3,Oa=2001,dr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Du=1234567,po=Math.PI/180,vo=180/Math.PI;function Ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function Mn(i,t,e){return Math.max(t,Math.min(e,i))}function Kh(i,t){return(i%t+t)%t}function zd(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Vd(i,t,e){return i!==t?(e-i)/(t-i):0}function mo(i,t,e){return(1-e)*i+e*t}function Gd(i,t,e,n){return mo(i,t,1-Math.exp(-e*n))}function Wd(i,t=1){return t-Math.abs(Kh(i,t*2)-t)}function Xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Yd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zd(i,t){return i+Math.random()*(t-i)}function $d(i){return i*(.5-Math.random())}function Kd(i){i!==void 0&&(Du=i);let t=Du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jd(i){return i*po}function jd(i){return i*vo}function Qd(i){return(i&i-1)===0&&i!==0}function tp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function np(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bs={DEG2RAD:po,RAD2DEG:vo,generateUUID:Ei,clamp:Mn,euclideanModulo:Kh,mapLinear:zd,inverseLerp:Vd,lerp:mo,damp:Gd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:Zd,randFloatSpread:$d,seededRandom:Kd,degToRad:Jd,radToDeg:jd,isPowerOfTwo:Qd,ceilPowerOfTwo:tp,floorPowerOfTwo:ep,setQuaternionFromProperEuler:np,normalize:Oe,denormalize:di},Ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pe=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=r[0],f=r[3],p=r[6],y=r[1],x=r[4],b=r[7],L=r[2],C=r[5],E=r[8];return s[0]=o*_+a*y+c*L,s[3]=o*f+a*x+c*C,s[6]=o*p+a*b+c*E,s[1]=l*_+h*y+u*L,s[4]=l*f+h*x+u*C,s[7]=l*p+h*b+u*E,s[2]=d*_+m*y+g*L,s[5]=d*f+m*x+g*C,s[8]=d*p+m*b+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=e*u+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Dc.makeScale(t,e)),this}rotate(t){return this.premultiply(Dc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new pe;function Y0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){let i=Ba("canvas");return i.style.display="block",i}var Uu={};function Da(i){i in Uu||(Uu[i]=!0,console.warn(i))}function rp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function sp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function op(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Nu=new pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hu=new pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),to={[gr]:{transfer:Na,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[an]:{transfer:Ye,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hc]:{transfer:Na,primaries:Fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Hu),fromReference:i=>i.applyMatrix3(Nu)},[$h]:{transfer:Ye,primaries:Fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Hu),fromReference:i=>i.applyMatrix3(Nu).convertLinearToSRGB()}},ap=new Set([gr,hc]),Ue={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ap.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=to[t].toReference,r=to[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return to[i].primaries},getTransfer:function(i){return i===lr?Na:to[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(to[t].luminanceCoefficients)}};function ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Uc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var is,jl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=Ba("canvas")),is.width=t.width,is.height=t.height;let n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ba("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ws(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ws(e[n]/255)*255):e[n]=ws(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cp=0,ka=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nc(r[o].image)):s.push(Nc(r[o]))}else s=Nc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lp=0,qn=class i extends dr{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,r=Gi,s=fi,o=Fr,a=pi,c=Xi,l=i.DEFAULT_ANISOTROPY,h=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Ei(),this.name="",this.source=new ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==H0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case El:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case El:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=H0;qn.DEFAULT_ANISOTROPY=1;var ke=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,b=(m+1)/2,L=(p+1)/2,C=(h+d)/4,E=(u+_)/4,T=(g+f)/4;return x>b&&x>L?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=E/n):b>L?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=C/r,s=T/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=E/s,r=T/s),this.set(n,r,s,e),this}let y=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ql=class extends dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new qn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ka(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qi=class extends Ql{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},za=class extends qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends qn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a,p=c*d+l*m+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let L=Math.sqrt(x),C=Math.atan2(L,p*y);f=Math.sin(f*C)/L,a=Math.sin(a*C)/L}let b=a*y;if(c=c*f+d*b,l=l*f+m*b,h=h*f+g*b,u=u*f+_*b,f===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*m-l*d,t[e+1]=c*g+h*d+l*u-a*m,t[e+2]=l*g+h*m+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hc.copy(this).projectOnVector(t),this.sub(Hc)}reflect(t){return this.sub(Hc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hc=new R,Fu=new vn,Yi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(t.matrixWorld),this.union(Ko)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),Jo.subVectors(this.max,eo),rs.subVectors(t.a,eo),ss.subVectors(t.b,eo),os.subVectors(t.c,eo),ir.subVectors(ss,rs),rr.subVectors(os,ss),Rr.subVectors(rs,os);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Rr.z,Rr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Rr.z,0,-Rr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Rr.y,Rr.x,0];return!Fc(e,rs,ss,os,Jo)||(e=[1,0,0,0,1,0,0,0,1],!Fc(e,rs,ss,os,Jo))?!1:(jo.crossVectors(ir,rr),e=[jo.x,jo.y,jo.z],Fc(e,rs,ss,os,Jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Hi=[new R,new R,new R,new R,new R,new R,new R,new R],li=new R,Ko=new Yi,rs=new R,ss=new R,os=new R,ir=new R,rr=new R,Rr=new R,eo=new R,Jo=new R,jo=new R,Cr=new R;function Fc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Cr.fromArray(i,s);let a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),c=t.dot(Cr),l=e.dot(Cr),h=n.dot(Cr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var hp=new Yi,no=new R,Oc=new R,Zi=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hp.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);let e=no.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(no,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(Oc)),this.expandByPoint(no.copy(t.center).sub(Oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new R,Bc=new R,Qo=new R,sr=new R,kc=new R,ta=new R,zc=new R,Eo=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Bc.copy(t).add(e).multiplyScalar(.5),Qo.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(Bc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Qo),a=sr.dot(this.direction),c=-sr.dot(Qo),l=sr.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bc).addScaledVector(Qo,d),m}intersectSphere(t,e){Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),r=Fi.dot(Fi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,r,s){kc.subVectors(e,t),ta.subVectors(n,t),zc.crossVectors(kc,ta);let o=this.direction.dot(zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,t);let c=a*this.direction.dot(ta.crossVectors(sr,ta));if(c<0)return null;let l=a*this.direction.dot(kc.cross(sr));if(l<0||c+l>o)return null;let h=-a*sr.dot(zc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f)}set(t,e,n,r,s,o,a,c,l,h,u,d,m,g,_,f){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/as.setFromMatrixColumn(t,0).length(),s=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(up,t,fp)}lookAt(t,e,n){let r=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),or.crossVectors(n,jn),or.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),or.crossVectors(n,jn)),or.normalize(),ea.crossVectors(jn,or),r[0]=or.x,r[4]=ea.x,r[8]=jn.x,r[1]=or.y,r[5]=ea.y,r[9]=jn.y,r[2]=or.z,r[6]=ea.z,r[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],y=n[3],x=n[7],b=n[11],L=n[15],C=r[0],E=r[4],T=r[8],H=r[12],M=r[1],S=r[5],Z=r[9],Q=r[13],q=r[2],at=r[6],ot=r[10],pt=r[14],D=r[3],et=r[7],z=r[11],K=r[15];return s[0]=o*C+a*M+c*q+l*D,s[4]=o*E+a*S+c*at+l*et,s[8]=o*T+a*Z+c*ot+l*z,s[12]=o*H+a*Q+c*pt+l*K,s[1]=h*C+u*M+d*q+m*D,s[5]=h*E+u*S+d*at+m*et,s[9]=h*T+u*Z+d*ot+m*z,s[13]=h*H+u*Q+d*pt+m*K,s[2]=g*C+_*M+f*q+p*D,s[6]=g*E+_*S+f*at+p*et,s[10]=g*T+_*Z+f*ot+p*z,s[14]=g*H+_*Q+f*pt+p*K,s[3]=y*C+x*M+b*q+L*D,s[7]=y*E+x*S+b*at+L*et,s[11]=y*T+x*Z+b*ot+L*z,s[15]=y*H+x*Q+b*pt+L*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],f=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*m-n*c*m)+_*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],f=t[14],p=t[15],y=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,x=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,b=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,C=e*y+n*x+r*b+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/C;return t[0]=y*E,t[1]=(_*d*s-u*f*s-_*r*m+n*f*m+u*r*p-n*d*p)*E,t[2]=(a*f*s-_*c*s+_*r*l-n*f*l-a*r*p+n*c*p)*E,t[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*m-n*c*m)*E,t[4]=x*E,t[5]=(h*f*s-g*d*s+g*r*m-e*f*m-h*r*p+e*d*p)*E,t[6]=(g*c*s-o*f*s-g*r*l+e*f*l+o*r*p-e*c*p)*E,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*m+e*c*m)*E,t[8]=b*E,t[9]=(g*u*s-h*_*s-g*n*m+e*_*m+h*n*p-e*u*p)*E,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*E,t[12]=L*E,t[13]=(h*_*r-g*u*r+g*n*d-e*_*d-h*n*f+e*u*f)*E,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*f-e*a*f)*E,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*d+e*a*d)*E,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,f=o*u,p=a*u,y=c*l,x=c*h,b=c*u,L=n.x,C=n.y,E=n.z;return r[0]=(1-(_+p))*L,r[1]=(m+b)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-b)*C,r[5]=(1-(d+p))*C,r[6]=(f+y)*C,r[7]=0,r[8]=(g+x)*E,r[9]=(f-y)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=as.set(r[0],r[1],r[2]).length(),o=as.set(r[4],r[5],r[6]).length(),a=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hi.copy(this);let l=1/s,h=1/o,u=1/a;return hi.elements[0]*=l,hi.elements[1]*=l,hi.elements[2]*=l,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,e.setFromRotationMatrix(hi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Wi){let c=this.elements,l=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r),m,g;if(a===Wi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Oa)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Wi){let c=this.elements,l=1/(e-t),h=1/(n-r),u=1/(o-s),d=(e+t)*l,m=(n+r)*h,g,_;if(a===Wi)g=(o+s)*u,_=-2*u;else if(a===Oa)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new R,hi=new ce,up=new R(0,0,0),fp=new R(1,1,1),or=new R,ea=new R,jn=new R,Ou=new ce,Bu=new vn,En=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Va=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dp=0,ku=new R,cs=new vn,Oi=new ce,na=new R,io=new R,pp=new R,mp=new vn,zu=new R(1,0,0),Vu=new R(0,1,0),Gu=new R(0,0,1),Wu={type:"added"},gp={type:"removed"},ls={type:"childadded",child:null},Vc={type:"childremoved",child:null},hn=class i extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new En,n=new vn,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new pe}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(Vu,t)}rotateZ(t){return this.rotateOnAxis(Gu,t)}translateOnAxis(t,e){return ku.copy(t).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(Vu,t)}translateZ(t){return this.translateOnAxis(Gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(io,na,this.up):Oi.lookAt(na,io,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Oi),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wu),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gp),Vc.child=t,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wu),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};hn.DEFAULT_UP=new R(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=new R,Bi=new R,Gc=new R,ki=new R,hs=new R,us=new R,Xu=new R,Wc=new R,Xc=new R,qc=new R,Yc=new ke,Zc=new ke,$c=new ke,hr=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ui.subVectors(t,e),r.cross(ui);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ui.subVectors(r,e),Bi.subVectors(n,e),Gc.subVectors(t,e);let o=ui.dot(ui),a=ui.dot(Bi),c=ui.dot(Gc),l=Bi.dot(Bi),h=Bi.dot(Gc),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ki.x),c.addScaledVector(o,ki.y),c.addScaledVector(a,ki.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Yc.setScalar(0),Zc.setScalar(0),$c.setScalar(0),Yc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),$c.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Yc,s.x),o.addScaledVector(Zc,s.y),o.addScaledVector($c,s.z),o}static isFrontFacing(t,e,n,r){return ui.subVectors(n,e),Bi.subVectors(t,e),ui.cross(Bi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ui.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;hs.subVectors(r,n),us.subVectors(s,n),Wc.subVectors(t,n);let c=hs.dot(Wc),l=us.dot(Wc);if(c<=0&&l<=0)return e.copy(n);Xc.subVectors(t,r);let h=hs.dot(Xc),u=us.dot(Xc);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(hs,o);qc.subVectors(t,s);let m=hs.dot(qc),g=us.dot(qc);if(g>=0&&m<=g)return e.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(us,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Xu.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(Xu,a);let p=1/(f+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Kc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ue.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Ue.workingColorSpace){if(t=Kh(t,1),e=Mn(e,0,1),n=Mn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Kc(o,s,t+1/3),this.g=Kc(o,s,t),this.b=Kc(o,s,t-1/3)}return Ue.toWorkingColorSpace(this,r),this}setStyle(t,e=an){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){let n=Z0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=Uc(t.r),this.g=Uc(t.g),this.b=Uc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Ue.fromWorkingColorSpace(Ln.copy(this),t),Math.round(Mn(Ln.r*255,0,255))*65536+Math.round(Mn(Ln.g*255,0,255))*256+Math.round(Mn(Ln.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Ln.copy(this),e);let n=Ln.r,r=Ln.g,s=Ln.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=an){Ue.fromWorkingColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,r=Ln.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ar),this.setHSL(ar.h+t,ar.s+e,ar.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ar),t.getHSL(ia);let n=mo(ar.h,ia.h,e),r=mo(ar.s,ia.s,e),s=mo(ar.l,ia.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new kt;kt.NAMES=Z0;var _p=0,mi=class extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=vi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==pl&&(n.blendDst=this.blendDst),this.blendEquation!==Nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rn=class extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ln=new R,ra=new Ut,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}};var Ga=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wa=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},yp=0,ni=new ce,Jc=new hn,fs=new R,Qn=new Yi,ro=new Yi,xn=new R,Me=class i extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Y0(t)?Wa:Ga)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new pe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,n){return ni.makeTranslation(t,e,n),this.applyMatrix4(ni),this}scale(t,e,n){return ni.makeScale(t,e,n),this.applyMatrix4(ni),this}lookAt(t){return Jc.lookAt(t),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Qn.min,ro.min),Qn.expandByPoint(xn),xn.addVectors(Qn.max,ro.max),Qn.expandByPoint(xn)):(Qn.expandByPoint(ro.min),Qn.expandByPoint(ro.max))}Qn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)xn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(xn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xn.fromBufferAttribute(a,l),c&&(fs.fromBufferAttribute(t,l),xn.add(fs)),r=Math.max(r,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new R,c[T]=new R;let l=new R,h=new R,u=new R,d=new Ut,m=new Ut,g=new Ut,_=new R,f=new R;function p(T,H,M){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,H),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,H),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(S),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(S),a[T].add(_),a[H].add(_),a[M].add(_),c[T].add(f),c[H].add(f),c[M].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let T=0,H=y.length;T<H;++T){let M=y[T],S=M.start,Z=M.count;for(let Q=S,q=S+Z;Q<q;Q+=3)p(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}let x=new R,b=new R,L=new R,C=new R;function E(T){L.fromBufferAttribute(r,T),C.copy(L);let H=a[T];x.copy(H),x.sub(L.multiplyScalar(L.dot(H))).normalize(),b.crossVectors(C,H);let S=b.dot(c[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,S)}for(let T=0,H=y.length;T<H;++T){let M=y[T],S=M.start,Z=M.count;for(let Q=S,q=S+Z;Q<q;Q+=3)E(t.getX(Q+0)),E(t.getX(Q+1)),E(t.getX(Q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new Le(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qu=new ce,Pr=new Eo,sa=new Zi,Yu=new R,oa=new R,aa=new R,ca=new R,jc=new R,la=new R,Zu=new R,ha=new R,St=class extends hn{constructor(t=new Me,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){la.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(jc.fromBufferAttribute(u,t),o?la.addScaledVector(jc,h):la.addScaledVector(jc.sub(e),h))}e.add(la)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(sa.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(sa,Yu)===null||Pr.origin.distanceToSquared(Yu)>(t.far-t.near)**2))&&(qu.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(qu),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,L=x;b<L;b+=3){let C=a.getX(b),E=a.getX(b+1),T=a.getX(b+2);r=ua(this,p,t,n,l,h,u,C,E,T),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=a.getX(f),x=a.getX(f+1),b=a.getX(f+2);r=ua(this,o,t,n,l,h,u,y,x,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let f=d[g],p=o[f.materialIndex],y=Math.max(f.start,m.start),x=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=y,L=x;b<L;b+=3){let C=b,E=b+1,T=b+2;r=ua(this,p,t,n,l,h,u,C,E,T),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){let y=f,x=f+1,b=f+2;r=ua(this,o,t,n,l,h,u,y,x,b),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}};function xp(i,t,e,n,r,s,o,a){let c;if(t.side===Xn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Dn,a),c===null)return null;ha.copy(a),ha.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ha);return l<e.near||l>e.far?null:{distance:l,point:ha.clone(),object:i}}function ua(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,oa),i.getVertexPosition(c,aa),i.getVertexPosition(l,ca);let h=xp(i,t,e,n,oa,aa,ca,Zu);if(h){let u=new R;hr.getBarycoord(Zu,oa,aa,ca,u),r&&(h.uv=hr.getInterpolatedAttribute(r,a,c,l,u,new Ut)),s&&(h.uv1=hr.getInterpolatedAttribute(s,a,c,l,u,new Ut)),o&&(h.normal=hr.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};hr.getNormal(oa,aa,ca,d.normal),h.face=d,h.barycoord=u}return h}var je=class i extends Me{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,f,p,y,x,b,L,C,E,T,H){let M=b/E,S=L/T,Z=b/2,Q=L/2,q=C/2,at=E+1,ot=T+1,pt=0,D=0,et=new R;for(let z=0;z<ot;z++){let K=z*S-Q;for(let W=0;W<at;W++){let U=W*M-Z;et[_]=U*y,et[f]=K*x,et[p]=q,l.push(et.x,et.y,et.z),et[_]=0,et[f]=0,et[p]=C>0?1:-1,h.push(et.x,et.y,et.z),u.push(W/E),u.push(1-z/T),pt+=1}}for(let z=0;z<T;z++)for(let K=0;K<E;K++){let W=d+K+at*z,U=d+K+at*(z+1),A=d+(K+1)+at*(z+1),P=d+(K+1)+at*z;c.push(W,U,P),c.push(U,A,P),D+=6}a.addGroup(m,D,H),m+=D,d+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function zn(i){let t={};for(let e=0;e<i.length;e++){let n=Is(i[e]);for(let r in n)t[r]=n[r]}return t}function Mp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $0(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}var bp={clone:Is,merge:zn},vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xa=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cr=new R,$u=new Ut,Ku=new Ut,bn=class extends Xa{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cr.x,cr.y).multiplyScalar(-t/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-t/cr.z)}getViewSize(t,e){return this.getViewBounds(t,$u,Ku),e.subVectors(Ku,$u)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ds=-90,ps=1,eh=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new bn(ds,ps,t,e);r.layers=this.layers,this.add(r);let s=new bn(ds,ps,t,e);s.layers=this.layers,this.add(s);let o=new bn(ds,ps,t,e);o.layers=this.layers,this.add(o);let a=new bn(ds,ps,t,e);a.layers=this.layers,this.add(a);let c=new bn(ds,ps,t,e);c.layers=this.layers,this.add(c);let l=new bn(ds,ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qa=class extends qn{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nh=class extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new qa(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new je(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:ur});s.uniforms.tEquirect.value=e;let o=new St(r,s),a=e.minFilter;return e.minFilter===Fr&&(e.minFilter=fi),new eh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Qc=new R,wp=new R,Sp=new pe,Vi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Qc.subVectors(n,e).cross(wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sp.getNormalMatrix(t),r=this.coplanarPoint(Qc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ir=new Zi,fa=new R,wo=class{constructor(t=new Vi,e=new Vi,n=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wi){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],g=r[9],_=r[10],f=r[11],p=r[12],y=r[13],x=r[14],b=r[15];if(n[0].setComponents(c-s,d-l,f-m,b-p).normalize(),n[1].setComponents(c+s,d+l,f+m,b+p).normalize(),n[2].setComponents(c+o,d+h,f+g,b+y).normalize(),n[3].setComponents(c-o,d-h,f-g,b-y).normalize(),n[4].setComponents(c-a,d-u,f-_,b-x).normalize(),e===Wi)n[5].setComponents(c+a,d+u,f+_,b+x).normalize();else if(e===Oa)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(t){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(fa.x=r.normal.x>0?t.max.x:t.min.x,fa.y=r.normal.y>0?t.max.y:t.min.y,fa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function K0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Tp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var $i=class i extends Me{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){let y=p*d-o;for(let x=0;x<l;x++){let b=x*u-s;g.push(b,-y,0),_.push(0,0,1),f.push(x/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,b=y+l*(p+1),L=y+1+l*(p+1),C=y+1+l*p;m.push(x,b,C),m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`
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
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Sm=`struct PhysicalMaterial {
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
}`,Tm=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Kg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,jg=`#define TOON
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
}`,Qg=`#define TOON
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
}`,t1=`uniform float size;
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
}`,e1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 color;
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
}`,r1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Ip,alphatest_pars_fragment:Lp,aomap_fragment:Dp,aomap_pars_fragment:Up,batching_pars_vertex:Np,batching_vertex:Hp,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:kp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:Zp,color_vertex:$p,common:Kp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:tm,emissivemap_fragment:em,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:rm,envmap_fragment:sm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:cm,envmap_physical_pars_fragment:xm,envmap_vertex:lm,fog_vertex:hm,fog_pars_vertex:um,fog_fragment:fm,fog_pars_fragment:dm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:_m,lights_pars_begin:ym,lights_toon_fragment:Mm,lights_toon_pars_fragment:bm,lights_phong_fragment:vm,lights_phong_pars_fragment:Em,lights_physical_fragment:wm,lights_physical_pars_fragment:Sm,lights_fragment_begin:Tm,lights_fragment_maps:Am,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Um,map_particle_fragment:Nm,map_particle_pars_fragment:Hm,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:km,morphnormal_vertex:zm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Gm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Zm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:tg,packing:eg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:rg,dithering_pars_fragment:sg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:lg,shadowmap_vertex:hg,shadowmask_pars_fragment:ug,skinbase_vertex:fg,skinning_pars_vertex:dg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:_g,tonemapping_fragment:yg,tonemapping_pars_fragment:xg,transmission_fragment:Mg,transmission_pars_fragment:bg,uv_pars_fragment:vg,uv_pars_vertex:Eg,uv_vertex:wg,worldpos_vertex:Sg,background_vert:Tg,background_frag:Ag,backgroundCube_vert:Rg,backgroundCube_frag:Cg,cube_vert:Pg,cube_frag:Ig,depth_vert:Lg,depth_frag:Dg,distanceRGBA_vert:Ug,distanceRGBA_frag:Ng,equirect_vert:Hg,equirect_frag:Fg,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:kg,meshbasic_frag:zg,meshlambert_vert:Vg,meshlambert_frag:Gg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:Zg,meshphong_frag:$g,meshphysical_vert:Kg,meshphysical_frag:Jg,meshtoon_vert:jg,meshtoon_frag:Qg,points_vert:t1,points_frag:e1,shadow_vert:n1,shadow_frag:i1,sprite_vert:r1,sprite_frag:s1},Yt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Mi={basic:{uniforms:zn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:zn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new kt(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:zn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:zn([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:zn([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new kt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:zn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:zn([Yt.points,Yt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:zn([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:zn([Yt.common,Yt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:zn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:zn([Yt.sprite,Yt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:zn([Yt.common,Yt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:zn([Yt.lights,Yt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Mi.physical={uniforms:zn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var da={r:0,b:0,g:0},Lr=new En,o1=new ce;function a1(i,t,e,n,r,s,o){let a=new kt(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,b=g(y);b===null?p(a,c):b&&b.isColor&&(p(b,1),x=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===lc)?(h===void 0&&(h=new St(new je(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Is(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Lr.copy(x.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(Lr)),h.material.toneMapped=Ue.getTransfer(b.colorSpace)!==Ye,(u!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new St(new $i(2,2),new Yn({name:"BackgroundMaterial",uniforms:Is(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ue.getTransfer(b.colorSpace)!==Ye,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(da,$0(i)),n.buffers.color.setClear(da.r,da.g,da.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:f}}function c1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(M,S,Z,Q,q){let at=!1,ot=u(Q,Z,S);s!==ot&&(s=ot,l(s.object)),at=m(M,Q,Z,q),at&&g(M,Q,Z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,b(M,S,Z,Q),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,S,Z){let Q=Z.wireframe===!0,q=n[M.id];q===void 0&&(q={},n[M.id]=q);let at=q[S.id];at===void 0&&(at={},q[S.id]=at);let ot=at[Q];return ot===void 0&&(ot=d(c()),at[Q]=ot),ot}function d(M){let S=[],Z=[],Q=[];for(let q=0;q<e;q++)S[q]=0,Z[q]=0,Q[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:Z,attributeDivisors:Q,object:M,attributes:{},index:null}}function m(M,S,Z,Q){let q=s.attributes,at=S.attributes,ot=0,pt=Z.getAttributes();for(let D in pt)if(pt[D].location>=0){let z=q[D],K=at[D];if(K===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),z===void 0||z.attribute!==K||K&&z.data!==K.data)return!0;ot++}return s.attributesNum!==ot||s.index!==Q}function g(M,S,Z,Q){let q={},at=S.attributes,ot=0,pt=Z.getAttributes();for(let D in pt)if(pt[D].location>=0){let z=at[D];z===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(z=M.instanceColor));let K={};K.attribute=z,z&&z.data&&(K.data=z.data),q[D]=K,ot++}s.attributes=q,s.attributesNum=ot,s.index=Q}function _(){let M=s.newAttributes;for(let S=0,Z=M.length;S<Z;S++)M[S]=0}function f(M){p(M,0)}function p(M,S){let Z=s.newAttributes,Q=s.enabledAttributes,q=s.attributeDivisors;Z[M]=1,Q[M]===0&&(i.enableVertexAttribArray(M),Q[M]=1),q[M]!==S&&(i.vertexAttribDivisor(M,S),q[M]=S)}function y(){let M=s.newAttributes,S=s.enabledAttributes;for(let Z=0,Q=S.length;Z<Q;Z++)S[Z]!==M[Z]&&(i.disableVertexAttribArray(Z),S[Z]=0)}function x(M,S,Z,Q,q,at,ot){ot===!0?i.vertexAttribIPointer(M,S,Z,q,at):i.vertexAttribPointer(M,S,Z,Q,q,at)}function b(M,S,Z,Q){_();let q=Q.attributes,at=Z.getAttributes(),ot=S.defaultAttributeValues;for(let pt in at){let D=at[pt];if(D.location>=0){let et=q[pt];if(et===void 0&&(pt==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),pt==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){let z=et.normalized,K=et.itemSize,W=t.get(et);if(W===void 0)continue;let U=W.buffer,A=W.type,P=W.bytesPerElement,k=A===i.INT||A===i.UNSIGNED_INT||et.gpuType===zh;if(et.isInterleavedBufferAttribute){let X=et.data,B=X.stride,F=et.offset;if(X.isInstancedInterleavedBuffer){for(let Y=0;Y<D.locationSize;Y++)p(D.location+Y,X.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Y=0;Y<D.locationSize;Y++)f(D.location+Y);i.bindBuffer(i.ARRAY_BUFFER,U);for(let Y=0;Y<D.locationSize;Y++)x(D.location+Y,K/D.locationSize,A,z,B*P,(F+K/D.locationSize*Y)*P,k)}else{if(et.isInstancedBufferAttribute){for(let X=0;X<D.locationSize;X++)p(D.location+X,et.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let X=0;X<D.locationSize;X++)f(D.location+X);i.bindBuffer(i.ARRAY_BUFFER,U);for(let X=0;X<D.locationSize;X++)x(D.location+X,K/D.locationSize,A,z,K*P,K/D.locationSize*X*P,k)}}else if(ot!==void 0){let z=ot[pt];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(D.location,z);break;case 3:i.vertexAttrib3fv(D.location,z);break;case 4:i.vertexAttrib4fv(D.location,z);break;default:i.vertexAttrib1fv(D.location,z)}}}}y()}function L(){T();for(let M in n){let S=n[M];for(let Z in S){let Q=S[Z];for(let q in Q)h(Q[q].object),delete Q[q];delete S[Z]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let S=n[M.id];for(let Z in S){let Q=S[Z];for(let q in Q)h(Q[q].object),delete Q[q];delete S[Z]}delete n[M.id]}function E(M){for(let S in n){let Z=n[S];if(Z[M.id]===void 0)continue;let Q=Z[M.id];for(let q in Q)h(Q[q].object),delete Q[q];delete Z[M.id]}}function T(){H(),o=!0,s!==r&&(s=r,l(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:f,disableUnusedAttributes:y}}function l1(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function h1(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==pi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let T=E===No&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Xi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==bi&&!T)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:L,maxSamples:C}}function u1(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Vi,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!f)s?h(null):l();else{let y=s?0:n,x=y*4,b=p.clippingState||null;c.value=b,b=h(g,d,x,m);for(let L=0;L!==x;++L)b[L]=e[L];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,f=null;if(_!==0){if(f=c.value,g!==!0||f===null){let p=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<p)&&(f=new Float32Array(p));for(let x=0,b=m;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(f,b),f[b+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function f1(i){let t=new WeakMap;function e(o,a){return a===Mo?o.mapping=As:a===vl&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mo||a===vl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new nh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ya=class extends Xa{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,Ju=[.125,.215,.35,.446,.526,.582],Hr=20,tl=new Ya,ju=new kt,el=null,nl=0,il=0,rl=!1,Ur=(1+Math.sqrt(5))/2,ms=1/Ur,Qu=[new R(-Ur,ms,0),new R(Ur,ms,0),new R(-ms,0,Ur),new R(ms,0,Ur),new R(0,Ur,-ms),new R(0,Ur,ms),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Za=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(el,nl,il),this._renderer.xr.enabled=rl,t.scissorTest=!1,pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:No,format:pi,colorSpace:gr,depthBuffer:!1},r=t0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d1(s)),this._blurMaterial=p1(s,t,e)}return r}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,tl)}_sceneToCubeUV(t,e,n,r){let a=new bn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ju),h.toneMapping=fr,h.autoClear=!1;let m=new rn({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),g=new St(new je,m),_=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,_=!0):(m.color.copy(ju),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;pa(r,y*x,p>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===As||t.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;pa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,tl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qu[(r-s-1)%Qu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Hr-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):Hr;f>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Hr}`);let p=[],y=0;for(let E=0;E<Hr;++E){let T=E/_,H=Math.exp(-T*T/2);p.push(H),E===0?y+=H:E<f&&(y+=2*H)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let b=this._sizeLods[r],L=3*b*(r>x-bs?r-x+bs:0),C=4*(this._cubeSize-b);pa(e,L,C,3*b,2*b),c.setRenderTarget(e),c.render(u,tl)}};function d1(i){let t=[],e=[],n=[],r=i,s=i-bs+1+Ju.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-bs?c=Ju[o-i+bs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,y=new Float32Array(_*g*m),x=new Float32Array(f*g*m),b=new Float32Array(p*g*m);for(let C=0;C<m;C++){let E=C%3*2/3-1,T=C>2?0:-1,H=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];y.set(H,_*g*C),x.set(d,f*g*C);let M=[C,C,C,C,C,C];b.set(M,p*g*C)}let L=new Me;L.setAttribute("position",new Le(y,_)),L.setAttribute("uv",new Le(x,f)),L.setAttribute("faceIndex",new Le(b,p)),t.push(L),r>bs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function t0(i,t,e){let n=new qi(i,t,e);return n.texture.mapping=lc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function p1(i,t,e){let n=new Float32Array(Hr),r=new R(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function e0(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function n0(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function m1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Mo||c===vl,h=c===As||c===Rs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Za(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Za(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function g1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Da("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function _1(i,t,e,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let f=0,p=_.length;f<p;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let f=0,p=_.length;f<p;f++)t.update(_[f],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let x=0,b=y.length;x<b;x+=3){let L=y[x+0],C=y[x+1],E=y[x+2];d.push(L,C,C,E,E,L)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let L=x+0,C=x+1,E=x+2;d.push(L,C,C,E,E,L)}}else return;let f=new(Y0(d)?Wa:Ga)(d,1);f.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function y1(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),e.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,d*o,g),e.update(m,n,g))}function h(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];e.update(f,n,1)}function u(d,m,g,_){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y];for(let y=0;y<_.length;y++)e.update(p,n,_[y])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function M1(i,t,e){let n=new WeakMap,r=new ke;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let H=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let b=a.attributes.position.count*x,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*L*4*u),E=new za(C,b,L,u);E.type=bi,E.needsUpdate=!0;let T=x*4;for(let M=0;M<u;M++){let S=f[M],Z=p[M],Q=y[M],q=b*L*4*M;for(let at=0;at<S.count;at++){let ot=at*T;m===!0&&(r.fromBufferAttribute(S,at),C[q+ot+0]=r.x,C[q+ot+1]=r.y,C[q+ot+2]=r.z,C[q+ot+3]=0),g===!0&&(r.fromBufferAttribute(Z,at),C[q+ot+4]=r.x,C[q+ot+5]=r.y,C[q+ot+6]=r.z,C[q+ot+7]=0),_===!0&&(r.fromBufferAttribute(Q,at),C[q+ot+8]=r.x,C[q+ot+9]=r.y,C[q+ot+10]=r.z,C[q+ot+11]=Q.itemSize===4?r.w:1)}}d={count:u,texture:E,size:new Ut(b,L)},n.set(a,d),a.addEventListener("dispose",H)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function b1(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var $a=class extends qn{constructor(t,e,n,r,s,o,a,c,l,h=Es){if(h!==Es&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Br),n===void 0&&h===Ps&&(n=Cs),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:An,this.minFilter=c!==void 0?c:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},J0=new qn,i0=new $a(1,1),j0=new za,Q0=new th,tf=new qa,r0=[],s0=[],o0=new Float32Array(16),a0=new Float32Array(9),c0=new Float32Array(4);function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=r0[r];if(s===void 0&&(s=new Float32Array(r),r0[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function gn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function uc(i,t){let e=s0[t];e===void 0&&(e=new Int32Array(t),s0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function v1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function E1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2fv(this.addr,t),gn(e,t)}}function w1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;i.uniform3fv(this.addr,t),gn(e,t)}}function S1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4fv(this.addr,t),gn(e,t)}}function T1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;c0.set(n),i.uniformMatrix2fv(this.addr,!1,c0),gn(e,n)}}function A1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;a0.set(n),i.uniformMatrix3fv(this.addr,!1,a0),gn(e,n)}}function R1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;o0.set(n),i.uniformMatrix4fv(this.addr,!1,o0),gn(e,n)}}function C1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function P1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2iv(this.addr,t),gn(e,t)}}function I1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3iv(this.addr,t),gn(e,t)}}function L1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4iv(this.addr,t),gn(e,t)}}function D1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function U1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2uiv(this.addr,t),gn(e,t)}}function N1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3uiv(this.addr,t),gn(e,t)}}function H1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4uiv(this.addr,t),gn(e,t)}}function F1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(i0.compareFunction=q0,s=i0):s=J0,e.setTexture2D(t||s,r)}function O1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Q0,r)}function B1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||tf,r)}function k1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||j0,r)}function z1(i){switch(i){case 5126:return v1;case 35664:return E1;case 35665:return w1;case 35666:return S1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return P1;case 35668:case 35672:return I1;case 35669:case 35673:return L1;case 5125:return D1;case 36294:return U1;case 36295:return N1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return k1}}function V1(i,t){i.uniform1fv(this.addr,t)}function G1(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function W1(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function X1(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function q1(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y1(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Z1(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $1(i,t){i.uniform1iv(this.addr,t)}function K1(i,t){i.uniform2iv(this.addr,t)}function J1(i,t){i.uniform3iv(this.addr,t)}function j1(i,t){i.uniform4iv(this.addr,t)}function Q1(i,t){i.uniform1uiv(this.addr,t)}function t_(i,t){i.uniform2uiv(this.addr,t)}function e_(i,t){i.uniform3uiv(this.addr,t)}function n_(i,t){i.uniform4uiv(this.addr,t)}function i_(i,t,e){let n=this.cache,r=t.length,s=uc(e,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||J0,s[o])}function r_(i,t,e){let n=this.cache,r=t.length,s=uc(e,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Q0,s[o])}function s_(i,t,e){let n=this.cache,r=t.length,s=uc(e,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||tf,s[o])}function o_(i,t,e){let n=this.cache,r=t.length,s=uc(e,r);mn(n,s)||(i.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||j0,s[o])}function a_(i){switch(i){case 5126:return V1;case 35664:return G1;case 35665:return W1;case 35666:return X1;case 35674:return q1;case 35675:return Y1;case 35676:return Z1;case 5124:case 35670:return $1;case 35667:case 35671:return K1;case 35668:case 35672:return J1;case 35669:case 35673:return j1;case 5125:return Q1;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return o_}}var ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=z1(e.type)}},rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a_(e.type)}},sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},sl=/(\w+)(\])?(\[|\.)?/g;function l0(i,t){i.seq.push(t),i.map[t.id]=t}function c_(i,t,e){let n=i.name,r=n.length;for(sl.lastIndex=0;;){let s=sl.exec(n),o=sl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){l0(e,l===void 0?new ih(a,i,t):new rh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new sh(a),l0(e,u)),e=u}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);c_(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function h0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var l_=37297,h_=0;function u_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function f_(i){let t=Ue.getPrimaries(Ue.workingColorSpace),e=Ue.getPrimaries(i),n;switch(t===e?n="":t===Fa&&e===Ha?n="LinearDisplayP3ToLinearSRGB":t===Ha&&e===Fa&&(n="LinearSRGBToLinearDisplayP3"),i){case gr:case hc:return[n,"LinearTransferOETF"];case an:case $h:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function u0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+u_(i.getShaderSource(t),o)}else return r}function d_(i,t){let e=f_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function p_(i,t){let e;switch(t){case wd:e="Linear";break;case Sd:e="Reinhard";break;case Td:e="Cineon";break;case Uo:e="ACESFilmic";break;case Rd:e="AgX";break;case Cd:e="Neutral";break;case Ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ma=new R;function m_(){Ue.getLuminanceCoefficients(ma);let i=ma.x.toFixed(4),t=ma.y.toFixed(4),e=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function __(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fo(i){return i!==""}function f0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function d0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x_=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(i){return i.replace(x_,b_)}var M_=new Map;function b_(i,t){let e=de[t];if(e===void 0){let n=M_.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oh(e)}var v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p0(i){return i.replace(v_,E_)}function E_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function m0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function w_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===N0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function S_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case lc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Rs&&(t="ENVMAP_MODE_REFRACTION"),t}function A_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case kh:t="ENVMAP_BLENDING_MIX";break;case Ed:t="ENVMAP_BLENDING_ADD";break}return t}function R_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function C_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=w_(e),l=S_(e),h=T_(e),u=A_(e),d=R_(e),m=g_(e),g=__(s),_=r.createProgram(),f,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fo).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(f=[m0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[m0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fr?"#define TONE_MAPPING":"",e.toneMapping!==fr?de.tonemapping_pars_fragment:"",e.toneMapping!==fr?p_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,d_("linearToOutputTexel",e.outputColorSpace),m_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fo).join(`
`)),o=oh(o),o=f0(o,e),o=d0(o,e),a=oh(a),a=f0(a,e),a=d0(a,e),o=p0(o),a=p0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=y+f+o,b=y+p+a,L=h0(r,r.VERTEX_SHADER,x),C=h0(r,r.FRAGMENT_SHADER,b);r.attachShader(_,L),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(S){if(i.debug.checkShaderErrors){let Z=r.getProgramInfoLog(_).trim(),Q=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(C).trim(),at=!0,ot=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,C);else{let pt=u0(r,L,"vertex"),D=u0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+Z+`
`+pt+`
`+D)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Q===""||q==="")&&(ot=!1);ot&&(S.diagnostics={runnable:at,programLog:Z,vertexShader:{log:Q,prefix:f},fragmentShader:{log:q,prefix:p}})}r.deleteShader(L),r.deleteShader(C),T=new Ss(r,_),H=y_(r,_)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let H;this.getAttributes=function(){return H===void 0&&E(this),H};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,l_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}var P_=0,ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ch(t),e.set(t,n)),n}},ch=class{constructor(t){this.id=P_++,this.code=t,this.usedTimes=0}};function I_(i,t,e,n,r,s,o){let a=new Va,c=new ah,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,S,Z,Q,q){let at=Q.fog,ot=q.geometry,pt=M.isMeshStandardMaterial?Q.environment:null,D=(M.isMeshStandardMaterial?e:t).get(M.envMap||pt),et=D&&D.mapping===lc?D.image.height:null,z=_[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let K=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,W=K!==void 0?K.length:0,U=0;ot.morphAttributes.position!==void 0&&(U=1),ot.morphAttributes.normal!==void 0&&(U=2),ot.morphAttributes.color!==void 0&&(U=3);let A,P,k,X;if(z){let en=Mi[z];A=en.vertexShader,P=en.fragmentShader}else A=M.vertexShader,P=M.fragmentShader,c.update(M),k=c.getVertexShaderID(M),X=c.getFragmentShaderID(M);let B=i.getRenderTarget(),F=q.isInstancedMesh===!0,Y=q.isBatchedMesh===!0,j=!!M.map,V=!!M.matcap,w=!!D,st=!!M.aoMap,$=!!M.lightMap,G=!!M.bumpMap,J=!!M.normalMap,it=!!M.displacementMap,lt=!!M.emissiveMap,I=!!M.metalnessMap,v=!!M.roughnessMap,O=M.anisotropy>0,nt=M.clearcoat>0,ht=M.dispersion>0,rt=M.iridescence>0,Et=M.sheen>0,bt=M.transmission>0,mt=O&&!!M.anisotropyMap,It=nt&&!!M.clearcoatMap,gt=nt&&!!M.clearcoatNormalMap,At=nt&&!!M.clearcoatRoughnessMap,Wt=rt&&!!M.iridescenceMap,Ot=rt&&!!M.iridescenceThicknessMap,Rt=Et&&!!M.sheenColorMap,Ct=Et&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,ne=!!M.specularColorMap,ct=!!M.specularIntensityMap,Dt=bt&&!!M.transmissionMap,vt=bt&&!!M.thicknessMap,Tt=!!M.gradientMap,qt=!!M.alphaMap,$t=M.alphaTest>0,fe=!!M.alphaHash,We=!!M.extensions,tn=fr;M.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(tn=i.toneMapping);let _e={shaderID:z,shaderType:M.type,shaderName:M.name,vertexShader:A,fragmentShader:P,defines:M.defines,customVertexShaderID:k,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Y,batchingColor:Y&&q._colorsTexture!==null,instancing:F,instancingColor:F&&q.instanceColor!==null,instancingMorph:F&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:gr,alphaToCoverage:!!M.alphaToCoverage,map:j,matcap:V,envMap:w,envMapMode:w&&D.mapping,envMapCubeUVHeight:et,aoMap:st,lightMap:$,bumpMap:G,normalMap:J,displacementMap:m&&it,emissiveMap:lt,normalMapObjectSpace:J&&M.normalMapType===Dd,normalMapTangentSpace:J&&M.normalMapType===Zh,metalnessMap:I,roughnessMap:v,anisotropy:O,anisotropyMap:mt,clearcoat:nt,clearcoatMap:It,clearcoatNormalMap:gt,clearcoatRoughnessMap:At,dispersion:ht,iridescence:rt,iridescenceMap:Wt,iridescenceThicknessMap:Ot,sheen:Et,sheenColorMap:Rt,sheenRoughnessMap:Ct,specularMap:Xt,specularColorMap:ne,specularIntensityMap:ct,transmission:bt,transmissionMap:Dt,thicknessMap:vt,gradientMap:Tt,opaque:M.transparent===!1&&M.blending===vi&&M.alphaToCoverage===!1,alphaMap:qt,alphaTest:$t,alphaHash:fe,combine:M.combine,mapUv:j&&f(M.map.channel),aoMapUv:st&&f(M.aoMap.channel),lightMapUv:$&&f(M.lightMap.channel),bumpMapUv:G&&f(M.bumpMap.channel),normalMapUv:J&&f(M.normalMap.channel),displacementMapUv:it&&f(M.displacementMap.channel),emissiveMapUv:lt&&f(M.emissiveMap.channel),metalnessMapUv:I&&f(M.metalnessMap.channel),roughnessMapUv:v&&f(M.roughnessMap.channel),anisotropyMapUv:mt&&f(M.anisotropyMap.channel),clearcoatMapUv:It&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:gt&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&f(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&f(M.sheenRoughnessMap.channel),specularMapUv:Xt&&f(M.specularMap.channel),specularColorMapUv:ne&&f(M.specularColorMap.channel),specularIntensityMapUv:ct&&f(M.specularIntensityMap.channel),transmissionMapUv:Dt&&f(M.transmissionMap.channel),thicknessMapUv:vt&&f(M.thicknessMap.channel),alphaMapUv:qt&&f(M.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(J||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ot.attributes.uv&&(j||qt),fog:!!at,useFog:M.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:U,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:tn,decodeVideoTexture:j&&M.map.isVideoTexture===!0&&Ue.getTransfer(M.map.colorSpace)===Ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ie,flipSided:M.side===Xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:We&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&M.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function y(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let Z in M.defines)S.push(Z),S.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(x(S,M),b(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function b(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function L(M){let S=_[M.type],Z;if(S){let Q=Mi[S];Z=bp.clone(Q.uniforms)}else Z=M.uniforms;return Z}function C(M,S){let Z;for(let Q=0,q=h.length;Q<q;Q++){let at=h[Q];if(at.cacheKey===S){Z=at,++Z.usedTimes;break}}return Z===void 0&&(Z=new C_(i,S,M,s),h.push(Z)),Z}function E(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function H(){c.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:L,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:H}}function L_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function D_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function g0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,d,m,g,_,f){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),t++,p}function a(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function c(u,d,m,g,_,f){let p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||D_),n.length>1&&n.sort(d||g0),r.length>1&&r.sort(d||g0)}function h(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function U_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new _0,i.set(n,[o])):r>=s.length?(o=new _0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function N_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new kt};break;case"SpotLight":e={position:new R,direction:new R,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function H_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var F_=0;function O_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B_(i){let t=new N_,e=H_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let r=new R,s=new ce,o=new ce;function a(l){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,y=0,x=0,b=0,L=0,C=0,E=0;l.sort(O_);for(let H=0,M=l.length;H<M;H++){let S=l[H],Z=S.color,Q=S.intensity,q=S.distance,at=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=Z.r*Q,u+=Z.g*Q,d+=Z.b*Q;else if(S.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(S.sh.coefficients[ot],Q);E++}else if(S.isDirectionalLight){let ot=t.get(S);if(ot.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let pt=S.shadow,D=e.get(S);D.shadowIntensity=pt.intensity,D.shadowBias=pt.bias,D.shadowNormalBias=pt.normalBias,D.shadowRadius=pt.radius,D.shadowMapSize=pt.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=S.shadow.matrix,y++}n.directional[m]=ot,m++}else if(S.isSpotLight){let ot=t.get(S);ot.position.setFromMatrixPosition(S.matrixWorld),ot.color.copy(Z).multiplyScalar(Q),ot.distance=q,ot.coneCos=Math.cos(S.angle),ot.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),ot.decay=S.decay,n.spot[_]=ot;let pt=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,pt.updateMatrices(S),S.castShadow&&C++),n.spotLightMatrix[_]=pt.matrix,S.castShadow){let D=e.get(S);D.shadowIntensity=pt.intensity,D.shadowBias=pt.bias,D.shadowNormalBias=pt.normalBias,D.shadowRadius=pt.radius,D.shadowMapSize=pt.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=at,b++}_++}else if(S.isRectAreaLight){let ot=t.get(S);ot.color.copy(Z).multiplyScalar(Q),ot.halfWidth.set(S.width*.5,0,0),ot.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=ot,f++}else if(S.isPointLight){let ot=t.get(S);if(ot.color.copy(S.color).multiplyScalar(S.intensity),ot.distance=S.distance,ot.decay=S.decay,S.castShadow){let pt=S.shadow,D=e.get(S);D.shadowIntensity=pt.intensity,D.shadowBias=pt.bias,D.shadowNormalBias=pt.normalBias,D.shadowRadius=pt.radius,D.shadowMapSize=pt.mapSize,D.shadowCameraNear=pt.camera.near,D.shadowCameraFar=pt.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=at,n.pointShadowMatrix[g]=S.shadow.matrix,x++}n.point[g]=ot,g++}else if(S.isHemisphereLight){let ot=t.get(S);ot.skyColor.copy(S.color).multiplyScalar(Q),ot.groundColor.copy(S.groundColor).multiplyScalar(Q),n.hemi[p]=ot,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Yt.LTC_FLOAT_1,n.rectAreaLTC2=Yt.LTC_FLOAT_2):(n.rectAreaLTC1=Yt.LTC_HALF_1,n.rectAreaLTC2=Yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==m||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==f||T.hemiLength!==p||T.numDirectionalShadows!==y||T.numPointShadows!==x||T.numSpotShadows!==b||T.numSpotMaps!==L||T.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,T.directionalLength=m,T.pointLength=g,T.spotLength=_,T.rectAreaLength=f,T.hemiLength=p,T.numDirectionalShadows=y,T.numPointShadows=x,T.numSpotShadows=b,T.numSpotMaps=L,T.numLightProbes=E,n.version=F_++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0,f=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let x=l[p];if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),u++}else if(x.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(f),m++}else if(x.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),o.identity(),s.copy(x.matrixWorld),s.premultiply(f),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function y0(i){let t=new B_(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function k_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new y0(i),t.set(r,[a])):s>=o.length?(a=new y0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var lh=class extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hh=class extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`;function G_(i,t,e){let n=new wo,r=new Ut,s=new Ut,o=new ke,a=new lh({depthPacking:Ld}),c=new hh,l={},h=e.maxTextureSize,u={[Dn]:Xn,[Xn]:Dn,[Ie]:Ie},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:z_,fragmentShader:V_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new St(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let p=this.type;this.render=function(C,E,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;let H=i.getRenderTarget(),M=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(ur),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let Q=p!==zi&&this.type===zi,q=p===zi&&this.type!==zi;for(let at=0,ot=C.length;at<ot;at++){let pt=C[at],D=pt.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);let et=D.getFrameExtents();if(r.multiply(et),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/et.x),r.x=s.x*et.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/et.y),r.y=s.y*et.y,D.mapSize.y=s.y)),D.map===null||Q===!0||q===!0){let K=this.type!==zi?{minFilter:An,magFilter:An}:{};D.map!==null&&D.map.dispose(),D.map=new qi(r.x,r.y,K),D.map.texture.name=pt.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let z=D.getViewportCount();for(let K=0;K<z;K++){let W=D.getViewport(K);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),Z.viewport(o),D.updateMatrices(pt,K),n=D.getFrustum(),b(E,T,D.camera,pt,this.type)}D.isPointLightShadow!==!0&&this.type===zi&&y(D,T),D.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(H,M,S)};function y(C,E){let T=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(E,null,T,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(E,null,T,m,_,null)}function x(C,E,T,H){let M=null,S=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(S!==void 0)M=S;else if(M=T.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let Z=M.uuid,Q=E.uuid,q=l[Z];q===void 0&&(q={},l[Z]=q);let at=q[Q];at===void 0&&(at=M.clone(),q[Q]=at,E.addEventListener("dispose",L)),M=at}if(M.visible=E.visible,M.wireframe=E.wireframe,H===zi?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let Z=i.properties.get(M);Z.light=T}return M}function b(C,E,T,H,M){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===zi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);let Q=t.update(C),q=C.material;if(Array.isArray(q)){let at=Q.groups;for(let ot=0,pt=at.length;ot<pt;ot++){let D=at[ot],et=q[D.materialIndex];if(et&&et.visible){let z=x(C,et,H,M);C.onBeforeShadow(i,C,E,T,Q,z,D),i.renderBufferDirect(T,null,Q,z,C,D),C.onAfterShadow(i,C,E,T,Q,z,D)}}}else if(q.visible){let at=x(C,q,H,M);C.onBeforeShadow(i,C,E,T,Q,at,null),i.renderBufferDirect(T,null,Q,at,C,null),C.onAfterShadow(i,C,E,T,Q,at,null)}}let Z=C.children;for(let Q=0,q=Z.length;Q<q;Q++)b(Z[Q],E,T,H,M)}function L(C){C.target.removeEventListener("dispose",L);for(let T in l){let H=l[T],M=C.target.uuid;M in H&&(H[M].dispose(),delete H[M])}}}var W_={[ml]:gl,[_l]:Ml,[yl]:bl,[Ts]:xl,[gl]:ml,[Ml]:_l,[bl]:yl,[xl]:Ts};function X_(i){function t(){let ct=!1,Dt=new ke,vt=null,Tt=new ke(0,0,0,0);return{setMask:function(qt){vt!==qt&&!ct&&(i.colorMask(qt,qt,qt,qt),vt=qt)},setLocked:function(qt){ct=qt},setClear:function(qt,$t,fe,We,tn){tn===!0&&(qt*=We,$t*=We,fe*=We),Dt.set(qt,$t,fe,We),Tt.equals(Dt)===!1&&(i.clearColor(qt,$t,fe,We),Tt.copy(Dt))},reset:function(){ct=!1,vt=null,Tt.set(-1,0,0,0)}}}function e(){let ct=!1,Dt=!1,vt=null,Tt=null,qt=null;return{setReversed:function($t){Dt=$t},setTest:function($t){$t?k(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function($t){vt!==$t&&!ct&&(i.depthMask($t),vt=$t)},setFunc:function($t){if(Dt&&($t=W_[$t]),Tt!==$t){switch($t){case ml:i.depthFunc(i.NEVER);break;case gl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case bl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=$t}},setLocked:function($t){ct=$t},setClear:function($t){qt!==$t&&(i.clearDepth($t),qt=$t)},reset:function(){ct=!1,vt=null,Tt=null,qt=null}}}function n(){let ct=!1,Dt=null,vt=null,Tt=null,qt=null,$t=null,fe=null,We=null,tn=null;return{setTest:function(_e){ct||(_e?k(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(_e){Dt!==_e&&!ct&&(i.stencilMask(_e),Dt=_e)},setFunc:function(_e,en,Wn){(vt!==_e||Tt!==en||qt!==Wn)&&(i.stencilFunc(_e,en,Wn),vt=_e,Tt=en,qt=Wn)},setOp:function(_e,en,Wn){($t!==_e||fe!==en||We!==Wn)&&(i.stencilOp(_e,en,Wn),$t=_e,fe=en,We=Wn)},setLocked:function(_e){ct=_e},setClear:function(_e){tn!==_e&&(i.clearStencil(_e),tn=_e)},reset:function(){ct=!1,Dt=null,vt=null,Tt=null,qt=null,$t=null,fe=null,We=null,tn=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,x=null,b=null,L=null,C=new kt(0,0,0),E=0,T=!1,H=null,M=null,S=null,Z=null,Q=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),at=!1,ot=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(pt)[1]),at=ot>=1):pt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),at=ot>=2);let D=null,et={},z=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),W=new ke().fromArray(z),U=new ke().fromArray(K);function A(ct,Dt,vt,Tt){let qt=new Uint8Array(4),$t=i.createTexture();i.bindTexture(ct,$t),i.texParameteri(ct,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(ct,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<vt;fe++)ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,qt):i.texImage2D(Dt+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qt);return $t}let P={};P[i.TEXTURE_2D]=A(i.TEXTURE_2D,i.TEXTURE_2D,1),P[i.TEXTURE_CUBE_MAP]=A(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[i.TEXTURE_2D_ARRAY]=A(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),P[i.TEXTURE_3D]=A(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),k(i.DEPTH_TEST),s.setFunc(Ts),$(!1),G(Su),k(i.CULL_FACE),w(ur);function k(ct){l[ct]!==!0&&(i.enable(ct),l[ct]=!0)}function X(ct){l[ct]!==!1&&(i.disable(ct),l[ct]=!1)}function B(ct,Dt){return h[ct]!==Dt?(i.bindFramebuffer(ct,Dt),h[ct]=Dt,ct===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Dt),ct===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function F(ct,Dt){let vt=d,Tt=!1;if(ct){vt=u.get(Dt),vt===void 0&&(vt=[],u.set(Dt,vt));let qt=ct.textures;if(vt.length!==qt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,fe=qt.length;$t<fe;$t++)vt[$t]=i.COLOR_ATTACHMENT0+$t;vt.length=qt.length,Tt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(vt)}function Y(ct){return m!==ct?(i.useProgram(ct),m=ct,!0):!1}let j={[Nr]:i.FUNC_ADD,[od]:i.FUNC_SUBTRACT,[ad]:i.FUNC_REVERSE_SUBTRACT};j[cd]=i.MIN,j[ld]=i.MAX;let V={[hd]:i.ZERO,[ud]:i.ONE,[fd]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[yd]:i.SRC_ALPHA_SATURATE,[gd]:i.DST_COLOR,[pd]:i.DST_ALPHA,[dd]:i.ONE_MINUS_SRC_COLOR,[pl]:i.ONE_MINUS_SRC_ALPHA,[_d]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[xd]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[bd]:i.CONSTANT_ALPHA,[vd]:i.ONE_MINUS_CONSTANT_ALPHA};function w(ct,Dt,vt,Tt,qt,$t,fe,We,tn,_e){if(ct===ur){g===!0&&(X(i.BLEND),g=!1);return}if(g===!1&&(k(i.BLEND),g=!0),ct!==sd){if(ct!==_||_e!==T){if((f!==Nr||x!==Nr)&&(i.blendEquation(i.FUNC_ADD),f=Nr,x=Nr),_e)switch(ct){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ct);break}else switch(ct){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ct);break}p=null,y=null,b=null,L=null,C.set(0,0,0),E=0,_=ct,T=_e}return}qt=qt||Dt,$t=$t||vt,fe=fe||Tt,(Dt!==f||qt!==x)&&(i.blendEquationSeparate(j[Dt],j[qt]),f=Dt,x=qt),(vt!==p||Tt!==y||$t!==b||fe!==L)&&(i.blendFuncSeparate(V[vt],V[Tt],V[$t],V[fe]),p=vt,y=Tt,b=$t,L=fe),(We.equals(C)===!1||tn!==E)&&(i.blendColor(We.r,We.g,We.b,tn),C.copy(We),E=tn),_=ct,T=!1}function st(ct,Dt){ct.side===Ie?X(i.CULL_FACE):k(i.CULL_FACE);let vt=ct.side===Xn;Dt&&(vt=!vt),$(vt),ct.blending===vi&&ct.transparent===!1?w(ur):w(ct.blending,ct.blendEquation,ct.blendSrc,ct.blendDst,ct.blendEquationAlpha,ct.blendSrcAlpha,ct.blendDstAlpha,ct.blendColor,ct.blendAlpha,ct.premultipliedAlpha),s.setFunc(ct.depthFunc),s.setTest(ct.depthTest),s.setMask(ct.depthWrite),r.setMask(ct.colorWrite);let Tt=ct.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(ct.stencilWriteMask),o.setFunc(ct.stencilFunc,ct.stencilRef,ct.stencilFuncMask),o.setOp(ct.stencilFail,ct.stencilZFail,ct.stencilZPass)),it(ct.polygonOffset,ct.polygonOffsetFactor,ct.polygonOffsetUnits),ct.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(ct){H!==ct&&(ct?i.frontFace(i.CW):i.frontFace(i.CCW),H=ct)}function G(ct){ct!==nd?(k(i.CULL_FACE),ct!==M&&(ct===Su?i.cullFace(i.BACK):ct===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),M=ct}function J(ct){ct!==S&&(at&&i.lineWidth(ct),S=ct)}function it(ct,Dt,vt){ct?(k(i.POLYGON_OFFSET_FILL),(Z!==Dt||Q!==vt)&&(i.polygonOffset(Dt,vt),Z=Dt,Q=vt)):X(i.POLYGON_OFFSET_FILL)}function lt(ct){ct?k(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function I(ct){ct===void 0&&(ct=i.TEXTURE0+q-1),D!==ct&&(i.activeTexture(ct),D=ct)}function v(ct,Dt,vt){vt===void 0&&(D===null?vt=i.TEXTURE0+q-1:vt=D);let Tt=et[vt];Tt===void 0&&(Tt={type:void 0,texture:void 0},et[vt]=Tt),(Tt.type!==ct||Tt.texture!==Dt)&&(D!==vt&&(i.activeTexture(vt),D=vt),i.bindTexture(ct,Dt||P[ct]),Tt.type=ct,Tt.texture=Dt)}function O(){let ct=et[D];ct!==void 0&&ct.type!==void 0&&(i.bindTexture(ct.type,null),ct.type=void 0,ct.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function It(){try{i.texStorage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Ot(ct){W.equals(ct)===!1&&(i.scissor(ct.x,ct.y,ct.z,ct.w),W.copy(ct))}function Rt(ct){U.equals(ct)===!1&&(i.viewport(ct.x,ct.y,ct.z,ct.w),U.copy(ct))}function Ct(ct,Dt){let vt=c.get(Dt);vt===void 0&&(vt=new WeakMap,c.set(Dt,vt));let Tt=vt.get(ct);Tt===void 0&&(Tt=i.getUniformBlockIndex(Dt,ct.name),vt.set(ct,Tt))}function Xt(ct,Dt){let Tt=c.get(Dt).get(ct);a.get(Dt)!==Tt&&(i.uniformBlockBinding(Dt,Tt,ct.__bindingPointIndex),a.set(Dt,Tt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},D=null,et={},h={},u=new WeakMap,d=[],m=null,g=!1,_=null,f=null,p=null,y=null,x=null,b=null,L=null,C=new kt(0,0,0),E=0,T=!1,H=null,M=null,S=null,Z=null,Q=null,W.set(0,0,i.canvas.width,i.canvas.height),U.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:k,disable:X,bindFramebuffer:B,drawBuffers:F,useProgram:Y,setBlending:w,setMaterial:st,setFlipSided:$,setCullFace:G,setLineWidth:J,setPolygonOffset:it,setScissorTest:lt,activeTexture:I,bindTexture:v,unbindTexture:O,compressedTexImage2D:nt,compressedTexImage3D:ht,texImage2D:At,texImage3D:Wt,updateUBOMapping:Ct,uniformBlockBinding:Xt,texStorage2D:It,texStorage3D:gt,texSubImage2D:rt,texSubImage3D:Et,compressedTexSubImage2D:bt,compressedTexSubImage3D:mt,scissor:Ot,viewport:Rt,reset:ne}}function x0(i,t,e,n){let r=q_(n);switch(e){case k0:return i*t;case V0:return i*t;case G0:return i*t*2;case Wh:return i*t/r.components*r.byteLength;case Xh:return i*t/r.components*r.byteLength;case W0:return i*t*2/r.components*r.byteLength;case qh:return i*t*2/r.components*r.byteLength;case z0:return i*t*3/r.components*r.byteLength;case pi:return i*t*4/r.components*r.byteLength;case Yh:return i*t*4/r.components*r.byteLength;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:case Al:return Math.max(i,16)*Math.max(t,8)/4;case wl:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case La:case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16;case X0:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function q_(i){switch(i){case Xi:case F0:return{byteLength:1,components:1};case bo:case O0:case No:return{byteLength:2,components:1};case Vh:case Gh:return{byteLength:2,components:4};case Br:case zh:case bi:return{byteLength:4,components:1};case B0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Y_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,v){return m?new OffscreenCanvas(I,v):Ba("canvas")}function _(I,v,O){let nt=1,ht=lt(I);if((ht.width>O||ht.height>O)&&(nt=O/Math.max(ht.width,ht.height)),nt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let rt=Math.floor(nt*ht.width),Et=Math.floor(nt*ht.height);u===void 0&&(u=g(rt,Et));let bt=v?g(rt,Et):u;return bt.width=rt,bt.height=Et,bt.getContext("2d").drawImage(I,0,0,rt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Et+")."),bt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function f(I){return I.generateMipmaps&&I.minFilter!==An&&I.minFilter!==fi}function p(I){i.generateMipmap(I)}function y(I,v,O,nt,ht=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let rt=v;if(v===i.RED&&(O===i.FLOAT&&(rt=i.R32F),O===i.HALF_FLOAT&&(rt=i.R16F),O===i.UNSIGNED_BYTE&&(rt=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.R8UI),O===i.UNSIGNED_SHORT&&(rt=i.R16UI),O===i.UNSIGNED_INT&&(rt=i.R32UI),O===i.BYTE&&(rt=i.R8I),O===i.SHORT&&(rt=i.R16I),O===i.INT&&(rt=i.R32I)),v===i.RG&&(O===i.FLOAT&&(rt=i.RG32F),O===i.HALF_FLOAT&&(rt=i.RG16F),O===i.UNSIGNED_BYTE&&(rt=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.RG8UI),O===i.UNSIGNED_SHORT&&(rt=i.RG16UI),O===i.UNSIGNED_INT&&(rt=i.RG32UI),O===i.BYTE&&(rt=i.RG8I),O===i.SHORT&&(rt=i.RG16I),O===i.INT&&(rt=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),O===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),O===i.UNSIGNED_INT&&(rt=i.RGB32UI),O===i.BYTE&&(rt=i.RGB8I),O===i.SHORT&&(rt=i.RGB16I),O===i.INT&&(rt=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),O===i.UNSIGNED_INT&&(rt=i.RGBA32UI),O===i.BYTE&&(rt=i.RGBA8I),O===i.SHORT&&(rt=i.RGBA16I),O===i.INT&&(rt=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),v===i.RGBA){let Et=ht?Na:Ue.getTransfer(nt);O===i.FLOAT&&(rt=i.RGBA32F),O===i.HALF_FLOAT&&(rt=i.RGBA16F),O===i.UNSIGNED_BYTE&&(rt=Et===Ye?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function x(I,v){let O;return I?v===null||v===Br||v===Cs?O=i.DEPTH24_STENCIL8:v===bi?O=i.DEPTH32F_STENCIL8:v===bo&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Br||v===Cs?O=i.DEPTH_COMPONENT24:v===bi?O=i.DEPTH_COMPONENT32F:v===bo&&(O=i.DEPTH_COMPONENT16),O}function b(I,v){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==An&&I.minFilter!==fi?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function L(I){let v=I.target;v.removeEventListener("dispose",L),E(v),v.isVideoTexture&&h.delete(v)}function C(I){let v=I.target;v.removeEventListener("dispose",C),H(v)}function E(I){let v=n.get(I);if(v.__webglInit===void 0)return;let O=I.source,nt=d.get(O);if(nt){let ht=nt[v.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&T(I),Object.keys(nt).length===0&&d.delete(O)}n.remove(I)}function T(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let O=I.source,nt=d.get(O);delete nt[v.__cacheKey],o.memory.textures--}function H(I){let v=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let ht=0;ht<v.__webglFramebuffer[nt].length;ht++)i.deleteFramebuffer(v.__webglFramebuffer[nt][ht]);else i.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[nt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=I.textures;for(let nt=0,ht=O.length;nt<ht;nt++){let rt=n.get(O[nt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(O[nt])}n.remove(I)}let M=0;function S(){M=0}function Z(){let I=M;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),M+=1,I}function Q(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function q(I,v){let O=n.get(I);if(I.isVideoTexture&&J(I),I.isRenderTargetTexture===!1&&I.version>0&&O.__version!==I.version){let nt=I.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(O,I,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function at(I,v){let O=n.get(I);if(I.version>0&&O.__version!==I.version){U(O,I,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function ot(I,v){let O=n.get(I);if(I.version>0&&O.__version!==I.version){U(O,I,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function pt(I,v){let O=n.get(I);if(I.version>0&&O.__version!==I.version){A(O,I,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let D={[Or]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},et={[An]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[$o]:i.NEAREST_MIPMAP_LINEAR,[fi]:i.LINEAR,[Ic]:i.LINEAR_MIPMAP_NEAREST,[Fr]:i.LINEAR_MIPMAP_LINEAR},z={[Ud]:i.NEVER,[kd]:i.ALWAYS,[Nd]:i.LESS,[q0]:i.LEQUAL,[Hd]:i.EQUAL,[Bd]:i.GEQUAL,[Fd]:i.GREATER,[Od]:i.NOTEQUAL};function K(I,v){if(v.type===bi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===fi||v.magFilter===Ic||v.magFilter===$o||v.magFilter===Fr||v.minFilter===fi||v.minFilter===Ic||v.minFilter===$o||v.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,D[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,D[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,D[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,et[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,z[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==$o&&v.minFilter!==Fr||v.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function W(I,v){let O=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",L));let nt=v.source,ht=d.get(nt);ht===void 0&&(ht={},d.set(nt,ht));let rt=Q(v);if(rt!==I.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ht[rt].usedTimes++;let Et=ht[I.__cacheKey];Et!==void 0&&(ht[I.__cacheKey].usedTimes--,Et.usedTimes===0&&T(v)),I.__cacheKey=rt,I.__webglTexture=ht[rt].texture}return O}function U(I,v,O){let nt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(nt=i.TEXTURE_3D);let ht=W(I,v),rt=v.source;e.bindTexture(nt,I.__webglTexture,i.TEXTURE0+O);let Et=n.get(rt);if(rt.version!==Et.__version||ht===!0){e.activeTexture(i.TEXTURE0+O);let bt=Ue.getPrimaries(Ue.workingColorSpace),mt=v.colorSpace===lr?null:Ue.getPrimaries(v.colorSpace),It=v.colorSpace===lr||bt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let gt=_(v.image,!1,r.maxTextureSize);gt=it(v,gt);let At=s.convert(v.format,v.colorSpace),Wt=s.convert(v.type),Ot=y(v.internalFormat,At,Wt,v.colorSpace,v.isVideoTexture);K(nt,v);let Rt,Ct=v.mipmaps,Xt=v.isVideoTexture!==!0,ne=Et.__version===void 0||ht===!0,ct=rt.dataReady,Dt=b(v,gt);if(v.isDepthTexture)Ot=x(v.format===Ps,v.type),ne&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Ot,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,gt.width,gt.height,0,At,Wt,null));else if(v.isDataTexture)if(Ct.length>0){Xt&&ne&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,Ct[0].width,Ct[0].height);for(let vt=0,Tt=Ct.length;vt<Tt;vt++)Rt=Ct[vt],Xt?ct&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,At,Wt,Rt.data):e.texImage2D(i.TEXTURE_2D,vt,Ot,Rt.width,Rt.height,0,At,Wt,Rt.data);v.generateMipmaps=!1}else Xt?(ne&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,gt.width,gt.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,At,Wt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,gt.width,gt.height,0,At,Wt,gt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,Ct[0].width,Ct[0].height,gt.depth);for(let vt=0,Tt=Ct.length;vt<Tt;vt++)if(Rt=Ct[vt],v.format!==pi)if(At!==null)if(Xt){if(ct)if(v.layerUpdates.size>0){let qt=x0(Rt.width,Rt.height,v.format,v.type);for(let $t of v.layerUpdates){let fe=Rt.data.subarray($t*qt/Rt.data.BYTES_PER_ELEMENT,($t+1)*qt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,$t,Rt.width,Rt.height,1,At,fe,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Rt.width,Rt.height,gt.depth,At,Rt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Ot,Rt.width,Rt.height,gt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Rt.width,Rt.height,gt.depth,At,Wt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Ot,Rt.width,Rt.height,gt.depth,0,At,Wt,Rt.data)}else{Xt&&ne&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,Ct[0].width,Ct[0].height);for(let vt=0,Tt=Ct.length;vt<Tt;vt++)Rt=Ct[vt],v.format!==pi?At!==null?Xt?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Ot,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?ct&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,At,Wt,Rt.data):e.texImage2D(i.TEXTURE_2D,vt,Ot,Rt.width,Rt.height,0,At,Wt,Rt.data)}else if(v.isDataArrayTexture)if(Xt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,gt.width,gt.height,gt.depth),ct)if(v.layerUpdates.size>0){let vt=x0(gt.width,gt.height,v.format,v.type);for(let Tt of v.layerUpdates){let qt=gt.data.subarray(Tt*vt/gt.data.BYTES_PER_ELEMENT,(Tt+1)*vt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,gt.width,gt.height,1,At,Wt,qt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,At,Wt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,gt.width,gt.height,gt.depth,0,At,Wt,gt.data);else if(v.isData3DTexture)Xt?(ne&&e.texStorage3D(i.TEXTURE_3D,Dt,Ot,gt.width,gt.height,gt.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,At,Wt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,gt.width,gt.height,gt.depth,0,At,Wt,gt.data);else if(v.isFramebufferTexture){if(ne)if(Xt)e.texStorage2D(i.TEXTURE_2D,Dt,Ot,gt.width,gt.height);else{let vt=gt.width,Tt=gt.height;for(let qt=0;qt<Dt;qt++)e.texImage2D(i.TEXTURE_2D,qt,Ot,vt,Tt,0,At,Wt,null),vt>>=1,Tt>>=1}}else if(Ct.length>0){if(Xt&&ne){let vt=lt(Ct[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,vt.width,vt.height)}for(let vt=0,Tt=Ct.length;vt<Tt;vt++)Rt=Ct[vt],Xt?ct&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,At,Wt,Rt):e.texImage2D(i.TEXTURE_2D,vt,Ot,At,Wt,Rt);v.generateMipmaps=!1}else if(Xt){if(ne){let vt=lt(gt);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,vt.width,vt.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Wt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,At,Wt,gt);f(v)&&p(nt),Et.__version=rt.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function A(I,v,O){if(v.image.length!==6)return;let nt=W(I,v),ht=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+O);let rt=n.get(ht);if(ht.version!==rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+O);let Et=Ue.getPrimaries(Ue.workingColorSpace),bt=v.colorSpace===lr?null:Ue.getPrimaries(v.colorSpace),mt=v.colorSpace===lr||Et===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let It=v.isCompressedTexture||v.image[0].isCompressedTexture,gt=v.image[0]&&v.image[0].isDataTexture,At=[];for(let Tt=0;Tt<6;Tt++)!It&&!gt?At[Tt]=_(v.image[Tt],!0,r.maxCubemapSize):At[Tt]=gt?v.image[Tt].image:v.image[Tt],At[Tt]=it(v,At[Tt]);let Wt=At[0],Ot=s.convert(v.format,v.colorSpace),Rt=s.convert(v.type),Ct=y(v.internalFormat,Ot,Rt,v.colorSpace),Xt=v.isVideoTexture!==!0,ne=rt.__version===void 0||nt===!0,ct=ht.dataReady,Dt=b(v,Wt);K(i.TEXTURE_CUBE_MAP,v);let vt;if(It){Xt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ct,Wt.width,Wt.height);for(let Tt=0;Tt<6;Tt++){vt=At[Tt].mipmaps;for(let qt=0;qt<vt.length;qt++){let $t=vt[qt];v.format!==pi?Ot!==null?Xt?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,qt,0,0,$t.width,$t.height,Ot,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,qt,Ct,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,qt,0,0,$t.width,$t.height,Ot,Rt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,qt,Ct,$t.width,$t.height,0,Ot,Rt,$t.data)}}}else{if(vt=v.mipmaps,Xt&&ne){vt.length>0&&Dt++;let Tt=lt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ct,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(gt){Xt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,At[Tt].width,At[Tt].height,Ot,Rt,At[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,At[Tt].width,At[Tt].height,0,Ot,Rt,At[Tt].data);for(let qt=0;qt<vt.length;qt++){let fe=vt[qt].image[Tt].image;Xt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,qt+1,0,0,fe.width,fe.height,Ot,Rt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,qt+1,Ct,fe.width,fe.height,0,Ot,Rt,fe.data)}}else{Xt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Ot,Rt,At[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,Ot,Rt,At[Tt]);for(let qt=0;qt<vt.length;qt++){let $t=vt[qt];Xt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,qt+1,0,0,Ot,Rt,$t.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,qt+1,Ct,Ot,Rt,$t.image[Tt])}}}f(v)&&p(i.TEXTURE_CUBE_MAP),rt.__version=ht.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function P(I,v,O,nt,ht,rt){let Et=s.convert(O.format,O.colorSpace),bt=s.convert(O.type),mt=y(O.internalFormat,Et,bt,O.colorSpace);if(!n.get(v).__hasExternalTextures){let gt=Math.max(1,v.width>>rt),At=Math.max(1,v.height>>rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,mt,gt,At,v.depth,0,Et,bt,null):e.texImage2D(ht,rt,mt,gt,At,0,Et,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),G(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ht,n.get(O).__webglTexture,0,$(v)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ht,n.get(O).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(I,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let nt=v.depthTexture,ht=nt&&nt.isDepthTexture?nt.type:null,rt=x(v.stencilBuffer,ht),Et=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=$(v);G(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,rt,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,rt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,I)}else{let nt=v.textures;for(let ht=0;ht<nt.length;ht++){let rt=nt[ht],Et=s.convert(rt.format,rt.colorSpace),bt=s.convert(rt.type),mt=y(rt.internalFormat,Et,bt,rt.colorSpace),It=$(v);O&&G(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,mt,v.width,v.height):G(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,mt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(I,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);let nt=n.get(v.depthTexture).__webglTexture,ht=$(v);if(v.depthTexture.format===Es)G(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(v.depthTexture.format===Ps)G(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function B(I){let v=n.get(I),O=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let nt=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),nt){let ht=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,nt.removeEventListener("dispose",ht)};nt.addEventListener("dispose",ht),v.__depthDisposeCallback=ht}v.__boundDepthTexture=nt}if(I.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");X(v.__webglFramebuffer,I)}else if(O){v.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[nt]),v.__webglDepthbuffer[nt]===void 0)v.__webglDepthbuffer[nt]=i.createRenderbuffer(),k(v.__webglDepthbuffer[nt],I,!1);else{let ht=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),k(v.__webglDepthbuffer,I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(I,v,O){let nt=n.get(I);v!==void 0&&P(nt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&B(I)}function Y(I){let v=I.texture,O=n.get(I),nt=n.get(v);I.addEventListener("dispose",C);let ht=I.textures,rt=I.isWebGLCubeRenderTarget===!0,Et=ht.length>1;if(Et||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=v.version,o.memory.textures++),rt){O.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[bt]=[];for(let mt=0;mt<v.mipmaps.length;mt++)O.__webglFramebuffer[bt][mt]=i.createFramebuffer()}else O.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let bt=0;bt<v.mipmaps.length;bt++)O.__webglFramebuffer[bt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let bt=0,mt=ht.length;bt<mt;bt++){let It=n.get(ht[bt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&G(I)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let bt=0;bt<ht.length;bt++){let mt=ht[bt];O.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[bt]);let It=s.convert(mt.format,mt.colorSpace),gt=s.convert(mt.type),At=y(mt.internalFormat,It,gt,mt.colorSpace,I.isXRRenderTarget===!0),Wt=$(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,At,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,O.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),k(O.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),K(i.TEXTURE_CUBE_MAP,v);for(let bt=0;bt<6;bt++)if(v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)P(O.__webglFramebuffer[bt][mt],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,mt);else P(O.__webglFramebuffer[bt],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);f(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let bt=0,mt=ht.length;bt<mt;bt++){let It=ht[bt],gt=n.get(It);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),K(i.TEXTURE_2D,It),P(O.__webglFramebuffer,I,It,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),f(It)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(bt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,nt.__webglTexture),K(bt,v),v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)P(O.__webglFramebuffer[mt],I,v,i.COLOR_ATTACHMENT0,bt,mt);else P(O.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,bt,0);f(v)&&p(bt),e.unbindTexture()}I.depthBuffer&&B(I)}function j(I){let v=I.textures;for(let O=0,nt=v.length;O<nt;O++){let ht=v[O];if(f(ht)){let rt=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(ht).__webglTexture;e.bindTexture(rt,Et),p(rt),e.unbindTexture()}}}let V=[],w=[];function st(I){if(I.samples>0){if(G(I)===!1){let v=I.textures,O=I.width,nt=I.height,ht=i.COLOR_BUFFER_BIT,rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(I),bt=v.length>1;if(bt)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);let It=n.get(v[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,O,nt,0,0,O,nt,ht,i.NEAREST),c===!0&&(V.length=0,w.length=0,V.push(i.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(V.push(rt),w.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);let It=n.get(v[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function $(I){return Math.min(r.maxSamples,I.samples)}function G(I){let v=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function J(I){let v=o.render.frame;h.get(I)!==v&&(h.set(I,v),I.update())}function it(I,v){let O=I.colorSpace,nt=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||O!==gr&&O!==lr&&(Ue.getTransfer(O)===Ye?(nt!==pi||ht!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function lt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=S,this.setTexture2D=q,this.setTexture2DArray=at,this.setTexture3D=ot,this.setTextureCube=pt,this.rebindTextures=F,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=P,this.useMultisampledRTT=G}function Z_(i,t){function e(n,r=lr){let s,o=Ue.getTransfer(r);if(n===Xi)return i.UNSIGNED_BYTE;if(n===Vh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===B0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===F0)return i.BYTE;if(n===O0)return i.SHORT;if(n===bo)return i.UNSIGNED_SHORT;if(n===zh)return i.INT;if(n===Br)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===No)return i.HALF_FLOAT;if(n===k0)return i.ALPHA;if(n===z0)return i.RGB;if(n===pi)return i.RGBA;if(n===V0)return i.LUMINANCE;if(n===G0)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===Wh)return i.RED;if(n===Xh)return i.RED_INTEGER;if(n===W0)return i.RG;if(n===qh)return i.RG_INTEGER;if(n===Yh)return i.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===Ia)if(o===Ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Sl||n===Tl||n===Al)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Pl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rl||n===Cl)return o===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Hl||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Wl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Il)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Xl||n===ql)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===La)return o===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===X0||n===Yl||n===Zl||n===$l)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===La)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var uh=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Zt=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$_={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let f=e.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`,fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new qn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:K_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dh=class extends dr{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=new fh,f=e.getContextAttributes(),p=null,y=null,x=[],b=[],L=new Ut,C=null,E=new bn;E.layers.enable(1),E.viewport=new ke;let T=new bn;T.layers.enable(2),T.viewport=new ke;let H=[E,T],M=new uh;M.layers.enable(1),M.layers.enable(2);let S=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let P=x[A];return P===void 0&&(P=new go,x[A]=P),P.getTargetRaySpace()},this.getControllerGrip=function(A){let P=x[A];return P===void 0&&(P=new go,x[A]=P),P.getGripSpace()},this.getHand=function(A){let P=x[A];return P===void 0&&(P=new go,x[A]=P),P.getHandSpace()};function Q(A){let P=b.indexOf(A.inputSource);if(P===-1)return;let k=x[P];k!==void 0&&(k.update(A.inputSource,A.frame,l||o),k.dispatchEvent({type:A.type,data:A.inputSource}))}function q(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",at);for(let A=0;A<x.length;A++){let P=b[A];P!==null&&(b[A]=null,x[A].disconnect(P))}S=null,Z=null,_.reset(),t.setRenderTarget(p),m=null,d=null,u=null,r=null,y=null,U.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){s=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){a=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(A){l=A},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(A){if(r=A,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",q),r.addEventListener("inputsourceschange",at),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){let P={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,P),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new qi(m.framebufferWidth,m.framebufferHeight,{format:pi,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let P=null,k=null,X=null;f.depth&&(X=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,P=f.stencil?Ps:Es,k=f.stencil?Cs:Br);let B={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(B),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new qi(d.textureWidth,d.textureHeight,{format:pi,type:Xi,depthTexture:new $a(d.textureWidth,d.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),U.setContext(r),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function at(A){for(let P=0;P<A.removed.length;P++){let k=A.removed[P],X=b.indexOf(k);X>=0&&(b[X]=null,x[X].disconnect(k))}for(let P=0;P<A.added.length;P++){let k=A.added[P],X=b.indexOf(k);if(X===-1){for(let F=0;F<x.length;F++)if(F>=b.length){b.push(k),X=F;break}else if(b[F]===null){b[F]=k,X=F;break}if(X===-1)break}let B=x[X];B&&B.connect(k)}}let ot=new R,pt=new R;function D(A,P,k){ot.setFromMatrixPosition(P.matrixWorld),pt.setFromMatrixPosition(k.matrixWorld);let X=ot.distanceTo(pt),B=P.projectionMatrix.elements,F=k.projectionMatrix.elements,Y=B[14]/(B[10]-1),j=B[14]/(B[10]+1),V=(B[9]+1)/B[5],w=(B[9]-1)/B[5],st=(B[8]-1)/B[0],$=(F[8]+1)/F[0],G=Y*st,J=Y*$,it=X/(-st+$),lt=it*-st;if(P.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(lt),A.translateZ(it),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),B[10]===-1)A.projectionMatrix.copy(P.projectionMatrix),A.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{let I=Y+it,v=j+it,O=G-lt,nt=J+(X-lt),ht=V*j/v*I,rt=w*j/v*I;A.projectionMatrix.makePerspective(O,nt,ht,rt,I,v),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}}function et(A,P){P===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(P.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(r===null)return;let P=A.near,k=A.far;_.texture!==null&&(_.depthNear>0&&(P=_.depthNear),_.depthFar>0&&(k=_.depthFar)),M.near=T.near=E.near=P,M.far=T.far=E.far=k,(S!==M.near||Z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,Z=M.far);let X=A.parent,B=M.cameras;et(M,X);for(let F=0;F<B.length;F++)et(B[F],X);B.length===2?D(M,E,T):M.projectionMatrix.copy(E.projectionMatrix),z(A,M,X)};function z(A,P,k){k===null?A.matrix.copy(P.matrixWorld):(A.matrix.copy(k.matrixWorld),A.matrix.invert(),A.matrix.multiply(P.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(P.projectionMatrix),A.projectionMatrixInverse.copy(P.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=vo*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(A){c=A,d!==null&&(d.fixedFoveation=A),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=A)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let K=null;function W(A,P){if(h=P.getViewerPose(l||o),g=P,h!==null){let k=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let X=!1;k.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let F=0;F<k.length;F++){let Y=k[F],j=null;if(m!==null)j=m.getViewport(Y);else{let w=u.getViewSubImage(d,Y);j=w.viewport,F===0&&(t.setRenderTargetTextures(y,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(y))}let V=H[F];V===void 0&&(V=new bn,V.layers.enable(F),V.viewport=new ke,H[F]=V),V.matrix.fromArray(Y.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Y.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(j.x,j.y,j.width,j.height),F===0&&(M.matrix.copy(V.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(V)}let B=r.enabledFeatures;if(B&&B.includes("depth-sensing")){let F=u.getDepthInformation(k[0]);F&&F.isValid&&F.texture&&_.init(t,F,r.renderState)}}for(let k=0;k<x.length;k++){let X=b[k],B=x[k];X!==null&&B!==void 0&&B.update(X,P,l||o)}K&&K(A,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),g=null}let U=new K0;U.setAnimationLoop(W),this.setAnimationLoop=function(A){K=A},this.dispose=function(){}}},Dr=new En,j_=new ce;function Q_(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,$0(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,y,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,y,x):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Xn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Xn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y=t.get(p),x=y.envMap,b=y.envMapRotation;x&&(f.envMap.value=x,Dr.copy(b),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),f.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Dr)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,y,x){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=x*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){let y=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ty(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){let b=x.program;n.uniformBlockBinding(y,b)}function l(y,x){let b=r[y.id];b===void 0&&(g(y),b=h(y),r[y.id]=b,y.addEventListener("dispose",f));let L=x.program;n.updateUBOMapping(y,L);let C=t.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function h(y){let x=u();y.__bindingPointIndex=x;let b=i.createBuffer(),L=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=r[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,E=b.length;C<E;C++){let T=Array.isArray(b[C])?b[C]:[b[C]];for(let H=0,M=T.length;H<M;H++){let S=T[H];if(m(S,C,H,L)===!0){let Z=S.__offset,Q=Array.isArray(S.value)?S.value:[S.value],q=0;for(let at=0;at<Q.length;at++){let ot=Q[at],pt=_(ot);typeof ot=="number"||typeof ot=="boolean"?(S.__data[0]=ot,i.bufferSubData(i.UNIFORM_BUFFER,Z+q,S.__data)):ot.isMatrix3?(S.__data[0]=ot.elements[0],S.__data[1]=ot.elements[1],S.__data[2]=ot.elements[2],S.__data[3]=0,S.__data[4]=ot.elements[3],S.__data[5]=ot.elements[4],S.__data[6]=ot.elements[5],S.__data[7]=0,S.__data[8]=ot.elements[6],S.__data[9]=ot.elements[7],S.__data[10]=ot.elements[8],S.__data[11]=0):(ot.toArray(S.__data,q),q+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,b,L){let C=y.value,E=x+"_"+b;if(L[E]===void 0)return typeof C=="number"||typeof C=="boolean"?L[E]=C:L[E]=C.clone(),!0;{let T=L[E];if(typeof C=="number"||typeof C=="boolean"){if(T!==C)return L[E]=C,!0}else if(T.equals(C)===!1)return T.copy(C),!0}return!1}function g(y){let x=y.uniforms,b=0,L=16;for(let E=0,T=x.length;E<T;E++){let H=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,S=H.length;M<S;M++){let Z=H[M],Q=Array.isArray(Z.value)?Z.value:[Z.value];for(let q=0,at=Q.length;q<at;q++){let ot=Q[q],pt=_(ot),D=b%L,et=D%pt.boundary,z=D+et;b+=et,z!==0&&L-z<pt.storage&&(b+=L-z),Z.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=pt.storage}}}let C=b%L;return C>0&&(b+=L-C),y.__size=b,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function f(y){let x=y.target;x.removeEventListener("dispose",f);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Ls=class{constructor(t={}){let{canvas:e=ip(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,f=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=fr,this.toneMappingExposure=1;let x=this,b=!1,L=0,C=0,E=null,T=-1,H=null,M=new ke,S=new ke,Z=null,Q=new kt(0),q=0,at=e.width,ot=e.height,pt=1,D=null,et=null,z=new ke(0,0,at,ot),K=new ke(0,0,at,ot),W=!1,U=new wo,A=!1,P=!1,k=new ce,X=new ce,B=new R,F=new ke,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function V(){return E===null?pt:1}let w=n;function st(N,ut){return e.getContext(N,ut)}try{let N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",$t,!1),w===null){let ut="webgl2";if(w=st(ut,N),w===null)throw st(ut)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let $,G,J,it,lt,I,v,O,nt,ht,rt,Et,bt,mt,It,gt,At,Wt,Ot,Rt,Ct,Xt,ne,ct;function Dt(){$=new g1(w),$.init(),Xt=new Z_(w,$),G=new h1(w,$,t,Xt),J=new X_(w),G.reverseDepthBuffer&&J.buffers.depth.setReversed(!0),it=new x1(w),lt=new L_,I=new Y_(w,$,J,lt,G,Xt,it),v=new f1(x),O=new m1(x),nt=new Tp(w),ne=new c1(w,nt),ht=new _1(w,nt,it,ne),rt=new b1(w,ht,nt,it),Ot=new M1(w,G,I),gt=new u1(lt),Et=new I_(x,v,O,$,G,ne,gt),bt=new Q_(x,lt),mt=new U_,It=new k_($),Wt=new a1(x,v,O,J,rt,d,c),At=new G_(x,rt,G),ct=new ty(w,it,G,J),Rt=new l1(w,$,it),Ct=new y1(w,$,it),it.programs=Et.programs,x.capabilities=G,x.extensions=$,x.properties=lt,x.renderLists=mt,x.shadowMap=At,x.state=J,x.info=it}Dt();let vt=new dh(x,w);this.xr=vt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let N=$.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=$.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(N){N!==void 0&&(pt=N,this.setSize(at,ot,!1))},this.getSize=function(N){return N.set(at,ot)},this.setSize=function(N,ut,yt=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=N,ot=ut,e.width=Math.floor(N*pt),e.height=Math.floor(ut*pt),yt===!0&&(e.style.width=N+"px",e.style.height=ut+"px"),this.setViewport(0,0,N,ut)},this.getDrawingBufferSize=function(N){return N.set(at*pt,ot*pt).floor()},this.setDrawingBufferSize=function(N,ut,yt){at=N,ot=ut,pt=yt,e.width=Math.floor(N*yt),e.height=Math.floor(ut*yt),this.setViewport(0,0,N,ut)},this.getCurrentViewport=function(N){return N.copy(M)},this.getViewport=function(N){return N.copy(z)},this.setViewport=function(N,ut,yt,Mt){N.isVector4?z.set(N.x,N.y,N.z,N.w):z.set(N,ut,yt,Mt),J.viewport(M.copy(z).multiplyScalar(pt).round())},this.getScissor=function(N){return N.copy(K)},this.setScissor=function(N,ut,yt,Mt){N.isVector4?K.set(N.x,N.y,N.z,N.w):K.set(N,ut,yt,Mt),J.scissor(S.copy(K).multiplyScalar(pt).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(N){J.setScissorTest(W=N)},this.setOpaqueSort=function(N){D=N},this.setTransparentSort=function(N){et=N},this.getClearColor=function(N){return N.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(N=!0,ut=!0,yt=!0){let Mt=0;if(N){let ft=!1;if(E!==null){let Bt=E.texture.format;ft=Bt===Yh||Bt===qh||Bt===Xh}if(ft){let Bt=E.texture.type,Vt=Bt===Xi||Bt===Br||Bt===bo||Bt===Cs||Bt===Vh||Bt===Gh,Jt=Wt.getClearColor(),Qt=Wt.getClearAlpha(),se=Jt.r,oe=Jt.g,ee=Jt.b;Vt?(m[0]=se,m[1]=oe,m[2]=ee,m[3]=Qt,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=se,g[1]=oe,g[2]=ee,g[3]=Qt,w.clearBufferiv(w.COLOR,0,g))}else Mt|=w.COLOR_BUFFER_BIT}ut&&(Mt|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),yt&&(Mt|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(Mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),mt.dispose(),It.dispose(),lt.dispose(),v.dispose(),O.dispose(),rt.dispose(),ne.dispose(),ct.dispose(),Et.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Di),vt.removeEventListener("sessionend",Vo),$n.stop()};function Tt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let N=it.autoReset,ut=At.enabled,yt=At.autoUpdate,Mt=At.needsUpdate,ft=At.type;Dt(),it.autoReset=N,At.enabled=ut,At.autoUpdate=yt,At.needsUpdate=Mt,At.type=ft}function $t(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function fe(N){let ut=N.target;ut.removeEventListener("dispose",fe),We(ut)}function We(N){tn(N),lt.remove(N)}function tn(N){let ut=lt.get(N).programs;ut!==void 0&&(ut.forEach(function(yt){Et.releaseProgram(yt)}),N.isShaderMaterial&&Et.releaseShaderCache(N))}this.renderBufferDirect=function(N,ut,yt,Mt,ft,Bt){ut===null&&(ut=Y);let Vt=ft.isMesh&&ft.matrixWorld.determinant()<0,Jt=wc(N,ut,yt,Mt,ft);J.setMaterial(Mt,Vt);let Qt=yt.index,se=1;if(Mt.wireframe===!0){if(Qt=ht.getWireframeAttribute(yt),Qt===void 0)return;se=2}let oe=yt.drawRange,ee=yt.attributes.position,ye=oe.start*se,He=(oe.start+oe.count)*se;Bt!==null&&(ye=Math.max(ye,Bt.start*se),He=Math.min(He,(Bt.start+Bt.count)*se)),Qt!==null?(ye=Math.max(ye,0),He=Math.min(He,Qt.count)):ee!=null&&(ye=Math.max(ye,0),He=Math.min(He,ee.count));let Xe=He-ye;if(Xe<0||Xe===1/0)return;ne.setup(ft,Mt,Jt,yt,Qt);let Re,Ae=Rt;if(Qt!==null&&(Re=nt.get(Qt),Ae=Ct,Ae.setIndex(Re)),ft.isMesh)Mt.wireframe===!0?(J.setLineWidth(Mt.wireframeLinewidth*V()),Ae.setMode(w.LINES)):Ae.setMode(w.TRIANGLES);else if(ft.isLine){let Kt=Mt.linewidth;Kt===void 0&&(Kt=1),J.setLineWidth(Kt*V()),ft.isLineSegments?Ae.setMode(w.LINES):ft.isLineLoop?Ae.setMode(w.LINE_LOOP):Ae.setMode(w.LINE_STRIP)}else ft.isPoints?Ae.setMode(w.POINTS):ft.isSprite&&Ae.setMode(w.TRIANGLES);if(ft.isBatchedMesh)if(ft._multiDrawInstances!==null)Ae.renderMultiDrawInstances(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount,ft._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Ae.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{let Kt=ft._multiDrawStarts,fn=ft._multiDrawCounts,Ce=ft._multiDrawCount,On=Qt?nt.get(Qt).bytesPerElement:1,nr=lt.get(Mt).currentProgram.getUniforms();for(let Tn=0;Tn<Ce;Tn++)nr.setValue(w,"_gl_DrawID",Tn),Ae.render(Kt[Tn]/On,fn[Tn])}else if(ft.isInstancedMesh)Ae.renderInstances(ye,Xe,ft.count);else if(yt.isInstancedBufferGeometry){let Kt=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,fn=Math.min(yt.instanceCount,Kt);Ae.renderInstances(ye,Xe,fn)}else Ae.render(ye,Xe)};function _e(N,ut,yt){N.transparent===!0&&N.side===Ie&&N.forceSinglePass===!1?(N.side=Xn,N.needsUpdate=!0,Kn(N,ut,yt),N.side=Dn,N.needsUpdate=!0,Kn(N,ut,yt),N.side=Ie):Kn(N,ut,yt)}this.compile=function(N,ut,yt=null){yt===null&&(yt=N),f=It.get(yt),f.init(ut),y.push(f),yt.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ut.layers)&&(f.pushLight(ft),ft.castShadow&&f.pushShadow(ft))}),N!==yt&&N.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ut.layers)&&(f.pushLight(ft),ft.castShadow&&f.pushShadow(ft))}),f.setupLights();let Mt=new Set;return N.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;let Bt=ft.material;if(Bt)if(Array.isArray(Bt))for(let Vt=0;Vt<Bt.length;Vt++){let Jt=Bt[Vt];_e(Jt,yt,ft),Mt.add(Jt)}else _e(Bt,yt,ft),Mt.add(Bt)}),y.pop(),f=null,Mt},this.compileAsync=function(N,ut,yt=null){let Mt=this.compile(N,ut,yt);return new Promise(ft=>{function Bt(){if(Mt.forEach(function(Vt){lt.get(Vt).currentProgram.isReady()&&Mt.delete(Vt)}),Mt.size===0){ft(N);return}setTimeout(Bt,10)}$.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let en=null;function Wn(N){en&&en(N)}function Di(){$n.stop()}function Vo(){$n.start()}let $n=new K0;$n.setAnimationLoop(Wn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(N){en=N,vt.setAnimationLoop(N),N===null?$n.stop():$n.start()},vt.addEventListener("sessionstart",Di),vt.addEventListener("sessionend",Vo),this.render=function(N,ut){if(ut!==void 0&&ut.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ut.parent===null&&ut.matrixWorldAutoUpdate===!0&&ut.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(ut),ut=vt.getCamera()),N.isScene===!0&&N.onBeforeRender(x,N,ut,E),f=It.get(N,y.length),f.init(ut),y.push(f),X.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),U.setFromProjectionMatrix(X),P=this.localClippingEnabled,A=gt.init(this.clippingPlanes,P),_=mt.get(N,p.length),_.init(),p.push(_),vt.enabled===!0&&vt.isPresenting===!0){let Bt=x.xr.getDepthSensingMesh();Bt!==null&&wr(Bt,ut,-1/0,x.sortObjects)}wr(N,ut,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,et),j=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,j&&Wt.addToRenderList(_,N),this.info.render.frame++,A===!0&&gt.beginShadows();let yt=f.state.shadowsArray;At.render(yt,N,ut),A===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Mt=_.opaque,ft=_.transmissive;if(f.setupLights(),ut.isArrayCamera){let Bt=ut.cameras;if(ft.length>0)for(let Vt=0,Jt=Bt.length;Vt<Jt;Vt++){let Qt=Bt[Vt];Pe(Mt,ft,N,Qt)}j&&Wt.render(N);for(let Vt=0,Jt=Bt.length;Vt<Jt;Vt++){let Qt=Bt[Vt];jr(_,N,Qt,Qt.viewport)}}else ft.length>0&&Pe(Mt,ft,N,ut),j&&Wt.render(N),jr(_,N,ut);E!==null&&(I.updateMultisampleRenderTarget(E),I.updateRenderTargetMipmap(E)),N.isScene===!0&&N.onAfterRender(x,N,ut),ne.resetDefaultState(),T=-1,H=null,y.pop(),y.length>0?(f=y[y.length-1],A===!0&&gt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function wr(N,ut,yt,Mt){if(N.visible===!1)return;if(N.layers.test(ut.layers)){if(N.isGroup)yt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ut);else if(N.isLight)f.pushLight(N),N.castShadow&&f.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||U.intersectsSprite(N)){Mt&&F.setFromMatrixPosition(N.matrixWorld).applyMatrix4(X);let Vt=rt.update(N),Jt=N.material;Jt.visible&&_.push(N,Vt,Jt,yt,F.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||U.intersectsObject(N))){let Vt=rt.update(N),Jt=N.material;if(Mt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),F.copy(N.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),F.copy(Vt.boundingSphere.center)),F.applyMatrix4(N.matrixWorld).applyMatrix4(X)),Array.isArray(Jt)){let Qt=Vt.groups;for(let se=0,oe=Qt.length;se<oe;se++){let ee=Qt[se],ye=Jt[ee.materialIndex];ye&&ye.visible&&_.push(N,Vt,ye,yt,F.z,ee)}}else Jt.visible&&_.push(N,Vt,Jt,yt,F.z,null)}}let Bt=N.children;for(let Vt=0,Jt=Bt.length;Vt<Jt;Vt++)wr(Bt[Vt],ut,yt,Mt)}function jr(N,ut,yt,Mt){let ft=N.opaque,Bt=N.transmissive,Vt=N.transparent;f.setupLightsView(yt),A===!0&&gt.setGlobalState(x.clippingPlanes,yt),Mt&&J.viewport(M.copy(Mt)),ft.length>0&&xi(ft,ut,yt),Bt.length>0&&xi(Bt,ut,yt),Vt.length>0&&xi(Vt,ut,yt),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Pe(N,ut,yt,Mt){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Mt.id]===void 0&&(f.state.transmissionRenderTarget[Mt.id]=new qi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?No:Xi,minFilter:Fr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));let Bt=f.state.transmissionRenderTarget[Mt.id],Vt=Mt.viewport||M;Bt.setSize(Vt.z,Vt.w);let Jt=x.getRenderTarget();x.setRenderTarget(Bt),x.getClearColor(Q),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),j&&Wt.render(yt);let Qt=x.toneMapping;x.toneMapping=fr;let se=Mt.viewport;if(Mt.viewport!==void 0&&(Mt.viewport=void 0),f.setupLightsView(Mt),A===!0&&gt.setGlobalState(x.clippingPlanes,Mt),xi(N,yt,Mt),I.updateMultisampleRenderTarget(Bt),I.updateRenderTargetMipmap(Bt),$.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let ee=0,ye=ut.length;ee<ye;ee++){let He=ut[ee],Xe=He.object,Re=He.geometry,Ae=He.material,Kt=He.group;if(Ae.side===Ie&&Xe.layers.test(Mt.layers)){let fn=Ae.side;Ae.side=Xn,Ae.needsUpdate=!0,Sr(Xe,yt,Mt,Re,Ae,Kt),Ae.side=fn,Ae.needsUpdate=!0,oe=!0}}oe===!0&&(I.updateMultisampleRenderTarget(Bt),I.updateRenderTargetMipmap(Bt))}x.setRenderTarget(Jt),x.setClearColor(Q,q),se!==void 0&&(Mt.viewport=se),x.toneMapping=Qt}function xi(N,ut,yt){let Mt=ut.isScene===!0?ut.overrideMaterial:null;for(let ft=0,Bt=N.length;ft<Bt;ft++){let Vt=N[ft],Jt=Vt.object,Qt=Vt.geometry,se=Mt===null?Vt.material:Mt,oe=Vt.group;Jt.layers.test(yt.layers)&&Sr(Jt,ut,yt,Qt,se,oe)}}function Sr(N,ut,yt,Mt,ft,Bt){N.onBeforeRender(x,ut,yt,Mt,ft,Bt),N.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ft.onBeforeRender(x,ut,yt,Mt,N,Bt),ft.transparent===!0&&ft.side===Ie&&ft.forceSinglePass===!1?(ft.side=Xn,ft.needsUpdate=!0,x.renderBufferDirect(yt,ut,Mt,ft,N,Bt),ft.side=Dn,ft.needsUpdate=!0,x.renderBufferDirect(yt,ut,Mt,ft,N,Bt),ft.side=Ie):x.renderBufferDirect(yt,ut,Mt,ft,N,Bt),N.onAfterRender(x,ut,yt,Mt,ft,Bt)}function Kn(N,ut,yt){ut.isScene!==!0&&(ut=Y);let Mt=lt.get(N),ft=f.state.lights,Bt=f.state.shadowsArray,Vt=ft.state.version,Jt=Et.getParameters(N,ft.state,Bt,ut,yt),Qt=Et.getProgramCacheKey(Jt),se=Mt.programs;Mt.environment=N.isMeshStandardMaterial?ut.environment:null,Mt.fog=ut.fog,Mt.envMap=(N.isMeshStandardMaterial?O:v).get(N.envMap||Mt.environment),Mt.envMapRotation=Mt.environment!==null&&N.envMap===null?ut.environmentRotation:N.envMapRotation,se===void 0&&(N.addEventListener("dispose",fe),se=new Map,Mt.programs=se);let oe=se.get(Qt);if(oe!==void 0){if(Mt.currentProgram===oe&&Mt.lightsStateVersion===Vt)return Wo(N,Jt),oe}else Jt.uniforms=Et.getUniforms(N),N.onBeforeCompile(Jt,x),oe=Et.acquireProgram(Jt,Qt),se.set(Qt,oe),Mt.uniforms=Jt.uniforms;let ee=Mt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ee.clippingPlanes=gt.uniform),Wo(N,Jt),Mt.needsLights=Ui(N),Mt.lightsStateVersion=Vt,Mt.needsLights&&(ee.ambientLightColor.value=ft.state.ambient,ee.lightProbe.value=ft.state.probe,ee.directionalLights.value=ft.state.directional,ee.directionalLightShadows.value=ft.state.directionalShadow,ee.spotLights.value=ft.state.spot,ee.spotLightShadows.value=ft.state.spotShadow,ee.rectAreaLights.value=ft.state.rectArea,ee.ltc_1.value=ft.state.rectAreaLTC1,ee.ltc_2.value=ft.state.rectAreaLTC2,ee.pointLights.value=ft.state.point,ee.pointLightShadows.value=ft.state.pointShadow,ee.hemisphereLights.value=ft.state.hemi,ee.directionalShadowMap.value=ft.state.directionalShadowMap,ee.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,ee.spotShadowMap.value=ft.state.spotShadowMap,ee.spotLightMatrix.value=ft.state.spotLightMatrix,ee.spotLightMap.value=ft.state.spotLightMap,ee.pointShadowMap.value=ft.state.pointShadowMap,ee.pointShadowMatrix.value=ft.state.pointShadowMatrix),Mt.currentProgram=oe,Mt.uniformsList=null,oe}function Go(N){if(N.uniformsList===null){let ut=N.currentProgram.getUniforms();N.uniformsList=Ss.seqWithValue(ut.seq,N.uniforms)}return N.uniformsList}function Wo(N,ut){let yt=lt.get(N);yt.outputColorSpace=ut.outputColorSpace,yt.batching=ut.batching,yt.batchingColor=ut.batchingColor,yt.instancing=ut.instancing,yt.instancingColor=ut.instancingColor,yt.instancingMorph=ut.instancingMorph,yt.skinning=ut.skinning,yt.morphTargets=ut.morphTargets,yt.morphNormals=ut.morphNormals,yt.morphColors=ut.morphColors,yt.morphTargetsCount=ut.morphTargetsCount,yt.numClippingPlanes=ut.numClippingPlanes,yt.numIntersection=ut.numClipIntersection,yt.vertexAlphas=ut.vertexAlphas,yt.vertexTangents=ut.vertexTangents,yt.toneMapping=ut.toneMapping}function wc(N,ut,yt,Mt,ft){ut.isScene!==!0&&(ut=Y),I.resetTextureUnits();let Bt=ut.fog,Vt=Mt.isMeshStandardMaterial?ut.environment:null,Jt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:gr,Qt=(Mt.isMeshStandardMaterial?O:v).get(Mt.envMap||Vt),se=Mt.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,oe=!!yt.attributes.tangent&&(!!Mt.normalMap||Mt.anisotropy>0),ee=!!yt.morphAttributes.position,ye=!!yt.morphAttributes.normal,He=!!yt.morphAttributes.color,Xe=fr;Mt.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Xe=x.toneMapping);let Re=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,Ae=Re!==void 0?Re.length:0,Kt=lt.get(Mt),fn=f.state.lights;if(A===!0&&(P===!0||N!==H)){let Bn=N===H&&Mt.id===T;gt.setState(Mt,N,Bn)}let Ce=!1;Mt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==fn.state.version||Kt.outputColorSpace!==Jt||ft.isBatchedMesh&&Kt.batching===!1||!ft.isBatchedMesh&&Kt.batching===!0||ft.isBatchedMesh&&Kt.batchingColor===!0&&ft.colorTexture===null||ft.isBatchedMesh&&Kt.batchingColor===!1&&ft.colorTexture!==null||ft.isInstancedMesh&&Kt.instancing===!1||!ft.isInstancedMesh&&Kt.instancing===!0||ft.isSkinnedMesh&&Kt.skinning===!1||!ft.isSkinnedMesh&&Kt.skinning===!0||ft.isInstancedMesh&&Kt.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&Kt.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&Kt.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&Kt.instancingMorph===!1&&ft.morphTexture!==null||Kt.envMap!==Qt||Mt.fog===!0&&Kt.fog!==Bt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==gt.numPlanes||Kt.numIntersection!==gt.numIntersection)||Kt.vertexAlphas!==se||Kt.vertexTangents!==oe||Kt.morphTargets!==ee||Kt.morphNormals!==ye||Kt.morphColors!==He||Kt.toneMapping!==Xe||Kt.morphTargetsCount!==Ae)&&(Ce=!0):(Ce=!0,Kt.__version=Mt.version);let On=Kt.currentProgram;Ce===!0&&(On=Kn(Mt,ut,ft));let nr=!1,Tn=!1,Qr=!1,Fe=On.getUniforms(),ai=Kt.uniforms;if(J.useProgram(On.program)&&(nr=!0,Tn=!0,Qr=!0),Mt.id!==T&&(T=Mt.id,Tn=!0),nr||H!==N){G.reverseDepthBuffer?(k.copy(N.projectionMatrix),sp(k),op(k),Fe.setValue(w,"projectionMatrix",k)):Fe.setValue(w,"projectionMatrix",N.projectionMatrix),Fe.setValue(w,"viewMatrix",N.matrixWorldInverse);let Bn=Fe.map.cameraPosition;Bn!==void 0&&Bn.setValue(w,B.setFromMatrixPosition(N.matrixWorld)),G.logarithmicDepthBuffer&&Fe.setValue(w,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(Mt.isMeshPhongMaterial||Mt.isMeshToonMaterial||Mt.isMeshLambertMaterial||Mt.isMeshBasicMaterial||Mt.isMeshStandardMaterial||Mt.isShaderMaterial)&&Fe.setValue(w,"isOrthographic",N.isOrthographicCamera===!0),H!==N&&(H=N,Tn=!0,Qr=!0)}if(ft.isSkinnedMesh){Fe.setOptional(w,ft,"bindMatrix"),Fe.setOptional(w,ft,"bindMatrixInverse");let Bn=ft.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Fe.setValue(w,"boneTexture",Bn.boneTexture,I))}ft.isBatchedMesh&&(Fe.setOptional(w,ft,"batchingTexture"),Fe.setValue(w,"batchingTexture",ft._matricesTexture,I),Fe.setOptional(w,ft,"batchingIdTexture"),Fe.setValue(w,"batchingIdTexture",ft._indirectTexture,I),Fe.setOptional(w,ft,"batchingColorTexture"),ft._colorsTexture!==null&&Fe.setValue(w,"batchingColorTexture",ft._colorsTexture,I));let ts=yt.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&Ot.update(ft,yt,On),(Tn||Kt.receiveShadow!==ft.receiveShadow)&&(Kt.receiveShadow=ft.receiveShadow,Fe.setValue(w,"receiveShadow",ft.receiveShadow)),Mt.isMeshGouraudMaterial&&Mt.envMap!==null&&(ai.envMap.value=Qt,ai.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),Mt.isMeshStandardMaterial&&Mt.envMap===null&&ut.environment!==null&&(ai.envMapIntensity.value=ut.environmentIntensity),Tn&&(Fe.setValue(w,"toneMappingExposure",x.toneMappingExposure),Kt.needsLights&&$s(ai,Qr),Bt&&Mt.fog===!0&&bt.refreshFogUniforms(ai,Bt),bt.refreshMaterialUniforms(ai,Mt,pt,ot,f.state.transmissionRenderTarget[N.id]),Ss.upload(w,Go(Kt),ai,I)),Mt.isShaderMaterial&&Mt.uniformsNeedUpdate===!0&&(Ss.upload(w,Go(Kt),ai,I),Mt.uniformsNeedUpdate=!1),Mt.isSpriteMaterial&&Fe.setValue(w,"center",ft.center),Fe.setValue(w,"modelViewMatrix",ft.modelViewMatrix),Fe.setValue(w,"normalMatrix",ft.normalMatrix),Fe.setValue(w,"modelMatrix",ft.matrixWorld),Mt.isShaderMaterial||Mt.isRawShaderMaterial){let Bn=Mt.uniformsGroups;for(let Ks=0,Sc=Bn.length;Ks<Sc;Ks++){let Js=Bn[Ks];ct.update(Js,On),ct.bind(Js,On)}}return On}function $s(N,ut){N.ambientLightColor.needsUpdate=ut,N.lightProbe.needsUpdate=ut,N.directionalLights.needsUpdate=ut,N.directionalLightShadows.needsUpdate=ut,N.pointLights.needsUpdate=ut,N.pointLightShadows.needsUpdate=ut,N.spotLights.needsUpdate=ut,N.spotLightShadows.needsUpdate=ut,N.rectAreaLights.needsUpdate=ut,N.hemisphereLights.needsUpdate=ut}function Ui(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(N,ut,yt){lt.get(N.texture).__webglTexture=ut,lt.get(N.depthTexture).__webglTexture=yt;let Mt=lt.get(N);Mt.__hasExternalTextures=!0,Mt.__autoAllocateDepthBuffer=yt===void 0,Mt.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Mt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,ut){let yt=lt.get(N);yt.__webglFramebuffer=ut,yt.__useDefaultFramebuffer=ut===void 0},this.setRenderTarget=function(N,ut=0,yt=0){E=N,L=ut,C=yt;let Mt=!0,ft=null,Bt=!1,Vt=!1;if(N){let Qt=lt.get(N);if(Qt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(w.FRAMEBUFFER,null),Mt=!1;else if(Qt.__webglFramebuffer===void 0)I.setupRenderTarget(N);else if(Qt.__hasExternalTextures)I.rebindTextures(N,lt.get(N.texture).__webglTexture,lt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let ee=N.depthTexture;if(Qt.__boundDepthTexture!==ee){if(ee!==null&&lt.has(ee)&&(N.width!==ee.image.width||N.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(N)}}let se=N.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Vt=!0);let oe=lt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(oe[ut])?ft=oe[ut][yt]:ft=oe[ut],Bt=!0):N.samples>0&&I.useMultisampledRTT(N)===!1?ft=lt.get(N).__webglMultisampledFramebuffer:Array.isArray(oe)?ft=oe[yt]:ft=oe,M.copy(N.viewport),S.copy(N.scissor),Z=N.scissorTest}else M.copy(z).multiplyScalar(pt).floor(),S.copy(K).multiplyScalar(pt).floor(),Z=W;if(J.bindFramebuffer(w.FRAMEBUFFER,ft)&&Mt&&J.drawBuffers(N,ft),J.viewport(M),J.scissor(S),J.setScissorTest(Z),Bt){let Qt=lt.get(N.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Qt.__webglTexture,yt)}else if(Vt){let Qt=lt.get(N.texture),se=ut||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Qt.__webglTexture,yt||0,se)}T=-1},this.readRenderTargetPixels=function(N,ut,yt,Mt,ft,Bt,Vt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=lt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Vt!==void 0&&(Jt=Jt[Vt]),Jt){J.bindFramebuffer(w.FRAMEBUFFER,Jt);try{let Qt=N.texture,se=Qt.format,oe=Qt.type;if(!G.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ut>=0&&ut<=N.width-Mt&&yt>=0&&yt<=N.height-ft&&w.readPixels(ut,yt,Mt,ft,Xt.convert(se),Xt.convert(oe),Bt)}finally{let Qt=E!==null?lt.get(E).__webglFramebuffer:null;J.bindFramebuffer(w.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(N,ut,yt,Mt,ft,Bt,Vt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=lt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Vt!==void 0&&(Jt=Jt[Vt]),Jt){let Qt=N.texture,se=Qt.format,oe=Qt.type;if(!G.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ut>=0&&ut<=N.width-Mt&&yt>=0&&yt<=N.height-ft){J.bindFramebuffer(w.FRAMEBUFFER,Jt);let ee=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ee),w.bufferData(w.PIXEL_PACK_BUFFER,Bt.byteLength,w.STREAM_READ),w.readPixels(ut,yt,Mt,ft,Xt.convert(se),Xt.convert(oe),0);let ye=E!==null?lt.get(E).__webglFramebuffer:null;J.bindFramebuffer(w.FRAMEBUFFER,ye);let He=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await rp(w,He,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ee),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Bt),w.deleteBuffer(ee),w.deleteSync(He),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,ut=null,yt=0){N.isTexture!==!0&&(Da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ut=arguments[0]||null,N=arguments[1]);let Mt=Math.pow(2,-yt),ft=Math.floor(N.image.width*Mt),Bt=Math.floor(N.image.height*Mt),Vt=ut!==null?ut.x:0,Jt=ut!==null?ut.y:0;I.setTexture2D(N,0),w.copyTexSubImage2D(w.TEXTURE_2D,yt,0,0,Vt,Jt,ft,Bt),J.unbindTexture()},this.copyTextureToTexture=function(N,ut,yt=null,Mt=null,ft=0){N.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture function signature has changed."),Mt=arguments[0]||null,N=arguments[1],ut=arguments[2],ft=arguments[3]||0,yt=null);let Bt,Vt,Jt,Qt,se,oe;yt!==null?(Bt=yt.max.x-yt.min.x,Vt=yt.max.y-yt.min.y,Jt=yt.min.x,Qt=yt.min.y):(Bt=N.image.width,Vt=N.image.height,Jt=0,Qt=0),Mt!==null?(se=Mt.x,oe=Mt.y):(se=0,oe=0);let ee=Xt.convert(ut.format),ye=Xt.convert(ut.type);I.setTexture2D(ut,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ut.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ut.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ut.unpackAlignment);let He=w.getParameter(w.UNPACK_ROW_LENGTH),Xe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Re=w.getParameter(w.UNPACK_SKIP_PIXELS),Ae=w.getParameter(w.UNPACK_SKIP_ROWS),Kt=w.getParameter(w.UNPACK_SKIP_IMAGES),fn=N.isCompressedTexture?N.mipmaps[ft]:N.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,fn.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,fn.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Jt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Qt),N.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ft,se,oe,Bt,Vt,ee,ye,fn.data):N.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ft,se,oe,fn.width,fn.height,ee,fn.data):w.texSubImage2D(w.TEXTURE_2D,ft,se,oe,Bt,Vt,ee,ye,fn),w.pixelStorei(w.UNPACK_ROW_LENGTH,He),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Re),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ae),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Kt),ft===0&&ut.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(N,ut,yt=null,Mt=null,ft=0){N.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),yt=arguments[0]||null,Mt=arguments[1]||null,N=arguments[2],ut=arguments[3],ft=arguments[4]||0);let Bt,Vt,Jt,Qt,se,oe,ee,ye,He,Xe=N.isCompressedTexture?N.mipmaps[ft]:N.image;yt!==null?(Bt=yt.max.x-yt.min.x,Vt=yt.max.y-yt.min.y,Jt=yt.max.z-yt.min.z,Qt=yt.min.x,se=yt.min.y,oe=yt.min.z):(Bt=Xe.width,Vt=Xe.height,Jt=Xe.depth,Qt=0,se=0,oe=0),Mt!==null?(ee=Mt.x,ye=Mt.y,He=Mt.z):(ee=0,ye=0,He=0);let Re=Xt.convert(ut.format),Ae=Xt.convert(ut.type),Kt;if(ut.isData3DTexture)I.setTexture3D(ut,0),Kt=w.TEXTURE_3D;else if(ut.isDataArrayTexture||ut.isCompressedArrayTexture)I.setTexture2DArray(ut,0),Kt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ut.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ut.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ut.unpackAlignment);let fn=w.getParameter(w.UNPACK_ROW_LENGTH),Ce=w.getParameter(w.UNPACK_IMAGE_HEIGHT),On=w.getParameter(w.UNPACK_SKIP_PIXELS),nr=w.getParameter(w.UNPACK_SKIP_ROWS),Tn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Xe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Qt),w.pixelStorei(w.UNPACK_SKIP_ROWS,se),w.pixelStorei(w.UNPACK_SKIP_IMAGES,oe),N.isDataTexture||N.isData3DTexture?w.texSubImage3D(Kt,ft,ee,ye,He,Bt,Vt,Jt,Re,Ae,Xe.data):ut.isCompressedArrayTexture?w.compressedTexSubImage3D(Kt,ft,ee,ye,He,Bt,Vt,Jt,Re,Xe.data):w.texSubImage3D(Kt,ft,ee,ye,He,Bt,Vt,Jt,Re,Ae,Xe),w.pixelStorei(w.UNPACK_ROW_LENGTH,fn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ce),w.pixelStorei(w.UNPACK_SKIP_PIXELS,On),w.pixelStorei(w.UNPACK_SKIP_ROWS,nr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Tn),ft===0&&ut.generateMipmaps&&w.generateMipmap(Kt),J.unbindTexture()},this.initRenderTarget=function(N){lt.get(N).__webglFramebuffer===void 0&&I.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?I.setTextureCube(N,0):N.isData3DTexture?I.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?I.setTexture2DArray(N,0):I.setTexture2D(N,0),J.unbindTexture()},this.resetState=function(){L=0,C=0,E=null,J.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===$h?"display-p3":"srgb",e.unpackColorSpace=Ue.workingColorSpace===hc?"display-p3":"srgb"}};var Ka=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ds=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ph=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jl,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kn=new R,Ja=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyNormalMatrix(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.transformDirection(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=di(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=di(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=di(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=di(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zn=class extends mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gs,so=new R,_s=new R,ys=new R,xs=new Ut,oo=new Ut,ef=new ce,ga=new R,ao=new R,_a=new R,M0=new Ut,ol=new Ut,b0=new Ut,ti=class extends hn{constructor(t=new Zn){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ph(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new Ja(n,3,0,!1)),gs.setAttribute("uv",new Ja(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),ef.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-ys.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;ya(ga.set(-.5,-.5,0),ys,o,_s,r,s),ya(ao.set(.5,-.5,0),ys,o,_s,r,s),ya(_a.set(.5,.5,0),ys,o,_s,r,s),M0.set(0,0),ol.set(1,0),b0.set(1,1);let a=t.ray.intersectTriangle(ga,ao,_a,!1,so);if(a===null&&(ya(ao.set(-.5,.5,0),ys,o,_s,r,s),ol.set(0,1),a=t.ray.intersectTriangle(ga,_a,ao,!1,so),a===null))return;let c=t.ray.origin.distanceTo(so);c<t.near||c>t.far||e.push({distance:c,point:so.clone(),uv:hr.getInterpolation(so,ga,ao,_a,M0,ol,b0,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ya(i,t,e,n,r,s){xs.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(oo.x=s*xs.x-r*xs.y,oo.y=r*xs.x+s*xs.y):oo.copy(xs),i.copy(t),i.x+=oo.x,i.y+=oo.y,i.applyMatrix4(ef)}var mh=class extends qn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=An,h=An,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ja=class extends Le{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new ce,v0=new ce,xa=[],E0=new Yi,ey=new ce,co=new St,lo=new Zi,Us=class extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ja(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ey)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),E0.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(E0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),lo.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(lo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(n),t.ray.intersectsSphere(lo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ms),v0.multiplyMatrices(n,Ms),co.matrixWorld=v0,co.raycast(t,xa);for(let o=0,a=xa.length;o<a;o++){let c=xa[o];c.instanceId=s,c.object=this,e.push(c)}xa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ja(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new mh(new Float32Array(r*this.count),r,this.count,Wh,bi));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var So=class extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qa=new R,tc=new R,w0=new ce,ho=new Eo,Ma=new Zi,al=new R,S0=new R,ec=class extends hn{constructor(t=new Me,e=new So){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Qa.fromBufferAttribute(e,r-1),tc.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Qa.distanceTo(tc);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=s,t.ray.intersectsSphere(Ma)===!1)return;w0.copy(r).invert(),ho.copy(t.ray).applyMatrix4(w0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=h.getX(_),y=h.getX(_+1),x=ba(this,t,ho,c,p,y);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),f=h.getX(m),p=ba(this,t,ho,c,_,f);p&&e.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){let p=ba(this,t,ho,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=ba(this,t,ho,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ba(i,t,e,n,r,s){let o=i.geometry.attributes.position;if(Qa.fromBufferAttribute(o,r),tc.fromBufferAttribute(o,s),e.distanceSqToSegment(Qa,tc,al,S0)>n)return;al.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(al);if(!(c<t.near||c>t.far))return{distance:c,point:S0.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var pr=class extends mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},T0=new ce,gh=new Eo,va=new Zi,Ea=new R,mr=class extends hn{constructor(t=new Me,e=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),va.radius+=s,t.ray.intersectsSphere(va)===!1)return;T0.copy(r).invert(),gh.copy(t.ray).applyMatrix4(T0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let f=l.getX(g);Ea.fromBufferAttribute(u,f),A0(Ea,f,c,r,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Ea.fromBufferAttribute(u,g),A0(Ea,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function A0(i,t,e,n,r,s,o){let a=gh.distanceSqToPoint(i);if(a<e){let c=new R;gh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Un=class extends qn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],d=n[r+1]-h,m=(o-h)/d;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Ut:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,r=[],s=[],o=[],a=new R,c=new ce;for(let m=0;m<=t;m++){let g=m/t;r[m]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Mn(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Mn(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},To=class extends ii{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ut){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_h=class extends To{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jh(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,m*=h,r(o,a,d,m)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var wa=new R,cl=new jh,ll=new jh,hl=new jh,yh=class extends ii{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(wa.subVectors(r[0],r[1]).add(r[0]),l=wa);let u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(wa.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=wa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),cl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,f),ll.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,f),hl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ll.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),hl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(cl.calc(c),ll.calc(c),hl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function R0(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function ny(i,t){let e=1-i;return e*e*t}function iy(i,t){return 2*(1-i)*i*t}function ry(i,t){return i*i*t}function _o(i,t,e,n){return ny(i,t)+iy(i,e)+ry(i,n)}function sy(i,t){let e=1-i;return e*e*e*t}function oy(i,t){let e=1-i;return 3*e*e*i*t}function ay(i,t){return 3*(1-i)*i*i*t}function cy(i,t){return i*i*i*t}function yo(i,t,e,n,r){return sy(i,t)+oy(i,e)+ay(i,n)+cy(i,r)}var nc=class extends ii{constructor(t=new Ut,e=new Ut,n=new Ut,r=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ut){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(yo(t,r.x,s.x,o.x,a.x),yo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xh=class extends ii{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(yo(t,r.x,s.x,o.x,a.x),yo(t,r.y,s.y,o.y,a.y),yo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ic=class extends ii{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mh=class extends ii{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends ii{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(_o(t,r.x,s.x,o.x),_o(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bh=class extends ii{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(_o(t,r.x,s.x,o.x),_o(t,r.y,s.y,o.y),_o(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(R0(a,c.x,l.x,h.x,u.x),R0(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Ut().fromArray(r))}return this}},vh=Object.freeze({__proto__:null,ArcCurve:_h,CatmullRomCurve3:yh,CubicBezierCurve:nc,CubicBezierCurve3:xh,EllipseCurve:To,LineCurve:ic,LineCurve3:Mh,QuadraticBezierCurve:rc,QuadraticBezierCurve3:bh,SplineCurve:sc}),Eh=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new vh[r.type]().fromJSON(r))}return this}},Ao=class extends Eh{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ic(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new rc(this.currentPoint.clone(),new Ut(t,e),new Ut(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new nc(this.currentPoint.clone(),new Ut(t,e),new Ut(n,r),new Ut(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new sc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new To(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wh=class i extends Me{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Mn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,d=new Ut,m=new R,g=new R,_=new R,f=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:f=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,m.x=p*1,m.y=-f,m.z=p*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*r,b=Math.sin(x),L=Math.cos(x);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*b,u.y=t[C].y,u.z=t[C].x*L,o.push(u.x,u.y,u.z),d.x=y/e,d.y=C/(t.length-1),a.push(d.x,d.y);let E=c[3*C+0]*b,T=c[3*C+1],H=c[3*C+0]*L;l.push(E,T,H)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let b=x+y*t.length,L=b,C=b+t.length,E=b+t.length+1,T=b+1;s.push(L,C,T),s.push(E,T,C)}this.setIndex(s),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},kr=class i extends wh{constructor(t=1,e=1,n=4,r=8){let s=new Ao;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ro=class i extends Me{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new R,h=new Ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let m=n+u/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ve=class i extends Me{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],g=0,_=[],f=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(m,2));function y(){let b=new R,L=new R,C=0,E=(e-t)/n;for(let T=0;T<=s;T++){let H=[],M=T/s,S=M*(e-t)+t;for(let Z=0;Z<=r;Z++){let Q=Z/r,q=Q*c+a,at=Math.sin(q),ot=Math.cos(q);L.x=S*at,L.y=-M*n+f,L.z=S*ot,u.push(L.x,L.y,L.z),b.set(at,E,ot).normalize(),d.push(b.x,b.y,b.z),m.push(Q,1-M),H.push(g++)}_.push(H)}for(let T=0;T<r;T++)for(let H=0;H<s;H++){let M=_[H][T],S=_[H+1][T],Z=_[H+1][T+1],Q=_[H][T+1];t>0&&(h.push(M,S,Q),C+=3),e>0&&(h.push(S,Z,Q),C+=3)}l.addGroup(p,C,0),p+=C}function x(b){let L=g,C=new Ut,E=new R,T=0,H=b===!0?t:e,M=b===!0?1:-1;for(let Z=1;Z<=r;Z++)u.push(0,f*M,0),d.push(0,M,0),m.push(.5,.5),g++;let S=g;for(let Z=0;Z<=r;Z++){let q=Z/r*c+a,at=Math.cos(q),ot=Math.sin(q);E.x=H*ot,E.y=f*M,E.z=H*at,u.push(E.x,E.y,E.z),d.push(0,M,0),C.x=at*.5+.5,C.y=ot*.5*M+.5,m.push(C.x,C.y),g++}for(let Z=0;Z<r;Z++){let Q=L+Z,q=S+Z;b===!0?h.push(q,q+1,Q):h.push(q+1,q,Q),T+=3}l.addGroup(p,T,b===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nn=class i extends ve{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oc=class i extends Me{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new R,b=new R,L=new R;for(let C=0;C<e.length;C+=3)m(e[C+0],x),m(e[C+1],b),m(e[C+2],L),c(x,b,L,y)}function c(y,x,b,L){let C=L+1,E=[];for(let T=0;T<=C;T++){E[T]=[];let H=y.clone().lerp(b,T/C),M=x.clone().lerp(b,T/C),S=C-T;for(let Z=0;Z<=S;Z++)Z===0&&T===C?E[T][Z]=H:E[T][Z]=H.clone().lerp(M,Z/S)}for(let T=0;T<C;T++)for(let H=0;H<2*(C-T)-1;H++){let M=Math.floor(H/2);H%2===0?(d(E[T][M+1]),d(E[T+1][M]),d(E[T][M])):(d(E[T][M+1]),d(E[T+1][M+1]),d(E[T+1][M]))}}function l(y){let x=new R;for(let b=0;b<s.length;b+=3)x.x=s[b+0],x.y=s[b+1],x.z=s[b+2],x.normalize().multiplyScalar(y),s[b+0]=x.x,s[b+1]=x.y,s[b+2]=x.z}function h(){let y=new R;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let b=f(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(b,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],b=o[y+2],L=o[y+4],C=Math.max(x,b,L),E=Math.min(x,b,L);C>.9&&E<.1&&(x<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function m(y,x){let b=y*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){let y=new R,x=new R,b=new R,L=new R,C=new Ut,E=new Ut,T=new Ut;for(let H=0,M=0;H<s.length;H+=9,M+=6){y.set(s[H+0],s[H+1],s[H+2]),x.set(s[H+3],s[H+4],s[H+5]),b.set(s[H+6],s[H+7],s[H+8]),C.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),T.set(o[M+4],o[M+5]),L.copy(y).add(x).add(b).divideScalar(3);let S=f(L);_(C,M+0,y,S),_(E,M+2,x,S),_(T,M+4,b,S)}}function _(y,x,b,L){L<0&&y.x===1&&(o[x]=y.x-1),b.x===0&&b.z===0&&(o[x]=L/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var zr=class extends Ao{constructor(t){super(t),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Ao().fromJSON(r))}return this}},ly={triangulate:function(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=nf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,m;if(n&&(s=py(i,t,s,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<r;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-a,h-c),m=m!==0?32767/m:0}return Co(s,o,e,a,c,m,0),o}};function nf(i,t,e,n,r){let s,o;if(r===Sy(i,t,e,n)>0)for(s=t;s<e;s+=n)o=C0(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=C0(s,i[s],i[s+1],o);return o&&fc(o,o.next)&&(Io(o),o=o.next),o}function Vr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fc(e,e.next)||Je(e.prev,e,e.next)===0)){if(Io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Co(i,t,e,n,r,s,o){if(!i)return;!o&&s&&xy(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?uy(i,n,r,s):hy(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Io(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=fy(Vr(i),t,e),Co(i,t,e,n,r,s,2)):o===2&&dy(i,t,e,n,r,s):Co(Vr(i),t,e,n,r,s,1);break}}}function hy(i){let t=i.prev,e=i,n=i.next;if(Je(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&vs(r,a,s,c,o,l,g.x,g.y)&&Je(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function uy(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Je(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,d=o.y,m=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,p=Sh(m,g,t,e,n),y=Sh(_,f,t,e,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=p&&b&&b.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&vs(a,h,c,u,l,d,x.x,x.y)&&Je(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&vs(a,h,c,u,l,d,b.x,b.y)&&Je(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=f&&x!==r&&x!==o&&vs(a,h,c,u,l,d,x.x,x.y)&&Je(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=m&&b.x<=_&&b.y>=g&&b.y<=f&&b!==r&&b!==o&&vs(a,h,c,u,l,d,b.x,b.y)&&Je(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function fy(i,t,e){let n=i;do{let r=n.prev,s=n.next.next;!fc(r,s)&&rf(r,n,n.next,s)&&Po(r,s)&&Po(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Io(n),Io(n.next),n=i=s),n=n.next}while(n!==i);return Vr(n)}function dy(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vy(o,a)){let c=sf(o,a);o=Vr(o,o.next),c=Vr(c,c.next),Co(o,t,e,n,r,s,0),Co(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function py(i,t,e,n){let r=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=nf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(by(l));for(r.sort(my),s=0;s<r.length;s++)e=gy(r[s],e);return e}function my(i,t){return i.x-t.x}function gy(i,t){let e=_y(i,t);if(!e)return t;let n=sf(e,i);return Vr(n,n.next),Vr(e,e.next)}function _y(i,t){let e=t,n=-1/0,r,s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,u;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&vs(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Po(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&yy(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function yy(i,t){return Je(i.prev,i,t.prev)<0&&Je(t.next,i,i.next)<0}function xy(i,t,e,n){let r=i;do r.z===0&&(r.z=Sh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,My(r)}function My(i){let t,e,n,r,s,o,a,c,l=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,l*=2}while(o>1);return i}function Sh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function by(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function vs(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function vy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ey(i,t)&&(Po(i,t)&&Po(t,i)&&wy(i,t)&&(Je(i.prev,i,t.prev)||Je(i,t.prev,t))||fc(i,t)&&Je(i.prev,i,i.next)>0&&Je(t.prev,t,t.next)>0)}function Je(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fc(i,t){return i.x===t.x&&i.y===t.y}function rf(i,t,e,n){let r=Ta(Je(i,t,e)),s=Ta(Je(i,t,n)),o=Ta(Je(e,n,i)),a=Ta(Je(e,n,t));return!!(r!==s&&o!==a||r===0&&Sa(i,e,t)||s===0&&Sa(i,n,t)||o===0&&Sa(e,i,n)||a===0&&Sa(e,t,n))}function Sa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ta(i){return i>0?1:i<0?-1:0}function Ey(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Po(i,t){return Je(i.prev,i,i.next)<0?Je(i,t,i.next)>=0&&Je(i,i.prev,t)>=0:Je(i,t,i.prev)<0||Je(i,i.next,t)<0}function wy(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function sf(i,t){let e=new Th(i.i,i.x,i.y),n=new Th(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function C0(i,t,e,n){let r=new Th(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Th(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sy(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var xo=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];P0(t),I0(n,t);let o=t.length;e.forEach(P0);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,I0(n,e[c]);let a=ly.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function P0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function I0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ns=class i extends Me{constructor(t=new zr([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new re(r,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Ty,x,b=!1,L,C,E,T;p&&(x=p.getSpacedPoints(h),b=!0,d=!1,L=p.computeFrenetFrames(h,!1),C=new R,E=new R,T=new R),d||(f=0,m=0,g=0,_=0);let H=a.extractPoints(l),M=H.shape,S=H.holes;if(!xo.isClockWise(M)){M=M.reverse();for(let V=0,w=S.length;V<w;V++){let st=S[V];xo.isClockWise(st)&&(S[V]=st.reverse())}}let Q=xo.triangulateShape(M,S),q=M;for(let V=0,w=S.length;V<w;V++){let st=S[V];M=M.concat(st)}function at(V,w,st){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(w,st)}let ot=M.length,pt=Q.length;function D(V,w,st){let $,G,J,it=V.x-w.x,lt=V.y-w.y,I=st.x-V.x,v=st.y-V.y,O=it*it+lt*lt,nt=it*v-lt*I;if(Math.abs(nt)>Number.EPSILON){let ht=Math.sqrt(O),rt=Math.sqrt(I*I+v*v),Et=w.x-lt/ht,bt=w.y+it/ht,mt=st.x-v/rt,It=st.y+I/rt,gt=((mt-Et)*v-(It-bt)*I)/(it*v-lt*I);$=Et+it*gt-V.x,G=bt+lt*gt-V.y;let At=$*$+G*G;if(At<=2)return new Ut($,G);J=Math.sqrt(At/2)}else{let ht=!1;it>Number.EPSILON?I>Number.EPSILON&&(ht=!0):it<-Number.EPSILON?I<-Number.EPSILON&&(ht=!0):Math.sign(lt)===Math.sign(v)&&(ht=!0),ht?($=-lt,G=it,J=Math.sqrt(O)):($=it,G=lt,J=Math.sqrt(O/2))}return new Ut($/J,G/J)}let et=[];for(let V=0,w=q.length,st=w-1,$=V+1;V<w;V++,st++,$++)st===w&&(st=0),$===w&&($=0),et[V]=D(q[V],q[st],q[$]);let z=[],K,W=et.concat();for(let V=0,w=S.length;V<w;V++){let st=S[V];K=[];for(let $=0,G=st.length,J=G-1,it=$+1;$<G;$++,J++,it++)J===G&&(J=0),it===G&&(it=0),K[$]=D(st[$],st[J],st[it]);z.push(K),W=W.concat(K)}for(let V=0;V<f;V++){let w=V/f,st=m*Math.cos(w*Math.PI/2),$=g*Math.sin(w*Math.PI/2)+_;for(let G=0,J=q.length;G<J;G++){let it=at(q[G],et[G],$);X(it.x,it.y,-st)}for(let G=0,J=S.length;G<J;G++){let it=S[G];K=z[G];for(let lt=0,I=it.length;lt<I;lt++){let v=at(it[lt],K[lt],$);X(v.x,v.y,-st)}}}let U=g+_;for(let V=0;V<ot;V++){let w=d?at(M[V],W[V],U):M[V];b?(E.copy(L.normals[0]).multiplyScalar(w.x),C.copy(L.binormals[0]).multiplyScalar(w.y),T.copy(x[0]).add(E).add(C),X(T.x,T.y,T.z)):X(w.x,w.y,0)}for(let V=1;V<=h;V++)for(let w=0;w<ot;w++){let st=d?at(M[w],W[w],U):M[w];b?(E.copy(L.normals[V]).multiplyScalar(st.x),C.copy(L.binormals[V]).multiplyScalar(st.y),T.copy(x[V]).add(E).add(C),X(T.x,T.y,T.z)):X(st.x,st.y,u/h*V)}for(let V=f-1;V>=0;V--){let w=V/f,st=m*Math.cos(w*Math.PI/2),$=g*Math.sin(w*Math.PI/2)+_;for(let G=0,J=q.length;G<J;G++){let it=at(q[G],et[G],$);X(it.x,it.y,u+st)}for(let G=0,J=S.length;G<J;G++){let it=S[G];K=z[G];for(let lt=0,I=it.length;lt<I;lt++){let v=at(it[lt],K[lt],$);b?X(v.x,v.y+x[h-1].y,x[h-1].x+st):X(v.x,v.y,u+st)}}}A(),P();function A(){let V=r.length/3;if(d){let w=0,st=ot*w;for(let $=0;$<pt;$++){let G=Q[$];B(G[2]+st,G[1]+st,G[0]+st)}w=h+f*2,st=ot*w;for(let $=0;$<pt;$++){let G=Q[$];B(G[0]+st,G[1]+st,G[2]+st)}}else{for(let w=0;w<pt;w++){let st=Q[w];B(st[2],st[1],st[0])}for(let w=0;w<pt;w++){let st=Q[w];B(st[0]+ot*h,st[1]+ot*h,st[2]+ot*h)}}n.addGroup(V,r.length/3-V,0)}function P(){let V=r.length/3,w=0;k(q,w),w+=q.length;for(let st=0,$=S.length;st<$;st++){let G=S[st];k(G,w),w+=G.length}n.addGroup(V,r.length/3-V,1)}function k(V,w){let st=V.length;for(;--st>=0;){let $=st,G=st-1;G<0&&(G=V.length-1);for(let J=0,it=h+f*2;J<it;J++){let lt=ot*J,I=ot*(J+1),v=w+$+lt,O=w+G+lt,nt=w+G+I,ht=w+$+I;F(v,O,nt,ht)}}}function X(V,w,st){c.push(V),c.push(w),c.push(st)}function B(V,w,st){Y(V),Y(w),Y(st);let $=r.length/3,G=y.generateTopUV(n,r,$-3,$-2,$-1);j(G[0]),j(G[1]),j(G[2])}function F(V,w,st,$){Y(V),Y(w),Y($),Y(w),Y(st),Y($);let G=r.length/3,J=y.generateSideWallUV(n,r,G-6,G-3,G-2,G-1);j(J[0]),j(J[1]),j(J[3]),j(J[1]),j(J[2]),j(J[3])}function Y(V){r.push(c[V*3+0]),r.push(c[V*3+1]),r.push(c[V*3+2])}function j(V){s.push(V.x),s.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ay(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new vh[r.type]().fromJSON(r)),new i(n,t.options)}},Ty={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new Ut(s,o),new Ut(a,c),new Ut(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[r*3],m=t[r*3+1],g=t[r*3+2],_=t[s*3],f=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ut(o,1-c),new Ut(l,1-u),new Ut(d,1-g),new Ut(_,1-p)]:[new Ut(a,1-c),new Ut(h,1-u),new Ut(m,1-g),new Ut(f,1-p)]}};function Ay(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _n=class i extends oc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Lo=class i extends oc{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ne=class i extends Me{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,d=new R,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){let y=[],x=p/n,b=0;p===0&&o===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let C=L/e;u.x=-t*Math.cos(r+C*s)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(r+C*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(C+b,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],b=h[p][y],L=h[p+1][y],C=h[p+1][y+1];(p!==0||o>0)&&m.push(x,b,C),(p!==n-1||c<Math.PI)&&m.push(b,L,C)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vn=class i extends Me{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){let _=g/r*s,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){let _=(r+1)*m+g-1,f=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,y=(r+1)*m+g;o.push(_,f,y),o.push(f,p,y)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var we=class extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Hs=class extends mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Aa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ry(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fs=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ah=class extends Fs{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ru,endingEnd:Ru}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cu:s=t,a=2*e-n;break;case Pu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cu:o=t,c=2*n-e;break;case Pu:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,y=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-m)*f+(1.5+m)*_+.5*g,b=m*f-m*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+y*o[l+L]+x*o[c+L]+b*o[u+L];return s}},Rh=class extends Fs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},Ch=class extends Fs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},gi=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Aa(e,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Aa(t.times,Array),values:Aa(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ah(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ua:e=this.InterpolantFactoryMethodDiscrete;break;case Kl:e=this.InterpolantFactoryMethodLinear;break;case Lc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Kl;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&Ry(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Lc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Kl;var Gr=class extends gi{constructor(t,e,n){super(t,e,n)}};Gr.prototype.ValueTypeName="bool";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=Ua;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ph=class extends gi{};Ph.prototype.ValueTypeName="color";var Ih=class extends gi{};Ih.prototype.ValueTypeName="number";var Lh=class extends Fs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)vn.slerpFlat(s,0,o,l-a,o,l,c);return s}},ac=class extends gi{InterpolantFactoryMethodLinear(t){return new Lh(this.times,this.values,this.getValueSize(),t)}};ac.prototype.ValueTypeName="quaternion";ac.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends gi{constructor(t,e,n){super(t,e,n)}};Wr.prototype.ValueTypeName="string";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=Ua;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Dh=class extends gi{};Dh.prototype.ValueTypeName="vector";var Uh=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Cy=new Uh,Nh=class{constructor(t){this.manager=t!==void 0?t:Cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Nh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Os=class extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ul=new ce,L0=new R,D0=new R,cc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;L0.setFromMatrixPosition(t.matrixWorld),e.position.copy(L0),D0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(D0),e.updateMatrixWorld(),ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var U0=new ce,uo=new R,fl=new R,Hh=class extends cc{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),uo.setFromMatrixPosition(t.matrixWorld),n.position.copy(uo),fl.copy(n.position),fl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fl),n.updateMatrixWorld(),r.makeTranslation(-uo.x,-uo.y,-uo.z),U0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(U0)}},_i=class extends Do{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fh=class extends cc{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ki=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Fh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Qh="\\[\\]\\.:\\/",Py=new RegExp("["+Qh+"]","g"),tu="[^"+Qh+"]",Iy="[^"+Qh.replace("\\.","")+"]",Ly=/((?:WC+[\/:])*)/.source.replace("WC",tu),Dy=/(WCOD+)?/.source.replace("WCOD",Iy),Uy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),Ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),Hy=new RegExp("^"+Ly+Dy+Uy+Ny+"$"),Fy=["material","materials","bones","map"],Oh=class{constructor(t,e,n){let r=n||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Py,"")}static parseTrackName(t){let e=Hy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Fy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=Oh;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var of=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:3,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:5,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:8,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:10,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var af=i=>of.find(t=>t.id===i)??of[0];function lf(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var dc=(i,t,e)=>i+(t-i)*e,hf=i=>Math.min(1,Math.max(0,i)),Ho=(i,t)=>Math.max(0,i)**t;function iu(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var uf=(i,t,e)=>new En(i,t,e,"ZYX"),zs=class{constructor(t,e={}){Ze(this,"n",t);Ze(this,"geo",new Me);Ze(this,"per");Ze(this,"radial");Ze(this,"closed");Ze(this,"sharp");Ze(this,"caps");Ze(this,"samples");Ze(this,"pos");Ze(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let r=this.radial+1,s=this.samples*r+(this.caps?2:0);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3);let o=new Float32Array(s*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*r+l)*2]=c/(this.samples-1),o[(c*r+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*r+l,u=h+r;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*r,l=c+1,h=(this.samples-1)*r;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new Le(this.pos,3)),this.geo.setAttribute("normal",new Le(this.nor,3)),this.geo.setAttribute("uv",new Le(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:r,radial:s,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=y=>t[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))],u=y=>typeof e=="number"?e:e[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))];for(let y=0;y<a;y++){let x=Math.floor(y/r),b=y%r/r;!o&&x>=n-1&&(x=n-2,b=1);let L=h(x),C=h(x+1);for(let E=0;E<3;E++)if(this.sharp)c[y*3+E]=L[E]+(C[E]-L[E])*b;else{let T=o||x>0?h(x-1)[E]:2*L[E]-C[E],H=o||x+2<n?h(x+2)[E]:2*C[E]-L[E],M=b*b,S=M*b;c[y*3+E]=.5*(2*L[E]+(-T+C[E])*b+(2*T-5*L[E]+4*C[E]-H)*M+(-T+3*L[E]-3*C[E]+H)*S)}l[y]=Math.max(1e-4,Math.abs(u(x)+(u(x+1)-u(x))*b))}let d=new R,m=new R,g=new R,_=new R,f=y=>{let x=o?(y-1+a-1)%(a-1):Math.max(0,y-1),b=o?(y+1)%(a-1):Math.min(a-1,y+1);return d.set(c[b*3]-c[x*3],c[b*3+1]-c[x*3+1],c[b*3+2]-c[x*3+2]),d.lengthSq()<1e-12&&d.set(0,0,1),d.normalize()};f(0),_.set(Math.abs(d.x)<.9?1:0,Math.abs(d.x)<.9?0:1,0),m.crossVectors(d,_).normalize();let p=s+1;for(let y=0;y<a;y++){f(y),m.addScaledVector(d,-m.dot(d)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(d,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(d,m);for(let x=0;x<=s;x++){let b=x/s*Math.PI*2,L=Math.cos(b),C=Math.sin(b),E=L*m.x+C*g.x,T=L*m.y+C*g.y,H=L*m.z+C*g.z,M=(y*p+x)*3;this.nor[M]=E,this.nor[M+1]=T,this.nor[M+2]=H,this.pos[M]=c[y*3]+l[y]*E,this.pos[M+1]=c[y*3+1]+l[y]*T,this.pos[M+2]=c[y*3+2]+l[y]*H}if(this.caps&&(y===0||y===a-1)){let x=(a*p+(y?1:0))*3,b=y?1:-1;this.pos[x]=c[y*3],this.pos[x+1]=c[y*3+1],this.pos[x+2]=c[y*3+2],this.nor[x]=d.x*b,this.nor[x+1]=d.y*b,this.nor[x+2]=d.z*b}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function cn(i,t,e={}){return new zs(i.length,e).set(i,t).geo}function yi(i,t,e,n=12,r=.35,s={}){let o=new ce().makeRotationFromEuler(uf(...t)),a=[],c=[],l=new R;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+r*Math.sin(3*u)))}return cn(a,c,{closed:!0,per:6,...s})}function Ji(i,t,e,n,r,s=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<r;u++){let d=u/(r-1),m=s+2*Math.PI*n*d,g=t+(e-t)*d,_=l(d)+(a&&o?a.uniform(-o,o):0),[f,p]=c?c(g):[0,0];h.push([f+_*Math.cos(m),p+_*Math.sin(m),g])}return h}var mc=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function ri(i,t,e,n,r){let s=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);s.push(...l,...h,0,0,i),s.push(...h,...l,0,0,-t)}let a=new Me;return a.setAttribute("position",new re(s,3)),a.setAttribute("uv",new re(new Array(s.length/3*2).fill(.5),2)),r&&a.applyMatrix4(new ce().makeRotationFromEuler(uf(...r))),a.computeVertexNormals(),a}function ru(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),r.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;s.push(l,l+1,h+1,l,h+1,h)}let o=new Me;return o.setAttribute("position",new re(n,3)),o.setAttribute("uv",new re(r,2)),o.setIndex(s),o.computeVertexNormals(),o}var pc=class{constructor(){Ze(this,"parts",new Map)}add(t,e,n,r,s){let o=t.index?t:Oy(t),a=new ce().compose(n?Array.isArray(n)?new R(...n):n:new R,new vn().setFromEuler(r??new En),s===void 0?new R(1,1,1):typeof s=="number"?new R(s,s,s):new R(...s)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,r]of this.parts){let s=new St(su(r),n);t.add(s),e.push(s);for(let o of r)o.dispose()}return this.parts.clear(),e}};function Oy(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,r)=>r)),t}function su(i){let t=0,e=0;for(let d of i)t+=d.attributes.position.count,e+=d.index.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t*2),a=i.some(d=>d.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let d of i){let m=d.attributes.position.count;n.set(d.attributes.position.array,l*3),d.attributes.normal||d.computeVertexNormals(),r.set(d.attributes.normal.array,l*3),d.attributes.uv&&s.set(d.attributes.uv.array,l*2),a&&d.attributes.color&&a.set(d.attributes.color.array,l*3);let g=d.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new Me;return u.setAttribute("position",new Le(n,3)),u.setAttribute("normal",new Le(r,3)),u.setAttribute("uv",new Le(s,2)),a&&u.setAttribute("color",new Le(a,3)),u.setIndex(new Le(c,1)),u.computeBoundingSphere(),u}var cf=new Map;function eu(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function nu(i,t,e,n=4,r=1){let s=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let d=Math.floor(l),m=Math.floor(h),g=l-d,_=h-m,f=g*g*(3-2*g),p=_*_*(3-2*_),y=(b,L)=>eu((b%c+c)%c,(L%c+c)%c,r+u),x=dc(dc(y(d,m),y(d+1,m),f),dc(y(d,m+1),y(d+1,m+1),f),p);s+=x*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return s/a}function ff(i,t,e,n=[1,1]){let r=cf.get(i);if(!r){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),r=new Un(o),r.wrapS=r.wrapT=Or,cf.set(i,r)}let s=r.clone();return s.repeat.set(...n),s.needsUpdate=!0,s}var df=(i,t,e,n,r)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=r,i.data[t*4+3]=255};function Xr(i=1,t=[1,1],e=.35,n=1.25){return ff(`noise${i}`,128,r=>{for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=nu(o/(16*i),s/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,dc(e,n,a)/1.25));df(r,s*128+o,c,c,c)}},t)}function pf(i=6,t=.11,e=[1,1]){return ff(`vein${i}:${t}`,128,n=>{let r=[];for(let s=0;s<i;s++)for(let o=0;o<i;o++)r.push([(o+eu(o,s,9))/i,(s+eu(o,s,11))/i]);for(let s=0;s<128;s++)for(let o=0;o<128;o++){let a=o/128+(nu(o/16,s/16,8,2,5)-.5)*.08,c=s/128+(nu(o/16+7,s/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of r)for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let y=a-g-p,x=c-_-f,b=Math.sqrt(y*y+x*x);b<l?(h=l,l=b):b<h&&(h=b)}let u=(h-l)*i*.5,d=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*d*d);df(n,s*128+o,m,m,m)}},e)}var _r=1.13,Fo=.66,le=(i,t,e)=>new kt(i,t,e);function By(i,t){let e=(s,o=!0)=>(o?i.push(s):t.push(s),s),n=(s,o=1.7)=>s.clone().multiplyScalar(o),r=s=>Math.min(2.4,.55+s*.13);return{bark:(s,o)=>e(new we({color:n(o,1.5),map:Xr(4,[3,2]),roughness:.9,emissive:s.clone().multiplyScalar(.4)})),plain:(s,o=.5)=>e(new we({color:n(s),roughness:o})),leaf:(s,o)=>e(new we({color:n(o,1.6),map:Xr(1,[2,2],.45),roughness:.45,side:Ie,emissive:s.clone().multiplyScalar(.6)})),metal:(s,o=.28)=>e(new we({color:n(s,1.25),metalness:.55,roughness:o+.12})),veins:(s,o,a,c=6,l=.11,h=.1)=>e(new we({color:n(s,2.4),map:Xr(1,[3,2]),emissive:o,emissiveMap:pf(c,l,[4,2]),emissiveIntensity:r(a),roughness:.6,metalness:h})),lava:()=>e(new we({color:le(.3,.05,0),emissive:le(1,.22,.015),emissiveMap:Xr(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(s,o,a,c=Dn)=>e(new we({color:o,emissive:s,emissiveMap:Xr(1,[2,2],.6),emissiveIntensity:r(a),roughness:.4,side:c})),emissive:(s,o)=>e(new we({color:s.clone().multiplyScalar(.15),emissive:s,emissiveIntensity:r(o),roughness:.4})),crystal:(s,o)=>e(new we({color:n(s,1.3),emissive:s,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(s,o=.3)=>e(new we({color:s,emissive:s.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new we({color:le(.55,.82,1),map:Xr(2,[4,1],.7),emissive:le(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var Yr=i=>Math.max(8,Math.round(i*.5)),Oo=i=>Math.max(1,Math.round(i*.45)),gc=i=>i-Math.floor(i);function ky(i,t,e,n,r,s=.09,o=.1){let a=i+n,c=(a%t+t)%t;return r*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-s*c)*(Math.cos(o*c)+s/o*Math.sin(o*c)))}function zy(i,t,e,n=8,r=10,s=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-r)/s))))}function mf(i,t,e,n){let r=[];for(let s=0;s<t;s++){let o=new R(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),r.push([o.x,o.y,o.z])}return r}function ou(i,t,e,n,r,s){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*r));return o.push(e),cn(o,o.map((a,c)=>s*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function Vy(i,t,e,n,r,s,o,a=.45){return ru(4,10,(c,l)=>{let h=2*c-1,u=.07+r*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-s*l**3,d=t+e*l,m=i+o*l,g=n*Math.max(.03,Ho(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,f=h*g,p=Math.cos(m),y=Math.sin(m);return[_*p-f*y,_*y+f*p,d]})}function Gy(i=.14,t=.055){return ru(3,6,(e,n)=>{let r=2*e-1,s=t*(.04+Ho(Math.sin(Math.PI*n**.75),.9));return[r*s,n*i,-Math.abs(r)*s*.45-.18*i*n*n]})}var qr=new hn;function Vs(i,t,e,n,r){qr.position.set(e[0],e[1],e[2]),typeof n=="number"?qr.scale.setScalar(Math.max(1e-5,n)):qr.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),r?qr.rotation.set(r[0],r[1],r[2],"ZYX"):qr.rotation.set(0,0,0),qr.updateMatrix(),i.setMatrixAt(t,qr.matrix)}var cu=new _n(1,1),au=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((r,s)=>{for(let o of n)o.offset.x-=s*e})};function Wy(i){let{rng:t,m:e}=i,n=e.bark(le(.045,.028,.014),le(.3,.19,.1)),r=e.plain(le(.1,.3,.05),.55),s=e.leaf(le(.015,.14,.02),le(.1,.34,.045)),o=.022,a=_=>mc(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(cn([...c,2.6,2.63].map(_=>[...a(_),_]),[...l,.06,.015],{radial:8,per:5}),n);for(let _=0;_<5;_++){let f=2*Math.PI*_/5+t.uniform(-.3,.3),p=Math.cos(f),y=Math.sin(f);i.stat(cn([[.03*p,.03*y,.3],[.06*p,.06*y,.17],[.1*p,.1*y,.07],[.14*p,.14*y,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,f,p)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:f-Math.PI/2+t.uniform(-.5,.5),s:p,ph:t.uniform(0,6.28)})},d=[.015,.09,.2,.235,.185,.06],m=[2.42,2.6,2.8,3.02,3.22,3.33];for(let _=0;_<6;_++){let f=2*Math.PI*_/6+t.uniform(-.15,.15),p=d.map((y,x)=>{let b=f+.22*x;return[y*Math.cos(b),y*Math.sin(b),m[x]+t.uniform(-.02,.02)]});i.stat(cn(p,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let y of[2,4])u(p[y],Math.atan2(p[y][1],p[y][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,f,p,y,x])=>{let b=Yr(56),L=Ji(C=>iu(c,l,_+(f-_)*C)+.018,_,f,p,b,y,.004,t,a);i.stat(cn(L,L.map((C,E)=>x*(1-.55*E/(b-1))),{radial:5,per:3}),r);for(let C=2;C<b-2;C+=Math.max(1,Math.floor((b-4)/Oo(22)))){let E=L[C],T=a(E[2]);u(E,Math.atan2(E[1]-T[1],E[0]-T[0]),t.uniform(.7,1.3))}});let g=i.inst(Gy(),s,h.length);return i.anim(_=>{h.forEach((f,p)=>Vs(g,p,f.p,f.s,[f.rx+.16*Math.sin(_*.2094+f.ph),f.ry,f.rz+.1*Math.sin(_*.1309+f.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:le(.45,1,.35),hot:le(.7,1,.3),mid:le(.15,.8,.05)}}function Xy(i){let{rng:t,m:e}=i,n=e.veins(le(.085,.065,.055),le(1,.3,.03),2,7,.06,0);n.roughness=.9;let r=e.lava(),s=e.core(le(1,.36,.04),le(.9,.12,.01),2,Ie);au(i,r,.25),au(i,s,-.18);let o=.014,a=g=>mc(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(cn(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,f=2.35)=>iu(c,l,_+(f-_)*g);for(let g=0;g<2;g++){let _=Yr(60),f=Ji(p=>h(p)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(cn(f,f.map((p,y)=>.012+.003*Math.sin(y*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=Yr(60),f=Ji(p=>h(p)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(cn(f,f.map((p,y)=>.0085+.002*Math.sin(y*.7)),{radial:5,per:3}),r)}{let g=Ji(_=>h(_,.5,2.2)-.001,.5,2.2,-3,Yr(50),.8,0,void 0,a);i.stat(cn(g,.0055,{radial:4,per:3}),r)}i.stat(yi(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(yi(.082,[0,0,0],.008,10,0),r,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(Vy(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),s);i.stat(yi(.165,[0,0,0],.007,14,0),r,[0,0,2.86]);let u=6,d=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),f=t.uniform(.16,.2);d.push({p:[f*Math.cos(_),f*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(cu,e.emissive(le(1,.45,.05),10),u);return i.anim(g=>{d.forEach((_,f)=>{let p=gc(g/60+_.ph),y=_.s*Math.min(1,p*6)*(1-.6*p);Vs(m,f,[_.p[0],_.p[1],2.9-.8*p**1.6],[.85*y,.85*y,7*y])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:le(1,.45,.1),hot:le(1,.7,.15),mid:le(1,.25,.02)}}function qy(i){let{rng:t,m:e}=i,n=e.metal(le(.1,.12,.16),.3),r=e.metal(le(.78,.84,.9),.18),s=e.water(),o=e.crystal(le(.2,.7,1),2.5),a=e.crystal(le(.4,.8,1),1.5);au(i,s,.3);let c=.006,l=_=>mc(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(cn(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(yi(.066,[0,0,0],.012,10,0),r,[0,0,2.56]);for(let _=0;_<3;_++){let f=Math.cos(2*Math.PI*_/3+.5),p=Math.sin(2*Math.PI*_/3+.5);i.stat(cn([[.04*f,.04*p,2.55],[.085*f,.085*p,2.68],[.12*f,.12*p,2.82],[.13*f,.13*p,2.93]],[.016,.012,.009,.004],{radial:6}),r)}for(let _=0;_<2;_++)i.stat(cn(Ji(.05,.4,2.45,7,Yr(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),r);{let _=Yr(64),f=Ji(b=>.058+.012*Math.sin(b*20),.45,2.5,3.2,_,1,0,void 0,l),p=f.map((b,L)=>.012+.014*(.5+.5*Math.sin(L*.45))),y=new zs(_,{radial:6,per:3});y.set(f,p),i.mesh(y.geo,s);let x=p.slice();i.anim(b=>{for(let L=0;L<_;L++)x[L]=p[L]*(1+.6*Math.sin(b*.2618-L*.7));y.set(f,x)})}[.7,1,1.35,1.7,2.05].forEach((_,f)=>{let p=f*2.1;i.stat(ri(.035,.035,.014,4,[0,0,p]),o,[.047*Math.cos(p),.047*Math.sin(p),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,f,p,y,x,b,L,C,E],T)=>{let M=20+T*50,S=T===0?1:-1,Z=y<p?-1:1,Q=Math.PI/180,q=Array.from({length:40},(W,U)=>{let A=U/39;return{a:(p+(y-p)*A)*Q,b:p*Q+Z*C*Q*A,R:_+(f-_)*A,y:b+.04*Math.sin(A*6),r:.004+x*Ho(Math.sin(Math.PI*A),.8)}}),at=(W,U,A,P)=>[W*t.uniform(.35,1.4),U*t.uniform(.8,1.2),-P*A+t.uniform(-1.4,1.4),t.uniform(1,5)],ot=q.map((W,U)=>[at(.07,.35,.9,U),at(.035,.7,1.7,U),at(.03,.3,1,U),at(.015,.6,1.8,U),at(.32,.45,.9,U),at(.2,.8,1.6,U),at(.1,1.3,2.3,U)]),pt=new zs(40,{radial:6,per:2}),D=q.map(()=>[0,0,0]),et=q.map(()=>0),z=i.mesh(pt.geo,s,[0,0,3]);z.renderOrder=2;let K=W=>{let U=ky(W,120,1,M,S),A=zy(W,120,M,12),P=Math.floor((W+M)/120),k=X=>X[0]*Math.sin(W*X[1]+X[2]+P*X[3]);q.forEach((X,B)=>{let F=ot[B],Y=X.a*(1-A)+X.b*A+U,j=X.R*(1-A)+L*(1+A*(k(F[0])+k(F[1])))*A;D[B][0]=j*Math.cos(Y),D[B][2]=j*Math.sin(Y),D[B][1]=X.y*(1-A)+(b+k(F[2])+k(F[3]))*A,et[B]=X.r*(1+.3*(1-A)*Math.sin(W*.2618-B*.8))*(1-A)+E*A*Math.max(.3,1+A*(k(F[4])+k(F[5])+k(F[6])))}),pt.set(D,et)};K(0),i.anim(K)});let d=[];for(let _=0;_<10;_++){let f=t.uniform(0,2*Math.PI),p=[Math.cos(f),0,Math.sin(f)],y=t.uniform(.2,.34),x=t.uniform(.12,.3);d.push({start:[p[0]*y,0,3+p[2]*y],vel:[p[0]*x+t.uniform(-.05,.05),t.uniform(-.1,.1),p[2]*x+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of d)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:Oo(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(cu,a,d.length+m.length);m.forEach((_,f)=>Vs(g,d.length+f,_.p,_.s)),i.anim(_=>{d.forEach((f,p)=>{let y=gc(_/f.per+f.ph),x=y*.9;Vs(g,p,[f.start[0]+f.vel[0]*x,f.start[1]+f.vel[1]*x,f.start[2]+f.vel[2]*x-.9*x*x],f.s*Math.min(1,y*10)*Math.min(1,(1-y)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(ri(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let f=2*Math.PI*_/3;i.stat(ri(.02,.12,.016,4,[Math.sin(f)*.4,-Math.cos(f)*.4,0]),o,[.045*Math.cos(f),.045*Math.sin(f),.36])}return{z:3,r:.145,glass:le(.3,.75,1),hot:le(.5,.95,1),mid:le(.05,.4,1)}}function Yy(i){let{rng:t,m:e}=i,n=e.veins(le(.03,.02,.06),le(.85,.6,1),3,6,.09,.5),r=e.metal(le(.62,.58,.72),.2),s=e.crystal(le(.35,.15,1),3),o=e.emissive(le(.65,.4,1),4),a=e.emissive(le(.6,.3,1),3);i.stat(cn([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(yi(.04,[0,0,0],.007,10,0),r,[0,0,_]);i.stat(cn([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(cn(Ji(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),r);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,f)=>i.stat(yi(f===0||f===4?.064:.058,[0,0,0],.011,10,0),r,[0,0,_]));let l=yi(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let f=e.emissive(le(.65,.4,1),4),p=f.emissiveIntensity;f.transparent=!0;let y=i.mesh(l,f);i.anim(x=>{let b=gc(x/60+_/4);y.position.z=.95+1.45*b,y.scale.set(1+.3*b,1+.3*b,1);let L=Math.min(1,b*8)*Math.min(1,(1-b)*3);f.emissiveIntensity=p*L,f.opacity=L})}let h=(_,f,p)=>hf((Math.sin(_*.9+f)+Math.sin(_*.37+f*2.3)-p)*3);for(let _=0;_<c.length-1;_++){let f=t.uniform(0,6.28),p=[.07*Math.cos(f),.07*Math.sin(f),c[_]],y=[.07*Math.cos(f+.9),.07*Math.sin(f+.9),c[_+1]],x=[(p[0]+y[0])/2,(p[1]+y[1])/2,(p[2]+y[2])/2],b=i.mesh(ou(t,[p[0]-x[0],p[1]-x[1],p[2]-x[2]],[y[0]-x[0],y[1]-x[1],y[2]-x[2]],6,.012,.005),o,x),L=t.uniform(0,6.28);i.anim(C=>{b.scale.setScalar(Math.max(1e-4,h(C,L,.3)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=.066;i.stat(ou(t,[p*Math.cos(f),p*Math.sin(f),.95],[p*Math.cos(f+.6),p*Math.sin(f+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let f=new R(t.gauss(),t.gauss(),t.gauss()).normalize(),p=t.uniform(.32,.5),y=i.mesh(ou(t,[f.x*.16,f.y*.16,f.z*.16],[f.x*p,f.y*p,f.z*p],7,.03,.005),o,[0,0,3]),x=t.uniform(0,6.28);i.anim(b=>{y.rotation.set(Math.floor(b/5+x)*1.7,0,Math.floor(b/4+x)*2.4,"ZYX"),y.scale.setScalar(Math.max(1e-4,h(b,x,.5)))})}for(let _=0;_<3;_++){let f=2*Math.PI*_/3,p=[.03,.12,.23,.23,.15],y=[2.5,2.66,2.85,3.08,3.22];i.stat(cn(p.map((x,b)=>[x*Math.cos(f+.3*b),x*Math.sin(f+.3*b),y[b]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),r)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,f,p,y])=>{let x=i.mesh(yi(_,f.map(b=>b*Math.PI/180),p,10),r,[0,0,3]);i.anim(b=>{x.rotation.z=b*y})}),i.stat(ri(.58,.06,.03,4),r,[0,0,3.14]);let u=[new R(0,.6,.8),new R(.7,-.3,.65),new R(-.45,.5,.75)],d=[1,-2,3],m=Array.from({length:6},(_,f)=>{let p=u[f%3].clone().normalize(),y=Math.abs(p.z)<.9?new R(0,0,1):new R(1,0,0),x=p.clone().cross(y).normalize(),b=p.clone().cross(x);return{e1:x,e2:b,R:t.uniform(.32,.5),th0:Math.floor(f/3)*Math.PI+t.uniform(-.3,.3),w:d[f%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(ri(.11,.11,.035,4),s,m.length);return i.anim(_=>{m.forEach((f,p)=>{let y=f.th0+_*f.w,x=f.R*(1+.12*Math.sin(_*.05236+f.ph));Vs(g,p,[x*(f.e1.x*Math.cos(y)+f.e2.x*Math.sin(y)),x*(f.e1.y*Math.cos(y)+f.e2.y*Math.sin(y)),3+x*(f.e1.z*Math.cos(y)+f.e2.z*Math.sin(y))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(ri(.1,.3,.04,5),s,[0,0,.32]),{z:3,r:.15,glass:le(.6,.3,1),hot:le(.7,.5,1),mid:le(.4,.1,1),style:"flicker"}}function Zy(i){let{rng:t,m:e}=i,n=e.veins(le(.02,.03,.05),le(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let r=e.metal(le(.8,.86,.95),.15),s=e.crystal(le(.25,.65,1),4),o=e.emissive(le(.7,.9,1),14),a=e.emissive(le(.3,.7,1),9);i.stat(cn([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let p=0;p<9;p++)i.stat(ri(.092,.092,.03+.0045*p,6,[0,0,p*.5]),n,[0,0,.55+.21*p]);for(let p=0;p<4;p++){let y=i.mesh(yi(.058+.006*p,[0,0,0],.006,12,.6),r,[0,0,.655+.42*p]);i.anim(x=>{y.rotation.z=x*(p%2===0?1:-1)*.05236})}let c=p=>{let y=Math.max(0,(p-.7)/.3);return .05+.26*Ho(Math.sin(y*Math.PI/2),1.5)};for(let p=0;p<2;p++){let y=Yr(110);i.stat(cn(Ji(c,.4,3.2,6,y,p*Math.PI),Array.from({length:y},(x,b)=>.0085+.004*Math.sin(b*.55+p)),{radial:5,per:3}),r)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([p,y,x,b])=>{let L=i.mesh(yi(p,y.map(C=>C*Math.PI/180),x,10),r,[0,0,3]);i.anim(C=>{L.rotation.z=C*b})}),i.stat(ri(.62,.05,.032,4),s,[0,0,3.17]);let l=mf(t,Oo(110),.35,.85);for(let p=0;p<Oo(40);p++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(p,y)=>p.map(x=>({rel:x,s:y(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),d=h(mf(t,Math.max(Oo(30),8),.4,.9),()=>t.uniform(.02,.045)),m=su([ri(1,1,.14,4),ri(1,1,.14,4,[Math.PI/2,0,0])].map(p=>(p.setIndex(Array.from({length:p.attributes.position.count},(y,x)=>x)),p))),g=i.inst(cu,o,u.length),_=i.inst(m,o,d.length),f=(p,y,x)=>{y.forEach((b,L)=>{let C=gc(x/b.per+b.ph),E=(1-C)**1.6;Vs(p,L,[b.rel[0]*E,b.rel[1]*E,3+b.rel[2]*E],b.s*Math.min(1,C*8)*(1-C)**.5)}),p.instanceMatrix.needsUpdate=!0};i.anim(p=>{f(g,u,p),f(_,d,p)}),i.stat(ri(.08,.31,.05,6),s,[0,0,.33]);for(let p=0;p<3;p++){let y=2*Math.PI*p/3+.4,x=Math.cos(y),b=Math.sin(y);i.stat(cn([[.035*x,.035*b,.52],[.07*x,.07*b,.44],[.11*x,.11*b,.34],[.1*x,.1*b,.24]],[.02,.016,.011,.003],{radial:6}),r)}return{z:3,r:.17,glass:le(.05,.25,1),hot:le(.2,.5,1),mid:le(0,.05,.4)}}var gf={verdant:Wy,ember:Xy,tide:qy,storm:Yy,void:Zy},$y={verdant:7,ember:8,tide:9,storm:10,void:11};function ji(i,t){let e=af(i),n=gf[e.base??e.id]?e.base??e.id:"verdant",r=new Zt,s=new Zt;s.rotation.x=-Math.PI/2,s.scale.setScalar(Fo),s.position.y=_r-3*Fo,r.add(s);let o=[],a=[],c=[],l=new pc,h={B:s,batch:l,rng:lf($y[n]),m:By(o,a),stat:(C,E,T,H,M)=>l.add(C,E,T,H,M),mesh:(C,E,T)=>{let H=new St(C,E);return T&&H.position.set(...T),s.add(H),H},inst:(C,E,T)=>{let H=new Us(C,E,T);return H.frustumCulled=!1,s.add(H),H},anim:C=>{c.push(C)}},u=gf[n](h);l.build(s);let d=new kt(e.gem),m=e.tint?new kt(e.tint):null,g=new we({color:m?u.glass.clone().lerp(d,.6):u.glass,emissive:d,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),_=new St(new Ne(u.r*Fo,20,14),g);_.position.y=_r+(u.z-3)*Fo,_.renderOrder=1,r.add(_);let f=h.m.core(m?u.hot.clone().lerp(d,.7):u.hot,m?u.mid.clone().lerp(d,.5):u.mid,6),p=new St(new Ne(u.r*Fo*.6,14,10),f);_.add(p);let y=f.emissiveIntensity;if(c.push(C=>{if(u.style==="flicker"){let E=Math.abs(Math.sin(C*.9)*Math.sin(C*.37+1.1));p.scale.setScalar(1+.1*E),f.emissiveIntensity=y*(.55+.45*E)*1.6}else p.scale.setScalar(1+.05*Math.sin(C*.1309))}),o.splice(o.indexOf(f),1),m)for(let C of[...o,...a])C.color.lerp(m,.55),C.emissive.getHex()!==0&&C.emissive.lerp(m,.7);let x=new ti(new Zn({map:t,color:d.getHex(),blending:pn,depthWrite:!1,transparent:!0,opacity:.5}));x.scale.setScalar(.45),x.position.y=_.position.y,r.add(x);let b=Math.random()*20,L=(C,E)=>{b+=C*(1+E*1.5);let T=b*24;for(let H of c)H(T,C)};return L(0,0),{group:r,gem:_,gemMat:g,glow:x,color:d,materials:o,update(C,E,T){L(E,T)}}}var ie=i=>new kt(i),be=i=>1-Math.abs((i%1+1)%1*2-1),ze=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),yr=(i,t)=>Math.exp(-(i*i)/(t*t)),_f=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function un(i,t,e,n,r=!1){let s=[],o=[],a=(h,u)=>e(r?h%i/i:h/i,u/t),c=(h,u,d)=>{let m=(h[0]+u[0]+d[0])/3,g=(h[1]+u[1]+d[1])/3,_=n(r?m/i%1:m/i,g/t);for(let[f,p]of[h,u,d])s.push(...a(f,p)),o.push(_.r,_.g,_.b)};for(let h=0;h<t;h++)for(let u=0;u<i;u++)c([u,h],[u,h+1],[u+1,h+1]),c([u,h],[u+1,h+1],[u+1,h]);let l=new Me;return l.setAttribute("position",new re(s,3)),l.setAttribute("color",new re(o,3)),l.computeVertexNormals(),l}function Rn(i,t,e,n=1,r=1,s=0,o=1){let a=i.length-1;return un(t,a,(c,l)=>{let h=Math.min(a-1,Math.floor(l*a)),u=l*a-h,d=i[h][0]+(i[h+1][0]-i[h][0])*u,m=i[h][1]+(i[h+1][1]-i[h][1])*u,g=(s+c*(o-s))*Math.PI*2;return[Math.sin(g)*m*n,d,Math.cos(g)*m*r]},e,s===0&&o===1)}function qe(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new R(...i[Math.min(s-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return un(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}function wi(i,t,e=[0,0,0],n=[0,0,0]){let r=new je(...i).toNonIndexed();r.rotateX(n[0]),r.rotateY(n[1]),r.rotateZ(n[2]),r.translate(...e);let s=r.attributes.position.count,o=new Float32Array(s*3);for(let a=0;a<s;a++)o[a*3]=t.r,o[a*3+1]=t.g,o[a*3+2]=t.b;return r.setAttribute("color",new Le(o,3)),r}function wn(i,t){let e=i.index?i.toNonIndexed():i,n=e.attributes.position.count,r=new Float32Array(n*3);for(let s=0;s<n;s++)r[s*3]=t.r,r[s*3+1]=t.g,r[s*3+2]=t.b;return e.setAttribute("color",new Le(r,3)),e.computeVertexNormals(),e}function _c(i){let t=new Ne(1,28,22),e=t.attributes.position,n=t.attributes.uv;for(let r=0;r<e.count;r++){let s=e.getX(r),o=e.getY(r),a=e.getZ(r),c=Math.max(0,a),l=s*i.w,h=o*i.h,u=a*i.d;if(o<0){let d=-o;l*=1-i.jaw*d**1.25,u*=1-.12*d,h*=1+i.chin*d}l*=1+.04*yr(o+.02,.22)*c,o>.2&&(l*=1-.08*(o-.2));for(let d of[-1,1])u-=.009*yr(s-d*.38,.2)*yr(o-.06,.13)*c;u+=i.brow*yr(o-.27,.08)*yr(s,.5)*c,u+=i.nose*yr(s,.11)*c*_f(.2,-.2,o)*_f(-.4,-.27,o),u+=.004*yr(s,.24)*yr(o+.5,.07)*c,a<0&&(u*=1.06),e.setXYZ(r,l,h,u),a>.05?n.setXY(r,.5+s*.5,.5+o*.5):n.setXY(r,.02,.97)}return t.computeVertexNormals(),t}function yc(i){let e=document.createElement("canvas");e.width=e.height=512;let n=e.getContext("2d"),r=(u,d)=>[(.5+u*.5)*512,(.5-d*.5)*512];n.fillStyle=i.skin,n.fillRect(0,0,512,512);let s=(u,d,m,g,_,f)=>{let[p,y]=r(u,d),x=m*512*.5;n.save(),n.translate(p,y),n.scale(1,g/m);let b=n.createRadialGradient(0,0,0,0,0,x);b.addColorStop(0,_.replace("A",String(f))),b.addColorStop(1,_.replace("A","0")),n.fillStyle=b,n.beginPath(),n.arc(0,0,x,0,Math.PI*2),n.fill(),n.restore()};for(let u of[-1,1])s(u*.62,-.18,.22,.3,i.shade,.35);s(0,-.72,.3,.12,i.shade,.3),s(.07,-.12,.05,.2,i.shade,.25);for(let u of[-1,1]){let d=u*.38,m=.06;s(d,m+.04,.26,.12,i.shade,.45);let[g,_]=r(d,m),f=i.eyeW*512*.5,p=i.eyeH*512*.5;if(n.save(),n.translate(g,_),n.scale(u,1),n.beginPath(),n.moveTo(-f,0),n.quadraticCurveTo(-f*.1,-p*1.1,f,-p*.15),n.quadraticCurveTo(f*.2,p*1.05,-f,0),n.closePath(),n.fillStyle=i.glowEyes?"#ffd23a":"#ece6ee",n.fill(),n.save(),n.clip(),n.fillStyle=i.iris,n.beginPath(),n.arc(-f*.1,p*.1,p*1.05,0,Math.PI*2),n.fill(),n.fillStyle="#120c14",n.beginPath(),i.glowEyes?n.ellipse(-f*.1,p*.1,p*.22,p*.8,0,0,Math.PI*2):n.arc(-f*.1,p*.1,p*.5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.8)",n.beginPath(),n.arc(-f*.26,-p*.25,p*.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(40,25,35,.6)",n.fillRect(-f,-p*1.3,f*2,p*(.3+i.lid)),n.restore(),n.strokeStyle="#1c1418",n.lineCap="round",n.lineWidth=512*.009,n.beginPath(),n.moveTo(-f*1.02,.02*p),n.quadraticCurveTo(-f*.1,-p*(1.15-i.lid*.6),f*1.08,-p*.3),n.stroke(),n.strokeStyle="rgba(80,55,60,.5)",n.lineWidth=512*.004,n.beginPath(),n.moveTo(-f*.7,p*.55),n.quadraticCurveTo(0,p*1,f*.8,p*.25),n.stroke(),i.wrinkles){n.strokeStyle="rgba(120,90,90,.45)",n.lineWidth=512*.004;for(let y of[-1,0,1])n.beginPath(),n.moveTo(f*1.15,y*p*.4),n.lineTo(f*1.5,y*p*.8-p*.1),n.stroke();n.beginPath(),n.moveTo(-f*.6,p*1.4),n.quadraticCurveTo(0,p*2,f*.7,p*1.2),n.stroke()}n.strokeStyle=i.brow,n.lineWidth=i.browW,n.beginPath(),n.moveTo(-f*1,-p*(2.3-i.browTilt)),n.quadraticCurveTo(f*.15,-p*3.2,f*1.15,-p*(2.6+i.browTilt)),n.stroke(),n.restore()}if(i.wrinkles){n.strokeStyle="rgba(120,90,90,.4)",n.lineWidth=512*.004;for(let u of[.42,.5]){let[d,m]=r(-.25,u),[g,_]=r(.25,u);n.beginPath(),n.moveTo(d,m),n.quadraticCurveTo((d+g)/2,m-6,g,_),n.stroke()}}n.fillStyle="rgba(80,50,55,.5)";for(let u of[-1,1]){let[d,m]=r(u*.06,-.32);n.beginPath(),n.ellipse(d,m,512*.012,512*.006,0,0,Math.PI*2),n.fill()}let[o,a]=r(0,-.52),c=i.lipW*512*.5,l=.05*512*.5;if(i.snarl){n.fillStyle="#2a1416",n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.fill(),n.fillStyle="#e8e0c8",n.fillRect(o-c*.85,a-l*.9,c*1.7,l*.8),n.fillRect(o-c*.7,a+l*.25,c*1.4,l*.6),n.strokeStyle="#2a1416",n.lineWidth=2;for(let u=-3;u<=3;u++)n.beginPath(),n.moveTo(o+u*c*.24,a-l),n.lineTo(o+u*c*.24,a+l),n.stroke();n.strokeStyle=i.lips,n.lineWidth=512*.008,n.beginPath(),n.ellipse(o,a,c,l*1.3,0,0,Math.PI*2),n.stroke()}else n.fillStyle=i.lips,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a-l*.9,o+c,a),n.quadraticCurveTo(o,a+l*1.2,o-c,a),n.fill(),n.strokeStyle="rgba(40,20,25,.7)",n.lineWidth=512*.005,n.beginPath(),n.moveTo(o-c,a),n.quadraticCurveTo(o,a+l*.3,o+c,a),n.stroke();let h=new Un(e);return h.colorSpace=an,h.anisotropy=4,h}function Gs(){let i=[];return{materials:i,mat:(e,n={})=>{let r=new we({color:n.vc?16777215:e,vertexColors:!!n.vc,metalness:n.metal??.04,roughness:n.rough??.8,flatShading:n.flat??!0,emissive:n.emissive??(n.vc?1315100:0),transparent:!0,side:n.double?Ie:Dn});return i.push({mat:r,color:r.color.clone(),emissive:r.emissive.clone()}),r}}}var Ft=(i,t,e,n=[0,0,0])=>{let r=new St(i,t);return r.position.set(...n),e.add(r),r};function xr(i,t,e,n,r,s){let o=new Zt;o.position.set(...t),o.rotation.z=-.02,i.add(o);let a=new Zt;a.rotation.x=.3,o.add(a);let c=ji(r,n);c.group.position.set(0,.24,.02),c.group.scale.setScalar(.8),a.add(c.group),s&&(s.position.set(0,0,.02),a.add(s));for(let l of c.materials)e.push({mat:l,color:l.color.clone(),emissive:l.emissive.clone()});return{staffPivot:o,staff:c,crystal:c.gem,crystalMat:c.gemMat,glow:c.glow}}function yf(i,t,e){let n=new zr;for(let r=0;r<8;r++){let s=Math.PI/2+r*Math.PI/4,o=r%2?t:i;r?n.lineTo(Math.cos(s)*o,Math.sin(s)*o):n.moveTo(Math.cos(s)*o,Math.sin(s)*o)}return n.closePath(),new Ns(n,{depth:e,bevelEnabled:!0,bevelThickness:e*.3,bevelSize:i*.06,bevelSegments:1}).center()}var xf=(i,t,e)=>{let n=be(i*e);return Math.abs(n-t)<.2||Math.abs(n-(1-t))<.2};function si(i,t,e,n=i,r=1){let s=new Zt,o=(a,c,l,h=[0,0,0],u=[1,1,1])=>{let d=Ft(wn(a,c),t,s,l);return d.rotation.set(...h),d.scale.set(...u),d};if(e){o(new je(.03,.085,.07),i,[.04,0,-.005]);for(let a=0;a<4;a++){let c=.03-a*.02,l=.028-a*.001,h=new Vn(l,.011,4,7,Math.PI*1.25);h.rotateX(Math.PI/2),o(h,n,[.012,c,0],[0,-.35,0])}o(new kr(.011,.04,2,5),i,[.02,.048,.03],[.2,0,1.2])}else{o(new je(.06,.07,.028),i,[0,-.035,0]);for(let a=0;a<4;a++)o(new je(.013,.05-Math.abs(a-1.5)*.007,.016),n,[-.022+a*.0145,-.092+Math.abs(a-1.5)*.003,.006],[.25,0,0]);o(new je(.014,.04,.016),n,[.034,-.045,.012],[.2,0,-.5])}return s.scale.setScalar(r),s}var Mr={goblin:16726564,witch:12086271,wizard:4827391,knight:16724016};function br(i,t,e,n){let r=new Zt;r.name="eyes",r.visible=!1;let s=new rn({color:new kt(e).lerp(new kt(16777215),.3),transparent:!0,depthWrite:!1}),o=new Zn({map:n,color:e,transparent:!0,opacity:.8,depthWrite:!1});for(let a of t){let c=new St(new Ne(.011,8,6),s);c.position.set(...a),c.scale.set(1.6,.75,.5),r.add(c);let l=new ti(o);l.position.set(a[0],a[1],a[2]+.012),l.scale.setScalar(.06),r.add(l)}return i.add(r),r}var Ge={robe:ie(3433416),robeDeep:ie(2575516),cream:ie(15853519),creamDeep:ie(14273968),gold:ie(14989388),goldDeep:ie(11568688),skin:ie(15916495),hair:ie(16052974),hairShade:ie(13618374),leather:ie(7686442),leatherDeep:ie(5583641),boot:ie(2903964)},Zr={w:.088,h:.122,d:.106,jaw:.42,chin:.06,nose:.022,brow:.008};function Mf(i,t,e){let{materials:n,mat:r}=Gs(),s=r(16777215,{vc:!0,double:!0}),o=r(Ge.skin,{rough:.7}),a=r(Ge.gold,{metal:.3,rough:.35,emissive:2760200}),c=i==="ally",l=c?ie(3117168):Ge.robe,h=c?ie(2255442):Ge.robeDeep,u=(q,at,ot,pt)=>xf(q,at,ot)?Ge.gold:pt,d=new Zt,m=new Zt;d.add(m);for(let q of[-1,1])Ft(wn(new Ne(.06,7,5),Ge.boot),s,m,[q*.09,.05,.08]).scale.set(.9,.75,1.6);Ft(Rn([[1.46,.1],[1.4,.165],[1.24,.18],[1.04,.165],[.7,.21],[.36,.255],[.3,.26],[.24,.266],[.18,.272],[.12,.278],[.04,.29]],36,(q,at)=>{let ot=q<.06||q>.94,pt=Math.floor(at*10);return pt===9?Ge.cream:pt>=6?u(q,(pt-5.5)/3,12,ot?Ge.creamDeep:h):ot?ze(Ge.cream,Ge.creamDeep,.3*at):ze(l,h,.3*be(q*12)*at)},1.1,.8),s,m);let g=un(48,30,(q,at)=>{let ot=.55+.35*at**1.3,pt=ot+q*(Math.PI*2-2*ot),D=.13,et,z,K;if(at<D){let W=at/D;et=1.58-.15*W**.8,z=.1+.15*W**.7,K=.74}else{let W=(at-D)/(1-D);et=1.43-W*1.3,z=.25+.14*W**1.2,K=.74+.16*W}return z*=1+.05*Math.sin(pt*7)*Math.max(0,at-D),[Math.sin(pt)*z*1.1,et,Math.cos(pt)*z*K-.03*at]},(q,at)=>q<.03||q>.97||at>.95?Ge.cream:at>.8?u(q,(at-.8)/.15,16,h):ze(l,h,.25+.3*be(q*9)));Ft(g,s,m),Ft(un(6,4,(q,at)=>[(q-.5)*(.26-.2*at),1.56-at*.3,-.15-.04*Math.cos((q-.5)*3)-.03*at],(q,at)=>at>.85?Ge.cream:ze(h,l,.3*be(q*2))),s,m),Ft(new ve(.035,.035,.014,10).rotateX(Math.PI/2),a,m,[0,1.47,.135]),Ft(new Vn(.035,.007,4,10),a,m,[0,1.47,.142]);for(let q of[-1,1])Ft(new ve(.012,.012,.06,5).rotateZ(Math.PI/2),a,m,[q*.065,1.48,.125]);Ft(Rn([[1.08,.172],[1.02,.17]],16,()=>Ge.leather,1.1,.82),s,m),Ft(new Lo(.04,0),a,m,[0,1.05,.145]).scale.set(.9,1.1,.35),Ft(wn(new Lo(.02,0),Ge.leatherDeep),s,m,[0,1.05,.158]).scale.set(.9,1.1,.3),Ft(un(1,6,(q,at)=>[.03+(q-.5)*.045+.02*Math.sin(at*3),1.03-at*.48,.15+.035*at+.012*Math.sin(at*6)],(q,at)=>at>.9?Ge.gold:ze(Ge.leather,Ge.leatherDeep,.3*at)),s,m),Ft(new ve(.043,.052,.12,7),o,m,[0,1.53,0]);let f=new Zt;f.position.set(0,1.66,0),m.add(f);let p=r(16777215,{rough:.7,flat:!1});p.map=yc({skin:"#f2ddcf",shade:"rgba(160,120,115,A)",iris:"#5d7590",eyeW:.2,eyeH:.07,lid:.55,brow:"#f0eee8",browW:15,browTilt:.2,lips:"#b77a72",lipW:.2,wrinkles:!0}),Ft(_c(Zr),p,f);let y=(q,at)=>ze(Ge.hair,Ge.hairShade,.2+.5*be(q*9)*(.3+.7*at));Ft(un(18,3,(q,at)=>{let ot=-Math.PI+q*Math.PI*2,pt=Math.abs(ot),D=pt<1?.62-.3*(pt/1):.32-.6*((pt-1)/(Math.PI-1)),et=Math.PI/2-at*(Math.PI/2-D),z=1.09;return[Math.sin(ot)*Math.cos(et)*Zr.w*z,Math.sin(et)*Zr.h*z,Math.cos(ot)*Math.cos(et)*Zr.d*z]},y,!0),s,f),Ft(un(18,10,(q,at)=>{let ot=Math.PI*.4+q*Math.PI*1.2,pt=.08-at*(.72+.1*be(q*6+.3)),D=at<.25?.12+at*.26:.185+.04*Math.sin(at*3.1),et=.02*Math.sin(at*14+ot*3)*at;return[Math.sin(ot)*(D+et)*1.05,pt,Math.cos(ot)*(D+et)*.8-.02-.05*at]},y),s,f);for(let q of[-1,1]){let at=Array.from({length:8},(ot,pt)=>{let D=pt/7;return[q*(.095+.05*D+.02*Math.sin(D*9)),.02-D*.5,0+.05*D-.025*Math.sin(D*7)]});Ft(qe(at,ot=>.03*(1-.6*ot)+.008,5,(ot,pt)=>y(pt,ot),[1,1,.6]),s,f)}Ft(un(10,12,(q,at)=>{let ot=q-.5,D=-.02-.06*(1-Math.abs(ot)*2)**2-at*(.56+.06*be(q*3+.5)),et=(.09+.02*Math.sin(Math.PI*Math.min(1,at*1.6)))*(1-.75*at**1.6),z=ot*2*et+.008*Math.sin(at*12+q*4),K=.065+.04*Math.cos(ot*Math.PI)+.085*at**.8-(at<.08?.03*Math.abs(ot)*2:0);return[z,D,K]},(q,at)=>ze(Ge.hair,Ge.hairShade,.15+.45*be(q*5)*at)),s,f);for(let q of[-1,1])Ft(qe([[q*.004,-.045,.108],[q*.035,-.055,.106],[q*.06,-.075,.095],[q*.07,-.11,.088]],at=>.014*(1-.6*at)+.004,5,()=>Ge.hair),s,f);let x=new Zt;x.position.set(0,.075,-.005),x.rotation.set(-.08,0,-.05),f.add(x),Ft(un(20,3,(q,at)=>{let ot=q*Math.PI*2,pt=.13+at*.17;return[Math.sin(ot)*pt,.02-.04*at*at,Math.cos(ot)*pt]},(q,at)=>ze(l,h,at>.85?.4:.2*be(q*5)),!0),s,x),Ft(qe([[0,.01,0],[0,.2,-.01],[0,.38,-.04],[-.02,.52,-.09],[-.07,.6,-.16],[-.13,.6,-.21],[-.18,.55,-.23]],q=>.15*(1-q)**1.3+.004,8,(q,at)=>ze(l,h,.25*be(at*4)+.2*q)),s,x),Ft(un(16,1,(q,at)=>{let ot=q*Math.PI*2,pt=.153-.005*at;return[Math.sin(ot)*pt,.025+at*.05,Math.cos(ot)*pt]},q=>be(q*16)>.5?Ge.gold:Ge.goldDeep,!0),s,x),Ft(yf(.055,.018,.01),a,x,[0,.08,.15]).rotation.x=-.1;let L=(q,at,ot)=>un(14,8,(pt,D)=>{let et=pt*Math.PI*2,z=.06+ot*Math.max(0,(D-.25)/.75)**1.3;return[Math.cos(et)*z,-(D*q),Math.sin(et)*z*.9+at*D*D]},(pt,D)=>D>.88?Ge.cream:D>.72?u(pt,(D-.72)/.16,5,h):ze(l,h,.3*be(pt*3)),!0),C=new Zt;C.position.set(-.22,1.42,0),C.rotation.set(.05,0,.12),m.add(C),Ft(L(.58,.05,.13),s,C),C.add(si(Ge.skin,s,!1)).position.set(0,-.56,.04);let E=new Zt;E.position.set(.22,1.42,.02),E.rotation.z=-.35,m.add(E),Ft(L(.4,0,.065),s,E).rotation.x=-.5,Ft(new ve(.03,.033,.12,6),o,E,[0,-.38,.19]).rotation.x=-.5;let{staffPivot:T,staff:H,crystal:M,crystalMat:S,glow:Z}=xr(E,[0,-.43,.24],n,t,e,si(Ge.skin,s,!0)),Q=br(f,[-1,1].map(q=>[q*.38*Zr.w,.06*Zr.h,.9*Zr.d]),Mr.wizard,t);return{root:d,body:m,head:f,arm:E,staffPivot:T,crystal:M,crystalMat:S,glow:Z,staff:H,height:2,materials:n,eyes:Q}}var he={plate:ie(14077887),plateHi:ie(15262420),plateLo:ie(11117201),plateDark:ie(8156776),white:ie(15789282),whiteLo:ie(14209732),under:ie(4862242),leather:ie(7226406),leatherLo:ie(5189401),sash:ie(7301690),sashLo:ie(5722928),slit:ie(1380879),steel:ie(13225168),grip:ie(4860952),brass:ie(12819016)};function bf(i,t,e){let{materials:n,mat:r}=Gs(),s=r(16777215,{vc:!0,double:!0}),o=r(16777215,{vc:!0,metal:.25,rough:.42,double:!0}),a=i==="ally"?ie(3119724):ie(12726316),c=i==="ally"?ie(2257999):ie(9314077),l=(E,T,H=6)=>ze(he.plate,be(E*H)>.5?he.plateHi:he.plateLo,.35+.15*T),h=new Zt,u=new Zt;h.add(u);for(let E of[-1,1]){let T=E*.105;Ft(un(8,4,(H,M)=>{let S=H*Math.PI*2,Z=-.07+M*.25,Q=.06-M*.035,q=.058*(1-.7*M**1.6);return[T+Math.cos(S)*q,Math.max(.005,Q+Math.sin(S)*q*.75),Z]},(H,M)=>Math.floor(M*4)%2?he.plateLo:he.plate,!0),o,u),Ft(qe([[T,.08,-.01],[T,.22,0],[T,.36,0],[T,.5,.005]],H=>.058+.016*Math.sin(H*2.6),8,(H,M)=>l(M,H)),o,u),Ft(wn(new Ne(.065,8,6),he.plateHi),o,u,[T,.53,.025]).scale.set(1,.9,.85),Ft(wn(new Nn(.05,.03,6).rotateZ(-E*Math.PI/2),he.plateLo),o,u,[T+E*.06,.53,.02]),Ft(qe([[T,.56,0],[T*1.02,.72,0],[T*.98,.9,-.005]],H=>.068+.022*H,8,(H,M)=>l(M,H)),o,u)}Ft(Rn([[1,.19],[.8,.22],[.6,.25],[.5,.26]],16,E=>ze(he.under,he.leatherLo,.4*be(E*8)),1.1,.85),s,u);for(let E of[!1,!0])Ft(un(8,10,(T,H)=>{let M=(E?Math.PI:0)+(T-.5)*2.2,S=1.36-H*.76-.02*be(T*4)*H,Z=(H<.45?.2+.03*Math.sin(H*7):.2+.12*(H-.45))+.012;return[Math.sin(M)*Z*1.12,S,Math.cos(M)*Z*.86]},(T,H)=>H>.82&&H<.87||H>.91&&H<.96?a:ze(he.white,he.whiteLo,.35*be(T*4)*H)),s,u);Ft(Rn([[1.58,.11],[1.53,.2],[1.42,.245],[1.28,.23],[1.14,.2],[1.02,.205]],16,(E,T)=>E<.04||E>.96?he.plateHi:l(E,T,8),1.12,.84),o,u);for(let E=0;E<3;E++)Ft(Rn([[1.02-E*.045,.205+E*.008],[.975-E*.045,.215+E*.008]],14,T=>E%2?he.plateLo:he.plate,1.12,.86),o,u);Ft(Rn([[1.66,.06],[1.62,.075],[1.57,.12]],12,(E,T)=>l(E,T)),o,u),Ft(qe(Array.from({length:15},(E,T)=>{let H=T/14*Math.PI*2;return[Math.sin(H)*.235,1.07+.03*Math.cos(H+.6),Math.cos(H)*.19]}),()=>.03,6,(E,T)=>ze(he.sash,he.sashLo,be(T*3+E*5)*.6),[1,1.4,1]),s,u);for(let E of[0,1])Ft(qe([[-.2,1.06,.1],[-.22-E*.02,.95,.12],[-.21-E*.04,.82-E*.04,.12]],T=>.025*(1-.3*T),5,T=>ze(he.sash,he.sashLo,T),[1.4,1,.5]),s,u);for(let E of[-1,1]){let T=Array.from({length:9},(H,M)=>{let S=M/8,Z=-.9+S*4.6,Q=1.52-.48*S;return[E*Math.sin(Z)*.285,Q+.06*Math.sin(S*Math.PI),Math.cos(Z)*.222]});Ft(qe(T,()=>.016,4,H=>ze(he.leather,he.leatherLo,.4*be(H*4)),[1,1.5,1]),s,u)}Ft(wi([.06,.06,.02],he.brass,[0,1.46,.235],[0,0,Math.PI/4]),s,u);let d=new Zt;d.position.set(0,1.18,-.24),d.rotation.z=.55,u.add(d),Ft(wi([.055,.82,.012],he.steel,[0,-.12,0]),o,d),Ft(wn(new Nn(.039,.07,4).rotateX(Math.PI).rotateY(Math.PI/4),he.steel),o,d,[0,-.565,0]).scale.set(1,1,.22),Ft(wi([.24,.03,.035],he.brass,[0,.3,0]),s,d),Ft(wn(new ve(.018,.018,.16,6),he.grip),s,d,[0,.39,0]),Ft(wn(new Ne(.03,6,4),he.brass),s,d,[0,.48,0]),Ft(Rn([[.32,.02],[-.5,.05],[-.6,.03]],6,()=>he.leatherLo,1,.5),s,d);let m=new Zt;m.position.set(0,1.73,0),u.add(m),Ft(Rn([[.13,0],[.125,.06],[.105,.105],[.045,.122],[.025,.124],[.005,.125],[-.06,.125],[-.125,.12],[-.135,.11]],14,(E,T)=>Math.floor(T*8)===4&&(E<.2||E>.8)?he.slit:E<.025||E>.975?he.plateHi:l(E,T,6),1,1.06),o,m);for(let E=0;E<4;E++)Ft(wi([.012,.012,.01],he.slit,[.035+E%2*.025,-.05-Math.floor(E/2)*.03,.128],[0,.3,0]),s,m);for(let E of[-1,1])Ft(wn(new ve(.014,.014,.01,8).rotateZ(Math.PI/2),he.brass),s,m,[E*.128,-.01,0]);Ft(wi([.03,.025,.05],he.brass,[0,.13,-.01]),s,m);for(let E=0;E<7;E++){let T=(E-3)/3,H=.42-Math.abs(T)*.08,M=Array.from({length:7},(S,Z)=>{let Q=Z/6,q=Q*2.2;return[T*.03*(1+Q),.14+Math.sin(q)*.14*H/.42,-.01-(1-Math.cos(q))*H*.45+.06*Q]});Ft(qe(M,S=>.026*(1-S)**.7+.004,5,(S,Z)=>ze(a,c,.3*be(Z*2)+.4*S)),s,m)}let g=(E,T)=>{Ft(qe([[0,-.02,0],[0,-.14,0],[0,-.26,T*.3]],H=>.056-.006*H,7,(H,M)=>l(M,H)),o,E),Ft(wn(new Ne(.05,7,5),he.plateHi),o,E,[0,-.27,T*.3-.01])};for(let E of[-1,1]){let T=new Zt;T.position.set(E*.27,1.5,0),T.rotation.z=-E*.5,u.add(T),Ft(Rn([[.075,0],[.06,.07],[.02,.12],[-.03,.135],[-.07,.13]],10,(H,M)=>M>.85?he.plateLo:l(H,M,5),1,1),o,T),Ft(Rn([[-.06,.13],[-.1,.12]],10,()=>he.plateLo),o,T),Ft(wn(new ve(.035,.04,.02,10).rotateZ(-E*Math.PI/2),he.plateHi),o,T,[E*.125,-.03,0]),Ft(wn(new Ne(.014,6,4),he.brass),s,T,[E*.137,-.03,0])}let _=new Zt;_.position.set(-.26,1.44,0),_.rotation.set(.05,0,.1),u.add(_),g(_,.1),Ft(qe([[0,-.28,.02],[0,-.42,.05],[0,-.52,.06]],E=>.048+.008*E,7,(E,T)=>l(T,E)),o,_),_.add(si(he.plateHi,o,!1,he.plateLo,1.15)).position.set(0,-.53,.06);let f=new Zt;f.position.set(.26,1.44,.02),f.rotation.z=-.35,u.add(f),Ft(qe([[0,-.02,0],[0,-.12,0],[0,-.22,.04]],E=>.056-.006*E,7,(E,T)=>l(T,E)),o,f),Ft(wn(new Ne(.05,7,5),he.plateHi),o,f,[0,-.24,.05]),Ft(qe([[0,-.25,.07],[0,-.33,.15],[0,-.39,.21]],E=>.045+.01*E,7,(E,T)=>l(T,E)),o,f);let{staffPivot:p,staff:y,crystal:x,crystalMat:b,glow:L}=xr(f,[0,-.43,.25],n,t,e,si(he.plateHi,o,!0,he.plateLo,1.15)),C=br(m,[[-.035,.016,.128],[.035,.016,.128]],Mr.knight,t);return{root:h,body:u,head:m,arm:f,staffPivot:p,crystal:x,crystalMat:b,glow:L,staff:y,height:2,materials:n,eyes:C}}var Se={skin:ie(8688447),skinLo:ie(6714670),skinHi:ie(10136146),hair:ie(2892832),hairHi:ie(4536623),red:ie(11744555),redLo:ie(8528668),leather:ie(8015404),leatherLo:ie(5583897),wrap:ie(11045474),wrapLo:ie(8217925),shorts:ie(3814191),shortsLo:ie(2695967),brass:ie(12161605),nail:ie(3947042),ear:ie(10709594)},Si={w:.096,h:.112,d:.106,jaw:.22,chin:.02,nose:.036,brow:.016};function vf(i,t,e){let{materials:n,mat:r}=Gs(),s=r(16777215,{vc:!0,double:!0}),o=r(Se.skin,{rough:.75}),a=i==="ally"?ie(2920330):Se.red,c=i==="ally"?ie(2058598):Se.redLo,l=(T,H,M=5)=>ze(Se.skin,be(T*M)>.5?Se.skinHi:Se.skinLo,.35+.1*H),h=new Zt,u=new Zt;h.add(u);for(let T of[-1,1]){let H=T*.095;Ft(un(7,4,(M,S)=>{let Z=M*Math.PI*2,Q=-.06+S*.23,q=.05*(1-.35*S)*(S>.75?1-(S-.75)*1.6:1);return[H+T*.012*S+Math.cos(Z)*q,Math.max(.004,.035+Math.sin(Z)*q*.55-.01*S),Q]},(M,S)=>l(M,S),!0),s,u);for(let M=0;M<3;M++)Ft(wn(new Ne(.016,5,4),Se.skinLo),s,u,[H+T*.012+(M-1)*.022,.016,.165-Math.abs(M-1)*.01]);Ft(qe([[H,.05,-.01],[H,.3,-.005],[H*1.03,.48,.01],[H*1.05,.65,0],[H,.8,-.005]],M=>.04+.022*M+.008*Math.sin(M*7),7,(M,S)=>l(S,M)),s,u),Ft(qe([[H,.08,-.01],[H,.2,-.008],[H,.32,-.004],[H*1.02,.44,.005]],M=>.048+.008*M,7,(M,S)=>be(M*6+S*.5)>.5?Se.wrap:Se.wrapLo),s,u)}Ft(Rn([[.96,.17],[.86,.19],[.74,.21],[.66,.2]],14,(T,H)=>ze(Se.shorts,Se.shortsLo,.5*be(T*6)*H),1.08,.82),s,u),Ft(Rn([[1,.175],[.94,.178]],14,T=>be(T*7)>.85?Se.leatherLo:Se.leather,1.08,.84),s,u),Ft(wi([.06,.05,.02],Se.brass,[0,.97,.15]),s,u),Ft(wi([.035,.028,.024],Se.leatherLo,[0,.97,.152]),s,u);for(let T of[!1,!0])Ft(un(6,6,(H,M)=>{let S=(T?Math.PI:0)+(H-.5)*.9,Z=.19+.06*M,Q=.42+.1*be(H*3.5+.2)+.04*Math.sin(H*17);return[Math.sin(S)*Z*1.08,.96-M*Q,Math.cos(S)*Z*.86+(T?-.01:.01)]},(H,M)=>ze(a,c,.25+.35*be(H*3)*M)),s,u);Ft(Rn([[1.36,.075],[1.32,.155],[1.24,.18],[1.13,.155],[1.02,.14],[.94,.152]],14,(T,H)=>Math.min(T,1-T)<.12&&H>.4?be(H*6)>.5?Se.skinHi:Se.skinLo:l(T,H,7),1.1,.74),s,u);for(let T of[-1,1]){let H=Array.from({length:9},(M,S)=>{let Z=S/8,Q=-.9+Z*4.4;return[T*Math.sin(Q)*.212,1.33-.36*Z+.04*Math.sin(Z*Math.PI),Math.cos(Q)*.145]});Ft(qe(H,()=>.014,4,M=>ze(Se.leather,Se.leatherLo,.4*be(M*4)),[1,2,1]),s,u)}Ft(wi([.05,.05,.02],Se.brass,[0,1.27,.15],[0,0,Math.PI/4]),s,u);let d=new Zt;d.position.set(-.2,1.31,0),d.rotation.z=.55,d.scale.setScalar(.8),u.add(d),Ft(Rn([[.06,0],[.045,.06],[0,.1],[-.05,.11],[-.08,.1]],9,(T,H)=>H>.8||be(T*9)>.8?Se.leatherLo:Se.leather,1,1.1),s,d),Ft(qe(Array.from({length:11},(T,H)=>{let M=H/10*Math.PI*2;return[Math.sin(M)*.088,1.375+.02*Math.cos(M),Math.cos(M)*.08]}),()=>.03,7,(T,H)=>ze(a,c,.5*be(H*2+T*6))),s,u),Ft(un(8,5,(T,H)=>{let M=Math.PI+(T-.5)*(2.4-1.2*H),S=.13-.02*H;return[Math.sin(M)*S*1.1,1.42-H*.2+.03*Math.cos((T-.5)*6),Math.cos(M)*S-.04*H]},(T,H)=>ze(a,c,.2+.4*be(T*3)*(1-H))),s,u);for(let T of[0,1])Ft(qe([[-.04+T*.05,1.36,-.1],[-.07+T*.03,1.22,-.15],[-.09+T*.05,1.08,-.16]],H=>.035*(1-.3*H),5,H=>ze(a,c,H),[1.4,1,.45]),s,u);Ft(new ve(.04,.05,.1,7),o,u,[0,1.4,0]);let m=new Zt;m.position.set(0,1.51,.01),u.add(m);let g=r(16777215,{rough:.75,flat:!1});g.map=yc({skin:"#84933f",shade:"rgba(60,72,24,A)",iris:"#d2401c",eyeW:.2,eyeH:.075,lid:.2,brow:"#2a221c",browW:22,browTilt:1,lips:"#4e3a22",lipW:.34,snarl:!0,glowEyes:!0}),Ft(_c(Si),g,m);for(let T of[-1,1]){let H=[[T*.075,0,-.01],[T*.14,.03,-.03],[T*.21,.07,-.05],[T*.27,.105,-.07]];Ft(qe(H,M=>.035*(1-M)**.9+.002,6,(M,S)=>l(S,M,3),[1,1,.35]),s,m),Ft(qe(H.map(([M,S,Z])=>[M*.98,S,Z+.008]).slice(0,3),M=>.02*(1-M)+.002,5,()=>Se.ear,[1,1,.3]),s,m)}Ft(un(16,3,(T,H)=>{let M=-Math.PI+T*Math.PI*2,S=Math.abs(M),Z=S<.9?.55:.55-.65*((S-.9)/(Math.PI-.9)),Q=Math.PI/2-H*(Math.PI/2-Z),q=1.08+.03*be(T*8);return[Math.sin(M)*Math.cos(Q)*Si.w*q,Math.sin(Q)*Si.h*q,Math.cos(M)*Math.cos(Q)*Si.d*q]},(T,H)=>ze(Se.hair,Se.hairHi,.4*be(T*8+H)),!0),s,m);for(let T=0;T<13;T++){let H=-Math.PI+T/13*Math.PI*2+.2*Math.sin(T*7.3),M=.55+.5*(T*.37%1),S=new R(Math.sin(H)*Math.cos(M),Math.sin(M),Math.cos(H)*Math.cos(M)),Z=new R(S.x*Si.w,S.y*Si.h,S.z*Si.d);Ft(wn(new Nn(.022,.07+.03*(T*.61%1),4),T%3?Se.hair:Se.hairHi),s,m,[Z.x,Z.y,Z.z]).quaternion.setFromUnitVectors(new R(0,1,0),S.add(new R(0,0,-.5)).normalize())}let _=(T,H,M)=>Ft(qe([H,[(H[0]+M[0])/2,(H[1]+M[1])/2,(H[2]+M[2])/2],M],S=>.042-.006*S,7,(S,Z)=>be(S*4+Z*.4)>.5?Se.leather:Se.leatherLo),s,T),f=new Zt;f.position.set(-.2,1.3,0),f.rotation.set(.05,0,.14),u.add(f),Ft(qe([[0,0,0],[0,-.14,0],[0,-.26,.02],[0,-.4,.05],[0,-.5,.06]],T=>.042-.012*T+.006*Math.sin(T*6),7,(T,H)=>l(H,T)),s,f),_(f,[0,-.32,.04],[0,-.48,.06]),f.add(si(Se.leather,s,!1,Se.skin,1.05)).position.set(0,-.5,.065);let p=new Zt;p.position.set(.2,1.3,.02),p.rotation.z=-.35,u.add(p),Ft(qe([[0,0,0],[0,-.12,0],[0,-.22,.04],[0,-.3,.12],[0,-.38,.2]],T=>.042-.012*T,7,(T,H)=>l(H,T)),s,p),_(p,[0,-.28,.1],[0,-.38,.19]);let{staffPivot:y,staff:x,crystal:b,crystalMat:L,glow:C}=xr(p,[0,-.42,.23],n,t,e,si(Se.leather,s,!0,Se.skin,1.05)),E=br(m,[-1,1].map(T=>[T*.38*Si.w,.06*Si.h,.9*Si.d]),Mr.goblin,t);return{root:h,body:u,head:m,arm:p,staffPivot:y,crystal:b,crystalMat:L,glow:C,staff:x,height:1.75,materials:n,eyes:E}}var yn=i=>new kt(i),Qe={robe:yn(8017597),robeDeep:yn(6045590),trim:yn(11242982),dress:yn(3484996),dressHi:yn(4931936),lining:yn(6969968),skin:yn(15654104),hair:yn(13615844),hairDark:yn(10194102),hat:yn(7097004),hatBand:yn(10256598),boot:yn(3880006),belt:yn(4207692),moon:yn(15787712),lips:yn(5911888),eye:yn(1709088)};function ei(i,t,e,n,r=!1){let s=[],o=[],a=(u,d)=>e(r?u%i/i:u/i,d/t),c=(u,d)=>n(r?(u%i+i)%i/i:u/i,d/t),l=(u,d,m)=>{let g=c((u[0]+d[0]+m[0])/3,(u[1]+d[1]+m[1])/3);for(let[_,f]of[u,d,m])s.push(...a(_,f)),o.push(g.r,g.g,g.b)};for(let u=0;u<t;u++)for(let d=0;d<i;d++)l([d,u],[d,u+1],[d+1,u+1]),l([d,u],[d+1,u+1],[d+1,u]);let h=new Me;return h.setAttribute("position",new re(s,3)),h.setAttribute("color",new re(o,3)),h.computeVertexNormals(),h}function lu(i,t,e,n,r=[1,1,1]){let s=i.length,o=i.map((l,h)=>new R(...i[Math.min(s-1,h+1)]).sub(new R(...i[Math.max(0,h-1)])).normalize()),a=new R(1,0,0),c=o.map(l=>(a=a.clone().addScaledVector(l,-a.dot(l)),a.lengthSq()<1e-6&&(a=new R(0,0,1).cross(l)),a.normalize(),[a.clone(),l.clone().cross(a)]));return ei(e,s-1,(l,h)=>{let u=Math.round(h*(s-1)),d=l*Math.PI*2,m=t(h),[g,_]=c[u],f=i[u];return[f[0]+(Math.cos(d)*g.x+Math.sin(d)*_.x)*m*r[0],f[1]+(Math.cos(d)*g.y+Math.sin(d)*_.y)*m*r[1],f[2]+(Math.cos(d)*g.z+Math.sin(d)*_.z)*m*r[2]]},(l,h)=>n(h,l),!0)}var oi=i=>1-Math.abs((i%1+1)%1*2-1),Qi=(i,t,e)=>i.clone().lerp(t,Math.max(0,Math.min(1,e))),tr={w:.087,h:.126,d:.108},Ti=(i,t)=>Math.exp(-(i*i)/(t*t)),Ef=(i,t,e)=>Math.max(0,Math.min(1,(e-i)/(t-i)));function Ky(){let i=new Ne(1,28,22),t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++){let r=t.getX(n),s=t.getY(n),o=t.getZ(n),a=Math.max(0,o),c=r*tr.w,l=s*tr.h,h=o*tr.d;if(s<0){let d=-s;c*=1-.55*d**1.25,h*=1-.12*d,l*=1+.08*d}c*=1+.04*Ti(s+.02,.22)*a,s>.2&&(c*=1-.1*(s-.2));for(let d of[-1,1])h-=.008*Ti(r-d*.38,.2)*Ti(s-.06,.13)*a;h+=.006*Ti(s-.3,.07)*Ti(r,.5)*a;let u=Ti(r,.1)*a*Ef(.2,-.2,s)*Ef(-.38,-.26,s);h+=.017*u,h+=.005*Ti(r,.24)*Ti(s+.5,.07)*a,h-=.004*Ti(r,.3)*Ti(s+.38,.05)*a,o<0&&(h*=1.06),t.setXYZ(n,c,l,h),o>.05?e.setXY(n,.5+r*.5,.5+s*.5):e.setXY(n,.02,.97)}return i.computeVertexNormals(),i}function Jy(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=(h,u)=>[(.5+h*.5)*512,(.5-u*.5)*512];e.fillStyle="#e9d7d3",e.fillRect(0,0,512,512);let r=(h,u,d,m,g,_)=>{let[f,p]=n(h,u),y=d*512*.5;e.save(),e.translate(f,p),e.scale(1,m/d);let x=e.createRadialGradient(0,0,0,0,0,y);x.addColorStop(0,g.replace("A",String(_))),x.addColorStop(1,g.replace("A","0")),e.fillStyle=x,e.beginPath(),e.arc(0,0,y,0,Math.PI*2),e.fill(),e.restore()};for(let h of[-1,1])r(h*.62,-.18,.22,.3,"rgba(150,110,130,A)",.28),r(h*.42,-.2,.16,.1,"rgba(220,140,150,A)",.22);r(0,-.72,.3,.12,"rgba(140,100,120,A)",.25);for(let h of[-1,1]){let u=h*.38,d=.06;r(u,d+.06,.28,.12,"rgba(120,85,140,A)",.55);let[m,g]=n(u,d),_=.21*512*.5,f=.082*512*.5;e.save(),e.translate(m,g),e.scale(h,1),e.beginPath(),e.moveTo(-_,0),e.quadraticCurveTo(-_*.1,-f*1.1,_,-f*.15),e.quadraticCurveTo(_*.2,f*1.05,-_,0),e.closePath(),e.fillStyle="#efe9f2",e.fill(),e.save(),e.clip(),e.fillStyle="#4a3a5c",e.beginPath(),e.arc(-_*.12,f*.12,f*1.05,0,Math.PI*2),e.fill(),e.fillStyle="#1a1220",e.beginPath(),e.arc(-_*.12,f*.12,f*.5,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,.85)",e.beginPath(),e.arc(-_*.28,-f*.25,f*.2,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,40,70,.55)",e.fillRect(-_,-f*1.2,_*2,f*.55),e.restore(),e.strokeStyle="#1c1420",e.lineCap="round",e.lineWidth=512*.01,e.beginPath(),e.moveTo(-_*1.02,.02*f),e.quadraticCurveTo(-_*.1,-f*1.15,_*1.12,-f*.35),e.stroke(),e.lineWidth=512*.006;for(let p=0;p<4;p++){let y=.55+p*.15;e.beginPath(),e.moveTo(_*(y*2-1),-f*(.95-p*.15)),e.lineTo(_*(y*2-1)+_*.18,-f*(1.35-p*.12)),e.stroke()}e.strokeStyle="rgba(90,60,90,.55)",e.lineWidth=512*.004,e.beginPath(),e.moveTo(-_*.9,-f*.9),e.quadraticCurveTo(0,-f*2,_*.95,-f*1),e.stroke(),e.strokeStyle="rgba(90,60,90,.4)",e.beginPath(),e.moveTo(-_*.6,f*.55),e.quadraticCurveTo(_*.1,f*1.05,_*.85,f*.2),e.stroke(),e.strokeStyle="#4a3a55",e.lineWidth=512*.011,e.beginPath(),e.moveTo(-_*.95,-f*2.7),e.quadraticCurveTo(_*.2,-f*3.4,_*1.15,-f*2.6),e.stroke(),e.restore()}r(.07,-.12,.05,.2,"rgba(160,120,135,A)",.22),e.fillStyle="rgba(110,70,90,.55)";for(let h of[-1,1]){let[u,d]=n(h*.06,-.31);e.beginPath(),e.ellipse(u,d,512*.012,512*.006,0,0,Math.PI*2),e.fill()}let[s,o]=n(0,-.5),a=.25*512*.5,c=.065*512*.5;e.fillStyle="#5b2f50",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s-a*.5,o-c*1.2,s-a*.1,o-c*.9),e.lineTo(s,o-c*.6),e.lineTo(s+a*.1,o-c*.9),e.quadraticCurveTo(s+a*.5,o-c*1.2,s+a,o),e.closePath(),e.fill(),e.fillStyle="#7b4468",e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*2,s+a,o),e.closePath(),e.fill(),e.strokeStyle="#3a1c33",e.lineWidth=512*.006,e.beginPath(),e.moveTo(s-a,o),e.quadraticCurveTo(s,o+c*.35,s+a,o),e.stroke(),r(.03,-.535,.05,.02,"rgba(255,220,235,A)",.4);let l=new Un(t);return l.colorSpace=an,l.anisotropy=4,l}function wf(i,t,e){let n=[],r=(W,U={})=>{let A=new we({color:U.vc?16777215:W,vertexColors:!!U.vc,metalness:U.metal??.04,roughness:U.rough??.82,flatShading:!0,emissive:U.emissive??(U.vc?1709092:0),transparent:!0,side:U.double?Ie:Dn});return n.push({mat:A,color:A.color.clone(),emissive:A.emissive.clone()}),A},s=r(16777215,{vc:!0,double:!0}),o=r(Qe.skin,{rough:.7}),a=r(Qe.eye,{rough:.5}),c=r(Qe.moon,{metal:.35,rough:.35,emissive:2761744}),l=(W,U,A,P=[0,0,0])=>{let k=new St(W,U);return k.position.set(...P),A.add(k),k},h=i==="ally"?yn(3840636):Qe.robe,u=i==="ally"?yn(2781272):Qe.robeDeep,d=i==="ally"?yn(7655598):Qe.trim,m=new Zt,g=new Zt;m.add(g);for(let W of[-1,1]){let U=W*.075;l(lu([[U,.98,0],[U*1.05,.62,.01],[U*1.1,.3,0],[U*1.1,.13,-.01]],P=>.068-.03*P,7,()=>Qe.boot),s,g);let A=ei(6,2,(P,k)=>{let X=P*Math.PI*2,B=k,F=-.05+B*.2,Y=.13-B*.11,j=.045*(1-.65*B*B);return[U+Math.cos(X)*j,Y+Math.sin(X)*j*.55,F]},()=>Qe.boot,!0);l(A,s,g),l(new ve(.012,.006,.12,5),a,g,[U,.06,-.045])}let _=ei(14,8,(W,U)=>{let A=U<.25?.02:.02+(U-.25)*.55,P=A+W*(Math.PI*2-2*A),k=1.1-U*.82-(W>.35&&W<.65?0:.04*U)+.03*oi(W*7)*U,X=.165+.15*U**1.2;return[Math.sin(P)*X,k,Math.cos(P)*X*.82]},(W,U)=>Qi(Qe.dress,Qe.dressHi,.6*oi(W*7)*U));l(_,s,g),l(ei(4,4,(W,U)=>{let A=-.35+W*.7,P=.15+.09*U;return[Math.sin(A)*P,.86-U*.6,Math.cos(A)*P*.62-.02]},()=>Qe.lining),s,g);let f=ei(10,5,(W,U)=>{let A=[[1.08,.16],[1.24,.165],[1.38,.19],[1.48,.18],[1.56,.1],[1.67,.052]],P=U*(A.length-1),k=Math.min(A.length-2,Math.floor(P)),X=P-k,B=A[k][0]+(A[k+1][0]-A[k][0])*X,F=A[k][1]+(A[k+1][1]-A[k][1])*X,Y=W*Math.PI*2;return[Math.sin(Y)*F*1.08,B,Math.cos(Y)*F*.78]},(W,U)=>Qi(Qe.dress,Qe.dressHi,U>.8?.5:.15*oi(W*4)),!0);l(f,s,g),l(ei(14,1,(W,U)=>{let A=W*Math.PI*2,P=.172+.006*U;return[Math.sin(A)*P*1.08,1.04+U*.11,Math.cos(A)*P*.82]},()=>Qe.belt,!0),s,g);let p=(W,U)=>{let A=new zr;A.absarc(0,0,W,Math.PI*.18,Math.PI*1.82,!1),A.absarc(W*.38,0,W*.78,Math.PI*1.7,Math.PI*.3,!0);let P=new Ns(A,{depth:U,bevelEnabled:!0,bevelThickness:U*.4,bevelSize:W*.08,bevelSegments:1,curveSegments:6});return P.center(),P};l(new Vn(.05,.012,4,10),c,g,[0,1.095,.152]).scale.set(1,.85,.6),l(p(.042,.012),c,g,[0,1.095,.162]).rotation.z=.5;let x=9,b=ei(28,14,(W,U)=>{let A=.36+.48*U**1.2,P=A+W*(Math.PI*2-2*A),k=.07+.16*oi(W*x+.5)+(W<.06||W>.94?.08:0),X=.14,B,F,Y;if(U<X){let j=U/X;B=1.61-.14*j**.8,F=.1+.155*j**.7,Y=.72}else{let j=(U-X)/(1-X);B=1.47-j*(1.47-k),F=.255+.25*j**1.3,Y=.72+.22*j}return F*=1+.07*Math.sin(P*8)*Math.max(0,U-X),[Math.sin(P)*F*(1.12-.1*U),B,Math.cos(P)*F*Y-.03*U]},(W,U)=>{let A=U>.89||W<.03||W>.97,P=Qi(h,u,.35*oi(W*8+.25)+(W>.3&&W<.7?.15:0));return A?d:P});l(b,s,g),l(ei(10,2,(W,U)=>{let A=Math.PI*.55+W*Math.PI*.9,P=.105+.045*U;return[Math.sin(A)*P*1.1,1.58+U*.13,Math.cos(A)*P*.85]},(W,U)=>Qi(h,d,U>.6?1:0)),s,g),l(new ve(.045,.055,.12,7),o,g,[0,1.63,0]);let L=new Zt;L.position.set(0,1.76,0),g.add(L);let C=r(16777215,{rough:.7});C.map=Jy(),C.flatShading=!1,l(Ky(),C,L),l(ei(20,4,(W,U)=>{let A=-Math.PI+W*Math.PI*2,P=Math.abs(A),k=P<.08?.72:P<.95?.6-.42*((P-.08)/.87)**.8:.18-.5*((P-.95)/(Math.PI-.95)),X=Math.PI/2-U*(Math.PI/2-k),B=1.085+.015*Math.sin(A*9);return[Math.sin(A)*Math.cos(X)*tr.w*B,Math.sin(X)*tr.h*B+.004,Math.cos(A)*Math.cos(X)*tr.d*B]},(W,U)=>Qi(Qe.hair,Qe.hairDark,.15+.4*oi(W*14)*U),!0),s,L);let E=(W,U)=>Qi(Qe.hair,Qe.hairDark,.25+.5*oi(W*9)*(.4+.6*U));l(ei(18,10,(W,U)=>{let A=Math.PI*.42+W*Math.PI*1.16,P=.1-U*(.95+.14*oi(W*6+.3)),k=U<.25?.13+U*.28:.2+.05*Math.sin(U*3.1),X=.022*Math.sin(U*15+A*3)*U;return[Math.sin(A)*(k+X)*1.05,P,Math.cos(A)*(k+X)*.85-.02-.05*U]},E),s,L);for(let W of[-1,1])for(let U of[0,1]){let A=W*(.098+U*.03),P=.035-U*.05,k=Array.from({length:8},(X,B)=>{let F=B/7;return[A+W*(.06*F+.025*Math.sin(F*9+U)),.04-F*(.55+.08*U),P+.06*F-.03*Math.sin(F*7)]});l(lu(k,X=>.035*(1-.6*X)+.008,5,(X,B)=>E(B,X),[1,1,.55]),s,L)}let T=new Zt;T.position.set(0,.075,-.005),T.rotation.set(-.12,0,.07),L.add(T),l(ei(20,3,(W,U)=>{let A=W*Math.PI*2,P=.14+U*.24;return[Math.sin(A)*P,.02-.075*U*U+.012*Math.sin(A*3)*U,Math.cos(A)*P]},(W,U)=>Qi(Qe.hat,u,U>.9?.25:.2*oi(W*5)),!0),s,T),l(lu([[0,.01,0],[0,.17,-.015],[.01,.31,-.05],[.04,.42,-.11],[.1,.48,-.18],[.17,.47,-.23],[.22,.42,-.25]],W=>.165*(1-W)**1.35+.004,8,(W,U)=>Qi(Qe.hat,u,.25*oi(U*4)+.15*W)),s,T),l(ei(16,1,(W,U)=>{let A=W*Math.PI*2,P=.168-.006*U;return[Math.sin(A)*P,.025+U*.06,Math.cos(A)*P]},()=>Qe.hatBand,!0),s,T);let M=l(p(.04,.012),c,T,[0,.055,.172]);M.rotation.z=.5;let S=(W,U,A=.15)=>ei(10,6,(P,k)=>{let X=P*Math.PI*2,B=.065+A*Math.max(0,(k-.3)/.7)**1.4,F=k<.99?0:.07*oi(P*4),Y=-(k*W)-F,j=U*k*k;return[Math.cos(X)*B,Y,Math.sin(X)*B*.9+j]},(P,k)=>k>.85?d:Qi(h,u,.3*oi(P*3)),!0),Z=new Zt;Z.position.set(-.23,1.47,0),Z.rotation.set(.05,0,.12),g.add(Z),l(S(.6,.06),s,Z),Z.add(si(Qe.skin,s,!1)).position.set(0,-.58,.05);let Q=new Zt;Q.position.set(.23,1.47,.02),Q.rotation.z=-.35,g.add(Q);let q=l(S(.4,0,.07),s,Q);q.rotation.x=-.5;let at=l(new ve(.03,.034,.12,6),o,Q,[0,-.38,.19]);at.rotation.x=-.5;let{staffPivot:ot,staff:pt,crystal:D,crystalMat:et,glow:z}=xr(Q,[0,-.43,.24],n,t,e,si(Qe.skin,s,!0)),K=br(L,[-1,1].map(W=>[W*.38*tr.w,.06*tr.h,.9*tr.d]),Mr.witch,t);return{root:m,body:g,head:L,arm:Q,staffPivot:ot,crystal:D,crystalMat:et,glow:z,staff:pt,height:2,materials:n,eyes:K}}var jy={me:4020950,opp:12728908,ally:3121012};function Sf(i,t,e,n){if(i==="witch")return wf(t,e,n);if(i==="wizard")return Mf(t,e,n);if(i==="knight")return bf(t,e,n);if(i==="goblin")return vf(t,e,n);i=i;let r=[],s=(Z,Q={})=>{let q=new we({color:Z,metalness:Q.metal??.05,roughness:Q.rough??.8,flatShading:!0,emissive:Q.emissive??0,emissiveIntensity:Q.ei??1,transparent:!0});return r.push({mat:q,color:q.color.clone(),emissive:q.emissive.clone()}),q},o=(Z,Q,q=0,at=0,ot=0)=>{let pt=new St(Z,Q);return pt.position.set(q,at,ot),pt},c=i==="goblin"||i==="kid"?.78:1,l=s(i==="goblin"?7323466:15778970),h=s(1840934),u=i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:jy[t],d=s(u),m=s(16766073,{metal:.2,rough:.4}),g=s(12897496,{metal:.3,rough:.45}),_=new Zt,f=new Zt;if(_.add(f),i==="wizard")f.add(o(new ve(.27,.46,1,9),d,0,.5,0)),f.add(o(new ve(.47,.47,.05,9),m,0,.03,0));else{let Z=i==="knight"?g:h;f.add(o(new ve(.09,.08,.6,6),Z,-.12,.3,0)),f.add(o(new ve(.09,.08,.6,6),Z,.12,.3,0)),f.add(o(new je(.16,.08,.26),h,-.12,.04,.05)),f.add(o(new je(.16,.08,.26),h,.12,.04,.05)),f.add(o(new ve(.3,.34,.32,8),d,0,.72,0))}let p=i==="knight"?g:d;if(f.add(o(new ve(.24,.29,.55,8),p,0,1.12,0)),f.add(o(new Vn(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let Z=o(new je(.34,.6,.04),d,0,1,.27);f.add(Z),f.add(o(new Ne(.13,6,4),g,-.3,1.36,0)),f.add(o(new Ne(.13,6,4),g,.3,1.36,0))}i==="human"&&f.add(o(new je(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let y=new Zt;y.position.set(0,1.58,0),f.add(y),y.add(o(new _n(.2,1),l));for(let Z of[-.07,.07])y.add(o(new Ne(.028,6,4),h,Z,.02,.18));if(i==="wizard"){let Z=s(15658740);y.add(o(new Nn(.17,.42,7),Z,0,-.2,.1).rotateX(Math.PI)),y.add(o(new je(.4,.34,.14),Z,0,-.06,-.13)),y.add(o(new ve(.36,.36,.04,12),d,0,.15,0));let Q=o(new Nn(.24,.62,9),d,0,.47,0);Q.rotation.z=.12,y.add(Q),y.add(o(new Vn(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="goblin"){for(let Z of[-1,1]){let Q=o(new Nn(.07,.34,5),l,Z*.24,.05,0);Q.rotation.z=-Z*1.25,y.add(Q)}y.add(o(new Nn(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")y.add(o(new _n(.235,1),g)),y.add(o(new je(.3,.05,.05),h,0,.02,.21)),y.add(o(new Nn(.06,.4,6),s(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")y.add(o(new je(.38,.2,.12),s(5913122),0,-.02,-.13)),y.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2),s(4029400),0,.03,0)),y.add(o(new je(.2,.025,.16),s(4029400),0,.05,.2));else if(i==="human"){let Z=s(5913122);y.add(o(new Ne(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),Z,0,.02,-.01)),y.add(o(new je(.4,.22,.12),Z,0,-.04,-.13))}let x=i==="knight"?g:d,b=new Zt;b.position.set(-.3,1.34,0),b.rotation.z=.25,f.add(b),b.add(o(new ve(.075,.1,.55,6),x,0,-.27,0)),b.add(o(new Ne(.07,6,4),l,0,-.58,0));let L=new Zt;L.position.set(.3,1.34,.02),L.rotation.z=-.35,f.add(L),L.add(o(new ve(.075,.1,.5,6),x,0,-.22,.05).rotateX(-.5));let C=o(new Ne(.07,6,4),l,0,-.42,.22);L.add(C);let E=new Zt;E.position.set(0,-.42,.22),E.rotation.z=.28,L.add(E);let T=ji(n,e);T.group.position.y=.24,T.group.scale.setScalar(.8),E.add(T.group);for(let Z of T.materials)r.push({mat:Z,color:Z.color.clone(),emissive:Z.emissive.clone()});let{gem:H,gemMat:M,glow:S}=T;return _.scale.setScalar(c),{root:_,body:f,head:y,arm:L,staffPivot:E,crystal:H,crystalMat:M,glow:S,staff:T,height:1.95*c,materials:r}}function hu(i){return["wizard","witch","goblin","knight","kid","human"].find(t=>t===i)??"wizard"}function Qy(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Un(i);return n.colorSpace=an,n}function Tf(i){let t;try{t=new Ls({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=Uo,t.setClearColor(0,0);let e=new Ds;e.add(new Os(14673663,2760768,1.4));let n=new Ki(16777215,2.2);n.position.set(2,3,4),e.add(n);let r=new Ki(10456319,2);r.position.set(-3,2,-3),e.add(r);let s=new _i(16777215,3,3,2);e.add(s);let o=new bn(30,1,.1,50),a=Qy(),c=new Zt;c.rotation.z=.12,e.add(c);let l=null,h="";function u(y){return l&&h===y||(l&&(c.remove(l.group),l.group.traverse(x=>x.geometry?.dispose?.())),l=ji(y,a),h=y,c.add(l.group),s.color.copy(l.color),s.position.set(.3,_r+.2,.6)),l}function d(){let y=i.clientWidth||300,x=i.clientHeight||420;t.setSize(y,x,!1),o.aspect=y/x;let b=1.55/Math.tan(Bs.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,b),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,f=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function p(y){if(!f()){m=0;return}m=requestAnimationFrame(p);let x=Math.min(.05,(y-g)/1e3);g=y,_+=x,l&&(c.rotation.y+=x*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=x*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,x,.25),t.render(e,o))}return{show(y){u(y),d(),m||(g=performance.now(),m=requestAnimationFrame(p))},thumbs(y,x,b){let L=[],C=h,E=c.rotation.y,T=c.position.y;t.setPixelRatio(1),t.setSize(x,b,!1),o.aspect=x/b,o.position.set(.35,_r+.12,1.6),o.lookAt(0,_r-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let H of y)u(H).update(1.2,0,0),t.render(e,o),L.push(i.toDataURL("image/png"));return c.rotation.y=E,c.position.y=T,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),C&&u(C),d(),L},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function Sn(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,r)=>n+(r-n)*e(),int:(n,r)=>n+Math.floor(e()*(r-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var zt=i=>i<0?0:i>1?1:i,Te=(i,t,e)=>{let n=zt((e-i)/(t-i));return n*n*(3-2*n)},Hf=(i,t,e)=>i+(t-i)*e,jt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],me=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],vr=(i,t)=>1-Math.exp(-i*t),ko=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},ue=i=>i*Math.PI/180;function Cn(i,t){let e=ue(i),n=ue(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function Ff(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return jt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var xc=(()=>{let i=Sn(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function Ve(i,t){let e=Math.floor(i),n=Math.floor(t),r=i-e,s=t-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,d=xc[h+c],m=xc[h+l],g=xc[u+c],_=xc[u+l];return(d*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var Af=Math.cos(.55),Rf=Math.sin(.55);function sn(i,t,e=5,n=2.03,r=.5){let s=0,o=1,a=0;for(let c=0;c<e;c++){s+=o*Ve(i+17.3*c,t-9.1*c),a+=o;let l=(i*Af-t*Rf)*n,h=(i*Rf+t*Af)*n;i=l,t=h,o*=r}return s/a}var Cf=Math.cos(.7),Pf=Math.sin(.7);function Of(i,t,e=5,n=2.1,r=.52){let s=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*Ve(i+31.7*l,t+5.3*l)-1);h=h*h*c,s+=h*o,a+=o,c=zt(h*2);let u=(i*Cf-t*Pf)*n,d=(i*Pf+t*Cf)*n;i=u,t=d,o*=r}return s/a}var If=new Map;function tx(i,t,e){let n=`${t}:${e}`,r=If.get(n);if(!r){let l=Sn(e*977+t);r=new Float32Array(t);for(let h=0;h<t;h++)r[h]=l.random();If.set(n,r)}let s=i*t,o=Math.floor(s),a=s-o,c=a*a*(3-2*a);return r[(o%t+t)%t]*(1-c)+r[((o+1)%t+t)%t]*c}function Lf(i,t=5,e=3,n=1,r=.5){let s=0,o=1,a=0;for(let c=0;c<t;c++)s+=o*tx(i,e*2**c,n+c),a+=o,o*=r;return s/a}function er(i,t){let e=i.stops;return(n,r,s)=>{let o=Math.asin(Math.max(-1,Math.min(1,s)))*180/Math.PI,a=Ff(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+r*l[1]+s*l[2])));for(let[u,d,m]of i.glow){let g=Math.exp(-h/u)*d*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-r*l[1]+s*l[2]))),d=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=d*i.anti_col[0],a[1]+=d*i.anti_col[1],a[2]+=d*i.anti_col[2]}}return a}}var Ws=(i,t)=>Math.round(255*Math.pow(zt(vr(i,t)),1/2.2));function du(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function pu(i,t=!1){let e=new Un(i);return e.colorSpace=an,t?e.wrapS=e.wrapT=Gi:e.wrapS=Or,e.anisotropy=2,e}function ex(i,t,e){let n=t/2,{c:r,g:s,img:o}=du(t,n),a=er(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??me(i.far2,.8),d=[],m=h.map(()=>[]);for(let b=0;b<t;b++){let L=(b+.5)/t,C=L*2*Math.PI;d.push(a(Math.cos(C)*Math.cos(.012),Math.sin(C)*Math.cos(.012),Math.sin(.012)));let E=1;for(let T of e.notchAz){let H=Math.abs(ko(C,ue(T)));E*=1-.85*Math.exp(-((H/ue(20))**2))}h.forEach(([T,H,M],S)=>{if(e.ridgeKind==="trees"){m[S].push(T+H*Lf(L,6,18,M,.62)**1.5);return}let Z=1-Math.abs(2*Lf(L,7,4,M,.56)-1);m[S].push((T+H*Z**1.3)*(.35+.65*E))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),f=null,p=[0,0,0],y=[0,0,0];if((i.milky??0)>0){let b=new R(.25,-.55,.8).normalize(),L=b.clone().cross(new R(0,0,1)).normalize(),C=b.clone().cross(L);f=[b.x,b.y,b.z],p=[L.x,L.y,L.z],y=[C.x,C.y,C.z]}for(let b=0;b<n;b++){let L=((b+.5)/n-.5)*Math.PI,C=Math.cos(L),E=Math.sin(L),T=n-1-b;for(let H=0;H<t;H++){let M=(H+.5)/t*2*Math.PI,S=C*Math.cos(M),Z=C*Math.sin(M),Q=E,q=a(S,Z,Q);if(f&&L>0){let D=Math.asin(Math.max(-1,Math.min(1,S*f[0]+Z*f[1]+Q*f[2]))),et=Math.atan2(S*y[0]+Z*y[1]+Q*y[2],S*p[0]+Z*p[1]+Q*p[2]),z=3*Math.cos(et),K=3*Math.sin(et),W=sn(z+9*D,K+4*D,4),U=Te(.5,.75,sn(z*1.7+17+14*D,K*1.7-5+6*D,3)),A=Math.exp(-((D/(i.milky_w??.2))**2))*(.25+1.3*W)*(1-.65*U)*i.milky,P=i.milky_col??[.55,.58,.85];q=[q[0]+A*P[0],q[1]+A*P[1],q[2]+A*P[2]]}let at=0;h.forEach(([,,,D,et],z)=>{let K=zt((m[z][H]-L)/l+.5);if(K<=0)return;let W=d[H],U=jt(et,W,D),A=jt(U,W,Math.exp(-Math.max(L,0)/.025)*.55);q=jt(q,A,K),at=Math.max(at,K)});let ot=zt(-L/l+.5);ot>0&&(q=jt(q,u,ot));let pt=(T*t+H)*4;o.data[pt]=Ws(q[0],c),o.data[pt+1]=Ws(q[1],c),o.data[pt+2]=Ws(q[2],c),o.data[pt+3]=255,g[T*t+H]=at,_[T*t+H]=(o.data[pt]+o.data[pt+1]+o.data[pt+2])/765}}let x=(i.stars??0)>0?nx(t,n,i.star_n,i.stars,g,_):null;return s.putImageData(o,0,0),{tex:pu(r),stars:x}}function nx(i,t,e,n,r,s){let o=Sn(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let d=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(d),_=Math.floor(m/(2*Math.PI)*i)%i,f=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),p=t-1-f,y=(1-r[p*i+_])*zt(1-s[p*i+_]*3),x=o.random()**6,b=a[o.int(0,3)];if(y<=.01)continue;let L=Math.min(1.6,(.1+.95*x)*n*y*2.2),C=140;c.push(C*Math.cos(g)*Math.cos(m),C*Math.cos(g)*Math.sin(m),C*Math.sin(g)),l.push(b[0]*L,b[1]*L,b[2]*L),h.push(1+x*2.5)}return{pos:c,col:l,size:h}}function ix(i,t,e){let n=t/2,{c:r,g:s,img:o}=du(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let d=0;d<n;d++){let m=((d+.5)/n-.5)*Math.PI,g=n-1-d;if(m<.02)continue;let _=Math.cos(m),f=Math.sin(m),p=1/(f+.16),y=c<50?Te(.02,.1,m)*(1-Te(c*.6,c,m)):Te(.02,.16,m);if(!(y<=0))for(let x=0;x<t;x++){let b=(x+.5)/t*2*Math.PI,L=_*Math.cos(b),C=_*Math.sin(b),E=L*p*i.cloud_scale,T=C*p*i.cloud_scale,H=sn(E*.6+9,T*.6+2,3)-.5,M=E+H*1.4,S=T+H*1.1,Z=sn(M,S,5),Q=Te(i.cov0,i.cov1,Z);if(Q<=.002)continue;let q=sn(M+h,S+u,5),at=zt(.55-(q-Z)*3.4)*(1-.4*Q),ot=Math.exp(-Math.acos(Math.max(-1,Math.min(1,L*e[0]+C*e[1]+f*e[2])))/1.1),pt=jt(i.cloud_lit_far,i.cloud_lit_near,ot),D=me(i.cloud_shadow,.6+.4*ot),et=jt(D,pt,at),z=Q*(1-Q)*4*ot*.6,K=(g*t+x)*4;o.data[K]=Ws(et[0]+z*i.cloud_rim[0],a),o.data[K+1]=Ws(et[1]+z*i.cloud_rim[1],a),o.data[K+2]=Ws(et[2]+z*i.cloud_rim[2],a),o.data[K+3]=Math.round(255*Q*y*i.cloud_opacity)}}return s.putImageData(o,0,0),pu(r)}function rx(i,t,e={}){let n=e.span??1.4,{c:r,g:s,img:o}=du(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let d=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(d,m),_=zt((1-g)/(n*2/t)+.5),f=Math.sqrt(zt(1-g*g)),p=0;for(let[C,E]of e.rings??[])p=Math.max(p,E*(1-Te(C-.1,C,g)));let y;if(i==="sun")y=jt(e.sunInner??[1,.62,.25],a,Math.pow(f,.5)),p=Math.max(p,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let C=zt(d*l[0]+m*l[1]+f*l[2]),E=Te(.5,.6,sn(d*1.9+4,m*1.9-2,5))*.42,T=Te(.62,.8,Ve(d*14,m*14))*.12,H=(.04+C**.8)*(.6+.4*f)*(.9-E-T)*(e.moonGain??1.55);y=me(a,H),p=Math.max(p,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}p*=1-Te(n*.86,n,g);let x=_+(1-_)*p,b=x>1e-4?[0,1,2].map(C=>(_*y[C]+(1-_)*p*c[C])/x):[0,0,0],L=(h*t+u)*4;o.data[L]=Math.round(255*Math.pow(zt(b[0]),1/2.2)),o.data[L+1]=Math.round(255*Math.pow(zt(b[1]),1/2.2)),o.data[L+2]=Math.round(255*Math.pow(zt(b[2]),1/2.2)),o.data[L+3]=Math.round(255*zt(x))}return s.putImageData(o,0,0),pu(r,!0)}var te=class{constructor(t=!1,e=0){Ze(this,"alpha",t);Ze(this,"pos",[]);Ze(this,"col",[]);Ze(this,"idx",[]);Ze(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((r,s)=>{let o=n?.[s];r.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new Me;return t.setAttribute("position",new re(this.pos,3)),t.setAttribute("color",new re(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new re(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function ge(i={}){let t=new Hs({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Ie:Dn}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var Ai=(i={})=>{let t=new rn({vertexColors:!0,side:Ie,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?pn:vi,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},Gn=(i,t=1)=>new rn({color:new kt(i[0]*t,i[1]*t,i[2]*t),side:Ie,toneMapped:!1});function Df(i,t,e){let n=[],r=[],s=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),r.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;s.push(l,h,l+1,h,h+1,l+1)}let o=new Me;return o.setAttribute("position",new re(n,3)),o.setAttribute("uv",new re(r,2)),o.setIndex(s),o}var uu=(i,t=!1)=>new rn({map:i,side:Ie,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function Uf(i,t){let e=new te,n=(r,s,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[d,m,g,_]of[[r,0,s,s],[0,r,-s,s],[-r,0,-s,-s],[0,-r,s,-s]])h.push(e.v([d*c-m*l,d*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let d=0;d<8;d++)e.f(u,h[d],h[(d+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function Ri(i){let t=new Zt,e=[],n=ex(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),r=n.tex,s=new St(Df(150,48,24),uu(r));if(s.renderOrder=-10,s.frustumCulled=!1,t.add(s),e.push(r,s.geometry,s.material),n.stars&&n.stars.pos.length){let x=new Me;x.setAttribute("position",new re(n.stars.pos,3)),x.setAttribute("color",new re(n.stars.col,3)),x.setAttribute("size",new re(n.stars.size,1));let b=new Yn({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:pn}),L=new mr(x,b);L.renderOrder=-9.5,L.frustumCulled=!1,t.add(L),e.push(x,b)}let o=null;if(i.clouds!==!1){let x=ix(i.th,Math.min(1024,i.W),i.bodies[0]);o=new St(Df(138,48,24),uu(x,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(x,o.geometry,o.material)}let a=i.body.span??1.4,c=rx(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=uu(c,!0);e.push(c,l);for(let x of i.bodies){let L=146*Math.tan(i.body.r)*a,C=new R(...x),E=C.clone().cross(new R(0,0,1));E.lengthSq()<1e-8&&(E=new R(1,0,0)),E.normalize();let T=E.clone().cross(C).normalize(),H=C.clone().multiplyScalar(146),M=new Me,S=[H.clone().addScaledVector(E,-L).addScaledVector(T,-L),H.clone().addScaledVector(E,L).addScaledVector(T,-L),H.clone().addScaledVector(E,L).addScaledVector(T,L),H.clone().addScaledVector(E,-L).addScaledVector(T,L)];M.setAttribute("position",new re(S.flatMap(Q=>[Q.x,Q.y,Q.z]),3)),M.setAttribute("uv",new re([0,0,1,0,1,1,0,1],2)),M.setIndex([0,1,2,0,2,3]);let Z=new St(M,l);Z.renderOrder=-8,Z.frustumCulled=!1,t.add(Z),e.push(M)}let h=Sn(i.seed??21),u=[],d=Math.round(i.sparkles*(i.bigShare??.27)),m=new rn({color:new kt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Ie}),g=new rn({color:new kt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Ie}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},f=Uf(..._.big),p=Uf(..._.small);e.push(m,g,f,p);for(let x=0;x<i.sparkles;x++){let b=x<d,L=h.uniform(0,360),C=h.uniform(..._.el??[35,88]),E=Cn(L,C);i.bodies.concat([Cn(i.th.body_az+180,i.th.body_el)]).some(S=>E[0]*S[0]+E[1]*S[1]+E[2]*S[2]>Math.cos(ue(24)))&&(L+=45);let T=Cn(L,C).map(S=>S*135),H=new St(b?f:p,b?m:g);H.position.set(...T),H.lookAt(0,0,0),H.renderOrder=-7,t.add(H);let M=b?24:12;u.push({m:H,big:b,pulses:Array.from({length:M},(S,Z)=>Math.round((Z+.5)*3600/M+h.int(-15,15)))})}let y=null;return{group:t,envMap(){if(y)return y;let x=r.image,b=document.createElement("canvas");b.width=x.width,b.height=x.height;let L=b.getContext("2d");return L.translate(b.width*.5,0),L.scale(-1,1),L.drawImage(x,0,0),L.drawImage(x,-x.width,0),y=new Un(b),y.colorSpace=an,y.mapping=Mo,e.push(y),y},update(x){o&&(o.rotation.z=x%3600/3600*Math.PI*2);let b=x%3600;for(let L of u){let C=1;for(let E of L.pulses){if(b<E-18||b>E+14)continue;let T=[[E-18,1],[E-9,L.big?1.35:1.2],[E,L.big?.2:.35],[E+14,1]];for(let H=0;H<3;H++)if(b>=T[H][0]&&b<=T[H+1][0]){let M=(b-T[H][0])/(T[H+1][0]-T[H][0]);C=Hf(T[H][1],T[H+1][1],M*M*(3-2*M))}}L.m.scale.setScalar(C)}},dispose(){for(let x of e)x.dispose()}}}function Pn(i,t,e=0,n=1,r=0){let s=Math.floor(i/t),o=(i-s*t)/t,a=o*o*(3-2*o),c=(s+r)%2?n:e,l=(s+r)%2?e:n;return Hf(c,l,a)}var Bf=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function Xs(i,t,e,n){let r=new te,s=[];for(let o of i){if(o===0){let c=r.v([0,0,e(0,0)],n(0,0));s.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(r.v([h,u,e(h,u)],n(h,u)))}s.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?r.f(s[0][0],s[1][a],s[1][c]):r.f(s[o][a],s[o][c],s[o-1][c],s[o-1][a])}return r.geo()}function sx(i,t,e,n,r=0){let s=.6+.4*zt(t)**.7,o=me(i,s*(.88+.24*e));return jt(o,n,zt(zt(1-t*3)*.55+r*.75))}function Ci(i,t,e,n,r,s,o=!0){let a=Ve(e*2.5+r,n*2.5+r),c=o?zt((Ve(e*.7+r,n*.7-r)-.5)*2.5):0;return sx(i,t,a,s,c)}function fu(i,t,e,n,r,s,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],s([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],s([o[0],o[1],e+n],1));for(let g=0;g<r;g++){let _=2*Math.PI*g/r,f=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],p=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(f,s(f,0))),l.push(i.v(p,s(p,1)))}let d=[],m=[];for(let g=0;g<r;g++)d.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<r;g++){let _=(g+1)%r;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(d[g],d[_],m[_],m[g])}}function ox(i,t,e,n,r,s,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,r-=h/2,t+=l/2,e-=l/2;let u=(g,_,f)=>[g*Math.cos(_),g*Math.sin(_),f],d=g=>i.v(g,a(g,(g[2]-s)/o)),m=(g,_,f,p)=>i.f(d(g),d(_),d(f),d(p));for(let g=0;g<c;g++){let _=n+(r-n)*g/c,f=n+(r-n)*(g+1)/c;m(u(t,_,s+o),u(e,_,s+o),u(e,f,s+o),u(t,f,s+o)),m(u(e,_,s+o),u(e,_,s),u(e,f,s),u(e,f,s+o)),m(u(t,f,s+o),u(t,f,s),u(t,_,s),u(t,_,s+o))}m(u(t,n,s+o),u(t,n,s),u(e,n,s),u(e,n,s+o)),m(u(e,r,s+o),u(e,r,s),u(t,r,s),u(t,r,s+o))}function Bo(i,t,e,n,r=[1,1,1]){let s=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],d=h[1]-l[1],m=Math.hypot(u,d)||1,g=-d/m,_=u/m;s.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],r)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],r))});for(let a=0;a<t.length-1;a++)i.f(s[a],o[a],o[a+1],s[a+1])}var bc=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function ax(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(ue(n)),.4+.4*Math.sin(ue(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(ue(n)),-.4+.4*Math.sin(ue(n))]);return[[...t,...e]]}return i===1?[bc(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],bc(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function Nf(i,t,e,n,r,s,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let d of ax(t))Bo(i,d.map(([m,g])=>[h+r*(m*c-g*l),u+r*(m*l+g*c)]),o,s)}function Er(i){let{th:t,r:e}=i,n=t.stone,r=new te,s=(m,g)=>{if(!i.bake||g[2]<.2)return m;let _=i.bake(g);return[m[0]+_[0],m[1]+_[1],m[2]+_[2]]},o=m=>{let g=e.uniform(0,50);return(_,f)=>s(Ci(m,f,_[0],_[1],g,t.moss,i.patchy??!0),_)};fu(r,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),fu(r,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([m,g,_],f)=>{let p=f*.23;for(let y=0;y<_;y++)ox(r,m,g,p+2*Math.PI*y/_,p+2*Math.PI*(y+1)/_,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new te;fu(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new te;for(let m=0;m<6;m++){let g=Math.PI/3*m,_=Math.cos(g),f=Math.sin(g);Bo(l,[[.3*_,.3*f],[2.2*_,2.2*f]],.07,c);for(let p of[-1,1]){let y=g+p*ue(35);Bo(l,[[1.3*_,1.3*f],[1.3*_+.7*Math.cos(y),1.3*f+.7*Math.sin(y)]],.05,c)}}Bo(l,bc(2.3),.06,c),Bo(l,bc(6),.05,c);let h=new te;for(let m=0;m<8;m++){let g=ue(45*m);m===6?Nf(h,0,g,7.4,.95,c+.01,.13):Nf(h,m%3,g,8.2,.55,c+.01,.09)}let u=new Zt;u.add(new St(r.geo(),ge())),u.add(new St(a.geo(),Gn(i.glowCol,i.glow*1.1)));let d=new St(l.geo(),Gn(i.lineCol,i.glow*1.3));return d.name="centre-pattern",u.add(d),u.add(new St(h.geo(),Gn(i.runeCol,i.glow*1.6))),u}function qs(i){let{r:t}=i,e=i.wind??(()=>{let r=new R(.8,.6,0).normalize();return[r.x,r.y,0]})(),n=new te(!1,1);for(let r=0;r<i.tufts;r++){let s=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,s))continue;let a=s*Math.cos(o),c=s*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),d=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),f=t.uniform(.1,.4),p=[Math.cos(_),Math.sin(_)],y=[-Math.sin(_),Math.cos(_)],x=i.gh(u,d),b=i.base(s),L=i.tip(s,_),C=jt(b,L,.55),E=[u,d,x],T=[u+p[0]*f*.3,d+p[1]*f*.3,x+m*.55],H=[u+p[0]*f,d+p[1]*f,x+m],M=(ot,pt)=>{let D=ot[2]-x,et=.32*D*D;return n.v(ot,pt,[[e[0]*et,e[1]*et,0]])},S=M([E[0]-y[0]*g,E[1]-y[1]*g,E[2]],b),Z=M([E[0]+y[0]*g,E[1]+y[1]*g,E[2]],b),Q=M([T[0]-y[0]*g*.65,T[1]-y[1]*g*.65,T[2]],C),q=M([T[0]+y[0]*g*.65,T[1]+y[1]*g*.65,T[2]],C),at=M(H,L);n.f(S,Z,q,Q),n.f(Q,q,at)}}return n.geo()}function kf(i,t,e,n,r,s,o,a){let c=new R(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new R(0,0,1)).normalize(),u=l.clone().cross(h),d=12,m=o*r,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([f,p])=>{let y=(.45+3*a*f**1.6)*n;return Array.from({length:d},(x,b)=>{let L=2*Math.PI*b/d,C=c.clone().multiplyScalar(f).addScaledVector(h,Math.cos(L)*y).addScaledVector(u,Math.sin(L)*y);return i.v([t[0]+C.x,t[1]+C.y,t[2]+C.z],[s[0],s[1],s[2],p*m])})});for(let f=0;f<g.length-1;f++)for(let p=0;p<d;p++){let y=(p+1)%d;i.f(_[f][p],_[f][y],_[f+1][y],_[f+1][p])}}function Ys(i,t,e,n,r,s,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[r[0],r[1],r[2],n(0,0)*s]),l=[...o,t].map(h=>Array.from({length:40},(u,d)=>{let m=2*Math.PI*d/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[r[0],r[1],r[2],n(g,_)*s])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let d=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][d],l[h][d])}}var $r=()=>new rn({vertexColors:!0,transparent:!0,depthWrite:!1,blending:pn,side:Ie,fog:!1}),Mc=null;function zf(){if(Mc)return Mc;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Mc=new Un(i),Mc}function Pi(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let r=new Float32Array(i.n*3),s=new Me;s.setAttribute("position",new Le(r,3));let o=new pr({map:zf(),color:new kt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:pn,sizeAttenuation:!0,fog:!1}),a=new mr(s,o);a.frustumCulled=!1;let c=l=>{let h=Bf(l);for(let u=0;u<i.n;u++){let d=i.twinkle?Math.sin(l*.05+n[u])*.15:0;r[u*3]=t[u][0]+e[u][0]*h+d,r[u*3+1]=t[u][1]+e[u][1]*h,r[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}s.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function vc(i){let t=i.list.length,e=(l,h,u)=>{let d=new Float32Array(t*3),m=new Me;m.setAttribute("position",new Le(d,3));let g=new pr({map:zf(),color:h,size:l,transparent:!0,depthWrite:!1,blending:pn,opacity:u,fog:!1}),_=new mr(m,g);return _.frustumCulled=!1,{p:_,pos:d,g:m}},n=i.gain??1,r=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),s=e(2.2*r,new kt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*r,new kt(1,1,1).lerp(new kt(i.col[0],i.col[1],i.col[2]),.3),1),a=new Zt;a.add(s.p,o.p);let c=l=>{let h=Bf(l);i.list.forEach((u,d)=>{for(let m of[s.pos,o.pos])m[d*3]=u.p[0],m[d*3+1]=u.p[1],m[d*3+2]=u.p[2]+u.amp*h}),s.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function Vf(i,t){let{r:e,idx:n,th:r}=t,s=n/2,o=jt(r.back_lit[0],r.back_lit[1],s),a=jt(r.back_dark[0],r.back_dark[1],s),c=r.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],d=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(r.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(r.back_w??1),_=e.uniform(0,6.28),f=e.uniform(-.12,.12),p=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(b=>vr(b,r.exposure??1)),y=Math.exp(-((ko(h,t.sunAz)/.5)**2))*(r.back_rim_k??0),x=[];for(let b=0;b<7;b++){let L=b/6,C=-2+(m+2)*L,E=g*(1-.55*L)*(1+.5*Math.exp(-Math.max(C,0)/3)),T=Math.sin(L*4+_)*1.2+f*C,H=[u[0]+d[0]*T,u[1]+d[1]*T,C],M=1-.75*L*L,S=me(o,M),Z=me(a,M);c>0&&(S=jt(S,p,c*.6*(1-.5*L)),Z=jt(Z,p,c*.6*(1-.5*L))),y>.01&&(S=jt(S,r.back_rim,.6*y*(1-L)),Z=jt(Z,r.back_rim,.6*y*(1-L))),x.push([i.v([H[0]-d[0]*E/2,H[1]-d[1]*E/2,C],S),i.v([H[0]+d[0]*E/2,H[1]+d[1]*E/2,C],Z)])}for(let b=0;b<6;b++)i.f(x[b][0],x[b][1],x[b+1][1],x[b+1][0])}}function Ec(){let i=new te,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,r=a=>Ff(e,a),s=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],r(a)))),o=i.v([.07*1.12*1.12,0,1.12],r(1.12));for(let a=0;a<s.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(s[a][c],s[a][l],s[a+1][l],s[a+1][c])}for(let a=0;a<n;a++)i.f(s[s.length-1][a],s[s.length-1][(a+1)%n],o);return i.geo()}function Ii(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let r of n)r.dispose()})}function Li(i){let t=(n,r=1,s=.5)=>{let o=(n[0]+n[1]+n[2])/3;return me(jt([o,o,o],n,s),r)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let r=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(r)&&(e[n]=Array.isArray(r[0])?r.map(s=>t(s)):t(r))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var mu={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},Zs=78,gu=[90,270];function Gf(i,t){let e=i==="night"?mu.NIGHT:i==="day"?{...Li(mu.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:mu.SUNSET,n=e.emit,r=n*.75,s=Sn(13),o=Sn(41),a=new Zt,c=[Cn(e.body_az,e.body_el)],l=gu.map(U=>[Zs*Math.cos(ue(U)),Zs*Math.sin(ue(U))]),h=ue(e.body_az),u=[Math.cos(h),Math.sin(h)],d=(()=>{let U=new R(.8,.6,0).normalize();return[U.x,U.y,0]})(),m=(U,A,P)=>{let k=(U%360+360)%360;return k>255&&k<285&&A>P},g=e.stone,_=(U,A)=>{let P=Math.hypot(U,A),k=zt((P-12)/10)*.35*(Math.sin(U*.09)+Math.cos(A*.11)+.5*Math.sin((U+A)*.19));k+=zt((P-60)/60)*3*Math.sin(U*.05+1)*Math.cos(A*.04);for(let[X,B]of l)k*=Te(22,40,Math.hypot(U-X,A-B));return k},f=(U,A)=>{let P=0;for(let k of gu){let X=ue(k),B=Math.cos(X),F=Math.sin(X),Y=U*B+A*F,j=Math.abs(-U*F+A*B);Y>9&&(P=Math.max(P,Math.exp(-((j/4)**2))*Te(9,16,Y)*(1-Te(Zs-10,Zs-2,Y))))}return P},p=(U,A)=>{let P=zt((Math.hypot(U,A)-10)/70)**.8,k=sn(U*.06+3,A*.06-7,3);return jt(me(jt(e.g_near,e.g_far,P),.75+.5*k),e.g_road,f(U,A)*.8)};a.add(new St(Xs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,p),ge({flat:!1}))),a.add(Er({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let y=new te,x=(U,A,P,k,X,B)=>{let F=o.uniform(0,50),Y=(G,J)=>Ci(X,J,G[0],G[1],F,e.moss),j=(G,J)=>Array.from({length:k},(it,lt)=>{let I=2*Math.PI*lt/k,v=[B[0]+U*Math.cos(I),B[1]+U*Math.sin(I),G];return y.v(v,Y(v,J))}),V=j(A,0),w=j(A+P,1),st=j(A,0),$=j(A+P,1);for(let G=0;G<k;G++){let J=(G+1)%k;y.f(st[G],st[J],$[J],$[G])}y.f(...w),y.f(...[...V].reverse())},b=[],L=Ec(),C=Ai({gain:1.05}),E=[];for(let U of[45,135,225,315]){let A=ue(U),P=9.35*Math.cos(A),k=9.35*Math.sin(A);x(.4,.3,1.1,12,g[3],[P,k]),x(.55,1.4,.3,12,g[0],[P,k]);let X=new St(L,C);X.position.set(P,k,1.75),a.add(X),b.push({m:X,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),E.push({pos:[P,k,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let T=new te,H=new te(!1,2),M=(U,A,P,k,X)=>{let B=Math.cos(k),F=Math.sin(k),Y=(j,V,w)=>{let st=j*P[0],$=V*P[1],G=[A[0]+st*B-$*F,A[1]+st*F+$*B,A[2]+w*P[2]];return U.v(G,X(G))};for(let j of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])U.f(...j.map(([V,w,st])=>Y(V,w,st)))},S=t?6:10;for(let U=0;U<S;U++){let A=2*Math.PI*(U+o.uniform(-.2,.2))/S,P=o.uniform(14,20),k=P*Math.cos(A),X=P*Math.sin(A),B=_(k,X),F=o.uniform(6,9),Y=()=>e.cs_stone;M(T,[k,X,B+(F-.2)/2],[.2,.2,F+.2],Math.PI/4,Y);let j=o.uniform(0,3.14),V=[-Math.sin(j),Math.cos(j)],w=[Math.cos(j),Math.sin(j)];M(T,[k,X,B+F-.2],[.08,1.3,.08],j,Y);let st=[k,X,B+F-.3],$=(it,lt)=>{let I=.35*Math.sin(1.4*it+lt)*it/5;return[w[0]*I+d[0]*(.15*it)/5,w[1]*I+d[1]*(.15*it)/5,0]},G=Array.from({length:6},(it,lt)=>Array.from({length:3},(I,v)=>H.v([st[0]+V[0]*(v-1)*.6,st[1]+V[1]*(v-1)*.6,st[2]-lt*.6],me(e.banner,1-.35*lt/5),[$(lt,0),$(lt,Math.PI)]))),J=H.v([st[0],st[1],st[2]-3.6],me(e.banner,.6),[$(6,0),$(6,Math.PI)]);for(let it=0;it<5;it++)for(let lt=0;lt<2;lt++)H.f(G[it][lt],G[it][lt+1],G[it+1][lt+1],G[it+1][lt]);H.f(G[5][0],G[5][1],J),H.f(G[5][1],G[5][2],J)}let Z=ge({double:!0,morph:!0}),Q=new St(H.geo(),Z);Q.morphTargetInfluences=[0,0],a.add(new St(T.geo(),ge()),Q,new St(y.geo(),ge()));let q=[];gu.forEach((U,A)=>{let P=new te,k=new te,X=new te,B=new te,F=new te,Y=new te(!1,2),j=ue(U),V=[Zs*Math.cos(j),Zs*Math.sin(j),0],w=j-Math.PI/2,st=Math.cos(w),$=Math.sin(w),G=O=>[V[0]+O[0]*st-O[1]*$,V[1]+O[0]*$+O[1]*st,O[2]],J=O=>{let nt=Ve(O[0]*.8+A*10,O[2]*.8),ht=.6+.4*zt(O[2]/6);return me(e.cs_stone,ht*(.75+.5*nt)*(.8+.4*zt(O[2]/30)))},it=(O,nt,ht,rt)=>{for(let Et of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])O.f(...Et.map(([bt,mt,It])=>{let gt=[nt[0]+bt*ht[0],nt[1]+mt*ht[1],nt[2]+It*ht[2]];return O.v(G(gt),rt(gt))}))},lt=(O,nt,ht,rt,Et)=>{let bt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([gt,At])=>[O+gt*rt,nt+At*rt,ht]),mt=[O,nt,ht+Et],It=gt=>me(e.cs_roof,.8+.4*zt((gt[2]-22)/22));for(let gt=0;gt<4;gt++){let At=bt[gt],Wt=bt[(gt+1)%4];k.f(k.v(G(At),It(At)),k.v(G(Wt),It(Wt)),k.v(G(mt),It(mt)))}};it(P,[0,0,6],[40,4,12],J);for(let O=-18;O<=18;O+=2.6)if(Math.abs(O)>4.6)for(let nt of[-1.6,1.6])it(P,[O,nt,12.7],[1.4,.8,1.4],J);for(let O of[-20,20]){it(P,[O,0,11],[8,8,22],J);for(let nt of[12,20])it(P,[O,0,nt],[8.6,8.6,.6],J);lt(O,0,22,4.7,9),it(P,[O,0,31],[.12,.12,9],J)}it(P,[0,0,17],[7,7,34],J);for(let O of[13,24])it(P,[0,0,O],[7.6,7.6,.6],J);lt(0,0,34,4.3,10),it(P,[0,0,46.5],[.12,.12,5],J);for(let O of[-2.9,2.9])it(P,[O,-3.75,3.8],[.9,.6,7.6],J);it(P,[0,-3.75,7.7],[6.8,.6,.9],J),it(B,[0,-3.6,3.6],[4.6,.3,7.2],O=>O[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let O=0;O<7;O++)it(B,[-2.1+.7*O,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let O of[2,4.5,6.8])it(B,[0,-3.85,O],[4.6,.2,.12],()=>[.02,.016,.014]);{let O=Array.from({length:9},(ht,rt)=>[2.3*Math.cos(Math.PI*rt/8),7.2+2.3*Math.sin(Math.PI*rt/8)]);B.f(...O.map(([ht,rt])=>B.v(G([ht,-3.75,rt]),[.006,.005,.008])));let nt=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];B.f(...[...nt].reverse().map(ht=>B.v(G(ht),[.04,.025,.02])))}for(let O of[9.5,15,20.5,26,31])it(X,[0,-3.62,O],[.8,.3,1.7],()=>[1,1,1]);for(let O of[-20,20])for(let nt of[5,10,15,20])it(X,[O,-4.12,nt],[.8,.3,1.7],()=>[1,1,1]);for(let O of[-4.3,4.3]){it(P,[O,-3.8,4.2],[.15,.15,1],J);let nt=new _n(.35,1),ht=nt.attributes.position;for(let Et=0;Et<ht.count;Et+=3)F.f(...[0,1,2].map(bt=>F.v(G([O+ht.getX(Et+bt),-3.8+ht.getY(Et+bt),5.1+ht.getZ(Et+bt)*1.5]),[1,1,1])));nt.dispose();let rt=G([O,-4.6,5.3]);A===0&&E.push({pos:rt,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[O,nt,ht,rt,Et]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let bt=[0,.2,.4,.6,.82],mt=(Ct,Xt)=>{let ne=.5*Et*Math.sin(7*Ct+Xt)*Ct,ct=.1*Et*Math.sin(5*Ct+Xt)*Ct;return[-ne*$,ne*st,ct]},It=(Ct,Xt,ne)=>Y.v(G([Ct,nt,Xt]),e.flag_col,[mt(ne,0),mt(ne,Math.PI)]),gt=bt.map(Ct=>It(O+rt*Ct,ht+Et,Ct)),At=bt.map(Ct=>It(O+rt*Ct,ht,Ct)),Wt=It(O+rt,ht+Et,1),Ot=It(O+rt,ht,1),Rt=It(O+.9*rt,ht+Et/2,.9);for(let Ct=0;Ct<4;Ct++)Y.f(At[Ct],At[Ct+1],gt[Ct+1],gt[Ct]);Y.f(gt[4],Wt,Rt),Y.f(At[4],Rt,Ot),Y.f(gt[4],Rt,At[4])}a.add(new St(P.geo(),ge()),new St(k.geo(),ge()),new St(B.geo(),ge({double:!0}))),a.add(new St(X.geo(),Gn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new St(F.geo(),Gn(e.torch_col,1.5)));let v=new St(Y.geo(),ge({double:!0,morph:!0}));v.morphTargetInfluences=[0,0],a.add(v),q.push(v)});class at{constructor(A){Ze(this,"mode",A);Ze(this,"mb");Ze(this,"war",[]);Ze(this,"pending",[]);Ze(this,"faces",[]);this.mb=new te(!1,A==="clash"?2:A==="surge"?1:0)}part(A,P,k,X,B,F,Y=-1,j=!1){let V=k.clone().sub(P);if(V.length()<1e-6)return;let w=V.normalize(),st=Math.abs(w.z)<.9?new R(0,0,1):new R(1,0,0),$=w.clone().cross(st).normalize(),G=w.clone().cross($),J=[[P,X],[k,B]].map(([it,lt])=>Array.from({length:F},(I,v)=>{let O=2*Math.PI*v/F,nt=it.clone().addScaledVector($,Math.cos(O)*lt).addScaledVector(G,Math.sin(O)*lt),ht=new Ut(nt.x-A.x,nt.y-A.y),rt=ht.length()>1e-6?.5+.5*ht.normalize().dot(new Ut(u[0],u[1])):.5;return this.add([nt.x,nt.y,nt.z],jt(e.sil,e.sil_rim,.45*rt*rt),Y,j)}));for(let it=0;it<F;it++){let lt=(it+1)%F;this.faces.push([J[0][it],J[0][lt],J[1][lt],J[1][it]])}this.faces.push([...J[0]].reverse()),this.faces.push(J[1])}add(A,P,k,X){return this.pending.push({p:A,c:P,wi:k,arm:X}),this.pending.length-1}warrior(A,P,k,X){let B=this.war.length,F=new ce().makeRotationZ(P-Math.PI/2),Y=(st,$,G)=>A.clone().add(new R(st,$,G).applyMatrix4(F)),j=A.clone().add(new R(0,0,1)),V=(st,$,G,J,it,lt=!1)=>this.part(j,Y(...st),Y(...$),G,J,it,B,lt);for(let[st,$,G]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])V([st*.11,0,.95],G,.1,.075,4),V(G,$,.075,.06,4);V([0,0,.95],[0,.1,1.48],.2,.23,6),V([0,.16,1.58],[0,.16,1.74],.11,.11,6),V([0,.16,1.74],[0,.16,1.92],.12,.02,6),V([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),V([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),k!=="spear"&&V([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),V([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),V([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),k==="sword"?V([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):k==="axe"?(V([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),V([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(V([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),V([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let w=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(st=>{let $=Y(...st);return this.add([$.x,$.y,$.z],e.sil,B,!1)});this.faces.push(w),this.war.push({team:X,f:new R(0,1,0).applyMatrix4(F),axis:new R(1,0,0).applyMatrix4(F),pivot:Y(.27,.1,1.42)})}finish(){let A=this.pending.map(P=>{let k=[],X=new R(...P.p);if(this.mode==="clash")for(let B of[0,1]){if(P.wi<0){k.push([0,0,0]);continue}let F=this.war[P.wi],Y=F.team===B,j=F.f.clone().multiplyScalar(Y?.32:-.22),V=X.clone().add(j);P.arm&&(V=F.pivot.clone().add(j).add(X.clone().sub(F.pivot).applyAxisAngle(F.axis,ue(Y?-60:25)))),k.push([V.x-X.x,V.y-X.y,V.z-X.z])}if(this.mode==="surge"){let B=this.war[P.wi];k.push([B.f.x*.5,B.f.y*.5,P.arm?.3:0])}return this.mb.v(P.p,P.c,k)});for(let P of this.faces)this.mb.f(...P.map(k=>A[k]));return this.mb.geo()}}let ot=ge({morph:!0,double:!0}),pt=[],D=t?5:8;for(let U=0;U<D;U++){let A=2*Math.PI*(U+o.uniform(-.3,.3))/D,P=o.uniform(17,36);m(A*180/Math.PI,P,15)&&(A+=.6);let k=P*Math.cos(A),X=P*Math.sin(A);for(let B=0;B<3;B++){let F=new at("clash"),Y=o.uniform(0,6.283),j=new R(k+o.uniform(-4.5,4.5),X+o.uniform(-4.5,4.5),0),V=new R(Math.cos(Y),Math.sin(Y),0),w=o.uniform(.9,1.1);for(let[$,G]of[[0,-1],[1,1]]){let J=j.clone().addScaledVector(V,w*G);J.z=_(J.x,J.y),F.warrior(J,$===0?Y:Y+Math.PI,o.choice(["sword","sword","axe","spear"]),$)}let st=new St(F.finish(),ot);st.morphTargetInfluences=[0,0],a.add(st),pt.push({m:st,w:2*Math.PI/s.uniform(40,95),w2:2*Math.PI/s.uniform(110,260),w3:2*Math.PI/s.uniform(150,400),p:s.uniform(0,6.28),p2:s.uniform(0,6.28),p3:s.uniform(0,6.28),bias:s.uniform(-.35,.35)})}}{let U=new at(null);for(let A=0;A<16;A++){let P=o.uniform(0,6.283),k=o.uniform(13,45);if(m(P*180/Math.PI,k,14))continue;let X=new R(k*Math.cos(P),k*Math.sin(P),0);X.z=_(X.x,X.y);let B=new ce().makeRotationZ(o.uniform(0,6.283)),F=(j,V,w)=>X.clone().add(new R(j,V,w).applyMatrix4(B)),Y=X.clone().add(new R(0,0,.2));U.part(Y,F(0,-.4,.18),F(0,.45,.2),.2,.22,6),U.part(Y,F(0,.55,.18),F(0,.7,.2),.11,.11,6),U.part(Y,F(-.1,-.4,.12),F(-.2,-1.2,.1),.09,.07,4),U.part(Y,F(.1,-.4,.12),F(.25,-1.1,.12),.09,.07,4),U.part(Y,F(-.25,.35,.18),F(-.6,.1,.12),.06,.05,4),U.part(Y,F(.25,.35,.18),F(.55,.7,.1),.06,.05,4),U.part(Y,F(.7,.2,0),F(.9,.2,1.8),.03,.025,4),U.part(Y,F(-.9,0,.05),F(-.9,0,.12),.4,.4,8)}a.add(new St(U.finish(),ge({double:!0})))}let et=[];{let U=[];for(let k=0;k<6;k++){let X=o.uniform(0,6.283),B=o.uniform(45,90);m(X*180/Math.PI,B,40)&&(X+=.8),U.push(new R(B*Math.cos(X),B*Math.sin(X),0))}let A=t?70:120,P=U.map(()=>new at("surge"));for(let k=0;k<A;k++){let X=P[k%U.length],B=U[k%U.length],F=B.clone().add(new R(o.uniform(-9,9),o.uniform(-9,9),0));F.z=_(F.x,F.y);let Y=Math.atan2(B.y-F.y,B.x-F.x)+o.uniform(-.5,.5),j=X.war.length,V=new ce().makeRotationZ(Y-Math.PI/2),w=($,G,J)=>F.clone().add(new R($,G,J).applyMatrix4(V)),st=F.clone().add(new R(0,0,.9));X.part(st,w(0,0,0),w(0,0,1.45),.28,.22,4,j),X.part(st,w(0,.05,1.45),w(0,.05,1.65),.12,.12,4,j),X.part(st,w(.3,-.3,.9),w(.3,2,2.4),.03,.025,4,j,!0),X.war.push({team:0,f:new R(0,1,0).applyMatrix4(V),axis:new R(1,0,0).applyMatrix4(V),pivot:w(0,0,1.4)})}for(let k of P){let X=new St(k.finish(),ot);X.morphTargetInfluences=[0,0],a.add(X),et.push({m:X,w:2*Math.PI/s.uniform(90,170),p:s.uniform(0,6.28),w2:2*Math.PI/s.uniform(300,600),p2:s.uniform(0,6.28)})}}let z=new St(qs({r:s,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(U,A)=>m(U,A,16),base:U=>me(e.grass_base,1-.6*zt((U-12)/55)),tip:U=>me(e.grass_tip,1-.6*zt((U-12)/55))}),ge({emit:.1,double:!0,morph:!0}));z.morphTargetInfluences=[0],a.add(z);let K=Pi({r:o,n:t?24:40,at:()=>{let U=o.uniform(0,6.283),A=30*Math.sqrt(o.random());return[A*Math.cos(U),A*Math.sin(U),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(K.obj);let W=Ri({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(W.group),{group:a,floor:.6,update(U){W.update(U);for(let F of pt){let Y=Math.sin(U*F.w+F.p+1.4*Math.sin(U*F.w2+F.p2))+F.bias,j=.55+.45*Math.sin(U*F.w3+F.p3),V=zt(Y)*j,w=zt(-Y)*j;F.m.morphTargetInfluences[0]=V*V*(3-2*V),F.m.morphTargetInfluences[1]=w*w*(3-2*w)}for(let F of et)F.m.morphTargetInfluences[0]=zt(.5+.6*Math.sin(U*F.w+F.p)*(.6+.4*Math.sin(U*F.w2+F.p2)));let A=Pn(U,90);Q.morphTargetInfluences[0]=A,Q.morphTargetInfluences[1]=1-A;for(let F of q)F.morphTargetInfluences[0]=A,F.morphTargetInfluences[1]=1-A;z.morphTargetInfluences[0]=Pn(U,45);let P=U%3600,k=Math.floor(P/8),X=(P-k*8)/8,B=X*X*(3-2*X);for(let F of b){let Y=F.keys[k%450],j=F.keys[(k+1)%450];F.m.scale.set(Y[0]+(j[0]-Y[0])*B,Y[1]+(j[1]-Y[1])*B,Y[2]+(j[2]-Y[2])*B)}K.update(U)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:me(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...E],dispose(){W.dispose(),Ii(a)}}}var _u={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function Wf(i,t){let e=i==="night"?_u.NIGHT:i==="day"?{...Li(_u.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:_u.SUNSET,n=e.emit,r=n*.75,s=Sn(11),o=Sn(99),a=new Zt,c=ue(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let D=new R(.8,.6,0).normalize();return[D.x,D.y,0]})(),u=(D,et)=>zt((Math.hypot(D,et)-12)/10)*.25*(Math.sin(D*.22)+Math.cos(et*.27)+.5*Math.sin((D+et)*.5)),d=(D,et)=>{let z=zt((Math.hypot(D,et)-6)/34)**.7,K=.9+.2*(Math.sin(D*.5)*Math.cos(et*.5)*.5+.5),W=sn(D*.09+3,et*.09-7,3),U=Ve(D*1.7,et*1.7),A=jt(e.g_near,e.g_far,z);return A=jt(A,e.g_alt,zt((W-.45)*2.2)*.6*(1-.5*z)),me(A,K*(1+.25*(U-.5)*(1-z)))},m=er(e,[Cn(e.body_az,e.body_el)]);a.add(new St(Xs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,d),ge({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,D])=>[D[0],D[1]]),f=D=>{let et=_.reduce((K,[W,U])=>K+Math.exp(-((Math.hypot(D[0]-W,D[1]-U)/5.5)**2)),0),z=(.55+.45*Math.min(1,et))*(1-.4*zt((Math.hypot(D[0],D[1])-5)/5))*.2*.5*e.beam_gain;return me(e.beam_col,z)};a.add(Er({th:e,r:s,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:r,patchy:!1,bake:f}));{let D=new te;for(let et=0;et<10;et++){let z=s.uniform(0,6.283),K=s.uniform(11.5,17),W=s.uniform(.8,2),U=s.choice(e.stone),A=o.uniform(0,50),P=new _n(1,1),k=P.attributes.position;for(let w=0;w<k.count;w++){let st=s.uniform(.8,1.2);k.setXYZ(w,k.getX(w)*st,k.getY(w)*st,k.getZ(w)*st)}let X=K*Math.cos(z),B=K*Math.sin(z),F=s.uniform(0,6.28),Y=new ce().compose(new R(X,B,u(X,B)+.3*W),new vn().setFromAxisAngle(new R(0,0,1),F),new R(W,W*.9,W*.7)),j=P.index?P.toNonIndexed():P,V=j.attributes.position;for(let w=0;w<V.count;w+=3){let st=[];for(let $=0;$<3;$++){let G=V.getX(w+$),J=V.getY(w+$),it=V.getZ(w+$),lt=new R(G,J,it).applyMatrix4(Y),I=.6+.4*zt((it+1)/2)**.7,v=Ve(G*2+A,J*2+it);st.push(D.v([lt.x,lt.y,lt.z],jt(me(U,I*(.88+.24*v)),e.moss,zt(1-(it+1)/2*3)*.55)))}D.f(...st)}j.dispose()}a.add(new St(D.geo(),ge()))}let p=[],y=(D,et,z)=>{for(let K=0;K<300;K++){let W=s.uniform(0,360);if(z&&W>245&&W<295)continue;let U=s.uniform(D,et),A=U*Math.cos(ue(W)),P=U*Math.sin(ue(W));if(p.every(([k,X])=>Math.hypot(A-k,P-X)>5.5))return p.push([A,P]),[A,P]}return null},x=ge({morph:!0}),b=Ai({gain:2.2}),L=[],C=t?12:18,E=t?6:10;for(let D=0;D<C+E;D++){let et=D<C,z=et?y(15,26,!0):y(32,46,!1);if(!z)continue;let K=et?s.uniform(46,62):s.uniform(58,76),W=et?s.uniform(1.2,2.1):s.uniform(2.3,3.3),U=et&&s.random()<.25,A=T(z[0],z[1],K,W,U),P=new St(A.bark.geo(),x);P.morphTargetInfluences=[0,0],a.add(P);let k=null;U&&(k=new St(A.eyes.geo(),b),k.morphTargetInfluences=[0,0],a.add(k));let X=[];if(U){let B=Array.from({length:Math.floor(174)},(F,Y)=>60+Y*20);for(let F=0;F<5;F++)X.push(B.splice(s.int(0,B.length-1),1)[0]);X.sort((F,Y)=>F-Y)}L.push({mesh:P,eyes:k,P:s.choice([100,120,150,180,200]),flip:s.int(0,1),blinks:X})}function T(D,et,z,K,W){let U=new te(!1,2),A=new te(!1,2),P=new R(-D,-et,0).normalize(),k=s.uniform(1.2,2.4),X=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.03,.1)),B=s.uniform(0,6.28),F=s.uniform(.4,1),Y=s.choice([3,4,5]),j=s.uniform(0,6.28),V=O=>new R(D+X.x*O+F*Math.sin(.28*O+B),et+X.y*O+F*Math.cos(.23*O+B),O),w=(O,nt)=>{let ht=Math.max(O,0),rt=K*(1-.62*zt(ht/z))*(1+1.1*Math.exp(-ht/1.6)),Et=nt+.06*ht;return rt*(1+.28*Math.cos(Y*Et+j)*Math.exp(-ht/3.5)+.07*Math.cos(2*Et+B))},st=O=>{let nt=k*zt(Math.max(O,0)/z)**2;return[h[0]*nt,h[1]*nt,0]},$=(O,nt,ht)=>{let rt=new R(O.x,O.y,0);rt.lengthSq()>1e-12&&rt.normalize();let Et=Math.max(0,rt.x*P.x+rt.y*P.y),bt=.6+.4*Math.sin(ht),mt=jt(e.bark_dark,e.bark_lit,zt(.85*Et*bt*(1-.3*zt(nt/z)))),It=Math.max(0,rt.x*l[0]+rt.y*l[1]);mt=jt(mt,e.bark_sun,zt(e.bark_sun_k*It*(.5+.5*bt)*(1-.5*zt(nt/z)))),mt=me(mt,.72+.28*zt(nt/1.6));let gt=zt(1-nt/2.2)*.55*Ve(O.x*3+D,O.y*3+nt*.8);return jt(mt,e.moss,gt)},G=(O,nt)=>U.v([O.x,O.y,O.z],nt,[st(O.z),[0,0,0]]),J=t?10:14,it=t?8:12,lt=[];for(let O=0;O<J;O++){let nt=-.5+(z+.5)*(O/(J-1))**1.15,ht=V(nt),rt=[];for(let Et=0;Et<it;Et++){let bt=2*Math.PI*Et/it,mt=new R(Math.cos(bt),Math.sin(bt),0);rt.push(G(ht.clone().addScaledVector(mt,w(nt,bt)),$(mt,nt,bt*7+nt*.4)))}lt.push(rt)}for(let O=0;O<J-1;O++)for(let nt=0;nt<it;nt++){let ht=(nt+1)%it;U.f(lt[O][nt],lt[O][ht],lt[O+1][ht],lt[O+1][nt])}let I=G(V(z).add(new R(0,0,.3)),e.bark_dark);for(let O=0;O<it;O++)U.f(I,lt[J-1][O],lt[J-1][(O+1)%it]);let v=s.int(2,4);for(let O=0;O<v;O++){let nt=z*s.uniform(.35,.85),ht=s.uniform(0,6.28),rt=new R(Math.cos(ht),Math.sin(ht),0),Et=V(nt).addScaledVector(rt,w(nt,ht)*.7),bt=rt.clone().add(new R(0,0,s.uniform(.4,1))).normalize(),mt=s.uniform(3.5,7.5),It=new R(-rt.y,rt.x,0),gt=[0,1,2,3,4].map(Ot=>Et.clone().addScaledVector(bt,mt*(Ot/4)).add(new R(0,0,.35*mt*(Ot/4)**2)).addScaledVector(It,Math.sin(Ot/4*3+O)*.5)),At=w(nt,ht)*.32,Wt=gt.map((Ot,Rt)=>{let Ct=gt[Math.min(Rt+1,4)].clone().sub(gt[Math.max(Rt-1,0)]).normalize(),Xt=Ct.clone().cross(new R(0,0,1));Xt.length()<.001&&(Xt=new R(1,0,0)),Xt.normalize();let ne=Ct.clone().cross(Xt);return Array.from({length:6},(ct,Dt)=>{let vt=2*Math.PI*Dt/6,Tt=Xt.clone().multiplyScalar(Math.cos(vt)).addScaledVector(ne,Math.sin(vt));return G(Ot.clone().addScaledVector(Tt,At*(1-.85*Rt/4)),$(Tt,Ot.z,vt*5+Rt))})});for(let Ot=0;Ot<4;Ot++)for(let Rt=0;Rt<6;Rt++){let Ct=(Rt+1)%6;U.f(Wt[Ot][Rt],Wt[Ot][Ct],Wt[Ot+1][Ct],Wt[Ot+1][Rt])}}if(W){let O=s.uniform(2.2,9),nt=Math.atan2(P.y,P.x)+s.uniform(-.6,.6),ht=new R(Math.cos(nt),Math.sin(nt),0),rt=new R(-ht.y,ht.x,0),Et=V(O).addScaledVector(ht,w(O,nt)),bt=s.uniform(.18,.32),mt=bt*1.25,It=(Wt,Ot,Rt)=>Et.clone().addScaledVector(ht,Rt).addScaledVector(rt,Wt).add(new R(0,0,Ot)),gt=Array.from({length:10},(Wt,Ot)=>G(It(Math.cos(2*Math.PI*Ot/10)*(mt+bt*1.7),Math.sin(2*Math.PI*Ot/10)*bt*1.7,.07),[.004,.003,.02]));U.f(...gt);let At=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Wt of[1,-1]){let Ot=At.map(([Ct,Xt])=>[Wt*(mt+Ct*bt),Xt*bt]);Wt===-1&&(Ot=Ot.reverse());let Rt=Ot.map(([Ct,Xt])=>{let ne=It(Ct,Xt,.11);return A.v([ne.x,ne.y,ne.z],[1,.04,.04],[st(ne.z),[0,0,O-ne.z]])});A.f(...Rt)}}return{bark:U,eyes:A}}let H=e.grass_tip,M=ge({emit:e.grass_emit,double:!0,morph:!0}),S=t?260:500,Z=[0,1].map(()=>{let D=new Map,et=qs({r:s,tufts:S,rmin:10.6,rspan:34,gh:u,base:K=>me(e.grass_base,1-.6*zt((K-11)/34)),tip:(K,W)=>{let U=Math.round(K*1e3),A=D.get(U);A||(A=jt(H[0],H[1],s.random()),D.set(U,A));let P=.3*Math.abs(Math.cos(W-c))*(i==="night"?.5:1);return me(jt(A,e.grass_rim,P),1-.6*zt((K-11)/34))}}),z=new St(et,M);return z.morphTargetInfluences=[0],a.add(z),z});{let D=new te;for(let et=0;et<(t?40:70);et++){let z=14+22*o.random(),K=o.uniform(0,2*Math.PI),W=z*Math.cos(K),U=z*Math.sin(K),A=u(W,U),P=[W+o.uniform(-.06,.06),U+o.uniform(-.06,.06),A+o.uniform(.35,.7)];D.f(D.v([W-.012,U,A],[.02,.07,.05]),D.v([W+.012,U,A],[.02,.07,.05]),D.v([P[0]+.012,P[1],P[2]],[.08,.25,.12]),D.v([P[0]-.012,P[1],P[2]],[.08,.25,.12]));let k=o.choice(e.flower),X=D.v([P[0],P[1],P[2]+.02],[1,.9,.5]),B=Array.from({length:6},(F,Y)=>{let j=2*Math.PI*Y/6;return D.v([P[0]+.05*Math.cos(j),P[1]+.05*Math.sin(j),P[2]+.025],k)});for(let F=0;F<6;F++)D.f(X,B[F],B[(F+1)%6])}a.add(new St(D.geo(),ge({emit:e.flower_emit,double:!0})))}{let D=new te;for(let et=0;et<14;et++){let z=ue(s.choice([s.uniform(195,245),s.uniform(295,345),s.uniform(0,360)])),K=s.uniform(16,34),W=s.uniform(1,1.8),U=K*Math.cos(z),A=K*Math.sin(z),P=u(U,A);for(let k=0;k<4;k++){let X=[s.uniform(-1.4,1.4),s.uniform(-1,1),s.uniform(.2,1)],B=s.uniform(.9,1.6),F=new _n(B,1),Y=F.attributes.position;for(let j=0;j<Y.count;j+=3){let V=[];for(let w=0;w<3;w++){let st=Y.getZ(j+w)+X[2];V.push(D.v([U+(Y.getX(j+w)+X[0])*W,A+(Y.getY(j+w)+X[1])*W,P+st*W*.75],jt(e.bush_lo,e.bush_hi,zt((st+.3)/2.6)*.8)))}D.f(...V)}F.dispose()}}a.add(new St(D.geo(),ge()))}{let D=new te;[[52,70,110,150],[59,80,120,160],[66,90,130,170]].forEach(([z,K,W,U],A)=>Vf(D,{r:s,idx:A,radius:z,count:t?Math.round(K*.6):K,hmin:W,hmax:U,th:e,sky:m,sunAz:c}));let et=Ai({fog:!1,gain:i==="night"?.45:.6});et.toneMapped=!1,a.add(new St(D.geo(),et))}let Q=new te(!0);g.forEach(([D,et])=>{for(let[z,K]of[[1,.45],[.7,.6],[.4,.8]])kf(Q,D,et,z,K,e.beam_col,.35*e.beam_gain,2.6)});let q=new te(!0);Ys(q,9.4,.7,(D,et)=>{let z=_.reduce((K,[W,U])=>K+Math.exp(-((Math.hypot(D-W,et-U)/5.5)**2)),0);return(.55+.45*Math.min(1,z))*Te(0,3,9.4-Math.hypot(D,et))},e.beam_col,.3*.5*e.beam_gain);let at=new St(Q.geo(),$r());a.add(at,new St(q.geo(),$r()));let ot=Pi({r:s,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let D=s.uniform(0,6.283),et=s.uniform(0,22);return[et*Math.cos(D),et*Math.sin(D),s.uniform(.8,7)]},move:()=>{let D=s.uniform(-1.5,1.5);return[D,D*.5,s.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(ot.obj);let pt=Ri({th:e,W:t?512:1024,bodies:[Cn(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(pt.group),{group:a,floor:.62,update(D){pt.update(D);for(let z of L){let K=Pn(D,z.P/2,.15,1,z.flip),W=0;for(let U of z.blinks)Math.abs(D%3600-U)<3&&(W=1-Math.abs(D%3600-U)/3);z.mesh.morphTargetInfluences[0]=K,z.mesh.morphTargetInfluences[1]=W,z.eyes&&(z.eyes.morphTargetInfluences[0]=K,z.eyes.morphTargetInfluences[1]=W)}Z.forEach((z,K)=>{z.morphTargetInfluences[0]=Pn(D,45,0,1,K)});let et=Pn(D,450);at.rotation.set(.03*et*.1,.02*et*.1,0),ot.update(D)},key:{dir:Cn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:me(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){pt.dispose(),Ii(a)}}}var yu={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},Kr=2.3;function Xf(i,t){let e=i==="night"?yu.NIGHT:i==="day"?{...Li(yu.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:yu.SUNSET,n=e.emit,r=Sn(7),s=new Zt,o=[Cn(e.body_az,e.body_el),Cn(e.body_az+180,e.body_el)],a=er(e,o),c=(D,et)=>zt((Math.hypot(D,et)-13)/10)*.25*(Math.sin(D*.22)+Math.cos(et*.27)+.5*Math.sin((D+et)*.5)),l=(D,et)=>{let z=zt((Math.hypot(D,et)-10)/50),K=.9+.2*(Math.sin(D*.5)*Math.cos(et*.5)*.5+.5),W=jt(e.g_near,e.g_far,z);return W=jt(W,e.g_alt,zt((sn(D*.09+3,et*.09-7,3)-.45)*2.2)*.6),me(W,K*(.9+.25*Ve(D*1.7,et*1.7)))},h=(D,et,z)=>jt(me(D,(.6+.4*zt(et)**.7)*(.88+.24*z)),e.moss,zt(1-et*3)*.55);s.add(new St(Xs([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),ge({flat:!1})));{let D=t?96:144,et=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],z=et.map(P=>Array.from({length:D},(k,X)=>{let B=2*Math.PI*X/D,F=P*Math.cos(B),Y=P*Math.sin(B),j=1;for(let st of[ue(e.body_az),ue(e.body_az+180)]){let $=Math.abs(((B-st+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);j*=1-.8*Math.exp(-(($/ue(17))**2))}let w=(4+42*Te(50,102,P))*(1-.65*Te(112,134,P))*(.12+1.15*Of(F*.032,Y*.032,5))*(.55+.9*sn(F*.01+5,Y*.01-3,3))*j+1.2*sn(F*.09,Y*.09,3)*Te(46,60,P);return w*=Te(45.5,52,P),[F,Y,c(F,Y)+.03+w]})),K=new te,W=[],U=o;et.forEach((P,k)=>{W.push([]);for(let X=0;X<D;X++){let B=z[k][X],F=2*Math.PI*X/D,Y=z[k][(X+1)%D],j=z[k][(X-1+D)%D],V=z[Math.min(k+1,et.length-1)][X],w=z[Math.max(k-1,0)][X],st=new R(V[0]-w[0],V[1]-w[1],V[2]-w[2]).cross(new R(Y[0]-j[0],Y[1]-j[1],Y[2]-j[2])).normalize();st.z<0&&st.multiplyScalar(-1);let $=B[2]/45,G=1-st.z,J=sn(B[0]*.12,B[1]*.12,3),it=me(jt(e.rock_lo,e.rock_hi,zt(zt($)**.7+.25*(J-.5))),.8+.4*J);it=jt(it,e.veg,zt((9-B[2])/9)*zt(1-G*2.4)*.85),it=jt(it,e.snow,Te(.55,.78,$+.22*(sn(B[0]*.07,B[1]*.07,3)-.5))*zt(1-G*1.7));let lt=0;for(let O of U)lt=Math.max(lt,zt(st.x*O[0]+st.y*O[1]+st.z*O[2]));lt=lt**1.2,it=[it[0]*(e.amb[0]+e.light_col[0]*lt*1.6),it[1]*(e.amb[1]+e.light_col[1]*lt*1.6),it[2]*(e.amb[2]+e.light_col[2]*lt*1.6)];let I=a(Math.cos(F)*Math.cos(.02),Math.sin(F)*Math.cos(.02),Math.sin(.02)).map(O=>vr(O,e.exposure)*e.haze_gain),v=Math.min(.97,Math.max(0,1-Math.exp(-(P-40)/e.haze_dist)+.5*Math.exp(-Math.max(B[2],0)/9)*Te(55,100,P)));it=jt(it,I,v),it=jt(l(B[0],B[1]),it,Te(46,58,P)).map(zt),W[k].push(K.v(B,it))}});for(let P=0;P<et.length-1;P++)for(let k=0;k<D;k++){let X=(k+1)%D;K.f(W[P][k],W[P][X],W[P+1][X],W[P+1][k])}let A=Ai({fog:!1,gain:.95});s.add(new St(K.geo(),A))}let u=new te,d=new te,m=new te,g=new te,_=new te,f=new te,p=(D,et,z,K,W,U=!0)=>{let A=et.map(([P,k])=>Array.from({length:z},(X,B)=>{let F=[K[0]+k*Math.cos(2*Math.PI*B/z),K[1]+k*Math.sin(2*Math.PI*B/z),K[2]+P];return D.v(F,W(F))}));for(let P=0;P<A.length-1;P++)for(let k=0;k<z;k++){let X=(k+1)%z;D.f(A[P][k],A[P][X],A[P+1][X],A[P+1][k])}if(U){let P=A[A.length-1].map(k=>D.v(D.pos.slice(k*3,k*3+3),D.col.slice(k*3,k*3+3)));D.f(...P)}},y=(D,et,z,K,W,U,A=1,P=[1,1,1])=>{let k=Array.from({length:K},(X,B)=>{let F=2*Math.PI*B/K;return Array.from({length:W},(Y,j)=>{let V=2*Math.PI*j/W,w=et+z*Math.cos(V);return D.v([w*Math.cos(F),w*Math.sin(F),U+z*A*Math.sin(V)],P)})});for(let X=0;X<K;X++)for(let B=0;B<W;B++){let F=(X+1)%K,Y=(B+1)%W;D.f(k[X][B],k[F][B],k[F][Y],k[X][Y])}},x=(D,et,z,K,W,U=0)=>{let A=Math.cos(K),P=Math.sin(K),k=new Map,X=(F,Y,j)=>{let V=`${F},${Y},${j}`,w=k.get(V);w||(w=U?[r.uniform(-.03,.03),r.uniform(-.03,.03),r.uniform(-.02,.02)]:[0,0,0],k.set(V,w));let st=F*z[0]+w[0],$=Y*z[1]+w[1],G=j*z[2]+w[2];return D.v([et[0]+st*A-$*P,et[1]+st*P+$*A,et[2]+G],W([st,$,G],j+.5))},B=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let F of B)D.f(...F.map(([Y,j,V])=>X(Y,j,V)))},b=(D,et,z,K)=>{let W=r.uniform(0,50);x(u,D,et,z,(U,A)=>h(K,A,Ve(U[0]*2.5+W,U[1]*2.5+U[2]*1.7)),1)},L=(D,et,z,K)=>{let W=r.uniform(0,50);p(u,[[0,D],[z,D]],48,[0,0,et],U=>h(K,(U[2]-et)/z,Ve(U[0]*1.2+W,U[1]*1.2)))};L(8.2,0,1.4,e.stone[0]),L(7.2,1.4,.5,e.stone[3]),L(6.6,1.9,Kr-1.9,e.stone[0]),y(d,6.6,.18,48,6,Kr,1,e.stone[3]);let C=28;for(let D=0;D<C;D++){let et=2*Math.PI*D/C,z=1.4+r.uniform(-.08,.08);b([8.45*Math.cos(et),8.45*Math.sin(et),z/2],[1,1.95,z],et,r.choice(e.stone))}for(let[D,et]of[[9.8,.9],[11,.55],[12.2,.3]])for(let z=0;z<14;z++){if(r.random()<.2)continue;let K=2*Math.PI*z/14+r.uniform(-.08,.08);b([D*Math.cos(K),D*Math.sin(K),et/2],[1.3,2.6,et],K+r.uniform(-.1,.1),r.choice(e.stone))}for(let D of[5.8,4.2,2.6,1.2])y(g,D,.08,48,6,Kr+.02,.6);for(let D=0;D<16;D++){let et=2*Math.PI*D/16+Math.PI/16;p(_,[[0,.14],[.04,.14]],8,[5*Math.cos(et),5*Math.sin(et),Kr],()=>[1,1,1])}let E=[],T=Ec(),H=Ai({gain:1.05}),M=[];for(let D of[3,10,17,24]){let et=2*Math.PI*D/C,z=8.45*Math.cos(et),K=8.45*Math.sin(et),W=1.4;p(d,[[0,.28],[.9,.28]],12,[z,K,W],()=>e.stone[3]),p(m,[[0,.2],[.35,.5]],12,[z,K,W+.9],()=>e.stone[0]);let U=new St(T,H);U.position.set(z,K,W+1.25),s.add(U),E.push({m:U,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),M.push({pos:[z,K,W+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let S=(D,et,z,K=1.8,W=1.2)=>{let U=ue(D),A=et*Math.cos(U),P=et*Math.sin(U),k=c(A,P)-.4,X=U-Math.PI/2,B=r.choice(e.stone),F=r.uniform(0,50),Y=new Map,j=Math.cos(X),V=Math.sin(X),w=(J,it,lt)=>{let I=`${J},${it},${lt}`,v=Y.get(I);v||(v=[r.uniform(-.07,.07),r.uniform(-.07,.07),r.uniform(-.05,.05)],Y.set(I,v));let O=J*K,nt=it*W,ht=(lt+.5)*z;if(ht>z*.5){let bt=1-.18*((ht-z*.5)/(z*.5));O*=bt,nt*=bt}O+=v[0],nt+=v[1];let rt=ht+v[2],Et=.5*Ve(O*2.2+F,rt*.7)+.5*Ve(O*6+F,rt*.25);return u.v([A+O*j-nt*V,P+O*V+nt*j,k+rt],h(B,rt/z,Et))},st=4,$=J=>-.5+J/st,G=J=>{for(let it=0;it<st;it++)for(let lt=0;lt<st;lt++)u.f(w(...J(it,lt)),w(...J(it+1,lt)),w(...J(it+1,lt+1)),w(...J(it,lt+1)))};G((J,it)=>[$(J),-.5,$(it)]),G((J,it)=>[$(it),.5,$(J)]),G((J,it)=>[-.5,$(it),$(J)]),G((J,it)=>[.5,$(J),$(it)]),G((J,it)=>[$(it),$(J),.5]),G((J,it)=>[$(J),$(it),-.5]);for(let[J,it,lt]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let v=-W/2-.02,O=z*J;x(f,[A+0*j-v*V,P+0*V+v*j,k+O],[it,.1,lt],X,()=>[1,1,1])}};for(let[D,et,z]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])S(D,et,z),S(D+180,et,z);for(let D=0;D<12;D++){let et=ue(r.choice([r.uniform(195,245),r.uniform(295,345)])),z=r.uniform(13,18),K=r.uniform(1,2.2),W=r.choice(e.stone),U=r.uniform(0,50),A=z*Math.cos(et),P=z*Math.sin(et),k=r.uniform(0,6.28),X=new _n(1,1),B=X.attributes.position,F=new ce().compose(new R(A,P,c(A,P)+.3*K),new vn().setFromAxisAngle(new R(0,0,1),k),new R(K,K*.9,K*.7)),Y=new Map;for(let j=0;j<B.count;j+=3)u.f(...[0,1,2].map(V=>{let w=B.getX(j+V),st=B.getY(j+V),$=B.getZ(j+V),G=`${w.toFixed(3)},${st.toFixed(3)},${$.toFixed(3)}`,J=Y.get(G);J===void 0&&(J=r.uniform(.8,1.2),Y.set(G,J));let it=new R(w*J,st*J,$*J).applyMatrix4(F);return u.v([it.x,it.y,it.z],h(W,($+1)/2,Ve(w*2+U,st*2+$)))}));X.dispose()}s.add(new St(u.geo(),ge())),s.add(new St(d.geo(),ge({flat:!1})),new St(m.geo(),ge()));let Z=new St(g.geo(),Gn([1,.92,.75],.75*Math.min(1.6,n)));Z.name="centre-pattern",s.add(Z,new St(_.geo(),Gn([1,.92,.75],.75*Math.min(1.6,n)))),s.add(new St(f.geo(),Gn([1,.3,.1],1.1*Math.min(1.4,n))));let Q=ue(e.body_az),q=ge({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),at=[0,1].map(()=>{let D=e.grass_tip[0],et=-1,z=qs({r,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:W=>{let U=1-.55*zt((W-13)/34);return[.03*U,.1*U,.1*U]},tip:(W,U)=>(W!==et&&(et=W,D=jt(e.grass_tip[0],e.grass_tip[1],r.random())),me(jt(D,e.grass_rim,.3*Math.abs(Math.cos(U-Q))*(i==="night"?.5:1)),1-.55*zt((W-13)/34)))}),K=new St(z,q);return K.morphTargetInfluences=[0],s.add(K),K});{let D=new te;for(let et=0;et<(t?40:70);et++){let z=14+22*r.random(),K=r.uniform(0,2*Math.PI),W=z*Math.cos(K),U=z*Math.sin(K),A=c(W,U),P=r.uniform(.35,.7),k=[W+r.uniform(-.06,.06),U+r.uniform(-.06,.06),A+P];D.f(D.v([W-.012,U,A],[.02,.07,.05]),D.v([W+.012,U,A],[.02,.07,.05]),D.v([k[0]+.012,k[1],k[2]],[.08,.25,.12]),D.v([k[0]-.012,k[1],k[2]],[.08,.25,.12]));let X=r.choice(e.flower),B=D.v([k[0],k[1],k[2]+.02],[1,.9,.5]),F=Array.from({length:6},(Y,j)=>{let V=2*Math.PI*j/6;return D.v([k[0]+.05*Math.cos(V),k[1]+.05*Math.sin(V),k[2]+.025],X)});for(let Y=0;Y<6;Y++)D.f(B,F[Y],F[(Y+1)%6])}s.add(new St(D.geo(),ge({emit:e.flower_emit,double:!0})))}let ot=Pi({r,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let D=r.uniform(0,6.283),et=r.uniform(4,26);return[et*Math.cos(D),et*Math.sin(D),r.uniform(1.5,10)]},move:()=>[r.uniform(-1,1),0,r.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&s.add(ot.obj);let pt=Ri({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return s.add(pt.group),{group:s,floor:Kr,update(D){pt.update(D),at.forEach((U,A)=>{U.morphTargetInfluences[0]=Pn(D,45,0,1,A)});let et=D%3600,z=Math.floor(et/8),K=(et-z*8)/8,W=K*K*(3-2*K);for(let U of E){let A=U.keys[z%450],P=U.keys[(z+1)%450];U.m.scale.set(A[0]+(P[0]-A[0])*W,A[1]+(P[1]-A[1])*W,A[2]+(P[2]-A[2])*W)}ot.update(D)},key:{dir:Cn(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:me(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,Kr+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,Kr+.5],color:[1,.5,.2],intensity:.35,dist:8},...M],dispose(){pt.dispose(),Ii(s)}}}var xu={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function qf(i,t){let e=i==="night"?xu.NIGHT:i==="day"?{...Li(xu.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:xu.SUNSET,n=e.emit,r=n*.75,s=Sn(21),o=Sn(77),a=new Zt,c=[Cn(e.body_az,e.body_el)],l=er(e,c),h=ue(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(B=>vr(B,e.exposure)),d=e.stone,m=Ri({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(B,F)=>{let Y=Math.hypot(B,F),j=jt(e.water_lo,e.water_hi,zt(sn(B*.05+2,F*.05,3)*1.2-.15)),V=Math.exp(-(((Y-9.9)/3)**2))*.12*.75;return j=[j[0]+e.glow_col[0]*V,j[1]+e.glow_col[1]*V,j[2]+e.glow_col[2]*V],jt(j,me(u,.5),Te(32,150,Y)**1.2)},_;{let B=new te(!1,2),F=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],Y=t?48:72,j=F.map(w=>Array.from({length:Y},(st,$)=>{let G=w*Math.cos(2*Math.PI*$/Y),J=w*Math.sin(2*Math.PI*$/Y),it=Te(9,13,w)*Math.exp(-w/90);return B.v([G,J,0],g(G,J),[[0,0,.06*Math.sin(.45*G+.33*J)*it],[0,0,.06*Math.sin(.38*G-.41*J+2)*it]])}));for(let w=0;w<F.length-1;w++)for(let st=0;st<Y;st++){let $=(st+1)%Y;B.f(j[w][st],j[w+1][st],j[w+1][$],j[w][$])}let V=new Hs({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:kh});_=new St(B.geo(),V),_.morphTargetInfluences=[0,0],a.add(_)}let f=[];[.35,.9,1.7].slice(0,t?2:3).forEach((B,F)=>{let Y=new te(!0),j=[10.5,12,15,19,24,30,38,48,60],V=48,w=j.map(G=>Array.from({length:V},(J,it)=>{let lt=2*Math.PI*it/V,I=G*Math.cos(lt),v=G*Math.sin(lt),O=e.mist_a*zt((sn(I*.07+F*9,v*.07,3)-.38)*2.6)*Te(0,3,G-10.5)*Te(0,15,60-G);return Y.v([I,v,B+.12*Math.sin(.3*I+F)],[...e.mist_col,O])}));for(let G=0;G<j.length-1;G++)for(let J=0;J<V;J++){let it=(J+1)%V;Y.f(w[G][J],w[G+1][J],w[G+1][it],w[G][it])}let st=new rn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie,toneMapped:!1});st.color.setScalar(1+.7);let $=new St(Y.geo(),st);$.renderOrder=3,a.add($),f.push({m:$,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Er({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let p=new te,y=new te,x=[];for(let B of[45,135,225,315]){let F=ue(B),Y=o.uniform(1.6,2.6),j=o.choice(d),V=o.uniform(0,50),w=9.35*Math.cos(F),st=9.35*Math.sin(F),$=10,G=.3,J=[],it=[],lt=Array.from({length:$},()=>G+Y-o.uniform(0,.45));for(let mt=0;mt<$;mt++){let It=2*Math.PI*mt/$,gt=o.uniform(-.05,.05),At=o.uniform(-.05,.05),Wt=o.uniform(-.05,.05),Ot=o.uniform(-.05,.05),Rt=[w+.62*Math.cos(It)+gt,st+.62*Math.sin(It)+At,G],Ct=[w+.5*Math.cos(It)+Wt,st+.5*Math.sin(It)+Ot,lt[mt]];J.push(p.v(Rt,Ci(j,0,Rt[0]-w,Rt[1]-st,V,e.moss))),it.push(p.v(Ct,Ci(j,(Ct[2]-G)/Y,Ct[0]-w,Ct[1]-st,V,e.moss)))}for(let mt=0;mt<$;mt++){let It=(mt+1)%$;p.f(J[mt],J[It],it[It],it[mt])}p.f(...it);let I=w-.55*Math.cos(F),v=st-.55*Math.sin(F),O=F-Math.PI/2,nt=Math.cos(O),ht=Math.sin(O),rt=.06,Et=Y*.45/2,bt=.3+Y*.5;y.f(...[[-rt,-.03,-Et],[rt,-.03,-Et],[rt,-.03,Et],[-rt,-.03,Et]].map(([mt,It,gt])=>y.v([I+mt*nt-It*ht,v+mt*ht+It*nt,bt+gt],[1,1,1]))),x.push([w,st,.3+Y])}let b=(B,F,Y,j,V,w,st,$)=>{let G=o.uniform(0,50),J=Math.cos(st),it=Math.sin(st),lt=new Map,I=(v,O,nt)=>{let ht=v*j+o.uniform(-.03,.03),rt=O*V+o.uniform(-.03,.03),Et=nt*w;return p.v([B+ht*J-rt*it,F+ht*it+rt*J,Y+Et],Ci($,nt+.5,ht,rt,G,e.moss))};for(let v of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])p.f(...v.map(([O,nt,ht])=>I(O,nt,ht)))};for(let B of[270,90])for(let F=0;F<5;F++){let Y=11+F*1.7+o.uniform(-.2,.2),j=ue(B+o.uniform(-5,5)),V=o.uniform(1.2,1.7);b(Y*Math.cos(j),Y*Math.sin(j),-.13,V,V*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(d))}for(let B=0;B<12;B++){let F=o.uniform(0,2*Math.PI);Math.min(Math.abs(ko(F,Math.PI/2)),Math.abs(ko(F,3*Math.PI/2)))<.18&&(F+=.5);let Y=o.uniform(10.5,15),j=o.uniform(.7,1.8),V=o.choice(d),w=o.uniform(0,50),st=o.uniform(0,6.28),$=new _n(1,1),G=$.attributes.position,J=new ce().compose(new R(Y*Math.cos(F),Y*Math.sin(F),.05),new vn().setFromAxisAngle(new R(0,0,1),st),new R(j,j*.9,j*.7));for(let it=0;it<G.count;it+=3)p.f(...[0,1,2].map(lt=>{let I=new R(G.getX(it+lt),G.getY(it+lt),G.getZ(it+lt)),v=I.z;return I.applyMatrix4(J),p.v([I.x,I.y,I.z],Ci(V,(v+1)/2,G.getX(it+lt),G.getY(it+lt),w,e.moss))}));$.dispose()}a.add(new St(p.geo(),ge()),new St(y.geo(),Gn(e.rune_col,1.4*r)));let L=(()=>{let B=new R(.8,.6,0).normalize();return[B.x,B.y,0]})(),C=ue(e.body_az),E=[Math.cos(C),Math.sin(C)],T=[],H=(B,F,Y)=>{for(let j=0;j<300;j++){let V=s.uniform(0,360);if(Y&&V>245&&V<295)continue;let w=s.uniform(B,F),st=w*Math.cos(ue(V)),$=w*Math.sin(ue(V));if(T.every(([G,J])=>Math.hypot(st-G,$-J)>6))return T.push([st,$]),[st,$]}return null},M=ge({morph:!0}),S=[],Z=[],Q=[],q=t?6:9,at=t?4:7;for(let B=0;B<q+at;B++){let F=B<q,Y=F?H(16,32,!0):H(38,62,!1);if(!Y)continue;let j=F?s.uniform(9,15):s.uniform(16,24),V=F?s.uniform(.28,.42):s.uniform(.5,.8),w=new St(ot(Y[0],Y[1],j,V),M);w.morphTargetInfluences=[0],a.add(w),S.push({m:w,P:s.choice([100,120,150,180,200]),flip:s.int(0,1)}),Z.push(Y),Q.push([Y[0],Y[1],2.2*V+.7])}function ot(B,F,Y,j){let V=new te(!1,1),w=new R(-B,-F,0).normalize(),st=s.uniform(.6,1.4),$=new R(s.uniform(-1,1),s.uniform(-1,1),0).normalize().multiplyScalar(s.uniform(.02,.07)),G=s.uniform(0,6.28),J=mt=>new R(B+$.x*mt+.25*Math.sin(.5*mt+G),F+$.y*mt+.25*Math.cos(.4*mt+G),mt),it=mt=>{let It=Math.max(mt,0);return j*(1-.55*zt(It/Y))*(1+.7*Math.exp(-It/.8))},lt=(mt,It,gt=0)=>{let At=st*zt(Math.max(mt.z,0)/Y)**2+gt;return V.v([mt.x,mt.y,mt.z],It,[[L[0]*At,L[1]*At,0]])},I=(mt,It)=>{let gt=new R(mt.x,mt.y,0);gt.lengthSq()>1e-12&&gt.normalize();let At=jt(e.bark_dark,e.bark_lit,.6*Math.max(0,gt.x*w.x+gt.y*w.y));return At=jt(At,e.bark_rim,zt(e.bark_rim_k*Math.max(0,gt.x*E[0]+gt.y*E[1])*(1-.4*zt(It/Y)))),jt(At,e.moss,zt(1-It/1.8)*.6*Ve(mt.x*3+B,It*.8+F))},v=(mt,It,gt,At,Wt)=>{let Ot=mt.length,Rt=mt.map((ne,ct)=>mt[Math.min(ct+1,Ot-1)].clone().sub(mt[Math.max(ct-1,0)]).normalize()),Ct=Rt[0].clone().cross(Math.abs(Rt[0].z)>.9?new R(1,0,0):new R(0,0,1)).normalize(),Xt=mt.map((ne,ct)=>{let Dt=Rt[ct];Ct=Ct.clone().addScaledVector(Dt,-Ct.dot(Dt)).normalize();let vt=Dt.clone().cross(Ct);return Array.from({length:gt},(Tt,qt)=>{let $t=2*Math.PI*qt/gt,fe=Ct.clone().multiplyScalar(Math.cos($t)).addScaledVector(vt,Math.sin($t));return lt(ne.clone().addScaledVector(fe,It[ct]),At(ct,fe),Wt?Wt(ct):0)})});for(let ne=0;ne<Ot-1;ne++)for(let ct=0;ct<gt;ct++){let Dt=(ct+1)%gt;V.f(Xt[ne][ct],Xt[ne][Dt],Xt[ne+1][Dt],Xt[ne+1][ct])}},O=11,nt=8,ht=Array.from({length:O},(mt,It)=>{let gt=-.4+(Y+.4)*It/(O-1),At=J(gt);return Array.from({length:nt},(Wt,Ot)=>{let Rt=2*Math.PI*Ot/nt,Ct=new R(Math.cos(Rt),Math.sin(Rt),0);return lt(At.clone().addScaledVector(Ct,it(gt)*(1+.06*Math.sin(3*Rt+gt))),I(Ct,gt))})});for(let mt=0;mt<O-1;mt++)for(let It=0;It<nt;It++){let gt=(It+1)%nt;V.f(ht[mt][It],ht[mt][gt],ht[mt+1][gt],ht[mt+1][It])}V.f(...ht[O-1]);let rt=[],Et=s.int(3,5);for(let mt=0;mt<Et;mt++){let It=Y*s.uniform(.42,.9),gt=s.uniform(0,6.28),At=new R(Math.cos(gt),Math.sin(gt),0),Wt=J(It).addScaledVector(At,it(It)*.6),Ot=At.clone().add(new R(0,0,s.uniform(.5,1.1))).normalize(),Rt=s.uniform(2,5)*(Y/12)*(1.1-.5*It/Y),Ct=Array.from({length:6},(ne,ct)=>Wt.clone().addScaledVector(Ot,Rt*(ct/5)).add(new R(0,0,-.12*Rt*(ct/5)**2))),Xt=it(It)*.4;v(Ct,Ct.map((ne,ct)=>Xt*(1-.88*ct/5)+.01),5,(ne,ct)=>I(ct,Ct[ne].z)),rt.push(...Ct.slice(2,5))}let bt=s.int(4,8);for(let mt=0;mt<bt;mt++){let It=s.choice(rt),gt=s.uniform(.8,2.2),At=s.uniform(0,6.28),Wt=Array.from({length:6},(Ot,Rt)=>It.clone().add(new R(.06*Math.sin(At+Rt)*Rt/5,.06*Math.cos(At+Rt*.8)*Rt/5,-gt*Rt/5)));v(Wt,Wt.map((Ot,Rt)=>.022*(1-.8*Rt/5)+.003),3,Ot=>jt(e.vine_a,e.vine_b,Ot/5),Ot=>.45*(Ot/5)**1.5)}return V.geo()}{let B=new te,F=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[Y,j,V]of Q){let w=F.map(([$,G])=>Array.from({length:14},(J,it)=>{let lt=2*Math.PI*it/14,I=V*$*(1+.12*Math.sin(3*lt+Y)),v=[Y+I*Math.cos(lt),j+I*Math.sin(lt),G+.05*Math.sin(5*lt+j)];return B.v(v,jt(e.mud,e.moss,zt(.3+.6*Ve(v[0]*.8,v[1]*.8))))})),st=B.v([Y,j,.52],e.moss);for(let $=0;$<w.length-1;$++)for(let G=0;G<14;G++){let J=(G+1)%14;B.f(w[$][G],w[$][J],w[$+1][J],w[$+1][G])}for(let $=0;$<14;$++)B.f(st,w[w.length-1][$],w[w.length-1][($+1)%14])}a.add(new St(B.geo(),ge()))}let pt=ge({morph:!0,double:!0}),D=[0,1].map(B=>{let F=new te(!1,1),Y=(t?160:300)/2,j=($,G,J,it,lt)=>Array.from({length:J},(I,v)=>{let O=2*Math.PI*v/J;return F.v([$[0]+G*Math.cos(O),$[1]+G*Math.sin(O),$[2]],it,[[L[0]*lt,L[1]*lt,0]])}),V=($,G)=>{for(let J=0;J<$.length;J++){let it=(J+1)%$.length;F.f($[J],$[it],G[it],G[J])}},w=0;for(;w<Y;){let $,G;if(Z.length&&o.random()<.6){let[rt,Et]=o.choice(Z),bt=o.uniform(0,6.283),mt=o.uniform(1,4.5);$=rt+mt*Math.cos(bt),G=Et+mt*Math.sin(bt)}else{let rt=o.uniform(0,6.283),Et=o.uniform(11.5,48);$=Et*Math.cos(rt),G=Et*Math.sin(rt)}if(Math.hypot($,G)<11)continue;w++;let J=o.uniform(1.2,3),it=o.uniform(-.25,.25)*J*.5,lt=o.uniform(-.25,.25)*J*.5,I=rt=>[$+it*rt*rt,G+lt*rt*rt,-.3+(J+.3)*rt],v=rt=>.12*J*rt*rt,O=[0,.37,.74].map(rt=>j(I(rt),.018-.008*rt,3,e.reed,v(rt)));V(O[0],O[1]),V(O[1],O[2]);let nt=[[.75,.012],[.83,.055],[.92,.045]].map(([rt,Et])=>j(I(rt),Et,5,e.cat,v(rt)));V(nt[0],nt[1]),V(nt[1],nt[2]);let ht=F.v(I(1),e.cat,[[L[0]*v(1),L[1]*v(1),0]]);for(let rt=0;rt<5;rt++)F.f(nt[2][rt],nt[2][(rt+1)%5],ht)}let st=new St(F.geo(),pt);return st.morphTargetInfluences=[0],a.add(st),st});{let B=new te;for(let F=0;F<(t?36:60);F++){let Y=o.uniform(0,6.283),j=o.uniform(11.5,44),V=j*Math.cos(Y),w=j*Math.sin(Y),st=o.uniform(.3,.7),$=o.int(0,11),G=o.choice(e.lily),J=B.v([V,w,.04],G),it=Array.from({length:12},(lt,I)=>{let v=2*Math.PI*I/12;return B.v([V+st*Math.cos(v),w+st*.9*Math.sin(v),.04],me(G,.8))});for(let lt=0;lt<12;lt++)lt!==$&&B.f(J,it[lt],it[(lt+1)%12])}a.add(new St(B.geo(),ge({double:!0})))}let et=new te(!1,1),z=new te;for(let B=0;B<8;B++){let F=o.uniform(0,6.283),Y=o.uniform(12,36),j=o.uniform(0,6.283),V=new R(Y*Math.cos(F),Y*Math.sin(F),.05),w=new ce().makeRotationZ(j),st=new _n(1,1),$=st.attributes.position,G=new ce().makeTranslation(V.x,V.y,V.z).multiply(w).multiply(new ce().makeScale(.22,.3,.13));for(let J=0;J<$.count;J+=3)z.f(...[0,1,2].map(it=>{let lt=new R($.getX(J+it),$.getY(J+it),$.getZ(J+it)).applyMatrix4(G);return z.v([lt.x,lt.y,lt.z],[.008,.012,.009])}));st.dispose();for(let J of[-1,1]){let it=V.clone().add(new R(J*.09,.12,.12).applyMatrix4(w)),I=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(v=>et.v([it.x+v[0]*.035,it.y+v[1]*.035,it.z+v[2]*.035],[1,1,1],[[0,0,v[2]*.035*(.08-1)]]));for(let[v,O]of[[0,2],[2,1],[1,3],[3,0]])et.f(I[v],I[O],I[4]),et.f(I[O],I[v],I[5])}}a.add(new St(z.geo(),ge()));let K=new St(et.geo(),Gn(e.eye_col,1.8));K.morphTargetInfluences=[0],a.add(K);let W=Array.from({length:Math.floor(3480/20)},(B,F)=>60+F*20),U=[];for(let B=0;B<6;B++)U.push(W.splice(o.int(0,W.length-1),1)[0]);{let B=new te;[[70,46,14,22],[95,58,18,30]].forEach(([F,Y,j,V],w)=>{let st=jt(e.back_col,u,.55+.2*w);for(let $=0;$<Y;$++){let G=2*Math.PI*($+s.uniform(-.4,.4))/Y+w*.5,J=[F*Math.cos(G),F*Math.sin(G)],it=[-Math.sin(G),Math.cos(G)],lt=s.uniform(j,V),I=s.uniform(.35,.9)*(1+.5*w),v=s.uniform(0,6.28),O=s.uniform(-.06,.06),nt=rt=>{let Et=-2+(lt+2)*rt,bt=Math.sin(rt*3+v)*.5+O*Et;return[J[0]+it[0]*bt,J[1]+it[1]*bt,Et]},ht=Array.from({length:6},(rt,Et)=>{let bt=Et/5,mt=I*(1-.5*bt),It=jt(st,u,zt(bt*bt*.9)),gt=nt(bt);return[B.v([gt[0]-it[0]*mt/2,gt[1]-it[1]*mt/2,gt[2]],It),B.v([gt[0]+it[0]*mt/2,gt[1]+it[1]*mt/2,gt[2]],It)]});for(let rt=0;rt<5;rt++)B.f(ht[rt][0],ht[rt][1],ht[rt+1][1],ht[rt+1][0]);for(let rt of[-1,1]){let Et=nt(s.uniform(.55,.8)),bt=[Et[0]+it[0]*rt*lt*.16,Et[1]+it[1]*rt*lt*.16,Et[2]+lt*.12],mt=jt(st,u,.6);B.f(B.v([Et[0],Et[1],Et[2]-.1],mt),B.v([Et[0],Et[1],Et[2]+.1],mt),B.v([bt[0],bt[1],bt[2]+.04],mt),B.v([bt[0],bt[1],bt[2]-.04],mt))}}}),a.add(new St(B.geo(),Ai({fog:!1})))}let A=[];for(let B=0;B<Math.round(14*e.orb_k*(t?.6:1));B++){let F=o.uniform(0,6.283),Y=o.uniform(12,42);A.push({p:[Y*Math.cos(F),Y*Math.sin(F),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[B,F,Y]of x)A.push({p:[B,F,Y+.9],k:1.4,amp:o.uniform(.15,.4)});let P=vc({list:A,col:e.orb_col,gain:1.2});a.add(P.group);let k=Pi({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let B=o.uniform(0,6.283),F=o.uniform(4,44);return[F*Math.cos(B),F*Math.sin(B),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(k.obj);let X=new te(!0);return Ys(X,9.4,.7,(B,F)=>{let Y=Math.hypot(B,F);return Y<.01?1:Te(0,3,9.4-Y)*(.7+.3*Ve(Y*.4,Math.atan2(F,B)*6.4))},e.wash_col,.28*.5),a.add(new St(X.geo(),$r())),{group:a,floor:.6,update(B){m.update(B);for(let j of S)j.m.morphTargetInfluences[0]=Pn(B,j.P/2,.15,1,j.flip);D.forEach((j,V)=>{j.morphTargetInfluences[0]=Pn(B,60,0,1,V)}),_.morphTargetInfluences[0]=Pn(B,90,0,1,0),_.morphTargetInfluences[1]=Pn(B,90,0,1,1);let F=Math.sin(B%3600/3600*Math.PI);for(let j of f)j.m.rotation.z=j.s*F;let Y=0;for(let j of U)Math.abs(B%3600-j)<3&&(Y=1-Math.abs(B%3600-j)/3);K.morphTargetInfluences[0]=Y,P.update(B),k.update(B)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:me(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...x.map(B=>({pos:[B[0],B[1],B[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),Ii(a)}}}var Mu={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},Fn=24,cx=Fn+1.6,lx=160;function Yf(i,t){let e=i==="night"?Mu.NIGHT:i==="day"?{...Li(Mu.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:Mu.SUNSET,n=e.emit,r=n*.75,s=Sn(31),o=Sn(55),a=new Zt,c=[Cn(e.body_az,e.body_el)],l=er(e,c),h=ue(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(z=>vr(z,e.exposure)),d=ue(e.body_az),m=(()=>{let z=new R(.8,.6,0).normalize();return[z.x,z.y,0]})(),g=e.stone,_=Ri({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let f=z=>cx*(1+.25*(1-Math.exp(z/60))),p=(z,K)=>.12*Math.sin(z*.33)*Math.cos(K*.29)*Te(8,14,Math.hypot(z,K)),y=(z,K)=>jt(jt(e.earth_a,e.earth_b,zt(sn(z*.12+5,K*.12-3,3)*1.4-.2)),e.moss,zt((Ve(z*.4,K*.4)-.62)*3)*.6);{let z=new te,K=[8,10,12,14,16,18,20,22,Fn-1,Fn,Fn+.6,Fn+1.2,Fn+1.6],W={[Fn+.6]:.3,[Fn+1.2]:.15,[Fn+1.6]:-.4},U=72,A=K.map(P=>Array.from({length:U},(k,X)=>{let B=2*Math.PI*X/U,F=P*Math.cos(B),Y=P*Math.sin(B);return z.v([F,Y,W[P]??p(F,Y)],P<=Fn+.01?y(F,Y):jt(e.bark,e.moss,.5+.3*Ve(F*.5,Y*.5)))}));for(let P=0;P<K.length-1;P++)for(let k=0;k<U;k++){let X=(k+1)%U;z.f(A[P][k],A[P+1][k],A[P+1][X],A[P][X])}a.add(new St(z.geo(),ge({flat:!1})))}{let z=new te,K=t?28:40,W=t?48:72,U=Array.from({length:K},(A,P)=>{let k=-.4-lx*(P/(K-1))**1.6;return Array.from({length:W},(X,B)=>{let F=2*Math.PI*B/W,Y=f(k)*(1+.04*Math.sin(14*F+.8*Math.sin(.05*k))+.025*Math.sin(5*F+.02*k)),j=Math.sin(14*F+.8*Math.sin(.05*k)),V=jt(e.bark,e.bark_hi,zt(.5+.5*j)*.5);V=jt(V,e.bark_hi,.4*Math.max(0,Math.cos(F-d))),V=jt(V,e.moss,zt(1+k/25)*zt((Ve(F*3,k*.15)-.4)*2.5)*.8);let w=Math.abs(Math.sin(7*F+1.5*Math.sin(.04*k+3*F)));return V=jt(V,e.vein,zt(1-w*7)*(.4+.6*Ve(k*.05,F*2))*.9),z.v([Y*Math.cos(F),Y*Math.sin(F),k],jt(V,me(u,.6),zt((-k-15)/110)**1.2))})});for(let A=0;A<K-1;A++)for(let P=0;P<W;P++){let k=(P+1)%W;z.f(U[A][P],U[A+1][P],U[A+1][k],U[A][k])}a.add(new St(z.geo(),ge({emit:.3,flat:!1})))}let x=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([z,K],W)=>{let U=new te(!0),A=f(z)-.3,P=[A,A+4,A+10,A+20,A+32,A+46,A+64,A+84,A+106,150],k=64,X=P.map(Y=>Array.from({length:k},(j,V)=>{let w=2*Math.PI*V/k,st=Y*Math.cos(w),$=Y*Math.sin(w),G=K*(.55+.45*sn(st*.03+W*7,$*.03,3))*Te(0,6,Y-A);return U.v([st,$,z],[...jt(e.sea_col,u,Te(60,150,Y)),G])}));for(let Y=0;Y<P.length-1;Y++)for(let j=0;j<k;j++){let V=(j+1)%k;U.f(X[Y][j],X[Y+1][j],X[Y+1][V],X[Y][V])}let B=new rn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie,fog:!1,toneMapped:!1});B.color.setScalar(1.7);let F=new St(U.geo(),B);F.renderOrder=2,a.add(F),x.push({m:F,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Er({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:r}));let b=new te,L=new te,C=[];for(let z of[0,60,120,180,240,300]){let K=ue(z),W=12.5,U=o.uniform(5,8),A=1.8,P=1.2,k=W*Math.cos(K),X=W*Math.sin(K),B=-.4,F=K-Math.PI/2,Y=Math.cos(F),j=Math.sin(F),V=o.choice(g),w=o.uniform(0,50),st=new Map,$=(lt,I,v)=>{let O=`${lt},${I},${v}`,nt=st.get(O);nt||(nt=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],st.set(O,nt));let ht=lt*A,rt=I*P,Et=(v+.5)*U;if(Et>U*.5){let mt=1-.18*((Et-U*.5)/(U*.5));ht*=mt,rt*=mt}ht+=nt[0],rt+=nt[1];let bt=Et+nt[2];return b.v([k+ht*Y-rt*j,X+ht*j+rt*Y,B+bt],Ci(V,bt/U,ht,bt*.7,w,e.moss))},G=4,J=lt=>-.5+lt/G,it=lt=>{for(let I=0;I<G;I++)for(let v=0;v<G;v++)b.f($(...lt(I,v)),$(...lt(I+1,v)),$(...lt(I+1,v+1)),$(...lt(I,v+1)))};it((lt,I)=>[J(lt),-.5,J(I)]),it((lt,I)=>[J(I),.5,J(lt)]),it((lt,I)=>[-.5,J(I),J(lt)]),it((lt,I)=>[.5,J(lt),J(I)]),it((lt,I)=>[J(I),J(lt),.5]);for(let[lt,I,v]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let O=-P/2-.02,nt=U*lt,ht=k-O*j,rt=X+O*Y;L.f(...[[-I/2,-v/2],[I/2,-v/2],[I/2,v/2],[-I/2,v/2]].map(([Et,bt])=>L.v([ht+Et*Y,rt+Et*j,B+nt+bt],[1,1,1])))}C.push([k,X,U-.4])}a.add(new St(b.geo(),ge()),new St(L.geo(),Gn(e.rune_col,1.4*r)));let E=(z,K,W,U,A,P,k,X,B=!0)=>{let F=Array.from({length:k},(j,V)=>{let w=Math.PI/2*V/k,st=V/k;return Array.from({length:P},($,G)=>{let J=2*Math.PI*G/P,it=.1*st*st*A;return z.v([K[0]+W*Math.cos(w)*Math.cos(J),K[1]+U*Math.cos(w)*Math.sin(J),K[2]+A*Math.sin(w)],X(st,J),B?[[m[0]*it,m[1]*it,0]]:void 0)})}),Y=z.v([K[0],K[1],K[2]+A],X(1,0),B?[[m[0]*.1*A,m[1]*.1*A,0]]:void 0);for(let j=0;j<k-1;j++)for(let V=0;V<P;V++){let w=(V+1)%P;z.f(F[j][V],F[j][w],F[j+1][w],F[j+1][V])}for(let j=0;j<P;j++)z.f(F[k-1][j],F[k-1][(j+1)%P],Y)},T=(z,K,W,U,A)=>{let P=new te(!1,1);for(let[X,B,F,Y]of z){let j=o.uniform(.85,1.15),V=p(X,B)-.2,w=(st,$)=>me(jt(K,W,zt(st*(.75+.25*Math.cos($-d)))**.9),j);for(let st=0;st<Y;st++){let $=o.uniform(0,6.283),G=st?o.uniform(0,.6)*F:0,J=F*o.uniform(.7,1);E(P,[X+G*Math.cos($),B+G*Math.sin($),V],J,J,J*.85,U,A,w)}}let k=new St(P.geo(),ge({flat:!1,morph:!0}));return k.morphTargetInfluences=[0],a.add(k),k},H=[];for(let z=0;H.length<(t?40:70)&&z<3e3;z++){let K=o.uniform(0,2*Math.PI),W=o.uniform(11.5,Fn-1.5);if(K*180/Math.PI%360>255&&K*180/Math.PI%360<285&&W>15)continue;let U=W*Math.cos(K),A=W*Math.sin(K);C.some(([P,k])=>Math.hypot(U-P,A-k)<2.8)||H.push([U,A,o.uniform(1,2.2),o.int(2,4)])}let M=T(H,e.bush_lo,e.bush_hi,12,3),S=Array.from({length:30},(z,K)=>{let W=2*Math.PI*(K+o.uniform(-.3,.3))/30,U=Fn-.6+o.uniform(-.8,.8);return[U*Math.cos(W),U*Math.sin(W),o.uniform(2,3.5),2]}),Z=T(S,e.hedge_lo,e.hedge_hi,16,4);{let z=new te;[62,85,112,140].forEach((K,W)=>{let U=1+.25*W;for(let A=0;A<(t?12:20);A++){let P=2*Math.PI*(A+s.uniform(-.4,.4))/20+W*.4,k=K+s.uniform(-6,6);for(let X=0;X<2;X++){let B=X?s.uniform(-9,9):0,F=k*Math.cos(P)-B*Math.sin(P),Y=k*Math.sin(P)+B*Math.cos(P),j=s.uniform(9,16)*U*(X?.7:1),V=s.uniform(28,46)*U*(X?.75:1),w=.35+.15*W,st=s.uniform(.85,1.15);E(z,[F,Y,-30],j,j,V,14,7,$=>jt(me(e.can_col,st),me(u,.7),zt(w+.25*$)),!1)}}}),a.add(new St(z.geo(),ge({emit:.85,flat:!1})))}let Q=[];for(let z=0;z<Math.round(18*e.orb_k*(t?.6:1));z++){let K=o.uniform(0,6.283),W=10.5+(Fn-8.5)*Math.sqrt(o.random());Q.push({p:[W*Math.cos(K),W*Math.sin(K),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[z,K,W]of C)Q.push({p:[z,K,W+.9],k:1.4,amp:o.uniform(.15,.4)});let q=vc({list:Q,col:e.orb_col,gain:1.2});a.add(q.group);let at=Math.round(160*e.fire_k*(t?.5:1)),ot=Math.round(40*e.fire_k*(t?.5:1)),pt=0,D=Pi({r:o,n:at+ot,at:()=>{if(pt++<at){let W=o.uniform(0,6.283),U=(Fn+4)*Math.sqrt(o.random());return[U*Math.cos(W),U*Math.sin(W),.3+8.7*o.random()**1.6]}let z=o.uniform(0,6.283),K=o.uniform(Fn+2,Fn+14);return[K*Math.cos(z),K*Math.sin(z),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});at+ot>0&&a.add(D.obj);let et=new te(!0);return Ys(et,9.4,.7,(z,K)=>{let W=Math.hypot(z,K);return W<.01?1:Te(0,3,9.4-W)*(.7+.3*Ve(W*.4,Math.atan2(K,z)*6.4))},e.wash_col,.28*.5),a.add(new St(et.geo(),$r())),{group:a,floor:.6,update(z){_.update(z),M.morphTargetInfluences[0]=Pn(z,60,.15,1,1),Z.morphTargetInfluences[0]=Pn(z,90,.15,1,1);let K=Math.sin(z%3600/3600*Math.PI);for(let W of x)W.m.rotation.z=W.s*K;q.update(z),D.update(z)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:me(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...C.slice(0,4).map(z=>({pos:[z[0],z[1],z[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),Ii(a)}}}var hx={forest:Wf,plains:Xf,swamp:qf,worldtree:Yf,castle:Gf};function bu(i,t,e){let n=hx[i];return n?n(t,e):null}var Pt=(i,t)=>i+Math.random()*(t-i),ux=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function Jr(i,t=!1){let e=new Un(i);return e.colorSpace=an,t&&(e.magFilter=An,e.minFilter=An,e.generateMipmaps=!1),e}function zo(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),Jr(e)}function Zf(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let r=0;r<n.length;r++)e.save(),e.rotate(r/n.length*Math.PI*2),e.fillText(n[r],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let r=0;r<=5;r++){let s=r*4*Math.PI/5-Math.PI/2,o=Math.cos(s)*180,a=Math.sin(s)*180;r?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),Jr(t)}function fx(i,t,e=160){let n=document.createElement("canvas"),r=[...i].length;n.width=Math.max(256,Math.ceil(r*e*1.05+80)),n.height=e+80;let s=n.getContext("2d");return s.font=`900 ${e}px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif`,s.textAlign="center",s.textBaseline="middle",s.shadowColor=t,s.shadowBlur=34,s.fillStyle=t,s.fillText(i,n.width/2,n.height/2),s.shadowBlur=10,s.fillStyle="#ffffff",s.fillText(i,n.width/2,n.height/2),{tex:Jr(n),aspect:n.width/n.height}}function dx(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),Jr(e)}function px(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let r=n*56,s=r+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,s,c,l),t.arc(512,512,Math.max(r,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=Jr(i);return e.anisotropy=4,e}function mx(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,r=e?Number(e[2]):20,s=1024/Math.max(n,r),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*s}" height="${r*s}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*s,c.height=r*s,c.getContext("2d").drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(Jr(c),n/r)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function gx(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let r=document.createElement("canvas");r.width=2048,r.height=1152;let s=r.getContext("2d");s.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=s.getImageData(0,a,2048,c-a).data,h=0,u=0,d=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],d+=l[g+2],m++;return new kt(h/m/255,u/m/255,d/m/255).convertSRGBToLinear()};t(Jr(r),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var _x={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},yx=["forest","swamp","worldtree"];function xx(i,t={}){let e,n=!!t.lite;try{e=new Ls({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let r=!1,s=()=>r?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(s()),e.toneMapping=Uo,e.toneMappingExposure=1.15;let o=new Ds;o.fog=new Ka(1709616,20,58);let a=new bn(55,16/9,.05,200),c=new R(0,1.75,7.2),l=new R(0,1.45,0);a.position.copy(c),o.add(a);let h=new Os(16777215,2236962,1),u=new Ki(16777215,1);o.add(h,u);let d=new _i(16777215,6,9,2);d.position.set(0,3,7.5),o.add(d);let m=new Ki(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new Zt;o.add(g);let _=new rn({color:16777215,fog:!1,side:Ie}),f=new St(new ve(70,70,66,48,1,!0,Math.PI-.95,1.9),_);f.scale.set(-1,1,1),f.position.set(0,13,6),g.add(f);let p=new we({color:2767396,roughness:1}),y=new St(new Ro(90,48),p);y.rotation.x=-Math.PI/2,y.position.y=-.02,g.add(y);let x=new we({color:5208634,roughness:.9,flatShading:!0}),b=2600,L=new Us(new Nn(.05,.42,3),x,b);{let tt=new ce,dt=new vn,xt=new En,_t=new R,Lt=new R,Ht=new kt;for(let Gt=0;Gt<b;Gt++){let xe=9.9+Math.pow(Math.random(),.7)*30,ae=Math.random()*Math.PI*2;_t.set(Math.cos(ae)*xe,.18,Math.sin(ae)*xe-1),xt.set(Pt(-.25,.25),Math.random()*3,Pt(-.25,.25)),dt.setFromEuler(xt);let Nt=Pt(.7,1.6);Lt.set(Nt,Nt*Pt(.8,1.5),Nt),tt.compose(_t,dt,Lt),L.setMatrixAt(Gt,tt),L.setColorAt(Gt,Ht.setHSL(Pt(.22,.32),Pt(.35,.6),Pt(.3,.5)))}}g.add(L);let C=new Zt;g.add(C);let E=new we({color:1981226,roughness:1,flatShading:!0}),T=new we({color:3811868,roughness:1}),H=new we({color:6051942,roughness:1,flatShading:!0});function M(tt){C.clear();let dt=yx.includes(tt),xt=dt?70:34;for(let _t=0;_t<xt;_t++){let Lt=Pt(Math.PI*1.08,Math.PI*1.92),Ht=Pt(24,48),Gt=Math.cos(Lt)*Ht,xe=Math.sin(Lt)*Ht-1;if(dt){let ae=Pt(6,13),Nt=new Zt,wt=new St(new ve(.25,.4,ae*.3,6),T);wt.position.y=ae*.15,Nt.add(wt);for(let De=0;De<3;De++){let dn=new St(new Nn(ae*(.32-De*.07),ae*.5,7),E);dn.position.y=ae*(.42+De*.2),Nt.add(dn)}Nt.position.set(Gt,0,xe),C.add(Nt)}else{let ae=new St(new _n(Pt(.8,2.6),0),Math.random()<.5?H:E);ae.position.set(Gt,.3,xe),ae.scale.y=Pt(.5,.9),ae.rotation.y=Math.random()*3,C.add(ae)}}}let S=new St(new Ro(9.5,64),new we({map:px(),roughness:.92,metalness:.02}));S.rotation.x=-Math.PI/2,g.add(S);let Z=new St(new Vn(9.5,.18,8,96),new we({color:4933206,roughness:.85}));Z.rotation.x=Math.PI/2,Z.position.y=.05,g.add(Z);let Q=new St(new $i(9,9),new rn({map:Zf("#a98bff"),transparent:!0,opacity:.38,blending:pn,depthWrite:!1}));Q.rotation.x=-Math.PI/2,Q.position.y=.03,Q.scale.x=-1,o.add(Q);let q=new we({color:5919846,roughness:.9}),at=zo("rgba(255,170,80,1)","rgba(255,120,40,0)"),ot=[];for(let tt of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let dt=tt-Math.PI/2,xt=Math.cos(dt)*10.4,_t=Math.sin(dt)*10.4-1.5,Lt=new Zt,Ht=new St(new ve(.42,.5,4.2,10),q);Ht.position.y=2.1;let Gt=new St(new je(1.2,.3,1.2),q);Gt.position.y=4.35;let xe=new St(new ve(.42,.22,.3,10),new we({color:2959923,metalness:.6,roughness:.4}));xe.position.y=4.65;let ae=new ti(new Zn({map:at,color:16756832,blending:pn,depthWrite:!1,transparent:!0}));ae.position.y=5.05,ae.scale.set(1.3,1.8,1);let Nt=new _i(16751178,10,14,2);Nt.position.y=5.1,Lt.add(Ht,Gt,xe,ae,Nt),Lt.position.set(xt,0,_t),g.add(Lt),ot.push({light:Nt,flame:ae,base:1,phase:Math.random()*10})}let pt=260,D=new Me,et=new Float32Array(pt*3),z=new Float32Array(pt);for(let tt=0;tt<pt;tt++)et[tt*3]=Pt(-14,14),et[tt*3+1]=Pt(0,7),et[tt*3+2]=Pt(-12,6),z[tt]=Math.random()*100;D.setAttribute("position",new Le(et,3));let K=new pr({size:.12,map:zo(),transparent:!0,depthWrite:!1,blending:pn,color:16777215,sizeAttenuation:!0});g.add(new mr(D,K));let W=zo(),U=zo("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),A=zo("rgba(150,120,255,1)","rgba(120,80,255,0)"),P=new Map;function k(tt,dt){let xt=new Zt,_t=null,Lt=null,Ht=null,Gt=1.95;dt.svg?(Gt=4.6,Ht=new Zn({transparent:!0,alphaTest:.05}),Lt=new ti(Ht),Lt.center.set(.5,0),Lt.scale.set(Gt*1.33,Gt,1),mx(dt.svg,(wt,De)=>{Ht.map=wt,Ht.needsUpdate=!0,Lt.scale.set(Gt*De,Gt,1)}),xt.add(Lt)):(_t=Sf(hu(dt.character??"wizard"),tt==="me"?"me":tt.startsWith("ally:")?"ally":"opp",W,dt.staff),Gt=_t.height,xt.add(_t.root));let xe=new St(new $i(Gt*.7,Gt*.32),new rn({map:U,transparent:!0,depthWrite:!1}));if(xe.rotation.x=-Math.PI/2,xe.position.y=.02,xt.add(xe),tt!=="me"){let wt=new St(new $i(Gt*1.1,Gt*1.1),new rn({map:Zf(tt==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:pn,depthWrite:!1}));wt.rotation.x=-Math.PI/2,wt.position.y=.04,wt.name="circle",xt.add(wt)}let ae=new ti(new Zn({map:A,blending:pn,depthWrite:!1,transparent:!0,opacity:0}));ae.scale.set(Gt*1.2,Gt*1.2,1),ae.position.y=Gt*.5,xt.add(ae),o.add(xt);let Nt={key:tt,group:xt,model:_t,sprite:Lt,spriteMat:Ht,height:Gt,ko:!1,flame:null,aura:ae,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,eyesFlashUntil:0,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100}};return P.set(tt,Nt),Nt}function X(){for(let tt of P.values())o.remove(tt.group),tt.group.traverse(dt=>{let xt=dt;xt.geometry?.dispose?.(),xt.material?.dispose?.()});P.clear()}let B=new Zt;a.add(B);let F=new R(1.08,-.52,-1.6),Y=new R(1.14,-.6,-1.6);B.scale.setScalar(.72);let j=F.clone(),V=new we({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),w=new we({color:4020950,roughness:.9,flatShading:!0,side:Ie}),st=new we({color:15778970,roughness:.75,flatShading:!0}),$=new Zt;B.add($);let G=ji("verdant",W),J="verdant";$.add(G.group);let it=new _i(G.color,.6,4,2);it.position.y=_r,$.add(it);function lt(tt){tt!==J&&(J=tt,$.remove(G.group),G.group.traverse(dt=>{dt.geometry?.dispose?.()}),G=ji(tt,W),$.add(G.group),it.color.copy(G.color))}{let tt=(Lt,Ht,Gt,xe,ae,Nt)=>{let wt=new St(Lt,Ht);return wt.position.set(xe,ae,Nt),Gt.add(wt),wt},dt=tt(new kr(.046,.075,4,10),st,$,.066,-.004,.014);dt.scale.set(.82,1,1.12),dt.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((Lt,Ht)=>{let Gt=.05-Ht*.002,xe=tt(new Vn(Gt,.019-Ht*.001,6,14,Math.PI*1.32),st,$,0,Lt,0);xe.rotation.x=-Math.PI/2;let ae=Math.PI*1.32;tt(new Ne(.019-Ht*.001,6,5),st,$,Math.cos(ae)*Gt,Lt,-Math.sin(ae)*Gt)}),tt(new kr(.021,.075,4,8),st,$,.022,.074,.05).rotation.set(.3,0,1.25);let _t=new Zt;_t.position.set(.09,-.08,.03),_t.rotation.set(-.55,0,.62),B.add(_t),tt(new ve(.05,.062,.2,10),st,_t,0,-.08,0),tt(new ve(.1,.16,.95,10,1,!0),w,_t,0,-.6,0),tt(new Vn(.1,.028,6,14),V,_t,0,-.14,0).rotation.x=Math.PI/2}let I=new _i(16777215,1.4,3,2);I.position.set(.3,.3,-.5),a.add(I);let v={wizard:{sleeve:3433416,skin:15916495},witch:{sleeve:8017597,skin:15654104},goblin:{sleeve:8015404,skin:8688447},knight:{sleeve:14077887,skin:14999246},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},O=-1e9,nt="ready",ht=0,rt=900,Et=()=>{nt==="gone"&&(nt="growing",ht=performance.now())},bt=0,mt=0,It=null,gt=!1,At={uTime:{value:0},uAmount:{value:0},uC0:{value:new kt},uC1:{value:new kt},uC2:{value:new kt},uC3:{value:new kt}},Wt=new St(new $i(1,1),new Yn({uniforms:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:pn,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Wt.renderOrder=30,Wt.frustumCulled=!1,a.add(Wt);function Ot(){let dt=Math.tan(Bs.degToRad(a.fov/2))*1.2,xt=dt*.55;Wt.scale.set(dt*a.aspect*2.05,xt,1),Wt.position.set(0,-dt+xt/2,-1.2)}function Rt(tt){let dt={h:0,s:0,l:0};tt.getHSL(dt),At.uC0.value.setHSL(dt.h,1,.82),At.uC1.value.setHSL(dt.h,1,.6),At.uC2.value.setHSL(dt.h,.95,.45),At.uC3.value.setHSL((dt.h+.03)%1,.9,.22)}let Ct=new R;function Xt(tt,dt="chest"){if(tt==="me")return dt==="staff"||dt==="head"?(G.gem.getWorldPosition(Ct),Ct.clone()):a.localToWorld(new R(Pt(-.15,.15),-.1,-1.4));let xt=P.get(tt);if(!xt)return new R(0,1.4,-3);if(xt.model&&dt==="staff")return xt.model.crystal.getWorldPosition(Ct),Ct.clone();let _t=xt.group.position.clone(),Lt=xt.height*xt.group.scale.y;return tt==="boss"&&dt==="mouth"?_t.add(new R(-xt.height*.55,xt.height*.62,.3)):_t.add(new R(0,Lt*(dt==="head"?.85:.6),0))}let ne=[],ct=0;function Dt(tt,dt,xt={}){if(n&&ct++&1)return;let _t=new ti(new Zn({map:W,color:dt,blending:xt.solid?vi:pn,depthWrite:!1,transparent:!0,opacity:xt.opacity??1}));_t.position.copy(tt),_t.scale.setScalar(xt.size??.25),o.add(_t),ne.push({sprite:_t,vel:xt.vel??new R,life:0,max:xt.life??.6,grow:xt.grow??0,gravity:xt.gravity??0})}function vt(tt,dt,xt=26,_t=3.2,Lt=.22){for(let Ht=0;Ht<xt;Ht++){let Gt=new R(Pt(-1,1),Pt(-.6,1.2),Pt(-1,1)).normalize().multiplyScalar(Pt(_t*.4,_t));Dt(tt,dt,{vel:Gt,size:Pt(Lt*.6,Lt*1.4),life:Pt(.4,.9),gravity:-3})}Dt(tt,dt,{size:.6,grow:6,life:.35,opacity:.9})}function Tt(tt,dt,xt=1){let _t=tt.group.position,Lt=tt.model?.45:tt.height*.35;for(let Ht=0;Ht<xt;Ht++){let Gt=tt.group.scale.y;Dt(new R(_t.x+Pt(-Lt,Lt)*Gt,_t.y+Pt(.05,tt.height*.45)*Gt,_t.z+Pt(-Lt,Lt)*.5*Gt),dt,{size:Pt(.35,.7)*Gt,vel:new R(Pt(-.1,.1),Pt(1.4,2.6),0),life:Pt(.35,.65),grow:-.9,opacity:.75,solid:!0}),Dt(new R(_t.x+Pt(-Lt,Lt)*.6*Gt,_t.y+Pt(.05,tt.height*.35)*Gt,_t.z),dt,{size:Pt(.3,.5)*Gt,vel:new R(0,Pt(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Dt(new R(_t.x+Pt(-Lt,Lt)*Gt,_t.y+Pt(.2,tt.height*.9)*Gt,_t.z),16777215,{size:Pt(.05,.1)*Gt,vel:new R(0,Pt(1.5,3),0),life:.5})}}let qt=[];function $t(tt){for(let xt=0;xt<2;xt++){let _t=[],Lt=tt.clone().add(new R(Pt(-1.5,1.5),9,Pt(-1,1)));for(let Gt=0;Gt<=12;Gt++){let xe=Lt.clone().lerp(tt,Gt/12);Gt>0&&Gt<12&&xe.add(new R(Pt(-.45,.45),Pt(-.2,.2),Pt(-.3,.3))),_t.push(xe)}let Ht=new ec(new Me().setFromPoints(_t),new So({color:xt?16777215:10475775,transparent:!0,blending:pn,depthWrite:!1}));o.add(Ht),qt.push({line:Ht,life:0});for(let Gt=0;Gt<_t.length-1;Gt++){let xe=_t[Gt].distanceTo(_t[Gt+1]);for(let ae=0;ae<xe;ae+=.09)Dt(_t[Gt].clone().lerp(_t[Gt+1],ae/xe),xt?16777215:9425151,{size:xt?.12:.3,life:.28,opacity:xt?1:.7})}}let dt=new _i(12576511,60,16,2);dt.position.copy(tt).add(new R(0,2,1)),o.add(dt),setTimeout(()=>o.remove(dt),160),vt(tt,12576511,30,4,.18)}let fe=[];function We(tt,dt,xt="#ffd479"){let _t=new ti(new Zn({map:dx(dt,xt),transparent:!0,depthWrite:!1,depthTest:!1}));_t.position.copy(Xt(tt,"head")).add(new R(Pt(-.3,.3),.4,.3));let Lt=tt==="me"?.9:1.3;_t.scale.set(Lt,Lt/2,1),_t.renderOrder=10,o.add(_t),fe.push({sprite:_t,life:0})}let tn=document.createElement("div");tn.className="arena3d-hit",document.body.append(tn);function _e(tt="255,40,60",dt=""){tn.style.setProperty("--hit",tt),tn.className="arena3d-hit",tn.offsetWidth,tn.className=`arena3d-hit on ${dt}`}let en=0,Wn=tt=>{ux()||(en=Math.max(en,tt))},Di=[];function Vo(tt,dt,xt,_t,Lt,Ht){let{tex:Gt,aspect:xe}=fx(xt,_t),ae=new ti(new Zn({map:Gt,transparent:!0,depthWrite:!1}));ae.scale.set(Lt*xe*.4,Lt*.4,1),ae.position.copy(tt),ae.renderOrder=5,o.add(ae);let Nt=tt.clone().lerp(dt,.5).add(new R(Pt(-.6,.6),1.2+tt.distanceTo(dt)*.08,0));return new Promise(wt=>Di.push({sprite:ae,from:tt,to:dt,mid:Nt,t:0,dur:Ht,color:new kt(_t),size:Lt,done:wt,trailAt:0}))}let $n="battle",wr="",jr="",Pe=null,xi=new Map,Sr=[],Kn=new Ki(16777215,1);Kn.visible=!1,o.add(Kn,Kn.target);let Go=(tt,dt)=>new R(tt[0],tt[2]-dt,-tt[1]);function Wo(tt,dt){Pe&&(o.remove(Pe.group),t.preview||Pe.dispose(),Pe=null);for(let _t of Sr)o.remove(_t);Sr.length=0;let xt=`${tt}-${dt}-${n}`;try{Pe=t.preview&&xi.get(xt)||bu(tt,dt,n)}catch(_t){console.warn("3D arena failed, using the classic one",_t),Pe=null}if(Pe&&t.preview&&xi.set(xt,Pe),g.visible=!Pe,Q.position.y=Pe?.1:.03,Kn.visible=!!Pe,!Pe){jr="";return}Pe.group.rotation.x=-Math.PI/2,Pe.group.position.y=-Pe.floor,o.add(Pe.group),Pe.group.traverse(_t=>{_t.name==="centre-pattern"&&(_t.visible=!1)});for(let _t of n?Pe.lights.slice(0,2):Pe.lights){let Lt=new _i(new kt(..._t.color),_t.intensity*8,_t.dist,2);Lt.position.copy(Go(_t.pos,Pe.floor)),Lt.userData.base=Lt.intensity,Lt.userData.flicker=_t.flicker??0,o.add(Lt),Sr.push(Lt)}}function wc(tt){let dt=tt.key.dir;Kn.color.setRGB(...tt.key.color),Kn.intensity=tt.key.intensity*.35,Kn.position.set(dt[0]*50,dt[2]*50,-dt[1]*50),Kn.target.position.set(0,0,0),h.color.setRGB(...tt.ambient.sky),h.groundColor.setRGB(...tt.ambient.ground),h.intensity=tt.ambient.intensity,u.intensity=0,m.intensity*=.45,d.intensity*=.5;let xt=o.fog;xt.color.setRGB(...tt.fog.color),xt.near=tt.fog.near,xt.far=tt.fog.far,e.setClearColor(xt.color)}let $s=0,Ui=0,N=0,ut=new En,yt=new En,Mt=!1,ft=!1,Bt=new kt(16777215),Vt=null;function Jt(tt,dt){let xt=c.z-dt,_t=Math.tan(Bs.degToRad(a.fov/2))*xt;return tt*_t*a.aspect}function Qt(){if(!Vt)return;let tt=Vt,dt=P.get("opp");dt?.model&&dt.group.scale.setScalar(1.3),dt&&dt.group.position.set(Jt(a.aspect<1?.08:tt.layout==="deck"?.36:.46,-2.2),0,-2.2);let xt=P.get("boss");xt&&xt.group.position.set(Jt(a.aspect<1?.15:.5,-5.5),0,-5.5),tt.allies.forEach((Lt,Ht)=>{let Gt=P.get(`ally:${Lt.id}`);Gt&&Gt.group.position.set(Jt(-.36+Ht*.13,-.6-Ht*1.1),0,-.6-Ht*1.1)});let _t=(xt??dt)?.group.position;for(let[Lt,Ht]of P){if(!Ht.model)continue;let Gt=Lt==="opp"?c:_t??new R(0,0,-3);Ht.model.root.rotation.y=Math.atan2(Gt.x-Ht.group.position.x,Gt.z-Ht.group.position.z)}}function se(tt){Vt=tt,$n=tt.layout,X();let dt=v[hu(tt.me.character??"wizard")]??v.wizard;w.color.set(dt.sleeve),st.color.set(dt.skin),st.metalness=tt.me.character==="knight"?.12:0,Qr(),lt(tt.me.staff??"verdant"),gt=!1,B.visible=!0,nt="ready",It=null,At.uAmount.value=0,Wt.visible=!1,tt.opp&&k("opp",tt.opp),tt.boss&&k("boss",tt.boss);for(let xt of tt.allies)k(`ally:${xt.id}`,xt);Qt(),oe(tt)}function oe(tt){let dt=_x[tt.time];h.color.set(dt.sky),h.groundColor.set(dt.ground),h.intensity=dt.hemi*1.25,m.intensity=tt.time==="night"?1.3:tt.time==="sunset"?1:.7,u.color.set(dt.sun),u.intensity=dt.sunInt,u.position.set(...dt.sunPos),d.intensity=tt.time==="night"?9:5;for(let xt of ot)xt.base=dt.torch;K.color.set(dt.motes),Bt=new kt(dt.spriteTint),wr!==tt.bgKey&&(wr=tt.bgKey,Wo(tt.bgKey.split("-")[0],tt.time)),Pe?wc(Pe):jr!==tt.bgKey&&(jr=tt.bgKey,o.fog.near=20,o.fog.far=58,M(tt.bgKey.split("-")[0]),gx(tt.bgSvg,(xt,_t,Lt)=>{_.map?.dispose(),_.map=xt,_.needsUpdate=!0,o.fog.color.copy(_t).lerp(Lt,.35),p.color.copy(_t).multiplyScalar(.9),x.color.copy(_t).lerp(new kt(5212730),.45).multiplyScalar(1.15),E.color.copy(_t).lerp(new kt(1522212),.5),e.setClearColor(Lt)}))}let ee=new Ut,ye=new Ut,He=.32,Xe=.13,Re={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},Ae=tt=>{tt.pointerType!=="mouse"||tt.buttons||tt.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||ee.set(tt.clientX/innerWidth*2-1,tt.clientY/innerHeight*2-1)};addEventListener("pointermove",Ae,{passive:!0});let Kt={yaw:0,pitch:0,at:0,live:0},fn=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?-1:1,Ce=()=>((screen.orientation?.angle??window.orientation??0)%360+360)%360,On=tt=>{let dt=tt.rotationRate;if(!dt||dt.beta===null||dt.gamma===null||!js)return;let xt=performance.now(),_t=Kt.at?Math.min(.1,(xt-Kt.at)/1e3):0;Kt.at=xt,Kt.live=xt;let Lt=Ce(),Ht=tt.accelerationIncludingGravity,Gt=Ht&&Ht.x!==null&&Ht.y!==null&&Ht.z!==null?Math.hypot(Ht.x,Ht.y,Ht.z):0,xe=Gt>4?(dt.beta*Ht.x+dt.gamma*Ht.y+(dt.alpha??0)*Ht.z)/Gt*fn:Lt===90?dt.beta:Lt===270?-dt.beta:Lt===180?-dt.gamma:dt.gamma,ae=Lt===90?-dt.gamma:Lt===270?dt.gamma:Lt===180?-dt.beta:dt.beta,Nt=Math.exp(-_t/2.2);Kt.yaw=(Kt.yaw+xe*_t)*Nt,Kt.pitch=(Kt.pitch+ae*_t)*Nt,ee.set(Math.max(-1,Math.min(1,-Kt.yaw/16)),Math.max(-1,Math.min(1,-Kt.pitch/14)))},nr=matchMedia("(pointer: coarse)").matches&&"DeviceMotionEvent"in window,Tn=()=>{removeEventListener("touchend",Tn);let tt=DeviceMotionEvent;tt.requestPermission&&tt.requestPermission().then(dt=>{dt==="granted"&&addEventListener("devicemotion",On)}).catch(()=>{})};nr&&(DeviceMotionEvent.requestPermission?addEventListener("touchend",Tn,{passive:!0}):addEventListener("devicemotion",On));function Qr(){let tt=$n==="deck"?Y:F,dt=$n==="deck"?.56:.72;if(a.aspect>=1.2){j.copy(tt),B.scale.setScalar(dt);return}let xt=Math.tan(Bs.degToRad(a.fov/2))*-tt.z,_t=xt*a.aspect;j.set(_t*.78,-xt*.62,tt.z),B.scale.setScalar(dt*Math.max(.5,Math.min(1,a.aspect*.9)))}function Fe(){let tt=i.clientWidth||innerWidth,dt=i.clientHeight||innerHeight;e.setSize(tt,dt,!1),a.aspect=tt/dt,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),Qt(),Ot(),Qr()}addEventListener("resize",Fe);let ai=0,ts=0,Bn=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!js||i.clientWidth===ai&&i.clientHeight===ts||(ai=i.clientWidth,ts=i.clientHeight,Fe())}):null;Bn?.observe(i);let Ks=new kt(6974072),Sc=new kt(16722474),Js=new kt(9428223),$f=new kt(2784511),vu=new kt(16738842);function Kf(tt,dt){let xt=dt<tt.hurtUntil,_t=dt<tt.frostUntil,Lt=dt<tt.burnUntil;if(tt.model&&tt.ko){for(let Ht of tt.model.materials)Ht.mat.color.copy(Ht.color).lerp(Ks,.55),Ht.mat.emissive.setRGB(0,0,0);return}if(tt.model){if(_t!==tt.frosted){tt.frosted=_t;for(let Ht of tt.model.materials)Ht.mat.opacity=_t?.5:1,Ht.mat.depthWrite=!_t}for(let Ht of tt.model.materials)Ht.mat.color.copy(Ht.color),_t&&Ht.mat.color.lerp(Js,.75),xt?(Ht.mat.emissive.copy(Sc),Ht.mat.emissiveIntensity=.6):_t?(Ht.mat.emissive.copy($f),Ht.mat.emissiveIntensity=.45):Lt?(Ht.mat.color.lerp(vu,.35),Ht.mat.emissive.copy(vu),Ht.mat.emissiveIntensity=.55+.3*Math.sin(dt/40)):(Ht.mat.emissive.copy(Ht.emissive),Ht.mat.emissiveIntensity=1)}else tt.spriteMat&&(tt.spriteMat.color.copy(xt?new kt(1,.35,.35):_t?Js:Lt?new kt(1,.7,.5):Bt),tt.spriteMat.opacity=_t?.6:tt.ko?tt.spriteMat.opacity:1)}let js=!1,Tc=0,Xo=performance.now(),Ke=0,Ac=!1,es=0,qo=0,Qs=0,Rc=0;function Jf(tt){if(r||document.hidden)return;if(Rc<45){Rc++;return}if(qo++,Qs+=tt,Qs<2500)return;let dt=qo*1e3/Qs;qo=0,Qs=0,!(dt>=(n?22:34))&&(n?(r=!0,e.setPixelRatio(s()),Fe()):Yo.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(dt),lowRes:r}})))}function Eu(tt){Tc=requestAnimationFrame(Eu),t.preview||Jf(tt-Xo);let dt=Math.min(1,Math.max(0,(tt-Xo)/1e3)),xt=Math.min(.05,dt);Xo=tt,Ke+=xt;let _t=performance.now(),Lt=!1;ye.lerp(ee,Lt?1:performance.now()-Kt.live<300?Math.min(1,dt*14):.05);let Ht=Lt?0:Math.sin(Ke*.7)*.025;if(n)a.position.set(c.x+ye.x*.12,c.y-ye.y*.05+Ht,c.z),a.lookAt(l.clone().add(new R(ye.x*1.5,-ye.y*.75,0))),Re.yaw=0,Re.pitch=0;else{Re.yaw=-ye.x*He,Re.pitch=-ye.y*Xe,a.position.set(c.x,c.y+Ht,c.z);let Nt=l.clone().sub(c).applyAxisAngle(new R(0,1,0),Re.yaw),wt=Nt.clone().cross(new R(0,1,0)).normalize();Nt.applyAxisAngle(wt,Re.pitch),a.lookAt(c.clone().add(Nt))}es+=((Ac?1:0)-es)*Math.min(1,xt*4);let Gt=P.get("opp");if(es>.001&&Gt){let Nt=Gt.group.position,wt=es*es*(3-2*es);a.position.lerp(new R(Nt.x+1.1,1.75+Ht,Nt.z+3.4),wt),a.lookAt(new R(0,0,-1).applyQuaternion(a.quaternion).multiplyScalar(4).add(a.position).lerp(new R(Nt.x-.1,1.45,Nt.z),wt))}!t.preview&&js&&Vt&&(Vt.opp||Vt.allies.length)&&tt-Re.sentAt>150&&(Math.abs(Re.yaw-Re.sentYaw)>.02||Math.abs(Re.pitch-Re.sentPitch)>.02)&&(Re.sentAt=tt,Re.sentYaw=Re.yaw,Re.sentPitch=Re.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+Re.yaw.toFixed(3),pitch:+Re.pitch.toFixed(3)}}))),en>0&&(a.position.add(new R(Pt(-1,1),Pt(-1,1),0).multiplyScalar(en)),a.rotation.z+=Pt(-1,1)*en*.15,en=Math.max(0,en-xt*1.1)),Ui+=($s-Ui)*Math.min(1,xt*6),N=Math.max(0,N-xt*2.2),ut.x+=(yt.x-ut.x)*Math.min(1,xt*14),ut.y+=(yt.y-ut.y)*Math.min(1,xt*14),ut.z+=(yt.z-ut.z)*Math.min(1,xt*14),N<=0&&yt.set(0,0,0);let xe=.5+.5*Math.sin(Ke*6);{let Nt=Math.max(0,1-(_t-O)/380),wt=Nt>0?Math.sin(Nt*Math.PI):0,De=Math.min(1,Ui);bt+=((De>.05&&!Lt?Math.min(1,.5+De*.6):0)-bt)*Math.min(1,xt*3),mt+=xt*(2.6+De*1.4);let dn=Math.sin(mt),Jn=Math.sin(mt*2)/2;B.position.set(j.x-ye.x*.04+dn*.06*bt,j.y+ye.y*.03+(Lt?0:Math.sin(Ke*1.6)*.008)+De*.03+Jn*.11*bt,j.z-wt*.35),$.rotation.set(De*.25-wt*.75+ut.x*.3+Jn*.18*bt,ut.y*.3,.2-dn*.24*bt+ut.z*.3);let nn=nt==="ready"?1:0;if(nt==="growing"){let on=Math.min(1,(_t-ht)/rt);if(nn=on*on*(3-2*on),on>=1)nt="ready";else if(!Lt){G.gem.getWorldPosition(Ct);for(let Ee=0;Ee<2;Ee++){let Be=Ct.clone().add(new R(Pt(-.4,.4),Pt(-.4,.4),Pt(-.4,.4)));Dt(Be,G.color,{size:Pt(.025,.06),vel:Ct.clone().sub(Be).multiplyScalar(2.8),life:.36})}}}if(G.gem.scale.setScalar(nn),G.gemMat.emissiveIntensity=.7+De*(1.6+xe*1.2)+wt*3,it.intensity=(.5+De*4+wt*6)*nn,G.glow.scale.setScalar((.3+De*(.32+xe*.18)+wt*.6)*nn),G.glow.material.opacity=.3+De*.35,G.gem.rotation.y+=xt*(.8+De*6),G.update(Ke,xt,De),nn>.9&&!Lt&&B.visible&&(G.gem.getWorldPosition(Ct),bt>.25&&Dt(Ct.clone(),G.color,{size:Pt(.03,.05),life:.55,opacity:.9}),De>.2&&Math.random()<De*.8)){let on=Ct.clone().add(new R(Pt(-.35,.35),Pt(-.35,.35),Pt(-.35,.35)));Dt(on,G.color.clone().lerp(new kt(16777215),.4),{size:Pt(.02,.05),vel:Ct.clone().sub(on).multiplyScalar(2.6),life:.38})}if(It&&!Lt&&B.visible)for(let on=0;on<2;on++){let Ee=$.localToWorld(new R(Pt(-.05,.05),Pt(-.15,1.3),Pt(-.05,.05)));Dt(Ee,It,{size:Pt(.05,.12),vel:new R(Pt(-.05,.05),Pt(.35,.8),0),life:Pt(.25,.45),solid:Math.random()<.4,opacity:.9})}At.uTime.value=Lt?0:Ke,At.uAmount.value+=((It&&(B.visible||Ac)?1:0)-At.uAmount.value)*Math.min(1,dt*3),Wt.visible=At.uAmount.value>.01}for(let[Nt,wt]of P){let De=wt.group.getObjectByName("circle");if(De&&(De.rotation.z+=xt*.4),Kf(wt,_t),wt.ko)continue;let dn=Math.max(0,wt.lungeUntil-_t)/450;if(wt.model){let Ee=wt.model;Ee.body.position.y=Lt?0:Math.sin(Ke*2+wt.height*3)*.02;let Be=wt.look,Ni=_t-Be.at>4e3,Cc=Ni?.22*Math.sin(Ke*.31+Be.seed)*Math.sin(Ke*.13+Be.seed*2):Be.yaw,Zo=Ni?.06*Math.sin(Ke*.23+Be.seed*3):Be.pitch;Be.curYaw+=(Cc-Be.curYaw)*Math.min(1,xt*7),Be.curPitch+=(Zo-Be.curPitch)*Math.min(1,xt*7),Ee.head.rotation.set(-Be.curPitch*.8,Be.curYaw*.7,0),Ee.body.rotation.y=Be.curYaw*.3;let ci=1-dn,Tr=dn<=0?0:ci<.18?-.35*(ci/.18):ci<.4?-.35+1.35*((ci-.18)/.22):1-((ci-.4)/.6)**2;Ee.body.rotation.x=Math.max(0,Tr)*.2,Ee.staffPivot.rotation.x=Tr*1.9;let Pc=Nt==="me"?Ui:(Nt==="opp"||Nt.startsWith("ally:"))&&Mt?$n==="deck"?.7:.45:0,wu=Nt==="me"?0:Pc*(1-Math.max(0,Tr)),Qf=-.15-Pc*.75-Math.max(0,Tr)*.9+(Nt==="me"?ut.x:0)+Math.sin(Ke*4.4)*.22*wu;Ee.arm.rotation.x+=(Qf-Ee.arm.rotation.x)*Math.min(1,xt*10),Ee.arm.rotation.z=-.35+(Nt==="me"?ut.z:0)+Math.sin(Ke*2.2)*.32*wu,Ee.arm.rotation.y=Nt==="me"?ut.y:0;let Ar=Nt==="me"?Ui:Pc;Ee.crystalMat.emissiveIntensity=1.2+Ar*(3+xe*2)+dn*3,Ee.glow.scale.setScalar(.45+Ar*(.5+xe*.3)+dn*.6),Ee.glow.material.opacity=.45+Ar*.5,Ee.crystal.rotation.y+=xt*(.8+Ar*6),Ee.staff.update(Ke,xt,Ar),Ar>.5&&Math.random()<Ar*.6&&(Ee.crystal.getWorldPosition(Ct),Dt(Ct.clone().add(new R(Pt(-.1,.1),Pt(-.1,.1),Pt(-.1,.1))),Ee.staff.color.getHex(),{size:Pt(.03,.08),vel:new R(Pt(-.2,.2),Pt(.2,.6),0),life:.7}))}else wt.sprite&&(wt.sprite.position.y=Lt?0:Math.abs(Math.sin(Ke*2))*.05,wt.sprite.position.z=dn*.4);let Jn=Nt==="opp"&&Mt&&$n==="deck"||Nt==="boss"&&ft,nn=wt.aura.material;nn.opacity+=((Jn?.55+.2*Math.sin(Ke*5):wt.flame?.35:0)-nn.opacity)*Math.min(1,xt*5),nn.color.copy(Nt==="boss"?new kt(16742954):wt.flame??new kt(11832575)),wt.flame&&Tt(wt,wt.flame,2);let on=wt.model?.eyes;if(on?.visible){let Ee=Math.max(0,wt.eyesFlashUntil-_t)/1400,Be=1+.25*Math.sin(Ke*7)+Ee*3.5;for(let Ni of on.children)Ni.isSprite&&Ni.scale.setScalar(.06*Be);!wt.flame&&Ee<=0&&(on.visible=!1)}if(_t<wt.burnUntil&&Tt(wt,Math.random()<.5?16734746:16756784,3),_t<wt.frostUntil&&Math.random()<.3&&Tt(wt,13628159,1),Nt==="boss"&&ft&&Math.random()<.8){let Ee=Xt("boss","mouth"),Be=Ee.clone().add(new R(Pt(-1.5,1.5),Pt(-1,1),Pt(-1,1)));Dt(Be,16751162,{size:.12,vel:Ee.clone().sub(Be).multiplyScalar(1.6),life:.55})}}for(let Nt of ot){let wt=.85+.15*Math.sin(Ke*9+Nt.phase)+.08*Math.sin(Ke*23+Nt.phase*2);Nt.light.intensity=Nt.base*wt,Nt.flame.scale.set(1.2*wt,1.8*(.9+.2*wt),1)}if(Q.rotation.z+=xt*.05,Pe){Pe.update(Ke*30);for(let Nt of Sr)Nt.userData.flicker&&(Nt.intensity=Nt.userData.base*(1-Nt.userData.flicker*(.5+.5*Math.sin(Ke*9+Nt.position.x)*Math.sin(Ke*23+Nt.position.z))))}let ae=D.attributes.position;for(let Nt=0;Nt<pt;Nt++){let wt=ae.getY(Nt)+xt*(.12+z[Nt]%1*.2);wt>7.5&&(wt=0),ae.setY(Nt,wt),ae.setX(Nt,ae.getX(Nt)+Math.sin(Ke*.5+z[Nt])*xt*.15)}ae.needsUpdate=!0,K.opacity=.55+.35*Math.sin(Ke*1.3);for(let Nt=Di.length-1;Nt>=0;Nt--){let wt=Di[Nt];wt.t+=xt/wt.dur;let De=Math.min(1,wt.t),dn=De*De*(1.6-.6*De),Jn=wt.from.clone().lerp(wt.mid,dn),nn=wt.mid.clone().lerp(wt.to,dn);wt.sprite.position.copy(Jn.lerp(nn,dn)),wt.gem&&(wt.gem.position.copy(wt.sprite.position),wt.gem.rotation.y+=xt*12,wt.gem.rotation.x+=xt*7);let on=.55+dn*.8,Ee=wt.sprite.material,Be=Ee.map?.image,Ni=Be?Be.width/Be.height:1;wt.sprite.scale.set(wt.size*Ni*.4*on,wt.size*.4*on,1),wt.trailAt-=xt,wt.trailAt<=0&&!Lt&&(wt.trailAt=.016,Dt(wt.sprite.position,wt.color,{size:Pt(.05,.13)*wt.size,life:.35,opacity:.8,vel:new R(Pt(-.3,.3),Pt(-.3,.3),Pt(-.3,.3))})),De>=1&&(o.remove(wt.sprite),Ee.map?.dispose(),Ee.dispose(),wt.gem&&o.remove(wt.gem),Di.splice(Nt,1),wt.done())}for(let Nt=ne.length-1;Nt>=0;Nt--){let wt=ne[Nt];if(wt.life+=xt,wt.life>=wt.max){o.remove(wt.sprite),wt.sprite.material.dispose(),ne.splice(Nt,1);continue}wt.vel.y+=wt.gravity*xt,wt.sprite.position.addScaledVector(wt.vel,xt),wt.grow&&wt.sprite.scale.multiplyScalar(1+wt.grow*xt),wt.sprite.material.opacity=1-wt.life/wt.max}for(let Nt=qt.length-1;Nt>=0;Nt--){let wt=qt[Nt];wt.life+=xt,wt.line.material.opacity=wt.life<.08||wt.life>.14&&wt.life<.2?1:.15,wt.life>.32&&(o.remove(wt.line),wt.line.geometry.dispose(),wt.line.material.dispose(),qt.splice(Nt,1))}for(let Nt=fe.length-1;Nt>=0;Nt--){let wt=fe[Nt];wt.life+=xt,wt.sprite.position.y+=xt*.8,wt.sprite.material.opacity=Math.min(1,2.2-wt.life*2),wt.life>1.1&&(o.remove(wt.sprite),wt.sprite.material.map?.dispose(),wt.sprite.material.dispose(),fe.splice(Nt,1))}e.render(o,a)}function jf(tt,dt,xt){let _t=P.get(tt),Lt=performance.now();dt==="bolt"&&($t(_t?Xt(tt,"head"):xt),tt==="me"&&_e("190,230,255","bolt")),dt==="frost"&&(_t&&(_t.frostUntil=Lt+1100),vt(xt,13628159,30,2.5,.16),tt==="me"&&_e("140,210,255","frost")),dt==="fire"&&(_t&&(_t.burnUntil=Lt+1100),vt(xt,16742954,36,3.4,.24),tt==="me"&&_e("255,120,30","fire"))}let Yo={setup:se,setActive(tt){tt!==js&&(js=tt,i.classList.toggle("on",tt),tt?(Fe(),Xo=performance.now(),Rc=0,qo=0,Qs=0,Tc=requestAnimationFrame(Eu)):cancelAnimationFrame(Tc))},async cast(tt,dt,xt,_t={}){let Lt=_t.kind??"attack",Ht=tt==="me"||tt.startsWith("ally:"),Gt=Lt==="heal"?"#5dffa8":Lt==="mana"?"#ffd479":_t.fx==="bolt"?"#bfe6ff":_t.fx==="frost"?"#8fdcff":_t.fx==="fire"?"#ff8a3a":Ht?"#a98bff":"#ff6b6b",xe=P.get(tt);if(xe&&(xe.lungeUntil=performance.now()+450),tt==="me"&&(Ui=0,$s=0),Lt!=="attack"){if(tt==="me"&&nt!=="gone"&&B.visible){O=performance.now(),nt="gone";let nn=new St(G.gem.geometry,G.gemMat),on=Xt("me","staff"),Ee=Xt("me","chest"),Be=on.clone().lerp(Ee,.5).add(new R(0,.35,0));nn.position.copy(on),nn.scale.setScalar(1.3),o.add(nn);let Ni=performance.now();await new Promise(Cc=>{let Zo=()=>{let ci=Math.min(1,(performance.now()-Ni)/520),Tr=on.clone().lerp(Be,ci).lerp(Be.clone().lerp(Ee,ci),ci);nn.position.copy(Tr),nn.rotation.y+=.3,nn.scale.setScalar(1.3*(1-ci*.7)),Math.random()<.8&&Dt(Tr.clone(),Gt,{size:Pt(.03,.07),life:.35,opacity:.9}),ci<1?requestAnimationFrame(Zo):(o.remove(nn),Cc())};Zo()})}let Jn=Xt(tt);for(let nn=0;nn<30;nn++)Dt(Jn.clone().add(new R(Pt(-.5,.5),Pt(-.8,.2),Pt(-.3,.3))),Gt,{size:Pt(.08,.2),vel:new R(Pt(-.2,.2),Pt(.8,1.8),0),life:Pt(.6,1.1)});tt==="me"&&_e(Lt==="heal"?"80,255,160":"255,212,121"),_t.damage&&We(tt,`+${_t.damage}`,Gt);return}let ae=Xt(tt,tt==="boss"?"mouth":"staff"),Nt=Xt(dt,"chest"),wt=(_t.crit?1.5:1)*1.15,De=Vo(ae,Nt,xt,Gt,wt,.85);if(tt==="me"){O=performance.now(),nt="gone";let Jn=new St(G.gem.geometry,G.gemMat);Jn.scale.setScalar(1.5),Jn.position.copy(ae),o.add(Jn),Di[Di.length-1].gem=Jn}await De,vt(Nt,Gt,_t.crit?46:28,_t.crit?4.4:3.2,.2);let dn=P.get(dt);dn&&(dn.hurtUntil=performance.now()+450),jf(dt,_t.fx,Nt),dt==="me"?(_t.fx||_e(),Wn(_t.crit?.16:.09)):Wn(_t.crit?.07:.035),_t.damage&&We(dt,`\u2212${_t.damage}${_t.crit?"!":""}`,dt==="me"?"#ff6b81":_t.crit?"#ff9a3a":"#ffd479")},fizzle(tt){let dt=Xt(tt,tt==="boss"?"head":"staff");if(tt!=="me")for(let xt=0;xt<14;xt++)Dt(dt,10132136,{size:Pt(.1,.25),vel:new R(Pt(-.6,.6),Pt(.3,1),Pt(-.3,.3)),life:.8,opacity:.6});if(tt==="me"){if(Ui=0,nt!=="gone"&&B.visible){G.gem.getWorldPosition(Ct);for(let xt=0;xt<16;xt++)Dt(Ct.clone(),Math.random()<.5?G.color:10132136,{size:Pt(.02,.05),vel:new R(Pt(-.8,.8),Pt(-.2,.9),Pt(-.5,.5)),life:Pt(.4,.7),gravity:-2.5})}nt="gone"}},ko(tt){if(tt==="me"){if(gt)return;gt=!0,It=null,G.gem.getWorldPosition(Ct),vt(Ct.clone(),10132136,18,1.6,.1),B.visible=!1;return}let dt=P.get(tt);if(!dt||dt.ko)return;dt.ko=!0,dt.flame=null,dt.aura.material.opacity=0;let xt=performance.now(),_t=()=>{let Lt=Math.min(1,(performance.now()-xt)/700),Ht=Lt*Lt;dt.model?(dt.model.root.rotation.z=Math.PI/2*Ht,dt.model.root.position.y=.24*Ht):dt.spriteMat&&(dt.spriteMat.rotation=Math.PI/2*Lt*-1,dt.spriteMat.opacity=1-Lt*.6),Lt<1&&requestAnimationFrame(_t)};_t(),vt(Xt(tt),16777215,40,3,.25)},onfire(tt,dt,xt){if(tt==="me"){It=dt&&!gt?new kt(xt??"#6ee7ff"):null,It&&Rt(It);return}let _t=P.get(tt);_t&&(_t.flame=dt?new kt(xt??"#6ee7ff"):null),_t?.model?.eyes&&(_t.model.eyes.visible=dt)},focusOpp(tt){Ac=tt,B.visible=!tt},prewarm(tt,dt){if(!t.preview)return;let xt=tt.filter(Ht=>!xi.has(`${Ht}-${dt}-${n}`)),_t=Ht=>(globalThis.requestIdleCallback??(Gt=>setTimeout(Gt,200)))(Ht,{timeout:2e3}),Lt=()=>{let Ht=xt.shift();if(!Ht)return;let Gt=`${Ht}-${dt}-${n}`;if(!xi.has(Gt))try{let xe=bu(Ht,dt,n);xe&&xi.set(Gt,xe)}catch{}_t(Lt)};_t(Lt)},setBackground(tt,dt,xt){Vt&&(Vt={...Vt,bgKey:tt,time:dt,bgSvg:xt},oe(Vt))},flashEyes(tt){let dt=P.get(tt);dt?.model?.eyes&&(dt.model.eyes.visible=!0,dt.eyesFlashUntil=performance.now()+1400)},channel(tt){$s=Math.max(0,Math.min(1,tt))},twitch(){Et(),N=.35,yt.set(Pt(-.35,.25),Pt(-.25,.25),Pt(-.3,.3)),Math.random()<.6&&nt==="ready"&&(G.gem.getWorldPosition(Ct),Dt(Ct.clone(),G.color.clone().lerp(new kt(16777215),.5),{size:Pt(.04,.09),vel:new R(Pt(-.6,.6),Pt(.2,.9),Pt(-.3,.3)),life:.5}))},thrust(){O=performance.now(),G.gem.getWorldPosition(Ct),vt(Ct.clone(),G.color,18,1.6,.08)},oppChannel(tt){Mt=tt},inhale(tt){ft=tt},breath(tt,dt){ft=!1;let xt=Xt("boss","mouth");for(let _t=0;_t<160;_t++)setTimeout(()=>{let Ht=(tt.length?Xt(tt[_t%tt.length]):a.localToWorld(new R(0,-.2,-1))).clone().add(new R(Pt(-1.5,1.5),Pt(-.8,.8),0)).sub(xt).normalize().multiplyScalar(Pt(7,11));Dt(xt,Math.random()<.4?16765530:16734746,{size:Pt(.3,.7),vel:Ht,life:Pt(.6,.9),grow:1.2})},_t*5);setTimeout(()=>{for(let _t of tt){let Lt=P.get(_t);Lt&&(Lt.hurtUntil=performance.now()+500,Lt.burnUntil=performance.now()+900),We(_t,`\u2212${dt}`,"#ff9a3a")}tt.includes("me")&&(_e("255,120,30"),Wn(.16))},450)},claw(tt,dt){let xt=P.get("boss");xt&&(xt.lungeUntil=performance.now()+450),setTimeout(()=>{let _t=P.get(tt);_t&&(_t.hurtUntil=performance.now()+450),tt==="me"&&(_e("255,40,60","claw"),Wn(.13)),We(tt,`\u2212${dt}`,"#ff6b81")},200)},float:We,look(tt,dt,xt){let _t=P.get(tt);!_t||!Number.isFinite(dt)||!Number.isFinite(xt)||(_t.look.yaw=Math.max(-He,Math.min(He,dt)),_t.look.pitch=Math.max(-Xe,Math.min(Xe,xt)),_t.look.at=performance.now())},setLite(tt){let dt=n!==tt;n=tt,dt&&Pe&&Vt&&(wr="",se(Vt)),e.setPixelRatio(s()),L.count=tt?900:b,D.setDrawRange(0,tt?90:pt),Fe()},dispose(){Yo.setActive(!1),Bn?.disconnect(),removeEventListener("pointermove",Ae),removeEventListener("devicemotion",On),removeEventListener("touchend",Tn),removeEventListener("resize",Fe),tn.remove(),Pe&&(Pe.dispose(),Pe=null),e.dispose()}};n&&Yo.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return G},get gemState(){return nt},scene:o,camera:a,renderer:e}),Fe();try{e.compile(o,a)}catch{}return Yo}globalThis.KWArena3D=xx;globalThis.KWStaffPreview=Tf;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
