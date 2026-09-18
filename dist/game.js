(()=>{var qf=0,Su=1,Yf=2;var Ds=1,Zf=2,kr=3,ds=0,Zt=1,$t=2,Kt=0,Hr=1,fn=2,Mu=3,Eu=4,rc=5;var $n=100,$f=101,Kf=102,Jf=103,jf=104,Ns=200,Qf=201,ep=202,tp=203,Tu=204,wu=205,aa=206,np=207,la=208,ip=209,sp=210,rp=211,op=212,ap=213,lp=214,Al=0,Rl=1,Cl=2,xr=3,Pl=4,Il=5,Ll=6,Dl=7,Au=0,cp=1,hp=2,li=0,ca=1,ha=2,ua=3,Us=4,da=5,fa=6,pa=7;var Ru=300,fs=301,Os=302,oc=303,ac=304,ma=306,In=1e3,Wn=1001,yr=1002,Bt=1003,lc=1004;var Fs=1005;var nn=1006,zr=1007;var Ln=1008;var _n=1009,Cu=1010,Pu=1011,Gr=1012,cc=1013,ci=1014,Dn=1015,Ot=1016,hc=1017,uc=1018,ps=1020,Iu=35902,Lu=35899,Du=1021,Nu=1022,bn=1023,bi=1026,Ai=1027,dc=1028,fc=1029,ms=1030,pc=1031;var mc=1033,ga=33776,xa=33777,ya=33778,va=33779,gc=35840,xc=35841,yc=35842,vc=35843,_c=36196,bc=37492,Sc=37496,Mc=37488,Ec=37489,_a=37490,Tc=37491,wc=37808,Ac=37809,Rc=37810,Cc=37811,Pc=37812,Ic=37813,Lc=37814,Dc=37815,Nc=37816,Uc=37817,Oc=37818,Fc=37819,kc=37820,Hc=37821,zc=36492,Gc=36494,Vc=36495,Bc=36283,Wc=36284,ba=36285,Xc=36286;var Cs=2300,vr=2301,Tl=2302,hu=2303,uu=2400,du=2401,fu=2402;var up=3200;var Sa=0,dp=1,hi="",Gt="srgb",To="srgb-linear",wo="linear",St="srgb";var wl=7680;var fp=519,pp=512,mp=513,gp=514,qc=515,xp=516,yp=517,Yc=518,vp=519,Uu=35044;var Ou="300 es",ri=2e3,_r=2001;function Dm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _p(){let n=Ao("canvas");return n.style.display="block",n}var af={},br=null;function Ro(...n){let e="THREE."+n.shift();br?br("log",e,...n):console.log(e,...n)}function bp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=bp(n);let e="THREE."+n.shift();if(br)br("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=bp(n);let e="THREE."+n.shift();if(br)br("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Rs(...n){let e=n.join(" ");e in af||(af[e]=!0,qe(...n))}function Sp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Mp={[Al]:Rl,[Cl]:Ll,[Pl]:Dl,[xr]:Il,[Rl]:Al,[Ll]:Cl,[Dl]:Pl,[Il]:xr},Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lf=1234567,mr=Math.PI/180,Sr=180/Math.PI;function _i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function Fu(n,e){return(n%e+e)%e}function Um(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Om(n,e,t){return n!==e?(t-n)/(e-n):0}function So(n,e,t){return(1-t)*n+t*e}function Fm(n,e,t,i){return So(n,e,1-Math.exp(-t*i))}function km(n,e=1){return e-Math.abs(Fu(n,e*2)-e)}function Hm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vm(n,e){return n+Math.random()*(e-n)}function Bm(n){return n*(.5-Math.random())}function Wm(n){n!==void 0&&(lf=n);let e=lf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xm(n){return n*mr}function qm(n){return n*Sr}function Ym(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Zm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function $m(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Km(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*h,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ks={DEG2RAD:mr,RAD2DEG:Sr,generateUUID:_i,clamp:ht,euclideanModulo:Fu,mapLinear:Um,inverseLerp:Om,lerp:So,damp:Fm,pingpong:km,smoothstep:Hm,smootherstep:zm,randInt:Gm,randFloat:Vm,randFloatSpread:Bm,seededRandom:Wm,degToRad:Xm,radToDeg:qm,isPowerOfTwo:Ym,ceilPowerOfTwo:Zm,floorPowerOfTwo:$m,setQuaternionFromProperEuler:Km,normalize:At,denormalize:si},Bu=class Bu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bu.prototype.isVector2=!0;var te=Bu,tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),b=Math.sin(y);m=Math.sin(m*y)/b,a=Math.sin(a*y)/b,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+x*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wu=class Wu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wu.prototype.isVector3=!0;var C=Wu,Fh=new C,cf=new tn,Xu=class Xu{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],y=s[1],b=s[4],v=s[7],S=s[2],M=s[5],w=s[8];return r[0]=o*x+a*y+l*S,r[3]=o*g+a*b+l*M,r[6]=o*m+a*v+l*w,r[1]=c*x+h*y+u*S,r[4]=c*g+h*b+u*M,r[7]=c*m+h*v+u*w,r[2]=f*x+d*y+p*S,r[5]=f*g+d*b+p*M,r[8]=f*m+d*v+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kh.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xu.prototype.isMatrix3=!0;var tt=Xu,kh=new tt,hf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uf=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jm(){let n={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[To]:{primaries:e,whitePoint:i,transfer:wo,toXYZ:hf,fromXYZ:uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:St,toXYZ:hf,fromXYZ:uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}var pt=Jm();function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Js,Mr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=Ao("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ao("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jm=0,Gi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hh(s[o].image)):r.push(Hh(s[o]))}else r=Hh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Hh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var Qm=0,zh=new C,vn=class n extends Si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wn,s=Wn,r=nn,o=Ln,a=bn,l=_n,c=n.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=_i(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Ru;vn.DEFAULT_ANISOTROPY=1;var qu=class qu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(d+1)/2,S=(m+1)/2,M=(h+f)/4,w=(u+x)/4,_=(p+g)/4;return b>v&&b>S?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=M/i,r=w/i):v>S?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=_/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=w/r,s=_/r),this.set(i,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qu.prototype.isVector4=!0;var wt=qu,Nl=class extends Si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new vn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends Nl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Co=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ul=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var sc=class sc{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/js.setFromMatrixColumn(e,0).length(),r=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eg,e,tg)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ji.crossVectors(i,Un),ji.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ji.crossVectors(i,Un)),ji.normalize(),Ya.crossVectors(Un,ji),s[0]=ji.x,s[4]=Ya.x,s[8]=Un.x,s[1]=ji.y,s[5]=Ya.y,s[9]=Un.y,s[2]=ji.z,s[6]=Ya.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],b=i[7],v=i[11],S=i[15],M=s[0],w=s[4],_=s[8],T=s[12],A=s[1],P=s[5],L=s[9],U=s[13],D=s[2],N=s[6],z=s[10],B=s[14],G=s[3],F=s[7],Z=s[11],Y=s[15];return r[0]=o*M+a*A+l*D+c*G,r[4]=o*w+a*P+l*N+c*F,r[8]=o*_+a*L+l*z+c*Z,r[12]=o*T+a*U+l*B+c*Y,r[1]=h*M+u*A+f*D+d*G,r[5]=h*w+u*P+f*N+d*F,r[9]=h*_+u*L+f*z+d*Z,r[13]=h*T+u*U+f*B+d*Y,r[2]=p*M+x*A+g*D+m*G,r[6]=p*w+x*P+g*N+m*F,r[10]=p*_+x*L+g*z+m*Z,r[14]=p*T+x*U+g*B+m*Y,r[3]=y*M+b*A+v*D+S*G,r[7]=y*w+b*P+v*N+S*F,r[11]=y*_+b*L+v*z+S*Z,r[15]=y*T+b*U+v*B+S*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15],y=l*d-c*f,b=a*d-c*u,v=a*f-l*u,S=o*d-c*h,M=o*f-l*h,w=o*u-a*h;return t*(x*y-g*b+m*v)-i*(p*y-g*S+m*M)+s*(p*b-x*S+m*w)-r*(p*v-x*M+g*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=t*a-i*o,b=t*l-s*o,v=t*c-r*o,S=i*l-s*a,M=i*c-r*a,w=s*c-r*l,_=h*x-u*p,T=h*g-f*p,A=h*m-d*p,P=u*g-f*x,L=u*m-d*x,U=f*m-d*g,D=y*U-b*L+v*P+S*A-M*T+w*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/D;return e[0]=(a*U-l*L+c*P)*N,e[1]=(s*L-i*U-r*P)*N,e[2]=(x*w-g*M+m*S)*N,e[3]=(f*M-u*w-d*S)*N,e[4]=(l*A-o*U-c*T)*N,e[5]=(t*U-s*A+r*T)*N,e[6]=(g*v-p*w-m*b)*N,e[7]=(h*w-f*v+d*b)*N,e[8]=(o*L-a*A+c*_)*N,e[9]=(i*A-t*L-r*_)*N,e[10]=(p*M-x*v+m*y)*N,e[11]=(u*v-h*M-d*y)*N,e[12]=(a*T-o*P-l*_)*N,e[13]=(t*P-i*T+s*_)*N,e[14]=(x*b-p*S-g*y)*N,e[15]=(h*S-u*b+f*y)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,y=l*c,b=l*h,v=l*u,S=i.x,M=i.y,w=i.z;return s[0]=(1-(x+m))*S,s[1]=(d+v)*S,s[2]=(p-b)*S,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(f+m))*M,s[6]=(g+y)*M,s[7]=0,s[8]=(p+b)*w,s[9]=(g-y)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=js.set(s[0],s[1],s[2]).length(),a=js.set(s[4],s[5],s[6]).length(),l=js.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ti.copy(this);let c=1/o,h=1/a,u=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,t.setFromRotationMatrix(ti),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=ri,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ri)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===_r)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ri,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ri)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===_r)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};sc.prototype.isMatrix4=!0;var Be=sc,js=new C,ti=new Be,eg=new C(0,0,0),tg=new C(1,1,1),ji=new C,Ya=new C,Un=new C,df=new Be,ff=new tn,Xn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ng=0,pf=new C,Qs=new tn,Ui=new Be,Za=new C,ho=new C,ig=new C,sg=new tn,mf=new C(1,0,0),gf=new C(0,1,0),xf=new C(0,0,1),yf={type:"added"},rg={type:"removed"},er={type:"childadded",child:null},Gh={type:"childremoved",child:null},Yt=class n extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new Xn,i=new tn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new tt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(mf,e)}rotateY(e){return this.rotateOnAxis(gf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return pf.copy(e).applyQuaternion(this.quaternion),this.position.add(pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mf,e)}translateY(e){return this.translateOnAxis(gf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Za.copy(e):Za.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ho,Za,this.up):Ui.lookAt(Za,ho,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yf),er.child=e,this.dispatchEvent(er),er.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rg),Gh.child=e,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yf),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new C(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var it=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new it;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Vh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=Fu(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Vh(o,r,e+1/3),this.g=Vh(o,r,e),this.b=Vh(o,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=Ep[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return pt.workingToColorSpace(yn.copy(this),e),Math.round(ht(yn.r*255,0,255))*65536+Math.round(ht(yn.g*255,0,255))*256+Math.round(ht(yn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(yn.copy(this),t);let i=yn.r,s=yn.g,r=yn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Gt){pt.workingToColorSpace(yn.copy(this),e);let t=yn.r,i=yn.g,s=yn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL($a);let i=So(Qi.h,$a.h,t),s=So(Qi.s,$a.s,t),r=So(Qi.l,$a.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new ge;ge.NAMES=Ep;var Io=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qn=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ni=new C,Oi=new C,Bh=new C,Fi=new C,tr=new C,nr=new C,vf=new C,Wh=new C,Xh=new C,qh=new C,Yh=new wt,Zh=new wt,$h=new wt,yi=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ni.subVectors(s,t),Oi.subVectors(i,t),Bh.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Oi),l=ni.dot(Bh),c=Oi.dot(Oi),h=Oi.dot(Bh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Yh.setScalar(0),Zh.setScalar(0),$h.setScalar(0),Yh.fromBufferAttribute(e,t),Zh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Yh,r.x),o.addScaledVector(Zh,r.y),o.addScaledVector($h,r.z),o}static isFrontFacing(e,t,i,s){return ni.subVectors(i,t),Oi.subVectors(e,t),ni.cross(Oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ni.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,i),nr.subVectors(r,i),Wh.subVectors(e,i);let l=tr.dot(Wh),c=nr.dot(Wh);if(l<=0&&c<=0)return t.copy(i);Xh.subVectors(e,s);let h=tr.dot(Xh),u=nr.dot(Xh);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(tr,o);qh.subVectors(e,r);let d=tr.dot(qh),p=nr.dot(qh);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(nr,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return vf.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(vf,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Ja.subVectors(this.max,uo),ir.subVectors(e.a,uo),sr.subVectors(e.b,uo),rr.subVectors(e.c,uo),es.subVectors(sr,ir),ts.subVectors(rr,sr),Es.subVectors(ir,rr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Es.z,Es.y,es.z,0,-es.x,ts.z,0,-ts.x,Es.z,0,-Es.x,-es.y,es.x,0,-ts.y,ts.x,0,-Es.y,Es.x,0];return!Kh(t,ir,sr,rr,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,ir,sr,rr,Ja))?!1:(ja.crossVectors(es,ts),t=[ja.x,ja.y,ja.z],Kh(t,ir,sr,rr,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new C,new C,new C,new C,new C,new C,new C,new C],ii=new C,Ka=new Mi,ir=new C,sr=new C,rr=new C,es=new C,ts=new C,Es=new C,uo=new C,Ja=new C,ja=new C,Ts=new C;function Kh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ts.fromArray(n,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),h=i.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var en=new C,Qa=new te,ag=0,dt=class extends Si{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uu,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Lo=class extends dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Do=class extends dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ze=class extends dt{constructor(e,t,i){super(new Float32Array(e),t,i)}},lg=new Mi,fo=new C,Jh=new C,Ei=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):lg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);let t=fo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Jh)),this.expandByPoint(fo.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cg=0,Bn=new Be,jh=new Yt,or=new C,On=new Mi,po=new Mi,an=new C,ft=class n extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dm(e)?Do:Lo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];po.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(On.min,po.min),On.expandByPoint(an),an.addVectors(On.max,po.max),On.expandByPoint(an)):(On.expandByPoint(po.min),On.expandByPoint(po.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),an.add(or)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new dt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new C,l[_]=new C;let c=new C,h=new C,u=new C,f=new te,d=new te,p=new te,x=new C,g=new C;function m(_,T,A){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,A),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[_].add(x),a[T].add(x),a[A].add(x),l[_].add(g),l[T].add(g),l[A].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){let A=y[_],P=A.start,L=A.count;for(let U=P,D=P+L;U<D;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new C,v=new C,S=new C,M=new C;function w(_){S.fromBufferAttribute(s,_),M.copy(S);let T=a[_];b.copy(T),b.sub(S.multiplyScalar(S.dot(T))).normalize(),v.crossVectors(M,T);let P=v.dot(l[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,P)}for(let _=0,T=y.length;_<T;++_){let A=y[_],P=A.start,L=A.count;for(let U=P,D=P+L;U<D;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new dt(f,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},No=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uu,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},An=new C,Tr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qh=new C,hg=new C,ug=new tt,Fn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Qh.subVectors(i,t).cross(hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Qh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ug.getNormalMatrix(e),s=this.coplanarPoint(Qh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},dg=0,Yn=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Hr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=wu,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wl,this.stencilZFail=wl,this.stencilZPass=wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},oi=class extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,mo=new C,lr=new C,cr=new C,hr=new te,go=new te,Tp=new Be,el=new C,xo=new C,tl=new C,_f=new te,eu=new te,bf=new te,Ti=class extends Yt{constructor(e=new oi){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new No(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Tr(i,3,0,!1)),ar.setAttribute("uv",new Tr(i,2,3,!1))}this.geometry=ar,this.material=e,this.center=new te(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),Tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;nl(el.set(-.5,-.5,0),cr,o,lr,s,r),nl(xo.set(.5,-.5,0),cr,o,lr,s,r),nl(tl.set(.5,.5,0),cr,o,lr,s,r),_f.set(0,0),eu.set(1,0),bf.set(1,1);let a=e.ray.intersectTriangle(el,xo,tl,!1,mo);if(a===null&&(nl(xo.set(-.5,.5,0),cr,o,lr,s,r),eu.set(0,1),a=e.ray.intersectTriangle(el,tl,xo,!1,mo),a===null))return;let l=e.ray.origin.distanceTo(mo);l<e.near||l>e.far||t.push({distance:l,point:mo.clone(),uv:yi.getInterpolation(mo,el,xo,tl,_f,eu,bf,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function nl(n,e,t,i,s,r){hr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(go.x=r*hr.x-s*hr.y,go.y=s*hr.x+r*hr.y):go.copy(hr),n.copy(e),n.x+=go.x,n.y+=go.y,n.applyMatrix4(Tp)}var Hi=new C,tu=new C,il=new C,sl=new C,wr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tu.copy(e).add(t).multiplyScalar(.5),il.copy(t).sub(e).normalize(),sl.copy(this.origin).sub(tu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(il),a=sl.dot(this.direction),l=-sl.dot(il),c=sl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tu).addScaledVector(il,f),d}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,g=t.z-o.z,m=i.x-o.x,y=i.y-o.y,b=i.z-o.z,v=Math.abs(l),S=Math.abs(c),M=Math.abs(h),w,_,T,A,P,L,U,D,N,z,B,G;if(v>=S&&v>=M?(T=l,L=u,N=p,G=m,l>=0?(w=c,_=h,A=f,P=d,U=x,D=g,z=y,B=b):(w=h,_=c,A=d,P=f,U=g,D=x,z=b,B=y)):S>=M?(T=c,L=f,N=x,G=y,c>=0?(w=h,_=l,A=d,P=u,U=g,D=p,z=b,B=m):(w=l,_=h,A=u,P=d,U=p,D=g,z=m,B=b)):(T=h,L=d,N=g,G=b,h>=0?(w=l,_=c,A=u,P=f,U=p,D=x,z=m,B=y):(w=c,_=l,A=f,P=u,U=x,D=p,z=y,B=m)),T===0)return null;let F=w/T,Z=_/T,Y=1/T,ye=A-F*L,de=P-Z*L,nt=U-F*N,Je=D-Z*N,st=z-F*G,K=B-Z*G,ee=st*Je-K*nt,ue=ye*K-de*st,Ue=nt*de-Je*ye;if(s){if(ee<0||ue<0||Ue<0)return null}else if((ee<0||ue<0||Ue<0)&&(ee>0||ue>0||Ue>0))return null;let we=ee+ue+Ue;if(we===0)return null;let Xe=Y*(ee*L+ue*N+Ue*G);return(we>0?Xe<0:Xe>0)?null:this.at(Xe/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sf=new Be,ws=new wr,rl=new Ei,Mf=new C,ol=new C,al=new C,ll=new C,nu=new C,cl=new C,Ef=new C,hl=new C,J=class extends Yt{constructor(e=new ft,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(nu.fromBufferAttribute(u,e),o?cl.addScaledVector(nu,h):cl.addScaledVector(nu.sub(t),h))}t.add(cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(rl.containsPoint(ws.origin)===!1&&(ws.intersectSphere(rl,Mf)===null||ws.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(Sf.copy(r).invert(),ws.copy(e.ray).applyMatrix4(Sf),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),b=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,S=b;v<S;v+=3){let M=a.getX(v),w=a.getX(v+1),_=a.getX(v+2);s=ul(this,m,e,i,c,h,u,M,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),b=a.getX(g+1),v=a.getX(g+2);s=ul(this,o,e,i,c,h,u,y,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,S=b;v<S;v+=3){let M=v,w=v+1,_=v+2;s=ul(this,m,e,i,c,h,u,M,w,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=g,b=g+1,v=g+2;s=ul(this,o,e,i,c,h,u,y,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function fg(n,e,t,i,s,r,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ds,a),l===null)return null;hl.copy(a),hl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(hl);return c<t.near||c>t.far?null:{distance:c,point:hl.clone(),object:n}}function ul(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ol),n.getVertexPosition(l,al),n.getVertexPosition(c,ll);let h=fg(n,e,t,i,ol,al,ll,Ef);if(h){let u=new C;yi.getBarycoord(Ef,ol,al,ll,u),s&&(h.uv=yi.getInterpolatedAttribute(s,a,l,c,u,new te)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,u,new te)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};yi.getNormal(ol,al,ll,f.normal),h.face=f,h.barycoord=u}return h}var Vi=class extends vn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Bt,h=Bt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ar=class extends dt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new Be,Tf=new Be,dl=[],wf=new Mi,pg=new Be,yo=new J,vo=new Ei,Uo=class extends J{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),wf.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),vo.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(i),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),Tf.multiplyMatrices(i,ur),yo.matrixWorld=Tf,yo.raycast(e,dl);for(let o=0,a=dl.length;o<a;o++){let l=dl[o];l.instanceId=r,l.object=this,t.push(l)}dl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vi(new Float32Array(s*this.count),s,this.count,dc,Dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Ei,mg=new te(.5,.5),fl=new C,Rr=class{constructor(e=new Fn,t=new Fn,i=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],b=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,m-p,S-y).normalize(),s[1].setComponents(c+o,d+h,m+p,S+y).normalize(),s[2].setComponents(c+a,d+u,m+x,S+b).normalize(),s[3].setComponents(c-a,d-u,m-x,S-b).normalize(),i)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,d-f,m-g,S-v).normalize();else if(s[4].setComponents(c-l,d-f,m-g,S-v).normalize(),t===ri)s[5].setComponents(c+l,d+f,m+g,S+v).normalize();else if(t===_r)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=mg.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(fl.x=s.normal.x>0?e.max.x:e.min.x,fl.y=s.normal.y>0?e.max.y:e.min.y,fl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cr=class extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ol=new C,Fl=new C,Af=new Be,_o=new wr,pl=new Ei,iu=new C,Rf=new C,kl=class extends Yt{constructor(e=new ft,t=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ol.fromBufferAttribute(t,s-1),Fl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ol.distanceTo(Fl);e.setAttribute("lineDistance",new Ze(i,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),pl.radius+=r,e.ray.intersectsSphere(pl)===!1)return;Af.copy(s).invert(),_o.copy(e.ray).applyMatrix4(Af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=h.getX(x),y=h.getX(x+1),b=ml(this,e,_o,l,m,y,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(d),m=ml(this,e,_o,l,x,g,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=ml(this,e,_o,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=ml(this,e,_o,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ml(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Ol.fromBufferAttribute(a,s),Fl.fromBufferAttribute(a,r),t.distanceSqToSegment(Ol,Fl,iu,Rf)>i)return;iu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(iu);if(!(c<e.near||c>e.far))return{distance:c,point:Rf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Cf=new C,Pf=new C,Oo=class extends kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Cf.fromBufferAttribute(t,s),Pf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cf.distanceTo(Pf);e.setAttribute("lineDistance",new Ze(i,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Pr=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},If=new Be,pu=new wr,gl=new Ei,xl=new C,Ps=class extends Yt{constructor(e=new ft,t=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(s),gl.radius+=r,e.ray.intersectsSphere(gl)===!1)return;If.copy(s).invert(),pu.copy(e.ray).applyMatrix4(If);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);xl.fromBufferAttribute(u,g),Lf(xl,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)xl.fromBufferAttribute(u,p),Lf(xl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lf(n,e,t,i,s,r,o){let a=pu.distanceSqToPoint(n);if(a<t){let l=new C;pu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var is=class extends vn{constructor(e,t,i,s,r,o,a,l,c,h,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var Fo=class extends vn{constructor(e=[],t=fs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bi=class extends vn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zn=class extends vn{constructor(e,t,i=ci,s,r,o,a=Bt,l=Bt,c,h=bi,u=1){if(h!==bi&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Hl=class extends Zn{constructor(e,t=ci,i=fs,s,r,o=Bt,a=Bt,l,c=bi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ko=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ye=class n extends ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function p(x,g,m,y,b,v,S,M,w,_,T){let A=v/w,P=S/_,L=v/2,U=S/2,D=M/2,N=w+1,z=_+1,B=0,G=0,F=new C;for(let Z=0;Z<z;Z++){let Y=Z*P-U;for(let ye=0;ye<N;ye++){let de=ye*A-L;F[x]=de*y,F[g]=Y*b,F[m]=D,c.push(F.x,F.y,F.z),F[x]=0,F[g]=0,F[m]=M>0?1:-1,h.push(F.x,F.y,F.z),u.push(ye/w),u.push(1-Z/_),B+=1}}for(let Z=0;Z<_;Z++)for(let Y=0;Y<w;Y++){let ye=f+Y+N*Z,de=f+Y+N*(Z+1),nt=f+(Y+1)+N*(Z+1),Je=f+(Y+1)+N*Z;l.push(ye,de,Je),l.push(de,nt,Je),G+=6}a.addGroup(d,G,T),d+=G,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ss=class n extends ft{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=i*2+r,x=s+1,g=new C,m=new C;for(let y=0;y<=p;y++){let b=0,v=0,S=0,M=0;if(y<=i){let T=y/i,A=T*Math.PI/2;v=-h-e*Math.cos(A),S=e*Math.sin(A),M=-e*Math.cos(A),b=T*u}else if(y<=i+r){let T=(y-i)/r;v=-h+T*t,S=e,M=0,b=u+T*f}else{let T=(y-i-r)/i,A=T*Math.PI/2;v=h+e*Math.sin(A),S=e*Math.cos(A),M=e*Math.sin(A),b=u+f+T*u}let w=Math.max(0,Math.min(1,b/d)),_=0;y===0?_=.5/s:y===p&&(_=-.5/s);for(let T=0;T<=s;T++){let A=T/s,P=A*Math.PI*2,L=Math.sin(P),U=Math.cos(P);m.x=-S*U,m.y=v,m.z=S*L,a.push(m.x,m.y,m.z),g.set(-S*U,M,S*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(A+_,w)}if(y>0){let T=(y-1)*x;for(let A=0;A<s;A++){let P=T+A,L=T+A+1,U=y*x+A,D=y*x+A+1;o.push(P,L,U),o.push(L,D,U)}}}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ir=class n extends ft{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},at=class n extends ft{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=i/2,m=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(d,2));function y(){let v=new C,S=new C,M=0,w=(t-e)/i;for(let _=0;_<=r;_++){let T=[],A=_/r,P=A*(t-e)+e;for(let L=0;L<=s;L++){let U=L/s,D=U*l+a,N=Math.sin(D),z=Math.cos(D);S.x=P*N,S.y=-A*i+g,S.z=P*z,u.push(S.x,S.y,S.z),v.set(N,w,z).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-A),T.push(p++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let A=x[T][_],P=x[T+1][_],L=x[T+1][_+1],U=x[T][_+1];(e>0||T!==0)&&(h.push(A,P,U),M+=3),(t>0||T!==r-1)&&(h.push(P,L,U),M+=3)}c.addGroup(m,M,0),m+=M}function b(v){let S=p,M=new te,w=new C,_=0,T=v===!0?e:t,A=v===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),p++;let P=p;for(let L=0;L<=s;L++){let D=L/s*l+a,N=Math.cos(D),z=Math.sin(D);w.x=T*z,w.y=g*A,w.z=T*N,u.push(w.x,w.y,w.z),f.push(0,A,0),M.x=N*.5+.5,M.y=z*.5*A+.5,d.push(M.x,M.y),p++}for(let L=0;L<s;L++){let U=S+L,D=P+L;v===!0?h.push(D,D+1,U):h.push(D+1,D,U),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ho=class n extends at{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var yl=new C,vl=new C,su=new C,_l=new yi,zo=class extends ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(mr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=_l;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),_l.getNormal(su),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let b=(y+1)%3,v=u[y],S=u[b],M=_l[h[y]],w=_l[h[b]],_=`${v}_${S}`,T=`${S}_${v}`;T in f&&f[T]?(su.dot(f[T].normal)<=r&&(d.push(M.x,M.y,M.z),d.push(w.x,w.y,w.z)),f[T]=null):_ in f||(f[_]={index0:c[y],index1:c[b],normal:su.clone()})}}for(let p in f)if(f[p]){let{index0:x,index1:g}=f[p];yl.fromBufferAttribute(a,x),vl.fromBufferAttribute(a,g),d.push(yl.x,yl.y,yl.z),d.push(vl.x,vl.y,vl.z)}this.setAttribute("position",new Ze(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new te:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],o=[],a=new C,l=new Be;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ht(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ht(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Lr=class extends kn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zl=class extends Lr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ku(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Df=new C,Nf=new C,ru=new ku,ou=new ku,au=new ku,rs=class extends kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Nf.subVectors(s[0],s[1]).add(s[0]),c=Nf);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Df.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Df),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),ru.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),ou.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),au.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(ru.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ou.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),au.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ru.calc(l),ou.calc(l),au.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function gg(n,e){let t=1-n;return t*t*e}function xg(n,e){return 2*(1-n)*n*e}function yg(n,e){return n*n*e}function Mo(n,e,t,i){return gg(n,e)+xg(n,t)+yg(n,i)}function vg(n,e){let t=1-n;return t*t*t*e}function _g(n,e){let t=1-n;return 3*t*t*n*e}function bg(n,e){return 3*(1-n)*n*n*e}function Sg(n,e){return n*n*n*e}function Eo(n,e,t,i,s){return vg(n,e)+_g(n,t)+bg(n,i)+Sg(n,s)}var Go=class extends kn{constructor(e=new te,t=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Eo(e,s.x,r.x,o.x,a.x),Eo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gl=class extends kn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Eo(e,s.x,r.x,o.x,a.x),Eo(e,s.y,r.y,o.y,a.y),Eo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vo=class extends kn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vl=class extends kn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends kn{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends kn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y),Mo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Uf(a,l.x,c.x,h.x,u.x),Uf(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:zl,CatmullRomCurve3:rs,CubicBezierCurve:Go,CubicBezierCurve3:Gl,EllipseCurve:Lr,LineCurve:Vo,LineCurve3:Vl,QuadraticBezierCurve:Bo,QuadraticBezierCurve3:Wo,SplineCurve:Xo}),Wl=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Bl[s.type]().fromJSON(s))}return this}},Is=class extends Wl{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Vo(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Bo(this.currentPoint.clone(),new te(e,t),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Go(this.currentPoint.clone(),new te(e,t),new te(i,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Lr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ai=class extends Is{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Is().fromJSON(s))}return this}};function Mg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=wp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Rg(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return qo(r,o,t,a,l,c,0),o}function wp(n,e,t,i,s){let r;if(s===Hg(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Of(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Of(o/i|0,n[o],n[o+1],r);return r&&Dr(r,r.next)&&(Zo(r),r=r.next),r}function Ls(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Dr(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Zo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function qo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Dg(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Tg(n,i,s,r):Eg(n)){e.push(l.i,n.i,c.i),Zo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=wg(Ls(n),e),qo(n,e,t,i,s,r,2)):o===2&&Ag(n,e,t,i,s,r):qo(Ls(n),e,t,i,s,r,1);break}}}function Eg(n){let e=n.prev,t=n,i=n.next;if(Vt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&bo(s,a,r,l,o,c,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Tg(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),m=mu(d,p,e,t,i),y=mu(x,g,e,t,i),b=n.prevZ,v=n.nextZ;for(;b&&b.z>=m&&v&&v.z<=y;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&bo(a,h,l,u,c,f,b.x,b.y)&&Vt(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&bo(a,h,l,u,c,f,v.x,v.y)&&Vt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=m;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&bo(a,h,l,u,c,f,b.x,b.y)&&Vt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&bo(a,h,l,u,c,f,v.x,v.y)&&Vt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wg(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Dr(i,s)&&Rp(i,t,t.next,s)&&Yo(i,s)&&Yo(s,i)&&(e.push(i.i,t.i,s.i),Zo(t),Zo(t.next),t=n=s),t=t.next}while(t!==n);return Ls(t)}function Ag(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Og(o,a)){let l=Cp(o,a);o=Ls(o,o.next),l=Ls(l,l.next),qo(o,e,t,i,s,r,0),qo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Rg(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=wp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Ug(c))}s.sort(Cg);for(let r=0;r<s.length;r++)t=Pg(s[r],t);return t}function Cg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Pg(n,e){let t=Ig(n,e);if(!t)return e;let i=Cp(t,n);return Ls(i,i.next),Ls(t,t.next)}function Ig(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Dr(n,t))return t;do{if(Dr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Ap(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Yo(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Lg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Lg(n,e){return Vt(n.prev,n,e.prev)<0&&Vt(e.next,n,n.next)<0}function Dg(n,e,t,i){let s=n;do s.z===0&&(s.z=mu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ng(s)}function Ng(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function mu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ug(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ap(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function bo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Ap(n,e,t,i,s,r,o,a)}function Og(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Fg(n,e)&&(Yo(n,e)&&Yo(e,n)&&kg(n,e)&&(Vt(n.prev,n,e.prev)||Vt(n,e.prev,e))||Dr(n,e)&&Vt(n.prev,n,n.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Dr(n,e){return n.x===e.x&&n.y===e.y}function Rp(n,e,t,i){let s=Sl(Vt(n,e,t)),r=Sl(Vt(n,e,i)),o=Sl(Vt(t,i,n)),a=Sl(Vt(t,i,e));return!!(s!==r&&o!==a||s===0&&bl(n,t,e)||r===0&&bl(n,i,e)||o===0&&bl(t,n,i)||a===0&&bl(t,e,i))}function bl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Sl(n){return n>0?1:n<0?-1:0}function Fg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Rp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Yo(n,e){return Vt(n.prev,n,n.next)<0?Vt(n,e,n.next)>=0&&Vt(n,n.prev,e)>=0:Vt(n,e,n.prev)<0||Vt(n,n.next,e)<0}function kg(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Cp(n,e){let t=gu(n.i,n.x,n.y),i=gu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Of(n,e,t,i){let s=gu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Zo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function gu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hg(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var xu=class{static triangulate(e,t,i=2){return Mg(e,t,i)}},vi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ff(e),kf(i,e);let o=e.length;t.forEach(Ff);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,kf(i,t[l]);let a=xu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ff(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function kf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var wi=class n extends ft{constructor(e=new ai([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:zg,b,v=!1,S,M,w,_;if(m){b=m.getSpacedPoints(h),v=!0,f=!1;let se=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,se),M=new C,w=new C,_=new C}f||(g=0,d=0,p=0,x=0);let T=a.extractPoints(c),A=T.shape,P=T.holes;if(!vi.isClockWise(A)){A=A.reverse();for(let se=0,ae=P.length;se<ae;se++){let le=P[se];vi.isClockWise(le)&&(P[se]=le.reverse())}}function U(se){let le=10000000000000001e-36,ce=se[0];for(let fe=1;fe<=se.length;fe++){let We=fe%se.length,ze=se[We],$e=ze.x-ce.x,Qe=ze.y-ce.y,O=$e*$e+Qe*Qe,yt=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(ce.x),Math.abs(ce.y)),ot=le*yt*yt;if(O<=ot){se.splice(We,1),fe--;continue}ce=ze}}U(A),P.forEach(U);let D=P.length,N=A;for(let se=0;se<D;se++){let ae=P[se];A=A.concat(ae)}function z(se,ae,le){return ae||je("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ae,le)}let B=A.length;function G(se,ae,le){let ce,fe,We,ze=se.x-ae.x,$e=se.y-ae.y,Qe=le.x-se.x,O=le.y-se.y,yt=ze*ze+$e*$e,ot=ze*O-$e*Qe;if(Math.abs(ot)>Number.EPSILON){let I=Math.sqrt(yt),E=Math.sqrt(Qe*Qe+O*O),V=ae.x-$e/I,W=ae.y+ze/I,j=le.x-O/E,he=le.y+Qe/E,pe=((j-V)*O-(he-W)*Qe)/(ze*O-$e*Qe);ce=V+ze*pe-se.x,fe=W+$e*pe-se.y;let Q=ce*ce+fe*fe;if(Q<=2)return new te(ce,fe);We=Math.sqrt(Q/2)}else{let I=!1;ze>Number.EPSILON?Qe>Number.EPSILON&&(I=!0):ze<-Number.EPSILON?Qe<-Number.EPSILON&&(I=!0):Math.sign($e)===Math.sign(O)&&(I=!0),I?(ce=-$e,fe=ze,We=Math.sqrt(yt)):(ce=ze,fe=$e,We=Math.sqrt(yt/2))}return new te(ce/We,fe/We)}let F=[];for(let se=0,ae=N.length,le=ae-1,ce=se+1;se<ae;se++,le++,ce++)le===ae&&(le=0),ce===ae&&(ce=0),F[se]=G(N[se],N[le],N[ce]);let Z=[],Y,ye=F.concat();for(let se=0,ae=D;se<ae;se++){let le=P[se];Y=[];for(let ce=0,fe=le.length,We=fe-1,ze=ce+1;ce<fe;ce++,We++,ze++)We===fe&&(We=0),ze===fe&&(ze=0),Y[ce]=G(le[ce],le[We],le[ze]);Z.push(Y),ye=ye.concat(Y)}let de;if(g===0)de=vi.triangulateShape(N,P);else{let se=[],ae=[];for(let le=0;le<g;le++){let ce=le/g,fe=d*Math.cos(ce*Math.PI/2),We=p*Math.sin(ce*Math.PI/2)+x;for(let ze=0,$e=N.length;ze<$e;ze++){let Qe=z(N[ze],F[ze],We);ue(Qe.x,Qe.y,-fe),ce===0&&se.push(Qe)}for(let ze=0,$e=D;ze<$e;ze++){let Qe=P[ze];Y=Z[ze];let O=[];for(let yt=0,ot=Qe.length;yt<ot;yt++){let I=z(Qe[yt],Y[yt],We);ue(I.x,I.y,-fe),ce===0&&O.push(I)}ce===0&&ae.push(O)}}de=vi.triangulateShape(se,ae)}let nt=de.length,Je=p+x;for(let se=0;se<B;se++){let ae=f?z(A[se],ye[se],Je):A[se];v?(w.copy(S.normals[0]).multiplyScalar(ae.x),M.copy(S.binormals[0]).multiplyScalar(ae.y),_.copy(b[0]).add(w).add(M),ue(_.x,_.y,_.z)):ue(ae.x,ae.y,0)}for(let se=1;se<=h;se++)for(let ae=0;ae<B;ae++){let le=f?z(A[ae],ye[ae],Je):A[ae];v?(w.copy(S.normals[se]).multiplyScalar(le.x),M.copy(S.binormals[se]).multiplyScalar(le.y),_.copy(b[se]).add(w).add(M),ue(_.x,_.y,_.z)):ue(le.x,le.y,u/h*se)}for(let se=g-1;se>=0;se--){let ae=se/g,le=d*Math.cos(ae*Math.PI/2),ce=p*Math.sin(ae*Math.PI/2)+x;for(let fe=0,We=N.length;fe<We;fe++){let ze=z(N[fe],F[fe],ce);ue(ze.x,ze.y,u+le)}for(let fe=0,We=P.length;fe<We;fe++){let ze=P[fe];Y=Z[fe];for(let $e=0,Qe=ze.length;$e<Qe;$e++){let O=z(ze[$e],Y[$e],ce);v?ue(O.x,O.y+b[h-1].y,b[h-1].x+le):ue(O.x,O.y,u+le)}}}st(),K();function st(){let se=s.length/3;if(f){let ae=0,le=B*ae;for(let ce=0;ce<nt;ce++){let fe=de[ce];Ue(fe[2]+le,fe[1]+le,fe[0]+le)}ae=h+g*2,le=B*ae;for(let ce=0;ce<nt;ce++){let fe=de[ce];Ue(fe[0]+le,fe[1]+le,fe[2]+le)}}else{for(let ae=0;ae<nt;ae++){let le=de[ae];Ue(le[2],le[1],le[0])}for(let ae=0;ae<nt;ae++){let le=de[ae];Ue(le[0]+B*h,le[1]+B*h,le[2]+B*h)}}i.addGroup(se,s.length/3-se,0)}function K(){let se=s.length/3,ae=0;ee(N,ae),ae+=N.length;for(let le=0,ce=P.length;le<ce;le++){let fe=P[le];ee(fe,ae),ae+=fe.length}i.addGroup(se,s.length/3-se,1)}function ee(se,ae){let le=se.length;for(;--le>=0;){let ce=le,fe=le-1;fe<0&&(fe=se.length-1);for(let We=0,ze=h+g*2;We<ze;We++){let $e=B*We,Qe=B*(We+1),O=ae+ce+$e,yt=ae+fe+$e,ot=ae+fe+Qe,I=ae+ce+Qe;we(O,yt,ot,I)}}}function ue(se,ae,le){l.push(se),l.push(ae),l.push(le)}function Ue(se,ae,le){Xe(se),Xe(ae),Xe(le);let ce=s.length/3,fe=y.generateTopUV(i,s,ce-3,ce-2,ce-1);lt(fe[0]),lt(fe[1]),lt(fe[2])}function we(se,ae,le,ce){Xe(se),Xe(ae),Xe(ce),Xe(ae),Xe(le),Xe(ce);let fe=s.length/3,We=y.generateSideWallUV(i,s,fe-6,fe-3,fe-2,fe-1);lt(We[0]),lt(We[1]),lt(We[3]),lt(We[1]),lt(We[2]),lt(We[3])}function Xe(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function lt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Gg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bl[s.type]().fromJSON(s)),new n(i,e.options)}},zg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new te(r,o),new te(a,l),new te(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new te(o,1-l),new te(c,1-u),new te(f,1-p),new te(x,1-m)]:[new te(a,1-l),new te(h,1-u),new te(d,1-p),new te(g,1-m)]}};function Gg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var $o=class n extends ft{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=ht(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new C,f=new te,d=new C,p=new C,x=new C,g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let y=0;y<=t;y++){let b=i+y*h*s,v=Math.sin(b),S=Math.cos(b);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*v,u.y=e[M].y,u.z=e[M].x*S,o.push(u.x,u.y,u.z),f.x=y/t,f.y=M/(e.length-1),a.push(f.x,f.y);let w=l[3*M+0]*v,_=l[3*M+1],T=l[3*M+0]*S;c.push(w,_,T)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let v=b+y*e.length,S=v,M=v+e.length,w=v+e.length+1,_=v+1;r.push(S,M,_),r.push(w,_,M)}this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("uv",new Ze(a,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var dn=class n extends ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*f-o;for(let b=0;b<c;b++){let v=b*u-r;p.push(v,-y,0),x.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let b=y+c*m,v=y+c*(m+1),S=y+1+c*(m+1),M=y+1+c*m;d.push(b,v,M),d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Rn=class n extends ft{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new C,p=new te;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let y=m+g,b=y,v=y+i+1,S=y+i+2,M=y+1;a.push(b,v,M),a.push(v,S,M)}}this.setIndex(a),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},os=class n extends ft{constructor(e=new ai([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;vi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let y=p[g];vi.isClockWise(y)===!0&&(p[g]=y.reverse())}let x=vi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let y=p[g];d=d.concat(y)}for(let g=0,m=d.length;g<m;g++){let y=d[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=x.length;g<m;g++){let y=x[g],b=y[0]+u,v=y[1]+u,S=y[2]+u;i.push(b,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Vg(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Vg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var vt=class n extends ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],b=m/i,v=o+b*a,S=e*Math.cos(v),M=Math.sqrt(e*e-S*S),w=0;m===0&&o===0?w=.5/t:m===i&&l===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){let T=_/t,A=s+T*r;u.x=-M*Math.cos(A),u.y=S,u.z=M*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+w,1-b),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<t;y++){let b=h[m][y+1],v=h[m][y],S=h[m+1][y],M=h[m+1][y+1];(m!==0||o>0)&&d.push(b,v,M),(m!==i-1||l<Math.PI)&&d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xt=class n extends ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new C,d=new C,p=new C;for(let x=0;x<=i;x++){let g=o+x/i*a;for(let m=0;m<=s;m++){let y=m/s*r;d.x=(e+t*Math.cos(g))*Math.cos(y),d.y=(e+t*Math.cos(g))*Math.sin(y),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,y=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,v=(s+1)*x+g;l.push(m,y,v),l.push(y,b,v)}this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ko=class n extends ft{constructor(e=new Wo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new te,h=new C,u=[],f=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(d,2));function x(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),y(),m()}function g(b){h=e.getPointAt(b/t,h);let v=o.normals[b],S=o.binormals[b];for(let M=0;M<=s;M++){let w=M/s*Math.PI*2,_=Math.sin(w),T=-Math.cos(w);l.x=T*v.x+_*S.x,l.y=T*v.y+_*S.y,l.z=T*v.z+_*S.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){let S=(s+1)*(b-1)+(v-1),M=(s+1)*b+(v-1),w=(s+1)*b+v,_=(s+1)*(b-1)+v;p.push(S,M,_),p.push(M,w,_)}}function y(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)c.x=b/t,c.y=v/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Bl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Nr=class extends ft{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new C,r=new C;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,d=u.count;for(let p=f,x=f+d;p<x;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),y=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),Hf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Hf(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Hf(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}function Hs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(zf(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(zf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Sn(n){let e={};for(let t=0;t<n.length;t++){let i=Hs(n[t]);for(let s in i)e[s]=i[s]}return e}function zf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Jt={clone:Hs,merge:Sn},Wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xt=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wg,this.fragmentShader=Xg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Be().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ur=class extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},as=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jo=class extends as{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jo=class extends Yn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Xl=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function dr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ls=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yl=class extends ls{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uu,endingEnd:uu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case du:r=e,a=2*t-i;break;case fu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case du:o=e,l=2*i-t;break;case fu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,b=(-1-d)*g+(1.5+d)*x+.5*p,v=d*g-d*x;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+y*o[c+S]+b*o[l+S]+v*o[u+S];return r}},Zl=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},$l=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kl=class extends ls{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),x=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=d*f+p*2,y=u[m],b=u[m+1],v=e*f+p*2,S=h[v],M=h[v+1],w=Yg(i,t,y,S,s);r[p]=Pp(w,x,b,M,g)}return r}};function Pp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function qg(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Yg(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Pp(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=qg(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dr(t,this.TimeBufferType),this.values=dr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:dr(e.times,Array),values:dr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),lu(e.settings)&&(i.settings={inTangents:dr(e.settings.inTangents,Array),outTangents:dr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Kl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Tl:t=this.InterpolantFactoryMethodSmooth;break;case hu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Tl;case this.InterpolantFactoryMethodBezier:return hu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;lu(this.settings)&&(Gf(this.settings.inTangents,e),Gf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Nm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,lu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=vr;var cs=class extends Hn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Cs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Jl.prototype.ValueTypeName="color";var jl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};jl.prototype.ValueTypeName="number";var Ql=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Qo=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}};Qo.prototype.ValueTypeName="quaternion";Qo.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Hn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Cs;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};ec.prototype.ValueTypeName="vector";var tc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ip=new tc,nc=class{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};nc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ea=class extends Or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},cu=new Be,Vf=new C,Bf=new C,ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vf),Bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(cu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===_r||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ml=new C,El=new tn,xi=new C,na=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ml,El,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,El,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ml,El,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,El,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new C,Wf=new te,Xf=new te,un=class extends na{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Wf,Xf),t.subVectors(Xf,Wf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var yu=class extends ta{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},ia=class extends Or{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},us=class extends na{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vu=class extends ta{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new vu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var fr=-90,pr=1,Fr=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(fr,pr,e,t);s.layers=this.layers,this.add(s);let r=new un(fr,pr,e,t);r.layers=this.layers,this.add(r);let o=new un(fr,pr,e,t);o.layers=this.layers,this.add(o);let a=new un(fr,pr,e,t);a.layers=this.layers,this.add(a);let l=new un(fr,pr,e,t);l.layers=this.layers,this.add(l);let c=new un(fr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ic=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ra=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Zg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Zg(){this._document.hidden===!1&&this.reset()}var zu="\\[\\]\\.:\\/",$g=new RegExp("["+zu+"]","g"),Gu="[^"+zu+"]",Kg="[^"+zu.replace("\\.","")+"]",Jg=/((?:WC+[\/:])*)/.source.replace("WC",Gu),jg=/(WCOD+)?/.source.replace("WCOD",Kg),Qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gu),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gu),tx=new RegExp("^"+Jg+jg+Qg+ex+"$"),nx=["material","materials","bones","map"],_u=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($g,"")}static parseTrackName(e){let t=tx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);nx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=_u;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y2=new Float32Array(1);var oa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Yu=class Yu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Yu.prototype.isMatrix2=!0;var bu=Yu;function Vu(n,e,t,i){let s=ix(i);switch(t){case Du:return n*e;case dc:return n*e/s.components*s.byteLength;case fc:return n*e/s.components*s.byteLength;case ms:return n*e*2/s.components*s.byteLength;case pc:return n*e*2/s.components*s.byteLength;case Nu:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case mc:return n*e*4/s.components*s.byteLength;case ga:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ya:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xc:case vc:return Math.max(n,16)*Math.max(e,8)/4;case gc:case yc:return Math.max(n,8)*Math.max(e,8)/2;case _c:case bc:case Mc:case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sc:case _a:case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zc:case Gc:case Vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bc:case Wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ba:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ix(n){switch(n){case _n:case Cu:return{byteLength:1,components:1};case Gr:case Pu:case Ot:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case ci:case cc:case Dn:return{byteLength:4,components:1};case Iu:case Lu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qp(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ax(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
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
#endif`,hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bx=`#ifdef USE_IRIDESCENCE
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
#endif`,Sx=`#ifdef USE_BUMPMAP
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ix=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
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
}`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,ey=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ry=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,oy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ay=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yy=`#if defined( USE_POINTS_UV )
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
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
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
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
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
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
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
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t1=`#ifndef saturate
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c1=`uniform sampler2D t2D;
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
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
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
}`,x1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`uniform float scale;
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
}`,S1=`#include <common>
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,w1=`#define MATCAP
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
}`,A1=`#define MATCAP
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
}`,R1=`#define NORMAL
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,N1=`#define TOON
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
}`,O1=`uniform float size;
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
}`,k1=`#include <common>
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
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,z1=`uniform float rotation;
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
}`,G1=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:lx,alphahash_pars_fragment:cx,alphamap_fragment:hx,alphamap_pars_fragment:ux,alphatest_fragment:dx,alphatest_pars_fragment:fx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:xx,begin_vertex:yx,beginnormal_vertex:vx,bsdfs:_x,iridescence_fragment:bx,bumpmap_pars_fragment:Sx,clipping_planes_fragment:Mx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:wx,color_fragment:Ax,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:Px,common:Ix,cube_uv_reflection_fragment:Lx,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Nx,displacementmap_vertex:Ux,emissivemap_fragment:Ox,emissivemap_pars_fragment:Fx,colorspace_fragment:kx,colorspace_pars_fragment:Hx,envmap_fragment:zx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Vx,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:ey,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:qx,fog_fragment:Yx,fog_pars_fragment:Zx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:Kx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:jx,lights_pars_begin:Qx,lights_toon_fragment:ty,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:sy,lights_physical_fragment:ry,lights_physical_pars_fragment:oy,lights_fragment_begin:ay,lights_fragment_maps:ly,lights_fragment_end:cy,lightprobes_pars_fragment:hy,logdepthbuf_fragment:uy,logdepthbuf_pars_fragment:dy,logdepthbuf_pars_vertex:fy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:gy,map_particle_fragment:xy,map_particle_pars_fragment:yy,metalnessmap_fragment:vy,metalnessmap_pars_fragment:_y,morphinstance_vertex:by,morphcolor_vertex:Sy,morphnormal_vertex:My,morphtarget_pars_vertex:Ey,morphtarget_vertex:Ty,normal_fragment_begin:wy,normal_fragment_maps:Ay,normal_pars_fragment:Ry,normal_pars_vertex:Cy,normal_vertex:Py,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Dy,clearcoat_pars_fragment:Ny,iridescence_pars_fragment:Uy,opaque_fragment:Oy,packing:Fy,premultiplied_alpha_fragment:ky,project_vertex:Hy,dithering_fragment:zy,dithering_pars_fragment:Gy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:Zy,skinning_pars_vertex:$y,skinning_vertex:Ky,skinnormal_vertex:Jy,specularmap_fragment:jy,specularmap_pars_fragment:Qy,tonemapping_fragment:e1,tonemapping_pars_fragment:t1,transmission_fragment:n1,transmission_pars_fragment:i1,uv_pars_fragment:s1,uv_pars_vertex:r1,uv_vertex:o1,worldpos_vertex:a1,background_vert:l1,background_frag:c1,backgroundCube_vert:h1,backgroundCube_frag:u1,cube_vert:d1,cube_frag:f1,depth_vert:p1,depth_frag:m1,distance_vert:g1,distance_frag:x1,equirect_vert:y1,equirect_frag:v1,linedashed_vert:_1,linedashed_frag:b1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:T1,meshmatcap_vert:w1,meshmatcap_frag:A1,meshnormal_vert:R1,meshnormal_frag:C1,meshphong_vert:P1,meshphong_frag:I1,meshphysical_vert:L1,meshphysical_frag:D1,meshtoon_vert:N1,meshtoon_frag:U1,points_vert:O1,points_frag:F1,shadow_vert:k1,shadow_frag:H1,sprite_vert:z1,sprite_frag:G1},Me={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Ci={basic:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Sn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Sn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ge(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Sn([Me.points,Me.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Sn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Sn([Me.common,Me.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Sn([Me.sprite,Me.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Sn([Me.common,Me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Sn([Me.lights,Me.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ci.physical={uniforms:Sn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Zc={r:0,b:0,g:0},V1=new Be,e0=new tt;e0.set(-1,0,0,0,1,0,0,0,1);function B1(n,e,t,i,s,r){let o=new ge(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=e.get(b,v)}return b}function p(y){let b=!1,v=d(y);v===null?g(o,a):v&&v.isColor&&(g(v,1),b=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,b){let v=d(b);v&&(v.isCubeTexture||v.mapping===ma)?(c===void 0&&(c=new J(new Ye(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Hs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(V1.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(e0),c.material.toneMapped=pt.getTransfer(v.colorSpace)!==St,(h!==v||u!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new J(new dn(2,2),new xt({name:"BackgroundMaterial",uniforms:Hs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=pt.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,b){y.getRGB(Zc,Hu(n)),t.buffers.color.setClear(Zc.r,Zc.g,Zc.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:p,addToRenderList:x,dispose:m}}function W1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(P,L,U,D,N){let z=!1,B=u(P,D,U,L);r!==B&&(r=B,c(r.object)),z=d(P,D,U,N),z&&p(P,D,U,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(P,L,U,D),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,L,U,D){let N=D.wireframe===!0,z=i[L.id];z===void 0&&(z={},i[L.id]=z);let B=P.isInstancedMesh===!0?P.id:0,G=z[B];G===void 0&&(G={},z[B]=G);let F=G[U.id];F===void 0&&(F={},G[U.id]=F);let Z=F[N];return Z===void 0&&(Z=f(l()),F[N]=Z),Z}function f(P){let L=[],U=[],D=[];for(let N=0;N<t;N++)L[N]=0,U[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,L,U,D){let N=r.attributes,z=L.attributes,B=0,G=U.getAttributes();for(let F in G)if(G[F].location>=0){let Y=N[F],ye=z[F];if(ye===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor)),Y===void 0||Y.attribute!==ye||ye&&Y.data!==ye.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function p(P,L,U,D){let N={},z=L.attributes,B=0,G=U.getAttributes();for(let F in G)if(G[F].location>=0){let Y=z[F];Y===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));let ye={};ye.attribute=Y,Y&&Y.data&&(ye.data=Y.data),N[F]=ye,B++}r.attributes=N,r.attributesNum=B,r.index=D}function x(){let P=r.newAttributes;for(let L=0,U=P.length;L<U;L++)P[L]=0}function g(P){m(P,0)}function m(P,L){let U=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;U[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),N[P]!==L&&(n.vertexAttribDivisor(P,L),N[P]=L)}function y(){let P=r.newAttributes,L=r.enabledAttributes;for(let U=0,D=L.length;U<D;U++)L[U]!==P[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function b(P,L,U,D,N,z,B){B===!0?n.vertexAttribIPointer(P,L,U,N,z):n.vertexAttribPointer(P,L,U,D,N,z)}function v(P,L,U,D){x();let N=D.attributes,z=U.getAttributes(),B=L.defaultAttributeValues;for(let G in z){let F=z[G];if(F.location>=0){let Z=N[G];if(Z===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let Y=Z.normalized,ye=Z.itemSize,de=e.get(Z);if(de===void 0)continue;let nt=de.buffer,Je=de.type,st=de.bytesPerElement,K=Je===n.INT||Je===n.UNSIGNED_INT||Z.gpuType===cc;if(Z.isInterleavedBufferAttribute){let ee=Z.data,ue=ee.stride,Ue=Z.offset;if(ee.isInstancedInterleavedBuffer){for(let we=0;we<F.locationSize;we++)m(F.location+we,ee.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let we=0;we<F.locationSize;we++)g(F.location+we);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let we=0;we<F.locationSize;we++)b(F.location+we,ye/F.locationSize,Je,Y,ue*st,(Ue+ye/F.locationSize*we)*st,K)}else{if(Z.isInstancedBufferAttribute){for(let ee=0;ee<F.locationSize;ee++)m(F.location+ee,Z.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ee=0;ee<F.locationSize;ee++)g(F.location+ee);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ee=0;ee<F.locationSize;ee++)b(F.location+ee,ye/F.locationSize,Je,Y,ye*st,ye/F.locationSize*ee*st,K)}}else if(B!==void 0){let Y=B[G];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(F.location,Y);break;case 3:n.vertexAttrib3fv(F.location,Y);break;case 4:n.vertexAttrib4fv(F.location,Y);break;default:n.vertexAttrib1fv(F.location,Y)}}}}y()}function S(){T();for(let P in i){let L=i[P];for(let U in L){let D=L[U];for(let N in D){let z=D[N];for(let B in z)h(z[B].object),delete z[B];delete D[N]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;let L=i[P.id];for(let U in L){let D=L[U];for(let N in D){let z=D[N];for(let B in z)h(z[B].object),delete z[B];delete D[N]}}delete i[P.id]}function w(P){for(let L in i){let U=i[L];for(let D in U){let N=U[D];if(N[P.id]===void 0)continue;let z=N[P.id];for(let B in z)h(z[B].object),delete z[B];delete N[P.id]}}}function _(P){for(let L in i){let U=i[L],D=P.isInstancedMesh===!0?P.id:0,N=U[D];if(N!==void 0){for(let z in N){let B=N[z];for(let G in B)h(B[G].object),delete B[G];delete N[z]}delete U[D],Object.keys(U).length===0&&delete i[L]}}}function T(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function X1(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function q1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==bn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let _=w===Ot&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==_n&&w!==Dn&&!_&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:S,samples:M}}function Y1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Fn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:i,b=y*4,v=m.clippingState||null;l.value=v,v=h(p,f,b,d);for(let S=0;S!==b;++S)v[S]=t[S];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,v=d;b!==x;++b,v+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Br=4,Z1=6,$1=20,K1=256,Ma=new us,Lp=new ge,Zu=null,$u=0,Ku=0,Ju=!1,J1=new C,zs=new C,Xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=J1}=r;Zu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,$u,Ku),this._renderer.xr.enabled=Ju,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ot,format:bn,colorSpace:To,depthBuffer:!1},s=Dp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dp(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=j1(r)),this._blurMaterial=ev(r,e,t),this._ggxMaterial=Q1(r,e,t)}return s}_compileMaterial(e){let t=new J(new ft,e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,i,s,r){let l=new un(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Lp),u.toneMapping=li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Ye,new Ht({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,m=!0):(g.color.copy(Lp),m=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let S=this._cubeSize;Vr(s,v*S,b>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(x,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Vr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ma)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-Br?i-p+Br:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Vr(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Ma),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Vr(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(a,Ma)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Br?s-this._lodMax+Br:0),f=4*(this._cubeSize-h);Vr(t,u,f,3*h,2*h),o.setRenderTarget(t),o.render(l,Ma)}};function j1(n){let e=[],t=[],i=n,s=n-Br+1+Z1;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let m=0;m<u;m++){let y=m%3*2/3-1,b=m>2?0:-1,v=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];p.set(v,d*f*m);for(let S=0;S<f;S++){let M=h[S*2]*2-1,w=h[S*2+1]*2-1;m===0?zs.set(1,w,M):m===1?zs.set(-M,1,-w):m===2?zs.set(-M,w,1):m===3?zs.set(-1,w,-M):m===4?zs.set(-M,-1,w):zs.set(M,w,-1),zs.toArray(x,(m*f+S)*d)}}let g=new ft;g.setAttribute("position",new dt(p,d)),g.setAttribute("outputDirection",new dt(x,d)),t.push(new J(g,null)),i>Br&&i--}return{lodMeshes:t,sizeLods:e}}function Dp(n,e,t){let i=new It(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Q1(n,e,t){return new xt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function ev(n,e,t){return new xt({name:"SphericalGaussianBlur",defines:{SAMPLES:$1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Np(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Up(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qr=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Kt});r.uniforms.tEquirect.value=t;let o=new J(s,r),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=nn),new Fr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function tv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===oc||d===ac)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new qr(p.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===oc||d===ac,x=d===fs||d===Os;if(p||x){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Xr(n)),g=p?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Xr(n)),g=p?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===oc?f.mapping=fs:d===ac&&(f.mapping=Os),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function nv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function iv(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let b=0,v=y.length;b<v;b+=3){let S=y[b+0],M=y[b+1],w=y[b+2];f.push(S,M,M,w,w,S)}}else{let y=p.array;x=p.version;for(let b=0,v=y.length/3-1;b<v;b+=3){let S=b+0,M=b+1,w=b+2;f.push(S,M,M,w,w,S)}}let g=new(p.count>=65535?Do:Lo)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sv(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function rv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ov(n,e,t){let i=new WeakMap,s=new wt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let T=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let v=a.attributes.position.count*b,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let M=new Float32Array(v*S*4*u),w=new Co(M,v,S,u);w.type=Dn,w.needsUpdate=!0;let _=b*4;for(let A=0;A<u;A++){let P=g[A],L=m[A],U=y[A],D=v*S*4*A;for(let N=0;N<P.count;N++){let z=N*_;d===!0&&(s.fromBufferAttribute(P,N),M[D+z+0]=s.x,M[D+z+1]=s.y,M[D+z+2]=s.z,M[D+z+3]=0),p===!0&&(s.fromBufferAttribute(L,N),M[D+z+4]=s.x,M[D+z+5]=s.y,M[D+z+6]=s.z,M[D+z+7]=0),x===!0&&(s.fromBufferAttribute(U,N),M[D+z+8]=s.x,M[D+z+9]=s.y,M[D+z+10]=s.z,M[D+z+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new te(v,S)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function av(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var lv={[ca]:"LINEAR_TONE_MAPPING",[ha]:"REINHARD_TONE_MAPPING",[ua]:"CINEON_TONE_MAPPING",[Us]:"ACES_FILMIC_TONE_MAPPING",[fa]:"AGX_TONE_MAPPING",[pa]:"NEUTRAL_TONE_MAPPING",[da]:"CUSTOM_TONE_MAPPING"};function cv(n,e,t,i,s,r){let o=new It(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ft;c.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let h=new Ur({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new J(c,h),f=new us(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,y=[],b=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let M=0;M<y.length;M++){let w=y[M];w.setSize&&w.setSize(v,S)}},this.setEffects=function(v){y=v,b=y.length>0&&y[0].isRenderPass===!0;let S=o.width,M=o.height;y.length>0&&a===null&&(a=new It(S,M,{type:Ot,depthBuffer:!1,stencilBuffer:!1}),l=new It(S,M,{type:Ot,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<y.length;w++){let _=y[w];_.setSize&&_.setSize(S,M)}},this.begin=function(v,S){if(x||v.toneMapping===li&&y.length===0)return!1;if(m=S,S!==null){let M=S.width,w=S.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return b===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=li,!0},this.hasRenderPass=function(){return b},this.end=function(v,S){v.toneMapping=g,x=!0;let M=o,w=a;for(let _=0;_<y.length;_++){let T=y[_];T.enabled!==!1&&(T.render(v,w,M,S),T.needsSwap!==!1&&(M=w,w=w===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},pt.getTransfer(d)===St&&(h.defines.SRGB_TRANSFER="");let _=lv[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(m),v.render(u,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var t0=new vn,ed=new Zn(1,1),n0=new Co,i0=new Ul,s0=new Fo,Op=[],Fp=[],kp=new Float32Array(16),Hp=new Float32Array(9),zp=new Float32Array(4);function Yr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Op[s];if(r===void 0&&(r=new Float32Array(s),Op[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jc(n,e){let t=Fp[e];t===void 0&&(t=new Int32Array(e),Fp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function pv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;zp.set(i),n.uniformMatrix2fv(this.addr,!1,zp),rn(t,i)}}function mv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Hp.set(i),n.uniformMatrix3fv(this.addr,!1,Hp),rn(t,i)}}function gv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;kp.set(i),n.uniformMatrix4fv(this.addr,!1,kp),rn(t,i)}}function xv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function _v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function bv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function Tv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ed.compareFunction=t.isReversedDepthBuffer()?Yc:qc,r=ed):r=t0,t.setTexture2D(e||r,s)}function wv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||i0,s)}function Av(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||s0,s)}function Rv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||n0,s)}function Cv(n){switch(n){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return yv;case 35668:case 35672:return vv;case 35669:case 35673:return _v;case 5125:return bv;case 36294:return Sv;case 36295:return Mv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(n,e){n.uniform1fv(this.addr,e)}function Iv(n,e){let t=Yr(e,this.size,2);n.uniform2fv(this.addr,t)}function Lv(n,e){let t=Yr(e,this.size,3);n.uniform3fv(this.addr,t)}function Dv(n,e){let t=Yr(e,this.size,4);n.uniform4fv(this.addr,t)}function Nv(n,e){let t=Yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Uv(n,e){let t=Yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ov(n,e){let t=Yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fv(n,e){n.uniform1iv(this.addr,e)}function kv(n,e){n.uniform2iv(this.addr,e)}function Hv(n,e){n.uniform3iv(this.addr,e)}function zv(n,e){n.uniform4iv(this.addr,e)}function Gv(n,e){n.uniform1uiv(this.addr,e)}function Vv(n,e){n.uniform2uiv(this.addr,e)}function Bv(n,e){n.uniform3uiv(this.addr,e)}function Wv(n,e){n.uniform4uiv(this.addr,e)}function Xv(n,e,t){let i=this.cache,s=e.length,r=jc(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=ed:o=t0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function qv(n,e,t){let i=this.cache,s=e.length,r=jc(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||i0,r[o])}function Yv(n,e,t){let i=this.cache,s=e.length,r=jc(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||s0,r[o])}function Zv(n,e,t){let i=this.cache,s=e.length,r=jc(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||n0,r[o])}function $v(n){switch(n){case 5126:return Pv;case 35664:return Iv;case 35665:return Lv;case 35666:return Dv;case 35674:return Nv;case 35675:return Uv;case 35676:return Ov;case 5124:case 35670:return Fv;case 35667:case 35671:return kv;case 35668:case 35672:return Hv;case 35669:case 35673:return zv;case 5125:return Gv;case 36294:return Vv;case 36295:return Bv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return Zv}}var td=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cv(t.type)}},nd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$v(t.type)}},id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ju=/(\w+)(\])?(\[|\.)?/g;function Gp(n,e){n.seq.push(e),n.map[e.id]=e}function Kv(n,e,t){let i=n.name,s=i.length;for(ju.lastIndex=0;;){let r=ju.exec(i),o=ju.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gp(t,c===void 0?new td(a,n,e):new nd(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new id(a),Gp(t,u)),t=u}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Kv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Vp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Jv=37297,jv=0;function Qv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Bp=new tt;function e_(n){pt._getMatrix(Bp,pt.workingColorSpace,n);let e=`mat3( ${Bp.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case wo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Qv(n.getShaderSource(e),a)}else return r}function t_(n,e){let t=e_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var n_={[ca]:"Linear",[ha]:"Reinhard",[ua]:"Cineon",[Us]:"ACESFilmic",[fa]:"AgX",[pa]:"Neutral",[da]:"Custom"};function i_(n,e){let t=n_[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $c=new C;function s_(){pt.getLuminanceCoefficients($c);let n=$c.x.toFixed(4),e=$c.y.toFixed(4),t=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function o_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ta(n){return n!==""}function Xp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(n){return n.replace(l_,h_)}var c_=new Map;function h_(n,e){let t=ut[e];if(t===void 0){let i=c_.get(e);if(i!==void 0)t=ut[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sd(t)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(n){return n.replace(u_,d_)}function d_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var f_={[Ds]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function p_(n){return f_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m_={[fs]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function g_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":m_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var x_={[Os]:"ENVMAP_MODE_REFRACTION"};function y_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var v_={[Au]:"ENVMAP_BLENDING_MULTIPLY",[cp]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function __(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":v_[n.combine]||"ENVMAP_BLENDING_NONE"}function b_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function S_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=p_(t),c=g_(t),h=y_(t),u=__(t),f=b_(t),d=r_(t),p=o_(r),x=s.createProgram(),g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ta).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ta).join(`
`),m.length>0&&(m+=`
`)):(g=[Zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),m=[Zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?ut.tonemapping_pars_fragment:"",t.toneMapping!==li?i_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,t_("linearToOutputTexel",t.outputColorSpace),s_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),o=sd(o),o=Xp(o,t),o=qp(o,t),a=sd(a),a=Xp(a,t),a=qp(a,t),o=Yp(o),a=Yp(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=y+g+o,v=y+m+a,S=Vp(s,s.VERTEX_SHADER,b),M=Vp(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,M),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(M)||"",N=L.trim(),z=U.trim(),B=D.trim(),G=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,M);else{let Z=Wp(s,S,"vertex"),Y=Wp(s,M,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+Z+`
`+Y)}else N!==""?qe("WebGLProgram: Program Info Log:",N):(z===""||B==="")&&(F=!1);F&&(P.diagnostics={runnable:G,programLog:N,vertexShader:{log:z,prefix:g},fragmentShader:{log:B,prefix:m}})}s.deleteShader(S),s.deleteShader(M),_=new Wr(s,x),T=a_(s,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,Jv)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var M_=0,rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new od(e),t.set(e,i)),i}},od=class{constructor(e){this.id=M_++,this.code=e,this.usedTimes=0}};function E_(n){return n===ms||n===_a||n===ba}function T_(n,e,t,i,s,r){let o=new Po,a=new rd,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,A,P,L,U){let D=P.fog,N=L.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||z,B),F=G&&G.mapping===ma?G.image.height:null,Z=d[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&qe("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ye=Y!==void 0?Y.length:0,de=0;N.morphAttributes.position!==void 0&&(de=1),N.morphAttributes.normal!==void 0&&(de=2),N.morphAttributes.color!==void 0&&(de=3);let nt,Je,st,K;if(Z){let Lt=Ci[Z];nt=Lt.vertexShader,Je=Lt.fragmentShader}else{nt=_.vertexShader,Je=_.fragmentShader;let Lt=a.getVertexShaderStage(_),Mt=a.getFragmentShaderStage(_);a.update(_,Lt,Mt),st=Lt.id,K=Mt.id}let ee=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),Ue=L.isInstancedMesh===!0,we=L.isBatchedMesh===!0,Xe=!!_.map,lt=!!_.matcap,se=!!G,ae=!!_.aoMap,le=!!_.lightMap,ce=!!_.bumpMap&&_.wireframe===!1,fe=!!_.normalMap,We=!!_.displacementMap,ze=!!_.emissiveMap,$e=!!_.metalnessMap,Qe=!!_.roughnessMap,O=_.anisotropy>0,yt=_.clearcoat>0,ot=_.dispersion>0,I=_.retroreflectivity>0,E=_.iridescence>0,V=_.sheen>0,W=_.transmission>0,j=O&&!!_.anisotropyMap,he=yt&&!!_.clearcoatMap,pe=yt&&!!_.clearcoatNormalMap,Q=yt&&!!_.clearcoatRoughnessMap,re=E&&!!_.iridescenceMap,ve=E&&!!_.iridescenceThicknessMap,ke=V&&!!_.sheenColorMap,xe=V&&!!_.sheenRoughnessMap,me=!!_.specularMap,Ie=!!_.specularColorMap,Ge=!!_.specularIntensityMap,et=W&&!!_.transmissionMap,H=W&&!!_.thicknessMap,be=!!_.gradientMap,ne=!!_.alphaMap,Se=_.alphaTest>0,Ae=!!_.alphaHash,oe=!!_.extensions,Ve=li;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ve=n.toneMapping);let Fe={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:nt,fragmentShader:Je,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:we,batchingColor:we&&L._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&L.instanceColor!==null,instancingMorph:Ue&&L.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xe,matcap:lt,envMap:se,envMapMode:se&&G.mapping,envMapCubeUVHeight:F,aoMap:ae,lightMap:le,bumpMap:ce,normalMap:fe,displacementMap:We,emissiveMap:ze,normalMapObjectSpace:fe&&_.normalMapType===dp,normalMapTangentSpace:fe&&_.normalMapType===Sa,packedNormalMap:fe&&_.normalMapType===Sa&&E_(_.normalMap.format),metalnessMap:$e,roughnessMap:Qe,anisotropy:O,anisotropyMap:j,clearcoat:yt,clearcoatMap:he,clearcoatNormalMap:pe,clearcoatRoughnessMap:Q,dispersion:ot,retroreflection:I,iridescence:E,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:V,sheenColorMap:ke,sheenRoughnessMap:xe,specularMap:me,specularColorMap:Ie,specularIntensityMap:Ge,transmission:W,transmissionMap:et,thicknessMap:H,gradientMap:be,opaque:_.transparent===!1&&_.blending===Hr&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:Se,alphaHash:Ae,combine:_.combine,mapUv:Xe&&p(_.map.channel),aoMapUv:ae&&p(_.aoMap.channel),lightMapUv:le&&p(_.lightMap.channel),bumpMapUv:ce&&p(_.bumpMap.channel),normalMapUv:fe&&p(_.normalMap.channel),displacementMapUv:We&&p(_.displacementMap.channel),emissiveMapUv:ze&&p(_.emissiveMap.channel),metalnessMapUv:$e&&p(_.metalnessMap.channel),roughnessMapUv:Qe&&p(_.roughnessMap.channel),anisotropyMapUv:j&&p(_.anisotropyMap.channel),clearcoatMapUv:he&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&p(_.sheenRoughnessMap.channel),specularMapUv:me&&p(_.specularMap.channel),specularColorMapUv:Ie&&p(_.specularColorMap.channel),specularIntensityMapUv:Ge&&p(_.specularIntensityMap.channel),transmissionMapUv:et&&p(_.transmissionMap.channel),thicknessMapUv:H&&p(_.thicknessMap.channel),alphaMapUv:ne&&p(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(fe||O),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Xe||ne),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ue,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:de,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Xe&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===St,decodeVideoTextureEmissive:ze&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===St,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$t,flipSided:_.side===Zt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)T.push(A),T.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(m(T,_),y(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let T=d[_.type],A;if(T){let P=Ci[T];A=Jt.clone(P.uniforms)}else A=_.uniforms;return A}function v(_,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new S_(n,T,_,s),c.push(A),h.set(T,A)),A}function S(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:w}}function w_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function A_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $p(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,g,m){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},n[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=g,y.group=m),e++,y}function l(f,d,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let b=a(f,d,p,x,g,m);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(f,d,p,x,g,m){let y=a(f,d,p,x,g,m);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||A_),i.length>1&&i.sort(d||$p),s.length>1&&s.sort(d||$p)}function u(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function R_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Kp,n.set(i,[o])):s>=r.length?(o=new Kp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function C_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new ge};break;case"SpotLight":t={position:new C,direction:new C,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function P_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var I_=0;function L_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function D_(n){let e=new C_,t=P_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new Be,o=new Be;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,y=0,b=0,v=0,S=0,M=0,w=0,_=0,T=0,A=0;c.sort(L_);for(let L=0,U=c.length;L<U;L++){let D=c[L],N=D.color,z=D.intensity,B=D.distance,G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ms?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=N.r*z,u+=N.g*z,f+=N.b*z;else if(D.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],z);A++}else if(D.isSunLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,Y=t.get(D);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[p]=Y,i.sunShadowMap[p]=G;let ye=Z.getViewportCount();for(let de=0;de<ye;de++)i.sunShadowMatrix[x+de]=Z.getMatrix(de),i.sunShadowCascade[x+de]=Z._cascadeData[de];x+=ye,p++}i.sun[d]=F,d++}else if(D.isDirectionalLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,Y=t.get(D);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.directionalShadow[g]=Y,i.directionalShadowMap[g]=G,i.directionalShadowMatrix[g]=D.shadow.matrix,S++}i.directional[g]=F,g++}else if(D.isSpotLight){let F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(N).multiplyScalar(z),F.distance=B,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,i.spot[y]=F;let Z=D.shadow;if(D.map&&(i.spotLightMap[_]=D.map,_++,Z.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[y]=Z.matrix,D.castShadow){let Y=t.get(D);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.spotShadow[y]=Y,i.spotShadowMap[y]=G,w++}y++}else if(D.isRectAreaLight){let F=e.get(D);F.color.copy(N).multiplyScalar(z),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=F,b++}else if(D.isPointLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){let Z=D.shadow,Y=t.get(D);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=D.shadow.matrix,M++}i.point[m]=F,m++}else if(D.isHemisphereLight){let F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(z),F.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[v]=F,v++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==b||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==_||P.numLightProbes!==A)&&(i.sun.length=d,i.directional.length=g,i.spot.length=y,i.rectArea.length=b,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.sunLength=d,P.directionalLength=g,P.pointLength=m,P.spotLength=y,P.rectAreaLength=b,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=_,P.numLightProbes=A,i.version=I_++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let v=c[y];if(v.isSunLight){let S=i.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(v.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Jp(n){let e=new D_(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function N_(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Jp(n),e.set(s,[a])):r>=o.length?(a=new Jp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,F_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],k_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],jp=new Be,Ea=new C,Qu=new C;function H_(n,e,t){let i=new Rr,s=new te,r=new te,o=new wt,a=new Xl,l=new ql,c={},h=t.maxTextureSize,u={[ds]:Zt,[Zt]:ds,[$t]:$t},f=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:U_,fragmentShader:O_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ft;p.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new J(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let m=this.type;this.render=function(M,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Zf&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);let T=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Kt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==this.type;U&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(N=>N.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,N=M.length;D<N;D++){let z=M[D],B=z.shadow;if(B===void 0){qe("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let G=B.getFrameExtents();s.multiply(G),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,B.mapSize.y=r.y));let F=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=F,B.map===null||U===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===kr){if(z.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new It(s.x,s.y,{format:ms,type:Ot,minFilter:nn,magFilter:nn,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Zn(s.x,s.y,Dn),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=bi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt}else z.isPointLight?(B.map=new qr(s.x),B.map.depthTexture=new Hl(s.x,ci)):(B.map=new It(s.x,s.y),B.map.depthTexture=new Zn(s.x,s.y,ci)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=bi,this.type===Ds?(B.map.depthTexture.compareFunction=F?Yc:qc,B.map.depthTexture.minFilter=nn,B.map.depthTexture.magFilter=nn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let Z=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();z.isPointLight!==!0&&B.updateMatrices(z,_);for(let Y=0;Y<Z;Y++){let ye=B.getCamera(Y);if(z.isPointLight){let de=B.camera,nt=B.matrix,Je=z.distance||de.far;Je!==de.far&&(de.far=Je,de.updateProjectionMatrix()),Ea.setFromMatrixPosition(z.matrixWorld),de.position.copy(Ea),Qu.copy(de.position),Qu.add(F_[Y]),de.up.copy(k_[Y]),de.lookAt(Qu),de.updateMatrixWorld(),nt.makeTranslation(-Ea.x,-Ea.y,-Ea.z),jp.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),B._frustum.setFromProjectionMatrix(jp,de.coordinateSystem,de.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,Y),n.clear();else{Y===0&&(n.setRenderTarget(B.map),n.clear());let de=B.getViewport(Y);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),L.viewport(o)}i=B.getFrustum(Y),v(w,_,ye,z,this.type)}B.isPointLightShadow!==!0&&this.type===kr&&y(B,_),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(T,A,P)};function y(M,w){let _=e.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new It(s.x,s.y,{format:ms,type:Ot}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,_,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,_,d,x,null)}function b(M,w,_,T){let A=null,P=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)A=P;else if(A=_.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=A.uuid,U=w.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let N=D[U];N===void 0&&(N=A.clone(),D[U]=N,w.addEventListener("dispose",S)),A=N}if(A.visible=w.visible,A.wireframe=w.wireframe,T===kr?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:u[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=n.properties.get(A);L.light=_}return A}function v(M,w,_,T,A){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===kr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let U=e.update(M),D=M.material;if(Array.isArray(D)){let N=U.groups;for(let z=0,B=N.length;z<B;z++){let G=N[z],F=D[G.materialIndex];if(F&&F.visible){let Z=b(M,F,T,A);M.onBeforeShadow(n,M,w,_,U,Z,G),n.renderBufferDirect(_,null,U,Z,M,G),M.onAfterShadow(n,M,w,_,U,Z,G)}}}else if(D.visible){let N=b(M,D,T,A);M.onBeforeShadow(n,M,w,_,U,N,null),n.renderBufferDirect(_,null,U,N,M,null),M.onAfterShadow(n,M,w,_,U,N,null)}}let L=M.children;for(let U=0,D=L.length;U<D;U++)v(L[U],w,_,T,A)}function S(M){M.target.removeEventListener("dispose",S);for(let _ in c){let T=c[_],A=M.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function z_(n,e){function t(){let H=!1,be=new wt,ne=null,Se=new wt(0,0,0,0);return{setMask:function(Ae){ne!==Ae&&!H&&(n.colorMask(Ae,Ae,Ae,Ae),ne=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,oe,Ve,Fe,Lt){Lt===!0&&(Ae*=Fe,oe*=Fe,Ve*=Fe),be.set(Ae,oe,Ve,Fe),Se.equals(be)===!1&&(n.clearColor(Ae,oe,Ve,Fe),Se.copy(be))},reset:function(){H=!1,ne=null,Se.set(-1,0,0,0)}}}function i(){let H=!1,be=!1,ne=null,Se=null,Ae=null;return{setReversed:function(oe){if(be!==oe){let Ve=e.get("EXT_clip_control");oe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),be=oe;let Fe=Ae;Ae=null,this.setClear(Fe)}},getReversed:function(){return be},setTest:function(oe){oe?ee(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(oe){ne!==oe&&!H&&(n.depthMask(oe),ne=oe)},setFunc:function(oe){if(be&&(oe=Mp[oe]),Se!==oe){switch(oe){case Al:n.depthFunc(n.NEVER);break;case Rl:n.depthFunc(n.ALWAYS);break;case Cl:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case Pl:n.depthFunc(n.EQUAL);break;case Il:n.depthFunc(n.GEQUAL);break;case Ll:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=oe}},setLocked:function(oe){H=oe},setClear:function(oe){Ae!==oe&&(Ae=oe,be&&(oe=1-oe),n.clearDepth(oe))},reset:function(){H=!1,ne=null,Se=null,Ae=null,be=!1}}}function s(){let H=!1,be=null,ne=null,Se=null,Ae=null,oe=null,Ve=null,Fe=null,Lt=null;return{setTest:function(Mt){H||(Mt?ee(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(Mt){be!==Mt&&!H&&(n.stencilMask(Mt),be=Mt)},setFunc:function(Mt,ei,mi){(ne!==Mt||Se!==ei||Ae!==mi)&&(n.stencilFunc(Mt,ei,mi),ne=Mt,Se=ei,Ae=mi)},setOp:function(Mt,ei,mi){(oe!==Mt||Ve!==ei||Fe!==mi)&&(n.stencilOp(Mt,ei,mi),oe=Mt,Ve=ei,Fe=mi)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Lt!==Mt&&(n.clearStencil(Mt),Lt=Mt)},reset:function(){H=!1,be=null,ne=null,Se=null,Ae=null,oe=null,Ve=null,Fe=null,Lt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,y=null,b=null,v=null,S=null,M=null,w=null,_=new ge(0,0,0),T=0,A=!1,P=null,L=null,U=null,D=null,N=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,G=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),B=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),B=G>=2);let Z=null,Y={},ye=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),nt=new wt().fromArray(ye),Je=new wt().fromArray(de);function st(H,be,ne,Se){let Ae=new Uint8Array(4),oe=n.createTexture();n.bindTexture(H,oe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<ne;Ve++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(be+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return oe}let K={};K[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(xr),ce(!1),fe(Su),ee(n.CULL_FACE),ae(Kt);function ee(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function ue(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function Ue(H,be){return f[H]!==be?(n.bindFramebuffer(H,be),f[H]=be,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be),!0):!1}function we(H,be){let ne=p,Se=!1;if(H){ne=d.get(be),ne===void 0&&(ne=[],d.set(be,ne));let Ae=H.textures;if(ne.length!==Ae.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ve=Ae.length;oe<Ve;oe++)ne[oe]=n.COLOR_ATTACHMENT0+oe;ne.length=Ae.length,Se=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ne)}function Xe(H){return x!==H?(n.useProgram(H),x=H,!0):!1}let lt={[$n]:n.FUNC_ADD,[$f]:n.FUNC_SUBTRACT,[Kf]:n.FUNC_REVERSE_SUBTRACT};lt[Jf]=n.MIN,lt[jf]=n.MAX;let se={[Ns]:n.ZERO,[Qf]:n.ONE,[ep]:n.SRC_COLOR,[Tu]:n.SRC_ALPHA,[sp]:n.SRC_ALPHA_SATURATE,[la]:n.DST_COLOR,[aa]:n.DST_ALPHA,[tp]:n.ONE_MINUS_SRC_COLOR,[wu]:n.ONE_MINUS_SRC_ALPHA,[ip]:n.ONE_MINUS_DST_COLOR,[np]:n.ONE_MINUS_DST_ALPHA,[rp]:n.CONSTANT_COLOR,[op]:n.ONE_MINUS_CONSTANT_COLOR,[ap]:n.CONSTANT_ALPHA,[lp]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(H,be,ne,Se,Ae,oe,Ve,Fe,Lt,Mt){if(H===Kt){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(ee(n.BLEND),g=!0),H!==rc){if(H!==m||Mt!==A){if((y!==$n||S!==$n)&&(n.blendEquation(n.FUNC_ADD),y=$n,S=$n),Mt)switch(H){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fn:n.blendFunc(n.ONE,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",H);break}else switch(H){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mu:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eu:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",H);break}b=null,v=null,M=null,w=null,_.set(0,0,0),T=0,m=H,A=Mt}return}Ae=Ae||be,oe=oe||ne,Ve=Ve||Se,(be!==y||Ae!==S)&&(n.blendEquationSeparate(lt[be],lt[Ae]),y=be,S=Ae),(ne!==b||Se!==v||oe!==M||Ve!==w)&&(n.blendFuncSeparate(se[ne],se[Se],se[oe],se[Ve]),b=ne,v=Se,M=oe,w=Ve),(Fe.equals(_)===!1||Lt!==T)&&(n.blendColor(Fe.r,Fe.g,Fe.b,Lt),_.copy(Fe),T=Lt),m=H,A=!1}function le(H,be){H.side===$t?ue(n.CULL_FACE):ee(n.CULL_FACE);let ne=H.side===Zt;be&&(ne=!ne),ce(ne),H.blending===Hr&&H.transparent===!1?ae(Kt):ae(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Se=H.stencilWrite;a.setTest(Se),Se&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ze(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(H){P!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),P=H)}function fe(H){H!==qf?(ee(n.CULL_FACE),H!==L&&(H===Su?n.cullFace(n.BACK):H===Yf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),L=H}function We(H){H!==U&&(B&&n.lineWidth(H),U=H)}function ze(H,be,ne){H?(ee(n.POLYGON_OFFSET_FILL),(D!==be||N!==ne)&&(D=be,N=ne,o.getReversed()&&(be=-be),n.polygonOffset(be,ne))):ue(n.POLYGON_OFFSET_FILL)}function $e(H){H?ee(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function Qe(H){H===void 0&&(H=n.TEXTURE0+z-1),Z!==H&&(n.activeTexture(H),Z=H)}function O(H,be,ne){ne===void 0&&(Z===null?ne=n.TEXTURE0+z-1:ne=Z);let Se=Y[ne];Se===void 0&&(Se={type:void 0,texture:void 0},Y[ne]=Se),(Se.type!==H||Se.texture!==be)&&(Z!==ne&&(n.activeTexture(ne),Z=ne),n.bindTexture(H,be||K[H]),Se.type=H,Se.texture=be)}function yt(){let H=Y[Z];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function E(){try{n.texSubImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function V(){try{n.texSubImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function he(){try{n.texStorage2D(...arguments)}catch(H){je("WebGLState:",H)}}function pe(){try{n.texStorage3D(...arguments)}catch(H){je("WebGLState:",H)}}function Q(){try{n.texImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function re(){try{n.texImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function ve(H){return u[H]!==void 0?u[H]:n.getParameter(H)}function ke(H,be){u[H]!==be&&(n.pixelStorei(H,be),u[H]=be)}function xe(H){nt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),nt.copy(H))}function me(H){Je.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Je.copy(H))}function Ie(H,be){let ne=c.get(be);ne===void 0&&(ne=new WeakMap,c.set(be,ne));let Se=ne.get(H);Se===void 0&&(Se=n.getUniformBlockIndex(be,H.name),ne.set(H,Se))}function Ge(H,be){let Se=c.get(be).get(H);l.get(be)!==Se&&(n.uniformBlockBinding(be,Se,H.__bindingPointIndex),l.set(be,Se))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,Y={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,y=null,b=null,v=null,S=null,M=null,w=null,_=new ge(0,0,0),T=0,A=!1,P=null,L=null,U=null,D=null,N=null,nt.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:ue,bindFramebuffer:Ue,drawBuffers:we,useProgram:Xe,setBlending:ae,setMaterial:le,setFlipSided:ce,setCullFace:fe,setLineWidth:We,setPolygonOffset:ze,setScissorTest:$e,activeTexture:Qe,bindTexture:O,unbindTexture:yt,compressedTexImage2D:ot,compressedTexImage3D:I,texImage2D:Q,texImage3D:re,pixelStorei:ke,getParameter:ve,updateUBOMapping:Ie,uniformBlockBinding:Ge,texStorage2D:he,texStorage3D:pe,texSubImage2D:E,texSubImage3D:V,compressedTexSubImage2D:W,compressedTexSubImage3D:j,scissor:xe,viewport:me,reset:et}}function G_(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,E){return p?new OffscreenCanvas(I,E):Ao("canvas")}function g(I,E,V){let W=1,j=ot(I);if((j.width>V||j.height>V)&&(W=V/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let he=Math.floor(W*j.width),pe=Math.floor(W*j.height);f===void 0&&(f=x(he,pe));let Q=E?x(he,pe):f;return Q.width=he,Q.height=pe,Q.getContext("2d").drawImage(I,0,0,he,pe),qe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+he+"x"+pe+")."),Q}else return"data"in I&&qe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function m(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,E,V,W,j,he=!1){if(I!==null){if(n[I]!==void 0)return n[I];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pe;W&&(pe=e.get("EXT_texture_norm16"),pe||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===n.RED&&(V===n.FLOAT&&(Q=n.R32F),V===n.HALF_FLOAT&&(Q=n.R16F),V===n.UNSIGNED_BYTE&&(Q=n.R8),V===n.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),V===n.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.R8UI),V===n.UNSIGNED_SHORT&&(Q=n.R16UI),V===n.UNSIGNED_INT&&(Q=n.R32UI),V===n.BYTE&&(Q=n.R8I),V===n.SHORT&&(Q=n.R16I),V===n.INT&&(Q=n.R32I)),E===n.RG&&(V===n.FLOAT&&(Q=n.RG32F),V===n.HALF_FLOAT&&(Q=n.RG16F),V===n.UNSIGNED_BYTE&&(Q=n.RG8),V===n.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),V===n.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RG8UI),V===n.UNSIGNED_SHORT&&(Q=n.RG16UI),V===n.UNSIGNED_INT&&(Q=n.RG32UI),V===n.BYTE&&(Q=n.RG8I),V===n.SHORT&&(Q=n.RG16I),V===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),V===n.UNSIGNED_INT&&(Q=n.RGB32UI),V===n.BYTE&&(Q=n.RGB8I),V===n.SHORT&&(Q=n.RGB16I),V===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),V===n.UNSIGNED_INT&&(Q=n.RGBA32UI),V===n.BYTE&&(Q=n.RGBA8I),V===n.SHORT&&(Q=n.RGBA16I),V===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&(V===n.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),V===n.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),E===n.RGBA){let re=he?wo:pt.getTransfer(j);V===n.FLOAT&&(Q=n.RGBA32F),V===n.HALF_FLOAT&&(Q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Q=re===St?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),V===n.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(I,E){let V;return I?E===null||E===ci||E===ps?V=n.DEPTH24_STENCIL8:E===Dn?V=n.DEPTH32F_STENCIL8:E===Gr&&(V=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ci||E===ps?V=n.DEPTH_COMPONENT24:E===Dn?V=n.DEPTH_COMPONENT32F:E===Gr&&(V=n.DEPTH_COMPONENT16),V}function M(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bt&&I.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){let E=I.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function _(I){let E=I.target;E.removeEventListener("dispose",_),P(E)}function T(I){let E=i.get(I);if(E.__webglInit===void 0)return;let V=I.source,W=d.get(V);if(W){let j=W[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(I),Object.keys(W).length===0&&d.delete(V)}i.remove(I)}function A(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let V=I.source,W=d.get(V);delete W[E.__cacheKey],o.memory.textures--}function P(I){let E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let j=0;j<E.__webglFramebuffer[W].length;j++)n.deleteFramebuffer(E.__webglFramebuffer[W][j]);else n.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)n.deleteFramebuffer(E.__webglFramebuffer[W]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let V=I.textures;for(let W=0,j=V.length;W<j;W++){let he=i.get(V[W]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(V[W])}i.remove(I)}let L=0;function U(){L=0}function D(){return L}function N(I){L=I}function z(){let I=L;return I>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function B(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function G(I,E){let V=i.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){let W=I.image;if(W===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,I,E);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function F(I,E){let V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){ue(V,I,E);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function Z(I,E){let V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){ue(V,I,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function Y(I,E){let V=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){Ue(V,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}let ye={[In]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[yr]:n.MIRRORED_REPEAT},de={[Bt]:n.NEAREST,[lc]:n.NEAREST_MIPMAP_NEAREST,[Fs]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[zr]:n.LINEAR_MIPMAP_NEAREST,[Ln]:n.LINEAR_MIPMAP_LINEAR},nt={[pp]:n.NEVER,[vp]:n.ALWAYS,[mp]:n.LESS,[qc]:n.LEQUAL,[gp]:n.EQUAL,[Yc]:n.GEQUAL,[xp]:n.GREATER,[yp]:n.NOTEQUAL};function Je(I,E){if(E.type===Dn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===nn||E.magFilter===zr||E.magFilter===Fs||E.magFilter===Ln||E.minFilter===nn||E.minFilter===zr||E.minFilter===Fs||E.minFilter===Ln)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ye[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ye[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ye[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,de[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,de[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,nt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bt||E.minFilter!==Fs&&E.minFilter!==Ln||E.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function st(I,E){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));let W=E.source,j=d.get(W);j===void 0&&(j={},d.set(W,j));let he=B(E);if(he!==I.__cacheKey){j[he]===void 0&&(j[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[he].usedTimes++;let pe=j[I.__cacheKey];pe!==void 0&&(j[I.__cacheKey].usedTimes--,pe.usedTimes===0&&A(E)),I.__cacheKey=he,I.__webglTexture=j[he].texture}return V}function K(I,E,V){return Math.floor(Math.floor(I/V)/E)}function ee(I,E,V,W){let he=I.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,V,W,E.data);else{he.sort((ke,xe)=>ke.start-xe.start);let pe=0;for(let ke=1;ke<he.length;ke++){let xe=he[pe],me=he[ke],Ie=xe.start+xe.count,Ge=K(me.start,E.width,4),et=K(xe.start,E.width,4);me.start<=Ie+1&&Ge===et&&K(me.start+me.count-1,E.width,4)===Ge?xe.count=Math.max(xe.count,me.start+me.count-xe.start):(++pe,he[pe]=me)}he.length=pe+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let ke=0,xe=he.length;ke<xe;ke++){let me=he[ke],Ie=Math.floor(me.start/4),Ge=Math.ceil(me.count/4),et=Ie%E.width,H=Math.floor(Ie/E.width),be=Ge,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,et),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,et,H,be,ne,V,W,E.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function ue(I,E,V){let W=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=n.TEXTURE_3D);let j=st(I,E),he=E.source;t.bindTexture(W,I.__webglTexture,n.TEXTURE0+V);let pe=i.get(he);if(he.version!==pe.__version||j===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ne=pt.getPrimaries(pt.workingColorSpace),Se=E.colorSpace===hi?null:pt.getPrimaries(E.colorSpace),Ae=E.colorSpace===hi||ne===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let re=g(E.image,!1,s.maxTextureSize);re=yt(E,re);let ve=r.convert(E.format,E.colorSpace),ke=r.convert(E.type),xe=v(E.internalFormat,ve,ke,E.normalized,E.colorSpace,E.isVideoTexture);Je(W,E);let me,Ie=E.mipmaps,Ge=E.isVideoTexture!==!0,et=pe.__version===void 0||j===!0,H=he.dataReady,be=M(E,re);if(E.isDepthTexture)xe=S(E.format===Ai,E.type),et&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,xe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,ve,ke,null));else if(E.isDataTexture)if(Ie.length>0){Ge&&et&&t.texStorage2D(n.TEXTURE_2D,be,xe,Ie[0].width,Ie[0].height);for(let ne=0,Se=Ie.length;ne<Se;ne++)me=Ie[ne],Ge?H&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,me.width,me.height,ve,ke,me.data):t.texImage2D(n.TEXTURE_2D,ne,xe,me.width,me.height,0,ve,ke,me.data);E.generateMipmaps=!1}else Ge?(et&&t.texStorage2D(n.TEXTURE_2D,be,xe,re.width,re.height),H&&ee(E,re,ve,ke)):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,ve,ke,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ge&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,xe,Ie[0].width,Ie[0].height,re.depth);for(let ne=0,Se=Ie.length;ne<Se;ne++)if(me=Ie[ne],E.format!==bn)if(ve!==null)if(Ge){if(H)if(E.layerUpdates.size>0){let Ae=Vu(me.width,me.height,E.format,E.type);for(let oe of E.layerUpdates){let Ve=me.data.subarray(oe*Ae/me.data.BYTES_PER_ELEMENT,(oe+1)*Ae/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,oe,me.width,me.height,1,ve,Ve)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,re.depth,ve,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,xe,me.width,me.height,re.depth,0,me.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,re.depth,ve,ke,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,xe,me.width,me.height,re.depth,0,ve,ke,me.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ge&&et&&t.texStorage2D(n.TEXTURE_2D,be,xe,Ie[0].width,Ie[0].height);for(let ne=0,Se=Ie.length;ne<Se;ne++)me=Ie[ne],E.format!==bn?ve!==null?Ge?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,xe,me.width,me.height,0,me.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?H&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,me.width,me.height,ve,ke,me.data):t.texImage2D(n.TEXTURE_2D,ne,xe,me.width,me.height,0,ve,ke,me.data)}else if(E.isDataArrayTexture)if(Ge){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,xe,re.width,re.height,re.depth),H)if(E.layerUpdates.size>0){let ne=Vu(re.width,re.height,E.format,E.type);for(let Se of E.layerUpdates){let Ae=re.data.subarray(Se*ne/re.data.BYTES_PER_ELEMENT,(Se+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,re.width,re.height,1,ve,ke,Ae)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,ke,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,ve,ke,re.data);else if(E.isData3DTexture)Ge?(et&&t.texStorage3D(n.TEXTURE_3D,be,xe,re.width,re.height,re.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,ke,re.data)):t.texImage3D(n.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,ve,ke,re.data);else if(E.isFramebufferTexture){if(et)if(Ge)t.texStorage2D(n.TEXTURE_2D,be,xe,re.width,re.height);else{let ne=re.width,Se=re.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,xe,ne,Se,0,ve,ke,null),ne>>=1,Se>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),re.parentNode!==ne){ne.appendChild(re),u.add(E),ne.onpaint=Se=>{let Ae=Se.changedElements;for(let oe of u)Ae.includes(oe.image)&&(oe.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{let Ae=n.RGBA,oe=n.RGBA,Ve=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ae,oe,Ve,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ge&&et){let ne=ot(Ie[0]);t.texStorage2D(n.TEXTURE_2D,be,xe,ne.width,ne.height)}for(let ne=0,Se=Ie.length;ne<Se;ne++)me=Ie[ne],Ge?H&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ve,ke,me):t.texImage2D(n.TEXTURE_2D,ne,xe,ve,ke,me);E.generateMipmaps=!1}else if(Ge){if(et){let ne=ot(re);t.texStorage2D(n.TEXTURE_2D,be,xe,ne.width,ne.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,ke,re)}else t.texImage2D(n.TEXTURE_2D,0,xe,ve,ke,re);m(E)&&y(W),pe.__version=he.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ue(I,E,V){if(E.image.length!==6)return;let W=st(I,E),j=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+V);let he=i.get(j);if(j.version!==he.__version||W===!0){t.activeTexture(n.TEXTURE0+V);let pe=pt.getPrimaries(pt.workingColorSpace),Q=E.colorSpace===hi?null:pt.getPrimaries(E.colorSpace),re=E.colorSpace===hi||pe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ve=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!ve&&!ke?xe[oe]=g(E.image[oe],!0,s.maxCubemapSize):xe[oe]=ke?E.image[oe].image:E.image[oe],xe[oe]=yt(E,xe[oe]);let me=xe[0],Ie=r.convert(E.format,E.colorSpace),Ge=r.convert(E.type),et=v(E.internalFormat,Ie,Ge,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,be=he.__version===void 0||W===!0,ne=j.dataReady,Se=M(E,me);Je(n.TEXTURE_CUBE_MAP,E);let Ae;if(ve){H&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,et,me.width,me.height);for(let oe=0;oe<6;oe++){Ae=xe[oe].mipmaps;for(let Ve=0;Ve<Ae.length;Ve++){let Fe=Ae[Ve];E.format!==bn?Ie!==null?H?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve,0,0,Fe.width,Fe.height,Ie,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve,et,Fe.width,Fe.height,0,Fe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve,0,0,Fe.width,Fe.height,Ie,Ge,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve,et,Fe.width,Fe.height,0,Ie,Ge,Fe.data)}}}else{if(Ae=E.mipmaps,H&&be){Ae.length>0&&Se++;let oe=ot(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,et,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ke){H?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Ie,Ge,xe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,et,xe[oe].width,xe[oe].height,0,Ie,Ge,xe[oe].data);for(let Ve=0;Ve<Ae.length;Ve++){let Lt=Ae[Ve].image[oe].image;H?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve+1,0,0,Lt.width,Lt.height,Ie,Ge,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve+1,et,Lt.width,Lt.height,0,Ie,Ge,Lt.data)}}else{H?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ie,Ge,xe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,et,Ie,Ge,xe[oe]);for(let Ve=0;Ve<Ae.length;Ve++){let Fe=Ae[Ve];H?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve+1,0,0,Ie,Ge,Fe.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ve+1,et,Ie,Ge,Fe.image[oe])}}}m(E)&&y(n.TEXTURE_CUBE_MAP),he.__version=j.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function we(I,E,V,W,j,he){let pe=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),re=v(V.internalFormat,pe,Q,V.normalized,V.colorSpace),ve=i.get(E),ke=i.get(V);if(ke.__renderTarget=E,!ve.__hasExternalTextures){let xe=Math.max(1,E.width>>he),me=Math.max(1,E.height>>he);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,he,re,xe,me,E.depth,0,pe,Q,null):t.texImage2D(j,he,re,xe,me,0,pe,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Qe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,j,ke.__webglTexture,0,$e(E)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,j,ke.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(I,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let W=E.depthTexture,j=W&&W.isDepthTexture?W.type:null,he=S(E.stencilBuffer,j),pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e(E),he,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e(E),he,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,he,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,I)}else{let W=E.textures;for(let j=0;j<W.length;j++){let he=W[j],pe=r.convert(he.format,he.colorSpace),Q=r.convert(he.type),re=v(he.internalFormat,pe,Q,he.normalized,he.colorSpace);Qe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e(E),re,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e(E),re,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,re,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(I,E,V){let W=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(E.depthTexture);if(j.__renderTarget=E,(!j.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Je(n.TEXTURE_CUBE_MAP,E.depthTexture);let ve=r.convert(E.depthTexture.format),ke=r.convert(E.depthTexture.type),xe;E.depthTexture.format===bi?xe=n.DEPTH_COMPONENT24:E.depthTexture.format===Ai&&(xe=n.DEPTH24_STENCIL8);for(let me=0;me<6;me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,xe,E.width,E.height,0,ve,ke,null)}}else G(E.depthTexture,0);let he=j.__webglTexture,pe=$e(E),Q=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,re=E.depthTexture.format===Ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===bi)Qe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Q,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,re,Q,he,0);else if(E.depthTexture.format===Ai)Qe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,Q,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,re,Q,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(I){let E=i.get(I),V=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let W=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=W}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(V)for(let W=0;W<6;W++)lt(E.__webglFramebuffer[W],I,W);else{let W=I.texture.mipmaps;W&&W.length>0?lt(E.__webglFramebuffer[0],I,0):lt(E.__webglFramebuffer,I,0)}else if(V){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=n.createRenderbuffer(),Xe(E.__webglDepthbuffer[W],I,!1);else{let j=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,he)}}else{let W=I.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Xe(E.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(I,E,V){let W=i.get(I);E!==void 0&&we(W.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&se(I)}function le(I){let E=I.texture,V=i.get(I),W=i.get(E);I.addEventListener("dispose",_);let j=I.textures,he=I.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=E.version,o.memory.textures++),he){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let re=0;re<E.mipmaps.length;re++)V.__webglFramebuffer[Q][re]=n.createFramebuffer()}else V.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)V.__webglFramebuffer[Q]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Q=0,re=j.length;Q<re;Q++){let ve=i.get(j[Q]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Qe(I)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let re=j[Q];V.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let ve=r.convert(re.format,re.colorSpace),ke=r.convert(re.type),xe=v(re.internalFormat,ve,ke,re.normalized,re.colorSpace,I.isXRRenderTarget===!0),me=$e(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,xe,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Je(n.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)we(V.__webglFramebuffer[Q][re],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,re);else we(V.__webglFramebuffer[Q],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(E)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Q=0,re=j.length;Q<re;Q++){let ve=j[Q],ke=i.get(ve),xe=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,ke.__webglTexture),Je(xe,ve),we(V.__webglFramebuffer,I,ve,n.COLOR_ATTACHMENT0+Q,xe,0),m(ve)&&y(xe)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),Je(Q,E),E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)we(V.__webglFramebuffer[re],I,E,n.COLOR_ATTACHMENT0,Q,re);else we(V.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Q,0);m(E)&&y(Q),t.unbindTexture()}I.depthBuffer&&se(I)}function ce(I){let E=I.textures;for(let V=0,W=E.length;V<W;V++){let j=E[V];if(m(j)){let he=b(I),pe=i.get(j).__webglTexture;t.bindTexture(he,pe),y(he),t.unbindTexture()}}}let fe=[],We=[];function ze(I){if(I.samples>0){if(Qe(I)===!1){let E=I.textures,V=I.width,W=I.height,j=n.COLOR_BUFFER_BIT,he=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(I),Q=E.length>1;if(Q)for(let ve=0;ve<E.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let re=I.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);let ke=i.get(E[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,V,W,0,0,V,W,j,n.NEAREST),l===!0&&(fe.length=0,We.length=0,fe.push(n.COLOR_ATTACHMENT0+ve),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(fe.push(he),We.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ve=0;ve<E.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ve]);let ke=i.get(E[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function $e(I){return Math.min(s.maxSamples,I.samples)}function Qe(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function O(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function yt(I,E){let V=I.colorSpace,W=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==To&&V!==hi&&(pt.getTransfer(V)===St?(W!==bn||j!==_n)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",V)),E}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.getTextureUnits=D,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=ae,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function V_(n,e){function t(i,s=hi){let r,o=pt.getTransfer(s);if(i===_n)return n.UNSIGNED_BYTE;if(i===hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Iu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cu)return n.BYTE;if(i===Pu)return n.SHORT;if(i===Gr)return n.UNSIGNED_SHORT;if(i===cc)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Ot)return n.HALF_FLOAT;if(i===Du)return n.ALPHA;if(i===Nu)return n.RGB;if(i===bn)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===dc)return n.RED;if(i===fc)return n.RED_INTEGER;if(i===ms)return n.RG;if(i===pc)return n.RG_INTEGER;if(i===mc)return n.RGBA_INTEGER;if(i===ga||i===xa||i===ya||i===va)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===xc||i===yc||i===vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_c||i===bc||i===Sc||i===Mc||i===Ec||i===_a||i===Tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_c||i===bc)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mc)return r.COMPRESSED_R11_EAC;if(i===Ec)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_a)return r.COMPRESSED_RG11_EAC;if(i===Tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===kc||i===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ac)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ic)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hc)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zc||i===Gc||i===Vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===zc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bc||i===Wc||i===ba||i===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W_=`
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

}`,ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xt({vertexShader:B_,fragmentShader:W_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ld=class extends Si{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new ad,m={},y=t.getContextAttributes(),b=null,v=null,S=[],M=[],w=new te,_=null,T=null,A=new un;A.viewport=new wt;let P=new un;P.viewport=new wt;let L=[A,P],U=new ic,D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=S[K];return ee===void 0&&(ee=new Er,S[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=S[K];return ee===void 0&&(ee=new Er,S[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=S[K];return ee===void 0&&(ee=new Er,S[K]=ee),ee.getHandSpace()};function z(K){let ee=M.indexOf(K.inputSource);if(ee===-1)return;let ue=S[ee];ue!==void 0&&(ue.update(K.inputSource,K.frame,c||o),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",G);for(let K=0;K<S.length;K++){let ee=M[K];ee!==null&&(M[K]=null,S[K].disconnect(ee))}D=null,N=null,g.reset();for(let K in m)delete m[K];if(e.setRenderTarget(b),d=null,f=null,u=null,s=null,v=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),T!==null){let K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",B),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ue=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=y.stencil?Ai:bi,Ue=y.stencil?ps:ci);let Xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new It(f.textureWidth,f.textureHeight,{format:bn,type:_n,depthTexture:new Zn(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new It(d.framebufferWidth,d.framebufferHeight,{format:bn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(K){for(let ee=0;ee<K.removed.length;ee++){let ue=K.removed[ee],Ue=M.indexOf(ue);Ue>=0&&(M[Ue]=null,S[Ue].disconnect(ue))}for(let ee=0;ee<K.added.length;ee++){let ue=K.added[ee],Ue=M.indexOf(ue);if(Ue===-1){for(let Xe=0;Xe<S.length;Xe++)if(Xe>=M.length){M.push(ue),Ue=Xe;break}else if(M[Xe]===null){M[Xe]=ue,Ue=Xe;break}if(Ue===-1)break}let we=S[Ue];we&&we.connect(ue)}}let F=new C,Z=new C;function Y(K,ee,ue){F.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);let Ue=F.distanceTo(Z),we=ee.projectionMatrix.elements,Xe=ue.projectionMatrix.elements,lt=we[14]/(we[10]-1),se=we[14]/(we[10]+1),ae=(we[9]+1)/we[5],le=(we[9]-1)/we[5],ce=(we[8]-1)/we[0],fe=(Xe[8]+1)/Xe[0],We=lt*ce,ze=lt*fe,$e=Ue/(-ce+fe),Qe=$e*-ce;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Qe),K.translateZ($e),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let O=lt+$e,yt=se+$e,ot=We-Qe,I=ze+(Ue-Qe),E=ae*se/yt*O,V=le*se/yt*O;K.projectionMatrix.makePerspective(ot,I,E,V,O,yt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ye(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,ue=K.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),U.near=P.near=A.near=ee,U.far=P.far=A.far=ue,(D!==U.near||N!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,N=U.far),U.layers.mask=K.layers.mask|6,A.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let Ue=K.parent,we=U.cameras;ye(U,Ue);for(let Xe=0;Xe<we.length;Xe++)ye(we[Xe],Ue);we.length===2?Y(U,A,P):U.projectionMatrix.copy(A.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),de(K,U,Ue)};function de(K,ee,ue){ue===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Sr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return m[K]};let nt=null;function Je(K,ee){if(h=ee.getViewerPose(c||o),p=ee,h!==null){let ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ue=!1;ue.length!==U.cameras.length&&(U.cameras.length=0,Ue=!0);for(let se=0;se<ue.length;se++){let ae=ue[se],le=null;if(d!==null)le=d.getViewport(ae);else{let fe=u.getViewSubImage(f,ae);le=fe.viewport,se===0&&(e.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(v))}let ce=L[se];ce===void 0&&(ce=new un,ce.layers.enable(se),ce.viewport=new wt,L[se]=ce),ce.matrix.fromArray(ae.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ae.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),se===0&&(U.matrix.copy(ce.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ue===!0&&U.cameras.push(ce)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let se=u.getDepthInformation(ue[0]);se&&se.isValid&&se.texture&&g.init(se,s.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let se=0;se<ue.length;se++){let ae=ue[se].camera;if(ae){let le=m[ae];le||(le=new ko,m[ae]=le);let ce=u.getCameraImage(ae);le.sourceTexture=ce}}}}for(let ue=0;ue<S.length;ue++){let Ue=M[ue],we=S[ue];Ue!==null&&we!==void 0&&we.update(Ue,ee,c||o)}nt&&nt(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),p=null}let st=new Qp;st.setAnimationLoop(Je),this.setAnimationLoop=function(K){nt=K},this.dispose=function(){}}},X_=new Be,r0=new tt;r0.set(-1,0,0,0,1,0,0,0,1);function q_(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Hu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,b,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),b=y.envMap,v=y.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(X_.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(r0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Y_(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let M=S.program;i.uniformBlockBinding(v,M)}function c(v,S){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",y));let w=S.program;i.updateUBOMapping(v,w);let _=e.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){let S=u();v.__bindingPointIndex=S;let M=n.createBuffer(),w=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let S=s[v.id],M=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,T=M.length;_<T;_++){let A=M[_];if(Array.isArray(A))for(let P=0,L=A.length;P<L;P++)d(A[P],_,P,w);else d(A,_,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,S,M,w){if(x(v,S,M,w)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let A=0;for(let P=0;P<T.length;P++){let L=T[P],U=m(L);p(L,v.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function p(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function x(v,S,M,w){let _=v.value,T=S+"_"+M;if(w[T]===void 0)return typeof _=="number"||typeof _=="boolean"?w[T]=_:ArrayBuffer.isView(_)?w[T]=_.slice():w[T]=_.clone(),!0;{let A=w[T];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return w[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function g(v){let S=v.uniforms,M=0,w=16;for(let T=0,A=S.length;T<A;T++){let P=Array.isArray(S[T])?S[T]:[S[T]];for(let L=0,U=P.length;L<U;L++){let D=P[L],N=Array.isArray(D.value)?D.value:[D.value];for(let z=0,B=N.length;z<B;z++){let G=N[z],F=m(G),Z=M%w,Y=Z%F.boundary,ye=Z+Y;M+=Y,ye!==0&&w-ye<F.storage&&(M+=w-ye),D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=F.storage}}}let _=M%w;return _>0&&(M+=w-_),v.__size=M,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function b(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:b}}var Z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function $_(){return Ri===null&&(Ri=new Vi(Z_,16,16,ms,Ot),Ri.name="DFG_LUT",Ri.minFilter=nn,Ri.magFilter=nn,Ri.wrapS=Wn,Ri.wrapT=Wn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var Kc=class{constructor(e={}){let{canvas:t=_p(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=d,g=new Set([mc,pc,fc]),m=new Set([_n,ci,Gr,ps,hc,uc]),y=new Uint32Array(4),b=new Int32Array(4),v=new C,S=null,M=null,w=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,L=null,U=null,D=null,N=null;this._outputColorSpace=Gt;let z=0,B=0,G=null,F=-1,Z=null,Y=new wt,ye=new wt,de=null,nt=new ge(0),Je=0,st=t.width,K=t.height,ee=1,ue=null,Ue=null,we=new wt(0,0,st,K),Xe=new wt(0,0,st,K),lt=!1,se=new Rr,ae=!1,le=!1,ce=new Be,fe=new C,We=new wt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Qe(){return G===null?ee:1}let O=i;function yt(R,k){return t.getContext(R,k)}let ot,I,E,V,W,j,he,pe,Q,re,ve,ke,xe,me,Ie,Ge,et,H,be,ne,Se,Ae,oe;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",ei,!1),O===null){let k="webgl2";if(O=yt(k,R),O===null)throw yt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(R){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),je("WebGLRenderer: "+R.message),R}function Ve(){ot=new nv(O),ot.init(),Se=new V_(O,ot),I=new q1(O,ot,e,Se),E=new z_(O,ot),I.reversedDepthBuffer&&f&&E.buffers.depth.setReversed(!0),U=O.createFramebuffer(),D=O.createFramebuffer(),N=O.createFramebuffer(),V=new rv(O),W=new w_,j=new G_(O,ot,E,W,I,Se,V),he=new tv(A),pe=new ax(O),Ae=new W1(O,pe),Q=new iv(O,pe,V,Ae),re=new av(O,Q,pe,Ae,V),H=new ov(O,I,j),Ie=new Y1(W),ve=new T_(A,he,ot,I,Ae,Ie),ke=new q_(A,W),xe=new R_,me=new N_(ot),et=new B1(A,he,E,re,p,l),Ge=new H_(A,re,I),oe=new Y_(O,V,I,E),be=new X1(O,ot,V),ne=new sv(O,ot,V),V.programs=ve.programs,A.capabilities=I,A.extensions=ot,A.properties=W,A.renderLists=xe,A.shadowMap=Ge,A.state=E,A.info=V}x!==_n&&(T=new cv(x,t.width,t.height,a,s,r));let Fe=new ld(A,O);this.xr=Fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(R){R!==void 0&&(ee=R,this.setSize(st,K,!1))},this.getSize=function(R){return R.set(st,K)},this.setSize=function(R,k,$=!0){if(Fe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}st=R,K=k,t.width=Math.floor(R*ee),t.height=Math.floor(k*ee),$===!0&&(t.style.width=R+"px",t.style.height=k+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(st*ee,K*ee).floor()},this.setDrawingBufferSize=function(R,k,$){st=R,K=k,ee=$,t.width=Math.floor(R*$),t.height=Math.floor(k*$),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(x===_n){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Y)},this.getViewport=function(R){return R.copy(we)},this.setViewport=function(R,k,$,X){R.isVector4?we.set(R.x,R.y,R.z,R.w):we.set(R,k,$,X),E.viewport(Y.copy(we).multiplyScalar(ee).round())},this.getScissor=function(R){return R.copy(Xe)},this.setScissor=function(R,k,$,X){R.isVector4?Xe.set(R.x,R.y,R.z,R.w):Xe.set(R,k,$,X),E.scissor(ye.copy(Xe).multiplyScalar(ee).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(R){E.setScissorTest(lt=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){Ue=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,$=!0){let X=0;if(R){let q=!1;if(G!==null){let Te=G.texture.format;q=g.has(Te)}if(q){let Te=G.texture.type,Pe=m.has(Te),Ee=et.getClearColor(),Le=et.getClearAlpha(),He=Ee.r,ct=Ee.g,mt=Ee.b;Pe?(y[0]=He,y[1]=ct,y[2]=mt,y[3]=Le,O.clearBufferuiv(O.COLOR,0,y)):(b[0]=He,b[1]=ct,b[2]=mt,b[3]=Le,O.clearBufferiv(O.COLOR,0,b))}else X|=O.COLOR_BUFFER_BIT}k&&(X|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",ei,!1),et.dispose(),xe.dispose(),me.dispose(),W.dispose(),he.dispose(),re.dispose(),Ae.dispose(),oe.dispose(),ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Jd),Fe.removeEventListener("sessionend",jd),Ms.stop()};function Lt(R){R.preventDefault(),Ro("WebGLRenderer: Context Lost."),P=!0}function Mt(){Ro("WebGLRenderer: Context Restored."),P=!1;let R=V.autoReset,k=Ge.enabled,$=Ge.autoUpdate,X=Ge.needsUpdate,q=Ge.type;Ve(),V.autoReset=R,Ge.enabled=k,Ge.autoUpdate=$,Ge.needsUpdate=X,Ge.type=q}function ei(R){je("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mi(R){let k=R.target;k.removeEventListener("dispose",mi),wm(k)}function wm(R){Am(R),W.remove(R)}function Am(R){let k=W.get(R).programs;k!==void 0&&(k.forEach(function($){ve.releaseProgram($)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,$,X,q,Te){k===null&&(k=ze);let Pe=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ee=Pm(R,k,$,X,q);E.setMaterial(X,Pe);let Le=$.index,He=1;if(X.wireframe===!0){if(Le=Q.getWireframeAttribute($),Le===void 0)return;He=2}let ct=$.drawRange,mt=$.attributes.position,De=ct.start*He,Et=(ct.start+ct.count)*He;Te!==null&&(De=Math.max(De,Te.start*He),Et=Math.min(Et,(Te.start+Te.count)*He)),Le!==null?(De=Math.max(De,0),Et=Math.min(Et,Le.count)):mt!=null&&(De=Math.max(De,0),Et=Math.min(Et,mt.count));let Qt=Et-De;if(Qt<0||Qt===1/0)return;Ae.setup(q,X,Ee,$,Le);let Ut,Pt=be;if(Le!==null&&(Ut=pe.get(Le),Pt=ne,Pt.setIndex(Ut)),q.isMesh)X.wireframe===!0?(E.setLineWidth(X.wireframeLinewidth*Qe()),Pt.setMode(O.LINES)):Pt.setMode(O.TRIANGLES);else if(q.isLine){let gn=X.linewidth;gn===void 0&&(gn=1),E.setLineWidth(gn*Qe()),q.isLineSegments?Pt.setMode(O.LINES):q.isLineLoop?Pt.setMode(O.LINE_LOOP):Pt.setMode(O.LINE_STRIP)}else q.isPoints?Pt.setMode(O.POINTS):q.isSprite&&Pt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Pt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let gn=q._multiDrawStarts,Ce=q._multiDrawCounts,wn=q._multiDrawCount,_t=Le?pe.get(Le).bytesPerElement:1,Vn=W.get(X).currentProgram.getUniforms();for(let gi=0;gi<wn;gi++)Vn.setValue(O,"_gl_DrawID",gi),Pt.render(gn[gi]/_t,Ce[gi])}else if(q.isInstancedMesh)Pt.renderInstances(De,Qt,q.count);else if($.isInstancedBufferGeometry){let gn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ce=Math.min($.instanceCount,gn);Pt.renderInstances(De,Qt,Ce)}else Pt.render(De,Qt)};function Kd(R,k,$,X){L!==null&&R.isNodeMaterial&&L.setObject(X,R),ae===!0&&Ie.setState(R,$,!1),R.transparent===!0&&R.side===$t&&R.forceSinglePass===!1?(R.side=Zt,R.needsUpdate=!0,qa(R,k,X),R.side=ds,R.needsUpdate=!0,qa(R,k,X),R.side=$t):qa(R,k,X)}this.compile=function(R,k,$=null){$===null&&($=R),L!==null&&L.renderStart(R,k,$),M=me.get($),M.init(k),_.push(M),$.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),R!==$&&R.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),le=this.localClippingEnabled,ae=Ie.init(this.clippingPlanes,le),ae===!0&&Ie.setGlobalState(this.clippingPlanes,k),L!==null&&Ge.render(M.state.shadowsArray,$,k);let X=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Te=q.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){let Ee=Te[Pe];Kd(Ee,$,k,q),X.add(Ee)}else Kd(Te,$,k,q),X.add(Te)}),M=_.pop(),L!==null&&L.renderEnd(),X},this.compileAsync=function(R,k,$=null){let X=this.compile(R,k,$);return new Promise(q=>{function Te(){if(X.forEach(function(Pe){let Le=W.get(Pe).currentProgram;(Le===void 0||Le.isReady())&&X.delete(Pe)}),X.size===0){q(R);return}setTimeout(Te,10)}ot.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Uh=null;function Rm(R){Uh&&Uh(R)}function Jd(){Ms.stop()}function jd(){Ms.start()}let Ms=new Qp;Ms.setAnimationLoop(Rm),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(R){Uh=R,Fe.setAnimationLoop(R),R===null?Ms.stop():Ms.start()},Fe.addEventListener("sessionstart",Jd),Fe.addEventListener("sessionend",jd),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(R,k);let $=Fe.enabled===!0&&Fe.isPresenting===!0,X=T!==null&&(G===null||$)&&T.begin(A,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(k),k=Fe.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,k,G),M=me.get(R,_.length),M.init(k),M.state.textureUnits=j.getTextureUnits(),_.push(M),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),se.setFromProjectionMatrix(ce,ri,k.reversedDepth),le=this.localClippingEnabled,ae=Ie.init(this.clippingPlanes,le),S=xe.get(R,w.length),S.init(),w.push(S),Fe.enabled===!0&&Fe.isPresenting===!0){let Pe=A.xr.getDepthSensingMesh();Pe!==null&&Oh(Pe,k,-1/0,A.sortObjects)}Oh(R,k,0,A.sortObjects),S.finish(),L!==null&&L.updateLights(M.state.lightsArray),A.sortObjects===!0&&S.sort(ue,Ue),$e=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,$e&&et.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ie.beginShadows();let q=M.state.shadowsArray;if(Ge.render(q,R,k),ae===!0&&Ie.endShadows(),(X&&T.hasRenderPass())===!1){let Pe=S.opaque,Ee=S.transmissive;if(M.setupLights(),k.isArrayCamera){let Le=k.cameras;if(Ee.length>0)for(let He=0,ct=Le.length;He<ct;He++){let mt=Le[He];ef(Pe,Ee,R,mt)}$e&&et.render(R);for(let He=0,ct=Le.length;He<ct;He++){let mt=Le[He];Qd(S,R,mt,mt.viewport)}}else Ee.length>0&&ef(Pe,Ee,R,k),$e&&et.render(R),Qd(S,R,k)}G!==null&&B===0&&(j.updateMultisampleRenderTarget(G),j.updateRenderTargetMipmap(G)),X&&T.end(A),R.isScene===!0&&R.onAfterRender(A,R,k),Ae.resetDefaultState(),F=-1,Z=null,_.pop(),_.length>0?(M=_[_.length-1],j.setTextureUnits(M.state.textureUnits),ae===!0&&Ie.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,L!==null&&L.renderEnd()};function Oh(R,k,$,X){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLightProbeGrid)M.pushLightProbeGrid(R);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(se)){X&&We.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ce);let Pe=re.update(R),Ee=R.material;Ee.visible&&S.push(R,Pe,Ee,$,We.z,null,k)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(se))){let Pe=re.update(R),Ee=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),We.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),We.copy(Pe.boundingSphere.center)),We.applyMatrix4(R.matrixWorld).applyMatrix4(ce)),Array.isArray(Ee)){let Le=Pe.groups;for(let He=0,ct=Le.length;He<ct;He++){let mt=Le[He],De=Ee[mt.materialIndex];De&&De.visible&&S.push(R,Pe,De,$,We.z,mt,k)}}else Ee.visible&&S.push(R,Pe,Ee,$,We.z,null,k)}}let Te=R.children;for(let Pe=0,Ee=Te.length;Pe<Ee;Pe++)Oh(Te[Pe],k,$,X)}function Qd(R,k,$,X){let{opaque:q,transmissive:Te,transparent:Pe}=R;M.setupLightsView($),ae===!0&&Ie.setGlobalState(A.clippingPlanes,$),X&&E.viewport(Y.copy(X)),q.length>0&&Xa(q,k,$),Te.length>0&&Xa(Te,k,$),Pe.length>0&&Xa(Pe,k,$),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ef(R,k,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){let De=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new It(1,1,{generateMipmaps:!0,type:De?Ot:_n,minFilter:Ln,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Te=M.state.transmissionRenderTarget[X.id],Pe=X.viewport||Y;Te.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);let Ee=A.getRenderTarget(),Le=A.getActiveCubeFace(),He=A.getActiveMipmapLevel();A.setRenderTarget(Te),A.getClearColor(nt),Je=A.getClearAlpha(),Je<1&&A.setClearColor(16777215,.5),A.clear(),$e&&et.render($);let ct=A.toneMapping;A.toneMapping=li;let mt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),ae===!0&&Ie.setGlobalState(A.clippingPlanes,X),Xa(R,$,X),j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te),ot.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Et=0,Qt=k.length;Et<Qt;Et++){let Ut=k[Et],{object:Pt,geometry:gn,material:Ce,group:wn}=Ut;if(Ce.side===$t&&Pt.layers.test(X.layers)){let _t=Ce.side;Ce.side=Zt,Ce.needsUpdate=!0,tf(Pt,$,X,gn,Ce,wn),Ce.side=_t,Ce.needsUpdate=!0,De=!0}}De===!0&&(j.updateMultisampleRenderTarget(Te),j.updateRenderTargetMipmap(Te))}A.setRenderTarget(Ee,Le,He),A.setClearColor(nt,Je),mt!==void 0&&(X.viewport=mt),A.toneMapping=ct}function Xa(R,k,$){let X=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Te=R.length;q<Te;q++){let Pe=R[q],{object:Ee,geometry:Le,group:He}=Pe,ct=Pe.material;ct.allowOverride===!0&&X!==null&&(ct=X),Ee.layers.test($.layers)&&tf(Ee,k,$,Le,ct,He)}}function tf(R,k,$,X,q,Te){L!==null&&q.isNodeMaterial&&L.setObject(R,q),R.onBeforeRender(A,k,$,X,q,Te),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(A,k,$,X,R,Te),q.transparent===!0&&q.side===$t&&q.forceSinglePass===!1?(q.side=Zt,q.needsUpdate=!0,A.renderBufferDirect($,k,X,q,R,Te),q.side=ds,q.needsUpdate=!0,A.renderBufferDirect($,k,X,q,R,Te),q.side=$t):A.renderBufferDirect($,k,X,q,R,Te),R.onAfterRender(A,k,$,X,q,Te)}function qa(R,k,$){k.isScene!==!0&&(k=ze);let X=W.get(R),q=M.state.lights,Te=M.state.shadowsArray,Pe=q.state.version,Ee=ve.getParameters(R,q.state,Te,k,$,M.state.lightProbeGridArray),Le=ve.getProgramCacheKey(Ee),He=X.programs;X.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;let ct=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;X.envMap=he.get(R.envMap||X.environment,ct),X.envMapRotation=X.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",mi),He=new Map,X.programs=He);let mt=He.get(Le);if(mt!==void 0){if(X.currentProgram===mt&&X.lightsStateVersion===Pe)return sf(R,Ee),mt}else Ee.uniforms=ve.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,$,Ee),R.onBeforeCompile(Ee,A),mt=ve.acquireProgram(Ee,Le),He.set(Le,mt),X.uniforms=Ee.uniforms;let De=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(De.clippingPlanes=Ie.uniform),sf(R,Ee),X.needsLights=Lm(R),X.lightsStateVersion=Pe,X.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.sunLights.value=q.state.sun,De.sunLightShadows.value=q.state.sunShadow,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.sunShadowMatrix.value=q.state.sunShadowMatrix,De.sunShadowCascade.value=q.state.sunShadowCascade,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=mt,X.uniformsList=null,mt}function nf(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=Wr.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function sf(R,k){let $=W.get(R);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Cm(R,k){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let $=0,X=R.length;$<X;$++){let q=R[$];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function Pm(R,k,$,X,q){k.isScene!==!0&&(k=ze),j.resetTextureUnits();let Te=k.fog,Pe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,Ee=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:pt.workingColorSpace,Le=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,He=he.get(X.envMap||Pe,Le),ct=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,mt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!$.morphAttributes.position,Et=!!$.morphAttributes.normal,Qt=!!$.morphAttributes.color,Ut=li;X.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ut=A.toneMapping);let Pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gn=Pt!==void 0?Pt.length:0,Ce=W.get(X),wn=M.state.lights;if(ae===!0&&(le===!0||R!==Z)){let Dt=R===Z&&X.id===F;Ie.setState(X,R,Dt)}let _t=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==wn.state.version||Ce.outputColorSpace!==Ee||q.isBatchedMesh&&Ce.batching===!1||!q.isBatchedMesh&&Ce.batching===!0||q.isBatchedMesh&&Ce.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ce.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ce.instancing===!1||!q.isInstancedMesh&&Ce.instancing===!0||q.isSkinnedMesh&&Ce.skinning===!1||!q.isSkinnedMesh&&Ce.skinning===!0||q.isInstancedMesh&&Ce.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ce.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ce.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ce.instancingMorph===!1&&q.morphTexture!==null||Ce.envMap!==He||X.fog===!0&&Ce.fog!==Te||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ie.numPlanes||Ce.numIntersection!==Ie.numIntersection)||Ce.vertexAlphas!==ct||Ce.vertexTangents!==mt||Ce.morphTargets!==De||Ce.morphNormals!==Et||Ce.morphColors!==Qt||Ce.toneMapping!==Ut||Ce.morphTargetsCount!==gn||!!Ce.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ce.__version=X.version);let Vn=Ce.currentProgram;_t===!0&&(Vn=qa(X,k,q),L&&X.isNodeMaterial&&L.onUpdateProgram(X,Vn,Ce));let gi=!1,$i=!1,$s=!1,Rt=Vn.getUniforms(),qt=Ce.uniforms;if(E.useProgram(Vn.program)&&(gi=!0,$i=!0,$s=!0),X.id!==F&&(F=X.id,$i=!0),Ce.needsLights){let Dt=Cm(M.state.lightProbeGridArray,q);Ce.lightProbeGrid!==Dt&&(Ce.lightProbeGrid=Dt,$i=!0)}if(gi||Z!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(O,"projectionMatrix",R.projectionMatrix),Rt.setValue(O,"viewMatrix",R.matrixWorldInverse);let Ji=Rt.map.cameraPosition;Ji!==void 0&&Ji.setValue(O,fe.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,$i=!0,$s=!0)}if(Ce.needsLights&&(wn.state.sunShadowMap.length>0&&Rt.setValue(O,"sunShadowMap",wn.state.sunShadowMap,j),wn.state.directionalShadowMap.length>0&&Rt.setValue(O,"directionalShadowMap",wn.state.directionalShadowMap,j),wn.state.spotShadowMap.length>0&&Rt.setValue(O,"spotShadowMap",wn.state.spotShadowMap,j),wn.state.pointShadowMap.length>0&&Rt.setValue(O,"pointShadowMap",wn.state.pointShadowMap,j)),q.isSkinnedMesh){Rt.setOptional(O,q,"bindMatrix"),Rt.setOptional(O,q,"bindMatrixInverse");let Dt=q.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Rt.setValue(O,"boneTexture",Dt.boneTexture,j))}q.isBatchedMesh&&(Rt.setOptional(O,q,"batchingTexture"),Rt.setValue(O,"batchingTexture",q._matricesTexture,j),Rt.setOptional(O,q,"batchingIdTexture"),Rt.setValue(O,"batchingIdTexture",q._indirectTexture,j),Rt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Rt.setValue(O,"batchingColorTexture",q._colorsTexture,j));let Ki=$.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&H.update(q,$,Vn),($i||Ce.receiveShadow!==q.receiveShadow)&&(Ce.receiveShadow=q.receiveShadow,Rt.setValue(O,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(qt.envMapIntensity.value=k.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=$_()),$i){if(Rt.setValue(O,"toneMappingExposure",A.toneMappingExposure),Ce.needsLights&&Im(qt,$s),Te&&X.fog===!0&&ke.refreshFogUniforms(qt,Te),ke.refreshMaterialUniforms(qt,X,ee,K,M.state.transmissionRenderTarget[R.id]),Ce.needsLights&&Ce.lightProbeGrid){let Dt=Ce.lightProbeGrid;qt.probesSH.value=Dt.texture,qt.probesMin.value.copy(Dt.boundingBox.min),qt.probesMax.value.copy(Dt.boundingBox.max),qt.probesResolution.value.copy(Dt.resolution)}Wr.upload(O,nf(Ce),qt,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Wr.upload(O,nf(Ce),qt,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(O,"center",q.center),Rt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Rt.setValue(O,"normalMatrix",q.normalMatrix),Rt.setValue(O,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Dt=X.uniformsGroups;for(let Ji=0,Ks=Dt.length;Ji<Ks;Ji++){let of=Dt[Ji];oe.update(of,Vn),oe.bind(of,Vn)}}return Vn}function Im(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.sunLights.needsUpdate=k,R.sunLightShadows.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Lm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,k,$){let X=W.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(R.texture).__webglTexture=k,W.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){let $=W.get(R);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,$=0){G=R,z=k,B=$;let X=null,q=!1,Te=!1;if(R){let Ee=W.get(R);if(Ee.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(O.FRAMEBUFFER,Ee.__webglFramebuffer),Y.copy(R.viewport),ye.copy(R.scissor),de=R.scissorTest,E.viewport(Y),E.scissor(ye),E.setScissorTest(de),F=-1;return}else if(Ee.__webglFramebuffer===void 0)j.setupRenderTarget(R);else if(Ee.__hasExternalTextures)j.rebindTextures(R,W.get(R.texture).__webglTexture,W.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ct=R.depthTexture;if(Ee.__boundDepthTexture!==ct){if(ct!==null&&W.has(ct)&&(R.width!==ct.image.width||R.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(R)}}let Le=R.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Te=!0);let He=W.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(He[k])?X=He[k][$]:X=He[k],q=!0):R.samples>0&&j.useMultisampledRTT(R)===!1?X=W.get(R).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[$]:X=He,Y.copy(R.viewport),ye.copy(R.scissor),de=R.scissorTest}else Y.copy(we).multiplyScalar(ee).floor(),ye.copy(Xe).multiplyScalar(ee).floor(),de=lt;if($!==0&&(X=U),E.bindFramebuffer(O.FRAMEBUFFER,X)&&E.drawBuffers(R,X),E.viewport(Y),E.scissor(ye),E.setScissorTest(de),q){let Ee=W.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,$)}else if(Te){let Ee=k;for(let Le=0;Le<R.textures.length;Le++){let He=W.get(R.textures[Le]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Le,He.__webglTexture,$,Ee)}}else if(R!==null&&$!==0){let Ee=W.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ee.__webglTexture,$)}F=-1};function rf(R){let k=W.get(R);return(k.__readFormat!==R.format||k.__readType!==R.type)&&(k.__readFormat=R.format,k.__readType=R.type,k.__formatReadable=I.textureFormatReadable(R.format),k.__typeReadable=I.textureTypeReadable(R.type)),k}this.readRenderTargetPixels=function(R,k,$,X,q,Te,Pe,Ee=0){if(!(R&&R.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=W.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le){E.bindFramebuffer(O.FRAMEBUFFER,Le);try{let He=R.textures[Ee],ct=He.format,mt=He.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ee);let De=rf(He);if(De.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-X&&$>=0&&$<=R.height-q&&O.readPixels(k,$,X,q,Se.convert(ct),Se.convert(mt),Te)}finally{let He=G!==null?W.get(G).__webglFramebuffer:null;E.bindFramebuffer(O.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,k,$,X,q,Te,Pe,Ee=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=W.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le)if(k>=0&&k<=R.width-X&&$>=0&&$<=R.height-q){E.bindFramebuffer(O.FRAMEBUFFER,Le);let He=R.textures[Ee],ct=He.format,mt=He.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ee);let De=rf(He);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.bufferData(O.PIXEL_PACK_BUFFER,Te.byteLength,O.STREAM_READ),O.readPixels(k,$,X,q,Se.convert(ct),Se.convert(mt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Qt=G!==null?W.get(G).__webglFramebuffer:null;E.bindFramebuffer(O.FRAMEBUFFER,Qt);let Ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Sp(O,Ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Te),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Et),O.deleteSync(Ut),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,$=0){let X=Math.pow(2,-$),q=Math.floor(R.image.width*X),Te=Math.floor(R.image.height*X),Pe=k!==null?k.x:0,Ee=k!==null?k.y:0;j.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Pe,Ee,q,Te),E.unbindTexture()},this.copyTextureToTexture=function(R,k,$=null,X=null,q=0,Te=0){let Pe,Ee,Le,He,ct,mt,De,Et,Qt,Ut=R.isCompressedTexture?R.mipmaps[Te]:R.image;if($!==null)Pe=$.max.x-$.min.x,Ee=$.max.y-$.min.y,Le=$.isBox3?$.max.z-$.min.z:1,He=$.min.x,ct=$.min.y,mt=$.isBox3?$.min.z:0;else{let qt=Math.pow(2,-q);Pe=Math.floor(Ut.width*qt),Ee=Math.floor(Ut.height*qt),R.isDataArrayTexture?Le=Ut.depth:R.isData3DTexture?Le=Math.floor(Ut.depth*qt):Le=1,He=0,ct=0,mt=0}X!==null?(De=X.x,Et=X.y,Qt=X.z):(De=0,Et=0,Qt=0);let Pt=Se.convert(k.format),gn=Se.convert(k.type),Ce;k.isData3DTexture?(j.setTexture3D(k,0),Ce=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(j.setTexture2DArray(k,0),Ce=O.TEXTURE_2D_ARRAY):(j.setTexture2D(k,0),Ce=O.TEXTURE_2D),E.activeTexture(O.TEXTURE0),E.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let wn=E.getParameter(O.UNPACK_ROW_LENGTH),_t=E.getParameter(O.UNPACK_IMAGE_HEIGHT),Vn=E.getParameter(O.UNPACK_SKIP_PIXELS),gi=E.getParameter(O.UNPACK_SKIP_ROWS),$i=E.getParameter(O.UNPACK_SKIP_IMAGES);E.pixelStorei(O.UNPACK_ROW_LENGTH,Ut.width),E.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut.height),E.pixelStorei(O.UNPACK_SKIP_PIXELS,He),E.pixelStorei(O.UNPACK_SKIP_ROWS,ct),E.pixelStorei(O.UNPACK_SKIP_IMAGES,mt);let $s=R.isDataArrayTexture||R.isData3DTexture,Rt=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){let qt=W.get(R),Ki=W.get(k),Dt=W.get(qt.__renderTarget),Ji=W.get(Ki.__renderTarget);E.bindFramebuffer(O.READ_FRAMEBUFFER,Dt.__webglFramebuffer),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Ks=0;Ks<Le;Ks++)$s&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(R).__webglTexture,q,mt+Ks),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(k).__webglTexture,Te,Qt+Ks)),O.blitFramebuffer(He,ct,Pe,Ee,De,Et,Pe,Ee,O.DEPTH_BUFFER_BIT,O.NEAREST);E.bindFramebuffer(O.READ_FRAMEBUFFER,null),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||W.has(R)){let qt=W.get(R),Ki=W.get(k);E.bindFramebuffer(O.READ_FRAMEBUFFER,D),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let Dt=0;Dt<Le;Dt++)$s?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qt.__webglTexture,q,mt+Dt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,qt.__webglTexture,q),Rt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ki.__webglTexture,Te,Qt+Dt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ki.__webglTexture,Te),q!==0?O.blitFramebuffer(He,ct,Pe,Ee,De,Et,Pe,Ee,O.COLOR_BUFFER_BIT,O.NEAREST):Rt?O.copyTexSubImage3D(Ce,Te,De,Et,Qt+Dt,He,ct,Pe,Ee):O.copyTexSubImage2D(Ce,Te,De,Et,He,ct,Pe,Ee);E.bindFramebuffer(O.READ_FRAMEBUFFER,null),E.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Rt?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Ce,Te,De,Et,Qt,Pe,Ee,Le,Pt,gn,Ut.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Ce,Te,De,Et,Qt,Pe,Ee,Le,Pt,Ut.data):O.texSubImage3D(Ce,Te,De,Et,Qt,Pe,Ee,Le,Pt,gn,Ut):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Te,De,Et,Pe,Ee,Pt,gn,Ut.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Te,De,Et,Ut.width,Ut.height,Pt,Ut.data):O.texSubImage2D(O.TEXTURE_2D,Te,De,Et,Pe,Ee,Pt,gn,Ut);E.pixelStorei(O.UNPACK_ROW_LENGTH,wn),E.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t),E.pixelStorei(O.UNPACK_SKIP_PIXELS,Vn),E.pixelStorei(O.UNPACK_SKIP_ROWS,gi),E.pixelStorei(O.UNPACK_SKIP_IMAGES,$i),Te===0&&k.generateMipmaps&&O.generateMipmap(Ce),E.unbindTexture()},this.initRenderTarget=function(R){W.get(R).__webglFramebuffer===void 0&&j.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?j.setTextureCube(R,0):R.isData3DTexture?j.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?j.setTexture2DArray(R,0):j.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){z=0,B=0,G=null,E.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Zr=class n extends J{constructor(){let e=n.SkyShader,t=new xt({name:e.name,uniforms:Jt.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Zt,depthWrite:!1});super(new Ye(1,1,1),t),this.isSky=!0}};Zr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new C},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Pi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},K_=new us(-1,1,1,-1,0,1),hd=class extends ft{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},J_=new hd,Ii=class{constructor(e){this._mesh=new J(J_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,K_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var $r=class extends Cn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jt.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ii(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wa=class extends Cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Qc=class extends Cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var eh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ot}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $r(Pi),this.copyPass.material.blending=Kt,this.timer=new ra}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wa!==void 0&&(o instanceof wa?i=!0:o instanceof Qc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var th=class extends Cn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var o0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Kr=class n extends Cn{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new It(r,o,{type:Ot,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new It(r,o,{type:Ot,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new It(r,o,{type:Ot,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=o0;this.highPassUniforms=Jt.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Jt.clone(Pi.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,premultipliedAlpha:!0,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new Ht,this._fsQuad=new Ii(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Kr.BlurDirectionX=new te(1,0);Kr.BlurDirectionY=new te(0,1);var Aa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var nh=class extends Cn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Jt.clone(Aa.uniforms),this.material=new Ur({name:Aa.name,uniforms:this.uniforms,vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader}),this._fsQuad=new Ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Us?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===da&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ra={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Be},cameraProjectionMatrixInverse:{value:new Be},cameraWorldMatrix:{value:new Be},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ca={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ih={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function a0(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=j_(e),i=t.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=t[o],l=2*Math.PI*a/i,c=new C(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Vi(s,e,e);return r.wrapS=In,r.wrapT=In,r.needsUpdate=!0,r}function j_(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),i[s*e+r]!==0){r-=2,s++;continue}else i[s*e+r]=o++;r++,s--}return i}var Pa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:ud(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraProjectionMatrixInverse:{value:new Be},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function ud(n,e,t){let i=Q_(n,e,t),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function Q_(n,e,t){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*e*s/n,o=Math.pow(s/(n-1),t);i.push(new C(Math.cos(r),Math.sin(r),o))}return i}var sh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,p=e-f,x=t-d,g,m;p>x?(g=1,m=0):(g=0,m=1);let y=p-g+h,b=x-m+h,v=p-1+2*h,S=x-1+2*h,M=l&255,w=c&255,_=this.perm[M+this.perm[w]]%12,T=this.perm[M+g+this.perm[w+m]]%12,A=this.perm[M+1+this.perm[w+1]]%12,P=.5-p*p-x*x;P<0?i=0:(P*=P,i=P*P*this._dot(this.grad3[_],p,x));let L=.5-y*y-b*b;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[T],y,b));let U=.5-v*v-S*S;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[A],v,S)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a,c=(e+t+i)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(i+c),d=1/6,p=(h+u+f)*d,x=h-p,g=u-p,m=f-p,y=e-x,b=t-g,v=i-m,S,M,w,_,T,A;y>=b?b>=v?(S=1,M=0,w=0,_=1,T=1,A=0):y>=v?(S=1,M=0,w=0,_=1,T=0,A=1):(S=0,M=0,w=1,_=1,T=0,A=1):b<v?(S=0,M=0,w=1,_=0,T=1,A=1):y<v?(S=0,M=1,w=0,_=0,T=1,A=1):(S=0,M=1,w=0,_=1,T=1,A=0);let P=y-S+d,L=b-M+d,U=v-w+d,D=y-_+2*d,N=b-T+2*d,z=v-A+2*d,B=y-1+3*d,G=b-1+3*d,F=v-1+3*d,Z=h&255,Y=u&255,ye=f&255,de=this.perm[Z+this.perm[Y+this.perm[ye]]]%12,nt=this.perm[Z+S+this.perm[Y+M+this.perm[ye+w]]]%12,Je=this.perm[Z+_+this.perm[Y+T+this.perm[ye+A]]]%12,st=this.perm[Z+1+this.perm[Y+1+this.perm[ye+1]]]%12,K=.6-y*y-b*b-v*v;K<0?s=0:(K*=K,s=K*K*this._dot3(this.grad3[de],y,b,v));let ee=.6-P*P-L*L-U*U;ee<0?r=0:(ee*=ee,r=ee*ee*this._dot3(this.grad3[nt],P,L,U));let ue=.6-D*D-N*N-z*z;ue<0?o=0:(ue*=ue,o=ue*ue*this._dot3(this.grad3[Je],D,N,z));let Ue=.6-B*B-G*G-F*F;return Ue<0?a=0:(Ue*=Ue,a=Ue*Ue*this._dot3(this.grad3[st],B,G,F)),32*(s+r+o+a)}noise4d(e,t,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,p,x=(e+t+i+s)*l,g=Math.floor(e+x),m=Math.floor(t+x),y=Math.floor(i+x),b=Math.floor(s+x),v=(g+m+y+b)*c,S=g-v,M=m-v,w=y-v,_=b-v,T=e-S,A=t-M,P=i-w,L=s-_,U=T>A?32:0,D=T>P?16:0,N=A>P?8:0,z=T>L?4:0,B=A>L?2:0,G=P>L?1:0,F=U+D+N+z+B+G,Z=o[F][0]>=3?1:0,Y=o[F][1]>=3?1:0,ye=o[F][2]>=3?1:0,de=o[F][3]>=3?1:0,nt=o[F][0]>=2?1:0,Je=o[F][1]>=2?1:0,st=o[F][2]>=2?1:0,K=o[F][3]>=2?1:0,ee=o[F][0]>=1?1:0,ue=o[F][1]>=1?1:0,Ue=o[F][2]>=1?1:0,we=o[F][3]>=1?1:0,Xe=T-Z+c,lt=A-Y+c,se=P-ye+c,ae=L-de+c,le=T-nt+2*c,ce=A-Je+2*c,fe=P-st+2*c,We=L-K+2*c,ze=T-ee+3*c,$e=A-ue+3*c,Qe=P-Ue+3*c,O=L-we+3*c,yt=T-1+4*c,ot=A-1+4*c,I=P-1+4*c,E=L-1+4*c,V=g&255,W=m&255,j=y&255,he=b&255,pe=a[V+a[W+a[j+a[he]]]]%32,Q=a[V+Z+a[W+Y+a[j+ye+a[he+de]]]]%32,re=a[V+nt+a[W+Je+a[j+st+a[he+K]]]]%32,ve=a[V+ee+a[W+ue+a[j+Ue+a[he+we]]]]%32,ke=a[V+1+a[W+1+a[j+1+a[he+1]]]]%32,xe=.6-T*T-A*A-P*P-L*L;xe<0?h=0:(xe*=xe,h=xe*xe*this._dot4(r[pe],T,A,P,L));let me=.6-Xe*Xe-lt*lt-se*se-ae*ae;me<0?u=0:(me*=me,u=me*me*this._dot4(r[Q],Xe,lt,se,ae));let Ie=.6-le*le-ce*ce-fe*fe-We*We;Ie<0?f=0:(Ie*=Ie,f=Ie*Ie*this._dot4(r[re],le,ce,fe,We));let Ge=.6-ze*ze-$e*$e-Qe*Qe-O*O;Ge<0?d=0:(Ge*=Ge,d=Ge*Ge*this._dot4(r[ve],ze,$e,Qe,O));let et=.6-yt*yt-ot*ot-I*I-E*E;return et<0?p=0:(et*=et,p=et*et*this._dot4(r[ke],yt,ot,I,E)),27*(h+u+f+d+p)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}};var Ia=class n extends Cn{constructor(e,t,i=512,s=512,r,o,a){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=a0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new It(this.width,this.height,{type:Ot,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xt({defines:Object.assign({},Ra.defines),uniforms:Jt.clone(Ra.uniforms),vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader,blending:Kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new jo,this.normalMaterial.blending=Kt,this.pdMaterial=new xt({defines:Object.assign({},Pa.defines),uniforms:Jt.clone(Pa.uniforms),vertexShader:Pa.vertexShader,fragmentShader:Pa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xt({defines:Object.assign({},Ca.defines),uniforms:Jt.clone(Ca.uniforms),vertexShader:Ca.vertexShader,fragmentShader:Ca.fragmentShader,blending:Kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xt({uniforms:Jt.clone(Pi.uniforms),vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:la,blendDst:Ns,blendEquation:$n,blendSrcAlpha:aa,blendDstAlpha:Ns,blendEquationAlpha:$n}),this.blendMaterial=new xt({uniforms:Jt.clone(ih.uniforms),vertexShader:ih.vertexShader,fragmentShader:ih.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:rc,blendSrc:la,blendDst:Ns,blendEquation:$n,blendSrcAlpha:aa,blendDstAlpha:Ns,blendEquationAlpha:$n}),this._fsQuad=new Ii(null),this._originalClearColor=new ge,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Zn,this.depthTexture.format=Ai,this.depthTexture.type=ps,this.normalRenderTarget=new It(this.width,this.height,{minFilter:Bt,magFilter:Bt,type:Ot,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ud(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=Kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,i,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new sh,i=e*e*4,s=new Uint8Array(i);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Vi(s,e,e,bn,_n);return r.wrapS=In,r.wrapT=In,r.needsUpdate=!0,r}};Ia.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Nt=Math.PI*2,Ne=Math.tan(Math.PI/8),zn=Math.cos(Math.PI/8),pn=(n,e,t)=>Math.max(e,Math.min(t,n)),eb=(n,e,t)=>n+(e-n)*t;var La=(n,e,t,i)=>eb(n,e,1-Math.exp(-t*i));function zt(n=1){let e=n>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}var ui={WATER:0,SVC:2,D1:6,C1:11.4,D2:12,C2:17.4,D3:18},ie={ATRIUM:22,COR:27,RING1:42,DECK:56.5,HULL:54,L2IN:24,L2OUT:34,DOME:25};function Ft(n){return n*Math.PI/4}function Ct(n,e,t){let i=Ft(n),s=Math.cos(i),r=Math.sin(i);return[e*s+t*r,-e*r+t*s]}function l0(n,e,t){let i=Ft(n),s=Math.cos(i),r=Math.sin(i);return[e*s-t*r,e*r+t*s]}function c0(n,e){let t=-1e9;for(let i=0;i<8;i++){let s=i*Math.PI/4;t=Math.max(t,n*Math.sin(s)+e*Math.cos(s))}return t}function h0(n,e){let t=Math.atan2(n,e);return(Math.round(t/(Math.PI/4))%8+8)%8}function Ke(n,e=0,t=0){let i=n/zn,s=[];for(let r=0;r<8;r++){let o=(r+.5)*Math.PI/4;s.push([e+i*Math.sin(o),t+i*Math.cos(o)])}return s}function Mn(n,e,t=0,i=0,s=0){let r=[];for(let o=0;o<e;o++){let a=s+o/e*Nt;r.push([t+n*Math.sin(a),i+n*Math.cos(a)])}return r}function dd(n,e=[],t=-1){let i=new ai(n.map(([s,r])=>new te(s,t*r)));for(let s of e)i.holes.push(new Is(s.map(([r,o])=>new te(r,t*o))));return i}function u0(n,e=[],t=!1,i=12){if(t){let r=new os(dd(n,e,1),i);return r.rotateX(Math.PI/2),r}let s=new os(dd(n,e,-1),i);return s.rotateX(-Math.PI/2),s}function d0(n,e=[],t=.5,i=12,s=!0){let r=new wi(dd(n,e),{depth:t,bevelEnabled:!1,curveSegments:i});if(r.rotateX(-Math.PI/2),!s){r.index&&(r=r.toNonIndexed());let o=r.attributes.position.array,a=[];for(let c=0;c<o.length/9;c++)o[c*9+1]>t-1e-4&&o[c*9+4]>t-1e-4&&o[c*9+7]>t-1e-4||a.push(c);let l=r.clone();for(let[c,h]of Object.entries(r.attributes)){let u=h.itemSize*3,f=new Float32Array(a.length*u);a.forEach((d,p)=>f.set(h.array.subarray(d*u,d*u+u),p*u)),l.setAttribute(c,new dt(f,h.itemSize))}l.clearGroups(),r=l}return r}function fd(n,e,t){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let o=n[s][0],a=n[s][1],l=n[r][0],c=n[r][1];a>t!=c>t&&e<(l-o)*(t-a)/(c-a+1e-12)+o&&(i=!i)}return i}function f0(n){n=Math.floor(n);let e=Math.floor(n/60),t=n%60;return e+":"+String(t).padStart(2,"0")}var Da=new C(.8,.52,-.3).normalize(),pd=new ge(11125462),tb={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.32},uGrain:{value:.035}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uVignette; uniform float uGrain; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = vUv - 0.5;
      float v = 1.0 - dot(q, q) * uVignette * 2.2;
      c.rgb *= v;
      // gentle filmic contrast + a little saturation
      c.rgb = mix(c.rgb, c.rgb * c.rgb * (3.0 - 2.0 * c.rgb), 0.22);
      float g0 = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(g0), c.rgb, 1.12);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb += vec3(-0.012, 0.004, 0.02) * (1.0 - smoothstep(0.0, 0.5, l));
      c.rgb += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain;
      gl_FragColor = c;
    }`};function p0(n){let e=new Kc({canvas:n,antialias:!1,powerPreference:"high-performance",stencil:!1});return e.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.setSize(window.innerWidth,window.innerHeight,!1),e.toneMapping=Us,e.toneMappingExposure=.58,e.outputColorSpace=Gt,e.shadowMap.enabled=!0,e.shadowMap.type=Ds,e}function m0(n,e){let t=new Zr;t.scale.setScalar(9e3);let i=t.material.uniforms;i.turbidity.value=3.2,i.rayleigh.value=1.7,i.mieCoefficient.value=.0035,i.mieDirectionalG.value=.8,i.sunPosition.value.copy(Da).multiplyScalar(1e3),i.cloudCoverage&&(i.cloudCoverage.value=.42,i.cloudDensity.value=.5,i.cloudScale.value=22e-5,i.cloudElevation.value=.55,i.cloudSpeed.value=6e-5),t.frustumCulled=!1,t.name="sky",t.material.fragmentShader=t.material.fragmentShader.replace("gl_FragColor = vec4( texColor, 1.0 );","gl_FragColor = vec4( texColor, 0.0 );"),t.material.needsUpdate=!0,n.add(t);let s=new qn,r=new Zr;r.scale.setScalar(9e3);for(let f in i)r.material.uniforms[f]&&(r.material.uniforms[f].value=i[f].value&&i[f].value.clone?i[f].value.clone():i[f].value);r.material.uniforms.showSunDisc&&(r.material.uniforms.showSunDisc.value=0);let o=r.material.uniforms;o.mieCoefficient.value=6e-4,o.mieDirectionalG.value=.55,o.turbidity.value=3,s.add(r);let a=new J(new at(4e3,4e3,900,32,1,!0),new Ht({color:pd.clone().multiplyScalar(1.6),side:Zt,transparent:!0,opacity:.55,depthWrite:!1}));a.position.y=-100,s.add(a);let l=new qr(256,{type:Ot,generateMipmaps:!0,minFilter:Ln});new Fr(1,2e4,l).update(e,s);let u=new Xr(e).fromScene(s,0,1,2e4);return n.environment=u.texture,n.environmentIntensity=.85,{sky:t,envCube:l.texture,envMap:u.texture}}function g0(n){let e=new sa(16773340,3.4);e.position.copy(Da).multiplyScalar(200),e.castShadow=!0,e.shadow.mapSize.set(4096,4096);let t=e.shadow.camera;t.left=-75,t.right=75,t.top=75,t.bottom=-75,t.near=1,t.far=520,e.shadow.bias=-4e-4,e.shadow.normalBias=.04,n.add(e),n.add(e.target);let i=new ea(13625087,1913920,.3);n.add(i);let s=new C;return{sun:e,hemi:i,follow(r){let o=(t.right-t.left)/e.shadow.mapSize.x;s.set(Math.round(r.x/o)*o,Math.round(r.y/o)*o*0+8,Math.round(r.z/o)*o),e.target.position.copy(s),e.position.copy(s).addScaledVector(Da,260)},setShadowSize(r){if(!r){e.castShadow=!1;return}e.castShadow=!0,e.shadow.mapSize.x!==r&&(e.shadow.mapSize.set(r,r),e.shadow.map&&(e.shadow.map.dispose(),e.shadow.map=null))}}}function x0(n,e){let t=zt(77),i=new it;i.name="mist";let s=new oi({map:e,color:13227742,transparent:!0,opacity:.2,depthWrite:!1,fog:!1}),r=[];for(let o=0;o<70;o++){let a=t()*Math.PI*2,l=260+Math.pow(t(),.7)*900,c=new Ti(s.clone()),h=120+t()*260;c.scale.set(h*2.2,h*.55,1),c.position.set(Math.sin(a)*l,4+t()*26,Math.cos(a)*l),c.material.opacity=.05+t()*.09,c.material.rotation=(t()-.5)*.2,c.userData={base:c.material.opacity,drift:.6+t()*1.2,a,d:l},i.add(c),r.push(c)}return n.add(i),{group:i,update(o,a){for(let l of r){l.userData.a+=o*l.userData.drift/l.userData.d,l.position.x=Math.sin(l.userData.a)*l.userData.d,l.position.z=Math.cos(l.userData.a)*l.userData.d;let c=l.position.distanceTo(a.position),h=Math.min(1,Math.max(0,1-(a.position.y-l.position.y)/(c*.18+1)));l.material.opacity=l.userData.base*Math.min(1,Math.max(0,(c-180)/260))*h}}}}function y0(n,e,t){let i=n.getDrawingBufferSize(new te),s=new Zn(i.x,i.y,Dn),r=new It(i.x,i.y,{type:Ot,samples:4,depthTexture:s}),o=new eh(n,r);o.renderTarget2.depthTexture.dispose(),o.renderTarget2.depthTexture=s;let a=new th(e,t);o.addPass(a);let l=new Ia(e,t,i.x,i.y);l.setGBuffer(s),l.updateGtaoMaterial({radius:2.2,distanceExponent:1.6,thickness:2,scale:1.35,samples:12,distanceFallOff:.5,screenSpaceRadius:!1}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:5,rings:2,samples:12}),l.blendIntensity=.9,o.addPass(l);let c=new Kr(new te(i.x,i.y),.42,.18,3);c.materialHighPassFilter.fragmentShader=`
    uniform sampler2D tDiffuse; uniform float luminosityThreshold; uniform float smoothWidth; varying vec2 vUv;
    void main() {
      vec4 t = texture2D(tDiffuse, vUv);
      vec3 c = t.rgb * clamp(t.a, 0.0, 1.0);
      if (any(isnan(c))) c = vec3(0.0);
      c = min(c, vec3(12.0));
      float v = max(c.r, max(c.g, c.b));
      // white / greyish pixels (sky near the sun, sunlit panels) need to be far
      // brighter than coloured lights before they glow
      float sat = (v - min(c.r, min(c.g, c.b))) / max(v, 1e-4);
      float thr = luminosityThreshold * mix(3.2, 1.0, smoothstep(0.12, 0.55, sat));
      float k = max(v - thr, 0.0);
      k = k * k / (k + smoothWidth);
      gl_FragColor = vec4(c * (k / max(v, 1e-4)), 1.0);
    }`,c.materialHighPassFilter.needsUpdate=!0,c.highPassUniforms.smoothWidth.value=1.5,c.compositeMaterial.uniforms.bloomFactors.value=[1,.75,.4,.16,.05],o.addPass(c),o.addPass(new nh);let h=new $r(tb);return o.addPass(h),{composer:o,bloom:c,grade:h,rt:r,ao:l}}var Wt=zt(20260918),_e=(n=0,e=1)=>n+(e-n)*Wt();function bt(n,e=n){let t=document.createElement("canvas");return t.width=n,t.height=e,t}function rh(n,e,t,i=.5){let s=new Float32Array(n*n),r=1,o=0;for(let a=0;a<t;a++){let l=e<<a,c=new Float32Array(l*l);for(let h=0;h<c.length;h++)c[h]=Wt();for(let h=0;h<n;h++){let u=h/n*l,f=Math.floor(u),d=u-f,p=d*d*(3-2*d),x=f%l*l,g=(f+1)%l*l;for(let m=0;m<n;m++){let y=m/n*l,b=Math.floor(y),v=y-b,S=v*v*(3-2*v),M=b%l,w=(b+1)%l,_=c[x+M]+(c[x+w]-c[x+M])*S,T=c[g+M]+(c[g+w]-c[g+M])*S;s[h*n+m]+=(_+(T-_)*p)*r}}o+=r,r*=i}for(let a=0;a<s.length;a++)s[a]/=o;return s}function oh(n,e,t=0,i=1){let s=bt(e),r=s.getContext("2d"),o=r.createImageData(e,e);for(let a=0;a<n.length;a++){let l=Math.max(0,Math.min(255,(n[a]-t)/(i-t)*255));o.data[a*4]=o.data[a*4+1]=o.data[a*4+2]=l,o.data[a*4+3]=255}return r.putImageData(o,0,0),s}var mn=null,ah=null,gd=null;function nb(){mn||(mn=oh(rh(512,4,6),512,.15,.85),ah=oh(rh(256,16,3),256,.2,.8),gd=oh(rh(256,2,4),256,.2,.8))}function Pn(n,e,t,i,s="multiply",r=1){n.save(),n.globalAlpha=i,n.globalCompositeOperation=s;let o=e*r;for(let a=0;a<e;a+=o)for(let l=0;l<e;l+=o)n.drawImage(t,l,a,o,o);n.restore()}function ys(n,e=2){let t=n.width,i=n.height,s=n.getContext("2d").getImageData(0,0,t,i).data,r=bt(t,i),o=r.getContext("2d"),a=o.createImageData(t,i),l=a.data,c=(h,u)=>s[((u+i)%i*t+(h+t)%t)*4]/255;for(let h=0;h<i;h++)for(let u=0;u<t;u++){let f=c(u+1,h-1)+2*c(u+1,h)+c(u+1,h+1)-(c(u-1,h-1)+2*c(u-1,h)+c(u-1,h+1)),d=c(u-1,h+1)+2*c(u,h+1)+c(u+1,h+1)-(c(u-1,h-1)+2*c(u,h-1)+c(u+1,h-1)),p=-f*e,x=d*e,g=1,m=Math.hypot(p,x,g);p/=m,x/=m,g/=m;let y=(h*t+u)*4;l[y]=(p*.5+.5)*255,l[y+1]=(x*.5+.5)*255,l[y+2]=(g*.5+.5)*255,l[y+3]=255}return o.putImageData(a,0,0),r}function vs(n,e=!0,t=!0){let i=new Bi(n);return e&&(i.colorSpace=Gt),t&&(i.wrapS=i.wrapT=In),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=Ln,i}function kt(n,e){return vs(n,e)}function Jr(n,e,t,i,s,r){if(s<=0||t<120&&i<120||s<3&&Wt()<.3){r.push([n,e,t,i]);return}if(t>=i){let o=Math.round(t*(Wt()<.5?.5:Wt()<.5?.3333333333333333:.6666666666666666));Jr(n,e,o,i,s-1,r),Jr(n+o,e,t-o,i,s-1,r)}else{let o=Math.round(i*(Wt()<.5?.5:Wt()<.5?.3333333333333333:.6666666666666666));Jr(n,e,t,o,s-1,r),Jr(n,e+o,t,i-o,s-1,r)}}function gs(n,e,t,i,s=5){n.fillStyle="rgba(120,130,140,0.9)",n.beginPath(),n.arc(t,i,s,0,7),n.fill(),n.strokeStyle="rgba(40,45,50,0.6)",n.lineWidth=1.5,n.beginPath(),n.moveTo(t-s*.6,i),n.lineTo(t+s*.6,i),n.stroke(),e.fillStyle="#fff",e.beginPath(),e.arc(t,i,s,0,7),e.fill()}function xs(n,e,t,i){n.beginPath();for(let s=0;s<6;s++){let r=Math.PI/6+s*Math.PI/3,o=e+i*Math.cos(r),a=t+i*Math.sin(r);s?n.lineTo(o,a):n.moveTo(o,a)}n.closePath()}function S0(n,e,t,i,s,r,o){let a=r/(o*2);for(let l=0;l<o;l++){let c=i+a*.5+l*a*2;n.fillStyle="rgba(10,12,14,0.85)",n.fillRect(t,c,s,a),e.fillStyle="#000",e.fillRect(t,c,s,a),n.fillStyle="rgba(255,255,255,0.08)",n.fillRect(t,c+a,s,2)}}function M0(n,e,t,i,s,r=1){let o=(l,c,h,u,f,d,p)=>{for(let x of[0,-t])for(let g of[0,-t,t]){let m=l+g,y=c+x;if(m<-20||m>t+20||y+h<0||y>t)continue;let b=n.createLinearGradient(0,y,0,y+h);b.addColorStop(0,`rgba(${f},0)`),b.addColorStop(.08,`rgba(${f},${d})`),b.addColorStop(1,`rgba(${f},0)`),n.fillStyle=b;let v=_e(-4,4);if(n.beginPath(),n.moveTo(m-u/2,y),n.bezierCurveTo(m-u*.3+v,y+h*.4,m-u*.2-v,y+h*.7,m,y+h),n.bezierCurveTo(m+u*.2+v,y+h*.7,m+u*.3-v,y+h*.4,m+u/2,y),n.fill(),p){let S=e.createLinearGradient(0,y,0,y+h);S.addColorStop(0,"rgba(255,255,255,0)"),S.addColorStop(.08,`rgba(255,255,255,${d*.5})`),S.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=S,e.fillRect(m-u/2,y,u,h)}}},a=Math.round(46*i);for(let l=0;l<a;l++){let[c,h]=s.length&&Wt()<.8?s[Wt()*s.length|0]:[_e(0,t),_e(0,t)];o(c+_e(-3,3),h,_e(40,260),_e(3,9),`${_e(110,150)|0},${_e(58,78)|0},${_e(26,38)|0}`,_e(.25,.6)*i,!0)}for(let l=0;l<Math.round(90*i);l++)o(_e(0,t),_e(0,t),_e(30,200),_e(2,6),"60,64,66",_e(.06,.16)*i,!1);for(let l=0;l<Math.round(22*i*r);l++){let[c,h]=s.length?s[Wt()*s.length|0]:[_e(0,t),_e(0,t)],u=_e(30,90);n.save(),n.translate(c,h-_e(0,20)),n.scale(1,_e(.18,.35));let f=n.createRadialGradient(0,0,0,0,0,u);f.addColorStop(0,`rgba(214,216,208,${.09*i*r})`),f.addColorStop(1,"rgba(214,216,208,0)"),n.fillStyle=f,n.fillRect(-u,-u,u*2,u*2),n.restore()}Pn(n,t,gd,.12*i,"multiply")}function md(n=1024,e=[226,231,235],t=.1,i=.5,s=!0,r=0){let o=bt(n),a=o.getContext("2d"),l=bt(n),c=l.getContext("2d"),h=bt(n),u=h.getContext("2d");a.fillStyle=`rgb(${e})`,a.fillRect(0,0,n,n),c.fillStyle="#b0b0b0",c.fillRect(0,0,n,n),u.fillStyle="rgb(105,105,105)",u.fillRect(0,0,n,n);let f=[];Jr(0,0,n,n,4,f);let d=[];for(let[p,x,g,m]of f){d.push([p+18,x+18],[p+g-18,x+18],[p+g*_e(.2,.8),x+m-2]);let y=_e(-6,6);a.fillStyle=`rgb(${e[0]+y},${e[1]+y},${e[2]+y+1})`,a.fillRect(p+3,x+3,g-6,m-6),c.fillStyle="#d8d8d8",c.fillRect(p+4,x+4,g-8,m-8),c.fillStyle="#e8e8e8",c.fillRect(p+9,x+9,g-18,m-18);let b=a.createLinearGradient(0,x+m*.55,0,x+m);b.addColorStop(0,"rgba(80,70,60,0)"),b.addColorStop(1,`rgba(80,70,60,${t})`),a.fillStyle=b,a.fillRect(p,x,g,m);let v=_e(95,125)|0;u.fillStyle=`rgb(${v},${v},${v})`,u.fillRect(p+4,x+4,g-8,m-8),s&&g>150&&m>150&&Wt()<.35&&(gs(a,c,p+18,x+18),gs(a,c,p+g-18,x+18),gs(a,c,p+18,x+m-18),gs(a,c,p+g-18,x+m-18)),s&&g>220&&m>200&&Wt()<.18&&S0(a,c,p+g*.2,x+m*.3,g*.6,m*.35,6),s&&g>180&&Wt()<.2&&(a.fillStyle="rgba(40,50,60,0.55)",a.font="600 16px monospace",a.fillText(["A-07","SV-12","C2","HX-4","PNL 31","AC-9"][Wt()*6|0],p+26,x+m-26)),s&&g>200&&m>200&&Wt()<.12&&(a.strokeStyle="rgba(60,70,80,0.35)",a.lineWidth=3,xs(a,p+g/2,x+m/2,Math.min(g,m)*.18),a.stroke(),c.strokeStyle="#707070",c.lineWidth=4,xs(c,p+g/2,x+m/2,Math.min(g,m)*.18),c.stroke()),a.strokeStyle=`rgba(35,42,50,${i})`,a.lineWidth=3,a.strokeRect(p+1.5,x+1.5,g-3,m-3),c.strokeStyle="#000",c.lineWidth=4,c.strokeRect(p+1,x+1,g-2,m-2),u.strokeStyle="rgb(200,200,200)",u.lineWidth=4,u.strokeRect(p+1,x+1,g-2,m-2)}return Pn(a,n,mn,.1,"multiply"),Pn(a,n,ah,.05,"multiply",.25),Pn(u,n,mn,.25,"overlay"),r&&M0(a,u,n,r,d),{map:kt(o,!0),normalMap:kt(ys(l,3),!1),roughnessMap:kt(h,!1)}}function v0(n=1024,e=0){let t=bt(n),i=t.getContext("2d"),s=bt(n),r=s.getContext("2d"),o=bt(n),a=o.getContext("2d");i.fillStyle="#2c3239",i.fillRect(0,0,n,n),r.fillStyle="#909090",r.fillRect(0,0,n,n),a.fillStyle="rgb(140,140,140)",a.fillRect(0,0,n,n);let l=[];Jr(0,0,n,n,4,l);for(let[c,h,u,f]of l){let d=_e(-5,5);i.fillStyle=`rgb(${44+d},${50+d},${57+d})`,i.fillRect(c+3,h+3,u-6,f-6),r.fillStyle="#c0c0c0",r.fillRect(c+5,h+5,u-10,f-10);let p=Wt();if(p<.25&&u>140&&f>100)S0(i,r,c+20,h+20,u-40,f-40,Math.max(3,f/40|0));else if(p<.4&&u>160&&f>160)for(let g=h+24;g<h+f-20;g+=14*1.5)for(let m=c+24+((g-h)/(14*1.5)|0)%2*14*.87;m<c+u-20;m+=14*1.74)i.fillStyle="rgba(8,10,12,0.9)",xs(i,m,g,14*.75),i.fill(),r.fillStyle="#202020",xs(r,m,g,14*.75),r.fill();else p<.5&&u>120&&(i.fillStyle="rgba(220,170,40,0.75)",i.fillRect(c+14,h+14,60,8),i.fillStyle="rgba(200,210,220,0.5)",i.font="600 15px monospace",i.fillText("MNT-"+(Wt()*90+10|0),c+14,h+42));u>100&&f>100&&Wt()<.5&&(gs(i,r,c+14,h+f-14,4),gs(i,r,c+u-14,h+f-14,4)),i.strokeStyle="rgba(8,10,12,0.9)",i.lineWidth=3,i.strokeRect(c+1.5,h+1.5,u-3,f-3),i.strokeStyle="rgba(255,255,255,0.05)",i.lineWidth=1,i.strokeRect(c+4,h+4,u-8,f-8),r.strokeStyle="#000",r.lineWidth=4,r.strokeRect(c+1,h+1,u-2,f-2)}return Pn(i,n,mn,.18,"overlay"),Pn(a,n,mn,.35,"overlay"),e&&M0(i,a,n,e,l.map(([c,h,u,f])=>[c+u*_e(.1,.9),h+f-3]),.8),{map:kt(t,!0),normalMap:kt(ys(s,2.5),!1),roughnessMap:kt(o,!1)}}function ib(n=512){let e=bt(n),t=e.getContext("2d"),i=bt(n),s=i.getContext("2d");t.fillStyle="#b9bec4",t.fillRect(0,0,n,n);for(let r=0;r<1400;r++){let o=_e(0,n),a=_e(40,400),l=_e(-100,n),c=_e(-1,1);t.strokeStyle=c>0?`rgba(255,255,255,${c*.12})`:`rgba(0,0,0,${-c*.12})`,t.lineWidth=_e(.5,1.6),t.beginPath(),t.moveTo(l,o),t.lineTo(l+a,o),t.stroke(),t.beginPath(),t.moveTo(l-n,o),t.lineTo(l+a-n,o),t.stroke()}return s.drawImage(e,0,0),s.globalCompositeOperation="multiply",s.fillStyle="rgb(120,120,120)",s.fillRect(0,0,n,n),Pn(t,n,mn,.06,"multiply"),{map:kt(e,!0),roughnessMap:kt(i,!1)}}function _0(n=1024,e=[26,29,33],t=2,i=!1){let s=bt(n),r=s.getContext("2d"),o=bt(n),a=o.getContext("2d"),l=bt(n),c=l.getContext("2d");r.fillStyle=`rgb(${e})`,r.fillRect(0,0,n,n),a.fillStyle="#c0c0c0",a.fillRect(0,0,n,n),c.fillStyle="rgb(46,46,46)",c.fillRect(0,0,n,n);let h=n/t;for(let u=0;u<t;u++)for(let f=0;f<t;f++){let d=_e(-3,3);r.fillStyle=`rgb(${e[0]+d},${e[1]+d},${e[2]+d})`,r.fillRect(f*h+2,u*h+2,h-4,h-4);let p=_e(38,62)|0;c.fillStyle=`rgb(${p},${p},${p})`,c.fillRect(f*h+2,u*h+2,h-4,h-4)}Pn(r,n,mn,.25,"overlay");for(let u=0;u<40;u++){let f=_e(0,n),d=_e(0,n),p=_e(20,90),x=c.createRadialGradient(f,d,0,f,d,p);x.addColorStop(0,"rgba(140,140,140,0.35)"),x.addColorStop(1,"rgba(140,140,140,0)"),c.fillStyle=x,c.fillRect(f-p,d-p,p*2,p*2)}for(let u=0;u<=t;u++)r.fillStyle="rgba(0,0,0,0.9)",r.fillRect(0,u*h-2,n,4),r.fillRect(u*h-2,0,4,n),r.fillStyle="rgba(160,175,185,0.18)",r.fillRect(0,u*h+2,n,1),r.fillRect(u*h+2,0,1,n),a.fillStyle="#000",a.fillRect(0,u*h-2,n,4),a.fillRect(u*h-2,0,4,n),c.fillStyle="rgb(180,180,180)",c.fillRect(0,u*h-2,n,4),c.fillRect(u*h-2,0,4,n);return i&&(r.fillStyle="rgba(190,200,210,0.5)",r.fillRect(0,n/2-3,n,6)),{map:kt(s,!0),normalMap:kt(ys(o,1.5),!1),roughnessMap:kt(l,!1)}}function sb(n=1024){let e=bt(n),t=e.getContext("2d"),i=bt(n),s=i.getContext("2d"),r=bt(n),o=r.getContext("2d");t.fillStyle="#aeb5bb",t.fillRect(0,0,n,n),s.fillStyle="#c0c0c0",s.fillRect(0,0,n,n),o.fillStyle="rgb(175,175,175)",o.fillRect(0,0,n,n);let a=4,l=n/a;for(let h=0;h<a;h++){let u=h%2*n/4;for(let f=-1;f<2;f++){let d=u+f*n/2,p=_e(-8,8);t.fillStyle=`rgb(${172+p},${179+p},${186+p})`,t.fillRect(d+3,h*l+3,n/2-6,l-6);for(let x=0;x<3;x++){let g=h*l+l*(.25+x*.25)-5;t.fillStyle="rgba(70,78,86,0.55)",t.fillRect(d+20,g,n/2-40,10),s.fillStyle="#e0e0e0",s.fillRect(d+20,g,n/2-40,10),o.fillStyle="rgb(235,235,235)",o.fillRect(d+20,g,n/2-40,10)}t.strokeStyle="rgba(30,35,40,0.8)",t.lineWidth=4,t.strokeRect(d+2,h*l+2,n/2-4,l-4),s.strokeStyle="#000",s.lineWidth=5,s.strokeRect(d+2,h*l+2,n/2-4,l-4),gs(t,s,d+14,h*l+14,4),gs(t,s,d+n/2-14,h*l+l-14,4)}}Pn(t,n,mn,.28,"multiply"),Pn(t,n,gd,.15,"multiply");for(let h=0;h<18;h++){let u=_e(0,n),f=_e(0,n),d=_e(30,140),p=t.createRadialGradient(u,f,0,u,f,d);p.addColorStop(0,"rgba(70,75,70,0.12)"),p.addColorStop(1,"rgba(70,75,70,0)"),t.fillStyle=p,t.fillRect(u-d,f-d,d*2,d*2)}let c=(h,u,f,d,p)=>{let x=h.createRadialGradient(u,f,0,u,f,d);x.addColorStop(0,p),x.addColorStop(.7,p),x.addColorStop(1,p.replace(/[\d.]+\)$/,"0)")),h.fillStyle=x,h.beginPath(),h.arc(u,f,d,0,7),h.fill()};for(let h=0;h<12;h++)c(t,_e(0,n),_e(0,n),_e(10,45),"rgba(38,34,30,0.16)");for(let h=0;h<a;h++)for(let u=-1;u<2;u++){let f=h%2*n/4+u*n/2;for(let[d,p]of[[f+14,h*l+14],[f+n/2-14,h*l+l-14]])Wt()<.6&&c(t,d,p+3,_e(6,14),"rgba(120,64,30,0.35)")}for(let h=0;h<5;h++){let u=_e(n*.15,n*.85),f=_e(n*.15,n*.85),d=6+(Wt()*6|0);for(let p=0;p<d;p++){let x=u+_e(-70,70),g=f+_e(-30,30),m=_e(10,38);for(let[y,b]of[[t,"rgba(30,38,46,0.16)"],[o,"rgba(40,40,40,0.55)"]])y.save(),y.translate(x,g),y.scale(1,_e(.4,.8)),c(y,0,0,m,b),y.restore()}}return{map:kt(e,!0),normalMap:kt(ys(i,2),!1),roughnessMap:kt(r,!1)}}function rb(n=512){let e=bt(n),t=e.getContext("2d"),i=bt(n),s=i.getContext("2d");t.fillStyle="#07090b",t.fillRect(0,0,n,n),s.fillStyle="#000",s.fillRect(0,0,n,n);let r=16,o=n/r;for(let a=0;a<r;a++)t.fillStyle="#5a6168",t.fillRect(0,a*o,n,o*.22),t.fillRect(a*o,0,o*.3,n),s.fillStyle="#fff",s.fillRect(0,a*o,n,o*.22),s.fillStyle="#ccc",s.fillRect(a*o,0,o*.3,n);return Pn(t,n,mn,.3,"multiply"),{map:kt(e,!0),normalMap:kt(ys(i,3),!1)}}function ob(n=512){let e=bt(n),t=e.getContext("2d"),i=bt(n),s=i.getContext("2d");t.fillStyle="#e4e8ec",t.fillRect(0,0,n,n),s.fillStyle="#e0e0e0",s.fillRect(0,0,n,n);let r=n/8,o=r*Math.sqrt(3),a=r*1.5;for(let l=-1;l<7;l++)for(let c=-1;c<6;c++){let h=c*o+(l%2?o/2:0),u=l*a;t.strokeStyle="rgba(40,50,60,0.45)",t.lineWidth=4,xs(t,h,u,r-1),t.stroke(),s.strokeStyle="#000",s.lineWidth=6,xs(s,h,u,r-1),s.stroke(),Wt()<.15&&(t.fillStyle="rgba(0,0,0,0.05)",xs(t,h,u,r-4),t.fill())}return Pn(t,n,mn,.1,"multiply"),{map:kt(e,!0),normalMap:kt(ys(i,2.5),!1)}}function ab(n=256){let e=bt(n),t=e.getContext("2d");t.fillStyle="#e8b21a",t.fillRect(0,0,n,n),t.fillStyle="#16181b";for(let i=-2;i<6;i++)t.beginPath(),t.moveTo(i*n/4,0),t.lineTo(i*n/4+n/8,0),t.lineTo(i*n/4+n/8+n,n),t.lineTo(i*n/4+n,n),t.fill();return Pn(t,n,mn,.35,"multiply"),{map:kt(e,!0)}}function b0(n=256,e=[214,96,38]){let t=bt(n),i=t.getContext("2d");i.fillStyle=`rgb(${e})`,i.fillRect(0,0,n,n);for(let s=0;s<n;s+=2)i.fillStyle=`rgba(0,0,0,${.05+Wt()*.05})`,i.fillRect(0,s,n,1);for(let s=0;s<n;s+=2)i.fillStyle=`rgba(255,255,255,${.03+Wt()*.03})`,i.fillRect(s,0,1,n);return Pn(i,n,ah,.2,"overlay"),{map:kt(t,!0)}}function lb(n=512){let e=bt(n),t=e.getContext("2d");t.clearRect(0,0,n,n);for(let i=0;i<70;i++){let s=_e(n*.12,n*.88),r=_e(n*.12,n*.88),o=_e(0,Math.PI*2),a=_e(38,70),l=a*.42,c=[_e(40,80),_e(95,150),_e(35,65)].map(h=>h|0);t.save(),t.translate(s,r),t.rotate(o),t.fillStyle=`rgb(${c})`,t.beginPath(),t.moveTo(0,0),t.quadraticCurveTo(l,a*.45,0,a),t.quadraticCurveTo(-l,a*.45,0,0),t.fill(),t.strokeStyle="rgba(200,230,150,0.35)",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,2),t.lineTo(0,a-4),t.stroke(),t.restore()}return{map:kt(e,!0)}}function cb(n=512){let e=bt(n),t=e.getContext("2d"),i=bt(n),s=i.getContext("2d");t.fillStyle="#5b4a3b",t.fillRect(0,0,n,n),s.drawImage(mn,0,0,n*.25,n*4),s.drawImage(mn,n*.25,0,n*.25,n*4),s.drawImage(mn,n*.5,0,n*.25,n*4),s.drawImage(mn,n*.75,0,n*.25,n*4),t.globalAlpha=.6,t.globalCompositeOperation="multiply",t.drawImage(i,0,0),t.globalAlpha=1,t.globalCompositeOperation="source-over";for(let r=0;r<200;r++){t.strokeStyle=`rgba(30,22,16,${_e(.2,.5)})`,t.lineWidth=_e(1,3);let o=_e(0,n);t.beginPath(),t.moveTo(o,0),t.bezierCurveTo(o+_e(-10,10),n/3,o+_e(-10,10),n*2/3,o,n),t.stroke()}return{map:kt(e,!0),normalMap:kt(ys(i,4),!1)}}function hb(n=512){let e=bt(n),t=e.getContext("2d");t.fillStyle="#35521f",t.fillRect(0,0,n,n);for(let i=0;i<6e3;i++){let s=_e(0,n),r=_e(0,n),o=_e(4,12);t.strokeStyle=`rgb(${_e(40,90)|0},${_e(95,150)|0},${_e(30,60)|0})`,t.lineWidth=1.2,t.beginPath(),t.moveTo(s,r),t.lineTo(s+_e(-3,3),r-o),t.stroke()}return{map:kt(e,!0)}}function ub(n=256){let e=bt(n),t=e.getContext("2d");t.fillStyle="#3a2c21",t.fillRect(0,0,n,n),Pn(t,n,ah,.6,"overlay");for(let i=0;i<400;i++)t.fillStyle=`rgba(${_e(80,130)|0},${_e(70,110)|0},${_e(60,90)|0},0.6)`,t.fillRect(_e(0,n),_e(0,n),2,2);return{map:kt(e,!0)}}function db(n=512){let e=rh(n,8,5,.55),t=oh(e,n,.2,.8);return vs(ys(t,1.2),!1)}function fb(n=256){let e=bt(n),t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.5,"rgba(255,255,255,0.45)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,n),t.globalCompositeOperation="destination-in",t.globalAlpha=.85,t.drawImage(mn,0,0,n,n),vs(e,!0,!1)}function pb(n=128){let e=bt(n),t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.15,"rgba(255,255,255,0.6)"),i.addColorStop(.4,"rgba(255,255,255,0.12)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,n,n),vs(e,!0,!1)}function mb(n=64,e=256){let t=bt(n,e),i=t.getContext("2d"),s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"rgba(255,255,255,0.9)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,n,e);let r=i.createLinearGradient(0,0,n,0);return r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.5,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(0,0,0,1)"),i.globalCompositeOperation="destination-out",i.fillStyle=r,i.fillRect(0,0,n,e),vs(t,!0,!1)}function gb(n=512){let e=bt(n),t=e.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,n,n);let i=n/4,s=i*Math.sqrt(3),r=i*1.5;t.strokeStyle="#fff",t.lineWidth=7;for(let o=-1;o<4;o++)for(let a=-1;a<4;a++){let l=a*s+(o%2?s/2:0),c=o*r;xs(t,l,c,i),t.stroke()}return vs(e,!1)}function xb(n=256){let e=bt(n),t=e.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,n,n),t.strokeStyle="rgba(255,255,255,0.7)";for(let i=0;i<60;i++){t.lineWidth=_e(1,3),t.beginPath();let s=_e(0,n),r=_e(0,n);t.arc(s,r,_e(10,40),_e(0,6),_e(0,6)+2),t.stroke()}return vs(e,!0)}function E0(n,e={}){let t=e.w||1024,i=e.h||256,s=bt(t,i),r=s.getContext("2d");r.fillStyle=e.bg||"rgba(0,0,0,0)",r.fillRect(0,0,t,i),e.border&&(r.strokeStyle=e.border,r.lineWidth=6,r.strokeRect(8,8,t-16,i-16));let o=e.top||i*.5,a=n.length;for(let c=0;c<a;c++){let h=n[c];r.font=h.font||`600 ${h.size||90}px "Exo 2", "Segoe UI", sans-serif`,r.fillStyle=h.color||"#ffffff",r.textAlign=h.align||"center",r.textBaseline="middle",h.spacing&&(r.letterSpacing=h.spacing+"px");let u=h.align==="left"?h.x||40:h.align==="right"?t-(h.x||40):t/2;r.fillText(h.text,u,h.y!==void 0?h.y:o),o+=(h.size||90)*1.2}e.stripe&&(r.fillStyle=e.stripe,r.fillRect(0,i-14,t,14));let l=vs(s,!0,!1);return l.anisotropy=4,l}async function T0(n){nb();let e={},t=[["white",()=>md(1024,[212,217,221],.2,.5,!0,1)],["whiteIn",()=>md(1024,[214,219,223])],["whiteClean",()=>md(1024,[222,226,229],.04,.35,!1)],["dark",()=>v0(1024,.9)],["darkIn",()=>v0(1024)],["brushed",()=>ib(512)],["floor",()=>_0(1024)],["floorLight",()=>_0(1024,[150,156,162],2)],["deck",()=>sb(1024)],["grating",()=>rb(512)],["hex",()=>ob(512)],["hazard",()=>ab(256)],["fabric",()=>b0(256)],["fabricGrey",()=>b0(256,[72,78,86])],["leaf",()=>lb(512)],["bark",()=>cb(512)],["grass",()=>hb(512)],["soil",()=>ub(256)]];for(let[i,s]of t)e[i]=s(),n&&await n(i);return e.waterNormals=db(512),e.mist=fb(256),e.glow=pb(128),e.beam=mb(),e.frit=gb(512),e.caustic=xb(),e}function w0(n){let e={},t=(l,c,h={})=>{let u=new as(l);return u.userData.uv=c,Object.assign(u.userData,h),u},i=(l,c,h={})=>{let u=new Jo(l);return u.userData.uv=c,Object.assign(u.userData,h),u},s=l=>new te(l,l);e.white=t({color:16777215,...n.white,roughness:.95,metalness:0,normalScale:s(.6)},2.4),e.whiteClean=t({color:16777215,...n.whiteClean,roughness:.8,metalness:0,normalScale:s(.4)},3),e.whiteSmooth=i({color:14672870,roughness:.42,metalness:0,clearcoat:.25,clearcoatRoughness:.35},null),e.metal=t({color:14146785,...n.brushed,roughness:.9,metalness:1},1.2),e.chrome=t({color:15265007,roughness:.12,metalness:1},null),e.dark=t({color:16777215,...n.dark,roughness:1,metalness:.55,normalScale:s(.8)},2.4),e.darkSmooth=t({color:1843238,roughness:.38,metalness:.6},null),e.gunmetal=t({color:3817544,...n.brushed,roughness:.8,metalness:.9},1.5),e.hull=t({color:9147291,...n.dark,roughness:1,metalness:.4},4),e.algae=t({color:5595210,...n.dark,roughness:1,metalness:.1},2),e.hullPaint=t({color:4212301,...n.white,roughness:.9,metalness:.3},3),e.floor=t({color:16777215,...n.floor,roughness:1,metalness:.2,normalScale:s(.5)},2.4),e.floorLight=t({color:16777215,...n.floorLight,roughness:.9,metalness:.05,normalScale:s(.5)},2.4),e.deck=t({color:16777215,...n.deck,roughness:1,metalness:.05,normalScale:s(.7)},4),e.grating=t({color:16777215,...n.grating,roughness:.55,metalness:.8},1),e.hex=t({color:16777215,...n.hex,roughness:.55,metalness:.05},1.2),e.hazard=t({color:16777215,...n.hazard,roughness:.6,metalness:.1},.8),e.rubber=t({color:1250583,roughness:.85,metalness:0},null),e.plastic=t({color:2764597,roughness:.45,metalness:.1},null),e.plasticWhite=t({color:13949405,roughness:.5,metalness:0},null),e.orange=t({color:16777215,...n.fabric,roughness:.85,metalness:0},.6),e.fabricGrey=t({color:16777215,...n.fabricGrey,roughness:.9,metalness:0},.6),e.orangeGloss=t({color:14705194,roughness:.35,metalness:0},null),e.yellow=t({color:15249946,roughness:.5,metalness:.2},null),e.redPaint=t({color:12071466,roughness:.45,metalness:.2},null),e.screenOff=t({color:329482,roughness:.1,metalness:.5},null),e.cable=t({color:1382170,roughness:.6,metalness:.2},null),e.copper=t({color:12745290,roughness:.35,metalness:1},null),e.glass=i({color:12576496,roughness:.04,metalness:0,transparent:!0,opacity:.16,depthWrite:!1,envMapIntensity:1.6,specularIntensity:1,ior:1.5},null,{noShadow:!0}),e.glassTint=i({color:2774374,roughness:.03,metalness:.25,transparent:!0,opacity:.38,depthWrite:!1,envMapIntensity:1.8},null,{noShadow:!0}),e.glassFrost=i({color:14216949,roughness:.5,metalness:0,transparent:!0,opacity:.55,depthWrite:!1},null,{noShadow:!0}),e.glassDome=i({color:14086906,roughness:.05,metalness:.1,transparent:!0,opacity:.2,depthWrite:!1,envMapIntensity:2,side:$t},null,{noShadow:!0}),e.glassFloor=i({color:10474464,roughness:.05,metalness:.1,transparent:!0,opacity:.3,depthWrite:!1,envMapIntensity:1.5},null,{noShadow:!0});let r=(l,c,h=329224)=>t({color:h,emissive:l,emissiveIntensity:c,roughness:.4,metalness:0},null,{noShadow:!0});e.cyan=r(3797247,9),e.cyanSoft=r(3794687,3),e.cyanDim=r(2805994,1.2),e.teal=r(3080136,8),e.light=r(15923455,11,16777215),e.lightWarm=r(16771012,10,16777215),e.lightCool=r(14217471,10,16777215),e.orangeLight=r(16742954,8),e.red=r(16722468,9),e.redDim=r(16722468,2),e.amber=r(16754470,8),e.green=r(4521830,8),e.blue=r(3837183,8),e.growLight=r(16735472,5),e.cryoFluid=t({color:735832,emissive:2799871,emissiveIntensity:1.3,roughness:.1,metalness:0,transparent:!0,opacity:.55,depthWrite:!1},null,{noShadow:!0}),e.greenFluid=t({color:670228,emissive:4521864,emissiveIntensity:1.1,roughness:.1,metalness:0,transparent:!0,opacity:.6,depthWrite:!1},null,{noShadow:!0}),e.bark=t({color:16777215,...n.bark,roughness:.95,metalness:0},1.6,{keepUV:!0}),e.leaf=t({color:16777215,map:n.leaf.map,alphaTest:.45,side:$t,roughness:.75,metalness:0},null),e.grass=t({color:16777215,map:n.grass.map,roughness:.95,metalness:0},1.5),e.soil=t({color:16777215,map:n.soil.map,roughness:1,metalness:0},1),e.plant=t({color:4164154,roughness:.7,metalness:0},null),e.plantDark=t({color:2845235,roughness:.75,metalness:0},null),e.plantLight=t({color:7977290,roughness:.7,metalness:0},null),e.creature=t({color:11126742,emissive:2781082,emissiveIntensity:.6,roughness:.35,metalness:0},null);let o=(l,c=1,h=null)=>new Ht({color:l,transparent:!0,opacity:c,blending:fn,depthWrite:!1,map:h,side:$t,fog:!0});e.fxBeam=o(16774368,.07,n.beam),e.fxBeam.userData.noShadow=!0,e.fxCyanBeam=o(4516095,.18,n.beam),e.fxCyanBeam.userData.noShadow=!0,e.fxBlueBeam=o(3842303,.12,n.beam),e.fxBlueBeam.userData.noShadow=!0,e.fxHolo=o(5631743,.35),e.fxHolo.userData.noShadow=!0;let a=(l,c)=>{l.userData.clean={map:c.map,normalMap:c.normalMap,roughnessMap:c.roughnessMap}};a(e.white,n.whiteIn),a(e.dark,n.darkIn),a(e.hullPaint,n.whiteIn);for(let l in e)e[l].name=l;for(let l of["cyan","cyanSoft","cyanDim","teal","light","lightWarm","lightCool","orangeLight","red","redDim","amber","green","blue","growLight","hazard","grating","fabricGrey","yellow"])e[l]&&lh(e[l]);return e.metalInlay=lh(e.metal.clone()),e.metalInlay.name="metalInlay",e.whiteInlay=lh(e.whiteClean.clone()),e.whiteInlay.name="whiteInlay",e.darkInlay=lh(e.darkSmooth.clone()),e.darkInlay.name="darkInlay",e}function lh(n){return n.polygonOffset=!0,n.polygonOffsetFactor=-1,n.polygonOffsetUnits=-4,n}var En="#4ff2ff",ch="rgba(79,242,255,0.35)",xd="#ffb347",hh="#ff4a3d",_s="#e8f6ff",uh="#56ff9a",di='"Share Tech Mono", "Consolas", monospace';function Gs(n,e,t,i,s=En){let r=n.createLinearGradient(0,0,0,t);r.addColorStop(0,"#04121a"),r.addColorStop(1,"#020a10"),n.fillStyle=r,n.fillRect(0,0,e,t),n.strokeStyle="rgba(79,242,255,0.08)",n.lineWidth=1;for(let o=0;o<e;o+=32)n.beginPath(),n.moveTo(o,0),n.lineTo(o,t),n.stroke();for(let o=0;o<t;o+=32)n.beginPath(),n.moveTo(0,o),n.lineTo(e,o),n.stroke();n.fillStyle=s,n.font=`20px ${di}`,n.textBaseline="top",n.fillText(i,16,12),n.fillRect(16,38,120,2),n.strokeStyle=s,n.globalAlpha=.5,n.strokeRect(4,4,e-8,t-8),n.globalAlpha=1}var dh={status(n,e,t,i,s){Gs(n,e,t,"AEGIS // COLONY STATUS"),[["REACTOR",.82+Math.sin(i*.7)*.03],["LIFE SUPPORT",.97],["DESALINATION",.64+Math.sin(i*.3)*.05],["HYDROPONICS",.88],["CRYO CONTAIN.",s.restored?.92:.41+Math.sin(i*5)*.03],["UPLINK",s.transmitted?1:.12]].forEach(([o,a],l)=>{let c=62+l*34;n.fillStyle=_s,n.font=`17px ${di}`,n.fillText(o,16,c),n.fillStyle="rgba(79,242,255,0.12)",n.fillRect(200,c+2,240,16),n.fillStyle=a<.5?hh:a<.7?xd:En,n.fillRect(200,c+2,240*a,16),n.fillStyle=_s,n.fillText((a*100|0)+"%",452,c)}),n.strokeStyle=En,n.lineWidth=2,n.beginPath();for(let o=0;o<e-32;o+=4){let a=t-26+Math.sin(o*.05+i*3)*8*Math.sin(o*.011+i);o?n.lineTo(16+o,a):n.moveTo(16+o,a)}n.stroke()},sonar(n,e,t,i){Gs(n,e,t,"SONAR // 360 SWEEP");let s=e/2,r=t/2+14,o=t*.4;n.strokeStyle=ch,n.lineWidth=1;for(let h=1;h<=4;h++)n.beginPath(),n.arc(s,r,o*h/4,0,7),n.stroke();n.beginPath(),n.moveTo(s-o,r),n.lineTo(s+o,r),n.moveTo(s,r-o),n.lineTo(s,r+o),n.stroke();let a=i*1.2,l=n.createConicGradient?n.createConicGradient(a-.8,s,r):null;l&&(l.addColorStop(0,"rgba(79,242,255,0)"),l.addColorStop(.12,"rgba(79,242,255,0.45)"),l.addColorStop(.1201,"rgba(79,242,255,0)"),n.fillStyle=l,n.beginPath(),n.arc(s,r,o,0,7),n.fill()),n.strokeStyle=En,n.lineWidth=2,n.beginPath(),n.moveTo(s,r),n.lineTo(s+Math.cos(a)*o,r+Math.sin(a)*o),n.stroke();let c=[[.3,.6],[1.9,.8],[2.8,.35],[4.1,.7],[5.2,.5]];for(let[h,u]of c){let f=((a-h)%6.283+6.283)%6.283;n.fillStyle=`rgba(86,255,154,${Math.max(0,1-f/4)})`,n.beginPath(),n.arc(s+Math.cos(h)*o*u,r+Math.sin(h)*o*u,5,0,7),n.fill()}n.fillStyle=_s,n.font=`15px ${di}`,n.fillText("CONTACTS 05",16,t-30),n.fillText("DEPTH 1,840 M",e-150,t-30)},vitals(n,e,t,i,s){Gs(n,e,t,"SPECIMEN AX-7 // VITALS",s.restored?En:hh),n.strokeStyle=uh,n.lineWidth=2.5,n.beginPath();for(let r=0;r<e-32;r+=2){let o=(r+i*180)%160/160,a=0;o>.42&&o<.46?a=-38:o>.46&&o<.5?a=26:o>.6&&o<.7&&(a=-8*Math.sin((o-.6)*31)),r?n.lineTo(16+r,110+a):n.moveTo(16+r,110+a)}n.stroke(),n.font=`18px ${di}`,n.fillStyle=_s,n.fillText("CORE TEMP  -196.4 C",16,160),n.fillText("NEURAL     "+(s.scanned?"ACTIVE":"DORMANT"),16,186),n.fillStyle=s.restored?uh:hh,n.fillText(s.restored?"CONTAINMENT NOMINAL":"CONTAINMENT: POWER FAULT",16,214);for(let r=0;r<26;r++){let o=60+r*8,a=Math.sin(i*2+r*.5);n.fillStyle=En,n.fillRect(e-110+a*40,o,5,5),n.fillStyle=xd,n.fillRect(e-110-a*40,o,5,5),n.fillStyle=ch,n.fillRect(e-110-Math.abs(a)*40,o+2,Math.abs(a)*80,1)}},map(n,e,t,i){Gs(n,e,t,"COLONY LAYOUT // LEVEL 1");let s=e/2,r=t/2+12,o=t*.0068,a=l=>{n.beginPath();for(let c=0;c<=8;c++){let h=(c+.5)*Math.PI/4,u=l/Math.cos(Math.PI/8)*o,f=s+Math.sin(h)*u,d=r-Math.cos(h)*u;c?n.lineTo(f,d):n.moveTo(f,d)}n.stroke()};n.strokeStyle=En,n.lineWidth=1.5,a(56),a(42),n.strokeStyle=ch,a(27),a(22);for(let l=0;l<8;l++){let c=l*Math.PI/4;n.fillStyle=En,n.fillRect(s+Math.sin(c)*110*o*1-2,r-Math.cos(c)*110*o-2,4,4)}n.fillStyle=`rgba(255,179,71,${.5+.5*Math.sin(i*4)})`,n.beginPath(),n.arc(s,r+56*o*1.6,5,0,7),n.fill()},log(n,e,t,i){Gs(n,e,t,"SYS.LOG");let s=["> desal loop B pressure ok","> hydro ring 2 nutrient 94%","> drone D-07 returning","> buoy S-14 telemetry","> cryo bay: power variance","> uplink handshake pending","> tide model updated","> hull strain 0.02%","> VTOL-3 approach vector","> atrium O2 21.2%","> sample AX-7 stable","> ballast trim +0.4"];n.font=`16px ${di}`;let r=Math.floor(i*1.5);for(let o=0;o<9;o++){let a=s[(r+o)%s.length];n.fillStyle=a.includes("cryo")?xd:o===8?_s:"rgba(200,240,255,0.75)",n.fillText(a,16,54+o*24)}(i*2|0)%2&&(n.fillStyle=En,n.fillRect(16,270,10,16))},weather(n,e,t,i){Gs(n,e,t,"OCEAN // CONDITIONS"),n.font=`34px ${di}`,n.fillStyle=_s,n.fillText("SEA STATE 2",16,58),n.font=`17px ${di}`,n.fillStyle=En,n.fillText("SWELL 0.6 M  /  11 S",16,104),n.fillText("WIND 7 KN  NNE",16,128),n.fillText("VIS 9.2 KM  HAZE",16,152),n.strokeStyle=En,n.lineWidth=2,n.beginPath();for(let s=0;s<e-32;s+=3){let r=t-50+Math.sin(s*.03+i)*12+Math.sin(s*.08-i*1.7)*5;s?n.lineTo(16+s,r):n.moveTo(16+s,r)}n.stroke()},welcome(n,e,t,i){n.fillStyle="#031018",n.fillRect(0,0,e,t);let s=n.createRadialGradient(e/2,t/2,10,e/2,t/2,e*.6);s.addColorStop(0,"rgba(79,242,255,0.18)"),s.addColorStop(1,"rgba(79,242,255,0)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.textAlign="center",n.fillStyle=_s,n.font='600 64px "Exo 2", sans-serif',n.letterSpacing="14px",n.fillText("AEGIS",e/2+7,t*.34),n.letterSpacing="4px",n.font=`18px ${di}`,n.fillStyle=En,n.fillText("DEEP OCEAN RESEARCH COLONY",e/2,t*.6),n.fillStyle="rgba(232,246,255,0.6)",n.fillText("PACIFIC SECTOR 7  \xB7  EST. 2071",e/2,t*.72),n.fillStyle=En,n.fillRect(e/2-60+Math.sin(i)*40,t*.84,120,3),n.textAlign="left",n.letterSpacing="0px"},alert(n,e,t,i,s){let r=s.cryoOpen?0:Math.sin(i*4)>0?1:.6;n.fillStyle=s.cryoOpen?"#021408":"#1a0404",n.fillRect(0,0,e,t),n.fillStyle=s.cryoOpen?uh:hh,n.globalAlpha=s.cryoOpen?1:r;for(let o=-4;o<20;o++)n.beginPath(),n.moveTo(o*40,0),n.lineTo(o*40+20,0),n.lineTo(o*40-20,26),n.lineTo(o*40-40,26),n.fill(),n.beginPath(),n.moveTo(o*40,t-26),n.lineTo(o*40+20,t-26),n.lineTo(o*40-20,t),n.lineTo(o*40-40,t),n.fill();n.textAlign="center",n.font='600 52px "Exo 2", sans-serif',n.fillText(s.cryoOpen?"ACCESS GRANTED":"RESTRICTED",e/2,t*.47),n.font=`20px ${di}`,n.fillText(s.cryoOpen?"CRYOGENIC LABORATORY":"LEVEL-3 CLEARANCE REQUIRED",e/2,t*.68),n.globalAlpha=1,n.textAlign="left"},holo(n,e,t,i){n.clearRect(0,0,e,t),n.strokeStyle=En,n.fillStyle=En,n.lineWidth=2,n.font=`18px ${di}`,n.fillText("UPLINK // ORBITAL RELAY",12,24),n.strokeRect(6,6,e-12,t-12);for(let s=0;s<7;s++){let r=.3+.6*Math.abs(Math.sin(i*.9+s));n.fillRect(20+s*34,t-20-r*120,22,r*120)}n.beginPath();for(let s=0;s<200;s+=3){let r=90+Math.sin(s*.07+i*2)*22;s?n.lineTo(270+s,r):n.moveTo(270+s,r)}n.stroke(),n.beginPath(),n.arc(370,190,40,i%6.28,i%6.28+4.5),n.stroke()},dna(n,e,t,i){Gs(n,e,t,"GENOME SEQUENCER");for(let s=0;s<40;s++){let r=20+s*((e-40)/40),o=Math.sin(i*2+s*.4);n.fillStyle=En,n.fillRect(r,t/2+o*50,6,6),n.fillStyle=uh,n.fillRect(r,t/2-o*50,6,6),n.fillStyle=ch,n.fillRect(r+2,t/2-Math.abs(o)*50,2,Math.abs(o)*100)}n.font=`15px ${di}`,n.fillStyle=_s,n.fillText("SEQ "+(Math.floor(i*40)%1e5).toString().padStart(6,"0")+"  ATCG-GCTA-TTAG",16,t-24)}};function A0(){let n={},e=[],t={restored:!1,cryoOpen:!1,scanned:!1,transmitted:!1};for(let r of Object.keys(dh)){let o=document.createElement("canvas");o.width=512,o.height=288;let a=o.getContext("2d"),l=new Bi(o);l.colorSpace=Gt,l.anisotropy=4;let h=r==="holo"?new Ht({map:l,transparent:!0,blending:fn,depthWrite:!1,side:$t,color:new ge(1.6,1.6,1.6)}):new Ht({map:l,color:new ge(1.5,1.5,1.5),toneMapped:!0});h.polygonOffset=!0,h.polygonOffsetFactor=-1,h.polygonOffsetUnits=-4,h.userData.noShadow=!0,h.userData.keepUV=!0,h.name="scr_"+r,n[r]=h,e.push({k:r,c:o,g:a,t:l}),dh[r](a,512,288,0,t),l.needsUpdate=!0}let i=0,s=0;return{S:n,state:t,update(r,o){if(s+=r,s<.06)return;s=0;let a=e[i++%e.length];a.k!=="welcome"&&(dh[a.k](a.g,512,288,o,t),a.t.needsUpdate=!0)},redrawAll(r){for(let o of e)dh[o.k](o.g,512,288,r,t),o.t.needsUpdate=!0}}}function C0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new ft,c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=R0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=R0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function R0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new dt(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function P0(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,b=a.length;y<b;y++){let v=a[y],S=n.attributes[v];l[v]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let M=n.morphAttributes[v];M&&(c[v]||(c[v]=[]),M.forEach((w,_)=>{let T=new w.array.constructor(w.count*w.itemSize);c[v][_]=new w.constructor(T,w.itemSize,w.normalized)}))}let d=e*.5,p=Math.log10(1/e),x=Math.pow(10,p),g=d*x;for(let y=0;y<r;y++){let b=i?i.getX(y):y,v="";for(let S=0,M=a.length;S<M;S++){let w=a[S],_=n.getAttribute(w),T=_.itemSize;for(let A=0;A<T;A++)v+=`${Math.trunc(_[u[A]](b)*x+g)},`}if(v in t)h.push(t[v]);else{for(let S=0,M=a.length;S<M;S++){let w=a[S],_=n.getAttribute(w),T=n.morphAttributes[w],A=_.itemSize,P=l[w],L=c[w];for(let U=0;U<A;U++){let D=u[U],N=f[U];if(P[N](o,_[D](b)),T)for(let z=0,B=T.length;z<B;z++)L[z][N](o,T[z][D](b))}}t[v]=o,h.push(o),o++}}let m=n.clone();for(let y in n.attributes){let b=l[y];if(m.setAttribute(y,new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)),y in c)for(let v=0;v<c[y].length;v++){let S=c[y][v];m.morphAttributes[y][v]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return m.setIndex(h),m}var Na=new C;function Kn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Na.copy(e),Na[i]=0,Na.normalize();let c=.5*o/(o+a),h=1-Na.angleTo(n)/l;return Math.sign(Na[t])===1?h*c:a/(o+a)+c+c*(1-h)}var fh=class n extends Ye{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new C,c=new C,h=new C(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new C,g=.5/o;for(let m=0,y=0;m<u.length;m+=3,y+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),d[y+0]=Kn(x,c,"z","y",r,i),d[y+1]=1-Kn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[y+0]=1-Kn(x,c,"z","y",r,i),d[y+1]=1-Kn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[y+0]=1-Kn(x,c,"x","z",r,e),d[y+1]=Kn(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),d[y+0]=1-Kn(x,c,"x","z",r,e),d[y+1]=1-Kn(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),d[y+0]=1-Kn(x,c,"x","y",r,e),d[y+1]=1-Kn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[y+0]=Kn(x,c,"x","y",r,e),d[y+1]=1-Kn(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var I0=.016,yb=.9995,D0=1e-5,vb=16,yd=128;function N0(n){let e=performance.now(),t=0;for(let g of n)t+=g.g.attributes.position.count/3;let i=new Int32Array(t),s=new Int32Array(t),r=new Float32Array(t*3),o=new Float64Array(t),a=new Map,l=0;n.forEach((g,m)=>{let y=g.g.attributes.position.array;for(let b=0,v=0;b<y.length;b+=9,v++){let S=y[b+3]-y[b],M=y[b+4]-y[b+1],w=y[b+5]-y[b+2],_=y[b+6]-y[b],T=y[b+7]-y[b+1],A=y[b+8]-y[b+2],P=M*A-w*T,L=w*_-S*A,U=S*T-M*_,D=Math.hypot(P,L,U);if(D<1e-6)continue;P/=D,L/=D,U/=D,i[l]=m,s[l]=v,r[l*3]=P,r[l*3+1]=L,r[l*3+2]=U,o[l]=P*y[b]+L*y[b+1]+U*y[b+2];let N=_b(P,L,U,Math.round(o[l]/(I0*2))),z=a.get(N);z||a.set(N,z=[]),z.push(l),l++}});let c=(g,m,y)=>{let b=n[i[g]].g.attributes.position.array,v=s[g]*9,S=[];for(let M=0;M<3;M++){let w=b[v+M*3],_=b[v+M*3+1],T=b[v+M*3+2];S.push([w*m[0]+_*m[1]+T*m[2],w*y[0]+_*y[1]+T*y[2]])}return S},h=new Map;for(let[g,m]of a){let y=a.get(g+1),b=y?m.concat(y):m;if(b.length<2)continue;let v=Math.floor(g/1e6),S=v%129-64,M=Math.floor(v/129)%129-64,w=Math.floor(v/16641)-64,_=Math.hypot(w,M,S),T=w/_,A=M/_,P=S/_,L=Math.abs(A)<.9?[0,1,0]:[1,0,0],U=[L[1]*P-L[2]*A,L[2]*T-L[0]*P,L[0]*A-L[1]*T],D=Math.hypot(U[0],U[1],U[2]);U=[U[0]/D,U[1]/D,U[2]/D];let N=[A*U[2]-P*U[1],P*U[0]-T*U[2],T*U[1]-A*U[0]],z=b.map(G=>{let F=Sb(c(G,U,N));return{c:G,T:F,x0:Math.min(F[0][0],F[1][0],F[2][0]),x1:Math.max(F[0][0],F[1][0],F[2][0]),y0:Math.min(F[0][1],F[1][1],F[2][1]),y1:Math.max(F[0][1],F[1][1],F[2][1])}});z.sort((G,F)=>G.x0-F.x0);let B=new Set(m);for(let G=0;G<z.length;G++){let F=z[G];for(let Z=G+1;Z<z.length&&z[Z].x0<F.x1;Z++){let Y=z[Z];if(Y.y0>=F.y1||Y.y1<=F.y0)continue;let ye=F.c,de=Y.c;if(i[ye]===i[de]||!B.has(ye)&&!B.has(de)||r[ye*3]*r[de*3]+r[ye*3+1]*r[de*3+1]+r[ye*3+2]*r[de*3+2]<yb)continue;let nt=o[de]-o[ye];if(Math.abs(nt)>I0)continue;let Je=n[i[ye]].opaque,st=n[i[de]].opaque;if(!Je&&!st)continue;let K=Je!==st?st:Math.abs(nt)<1e-4?i[de]>i[ye]:nt>0,[ee,ue]=K?[F,Y]:[Y,F],Ue=n[i[ee.c]],Xe=n[i[ue.c]].layer!==Ue.layer&&Ue.layer===0&&r[ee.c*3+1]<.5,lt=h.get(ee.c);lt||h.set(ee.c,lt={T:ee.T,os:[],keep:!1}),lt.os.push(ue.T),lt.keep||(lt.keep=Xe)}}}let u=new Map,f=0,d=[];for(let[g,{T:m,os:y,keep:b}]of h){let v=Math.abs(Wi(m))<4?yd:vb,S=[m];for(let T of y){let A=[];for(let P of S){let L=P;for(let U=0;U<3&&L.length>2;U++){let D=T[U],N=T[(U+1)%3],z=L0(L,N,D);z.length>2&&!bb(z)&&A.push(z),L=L0(L,D,N)}}if(S=A,!S.length||S.length>yd)break}if(S.length>v){let T=S.reduce((A,P)=>A+Math.abs(Wi(P)),0);if(S.length<=yd&&T<.02*Math.abs(Wi(m)))S=[];else{f++;continue}}let M=Math.abs(Wi(m)),w=S.reduce((T,A)=>T+Math.abs(Wi(A)),0);if(M-w<D0)continue;if(b){let T=n[i[g]].g.attributes.position.array,A=s[g]*9;for(let P=0;P<9;P++)d.push(T[A+P])}let _=u.get(i[g]);_||u.set(i[g],_=new Map),_.set(s[g],{polys:S,T:m})}let p=0,x=0;for(let[g,m]of u){let y=n[g].g,b=y.attributes.position.array,v=y.attributes.normal.array,S=y.attributes.uv.array,M=[],w=[],_=[],T=b.length/9;for(let A=0;A<T;A++){let P=m.get(A);if(!P){for(let D=0;D<3;D++){let N=A*3+D;M.push(b[N*3],b[N*3+1],b[N*3+2]),w.push(v[N*3],v[N*3+1],v[N*3+2]),_.push(S[N*2],S[N*2+1])}continue}p++;let L=P.T,U=L.flip?[0,2,1]:[0,1,2];for(let D of P.polys)for(let N=1;N+1<D.length;N++){let z=L.flip?[D[0],D[N+1],D[N]]:[D[0],D[N],D[N+1]];if(!(Math.abs(Wi(z))<1e-7))for(let B of z){let G=Mb(L,B);x+=1/3;for(let F=0;F<3;F++){let Z=0;for(let Y=0;Y<3;Y++)Z+=G[Y]*b[(A*3+U[Y])*3+F];M.push(Z)}for(let F=0;F<3;F++){let Z=0;for(let Y=0;Y<3;Y++)Z+=G[Y]*v[(A*3+U[Y])*3+F];w.push(Z)}for(let F=0;F<2;F++){let Z=0;for(let Y=0;Y<3;Y++)Z+=G[Y]*S[(A*3+U[Y])*2+F];_.push(Z)}}}}y.setAttribute("position",new Ze(M,3)),y.setAttribute("normal",new Ze(w,3)),y.setAttribute("uv",new Ze(_,2))}return{shadow:new Float32Array(d),triangles:t,cut:p,added:Math.round(x),skipped:f,pieces:u.size,ms:Math.round(performance.now()-e)}}function _b(n,e,t,i){return(((Math.round(n*40)+64)*129+(Math.round(e*40)+64))*129+(Math.round(t*40)+64))*1e6+(i+5e5)}function bb(n){let e=Math.abs(Wi(n));if(e<D0)return!0;let t=0;for(let i=0;i<n.length;i++){let s=n[i],r=n[(i+1)%n.length];t+=Math.hypot(r[0]-s[0],r[1]-s[1])}return e/t<.001}function Wi(n){let e=0;for(let t=0;t<n.length;t++){let i=n[t],s=n[(t+1)%n.length];e+=i[0]*s[1]-i[1]*s[0]}return e/2}function Sb(n){let e=Wi(n)<0?[n[0],n[2],n[1]]:[n[0],n[1],n[2]];return e.flip=Wi(n)<0,e}function L0(n,e,t){let i=[],s=t[0]-e[0],r=t[1]-e[1];for(let o=0;o<n.length;o++){let a=n[o],l=n[(o+1)%n.length],c=s*(a[1]-e[1])-r*(a[0]-e[0]),h=s*(l[1]-e[1])-r*(l[0]-e[0]);if(c>=0&&i.push(a),c>=0!=h>=0){let u=c/(c-h);i.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u])}}return i}function Mb(n,e){let[t,i,s]=n,r=i[0]-t[0],o=i[1]-t[1],a=s[0]-t[0],l=s[1]-t[1],c=e[0]-t[0],h=e[1]-t[1],u=r*l-a*o,f=(c*l-a*h)/u,d=(r*h-c*o)/u;return[1-f-d,f,d]}var U0=new tn,O0=new Xn,vd=new C,F0=new C,H0=new Ye(1,1,1),k0=new Map;function Vs(n,e){let t=k0.get(n);return t||(t=e(),k0.set(n,t)),t}var Re={box:()=>H0,cyl:(n=16,e=!1)=>Vs("cyl"+n+e,()=>new at(1,1,1,n,1,e)),cone:(n,e,t=16,i=!1)=>Vs(`cone${n}_${e}_${t}${i}`,()=>new at(n,e,1,t,1,i)),sphere:(n=16,e=12)=>Vs("sph"+n+"_"+e,()=>new vt(1,n,e)),hemi:(n=24,e=10)=>Vs("hemi"+n+"_"+e,()=>new vt(1,n,e,0,Math.PI*2,0,Math.PI/2)),rbox:(n,e,t,i,s=2)=>Vs(`rb${n}_${e}_${t}_${i}_${s}`,()=>new fh(n,e,t,s,i)),torus:(n,e,t=8,i=32,s=Math.PI*2)=>Vs(`tor${n}_${e}_${t}_${i}_${s}`,()=>new Xt(n,e,t,i,s)),plane:()=>Vs("plane",()=>new dn(1,1))};function Eb(n,e){let t=n.attributes.position,i=n.attributes.normal,s=n.attributes.uv;s||(s=new dt(new Float32Array(t.count*2),2),n.setAttribute("uv",s));let r=1/e;for(let o=0;o<t.count;o++){let a=Math.abs(i.getX(o)),l=Math.abs(i.getY(o)),c=Math.abs(i.getZ(o)),h,u;l>=a&&l>=c?(h=t.getX(o),u=t.getZ(o)):a>=c?(h=t.getZ(o),u=t.getY(o)):(h=t.getX(o),u=t.getY(o)),s.setXY(o,h*r,u*r)}s.needsUpdate=!0}var ph=class{constructor(e){this.world=e,this.stack=[new Be],this.batches=new Map,this.chunk="ext",this.interior=!1,this.lights=[],this.envOverride=null,this.variants=new Map,this.tris=0,this.seq=0}get M(){return this.stack[this.stack.length-1]}push(e=0,t=0,i=0,s=0){let r=new Be().makeRotationY(s);return r.setPosition(e,t,i),this.stack.push(this.M.clone().multiply(r)),this}pop(){return this.stack.pop(),this}wp(e,t,i){return new C(e,t,i).applyMatrix4(this.M)}worldYaw(e=0){return new Xn().setFromRotationMatrix(this.M,"YXZ").y+e}mat(e,t,i,s=0,r=0,o=0,a=1,l=1,c=1){return O0.set(s,r,o,"YXZ"),U0.setFromEuler(O0),vd.set(e,t,i),F0.set(a,l,c),new Be().compose(vd,U0,F0).premultiply(this.M)}add(e,t,i=0,s=0,r=0,o=0,a=0,l=0,c=1,h=1,u=1,f={}){return this.addM(e,t,this.mat(i,s,r,o,a,l,c,h,u),f)}variant(e,t){if(t===1||!e.isMeshStandardMaterial)return e;let i=e.uuid+"|"+t,s=this.variants.get(i);return s||(s=e.clone(),e.userData.clean&&Object.assign(s,e.userData.clean),s.envMapIntensity=(e.envMapIntensity??1)*t,s.name=e.name+"_i"+t,this.variants.set(i,s)),s}addM(e,t,i,s={}){let r=s.interior!==void 0?s.interior:this.interior,o=s.envScale??(r?this.envOverride??.4:1);t=this.variant(t,o);let a=e.index?e.toNonIndexed():e.clone();for(let f of Object.keys(a.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&a.deleteAttribute(f);a.attributes.normal||a.computeVertexNormals(),a.attributes.uv||a.setAttribute("uv",new dt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(i),a.userData.order=this.seq++,globalThis.__GEO_REC&&globalThis.__GEO_REC(a,t);let l=s.uv!==void 0?s.uv:t.userData.uv;l&&!s.keepUV&&!t.userData.keepUV&&Eb(a,l);let c=s.chunk||this.chunk,h=c+"|"+t.uuid,u=this.batches.get(h);return u||(u={mat:t,chunk:c,geos:[],interior:s.interior!==void 0?s.interior:this.interior},this.batches.set(h,u)),u.geos.push(a),this.tris+=a.attributes.position.count/3,a}box(e,t,i,s,r,o,a,l=0,c={}){this.add(H0,e,t,i,s,0,l,0,r,o,a,c),c.col&&this.colBox(t,i,s,r,o,a,l,c.col===!0?"solid":c.col,c)}boxB(e,t,i,s,r,o,a,l=0,c={}){this.box(e,t,i+o/2,s,r,o,a,l,c)}wall(e,t,i,s,r,o,a,l,c={}){let h=s-t,u=r-i,f=Math.hypot(h,u),d=Math.atan2(h,u);this.box(e,(t+s)/2,o+a/2,(i+r)/2,l,a,f+(c.extend||0),d,c)}rbox(e,t,i,s,r,o,a,l,c=0,h={}){this.add(Re.rbox(r,o,a,l,h.seg||2),e,t,i,s,0,c,0,1,1,1,h),h.col&&this.colBox(t,i,s,r,o,a,c,h.col===!0?"solid":h.col,h)}cyl(e,t,i,s,r,o,a=16,l={}){this.add(Re.cyl(a,!!l.open),e,t,i,s,l.rx||0,l.ry||0,l.rz||0,r,o,l.rz2||r,l),l.col&&this.colCyl(t,i-o/2,s,r,o,l.colSeg||10,l.col===!0?"solid":l.col,l)}pipe(e,t,i,s,r,o,a,l,c=10){let h=new C(t,i,s),u=new C(r,o,a),f=u.clone().sub(h),d=f.length(),p=new tn().setFromUnitVectors(new C(0,1,0),f.normalize()),x=new Be().compose(h.add(u).multiplyScalar(.5),p,new C(l,d,l)).premultiply(this.M);this.addM(Re.cyl(c,!0),e,x)}sphere(e,t,i,s,r,o={}){this.add(Re.sphere(o.w||16,o.h||12),e,t,i,s,0,0,0,r*(o.sx||1),r*(o.sy||1),r*(o.sz||1),o)}flat(e,t,i,s,r=!1,o={}){let a=u0(t,i||[],r);this.addM(a,e,this.mat(0,s,0),o)}slab(e,t,i,s,r,o={}){let a=d0(t,i||[],r-s,o.curveSegs||12,o.top!==!1);if(o.bottom==="shadow"){a.index&&(a=a.toNonIndexed());let l=a.attributes.position.array,c=[],h=[];for(let f=0;f<l.length/9;f++)(l[f*9+1]<1e-4&&l[f*9+4]<1e-4&&l[f*9+7]<1e-4?c:h).push(f);let u=f=>{let d=new ft;for(let[p,x]of Object.entries(a.attributes)){let g=x.itemSize*3,m=new Float32Array(f.length*g);f.forEach((y,b)=>m.set(x.array.subarray(y*g,y*g+g),b*g)),d.setAttribute(p,new dt(m,x.itemSize))}return d};this.addM(u(c),this.shadowOnly(),this.mat(0,s,0),{...o,interior:!1}),a=u(h)}this.addM(a,e,this.mat(0,s,0),o),o.col&&this.colPoly(t,s,r,o.col===!0?"floor":o.col,{holes:i,tag:o.tag})}geo(e,t,i=0,s=0,r=0,o=0,a=1,l={}){this.add(e,t,i,s,r,0,o,0,a,a,a,l)}shadowOnly(){return this._shadowMat||(this._shadowMat=new Ht({colorWrite:!1,depthWrite:!1}),this._shadowMat.name="shadowOnly",this._shadowMat.userData.shadowOnly=!0),this._shadowMat}xz(e,t){let i=vd.set(e,0,t).applyMatrix4(this.M);return[i.x,i.z]}yW(e){return e+this.M.elements[13]}colBox(e,t,i,s,r,o,a=0,l="solid",c={}){let h=Math.cos(a),u=Math.sin(a),f=s/2,d=o/2,p=[[-f,-d],[f,-d],[f,d],[-f,d]].map(([x,g])=>this.xz(e+x*h+g*u,i-x*u+g*h));return this.world.add(p,this.yW(t-r/2),this.yW(t+r/2),l,c)}colBoxB(e,t,i,s,r,o,a=0,l="solid",c={}){return this.colBox(e,t+r/2,i,s,r,o,a,l,c)}colCyl(e,t,i,s,r,o=10,a="solid",l={}){let c=[];for(let h=0;h<o;h++){let u=h/o*Math.PI*2;c.push(this.xz(e+Math.cos(u)*s,i+Math.sin(u)*s))}return this.world.add(c,this.yW(t),this.yW(t+r),a,l)}colPoly(e,t,i,s="floor",r={}){let o=e.map(([l,c])=>this.xz(l,c)),a=r.holes?r.holes.map(l=>l.map(([c,h])=>this.xz(c,h))):null;return this.world.add(o,this.yW(t),this.yW(i),s,{...r,holes:a})}colWall(e,t,i,s,r,o,a=.3,l={}){let c=i-e,h=s-t,u=Math.hypot(c,h);return this.colBox((e+i)/2,r+o/2,(t+s)/2,a,o,u,Math.atan2(c,h),"solid",l)}light(e,t,i,s=14677247,r=30,o=14){let a=this.wp(e,t,i);this.lights.push({p:a,color:new ge(s),intensity:r,dist:o})}finalize(e){let t=[],i=[];for(let s of this.batches.values()){let r=s.mat,o=!r.transparent&&!r.alphaTest&&(r.opacity??1)>=1&&!r.userData.shadowOnly;for(let a of s.geos)i.push({g:a,opaque:o,layer:s.interior?1:0})}if(i.sort((s,r)=>s.g.userData.order-r.g.userData.order),this.dedupe=N0(i),this.dedupe.shadow.length){let s=new ft;s.setAttribute("position",new dt(this.dedupe.shadow,3));let r=new J(s,new Ht({colorWrite:!1,depthWrite:!1}));r.castShadow=!0,r.receiveShadow=!1,r.name="shadowOnly",r.matrixAutoUpdate=!1,r.updateMatrix(),r.frustumCulled=!1,e.add(r)}for(let s of this.batches.values()){let r=C0(s.geos,!1);for(let a of s.geos)a.dispose();if(!r)continue;r.computeBoundingSphere(),r.computeBoundingBox();let o=new J(r,s.mat);o.castShadow=!s.mat.userData.noShadow,o.receiveShadow=!s.mat.userData.noShadow||s.mat.transparent===!1,o.matrixAutoUpdate=!1,o.updateMatrix(),o.name=s.chunk+":"+s.mat.name,s.interior&&o.layers.set(1),e.add(o),t.push(o)}return this.batches.clear(),t}};var mh=class{constructor(e=6){this.cell=e,this.grid=new Map,this.all=[],this.stamp=0}add(e,t,i,s="solid",r={}){if(s==="solid"){let f=0;for(let d=0;d<e.length;d++){let p=e[d],x=e[(d+1)%e.length];f+=p[0]*x[1]-x[0]*p[1]}f<0&&(e=e.slice().reverse())}let o={pts:e,y0:t,y1:i,floor:s==="floor",holes:r.holes||null,enabled:!0,tag:r.tag||null,dyn:!!r.dyn,_s:0},a=1e9,l=-1e9,c=1e9,h=-1e9;for(let[f,d]of e)a=Math.min(a,f),l=Math.max(l,f),c=Math.min(c,d),h=Math.max(h,d);if(Object.assign(o,{minX:a,maxX:l,minZ:c,maxZ:h}),!o.floor){o.n=[];for(let f=0;f<e.length;f++){let d=e[f],p=e[(f+1)%e.length],x=p[0]-d[0],g=p[1]-d[1],m=Math.hypot(x,g)||1;o.n.push([g/m,-x/m])}}let u=this.cell;for(let f=Math.floor(a/u);f<=Math.floor(l/u);f++)for(let d=Math.floor(c/u);d<=Math.floor(h/u);d++){let p=f*73856+d,x=this.grid.get(p);x||(x=[],this.grid.set(p,x)),x.push(o)}return this.all.push(o),o}query(e,t,i,s){s.length=0;let r=this.cell,o=++this.stamp;for(let a=Math.floor((e-i)/r);a<=Math.floor((e+i)/r);a++)for(let l=Math.floor((t-i)/r);l<=Math.floor((t+i)/r);l++){let c=this.grid.get(a*73856+l);if(c)for(let h of c)h._s===o||!h.enabled||(h._s=o,!(e+i<h.minX||e-i>h.maxX||t+i<h.minZ||t-i>h.maxZ)&&s.push(h))}return s}contains(e,t,i){if(t<e.minX||t>e.maxX||i<e.minZ||i>e.maxZ||!fd(e.pts,t,i))return!1;if(e.holes){for(let s of e.holes)if(fd(s,t,i))return!1}return!0}push(e,t,i,s){let r=e.pts,o=e.n,a=-1e9,l=0;for(let d=0;d<r.length;d++){let p=(t-r[d][0])*o[d][0]+(i-r[d][1])*o[d][1];p>a&&(a=p,l=d)}if(a>=s)return null;if(a<=0)return[o[l][0]*(s-a),o[l][1]*(s-a)];let c=1e9,h=0,u=0;for(let d=0;d<r.length;d++){let p=r[d],x=r[(d+1)%r.length],g=x[0]-p[0],m=x[1]-p[1],y=((t-p[0])*g+(i-p[1])*m)/(g*g+m*m||1);y=Math.max(0,Math.min(1,y));let b=p[0]+g*y,v=p[1]+m*y,S=(t-b)**2+(i-v)**2;S<c&&(c=S,h=b,u=v)}let f=Math.sqrt(c);return f>=s||f<1e-6?null:[(t-h)/f*(s-f),(i-u)/f*(s-f)]}},gh=class{constructor(e){this.world=e,this.pos={x:0,y:6,z:0},this.vel={x:0,y:0,z:0},this.radius=.34,this.height=1.78,this.step=.55,this.grounded=!1,this.groundCol=null,this.groundY=0,this.safe={x:0,y:6,z:0},this._c=[],this.fly=!1}groundAt(e,t,i){let s=this.world.query(e,t,.01,this._c),r=-1e9,o=null;for(let a of s)a.y1>i+this.step+.01||a.y1<=r||this.world.contains(a,e,t)&&(r=a.y1,o=a);return[r,o]}ceilingAt(e,t,i){let s=this.world.query(e,t,.01,this._c),r=1e9;for(let o of s)o.y0<=i+this.step||o.y0<r&&this.world.contains(o,e,t)&&(r=o.y0);return r}move(e,t,i,s){let r=this.pos,o=this.vel;if(this.fly){r.x+=t*e,r.z+=i*e,r.y+=o.y*e;return}if(this.grounded&&this.groundCol&&this.groundCol.dyn){let f=this.groundCol.y1;Math.abs(f-r.y)<.6&&(r.y=f)}let a=this.grounded?14:3;o.x+=(t-o.x)*Math.min(1,a*e),o.z+=(i-o.z)*Math.min(1,a*e),s&&this.grounded&&(o.y=5.2,this.grounded=!1),o.y-=19.6*e,o.y<-40&&(o.y=-40);let l=2;for(let f=0;f<l;f++){r.x+=o.x*e/l,r.z+=o.z*e/l;for(let d=0;d<3;d++){let p=this.world.query(r.x,r.z,this.radius+.1,this._c),x=!1;for(let g of p){if(g.floor||g.y1<=r.y+this.step||g.y0>=r.y+this.height)continue;let m=this.world.push(g,r.x,r.z,this.radius);if(m){r.x+=m[0],r.z+=m[1],x=!0;let y=Math.hypot(m[0],m[1])||1,b=m[0]/y,v=m[1]/y,S=o.x*b+o.z*v;S<0&&(o.x-=S*b,o.z-=S*v)}}if(!x)break}}let[c,h]=this.groundAt(r.x,r.z,r.y),u=r.y+o.y*e;if(o.y<=0&&u<=c+.001)r.y=c,o.y=0,this.grounded=!0,this.groundCol=h,this.groundY=c;else if(o.y<=0&&this.grounded&&c>r.y-this.step&&c<=r.y)r.y=c,o.y=0,this.groundCol=h,this.groundY=c;else if(r.y=u,this.grounded=!1,this.groundCol=null,o.y>0){let f=this.ceilingAt(r.x,r.z,r.y-o.y*e);r.y+this.height>f&&(r.y=f-this.height,o.y=0)}this.grounded&&h&&!h.dyn&&c>1&&(this.safe.x=r.x,this.safe.y=r.y,this.safe.z=r.z)}};function cn(n,e,t,i,s,r,o,a={}){let l=s-t,c=r-i,h=Math.hypot(l,c);if(h<.05)return;let u=Math.atan2(l,c),f=a.h||1.1,d=(t+s)/2,p=(i+r)/2,x=Math.max(1,Math.round(h/(a.spacing||1.9)));for(let g=0;g<=x;g++){let m=g/x;n.box(e.metal,t+l*m,o+f/2,i+c*m,.07,f,.07,u)}if(a.glass!==!1)n.box(e.glass,d,o+.1+(f-.24)/2,p,.025,f-.24,h,u);else for(let g of[.35,.7])n.box(e.metal,d,o+g,p,.03,.03,h,u);n.pipe(e.metal,t,o+f,i,s,o+f,r,.045,8),a.led!==!1&&n.box(e.cyanSoft,d,o+f-.075,p,.035,.025,h,u),n.box(e.metal,d,o+.05,p,.06,.05,h,u),a.col!==!1&&n.colWall(t,i,s,r,o,f+.1,.16)}function _d(n,e,t,i,s,r,o,a=1.2){let l=s-t,c=r-i,h=Math.hypot(l,c);if(h<.05)return;let u=Math.atan2(l,c),f=(t+s)/2,d=(i+r)/2;n.box(e.white,f,o+a/2,d,.5,a,h,u),n.box(e.metal,f,o+a+.04,d,.6,.08,h,u),n.box(e.cyanSoft,f,o+a-.12,d,.62,.04,h-.2,u),n.box(e.dark,f,o+.12,d,.54,.24,h,u),n.colWall(t,i,s,r,o,a+.1,.5)}function xh(n,e,t,i,s={}){for(let r=0;r<t.length-1;r++)cn(n,e,t[r][0],t[r][1],t[r+1][0],t[r+1][1],i,s)}function Jn(n,e,t,i,s,r,o=1.8){n.push(t,i,s,r),n.rbox(e.whiteSmooth,0,.44,0,o,.09,.52,.04),n.rbox(e.darkSmooth,-o/2+.25,.2,0,.12,.4,.44,.03),n.rbox(e.darkSmooth,o/2-.25,.2,0,.12,.4,.44,.03),n.box(e.cyanDim,0,.39,.2,o-.3,.015,.02),n.colBox(0,.25,0,o,.5,.5),n.pop()}function Bs(n,e,t,i,s,r,o){n.push(t,i,s,r),n.rbox(o||e.whiteSmooth,0,.46,0,.48,.06,.46,.025),n.rbox(o||e.whiteSmooth,0,.78,-.22,.48,.5,.05,.025);for(let[a,l]of[[-.2,-.19],[.2,-.19],[-.2,.19],[.2,.19]])n.cyl(e.chrome,a,.22,l,.016,.44,6);n.colBox(0,.4,0,.44,.8,.44),n.pop()}function z0(n,e,t,i,s,r){n.cyl(r||e.orangeGloss,t,i+.72,s,.2,.06,16),n.cyl(e.chrome,t,i+.36,s,.03,.7,8),n.cyl(e.chrome,t,i+.02,s,.2,.03,16)}function Ua(n,e,t,i,s,r=.55,o=.75){n.cyl(e.whiteSmooth,t,i+o-.02,s,r,.04,28),n.cyl(e.chrome,t,i+o/2,s,.05,o-.04,10),n.cyl(e.darkSmooth,t,i+.015,s,r*.55,.03,20),n.colCyl(t,i,s,r*.7,o,10)}function yh(n,e,t,i,s,r,o=3,a){Ua(n,e,t,i,s,.55);for(let l=0;l<o;l++){let c=r+l/o*Math.PI*2;Bs(n,e,t+Math.sin(c)*.95,i,s+Math.cos(c)*.95,c+Math.PI,a)}}function jr(n,e,t,i,s,r,o=2.4,a){a=a||e.orange,n.push(t,i,s,r),n.rbox(e.darkSmooth,0,.12,0,o,.24,.9,.04);let l=Math.max(1,Math.round(o/.9)),c=(o-.3)/l;for(let h=0;h<l;h++)n.rbox(a,-o/2+.15+c*(h+.5),.36,.06,c-.03,.22,.74,.08,0,{seg:3});n.rbox(a,0,.66,-.34,o,.52,.22,.09,0,{seg:3}),n.rbox(a,-o/2+.08,.5,0,.16,.36,.9,.06),n.rbox(a,o/2-.08,.5,0,.16,.36,.9,.06),n.box(e.orangeLight,0,.03,.45,o-.2,.02,.02),n.colBox(0,.45,0,o,.9,.9),n.pop()}function Qr(n,e,t,i,s,r,o){n.push(t,i,s,r),n.rbox(o||e.orange,0,.3,0,.9,.36,.85,.1,0,{seg:3}),n.rbox(o||e.orange,0,.7,-.33,.9,.55,.2,.09,0,{seg:3}),n.cyl(e.chrome,0,.06,0,.3,.12,20),n.colBox(0,.45,0,.9,.9,.85),n.pop()}function vh(n,e,t,i,s,r,o=1.4,a=.8){n.push(t,i,s,r),n.rbox(e.whiteSmooth,0,.38,0,o,.05,a,.02),n.rbox(e.darkSmooth,0,.18,0,o-.2,.34,a-.2,.03),n.box(e.cyanDim,0,.02,0,o-.18,.01,a-.18),n.colBox(0,.2,0,o,.4,a),n.pop()}function G0(n,e,t,i,s,r,o,a,l){n.box(l||e.fabricGrey,t,i+.008,s,o,.012,a,r)}function eo(n,e,t,i,s,r,o=2,a=2,l=.5){n.push(t,i,s,r),n.rbox(e.whiteClean,0,a/2,0,o,a,l,.03);let c=Math.max(1,Math.round(o/.6));for(let h=1;h<c;h++)n.box(e.darkInlay,-o/2+h*o/c,a/2,l/2+.001,.012,a-.1,.01);n.box(e.darkInlay,0,a*.55,l/2+.001,o-.05,.012,.01);for(let h=0;h<c;h++)n.box(e.chrome,-o/2+(h+.5)*o/c+.18,a*.62,l/2+.02,.02,.18,.02);n.box(e.cyanSoft,0,a+.005,l/2-.02,o-.06,.012,.02),n.colBox(0,a/2,0,o,a,l),n.pop()}function to(n,e,t,i,s,r,o=4){n.push(t,i,s,r);let a=.6;for(let l=0;l<o;l++){let c=-o*a/2+(l+.5)*a;n.box(e.whiteClean,c,1,0,a-.02,2,.55),n.box(e.darkSmooth,c,1.55,.28,a-.14,.12,.01);for(let h=0;h<4;h++)n.box(e.darkSmooth,c,1.72+h*.04,.281,a-.2,.015,.01);n.box(e.cyan,c+.2,1.1,.285,.03,.03,.01),n.box(e.chrome,c+.2,1,.29,.02,.14,.02)}n.colBox(0,1,0,o*a,2,.55),n.pop()}function Oa(n,e,t,i,s,r,o=1.2,a=1.6){n.push(t,i,s,r),n.box(e.dark,0,a/2,.04,o,a,.08);let l=zt(t*100+s*7|0);for(let c=0;c<10;c++)n.box([e.cyan,e.amber,e.green,e.cyanSoft][l()*4|0],-o/2+.12+l()*(o-.24),.2+l()*(a-.4),.085,.05,.03,.01);n.box(e.darkInlay,0,a*.72,.085,o*.7,a*.22,.01),n.pop()}function jn(n,e,t,i,s,r,o,a,l,c=.06){n.push(i,s,r,o),n.rbox(e.darkSmooth,0,0,0,a+c*2,l+c*2,.07,.02),n.add(Re.plane(),t,0,0,.037,0,0,0,a,l,1,{keepUV:!0}),n.pop()}function Fa(n,e,t,i,s,r,o,a=.62,l=.36){n.push(i,s,r,o),n.box(e.darkSmooth,0,l/2+.16,0,a+.03,l+.03,.03),n.add(Re.plane(),t,0,l/2+.16,.0155,0,0,0,a,l,1,{keepUV:!0}),n.box(e.chrome,0,.08,-.04,.04,.16,.03),n.box(e.darkSmooth,0,.005,-.03,.22,.01,.16),n.pop()}function ka(n,e,t,i,s,r,o){n.push(t,i,s,r),n.rbox(o||e.fabricGrey,0,.5,0,.5,.08,.5,.03),n.rbox(o||e.fabricGrey,0,.88,-.24,.46,.6,.06,.03),n.cyl(e.chrome,0,.3,0,.03,.4,8);for(let a=0;a<5;a++){let l=a/5*Math.PI*2;n.box(e.darkSmooth,Math.sin(l)*.15,.06,Math.cos(l)*.15,.04,.03,.3,l)}n.pop()}function V0(n,e,t,i,s,r,o,a=1.8,l=["status","log"]){n.push(i,s,r,o),n.rbox(e.whiteSmooth,0,.74,0,a,.05,.8,.02),n.box(e.darkSmooth,-a/2+.06,.37,0,.06,.72,.7),n.box(e.darkSmooth,a/2-.06,.37,0,.06,.72,.7),n.box(e.darkSmooth,0,.45,-.34,a-.12,.5,.03),n.box(e.cyanSoft,0,.765,.39,a-.1,.008,.01);let c=l.length;for(let h=0;h<c;h++){let u=(h-(c-1)/2)*.66;Fa(n,e,t[l[h]],u,.765,-.18,-u*.35)}n.box(e.darkSmooth,0,.775,.12,.5,.015,.16),ka(n,e,.1,0,.75,Math.PI+.2),n.colBox(0,.4,0,a,.8,.8),n.pop()}function Ws(n,e,t,i,s,r,o,a=2.4,l=["status","sonar","log"]){n.push(i,s,r,o),n.rbox(e.darkSmooth,0,.4,0,a,.8,.9,.04);let c=.45,h=Math.sin(c),u=Math.cos(c);n.add(Re.box(),e.dark,0,.9,.12,c,0,0,a,.06,.62),n.add(Re.box(),e.cyanSoft,0,.9-.31*h+.03,.12+.31*u,c,0,0,a-.1,.01,.02);let f=zt(i*31+r*17|0);for(let p=0;p<26;p++){let x=-a/2+.15+f()*(a-.3);Math.abs(x)<a*.25&&(x+=Math.sign(x||1)*a*.25);let g=.25-f()*.5;n.add(Re.box(),[e.cyan,e.amber,e.green,e.cyanSoft,e.red][f()*5|0],x,.9-g*h+.035,.12+g*u,c,0,0,.05,.015,.03)}n.add(Re.plane(),t[l[0]],0,.9+.05*h+.034,.12-.05*u,c-Math.PI/2,0,0,a*.45,.3,1,{keepUV:!0});let d=l.length;for(let p=0;p<d;p++){let x=(p-(d-1)/2)*(a/d);n.push(x,1,-.3,-x*.12),n.box(e.darkSmooth,0,.3,0,a/d-.06,.52,.04),n.add(Re.plane(),t[l[p]],0,.3,.021,0,0,0,a/d-.12,.46,1,{keepUV:!0}),n.pop()}n.colBox(0,.5,0,a,1,.9),n.pop()}function Xi(n,e,t,i,s,r,o=2.2){n.push(t,i,s,r),n.box(e.darkSmooth,0,o/2,0,.7,o,.9),n.box(e.grating,0,o/2,.451,.6,o-.2,.005);let a=zt(t*13+s*29|0);for(let l=0;l<16;l++)n.box([e.green,e.cyan,e.amber,e.green][a()*4|0],-.25+a()*.12,.2+l*(o-.4)/16,.456,.025,.012,.005);n.colBox(0,o/2,0,.7,o,.9),n.pop()}function Tn(n,e,t,i,s,r,o=1.2,a=.8,l=.8,c){n.push(t,i,s,r),n.rbox(c||e.dark,0,a/2,0,o,a,l,.04),n.box(e.whiteClean,0,a/2,0,o+.02,.12,l+.02),n.box(e.hazard,o/2-.12,a-.05,0,.16,.08,l+.03),n.colBox(0,a/2,0,o,a,l),n.pop()}function no(n,e,t,i,s,r,o){n.push(t,i,s,r),n.box(o||e.whiteClean,0,1.3,0,6,2.6,2.4);for(let a=-5;a<=5;a++)n.box(e.gunmetal,a*.55,1.3,1.21,.08,2.4,.04);n.box(e.cyan,0,2.45,1.22,5.6,.04,.02),n.colBox(0,1.3,0,6,2.6,2.4),n.pop()}function io(n,e,t,i,s,r,o,a,l,c,h){for(let u=0;u<l;u++){let f,d,p;do f=h()*2-1,d=h()*2-1,p=h()*2-1;while(f*f+d*d+p*p>1);let x=c*(.75+h()*.5);n.add(Re.plane(),e.leaf,t+f*r,i+d*o,s+p*a,(h()-.5)*1.1,h()*Math.PI,(h()-.5)*.5,x,x,1)}}function Nn(n,e,t,i,s,r=1,o=1){let a=zt(o+(t*97+s*13|0));n.cyl(e.whiteSmooth,t,i+.3*r,s,.32*r,.6*r,18),n.cyl(e.soil,t,i+.59*r,s,.29*r,.02,14),n.pipe(e.bark,t,i+.6*r,s,t+.02,i+1*r,s-.02,.025*r,6),io(n,e,t,i+1.1*r,s,.34*r,.4*r,.34*r,14,.42*r,a),n.colCyl(t,i,s,.32*r,.9*r,8)}function Xs(n,e,t,i,s,r,o=2.4,a=.8,l=3){n.push(t,i,s,r),n.rbox(e.whiteSmooth,0,.35,0,o,.7,a,.06),n.box(e.soil,0,.69,0,o-.12,.02,a-.12);let c=zt(l);io(n,e,0,.92,0,o/2-.12,.2,a/2-.1,Math.round(o*8),.42,c),n.box(e.cyanDim,0,.05,a/2+.001,o-.1,.02,.01),n.colBox(0,.4,0,o,.8,a),n.pop()}function B0(n,e,t,i,s){n.cyl(e.darkSmooth,t,i+.45,s,.1,.9,12),n.cyl(e.cyan,t,i+.78,s,.102,.08,12)}function _h(n,e,t,i,s,r,o,a=0,l){n.box(e.darkSmooth,t,i-.015,s,r+.08,.03,o+.08,a),n.box(l||e.light,t,i-.035,s,r,.012,o,a)}function so(n,e,t,i,s,r=.14,o=.4,a){n.cyl(e.chrome,t,i+.02,s,r+.02,.04,14),n.cyl(a||e.greenFluid,t,i+o*.45,s,r*.9,o*.8,14),n.cyl(e.glass,t,i+o/2,s,r,o,14,{open:!0}),n.cyl(e.chrome,t,i+o+.02,s,r+.02,.04,14)}function bh(n,e,t,i,s,r,o=2.6,a=1){n.push(t,i,s,r),n.rbox(e.whiteSmooth,0,.9,0,o,.05,a,.02),n.box(e.dark,0,.45,0,o-.1,.84,a-.2),n.box(e.cyanSoft,0,.87,a/2-.08,o-.2,.01,.01),n.colBox(0,.46,0,o,.92,a),n.pop()}function bd(n,e,t,i,s,r,o=1.8){n.push(t,i,s,r),n.box(e.dark,0,.45,0,o,.9,.8),n.box(e.whiteClean,0,1.6,-.3,o,1.4,.2),n.box(e.whiteClean,-o/2+.04,1.6,0,.08,1.4,.8),n.box(e.whiteClean,o/2-.04,1.6,0,.08,1.4,.8),n.box(e.whiteClean,0,2.4,0,o,.4,.8),n.box(e.glass,0,1.55,.38,o-.1,.9,.02),n.box(e.light,0,2.19,0,o-.2,.02,.5),n.colBox(0,1.3,0,o,2.6,.8),n.pop()}function W0(n,e,t,i,s,r){n.push(t,i,s,r),n.box(e.plasticWhite,0,.03,0,.22,.06,.3),n.box(e.plasticWhite,0,.2,-.1,.06,.34,.06),n.add(Re.cyl(12),e.darkSmooth,0,.3,0,.5,0,0,.035,.22,.035),n.box(e.darkSmooth,0,.12,.02,.16,.02,.14),n.pop()}function Sd(n,e,t,i,s,r,o=1){n.push(t,i,s,r),n.cyl(e.darkSmooth,0,.25*o,0,.95*o,.5*o,32),n.cyl(e.metal,0,.53*o,0,.88*o,.06*o,32),n.add(Re.torus(.86*o,.03*o,6,40),e.cyan,0,.5*o,0,Math.PI/2,0,0),n.cyl(e.cryoFluid,0,1.65*o,0,.7*o,2.2*o,28),n.cyl(e.glass,0,1.65*o,0,.76*o,2.24*o,32,{open:!0});for(let a=0;a<4;a++){let l=a/4*Math.PI*2+Math.PI/4;n.box(e.metal,Math.sin(l)*.8*o,1.65*o,Math.cos(l)*.8*o,.07*o,2.3*o,.07*o,l)}n.cyl(e.metal,0,2.95*o,0,.9*o,.4*o,32),n.cyl(e.darkSmooth,0,3.25*o,0,.6*o,.25*o,24),n.add(Re.torus(.86*o,.025*o,6,40),e.cyan,0,2.77*o,0,Math.PI/2,0,0),n.pipe(e.cable,.3*o,3.3*o,0,.5*o,5.3,.2,.06*o),n.pipe(e.cable,-.3*o,3.3*o,.1,-.6*o,5.3,-.1,.05*o),n.box(e.darkSmooth,0,1*o,.9*o,.4*o,.6*o,.1*o),n.box(e.cyanSoft,0,1.1*o,.955*o,.3*o,.25*o,.01),n.colCyl(0,0,0,.95*o,3.4*o,12),n.pop()}function Md(n,e,t,i,s,r){n.push(t,i,s,r),n.box(e.dark,0,.2,0,4.2,.4,2.2),n.add(Re.cyl(28),e.gunmetal,0,1.4,0,0,0,Math.PI/2,1,3.6,1);for(let o=-3;o<=3;o++)n.add(Re.torus(1.02,.06,6,28),e.darkSmooth,o*.5,1.4,0,0,Math.PI/2,0);n.add(Re.cyl(24),e.dark,2,1.4,0,0,0,Math.PI/2,.8,.5,.8),n.add(Re.torus(.7,.04,6,28),e.cyan,2.26,1.4,0,0,Math.PI/2,0),n.box(e.hazard,0,.41,1.1,4.2,.02,.1),n.pipe(e.copper,-1.2,2.3,0,-1.2,5.3,0,.12),n.pipe(e.copper,1,2.3,.3,1,5.3,.3,.1),n.colBox(0,1.3,0,4.2,2.6,2.2),n.pop()}function bs(n,e,t,i,s,r){n.push(t,i,s,r),n.cyl(e.darkSmooth,0,.55,0,.06,1.1,10),n.cyl(e.darkSmooth,0,.02,0,.3,.04,16),n.add(Re.cyl(16),e.whiteSmooth,0,1.2,.1,Math.PI/2-.15,0,0,.1,.7,.1),n.add(Re.cyl(16),e.chrome,0,1.25,.46,Math.PI/2-.15,0,0,.12,.05,.12),n.colCyl(0,0,0,.3,1.3,8),n.pop()}function qs(n,e,t,i,s,r,o=3,a=2){n.push(t,i,s,r),n.box(e.whiteClean,0,.7,0,o,1.4,a),n.cyl(e.grating,-o/4,1.42,0,.6,.04,20),n.cyl(e.grating,o/4,1.42,0,.6,.04,20),n.box(e.dark,0,.7,a/2+.01,o-.3,.8,.02),n.box(e.hazard,0,.02,0,o+1.2,.02,.12),n.box(e.hazard,0,.02,0,.12,.02,a+1.2),n.colBox(0,.7,0,o,1.4,a),n.pop()}function Ed(n,e,t,i,s,r=1.2){n.cyl(e.darkSmooth,t,i+.45,s,r,.9,40),n.cyl(e.metal,t,i+.92,s,r+.05,.06,40),n.cyl(e.cyan,t,i+.955,s,r*.8,.01,40),n.add(Re.torus(r+.02,.02,6,48),e.cyan,t,i+.6,s,Math.PI/2,0,0),n.colCyl(t,i,s,r,1,12)}function X0(n,e,t,i,s,r=7){let o=zt(r),a=new C(0,1,0),l=[],c=(y,b,v,S)=>{let M=b.clone().sub(y),w=M.length(),_=new at(S,v,w,10,1,!0),T=new tn().setFromUnitVectors(a,M.normalize()),A=new Be().compose(y.clone().add(b).multiplyScalar(.5),T,new C(1,1,1)),P=_.attributes.uv;for(let U=0;U<P.count;U++)P.setXY(U,P.getX(U)*Math.max(1,v*6),P.getY(U)*w*.6);n.addM(_,e.bark,A.premultiply(n.M.clone().multiply(new Be().makeTranslation(t,i,s))));let L=new vt(S*1.02,8,6);n.addM(L,e.bark,new Be().makeTranslation(b.x,b.y,b.z).premultiply(n.M.clone().multiply(new Be().makeTranslation(t,i,s))))},h=(y,b,v,S,M)=>{let w=y.clone(),_=b.clone();for(let A=0;A<3;A++){_.add(new C((o()-.5)*.35,.08+(o()-.3)*.12,(o()-.5)*.35)).normalize();let P=w.clone().addScaledVector(_,v/3),L=S*(1-(A+1)*.12);c(w,P,S*(1-A*.12),L),w=P}if(M<=0||S<.05){for(let A=0;A<26;A++){let P=new C(o()-.5,(o()-.3)*.8,o()-.5).multiplyScalar(2.6);l.push(w.clone().add(P))}return}let T=M>=3?3:2+(o()<.5?1:0);for(let A=0;A<T;A++){let P=A/T*Math.PI*2+o()*1.2,L=.55+o()*.35,U=_.clone().multiplyScalar(1-L).add(new C(Math.cos(P),.35+o()*.3,Math.sin(P)).multiplyScalar(L)).normalize();h(w,U,v*(.66+o()*.12),S*.62,M-1)}if(M<=2)for(let A=0;A<8;A++)l.push(w.clone().add(new C((o()-.5)*2,(o()-.5)*1.5,(o()-.5)*2)))};for(let y=0;y<7;y++){let b=y/7*Math.PI*2+o()*.4;c(new C(Math.cos(b)*.9,.05,Math.sin(b)*.9),new C(Math.cos(b)*.2,1.1,Math.sin(b)*.2),.2,.28)}c(new C(0,0,0),new C(.1,2.6,.05),.62,.52),c(new C(.1,2.6,.05),new C(-.05,4.6,.12),.52,.45);let u=new C(-.05,4.6,.12);for(let y=0;y<4;y++){let b=y/4*Math.PI*2+.4;h(u,new C(Math.cos(b)*.6,1,Math.sin(b)*.6).normalize(),5.2,.34,3)}h(u,new C(0,1,0),5.5,.3,3);let f=new dn(1.25,1.25);f.translate(0,.5,0);let d=e.leaf;d.onBeforeCompile=y=>{y.uniforms.uTime={value:0},d.userData.shader=y,y.vertexShader=`uniform float uTime;
`+y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
      float ph = instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 0.9;
      transformed.x += sin(uTime * 1.4 + ph) * 0.05 * uv.y;
      transformed.z += cos(uTime * 1.1 + ph) * 0.05 * uv.y;
      #endif`)};let p=new Uo(f,d,l.length),x=new Yt,g=new ge,m=n.M.clone().multiply(new Be().makeTranslation(t,i,s));return l.forEach((y,b)=>{x.position.copy(y).applyMatrix4(m),x.rotation.set((o()-.5)*1.6,o()*Math.PI*2,(o()-.5)*1.6),x.scale.setScalar(.8+o()*.7),x.updateMatrix(),p.setMatrixAt(b,x.matrix),g.setHSL(.26+o()*.06,.45+o()*.2,.32+o()*.16),p.setColorAt(b,g)}),p.castShadow=!0,p.receiveShadow=!0,p.layers.set(1),p}function q0(n,e=1,t=3){let i=zt(t),s=new it,r=new vt(.34,28,20),o=r.attributes.position;for(let f=0;f<o.count;f++){let d=o.getX(f),p=o.getY(f),x=o.getZ(f),g=1+Math.sin(d*14+p*5)*.05+Math.sin(x*11-p*7)*.05;o.setXYZ(f,d*g*(1-p*.6),p*1.7*g,x*g*.9)}r.computeVertexNormals();let a=n.creature,l=new J(r,a);l.position.y=.1,s.add(l);let c=new J(new vt(.2,20,14),a);c.scale.set(1.1,.9,1.3),c.position.set(0,.72,.05),s.add(c);let h=n.teal;for(let f of[-1,1]){let d=new J(new vt(.035,10,8),h);d.position.set(f*.1,.76,.26),s.add(d)}for(let f=0;f<14;f++){let d=new J(new vt(.014+i()*.012,6,4),n.cyan),p=i()*Math.PI*2,x=-.3+i()*.8;d.position.set(Math.sin(p)*.3*(1-x*.4),x+.1,Math.cos(p)*.28),s.add(d)}for(let f of[-1,1]){let d=new J(new vt(.3,12,8),a);d.scale.set(.9,.12,.45),d.position.set(f*.38,.25,0),d.rotation.z=f*.5,s.add(d)}let u=[];for(let f=0;f<7;f++){let d=f/7*Math.PI*2,p=[];for(let m=0;m<6;m++)p.push(new C(Math.sin(d)*(.15+m*.05)+Math.sin(m+f)*.05,-.35-m*.16,Math.cos(d)*(.15+m*.05)));let x=new rs(p),g=new J(new Ko(x,20,.035-f*.001,6),a);s.add(g),u.push(g)}return s.scale.setScalar(e),s.userData.tentacles=u,s.traverse(f=>{f.layers.set(1)}),s}function Y0(n,e=2.2,t=3,i="white"){let s=new it,r=i==="glass"?n.glassTint:i==="red"?n.dark:n.whiteClean,o=new it,a=new it;for(let[l,c]of[[o,-1],[a,1]]){let h=new J(new Ye(e/2,t,.1),r);if(h.position.x=c*e/4,l.add(h),i!=="glass"){let f=new J(new Ye(.12,t*.55,.12),n.glassTint);f.position.set(c*.18,t*.08,0),l.add(f)}let u=new J(new Ye(.03,t-.1,.12),i==="red"?n.red:n.cyan);u.position.x=c*.02,l.add(u),s.add(l)}return s.userData={L:o,R:a,w:e},s.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0)}),s}var Z0=Math.sin(Math.PI/8),hn=(n,e)=>[Ne*n-e*zn,n+e*Z0,-3*Math.PI/8],Ys=(n,e)=>[-Ne*n+e*zn,n+e*Z0,3*Math.PI/8];function Tb(n,e,t,i,s,r,o,a=1.05,l=.6){let c=new ai,h=24;for(let x=0;x<=h;x++){let g=r+(o-r)*x/h,m=[t+Math.sin(g)*(s+l/2),-(i+Math.cos(g)*(s+l/2))];x?c.lineTo(...m):c.moveTo(...m)}for(let x=h;x>=0;x--){let g=r+(o-r)*x/h;c.lineTo(t+Math.sin(g)*(s-l/2),-(i+Math.cos(g)*(s-l/2)))}let u=new wi(c,{depth:a-.06,bevelEnabled:!1});u.rotateX(-Math.PI/2),n.addM(u,e.whiteSmooth,n.mat(0,6,0));let f=new wi(c,{depth:.05,bevelEnabled:!1});f.rotateX(-Math.PI/2),n.addM(f,e.darkSmooth,n.mat(0,6+a-.06,0));let d=new Rn(s+l/2-.01,s+l/2+.01,30,1,0,1);for(let x=0;x<h;x++){let g=r+(o-r)*(x+.5)/h;n.box(e.cyan,t+Math.sin(g)*(s+l/2+.005),6.12,i+Math.cos(g)*(s+l/2+.005),(o-r)/h*(s+l/2)+.01,.03,.01,g)}let p=Math.ceil((o-r)*s/.8);for(let x=0;x<p;x++){let g=r+(o-r)*(x+.5)/p;n.colBox(t+Math.sin(g)*s,6+a/2,i+Math.cos(g)*s,(o-r)/p*(s+l/2)+.1,a,l,g)}}function wb(n,e,t,i,s,r){n.push(t,i,s,r),n.cyl(e.darkSmooth,0,.1,0,.45,.2,20),n.cyl(e.cyan,0,.2,0,.46,.02,20);for(let o of[-1,1])n.add(Re.cyl(12),e.plasticWhite,o*.14,.62,0,0,0,0,.11,.84,.12),n.add(Re.cyl(12),e.orangeGloss,o*.14,.28,.02,0,0,0,.12,.16,.14);n.rbox(e.plasticWhite,0,1.3,0,.55,.7,.32,.12,0,{seg:3}),n.rbox(e.orangeGloss,0,1.3,-.24,.42,.62,.2,.06),n.box(e.cyan,0,1.45,.165,.2,.05,.01);for(let o of[-1,1])n.add(Re.cyl(12),e.plasticWhite,o*.36,1.25,0,0,0,o*.18,.08,.7,.09);n.sphere(e.plasticWhite,0,1.86,0,.2,{sy:1.05}),n.sphere(e.glassTint,0,1.88,.06,.16,{sz:.9}),n.cyl(e.chrome,0,.9,-.3,.02,1.8,6),n.colCyl(0,0,0,.45,2,8),n.pop()}function $0(n,e,t,i,s){let r=zt(900+s),o=6,a=(l,c,h,u)=>{i.marks["log_"+l]=n.wp(c,h,u)};if(s===0){Tb(n,e,6.5,32.2,2.4,-1.2,1.2),ka(n,e,6.5,o,31.2,Math.PI),Fa(n,e,t.status,5.8,o+1,33.3,Math.PI-.2),n.rbox(e.whiteSmooth,6.5,8.6,28.9,5.4,5.2,.5,.15,0,{col:!0}),jn(n,e,t.welcome,6.5,9,29.2,0,4.2,2.36),n.box(e.cyan,6.5,6.25,29.16,5,.04,.02),a("lobby",7.65,o+1.05,34.3),Ed(n,e,-1.5,o,36,1.1),i.marks.directory=n.wp(-1.5,o,36),i.holoSpots.push({p:n.wp(-1.5,o+1,36),kind:"colony",s:.028});for(let h of[-1,1])n.rbox(e.whiteSmooth,h*2.6,8.1,39.6,.4,4.2,.5,.15,0,{col:!0}),n.box(e.cyan,h*2.39,8.1,39.6,.02,3.8,.3);n.rbox(e.whiteSmooth,0,10.35,39.6,5.6,.35,.5,.15),n.box(e.cyan,0,10.16,39.6,4.8,.02,.3),n.box(e.hazard,0,6.015,39.6,4.8,.01,.35),jr(n,e,-9,o,40.2,Math.PI,3,e.fabricGrey),vh(n,e,-9,o,38.6,0,1.4,.7),Qr(n,e,-11.6,o,38.3,Math.PI/2,e.orange),Nn(n,e,-14.5,o,40.4,1.6,5),Nn(n,e,14.5,o,40.4,1.6,6),Nn(n,e,11.8,o,28.1,1.4,7);let l=new Rn(2.6,2.68,64);l.rotateX(-Math.PI/2),n.addM(l,e.cyanSoft,n.mat(-1.5,6.02,36));let c=new Rn(3.4,3.44,64);c.rotateX(-Math.PI/2),n.addM(c,e.metalInlay,n.mat(-1.5,6.02,36)),jt(n,e,[{text:"LIFT \u25B8 GALLERY \xB7 MISSION CONTROL \xB7 OBSERVATION",size:44,color:"#e8f6ff",y:128}],-8.2,8.8,27.2,0,2.6,.32),i.marks.lobby=n.wp(0,o,36)}if(s===1){G0(n,e,-5.4,o,31.2,0,6.2,4.4,e.fabricGrey),jn(n,e,t.weather,-5.4,8.6,27.25,0,4.4,2.48),n.box(e.darkSmooth,-5.4,6.35,27.5,5.2,.7,.55),n.box(e.cyanSoft,-5.4,6.71,27.78,5,.01,.01),jr(n,e,-5.4,o,32.6,Math.PI,3.6),jr(n,e,-8.6,o,30.4,Math.PI/2,2.4),Qr(n,e,-2,o,30.2,-Math.PI/2-.3),vh(n,e,-5.3,o,30.3,0,1.6,.9),i.marks.keycard=n.wp(-5,o+.42,30.3),n.rbox(e.whiteSmooth,6.5,6.5,33.2,3.6,1,1.1,.06,0,{col:!0}),n.box(e.darkSmooth,6.5,7.02,33.2,3.7,.05,1.2),n.box(e.orangeLight,6.5,6.05,33.78,3.4,.02,.02);for(let l=0;l<3;l++)z0(n,e,5.3+l*1.2,o,34.3);eo(n,e,6.5,o,27.45,0,4.8,2.3,.6),n.box(e.darkSmooth,6.5,7,27.8,4.8,.04,.02),eo(n,e,-10.5,o,27.45,0,1.4,2,.5),n.rbox(e.whiteSmooth,5.5,6.74,38.6,3.2,.05,1.1,.02),n.box(e.darkSmooth,5.5,6.37,38.6,.3,.72,.8,0,{col:!0});for(let l=0;l<3;l++)Bs(n,e,4.4+l*1.1,o,37.7,0,e.orangeGloss),Bs(n,e,4.4+l*1.1,o,39.5,Math.PI,e.whiteSmooth);Qr(n,e,-10.5,o,40.6,.3),Qr(n,e,-7.8,o,40.8,-.1),Ua(n,e,-9.1,o,40,.35,.45),Nn(n,e,-14.8,o,40.6,1.5,11),Nn(n,e,15,o,40.6,1.5,12);{let[l,c,h]=hn(31.5,.45);eo(n,e,l,o,c,h,3.2,2.4,.6)}{let[l,c,h]=hn(36.5,.2);Oa(n,e,l,o+.9,c,h,1.4,1.6)}{let[l,c,h]=Ys(36.5,.2);jn(n,e,t.log,l,8.2,c,h,1.8,1)}a("lounge",6.5,o+1.05,33),i.marks.lounge=n.wp(0,o,34)}if(s===2){for(let l of[30.2,34.2,38.2]){let[c,h,u]=hn(l,.6);V0(n,e,t,c,o,h,u,2.2,l===34.2?["dna","status","log"]:["sonar","dna"])}bh(n,e,-2.4,o,32.4,0,5.2,1.2),bh(n,e,-2.4,o,37.2,0,5.2,1.2);for(let l=0;l<5;l++)so(n,e,-4.4+l*.5,o+.925,32.1,.12,.34+l%2*.1,l%2?e.cryoFluid:e.greenFluid);W0(n,e,-.6,o+.925,32.6,Math.PI),Fa(n,e,t.dna,.4,o+.925,32.3,.3);for(let l=0;l<3;l++)so(n,e,-.6+l*.45,o+.925,37.5,.1,.3,e.greenFluid);i.marks.robotArm=n.wp(-3.6,o+.925,37.2);{let[l,c,h]=Ys(31,.55);bd(n,e,l,o,c,h,2)}{let[l,c,h]=Ys(35.5,.55);bd(n,e,l,o,c,h,2)}Xi(n,e,8.4,o,27.65,Math.PI*0),Xi(n,e,9.2,o,27.65,0),jn(n,e,t.dna,-5.8,8.4,27.25,0,3.6,2),n.rbox(e.whiteClean,-9.8,7.1,27.6,1.2,2.2,.8,.04,0,{col:!0}),n.box(e.glassTint,-9.8,7.2,28.01,.9,1.7,.02);for(let l=0;l<3;l++)for(let c=0;c<4;c++)so(n,e,-10.15+c*.23,6.55+l*.55,27.7,.07,.22,e.cryoFluid);for(let l of[-9,9]){n.box(e.metal,l,7.1,41.2,3,.04,.5),n.box(e.metal,l,7.9,41.2,3,.04,.5);for(let c of[-1.3,1.3])n.box(e.metal,l+c,7,41.2,.04,2,.5);for(let c=0;c<5;c++)so(n,e,l-1.1+c*.55,7.12,41.2,.1,.3+c%3*.08,c%2?e.greenFluid:e.cryoFluid),so(n,e,l-1.1+c*.55,7.92,41.2,.09,.28,e.greenFluid);n.colBox(l,7,41.2,3,2,.5)}Nn(n,e,.5,o,41,1.2,21),a("lab",-1.6,o+.925,37.4),i.marks.lab=n.wp(0,o,34)}if(s===3){[[-4.6,30.8],[4.6,30.8],[-9.6,38.6],[-4.8,39.6],[4.8,39.6],[9.6,38.6]].forEach(([c,h],u)=>{Sd(n,e,c,o,h,Math.atan2(-c,35-h)),i.creatures.push({p:n.wp(c,o+1.55,h),s:.85+u%3*.12,seed:10+u}),i.pods.push(n.wp(c,o,h))}),Sd(n,e,0,o,35,Math.PI,1.35),i.creatures.push({p:n.wp(0,o+2.1,35),s:1.35,seed:99,main:!0}),i.pods.push(n.wp(0,o,35)),i.marks.specimen=n.wp(0,o,33.2),Ws(n,e,t,0,o,31.6,Math.PI,2.6,["vitals","dna","status"]);for(let c=0;c<3;c++)for(let h=0;h<7;h++){let u=-6+h*2,f=6.3+c*1.25;n.box(e.darkSmooth,u,f+.55,41,1.9,1.15,1),n.box(e.cryoFluid,u,f+.55,40.49,1.6,.9,.02),n.box(e.cyan,u,f+.08,40.5,1.6,.02,.02),(c+h)%2===0&&n.sphere(e.creature,u,f+.5,40.8,.18,{sy:1.4})}n.colBox(0,8.2,41,14,4.4,1);for(let c of[32.5,37.5])n.box(e.gunmetal,0,11,c,20,.25,.3),n.box(e.cyanSoft,0,10.86,c,19.6,.02,.1);i.marks.gantry=n.wp(0,11,35);for(let c of[-8,8])n.box(e.gunmetal,c,11,35,.3,.25,5.5);for(let[c,h]of[[-4.6,30.8],[4.6,30.8],[0,35],[-4.8,39.6],[4.8,39.6]])n.cyl(e.darkSmooth,c,11.3,h,.7,.15,20),n.cyl(e.blue,c,11.22,h,.6,.02,20);n.light(0,10.2,35,3841279,60,16),n.light(-6,9.8,31,2784511,26,12),n.light(6,9.8,39,2784511,26,12);for(let[c,h,u]of[[-2,34,9],[3,38,8],[-6,36,7]]){let f=new dn(u,u*.6);f.rotateX(-Math.PI/2),n.addM(f,e.fxBlueBeam,n.mat(c,6.25,h,0,r()*3,0))}jn(n,e,t.vitals,5.2,8.6,27.25,0,3.4,1.9),jn(n,e,t.alert,-4.4,8.9,27.25,0,2.2,1.24);{let[c,h,u]=hn(34,.55);Xi(n,e,c,o,h,u)}{let[c,h,u]=hn(36,.55);Xi(n,e,c,o,h,u)}{let[c,h,u]=Ys(37.5,.5);Ws(n,e,t,c,o,h,u,1.8,["vitals","log"])}jt(n,e,[{text:"\u25BC SUBLEVEL ACCESS",size:70,color:"#ffb347",y:128}],-8.7,9.5,34.5,0,1.6,.36,{stripe:"#e8b21a"}),a("cryo",1.3,o+1,31.4),i.marks.cryo=n.wp(0,o,30)}if(s===4){for(let l=0;l<4;l++)wb(n,e,-8.4+l*1.3,o,28,0);n.box(e.darkSmooth,-6.45,9.6,27.4,5.6,.3,.3),n.box(e.cyan,-6.45,9.44,27.55,5.4,.02,.02);for(let l of[30.5,34.5,38.5]){let[c,h,u]=hn(l,.45);to(n,e,c,o,h,u,5)}{let[l,c,h]=Ys(34,.45);to(n,e,l,o,c,h,5)}Jn(n,e,-3,o,34,Math.PI/2,2.4),Jn(n,e,3,o,34,-Math.PI/2,2.4);for(let l of[-1,1])n.rbox(e.whiteSmooth,l*2.6,8.1,39.6,.4,4.2,.5,.15,0,{col:!0}),n.box(e.cyan,l*2.39,8.1,39.6,.02,3.8,.3);n.rbox(e.whiteSmooth,0,10.35,39.6,5.6,.35,.5,.15),n.box(e.hazard,0,6.015,39.6,4.8,.01,.35),Tn(n,e,9,o,29,.2,1.4,.9,1),Tn(n,e,9.2,o+.9,29.1,.4,1,.6,.8),Tn(n,e,7.4,o,29.4,-.1),jn(n,e,t.weather,5,8.6,27.25,0,3,1.7),a("dock",3.2,o+.5,34.2),i.marks.airlock=n.wp(0,o,35)}if(s===5){Md(n,e,4.2,o,31.8,0),Md(n,e,4.2,o,37.2,0),n.box(e.hazard,4.2,6.02,34.5,5.4,.01,.15);for(let l of[29.9,39.1])n.box(e.hazard,4.2,6.02,l,5.4,.01,.15);{let[l,c,h]=hn(30.5,.6);Xi(n,e,l,o,c,h)}{let[l,c,h]=hn(32,.6);Xi(n,e,l,o,c,h)}{let[l,c,h]=hn(38,.55);Ws(n,e,t,l,o,c,h,2.2,["status","log"])}bh(n,e,-4.5,o,30.2,0,3.4,1);for(let l=0;l<4;l++)n.box(e.gunmetal,-5.8+l*.7,o+.95,30.2,.3,.1,.6);Tn(n,e,-4.5,o,40.2,0,1.6,1,1),Tn(n,e,-2.6,o,40.5,.3),to(n,e,-3.5,o,27.45,0,4);for(let l of[-1,.2])n.pipe(e.copper,l,6.2,41.2,l,11.3,41.2,.14);n.pipe(e.gunmetal,-14,10.9,40.8,14,10.9,40.8,.18),n.light(4,10.2,34.5,16773336,30,14),jt(n,e,[{text:"SERVICE LEVEL \u25BC",size:80,color:"#ffb347",y:100},{text:"AUTHORIZED MAINTENANCE ONLY",size:44,color:"#e8f6ff",y:196}],-8.7,9.6,34.5,0,2,.5,{stripe:"#e8b21a"});{let[l,c,h]=hn(35,.3);n.push(l,o,c,h),n.box(e.gunmetal,0,1.05,0,1.4,2.1,.5,0,{col:!0}),n.box(e.darkSmooth,0,1.15,.26,1.2,1.5,.02);for(let u=0;u<6;u++)n.box(e.hazard,-.45+u*.18,1.35,.28,.1,.5,.03);n.box(e.hazard,0,.22,.26,1.4,.12,.02),n.box(e.orangeLight,0,2.02,.26,.5,.06,.03),n.pop(),i.marks.breaker=n.wp(...(()=>{let[u,f]=hn(35,1.1);return[u,o,f]})()),n.light(...(()=>{let[u,f]=hn(35,.9);return[u,o+2.4,f]})(),16738874,8,5)}a("eng",-3.6,o+.925,30.2),i.marks.eng=n.wp(0,o,34)}if(s===6){let l=[-10,-3.4,3.2,9.8];for(let c of l)n.box(e.white,c,7.6,38.9,.2,3.2,5.6,0,{col:!0}),n.box(e.cyanSoft,c,9.2,38.9,.22,.03,5.6);for(let c=0;c<3;c++){let h=(l[c]+l[c+1])/2;n.rbox(e.whiteSmooth,h-1.5,6.3,39.2,2,.6,3.4,.06,Math.PI/2*0,{col:!0}),n.rbox(e.fabricGrey,h-1.5,6.68,39.2,1.9,.18,3.3,.08,0,{seg:3}),n.rbox(e.whiteSmooth,h-1.5,6.84,40.6,1.4,.14,.4,.06,0,{seg:3}),n.box(e.orange,h-1.5,6.8,38.4,1.95,.05,1.2),n.rbox(e.whiteSmooth,h+1.6,6.74,40.9,1.2,.05,.6,.02),n.box(e.darkSmooth,h+1.6,6.37,40.9,1.1,.72,.5,0,{col:!0}),Fa(n,e,t.log,h+1.6,6.77,41,Math.PI*0),Bs(n,e,h+1.6,o,40.2,Math.PI,e.orangeGloss),_h(n,e,h,11.4,39,1.4,.3,0,e.lightWarm)}to(n,e,-6,o,27.45,0,6),to(n,e,7,o,27.45,0,5),jr(n,e,0,o,33.2,0,3,e.orange),vh(n,e,0,o,34.9,0,1.3,.7),Qr(n,e,-2.6,o,35.6,Math.PI/2+.3,e.fabricGrey);{let[c,h,u]=Ys(32,.2);jn(n,e,t.weather,c,8.4,h,u,2.2,1.24)}Nn(n,e,12,o,30,1.4,41),a("quarters",5,o+.8,40.9),i.marks.quarters=n.wp(0,o,34)}if(s===7){for(let l of[31.5,36]){n.rbox(e.whiteSmooth,-3,6.74,l,6,.06,1.2,.03),n.box(e.darkSmooth,-3,6.37,l,5.4,.72,.3,0,{col:!0}),n.box(e.cyanSoft,-3,6.02,l,5.4,.01,.4);for(let c=0;c<5;c++)Bs(n,e,-5.4+c*1.2,o,l-.95,0,c%2?e.orangeGloss:e.whiteSmooth),Bs(n,e,-5.4+c*1.2,o,l+.95,Math.PI,e.whiteSmooth)}{let[l,c,h]=hn(31.2,.5);eo(n,e,l,o,c,h,3.6,1,.8)}{let[l,c,h]=hn(36,.5);eo(n,e,l,o,c,h,3.6,1,.8)}{let[l,c,h]=hn(33.6,.2);jn(n,e,t.status,l,8.6,c,h,2.4,1.3)}for(let l of[30.2,32.4,35,37.2]){let[c,h,u]=hn(l,.25);n.push(c,o,h,u),n.box(e.darkSmooth,0,1.4,0,.8,.9,.2),n.box(e.orangeLight,0,1.6,.11,.5,.3,.01),n.pop()}n.rbox(e.darkSmooth,9,7.1,27.6,1.2,2.2,.8,.05,0,{col:!0}),n.add(Re.plane(),t.log,9,7.5,28.01,0,0,0,.9,1.2,1,{keepUV:!0}),n.box(e.orangeLight,9,8.18,28,1.1,.04,.02);for(let l of[-10.5,-5.5,5.5])yh(n,e,l,o,39.8,.4,3,e.orangeGloss);Nn(n,e,.3,o,40.8,1.4,51),Nn(n,e,-14.5,o,40.6,1.5,52),a("mess",-1.2,o+.77,36),i.marks.mess=n.wp(0,o,34)}}function K0(n,e,t,i,s){let o=s===0?[2.5,8.5]:[-6.5,0,6.5];for(let a of o)jr(n,e,a,12,31.9,0,2.6,(s+Math.round(a))%2?e.orange:e.fabricGrey);bs(n,e,s===0?-1:-10,12,33.2,0),bs(n,e,11,12,33.2,0),s!==0?(Xs(n,e,-4.2,12,25,0,3.4,.8,70+s),Xs(n,e,4.2,12,25,0,3.4,.8,80+s)):Xs(n,e,4.2,12,25,0,3.4,.8,80+s),s!==3&&s!==5&&s!==0&&(n.rbox(e.whiteSmooth,-10.5,13.3,28.2,.6,2.6,.6,.15,Math.PI/8,{col:!0}),jn(n,e,[t.sonar,t.weather,t.map,t.status][s%4],-10.5,13.8,28.52,Math.PI/8-.2,.5,.9,.03)),s===2&&(i.marks.log_gallery=n.wp(3,12+.45,31.6)),s===6&&(i.marks.log_gallery2=n.wp(-3.2,12+.45,31.6)),s===0&&(i.marks.gallery=n.wp(0,12,29))}function J0(n,e,t,i){n.rbox(e.dark,0,12+.15,26.4,12.4,.3,2.8,.05,0,{col:!0}),n.box(e.cyan,0,12+.305,27.79,12.2,.01,.03);for(let r of[-4.6,0,4.6])Ws(n,e,t,r,12,31,Math.PI,3.2,r===0?["status","map","sonar"]:r<0?["sonar","weather","log"]:["log","status","dna"]);for(let r of[-4.6,0,4.6])ka(n,e,r-.6,12,30,.1,e.fabricGrey),ka(n,e,r+.7,12,30,-.1,e.fabricGrey);for(let r of[-3.4,3.4])Ws(n,e,t,r,12+.3,26.8,Math.PI,3,["map","status"]);i.marks.mcConsole=n.wp(0,12,29.9),i.marks.mc=n.wp(0,12,29),Ed(n,e,0,12,28.6,.8),i.holoSpots.push({p:n.wp(0,13,28.6),kind:"globe",s:.6});for(let[r,o,a]of[[-6,15.2,"sonar"],[-2,15.9,"map"],[2,15.9,"status"],[6,15.2,"weather"],[-2,13.9,"log"],[2,13.9,"vitals"]])jn(n,e,t[a],r,o,24.2,0,3.6,2*.9*(o<14.5?.9:1));for(let[r,o,a]of[[-6.5,"holo",.25],[0,"holo",0],[6.5,"holo",-.25]])n.add(Re.plane(),t[o],r,15,33.2,0,Math.PI+a,0,3.2,1.8,1,{keepUV:!0,interior:!0});for(let r of[31.6,32.6]){let[o,a,l]=hn(r,.6);Xi(n,e,o,12,a,l)}for(let r of[31.6,32.6]){let[o,a,l]=Ys(r,.6);Xi(n,e,o,12,a,l)}{let[r,o,a]=hn(25.8,.4);Oa(n,e,r,12+.8,o,a,1.2,1.6)}n.cyl(e.darkSmooth,-9.5,12+.5,26.8,.5,1,20,{col:!0}),n.add(Re.hemi(20,8),e.whiteSmooth,-9.5,12+1.35,26.8,-2.2,0,0,.45,.16,.45),n.light(0,16.5,30,13625599,36,16),n.light(0,16.2,26,7330047,18,10),i.marks.log_mc=n.wp(3.4+.9,12+1.25,27)}function j0(n,e,t,i,s){let o=s===2||s===6;if(o?Xs(n,e,10,12,40.8,0,3,.8,110+s):(Xs(n,e,-9,12,40.8,0,3,.8,100+s),Xs(n,e,9,12,40.8,0,3,.8,110+s)),s%2===1)qs(n,e,0,12,37.8,0,3.4,2),qs(n,e,-7,12,37.2,.1,2.4,1.6),n.pipe(e.gunmetal,-5.2,12.9,37.6,-1.7,12.9,37.8,.2),n.box(e.hazard,3.5,12.02,35.2,2.4,.01,.12),jt(n,e,[{text:"MAINTENANCE AREA",size:70,color:"#ffb347",y:128}],2.6,13.2,39,0,1.6,.36,{stripe:"#e8b21a"});else if(o)Jn(n,e,6,12,40.6,Math.PI);else{for(let a of[-4,0,4])n.push(a,12,38.4,0),n.rbox(e.whiteSmooth,0,.3,0,.7,.12,1.9,.05),n.add(Re.box(),e.fabricGrey,0,.55,-.7,.55,0,0,.66,.08,.7),n.cyl(e.chrome,-.3,.12,.8,.02,.24,6),n.cyl(e.chrome,.3,.12,.8,.02,.24,6),n.colBox(0,.3,0,.7,.6,1.9),n.pop();Ua(n,e,-2,12,39.8,.35,.5),Ua(n,e,2,12,39.8,.35,.5)}s===0&&(i.marks.terrace=n.wp(0,12,38))}function Q0(n,e,t,i,s){if(s===4){n.cyl(e.whiteSmooth,0,18+.6,30.6,1.6,1.2,32,{col:!0}),n.add(Re.torus(1.6,.04,6,40),e.cyan,0,18+1.1,30.6,Math.PI/2,0,0),i.marks.dish=n.wp(0,18+1.2,30.6),Ws(n,e,t,4.4,18,29.2,Math.PI*.85,1.8,["holo","status"]),i.marks.uplink=n.wp(4.2,18,28.1);for(let o of[-8.5,8.5]){n.cyl(e.metal,o,23,31.5,.12,10,10),n.cyl(e.darkSmooth,o,18+.2,31.5,.6,.4,16,{col:!0});for(let a=1;a<5;a++)n.box(e.metal,o,18+a*2,31.5,1.2-a*.2,.05,.05);i.blinkers.push({p:n.wp(o,18+10.2,31.5),color:16724e3,period:1.4})}jt(n,e,[{text:"COMMS UPLINK ARRAY",size:80,color:"#e8f6ff",y:100},{text:"ORBITAL RELAY \xB7 RESTRICTED BEAM PATH",size:40,color:"#ffb347",y:196}],0,20,28.95,Math.PI,2.4,.6),n.cyl(e.darkSmooth,0,18+1.5,29,.05,1,6)}else if(s===2||s===6)bs(n,e,8,18,32.8,0),Jn(n,e,6,18,30.5,0);else if(Jn(n,e,-4,18,31.8,0),Jn(n,e,4,18,31.8,0),bs(n,e,0,18,33.2,0),Nn(n,e,-9,18,32.8,1.3,200+s),Nn(n,e,9,18,32.8,1.3,210+s),s%2===1)for(let o of[-1,1])n.push(o*11.5,18,31.5,0),n.box(e.metal,0,.5,0,.1,1,.1),n.add(Re.box(),e.screenOff,0,1.05,0,-.5,0,0,2.2,.05,1.4),n.add(Re.box(),e.cyanDim,0,1.08,0,-.5,0,0,2,.005,.02),n.pop();s===0&&(i.marks.roof=n.wp(0,18,30)),s===7&&(i.marks.log_roof=n.wp(-4,18+.45,31.8))}function em(n,e,t,i,s){let o=zt(300+s);s!==3&&s!==5&&(Tn(n,e,6,2,25.8,.1,1.2,.8,.8),o()<.6&&Tn(n,e,6.1,2+.8,25.8,-.2,.9,.6,.7));for(let a=0;a<3;a++)n.cyl(a%2?e.redPaint:e.gunmetal,-8+a*.7,2+.45,26.3,.3,.9,14,{col:!0});n.box(e.darkSmooth,-1,2+1.4,26.9,1.6,1.2,.2),n.box(e.screenOff,-1,2+1.5,26.79,1.2,.7,.01),s===6&&(i.marks.log_service=n.wp(-1,2+.9,26.4))}var fi=n=>n/zn;function Ab(n,e,t,i){let s=(r,o)=>{n.fillStyle=o,n.beginPath(),r.forEach(([a,l],c)=>{let h=e+(a-270)*i,u=t+(l-135)*i;c?n.lineTo(h,u):n.moveTo(h,u)}),n.closePath(),n.fill()};s([[270,555],[955,135],[725,552]],"#FECC00"),s([[955,135],[1188,552],[725,552]],"#B65A21"),s([[955,135],[800,552],[725,552]],"#994E1F"),s([[955,135],[1640,545],[1236,639],[1188,552]],"#FECC00"),s([[270,555],[725,552],[497,968]],"#F4A40B"),s([[270,555],[497,968],[270,1580]],"#E07A24"),s([[497,968],[725,1580],[270,1580]],"#B65A21"),s([[497,968],[537,1040],[270,1580]],"#994E1F"),s([[270,1580],[725,1580],[954,1980]],"#D47024"),s([[725,1580],[1182,1580],[954,1980]],"#B65A21"),s([[1097,1580],[1182,1580],[954,1980]],"#994E1F"),s([[1182,1580],[1230,1497],[1636,1575],[954,1980]],"#F4A40B")}var ro=null;function Rb(){if(ro)return ro;let n=document.createElement("canvas");n.width=2048,n.height=512;let e=n.getContext("2d");e.fillStyle="#eef1f3",e.fillRect(0,0,2048,512),e.fillStyle="#d9dee2",e.fillRect(0,470,2048,42),e.strokeStyle="#c3c9ce",e.lineWidth=6,e.strokeRect(10,10,2028,492),Ab(e,110,70,.2),e.fillStyle="#262c33",e.textBaseline="middle";let t=190;do e.font=`700 ${t}px "Instrument Sans", "Exo 2", Arial, sans-serif`,t-=6;while(e.measureText("CFT KINETIC").width>1440&&t>60);e.fillText("CFT KINETIC",520,225),e.fillStyle="#E17924",e.font='600 58px "Instrument Sans", "Exo 2", Arial, sans-serif';try{e.letterSpacing="10px"}catch{}e.fillText("AEGIS \xB7 OCEAN RESEARCH COLONY",526,372);let i=new Bi(n);return i.colorSpace=Gt,i.anisotropy=8,ro=new as({map:i,emissiveMap:i,emissive:16777215,emissiveIntensity:.35,roughness:.45,metalness:.05}),ro.userData.keepUV=!0,ro.name="cftSign",ro}function Cb(n,e,t,i,s,r,o){let a=o/4;n.push(t,i,s,r),n.box(e.darkSmooth,0,a/2,-.12,o+.3,a+.3,.2),n.add(Re.plane(),Rb(),0,a/2,.001,0,0,0,o,a,1,{keepUV:!0}),n.box(e.cyan,0,-.08,.02,o,.05,.05);for(let l of[-1,1])n.box(e.gunmetal,l*o*.35,-1.5,-.2,.25,3,.25);n.colBox(0,a/2-1,-.1,o+.3,a+2,.4),n.pop()}function oo(n,e,t,i,s,r=1,o=1){let a=zt(o);n.rbox(e.whiteSmooth,t,i+.35,s,2*r,.7,2*r,.1,0,{col:!0}),n.box(e.soil,t,i+.71,s,1.8*r,.02,1.8*r),n.cyl(e.bark,t,i+1.7,s,.12*r,2*r,8);for(let l=0;l<4;l++){let c=l/4*Math.PI*2+a();n.pipe(e.bark,t,i+2.3*r,s,t+Math.sin(c)*.6*r,i+3.1*r,s+Math.cos(c)*.6*r,.05*r,6)}io(n,e,t,i+3.1*r,s,1.15*r,.75*r,1.15*r,34,1.1*r,a)}function nm(n,e,t,i,s,r){n.push(t,i,s,r),n.cyl(e.dark,0,.3,0,.9,.6,16,{col:!0}),n.box(e.yellow,0,2.6,0,.6,4.2,.6),n.box(e.darkSmooth,0,4.4,.2,1,.9,1.2),n.add(Re.box(),e.yellow,0,5.3,2.4,-.35,0,0,.45,.45,5.4),n.pipe(e.cable,0,6.2,4.9,0,3,4.9,.03),n.box(e.darkSmooth,0,2.9,4.9,.4,.3,.4),n.pop()}function Mh(n,e,t,i,s,r,o,a=4.2){n.push(t,i,s,r),n.box(o,0,1.2,0,a,2.4,2.4,0,{col:!0});for(let l=-3;l<=3;l++)n.box(e.gunmetal,l*a/7.5,1.2,1.21,.07,2.2,.04);n.box(e.cyan,0,2.3,1.22,a-.3,.04,.02),n.pop()}function Td(n,e,t,i,s,r,o=6){n.cyl(e.metal,i,s+o/2,r,.08,o,8);for(let a=1;a<4;a++)n.box(e.metal,i,s+a*o/4,r,.9-a*.2,.04,.04);n.cyl(e.darkSmooth,i,s+.15,r,.4,.3,12,{col:!0}),t.blinkers.push({p:n.wp(i,s+o+.2,r),color:16724e3,period:1.3+i%3*.2})}function im(n,e){n.chunk="dome",n.interior=!1;let t=19.3,i=23.2,s=5.6;for(let d=0;d<8;d++){n.push(0,0,0,Ft(d));let p=Ne*i;n.box(e.dark,0,t+.4,i,p*2,.8,.6),n.box(e.glassTint,0,t+.8+(s-1.9)/2,i,p*2,s-1.9,.05);for(let x of[-p*.5,0,p*.5])n.box(e.whiteSmooth,x,t+.8+(s-1.9)/2,i,.22,s-1.9,.34);n.box(e.white,0,t+s-.55,i+.05,p*2+.3,1.1,.7),n.box(e.cyan,0,t+s-1.12,i+.4,p*2,.05,.03),n.box(e.cyan,0,t+.82,i+.32,p*2,.05,.03);for(let x=-2;x<=2;x++)n.box(e.lightWarm,x*p*.38,t+s-.55,i+.41,p*.2,.12,.02);n.push(Ne*i,0,i,Math.PI/8),n.rbox(e.whiteSmooth,0,t+s/2,0,.9,s,.9,.22),n.pop(),n.pop()}let r=t+s,o=9.5,a=4.4,l=new at(fi(o),fi(i+.8),a,8,1,!0).toNonIndexed();l.rotateY(Math.PI/8),l.computeVertexNormals(),n.addM(l,e.white,n.mat(0,r+a/2,0));let c=l.clone();c.scale(.995,1,.995);let h=e.dark.clone();h.side=Zt,h.name="towerInner",h.userData={...e.dark.userData},n.addM(c,h,n.mat(0,r+a/2-.02,0));for(let d=0;d<8;d++){let p=(d+.5)*Math.PI/4;n.pipe(e.metal,Math.sin(p)*fi(i+.8),r,Math.cos(p)*fi(i+.8),Math.sin(p)*fi(o),r+a,Math.cos(p)*fi(o),.18);let x=d*Math.PI/4,g=(i+o)/2+1;n.add(Re.box(),e.grating,Math.sin(x)*g,r+a*.42,Math.cos(x)*g,-.62,x,0,3.2,.12,1.6)}let u=r+a;n.flat(e.glassTint,Ke(o),[Ke(5.4)],u+.02),n.slab(e.dark,Ke(5.4),[],u,u+.7);let f=new at(fi(5),fi(5),1.4,8,1,!0);f.rotateY(Math.PI/8),n.addM(f,e.glassTint,n.mat(0,u+1.4,0)),n.slab(e.whiteSmooth,Ke(5.8),[],u+2.1,u+2.5),n.add(Re.torus(fi(5.6),.06,6,8),e.cyan,0,u+2.1,0,Math.PI/2,0,Math.PI/8),n.cyl(e.metal,0,u+4.5,0,.12,4,8),n.sphere(e.red,0,u+6.6,0,.16)}function Pb(n,e,t){n.chunk="pylons",n.interior=!1;for(let i=0;i<8;i++){let s=(i+.5)*Math.PI/4;n.push(0,0,0,s),n.box(e.dark,0,1.5,58.8,9,7,7),n.box(e.dark,0,1.25,67,11,6.5,10),n.box(e.white,0,7,67,11.4,5,10.4),n.box(e.hullPaint,0,9.75,67,11,.5,10),n.box(e.dark,0,5.55,67,11.5,.9,10.5),n.box(e.metal,0,10.05,67,11.6,.12,10.6);for(let o of[-1,1])for(let a of[62.2,71.8])n.box(e.darkSmooth,o*5.55,7.3,a,.5,4.2,.5);for(let o=-2;o<=2;o++)n.box(e.lightWarm,o*2.1,5.55,72.28,1.2,.12,.02);n.box(e.glassTint,0,7.3,72.22,9.4,1.3,.05);for(let o of[-1,1])n.box(e.glassTint,o*5.72,7.3,67,.05,1.3,8.6);for(let o of[-4.3,4.3])n.box(e.light,o,6.3,72.24,.2,2.2,.02);n.box(e.cyan,0,4.55,72.23,11.2,.07,.04);for(let o of[-1,1])n.box(e.cyan,o*5.72,4.55,67,.04,.07,10.2);for(let o=-2;o<=2;o++)n.box(e.lightWarm,o*2,2.6,72.03,1.1,.14,.02);jt(n,e,[{text:"0"+(i+1),size:170,color:"#1f252c",y:136}],-3.3,8.3,72.26,0,1.3,1,{bg:"#e6eaee",noPlate:!0,pw:256,ph:256,bright:1}),n.box(e.whiteClean,2.4,10.6,66,3.2,1.2,2.4),n.cyl(e.grating,2.4,11.22,66,.8,.04,16),Td(n,e,t,-3,10,64,5),n.add(Re.box(),e.hullPaint,0,-.3,75.5,.26,0,0,4.2,2.8,11),n.box(e.dark,0,-1,81.5,6.4,4.6,6.4),n.box(e.hullPaint,0,1.5,81.5,6.2,.4,6.2),n.box(e.cyan,0,.9,81.5,6.7,.12,6.7);for(let o of[-1,1])n.box(e.amber,o*3.34,1.7,84.4,.1,.3,.3);n.cyl(e.gunmetal,0,-.4,85.4,1.4,1.6,20,{rx:Math.PI/2,rz2:1.4}),n.cyl(e.cyan,0,-.4,86.22,1.05,.05,20,{rx:Math.PI/2,rz2:1.05});let r=n.wp(0,0,88);t.staticGlows.push([r.x,3.8,r.z,1.1]),n.pop()}for(let i=0;i<8;i++){n.push(0,0,0,Ft(i));for(let s=-3;s<=2;s++)n.box(e.lightWarm,s*6.5+3.25,4.55,56.23,1.8,.14,.02);n.pop()}}function Ib(n,e,t){n.chunk="rooftops",n.interior=!1;for(let i=0;i<8;i++){n.push(0,0,0,Ft(i));let s=12,r=18;i%2===1&&(Mh(n,e,8.5,s,38.2,.08,i%4===1?e.whiteClean:e.dark),Tn(n,e,12.4,s,38.8,.3,1.2,.8,.8),Tn(n,e,12.2,s+.8,38.9,.1,.9,.6,.7),(i===1||i===5)&&nm(n,e,-11.5,s,39.4,.6),Td(n,e,t,-6.5,r,28.8,6)),(i===2||i===6)&&(oo(n,e,6.5,s,38,1,i*7+1),oo(n,e,11.5,s,37.4,1.1,i*7+2),oo(n,e,-10.2,r,30.5,1,i*7+3)),i===0&&oo(n,e,10.5,r,30.6,1,5),i===4&&(Mh(n,e,-9.5,s,38.4,0,e.redPaint,3.6),oo(n,e,9.5,s,37.8,1,44)),n.pop()}}var Lb=[[-175,180,18,.2,"hub"],[190,-160,16,.5,"pad"],[-240,-55,20,.1,"hub"],[70,-330,17,.7,"hub"],[-95,-440,14,.3,"pad"],[330,95,18,.9,"hub"],[270,-400,15,.4,"hub"],[-370,270,16,.6,"pad"],[470,-240,20,.2,"hub"],[-520,-300,22,.8,"hub"]];function Db(n,e,t,[i,s,r,o,a],l){n.chunk="rig_"+l,n.interior=!1;let c=zt(700+l);n.push(i,0,s,o);let h=r>17?6:4;for(let g=0;g<h;g++){let m=(g+.5)/h*Math.PI*2,y=Math.sin(m)*r*.78,b=Math.cos(m)*r*.78;n.cyl(e.hullPaint,y,.5,b,1.5,11,16),n.box(e.dark,y,-1.2,b,4.2,3.4,4.2),n.add(Re.torus(1.55,.1,6,24),e.cyan,y,1.4,b,Math.PI/2,0,0),n.box(e.amber,y,2.2,b+1.52,.2,.2,.05);let v=(g+1.5)/h*Math.PI*2,S=Math.sin(v)*r*.78,M=Math.cos(v)*r*.78;n.pipe(e.gunmetal,y,4.8,b,S,1.6,M,.22)}n.slab(e.hullPaint,Ke(r),[],5.2,6.2),n.flat(e.deck,Ke(r),[],6.21);let u=Ne*r;for(let g=0;g<8;g++){n.push(0,0,0,Ft(g)),n.box(e.white,0,5.5,r+.1,u*2,.9,.2),n.box(e.cyan,0,5.3,r+.22,u*2-.4,.05,.03),n.box(e.metal,0,7.2,r-.3,u*2,.05,.05);for(let m=-1;m<=1;m++)n.box(e.metal,m*u*.66,6.7,r-.3,.05,1,.05);n.pop()}let f=r*.5,d=4.6;n.slab(e.dark,Ke(f),[],6.2,7.2),n.slab(e.glassTint,Ke(f-.1),[],7.2,8.8),n.slab(e.white,Ke(f+.2),[],8.8,6.2+d);for(let g=0;g<8;g++)n.push(0,0,0,Ft(g)),n.box(e.cyan,0,8.85,f+.22,Ne*f*2,.05,.03),n.box(e.lightWarm,0,8,f-.05,Ne*f*1.4,.1,.02),n.pop();let p=new at(fi(f*.45),fi(f+.3),2.2,8,1,!1).toNonIndexed();if(p.rotateY(Math.PI/8),p.computeVertexNormals(),n.addM(p,e.whiteSmooth,n.mat(0,6.2+d+1.1,0)),n.cyl(e.metal,0,6.2+d+4.5,0,.1,5,8),t.blinkers.push({p:n.wp(0,6.2+d+7.1,0),color:16724e3,period:1.2+c()}),a==="pad"){let g=new Rn(r*.55,r*.6,48);g.rotateX(-Math.PI/2),n.addM(g,e.yellow,n.mat(0,6.23,0))}else Mh(n,e,r*.62,6.2,-r*.2,1.2,c()<.5?e.whiteClean:e.dark,3.6),nm(n,e,-r*.62,6.2,r*.15,2),Tn(n,e,r*.45,6.2,r*.45,.4);n.add(Re.hemi(16,6),e.whiteSmooth,-r*.4,6.2+d+.8,-r*.3,Math.PI-.7,.3,0,1.4,.5,1.4);let x=n.wp(0,0,0);t.staticGlows.push([x.x,r*.35,x.z,.45]),n.pop()}function tm(n,e,t,i,s,r,o,a){let l=i-t,c=(t+i)/2;if(l<.5)return;n.box(e.dark,c,6.5,s+r*.06,l,1,.12);for(let u of[8.7,12.5]){n.box(e.dark,c,u,s+r*.04,l-.2,1.8,.08),n.box(e.glassTint,c,u,s+r*.1,l-.5,1.4,.05),a&&n.box(e.cyan,c,u+1.02,s+r*.12,l-.5,.05,.03);for(let f=t+1.6;f<i-1.2;f+=3.6)n.box(e.lightWarm,f,u,s+r*.1,1.1,.9,.02)}let h=0;for(let u=t+.4;u<=i-.3;u+=3.2)if(n.box(e.whiteSmooth,u,(6+o)/2+.5,s+r*.3,.3,o-7,.6),a&&h++%3===1){n.cyl(e.gunmetal,u+.36,(6+o)/2,s+r*.2,.075,o-6,10);for(let f=7;f<o-.5;f+=2.2)n.box(e.darkSmooth,u+.36,f,s+r*.12,.2,.06,.18);n.cyl(e.gunmetal,u+.36,6.1,s+r*.32,.09,.2,10)}a&&(n.box(e.gunmetal,c,7.4,s+r*.2,l-.3,.07,.2),n.box(e.cable,c,7.46,s+r*.2,l-.4,.05,.14)),n.box(e.metal,c,o+.05,s+r*.1,l,.12,.55),n.box(e.white,c,o+.45,s-r*.2,l,.8,.3)}function Nb(n,e,t,i){let{a0:s,a1:r,top:o}=Eh;n.interior=!1;for(let a=0;a<8;a++){n.chunk="outer_"+a,n.push(0,0,0,Ft(a));let l=Eh.gate(a);for(let p of[-1,1]){let x=p<0?[[-Ne*s,s],[-l,s],[-l,r],[-Ne*r,r]]:[[l,s],[Ne*s,s],[Ne*r,r],[l,r]];n.slab(e.white,x,[],6,o),n.colPoly(x,6,o,"solid"),n.flat(e.dark,x,[],o+.01);let g=p<0?-Ne*r:l,m=p<0?-l:Ne*r,y=p<0?-Ne*s:l,b=p<0?-l:Ne*s;tm(n,e,g,m,r,1,o,!0),tm(n,e,y,b,s,-1,o,!1),n.box(e.cyan,p*(l+.02),8.7,(s+r)/2,.03,5,r-s-1);let v=p*(l+(Ne*52-l)*.5);qs(n,e,v,o,51.6,0,3,2),Mh(n,e,v+p*6.5,o,53.2,0,(a+(p>0?1:0))%3===0?e.redPaint:e.whiteClean,3.8);for(let S=0;S<3;S++)n.push(v-p*(4+S*2.4),o,50.2,0),n.box(e.metal,0,.4,0,.1,.8,.1),n.add(Re.box(),e.screenOff,0,.9,0,.5,0,0,2,.05,1.3),n.pop();(a+p)%3===0&&Td(n,e,i,v+p*2,o,54.8,7)}let c=11.5,h=(s+r)/2,u=r-s;n.box(e.white,0,(c+o)/2,h,2*l,o-c,u),n.box(e.light,0,c-.02,h,2*l-1,.02,u-1.2);for(let p of[s,r])n.box(e.cyan,0,c-.05,p+(p===r?.05:-.05),2*l,.08,.06);n.box(e.metal,0,o+.05,h,2*l,.12,u),n.light(0,10.3,h,15791871,14,10),(a===0||a===4)&&Cb(n,e,0,12.1,r+.35,0,13);let f=p=>{let x=42.4+p*zn;return[Ne*x,x]};n.wall(e.white,...f(0),...f(1.4),6,6,3,{col:!0}),n.wall(e.white,...f(4.7),...f(6.2),6,6,3,{col:!0}),n.wall(e.white,...f(1.4),...f(4.7),10.2,1.8,3),n.wall(e.cyan,...f(1.4),...f(4.7),10.15,.06,3.05),n.wall(e.metal,...f(0),...f(6.2),12,.1,3.1),(Ha.includes(a)?[-10.6,9.5]:[-9.5,9.5]).forEach((p,x)=>oo(n,e,p,6,45.6,1.35,300+a*5+x));for(let p of[-14,14])Jn(n,e,p,6,47,Math.PI,2);for(let p of[-5,5])B0(n,e,p,6,47.5);n.pop()}}function sm(n,e,t,i){i.staticGlows=i.staticGlows||[],Nb(n,e,t,i),Pb(n,e,i),Ib(n,e,i),Lb.forEach((s,r)=>Db(n,e,i,s,r))}var on={k:0,u:-7,v:30.5,r:1.55,hole:1.75},Oe={u0:-9.6,u1:-7.8,v0:27.3,v1:34.2},Ha=[2,6],Eh={a0:48,a1:56.2,top:16,gate:n=>n%2===0?3.2:6.6},Ub=(n,e,t,i,s)=>[[e,i],[t,i],[t,s],[e,s]].map(([r,o])=>Ct(n,r,o)),ao=(n,e)=>[[-Ne*n,n],[Ne*n,n],[Ne*e,e],[-Ne*e,e]];function Ad(){let[n,e]=Ct(on.k,on.u,on.v);return{x:n,z:e}}var rm=new Map;function jt(n,e,t,i,s,r,o,a,l,c={}){let h=JSON.stringify([t,c.bg,c.border,c.stripe,a,l]),u=rm.get(h);if(!u){let f=E0(t,{w:c.pw||1024,h:c.ph||Math.round(1024*l/a),bg:c.bg||"rgba(4,14,20,0.92)",border:c.border,stripe:c.stripe});u=new Ht({map:f,transparent:!!c.transparent,color:new ge(c.bright||1.3,c.bright||1.3,c.bright||1.3)}),u.polygonOffset=!0,u.polygonOffsetFactor=-1,u.polygonOffsetUnits=-4,u.userData.noShadow=!0,u.userData.keepUV=!0,u.name="sign",rm.set(h,u)}n.push(i,s,r,o),c.noPlate||n.box(e.darkSmooth,0,0,-.03,a+.06,l+.06,.05),n.add(Re.plane(),u,0,0,.001,0,0,0,a,l,1,{keepUV:!0}),n.pop()}function wd(n,e,t,i,s,r,o,a,l={}){let c=n.wp(t,i,s),h=n.worldYaw(r),u=Y0(e.M,o,a,l.style||"white");u.position.copy(c).setY(c.y+a/2),u.rotation.y=h,l.interior!==!1&&u.traverse(x=>x.layers.set(1)),e.scene.add(u);let f=n.colBox(t,i+a/2,s,o,a,.3,r,"solid"),d={id:l.id||"door"+e.doors.length,pos:c,yaw:h,w:o,h:a,mesh:u,col:f,open:0,target:0,lock:l.lock||null,name:l.name||"",auto:l.auto!==!1};e.doors.push(d),n.box(e.M.darkSmooth,t,i+a+.1,s,o+.5,.2,.42,r),n.push(t,i,s,r),n.box(e.M.darkSmooth,-o/2-.12,a/2,0,.24,a,.42),n.box(e.M.darkSmooth,o/2+.12,a/2,0,.24,a,.42);let p=l.lock?e.M.red:e.M.cyan;for(let x of[-1,1])n.box(p,x*(o/2+.005),a/2,.215,.03,a-.2,.01),n.box(p,x*(o/2+.005),a/2,-.215,.03,a-.2,.01);return n.box(p,0,a+.03,.215,o,.03,.01),n.box(p,0,a+.03,-.215,o,.03,.01),n.pop(),d}function am(n,e,t,i){i.M=e;let s=zt(4242),r=Ad(),o=Mn(on.hole,20,r.x,r.z),a=[3,5].map(c=>Ub(c,Oe.u0,Oe.u1,Oe.v0,Oe.v1));n.chunk="hull",n.interior=!1,n.slab(e.hull,Ke(ie.HULL),null,-5,1.6),n.slab(e.algae,Ke(ie.HULL+.012),[Ke(ie.HULL-.4)],-1.2,.75);for(let c=0;c<8;c++){n.push(0,0,0,Ft(c));let h=Ne*54.6;n.box(e.dark,0,2.6,54.6,h*2,2,.5);for(let u=-3;u<=3;u++)n.box(e.grating,u*6.2,2.6,54.9,3.4,1.3,.12),n.box(e.darkSmooth,u*6.2+2.1,2.6,54.95,.4,1.7,.2);n.pipe(e.gunmetal,-h,1.9,55.1,h,1.9,55.1,.2),n.pipe(e.copper,-h,3.35,55.05,h,3.35,55.05,.1),n.box(e.hullPaint,0,3.7,55.3,Ne*55.8*2,.2,1.6),n.box(e.white,0,4.55,56,Ne*56.2*2,1.7,.4),n.box(e.cyan,0,3.95,56.21,Ne*56.2*2-.6,.06,.04);for(let u=-3;u<=3;u++)n.box(e.darkSmooth,u*6.5,4.55,56.22,1.2,.9,.05),n.box(e.grating,u*6.5,4.55,56.25,1,.7,.02);n.push(10.5,0,56.3,0);for(let u=0;u<12;u++)n.box(e.metal,0,.4+u*.4,.15,.6,.04,.04);n.box(e.metal,-.3,2.6,.15,.05,4.8,.05),n.box(e.metal,.3,2.6,.15,.05,4.8,.05),n.pop();for(let u of[-16,0,16])n.cyl(e.rubber,u,.9,55.2,.45,1.8,14,{rx:Math.PI/2,rz2:.45});n.pop()}n.chunk="deck",n.slab(e.hullPaint,Ke(ie.DECK),a,5.4,6),n.colPoly(Ke(ie.DECK),5.4,6,"floor",{holes:a}),n.flat(e.deck,Ke(ie.DECK),[Ke(ie.RING1)],6.01);for(let c=0;c<8;c++){n.push(0,0,0,Ft(c));let h=Ne*ie.DECK;n.box(e.white,0,5.7,ie.DECK+.12,h*2,.6,.24),n.box(e.metal,0,6.03,ie.DECK-.1,h*2,.05,.4);let u=c%2===0?2.6:6.2,f=ie.DECK-.25,d=Ne*f,p=Eh.gate(c);_d(n,e,-p,f,-u,f,6),_d(n,e,u,f,p,f,6),n.box(e.cyanSoft,0,6.02,43.4,Ne*43.4*2-.4,.012,.06),n.pop()}for(let c of[1,3,5,7]){n.push(0,0,0,Ft(c));let h=ie.DECK-.3,u=[[-6.2,h],[6.2,h],[9,60],[9,64],[6,67.5],[-6,67.5],[-9,64],[-9,60]],f=[[-3.2,59.5],[3.2,59.5],[3.2,65],[-3.2,65]];n.slab(e.hullPaint,u,[f],5.5,6),n.flat(e.deck,u,[f],6.01),n.box(e.glassFloor,0,5.95,62.25,6.4,.1,5.5),n.box(e.metal,0,6,62.25,.12,.04,5.5),n.box(e.metal,0,6,62.25,6.4,.04,.12),n.box(e.cyan,0,5.9,59.55,6.4,.04,.06),n.box(e.cyan,0,5.9,64.95,6.4,.04,.06),n.colPoly(u,5.5,6,"floor");for(let d=1;d<u.length;d++){let p=u[d],x=u[(d+1)%u.length];n.wall(e.white,p[0],p[1],x[0],x[1],5.37,.73,.2),n.wall(e.cyan,p[0],p[1],x[0],x[1],5.45,.05,.24)}xh(n,e,[[6.2,h],[9,60],[9,64],[6,67.5],[-6,67.5],[-9,64],[-9,60],[-6.2,h]],6);for(let d of[-5,5])n.add(Re.box(),e.gunmetal,d,3.9,61,-.62,0,0,.35,.35,12),n.cyl(e.hullPaint,d,1.5,64,.5,8,12);bs(n,e,-4.5,6,65.8,0),bs(n,e,4.5,6,65.8,0),Jn(n,e,-6.5,6,61.5,Math.PI/2),Jn(n,e,6.5,6,61.5,-Math.PI/2),jt(n,e,[{text:"OBSERVATION DECK "+["","SE","","NE","","NW","","SW"][c],size:70,color:"#dff6ff",y:70},{text:"GLASS FLOOR \xB7 6 M ABOVE SEA LEVEL",size:40,color:"#4ff2ff",y:160}],0,7.3,h+.6,Math.PI,2.6,.62),n.cyl(e.darkSmooth,0,6.6,h+.6,.06,1.2,8),i.marks["obs"+c]=n.wp(0,6,64),n.pop()}for(let c=0;c<8;c++){let h=Ft(c);n.push(0,0,0,h);let u=Ne*ie.RING1;n.chunk="facade1",n.interior=!1;let f=c===0||c===4,d=2.1;n.push(Ne*ie.RING1,0,ie.RING1,Math.PI/8),n.rbox(e.whiteSmooth,0,9,0,1.1,6,1.1,.3,0,{col:!0}),n.box(e.cyan,0,9,.56,.06,5.2,.02),n.pop(),f?(n.box(e.white,(-u-d)/2,6.3,ie.RING1,u-d,.6,.5),n.box(e.white,(u+d)/2,6.3,ie.RING1,u-d,.6,.5)):n.box(e.white,0,6.3,ie.RING1,u*2,.6,.5),n.box(e.white,0,11.1,ie.RING1+.05,u*2,1.8,.6),n.box(e.cyan,0,10.24,ie.RING1+.36,u*2-1,.05,.04),n.box(e.metal,0,12.02,ie.RING1+.1,u*2,.06,.8);let p=10,x=u*2/p;for(let N=1;N<p;N++){let z=-u+N*x;f&&Math.abs(z)<d+.2||n.box(e.metal,z,8.4,ie.RING1,.12,3.6,.34)}let g=c===3?e.glassFrost:e.glassTint;if(f?(n.box(g,(-u-d)/2,8.4,ie.RING1,u-d,3.6,.04),n.box(g,(u+d)/2,8.4,ie.RING1,u-d,3.6,.04),n.box(g,0,9.65,ie.RING1,d*2,1.1,.04)):n.box(g,0,8.4,ie.RING1,u*2,3.6,.04),f){n.colBox((-u-d)/2,8.7,ie.RING1,u-d,5.4,.35),n.colBox((u+d)/2,8.7,ie.RING1,u-d,5.4,.35),n.rbox(e.whiteSmooth,0,10.5,ie.RING1+2,7.4,.36,3.6,.15),n.box(e.cyan,0,10.3,ie.RING1+3.8,7,.04,.04);for(let N of[-1,1])n.rbox(e.whiteSmooth,N*3.4,8.2,ie.RING1+3.4,.35,4.4,.35,.12,0,{col:!0}),n.box(e.cyan,N*3.4,8.2,ie.RING1+3.58,.04,3.8,.02);Ob(n,e,ie.RING1+2),wd(n,i,0,6,ie.RING1,0,3.6,3,{style:"glass",id:c===0?"mainEntrance":"dockEntrance",interior:!1}),jt(n,e,[{text:c===0?"AEGIS \xB7 MAIN ENTRANCE":"MARINE DOCK ACCESS",size:80,color:"#e8f6ff",y:128}],0,10.1,ie.RING1+.4,0,3.8,.48,{bg:"rgba(3,12,18,0.95)"})}else n.colBox(0,8.7,ie.RING1,u*2,5.4,.35);if(c===3){for(let N=0;N<40;N++)n.box(e.darkSmooth,-u+.4+N*(u*2-.8)/39,8.4,ie.RING1-.25,.12,3.5,.02,.6);n.box(e.dark,0,8.4,ie.RING1-.4,u*2-.4,3.7,.1)}n.chunk="ring1_"+c,n.interior=!0,n.envOverride=c===3?.12:null;let m=Ne*ie.COR,y=ie.COR,b=Ne*ie.RING1,v=ie.RING1;n.wall(e.white,m,y,b,v,6,5.4,.3,{col:!0,extend:-.6}),n.wall(e.darkSmooth,m,y,b,v,6,.14,.34,{extend:-.6}),n.wall(e.cyanSoft,m,y,b,v,9.6,.04,.33,{extend:-.8});let S=Ne*ie.COR;if(c===0){n.box(e.white,(-S-5)/2,8.7,ie.COR,S-5,5.4,.3,0,{col:!0}),n.box(e.white,(S+5)/2,8.7,ie.COR,S-5,5.4,.3,0,{col:!0}),n.box(e.white,0,10.7,ie.COR,10,1.4,.3),n.box(e.cyan,0,9.98,ie.COR,10,.04,.34);for(let N of[-1,1])n.rbox(e.whiteSmooth,N*5.2,8.7,ie.COR,.6,5.4,.6,.2,0,{col:!0})}else{n.box(e.white,(-S-2.2/2-.25)/2,8.7,ie.COR,S-2.2/2-.25,5.4,.3,0,{col:!0}),n.box(e.white,(S+2.2/2+.25)/2,8.7,ie.COR,S-2.2/2-.25,5.4,.3,0,{col:!0}),n.box(e.white,0,9+(5.4-3)/2+.1,ie.COR,2.2+.5,5.4-3-.2,.3);let B=["","CREW LOUNGE","RESEARCH LAB","CRYOGENICS","DOCK AIRLOCK","ENGINEERING","CREW QUARTERS","MESS HALL"],G=c===3;wd(n,i,0,6,ie.COR,0,2.2,3,{style:G?"red":"white",lock:G?"cryo":null,id:"door_r"+c,name:B[c]}),jt(n,e,[{text:B[c],size:86,color:G?"#ff6a5c":"#e8f6ff",y:100},{text:"L1 \xB7 SECTOR "+(c+1),size:44,color:G?"#ff9a8a":"#4ff2ff",y:196}],0,9.75,ie.COR-.2,Math.PI,2.1,.5,G?{stripe:"#ff2a24"}:{}),G&&(n.add(Re.plane(),t.alert,1.9,7.8,ie.COR-.17,0,Math.PI,0,.9,.5,1,{keepUV:!0}),n.box(e.hazard,0,6.02,ie.COR-.7,2.6,.01,.8))}n.box(e.darkSmooth,0,6.07,ie.COR,S*2,.14,.34);let M=Ne*ie.ATRIUM,w=c%2===0,_=1.8,T=w?[[-M,-_],[_,M]]:[[-M,M]];for(let[N,z]of T){n.box(e.glass,(N+z)/2,8.2,ie.ATRIUM,z-N,4.2,.04,0,{col:!0}),n.box(e.darkSmooth,(N+z)/2,6.06,ie.ATRIUM,z-N,.12,.2);let B=Math.max(1,Math.round((z-N)/2.4));for(let G=0;G<=B;G++)n.box(e.metal,N+(z-N)*G/B,8.2,ie.ATRIUM,.1,4.2,.18)}n.box(e.white,0,10.9,ie.ATRIUM,M*2,1,.3),n.box(e.cyan,0,10.38,ie.ATRIUM-.16,M*2,.04,.02),w&&(n.box(e.white,0,9.85,ie.ATRIUM,_*2,1.1,.3),n.box(e.cyan,0,9.28,ie.ATRIUM,_*2,.03,.32)),n.push(Ne*ie.ATRIUM,0,ie.ATRIUM,Math.PI/8),n.rbox(e.whiteSmooth,0,8.7,0,.6,5.4,.6,.2,0,{col:!0}),n.pop();let A=ao(ie.COR,ie.RING1),P=ao(ie.ATRIUM,ie.COR),L=c===3||c===5?[[[Oe.u0,Oe.v0],[Oe.u1,Oe.v0],[Oe.u1,Oe.v1],[Oe.u0,Oe.v1]]]:[],U=c===5?e.floorLight:e.floor;n.flat(U,A,L,6.012),n.flat(e.floorLight,P,[],6.012),n.box(e.cyanSoft,0,6.02,24.5,Ne*24.5*2-.3,.012,.05);let D=c===0?[Mn(on.hole,20,on.u,on.v)]:[];if(n.flat(e.whiteClean,ao(ie.ATRIUM,ie.COR),[],11.39,!0),n.flat(c===3?e.dark:e.whiteClean,ao(ie.COR,ie.RING1),D,11.39,!0),n.box(e.darkSmooth,0,11.37,24.5,Ne*24.5*2,.04,.6),n.box(e.light,0,11.345,24.5,Ne*24.5*2-.2,.012,.4),n.light(0,9.8,24.5,15136511,18,13),c!==3){for(let[N,z]of[[-5,31],[5,31],[-8,37.5],[0,37.5],[8,37.5]])c===0&&Math.hypot(N-on.u,z-on.v)<3||_h(n,e,N,11.4,z,3.2,.5,0,c===5?e.lightCool:e.light);n.light(-4,9.4,33,15791871,24,16),n.light(5,9.4,38,15791871,20,14)}n.envOverride=c===3?.1:null,$0(n,e,t,i,c),n.envOverride=null,n.pop()}n.chunk="deck2",n.interior=!1,n.slab(e.hullPaint,Ke(ie.RING1+.2),[Ke(ie.ATRIUM),o],11.4,12,{top:!1,bottom:"shadow"}),n.colPoly(Ke(ie.RING1+.2),11.4,12,"floor",{holes:[Ke(ie.ATRIUM),o]}),n.flat(e.deck,Ke(ie.RING1+.2),[Ke(ie.L2OUT)],12.01),n.flat(e.dark,Ke(ie.L2IN),[Ke(ie.ATRIUM)],12.01);for(let c=0;c<8;c++){n.push(0,0,0,Ft(c)),n.chunk="terrace",n.interior=!1;let h=ie.RING1-.05,u=Ne*h;Ha.includes(c)?(cn(n,e,-u,h,-1.5,h,12),cn(n,e,1.5,h,u,h,12)):cn(n,e,-u,h,u,h,12),j0(n,e,t,i,c),n.pop()}for(let c=0;c<8;c++){n.push(0,0,0,Ft(c)),n.chunk="facade2",n.interior=!1;let h=Ne*ie.L2OUT;n.push(Ne*ie.L2OUT,0,ie.L2OUT,Math.PI/8),n.rbox(e.whiteSmooth,0,15,0,.9,6,.9,.25,0,{col:!0}),n.box(e.cyan,0,15,.46,.05,5,.02),n.pop(),n.box(e.white,0,12.18,ie.L2OUT,h*2,.36,.45),n.box(e.white,0,17.325,ie.L2OUT+.05,h*2,1.25,.55),n.box(e.cyan,0,16.72,ie.L2OUT+.33,h*2-1,.05,.04),n.box(e.metal,0,18.02,ie.L2OUT+.1,h*2,.06,.8),n.box(e.glassTint,0,14.5,ie.L2OUT,h*2,4.3,.04);for(let d=1;d<8;d++)n.box(e.metal,-h+d*h*2/8,14.5,ie.L2OUT,.1,4.3,.3);n.colBox(0,14.7,ie.L2OUT,h*2,5.4,.35),n.chunk="ring2_"+c,n.interior=!0;let u=Ne*ie.L2IN;if(c!==4){n.box(e.glass,0,14.6,ie.L2IN,u*2,4.8,.04,0,{col:!0});for(let d=0;d<=4;d++)n.box(e.metal,-u+d*u*2/4,14.6,ie.L2IN,.1,4.8,.2);n.box(e.darkSmooth,0,12.1,ie.L2IN,u*2,.2,.3),n.box(e.white,0,17.2,ie.L2IN,u*2,.4,.3)}else n.box(e.dark,0,14.7,ie.L2IN,u*2,5.4,.3,0,{col:!0});n.push(Ne*ie.L2IN,0,ie.L2IN,Math.PI/8),n.rbox(e.whiteSmooth,0,14.7,0,.55,5.4,.55,.2,0,{col:!0}),n.pop();let f=c===0?[Mn(on.hole,20,on.u,on.v)]:[];if(n.flat(c===4?e.floor:e.floorLight,ao(ie.L2IN,ie.L2OUT),f,12.02),n.flat(e.whiteClean,ao(ie.L2IN,ie.L2OUT),f,17.39,!0),n.box(e.darkSmooth,0,17.37,29,Ne*29*2,.04,.7),n.box(c===4?e.lightCool:e.light,0,17.345,29,Ne*29*2-.2,.012,.5),n.light(0,15.8,29,15398655,20,14),c===3||c===4){let d=Ne*ie.L2IN,p=ie.L2IN,x=Ne*ie.L2OUT,g=ie.L2OUT,m=29,y=2.2,b=(m-ie.L2IN)/zn,v=L=>[Ne*L,L],S=m-y/2*zn,M=m+y/2*zn;n.wall(e.white,d,p,...v(S),12,5.4,.3,{col:!0}),n.wall(e.white,...v(M),x,g,12,5.4,.3,{col:!0}),n.wall(e.white,...v(S),...v(M),15,2.4,.3);let[w,_]=v(m);wd(n,i,w,12,_,Math.PI/8-Math.PI/2+Math.PI,y,3,{id:"door_mc"+c,name:"MISSION CONTROL"});let T=Math.sin(Math.PI/8),A=c===3?-zn:zn,P=c===3?T:-T;jt(n,e,[{text:"MISSION CONTROL",size:86,color:"#e8f6ff",y:100},{text:"L2 \xB7 COMMAND",size:44,color:"#4ff2ff",y:196}],w+A*.2,15.9,_+P*.2,Math.atan2(A,P),2.1,.5)}c===4?J0(n,e,t,i):K0(n,e,t,i,c),n.pop()}n.chunk="deck3",n.interior=!1;let l=Mn(24,64);n.slab(e.hullPaint,Ke(ie.L2OUT+.2),[l,o],17.4,18,{curveSegs:32}),n.colPoly(Ke(ie.L2OUT+.2),17.4,18,"floor",{holes:[l,o]}),n.flat(e.deck,Ke(ie.L2OUT+.2),[Mn(26,64),o],18.01),n.chunk="roof";for(let c=0;c<8;c++){n.push(0,0,0,Ft(c));let h=ie.L2OUT+.1,u=Ne*h;Ha.includes(c)?(cn(n,e,-u,h,-1.5,h,18),cn(n,e,1.5,h,u,h,18)):cn(n,e,-u,h,u,h,18),Q0(n,e,t,i,c),n.pop()}n.chunk="dome",n.slab(e.whiteSmooth,Mn(26.1,72),[Mn(24,72)],18,19.3,{curveSegs:40}),n.add(Re.torus(26.12,.05,6,120),e.cyan,0,18.9,0,Math.PI/2,0,0),n.add(Re.torus(26.12,.05,6,120),e.cyan,0,18.4,0,Math.PI/2,0,0);for(let c=0;c<36;c++){let h=c/36*Math.PI*2;n.colBox(Math.sin(h)*25.05,18.65,Math.cos(h)*25.05,4.5,1.3,2.2,h)}im(n,e);for(let c of Ha)n.push(0,0,0,Ft(c)),n.chunk="stairs",n.interior=!1,om(n,e,ie.RING1+.25,ie.RING1+2.75,ui.D1,ui.D2),om(n,e,ie.L2OUT+.25,ie.L2OUT+2.75,ui.D2,ui.D3),n.pop();n.chunk="lift",n.interior=!1,n.push(0,0,0,Ft(on.k));{let{u:c,v:h,r:u}=on,f=21.4;n.cyl(e.glass,c,(6+f)/2,h,u,f-6,40,{open:!0});for(let A=0;A<6;A++){let P=A/6*Math.PI*2+Math.PI/6;n.box(e.metal,c+Math.sin(P)*u,(6+f)/2,h+Math.cos(P)*u,.12,f-6,.12,P)}for(let A of[6.05,11.7,12.2,17.7,18.2,f-.2])n.add(Re.torus(u,.08,6,40),e.metal,c,A,h,Math.PI/2,0,0);n.cyl(e.whiteSmooth,c,f+.2,h,u+.25,.4,40),n.add(Re.torus(u+.25,.04,6,40),e.cyan,c,f,h,Math.PI/2,0,0);let d=16;for(let A=0;A<d;A++){let P=A/d*Math.PI*2,L=(A+1)/d*Math.PI*2,U=(P+L)/2;Math.abs(U-Math.PI/2)<.45||n.colWall(c+Math.sin(P)*(u+.05),h+Math.cos(P)*(u+.05),c+Math.sin(L)*(u+.05),h+Math.cos(L)*(u+.05),6,f-6,.15)}let p=[ui.D1,ui.D2,ui.D3],x=p.map((A,P)=>n.colBox(c+u+.05,A+((P<2?p[P+1]:f)-A)/2,h,.15,(P<2?p[P+1]:f)-A,1.4,0,"solid")),g=n.colCyl(c,5.7,h,u-.05,.3,14,"solid",{dyn:!0}),m=new it,y=n.wp(c,0,h);m.position.set(y.x,6,y.z);let b=new J(new at(u-.06,u-.06,.3,36),e.darkSmooth);b.position.y=-.15,m.add(b);let v=new J(new Xt(u-.1,.03,6,36),e.cyan);v.rotation.x=Math.PI/2,v.position.y=.02,m.add(v);let S=new J(new at(u-.06,u-.06,.2,36),e.whiteSmooth);S.position.y=2.9,m.add(S);let M=new J(new at(.7,.7,.02,30),e.light);M.position.y=2.79,m.add(M);let w=new J(new Ye(.1,.5,.3),e.darkSmooth);w.position.set(-u+.2,1.2,0),m.add(w);let _=new J(new Ye(.02,.4,.22),e.cyanSoft);_.position.set(-u+.26,1.2,0),m.add(_);let T=new J(new Xt(u-.15,.03,6,30,Math.PI*1.4),e.chrome);T.rotation.set(Math.PI/2,0,Math.PI*.8),T.position.y=1,m.add(T),m.rotation.y=Ft(on.k),m.traverse(A=>{A.isMesh&&(A.castShadow=!0,A.receiveShadow=!0)}),i.scene.add(m),i.elevator={car:g,carMesh:m,gates:x,levels:p,y:ui.D1,target:ui.D1,level:0,center:y,r:u},p.forEach((A,P)=>{n.box(e.darkSmooth,c+u+.25,A+1.25,h-1.1,.08,.36,.22),n.box(e.cyan,c+u+.3,A+1.25,h-1.1,.02,.1,.1),i.marks["liftCall"+P]=n.wp(c+u+.6,A,h-.9),jt(n,e,[{text:["LEVEL 1 \xB7 LOBBY","LEVEL 2 \xB7 GALLERY","LEVEL 3 \xB7 OBSERVATION"][P],size:64,color:"#e8f6ff",y:128}],c+u+.32,A+2.75,h,Math.PI/2,1.6,.4)})}n.pop(),Fb(n,e,t,i,s),kb(n,e,t,i)}function Ob(n,e,t){for(let i of[-2.4,0,2.4])n.box(e.light,i,10.3,t,1.4,.02,.3)}function om(n,e,t,i,s,r){let a=(r-s)/20,l=.34,c=-1.4,h=1.4,u=i-t,f=(t+i)/2,d=c-19*l;for(let p=0;p<19;p++){let x=d+p*l,g=s+(p+1)*a;n.box(e.whiteClean,x+l/2,(s+g)/2,f,l,g-s,u,0,{col:!0}),n.box(e.darkSmooth,x+l/2,g+.005,f,l-.02,.012,u-.04),n.box(e.cyanSoft,x+l-.03,g+.01,f,.03,.012,u-.1),n.box(e.glass,x+l/2,g+.55,i-.05,l,1,.025),n.colBox(x+l/2,g+.6,i-.05,l,1.2,.16)}n.box(e.whiteClean,0,r-.25,f,h-c,.5,u,0,{col:"solid"}),n.box(e.darkSmooth,0,r+.005,f,h-c,.012,u),n.rbox(e.whiteSmooth,h-.3,(s+r-.5)/2,i-.4,.4,r-s-.5,.4,.12,0,{col:!0}),cn(n,e,c,i-.05,h,i-.05,r),cn(n,e,h,i-.05,h,t+.05,r),n.pipe(e.metal,d,s+a+1.08,i-.05,c,r+1.08,i-.05,.045),n.pipe(e.cyanSoft,d,s+a+1,i-.05,c,r+1,i-.05,.015),n.box(e.white,d+19*l/2,(s+r)/2,i+.02,19*l,.01,.01)}function Fb(n,e,t,i,s){n.chunk="atrium",n.interior=!0,n.flat(e.floor,Ke(ie.ATRIUM),[],6.012);for(let[l,c,h]of[[4.6,e.metalInlay,.08],[10.6,e.cyanSoft,.05],[14.4,e.metalInlay,.08],[16.5,e.cyanSoft,.05]]){let u=new Rn(l-h,l+h,96);u.rotateX(-Math.PI/2),n.addM(u,c,n.mat(0,6.02,0))}n.cyl(e.whiteSmooth,0,6.35,0,3.6,.7,64,{col:!0,colSeg:16}),n.add(Re.torus(3.6,.06,6,64),e.metal,0,6.7,0,Math.PI/2,0,0),n.add(Re.torus(3.62,.03,6,64),e.cyan,0,6.1,0,Math.PI/2,0,0),n.cyl(e.grass,0,6.71,0,3.5,.02,48);for(let l=0;l<70;l++){let c=s()*Math.PI*2,h=1.2+s()*2.1;n.add(Re.cone(0,1,5),[e.plant,e.plantDark,e.plantLight][s()*3|0],Math.sin(c)*h,6.9+s()*.2,Math.cos(c)*h,(s()-.5)*.5,s()*3,(s()-.5)*.5,.12,.4+s()*.4,.12)}i.tree=X0(n,e,0,6.72,0,11),i.scene.add(i.tree);for(let l=0;l<12;l++){let c=l/12*Math.PI*2+Math.PI/12;l%3!==1&&(n.push(Math.sin(c)*4.4,6,Math.cos(c)*4.4,c),n.rbox(e.whiteSmooth,0,.42,0,2,.08,.5,.04),n.rbox(e.darkSmooth,0,.2,0,1.6,.4,.34,.03),n.box(e.cyanDim,0,.36,.2,1.8,.015,.02),n.pop())}let r=(l,c,h,u,f,d)=>{let p=new ai,x=28;for(let w=0;w<=x;w++){let _=u+(f-u)*w/x,T=[Math.sin(_)*c,-Math.cos(_)*c];w?p.lineTo(...T):p.moveTo(...T)}for(let w=x;w>=0;w--){let _=u+(f-u)*w/x;p.lineTo(Math.sin(_)*l,-Math.cos(_)*l)}let g=new wi(p,{depth:h,bevelEnabled:!1,curveSegments:4});g.rotateX(-Math.PI/2),n.addM(g,e.whiteSmooth,n.mat(0,6,0));let m=new os(p);m.rotateX(-Math.PI/2),n.addM(m,e.soil,n.mat(0,6+h+.01,0));let y=new Rn(c-.02,c+.02,40,1,u-Math.PI/2,f-u);y.rotateX(-Math.PI/2),n.addM(y,e.cyanSoft,n.mat(0,6.08,0));let b=Math.ceil((f-u)*(l+c)/2/.9);for(let w=0;w<b;w++){let _=u+(f-u)*(w+.5)/b,T=(l+c)/2,A=(f-u)/b*c+.1;n.colBox(Math.sin(_)*T,6+h/2,Math.cos(_)*T,A,h,c-l,_)}let v=Math.round((f-u)*(l+c)/2*d);for(let w=0;w<v;w++){let _=u+(f-u)*(w+s()*.8)/v;for(let T=0;T<2;T++){let A=l+(c-l)*(T+.5)/2,P=Math.sin(_)*A,L=Math.cos(_)*A,U=.16+s()*.1;io(n,e,P,6+h+U*.9,L,U,U*.6,U,3,.4,s)}}let S=Math.max(1,Math.round((f-u)*c/3.2));for(let w=0;w<=S;w++){let _=u+(f-u)*w/S,T=Math.sin(_)*(l-.05),A=Math.cos(_)*(l-.05),P=Math.sin(_)*(c+.05),L=Math.cos(_)*(c+.05);n.pipe(e.metal,T,6+h,A,T,6+h+1.3,A,.03),n.pipe(e.metal,P,6+h,L,P,6+h+1.3,L,.03),n.pipe(e.metal,T,6+h+1.3,A,P,6+h+1.3,L,.03)}let M=new Rn((l+c)/2-.06,(l+c)/2+.06,40,1,Math.PI/2-f,f-u);M.rotateX(Math.PI/2),n.addM(M,e.growLight,n.mat(0,6+h+1.28,0))},o=.16;for(let l=0;l<4;l++){let c=l*Math.PI/2+o,h=(l+1)*Math.PI/2-o;r(7.4,9,.85,c,h,2.2),r(12,13.2,.6,l*Math.PI/2+.12,l*Math.PI/2+Math.PI/4-.1,2),r(12,13.2,.6,l*Math.PI/2+Math.PI/4+.1,(l+1)*Math.PI/2-.12,2)}for(let l=0;l<8;l++){let c=l/8*Math.PI*2+Math.PI/8;yh(n,e,Math.sin(c)*17.6,6,Math.cos(c)*17.6,c,3,l%2?e.orangeGloss:e.whiteSmooth)}for(let l=0;l<8;l++){let c=l/8*Math.PI*2+Math.PI/8+.22;Nn(n,e,Math.sin(c)*20.3,6,Math.cos(c)*20.3,1.5,l+30)}n.push(0,6,10.2,0),n.rbox(e.whiteSmooth,0,.55,0,.9,1.1,.35,.08),n.add(Re.plane(),t.welcome,0,.85,.18,-.35,0,0,.8,.45,1,{keepUV:!0}),n.pop();let a=new C(.8,.52,-.3).normalize();for(let l=0;l<6;l++){let c=8+s()*8,h=-12+s()*14,u=40,f=new dn(2.2+s()*2.5,u);f.translate(0,-u/2,0);let d=new Be().lookAt(new C(0,0,0),a.clone().negate(),new C(0,1,0)),p=new tn().setFromRotationMatrix(d),x=new tn().setFromUnitVectors(new C(0,-1,0),a.clone().negate()),g=new Be().compose(new C(c,30,h),x,new C(1,1,1));n.addM(f,e.fxBeam,g,{interior:!0});let m=f.clone();m.rotateY(Math.PI/2),n.addM(m,e.fxBeam,g,{interior:!0})}n.light(0,10,8,16773854,50,22),n.light(-9,9,-6,16773854,40,20),n.light(9,9,-6,16773854,40,20),n.light(0,16,-10,16773854,45,24),i.marks.atrium=n.wp(0,6,6),i.marks.log_atrium=n.wp(0,6,10.2)}function kb(n,e,t,i){n.chunk="service",n.interior=!0,n.envOverride=.22;let s=ui.SVC,r=5.4,o=r-s;n.colPoly(Ke(27),s-.4,s,"floor",{holes:[Ke(21)]}),n.flat(e.grating,Ke(27),[Ke(21)],s);let a=10;n.colPoly(Mn(a,24),s-.4,s,"floor"),n.flat(e.floor,Mn(a,48),[],s),n.push(0,0,0,0),n.colPoly([[-1.4,9.5],[1.4,9.5],[1.4,21.2],[-1.4,21.2]],s-.4,s,"floor"),n.flat(e.grating,[[-1.4,9.5],[1.4,9.5],[1.4,21.2],[-1.4,21.2]],[],s+.002),n.wall(e.dark,-1.55,9.9,-1.55,21,s,o,.3,{col:!0}),n.wall(e.dark,1.55,9.9,1.55,21,s,o,.3,{col:!0});for(let l=11;l<21;l+=2.5)n.box(e.amber,0,r-.08,l,.9,.04,.2);n.light(0,4.6,16,16756832,14,9),n.pop();for(let l=0;l<20;l++){let c=l/20*Math.PI*2,h=(l+1)/20*Math.PI*2;l===0||l===19||n.wall(e.dark,Math.sin(c)*(a+.15),Math.cos(c)*(a+.15),Math.sin(h)*(a+.15),Math.cos(h)*(a+.15),s,o,.3,{col:!0})}n.wall(e.dark,Math.sin(-Math.PI/10)*10.15,Math.cos(Math.PI/10)*10.15,-1.55,9.9,s,o,.3,{col:!0}),n.wall(e.dark,Math.sin(Math.PI/10)*10.15,Math.cos(Math.PI/10)*10.15,1.55,9.9,s,o,.3,{col:!0}),n.cyl(e.darkSmooth,0,s+.3,0,2.6,.6,40,{col:!0}),n.cyl(e.greenFluid,0,s+1.9,0,2.2,2.6,40),n.cyl(e.glass,0,s+1.9,0,2.35,2.7,40,{open:!0}),n.cyl(e.metal,0,r-.4,0,2.6,.5,40);for(let l=0;l<8;l++){let c=l/8*Math.PI*2;n.box(e.metal,Math.sin(c)*2.4,s+1.9,Math.cos(c)*2.4,.1,2.8,.1,c)}for(let l=0;l<4;l++){let c=l/4*Math.PI*2+Math.PI/4,h=Math.sin(c)*6.5,u=Math.cos(c)*6.5;n.cyl(e.gunmetal,h,s+.7,u,.7,1.4,20,{col:!0}),n.cyl(e.dark,h,s+1.5,u,.45,.3,16),n.add(Re.torus(.72,.03,6,24),e.teal,h,s+1.2,u,Math.PI/2,0,0),n.pipe(e.copper,h,s+1.4,u,Math.sin(c)*2.5,s+2.8,Math.cos(c)*2.5,.12),n.pipe(e.gunmetal,h,s+1.5,u,h,r,u,.15)}for(let l=0;l<6;l++){let c=l/6*Math.PI*2;n.pipe(e.copper,Math.sin(c)*1.2,r-.2,Math.cos(c)*1.2,Math.sin(c)*1.2,r+.3,Math.cos(c)*1.2,.1)}n.light(0,4.6,0,6750106,30,12),n.light(0,4.8,7,16756832,12,8),i.marks.pump=n.wp(0,s,5.5),i.marks.log_pump=n.wp(-4.2,s,4.2),Oa(n,e,-4.2,s+.3,4.6,Math.PI*1.25,1.2,1.4),jt(n,e,[{text:"HYDRO CORE \xB7 NUTRIENT RESERVOIR",size:60,color:"#56ff9a",y:80},{text:"FEEDS ATRIUM TREE ROOT SYSTEM",size:40,color:"#e8f6ff",y:170}],0,4.4,9.5,Math.PI,2.8,.5);for(let l=0;l<8;l++){n.push(0,0,0,Ft(l));let c=Ne*27,h=Ne*21,u=l===3||l===5;u?(n.box(e.dark,(-c+Oe.u0-.15)/2,s+o/2,27.15,Oe.u0-.15+c,o,.3,0,{col:!0}),n.box(e.dark,(c+Oe.u1+.15)/2,s+o/2,27.15,c-Oe.u1-.15,o,.3,0,{col:!0})):n.box(e.dark,0,s+o/2,27.15,c*2,o,.3,0,{col:!0}),l===0?(n.box(e.dark,(-h-1.4)/2,s+o/2,20.85,h-1.4,o,.3,0,{col:!0}),n.box(e.dark,(h+1.4)/2,s+o/2,20.85,h-1.4,o,.3,0,{col:!0})):n.box(e.dark,0,s+o/2,20.85,h*2,o,.3,0,{col:!0});for(let[f,d,p,x]of[[5,26.3,.18,e.gunmetal],[5,25.6,.12,e.copper],[4.95,21.8,.14,e.gunmetal]]){let g=Ne*d;n.pipe(x,-g,f,d,g,f,d,p)}if(n.box(e.hazard,0,s+.01,21.3,Ne*21.3*2,.012,.12),n.box(e.hazard,0,s+.01,26.7,Ne*26.7*2,.012,.12),n.box(e.amber,0,r-.06,24,1.6,.04,.2),n.light(0,4.6,24,16756832,12,9),n.cyl(e.redPaint,-3,3.4,26.8,.3,.05,16,{rx:Math.PI/2,rz2:.3}),n.box(e.darkSmooth,4,3.3,26.9,.8,1,.2),n.box(e.green,4.2,3.6,27,.05,.05,.02),jt(n,e,[{text:"SERVICE RING \xB7 S"+(l+1),size:64,color:"#ffb347",y:128}],-6,4.2,26.95,Math.PI,1.6,.4),u){n.box(e.dark,Oe.u0-.15,s+2,(27+Oe.v1)/2+.1,.3,4,Oe.v1-27+.3,0,{col:!0}),n.box(e.dark,Oe.u1+.15,s+2,(27+Oe.v1)/2+.1,.3,4,Oe.v1-27+.3,0,{col:!0}),n.box(e.dark,(Oe.u0+Oe.u1)/2,s+2,Oe.v1+.15,Oe.u1-Oe.u0+.6,4,.3,0,{col:!0});let f=Oe.u1-Oe.u0,d=(Oe.u0+Oe.u1)/2;n.colPoly([[Oe.u0,26.9],[Oe.u1,26.9],[Oe.u1,30.2],[Oe.u0,30.2]],s-.4,s,"floor"),n.flat(e.grating,[[Oe.u0,26.9],[Oe.u1,26.9],[Oe.u1,30.2],[Oe.u0,30.2]],[],s+.003);let p=13,x=4/p,g=.34;for(let m=0;m<p-1;m++){let y=6-(m+1)*x,b=Oe.v1-(m+1)*g;n.box(e.grating,d,(s+y)/2,b+g/2,f,y-s,g,0,{col:!0}),n.box(e.hazard,d,y+.005,b+.04,f,.01,.06)}n.box(e.amber,d,5.3,28.5,.8,.04,.3),n.light(d,4.5,30,16756832,10,8),cn(n,e,Oe.u0-.1,Oe.v0,Oe.u0-.1,Oe.v1,6,{glass:!1}),cn(n,e,Oe.u1+.1,Oe.v0,Oe.u1+.1,Oe.v1,6,{glass:!1}),cn(n,e,Oe.u0-.1,Oe.v0-.02,Oe.u1+.1,Oe.v0-.02,6,{glass:!1}),n.box(e.hazard,d,6.015,Oe.v1+.3,f+.4,.01,.5),i.marks["svcStair"+l]=n.wp(d,6,Oe.v1+.8),i.marks["svcStairLow"+l]=n.wp(d,s,28)}em(n,e,t,i,l),n.pop()}jt(n,e,[{text:"\u25B2 PUMP ROOM \xB7 HYDRO CORE",size:64,color:"#56ff9a",y:128}],1.6,4.3,21,0,1.8,.4),n.envOverride=null}var za=[{k:0,id:"landing",name:"Landing Platform",v:112,shape:"oct",a:22},{k:2,id:"energy",name:"Energy Platform",v:120,shape:"hex",a:18},{k:4,id:"dock",name:"Marine Dock",v:118,shape:"rect",w:36,d:44},{k:6,id:"comms",name:"Comms Platform",v:110,shape:"oct",a:16}];function Rd(n){return n.shape==="oct"?Ke(n.a,0,n.v):n.shape==="hex"?Mn(n.a/Math.cos(Math.PI/6),6,0,n.v,Math.PI/6):[[-n.w/2,n.v-n.d/2],[n.w/2,n.v-n.d/2],[n.w/2,n.v+n.d/2],[-n.w/2,n.v+n.d/2]]}function Hb(n){return n.shape==="rect"?n.v-n.d/2:n.v-n.a}function Cd(n){return n.shape==="rect"?Math.hypot(n.w,n.d)/2:n.a/Math.cos(Math.PI/8)}function Li(n,e,t){return n.map(([i,s])=>{let r=i-e[0],o=s-e[1],a=Math.hypot(r,o);return[i-r/a*t,s-o/a*t]})}function zb(n,e,t,i=[]){let s=Rd(t),r=[0,t.v];n.slab(e.hullPaint,s,i,5.4,6),n.flat(e.deck,s,i,6.01),n.colPoly(s,5.4,6,"floor",{holes:i}),n.slab(e.hull,Li(s,r,2.2),i.map(a=>a),-3.5,1.6),n.slab(e.algae,Li(s,r,2.188),[Li(s,r,2.6)],-1.2,.75);let o=s.length;for(let a=0;a<o;a++){let l=s[a],c=s[(a+1)%o],h=Li([l],r,1.2)[0],u=Li([c],r,1.2)[0];n.wall(e.dark,h[0],h[1],u[0],u[1],1.6,3.8,.4),n.wall(e.white,l[0],l[1],c[0],c[1],5.3,.8,.3);let f=Li([l],r,-.16)[0],d=Li([c],r,-.16)[0];n.wall(e.cyan,f[0],f[1],d[0],d[1],5.55,.05,.04);let p=Li([l],r,2.6)[0];n.cyl(e.hullPaint,p[0],-1.5,p[1],2.6,7,24),n.add(Re.torus(2.62,.1,6,32),e.cyan,p[0],.8,p[1],Math.PI/2,0,0);let x=Li([l],r,.3)[0],g=Li([c],r,.3)[0],m=(x[1]+g[1])/2;if(m<t.v-1&&Math.abs(x[1]-g[1])<.5){let b=Math.min(x[0],g[0]),v=Math.max(x[0],g[0]);cn(n,e,b,m,-2.6,m,6),cn(n,e,2.6,m,v,m,6)}else cn(n,e,x[0],x[1],g[0],g[1],6)}}function Gb(n,e,t,i){let r=i-t,o=(t+i)/2,a=[[-2.3,t],[2.3,t],[2.3,i],[-2.3,i]];n.box(e.hullPaint,0,5.72,o,2.3*2+.2,.56,r),n.flat(e.deck,a,[],6.01),n.box(e.grating,0,6.02,o,1.2,.012,r),n.colPoly(a,5.5,6,"floor");for(let h of[-1,1])cn(n,e,h*(2.3-.1),t,h*(2.3-.1),i,6,{spacing:2}),n.box(e.cyan,h*(2.3-.3),6.03,o,.05,.012,r),n.box(e.white,h*(2.3+.05),5.6,o,.2,.7,r),n.box(e.cyanSoft,h*(2.3+.16),5.5,o,.02,.04,r),n.pipe(e.gunmetal,h*1.2,5.05,t,h*1.2,5.05,i,.22);n.pipe(e.copper,0,5.1,t,0,5.1,i,.12);let l=Math.floor(r/4.2);for(let h=0;h<=l;h++){let u=t+1+(r-2)*h/l;n.add(Re.torus(2.3+.05,.09,6,28,Math.PI),e.whiteSmooth,0,6,u,0,0,0),n.sphere(e.cyan,0,6+2.3+.12,u,.07),n.box(e.metal,0,5.1,u,2.3*2,.16,.16)}let c=Math.max(1,Math.floor(r/14));for(let h=1;h<=c;h++){let u=t+r*h/(c+1);for(let f of[-1,1])n.cyl(e.hullPaint,f*1.7,-1.5,u,.55,13.4,16);n.box(e.gunmetal,0,4.8,u,4.2,.4,.6),n.cyl(e.hullPaint,0,.1,u,1.4,1.6,24,{rz:Math.PI/2,rx:0}),n.add(Re.torus(.57,.05,6,20),e.cyan,-1.7,.6,u,Math.PI/2,0,0),n.add(Re.torus(.57,.05,6,20),e.cyan,1.7,.6,u,Math.PI/2,0,0)}for(let h of[t+.4,i-.4]){for(let u of[-1,1])n.rbox(e.whiteSmooth,u*(2.3+.2),8,h,.35,4,.5,.12);n.rbox(e.whiteSmooth,0,10.1,h,2.3*2+.9,.35,.5,.12),n.box(e.cyan,0,9.92,h,2.3*2,.03,.3)}}function Vb(n,e,t,i,s){n.cyl(e.darkSmooth,i,10,s,.14,8,10),n.cyl(e.darkSmooth,i,6.2,s,.5,.4,12,{col:!0}),n.box(e.darkSmooth,i,14.2,s,1.2,.3,.5),n.box(e.light,i,14.04,s,1,.02,.36),t.blinkers.push({p:n.wp(i,14.5,s),color:16724e3,period:2})}function lm(n,e,t,i){let s=zt(515);n.interior=!1;for(let r of za){n.chunk="sat_"+r.id,n.push(0,0,0,Ft(r.k));let o=[];r.id==="dock"&&o.push([[-6,112],[6,112],[6,124],[-6,124]]),zb(n,e,r,o),n.chunk="bridge_"+r.id,Gb(n,e,56.2,Hb(r)+.4),n.chunk="sat_"+r.id;let a=(h,u)=>n.wp(h,6,u);if(r.id==="landing"){for(let[h,u,f]of[[8.6,9,e.yellow],[6.3,6.45,e.whiteInlay],[9.3,9.36,e.cyan]]){let d=new Rn(h,u,72);d.rotateX(-Math.PI/2),n.addM(d,f,n.mat(0,6.02,r.v+2))}for(let h=0;h<16;h++){let u=h/16*Math.PI*2;n.cyl(e.cyan,Math.sin(u)*10.2,6.04,r.v+2+Math.cos(u)*10.2,.14,.06,10)}n.box(e.yellow,-2,6.02,r.v+2,.5,.01,4.4),n.box(e.yellow,2,6.02,r.v+2,.5,.01,4.4),n.box(e.yellow,0,6.02,r.v+2,4,.01,.5),i.marks.parked=n.wp(0,6,r.v+2),i.parkedYaw=n.worldYaw(Math.PI*.85),n.push(-13,6,r.v-9,.3),n.cyl(e.darkSmooth,0,.15,0,2.6,.3,6,{col:!0,colSeg:6}),n.cyl(e.glassTint,0,1.6,0,2.45,2.6,6,{open:!0});for(let h=0;h<6;h++){let u=h/6*Math.PI*2;n.box(e.whiteSmooth,Math.sin(u)*2.45,1.6,Math.cos(u)*2.45,.12,2.6,.12)}n.cyl(e.whiteSmooth,0,3.05,0,2.8,.3,6),n.cyl(e.cyan,0,2.88,0,2.82,.04,6),n.colCyl(0,0,0,2.5,3.2,6),n.pop(),jt(n,e,[{text:"AEGIS LANDING PLATFORM",size:76,color:"#e8f6ff",y:100},{text:"PAD 01 \xB7 WELCOME ABOARD",size:44,color:"#4ff2ff",y:196}],-13,9.8,r.v-9,.3+Math.PI,3.2,.8);for(let[h,u]of[[-17,r.v-4],[17,r.v-4],[-17,r.v+10],[17,r.v+10]])Vb(n,e,i,h,u);no(n,e,14,6,r.v-11,-.2),no(n,e,16.5,6,r.v-4,Math.PI/2+.1,e.dark),Tn(n,e,11,6,r.v-13.5,.4),Tn(n,e,12.5,6,r.v-14,.1,1,.6,.7),n.rbox(e.whiteSmooth,9,7.1,r.v+12,1,2.2,.7,.1,0,{col:!0}),n.box(e.cyanSoft,9,7.6,r.v+11.64,.6,.8,.01),n.pipe(e.cable,9,6.6,r.v+11.6,5,6.05,r.v+8,.06),i.spawn={p:n.wp(0,6,r.v-13),yaw:Ft(r.k)},i.marks.landing=n.wp(0,6,r.v),i.marks.log_landing=n.wp(-9.4,7,r.v-11.8),n.rbox(e.darkSmooth,-9.4,6.45,r.v-11.8,.8,.9,.6,.05,.3,{col:!0})}if(r.id==="energy"){let h=Math.atan2(.8,-.3)-Ft(r.k);for(let u=0;u<4;u++)for(let f=0;f<3;f++){let d=-10+f*8,p=r.v-8+u*5.4;n.push(d,6,p,h),n.box(e.metal,0,.8,0,.12,1.6,.12),n.add(Re.box(),e.screenOff,0,1.7,0,.5,0,0,5.6,.07,3);for(let x=-2;x<=2;x++)n.add(Re.box(),e.cyanDim,x*1.1,1.74,0,.5,0,0,.02,.005,2.9);n.add(Re.box(),e.metal,0,1.66,0,.5,0,0,5.7,.05,3.1),n.colBox(0,1,0,1.2,2,1.2),n.pop()}for(let u=0;u<3;u++){let f=-9+u*9,d=r.v+12;n.cyl(e.darkSmooth,f,6.3,d,1,.6,16,{col:!0});let p=n.wp(f,6.6,d);i.turbines.push({p,h:9,r:1.5,blades:3,speed:1.1+u*.2,vertical:!0})}for(let u=0;u<3;u++)n.push(12,6,r.v-6+u*4.2,0),n.add(Re.cyl(24),e.whiteSmooth,0,1.4,0,0,0,Math.PI/2,1.3,4.6,1.3),n.add(Re.torus(1.31,.05,6,30),e.cyan,-1.4,1.4,0,0,Math.PI/2,0),n.add(Re.torus(1.31,.05,6,30),e.cyan,1.4,1.4,0,0,Math.PI/2,0),n.box(e.dark,0,.1,0,4.2,.2,1.8),n.colBox(0,1.4,0,4.6,2.8,2.6),n.pop();jt(n,e,[{text:"ENERGY PLATFORM",size:80,color:"#e8f6ff",y:100},{text:"SOLAR \xB7 WIND \xB7 STORAGE",size:44,color:"#56ff9a",y:196}],0,8.6,r.v-17,Math.PI,3,.75),n.cyl(e.darkSmooth,-1.2,7.1,r.v-17.05,.05,2.2,6),n.cyl(e.darkSmooth,1.2,7.1,r.v-17.05,.05,2.2,6),i.marks.energy=n.wp(0,6,r.v),i.marks.log_energy=n.wp(-14.5,6.9,r.v+2),n.rbox(e.darkSmooth,-14.5,6.45,r.v+2,.8,.9,.6,.05,0,{col:!0})}if(r.id==="dock"){for(let[h,u,f,d]of[[-6,112,6,112],[6,112,6,124],[6,124,-6,124],[-6,124,-6,112]])n.wall(e.dark,h,u,f,d,-.5,5.9,.3),n.wall(e.cyan,h,u,f,d,.6,.05,.34);xh(n,e,[[-6.2,111.8],[6.2,111.8],[6.2,124.2],[-6.2,124.2],[-6.2,111.8]],6);for(let h of[-8.5,8.5])for(let u of[110,126])n.box(e.yellow,h,6+5.5,u,.6,11,.6,0,{col:!0});for(let h of[-8.5,8.5])n.box(e.yellow,h,17.2,118,.7,.8,16.8);n.box(e.yellow,0,17.4,118,17.6,.9,.9),n.box(e.darkSmooth,0,16.7,118,2,.8,1.4),n.pipe(e.cable,0,16.3,118,0,10.6,118,.03),i.marks.sub=n.wp(0,9.2,118),i.marks.subYaw=n.worldYaw(0),i.blinkers.push({p:n.wp(0,17.95,118),color:16754470,period:1.1});for(let h=0;h<3;h++)no(n,e,12.5,6+(h===2?2.6:0),132+h%2*2.6,Math.PI/2,h===1?e.dark:e.whiteClean);no(n,e,-12.5,6,131,Math.PI/2,e.redPaint),no(n,e,-12.5,8.6,131,Math.PI/2,e.whiteClean);for(let h=0;h<5;h++)Tn(n,e,-13+h%3*1.4,6,102+(h>2?1.2:0),s()*.3);for(let h of[100,108,116,124,132])for(let u of[-17.2,17.2])n.cyl(e.darkSmooth,u,6.3,h,.3,.6,12),n.cyl(e.darkSmooth,u,6.65,h,.4,.1,12);jt(n,e,[{text:"MARINE DOCK \xB7 MOON POOL",size:76,color:"#e8f6ff",y:100},{text:"SUBMERSIBLE OPS \xB7 KEEP CLEAR",size:44,color:"#ffb347",y:196}],0,12.2,110.3,Math.PI,3.4,.85),i.marks.dock=n.wp(0,6,104),i.marks.log_dock2=n.wp(9.5,6.9,104),n.rbox(e.darkSmooth,9.5,6.45,104,.9,.9,.6,.05,0,{col:!0}),i.marks.log_reyes=n.wp(-4,6.9,110.4),n.rbox(e.darkSmooth,-4,6.45,110.4,.9,.9,.6,.05,0,{col:!0}),n.box(e.orangeLight,-4,6.91,110.71,.7,.02,.02),i.marks.boat=n.wp(24,0,122),i.marks.boatYaw=n.worldYaw(0)}if(r.id==="comms"){for(let[u,f]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.pipe(e.metal,u*3.2,6,r.v+f*3.2,u*.6,50,r.v+f*.6,.18);for(let u=0;u<11;u++){let f=u/11,d=(u+1)/11,p=3.2-2.6*f,x=3.2-2.6*d,g=6+44*f,m=6+44*d;for(let[y,b,v,S]of[[-1,-1,1,-1],[1,-1,1,1],[1,1,-1,1],[-1,1,-1,-1]])n.pipe(e.metal,y*p,g,r.v+b*p,v*x,m,r.v+S*x,.05,6),n.pipe(e.metal,y*x,m,r.v+b*x,v*x,m,r.v+S*x,.05,6)}n.cyl(e.metal,0,54,r.v,.15,8,8),i.blinkers.push({p:n.wp(0,50+8.2,r.v),color:16722464,period:1.6}),i.blinkers.push({p:n.wp(.7,6+44*.5,r.v+.7),color:16722464,period:1.6}),n.colBox(0,7,r.v,7,2,7);for(let[u,f,d]of[[-9,r.v-5,-.9],[8,r.v+6,-.6]])n.cyl(e.darkSmooth,u,7,f,.5,2,16,{col:!0}),n.add(Re.hemi(28,10),e.whiteSmooth,u,8.6,f,Math.PI+d,.6,0,3.2,1,3.2),n.cyl(e.metal,u,9.3,f,.06,1.8,8);for(let[u,f]of[[9,r.v-7],[-9,r.v+7]])n.rbox(e.whiteClean,u,7.4,f,3.2,2.8,2.4,.1,0,{col:!0}),n.box(e.cyanSoft,u,8.5,f-1.21,2.6,.04,.02),qs(n,e,u,8.8,f,0,1.4,1);jt(n,e,[{text:"COMMS PLATFORM",size:80,color:"#e8f6ff",y:100},{text:"RELAY MAST \xB7 50 M",size:44,color:"#4ff2ff",y:196}],0,8.4,r.v-14.6,Math.PI,3,.75),n.cyl(e.darkSmooth,-1.2,7,r.v-14.65,.05,2,6),n.cyl(e.darkSmooth,1.2,7,r.v-14.65,.05,2,6),i.marks.comms=n.wp(0,6,r.v-8),i.marks.log_comms=n.wp(-6.5,6.9,r.v-9),n.rbox(e.darkSmooth,-6.5,6.45,r.v-9,.8,.9,.6,.05,0,{col:!0})}n.pop();let[l,c]=Ct(r.k,0,r.v);i.foam.push([l,c,Cd(r)*.92,.9])}n.chunk="outposts";{let r=Math.PI/4,o=205;n.push(Math.sin(r)*o,0,Math.cos(r)*o,r+.4);let a=Mn(12,6,0,0,Math.PI/6);n.slab(e.hullPaint,a,[],3.4,4),n.flat(e.deck,a,[],4.01);for(let[l,c]of a)n.cyl(e.hullPaint,l*.8,-1.5,c*.8,1.6,6,16);for(let[l,c]of a)n.cyl(e.metal,l*.5,7,c*.5,.25,6,8);n.rbox(e.whiteSmooth,0,12.5,0,16,5,9,1.2,0,{seg:3}),n.box(e.glassTint,0,12.8,4.52,13,1.8,.05),n.box(e.cyan,0,11.6,4.55,13,.06,.02),n.box(e.light,0,12.8,4.48,12.6,1.6,.02),n.cyl(e.whiteSmooth,0,15.2,0,5,.4,24);for(let l=0;l<12;l++){let c=l/12*Math.PI*2;n.cyl(e.cyan,Math.sin(c)*4.6,15.45,Math.cos(c)*4.6,.1,.05,8)}i.blinkers.push({p:n.wp(0,16,0),color:4521830,period:1.8}),n.pop(),i.foam.push([Math.sin(r)*o,Math.cos(r)*o,11,.8])}{let r=Math.PI*1.25,o=170,a=Math.sin(r)*o,l=Math.cos(r)*o;for(let c=0;c<5;c++){let h=c/5*Math.PI*2,u=a+Math.sin(h)*20,f=l+Math.cos(h)*20;n.add(Re.torus(7,.35,8,48),e.whiteSmooth,u,.3,f,Math.PI/2,0,0),n.add(Re.torus(7,.06,6,48),e.cyan,u,.72,f,Math.PI/2,0,0);for(let d=0;d<12;d++){let p=d/12*Math.PI*2;n.cyl(e.metal,u+Math.sin(p)*7,1.1,f+Math.cos(p)*7,.06,1.6,6)}n.cyl(e.glassFrost,u,.6,f,6.9,1,36,{open:!0}),i.foam.push([u,f,7,.5])}n.cyl(e.yellow,a,1.2,l,1.6,2.4,16),n.cyl(e.whiteSmooth,a,3.4,l,.4,2.2,10),i.blinkers.push({p:new C(a,4.7,l),color:16764992,period:2.2})}for(let r=0;r<7;r++){let o=-.6+r*.28,a=820+r%3*180,l=Math.sin(o)*a,c=Math.cos(o)*-a;n.cyl(e.whiteSmooth,l,45,c,1.6,90,12),n.cyl(e.yellow,l,2,c,2.2,6,12),i.turbines.push({p:new C(l,90,c),h:0,r:34,blades:3,speed:.35+r%3*.05,yaw:Math.atan2(.8,-.3)})}}var Ga=class n extends J{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,s=t.color!==void 0?new ge(t.color):new ge(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||n.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Fn,u=new C,f=new C,d=new C,p=new Be,x=new C(0,0,-1),g=new wt,m=new C,y=new C,b=new wt,v=new Be,S=new It(r,o,{samples:c,type:Ot}),M=new xt({name:l.name!==void 0?l.name:"unspecified",uniforms:Jt.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});M.uniforms.tDiffuse.value=S.texture,M.uniforms.color.value=s,M.uniforms.textureMatrix.value=v,this.material=M,this.onBeforeRender=function(w,_,T){let A=this.getReflectionCamera(T);if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(T.matrixWorld),p.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(p),m.subVectors(f,d),m.dot(u)>0===!0&&this.forceUpdate===!1)return;m.reflect(u).negate(),m.add(f),p.extractRotation(T.matrixWorld),x.set(0,0,-1),x.applyMatrix4(p),x.add(d),y.subVectors(f,x),y.reflect(u).negate(),y.add(f),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(p),A.up.reflect(u),A.lookAt(y),A.far=T.far,A.updateMatrixWorld(),A.projectionMatrix.copy(T.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(A.projectionMatrix),v.multiply(A.matrixWorldInverse),v.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(A.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let L=A.projectionMatrix;A.isOrthographicCamera?(b.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],b.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],b.z=-T.far,b.w=1):(b.x=(Math.sign(g.x)+L.elements[8])/L.elements[0],b.y=(Math.sign(g.y)+L.elements[9])/L.elements[5],b.z=-1,b.w=(1+L.elements[10])/L.elements[14]),g.multiplyScalar(2/g.dot(b)),L.elements[2]=g.x,L.elements[6]=g.y,A.isOrthographicCamera?(L.elements[10]=g.z-a,L.elements[14]=g.w-1):(L.elements[10]=g.z+1-a,L.elements[14]=g.w),i.visible=!1;let U=w.getRenderTarget(),D=w.xr.enabled,N=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(S),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(_,A),w.xr.enabled=D,w.shadowMap.autoUpdate=N,w.setRenderTarget(U);let z=T.viewport;z!==void 0&&w.state.viewport(z),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),i.material.dispose()},this.getReflectionCamera=function(w){let _=this._reflectionCameras.get(w);return _===void 0&&(_=w.clone(),this._reflectionCameras.set(w,_)),_}}};Ga.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var lo=52,Bb=`
uniform float uTime;
uniform mat4 textureMatrix;
varying vec3 vWorld;
varying vec4 vRefl;
varying vec3 vNrm;
varying float vCrest;
#include <fog_pars_vertex>

// direction(xy) steepness wavelength
const int NW = 5;
vec4 W[5];
void main() {
  W[0] = vec4(normalize(vec2(1.0, 0.35)), 0.10, 92.0);
  W[1] = vec4(normalize(vec2(0.6, -0.9)), 0.08, 57.0);
  W[2] = vec4(normalize(vec2(-0.3, 1.0)), 0.07, 34.0);
  W[3] = vec4(normalize(vec2(0.9, 0.9)), 0.05, 21.0);
  W[4] = vec4(normalize(vec2(-1.0, 0.2)), 0.04, 13.0);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 p = wp.xyz;
  // flatten swell under / beside the platforms (sheltered water)
  float dC = length(p.xz);
  float calm = mix(0.35, 1.0, smoothstep(60.0, 180.0, dC));
  float far = 1.0 - smoothstep(1500.0, 3200.0, length(p.xz - cameraPosition.xz));
  vec3 d = vec3(0.0);
  vec3 T = vec3(1.0, 0.0, 0.0), B = vec3(0.0, 0.0, 1.0);
  for (int i = 0; i < NW; i++) {
    vec2 dir = W[i].xy; float st = W[i].z * calm * far; float L = W[i].w;
    float k = 6.2831853 / L; float c = sqrt(9.8 / k); float a = st / k;
    float f = k * (dot(dir, p.xz) - c * uTime);
    float sf = sin(f), cf = cos(f);
    d.x += dir.x * a * cf; d.z += dir.y * a * cf; d.y += a * sf;
    T += vec3(-dir.x * dir.x * st * sf, dir.x * st * cf, -dir.x * dir.y * st * sf);
    B += vec3(-dir.x * dir.y * st * sf, dir.y * st * cf, -dir.y * dir.y * st * sf);
  }
  vNrm = normalize(cross(B, T));
  vCrest = d.y;
  vec3 local = position + vec3(d.x, -d.z, d.y);
  vRefl = textureMatrix * vec4(local, 1.0);
  vWorld = p + d;
  vec4 mvPosition = viewMatrix * vec4(vWorld, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Wb=`
uniform float uTime;
uniform sampler2D tNormal;
uniform sampler2D tRefl;
uniform samplerCube tEnv;
uniform float uPlanar;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uGlowColor;
uniform vec4 uGlows[${lo}];
uniform vec4 uFoamDiscs[8];
uniform vec2 uReflTexel;
varying vec3 vWorld;
varying vec4 vRefl;
varying vec3 vNrm;
varying float vCrest;
#include <fog_pars_fragment>

float octSDF(vec2 p, float a) {
  float m = -1e9;
  for (int k = 0; k < 8; k++) { float t = float(k) * 0.78539816; m = max(m, dot(p, vec2(sin(t), cos(t)))); }
  return m - a;
}
void main() {
  vec2 uv = vWorld.xz;
  vec3 n1 = texture2D(tNormal, uv * 0.010 + vec2(uTime * 0.0060, uTime * 0.0035)).xyz * 2.0 - 1.0;
  vec3 n2 = texture2D(tNormal, uv * 0.031 + vec2(-uTime * 0.0090, uTime * 0.0060)).xyz * 2.0 - 1.0;
  vec3 n3 = texture2D(tNormal, uv * 0.093 + vec2(uTime * 0.0200, -uTime * 0.0150)).xyz * 2.0 - 1.0;
  vec3 n4 = texture2D(tNormal, uv * 0.270 + vec2(-uTime * 0.0350, -uTime * 0.0300)).xyz * 2.0 - 1.0;
  vec2 dn = n1.xy * 0.55 + n2.xy * 0.45 + n3.xy * 0.30 + n4.xy * 0.18;
  float dist = length(cameraPosition - vWorld);
  float fade = 1.0 - smoothstep(120.0, 1400.0, dist) * 0.75;
  vec3 N = normalize(vNrm + vec3(dn.x, 0.0, dn.y) * 0.55 * fade);
  vec3 V = normalize(cameraPosition - vWorld);
  float NdV = max(dot(N, V), 0.0);
  float fres = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);

  vec3 R = reflect(-V, N); R.y = abs(R.y);
  vec3 refl = textureCube(tEnv, R).rgb;
  if (uPlanar > 0.5) {
    // ripples break the mirror image up (clouds become broken streaks, not flat patches)
    vec2 ruv = vRefl.xy / vRefl.w + (N.xz * 0.05 + dn * 0.035) * fade;
    // five-tap blur: a wavy sea never gives a pin-sharp mirror, and it hides
    // the stair-steps of the lower-resolution reflection target
    vec2 o = uReflTexel * (1.4 + min(dist * 0.004, 2.5));
    vec3 pr = texture2D(tRefl, ruv).rgb * 0.36
      + (texture2D(tRefl, ruv + vec2(o.x, o.y)).rgb + texture2D(tRefl, ruv + vec2(-o.x, o.y)).rgb
       + texture2D(tRefl, ruv + vec2(o.x, -o.y)).rgb + texture2D(tRefl, ruv + vec2(-o.x, -o.y)).rgb) * 0.16;
    refl = mix(refl, pr, 0.92);
  }

  // body colour: deeper looking straight down, bright teal in wave faces
  vec3 body = mix(uShallow, uDeep, pow(NdV, 0.45));
  float sunUp = max(uSunDir.y, 0.0);
  body *= 0.35 + 0.65 * sunUp;
  float sss = pow(max(dot(V, -uSunDir) * 0.5 + 0.5, 0.0), 3.0) * max(vCrest + 0.4, 0.0);
  body += uShallow * sss * 0.6;

  // glows under the surface (sensor buoys / sea drones)
  vec3 glow = vec3(0.0);
  for (int i = 0; i < ${lo}; i++) {
    vec4 g = uGlows[i];
    if (g.w <= 0.0) continue;
    vec2 q = vWorld.xz - g.xz;
    float r2 = dot(q, q);
    glow += uGlowColor * g.w * (exp(-r2 / (g.y * g.y)) * 1.0 + exp(-r2 / (g.y * g.y * 8.0)) * 0.07);
  }

  // foam hugging the hulls
  float dh = octSDF(vWorld.xz, 54.6);
  float foamMask = 1.0 - smoothstep(0.0, 3.0, abs(dh));
  for (int i = 0; i < 8; i++) {
    vec4 f = uFoamDiscs[i];
    if (f.w <= 0.0) continue;
    float df = length(vWorld.xz - f.xy) - f.z;
    foamMask = max(foamMask, (1.0 - smoothstep(0.0, 2.2, abs(df))) * f.w);
  }
  float fn = texture2D(tNormal, uv * 0.21 + vec2(uTime * 0.012, -uTime * 0.008)).r;
  float fn2 = texture2D(tNormal, uv * 0.07 - vec2(uTime * 0.006)).g;
  float foam = foamMask * smoothstep(0.52, 0.78, fn * 0.6 + fn2 * 0.4 + foamMask * 0.25 + vCrest * 0.3) * (1.0 - smoothstep(150.0, 600.0, dist));
  // whitecaps: broken foam on the tallest crests, streaked along the wind
  // only small broken patches right on the sharpest crests, never whole swells
  float fn3 = texture2D(tNormal, uv * 0.43 + vec2(uTime * 0.03, -uTime * 0.02)).g; // r/g vary around 0.5; b is ~1 everywhere
  float fn4 = texture2D(tNormal, uv * 0.19 - vec2(uTime * 0.012, uTime * 0.018)).r;
  float crest = smoothstep(0.9, 1.5, vCrest);
  float cap = crest * smoothstep(0.6, 0.72, fn3 * 0.55 + fn4 * 0.45) * (1.0 - smoothstep(180.0, 900.0, dist));
  foam = max(foam, cap * 0.75);

  vec3 H = normalize(uSunDir + V);
  float NdH = max(dot(N, H), 0.0);
  float spec = pow(NdH, 900.0) * 9.0 + pow(NdH, 120.0) * 0.35;

  vec3 col = mix(body + glow * (1.0 - fres * 0.5), refl, fres);
  col += uSunColor * spec * sunUp * 1.2;
  col = mix(col, vec3(0.85, 0.9, 0.92) * (0.4 + 0.6 * sunUp), foam * 0.7);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;function cm(n,e,t,i,s){let a=new dn(7e3,7e3,360,360),l=new Ga(a,{textureWidth:512,textureHeight:512,clipBias:.002,multisample:0}),c=l.material.uniforms.textureMatrix.value,h=l.getRenderTarget();l.material.dispose();let u=[];for(let m=0;m<lo;m++)u.push(new wt(0,4,0,0));let f=[];for(let m=0;m<8;m++)f.push(new wt(0,0,0,0));let d=Jt.merge([Me.fog,{uTime:{value:0},tNormal:{value:null},tRefl:{value:null},tEnv:{value:null},uPlanar:{value:1},textureMatrix:{value:null},uSunDir:{value:i.clone()},uSunColor:{value:new ge(1,.92,.8)},uDeep:{value:new ge(.003,.032,.075)},uShallow:{value:new ge(.015,.14,.22)},uGlowColor:{value:new ge(.2,1,.8)},uGlows:{value:u},uFoamDiscs:{value:f},uReflTexel:{value:new te(1/512,1/512)}}]);d.tNormal.value=t,d.tRefl.value=h.texture,d.tEnv.value=e,d.textureMatrix.value=c,d.uGlows.value=u,d.uFoamDiscs.value=f;let p=new xt({uniforms:d,vertexShader:Bb,fragmentShader:Wb,fog:!0});l.material=p,l.rotation.x=-Math.PI/2,l.frustumCulled=!1,l.name="ocean",l.receiveShadow=!1;let x=l.onBeforeRender,g={mesh:l,uniforms:d,glows:u,discs:f,rt:h,setPlanar(m,y=.5){d.uPlanar.value=m?1:0,l.onBeforeRender=m?x:()=>{},this.res=y},resize(m,y){if(this.res){let b=Math.max(64,m*this.res|0),v=Math.max(64,y*this.res|0);h.setSize(b,v),d.uReflTexel.value.set(1/b,1/v)}},update(m,y){d.uTime.value=m;let b=7e3/360;l.position.set(Math.round(y.position.x/b)*b,0,Math.round(y.position.z/b)*b)}};return g.setPlanar(s>=2,s>=3?.6:.4),g}var Di=n=>n.traverse(e=>{e.isMesh&&(e.castShadow=!e.material.transparent,e.receiveShadow=!0)}),Pd=n=>n.traverse(e=>{e.layers.set(2),e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1)});function hm(n){let e=new it,t=[[0,-5.4],[.55,-5.1],[1.15,-4.2],[1.5,-2.6],[1.58,-.4],[1.45,1.8],[1.1,3.6],[.55,5],[.15,5.5],[0,5.55]],i=new $o(t.map(([g,m])=>new te(g,m)),28);i.rotateX(-Math.PI/2),i.scale(1,.78,1);let s=new J(i,n.whiteSmooth);e.add(s);let r=new J(new Ye(1.8,.35,7.5),n.darkSmooth);r.position.set(0,-1.05,0),e.add(r);let o=new J(new vt(1,20,12,0,Nt,0,Math.PI/2),n.glassTint);o.scale.set(1.05,.7,2.1),o.position.set(0,.55,-2.6),e.add(o);let a=new J(new Ye(.05,.08,7.2),n.cyan);a.position.set(1.28,-.2,0),e.add(a);let l=a.clone();l.position.x=-1.28,e.add(l);let c=new J(new Ye(8.8,.22,2),n.whiteSmooth);c.position.set(0,-.1,.2),e.add(c);let h=new J(new Ye(7.4,.2,1.4),n.darkSmooth);h.position.set(0,.2,3.6),e.add(h);let u=[];for(let[g,m]of[[-4.7,.2],[4.7,.2],[-4,3.6],[4,3.6]]){let y=new J(new Xt(1.25,.24,10,32),n.whiteSmooth);y.rotation.x=Math.PI/2,y.position.set(g,0,m),e.add(y);let b=new J(new Xt(1.05,.04,6,32),n.cyan);b.rotation.x=Math.PI/2,b.position.set(g,-.18,m),e.add(b);let v=new it;v.position.set(g,0,m),e.add(v);for(let M=0;M<4;M++){let w=new J(new Ye(2,.03,.18),n.darkSmooth);w.rotation.y=M*Math.PI/4,v.add(w)}let S=new J(new at(.18,.18,.2,12),n.metal);v.add(S),u.push(v)}for(let g of[-1,1]){let m=new J(new Ye(.14,1.7,1.4),n.whiteSmooth);m.position.set(g*1,1,4.4),m.rotation.z=g*.35,m.rotation.x=.35,e.add(m)}let f=new J(new vt(.12,8,6),n.red);f.position.set(-5.95,-.1,.2),e.add(f);let d=new J(new vt(.12,8,6),n.green);d.position.set(5.95,-.1,.2),e.add(d);let p=new J(new vt(.13,8,6),n.light);p.position.set(0,.9,5),e.add(p);let x=new J(new Ir(.45,20),n.cyan);return x.position.set(0,0,5.56),e.add(x),Di(e),e.userData={rotors:u,strobe:p},e}function Xb(n,e){let t=new it,i=new J(new Ye(.7,.22,.7),n.whiteSmooth);t.add(i);let s=new J(new vt(.3,16,8,0,Nt,0,Math.PI/2),n.darkSmooth);s.position.y=.1,s.scale.y=.5,t.add(s);let r=new J(new vt(.08,10,8),n.cyan);r.position.set(0,-.05,-.36),t.add(r);let o=[];for(let[l,c]of[[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]]){let h=new J(new Ye(.06,.05,.75),n.darkSmooth);h.position.set(l/2,0,c/2),h.rotation.y=Math.atan2(l,c),t.add(h);let u=new J(new Xt(.28,.03,6,20),n.cyanSoft);u.rotation.x=Math.PI/2,u.position.set(l,.03,c),t.add(u);let f=new J(new Ye(.5,.01,.05),n.darkSmooth);f.position.set(l,.06,c),t.add(f),o.push(f)}let a=new J(new Ho(1.6,7,20,1,!0),e);return a.geometry.translate(0,-3.5,0),a.rotation.x=-.5,t.add(a),Di(t),a.castShadow=!1,t.userData={rotors:o,beam:a},t}function qb(n){let e=new it,t=new J(new ss(1.1,3,6,16),n.whiteSmooth);t.rotation.x=Math.PI/2,t.scale.set(1.2,1,.75),e.add(t);let i=new J(new vt(.9,16,10,0,Nt,0,Math.PI/2),n.glassTint);i.scale.set(1,.6,1.3),i.position.set(0,.55,-1.2),e.add(i);let s=new J(new Ye(1.8,.5,2.6),n.darkSmooth);s.position.y=-.8,e.add(s);let r=new J(new Ye(1.4,.05,2.2),n.cyan);r.position.y=-1.06,e.add(r);let o=[];for(let[l,c]of[[-3.2,-2.4],[3.2,-2.4],[-3.2,2.4],[3.2,2.4]]){let h=new J(new Ye(.3,.25,Math.hypot(l,c)),n.dark);h.position.set(l/2,.1,c/2),h.rotation.y=Math.atan2(l,c),e.add(h);let u=new J(new at(.35,.45,.8,12),n.whiteSmooth);u.position.set(l,.1,c),e.add(u);let f=new J(new Xt(1.35,.06,6,28),n.dark);f.rotation.x=Math.PI/2,f.position.set(l,.55,c),e.add(f);let d=new it;d.position.set(l,.55,c),e.add(d);for(let g=0;g<2;g++){let m=new J(new Ye(2.5,.03,.22),n.darkSmooth);m.rotation.y=g*Math.PI/2,d.add(m)}let p=new J(new Ir(1.3,24),new Ht({color:2240568,transparent:!0,opacity:.25,depthWrite:!1}));p.rotation.x=-Math.PI/2,d.add(p);let x=new J(new vt(.1,8,6),l<0?n.red:n.green);x.position.set(l*1.12,.1,c),e.add(x),o.push(d)}let a=new J(new Ye(1.6,1.1,2.2),n.orangeGloss);return a.position.y=-1.9,e.add(a),Di(e),e.userData={rotors:o},e}function Yb(n,e){let t=new it,i=new J(new at(.7,.5,1.2,16),e()<.5?n.yellow:n.whiteSmooth);i.position.y=.1,t.add(i);let s=new J(new at(.72,.72,.12,16),n.orangeGloss);s.position.y=.45,t.add(s);let r=new J(new at(.05,.08,1.8,6),n.metal);r.position.y=1.5,t.add(r);let o=new J(new Ye(.6,.03,.4),n.screenOff);o.position.set(0,1.2,0),o.rotation.x=.4,t.add(o);let a=new J(new vt(.1,10,8),n.teal);a.position.y=2.45,t.add(a);let l=new J(new Xt(.62,.035,6,24),n.teal);return l.rotation.x=Math.PI/2,l.position.y=-.1,t.add(l),Di(t),t.userData.light=a,t}function Zb(n){let e=new it,t=new J(new vt(1,24,12),n.darkSmooth);t.scale.set(1.3,.35,2.1),e.add(t);let i=new J(new vt(1,24,12,0,Nt,0,Math.PI/2),n.whiteSmooth);i.scale.set(1.1,.35,1.8),i.position.y=.05,e.add(i);let s=new J(new Xt(1,.05,6,30),n.teal);s.rotation.x=Math.PI/2,s.scale.set(1.25,1.95,1),s.position.y=-.05,e.add(s);let r=new J(new at(.08,.1,.8,8),n.metal);r.position.set(0,.6,.6),e.add(r);let o=new J(new vt(.1,8,6),n.cyan);return o.position.set(0,1.05,.6),e.add(o),Di(e),e}function um(n){let e=new it,t=new J(new ss(1.6,9,8,16),n.whiteSmooth);t.rotation.x=Math.PI/2,t.scale.set(1,1,.55),t.position.y=.5,e.add(t);let i=new J(new Ye(3.25,.1,11),n.darkSmooth);i.position.y=.55,e.add(i);let s=new J(new Ye(2.4,1.3,4),n.whiteSmooth);s.position.set(0,1.7,-.5),e.add(s);let r=new J(new Ye(2.45,.5,3.6),n.glassTint);r.position.set(0,1.9,-.5),e.add(r);let o=new J(new Ye(2.46,.04,3.9),n.cyan);return o.position.set(0,1.07,-.5),e.add(o),Di(e),e}function $b(n){let e=new it,t=new J(new ss(1.1,2.6,8,20),n.yellow);t.rotation.x=Math.PI/2,e.add(t);let i=new J(new vt(.85,20,12,0,Nt,0,Math.PI/2),n.glassTint);i.rotation.x=-Math.PI/2,i.position.z=-2.1,e.add(i);for(let o of[-1,1]){let a=new J(new at(.3,.3,1,12),n.darkSmooth);a.rotation.x=Math.PI/2,a.position.set(o*1.25,-.4,1.3),e.add(a)}let s=new J(new vt(.15,8,6),n.light);s.position.set(0,-.8,-1.6),e.add(s);let r=new J(new Ye(.8,.5,1.4),n.whiteSmooth);return r.position.set(0,1.2,0),e.add(r),Di(e),e}function Kb(n,e){let t=new it;t.position.copy(e.p);let i=new it;if(t.add(i),e.vertical){let s=new J(new at(.12,.12,e.h,8),n.metal);s.position.y=e.h/2,t.add(s);for(let o=0;o<e.blades;o++){let a=new J(new Ye(.08,e.h*.8,.5),n.whiteSmooth),l=o/e.blades*Nt;a.position.set(Math.sin(l)*e.r,e.h*.5,Math.cos(l)*e.r),a.rotation.set(0,l,.25),i.add(a);for(let c of[.2,.8]){let h=new J(new Ye(.05,.05,e.r),n.metal);h.position.set(Math.sin(l)*e.r/2,e.h*c,Math.cos(l)*e.r/2),h.rotation.y=l,i.add(h)}}let r=new J(new Xt(e.r,.04,6,30),n.cyan);r.rotation.x=Math.PI/2,r.position.y=e.h*.9,i.add(r)}else{t.rotation.y=e.yaw||0;let s=new J(new ss(1.6,6,6,12),n.whiteSmooth);s.rotation.x=Math.PI/2,s.position.z=1.5,t.add(s),i.position.z=-2.2;let r=new J(new vt(1.4,12,10),n.whiteSmooth);i.add(r);for(let a=0;a<3;a++){let l=new J(new Ye(1.4,e.r,.3),n.whiteSmooth);l.geometry.translate(0,e.r/2,0),l.scale.x=.9,l.rotation.z=a/3*Nt,i.add(l)}let o=new J(new vt(.4,8,6),n.red);o.position.set(0,1.8,3),t.add(o)}return Di(t),t.userData={rot:i,speed:e.speed,vertical:!!e.vertical},t}function Jb(n,e,t){let i=new it,s=new Cr({color:new ge(.35,2.4,3),transparent:!0,opacity:.85,blending:fn,depthWrite:!1}),r=a=>{let l=new Oo(a,s);return i.add(l),l};if(e==="colony"){let a=(h,u,f=8)=>{let d=[];for(let p=0;p<f;p++){let x=(p+.5)*Nt/f,g=(p+1.5)*Nt/f,m=h/Math.cos(Math.PI/f);d.push(new C(Math.sin(x)*m,u,Math.cos(x)*m),new C(Math.sin(g)*m,u,Math.cos(g)*m))}return new ft().setFromPoints(d)};for(let[h,u]of[[56,0],[42,6],[42,0],[34,12],[34,6],[22,0],[24,12]])r(a(h,u)).scale.setScalar(t);let l=new Nr(new vt(25,16,6,0,Nt,0,Math.PI/2)),c=r(l);c.scale.set(t,t*.62,t),c.position.y=13*t;for(let h of[0,2,4,6]){let u=h*Math.PI/4,f=[new C(Math.sin(u)*56,0,Math.cos(u)*56),new C(Math.sin(u)*100,0,Math.cos(u)*100)];r(new ft().setFromPoints(f)).scale.setScalar(t)}}else{let a=r(new Nr(new vt(t,18,12))),l=r(new zo(new Xt(t*1.4,.001,2,64)));l.rotation.x=1.2,i.userData.ring=l}let o=new J(new at(e==="colony"?1.3:.8,.3,1.2,24,1,!0),n.fxCyanBeam);return o.position.y=e==="colony"?.5:.3,i.add(o),i.traverse(a=>a.layers.set(1)),i}function jb(n){let e=new it,t=new it;e.add(t);let i=new J(new at(.7,.9,1.2,20),n.darkSmooth);i.position.y=.6,t.add(i);for(let f of[-1,1]){let d=new J(new Ye(.25,2.4,.5),n.whiteSmooth);d.position.set(f*2,1.9,0),t.add(d)}let s=new it;s.position.y=2.8,t.add(s);let r=n.whiteSmooth.clone();r.side=$t;let o=new J(new vt(3.6,36,12,0,Nt,0,.9),r);o.rotation.x=Math.PI,o.position.y=3.6,s.add(o);let a=new J(new Xt(3.6*Math.sin(.9),.06,6,48),n.cyan);a.rotation.x=Math.PI/2,a.position.y=3.6-3.6*Math.cos(.9),s.add(a);let l=new J(new Ye(4.2,.3,.3),n.metal);s.add(l);for(let f=0;f<3;f++){let d=f/3*Nt,p=new J(new at(.04,.04,3.2,6),n.metal);p.position.set(Math.sin(d)*1.3,1.9,Math.cos(d)*1.3),p.lookAt(0,3.6,0),p.rotateX(Math.PI/2),s.add(p)}let c=new J(new at(.2,.3,.6,12),n.darkSmooth);c.position.y=3.3,s.add(c);let h=new J(new vt(.14,8,6),n.cyan);h.position.y=3.65,s.add(h);let u=new J(new at(.25,2.5,400,16,1,!0),n.fxCyanBeam.clone());return u.geometry.translate(0,200,0),u.material.opacity=0,s.add(u),Di(e),u.castShadow=!1,e.userData={yoke:t,tilt:s,beam:u},e}function Qb(n){let e=new it,t=new J(new at(.22,.26,.14,20),n.darkSmooth);t.position.y=.07,e.add(t);let i=new it;i.position.y=.14,e.add(i);let s=new J(new at(.15,.18,.2,16),n.plasticWhite);s.position.y=.1,i.add(s);let r=new it;r.position.y=.22,i.add(r);let o=new J(new Ye(.12,.62,.14),n.plasticWhite);o.position.y=.31,r.add(o);let a=new it;a.position.y=.62,r.add(a);let l=new J(new at(.09,.09,.18,14),n.darkSmooth);l.rotation.z=Math.PI/2,a.add(l);let c=new J(new Ye(.1,.5,.11),n.plasticWhite);c.position.y=.25,a.add(c);let h=new it;h.position.y=.5,a.add(h);let u=new J(new at(.06,.06,.12,12),n.darkSmooth);h.add(u);let f=new J(new Xt(.065,.012,6,16),n.cyan);f.rotation.x=Math.PI/2,h.add(f);for(let d of[-1,1]){let p=new J(new Ye(.02,.12,.04),n.metal);p.position.set(d*.04,.1,0),h.add(p)}return Di(e),e.traverse(d=>d.layers.set(1)),e.userData={turret:i,sh:r,el:a,wr:h},e}function dm(n,e,t,i,s){let r=zt(1234),o={vtols:[],drones:[],buoys:[],sea:[],turbines:[],holos:[],creatures:[],blink:[],misc:[]},a=[d=>{let p=d*.075;return new C(Math.sin(p)*260,72+Math.sin(p*3)*8,Math.cos(p)*260)},d=>{let p=d*.11+2,x=Math.sin(p),g=Math.cos(p);return new C(130*x/(1+g*g)+40,42+Math.sin(p*2)*6,170*x*g/(1+g*g)-20)},d=>{let p=-d*.06+1;return new C(Math.sin(p)*420+60,115+Math.sin(p*2)*12,Math.cos(p)*300-40)},d=>{let p=d*.09+4;return new C(Math.sin(p)*170-30,30+Math.sin(p*4)*4,Math.cos(p)*120+170)}];for(let d=0;d<a.length;d++){let p=hm(e);p.scale.setScalar(d===2?1.3:1),n.add(p),o.vtols.push({g:p,path:a[d],off:d*17,bank:0})}o.quads=[];for(let d=0;d<5;d++){let p=qb(e);p.scale.setScalar(1.3),n.add(p),o.quads.push({g:p,r:120+d*45,y:38+d%3*16,sp:(.05+d*.012)*(d%2?-1:1),ph:d*1.7,cx:(d-2)*40,cz:d%2*60-30})}{let d=um(e);d.scale.setScalar(.55),n.add(d);let p=60,x=new Float32Array(p*2*3),g=new Float32Array(p*2*4),m=[];for(let S=0;S<p-1;S++){let M=S*2;m.push(M,M+1,M+2,M+1,M+3,M+2)}let y=new ft;y.setAttribute("position",new dt(x,3)),y.setAttribute("color",new dt(g,4)),y.setIndex(m);let b=new Ht({vertexColors:!0,transparent:!0,depthWrite:!1,side:$t}),v=new J(y,b);v.frustumCulled=!1,n.add(v),o.boat={g:d,wake:v,pos:x,col:g,hist:[],N:p}}if(i.marks.parked){let d=hm(e);d.position.copy(i.marks.parked).setY(6+1.35),d.rotation.y=i.parkedYaw||0,n.add(d);for(let p=0;p<4;p++){let x=new J(new at(.08,.1,1.2,8),e.metal);x.position.set(p<2?-1.1:1.1,-1,p%2?2.4:-2.4),d.add(x)}o.parked={g:d,t:0,state:"idle",start:d.position.clone()}}for(let d=0;d<12;d++){let p=Xb(e,e.fxCyanBeam);Pd(p),n.add(p),o.drones.push({g:p,r:36+r()*50,y:16+r()*26,sp:(.08+r()*.12)*(r()<.5?1:-1),ph:r()*Nt,wob:r()*Nt})}let l=0;for(let d=0;d<24;d++){let p=d/24*Nt+r()*.2,x=78+d%3*40+r()*30,g=Yb(e,r);Pd(g),g.position.set(Math.sin(p)*x,0,Math.cos(p)*x),n.add(g),o.buoys.push({g,ph:r()*Nt,glow:l++})}for(let d=0;d<8;d++){let p=Zb(e);Pd(p),n.add(p),o.sea.push({g:p,r:70+r()*110,sp:(.03+r()*.03)*(d%2?1:-1),ph:r()*Nt,glow:l++})}if(i.marks.boat){let d=um(e);d.position.copy(i.marks.boat),d.rotation.y=i.marks.boatYaw||0,n.add(d),o.misc.push({g:d,kind:"bob",base:d.position.y,ph:1})}if(i.marks.sub){let d=$b(e);d.position.copy(i.marks.sub),d.rotation.y=i.marks.subYaw||0,n.add(d),o.misc.push({g:d,kind:"swing",base:d.position.clone(),ph:0})}for(let d of i.turbines){let p=Kb(e,d);n.add(p),o.turbines.push(p)}for(let d of i.holoSpots){let p=Jb(e,d.kind,d.s);p.position.copy(d.p),n.add(p),o.holos.push(p)}for(let d of i.creatures){let p=q0(e,d.s,d.seed);p.position.copy(d.p),p.rotation.y=r()*Nt,n.add(p),o.creatures.push({g:p,base:d.p.y,ph:r()*Nt,main:d.main})}{let d=i.pods.length*40,p=new Float32Array(d*3),x=new Float32Array(d);i.pods.forEach((b,v)=>{for(let S=0;S<40;S++){let M=v*40+S,w=r()*Nt,_=r()*.55;p[M*3]=b.x+Math.sin(w)*_,p[M*3+1]=b.y+.6+r()*2.1,p[M*3+2]=b.z+Math.cos(w)*_,x[M]=b.y}});let g=new ft;g.setAttribute("position",new dt(p,3));let m=new Pr({size:.05,map:t.glow,color:10479871,transparent:!0,blending:fn,depthWrite:!1}),y=new Ps(g,m);y.layers.set(1),y.frustumCulled=!1,n.add(y),o.bubbles={pts:y,pos:p,seed:x,pods:i.pods}}if(i.marks.robotArm){let d=Qb(e);d.position.copy(i.marks.robotArm),n.add(d),o.arm=d}if(i.marks.gantry){let d=new it;d.position.copy(i.marks.gantry);let p=new J(new Ye(1.2,.4,5.6),e.gunmetal);d.add(p);let x=new J(new at(.08,.08,2.2,8),e.metal);x.position.y=-1.3,d.add(x);let g=new J(new Ye(.6,.5,.6),e.darkSmooth);g.position.y=-2.5,d.add(g);let m=new J(new Xt(.25,.03,6,20),e.cyan);m.rotation.x=Math.PI/2,m.position.y=-2.76,d.add(m),d.rotation.y=Math.PI*1.5*0+(i.gantryYaw||0),d.traverse(y=>{y.layers.set(1),y.isMesh&&(y.castShadow=!0)}),n.add(d),o.gantry={g:d,base:d.position.clone(),dir:new C((i.marks.gantryDir,1),0,0)}}if(i.marks.dish){let d=jb(e);d.position.copy(i.marks.dish),n.add(d),o.dish=d,d.userData.az=0,d.userData.el=.5}let c=d=>new oi({map:t.glow,color:d,transparent:!0,blending:fn,depthWrite:!1,fog:!1});for(let d of i.blinkers){let p=new Ti(c(new ge(d.color).multiplyScalar(2.5)));p.position.copy(d.p),p.scale.setScalar(2.2),n.add(p),o.blink.push({s:p,period:d.period,ph:r()*2})}let h=new C,u=new C,f=new C(0,1,0);return o.update=(d,p,x)=>{for(let m of o.vtols){let y=d+m.off,b=m.path(y),v=m.path(y+.5),S=m.path(y+1);m.g.position.copy(b),h.subVectors(v,b).normalize(),u.subVectors(S,v).normalize();let M=h.x*u.z-h.z*u.x;m.bank+=(ks.clamp(M*18,-.6,.6)-m.bank)*Math.min(1,p*2),m.g.lookAt(b.clone().sub(h)),m.g.rotateZ(-m.bank);for(let w of m.g.userData.rotors)w.rotation.y+=p*38;m.g.userData.strobe.visible=y%1.2<.08}if(o.parked){let m=o.parked;for(let y of m.g.userData.rotors)y.rotation.y+=p*(m.state==="idle"?4:40);if(m.g.userData.strobe.visible=d%1.5<.08,m.state==="takeoff"){m.t+=p;let y=m.t;m.g.position.set(m.start.x+Math.max(0,y-4)**2*1.2,m.start.y+Math.min(y,6)*2.2+Math.max(0,y-6)*8,m.start.z-Math.max(0,y-4)**2*2),m.g.rotation.x=-Math.min(.2,Math.max(0,y-4)*.05),y>40&&(m.state="gone",m.g.visible=!1)}}for(let m of o.drones){let y=m.ph+d*m.sp,b=Math.sin(y)*m.r,v=Math.cos(y)*m.r,S=m.y+Math.sin(d*.7+m.wob)*1.4;m.g.position.set(b,S,v),m.g.rotation.set(0,y+(m.sp>0?Math.PI/2:-Math.PI/2)+Math.PI,0),m.g.rotateZ(Math.sin(d+m.wob)*.08);for(let M of m.g.userData.rotors)M.rotation.y+=p*60;m.g.userData.beam.rotation.y=Math.sin(d*.8+m.wob)*.6}let g=s.glows;for(let m of o.buoys){let y=m.g;y.position.y=Math.sin(d*1.1+m.ph)*.18,y.rotation.x=Math.sin(d*.9+m.ph)*.08,y.rotation.z=Math.cos(d*.8+m.ph)*.08;let b=.55+.45*Math.sin(d*2+m.ph);y.userData.light.visible=(d+m.ph)%2.5<.25,m.glow<lo&&g[m.glow].set(y.position.x,2.6,y.position.z,.55*b)}for(let m of o.sea){let y=m.ph+d*m.sp;m.g.position.set(Math.sin(y)*m.r,.15+Math.sin(d*2+m.ph)*.05,Math.cos(y)*m.r),m.g.rotation.y=y+(m.sp>0?Math.PI/2:-Math.PI/2)+Math.PI,m.glow<lo&&g[m.glow].set(m.g.position.x,3.5,m.g.position.z,.7)}for(let m of o.misc)m.kind==="bob"?(m.g.position.y=m.base+Math.sin(d*.9)*.15,m.g.rotation.z=Math.sin(d*.7)*.03):(m.g.position.y=m.base.y+Math.sin(d*.5)*.2,m.g.rotation.y+=p*.05);for(let m of o.quads){let y=m.ph+d*m.sp,b=m.cx+Math.sin(y)*m.r,v=m.cz+Math.cos(y)*m.r;m.g.position.set(b,m.y+Math.sin(d*.4+m.ph)*2,v),m.g.rotation.set(.08*Math.sign(m.sp),y+(m.sp>0?Math.PI/2:-Math.PI/2)+Math.PI,0);for(let S of m.g.userData.rotors)S.rotation.y+=p*30}if(o.boat){let m=o.boat,y=d*.045+2.2,b=Math.sin(y)*170+40,v=Math.cos(y)*125+30;m.g.position.set(b,.1+Math.sin(d*3)*.05,v);let S=Math.cos(y)*170,M=-Math.sin(y)*125;m.g.rotation.set(-.05,Math.atan2(S,M)+Math.PI,0);let w=m.hist;w.unshift([b,v]),w.length>m.N*5&&w.pop();let _=S/Math.hypot(S,M),T=M/Math.hypot(S,M);for(let A=0;A<m.N;A++){let P=w[Math.min(A*5,w.length-1)]||[b,v],L=.8+A*.22,U=Math.max(0,1-A/m.N);m.pos.set([P[0]-T*L,.12,P[1]+_*L,P[0]+T*L,.12,P[1]-_*L],A*6),m.col.set([1,1,1,.55*U,1,1,1,.55*U],A*8)}m.wake.geometry.attributes.position.needsUpdate=!0,m.wake.geometry.attributes.color.needsUpdate=!0}for(let m of o.turbines){let y=m.userData;y.rot.rotation[y.vertical?"y":"z"]+=p*y.speed}for(let m of o.holos)m.rotation.y+=p*.35,m.userData.ring&&(m.userData.ring.rotation.z+=p*.8);for(let m of o.creatures){m.g.position.y=m.base+Math.sin(d*.6+m.ph)*.06,m.g.rotation.y+=p*.05;let y=m.g.userData.tentacles;for(let b=0;b<y.length;b++)y[b].rotation.set(Math.sin(d*.9+b)*.12,0,Math.cos(d*.7+b)*.12)}if(o.bubbles){let m=o.bubbles,y=m.pos;for(let b=0;b<y.length/3;b++)y[b*3+1]+=p*(.25+b%7*.04),y[b*3+1]>m.seed[b]+2.7&&(y[b*3+1]=m.seed[b]+.6);m.pts.geometry.attributes.position.needsUpdate=!0}if(o.arm){let m=o.arm.userData;m.turret.rotation.y=Math.sin(d*.4)*1.2,m.sh.rotation.z=-.4+Math.sin(d*.7)*.35,m.el.rotation.z=1.1+Math.sin(d*.9+1)*.4,m.wr.rotation.y=d*1.5}if(o.gantry){let m=o.gantry;m.g.position.copy(m.base).addScaledVector(i.gantryAxis||h.set(1,0,0),Math.sin(d*.15)*6)}if(o.dish){let m=o.dish.userData,y=i.dishActive?{az:2.4,el:.95}:{az:Math.sin(d*.05)*1.2,el:.5+Math.sin(d*.07)*.1};m.az+=(y.az-m.az)*Math.min(1,p*.6),m.el+=(y.el-m.el)*Math.min(1,p*.6),m.yoke.rotation.y=m.az,m.tilt.rotation.x=-m.el,m.beam.material.opacity+=((i.dishActive?.22:0)-m.beam.material.opacity)*Math.min(1,p)}for(let m of o.blink){let y=(d+m.ph)%m.period<.35;m.s.material.opacity=y?1:.08}},o.takeoff=()=>{o.parked&&o.parked.state==="idle"&&(o.parked.state="takeoff")},o}var Zs=700,e2=`
attribute float aLife;
attribute float aSize;
varying float vA;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float l = aLife;
  vA = l <= 0.0 ? 0.0 : smoothstep(0.0, 0.12, l) * (1.0 - l) * (1.0 - smoothstep(160.0, 260.0, -mv.z));
  gl_PointSize = l <= 0.0 ? 0.0 : aSize * (0.5 + l * 2.2) * 900.0 / max(-mv.z, 0.5);
}`,t2=`
uniform sampler2D tMist;
uniform vec3 uColor;
varying float vA;
void main() {
  float m = texture2D(tMist, gl_PointCoord).a;
  float a = m * vA * 0.32;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uColor, a);
}`;function fm(n,e,t){let i=new Float32Array(Zs*3),s=new Float32Array(Zs),r=new Float32Array(Zs),o=new Float32Array(Zs*3),a=new Float32Array(Zs);s.fill(-1);let l=new ft;l.setAttribute("position",new dt(i,3)),l.setAttribute("aLife",new dt(s,1)),l.setAttribute("aSize",new dt(r,1));let c=new xt({uniforms:{tMist:{value:e},uColor:{value:new ge(1.5,1.55,1.6)}},vertexShader:e2,fragmentShader:t2,transparent:!0,depthWrite:!1}),h=new Ps(l,c);h.frustumCulled=!1,h.name="spray",n.add(h);let u=0,f=0,d=[];return{points:h,update(p,x,g){d.length=0;for(let y of t)Math.hypot(y[0]-g.position.x,y[1]-g.position.z)<170&&d.push(y);let m=.55+.45*Math.sin(x*.9)*Math.sin(x*.37+1.3);for(f+=p*d.length*.35*m;f>1&&d.length;){f-=1;let y=d[Math.random()*d.length|0],b=10+(Math.random()*14|0),v=2.5+Math.random()*3.5,S=.8+Math.random()*1.8;for(let M=0;M<b;M++){let w=u;u=(u+1)%Zs;let _=w*3,T=(Math.random()-.5)*3;i[_]=y[0]-y[3]*T+y[2]*.4,i[_+1]=.4+Math.random()*.6,i[_+2]=y[1]+y[2]*T+y[3]*.4,o[_]=y[2]*S*(.6+Math.random()*.8)+(Math.random()-.5)*.8,o[_+1]=v*(.6+Math.random()*.6),o[_+2]=y[3]*S*(.6+Math.random()*.8)+(Math.random()-.5)*.8,s[w]=.001,a[w]=1/(.7+Math.random()*.9),r[w]=M===0?.9+Math.random()*.6:.12+Math.random()*.3}}for(let y=0;y<Zs;y++){if(s[y]<=0)continue;if(s[y]+=p*a[y],s[y]>=1){s[y]=-1;continue}let b=y*3;o[b+1]-=6.5*p,o[b]*=1-p*.6,o[b+2]*=1-p*.6,i[b]+=o[b]*p,i[b+1]=Math.max(.2,i[b+1]+o[b+1]*p),i[b+2]+=o[b+2]*p}l.attributes.position.needsUpdate=!0,l.attributes.aLife.needsUpdate=!0,l.attributes.aSize.needsUpdate=!0}}}var qi=[{id:"arrive",ch:1,text:"Cross the bridge and enter AEGIS Colony",target:"lobby",hint:"Follow the lit bridge north from the landing pad."},{id:"mc",ch:1,text:"Restore systems at the Mission Control console (Level 2)",target:"mcConsole",hint:"The glass lift is in the entrance lobby."},{id:"keycard",ch:2,text:"Recover Commander Reyes' Level-3 keycard",target:"keycard",hint:"Last logged in the Crew Lounge, Level 1. Engineers know other ways in\u2026"},{id:"cryo",ch:2,text:"Enter the Cryogenic Laboratory",target:"cryoDoor",hint:"Level 1, sector 4 \u2014 the red door off the ring corridor."},{id:"scan",ch:3,text:"Scan specimen AX-7 in the primary cryo pod",target:"specimen",hint:"Stand at the pod and hold [E]."},{id:"power",ch:4,text:"Containment failing \u2014 reset breaker bank 3 in Engineering",target:"breaker",hint:"Level 1, the room with the two generators. The breaker cabinet has a red light."},{id:"reyes",ch:5,text:"Follow Commander Reyes' suit beacon to the Marine Dock",target:"reyes",hint:"Cross the north bridge to the dock platform. Look by the moon pool."},{id:"uplink",ch:6,text:"Decide what to send from the Comms Uplink (Observation Roof)",target:"uplink",hint:"Take the lift to Level 3, or climb the terrace stairs."},{id:"done",ch:7,text:"Story complete \u2014 explore the colony freely",target:null,hint:""}],pi={log_landing:{title:"Arrival Notice",by:"AEGIS Flight Ops",text:"Relief engineer inbound on VTOL-3. Colony has been silent for 36 hours after the Tuesday storm cell. Last telemetry: partial power fault, cryo containment on backup. Crew relocated to the Energy Platform shelters as a precaution. Restore systems, secure the specimen data, transmit."},log_lobby:{title:"Welcome to AEGIS",by:"Reception Terminal",text:"AEGIS Deep-Ocean Research Colony, Pacific Sector 7. Displacement 184,000 tonnes. Crew complement 46. Eight sectors on Level 1, the observation gallery and Mission Control on Level 2, the uplink array on the roof. Please do not feed the atrium tree after 22:00. It knows."},log_atrium:{title:"Atrium Garden",by:"Dr. Ines Moreau, Botany",text:"The ficus has grown 40 cm since the nutrient loop was rerouted through the hydro core below the floor. The roots now reach the reservoir. Whatever we are feeding it, it likes. The hydroponic rings are producing 30% of our greens; the rest still comes by drone."},log_lounge:{title:"Personal \u2014 Cdr. Reyes",by:"Cmdr. Elena Reyes",text:"If anyone reads this: I left my Level-3 card on the lounge table when the alarms went. Stupid. The lab doors fail closed on a power fault, which is the right design and the wrong afternoon. Tell Lindqvist the service ring under Engineering still connects to the cryo sublevel."},log_lab:{title:"Sample AX-7 \u2014 Preliminary",by:"Dr. Kofi Okafor, Xenobiology",text:"Recovered at 7,900 m from the Hadal Rift vent field. Bilateral, cephalopod-like, but the tissue fluoresces at 488 nm without any known luciferin. Neural activity persists at -196 C. That should not be possible. Recommend full sequencing before we tell anyone on shore."},log_cryo:{title:"Containment Protocol",by:"Cryo Bay Control",text:"Primary pod AX-7: liquid nitrogen jacket, triple-redundant power. On main-power loss the bay seals and the pods fall back to the local cells for 72 hours. Access restricted to Level-3 clearance. Do not open the pods. Do not tap the glass. It taps back."},log_dock:{title:"Suit Room Checklist",by:"Marine Ops",text:"Hardsuits A through D serviced. Moon pool depth 38 m under the dock. Submersible NEREID rated to 8,000 m, currently on the gantry for seal replacement. Anyone taking the sub past the buoy line files a plan with Mission Control first. That means you, Tanaka."},log_eng:{title:"Engineering Shift Log",by:"Chief Eng. Sofia Lindqvist",text:"Storm surge tripped breaker bank 3, which took Mission Control and the cryo bay with it. Generators are fine \u2014 it is the command bus. Anyone who can reach the main console on Level 2 can re-sequence it. The maintenance stair beside the gennies drops to the service ring. Mind your head."},log_quarters:{title:"Letter Home (unsent)",by:"Pilot Kenji Tanaka",text:"You would love it here. The sea is so calm some mornings it looks like glass, and the drones leave little green lights under the water all night. I fly the supply runs, twice a week. Some nights I think the sea glows back. Probably just the buoys."},log_mess:{title:"Galley Notice",by:"Galley",text:"Tuesday is algae pasta. Wednesday is algae pasta with a different sauce. Thursday the drone brings real tomatoes. Whoever keeps putting kelp in the coffee machine: the coffee machine has filed a complaint with Mission Control."},log_gallery:{title:"Observation Gallery",by:"Facilities",text:"Level 2 gallery runs the full ring except Mission Control. Telescopes are calibrated for the horizon line; the offshore wind farm is 900 m to the north. On clear evenings the energy platform turbines are visible from here, and so is the aquaculture ring to the north-west."},log_gallery2:{title:"Watch Rota",by:"Security",text:"Two on the gallery, one on the roof, rotating every four hours. Report any contact on the sonar board that the buoys do not see first. Last week the buoys saw something the sonar did not. We logged it as a whale."},log_mc:{title:"Command Bus Fault",by:"Mission Control",text:"Automatic diagnostic: command bus B offline since 14:12. Cryo bay sealed (fail-closed). Uplink array parked. Manual re-sequencing required from the main console. Commander authentication bypass enabled for relief crew."},log_roof:{title:"Uplink Array",by:"Comms Officer Layla Haddad",text:"The dish tracks the relay satellite over the southern horizon. When it fires you can see the beam in the haze \u2014 do not stand in it. Shore command expects the AX-7 dataset the moment we are back online. They have been very insistent. More insistent than usual."},log_service:{title:"Service Ring",by:"Maintenance",text:"The service ring runs under the whole Level 1 corridor. Stairs up at Engineering (sector 6) and \u2014 unofficially \u2014 at the cryo sublevel (sector 4). The hatch there is meant to be for nitrogen line inspection. It is also how the night shift gets snacks to the cryo team."},log_pump:{title:"Hydro Core",by:"Dr. Ines Moreau",text:"Found it. The tree roots have grown through the reservoir inlet and into the nutrient tank. The water here glows the same 488 nm as AX-7 tissue. I have not told Okafor. I am not sure what I would tell him."},log_energy:{title:"Energy Platform",by:"Chief Eng. Lindqvist",text:"Twelve solar arrays, three vertical-axis turbines, 40 MWh of storage. The crew is sheltering in the battery hall until the command bus is restored. Morale is fine. Someone brought cards. Someone else brought a kazoo. Please hurry."},log_dock2:{title:"Moon Pool Log",by:"Marine Ops",text:"NEREID hoisted for seal service. Moon pool clear. Note: sensor buoy S-14 reports a large, slow return under the dock at 03:10, 03:40 and 04:10. Regular as a heartbeat. Diver check found nothing but the glow."},log_reyes:{title:"Suit Recorder \u2014 Cmdr. Reyes",by:"Cmdr. Elena Reyes",text:'If you are hearing this, you came for the data. Listen first. AX-7 is not a specimen. It is a child. The thing under the dock is its mother, and she has called for it every thirty minutes since we lifted it out of the Rift. Shore Command knows. Their "further instructions" are a purge code: keep the data, freeze the body solid, forever. I am taking Suit D down the moon pool to meet her. Send the science if you must. Do not send the purge. \u2014 E.R.'},log_comms:{title:"Relay Mast",by:"Comms Officer Haddad",text:"The mast backs up the roof array for short-range links: drones, buoys, the VTOLs. It stays up on its own batteries, which is why you could still land. You are welcome."}},pm={landing:"Landing Platform",energy:"Energy Platform",dock:"Marine Dock",comms:"Comms Platform",bridge:"Connecting Bridge",promenade:"Main Deck \xB7 Courtyards",obs:"Observation Deck",lobby:"Main Entrance Lobby",lounge:"Crew Lounge",lab:"Research Laboratory",cryo:"Cryogenic Laboratory",airlock:"Dock Airlock",eng:"Engineering",quarters:"Crew Quarters",mess:"Mess Hall",corridor:"Ring Corridor",atrium:"Central Atrium",gallery:"Observation Gallery",mc:"Mission Control",terrace:"Terrace Deck",roof:"Observation Roof",service:"Service Ring",pump:"Hydro Core",ocean:"Open Ocean",stairs:"Terrace Stairs",lift:"Glass Lift"},mm=["lobby","lounge","lab","cryo","airlock","eng","quarters","mess"];var Th={1:{n:"CHAPTER ONE",t:"Silent Water"},2:{n:"CHAPTER TWO",t:"Clearance"},3:{n:"CHAPTER THREE",t:"The Cold Room"},4:{n:"CHAPTER FOUR",t:"Heartbeat"},5:{n:"CHAPTER FIVE",t:"Moon Pool"},6:{n:"CHAPTER SIX",t:"The Choice"}},wh={haddad:{name:"LAYLA HADDAD \xB7 COMMS",color:"#4ff2ff"},lindqvist:{name:"SOFIA LINDQVIST \xB7 CHIEF ENGINEER",color:"#ffb347"},okafor:{name:"DR. KOFI OKAFOR \xB7 XENOBIOLOGY",color:"#56ff9a"},shore:{name:"SHORE COMMAND",color:"#ff7a6a"},reyes:{name:"CMDR. ELENA REYES",color:"#ffd28a"},aegis:{name:"AEGIS \xB7 COLONY SYSTEM",color:"#b9c8ff"}},Ah=["PACIFIC SECTOR 7 \xB7 340 KM FROM THE NEAREST COAST","AEGIS Deep-Ocean Research Colony. Forty-six crew. One storm.","Thirty-six hours ago, the colony went silent.","The crew made it to the shelters. Commander Elena Reyes did not.","You are the relief engineer. Find out what happened."],gm={landed:[["haddad","VTOL-3, this is Haddad on the Energy Platform. Good to hear an engine out there."],["haddad","The crew are safe in the battery hall. All except the Commander. Nobody has seen Reyes since the storm."],["haddad","Get inside and bring the command bus back. Mission Control is on Level 2."]],inside:[["aegis","Welcome, relief engineer. Main power partial. Command bus B offline. Cryo bay sealed."],["haddad","That voice is the colony. The glass lift in the lobby will take you up to Mission Control."]],restored:[["aegis","Command bus re-sequenced. Uplink array on standby. Cryo bay still sealed: Level-3 clearance required."],["shore","AEGIS, this is Shore Command. Good work, engineer. Priority directive: secure the AX-7 dataset and transmit. Further instructions will follow."],["haddad","Further instructions. They never say that. Reyes' Level-3 card should be in the Crew Lounge. She dropped it when the alarms went."]],keycard:[["haddad","That's her card. She'd laugh at you for finding it before she did."]],keycardEarly:[["haddad","That's her card. Hang on to it. Mission Control first, or those red doors won't care who you are."]],cryo:[["okafor","This is Okafor. Please don't open anything. Just scan it and step back. It should be asleep."],["okafor","Should be."]],scanned:[["aegis","Scan complete. 2.4 petabytes. Warning: neural activity in pod AX-7 is rising."],["okafor","It's awake. At minus one-ninety-six. That is not possible."],["aegis","Containment power draw exceeds reserve. Local cells failing."],["lindqvist","Lindqvist here. The scan has tripped bank 3 again. Engineering, sector 6. Reset it by hand, and be quick about it."]],power:[["lindqvist","Containment is holding. Nice work."],["haddad","Engineer, buoy S-14 is lighting up under the dock. Same rhythm as the thing in the pod."],["haddad","And we've got a suit beacon down there. Suit D. That's Reyes' suit."],["shore","Engineer, the Commander's status is not your priority. Proceed to the uplink."]],reyes:[["haddad","...You heard all that. So did I. The uplink is on the roof, and what you send from it is up to you."],["shore","Engineer. Proceed to the uplink. That is an order."]],powerAfterReyes:[["lindqvist","Containment is holding. Nice work."],["haddad","You already found her recorder, didn't you? Then you know. The uplink is yours. What you send is up to you."]],uplinkReady:[["shore","Dataset received. Transmit authorisation code 7-7-OMEGA to complete the protocol."]],endingPurge:[["aegis","Authorisation 7-7-OMEGA accepted. Cryo purge in progress."],["aegis","Purge complete. Pod AX-7: vital signs none."],["shore","Thank you, AEGIS. A recovery team will arrive in seventy-two hours. The crew will be reassigned."],["haddad","...Buoy S-14 has gone dark. So has Suit D's beacon."]],endingRelease:[["aegis","Purge authorisation withheld. Opening pod AX-7 to the moon pool."],["okafor","It's moving. It's going down the pool. Oh \u2014 look at the water."],["reyes","This is Reyes. I'm on the moon pool ladder. She let me go. She didn't say anything, but I understood her."],["shore","AEGIS, respond. AEGIS\u2014"],["haddad","Sorry, Shore Command. The uplink is acting up. Storm damage, probably."]]},Rh={purge:{eyebrow:"ENDING \xB7 ORDERS FOLLOWED",title:"The water went dark",text:"The dataset is on its way to shore, and the protocol is complete. AEGIS is back online. The crew come home from the Energy Platform to a colony that works perfectly. The water under the dock stays dark, and nobody on AEGIS talks about why.",cards:["Seventy-two hours later, the recovery team arrived on schedule.","Nobody ever found Suit D."]},release:{eyebrow:"ENDING \xB7 THE SEA REMEMBERS",title:"Two lights, heading home",text:"The science went to shore. The purge code never did. Commander Reyes climbed out of the moon pool at dawn. Two lights sank past the buoy line, one large and one small. Some nights the sea under AEGIS still glows, slow and regular as a heartbeat. The crew call it a thank-you.",cards:["Shore Command sent a very angry inspection team.","They never found anything in the water. The crew never told them where to look."]}},Va={eyebrow:"COMMS UPLINK \xB7 AUTHORISATION REQUIRED",title:"What do you send?",text:"Shore Command wants code 7-7-OMEGA, which freezes AX-7 for good. Reyes asked you not to send it. Whatever you choose, the dataset goes to shore.",purge:["Send everything","Transmit the dataset and the purge code. Follow orders."],release:["Send the science only","Withhold the purge. Open the pod and let AX-7 go home."]};var xm={"landed-0":[5.54,"e2133c24"],"landed-1":[6.04,"e85f9149"],"landed-2":[5.46,"56f34db1"],"inside-0":[6.69,"375ca9fb"],"inside-1":[4.95,"2f94ad32"],"restored-0":[7.82,"acc0d161"],"restored-1":[9.51,"d31a6d70"],"restored-2":[7.37,"9431e898"],"keycard-0":[3.86,"f4bd9b22"],"keycardEarly-0":[5.89,"d7d20a7c"],"cryo-0":[5.97,"8be43a94"],"cryo-1":[.92,"6f560a45"],"scanned-0":[6.26,"8d05dcdd"],"scanned-1":[5.37,"d59dd9de"],"scanned-2":[3.81,"92a5384b"],"scanned-3":[8.14,"65546fc4"],"power-0":[3.03,"81879d92"],"power-1":[5.54,"a6b08023"],"power-2":[4.16,"48c8a35e"],"power-3":[4.91,"21522958"],"reyes-0":[5.89,"e432259c"],"reyes-1":[3.39,"eb81820d"],"powerAfterReyes-0":[2.78,"81879d92"],"powerAfterReyes-1":[6.14,"e60f9ae6"],"uplinkReady-0":[7.47,"ebb31fb1"],"endingPurge-0":[4.58,"384bcd5f"],"endingPurge-1":[4.36,"196b7497"],"endingPurge-2":[6.98,"8a6c62d8"],"endingPurge-3":[3.76,"f7d5ab1d"],"endingRelease-0":[4.22,"26486854"],"endingRelease-1":[3.72,"bdafa1cd"],"endingRelease-2":[7.06,"d0f862a5"],"endingRelease-3":[2.63,"1351ef42"],"endingRelease-4":[5.48,"78db03a"]};var Ch=new Set(["lobby","lounge","lab","cryo","airlock","eng","quarters","mess","corridor","atrium","gallery","mc","service","pump","lift"]),Ph=n=>n<5.3?-1:n<11.5?0:n<17.5?1:2,ym=Object.fromEntries(qi.map((n,e)=>[n.id,e])),n2=51,i2=50,Ih=4.8,co=n=>{let e=n%1.25/1.25;return Math.exp(-((e-.1)**2)/.002)+.6*Math.exp(-((e-.3)**2)/.002)},s2=n=>{let e=5381;for(let t=0;t<n.length;t++)e=(e*33^n.charCodeAt(t))>>>0;return e.toString(16)},r2={"-1":"SERVICE LEVEL",0:"LEVEL 1 \xB7 MAIN DECK",1:"LEVEL 2",2:"LEVEL 3 \xB7 ROOF"},Lh=class{constructor(e){Object.assign(this,e),this.body=new gh(this.world),this.yaw=0,this.pitch=0,this.keys={},this.mdx=0,this.mdy=0,this.mode="loading",this.settings={q:2,sens:1,fov:72,vol:.8,voice:1,inv:!1,fps:!1},this.loadSettings(),this.flags={keycard:!1,restored:!1,scanned:!1,transmitted:!1,svcFound:!1,pumpFound:!1},this.logs=new Set,this.radioQ=[],this.radioCur=null,this.radioT=0,this.heard=[],this.fx={awake:!1,alarm:!1,ending:null,endT:0},this.obj=0,this.explore=!1,this.time=0,this.playTime=0,this.walked=0,this.stepAcc=0,this.eyeY=0,this.bob=0,this.crouch=0,this.hudOn=!0,this.photo=!1,this.holdT=0,this.holdId=null,this.zoneId="",this._zoneAcc=0,this._mapAcc=0,this._lightAcc=0,this.camPos=new C,this.camTarget=new C,this.buildLightPool(),this.buildPickups(),this.buildInteractables(),this.bindInput(),this.bindUI(),this.applySettings()}loadSettings(){try{let e=JSON.parse(localStorage.getItem("aegis.settings")||"null");e&&Object.assign(this.settings,e)}catch{}}saveSettings(){try{localStorage.setItem("aegis.settings",JSON.stringify(this.settings))}catch{}}applySettings(){let e=this.settings;this.camera.fov=e.fov,this.camera.updateProjectionMatrix(),this.audio.setVolume(e.vol),this.ui.el.fps.classList.toggle("hidden",!e.fps),this.onQuality&&this.onQuality(e.q);let t=(i,s)=>{let r=document.getElementById(i);r.type==="checkbox"?r.checked=s:r.value=s};t("set-q",e.q),t("set-sens",e.sens),t("set-fov",e.fov),t("set-vol",e.vol),t("set-voice",e.voice),t("set-inv",e.inv),t("set-fps",e.fps),document.getElementById("o-sens").textContent=(+e.sens).toFixed(2),document.getElementById("o-fov").textContent=e.fov+"\xB0",document.getElementById("o-vol").textContent=Math.round(e.vol*100)+"%",document.getElementById("o-voice").textContent=Math.round(e.voice*100)+"%",this.voiceEl&&(this.voiceEl.volume=pn(e.vol*e.voice,0,1))}buildLightPool(){this.pool=[];let e=8;for(let t=0;t<e;t++){let i=new ia(16777215,0,14,2);i.castShadow=!1,this.scene.add(i),this.pool.push({l:i,a:null,target:0,cur:0})}}updateLights(e,t){this._lightAcc-=e;let i=this.camera.position;if(this._lightAcc<=0||t){this._lightAcc=.25;let o=[];for(let c of this.anchors){let h=c.p.distanceToSquared(i);h<1444&&o.push([h/(c.intensity+1),c])}o.sort((c,h)=>c[0]-h[0]);let a=o.slice(0,this.pool.length).map(c=>c[1]),l=[];for(let c of this.pool)c.a&&a.includes(c.a)?a.splice(a.indexOf(c.a),1):l.push(c);for(let c of l){let h=a.shift();h?(c.a=h,c.l.position.copy(h.p),c.l.color.copy(h.color),c.l.distance=h.dist,c.l.intensity=c.cur=0,c.target=h.intensity):(c.a=null,c.target=0)}}let s=this.time,r=this.fx.alarm&&Ch.has(this.zoneId);this.pool.forEach((o,a)=>{o.cur=La(o.cur,o.target,4,e);let l=r?Math.sin(s*23+a*7.1)*Math.sin(s*3.7+a)>.35?.12:.55+.2*Math.sin(s*9+a):1;o.l.intensity=o.cur*l})}buildPickups(){let e=this.M;this.pickups=[];let t=new at(.16,.2,.05,6),i=new Ye(.22,.3,.012),s=new oi({map:this.T.glow,color:new ge(.3,1.6,2),transparent:!0,blending:fn,depthWrite:!1});for(let h of Object.keys(pi)){let u=this.ctx.marks[h];if(!u){console.warn("no mark for",h);continue}let f=new it;f.position.copy(u);let d=new J(t,e.darkSmooth);d.position.y=.025,f.add(d);let p=new J(new Xt(.17,.012,6,24),e.cyan);p.rotation.x=Math.PI/2,p.position.y=.05,f.add(p);let x=new J(i,e.cyanSoft);x.position.y=.33,f.add(x);let g=new Ti(s);g.scale.setScalar(.9),g.position.y=.33,f.add(g),f.traverse(m=>m.layers.enable(1)),this.scene.add(f),this.pickups.push({id:h,g:f,card:x,p:u.clone(),taken:!1})}let r=this.ctx.marks.keycard,o=new it;o.position.copy(r);let a=new J(new Ye(.16,.01,.1),e.orangeGloss);o.add(a);let l=new J(new Ye(.12,.012,.02),e.orangeLight);l.position.set(0,.002,.02),o.add(l);let c=new Ti(new oi({map:this.T.glow,color:new ge(2,.9,.3),transparent:!0,blending:fn,depthWrite:!1}));c.scale.setScalar(.5),c.position.y=.05,o.add(c),this.scene.add(o),this.keycardMesh=o}buildInteractables(){let e=this.ctx.marks,t=this.inter=[],i=r=>(t.push(r),r);for(let r of this.pickups)i({id:r.id,p:r.p,r:1.8,label:()=>"Read data log",ok:()=>!r.taken,use:()=>this.takeLog(r)});i({id:"keycard",p:e.keycard,r:1.8,label:()=>"Take Level-3 keycard",ok:()=>!this.flags.keycard&&!this.explore,use:()=>this.takeKeycard()}),i({id:"directory",p:e.directory,r:2.2,label:()=>"Open colony directory",ok:()=>!0,use:()=>this.openMap()}),i({id:"mcConsole",p:e.mcConsole,r:2,hold:2.2,label:()=>this.flags.restored?"Systems nominal":"Hold to re-sequence command bus",ok:()=>!0,can:()=>!this.flags.restored,use:()=>this.restore()}),i({id:"specimen",p:e.specimen,r:2.2,hold:3,label:()=>this.flags.scanned?"Specimen AX-7 \xB7 data secured":this.flags.restored?"Hold to scan specimen AX-7":"Pod interface offline \u2014 restore Mission Control first",ok:()=>!0,can:()=>this.flags.restored&&!this.flags.scanned,use:()=>this.scan()}),i({id:"uplink",p:e.uplink,r:2.2,hold:3,label:()=>this.flags.transmitted?"Uplink complete":this.flags.restored?this.flags.scanned?this.uplinkReady()?"Hold to open the uplink":this.oid==="power"?"Uplink locked \u2014 containment unstable":"Uplink standing by \u2014 follow Reyes' beacon first":"No dataset to send \u2014 scan specimen AX-7":"Uplink offline \u2014 restore Mission Control first",ok:()=>!0,can:()=>this.uplinkReady(),use:()=>this.transmit()}),i({id:"breaker",p:e.breaker,r:2,hold:2.5,label:()=>this.fx.alarm?"Hold to reset breaker bank 3":"Breaker bank 3 \xB7 stable",ok:()=>!0,can:()=>this.fx.alarm,use:()=>this.resetBreaker()});for(let r=0;r<3;r++)i({id:"lift"+r,p:e["liftCall"+r],r:1.6,label:()=>this.elevAt(r)?"Lift is here":"Call lift",ok:()=>!0,can:()=>!this.elevAt(r),use:()=>this.callLift(r)});let s=this.ctx.doors.find(r=>r.id==="door_r3");this.cryoDoor=s,this.targets={lobby:e.lobby,mcConsole:e.mcConsole,keycard:e.keycard,cryoDoor:s?s.pos:e.cryo,specimen:e.specimen,uplink:e.uplink,breaker:e.breaker,reyes:e.log_reyes}}bindInput(){let e=this.renderer.domElement;addEventListener("keydown",t=>{if(!(t.repeat&&t.code!=="KeyE")){if(this.keys[t.code]=!0,t.code==="Escape"&&this.mode==="title"&&this.ui.anyOpen()){this.ui.closeTop();return}if((this.mode==="intro"||this.mode==="outro")&&["Space","Enter","Escape"].includes(t.code)){t.preventDefault(),this.skipCine();return}(this.mode==="play"||this.mode==="end")&&this.onKey(t),["Space","ArrowUp","ArrowDown","Tab"].includes(t.code)&&this.mode==="play"&&t.preventDefault()}}),addEventListener("keyup",t=>{this.keys[t.code]=!1}),addEventListener("blur",()=>{this.keys={}}),addEventListener("mousemove",t=>{document.pointerLockElement===e&&(this.mdx+=t.movementX,this.mdy+=t.movementY)}),addEventListener("wheel",t=>{this.photo&&(this.camera.fov=pn(this.camera.fov+Math.sign(t.deltaY)*3,20,100),this.camera.updateProjectionMatrix())},{passive:!0}),e.addEventListener("click",()=>{this.mode==="play"&&!this.ui.anyOpen()&&this.lock()}),e.addEventListener("mousedown",t=>{(t.button===0||t.button===2)&&(this.drag=!0)}),addEventListener("mouseup",()=>{this.drag=!1}),addEventListener("mousemove",t=>{this.drag&&document.pointerLockElement!==e&&this.mode==="play"&&!this.ui.anyOpen()&&(this.mdx+=t.movementX,this.mdy+=t.movementY)}),e.addEventListener("contextmenu",t=>t.preventDefault()),this.ui.el.resume.addEventListener("click",()=>{this.ui.hide("resume"),this.lock()}),document.getElementById("skip").addEventListener("click",()=>this.skipCine()),document.addEventListener("pointerlockchange",()=>{let t=document.pointerLockElement===e;!t&&this.mode==="play"&&!this.ui.anyOpen()&&!this._intentUnlock&&this.openPause(),this._intentUnlock=!1,t&&this.ui.hide("resume")}),this.touch={move:null,look:null,mx:0,my:0},e.addEventListener("touchstart",t=>{if(this.mode==="play"){for(let i of t.changedTouches)i.clientX<innerWidth/2&&!this.touch.move?this.touch.move={id:i.identifier,x:i.clientX,y:i.clientY}:this.touch.look||(this.touch.look={id:i.identifier,x:i.clientX,y:i.clientY,t0:performance.now(),sx:i.clientX,sy:i.clientY});t.preventDefault()}},{passive:!1}),e.addEventListener("touchmove",t=>{for(let i of t.changedTouches)this.touch.move&&i.identifier===this.touch.move.id&&(this.touch.mx=pn((i.clientX-this.touch.move.x)/60,-1,1),this.touch.my=pn((i.clientY-this.touch.move.y)/60,-1,1)),this.touch.look&&i.identifier===this.touch.look.id&&(this.mdx+=(i.clientX-this.touch.look.x)*2,this.mdy+=(i.clientY-this.touch.look.y)*2,this.touch.look.x=i.clientX,this.touch.look.y=i.clientY);t.preventDefault()},{passive:!1}),e.addEventListener("touchend",t=>{for(let i of t.changedTouches)if(this.touch.move&&i.identifier===this.touch.move.id&&(this.touch.move=null,this.touch.mx=this.touch.my=0),this.touch.look&&i.identifier===this.touch.look.id){let s=this.touch.look;performance.now()-s.t0<250&&Math.hypot(i.clientX-s.sx,i.clientY-s.sy)<12&&(this.keys.KeyE=!0,setTimeout(()=>{this.keys.KeyE=!1},this.holdTarget?3200:120),this.tapInteract=!0),this.touch.look=null}})}lock(){let e=this.renderer.domElement;if(e.requestPointerLock&&!("ontouchstart"in window&&navigator.maxTouchPoints>0&&!matchMedia("(pointer:fine)").matches))try{let t=e.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){document.pointerLockElement&&(this._intentUnlock=!0,document.exitPointerLock())}onKey(e){let t=e.code;if(this.mode!=="end"){if(t==="Escape"){this.ui.anyOpen()?this.ui.closeTop():this.openPause();return}if(this.ui.anyOpen()){t==="KeyM"&&this.ui.isOpen("mapview")&&this.ui.closeTop(),t==="KeyJ"&&this.ui.isOpen("journal")&&this.ui.closeTop();return}t==="KeyE"&&this.interact(!0),t==="KeyM"&&this.openMap(),t==="KeyJ"&&this.openJournal(),t==="KeyH"&&(this.hudOn=!this.hudOn,this.ui.el.hud.classList.toggle("hidden",!this.hudOn)),t==="KeyP"&&this.togglePhoto(),t==="KeyF"&&!this.photo&&(this.body.fly=!this.body.fly,this.body.vel.y=0,this.ui.toast(this.body.fly?"Fly mode on \u2014 Space up \xB7 C down \xB7 F to land":"Fly mode off","")),/^Digit[123]$/.test(t)&&this.inLift()&&this.sendLift(+t.slice(5)-1)}}bindUI(){let e=this.ui,t=(r,o)=>document.getElementById(r).addEventListener("click",o);t("btn-start",()=>this.start(!1)),t("btn-explore",()=>this.start(!0)),t("btn-settings",()=>e.open("settings")),t("btn-controls",()=>e.open("controls")),t("btn-guide",()=>e.open("guide")),document.querySelectorAll("#pause [data-act], #end [data-act]").forEach(r=>r.addEventListener("click",()=>{let o=r.dataset.act;o==="resume"&&(e.closeAll(),this.lock()),o==="map"&&this.openMap(),o==="journal"&&this.openJournal(),o==="settings"&&e.open("settings"),o==="controls"&&e.open("controls"),o==="guide"&&e.open("guide"),o==="title"&&(e.closeAll(),this.toTitle()),o==="continue"&&(e.closeAll(),this.mode="play",this.lock()),o==="export"&&this.onExport&&this.onExport()})),document.querySelectorAll("#choice [data-choice]").forEach(r=>{let o=Va[r.dataset.choice];r.innerHTML=`${o[0]}<small>${o[1]}</small>`,r.addEventListener("click",()=>this.choose(r.dataset.choice))}),document.getElementById("ch-eyebrow").textContent=Va.eyebrow,document.getElementById("ch-title").textContent=Va.title,document.getElementById("ch-text").textContent=Va.text,e.onClose=()=>{this.mode==="play"&&!e.anyOpen()&&(this.lock(),!document.pointerLockElement&&!("ontouchstart"in window)&&e.show("resume"))},e.onMapRedraw=()=>this.drawBigMap();let i=this.settings,s=(r,o,a)=>document.getElementById(r).addEventListener("input",l=>{i[o]=a(l.target.type==="checkbox"?l.target.checked:l.target.value),this.applySettings(),this.saveSettings()});s("set-q","q",Number),s("set-sens","sens",Number),s("set-fov","fov",Number),s("set-vol","vol",Number),s("set-voice","voice",Number),s("set-inv","inv",Boolean),s("set-fps","fps",Boolean),document.getElementById("set-q").addEventListener("change",r=>{i.q=+r.target.value,this.applySettings(),this.saveSettings()}),addEventListener("resize",()=>{this.photo&&e.letterbox(!0)})}showTitle(){this.mode="title",this.ui.hide("loading"),this.ui.hide("hud"),this.ui.show("title"),this.ui.letterbox(!1),this.ui.el.lbTop.classList.remove("hidden"),this.ui.el.lbBot.classList.remove("hidden"),this.ui.el.lbTop.style.height=this.ui.el.lbBot.style.height="7vh",this.titleT=0}toTitle(){this.unlock(),this.pauseVoice(!0),this.photo&&this.togglePhoto(),this.ui.closeAll(),this.showTitle()}start(e){this.audio.start();let t=!this.started||e!==this.lastExplore||this.flags.transmitted;this.explore=e;let i=this.ui.el.fade;i.classList.add("on"),setTimeout(()=>{if(this.ui.hide("title"),this.lastExplore=e,t&&this.reset(e),t&&!e){this.beginIntro(),i.classList.remove("on");return}this.ui.el.lbTop.classList.add("hidden"),this.ui.el.lbBot.classList.add("hidden"),this.enterPlay(),i.classList.remove("on"),this.started||(this.started=!0,this.ui.toast("Free explore \u2014 all doors unlocked","ok"))},800)}enterPlay(){this.hudOn&&this.ui.show("hud"),this.leaveTitleFov(),this.mode="play",this.lock()}beginIntro(){this.started=!0,this.mode="intro",this.cineT=0,this.ui.hide("hud");for(let o of[this.ui.el.lbTop,this.ui.el.lbBot])o.classList.remove("hidden"),o.style.height="11vh";this.ui.show("skip");let e=this.ctx.spawn,t=new C(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),i=new C(-t.z,0,t.x),s=new C(e.p.x,e.p.y+1.62,e.p.z),r=(o,a,l)=>s.clone().addScaledVector(t,o).addScaledVector(i,a).setY(s.y+l);this.introPath=new rs([r(260,230,120),r(150,170,70),r(40,120,38),r(-50,50,18),r(-14,6,4),s.clone()],!1,"centripetal"),this.introEye=s,this.introFwd=t,this.camera.fov=50,this.camera.updateProjectionMatrix()}updateIntro(e){this.cineT+=e;let t=this.cineT,i=Ah.length*Ih+1.5,s=pn(t/i,0,1),r=s*s*(3-2*s),o=this.camera;o.position.copy(this.introPath.getPointAt(r));let a=pn((s-.6)/.4,0,1),l=a*a*(3-2*a);this.camTarget.set(0,10,0).lerp(this.introEye.clone().addScaledVector(this.introFwd,60).setY(this.introEye.y-1),l),o.lookAt(this.camTarget),o.fov=50+(this.settings.fov-50)*l,o.updateProjectionMatrix();let c=Math.floor(t/Ih),h=t-c*Ih;c<Ah.length&&h>.4&&h<Ih-.6?this.ui.caption(Ah[c],c===0):this.ui.caption(""),t>=i&&this.endIntro()}endIntro(){if(this.mode!=="intro")return;this.mode="play-wait";let e=this.ui.el.fade;e.classList.add("on"),setTimeout(()=>{this.ui.clearCaption(),this.ui.hide("skip"),this.ui.el.lbTop.classList.add("hidden"),this.ui.el.lbBot.classList.add("hidden"),this.enterPlay(),e.classList.remove("on"),this.chapter(1),setTimeout(()=>this.say("landed"),2500)},800)}skipCine(){this.mode==="intro"?this.endIntro():this.mode==="outro"&&this.endOutro()}get oid(){return(qi[this.obj]||{}).id}goto(e){if(this.explore)return;let t=ym[e],i=qi[this.obj].ch;this.setObjective(t);let s=qi[t].ch;s!==i&&Th[s]&&this.chapter(s)}chapter(e){Th[e]&&(this.ui.chapter(Th[e]),this.audio.chord([220,330,440],1.2))}say(e){this.explore||(this.heard.push(...this.radioQ),this.radioQ=gm[e].map(([t,i],s)=>[t,i,`${e}-${s}`]),this.radioCur&&!this.voiceEl&&(this.radioT=Math.min(this.radioT,1.2)))}updateRadio(e){if(this.radioCur){this.radioT-=e,this.radioT<=0&&(this.radioCur=null,this.radioT=-.5,this.ui.radio(null),this.stopVoice());return}if(this.radioT<0){this.radioT=Math.min(0,this.radioT+e);return}if(!this.radioQ.length)return;let t=this.radioCur=this.radioQ.shift();this.heard.push(t),this.radioT=2+t[1].length*.05,this.ui.radio(t[0],t[1]),this.playVoice(t),this.audio.blip(1500,.04,"square",.05),setTimeout(()=>this.audio.blip(1900,.05,"square",.05),70)}playVoice([,e,t]){this.stopVoice();let i=xm[t];if(!i||i[1]!==s2(e)||this.settings.voice<=0)return;let s=this.voiceEl=new window.Audio("audio/voice/"+t+".mp3");s.volume=pn(this.settings.vol*this.settings.voice,0,1);let r=this.radioT;this.radioT=i[0]+.6;let o=()=>{this.voiceEl===s&&(this.voiceEl=null,this.radioT=Math.max(this.radioT,r*.6))};s.addEventListener("error",o),setTimeout(()=>{let a=s.play();a&&a.catch&&a.catch(o)},140)}stopVoice(){this.voiceEl&&(this.voiceEl.pause(),this.voiceEl=null)}pauseVoice(e){let t=this.voiceEl;if(t){if(e&&!t.paused)t.pause();else if(!e&&t.paused&&t.currentTime>0&&!t.ended){let i=t.play();i&&i.catch&&i.catch(()=>{})}}}radioBusy(){return!!this.radioCur||this.radioQ.length>0||this.radioT<0}uplinkReady(){return this.flags.transmitted||!this.flags.restored||!this.flags.scanned?!1:this.explore||this.oid==="uplink"}cryoGlow(e){let t=this.fx;return t.ending==="release"?0:t.ending==="purge"?Math.max(.05,1.6*(1-t.endT/5)):t.awake?1.8+co(e)*3.5:1.6+Math.sin(e*1.3)*.3}buildCreature(){let e=()=>{let t=new J(new dn(1,1),new Ht({map:this.T.glow,color:new ge(.35,1.8,1.5),transparent:!0,opacity:0,blending:fn,depthWrite:!1,fog:!1}));return t.rotation.x=-Math.PI/2,t.visible=!1,t.renderOrder=2,this.scene.add(t),t};this.creature=[e(),e()]}updateSeaGlow(e,t){let i=this.ocean.glows,s=i[n2],r=i[i2],o=this.ctx.marks.sub;if(!s||!o)return;this.creature||this.buildCreature();let a=this.fx;a.ending&&(a.endT+=e);let l=Math.hypot(o.x,o.z),c=o.x/l,h=o.z/l,u=o.x+c*34,f=o.z+h*34;if(r.w=0,a.ending==="release"){let d=a.endT,p=pn(d/7,0,1),x=Math.max(0,d-12)*4,g=pn(1-(d-34)/8,0,1);s.set(u+c*x,8+p*14,f+h*x,(.6+p*3+co(t)*1.2)*g),d>5&&r.set(u+c*(x-5)+h*4,4,f+h*(x-5)-c*4,(.8+co(t+.3)*.8)*g*pn((d-5)/3,0,1))}else a.ending==="purge"?s.set(u,8,f,pn(1-(a.endT-7)/6,0,1)*(.6+co(t)*1.4)):a.awake?s.set(u,8,f,.4+co(t)*1.4):s.set(u,7,f,this.explore||this.mode==="title"?0:.15+co(t*.5)*.35);[s,r].forEach((d,p)=>{let x=this.creature[p];x.visible=d.w>.01,x.visible&&(x.position.set(d.x,.25,d.z),x.scale.setScalar(d.y*3.2),x.material.opacity=Math.min(1,d.w*.35))})}reset(e){let t=this.ctx.spawn;this.body.pos.x=t.p.x,this.body.pos.y=t.p.y,this.body.pos.z=t.p.z,this.body.vel.x=this.body.vel.y=this.body.vel.z=0,this.body.fly=!1,this.yaw=t.yaw,this.pitch=-.02,this.eyeY=t.p.y+1.62,this.flags={keycard:!1,restored:e,scanned:!1,transmitted:!1,svcFound:!1,pumpFound:!1},this.logs=new Set;for(let i of this.pickups)i.taken=!1,i.g.visible=!0;this.radioQ=[],this.radioCur=null,this.radioT=0,this.heard=[],this.ui.radio(null),this.stopVoice(),this.fx={awake:!1,alarm:!1,ending:null,endT:0},this.ending=null,this.keycardMesh.visible=!e,this.obj=e?qi.length-1:0,this.playTime=0,this.walked=0,this.screens.state.restored=e,this.screens.state.cryoOpen=e,this.screens.state.scanned=!1,this.screens.state.transmitted=!1,this.screens.redrawAll(this.time),this.ctx.dishActive=!1,this.ui.objective(e?{text:"Free explore",hint:"Every door is open. Press M for the map, P for photo mode."}:qi[0],!0)}setObjective(e){this.explore||(this.obj=e,this.ui.objective(qi[e],!0),this.audio.chord([660,880,1320],.25))}openPause(){this.unlock(),this.ui.open("pause")}openMap(){this.unlock(),this.ui.mapLevel=Ph(this.body.pos.y),this.zoneId&&["landing","energy","dock","comms","bridge","ocean"].includes(this.zoneId)&&(this.ui.mapLevel=9),this.ui.syncTabs(),this.ui.open("mapview"),this.drawBigMap()}drawBigMap(){let e=this.objTarget();this.ui.bigMap(this.body.pos.x,this.body.pos.z,this.yaw,e,e?Ph(e.y):0)}openJournal(){this.unlock(),this.ui.journal(this.logs,e=>this.ui.showLog(e),this.heard),this.ui.open("journal")}takeLog(e){e.taken=!0,e.g.visible=!1,this.logs.add(e.id),this.audio.chord([880,1175],.2),this.ui.toast(`Data log recovered \xB7 ${this.logs.size}/${Object.keys(pi).length}`,"ok"),this.unlock(),this.ui.showLog(e.id),e.id==="log_reyes"&&this.oid==="reyes"&&(this.goto("uplink"),this.say("reyes"))}takeKeycard(){this.flags.keycard=!0,this.keycardMesh.visible=!1,this.audio.chord([520,780,1040],.3),this.ui.toast("Level-3 keycard acquired","ok"),this.oid==="keycard"?(this.goto("cryo"),this.say("keycard")):(this.oid==="arrive"||this.oid==="mc")&&this.say("keycardEarly")}restore(){this.flags.restored=!0,this.screens.state.restored=!0,this.screens.redrawAll(this.time),this.audio.chord([440,660,880,1320],.4),this.ui.toast("Command bus re-sequenced \xB7 systems online","ok"),(this.oid==="arrive"||this.oid==="mc")&&(this.goto(this.flags.keycard?"cryo":"keycard"),this.say("restored"))}scan(){this.flags.scanned=!0,this.screens.state.scanned=!0,this.audio.chord([392,523,784,1046],.5),this.ui.toast("Specimen AX-7 scanned \xB7 2.4 PB dataset secured","ok"),!this.explore&&(this.fx.awake=!0,setTimeout(()=>{this.oid==="scan"&&(this.fx.alarm=!0,this.audio.denied(),this.ui.toast("CONTAINMENT ALERT \xB7 local power cells failing","bad"),this.goto("power"),this.say("scanned"))},1800))}resetBreaker(){this.fx.alarm=!1,this.audio.noiseHit(300,.6,.3,"lowpass",0),this.audio.chord([330,440,660],.5),this.ui.toast("Breaker bank 3 reset \xB7 containment stable","ok"),this.oid==="power"&&(this.logs.has("log_reyes")?(this.goto("uplink"),this.say("powerAfterReyes")):(this.goto("reyes"),this.say("power")))}transmit(){if(this.explore){this.finishTransmit();return}this.say("uplinkReady"),this.unlock(),this.ui.open("choice")}finishTransmit(){this.flags.transmitted=!0,this.screens.state.transmitted=!0,this.ctx.dishActive=!0,this.life.takeoff(),this.audio.chord([330,494,659,988,1318],.7),this.ui.toast("Uplink locked \xB7 transmitting to orbital relay\u2026","ok")}choose(e){this.ui.closeAll(),this.ending=e,this.finishTransmit(),this.setObjective(ym.done),this.radioQ=[],this.radioCur=null,this.radioT=0,this.ui.radio(null),this.stopVoice(),this.mode="end-wait";let t=this.ui.el.fade;t.classList.add("on"),setTimeout(()=>{this.beginOutro(e),t.classList.remove("on")},2200)}beginOutro(e){this.mode="outro",this.cineT=0,this.cardT=-1,this.fx.awake=!1,this.fx.alarm=!1,this.fx.ending=e,this.fx.endT=0,this.ui.hide("hud"),this.ui.prompt(""),this.ui.hold(0);for(let t of[this.ui.el.lbTop,this.ui.el.lbBot])t.classList.remove("hidden"),t.style.height="11vh";this.ui.show("skip"),this.say(e==="purge"?"endingPurge":"endingRelease"),this.camera.fov=55,this.camera.updateProjectionMatrix()}updateOutro(e){this.cineT+=e;let t=Math.min(this.cineT,40),i=this.ctx.marks.sub,s=this.camera,r=Math.hypot(i.x,i.z),o=i.x/r,a=i.z/r,l=-a,c=o,h=30-t*.25,u=16-t*.2;s.position.set(i.x-o*h+l*u,26-t*.15,i.z-a*h+c*u);let f=this.fx.ending==="release"?34+Math.max(0,t-12)*2.5:34;if(this.camTarget.set(i.x+o*f,0,i.z+a*f),s.lookAt(this.camTarget),this.cineT>3&&!this.radioBusy()){this.cardT=Math.max(this.cardT,0)+e;let d=Rh[this.fx.ending].cards,p=Math.floor(this.cardT/4.6);p<d.length?this.ui.caption(this.cardT-p*4.6<4?d[p]:""):this.endOutro()}}endOutro(){if(this.mode!=="outro")return;this.mode="end-wait",this.radioQ=[],this.radioCur=null,this.radioT=0,this.ui.radio(null),this.stopVoice();let e=this.ui.el.fade;e.classList.add("on"),setTimeout(()=>{this.ui.clearCaption(),this.ui.hide("skip"),this.ui.el.lbTop.classList.add("hidden"),this.ui.el.lbBot.classList.add("hidden"),this.leaveTitleFov(),this.hudOn&&this.ui.show("hud"),this.fx.endT=Math.max(this.fx.endT,40),e.classList.remove("on"),this.showEnd()},800)}showEnd(){this.mode="end",this.unlock();let e=Rh[this.ending]||Rh.release;document.getElementById("end-eyebrow").textContent=e.eyebrow,document.getElementById("end-title").textContent=e.title,document.getElementById("end-text").textContent=e.text;let t=document.getElementById("end-stats");t.innerHTML=`<div><b>${f0(this.playTime)}</b>Mission time</div><div><b>${this.logs.size}/${Object.keys(pi).length}</b>Data logs</div><div><b>${(this.flags.svcFound?1:0)+(this.flags.pumpFound?1:0)}/2</b>Hidden areas</div><div><b>${this.ending==="purge"?"1 of 2":"2 of 2"}</b>${this.ending==="purge"?"Ending \xB7 Orders":"Ending \xB7 Mercy"}</div>`,this.ui.open("end")}elevAt(e){let t=this.ctx.elevator;return!t.moving&&Math.abs(t.y-t.levels[e])<.02}callLift(e){let t=this.ctx.elevator;t.target!==t.levels[e]&&(t.target=t.levels[e],this.audio.blip(990,.1),this.ui.toast("Lift called",""))}sendLift(e){let t=this.ctx.elevator;(Math.abs(t.target-t.levels[e])>.01||!this.elevAt(e))&&(t.target=t.levels[e],this.audio.blip(1180,.1))}inLift(){let e=this.ctx.elevator,t=this.body.pos;return Math.hypot(t.x-e.center.x,t.z-e.center.z)<e.r-.15&&t.y>e.y-.6&&t.y<e.y+2}updateLift(e){let t=this.ctx.elevator,i=t.target-t.y,s=t.moving;if(Math.abs(i)>.005)if(t.moving||(t.moving=!0,t.wait=.9),t.wait>0)t.wait-=e;else{t.v=pn((t.v||0)+Math.sign(i)*e*2.5,-2.8,2.8);let r=Math.sqrt(2*2.5*Math.abs(i))+.05;t.v=pn(t.v,-r,r);let o=t.v*e;Math.abs(o)>Math.abs(i)&&(o=i),t.y+=o}else t.moving&&(t.y=t.target,t.moving=!1,t.v=0,this.audio.blip(1320,.12),this.audio.door());t.car.y1=t.y,t.car.y0=t.y-.3,t.carMesh.position.y=t.y,t.gates.forEach((r,o)=>{r.enabled=!(!t.moving&&Math.abs(t.y-t.levels[o])<.02)}),this.liftDir=t.moving&&t.wait<=0?Math.sign(i):0}doorUnlocked(e,t){return!e.lock||t&&(t.x-e.pos.x)*Math.sin(e.yaw)+(t.z-e.pos.z)*Math.cos(e.yaw)>.2||this.explore?!0:e.lock==="cryo"?this.flags.restored&&this.flags.keycard:!0}updateDoors(e){let t=this.body.pos;this.lockedNear=null;for(let i of this.ctx.doors){let s=Math.hypot(t.x-i.pos.x,t.z-i.pos.z),r=t.y-i.pos.y,o=s<3.3&&r>-1&&r<3,a=this.doorUnlocked(i,t);i.target=o&&a?1:0,o&&!a&&s<2.6&&(this.lockedNear=i),i.target>i.open+.5&&!i.snd&&(this.audio.door(),i.snd=!0),i.target<.5&&(i.snd=!1),i.open=La(i.open,i.target,5,e);let l=i.mesh.userData;l.L.position.x=-i.open*l.w*.48,l.R.position.x=i.open*l.w*.48,i.col.enabled=i.open<.8}this.cryoDoor&&(this.screens.state.cryoOpen=this.doorUnlocked(this.cryoDoor))}zoneAt(e,t,i){let s=Ad();if(Math.hypot(e-s.x,i-s.z)<1.5&&t>5.5)return"lift";for(let a of za){let[l,c]=Ct(a.k,0,a.v);if(Math.hypot(e-l,i-c)<Cd(a)+1)return a.id}let r=c0(e,i),o=h0(e,i);if(r>56.3){let[a,l]=l0(o,e,i);return o%2===0&&Math.abs(a)<3&&l<100?"bridge":o%2===1&&l<68.5&&Math.abs(a)<10?"obs":"ocean"}return t<5.3?Math.hypot(e,i)<10.5?"pump":"service":t<11.5?r<22?"atrium":r<27?"corridor":r<42?mm[o]:(o===2||o===6)&&r<45&&t>6.4?"stairs":"promenade":t<17.5?r<24?"atrium":r<34?o===4?"mc":"gallery":r<42.3?"terrace":"stairs":r<34.3?"roof":"stairs"}updateZone(e){if(this._zoneAcc-=e,this._zoneAcc>0)return;this._zoneAcc=.2;let t=this.body.pos,i=this.zoneAt(t.x,t.y+.1,t.z);if(i!==this.zoneId){this.zoneId=i;let s=Ph(t.y),r=["landing","energy","dock","comms","bridge","ocean","obs"].includes(i);this.ui.zone(pm[i]||"",r?"EXTERIOR \xB7 SEA LEVEL +6 M":r2[s],`LOGS ${this.logs.size}/${Object.keys(pi).length}`),this.explore||(this.oid==="arrive"&&Ch.has(i)&&i!=="service"&&i!=="pump"&&(this.goto("mc"),this.say("inside")),i==="cryo"&&this.flags.restored&&(this.oid==="keycard"||this.oid==="cryo")&&(this.goto("scan"),this.say("cryo"))),i==="cryo"&&this.body.pos.y<11&&!this.flags.svcFound&&!this.doorUnlocked(this.cryoDoor)&&(this.flags.svcFound=!0,this.ui.toast("Hidden area found \xB7 cryo sublevel passage","ok")),i==="pump"&&!this.flags.pumpFound&&(this.flags.pumpFound=!0,this.ui.toast("Hidden area found \xB7 Hydro Core","ok")),i==="service"&&!this._svcToast&&(this._svcToast=!0,this.ui.toast("Service ring \xB7 maintenance access","warn"))}else this.ui.el.zoneC.textContent=`LOGS ${this.logs.size}/${Object.keys(pi).length}`}objTarget(){if(this.explore)return null;let e=qi[this.obj];return!e||!e.target?null:this.targets[e.target]||null}interact(e){let t=this.focus;if(!t){this.lockedNear&&e&&this.audio.denied();return}if(!t.hold){if(t.can&&!t.can()){this.audio.denied();return}t.use()}}updateInteract(e){let t=this.body.pos,i=this.camera,s=new C;i.getWorldDirection(s);let r=null,o=1e9;for(let l of this.inter){if(!l.p||!l.ok())continue;let c=l.p.x-t.x,h=l.p.z-t.z,u=l.p.y-t.y;if(u<-1.2||u>2.2)continue;let f=Math.hypot(c,h);if(f>l.r)continue;let d=f<.6?1:(c*s.x+h*s.z)/(f*Math.hypot(s.x,s.z)+1e-6);if(d<.2)continue;let p=f*(1.6-d);p<o&&(o=p,r=l)}this.focus=r,this.holdTarget=r&&r.hold,r&&r.hold&&this.keys.KeyE&&(!r.can||r.can())?(this.holdId!==r.id&&(this.holdId=r.id,this.holdT=0),this.holdT+=e,this.ui.hold(this.holdT/r.hold),this.holdT>=r.hold&&(this.holdT=0,this.holdId=null,this.ui.hold(0),r.use(),this.keys.KeyE=!1)):(this.holdT>0&&this.ui.hold(0),this.holdT=0,this.holdId=null),this.tapInteract&&r&&!r.hold?(this.tapInteract=!1,this.interact(!0)):this.tapInteract=!1;let a=this.inLift();if(this.ui.liftPick(a&&!this.ctx.elevator.moving,this.ctx.elevator.levels.indexOf(this.ctx.elevator.target)),a){this.ui.prompt("");return}if(r){let l=!r.can||r.can(),c=r.label();this.ui.prompt(l?`<kbd>E</kbd>${r.hold,""}${c}`:c,!l&&!/nominal|complete|secured|here/.test(c))}else if(this.lockedNear){let l=this.lockedNear,c=this.flags.restored?"RESTRICTED \xB7 Level-3 clearance required":"SEALED \xB7 command bus offline \u2014 restore Mission Control";this.ui.prompt(c,!0)}else this.ui.prompt("")}togglePhoto(){this.photo=!this.photo,this.ui.letterbox(this.photo),this.ui.el.photoHint.classList.toggle("hidden",!this.photo),this.ui.el.hud.classList.toggle("hidden",this.photo||!this.hudOn),this.photo?(this.photoPos=this.camera.position.clone(),this.photoYaw=this.yaw,this.photoPitch=this.pitch,this.savedFov=this.camera.fov,setTimeout(()=>this.ui.el.photoHint.classList.add("hidden"),4e3)):(this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix(),this.yaw=this.photoYaw,this.pitch=this.photoPitch)}update(e,t){if(this.time=t,this.mode==="title"||this.mode==="loading"){this.updateTitle(e,t),this.updateSeaGlow(e,t);return}if(this.mode==="intro"||this.mode==="outro"||this.mode==="play-wait"||this.mode==="end-wait"){this.mode==="intro"&&this.updateIntro(e),this.mode==="outro"&&(this.updateOutro(e),this.updateRadio(e)),this.zoneId="ocean",this.common(e,t);return}let i=this.settings,s=.0022*i.sens;this.yaw-=this.mdx*s,this.pitch-=this.mdy*s*(i.inv?-1:1),this.pitch=pn(this.pitch,-1.5,1.5),this.mdx=this.mdy=0;let r=this.keys,o=this.ui.anyOpen()||this.mode==="end",a=0,l=0;o||((r.KeyW||r.ArrowUp)&&(l+=1),(r.KeyS||r.ArrowDown)&&(l-=1),(r.KeyD||r.ArrowRight)&&(a+=1),(r.KeyA||r.ArrowLeft)&&(a-=1),a+=this.touch.mx,l-=this.touch.my);let c=Math.hypot(a,l);c>1&&(a/=c,l/=c);let h=Math.sin(this.yaw),u=Math.cos(this.yaw),f=this.camera;if(this.photo){let v=(r.ShiftLeft||r.ShiftRight?18:6)*e,S=new C(-h*Math.cos(this.pitch),Math.sin(this.pitch),-u*Math.cos(this.pitch)),M=new C(u,0,-h);f.position.addScaledVector(S,l*v).addScaledVector(M,a*v),(r.KeyE||r.Space)&&(f.position.y+=v),(r.KeyQ||r.KeyC)&&(f.position.y-=v),f.rotation.set(this.pitch,this.yaw,0,"YXZ"),this.common(e,t);return}this.playTime+=e;let d=this.body,p=(r.ShiftLeft||r.ShiftRight)&&!d.fly;this.crouch=La(this.crouch,r.KeyC&&!d.fly?1:0,10,e);let x=d.fly?p||r.ShiftLeft?30:12:(p?7.2:4.2)*(1-this.crouch*.5),g=(-h*l+u*a)*x,m=(-u*l-h*a)*x;if(d.fly){let v=(r.Space?1:0)-(r.KeyC?1:0),S=Math.sin(this.pitch)*l;d.vel.y=(v+S)*x,d.move(e,g*Math.cos(this.pitch),m*Math.cos(this.pitch),!1)}else{let v=d.pos.x,S=d.pos.z;d.move(e,o?0:g,o?0:m,!o&&r.Space);let M=Math.hypot(d.pos.x-v,d.pos.z-S);if(d.grounded&&(this.walked+=M,this.stepAcc+=M,this.bob+=M*1.9,this.stepAcc>(p?.85:.62))){this.stepAcc=0;let w=this.zoneId;this.audio.step(w==="service"||w==="bridge"||w==="stairs"?"metal":w==="atrium"?"soft":"hard")}d.pos.y<-2&&(d.pos.x=d.safe.x,d.pos.y=d.safe.y+.2,d.pos.z=d.safe.z,d.vel.x=d.vel.y=d.vel.z=0,this.ui.toast("Man overboard! A drone fished you out.","warn"))}let y=d.pos.y+(d.fly?1.62:1.62-this.crouch*.55);this.eyeY=Math.abs(y-this.eyeY)>1.2?y:La(this.eyeY,y,18,e);let b=d.grounded&&!d.fly?Math.sin(this.bob)*.035*Math.min(1,Math.hypot(d.vel.x,d.vel.z)/4):0;f.position.set(d.pos.x,this.eyeY+b,d.pos.z),f.rotation.set(this.pitch,this.yaw,Math.sin(this.bob*.5)*.004,"YXZ"),this.updateLift(e),this.updateDoors(e),this.updateZone(e),this.pauseVoice(this.ui.anyOpen()),this.ui.anyOpen()||this.updateRadio(e),this.fx.alarm&&Ch.has(this.zoneId)&&(this._alarmT=(this._alarmT||0)-e,this._alarmT<=0&&(this._alarmT=3.2,this.audio.blip(520,.35,"sawtooth",.035),setTimeout(()=>this.audio.blip(390,.45,"sawtooth",.035),380))),o?(this.ui.prompt(""),this.ui.hold(0)):this.updateInteract(e);for(let v of this.pickups)v.taken||(v.card.rotation.y=t*1.4,v.card.position.y=.33+Math.sin(t*2+v.p.x)*.03);if(this.keycardMesh.visible&&(this.keycardMesh.rotation.y=t*.8),this._mapAcc-=e,this._mapAcc<=0){this._mapAcc=1/20;let v=this.objTarget(),S=null;if(v){let M=v.x-d.pos.x,w=v.z-d.pos.z;S=(Math.atan2(M,-w)*180/Math.PI+360)%360;let _=v.y-d.pos.y;this.ui.objDistance(`${Math.round(Math.hypot(M,w))} m${_>3?"  \u25B2 above":_<-3?"  \u25BC below":""}`)}else this.ui.objDistance("");this.ui.compass(this.yaw,S),this.ui.minimap(d.pos.x,d.pos.z,this.yaw,Ph(d.pos.y),v),this.ui.isOpen("mapview")&&this.drawBigMap()}this.common(e,t)}common(e,t){this.updateLights(e),this.updateSeaGlow(e,t);let i=Ch.has(this.zoneId)?1:0,s=0;for(let r of this.life.vtols){let o=r.g.position.distanceTo(this.camera.position);s=Math.max(s,pn(1-o/160,0,1))}this.life.parked&&this.life.parked.state==="takeoff"&&(s=Math.max(s,pn(1-this.life.parked.g.position.distanceTo(this.camera.position)/200,0,1))),this.audio.mix(1-i*.85,i,s*(i?.2:1),this.liftDir||0,e)}updateTitle(e,t){this.titleT=(this.titleT||0)+e;let i=this.titleT,s=-2.35+i*.018,r=185+Math.sin(i*.045)*25,o=88+Math.sin(i*.06+.8)*14,a=this.camera;a.position.set(Math.sin(s)*r,o,Math.cos(s)*r);let l=Math.sin(s+.9)*8,c=Math.cos(s+.9)*8,h=l-a.position.x,u=c-a.position.z,f=Math.hypot(h,u),d=innerWidth>900?.36*f*(innerWidth/innerHeight)/1.78:0;this.camTarget.set(l+u/f*d,2+Math.sin(i*.05)*3,c-h/f*d),a.lookAt(this.camTarget),a.fov!==50&&(a.fov=50,a.updateProjectionMatrix()),this.zoneId="ocean",this.updateLights(e,!1),this.audio.mix(1,0,0,0,e)}leaveTitleFov(){this.camera.fov=this.settings.fov,this.camera.updateProjectionMatrix()}};var rt=n=>document.getElementById(n),Ba="#4ff2ff",Ni="rgba(79,242,255,0.35)",Wa="rgba(79,242,255,0.07)",Yi="#e8f6ff",Qn="#ffb347",o2="#ff5a4a",a2=["LOBBY","CREW LOUNGE","RESEARCH LAB","CRYO LAB","DOCK AIRLOCK","ENGINEERING","QUARTERS","MESS HALL"],Dh=class{constructor(){this.el={loading:rt("loading"),bar:rt("load-bar"),status:rt("load-status"),title:rt("title"),hud:rt("hud"),objT:rt("obj-t"),objH:rt("obj-h"),objD:rt("obj-d"),obj:rt("obj"),zoneN:rt("zone-n"),zoneL:rt("zone-l"),zoneC:rt("zone-c"),prompt:rt("prompt"),toasts:rt("toasts"),hold:rt("hold"),holdArc:rt("hold-arc"),fps:rt("fps"),lifepick:rt("lifepick"),compass:rt("compass"),minimap:rt("minimap"),mapcanvas:rt("mapcanvas"),resume:rt("resume"),fade:rt("fade"),lbTop:rt("lb-top"),lbBot:rt("lb-bot"),photoHint:rt("photo-hint")},this.cg=this.el.compass.getContext("2d"),this.mg=this.el.minimap.getContext("2d"),this.fg=this.el.mapcanvas.getContext("2d"),this.mapLevel=0,this.stack=[],this._lastPrompt="",document.querySelectorAll("[data-close]").forEach(e=>e.addEventListener("click",()=>this.closeTop())),document.querySelectorAll("#map-tabs button").forEach(e=>e.addEventListener("click",()=>{this.mapLevel=+e.dataset.l,this.syncTabs(),this.onMapRedraw&&this.onMapRedraw()}))}progress(e,t){this.el.bar.style.width=(e*100).toFixed(1)+"%",t&&(this.el.status.textContent=t)}show(e){rt(e).classList.remove("hidden")}hide(e){rt(e).classList.add("hidden")}isOpen(e){return!rt(e).classList.contains("hidden")}open(e){this.stack.includes(e)||(this.stack.push(e),this.show(e))}closeTop(){let e=this.stack.pop();e&&this.hide(e),this.onClose&&this.onClose(e)}closeAll(){for(;this.stack.length;)this.hide(this.stack.pop())}anyOpen(){return this.stack.length>0}syncTabs(){document.querySelectorAll("#map-tabs button").forEach(e=>e.classList.toggle("on",+e.dataset.l===this.mapLevel))}objective(e,t){this.el.objT.textContent=e?e.text:"",this.el.objH.textContent=e&&e.hint||"",this.el.obj.classList.toggle("hidden",!e),t&&(this.el.obj.classList.remove("flash"),this.el.obj.offsetWidth,this.el.obj.classList.add("flash"))}objDistance(e){this.el.objD.textContent=e}zone(e,t,i){this.el.zoneN.textContent=e,this.el.zoneL.textContent=t,this.el.zoneC.textContent=i}prompt(e,t){if(!e){this._lastPrompt&&(this.el.prompt.classList.add("hidden"),this._lastPrompt="");return}e!==this._lastPrompt&&(this.el.prompt.innerHTML=e,this._lastPrompt=e),this.el.prompt.classList.remove("hidden"),this.el.prompt.classList.toggle("locked",!!t)}hold(e){if(e<=0){this.el.hold.classList.add("hidden");return}this.el.hold.classList.remove("hidden"),this.el.holdArc.setAttribute("stroke-dashoffset",(163.4*(1-e)).toFixed(1))}liftPick(e,t){let i=this.el.lifepick;if(!e){i.classList.add("hidden");return}i.classList.remove("hidden");let r=["1 \xB7 Lobby","2 \xB7 Gallery / Mission Control","3 \xB7 Observation Roof"].map((o,a)=>`<div class="${a===t?"cur":""}"><kbd>${a+1}</kbd>${o.slice(4)}</div>`).join("");i._h!==r&&(i.innerHTML=r,i._h=r)}toast(e,t=""){let i=document.createElement("div");for(i.className="toast "+t,i.textContent=e,this.el.toasts.appendChild(i),setTimeout(()=>i.remove(),4100);this.el.toasts.children.length>4;)this.el.toasts.firstChild.remove()}compass(e,t){let i=this.cg,s=1040;i.clearRect(0,0,s,68);let o=i.createLinearGradient(0,0,s,0);o.addColorStop(0,"rgba(4,16,24,0)"),o.addColorStop(.2,"rgba(4,16,24,0.55)"),o.addColorStop(.8,"rgba(4,16,24,0.55)"),o.addColorStop(1,"rgba(4,16,24,0)"),i.fillStyle=o,i.fillRect(0,10,s,40);let a=(-e*180/Math.PI%360+360)%360,l=5.2;i.textAlign="center",i.textBaseline="middle";for(let c=-100;c<=100;c+=5){let h=Math.round((a+c)/5)*5,u=s/2+(h-a)*l;if(u<20||u>s-20)continue;let f=(h%360+360)%360,d=1-Math.abs(u-s/2)/(s/2);if(i.globalAlpha=Math.max(0,d),f%45===0){let p={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"}[f];i.fillStyle=f%90===0?Yi:Ba,i.font=`${f%90===0?600:400} 22px "Exo 2", sans-serif`,i.fillText(p,u,30)}else f%15===0?(i.fillStyle=Ni,i.fillRect(u-1,22,2,16)):(i.fillStyle="rgba(79,242,255,0.2)",i.fillRect(u-1,26,2,8))}if(i.globalAlpha=1,i.fillStyle=Ba,i.beginPath(),i.moveTo(s/2-7,6),i.lineTo(s/2+7,6),i.lineTo(s/2,14),i.fill(),t!=null){let c=(t-a+540)%360-180,h=Math.max(-96,Math.min(96,c)),u=s/2+h*l;i.fillStyle=Qn,i.beginPath(),i.moveTo(u,44),i.lineTo(u-8,58),i.lineTo(u+8,58),i.fill(),Math.abs(c)>96&&(i.font="600 18px sans-serif",i.fillText(c>0?"\u203A":"\u2039",u+(c>0?16:-16),51))}}drawPlan(e,t,i,s={}){let r=(u,f)=>i(u,f),o=(u,f,d,p=1.5)=>{e.beginPath(),u.forEach(([x,g],m)=>{let[y,b]=r(x,g);m?e.lineTo(y,b):e.moveTo(y,b)}),e.closePath(),d&&(e.fillStyle=d,e.fill()),f&&(e.strokeStyle=f,e.lineWidth=p,e.stroke())},a=(u,f,d,p,x,g=1.5)=>{let[m,y]=r(u,f),[b,v]=r(d,p);e.strokeStyle=x,e.lineWidth=g,e.beginPath(),e.moveTo(m,y),e.lineTo(b,v),e.stroke()},l=(u,f,d,p=Yi,x=12)=>{let[g,m]=r(f,d);e.fillStyle=p,e.font=`600 ${x}px "Exo 2", sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(u,g,m)};for(let u of za){let f=Rd(u).map(([p,x])=>Ct(u.k,p,x));o(f,t===0||t===9?Ni:"rgba(79,242,255,0.15)",t===0||t===9?Wa:null);let d=[[-2.3,56.5],[2.3,56.5],[2.3,u.shape==="rect"?u.v-u.d/2:u.v-u.a],[-2.3,u.shape==="rect"?u.v-u.d/2:u.v-u.a]].map(([p,x])=>Ct(u.k,p,x));if(o(d,t===0||t===9?Ni:"rgba(79,242,255,0.15)",t===0||t===9?Wa:null),s.labels){let[p,x]=Ct(u.k,0,u.v);l(u.name.toUpperCase(),p,x,Yi,s.big?15:11)}}for(let u of[1,3,5,7]){let f=[[-6.2,56.2],[6.2,56.2],[9,60],[9,64],[6,67.5],[-6,67.5],[-9,64],[-9,60]].map(([d,p])=>Ct(u,d,p));o(f,t===0?Ni:"rgba(79,242,255,0.12)",t===0?Wa:null,1)}let c=Ba,h="rgba(79,242,255,0.18)";if(o(Ke(56.5),t===0||t===9?c:h,t===0||t===9?Wa:null,2),(t===0||t===9)&&(o(Ke(56.2),null,"rgba(79,242,255,0.10)"),o(Ke(48),Ni,"rgba(2,10,16,0.55)",1.5),o(Ke(48),null,Wa)),t===-1){o(Ke(27),c,"rgba(255,179,71,0.06)"),o(Ke(21),c),o(Mn(10,32),Qn,"rgba(86,255,154,0.08)");let[u,f]=[Ct(0,-1.4,10),Ct(0,1.4,21)];o([[u[0],u[1]],[f[0],u[1]],[f[0],f[1]],[u[0],f[1]]],Qn);for(let d of[3,5])o([[Oe.u0,27],[Oe.u1,27],[Oe.u1,Oe.v1],[Oe.u0,Oe.v1]].map(([p,x])=>Ct(d,p,x)),Qn,"rgba(255,179,71,0.12)");if(s.labels){l("HYDRO CORE",0,0,"#56ff9a",s.big?14:10);let[d,p]=Ct(1,0,24);l("SERVICE RING",d,p,Qn,s.big?13:9)}}if((t===0||t===9)&&(o(Ke(42),c,t===0?"rgba(79,242,255,0.05)":null),o(Ke(27),t===0?Ni:h),o(Ke(22),t===0?c:h),t===0)){for(let u=0;u<8;u++){let[f,d]=Ct(u,Ne*27,27),[p,x]=Ct(u,Ne*42,42);if(a(f,d,p,x,Ni),s.labels){let[g,m]=Ct(u,0,35);l(a2[u],g,m,u===3?o2:Yi,s.big?13:9)}}for(let u of[2,6]){let f=[[-7.9,42.25],[1.4,42.25],[1.4,44.75],[-7.9,44.75]].map(([d,p])=>Ct(u,d,p));o(f,Qn,"rgba(255,179,71,0.15)",1)}s.labels&&l("ATRIUM",0,0,"#56ff9a",s.big?14:10)}if(t===1){o(Ke(42),h),o(Ke(34),c,"rgba(79,242,255,0.05)"),o(Ke(24),c);for(let u of[3,4]){let[f,d]=Ct(u,Ne*24,24),[p,x]=Ct(u,Ne*34,34);a(f,d,p,x,Ba,2)}o(Ke(42),Ni,null,1);for(let u of[2,6]){let f=[[-7.9,34.25],[1.4,34.25],[1.4,36.75],[-7.9,36.75]].map(([d,p])=>Ct(u,d,p));o(f,Qn,"rgba(255,179,71,0.15)",1)}if(s.labels){let[u,f]=Ct(4,0,29);l("MISSION CONTROL",u,f,Qn,s.big?13:9);let[d,p]=Ct(0,0,29);l("GALLERY",d,p,Yi,s.big?12:9);let[x,g]=Ct(0,0,38);l("TERRACE",x,g,Ni,s.big?11:8)}}if(t===2&&(o(Ke(34),c,"rgba(79,242,255,0.05)"),o(Mn(26,48),c,"rgba(79,242,255,0.1)"),s.labels)){l("DOME",0,0,Yi,s.big?14:10);let[u,f]=Ct(4,0,30.6);l("UPLINK",u,f,Qn,s.big?13:9)}if(t!==-1){let[u,f]=Ct(on.k,on.u,on.v),[d,p]=r(u,f);e.fillStyle=Ba,e.beginPath(),e.arc(d,p,s.big?6:3,0,Nt),e.fill()}}marker(e,t,i,s,r=7){e.fillStyle=s,e.beginPath(),e.moveTo(t,i-r),e.lineTo(t+r,i),e.lineTo(t,i+r),e.lineTo(t-r,i),e.closePath(),e.fill()}arrow(e,t,i,s,r=9){e.save(),e.translate(t,i),e.rotate(s),e.fillStyle=Yi,e.beginPath(),e.moveTo(0,-r*1.3),e.lineTo(r*.8,r),e.lineTo(0,r*.5),e.lineTo(-r*.8,r),e.closePath(),e.fill(),e.restore()}minimap(e,t,i,s,r){let o=this.mg,a=420,l=a/2,c=1.55;o.clearRect(0,0,a,a),o.save(),o.beginPath(),o.arc(l,l,l-2,0,Nt),o.clip();let h=Math.cos(i),u=Math.sin(i),f=(m,y)=>{let b=m-e,v=y-t,S=b*h-v*u,M=b*u+v*h;return[l+S*c,l+M*c]};if(this.drawPlan(o,s,f,{labels:!0}),r){let[m,y]=f(r.x,r.z),b=Math.hypot(m-l,y-l);b>l-16&&(m=l+(m-l)/b*(l-16),y=l+(y-l)/b*(l-16)),this.marker(o,m,y,Qn,9)}o.restore(),this.arrow(o,l,l,0,10),o.strokeStyle=Ni,o.lineWidth=2,o.beginPath(),o.arc(l,l,l-2,0,Nt),o.stroke();let d=l+-u*0+Math.sin(-i)*0,p=i,x=l+Math.sin(p)*(l-16),g=l-Math.cos(p)*(l-16);o.fillStyle=Yi,o.font='600 18px "Exo 2", sans-serif',o.textAlign="center",o.textBaseline="middle",o.fillText("N",x,g)}bigMap(e,t,i,s,r){let o=this.fg,a=1600,l=1e3;o.clearRect(0,0,a,l);let c=this.mapLevel===9,h=c?3.2:6.6,u=a/2,f=l/2,d=(g,m)=>[u+g*h,f+m*h];o.strokeStyle="rgba(79,242,255,0.05)",o.lineWidth=1;for(let g=0;g<a;g+=40)o.beginPath(),o.moveTo(g,0),o.lineTo(g,l),o.stroke();for(let g=0;g<l;g+=40)o.beginPath(),o.moveTo(0,g),o.lineTo(a,g),o.stroke();if(this.drawPlan(o,this.mapLevel===9?9:this.mapLevel,d,{labels:!0,big:!0}),s&&(r===this.mapLevel||c)){let[g,m]=d(s.x,s.z);this.marker(o,g,m,Qn,14),o.fillStyle=Qn,o.font='600 16px "Exo 2"',o.textAlign="left",o.fillText("OBJECTIVE",g+18,m+5)}let[p,x]=d(e,t);this.arrow(o,p,x,-i,14),o.fillStyle=Yi,o.font='600 15px "Exo 2"',o.textAlign="left",o.fillText("YOU",p+18,x+5),o.fillStyle="rgba(232,246,255,0.5)",o.font='14px "Share Tech Mono"',o.fillText("N \u2191   \xB7   grid 6 m",20,l-20)}journal(e,t,i=[]){let s=rt("j-list");s.innerHTML="";let r=Object.keys(pi);rt("j-count").textContent=`${e.size} / ${r.length}`;for(let o of r){let a=document.createElement("button");e.has(o)?(a.textContent=pi[o].title+"  \u2014  "+pi[o].by,a.onclick=()=>t(o)):(a.textContent="\u25A2  Unrecovered log",a.className="locked"),s.appendChild(a)}if(i.length){let o=document.createElement("div");o.className="sec",o.textContent="RADIO TRANSMISSIONS",s.appendChild(o);for(let[a,l]of i.slice().reverse()){let c=document.createElement("div");c.className="tx",c.style.setProperty("--sp",wh[a].color);let h=document.createElement("b");h.textContent=wh[a].name,c.append(h,l),s.appendChild(c)}}}radio(e,t){let i=rt("radio");if(!e){i.classList.add("hidden");return}let s=wh[e];i.style.setProperty("--sp",s.color),rt("radio-who").textContent=s.name,rt("radio-say").textContent=t,i.classList.add("hidden"),i.offsetWidth,i.classList.remove("hidden")}chapter(e){let t=rt("chapter");rt("ch-n").textContent=e.n,rt("ch-t").textContent=e.t,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(this._chT),this._chT=setTimeout(()=>t.classList.add("hidden"),5e3)}caption(e,t){let i=rt("caption");if(!e){i.style.opacity=0;return}i.classList.remove("hidden"),i.classList.toggle("mono",!!t),i.textContent!==e?(i.style.opacity=0,clearTimeout(this._capT),this._capT=setTimeout(()=>{i.textContent=e,i.style.opacity=1},i.textContent?450:0)):i.style.opacity=1}clearCaption(){let e=rt("caption");e.textContent="",e.style.opacity=0,e.classList.add("hidden"),clearTimeout(this._capT)}showLog(e){let t=pi[e];rt("lv-title").textContent=t.title,rt("lv-by").textContent=t.by.toUpperCase(),rt("lv-body").textContent=t.text,this.open("logview")}letterbox(e){let t=window.innerWidth,i=window.innerHeight,s=e?Math.max(0,(i-t*9/16)/2):0;for(let r of[this.el.lbTop,this.el.lbBot])r.classList.toggle("hidden",!e),r.style.height=s+"px"}};var Nh=class{constructor(){this.ctx=null,this.vol=.8,this.ready=!1}start(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.vol,this.master.connect(t.destination);let i=t.createBuffer(1,t.sampleRate*4,t.sampleRate),s=i.getChannelData(0),r=0;for(let S=0;S<s.length;S++){let M=Math.random()*2-1;r=(r+.02*M)/1.02,s[S]=r*3.5}let o=t.createBuffer(1,t.sampleRate*2,t.sampleRate),a=o.getChannelData(0);for(let S=0;S<a.length;S++)a[S]=Math.random()*2-1;this.whiteBuf=o;let l=S=>{let M=t.createBufferSource();return M.buffer=S,M.loop=!0,M.start(),M};this.ocean=t.createGain(),this.ocean.gain.value=0,this.ocean.connect(this.master);let c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=520,l(i).connect(c),c.connect(this.ocean);let h=t.createOscillator();h.frequency.value=.09;let u=t.createGain();u.gain.value=180,h.connect(u),u.connect(c.frequency),h.start(),this.wind=t.createGain(),this.wind.gain.value=0,this.wind.connect(this.master);let f=t.createBiquadFilter();f.type="bandpass",f.frequency.value=700,f.Q.value=.6,l(o).connect(f),f.connect(this.wind);let d=t.createOscillator();d.frequency.value=.05;let p=t.createGain();p.gain.value=300,d.connect(p),p.connect(f.frequency),d.start(),this.hum=t.createGain(),this.hum.gain.value=0,this.hum.connect(this.master);for(let[S,M]of[[55,.35],[110,.12],[165,.05]]){let w=t.createOscillator();w.frequency.value=S;let _=t.createGain();_.gain.value=M,w.connect(_),_.connect(this.hum),w.start()}let x=t.createBiquadFilter();x.type="lowpass",x.frequency.value=260,l(i).connect(x);let g=t.createGain();g.gain.value=.5,x.connect(g),g.connect(this.hum),this.air=t.createGain(),this.air.gain.value=0,this.air.connect(this.master);let m=t.createBiquadFilter();m.type="bandpass",m.frequency.value=240,m.Q.value=1.2,l(o).connect(m),m.connect(this.air);let y=t.createOscillator();y.type="sawtooth",y.frequency.value=92;let b=t.createGain();b.gain.value=.05,y.connect(b),b.connect(this.air),y.start(),this.liftG=t.createGain(),this.liftG.gain.value=0,this.liftG.connect(this.master);let v=t.createOscillator();v.type="triangle",v.frequency.value=140,v.connect(this.liftG),v.start(),this.liftOsc=v,this.ready=!0}setVolume(e){this.vol=e,this.master&&(this.master.gain.value=e)}mix(e,t,i,s,r){if(!this.ready)return;let o=this.ctx.currentTime,a=.25;this.ocean.gain.setTargetAtTime(e*.55+t*.05,o,a),this.wind.gain.setTargetAtTime(e*.12,o,a),this.hum.gain.setTargetAtTime(t*.07,o,a),this.air.gain.setTargetAtTime(i*.35,o,.15),this.liftG.gain.setTargetAtTime(s?.04:0,o,.2),s&&this.liftOsc.frequency.setTargetAtTime(s>0?170:120,o,.5)}blip(e=880,t=.08,i="sine",s=.15){if(!this.ready)return;let r=this.ctx,o=r.createOscillator(),a=r.createGain();o.type=i,o.frequency.value=e,a.gain.value=s,a.gain.setTargetAtTime(0,r.currentTime+t*.5,t*.4),o.connect(a),a.connect(this.master),o.start(),o.stop(r.currentTime+t*3)}chord(e,t=.5){e.forEach((i,s)=>setTimeout(()=>this.blip(i,t,"sine",.1),s*90))}noiseHit(e=800,t=.12,i=.2,s="bandpass",r=0){if(!this.ready)return;let o=this.ctx,a=o.createBufferSource();a.buffer=this.whiteBuf;let l=o.createBiquadFilter();l.type=s,l.frequency.value=e,l.Q.value=1.5,r&&l.frequency.exponentialRampToValueAtTime(Math.max(40,e+r),o.currentTime+t);let c=o.createGain();c.gain.value=i,c.gain.setTargetAtTime(0,o.currentTime+t*.3,t*.35),a.connect(l),l.connect(c),c.connect(this.master),a.start(0,Math.random()*1.5),a.stop(o.currentTime+t*2.5)}step(e){e==="metal"?this.noiseHit(2400+Math.random()*600,.07,.12,"bandpass"):e==="soft"?this.noiseHit(500+Math.random()*100,.08,.06,"lowpass"):this.noiseHit(1200+Math.random()*300,.06,.09,"bandpass")}door(){this.noiseHit(1800,.45,.12,"bandpass",-1500)}denied(){this.blip(220,.12,"square",.06),setTimeout(()=>this.blip(180,.16,"square",.06),130)}};var vm={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Ss=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Ud(e)}),this.register(function(e){return new Od(e)}),this.register(function(e){return new zd(e)}),this.register(function(e){return new Gd(e)}),this.register(function(e){return new Vd(e)}),this.register(function(e){return new Bd(e)}),this.register(function(e){return new Fd(e)}),this.register(function(e){return new kd(e)}),this.register(function(e){return new Hd(e)}),this.register(function(e){return new Wd(e)}),this.register(function(e){return new Xd(e)}),this.register(function(e){return new qd(e)}),this.register(function(e){return new Yd(e)}),this.register(function(e){return new Zd(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,i,s){let r=new Nd,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(i)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,s,r,t)})}},gt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Id="KHR_mesh_quantization",Gn={};Gn[Bt]=gt.NEAREST;Gn[lc]=gt.NEAREST_MIPMAP_NEAREST;Gn[Fs]=gt.NEAREST_MIPMAP_LINEAR;Gn[nn]=gt.LINEAR;Gn[zr]=gt.LINEAR_MIPMAP_NEAREST;Gn[Ln]=gt.LINEAR_MIPMAP_LINEAR;Gn[Wn]=gt.CLAMP_TO_EDGE;Gn[In]=gt.REPEAT;Gn[yr]=gt.MIRRORED_REPEAT;var _m={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},l2=new ge,bm=12,c2=1179937895,h2=2,Sm=8,u2=1313821514,d2=5130562;function Zi(n,e){return n.length===e.length&&n.every(function(t,i){return t===e[i]})}function f2(n){return new TextEncoder().encode(n).buffer}function p2(n){return Zi(n.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function m2(n,e,t){let i={min:new Array(n.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(n.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<n.itemSize;r++){let o;n.itemSize>4?o=n.array[s*n.itemSize+r]:(r===0?o=n.getX(s):r===1?o=n.getY(s):r===2?o=n.getZ(s):r===3&&(o=n.getW(s)),n.normalized===!0&&(o=ks.normalize(o,n.array))),i.min[r]=Math.min(i.min[r],o),i.max[r]=Math.max(i.max[r],o)}return i}function Mm(n){return Math.ceil(n/4)*4}function Ld(n,e=0){let t=Mm(n.byteLength);if(t!==n.byteLength){let i=new Uint8Array(t);if(i.set(new Uint8Array(n)),e!==0)for(let s=n.byteLength;s<t;s++)i[s]=e;return i.buffer}return n}function Dd(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function g2(n,e){if(typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),n.convertToBlob({type:e,quality:t})}else return new Promise(t=>n.toBlob(t,e))}var Nd=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r186"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map,normalMaps:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1,copyright:null},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;i=s.options;let a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),i.copyright&&(o.asset.copyright=i.copyright),i.binary===!0){let f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){let d=Ld(f.result),p=new DataView(new ArrayBuffer(Sm));p.setUint32(0,d.byteLength,!0),p.setUint32(4,d2,!0);let x=Ld(f2(JSON.stringify(o)),32),g=new DataView(new ArrayBuffer(Sm));g.setUint32(0,x.byteLength,!0),g.setUint32(4,u2,!0);let m=new ArrayBuffer(bm),y=new DataView(m);y.setUint32(0,c2,!0),y.setUint32(4,h2,!0);let b=bm+g.byteLength+x.byteLength+p.byteLength+d.byteLength;y.setUint32(8,b,!0);let v=new Blob([m,g,x,p,d],{type:"application/octet-stream"}),S=new FileReader;S.readAsArrayBuffer(v),S.onloadend=function(){t(S.result)}}}else if(o.buffers&&o.buffers.length>0){let f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){let d=f.result;o.buffers[0].uri=d,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let i=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(i.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let i=new C;for(let s=0,r=e.count;s<r;s++)if(Math.abs(i.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let i=e.clone(),s=new C;for(let r=0,o=i.count;r<o;r++)s.fromBufferAttribute(i,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),i.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,i),i}applyTextureTransform(e,t){let i=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),i=!0),t.rotation!==0&&(s.rotation=t.rotation,i=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),i=!0),i&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function i(d){return d.colorSpace===Gt?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof is&&(e=await this.decompressTextureAsync(e)),t instanceof is&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=Dd();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let h=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);let d=i(e),p=c.getImageData(0,0,o,a).data;for(let x=2;x<p.length;x+=4)h.data[x]=d(p[x]/256)*256}if(r){c.drawImage(r,0,0,o,a);let d=i(t),p=c.getImageData(0,0,o,a).data;for(let x=1;x<p.length;x+=4)h.data[x]=d(p[x]/256)*256}c.putImageData(h,0,0);let f=(e||t).clone();return f.source=new Gi(l),f.colorSpace=hi,f.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),f}async buildNormalMapTextureAsync(e,t,i){e instanceof is&&(e=await this.decompressTextureAsync(e));let s=e.image,r=Dd();r.width=s.width,r.height=s.height;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(s,0,0,r.width,r.height);let a=o.getImageData(0,0,r.width,r.height),l=a.data;for(let h=0;h<l.length;h+=4)t&&(l[h+0]=255-l[h+0]),i&&(l[h+1]=255-l[h+1]);o.putImageData(a,0,0);let c=e.clone();return c.source=new Gi(r),c}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,i=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),i.push(e),0}processBufferView(e,t,i,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case gt.BYTE:case gt.UNSIGNED_BYTE:a=1;break;case gt.SHORT:case gt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===gt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=Mm(s*l),h=new DataView(new ArrayBuffer(c)),u=0;for(let p=i;p<i+s;p++){for(let x=0;x<e.itemSize;x++){let g;e.itemSize>4?g=e.array[p*e.itemSize+x]:(x===0?g=e.getX(p):x===1?g=e.getY(p):x===2?g=e.getZ(p):x===3&&(g=e.getW(p)),e.normalized===!0&&(g=ks.normalize(g,e.array))),t===gt.FLOAT?h.setFloat32(u,g,!0):t===gt.INT?h.setInt32(u,g,!0):t===gt.UNSIGNED_INT?h.setUint32(u,g,!0):t===gt.SHORT?h.setInt16(u,g,!0):t===gt.UNSIGNED_SHORT?h.setUint16(u,g,!0):t===gt.BYTE?h.setInt8(u,g):t===gt.UNSIGNED_BYTE&&h.setUint8(u,g),u+=a}u%l!==0&&(u+=l-u%l)}let f={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===gt.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,o.bufferViews.push(f),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,i=t.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=Ld(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(i.bufferViews.push(a)-1)}})}processAccessor(e,t,i,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=gt.FLOAT;else if(e.array.constructor===Int32Array)a=gt.INT;else if(e.array.constructor===Uint32Array)a=gt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=gt.SHORT;else if(e.array.constructor===Uint16Array)a=gt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=gt.BYTE;else if(e.array.constructor===Uint8Array)a=gt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(i===void 0&&(i=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let l=m2(e,i,s),c;t!==void 0&&(c=e===t.index?gt.ELEMENT_ARRAY_BUFFER:gt.ARRAY_BUFFER);let h=this.processBufferView(e,a,i,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,i,s="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});let h=o.images.get(e),u=s+":flipY/"+i.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);let f={mimeType:s},d=Dd();d.width=Math.min(e.width,l.maxTextureSize),d.height=Math.min(e.height,l.maxTextureSize);let p=d.getContext("2d",{willReadFrequently:!0});if(i===!0&&(p.translate(0,d.height),p.scale(1,-1)),e.data!==void 0){t!==bn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let g=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<g.length;m+=4)g[m+0]=e.data[m+0],g[m+1]=e.data[m+1],g[m+2]=e.data[m+2],g[m+3]=e.data[m+3];p.putImageData(new ImageData(g,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)p.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(g2(d,s).then(g=>r.processBufferViewImage(g)).then(g=>{f.bufferView=g})):f.uri=Mr.getDataURL(d,s);let x=a.images.push(f)-1;return h[u]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let i={magFilter:Gn[e.magFilter],minFilter:Gn[e.minFilter],wrapS:Gn[e.wrapS],wrapT:Gn[e.wrapT]};return t.samplers.push(i)-1}async processTextureAsync(e){let i=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof is&&(e=await this.decompressTextureAsync(e,i.maxTextureSize));let o=e.userData.mimeType,a=this.processImage(e.image,e.format,e.flipY,o),l={sampler:this.processSampler(e)};o==="image/webp"?(l.extensions=l.extensions||{},l.extensions.EXT_texture_webp={source:a},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):l.source=a,e.name&&(l.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,l)});let c=r.textures.push(l)-1;return s.textures.set(e,c),c}async processMaterialAsync(e,t){let i=this.cache,s=this.json,r=t!==void 0&&t.hasAttribute("tangent"),o=e.normalMap?e.uuid+":"+r:e.uuid;if(i.materials.has(o))return i.materials.get(o);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);let a={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let l=e.color.toArray().concat([e.opacity]);if(Zi(l,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=l),e.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=e.metalness,a.pbrMetallicRoughness.roughnessFactor=e.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let h=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),u={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(u,h),a.pbrMetallicRoughness.metallicRoughnessTexture=u}if(e.map){let h={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(h,e.map),a.pbrMetallicRoughness.baseColorTexture=h}if(e.emissive){let h=e.emissive;if(Math.max(h.r,h.g,h.b)>0&&(a.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let f={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(f,e.emissiveMap),a.emissiveTexture=f}}if(e.normalMap){let h=e.normalScale,u=h.x<0,f=r?h.y<0:h.y>0,d=e.normalMap;if(u||f){i.normalMaps.has(e.normalMap)===!1&&i.normalMaps.set(e.normalMap,{});let x=i.normalMaps.get(e.normalMap),g=`${u}:${f}`;x[g]===void 0&&(x[g]=await this.buildNormalMapTextureAsync(e.normalMap,u,f)),d=x[g]}let p={index:await this.processTextureAsync(d),texCoord:e.normalMap.channel};Math.abs(h.x)!==1&&(p.scale=Math.abs(h.x)),this.applyTextureTransform(p,e.normalMap),a.normalTexture=p}if(e.aoMap){let h={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(h.strength=e.aoMapIntensity),this.applyTextureTransform(h,e.aoMap),a.occlusionTexture=h}e.transparent?a.alphaMode="BLEND":e.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=e.alphaTest),e.side===$t&&(a.doubleSided=!0),e.name!==""&&(a.name=e.name),this.serializeUserData(e,a),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(e,a)});let c=s.materials.push(a)-1;return i.materials.set(o,c),c}async processMeshAsync(e){let t=this.cache,i=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let v=0,S=e.material.length;v<S;v++)s.push(e.material[v].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=gt.LINES:e.isLineLoop?a=gt.LINE_LOOP:e.isLine?a=gt.LINE_STRIP:e.isPoints?a=gt.POINTS:a=e.material.wireframe?gt.LINES:gt.TRIANGLES;let l={},c={},h=[],u=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let p=null;for(let v in o.attributes){if(v.slice(0,5)==="morph")continue;let S=o.attributes[v];if(v=f[v]||v.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)&&!v.startsWith("_")&&(v="_"+v),t.attributes.has(this.getUID(S))){c[v]=t.attributes.get(this.getUID(S));continue}p=null;let w=S.array;v==="JOINTS_0"&&!(w instanceof Uint16Array)&&!(w instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=Ss.Utils.toTypedBufferAttribute(S,Uint16Array)):(w instanceof Uint32Array||w instanceof Int32Array)&&!v.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${v}" converted to type FLOAT.`),p=Ss.Utils.toTypedBufferAttribute(S,Float32Array));let _=this.processAccessor(p||S,o);_!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,S),c[v]=_,t.attributes.set(this.getUID(S),_))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let v=[],S=[],M={};if(e.morphTargetDictionary!==void 0)for(let w in e.morphTargetDictionary)M[e.morphTargetDictionary[w]]=w;for(let w=0;w<e.morphTargetInfluences.length;++w){let _={},T=!1;for(let A in o.morphAttributes){if(A!=="position"&&A!=="normal"){T||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),T=!0);continue}let P=o.morphAttributes[A][w],L=A.toUpperCase(),U=o.attributes[A];if(t.attributes.has(this.getUID(P,!0))){_[L]=t.attributes.get(this.getUID(P,!0));continue}let D=P.clone();if(!o.morphTargetsRelative)for(let N=0,z=P.count;N<z;N++)for(let B=0;B<P.itemSize;B++)B===0&&D.setX(N,P.getX(N)-U.getX(N)),B===1&&D.setY(N,P.getY(N)-U.getY(N)),B===2&&D.setZ(N,P.getZ(N)-U.getZ(N)),B===3&&D.setW(N,P.getW(N)-U.getW(N));_[L]=this.processAccessor(D,o),t.attributes.set(this.getUID(U,!0),_[L])}u.push(_),v.push(e.morphTargetInfluences[w]),e.morphTargetDictionary!==void 0&&S.push(M[w])}l.weights=v,S.length>0&&(l.extras={},l.extras.targetNames=S)}let x=Array.isArray(e.material);if(x&&o.groups.length===0)return null;let g=!1;if(x&&o.index===null){let v=[];for(let S=0,M=o.attributes.position.count;S<M;S++)v[S]=S;o.setIndex(v),g=!0}let m=x?e.material:[e.material],y=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,S=y.length;v<S;v++){let M={mode:a,attributes:c};if(this.serializeUserData(o,M),u.length>0&&(M.targets=u),o.index!==null){let _=this.getUID(o.index);(y[v].start!==void 0||y[v].count!==void 0)&&(_+=":"+y[v].start+":"+y[v].count),t.attributes.has(_)?M.indices=t.attributes.get(_):(M.indices=this.processAccessor(o.index,o,y[v].start,y[v].count),t.attributes.set(_,M.indices)),M.indices===null&&delete M.indices}let w=await this.processMaterialAsync(m[y[v].materialIndex],o);w!==null&&(M.material=w),h.push(M)}g===!0&&o.setIndex(null),l.primitives=h,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(v){v.writeMesh&&v.writeMesh(e,l)});let b=i.meshes.push(l)-1;return t.meshes.set(r,b),b}detectMeshQuantization(e,t){if(this.extensionsUsed[Id])return;let i;switch(t.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}t.normalized&&(i+=" normalized");let s=e.split("_",1)[0];vm[s]&&vm[s].includes(i)&&(this.extensionsUsed[Id]=!0,this.extensionsRequired[Id]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let i=e.isOrthographicCamera,s={type:i?"orthographic":"perspective"};return i?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:ks.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let i=this.json,s=this.nodeMap;i.animations||(i.animations=[]),e=Ss.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let h=r[c],u=Tt.parseTrackName(h.name),f=Tt.findNode(t,u.nodeName),d=_m[u.propertyName];if(u.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(u.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let p=1,x=h.values.length/h.times.length;d===_m.morphTargetInfluences&&(x/=f.morphTargetInfluences.length);let g;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",x/=3):h.getInterpolation()===Cs?g="STEP":g="LINEAR",a.push({input:this.processAccessor(new dt(h.times,p)),output:this.processAccessor(new dt(h.values,x)),interpolation:g}),o.push({sampler:a.length-1,target:{node:s.get(f),path:d}})}let l={name:e.name||"clip_"+i.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),i.animations.push(l),i.animations.length-1}processSkin(e){let t=this.json,i=this.nodeMap,s=t.nodes[i.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new Be;for(let u=0;u<r.bones.length;++u)a.push(i.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new dt(l,16)),joints:a,skeleton:i.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,i=this.options,s=this.nodeMap;if(t.nodes||(t.nodes=[]),e.pivot!==null)return await this._processNodeWithPivotAsync(e);let r={};if(i.trs){let a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Zi(a,[0,0,0,1])||(r.rotation=a),Zi(l,[0,0,0])||(r.translation=l),Zi(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),p2(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){let a=[];for(let l=0,c=e.children.length;l<c;l++){let h=e.children[l];if(h.visible||i.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async _processNodeWithPivotAsync(e){let t=this.json,i=this.options,s=this.nodeMap,r=e.pivot,o={},a=e.quaternion.toArray(),l=[e.position.x+r.x,e.position.y+r.y,e.position.z+r.z],c=e.scale.toArray();Zi(a,[0,0,0,1])||(o.rotation=a),Zi(l,[0,0,0])||(o.translation=l),Zi(c,[1,1,1])||(o.scale=c),o.extras={pivot:r.toArray()},e.name!==""&&(o.name=String(e.name)),this.serializeUserData(e,o);let h=t.nodes.push(o)-1;s.set(e,h);let u={},f=[-r.x,-r.y,-r.z];if(Zi(f,[0,0,0])||(u.translation=f),e.isMesh||e.isLine||e.isPoints){let x=await this.processMeshAsync(e);x!==null&&(u.mesh=x)}else e.isCamera&&(u.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let p=[t.nodes.push(u)-1];if(e.children.length>0){let x=[];for(let g=0,m=e.children.length;g<m;g++){let y=e.children[g];if(y.visible||i.onlyVisible===!1){let b=await this.processNodeAsync(y);b!==null&&x.push(b)}}x.length>0&&(u.children=x)}return o.children=p,await this._invokeAllAsync(function(x){x.writeNode&&x.writeNode(e,o)}),h}async processSceneAsync(e){let t=this.json,i=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let o=0,a=e.children.length;o<a;o++){let l=e.children[o];if(l.visible||i.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new qn;t.name="AuxScene";for(let i=0;i<e.length;i++)t.children.push(e[i]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let i=[];for(let s=0;s<e.length;s++)e[s]instanceof qn?await this.processSceneAsync(e[s]):i.push(e[s]);i.length>0&&await this.processObjectsAsync(i);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);if(e.length===1)for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);else for(let s=0;s<e.length;s++){let r=t.animations[s]||[];for(let o=0;o<r.length;++o)this.processAnimation(r[o],e[s])}await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,i=this.plugins.length;t<i;t++)await e(this.plugins[t])}},Ud=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let i=this.writer,s=i.json,r=i.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},Od=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},Fd=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await i.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};i.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await i.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await i.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),i.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},kd=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Hd=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await i.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};i.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:await i.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};i.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},zd=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await i.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};i.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Gd=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await i.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};i.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Vd=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Bd=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(l2)&&!e.specularIntensityMap&&!e.specularColorMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await i.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};i.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await i.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};i.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Wd=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await i.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};i.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await i.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};i.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Xd=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await i.processTextureAsync(e.anisotropyMap)};i.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},qd=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Yd=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(e.bumpMap){let o={index:await i.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};i.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Zd=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let i=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new Be,c=new C,h=new tn,u=new C;for(let d=0;d<s.count;d++)s.getMatrixAt(d,l),l.decompose(c,h,u),c.toArray(r,d*3),h.toArray(o,d*4),u.toArray(a,d*3);let f={TRANSLATION:i.processAccessor(new dt(r,3)),ROTATION:i.processAccessor(new dt(o,4)),SCALE:i.processAccessor(new dt(a,3))};s.instanceColor&&(f._COLOR_0=i.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:f},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}};Ss.Utils={insertKeyframe:function(n,e){let i=n.getValueSize(),s=new n.TimeBufferType(n.times.length+1),r=new n.ValueBufferType(n.values.length+i),o=n.createInterpolant(new n.ValueBufferType(i)),a;if(n.times.length===0){s[0]=e;for(let l=0;l<i;l++)r[l]=0;a=0}else if(e<n.times[0]){if(Math.abs(n.times[0]-e)<.001)return 0;s[0]=e,s.set(n.times,1),r.set(o.evaluate(e),0),r.set(n.values,i),a=0}else if(e>n.times[n.times.length-1]){if(Math.abs(n.times[n.times.length-1]-e)<.001)return n.times.length-1;s[s.length-1]=e,s.set(n.times,0),r.set(n.values,0),r.set(o.evaluate(e),n.values.length),a=s.length-1}else for(let l=0;l<n.times.length;l++){if(Math.abs(n.times[l]-e)<.001)return l;if(n.times[l]<e&&n.times[l+1]>e){s.set(n.times.slice(0,l+1),0),s[l+1]=e,s.set(n.times.slice(l+1),l+2),r.set(n.values.slice(0,(l+1)*i),0),r.set(o.evaluate(e),(l+1)*i),r.set(n.values.slice((l+1)*i),(l+2)*i),a=l+1;break}}return n.times=s,n.values=r,a},mergeMorphTargetTracks:function(n,e){let t=[],i={},s=n.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=Tt.parseTrackName(o.name),l=Tt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(vr)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(i[l.uuid]===void 0){u=o.clone();let d=new u.ValueBufferType(c*u.times.length);for(let p=0;p<u.times.length;p++)d[p*c+h]=u.values[p];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=d,i[l.uuid]=u,t.push(u);continue}let f=o.createInterpolant(new o.ValueBufferType(1));u=i[l.uuid];for(let d=0;d<u.times.length;d++)u.values[d*c+h]=f.evaluate(u.times[d]);for(let d=0;d<o.times.length;d++){let p=this.insertKeyframe(u,o.times[d]);u.values[p*c+h]=o.values[d]}}return n.tracks=t,n},toTypedBufferAttribute:function(n,e){let t=new dt(new e(n.count*n.itemSize),n.itemSize,!1);if(!n.normalized&&!n.isInterleavedBufferAttribute)return t.array.set(n.array),t;for(let i=0,s=n.count;i<s;i++)for(let r=0;r<n.itemSize;r++)t.setComponent(i,r,n.getComponent(i,r));return t}};async function $d(n,e){let t=new qn;t.name="AEGIS_Colony";let i=new Map;for(let a of n){let[l,c]=a.name.split(":"),h=i.get(l);h||(h=new it,h.name="SM_"+l,i.set(l,h),t.add(h));let u=new J(P0(a.geometry.clone(),1e-4),a.material);u.name="SM_"+l+"_"+(c||"mat"),h.add(u)}e&&e("Packing "+n.length+" meshes\u2026");let r=await new Ss().parseAsync(t,{binary:!0,onlyVisible:!1,maxTextureSize:1024});return new Blob([r],{type:"model/gltf-binary"})}function Em(n,e){let t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=e,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},2e3)}var Tm=()=>new Promise(n=>setTimeout(n,0));async function x2(){let n=new Dh,e=async(G,F)=>{n.progress(G,F),await Tm()},t=document.getElementById("view"),i;try{i=p0(t)}catch(G){throw n.progress(0,"WebGL is not available on this device/browser."),G}let s=new qn;s.fog=new Io(pd,85e-5);let r=new un(72,innerWidth/innerHeight,.12,14e3);r.layers.enable(1),r.layers.enable(2),s.add(r),await e(.02,"Generating surface materials\u2026");let o=0,a=await T0(async G=>{o++,await e(.02+o/18*.36,"Texturing \xB7 "+G)}),l=w0(a),c=A0();await e(.4,"Laying the hull and decks\u2026");let h=new mh(6),u=new ph(h),f={scene:s,M:l,marks:{},doors:[],creatures:[],pods:[],holoSpots:[],blinkers:[],turbines:[],foam:[]};am(u,l,c.S,f),await e(.6,"Floating the satellite platforms\u2026"),lm(u,l,c.S,f),sm(u,l,c.S,f),await e(.7,"Merging geometry\u2026");let d=u.finalize(s);console.info(`[AEGIS] hidden faces: ${u.dedupe.cut} triangles trimmed into ${u.dedupe.added} in ${u.dedupe.pieces} pieces, ${u.dedupe.skipped} left whole (${u.dedupe.ms} ms)`),console.info(`[AEGIS] ${d.length} batches, ${(u.tris/1e6).toFixed(2)}M tris, ${h.all.length} colliders, ${u.lights.length} light anchors`),await e(.78,"Lighting the sky\u2026");let{sky:p,envCube:x}=m0(s,i),g=g0(s),m=cm(i,x,a.waterNormals,Da,2);s.add(m.mesh),f.foam.slice(0,8).forEach((G,F)=>m.discs[F].set(G[0],G[1],G[2],G[3])),m.mesh.getReflectionCamera(r).layers.set(0);let y=x0(s,a.mist),b=[];for(let G=0;G<8;G++){let F=G*Math.PI/4,Z=Math.sin(F),Y=Math.cos(F),ye=Y,de=-Z,nt=54.6*Math.tan(Math.PI/8);for(let Je=-nt;Je<=nt;Je+=3)b.push([Z*54.8+ye*Je,Y*54.8+de*Je,Z,Y])}for(let[G,F,Z]of f.foam)for(let Y=0,ye=Math.max(6,Math.round(Z*2*Math.PI/3));Y<ye;Y++){let de=Y/ye*Math.PI*2;b.push([G+Math.sin(de)*Z,F+Math.cos(de)*Z,Math.sin(de),Math.cos(de)])}let v=fm(s,a.mist,b);await e(.86,"Waking the drones\u2026");let S=3*Math.PI/4;f.gantryAxis=new C(Math.cos(S),0,-Math.sin(S)),f.gantryYaw=S;let M=dm(s,l,a,f,m);(f.staticGlows||[]).forEach((G,F)=>{let Z=m.glows[32+F];Z&&Z.set(G[0],G[1],G[2],G[3])});let w=y0(i,s,r),_=new Nh,T=new Lh({renderer:i,scene:s,camera:r,world:h,ctx:f,M:l,T:a,screens:c,life:M,ocean:m,audio:_,ui:n,anchors:u.lights});T.onExport=async()=>{if(!T._exporting){T._exporting=!0,n.toast("Exporting the colony for Unreal\u2026 this takes a few seconds","warn"),await Tm();try{let G=await $d(d,F=>n.toast(F));Em(G,"AEGIS_Colony.glb"),n.toast("Saved AEGIS_Colony.glb \xB7 "+(G.size/1048576).toFixed(1)+" MB","ok")}catch(G){console.error(G),n.toast("Export failed: "+G.message,"bad")}T._exporting=!1}},window.__exportLevel=()=>$d(d);let A=1,P=()=>{let G=innerWidth,F=innerHeight;i.setSize(G,F,!1),r.aspect=G/F,r.updateProjectionMatrix(),w.composer.setPixelRatio(i.getPixelRatio()),w.composer.setSize(G,F),m.resize(G*A,F*A)};T.onQuality=G=>{let F=window.devicePixelRatio||1;A=[Math.min(F,1)*.7,Math.min(F,1),Math.min(F,1.25),Math.min(F,2)][G]||1,i.setPixelRatio(A),g.setShadowSize([0,2048,4096,4096][G]),m.setPlanar(G>=2,G>=3?.75:.5),w.bloom.enabled=G>=1,w.ao.enabled=G>=2,y.group.visible=G>=1,v.points.visible=G>=1,P()};try{!localStorage.getItem("aegis.settings")&&(matchMedia("(pointer:coarse)").matches||innerWidth<900)&&(T.settings.q=1)}catch{}T.applySettings(),addEventListener("resize",P),await e(.94,"Compiling shaders\u2026"),T.updateTitle(.016,0),g.follow(new C(0,0,0)),i.compile(s,r),w.composer.render(.016),await e(1,"Ready");let L=new C,U=new oa,D=0,N=0,z=0;i.info.autoReset=!1,window.AEGIS={game:T,ctx:f,world:h,scene:s,camera:r,renderer:i,life:M,ocean:m,M:l,post:w,mist:y,sunCtl:g,sky:p};function B(){requestAnimationFrame(B);let G=Math.min(U.getDelta(),.05);D+=G,T.update(G,D),M.update(D,G,r),c.update(G,D),m.update(D,r),y.update(G,r),v.update(G,D,r),T.mode==="title"?L.set(0,0,0):L.copy(r.position),g.follow(L),p.material.uniforms.time&&(p.material.uniforms.time.value=D);let F=l.leaf.userData.shader;F&&(F.uniforms.uTime.value=D),l.cryoFluid.emissiveIntensity=T.cryoGlow(D),l.growLight.emissiveIntensity=5+Math.sin(D*.5)*.5,w.grade.uniforms.uTime.value=D,i.info.reset(),w.composer.render(G),N++,z+=G,z>.5&&(T.settings.fps&&(n.el.fps.textContent=`${Math.round(N/z)} FPS \xB7 ${i.info.render.calls} draws \xB7 ${(i.info.render.triangles/1e6).toFixed(2)}M tris`),N=0,z=0)}T.showTitle(),B()}x2().catch(n=>{console.error(n);let e=document.getElementById("load-status");e&&(e.textContent="Error: "+n.message)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
