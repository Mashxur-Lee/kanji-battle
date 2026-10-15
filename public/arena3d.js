"use strict";(()=>{var Ff=Object.defineProperty;var Of=(i,t,e)=>t in i?Ff(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Fe=(i,t,e)=>Of(i,typeof t!="symbol"?t+"":t,e);var Bf=0,bh=1,zf=2;var Pu=1,kf=2,yi=3,Dn=0,En=1,Ie=2,Vi=0,ei=1,$e=2,Eh=3,Sh=4,Vf=5,hs=100,Gf=101,Wf=102,Xf=103,qf=104,Yf=200,Zf=201,$f=202,Kf=203,mc=204,gc=205,Jf=206,Qf=207,jf=208,td=209,ed=210,nd=211,id=212,sd=213,rd=214,_c=0,yc=1,xc=2,Ks=3,Mc=4,vc=5,bc=6,Ec=7,zl=0,kl=1,od=2,Gi=0,ad=1,cd=2,ld=3,$r=4,hd=5,ud=6,fd=7;var Iu=300,Js=301,Qs=302,Br=303,Sc=304,xa=306,ds=1e3,Mi=1001,wc=1002,hn=1003,dd=1004;var ao=1005;var Gn=1006,Ua=1007;var fs=1008;var Ei=1009,Lu=1010,Uu=1011,zr=1012,Vl=1013,ps=1014,ti=1015,Kr=1016,Gl=1017,Wl=1018,js=1020,Du=35902,Nu=1021,Hu=1022,Xn=1023,Fu=1024,Ou=1025,Ys=1026,tr=1027,Xl=1028,ql=1029,Bu=1030,Yl=1031;var Zl=1033,Bo=33776,zo=33777,ko=33778,Vo=33779,Tc=35840,Ac=35841,Rc=35842,Cc=35843,Pc=36196,Ic=37492,Lc=37496,Uc=37808,Dc=37809,Nc=37810,Hc=37811,Fc=37812,Oc=37813,Bc=37814,zc=37815,kc=37816,Vc=37817,Gc=37818,Wc=37819,Xc=37820,qc=37821,Go=36492,Yc=36494,Zc=36495,zu=36283,$c=36284,Kc=36285,Jc=36286;var Xo=2300,Qc=2301,Da=2302,wh=2400,Th=2401,Ah=2402;var pd=3200,md=3201;var $l=0,gd=1,zi="",ln="srgb",Yi="srgb-linear",Kl="display-p3",Ma="display-p3-linear",qo="linear",De="srgb",Yo="rec709",Zo="p3";var As=7680;var Rh=519,_d=512,yd=513,xd=514,ku=515,Md=516,vd=517,bd=518,Ed=519,jc=35044;var Ch="300 es",vi=2e3,$o=2001,Wi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=1234567,Dr=Math.PI/180,kr=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function Jl(i,t){return(i%t+t)%t}function Sd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wd(i,t,e){return i!==t?(e-i)/(t-i):0}function Nr(i,t,e){return(1-e)*i+e*t}function Td(i,t,e,n){return Nr(i,t,1-Math.exp(-e*n))}function Ad(i,t=1){return t-Math.abs(Jl(i,t*2)-t)}function Rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Id(i,t){return i+Math.random()*(t-i)}function Ld(i){return i*(.5-Math.random())}function Ud(i){i!==void 0&&(Ph=i);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dd(i){return i*Dr}function Nd(i){return i*kr}function Hd(i){return(i&i-1)===0&&i!==0}function Fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Od(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),p=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var cr={DEG2RAD:Dr,RAD2DEG:kr,generateUUID:bi,clamp:nn,euclideanModulo:Jl,mapLinear:Sd,inverseLerp:wd,lerp:Nr,damp:Td,pingpong:Ad,smoothstep:Rd,smootherstep:Cd,randInt:Pd,randFloat:Id,randFloatSpread:Ld,seededRandom:Ud,degToRad:Dd,radToDeg:Nd,isPowerOfTwo:Hd,ceilPowerOfTwo:Fd,floorPowerOfTwo:Od,setQuaternionFromProperEuler:Bd,normalize:Te,denormalize:Wn},Bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],g=n[8],_=s[0],d=s[3],f=s[6],y=s[1],x=s[4],M=s[7],I=s[2],E=s[5],A=s[8];return r[0]=o*_+a*y+c*I,r[3]=o*d+a*x+c*E,r[6]=o*f+a*M+c*A,r[1]=l*_+h*y+u*I,r[4]=l*d+h*x+u*E,r[7]=l*f+h*M+u*A,r[2]=p*_+m*y+g*I,r[5]=p*d+m*x+g*E,r[8]=p*f+m*M+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,m=l*r-o*c,g=e*u+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Na.makeScale(t,e)),this}rotate(t){return this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Na=new fe;function Vu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zd(){let i=Ko("canvas");return i.style.display="block",i}var Ih={};function Wo(i){i in Ih||(Ih[i]=!0,console.warn(i))}function kd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Vd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Lh=new fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uh=new fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vr={[Yi]:{transfer:qo,primaries:Yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ln]:{transfer:De,primaries:Yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ma]:{transfer:qo,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Uh),fromReference:i=>i.applyMatrix3(Lh)},[Kl]:{transfer:De,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uh),fromReference:i=>i.applyMatrix3(Lh).convertLinearToSRGB()}},Wd=new Set([Yi,Ma]),Ee={enabled:!0,_workingColorSpace:Yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=vr[t].toReference,s=vr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return vr[i].primaries},getTransfer:function(i){return i===zi?qo:vr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(vr[t].luminanceCoefficients)}};function Zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rs,tl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=Ko("canvas")),Rs.width=t.width,Rs.height=t.height;let n=Rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ko("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zs(e[n]/255)*255):e[n]=Zs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xd=0,Jo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qd=0,Sn=class i extends Wi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=Gn,o=fs,a=Xn,c=Ei,l=i.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=bi(),this.name="",this.source=new Jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Iu;Sn.DEFAULT_ANISOTROPY=1;var Ae=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],m=c[5],g=c[9],_=c[2],d=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,M=(m+1)/2,I=(f+1)/2,E=(h+p)/4,A=(u+_)/4,F=(g+d)/4;return x>M&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=A/n):M>I?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=F/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=F/r),this.set(n,s,r,e),this}let y=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(u-_)/y,this.z=(p-h)/y,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},el=class extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends el{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qo=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==p||l!==m||h!==g){let d=1-a,f=c*p+l*m+h*g+u*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let I=Math.sqrt(x),E=Math.atan2(I,f*y);d=Math.sin(d*E)/I,a=Math.sin(a*E)/I}let M=a*y;if(c=c*d+p*M,l=l*d+m*M,h=h*d+g*M,u=u*d+_*M,d===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*m-l*p,t[e+1]=c*g+h*p+l*u-a*m,t[e+2]=l*g+h*m+a*p-c*u,t[e+3]=h*g-a*u-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*m*g,this._y=l*m*u-p*h*g,this._z=l*h*g+p*m*u,this._w=l*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+l*m*g,this._y=l*m*u-p*h*g,this._z=l*h*g-p*m*u,this._w=l*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-l*m*g,this._y=l*m*u+p*h*g,this._z=l*h*g+p*m*u,this._w=l*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-l*m*g,this._y=l*m*u+p*h*g,this._z=l*h*g-p*m*u,this._w=l*h*u+p*m*g;break;case"YZX":this._x=p*h*u+l*m*g,this._y=l*m*u+p*h*g,this._z=l*h*g-p*m*u,this._w=l*h*u-p*m*g;break;case"XZY":this._x=p*h*u-l*m*g,this._y=l*m*u-p*h*g,this._z=l*h*g+p*m*u,this._w=l*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oa.copy(this).projectOnVector(t),this.sub(Oa)}reflect(t){return this.sub(Oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oa=new S,Dh=new Ke,wi=class{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),lo.subVectors(this.max,br),Cs.subVectors(t.a,br),Ps.subVectors(t.b,br),Is.subVectors(t.c,br),Di.subVectors(Ps,Cs),Ni.subVectors(Is,Ps),is.subVectors(Cs,Is);let e=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-is.z,is.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,is.z,0,-is.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-is.y,is.x,0];return!Ba(e,Cs,Ps,Is,lo)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,Cs,Ps,Is,lo))?!1:(ho.crossVectors(Di,Ni),e=[ho.x,ho.y,ho.z],Ba(e,Cs,Ps,Is,lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},di=[new S,new S,new S,new S,new S,new S,new S,new S],zn=new S,co=new wi,Cs=new S,Ps=new S,Is=new S,Di=new S,Ni=new S,is=new S,br=new S,lo=new S,ho=new S,ss=new S;function Ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ss.fromArray(i,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=t.dot(ss),l=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Yd=new wi,Er=new S,za=new S,Ti=class{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(za)),this.expandByPoint(Er.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new S,ka=new S,uo=new S,Hi=new S,Va=new S,fo=new S,Ga=new S,Vr=class{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ka.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(ka);let r=t.distanceTo(e)*.5,o=-this.direction.dot(uo),a=Hi.dot(this.direction),c=-Hi.dot(uo),l=Hi.lengthSq(),h=Math.abs(1-o*o),u,p,m,g;if(h>0)if(u=o*c-a,p=o*a-c,g=r*h,u>=0)if(p>=-g)if(p<=g){let _=1/h;u*=_,p*=_,m=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ka).addScaledVector(uo,p),m}intersectSphere(t,e){pi.subVectors(t.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){Va.subVectors(e,t),fo.subVectors(n,t),Ga.crossVectors(Va,fo);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,t);let c=a*this.direction.dot(fo.crossVectors(Hi,fo));if(c<0)return null;let l=a*this.direction.dot(Va.cross(Hi));if(l<0||c+l>o)return null;let h=-a*Hi.dot(Ga);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,p,m,g,_,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,m,g,_,d)}set(t,e,n,s,r,o,a,c,l,h,u,p,m,g,_,d){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=g,f[11]=_,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let p=c*h,m=c*u,g=l*h,_=l*u;e[0]=p+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*h,m=c*u,g=l*h,_=l*u;e[0]=p-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*h,m=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-m,e[8]=p*l+_,e[1]=c*u,e[5]=_*l+p,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+g,e[10]=p-_*u}else if(t.order==="XZY"){let p=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,$d)}lookAt(t,e,n){let s=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Fi.crossVectors(n,Rn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Fi.crossVectors(n,Rn)),Fi.normalize(),po.crossVectors(Rn,Fi),s[0]=Fi.x,s[4]=po.x,s[8]=Rn.x,s[1]=Fi.y,s[5]=po.y,s[9]=Rn.y,s[2]=Fi.z,s[6]=po.z,s[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],g=n[2],_=n[6],d=n[10],f=n[14],y=n[3],x=n[7],M=n[11],I=n[15],E=s[0],A=s[4],F=s[8],Q=s[12],v=s[1],T=s[5],K=s[9],nt=s[13],ct=s[2],vt=s[6],ht=s[10],et=s[14],D=s[3],tt=s[7],O=s[11],G=s[15];return r[0]=o*E+a*v+c*ct+l*D,r[4]=o*A+a*T+c*vt+l*tt,r[8]=o*F+a*K+c*ht+l*O,r[12]=o*Q+a*nt+c*et+l*G,r[1]=h*E+u*v+p*ct+m*D,r[5]=h*A+u*T+p*vt+m*tt,r[9]=h*F+u*K+p*ht+m*O,r[13]=h*Q+u*nt+p*et+m*G,r[2]=g*E+_*v+d*ct+f*D,r[6]=g*A+_*T+d*vt+f*tt,r[10]=g*F+_*K+d*ht+f*O,r[14]=g*Q+_*nt+d*et+f*G,r[3]=y*E+x*v+M*ct+I*D,r[7]=y*A+x*T+M*vt+I*tt,r[11]=y*F+x*K+M*ht+I*O,r[15]=y*Q+x*nt+M*et+I*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],m=t[14],g=t[3],_=t[7],d=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*m-n*c*m)+_*(+e*c*m-e*l*p+r*o*p-s*o*m+s*l*h-r*c*h)+d*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],m=t[11],g=t[12],_=t[13],d=t[14],f=t[15],y=u*d*l-_*p*l+_*c*m-a*d*m-u*c*f+a*p*f,x=g*p*l-h*d*l-g*c*m+o*d*m+h*c*f-o*p*f,M=h*_*l-g*u*l+g*a*m-o*_*m-h*a*f+o*u*f,I=g*u*c-h*_*c-g*a*p+o*_*p+h*a*d-o*u*d,E=e*y+n*x+s*M+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=y*A,t[1]=(_*p*r-u*d*r-_*s*m+n*d*m+u*s*f-n*p*f)*A,t[2]=(a*d*r-_*c*r+_*s*l-n*d*l-a*s*f+n*c*f)*A,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*m-n*c*m)*A,t[4]=x*A,t[5]=(h*d*r-g*p*r+g*s*m-e*d*m-h*s*f+e*p*f)*A,t[6]=(g*c*r-o*d*r-g*s*l+e*d*l+o*s*f-e*c*f)*A,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*m+e*c*m)*A,t[8]=M*A,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*f-e*u*f)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*m-e*a*m)*A,t[12]=I*A,t[13]=(h*_*s-g*u*s+g*n*p-e*_*p-h*n*d+e*u*d)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*d-e*a*d)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,m=r*h,g=r*u,_=o*h,d=o*u,f=a*u,y=c*l,x=c*h,M=c*u,I=n.x,E=n.y,A=n.z;return s[0]=(1-(_+f))*I,s[1]=(m+M)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(m-M)*E,s[5]=(1-(p+f))*E,s[6]=(d+y)*E,s[7]=0,s[8]=(g+x)*A,s[9]=(d-y)*A,s[10]=(1-(p+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ls.set(s[0],s[1],s[2]).length(),o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],kn.copy(this);let l=1/r,h=1/o,u=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),m,g;if(a===vi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$o)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vi){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),p=(e+t)*l,m=(n+s)*h,g,_;if(a===vi)g=(o+r)*u,_=-2*u;else if(a===$o)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ls=new S,kn=new ie,Zd=new S(0,0,0),$d=new S(1,1,1),Fi=new S,po=new S,Rn=new S,Nh=new ie,Hh=new Ke,rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var jo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kd=0,Fh=new S,Us=new Ke,mi=new ie,mo=new S,Sr=new S,Jd=new S,Qd=new Ke,Oh=new S(1,0,0),Bh=new S(0,1,0),zh=new S(0,0,1),kh={type:"added"},jd={type:"removed"},Ds={type:"childadded",child:null},Wa={type:"childremoved",child:null},Ye=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new S,e=new rn,n=new Ke,s=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new fe}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mo.copy(t):mo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Sr,mo,this.up):mi.lookAt(mo,Sr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(mi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jd),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,Jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ye.DEFAULT_UP=new S(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new S,gi=new S,Xa=new S,_i=new S,Ns=new S,Hs=new S,Vh=new S,qa=new S,Ya=new S,Za=new S,$a=new Ae,Ka=new Ae,Ja=new Ae,ki=class i{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Vn.subVectors(t,e),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Vn.subVectors(s,e),gi.subVectors(n,e),Xa.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(gi),c=Vn.dot(Xa),l=gi.dot(gi),h=gi.dot(Xa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return $a.setScalar(0),Ka.setScalar(0),Ja.setScalar(0),$a.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,n),Ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Ka,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(t,e,n,s){return Vn.subVectors(n,e),gi.subVectors(t,e),Vn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ns.subVectors(s,n),Hs.subVectors(r,n),qa.subVectors(t,n);let c=Ns.dot(qa),l=Hs.dot(qa);if(c<=0&&l<=0)return e.copy(n);Ya.subVectors(t,s);let h=Ns.dot(Ya),u=Hs.dot(Ya);if(h>=0&&u<=h)return e.copy(s);let p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ns,o);Za.subVectors(t,r);let m=Ns.dot(Za),g=Hs.dot(Za);if(g>=0&&m<=g)return e.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Hs,a);let d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return Vh.subVectors(r,s),a=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(Vh,a);let f=1/(d+_+p);return o=_*f,a=p*f,e.copy(n).addScaledVector(Ns,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ee.workingColorSpace){if(t=Jl(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qa(o,r,t+1/3),this.g=Qa(o,r,t),this.b=Qa(o,r,t-1/3)}return Ee.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}copyLinearToSRGB(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Ee.fromWorkingColorSpace(gn.copy(this),t),Math.round(nn(gn.r*255,0,255))*65536+Math.round(nn(gn.g*255,0,255))*256+Math.round(nn(gn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=ln){Ee.fromWorkingColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(go);let n=Nr(Oi.h,go.h,e),s=Nr(Oi.s,go.s,e),r=Nr(Oi.l,go.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new zt;zt.NAMES=Gu;var t0=0,qn=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=ei,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ze=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new S,_o=new Bt,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}};var ta=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ea=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},e0=0,Un=new ie,ja=new Ye,Fs=new S,Cn=new wi,wr=new wi,en=new S,be=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vu(t)?ea:ta)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Cn.min,wr.min),Cn.expandByPoint(en),en.addVectors(Cn.max,wr.max),Cn.expandByPoint(en)):(Cn.expandByPoint(wr.min),Cn.expandByPoint(wr.max))}Cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)en.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(t,l),en.add(Fs)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new S,c[F]=new S;let l=new S,h=new S,u=new S,p=new Bt,m=new Bt,g=new Bt,_=new S,d=new S;function f(F,Q,v){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,Q),u.fromBufferAttribute(n,v),p.fromBufferAttribute(r,F),m.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),m.sub(p),g.sub(p);let T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(T),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(T),a[F].add(_),a[Q].add(_),a[v].add(_),c[F].add(d),c[Q].add(d),c[v].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,Q=y.length;F<Q;++F){let v=y[F],T=v.start,K=v.count;for(let nt=T,ct=T+K;nt<ct;nt+=3)f(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let x=new S,M=new S,I=new S,E=new S;function A(F){I.fromBufferAttribute(s,F),E.copy(I);let Q=a[F];x.copy(Q),x.sub(I.multiplyScalar(I.dot(Q))).normalize(),M.crossVectors(E,Q);let T=M.dot(c[F])<0?-1:1;o.setXYZW(F,x.x,x.y,x.z,T)}for(let F=0,Q=y.length;F<Q;++F){let v=y[F],T=v.start,K=v.count;for(let nt=T,ct=T+K;nt<ct;nt+=3)A(t.getX(nt+0)),A(t.getX(nt+1)),A(t.getX(nt+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new S,r=new S,o=new S,a=new S,c=new S,l=new S,h=new S,u=new S;if(t)for(let p=0,m=t.count;p<m;p+=3){let g=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h),m=0,g=0;for(let _=0,d=c.length;_<d;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let f=0;f<h;f++)p[g++]=l[m++]}return new Re(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let p=l[h],m=t(p,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new ie,rs=new Vr,yo=new Ti,Wh=new S,xo=new S,Mo=new S,vo=new S,tc=new S,bo=new S,Xh=new S,Eo=new S,Tt=class extends Ye{constructor(t=new be,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(tc.fromBufferAttribute(u,t),o?bo.addScaledVector(tc,h):bo.addScaledVector(tc.sub(e),h))}e.add(bo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(yo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(yo,Wh)===null||rs.origin.distanceToSquared(Wh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),rs.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let d=p[g],f=o[d.materialIndex],y=Math.max(d.start,m.start),x=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,I=x;M<I;M+=3){let E=a.getX(M),A=a.getX(M+1),F=a.getX(M+2);s=So(this,f,t,n,l,h,u,E,A,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){let y=a.getX(d),x=a.getX(d+1),M=a.getX(d+2);s=So(this,o,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let d=p[g],f=o[d.materialIndex],y=Math.max(d.start,m.start),x=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let M=y,I=x;M<I;M+=3){let E=M,A=M+1,F=M+2;s=So(this,f,t,n,l,h,u,E,A,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){let y=d,x=d+1,M=d+2;s=So(this,o,t,n,l,h,u,y,x,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function n0(i,t,e,n,s,r,o,a){let c;if(t.side===En?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Dn,a),c===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Eo);return l<e.near||l>e.far?null:{distance:l,point:Eo.clone(),object:i}}function So(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,xo),i.getVertexPosition(c,Mo),i.getVertexPosition(l,vo);let h=n0(i,t,e,n,xo,Mo,vo,Xh);if(h){let u=new S;ki.getBarycoord(Xh,xo,Mo,vo,u),s&&(h.uv=ki.getInterpolatedAttribute(s,a,c,l,u,new Bt)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,c,l,u,new Bt)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,c,l,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new S,materialIndex:0};ki.getNormal(xo,Mo,vo,p.normal),h.face=p,h.barycoord=u}return h}var on=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],p=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(_,d,f,y,x,M,I,E,A,F,Q){let v=M/A,T=I/F,K=M/2,nt=I/2,ct=E/2,vt=A+1,ht=F+1,et=0,D=0,tt=new S;for(let O=0;O<ht;O++){let G=O*T-nt;for(let ot=0;ot<vt;ot++){let z=ot*v-K;tt[_]=z*y,tt[d]=G*x,tt[f]=ct,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[d]=0,tt[f]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(ot/A),u.push(1-O/F),et+=1}}for(let O=0;O<F;O++)for(let G=0;G<A;G++){let ot=p+G+vt*O,z=p+G+vt*(O+1),C=p+(G+1)+vt*(O+1),L=p+(G+1)+vt*O;c.push(ot,z,L),c.push(z,C,L),D+=6}a.addGroup(m,D,Q),m+=D,p+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=er(i[e]);for(let s in n)t[s]=n[s]}return t}function i0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var s0={clone:er,merge:xn},r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=i0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},na=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new S,qh=new Bt,Yh=new Bt,sn=class extends na{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,qh,Yh),e.subVectors(Yh,qh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Os=-90,Bs=1,il=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Os,Bs,t,e);s.layers=this.layers,this.add(s);let r=new sn(Os,Bs,t,e);r.layers=this.layers,this.add(r);let o=new sn(Os,Bs,t,e);o.layers=this.layers,this.add(o);let a=new sn(Os,Bs,t,e);a.layers=this.layers,this.add(a);let c=new sn(Os,Bs,t,e);c.layers=this.layers,this.add(c);let l=new sn(Os,Bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ia=class extends Sn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sl=class extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ia(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Vi});r.uniforms.tEquirect.value=e;let o=new Tt(s,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=Gn),new il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ec=new S,a0=new S,c0=new fe,xi=class{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ec.subVectors(n,e).cross(a0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||c0.getNormalMatrix(t),s=this.coplanarPoint(ec).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new Ti,wo=new S,Gr=class{constructor(t=new xi,e=new xi,n=new xi,s=new xi,r=new xi,o=new xi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],m=s[8],g=s[9],_=s[10],d=s[11],f=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,p-l,d-m,M-f).normalize(),n[1].setComponents(c+r,p+l,d+m,M+f).normalize(),n[2].setComponents(c+o,p+h,d+g,M+y).normalize(),n[3].setComponents(c-o,p-h,d-g,M-y).normalize(),n[4].setComponents(c-a,p-u,d-_,M-x).normalize(),e===vi)n[5].setComponents(c+a,p+u,d+_,M+x).normalize();else if(e===$o)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(wo.x=s.normal.x>0?t.max.x:t.min.x,wo.y=s.normal.y>0?t.max.y:t.min.y,wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function l0(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<u.length;m++){let g=u[p],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ai=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,m=[],g=[],_=[],d=[];for(let f=0;f<h;f++){let y=f*p-o;for(let x=0;x<l;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),d.push(x/a),d.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){let x=y+l*f,M=y+l*(f+1),I=y+1+l*(f+1),E=y+1+l*f;m.push(x,M,E),m.push(M,I,E)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,S0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`
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
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
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
#endif`,cp=`struct PhysicalMaterial {
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
}`,lp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Fm=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,km=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:f0,alphamap_pars_fragment:d0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:_0,batching_pars_vertex:y0,batching_vertex:x0,begin_vertex:M0,beginnormal_vertex:v0,bsdfs:b0,iridescence_fragment:E0,bumpmap_pars_fragment:S0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:P0,color_pars_vertex:I0,color_vertex:L0,common:U0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:N0,displacementmap_pars_vertex:H0,displacementmap_vertex:F0,emissivemap_fragment:O0,emissivemap_pars_fragment:B0,colorspace_fragment:z0,colorspace_pars_fragment:k0,envmap_fragment:V0,envmap_common_pars_fragment:G0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:np,envmap_vertex:q0,fog_vertex:Y0,fog_pars_vertex:Z0,fog_fragment:$0,fog_pars_fragment:K0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:Q0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:cp,lights_fragment_begin:lp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:yp,map_particle_pars_fragment:xp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:vp,morphinstance_vertex:bp,morphcolor_vertex:Ep,morphnormal_vertex:Sp,morphtarget_pars_vertex:wp,morphtarget_vertex:Tp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Ip,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Hp,opaque_fragment:Fp,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:zp,dithering_fragment:kp,dithering_pars_fragment:Vp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:Zp,skinbase_vertex:$p,skinning_pars_vertex:Kp,skinning_vertex:Jp,skinnormal_vertex:Qp,specularmap_fragment:jp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:cm,background_vert:lm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:fm,cube_vert:dm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:_m,distanceRGBA_frag:ym,equirect_vert:xm,equirect_frag:Mm,linedashed_vert:vm,linedashed_frag:bm,meshbasic_vert:Em,meshbasic_frag:Sm,meshlambert_vert:wm,meshlambert_frag:Tm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Im,meshphong_frag:Lm,meshphysical_vert:Um,meshphysical_frag:Dm,meshtoon_vert:Nm,meshtoon_frag:Hm,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:km,sprite_frag:Vm},Wt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},jn={basic:{uniforms:xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:xn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:xn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:xn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:xn([Wt.points,Wt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:xn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:xn([Wt.common,Wt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:xn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:xn([Wt.sprite,Wt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:xn([Wt.common,Wt.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:xn([Wt.lights,Wt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};jn.physical={uniforms:xn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var To={r:0,b:0,g:0},as=new rn,Gm=new ie;function Wm(i,t,e,n,s,r,o){let a=new zt(0),c=r===!0?0:1,l,h,u=null,p=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,M=g(y);M===null?f(a,c):M&&M.isColor&&(f(M,1),x=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(y,x){let M=g(x);M&&(M.isCubeTexture||M.mapping===xa)?(h===void 0&&(h=new Tt(new on(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:er(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),as.copy(x.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(as)),h.material.toneMapped=Ee.getTransfer(M.colorSpace)!==De,(u!==M||p!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,p=M.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Tt(new Ai(2,2),new wn({name:"BackgroundMaterial",uniforms:er(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(M.colorSpace)!==De,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,p=M.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,x){y.getRGB(To,Wu(i)),n.buffers.color.setClear(To.r,To.g,To.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:_,addToRenderList:d}}function Xm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(v,T,K,nt,ct){let vt=!1,ht=u(nt,K,T);r!==ht&&(r=ht,l(r.object)),vt=m(v,nt,K,ct),vt&&g(v,nt,K,ct),ct!==null&&t.update(ct,i.ELEMENT_ARRAY_BUFFER),(vt||o)&&(o=!1,M(v,T,K,nt),ct!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,T,K){let nt=K.wireframe===!0,ct=n[v.id];ct===void 0&&(ct={},n[v.id]=ct);let vt=ct[T.id];vt===void 0&&(vt={},ct[T.id]=vt);let ht=vt[nt];return ht===void 0&&(ht=p(c()),vt[nt]=ht),ht}function p(v){let T=[],K=[],nt=[];for(let ct=0;ct<e;ct++)T[ct]=0,K[ct]=0,nt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:K,attributeDivisors:nt,object:v,attributes:{},index:null}}function m(v,T,K,nt){let ct=r.attributes,vt=T.attributes,ht=0,et=K.getAttributes();for(let D in et)if(et[D].location>=0){let O=ct[D],G=vt[D];if(G===void 0&&(D==="instanceMatrix"&&v.instanceMatrix&&(G=v.instanceMatrix),D==="instanceColor"&&v.instanceColor&&(G=v.instanceColor)),O===void 0||O.attribute!==G||G&&O.data!==G.data)return!0;ht++}return r.attributesNum!==ht||r.index!==nt}function g(v,T,K,nt){let ct={},vt=T.attributes,ht=0,et=K.getAttributes();for(let D in et)if(et[D].location>=0){let O=vt[D];O===void 0&&(D==="instanceMatrix"&&v.instanceMatrix&&(O=v.instanceMatrix),D==="instanceColor"&&v.instanceColor&&(O=v.instanceColor));let G={};G.attribute=O,O&&O.data&&(G.data=O.data),ct[D]=G,ht++}r.attributes=ct,r.attributesNum=ht,r.index=nt}function _(){let v=r.newAttributes;for(let T=0,K=v.length;T<K;T++)v[T]=0}function d(v){f(v,0)}function f(v,T){let K=r.newAttributes,nt=r.enabledAttributes,ct=r.attributeDivisors;K[v]=1,nt[v]===0&&(i.enableVertexAttribArray(v),nt[v]=1),ct[v]!==T&&(i.vertexAttribDivisor(v,T),ct[v]=T)}function y(){let v=r.newAttributes,T=r.enabledAttributes;for(let K=0,nt=T.length;K<nt;K++)T[K]!==v[K]&&(i.disableVertexAttribArray(K),T[K]=0)}function x(v,T,K,nt,ct,vt,ht){ht===!0?i.vertexAttribIPointer(v,T,K,ct,vt):i.vertexAttribPointer(v,T,K,nt,ct,vt)}function M(v,T,K,nt){_();let ct=nt.attributes,vt=K.getAttributes(),ht=T.defaultAttributeValues;for(let et in vt){let D=vt[et];if(D.location>=0){let tt=ct[et];if(tt===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor)),tt!==void 0){let O=tt.normalized,G=tt.itemSize,ot=t.get(tt);if(ot===void 0)continue;let z=ot.buffer,C=ot.type,L=ot.bytesPerElement,B=C===i.INT||C===i.UNSIGNED_INT||tt.gpuType===Vl;if(tt.isInterleavedBufferAttribute){let X=tt.data,H=X.stride,N=tt.offset;if(X.isInstancedInterleavedBuffer){for(let k=0;k<D.locationSize;k++)f(D.location+k,X.meshPerAttribute);v.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let k=0;k<D.locationSize;k++)d(D.location+k);i.bindBuffer(i.ARRAY_BUFFER,z);for(let k=0;k<D.locationSize;k++)x(D.location+k,G/D.locationSize,C,O,H*L,(N+G/D.locationSize*k)*L,B)}else{if(tt.isInstancedBufferAttribute){for(let X=0;X<D.locationSize;X++)f(D.location+X,tt.meshPerAttribute);v.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let X=0;X<D.locationSize;X++)d(D.location+X);i.bindBuffer(i.ARRAY_BUFFER,z);for(let X=0;X<D.locationSize;X++)x(D.location+X,G/D.locationSize,C,O,G*L,G/D.locationSize*X*L,B)}}else if(ht!==void 0){let O=ht[et];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(D.location,O);break;case 3:i.vertexAttrib3fv(D.location,O);break;case 4:i.vertexAttrib4fv(D.location,O);break;default:i.vertexAttrib1fv(D.location,O)}}}}y()}function I(){F();for(let v in n){let T=n[v];for(let K in T){let nt=T[K];for(let ct in nt)h(nt[ct].object),delete nt[ct];delete T[K]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;let T=n[v.id];for(let K in T){let nt=T[K];for(let ct in nt)h(nt[ct].object),delete nt[ct];delete T[K]}delete n[v.id]}function A(v){for(let T in n){let K=n[T];if(K[v.id]===void 0)continue;let nt=K[v.id];for(let ct in nt)h(nt[ct].object),delete nt[ct];delete K[v.id]}}function F(){Q(),o=!0,r!==s&&(r=s,l(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:Q,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function qm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function c(l,h,u,p){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<p.length;_++)e.update(g,n,p[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ym(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let F=A===Kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ei&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ti&&!F)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){let A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:I,maxSamples:E}}function Zm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new xi,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){let g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):l();else{let y=r?0:n,x=y*4,M=f.clippingState||null;c.value=M,M=h(g,p,x,m);for(let I=0;I!==x;++I)M[I]=e[I];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,g){let _=u!==null?u.length:0,d=null;if(_!==0){if(d=c.value,g!==!0||d===null){let f=m+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<f)&&(d=new Float32Array(f));for(let x=0,M=m;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(d,M),d[M+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function $m(i){let t=new WeakMap;function e(o,a){return a===Br?o.mapping=Js:a===Sc&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Br||a===Sc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new sl(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var sa=class extends na{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qs=4,Zh=[.125,.215,.35,.446,.526,.582],us=20,nc=new sa,$h=new zt,ic=null,sc=0,rc=0,oc=!1,ls=(1+Math.sqrt(5))/2,zs=1/ls,Kh=[new S(-ls,zs,0),new S(ls,zs,0),new S(-zs,0,ls),new S(zs,0,ls),new S(0,ls,-zs),new S(0,ls,zs),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],ra=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ic,sc,rc),this._renderer.xr.enabled=oc,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Kr,format:Xn,colorSpace:Yi,depthBuffer:!1},s=Jh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(r)),this._blurMaterial=Jm(r,t,e)}return s}_compileMaterial(t){let e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,nc)}_sceneToCubeUV(t,e,n,s){let a=new sn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor($h),h.toneMapping=Gi,h.autoClear=!1;let m=new Ze({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new Tt(new on,m),_=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy($h),_=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):y===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let x=this._cubeSize;Ao(s,y*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Js||t.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ao(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,nc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kh[(s-r-1)%Kh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Tt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*us-1),_=r/g,d=isFinite(r)?1+Math.floor(h*_):us;d>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${us}`);let f=[],y=0;for(let A=0;A<us;++A){let F=A/_,Q=Math.exp(-F*F/2);f.push(Q),A===0?y+=Q:A<d&&(y+=2*Q)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;let M=this._sizeLods[s],I=3*M*(s>x-qs?s-x+qs:0),E=4*(this._cubeSize-M);Ao(e,I,E,3*M,2*M),c.setRenderTarget(e),c.render(u,nc)}};function Km(i){let t=[],e=[],n=[],s=i,r=i-qs+1+Zh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-qs?c=Zh[o-i+qs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,d=2,f=1,y=new Float32Array(_*g*m),x=new Float32Array(d*g*m),M=new Float32Array(f*g*m);for(let E=0;E<m;E++){let A=E%3*2/3-1,F=E>2?0:-1,Q=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];y.set(Q,_*g*E),x.set(p,d*g*E);let v=[E,E,E,E,E,E];M.set(v,f*g*E)}let I=new be;I.setAttribute("position",new Re(y,_)),I.setAttribute("uv",new Re(x,d)),I.setAttribute("faceIndex",new Re(M,f)),t.push(I),s>qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jh(i,t,e){let n=new Si(i,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jm(i,t,e){let n=new Float32Array(us),s=new S(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Qh(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function jh(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function Qm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Br||c===Sc,h=c===Js||c===Qs;if(l||h){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new ra(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new ra(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Wo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tg(i,t,e,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let d=0,f=_.length;d<f;d++)t.remove(_[d])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){let p=u.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let d=0,f=_.length;d<f;d++)t.update(_[d],i.ARRAY_BUFFER)}}function l(u){let p=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let y=m.array;_=m.version;for(let x=0,M=y.length;x<M;x+=3){let I=y[x+0],E=y[x+1],A=y[x+2];p.push(I,E,E,A,A,I)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let I=x+0,E=x+1,A=x+2;p.push(I,E,E,A,A,I)}}else return;let d=new(Vu(p)?ea:ta)(p,1);d.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,d)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function eg(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*o),e.update(m,n,1)}function l(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,p*o,g),e.update(m,n,g))}function h(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,g);let d=0;for(let f=0;f<g;f++)d+=m[f];e.update(d,n,1)}function u(p,m,g,_){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<p.length;f++)l(p[f]/o,m[f],_[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=m[y];for(let y=0;y<_.length;y++)e.update(f,n,_[y])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ng(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ig(i,t,e){let n=new WeakMap,s=new Ae;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let Q=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",Q)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;m===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,I=1;M>t.maxTextureSize&&(I=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*I*4*u),A=new Qo(E,M,I,u);A.type=ti,A.needsUpdate=!0;let F=x*4;for(let v=0;v<u;v++){let T=d[v],K=f[v],nt=y[v],ct=M*I*4*v;for(let vt=0;vt<T.count;vt++){let ht=vt*F;m===!0&&(s.fromBufferAttribute(T,vt),E[ct+ht+0]=s.x,E[ct+ht+1]=s.y,E[ct+ht+2]=s.z,E[ct+ht+3]=0),g===!0&&(s.fromBufferAttribute(K,vt),E[ct+ht+4]=s.x,E[ct+ht+5]=s.y,E[ct+ht+6]=s.z,E[ct+ht+7]=0),_===!0&&(s.fromBufferAttribute(nt,vt),E[ct+ht+8]=s.x,E[ct+ht+9]=s.y,E[ct+ht+10]=s.z,E[ct+ht+11]=nt.itemSize===4?s.w:1)}}p={count:u,texture:A,size:new Bt(M,I)},n.set(a,p),a.addEventListener("dispose",Q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function sg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var oa=class extends Sn{constructor(t,e,n,s,r,o,a,c,l,h=Ys){if(h!==Ys&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ys&&(n=ps),n===void 0&&h===tr&&(n=js),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qu=new Sn,tu=new oa(1,1),Yu=new Qo,Zu=new nl,$u=new ia,eu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function va(i,t){let e=nu[t];e===void 0&&(e=new Int32Array(t),nu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),Qe(e,n)}}function hg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),Qe(e,n)}}function ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),Qe(e,n)}}function fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tu.compareFunction=ku,r=tu):r=qu,e.setTexture2D(t||r,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zu,s)}function bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$u,s)}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yu,s)}function Sg(i){switch(i){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return cg;case 35674:return lg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return yg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Eg}}function wg(i,t){i.uniform1fv(this.addr,t)}function Tg(i,t){let e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ag(i,t){let e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function Rg(i,t){let e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function Cg(i,t){let e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pg(i,t){let e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ig(i,t){let e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lg(i,t){i.uniform1iv(this.addr,t)}function Ug(i,t){i.uniform2iv(this.addr,t)}function Dg(i,t){i.uniform3iv(this.addr,t)}function Ng(i,t){i.uniform4iv(this.addr,t)}function Hg(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){let n=this.cache,s=t.length,r=va(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qu,r[o])}function kg(i,t,e){let n=this.cache,s=t.length,r=va(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zu,r[o])}function Vg(i,t,e){let n=this.cache,s=t.length,r=va(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$u,r[o])}function Gg(i,t,e){let n=this.cache,s=t.length,r=va(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yu,r[o])}function Wg(i){switch(i){case 5126:return wg;case 35664:return Tg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Ig;case 5124:case 35670:return Lg;case 35667:case 35671:return Ug;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Hg;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}var rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}},ol=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wg(e.type)}},al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ac=/(\w+)(\])?(\[|\.)?/g;function ou(i,t){i.seq.push(t),i.map[t.id]=t}function Xg(i,t,e){let n=i.name,s=n.length;for(ac.lastIndex=0;;){let r=ac.exec(n),o=ac.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ou(e,l===void 0?new rl(a,i,t):new ol(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new al(a),ou(e,u)),e=u}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Xg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var qg=37297,Yg=0;function Zg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function $g(i){let t=Ee.getPrimaries(Ee.workingColorSpace),e=Ee.getPrimaries(i),n;switch(t===e?n="":t===Zo&&e===Yo?n="LinearDisplayP3ToLinearSRGB":t===Yo&&e===Zo&&(n="LinearSRGBToLinearDisplayP3"),i){case Yi:case Ma:return[n,"LinearTransferOETF"];case ln:case Kl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zg(i.getShaderSource(t),o)}else return s}function Kg(i,t){let e=$g(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Jg(i,t){let e;switch(t){case ad:e="Linear";break;case cd:e="Reinhard";break;case ld:e="Cineon";break;case $r:e="ACESFilmic";break;case ud:e="AgX";break;case fd:e="Neutral";break;case hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ro=new S;function Qg(){Ee.getLuminanceCoefficients(Ro);let i=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function t_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ur(i){return i!==""}function lu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(n_,s_)}var i_=new Map;function s_(i,t){let e=ue[t];if(e===void 0){let n=i_.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cl(e)}var r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(r_,o_)}function o_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function a_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function c_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case Qs:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Qs&&(t="ENVMAP_MODE_REFRACTION"),t}function h_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zl:t="ENVMAP_BLENDING_MULTIPLY";break;case kl:t="ENVMAP_BLENDING_MIX";break;case od:t="ENVMAP_BLENDING_ADD";break}return t}function u_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=a_(e),l=c_(e),h=l_(e),u=h_(e),p=u_(e),m=jg(e),g=t_(r),_=s.createProgram(),d,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),f.length>0&&(f+=`
`)):(d=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),f=[fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?ue.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Kg("linearToOutputTexel",e.outputColorSpace),Qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),o=cl(o),o=lu(o,e),o=hu(o,e),a=cl(a),a=lu(a,e),a=hu(a,e),o=uu(o),a=uu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=y+d+o,M=y+f+a,I=au(s,s.VERTEX_SHADER,x),E=au(s,s.FRAGMENT_SHADER,M);s.attachShader(_,I),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(T){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(_).trim(),nt=s.getShaderInfoLog(I).trim(),ct=s.getShaderInfoLog(E).trim(),vt=!0,ht=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(vt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,E);else{let et=cu(s,I,"vertex"),D=cu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+K+`
`+et+`
`+D)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(nt===""||ct==="")&&(ht=!1);ht&&(T.diagnostics={runnable:vt,programLog:K,vertexShader:{log:nt,prefix:d},fragmentShader:{log:ct,prefix:f}})}s.deleteShader(I),s.deleteShader(E),F=new $s(s,_),Q=e_(s,_)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let Q;this.getAttributes=function(){return Q===void 0&&A(this),Q};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,qg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=E,this}var d_=0,ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hl(t),e.set(t,n)),n}},hl=class{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}};function p_(i,t,e,n,s,r,o){let a=new jo,c=new ll,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,m=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,T,K,nt,ct){let vt=nt.fog,ht=ct.geometry,et=v.isMeshStandardMaterial?nt.environment:null,D=(v.isMeshStandardMaterial?e:t).get(v.envMap||et),tt=D&&D.mapping===xa?D.image.height:null,O=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let G=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,ot=G!==void 0?G.length:0,z=0;ht.morphAttributes.position!==void 0&&(z=1),ht.morphAttributes.normal!==void 0&&(z=2),ht.morphAttributes.color!==void 0&&(z=3);let C,L,B,X;if(O){let ze=jn[O];C=ze.vertexShader,L=ze.fragmentShader}else C=v.vertexShader,L=v.fragmentShader,c.update(v),B=c.getVertexShaderID(v),X=c.getFragmentShaderID(v);let H=i.getRenderTarget(),N=ct.isInstancedMesh===!0,k=ct.isBatchedMesh===!0,q=!!v.map,j=!!v.matcap,w=!!D,dt=!!v.aoMap,it=!!v.lightMap,V=!!v.bumpMap,$=!!v.normalMap,lt=!!v.displacementMap,ft=!!v.emissiveMap,R=!!v.metalnessMap,b=!!v.roughnessMap,U=v.anisotropy>0,W=v.clearcoat>0,rt=v.dispersion>0,Y=v.iridescence>0,Et=v.sheen>0,Mt=v.transmission>0,ut=U&&!!v.anisotropyMap,Lt=W&&!!v.clearcoatMap,pt=W&&!!v.clearcoatNormalMap,At=W&&!!v.clearcoatRoughnessMap,Ft=Y&&!!v.iridescenceMap,Nt=Y&&!!v.iridescenceThicknessMap,Rt=Et&&!!v.sheenColorMap,Ct=Et&&!!v.sheenRoughnessMap,kt=!!v.specularMap,jt=!!v.specularColorMap,J=!!v.specularIntensityMap,Ut=Mt&&!!v.transmissionMap,yt=Mt&&!!v.thicknessMap,wt=!!v.gradientMap,Vt=!!v.alphaMap,Yt=v.alphaTest>0,le=!!v.alphaHash,Le=!!v.extensions,Be=Gi;v.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Be=i.toneMapping);let me={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:C,fragmentShader:L,defines:v.defines,customVertexShaderID:B,customFragmentShaderID:X,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:k,batchingColor:k&&ct._colorsTexture!==null,instancing:N,instancingColor:N&&ct.instanceColor!==null,instancingMorph:N&&ct.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Yi,alphaToCoverage:!!v.alphaToCoverage,map:q,matcap:j,envMap:w,envMapMode:w&&D.mapping,envMapCubeUVHeight:tt,aoMap:dt,lightMap:it,bumpMap:V,normalMap:$,displacementMap:m&&lt,emissiveMap:ft,normalMapObjectSpace:$&&v.normalMapType===gd,normalMapTangentSpace:$&&v.normalMapType===$l,metalnessMap:R,roughnessMap:b,anisotropy:U,anisotropyMap:ut,clearcoat:W,clearcoatMap:Lt,clearcoatNormalMap:pt,clearcoatRoughnessMap:At,dispersion:rt,iridescence:Y,iridescenceMap:Ft,iridescenceThicknessMap:Nt,sheen:Et,sheenColorMap:Rt,sheenRoughnessMap:Ct,specularMap:kt,specularColorMap:jt,specularIntensityMap:J,transmission:Mt,transmissionMap:Ut,thicknessMap:yt,gradientMap:wt,opaque:v.transparent===!1&&v.blending===ei&&v.alphaToCoverage===!1,alphaMap:Vt,alphaTest:Yt,alphaHash:le,combine:v.combine,mapUv:q&&d(v.map.channel),aoMapUv:dt&&d(v.aoMap.channel),lightMapUv:it&&d(v.lightMap.channel),bumpMapUv:V&&d(v.bumpMap.channel),normalMapUv:$&&d(v.normalMap.channel),displacementMapUv:lt&&d(v.displacementMap.channel),emissiveMapUv:ft&&d(v.emissiveMap.channel),metalnessMapUv:R&&d(v.metalnessMap.channel),roughnessMapUv:b&&d(v.roughnessMap.channel),anisotropyMapUv:ut&&d(v.anisotropyMap.channel),clearcoatMapUv:Lt&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&d(v.sheenRoughnessMap.channel),specularMapUv:kt&&d(v.specularMap.channel),specularColorMapUv:jt&&d(v.specularColorMap.channel),specularIntensityMapUv:J&&d(v.specularIntensityMap.channel),transmissionMapUv:Ut&&d(v.transmissionMap.channel),thicknessMapUv:yt&&d(v.thicknessMap.channel),alphaMapUv:Vt&&d(v.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&($||U),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ht.attributes.uv&&(q||Vt),fog:!!vt,useFog:v.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:p,skinning:ct.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:q&&v.map.isVideoTexture===!0&&Ee.getTransfer(v.map.colorSpace)===De,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ie,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Le&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&v.extensions.multiDraw===!0||k)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function y(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let K in v.defines)T.push(K),T.push(v.defines[K]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function I(v){let T=_[v.type],K;if(T){let nt=jn[T];K=s0.clone(nt.uniforms)}else K=v.uniforms;return K}function E(v,T){let K;for(let nt=0,ct=h.length;nt<ct;nt++){let vt=h[nt];if(vt.cacheKey===T){K=vt,++K.usedTimes;break}}return K===void 0&&(K=new f_(i,T,v,r),h.push(K)),K}function A(v){if(--v.usedTimes===0){let T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),v.destroy()}}function F(v){c.remove(v)}function Q(){c.dispose()}return{getParameters:f,getProgramCacheKey:y,getUniforms:I,acquireProgram:E,releaseProgram:A,releaseShaderCache:F,programs:h,dispose:Q}}function m_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function g_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function du(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,m,g,_,d){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=d),t++,f}function a(u,p,m,g,_,d){let f=o(u,p,m,g,_,d);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function c(u,p,m,g,_,d){let f=o(u,p,m,g,_,d);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,p){e.length>1&&e.sort(u||g_),n.length>1&&n.sort(p||du),s.length>1&&s.sort(p||du)}function h(){for(let u=t,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function __(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pu,i.set(n,[o])):s>=r.length?(o=new pu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function y_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new zt};break;case"SpotLight":e={position:new S,direction:new S,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function x_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var M_=0;function v_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b_(i){let t=new y_,e=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);let s=new S,r=new ie,o=new ie;function a(l){let h=0,u=0,p=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let m=0,g=0,_=0,d=0,f=0,y=0,x=0,M=0,I=0,E=0,A=0;l.sort(v_);for(let Q=0,v=l.length;Q<v;Q++){let T=l[Q],K=T.color,nt=T.intensity,ct=T.distance,vt=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=K.r*nt,u+=K.g*nt,p+=K.b*nt;else if(T.isLightProbe){for(let ht=0;ht<9;ht++)n.probe[ht].addScaledVector(T.sh.coefficients[ht],nt);A++}else if(T.isDirectionalLight){let ht=t.get(T);if(ht.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let et=T.shadow,D=e.get(T);D.shadowIntensity=et.intensity,D.shadowBias=et.bias,D.shadowNormalBias=et.normalBias,D.shadowRadius=et.radius,D.shadowMapSize=et.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=vt,n.directionalShadowMatrix[m]=T.shadow.matrix,y++}n.directional[m]=ht,m++}else if(T.isSpotLight){let ht=t.get(T);ht.position.setFromMatrixPosition(T.matrixWorld),ht.color.copy(K).multiplyScalar(nt),ht.distance=ct,ht.coneCos=Math.cos(T.angle),ht.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),ht.decay=T.decay,n.spot[_]=ht;let et=T.shadow;if(T.map&&(n.spotLightMap[I]=T.map,I++,et.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[_]=et.matrix,T.castShadow){let D=e.get(T);D.shadowIntensity=et.intensity,D.shadowBias=et.bias,D.shadowNormalBias=et.normalBias,D.shadowRadius=et.radius,D.shadowMapSize=et.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=vt,M++}_++}else if(T.isRectAreaLight){let ht=t.get(T);ht.color.copy(K).multiplyScalar(nt),ht.halfWidth.set(T.width*.5,0,0),ht.halfHeight.set(0,T.height*.5,0),n.rectArea[d]=ht,d++}else if(T.isPointLight){let ht=t.get(T);if(ht.color.copy(T.color).multiplyScalar(T.intensity),ht.distance=T.distance,ht.decay=T.decay,T.castShadow){let et=T.shadow,D=e.get(T);D.shadowIntensity=et.intensity,D.shadowBias=et.bias,D.shadowNormalBias=et.normalBias,D.shadowRadius=et.radius,D.shadowMapSize=et.mapSize,D.shadowCameraNear=et.camera.near,D.shadowCameraFar=et.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=vt,n.pointShadowMatrix[g]=T.shadow.matrix,x++}n.point[g]=ht,g++}else if(T.isHemisphereLight){let ht=t.get(T);ht.skyColor.copy(T.color).multiplyScalar(nt),ht.groundColor.copy(T.groundColor).multiplyScalar(nt),n.hemi[f]=ht,f++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==d||F.hemiLength!==f||F.numDirectionalShadows!==y||F.numPointShadows!==x||F.numSpotShadows!==M||F.numSpotMaps!==I||F.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+I-E,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=d,F.hemiLength=f,F.numDirectionalShadows=y,F.numPointShadows=x,F.numSpotShadows=M,F.numSpotMaps=I,F.numLightProbes=A,n.version=M_++)}function c(l,h){let u=0,p=0,m=0,g=0,_=0,d=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){let x=l[f];if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(x.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),m++}else if(x.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),o.identity(),r.copy(x.matrixWorld),r.premultiply(d),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(d),_++}}}return{setup:a,setupView:c,state:n}}function mu(i){let t=new b_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function E_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mu(i),t.set(s,[a])):r>=o.length?(a=new mu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ul=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fl=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`;function T_(i,t,e){let n=new Gr,s=new Bt,r=new Bt,o=new Ae,a=new ul({depthPacking:md}),c=new fl,l={},h=e.maxTextureSize,u={[Dn]:En,[En]:Dn,[Ie]:Ie},p=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:S_,fragmentShader:w_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Tt(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let f=this.type;this.render=function(E,A,F){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;let Q=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Vi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let nt=f!==yi&&this.type===yi,ct=f===yi&&this.type!==yi;for(let vt=0,ht=E.length;vt<ht;vt++){let et=E[vt],D=et.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let tt=D.getFrameExtents();if(s.multiply(tt),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,D.mapSize.y=r.y)),D.map===null||nt===!0||ct===!0){let G=this.type!==yi?{minFilter:hn,magFilter:hn}:{};D.map!==null&&D.map.dispose(),D.map=new Si(s.x,s.y,G),D.map.texture.name=et.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let O=D.getViewportCount();for(let G=0;G<O;G++){let ot=D.getViewport(G);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),K.viewport(o),D.updateMatrices(et,G),n=D.getFrustum(),M(A,F,D.camera,et,this.type)}D.isPointLightShadow!==!0&&this.type===yi&&y(D,F),D.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(Q,v,T)};function y(E,A){let F=t.update(_);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Si(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,F,p,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,F,m,_,null)}function x(E,A,F,Q){let v=null,T=F.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)v=T;else if(v=F.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let K=v.uuid,nt=A.uuid,ct=l[K];ct===void 0&&(ct={},l[K]=ct);let vt=ct[nt];vt===void 0&&(vt=v.clone(),ct[nt]=vt,A.addEventListener("dispose",I)),v=vt}if(v.visible=A.visible,v.wireframe=A.wireframe,Q===yi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,F.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let K=i.properties.get(v);K.light=F}return v}function M(E,A,F,Q,v){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===yi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld);let nt=t.update(E),ct=E.material;if(Array.isArray(ct)){let vt=nt.groups;for(let ht=0,et=vt.length;ht<et;ht++){let D=vt[ht],tt=ct[D.materialIndex];if(tt&&tt.visible){let O=x(E,tt,Q,v);E.onBeforeShadow(i,E,A,F,nt,O,D),i.renderBufferDirect(F,null,nt,O,E,D),E.onAfterShadow(i,E,A,F,nt,O,D)}}}else if(ct.visible){let vt=x(E,ct,Q,v);E.onBeforeShadow(i,E,A,F,nt,vt,null),i.renderBufferDirect(F,null,nt,vt,E,null),E.onAfterShadow(i,E,A,F,nt,vt,null)}}let K=E.children;for(let nt=0,ct=K.length;nt<ct;nt++)M(K[nt],A,F,Q,v)}function I(E){E.target.removeEventListener("dispose",I);for(let F in l){let Q=l[F],v=E.target.uuid;v in Q&&(Q[v].dispose(),delete Q[v])}}}var A_={[_c]:yc,[xc]:bc,[Mc]:Ec,[Ks]:vc,[yc]:_c,[bc]:xc,[Ec]:Mc,[vc]:Ks};function R_(i){function t(){let J=!1,Ut=new Ae,yt=null,wt=new Ae(0,0,0,0);return{setMask:function(Vt){yt!==Vt&&!J&&(i.colorMask(Vt,Vt,Vt,Vt),yt=Vt)},setLocked:function(Vt){J=Vt},setClear:function(Vt,Yt,le,Le,Be){Be===!0&&(Vt*=Le,Yt*=Le,le*=Le),Ut.set(Vt,Yt,le,Le),wt.equals(Ut)===!1&&(i.clearColor(Vt,Yt,le,Le),wt.copy(Ut))},reset:function(){J=!1,yt=null,wt.set(-1,0,0,0)}}}function e(){let J=!1,Ut=!1,yt=null,wt=null,Vt=null;return{setReversed:function(Yt){Ut=Yt},setTest:function(Yt){Yt?B(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(Yt){yt!==Yt&&!J&&(i.depthMask(Yt),yt=Yt)},setFunc:function(Yt){if(Ut&&(Yt=A_[Yt]),wt!==Yt){switch(Yt){case _c:i.depthFunc(i.NEVER);break;case yc:i.depthFunc(i.ALWAYS);break;case xc:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Mc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case bc:i.depthFunc(i.GREATER);break;case Ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Yt}},setLocked:function(Yt){J=Yt},setClear:function(Yt){Vt!==Yt&&(i.clearDepth(Yt),Vt=Yt)},reset:function(){J=!1,yt=null,wt=null,Vt=null}}}function n(){let J=!1,Ut=null,yt=null,wt=null,Vt=null,Yt=null,le=null,Le=null,Be=null;return{setTest:function(me){J||(me?B(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(me){Ut!==me&&!J&&(i.stencilMask(me),Ut=me)},setFunc:function(me,ze,bn){(yt!==me||wt!==ze||Vt!==bn)&&(i.stencilFunc(me,ze,bn),yt=me,wt=ze,Vt=bn)},setOp:function(me,ze,bn){(Yt!==me||le!==ze||Le!==bn)&&(i.stencilOp(me,ze,bn),Yt=me,le=ze,Le=bn)},setLocked:function(me){J=me},setClear:function(me){Be!==me&&(i.clearStencil(me),Be=me)},reset:function(){J=!1,Ut=null,yt=null,wt=null,Vt=null,Yt=null,le=null,Le=null,Be=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,p=[],m=null,g=!1,_=null,d=null,f=null,y=null,x=null,M=null,I=null,E=new zt(0,0,0),A=0,F=!1,Q=null,v=null,T=null,K=null,nt=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),vt=!1,ht=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(et)[1]),vt=ht>=1):et.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),vt=ht>=2);let D=null,tt={},O=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),ot=new Ae().fromArray(O),z=new Ae().fromArray(G);function C(J,Ut,yt,wt){let Vt=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(J,Yt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<yt;le++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Ut+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return Yt}let L={};L[i.TEXTURE_2D]=C(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=C(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=C(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=C(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),B(i.DEPTH_TEST),r.setFunc(Ks),it(!1),V(bh),B(i.CULL_FACE),w(Vi);function B(J){l[J]!==!0&&(i.enable(J),l[J]=!0)}function X(J){l[J]!==!1&&(i.disable(J),l[J]=!1)}function H(J,Ut){return h[J]!==Ut?(i.bindFramebuffer(J,Ut),h[J]=Ut,J===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ut),J===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function N(J,Ut){let yt=p,wt=!1;if(J){yt=u.get(Ut),yt===void 0&&(yt=[],u.set(Ut,yt));let Vt=J.textures;if(yt.length!==Vt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,le=Vt.length;Yt<le;Yt++)yt[Yt]=i.COLOR_ATTACHMENT0+Yt;yt.length=Vt.length,wt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(yt)}function k(J){return m!==J?(i.useProgram(J),m=J,!0):!1}let q={[hs]:i.FUNC_ADD,[Gf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};q[Xf]=i.MIN,q[qf]=i.MAX;let j={[Yf]:i.ZERO,[Zf]:i.ONE,[$f]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[jf]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[gc]:i.ONE_MINUS_SRC_ALPHA,[td]:i.ONE_MINUS_DST_COLOR,[Qf]:i.ONE_MINUS_DST_ALPHA,[nd]:i.CONSTANT_COLOR,[id]:i.ONE_MINUS_CONSTANT_COLOR,[sd]:i.CONSTANT_ALPHA,[rd]:i.ONE_MINUS_CONSTANT_ALPHA};function w(J,Ut,yt,wt,Vt,Yt,le,Le,Be,me){if(J===Vi){g===!0&&(X(i.BLEND),g=!1);return}if(g===!1&&(B(i.BLEND),g=!0),J!==Vf){if(J!==_||me!==F){if((d!==hs||x!==hs)&&(i.blendEquation(i.FUNC_ADD),d=hs,x=hs),me)switch(J){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $e:i.blendFunc(i.ONE,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $e:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}f=null,y=null,M=null,I=null,E.set(0,0,0),A=0,_=J,F=me}return}Vt=Vt||Ut,Yt=Yt||yt,le=le||wt,(Ut!==d||Vt!==x)&&(i.blendEquationSeparate(q[Ut],q[Vt]),d=Ut,x=Vt),(yt!==f||wt!==y||Yt!==M||le!==I)&&(i.blendFuncSeparate(j[yt],j[wt],j[Yt],j[le]),f=yt,y=wt,M=Yt,I=le),(Le.equals(E)===!1||Be!==A)&&(i.blendColor(Le.r,Le.g,Le.b,Be),E.copy(Le),A=Be),_=J,F=!1}function dt(J,Ut){J.side===Ie?X(i.CULL_FACE):B(i.CULL_FACE);let yt=J.side===En;Ut&&(yt=!yt),it(yt),J.blending===ei&&J.transparent===!1?w(Vi):w(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),r.setFunc(J.depthFunc),r.setTest(J.depthTest),r.setMask(J.depthWrite),s.setMask(J.colorWrite);let wt=J.stencilWrite;o.setTest(wt),wt&&(o.setMask(J.stencilWriteMask),o.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),o.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),lt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(J){Q!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),Q=J)}function V(J){J!==Bf?(B(i.CULL_FACE),J!==v&&(J===bh?i.cullFace(i.BACK):J===zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),v=J}function $(J){J!==T&&(vt&&i.lineWidth(J),T=J)}function lt(J,Ut,yt){J?(B(i.POLYGON_OFFSET_FILL),(K!==Ut||nt!==yt)&&(i.polygonOffset(Ut,yt),K=Ut,nt=yt)):X(i.POLYGON_OFFSET_FILL)}function ft(J){J?B(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function R(J){J===void 0&&(J=i.TEXTURE0+ct-1),D!==J&&(i.activeTexture(J),D=J)}function b(J,Ut,yt){yt===void 0&&(D===null?yt=i.TEXTURE0+ct-1:yt=D);let wt=tt[yt];wt===void 0&&(wt={type:void 0,texture:void 0},tt[yt]=wt),(wt.type!==J||wt.texture!==Ut)&&(D!==yt&&(i.activeTexture(yt),D=yt),i.bindTexture(J,Ut||L[J]),wt.type=J,wt.texture=Ut)}function U(){let J=tt[D];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Nt(J){ot.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),ot.copy(J))}function Rt(J){z.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),z.copy(J))}function Ct(J,Ut){let yt=c.get(Ut);yt===void 0&&(yt=new WeakMap,c.set(Ut,yt));let wt=yt.get(J);wt===void 0&&(wt=i.getUniformBlockIndex(Ut,J.name),yt.set(J,wt))}function kt(J,Ut){let wt=c.get(Ut).get(J);a.get(Ut)!==wt&&(i.uniformBlockBinding(Ut,wt,J.__bindingPointIndex),a.set(Ut,wt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},D=null,tt={},h={},u=new WeakMap,p=[],m=null,g=!1,_=null,d=null,f=null,y=null,x=null,M=null,I=null,E=new zt(0,0,0),A=0,F=!1,Q=null,v=null,T=null,K=null,nt=null,ot.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:B,disable:X,bindFramebuffer:H,drawBuffers:N,useProgram:k,setBlending:w,setMaterial:dt,setFlipSided:it,setCullFace:V,setLineWidth:$,setPolygonOffset:lt,setScissorTest:ft,activeTexture:R,bindTexture:b,unbindTexture:U,compressedTexImage2D:W,compressedTexImage3D:rt,texImage2D:At,texImage3D:Ft,updateUBOMapping:Ct,uniformBlockBinding:kt,texStorage2D:Lt,texStorage3D:pt,texSubImage2D:Y,texSubImage3D:Et,compressedTexSubImage2D:Mt,compressedTexSubImage3D:ut,scissor:Nt,viewport:Rt,reset:jt}}function gu(i,t,e,n){let s=C_(n);switch(e){case Nu:return i*t;case Fu:return i*t;case Ou:return i*t*2;case Xl:return i*t/s.components*s.byteLength;case ql:return i*t/s.components*s.byteLength;case Bu:return i*t*2/s.components*s.byteLength;case Yl:return i*t*2/s.components*s.byteLength;case Hu:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case Zl:return i*t*4/s.components*s.byteLength;case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ko:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:case Cc:return Math.max(i,16)*Math.max(t,8)/4;case Tc:case Rc:return Math.max(i,8)*Math.max(t,8)/2;case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Go:case Yc:case Zc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zu:case $c:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kc:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function C_(i){switch(i){case Ei:case Lu:return{byteLength:1,components:1};case zr:case Uu:case Kr:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case ps:case Vl:case ti:return{byteLength:4,components:1};case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function P_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return m?new OffscreenCanvas(R,b):Ko("canvas")}function _(R,b,U){let W=1,rt=ft(R);if((rt.width>U||rt.height>U)&&(W=U/Math.max(rt.width,rt.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor(W*rt.width),Et=Math.floor(W*rt.height);u===void 0&&(u=g(Y,Et));let Mt=b?g(Y,Et):u;return Mt.width=Y,Mt.height=Et,Mt.getContext("2d").drawImage(R,0,0,Y,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Y+"x"+Et+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function d(R){return R.generateMipmaps&&R.minFilter!==hn&&R.minFilter!==Gn}function f(R){i.generateMipmap(R)}function y(R,b,U,W,rt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=b;if(b===i.RED&&(U===i.FLOAT&&(Y=i.R32F),U===i.HALF_FLOAT&&(Y=i.R16F),U===i.UNSIGNED_BYTE&&(Y=i.R8)),b===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.R8UI),U===i.UNSIGNED_SHORT&&(Y=i.R16UI),U===i.UNSIGNED_INT&&(Y=i.R32UI),U===i.BYTE&&(Y=i.R8I),U===i.SHORT&&(Y=i.R16I),U===i.INT&&(Y=i.R32I)),b===i.RG&&(U===i.FLOAT&&(Y=i.RG32F),U===i.HALF_FLOAT&&(Y=i.RG16F),U===i.UNSIGNED_BYTE&&(Y=i.RG8)),b===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RG8UI),U===i.UNSIGNED_SHORT&&(Y=i.RG16UI),U===i.UNSIGNED_INT&&(Y=i.RG32UI),U===i.BYTE&&(Y=i.RG8I),U===i.SHORT&&(Y=i.RG16I),U===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),U===i.UNSIGNED_INT&&(Y=i.RGB32UI),U===i.BYTE&&(Y=i.RGB8I),U===i.SHORT&&(Y=i.RGB16I),U===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),U===i.UNSIGNED_INT&&(Y=i.RGBA32UI),U===i.BYTE&&(Y=i.RGBA8I),U===i.SHORT&&(Y=i.RGBA16I),U===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),b===i.RGBA){let Et=rt?qo:Ee.getTransfer(W);U===i.FLOAT&&(Y=i.RGBA32F),U===i.HALF_FLOAT&&(Y=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Y=Et===De?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(R,b){let U;return R?b===null||b===ps||b===js?U=i.DEPTH24_STENCIL8:b===ti?U=i.DEPTH32F_STENCIL8:b===zr&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ps||b===js?U=i.DEPTH_COMPONENT24:b===ti?U=i.DEPTH_COMPONENT32F:b===zr&&(U=i.DEPTH_COMPONENT16),U}function M(R,b){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function I(R){let b=R.target;b.removeEventListener("dispose",I),A(b),b.isVideoTexture&&h.delete(b)}function E(R){let b=R.target;b.removeEventListener("dispose",E),Q(b)}function A(R){let b=n.get(R);if(b.__webglInit===void 0)return;let U=R.source,W=p.get(U);if(W){let rt=W[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&F(R),Object.keys(W).length===0&&p.delete(U)}n.remove(R)}function F(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let U=R.source,W=p.get(U);delete W[b.__cacheKey],o.memory.textures--}function Q(R){let b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(b.__webglFramebuffer[W]))for(let rt=0;rt<b.__webglFramebuffer[W].length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[W][rt]);else i.deleteFramebuffer(b.__webglFramebuffer[W]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[W])}else{if(Array.isArray(b.__webglFramebuffer))for(let W=0;W<b.__webglFramebuffer.length;W++)i.deleteFramebuffer(b.__webglFramebuffer[W]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let W=0;W<b.__webglColorRenderbuffer.length;W++)b.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[W]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let U=R.textures;for(let W=0,rt=U.length;W<rt;W++){let Y=n.get(U[W]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(U[W])}n.remove(R)}let v=0;function T(){v=0}function K(){let R=v;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),v+=1,R}function nt(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function ct(R,b){let U=n.get(R);if(R.isVideoTexture&&$(R),R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){let W=R.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(U,R,b);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+b)}function vt(R,b){let U=n.get(R);if(R.version>0&&U.__version!==R.version){z(U,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+b)}function ht(R,b){let U=n.get(R);if(R.version>0&&U.__version!==R.version){z(U,R,b);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+b)}function et(R,b){let U=n.get(R);if(R.version>0&&U.__version!==R.version){C(U,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+b)}let D={[ds]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},tt={[hn]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[ao]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},O={[_d]:i.NEVER,[Ed]:i.ALWAYS,[yd]:i.LESS,[ku]:i.LEQUAL,[xd]:i.EQUAL,[bd]:i.GEQUAL,[Md]:i.GREATER,[vd]:i.NOTEQUAL};function G(R,b){if(b.type===ti&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===Ua||b.magFilter===ao||b.magFilter===fs||b.minFilter===Gn||b.minFilter===Ua||b.minFilter===ao||b.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,D[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,D[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,D[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===hn||b.minFilter!==ao&&b.minFilter!==fs||b.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ot(R,b){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",I));let W=b.source,rt=p.get(W);rt===void 0&&(rt={},p.set(W,rt));let Y=nt(b);if(Y!==R.__cacheKey){rt[Y]===void 0&&(rt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),rt[Y].usedTimes++;let Et=rt[R.__cacheKey];Et!==void 0&&(rt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&F(b)),R.__cacheKey=Y,R.__webglTexture=rt[Y].texture}return U}function z(R,b,U){let W=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(W=i.TEXTURE_3D);let rt=ot(R,b),Y=b.source;e.bindTexture(W,R.__webglTexture,i.TEXTURE0+U);let Et=n.get(Y);if(Y.version!==Et.__version||rt===!0){e.activeTexture(i.TEXTURE0+U);let Mt=Ee.getPrimaries(Ee.workingColorSpace),ut=b.colorSpace===zi?null:Ee.getPrimaries(b.colorSpace),Lt=b.colorSpace===zi||Mt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let pt=_(b.image,!1,s.maxTextureSize);pt=lt(b,pt);let At=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type),Nt=y(b.internalFormat,At,Ft,b.colorSpace,b.isVideoTexture);G(W,b);let Rt,Ct=b.mipmaps,kt=b.isVideoTexture!==!0,jt=Et.__version===void 0||rt===!0,J=Y.dataReady,Ut=M(b,pt);if(b.isDepthTexture)Nt=x(b.format===tr,b.type),jt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Nt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,pt.width,pt.height,0,At,Ft,null));else if(b.isDataTexture)if(Ct.length>0){kt&&jt&&e.texStorage2D(i.TEXTURE_2D,Ut,Nt,Ct[0].width,Ct[0].height);for(let yt=0,wt=Ct.length;yt<wt;yt++)Rt=Ct[yt],kt?J&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,At,Ft,Rt.data):e.texImage2D(i.TEXTURE_2D,yt,Nt,Rt.width,Rt.height,0,At,Ft,Rt.data);b.generateMipmaps=!1}else kt?(jt&&e.texStorage2D(i.TEXTURE_2D,Ut,Nt,pt.width,pt.height),J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,At,Ft,pt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,pt.width,pt.height,0,At,Ft,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Nt,Ct[0].width,Ct[0].height,pt.depth);for(let yt=0,wt=Ct.length;yt<wt;yt++)if(Rt=Ct[yt],b.format!==Xn)if(At!==null)if(kt){if(J)if(b.layerUpdates.size>0){let Vt=gu(Rt.width,Rt.height,b.format,b.type);for(let Yt of b.layerUpdates){let le=Rt.data.subarray(Yt*Vt/Rt.data.BYTES_PER_ELEMENT,(Yt+1)*Vt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,Yt,Rt.width,Rt.height,1,At,le,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,Rt.width,Rt.height,pt.depth,At,Rt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,Nt,Rt.width,Rt.height,pt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,Rt.width,Rt.height,pt.depth,At,Ft,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,Nt,Rt.width,Rt.height,pt.depth,0,At,Ft,Rt.data)}else{kt&&jt&&e.texStorage2D(i.TEXTURE_2D,Ut,Nt,Ct[0].width,Ct[0].height);for(let yt=0,wt=Ct.length;yt<wt;yt++)Rt=Ct[yt],b.format!==Xn?At!==null?kt?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,Nt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?J&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Rt.width,Rt.height,At,Ft,Rt.data):e.texImage2D(i.TEXTURE_2D,yt,Nt,Rt.width,Rt.height,0,At,Ft,Rt.data)}else if(b.isDataArrayTexture)if(kt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Nt,pt.width,pt.height,pt.depth),J)if(b.layerUpdates.size>0){let yt=gu(pt.width,pt.height,b.format,b.type);for(let wt of b.layerUpdates){let Vt=pt.data.subarray(wt*yt/pt.data.BYTES_PER_ELEMENT,(wt+1)*yt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,pt.width,pt.height,1,At,Ft,Vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,At,Ft,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,pt.width,pt.height,pt.depth,0,At,Ft,pt.data);else if(b.isData3DTexture)kt?(jt&&e.texStorage3D(i.TEXTURE_3D,Ut,Nt,pt.width,pt.height,pt.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,At,Ft,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,pt.width,pt.height,pt.depth,0,At,Ft,pt.data);else if(b.isFramebufferTexture){if(jt)if(kt)e.texStorage2D(i.TEXTURE_2D,Ut,Nt,pt.width,pt.height);else{let yt=pt.width,wt=pt.height;for(let Vt=0;Vt<Ut;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,Nt,yt,wt,0,At,Ft,null),yt>>=1,wt>>=1}}else if(Ct.length>0){if(kt&&jt){let yt=ft(Ct[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Nt,yt.width,yt.height)}for(let yt=0,wt=Ct.length;yt<wt;yt++)Rt=Ct[yt],kt?J&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,At,Ft,Rt):e.texImage2D(i.TEXTURE_2D,yt,Nt,At,Ft,Rt);b.generateMipmaps=!1}else if(kt){if(jt){let yt=ft(pt);e.texStorage2D(i.TEXTURE_2D,Ut,Nt,yt.width,yt.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Ft,pt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,At,Ft,pt);d(b)&&f(W),Et.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function C(R,b,U){if(b.image.length!==6)return;let W=ot(R,b),rt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+U);let Y=n.get(rt);if(rt.version!==Y.__version||W===!0){e.activeTexture(i.TEXTURE0+U);let Et=Ee.getPrimaries(Ee.workingColorSpace),Mt=b.colorSpace===zi?null:Ee.getPrimaries(b.colorSpace),ut=b.colorSpace===zi||Et===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,pt=b.image[0]&&b.image[0].isDataTexture,At=[];for(let wt=0;wt<6;wt++)!Lt&&!pt?At[wt]=_(b.image[wt],!0,s.maxCubemapSize):At[wt]=pt?b.image[wt].image:b.image[wt],At[wt]=lt(b,At[wt]);let Ft=At[0],Nt=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type),Ct=y(b.internalFormat,Nt,Rt,b.colorSpace),kt=b.isVideoTexture!==!0,jt=Y.__version===void 0||W===!0,J=rt.dataReady,Ut=M(b,Ft);G(i.TEXTURE_CUBE_MAP,b);let yt;if(Lt){kt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Ct,Ft.width,Ft.height);for(let wt=0;wt<6;wt++){yt=At[wt].mipmaps;for(let Vt=0;Vt<yt.length;Vt++){let Yt=yt[Vt];b.format!==Xn?Nt!==null?kt?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,0,0,Yt.width,Yt.height,Nt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,Ct,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,0,0,Yt.width,Yt.height,Nt,Rt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt,Ct,Yt.width,Yt.height,0,Nt,Rt,Yt.data)}}}else{if(yt=b.mipmaps,kt&&jt){yt.length>0&&Ut++;let wt=ft(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Ct,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(pt){kt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,At[wt].width,At[wt].height,Nt,Rt,At[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,At[wt].width,At[wt].height,0,Nt,Rt,At[wt].data);for(let Vt=0;Vt<yt.length;Vt++){let le=yt[Vt].image[wt].image;kt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,0,0,le.width,le.height,Nt,Rt,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,Ct,le.width,le.height,0,Nt,Rt,le.data)}}else{kt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Nt,Rt,At[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,Nt,Rt,At[wt]);for(let Vt=0;Vt<yt.length;Vt++){let Yt=yt[Vt];kt?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,0,0,Nt,Rt,Yt.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Vt+1,Ct,Nt,Rt,Yt.image[wt])}}}d(b)&&f(i.TEXTURE_CUBE_MAP),Y.__version=rt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function L(R,b,U,W,rt,Y){let Et=r.convert(U.format,U.colorSpace),Mt=r.convert(U.type),ut=y(U.internalFormat,Et,Mt,U.colorSpace);if(!n.get(b).__hasExternalTextures){let pt=Math.max(1,b.width>>Y),At=Math.max(1,b.height>>Y);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,Y,ut,pt,At,b.depth,0,Et,Mt,null):e.texImage2D(rt,Y,ut,pt,At,0,Et,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,rt,n.get(U).__webglTexture,0,it(b)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,rt,n.get(U).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function B(R,b,U){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let W=b.depthTexture,rt=W&&W.isDepthTexture?W.type:null,Y=x(b.stencilBuffer,rt),Et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=it(b);V(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,Y,b.width,b.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{let W=b.textures;for(let rt=0;rt<W.length;rt++){let Y=W[rt],Et=r.convert(Y.format,Y.colorSpace),Mt=r.convert(Y.type),ut=y(Y.internalFormat,Et,Mt,Y.colorSpace),Lt=it(b);U&&V(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ut,b.width,b.height):V(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,ut,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ut,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct(b.depthTexture,0);let W=n.get(b.depthTexture).__webglTexture,rt=it(b);if(b.depthTexture.format===Ys)V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(b.depthTexture.format===tr)V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function H(R){let b=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),W){let rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,W.removeEventListener("dispose",rt)};W.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=W}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");X(b.__webglFramebuffer,R)}else if(U){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]===void 0)b.__webglDepthbuffer[W]=i.createRenderbuffer(),B(b.__webglDepthbuffer[W],R,!1);else{let rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),B(b.__webglDepthbuffer,R,!1);else{let W=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function N(R,b,U){let W=n.get(R);b!==void 0&&L(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&H(R)}function k(R){let b=R.texture,U=n.get(R),W=n.get(b);R.addEventListener("dispose",E);let rt=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Et=rt.length>1;if(Et||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=b.version,o.memory.textures++),Y){U.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[Mt]=[];for(let ut=0;ut<b.mipmaps.length;ut++)U.__webglFramebuffer[Mt][ut]=i.createFramebuffer()}else U.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)U.__webglFramebuffer[Mt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Et)for(let Mt=0,ut=rt.length;Mt<ut;Mt++){let Lt=n.get(rt[Mt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&V(R)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Mt=0;Mt<rt.length;Mt++){let ut=rt[Mt];U.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[Mt]);let Lt=r.convert(ut.format,ut.colorSpace),pt=r.convert(ut.type),At=y(ut.internalFormat,Lt,pt,ut.colorSpace,R.isXRRenderTarget===!0),Ft=it(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,At,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,U.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),B(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),G(i.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let ut=0;ut<b.mipmaps.length;ut++)L(U.__webglFramebuffer[Mt][ut],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ut);else L(U.__webglFramebuffer[Mt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);d(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let Mt=0,ut=rt.length;Mt<ut;Mt++){let Lt=rt[Mt],pt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),G(i.TEXTURE_2D,Lt),L(U.__webglFramebuffer,R,Lt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),d(Lt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,W.__webglTexture),G(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let ut=0;ut<b.mipmaps.length;ut++)L(U.__webglFramebuffer[ut],R,b,i.COLOR_ATTACHMENT0,Mt,ut);else L(U.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Mt,0);d(b)&&f(Mt),e.unbindTexture()}R.depthBuffer&&H(R)}function q(R){let b=R.textures;for(let U=0,W=b.length;U<W;U++){let rt=b[U];if(d(rt)){let Y=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(rt).__webglTexture;e.bindTexture(Y,Et),f(Y),e.unbindTexture()}}}let j=[],w=[];function dt(R){if(R.samples>0){if(V(R)===!1){let b=R.textures,U=R.width,W=R.height,rt=i.COLOR_BUFFER_BIT,Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),Mt=b.length>1;if(Mt)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ut]);let Lt=n.get(b[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,U,W,0,0,U,W,rt,i.NEAREST),c===!0&&(j.length=0,w.length=0,j.push(i.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.resolveDepthBuffer===!1&&(j.push(Y),w.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Et.__webglColorRenderbuffer[ut]);let Lt=n.get(b[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function it(R){return Math.min(s.maxSamples,R.samples)}function V(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function lt(R,b){let U=R.colorSpace,W=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Yi&&U!==zi&&(Ee.getTransfer(U)===De?(W!==Xn||rt!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}function ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=T,this.setTexture2D=ct,this.setTexture2DArray=vt,this.setTexture3D=ht,this.setTextureCube=et,this.rebindTextures=N,this.setupRenderTarget=k,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=L,this.useMultisampledRTT=V}function I_(i,t){function e(n,s=zi){let r,o=Ee.getTransfer(s);if(n===Ei)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return i.BYTE;if(n===Uu)return i.SHORT;if(n===zr)return i.UNSIGNED_SHORT;if(n===Vl)return i.INT;if(n===ps)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===Kr)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Hu)return i.RGB;if(n===Xn)return i.RGBA;if(n===Fu)return i.LUMINANCE;if(n===Ou)return i.LUMINANCE_ALPHA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Xl)return i.RED;if(n===ql)return i.RED_INTEGER;if(n===Bu)return i.RG;if(n===Yl)return i.RG_INTEGER;if(n===Zl)return i.RGBA_INTEGER;if(n===Bo||n===zo||n===ko||n===Vo)if(o===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===Ac||n===Rc||n===Cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Ic||n===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pc||n===Ic)return o===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uc||n===Dc||n===Nc||n===Hc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return o===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Yc||n===Zc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zu||n===$c||n===Kc||n===Jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dl=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},he=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},L_={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let d=e.getJointPose(_,n),f=this._getHandJoint(l,_);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
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

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:U_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends Wi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,m=null,g=null,_=new pl,d=e.getContextAttributes(),f=null,y=null,x=[],M=[],I=new Bt,E=null,A=new sn;A.layers.enable(1),A.viewport=new Ae;let F=new sn;F.layers.enable(2),F.viewport=new Ae;let Q=[A,F],v=new dl;v.layers.enable(1),v.layers.enable(2);let T=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let L=x[C];return L===void 0&&(L=new Hr,x[C]=L),L.getTargetRaySpace()},this.getControllerGrip=function(C){let L=x[C];return L===void 0&&(L=new Hr,x[C]=L),L.getGripSpace()},this.getHand=function(C){let L=x[C];return L===void 0&&(L=new Hr,x[C]=L),L.getHandSpace()};function nt(C){let L=M.indexOf(C.inputSource);if(L===-1)return;let B=x[L];B!==void 0&&(B.update(C.inputSource,C.frame,l||o),B.dispatchEvent({type:C.type,data:C.inputSource}))}function ct(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",ct),s.removeEventListener("inputsourceschange",vt);for(let C=0;C<x.length;C++){let L=M[C];L!==null&&(M[C]=null,x[C].disconnect(L))}T=null,K=null,_.reset(),t.setRenderTarget(f),m=null,p=null,u=null,s=null,y=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",ct),s.addEventListener("inputsourceschange",vt),d.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let L={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,L),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Si(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let L=null,B=null,X=null;d.depth&&(X=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=d.stencil?tr:Ys,B=d.stencil?js:ps);let H={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(H),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new Si(p.textureWidth,p.textureHeight,{format:Xn,type:Ei,depthTexture:new oa(p.textureWidth,p.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),z.setContext(s),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function vt(C){for(let L=0;L<C.removed.length;L++){let B=C.removed[L],X=M.indexOf(B);X>=0&&(M[X]=null,x[X].disconnect(B))}for(let L=0;L<C.added.length;L++){let B=C.added[L],X=M.indexOf(B);if(X===-1){for(let N=0;N<x.length;N++)if(N>=M.length){M.push(B),X=N;break}else if(M[N]===null){M[N]=B,X=N;break}if(X===-1)break}let H=x[X];H&&H.connect(B)}}let ht=new S,et=new S;function D(C,L,B){ht.setFromMatrixPosition(L.matrixWorld),et.setFromMatrixPosition(B.matrixWorld);let X=ht.distanceTo(et),H=L.projectionMatrix.elements,N=B.projectionMatrix.elements,k=H[14]/(H[10]-1),q=H[14]/(H[10]+1),j=(H[9]+1)/H[5],w=(H[9]-1)/H[5],dt=(H[8]-1)/H[0],it=(N[8]+1)/N[0],V=k*dt,$=k*it,lt=X/(-dt+it),ft=lt*-dt;if(L.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(ft),C.translateZ(lt),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),H[10]===-1)C.projectionMatrix.copy(L.projectionMatrix),C.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let R=k+lt,b=q+lt,U=V-ft,W=$+(X-ft),rt=j*q/b*R,Y=w*q/b*R;C.projectionMatrix.makePerspective(U,W,rt,Y,R,b),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function tt(C,L){L===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(L.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;let L=C.near,B=C.far;_.texture!==null&&(_.depthNear>0&&(L=_.depthNear),_.depthFar>0&&(B=_.depthFar)),v.near=F.near=A.near=L,v.far=F.far=A.far=B,(T!==v.near||K!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,K=v.far);let X=C.parent,H=v.cameras;tt(v,X);for(let N=0;N<H.length;N++)tt(H[N],X);H.length===2?D(v,A,F):v.projectionMatrix.copy(A.projectionMatrix),O(C,v,X)};function O(C,L,B){B===null?C.matrix.copy(L.matrixWorld):(C.matrix.copy(B.matrixWorld),C.matrix.invert(),C.matrix.multiply(L.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(L.projectionMatrix),C.projectionMatrixInverse.copy(L.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=kr*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(C){c=C,p!==null&&(p.fixedFoveation=C),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=C)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let G=null;function ot(C,L){if(h=L.getViewerPose(l||o),g=L,h!==null){let B=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let X=!1;B.length!==v.cameras.length&&(v.cameras.length=0,X=!0);for(let N=0;N<B.length;N++){let k=B[N],q=null;if(m!==null)q=m.getViewport(k);else{let w=u.getViewSubImage(p,k);q=w.viewport,N===0&&(t.setRenderTargetTextures(y,w.colorTexture,p.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(y))}let j=Q[N];j===void 0&&(j=new sn,j.layers.enable(N),j.viewport=new Ae,Q[N]=j),j.matrix.fromArray(k.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(k.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(q.x,q.y,q.width,q.height),N===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),X===!0&&v.cameras.push(j)}let H=s.enabledFeatures;if(H&&H.includes("depth-sensing")){let N=u.getDepthInformation(B[0]);N&&N.isValid&&N.texture&&_.init(t,N,s.renderState)}}for(let B=0;B<x.length;B++){let X=M[B],H=x[B];X!==null&&H!==void 0&&H.update(X,L,l||o)}G&&G(C,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),g=null}let z=new Xu;z.setAnimationLoop(ot),this.setAnimationLoop=function(C){G=C},this.dispose=function(){}}},cs=new rn,N_=new ie;function H_(i,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,Wu(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,y,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,M)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),_(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?c(d,f,y,x):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===En&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===En&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let y=t.get(f),x=y.envMap,M=y.envMapRotation;x&&(d.envMap.value=x,cs.copy(M),cs.x*=-1,cs.y*=-1,cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),d.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(cs)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,y,x){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*y,d.scale.value=x*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,y){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function _(d,f){let y=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",d));let I=x.program;n.updateUBOMapping(y,I);let E=t.render.frame;r[y.id]!==E&&(p(y),r[y.id]=E)}function h(y){let x=u();y.__bindingPointIndex=x;let M=i.createBuffer(),I=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let x=s[y.id],M=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=M.length;E<A;E++){let F=Array.isArray(M[E])?M[E]:[M[E]];for(let Q=0,v=F.length;Q<v;Q++){let T=F[Q];if(m(T,E,Q,I)===!0){let K=T.__offset,nt=Array.isArray(T.value)?T.value:[T.value],ct=0;for(let vt=0;vt<nt.length;vt++){let ht=nt[vt],et=_(ht);typeof ht=="number"||typeof ht=="boolean"?(T.__data[0]=ht,i.bufferSubData(i.UNIFORM_BUFFER,K+ct,T.__data)):ht.isMatrix3?(T.__data[0]=ht.elements[0],T.__data[1]=ht.elements[1],T.__data[2]=ht.elements[2],T.__data[3]=0,T.__data[4]=ht.elements[3],T.__data[5]=ht.elements[4],T.__data[6]=ht.elements[5],T.__data[7]=0,T.__data[8]=ht.elements[6],T.__data[9]=ht.elements[7],T.__data[10]=ht.elements[8],T.__data[11]=0):(ht.toArray(T.__data,ct),ct+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,x,M,I){let E=y.value,A=x+"_"+M;if(I[A]===void 0)return typeof E=="number"||typeof E=="boolean"?I[A]=E:I[A]=E.clone(),!0;{let F=I[A];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return I[A]=E,!0}else if(F.equals(E)===!1)return F.copy(E),!0}return!1}function g(y){let x=y.uniforms,M=0,I=16;for(let A=0,F=x.length;A<F;A++){let Q=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,T=Q.length;v<T;v++){let K=Q[v],nt=Array.isArray(K.value)?K.value:[K.value];for(let ct=0,vt=nt.length;ct<vt;ct++){let ht=nt[ct],et=_(ht),D=M%I,tt=D%et.boundary,O=D+tt;M+=tt,O!==0&&I-O<et.storage&&(M+=I-O),K.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=M,M+=et.storage}}}let E=M%I;return E>0&&(M+=I-E),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function d(y){let x=y.target;x.removeEventListener("dispose",d);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var nr=class{constructor(t={}){let{canvas:e=zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,d=null,f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Gi,this.toneMappingExposure=1;let x=this,M=!1,I=0,E=0,A=null,F=-1,Q=null,v=new Ae,T=new Ae,K=null,nt=new zt(0),ct=0,vt=e.width,ht=e.height,et=1,D=null,tt=null,O=new Ae(0,0,vt,ht),G=new Ae(0,0,vt,ht),ot=!1,z=new Gr,C=!1,L=!1,B=new ie,X=new ie,H=new S,N=new Ae,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function j(){return A===null?et:1}let w=n;function dt(P,st){return e.getContext(P,st)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Yt,!1),w===null){let st="webgl2";if(w=dt(st,P),w===null)throw dt(st)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let it,V,$,lt,ft,R,b,U,W,rt,Y,Et,Mt,ut,Lt,pt,At,Ft,Nt,Rt,Ct,kt,jt,J;function Ut(){it=new jm(w),it.init(),kt=new I_(w,it),V=new Ym(w,it,t,kt),$=new R_(w),V.reverseDepthBuffer&&$.buffers.depth.setReversed(!0),lt=new ng(w),ft=new m_,R=new P_(w,it,$,ft,V,kt,lt),b=new $m(x),U=new Qm(x),W=new l0(w),jt=new Xm(w,W),rt=new tg(w,W,lt,jt),Y=new sg(w,rt,W,lt),Nt=new ig(w,V,R),pt=new Zm(ft),Et=new p_(x,b,U,it,V,jt,pt),Mt=new H_(x,ft),ut=new __,Lt=new E_(it),Ft=new Wm(x,b,U,$,Y,p,c),At=new T_(x,Y,V),J=new F_(w,lt,V,$),Rt=new qm(w,it,lt),Ct=new eg(w,it,lt),lt.programs=Et.programs,x.capabilities=V,x.extensions=it,x.properties=ft,x.renderLists=ut,x.shadowMap=At,x.state=$,x.info=lt}Ut();let yt=new ml(x,w);this.xr=yt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let P=it.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=it.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(P){P!==void 0&&(et=P,this.setSize(vt,ht,!1))},this.getSize=function(P){return P.set(vt,ht)},this.setSize=function(P,st,mt=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}vt=P,ht=st,e.width=Math.floor(P*et),e.height=Math.floor(st*et),mt===!0&&(e.style.width=P+"px",e.style.height=st+"px"),this.setViewport(0,0,P,st)},this.getDrawingBufferSize=function(P){return P.set(vt*et,ht*et).floor()},this.setDrawingBufferSize=function(P,st,mt){vt=P,ht=st,et=mt,e.width=Math.floor(P*mt),e.height=Math.floor(st*mt),this.setViewport(0,0,P,st)},this.getCurrentViewport=function(P){return P.copy(v)},this.getViewport=function(P){return P.copy(O)},this.setViewport=function(P,st,mt,_t){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,st,mt,_t),$.viewport(v.copy(O).multiplyScalar(et).round())},this.getScissor=function(P){return P.copy(G)},this.setScissor=function(P,st,mt,_t){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,st,mt,_t),$.scissor(T.copy(G).multiplyScalar(et).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(P){$.setScissorTest(ot=P)},this.setOpaqueSort=function(P){D=P},this.setTransparentSort=function(P){tt=P},this.getClearColor=function(P){return P.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(P=!0,st=!0,mt=!0){let _t=0;if(P){let at=!1;if(A!==null){let Dt=A.texture.format;at=Dt===Zl||Dt===Yl||Dt===ql}if(at){let Dt=A.texture.type,Xt=Dt===Ei||Dt===ps||Dt===zr||Dt===js||Dt===Gl||Dt===Wl,$t=Ft.getClearColor(),Kt=Ft.getClearAlpha(),ne=$t.r,ee=$t.g,Qt=$t.b;Xt?(m[0]=ne,m[1]=ee,m[2]=Qt,m[3]=Kt,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=ne,g[1]=ee,g[2]=Qt,g[3]=Kt,w.clearBufferiv(w.COLOR,0,g))}else _t|=w.COLOR_BUFFER_BIT}st&&(_t|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),mt&&(_t|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Yt,!1),ut.dispose(),Lt.dispose(),ft.dispose(),b.dispose(),U.dispose(),Y.dispose(),jt.dispose(),J.dispose(),Et.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",li),yt.removeEventListener("sessionend",io),Tn.stop()};function wt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let P=lt.autoReset,st=At.enabled,mt=At.autoUpdate,_t=At.needsUpdate,at=At.type;Ut(),lt.autoReset=P,At.enabled=st,At.autoUpdate=mt,At.needsUpdate=_t,At.type=at}function Yt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function le(P){let st=P.target;st.removeEventListener("dispose",le),Le(st)}function Le(P){Be(P),ft.remove(P)}function Be(P){let st=ft.get(P).programs;st!==void 0&&(st.forEach(function(mt){Et.releaseProgram(mt)}),P.isShaderMaterial&&Et.releaseShaderCache(P))}this.renderBufferDirect=function(P,st,mt,_t,at,Dt){st===null&&(st=k);let Xt=at.isMesh&&at.matrixWorld.determinant()<0,$t=_r(P,st,mt,_t,at);$.setMaterial(_t,Xt);let Kt=mt.index,ne=1;if(_t.wireframe===!0){if(Kt=rt.getWireframeAttribute(mt),Kt===void 0)return;ne=2}let ee=mt.drawRange,Qt=mt.attributes.position,xe=ee.start*ne,re=(ee.start+ee.count)*ne;Dt!==null&&(xe=Math.max(xe,Dt.start*ne),re=Math.min(re,(Dt.start+Dt.count)*ne)),Kt!==null?(xe=Math.max(xe,0),re=Math.min(re,Kt.count)):Qt!=null&&(xe=Math.max(xe,0),re=Math.min(re,Qt.count));let Ue=re-xe;if(Ue<0||Ue===1/0)return;jt.setup(at,_t,$t,mt,Kt);let fn,_e=Rt;if(Kt!==null&&(fn=W.get(Kt),_e=Ct,_e.setIndex(fn)),at.isMesh)_t.wireframe===!0?($.setLineWidth(_t.wireframeLinewidth*j()),_e.setMode(w.LINES)):_e.setMode(w.TRIANGLES);else if(at.isLine){let te=_t.linewidth;te===void 0&&(te=1),$.setLineWidth(te*j()),at.isLineSegments?_e.setMode(w.LINES):at.isLineLoop?_e.setMode(w.LINE_LOOP):_e.setMode(w.LINE_STRIP)}else at.isPoints?_e.setMode(w.POINTS):at.isSprite&&_e.setMode(w.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)_e.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))_e.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{let te=at._multiDrawStarts,Xe=at._multiDrawCounts,Me=at._multiDrawCount,An=Kt?W.get(Kt).bytesPerElement:1,Ii=ft.get(_t).currentProgram.getUniforms();for(let dn=0;dn<Me;dn++)Ii.setValue(w,"_gl_DrawID",dn),_e.render(te[dn]/An,Xe[dn])}else if(at.isInstancedMesh)_e.renderInstances(xe,Ue,at.count);else if(mt.isInstancedBufferGeometry){let te=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Xe=Math.min(mt.instanceCount,te);_e.renderInstances(xe,Ue,Xe)}else _e.render(xe,Ue)};function me(P,st,mt){P.transparent===!0&&P.side===Ie&&P.forceSinglePass===!1?(P.side=En,P.needsUpdate=!0,Ss(P,st,mt),P.side=Dn,P.needsUpdate=!0,Ss(P,st,mt),P.side=Ie):Ss(P,st,mt)}this.compile=function(P,st,mt=null){mt===null&&(mt=P),d=Lt.get(mt),d.init(st),y.push(d),mt.traverseVisible(function(at){at.isLight&&at.layers.test(st.layers)&&(d.pushLight(at),at.castShadow&&d.pushShadow(at))}),P!==mt&&P.traverseVisible(function(at){at.isLight&&at.layers.test(st.layers)&&(d.pushLight(at),at.castShadow&&d.pushShadow(at))}),d.setupLights();let _t=new Set;return P.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;let Dt=at.material;if(Dt)if(Array.isArray(Dt))for(let Xt=0;Xt<Dt.length;Xt++){let $t=Dt[Xt];me($t,mt,at),_t.add($t)}else me(Dt,mt,at),_t.add(Dt)}),y.pop(),d=null,_t},this.compileAsync=function(P,st,mt=null){let _t=this.compile(P,st,mt);return new Promise(at=>{function Dt(){if(_t.forEach(function(Xt){ft.get(Xt).currentProgram.isReady()&&_t.delete(Xt)}),_t.size===0){at(P);return}setTimeout(Dt,10)}it.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let ze=null;function bn(P){ze&&ze(P)}function li(){Tn.stop()}function io(){Tn.start()}let Tn=new Xu;Tn.setAnimationLoop(bn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(P){ze=P,yt.setAnimationLoop(P),P===null?Tn.stop():Tn.start()},yt.addEventListener("sessionstart",li),yt.addEventListener("sessionend",io),this.render=function(P,st){if(st!==void 0&&st.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(st),st=yt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,st,A),d=Lt.get(P,y.length),d.init(st),y.push(d),X.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),z.setFromProjectionMatrix(X),L=this.localClippingEnabled,C=pt.init(this.clippingPlanes,L),_=ut.get(P,f.length),_.init(),f.push(_),yt.enabled===!0&&yt.isPresenting===!0){let Dt=x.xr.getDepthSensingMesh();Dt!==null&&Qi(Dt,st,-1/0,x.sortObjects)}Qi(P,st,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,tt),q=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,q&&Ft.addToRenderList(_,P),this.info.render.frame++,C===!0&&pt.beginShadows();let mt=d.state.shadowsArray;At.render(mt,P,st),C===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let _t=_.opaque,at=_.transmissive;if(d.setupLights(),st.isArrayCamera){let Dt=st.cameras;if(at.length>0)for(let Xt=0,$t=Dt.length;Xt<$t;Xt++){let Kt=Dt[Xt];Pe(_t,at,P,Kt)}q&&Ft.render(P);for(let Xt=0,$t=Dt.length;Xt<$t;Xt++){let Kt=Dt[Xt];Es(_,P,Kt,Kt.viewport)}}else at.length>0&&Pe(_t,at,P,st),q&&Ft.render(P),Es(_,P,st);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(x,P,st),jt.resetDefaultState(),F=-1,Q=null,y.pop(),y.length>0?(d=y[y.length-1],C===!0&&pt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Qi(P,st,mt,_t){if(P.visible===!1)return;if(P.layers.test(st.layers)){if(P.isGroup)mt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(st);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||z.intersectsSprite(P)){_t&&N.setFromMatrixPosition(P.matrixWorld).applyMatrix4(X);let Xt=Y.update(P),$t=P.material;$t.visible&&_.push(P,Xt,$t,mt,N.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||z.intersectsObject(P))){let Xt=Y.update(P),$t=P.material;if(_t&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),N.copy(P.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),N.copy(Xt.boundingSphere.center)),N.applyMatrix4(P.matrixWorld).applyMatrix4(X)),Array.isArray($t)){let Kt=Xt.groups;for(let ne=0,ee=Kt.length;ne<ee;ne++){let Qt=Kt[ne],xe=$t[Qt.materialIndex];xe&&xe.visible&&_.push(P,Xt,xe,mt,N.z,Qt)}}else $t.visible&&_.push(P,Xt,$t,mt,N.z,null)}}let Dt=P.children;for(let Xt=0,$t=Dt.length;Xt<$t;Xt++)Qi(Dt[Xt],st,mt,_t)}function Es(P,st,mt,_t){let at=P.opaque,Dt=P.transmissive,Xt=P.transparent;d.setupLightsView(mt),C===!0&&pt.setGlobalState(x.clippingPlanes,mt),_t&&$.viewport(v.copy(_t)),at.length>0&&hi(at,st,mt),Dt.length>0&&hi(Dt,st,mt),Xt.length>0&&hi(Xt,st,mt),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Pe(P,st,mt,_t){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[_t.id]===void 0&&(d.state.transmissionRenderTarget[_t.id]=new Si(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Kr:Ei,minFilter:fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));let Dt=d.state.transmissionRenderTarget[_t.id],Xt=_t.viewport||v;Dt.setSize(Xt.z,Xt.w);let $t=x.getRenderTarget();x.setRenderTarget(Dt),x.getClearColor(nt),ct=x.getClearAlpha(),ct<1&&x.setClearColor(16777215,.5),x.clear(),q&&Ft.render(mt);let Kt=x.toneMapping;x.toneMapping=Gi;let ne=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),d.setupLightsView(_t),C===!0&&pt.setGlobalState(x.clippingPlanes,_t),hi(P,mt,_t),R.updateMultisampleRenderTarget(Dt),R.updateRenderTargetMipmap(Dt),it.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Qt=0,xe=st.length;Qt<xe;Qt++){let re=st[Qt],Ue=re.object,fn=re.geometry,_e=re.material,te=re.group;if(_e.side===Ie&&Ue.layers.test(_t.layers)){let Xe=_e.side;_e.side=En,_e.needsUpdate=!0,Bn(Ue,mt,_t,fn,_e,te),_e.side=Xe,_e.needsUpdate=!0,ee=!0}}ee===!0&&(R.updateMultisampleRenderTarget(Dt),R.updateRenderTargetMipmap(Dt))}x.setRenderTarget($t),x.setClearColor(nt,ct),ne!==void 0&&(_t.viewport=ne),x.toneMapping=Kt}function hi(P,st,mt){let _t=st.isScene===!0?st.overrideMaterial:null;for(let at=0,Dt=P.length;at<Dt;at++){let Xt=P[at],$t=Xt.object,Kt=Xt.geometry,ne=_t===null?Xt.material:_t,ee=Xt.group;$t.layers.test(mt.layers)&&Bn($t,st,mt,Kt,ne,ee)}}function Bn(P,st,mt,_t,at,Dt){P.onBeforeRender(x,st,mt,_t,at,Dt),P.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),at.onBeforeRender(x,st,mt,_t,P,Dt),at.transparent===!0&&at.side===Ie&&at.forceSinglePass===!1?(at.side=En,at.needsUpdate=!0,x.renderBufferDirect(mt,st,_t,at,P,Dt),at.side=Dn,at.needsUpdate=!0,x.renderBufferDirect(mt,st,_t,at,P,Dt),at.side=Ie):x.renderBufferDirect(mt,st,_t,at,P,Dt),P.onAfterRender(x,st,mt,_t,at,Dt)}function Ss(P,st,mt){st.isScene!==!0&&(st=k);let _t=ft.get(P),at=d.state.lights,Dt=d.state.shadowsArray,Xt=at.state.version,$t=Et.getParameters(P,at.state,Dt,st,mt),Kt=Et.getProgramCacheKey($t),ne=_t.programs;_t.environment=P.isMeshStandardMaterial?st.environment:null,_t.fog=st.fog,_t.envMap=(P.isMeshStandardMaterial?U:b).get(P.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&P.envMap===null?st.environmentRotation:P.envMapRotation,ne===void 0&&(P.addEventListener("dispose",le),ne=new Map,_t.programs=ne);let ee=ne.get(Kt);if(ee!==void 0){if(_t.currentProgram===ee&&_t.lightsStateVersion===Xt)return ro(P,$t),ee}else $t.uniforms=Et.getUniforms(P),P.onBeforeCompile($t,x),ee=Et.acquireProgram($t,Kt),ne.set(Kt,ee),_t.uniforms=$t.uniforms;let Qt=_t.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qt.clippingPlanes=pt.uniform),ro(P,$t),_t.needsLights=ws(P),_t.lightsStateVersion=Xt,_t.needsLights&&(Qt.ambientLightColor.value=at.state.ambient,Qt.lightProbe.value=at.state.probe,Qt.directionalLights.value=at.state.directional,Qt.directionalLightShadows.value=at.state.directionalShadow,Qt.spotLights.value=at.state.spot,Qt.spotLightShadows.value=at.state.spotShadow,Qt.rectAreaLights.value=at.state.rectArea,Qt.ltc_1.value=at.state.rectAreaLTC1,Qt.ltc_2.value=at.state.rectAreaLTC2,Qt.pointLights.value=at.state.point,Qt.pointLightShadows.value=at.state.pointShadow,Qt.hemisphereLights.value=at.state.hemi,Qt.directionalShadowMap.value=at.state.directionalShadowMap,Qt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Qt.spotShadowMap.value=at.state.spotShadowMap,Qt.spotLightMatrix.value=at.state.spotLightMatrix,Qt.spotLightMap.value=at.state.spotLightMap,Qt.pointShadowMap.value=at.state.pointShadowMap,Qt.pointShadowMatrix.value=at.state.pointShadowMatrix),_t.currentProgram=ee,_t.uniformsList=null,ee}function so(P){if(P.uniformsList===null){let st=P.currentProgram.getUniforms();P.uniformsList=$s.seqWithValue(st.seq,P.uniforms)}return P.uniformsList}function ro(P,st){let mt=ft.get(P);mt.outputColorSpace=st.outputColorSpace,mt.batching=st.batching,mt.batchingColor=st.batchingColor,mt.instancing=st.instancing,mt.instancingColor=st.instancingColor,mt.instancingMorph=st.instancingMorph,mt.skinning=st.skinning,mt.morphTargets=st.morphTargets,mt.morphNormals=st.morphNormals,mt.morphColors=st.morphColors,mt.morphTargetsCount=st.morphTargetsCount,mt.numClippingPlanes=st.numClippingPlanes,mt.numIntersection=st.numClipIntersection,mt.vertexAlphas=st.vertexAlphas,mt.vertexTangents=st.vertexTangents,mt.toneMapping=st.toneMapping}function _r(P,st,mt,_t,at){st.isScene!==!0&&(st=k),R.resetTextureUnits();let Dt=st.fog,Xt=_t.isMeshStandardMaterial?st.environment:null,$t=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Yi,Kt=(_t.isMeshStandardMaterial?U:b).get(_t.envMap||Xt),ne=_t.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,ee=!!mt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),Qt=!!mt.morphAttributes.position,xe=!!mt.morphAttributes.normal,re=!!mt.morphAttributes.color,Ue=Gi;_t.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ue=x.toneMapping);let fn=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,_e=fn!==void 0?fn.length:0,te=ft.get(_t),Xe=d.state.lights;if(C===!0&&(L===!0||P!==Q)){let pn=P===Q&&_t.id===F;pt.setState(_t,P,pn)}let Me=!1;_t.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Xe.state.version||te.outputColorSpace!==$t||at.isBatchedMesh&&te.batching===!1||!at.isBatchedMesh&&te.batching===!0||at.isBatchedMesh&&te.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&te.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&te.instancing===!1||!at.isInstancedMesh&&te.instancing===!0||at.isSkinnedMesh&&te.skinning===!1||!at.isSkinnedMesh&&te.skinning===!0||at.isInstancedMesh&&te.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&te.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&te.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&te.instancingMorph===!1&&at.morphTexture!==null||te.envMap!==Kt||_t.fog===!0&&te.fog!==Dt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==pt.numPlanes||te.numIntersection!==pt.numIntersection)||te.vertexAlphas!==ne||te.vertexTangents!==ee||te.morphTargets!==Qt||te.morphNormals!==xe||te.morphColors!==re||te.toneMapping!==Ue||te.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,te.__version=_t.version);let An=te.currentProgram;Me===!0&&(An=Ss(_t,st,at));let Ii=!1,dn=!1,yr=!1,Ne=An.getUniforms(),Qn=te.uniforms;if($.useProgram(An.program)&&(Ii=!0,dn=!0,yr=!0),_t.id!==F&&(F=_t.id,dn=!0),Ii||Q!==P){V.reverseDepthBuffer?(B.copy(P.projectionMatrix),Vd(B),Gd(B),Ne.setValue(w,"projectionMatrix",B)):Ne.setValue(w,"projectionMatrix",P.projectionMatrix),Ne.setValue(w,"viewMatrix",P.matrixWorldInverse);let pn=Ne.map.cameraPosition;pn!==void 0&&pn.setValue(w,H.setFromMatrixPosition(P.matrixWorld)),V.logarithmicDepthBuffer&&Ne.setValue(w,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&Ne.setValue(w,"isOrthographic",P.isOrthographicCamera===!0),Q!==P&&(Q=P,dn=!0,yr=!0)}if(at.isSkinnedMesh){Ne.setOptional(w,at,"bindMatrix"),Ne.setOptional(w,at,"bindMatrixInverse");let pn=at.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ne.setValue(w,"boneTexture",pn.boneTexture,R))}at.isBatchedMesh&&(Ne.setOptional(w,at,"batchingTexture"),Ne.setValue(w,"batchingTexture",at._matricesTexture,R),Ne.setOptional(w,at,"batchingIdTexture"),Ne.setValue(w,"batchingIdTexture",at._indirectTexture,R),Ne.setOptional(w,at,"batchingColorTexture"),at._colorsTexture!==null&&Ne.setValue(w,"batchingColorTexture",at._colorsTexture,R));let Li=mt.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Nt.update(at,mt,An),(dn||te.receiveShadow!==at.receiveShadow)&&(te.receiveShadow=at.receiveShadow,Ne.setValue(w,"receiveShadow",at.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(Qn.envMap.value=Kt,Qn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&st.environment!==null&&(Qn.envMapIntensity.value=st.environmentIntensity),dn&&(Ne.setValue(w,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&ui(Qn,yr),Dt&&_t.fog===!0&&Mt.refreshFogUniforms(Qn,Dt),Mt.refreshMaterialUniforms(Qn,_t,et,ht,d.state.transmissionRenderTarget[P.id]),$s.upload(w,so(te),Qn,R)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&($s.upload(w,so(te),Qn,R),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&Ne.setValue(w,"center",at.center),Ne.setValue(w,"modelViewMatrix",at.modelViewMatrix),Ne.setValue(w,"normalMatrix",at.normalMatrix),Ne.setValue(w,"modelMatrix",at.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){let pn=_t.uniformsGroups;for(let Ui=0,He=pn.length;Ui<He;Ui++){let ji=pn[Ui];J.update(ji,An),J.bind(ji,An)}}return An}function ui(P,st){P.ambientLightColor.needsUpdate=st,P.lightProbe.needsUpdate=st,P.directionalLights.needsUpdate=st,P.directionalLightShadows.needsUpdate=st,P.pointLights.needsUpdate=st,P.pointLightShadows.needsUpdate=st,P.spotLights.needsUpdate=st,P.spotLightShadows.needsUpdate=st,P.rectAreaLights.needsUpdate=st,P.hemisphereLights.needsUpdate=st}function ws(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,st,mt){ft.get(P.texture).__webglTexture=st,ft.get(P.depthTexture).__webglTexture=mt;let _t=ft.get(P);_t.__hasExternalTextures=!0,_t.__autoAllocateDepthBuffer=mt===void 0,_t.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_t.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,st){let mt=ft.get(P);mt.__webglFramebuffer=st,mt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(P,st=0,mt=0){A=P,I=st,E=mt;let _t=!0,at=null,Dt=!1,Xt=!1;if(P){let Kt=ft.get(P);if(Kt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(w.FRAMEBUFFER,null),_t=!1;else if(Kt.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(Kt.__hasExternalTextures)R.rebindTextures(P,ft.get(P.texture).__webglTexture,ft.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Qt=P.depthTexture;if(Kt.__boundDepthTexture!==Qt){if(Qt!==null&&ft.has(Qt)&&(P.width!==Qt.image.width||P.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}let ne=P.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Xt=!0);let ee=ft.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ee[st])?at=ee[st][mt]:at=ee[st],Dt=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?at=ft.get(P).__webglMultisampledFramebuffer:Array.isArray(ee)?at=ee[mt]:at=ee,v.copy(P.viewport),T.copy(P.scissor),K=P.scissorTest}else v.copy(O).multiplyScalar(et).floor(),T.copy(G).multiplyScalar(et).floor(),K=ot;if($.bindFramebuffer(w.FRAMEBUFFER,at)&&_t&&$.drawBuffers(P,at),$.viewport(v),$.scissor(T),$.setScissorTest(K),Dt){let Kt=ft.get(P.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+st,Kt.__webglTexture,mt)}else if(Xt){let Kt=ft.get(P.texture),ne=st||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Kt.__webglTexture,mt||0,ne)}F=-1},this.readRenderTargetPixels=function(P,st,mt,_t,at,Dt,Xt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=ft.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xt!==void 0&&($t=$t[Xt]),$t){$.bindFramebuffer(w.FRAMEBUFFER,$t);try{let Kt=P.texture,ne=Kt.format,ee=Kt.type;if(!V.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=P.width-_t&&mt>=0&&mt<=P.height-at&&w.readPixels(st,mt,_t,at,kt.convert(ne),kt.convert(ee),Dt)}finally{let Kt=A!==null?ft.get(A).__webglFramebuffer:null;$.bindFramebuffer(w.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(P,st,mt,_t,at,Dt,Xt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=ft.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xt!==void 0&&($t=$t[Xt]),$t){let Kt=P.texture,ne=Kt.format,ee=Kt.type;if(!V.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(st>=0&&st<=P.width-_t&&mt>=0&&mt<=P.height-at){$.bindFramebuffer(w.FRAMEBUFFER,$t);let Qt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Qt),w.bufferData(w.PIXEL_PACK_BUFFER,Dt.byteLength,w.STREAM_READ),w.readPixels(st,mt,_t,at,kt.convert(ne),kt.convert(ee),0);let xe=A!==null?ft.get(A).__webglFramebuffer:null;$.bindFramebuffer(w.FRAMEBUFFER,xe);let re=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await kd(w,re,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Qt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Dt),w.deleteBuffer(Qt),w.deleteSync(re),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,st=null,mt=0){P.isTexture!==!0&&(Wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),st=arguments[0]||null,P=arguments[1]);let _t=Math.pow(2,-mt),at=Math.floor(P.image.width*_t),Dt=Math.floor(P.image.height*_t),Xt=st!==null?st.x:0,$t=st!==null?st.y:0;R.setTexture2D(P,0),w.copyTexSubImage2D(w.TEXTURE_2D,mt,0,0,Xt,$t,at,Dt),$.unbindTexture()},this.copyTextureToTexture=function(P,st,mt=null,_t=null,at=0){P.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture function signature has changed."),_t=arguments[0]||null,P=arguments[1],st=arguments[2],at=arguments[3]||0,mt=null);let Dt,Xt,$t,Kt,ne,ee;mt!==null?(Dt=mt.max.x-mt.min.x,Xt=mt.max.y-mt.min.y,$t=mt.min.x,Kt=mt.min.y):(Dt=P.image.width,Xt=P.image.height,$t=0,Kt=0),_t!==null?(ne=_t.x,ee=_t.y):(ne=0,ee=0);let Qt=kt.convert(st.format),xe=kt.convert(st.type);R.setTexture2D(st,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,st.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,st.unpackAlignment);let re=w.getParameter(w.UNPACK_ROW_LENGTH),Ue=w.getParameter(w.UNPACK_IMAGE_HEIGHT),fn=w.getParameter(w.UNPACK_SKIP_PIXELS),_e=w.getParameter(w.UNPACK_SKIP_ROWS),te=w.getParameter(w.UNPACK_SKIP_IMAGES),Xe=P.isCompressedTexture?P.mipmaps[at]:P.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Xe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,$t),w.pixelStorei(w.UNPACK_SKIP_ROWS,Kt),P.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,at,ne,ee,Dt,Xt,Qt,xe,Xe.data):P.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,at,ne,ee,Xe.width,Xe.height,Qt,Xe.data):w.texSubImage2D(w.TEXTURE_2D,at,ne,ee,Dt,Xt,Qt,xe,Xe),w.pixelStorei(w.UNPACK_ROW_LENGTH,re),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ue),w.pixelStorei(w.UNPACK_SKIP_PIXELS,fn),w.pixelStorei(w.UNPACK_SKIP_ROWS,_e),w.pixelStorei(w.UNPACK_SKIP_IMAGES,te),at===0&&st.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(P,st,mt=null,_t=null,at=0){P.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),mt=arguments[0]||null,_t=arguments[1]||null,P=arguments[2],st=arguments[3],at=arguments[4]||0);let Dt,Xt,$t,Kt,ne,ee,Qt,xe,re,Ue=P.isCompressedTexture?P.mipmaps[at]:P.image;mt!==null?(Dt=mt.max.x-mt.min.x,Xt=mt.max.y-mt.min.y,$t=mt.max.z-mt.min.z,Kt=mt.min.x,ne=mt.min.y,ee=mt.min.z):(Dt=Ue.width,Xt=Ue.height,$t=Ue.depth,Kt=0,ne=0,ee=0),_t!==null?(Qt=_t.x,xe=_t.y,re=_t.z):(Qt=0,xe=0,re=0);let fn=kt.convert(st.format),_e=kt.convert(st.type),te;if(st.isData3DTexture)R.setTexture3D(st,0),te=w.TEXTURE_3D;else if(st.isDataArrayTexture||st.isCompressedArrayTexture)R.setTexture2DArray(st,0),te=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,st.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,st.unpackAlignment);let Xe=w.getParameter(w.UNPACK_ROW_LENGTH),Me=w.getParameter(w.UNPACK_IMAGE_HEIGHT),An=w.getParameter(w.UNPACK_SKIP_PIXELS),Ii=w.getParameter(w.UNPACK_SKIP_ROWS),dn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ue.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ue.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Kt),w.pixelStorei(w.UNPACK_SKIP_ROWS,ne),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ee),P.isDataTexture||P.isData3DTexture?w.texSubImage3D(te,at,Qt,xe,re,Dt,Xt,$t,fn,_e,Ue.data):st.isCompressedArrayTexture?w.compressedTexSubImage3D(te,at,Qt,xe,re,Dt,Xt,$t,fn,Ue.data):w.texSubImage3D(te,at,Qt,xe,re,Dt,Xt,$t,fn,_e,Ue),w.pixelStorei(w.UNPACK_ROW_LENGTH,Xe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Me),w.pixelStorei(w.UNPACK_SKIP_PIXELS,An),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ii),w.pixelStorei(w.UNPACK_SKIP_IMAGES,dn),at===0&&st.generateMipmaps&&w.generateMipmap(te),$.unbindTexture()},this.initRenderTarget=function(P){ft.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),$.unbindTexture()},this.resetState=function(){I=0,E=0,A=null,$.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Kl?"display-p3":"srgb",e.unpackColorSpace=Ee.workingColorSpace===Ma?"display-p3":"srgb"}};var aa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ir=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},gl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new S,ca=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nn=class extends qn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ks,Tr=new S,Vs=new S,Gs=new S,Ws=new Bt,Ar=new Bt,Ku=new ie,Co=new S,Rr=new S,Po=new S,_u=new Bt,cc=new Bt,yu=new Bt,Yn=class extends Ye{constructor(t=new Nn){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gl(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new ca(n,3,0,!1)),ks.setAttribute("uv",new ca(n,2,3,!1))}this.geometry=ks,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Ku.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Io(Co.set(-.5,-.5,0),Gs,o,Vs,s,r),Io(Rr.set(.5,-.5,0),Gs,o,Vs,s,r),Io(Po.set(.5,.5,0),Gs,o,Vs,s,r),_u.set(0,0),cc.set(1,0),yu.set(1,1);let a=t.ray.intersectTriangle(Co,Rr,Po,!1,Tr);if(a===null&&(Io(Rr.set(-.5,.5,0),Gs,o,Vs,s,r),cc.set(0,1),a=t.ray.intersectTriangle(Co,Po,Rr,!1,Tr),a===null))return;let c=t.ray.origin.distanceTo(Tr);c<t.near||c>t.far||e.push({distance:c,point:Tr.clone(),uv:ki.getInterpolation(Tr,Co,Rr,Po,_u,cc,yu,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Io(i,t,e,n,s,r){Ws.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ar.x=r*Ws.x-s*Ws.y,Ar.y=s*Ws.x+r*Ws.y):Ar.copy(Ws),i.copy(t),i.x+=Ar.x,i.y+=Ar.y,i.applyMatrix4(Ku)}var _l=class extends Sn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=hn,h=hn,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var la=class extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xs=new ie,xu=new ie,Lo=[],Mu=new wi,O_=new ie,Cr=new Tt,Pr=new Ti,sr=class extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new la(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,O_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Mu.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Mu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Pr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),xu.multiplyMatrices(n,Xs),Cr.matrixWorld=xu,Cr.raycast(t,Lo);for(let o=0,a=Lo.length;o<a;o++){let c=Lo[o];c.instanceId=r,c.object=this,e.push(c)}Lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _l(new Float32Array(s*this.count),s,this.count,Xl,ti));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Wr=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ha=new S,ua=new S,vu=new ie,Ir=new Vr,Uo=new Ti,lc=new S,bu=new S,fa=class extends Ye{constructor(t=new be,e=new Wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),ua.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ha.distanceTo(ua);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,t.ray.intersectsSphere(Uo)===!1)return;vu.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,d=g-1;_<d;_+=l){let f=h.getX(_),y=h.getX(_+1),x=Do(this,t,Ir,c,f,y);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),d=h.getX(m),f=Do(this,t,Ir,c,_,d);f&&e.push(f)}}else{let m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=m,d=g-1;_<d;_+=l){let f=Do(this,t,Ir,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=Do(this,t,Ir,c,g-1,m);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Do(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(ha.fromBufferAttribute(o,s),ua.fromBufferAttribute(o,r),e.distanceSqToSegment(ha,ua,lc,bu)>n)return;lc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lc);if(!(c<t.near||c>t.far))return{distance:c,point:bu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Xi=class extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eu=new ie,yl=new Vr,No=new Ti,Ho=new S,qi=class extends Ye{constructor(t=new be,e=new Xi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Eu.copy(s).invert(),yl.copy(t.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let p=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=p,_=m;g<_;g++){let d=l.getX(g);Ho.fromBufferAttribute(u,d),Su(Ho,d,c,s,t,e,this)}}else{let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,_=m;g<_;g++)Ho.fromBufferAttribute(u,g),Su(Ho,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Su(i,t,e,n,s,r,o){let a=yl.distanceSqToPoint(i);if(a<e){let c=new S;yl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Hn=class extends Sn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Bt:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new S,s=[],r=[],o=[],a=new S,c=new ie;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(nn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(nn(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xr=class extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Bt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*h-m*u+this.aX,l=p*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xl=class extends Xr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Fo=new S,hc=new jl,uc=new jl,fc=new jl,Ml=class extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new S){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Fo.subVectors(s[0],s[1]).add(s[0]),l=Fo);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),hc.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,_,d),uc.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,_,d),fc.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),uc.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),fc.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(hc.calc(c),uc.calc(c),fc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new S().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function B_(i,t){let e=1-i;return e*e*t}function z_(i,t){return 2*(1-i)*i*t}function k_(i,t){return i*i*t}function Fr(i,t,e,n){return B_(i,t)+z_(i,e)+k_(i,n)}function V_(i,t){let e=1-i;return e*e*e*t}function G_(i,t){let e=1-i;return 3*e*e*i*t}function W_(i,t){return 3*(1-i)*i*i*t}function X_(i,t){return i*i*i*t}function Or(i,t,e,n,s){return V_(i,t)+G_(i,e)+W_(i,n)+X_(i,s)}var da=class extends Fn{constructor(t=new Bt,e=new Bt,n=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vl=class extends Fn{constructor(t=new S,e=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new S){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y),Or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pa=class extends Fn{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends Fn{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Fn{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,s.x,r.x,o.x),Fr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},El=class extends Fn{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,s.x,r.x,o.x),Fr(t,s.y,r.y,o.y),Fr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(wu(a,c.x,l.x,h.x,u.x),wu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}},Tu=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:Ml,CubicBezierCurve:da,CubicBezierCurve3:vl,EllipseCurve:Xr,LineCurve:pa,LineCurve3:bl,QuadraticBezierCurve:ma,QuadraticBezierCurve3:El,SplineCurve:ga}),Sl=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Tu[s.type]().fromJSON(s))}return this}},wl=class extends Sl{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new pa(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ma(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new da(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s),new Bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Xr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tl=class i extends be{constructor(t=[new Bt(0,-.5),new Bt(.5,0),new Bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=nn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new S,p=new Bt,m=new S,g=new S,_=new S,d=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:d=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,m.x=f*1,m.y=-d,m.z=f*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:d=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,m.x=f*1,m.y=-d,m.z=f*0,g.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*s,M=Math.sin(x),I=Math.cos(x);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*M,u.y=t[E].y,u.z=t[E].x*I,o.push(u.x,u.y,u.z),p.x=y/e,p.y=E/(t.length-1),a.push(p.x,p.y);let A=c[3*E+0]*M,F=c[3*E+1],Q=c[3*E+0]*I;l.push(A,F,Q)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,I=M,E=M+t.length,A=M+t.length+1,F=M+1;r.push(I,E,F),r.push(A,F,E)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},qr=class i extends Tl{constructor(t=1,e=1,n=4,s=8){let r=new wl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Yr=class i extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new S,h=new Bt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let m=n+u/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ge=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],m=[],g=0,_=[],d=n/2,f=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(p,3)),this.setAttribute("uv",new ae(m,2));function y(){let M=new S,I=new S,E=0,A=(e-t)/n;for(let F=0;F<=r;F++){let Q=[],v=F/r,T=v*(e-t)+t;for(let K=0;K<=s;K++){let nt=K/s,ct=nt*c+a,vt=Math.sin(ct),ht=Math.cos(ct);I.x=T*vt,I.y=-v*n+d,I.z=T*ht,u.push(I.x,I.y,I.z),M.set(vt,A,ht).normalize(),p.push(M.x,M.y,M.z),m.push(nt,1-v),Q.push(g++)}_.push(Q)}for(let F=0;F<s;F++)for(let Q=0;Q<r;Q++){let v=_[Q][F],T=_[Q+1][F],K=_[Q+1][F+1],nt=_[Q][F+1];t>0&&(h.push(v,T,nt),E+=3),e>0&&(h.push(T,K,nt),E+=3)}l.addGroup(f,E,0),f+=E}function x(M){let I=g,E=new Bt,A=new S,F=0,Q=M===!0?t:e,v=M===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,d*v,0),p.push(0,v,0),m.push(.5,.5),g++;let T=g;for(let K=0;K<=s;K++){let ct=K/s*c+a,vt=Math.cos(ct),ht=Math.sin(ct);A.x=Q*ht,A.y=d*v,A.z=Q*vt,u.push(A.x,A.y,A.z),p.push(0,v,0),E.x=vt*.5+.5,E.y=ht*.5*v+.5,m.push(E.x,E.y),g++}for(let K=0;K<s;K++){let nt=I+K,ct=T+K;M===!0?h.push(ct,ct+1,nt):h.push(ct+1,ct,nt),F+=3}l.addGroup(f,F,M===!0?1:2),f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pn=class i extends Ge{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Al=class i extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new S,M=new S,I=new S;for(let E=0;E<e.length;E+=3)m(e[E+0],x),m(e[E+1],M),m(e[E+2],I),c(x,M,I,y)}function c(y,x,M,I){let E=I+1,A=[];for(let F=0;F<=E;F++){A[F]=[];let Q=y.clone().lerp(M,F/E),v=x.clone().lerp(M,F/E),T=E-F;for(let K=0;K<=T;K++)K===0&&F===E?A[F][K]=Q:A[F][K]=Q.clone().lerp(v,K/T)}for(let F=0;F<E;F++)for(let Q=0;Q<2*(E-F)-1;Q++){let v=Math.floor(Q/2);Q%2===0?(p(A[F][v+1]),p(A[F+1][v]),p(A[F][v])):(p(A[F][v+1]),p(A[F+1][v+1]),p(A[F+1][v]))}}function l(y){let x=new S;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new S;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=d(y)/2/Math.PI+.5,I=f(y)/Math.PI+.5;o.push(M,1-I)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],I=o[y+4],E=Math.max(x,M,I),A=Math.min(x,M,I);E>.9&&A<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function m(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new S,x=new S,M=new S,I=new S,E=new Bt,A=new Bt,F=new Bt;for(let Q=0,v=0;Q<r.length;Q+=9,v+=6){y.set(r[Q+0],r[Q+1],r[Q+2]),x.set(r[Q+3],r[Q+4],r[Q+5]),M.set(r[Q+6],r[Q+7],r[Q+8]),E.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),F.set(o[v+4],o[v+5]),I.copy(y).add(x).add(M).divideScalar(3);let T=d(I);_(E,v+0,y,T),_(A,v+2,x,T),_(F,v+4,M,T)}}function _(y,x,M,I){I<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=I/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var je=class i extends Al{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Mn=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new S,p=new S,m=[],g=[],_=[],d=[];for(let f=0;f<=n;f++){let y=[],x=f/n,M=0;f===0&&o===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){let E=I/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),d.push(E+M,1-x),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let x=h[f][y+1],M=h[f][y],I=h[f+1][y],E=h[f+1][y+1];(f!==0||o>0)&&m.push(x,M,E),(f!==n-1||c<Math.PI)&&m.push(M,I,E)}this.setIndex(m),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ni=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new S,u=new S,p=new S;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let _=g/s*r,d=m/n*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(_),u.y=(t+e*Math.cos(d))*Math.sin(_),u.z=e*Math.sin(d),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let _=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,y=(s+1)*m+g;o.push(_,d,y),o.push(d,f,y)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Se=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var rr=class extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Oo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function q_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var or=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rl=class extends or{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=t,a=2*e-n;break;case Ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Th:o=t,c=2*n-e;break;case Ah:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),_=g*g,d=_*g,f=-p*d+2*p*_-p*g,y=(1+p)*d+(-1.5-2*p)*_+(-.5+p)*g+1,x=(-1-m)*d+(1.5+m)*_+.5*g,M=m*d-m*_;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+y*o[l+I]+x*o[c+I]+M*o[u+I];return r}},Cl=class extends or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*u+o[c+p]*h;return r}},Pl=class extends or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oo(e,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oo(t.times,Array),values:Oo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xo:e=this.InterpolantFactoryMethodDiscrete;break;case Qc:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return Qc;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&q_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,p=u-n,m=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[p+g]||_!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let m=0;m!==n;++m)e[p+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Qc;var ms=class extends Zn{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Xo;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Zn{};Il.prototype.ValueTypeName="color";var Ll=class extends Zn{};Ll.prototype.ValueTypeName="number";var Ul=class extends or{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ke.slerpFlat(r,0,o,l-a,o,l,c);return r}},_a=class extends Zn{InterpolantFactoryMethodLinear(t){return new Ul(this.times,this.values,this.getValueSize(),t)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Zn{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Xo;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Zn{};Dl.prototype.ValueTypeName="vector";var Nl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Y_=new Nl,Hl=class{constructor(t){this.manager=t!==void 0?t:Y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ar=class extends Zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dc=new ie,Au=new S,Ru=new S,ya=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Cu=new ie,Lr=new S,pc=new S,Fl=class extends ya{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Lr),pc.copy(n.position),pc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pc),n.updateMatrixWorld(),s.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu)}},$n=class extends Zr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ol=class extends ya{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Ol}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var th="\\[\\]\\.:\\/",Z_=new RegExp("["+th+"]","g"),eh="[^"+th+"]",$_="[^"+th.replace("\\.","")+"]",K_=/((?:WC+[\/:])*)/.source.replace("WC",eh),J_=/(WCOD+)?/.source.replace("WCOD",$_),Q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),j_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),t1=new RegExp("^"+K_+J_+Q_+j_+"$"),e1=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Z_,"")}static parseTrackName(t){let e=t1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);e1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Bl;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Ju=[{id:"verdant",name:"Verdant Staff",streak:0,gem:"#6dff6a",blurb:"Carved from an ancient tree. It channels the natural energy of the earth and life."},{id:"ember",name:"Ember Staff",streak:5,gem:"#ff7a1a",blurb:"Forged from volcanic rock and blessed by fire spirits."},{id:"tide",name:"Tide Staff",streak:10,gem:"#3fb8ff",blurb:"Crafted from crystal and oceanic runes. It flows with the tides."},{id:"storm",name:"Storm Staff",streak:15,gem:"#b26bff",blurb:"A relic of the sky temples. It channels lightning."},{id:"void",name:"Void Staff",streak:20,gem:"#4a7dff",blurb:"An ancient, otherworldly artifact. It bends reality and commands the unknown."},{id:"frost",name:"Frost Staff",streak:0,season:1,base:"tide",tint:"#d8f4ff",gem:"#bfefff",blurb:"January reward. Rimed with ice that never melts."},{id:"blossom",name:"Blossom Staff",streak:0,season:3,base:"verdant",tint:"#ffb8d8",gem:"#ff7ab8",blurb:"March reward. A branch that flowers whenever it casts."},{id:"jade",name:"Jade Staff",streak:0,season:5,base:"ember",tint:"#7dffb0",gem:"#3dff8a",blurb:"May reward. Carved from one piece of temple jade."},{id:"abyss",name:"Abyss Staff",streak:0,season:7,base:"tide",tint:"#3a5cff",gem:"#2a4dff",blurb:"July reward. Pulled from the deepest trench of the sea."},{id:"moon",name:"Moon Staff",streak:0,season:9,base:"verdant",tint:"#f2f0ff",gem:"#fff6c8",blurb:"September reward. Silver light of the harvest moon."},{id:"maple",name:"Maple Staff",streak:0,season:11,base:"ember",tint:"#ff5a3a",gem:"#ff3a2a",blurb:"November reward. Burning red like autumn leaves."}];var Qu=i=>Ju.find(t=>t.id===i)??Ju[0];function tf(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296};return{random:e,uniform:(o,a)=>o+(a-o)*e(),gauss:()=>{let o=0;for(;o===0;)o=e();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e())},choice:o=>o[Math.floor(e()*o.length)%o.length]}}var ba=(i,t,e)=>i+(t-i)*e,ef=i=>Math.min(1,Math.max(0,i)),Jr=(i,t)=>Math.max(0,i)**t;function sh(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n])return t[n-1]+(t[n]-t[n-1])*((e-i[n-1])/(i[n]-i[n-1]));return t[t.length-1]}var nf=(i,t,e)=>new rn(i,t,e,"ZYX"),hr=class{constructor(t,e={}){Fe(this,"n",t);Fe(this,"geo",new be);Fe(this,"per");Fe(this,"radial");Fe(this,"closed");Fe(this,"sharp");Fe(this,"caps");Fe(this,"samples");Fe(this,"pos");Fe(this,"nor");this.per=e.per??4,this.radial=e.radial??6,this.closed=!!e.closed,this.sharp=!!e.sharp,this.caps=e.caps??!e.closed;let n=this.closed?t:t-1;this.samples=n*this.per+1;let s=this.radial+1,r=this.samples*s+(this.caps?2:0);this.pos=new Float32Array(r*3),this.nor=new Float32Array(r*3);let o=new Float32Array(r*2),a=[];for(let c=0;c<this.samples;c++)for(let l=0;l<=this.radial;l++)o[(c*s+l)*2]=c/(this.samples-1),o[(c*s+l)*2+1]=l/this.radial;for(let c=0;c<this.samples-1;c++)for(let l=0;l<this.radial;l++){let h=c*s+l,u=h+s;a.push(h,u,h+1,u,u+1,h+1)}if(this.caps){let c=this.samples*s,l=c+1,h=(this.samples-1)*s;for(let u=0;u<this.radial;u++)a.push(c,u+1,u),a.push(l,h+u,h+u+1)}this.geo.setAttribute("position",new Re(this.pos,3)),this.geo.setAttribute("normal",new Re(this.nor,3)),this.geo.setAttribute("uv",new Re(o,2)),this.geo.setIndex(a)}set(t,e){let{n,per:s,radial:r,closed:o,samples:a}=this,c=new Float32Array(a*3),l=new Float32Array(a),h=y=>t[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))],u=y=>typeof e=="number"?e:e[o?(y%n+n)%n:Math.min(n-1,Math.max(0,y))];for(let y=0;y<a;y++){let x=Math.floor(y/s),M=y%s/s;!o&&x>=n-1&&(x=n-2,M=1);let I=h(x),E=h(x+1);for(let A=0;A<3;A++)if(this.sharp)c[y*3+A]=I[A]+(E[A]-I[A])*M;else{let F=o||x>0?h(x-1)[A]:2*I[A]-E[A],Q=o||x+2<n?h(x+2)[A]:2*E[A]-I[A],v=M*M,T=v*M;c[y*3+A]=.5*(2*I[A]+(-F+E[A])*M+(2*F-5*I[A]+4*E[A]-Q)*v+(-F+3*I[A]-3*E[A]+Q)*T)}l[y]=Math.max(1e-4,Math.abs(u(x)+(u(x+1)-u(x))*M))}let p=new S,m=new S,g=new S,_=new S,d=y=>{let x=o?(y-1+a-1)%(a-1):Math.max(0,y-1),M=o?(y+1)%(a-1):Math.min(a-1,y+1);return p.set(c[M*3]-c[x*3],c[M*3+1]-c[x*3+1],c[M*3+2]-c[x*3+2]),p.lengthSq()<1e-12&&p.set(0,0,1),p.normalize()};d(0),_.set(Math.abs(p.x)<.9?1:0,Math.abs(p.x)<.9?0:1,0),m.crossVectors(p,_).normalize();let f=r+1;for(let y=0;y<a;y++){d(y),m.addScaledVector(p,-m.dot(p)),m.lengthSq()<1e-10&&(_.set(0,1,0),m.crossVectors(p,_),m.lengthSq()<1e-10&&m.set(1,0,0)),m.normalize(),g.crossVectors(p,m);for(let x=0;x<=r;x++){let M=x/r*Math.PI*2,I=Math.cos(M),E=Math.sin(M),A=I*m.x+E*g.x,F=I*m.y+E*g.y,Q=I*m.z+E*g.z,v=(y*f+x)*3;this.nor[v]=A,this.nor[v+1]=F,this.nor[v+2]=Q,this.pos[v]=c[y*3]+l[y]*A,this.pos[v+1]=c[y*3+1]+l[y]*F,this.pos[v+2]=c[y*3+2]+l[y]*Q}if(this.caps&&(y===0||y===a-1)){let x=(a*f+(y?1:0))*3,M=y?1:-1;this.pos[x]=c[y*3],this.pos[x+1]=c[y*3+1],this.pos[x+2]=c[y*3+2],this.nor[x]=p.x*M,this.nor[x+1]=p.y*M,this.nor[x+2]=p.z*M}}return this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.computeBoundingSphere(),this}};function We(i,t,e={}){return new hr(i.length,e).set(i,t).geo}function Jn(i,t,e,n=12,s=.35,r={}){let o=new ie().makeRotationFromEuler(nf(...t)),a=[],c=[],l=new S;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;l.set(i*Math.cos(u),i*Math.sin(u),0).applyMatrix4(o),a.push([l.x,l.y,l.z]),c.push(e*(1+s*Math.sin(3*u)))}return We(a,c,{closed:!0,per:6,...r})}function Ci(i,t,e,n,s,r=0,o=0,a,c){let l=typeof i=="number"?()=>i:i,h=[];for(let u=0;u<s;u++){let p=u/(s-1),m=r+2*Math.PI*n*p,g=t+(e-t)*p,_=l(p)+(a&&o?a.uniform(-o,o):0),[d,f]=c?c(g):[0,0];h.push([d+_*Math.cos(m),f+_*Math.sin(m),g])}return h}var Sa=(i,t,e=[7,5])=>[t*Math.sin(i*e[0]),t*Math.cos(i*e[1]+1)];function On(i,t,e,n,s){let r=[],o=c=>{let l=2*Math.PI*c/n;return[e*Math.cos(l),e*Math.sin(l),0]};for(let c=0;c<n;c++){let l=o(c),h=o(c+1);r.push(...l,...h,0,0,i),r.push(...h,...l,0,0,-t)}let a=new be;return a.setAttribute("position",new ae(r,3)),a.setAttribute("uv",new ae(new Array(r.length/3*2).fill(.5),2)),s&&a.applyMatrix4(new ie().makeRotationFromEuler(nf(...s))),a.computeVertexNormals(),a}function rh(i,t,e){let n=[],s=[],r=[];for(let a=0;a<=t;a++)for(let c=0;c<=i;c++)n.push(...e(c/i,a/t,c,a)),s.push(c/i,a/t);for(let a=0;a<t;a++)for(let c=0;c<i;c++){let l=a*(i+1)+c,h=l+i+1;r.push(l,l+1,h+1,l,h+1,h)}let o=new be;return o.setAttribute("position",new ae(n,3)),o.setAttribute("uv",new ae(s,2)),o.setIndex(r),o.computeVertexNormals(),o}var Ea=class{constructor(){Fe(this,"parts",new Map)}add(t,e,n,s,r){let o=t.index?t:n1(t),a=new ie().compose(n?Array.isArray(n)?new S(...n):n:new S,new Ke().setFromEuler(s??new rn),r===void 0?new S(1,1,1):typeof r=="number"?new S(r,r,r):new S(...r)),c=o===t?o.clone():o;c.applyMatrix4(a);let l=this.parts.get(e)??[];l.push(c),this.parts.set(e,l)}build(t){let e=[];for(let[n,s]of this.parts){let r=new Tt(oh(s),n);t.add(r),e.push(r);for(let o of s)o.dispose()}return this.parts.clear(),e}};function n1(i){let t=i.clone(),e=t.attributes.position.count;return t.setIndex(Array.from({length:e},(n,s)=>s)),t}function oh(i){let t=0,e=0;for(let p of i)t+=p.attributes.position.count,e+=p.index.count;let n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),a=i.some(p=>p.attributes.color)?new Float32Array(t*3).fill(1):null,c=t>65535?new Uint32Array(e):new Uint16Array(e),l=0,h=0;for(let p of i){let m=p.attributes.position.count;n.set(p.attributes.position.array,l*3),p.attributes.normal||p.computeVertexNormals(),s.set(p.attributes.normal.array,l*3),p.attributes.uv&&r.set(p.attributes.uv.array,l*2),a&&p.attributes.color&&a.set(p.attributes.color.array,l*3);let g=p.index.array;for(let _=0;_<g.length;_++)c[h+_]=g[_]+l;l+=m,h+=g.length}let u=new be;return u.setAttribute("position",new Re(n,3)),u.setAttribute("normal",new Re(s,3)),u.setAttribute("uv",new Re(r,2)),a&&u.setAttribute("color",new Re(a,3)),u.setIndex(new Re(c,1)),u.computeBoundingSphere(),u}var ju=new Map;function nh(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function ih(i,t,e,n=4,s=1){let r=0,o=.5,a=0,c=e,l=i,h=t;for(let u=0;u<n;u++){let p=Math.floor(l),m=Math.floor(h),g=l-p,_=h-m,d=g*g*(3-2*g),f=_*_*(3-2*_),y=(M,I)=>nh((M%c+c)%c,(I%c+c)%c,s+u),x=ba(ba(y(p,m),y(p+1,m),d),ba(y(p,m+1),y(p+1,m+1),d),f);r+=x*o,a+=o,o*=.5,l*=2,h*=2,c*=2}return r/a}function sf(i,t,e,n=[1,1]){let s=ju.get(i);if(!s){let o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),c=a.createImageData(t,t);e(c),a.putImageData(c,0,0),s=new Hn(o),s.wrapS=s.wrapT=ds,ju.set(i,s)}let r=s.clone();return r.repeat.set(...n),r.needsUpdate=!0,r}var rf=(i,t,e,n,s)=>{i.data[t*4]=e,i.data[t*4+1]=n,i.data[t*4+2]=s,i.data[t*4+3]=255};function _s(i=1,t=[1,1],e=.35,n=1.25){return sf(`noise${i}`,128,s=>{for(let r=0;r<128;r++)for(let o=0;o<128;o++){let a=ih(o/(16*i),r/8,128/(16*i),4,3),c=Math.round(255*Math.min(1,ba(e,n,a)/1.25));rf(s,r*128+o,c,c,c)}},t)}function of(i=6,t=.11,e=[1,1]){return sf(`vein${i}:${t}`,128,n=>{let s=[];for(let r=0;r<i;r++)for(let o=0;o<i;o++)s.push([(o+nh(o,r,9))/i,(r+nh(o,r,11))/i]);for(let r=0;r<128;r++)for(let o=0;o<128;o++){let a=o/128+(ih(o/16,r/16,8,2,5)-.5)*.08,c=r/128+(ih(o/16+7,r/16,8,2,6)-.5)*.08,l=9,h=9;for(let[g,_]of s)for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){let y=a-g-f,x=c-_-d,M=Math.sqrt(y*y+x*x);M<l?(h=l,l=M):M<h&&(h=M)}let u=(h-l)*i*.5,p=u<t*.45?1:u<t?1-(u-t*.45)/(t*.55):0,m=Math.round(255*p*p);rf(n,r*128+o,m,m,m)}},e)}var Zi=1.13,Qr=.66,se=(i,t,e)=>new zt(i,t,e);function i1(i,t){let e=(r,o=!0)=>(o?i.push(r):t.push(r),r),n=(r,o=1.7)=>r.clone().multiplyScalar(o),s=r=>Math.min(2.4,.55+r*.13);return{bark:(r,o)=>e(new Se({color:n(o,1.5),map:_s(4,[3,2]),roughness:.9,emissive:r.clone().multiplyScalar(.4)})),plain:(r,o=.5)=>e(new Se({color:n(r),roughness:o})),leaf:(r,o)=>e(new Se({color:n(o,1.6),map:_s(1,[2,2],.45),roughness:.45,side:Ie,emissive:r.clone().multiplyScalar(.6)})),metal:(r,o=.28)=>e(new Se({color:n(r,1.25),metalness:.55,roughness:o+.12})),veins:(r,o,a,c=6,l=.11,h=.1)=>e(new Se({color:n(r,2.4),map:_s(1,[3,2]),emissive:o,emissiveMap:of(c,l,[4,2]),emissiveIntensity:s(a),roughness:.6,metalness:h})),lava:()=>e(new Se({color:se(.3,.05,0),emissive:se(1,.22,.015),emissiveMap:_s(2,[6,1],.55),emissiveIntensity:1.6,roughness:.6})),core:(r,o,a,c=Dn)=>e(new Se({color:o,emissive:r,emissiveMap:_s(1,[2,2],.6),emissiveIntensity:s(a),roughness:.4,side:c})),emissive:(r,o)=>e(new Se({color:r.clone().multiplyScalar(.15),emissive:r,emissiveIntensity:s(o),roughness:.4})),crystal:(r,o)=>e(new Se({color:n(r,1.3),emissive:r,emissiveIntensity:.35+o*.15,roughness:.08,metalness:.1,flatShading:!0,transparent:!0,opacity:.9})),glass:(r,o=.3)=>e(new Se({color:r,emissive:r.clone().multiplyScalar(.25),roughness:.04,metalness:.3,transparent:!0,opacity:o,depthWrite:!1}),!1),water:()=>e(new Se({color:se(.55,.82,1),map:_s(2,[4,1],.7),emissive:se(.1,.5,1),emissiveIntensity:.45,roughness:.05,metalness:.2,transparent:!0,opacity:.72}),!1)}}var xs=i=>Math.max(8,Math.round(i*.5)),jr=i=>Math.max(1,Math.round(i*.45)),wa=i=>i-Math.floor(i);function s1(i,t,e,n,s,r=.09,o=.1){let a=i+n,c=(a%t+t)%t;return s*2*Math.PI*e*(Math.floor(a/t)+1-Math.exp(-r*c)*(Math.cos(o*c)+r/o*Math.sin(o*c)))}function r1(i,t,e,n=8,s=10,r=20){let o=((i+e)%t+t)%t;return(.5-.5*Math.cos(Math.PI*Math.min(1,o/n)))*(.5+.5*Math.cos(Math.PI*Math.min(1,Math.max(0,(o-s)/r))))}function af(i,t,e,n){let s=[];for(let r=0;r<t;r++){let o=new S(i.gauss(),i.gauss(),i.gauss());o.lengthSq()<1e-9&&o.set(0,0,1),o.normalize().multiplyScalar(i.uniform(e,n)),s.push([o.x,o.y,o.z])}return s}function ah(i,t,e,n,s,r){let o=[t];for(let a=1;a<n;a++)o.push([0,1,2].map(c=>t[c]+(e[c]-t[c])*(a/n)+i.uniform(-1,1)*s));return o.push(e),We(o,o.map((a,c)=>r*(1-.7*c/n)),{sharp:!0,per:1,radial:4})}function o1(i,t,e,n,s,r,o,a=.45){return rh(4,10,(c,l)=>{let h=2*c-1,u=.07+s*Math.sin(Math.min(l*1.5,1)*Math.PI/2)-r*l**3,p=t+e*l,m=i+o*l,g=n*Math.max(.03,Jr(1-l**2.4,.5))*(a+(1-a)*Math.min(1,l*4)),_=u-Math.abs(h)*g*.5,d=h*g,f=Math.cos(m),y=Math.sin(m);return[_*f-d*y,_*y+d*f,p]})}function a1(i=.14,t=.055){return rh(3,6,(e,n)=>{let s=2*e-1,r=t*(.04+Jr(Math.sin(Math.PI*n**.75),.9));return[s*r,n*i,-Math.abs(s)*r*.45-.18*i*n*n]})}var ys=new Ye;function ur(i,t,e,n,s){ys.position.set(e[0],e[1],e[2]),typeof n=="number"?ys.scale.setScalar(Math.max(1e-5,n)):ys.scale.set(Math.max(1e-5,n[0]),Math.max(1e-5,n[1]),Math.max(1e-5,n[2])),s?ys.rotation.set(s[0],s[1],s[2],"ZYX"):ys.rotation.set(0,0,0),ys.updateMatrix(),i.setMatrixAt(t,ys.matrix)}var lh=new je(1,1),ch=(i,t,e)=>{let n=[t.map,t.emissiveMap].filter(Boolean);i.anim((s,r)=>{for(let o of n)o.offset.x-=r*e})};function c1(i){let{rng:t,m:e}=i,n=e.bark(se(.045,.028,.014),se(.3,.19,.1)),s=e.plain(se(.1,.3,.05),.55),r=e.leaf(se(.015,.14,.02),se(.1,.34,.045)),o=.022,a=_=>Sa(_,o),c=[0,.14,.5,.95,1.4,1.85,2.2,2.42,2.55],l=[.02,.052,.058,.05,.056,.05,.06,.072,.078];i.stat(We(c.map(_=>[...a(_),_]),l,{radial:8,per:5}),n);for(let _=0;_<5;_++){let d=2*Math.PI*_/5+t.uniform(-.3,.3),f=Math.cos(d),y=Math.sin(d);i.stat(We([[.03*f,.03*y,.3],[.06*f,.06*y,.17],[.1*f,.1*y,.07],[.14*f,.14*y,.012]],[.04,.026,.016,.006],{radial:6}),n)}let h=[],u=(_,d,f)=>{h.push({p:_,rx:t.uniform(.2,.9),ry:t.uniform(-.3,.3),rz:d-Math.PI/2+t.uniform(-.5,.5),s:f,ph:t.uniform(0,6.28)})},p=[.02,.1,.21,.25,.2,.1],m=[2.46,2.62,2.8,3.02,3.24,3.38];for(let _=0;_<6;_++){let d=2*Math.PI*_/6+t.uniform(-.15,.15),f=p.map((y,x)=>{let M=d+.22*x;return[y*Math.cos(M),y*Math.sin(M),m[x]+t.uniform(-.02,.02)]});i.stat(We(f,[.034,.028,.022,.017,.011,.004],{radial:6,per:6}),n);for(let y of[2,4])u(f[y],Math.atan2(f[y][1],f[y][0]),t.uniform(.6,1))}[[.32,2.42,5.5,.4,.013],[.9,2.1,3,3.4,.008]].forEach(([_,d,f,y,x])=>{let M=xs(56),I=Ci(E=>sh(c,l,_+(d-_)*E)+.018,_,d,f,M,y,.004,t,a);i.stat(We(I,I.map((E,A)=>x*(1-.55*A/(M-1))),{radial:5,per:3}),s);for(let E=2;E<M-2;E+=Math.max(1,Math.floor((M-4)/jr(22)))){let A=I[E],F=a(A[2]);u(A,Math.atan2(A[1]-F[1],A[0]-F[0]),t.uniform(.7,1.3))}});let g=i.inst(a1(),r,h.length);return i.anim(_=>{h.forEach((d,f)=>ur(g,f,d.p,d.s,[d.rx+.16*Math.sin(_*.2094+d.ph),d.ry,d.rz+.1*Math.sin(_*.1309+d.ph*1.7)])),g.instanceMatrix.needsUpdate=!0}),{z:3,r:.16,glass:se(.45,1,.35),hot:se(.7,1,.3),mid:se(.15,.8,.05)}}function l1(i){let{rng:t,m:e}=i,n=e.veins(se(.085,.065,.055),se(1,.3,.03),2,7,.06,0);n.roughness=.9;let s=e.lava(),r=e.core(se(1,.36,.04),se(.9,.12,.01),2,Ie);ch(i,s,.25),ch(i,r,-.18);let o=.014,a=g=>Sa(g,o),c=[0,.12,.45,.9,1.35,1.8,2.2,2.42,2.55],l=[.03,.07,.05,.062,.052,.066,.056,.07,.085];i.stat(We(c.map(g=>[...a(g),g]),l,{radial:8,per:5}),n);let h=(g,_=.3,d=2.35)=>sh(c,l,_+(d-_)*g);for(let g=0;g<2;g++){let _=xs(60),d=Ci(f=>h(f)+.004,.3,2.35,4.5,_,g*Math.PI,0,void 0,a);i.stat(We(d,d.map((f,y)=>.012+.003*Math.sin(y*.5)),{radial:5,per:3}),n)}for(let g=0;g<2;g++){let _=xs(60),d=Ci(f=>h(f)-.002,.3,2.35,4.5,_,Math.PI/2+g*Math.PI,0,void 0,a);i.stat(We(d,d.map((f,y)=>.0085+.002*Math.sin(y*.7)),{radial:5,per:3}),s)}{let g=Ci(_=>h(_,.5,2.2)-.001,.5,2.2,-3,xs(50),.8,0,void 0,a);i.stat(We(g,.0055,{radial:4,per:3}),s)}i.stat(Jn(.088,[0,0,0],.016,10,.2),n,[0,0,2.5]),i.stat(Jn(.082,[0,0,0],.008,10,0),s,[0,0,2.55]);for(let g=0;g<5;g++)t.uniform(.62,.86);for(let g=0;g<8;g++)i.stat(o1(2*Math.PI*g/8+.1,2.5,t.uniform(.62,.85)+.12,.04,.13,.08,.6,.9),r);i.stat(Jn(.165,[0,0,0],.007,14,0),s,[0,0,2.86]);let u=6,p=[];for(let g=0;g<u;g++){let _=2*Math.PI*g/u+t.uniform(-.2,.2),d=t.uniform(.16,.2);p.push({p:[d*Math.cos(_),d*Math.sin(_),2.9],s:t.uniform(.01,.016),ph:t.random()})}let m=i.inst(lh,e.emissive(se(1,.45,.05),10),u);return i.anim(g=>{p.forEach((_,d)=>{let f=wa(g/60+_.ph),y=_.s*Math.min(1,f*6)*(1-.6*f);ur(m,d,[_.p[0],_.p[1],2.9-.8*f**1.6],[.85*y,.85*y,7*y])}),m.instanceMatrix.needsUpdate=!0}),{z:2.95,r:.14,glass:se(1,.45,.1),hot:se(1,.7,.15),mid:se(1,.25,.02)}}function h1(i){let{rng:t,m:e}=i,n=e.metal(se(.1,.12,.16),.3),s=e.metal(se(.78,.84,.9),.18),r=e.water(),o=e.crystal(se(.2,.7,1),2.5),a=e.crystal(se(.4,.8,1),1.5);ch(i,r,.3);let c=.006,l=_=>Sa(_,c),h=[.3,.6,1.2,1.8,2.2,2.4,2.55],u=[.036,.036,.034,.036,.04,.052,.06];i.stat(We(h.map(_=>[...l(_),_]),u,{radial:8,per:5}),n),i.stat(Jn(.066,[0,0,0],.012,10,0),s,[0,0,2.56]);for(let _=0;_<3;_++){let d=Math.cos(2*Math.PI*_/3+.5),f=Math.sin(2*Math.PI*_/3+.5);i.stat(We([[.04*d,.04*f,2.55],[.085*d,.085*f,2.68],[.12*d,.12*f,2.82],[.13*d,.13*f,2.93]],[.016,.012,.009,.004],{radial:6}),s)}for(let _=0;_<2;_++)i.stat(We(Ci(.05,.4,2.45,7,xs(72),_*Math.PI,0,void 0,l),.0075,{radial:4,per:3}),s);{let _=xs(64),d=Ci(M=>.058+.012*Math.sin(M*20),.45,2.5,3.2,_,1,0,void 0,l),f=d.map((M,I)=>.012+.014*(.5+.5*Math.sin(I*.45))),y=new hr(_,{radial:6,per:3});y.set(d,f),i.mesh(y.geo,r);let x=f.slice();i.anim(M=>{for(let I=0;I<_;I++)x[I]=f[I]*(1+.6*Math.sin(M*.2618-I*.7));y.set(d,x)})}[.7,1,1.35,1.7,2.05].forEach((_,d)=>{let f=d*2.1;i.stat(On(.035,.035,.014,4,[0,0,f]),o,[.047*Math.cos(f),.047*Math.sin(f),_])}),[["main",.34,.2,250,15,.05,0,.3,300,.022],["inner",.26,.17,215,55,.032,-.05,.22,250,.015]].forEach(([,_,d,f,y,x,M,I,E,A],F)=>{let v=20+F*50,T=F===0?1:-1,K=y<f?-1:1,nt=Math.PI/180,ct=Array.from({length:40},(ot,z)=>{let C=z/39;return{a:(f+(y-f)*C)*nt,b:f*nt+K*E*nt*C,R:_+(d-_)*C,y:M+.04*Math.sin(C*6),r:.004+x*Jr(Math.sin(Math.PI*C),.8)}}),vt=(ot,z,C,L)=>[ot*t.uniform(.35,1.4),z*t.uniform(.8,1.2),-L*C+t.uniform(-1.4,1.4),t.uniform(1,5)],ht=ct.map((ot,z)=>[vt(.07,.35,.9,z),vt(.035,.7,1.7,z),vt(.03,.3,1,z),vt(.015,.6,1.8,z),vt(.32,.45,.9,z),vt(.2,.8,1.6,z),vt(.1,1.3,2.3,z)]),et=new hr(40,{radial:6,per:2}),D=ct.map(()=>[0,0,0]),tt=ct.map(()=>0),O=i.mesh(et.geo,r,[0,0,3]);O.renderOrder=2;let G=ot=>{let z=s1(ot,120,1,v,T),C=r1(ot,120,v,12),L=Math.floor((ot+v)/120),B=X=>X[0]*Math.sin(ot*X[1]+X[2]+L*X[3]);ct.forEach((X,H)=>{let N=ht[H],k=X.a*(1-C)+X.b*C+z,q=X.R*(1-C)+I*(1+C*(B(N[0])+B(N[1])))*C;D[H][0]=q*Math.cos(k),D[H][2]=q*Math.sin(k),D[H][1]=X.y*(1-C)+(M+B(N[2])+B(N[3]))*C,tt[H]=X.r*(1+.3*(1-C)*Math.sin(ot*.2618-H*.8))*(1-C)+A*C*Math.max(.3,1+C*(B(N[4])+B(N[5])+B(N[6])))}),et.set(D,tt)};G(0),i.anim(G)});let p=[];for(let _=0;_<10;_++){let d=t.uniform(0,2*Math.PI),f=[Math.cos(d),0,Math.sin(d)],y=t.uniform(.2,.34),x=t.uniform(.12,.3);p.push({start:[f[0]*y,0,3+f[2]*y],vel:[f[0]*x+t.uniform(-.05,.05),t.uniform(-.1,.1),f[2]*x+t.uniform(.3,.6)],s:t.uniform(.006,.016),per:0,ph:0})}for(let _ of p)_.per=t.choice([60,80,96]),_.ph=t.random();let m=Array.from({length:jr(10)},()=>({p:[t.uniform(-.15,.15),t.uniform(-.1,.1),t.uniform(.6,2.4)],s:t.uniform(.006,.018)})),g=i.inst(lh,a,p.length+m.length);m.forEach((_,d)=>ur(g,p.length+d,_.p,_.s)),i.anim(_=>{p.forEach((d,f)=>{let y=wa(_/d.per+d.ph),x=y*.9;ur(g,f,[d.start[0]+d.vel[0]*x,d.start[1]+d.vel[1]*x,d.start[2]+d.vel[2]*x-.9*x*x],d.s*Math.min(1,y*10)*Math.min(1,(1-y)*5))}),g.instanceMatrix.needsUpdate=!0}),i.stat(On(.1,.32,.045,6),o,[0,0,.32]);for(let _=0;_<3;_++){let d=2*Math.PI*_/3;i.stat(On(.02,.12,.016,4,[Math.sin(d)*.4,-Math.cos(d)*.4,0]),o,[.045*Math.cos(d),.045*Math.sin(d),.36])}return{z:3,r:.145,glass:se(.3,.75,1),hot:se(.5,.95,1),mid:se(.05,.4,1)}}function u1(i){let{rng:t,m:e}=i,n=e.veins(se(.03,.02,.06),se(.85,.6,1),3,6,.09,.5),s=e.metal(se(.62,.58,.72),.2),r=e.crystal(se(.35,.15,1),3),o=e.emissive(se(.65,.4,1),4),a=e.emissive(se(.6,.3,1),3);i.stat(We([[0,0,.3],[0,0,.55],[0,0,.92]],[.03,.037,.037],{radial:8}),n);for(let _ of[.46,.62,.78])i.stat(Jn(.04,[0,0,0],.007,10,0),s,[0,0,_]);i.stat(We([[0,0,.85],[0,0,1.7],[0,0,2.55]],[.017,.017,.02],{radial:6}),a),i.stat(We(Ci(.052,.98,2.36,9,46),.0075,{radial:4,per:3}),s);let c=[.95,1.35,1.75,2.15,2.45];c.forEach((_,d)=>i.stat(Jn(d===0||d===4?.064:.058,[0,0,0],.011,10,0),s,[0,0,_]));let l=Jn(.075,[0,0,0],.0045,10,0);for(let _=0;_<4;_++){let d=e.emissive(se(.65,.4,1),4),f=d.emissiveIntensity;d.transparent=!0;let y=i.mesh(l,d);i.anim(x=>{let M=wa(x/60+_/4);y.position.z=.95+1.45*M,y.scale.set(1+.3*M,1+.3*M,1);let I=Math.min(1,M*8)*Math.min(1,(1-M)*3);d.emissiveIntensity=f*I,d.opacity=I})}let h=(_,d,f)=>ef((Math.sin(_*.9+d)+Math.sin(_*.37+d*2.3)-f)*3);for(let _=0;_<c.length-1;_++){let d=t.uniform(0,6.28),f=[.07*Math.cos(d),.07*Math.sin(d),c[_]],y=[.07*Math.cos(d+.9),.07*Math.sin(d+.9),c[_+1]],x=[(f[0]+y[0])/2,(f[1]+y[1])/2,(f[2]+y[2])/2],M=i.mesh(ah(t,[f[0]-x[0],f[1]-x[1],f[2]-x[2]],[y[0]-x[0],y[1]-x[1],y[2]-x[2]],6,.012,.005),o,x),I=t.uniform(0,6.28);i.anim(E=>{M.scale.setScalar(Math.max(1e-4,h(E,I,.3)))})}for(let _=0;_<3;_++){let d=2*Math.PI*_/3,f=.066;i.stat(ah(t,[f*Math.cos(d),f*Math.sin(d),.95],[f*Math.cos(d+.6),f*Math.sin(d+.6),2.35],22,.012,.0045),o)}for(let _=0;_<4;_++){let d=new S(t.gauss(),t.gauss(),t.gauss()).normalize(),f=t.uniform(.32,.5),y=i.mesh(ah(t,[d.x*.16,d.y*.16,d.z*.16],[d.x*f,d.y*f,d.z*f],7,.03,.005),o,[0,0,3]),x=t.uniform(0,6.28);i.anim(M=>{y.rotation.set(Math.floor(M/5+x)*1.7,0,Math.floor(M/4+x)*2.4,"ZYX"),y.scale.setScalar(Math.max(1e-4,h(M,x,.5)))})}for(let _=0;_<3;_++){let d=2*Math.PI*_/3,f=[.03,.12,.23,.23,.15],y=[2.5,2.66,2.85,3.08,3.22];i.stat(We(f.map((x,M)=>[x*Math.cos(d+.3*M),x*Math.sin(d+.3*M),y[M]]),[.03,.024,.018,.012,.004],{radial:6,per:6}),s)}[[.3,[75,10,20],.011,.02618],[.23,[-25,15,60],.009,-.05236]].forEach(([_,d,f,y])=>{let x=i.mesh(Jn(_,d.map(M=>M*Math.PI/180),f,10),s,[0,0,3]);i.anim(M=>{x.rotation.z=M*y})}),i.stat(On(.58,.06,.03,4),s,[0,0,3.14]);let u=[new S(0,.6,.8),new S(.7,-.3,.65),new S(-.45,.5,.75)],p=[1,-2,3],m=Array.from({length:6},(_,d)=>{let f=u[d%3].clone().normalize(),y=Math.abs(f.z)<.9?new S(0,0,1):new S(1,0,0),x=f.clone().cross(y).normalize(),M=f.clone().cross(x);return{e1:x,e2:M,R:t.uniform(.32,.5),th0:Math.floor(d/3)*Math.PI+t.uniform(-.3,.3),w:p[d%3]*.02618,ph:t.uniform(0,6.28)}}),g=i.inst(On(.11,.11,.035,4),r,m.length);return i.anim(_=>{m.forEach((d,f)=>{let y=d.th0+_*d.w,x=d.R*(1+.12*Math.sin(_*.05236+d.ph));ur(g,f,[x*(d.e1.x*Math.cos(y)+d.e2.x*Math.sin(y)),x*(d.e1.y*Math.cos(y)+d.e2.y*Math.sin(y)),3+x*(d.e1.z*Math.cos(y)+d.e2.z*Math.sin(y))],1)}),g.instanceMatrix.needsUpdate=!0}),i.stat(On(.1,.3,.04,5),r,[0,0,.32]),{z:3,r:.15,glass:se(.6,.3,1),hot:se(.7,.5,1),mid:se(.4,.1,1),style:"flicker"}}function f1(i){let{rng:t,m:e}=i,n=e.veins(se(.02,.03,.05),se(.5,.85,1),6,6,.06,.15);n.flatShading=!0;let s=e.metal(se(.8,.86,.95),.15),r=e.crystal(se(.25,.65,1),4),o=e.emissive(se(.7,.9,1),14),a=e.emissive(se(.3,.7,1),9);i.stat(We([[0,0,.3],[0,0,1.4],[0,0,2.55]],[.01,.01,.013],{radial:6}),a);for(let f=0;f<9;f++)i.stat(On(.092,.092,.03+.0045*f,6,[0,0,f*.5]),n,[0,0,.55+.21*f]);for(let f=0;f<4;f++){let y=i.mesh(Jn(.058+.006*f,[0,0,0],.006,12,.6),s,[0,0,.655+.42*f]);i.anim(x=>{y.rotation.z=x*(f%2===0?1:-1)*.05236})}let c=f=>{let y=Math.max(0,(f-.7)/.3);return .05+.26*Jr(Math.sin(y*Math.PI/2),1.5)};for(let f=0;f<2;f++){let y=xs(110);i.stat(We(Ci(c,.4,3.2,6,y,f*Math.PI),Array.from({length:y},(x,M)=>.0085+.004*Math.sin(M*.55+f)),{radial:5,per:3}),s)}[[.36,[72,10,0],.01,.02618],[.31,[-35,0,40],.009,-.03927],[.27,[100,0,75],.008,.05236]].forEach(([f,y,x,M])=>{let I=i.mesh(Jn(f,y.map(E=>E*Math.PI/180),x,10),s,[0,0,3]);i.anim(E=>{I.rotation.z=E*M})}),i.stat(On(.62,.05,.032,4),r,[0,0,3.17]);let l=af(t,jr(110),.35,.85);for(let f=0;f<jr(40);f++)l.push([t.uniform(-.12,.12),t.uniform(-.12,.12),t.uniform(-1.2,.35)]);let h=(f,y)=>f.map(x=>({rel:x,s:y(),per:t.choice([48,60,80,96,120]),ph:t.random()})),u=h(l,()=>t.uniform(.004,.011)),p=h(af(t,Math.max(jr(30),8),.4,.9),()=>t.uniform(.02,.045)),m=oh([On(1,1,.14,4),On(1,1,.14,4,[Math.PI/2,0,0])].map(f=>(f.setIndex(Array.from({length:f.attributes.position.count},(y,x)=>x)),f))),g=i.inst(lh,o,u.length),_=i.inst(m,o,p.length),d=(f,y,x)=>{y.forEach((M,I)=>{let E=wa(x/M.per+M.ph),A=(1-E)**1.6;ur(f,I,[M.rel[0]*A,M.rel[1]*A,3+M.rel[2]*A],M.s*Math.min(1,E*8)*(1-E)**.5)}),f.instanceMatrix.needsUpdate=!0};i.anim(f=>{d(g,u,f),d(_,p,f)}),i.stat(On(.08,.31,.05,6),r,[0,0,.33]);for(let f=0;f<3;f++){let y=2*Math.PI*f/3+.4,x=Math.cos(y),M=Math.sin(y);i.stat(We([[.035*x,.035*M,.52],[.07*x,.07*M,.44],[.11*x,.11*M,.34],[.1*x,.1*M,.24]],[.02,.016,.011,.003],{radial:6}),s)}return{z:3,r:.17,glass:se(.05,.25,1),hot:se(.2,.5,1),mid:se(0,.05,.4)}}var cf={verdant:c1,ember:l1,tide:h1,storm:u1,void:f1},d1={verdant:7,ember:8,tide:9,storm:10,void:11};function Ms(i,t){let e=Qu(i),n=cf[e.base??e.id]?e.base??e.id:"verdant",s=new he,r=new he;r.rotation.x=-Math.PI/2,r.scale.setScalar(Qr),r.position.y=Zi-3*Qr,s.add(r);let o=[],a=[],c=[],l=new Ea,h={B:r,batch:l,rng:tf(d1[n]),m:i1(o,a),stat:(E,A,F,Q,v)=>l.add(E,A,F,Q,v),mesh:(E,A,F)=>{let Q=new Tt(E,A);return F&&Q.position.set(...F),r.add(Q),Q},inst:(E,A,F)=>{let Q=new sr(E,A,F);return Q.frustumCulled=!1,r.add(Q),Q},anim:E=>{c.push(E)}},u=cf[n](h);l.build(r);let p=new zt(e.gem),m=e.tint?new zt(e.tint):null,g=new Se({color:m?u.glass.clone().lerp(p,.6):u.glass,emissive:p,emissiveIntensity:1.2,roughness:.05,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1}),_=new Tt(new Mn(u.r*Qr,20,14),g);_.position.y=Zi+(u.z-3)*Qr,_.renderOrder=1,s.add(_);let d=h.m.core(m?u.hot.clone().lerp(p,.7):u.hot,m?u.mid.clone().lerp(p,.5):u.mid,6),f=new Tt(new Mn(u.r*Qr*.6,14,10),d);_.add(f);let y=d.emissiveIntensity;if(c.push(E=>{if(u.style==="flicker"){let A=Math.abs(Math.sin(E*.9)*Math.sin(E*.37+1.1));f.scale.setScalar(1+.1*A),d.emissiveIntensity=y*(.55+.45*A)*1.6}else f.scale.setScalar(1+.05*Math.sin(E*.1309))}),o.splice(o.indexOf(d),1),m)for(let E of[...o,...a])E.color.lerp(m,.55),E.emissive.getHex()!==0&&E.emissive.lerp(m,.7);let x=new Yn(new Nn({map:t,color:p.getHex(),blending:$e,depthWrite:!1,transparent:!0,opacity:.5}));x.scale.setScalar(.45),x.position.y=_.position.y,s.add(x);let M=Math.random()*20,I=(E,A)=>{M+=E*(1+A*1.5);let F=M*24;for(let Q of c)Q(F,E)};return I(0,0),{group:s,gem:_,gemMat:g,glow:x,color:p,materials:o,update(E,A,F){I(A,F)}}}var p1={me:4020950,opp:12728908,ally:3121012};function lf(i,t,e,n){let s=[],r=(K,nt={})=>{let ct=new Se({color:K,metalness:nt.metal??.05,roughness:nt.rough??.8,flatShading:!0,emissive:nt.emissive??0,emissiveIntensity:nt.ei??1,transparent:!0});return s.push({mat:ct,color:ct.color.clone(),emissive:ct.emissive.clone()}),ct},o=(K,nt,ct=0,vt=0,ht=0)=>{let et=new Tt(K,nt);return et.position.set(ct,vt,ht),et},c=i==="goblin"||i==="kid"?.78:1,l=r(i==="goblin"?7323466:i==="witch"?10145914:15778970),h=r(1840934),u=i==="witch"?5974662:i==="goblin"?8018478:i==="knight"?3100574:i==="kid"?14181935:i==="human"?9067059:p1[t],p=r(u),m=r(i==="witch"?10181119:16766073,{metal:.2,rough:.4}),g=r(12897496,{metal:.3,rough:.45}),_=new he,d=new he;if(_.add(d),i==="wizard"||i==="witch")d.add(o(new Ge(.27,.46,1,9),p,0,.5,0)),d.add(o(new Ge(.47,.47,.05,9),m,0,.03,0));else{let K=i==="knight"?g:h;d.add(o(new Ge(.09,.08,.6,6),K,-.12,.3,0)),d.add(o(new Ge(.09,.08,.6,6),K,.12,.3,0)),d.add(o(new on(.16,.08,.26),h,-.12,.04,.05)),d.add(o(new on(.16,.08,.26),h,.12,.04,.05)),d.add(o(new Ge(.3,.34,.32,8),p,0,.72,0))}let f=i==="knight"?g:p;if(d.add(o(new Ge(.24,.29,.55,8),f,0,1.12,0)),d.add(o(new ni(.26,.035,5,12),m,0,.88,0).rotateX(Math.PI/2)),i==="knight"){let K=o(new on(.34,.6,.04),p,0,1,.27);d.add(K),d.add(o(new Mn(.13,6,4),g,-.3,1.36,0)),d.add(o(new Mn(.13,6,4),g,.3,1.36,0))}i==="human"&&d.add(o(new on(.5,.06,.06),h,0,1.2,.2).rotateZ(.7));let y=new he;y.position.set(0,1.58,0),d.add(y),y.add(o(new je(.2,1),l));for(let K of[-.07,.07])y.add(o(new Mn(.028,6,4),h,K,.02,.18));if(i==="wizard"){let K=r(15658740);y.add(o(new Pn(.17,.42,7),K,0,-.2,.1).rotateX(Math.PI)),y.add(o(new on(.4,.34,.14),K,0,-.06,-.13)),y.add(o(new Ge(.36,.36,.04,12),p,0,.15,0));let nt=o(new Pn(.24,.62,9),p,0,.47,0);nt.rotation.z=.12,y.add(nt),y.add(o(new ni(.21,.025,5,12),m,0,.2,0).rotateX(Math.PI/2))}else if(i==="witch"){let K=r(2760509);y.add(o(new Ge(.42,.42,.03,12),K,0,.14,0));let nt=o(new Pn(.22,.7,8),K,.04,.5,-.03);nt.rotation.set(-.25,0,.3),y.add(nt),y.add(o(new ni(.2,.03,5,12),m,0,.19,0).rotateX(Math.PI/2)),y.add(o(new Pn(.035,.12,5),l,0,-.02,.22).rotateX(Math.PI/2)),y.add(o(new on(.42,.3,.12),r(3811914),0,-.08,-.14))}else if(i==="goblin"){for(let K of[-1,1]){let nt=o(new Pn(.07,.34,5),l,K*.24,.05,0);nt.rotation.z=-K*1.25,y.add(nt)}y.add(o(new Pn(.05,.14,5),l,0,-.02,.22).rotateX(Math.PI/2))}else if(i==="knight")y.add(o(new je(.235,1),g)),y.add(o(new on(.3,.05,.05),h,0,.02,.21)),y.add(o(new Pn(.06,.4,6),r(14042437),0,.3,-.06).rotateX(-.5));else if(i==="kid")y.add(o(new on(.38,.2,.12),r(5913122),0,-.02,-.13)),y.add(o(new Mn(.215,10,6,0,Math.PI*2,0,Math.PI/2),r(4029400),0,.03,0)),y.add(o(new on(.2,.025,.16),r(4029400),0,.05,.2));else if(i==="human"){let K=r(5913122);y.add(o(new Mn(.215,10,6,0,Math.PI*2,0,Math.PI/2.2),K,0,.02,-.01)),y.add(o(new on(.4,.22,.12),K,0,-.04,-.13))}let x=i==="knight"?g:p,M=new he;M.position.set(-.3,1.34,0),M.rotation.z=.25,d.add(M),M.add(o(new Ge(.075,.1,.55,6),x,0,-.27,0)),M.add(o(new Mn(.07,6,4),l,0,-.58,0));let I=new he;I.position.set(.3,1.34,.02),I.rotation.z=-.35,d.add(I),I.add(o(new Ge(.075,.1,.5,6),x,0,-.22,.05).rotateX(-.5));let E=o(new Mn(.07,6,4),l,0,-.42,.22);I.add(E);let A=new he;A.position.set(0,-.42,.22),A.rotation.z=.28,I.add(A);let F=Ms(n,e);F.group.position.y=.3,A.add(F.group);for(let K of F.materials)s.push({mat:K,color:K.color.clone(),emissive:K.emissive.clone()});let{gem:Q,gemMat:v,glow:T}=F;return _.scale.setScalar(c),{root:_,body:d,head:y,arm:I,staffPivot:A,crystal:Q,crystalMat:v,glow:T,staff:F,height:1.95*c,materials:s}}function hh(i){return["wizard","witch","goblin","knight","kid","human"].find(t=>t===i)??"wizard"}function m1(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Hn(i);return n.colorSpace=ln,n}function hf(i){let t;try{t=new nr({canvas:i,antialias:!0,alpha:!0})}catch{return null}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.toneMapping=$r,t.setClearColor(0,0);let e=new ir;e.add(new ar(14673663,2760768,1.4));let n=new Ri(16777215,2.2);n.position.set(2,3,4),e.add(n);let s=new Ri(10456319,2);s.position.set(-3,2,-3),e.add(s);let r=new $n(16777215,3,3,2);e.add(r);let o=new sn(30,1,.1,50),a=m1(),c=new he;c.rotation.z=.12,e.add(c);let l=null,h="";function u(y){return l&&h===y||(l&&(c.remove(l.group),l.group.traverse(x=>x.geometry?.dispose?.())),l=Ms(y,a),h=y,c.add(l.group),r.color.copy(l.color),r.position.set(.3,Zi+.2,.6)),l}function p(){let y=i.clientWidth||300,x=i.clientHeight||420;t.setSize(y,x,!1),o.aspect=y/x;let M=1.55/Math.tan(cr.degToRad(o.fov/2))/Math.min(1,o.aspect*1.6);o.position.set(0,.35,M),o.lookAt(0,.3,0),o.updateProjectionMatrix()}let m=0,g=performance.now(),_=0,d=()=>i.isConnected&&!i.closest("[hidden]")&&i.clientWidth>0;function f(y){if(!d()){m=0;return}m=requestAnimationFrame(f);let x=Math.min(.05,(y-g)/1e3);g=y,_+=x,l&&(c.rotation.y+=x*.6,c.position.y=Math.sin(_*1.3)*.04,l.gem.rotation.y+=x*1.5,l.gemMat.emissiveIntensity=1.4+Math.sin(_*3)*.4,l.update(_,x,.25),t.render(e,o))}return{show(y){u(y),p(),m||(g=performance.now(),m=requestAnimationFrame(f))},thumbs(y,x,M){let I=[],E=h,A=c.rotation.y,F=c.position.y;t.setPixelRatio(1),t.setSize(x,M,!1),o.aspect=x/M,o.position.set(.35,Zi+.12,1.6),o.lookAt(0,Zi-.02,0),o.updateProjectionMatrix(),c.rotation.y=.6,c.position.y=0;for(let Q of y)u(Q).update(1.2,0,0),t.render(e,o),I.push(i.toDataURL("image/png"));return c.rotation.y=A,c.position.y=F,t.setPixelRatio(Math.min(devicePixelRatio||1,2)),E&&u(E),p(),I},dispose(){cancelAnimationFrame(m),m=0,t.dispose()}}}function an(i){let t=i>>>0||1,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{random:e,uniform:(n,s)=>n+(s-n)*e(),int:(n,s)=>n+Math.floor(e()*(s-n+1)),choice:n=>n[Math.floor(e()*n.length)%n.length],gauss:()=>{let n=0;for(;n===0;)n=e();return Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e())}}}var Ot=i=>i<0?0:i>1?1:i,ye=(i,t,e)=>{let n=Ot((e-i)/(t-i));return n*n*(3-2*n)},Mf=(i,t,e)=>i+(t-i)*e,Zt=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],de=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],$i=(i,t)=>1-Math.exp(-i*t),eo=(i,t)=>{let e=(i-t+Math.PI)%(2*Math.PI);return e<0&&(e+=2*Math.PI),e-Math.PI},ce=i=>i*Math.PI/180;function un(i,t){let e=ce(i),n=ce(t);return[Math.cos(n)*Math.cos(e),Math.cos(n)*Math.sin(e),Math.sin(n)]}function vf(i,t){if(t<=i[0][0])return[...i[0][1]];for(let e=1;e<i.length;e++)if(t<=i[e][0])return Zt(i[e-1][1],i[e][1],(t-i[e-1][0])/(i[e][0]-i[e-1][0]));return[...i[i.length-1][1]]}var Ta=(()=>{let i=an(7),t=new Float32Array(65536);for(let e=0;e<t.length;e++)t[e]=i.random();return t})();function Ce(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=e&255,l=e+1&255,h=(n&255)<<8,u=(n+1&255)<<8,p=Ta[h+c],m=Ta[h+l],g=Ta[u+c],_=Ta[u+l];return(p*(1-o)+m*o)*(1-a)+(g*(1-o)+_*o)*a}var uf=Math.cos(.55),ff=Math.sin(.55);function Ve(i,t,e=5,n=2.03,s=.5){let r=0,o=1,a=0;for(let c=0;c<e;c++){r+=o*Ce(i+17.3*c,t-9.1*c),a+=o;let l=(i*uf-t*ff)*n,h=(i*ff+t*uf)*n;i=l,t=h,o*=s}return r/a}var df=Math.cos(.7),pf=Math.sin(.7);function bf(i,t,e=5,n=2.1,s=.52){let r=0,o=1,a=0,c=1;for(let l=0;l<e;l++){let h=1-Math.abs(2*Ce(i+31.7*l,t+5.3*l)-1);h=h*h*c,r+=h*o,a+=o,c=Ot(h*2);let u=(i*df-t*pf)*n,p=(i*pf+t*df)*n;i=u,t=p,o*=s}return r/a}var mf=new Map;function g1(i,t,e){let n=`${t}:${e}`,s=mf.get(n);if(!s){let l=an(e*977+t);s=new Float32Array(t);for(let h=0;h<t;h++)s[h]=l.random();mf.set(n,s)}let r=i*t,o=Math.floor(r),a=r-o,c=a*a*(3-2*a);return s[(o%t+t)%t]*(1-c)+s[((o+1)%t+t)%t]*c}function gf(i,t=5,e=3,n=1,s=.5){let r=0,o=1,a=0;for(let c=0;c<t;c++)r+=o*g1(i,e*2**c,n+c),a+=o,o*=s;return r/a}function Pi(i,t){let e=i.stops;return(n,s,r)=>{let o=Math.asin(Math.max(-1,Math.min(1,r)))*180/Math.PI,a=vf(e,o),c=i.hw0+(1-i.hw0)*Math.exp(-Math.max(o,0)/22);for(let l of t){let h=Math.acos(Math.max(-1,Math.min(1,n*l[0]+s*l[1]+r*l[2])));for(let[u,p,m]of i.glow){let g=Math.exp(-h/u)*p*c;a[0]+=g*m[0],a[1]+=g*m[1],a[2]+=g*m[2]}if(i.anti>0){let u=Math.acos(Math.max(-1,Math.min(1,-n*l[0]-s*l[1]+r*l[2]))),p=Math.exp(-u/.9)*Math.exp(-Math.max(o,0)/9)*i.anti;a[0]+=p*i.anti_col[0],a[1]+=p*i.anti_col[1],a[2]+=p*i.anti_col[2]}}return a}}var fr=(i,t)=>Math.round(255*Math.pow(Ot($i(i,t)),1/2.2));function dh(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");return{c:e,g:n,img:n.createImageData(i,t)}}function ph(i,t=!1){let e=new Hn(i);return e.colorSpace=ln,t?e.wrapS=e.wrapT=Mi:e.wrapS=ds,e.anisotropy=2,e}function _1(i,t,e){let n=t/2,{c:s,g:r,img:o}=dh(t,n),a=Pi(i,e.bodies),c=i.exposure??1,l=Math.PI/n,h=e.ridges??[[.03,.095,31,.5,i.far1],[.01,.055,47,.25,i.far2]],u=e.below??de(i.far2,.8),p=[],m=h.map(()=>[]);for(let M=0;M<t;M++){let I=(M+.5)/t,E=I*2*Math.PI;p.push(a(Math.cos(E)*Math.cos(.012),Math.sin(E)*Math.cos(.012),Math.sin(.012)));let A=1;for(let F of e.notchAz){let Q=Math.abs(eo(E,ce(F)));A*=1-.85*Math.exp(-((Q/ce(20))**2))}h.forEach(([F,Q,v],T)=>{if(e.ridgeKind==="trees"){m[T].push(F+Q*gf(I,6,18,v,.62)**1.5);return}let K=1-Math.abs(2*gf(I,7,4,v,.56)-1);m[T].push((F+Q*K**1.3)*(.35+.65*A))})}let g=new Float32Array(t*n),_=new Float32Array(t*n),d=null,f=[0,0,0],y=[0,0,0];if((i.milky??0)>0){let M=new S(.25,-.55,.8).normalize(),I=M.clone().cross(new S(0,0,1)).normalize(),E=M.clone().cross(I);d=[M.x,M.y,M.z],f=[I.x,I.y,I.z],y=[E.x,E.y,E.z]}for(let M=0;M<n;M++){let I=((M+.5)/n-.5)*Math.PI,E=Math.cos(I),A=Math.sin(I),F=n-1-M;for(let Q=0;Q<t;Q++){let v=(Q+.5)/t*2*Math.PI,T=E*Math.cos(v),K=E*Math.sin(v),nt=A,ct=a(T,K,nt);if(d&&I>0){let D=Math.asin(Math.max(-1,Math.min(1,T*d[0]+K*d[1]+nt*d[2]))),tt=Math.atan2(T*y[0]+K*y[1]+nt*y[2],T*f[0]+K*f[1]+nt*f[2]),O=3*Math.cos(tt),G=3*Math.sin(tt),ot=Ve(O+9*D,G+4*D,4),z=ye(.5,.75,Ve(O*1.7+17+14*D,G*1.7-5+6*D,3)),C=Math.exp(-((D/(i.milky_w??.2))**2))*(.25+1.3*ot)*(1-.65*z)*i.milky,L=i.milky_col??[.55,.58,.85];ct=[ct[0]+C*L[0],ct[1]+C*L[1],ct[2]+C*L[2]]}let vt=0;h.forEach(([,,,D,tt],O)=>{let G=Ot((m[O][Q]-I)/l+.5);if(G<=0)return;let ot=p[Q],z=Zt(tt,ot,D),C=Zt(z,ot,Math.exp(-Math.max(I,0)/.025)*.55);ct=Zt(ct,C,G),vt=Math.max(vt,G)});let ht=Ot(-I/l+.5);ht>0&&(ct=Zt(ct,u,ht));let et=(F*t+Q)*4;o.data[et]=fr(ct[0],c),o.data[et+1]=fr(ct[1],c),o.data[et+2]=fr(ct[2],c),o.data[et+3]=255,g[F*t+Q]=vt,_[F*t+Q]=(o.data[et]+o.data[et+1]+o.data[et+2])/765}}let x=(i.stars??0)>0?y1(t,n,i.star_n,i.stars,g,_):null;return r.putImageData(o,0,0),{tex:ph(s),stars:x}}function y1(i,t,e,n,s,r){let o=an(5),a=[[.8,.86,1],[1,.96,.86],[1,.8,.7],[.9,.9,1]],c=[],l=[],h=[];for(let u=0;u<e;u++){let p=o.uniform(.04,1),m=o.uniform(0,2*Math.PI),g=Math.asin(p),_=Math.floor(m/(2*Math.PI)*i)%i,d=Math.min(t-1,Math.floor((g/Math.PI+.5)*t)),f=t-1-d,y=(1-s[f*i+_])*Ot(1-r[f*i+_]*3),x=o.random()**6,M=a[o.int(0,3)];if(y<=.01)continue;let I=Math.min(1.6,(.1+.95*x)*n*y*2.2),E=140;c.push(E*Math.cos(g)*Math.cos(m),E*Math.cos(g)*Math.sin(m),E*Math.sin(g)),l.push(M[0]*I,M[1]*I,M[2]*I),h.push(1+x*2.5)}return{pos:c,col:l,size:h}}function x1(i,t,e){let n=t/2,{c:s,g:r,img:o}=dh(t,n),a=i.exposure??1,c=i.cloud_max??99,l=Math.max(.001,Math.hypot(e[0],e[1])),h=e[0]/l*.22,u=e[1]/l*.22;for(let p=0;p<n;p++){let m=((p+.5)/n-.5)*Math.PI,g=n-1-p;if(m<.02)continue;let _=Math.cos(m),d=Math.sin(m),f=1/(d+.16),y=c<50?ye(.02,.1,m)*(1-ye(c*.6,c,m)):ye(.02,.16,m);if(!(y<=0))for(let x=0;x<t;x++){let M=(x+.5)/t*2*Math.PI,I=_*Math.cos(M),E=_*Math.sin(M),A=I*f*i.cloud_scale,F=E*f*i.cloud_scale,Q=Ve(A*.6+9,F*.6+2,3)-.5,v=A+Q*1.4,T=F+Q*1.1,K=Ve(v,T,5),nt=ye(i.cov0,i.cov1,K);if(nt<=.002)continue;let ct=Ve(v+h,T+u,5),vt=Ot(.55-(ct-K)*3.4)*(1-.4*nt),ht=Math.exp(-Math.acos(Math.max(-1,Math.min(1,I*e[0]+E*e[1]+d*e[2])))/1.1),et=Zt(i.cloud_lit_far,i.cloud_lit_near,ht),D=de(i.cloud_shadow,.6+.4*ht),tt=Zt(D,et,vt),O=nt*(1-nt)*4*ht*.6,G=(g*t+x)*4;o.data[G]=fr(tt[0]+O*i.cloud_rim[0],a),o.data[G+1]=fr(tt[1]+O*i.cloud_rim[1],a),o.data[G+2]=fr(tt[2]+O*i.cloud_rim[2],a),o.data[G+3]=Math.round(255*nt*y*i.cloud_opacity)}}return r.putImageData(o,0,0),ph(s)}function M1(i,t,e={}){let n=e.span??1.4,{c:s,g:r,img:o}=dh(t,t),a=e.tint??(i==="sun"?[1,.97,.88]:[.96,.98,1.05]),c=e.halo??(i==="sun"?[1,.7,.3]:[.5,.62,1]),l=[Math.sin(.45),.15,Math.cos(.45)];for(let h=0;h<t;h++)for(let u=0;u<t;u++){let p=((u+.5)/t*2-1)*n,m=-((h+.5)/t*2-1)*n,g=Math.hypot(p,m),_=Ot((1-g)/(n*2/t)+.5),d=Math.sqrt(Ot(1-g*g)),f=0;for(let[E,A]of e.rings??[])f=Math.max(f,A*(1-ye(E-.1,E,g)));let y;if(i==="sun")y=Zt(e.sunInner??[1,.62,.25],a,Math.pow(d,.5)),f=Math.max(f,(e.sunHalo??.55)*Math.exp(-Math.max(g-1,0)/.12));else{let E=Ot(p*l[0]+m*l[1]+d*l[2]),A=ye(.5,.6,Ve(p*1.9+4,m*1.9-2,5))*.42,F=ye(.62,.8,Ce(p*14,m*14))*.12,Q=(.04+E**.8)*(.6+.4*d)*(.9-A-F)*(e.moonGain??1.55);y=de(a,Q),f=Math.max(f,(e.rings?0:.3)*Math.exp(-Math.max(g-1,0)/.2))}f*=1-ye(n*.86,n,g);let x=_+(1-_)*f,M=x>1e-4?[0,1,2].map(E=>(_*y[E]+(1-_)*f*c[E])/x):[0,0,0],I=(h*t+u)*4;o.data[I]=Math.round(255*Math.pow(Ot(M[0]),1/2.2)),o.data[I+1]=Math.round(255*Math.pow(Ot(M[1]),1/2.2)),o.data[I+2]=Math.round(255*Math.pow(Ot(M[2]),1/2.2)),o.data[I+3]=Math.round(255*Ot(x))}return r.putImageData(o,0,0),ph(s,!0)}var Jt=class{constructor(t=!1,e=0){Fe(this,"alpha",t);Fe(this,"pos",[]);Fe(this,"col",[]);Fe(this,"idx",[]);Fe(this,"morph",[]);for(let n=0;n<e;n++)this.morph.push([])}get count(){return this.pos.length/3}v(t,e,n){return this.pos.push(t[0],t[1],t[2]),this.alpha?this.col.push(e[0],e[1],e[2],e[3]??1):this.col.push(e[0],e[1],e[2]),this.morph.forEach((s,r)=>{let o=n?.[r];s.push(o?o[0]:0,o?o[1]:0,o?o[2]:0)}),this.count-1}f(...t){for(let e=1;e<t.length-1;e++)this.idx.push(t[0],t[e],t[e+1])}geo(){let t=new be;return t.setAttribute("position",new ae(this.pos,3)),t.setAttribute("color",new ae(this.col,this.alpha?4:3)),t.setIndex(this.idx),this.morph.length&&(t.morphAttributes.position=this.morph.map(e=>new ae(e,3)),t.morphTargetsRelative=!0),t.computeVertexNormals(),t.computeBoundingSphere(),t}};function pe(i={}){let t=new rr({vertexColors:!0,flatShading:i.flat??!0,side:i.double?Ie:Dn}),e=i.emit??0;return e>0&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * ${e.toFixed(3)};`)},t.customProgramCacheKey=()=>`vcemit${e}`),t}var ii=(i={})=>{let t=new Ze({vertexColors:!0,side:Ie,transparent:!!i.alpha,depthWrite:!i.alpha,blending:i.additive?$e:ei,fog:i.fog??!0,toneMapped:i.toneMapped??!1});return i.gain&&i.gain!==1&&t.color.setScalar(i.gain),t},vn=(i,t=1)=>new Ze({color:new zt(i[0]*t,i[1]*t,i[2]*t),side:Ie,toneMapped:!1});function _f(i,t,e){let n=[],s=[],r=[];for(let a=0;a<=e;a++){let c=Math.PI*a/e-Math.PI/2;for(let l=0;l<=t;l++){let h=2*Math.PI*l/t;n.push(i*Math.cos(c)*Math.cos(h),i*Math.cos(c)*Math.sin(h),i*Math.sin(c)),s.push(l/t,a/e)}}for(let a=0;a<e;a++)for(let c=0;c<t;c++){let l=a*(t+1)+c,h=l+t+1;r.push(l,h,l+1,h,h+1,l+1)}let o=new be;return o.setAttribute("position",new ae(n,3)),o.setAttribute("uv",new ae(s,2)),o.setIndex(r),o}var uh=(i,t=!1)=>new Ze({map:i,side:Ie,fog:!1,toneMapped:!1,depthWrite:!1,transparent:t});function yf(i,t){let e=new Jt,n=(s,r,o,a)=>{let c=Math.cos(o),l=Math.sin(o),h=[];for(let[p,m,g,_]of[[s,0,r,r],[0,s,-r,r],[-s,0,-r,-r],[0,-s,r,-r]])h.push(e.v([p*c-m*l,p*l+m*c,a],[1,1,1])),h.push(e.v([g*c-_*l,g*l+_*c,a],[1,1,1]));let u=e.v([0,0,a],[1,1,1]);for(let p=0;p<8;p++)e.f(u,h[p],h[(p+1)%8])};return n(i,t,0,0),n(i*.55,t*.9,Math.PI/4,.002),e.geo()}function si(i){let t=new he,e=[],n=_1(i.th,i.W,{bodies:i.bodies,notchAz:[i.th.body_az,i.th.body_az+180],ridges:i.ridges,below:i.below,ridgeKind:i.ridgeKind}),s=n.tex,r=new Tt(_f(150,48,24),uh(s));if(r.renderOrder=-10,r.frustumCulled=!1,t.add(r),e.push(s,r.geometry,r.material),n.stars&&n.stars.pos.length){let x=new be;x.setAttribute("position",new ae(n.stars.pos,3)),x.setAttribute("color",new ae(n.stars.col,3)),x.setAttribute("size",new ae(n.stars.size,1));let M=new wn({vertexShader:"attribute float size; varying vec3 vC; void main() { vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * 1.6; }",fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, 1.0); }",vertexColors:!0,transparent:!0,depthWrite:!1,blending:$e}),I=new qi(x,M);I.renderOrder=-9.5,I.frustumCulled=!1,t.add(I),e.push(x,M)}let o=null;if(i.clouds!==!1){let x=x1(i.th,Math.min(1024,i.W),i.bodies[0]);o=new Tt(_f(138,48,24),uh(x,!0)),o.renderOrder=-9,o.frustumCulled=!1,t.add(o),e.push(x,o.geometry,o.material)}let a=i.body.span??1.4,c=M1(i.body.kind,i.body.size??256,{span:a,...i.body.opts}),l=uh(c,!0);e.push(c,l);for(let x of i.bodies){let I=146*Math.tan(i.body.r)*a,E=new S(...x),A=E.clone().cross(new S(0,0,1));A.lengthSq()<1e-8&&(A=new S(1,0,0)),A.normalize();let F=A.clone().cross(E).normalize(),Q=E.clone().multiplyScalar(146),v=new be,T=[Q.clone().addScaledVector(A,-I).addScaledVector(F,-I),Q.clone().addScaledVector(A,I).addScaledVector(F,-I),Q.clone().addScaledVector(A,I).addScaledVector(F,I),Q.clone().addScaledVector(A,-I).addScaledVector(F,I)];v.setAttribute("position",new ae(T.flatMap(nt=>[nt.x,nt.y,nt.z]),3)),v.setAttribute("uv",new ae([0,0,1,0,1,1,0,1],2)),v.setIndex([0,1,2,0,2,3]);let K=new Tt(v,l);K.renderOrder=-8,K.frustumCulled=!1,t.add(K),e.push(v)}let h=an(i.seed??21),u=[],p=Math.round(i.sparkles*(i.bigShare??.27)),m=new Ze({color:new zt(.8,.9,1).multiplyScalar(1.6),fog:!1,toneMapped:!1,side:Ie}),g=new Ze({color:new zt(.65,.8,1).multiplyScalar(1.3),fog:!1,toneMapped:!1,side:Ie}),_=i.sparkleSize??{big:[2.4*1.35,.42*1.35],small:[1.35,.16*1.35]},d=yf(..._.big),f=yf(..._.small);e.push(m,g,d,f);for(let x=0;x<i.sparkles;x++){let M=x<p,I=h.uniform(0,360),E=h.uniform(..._.el??[35,88]),A=un(I,E);i.bodies.concat([un(i.th.body_az+180,i.th.body_el)]).some(T=>A[0]*T[0]+A[1]*T[1]+A[2]*T[2]>Math.cos(ce(24)))&&(I+=45);let F=un(I,E).map(T=>T*135),Q=new Tt(M?d:f,M?m:g);Q.position.set(...F),Q.lookAt(0,0,0),Q.renderOrder=-7,t.add(Q);let v=M?24:12;u.push({m:Q,big:M,pulses:Array.from({length:v},(T,K)=>Math.round((K+.5)*3600/v+h.int(-15,15)))})}let y=null;return{group:t,envMap(){if(y)return y;let x=s.image,M=document.createElement("canvas");M.width=x.width,M.height=x.height;let I=M.getContext("2d");return I.translate(M.width*.5,0),I.scale(-1,1),I.drawImage(x,0,0),I.drawImage(x,-x.width,0),y=new Hn(M),y.colorSpace=ln,y.mapping=Br,e.push(y),y},update(x){o&&(o.rotation.z=x%3600/3600*Math.PI*2);let M=x%3600;for(let I of u){let E=1;for(let A of I.pulses){if(M<A-18||M>A+14)continue;let F=[[A-18,1],[A-9,I.big?1.35:1.2],[A,I.big?.2:.35],[A+14,1]];for(let Q=0;Q<3;Q++)if(M>=F[Q][0]&&M<=F[Q+1][0]){let v=(M-F[Q][0])/(F[Q+1][0]-F[Q][0]);E=Mf(F[Q][1],F[Q+1][1],v*v*(3-2*v))}}I.m.scale.setScalar(E)}},dispose(){for(let x of e)x.dispose()}}}function cn(i,t,e=0,n=1,s=0){let r=Math.floor(i/t),o=(i-r*t)/t,a=o*o*(3-2*o),c=(r+s)%2?n:e,l=(r+s)%2?e:n;return Mf(c,l,a)}var Ef=(i,t=3600)=>{let e=(i%t+t)%t/t;return .5-.5*Math.cos(e*2*Math.PI)};function dr(i,t,e,n){let s=new Jt,r=[];for(let o of i){if(o===0){let c=s.v([0,0,e(0,0)],n(0,0));r.push(Array(t).fill(c));continue}let a=[];for(let c=0;c<t;c++){let l=2*Math.PI*c/t,h=o*Math.cos(l),u=o*Math.sin(l);a.push(s.v([h,u,e(h,u)],n(h,u)))}r.push(a)}for(let o=1;o<i.length;o++)for(let a=0;a<t;a++){let c=(a+1)%t;o===1?s.f(r[0][0],r[1][a],r[1][c]):s.f(r[o][a],r[o][c],r[o-1][c],r[o-1][a])}return s.geo()}function v1(i,t,e,n,s=0){let r=.6+.4*Ot(t)**.7,o=de(i,r*(.88+.24*e));return Zt(o,n,Ot(Ot(1-t*3)*.55+s*.75))}function ri(i,t,e,n,s,r,o=!0){let a=Ce(e*2.5+s,n*2.5+s),c=o?Ot((Ce(e*.7+s,n*.7-s)-.5)*2.5):0;return v1(i,t,a,r,c)}function fh(i,t,e,n,s,r,o=[0,0,0],a=t){let c=[],l=[],h=i.v([o[0],o[1],o[2]+e],r([o[0],o[1],e],0)),u=i.v([o[0],o[1],o[2]+e+n],r([o[0],o[1],e+n],1));for(let g=0;g<s;g++){let _=2*Math.PI*g/s,d=[o[0]+t*Math.cos(_),o[1]+t*Math.sin(_),o[2]+e],f=[o[0]+a*Math.cos(_),o[1]+a*Math.sin(_),o[2]+e+n];c.push(i.v(d,r(d,0))),l.push(i.v(f,r(f,1)))}let p=[],m=[];for(let g=0;g<s;g++)p.push(i.v(i.pos.slice(c[g]*3,c[g]*3+3),i.col.slice(c[g]*3,c[g]*3+3))),m.push(i.v(i.pos.slice(l[g]*3,l[g]*3+3),i.col.slice(l[g]*3,l[g]*3+3)));for(let g=0;g<s;g++){let _=(g+1)%s;i.f(h,c[_],c[g]),i.f(u,l[g],l[_]),i.f(p[g],p[_],m[_],m[g])}}function b1(i,t,e,n,s,r,o,a,c=3,l=.12){let h=l/((t+e)/2);n+=h/2,s-=h/2,t+=l/2,e-=l/2;let u=(g,_,d)=>[g*Math.cos(_),g*Math.sin(_),d],p=g=>i.v(g,a(g,(g[2]-r)/o)),m=(g,_,d,f)=>i.f(p(g),p(_),p(d),p(f));for(let g=0;g<c;g++){let _=n+(s-n)*g/c,d=n+(s-n)*(g+1)/c;m(u(t,_,r+o),u(e,_,r+o),u(e,d,r+o),u(t,d,r+o)),m(u(e,_,r+o),u(e,_,r),u(e,d,r),u(e,d,r+o)),m(u(t,d,r+o),u(t,d,r),u(t,_,r),u(t,_,r+o))}m(u(t,n,r+o),u(t,n,r),u(e,n,r),u(e,n,r+o)),m(u(e,s,r+o),u(e,s,r),u(t,s,r),u(t,s,r+o))}function to(i,t,e,n,s=[1,1,1]){let r=[],o=[];t.forEach((a,c)=>{let l=t[Math.max(c-1,0)],h=t[Math.min(c+1,t.length-1)],u=h[0]-l[0],p=h[1]-l[1],m=Math.hypot(u,p)||1,g=-p/m,_=u/m;r.push(i.v([a[0]+g*e/2,a[1]+_*e/2,n],s)),o.push(i.v([a[0]-g*e/2,a[1]-_*e/2,n],s))});for(let a=0;a<t.length-1;a++)i.f(r[a],o[a],o[a+1],r[a+1])}var Ra=(i,t=40)=>Array.from({length:t+1},(e,n)=>[i*Math.cos(2*Math.PI*n/t),i*Math.sin(2*Math.PI*n/t)]);function E1(i){if(i===0){let t=[],e=[];for(let n=20;n<=270;n+=15)t.push([.4*Math.cos(ce(n)),.4+.4*Math.sin(ce(n))]);for(let n=90;n>=-160;n-=15)e.push([.4*Math.cos(ce(n)),-.4+.4*Math.sin(ce(n))]);return[[...t,...e]]}return i===1?[Ra(.45,20),[[0,-.8],[0,.8]]]:[[[0,.6],[-.55,-.4],[.55,-.4],[0,.6]],Ra(.5,12).map(([t,e])=>[.1*t/.5,-.05+.1*e/.5])]}function xf(i,t,e,n,s,r,o){let a=e+Math.PI/2,c=Math.cos(a),l=Math.sin(a),h=n*Math.cos(e),u=n*Math.sin(e);for(let p of E1(t))to(i,p.map(([m,g])=>[h+s*(m*c-g*l),u+s*(m*l+g*c)]),o,r)}function Ki(i){let{th:t,r:e}=i,n=t.stone,s=new Jt,r=(p,m)=>{if(!i.bake||m[2]<.2)return p;let g=i.bake(m);return[p[0]+g[0],p[1]+g[1],p[2]+g[2]]},o=p=>{let m=e.uniform(0,50);return(g,_)=>r(ri(p,_,g[0],g[1],m,t.moss,i.patchy??!0),g)};fh(s,9.9,i.rimZ0,i.rimH,48,o(t.rim_stone)),fh(s,2.44,i.z0,i.h+.02,32,o(n[1])),[[2.5,4.9,8],[4.9,7.3,12],[7.3,9.2,16]].forEach(([p,m,g],_)=>{let d=_*.23;for(let f=0;f<g;f++)b1(s,p,m,d+2*Math.PI*f/g,d+2*Math.PI*(f+1)/g,i.z0,i.h+e.uniform(0,.04),o(e.choice(n)))});let a=new Jt;fh(a,9.3,i.glowZ0,i.glowH,48,()=>[1,1,1]);let c=i.ztop??.68,l=new Jt;for(let p=0;p<6;p++){let m=Math.PI/3*p,g=Math.cos(m),_=Math.sin(m);to(l,[[.3*g,.3*_],[2.2*g,2.2*_]],.07,c);for(let d of[-1,1]){let f=m+d*ce(35);to(l,[[1.3*g,1.3*_],[1.3*g+.7*Math.cos(f),1.3*_+.7*Math.sin(f)]],.05,c)}}to(l,Ra(2.3),.06,c),to(l,Ra(6),.05,c);let h=new Jt;for(let p=0;p<8;p++){let m=ce(45*p);p===6?xf(h,0,m,7.4,.95,c+.01,.13):xf(h,p%3,m,8.2,.55,c+.01,.09)}let u=new he;return u.add(new Tt(s.geo(),pe())),u.add(new Tt(a.geo(),vn(i.glowCol,i.glow*1.1))),u.add(new Tt(l.geo(),vn(i.lineCol,i.glow*1.3))),u.add(new Tt(h.geo(),vn(i.runeCol,i.glow*1.6))),u}function pr(i){let{r:t}=i,e=i.wind??(()=>{let s=new S(.8,.6,0).normalize();return[s.x,s.y,0]})(),n=new Jt(!1,1);for(let s=0;s<i.tufts;s++){let r=i.rmin+i.rspan*t.random()**(i.pow??1.1),o=t.uniform(0,2*Math.PI);if(i.skip?.(o*180/Math.PI,r))continue;let a=r*Math.cos(o),c=r*Math.sin(o),l=t.int(3,5);for(let h=0;h<l;h++){let u=a+t.uniform(-.25,.25)*(i.spread??1),p=c+t.uniform(-.25,.25)*(i.spread??1),m=t.uniform(i.h?.[0]??.45,i.h?.[1]??1),g=t.uniform(.035,.06),_=t.uniform(0,6.283),d=t.uniform(.1,.4),f=[Math.cos(_),Math.sin(_)],y=[-Math.sin(_),Math.cos(_)],x=i.gh(u,p),M=i.base(r),I=i.tip(r,_),E=Zt(M,I,.55),A=[u,p,x],F=[u+f[0]*d*.3,p+f[1]*d*.3,x+m*.55],Q=[u+f[0]*d,p+f[1]*d,x+m],v=(ht,et)=>{let D=ht[2]-x,tt=.32*D*D;return n.v(ht,et,[[e[0]*tt,e[1]*tt,0]])},T=v([A[0]-y[0]*g,A[1]-y[1]*g,A[2]],M),K=v([A[0]+y[0]*g,A[1]+y[1]*g,A[2]],M),nt=v([F[0]-y[0]*g*.65,F[1]-y[1]*g*.65,F[2]],E),ct=v([F[0]+y[0]*g*.65,F[1]+y[1]*g*.65,F[2]],E),vt=v(Q,I);n.f(T,K,ct,nt),n.f(nt,ct,vt)}}return n.geo()}function Sf(i,t,e,n,s,r,o,a){let c=new S(e[0]-t[0],e[1]-t[1],e[2]-t[2]),l=c.clone().normalize(),h=l.clone().cross(new S(0,0,1)).normalize(),u=l.clone().cross(h),p=12,m=o*s,g=[[0,0],[.25,.15],[.5,.26],[.8,.24],[1,.12],[1.09,0]],_=g.map(([d,f])=>{let y=(.45+3*a*d**1.6)*n;return Array.from({length:p},(x,M)=>{let I=2*Math.PI*M/p,E=c.clone().multiplyScalar(d).addScaledVector(h,Math.cos(I)*y).addScaledVector(u,Math.sin(I)*y);return i.v([t[0]+E.x,t[1]+E.y,t[2]+E.z],[r[0],r[1],r[2],f*m])})});for(let d=0;d<g.length-1;d++)for(let f=0;f<p;f++){let y=(f+1)%p;i.f(_[d][f],_[d][y],_[d+1][y],_[d+1][f])}}function mr(i,t,e,n,s,r,o=[1.5,3,4.5,6,7.5,8.5]){let c=i.v([0,0,e],[s[0],s[1],s[2],n(0,0)*r]),l=[...o,t].map(h=>Array.from({length:40},(u,p)=>{let m=2*Math.PI*p/40,g=h*Math.cos(m),_=h*Math.sin(m);return i.v([g,_,e],[s[0],s[1],s[2],n(g,_)*r])}));for(let h=0;h<40;h++)i.f(c,l[0][h],l[0][(h+1)%40]);for(let h=0;h<l.length-1;h++)for(let u=0;u<40;u++){let p=(u+1)%40;i.f(l[h][u],l[h+1][u],l[h+1][p],l[h][p])}}var vs=()=>new Ze({vertexColors:!0,transparent:!0,depthWrite:!1,blending:$e,side:Ie,fog:!1}),Aa=null;function wf(){if(Aa)return Aa;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.18,"rgba(255,255,255,.9)"),e.addColorStop(.45,"rgba(255,255,255,.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Aa=new Hn(i),Aa}function oi(i){let t=[],e=[],n=[];for(let l=0;l<i.n;l++)t.push(i.at()),e.push(i.move()),n.push(i.r.uniform(0,6.28));let s=new Float32Array(i.n*3),r=new be;r.setAttribute("position",new Re(s,3));let o=new Xi({map:wf(),color:new zt(i.col[0],i.col[1],i.col[2]),size:i.size,transparent:!0,depthWrite:!1,blending:$e,sizeAttenuation:!0,fog:!1}),a=new qi(r,o);a.frustumCulled=!1;let c=l=>{let h=Ef(l);for(let u=0;u<i.n;u++){let p=i.twinkle?Math.sin(l*.05+n[u])*.15:0;s[u*3]=t[u][0]+e[u][0]*h+p,s[u*3+1]=t[u][1]+e[u][1]*h,s[u*3+2]=t[u][2]+e[u][2]*h+Math.sin(l*.04+n[u])*.12}r.attributes.position.needsUpdate=!0};return c(0),{obj:a,update:c}}function Ca(i){let t=i.list.length,e=(l,h,u)=>{let p=new Float32Array(t*3),m=new be;m.setAttribute("position",new Re(p,3));let g=new Xi({map:wf(),color:h,size:l,transparent:!0,depthWrite:!1,blending:$e,opacity:u,fog:!1}),_=new qi(m,g);return _.frustumCulled=!1,{p:_,pos:p,g:m}},n=i.gain??1,s=i.list.reduce((l,h)=>l+h.k,0)/Math.max(1,t),r=e(2.2*s,new zt(i.col[0]*n,i.col[1]*n,i.col[2]*n),.55),o=e(.45*s,new zt(1,1,1).lerp(new zt(i.col[0],i.col[1],i.col[2]),.3),1),a=new he;a.add(r.p,o.p);let c=l=>{let h=Ef(l);i.list.forEach((u,p)=>{for(let m of[r.pos,o.pos])m[p*3]=u.p[0],m[p*3+1]=u.p[1],m[p*3+2]=u.p[2]+u.amp*h}),r.g.attributes.position.needsUpdate=!0,o.g.attributes.position.needsUpdate=!0};return c(0),{group:a,update:c}}function Tf(i,t){let{r:e,idx:n,th:s}=t,r=n/2,o=Zt(s.back_lit[0],s.back_lit[1],r),a=Zt(s.back_dark[0],s.back_dark[1],r),c=s.back_haze[n]??0;for(let l=0;l<t.count;l++){let h=2*Math.PI*(l+e.uniform(-.4,.4))/t.count+n*.5,u=[t.radius*Math.cos(h),t.radius*Math.sin(h),0],p=[-Math.sin(h),Math.cos(h)],m=e.uniform(t.hmin,t.hmax)*(s.back_h??1),g=e.uniform(t.wmin??1.6,t.wmax??3.6)*(.8+.5*n)*(s.back_w??1),_=e.uniform(0,6.28),d=e.uniform(-.12,.12),f=t.sky(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(M=>$i(M,s.exposure??1)),y=Math.exp(-((eo(h,t.sunAz)/.5)**2))*(s.back_rim_k??0),x=[];for(let M=0;M<7;M++){let I=M/6,E=-2+(m+2)*I,A=g*(1-.55*I)*(1+.5*Math.exp(-Math.max(E,0)/3)),F=Math.sin(I*4+_)*1.2+d*E,Q=[u[0]+p[0]*F,u[1]+p[1]*F,E],v=1-.75*I*I,T=de(o,v),K=de(a,v);c>0&&(T=Zt(T,f,c*.6*(1-.5*I)),K=Zt(K,f,c*.6*(1-.5*I))),y>.01&&(T=Zt(T,s.back_rim,.6*y*(1-I)),K=Zt(K,s.back_rim,.6*y*(1-I))),x.push([i.v([Q[0]-p[0]*A/2,Q[1]-p[1]*A/2,E],T),i.v([Q[0]+p[0]*A/2,Q[1]+p[1]*A/2,E],K)])}for(let M=0;M<6;M++)i.f(x[M][0],x[M][1],x[M+1][1],x[M+1][0])}}function Pa(){let i=new Jt,t=[[0,.26],[.12,.36],[.35,.3],[.62,.17],[.9,.07]],e=[[0,[1,.95,.55]],[.35,[1,.62,.15]],[.8,[1,.28,.05]],[1.2,[.8,.1,.02]]],n=8,s=a=>vf(e,a),r=t.map(([a,c])=>Array.from({length:n},(l,h)=>i.v([.07*a*a+c*Math.cos(2*Math.PI*h/n),c*Math.sin(2*Math.PI*h/n),a],s(a)))),o=i.v([.07*1.12*1.12,0,1.12],s(1.12));for(let a=0;a<r.length-1;a++)for(let c=0;c<n;c++){let l=(c+1)%n;i.f(r[a][c],r[a][l],r[a+1][l],r[a+1][c])}for(let a=0;a<n;a++)i.f(r[r.length-1][a],r[r.length-1][(a+1)%n],o);return i.geo()}function ai(i){i.traverse(t=>{let e=t;e.geometry?.dispose?.();let n=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let s of n)s.dispose()})}function ci(i){let t=(n,s=1,r=.5)=>{let o=(n[0]+n[1]+n[2])/3;return de(Zt([o,o,o],n,r),s)},e={...i};e.body="sun",e.body_el=48,e.body_r=.03,e.exposure=1.2,e.stops=[[-90,[.05,.06,.08]],[-2,[.4,.46,.55]],[0,[.62,.72,.86]],[6,[.48,.62,.86]],[18,[.3,.46,.8]],[45,[.16,.3,.68]],[90,[.08,.18,.52]]],e.glow=[[.5,.12,[1,.95,.85]],[.12,.4,[1,.97,.9]],[.04,1.4,[1,1,.95]]],e.hw0=.7,e.anti=0,e.stars=0,e.milky=0,e.sparkles=0,e.far1=[.3,.38,.5],e.far2=[.22,.3,.42],e.cov0=(i.cov0??.5)+.04,e.cloud_opacity=.85,e.cloud_lit_near=[1,.98,.94],e.cloud_lit_far=[.86,.9,.96],e.cloud_shadow=[.42,.48,.6],e.cloud_rim=[1,1,.96],e.fog=[.62,.72,.86],e.world=[.4,.5,.65],e.key_col=[1,.96,.88],e.key_e=2.2,e.fill_col=[.6,.7,1],e.body_tint=[1,.98,.92],e.body_halo=[1,.95,.8],e.body_rings=[];for(let n of Object.keys(i)){let s=i[n];/^(g_|stone|rim_stone|moss|bark|bush|grass_|back_lit|back_dark|cs_|sil|ground|earth|trunk|reed|lily|mound|water|mist|mtn|plat|rock|leaf|hedge|canopy)/.test(n)&&Array.isArray(s)&&(e[n]=Array.isArray(s[0])?s.map(r=>t(r)):t(s))}return e.emit=(i.emit??1)*.6,e.back_haze=(i.back_haze??[0,0,0]).map(n=>Math.min(.8,n+.3)),e.daylight=!0,e}var mh={SUNSET:{body:"sun",body_az:62,body_el:6,body_r:.055,body_span:4.8,body_tint:[1,.72,.5],body_halo:[.8,.15,.1],body_rings:[[2.4,.14],[4.5,.08]],exposure:1,stops:[[-90,[.03,.01,.02]],[-2,[.1,.04,.05]],[0,[.3,.12,.14]],[3,[.4,.1,.08]],[8,[.3,.05,.06]],[16,[.12,.02,.04]],[30,[.05,.008,.025]],[55,[.02,.005,.02]],[90,[.012,.004,.015]]],glow:[[.6,.22,[.8,.15,.08]],[.2,.45,[.9,.3,.12]],[.06,1.2,[1,.6,.3]]],hw0:.6,anti:0,anti_col:[0,0,0],stars:.15,star_n:800,far1:[.12,.08,.1],far2:[.07,.04,.06],cloud_scale:1.6,cov0:.52,cov1:.72,cloud_opacity:.9,cloud_max:.7,cloud_lit_near:[.45,.16,.15],cloud_lit_far:[.3,.1,.13],cloud_shadow:[.1,.03,.06],cloud_rim:[.6,.25,.2],g_near:[.03,.014,.024],g_far:[.008,.004,.01],g_road:[.06,.035,.035],stone:[[.2,.15,.18],[.24,.18,.21],[.17,.13,.16],[.27,.21,.23]],rim_stone:[.25,.19,.21],moss:[.04,.025,.025],cs_stone:[.045,.032,.045],cs_roof:[.02,.012,.022],win_col:[1,.65,.2],win_emit:3,flag_col:[.45,.03,.07],torch_col:[1,.45,.12],sil:[.012,.006,.012],sil_rim:[.3,.1,.07],banner:[.4,.03,.06],glow_col:[.95,.35,.1],line_col:[1,.5,.15],rune_col:[1,.72,.3],grass_tip:[.12,.05,.06],grass_base:[.02,.01,.015],ember_col:[1,.5,.15],emit:.9,sparkles:5,world:[.15,.06,.08],fog:[.3,.12,.14],key_col:[1,.5,.25],key_e:3,fill_col:[.55,.3,.6],arena_col:[1,.55,.25]},NIGHT:{body:"moon",body_az:62,body_el:38,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.45,.7],body_rings:[[1.75,.1],[3.25,.06]],exposure:1,stops:[[-90,[.004,.003,.01]],[-2,[.02,.02,.05]],[0,[.06,.05,.12]],[5,[.04,.03,.1]],[15,[.02,.015,.07]],[40,[.008,.006,.04]],[90,[.003,.002,.02]]],glow:[[.5,.006,[.45,.4,.8]],[.11,.012,[.7,.62,.85]],[.03,.04,[.9,.8,.8]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:4e3,far1:[.025,.022,.055],far2:[.012,.01,.03],cloud_scale:1.6,cov0:.55,cov1:.76,cloud_opacity:.6,cloud_max:.7,cloud_lit_near:[.1,.1,.2],cloud_lit_far:[.05,.05,.12],cloud_shadow:[.01,.01,.03],cloud_rim:[.14,.14,.26],g_near:[.014,.012,.028],g_far:[.004,.004,.012],g_road:[.03,.026,.045],stone:[[.14,.13,.2],[.17,.16,.24],[.12,.11,.17],[.2,.18,.27]],rim_stone:[.17,.16,.23],moss:[.02,.03,.03],cs_stone:[.03,.026,.05],cs_roof:[.012,.01,.025],win_col:[1,.7,.25],win_emit:4,flag_col:[.25,.02,.05],torch_col:[1,.5,.15],sil:[.006,.005,.012],sil_rim:[.08,.09,.2],banner:[.2,.02,.05],glow_col:[.3,.4,1],line_col:[.4,.55,1],rune_col:[.65,.8,1],grass_tip:[.05,.07,.15],grass_base:[.01,.01,.03],ember_col:[1,.5,.15],emit:1,sparkles:8,world:[.01,.01,.04],fog:[.05,.05,.12],key_col:[.6,.65,1],key_e:1.2,fill_col:[.3,.25,.6],arena_col:[.55,.6,1]}},gr=78,gh=[90,270];function Af(i,t){let e=i==="night"?mh.NIGHT:i==="day"?{...ci(mh.SUNSET),win_emit:1,sil_rim:[.35,.35,.4],sil:[.05,.05,.06],banner:[.55,.05,.08],flag_col:[.6,.05,.1],glow_col:[.95,.5,.2],grass_tip:[.3,.28,.15],grass_base:[.08,.07,.04],g_near:[.14,.12,.08],g_far:[.1,.1,.08],g_road:[.2,.16,.11],cs_stone:[.22,.2,.22],cs_roof:[.12,.08,.1]}:mh.SUNSET,n=e.emit,s=n*.75,r=an(13),o=an(41),a=new he,c=[un(e.body_az,e.body_el)],l=gh.map(z=>[gr*Math.cos(ce(z)),gr*Math.sin(ce(z))]),h=ce(e.body_az),u=[Math.cos(h),Math.sin(h)],p=(()=>{let z=new S(.8,.6,0).normalize();return[z.x,z.y,0]})(),m=(z,C,L)=>{let B=(z%360+360)%360;return B>255&&B<285&&C>L},g=e.stone,_=(z,C)=>{let L=Math.hypot(z,C),B=Ot((L-12)/10)*.35*(Math.sin(z*.09)+Math.cos(C*.11)+.5*Math.sin((z+C)*.19));B+=Ot((L-60)/60)*3*Math.sin(z*.05+1)*Math.cos(C*.04);for(let[X,H]of l)B*=ye(22,40,Math.hypot(z-X,C-H));return B},d=(z,C)=>{let L=0;for(let B of gh){let X=ce(B),H=Math.cos(X),N=Math.sin(X),k=z*H+C*N,q=Math.abs(-z*N+C*H);k>9&&(L=Math.max(L,Math.exp(-((q/4)**2))*ye(9,16,k)*(1-ye(gr-10,gr-2,k))))}return L},f=(z,C)=>{let L=Ot((Math.hypot(z,C)-10)/70)**.8,B=Ve(z*.06+3,C*.06-7,3);return Zt(de(Zt(e.g_near,e.g_far,L),.75+.5*B),e.g_road,d(z,C)*.8)};a.add(new Tt(dr([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,_,f),pe({flat:!1}))),a.add(Ki({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:s}));let y=new Jt,x=(z,C,L,B,X,H)=>{let N=o.uniform(0,50),k=(V,$)=>ri(X,$,V[0],V[1],N,e.moss),q=(V,$)=>Array.from({length:B},(lt,ft)=>{let R=2*Math.PI*ft/B,b=[H[0]+z*Math.cos(R),H[1]+z*Math.sin(R),V];return y.v(b,k(b,$))}),j=q(C,0),w=q(C+L,1),dt=q(C,0),it=q(C+L,1);for(let V=0;V<B;V++){let $=(V+1)%B;y.f(dt[V],dt[$],it[$],it[V])}y.f(...w),y.f(...[...j].reverse())},M=[],I=Pa(),E=ii({gain:1.05}),A=[];for(let z of[45,135,225,315]){let C=ce(z),L=9.35*Math.cos(C),B=9.35*Math.sin(C);x(.4,.3,1.1,12,g[3],[L,B]),x(.55,1.4,.3,12,g[0],[L,B]);let X=new Tt(I,E);X.position.set(L,B,1.75),a.add(X),M.push({m:X,keys:Array.from({length:451},()=>[r.uniform(.7,.95),r.uniform(.7,.95),r.uniform(1.3,1.9)])}),A.push({pos:[L,B,2.5],color:e.torch_col,intensity:.7,dist:9,flicker:.25})}let F=new Jt,Q=new Jt(!1,2),v=(z,C,L,B,X)=>{let H=Math.cos(B),N=Math.sin(B),k=(q,j,w)=>{let dt=q*L[0],it=j*L[1],V=[C[0]+dt*H-it*N,C[1]+dt*N+it*H,C[2]+w*L[2]];return z.v(V,X(V))};for(let q of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])z.f(...q.map(([j,w,dt])=>k(j,w,dt)))},T=t?6:10;for(let z=0;z<T;z++){let C=2*Math.PI*(z+o.uniform(-.2,.2))/T,L=o.uniform(14,20),B=L*Math.cos(C),X=L*Math.sin(C),H=_(B,X),N=o.uniform(6,9),k=()=>e.cs_stone;v(F,[B,X,H+(N-.2)/2],[.2,.2,N+.2],Math.PI/4,k);let q=o.uniform(0,3.14),j=[-Math.sin(q),Math.cos(q)],w=[Math.cos(q),Math.sin(q)];v(F,[B,X,H+N-.2],[.08,1.3,.08],q,k);let dt=[B,X,H+N-.3],it=(lt,ft)=>{let R=.35*Math.sin(1.4*lt+ft)*lt/5;return[w[0]*R+p[0]*(.15*lt)/5,w[1]*R+p[1]*(.15*lt)/5,0]},V=Array.from({length:6},(lt,ft)=>Array.from({length:3},(R,b)=>Q.v([dt[0]+j[0]*(b-1)*.6,dt[1]+j[1]*(b-1)*.6,dt[2]-ft*.6],de(e.banner,1-.35*ft/5),[it(ft,0),it(ft,Math.PI)]))),$=Q.v([dt[0],dt[1],dt[2]-3.6],de(e.banner,.6),[it(6,0),it(6,Math.PI)]);for(let lt=0;lt<5;lt++)for(let ft=0;ft<2;ft++)Q.f(V[lt][ft],V[lt][ft+1],V[lt+1][ft+1],V[lt+1][ft]);Q.f(V[5][0],V[5][1],$),Q.f(V[5][1],V[5][2],$)}let K=pe({double:!0,morph:!0}),nt=new Tt(Q.geo(),K);nt.morphTargetInfluences=[0,0],a.add(new Tt(F.geo(),pe()),nt,new Tt(y.geo(),pe()));let ct=[];gh.forEach((z,C)=>{let L=new Jt,B=new Jt,X=new Jt,H=new Jt,N=new Jt,k=new Jt(!1,2),q=ce(z),j=[gr*Math.cos(q),gr*Math.sin(q),0],w=q-Math.PI/2,dt=Math.cos(w),it=Math.sin(w),V=U=>[j[0]+U[0]*dt-U[1]*it,j[1]+U[0]*it+U[1]*dt,U[2]],$=U=>{let W=Ce(U[0]*.8+C*10,U[2]*.8),rt=.6+.4*Ot(U[2]/6);return de(e.cs_stone,rt*(.75+.5*W)*(.8+.4*Ot(U[2]/30)))},lt=(U,W,rt,Y)=>{for(let Et of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])U.f(...Et.map(([Mt,ut,Lt])=>{let pt=[W[0]+Mt*rt[0],W[1]+ut*rt[1],W[2]+Lt*rt[2]];return U.v(V(pt),Y(pt))}))},ft=(U,W,rt,Y,Et)=>{let Mt=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([pt,At])=>[U+pt*Y,W+At*Y,rt]),ut=[U,W,rt+Et],Lt=pt=>de(e.cs_roof,.8+.4*Ot((pt[2]-22)/22));for(let pt=0;pt<4;pt++){let At=Mt[pt],Ft=Mt[(pt+1)%4];B.f(B.v(V(At),Lt(At)),B.v(V(Ft),Lt(Ft)),B.v(V(ut),Lt(ut)))}};lt(L,[0,0,6],[40,4,12],$);for(let U=-18;U<=18;U+=2.6)if(Math.abs(U)>4.6)for(let W of[-1.6,1.6])lt(L,[U,W,12.7],[1.4,.8,1.4],$);for(let U of[-20,20]){lt(L,[U,0,11],[8,8,22],$);for(let W of[12,20])lt(L,[U,0,W],[8.6,8.6,.6],$);ft(U,0,22,4.7,9),lt(L,[U,0,31],[.12,.12,9],$)}lt(L,[0,0,17],[7,7,34],$);for(let U of[13,24])lt(L,[0,0,U],[7.6,7.6,.6],$);ft(0,0,34,4.3,10),lt(L,[0,0,46.5],[.12,.12,5],$);for(let U of[-2.9,2.9])lt(L,[U,-3.75,3.8],[.9,.6,7.6],$);lt(L,[0,-3.75,7.7],[6.8,.6,.9],$),lt(H,[0,-3.6,3.6],[4.6,.3,7.2],U=>U[1]<-4.5?[.04,.025,.02]:[.006,.005,.008]);for(let U=0;U<7;U++)lt(H,[-2.1+.7*U,-3.85,3.7],[.12,.2,7.2],()=>[.02,.016,.014]);for(let U of[2,4.5,6.8])lt(H,[0,-3.85,U],[4.6,.2,.12],()=>[.02,.016,.014]);{let U=Array.from({length:9},(rt,Y)=>[2.3*Math.cos(Math.PI*Y/8),7.2+2.3*Math.sin(Math.PI*Y/8)]);H.f(...U.map(([rt,Y])=>H.v(V([rt,-3.75,Y]),[.006,.005,.008])));let W=[[-3,-3.8,.45],[3,-3.8,.45],[5,-11,.03],[-5,-11,.03]];H.f(...[...W].reverse().map(rt=>H.v(V(rt),[.04,.025,.02])))}for(let U of[9.5,15,20.5,26,31])lt(X,[0,-3.62,U],[.8,.3,1.7],()=>[1,1,1]);for(let U of[-20,20])for(let W of[5,10,15,20])lt(X,[U,-4.12,W],[.8,.3,1.7],()=>[1,1,1]);for(let U of[-4.3,4.3]){lt(L,[U,-3.8,4.2],[.15,.15,1],$);let W=new je(.35,1),rt=W.attributes.position;for(let Et=0;Et<rt.count;Et+=3)N.f(...[0,1,2].map(Mt=>N.v(V([U+rt.getX(Et+Mt),-3.8+rt.getY(Et+Mt),5.1+rt.getZ(Et+Mt)*1.5]),[1,1,1])));W.dispose();let Y=V([U,-4.6,5.3]);C===0&&A.push({pos:Y,color:e.torch_col,intensity:.6,dist:12,flicker:.3})}for(let[U,W,rt,Y,Et]of[[-20,0,31,3,1.5],[20,0,31,3,1.5],[0,0,46.8,4,2]]){let Mt=[0,.2,.4,.6,.82],ut=(Ct,kt)=>{let jt=.5*Et*Math.sin(7*Ct+kt)*Ct,J=.1*Et*Math.sin(5*Ct+kt)*Ct;return[-jt*it,jt*dt,J]},Lt=(Ct,kt,jt)=>k.v(V([Ct,W,kt]),e.flag_col,[ut(jt,0),ut(jt,Math.PI)]),pt=Mt.map(Ct=>Lt(U+Y*Ct,rt+Et,Ct)),At=Mt.map(Ct=>Lt(U+Y*Ct,rt,Ct)),Ft=Lt(U+Y,rt+Et,1),Nt=Lt(U+Y,rt,1),Rt=Lt(U+.9*Y,rt+Et/2,.9);for(let Ct=0;Ct<4;Ct++)k.f(At[Ct],At[Ct+1],pt[Ct+1],pt[Ct]);k.f(pt[4],Ft,Rt),k.f(At[4],Rt,Nt),k.f(pt[4],Rt,At[4])}a.add(new Tt(L.geo(),pe()),new Tt(B.geo(),pe()),new Tt(H.geo(),pe({double:!0}))),a.add(new Tt(X.geo(),vn(e.win_col,Math.min(1.6,.5+.3*e.win_emit*n))),new Tt(N.geo(),vn(e.torch_col,1.5)));let b=new Tt(k.geo(),pe({double:!0,morph:!0}));b.morphTargetInfluences=[0,0],a.add(b),ct.push(b)});class vt{constructor(C){Fe(this,"mode",C);Fe(this,"mb");Fe(this,"war",[]);Fe(this,"pending",[]);Fe(this,"faces",[]);this.mb=new Jt(!1,C==="clash"?2:C==="surge"?1:0)}part(C,L,B,X,H,N,k=-1,q=!1){let j=B.clone().sub(L);if(j.length()<1e-6)return;let w=j.normalize(),dt=Math.abs(w.z)<.9?new S(0,0,1):new S(1,0,0),it=w.clone().cross(dt).normalize(),V=w.clone().cross(it),$=[[L,X],[B,H]].map(([lt,ft])=>Array.from({length:N},(R,b)=>{let U=2*Math.PI*b/N,W=lt.clone().addScaledVector(it,Math.cos(U)*ft).addScaledVector(V,Math.sin(U)*ft),rt=new Bt(W.x-C.x,W.y-C.y),Y=rt.length()>1e-6?.5+.5*rt.normalize().dot(new Bt(u[0],u[1])):.5;return this.add([W.x,W.y,W.z],Zt(e.sil,e.sil_rim,.45*Y*Y),k,q)}));for(let lt=0;lt<N;lt++){let ft=(lt+1)%N;this.faces.push([$[0][lt],$[0][ft],$[1][ft],$[1][lt]])}this.faces.push([...$[0]].reverse()),this.faces.push($[1])}add(C,L,B,X){return this.pending.push({p:C,c:L,wi:B,arm:X}),this.pending.length-1}warrior(C,L,B,X){let H=this.war.length,N=new ie().makeRotationZ(L-Math.PI/2),k=(dt,it,V)=>C.clone().add(new S(dt,it,V).applyMatrix4(N)),q=C.clone().add(new S(0,0,1)),j=(dt,it,V,$,lt,ft=!1)=>this.part(q,k(...dt),k(...it),V,$,lt,H,ft);for(let[dt,it,V]of[[-1,[-.22,.38,0],[-.17,.35,.5]],[1,[.22,-.3,0],[.17,-.05,.5]]])j([dt*.11,0,.95],V,.1,.075,4),j(V,it,.075,.06,4);j([0,0,.95],[0,.1,1.48],.2,.23,6),j([0,.16,1.58],[0,.16,1.74],.11,.11,6),j([0,.16,1.74],[0,.16,1.92],.12,.02,6),j([-.27,.1,1.42],[-.4,.38,1.25],.07,.06,4),j([-.4,.38,1.25],[-.3,.62,1.3],.06,.05,4),B!=="spear"&&j([-.35,.62,1.2],[-.35,.7,1.2],.42,.42,8),j([.27,.1,1.42],[.42,.3,1.6],.07,.06,4,!0),j([.42,.3,1.6],[.3,.5,1.85],.06,.05,4,!0),B==="sword"?j([.3,.5,1.85],[.3,1.25,2.45],.03,.02,4,!0):B==="axe"?(j([.3,.5,1.7],[.3,1,2.35],.035,.035,4,!0),j([.3,.95,2.28],[.3,1.12,2.45],.16,.02,4,!0)):(j([.3,-.2,1.4],[.3,2,2.1],.03,.025,4,!0),j([.3,2,2.1],[.3,2.3,2.2],.06,0,4,!0));let w=[[-.22,-.05,1.45],[.22,-.05,1.45],[.28,-.55,.8],[-.28,-.55,.8]].map(dt=>{let it=k(...dt);return this.add([it.x,it.y,it.z],e.sil,H,!1)});this.faces.push(w),this.war.push({team:X,f:new S(0,1,0).applyMatrix4(N),axis:new S(1,0,0).applyMatrix4(N),pivot:k(.27,.1,1.42)})}finish(){let C=this.pending.map(L=>{let B=[],X=new S(...L.p);if(this.mode==="clash")for(let H of[0,1]){if(L.wi<0){B.push([0,0,0]);continue}let N=this.war[L.wi],k=N.team===H,q=N.f.clone().multiplyScalar(k?.32:-.22),j=X.clone().add(q);L.arm&&(j=N.pivot.clone().add(q).add(X.clone().sub(N.pivot).applyAxisAngle(N.axis,ce(k?-60:25)))),B.push([j.x-X.x,j.y-X.y,j.z-X.z])}if(this.mode==="surge"){let H=this.war[L.wi];B.push([H.f.x*.5,H.f.y*.5,L.arm?.3:0])}return this.mb.v(L.p,L.c,B)});for(let L of this.faces)this.mb.f(...L.map(B=>C[B]));return this.mb.geo()}}let ht=pe({morph:!0,double:!0}),et=[],D=t?5:8;for(let z=0;z<D;z++){let C=2*Math.PI*(z+o.uniform(-.3,.3))/D,L=o.uniform(17,36);m(C*180/Math.PI,L,15)&&(C+=.6);let B=L*Math.cos(C),X=L*Math.sin(C),H=new vt("clash");for(let k=0;k<3;k++){let q=o.uniform(0,6.283),j=new S(B+o.uniform(-4.5,4.5),X+o.uniform(-4.5,4.5),0),w=new S(Math.cos(q),Math.sin(q),0),dt=o.uniform(.9,1.1);for(let[it,V]of[[0,-1],[1,1]]){let $=j.clone().addScaledVector(w,dt*V);$.z=_($.x,$.y),H.warrior($,it===0?q:q+Math.PI,o.choice(["sword","sword","axe","spear"]),it)}}let N=new Tt(H.finish(),ht);N.morphTargetInfluences=[0,0],a.add(N),et.push({m:N,half:r.choice([24,30,36,45])})}{let z=new vt(null);for(let C=0;C<16;C++){let L=o.uniform(0,6.283),B=o.uniform(13,45);if(m(L*180/Math.PI,B,14))continue;let X=new S(B*Math.cos(L),B*Math.sin(L),0);X.z=_(X.x,X.y);let H=new ie().makeRotationZ(o.uniform(0,6.283)),N=(q,j,w)=>X.clone().add(new S(q,j,w).applyMatrix4(H)),k=X.clone().add(new S(0,0,.2));z.part(k,N(0,-.4,.18),N(0,.45,.2),.2,.22,6),z.part(k,N(0,.55,.18),N(0,.7,.2),.11,.11,6),z.part(k,N(-.1,-.4,.12),N(-.2,-1.2,.1),.09,.07,4),z.part(k,N(.1,-.4,.12),N(.25,-1.1,.12),.09,.07,4),z.part(k,N(-.25,.35,.18),N(-.6,.1,.12),.06,.05,4),z.part(k,N(.25,.35,.18),N(.55,.7,.1),.06,.05,4),z.part(k,N(.7,.2,0),N(.9,.2,1.8),.03,.025,4),z.part(k,N(-.9,0,.05),N(-.9,0,.12),.4,.4,8)}a.add(new Tt(z.finish(),pe({double:!0})))}let tt;{let z=new vt("surge"),C=[];for(let B=0;B<6;B++){let X=o.uniform(0,6.283),H=o.uniform(45,90);m(X*180/Math.PI,H,40)&&(X+=.8),C.push(new S(H*Math.cos(X),H*Math.sin(X),0))}let L=t?70:120;for(let B=0;B<L;B++){let X=C[B%C.length],H=X.clone().add(new S(o.uniform(-9,9),o.uniform(-9,9),0));H.z=_(H.x,H.y);let N=Math.atan2(X.y-H.y,X.x-H.x)+o.uniform(-.5,.5),k=z.war.length,q=new ie().makeRotationZ(N-Math.PI/2),j=(dt,it,V)=>H.clone().add(new S(dt,it,V).applyMatrix4(q)),w=H.clone().add(new S(0,0,.9));z.part(w,j(0,0,0),j(0,0,1.45),.28,.22,4,k),z.part(w,j(0,.05,1.45),j(0,.05,1.65),.12,.12,4,k),z.part(w,j(.3,-.3,.9),j(.3,2,2.4),.03,.025,4,k,!0),z.war.push({team:0,f:new S(0,1,0).applyMatrix4(q),axis:new S(1,0,0).applyMatrix4(q),pivot:j(0,0,1.4)})}tt=new Tt(z.finish(),ht),tt.morphTargetInfluences=[0,0],a.add(tt)}let O=new Tt(pr({r,tufts:t?320:600,rmin:11.5,rspan:55,gh:_,h:[.45,1.1],skip:(z,C)=>m(z,C,16),base:z=>de(e.grass_base,1-.6*Ot((z-12)/55)),tip:z=>de(e.grass_tip,1-.6*Ot((z-12)/55))}),pe({emit:.1,double:!0,morph:!0}));O.morphTargetInfluences=[0],a.add(O);let G=oi({r:o,n:t?24:40,at:()=>{let z=o.uniform(0,6.283),C=30*Math.sqrt(o.random());return[C*Math.cos(z),C*Math.sin(z),o.uniform(.5,9)]},move:()=>[o.uniform(-1,1),0,o.uniform(1.5,3.5)],col:e.ember_col,size:.4});i!=="day"&&a.add(G.obj);let ot=si({th:e,W:t?512:1024,bodies:c,body:{kind:e.body,r:e.body_r,span:e.body_span,size:384,opts:{tint:e.body_tint,halo:e.body_halo,rings:e.body_rings,sunInner:[.9,.5,.32],sunHalo:.5,moonGain:1.15}},sparkles:e.sparkles??0,bigShare:.25});return a.add(ot.group),{group:a,floor:.6,update(z){ot.update(z);for(let N of et){let k=Math.floor(z/N.half),q=(z-k*N.half)/N.half,j=q*q*(3-2*q),w=k%2===0?1-j:j;N.m.morphTargetInfluences[0]=w,N.m.morphTargetInfluences[1]=1-w}tt.morphTargetInfluences[0]=cn(z,60);let C=cn(z,90);nt.morphTargetInfluences[0]=C,nt.morphTargetInfluences[1]=1-C;for(let N of ct)N.morphTargetInfluences[0]=C,N.morphTargetInfluences[1]=1-C;O.morphTargetInfluences[0]=cn(z,45);let L=z%3600,B=Math.floor(L/8),X=(L-B*8)/8,H=X*X*(3-2*X);for(let N of M){let k=N.keys[B%450],q=N.keys[(B+1)%450];N.m.scale.set(k[0]+(q[0]-k[0])*H,k[1]+(q[1]-k[1])*H,k[2]+(q[2]-k[2])*H)}G.update(z)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.55},fog:{color:e.fog,near:60,far:160},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...A],dispose(){ot.dispose(),ai(a)}}}var _h={SUNSET:{body:"sun",body_az:90,body_el:15,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.24,.17,.3],g_far:[.05,.03,.1],g_alt:[.2,.15,.16],stone:[[.26,.22,.4],[.3,.25,.44],[.22,.19,.36],[.34,.28,.48]],rim_stone:[.34,.28,.46],moss:[.05,.1,.08],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[1,.5,.2],bark_sun_k:.55,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[.3,.5,.7],back_h:.5,back_w:.7,back_rim:[1,.55,.22],back_rim_k:1,bush_lo:[.04,.025,.09],bush_hi:[.3,.22,.4],grass_tip:[[.12,.32,.42],[.5,.62,.45]],grass_base:[.04,.03,.1],grass_rim:[1,.55,.2],grass_emit:.2,flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:.7,beam_col:[1,.7,.35],beam_gain:1.3,firefly_col:[1,.75,.35],firefly_n:40,sparkles:14,world:[.14,.07,.22],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1],fill_e:1,arena_col:[.35,.55,1],ring_col:[.1,.35,1]},NIGHT:{body:"moon",body_az:90,body_el:58,body_r:.04,exposure:1,stops:[[-90,[.004,.004,.015]],[0,[.02,.022,.075]],[5,[.014,.016,.058]],[15,[.009,.011,.04]],[35,[.0045,.0055,.02]],[90,[.0015,.002,.009]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.09,.12,.24],cloud_lit_far:[.03,.04,.09],cloud_shadow:[.004,.006,.018],cloud_rim:[.12,.16,.3],g_near:[.2,.18,.38],g_far:[.03,.025,.09],g_alt:[.12,.14,.3],stone:[[.18,.2,.42],[.22,.24,.48],[.16,.17,.36],[.25,.27,.52]],rim_stone:[.3,.28,.5],moss:[.02,.06,.07],bark_dark:[.05,.035,.14],bark_lit:[.3,.2,.55],bark_sun:[.3,.4,.85],bark_sun_k:.25,back_lit:[[.12,.09,.26],[.09,.1,.28]],back_dark:[[.02,.015,.07],[.07,.07,.2]],back_haze:[0,0,0],back_h:1,back_w:1,back_rim:[.35,.45,.9],back_rim_k:.25,bush_lo:[.03,.02,.09],bush_hi:[.16,.2,.42],grass_tip:[[.1,.25,.45],[.3,.55,.8]],grass_base:[.03,.03,.12],grass_rim:[.45,.55,1],grass_emit:.35,flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1,beam_col:[.35,.6,1],beam_gain:1,firefly_col:[.35,.75,1],firefly_n:70,sparkles:30,world:[.02,.02,.08],fog:[.04,.06,.15],key_col:[.4,.5,1],key_e:1.2,fill_col:[.2,.25,.5],fill_e:0,arena_col:[.25,.5,1],ring_col:[.1,.35,1]}};function Rf(i,t){let e=i==="night"?_h.NIGHT:i==="day"?{...ci(_h.SUNSET),beam_col:[1,.95,.8],firefly_n:0,flower_emit:.3,grass_rim:[1,.95,.75],grass_emit:.05}:_h.SUNSET,n=e.emit,s=n*.75,r=an(11),o=an(99),a=new he,c=ce(e.body_az),l=[Math.cos(c),Math.sin(c)],h=(()=>{let D=new S(.8,.6,0).normalize();return[D.x,D.y,0]})(),u=(D,tt)=>Ot((Math.hypot(D,tt)-12)/10)*.25*(Math.sin(D*.22)+Math.cos(tt*.27)+.5*Math.sin((D+tt)*.5)),p=(D,tt)=>{let O=Ot((Math.hypot(D,tt)-6)/34)**.7,G=.9+.2*(Math.sin(D*.5)*Math.cos(tt*.5)*.5+.5),ot=Ve(D*.09+3,tt*.09-7,3),z=Ce(D*1.7,tt*1.7),C=Zt(e.g_near,e.g_far,O);return C=Zt(C,e.g_alt,Ot((ot-.45)*2.2)*.6*(1-.5*O)),de(C,G*(1+.25*(z-.5)*(1-O)))},m=Pi(e,[un(e.body_az,e.body_el)]);a.add(new Tt(dr([0,4,8,10,12,13,14,16,18,21,24,28,33,40,48,57,65,72,90,110,140],64,u,p),pe({flat:!1})));let g=[[[14,14,32],[3,4,.6]],[[20,8,32],[4,0,.6]]],_=g.map(([,D])=>[D[0],D[1]]),d=D=>{let tt=_.reduce((G,[ot,z])=>G+Math.exp(-((Math.hypot(D[0]-ot,D[1]-z)/5.5)**2)),0),O=(.55+.45*Math.min(1,tt))*(1-.4*Ot((Math.hypot(D[0],D[1])-5)/5))*.2*.5*e.beam_gain;return de(e.beam_col,O)};a.add(Ki({th:e,r,z0:0,h:.6,rimZ0:0,rimH:.35,glowZ0:0,glowH:.45,lineCol:[.15,.5,1],runeCol:[.35,.8,1],glowCol:[.1,.4,1],glow:s,patchy:!1,bake:d}));{let D=new Jt;for(let tt=0;tt<10;tt++){let O=r.uniform(0,6.283),G=r.uniform(11.5,17),ot=r.uniform(.8,2),z=r.choice(e.stone),C=o.uniform(0,50),L=new je(1,1),B=L.attributes.position;for(let w=0;w<B.count;w++){let dt=r.uniform(.8,1.2);B.setXYZ(w,B.getX(w)*dt,B.getY(w)*dt,B.getZ(w)*dt)}let X=G*Math.cos(O),H=G*Math.sin(O),N=r.uniform(0,6.28),k=new ie().compose(new S(X,H,u(X,H)+.3*ot),new Ke().setFromAxisAngle(new S(0,0,1),N),new S(ot,ot*.9,ot*.7)),q=L.index?L.toNonIndexed():L,j=q.attributes.position;for(let w=0;w<j.count;w+=3){let dt=[];for(let it=0;it<3;it++){let V=j.getX(w+it),$=j.getY(w+it),lt=j.getZ(w+it),ft=new S(V,$,lt).applyMatrix4(k),R=.6+.4*Ot((lt+1)/2)**.7,b=Ce(V*2+C,$*2+lt);dt.push(D.v([ft.x,ft.y,ft.z],Zt(de(z,R*(.88+.24*b)),e.moss,Ot(1-(lt+1)/2*3)*.55)))}D.f(...dt)}q.dispose()}a.add(new Tt(D.geo(),pe()))}let f=[],y=(D,tt,O)=>{for(let G=0;G<300;G++){let ot=r.uniform(0,360);if(O&&ot>245&&ot<295)continue;let z=r.uniform(D,tt),C=z*Math.cos(ce(ot)),L=z*Math.sin(ce(ot));if(f.every(([B,X])=>Math.hypot(C-B,L-X)>5.5))return f.push([C,L]),[C,L]}return null},x=pe({morph:!0}),M=ii({gain:2.2}),I=[],E=t?12:18,A=t?6:10;for(let D=0;D<E+A;D++){let tt=D<E,O=tt?y(15,26,!0):y(32,46,!1);if(!O)continue;let G=tt?r.uniform(20,32):r.uniform(30,40),ot=tt?r.uniform(1.1,2):r.uniform(2.2,3.2),z=tt&&r.random()<.25,C=F(O[0],O[1],G,ot,z),L=new Tt(C.bark.geo(),x);L.morphTargetInfluences=[0,0],a.add(L);let B=null;z&&(B=new Tt(C.eyes.geo(),M),B.morphTargetInfluences=[0,0],a.add(B));let X=[];if(z){let H=Array.from({length:Math.floor(174)},(N,k)=>60+k*20);for(let N=0;N<5;N++)X.push(H.splice(r.int(0,H.length-1),1)[0]);X.sort((N,k)=>N-k)}I.push({mesh:L,eyes:B,P:r.choice([100,120,150,180,200]),flip:r.int(0,1),blinks:X})}function F(D,tt,O,G,ot){let z=new Jt(!1,2),C=new Jt(!1,2),L=new S(-D,-tt,0).normalize(),B=r.uniform(1.2,2.4),X=new S(r.uniform(-1,1),r.uniform(-1,1),0).normalize().multiplyScalar(r.uniform(.03,.1)),H=r.uniform(0,6.28),N=r.uniform(.4,1),k=r.choice([3,4,5]),q=r.uniform(0,6.28),j=U=>new S(D+X.x*U+N*Math.sin(.28*U+H),tt+X.y*U+N*Math.cos(.23*U+H),U),w=(U,W)=>{let rt=Math.max(U,0),Y=G*(1-.62*Ot(rt/O))*(1+1.1*Math.exp(-rt/1.6)),Et=W+.06*rt;return Y*(1+.28*Math.cos(k*Et+q)*Math.exp(-rt/3.5)+.07*Math.cos(2*Et+H))},dt=U=>{let W=B*Ot(Math.max(U,0)/O)**2;return[h[0]*W,h[1]*W,0]},it=(U,W,rt)=>{let Y=new S(U.x,U.y,0);Y.lengthSq()>1e-12&&Y.normalize();let Et=Math.max(0,Y.x*L.x+Y.y*L.y),Mt=.6+.4*Math.sin(rt),ut=Zt(e.bark_dark,e.bark_lit,Ot(.85*Et*Mt*(1-.3*Ot(W/O)))),Lt=Math.max(0,Y.x*l[0]+Y.y*l[1]);ut=Zt(ut,e.bark_sun,Ot(e.bark_sun_k*Lt*(.5+.5*Mt)*(1-.5*Ot(W/O)))),ut=de(ut,.72+.28*Ot(W/1.6));let pt=Ot(1-W/2.2)*.55*Ce(U.x*3+D,U.y*3+W*.8);return Zt(ut,e.moss,pt)},V=(U,W)=>z.v([U.x,U.y,U.z],W,[dt(U.z),[0,0,0]]),$=t?10:14,lt=t?8:12,ft=[];for(let U=0;U<$;U++){let W=-.5+(O+.5)*(U/($-1))**1.15,rt=j(W),Y=[];for(let Et=0;Et<lt;Et++){let Mt=2*Math.PI*Et/lt,ut=new S(Math.cos(Mt),Math.sin(Mt),0);Y.push(V(rt.clone().addScaledVector(ut,w(W,Mt)),it(ut,W,Mt*7+W*.4)))}ft.push(Y)}for(let U=0;U<$-1;U++)for(let W=0;W<lt;W++){let rt=(W+1)%lt;z.f(ft[U][W],ft[U][rt],ft[U+1][rt],ft[U+1][W])}let R=V(j(O).add(new S(0,0,.3)),e.bark_dark);for(let U=0;U<lt;U++)z.f(R,ft[$-1][U],ft[$-1][(U+1)%lt]);let b=r.int(2,4);for(let U=0;U<b;U++){let W=O*r.uniform(.35,.85),rt=r.uniform(0,6.28),Y=new S(Math.cos(rt),Math.sin(rt),0),Et=j(W).addScaledVector(Y,w(W,rt)*.7),Mt=Y.clone().add(new S(0,0,r.uniform(.4,1))).normalize(),ut=r.uniform(3.5,7.5),Lt=new S(-Y.y,Y.x,0),pt=[0,1,2,3,4].map(Nt=>Et.clone().addScaledVector(Mt,ut*(Nt/4)).add(new S(0,0,.35*ut*(Nt/4)**2)).addScaledVector(Lt,Math.sin(Nt/4*3+U)*.5)),At=w(W,rt)*.32,Ft=pt.map((Nt,Rt)=>{let Ct=pt[Math.min(Rt+1,4)].clone().sub(pt[Math.max(Rt-1,0)]).normalize(),kt=Ct.clone().cross(new S(0,0,1));kt.length()<.001&&(kt=new S(1,0,0)),kt.normalize();let jt=Ct.clone().cross(kt);return Array.from({length:6},(J,Ut)=>{let yt=2*Math.PI*Ut/6,wt=kt.clone().multiplyScalar(Math.cos(yt)).addScaledVector(jt,Math.sin(yt));return V(Nt.clone().addScaledVector(wt,At*(1-.85*Rt/4)),it(wt,Nt.z,yt*5+Rt))})});for(let Nt=0;Nt<4;Nt++)for(let Rt=0;Rt<6;Rt++){let Ct=(Rt+1)%6;z.f(Ft[Nt][Rt],Ft[Nt][Ct],Ft[Nt+1][Ct],Ft[Nt+1][Rt])}}if(ot){let U=r.uniform(2.2,9),W=Math.atan2(L.y,L.x)+r.uniform(-.6,.6),rt=new S(Math.cos(W),Math.sin(W),0),Y=new S(-rt.y,rt.x,0),Et=j(U).addScaledVector(rt,w(U,W)),Mt=r.uniform(.18,.32),ut=Mt*1.25,Lt=(Ft,Nt,Rt)=>Et.clone().addScaledVector(rt,Rt).addScaledVector(Y,Ft).add(new S(0,0,Nt)),pt=Array.from({length:10},(Ft,Nt)=>V(Lt(Math.cos(2*Math.PI*Nt/10)*(ut+Mt*1.7),Math.sin(2*Math.PI*Nt/10)*Mt*1.7,.07),[.004,.003,.02]));z.f(...pt);let At=[[-1,-.25],[.15,-.3],[1,.35],[-.1,.28]];for(let Ft of[1,-1]){let Nt=At.map(([Ct,kt])=>[Ft*(ut+Ct*Mt),kt*Mt]);Ft===-1&&(Nt=Nt.reverse());let Rt=Nt.map(([Ct,kt])=>{let jt=Lt(Ct,kt,.11);return C.v([jt.x,jt.y,jt.z],[1,.04,.04],[dt(jt.z),[0,0,U-jt.z]])});C.f(...Rt)}}return{bark:z,eyes:C}}let Q=e.grass_tip,v=pe({emit:e.grass_emit,double:!0,morph:!0}),T=t?260:500,K=[0,1].map(()=>{let D=new Map,tt=pr({r,tufts:T,rmin:10.6,rspan:34,gh:u,base:G=>de(e.grass_base,1-.6*Ot((G-11)/34)),tip:(G,ot)=>{let z=Math.round(G*1e3),C=D.get(z);C||(C=Zt(Q[0],Q[1],r.random()),D.set(z,C));let L=.3*Math.abs(Math.cos(ot-c))*(i==="night"?.5:1);return de(Zt(C,e.grass_rim,L),1-.6*Ot((G-11)/34))}}),O=new Tt(tt,v);return O.morphTargetInfluences=[0],a.add(O),O});{let D=new Jt;for(let tt=0;tt<(t?40:70);tt++){let O=14+22*o.random(),G=o.uniform(0,2*Math.PI),ot=O*Math.cos(G),z=O*Math.sin(G),C=u(ot,z),L=[ot+o.uniform(-.06,.06),z+o.uniform(-.06,.06),C+o.uniform(.35,.7)];D.f(D.v([ot-.012,z,C],[.02,.07,.05]),D.v([ot+.012,z,C],[.02,.07,.05]),D.v([L[0]+.012,L[1],L[2]],[.08,.25,.12]),D.v([L[0]-.012,L[1],L[2]],[.08,.25,.12]));let B=o.choice(e.flower),X=D.v([L[0],L[1],L[2]+.02],[1,.9,.5]),H=Array.from({length:6},(N,k)=>{let q=2*Math.PI*k/6;return D.v([L[0]+.05*Math.cos(q),L[1]+.05*Math.sin(q),L[2]+.025],B)});for(let N=0;N<6;N++)D.f(X,H[N],H[(N+1)%6])}a.add(new Tt(D.geo(),pe({emit:e.flower_emit,double:!0})))}{let D=new Jt;for(let tt=0;tt<14;tt++){let O=ce(r.choice([r.uniform(195,245),r.uniform(295,345),r.uniform(0,360)])),G=r.uniform(16,34),ot=r.uniform(1,1.8),z=G*Math.cos(O),C=G*Math.sin(O),L=u(z,C);for(let B=0;B<4;B++){let X=[r.uniform(-1.4,1.4),r.uniform(-1,1),r.uniform(.2,1)],H=r.uniform(.9,1.6),N=new je(H,1),k=N.attributes.position;for(let q=0;q<k.count;q+=3){let j=[];for(let w=0;w<3;w++){let dt=k.getZ(q+w)+X[2];j.push(D.v([z+(k.getX(q+w)+X[0])*ot,C+(k.getY(q+w)+X[1])*ot,L+dt*ot*.75],Zt(e.bush_lo,e.bush_hi,Ot((dt+.3)/2.6)*.8)))}D.f(...j)}N.dispose()}}a.add(new Tt(D.geo(),pe()))}{let D=new Jt;[[52,70,50,70],[59,80,55,75],[66,90,60,80]].forEach(([O,G,ot,z],C)=>Tf(D,{r,idx:C,radius:O,count:t?Math.round(G*.6):G,hmin:ot,hmax:z,th:e,sky:m,sunAz:c}));let tt=ii({fog:!1,gain:i==="night"?.45:.6});tt.toneMapped=!1,a.add(new Tt(D.geo(),tt))}let nt=new Jt(!0);g.forEach(([D,tt])=>{for(let[O,G]of[[1,.45],[.7,.6],[.4,.8]])Sf(nt,D,tt,O,G,e.beam_col,.35*e.beam_gain,2.6)});let ct=new Jt(!0);mr(ct,9.4,.7,(D,tt)=>{let O=_.reduce((G,[ot,z])=>G+Math.exp(-((Math.hypot(D-ot,tt-z)/5.5)**2)),0);return(.55+.45*Math.min(1,O))*ye(0,3,9.4-Math.hypot(D,tt))},e.beam_col,.3*.5*e.beam_gain);let vt=new Tt(nt.geo(),vs());a.add(vt,new Tt(ct.geo(),vs()));let ht=oi({r,n:t?Math.round(e.firefly_n*.6):e.firefly_n,at:()=>{let D=r.uniform(0,6.283),tt=r.uniform(0,22);return[tt*Math.cos(D),tt*Math.sin(D),r.uniform(.8,7)]},move:()=>{let D=r.uniform(-1.5,1.5);return[D,D*.5,r.uniform(1,3)]},col:e.firefly_col,size:.45,twinkle:!0});e.firefly_n>0&&a.add(ht.obj);let et=si({th:e,W:t?512:1024,bodies:[un(e.body_az,e.body_el)],body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0});return a.add(et.group),{group:a,floor:.62,update(D){et.update(D);for(let O of I){let G=cn(D,O.P/2,.15,1,O.flip),ot=0;for(let z of O.blinks)Math.abs(D%3600-z)<3&&(ot=1-Math.abs(D%3600-z)/3);O.mesh.morphTargetInfluences[0]=G,O.mesh.morphTargetInfluences[1]=ot,O.eyes&&(O.eyes.morphTargetInfluences[0]=G,O.eyes.morphTargetInfluences[1]=ot)}K.forEach((O,G)=>{O.morphTargetInfluences[0]=cn(D,45,0,1,G)});let tt=cn(D,450);vt.rotation.set(.03*tt*.1,.02*tt*.1,0),ht.update(D)},key:{dir:un(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.5),ground:e.g_near,intensity:i==="night"?.25:i==="day"?.7:.4},fog:{color:e.fog,near:45,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.6,dist:16},{pos:[0,0,.9],color:e.ring_col,intensity:.35,dist:8}],dispose(){et.dispose(),ai(a)}}}var yh={SUNSET:{body:"sun",body_az:90,body_el:8,body_r:.03,exposure:1,stops:[[-90,[.05,.03,.07]],[-2,[.3,.1,.12]],[0,[.55,.17,.14]],[3,[.9,.32,.1]],[8,[.75,.22,.18]],[16,[.5,.14,.28]],[30,[.26,.08,.34]],[55,[.08,.035,.24]],[90,[.02,.012,.12]]],glow:[[.55,.35,[1,.3,.06]],[.16,.6,[1,.48,.12]],[.045,1.6,[1,.75,.35]]],hw0:.55,anti:.3,anti_col:[.5,.2,.34],stars:.3,star_n:1800,milky:0,far1:[.2,.08,.18],far2:[.11,.05,.14],cloud_scale:1.7,cov0:.5,cov1:.72,cloud_opacity:.9,cloud_lit_near:[1,.5,.16],cloud_lit_far:[.7,.28,.5],cloud_shadow:[.1,.04,.17],cloud_rim:[1,.65,.25],g_near:[.07,.16,.11],g_far:[.16,.07,.22],g_alt:[.1,.1,.07],rock_lo:[.07,.045,.08],rock_hi:[.22,.15,.2],veg:[.035,.085,.07],snow:[.85,.7,.8],light_col:[1,.52,.22],amb:[.16,.1,.24],haze_gain:1,haze_dist:62,stone:[[.22,.17,.32],[.26,.2,.36],[.19,.15,.28],[.3,.24,.4]],moss:[.05,.11,.07],grass_tip:[[.18,.55,.3],[.62,.82,.28]],grass_rim:[1,.55,.2],flower:[[1,.45,.15],[.95,.25,.55],[.9,.7,.2]],flower_emit:.9,emit:1,embers:36,sparkles:22,world:[.2,.08,.3],fog:[.35,.1,.25],key_col:[1,.58,.3],key_e:3.5,fill_col:[.55,.4,1]},NIGHT:{body:"moon",body_az:90,body_el:32,body_r:.04,exposure:1,stops:[[-90,[.002,.003,.008]],[0,[.007,.011,.032]],[5,[.0045,.0075,.024]],[15,[.0028,.005,.017]],[35,[.0014,.0026,.0095]],[90,[5e-4,.001,.0045]]],glow:[[.5,.004,[.3,.4,.9]],[.11,.03,[.5,.62,1]],[.03,.09,[.7,.8,1]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:6500,milky:.01,far1:[.004,.007,.02],far2:[.0018,.003,.009],cloud_scale:1.5,cov0:.56,cov1:.78,cloud_opacity:.55,cloud_lit_near:[.045,.06,.12],cloud_lit_far:[.014,.02,.045],cloud_shadow:[.002,.003,.009],cloud_rim:[.06,.08,.15],g_near:[.02,.05,.07],g_far:[.03,.02,.07],g_alt:[.03,.04,.04],rock_lo:[.015,.02,.04],rock_hi:[.07,.08,.13],veg:[.01,.03,.04],snow:[.55,.62,.85],light_col:[.45,.55,1],amb:[.03,.04,.09],haze_gain:1,haze_dist:75,stone:[[.11,.1,.19],[.13,.12,.22],[.095,.09,.17],[.16,.14,.25]],moss:[.02,.05,.05],grass_tip:[[.04,.2,.2],[.18,.45,.5]],grass_rim:[.45,.55,1],flower:[[.45,.55,1],[.75,.4,1],[.35,.95,.95]],flower_emit:3,emit:1.6,embers:60,sparkles:64,world:[.01,.015,.05],fog:[.04,.06,.15],key_col:[.55,.68,1],key_e:1.5,fill_col:[.2,.25,.5]}},Ji=2.3;function Cf(i,t){let e=i==="night"?yh.NIGHT:i==="day"?{...ci(yh.SUNSET),light_col:[1,.95,.85],amb:[.35,.4,.5],snow:[.95,.97,1],embers:0,flower_emit:.3,grass_rim:[1,.95,.75]}:yh.SUNSET,n=e.emit,s=an(7),r=new he,o=[un(e.body_az,e.body_el),un(e.body_az+180,e.body_el)],a=Pi(e,o),c=(et,D)=>Ot((Math.hypot(et,D)-13)/10)*.25*(Math.sin(et*.22)+Math.cos(D*.27)+.5*Math.sin((et+D)*.5)),l=(et,D)=>{let tt=Ot((Math.hypot(et,D)-10)/50),O=.9+.2*(Math.sin(et*.5)*Math.cos(D*.5)*.5+.5),G=Zt(e.g_near,e.g_far,tt);return G=Zt(G,e.g_alt,Ot((Ve(et*.09+3,D*.09-7,3)-.45)*2.2)*.6),de(G,O*(.9+.25*Ce(et*1.7,D*1.7)))},h=(et,D,tt)=>Zt(de(et,(.6+.4*Ot(D)**.7)*(.88+.24*tt)),e.moss,Ot(1-D*3)*.55);r.add(new Tt(dr([0,4,8,10,12,13,14,16,18,21,24,28,33,40,46,52],64,c,l),pe({flat:!1})));{let et=t?96:144,D=[46,48,51,54,58,62,66,71,76,82,88,95,102,110,118,126,134],tt=D.map(C=>Array.from({length:et},(L,B)=>{let X=2*Math.PI*B/et,H=C*Math.cos(X),N=C*Math.sin(X),k=1;for(let w of[ce(e.body_az),ce(e.body_az+180)]){let dt=Math.abs(((X-w+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI);k*=1-.8*Math.exp(-((dt/ce(17))**2))}let j=(4+42*ye(50,102,C))*(1-.65*ye(112,134,C))*(.12+1.15*bf(H*.032,N*.032,5))*(.55+.9*Ve(H*.01+5,N*.01-3,3))*k+1.2*Ve(H*.09,N*.09,3)*ye(46,60,C);return j*=ye(45.5,52,C),[H,N,c(H,N)+.03+j]})),O=new Jt,G=[],ot=o;D.forEach((C,L)=>{G.push([]);for(let B=0;B<et;B++){let X=tt[L][B],H=2*Math.PI*B/et,N=tt[L][(B+1)%et],k=tt[L][(B-1+et)%et],q=tt[Math.min(L+1,D.length-1)][B],j=tt[Math.max(L-1,0)][B],w=new S(q[0]-j[0],q[1]-j[1],q[2]-j[2]).cross(new S(N[0]-k[0],N[1]-k[1],N[2]-k[2])).normalize();w.z<0&&w.multiplyScalar(-1);let dt=X[2]/45,it=1-w.z,V=Ve(X[0]*.12,X[1]*.12,3),$=de(Zt(e.rock_lo,e.rock_hi,Ot(Ot(dt)**.7+.25*(V-.5))),.8+.4*V);$=Zt($,e.veg,Ot((9-X[2])/9)*Ot(1-it*2.4)*.85),$=Zt($,e.snow,ye(.55,.78,dt+.22*(Ve(X[0]*.07,X[1]*.07,3)-.5))*Ot(1-it*1.7));let lt=0;for(let b of ot)lt=Math.max(lt,Ot(w.x*b[0]+w.y*b[1]+w.z*b[2]));lt=lt**1.2,$=[$[0]*(e.amb[0]+e.light_col[0]*lt*1.6),$[1]*(e.amb[1]+e.light_col[1]*lt*1.6),$[2]*(e.amb[2]+e.light_col[2]*lt*1.6)];let ft=a(Math.cos(H)*Math.cos(.02),Math.sin(H)*Math.cos(.02),Math.sin(.02)).map(b=>$i(b,e.exposure)*e.haze_gain),R=Math.min(.97,Math.max(0,1-Math.exp(-(C-40)/e.haze_dist)+.5*Math.exp(-Math.max(X[2],0)/9)*ye(55,100,C)));$=Zt($,ft,R),$=Zt(l(X[0],X[1]),$,ye(46,58,C)).map(Ot),G[L].push(O.v(X,$))}});for(let C=0;C<D.length-1;C++)for(let L=0;L<et;L++){let B=(L+1)%et;O.f(G[C][L],G[C][B],G[C+1][B],G[C+1][L])}let z=ii({fog:!1,gain:.95});r.add(new Tt(O.geo(),z))}let u=new Jt,p=new Jt,m=new Jt,g=new Jt,_=new Jt,d=new Jt,f=(et,D,tt,O,G,ot=!0)=>{let z=D.map(([C,L])=>Array.from({length:tt},(B,X)=>{let H=[O[0]+L*Math.cos(2*Math.PI*X/tt),O[1]+L*Math.sin(2*Math.PI*X/tt),O[2]+C];return et.v(H,G(H))}));for(let C=0;C<z.length-1;C++)for(let L=0;L<tt;L++){let B=(L+1)%tt;et.f(z[C][L],z[C][B],z[C+1][B],z[C+1][L])}if(ot){let C=z[z.length-1].map(L=>et.v(et.pos.slice(L*3,L*3+3),et.col.slice(L*3,L*3+3)));et.f(...C)}},y=(et,D,tt,O,G,ot,z=1,C=[1,1,1])=>{let L=Array.from({length:O},(B,X)=>{let H=2*Math.PI*X/O;return Array.from({length:G},(N,k)=>{let q=2*Math.PI*k/G,j=D+tt*Math.cos(q);return et.v([j*Math.cos(H),j*Math.sin(H),ot+tt*z*Math.sin(q)],C)})});for(let B=0;B<O;B++)for(let X=0;X<G;X++){let H=(B+1)%O,N=(X+1)%G;et.f(L[B][X],L[H][X],L[H][N],L[B][N])}},x=(et,D,tt,O,G,ot=0)=>{let z=Math.cos(O),C=Math.sin(O),L=new Map,B=(H,N,k)=>{let q=`${H},${N},${k}`,j=L.get(q);j||(j=ot?[s.uniform(-.03,.03),s.uniform(-.03,.03),s.uniform(-.02,.02)]:[0,0,0],L.set(q,j));let w=H*tt[0]+j[0],dt=N*tt[1]+j[1],it=k*tt[2]+j[2];return et.v([D[0]+w*z-dt*C,D[1]+w*C+dt*z,D[2]+it],G([w,dt,it],k+.5))},X=[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,.5,-.5],[.5,.5,-.5],[.5,-.5,-.5],[-.5,-.5,-.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]];for(let H of X)et.f(...H.map(([N,k,q])=>B(N,k,q)))},M=(et,D,tt,O)=>{let G=s.uniform(0,50);x(u,et,D,tt,(ot,z)=>h(O,z,Ce(ot[0]*2.5+G,ot[1]*2.5+ot[2]*1.7)),1)},I=(et,D,tt,O)=>{let G=s.uniform(0,50);f(u,[[0,et],[tt,et]],48,[0,0,D],ot=>h(O,(ot[2]-D)/tt,Ce(ot[0]*1.2+G,ot[1]*1.2)))};I(8.2,0,1.4,e.stone[0]),I(7.2,1.4,.5,e.stone[3]),I(6.6,1.9,Ji-1.9,e.stone[0]),y(p,6.6,.18,48,6,Ji,1,e.stone[3]);let E=28;for(let et=0;et<E;et++){let D=2*Math.PI*et/E,tt=1.4+s.uniform(-.08,.08);M([8.45*Math.cos(D),8.45*Math.sin(D),tt/2],[1,1.95,tt],D,s.choice(e.stone))}for(let[et,D]of[[9.8,.9],[11,.55],[12.2,.3]])for(let tt=0;tt<14;tt++){if(s.random()<.2)continue;let O=2*Math.PI*tt/14+s.uniform(-.08,.08);M([et*Math.cos(O),et*Math.sin(O),D/2],[1.3,2.6,D],O+s.uniform(-.1,.1),s.choice(e.stone))}for(let et of[5.8,4.2,2.6,1.2])y(g,et,.08,48,6,Ji+.02,.6);for(let et=0;et<16;et++){let D=2*Math.PI*et/16+Math.PI/16;f(g,[[0,.14],[.04,.14]],8,[5*Math.cos(D),5*Math.sin(D),Ji],()=>[1,1,1])}for(let[et,D]of[[-1.2,.2],[1.2,-.2]])x(_,[et,0,Ji+.02],[.4,9,.04],D,()=>[1,1,1]);let A=[],F=Pa(),Q=ii({gain:1.05}),v=[];for(let et of[3,10,17,24]){let D=2*Math.PI*et/E,tt=8.45*Math.cos(D),O=8.45*Math.sin(D),G=1.4;f(p,[[0,.28],[.9,.28]],12,[tt,O,G],()=>e.stone[3]),f(m,[[0,.2],[.35,.5]],12,[tt,O,G+.9],()=>e.stone[0]);let ot=new Tt(F,Q);ot.position.set(tt,O,G+1.25),r.add(ot),A.push({m:ot,keys:Array.from({length:451},()=>[s.uniform(.7,.95),s.uniform(.7,.95),s.uniform(1.3,1.9)])}),v.push({pos:[tt,O,G+1.9],color:[1,.55,.2],intensity:i==="night"?.9:.6,dist:9,flicker:.25})}let T=(et,D,tt,O=1.8,G=1.2)=>{let ot=ce(et),z=D*Math.cos(ot),C=D*Math.sin(ot),L=c(z,C)-.4,B=ot-Math.PI/2,X=s.choice(e.stone),H=s.uniform(0,50),N=new Map,k=Math.cos(B),q=Math.sin(B),j=(V,$,lt)=>{let ft=`${V},${$},${lt}`,R=N.get(ft);R||(R=[s.uniform(-.07,.07),s.uniform(-.07,.07),s.uniform(-.05,.05)],N.set(ft,R));let b=V*O,U=$*G,W=(lt+.5)*tt;if(W>tt*.5){let Et=1-.18*((W-tt*.5)/(tt*.5));b*=Et,U*=Et}b+=R[0],U+=R[1];let rt=W+R[2],Y=.5*Ce(b*2.2+H,rt*.7)+.5*Ce(b*6+H,rt*.25);return u.v([z+b*k-U*q,C+b*q+U*k,L+rt],h(X,rt/tt,Y))},w=4,dt=V=>-.5+V/w,it=V=>{for(let $=0;$<w;$++)for(let lt=0;lt<w;lt++)u.f(j(...V($,lt)),j(...V($+1,lt)),j(...V($+1,lt+1)),j(...V($,lt+1)))};it((V,$)=>[dt(V),-.5,dt($)]),it((V,$)=>[dt($),.5,dt(V)]),it((V,$)=>[-.5,dt($),dt(V)]),it((V,$)=>[.5,dt(V),dt($)]),it((V,$)=>[dt($),dt(V),.5]),it((V,$)=>[dt(V),dt($),-.5]);for(let[V,$,lt]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let R=-G/2-.02,b=tt*V;x(d,[z+0*k-R*q,C+0*q+R*k,L+b],[$,.1,lt],B,()=>[1,1,1])}};for(let[et,D,tt]of[[172,15,8],[145,14,6.5],[118,15,9.5],[90,16,11],[62,15,8.5],[35,14,6.5],[8,15,8]])T(et,D,tt),T(et+180,D,tt);for(let et=0;et<12;et++){let D=ce(s.choice([s.uniform(195,245),s.uniform(295,345)])),tt=s.uniform(13,18),O=s.uniform(1,2.2),G=s.choice(e.stone),ot=s.uniform(0,50),z=tt*Math.cos(D),C=tt*Math.sin(D),L=s.uniform(0,6.28),B=new je(1,1),X=B.attributes.position,H=new ie().compose(new S(z,C,c(z,C)+.3*O),new Ke().setFromAxisAngle(new S(0,0,1),L),new S(O,O*.9,O*.7)),N=new Map;for(let k=0;k<X.count;k+=3)u.f(...[0,1,2].map(q=>{let j=X.getX(k+q),w=X.getY(k+q),dt=X.getZ(k+q),it=`${j.toFixed(3)},${w.toFixed(3)},${dt.toFixed(3)}`,V=N.get(it);V===void 0&&(V=s.uniform(.8,1.2),N.set(it,V));let $=new S(j*V,w*V,dt*V).applyMatrix4(H);return u.v([$.x,$.y,$.z],h(G,(dt+1)/2,Ce(j*2+ot,w*2+dt)))}));B.dispose()}r.add(new Tt(u.geo(),pe())),r.add(new Tt(p.geo(),pe({flat:!1})),new Tt(m.geo(),pe())),r.add(new Tt(g.geo(),vn([1,.92,.75],.75*Math.min(1.6,n)))),r.add(new Tt(_.geo(),vn([1,.35,.12],.55))),r.add(new Tt(d.geo(),vn([1,.3,.1],1.1*Math.min(1.4,n))));let K=ce(e.body_az),nt=pe({emit:.25*(i==="night"?1.4:1),double:!0,morph:!0}),ct=[0,1].map(()=>{let et=e.grass_tip[0],D=-1,tt=pr({r:s,tufts:t?120:200,rmin:12.9,rspan:34,gh:c,base:G=>{let ot=1-.55*Ot((G-13)/34);return[.03*ot,.1*ot,.1*ot]},tip:(G,ot)=>(G!==D&&(D=G,et=Zt(e.grass_tip[0],e.grass_tip[1],s.random())),de(Zt(et,e.grass_rim,.3*Math.abs(Math.cos(ot-K))*(i==="night"?.5:1)),1-.55*Ot((G-13)/34)))}),O=new Tt(tt,nt);return O.morphTargetInfluences=[0],r.add(O),O});{let et=new Jt;for(let D=0;D<(t?40:70);D++){let tt=14+22*s.random(),O=s.uniform(0,2*Math.PI),G=tt*Math.cos(O),ot=tt*Math.sin(O),z=c(G,ot),C=s.uniform(.35,.7),L=[G+s.uniform(-.06,.06),ot+s.uniform(-.06,.06),z+C];et.f(et.v([G-.012,ot,z],[.02,.07,.05]),et.v([G+.012,ot,z],[.02,.07,.05]),et.v([L[0]+.012,L[1],L[2]],[.08,.25,.12]),et.v([L[0]-.012,L[1],L[2]],[.08,.25,.12]));let B=s.choice(e.flower),X=et.v([L[0],L[1],L[2]+.02],[1,.9,.5]),H=Array.from({length:6},(N,k)=>{let q=2*Math.PI*k/6;return et.v([L[0]+.05*Math.cos(q),L[1]+.05*Math.sin(q),L[2]+.025],B)});for(let N=0;N<6;N++)et.f(X,H[N],H[(N+1)%6])}r.add(new Tt(et.geo(),pe({emit:e.flower_emit,double:!0})))}let vt=oi({r:s,n:t?Math.round(e.embers*.6):e.embers,at:()=>{let et=s.uniform(0,6.283),D=s.uniform(4,26);return[D*Math.cos(et),D*Math.sin(et),s.uniform(1.5,10)]},move:()=>[s.uniform(-1,1),0,s.uniform(1.5,3.5)],col:[1,.55,.15],size:.4});e.embers>0&&r.add(vt.obj);let ht=si({th:e,W:t?512:1024,bodies:o,body:{kind:e.body,r:e.body_r},sparkles:e.sparkles??0,bigShare:.25,sparkleSize:{big:[1.5*2.18,.26*2.18],small:[.6*2.18,.1*2.18],el:[30,86]}});return r.add(ht.group),{group:r,floor:Ji,update(et){ht.update(et),ct.forEach((ot,z)=>{ot.morphTargetInfluences[0]=cn(et,45,0,1,z)});let D=et%3600,tt=Math.floor(D/8),O=(D-tt*8)/8,G=O*O*(3-2*O);for(let ot of A){let z=ot.keys[tt%450],C=ot.keys[(tt+1)%450];ot.m.scale.set(z[0]+(C[0]-z[0])*G,z[1]+(C[1]-z[1])*G,z[2]+(C[2]-z[2])*G)}vt.update(et)},key:{dir:un(e.body_az,e.body_el),color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.g_near,intensity:i==="night"?.45:i==="day"?.8:.6},fog:{color:e.fog,near:60,far:140},lights:[{pos:[0,0,Ji+4],color:i==="night"?[.75,.7,1]:[1,.85,.6],intensity:.5,dist:16},{pos:[0,0,Ji+.5],color:[1,.5,.2],intensity:.35,dist:8},...v],dispose(){ht.dispose(),ai(r)}}}var xh={NIGHT:{body:"moon",body_az:112,body_el:40,body_r:.034,body_span:3.5,body_tint:[1,.97,.7],exposure:1,stops:[[-90,[.004,.006,.008]],[-2,[.03,.04,.042]],[0,[.07,.08,.085]],[5,[.04,.05,.06]],[15,[.014,.018,.032]],[40,[.004,.006,.016]],[90,[.0015,.002,.008]]],glow:[[.5,.004,[.4,.5,.5]],[.11,.01,[.6,.7,.55]],[.03,.04,[.8,.85,.6]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:.9,star_n:4500,milky:.006,far1:[.022,.028,.03],far2:[.014,.018,.02],cloud_scale:1.5,cov0:.6,cov1:.8,cloud_opacity:.35,cloud_lit_near:[.06,.07,.06],cloud_lit_far:[.02,.025,.025],cloud_shadow:[.004,.005,.008],cloud_rim:[.08,.09,.07],water_lo:[.005,.01,.01],water_hi:[.02,.032,.03],stone:[[.13,.15,.16],[.15,.17,.18],[.11,.13,.14],[.17,.19,.19]],rim_stone:[.15,.17,.16],moss:[.03,.08,.03],bark_dark:[.01,.011,.018],bark_lit:[.035,.04,.05],bark_rim:[.25,.3,.38],bark_rim_k:.35,vine_a:[.03,.05,.025],vine_b:[.06,.09,.04],mud:[.02,.025,.018],reed:[.012,.018,.012],cat:[.016,.011,.009],lily:[[.03,.07,.035],[.04,.085,.04],[.025,.055,.03]],back_col:[.02,.025,.028],mist_col:[.3,.36,.34],mist_a:.1,fire_col:[.55,.75,.15],fire_k:1,orb_col:[.55,.75,.15],orb_k:1,eye_col:[.6,.85,.2],glow_col:[.3,.75,.2],line_col:[.4,.85,.25],rune_col:[.65,.95,.35],emit:1,sparkles:10,world:[.008,.012,.015],fog:[.06,.07,.07],key_col:[.65,.75,.65],key_e:1,fill_col:[.2,.3,.35],arena_col:[.55,.9,.4],orb_light_col:[.6,.9,.3],wash_col:[.55,.8,.55]},SUNSET:{body:"sun",body_az:90,body_el:7,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],exposure:1,stops:[[-90,[.02,.02,.025]],[-2,[.2,.12,.08]],[0,[.45,.25,.12]],[3,[.7,.32,.12]],[8,[.45,.22,.15]],[16,[.2,.15,.2]],[30,[.07,.07,.14]],[55,[.025,.03,.08]],[90,[.008,.012,.04]]],glow:[[.55,.25,[1,.4,.1]],[.16,.5,[1,.5,.15]],[.045,1.4,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.35,.2,.2],stars:.2,star_n:1200,milky:0,far1:[.14,.09,.08],far2:[.08,.06,.06],cloud_scale:1.7,cov0:.52,cov1:.74,cloud_opacity:.8,cloud_lit_near:[.9,.4,.15],cloud_lit_far:[.4,.2,.25],cloud_shadow:[.06,.04,.08],cloud_rim:[.9,.5,.2],water_lo:[.012,.02,.02],water_hi:[.05,.06,.05],stone:[[.2,.2,.2],[.24,.23,.22],[.17,.17,.17],[.27,.26,.24]],rim_stone:[.24,.22,.2],moss:[.05,.1,.04],bark_dark:[.02,.016,.018],bark_lit:[.07,.055,.055],bark_rim:[1,.5,.2],bark_rim_k:.5,vine_a:[.06,.09,.03],vine_b:[.1,.12,.04],mud:[.05,.04,.03],reed:[.03,.035,.02],cat:[.04,.02,.015],lily:[[.05,.1,.04],[.07,.12,.05],[.04,.08,.04]],back_col:[.1,.07,.07],mist_col:[.9,.55,.35],mist_a:.12,fire_col:[.9,.85,.25],fire_k:.6,orb_col:[.9,.85,.25],orb_k:.6,eye_col:[.9,.85,.25],glow_col:[.4,.75,.25],line_col:[.5,.85,.3],rune_col:[.8,.95,.45],emit:.7,sparkles:6,world:[.1,.06,.07],fog:[.35,.2,.15],key_col:[1,.6,.3],key_e:3,fill_col:[.5,.45,.7],arena_col:[.7,.9,.4],orb_light_col:[.8,.9,.3],wash_col:[1,.75,.45]}};function Pf(i,t){let e=i==="night"?xh.NIGHT:i==="day"?{...ci(xh.SUNSET),water_lo:[.03,.05,.05],water_hi:[.09,.12,.11],mist_col:[.85,.9,.9],mist_a:.1,fire_k:0,orb_k:.4,bark_rim:[1,.95,.8],back_col:[.3,.36,.38],wash_col:[1,.97,.85]}:xh.SUNSET,n=e.emit,s=n*.75,r=an(21),o=an(77),a=new he,c=[un(e.body_az,e.body_el)],l=Pi(e,c),h=ce(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(H=>$i(H,e.exposure)),p=e.stone,m=si({th:e,W:t?512:1024,bodies:c,ridgeKind:"trees",ridges:[[.012,.03,31,.45,e.far1],[.004,.02,47,.25,e.far2]],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:[.75,.8,.58],rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(m.group);let g=(H,N)=>{let k=Math.hypot(H,N),q=Zt(e.water_lo,e.water_hi,Ot(Ve(H*.05+2,N*.05,3)*1.2-.15)),j=Math.exp(-(((k-9.9)/3)**2))*.12*.75;return q=[q[0]+e.glow_col[0]*j,q[1]+e.glow_col[1]*j,q[2]+e.glow_col[2]*j],Zt(q,de(u,.5),ye(32,150,k)**1.2)},_;{let H=new Jt(!1,2),N=[8,10,12,14,17,20,24,28,33,40,48,57,68,82,100,125,150],k=t?48:72,q=N.map(w=>Array.from({length:k},(dt,it)=>{let V=w*Math.cos(2*Math.PI*it/k),$=w*Math.sin(2*Math.PI*it/k),lt=ye(9,13,w)*Math.exp(-w/90);return H.v([V,$,0],g(V,$),[[0,0,.06*Math.sin(.45*V+.33*$)*lt],[0,0,.06*Math.sin(.38*V-.41*$+2)*lt]])}));for(let w=0;w<N.length-1;w++)for(let dt=0;dt<k;dt++){let it=(dt+1)%k;H.f(q[w][dt],q[w+1][dt],q[w+1][it],q[w][it])}let j=new rr({vertexColors:!0,envMap:m.envMap(),reflectivity:i==="night"?.55:.45,combine:kl});_=new Tt(H.geo(),j),_.morphTargetInfluences=[0,0],a.add(_)}let d=[];[.35,.9,1.7].slice(0,t?2:3).forEach((H,N)=>{let k=new Jt(!0),q=[10.5,12,15,19,24,30,38,48,60],j=48,w=q.map(V=>Array.from({length:j},($,lt)=>{let ft=2*Math.PI*lt/j,R=V*Math.cos(ft),b=V*Math.sin(ft),U=e.mist_a*Ot((Ve(R*.07+N*9,b*.07,3)-.38)*2.6)*ye(0,3,V-10.5)*ye(0,15,60-V);return k.v([R,b,H+.12*Math.sin(.3*R+N)],[...e.mist_col,U])}));for(let V=0;V<q.length-1;V++)for(let $=0;$<j;$++){let lt=($+1)%j;k.f(w[V][$],w[V+1][$],w[V+1][lt],w[V][lt])}let dt=new Ze({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie,toneMapped:!1});dt.color.setScalar(1+.7);let it=new Tt(k.geo(),dt);it.renderOrder=3,a.add(it),d.push({m:it,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Ki({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:s}));let f=new Jt,y=new Jt,x=[];for(let H of[45,135,225,315]){let N=ce(H),k=o.uniform(1.6,2.6),q=o.choice(p),j=o.uniform(0,50),w=9.35*Math.cos(N),dt=9.35*Math.sin(N),it=10,V=.3,$=[],lt=[],ft=Array.from({length:it},()=>V+k-o.uniform(0,.45));for(let ut=0;ut<it;ut++){let Lt=2*Math.PI*ut/it,pt=o.uniform(-.05,.05),At=o.uniform(-.05,.05),Ft=o.uniform(-.05,.05),Nt=o.uniform(-.05,.05),Rt=[w+.62*Math.cos(Lt)+pt,dt+.62*Math.sin(Lt)+At,V],Ct=[w+.5*Math.cos(Lt)+Ft,dt+.5*Math.sin(Lt)+Nt,ft[ut]];$.push(f.v(Rt,ri(q,0,Rt[0]-w,Rt[1]-dt,j,e.moss))),lt.push(f.v(Ct,ri(q,(Ct[2]-V)/k,Ct[0]-w,Ct[1]-dt,j,e.moss)))}for(let ut=0;ut<it;ut++){let Lt=(ut+1)%it;f.f($[ut],$[Lt],lt[Lt],lt[ut])}f.f(...lt);let R=w-.55*Math.cos(N),b=dt-.55*Math.sin(N),U=N-Math.PI/2,W=Math.cos(U),rt=Math.sin(U),Y=.06,Et=k*.45/2,Mt=.3+k*.5;y.f(...[[-Y,-.03,-Et],[Y,-.03,-Et],[Y,-.03,Et],[-Y,-.03,Et]].map(([ut,Lt,pt])=>y.v([R+ut*W-Lt*rt,b+ut*rt+Lt*W,Mt+pt],[1,1,1]))),x.push([w,dt,.3+k])}let M=(H,N,k,q,j,w,dt,it)=>{let V=o.uniform(0,50),$=Math.cos(dt),lt=Math.sin(dt),ft=new Map,R=(b,U,W)=>{let rt=b*q+o.uniform(-.03,.03),Y=U*j+o.uniform(-.03,.03),Et=W*w;return f.v([H+rt*$-Y*lt,N+rt*lt+Y*$,k+Et],ri(it,W+.5,rt,Y,V,e.moss))};for(let b of[[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5]],[[.5,.5,-.5],[-.5,.5,-.5],[-.5,.5,.5],[.5,.5,.5]],[[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[.5,-.5,.5]],[[-.5,.5,-.5],[-.5,-.5,-.5],[-.5,-.5,.5],[-.5,.5,.5]]])f.f(...b.map(([U,W,rt])=>R(U,W,rt)))};for(let H of[270,90])for(let N=0;N<5;N++){let k=11+N*1.7+o.uniform(-.2,.2),q=ce(H+o.uniform(-5,5)),j=o.uniform(1.2,1.7);M(k*Math.cos(q),k*Math.sin(q),-.13,j,j*o.uniform(.8,1.1),.5,o.uniform(0,3.14),o.choice(p))}for(let H=0;H<12;H++){let N=o.uniform(0,2*Math.PI);Math.min(Math.abs(eo(N,Math.PI/2)),Math.abs(eo(N,3*Math.PI/2)))<.18&&(N+=.5);let k=o.uniform(10.5,15),q=o.uniform(.7,1.8),j=o.choice(p),w=o.uniform(0,50),dt=o.uniform(0,6.28),it=new je(1,1),V=it.attributes.position,$=new ie().compose(new S(k*Math.cos(N),k*Math.sin(N),.05),new Ke().setFromAxisAngle(new S(0,0,1),dt),new S(q,q*.9,q*.7));for(let lt=0;lt<V.count;lt+=3)f.f(...[0,1,2].map(ft=>{let R=new S(V.getX(lt+ft),V.getY(lt+ft),V.getZ(lt+ft)),b=R.z;return R.applyMatrix4($),f.v([R.x,R.y,R.z],ri(j,(b+1)/2,V.getX(lt+ft),V.getY(lt+ft),w,e.moss))}));it.dispose()}a.add(new Tt(f.geo(),pe()),new Tt(y.geo(),vn(e.rune_col,1.4*s)));let I=(()=>{let H=new S(.8,.6,0).normalize();return[H.x,H.y,0]})(),E=ce(e.body_az),A=[Math.cos(E),Math.sin(E)],F=[],Q=(H,N,k)=>{for(let q=0;q<300;q++){let j=r.uniform(0,360);if(k&&j>245&&j<295)continue;let w=r.uniform(H,N),dt=w*Math.cos(ce(j)),it=w*Math.sin(ce(j));if(F.every(([V,$])=>Math.hypot(dt-V,it-$)>6))return F.push([dt,it]),[dt,it]}return null},v=pe({morph:!0}),T=[],K=[],nt=[],ct=t?6:9,vt=t?4:7;for(let H=0;H<ct+vt;H++){let N=H<ct,k=N?Q(16,32,!0):Q(38,62,!1);if(!k)continue;let q=N?r.uniform(9,15):r.uniform(16,24),j=N?r.uniform(.28,.42):r.uniform(.5,.8),w=new Tt(ht(k[0],k[1],q,j),v);w.morphTargetInfluences=[0],a.add(w),T.push({m:w,P:r.choice([100,120,150,180,200]),flip:r.int(0,1)}),K.push(k),nt.push([k[0],k[1],2.2*j+.7])}function ht(H,N,k,q){let j=new Jt(!1,1),w=new S(-H,-N,0).normalize(),dt=r.uniform(.6,1.4),it=new S(r.uniform(-1,1),r.uniform(-1,1),0).normalize().multiplyScalar(r.uniform(.02,.07)),V=r.uniform(0,6.28),$=ut=>new S(H+it.x*ut+.25*Math.sin(.5*ut+V),N+it.y*ut+.25*Math.cos(.4*ut+V),ut),lt=ut=>{let Lt=Math.max(ut,0);return q*(1-.55*Ot(Lt/k))*(1+.7*Math.exp(-Lt/.8))},ft=(ut,Lt,pt=0)=>{let At=dt*Ot(Math.max(ut.z,0)/k)**2+pt;return j.v([ut.x,ut.y,ut.z],Lt,[[I[0]*At,I[1]*At,0]])},R=(ut,Lt)=>{let pt=new S(ut.x,ut.y,0);pt.lengthSq()>1e-12&&pt.normalize();let At=Zt(e.bark_dark,e.bark_lit,.6*Math.max(0,pt.x*w.x+pt.y*w.y));return At=Zt(At,e.bark_rim,Ot(e.bark_rim_k*Math.max(0,pt.x*A[0]+pt.y*A[1])*(1-.4*Ot(Lt/k)))),Zt(At,e.moss,Ot(1-Lt/1.8)*.6*Ce(ut.x*3+H,Lt*.8+N))},b=(ut,Lt,pt,At,Ft)=>{let Nt=ut.length,Rt=ut.map((jt,J)=>ut[Math.min(J+1,Nt-1)].clone().sub(ut[Math.max(J-1,0)]).normalize()),Ct=Rt[0].clone().cross(Math.abs(Rt[0].z)>.9?new S(1,0,0):new S(0,0,1)).normalize(),kt=ut.map((jt,J)=>{let Ut=Rt[J];Ct=Ct.clone().addScaledVector(Ut,-Ct.dot(Ut)).normalize();let yt=Ut.clone().cross(Ct);return Array.from({length:pt},(wt,Vt)=>{let Yt=2*Math.PI*Vt/pt,le=Ct.clone().multiplyScalar(Math.cos(Yt)).addScaledVector(yt,Math.sin(Yt));return ft(jt.clone().addScaledVector(le,Lt[J]),At(J,le),Ft?Ft(J):0)})});for(let jt=0;jt<Nt-1;jt++)for(let J=0;J<pt;J++){let Ut=(J+1)%pt;j.f(kt[jt][J],kt[jt][Ut],kt[jt+1][Ut],kt[jt+1][J])}},U=11,W=8,rt=Array.from({length:U},(ut,Lt)=>{let pt=-.4+(k+.4)*Lt/(U-1),At=$(pt);return Array.from({length:W},(Ft,Nt)=>{let Rt=2*Math.PI*Nt/W,Ct=new S(Math.cos(Rt),Math.sin(Rt),0);return ft(At.clone().addScaledVector(Ct,lt(pt)*(1+.06*Math.sin(3*Rt+pt))),R(Ct,pt))})});for(let ut=0;ut<U-1;ut++)for(let Lt=0;Lt<W;Lt++){let pt=(Lt+1)%W;j.f(rt[ut][Lt],rt[ut][pt],rt[ut+1][pt],rt[ut+1][Lt])}j.f(...rt[U-1]);let Y=[],Et=r.int(3,5);for(let ut=0;ut<Et;ut++){let Lt=k*r.uniform(.42,.9),pt=r.uniform(0,6.28),At=new S(Math.cos(pt),Math.sin(pt),0),Ft=$(Lt).addScaledVector(At,lt(Lt)*.6),Nt=At.clone().add(new S(0,0,r.uniform(.5,1.1))).normalize(),Rt=r.uniform(2,5)*(k/12)*(1.1-.5*Lt/k),Ct=Array.from({length:6},(jt,J)=>Ft.clone().addScaledVector(Nt,Rt*(J/5)).add(new S(0,0,-.12*Rt*(J/5)**2))),kt=lt(Lt)*.4;b(Ct,Ct.map((jt,J)=>kt*(1-.88*J/5)+.01),5,(jt,J)=>R(J,Ct[jt].z)),Y.push(...Ct.slice(2,5))}let Mt=r.int(4,8);for(let ut=0;ut<Mt;ut++){let Lt=r.choice(Y),pt=r.uniform(.8,2.2),At=r.uniform(0,6.28),Ft=Array.from({length:6},(Nt,Rt)=>Lt.clone().add(new S(.06*Math.sin(At+Rt)*Rt/5,.06*Math.cos(At+Rt*.8)*Rt/5,-pt*Rt/5)));b(Ft,Ft.map((Nt,Rt)=>.022*(1-.8*Rt/5)+.003),3,Nt=>Zt(e.vine_a,e.vine_b,Nt/5),Nt=>.45*(Nt/5)**1.5)}return j.geo()}{let H=new Jt,N=[[1.35,-.25],[1,.02],[.72,.28],[.4,.46]];for(let[k,q,j]of nt){let w=N.map(([it,V])=>Array.from({length:14},($,lt)=>{let ft=2*Math.PI*lt/14,R=j*it*(1+.12*Math.sin(3*ft+k)),b=[k+R*Math.cos(ft),q+R*Math.sin(ft),V+.05*Math.sin(5*ft+q)];return H.v(b,Zt(e.mud,e.moss,Ot(.3+.6*Ce(b[0]*.8,b[1]*.8))))})),dt=H.v([k,q,.52],e.moss);for(let it=0;it<w.length-1;it++)for(let V=0;V<14;V++){let $=(V+1)%14;H.f(w[it][V],w[it][$],w[it+1][$],w[it+1][V])}for(let it=0;it<14;it++)H.f(dt,w[w.length-1][it],w[w.length-1][(it+1)%14])}a.add(new Tt(H.geo(),pe()))}let et=pe({morph:!0,double:!0}),D=[0,1].map(H=>{let N=new Jt(!1,1),k=(t?160:300)/2,q=(it,V,$,lt,ft)=>Array.from({length:$},(R,b)=>{let U=2*Math.PI*b/$;return N.v([it[0]+V*Math.cos(U),it[1]+V*Math.sin(U),it[2]],lt,[[I[0]*ft,I[1]*ft,0]])}),j=(it,V)=>{for(let $=0;$<it.length;$++){let lt=($+1)%it.length;N.f(it[$],it[lt],V[lt],V[$])}},w=0;for(;w<k;){let it,V;if(K.length&&o.random()<.6){let[Y,Et]=o.choice(K),Mt=o.uniform(0,6.283),ut=o.uniform(1,4.5);it=Y+ut*Math.cos(Mt),V=Et+ut*Math.sin(Mt)}else{let Y=o.uniform(0,6.283),Et=o.uniform(11.5,48);it=Et*Math.cos(Y),V=Et*Math.sin(Y)}if(Math.hypot(it,V)<11)continue;w++;let $=o.uniform(1.2,3),lt=o.uniform(-.25,.25)*$*.5,ft=o.uniform(-.25,.25)*$*.5,R=Y=>[it+lt*Y*Y,V+ft*Y*Y,-.3+($+.3)*Y],b=Y=>.12*$*Y*Y,U=[0,.37,.74].map(Y=>q(R(Y),.018-.008*Y,3,e.reed,b(Y)));j(U[0],U[1]),j(U[1],U[2]);let W=[[.75,.012],[.83,.055],[.92,.045]].map(([Y,Et])=>q(R(Y),Et,5,e.cat,b(Y)));j(W[0],W[1]),j(W[1],W[2]);let rt=N.v(R(1),e.cat,[[I[0]*b(1),I[1]*b(1),0]]);for(let Y=0;Y<5;Y++)N.f(W[2][Y],W[2][(Y+1)%5],rt)}let dt=new Tt(N.geo(),et);return dt.morphTargetInfluences=[0],a.add(dt),dt});{let H=new Jt;for(let N=0;N<(t?36:60);N++){let k=o.uniform(0,6.283),q=o.uniform(11.5,44),j=q*Math.cos(k),w=q*Math.sin(k),dt=o.uniform(.3,.7),it=o.int(0,11),V=o.choice(e.lily),$=H.v([j,w,.04],V),lt=Array.from({length:12},(ft,R)=>{let b=2*Math.PI*R/12;return H.v([j+dt*Math.cos(b),w+dt*.9*Math.sin(b),.04],de(V,.8))});for(let ft=0;ft<12;ft++)ft!==it&&H.f($,lt[ft],lt[(ft+1)%12])}a.add(new Tt(H.geo(),pe({double:!0})))}let tt=new Jt(!1,1),O=new Jt;for(let H=0;H<8;H++){let N=o.uniform(0,6.283),k=o.uniform(12,36),q=o.uniform(0,6.283),j=new S(k*Math.cos(N),k*Math.sin(N),.05),w=new ie().makeRotationZ(q),dt=new je(1,1),it=dt.attributes.position,V=new ie().makeTranslation(j.x,j.y,j.z).multiply(w).multiply(new ie().makeScale(.22,.3,.13));for(let $=0;$<it.count;$+=3)O.f(...[0,1,2].map(lt=>{let ft=new S(it.getX($+lt),it.getY($+lt),it.getZ($+lt)).applyMatrix4(V);return O.v([ft.x,ft.y,ft.z],[.008,.012,.009])}));dt.dispose();for(let $ of[-1,1]){let lt=j.clone().add(new S($*.09,.12,.12).applyMatrix4(w)),R=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(b=>tt.v([lt.x+b[0]*.035,lt.y+b[1]*.035,lt.z+b[2]*.035],[1,1,1],[[0,0,b[2]*.035*(.08-1)]]));for(let[b,U]of[[0,2],[2,1],[1,3],[3,0]])tt.f(R[b],R[U],R[4]),tt.f(R[U],R[b],R[5])}}a.add(new Tt(O.geo(),pe()));let G=new Tt(tt.geo(),vn(e.eye_col,1.8));G.morphTargetInfluences=[0],a.add(G);let ot=Array.from({length:Math.floor(3480/20)},(H,N)=>60+N*20),z=[];for(let H=0;H<6;H++)z.push(ot.splice(o.int(0,ot.length-1),1)[0]);{let H=new Jt;[[70,46,14,22],[95,58,18,30]].forEach(([N,k,q,j],w)=>{let dt=Zt(e.back_col,u,.55+.2*w);for(let it=0;it<k;it++){let V=2*Math.PI*(it+r.uniform(-.4,.4))/k+w*.5,$=[N*Math.cos(V),N*Math.sin(V)],lt=[-Math.sin(V),Math.cos(V)],ft=r.uniform(q,j),R=r.uniform(.35,.9)*(1+.5*w),b=r.uniform(0,6.28),U=r.uniform(-.06,.06),W=Y=>{let Et=-2+(ft+2)*Y,Mt=Math.sin(Y*3+b)*.5+U*Et;return[$[0]+lt[0]*Mt,$[1]+lt[1]*Mt,Et]},rt=Array.from({length:6},(Y,Et)=>{let Mt=Et/5,ut=R*(1-.5*Mt),Lt=Zt(dt,u,Ot(Mt*Mt*.9)),pt=W(Mt);return[H.v([pt[0]-lt[0]*ut/2,pt[1]-lt[1]*ut/2,pt[2]],Lt),H.v([pt[0]+lt[0]*ut/2,pt[1]+lt[1]*ut/2,pt[2]],Lt)]});for(let Y=0;Y<5;Y++)H.f(rt[Y][0],rt[Y][1],rt[Y+1][1],rt[Y+1][0]);for(let Y of[-1,1]){let Et=W(r.uniform(.55,.8)),Mt=[Et[0]+lt[0]*Y*ft*.16,Et[1]+lt[1]*Y*ft*.16,Et[2]+ft*.12],ut=Zt(dt,u,.6);H.f(H.v([Et[0],Et[1],Et[2]-.1],ut),H.v([Et[0],Et[1],Et[2]+.1],ut),H.v([Mt[0],Mt[1],Mt[2]+.04],ut),H.v([Mt[0],Mt[1],Mt[2]-.04],ut))}}}),a.add(new Tt(H.geo(),ii({fog:!1})))}let C=[];for(let H=0;H<Math.round(14*e.orb_k*(t?.6:1));H++){let N=o.uniform(0,6.283),k=o.uniform(12,42);C.push({p:[k*Math.cos(N),k*Math.sin(N),o.uniform(1,3.2)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[H,N,k]of x)C.push({p:[H,N,k+.9],k:1.4,amp:o.uniform(.15,.4)});let L=Ca({list:C,col:e.orb_col,gain:1.2});a.add(L.group);let B=oi({r:o,n:Math.round(50*e.fire_k*(t?.6:1)),at:()=>{let H=o.uniform(0,6.283),N=o.uniform(4,44);return[N*Math.cos(H),N*Math.sin(H),o.uniform(.6,4)]},move:()=>[o.uniform(-1.5,1.5),o.uniform(-1.5,1.5),o.uniform(.3,1)],col:e.fire_col,size:.3,twinkle:!0});e.fire_k>0&&a.add(B.obj);let X=new Jt(!0);return mr(X,9.4,.7,(H,N)=>{let k=Math.hypot(H,N);return k<.01?1:ye(0,3,9.4-k)*(.7+.3*Ce(k*.4,Math.atan2(N,H)*6.4))},e.wash_col,.28*.5),a.add(new Tt(X.geo(),vs())),{group:a,floor:.6,update(H){m.update(H);for(let q of T)q.m.morphTargetInfluences[0]=cn(H,q.P/2,.15,1,q.flip);D.forEach((q,j)=>{q.morphTargetInfluences[0]=cn(H,60,0,1,j)}),_.morphTargetInfluences[0]=cn(H,90,0,1,0),_.morphTargetInfluences[1]=cn(H,90,0,1,1);let N=Math.sin(H%3600/3600*Math.PI);for(let q of d)q.m.rotation.z=q.s*N;let k=0;for(let q of z)Math.abs(H%3600-q)<3&&(k=1-Math.abs(H%3600-q)/3);G.morphTargetInfluences[0]=k,L.update(H),B.update(H)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.water_hi,intensity:i==="night"?.35:i==="day"?.75:.5},fog:{color:e.fog,near:40,far:140},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...x.map(H=>({pos:[H[0],H[1],H[2]+.9],color:e.orb_light_col,intensity:.4,dist:7,flicker:.2}))],dispose(){m.dispose(),ai(a)}}}var Mh={NIGHT:{body:"moon",body_az:62,body_el:47,body_r:.034,body_span:3.5,body_tint:[1,.88,.72],body_halo:[.55,.5,.7],exposure:1,stops:[[-90,[.01,.008,.015]],[-2,[.05,.07,.1]],[0,[.085,.12,.17]],[4,[.06,.08,.15]],[10,[.035,.035,.11]],[22,[.018,.01,.07]],[40,[.01,.004,.045]],[65,[.006,.003,.028]],[90,[.004,.002,.02]]],glow:[[.5,.006,[.45,.4,.7]],[.11,.012,[.7,.62,.75]],[.03,.04,[.9,.8,.7]]],hw0:.8,anti:0,anti_col:[0,0,0],stars:1,star_n:3800,milky:.018,milky_w:.3,milky_col:[.2,.5,.5],far1:[.012,.02,.03],far2:[.012,.02,.03],cloud_scale:2,cov0:.62,cov1:.8,cloud_opacity:.55,cloud_max:.42,cloud_lit_near:[.12,.13,.22],cloud_lit_far:[.07,.08,.15],cloud_shadow:[.02,.02,.05],cloud_rim:[.15,.16,.26],bark:[.04,.026,.03],bark_hi:[.1,.075,.075],vein:[.1,.8,.55],moss:[.015,.07,.045],earth_a:[.012,.008,.01],earth_b:[.03,.02,.022],bush_lo:[.01,.075,.05],bush_hi:[.03,.2,.13],hedge_lo:[.004,.022,.018],hedge_hi:[.012,.06,.045],can_col:[.006,.028,.022],sea_col:[.1,.12,.22],sea_a:.45,stone:[[.16,.15,.22],[.19,.18,.26],[.13,.12,.19],[.22,.2,.29]],rim_stone:[.19,.18,.25],glow_col:[.1,.6,.42],line_col:[.15,.75,.52],rune_col:[.3,1,.75],fire_col:[.55,.95,.8],fire_k:1,orb_col:[.55,.95,.8],orb_k:1,emit:1,sparkles:8,world:[.012,.008,.03],fog:[.18,.2,.32],key_col:[.85,.75,.65],key_e:1.1,fill_col:[.3,.22,.6],arena_col:[.35,.85,.65],orb_light_col:[.5,.95,.8],wash_col:[.55,.85,.75]},SUNSET:{body:"sun",body_az:62,body_el:9,body_r:.03,body_span:1.4,body_tint:[1,.8,.5],body_halo:[1,.6,.3],exposure:1,stops:[[-90,[.02,.015,.03]],[-2,[.25,.12,.12]],[0,[.55,.22,.15]],[3,[.8,.3,.14]],[8,[.55,.2,.22]],[16,[.28,.1,.28]],[30,[.1,.05,.22]],[55,[.03,.02,.1]],[90,[.01,.008,.05]]],glow:[[.55,.3,[1,.35,.1]],[.16,.55,[1,.5,.15]],[.045,1.5,[1,.75,.4]]],hw0:.55,anti:.25,anti_col:[.4,.15,.3],stars:.25,star_n:1e3,milky:0,milky_w:.3,milky_col:[.2,.5,.5],far1:[.08,.05,.07],far2:[.08,.05,.07],cloud_scale:1.8,cov0:.55,cov1:.76,cloud_opacity:.8,cloud_max:.5,cloud_lit_near:[1,.45,.18],cloud_lit_far:[.55,.22,.35],cloud_shadow:[.07,.03,.1],cloud_rim:[1,.6,.25],bark:[.06,.035,.035],bark_hi:[.3,.15,.08],vein:[.5,.8,.3],moss:[.03,.08,.04],earth_a:[.02,.012,.012],earth_b:[.06,.035,.03],bush_lo:[.015,.08,.05],bush_hi:[.06,.22,.12],hedge_lo:[.01,.03,.025],hedge_hi:[.03,.08,.05],can_col:[.02,.04,.035],sea_col:[.6,.3,.3],sea_a:.4,stone:[[.26,.22,.28],[.3,.26,.31],[.22,.19,.25],[.33,.29,.34]],rim_stone:[.3,.25,.28],glow_col:[.2,.7,.4],line_col:[.3,.85,.5],rune_col:[.6,1,.6],fire_col:[1,.85,.35],fire_k:.8,orb_col:[1,.85,.35],orb_k:.8,emit:.7,sparkles:5,world:[.15,.07,.12],fog:[.4,.2,.2],key_col:[1,.58,.3],key_e:3,fill_col:[.5,.35,.7],arena_col:[.7,.9,.5],orb_light_col:[1,.85,.35],wash_col:[1,.75,.5]}},_n=24,S1=_n+1.6,w1=160;function If(i,t){let e=i==="night"?Mh.NIGHT:i==="day"?{...ci(Mh.SUNSET),sea_col:[.92,.94,.98],sea_a:.55,fire_k:0,orb_k:.4,vein:[.4,.75,.3],wash_col:[1,.97,.85]}:Mh.SUNSET,n=e.emit,s=n*.75,r=an(31),o=an(55),a=new he,c=[un(e.body_az,e.body_el)],l=Pi(e,c),h=ce(e.body_az+180),u=l(Math.cos(h)*Math.cos(.02),Math.sin(h)*Math.cos(.02),Math.sin(.02)).map(O=>$i(O,e.exposure)),p=ce(e.body_az),m=(()=>{let O=new S(.8,.6,0).normalize();return[O.x,O.y,0]})(),g=e.stone,_=si({th:e,W:t?512:1024,bodies:c,ridges:[],body:{kind:e.body,r:e.body_r,span:e.body_span,size:e.body==="moon"?384:256,opts:e.body==="moon"?{tint:e.body_tint,halo:e.body_halo,rings:[[1.75,.1],[3.25,.06]],moonGain:1.15}:{tint:[1,.97,.88]}},sparkles:e.sparkles??0,bigShare:.25});a.add(_.group);let d=O=>S1*(1+.25*(1-Math.exp(O/60))),f=(O,G)=>.12*Math.sin(O*.33)*Math.cos(G*.29)*ye(8,14,Math.hypot(O,G)),y=(O,G)=>Zt(Zt(e.earth_a,e.earth_b,Ot(Ve(O*.12+5,G*.12-3,3)*1.4-.2)),e.moss,Ot((Ce(O*.4,G*.4)-.62)*3)*.6);{let O=new Jt,G=[8,10,12,14,16,18,20,22,_n-1,_n,_n+.6,_n+1.2,_n+1.6],ot={[_n+.6]:.3,[_n+1.2]:.15,[_n+1.6]:-.4},z=72,C=G.map(L=>Array.from({length:z},(B,X)=>{let H=2*Math.PI*X/z,N=L*Math.cos(H),k=L*Math.sin(H);return O.v([N,k,ot[L]??f(N,k)],L<=_n+.01?y(N,k):Zt(e.bark,e.moss,.5+.3*Ce(N*.5,k*.5)))}));for(let L=0;L<G.length-1;L++)for(let B=0;B<z;B++){let X=(B+1)%z;O.f(C[L][B],C[L+1][B],C[L+1][X],C[L][X])}a.add(new Tt(O.geo(),pe({flat:!1})))}{let O=new Jt,G=t?28:40,ot=t?48:72,z=Array.from({length:G},(C,L)=>{let B=-.4-w1*(L/(G-1))**1.6;return Array.from({length:ot},(X,H)=>{let N=2*Math.PI*H/ot,k=d(B)*(1+.04*Math.sin(14*N+.8*Math.sin(.05*B))+.025*Math.sin(5*N+.02*B)),q=Math.sin(14*N+.8*Math.sin(.05*B)),j=Zt(e.bark,e.bark_hi,Ot(.5+.5*q)*.5);j=Zt(j,e.bark_hi,.4*Math.max(0,Math.cos(N-p))),j=Zt(j,e.moss,Ot(1+B/25)*Ot((Ce(N*3,B*.15)-.4)*2.5)*.8);let w=Math.abs(Math.sin(7*N+1.5*Math.sin(.04*B+3*N)));return j=Zt(j,e.vein,Ot(1-w*7)*(.4+.6*Ce(B*.05,N*2))*.9),O.v([k*Math.cos(N),k*Math.sin(N),B],Zt(j,de(u,.6),Ot((-B-15)/110)**1.2))})});for(let C=0;C<G-1;C++)for(let L=0;L<ot;L++){let B=(L+1)%ot;O.f(z[C][L],z[C+1][L],z[C+1][B],z[C][B])}a.add(new Tt(O.geo(),pe({emit:.3,flat:!1})))}let x=[];[[-26,e.sea_a],[-52,e.sea_a*.8]].forEach(([O,G],ot)=>{let z=new Jt(!0),C=d(O)-.3,L=[C,C+4,C+10,C+20,C+32,C+46,C+64,C+84,C+106,150],B=64,X=L.map(k=>Array.from({length:B},(q,j)=>{let w=2*Math.PI*j/B,dt=k*Math.cos(w),it=k*Math.sin(w),V=G*(.55+.45*Ve(dt*.03+ot*7,it*.03,3))*ye(0,6,k-C);return z.v([dt,it,O],[...Zt(e.sea_col,u,ye(60,150,k)),V])}));for(let k=0;k<L.length-1;k++)for(let q=0;q<B;q++){let j=(q+1)%B;z.f(X[k][q],X[k+1][q],X[k+1][j],X[k][j])}let H=new Ze({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ie,fog:!1,toneMapped:!1});H.color.setScalar(1.7);let N=new Tt(z.geo(),H);N.renderOrder=2,a.add(N),x.push({m:N,s:o.choice([-1,1])*o.uniform(.15,.3)})}),a.add(Ki({th:e,r:o,z0:-.4,h:1,rimZ0:-.6,rimH:.95,glowZ0:-.3,glowH:.75,lineCol:e.line_col,runeCol:e.rune_col,glowCol:e.glow_col,glow:s}));let M=new Jt,I=new Jt,E=[];for(let O of[0,60,120,180,240,300]){let G=ce(O),ot=12.5,z=o.uniform(5,8),C=1.8,L=1.2,B=ot*Math.cos(G),X=ot*Math.sin(G),H=-.4,N=G-Math.PI/2,k=Math.cos(N),q=Math.sin(N),j=o.choice(g),w=o.uniform(0,50),dt=new Map,it=(ft,R,b)=>{let U=`${ft},${R},${b}`,W=dt.get(U);W||(W=[o.uniform(-.07,.07),o.uniform(-.07,.07),o.uniform(-.05,.05)],dt.set(U,W));let rt=ft*C,Y=R*L,Et=(b+.5)*z;if(Et>z*.5){let ut=1-.18*((Et-z*.5)/(z*.5));rt*=ut,Y*=ut}rt+=W[0],Y+=W[1];let Mt=Et+W[2];return M.v([B+rt*k-Y*q,X+rt*q+Y*k,H+Mt],ri(j,Mt/z,rt,Mt*.7,w,e.moss))},V=4,$=ft=>-.5+ft/V,lt=ft=>{for(let R=0;R<V;R++)for(let b=0;b<V;b++)M.f(it(...ft(R,b)),it(...ft(R+1,b)),it(...ft(R+1,b+1)),it(...ft(R,b+1)))};lt((ft,R)=>[$(ft),-.5,$(R)]),lt((ft,R)=>[$(R),.5,$(ft)]),lt((ft,R)=>[-.5,$(R),$(ft)]),lt((ft,R)=>[.5,$(ft),$(R)]),lt((ft,R)=>[$(R),$(ft),.5]);for(let[ft,R,b]of[[.32,.5,.07],[.42,.12,.45],[.55,.6,.07],[.66,.12,.3]]){let U=-L/2-.02,W=z*ft,rt=B-U*q,Y=X+U*k;I.f(...[[-R/2,-b/2],[R/2,-b/2],[R/2,b/2],[-R/2,b/2]].map(([Et,Mt])=>I.v([rt+Et*k,Y+Et*q,H+W+Mt],[1,1,1])))}E.push([B,X,z-.4])}a.add(new Tt(M.geo(),pe()),new Tt(I.geo(),vn(e.rune_col,1.4*s)));let A=(O,G,ot,z,C,L,B,X,H=!0)=>{let N=Array.from({length:B},(q,j)=>{let w=Math.PI/2*j/B,dt=j/B;return Array.from({length:L},(it,V)=>{let $=2*Math.PI*V/L,lt=.1*dt*dt*C;return O.v([G[0]+ot*Math.cos(w)*Math.cos($),G[1]+z*Math.cos(w)*Math.sin($),G[2]+C*Math.sin(w)],X(dt,$),H?[[m[0]*lt,m[1]*lt,0]]:void 0)})}),k=O.v([G[0],G[1],G[2]+C],X(1,0),H?[[m[0]*.1*C,m[1]*.1*C,0]]:void 0);for(let q=0;q<B-1;q++)for(let j=0;j<L;j++){let w=(j+1)%L;O.f(N[q][j],N[q][w],N[q+1][w],N[q+1][j])}for(let q=0;q<L;q++)O.f(N[B-1][q],N[B-1][(q+1)%L],k)},F=(O,G,ot,z,C)=>{let L=new Jt(!1,1);for(let[X,H,N,k]of O){let q=o.uniform(.85,1.15),j=f(X,H)-.2,w=(dt,it)=>de(Zt(G,ot,Ot(dt*(.75+.25*Math.cos(it-p)))**.9),q);for(let dt=0;dt<k;dt++){let it=o.uniform(0,6.283),V=dt?o.uniform(0,.6)*N:0,$=N*o.uniform(.7,1);A(L,[X+V*Math.cos(it),H+V*Math.sin(it),j],$,$,$*.85,z,C,w)}}let B=new Tt(L.geo(),pe({flat:!1,morph:!0}));return B.morphTargetInfluences=[0],a.add(B),B},Q=[];for(let O=0;Q.length<(t?40:70)&&O<3e3;O++){let G=o.uniform(0,2*Math.PI),ot=o.uniform(11.5,_n-1.5);if(G*180/Math.PI%360>255&&G*180/Math.PI%360<285&&ot>15)continue;let z=ot*Math.cos(G),C=ot*Math.sin(G);E.some(([L,B])=>Math.hypot(z-L,C-B)<2.8)||Q.push([z,C,o.uniform(1,2.2),o.int(2,4)])}let v=F(Q,e.bush_lo,e.bush_hi,12,3),T=Array.from({length:30},(O,G)=>{let ot=2*Math.PI*(G+o.uniform(-.3,.3))/30,z=_n-.6+o.uniform(-.8,.8);return[z*Math.cos(ot),z*Math.sin(ot),o.uniform(2,3.5),2]}),K=F(T,e.hedge_lo,e.hedge_hi,16,4);{let O=new Jt;[62,85,112,140].forEach((G,ot)=>{let z=1+.25*ot;for(let C=0;C<(t?12:20);C++){let L=2*Math.PI*(C+r.uniform(-.4,.4))/20+ot*.4,B=G+r.uniform(-6,6);for(let X=0;X<2;X++){let H=X?r.uniform(-9,9):0,N=B*Math.cos(L)-H*Math.sin(L),k=B*Math.sin(L)+H*Math.cos(L),q=r.uniform(9,16)*z*(X?.7:1),j=r.uniform(28,46)*z*(X?.75:1),w=.35+.15*ot,dt=r.uniform(.85,1.15);A(O,[N,k,-30],q,q,j,14,7,it=>Zt(de(e.can_col,dt),de(u,.7),Ot(w+.25*it)),!1)}}}),a.add(new Tt(O.geo(),pe({emit:.85,flat:!1})))}let nt=[];for(let O=0;O<Math.round(18*e.orb_k*(t?.6:1));O++){let G=o.uniform(0,6.283),ot=10.5+(_n-8.5)*Math.sqrt(o.random());nt.push({p:[ot*Math.cos(G),ot*Math.sin(G),o.uniform(1,6)],k:o.uniform(.8,1.5),amp:o.uniform(.15,.4)})}for(let[O,G,ot]of E)nt.push({p:[O,G,ot+.9],k:1.4,amp:o.uniform(.15,.4)});let ct=Ca({list:nt,col:e.orb_col,gain:1.2});a.add(ct.group);let vt=Math.round(160*e.fire_k*(t?.5:1)),ht=Math.round(40*e.fire_k*(t?.5:1)),et=0,D=oi({r:o,n:vt+ht,at:()=>{if(et++<vt){let ot=o.uniform(0,6.283),z=(_n+4)*Math.sqrt(o.random());return[z*Math.cos(ot),z*Math.sin(ot),.3+8.7*o.random()**1.6]}let O=o.uniform(0,6.283),G=o.uniform(_n+2,_n+14);return[G*Math.cos(O),G*Math.sin(O),o.uniform(-45,-2)]},move:()=>[o.uniform(-2,2),o.uniform(-2,2),o.uniform(.3,1.2)],col:e.fire_col,size:.3,twinkle:!0});vt+ht>0&&a.add(D.obj);let tt=new Jt(!0);return mr(tt,9.4,.7,(O,G)=>{let ot=Math.hypot(O,G);return ot<.01?1:ye(0,3,9.4-ot)*(.7+.3*Ce(ot*.4,Math.atan2(G,O)*6.4))},e.wash_col,.28*.5),a.add(new Tt(tt.geo(),vs())),{group:a,floor:.6,update(O){_.update(O),v.morphTargetInfluences[0]=cn(O,60,.15,1,1),K.morphTargetInfluences[0]=cn(O,90,.15,1,1);let G=Math.sin(O%3600/3600*Math.PI);for(let ot of x)ot.m.rotation.z=ot.s*G;ct.update(O),D.update(O)},key:{dir:c[0],color:e.key_col,intensity:e.key_e},ambient:{sky:de(e.fill_col,.6),ground:e.earth_b,intensity:i==="night"?.4:i==="day"?.8:.5},fog:{color:e.fog,near:50,far:150},lights:[{pos:[0,0,3.5],color:e.arena_col,intensity:.45,dist:14},...E.slice(0,4).map(O=>({pos:[O[0],O[1],O[2]+.9],color:e.orb_light_col,intensity:.35,dist:8,flicker:.2}))],dispose(){_.dispose(),ai(a)}}}var T1={forest:Rf,plains:Cf,swamp:Pf,worldtree:If,castle:Af};function Lf(i,t,e){let n=T1[i];return n?n(t,e):null}var Pt=(i,t)=>i+Math.random()*(t-i),A1=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function bs(i,t=!1){let e=new Hn(i);return e.colorSpace=ln,t&&(e.magFilter=hn,e.minFilter=hn,e.generateMipmaps=!1),e}function no(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);return s.addColorStop(0,i),s.addColorStop(.25,i.replace(/[\d.]+\)$/,".55)")),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128),bs(e)}function Uf(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.translate(256,256),e.strokeStyle=i,e.shadowColor=i,e.shadowBlur=18,e.lineWidth=5,e.beginPath(),e.arc(0,0,230,0,Math.PI*2),e.stroke(),e.lineWidth=2.5,e.beginPath(),e.arc(0,0,196,0,Math.PI*2),e.stroke(),e.font='900 30px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif',e.fillStyle=i,e.textAlign="center",e.textBaseline="middle";let n="\u706B\u6C34\u6728\u91D1\u571F\u65E5\u6708\u5C71\u98A8\u96F7\u5149\u95C7\u661F\u5929\u5730\u5922";for(let s=0;s<n.length;s++)e.save(),e.rotate(s/n.length*Math.PI*2),e.fillText(n[s],0,-213),e.restore();e.lineWidth=2,e.beginPath();for(let s=0;s<=5;s++){let r=s*4*Math.PI/5-Math.PI/2,o=Math.cos(r)*180,a=Math.sin(r)*180;s?e.lineTo(o,a):e.moveTo(o,a)}return e.stroke(),bs(t)}function R1(i,t,e=160){let n=document.createElement("canvas"),s=[...i].length;n.width=Math.max(256,Math.ceil(s*e*1.05+80)),n.height=e+80;let r=n.getContext("2d");return r.font=`900 ${e}px "Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=t,r.shadowBlur=34,r.fillStyle=t,r.fillText(i,n.width/2,n.height/2),r.shadowBlur=10,r.fillStyle="#ffffff",r.fillText(i,n.width/2,n.height/2),{tex:bs(n),aspect:n.width/n.height}}function C1(i,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d");return n.font="900 84px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,.75)",n.strokeText(i,128,64),n.fillStyle=t,n.fillText(i,128,64),bs(e)}function P1(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#6d6a72",t.fillRect(0,0,1024,1024);for(let n=0;n<9;n++){let s=n*56,r=s+56,o=6+n*6;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2,h=88+Math.random()*40;t.fillStyle=`rgb(${h},${h-4},${h+6})`,t.beginPath(),t.arc(512,512,r,c,l),t.arc(512,512,Math.max(s,1),l,c,!0),t.closePath(),t.fill(),t.strokeStyle="rgba(30,26,40,.85)",t.lineWidth=4,t.stroke()}}for(let n=0;n<9e3;n++)t.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},${Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2);let e=bs(i);return e.anisotropy=4,e}function I1(i,t){let e=/viewBox="0 0 ([\d.]+) ([\d.]+)"/.exec(i),n=e?Number(e[1]):16,s=e?Number(e[2]):20,r=Math.max(1,Math.floor(512/Math.max(n,s))),o=URL.createObjectURL(new Blob([i.replace("<svg ",`<svg xmlns="http://www.w3.org/2000/svg" width="${n*r}" height="${s*r}" `)],{type:"image/svg+xml"})),a=new Image;a.onload=()=>{let c=document.createElement("canvas");c.width=n*r,c.height=s*r;let l=c.getContext("2d");l.imageSmoothingEnabled=!1,l.drawImage(a,0,0,c.width,c.height),URL.revokeObjectURL(o),t(bs(c,!0),n/s)},a.onerror=()=>URL.revokeObjectURL(o),a.src=o}function L1(i,t){let e=URL.createObjectURL(new Blob([i.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="1152" ')],{type:"image/svg+xml"})),n=new Image;n.onload=()=>{let s=document.createElement("canvas");s.width=2048,s.height=1152;let r=s.getContext("2d");r.drawImage(n,0,0,2048,1152),URL.revokeObjectURL(e);let o=(a,c)=>{let l=r.getImageData(0,a,2048,c-a).data,h=0,u=0,p=0,m=0;for(let g=0;g<l.length;g+=148)h+=l[g],u+=l[g+1],p+=l[g+2],m++;return new zt(h/m/255,u/m/255,p/m/255).convertSRGBToLinear()};t(bs(s),o(980,1150),o(40,300))},n.onerror=()=>URL.revokeObjectURL(e),n.src=e}var U1={day:{sky:14412287,ground:5917240,hemi:1.6,sun:16773590,sunInt:2.2,sunPos:[6,12,4],spriteTint:16777215,torch:6,motes:16774872,bloom:"255,250,230"},sunset:{sky:16757642,ground:3810368,hemi:1.15,sun:16751196,sunInt:2,sunPos:[-10,4,-6],spriteTint:16771803,torch:14,motes:16761466,bloom:"255,190,120"},night:{sky:5926080,ground:1052700,hemi:.55,sun:10466559,sunInt:.8,sunPos:[-6,10,-8],spriteTint:13686514,torch:26,motes:14221194,bloom:"200,255,150"}},D1=["forest","swamp","worldtree"];function N1(i,t={}){let e,n=!!t.lite;try{e=new nr({canvas:i,antialias:!n,powerPreference:n?"default":"high-performance"})}catch{return null}let s=!1,r=()=>s?.75:n?1:Math.min(devicePixelRatio||1,1.5);e.setPixelRatio(r()),e.toneMapping=$r,e.toneMappingExposure=1.15;let o=new ir;o.fog=new aa(1709616,20,58);let a=new sn(55,16/9,.05,200),c=new S(0,1.75,7.2),l=new S(0,1.45,0);a.position.copy(c),o.add(a);let h=new ar(16777215,2236962,1),u=new Ri(16777215,1);o.add(h,u);let p=new $n(16777215,6,9,2);p.position.set(0,3,7.5),o.add(p);let m=new Ri(16774374,.8);m.position.set(1.5,5,9),m.target.position.set(0,1,-3),o.add(m,m.target);let g=new he;o.add(g);let _=new Ze({color:16777215,fog:!1,side:Ie}),d=new Tt(new Ge(70,70,66,48,1,!0,Math.PI-.95,1.9),_);d.scale.set(-1,1,1),d.position.set(0,13,6),g.add(d);let f=new Se({color:2767396,roughness:1}),y=new Tt(new Yr(90,48),f);y.rotation.x=-Math.PI/2,y.position.y=-.02,g.add(y);let x=new Se({color:5208634,roughness:.9,flatShading:!0}),M=2600,I=new sr(new Pn(.05,.42,3),x,M);{let Z=new ie,bt=new Ke,gt=new rn,xt=new S,Ht=new S,qt=new zt;for(let Gt=0;Gt<M;Gt++){let ve=9.9+Math.pow(Math.random(),.7)*30,It=Math.random()*Math.PI*2;xt.set(Math.cos(It)*ve,.18,Math.sin(It)*ve-1),gt.set(Pt(-.25,.25),Math.random()*3,Pt(-.25,.25)),bt.setFromEuler(gt);let St=Pt(.7,1.6);Ht.set(St,St*Pt(.8,1.5),St),Z.compose(xt,bt,Ht),I.setMatrixAt(Gt,Z),I.setColorAt(Gt,qt.setHSL(Pt(.22,.32),Pt(.35,.6),Pt(.3,.5)))}}g.add(I);let E=new he;g.add(E);let A=new Se({color:1981226,roughness:1,flatShading:!0}),F=new Se({color:3811868,roughness:1}),Q=new Se({color:6051942,roughness:1,flatShading:!0});function v(Z){E.clear();let bt=D1.includes(Z),gt=bt?70:34;for(let xt=0;xt<gt;xt++){let Ht=Pt(Math.PI*1.08,Math.PI*1.92),qt=Pt(24,48),Gt=Math.cos(Ht)*qt,ve=Math.sin(Ht)*qt-1;if(bt){let It=Pt(6,13),St=new he,ge=new Tt(new Ge(.25,.4,It*.3,6),F);ge.position.y=It*.15,St.add(ge);for(let ke=0;ke<3;ke++){let In=new Tt(new Pn(It*(.32-ke*.07),It*.5,7),A);In.position.y=It*(.42+ke*.2),St.add(In)}St.position.set(Gt,0,ve),E.add(St)}else{let It=new Tt(new je(Pt(.8,2.6),0),Math.random()<.5?Q:A);It.position.set(Gt,.3,ve),It.scale.y=Pt(.5,.9),It.rotation.y=Math.random()*3,E.add(It)}}}let T=new Tt(new Yr(9.5,64),new Se({map:P1(),roughness:.92,metalness:.02}));T.rotation.x=-Math.PI/2,g.add(T);let K=new Tt(new ni(9.5,.18,8,96),new Se({color:4933206,roughness:.85}));K.rotation.x=Math.PI/2,K.position.y=.05,g.add(K);let nt=new Tt(new Ai(9,9),new Ze({map:Uf("#a98bff"),transparent:!0,opacity:.38,blending:$e,depthWrite:!1}));nt.rotation.x=-Math.PI/2,nt.position.y=.03,nt.scale.x=-1,g.add(nt);let ct=new Se({color:5919846,roughness:.9}),vt=no("rgba(255,170,80,1)","rgba(255,120,40,0)"),ht=[];for(let Z of[-2.35,-1.65,-1.15,1.15,1.65,2.35]){let bt=Z-Math.PI/2,gt=Math.cos(bt)*10.4,xt=Math.sin(bt)*10.4-1.5,Ht=new he,qt=new Tt(new Ge(.42,.5,4.2,10),ct);qt.position.y=2.1;let Gt=new Tt(new on(1.2,.3,1.2),ct);Gt.position.y=4.35;let ve=new Tt(new Ge(.42,.22,.3,10),new Se({color:2959923,metalness:.6,roughness:.4}));ve.position.y=4.65;let It=new Yn(new Nn({map:vt,color:16756832,blending:$e,depthWrite:!1,transparent:!0}));It.position.y=5.05,It.scale.set(1.3,1.8,1);let St=new $n(16751178,10,14,2);St.position.y=5.1,Ht.add(qt,Gt,ve,It,St),Ht.position.set(gt,0,xt),g.add(Ht),ht.push({light:St,flame:It,base:1,phase:Math.random()*10})}let et=260,D=new be,tt=new Float32Array(et*3),O=new Float32Array(et);for(let Z=0;Z<et;Z++)tt[Z*3]=Pt(-14,14),tt[Z*3+1]=Pt(0,7),tt[Z*3+2]=Pt(-12,6),O[Z]=Math.random()*100;D.setAttribute("position",new Re(tt,3));let G=new Xi({size:.12,map:no(),transparent:!0,depthWrite:!1,blending:$e,color:16777215,sizeAttenuation:!0});g.add(new qi(D,G));let ot=no(),z=no("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),C=no("rgba(150,120,255,1)","rgba(120,80,255,0)"),L=new Map;function B(Z,bt){let gt=new he,xt=null,Ht=null,qt=null,Gt=1.95;bt.svg?(Gt=4.6,qt=new Nn({transparent:!0,alphaTest:.05}),Ht=new Yn(qt),Ht.center.set(.5,0),Ht.scale.set(Gt*1.33,Gt,1),I1(bt.svg,(ge,ke)=>{qt.map=ge,qt.needsUpdate=!0,Ht.scale.set(Gt*ke,Gt,1)}),gt.add(Ht)):(xt=lf(hh(bt.character??"wizard"),Z==="me"?"me":Z.startsWith("ally:")?"ally":"opp",ot,bt.staff),Gt=xt.height,gt.add(xt.root));let ve=new Tt(new Ai(Gt*.7,Gt*.32),new Ze({map:z,transparent:!0,depthWrite:!1}));if(ve.rotation.x=-Math.PI/2,ve.position.y=.02,gt.add(ve),Z!=="me"){let ge=new Tt(new Ai(Gt*1.1,Gt*1.1),new Ze({map:Uf(Z==="boss"?"#5dff8a":"#ff8a8a"),transparent:!0,opacity:.45,blending:$e,depthWrite:!1}));ge.rotation.x=-Math.PI/2,ge.position.y=.04,ge.name="circle",gt.add(ge)}let It=new Yn(new Nn({map:C,blending:$e,depthWrite:!1,transparent:!0,opacity:0}));It.scale.set(Gt*1.2,Gt*1.2,1),It.position.y=Gt*.5,gt.add(It),o.add(gt);let St={key:Z,group:gt,model:xt,sprite:Ht,spriteMat:qt,height:Gt,ko:!1,flame:null,aura:It,hurtUntil:0,lungeUntil:0,frostUntil:0,burnUntil:0,frosted:!1,look:{yaw:0,pitch:0,at:-1e9,curYaw:0,curPitch:0,seed:Math.random()*100}};return L.set(Z,St),St}function X(){for(let Z of L.values())o.remove(Z.group),Z.group.traverse(bt=>{let gt=bt;gt.geometry?.dispose?.(),gt.material?.dispose?.()});L.clear()}let H=new he;a.add(H);let N=new S(1.08,-.52,-1.6),k=new S(1.14,-.6,-1.6);H.scale.setScalar(.72);let q=N.clone(),j=new Se({color:13214247,metalness:.3,roughness:.35,flatShading:!0}),w=new Se({color:4020950,roughness:.9,flatShading:!0,side:Ie}),dt=new Se({color:15778970,roughness:.75,flatShading:!0}),it=new he;H.add(it);let V=Ms("verdant",ot),$="verdant";it.add(V.group);let lt=new $n(V.color,.6,4,2);lt.position.y=Zi,it.add(lt);function ft(Z){Z!==$&&($=Z,it.remove(V.group),V.group.traverse(bt=>{bt.geometry?.dispose?.()}),V=Ms(Z,ot),it.add(V.group),lt.color.copy(V.color))}{let Z=(Ht,qt,Gt,ve,It,St)=>{let ge=new Tt(Ht,qt);return ge.position.set(ve,It,St),Gt.add(ge),ge},bt=Z(new qr(.046,.075,4,10),dt,it,.066,-.004,.014);bt.scale.set(.82,1,1.12),bt.rotation.set(0,.25,-.08),[.052,.018,-.016,-.048].forEach((Ht,qt)=>{let Gt=.05-qt*.002,ve=Z(new ni(Gt,.019-qt*.001,6,14,Math.PI*1.32),dt,it,0,Ht,0);ve.rotation.x=-Math.PI/2;let It=Math.PI*1.32;Z(new Mn(.019-qt*.001,6,5),dt,it,Math.cos(It)*Gt,Ht,-Math.sin(It)*Gt)}),Z(new qr(.021,.075,4,8),dt,it,.022,.074,.05).rotation.set(.3,0,1.25);let xt=new he;xt.position.set(.09,-.08,.03),xt.rotation.set(-.55,0,.62),H.add(xt),Z(new Ge(.05,.062,.2,10),dt,xt,0,-.08,0),Z(new Ge(.1,.16,.95,10,1,!0),w,xt,0,-.6,0),Z(new ni(.1,.028,6,14),j,xt,0,-.14,0).rotation.x=Math.PI/2}let R=new $n(16777215,1.4,3,2);R.position.set(.3,.3,-.5),a.add(R);let b={wizard:{sleeve:4020950,skin:15778970},witch:{sleeve:5974662,skin:10145914},goblin:{sleeve:8018478,skin:7323466},knight:{sleeve:12897496,skin:12107980},kid:{sleeve:14181935,skin:15778970},human:{sleeve:9067059,skin:15778970}},U=-1e9,W="ready",rt=0,Y=900,Et=()=>{W==="gone"&&(W="growing",rt=performance.now())},Mt=0,ut=0,Lt=null,pt=!1,At={uTime:{value:0},uAmount:{value:0},uC0:{value:new zt},uC1:{value:new zt},uC2:{value:new zt},uC3:{value:new zt}},Ft=new Tt(new Ai(1,1),new wn({uniforms:At,transparent:!0,depthWrite:!1,depthTest:!1,blending:$e,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));Ft.renderOrder=30,Ft.frustumCulled=!1,a.add(Ft);function Nt(){let bt=Math.tan(cr.degToRad(a.fov/2))*1.2,gt=bt*.55;Ft.scale.set(bt*a.aspect*2.05,gt,1),Ft.position.set(0,-bt+gt/2,-1.2)}function Rt(Z){let bt={h:0,s:0,l:0};Z.getHSL(bt),At.uC0.value.setHSL(bt.h,1,.82),At.uC1.value.setHSL(bt.h,1,.6),At.uC2.value.setHSL(bt.h,.95,.45),At.uC3.value.setHSL((bt.h+.03)%1,.9,.22)}let Ct=new S;function kt(Z,bt="chest"){if(Z==="me")return bt==="staff"||bt==="head"?(V.gem.getWorldPosition(Ct),Ct.clone()):a.localToWorld(new S(Pt(-.15,.15),-.1,-1.4));let gt=L.get(Z);if(!gt)return new S(0,1.4,-3);if(gt.model&&bt==="staff")return gt.model.crystal.getWorldPosition(Ct),Ct.clone();let xt=gt.group.position.clone(),Ht=gt.height*gt.group.scale.y;return Z==="boss"&&bt==="mouth"?xt.add(new S(-gt.height*.55,gt.height*.62,.3)):xt.add(new S(0,Ht*(bt==="head"?.85:.6),0))}let jt=[],J=0;function Ut(Z,bt,gt={}){if(n&&J++&1)return;let xt=new Yn(new Nn({map:ot,color:bt,blending:gt.solid?ei:$e,depthWrite:!1,transparent:!0,opacity:gt.opacity??1}));xt.position.copy(Z),xt.scale.setScalar(gt.size??.25),o.add(xt),jt.push({sprite:xt,vel:gt.vel??new S,life:0,max:gt.life??.6,grow:gt.grow??0,gravity:gt.gravity??0})}function yt(Z,bt,gt=26,xt=3.2,Ht=.22){for(let qt=0;qt<gt;qt++){let Gt=new S(Pt(-1,1),Pt(-.6,1.2),Pt(-1,1)).normalize().multiplyScalar(Pt(xt*.4,xt));Ut(Z,bt,{vel:Gt,size:Pt(Ht*.6,Ht*1.4),life:Pt(.4,.9),gravity:-3})}Ut(Z,bt,{size:.6,grow:6,life:.35,opacity:.9})}function wt(Z,bt,gt=1){let xt=Z.group.position,Ht=Z.model?.45:Z.height*.35;for(let qt=0;qt<gt;qt++){let Gt=Z.group.scale.y;Ut(new S(xt.x+Pt(-Ht,Ht)*Gt,xt.y+Pt(.05,Z.height*.45)*Gt,xt.z+Pt(-Ht,Ht)*.5*Gt),bt,{size:Pt(.35,.7)*Gt,vel:new S(Pt(-.1,.1),Pt(1.4,2.6),0),life:Pt(.35,.65),grow:-.9,opacity:.75,solid:!0}),Ut(new S(xt.x+Pt(-Ht,Ht)*.6*Gt,xt.y+Pt(.05,Z.height*.35)*Gt,xt.z),bt,{size:Pt(.3,.5)*Gt,vel:new S(0,Pt(1.2,2),0),life:.4,grow:-1}),Math.random()<.5&&Ut(new S(xt.x+Pt(-Ht,Ht)*Gt,xt.y+Pt(.2,Z.height*.9)*Gt,xt.z),16777215,{size:Pt(.05,.1)*Gt,vel:new S(0,Pt(1.5,3),0),life:.5})}}let Vt=[];function Yt(Z){for(let gt=0;gt<2;gt++){let xt=[],Ht=Z.clone().add(new S(Pt(-1.5,1.5),9,Pt(-1,1)));for(let Gt=0;Gt<=12;Gt++){let ve=Ht.clone().lerp(Z,Gt/12);Gt>0&&Gt<12&&ve.add(new S(Pt(-.45,.45),Pt(-.2,.2),Pt(-.3,.3))),xt.push(ve)}let qt=new fa(new be().setFromPoints(xt),new Wr({color:gt?16777215:10475775,transparent:!0,blending:$e,depthWrite:!1}));o.add(qt),Vt.push({line:qt,life:0});for(let Gt=0;Gt<xt.length-1;Gt++){let ve=xt[Gt].distanceTo(xt[Gt+1]);for(let It=0;It<ve;It+=.09)Ut(xt[Gt].clone().lerp(xt[Gt+1],It/ve),gt?16777215:9425151,{size:gt?.12:.3,life:.28,opacity:gt?1:.7})}}let bt=new $n(12576511,60,16,2);bt.position.copy(Z).add(new S(0,2,1)),o.add(bt),setTimeout(()=>o.remove(bt),160),yt(Z,12576511,30,4,.18)}let le=[];function Le(Z,bt,gt="#ffd479"){let xt=new Yn(new Nn({map:C1(bt,gt),transparent:!0,depthWrite:!1,depthTest:!1}));xt.position.copy(kt(Z,"head")).add(new S(Pt(-.3,.3),.4,.3));let Ht=Z==="me"?.9:1.3;xt.scale.set(Ht,Ht/2,1),xt.renderOrder=10,o.add(xt),le.push({sprite:xt,life:0})}let Be=document.createElement("div");Be.className="arena3d-hit",document.body.append(Be);function me(Z="255,40,60",bt=""){Be.style.setProperty("--hit",Z),Be.className="arena3d-hit",Be.offsetWidth,Be.className=`arena3d-hit on ${bt}`}let ze=0,bn=Z=>{A1()||(ze=Math.max(ze,Z))},li=[];function io(Z,bt,gt,xt,Ht,qt){let{tex:Gt,aspect:ve}=R1(gt,xt),It=new Yn(new Nn({map:Gt,transparent:!0,depthWrite:!1}));It.scale.set(Ht*ve*.4,Ht*.4,1),It.position.copy(Z),It.renderOrder=5,o.add(It);let St=Z.clone().lerp(bt,.5).add(new S(Pt(-.6,.6),1.2+Z.distanceTo(bt)*.08,0));return new Promise(ge=>li.push({sprite:It,from:Z,to:bt,mid:St,t:0,dur:qt,color:new zt(xt),size:Ht,done:ge,trailAt:0}))}let Tn="battle",Qi="",Es="",Pe=null,hi=[],Bn=new Ri(16777215,1);Bn.visible=!1,o.add(Bn,Bn.target);let Ss=(Z,bt)=>new S(Z[0],Z[2]-bt,-Z[1]);function so(Z,bt){Pe&&(o.remove(Pe.group),Pe.dispose(),Pe=null);for(let gt of hi)o.remove(gt);hi.length=0;try{Pe=Lf(Z,bt,n)}catch(gt){console.warn("3D arena failed, using the classic one",gt),Pe=null}if(g.visible=!Pe,Bn.visible=!!Pe,!Pe){Es="";return}Pe.group.rotation.x=-Math.PI/2,Pe.group.position.y=-Pe.floor,o.add(Pe.group);for(let gt of n?Pe.lights.slice(0,2):Pe.lights){let xt=new $n(new zt(...gt.color),gt.intensity*8,gt.dist,2);xt.position.copy(Ss(gt.pos,Pe.floor)),xt.userData.base=xt.intensity,xt.userData.flicker=gt.flicker??0,o.add(xt),hi.push(xt)}}function ro(Z){let bt=Z.key.dir;Bn.color.setRGB(...Z.key.color),Bn.intensity=Z.key.intensity*.35,Bn.position.set(bt[0]*50,bt[2]*50,-bt[1]*50),Bn.target.position.set(0,0,0),h.color.setRGB(...Z.ambient.sky),h.groundColor.setRGB(...Z.ambient.ground),h.intensity=Z.ambient.intensity,u.intensity=0,m.intensity*=.45,p.intensity*=.5;let gt=o.fog;gt.color.setRGB(...Z.fog.color),gt.near=Z.fog.near,gt.far=Z.fog.far,e.setClearColor(gt.color)}let _r=0,ui=0,ws=0,P=new rn,st=new rn,mt=!1,_t=!1,at=new zt(16777215),Dt=null;function Xt(Z,bt){let gt=c.z-bt,xt=Math.tan(cr.degToRad(a.fov/2))*gt;return Z*xt*a.aspect}function $t(){if(!Dt)return;let Z=Dt,bt=L.get("opp");bt?.model&&bt.group.scale.setScalar(1.3),bt&&bt.group.position.set(Xt(a.aspect<1?.08:Z.layout==="deck"?.36:.46,-2.2),0,-2.2);let gt=L.get("boss");gt&&gt.group.position.set(Xt(a.aspect<1?.15:.5,-5.5),0,-5.5),Z.allies.forEach((Ht,qt)=>{let Gt=L.get(`ally:${Ht.id}`);Gt&&Gt.group.position.set(Xt(-.36+qt*.13,-.6-qt*1.1),0,-.6-qt*1.1)});let xt=(gt??bt)?.group.position;for(let[Ht,qt]of L){if(!qt.model)continue;let Gt=Ht==="opp"?c:xt??new S(0,0,-3);qt.model.root.rotation.y=Math.atan2(Gt.x-qt.group.position.x,Gt.z-qt.group.position.z)}}function Kt(Z){Dt=Z,Tn=Z.layout,X();let bt=b[hh(Z.me.character??"wizard")]??b.wizard;w.color.set(bt.sleeve),dt.color.set(bt.skin),dt.metalness=Z.me.character==="knight"?.3:0,fn(),ft(Z.me.staff??"verdant"),pt=!1,H.visible=!0,W="ready",Lt=null,At.uAmount.value=0,Ft.visible=!1,Z.opp&&B("opp",Z.opp),Z.boss&&B("boss",Z.boss);for(let xt of Z.allies)B(`ally:${xt.id}`,xt);$t();let gt=U1[Z.time];h.color.set(gt.sky),h.groundColor.set(gt.ground),h.intensity=gt.hemi*1.25,m.intensity=Z.time==="night"?1.3:Z.time==="sunset"?1:.7,u.color.set(gt.sun),u.intensity=gt.sunInt,u.position.set(...gt.sunPos),p.intensity=Z.time==="night"?9:5;for(let xt of ht)xt.base=gt.torch;G.color.set(gt.motes),at=new zt(gt.spriteTint),Qi!==Z.bgKey&&(Qi=Z.bgKey,so(Z.bgKey.split("-")[0],Z.time)),Pe?ro(Pe):Es!==Z.bgKey&&(Es=Z.bgKey,o.fog.near=20,o.fog.far=58,v(Z.bgKey.split("-")[0]),L1(Z.bgSvg,(xt,Ht,qt)=>{_.map?.dispose(),_.map=xt,_.needsUpdate=!0,o.fog.color.copy(Ht).lerp(qt,.35),f.color.copy(Ht).multiplyScalar(.9),x.color.copy(Ht).lerp(new zt(5212730),.45).multiplyScalar(1.15),A.color.copy(Ht).lerp(new zt(1522212),.5),e.setClearColor(qt)}))}let ne=new Bt,ee=new Bt,Qt=.32,xe=.13,re={yaw:0,pitch:0,sentYaw:0,sentPitch:0,sentAt:0},Ue=Z=>{Z.pointerType!=="mouse"||Z.buttons||Z.target?.closest?.(".pad, canvas:not(#arena3d), input, textarea, button, select, .dkc, .deck-hand, .challenge, dialog")||ne.set(Z.clientX/innerWidth*2-1,Z.clientY/innerHeight*2-1)};addEventListener("pointermove",Ue,{passive:!0});function fn(){let Z=Tn==="deck"?k:N,bt=Tn==="deck"?.56:.72;if(a.aspect>=1.2){q.copy(Z),H.scale.setScalar(bt);return}let gt=Math.tan(cr.degToRad(a.fov/2))*-Z.z,xt=gt*a.aspect;q.set(xt*.78,-gt*.62,Z.z),H.scale.setScalar(bt*Math.max(.5,Math.min(1,a.aspect*.9)))}function _e(){let Z=i.clientWidth||innerWidth,bt=i.clientHeight||innerHeight;e.setSize(Z,bt,!1),a.aspect=Z/bt,a.fov=a.aspect<1?60:a.aspect<1.3?66:55,a.updateProjectionMatrix(),$t(),Nt(),fn()}addEventListener("resize",_e);let te=0,Xe=0,Me=typeof ResizeObserver=="function"?new ResizeObserver(()=>{!Li||i.clientWidth===te&&i.clientHeight===Xe||(te=i.clientWidth,Xe=i.clientHeight,_e())}):null;Me?.observe(i);let An=new zt(6974072),Ii=new zt(16722474),dn=new zt(9428223),yr=new zt(2784511),Ne=new zt(16738842);function Qn(Z,bt){let gt=bt<Z.hurtUntil,xt=bt<Z.frostUntil,Ht=bt<Z.burnUntil;if(Z.model&&Z.ko){for(let qt of Z.model.materials)qt.mat.color.copy(qt.color).lerp(An,.55),qt.mat.emissive.setRGB(0,0,0);return}if(Z.model){if(xt!==Z.frosted){Z.frosted=xt;for(let qt of Z.model.materials)qt.mat.opacity=xt?.5:1,qt.mat.depthWrite=!xt}for(let qt of Z.model.materials)qt.mat.color.copy(qt.color),xt&&qt.mat.color.lerp(dn,.75),gt?(qt.mat.emissive.copy(Ii),qt.mat.emissiveIntensity=.6):xt?(qt.mat.emissive.copy(yr),qt.mat.emissiveIntensity=.45):Ht?(qt.mat.color.lerp(Ne,.35),qt.mat.emissive.copy(Ne),qt.mat.emissiveIntensity=.55+.3*Math.sin(bt/40)):(qt.mat.emissive.copy(qt.emissive),qt.mat.emissiveIntensity=1)}else Z.spriteMat&&(Z.spriteMat.color.copy(gt?new zt(1,.35,.35):xt?dn:Ht?new zt(1,.7,.5):at),Z.spriteMat.opacity=xt?.6:Z.ko?Z.spriteMat.opacity:1)}let Li=!1,pn=0,Ui=performance.now(),He=0,ji=0,xr=0,Ia=0;function Df(Z){if(s||document.hidden)return;if(Ia<45){Ia++;return}if(ji++,xr+=Z,xr<2500)return;let bt=ji*1e3/xr;ji=0,xr=0,!(bt>=(n?22:34))&&(n?(s=!0,e.setPixelRatio(r()),_e()):oo.setLite(!0),dispatchEvent(new CustomEvent("kw:arena-lite",{detail:{fps:Math.round(bt),lowRes:s}})))}function vh(Z){pn=requestAnimationFrame(vh),Df(Z-Ui);let bt=Math.min(1,Math.max(0,(Z-Ui)/1e3)),gt=Math.min(.05,bt);Ui=Z,He+=gt;let xt=performance.now(),Ht=!1;ee.lerp(ne,Ht?1:.05);let qt=Ht?0:Math.sin(He*.7)*.025;if(n)a.position.set(c.x+ee.x*.12,c.y-ee.y*.05+qt,c.z),a.lookAt(l.clone().add(new S(ee.x*1.5,-ee.y*.75,0))),re.yaw=0,re.pitch=0;else{re.yaw=-ee.x*Qt,re.pitch=-ee.y*xe,a.position.set(c.x,c.y+qt,c.z);let It=l.clone().sub(c).applyAxisAngle(new S(0,1,0),re.yaw),St=It.clone().cross(new S(0,1,0)).normalize();It.applyAxisAngle(St,re.pitch),a.lookAt(c.clone().add(It))}Li&&Dt&&(Dt.opp||Dt.allies.length)&&Z-re.sentAt>150&&(Math.abs(re.yaw-re.sentYaw)>.02||Math.abs(re.pitch-re.sentPitch)>.02)&&(re.sentAt=Z,re.sentYaw=re.yaw,re.sentPitch=re.pitch,dispatchEvent(new CustomEvent("kw:look",{detail:{yaw:+re.yaw.toFixed(3),pitch:+re.pitch.toFixed(3)}}))),ze>0&&(a.position.add(new S(Pt(-1,1),Pt(-1,1),0).multiplyScalar(ze)),a.rotation.z+=Pt(-1,1)*ze*.15,ze=Math.max(0,ze-gt*1.1)),ui+=(_r-ui)*Math.min(1,gt*6),ws=Math.max(0,ws-gt*2.2),P.x+=(st.x-P.x)*Math.min(1,gt*14),P.y+=(st.y-P.y)*Math.min(1,gt*14),P.z+=(st.z-P.z)*Math.min(1,gt*14),ws<=0&&st.set(0,0,0);let Gt=.5+.5*Math.sin(He*6);{let It=Math.max(0,1-(xt-U)/380),St=It>0?Math.sin(It*Math.PI):0,ge=Math.min(1,ui);Mt+=((ge>.05&&!Ht?Math.min(1,.5+ge*.6):0)-Mt)*Math.min(1,gt*3),ut+=gt*(2.6+ge*1.4);let ke=Math.sin(ut),In=Math.sin(ut*2)/2;H.position.set(q.x-ee.x*.04+ke*.06*Mt,q.y+ee.y*.03+(Ht?0:Math.sin(He*1.6)*.008)+ge*.03+In*.11*Mt,q.z-St*.35),it.rotation.set(ge*.25-St*.75+P.x*.3+In*.18*Mt,P.y*.3,.2-ke*.24*Mt+P.z*.3);let tn=W==="ready"?1:0;if(W==="growing"){let oe=Math.min(1,(xt-rt)/Y);if(tn=oe*oe*(3-2*oe),oe>=1)W="ready";else if(!Ht){V.gem.getWorldPosition(Ct);for(let we=0;we<2;we++){let Ln=Ct.clone().add(new S(Pt(-.4,.4),Pt(-.4,.4),Pt(-.4,.4)));Ut(Ln,V.color,{size:Pt(.025,.06),vel:Ct.clone().sub(Ln).multiplyScalar(2.8),life:.36})}}}if(V.gem.scale.setScalar(tn),V.gemMat.emissiveIntensity=.7+ge*(1.6+Gt*1.2)+St*3,lt.intensity=(.5+ge*4+St*6)*tn,V.glow.scale.setScalar((.3+ge*(.32+Gt*.18)+St*.6)*tn),V.glow.material.opacity=.3+ge*.35,V.gem.rotation.y+=gt*(.8+ge*6),V.update(He,gt,ge),tn>.9&&!Ht&&H.visible&&(V.gem.getWorldPosition(Ct),Mt>.25&&Ut(Ct.clone(),V.color,{size:Pt(.03,.05),life:.55,opacity:.9}),ge>.2&&Math.random()<ge*.8)){let oe=Ct.clone().add(new S(Pt(-.35,.35),Pt(-.35,.35),Pt(-.35,.35)));Ut(oe,V.color.clone().lerp(new zt(16777215),.4),{size:Pt(.02,.05),vel:Ct.clone().sub(oe).multiplyScalar(2.6),life:.38})}if(Lt&&!Ht&&H.visible)for(let oe=0;oe<2;oe++){let we=it.localToWorld(new S(Pt(-.05,.05),Pt(-.15,1.3),Pt(-.05,.05)));Ut(we,Lt,{size:Pt(.05,.12),vel:new S(Pt(-.05,.05),Pt(.35,.8),0),life:Pt(.25,.45),solid:Math.random()<.4,opacity:.9})}At.uTime.value=Ht?0:He,At.uAmount.value+=((Lt&&H.visible?1:0)-At.uAmount.value)*Math.min(1,bt*3),Ft.visible=At.uAmount.value>.01}for(let[It,St]of L){let ge=St.group.getObjectByName("circle");if(ge&&(ge.rotation.z+=gt*.4),Qn(St,xt),St.ko)continue;let ke=Math.max(0,St.lungeUntil-xt)/450;if(St.model){let oe=St.model;oe.body.position.y=Ht?0:Math.sin(He*2+St.height*3)*.02;let we=St.look,Ln=xt-we.at>4e3,Ts=Ln?.22*Math.sin(He*.31+we.seed)*Math.sin(He*.13+we.seed*2):we.yaw,La=Ln?.06*Math.sin(He*.23+we.seed*3):we.pitch;we.curYaw+=(Ts-we.curYaw)*Math.min(1,gt*7),we.curPitch+=(La-we.curPitch)*Math.min(1,gt*7),oe.head.rotation.set(-we.curPitch*.8,we.curYaw*.7,0),oe.body.rotation.y=we.curYaw*.3;let ts=1-ke,es=ke<=0?0:ts<.18?-.35*(ts/.18):ts<.4?-.35+1.35*((ts-.18)/.22):1-((ts-.4)/.6)**2;oe.body.rotation.x=Math.max(0,es)*.2,oe.staffPivot.rotation.x=es*1.9;let fi=It==="me"?ui:(It==="opp"||It.startsWith("ally:"))&&mt?Tn==="deck"?.7:.45:0,Mr=It==="me"?0:fi*(1-Math.max(0,es)),Hf=-.15-fi*.75-Math.max(0,es)*.9+(It==="me"?P.x:0)+Math.sin(He*4.4)*.22*Mr;oe.arm.rotation.x+=(Hf-oe.arm.rotation.x)*Math.min(1,gt*10),oe.arm.rotation.z=-.35+(It==="me"?P.z:0)+Math.sin(He*2.2)*.32*Mr,oe.arm.rotation.y=It==="me"?P.y:0;let ns=It==="me"?ui:fi;oe.crystalMat.emissiveIntensity=1.2+ns*(3+Gt*2)+ke*3,oe.glow.scale.setScalar(.45+ns*(.5+Gt*.3)+ke*.6),oe.glow.material.opacity=.45+ns*.5,oe.crystal.rotation.y+=gt*(.8+ns*6),oe.staff.update(He,gt,ns),ns>.5&&Math.random()<ns*.6&&(oe.crystal.getWorldPosition(Ct),Ut(Ct.clone().add(new S(Pt(-.1,.1),Pt(-.1,.1),Pt(-.1,.1))),oe.staff.color.getHex(),{size:Pt(.03,.08),vel:new S(Pt(-.2,.2),Pt(.2,.6),0),life:.7}))}else St.sprite&&(St.sprite.position.y=Ht?0:Math.abs(Math.sin(He*2))*.05,St.sprite.position.z=ke*.4);let In=It==="opp"&&mt&&Tn==="deck"||It==="boss"&&_t,tn=St.aura.material;if(tn.opacity+=((In?.55+.2*Math.sin(He*5):St.flame?.35:0)-tn.opacity)*Math.min(1,gt*5),tn.color.copy(It==="boss"?new zt(16742954):St.flame??new zt(11832575)),St.flame&&wt(St,St.flame,2),xt<St.burnUntil&&wt(St,Math.random()<.5?16734746:16756784,3),xt<St.frostUntil&&Math.random()<.3&&wt(St,13628159,1),It==="boss"&&_t&&Math.random()<.8){let oe=kt("boss","mouth"),we=oe.clone().add(new S(Pt(-1.5,1.5),Pt(-1,1),Pt(-1,1)));Ut(we,16751162,{size:.12,vel:oe.clone().sub(we).multiplyScalar(1.6),life:.55})}}for(let It of ht){let St=.85+.15*Math.sin(He*9+It.phase)+.08*Math.sin(He*23+It.phase*2);It.light.intensity=It.base*St,It.flame.scale.set(1.2*St,1.8*(.9+.2*St),1)}if(nt.rotation.z+=gt*.05,Pe){Pe.update(He*30);for(let It of hi)It.userData.flicker&&(It.intensity=It.userData.base*(1-It.userData.flicker*(.5+.5*Math.sin(He*9+It.position.x)*Math.sin(He*23+It.position.z))))}let ve=D.attributes.position;for(let It=0;It<et;It++){let St=ve.getY(It)+gt*(.12+O[It]%1*.2);St>7.5&&(St=0),ve.setY(It,St),ve.setX(It,ve.getX(It)+Math.sin(He*.5+O[It])*gt*.15)}ve.needsUpdate=!0,G.opacity=.55+.35*Math.sin(He*1.3);for(let It=li.length-1;It>=0;It--){let St=li[It];St.t+=gt/St.dur;let ge=Math.min(1,St.t),ke=ge*ge*(1.6-.6*ge),In=St.from.clone().lerp(St.mid,ke),tn=St.mid.clone().lerp(St.to,ke);St.sprite.position.copy(In.lerp(tn,ke)),St.gem&&(St.gem.position.copy(St.sprite.position),St.gem.rotation.y+=gt*12,St.gem.rotation.x+=gt*7);let oe=.55+ke*.8,we=St.sprite.material,Ln=we.map?.image,Ts=Ln?Ln.width/Ln.height:1;St.sprite.scale.set(St.size*Ts*.4*oe,St.size*.4*oe,1),St.trailAt-=gt,St.trailAt<=0&&!Ht&&(St.trailAt=.016,Ut(St.sprite.position,St.color,{size:Pt(.05,.13)*St.size,life:.35,opacity:.8,vel:new S(Pt(-.3,.3),Pt(-.3,.3),Pt(-.3,.3))})),ge>=1&&(o.remove(St.sprite),we.map?.dispose(),we.dispose(),St.gem&&o.remove(St.gem),li.splice(It,1),St.done())}for(let It=jt.length-1;It>=0;It--){let St=jt[It];if(St.life+=gt,St.life>=St.max){o.remove(St.sprite),St.sprite.material.dispose(),jt.splice(It,1);continue}St.vel.y+=St.gravity*gt,St.sprite.position.addScaledVector(St.vel,gt),St.grow&&St.sprite.scale.multiplyScalar(1+St.grow*gt),St.sprite.material.opacity=1-St.life/St.max}for(let It=Vt.length-1;It>=0;It--){let St=Vt[It];St.life+=gt,St.line.material.opacity=St.life<.08||St.life>.14&&St.life<.2?1:.15,St.life>.32&&(o.remove(St.line),St.line.geometry.dispose(),St.line.material.dispose(),Vt.splice(It,1))}for(let It=le.length-1;It>=0;It--){let St=le[It];St.life+=gt,St.sprite.position.y+=gt*.8,St.sprite.material.opacity=Math.min(1,2.2-St.life*2),St.life>1.1&&(o.remove(St.sprite),St.sprite.material.map?.dispose(),St.sprite.material.dispose(),le.splice(It,1))}e.render(o,a)}function Nf(Z,bt,gt){let xt=L.get(Z),Ht=performance.now();bt==="bolt"&&(Yt(xt?kt(Z,"head"):gt),Z==="me"&&me("190,230,255","bolt")),bt==="frost"&&(xt&&(xt.frostUntil=Ht+1100),yt(gt,13628159,30,2.5,.16),Z==="me"&&me("140,210,255","frost")),bt==="fire"&&(xt&&(xt.burnUntil=Ht+1100),yt(gt,16742954,36,3.4,.24),Z==="me"&&me("255,120,30","fire"))}let oo={setup:Kt,setActive(Z){Z!==Li&&(Li=Z,i.classList.toggle("on",Z),Z?(_e(),Ui=performance.now(),Ia=0,ji=0,xr=0,pn=requestAnimationFrame(vh)):cancelAnimationFrame(pn))},async cast(Z,bt,gt,xt={}){let Ht=xt.kind??"attack",qt=Z==="me"||Z.startsWith("ally:"),Gt=Ht==="heal"?"#5dffa8":Ht==="mana"?"#ffd479":xt.fx==="bolt"?"#bfe6ff":xt.fx==="frost"?"#8fdcff":xt.fx==="fire"?"#ff8a3a":qt?"#a98bff":"#ff6b6b",ve=L.get(Z);if(ve&&(ve.lungeUntil=performance.now()+450),Z==="me"&&(ui=0,_r=0),Ht!=="attack"){if(Z==="me"&&W!=="gone"&&H.visible){U=performance.now(),W="gone";let oe=new Tt(V.gem.geometry,V.gemMat),we=kt("me","staff"),Ln=kt("me","chest"),Ts=we.clone().lerp(Ln,.5).add(new S(0,.35,0));oe.position.copy(we),oe.scale.setScalar(1.3),o.add(oe);let La=performance.now();await new Promise(ts=>{let es=()=>{let fi=Math.min(1,(performance.now()-La)/520),Mr=we.clone().lerp(Ts,fi).lerp(Ts.clone().lerp(Ln,fi),fi);oe.position.copy(Mr),oe.rotation.y+=.3,oe.scale.setScalar(1.3*(1-fi*.7)),Math.random()<.8&&Ut(Mr.clone(),Gt,{size:Pt(.03,.07),life:.35,opacity:.9}),fi<1?requestAnimationFrame(es):(o.remove(oe),ts())};es()})}let tn=kt(Z);for(let oe=0;oe<30;oe++)Ut(tn.clone().add(new S(Pt(-.5,.5),Pt(-.8,.2),Pt(-.3,.3))),Gt,{size:Pt(.08,.2),vel:new S(Pt(-.2,.2),Pt(.8,1.8),0),life:Pt(.6,1.1)});Z==="me"&&me(Ht==="heal"?"80,255,160":"255,212,121"),xt.damage&&Le(Z,`+${xt.damage}`,Gt);return}let It=kt(Z,Z==="boss"?"mouth":"staff"),St=kt(bt,"chest"),ge=(xt.crit?1.5:1)*1.15,ke=io(It,St,gt,Gt,ge,.85);if(Z==="me"){U=performance.now(),W="gone";let tn=new Tt(V.gem.geometry,V.gemMat);tn.scale.setScalar(1.5),tn.position.copy(It),o.add(tn),li[li.length-1].gem=tn}await ke,yt(St,Gt,xt.crit?46:28,xt.crit?4.4:3.2,.2);let In=L.get(bt);In&&(In.hurtUntil=performance.now()+450),Nf(bt,xt.fx,St),bt==="me"?(xt.fx||me(),bn(xt.crit?.16:.09)):bn(xt.crit?.07:.035),xt.damage&&Le(bt,`\u2212${xt.damage}${xt.crit?"!":""}`,bt==="me"?"#ff6b81":xt.crit?"#ff9a3a":"#ffd479")},fizzle(Z){let bt=kt(Z,Z==="boss"?"head":"staff");if(Z!=="me")for(let gt=0;gt<14;gt++)Ut(bt,10132136,{size:Pt(.1,.25),vel:new S(Pt(-.6,.6),Pt(.3,1),Pt(-.3,.3)),life:.8,opacity:.6});if(Z==="me"){if(ui=0,W!=="gone"&&H.visible){V.gem.getWorldPosition(Ct);for(let gt=0;gt<16;gt++)Ut(Ct.clone(),Math.random()<.5?V.color:10132136,{size:Pt(.02,.05),vel:new S(Pt(-.8,.8),Pt(-.2,.9),Pt(-.5,.5)),life:Pt(.4,.7),gravity:-2.5})}W="gone"}},ko(Z){if(Z==="me"){if(pt)return;pt=!0,Lt=null,V.gem.getWorldPosition(Ct),yt(Ct.clone(),10132136,18,1.6,.1),H.visible=!1;return}let bt=L.get(Z);if(!bt||bt.ko)return;bt.ko=!0,bt.flame=null,bt.aura.material.opacity=0;let gt=performance.now(),xt=()=>{let Ht=Math.min(1,(performance.now()-gt)/700),qt=Ht*Ht;bt.model?(bt.model.root.rotation.z=Math.PI/2*qt,bt.model.root.position.y=.24*qt):bt.spriteMat&&(bt.spriteMat.rotation=Math.PI/2*Ht*-1,bt.spriteMat.opacity=1-Ht*.6),Ht<1&&requestAnimationFrame(xt)};xt(),yt(kt(Z),16777215,40,3,.25)},onfire(Z,bt,gt){if(Z==="me"){Lt=bt&&!pt?new zt(gt??"#6ee7ff"):null,Lt&&Rt(Lt);return}let xt=L.get(Z);xt&&(xt.flame=bt?new zt(gt??"#6ee7ff"):null)},channel(Z){_r=Math.max(0,Math.min(1,Z))},twitch(){Et(),ws=.35,st.set(Pt(-.35,.25),Pt(-.25,.25),Pt(-.3,.3)),Math.random()<.6&&W==="ready"&&(V.gem.getWorldPosition(Ct),Ut(Ct.clone(),V.color.clone().lerp(new zt(16777215),.5),{size:Pt(.04,.09),vel:new S(Pt(-.6,.6),Pt(.2,.9),Pt(-.3,.3)),life:.5}))},thrust(){U=performance.now(),V.gem.getWorldPosition(Ct),yt(Ct.clone(),V.color,18,1.6,.08)},oppChannel(Z){mt=Z},inhale(Z){_t=Z},breath(Z,bt){_t=!1;let gt=kt("boss","mouth");for(let xt=0;xt<160;xt++)setTimeout(()=>{let qt=(Z.length?kt(Z[xt%Z.length]):a.localToWorld(new S(0,-.2,-1))).clone().add(new S(Pt(-1.5,1.5),Pt(-.8,.8),0)).sub(gt).normalize().multiplyScalar(Pt(7,11));Ut(gt,Math.random()<.4?16765530:16734746,{size:Pt(.3,.7),vel:qt,life:Pt(.6,.9),grow:1.2})},xt*5);setTimeout(()=>{for(let xt of Z){let Ht=L.get(xt);Ht&&(Ht.hurtUntil=performance.now()+500,Ht.burnUntil=performance.now()+900),Le(xt,`\u2212${bt}`,"#ff9a3a")}Z.includes("me")&&(me("255,120,30"),bn(.16))},450)},claw(Z,bt){let gt=L.get("boss");gt&&(gt.lungeUntil=performance.now()+450),setTimeout(()=>{let xt=L.get(Z);xt&&(xt.hurtUntil=performance.now()+450),Z==="me"&&(me("255,40,60","claw"),bn(.13)),Le(Z,`\u2212${bt}`,"#ff6b81")},200)},float:Le,look(Z,bt,gt){let xt=L.get(Z);!xt||!Number.isFinite(bt)||!Number.isFinite(gt)||(xt.look.yaw=Math.max(-Qt,Math.min(Qt,bt)),xt.look.pitch=Math.max(-xe,Math.min(xe,gt)),xt.look.at=performance.now())},setLite(Z){let bt=n!==Z;n=Z,bt&&Pe&&Dt&&(Qi="",Kt(Dt)),e.setPixelRatio(r()),I.count=Z?900:M,D.setDrawRange(0,Z?90:et),_e()},dispose(){oo.setActive(!1),Me?.disconnect(),removeEventListener("pointermove",Ue),removeEventListener("resize",_e),Be.remove(),Pe&&(Pe.dispose(),Pe=null),e.dispose()}};n&&oo.setLite(!0),location.search.includes("debug3d")&&(globalThis.__arenaDbg={get staff(){return V},get gemState(){return W},scene:o,camera:a,renderer:e}),_e();try{e.compile(o,a)}catch{}return oo}globalThis.KWArena3D=N1;globalThis.KWStaffPreview=hf;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
